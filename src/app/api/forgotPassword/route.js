// const express = require("express");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");
// const db = require("../database");

// const router = express.Router();
// const SECRET_KEY = "12345";

// router.post("/forgotPassword", (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ message: "Email is required" });
//   }

//   db.get(`SELECT * FROM customers WHERE email = ?`, [email], (err, user) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json({ message: "Internal server error" });
//     }

//     if (!user) {
//       return res.status(400).json({ message: "Email not found" });
//     }

//     const resetToken = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "15m" });
//     const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: "your-email@gmail.com",
//         pass: "your-email-password",
//       },
//     });

//     const mailOptions = {
//       from: "your-email@gmail.com",
//       to: email,
//       subject: "Password Reset",
//       text: `Click the link to reset your password: ${resetLink}`,
//     };

//     transporter.sendMail(mailOptions, (err) => {
//       if (err) {
//         console.error("Error sending email:", err.message);
//         return res.status(500).json({ message: "Failed to send email" });
//       }
//       res.status(200).json({ message: "Password reset link sent successfully!" });
//     });
//   });
// });

// module.exports = router;
