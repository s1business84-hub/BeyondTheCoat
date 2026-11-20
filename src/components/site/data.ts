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
    return "Evidence-Based: Engages with research through critical appraisal. Current evidence includes early student research activity. Full research projects are added only when they have a clear question, method, and supervisor.";
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
    return "Current evidence includes biochemistry laboratory sessions, a mid-semester physiology achievement certificate (October 2026), a Gut-Brain Axis seminar on healthy nutrition, the MOHAP Hayat Program certificate, and World Diabetes Day participation. Open Competencies to view them with reflections.";
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
      image: "/studentr.jpeg", 
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
        evaluation: "One of the positive aspects of this experience was that it encouraged me to develop a more structured approach to studying. I recognised that understanding the concepts taught during lectures was essential, particularly in a subject such as Physiology, which focuses on the mechanisms responsible for the normal functioning of the human body. Revisiting important topics and ensuring that I understood the underlying processes helped me prepare for the examination. However, I also realised that university examinations require a different level of preparation compared to school examinations, particularly when dealing with a large volume of information within a limited period of time.",
        analysis: "This experience helped me recognise the importance of consistent study habits and a clear understanding of fundamental concepts. Rather than relying solely on memorisation, I found that understanding how different physiological processes work together improved my ability to recall and apply information. The certificate also reinforced the importance of setting academic goals and working towards them through regular revision and self-assessment. It reminded me that academic success is not achieved through last-minute preparation alone, but through consistent effort over time.",
        conclusion: "Overall, receiving this certificate was a valuable milestone during my first semester of medical school. It gave me confidence in my ability to adapt to university-level learning and encouraged me to continue developing effective study strategies. It also highlighted the importance of understanding concepts thoroughly rather than simply memorising information.",
        action: "Moving forward, I intend to maintain a consistent study schedule and continue reviewing material regularly rather than leaving revision until the end of the semester. I also aim to seek feedback from faculty and peers to identify areas where I can improve. As I progress through medical school, I hope to build on this foundation and continue developing the knowledge and skills necessary for clinical practice."
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
        description: "During my first semester as a Year 1 medical student at Gulf Medical University, I attended a seminar focusing on the gut-brain axis and how healthy nutrition contributes to overall well-being. The session explored the relationship between the digestive system and the nervous system, highlighting how these two systems communicate and influence one another. It introduced me to the idea that nutrition affects more than just physical health and can also play a role in mental well-being. The seminar provided an opportunity to explore a topic that connects different areas of medical science and helped me appreciate the importance of nutrition in maintaining a healthy lifestyle.",
        feelings: "Before attending the seminar, I generally viewed digestion and mental health as separate aspects of human health. I was familiar with the basic functions of the digestive and nervous systems, but I had not fully considered how closely they are connected. Learning about the gut-brain axis made me curious about the different ways in which nutrition can influence mood, stress and overall well-being. As a first-year medical student, I found it particularly interesting because it allowed me to connect concepts from different areas of physiology and develop a broader understanding of how the human body functions.",
        evaluation: "One of the most valuable aspects of the seminar was that it challenged my initial perception of how different body systems interact. I had previously considered the digestive and nervous systems as functioning independently, but the seminar highlighted how they communicate through various mechanisms. This helped me appreciate the complexity of human physiology and the importance of considering multiple factors when assessing health. The seminar also emphasised the role of nutrition in maintaining both physical and mental health, which is relevant to patient care and preventive medicine.",
        analysis: "The seminar reinforced the importance of understanding the interconnections between different body systems. The gut-brain axis demonstrates how the digestive system can influence the nervous system and vice versa, which has implications for both physical and mental health. This understanding is particularly relevant in clinical practice, where healthcare professionals need to consider multiple factors when assessing patients. The seminar also highlighted the importance of nutrition as a component of overall health, which is relevant to preventive medicine and patient education.",
        conclusion: "Overall, attending this seminar was a valuable learning experience that broadened my understanding of the relationship between nutrition and human health. It challenged my initial perception of digestion and mental well-being as separate processes and helped me appreciate the importance of communication between different body systems. It also reminded me that as a future healthcare professional, understanding preventive healthcare and promoting healthy lifestyle choices will be an important part of my responsibilities.",
        action: "Moving forward, I intend to explore the relationship between nutrition, physiology and mental well-being in greater depth. I also aim to become more conscious of my own nutritional habits and understand how everyday lifestyle choices can influence overall health. Throughout medical school, I hope to attend more seminars and awareness sessions that introduce me to different areas of healthcare beyond the classroom. Most importantly, I want to develop the ability to communicate evidence-based nutritional advice to future patients in a practical and understandable manner."
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
        description: "Attending the HAYAT Programme, organised by the Ministry of Health and Prevention (MOHAP), was an opportunity to broaden my exposure to healthcare initiatives beyond the traditional medical curriculum. As a medical student, I believe that understanding medicine involves more than acquiring scientific knowledge, and programmes organised by national healthcare authorities provide an opportunity to become familiar with the wider healthcare system. My attendance was recognised with a Certificate of Appreciation, marking a valuable addition to my university experiences.",
        feelings: "I was interested in attending the programme because it offered an opportunity to learn outside the usual academic environment. Being a medical student at the beginning of my journey, I find it important to explore different healthcare initiatives and understand how they contribute to the medical community. I felt that attending a programme organised by MOHAP was particularly valuable because it exposed me to initiatives taking place within the UAE healthcare sector.",
        evaluation: "One positive aspect of attending the HAYAT Programme was the opportunity to gain exposure to a healthcare initiative organised by a national health authority. It reminded me that medical education extends beyond textbooks, examinations and laboratory sessions. Programmes such as these can help students develop a broader perspective on healthcare and become more aware of the different responsibilities associated with the medical profession. Although my involvement was limited to attending the programme, I recognised the value of participating in such educational opportunities.",
        analysis: "This experience reinforced my understanding that becoming a doctor involves continuous learning and developing awareness of different aspects of healthcare. Healthcare professionals have responsibilities that extend beyond treating individual patients, including understanding wider healthcare initiatives and their importance to society. I also realised that attending programmes organised by healthcare authorities can help medical students become more familiar with the healthcare environment in which they may eventually practise. Being exposed to such initiatives early in my medical education encouraged me to appreciate the importance of remaining informed and engaged with developments in the healthcare sector.",
        conclusion: "Overall, attending the HAYAT Programme was a valuable addition to my experiences as a medical student. It gave me an opportunity to engage with an initiative organised by MOHAP and broaden my exposure beyond the academic curriculum. Receiving the Certificate of Appreciation was encouraging and motivated me to continue exploring opportunities that contribute to my personal and professional development.",
        action: "Moving forward, I intend to remain open to attending more educational programmes, seminars and healthcare initiatives organised by universities and healthcare authorities. I hope to explore opportunities that broaden my understanding of medicine and expose me to different areas of healthcare. As I progress through medical school, I also aim to become more actively involved in relevant initiatives and develop a stronger understanding of the responsibilities associated with being a future healthcare professional."
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
        description: "On 14 November 2026, I participated in World Diabetes Day awareness activities. The event focused on raising awareness about diabetes prevention, management, and the importance of healthy lifestyle choices. As a first-year medical student, this was an opportunity to engage with the community and learn about a significant public health issue.",
        feelings: "I felt a sense of purpose in contributing to public health awareness. The event also made me more aware of the prevalence of diabetes and its impact on individuals and communities. I was motivated to learn more about preventive healthcare.",
        evaluation: "The event was well-organised and provided valuable information about diabetes. It helped me understand the importance of early intervention and lifestyle modifications in preventing and managing diabetes. One challenge was addressing misconceptions about diabetes among the general public.",
        analysis: "This experience reinforced the importance of social accountability in medicine. Healthcare professionals have a role in educating the public about health issues and promoting healthy behaviours. The event also highlighted the connection between lifestyle choices and health outcomes.",
        conclusion: "Participating in World Diabetes Day was a meaningful experience that broadened my understanding of public health. It reinforced the importance of community engagement and preventive healthcare as part of a healthcare professional's responsibilities.",
        action: "Moving forward, I intend to continue participating in health awareness events and develop my knowledge of preventive healthcare. I also aim to improve my ability to communicate health information effectively to diverse audiences."
      }
    },
  ],
};
