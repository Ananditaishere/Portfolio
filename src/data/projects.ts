export type ProjectCategory = 'Full Stack' | 'Frontend' | 'AI/ML' | 'Backend';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  date: string;
  categories: ProjectCategory[];
  featured: boolean;
  techStack: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  liveUrl?: string;
  initials: string;
  gradient: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'email-phishing-detector',
    title: 'Email Phishing Detector',
    shortDesc:
      'Production-ready security tool combining Naive Bayes + TF-IDF email classification with Docker, Jenkins CI/CD, and Terraform AWS infrastructure.',
    fullDesc:
      'End-to-end security solution for analyzing email and message text for phishing indicators, credential theft lures, and unauthorized access links. Features a Streamlit frontend, Prometheus metrics middleware, Grafana observability dashboards, and full cloud deployment pipeline.',
    date: 'May 2026',
    categories: ['Full Stack', 'AI/ML'],
    featured: true,
    techStack: [
      'Python',
      'Scikit-Learn',
      'Streamlit',
      'Docker',
      'Jenkins',
      'AWS EC2',
      'Terraform',
      'Prometheus',
      'Grafana',
    ],
    features: [
      'Naive Bayes + TF-IDF classifier trained on unigrams and bigrams',
      'Header & EML file parsing for Subject, Sender, and Body extraction',
      'Explainable AI indicators highlighting top driving keywords',
      'Prometheus real-time metrics for requests, latency, and confidence',
      'Grafana live dashboard for request volume and risk distribution',
      'Docker Compose stack for one-command local startup',
      'Jenkins 6-stage CI/CD pipeline',
      'Terraform AWS provisioning with VPC, Subnet, and Security Groups',
    ],
    challenges: [
      'Designed a metrics middleware layer that exposes Prometheus-compatible endpoints without impacting inference latency',
      'Built a 6-stage Jenkins pipeline handling build, test, containerize, push, and deploy stages',
      'Configured Terraform IaC for reproducible AWS infrastructure across environments',
    ],
    githubUrl: 'https://github.com/Ananditaishere/email-phishing-detector',
    initials: 'EPD',
    gradient: 'from-violet-600 to-cyan-500',
    metrics: [
      { label: 'Accuracy', value: '96.5%+' },
      { label: 'Latency', value: '<1.8ms' },
      { label: 'CI/CD Stages', value: '6' },
    ],
  },
  {
    id: 'focus-lock',
    title: 'Focus Lock',
    shortDesc:
      'Chrome Extension for real-time tab monitoring & URL filtering. Blocks distracting websites with a glassmorphic UI and cinematic blocked page.',
    fullDesc:
      'A Chrome Extension that intercepts navigation to blocked sites instantly, featuring a glassmorphic popup UI with backdrop blur, theme switching, session timer, and a cinematic blocked page with animated gradients and floating particles.',
    date: 'March 2026',
    categories: ['Frontend'],
    featured: false,
    techStack: [
      'JavaScript (ES6+)',
      'Chrome Extension APIs',
      'Manifest V3',
      'HTML5',
      'CSS3',
    ],
    features: [
      'Real-time tab monitoring via chrome.tabs.onUpdated and chrome.webNavigation',
      'Dynamic blocked-site list with instant updates through popup UI',
      'Glassmorphic popup with frosted-glass design and micro-animations',
      'Dark/light theme switching with persisted preferences',
      'Cinematic blocked page with animated gradients and floating particles',
      'Session timer tracking current and cumulative focus time',
      'Subdomain-aware URL matching with full word boundary detection',
    ],
    challenges: [
      'Handled Manifest V3 ephemeral service worker lifecycle — all state persisted to chrome.storage.local',
      'Built subdomain-aware URL matching that blocks youtube.com but not notyoutube.com',
      'Replaced setInterval with chrome.alarms API for timer survival across worker restarts',
    ],
    githubUrl: 'https://github.com/Ananditaishere/focus-lock',
    initials: 'FL',
    gradient: 'from-amber-500 to-orange-600',
    metrics: [
      { label: 'Sites Tested', value: '13+' },
      { label: 'Manifest', value: 'V3' },
    ],
  },
  {
    id: 'mentor-recommendation',
    title: 'Mentor Recommendation System',
    shortDesc:
      'Supervised ML model recommending mentors to students based on skill alignment & domain preferences, achieving 88.4% accuracy with 91.7% F1-score.',
    fullDesc:
      'Full-stack mentor recommendation tool that predicts high-quality student-mentor matches using supervised machine learning classification. Trains and evaluates Logistic Regression, Decision Trees, and Random Forest classifiers on 10,000 candidate pairs with Jaccard similarity matrices.',
    date: 'November 2025',
    categories: ['AI/ML'],
    featured: false,
    techStack: [
      'Python',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Streamlit',
    ],
    features: [
      'Programmatic synthetic dataset with 1,000 students and 200 mentors across 6 domains',
      'Multi-model comparison: Logistic Regression, Decision Tree, Random Forest',
      'Interactive Streamlit web app with real-time match confidence scores',
      'Automated performance visualizations with grouped bar charts',
      'Jaccard similarity-based skill alignment scoring',
    ],
    challenges: [
      'Designed deterministic domain heuristics for realistic, non-random synthetic data generation',
      'Implemented Jaccard similarity matrices for multi-dimensional skill alignment',
      'Introduced controlled 5% label noise to simulate real-world subjective preferences',
    ],
    githubUrl:
      'https://github.com/Ananditaishere/mentor-recommendation-system',
    initials: 'MRS',
    gradient: 'from-emerald-500 to-teal-600',
    metrics: [
      { label: 'Accuracy', value: '88.4%' },
      { label: 'F1-Score', value: '91.7%' },
      { label: 'Pairs', value: '10K' },
    ],
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Benchmark',
    shortDesc:
      'NLP benchmark comparing TF-IDF + Logistic Regression against fine-tuned DistilBERT transformer on movie reviews, with a live Flask web interface.',
    fullDesc:
      'Rigorous side-by-side comparative analysis of two sentiment classification paradigms: a fast TF-IDF baseline and a deep contextual DistilBERT transformer. Deployed with a modern, glassmorphic Flask web interface for live side-by-side review analysis with confidence scores and latency metrics.',
    date: 'April 2026',
    categories: ['AI/ML', 'Full Stack'],
    featured: true,
    techStack: [
      'Python',
      'PyTorch',
      'Transformers',
      'Scikit-Learn',
      'Flask',
      'HTML/CSS/JS',
    ],
    features: [
      'Side-by-side model comparison with live predictions and confidence percentages',
      'Negation & context handling evaluation with double negation test suite',
      'DistilBERT fine-tuning for complex contextual understanding',
      'Flask REST API with /predict JSON endpoint',
      'Automated comparison bar charts across Accuracy, Precision, Recall, F1',
      'Glassmorphic frontend with real-time inference latency display',
    ],
    challenges: [
      'Fine-tuned DistilBERT to handle complex negations like "not bad" and "hardly a masterpiece"',
      'Built a comparative evaluation framework that benchmarks both models on identical test sets',
      'Designed a live Flask UI rendering simultaneous predictions from both model architectures',
    ],
    githubUrl: 'https://github.com/Ananditaishere/sentiment-analysis',
    initials: 'SA',
    gradient: 'from-pink-500 to-rose-600',
    metrics: [
      { label: 'TF-IDF F1', value: '88.9%' },
      { label: 'BERT F1', value: '92.8%' },
      { label: 'Latency', value: '~1.2ms' },
    ],
  },
  {
    id: 'screen-privacy',
    title: 'AI Screen Privacy System',
    shortDesc:
      'Real-time secondary-viewer detection and screen obfuscation using OpenCV and classical computer vision, running at 45 FPS on CPU.',
    fullDesc:
      'Lightweight, real-time screen privacy protection system that monitors a live camera feed to detect when a secondary viewer is looking at the screen. Uses Haar Cascades for face detection, pupil localization for gaze estimation, and temporal alert smoothing to prevent false positives.',
    date: 'February 2026',
    categories: ['AI/ML'],
    featured: false,
    techStack: ['Python', 'OpenCV', 'NumPy', 'Haar Cascades'],
    features: [
      'Face detection via Haar Cascades with primary user identification',
      'Pupil localization & gaze estimation using adaptive thresholding',
      'Distance-to-center and face-area heuristic for primary user tracking',
      'Temporal alert smoothing requiring 5 consecutive gazing frames',
      'Visual privacy obfuscation with blur overlay and warning banner',
      'Debug overlay mode showing bounding boxes and pupil ratios',
      'Zero GPU dependency — runs at 45 FPS on standard CPUs',
    ],
    challenges: [
      'Implemented pupil contour analysis using adaptive grayscale thresholding for gaze direction',
      'Designed temporal filtering to prevent false positives from brief glances',
      'Achieved 84.2% end-to-end accuracy across 3 different lighting conditions',
    ],
    githubUrl: 'https://github.com/Ananditaishere/screen-privacy-system',
    initials: 'SPS',
    gradient: 'from-blue-600 to-indigo-600',
    metrics: [
      { label: 'Accuracy', value: '84.2%' },
      { label: 'FPS', value: '45' },
      { label: 'Frames Tested', value: '120' },
    ],
  },
];
