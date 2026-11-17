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
    plain: "Know the science well enough to explain it without hiding behind jargon.",
    yearOne:
      "Foundational sciences — anatomy, physiology, and the mechanisms later years will put in front of a patient. The aim this year is accuracy, not speed.",
    evidence:
      "Coursework, skills-lab sign-offs, and a plain-language explanation of a mechanism. Nothing is listed as achieved until it is assessed.",
  },
  {
    id: "communicator",
    index: "02",
    title: "Communicator",
    plain: "Say the thing in the language the other person actually uses.",
    yearOne:
      "In class, that means a clean explanation. With a patient, later, it is the same skill under more pressure. Year one is practice without an audience to impress.",
    evidence:
      "Oral presentations, written notes, and observed conversations in skills sessions. Clarity is the mark, not volume.",
  },
  {
    id: "collaborator",
    index: "03",
    title: "Collaborator",
    plain: "Medicine is a team with a hierarchy. Take the role you were given.",
    yearOne:
      "Show up prepared. Do the unglamorous part. Do not perform leadership that has not been assigned. A first-year is useful by being reliable.",
    evidence:
      "Group work, lab partners, and early clinical teams. Credit is shared. Gaps are named, not covered.",
  },
  {
    id: "professionalism",
    index: "04",
    title: "Professionalism",
    plain: "Time, dress, and honesty about what you do not know.",
    yearOne:
      "The coat is a uniform, not a personality. No borrowed ward stories. If a skill has not been signed off, it is not on this site.",
    evidence:
      "Attendance, conduct, and a record that can be checked against what faculty actually saw.",
  },
  {
    id: "patient-care",
    index: "05",
    title: "Patient Care",
    plain: "Be safe in the room before you try to be impressive in it.",
    yearOne:
      "Patients are not a year-one case log. The work is introduction, hand hygiene, watching before touching, and knowing what a student is not allowed to do yet.",
    evidence:
      "Clinical-skills checklists and supervised exposure through GMU's teaching hospitals. Encounters are recorded only when they happened.",
  },
  {
    id: "evidence-based",
    index: "06",
    title: "Evidence-Based",
    plain: "Read a paper before citing one for decoration.",
    yearOne:
      "Question, method, and the sentence you are not allowed to write yet. A preprint and a headline are not the same thing as a result.",
    evidence:
      "Journal clubs, structured appraisals, and any research entry that has a title, a method, and an outcome.",
  },
  {
    id: "social-accountability",
    index: "07",
    title: "Social Accountability",
    plain: "A public medical university trains people for a city, not a textbook.",
    yearOne:
      "Ajman is not a backdrop. Year one is noticing who the system is built for, and who has to work harder to be seen by it.",
    evidence:
      "Community and professionalism teaching, written without turning other people's lives into a personal brand.",
  },
  {
    id: "health-systems",
    index: "08",
    title: "Health Systems",
    plain: "Learn how a teaching hospital is organized before claiming to use it.",
    yearOne:
      "Gulf Medical University sits inside the Thumbay Academic Health System — hospitals, not a metaphor. The map comes before the opinion.",
    evidence:
      "Orientation to the academic health system, and later, notes on how a ward, a lab, and a clinic actually hand work to each other.",
  },
  {
    id: "lifelong-learner",
    index: "09",
    title: "Lifelong Learner",
    plain: "Short entries. Dated. Corrected when wrong.",
    yearOne:
      "This journal is the habit. The point of a first-year record is that it can change without being rewritten into a success story.",
    evidence:
      "Reflections on the Gibbs cycle, kept specific. A feeling is not evidence. An action is.",
  },
];

export const gibbs = [
  { step: "01", title: "Description", text: "What happened. Facts only." },
  { step: "02", title: "Feelings", text: "What you noticed in yourself. Not the verdict." },
  { step: "03", title: "Evaluation", text: "What held. What did not." },
  { step: "04", title: "Analysis", text: "Why, against the science and the standard." },
  { step: "05", title: "Conclusion", text: "What you would do differently." },
  { step: "06", title: "Action", text: "The next concrete thing. Dated." },
];

export const purposes = [
  {
    index: "01",
    title: "Document the year",
    text: "Lectures, skills labs, and early clinical exposure — written while they are still fresh, not reconstructed at graduation.",
  },
  {
    index: "02",
    title: "Hold the standard",
    text: "Nine competencies from the GMU framework. A grid, not a highlight reel. Empty cells stay empty.",
  },
  {
    index: "03",
    title: "Practice judgment",
    text: "Gibbs reflections, used when there is a real encounter. The cycle is the method. It is not filled in advance.",
  },
  {
    index: "04",
    title: "Stay accountable",
    text: "A public record for mentors and for the person reading this in year four, who should be able to see the starting line.",
  },
];

