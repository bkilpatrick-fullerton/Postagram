# Postagram

Postagram is a social media application that allows users to sign up, log in, and share posts. Users can view their feed, posts from specific users, and posts by hashtags.

## Features

- User Signup and Login
- View posts in your feed
- View posts by username
- View posts by hashtag
- Like and unlike posts
- Follow and unfollow users

## API Endpoints

### User Authentication

- **Signup**: `PUT /users/signup/`
  - **Request Body**: `{ username, first, last, password }`

- **Login**: `POST /users/login/`
  - **Request Body**: `{ username, password }`

### Posts

- **My Feed**: `GET /posts/myfeed`
  - **Request**: `{ username }`
  - **Response**: List of posts from the logged-in user and their friends.

- **Posts by Username**: `GET /posts/:username`
  - **Request**: `{ username }`
  - **Response**: List of posts from the specified user.

- **Posts by Hashtag**: `GET /posts/:hashtag`
  - **Request**: `{ hashtag }`
  - **Response**: List of posts from the specified hashtag.

## Models

### User
- `username` (key)
- `password` (encrypted)
- `first`
- `last`
- `following` (list of friends)

### Post
- `postId` (key)
- `text`
- `hashtags` (list of hashtags)
- `likes` (list of users who liked this post)

## Middleware
- `getPostsByUsername`
- `getFeedPosts`
- `getPostByHashtag`
- `likePost` / `unlikePost`
- `followUser` / `unfollowUser`

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Postagram
