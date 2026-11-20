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
        description: "Throughout my Biochemistry laboratory sessions, I participated in practical activities covering biochemical calculations, protein precipitation, colour reactions of proteins and amino acids, buffering capacity, carbohydrate reactions, urine analysis, lipid reactions and enzyme kinetics. These sessions allowed me to apply theoretical concepts from lectures through practical experiments and observations. One activity involved analysing urine samples to identify abnormal constituents, such as excess glucose, which could indicate underlying health conditions.",
        feelings: "Initially, I was curious about how the theoretical concepts discussed during lectures would translate into practical experiments. As this was my first experience with university-level laboratory sessions, I was also becoming familiar with the procedures, equipment and techniques involved. I particularly enjoyed observing colour changes and chemical reactions, as they allowed me to visualise biochemical processes. However, interpreting certain results and understanding their scientific explanations required additional concentration.",
        evaluation: "The practical sessions were valuable because they exposed me to different areas of biochemistry rather than limiting my learning to theoretical knowledge. Observing how proteins, carbohydrates and lipids react under different experimental conditions helped reinforce concepts taught in lectures. One challenge was connecting experimental observations to their underlying biochemical principles, particularly when interpreting unfamiliar results.",
        analysis: "These experiences helped me recognise the importance of biochemistry in understanding the human body. I began to appreciate how proteins, carbohydrates, lipids, enzymes and buffer systems contribute to normal physiological functioning. For example, studying enzyme kinetics provided insight into how biochemical reactions are regulated, while buffering capacity demonstrated how the body maintains a stable internal environment. Similarly, urine analysis highlighted how biochemical abnormalities can indicate possible diseases. I realised that laboratory investigations involve more than following instructions; they require scientific understanding and accurate interpretation.",
        conclusion: "Overall, these practical sessions strengthened my understanding of the relationship between biochemistry and human physiology. They also helped me appreciate how laboratory investigations contribute to identifying and understanding diseases.",
        action: "Moving forward, I intend to revise the biochemical principles associated with each practical session and improve my confidence in interpreting experimental results. I also aim to become more familiar with laboratory techniques and develop the ability to connect biochemical findings with their clinical significance."
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
        description: "Receiving a certificate recognising my performance in the Physiology midterm examination was an important milestone in my medical education. These were my first-ever college midterm examinations, making the achievement particularly meaningful. Transitioning from school to university introduced me to a different academic environment, with a greater volume of information and a stronger emphasis on understanding complex concepts. The examination assessed my understanding of the physiological topics covered during the initial part of the semester.",
        feelings: "Before the examination, I experienced some nervousness because I was unfamiliar with the structure and expectations of university-level assessments. I was still adjusting to the pace of learning and the amount of information covered in medical school. Receiving the certificate was therefore particularly rewarding. It gave me a sense of accomplishment and reassurance that I was adapting well to the new academic environment. It also motivated me to maintain my efforts throughout the semester.",
        evaluation: "One positive aspect of my preparation was developing a more structured approach to studying. I recognised that understanding concepts was essential, particularly in physiology, which focuses on the mechanisms responsible for the normal functioning of the human body. Revisiting lecture material and ensuring that I understood the underlying processes helped me prepare. However, I also realised that university examinations require a different level of preparation compared to school examinations.",
        analysis: "This experience taught me the importance of adapting my learning methods to medical education. Physiology provides the foundation for understanding how different systems within the human body function and interact. I began to appreciate that memorising information alone is insufficient; understanding the mechanisms behind physiological processes is essential for developing a deeper understanding of medicine. Receiving recognition for my performance reinforced the importance of consistency, effective time management and independent learning. Most importantly, it showed me that I was capable of adapting to the academic challenges of medical school.",
        conclusion: "Looking back, receiving this certificate represented more than an academic achievement. It marked an important step in my transition from school to university and increased my confidence in managing the demands of medical education.",
        action: "Moving forward, I intend to maintain a consistent revision schedule and focus on understanding concepts rather than relying entirely on memorisation. I will also use practice questions and active recall to assess my understanding before examinations. My goal is to build upon this achievement and continue improving academically."
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
        description: "Attending a seminar on the gut-brain axis and healthy nutrition provided me with an opportunity to explore the relationship between the digestive system and the nervous system. The session discussed how these two systems communicate and influence one another, highlighting how nutrition can affect both physical and mental well-being. It introduced me to a topic that connects different areas of medical science and encouraged me to consider the importance of nutrition in maintaining overall health.",
        feelings: "Before attending the seminar, I generally viewed digestion and mental health as separate aspects of human health. Although I was familiar with the basic functions of the digestive and nervous systems, I had not fully considered how closely they were connected. Learning about the gut-brain axis made me curious about how nutrition could influence mood, stress and general well-being. I found the topic particularly interesting because it connected concepts from different areas of physiology.",
        evaluation: "One of the most valuable aspects of the seminar was that it encouraged me to consider health from a more holistic perspective. Rather than focusing exclusively on individual organs, it demonstrated how different body systems interact. I also appreciated the emphasis on healthy nutritional habits and their contribution to overall well-being. However, the session made me realise that there is still much more for me to learn about the mechanisms connecting gut health and the nervous system.",
        analysis: "The seminar helped me understand that maintaining good health involves more than simply preventing or treating disease. The relationship between the gut and brain demonstrates how interconnected the human body is. Nutrition plays an important role in supporting normal physiological functions, while lifestyle choices such as maintaining a balanced diet can contribute to long-term well-being. I also began to appreciate that healthcare professionals should consider lifestyle factors when assessing patients rather than focusing exclusively on their symptoms. This reinforced the importance of preventive healthcare and a holistic approach to patient care.",
        conclusion: "Overall, attending this seminar broadened my understanding of the relationship between nutrition and human health. It challenged my initial perception of digestion and mental well-being as separate processes and highlighted the importance of understanding interactions between different body systems.",
        action: "Moving forward, I intend to explore the relationship between nutrition, physiology and mental well-being in greater depth. I also aim to become more conscious of my nutritional habits and attend similar educational sessions. As I progress through medical school, I hope to develop the ability to communicate evidence-based nutritional advice to future patients in a practical and understandable manner."
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
        description: "Attending the HAYAT Programme, organised by the Ministry of Health and Prevention (MOHAP), was an opportunity to broaden my exposure to healthcare initiatives beyond the traditional medical curriculum. As a medical student, I believe that understanding medicine involves more than acquiring scientific knowledge. Programmes organised by national healthcare authorities provide opportunities to become familiar with the wider healthcare system. My attendance was recognised with a Certificate of Appreciation.",
        feelings: "I was interested in attending the programme because it offered an opportunity to learn outside the usual academic environment. As someone at the beginning of my medical journey, I find it important to explore different healthcare initiatives and understand how they contribute to the medical community. I felt that attending a programme organised by MOHAP was particularly valuable because it exposed me to initiatives within the UAE healthcare sector.",
        evaluation: "One positive aspect of attending the programme was gaining exposure to a healthcare initiative organised by a national health authority. It reminded me that medical education extends beyond textbooks, examinations and laboratory sessions. Such programmes can help students develop a broader perspective on healthcare and become more aware of the responsibilities associated with the medical profession. Although my involvement was limited to attending, I recognised the value of participating in these opportunities.",
        analysis: "This experience reinforced my understanding that becoming a doctor involves continuous learning and developing awareness of different aspects of healthcare. Medical professionals have responsibilities beyond treating individual patients, including understanding wider healthcare initiatives and their importance to society. I also realised that attending programmes organised by healthcare authorities can help medical students become more familiar with the healthcare environment in which they may eventually practise. Being exposed to these initiatives encouraged me to remain informed and engaged with the healthcare sector.",
        conclusion: "Overall, attending the HAYAT Programme was a valuable addition to my university experiences. It broadened my exposure beyond the academic curriculum and reminded me of the importance of remaining open to educational opportunities. Receiving the Certificate of Appreciation was encouraging and motivated me to continue exploring initiatives that contribute to my development.",
        action: "Moving forward, I intend to attend more educational programmes, seminars and healthcare initiatives organised by universities and healthcare authorities. I hope to explore opportunities that broaden my understanding of medicine and expose me to different areas of healthcare. I also aim to become more actively involved in relevant initiatives as I progress through medical school."
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
        description: "Participating in a World Diabetes Day awareness event at Gulf Medical University gave me an opportunity to engage with an important public health topic beyond the classroom. The event focused on raising awareness about diabetes, its risk factors, prevention and the importance of early detection. Although I had previously studied diabetes academically, participating in an awareness initiative gave me a different perspective on its impact on individuals and communities. My participation was recognised with a Certificate of Participation.",
        feelings: "Before participating, I viewed World Diabetes Day mainly as an awareness initiative. However, I began to appreciate how relevant the condition is to everyday life, particularly in communities where diabetes is a significant health concern. I was interested in understanding how awareness campaigns can influence people’s knowledge of their health. As a first-year medical student, I also felt that this was a valuable opportunity to experience an aspect of medicine outside the academic environment.",
        evaluation: "One of the most valuable aspects of the event was recognising that medical knowledge should not remain limited to textbooks and examinations but should also benefit the wider community. The initiative highlighted the importance of prevention and early detection. However, it also made me realise that raising awareness alone is not always sufficient, as encouraging individuals to make lasting lifestyle changes can be challenging.",
        analysis: "This experience helped me understand the importance of preventive medicine and health education. Diabetes can have significant long-term consequences if it is not properly managed. I began to appreciate that healthcare professionals have responsibilities beyond diagnosing and treating illnesses. They also play an important role in educating individuals and encouraging healthier lifestyles. Another important lesson was recognising that effective communication is essential when discussing health-related topics. Medical information needs to be explained clearly and without judgement, particularly when individuals may face difficulties managing a chronic condition.",
        conclusion: "Overall, participating in World Diabetes Day broadened my understanding of public health and the importance of prevention. It reminded me that medicine extends beyond clinical treatment and includes educating and supporting communities.",
        action: "Moving forward, I intend to participate in more university awareness initiatives and community health activities. I also aim to strengthen my understanding of chronic conditions, particularly their risk factors, prevention and management. I hope to develop the communication skills necessary to explain medical information in an approachable and understandable manner."
      }
    },
  ],
};
