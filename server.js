const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/transactions", transactions);

// __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/",async(req,res,next)=>{
  return res.status(200).json({message:"Hi welcome to the backend"});
})

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running at port ${PORT}`.yellow.bold));
