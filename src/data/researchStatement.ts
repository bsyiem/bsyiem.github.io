export type ResearchStatementSection = {
  heading: string;
  paragraphs: string[];
  include: boolean;
};

// DOIs of publications (see publications.ts) cited inline in the statement, e.g. [1], [2].
// Order here determines the citation number and the References list order.
export const citations: string[] = [
  'https://doi.org/10.1109/ISMAR50242.2020.00053', // [1] Enhancing Visitor Experience or Hindering Docent Roles... (ISMAR 2020)
  'https://doi.org/10.1145/3411764.3445580', // [2] Impact of Task on Attentional Tunneling... (CHI 2021, Best Paper Award)
  'https://doi.org/10.1016/j.ijhcs.2024.103324', // [3] Addressing Attentional Issues in Augmented Reality with Adaptive Agents... (IJHCS 2024)
  'https://doi.org/10.1016/j.ijhcs.2025.103725', // [4] An Epistemic Network Analysis... (IJHCS 2026)
  'https://doi.org/10.1145/3772318.3790976', // [5] Searching Through Complex Worlds... (CHI 2026)
  'https://doi.org/10.1145/3772318.3790821', // [6] Better Assumptions, Stronger Conclusions... (CHI 2026)
];

export const researchStatement: {
  intro: string[];
  sections: ResearchStatementSection[];
} = {
  intro: [
    `How can we create technology that is intelligent, adaptive, and explainable in diverse and increasingly novel contexts to support user experiences and task performance? Current artificial intelligence (AI) has made significant progress towards this goal, but often relies on deep neural architectures that require extensive data, training time, and resources. In addition, these AI systems are opaque, and their growing complexity renders their decision-making increasingly difficult to explain. My research seeks to ground the design of adaptive AI systems in theoretical explanations of human behaviour and needs. During my PhD, I took early steps towards this goal. I first identified attentional issues in the use of novel immersive technologies such as augmented reality (AR), then unpacked the underlying causal mechanisms that theoretically explain these issues, and finally trained a deep reinforcement learning agent on theory-informed simulations to mitigate them. This work resulted in three top-tier publications at ISMAR [1], CHI [2] (Best Paper Award; ranked #1 HCI venue by Google Scholar Metrics), and IJHCS [3]. It also signalled that, for users to trust and effectively use adaptive systems, AI must better reflect the process by which humans make decisions.`,
  ],

  sections: [
    {
      heading: 'Research Vision',
      include: true,
      paragraphs: [
        `My vision is to address this persistent challenge by creating adaptive AI systems whose actions and decisions are relatable and explainable. To this end my efforts have worked towards adaptive systems that are modelled on, and reflect the processes of, human psychology, physiology, and behaviour. I have published foundational work that helps us better characterise [4, 5] and model [6] human behaviour and responses in different HCI contexts. My current efforts translate this knowledge into adaptive systems, specifically through the active inference framework (AIF) that enables me to articulate models that describe human behaviour and shape adaptive system actions. AIF is a unifying theory of brain function that explains the action and perception of intelligent beings through generative models that minimise surprise. It demonstrates enormous potential for creating intelligent systems, but remains mathematically challenging to parse. My current work that is under review applies AIF to solve the challenge of meaningful, embodied avatar actions across distinct physical spaces during collaborative tasks in remote extended reality. I model avatar actions using graphical structures that explicitly reflect human decision-making, grounded in existing knowledge of human behaviour and motion dynamics. This initial project provides strong evidence for my vision of creating effective AI systems that rely less on extensive data and pre-training, and that explicitly model action based on relatable human processes. In the immediate future, I aim to extend this work along two concrete paths. The first broadens my avatar models to support richer collaboration among larger groups in distributed XR. The second applies AIF to adaptive cueing, extending my PhD research on attentional issues by grounding attention-support interventions in the same theoretical framework.`,
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
