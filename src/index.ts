import express from "express";
import "dotenv/config";
import router from "./routes/products";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
