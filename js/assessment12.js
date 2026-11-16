// HopeForScope - Class 12 Interactive Career & Course Discovery Engine
(function() {
  const questions12 = [
    {
      id: "marks12",
      title: "What is your Class 12 score or expected percentage?",
      subtitle: "HopeForScope Philosophy: Your marks help guide your best path, never limit your potential.",
      type: "marks",
      placeholder: "e.g. 82.4",
      options: [
        { label: "Above 90% (Top Tier eligibility)", val: 93 },
        { label: "75% - 89% (Strong competitive eligibility)", val: 82 },
        { label: "60% - 74% (Broad degree eligibility)", val: 68 },
        { label: "50% - 59% (Standard passing eligibility)", val: 55 },
        { label: "Below 50% (Exploring direct skill & diploma paths)", val: 46 }
      ]
    },
    {
      id: "stream12",
      title: "Which stream did you study in Class 12?",
      subtitle: "Select your main academic branch.",
      type: "single",
      options: [
        { id: "pcm", label: "Science (PCM - Physics, Chemistry, Maths)", badge: "badge-blue" },
        { id: "pcb", label: "Science (PCB - Physics, Chemistry, Biology)", badge: "badge-green" },
        { id: "pcmb", label: "Science (PCMB - All Four)", badge: "badge-lavender" },
        { id: "commerce-math", label: "Commerce with Mathematics", badge: "badge-peach" },
        { id: "commerce-no-math", label: "Commerce without Mathematics", badge: "badge-yellow" },
        { id: "arts", label: "Arts / Humanities", badge: "badge-lavender" },
        { id: "vocational", label: "Vocational / Technical trade", badge: "badge-blue" }
      ]
    },
    {
      id: "strongWeak",
      title: "What are your strongest and weakest subjects?",
      subtitle: "Helps us filter out courses that depend heavily on subjects you dislike.",
      type: "strongWeak",
      subjectsList: ["Mathematics", "Physics", "Chemistry", "Biology", "Accountancy", "Economics", "Computer Science / IT", "English / Literature", "History / Pol Science"]
    },
    {
      id: "interests12",
      title: "What kind of work or career excites you?",
      subtitle: "Choose all domains you feel drawn to.",
      type: "multi",
      options: [
        { id: "software", label: "Software, Coding, AI & Cloud Computing" },
        { id: "cybersecurity", label: "Ethical Hacking, Cyber Defense & Forensics" },
        { id: "medical", label: "Clinical Medicine, Surgery & Patient Healthcare" },
        { id: "finance", label: "Chartered Accountancy, Investment Banking & FinTech" },
        { id: "law", label: "Corporate Law, International Arbitration & Justice" },
        { id: "design", label: "UX/UI Design, Product Design & Creative Animation" },
        { id: "defence", label: "Armed Forces Officer (Army, Navy, Air Force) / Aviation" },
        { id: "civil", label: "Civil Services, Public Policy & Government Administration" },
        { id: "biotech", label: "Biotechnology, Genetics & Environmental Research" }
      ]
    },
    {
      id: "countryPref",
      title: "Where would you prefer to pursue higher education?",
      subtitle: "We analyze admission requirements for Indian colleges and international universities.",
      type: "single",
      options: [
        { id: "india-only", label: "India Only (Focus on IITs, NITs, AIIMS, SRCC, NLUs, etc.)" },
        { id: "germany", label: "Germany / Europe (Low or zero tuition fees + strong post-study work)" },
        { id: "usa-canada", label: "USA / Canada / UK (Global research powerhouses & corporate tech hubs)" },
        { id: "australia", label: "Australia / Ireland / Singapore (High minimum wage & post-study visa)" },
        { id: "open", label: "Open to suggestions based on my budget and marks" }
      ]
    },
    {
      id: "timelineGoal",
      title: "What is your priority timeline for starting a job?",
      subtitle: "Some students want to earn quickly; others are eager to invest 5+ years into deep degrees.",
      type: "single",
      options: [
        { id: "quick-job", label: "I want a job quickly (1-3 years via diploma, fast-track skill certifications)" },
        { id: "standard-degree", label: "Standard degree (3-4 years Bachelor's followed by campus placement)" },
        { id: "deep-study", label: "Willing to study 5-8 years (Medicine, Master's, Law, UPSC, Research)" }
      ]
    },
    {
      id: "budget12",
      title: "What is your approximate annual higher education budget?",
      subtitle: "We include government colleges, loan options, and scholarships for every tier.",
      type: "single",
      options: [
        { id: "low", label: "Below ₹1 Lakh / year (Govt institutions & 100% scholarship schemes)" },
        { id: "moderate", label: "₹1 Lakh - ₹3 Lakhs / year (Standard state and aided universities)" },
        { id: "comfort", label: "₹3 Lakhs - ₹8 Lakhs / year (Top private Indian universities / BITS / VIT)" },
        { id: "international", label: "Above ₹8 Lakhs / year (Global education or premium private)" }
      ]
    }
  ];

  window.Class12Assessment = {
    questions: questions12,
    currentIndex: 0,
    answers: {},

    start: function() {
      this.currentIndex = 0;
      this.answers = {};
      this.render();
    },

    render: function() {
      const container = document.getElementById("assessment12-container");
      if (!container) return;

      const q = questions12[this.currentIndex];
      const progressPercent = Math.round(((this.currentIndex + 1) / questions12.length) * 100);

      let html = `
        <div class="card-white p-6 md:p-8 max-w-3xl mx-auto shadow-md">
          <div class="flex items-center justify-between mb-4">
            <span class="badge badge-lavender">Class 12 Pathway Navigator • Step ${this.currentIndex + 1} of ${questions12.length}</span>
            <span class="text-xs font-semibold text-slate-500">${progressPercent}% Completed</span>
          </div>

          <div class="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
            <div class="bg-[#BBA2F5] h-full transition-all duration-300 rounded-full" style="width: ${progressPercent}%"></div>
          </div>

          <h2 class="text-2xl font-bold text-[#24324B] mb-2">${q.title}</h2>
          <p class="text-slate-500 text-sm mb-6">${q.subtitle}</p>

          <div class="assessment-input-body mb-8">
            ${this.renderInput(q)}
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <button class="btn btn-secondary ${this.currentIndex === 0 ? 'opacity-50 pointer-events-none' : ''}" onclick="window.Class12Assessment.prev()">
              ← Previous
            </button>
            <button class="btn btn-primary" onclick="window.Class12Assessment.next()">
              ${this.currentIndex === questions12.length - 1 ? 'Unlock My Course Pathways 🎓' : 'Continue →'}
            </button>
          </div>
        </div>
      `;

      container.innerHTML = html;
    },

    renderInput: function(q) {
      const saved = this.answers[q.id];

      if (q.type === "marks") {
        return `
          <div class="mb-4">
            <div class="flex items-center gap-3">
              <input type="number" id="ans12_marks" class="form-input max-w-xs text-xl font-bold" min="35" max="100" placeholder="e.g. 84.5" value="${typeof saved === 'number' ? saved : ''}">
              <span class="text-lg font-bold text-slate-500">% in Class 12</span>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            ${q.options.map(opt => `
              <div class="card-white p-3 cursor-pointer border hover:border-[#7BA7E8] transition-all flex items-center justify-between ${saved == opt.val ? 'border-[#7BA7E8] bg-purple-50/50' : ''}" onclick="document.getElementById('ans12_marks').value = ${opt.val};">
                <span class="font-medium text-sm text-[#24324B]">${opt.label}</span>
                <span class="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600 font-bold">~${opt.val}%</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      if (q.type === "single") {
        return `
          <div class="space-y-3">
            ${q.options.map(opt => {
              const isSelected = saved === opt.id;
              return `
                <div class="card-white p-4 cursor-pointer border hover:border-[#7BA7E8] transition-all flex items-center justify-between ${isSelected ? 'border-[#7BA7E8] bg-[#EAE0FF]/30 shadow-sm' : ''}" onclick="window.Class12Assessment.selectSingle('${q.id}', '${opt.id}')">
                  <div class="font-semibold text-base text-[#24324B]">${opt.label}</div>
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-[#7BA7E8] bg-[#7BA7E8]' : 'border-slate-300'}">
                    ${isSelected ? '<div class="w-2 h-2 rounded-full bg-white"></div>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      if (q.type === "strongWeak") {
        const sw = saved || { strong: [], weak: [] };
        return `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/20">
              <h4 class="font-bold text-sm text-emerald-900 mb-3 flex items-center gap-1.5">
                <span>🌟</span> Strongest Subjects (Click to toggle)
              </h4>
              <div class="space-y-2">
                ${q.subjectsList.map(subj => {
                  const isChecked = sw.strong.includes(subj);
                  return `
                    <div class="p-2 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${isChecked ? 'bg-emerald-100 border-emerald-300 text-emerald-900' : 'bg-white border-slate-200 text-slate-600'}" onclick="window.Class12Assessment.toggleSW('strong', '${subj}')">
                      ${isChecked ? '✓ ' : '+ '}${subj}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="p-4 rounded-xl border border-amber-100 bg-amber-50/20">
              <h4 class="font-bold text-sm text-amber-900 mb-3 flex items-center gap-1.5">
                <span>⚠️</span> Weakest / Hardest Subjects (Click to toggle)
              </h4>
              <div class="space-y-2">
                ${q.subjectsList.map(subj => {
                  const isChecked = sw.weak.includes(subj);
                  return `
                    <div class="p-2 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${isChecked ? 'bg-amber-100 border-amber-300 text-amber-900' : 'bg-white border-slate-200 text-slate-600'}" onclick="window.Class12Assessment.toggleSW('weak', '${subj}')">
                      ${isChecked ? '✓ ' : '+ '}${subj}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
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
                <div class="card-white p-3 cursor-pointer border hover:border-[#7BA7E8] transition-all flex items-center justify-between ${isChecked ? 'border-[#7BA7E8] bg-[#EAE0FF]/40 shadow-sm' : ''}" onclick="window.Class12Assessment.toggleMulti('${q.id}', '${opt.id}')">
                  <span class="font-medium text-sm text-[#24324B]">${opt.label}</span>
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

    toggleSW: function(type, subj) {
      if (!this.answers.strongWeak) {
        this.answers.strongWeak = { strong: [], weak: [] };
      }
      const arr = this.answers.strongWeak[type];
      const idx = arr.indexOf(subj);
      if (idx > -1) {
        arr.splice(idx, 1);
      } else {
        arr.push(subj);
        // Remove from other type if present
        const otherType = type === 'strong' ? 'weak' : 'strong';
        const otherIdx = this.answers.strongWeak[otherType].indexOf(subj);
        if (otherIdx > -1) this.answers.strongWeak[otherType].splice(otherIdx, 1);
      }
      this.render();
    },

    captureCurrentAnswer: function() {
      const q = questions12[this.currentIndex];
      if (q.type === "marks") {
        const el = document.getElementById("ans12_marks");
        if (el && el.value) {
          this.answers[q.id] = parseFloat(el.value);
        }
      }
    },

    next: function() {
      this.captureCurrentAnswer();
      const q = questions12[this.currentIndex];
      if (!this.answers[q.id]) {
        alert("Please select or enter an option to continue!");
        return;
      }
      if (this.currentIndex < questions12.length - 1) {
        this.currentIndex++;
        this.render();
      } else {
        this.generateReport12();
      }
    },

    prev: function() {
      this.captureCurrentAnswer();
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.render();
      }
    },

    generateReport12: function() {
      const answers = this.answers;
      const marks = answers.marks12 || 75;
      const stream = answers.stream12 || "pcm";
      const timeline = answers.timelineGoal || "standard-degree";
      const interests = answers.interests12 || [];

      // Categorized course recommendations
      const courses = window.COURSES_DATA || [];

      const degrees = courses.filter(c => c.category === "degree");
      const emerging = courses.filter(c => c.category === "emerging");
      const professional = courses.filter(c => c.category === "professional");
      const diplomas = courses.filter(c => c.category === "diploma");
      const govt = courses.filter(c => c.category === "government");

      const container = document.getElementById("assessment12-container");
      container.innerHTML = `
        <div class="printable-report max-w-5xl mx-auto space-y-8 pb-16">
          <!-- Report Header -->
          <div class="card-white p-6 md:p-8 bg-gradient-to-br from-[#EAE0FF]/40 via-[#DCEBFF]/30 to-white border border-[#BBA2F5]/30">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
              <div>
                <span class="badge badge-lavender mb-2">Class 12 Specialized Career & Course Matrix</span>
                <h1 class="text-3xl font-bold text-[#24324B]">Your Higher Education Blueprint</h1>
                <p class="text-sm text-slate-500 mt-1">Class 12 Stream: <strong class="text-[#24324B]">${stream.toUpperCase()}</strong> | Score: <strong class="text-[#24324B]">${marks}%</strong> | Timeline: <strong class="text-[#24324B]">${timeline}</strong></p>
              </div>
              <div class="flex gap-2 no-print">
                <button class="btn btn-secondary text-sm" onclick="window.print()">🖨️ Print Report</button>
                <button class="btn btn-primary text-sm" onclick="window.ScopeBot.openWithContext('I just finished my Class 12 assessment with ${marks}% in ${stream}. What degree or professional pathway do you recommend?')">💬 Consult ScopeBot</button>
              </div>
            </div>

            <div class="mt-4 text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
              <span>🎯 HopeForScope Philosophy: Recommendations customized to your subject strengths, timeline, and education budget.</span>
              <button class="text-[#7BA7E8] font-bold text-xs" onclick="window.AppRouter.navigate('globalscope')">Explore Study Abroad Options →</button>
            </div>
          </div>

          <!-- Section 1: Degree Courses -->
          <div class="card-white p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-[#24324B]">1. Recommended Degree Courses</h2>
              <span class="badge badge-blue text-xs">${degrees.length} Options Found</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${degrees.map(c => this.renderCourseCard(c)).join('')}
            </div>
          </div>

          <!-- Section 2: Emerging Technology Courses -->
          <div class="card-white p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-[#24324B]">2. Emerging Technology & Future-Oriented Courses</h2>
              <span class="badge badge-lavender text-xs">FutureScope</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${emerging.map(c => this.renderCourseCard(c)).join('')}
            </div>
          </div>

          <!-- Section 3: Professional & Fast-Track Courses -->
          <div class="card-white p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-[#24324B]">3. Professional & Statutory Courses (CA / Law / Govt)</h2>
              <span class="badge badge-peach text-xs">High Career Prestige</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${professional.concat(govt).map(c => this.renderCourseCard(c)).join('')}
            </div>
          </div>

          <!-- Section 4: Diploma & Skill-Based Programs -->
          <div class="card-white p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-[#24324B]">4. Diploma, Polytechnic & Fast-Track Earning Pathways</h2>
              <span class="badge badge-yellow text-xs">Job-Ready in 2-3 Years</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${diplomas.map(c => this.renderCourseCard(c)).join('')}
            </div>
          </div>

          <!-- Section 5: International Education Comparison -->
          <div class="card-white p-6 md:p-8 bg-blue-50/20 border border-blue-100">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 class="text-xl font-bold text-[#24324B]">5. Global Opportunities for ${stream.toUpperCase()} Students</h2>
                <p class="text-xs text-slate-500">Compare tuition fees, visa work rights, and popular countries based on your budget.</p>
              </div>
              <button class="btn btn-primary text-xs" onclick="window.AppRouter.navigate('globalscope')">Open GlobalScope Interactive Comparison →</button>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="flex items-center justify-center gap-4 pt-6 no-print">
            <button class="btn btn-secondary" onclick="window.Class12Assessment.start()">↺ Retake Class 12 Assessment</button>
            <button class="btn btn-primary" onclick="window.AppRouter.navigate('compare')">Compare Two Careers Side-by-Side ⚖️</button>
          </div>
        </div>
      `;
    },

    renderCourseCard: function(c) {
      return `
        <div class="${c.cardClass} p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="badge ${c.badgeClass}">${c.duration}</span>
              <span class="text-xs font-semibold text-slate-500">${c.approxFees.split(';')[0]}</span>
            </div>
            <h3 class="font-bold text-lg text-[#24324B]">${c.name}</h3>
            
            <div class="mt-3 space-y-1.5 text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-100">
              <div><strong class="text-slate-800">Eligibility:</strong> ${c.eligibility} (${c.minPercentage})</div>
              <div><strong class="text-slate-800">Key Exams:</strong> ${c.entranceExams.slice(0, 3).join(', ')}</div>
              <div><strong class="text-slate-800">Starting Salary (India):</strong> ${c.expectedSalary.india.entry}</div>
            </div>

            <div class="mt-3 text-xs text-slate-500">
              <strong class="text-emerald-800">Advantage:</strong> ${c.pros[0]}
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between">
            <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openCourseDetail('${c.id}')">Full Course Syllabus & Colleges →</button>
            <button class="btn btn-secondary py-1 px-3 text-xs" onclick="window.StudentStore.bookmarkCourse('${c.id}')">★ Save</button>
          </div>
        </div>
      `;
    }
  };
})();