export const ledger = [
  {
    index: "01",
    kind: "Research project",
    status: "Open",
    text: "No title is listed until there is a question, a method, and a supervisor.",
  },
  {
    index: "02",
    kind: "Publication",
    status: "Open",
    text: "Nothing is in press. A blog post and a paper are not the same entry.",
  },
  {
    index: "03",
    kind: "Conference paper",
    status: "Open",
    text: "Posters and talks will be dated here when they are accepted, not when they are hoped for.",
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
    what: "The professional introduction GMU gives a medical intake, then the work of becoming a student who can be trusted in a teaching hospital.",
  },
  {
    when: "Year I · Science",
    what: "Structure and function, taught to a clinical standard. Anatomy and physiology before opinions about specialties.",
  },
  {
    when: "Year I · Skills",
    what: "Communication, the first examination maneuvers, and conduct in a room where someone else is the patient.",
  },
  {
    when: "Year I · System",
    what: "How Gulf Medical University and the Thumbay hospitals are organized — the map a first-year is supposed to learn before using it.",
  },
];

export function answerJournal(raw: string): string {
  const s = raw.toLowerCase();
  if (!s.trim()) {
    return "Ask about the record, the GMD year, a competency, or the ledger.";
  }
  if (s.includes("contact") || s.includes("email") || s.includes("linkedin") || s.includes("reach")) {
    return "No public email or LinkedIn is listed yet. For academic enquiries, Gulf Medical University in Ajman is the institution of record. A direct line will be added when it is ready to publish.";
  }
  if (s.includes("cv") || s.includes("resume") || s.includes("résumé")) {
    return "There is no CV file on this site. The Record and the nine competencies are the current documents. A CV will not be linked until it matches what is written here.";
  }
  if (s.includes("research") || s.includes("publish") || s.includes("ledger") || s.includes("paper") || s.includes("conference")) {
    return "The ledger is open and empty on purpose. Research, publications, and conference papers are added only when they have a title, a method, and a result. A plan is not an entry.";
  }
  if (s.includes("competenc") || s.includes("gibbs") || s.includes("domain")) {
    return "Nine domains, aligned with the GMU framework: Medical Expert, Communicator, Collaborator, Professionalism, Patient Care, Evidence-Based practice, Social Accountability, Health Systems, and Lifelong Learner. Open Competencies and pick one. Reflections, when they exist, follow the Gibbs cycle. None are invented to fill the page.";
  }
  if (s.includes("gmu") || s.includes("gulf") || s.includes("gmd") || s.includes("program") || s.includes("medicine") || s.includes("thumbay")) {
    return "Rahul Devnani is a first-year GMD student at Gulf Medical University, Ajman — the university's Doctor of Medicine training. He entered in 2026. Clinical teaching sits inside the Thumbay Academic Health System. This journal does not invent rotations or a specialty.";
  }
  if (s.includes("who") || s.includes("about") || s.includes("rahul") || s.includes("record") || s.includes("year")) {
    return "Rahul Devnani. First-year GMD, Gulf Medical University, Ajman. Entered 2026. The Field Coat Journal is the working record of that training: direct, dated, and unfinished on purpose. Specialty interest is not advertised in year one.";
  }
  return "I only answer from what this journal publishes: the record, the nine competencies, the ledger, and how to get in touch. Try one of those.";
}

export const evidenceItems = {
  "medical-expert": [
    { title: "Teaching laboratory sessions", description: "Practical skills development in the skills lab, applying biomedical principles hands-on.", image: "/lab-photo.jpg", type: "photo" },
    { title: "Mid-semester achievement certificate", description: "Recognition for performance in foundational medical sciences and physiology.", image: "/midsem-certificate.jpg", type: "certificate" },
  ],
  "social-accountability": [
    { title: "MOHAP Hayat Program certificate", description: "Appreciation for contribution to the Hayat Program community health initiative (30 September 2026).", image: "/hayat-certificate.jpg", type: "certificate" },
    { title: "World Diabetes Day certificate", description: "Participation in community awareness activities for World Diabetes Day.", image: "/diabetes-certificate.jpg", type: "certificate" },
  ],
  "lifelong-learner": [
    { title: "Gut-Brain Axis attendance certificate", description: "Attendance at the Gut-Brain Axis: Healthy Nutrition for Your Well-being session (5 November 2026).", image: "/gutbrain-certificate.jpg", type: "certificate" },
  ],
};
