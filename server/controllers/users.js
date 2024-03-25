import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
import { db } from "../connect.js";

// FETCHING PROFILE DATA
export const getProfile = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Unauthorized. Please login");

  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(401).json("Token not valid. Please login.");

    const q = "SELECT * FROM profile WHERE userId = ?";
    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

// ADDING PROFILE DATA
export const updateProfile = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Unauthorized. Please login");
  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(401).json("Token not valid. Please login.");

    const q =
      "UPDATE  (`clientid`, `jobTitle`, `jobDesc`, `category`, `duration`, `experience`, `budget`, `location`, `file`, `createdAt`) VALUE (?)";

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
