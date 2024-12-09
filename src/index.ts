import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send(process.env.NAME);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
