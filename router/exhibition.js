import express from "express";
import "express-async-errors";
import * as exhibitionController from "../controller/exhibition.js";

const router = express.Router();

// GET /exhibition
router.get("/", exhibitionController.getExhibitions);

router.get("/:id", exhibitionController.getExhibition);

export default router;
