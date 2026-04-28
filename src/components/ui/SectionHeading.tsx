interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{title}</h2>
      <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">{description}</p>
    </div>
  );
};

export default SectionHeading;