import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
import { db } from "../connect.js";

// GET ALL COMMENTS
export const getReviews = (req, res) => {
  const q = "SELECT * FROM reviws WHERE userid = ? ORDER BY reviewedAt DESC";
  db.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// ADD NEW COMMENT
// ADDING NEW POSTS
export const addReview = async (req, res) => {
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
