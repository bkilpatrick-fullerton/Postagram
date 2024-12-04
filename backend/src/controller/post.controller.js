//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

//import Post from "./model/post.js";
import {
    deleteAllPosts,
    deletePostById,
    createPost,
    findPostsByUsername,
    findPostsByHashtag,
    findPostsByFeed,
    createTestPosts
  } from "../services/post.service.js";

export const createNewPost = async (req, res) => {
    try {
      const post = req.body;
      const newPost = await createPost(post);
      res.status(200).json({posts: newPost});
    } catch (err) {
      console.log(err);
    }
};

export const getPostsByFeed = async (req, res) => {
  try {
    const username = req.body.username;
    const posts = await findPostsByFeed(username);
    res.status(200).json({posts});
  } catch (err) {
    console.log(err);
  }
};

export const getPostsByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const posts = await findPostsByUsername(username);
    res.status(200).json({posts});
  } catch (err) {
    console.log(err);
  }
};

export const getPostsByHashtag = async (req, res) => {
  try {
    const hashtag = req.params.hashtag;
    const posts = await findPostsByHashtag(hashtag);
    res.status(200).json({posts});
  } catch (err) {
    console.log(err);
  }
};

export const removePostById = async (req, res) => {
  try {
    const _id = req.body._id;
    const deletedPost = await deletePostById(_id);
    res.status(200).json({posts: [deletedPost]});
  } catch (err) {
    console.log(err);
  }
};

export const update_likes = async (req, res) => {
  const { id: postId, increment: toIncrement } = req.body;
  const username = getCookie(req)
    .find((cookie) => cookie.startsWith('username'))
    .split('=')[1];

  try {
    if (!username) {
      return res.status(401).json({
        error: {
          message: 'Please Login to Like this Post',
          isAuthorized: false,
        },
      });
    }

    if (!postId) {
      return res.status(404).json({
        error: { message: 'A PostID is mandatory to like or dislike' },
      });
    }

    if (toIncrement) {
      await updateLike({ id: postId, val: 1, username });
    } else {
      await updateLike({ id: postId, val: -1, username });
    }

    return res.status(200).json({ message: 'Updated like successfully' });
  } catch (err) {
    console.error('Error updating likes:', err);

  }
};

