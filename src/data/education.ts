export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  include: boolean;
  twoPage: boolean;
};

export const education: EducationEntry[] = [
  {
    degree: 'Ph.D in Human Computer Interaction',
    institution: 'The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'February 2019 – April 2023',
    details: [
      'Thesis: "Attentional Reality: Understanding and Designing for Limited Attentional Capacity in Augmented Reality"',
      'Supervisors: Prof. Eduardo Velloso, A/Prof. Jorge Goncalves and A/Prof. Tilman Dingler',
    ],
    include: true,
    twoPage: true,
  },
  {
    degree: 'Master of Science (Computer Science)',
    institution: 'The University of Melbourne',
    location: 'Melbourne, Australia',
    period: 'February 2016 – December 2017',
    details: [
      'Weighted Average Mark: 85.75 (with Distinction)',
      'Thesis: "Gaze-supported Selection and Annotation for Holographic Interaction"',
      'Supervisor: Prof. Eduardo Velloso',
    ],
    include: true,
    twoPage: true,
  },
  {
    degree: 'Bachelor of Technology (Information Technology)',
    institution: 'North Eastern Hill University',
    location: 'Shillong, India',
    period: 'August 2010 – July 2014',
    details: [
      'Weighted Average Mark: 78.9 (First Class Honours)',
      'Project: "Popularity Analysis on Social Network using MapReduce"',
      'Supervisor: Dr. Sufal Das',
    ],
    include: true,
    twoPage: true,
  },
];
