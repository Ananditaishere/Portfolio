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
    const resumeContent = `================================================================================
ANANDITA CHAKRABORTY — RESUME
Email: anandita105205@gmail.com | Phone: +91-7009245787
Location: Phagwara, Punjab, India
GitHub: https://github.com/Ananditaishere
LinkedIn: https://www.linkedin.com/in/ananditachakraborty10/
LeetCode: https://leetcode.com/u/oneandonlyanandita/
================================================================================

SUMMARY
Computer Science Engineer specializing in Full-Stack Web Development, Machine Learning,
and Cloud Security Infrastructure. Experienced in building production-ready applications
with Python, React, Docker, Jenkins CI/CD pipelines, and AWS EC2 Terraform configuration.

EDUCATION
Lovely Professional University (LPU), Punjab, India
B.Tech in Computer Science & Engineering | 2023 – Present
• CGPA: 7.33
• Recognition: S1 Academic Category Standing

BSP Senior Secondary School, Chhattisgarh
Higher Secondary (10+2 Science Stream) | 2021 – 2023 | Score: 69%

BSP High School, Chhattisgarh
Matriculation (10th Standard) | 2020 – 2021 | Score: 94%

TECHNICAL SKILLS
• Programming Languages: Python, Java, C++, JavaScript, TypeScript, SQL, HTML/CSS
• AI / ML Frameworks: Scikit-Learn, PyTorch, Transformers, NumPy, Pandas, OpenCV
• Web & Backend: React, Tailwind CSS, Flask, Streamlit, REST APIs
• Cloud & DevOps: Docker, Docker Compose, Jenkins CI/CD, Terraform, AWS EC2, Prometheus, Grafana
• Security & OS: Linux, Kali Linux, Haar Cascades, Chrome Extension APIs (Manifest V3)

FEATURED PROJECTS
1. Email Phishing Detector — Full-Stack Cloud Security Tool (May 2026)
   • Built Naive Bayes + TF-IDF classifier with Streamlit UI & Prometheus middleware metrics.
   • Containerized stack via Docker Compose, automated 6-stage Jenkins CI/CD pipeline, and provisioned AWS EC2 via Terraform IaC.
   • GitHub: https://github.com/Ananditaishere/email-phishing-detector

2. Focus Lock — Chrome Extension for Productivity (March 2026)
   • Built Manifest V3 extension featuring real-time tab monitoring across 13+ domains.
   • Designed glassmorphism popup UI with session focus timer and dark/light themes.
   • GitHub: https://github.com/Ananditaishere/focus-lock

3. Mentor Recommendation System — Supervised Learning Platform (November 2025)
   • Supervised match prediction using Logistic Regression, Decision Trees & Random Forest achieving 88.4% accuracy & 91.7% F1-score.
   • GitHub: https://github.com/Ananditaishere/mentor-recommendation-system

4. Sentiment Analysis — TF-IDF Baseline vs. DistilBERT Transformer (April 2026)
   • Side-by-side empirical benchmark comparing TF-IDF against fine-tuned DistilBERT transformer with Flask web UI.
   • GitHub: https://github.com/Ananditaishere/sentiment-analysis

5. AI Screen Privacy System — Real-Time OpenCV Detection (February 2026)
   • Real-time secondary viewer detection running at 45 FPS on CPU using pupil localization and gaze estimation.
   • GitHub: https://github.com/Ananditaishere/screen-privacy-system

CERTIFICATIONS
• Oracle Certified Foundations Associate (Oracle Cloud Infrastructure, March 2026)
• Machine Learning Fundamentals (Infosys Springboard, January 2026)
• Master Generative AI & Tools (Infosys Springboard, August 2025)
• ChatGPT, Gen AI & LLM Architecture (Infosys Springboard, August 2025)
• Google Cybersecurity Professional Certificate (Coursera / Google, July 2024)
• 40-Hour Data Structures & Algorithms Intensive (CipherSchools, July 2025)

ACHIEVEMENTS
• 100+ Coding Problems Solved on LeetCode & HackerRank
• Rank 11 in Binary Blitz Competitive Coding Hackathon (March 2024)
================================================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Anandita_Chakraborty_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Downloaded Anandita Chakraborty Resume!');
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
