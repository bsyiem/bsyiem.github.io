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
        `My research vision extends this philosophy to adaptive systems in HCI. Concretely, I ask how we can improve user experiences and task performance through HCI systems that are intelligent, explainable, and adaptable to diverse novel contexts. This is challenging, as novel contexts provide sparse data and present a greater degree of uncertainty that limits traditional machine learning and analytical approaches. My research draws upon the active inference framework (AIF) to approach this challenge. AIF is a unifying theory of how the human brain functions, grounded in neuroscience and information theory. This framework not only enables us to construct theoretical models of human action and perception, but also provides the means by which such models can be computationally realised. My most recent work, submitted to CHI 2027, demonstrates the theoretical advantages and practical implementation of intelligent AIF agents for distributed extended reality. This work establishes a foundational basis for the practical use of AIF in HCI, and showcases how AIF can be used to model intelligent systems for novel HCI contexts without reliance on excessive data. Looking ahead, I aim to expand this work beyond XR, creating and investigating AIF models to benefit users in diverse applications.`,
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
