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
      title: "Teaching laboratory sessions", 
      description: "Hands-on work in the skills lab applying foundational biomedical science.", 
      details: "Laboratory sessions covering core techniques in anatomy and physiology. These build the practical foundation required before clinical application.",
      image: "/rahul.jpeg", 
      type: "photo",
      date: "Year I"
    },
    { 
      title: "Mid-semester achievement certificate", 
      description: "Recognition for performance in foundational medical physiology.", 
      details: "Certificate of Achievement for the mid-semester examination in medical physiology, issued by faculty at Gulf Medical University.",
      image: "/Certificate of Achievement-physiology.jpeg", 
      type: "certificate",
      date: "October 2026"
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
      date: "World Diabetes Day 2026"
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
