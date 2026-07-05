export type ActivityEntry = {
  title: string;
  year?: number | string;
  include: boolean;
  twoPage: boolean;
};

export const activities: ActivityEntry[] = [
  {
    title: 'Local Chair, Summer School on "XR Research Methods", University of Sydney',
    year: 2025,
    include: true,
    twoPage: false,
  },
  {
    title: 'Co-organiser, Workshop on "Distributed Mixed Reality", University of Sydney',
    year: 2024,
    include: true,
    twoPage: false,
  },
  {
    title: 'Co-led hackathon on social augmented reality for the zoo, University of Melbourne',
    year: 2022,
    include: true,
    twoPage: false,
  },
  {
    title: 'Organiser, Masterclass Seminar Series, HCI Group, University of Melbourne',
    year: 2019,
    include: true,
    twoPage: false,
  },
  {
    title: 'Machine Learning Certificate, Stanford University via Coursera',
    year: 2018,
    include: true,
    twoPage: false,
  },
  {
    title: 'Exchange Programme for Japan-SAARC University Students under the Kizuna Programme',
    year: 2012,
    include: true,
    twoPage: false,
  },
];
