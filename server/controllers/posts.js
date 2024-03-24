import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
import { db } from "../connect.js";

// FETCHING ALL THE POSTS
export const getPosts = async (req, res) => {
  const q =
    "SELECT p.*, u.id AS userId, firstName, lastName FROM posts AS p JOIN users AS u ON (p.clientid = u.id) ORDER BY p.createdAt DESC";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// ADDING NEW POSTS
export const addPost = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Unauthorized. Please login");
  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(401).json("Token not valid. Please login.");

    const q =
      "INSERT INTO posts (`clientid`, `jobTitle`, `jobDesc`, `category`, `duration`, `experience`, `budget`, `location`, `file`, `createdAt`) VALUE (?)";

    const values = [
      userInfo.id,
      req.body.jobTitle,
      req.body.jobDesc,
      req.body.category,
      req.body.duration,
      req.body.exp,
      req.body.budget,
      req.body.location,
      req.body.file,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    });
  });
};
