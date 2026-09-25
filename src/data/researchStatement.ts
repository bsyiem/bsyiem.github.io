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
        `I envision a future where intelligent systems no longer need mountains of data to behave sensibly, because they are built on the same principles that govern how humans themselves perceive, decide, and act. Such systems would not need to be made explainable after the fact, bolting interpretability onto an opaque model, because they would never have been opaque to begin with: their reasoning would already mirror our own. Active inference gives me a principled route toward this future, a unifying theory of brain function that lets me construct and computationally realise models of human behaviour directly, rather than approximate them from data alone. I am pursuing this vision along two fronts: enabling groups of people to collaborate seamlessly across distributed virtual spaces, and helping systems anticipate and support human attention before it lapses. Both are early instances of a broader ambition, technology that reasons with us, not merely about us.`,
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
