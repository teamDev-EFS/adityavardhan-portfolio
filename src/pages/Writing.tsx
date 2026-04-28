import GlassCard from '../components/ui/GlassCard';
import { WritingPost } from '../types';

const posts: WritingPost[] = [
  {
    slug: 'ai-systems-should-reduce-drag',
    title: 'AI systems should reduce drag, not create more dashboards',
    summary: 'A short thesis on practical AI infrastructure and why operational leverage matters more than novelty.',
    category: 'AI Systems'
  },
  {
    slug: 'founder-led-product-execution',
    title: 'Founder-led product execution is a different operating discipline',
    summary: 'On balancing speed, architecture, and business intent while shipping software that compounds.',
    category: 'Product'
  },
  {
    slug: 'software-as-operating-leverage',
    title: 'Software should behave like operating leverage',
    summary: 'Why modern products must do more than display information — they should drive momentum.',
    category: 'Strategy'
  }
];

const Writing = () => {
  return (
    <section className="container-shell section-pad">
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Writing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">Notes on product systems, AI infrastructure, and execution.</h1>
      </div>
      <div className="mt-10 grid gap-6">
        {posts.map((post) => (
          <GlassCard key={post.slug}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary">{post.category}</p>
            <h2 className="mt-3 text-xl font-semibold text-text-primary">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{post.summary}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Writing;