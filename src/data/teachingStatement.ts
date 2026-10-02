export type TeachingStatementSection = {
  heading: string;
  paragraphs: string[];
  include: boolean;
};

export const teachingStatement: {
  intro: string[];
  sections: TeachingStatementSection[];
} = {
  intro: [
    `I view teaching as a constantly evolving practice to develop students into thinkers. My goal with teaching is threefold: to provide content and context, to encourage confidence in voicing questions and doubts, and to inspire curiosity. I have developed this practice across eight subjects at the University of Melbourne (Unimelb), the Queensland University of Technology (QUT), and North-Eastern Hill University (NEHU), in Australia and India. As a postdoctoral researcher at the University of Sydney (USyd), I now also supervise research students from Bachelor to PhD level. I welcome the opportunity to teach courses in human-computer interaction (HCI), including HCI research methodology, pervasive systems, immersive technologies, and human-AI interaction, and am equally enthusiastic about foundational courses in programming, algorithms, and data structures.`,
  ],

  sections: [
    {
      heading: 'Teaching Experience',
      include: true,
      paragraphs: [
        `My teaching experience spans coordinating courses, developing subject material, and delivering lectures and tutorials. At NEHU, I coordinated and lectured Artificial Intelligence, developing the lecture content, three assignments with grading rubrics, and the final exam, and also lectured Computer System Programming. As a residential tutor at International House, a Unimelb college, I developed my own tutorials for Foundations of Computing (COMP10001), Foundations of Algorithms (COMP10002), and Algorithms and Data Structures (COMP20003), designing each to stand alone for residents from Unimelb, Monash, RMIT, and other universities. My teaching there received consistently positive feedback from residents, and I was rehired each year to tutor these subjects while I remained a resident. My tutoring roles at Unimelb, in Designing Novel Interactions (INFO90003) and Media Computation (COMP10003), and at QUT, in Design and Development of Immersive Environments (IGB388), involved delivering tutorials, demonstrations, and feedback. These subjects received strong student evaluations, averaging above 4 out of 5 at Unimelb and 80% overall satisfaction at QUT. Beyond these roles, I actively seek opportunities to lecture, as evidenced by guest lectures and invited talks on usability, immersive technologies, and human-centred AI at Unimelb, QUT, and USyd.`,
      ],
    },
    {
      heading: 'Teaching Philosophy & Practice',
      include: true,
      paragraphs: [
        `My approach to learning is grounded in a position that sits between positivism and constructivism. Specifically, I believe that objective truth exists, but that our access to it is limited by our senses and the available information. Knowledge must therefore be constructed through active and informed explorations that build on what we already know. This shapes how I approach the classroom. Instead of leading with a solution, I construct one alongside students, using examples from contexts they already understand to make the underlying reasoning visible.`,
        `My primary means of realising this is active learning, where students participate in ideating, designing, and evaluating solutions. How I put this into practice varies with the nature of the course. In design-oriented courses that I have taught, such as Designing Novel Interactions (INFO90003) at Unimelb and Design and Development of Immersive Environments (IGB388) at QUT, my role was to guide students through the tension between novelty, practicality, and feasibility. I did this largely through constraint-driven ideation, narrowing the problem space so that what remains open can be explored more creatively and grounded more technically. This was particularly salient in Designing Novel Interactions, which followed a flipped classroom model where students engaged with lecture content before class and spent class time applying it. Within this format, I supported students as they designed with a diverse range of emerging technologies during lectures, and led more focused group work in tutorials.`,
        `In more technical subjects such as Foundations of Algorithms (COMP10002), the challenge was reversed: translating formal, abstract processes into problems students could already relate to. Here, the priority is scaffolding, drawing on analogies and worked examples from domains students already understand and introducing formal notation only once an intuitive foundation is in place. For example, after introducing fundamental search algorithms in my Artificial Intelligence course at NEHU, I asked groups of students to discuss and present the best approach to solving a Sudoku board. Most arrived at depth first search, but one group combined it with constraint satisfaction for a more efficient solution. Arriving at this insight themselves, and presenting it to their peers, made the algorithms and their applications far more memorable than any direct explanation could have.`,
        `None of this works without a learning environment in which students feel safe to be wrong. My pastoral care responsibilities at International House, which included formal training in First Aid and Mental Health First Aid, taught me that students who feel psychologically supported are far more willing to voice uncertainty and engage with difficult material. Across all my teaching contexts, I actively create space for questions, treat doubt as a sign of engagement and an opportunity to learn, and work to ensure that no student feels their background disqualifies them from participating fully.`,
      ],
    },
    {
      heading: 'Mentoring and Supervision',
      include: true,
      paragraphs: [
        `Mentoring and research supervision have become a central part of my academic practice. I have supported the supervision of two PhD students, four Masters students, and one Bachelor student, and have directly mentored six research interns, on HCI projects spanning interaction design, education, cognition and intelligent systems in extended reality. Although lead supervision sits beyond the formal expectations of my postdoctoral role, I have taken it on as a deliberate commitment, most recently guiding a student to a paper accepted at CHI 2026, the premier venue in HCI.`,
        `My supervision is guided by the same philosophy as my classroom teaching. It is also shaped by my research vision of grounding the design of technology in theories of human psychology, physiology, and behaviour. In practice, this means encouraging students to make their assumptions about users explicit and test them through iterative design, early prototyping, and pilot testing, revising those that prove misaligned with what they observe. It is this habit of questioning assumptions that I hope every student carries forward from working with me.`,
      ],
    },
    {
      heading: 'Leadership and Community',
      include: true,
      paragraphs: [
        `I believe mentoring extends beyond advising individuals to cultivating environments where researchers at every stage feel supported, challenged, and connected. As a means of fostering such environments, I have jointly organised research hackathons, workshops, and summer schools, led research seminar series, and managed the daily operations of the human-centred computing lab at USyd.`,
      ],
    },
    {
      heading: 'Teaching Interests',
      include: true,
      paragraphs: [
        `I am eager to teach courses at the intersection of computing and human experience, including those related to immersive technologies, human-centred research and methodology, and human-AI interaction. I would welcome the opportunity to design a seminar connecting probabilistic models of human behaviour, including active inference, to the design of intelligent interactive systems. More broadly, I would enjoy growing this into a full course that draws together statistics, human behaviour, and computational modelling for the design and evaluation of HCI systems. Alongside this, I remain committed to foundational teaching in programming, algorithms, and data structures.`,
      ],
    },
  ],
};
