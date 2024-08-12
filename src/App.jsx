import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import AddPost from './components/AddPost';

const App = () => {
  const initialPosts = JSON.parse(localStorage.getItem('blogPosts')) || [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  ];

  const [blogPosts, setBlogPosts] = useState(initialPosts);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const addPost = (title, content) => {
    const newPost = {
      id: blogPosts.length + 1,
      title,
      content,
    };
    setBlogPosts([...blogPosts, newPost]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList blogPosts={blogPosts} />} />
        <Route path="/post/:id" element={<BlogPost blogPosts={blogPosts} />} />
        <Route path="/add" element={<AddPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
};

export default App;
