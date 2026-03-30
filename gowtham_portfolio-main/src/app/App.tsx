import { Header } from './components/Header';
import { LandingIntroSection } from './components/LandingIntroSection';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EditingVideosSection } from './components/EditingVideosSection';
import { PosterDesigningSection } from './components/PosterDesigningSection';
import { HireMeSection } from './components/HireMeSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div id="home"><LandingIntroSection /></div>
        <div id="hero-showcase"><HeroSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="services"><ServicesSection /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="videos"><EditingVideosSection /></div>
        <div id="posters"><PosterDesigningSection /></div>
        <div id="contact"><HireMeSection /></div>
      </main>
      <FooterSection />
    </div>
  );
}
