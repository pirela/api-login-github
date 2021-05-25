import express from "express";

import { postUser, getByUser } from "./routes/user/index";

const authRoutes = express.Router();

authRoutes.post("/sing-up", postUser());
authRoutes.get("/:usuario", getByUser());

export default authRoutes;
