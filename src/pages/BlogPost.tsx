
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '@/components/blog/BlogPost';

const BlogPostPage = () => {
  const { slug } = useParams();
  
  return (
    <BlogPost />
  );
};

export default BlogPostPage;
