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
        `My vision is to alter how we conceptualise and create adaptive AI systems, shifting from a data-centric to a theory-driven approach. To this end, I aim to model adaptive systems informed by theories of human psychology, physiology, and behaviour. My recent publications in 2026 better characterise [4, 5] and model [6] human processes in novel HCI contexts. To translate this knowledge into working adaptive systems, I draw on a framework from computational neuroscience called Active Inference (AIF). AIF provides a unifying theory for explaining and modelling the action and perception of intelligent beings, presenting enormous potential for creating intelligent systems in HCI. However, AIF is known to be mathematically complex and computationally challenging to implement, a problem this vision aims to address.`,
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
          heading: 'Bringing Face-to-Face Dynamics to Remote XR Collaboration',
          include: true,
          paragraphs: [
            `This direction builds directly on my existing work investigating new opportunities, interactions, and user behaviours in distributed XR collaboration. This includes work that provides empirical insights into how user communication strategies are shaped by XR's three-dimensional illustrative capabilities [4], and the practical implementation and evaluation of a novel XR telepresence system and its influence on proxemic and deictic behaviours during collaboration [10]. I have also organised a workshop specifically on the challenge of scaling distributed collaboration beyond pairs to larger groups [9], reviewed the broader landscape of collaborative XR for sense-making in STEM disciplines [8], and recently co-authored a research agenda with international experts that identifies six grand challenges facing distributed XR collaboration [7]. Together, these studies provide the behavioural understanding that my AIF models are designed to encode.`,
            `A core challenge in this research agenda [7] is spatial heterogeneity, which surfaces when collaborators' physical spaces do not match during XR meetings. My work under review addresses one aspect of this, avatar locomotion across distinct physical spaces, but effective distributed collaboration also requires that collaborators' proxemic and gestural behaviours be preserved across these spaces, a challenge that grows as collaboration scales beyond pairs to larger groups [9]. This research direction extends the current AIF formulation to also model these behaviours by drawing on my prior findings on proxemics, deixis [10], and communication strategies [4], so that they retain their meaning in each collaborator's physical space. Realising this direction would bring remote XR collaboration closer to face-to-face interaction, enabling users to employ familiar communication strategies without needing to adapt their behaviour to fit current technological limitations.`,
          ],
        },
        {
          heading: 'Extending AIF to Adaptive Cueing',
          include: true,
          paragraphs: [
            `The second path revisits my PhD focus on attentional issues, but through an AIF lens. My PhD work demonstrated that adaptive agents are only effective when users trust their recommendations [3]. Such agents must therefore be accurate and reveal cueing strategies that align with human decision-making. This challenge is not unique to XR: any technology that competes with a person's physical environment for their attention, from smartphones to in-vehicle displays, faces the same underlying trust and design gap, and stands to benefit from cueing agents that are grounded in how people actually attend to and act within their surroundings, and that know when to intervene, cueing only when needed.`,
            `AIF offers a principled way to close this gap. An AIF-grounded cueing agent identifies both what to cue and when to intervene, avoiding constant or arbitrary interruptions and earning the trust that a heuristic, black-box agent could not. I plan to develop and evaluate gaze-based AIF models of user attention, testing them in XR task simulations, returning to the context of my PhD, and in smartphone use while walking. Beyond these testbeds, the same approach extends naturally to other high-risk, divided-attention contexts, such as prompting drivers back to the road when their attention lingers on dashboard displays, or supporting surgeons during digital guidance. Realising this direction would help make everyday, attention-competing technologies safer and more trustworthy, without requiring the extensive behavioural data conventional approaches demand.`,
          ],
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
