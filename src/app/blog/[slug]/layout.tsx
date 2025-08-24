
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data-content';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Yehia Mohammed`,
    description: post.excerpt,
  };
}

// This function tells Next.js which pages to pre-render at build time.
export async function generateStaticParams() {
  return blogPosts.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
