import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import CaseStudySection from './components/CaseStudySection';
import SkillsSection from './components/SkillsSection';
import CredentialsSection from './components/CredentialsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudySection />
        <SkillsSection />
        <CredentialsSection />
        <Footer />
      </main>
    </>
  );
}
