
"use client"

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { blogPosts, type BlogPost } from '@/lib/blog-data';
import { PortfolioHeader } from '@/components/portfolio/header';
import { PortfolioFooter } from '@/components/portfolio/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';


const TwitterIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <title>Twitter</title>
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21A12.93 12.93 0 0 0 21.08 8c0-.19-.01-.38-.03-.57.9-.63 1.68-1.42 2.31-2.43Z" />
    </svg>
);

const SocialShare = ({ post, url }: { post: any; url: string }) => {
    const text = encodeURIComponent(post.title);
    const shareUrl = encodeURIComponent(url);

    const twitterShareLink = `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`;
    const linkedinShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${text}&summary=${encodeURIComponent(post.excerpt)}`;

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-muted-foreground">Share:</span>
            <div className="flex gap-2">
                <a href={twitterShareLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent">
                    <TwitterIcon />
                </a>
                <a href={linkedinShareLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent">
                    <Linkedin className="h-5 w-5" />
                </a>
            </div>
        </div>
    )
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const postUrl = `https://your-domain.com/blog/${params.slug}`; // Replace with your actual domain

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === params.slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      notFound();
    }
  }, [params.slug]);


  if (!post) {
    // You can return a loading spinner or skeleton here
    return (
         <div className="flex flex-col min-h-screen bg-background text-foreground">
            <PortfolioHeader />
            <main className="flex-1 py-16 md:py-24 flex items-center justify-center">
                <p>Loading...</p>
            </main>
            <PortfolioFooter />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <motion.main 
        className="flex-1 py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="mb-6">
                 <Button asChild variant="outline" size="sm">
                    <Link href="/blog" className="inline-flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
              </div>
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="rounded-lg mb-8 aspect-video object-cover"
                priority
              />
              {post.content}
            </div>
            
            <footer className="mt-12 pt-8 border-t">
                <SocialShare post={post} url={postUrl} />
            </footer>
          </article>
        </div>
      </motion.main>
      <PortfolioFooter />
    </div>
  );
}
