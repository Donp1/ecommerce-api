import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("List of Products");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Get Product with id ${id}`);
});

export default router;
