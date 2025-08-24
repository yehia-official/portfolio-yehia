
import type { ReactNode } from "react";

export interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  image: string;
  
  excerpt: string;
  content: ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How I Built My Portfolio with Next.js and Tailwind CSS",
    slug: "building-portfolio-nextjs-tailwind",
    author: "Yehia Mohammed",
    date: "July 22, 2024",
    category: "Web Development",
    image: "/images/blog-post-1.png",
    
    excerpt: "A deep dive into the tech stack behind this website. Learn why I chose Next.js, how Tailwind CSS accelerated my workflow, and the power of Framer Motion for animations.",
    content: (
        <div className="space-y-6">
            <p>Building a personal portfolio is a rite of passage for any developer. It's not just a showcase of your work; it's a project in itself. For this website, I chose a modern, powerful, and efficient tech stack: Next.js, Tailwind CSS, and Framer Motion. Here’s a breakdown of why I chose these tools and how they came together.</p>
            
            <h3 className="text-2xl font-bold mt-4">Why Next.js? The Power of a Framework</h3>
            <p>I could have built this with plain React, but Next.js offers so many advantages out of the box. Server-Side Rendering (SSR) and Static Site Generation (SSG) are incredible for performance and SEO. The file-based routing system is intuitive and keeps the project structure clean. For a portfolio, where first impressions and performance matter, Next.js was a clear winner.</p>

            <h3 className="text-2xl font-bold mt-4">Tailwind CSS: Utility-First for Speed and Consistency</h3>
            <p>As someone who values both design and development, I find traditional CSS can sometimes slow me down. Tailwind CSS, with its utility-first approach, allowed me to build and style components directly in my JSX. This meant no more switching between files or coming up with BEM class names. The result is a highly consistent design system that was incredibly fast to implement. Look at this simple button example:</p>
            <pre className="bg-muted text-muted-foreground p-4 rounded-md overflow-x-auto">
                <code className="font-mono text-sm">
{`<button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
  Click me
</button>`}
                </code>
            </pre>
            <p>This is readable, maintainable, and lets me build complex interfaces without writing a single line of custom CSS.</p>

            <h3 className="text-2xl font-bold mt-4">Framer Motion: Bringing the UI to Life</h3>
            <p>A static portfolio is fine, but an animated one feels alive. I used Framer Motion to add subtle, meaningful animations. From the staggered fade-in of the hero section to the scroll-triggered animations for each content block, these details make the user experience more engaging. Framer Motion's API is incredibly simple and integrates perfectly with React, making it easy to create complex animations with just a few lines of code.</p>
        </div>
    )
  },
  {
    title: "The Power of Visuals in Education",
    slug: "visuals-in-education",
    author: "Yehia Mohammed",
    date: "July 15, 2024",
    category: "Content Creation",
    image: "/images/blog-post-2.png",
    
    excerpt: "Why are visuals so effective for learning? I explore the science behind visual learning and share my strategies for creating engaging educational content on platforms like YouTube and TikTok.",
    content: (
      <div className="space-y-6">
        <p>They say a picture is worth a thousand words. In education, it might be worth even more. As a content creator, I've built my entire teaching philosophy around the power of visual learning. From motion graphics on YouTube to quick, engaging clips on TikTok, visuals are the key to making complex information simple, memorable, and accessible.</p>
        
        <h3 className="text-2xl font-bold mt-4">Why Visuals Work: The Science</h3>
        <p>Our brains are wired to process visual information incredibly fast. In fact, studies show that the human brain processes images 60,000 times faster than text. When you pair a concept with an image or a motion graphic, you're creating multiple pathways in the brain for that information to be stored. This dual-coding theory is why students who learn with visual aids often have higher retention rates and a deeper understanding of the material.</p>

        <h3 className="text-2xl font-bold mt-4">My Strategy for Visual Content</h3>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Simplify Concepts with Motion Graphics:</strong> Complex ideas can be abstract. I use simple shapes and animations to show how systems work and why, turning a confusing rule into a clear, visual pattern.</li>
            <li><strong>Use Color Coding:</strong> Assigning colors to different elements provides an instant visual cue that helps learners internalize concepts without conscious effort.</li>
            <li><strong>Short-Form Video for Daily Habits:</strong> A short video series on TikTok can be effective because it's brief, visual, and fits into the user's daily scrolling habit. It's a low-effort, high-impact way to build knowledge.</li>
        </ul>
        <p>Ultimately, visual learning isn't just about making things look pretty. It's a pedagogical strategy rooted in cognitive science. By presenting information in a visually engaging way, we can break down barriers to learning and empower students to grasp even the most challenging topics.</p>
      </div>
    )
  },
  {
    title: "From Hospitality to Code: My Journey into Full-Stack Development",
    slug: "hospitality-to-code",
    author: "Yehia Mohammed",
    date: "July 8, 2024",
    category: "Career",
    image: "/images/blog-post-3.png",
    
    excerpt: "It's never too late to change your path. I share my story of transitioning from the hospitality industry to tech, the challenges I faced, and the surprising skills that transferred.",
     content: (
      <div className="space-y-6">
        <p>Two years ago, my daily routine involved managing rooms, supervising staff, and ensuring guest satisfaction at a premium hotel. Today, it involves writing code, designing databases, and building web applications. My journey from hospitality to full-stack development has been one of the most challenging and rewarding experiences of my life, and it has taught me that the skills we learn in one field can often be our greatest assets in another.</p>
        
        <h3 className="text-2xl font-bold mt-4">The Catalyst for Change</h3>
        <p>While I enjoyed the dynamic environment of hospitality, I felt a growing pull toward creation and problem-solving on a different scale. I was fascinated by how technology was shaping the world and wanted to be a part of building it. The turning point was when I started creating educational content. I realized I loved breaking down complex systems—whether it was a hotel's operational workflow or a difficult concept—and making them understandable. Coding felt like the logical next step: a way to build the very tools that could solve these problems.</p>

        <h3 className="text-2xl font-bold mt-4">The Surprising Overlap: Skills That Transferred</h3>
        <p>You might not think there's much in common between supervising a hotel and supervising a codebase, but the core skills are surprisingly similar:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Problem-Solving Under Pressure:</strong> In hospitality, you're constantly troubleshooting—a double-booked room, a guest complaint, a staffing shortage. You learn to stay calm, assess the situation, and find a solution quickly. This is the exact mindset needed for debugging code.</li>
            <li><strong>Team Supervision & Collaboration:</strong> Leading a team of housekeepers is not unlike working in a development team. It requires clear communication, delegation, and ensuring everyone is working towards a common goal.</li>
            <li><strong>Customer-Centric Mindset:</strong> My job was to anticipate and meet the needs of guests. In web development, this is called User Experience (UX). I'm always thinking about the end-user: Is this feature intuitive? Is this website easy to navigate?</li>
        </ul>
        <p>My transition is still in progress. I'm still learning, still building, and still growing. But my background in hospitality isn't something I left behind; it's the foundation upon which I'm building my new career in tech.</p>
      </div>
    )
  },
  {
    title: "React Server Components vs. Client Components in Next.js",
    slug: "react-server-vs-client-components",
    author: "Yehia Mohammed",
    date: "August 2, 2024",
    category: "Web Development",
    image: "/images/blog-post-4.png",
    
    excerpt: "One of the biggest shifts in modern React is the server component paradigm. What does 'use client' actually do, and how can you leverage both for a faster, more efficient app?",
    content: (
      <div className="space-y-6">
        <p>The introduction of React Server Components (RSCs) in Next.js 13 was a game-changer. It fundamentally shifted how we think about building React applications, moving from a client-centric model to a server-first approach. Let's demystify the difference and see when to use each.</p>
        
        <h3 className="text-2xl font-bold mt-4">Server Components: The Default</h3>
        <p>In the Next.js App Router, every component is a Server Component by default. This means:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>They run only on the server.</strong> Their code is never sent to the browser, which means a smaller JavaScript bundle and a faster initial page load.</li>
            <li><strong>They can access server-side resources directly.</strong> You can fetch data from a database or read files directly within your component without creating a separate API endpoint.</li>
            <li><strong>They are not interactive.</strong> You cannot use hooks like `useState` or `useEffect`, or add event listeners like `onClick`.</li>
        </ul>
        <p>Server Components are perfect for static content, data fetching, and presenting information that doesn't require user interaction.</p>

        <h3 className="text-2xl font-bold mt-4">Client Components: Opting into Interactivity</h3>
        <p>When you need interactivity, you use a Client Component. You opt into this by adding the `'use client'` directive at the top of your file.</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>They run on the server (for the initial render) and on the client.</strong> Their code is bundled and sent to the browser, allowing them to become interactive after 'hydration'.</li>
            <li><strong>They can use React hooks and event listeners.</strong> This is where you put your `useState`, `useEffect`, `onClick`, etc.</li>
            <li><strong>They cannot directly access server-side resources.</strong> Data fetching must be done through traditional methods like using `useEffect` or a library like SWR/TanStack Query.</li>
        </ul>
        
        <h3 className="text-2xl font-bold mt-4">The Best of Both Worlds</h3>
        <p>The power of this model is in composition. You can (and should) nest Client Components inside Server Components. A common pattern is to have a Server Component fetch data and then pass that data as props to a Client Component that handles the interactive UI.</p>
        <p>For example, my blog page is a Server Component that fetches all post data. It then maps over this data and renders a `BlogPostCard` Client Component for each post, which might have interactive hover effects. This way, the heavy lifting of data fetching is done on the server, and only the necessary interactive code is sent to the client.</p>
      </div>
    )
  },
  {
    title: "The Art of 'Deep Work': How I Focus in a Distracted World",
    slug: "art-of-deep-work",
    author: "Yehia Mohammed",
    date: "July 29, 2024",
    category: "Productivity",
    image: "/images/blog-post-5.png",
    
    excerpt: "Juggling content creation and coding requires intense focus. I share my personal strategies for minimizing distractions and maximizing productivity.",
    content: (
       <div className="space-y-6">
        <p>In today's world, our attention is the most valuable commodity, and everyone wants a piece of it. As someone juggling multiple creative and technical pursuits, the ability to focus is not a luxury; it's a necessity. I've adopted several principles from Cal Newport's concept of 'Deep Work' to structure my days for maximum productivity.</p>
        
        <h3 className="text-2xl font-bold mt-4">1. Time Blocking: My Calendar is My Boss</h3>
        <p>I live by my calendar. I don't just schedule meetings; I schedule focus. I block out 90-minute to 2-hour chunks of time for specific, high-leverage tasks. For example, a block might be labeled "Code: Implement Blog Filter Logic" or "Create: Script for new tutorial video". During this time, that is the only thing I am allowed to do. No email, no social media, no context switching.</p>

        <h3 className="text-2xl font-bold mt-4">2. The 'Digital Sunset': Shutting Down Work</h3>
        <p>It's easy to let work bleed into all hours of the day, especially when you're passionate about it. I enforce a 'digital sunset' around 7 PM. This means all work-related screens are off. This shutdown ritual is crucial. It tells my brain that the workday is over, allowing me to fully recharge and preventing burnout. It also forces me to be more efficient during my working hours.</p>

        <h3 className="text-2xl font-bold mt-4">3. Embracing Boredom: The Anti-Distraction</h3>
        <p>We've trained our brains to seek instant gratification. The moment we're bored, we reach for our phones. I actively practice being bored. When waiting in line or between tasks, I resist the urge to pull out my phone. This practice rebuilds your attention muscle, making it easier to stay focused for long periods when you need to.</p>

        <h3 className="text-2xl font-bold mt-4">4. Strategic Environment Design</h3>
        <p>My physical and digital environments are designed for focus. When I'm coding, I use a specific desktop space in my OS with only my code editor and terminal open. My phone is in another room or on 'Do Not Disturb' mode. These small barriers to distraction make a huge difference. By making focus the path of least resistance, deep work becomes the default state, not something you have to fight for.</p>
      </div>
    )
  },
  {
    title: "Inside Spark Team: The Power of a Creative Mastermind",
    slug: "inside-spark-team-creative-mastermind",
    author: "Yehia Mohammed",
    date: "July 18, 2024",
    category: "Mission",
    image: "/images/blog-post-6.png",
    
    excerpt: "Spark Team is more than just a name; it's a philosophy of collaborative learning. Here's how our small group explores everything from Python to motion design, and why you should start your own.",
    content: (
      <div className="space-y-6">
        <p>No one achieves anything great alone. While much of my work is solo, the creative energy and accountability for many of my projects come from Spark Team. It's not a formal company, but a small, dedicated mastermind group focused on mutual growth and creative exploration. Here's why this model has been so powerful for me.</p>

        <h3 className="text-2xl font-bold mt-4">What is a Mastermind Group?</h3>
        <p>A mastermind group is a peer-to-peer mentoring concept. It's a group of individuals who meet regularly to share challenges, offer advice, and hold each other accountable for their goals. Our 'Spark Team' is exactly this, with a focus on creative and technical skills.</p>

        <h3 className="text-2xl font-bold mt-4">Our Areas of Exploration</h3>
        <p>Our interests are diverse, but they all feed into each other:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Web Development Innovations:</strong> We brainstorm new, unconventional ways to solve technical problems and build better user experiences.</li>
            <li><strong>Python for Automation:</strong> We explore how Python scripts can automate repetitive tasks in development and content creation, like generating assets or analyzing data.</li>
            <li><strong>Motion Design & Visuals:</strong> We constantly push our skills in After Effects and other tools to create high-quality visual content that makes technical topics easier to understand.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-4">The Benefits of Collective Brainpower</h3>
        <p>The magic of a mastermind is in the shared perspective. If I'm stuck on a coding problem, another member might offer a solution I hadn't considered. If someone has an idea for a project, we can brainstorm it together to make it even better. This collaborative friction polishes ideas and accelerates learning for everyone involved.</p>
        <p>You don't need a formal team to reap these benefits. Find one or two other people who are as passionate and driven as you are. Meet once a week. Share your goals and your struggles. The accountability and shared knowledge will propel you forward faster than you could ever go alone.</p>
      </div>
    )
  },
  {
    title: "Project Deep Dive: Building an Advanced To-Do App with dnd-kit",
    slug: "project-deep-dive-todo-app-dnd-kit",
    author: "Yehia Mohammed",
    date: "August 10, 2024",
    category: "Web Development",
    image: "/images/blog-post-7.png",
    
    excerpt: "A to-do list is a classic project, but I wanted to take it further. A technical look at how I implemented smooth drag-and-drop functionality using dnd-kit in a React application.",
    content: (
      <div className="space-y-6">
        <p>Every developer builds a to-do list. It's a perfect project for learning the fundamentals. But I wanted to create something more robust: a task manager with a Kanban-style board and seamless drag-and-drop functionality. The key to achieving this was the `dnd-kit` library.</p>
        <h3 className="text-2xl font-bold mt-4">Why dnd-kit?</h3>
        <p>There are many drag-and-drop libraries for React, but I chose `dnd-kit` for several reasons:</p>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Lightweight and Performant:</strong> It's built with performance in mind and doesn't have a large bundle size.</li>
            <li><strong>Accessible:</strong> It has built-in support for keyboard navigation and screen readers, which is crucial for building inclusive applications.</li>
            <li><strong>Headless and Customizable:</strong> It provides the core logic and leaves the rendering and styling completely up to you, offering maximum flexibility.</li>
        </ul>
        <h3 className="text-2xl font-bold mt-4">Core Concepts: DndContext, Draggable, and Droppable</h3>
        <p>The library revolves around a few key components. You wrap your entire interactive area in a `DndContext`. This provider manages the state of the drag-and-drop operations.</p>
        <p>Anything you want to be able to pick up and move is a `Draggable` item. In my app, each task card is a draggable. You create a custom hook `useDraggable` to get the necessary attributes and listeners.</p>
        <p>Any area you want to be able to drop an item into is a `Droppable` area. Each column in my Kanban board ('To Do', 'In Progress', 'Done') is a droppable. The `useDroppable` hook provides the info needed to detect when a draggable item is over it.</p>
        <h3 className="text-2xl font-bold mt-4">Handling the Logic</h3>
        <p>The real work happens in the `onDragEnd` event handler, which you pass to `DndContext`. This function fires when you drop an item. It gives you the `active` (draggable) item and the `over` (droppable) item.</p>
        <p>In this function, I implemented the logic to update the state of my application. If a task is dragged from the 'To Do' column to the 'In Progress' column, I update the task's status in my state array, and React re-renders the UI to reflect the change. This declarative approach, combined with `dnd-kit`'s power, makes building complex interfaces surprisingly manageable.</p>
      </div>
    ),
  },
  {
    title: "The Polymath Principle: How Being a Generalist Fuels Creativity",
    slug: "polymath-principle-generalist-creativity",
    author: "Yehia Mohammed",
    date: "August 15, 2024",
    category: "Career",
    image: "/images/blog-post-8.png",
    
    excerpt: "Developer, designer, content creator. I don't fit in one box, and that's my biggest strength. An exploration of how combining seemingly unrelated skills can lead to innovation.",
    content: (
       <div className="space-y-6">
        <p>Our society often pushes us to specialize. "Pick one thing and be the best at it." While expertise is valuable, I've found that my greatest professional fulfillment and most innovative ideas come from the intersection of my different skills: coding, design, and content creation.</p>
        
        <h3 className="text-2xl font-bold mt-4">Connecting Disparate Worlds</h3>
        <p>On the surface, creating educational content and coding in React have little in common. But the underlying principles are the same. Both require breaking down a complex system into smaller, logical, and understandable parts. My experience as a teacher directly informs how I structure my code for clarity and maintainability. My experience as a developer gives me the tools to build the educational platforms I've always dreamed of.</p>

        <h3 className="text-2xl font-bold mt-4">Innovation Happens at the Intersections</h3>
        <p>True creativity often isn't about inventing something entirely new, but about combining existing ideas in a novel way. Steve Jobs famously talked about how his calligraphy class in college influenced the typography of the first Macintosh.</p>
        <p>Similarly, my motion design skills allow me to create visual explanations for technical topics that are far more effective than a textbook. My understanding of UX (from hospitality and coding) helps me design applications that are intuitive and user-friendly. Each skill amplifies the others. I'm not just a developer who makes videos; I'm building a new type of technical content that would be impossible without a foot in both worlds.</p>

        <h3 className="text-2xl font-bold mt-4">Embrace Your Inner Generalist</h3>
        <p>Don't be afraid to pursue interests that seem unrelated. Your unique combination of skills is not a weakness; it's your competitive advantage. The ability to draw on a wide range of knowledge allows you to solve problems and see opportunities that specialists might miss. So learn that new language, pick up that instrument, take that design course. You never know which dots will connect to create your next big idea.</p>
      </div>
    )
  }
];
