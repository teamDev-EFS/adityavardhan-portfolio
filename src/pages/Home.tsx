import Hero from '../components/sections/Hero';
import FounderIdentity from '../components/sections/FounderIdentity';
import Ventures from '../components/sections/Ventures';
import CaseStudies from '../components/sections/CaseStudies';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import Capabilities from '../components/sections/Capabilities';
import OperatingPrinciples from '../components/sections/OperatingPrinciples';
import Vision from '../components/sections/Vision';
import Credibility from '../components/sections/Credibility';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <FounderIdentity />
      <Ventures />
      <CaseStudies />
      <ExperienceTimeline />
      <Capabilities />
      <OperatingPrinciples />
      <Vision />
      <Credibility />
      <Contact />
    </>
  );
};

export default Home;