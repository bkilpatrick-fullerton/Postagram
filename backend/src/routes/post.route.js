import { Router } from "express";
//import User from "../model/user.js";
//import checkUser from "../middleware/checkuser.middleware.js";
import authenticate from "../middleware/authenticate.middleware.js";

import {
    createNewPost,
    getPostsByFeed,
    getPostsByUsername,
    getPostsByHashtag,
    removePostById,
    update_likes
} from "../controller/post.controller.js";


const postRoute = Router();

postRoute.post('/', validateUser, createNewPost);
postRoute.get('/',  authenticate, getPostsByFeed);
postRoute.get("/u/:username", authenticate, getPostsByUsername);
postRoute.get("/hashtag/:hashtag", authenticate, getPostsByHashtag);
postRoute.delete("/delete-post", authenticate, removePostById);
postRoute.put('/', authenticate, update_likes)
postRoute.get('/search', validateUser, getPostsBySearch);


export default postRoute;
