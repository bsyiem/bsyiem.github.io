export type UnderPreparationEntry = {
  authors: string;
  title: string;
  venue: string;
  venueShort: string;
  venueType: 'journal' | 'conference' | 'workshop' | 'TBD';
  status: 'in-preparation' | 'accepted';
  include: boolean;
  twoPage: boolean;
};

export const underPreparation: UnderPreparationEntry[] = [
  {
    authors: 'Wendi Yu, Brandon Victor Syiem, Eduardo Velloso',
    title: 'ArchiSeg: Interactive 3D Segmentation in Mixed Reality for Architectural Design',
    venue: 'To be Decided',
    venueShort: 'TBD',
    venueType: 'TBD',
    status: 'in-preparation',
    include: false,
    twoPage: false,
  },
  {
    authors: 'Wendi Yu, Zhongyi Bai, Hongyu Zhou, Brandon Victor Syiem, Eduardo Velloso',
    title: 'LEMuR: Language Embedded 3D Segmentation and Object Tracking for Mixed Reality',
    venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
    venueShort: 'IMWUT',
    venueType: 'journal',
    status: 'accepted',
    include: true,
    twoPage: false,
  },
  {
    authors: 'Jens Emil Grønbæk, Adélaïde Genay, Andrew Irlitti, Brandon Victor Syiem, Jarrod Knibbe, Emily Wong, Tiare Feuchtner, Tinghui Li, Zhongyi Bai, Eduardo Velloso',
    title: 'Grand Challenges for Distributed Mixed Reality Collaboration: A Research Agenda',
    venue: 'Foundations and Trends in Human-Computer Interaction',
    venueShort: 'FnT HCI',
    venueType: 'journal',
    status: 'accepted',
    include: true,
    twoPage: false,
  },
];
