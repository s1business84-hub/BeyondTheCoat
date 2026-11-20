export type Competency = {
  id: string;
  index: string;
  title: string;
  plain: string;
  yearOne: string;
  evidence: string;
};

export const competencies: Competency[] = [
  {
    id: "medical-expert",
    index: "01",
    title: "Medical Expert",
    plain: "Demonstrates a strong foundation of clinical knowledge, diagnostic reasoning, and technical skills essential for safe and effective patient care. Integrates scientific principles with compassionate clinical judgment in all healthcare settings.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "communicator",
    index: "02",
    title: "Communicator",
    plain: "Builds effective relationships with patients, families, and healthcare professionals through clear, empathetic, and respectful communication. Ensures understanding and trust in every clinical interaction.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "collaborator",
    index: "03",
    title: "Collaborator",
    plain: "Works effectively within interprofessional teams, demonstrating leadership, initiative, and innovation. Promotes teamwork, adaptability, and shared responsibility to achieve optimal healthcare outcomes.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "professionalism",
    index: "04",
    title: "Professional",
    plain: "Exemplifies integrity, accountability, and ethical conduct in all aspects of medical practice. Maintains professionalism, empathy, and respect for patients, colleagues, and the profession.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "patient-care",
    index: "05",
    title: "Patient Care",
    plain: "Places patients at the center of care, ensuring their safety, dignity, and well-being. Advocates for equitable access to healthcare and supports initiatives that enhance public health outcomes.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "evidence-based",
    index: "06",
    title: "Evidence-Based",
    plain: "Engages in lifelong learning through critical appraisal of research and evidence. Applies scientific findings to clinical decision-making and contributes to advancing medical knowledge through inquiry and reflection.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "social-accountability",
    index: "07",
    title: "Social Accountability",
    plain: "Recognises the responsibility of medicine to society by addressing public health challenges, promoting social justice, and contributing to the well-being of local and global communities.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "health-systems",
    index: "08",
    title: "Health Systems",
    plain: "Understands and supports the functioning of healthcare systems, contributing to improvements in quality, efficiency, and sustainability. Engages in advocacy and collaboration to strengthen health services.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "lifelong-learner",
    index: "09",
    title: "Lifelong Learner",
    plain: "Actively seeks opportunities for personal and professional growth through reflection, feedback, and continuous improvement. Demonstrates commitment to lifelong learning and professional excellence.",
    yearOne: "",
    evidence: "",
  },
];

export const gibbs = [
  { step: "01", title: "Description", text: "What happened. Facts only." },
  { step: "02", title: "Feelings", text: "What you noticed in yourself. Not the final judgment." },
  { step: "03", title: "Evaluation", text: "What worked. What did not." },
  { step: "04", title: "Analysis", text: "Why, against the science and the expected standard." },
  { step: "05", title: "Conclusion", text: "What you would do differently next time." },
  { step: "06", title: "Action", text: "The next concrete step. Dated." },
];

export const purposes = [
  {
    index: "01",
    title: "Document Clinical Exposure",
    text: "Record clinical experiences and learning encounters through structured, reflective documentation of real patient care environments.",
  },
  {
    index: "02",
    title: "Demonstrate Growth",
    text: "Show measurable development in medical knowledge and patient care skills across all nine competency domains defined by medical education standards.",
  },
  {
    index: "03",
    title: "Reflect & Reason",
    text: "Apply structured clinical reasoning to real-world scenarios through reflective practice, identifying strengths and areas for continuous improvement.",
  },
  {
    index: "04",
    title: "Support CPD",
    text: "Enable continuous professional development through systematic self-assessment, evidence-based documentation, and goal-setting aligned with future practice.",
  },
];

export const ledger = [
  {
    index: "01",
    kind: "Research project",
    status: "Coming Soon",
    text: "Research projects will be added here as they progress.",
  },
  {
    index: "02",
    kind: "Publication",
    status: "Coming Soon",
    text: "Publications will be added as they are completed.",
  },
  {
    index: "03",
    kind: "Conference paper",
    status: "Coming Soon",
    text: "Conference presentations will be documented here.",
  },
];

