
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import BlogPostList from '@/components/blog/BlogPostList';
import BlogSidebar from '@/components/blog/BlogSidebar';
import Footer from '@/components/home/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-picker-purple to-picker-orange bg-clip-text text-transparent">
              Random Number Picker Blog
            </h1>
            <p className="text-gray-600 mt-2">
              Tips, guides, and use cases for random selection tools in various scenarios
            </p>
          </header>

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
