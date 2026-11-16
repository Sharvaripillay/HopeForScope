// HopeForScope - Class 10 Interactive Conversational Assessment Engine
(function() {
  const questions = [
    {
      id: "name",
      title: "Welcome! What's your name?",
      subtitle: "Knowing your name helps us personalize your career roadmap. (You can also skip this if you'd like!)",
      type: "text",
      placeholder: "e.g. Aarav Sharma",
      optional: true
    },
    {
      id: "location",
      title: "Where are you currently located?",
      subtitle: "We'll suggest nearby coaching centres, scholarships, and state universities tailored to your area.",
      type: "location",
      fields: [
        { id: "country", label: "Country", type: "select", options: ["India", "United Arab Emirates", "Nepal", "Other"], default: "India" },
        { id: "state", label: "State / UT", type: "select", options: ["Delhi NCR", "Maharashtra", "Karnataka", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal", "Gujarat", "Rajasthan", "Kerala", "Other"] },
        { id: "city", label: "City", type: "text", placeholder: "e.g. New Delhi, Mumbai, Bengaluru, Pune, Kota" },
        { id: "area", label: "Area / Pincode", type: "text", placeholder: "e.g. Hauz Khas, Andheri, HSR Layout" }
      ]
    },
    {
      id: "marks",
      title: "What is your Class 10 percentage or expected score?",
      subtitle: "Remember: HopeForScope philosophy: Marks help guide your options, they never limit your future!",
      type: "marks",
      placeholder: "e.g. 78",
      options: [
        { label: "Above 90% (Distinction)", val: 92 },
        { label: "75% - 89% (First Division)", val: 82 },
        { label: "60% - 74% (Second Division)", val: 67 },
        { label: "45% - 59% (Passing)", val: 54 },
        { label: "Below 45% (Exploring Skill & Alternative Paths)", val: 42 }
      ]
    },
    {
      id: "board",
      title: "Which education board are you studying under?",
      subtitle: "Different boards offer varied subject combinations and grading systems.",
      type: "single",
      options: [
        { id: "cbse", label: "CBSE (Central Board of Secondary Education)", desc: "NCERT-aligned curriculum ideal for JEE/NEET/CUET" },
        { id: "icse", label: "ICSE / ISC (CISCE)", desc: "Deep English literature and detailed foundational syllabus" },
        { id: "state", label: "State Board (Maharashtra, UP, Karnataka, etc.)", desc: "State CET focused with regional language options" },
        { id: "international", label: "IB / Cambridge (IGCSE) / Other", desc: "Inquiry-based international grading curriculum" }
      ]
    },
    {
      id: "favouriteSubjects",
      title: "Which are your favourite subjects in school?",
      subtitle: "Select the subjects you genuinely enjoy studying, even when exams aren't around.",
      type: "multi",
      options: [
        { id: "maths", label: "Mathematics & Numbers", icon: "calculator" },
        { id: "science", label: "Science (Physics / Chemistry)", icon: "zap" },
        { id: "biology", label: "Biology & Living Organisms", icon: "activity" },
        { id: "social", label: "Social Studies (History / Civics / Geography)", icon: "globe" },
        { id: "english", label: "English & Literature", icon: "book-open" },
        { id: "computer", label: "Computers & Coding", icon: "code" },
        { id: "arts", label: "Arts, Drawing & Design", icon: "feather" },
        { id: "commerce", label: "Business Studies & Economics", icon: "trending-up" }
      ]
    },
    {
      id: "highestMarksSubjects",
      title: "In which subjects do you consistently score the highest?",
      subtitle: "This reveals your academic strengths and natural aptitude.",
      type: "multi",
      options: [
        { id: "maths", label: "Mathematics" },
        { id: "science", label: "Science (Physics / Chemistry)" },
        { id: "biology", label: "Biology" },
        { id: "social", label: "Social Sciences" },
        { id: "english", label: "English / Languages" },
        { id: "computer", label: "Computer Science / IT" }
      ]
    },
    {
      id: "difficultSubjects",
      title: "Which subjects do you find difficult or least enjoy?",
      subtitle: "Being honest about your struggles allows us to recommend paths where you won't feel overwhelmed.",
      type: "multi",
      options: [
        { id: "maths", label: "Heavy Advanced Mathematics" },
        { id: "physics", label: "Physics & Formulas" },
        { id: "chemistry", label: "Organic Chemistry Reactions" },
        { id: "biology", label: "Biology Memorization & Diagrams" },
        { id: "social", label: "History Dates & Theory Memorization" },
        { id: "languages", label: "Language Grammar & Essays" },
        { id: "none", label: "I am comfortable with all subjects" }
      ]
    },
    {
      id: "interests",
      title: "What are your core interests, hobbies, and activities outside class?",
      subtitle: "Your passions outside books often point to your ideal long-term career fulfillment.",
      type: "multi",
      options: [
        { id: "coding", label: "Coding, gaming, hardware tinkering, or tech gadgets" },
        { id: "problemSolving", label: "Puzzles, chess, logic teasers, and math games" },
        { id: "creativity", label: "Sketching, graphic design, photography, or video editing" },
        { id: "speaking", label: "Public speaking, debating, MUNs, and social causes" },
        { id: "business", label: "Reading about startups, stock market, and making money" },
        { id: "healthcare", label: "Helping sick people, biology experiments, medical curiosity" },
        { id: "defence", label: "Sports, physical adventure, discipline, and military drills" },
        { id: "research", label: "Reading deep books, asking philosophical questions, writing" }
      ]
    },
    {
      id: "streamPreference",
      title: "Do you already have a stream inclination for Class 11?",
      subtitle: "It is 100% okay if you are confused! That's why HopeForScope is here.",
      type: "single",
      options: [
        { id: "confused", label: "I am still completely confused (Help me choose!)", badge: "badge-yellow" },
        { id: "science-pcm", label: "Science (PCM - Engineering / Tech focus)", badge: "badge-blue" },
        { id: "science-pcb", label: "Science (PCB - Medical / Life Sciences focus)", badge: "badge-green" },
        { id: "science-pcmb", label: "Science (PCMB - Keeping both open)", badge: "badge-lavender" },
        { id: "commerce", label: "Commerce (Business, CA, Finance)", badge: "badge-peach" },
        { id: "arts", label: "Arts & Humanities (Civil Services, Law, Policy, Media)", badge: "badge-lavender" },
        { id: "diploma", label: "Polytechnic / Vocational / Hands-on technical diploma", badge: "badge-blue" }
      ]
    },
    {
      id: "careerDomain",
      title: "Which broad career domain excites you most?",
      subtitle: "Where do you picture yourself making an impact in 5 to 10 years?",
      type: "single",
      options: [
        { id: "technical", label: "Technology & Software (AI, Cyber Security, Cloud, Web)" },
        { id: "medical", label: "Medical & Healthcare (Doctor, Biotech, Psychology)" },
        { id: "business", label: "Business, Finance, CA & Entrepreneurship" },
        { id: "governance", label: "Civil Services, Public Policy & Governance (IAS/IPS)" },
        { id: "defence", label: "Armed Forces & Defence (Army, Navy, Air Force via NDA)" },
        { id: "creative", label: "Creative Design, UX, Animation, Architecture & Media" },
        { id: "research", label: "Scientific Research & Deep Academic Discovery" },
        { id: "law", label: "Corporate Law, Judiciary & Human Rights" }
      ]
    },
    {
      id: "studyDestination",
      title: "Where do you envision pursuing your higher education?",
      subtitle: "We can guide you for both domestic admissions and global universities.",
      type: "single",
      options: [
        { id: "india", label: "In India (Top premier institutes like IITs, AIIMS, SRCC, NLUs)" },
        { id: "abroad", label: "Abroad (USA, Germany, UK, Canada, Australia)" },
        { id: "both", label: "Open to both (Undergraduate in India, Masters abroad)" }
      ]
    },
    {
      id: "budget",
      title: "What is your approximate annual education budget?",
      subtitle: "Every budget has world-class options, from tuition-free government scholarships to global colleges.",
      type: "single",
      options: [
        { id: "low", label: "Modest / Budget (< ₹1 Lakh / year) - Seeking Govt colleges & scholarships" },
        { id: "moderate", label: "Moderate (₹1 Lakh - ₹3 Lakhs / year)" },
        { id: "comfortable", label: "Substantial (₹3 Lakhs - ₹8 Lakhs / year)" },
        { id: "premium", label: "Premium / International (> ₹8 Lakhs / year)" }
      ]
    },
    {
      id: "learningMode",
      title: "How do you prefer to learn best?",
      subtitle: "Helps us recommend between rigorous classroom coaching, online flexibility, or hybrid models.",
      type: "single",
      options: [
        { id: "offline", label: "Offline Classroom (In-person teachers, campus peer environment)" },
        { id: "online", label: "Online / Self-Paced (Flexibility, home study, digital courses)" },
        { id: "hybrid", label: "Hybrid (Mix of weekend offline mentoring + online recorded lectures)" }
      ]
    }
  ];

  window.Class10Assessment = {
    questions: questions,
    currentIndex: 0,
    answers: {},

    start: function() {
      this.currentIndex = 0;
      this.answers = {};
      this.render();
    },

    render: function() {
      const container = document.getElementById("assessment-container");
      if (!container) return;

      const q = questions[this.currentIndex];
      const progressPercent = Math.round(((this.currentIndex + 1) / questions.length) * 100);

      let html = `
        <div class="card-white p-6 md:p-8 max-w-3xl mx-auto shadow-md">
          <!-- Stepper header -->
          <div class="flex items-center justify-between mb-4">
            <span class="badge badge-blue">Question ${this.currentIndex + 1} of ${questions.length}</span>
            <span class="text-xs font-semibold text-slate-500">${progressPercent}% Completed</span>
          </div>

          <!-- Progress bar -->
          <div class="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
            <div class="bg-[#7BA7E8] h-full transition-all duration-300 rounded-full" style="width: ${progressPercent}%"></div>
          </div>

          <!-- Question title -->
          <h2 class="text-2xl font-bold text-[#24324B] mb-2">${q.title}</h2>
          <p class="text-slate-500 text-sm mb-6">${q.subtitle}</p>

          <!-- Input Body -->
          <div class="assessment-input-body mb-8">
            ${this.renderInput(q)}
          </div>

          <!-- Navigation buttons -->
          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <button class="btn btn-secondary ${this.currentIndex === 0 ? 'opacity-50 pointer-events-none' : ''}" onclick="window.Class10Assessment.prev()">
              ← Previous
            </button>
            <div class="flex gap-3">
              ${q.optional ? `<button class="btn btn-secondary text-sm" onclick="window.Class10Assessment.skip()">Skip</button>` : ''}
              <button class="btn btn-primary" onclick="window.Class10Assessment.next()">
                ${this.currentIndex === questions.length - 1 ? 'Generate My Scope Report 🚀' : 'Next Step →'}
              </button>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    },

    renderInput: function(q) {
      const saved = this.answers[q.id];

      if (q.type === "text") {
        return `
          <input type="text" id="ans_${q.id}" class="form-input text-lg" placeholder="${q.placeholder}" value="${saved || ''}">
        `;
      }

      if (q.type === "marks") {
        return `
          <div class="mb-4">
            <label class="block text-sm font-semibold text-[#24324B] mb-2">Enter percentage directly or select a range below:</label>
            <div class="flex items-center gap-3">
              <input type="number" id="ans_marks_custom" class="form-input max-w-xs text-xl font-bold" min="30" max="100" placeholder="e.g. 84.5" value="${typeof saved === 'number' ? saved : ''}">
              <span class="text-lg font-bold text-slate-500">%</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            ${q.options.map(opt => `
              <div class="card-white p-3 cursor-pointer border hover:border-[#7BA7E8] transition-all flex items-center justify-between ${saved == opt.val ? 'border-[#7BA7E8] bg-blue-50/50' : ''}" onclick="document.getElementById('ans_marks_custom').value = ${opt.val};">
                <span class="font-medium text-sm text-[#24324B]">${opt.label}</span>
                <span class="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600 font-bold">~${opt.val}%</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      if (q.type === "location") {
        const loc = saved || { country: "India", state: "Delhi NCR", city: "", area: "" };
        return `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${q.fields.map(f => {
              if (f.type === "select") {
                return `
                  <div>
                    <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">${f.label}</label>
                    <select id="ans_loc_${f.id}" class="form-select">
                      ${f.options.map(opt => `<option value="${opt}" ${loc[f.id] === opt ? 'selected' : ''}>${opt}</option>`).join('')}
                    </select>
                  </div>
                `;
              } else {
                return `
                  <div>
                    <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">${f.label}</label>
                    <input type="text" id="ans_loc_${f.id}" class="form-input" placeholder="${f.placeholder}" value="${loc[f.id] || ''}">
                  </div>
                `;
              }
            }).join('')}
          </div>
        `;
      }

      if (q.type === "single") {
        return `
          <div class="space-y-3">
            ${q.options.map(opt => {
              const isSelected = saved === opt.id;
              return `
                <div class="card-white p-4 cursor-pointer border hover:border-[#7BA7E8] transition-all flex items-center justify-between ${isSelected ? 'border-[#7BA7E8] bg-[#DCEBFF]/20 shadow-sm' : ''}" onclick="window.Class10Assessment.selectSingle('${q.id}', '${opt.id}')">
                  <div>
                    <div class="font-semibold text-base text-[#24324B]">${opt.label}</div>
                    ${opt.desc ? `<div class="text-xs text-slate-500 mt-0.5">${opt.desc}</div>` : ''}
                  </div>
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-[#7BA7E8] bg-[#7BA7E8]' : 'border-slate-300'}">
                    ${isSelected ? '<div class="w-2 h-2 rounded-full bg-white"></div>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      if (q.type === "multi") {
        const selectedArr = saved || [];
        return `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${q.options.map(opt => {
              const isChecked = selectedArr.includes(opt.id);
              return `
                <div class="card-white p-3 cursor-pointer border hover:border-[#7BA7E8] transition-all flex items-center justify-between ${isChecked ? 'border-[#7BA7E8] bg-[#DCEBFF]/30 shadow-sm' : ''}" onclick="window.Class10Assessment.toggleMulti('${q.id}', '${opt.id}')">
                  <div class="flex items-center gap-2">
                    <span class="font-medium text-sm text-[#24324B]">${opt.label}</span>
                  </div>
                  <div class="w-5 h-5 rounded-md border flex items-center justify-center ${isChecked ? 'bg-[#7BA7E8] border-[#7BA7E8] text-white' : 'border-slate-300'}">
                    ${isChecked ? '✓' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      return ``;
    },

    selectSingle: function(qId, val) {
      this.answers[qId] = val;
      this.render();
    },

    toggleMulti: function(qId, val) {
      if (!this.answers[qId]) this.answers[qId] = [];
      const index = this.answers[qId].indexOf(val);
      if (index > -1) {
        this.answers[qId].splice(index, 1);
      } else {
        this.answers[qId].push(val);
      }
      this.render();
    },

    captureCurrentAnswer: function() {
      const q = questions[this.currentIndex];
      if (q.type === "text") {
        const el = document.getElementById("ans_" + q.id);
        if (el) this.answers[q.id] = el.value.trim();
      } else if (q.type === "marks") {
        const el = document.getElementById("ans_marks_custom");
        if (el && el.value) {
          this.answers[q.id] = parseFloat(el.value);
        }
      } else if (q.type === "location") {
        this.answers[q.id] = {
          country: document.getElementById("ans_loc_country")?.value || "India",
          state: document.getElementById("ans_loc_state")?.value || "Delhi NCR",
          city: document.getElementById("ans_loc_city")?.value || "",
          area: document.getElementById("ans_loc_area")?.value || ""
        };
      }
    },

    next: function() {
      this.captureCurrentAnswer();
      const q = questions[this.currentIndex];

      if (!q.optional && !this.answers[q.id]) {
        // Warning if required field empty
        alert("Please provide an answer before continuing to ensure your recommendation is accurate!");
        return;
      }

      if (this.currentIndex < questions.length - 1) {
        this.currentIndex++;
        this.render();
      } else {
        this.generateReport();
      }
    },

    prev: function() {
      this.captureCurrentAnswer();
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.render();
      }
    },

    skip: function() {
      if (this.currentIndex < questions.length - 1) {
        this.currentIndex++;
        this.render();
      } else {
        this.generateReport();
      }
    },

    generateReport: function() {
      const answers = this.answers;
      const studentName = answers.name || "Student";
      const marks = answers.marks || 75;
      const domain = answers.careerDomain || "technical";
      const fav = answers.favouriteSubjects || [];
      const diff = answers.difficultSubjects || [];
      const streamPref = answers.streamPreference || "confused";
      const interests = answers.interests || [];

      // Recommendation Scoring Engine for Streams
      const streams = window.STREAMS_DATA.map(stream => {
        let score = 70; // baseline

        if (stream.id === "science-pcm") {
          if (fav.includes("maths") || fav.includes("science") || fav.includes("computer")) score += 20;
          if (diff.includes("maths") || diff.includes("physics")) score -= 25;
          if (domain === "technical" || domain === "defence" || domain === "research") score += 15;
          if (interests.includes("coding") || interests.includes("problemSolving")) score += 15;
        } else if (stream.id === "science-pcb") {
          if (fav.includes("biology") || fav.includes("science")) score += 25;
          if (diff.includes("biology")) score -= 30;
          if (domain === "medical") score += 30;
          if (interests.includes("healthcare")) score += 20;
        } else if (stream.id === "science-pcmb") {
          if (fav.includes("biology") && fav.includes("maths")) score += 30;
          if (diff.includes("maths") || diff.includes("biology")) score -= 20;
          if (domain === "research" || domain === "technical" || domain === "medical") score += 10;
        } else if (stream.id === "commerce-maths") {
          if (fav.includes("commerce") || fav.includes("maths")) score += 25;
          if (domain === "business" || domain === "law") score += 20;
          if (interests.includes("business") || interests.includes("problemSolving")) score += 15;
          if (diff.includes("maths")) score -= 25;
        } else if (stream.id === "commerce-no-maths") {
          if (fav.includes("commerce") || fav.includes("social")) score += 20;
          if (diff.includes("maths")) score += 25;
          if (domain === "business" || domain === "law") score += 15;
        } else if (stream.id === "arts-humanities") {
          if (fav.includes("social") || fav.includes("english") || fav.includes("arts")) score += 25;
          if (domain === "governance" || domain === "law" || domain === "creative") score += 25;
          if (interests.includes("speaking") || interests.includes("creativity") || interests.includes("research")) score += 20;
        } else if (stream.id === "diploma-polytechnic" || stream.id === "vocational-skills") {
          if (fav.includes("computer") || fav.includes("arts") || streamPref === "diploma") score += 25;
          if (answers.budget === "low") score += 15;
        }

        return { ...stream, matchScore: Math.min(Math.max(score, 45), 98) };
      });

      // Sort by score
      streams.sort((a, b) => b.matchScore - a.matchScore);
      const topStream = streams[0];

      // Personalized Career Matching
      const matchedCareers = window.CAREERS_DATA.map(c => {
        let careerScore = 65;
        if (domain === "technical" && (c.category === "tech" || c.category === "emerging")) careerScore += 25;
        if (domain === "medical" && c.category === "medical") careerScore += 25;
        if (domain === "business" && c.category === "commerce") careerScore += 25;
        if (domain === "governance" && c.category === "govt") careerScore += 25;
        if (domain === "defence" && (c.id === "defence-officer-nda" || c.category === "govt")) careerScore += 30;
        if (domain === "creative" && c.category === "design") careerScore += 30;

        if (fav.includes("maths") && (c.id === "data-scientist" || c.id === "software-engineer" || c.id === "chartered-accountant")) careerScore += 15;
        if (interests.includes("coding") && (c.id === "cybersecurity-engineer" || c.id === "software-engineer" || c.id === "artificial-intelligence-engineer")) careerScore += 20;
        if (interests.includes("healthcare") && (c.id === "doctor-mbbs" || c.id === "biotechnology-bioinformatics" || c.id === "clinical-psychologist")) careerScore += 20;

        return { ...c, matchScore: Math.min(Math.max(careerScore, 50), 99) };
      }).sort((a, b) => b.matchScore - a.matchScore);

      const topCareers = matchedCareers.slice(0, 4);

      // Save report in state for dashboard persistence
      const reportData = {
        id: "rep-10-" + Date.now(),
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        type: "Class 10 Discovery",
        studentName: studentName,
        marks: marks,
        topStream: topStream.name,
        topScore: topStream.matchScore,
        answers: answers,
        recommendedCareers: topCareers.map(c => c.title)
      };

      if (window.StudentStore) {
        window.StudentStore.saveReport(reportData);
      }

      // Render Report UI
      const container = document.getElementById("assessment-container");
      container.innerHTML = `
        <div class="printable-report max-w-4xl mx-auto space-y-8 pb-16">
          <!-- Report Header Banner -->
          <div class="card-white p-6 md:p-8 bg-gradient-to-br from-[#DCEBFF]/40 via-[#EAE0FF]/30 to-white border border-[#7BA7E8]/30">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
              <div>
                <span class="badge badge-blue mb-2">Personalized Scope Analysis • Class 10</span>
                <h1 class="text-3xl font-bold text-[#24324B]">Career Guidance Report for ${studentName}</h1>
                <p class="text-sm text-slate-500 mt-1">Class 10 Marks: <strong class="text-[#24324B]">${marks}%</strong> | Board: <strong class="text-[#24324B]">${(answers.board || 'CBSE').toUpperCase()}</strong> | Generated on: ${reportData.date}</p>
              </div>
              <div class="flex gap-2 no-print">
                <button class="btn btn-secondary text-sm" onclick="window.print()">🖨️ Print / Download PDF</button>
                <button class="btn btn-primary text-sm" onclick="window.ScopeBot.openWithContext('I just finished my Class 10 assessment. My top recommended stream is ${topStream.name}. Can you explain more?')">💬 Ask ScopeBot</button>
              </div>
            </div>

            <!-- Key Philosophy Callout -->
            <div class="mt-6 p-4 rounded-xl bg-white/80 border border-slate-100 flex items-start gap-3">
              <span class="text-2xl">💡</span>
              <div>
                <h4 class="font-bold text-[#24324B] text-sm">HopeForScope Guidance Compass</h4>
                <p class="text-xs text-slate-600 mt-0.5">Based on your scored strengths in <strong>${(fav.length ? fav.join(', ') : 'analytical reasoning')}</strong> and your interest in <strong>${domain}</strong>, we have prioritized your highest-fit stream and career pathways below.</p>
              </div>
            </div>
          </div>

          <!-- Section A: Top Recommended Stream -->
          <div class="card-white p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-[#24324B]">A. Stream Recommendations for Class 11 & 12</h2>
              <span class="badge badge-green text-sm">#1 Top Match: ${topStream.matchScore}% Compatibility</span>
            </div>

            <div class="${topStream.cardClass} p-6 rounded-2xl mb-6">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-[#24324B]">${topStream.name}</h3>
                <span class="badge badge-blue font-bold">${topStream.matchScore}% Fit</span>
              </div>
              <p class="text-slate-600 mt-2 text-sm">${topStream.description}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div class="bg-white/80 p-4 rounded-xl border border-slate-100">
                  <h4 class="font-bold text-xs uppercase text-slate-500 mb-2">Core Subjects Studied</h4>
                  <ul class="text-xs text-slate-700 space-y-1">
                    ${topStream.subjects.map(s => `<li>• ${s}</li>`).join('')}
                  </ul>
                </div>
                <div class="bg-white/80 p-4 rounded-xl border border-slate-100">
                  <h4 class="font-bold text-xs uppercase text-slate-500 mb-2">Key Entrance Examinations</h4>
                  <ul class="text-xs text-slate-700 space-y-1">
                    ${topStream.entranceExams.map(e => `<li>• ${e}</li>`).join('')}
                  </ul>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-xs">
                <div class="bg-white/90 p-3 rounded-xl border border-slate-100">
                  <strong class="text-emerald-800">Key Advantages:</strong>
                  <p class="text-slate-600 mt-1">${topStream.pros[0]}</p>
                </div>
                <div class="bg-white/90 p-3 rounded-xl border border-slate-100">
                  <strong class="text-amber-800">Watch Out For:</strong>
                  <p class="text-slate-600 mt-1">${topStream.cons[0]}</p>
                </div>
                <div class="bg-white/90 p-3 rounded-xl border border-slate-100">
                  <strong class="text-blue-800">Approx Education Cost:</strong>
                  <p class="text-slate-600 mt-1">${topStream.approxCost}</p>
                </div>
              </div>
            </div>

            <!-- Alternative Streams Comparison -->
            <h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Other Stream Options Evaluated for You</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${streams.slice(1, 5).map(s => `
                <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between hover:bg-white transition-all cursor-pointer" onclick="window.AppRouter.openStreamDetail('${s.id}')">
                  <div>
                    <h5 class="font-semibold text-sm text-[#24324B]">${s.name}</h5>
                    <span class="text-xs text-slate-500">${s.careers.slice(0, 2).join(', ')}</span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-bold text-slate-600">${s.matchScore}%</span>
                    <div class="text-[10px] text-blue-600 font-medium">Explore →</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section B: Personalized Career Recommendations -->
          <div class="card-white p-6 md:p-8">
            <h2 class="text-xl font-bold text-[#24324B] mb-2">B. Personalized Career Recommendations</h2>
            <p class="text-sm text-slate-500 mb-6">Matched to your aptitude, strengths, and stated preference for ${domain} careers.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${topCareers.map(c => `
                <div class="${c.cardClass} p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-2">
                      <span class="badge ${c.badgeClass}">${c.scopeType.toUpperCase()}</span>
                      <span class="text-xs font-bold text-slate-600">${c.matchScore}% Match</span>
                    </div>
                    <h3 class="font-bold text-lg text-[#24324B]">${c.title}</h3>
                    <p class="text-xs text-slate-600 mt-1 line-clamp-2">${c.shortSummary}</p>
                    <div class="mt-3 text-xs bg-white/70 p-2.5 rounded-lg border border-slate-100">
                      <span class="text-slate-500">Starting Salary (India):</span>
                      <strong class="text-[#24324B] block">${c.salaryRanges.india.entry}</strong>
                    </div>
                  </div>
                  <div class="mt-4 pt-3 border-t border-slate-200/40 flex items-center justify-between">
                    <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openCareerModal('${c.id}')">Deep Dive Profile →</button>
                    <button class="btn btn-secondary py-1 px-3 text-xs" onclick="window.StudentStore.bookmarkCareer('${c.id}')">★ Save</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section C: Step-by-Step Educational Roadmap -->
          <div class="card-white p-6 md:p-8">
            <h2 class="text-xl font-bold text-[#24324B] mb-2">C. Your Step-by-Step Educational Journey</h2>
            <p class="text-sm text-slate-500 mb-6">Clear timeline from today in Class 10 to reaching your professional dream.</p>

            <div class="pl-2">
              ${topCareers[0].roadmap.map((step, idx) => `
                <div class="roadmap-step">
                  <div class="roadmap-step-dot">${idx + 1}</div>
                  <h4 class="font-bold text-[#24324B] text-base">${step.title}</h4>
                  <p class="text-sm text-slate-600 mt-0.5">${step.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Coaching Institutes Nearby Recommendation -->
          <div class="card-white p-6 md:p-8 bg-blue-50/30 border border-blue-100">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 class="text-lg font-bold text-[#24324B]">📍 Recommended Coaching & Training Near ${answers.location?.city || answers.location?.state || 'Your City'}</h3>
                <p class="text-xs text-slate-500">Verified training institutes for ${topStream.entranceExams[0]?.split(' ')[0] || 'your target entrance exams'}.</p>
              </div>
              <button class="btn btn-primary text-xs" onclick="window.AppRouter.navigate('coaching')">View All Institutes Near Me →</button>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 no-print">
            <button class="btn btn-secondary" onclick="window.Class10Assessment.start()">↺ Retake Assessment</button>
            <button class="btn btn-primary" onclick="window.AppRouter.navigate('dashboard')">Go to My Student Dashboard 📊</button>
          </div>
        </div>
      `;
    }
  };
})();
