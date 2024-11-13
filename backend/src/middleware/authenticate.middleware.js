import jwt from "jsonwebtoken";
import User from "../model/user.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization")
    
    if (!token) {
      return res.status(401).json({ message: "no token" });
    }

    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    console.log(email);

    const response = await User.find({ email });
    if (!response) {
      return res.status(401).json({ message: "user not found" });
    }

    req.user = response[0];
    next();
  } catch (err) {
    console.error("Error in authentication middleware:", err);
    res.status(401).json({ message: "token not valid" });
  }
};

export default authenticate;
