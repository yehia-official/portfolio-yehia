
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Home, User, FolderKanban, BookText, Github, Linkedin, Mail, Twitter, FileText } from "lucide-react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CommandMenu({ open, onOpenChange }: Props) {
  const router = useRouter()
  const { setTheme } = useTheme()

  const runCommand = React.useCallback((command: () => unknown) => {
    onOpenChange(false)
    command()
  }, [onOpenChange])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/#about'))}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/projects'))}>
            <FolderKanban className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/blog'))}>
            <BookText className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push('/#contact'))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light Mode</span>
          </CommandItem>
           <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark Mode</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open('https://drive.google.com/file/d/1ED3DjYVd5IJzXS_M2GQhj1RNWYLYJdxS/view?usp=drive_link', '_blank'))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>View CV</span>
          </CommandItem>
        </CommandGroup>
         <CommandSeparator />
        <CommandGroup heading="Social">
            <CommandItem onSelect={() => runCommand(() => window.open('https://github.com/yehia-mohammed', '_blank'))}>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/yehia-mohammed-1518a1222/', '_blank'))}>
                <Linkedin className="mr-2 h-4 w-4" />
                <span>LinkedIn</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open('mailto:yahiamohammedyup@gmail.com', '_blank'))}>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
            </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
