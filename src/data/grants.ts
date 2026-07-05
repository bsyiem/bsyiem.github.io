export type GrantEntry = {
  scheme: string;
  amount: string;
  year: number;
  funder: string;
  title: string;
  include: boolean;
  twoPage: boolean;
};

export const grants: GrantEntry[] = [
  {
    scheme: 'Capital Equipment (CAPEX) and Contingency Fund',
    amount: 'A$201,000',
    year: 2025,
    funder: 'University of Sydney',
    title: 'Multi-modal Interactive Gen-AI Teaching and Research Facility',
    include: true,
    twoPage: true,
  },
  {
    scheme: 'Sydney Environment Institute Collaborative Grants Scheme',
    amount: 'A$25,000',
    year: 2025,
    funder: 'University of Sydney',
    title: 'Corals As Kins',
    include: true,
    twoPage: true,
  },
  {
    scheme: 'Digital Science Initiative Ignite Grant Program',
    amount: 'A$6,500',
    year: 2024,
    funder: 'University of Sydney',
    title: 'Enhancing Mixed Reality: Quantifying and Accommodating the Effects of Situational Impairments on Mixed Reality Headsets',
    include: true,
    twoPage: false,
  },
  {
    scheme: 'Engaging Science Grants Program',
    amount: 'A$20,000',
    year: 2024,
    funder: 'Department of Environment, Science and Innovation, Queensland Government',
    title: 'Interactive Eco-Explorations: Engaging Queensland\'s Youth and Public in Conservation',
    include: true,
    twoPage: true,
  },
  {
    scheme: 'Snap Creative Challenge Grant',
    amount: 'A$17,218',
    year: 2021,
    funder: 'Snap Inc.',
    title: 'Social Augmented Reality at the Zoo',
    include: true,
    twoPage: false,
  },
];
