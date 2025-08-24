
"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PortfolioHeader } from '@/components/portfolio/header'
import { PortfolioFooter } from '@/components/portfolio/footer'
import { Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PortfolioHeader />
      <motion.main 
        className="flex-1 flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
            <Frown className="mx-auto h-24 w-24 text-muted-foreground mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Button size="lg" asChild>
                <Link href="/">
                Go Back to Homepage
                </Link>
            </Button>
        </div>
      </motion.main>
      <PortfolioFooter />
    </div>
  )
}
