import { getUserByEmail } from "../services/user.service.js";

const checkUser = async (req, res, next) => {
  try {
    const email = req.params.id;
    const user = await getUserByEmail(email);
    console.log(user);
    
    // check if the user exists
    if (!user) {
      // return 400 if user not found
      return res.status(400).json({ status: "user not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error in checkUser middleware:", err);
    res.status(500).json({ status: "error occurred" });
  }
};

export default checkUser;
