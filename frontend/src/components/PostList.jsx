// frontend/src/components/PostList.jsx
import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error('Failed to load posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  if (loading) return <p>Loading posts from database...</p>;

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>Author: {post.authorId?.name || 'Unknown'}</small>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;