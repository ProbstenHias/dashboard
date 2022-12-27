import express from "express";
import { getProcuts, getCustomers, getTransactions } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProcuts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

export default router;
