export type SupervisionEntry = {
  level: string;
  role: string;
  title: string;
  status: 'current' | 'completed';
  count?: number;
  include: boolean;
  twoPage: boolean;
};

export const supervision: SupervisionEntry[] = [
  {
    level: 'PhD',
    role: 'Co-supervisor',
    title: 'Intention-based Avatar Retargetting in Heterogeneous Mixed Reality Physical Spaces',
    status: 'current',
    include: true,
    twoPage: true,
  },
  {
    level: 'PhD',
    role: 'Co-supervisor',
    title: 'Intelligent Blending of Distributed Physical Spaces for Remote Collaboration in Mixed Reality',
    status: 'current',
    include: true,
    twoPage: true,
  },
  {
    level: "Master's",
    role: 'Co-supervisor',
    title: 'Influence of Multi-Tasking in Mixed Reality on Contextual Blindness',
    status: 'completed',
    include: true,
    twoPage: false,
  },
  {
    level: "Master's",
    role: 'Co-supervisor',
    title: 'Augmented Reality Target Selection and Searching in the Mirror',
    status: 'completed',
    include: true,
    twoPage: false,
  },
  {
    level: "Master's",
    role: 'Co-supervisor',
    title: 'Effects of Immersion and Active Experimentation on Learning in Virtual Reality',
    status: 'completed',
    include: true,
    twoPage: false,
  },
  {
    level: "Bachelor's",
    role: 'Co-supervisor',
    title: 'User-Agent Interaction with Dialogue AI and Speech Commands in Augmented Reality',
    status: 'completed',
    include: true,
    twoPage: false,
  },
  {
    level: 'Research Internship',
    role: 'Co-supervisor',
    title: 'Queensland University of Technology',
    status: 'completed',
    count: 5,
    include: true,
    twoPage: false,
  },
  {
    level: 'Research Internship',
    role: 'Co-supervisor',
    title: 'University of Sydney',
    status: 'completed',
    count: 1,
    include: true,
    twoPage: false,
  },
];
