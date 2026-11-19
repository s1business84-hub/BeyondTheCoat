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
    plain: "Demonstrates a strong foundation of clinical knowledge, diagnostic reasoning, and technical skills essential for safe and effective patient care. Integrates scientific principles with clear clinical judgment.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "communicator",
    index: "02",
    title: "Communicator",
    plain: "Builds effective relationships with patients, families, and healthcare professionals through clear, empathetic, and respectful communication. Ensures understanding and trust in every interaction.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "collaborator",
    index: "03",
    title: "Collaborator",
    plain: "Works effectively within teams, contributing reliably and respecting assigned roles. Promotes shared responsibility and clear communication to achieve better outcomes.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "professionalism",
    index: "04",
    title: "Professional",
    plain: "Exemplifies integrity, accountability, and ethical conduct. Maintains professionalism, punctuality, and honesty about the limits of current knowledge.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "patient-care",
    index: "05",
    title: "Patient Care",
    plain: "Places patients at the center of care, prioritising safety, dignity, and well-being. Learns to be safe and respectful in clinical spaces before aiming to be impressive.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "evidence-based",
    index: "06",
    title: "Evidence-Based",
    plain: "Engages with research and evidence through critical appraisal. Applies findings carefully and distinguishes a result from a headline or a plan.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "social-accountability",
    index: "07",
    title: "Social Accountability",
    plain: "Recognises the responsibility of medicine to society. Addresses community health needs and contributes to the well-being of the local population.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "health-systems",
    index: "08",
    title: "Health Systems",
    plain: "Understands how a teaching hospital and academic health system are organised. Learns the structure before forming opinions about how it works.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "lifelong-learner",
    index: "09",
    title: "Lifelong Learner",
    plain: "Actively seeks opportunities for growth through reflection and continuous improvement. Keeps a dated, correctable record of learning.",
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
    title: "Document the year",
    text: "Lectures, skills labs, and early clinical exposure recorded while they are still clear, not reconstructed later.",
  },
  {
    index: "02",
    title: "Hold the standard",
    text: "Nine competencies aligned with the GMU framework. Empty cells stay empty until there is evidence.",
  },
  {
    index: "03",
    title: "Practice judgment",
    text: "Gibbs reflections used only when there has been a real encounter. The cycle is not filled in advance.",
  },
  {
    index: "04",
    title: "Stay accountable",
    text: "A public record that mentors and a future self can check against the starting point.",
  },
];

export const ledger = [
  {
    index: "01",
    kind: "Research project",
    status: "Open",
    text: "No title is listed until there is a clear question, a method, and a supervisor.",
  },
  {
    index: "02",
    kind: "Publication",
    status: "Open",
    text: "Nothing is currently in press. A blog post and a peer-reviewed paper are recorded differently.",
  },
  {
    index: "03",
    kind: "Conference paper",
    status: "Open",
    text: "Posters and presentations will be added here only after they have been accepted.",
  },
];

export const standing = [
  { index: "01", label: "Standing", value: "Year I · GMD" },
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
    when: "Year I · Science",
    what: "Structure and function taught to a clinical standard. Anatomy and physiology before opinions about specialties.",
  },
  {
    when: "Year I · Skills",
    what: "Communication, first examination skills, and conduct in a room where someone else is the patient.",
  },
  {
    when: "Year I · System",
    what: "How Gulf Medical University and the Thumbay hospitals are organised — the map a first-year is expected to learn.",
  },
];

