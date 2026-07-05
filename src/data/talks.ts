export type TalkEntry = {
  title: string;
  venue: string;
  year: number;
  details?: string;
  include: boolean;
  twoPage: boolean;
};

export const talks: TalkEntry[] = [
  {
    title: 'Speaker: "AI x HCI"',
    venue: 'Sydney AI Meetup, University of Sydney',
    year: 2025,
    details: 'Co-organised by USYD Machine Learning Research Network (MLRN) and the Sydney AI Meetup team',
    include: true,
    twoPage: false,
  },
  {
    title: 'Speaker and Panel Member: "Ethics Beyond the Form"',
    venue: 'USyd Seminar',
    year: 2025,
    include: true,
    twoPage: false,
  },
  {
    title: 'Provocation Talk: "Are you mistreating your ordinal data?"',
    venue: 'OzCHI 2025, Sydney, Australia',
    year: 2025,
    include: true,
    twoPage: false,
  },
  {
    title: 'Guest Lecture: Design and Development of Immersive Environments (IGB388)',
    venue: 'Queensland University of Technology',
    year: 2023,
    details: 'Coordinator: A/Prof. Selen Türkay',
    include: true,
    twoPage: false,
  },
  {
    title: 'Guest Lecture: Usability Engineering (COMP5427)',
    venue: 'University of Sydney',
    year: 2023,
    details: 'Coordinators: Prof. Judy Kay and Dr. Zhanna Sarsenbayeva',
    include: true,
    twoPage: false,
  },
  {
    title: 'Guest Lecture: Usability Evaluation Methods (INFO20004)',
    venue: 'University of Melbourne',
    year: 2021,
    details: 'Coordinator: Dr. Melissa Rogerson',
    include: true,
    twoPage: false,
  },
];
