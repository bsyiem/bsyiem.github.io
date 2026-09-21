export type ResearchStatementSection = {
  heading: string;
  paragraphs: string[];
  include: boolean;
};

export const researchStatement: {
  intro: string[];
  sections: ResearchStatementSection[];
} = {
  intro: [
    `My research interests lie at the intersection of emerging technology, cognitive psychology, and computational intelligence. I pursue these interests through human-centred computing, where I study and leverage human behaviour to inform and create novel technology for humans. I approach technology design in three broad steps: understanding human needs and behaviour, examining theoretical underpinnings, and iteratively designing and prototyping.`,
    `My PhD research exemplifies this philosophy. I identified attentional issues in users interacting with augmented reality (AR) supported public installations, unpacked the causal mechanisms underlying these attentional issues in a controlled lab setting, and finally implemented a reinforcement learning agent designed to mitigate such attentional issues in AR. This work resulted in three top-tier human-computer interaction (HCI) publications, including full papers in IEEE ISMAR, ACM CHI (Best Paper Award; ranked #1 HCI venue by Google Scholar Metrics), and the International Journal of Human-Computer Studies (IJHCS).`,
  ],

  sections: [
    {
      heading: 'Research Vision',
      include: true,
      paragraphs: [
        `My research vision extends this philosophy to adaptive systems in HCI. Concretely, I ask how we can improve user experience and task performance through intelligent and explainable HCI systems that can quickly adapt to diverse novel contexts. Such contexts provide limited data and consequently present a greater degree of uncertainty for traditional machine learning and analytical approaches. My approach is to draw upon the active inference framework (AIF), which is a unifying theory of how the human brain functions. AIF not only enables us to construct theoretical models of human action and perception, but also provides the means by which such models can be computationally realised.`,
      ],
    },
    {
      heading: 'Research Contributions',
      include: false,
      paragraphs: [],
    },
    {
      heading: 'Future Directions',
      include: false,
      paragraphs: [],
    },
  ],
};
