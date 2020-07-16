import express from "express";
import routes from "../routes";
import { users, editProfile, changePassword, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, (req,res) => users);
userRouter.get(routes.editProfile,(req, res) => editProfile);
userRouter.get(routes.changePassword,(req, res) => changePassword);
userRouter.get(routes.userDetail, (req,res) => userDetail);
export default userRouter;