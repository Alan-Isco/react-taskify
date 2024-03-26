import { db } from "../connect.js";

// FETCHING ALL THE POSTS
export const getCategories = async (req, res) => {
  const q =
    "SELECT p.*, u.id AS userId, firstName, lastName FROM profile AS p JOIN users AS u  ON (p.userId = u.id)";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
