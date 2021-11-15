import express from "express";
import { edit, remove, see, logout } from "../controllers/userController";

const userRouter = express.Router();

const handleEditUser = (request, response) => {
  return response.send("Edit User!");
};

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;
