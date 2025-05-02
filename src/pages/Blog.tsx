
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogPostList from '@/components/blog/BlogPostList';
import BlogSidebar from '@/components/blog/BlogSidebar';
import Footer from '@/components/home/Footer';
import AdPlaceholder from '@/components/home/AdPlaceholder';

const Blog = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Helmet>
        <title>Random Number Picker Blog - Expert Tips & Tools for Random Selection | NumberPicker.Live</title>
        <meta name="description" content="Discover expert guides on using random number generators, wheel pickers, and team generators. Learn how to make fair decisions with our random selection tools." />
        <meta name="keywords" content="random number generator, wheel picker, team generator, random selection tools, fair decision making" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://numberpicker.live/blog" />
        <meta property="og:title" content="Random Number Picker Blog - Expert Tips & Tools" />
        <meta property="og:description" content="Explore our guides on using random selection tools for fair decision making in classrooms, events, and business." />
        <meta property="og:image" content="https://numberpicker.live/blog-cover.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://numberpicker.live/blog" />
        <meta property="twitter:title" content="Random Number Picker Blog - Expert Tips & Tools" />
        <meta property="twitter:description" content="Explore our guides on using random selection tools for fair decision making in classrooms, events, and business." />
        <meta property="twitter:image" content="https://numberpicker.live/blog-cover.jpg" />
        
        {/* Canonical link */}
        <link rel="canonical" href="https://numberpicker.live/blog" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Random Number Picker Blog
            </h1>
            <p className="text-gray-600 mt-2">
              Expert guides and use cases for random selection tools in education, events, and business
            </p>
          </header>

          <AdPlaceholder />
          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <BlogPostList />
            </div>
            <div className="md:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default Blog;
