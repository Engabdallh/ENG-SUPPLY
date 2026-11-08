
const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const db = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;

const frontendPath = path.join(__dirname, "../frontend/dist");

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
const healthRoutes = require("./routes/health.routes");

app.use("/api/health", healthRoutes);

// Serve React Frontend
app.use(express.static(frontendPath));

// React Router Fallback
app.use((req, res, next) => {
  if (
    req.method === "GET" &&
    req.accepts("html") &&
    !req.path.startsWith("/api/")
  ) {
    return res.sendFile(
      path.join(frontendPath, "index.html")
    );
  }

  next();
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

    app.listen(PORT, "0.0.0.0", () => {
      console.log("ENG SUPPLY SERVER STARTED");
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
}

startServer();
