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

export const forthcomingPublications: ForthcomingPublication[] = [];
