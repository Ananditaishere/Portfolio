export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  category: 'Education' | 'Certifications' | 'Projects' | 'Milestone';
  description: string;
  tags: string[];
  icon: string;
  highlight?: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'btech',
    year: '2023 – Present',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Lovely Professional University (LPU), Punjab',
    category: 'Education',
    description:
      'Focusing on Full-Stack Development, Machine Learning, DevOps, and Cybersecurity. Maintained high academic standing with S1 Category recognition.',
    tags: ['CGPA 7.33', 'Full Stack', 'AI/ML', 'DevOps', 'Cybersecurity'],
    icon: '🎓',
    highlight: 'S1 Academic Category',
  },
  {
    id: 'oracle-cert',
    year: 'March 2026',
    title: 'Oracle Certified Foundations Associate',
    subtitle: 'Oracle Cloud Infrastructure',
    category: 'Certifications',
    description:
      'Validated foundational knowledge of Oracle Cloud Infrastructure (OCI) services, security, architecture, compute, networking, and cloud database fundamentals.',
    tags: ['Cloud', 'OCI', 'Infrastructure', 'Certification'],
    icon: '🏅',
    highlight: 'Official Oracle Credential',
  },
  {
    id: 'phishing-proj',
    year: 'May 2026',
    title: 'Built & Deployed Email Phishing Detector',
    subtitle: 'Cloud-Native Security Tool',
    category: 'Projects',
    description:
      'Engineered Naive Bayes + TF-IDF classifier with Prometheus metrics middleware, Grafana live dashboard, Docker Compose stack, 6-stage Jenkins pipeline, and Terraform AWS configuration.',
    tags: ['Python', 'Docker', 'Jenkins', 'Terraform', 'AWS EC2', 'Grafana'],
    icon: '🛡️',
    highlight: 'Full CI/CD + Monitoring',
  },
  {
    id: 'focus-lock-proj',
    year: 'March 2026',
    title: 'Created Focus Lock Chrome Extension',
    subtitle: 'Productivity Tool',
    category: 'Projects',
    description:
      'Developed Manifest V3 extension featuring real-time tab monitoring, dynamic domain blocking across 13+ sites, glassmorphism UI, and session focus tracking.',
    tags: ['JavaScript', 'Manifest V3', 'Chrome APIs', 'CSS3 Glassmorphism'],
    icon: '🔒',
  },
  {
    id: 'infosys-ml',
    year: 'January 2026',
    title: 'Machine Learning Fundamentals Certification',
    subtitle: 'Infosys Springboard',
    category: 'Certifications',
    description:
      'Comprehensive coursework covering supervised & unsupervised learning algorithms, feature engineering, model evaluation, and cross-validation techniques.',
    tags: ['Machine Learning', 'Python', 'Scikit-Learn'],
    icon: '🤖',
  },
  {
    id: 'mentor-proj',
    year: 'November 2025',
    title: 'Mentor Recommendation System',
    subtitle: 'Supervised Learning Platform',
    category: 'Projects',
    description:
      'Designed and evaluated candidate pair matching models using Jaccard similarity and supervised classifiers, achieving 88.4% accuracy and 91.7% F1-score.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Supervised ML'],
    icon: '🧠',
  },
  {
    id: 'genai-certs',
    year: 'August 2025',
    title: 'Generative AI & LLMs Certifications',
    subtitle: 'Infosys Springboard',
    category: 'Certifications',
    description:
      'Completed dual certifications covering ChatGPT, Prompt Engineering, Large Language Models (LLMs), and Generative AI applications.',
    tags: ['Gen AI', 'LLMs', 'Prompt Engineering', 'ChatGPT'],
    icon: '✨',
  },
  {
    id: 'cipherschools-dsa',
    year: 'June – July 2025',
    title: 'Data Structures & Algorithms Training',
    subtitle: 'CipherSchools (40-Hour Intensive)',
    category: 'Certifications',
    description:
      'Completed rigorous training covering core data structures, algorithmic techniques, time/space complexity analysis, and competitive problem-solving patterns.',
    tags: ['C++', 'DSA', 'Algorithms', 'Complexity Analysis'],
    icon: '📚',
  },
  {
    id: 'google-cyber',
    year: 'July 2024',
    title: 'Google Cybersecurity Professional Certificate',
    subtitle: 'Coursera / Google',
    category: 'Certifications',
    description:
      'Hands-on training in network security, Python scripting, Linux command line, SIEM tools, vulnerability assessment, and incident detection.',
    tags: ['Cybersecurity', 'Kali Linux', 'SIEM', 'Network Security'],
    icon: '🔐',
  },
  {
    id: 'binary-blitz',
    year: 'March 2024',
    title: 'Secured Rank 11 in Binary Blitz Hackathon',
    subtitle: 'Competitive Coding Competition',
    category: 'Milestone',
    description:
      'Achieved Top 11 placement among hundreds of participants by rapidly building algorithmic solutions and demonstrating speed under pressure.',
    tags: ['Competitive Coding', 'Hackathon', 'Rank 11', 'Problem Solving'],
    icon: '🏆',
    highlight: 'Top 11 Rank',
  },
  {
    id: 'intermediate',
    year: '2021 – 2023',
    title: 'Higher Secondary (Intermediate)',
    subtitle: 'BSP Senior Secondary School, Chhattisgarh',
    category: 'Education',
    description: 'Completed High School Education with Science stream focusing on Mathematics, Physics, and Computer Science.',
    tags: ['69%', 'Science Stream', 'Mathematics'],
    icon: '🏫',
  },
  {
    id: 'matriculation',
    year: '2020 – 2021',
    title: 'Matriculation (10th Standard)',
    subtitle: 'BSP High School, Chhattisgarh',
    category: 'Education',
    description: 'Graduated with high distinction (94%), demonstrating early academic strength in science and mathematics.',
    tags: ['94%', 'Distinction', 'Academic Excellence'],
    icon: '🌟',
    highlight: '94% Score',
  },
];
