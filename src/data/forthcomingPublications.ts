export type ForthcomingPublication = {
  authors: string;
  title: string;
  venue: string;
  venueShort: string;
  venueType: 'journal' | 'conference' | 'workshop' | 'TBD';
  status: 'in-preparation' | 'accepted';
  coreRank?: string;
  scimagoRank?: string;
  include: boolean;
  twoPage: boolean;
};

export const forthcomingPublications: ForthcomingPublication[] = [
  {
    authors: 'Wendi Yu, Zhongyi Bai, Hongyu Zhou, Brandon Victor Syiem, Eduardo Velloso',
    title: 'LEMuR: Language Embedded 3D Segmentation and Object Tracking for Mixed Reality',
    venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
    venueShort: 'IMWUT',
    venueType: 'journal',
    status: 'accepted',
    scimagoRank: 'Q1',
    include: true,
    twoPage: false,
  },
];
