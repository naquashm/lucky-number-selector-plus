
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogPostList = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Articles</h2>
      
      {blogPosts.map((post) => (
        <Card key={post.slug} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="p-0">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-sm text-gray-500 mb-2">{post.date} • {post.readTime} min read</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              <Link to={`/blog/${post.slug}`} className="hover:text-picker-purple">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="px-0 text-picker-purple">
              <Link to={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;
