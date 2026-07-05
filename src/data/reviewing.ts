export type ReviewEntry = {
  venue: string;
  short: string;
  notes?: string[];
  include: boolean;
  twoPage: boolean;
};

export const reviewing: ReviewEntry[] = [
  {
    venue: 'Human Factors in Computing Systems',
    short: 'CHI',
    notes: ['Special Recognitions for Outstanding Reviews', 'Associate Chair (2024)'],
    include: true,
    twoPage: true,
  },
  {
    venue: 'Mobile Human-Computer Interaction',
    short: 'MobileHCI ',
    notes: ['Associate Chair (2026)'],
    include: true,
    twoPage: true,
  },
  {
    venue: 'Interactive, Mobile, Wearable and Ubiquitous Technologies',
    short: 'IMWUT',
    include: true,
    twoPage: true,
  },
  {
    venue: 'International Symposium on Mixed and Augmented Reality',
    short: 'ISMAR',
    include: true,
    twoPage: true,
  },
  {
    venue: 'International Journal of Human-Computer Studies',
    short: 'IJHCS',
    include: true,
    twoPage: true,
  },
  {
    venue: 'Computer-Human Interaction in Play',
    short: 'CHI PLAY',
    include: true,
    twoPage: true,
  },
  {
    venue: 'Designing Interactive Systems',
    short: 'DIS',
    include: true,
    twoPage: true,
  },
  {
    venue: 'Interactive Surfaces and Spaces',
    short: 'ISS',
    include: true,
    twoPage: true,
  },
  {
    venue: 'International Symposium on Wearable Computers',
    short: 'ISWC',
    include: true,
    twoPage: true,
  },
  {
    venue: 'Australasian Joint Conference on Artificial Intelligence',
    short: 'AJCAI',
    include: true,
    twoPage: true,
  },
  {
    venue: 'Australian Conference on Computer-Human Interaction',
    short: 'OzCHI',
    include: true,
    twoPage: true,
  },
];
