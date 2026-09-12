import { Router } from "express";
import urlController from "../controllers/url.controller.js";
import validateUrl from "../middleware/validateURL.js";

const router = Router();

router.post("/", validateUrl, urlController.create);
router.get("/", urlController.getAll);
router.delete("/:shortCode", urlController.delete);

export default router;
