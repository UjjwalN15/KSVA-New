// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const db = require("../database");

// const router = express.Router();
// const SECRET_KEY = "12345";

// router.post("/", (req, res) => {
//   const { token, newPassword } = req.body;

//   if (!token || !newPassword) {
//     return res.status(400).json({ message: "Token and new password are required" });
//   }

//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     const email = decoded.email;

//     const hashedPassword = bcrypt.hashSync(newPassword, 10);
//     db.run(`UPDATE customers SET password = ? WHERE email = ?`, [hashedPassword, email], (err) => {
//       if (err) {
//         console.error("Database error:", err.message);
//         return res.status(500).json({ message: "Internal server error" });
//       }
//       res.status(200).json({ message: "Password reset successfully!" });
//     });
//   } catch (err) {
//     console.error("Invalid or expired token:", err.message);
//     res.status(403).json({ message: "Invalid or expired token" });
//   }
// });

// module.exports = router;
