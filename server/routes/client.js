import express from "express";
import { getProcuts, getCustomers } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProcuts);
router.get("/customers", getCustomers);

export default router;
