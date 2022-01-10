import express from "express";
import "express-async-errors";
import * as goodsController from "../controller/goods.js";

const router = express.Router();

// GET /goods
router.get("/", goodsController.getgoods);

export default router;
