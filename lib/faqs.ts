export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Do I need any coding experience to join?",
    answer:
      "No. All three tracks start from the very beginning. If you can use a smartphone and a laptop, you can start here.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "Classes are live sessions held on weekends (Saturday and Sunday). All sessions are recorded and shared, so you won't miss anything if something comes up.",
  },
  {
    question: "How much time do I need per week?",
    answer:
      "Expect to commit 10–15 hours per week — live classes plus practice time. If you treat it like a part-time job, you'll get job-ready results.",
  },
  {
    question: "What device do I need?",
    answer:
      "A laptop running Windows or Mac with at least 8GB RAM. A smartphone alone is not enough for writing code.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept bank transfer. You'll receive payment details after your application is confirmed. Instalment plans are available — ask us on WhatsApp.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "If you decide to withdraw before the second class, we offer a full refund. After that, no refunds — but you can defer to the next cohort.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. You'll receive a TopStack Academy certificate of completion. More importantly, you'll have real projects in your portfolio that prove your skills.",
  },
  {
    question: "How many students are in each cohort?",
    answer:
      "We cap each cohort at 15 students to ensure every student gets attention and feedback.",
  },
  {
    question: "What support do I get outside of class?",
    answer:
      "You get access to a WhatsApp group with your cohort and the instructor for questions, code reviews, and support throughout the programme.",
  },
  {
    question: "Can I learn while working a full-time job?",
    answer:
      "Yes — the schedule is designed for working adults. Weekend classes mean you don't have to quit your job to attend.",
  },
  {
    question: "What happens after I graduate?",
    answer:
      "You get CV review, LinkedIn profile feedback, and a portfolio critique session. We also share relevant job and freelance opportunities with graduates.",
  },
  {
    question: "Which track should I pick if I'm a complete beginner?",
    answer:
      "Start with Frontend if you're drawn to visual design and UI. Start with Backend if you love logic and systems. If you're unsure, the Fullstack track covers both — just be prepared for 6 months of commitment. Not ready to commit at all? Start with Free Stack.",
  },
  {
    question: "Is Free Stack actually free?",
    answer:
      "Yes — 100% free, no hidden fees, no card required. We'd rather you try real web development with us before spending any money on a paid track.",
  },
  {
    question: "What happens after Free Stack ends?",
    answer:
      "You'll leave with real fundamentals and a live project. You're welcome to apply for Frontend, Backend, or Fullstack afterward, but there's no obligation to continue.",
  },
  {
    question: "How is Free Stack different from the paid tracks?",
    answer:
      "Free Stack covers core web fundamentals in 8 weeks with one capstone project. The paid tracks go much deeper — full curricula, multiple portfolio projects, and career support — over 3 to 6 months.",
  },
];

function pickFaqs(questions: string[]): Faq[] {
  return questions.map(
    (question) => faqs.find((faq) => faq.question === question)!
  );
}

export const trackFaqs: Record<
  "frontend" | "backend" | "fullstack" | "freestack",
  Faq[]
> = {
  frontend: pickFaqs([
    "Do I need any coding experience to join?",
    "How much time do I need per week?",
    "What device do I need?",
  ]),
  backend: pickFaqs([
    "Are the classes live or recorded?",
    "How do I pay?",
    "What support do I get outside of class?",
  ]),
  fullstack: pickFaqs([
    "Which track should I pick if I'm a complete beginner?",
    "Is there a refund policy?",
    "Can I learn while working a full-time job?",
  ]),
  freestack: pickFaqs([
    "Is Free Stack actually free?",
    "What happens after Free Stack ends?",
    "How is Free Stack different from the paid tracks?",
  ]),
};
