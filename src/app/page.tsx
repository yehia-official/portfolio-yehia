
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { BookOpen, Code, Download, Mail, PenTool, Server, Send, Users, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PortfolioHeader } from '@/components/portfolio/header';
import { PortfolioFooter } from '@/components/portfolio/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { blogPosts } from '@/lib/blog-data';
import { submitContactForm, type FormState } from './actions';
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from 'react';


const InstagramIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <title>Instagram</title>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.338.936 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.717 2.126-1.384s.936-1.338 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.65.936 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422-.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.056-1.17.249-1.805.413-2.227.217.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164-1.057.36 2.227.413 1.266-.057-1.646.07-4.85.07zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.44-.645 1.44-1.441s-.645-1.44-1.44-1.44z"/>
    </svg>
);

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: FormState = {
    message: '',
    errors: {},
    success: false,
  };

  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && state.errors) {
       const errorMessages = Object.values(state.errors).flat().join(' ');
       toast({
         variant: "destructive",
         title: "Oops! Something went wrong.",
         description: errorMessages || state.message,
       });
    }
  }, [state, toast]);
  
  const { pending } = useFormStatus();

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" required />
          {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" required />
           {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[150px]" required />
         {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      <div className="text-left">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};


export default function PortfolioPage() {
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
  
  const skills = [
    { icon: <Code className="h-8 w-8 text-primary" />, name: 'Frontend Development', description: 'React, Next.js, TypeScript, and Tailwind CSS.' },
    { icon: <Server className="h-8 w-8 text-primary" />, name: 'Backend Development', description: 'Building robust server-side logic and APIs with Node.js and Python.' },
    { icon: <Users className="h-8 w-8 text-primary" />, name: 'Team Supervision', description: 'Leading teams and managing projects with a focus on clear communication.' },
    { icon: <PenTool className="h-8 w-8 text-primary" />, name: 'UI/UX & Design', description: 'Figma, user experience, clean code, and system design.' },
  ];

  const testimonials = [
    {
      name: "Alex Schmidt",
      title: "Project Collaborator",
      quote: "Yehia's technical skill and eye for detail are phenomenal. He can take a complex problem and break it down into clean, manageable code. A true professional.",
      avatar: "/images/avatar-1.png",
    },
    {
        name: "Maria Weber",
        title: "Aspiring Developer",
        quote: "Following Yehia's coding journey is incredibly motivating. He explains his process clearly and makes web development seem so much more approachable. A true inspiration.",
        avatar: "/images/avatar-2.png",
    },
    {
        name: "Jürgen Keller",
        title: "Community Member",
        quote: "The developer community Yehia helps foster is fantastic. It's a supportive environment where we can learn and grow together. His leadership is key to its success.",
        avatar: "/images/avatar-3.png",
    },
    {
        name: "Fatima Al-Sayed",
        title: "YouTube Subscriber",
        quote: "I love the coding tutorials! Yehia's content is always high-quality, practical, and very helpful for anyone getting into web development.",
        avatar: "/images/avatar-4.png",
    },
    {
        name: "David Chen",
        title: "Fellow Code Learner",
        quote: "Yehia's dedication to mastering his craft is impressive. He's not afraid to share his learning process, which is very reassuring for others on the same path.",
        avatar: "/images/avatar-5.png",
    },
  ];

  const recentBlogPosts = blogPosts.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <motion.div
            className="container mx-auto px-4 md:px-6 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-sm mb-4">
              Full-Stack Developer (React, Next.js, Node.js)
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Still learning. Still building. Still growing.
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              I'm a passionate developer building modern, performant, and user-friendly web applications from concept to deployment.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Get in Touch <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://drive.google.com/file/d/1ED3DjYVd5IJzXS_M2GQhj1RNWYLYJdxS/view?usp=drive_link" target="_blank">
                  View CV <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">A snapshot of the technologies and tools I work with.</p>
                </motion.div>
                <motion.div 
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill) => (
                        <motion.div key={skill.name} variants={itemVariants}>
                            <Card className="h-full text-center hover:border-primary transition-colors duration-300 bg-card">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                        {skill.icon}
                                    </div>
                                    <CardTitle className="mt-4">{skill.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{skill.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

         {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">What People Are Saying</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">Feedback from collaborators and community members who have experienced my work.</p>
                </motion.div>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="h-full flex flex-col bg-secondary">
                                        <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                                            <Avatar className="w-20 h-20 mb-4">
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name}  />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                            <div className="mt-auto">
                                                <p className="font-bold">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>

        {/* From the Blog Section */}
        <section id="blog-preview" className="py-20 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">From the Blog</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">Insights on web development, productivity, and the tech industry.</p>
                </motion.div>
                <motion.div 
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {recentBlogPosts.map((post) => (
                        <motion.div
                            key={post.slug}
                            variants={itemVariants}
                        >
                            <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-background">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                                    <CardHeader>
                                        <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                                        <CardTitle>
                                            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                    </CardContent>
                                    <CardFooter>
                                       <Button variant="link" asChild className="p-0">
                                            <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                                       </Button>
                                    </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="text-center mt-12">
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/blog">
                            Visit The Blog <BookOpen className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-background">
            <motion.div
                className="container mx-auto px-4 md:px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have a project in mind or just want to connect? Send me a message, and I'll get back to you as soon as possible.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="md:pr-8">
                        <ContactForm />
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-4">
                            <Mail className="h-8 w-8 text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <a href="mailto:yahiamohammedyup@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">yahiamohammedyup@gmail.com</a>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <Phone className="h-8 w-8 text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <a href="tel:+201002358161" className="text-muted-foreground hover:text-primary transition-colors">+20 100 235 8161</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                               <a href="https://www.linkedin.com/in/yehia-mohammed-1518a1222/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a>
                               <a href="https://www.instagram.com/yehia_official1/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><InstagramIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
      </motion.main>
      <Link 
        href="https://wa.me/201002358161"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-8 w-8 text-white" />
      </Link>
      <PortfolioFooter />
    </div>
  );
}
