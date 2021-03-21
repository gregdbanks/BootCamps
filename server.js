const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const morgan = require("morgan");

const app = express();

// Route files
const bootcamps = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledrejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
