import { mongoose } from "mongoose";
import Post from "./model/post.js";
import User from "./model/user.js";
import {
    deleteAllPosts,
    deletePostById,
    createPost,
    findPostsByUsername,
    findPostsByHashtag,
    findPostsByFeed,
    createTestPosts
  } from "./services/post.service.js";

import {
    deleteAllUsers,
    createUser,
    findUserByUsername,
    unfollowUser,
    followUser,
    createTestUsers
  } from "./services/user.service.js";

import "dotenv/config";

//const DB_NAME = 'bktest';

//const mongoConnectUrl = process.env.MONGO_CONNECT_URL //Ex: mongodb+srv://<user>:<password>@cpsc499-lads.czvu4.mongodb.net/
//const mongoConnectParams = process.env.MONGO_CONNECT_PARAMS //Ex: ?retryWrites=true&w=majority&appName=CPSC499-LADS
//const mongoConnectStr = mongoConnectUrl + DB_NAME + mongoConnectParams;
const mongoConnectStr = process.env.MONGO_CONNECT_STR

const mongoConnect = async () => {
  await mongoose.connect(mongoConnectStr);
  console.log(`DB connected`);
};
  

const main = async() => {

    //connect to DB
    await mongoConnect();

    try{

        //DELETE all posts then CREATE test Users
        await deleteAllUsers();
        await createTestUsers();


        //DELETE all posts then CREATE a bunch of test Posts
        await deleteAllPosts();
        await createTestPosts();


    } catch(err) {
        console.log(err);
    }
    finally{
        mongoose.connection.close();
        console.log("DB Connection Closed");
    }
}

//call main loop
main();

