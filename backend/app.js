require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const paymentRoutes = require("./routes/payment");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Paperfires Store API Running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
