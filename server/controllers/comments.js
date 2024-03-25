import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
import { db } from "../connect.js";

// GET ALL COMMENTS
export const getComments = (req, res) => {
  const q =
    "SELECT c.*, u.id AS userId, firstName, lastName FROM comments AS c JOIN users AS u ON (c.userid = u.id) WHERE c.postid = ? ORDER BY c.createdAt DESC";
  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// ADD NEW COMMENT
// ADDING NEW POSTS
export const addComment = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Unauthorized. Please login");
  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(401).json("Token not valid. Please login.");

    const q =
      "INSERT INTO comments (`desc`, `createdAt`, `userid`, `postid`) VALUE (?)";

    const values = [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("comment has been created");
    });
  });
};
