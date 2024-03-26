// FETCHING ALL THE POSTS
export const getCategories = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Unauthorized. Please login");

  jwt.verify(token, process.env.SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(401).json("Token not valid. Please login.");

    const q =
      "SELECT p.*, u.id AS userId, firstName, lastName FROM posts AS p JOIN users AS u ON (p.clientid = u.id) ORDER BY p.createdAt DESC";
    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
