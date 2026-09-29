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
  'https://doi.org/10.1145/3706599.3706722', // [9] Scaling Distributed Collaboration in Mixed Reality (CHI EA 2025)
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
        `My vision is to alter how we conceptualise and create adaptive AI systems, shifting from a purely data-centric to a theory-driven approach. To this end, I aim to model adaptive systems informed by theories of human psychology, physiology, and behaviour. My recent publications in 2026 better characterise [4, 5] and model [6] human processes in novel HCI contexts. To translate this knowledge into working adaptive systems, I draw on a framework from computational neuroscience called Active Inference (AIF). AIF provides a unifying theory for explaining and modelling the action and perception of intelligent beings, presenting enormous potential for creating intelligent systems in HCI. However, AIF is known to be mathematically complex and computationally challenging to implement, a problem this vision aims to address.`,
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
          heading: 'Guiding Users Through a Crowded Attention Economy',
          include: true,
          paragraphs: [
            `The second direction revisits my PhD focus on attentional issues, now through an active inference lens. My prior work demonstrated how the demands of visual tasks can lead users to focus excessively on AR content at the expense of their surroundings [2], and how adaptive agents designed to mitigate such issues are only effective when users trust their recommendations [3]. My more recent work shows that environmental complexity and virtual content depth further hinder visual search in mixed reality, while secondary tasks increase perceived workload [5]. These issues extend to everyday technologies, from XR users searching through dense virtual content to pedestrians reading their smartphones while navigating busy streets. Addressing them adaptively therefore requires systems that are accurate, sensitive to context, and trusted by their users. AIF models grounded in how people direct their gaze and movement during such visually demanding tasks offer a promising pathway towards these systems.`,
            `Supporting attention means knowing when to cue, what to cue, and how to cue in ways users can relate to. Consider a pedestrian nearing a crossing with their eyes on their phone: walking briskly suggests overconfidence and calls for a prompt to look up, while slowing and glancing around suggests hesitation and calls for guidance, such as which way to turn. The AIF formulation from my current work can be adapted to model such behaviour, using users' gaze, movement, and interactions to predict when they need support and what that support should be. Because the model captures why a user hesitates or rushes, each cue can respond appropriately to emerging behaviour, making the agent's reasoning easier for users to recognise and trust. Through this AIF-based adaptive cueing, I will first reimagine sense-making support in XR, addressing the trust concerns revealed during my PhD. I will then extend it to smartphone use while walking, mitigating attentional issues during device use in busy urban environments. If successful, this work would prepare adaptive systems for increasingly persistent digital displays, such as always-on smart glasses. It could also inform attention support where a lapse carries the highest cost, from the driver's seat to the operating theatre.`,
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
