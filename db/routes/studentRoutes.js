import express from "express";

import { getStudents } from "../controllers/studentController.js";

import { createStudents } from "../controllers/studentController.js";

const router = express.Router();

router.post('/log', getStudents)
router.post('/', createStudents)


export default router