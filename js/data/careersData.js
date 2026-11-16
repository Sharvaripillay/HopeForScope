// HopeForScope - Comprehensive Career Database
window.CAREERS_DATA = [
  {
    id: "cybersecurity-engineer",
    title: "Cybersecurity Engineer & Ethical Hacker",
    category: "tech",
    scopeType: "emerging", // established | emerging | speculative
    badgeClass: "badge-blue",
    cardClass: "card-pastel-blue",
    icon: "shield-check",
    shortSummary: "Protect critical digital infrastructure, safeguard financial and healthcare networks, and counter sophisticated cyber threats.",
    overview: "Cybersecurity Engineers and Ethical Hackers design, simulate, and defend enterprise and government computer networks from malicious intrusions, ransomware, and state-sponsored cyber warfare. As digital banking, cloud storage, and AI systems proliferate, cybersecurity has become a national security imperative.",
    whatTheyDo: "They perform penetration testing, reverse-engineer malware, monitor network traffic for anomalies, build automated threat defense firewalls, conduct post-breach digital forensics, and ensure compliance with global data protection laws (e.g. GDPR, DPDP Act).",
    dailyResponsibilities: [
      "Conducting controlled ethical hacking (penetration tests) against company firewalls, web apps, and APIs",
      "Analyzing security telemetry logs using SIEM tools (Splunk, Microsoft Sentinel) to detect real-time intrusion attempts",
      "Patching zero-day software vulnerabilities before malicious actors exploit them",
      "Developing cryptographic protocols and secure identity access management policies",
      "Conducting security awareness simulations (phishing drills) for enterprise staff"
    ],
    workplaceEnvironment: "High-tech Security Operations Centers (SOC), enterprise cloud labs, defence/intelligence agencies, or flexible remote global work.",
    requiredQualifications: "B.Tech/B.E. in Computer Science / Information Security / Cyber Security, or BCA/B.Sc CS with recognized cybersecurity certifications, or Polytechnic Diploma in Computer Engineering with certified ethical hacking credentials.",
    requiredSkills: {
      technical: ["Network Protocols (TCP/IP, DNS, VPN)", "Linux & Shell Scripting", "Python / Bash / C++", "Ethical Hacking Tools (Wireshark, Metasploit, Burp Suite, Nmap)", "Cloud Security (AWS IAM, Azure Sentinel)", "Cryptography fundamentals"],
      soft: ["Analytical curiosity", "High ethical integrity", "Calm crisis management", "Clear technical incident reporting", "Continuous unlearning & relearning"]
    },
    subjectsToFocusOn: "Computer Science, Mathematics (Discrete Math & Modular Arithmetic), Physics, Information Practices.",
    degreeDiplomaOptions: [
      "B.Tech in Computer Science & Engineering (Cyber Security)",
      "B.Tech in Information Technology",
      "B.Sc in Cyber Security & Digital Forensics",
      "BCA with Cyber Security Specialization",
      "3-Year Polytechnic Diploma in Computer Engineering + CompTIA Security+"
    ],
    entranceExams: ["JEE Main & JEE Advanced", "BITSAT", "MHT-CET / COMEDK", "CUET-UG", "GATE (for M.Tech)"],
    eligibilityAndMarks: "Class 12 with PCM (Physics, Chemistry, Maths) with minimum 50% - 60% aggregate depending on college criteria. Non-math students can enter via BCA or certification routes at select universities.",
    collegeRecommendations: [
      "National Forensic Sciences University (NFSU), Gandhinagar / Delhi",
      "IIT Kanpur (C3i Cybersecurity Hub)",
      "IIT Madras (Pravartak Technologies)",
      "IIIT Hyderabad & IIIT Delhi",
      "BITS Pilani",
      "Carnegie Mellon University (USA)",
      "TU Munich (Germany)",
      "National University of Singapore (NUS)"
    ],
    certifications: [
      "CompTIA Security+ (Entry level standard)",
      "CEH (Certified Ethical Hacker - EC-Council)",
      "OSCP (Offensive Security Certified Professional - Elite hands-on benchmark)",
      "CISSP (Certified Information Systems Security Professional - Senior level)",
      "AWS / Azure Certified Security Specialist"
    ],
    internshipOpportunities: "Security Operations Centers (SOC), vulnerability bounty programs (HackerOne, Bugcrowd), CERT-In empanelled cyber firms, banking risk divisions (HDFC, ICICI, Barclays), Big 4 cyber consulting (Deloitte, PwC, EY, KPMG).",
    salaryRanges: {
      india: {
        entry: "₹4.5 - ₹8.5 LPA",
        mid: "₹12 - ₹24 LPA",
        senior: "₹30 - ₹65+ LPA (Chief Information Security Officer: ₹80L - ₹1.5 Cr+)"
      },
      abroad: {
        entry: "$75,000 - $95,000 / year",
        mid: "$110,000 - $160,000 / year",
        senior: "$180,000 - $260,000+ / year"
      }
    },
    careerGrowth: "Junior SOC Analyst → Penetration Tester / Incident Responder → Senior Cyber Security Architect → Head of Cyber Defense → Chief Information Security Officer (CISO).",
    futureDemand: "Extremely high (Zero-unemployment field). Over 3.5 million unfilled cybersecurity roles globally according to (ISC)².",
    pros: [
      "Tremendous job security and zero vulnerability to automation",
      "Lucrative global remote consulting and bug bounty income",
      "Deeply intellectual, intellectually thrilling work solving puzzles and outsmarting adversaries"
    ],
    cons: [
      "High-stress on-call incident response when breaches occur",
      "Continuous pressure to keep pace with evolving attacker techniques and zero-day threats",
      "Legal and compliance liabilities"
    ],
    challengesAndRisks: "Burnout during major ransomware attacks; rigorous continuous certification maintenance requirements.",
    alternativePaths: "Cloud Architect, Network Administrator, DevSecOps Engineer, Digital Forensics Investigator, IT Auditor.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build strong logic in Mathematics and explore introductory Python programming or Linux." },
      { step: 2, title: "Class 11 & 12 (Science PCM)", desc: "Focus on PCM and Computer Science. Learn networking fundamentals (OSI model, IP addressing)." },
      { step: 3, title: "Entrance Exams", desc: "Appear for JEE Main, state CETs, or NFSU entrance exam." },
      { step: 4, title: "Undergraduate Degree", desc: "Pursue B.Tech CSE (Cyber Security) or BCA/B.Sc Cyber Security." },
      { step: 5, title: "Certifications & CTFs", desc: "Earn CompTIA Security+ or CEH; actively compete in Capture The Flag (CTF) contests." },
      { step: 6, title: "Internship & Bug Bounties", desc: "Work as SOC Analyst Intern or submit responsible vulnerability reports on HackerOne." },
      { step: 7, title: "First Full-time Role", desc: "Join as Security Engineer / Penetration Tester at ₹6-10 LPA." },
      { step: 8, title: "Specialization & Leadership", desc: "Progress to Cloud Security Architect or CISO commanding ₹35-80+ LPA." }
    ]
  },
  {
    id: "artificial-intelligence-engineer",
    title: "Artificial Intelligence & Machine Learning Engineer",
    category: "tech",
    scopeType: "emerging",
    badgeClass: "badge-lavender",
    cardClass: "card-pastel-lavender",
    icon: "cpu",
    shortSummary: "Build intelligent algorithms, large language models, computer vision systems, and autonomous generative platforms.",
    overview: "AI & ML Engineers develop predictive neural networks, generative AI models, natural language processing pipelines, and autonomous decision systems that transform healthcare, robotics, finance, and everyday human productivity.",
    whatTheyDo: "They train deep neural networks on petabytes of data, fine-tune foundation models, deploy model inference microservices at scale, optimize neural weights for edge devices, and conduct safety alignment against hallucinations.",
    dailyResponsibilities: [
      "Designing mathematical loss functions and training deep learning architectures (Transformers, CNNs, Diffusion models)",
      "Cleaning, annotating, and vectorizing multi-modal datasets",
      "Deploying model endpoints using PyTorch, TensorFlow, Triton, and Docker",
      "Benchmarking model latency, accuracy, and algorithmic fairness",
      "Collaborating with product teams to integrate AI capabilities into end-user applications"
    ],
    workplaceEnvironment: "AI research laboratories, technology product companies, autonomous vehicle labs, fintech algorithmic desks, or remote setups.",
    requiredQualifications: "B.Tech/B.E. in Computer Science / AI & Data Science / Mathematics & Computing, or B.Sc in Statistics/Data Science followed by M.Tech/M.S. in Artificial Intelligence.",
    requiredSkills: {
      technical: ["Linear Algebra & Multivariable Calculus", "Probability & Bayesian Statistics", "Python, C++, CUDA", "PyTorch, Hugging Face, LangChain, vLLM", "Vector Databases (Pinecone, Milvus)", "MLOps (MLflow, Kubernetes)"],
      soft: ["Hypothesis-driven experimentation", "Scientific patience", "Systemic problem framing", "Ethical discernment regarding AI impact"]
    },
    subjectsToFocusOn: "Mathematics (Matrices, Vectors, Calculus, Probability), Physics, Computer Science.",
    degreeDiplomaOptions: [
      "B.Tech in Artificial Intelligence and Machine Learning",
      "B.Tech in Computer Science & Engineering",
      "B.Tech in Mathematics and Computing",
      "B.Sc (Hons) in Data Science & Artificial Intelligence (IIT Madras Online BS degree)",
      "M.Tech / M.S. in Machine Learning"
    ],
    entranceExams: ["JEE Main & JEE Advanced", "BITSAT", "UGEE (IIIT Hyderabad)", "CUET-UG", "GATE CS/DA (Data Science & AI)"],
    eligibilityAndMarks: "Class 12 with PCM, minimum 60% aggregate. High proficiency in mathematics is strongly recommended.",
    collegeRecommendations: [
      "IIT Bombay, IIT Delhi, IIT Madras",
      "IIIT Hyderabad (Kohli Centre on Intelligent Systems)",
      "Indian Institute of Science (IISc), Bengaluru",
      "Stanford University (USA)",
      "University of Cambridge (UK)",
      "ETH Zurich (Switzerland)"
    ],
    certifications: [
      "DeepLearning.AI Machine Learning Specialization (Andrew Ng)",
      "TensorFlow Developer Certificate / PyTorch Deep Learning Associate",
      "AWS Certified Machine Learning - Specialty",
      "Google Cloud Professional Machine Learning Engineer"
    ],
    internshipOpportunities: "Research internships at IISc, IIT labs, Microsoft Research India, Google DeepMind, Fractal Analytics, Adobe MDSR, and high-growth AI startups.",
    salaryRanges: {
      india: {
        entry: "₹8 - ₹16 LPA",
        mid: "₹20 - ₹42 LPA",
        senior: "₹50 - ₹1.2 Cr+ LPA"
      },
      abroad: {
        entry: "$110,000 - $145,000 / year",
        mid: "$165,000 - $230,000 / year",
        senior: "$270,000 - $450,000+ / year"
      }
    },
    careerGrowth: "Junior ML Engineer → Senior Machine Learning Scientist → Lead AI Architect → Head of AI / VP of Technology.",
    futureDemand: "Hyper-growth. The global AI market is projected to exceed $1.3 Trillion by 2030.",
    pros: [
      "At the forefront of human technological transformation",
      "Exceptional compensation packages and global visa sponsorship availability",
      "High intellectual stimulation and creative freedom"
    ],
    cons: [
      "Requires rigorous mathematical discipline and research rigor",
      "Models can be unpredictable and computationally costly to train",
      "Rapid obsolescence of specific tooling requires lifelong active study"
    ],
    challengesAndRisks: "Compute resource bottlenecks; ethical questions around bias, alignment, and copyright.",
    alternativePaths: "Data Scientist, Data Engineer, Quantitative Researcher, Research Scientist, Software Engineer.",
    roadmap: [
      { step: 1, title: "Class 10", desc: "Build firm intuition in algebraic graphs, statistics, and basic Python coding." },
      { step: 2, title: "Class 11 & 12 (Science PCM)", desc: "Master Calculus, Matrices, Permutations & Probability. Learn NumPy & Pandas." },
      { step: 3, title: "Entrance Exams", desc: "Aim for top IITs/IIITs via JEE Main, JEE Advanced, or IIIT-H UGEE." },
      { step: 4, title: "UG Degree (B.Tech CSE/AI)", desc: "Build machine learning models, publish Kaggle notebooks, participate in hackathons." },
      { step: 5, title: "Research & Open Source", desc: "Contribute to open-source AI repos, train custom models, seek research internships." },
      { step: 6, title: "First Full-time Role", desc: "Join as AI/ML Engineer at ₹10-18 LPA." },
      { step: 7, title: "Senior Leadership / M.S.", desc: "Lead enterprise generative AI systems or pursue advanced MS/PhD at elite global labs." }
    ]
  },
  {
    id: "software-engineer",
    title: "Software Development Engineer (SDE)",
    category: "tech",
    scopeType: "established",
    badgeClass: "badge-blue",
    cardClass: "card-pastel-blue",
    icon: "code",
    shortSummary: "Architect, build, and maintain the software platforms, mobile applications, and web services that power modern civilization.",
    overview: "Software Engineers solve complex human problems through high-performance code. From mobile apps used by billions to massive cloud operating systems and enterprise ERPs, software developers design the logical fabric of digital life.",
    whatTheyDo: "They write scalable backend APIs, design interactive web frontends, build microservices, optimize database queries, write automated test suites, and manage continuous deployment pipelines.",
    dailyResponsibilities: [
      "Writing clean, modular code in Java, Python, Go, C#, or TypeScript",
      "Reviewing pull requests and collaborating in agile sprint standups",
      "Architecting resilient cloud microservices on AWS/GCP/Azure",
      "Debugging performance bottlenecks and memory leaks",
      "Designing relational and NoSQL database schemas"
    ],
    workplaceEnvironment: "Tech giants (Google, Microsoft, Amazon), SaaS startups, financial institutions, or 100% remote global teams.",
    requiredQualifications: "B.Tech/B.E. in Computer Science / IT / Electronics, or BCA followed by MCA, or B.Sc Computer Science, or self-taught developers with proven GitHub portfolios.",
    requiredSkills: {
      technical: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Web Development (React, Node.js, Spring Boot, Django)", "Databases (PostgreSQL, Redis, MongoDB)", "Git, Docker, CI/CD pipelines"],
      soft: ["Logical clarity", "Team collaboration", "Effective code documentation", "Product-first mindset"]
    },
    subjectsToFocusOn: "Mathematics, Computer Science, English.",
    degreeDiplomaOptions: [
      "B.Tech / B.E. in Computer Science & Engineering",
      "BCA (Bachelor of Computer Applications) -> MCA",
      "B.Sc in Computer Science / Software Engineering",
      "3-Year Polytechnic Diploma in Computer Engineering (Lateral entry to B.Tech)"
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "State CETs (MHT-CET, WBJEE, KCET)", "NIMCET (for MCA)"],
    eligibilityAndMarks: "Class 12 with PCM (minimum 50-60%). For BCA, many universities accept students from any stream who studied basic mathematics.",
    collegeRecommendations: [
      "IITs (Bombay, Delhi, Madras, Kharagpur)",
      "NIT Trichy, Surathkal, Warangal",
      "BITS Pilani",
      "IIIT Hyderabad & Bangalore",
      "VIT Vellore",
      "UC Berkeley (USA), University of Waterloo (Canada), TU Delft (Netherlands)"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Oracle Certified Professional Java Developer",
      "Meta Front-End / Back-End Professional Certificate",
      "CKA (Certified Kubernetes Administrator)"
    ],
    internshipOpportunities: "Software engineering internships at tech MNCs, Y-Combinator startups, Google Summer of Code (GSoC), open-source fellowships.",
    salaryRanges: {
      india: {
        entry: "₹5 - ₹18 LPA (Product MNCs: ₹18 - ₹35 LPA)",
        mid: "₹18 - ₹38 LPA",
        senior: "₹40 - ₹90+ LPA"
      },
      abroad: {
        entry: "$85,000 - $130,000 / year",
        mid: "$130,000 - $190,000 / year",
        senior: "$210,000 - $350,000+ / year"
      }
    },
    careerGrowth: "Software Engineer I → SDE II → Senior Software Engineer → Staff / Principal Engineer → Engineering Manager / VP of Engineering.",
    futureDemand: "Consistent high demand. Software forms the infrastructure for all other modern industries.",
    pros: [
      "Highest volume of high-paying jobs in the private sector",
      "Unmatched global mobility and remote work flexibility",
      "Merit-based industry where demonstrated portfolio and skills beat college pedigree"
    ],
    cons: [
      "Screen fatigue and long hours during project launch deadlines",
      "Rapidly changing tech stacks requiring constant upskilling",
      "Competitive technical coding interviews (LeetCode grinding)"
    ],
    challengesAndRisks: "Sedentary lifestyle; balancing rapid AI-assisted development tools.",
    alternativePaths: "Product Manager, Solutions Architect, Technical Lead, QA Automation Engineer, DevOps Specialist.",
    roadmap: [
      { step: 1, title: "Class 10", desc: "Build fundamental math logic, algorithmic thinking, and try basic coding in Python or JavaScript." },
      { step: 2, title: "Class 11 & 12", desc: "Focus on PCM and Computer Science. Learn OOP concepts and basic Data Structures." },
      { step: 3, title: "Degree Program", desc: "Enroll in B.Tech CSE or BCA. Master Data Structures & Algorithms (DSA)." },
      { step: 4, title: "Projects & Git", desc: "Build 3-4 full-stack projects and publish clean code to GitHub." },
      { step: 5, title: "Competitive Programming & Internships", desc: "Crack summer internships at tech startups or mid-market firms." },
      { step: 6, title: "Campus / Off-Campus Placement", desc: "Join as SDE-1 at ₹6-20+ LPA." },
      { step: 7, title: "Career Progression", desc: "Advance to Senior SDE (₹25-45 LPA) or transition into Tech Lead / Engineering Manager." }
    ]
  },
  {
    id: "doctor-mbbs",
    title: "Doctor (MBBS & Medical Specialist)",
    category: "medical",
    scopeType: "established",
    badgeClass: "badge-green",
    cardClass: "card-pastel-green",
    icon: "stethoscope",
    shortSummary: "Diagnose, treat, and heal human illness through clinical expertise, surgeries, and compassionate healthcare leadership.",
    overview: "Medical Doctors stand at the frontline of human life. From general diagnosis and critical emergency resuscitation to complex neurosurgery, oncology, and public health eradication of epidemics, medicine remains one of the most noble, respected, and resilient professions in human society.",
    whatTheyDo: "They examine patients, interpret diagnostic lab tests and medical imaging (MRIs, CT scans), perform medical interventions and surgical operations, prescribe treatment regimens, and counsel families.",
    dailyResponsibilities: [
      "Conducting patient outpatient (OPD) rounds and hospital inpatient ward visits",
      "Diagnosing acute and chronic conditions using clinical examination and diagnostics",
      "Performing or assisting in surgical procedures in sterile operating theaters",
      "Managing emergency trauma cases and intensive care (ICU) resuscitations",
      "Continuing medical education (CME) on newly approved pharmaceuticals and protocols"
    ],
    workplaceEnvironment: "Government and private tertiary-care hospitals, community health clinics, medical college institutions, or independent private clinical practices.",
    requiredQualifications: "MBBS (Bachelor of Medicine and Bachelor of Surgery - 5.5 years including 1-year compulsory rotatory internship) followed by MD/MS/DNB (3 years postgraduate specialization).",
    requiredSkills: {
      technical: ["Clinical Examination & Differential Diagnosis", "Surgical Skills & Aseptic Protocols", "Pharmacology & Drug Interactions", "Emergency Triage & Life Support (BLS/ACLS)", "Medical Imaging Interpretation"],
      soft: ["Deep empathy & bedside manner", "Emotional resilience under immense pressure", "Sharp observational focus", "Ethical dedication to patient welfare"]
    },
    subjectsToFocusOn: "Biology (Human Physiology, Genetics, Microbiology), Chemistry (Organic & Biochemistry), Physics (Biophysics).",
    degreeDiplomaOptions: [
      "MBBS (Primary medical degree)",
      "BDS (Bachelor of Dental Surgery)",
      "BAMS / BHMS (Ayurvedic / Homeopathic Medicine)",
      "B.Sc Nursing / BPT (Physiotherapy) as allied medical pathways"
    ],
    entranceExams: ["NEET-UG (Mandatory entrance exam across all Indian medical colleges)", "NEET-PG / INI-CET / NExT (for MD/MS seats)", "USMLE (for USA residency)", "PLAB / UKMLA (for UK NHS)"],
    eligibilityAndMarks: "Class 12 with PCB (Physics, Chemistry, Biology) and English with minimum 50% aggregate (40% for reserved categories). Minimum age 17 years.",
    collegeRecommendations: [
      "AIIMS New Delhi & other AIIMS (Bhopal, Rishikesh, Bhubaneswar)",
      "Christian Medical College (CMC), Vellore",
      "Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      "Armed Forces Medical College (AFMC), Pune",
      "King George's Medical University (KGMU), Lucknow",
      "Harvard Medical School (USA), Oxford Medical School (UK)"
    ],
    certifications: [
      "State Medical Council / National Medical Commission (NMC) Registration",
      "ACLS / BLS (Advanced Cardiac Life Support)",
      "MRCP / MRCS (Royal Colleges of Physicians / Surgeons, UK)"
    ],
    internshipOpportunities: "1-year mandatory rotating clinical internship covering Internal Medicine, Surgery, Obstetrics & Gynaecology, Pediatrics, Community Medicine, and Casualty.",
    salaryRanges: {
      india: {
        entry: "₹7 - ₹12 LPA (Junior Resident Doctor during PG)",
        mid: "₹15 - ₹30 LPA (Senior Resident / Consultant Specialist)",
        senior: "₹35 - ₹1 Cr+ LPA (Established Super-specialist Surgeon / Private Clinic Owner)"
      },
      abroad: {
        entry: "$65,000 - $80,000 / year (Resident Doctor in US)",
        mid: "$220,000 - $350,000 / year (Licensed Attending Physician)",
        senior: "$400,000 - $800,000+ / year (Specialist Surgeon / Cardiologist in US)"
      }
    },
    careerGrowth: "Medical Student → Intern → Medical Officer (MO) → Junior Resident (PG MD/MS) → Senior Resident → Assistant Professor / Consultant → Chief Medical Officer / Department Head.",
    futureDemand: "Extremely high and permanent. WHO reports substantial global doctor shortages, especially in rural and developing regions.",
    pros: [
      "Unmatched societal respect and deeply meaningful patient healing",
      "100% recession-proof; lifelong career security",
      "High global demand with recognized medical licensing reciprocity pathways"
    ],
    cons: [
      "Extremely long education journey (8-10 years to full independent specialist practice)",
      "Fierce competition in NEET-UG (over 24 lakh applicants for ~1 lakh MBBS seats)",
      "Physically demanding shifts (24-36 hour emergency calls during residency) and high stress"
    ],
    challengesAndRisks: "Emotional toll of losing patients; delayed financial gratification compared to peers entering IT/finance at age 22.",
    alternativePaths: "Biomedical Scientist, Healthcare Administrator (MHA), Clinical Research Director, Public Health Specialist (MPH), Medical Advisor to pharma.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build thorough fundamentals in Biology, Chemistry, and scientific reading." },
      { step: 2, title: "Class 11 & 12 (PCB)", desc: "Master NCERT line-by-line in Biology and Chemistry; solve extensive NEET numericals." },
      { step: 3, title: "Crack NEET-UG", desc: "Achieve a qualifying rank to secure a government or private medical college seat." },
      { step: 4, title: "MBBS Degree (4.5 Years)", desc: "Master Pre-clinical, Para-clinical, and Clinical disciplines (Anatomy, Pathology, Medicine, Surgery)." },
      { step: 5, title: "Rotatory Internship (1 Year)", desc: "Hands-on emergency patient management and clinical rotations." },
      { step: 6, title: "NEET-PG / NExT Examination", desc: "Secure an MD (Medicine/Pediatrics/Radio) or MS (General Surgery/Orthopedics) seat." },
      { step: 7, title: "Specialist Consultant", desc: "Join hospital as Consultant or establish a private clinic earning ₹20-50+ LPA." }
    ]
  },
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA - ICAI)",
    category: "commerce",
    scopeType: "established",
    badgeClass: "badge-peach",
    cardClass: "card-pastel-peach",
    icon: "calculator",
    shortSummary: "The statutory financial authority in India: Auditing corporate accounts, tax strategy, M&A advisory, and corporate financial governance.",
    overview: "Chartered Accountants are the custodians of financial integrity and economic compliance. In India, only a qualified CA holding a certificate of practice can legally sign audit reports for companies, banks, and institutions. CAs are indispensable in capital markets, tax planning, and corporate strategy.",
    whatTheyDo: "They conduct statutory and forensic financial audits, design direct and indirect tax strategies (Income Tax & GST), structure corporate mergers and acquisitions (M&A), manage debt financing, and ensure accounting standard compliance.",
    dailyResponsibilities: [
      "Auditing corporate balance sheets, profit & loss accounts, and cash flow disclosures",
      "Calculating tax liabilities and representing clients before the Income Tax Appellate Tribunal",
      "Advising executive management on cost reduction, budgeting, and investment allocation",
      "Performing forensic audits to uncover financial fraud or corporate irregularities",
      "Structuring cross-border transactions and international transfer pricing models"
    ],
    workplaceEnvironment: "Big 4 accounting firms (Deloitte, PwC, EY, KPMG), private equity funds, corporate headquarters, or independent CA practice firms.",
    requiredQualifications: "Qualification through the Institute of Chartered Accountants of India (ICAI): 3 stages (CA Foundation → CA Intermediate → CA Final) + 2 years mandatory Articleship training.",
    requiredSkills: {
      technical: ["Financial Reporting (Ind AS / IFRS)", "Advanced Auditing & Assurance", "Direct & Indirect Tax Laws (GST & Corporate Tax)", "Corporate & Economic Laws", "Financial Modeling & Valuation"],
      soft: ["Meticulous attention to detail", "High ethical steadfastness", "Analytical problem solving", "Client negotiation & communication"]
    },
    subjectsToFocusOn: "Accountancy, Mathematics / Applied Mathematics, Economics, Business Studies.",
    degreeDiplomaOptions: [
      "CA Qualification (Chartered Accountant - ICAI) directly after 12th",
      "B.Com (Hons) + CA (simultaneous track followed by many students)",
      "BBA in Finance / Corporate Accounting",
      "CMA (Cost and Management Accountant - ICMAI)",
      "CS (Company Secretary - ICSI)"
    ],
    entranceExams: ["CA Foundation Exam (conducted twice a year by ICAI)", "Direct entry to CA Intermediate for graduates with 55%+ (commerce) or 60%+ (others)"],
    eligibilityAndMarks: "Class 12 in any stream (Commerce, Science, or Arts) with registration with ICAI. No minimum cutoff marks required to register for CA Foundation, but disciplined aptitude is vital.",
    collegeRecommendations: [
      "The Institute of Chartered Accountants of India (ICAI) is the sole statutory awarding body",
      "Simultaneous top colleges for B.Com (Hons): Shri Ram College of Commerce (SRCC), Lady Shri Ram College (LSR), St. Xavier's Kolkata, Loyola College Chennai, Narsee Monjee (NMIMS)"
    ],
    certifications: [
      "Chartered Financial Analyst (CFA USA - high synergy with CA)",
      "Certified Information Systems Auditor (CISA)",
      "Diploma in International Financial Reporting (DipIFR - ACCA UK)"
    ],
    internshipOpportunities: "2-year mandatory Articleship under a practicing CA firm or Big 4 accounting firm with real-world audit exposure.",
    salaryRanges: {
      india: {
        entry: "₹8 - ₹14 LPA (Campus placements; rank holders ₹20 - ₹28 LPA)",
        mid: "₹18 - ₹35 LPA",
        senior: "₹45 - ₹1 Cr+ LPA (Big 4 Partner / Corporate CFO: ₹1.5 - ₹3 Cr+)"
      },
      abroad: {
        entry: "$60,000 - $80,000 / year (Middle East / UK with ICAI MoUs)",
        mid: "$95,000 - $140,000 / year",
        senior: "$160,000 - $240,000+ / year"
      }
    },
    careerGrowth: "Articleship Trainee → Qualified CA / Audit Associate → Assistant Manager → Senior Manager → Partner (in CA firm) or Chief Financial Officer (CFO in MNC).",
    futureDemand: "Extremely high and steady. With India's growing corporate ecosystem, startups, and stricter GST and corporate compliance, CAs are permanently required.",
    pros: [
      "Extremely cost-effective education (total ICAI registration is under ₹1 Lakh)",
      "Highest prestige and legal statutory signing authority in Indian commerce",
      "Complete freedom to start an independent private practice or join multinational corporations"
    ],
    cons: [
      "Very low passing percentage historically (typically 10-15% clearance in CA Final)",
      "Demanding multi-year preparation requiring immense self-discipline without a college campus structure",
      "Peak season work pressure during financial year-end and tax filing deadlines (July to October)"
    ],
    challengesAndRisks: "Mental fatigue from multiple exam attempts if not cleared systematically; intense articleship workload.",
    alternativePaths: "CFA, Management Consultant, Investment Banker, Financial Controller, Tax Consultant, Internal Auditor.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Choose Commerce with Mathematics or Commerce without Mathematics." },
      { step: 2, title: "Class 11 & 12", desc: "Build solid grounding in Accountancy, Taxation concepts, and Economics." },
      { step: 3, title: "Register for CA Foundation", desc: "Register with ICAI 4 months before exam; appear right after Class 12." },
      { step: 4, title: "Clear CA Foundation", desc: "Pass 4 papers: Accounting, Business Laws, Quantitative Aptitude, Business Economics." },
      { step: 5, title: "CA Intermediate & Articleship", desc: "Clear both groups of CA Inter and commence 2 years of practical Articleship training." },
      { step: 6, title: "Clear CA Final", desc: "Pass advanced papers in Financial Reporting, Strategic Financial Management, and Taxation." },
      { step: 7, title: "Join Big 4 or Corporate", desc: "Participate in ICAI campus placements securing ₹9-25 LPA starting compensation." }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist & Analytics Architect",
    category: "tech",
    scopeType: "emerging",
    badgeClass: "badge-blue",
    cardClass: "card-pastel-blue",
    icon: "bar-chart-2",
    shortSummary: "Extract actionable business insights, predictive patterns, and mathematical models from massive complex data reservoirs.",
    overview: "Data Scientists combine computer science, mathematics, and business strategy to uncover hidden signals in big data. From recommending products and predicting disease outbreaks to optimizing global supply chains, data scientists turn raw telemetry into transformative organizational value.",
    whatTheyDo: "They formulate hypotheses, scrape and clean unstructured data, build predictive regression and classification models, design A/B experiments, and present visual dashboards to executive leaders.",
    dailyResponsibilities: [
      "Wrangling and transforming large datasets using SQL, PySpark, and Pandas",
      "Building statistical machine learning models (XGBoost, Random Forests, LightGBM)",
      "Formulating metrics and conducting hypothesis testing (A/B testing)",
      "Building interactive business intelligence dashboards using Tableau / PowerBI",
      "Translating complex mathematical findings into strategic executive decisions"
    ],
    workplaceEnvironment: "E-commerce giants, fintech banks, healthcare research centers, logistics networks, or hybrid consulting.",
    requiredQualifications: "B.Tech in Computer Science / Data Science, or B.Sc in Statistics/Mathematics/Economics followed by M.Sc in Data Science / Business Analytics.",
    requiredSkills: {
      technical: ["Python / R", "Advanced SQL", "Statistics & Probability", "Machine Learning Algorithms", "Data Visualization (Seaborn, Tableau)", "Big Data tools (Spark, Hive)"],
      soft: ["Business storytelling", "Analytical skepticism", "Cross-functional communication", "Problem-structuring ability"]
    },
    subjectsToFocusOn: "Mathematics (Statistics, Probability, Linear Algebra), Computer Science, Economics.",
    degreeDiplomaOptions: [
      "B.Tech in Data Science & Artificial Intelligence",
      "B.Sc in Statistics / Applied Mathematics",
      "IIT Madras Online BS in Data Science and Applications",
      "B.A. (Hons) in Economics (with quantitative focus) -> M.Sc Data Science"
    ],
    entranceExams: ["JEE Main", "CUET-UG (for top B.Sc Statistics at ISI Kolkata, Delhi University)", "ISI Admission Test", "GATE (DA paper)"],
    eligibilityAndMarks: "Class 12 with Mathematics is almost universally required. Minimum 50-60% marks.",
    collegeRecommendations: [
      "Indian Statistical Institute (ISI), Kolkata / Delhi (Premier Institute)",
      "Chennai Mathematical Institute (CMI)",
      "IIT Kharagpur, IIT Bombay, IIT Madras",
      "Delhi University (St. Stephen's, Hindu College - B.Sc Stats)",
      "MIT (USA), University of Toronto (Canada), NUS (Singapore)"
    ],
    certifications: [
      "IBM Data Science Professional Certificate",
      "Google Advanced Data Analytics Certificate",
      "Microsoft Certified: Azure Data Scientist Associate",
      "AWS Certified Data Analytics"
    ],
    internshipOpportunities: "Analytics internships at banks (Morgan Stanley, JP Morgan), consumer tech (Flipkart, Swiggy, Amazon), analytics firms (Mu Sigma, Fractal, Tiger Analytics).",
    salaryRanges: {
      india: {
        entry: "₹6.5 - ₹12 LPA",
        mid: "₹16 - ₹32 LPA",
        senior: "₹38 - ₹75+ LPA"
      },
      abroad: {
        entry: "$85,000 - $115,000 / year",
        mid: "$130,000 - $185,000 / year",
        senior: "$210,000 - $320,000+ / year"
      }
    },
    careerGrowth: "Junior Data Analyst → Data Scientist → Senior Lead Data Scientist → Director of Data Analytics → Chief Data Officer (CDO).",
    futureDemand: "High. Over 11.5 million data science job openings projected globally by 2026 according to US Bureau of Labor Statistics.",
    pros: [
      "High compensation across virtually every sector (health, retail, sports, banking)",
      "Combines intellectual mathematics with direct business influence",
      "Highly adaptable to remote and international freelancing"
    ],
    cons: [
      "Data wrangling and cleaning can take up to 70% of day-to-day project time",
      "Bridging the communication gap between pure math and business executives can be challenging"
    ],
    challengesAndRisks: "Managing noisy or incomplete real-world data; keeping up with evolving deep learning frameworks.",
    alternativePaths: "Business Analyst, Machine Learning Engineer, Quantitative Analyst, Marketing Analytics Manager.",
    roadmap: [
      { step: 1, title: "Class 10", desc: "Build intuition for statistics, averages, distributions, and computer spreadsheets." },
      { step: 2, title: "Class 11 & 12", desc: "Focus on Mathematics (Calculus & Statistics) in Science or Commerce stream." },
      { step: 3, title: "Undergraduate Degree", desc: "Pursue B.Tech CSE/Data Science or B.Sc Statistics at ISI / DU." },
      { step: 4, title: "Data Wrangling & Kaggle", desc: "Master SQL, Python, and participate in Kaggle predictive competitions." },
      { step: 5, title: "Internship", desc: "Analyze real company data as a Data Analytics intern." },
      { step: 6, title: "Full-Time Career", desc: "Join as Associate Data Scientist at ₹8-14 LPA." }
    ]
  },
  {
    id: "civil-services-ias",
    title: "Civil Servant (IAS / IPS / IFS via UPSC)",
    category: "govt",
    scopeType: "established",
    badgeClass: "badge-yellow",
    cardClass: "card-pastel-yellow",
    icon: "award",
    shortSummary: "Drive public policy, district administration, national law enforcement, diplomacy, and societal development in India.",
    overview: "The Indian Civil Services (IAS, IPS, IFS, IRS) form the administrative steel frame of the nation. Civil servants manage districts with millions of citizens, direct welfare schemes, preserve public order, formulate national policies, and represent India on the international diplomatic stage.",
    whatTheyDo: "District Magistrates (IAS) oversee public infrastructure, health, education, and disaster relief. Police chiefs (IPS) safeguard internal security and crime prevention. Diplomats (IFS) execute foreign policy and negotiate treaties abroad.",
    dailyResponsibilities: [
      "Reviewing district developmental schemes, land revenue records, and welfare disbursements",
      "Chairing law & order coordination meetings during festivals, elections, or natural disasters",
      "Inspecting government schools, hospitals, roads, and municipal offices",
      "Drafting policy briefs for state and central cabinet ministers",
      "Resolving public grievances and interacting with citizens during public hearings"
    ],
    workplaceEnvironment: "District Collectorates, State Secretariats, Central Ministries in New Delhi, or Indian Embassies abroad.",
    requiredQualifications: "Graduation degree (Bachelor's degree in any discipline: B.A., B.Sc, B.Com, B.Tech, MBBS, LLB) from a recognized university.",
    requiredSkills: {
      technical: ["Indian Constitutional Law & Governance", "Macroeconomics & Public Finance", "Indian & World History, Geography, International Relations", "Analytical essay writing & articulation"],
      soft: ["Incorruptible integrity", "Empathy for underprivileged sections", "Calm leadership in crises", "Balanced administrative judgment"]
    },
    subjectsToFocusOn: "Current Affairs, Political Science, History, Economics, Ethics, Geography.",
    degreeDiplomaOptions: [
      "Any Bachelor's Degree: B.A. (Hons) in Political Science / History / Economics (highly synergistic)",
      "B.Tech / B.E. (many engineers successfully clear UPSC)",
      "B.Com / BBA / B.Sc / MBBS / Law (BA LLB)"
    ],
    entranceExams: ["UPSC Civil Services Examination (CSE - Prelims, Mains, and Personality Interview Test)", "State Public Service Commission (State PSC) exams"],
    eligibilityAndMarks: "Age: 21 to 32 years (relaxations for OBC/SC/ST). Minimum qualification: Any Bachelor's degree (pass marks sufficient). Maximum attempts: 6 (General), 9 (OBC), Unlimited up to age limit (SC/ST).",
    collegeRecommendations: [
      "Any recognized university qualifies. Premier breeding grounds include Delhi University (Hindu, St. Stephen's, Miranda House), JNU, IITs, NLUs, and state universities."
    ],
    certifications: [
      "Foundation Course at Lal Bahadur Shastri National Academy of Administration (LBSNAA), Mussoorie"
    ],
    internshipOpportunities: "NITI Aayog Young Professionals / Internships, Ministry of External Affairs internships, PRS Legislative Research Fellowships.",
    salaryRanges: {
      india: {
        entry: "₹56,100/month basic pay (7th Pay Commission Pay Level 10) + DA, HRA, Official Residence, Vehicle, Security (~₹85,000 - ₹1,10,000 in hand)",
        mid: "₹1,00,000 - ₹1,40,000/month basic (Joint Secretary: Level 14)",
        senior: "₹2,25,000 - ₹2,50,000/month (Cabinet Secretary of India / Chief Secretary of State - Level 18 with supreme executive perks)"
      },
      abroad: {
        entry: "IFS Officers receive foreign allowance ($3,000 - $6,000/month) based on country posting index",
        mid: "Ambassador / High Commissioner perks",
        senior: "UN Permanent Representative perks"
      }
    },
    careerGrowth: "Assistant Collector (Training) → Sub-Divisional Magistrate (SDM) → District Magistrate (DM) / Collector → Divisional Commissioner → Joint Secretary → Cabinet Secretary.",
    futureDemand: "Constant. The administrative governance of India requires dedicated civil leadership irrespective of technological changes.",
    pros: [
      "Unrivaled direct power to transform lives and implement policy for millions of citizens",
      "Supreme social respect, job security, constitutional protection, and official perks",
      "Tremendous diversity of work across departments (Finance, Health, Defense, Education)"
    ],
    cons: [
      "Extremely low selection ratio (approx. 1,000 selections out of 10-12 lakh applicants: ~0.1% success rate)",
      "Requires 2 to 4 years of rigorous full-time preparation with uncertainty of outcome",
      "Political pressure and frequent bureaucratic transfers between districts"
    ],
    challengesAndRisks: "High exam stress; having a solid Plan B (corporate, state PSC, or academia) is essential.",
    alternativePaths: "State Civil Services (PCS), RBI Grade B Officer, Think Tank Policy Director, United Nations Analyst, Corporate Public Affairs Officer.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build disciplined reading habits with quality national daily newspapers (The Hindu, Indian Express)." },
      { step: 2, title: "Class 11 & 12", desc: "Choose Arts/Humanities or any preferred stream; maintain strong general knowledge." },
      { step: 3, title: "Undergraduate Degree", desc: "Complete any Bachelor's degree (B.A., B.Tech, B.Com). Begin NCERT-based syllabus coverage." },
      { step: 4, title: "UPSC CSE Preparation", desc: "Master General Studies, CSAT, and choose one specialized Optional Subject." },
      { step: 5, title: "UPSC Prelims Exam", desc: "Clear Objective Screening (GS Paper I & CSAT)." },
      { step: 6, title: "UPSC Mains & Interview", desc: "Pass 9 descriptive written papers followed by the Personality Test in Dholpur House, New Delhi." },
      { step: 7, title: "Training at LBSNAA", desc: "Join Mussoorie for the prestigious foundational training before taking charge of a district." }
    ]
  },
  {
    id: "corporate-lawyer",
    title: "Corporate Lawyer & Legal Counsel",
    category: "commerce",
    scopeType: "established",
    badgeClass: "badge-peach",
    cardClass: "card-pastel-peach",
    icon: "book",
    shortSummary: "Advise multinationals, venture funds, and founders on cross-border mergers, intellectual property, contracts, and regulatory disputes.",
    overview: "Corporate Lawyers are the strategic legal architects behind multi-billion-dollar business deals, company IPOs, startup venture funding, and high-stakes arbitration. They protect companies from regulatory violations, draft binding contracts, and represent interests in commercial courts.",
    whatTheyDo: "They conduct legal due diligence for investments, draft shareholder agreements and acquisition contracts, advise on antitrust and competition law, manage intellectual property portfolios, and handle corporate litigation before the NCLT and Supreme Court.",
    dailyResponsibilities: [
      "Drafting and negotiating complex commercial contracts (M&A agreements, Employment terms, NDAs)",
      "Conducting legal due diligence audits on target acquisition companies",
      "Advising clients on compliance with SEBI, RBI, and corporate insolvency regulations",
      "Filing trademarks, patents, and copyright protections",
      "Briefing Senior Advocates for high-profile commercial disputes"
    ],
    workplaceEnvironment: "Top-tier law firms (Shardul Amarchand Mangaldas, Trilegal, AZB & Partners, Cyril Amarchand Mangaldas), multinational in-house legal departments, or commercial arbitration chambers.",
    requiredQualifications: "5-Year Integrated Law Degree (B.A. LLB / B.B.A. LLB) directly after Class 12, or 3-Year LLB after graduation.",
    requiredSkills: {
      technical: ["Corporate Law (Companies Act 2013)", "Mergers & Acquisitions (M&A) Due Diligence", "Insolvency & Bankruptcy Code (IBC)", "Securities Regulations (SEBI)", "Contract Law & Dispute Resolution"],
      soft: ["Meticulous contractual drafting", "Persuasive verbal argumentation", "Stamina for rigorous document review", "Commercial business acumen"]
    },
    subjectsToFocusOn: "Legal Studies, English, Political Science, Economics, Business Studies.",
    degreeDiplomaOptions: [
      "5-Year Integrated B.A. LL.B. (Hons)",
      "5-Year Integrated B.B.A. LL.B. (Hons)",
      "5-Year Integrated B.Sc. LL.B. (Cyber Law / IPR)",
      "3-Year LL.B. (post-graduation)",
      "LL.M. (Master of Laws in Corporate / International Law)"
    ],
    entranceExams: ["CLAT (Common Law Admission Test for 26+ National Law Universities)", "AILET (NLU Delhi)", "SLAT (Symbiosis Law)", "LSAT-India", "MHCET Law"],
    eligibilityAndMarks: "Class 12 in any stream (Commerce, Science, or Humanities) with minimum 45% aggregate (40% for reserved categories).",
    collegeRecommendations: [
      "NLSIU Bengaluru (National Law School of India University - Tier 1)",
      "NALSAR Hyderabad",
      "WBNUJS Kolkata",
      "NLU Delhi",
      "Symbiosis Law School, Pune",
      "Harvard Law School (USA), Oxford Faculty of Law (UK)"
    ],
    certifications: [
      "Bar Council of India (BCI) Enrollment & All India Bar Exam (AIBE)",
      "Specialized Diploma in Cyber Law / IPR from WIPO"
    ],
    internshipOpportunities: "Law firm internships during college breaks with top corporate tier-1 firms, judicial clerkships at High Courts / Supreme Court, and legal NGO clinics.",
    salaryRanges: {
      india: {
        entry: "₹12 - ₹18 LPA (Top NLU grads in Tier-1 Law Firms)",
        mid: "₹24 - ₹45 LPA (Senior Associate)",
        senior: "₹60 - ₹1.5 Cr+ LPA (Equity Partner / General Counsel: ₹2 Cr - ₹5 Cr+)"
      },
      abroad: {
        entry: "£100,000 - £150,000 / year (Magic Circle firms in London / White Shoe firms in New York)",
        mid: "£180,000 - £250,000 / year",
        senior: "£350,000 - £600,000+ / year"
      }
    },
    careerGrowth: "Legal Intern → Junior Associate → Senior Associate → Principal Associate → Partner / General Counsel.",
    futureDemand: "High. Rapid growth of venture funding, cross-border e-commerce, AI intellectual property rights, and commercial regulations.",
    pros: [
      "Immediate high-paying corporate starting packages for top NLU graduates",
      "High prestige, intellectual challenge, and corporate advisory influence",
      "Stream flexibility: Any Class 12 student (Arts, Commerce, Science) can enter via CLAT"
    ],
    cons: [
      "Demanding billing hours (often 12-14 hour workdays during active M&A transactions)",
      "Intense reading requirements and heavy stress during transactional closings"
    ],
    challengesAndRisks: "Maintaining work-life balance; keeping up with frequent amendments in regulatory compliances.",
    alternativePaths: "Judicial Magistrate (via Judicial Services Exam), Litigation Advocate, Policy Analyst, Compliance Director, Legal Journalist.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build rapid English reading speed, comprehension, and logical reasoning habits." },
      { step: 2, title: "Class 11 & 12", desc: "Prepare for CLAT. Master Legal Reasoning, Critical Thinking, Current Affairs, and Quantitative Techniques." },
      { step: 3, title: "Crack CLAT / AILET", desc: "Secure a seat at top National Law Universities (NLSIU, NALSAR, NUJS, NLU Delhi)." },
      { step: 4, title: "5-Year Integrated LL.B", desc: "Participate in National Moot Courts, publish law review papers, and complete corporate internships." },
      { step: 5, title: "Bar Council Enrollment & AIBE", desc: "Register as an Advocate with the Bar Council of India." },
      { step: 6, title: "Join Tier-1 Corporate Law Firm", desc: "Begin as Corporate Associate at ₹14-18 LPA." }
    ]
  },
  {
    id: "biotechnology-bioinformatics",
    title: "Bioinformatics & Genomic Scientist",
    category: "emerging",
    scopeType: "emerging",
    badgeClass: "badge-green",
    cardClass: "card-pastel-green",
    icon: "dna",
    shortSummary: "Apply computer science, big data algorithms, and structural biology to revolutionize cancer therapeutics, gene editing, and personalized medicine.",
    overview: "Bioinformatics sits at the explosive crossroads of Biology and Computing. By analyzing petabytes of genomic sequences and protein structures through machine learning, bioinformaticians identify disease mutations, accelerate vaccine development, and design bespoke synthetic biology treatments.",
    whatTheyDo: "They develop computational pipelines for Next-Generation Sequencing (NGS), simulate molecular docking for new pharmaceuticals, map evolutionary genetics, and apply deep learning (such as AlphaFold) to predict 3D protein structures.",
    dailyResponsibilities: [
      "Analyzing RNA and whole-genome sequencing datasets from clinical trials",
      "Running molecular dynamic simulations to model how candidate drugs bind to target receptors",
      "Writing automated Python/R scripts for biological data visualization and statistical clustering",
      "Managing biological databases and clinical metadata repositories",
      "Publishing scientific discoveries in peer-reviewed journals"
    ],
    workplaceEnvironment: "Genomics laboratories, biotechnology firms, pharmaceutical research centers, cancer research institutes, or university departments.",
    requiredQualifications: "B.Tech in Bioinformatics / Biotechnology, or B.Sc in Life Sciences/Biochemistry followed by M.Sc/M.Tech in Computational Biology, or PhD.",
    requiredSkills: {
      technical: ["Genomics & Molecular Biology", "Python / R / BioPython", "Next-Gen Sequencing (NGS) data tools (BLAST, GATK, Bioconductor)", "Machine Learning for Biology (AlphaFold, ESM)", "Structural Biology & Molecular Docking (PyMOL, AutoDock)", "Linux HPC clusters"],
      soft: ["Scientific curiosity", "Interdisciplinary mindset", "Patience in exploratory research", "Precise data hygiene"]
    },
    subjectsToFocusOn: "Biology, Chemistry, Mathematics / Computer Science.",
    degreeDiplomaOptions: [
      "B.Tech in Bioinformatics / Biotechnology",
      "B.Sc in Biotechnology / Biochemistry -> M.Sc Bioinformatics",
      "Integrated M.Sc in Computational Biology",
      "PhD in Genomics / Structural Biology"
    ],
    entranceExams: ["JEE Main (for B.Tech Biotech in NITs/IITs)", "NEET-UG (select allied universities)", "CUET-UG (Central Universities)", "GATE (BT/CS)"],
    eligibilityAndMarks: "Class 12 with PCB or PCMB with minimum 55% aggregate.",
    collegeRecommendations: [
      "IIT Delhi, IIT Kharagpur, IIT Madras (Biotech Depts)",
      "Institute of Chemical Technology (ICT), Mumbai",
      "Jawaharlal Nehru University (JNU), New Delhi (School of Computational and Integrative Sciences)",
      "Vellore Institute of Technology (VIT)",
      "Cambridge University (UK), Johns Hopkins University (USA), Karolinska Institute (Sweden)"
    ],
    certifications: [
      "Genomic Data Science Specialization (Johns Hopkins / Coursera)",
      "Bioinformatics: Methods & Applications (EMBL-EBI)"
    ],
    internshipOpportunities: "CSIR-Institute of Genomics and Integrative Biology (IGIB), National Centre for Biological Sciences (NCBS), Biocon, Serum Institute, Astra Zeneca.",
    salaryRanges: {
      india: {
        entry: "₹5 - ₹9 LPA",
        mid: "₹12 - ₹22 LPA",
        senior: "₹25 - ₹50+ LPA"
      },
      abroad: {
        entry: "$78,000 - $98,000 / year",
        mid: "$115,000 - $160,000 / year",
        senior: "$175,000 - $260,000+ / year"
      }
    },
    careerGrowth: "Bioinformatics Analyst → Computational Biologist → Senior Genomics Scientist → Director of Computational Drug Discovery.",
    futureDemand: "Extremely high. The explosion of personalized mRNA therapies, CRISPR gene-editing, and AI protein discovery is driving unprecedented research demand.",
    pros: [
      "Pioneering field making historic breakthroughs in curing human genetic disorders",
      "High global demand in USA, Switzerland, Germany, and the UK",
      "Combines biological passion with computational tech-level compensation"
    ],
    cons: [
      "Often requires a Master's or PhD for high-level research leadership roles",
      "Long clinical validation cycles before computational discoveries reach market"
    ],
    challengesAndRisks: "Navigating complex bioinformatics software dependencies; regulatory hurdles in clinical drug trials.",
    alternativePaths: "Biotechnology Patent Analyst, Clinical Data Manager, Pharma Product Specialist, Medical Science Liaison.",
    roadmap: [
      { step: 1, title: "Class 10", desc: "Cultivate interest in cellular biology, genetics, and introductory computer coding." },
      { step: 2, title: "Class 11 & 12 (PCB or PCMB)", desc: "Maintain strong scores in Biology, Chemistry, and preferably Mathematics or Computer Science." },
      { step: 3, title: "Undergraduate Degree", desc: "Enroll in B.Tech Bioinformatics/Biotech or B.Sc Life Sciences." },
      { step: 4, title: "Computational Upskilling", desc: "Learn Python, Linux commands, and work with public genome databases (NCBI, Ensembl)." },
      { step: 5, title: "Research Internship", desc: "Gain wet-lab and dry-lab research experience at CSIR/NCBS institutes." },
      { step: 6, title: "Postgraduate Specialization", desc: "Pursue M.S. or PhD in Computational Biology abroad or at premier IIT/JNU programs." }
    ]
  },
  {
    id: "renewable-energy-engineer",
    title: "Renewable Energy & Climate Tech Engineer",
    category: "emerging",
    scopeType: "emerging",
    badgeClass: "badge-green",
    cardClass: "card-pastel-green",
    icon: "sun",
    shortSummary: "Engineer utility-scale solar farms, wind turbine microgrids, green hydrogen infrastructure, and clean energy storage solutions.",
    overview: "Renewable Energy Engineers drive the global transition away from fossil fuels. They design high-efficiency photovoltaic systems, offshore wind turbines, advanced lithium-ion and solid-state grid batteries, and green hydrogen electrolyzers to achieve carbon neutrality.",
    whatTheyDo: "They evaluate solar and wind resource geography, simulate power yields using CAD and GIS, engineer high-voltage electrical substation connections, model thermal efficiency, and audit industrial carbon footprints.",
    dailyResponsibilities: [
      "Simulating solar irradiation and wind output using PVSyst and WindPRO",
      "Designing balance-of-plant electrical systems and inverter configurations",
      "Monitoring real-time power generation efficiency of clean energy grids",
      "Conducting environmental impact assessments (EIA) for green energy installations",
      "Optimizing battery energy storage systems (BESS) for grid stability"
    ],
    workplaceEnvironment: "Clean energy project sites, engineering design consultancies, smart grid control rooms, and green hydrogen manufacturing facilities.",
    requiredQualifications: "B.Tech/B.E. in Electrical Engineering / Mechanical Engineering / Renewable Energy / Environmental Engineering.",
    requiredSkills: {
      technical: ["Solar PV System Design (PVSyst, Helioscope)", "Power Systems & Electrical Grid Integration", "Battery Energy Storage Systems (BESS)", "MATLAB / Simulink / AutoCAD", "Renewable Energy Policy & Carbon Credits"],
      soft: ["Project management", "Commitment to sustainability", "Field safety mindset", "Multi-stakeholder coordination"]
    },
    subjectsToFocusOn: "Physics, Mathematics, Chemistry (Thermodynamics & Electrochemistry).",
    degreeDiplomaOptions: [
      "B.Tech in Renewable / Green Energy Engineering",
      "B.Tech in Electrical & Electronics Engineering (EEE)",
      "B.Tech in Mechanical / Chemical Engineering -> M.Tech in Energy Systems",
      "Polytechnic Diploma in Electrical / Solar Energy Technology"
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "State Engineering Entrance Exams (MHT-CET, WBJEE, etc.)", "GATE (EE/ME)"],
    eligibilityAndMarks: "Class 12 with PCM, minimum 55% aggregate marks.",
    collegeRecommendations: [
      "IIT Bombay (Department of Energy Science and Engineering)",
      "IIT Roorkee & IIT Delhi",
      "National Institute of Solar Energy (NISE), Gurugram",
      "TU Delft (Netherlands - Global Leader in Wind & Sustainable Energy)",
      "Technical University of Denmark (DTU)",
      "UC Berkeley (USA)"
    ],
    certifications: [
      "Certified Energy Manager (CEM - Bureau of Energy Efficiency, India)",
      "NABCEP Solar PV Associate (Global standard)",
      "LEED Green Associate (USGBC)"
    ],
    internshipOpportunities: "Internships with clean energy leaders (Tata Power Solar, Adani Green, ReNew Power, Suzlon, Vestas, Enphase Energy, NTPC Green).",
    salaryRanges: {
      india: {
        entry: "₹4.5 - ₹8 LPA",
        mid: "₹10 - ₹20 LPA",
        senior: "₹25 - ₹50+ LPA"
      },
      abroad: {
        entry: "$72,000 - $92,000 / year",
        mid: "$105,000 - $145,000 / year",
        senior: "$160,000 - $230,000+ / year"
      }
    },
    careerGrowth: "Solar Design Engineer → Renewable Project Manager → Chief Technology Officer (CleanTech) → Energy Transition Director.",
    futureDemand: "Tremendous growth. Driven by India's 500 GW non-fossil capacity target by 2030 and global net-zero climate commitments.",
    pros: [
      "Direct personal contribution to combating climate change and global warming",
      "Massive sovereign government investments and international subsidies globally",
      "Rich combination of hands-on physical site engineering and advanced digital modeling"
    ],
    cons: [
      "Initial field project postings may be in remote rural/desert locations",
      "Dependent on regional government tariffs and regulatory subsidy frameworks"
    ],
    challengesAndRisks: "Grid curtailment risks; supply chain volatilities in rare-earth metals and photovoltaic wafers.",
    alternativePaths: "EV Charging Infrastructure Engineer, Carbon Credit Auditor, Sustainability Consultant, Smart Grid Specialist.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build fundamental curiosity in physics, electricity, and environmental sciences." },
      { step: 2, title: "Class 11 & 12 (Science PCM)", desc: "Focus on Electromagnetism, Current Electricity, and Thermodynamics." },
      { step: 3, title: "Undergraduate Engineering", desc: "Pursue B.Tech in Electrical, Mechanical, or Energy Engineering." },
      { step: 4, title: "Industry Software & Certifications", desc: "Learn PVSyst, AutoCAD, and study solar grid-tie regulations." },
      { step: 5, title: "Renewable Project Internship", desc: "Intern on utility-scale solar or wind project sites." },
      { step: 6, title: "CleanTech Professional", desc: "Join leading clean energy independent power producers at ₹5-9 LPA." }
    ]
  },
  {
    id: "quantum-computing-researcher",
    title: "Quantum Computing & Quantum Hardware Scientist",
    category: "emerging",
    scopeType: "speculative", // speculative future
    badgeClass: "badge-lavender",
    cardClass: "card-pastel-lavender",
    icon: "zap",
    shortSummary: "Harness quantum mechanics, qubits, and superposition to solve computational problems intractable for classical supercomputers.",
    overview: "Quantum Computing represents the radical frontier of physics and computing. Utilizing quantum phenomena like superposition and entanglement, quantum researchers develop quantum algorithms for breaking cryptographic ciphers, simulating complex molecular chemistry for drug discovery, and optimizing global financial networks.",
    whatTheyDo: "They design and test superconducting qubit circuits, formulate quantum error correction codes, write quantum algorithms in Qiskit/Cirq, and build ultra-low-temperature cryogenic systems near absolute zero.",
    dailyResponsibilities: [
      "Formulating quantum circuits and measuring qubit coherence times (T1/T2)",
      "Simulating quantum Hamiltonian systems using Qiskit, Pennylane, or Cirq",
      "Calibrating microwave pulses that manipulate quantum gates",
      "Developing post-quantum cryptographic schemes immune to Shor's algorithm",
      "Collaborating with experimental physicists and theoretical computer scientists"
    ],
    workplaceEnvironment: "Cryogenic quantum research laboratories (IBM Quantum, Google Quantum AI, Rigetti), university physics institutes, or sovereign defense labs.",
    requiredQualifications: "B.Tech in Engineering Physics / Computer Science / Electrical Engineering, followed by M.S. and PhD in Quantum Information / Condensed Matter Physics.",
    requiredSkills: {
      technical: ["Quantum Mechanics (Bra-ket notation, Hilbert spaces)", "Linear Algebra & Complex Analysis", "Python (Qiskit, Cirq, PennyLane)", "Cryogenics & Microwave RF Electronics", "Quantum Error Correction (Surface codes)"],
      soft: ["Extreme intellectual patience", "First-principles scientific reasoning", "Abstract conceptual visualization", "Rigorous academic writing"]
    },
    subjectsToFocusOn: "Advanced Physics (Quantum & Modern Physics), Mathematics (Linear Algebra, Differential Equations).",
    degreeDiplomaOptions: [
      "B.Tech in Engineering Physics (offered at IIT Bombay, IIT Madras, IIT Delhi)",
      "B.S. / B.Sc in Physics (Hons) -> M.Sc Physics -> PhD",
      "B.Tech in Electrical / Computer Science -> M.Tech Quantum Technologies"
    ],
    entranceExams: ["JEE Advanced (for Engineering Physics at IITs)", "JAM (Joint Admission test for Masters in Physics)", "GATE (PH/EC/CS)"],
    eligibilityAndMarks: "Class 12 with PCM, exceptional aptitude in theoretical physics and mathematics.",
    collegeRecommendations: [
      "IIT Madras (Centre for Quantum Information, Communication and Computing)",
      "IISc Bengaluru (Quantum Technology Initiative)",
      "Tata Institute of Fundamental Research (TIFR), Mumbai",
      "MIT (USA), Harvard University (USA), University of Waterloo (Canada - IQC), TU Delft (QuTech Netherlands)"
    ],
    certifications: [
      "IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X"
    ],
    internshipOpportunities: "IBM Quantum internship programs, QWorld quantum workshops, summer research fellowships at IISc / TIFR / Raman Research Institute.",
    salaryRanges: {
      india: {
        entry: "₹9 - ₹18 LPA (Post-MS / Early PhD entry in industrial research)",
        mid: "₹22 - ₹45 LPA",
        senior: "₹55 - ₹1.2 Cr+ LPA"
      },
      abroad: {
        entry: "$120,000 - $160,000 / year",
        mid: "$175,000 - $250,000 / year",
        senior: "$280,000 - $450,000+ / year"
      }
    },
    careerGrowth: "Quantum Research Intern → Quantum Software/Hardware Engineer → Principal Quantum Scientist → Chief Quantum Architect.",
    futureDemand: "Speculative to High. As fault-tolerant quantum computers approach commercial quantum supremacy, demand will surge across defense, pharmaceuticals, and finance.",
    pros: [
      "At the very cutting edge of human knowledge and physical reality",
      "Extremely rare skillset commanding premier global prestige",
      "Direct sovereign support via initiatives like India's National Quantum Mission (₹6,000 Cr)"
    ],
    cons: [
      "Requires long academic commitment (typically requires a PhD)",
      "Still in early hardware scaling phase; commercial mass-market applications are still maturing"
    ],
    challengesAndRisks: "Decoherence and thermal noise errors; high cost of dilution refrigerators.",
    alternativePaths: "Semiconductor Device Physicist, Classical Algorithm Engineer, Cryptographer, Photonics Engineer.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build strong foundational understanding in classical physics and matrix algebra." },
      { step: 2, title: "Class 11 & 12 (Science PCM)", desc: "Deep dive into Modern Physics, Atomic Models, Wave-Particle Duality, and Vectors." },
      { step: 3, title: "Undergraduate Degree", desc: "Pursue B.Tech in Engineering Physics (at top IITs) or B.Sc Physics (Hons)." },
      { step: 4, title: "Quantum Programming", desc: "Run your first quantum circuits on real quantum hardware using IBM Quantum Experience & Qiskit." },
      { step: 5, title: "Research Fellowships", desc: "Conduct undergraduate thesis research on quantum gates or quantum algorithms." },
      { step: 6, title: "PhD & Quantum Industry", desc: "Join an elite PhD program or join quantum labs at Google, IBM, or emerging quantum startups." }
    ]
  },
  {
    id: "product-designer-ux",
    title: "UX/UI & Product Designer",
    category: "design",
    scopeType: "established",
    badgeClass: "badge-lavender",
    cardClass: "card-pastel-lavender",
    icon: "layout",
    shortSummary: "Craft intuitive digital experiences, design interfaces, and build seamless user journeys for web, mobile, and spatial computing.",
    overview: "Product Designers blend psychology, visual aesthetics, and technology to create products that people love to use. From the layout of a banking app to complex AR interfaces, UX/UI designers ensure software is beautiful, accessible, and delightful.",
    whatTheyDo: "They conduct user interviews, map customer journeys, create interactive wireframes and prototypes in Figma, build enterprise design systems, and collaborate with software engineers to bring pixels to life.",
    dailyResponsibilities: [
      "Facilitating user research and usability testing sessions with real end-users",
      "Designing responsive mobile and web interfaces, icons, and typography systems in Figma",
      "Building high-fidelity interactive prototypes to test micro-interactions",
      "Maintaining unified company design tokens and component libraries",
      "Analyzing user drop-off funnels and heatmaps to optimize conversion rates"
    ],
    workplaceEnvironment: "Tech startups, design agencies (IDEO), product companies, or independent remote design consultancies.",
    requiredQualifications: "Bachelor of Design (B.Des), or B.Tech, or B.A./B.Sc in Design / Fine Arts / Psychology, or a standout self-taught portfolio.",
    requiredSkills: {
      technical: ["Figma, FigJam, Adobe Creative Suite", "Design Systems & Component Architecture", "Wireframing & Interactive Prototyping", "User Research & Usability Testing", "HTML/CSS basics (for developer handoff)"],
      soft: ["Deep human empathy", "Visual taste and spatial layout sensibility", "Constructive feedback receptivity", "Clear presentation storytelling"]
    },
    subjectsToFocusOn: "Art / Design, Psychology, Computer Science, English.",
    degreeDiplomaOptions: [
      "B.Des (Bachelor of Design) in Interaction Design / Product Design",
      "B.Sc in Visual Communication / Multimedia",
      "B.Tech in Computer Science + Self-taught UX Portfolio",
      "Comprehensive UX Bootcamps & Google UX Certificate"
    ],
    entranceExams: ["UCEED (for IIT Bombay, IIT Delhi, IIT Guwahati B.Des)", "NID DAT (National Institute of Design)", "NIFT Entrance Exam", "CEED (for M.Des at IITs)"],
    eligibilityAndMarks: "Class 12 in ANY stream (Arts, Commerce, or Science) with passing marks.",
    collegeRecommendations: [
      "National Institute of Design (NID), Ahmedabad",
      "IDC School of Design, IIT Bombay",
      "Department of Design, IIT Delhi & IIT Guwahati",
      "Srishti Institute of Art, Design and Technology, Bengaluru",
      "Royal College of Art (UK), Rhode Island School of Design - RISD (USA)"
    ],
    certifications: [
      "Google UX Design Professional Certificate",
      "Interaction Design Foundation (IxDF) Certified Designer"
    ],
    internshipOpportunities: "Design internships at tech unicorns (Swiggy, Razorpay, CRED, Zomato), creative agencies, and global product studios.",
    salaryRanges: {
      india: {
        entry: "₹6 - ₹12 LPA",
        mid: "₹15 - ₹28 LPA",
        senior: "₹32 - ₹65+ LPA (Head of Design: ₹80L - ₹1.4 Cr+)"
      },
      abroad: {
        entry: "$75,000 - $105,000 / year",
        mid: "$120,000 - $170,000 / year",
        senior: "$190,000 - $290,000+ / year"
      }
    },
    careerGrowth: "Junior UI/UX Designer → Product Designer → Senior Product Designer → Staff Designer / Design Manager → VP of Design.",
    futureDemand: "High. As automated AI writes code, human-centered taste, intuitive empathy, and product differentiation become the primary competitive advantage.",
    pros: [
      "Open to all streams (Arts, Commerce, Science) with zero coding requirement to enter",
      "Tremendous portfolio-driven freedom to freelance globally",
      "Direct creative satisfaction seeing millions of people interact with your designs daily"
    ],
    cons: [
      "Subjective feedback cycles and reconciling conflicting stakeholder opinions",
      "Constantly evolving design tooling and mobile platform guidelines (Apple HIG, Material Design)"
    ],
    challengesAndRisks: "Standing out among bootcamp graduates requires a deeply thoughtful case-study portfolio.",
    alternativePaths: "UX Researcher, Design Technologist, Brand Strategist, Creative Director, Product Manager.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Practice sketching, visual layout observation, and study why popular apps are easy or hard to use." },
      { step: 2, title: "Class 11 & 12", desc: "Select any stream; prepare for UCEED (IITs) and NID DAT design entrance exams." },
      { step: 3, title: "Design Degree (B.Des)", desc: "Enroll in B.Des or pursue self-directed design learning alongside your degree." },
      { step: 4, title: "Master Figma & Design Systems", desc: "Build 3 rigorous end-to-end UX case studies showcasing problem framing and user testing." },
      { step: 5, title: "Internship & Portfolio Review", desc: "Intern at a product startup and publish your portfolio on Behance / personal website." },
      { step: 6, title: "Product Designer Role", desc: "Join as Product Designer at ₹7-15 LPA." }
    ]
  },
  {
    id: "defence-officer-nda",
    title: "Defence Officer (Army, Navy, Air Force via NDA / CDS)",
    category: "govt",
    scopeType: "established",
    badgeClass: "badge-yellow",
    cardClass: "card-pastel-yellow",
    icon: "shield",
    shortSummary: "Lead troops, pilot fighter aircraft, command naval warships, and defend the territorial sovereignty of the nation.",
    overview: "Commissioned Officers in the Indian Armed Forces (Army, Navy, and Air Force) represent the pinnacle of military leadership, courage, and selfless service. Officers are trained to lead men and women under the most perilous combat conditions while operating state-of-the-art weapon platforms.",
    whatTheyDo: "Army officers command combat battalions and artillery in diverse terrains. Navy officers navigate guided-missile destroyers and submarines. Air Force officers pilot supersonic fighter aircraft (Rafale, Su-30MKI), transport squadrons, and manage air defence missile grids.",
    dailyResponsibilities: [
      "Conducting tactical field exercises, operational weapon readiness drills, and physical training",
      "Managing troop welfare, logistics supply chains, and forward post defenses",
      "Operating high-tech radar systems, thermal optics, and encrypted military communications",
      "Coordinating disaster relief operations (HADR) during national floods or earthquakes",
      "Mentoring subordinate jawans, non-commissioned officers, and junior sailors"
    ],
    workplaceEnvironment: "Forward border outposts (Siachen, LAC, LOC), naval warships at sea, frontline air bases, or strategic military headquarters.",
    requiredQualifications: "10+2 passed for National Defence Academy (NDA); Any Bachelor's degree for Combined Defence Services (CDS) / AFCAT / Indian Naval Academy (INET).",
    requiredSkills: {
      technical: ["Military Tactics & Map Reading", "Weapon Systems & Ballistics", "Navigation & Communication protocols", "Physical endurance & combat reflexes"],
      soft: ["Unshakeable moral courage", "Decisive leadership under fire", "Team-first camaraderie", "Absolute loyalty to the constitutional flag"]
    },
    subjectsToFocusOn: "Mathematics, Physics, English, General Knowledge.",
    degreeDiplomaOptions: [
      "NDA Cadet Graduation: 3-Year B.A. / B.Sc / B.Tech from Jawaharlal Nehru University (JNU) while at NDA Khadakwasla",
      "Direct Technical Entry (10+2 TES Army / 10+2 B.Tech Navy via JEE Main ranks)",
      "CDS / AFCAT after completing any civilian Bachelor's degree"
    ],
    entranceExams: ["NDA Entrance Exam (UPSC - twice a year)", "SSB (Services Selection Board - 5-day psychological and outdoor interview)", "CDS (UPSC)", "AFCAT (Air Force)", "10+2 TES / Navy B.Tech Entry"],
    eligibilityAndMarks: "NDA: Age 16.5 to 19.5 years. Army wing: 10+2 pass in any stream. Air Force & Navy: 10+2 pass with Physics and Mathematics. Both male and female candidates are eligible.",
    collegeRecommendations: [
      "National Defence Academy (NDA), Khadakwasla, Pune (Joint-service academy)",
      "Indian Military Academy (IMA), Dehradun",
      "Air Force Academy (AFA), Dundigal, Hyderabad",
      "Indian Naval Academy (INA), Ezhimala, Kerala",
      "Officers Training Academy (OTA), Chennai"
    ],
    certifications: [
      "Military Commission parchment signed by the President of India",
      "Specialized Combat Commando, Paratrooper, or Flight Pilot Wings"
    ],
    internshipOpportunities: "Rigorous 3-year foundational cadet training at NDA followed by 1-year pre-commission finishing training at IMA/AFA/INA.",
    salaryRanges: {
      india: {
        entry: "Lieutenant / Flying Officer / Sub Lieutenant: ₹56,100 basic + Military Service Pay (MSP ₹15,500) + Flying Allowance / High Altitude Allowance + Free Rations, Medical, Housing (~₹1,00,000 - ₹1,40,000 in hand)",
        mid: "Major / Wing Commander / Commander: ₹1,50,000 - ₹2,00,000/month in hand",
        senior: "Major General / Air Vice Marshal / Rear Admiral: ₹2,20,000+/month + Flag car and protocol staff"
      },
      abroad: {
        entry: "UN Peacekeeping Missions provide lucrative UN daily allowances ($1,500 - $3,000/month on top of Indian salary)",
        mid: "Defense Attaché postings at Indian embassies",
        senior: "High diplomatic military mission privileges"
      }
    },
    careerGrowth: "Lieutenant → Captain → Major → Lt. Colonel → Colonel (Commanding Officer) → Brigadier → Major General → Lt. General → General (Chief of Staff).",
    futureDemand: "Permanent. India's national defense, modernization of multi-domain combat, and aerospace defense ensure ongoing recruitment.",
    pros: [
      "Supreme honor, unmatched patriotism, and elite social standing in Indian society",
      "World-class athletic fitness, adventure sports (mountaineering, skydiving, sailing), and camaraderie",
      "Comprehensive medical coverage for family (ECHS), canteen privileges (CSD), and lifelong pension"
    ],
    cons: [
      "Inherent physical danger and life risk in combat operations",
      "Long separations from family during postings at high altitude or sea",
      "Extremely demanding 5-day SSB interview selection rate (approx. 2-4% clearance)"
    ],
    challengesAndRisks: "Physical injury risk; frequent relocations every 2-3 years disrupting family education.",
    alternativePaths: "Central Armed Police Forces (CAPF - BSF, CRPF, CISF via UPSC), Commercial Airline Pilot, Corporate Security Director.",
    roadmap: [
      { step: 1, title: "Class 10 Completion", desc: "Build physical stamina (running, push-ups) and follow current defense news." },
      { step: 2, title: "Class 11 & 12 (Science PCM)", desc: "Maintain PCM to keep Army, Navy, and Air Force options open." },
      { step: 3, title: "NDA Written Exam", desc: "Appear for UPSC NDA exam in Class 12 (Maths 300 marks + GAT 600 marks)." },
      { step: 4, title: "Services Selection Board (SSB)", desc: "Clear the 5-day psychological tests, Group Testing Officer (GTO) outdoor tasks, and Personal Interview." },
      { step: 5, title: "Medical Board", desc: "Pass rigorous Armed Forces medical and eye vision fitness standards." },
      { step: 6, title: "3 Years at NDA Khadakwasla", desc: "Undergo legendary military academy physical, academic, and leadership training." },
      { step: 7, title: "Commissioning", desc: "Step across the Antim Pag (final step) at IMA/AFA/INA as a commissioned Lieutenant." }
    ]
  }
];
