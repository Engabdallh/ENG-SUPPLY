
const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
};

module.exports = notFoundMiddleware;

/*
هذا الملف مسؤول عن الروابط غير الموجودة، مثلاً لو تم طلب 
API
 غير معرف، يرجع  رد 404 بصيغة 
 JSON.
*/