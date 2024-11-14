import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: {type: String, required: true},
  postbody: {type: String, required: true},
  username: {type: String, required: true},
  hashtags: [String],
  created: {type: Date, default: Date.now},
  likes: {
    type: [
      {
        username: { type: String, required: true },
      },
    ],
  },
  tags: { type: [String], default: [''] },
},
{ timestamps: true },
);

const Post = model("Post", PostSchema);

export default Post;
