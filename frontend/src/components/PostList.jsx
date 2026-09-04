import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts. Ensure backend server is running on port 5000.');
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recent Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found. Create one above!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small style={{ color: '#666' }}>
              Author: {post.authorId?.name || post.authorId?.email || 'Unknown Author'}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;