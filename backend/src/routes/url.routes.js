import { Router } from "express";
import urlController from "../controllers/url.controller.js";
import validateUrl from "../middleware/validateURL.js";
import validatePagination from "../middleware/validatePagination.js";

const router = Router();

router.post("/", validateUrl, urlController.create);
router.get("/", validatePagination, urlController.getAll);
router.delete("/:id", urlController.delete);

export default router;
