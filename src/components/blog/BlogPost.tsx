
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Footer from '@/components/home/Footer';
import BlogSidebar from './BlogSidebar';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, redirect to blog main page
  if (!post) {
    return (
      <div className="min-h-screen py-8 md:py-12 container">
        <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
          <div className="p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h2>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/blog')}>
              Return to Blog
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12 container">
      <Card className="mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden border-none">
        <div className="p-6 md:p-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Button>

          <article>
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
            />
            
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                {post.title}
              </h1>
              <div className="text-sm text-gray-500">
                {post.date} • {post.readTime} min read
              </div>
            </header>

            <Separator className="my-6" />

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <Separator className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {blogPosts
                    .filter(p => p.slug !== post.slug && p.tags.some(tag => post.tags.includes(tag)))
                    .slice(0, 2)
                    .map(relatedPost => (
                      <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-4">
                          <img 
                            src={relatedPost.coverImage} 
                            alt={relatedPost.title} 
                            className="w-full h-32 object-cover rounded mb-3"
                          />
                          <h4 className="font-semibold line-clamp-2 mb-1">
                            <Link to={`/blog/${relatedPost.slug}`} className="hover:text-picker-purple">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-xs text-gray-500">{relatedPost.date}</div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
              <div className="md:col-span-1">
                <BlogSidebar />
              </div>
            </div>
          </article>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default BlogPost;
