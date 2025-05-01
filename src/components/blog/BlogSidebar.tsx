
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/data/blogPosts';

const BlogSidebar = () => {
  // Get unique tags from all blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Get popular posts (for demo, showing first 3)
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Search</h3>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Search blog..." className="flex-1" />
            <Button type="submit">Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Popular Posts</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map(post => (
            <div key={post.slug} className="flex items-start gap-3">
              <img 
                src={post.coverImage} 
                alt="" 
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <Link to={`/blog/${post.slug}`} className="font-medium hover:text-picker-purple text-sm line-clamp-2">
                  {post.title}
                </Link>
                <div className="text-xs text-gray-500 mt-1">{post.date}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Topics</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Link 
                key={tag}
                to={`/blog/tag/${tag}`}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Subscribe</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">Get the latest articles and updates delivered to your inbox</p>
          <div className="space-y-2">
            <Input placeholder="Your email address" type="email" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
