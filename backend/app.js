
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const healthRoutes = require("./routes/health.routes");

app.use("/api/health", healthRoutes);

// Main route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to ENG SUPPLY API 🚀",
  });
});

// Not Found Middleware
const notFoundMiddleware = require("./middleware/notFound.middleware");
app.use(notFoundMiddleware);

// Error Middleware
const errorMiddleware = require("./middleware/error.middleware");
app.use(errorMiddleware);

// Start Server
async function startServer() {
  try {
    await db.query("SELECT 1");

    console.log("MySQL Connected Successfully! 🚀");

    app.listen(PORT, () => {
      console.log("\n=================================");
      console.log("🚀 ENG SUPPLY SERVER STARTED");
      console.log("=================================");
      console.log(`🌐 Local: http://localhost:${PORT}`);
      console.log(`❤️ Health: http://localhost:${PORT}/api/health`);
      console.log("=================================\n");
    });
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
}

startServer();
