
"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Users, Rocket, TerminalSquare } from 'lucide-react';
import { PortfolioHeader } from '@/components/portfolio/header';
import { PortfolioFooter } from '@/components/portfolio/footer';

const InstagramIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <title>Instagram</title>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.338.936 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.717 2.126-1.384s.936-1.338 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.65.936 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422-.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.056-1.17.249-1.805.413-2.227.217.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164-1.057.36 2.227.413 1.266-.057-1.646.07-4.85.07zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.44-.645 1.44-1.441s-.645-1.44-1.44-1.44z"/>
    </svg>
);

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* About Section */}
        <section id="about" className="py-20 md:py-24 bg-secondary">
          <motion.div
            className="container mx-auto px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="space-y-2 mb-10">
                  <p className="text-sm font-semibold text-primary tracking-widest uppercase">Hello, my name is</p>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter" style={{ textShadow: '2px 2px 0px hsl(var(--border))' }}>YEHIA</h1>
                  <p className="text-lg md:text-xl text-muted-foreground">I am a Full-Stack Developer</p>
                </div>
                <div className="relative mb-12 lg:hidden w-full flex flex-col items-center">
                  <Image
                    src="/images/yehia-portrait.png"
                    alt="Portrait of Yehia Mohammed"
                    width={400}
                    height={400}
                    className="rounded-full aspect-square object-cover shadow-2xl w-full max-w-[250px] sm:max-w-xs"
                  />
                  <div className="absolute -bottom-8 flex justify-center items-center gap-4">
                    <div className="bg-background rounded-full p-3 px-5 shadow-lg border border-border flex flex-col items-center justify-center text-center">
                      <p className="text-2xl font-bold text-primary">2.5+</p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Exp.</p>
                    </div>
                    <div className="bg-background rounded-full p-3 px-5 shadow-lg border border-border flex flex-col items-center justify-center text-center">
                      <p className="text-2xl font-bold text-primary">53+</p>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </div>
                <p className="max-w-2xl text-muted-foreground text-lg mb-8 lg:mt-0">
                  I build websites that look great, load fast, and do exactly what you need them to do — from custom designs to powerful features that bring real results. With every project, I focus on clean code, smooth user experience, and long-term performance. Ready to take your website to the next level?
                </p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/yehia_official1/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><InstagramIcon /></a>
                  <a href="https://www.linkedin.com/in/yehia-mohammed-1518a1222/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                  <a href="https://github.com/yehia-official" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <Image
                  src="/images/yehia-portrait.png"
                  alt="Portrait of Yehia Mohammed"
                  width={400}
                  height={400}
                  className="rounded-full aspect-square object-cover mx-auto shadow-2xl"
                />
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center items-center gap-8">
                  <div className="bg-background rounded-full p-4 px-6 shadow-lg border border-border flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-bold text-primary">2+</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="bg-background rounded-full p-4 px-6 shadow-lg border border-border flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Completed Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* My Mission Section */}
        <section id="mission" className="py-20 md:py-24 bg-background">
            <motion.div
                className="container mx-auto px-4 md:px-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold">My Mission</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    My goal is to break down barriers with technology. Whether it's building an intuitive user interface or architecting a complex backend, I believe software should be reliable and engaging. I'm building tools and creating content to empower users and businesses.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center space-y-3">
                        <div className="p-4 bg-primary/10 rounded-full"><TerminalSquare className="h-8 w-8 text-primary" /></div>
                        <h3 className="text-xl font-bold">Clarity</h3>
                        <p className="text-muted-foreground">Simplifying complex problems with clean, maintainable code.</p>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                        <div className="p-4 bg-primary/10 rounded-full"><Rocket className="h-8 w-8 text-primary" /></div>
                        <h3 className="text-xl font-bold">Creativity</h3>
                        <p className="text-muted-foreground">Using modern tools and design to build innovative solutions.</p>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                        <div className="p-4 bg-primary/10 rounded-full"><Users className="h-8 w-8 text-primary" /></div>
                        <h3 className="text-xl font-bold">Accessibility</h3>
                        <p className="text-muted-foreground">Building inclusive, high-performance applications for everyone.</p>
                    </div>
                </div>
            </motion.div>
        </section>
      </motion.main>
      <PortfolioFooter />
    </div>
  );
}
