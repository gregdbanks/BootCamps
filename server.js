const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Route files
const bootcamps = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is firing up in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
