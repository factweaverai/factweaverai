import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return [
    { slug: 'architectural-drift' },
    { slug: 'graphrag-architecture' }
  ];
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostClient params={params} />;
}
