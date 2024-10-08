import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogPost = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id.toString() === id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  const description = post.content.substring(0, 100);

  console.log('Setting OG Title:', post.title);
  console.log('Setting OG Description:', description);

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:title" content="Llama 3.1 released" />
        <meta property="og:description" content="Meta released Llama 3.1" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://blogpage-og-meta-data.vercel.app/post/${post.id}`} />
        <meta property="og:image" content={`https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_48x48.png`} />
      </Helmet>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
