export type SkillsData = {
  research: string[];
  proficient: string[];
  familiar: string[];
};

export const skills: SkillsData = {
  research: [
    'Quantitative methods (experimental design, parametric and non-parametric statistical analysis, equivalence testing)',
    'Qualitative methods (interviews, questionnaires, rapid ethnography, general inductive approach)',
    'Experience writing ethics applications for human subjects research',
  ],
  proficient: [
    'Unity', 'Python', 'R', 'Java', 'C', 'C#', 'JavaScript',
    'Java Spring', 'Hibernate',  'Julia', 'RxInfer',
  ],
  familiar: [
    'Keras', 'TensorFlow', 'C++', 'PHP', 'SQL (MySQL, PostgreSQL)',
    'Haskell', 'Prolog', 'Apache Hadoop', 'CSS', 'Go', '.NET'
  ],
};
