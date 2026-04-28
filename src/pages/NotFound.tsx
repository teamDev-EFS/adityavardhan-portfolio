import { Link } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';

const NotFound = () => {
  return (
    <section className="container-shell section-pad">
      <GlassCard className="max-w-2xl p-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary">This page does not exist.</h1>
        <p className="mt-4 text-sm leading-7 text-text-secondary">
          The route you were looking for is unavailable. Return to the main founder portfolio experience.
        </p>
        <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-primary">Back to home</Link>
      </GlassCard>
    </section>
  );
};

export default NotFound;