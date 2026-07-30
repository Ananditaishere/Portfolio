export interface CodingProfile {
  name: string;
  username: string;
  url: string;
  icon: string;
  badge: string;
  description: string;
  color: string;
  stats: { label: string; value: string }[];
}

export const codingProfiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    username: 'oneandonlyanandita',
    url: 'https://leetcode.com/u/oneandonlyanandita/',
    icon: '💡',
    badge: '100+ Solved',
    description:
      'Active competitive programmer solving problems across Data Structures, Algorithms, Dynamic Programming, Arrays, Trees & Graphs.',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    stats: [
      { label: 'Total Solved', value: '100+' },
      { label: 'Primary Language', value: 'C++ / Python' },
      { label: 'Focus', value: 'Arrays & Trees' },
    ],
  },
  {
    name: 'GitHub',
    username: 'Ananditaishere',
    url: 'https://github.com/Ananditaishere',
    icon: '🐙',
    badge: 'Active Committer',
    description:
      'Open-source repository host containing full-stack applications, machine learning experiments, extension builds, and IaC pipelines.',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30',
    stats: [
      { label: 'Repositories', value: '5+ Real Projects' },
      { label: 'Tech Stack', value: 'Python, TS, Docker' },
      { label: 'Infrastructure', value: 'Terraform & AWS' },
    ],
  },
  {
    name: 'LinkedIn',
    username: 'ananditachakraborty10',
    url: 'https://www.linkedin.com/in/ananditachakraborty10/',
    icon: '💼',
    badge: 'Open for Roles',
    description:
      'Professional network profile highlighting computer science education, cloud certifications, hackathon achievements, and project portfolio.',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    stats: [
      { label: 'Status', value: 'Available for Hire' },
      { label: 'Location', value: 'India' },
      { label: 'Degree', value: 'B.Tech CSE @ LPU' },
    ],
  },
];
