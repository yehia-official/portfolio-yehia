
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioHeader } from "@/components/portfolio/header";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/blog-data";
import { Skeleton } from '@/components/ui/skeleton';

const allCategories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

const BlogSkeleton = () => (
  <div className="flex flex-col space-y-3">
    <Skeleton className="h-[225px] w-full rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (category: string) => {
    setLoading(true);
    setActiveCategory(category);
    // Simulate loading delay for demonstration
    setTimeout(() => {
        setLoading(false);
    }, 300);
  };

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                From My Desk
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
              >
                Insights, tutorials, and stories about web development, productivity, and the journey in between.
              </motion.p>
            </div>
            
            <div className="flex justify-center flex-wrap gap-2 mb-12">
                {allCategories.map(category => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? 'default' : 'outline'}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => <BlogSkeleton key={index} />)
              ) : (
                filteredPosts.map((post) => (
                  <motion.div key={post.slug} variants={itemVariants}>
                    <Card className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardHeader className="p-0">
                            <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full aspect-video group-hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col">
                            <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                            <CardTitle className="text-xl mb-2">
                              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                            </CardTitle>
                            <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                            <CardDescription className="flex-1">{post.excerpt}</CardDescription>
                        </CardContent>
                        <CardFooter className="px-6 pb-6 mt-auto">
                            <Button asChild variant="outline">
                                <Link href={`/blog/${post.slug}`}>
                                    Read More
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </section>
      </motion.main>
      <PortfolioFooter />
    </div>
  );
}