export const standing = [
  { index: "01", label: "Year", value: "Year 1 · MD" },
  { index: "02", label: "Framework", value: "Nine domains" },
  { index: "03", label: "Campus", value: "Ajman, UAE" },
  { index: "04", label: "University", value: "Gulf Medical University" },
];

export const yearMap: { when: string; what: string }[] = [];

export function answerJournal(raw: string): string {
  const s = raw.toLowerCase().trim();
  if (!s) {
    return "Hi. You can ask about Rahul, the competencies, contact details, evidence, reflections, or year one at GMU.";
  }

  if (s.includes("contact") || s.includes("email") || s.includes("phone") || s.includes("number") || s.includes("reach") || s.includes("call") || s.includes("mail")) {
    return "You can reach Rahul at 2026md90@mygmu.ac.ae or +971 52 724 9865. For official academic matters, Gulf Medical University in Ajman is the institution of record.";
  }

  if (s.includes("who") || s.includes("about") || s.includes("rahul") || s.includes("you") || s.includes("student") || s.includes("name")) {
    return "Rahul Devnani is a first-year Doctor of Medicine (MD) student at Gulf Medical University in Ajman. He entered in 2026. This site (Beyond My White Coat) is his working e-portfolio documenting progress across the nine GMU competency domains.";
  }

  if (s.includes("competenc") || s.includes("domain") || s.includes("nine") || s.includes("framework")) {
    return "There are nine competencies: 01 Medical Expert, 02 Communicator, 03 Collaborator, 04 Professional, 05 Patient Care, 06 Evidence-Based, 07 Social Accountability, 08 Health Systems, and 09 Lifelong Learner. Open the Competencies page and select any one to see evidence and reflections.";
  }

  if (s.includes("medical expert") || s.includes("expert")) {
    return "Medical Expert: Demonstrates clinical knowledge, diagnostic reasoning, and technical skills for safe patient care. Evidence currently includes biochemistry laboratory sessions, a mid-semester physiology achievement certificate, and a Gut-Brain Axis seminar on healthy nutrition.";
  }
  if (s.includes("communicator") || s.includes("communication")) {
    return "Communicator: Builds effective, empathetic relationships with patients, families, and healthcare professionals through clear and respectful communication.";
  }
  if (s.includes("collaborator") || s.includes("team")) {
    return "Collaborator: Works effectively within teams, contributes reliably, and promotes shared responsibility and clear communication.";
  }
  if (s.includes("professional")) {
    return "Professional: Exemplifies integrity, accountability, and ethical conduct. Maintains punctuality and honesty about the limits of current knowledge.";
  }
  if (s.includes("patient care") || s.includes("patient")) {
    return "Patient Care: Places patients at the center of care, prioritising safety, dignity, and well-being. Focuses on being safe and respectful in clinical spaces.";
  }
  if (s.includes("evidence") || s.includes("research")) {
    return "Evidence-Based: Engages with research through critical appraisal. Current evidence includes the Research Club participation certificate.";
  }
  if (s.includes("social") || s.includes("accountability") || s.includes("community") || s.includes("hayat") || s.includes("diabetes")) {
    return "Social Accountability: Recognises medicine’s responsibility to society. Evidence includes the MOHAP Hayat Program certificate and World Diabetes Day participation.";
  }
  if (s.includes("health system") || s.includes("hospital")) {
    return "Health Systems: Understands how a teaching hospital is organised. Clinical teaching takes place at Gulf Medical University.";
  }
  if (s.includes("lifelong") || s.includes("learner") || s.includes("learning")) {
    return "Lifelong Learner: Actively seeks growth through reflection and continuous improvement. Keeps a dated, correctable record of learning.";
  }

  if (s.includes("gibbs") || s.includes("reflect")) {
    return "Reflections follow the Gibbs cycle: 01 Description (facts), 02 Feelings, 03 Evaluation, 04 Analysis, 05 Conclusion, and 06 Action Plan. Open a competency and expand an evidence item to read the full reflection when available.";
  }

  if (s.includes("gmu") || s.includes("gulf") || s.includes("md") || s.includes("university") || s.includes("ajman") || s.includes("year")) {
    return "Rahul is a first-year MD (Doctor of Medicine) student at Gulf Medical University, Ajman, UAE. He entered in 2026.";
  }

  if (s.includes("certificate") || s.includes("evidence") || s.includes("lab") || s.includes("biochem") || s.includes("physiology") || s.includes("gut") || s.includes("nutrition") || s.includes("seminar")) {
    return "Current evidence includes biochemistry laboratory sessions, a mid-semester physiology achievement certificate, a Gut-Brain Axis seminar, the MOHAP Hayat Program certificate, World Diabetes Day participation, and Research Club certificate. Open Competencies to view them with reflections.";
  }

  if (s.includes("portfolio") || s.includes("site") || s.includes("journal") || s.includes("purpose") || s.includes("why")) {
    return "Beyond My White Coat is Rahul’s living e-portfolio. It documents year one across the nine GMU competencies with evidence and Gibbs reflections. Empty sections stay empty until real evidence exists.";
  }

  if (s.includes("cv") || s.includes("resume")) {
    return "There is no CV file on this site. The About page, competencies, and evidence serve as the current record of progress.";
  }

  if (s.includes("hi") || s.includes("hello") || s.includes("hey") || s.includes("good")) {
    return "Hello. Ask about Rahul, the nine competencies, contact details (email or phone), evidence, or reflections.";
  }

  return "I can answer questions about Rahul Devnani, the nine competencies, contact details, evidence and reflections, or year one at Gulf Medical University. Try asking about one of those.";
}

