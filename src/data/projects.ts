export type ProjectEntry = {
  title: string;
  description: string;
  contributions: string[];
  include: boolean;
  twoPage: boolean;
};

export const projects: ProjectEntry[] = [
  {
    title: 'Distributed Collaboration in Mixed Reality',
    description:
      'Designing, developing and evaluating mixed reality systems that enable distributed teams to collaborate effectively across physical and virtual spaces. This research investigates how MR can bridge the gap between remote and co-located collaboration.',
    contributions: [
      'Designed and evaluated multi-user volumetric telepresence systems for hybrid co-located and remote collaboration',
      'Developed system architectures that support symmetrical, real-time multi-user interactions across distributed locations',
      'Identified proxemics and deixis strategies that emerge in distributed mixed reality workspaces',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Scientific Workflows in Immersive Systems',
    description:
      'Understanding and leveraging the affordances of extended reality for supporting scientific sense-making workflows. Focused on remote sensing and STEM data analysis tasks performed by domain experts in immersive environments.',
    contributions: [
      'Conducted systematic review of collaborative immersive systems for sense-making in STEM fields',
      'Designed and evaluated VR tools for analysing geospatial and remote sensing data with domain scientists',
      'Explored drawing-supported spatial communication strategies for collaborative sense-making in VR',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Attentional Reality: Attention in Augmented Reality',
    description:
      'Understanding the mechanisms behind attentional tunneling in AR and designing interfaces that mitigate its effects. This work disentangles the roles of virtual content and associated tasks in capturing user attention.',
    contributions: [
      'Demonstrated that task rather than virtual content is the primary driver of attentional tunneling in handheld AR',
      'Conducted observational study of a multi-modal AR installation revealing how AR competes with human docents for visitor attention',
      'Developed design guidelines for AR-supported public installations that minimise harmful attentional effects',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Adaptive AI Agents for Augmented Reality',
    description:
      'Designing and evaluating adaptive agents that monitor user behaviour in AR to proactively mitigate attentional issues and support sense-making. This research examines the interplay between user trust, preferences and agent effectiveness.',
    contributions: [
      'Developed an adaptive agent for a realistic AR sense-making task that monitors gaze and task context to guide user attention',
      'Conducted a between-subject experiment (N=60) to evaluate agent effectiveness on task performance and user behaviour',
      'Identified the role of trust and preferences in shaping user receptiveness to autonomous agent recommendations',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Immersive Learning Environments',
    description:
      'Investigating how interaction design, embodiment and interactivity in VR and AR learning environments influence learning outcomes. This research challenges assumptions about the primacy of active interaction for effective learning.',
    contributions: [
      'Identified conditions under which hands-on VR interactions can negatively impact learning compared to observational modalities',
      'Designed and evaluated collaborative immersive experiences for STEM education',
      'Applied educational data mining to assess learning trajectories in dynamic VR applications',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Augmented Reality at Zoo Exhibits',
    description:
      'Designing AR experiences for zoo exhibits to support public engagement and conservation education. This work synthesises perspectives from zoo representatives, exhibit characteristics and prior AR literature into a practical design framework.',
    contributions: [
      'Conducted scoping reviews of technology use in zoos and AR in public settings',
      'Led a co-design workshop with zoo representatives to identify challenges and opportunities for AR',
      'Developed a design framework and illustrative concepts for AR experiences across diverse zoo exhibit types',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Reflected Reality: Augmented Reality through the Mirror',
    description:
      'Proposing and evaluating a new dimension for AR that expands the augmented physical space into mirror reflections, enabling novel interaction paradigms that use both physical and reflected bodies.',
    contributions: [
      'Designed a system integrating a HoloLens 2 and smart mirror to synchronously track physical and reflected spaces',
      'Developed a design space for AR interaction with mirror reflections across user perspective, spatial reference frame and direction',
      'Conducted exploratory and formal user evaluation studies to characterise interaction performance in reflected reality',
    ],
    include: false,
    twoPage: false,
  },
  {
    title: 'Statistical Methods for Ordinal Data in HCI',
    description:
      'Advocating for better statistical practice in HCI research by examining how ordinal data are analysed and championing the use of cumulative link mixed models as a more appropriate and powerful alternative.',
    contributions: [
      'Reviewed recent HCI works to map prevalent methods for analysing ordinal measures such as Likert items',
      'Highlighted assumptions and oversights that limit insights drawn from parametric and non-parametric methods on ordinal data',
      'Provided practical worked examples of cumulative link mixed model analysis using R and published open-source datasets',
    ],
    include: false,
    twoPage: false,
  },
];
