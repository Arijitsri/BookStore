import express from "express";
import { deletebook, getBook, postBook, updateBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/", postBook);
router.delete("/:id",deletebook )
router.put("/:id", updateBook)

export default router;