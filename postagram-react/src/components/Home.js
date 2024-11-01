import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from './Post';

const Home = () => {
  const navigate = useNavigate();
  const [postText, setPostText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, username: "User1", date: "Nov 1, 2024", text: "This is a mock post to start with!" },
    { id: 2, username: "User2", date: "Nov 2, 2024", text: "Hello from the feed!" },
    { id: 3, username: "User3", date: "Nov 3, 2024", text: "Exploring a Twitter-like feed!" },
  ]);

  // Handle creating a new post
  const handlePostSubmit = (event) => {
    event.preventDefault();
    
    if (postText.trim()) {
      const newPost = {
        id: Date.now(),
        username: "CurrentUser",
        date: new Date().toLocaleDateString(),
        text: postText,
      };
      setPosts([newPost, ...posts]);
      setPostText('');
    }
  };

  // Handle logout
  const handleLogout = () => {
    navigate('/');
  };

  // Filter posts based on search text
  const filteredPosts = posts.filter(post =>
    post.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for Posting and Searching */}
      <div className="w-1/4 bg-white shadow-lg p-4 border-r border-gray-200 flex flex-col justify-between min-h-screen">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Create a Post</h2>
          <form onSubmit={handlePostSubmit} className="mb-6">
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post
            </button>
          </form>

          {/* Search for Posts */}
          <h2 className="text-xl font-bold text-blue-600 mb-2">Search Posts</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Feed */}
      <div className="w-3/4 p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Home Feed</h1>
        
        <div className="space-y-4 h-[calc(100vh-5rem)] overflow-y-scroll">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Post
                key={post.id}
                username={post.username}
                date={post.date}
                text={post.text}
              />
            ))
          ) : (
            <p className="text-gray-500">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
