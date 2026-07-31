import { useState, useEffect, useCallback } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { TechStackKeyboard } from './components/TechStackKeyboard';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  // Auto-dismiss toast after 3 seconds
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(null), 3000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Anandita_Chakraborty_Resume.pdf';
    link.download = 'Anandita_Chakraborty_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Downloaded Anandita Chakraborty Resume (PDF)!');
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#050508] overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <ScrollProgress />
      <BackgroundCanvas />
      <Navbar onDownloadResume={handleDownloadResume} />
      <Hero onDownloadResume={handleDownloadResume} />
      <Marquee />
      <Projects />
      <TechStackKeyboard />
      <Timeline />
      <Certifications />
      <Achievements />
      <CodingProfiles />
      <Contact
        onCopyText={handleCopyText}
        onDownloadResume={handleDownloadResume}
      />
      <Footer />
      <FloatingActions
        onDownloadResume={handleDownloadResume}
        onCopyEmail={() => handleCopyText('anandita105205@gmail.com', 'Email address')}
      />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
