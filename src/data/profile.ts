export const profile = {
  name: {
    first:   'Brandon',
    middle:  'Victor',
    last:    'Syiem',
    full:    'Brandon Victor Syiem',
    display: 'Brandon Syiem',
  },

  title:      'Postdoctoral Research Associate',
  department: 'School of Computer Science',
  institution:'The University of Sydney',
  location:   'Sydney, Australia',

  tagline: 'HCI Researcher — shaping user behaviours, experiences and work practices through XR and AI.',
  quote:   'To design technology for humans, I believe I must first understand human design. My research is an unending endeavour to do both.',
  bio:     'I am an HCI researcher fascinated by how human psychology, physiology, and behaviour can inform intelligent technological solutions. My research draws on those insights to investigate how eXtended Reality (XR) and Artificial Intelligence (AI) can be designed and implemented to enhance individual, social, and collaborative experiences.',
  metaDescription: 'HCI researcher — XR, AI, and human behaviour',

  photo: '/assets/images/brandon.jpg',

  previousPositions: [
    'PhD · The University of Melbourne, 2023',
    'PostDoc · Queensland University of Technology',
    'PostDoc · The University of Melbourne',
  ],

  contact: {
    email:   'brandon.syiem@sydney.edu.au',
    website: 'https://bsyiem.github.io',
  },

  socials: {
    scholar:      'https://scholar.google.com/citations?user=NLv_1gMAAAAJ&hl=en',
    linkedin:     'https://www.linkedin.com/in/brandon-victor-syiem-605455a8/',
    researchgate: 'https://www.researchgate.net/profile/Brandon-Syiem',
  },
} as const;
