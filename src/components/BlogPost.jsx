import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  // Add more blog posts as needed
];

const BlogPost = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id.toString() === id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 100)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`http://yourwebsite.com/post/${post.id}`} />
        <meta property="og:image" content={`http://yourwebsite.com/images/${post.id}.jpg`} />
      </Helmet>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
