// HopeForScope - AI Career Counsellor ("ScopeBot")
(function() {
  const KNOWLEDGE_BASE = [
    {
      keywords: ["65%", "low marks", "scored low", "marks are low", "poor marks", "average marks", "50%", "55%", "60%"],
      title: "Guidance for Average or Moderate Marks",
      reply: `
        First and foremost, take a deep breath. At **HopeForScope**, our golden philosophy is: **Your marks should guide your future, never limit your future!**

        A score of 60-65% in Class 10 or 12 does NOT block your success. Here is your realistic scope:
        
        1. **Top Tech Careers via Skills:** In Software Engineering, UI/UX Design, and Cybersecurity, companies care about your GitHub code, bug bounty track record, and portfolios far more than school percentages.
        2. **BCA to MCA or Lateral B.Tech:** If engineering college cutoffs seem high, you can pursue a BCA or a 3-Year Polytechnic Diploma with direct lateral entry into 2nd year B.Tech.
        3. **Chartered Accountancy & CS:** The ICAI does not require high board percentages to register for CA Foundation. Your dedication to the curriculum is what determines success.
        4. **Law (CLAT):** Law entrance exams test reading speed, current affairs, and logical reasoning, not high school board percentages.
        5. **Study Abroad in Germany:** German public universities evaluate holistic subject credits and Studienkolleg tests, where students with 65-70% can thrive without paying private tuition fees.

        Tell me which subjects you genuinely enjoy, and we'll craft an inspiring path together!
      `
    },
    {
      keywords: ["commerce", "science", "confused between commerce and science", "science or commerce"],
      title: "Deciding Between Commerce and Science",
      reply: `
        It is completely normal to feel torn between Science and Commerce. Let's break down how to decide with clarity:

        ### Choose Science (PCM/PCB) if:
        - You are naturally curious about **how physical systems work** (mechanics, electricity, chemical reactions, cell biology).
        - You enjoy solving mathematical equations and hands-on laboratory experiments.
        - You want to keep options open for Engineering, Medicine, Defence Technical entries (NDA), Architecture, or Pure Research.
        - *Bonus:* Science students can transition to Commerce or Arts later, but the reverse is difficult.

        ### Choose Commerce if:
        - You are fascinated by **money, business models, financial markets, stocks, and entrepreneurship**.
        - You prefer conceptual business law, economics, and balance sheets over physics mechanics.
        - You aspire to become a Chartered Accountant (CA), Investment Banker, Chief Financial Officer (CFO), or Corporate Lawyer.

        **Smart Middle Ground:** You can choose **Commerce with Mathematics**, which preserves your eligibility for elite economics programs and tech-finance roles, or **Science (PCM)** if you want total flexibility for 2 more years.
      `
    },
    {
      keywords: ["cybersecurity after commerce", "cyber security commerce", "cyber after commerce"],
      title: "Entering Cybersecurity from Commerce",
      reply: `
        **Yes, 100% absolutely!** You can build a world-class career in Cybersecurity after studying Commerce. Here are the three proven pathways:

        ### Pathway 1: The BCA Degree Route
        - Most universities across India accept Commerce students into **BCA (Bachelor of Computer Applications)**.
        - During your BCA, build hands-on skills in Linux, Python networking, and earn industry certifications like **CompTIA Security+** and **CEH (Certified Ethical Hacker)**.

        ### Pathway 2: Direct Practical Certifications & Bug Bounties
        - Top cybersecurity firms like CrowdStrike, FireEye, and Big 4 cyber wings recruit based on practical skills.
        - Platforms like **TryHackMe**, **HackTheBox**, and certifications like **OSCP (Offensive Security Certified Professional)** have ZERO degree prerequisites.

        ### Pathway 3: FinTech & Cyber Fraud Auditing
        - Having a Commerce background is actually a superpower! Banks and financial institutions desperately need experts who understand both accounting/fraud compliance and network security (IT Audit & CISA certification).
      `
    },
    {
      keywords: ["become a cybersecurity expert", "how to learn cybersecurity", "ethical hacker roadmap"],
      title: "Step-by-Step Roadmap to Become a Cybersecurity Expert",
      reply: `
        Here is the proven, step-by-step roadmap to becoming a high-earning Cybersecurity Engineer / Ethical Hacker:

        1. **Master the Fundamentals (Months 1-3):**
           - Learn computer networking fundamentals: TCP/IP, OSI layers, DNS, Subnets, and HTTP/HTTPS protocols.
           - Install Linux (Ubuntu/Kali) and master terminal bash commands.
        2. **Learn Basic Scripting (Months 4-5):**
           - Learn Python and Bash scripting to automate vulnerability scanning and log parsing.
        3. **Earn Entry-Level Certifications (Months 6-8):**
           - Prepare for **CompTIA Security+** (industry recognized gold standard for entry-level).
        4. **Hands-on Labs (Months 9-12):**
           - Practice ethical hacking on free platforms like **TryHackMe** and **OverTheWire**.
           - Move to **HackTheBox** to learn realistic penetration testing.
        5. **Internship & Certifications (Year 2):**
           - Apply for Junior SOC (Security Operations Center) Analyst roles.
           - Target advanced certifications like **CEH** or the elite hands-on **OSCP**.
        6. **Explore Bug Bounties:**
           - Report verified software vulnerabilities ethically on HackerOne or Bugcrowd.
      `
    },
    {
      keywords: ["without mathematics", "careers without math", "no maths", "math difficult"],
      title: "High-Growth Careers Without Mathematics",
      reply: `
        If you find advanced mathematics stressful, you are not alone, and your career scope is vast and exciting! Here are top high-paying fields that do NOT require heavy calculus:

        1. **Corporate & Cyber Law:** 5-Year Integrated B.A. LL.B. via CLAT. Law relies on reading speed, logic, and argumentation. Top corporate associates earn ₹12-18 LPA right out of National Law Universities.
        2. **UI/UX & Product Design:** B.Des via UCEED or NID DAT. Focuses on psychology, empathy, visual layout, and Figma. Top product designers earn ₹15-35+ LPA.
        3. **Medicine & Healthcare (PCB):** MBBS, Dental (BDS), Physiotherapy (BPT), Nursing, and Clinical Psychology rely on biology and human anatomy, not calculus.
        4. **Civil Services & Public Administration (UPSC):** Any graduation degree qualifies. IAS, IPS, and IFS officers lead districts and national policy based on general studies and humanities.
        5. **Company Secretary (CS):** Focuses on corporate governance, company law, and board compliance without complex math.
        6. **Digital Marketing, Media & Journalism:** Fast-growing creative communication, brand strategy, and public relations.
      `
    },
    {
      keywords: ["after bsc", "what after bsc", "done bsc", "completed bsc"],
      title: "High-Value Career Pathways After B.Sc",
      reply: `
        A B.Sc degree gives you a strong foundational launchpad. Depending on your specialization, here are the highest-return pathways:

        1. **Master's in Data Science / AI (M.Sc / MCA):** If you did B.Sc in Maths, Stats, Physics, or CS, transition directly to high-paying Data Science via GATE (DA paper) or university entrance tests.
        2. **Study Abroad in Germany or Europe:** European universities warmly welcome Indian B.Sc graduates for English-taught Master's programs with nearly zero tuition fees.
        3. **Government & Banking Examinations:** You are immediately eligible for UPSC Civil Services, SSC CGL (Inspector / ASO), State PSCs, and Bank PO (SBI/IBPS).
        4. **Industry Certifications (Cloud / Cyber / Clinical Data):** Pair your B.Sc with AWS Cloud Solutions Architect or Clinical Research Associate certifications for rapid entry into MNCs.
        5. **Corporate MBA:** Appear for CAT / XAT to enter top IIMs. Many IIMs award extra academic diversity points to non-engineering B.Sc graduates!
      `
    },
    {
      keywords: ["germany", "study in germany", "free education germany"],
      title: "Complete Blueprint for Studying in Germany",
      reply: `
        Germany is one of the most popular global destinations for Indian students because public universities charge **nearly ZERO tuition fees**!

        ### How It Works:
        1. **Tuition:** Public universities are funded by the German state. You only pay a semester administrative fee of €150-€350 (which usually includes a free state public transit ticket!).
        2. **Living Expenses & Blocked Account:** You must open a German Blocked Account (Sperrkonto) deposited with **€11,208 / year** (~₹10.5 Lakhs), from which you withdraw ~€934 every month for rent and groceries.
        3. **For Class 12 Passed Students:** German high schools have 13 years (Abitur). Indian students with 12 years of schooling usually complete 1 year of **Studienkolleg** in Germany OR clear JEE Advanced in India for direct undergraduate entry.
        4. **For Master's Students:** Requires a recognized Bachelor's degree (B.Tech or 4-year degree) with strong subject credits.
        5. **APS Certificate:** Mandatory document verification through the German Embassy in New Delhi before applying for visa.
        6. **Post-Study Work:** 18-month job seeker visa leading to the EU Blue Card and permanent residency!
      `
    },
    {
      keywords: ["international opportunities", "careers abroad", "global careers", "jobs abroad"],
      title: "Careers with the Highest International Mobility",
      reply: `
        If working or immigrating abroad is your ambition, these professions have international licensing frameworks or critical shortage lists:

        1. **Cybersecurity & Cloud Engineers:** Over 3.5 million unfilled roles globally. High visa sponsorship in USA, UK, Germany, and Singapore.
        2. **Healthcare (Doctors & Registered Nurses):** Acute shortages across the UK NHS, Germany, Australia, and Canada.
        3. **Renewable Energy & Battery Engineers:** High sovereign subsidies and green-economy job openings in Netherlands, Denmark, and Germany.
        4. **Chartered Accountants (CA with ICAI MoUs):** ICAI has mutual recognition agreements with CPA Australia, ICAEW (UK), and CA ANZ.
        5. **Commercial Airline Pilots:** World airline fleet expansions require thousands of international first officers and commanders.
      `
    }
  ];

  window.ScopeBot = {
    chatHistory: [
      {
        sender: "bot",
        text: "Hello! I am **ScopeBot**, your personal HopeForScope career counsellor. 🧭\n\nTell me about your current education, your favorite subjects, or any career questions on your mind. How can I help you discover your scope today?"
      }
    ],

    init: function() {
      this.render();
    },

    openWithContext: function(promptText) {
      window.AppRouter.navigate("counsellor");
      setTimeout(() => {
        const input = document.getElementById("bot-user-input");
        if (input) {
          input.value = promptText;
          this.sendMessage();
        }
      }, 100);
    },

    askPromptChip: function(text) {
      const input = document.getElementById("bot-user-input");
      if (input) {
        input.value = text;
        this.sendMessage();
      }
    },

    sendMessage: function() {
      const input = document.getElementById("bot-user-input");
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;

      // Add user message
      this.chatHistory.push({ sender: "user", text: text });
      input.value = "";
      this.render();

      // Show typing indicator
      const chatBox = document.getElementById("bot-chat-box");
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;

      setTimeout(() => {
        const botResponse = this.generateResponse(text);
        this.chatHistory.push({ sender: "bot", text: botResponse });
        this.render();
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      }, 500);
    },

    generateResponse: function(userQuery) {
      const qLower = userQuery.toLowerCase();

      // Search knowledge base
      for (let item of KNOWLEDGE_BASE) {
        for (let kw of item.keywords) {
          if (qLower.includes(kw)) {
            return item.reply;
          }
        }
      }

      // Check for career names
      const allCareers = window.CAREERS_DATA || [];
      const foundCareer = allCareers.find(c => qLower.includes(c.title.toLowerCase()) || qLower.includes(c.id));
      if (foundCareer) {
        return `
          **${foundCareer.title}** is an outstanding path!
          
          - **What they do:** ${foundCareer.overview}
          - **Starting Salary (India):** ${foundCareer.salaryRanges.india.entry}
          - **Starting Salary (Abroad):** ${foundCareer.salaryRanges.abroad.entry}
          - **Key Entrance Exams:** ${foundCareer.entranceExams.join(', ')}
          - **Core Skills:** ${foundCareer.requiredSkills.technical.slice(0, 4).join(', ')}
          
          You can view the full deep-dive roadmap in our Career Directory or ask me specific questions about eligibility!
        `;
      }

      // Contextual fallback response embodying HopeForScope philosophy
      return `
        That's a thoughtful question! At **HopeForScope**, we believe that every student's journey is unique.

        Here are 3 key principles to guide you on this:
        1. **Aptitude + Passion beats mere marks:** When you choose a subject that matches what you naturally enjoy thinking about, your academic performance improves automatically.
        2. **Look at the 5-10 Year Roadmap:** Don't just focus on the first entrance exam; explore what daily work life looks like in that profession.
        3. **Always identify Alternative Pathways:** If a direct path seems crowded or competitive, alternative routes (like BCA to MCA, Polytechnic lateral entry, or professional certifications) can lead you to the exact same high-paying destination.

        Would you like to take our **Class 10** or **Class 12** Assessment for a full step-by-step personalized roadmap?
      `;
    },

    render: function() {
      const container = document.getElementById("counsellor-container");
      if (!container) return;

      const promptChips = [
        "I scored 65% in Class 10. What can I do?",
        "I am confused between Commerce and Science.",
        "Can I enter cybersecurity after studying Commerce?",
        "Which careers are possible without mathematics?",
        "How can I study in Germany with low tuition fees?",
        "What can I do after BSc?",
        "Which careers have high international opportunities?"
      ];

      let html = `
        <div class="max-w-4xl mx-auto space-y-6">
          <!-- Counsellor Header -->
          <div class="card-white p-6 md:p-8 bg-gradient-to-r from-[#DCEBFF]/50 via-[#EAE0FF]/30 to-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7BA7E8] to-[#BBA2F5] flex items-center justify-center text-white text-3xl shadow-sm">
                🧭
              </div>
              <div>
                <span class="badge badge-blue mb-1">AI Career Counsellor • Always Online</span>
                <h1 class="text-2xl font-bold text-[#24324B]">ScopeBot Career Advisory</h1>
                <p class="text-xs text-slate-500">Supportive, unbiased guidance personalized to your marks, interests, and ambitions.</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-xs font-semibold text-slate-600">Active & Ready</span>
            </div>
          </div>

          <!-- Quick Suggestion Chips -->
          <div class="card-white p-4">
            <div class="text-xs font-bold uppercase text-slate-400 mb-2">Frequently Asked by Students:</div>
            <div class="flex flex-wrap gap-2">
              ${promptChips.map(chip => `
                <button class="badge badge-gray hover:bg-[#DCEBFF] cursor-pointer text-xs transition-all" onclick="window.ScopeBot.askPromptChip('${chip}')">
                  ${chip}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Chat Window -->
          <div class="card-white overflow-hidden shadow-sm flex flex-col h-[520px]">
            <div id="bot-chat-box" class="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/40">
              ${this.chatHistory.map(msg => `
                <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
                  <div class="max-w-[82%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#7BA7E8] text-white rounded-br-none shadow-sm' 
                      : 'bg-white border border-slate-200 text-[#24324B] rounded-bl-none shadow-sm'
                  }">
                    ${msg.text.replace(/\n/g, '<br>')}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Input Bar -->
            <div class="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
              <input type="text" id="bot-user-input" class="form-input flex-1" placeholder="Type your question (e.g. Can I do cybersecurity after Commerce?)" onkeypress="if(event.key === 'Enter') window.ScopeBot.sendMessage()">
              <button class="btn btn-primary" onclick="window.ScopeBot.sendMessage()">Send →</button>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;
      const chatBox = document.getElementById("bot-chat-box");
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }
  };
})();
