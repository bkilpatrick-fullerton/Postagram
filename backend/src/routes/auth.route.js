import { Router } from "express";
import checkUser from "../middleware/checkuser.middleware";

const authRoute = Router();

authRoute.post("/login", checkUser, login)
authRoute.put("/signup", signup);