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
    `How can we create intelligent, adaptive, and explainable technology to support users in diverse and novel task contexts? Current artificial intelligence (AI) has made significant progress towards this goal, but relies on opaque neural architectures that require extensive data, training time, and resources to operate. My research seeks to address this challenge by explicitly grounding the decision-making process of adaptive AI systems in theoretical explanations of human behaviour and needs. During my PhD, I took early steps towards this goal. I identified attentional issues in the use of novel immersive technologies, unpacked the underlying causal mechanisms that theoretically explain these issues, and finally trained a deep reinforcement learning agent on theory-informed simulations to mitigate these attentional issues. This work resulted in three top-tier publications at ISMAR [1], CHI [2] (Best Paper Award; ranked #1 HCI venue by Google Scholar Metrics), and IJHCS [3]. It also led me to recognise that user trust suffers as neural networks fail to structurally reflect the process by which humans make decisions, making their decisions harder to relate to and explain.`,
  ],

  sections: [
    {
      heading: 'Research Vision',
      include: true,
      paragraphs: [
        `My vision is to alter how we conceptualise and create adaptive AI systems, shifting from a purely data-centric to a theory-driven approach. To this end, I aim to model adaptive systems informed by theories of human psychology, physiology, and behaviour. My recent publications in 2026 better characterise human behaviour in novel HCI contexts [4, 5] and advocate for statistical methods that are theoretically more appropriate for modelling the hidden processes behind human responses [6]. To translate this knowledge into working adaptive systems, I draw on a framework from computational neuroscience called Active Inference (AIF). AIF provides a unifying theory for explaining and modelling the action and perception of intelligent beings, presenting significant potential for creating intelligent interactive systems. Yet its application in HCI remains largely unexplored, in part because AIF is mathematically complex and computationally challenging to implement, a problem this vision aims to address.`,
      ],
    },
    {
      heading: 'Contributions and Current Directions',
      include: true,
      paragraphs: [
        `My current focus is on providing practical pathways for realising AIF-grounded adaptive agents for solving HCI problems. My most recent work, under review, successfully applies AIF to solve the challenge of meaningful, embodied avatar actions across distinct physical spaces during collaborative tasks in remote extended reality (XR). I model avatar actions using graphical structures that explicitly reflect human decision-making, grounded in existing knowledge of human behaviour and motion dynamics. This initial project provides strong evidence for my vision of creating effective AI systems that rely less on extensive data and pre-training, and that explicitly model action based on relatable human processes. In the immediate future, I aim to extend this work along two concrete paths.`,
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
            `The second direction revisits my PhD focus on attentional issues, now through an active inference lens. My prior work demonstrated how the demands of visual tasks can lead users to focus excessively on augmented reality content at the expense of their surroundings [2], and how adaptive agents designed to mitigate such issues are only effective when users trust their recommendations [3]. My more recent work shows that environmental complexity and virtual content depth further hinder visual search in mixed reality, while secondary tasks increase perceived workload [5]. These issues extend to everyday technologies, from XR users searching through dense virtual content to pedestrians reading their smartphones while navigating busy streets. Addressing them adaptively therefore requires systems that are accurate, sensitive to context, and trusted by their users. AIF models grounded in how people direct their gaze and movement during such visually demanding tasks offer a promising pathway towards these systems.`,
            `Supporting attention means knowing when to cue, what to cue, and how to cue in ways users can relate to. My findings offer insights into key factors that influence each. Task demands [2] and environmental complexity [5] indicate when users' attention is most at risk, while users' goals and trust in the agent shape which cues are relevant and appreciated [3]. For instance, a reminder to look up could stop a smartphone user absorbed in a task from stepping into traffic at a busy crossing, while timely directions could help them when frequent glances towards their phone and changes of direction signal uncertainty about their location. The graphical structures I use to realise AIF in my current work can be extended to model these states from users' gaze, movement, and interactions, allowing cues that reflect the reasoning behind users' behaviour. Because this approach builds on existing theories of human behaviour, it reduces privacy-related concerns associated with collecting and storing the large volumes of user data needed to train conventional data-driven methods. In this direction, I will first employ AIF to address the trust concerns my PhD revealed in adaptive sense-making support for XR. I will then extend this approach to smartphone use while walking in busy urban environments. The outcomes will prepare adaptive systems for increasingly persistent digital displays, such as always-on smart glasses, and could inform attention support where a lapse carries the highest cost, as in driving or surgery.`,
          ],
        },
      ],
    },
    {
      heading: 'Future Work',
      include: true,
      paragraphs: [
        `My current research and immediate directions provide a starting point for a broader programme of theoretically informed human-AI systems. Such systems offer particular value when deploying emerging technologies, where no prior usage data exists to train conventional models. AIF provides a way to draw on the large body of work describing human perception, cognition, and behaviour, from models of visual search and motor control to theories of social interaction, and to translate it directly into adaptive system behaviour. A natural next step is to unite my two directions to support collaborative knowledge work in XR, with adaptive systems that preserve the meaning of collaborators' actions across physical spaces and provide attention guidance on the team's task when needed, sustaining shared awareness in remote settings. Beyond XR and mobile devices, this approach has implications for human-robot interaction, where robots must anticipate human movement and intent, for accessibility, where systems must adapt to individual abilities, and for education, where support must respond to how each learner reasons. Over time, I also aim to incorporate physiological signals, such as heart rate captured by smartwatches, allowing models to account for the full range of human psychology, physiology, and behaviour. Together, these directions work towards technology that is intelligent, adaptive, and explainable by design, answering the question at the heart of my research.`,
      ],
    },
  ],
};
