"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PortfolioFooterProps {
    className?: string;
}

export function PortfolioFooter({ className }: PortfolioFooterProps) {
    return (
        <footer className={cn("py-8 border-t border-border/40 bg-secondary", className)}>
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-center items-center text-sm text-muted-foreground">
                <div className='text-center md:text-left'>
                    <p>
                        <span className="font-bold text-foreground">Yehia Mohammed</span>
                        <span className="mx-2">|</span>
                        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
