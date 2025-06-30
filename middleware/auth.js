const { verifyToken } = require("../utils/jwt");

const auth = (roles = []) => {
  return async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    try {
      const decoded = verifyToken(token);
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ error: "Unauthorized" });
      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ error: "Forbidden" });
      }
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
    }
  };
};

module.exports = auth;