// frontend/src/App.jsx
import React from 'react';
import CreatePostForm from './components/CreatePostForm';
import PostList from './components/PostList';

function App() {
  const handlePostCreated = (newPost) => {
    console.log('New post added to MongoDB Atlas:', newPost);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Prodesk IT — Data Management Dashboard</h1>
      <CreatePostForm onPostCreated={handlePostCreated} />
      <hr style={{ margin: '40px 0' }} />
      <PostList />
    </div>
  );
}

export default App;