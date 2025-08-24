
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortfolioHeader } from "@/components/portfolio/header";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projectData = [
  {
    title: 'German Language Learning Platform',
    date: 'In Progress',
    description: 'An interactive platform for learning German, featuring lessons, quizzes, and practice exercises to build a strong foundation in the language.',
    image: '/images/project-german-platform.png',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    liveLink: '#',
    repoLink: 'https://github.com/yehia-official',
  },
  {
    title: 'Advanced To-Do List Web App',
    date: 'Completed',
    description: 'A feature-rich task manager with a Kanban board, drag-and-drop functionality, and local storage persistence for a seamless user experience.',
    image: '/images/project-todo-app.png',
    tags: ['React', 'JavaScript', 'ShadCN UI', 'dnd-kit'],
    liveLink: '#',
    repoLink: 'https://github.com/yehia-official',
  },
  {
    title: 'Python & ML Learning Content',
    date: 'Ongoing',
    description: 'Educational content series on YouTube and TikTok simplifying complex Python and Machine Learning concepts for beginners.',
    image: '/images/project-python-content.png',
    tags: ['Python', 'Content Creation', 'Motion Design'],
    liveLink: '#',
    repoLink: 'https://github.com/yehia-official',
  },
  {
    title: 'E-Shopper',
    date: 'May 2023',
    description: 'An early e-commerce platform built on modern principles and a focus on seamless user experience.',
    image: '/images/project-eshopper.png',
    tags: ['HTML/CSS', 'JavaScript'],
    liveLink: '#',
    repoLink: 'https://github.com/yehia-official',
  },
  {
    title: 'Hotel Website',
    date: 'January 2023',
    description: 'A responsive hotel booking website with interactive features and a demonstration booking system.',
    image: '/images/project-hotel.png',
    tags: ['HTML/CSS', 'Bootstrap'],
    liveLink: '#',
    repoLink: 'https://github.com/yehia-official',
  },
];

const filterTags = ['All', 'Next.js', 'React', 'JavaScript', 'HTML/CSS'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">My Projects</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A selection of projects that showcase my skills in web development, design, and content creation.
              </p>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {filterTags.map(tag => (
                <Button
                  key={tag}
                  variant={activeFilter === tag ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(tag)}
                  className="capitalize"
                >
                  {tag}
                </Button>
              ))}
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div layout key={project.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                         <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">{project.date}</span>
                      </div>
                      <CardDescription className="flex-1">{project.description}</CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 flex gap-4 mt-auto">
                      <Button asChild className="flex-1">
                        <Link href={project.liveLink} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href={project.repoLink} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.main>
      <PortfolioFooter />
    </div>
  );
}
