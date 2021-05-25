import express from "express";

import {
  postUser,
  getByUser
} from "./user/index";

const userRoutes = express.Router();

userRoutes.post("/", postUser());
userRoutes.getByUser("/", getByUser());

export default userRoutes;
