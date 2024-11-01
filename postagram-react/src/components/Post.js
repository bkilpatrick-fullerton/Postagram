import React, { useState } from 'react';

const Post = ({ username, date, text }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-sm mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{username}</h3>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <p className="text-gray-800 mb-2">{text}</p>
      <div className="flex items-center">
        <button
          onClick={handleLike}
          className="text-blue-600 font-bold hover:underline mr-2"
        >
          Like
        </button>
        <span className="text-gray-600 text-sm">{likes} {likes === 1 ? 'like' : 'likes'}</span>
      </div>
    </div>
  );
};

export default Post;
