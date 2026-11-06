
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ENG SUPPLY API is healthy 🚀",
    status: "OK",
  });
});

module.exports = router;

/*هذا الملف رح يكون مسؤول عن فحص حالة السيرفر والـ API.*/