export function answerJournal(raw: string): string {
  const s = raw.toLowerCase();
  if (!s.trim()) {
    return "Ask about the record, the GMD year, a competency, or the ledger.";
  }
  if (s.includes("contact") || s.includes("email") || s.includes("linkedin") || s.includes("reach")) {
    return "No public email or LinkedIn is listed yet. For academic enquiries, Gulf Medical University in Ajman is the institution of record. A direct line will be added when it is ready.";
  }
  if (s.includes("cv") || s.includes("resume") || s.includes("résumé")) {
    return "There is no CV file on this site. The record and the nine competencies are the current documents. A CV will not be linked until it matches what is written here.";
  }
  if (s.includes("research") || s.includes("publish") || s.includes("ledger") || s.includes("paper") || s.includes("conference")) {
    return "The ledger is open and empty on purpose. Research, publications, and conference papers are added only when they have a title, a method, and a result. A plan is not an entry.";
  }
  if (s.includes("competenc") || s.includes("gibbs") || s.includes("domain")) {
    return "Nine domains, aligned with the GMU framework: Medical Expert, Communicator, Collaborator, Professional, Patient Care, Evidence-Based, Social Accountability, Health Systems, and Lifelong Learner. Open Competencies and select one. Reflections, when they exist, follow the Gibbs cycle.";
  }
  if (s.includes("gmu") || s.includes("gulf") || s.includes("gmd") || s.includes("program") || s.includes("medicine") || s.includes("thumbay")) {
    return "Rahul Devnani is a first-year GMD student at Gulf Medical University, Ajman — the university's Doctor of Medicine training. He entered in 2026. Clinical teaching takes place within the Thumbay Academic Health System.";
  }
  if (s.includes("who") || s.includes("about") || s.includes("rahul") || s.includes("record") || s.includes("year")) {
    return "Rahul Devnani. First-year GMD, Gulf Medical University, Ajman. Entered 2026. Beyond the White Coat is the working record of that training: direct, dated, and unfinished on purpose.";
  }
  return "I only answer from what this journal publishes: the record, the nine competencies, the ledger, and how to get in touch. Try one of those.";
}

export const evidenceItems = {
  "medical-expert": [
    { 
      title: "Biochemistry laboratory sessions", 
      description: "Hands-on practicals applying chemical processes involved in the functioning of the human body.", 
      details: "Sessions covered biochemical calculations, precipitation reactions of proteins, colour reactions of proteins and amino acids, buffering capacity, reactions of monosaccharides and disaccharides, identification of abnormal constituents in urine samples, reactions of lipids and enzyme kinetics.",
      image: "/rahul.jpeg", 
      type: "photo",
      date: "Year I",
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
      date: "Year I"
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
        feelings: "Before participating, I viewed World Diabetes Day mainly as an awareness initiative. However, being involved made me realise how relevant the condition is to everyday life, particularly in a community where diabetes is an important health concern. I felt interested in learning more about how awareness initiatives can influence people’s understanding of their health. As a first-year medical student, I also felt that participating in such an event was a valuable opportunity to experience a different aspect of medicine outside the academic environment.",
        evaluation: "One of the most valuable aspects of the event was the opportunity to become involved in promoting awareness about a condition that affects many individuals worldwide. It helped me recognise that medical knowledge should not remain limited to textbooks and examinations but should also be communicated in ways that benefit the wider community. The experience also highlighted the importance of prevention and early detection. However, it made me realise that raising awareness alone is not always sufficient, as encouraging individuals to make lasting lifestyle changes can be considerably more challenging.",
        analysis: "This experience helped me understand the importance of preventive medicine and health education. Diabetes is not simply a condition involving elevated blood glucose levels; it can have significant long-term consequences if not properly managed. I began to appreciate that healthcare professionals have responsibilities beyond diagnosing and treating illnesses. They also play an important role in educating individuals, encouraging healthier lifestyles and helping prevent complications. Another important lesson was recognising that effective communication is essential when discussing health-related topics. Medical information needs to be explained in a clear and understandable manner, particularly when communicating with individuals who may not have a medical background. I also realised that developing empathy is important, as patients may experience different challenges when managing a chronic condition.",
        conclusion: "Overall, participating in World Diabetes Day was a meaningful experience during my first semester of medical school. It broadened my understanding of the role of awareness campaigns in promoting public health and reminded me that medicine extends beyond clinical treatment. The experience also encouraged me to become more aware of the responsibilities that come with pursuing a career in healthcare, particularly the importance of patient education, prevention and effective communication.",
        action: "Moving forward, I intend to participate in more university awareness initiatives and community health activities to broaden my exposure to public health. I also aim to strengthen my understanding of common chronic conditions, particularly their risk factors, prevention and long-term management. As I progress through medical school, I hope to improve my ability to communicate medical information in a simple and approachable manner while developing the empathy and awareness necessary to become a well-rounded healthcare professional."
      }
    },
  ],
  "lifelong-learner": [
    { 
      title: "Gut-Brain Axis attendance certificate", 
      description: "Attendance at the Gut-Brain Axis: Healthy Nutrition for Your Well-being session.", 
      details: "Certificate of Attendance for the session conducted on 5 November 2026 at Gulf Medical University College of Medicine.",
      image: "/Gut-Brain Axis.jpeg", 
      type: "certificate",
      date: "5 November 2026"
    },
  ],
};
