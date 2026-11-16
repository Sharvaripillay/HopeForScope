// HopeForScope - Career Comparison Engine with Personalized AI Verdict
(function() {
  window.CareerComparison = {
    careerA: null,
    careerB: null,

    init: function() {
      // Default to Cybersecurity vs Software Engineering
      const allCareers = window.CAREERS_DATA || [];
      this.careerA = allCareers.find(c => c.id === "cybersecurity-engineer") || allCareers[0];
      this.careerB = allCareers.find(c => c.id === "software-engineer") || allCareers[1];
      this.render();
    },

    setCareer: function(slot, careerId) {
      const career = window.CAREERS_DATA.find(c => c.id === careerId);
      if (slot === 'A') this.careerA = career;
      if (slot === 'B') this.careerB = career;
      this.render();
    },

    setPreset: function(idA, idB) {
      this.careerA = window.CAREERS_DATA.find(c => c.id === idA);
      this.careerB = window.CAREERS_DATA.find(c => c.id === idB);
      this.render();
    },

    render: function() {
      const container = document.getElementById("comparison-container");
      if (!container) return;

      const cA = this.careerA;
      const cB = this.careerB;
      const all = window.CAREERS_DATA || [];

      let html = `
        <div class="space-y-8 max-w-5xl mx-auto">
          <!-- Comparison Hero & Selector -->
          <div class="card-white p-6 md:p-8 text-center bg-gradient-to-r from-blue-50/50 via-purple-50/40 to-white">
            <span class="badge badge-blue mb-2">HopeForScope Analytical Matrix</span>
            <h1 class="text-3xl font-bold text-[#24324B]">Side-by-Side Career Comparison Tool</h1>
            <p class="text-sm text-slate-500 max-w-2xl mx-auto mt-2">
              Unbiased, objective side-by-side analysis of educational investments, work-life realities, market compensations, and personal compatibility.
            </p>

            <!-- Quick Presets -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span class="text-xs font-semibold text-slate-500">Popular Comparisons:</span>
              <button class="badge badge-gray hover:bg-[#DCEBFF] cursor-pointer" onclick="window.CareerComparison.setPreset('cybersecurity-engineer', 'software-engineer')">Cybersecurity vs Software Dev</button>
              <button class="badge badge-gray hover:bg-[#FFE7D9] cursor-pointer" onclick="window.CareerComparison.setPreset('chartered-accountant', 'investment-banker')">CA vs Investment Banker</button>
              <button class="badge badge-gray hover:bg-[#DDF5E8] cursor-pointer" onclick="window.CareerComparison.setPreset('doctor-mbbs', 'biotechnology-bioinformatics')">Doctor (MBBS) vs Bioinformatics</button>
              <button class="badge badge-gray hover:bg-[#EAE0FF] cursor-pointer" onclick="window.CareerComparison.setPreset('corporate-lawyer', 'civil-services-ias')">Corporate Lawyer vs IAS Officer</button>
              <button class="badge badge-gray hover:bg-[#EAE0FF] cursor-pointer" onclick="window.CareerComparison.setPreset('product-designer-ux', 'artificial-intelligence-engineer')">UX Designer vs AI Engineer</button>
            </div>

            <!-- Dropdown Selectors -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto text-left">
              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <label class="block text-xs font-bold uppercase text-slate-500 mb-2">Option A Career</label>
                <select class="form-select text-base font-bold text-[#24324B]" onchange="window.CareerComparison.setCareer('A', this.value)">
                  ${all.map(c => `<option value="${c.id}" ${cA.id === c.id ? 'selected' : ''}>${c.title}</option>`).join('')}
                </select>
              </div>

              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <label class="block text-xs font-bold uppercase text-slate-500 mb-2">Option B Career</label>
                <select class="form-select text-base font-bold text-[#24324B]" onchange="window.CareerComparison.setCareer('B', this.value)">
                  ${all.map(c => `<option value="${c.id}" ${cB.id === c.id ? 'selected' : ''}>${c.title}</option>`).join('')}
                </select>
              </div>
            </div>
          </div>

          <!-- Comparison Table -->
          <div class="card-white overflow-hidden shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 border-b border-slate-100">
              <div class="p-6 ${cA.cardClass} border-r border-slate-100">
                <span class="badge ${cA.badgeClass} mb-2">${cA.scopeType.toUpperCase()}</span>
                <h3 class="text-2xl font-bold text-[#24324B]">${cA.title}</h3>
                <p class="text-xs text-slate-600 mt-1">${cA.shortSummary}</p>
              </div>
              <div class="p-6 ${cB.cardClass}">
                <span class="badge ${cB.badgeClass} mb-2">${cB.scopeType.toUpperCase()}</span>
                <h3 class="text-2xl font-bold text-[#24324B]">${cB.title}</h3>
                <p class="text-xs text-slate-600 mt-1">${cB.shortSummary}</p>
              </div>
            </div>

            <!-- Comparison Rows -->
            ${this.renderComparisonRow("Required Degree & Education", cA.requiredQualifications, cB.requiredQualifications)}
            ${this.renderComparisonRow("Eligibility & Subjects", cA.eligibilityAndMarks, cB.eligibilityAndMarks)}
            ${this.renderComparisonRow("Key Entrance Exams", cA.entranceExams.join(', '), cB.entranceExams.join(', '))}
            ${this.renderComparisonRow("Core Technical Skills", cA.requiredSkills.technical.slice(0, 4).join(', '), cB.requiredSkills.technical.slice(0, 4).join(', '))}
            ${this.renderComparisonRow("Starting Salary (India)", cA.salaryRanges.india.entry, cB.salaryRanges.india.entry)}
            ${this.renderComparisonRow("Senior / Lead Salary (India)", cA.salaryRanges.india.senior, cB.salaryRanges.india.senior)}
            ${this.renderComparisonRow("Global Salary (USA/Abroad)", cA.salaryRanges.abroad.mid, cB.salaryRanges.abroad.mid)}
            ${this.renderComparisonRow("Work-Life & Stress Factors", cA.challengesAndRisks, cB.challengesAndRisks)}
            ${this.renderComparisonRow("Key Advantages", cA.pros.join('<br>• '), cB.pros.join('<br>• '), true)}
            ${this.renderComparisonRow("Watch Out For (Cons)", cA.cons.join('<br>• '), cB.cons.join('<br>• '), true)}
            ${this.renderComparisonRow("Future Market Outlook", cA.futureDemand, cB.futureDemand)}
          </div>

          <!-- Section: AI Comparison Verdict -->
          <div class="card-white p-6 md:p-8 bg-gradient-to-br from-[#DDF5E8]/30 via-[#DCEBFF]/20 to-white border border-emerald-200/60">
            <div class="flex items-start gap-4">
              <span class="text-3xl">⚖️</span>
              <div>
                <span class="badge badge-green mb-2">HopeForScope Objective Verdict</span>
                <h3 class="text-xl font-bold text-[#24324B]">Which option is better aligned for you?</h3>
                <div class="text-sm text-slate-700 space-y-3 mt-3 leading-relaxed">
                  <p>
                    Neither <strong>${cA.title}</strong> nor <strong>${cB.title}</strong> is universally superior — both represent world-class professions with strong futures. The decision depends entirely on your personal learning temperament and career goals:
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div class="p-4 rounded-xl bg-white border border-slate-200">
                      <h4 class="font-bold text-sm text-[#24324B] mb-1">Choose ${cA.title} if:</h4>
                      <p class="text-xs text-slate-600">${cA.pros[0]}. You enjoy ${cA.requiredSkills.soft[0].toLowerCase()} and want to solve problems in ${cA.category}.</p>
                    </div>
                    <div class="p-4 rounded-xl bg-white border border-slate-200">
                      <h4 class="font-bold text-sm text-[#24324B] mb-1">Choose ${cB.title} if:</h4>
                      <p class="text-xs text-slate-600">${cB.pros[0]}. You value ${cB.requiredSkills.soft[0].toLowerCase()} and feel inspired by ${cB.category}.</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-3">
                  <button class="btn btn-secondary text-xs" onclick="window.AppRouter.openCareerModal('${cA.id}')">View ${cA.title} Full Roadmap →</button>
                  <button class="btn btn-secondary text-xs" onclick="window.AppRouter.openCareerModal('${cB.id}')">View ${cB.title} Full Roadmap →</button>
                  <button class="btn btn-primary text-xs" onclick="window.ScopeBot.openWithContext('I am comparing ${cA.title} versus ${cB.title}. Can you help me decide based on my preferences?')">💬 Ask ScopeBot for Personalized Advice</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    },

    renderComparisonRow: function(label, valA, valB, isBullet = false) {
      return `
        <div class="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 px-6 pt-3">${label}</div>
          <div class="grid grid-cols-1 md:grid-cols-2 px-6 pb-4 pt-1 gap-6">
            <div class="text-sm text-[#24324B]">
              ${isBullet ? `• ${valA}` : valA}
            </div>
            <div class="text-sm text-[#24324B] border-t md:border-t-0 md:border-l border-slate-100 md:pl-6 pt-2 md:pt-0">
              ${isBullet ? `• ${valB}` : valB}
            </div>
          </div>
        </div>
      `;
    }
  };
})();
