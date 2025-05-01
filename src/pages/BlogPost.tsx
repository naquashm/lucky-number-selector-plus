
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, redirect to blog main page
  if (!post) {
    navigate('/blog');
    return null;
  }
  
  return (
    <BlogPost />
  );
};

export default BlogPostPage;
