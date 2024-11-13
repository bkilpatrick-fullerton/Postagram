import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  titles: {type: String, required: true},
  postbody: {type: String, required: true},
  username: {type: String, required: true},
  hashtags: [String],
  created: {type: Date, default: Date.now},
  likes: {type: Number, default: 0}

});

const Post = model("Post", PostSchema);

export default Post;
