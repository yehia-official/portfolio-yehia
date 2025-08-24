
"use client"

import { useState, useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Menu, X, Command, Home, FolderKanban, User, BookText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/portfolio/mode-toggle';
import { CommandMenu } from '@/components/portfolio/command-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const mainNavLinks = [
  { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
  { href: "/projects", label: "Projects", icon: <FolderKanban className="h-4 w-4" /> },
  { href: "/about", label: "About", icon: <User className="h-4 w-4" /> },
  { href: "/blog", label: "Blog", icon: <BookText className="h-4 w-4" /> },
  { href: "/#contact", label: "Contact", anchor: true, icon: <Mail className="h-4 w-4" /> },
];

interface PortfolioHeaderProps {
  className?: string;
}

export function PortfolioHeader({ className }: PortfolioHeaderProps) {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isCommandOpen, setCommandOpen] = useState(false);

   useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const NavLink = ({ href, label, icon }: { href: string; label: string; icon: ReactNode }) => {
    const isActive = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));
    
    return (
      <Link 
        href={href} 
        className={cn(
          "flex items-center gap-2 hover:text-primary transition-colors", 
          isActive && "text-primary font-semibold"
        )}
        onClick={() => setSheetOpen(false)}
      >
        {icon}
        <span>{label}</span>
      </Link>
    );
  };

  const MobileNavLink = ({ href, label, icon }: { href: string; label: string; icon: ReactNode }) => {
     const isActive = (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));
     return (
         <SheetClose asChild>
             <Link href={href} className={cn("flex items-center gap-3 text-lg", isActive && "text-primary font-semibold")}>
                 {icon}
                 <span>{label}</span>
             </Link>
         </SheetClose>
     )
  }

  return (
    <>
    <CommandMenu open={isCommandOpen} onOpenChange={setCommandOpen} />
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="h-6 w-6 text-primary" />
          <span>Yehia</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {mainNavLinks.map(link => <NavLink key={link.href} {...link} />)}
        </nav>

        <div className="flex items-center gap-1">
            <ModeToggle />

            <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/yehia-official" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/yehia-mohammed-1518a1222/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                </Link>
            </Button>

            {/* Mobile Navigation Trigger */}
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                    <SheetHeader className="border-b pb-4 mb-4">
                        <SheetTitle className="sr-only">Main Menu</SheetTitle>
                         <div className="flex justify-between items-center">
                            <Link href="/" className="font-bold" onClick={() => setSheetOpen(false)}>Yehia Mohammed</Link>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6"/>
                                </Button>
                            </SheetClose>
                         </div>
                    </SheetHeader>
                    <div className="flex flex-col h-full gap-6">
                        <nav className="flex flex-col gap-4 text-lg font-medium">
                            {mainNavLinks.map(link => <MobileNavLink key={link.href} {...link} />)}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </motion.header>
    </>
  );
}
