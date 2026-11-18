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
    plain: "Build a clear, accurate foundation in the sciences that will later guide clinical decisions.",
    yearOne:
      "Focus on anatomy, physiology, and core mechanisms. The priority this year is precision and understanding, not speed or performance.",
    evidence:
      "Coursework, laboratory sessions, and the ability to explain a concept clearly. Nothing is marked as achieved until it has been assessed.",
  },
  {
    id: "communicator",
    index: "02",
    title: "Communicator",
    plain: "Explain ideas simply and listen carefully, in the language the other person uses.",
    yearOne:
      "Practice clear explanations in class and skills sessions. The same skill will matter more later with patients.",
    evidence:
      "Presentations, written work, and observed communication in skills labs. Clarity matters more than volume.",
  },
  {
    id: "collaborator",
    index: "03",
    title: "Collaborator",
    plain: "Contribute reliably within a team and respect the role that has been assigned.",
    yearOne:
      "Show up prepared and complete the work that is given. Reliability is the first contribution a first-year can make.",
    evidence:
      "Group projects, laboratory partners, and early team activities. Credit is shared and gaps are named.",
  },
  {
    id: "professionalism",
    index: "04",
    title: "Professionalism",
    plain: "Be punctual, prepared, and honest about the limits of current knowledge.",
    yearOne:
      "The white coat is a uniform and a responsibility. Skills that have not been signed off are not listed here.",
    evidence:
      "Attendance, conduct, and a record that matches what faculty have observed.",
  },
  {
    id: "patient-care",
    index: "05",
    title: "Patient Care",
    plain: "Learn how to be safe and respectful in a clinical space before trying to be impressive.",
    yearOne:
      "Introduction, hand hygiene, observation, and clear understanding of what a student is not yet permitted to do.",
    evidence:
      "Clinical skills checklists and supervised exposure. Encounters are recorded only when they occurred.",
  },
  {
    id: "evidence-based",
    index: "06",
    title: "Evidence-Based",
    plain: "Read carefully before citing, and distinguish a result from a headline.",
    yearOne:
      "Learn how to identify a question, a method, and the limits of what can be claimed. A plan is not yet a finding.",
    evidence:
      "Journal discussions, structured appraisals, and any research entry that has a clear question, method, and outcome.",
  },
  {
    id: "social-accountability",
    index: "07",
    title: "Social Accountability",
    plain: "Recognise that medical training serves a community, not only a curriculum.",
    yearOne:
      "Notice who the health system in Ajman is designed for and where access is harder. Community work is recorded without turning it into a personal story.",
    evidence:
      "Community health activities and professionalism teaching, described factually.",
  },
  {
    id: "health-systems",
    index: "08",
    title: "Health Systems",
    plain: "Understand how a teaching hospital is organised before forming strong opinions about it.",
    yearOne:
      "Gulf Medical University sits within the Thumbay Academic Health System. The structure comes before any critique.",
    evidence:
      "Orientation to the academic health system and later notes on how different parts of the system work together.",
  },
  {
    id: "lifelong-learner",
    index: "09",
    title: "Lifelong Learner",
    plain: "Keep a short, dated record that can be corrected when it is wrong.",
    yearOne:
      "This journal is the practice. A first-year record should be able to change without being rewritten as a success story.",
    evidence:
      "Specific reflections using the Gibbs cycle. An action is more useful than a feeling.",
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
    return "Nine domains, aligned with the GMU framework: Medical Expert, Communicator, Collaborator, Professionalism, Patient Care, Evidence-Based practice, Social Accountability, Health Systems, and Lifelong Learner. Open Competencies and select one. Reflections, when they exist, follow the Gibbs cycle.";
  }
  if (s.includes("gmu") || s.includes("gulf") || s.includes("gmd") || s.includes("program") || s.includes("medicine") || s.includes("thumbay")) {
    return "Rahul Devnani is a first-year GMD student at Gulf Medical University, Ajman — the university's Doctor of Medicine training. He entered in 2026. Clinical teaching takes place within the Thumbay Academic Health System.";
  }
  if (s.includes("who") || s.includes("about") || s.includes("rahul") || s.includes("record") || s.includes("year")) {
    return "Rahul Devnani. First-year GMD, Gulf Medical University, Ajman. Entered 2026. The Field Coat Journal is the working record of that training: direct, dated, and unfinished on purpose.";
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
