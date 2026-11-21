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
    id: "evidence-based",
    index: "02",
    title: "Evidence-Based Practitioner and Scholar",
    plain: "Engages in lifelong learning through critical appraisal of research and evidence. Applies scientific findings to clinical decision-making and contributes to advancing medical knowledge through inquiry and reflection.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "patient-care",
    index: "03",
    title: "Patient Care Provider and Health Advocate",
    plain: "Places patients at the center of care, ensuring their safety, dignity, and well-being. Advocates for equitable access to healthcare and supports initiatives that enhance public health outcomes.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "communicator",
    index: "04",
    title: "Communicator",
    plain: "Builds effective relationships with patients, families, and healthcare professionals through clear, empathetic, and respectful communication. Ensures understanding and trust in every clinical interaction.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "collaborator",
    index: "05",
    title: "Collaborator, Innovator and Leader",
    plain: "Works effectively within interprofessional teams, demonstrating leadership, initiative, and innovation. Promotes teamwork, adaptability, and shared responsibility to achieve optimal healthcare outcomes.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "professionalism",
    index: "06",
    title: "Professional",
    plain: "Exemplifies integrity, accountability, and ethical conduct in all aspects of medical practice. Maintains professionalism, empathy, and respect for patients, colleagues, and the profession.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "health-systems",
    index: "07",
    title: "Health System Proponent",
    plain: "Understands and supports the functioning of healthcare systems, contributing to improvements in quality, efficiency, and sustainability. Engages in advocacy and collaboration to strengthen health services.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "lifelong-learner",
    index: "08",
    title: "Self and Profession Enhancer",
    plain: "Actively seeks opportunities for personal and professional growth through reflection, feedback, and continuous improvement. Demonstrates commitment to lifelong learning and professional excellence.",
    yearOne: "",
    evidence: "",
  },
  {
    id: "social-accountability",
    index: "09",
    title: "Socially Accountable",
    plain: "Recognises the responsibility of medicine to society by addressing public health challenges, promoting social justice, and contributing to the well-being of local and global communities.",
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

export const evidenceItems = {};
export function answerJournal() { return ""; }
export const purposes = [];
export const ledger = [];
export const standing = [];
export const yearMap = [];
