import { ElementType, ReactNode } from 'react';
import { Lucide } from 'lucide-react';

type GradientButtonProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  icon?: Lucide;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'children' | 'className'>;

const GradientButton = <C extends ElementType = 'button'>({
  as,
  children,
  icon: Icon,
  className = '',
  ...props
}: GradientButtonProps<C>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-gradient-to-r from-primary to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:from-primary-hover hover:to-primary ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" /> : null}
    </Component>
  );
};

export default GradientButton;