export const evidenceItems = {
  "medical-expert": [
    { 
      title: "Biochemistry laboratory sessions", 
      description: "Hands-on practicals applying chemical processes involved in the functioning of the human body.", 
      details: "Sessions covered biochemical calculations, precipitation reactions of proteins, colour reactions of proteins and amino acids, buffering capacity, reactions of monosaccharides and disaccharides, identification of abnormal constituents in urine samples, reactions of lipids and enzyme kinetics.",
      image: "/lab-photo.jpg", 
      type: "photo",
      date: "Year 1",
      reflection: {
        description: "During my Biochemistry laboratory sessions, I participated in experiments involving proteins, carbohydrates, lipids, buffer systems, enzyme kinetics and urine analysis. Urine analysis was particularly memorable because we had to interpret positive and negative test results, determine which substances were present or absent, and consider the clinical conditions the findings might suggest. It was an opportunity to apply biochemical knowledge rather than simply observe reactions.",
        feelings: "I enjoyed seeing how laboratory reactions could relate to disease, but I also found the interpretation demanding. At first, identifying a result felt more straightforward than explaining what it meant. This made me aware of the difference between remembering an expected reaction and understanding why it mattered.",
        evaluation: "The practical helped me connect theoretical biochemistry with clinical reasoning. My willingness to question the meaning of the results was a strength. However, I recognised a weakness in my approach: I could focus on whether a test was positive or negative without immediately considering what that result could and could not establish. This limited the depth of my interpretation.",
        analysis: "Urine analysis showed me that a laboratory result is only one part of a clinical assessment. For example, detecting glucose in urine may raise suspicion of hyperglycaemia, but it cannot independently confirm diabetes. Likewise, a negative result does not automatically exclude every possible disorder. I realised that meaningful interpretation requires understanding both the biochemical mechanism and the test’s limitations. This shifted my thinking from searching for a single diagnosis to considering possible explanations and the additional information needed. As a future doctor, I will need to interpret investigations in the context of symptoms, history and other findings rather than draw conclusions from isolated results.",
        conclusion: "The experience made me more confident about the relevance of biochemistry to patient care while revealing a specific skill I need to strengthen: interpreting findings critically instead of stopping at the reported result.",
        action: "After future practical sessions, I will record what each test detects, the meaning of positive and negative findings, and one possible clinical interpretation. I will also identify a limitation or alternative explanation and check my reasoning against course material or instructor feedback. Practising this consistently will help me develop more careful, evidence-based interpretation."
      }
    },
    { 
      title: "Mid-semester achievement certificate", 
      description: "Recognition for performance in foundational medical physiology.", 
      details: "Certificate of Achievement for the mid-semester examination in medical physiology, issued by faculty at Gulf Medical University.",
      image: "/Certificate of Achievement-physiology.jpeg", 
      type: "certificate",
      date: "October 2026",
      reflection: {
        description: "Receiving a certificate for my performance in the Physiology midterm examination was a meaningful achievement because it followed my first university midterm examinations. Entering university meant adjusting to a heavier workload and a different expectation: I needed to understand physiological mechanisms, not simply remember facts. Preparing for this examination helped me recognise how much my approach to studying needed to change.",
        feelings: "Initially, I felt anxious about the unfamiliar examination format and wondered whether the methods that had worked for me before university would still be enough. I sometimes felt reassured when a topic looked familiar in my notes, but less confident when I tried to explain it without looking. Receiving the certificate made me proud and motivated me to be more deliberate about how I learn.",
        evaluation: "A strength of my preparation was returning to difficult concepts instead of avoiding them. However, I noticed a weakness: rereading an explanation could make me feel that I understood it, even when I could not reproduce the reasoning independently. The coagulation pathway highlighted that gap between recognising information and truly understanding it. Acknowledging this encouraged me to change how I checked my learning.",
        analysis: "This experience changed my definition of effective studying. In Physiology, memorising names of coagulation factors is different from understanding how the cascade works and why each stage matters. If I cannot explain a physiological process without prompting, I may struggle later to apply that knowledge when interpreting a patient’s condition. The certificate reflected progress, but examination success alone cannot show which concepts I will retain. I need to uncover mistakes during revision rather than discover gaps only during an assessment. Recognising this helped me see self-evaluation as part of becoming a responsible medical student, not as evidence of failure.",
        conclusion: "The recognition increased my confidence, but the more valuable outcome was learning to question the quality of my preparation. I became more aware that academic growth requires both celebrating progress and responding honestly to weaknesses.",
        action: "For future modules, I will close my notes after studying a topic and explain the mechanism aloud or draw it from memory. I will use application-based questions, record why I answered incorrectly and revisit weak topics during weekly revision. I will reconstruct the coagulation pathway without a diagram and explain its sequence and significance, rather than just label its components."
      }
    },
    { 
      title: "Gut-Brain Axis Seminar", 
      description: "Seminar on healthy nutrition and well-being, exploring the relationship between the digestive and nervous systems.", 
      details: "The seminar explored how the gut-brain axis influences overall health, including the connection between nutrition and mental well-being.",
      image: "/Gut-Brain Axis.jpeg", 
      type: "seminar",
      date: "Year 1",
      reflection: {
        description: "I attended a seminar on the gut-brain axis and healthy nutrition, which explored how the digestive and nervous systems communicate and why nutrition may be relevant to overall well-being. The session encouraged me to look beyond individual organs and think about the body as an interconnected system.",
        feelings: "I felt curious about how an everyday experience, such as noticing digestive discomfort during stressful periods, could be considered alongside physiological mechanisms. I also felt cautious: an explanation can sound convincing without establishing that one factor directly causes another. That tension between curiosity and uncertainty stayed with me.",
        evaluation: "A strength of the experience was that it pushed me to connect concepts rather than revise them in isolation. It also highlighted a weakness in my approach to learning. When presented with an interesting health-related claim, I can focus on whether it makes physiological sense before asking how strong the supporting clinical evidence is.",
        analysis: "This distinction matters because biological plausibility is not the same as proven clinical benefit. Gut-brain communication involves neural, hormonal and immune pathways, but understanding those mechanisms does not justify assuming that dietary changes will treat every psychological or digestive symptom. I realised that a holistic approach requires both considering interacting factors and recognising the limits of current evidence. In future clinical practice, I will need to avoid oversimplifying patients’ concerns or presenting uncertain findings as established treatments. The most valuable shift in my thinking was learning to ask two questions: “How could this work?” and “What evidence shows that it does?”",
        conclusion: "The seminar broadened my understanding of integrated physiology and showed me how easily interest in a topic can outpace critical appraisal. It reinforced the importance of intellectual curiosity combined with scientific restraint.",
        action: "I will revise the neural and hormonal components of gut-brain communication, then read an evidence-based review of nutrition and mental well-being. I will summarise one proposed mechanism, one clinically supported finding and one unresolved question. This will help me practise distinguishing plausible explanations from evidence-based recommendations."
      }
    },
  ],
  "evidence-based": [
    {
      title: "Research Club – Certificate of Participation",
      description: "Certificate for attending the Research Club's Talk on Research Journeys and Guidance for Aspiring Researchers.",
      details: "Awarded for attending the Research Club's Talk that took place on the 4th of November, 2026, at Gulf Medical University.",
      image: "/Research-Club-Certificate.jpeg",
      type: "certificate",
      date: "4 November 2026",
      reflection: {
        description: "Attending the Research Club's Talk on Research Journeys and Guidance for Aspiring Researchers at Gulf Medical University provided me with an opportunity to learn about the process of conducting medical research. The session discussed how researchers develop research questions, design studies, and contribute to medical knowledge. It introduced me to the importance of research in advancing healthcare and improving patient outcomes. My participation was recognised with a Certificate of Participation.",
        feelings: "Before attending the talk, I had a limited understanding of how medical research is conducted. I was curious about the steps involved in developing a research project and the challenges researchers face. The session made me realise that research requires careful planning, critical thinking, and perseverance. As a first-year medical student, I felt that this was a valuable introduction to an aspect of medicine that extends beyond clinical practice.",
        evaluation: "One of the most valuable aspects of the talk was learning about the practical steps involved in conducting research. The speakers shared their experiences and provided guidance on how students can get involved in research projects. However, I also realised that conducting research requires skills that I have not yet fully developed, such as statistical analysis and critical appraisal of literature.",
        analysis: "This experience helped me understand the importance of evidence-based practice in medicine. Research provides the foundation for clinical guidelines and treatment protocols. I began to appreciate that healthcare professionals have a responsibility to stay informed about current research and apply evidence to their clinical decision-making. The talk also highlighted the role of research in addressing gaps in medical knowledge and improving patient care.",
        conclusion: "Overall, attending the Research Club talk broadened my understanding of medical research and its importance in healthcare. It motivated me to consider getting involved in research projects during my medical education.",
        action: "Moving forward, I intend to explore opportunities to participate in research projects at Gulf Medical University. I also aim to develop my skills in critical appraisal of research literature and learn more about research methodology. As I progress through medical school, I hope to contribute to research that advances medical knowledge and improves patient outcomes."
      }
    },
  ],
  "social-accountability": [
    { 
      title: "HAYAT Programme – Certificate of Appreciation", 
      description: "National organ donation awareness programme organised by the Ministry of Health and Prevention (MOHAP), UAE.", 
      details: "Certificate of Appreciation for attending the HAYAT Programme, a healthcare initiative organised by MOHAP.",
      image: "/HAYAT PROGRAMME.jpeg", 
      type: "certificate",
      date: "30 September 2026",
      reflection: {
        description: "I attended a Gulf Medical University awareness session on the UAE’s HAYAT Organ Donation and Transplant Programme, presented in part by Dr. Raghad Al Juboori. The session introduced the national organ donation initiative and provided an opportunity to consider transplantation from both a healthcare-system and a human perspective. My attendance was recognised with a Certificate of Appreciation.",
        feelings: "I was interested in the possibility that donation could improve or save another person’s life. At the same time, I found myself considering how difficult conversations about donation might feel for a family facing an emotionally challenging situation. I realised that, although I support clear public education, I would not yet feel confident answering every question about eligibility, consent or the donation process.",
        evaluation: "The session was valuable because it connected medical practice with ethics, communication and public trust. A strength of my response was recognising that individuals may approach donation with different questions and beliefs. My limitation was assuming that understanding the medical benefits would be enough to communicate about the subject effectively. I had not fully considered how important it is to listen before explaining.",
        analysis: "This experience helped me distinguish raising awareness from persuading someone to make a particular choice. For organ donation, informed decisions must be voluntary, and discussions should be sensitive to personal beliefs and circumstances. A healthcare professional needs factual knowledge, but also the ability to recognise uncertainty, respond empathetically and respect autonomy. I also realised that public trust depends on how clearly programmes communicate the safeguards and procedures involved. These lessons matter for my development because clinical competence is not limited to knowing which intervention may benefit a patient; it includes communicating ethically when decisions carry profound personal consequences.",
        conclusion: "HAYAT expanded my understanding of how a national healthcare initiative depends on both clinical expertise and public confidence. I came away recognising a gap between appreciating organ donation and being prepared to discuss it responsibly.",
        action: "I will review official UAE guidance on HAYAT, especially eligibility, consent and the donation process. I will create a brief explanation for a non-medical audience and write down questions I cannot answer confidently. I will verify those answers with reliable guidance and practise responding to concerns without pressure or judgement before taking part in future awareness activities."
      }
    },
    { 
      title: "World Diabetes Day", 
      description: "Participation in World Diabetes Day awareness activities.", 
      details: "Engaged in activities promoting diabetes awareness and healthy lifestyle choices.",
      image: "/World Diabetes Day.jpeg", 
      type: "event",
      date: "14 November 2026",
      reflection: {
        description: "I attended a World Diabetes Day awareness event at Gulf Medical University, where creative poster presentations and discussions explored the prevalence of diabetes and the role of lifestyle changes in reducing risk. The event took a familiar topic beyond lectures and showed me how health information can be communicated in ways that capture people’s attention.",
        feelings: "I was curious to see how diabetes would be discussed outside a conventional classroom setting. The creative posters made the topic engaging, but the discussions also prompted concern about how common diabetes is and how easily its long-term consequences can be overlooked. I felt encouraged that everyday habits could influence health, while recognising that changing behaviour is not always simple.",
        evaluation: "A strength of the event was its accessible presentation of information. The posters demonstrated that medical education can be both accurate and engaging. I also recognised a limitation in my previous understanding: I had focused more on the mechanisms and complications of diabetes than on the practical difficulties people may face when trying to reduce their risk. My role was to attend and learn, rather than deliver education myself, but observing these approaches was valuable.",
        analysis: "The experience helped me distinguish knowing preventive advice from helping someone use it. Balanced nutrition, physical activity and weight management can reduce the risk of type 2 diabetes, but they cannot guarantee prevention, and type 1 diabetes is different. I realised that messages such as “make simple lifestyle changes” can be useful starting points, yet what seems simple to one person may be difficult for another because of time, resources or family circumstances. The posters showed me the importance of making information clear; the discussions reminded me that clarity must be accompanied by empathy and scientific accuracy. This is relevant to my future role because effective health promotion involves understanding barriers rather than merely repeating recommendations.",
        conclusion: "Attending the event broadened my view of diabetes from a condition studied in textbooks to a public health challenge that requires effective communication and realistic preventive advice.",
        action: "For future awareness activities, I will review current guidance before attending, note how presenters explain risk and prevention, and practise summarising key messages in plain language. I will also reflect on whether the advice is accurate, achievable and sensitive to different circumstances, and seek feedback before taking on an active educational role."
      }
    },
  ],
};
