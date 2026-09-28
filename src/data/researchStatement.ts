export type ResearchStatementSubsection = {
  heading: string;
  paragraphs: string[];
  include: boolean;
};

export type ResearchStatementSection = {
  heading: string;
  paragraphs: string[];
  subsections?: ResearchStatementSubsection[];
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
  'https://doi.org/10.1108/FTHCI-08-2025-0109', // [7] Grand Challenges for Distributed Mixed Reality Collaboration (FnT HCI 2026)
  'https://doi.org/10.1080/0144929X.2024.2441963', // [8] A Systematic Exploration of Collaborative Immersive Systems for Sense-making in STEM (BIT 2025)
  'https://doi.org/10.1145/3706599.370672', // [9] Scaling Distributed Collaboration in Mixed Reality (CHI EA 2025)
  'https://doi.org/10.1145/3613904.3642814', // [10] Volumetric Hybrid Workspaces (CHI 2024)
];

export const researchStatement: {
  intro: string[];
  sections: ResearchStatementSection[];
} = {
  intro: [
    `How can we create intelligent, adaptive, and explainable technology to support users in diverse and novel task contexts? Current artificial intelligence (AI) has made significant progress towards this goal, but relies on opaque neural architectures that require extensive data, training time, and resources to operate. My research seeks to address this challenge by explicitly grounding the decision-making process of adaptive AI systems in theoretical explanations of human behaviour and needs. During my PhD, I took early steps towards this goal. I identified attentional issues in the use of novel immersive technologies, unpacked the underlying causal mechanisms that theoretically explain these issues, and finally trained a deep reinforcement learning agent on theory-informed simulations to mitigate these attentional issues. This work resulted in three top-tier publications at ISMAR [1], CHI [2] (Best Paper Award; ranked #1 HCI venue by Google Scholar Metrics), and IJHCS [3]. It also revealed that user trust suffers as neural networks fail to structurally reflect the process by which humans make decisions, making their decisions harder to relate to and explain.`,
  ],

  sections: [
    {
      heading: 'Research Vision',
      include: true,
      paragraphs: [
        `My vision is to alter how we conceptualise and create adaptive AI systems, shifting from a data-centric to a theory-driven approach. To this end, I aim to model adaptive systems informed by theories of human psychology, physiology, and behaviour. My prior work better characterises [4, 5] and models [6] human processes in diverse HCI contexts. My recent work translates this knowledge into working adaptive systems that address existing challenges in HCI through a unifying framework in computational neuroscience called Active Inference (AIF). AIF explains the action and perception of intelligent beings through generative models that minimise surprise, demonstrating enormous potential for creating intelligent systems, but remaining challenging to formalise and implement.`,
      ],
    },
    {
      heading: 'Contributions and Current Directions',
      include: true,
      paragraphs: [
        `My current focus is on providing practical pathways for realising AIF-grounded adaptive agents for solving HCI problems. My most recent work, under review, successfully applies AIF to solve the challenge of meaningful, embodied avatar actions across distinct physical spaces during collaborative tasks in remote extended reality. I model avatar actions using graphical structures that explicitly reflect human decision-making, grounded in existing knowledge of human behaviour and motion dynamics. This initial project provides strong evidence for my vision of creating effective AI systems that rely less on extensive data and pre-training, and that explicitly model action based on relatable human processes. In the immediate future, I aim to extend this work along two concrete paths.`,
      ],
      subsections: [
        {
          heading: 'Intelligent Avatars for Group Collaboration in XR',
          include: true,
          paragraphs: [
            `This direction builds on an extensive body of work investigating and designing for XR collaboration. I co-authored a research agenda identifying six grand challenges facing distributed mixed reality collaboration [7]. I have investigated several of these challenges directly: examining how drawing dimensionality and gesture shape communication strategies during spatial dialogue in VR [4], and designing and evaluating a volumetric telepresence system in which proxemic behaviours and deixis proved central to how remote and co-located users negotiated shared objects and space [10]. I have also organised a workshop specifically on the challenge of scaling distributed collaboration beyond pairs to larger groups [9], and reviewed the wider landscape of collaborative immersive systems for sense-making in STEM to surface prevailing trends and open gaps [8].`,
            `Building on these findings, I plan to extend my avatar models to support richer collaboration among larger groups of remote users in distributed XR. Specifically, I aim to model how collaborators use proxemic behaviours, such as interpersonal distance and orientation, and gesture cues to communicate intent and coordinate joint tasks across physically distinct spaces, extending my prior work on proxemics and deixis in telepresence [10] and directly addressing the scaling challenge my workshop identified as a barrier to larger-group MR collaboration [9]. Realising this vision would enable spatially rich collaboration across distances, from design to emergency response, bringing remote communication closer to the face-to-face interactions we are familiar with.`,
          ],
        },
        {
          heading: 'Extending AIF to Adaptive Cueing',
          include: false,
          paragraphs: [],
        },
      ],
    },
    {
      heading: 'Future Work',
      include: false,
      paragraphs: [],
    },
  ],
};
