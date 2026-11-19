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
  { index: "01", label: "Standing", value: "Year 1 · MD" },
  { index: "02", label: "Framework", value: "Nine domains" },
  { index: "03", label: "Campus", value: "Ajman, UAE" },
  { index: "04", label: "Clinical home", value: "Thumbay system" },
];

export const yearMap = [
  {
    when: "2026 · Entry",
    what: "The professional introduction given to a medical intake, followed by the work of becoming a student who can be trusted in a teaching hospital.",
  },
  {
    when: "Year 1 · Science",
    what: "Structure and function taught to a clinical standard. Anatomy and physiology before opinions about specialties.",
  },
  {
    when: "Year 1 · Skills",
    what: "Communication, first examination skills, and conduct in a room where someone else is the patient.",
  },
  {
    when: "Year 1 · System",
    what: "How Gulf Medical University and the Thumbay hospitals are organised — the map a first-year is expected to learn.",
  },
];

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
    return "Medical Expert: Demonstrates clinical knowledge, diagnostic reasoning, and technical skills for safe patient care. Evidence currently includes biochemistry laboratory sessions and a mid-semester physiology achievement certificate.";
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
    return "Evidence-Based: Engages with research through critical appraisal. Current evidence includes early student research activity. Full research projects are added only when they have a clear question, method, and supervisor.";
  }
  if (s.includes("social") || s.includes("accountability") || s.includes("community") || s.includes("hayat") || s.includes("diabetes")) {
    return "Social Accountability: Recognises medicine’s responsibility to society. Evidence includes the MOHAP Hayat Program certificate (30 September 2026) and World Diabetes Day participation.";
  }
  if (s.includes("health system") || s.includes("hospital") || s.includes("thumbay")) {
    return "Health Systems: Understands how a teaching hospital and academic health system are organised. Clinical teaching takes place within the Thumbay Academic Health System.";
  }
  if (s.includes("lifelong") || s.includes("learner") || s.includes("learning")) {
    return "Lifelong Learner: Actively seeks growth through reflection and continuous improvement. Keeps a dated, correctable record of learning.";
  }

  if (s.includes("gibbs") || s.includes("reflect")) {
    return "Reflections follow the Gibbs cycle: 01 Description (facts), 02 Feelings, 03 Evaluation, 04 Analysis, 05 Conclusion, and 06 Action Plan. Open a competency and expand an evidence item to read the full reflection when available.";
  }

  if (s.includes("gmu") || s.includes("gulf") || s.includes("md") || s.includes("university") || s.includes("ajman") || s.includes("year")) {
    return "Rahul is a first-year MD (Doctor of Medicine) student at Gulf Medical University, Ajman, UAE. He entered in 2026. Clinical teaching is within the Thumbay Academic Health System.";
  }

  if (s.includes("certificate") || s.includes("evidence") || s.includes("lab") || s.includes("biochem") || s.includes("physiology")) {
    return "Current evidence includes biochemistry laboratory sessions, a mid-semester physiology achievement certificate (October 2026), the MOHAP Hayat Program certificate, and World Diabetes Day participation. Open Competencies to view them with reflections.";
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
      image: "/rahul.jpeg", 
      type: "photo",
      date: "Year 1",
      reflection: {
        description: "During my first semester of the MD programme, I participated in several Biochemistry laboratory practicals that allowed me to explore the chemical processes involved in the functioning of the human body. The sessions covered a range of topics, including biochemical calculations, precipitation reactions of proteins, colour reactions of proteins and amino acids, buffering capacity, reactions of monosaccharides and disaccharides, identification of abnormal constituents in urine samples, reactions of lipids and enzyme kinetics. These practicals provided an opportunity to apply concepts learned during lectures through laboratory experiments and observations. In particular, the urine analysis practicals introduced me to identifying abnormal constituents, such as excess glucose, which could indicate underlying health conditions.",
        feelings: "Initially, I was curious about how the theoretical concepts discussed during lectures would translate into practical experiments. As this was my first experience with university-level medical laboratory sessions, I was also becoming familiar with the procedures, equipment and techniques involved. I found some experiments particularly interesting, especially those involving colour changes and chemical reactions, as they allowed me to observe biochemical processes directly. However, interpreting certain results and understanding the scientific explanations behind them required additional thought and concentration.",
        evaluation: "The practical sessions were beneficial because they exposed me to different areas of biochemistry rather than limiting my learning to theoretical knowledge. I particularly appreciated being able to observe how proteins, carbohydrates and lipids react under different experimental conditions. The enzyme kinetics and buffering capacity practicals also helped me understand concepts that are important for maintaining normal physiological functions. One challenge was connecting the experimental observations to their underlying biochemical principles, particularly when interpreting unfamiliar results.",
        analysis: "These laboratory experiences helped me recognise the importance of biochemistry as a foundation for understanding medicine. I began to appreciate how proteins, carbohydrates, lipids, enzymes and buffer systems contribute to the normal functioning of the human body. For example, understanding enzyme activity provides insight into how biochemical reactions are regulated, while studying buffering capacity demonstrates how the body maintains a relatively stable internal environment. Similarly, identifying abnormal constituents in urine highlighted how biochemical changes can provide indications of possible disease. I realised that laboratory investigations require more than simply following instructions; they involve understanding the scientific reasoning behind each procedure and interpreting the findings accurately.",
        conclusion: "Overall, these practical sessions strengthened my understanding of the relationship between biochemistry and human physiology. They allowed me to develop greater familiarity with laboratory procedures and appreciate how biochemical principles are applied in medical investigations. Most importantly, they helped me recognise the relevance of the basic sciences in understanding disease and its diagnosis.",
        action: "Moving forward, I intend to revise the biochemical concepts associated with each practical session to strengthen my theoretical understanding. I also aim to improve my confidence in performing laboratory procedures, interpreting experimental results and explaining the scientific principles behind them. As I progress through medical school, I hope to develop the ability to connect biochemical knowledge with clinical applications and use this foundation to better understand more complex medical subjects."
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
        description: "During my first semester of Year 1 in the MD programme, I received a certificate recognising my strong academic performance in the Physiology midterm examination. This achievement was particularly meaningful because these were my first-ever college midterm examinations. Transitioning from school to university introduced me to a different academic environment, with a greater volume of information and a stronger emphasis on understanding complex concepts. The Physiology examination assessed my understanding of the topics covered during the initial part of the semester and provided an opportunity to evaluate how well I had adapted to the academic demands of medical school.",
        feelings: "Before the examination, I experienced some nervousness because I was unfamiliar with the structure and expectations of university-level examinations. Being in my first semester, I was still adjusting to the pace of learning and the amount of information that needed to be covered. Receiving the certificate was therefore particularly rewarding. It gave me a sense of accomplishment and reassurance that I was adapting well to the new academic environment. I also felt motivated to maintain my academic performance and continue putting effort into my studies throughout medical school.",
        evaluation: "One of the positive aspects of this experience was that it encouraged me to develop a more structured approach to studying. I recognised that understanding the concepts taught during lectures was essential, particularly in a subject such as Physiology, which focuses on the mechanisms responsible for the normal functioning of the human body. Revisiting important topics and ensuring that I understood the underlying processes helped me prepare for the examination. However, I also realised that university examinations require a different level of preparation compared to school examinations, particularly when dealing with a larger volume of interconnected information.",
        analysis: "This experience taught me the importance of adapting my learning methods to the demands of medical education. Physiology is a fundamental subject because it explains how different systems within the human body function and interact. I began to appreciate that simply memorising information is not sufficient; understanding the mechanisms behind physiological processes is essential for developing a deeper understanding of medicine. Receiving recognition for my performance reinforced the value of consistency, effective time management and independent learning. Most importantly, it helped me realise that I am capable of adapting to the academic challenges associated with studying medicine, even when entering an unfamiliar learning environment.",
        conclusion: "Looking back, receiving this certificate was more than just an academic achievement. It represented an important milestone in my transition from school to university and gave me greater confidence in my ability to manage the demands of medical education. It also encouraged me to continue developing effective study habits and maintain a strong academic foundation.",
        action: "Moving forward, I intend to maintain a consistent revision schedule and continue focusing on understanding concepts rather than relying entirely on memorisation. I will also make greater use of practice questions and active recall to assess my understanding before examinations. As I progress through medical school, I hope to build upon this achievement while improving my ability to connect theoretical knowledge with clinical applications. My goal is to maintain a consistent approach to academic development and continuously improve as a medical student."
      }
    },
  ],
  "evidence-based": [
    { 
      title: "Student research", 
      description: "Early engagement with research methods and inquiry.", 
      details: "Student research activity focused on developing questions, methods, and evidence-based thinking during year one.",
      image: "/studentr.jpeg", 
      type: "photo",
      date: "Year 1"
    },
  ],
  "social-accountability": [
    { 
      title: "MOHAP Hayat Program certificate", 
      description: "Appreciation for contribution to the Hayat Program community health initiative.", 
      details: "Certificate of Appreciation from the Ministry of Health and Prevention – Ajman for contribution to the Hayat Program on 30 September 2026.",
      image: "/HAYAT PROGRAMME.jpeg", 
      type: "certificate",
      date: "30 September 2026"
    },
    { 
      title: "World Diabetes Day certificate", 
      description: "Participation in community awareness activities for World Diabetes Day.", 
      details: "Certificate of Participation from Gulf Medical University for involvement in World Diabetes Day community awareness activities.",
      image: "/World Diabetes Day.jpeg", 
      type: "certificate",
      date: "World Diabetes Day 2026",
      reflection: {
        description: "During my first semester as a Year 1 medical student at Gulf Medical University, I had the opportunity to participate in a World Diabetes Day awareness event. The event focused on raising awareness about diabetes, its risk factors, prevention and the importance of early detection. Being part of this initiative allowed me to engage with an important public health topic beyond the classroom. Although I had previously learned about diabetes through my academic studies, participating in an awareness event gave me a different perspective on the condition and its impact on individuals and communities. Receiving a Certificate of Participation from Gulf Medical University was a rewarding part of the experience and recognised my involvement in the initiative.",
        feelings: "Before participating, I viewed World Diabetes Day mainly as an awareness initiative. However, being involved made me realise how relevant the condition is to everyday life, particularly in a community where diabetes is an important health concern. I felt interested in learning more about how awareness initiatives can influence people’s understanding of health conditions and encourage healthier lifestyle choices. At the same time, I recognised that awareness alone does not guarantee behavioural change, and that ongoing education and support are necessary to make a meaningful difference.",
        evaluation: "Participating in the event helped me appreciate the importance of public health education. I learned that effective communication is essential when discussing health topics with the community, particularly when explaining risk factors and prevention strategies in a way that is accessible and understandable. One challenge was ensuring that the information shared was accurate and appropriate for the audience, as simplifying complex medical concepts without losing their meaning requires careful thought.",
        analysis: "This experience highlighted the role of social accountability in medicine. Healthcare professionals have a responsibility not only to treat individual patients but also to contribute to the health of the wider community. World Diabetes Day provided an opportunity to engage with a condition that has significant public health implications. I began to understand that prevention and early detection are just as important as treatment, and that community awareness initiatives can play a valuable role in reducing the burden of chronic diseases. The experience also reinforced the importance of clear communication and cultural sensitivity when addressing health topics in a community setting.",
        conclusion: "Overall, participating in World Diabetes Day strengthened my understanding of the broader responsibilities of healthcare professionals beyond clinical practice. It allowed me to apply communication skills in a real-world context and appreciate the impact of public health initiatives. Most importantly, it helped me recognise the value of community engagement as part of medical education and professional development.",
        action: "Moving forward, I intend to seek further opportunities to participate in community health initiatives and public awareness events. I will also work on improving my ability to communicate health information clearly and effectively to different audiences. As I progress through medical school, I hope to develop a stronger understanding of public health principles and continue contributing to initiatives that promote community well-being."
      }
    },
  ],
};
