import { Router } from "express";

const authRoute = Router();

authRoute.post("/login", login)
authRoute.put("/signup", signup);