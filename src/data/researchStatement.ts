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
        `My research vision extends this philosophy to adaptive systems in HCI. Concretely, I ask how intelligent HCI systems can be created to improve performance and support users in novel contexts, where data scarcity restricts standard machine learning approaches, uncertainty prohibits traditional analytical methods, and user trust determines system effectiveness. To this end, my research proposes an alternative to machine learning, inspired by leading theories of brain function, for designing and developing adaptive systems. Specifically, I envision these systems through the lens of the active inference framework, modelling them on current theories of human behaviour.`,
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
