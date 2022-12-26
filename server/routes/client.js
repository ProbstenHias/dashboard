import express from "express";
import { getProcuts } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProcuts);

export default router;
