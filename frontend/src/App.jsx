import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import PostList from './components/PostList';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handlePostCreated = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Prodesk IT — Data Management Dashboard</h1>
      <CreatePostForm onPostCreated={handlePostCreated} />
      <hr />
      <PostList key={refreshKey} />
    </div>
  );
}

export default App;