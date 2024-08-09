import express from "express";
import { registerHOD, loginHOD } from "../controllers/authController.js";
import retrieveHod from "../controllers/retrieveHod.js";

const router = express.Router();

router.post("/registerHOD", registerHOD);
router.post("/loginHOD", loginHOD);
router.get("/hod", retrieveHod);

export default router;
