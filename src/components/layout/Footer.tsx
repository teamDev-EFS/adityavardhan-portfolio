import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#080d19]/90">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <p className="text-lg font-semibold text-text-primary">Aditya Vardhan</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
            Founder & CEO of EpicForge Software and Astrova Labs — building AI-native systems, product infrastructure, and high-leverage software for serious operators.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-tertiary">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
            <Link to="/now" className="transition-colors duration-200 hover:text-text-primary">Now</Link>
            <Link to="/writing" className="transition-colors duration-200 hover:text-text-primary">Writing</Link>
            <Link to="/press-kit" className="transition-colors duration-200 hover:text-text-primary">Press Kit</Link>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-tertiary">Ventures</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
            <span>EpicForge Software</span>
            <span>Astrova Labs</span>
            <span>PromptFloe</span>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-tertiary">Connect</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-text-primary"><Mail className="h-4 w-4" />Mail</a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-text-primary"><Linkedin className="h-4 w-4" />LinkedIn</a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-text-primary"><Github className="h-4 w-4" />GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-text-tertiary">
        © 2025 Aditya Vardhan. Built for investors, global clients, and enterprise collaborators.
      </div>
    </footer>
  );
};

export default Footer;