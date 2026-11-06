
const errorMiddleware = (err, req, res, next) => {
  console.error("API Error:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
    }),
  });
};

module.exports = errorMiddleware;

/*
هذا الـ Middleware مسؤول عن:
- استقبال الأخطاء من جميع Routes.
- تحديد HTTP Status Code.
- إرسال رسالة خطأ واضحة للـ Frontend.
- إظهار تفاصيل الخطأ أثناء التطوير فقط.
*/