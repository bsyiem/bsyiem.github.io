export type AwardEntry = {
  title: string;
  year?: number;
  details: string;
  include: boolean;
  twoPage: boolean;
};

export const awards: AwardEntry[] = [
  {
    title: 'Best Paper Award',
    year: 2021,
    details: 'CHI 2021 — Awarded to top 1% of 2,844 submissions',
    include: true,
    twoPage: true,
  },
  {
    title: 'Melbourne Research Scholarship',
    year: 2019,
    details: 'The University of Melbourne',
    include: true,
    twoPage: true,
  },
  {
    title: 'Top Bachelor Graduate — 3rd ranked in state',
    year: 2014,
    details: 'Bachelor of Technology (Information Technology), North Eastern Hill University',
    include: true,
    twoPage: true,
  },
  {
    title: '1st Place, IURL: Indo-US Robo League (Zonal Round)',
    year: 2013,
    details: 'North Eastern Hill University, India',
    include: true,
    twoPage: true,
  },
  {
    title: '2nd Place, CodeWars, Anakalypsi Tech Fest',
    year: 2011,
    details: 'North Eastern Hill University, India',
    include: true,
    twoPage: true,
  },
];
