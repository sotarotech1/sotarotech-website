import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import {
  contactEmail,
  highlights,
  projects,
  skillGroups,
  whatsappNumber,
} from './data/portfolio.js';

function App() {
  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-10 max-sm:w-[min(100%-20px,1120px)] max-sm:py-2.5">
      <Hero contactEmail={contactEmail} />
      <About highlights={highlights} />
      <Skills skillGroups={skillGroups} />
      <Projects projects={projects} />
      <Contact contactEmail={contactEmail} whatsappNumber={whatsappNumber} />
      <FloatingWhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  );
}

export default App;
