export type TeachingEntry = {
  code?: string;
  title: string;
  role: string;
  year: string;
  include: boolean;
  twoPage: boolean;
};

export type TeachingGroup = {
  institution: string;
  short: string;
  entries: TeachingEntry[];
};

export const teaching: TeachingGroup[] = [
  {
    institution: 'Queensland University of Technology',
    short: 'QUT',
    entries: [
      {
        code: 'IGB388',
        title: 'Design and Development of Immersive Environments',
        role: 'Tutor',
        year: '2023',
        include: true,
        twoPage: true,
      },
    ],
  },
  {
    institution: 'The University of Melbourne',
    short: 'Unimelb',
    entries: [
      {
        code: 'INFO90003',
        title: 'Designing Novel Interactions',
        role: 'Tutor',
        year: '2019-2020',
        include: true,
        twoPage: true,
      },
      {
        code: 'COMP10003',
        title: 'Media Computation',
        role: 'Tutor',
        year: '2022',
        include: true,
        twoPage: true,
      },
    ],
  },
  {
    institution: 'International House, The University of Melbourne',
    short: 'IHouse, Unimelb',
    entries: [
      {
        code: 'COMP10001',
        title: 'Foundations of Computing',
        role: 'Tutor',
        year: '2019–2021',
        include: true,
        twoPage: true,
      },
      {
        code: 'COMP10002',
        title: 'Foundations of Algorithms',
        role: 'Tutor',
        year: '2019–2021',
        include: true,
        twoPage: true,
      },
      {
        code: 'COMP20003',
        title: 'Algorithms and Data Structures',
        role: 'Tutor',
        year: '2019–2021',
        include: true,
        twoPage: true,
      },
    ],
  },
  {
    institution: 'North-Eastern Hill University',
    short: 'NEHU',
    entries: [
      {
        title: 'Artificial Intelligence',
        role: 'Lecturer',
        year: '2018',
        include: true,
        twoPage: true,
      },
      {
        title: 'Computer System Programming',
        role: 'Lecturer',
        year: '2018',
        include: true,
        twoPage: true,
      },
    ],
  },
];
