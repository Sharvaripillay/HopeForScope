// HopeForScope - Comprehensive Course Database for After Class 12
window.COURSES_DATA = [
  {
    id: "btech-cse",
    name: "B.Tech in Computer Science & Engineering (CSE)",
    category: "degree",
    domain: "tech",
    badgeClass: "badge-blue",
    cardClass: "card-pastel-blue",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with Physics, Mathematics, and Chemistry/CS",
    requiredSubjects: ["Physics", "Mathematics", "Chemistry / Computer Science"],
    minPercentage: "75% for JEE Main (IIT/NIT criteria) or 50-60% for state/private universities",
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "MHT-CET", "VITEEE", "COMEDK"],
    admissionProcess: "National/State centralized counseling (JoSAA/CSAB for IITs/NITs) based on entrance exam ranks, or university-specific counseling.",
    bestColleges: [
      "IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur",
      "NIT Trichy, NIT Surathkal, Warangal",
      "BITS Pilani (Pilani, Goa, Hyderabad)",
      "IIIT Hyderabad, IIIT Delhi",
      "COEP Pune, Jadavpur University Kolkata"
    ],
    approxFees: "Govt (IIT/NIT): ₹1.5L - ₹2.5L/year; State Govt: ₹40,000 - ₹1.2L/year; Top Private (BITS/VIT): ₹3L - ₹5.5L/year.",
    careerOpportunities: ["Software Engineer", "Cloud Architect", "Full Stack Developer", "Systems Architect", "Cybersecurity Specialist"],
    expectedSalary: {
      india: { entry: "₹6 - ₹20 LPA (Tier-1 MNCs: ₹25 - ₹45 LPA)", mid: "₹18 - ₹38 LPA", senior: "₹40 - ₹90+ LPA" },
      abroad: { entry: "$85,000 - $125,000/yr", mid: "$130,000 - $190,000/yr", senior: "$220,000 - $350,000+/yr" }
    },
    pros: ["Highest volume of high-paying campus placements", "Extensive global job mobility and H-1B / PR sponsorship", "Applicable across all industry verticals"],
    cons: ["Fierce competitive exam cutoffs for top colleges", "High pace of technology obsolescence requires constant self-study"],
    futureGrowth: "High & Sustained. Cloud computing, distributed systems, and generative tools require strong core software engineers."
  },
  {
    id: "btech-ai-ds",
    name: "B.Tech in Artificial Intelligence & Data Science",
    category: "emerging",
    domain: "tech",
    badgeClass: "badge-lavender",
    cardClass: "card-pastel-lavender",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 with Physics, Mathematics, and Chemistry/CS",
    requiredSubjects: ["Mathematics", "Physics", "Chemistry / CS"],
    minPercentage: "60% aggregate in Class 12",
    entranceExams: ["JEE Main", "BITSAT", "MHT-CET", "VITEEE", "MET"],
    admissionProcess: "JoSAA/State CET Counseling or Direct Merit based on national entrance ranks.",
    bestColleges: [
      "IIT Hyderabad (Pioneer in B.Tech AI)",
      "IIT Roorkee, IIT Guwahati",
      "IIIT Delhi & IIIT Hyderabad",
      "VIT Vellore, SRM University",
      "Plaksha University, Punjab"
    ],
    approxFees: "Govt: ₹1.5L - ₹2.5L/year; Private: ₹2.5L - ₹5L/year.",
    careerOpportunities: ["AI Research Engineer", "Data Scientist", "NLP Specialist", "Computer Vision Engineer", "MLOps Architect"],
    expectedSalary: {
      india: { entry: "₹8 - ₹22 LPA", mid: "₹22 - ₹42 LPA", senior: "₹50 - ₹1.2 Cr+ LPA" },
      abroad: { entry: "$105,000 - $140,000/yr", mid: "$160,000 - $230,000/yr", senior: "$260,000 - $420,000+/yr" }
    },
    pros: ["Specialized curriculum cutting out legacy topics in favor of modern AI/ML", "Direct eligibility for premium high-paying AI labs", "Hyper-growth industry demand"],
    cons: ["Relatively new branch; course syllabus varies across colleges", "Heavy emphasis on advanced calculus and linear algebra"],
    futureGrowth: "Hyper-growth. The foundation for autonomous systems, robotics, and generative intelligence."
  },
  {
    id: "mbbs",
    name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
    category: "degree",
    domain: "medical",
    badgeClass: "badge-green",
    cardClass: "card-pastel-green",
    duration: "5.5 Years (4.5 Years Academic + 1 Year Compulsory Rotatory Internship)",
    eligibility: "10+2 with Physics, Chemistry, Biology/Biotechnology, and English",
    requiredSubjects: ["Biology", "Chemistry", "Physics", "English"],
    minPercentage: "50% in PCB aggregate (40% for SC/ST/OBC)",
    entranceExams: ["NEET-UG (National Eligibility cum Entrance Test - Sole exam in India)"],
    admissionProcess: "MCC Central Counseling for 15% All India Quota (AIQ) & Deemed Universities; State Counseling for 85% State Quota seats.",
    bestColleges: [
      "AIIMS New Delhi, AIIMS Bhopal, AIIMS Rishikesh",
      "CMC Vellore",
      "JIPMER Puducherry",
      "King George's Medical University (KGMU) Lucknow",
      "Madras Medical College Chennai"
    ],
    approxFees: "Govt Colleges: ₹6,000 - ₹50,000/year; Private Medical Colleges: ₹12,00,000 - ₹24,00,000/year; Deemed: ₹18,00,000 - ₹28,00,000/year.",
    careerOpportunities: ["Medical Doctor", "Junior Resident", "Clinical Researcher", "Hospital Administrator", "Medical Officer in Govt/Armed Forces"],
    expectedSalary: {
      india: { entry: "₹7 - ₹12 LPA (Junior Resident in PG)", mid: "₹16 - ₹30 LPA (Specialist)", senior: "₹40 - ₹1.2 Cr+ LPA" },
      abroad: { entry: "$65,000 - $80,000/yr (US Resident)", mid: "$240,000 - $380,000/yr", senior: "$450,000 - $850,000+/yr" }
    },
    pros: ["Unmatched respect, social impact, and patient healing", "Lifelong recession-proof career stability", "Opportunity for private clinic ownership"],
    cons: ["Fierce competition in NEET-UG (24+ lakh aspirants)", "Long duration (8-10 years including MD/MS specialization)", "Demanding night-call emergency shifts"],
    futureGrowth: "Permanent high demand. Global doctor-to-population ratios remain below WHO guidelines."
  },
  {
    id: "ca-integrated",
    name: "Chartered Accountancy (CA - ICAI Professional Course)",
    category: "professional",
    domain: "commerce",
    badgeClass: "badge-peach",
    cardClass: "card-pastel-peach",
    duration: "4.5 to 5 Years (including 2 Years Mandatory Practical Articleship)",
    eligibility: "10+2 passed in any stream (Commerce, Science, or Arts)",
    requiredSubjects: ["Any Class 12 stream; Accountancy & Math advantageous"],
    minPercentage: "Class 12 pass (no minimum percentage threshold for ICAI registration)",
    entranceExams: ["CA Foundation Exam (held twice yearly by ICAI in May/June & Nov/Dec)"],
    admissionProcess: "Direct registration on ICAI Self Service Portal (SSP) → 4-month study period → Pass Foundation → Register for Inter & Articleship → Pass Final.",
    bestColleges: [
      "Sole awarding body: The Institute of Chartered Accountants of India (ICAI)",
      "Popular parallel college degrees: SRCC Delhi, St. Xavier's Kolkata, Narsee Monjee Mumbai, Loyola Chennai"
    ],
    approxFees: "Total ICAI fees for all 3 levels (Foundation + Inter + Final + ITT training): ~₹75,000 - ₹95,000 total. Coached via private institutes: ₹80,000 - ₹1.5L.",
    careerOpportunities: ["Statutory Auditor", "Tax Consultant", "CFO / Finance Director", "Forensic Auditor", "Investment Banker", "M&A Advisor"],
    expectedSalary: {
      india: { entry: "₹8 - ₹15 LPA (Rankers: ₹20 - ₹28 LPA)", mid: "₹18 - ₹35 LPA", senior: "₹45 - ₹1.5 Cr+ LPA" },
      abroad: { entry: "$65,000 - $85,000/yr (UAE/UK)", mid: "$100,000 - $150,000/yr", senior: "$180,000 - $280,000+/yr" }
    },
    pros: ["Lowest cost-to-earning ratio of any premier profession in India", "Exclusive statutory legal authority to sign corporate balance sheets", "High entrepreneurial practice freedom"],
    cons: ["Extremely low pass percentage (historical ~10-15% in Final)", "Demanding self-study without regular campus life"],
    futureGrowth: "High. Rapid expansion of formal economy, GST audits, startups, and international IFRS compliance."
  },
  {
    id: "ba-llb-integrated",
    name: "5-Year Integrated B.A. LL.B. / B.B.A. LL.B. (Hons)",
    category: "degree",
    domain: "law",
    badgeClass: "badge-lavender",
    cardClass: "card-pastel-lavender",
    duration: "5 Years (10 Semesters)",
    eligibility: "10+2 passed in ANY stream (Arts, Commerce, or Science)",
    requiredSubjects: ["Any Class 12 stream; English proficiency essential"],
    minPercentage: "45% for General, 40% for SC/ST in Class 12",
    entranceExams: ["CLAT (Common Law Admission Test)", "AILET (NLU Delhi)", "SLAT (Symbiosis)", "LSAT India"],
    admissionProcess: "Centralized CLAT seat allotment based on all-India ranking across 26 National Law Universities.",
    bestColleges: [
      "National Law School of India University (NLSIU), Bengaluru",
      "NALSAR University of Law, Hyderabad",
      "The West Bengal National University of Juridical Sciences (WBNUJS), Kolkata",
      "National Law University (NLU), Delhi",
      "Gujarat National Law University (GNLU), Gandhinagar"
    ],
    approxFees: "NLUs: ₹2,20,000 - ₹3,20,000/year (Includes tuition & hostel); State Law Colleges: ₹15,000 - ₹60,000/year.",
    careerOpportunities: ["Corporate Lawyer (M&A, IPR)", "Litigation Advocate in High Court/Supreme Court", "Judicial Magistrate", "In-house Legal Counsel", "Policy Specialist"],
    expectedSalary: {
      india: { entry: "₹12 - ₹18 LPA (Tier-1 Law Firms)", mid: "₹24 - ₹45 LPA", senior: "₹60 - ₹1.5 Cr+ LPA" },
      abroad: { entry: "£90,000 - £140,000/yr (UK Magic Circle)", mid: "£160,000 - £230,000/yr", senior: "£300,000 - £550,000+/yr" }
    },
    pros: ["Direct high-paying corporate starting offers for top NLU graduates", "Open to all school streams", "Prestige, intellectual challenge, and leadership"],
    cons: ["Demanding billing hours in tier-1 law firms", "Litigation takes 3-5 years of struggle before established practice"],
    futureGrowth: "High. Growth of corporate venture funding, IP disputes, cybersecurity laws, and fintech regulations."
  },
  {
    id: "bdes-product-design",
    name: "Bachelor of Design (B.Des in Product / Interaction Design)",
    category: "degree",
    domain: "design",
    badgeClass: "badge-peach",
    cardClass: "card-pastel-peach",
    duration: "4 Years (8 Semesters)",
    eligibility: "10+2 passed in ANY stream (Science, Commerce, or Arts)",
    requiredSubjects: ["Any Class 12 stream; creative drawing & visual aptitude"],
    minPercentage: "Passing marks in Class 12",
    entranceExams: ["UCEED (for IIT Bombay, Delhi, Guwahati, Jabalpur)", "NID DAT (National Institute of Design)", "NIFT", "SEAT"],
    admissionProcess: "UCEED / NID DAT Prelims followed by Studio Test / Portfolio Review and centralized counseling.",
    bestColleges: [
      "National Institute of Design (NID), Ahmedabad",
      "IDC School of Design, IIT Bombay",
      "Department of Design, IIT Delhi",
      "Srishti Manipal Institute of Art, Design & Tech, Bengaluru",
      "MIT Institute of Design, Pune"
    ],
    approxFees: "IITs / NID: ₹1.8L - ₹3L/year; Private Design Schools: ₹3.5L - ₹6L/year.",
    careerOpportunities: ["UX/UI Designer", "Industrial Product Designer", "Interaction Designer", "AR/VR Experience Designer", "Creative Director"],
    expectedSalary: {
      india: { entry: "₹7 - ₹15 LPA", mid: "₹18 - ₹32 LPA", senior: "₹38 - ₹75+ LPA" },
      abroad: { entry: "$80,000 - $110,000/yr", mid: "$125,000 - $175,000/yr", senior: "$200,000 - $300,000+/yr" }
    },
    pros: ["Portfolio-driven meritocracy where practical skills triumph over exam theory", "Immense global freelancing and remote work flexibility", "Direct creative fulfillment"],
    cons: ["Portfolio preparation requires dedicated studio practice", "Subjective evaluation criteria during admissions"],
    futureGrowth: "High. As AI automates code, human-centered taste and empathetic user interfaces become the primary product differentiators."
  },
  {
    id: "polytechnic-diploma-cs",
    name: "Polytechnic Diploma in Computer Engineering (Fast-Track / Lateral Entry)",
    category: "diploma",
    domain: "tech",
    badgeClass: "badge-blue",
    cardClass: "card-pastel-blue",
    duration: "3 Years (or 2 Years Lateral Entry after 12th Science / ITI)",
    eligibility: "Class 10 pass with 35% marks, or Class 12 with PCM for Direct 2nd Year Lateral Entry",
    requiredSubjects: ["Mathematics and Science in 10th / PCM in 12th"],
    minPercentage: "35% for 10th; 45% for 12th lateral",
    entranceExams: ["State Polytechnic Entrance Tests (JEECUP, POLYCET, JEXPO, MSBTE)"],
    admissionProcess: "State-level polytechnic counseling based on merit score or entrance ranking.",
    bestColleges: [
      "Government Polytechnic, Mumbai",
      "Government Polytechnic, Pune",
      "Pusa Polytechnic, Delhi",
      "Acharya Polytechnic, Bengaluru",
      "Sri Jayachamarajendra (SJP) Polytechnic, Bangalore"
    ],
    approxFees: "Govt Polytechnic: ₹8,000 - ₹20,000/year; Private: ₹35,000 - ₹70,000/year.",
    careerOpportunities: ["Junior Web Developer", "Network Support Technician", "Junior Software Tester", "Railway Junior Engineer (RRB JE)", "B.Tech Lateral Entry Student"],
    expectedSalary: {
      india: { entry: "₹2.8 - ₹4.5 LPA (Direct job) / Or leap into B.Tech 2nd year", mid: "₹6 - ₹12 LPA", senior: "₹15 - ₹30+ LPA (post-B.Tech)" },
      abroad: { entry: "$45,000 - $60,000/yr", mid: "$75,000 - $110,000/yr", senior: "$130,000+/yr" }
    },
    pros: ["Most cost-effective technical path", "Eligible for government Junior Engineer (JE) exams at age 19", "Seamless lateral entry into 2nd year B.Tech without JEE"],
    cons: ["Initial direct job packages are modest without continuing to B.Tech", "Limited campus recruitment by tier-1 MNCs without full degree"],
    futureGrowth: "High practical value for students prioritizing hands-on technical skills and cost efficiency."
  },
  {
    id: "nda-defence-course",
    name: "National Defence Academy (NDA) Commissioned Officer Cadet Program",
    category: "government",
    domain: "defence",
    badgeClass: "badge-yellow",
    cardClass: "card-pastel-yellow",
    duration: "3 Years at NDA Khadakwasla + 1 Year at IMA/AFA/INA",
    eligibility: "Unmarried male and female candidates; age 16.5 to 19.5 years",
    requiredSubjects: ["Army wing: Any 10+2 stream; Navy & Air Force wings: Physics and Mathematics compulsory"],
    minPercentage: "Passing 10+2 marks",
    entranceExams: ["UPSC NDA & NA Examination + 5-Day SSB Interview"],
    admissionProcess: "UPSC Written Exam (Maths 300 + GAT 600) → SSB Interview → Medical Board → Final All-India Merit List.",
    bestColleges: [
      "National Defence Academy (NDA), Khadakwasla, Pune (Joint tri-services academy awarding JNU B.A./B.Sc/B.Tech degree)"
    ],
    approxFees: "Zero Tuition Fees. The Government of India bears full boarding, lodging, uniform, and training costs + pays a monthly cadet stipend.",
    careerOpportunities: ["Lieutenant (Indian Army)", "Sub Lieutenant (Indian Navy)", "Flying Officer (Indian Air Force)"],
    expectedSalary: {
      india: { entry: "₹56,100 basic + MSP ₹15,500 + allowances (~₹1.1L - ₹1.4L/month in hand)", mid: "₹1.5L - ₹2.1L/month in hand", senior: "₹2.25L+/month + highest protocol perks" },
      abroad: { entry: "UN Mission posting allowances ($2,000 - $3,500/month additional)", mid: "Defense Attaché perks", senior: "Military Diplomatic missions" }
    },
    pros: ["Supreme national honor, pride, and adventure", "100% scholarship / state-funded elite physical and academic training", "Lifelong prestigious military lifestyle and family benefits"],
    cons: ["Demanding physical danger in active combat postings", "Stringent SSB interview pass rate (approx. 2-3%)"],
    futureGrowth: "Permanent and honorable. Central pillar of India's national sovereignty."
  }
];
