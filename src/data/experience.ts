export type ExperienceEntry = {
  role: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  include: boolean;
  twoPage: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Postdoctoral Research Associate',
    institution: 'The University of Sydney',
    location: 'Sydney, Australia',
    period: 'May 2024 – Present',
    details: [
      'Distributed Collaboration in Mixed Reality: Lead, supervise and support research in designing and developing collaborative mixed reality systems to enhance diverse work practices.',
      'Supervisor: Prof. Eduardo Velloso',
    ],
    include: true,
    twoPage: true,
  },
  {
    role: 'Postdoctoral Fellow',
    institution: 'Queensland University of Technology',
    location: 'Brisbane, Australia',
    period: 'January 2023 – April 2024',
    details: [
      'Scientific Workflows in Immersive Systems: understand and leverage the affordances of extended reality systems in aiding scientific analysis of remote sensing data.',
      'Supervisor: A/Prof. Selen Türkay',
    ],
    include: true,
    twoPage: true,
  },
  {
    role: 'Research Fellow',
    institution: 'The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'August 2022 – November 2022',
    details: [
      'Future of Work Project: design and execute experiments around the use of causal models to address problems related to the future of work.',
      'Supervisor: Prof. Frank Vetere',
    ],
    include: true,
    twoPage: true,
  },
  {
    role: 'Research Assistant',
    institution: 'The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'March 2022 – December 2022',
    details: [
      'Design, development and evaluation of a social augmented reality experience at the zoo using Snap Spectacles.',
    ],
    include: true,
    twoPage: false,
  },
  {
    role: 'Academic Tutor',
    institution: 'Queensland University of Technology',
    location: 'Brisbane, Australia',
    period: 'March 2023 – June 2023',
    details: [
      'Teaching: Design and Development of Immersive Environments (IGB388)',
    ],
    include: true,
    twoPage: false,
  },
  {
    role: 'Academic Tutor',
    institution: 'The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'February – July 2019, 2020, 2022',
    details: [
      'Teaching: Designing Novel Interactions (INFO90003) and Media Computation (COMP10003)',
    ],
    include: true,
    twoPage: false,
  },
  {
    role: 'Residential Leader and Tutor',
    institution: 'International House, The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'February 2019 – May 2021',
    details: [
      'Teaching: Foundations of Computing (COMP10001), Foundations of Algorithms (COMP10002) and Algorithms and Data Structures (COMP20003).',
      'Pastoral care support for students residing at the International House residential college.',
    ],
    include: true,
    twoPage: false,
  },
  {
    role: 'Lecturer',
    institution: 'North Eastern Hill University',
    location: 'Shillong, India',
    period: 'February 2018 – May 2018',
    details: [
      'Subject coordinator: Artificial Intelligence',
      'Subject co-coordinator: Computer System Programming',
    ],
    include: true,
    twoPage: false,
  },
  {
    role: 'Software Developer',
    institution: 'National Informatics Centre',
    location: 'Shillong, India',
    period: '2015 and 2018',
    details: [
      'Gazetted Entitlement Management Project: Full stack development using JSP, PostgreSQL and jQuery. (Jun 2018 – Dec 2018)',
      'Land Registration Project: Full stack development using Java Spring, Spring Security and Hibernate. (Jul 2015 – Nov 2015)',
    ],
    include: true,
    twoPage: false,
  },
  {
    role: 'Computer Support and Lab Administrator',
    institution: 'International House, The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'February 2017 – December 2017',
    details: [
      'Configuration and maintenance of laboratory computers and servers.',
      'Maintenance of networking infrastructure.',
    ],
    include: true,
    twoPage: false,
  },
];
