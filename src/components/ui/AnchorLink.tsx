import { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

const AnchorLink = ({ href, children, onClick, ...props }: AnchorLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (href.startsWith('/#')) {
      event.preventDefault();
      const id = href.replace('/#', '');

      if (location.pathname !== '/') {
        navigate(`/#${id}`);
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default AnchorLink;