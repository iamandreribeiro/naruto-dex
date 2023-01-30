import express from "express";
import { deleteNinja, insertNinja, selectNinjas, updateNinja, selectNinjaById } from "../controllers/ninjas-controller.js";

const router = express.Router();

router.post("/ninjas", insertNinja);
router.get("/ninjas", selectNinjas);
router.patch("/ninjas/:id", updateNinja);
router.delete("/ninjas", deleteNinja);
router.get("/ninjas/:id", selectNinjaById);

export default router;