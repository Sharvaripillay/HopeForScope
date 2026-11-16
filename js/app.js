// HopeForScope - Core Application Router, State Controller & UI Renderer
(function() {
  window.AppRouter = {
    currentRoute: "home",

    init: function() {
      // Initialize stores and submodules
      if (window.StudentStore) window.StudentStore.init();
      if (window.ScopeBot) window.ScopeBot.init();

      // Bind search input
      const searchInput = document.getElementById("global-search-input");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => this.handleGlobalSearch(e.target.value));
      }

      // Check URL hash if present
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        this.navigate(hash);
      } else {
        this.navigate("home");
      }

      // Update student auth button in navbar
      if (window.StudentStore) window.StudentStore.updateUI();
    },

    navigate: function(route) {
      this.currentRoute = route;
      window.location.hash = route;

      // Close mobile menu if open
      const mobileNav = document.getElementById("mobile-menu");
      if (mobileNav) mobileNav.classList.add("hidden");

      // Hide all view sections
      const views = document.querySelectorAll(".view-section");
      views.forEach(v => v.classList.add("hidden"));

      // Update active nav links
      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("data-route") === route) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Show targeted view
      const targetView = document.getElementById(`view-${route}`);
      if (targetView) {
        targetView.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Trigger route specific logic
      if (route === "assessment10") {
        if (window.Class10Assessment) window.Class10Assessment.start();
      } else if (route === "assessment12") {
        if (window.Class12Assessment) window.Class12Assessment.start();
      } else if (route === "compare") {
        if (window.CareerComparison) window.CareerComparison.init();
      } else if (route === "counsellor") {
        if (window.ScopeBot) window.ScopeBot.render();
      } else if (route === "dashboard") {
        if (window.StudentStore) window.StudentStore.render();
      } else if (route === "admin") {
        if (window.AdminPanel) window.AdminPanel.render();
      } else if (route === "careers") {
        this.renderCareersDirectory();
      } else if (route === "futurescope") {
        this.renderFutureScopeDirectory();
      } else if (route === "exams") {
        this.renderExamsDirectory();
      } else if (route === "globalscope") {
        this.renderGlobalScopeDirectory();
      } else if (route === "coaching") {
        this.renderCoachingDirectory();
      } else if (route === "jobs") {
        this.renderJobsDirectory();
      } else if (route === "scholarships") {
        this.renderScholarshipsDirectory();
      } else if (route === "home") {
        this.renderHomeDynamicSections();
      }
    },

    toggleMobileMenu: function() {
      const mobileNav = document.getElementById("mobile-menu");
      if (mobileNav) {
        mobileNav.classList.toggle("hidden");
      }
    },

    // Global Search across careers, courses, exams, countries
    handleGlobalSearch: function(query) {
      const q = query.trim().toLowerCase();
      const resultsContainer = document.getElementById("search-results-dropdown");
      if (!resultsContainer) return;

      if (!q || q.length < 2) {
        resultsContainer.classList.add("hidden");
        resultsContainer.innerHTML = "";
        return;
      }

      const careers = (window.CAREERS_DATA || []).filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.shortSummary.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      ).slice(0, 4);

      const exams = (window.EXAMS_DATA || []).filter(e => 
        e.name.toLowerCase().includes(q) || 
        e.fullName.toLowerCase().includes(q)
      ).slice(0, 3);

      const courses = (window.COURSES_DATA || []).filter(c => 
        c.name.toLowerCase().includes(q)
      ).slice(0, 3);

      const countries = (window.GLOBAL_SCOPE_DATA || []).filter(c => 
        c.country.toLowerCase().includes(q)
      ).slice(0, 2);

      let html = `<div class="p-3 bg-white rounded-2xl shadow-xl border border-slate-200 max-h-96 overflow-y-auto space-y-3">`;

      if (careers.length === 0 && exams.length === 0 && courses.length === 0 && countries.length === 0) {
        html += `<p class="text-xs text-slate-400 p-3 text-center">No exact match found for "${query}". Try searching "Cybersecurity", "NEET", "Germany", or "Law".</p>`;
      } else {
        if (careers.length > 0) {
          html += `<div class="text-[10px] uppercase font-bold text-slate-400 px-2">Careers (${careers.length})</div>`;
          careers.forEach(c => {
            html += `
              <div class="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer flex items-center justify-between" onclick="window.AppRouter.openCareerModal('${c.id}'); document.getElementById('search-results-dropdown').classList.add('hidden');">
                <div>
                  <strong class="text-sm text-[#24324B]">${c.title}</strong>
                  <span class="text-xs text-slate-500 block truncate max-w-xs">${c.shortSummary}</span>
                </div>
                <span class="badge ${c.badgeClass} text-[10px]">${c.category}</span>
              </div>
            `;
          });
        }

        if (exams.length > 0) {
          html += `<div class="text-[10px] uppercase font-bold text-slate-400 px-2 pt-2 border-t border-slate-100">Entrance Examinations</div>`;
          exams.forEach(e => {
            html += `
              <div class="p-2.5 rounded-xl hover:bg-purple-50/50 cursor-pointer flex items-center justify-between" onclick="window.AppRouter.openExamModal('${e.id}'); document.getElementById('search-results-dropdown').classList.add('hidden');">
                <div>
                  <strong class="text-sm text-[#24324B]">${e.name}</strong>
                  <span class="text-xs text-slate-500 block">${e.fullName}</span>
                </div>
                <span class="badge badge-lavender text-[10px]">${e.category}</span>
              </div>
            `;
          });
        }

        if (countries.length > 0) {
          html += `<div class="text-[10px] uppercase font-bold text-slate-400 px-2 pt-2 border-t border-slate-100">Study Abroad Destinations</div>`;
          countries.forEach(ct => {
            html += `
              <div class="p-2.5 rounded-xl hover:bg-blue-50/50 cursor-pointer flex items-center justify-between" onclick="window.AppRouter.navigate('globalscope'); document.getElementById('search-results-dropdown').classList.add('hidden');">
                <div class="flex items-center gap-2">
                  <span class="text-xl">${ct.flagEmoji}</span>
                  <div>
                    <strong class="text-sm text-[#24324B]">${ct.country}</strong>
                    <span class="text-xs text-slate-500 block">${ct.tuitionRange}</span>
                  </div>
                </div>
                <span class="badge badge-blue text-[10px]">Explore →</span>
              </div>
            `;
          });
        }
      }

      html += `</div>`;
      resultsContainer.innerHTML = html;
      resultsContainer.classList.remove("hidden");
    },

    // Homepage Dynamic Content
    renderHomeDynamicSections: function() {
      // Trending Careers Grid
      const trendingContainer = document.getElementById("home-trending-careers");
      if (trendingContainer) {
        const careers = window.CAREERS_DATA ? window.CAREERS_DATA.slice(0, 4) : [];
        trendingContainer.innerHTML = careers.map(c => `
          <div class="${c.cardClass} p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="badge ${c.badgeClass}">${c.scopeType.toUpperCase()}</span>
                <span class="text-xs font-semibold text-slate-500">${c.salaryRanges.india.entry}</span>
              </div>
              <h3 class="font-bold text-xl text-[#24324B]">${c.title}</h3>
              <p class="text-xs text-slate-600 mt-2 line-clamp-3">${c.overview}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
              <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openCareerModal('${c.id}')">View Detailed Scope & Roadmap →</button>
              <button class="btn btn-secondary text-xs py-1 px-3" onclick="window.StudentStore.bookmarkCareer('${c.id}')">★ Save</button>
            </div>
          </div>
        `).join('');
      }

      // FutureScope Preview Grid
      const futureContainer = document.getElementById("home-futurescope-preview");
      if (futureContainer) {
        const emerging = (window.CAREERS_DATA || []).filter(c => c.scopeType === "emerging" || c.scopeType === "speculative").slice(0, 3);
        futureContainer.innerHTML = emerging.map(c => `
          <div class="${c.cardClass} p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="badge ${c.scopeType === 'speculative' ? 'badge-yellow' : 'badge-lavender'}">${c.scopeType.toUpperCase()} FUTURE</span>
                <span class="text-xs text-slate-500 font-bold">${c.category.toUpperCase()}</span>
              </div>
              <h4 class="font-bold text-lg text-[#24324B]">${c.title}</h4>
              <p class="text-xs text-slate-600 mt-2">${c.shortSummary}</p>
            </div>
            <button class="btn btn-secondary text-xs mt-4 w-full" onclick="window.AppRouter.openCareerModal('${c.id}')">Explore Tomorrow's Scope →</button>
          </div>
        `).join('');
      }
    },

    // Explore Every Career Directory
    renderCareersDirectory: function(filterCategory = "all") {
      const container = document.getElementById("careers-directory-grid");
      if (!container) return;

      let careers = window.CAREERS_DATA || [];
      if (filterCategory !== "all") {
        careers = careers.filter(c => c.category === filterCategory);
      }

      container.innerHTML = careers.map(c => `
        <div class="${c.cardClass} p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="badge ${c.badgeClass}">${c.category.toUpperCase()}</span>
              <span class="text-xs font-bold text-slate-500">${c.scopeType.toUpperCase()}</span>
            </div>
            <h3 class="font-bold text-xl text-[#24324B]">${c.title}</h3>
            <p class="text-xs text-slate-600 mt-2">${c.shortSummary}</p>
            
            <div class="mt-4 p-3 bg-white/70 rounded-xl border border-slate-100 text-xs space-y-1">
              <div><strong class="text-slate-700">Starting Salary (India):</strong> ${c.salaryRanges.india.entry}</div>
              <div><strong class="text-slate-700">Starting Salary (Abroad):</strong> ${c.salaryRanges.abroad.entry}</div>
              <div><strong class="text-slate-700">Key Exams:</strong> ${c.entranceExams.slice(0, 2).join(', ')}</div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
            <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openCareerModal('${c.id}')">Full Career Deep Dive →</button>
            <button class="btn btn-secondary text-xs py-1 px-3" onclick="window.StudentStore.bookmarkCareer('${c.id}')">★ Save</button>
          </div>
        </div>
      `).join('');
    },

    // FutureScope - Careers of Tomorrow
    renderFutureScopeDirectory: function() {
      const container = document.getElementById("futurescope-grid");
      if (!container) return;

      const emerging = (window.CAREERS_DATA || []).filter(c => c.scopeType === "emerging" || c.scopeType === "speculative");

      container.innerHTML = emerging.map(c => `
        <div class="${c.cardClass} p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="badge ${c.scopeType === 'speculative' ? 'badge-yellow' : 'badge-lavender'}">${c.scopeType.toUpperCase()} FRONTIER</span>
              <span class="text-xs text-slate-500 font-bold">${c.category.toUpperCase()}</span>
            </div>
            <h3 class="font-bold text-xl text-[#24324B]">${c.title}</h3>
            <p class="text-xs text-slate-600 mt-2">${c.overview}</p>

            <div class="mt-4 space-y-1 text-xs bg-white/80 p-3 rounded-xl border border-slate-100">
              <div><strong class="text-slate-800">Why It's Growing:</strong> ${c.futureDemand}</div>
              <div><strong class="text-slate-800">Key Skills:</strong> ${c.requiredSkills.technical.slice(0, 3).join(', ')}</div>
              <div><strong class="text-slate-800">Global Potential:</strong> ${c.salaryRanges.abroad.mid}</div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
            <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openCareerModal('${c.id}')">Deep Dive Roadmap →</button>
            <button class="btn btn-secondary text-xs py-1 px-3" onclick="window.StudentStore.bookmarkCareer('${c.id}')">★ Save</button>
          </div>
        </div>
      `).join('');
    },

    // Searchable Entrance Exams Database
    renderExamsDirectory: function(cat = "all") {
      const container = document.getElementById("exams-grid");
      if (!container) return;

      let exams = window.EXAMS_DATA || [];
      if (cat !== "all") {
        exams = exams.filter(e => e.category === cat);
      }

      container.innerHTML = exams.map(e => `
        <div class="${e.cardClass} p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="badge ${e.badgeClass}">${e.category.toUpperCase()}</span>
              <span class="text-xs text-slate-500 font-bold">${e.conductingBody}</span>
            </div>
            <h3 class="font-bold text-xl text-[#24324B]">${e.name}</h3>
            <div class="text-xs text-slate-500 font-medium mb-2">${e.fullName}</div>
            <p class="text-xs text-slate-600 mb-4">${e.purpose}</p>

            <div class="space-y-1.5 text-xs bg-white/80 p-3.5 rounded-xl border border-slate-100">
              <div><strong class="text-slate-800">Requirement:</strong> <span class="text-amber-800 font-semibold">${e.requirementType}</span></div>
              <div><strong class="text-slate-800">Pattern:</strong> ${e.examPattern.split('.')[0]}</div>
              <div><strong class="text-slate-800">Important Dates:</strong> ${e.importantDates}</div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
            <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openExamModal('${e.id}')">Full Syllabus & Strategy →</button>
            <a href="${e.officialWebsite}" target="_blank" class="btn btn-secondary text-xs py-1 px-3">Official Portal ↗</a>
          </div>
        </div>
      `).join('');
    },

    // GlobalScope - Study Beyond Borders
    renderGlobalScopeDirectory: function() {
      const container = document.getElementById("globalscope-grid");
      if (!container) return;

      const countries = window.GLOBAL_SCOPE_DATA || [];

      container.innerHTML = countries.map(ct => `
        <div class="${ct.cardClass} p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="text-3xl">${ct.flagEmoji}</span>
                <h3 class="text-2xl font-bold text-[#24324B]">${ct.country}</h3>
              </div>
              <span class="badge ${ct.badgeClass}">${ct.tuitionINR.split('(')[0]}</span>
            </div>

            <p class="text-xs font-semibold text-slate-700 italic mb-4">"${ct.tagline}"</p>

            <div class="space-y-2 text-xs bg-white/80 p-3.5 rounded-xl border border-slate-100">
              <div><strong class="text-slate-800">Tuition Fees:</strong> ${ct.tuitionRange}</div>
              <div><strong class="text-slate-800">Living Costs:</strong> ${ct.livingExpenses}</div>
              <div><strong class="text-slate-800">Post-Study Work Visa:</strong> ${ct.postStudyWork.split('.')[0]}</div>
              <div><strong class="text-slate-800">Part-Time Work:</strong> ${ct.partTimeWorkRules.split('.')[0]}</div>
              <div><strong class="text-slate-800">Top Universities:</strong> ${ct.topUniversities.slice(0, 3).join(', ')}</div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
            <button class="text-xs font-bold text-[#7BA7E8] hover:underline" onclick="window.AppRouter.openCountryModal('${ct.id}')">Admission Timeline & Visa Details →</button>
            <button class="btn btn-primary text-xs py-1 px-3" onclick="window.ScopeBot.openWithContext('How can I study in ${ct.country}? What are the admission and visa requirements?')">Chat ScopeBot</button>
          </div>
        </div>
      `).join('');
    },

    // Find Coaching Institutes Near Me
    renderCoachingDirectory: function() {
      const container = document.getElementById("coaching-grid");
      if (!container) return;

      const citySelect = document.getElementById("coaching-city-filter");
      const examSelect = document.getElementById("coaching-exam-filter");

      const city = citySelect ? citySelect.value : "all";
      const exam = examSelect ? examSelect.value : "all";

      let list = window.COACHING_DATA || [];
      if (city !== "all") {
        list = list.filter(item => item.city.toLowerCase().includes(city.toLowerCase()));
      }
      if (exam !== "all") {
        list = list.filter(item => item.examTypes.includes(exam));
      }

      if (list.length === 0) {
        container.innerHTML = `<div class="col-span-full p-8 text-center text-slate-400">No verified coaching centres found for this exact filter combination. Try selecting "All Cities" or "All Courses".</div>`;
        return;
      }

      container.innerHTML = list.map(c => `
        <div class="card-white p-6 rounded-2xl flex flex-col justify-between hover:border-[#7BA7E8] transition-all">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="badge badge-blue text-[10px]">📍 ${c.city} • ${c.area}</span>
              <span class="text-xs font-bold text-amber-500">★ ${c.rating} (${c.reviewCount.toLocaleString()} reviews)</span>
            </div>

            <h3 class="font-bold text-lg text-[#24324B]">${c.name}</h3>
            <p class="text-xs text-slate-500 mt-1 mb-3">${c.fullAddress}</p>

            <div class="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-3">
              <div><strong class="text-slate-800">Courses:</strong> ${c.courses.join(', ')}</div>
              <div><strong class="text-slate-800">Verified Fees:</strong> <span class="text-blue-700 font-bold">${c.approxFees}</span></div>
              <div><strong class="text-slate-800">Class Modes:</strong> ${c.modes.join(', ')}</div>
              <div><strong class="text-slate-800">Contact:</strong> ${c.contact}</div>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            <a href="${c.website}" target="_blank" class="text-xs font-bold text-[#7BA7E8] hover:underline">Official Website ↗</a>
            <button class="btn btn-secondary text-xs py-1 px-3" onclick="alert('Viewing Map location for ${c.name} in ${c.city} (Lat: ${c.lat}, Lng: ${c.lng})')">🗺️ Show Map</button>
          </div>
        </div>
      `).join('');
    },

    // Job and Government Career Guidance
    renderJobsDirectory: function(sec = "all") {
      const container = document.getElementById("jobs-grid");
      if (!container) return;

      let list = window.JOBS_DATA || [];
      if (sec !== "all") {
        list = list.filter(j => j.sector === sec);
      }

      container.innerHTML = list.map(j => `
        <div class="${j.cardClass} p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="badge ${j.badgeClass}">${j.sector.toUpperCase()}</span>
              <span class="text-xs font-bold text-slate-500 capitalize">${j.category}</span>
            </div>

            <h3 class="font-bold text-xl text-[#24324B]">${j.title}</h3>

            <div class="mt-4 space-y-1.5 text-xs bg-white/80 p-3.5 rounded-xl border border-slate-100">
              <div><strong class="text-slate-800">Required Degree:</strong> ${j.requiredDegree}</div>
              <div><strong class="text-slate-800">Age Eligibility:</strong> ${j.ageEligibility}</div>
              <div><strong class="text-slate-800">Competitive Exams:</strong> ${j.competitiveExams.join(', ')}</div>
              <div><strong class="text-slate-800">Salary Package:</strong> <span class="font-bold text-emerald-800">${j.salaryRange.split('(')[0]}</span></div>
              <div><strong class="text-slate-800">Selection Process:</strong> ${j.selectionProcess}</div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
            <a href="${j.officialPortal.split(' ')[0]}" target="_blank" class="btn btn-secondary text-xs py-1 px-3">Official Application Portal ↗</a>
            <button class="btn btn-primary text-xs py-1 px-3" onclick="window.ScopeBot.openWithContext('How do I prepare for ${j.title}? What qualifications and competitive exams are needed?')">Preparation Guide</button>
          </div>
        </div>
      `).join('');
    },

    // Scholarships Directory
    renderScholarshipsDirectory: function(cat = "all") {
      const container = document.getElementById("scholarships-grid");
      if (!container) return;

      let list = window.SCHOLARSHIPS_DATA || [];
      if (cat !== "all") {
        list = list.filter(s => s.category === cat);
      }

      container.innerHTML = list.map(s => `
        <div class="${s.cardClass} p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="badge ${s.badgeClass}">${s.category.toUpperCase()}</span>
              <span class="text-xs font-bold text-slate-500">${s.isLoan ? 'Govt Loan' : 'Grant'}</span>
            </div>

            <h3 class="font-bold text-xl text-[#24324B]">${s.name}</h3>
            <div class="text-xs text-slate-500 font-semibold mb-3">Provider: ${s.provider}</div>

            <div class="space-y-1.5 text-xs bg-white/80 p-3.5 rounded-xl border border-slate-100">
              <div><strong class="text-emerald-800">Benefit / Amount:</strong> <span class="font-bold text-slate-900">${s.amount}</span></div>
              <div><strong class="text-slate-800">Eligibility:</strong> ${s.eligibility}</div>
              <div><strong class="text-slate-800">Documents Needed:</strong> ${s.documents.join(', ')}</div>
              <div><strong class="text-slate-800">Application Window:</strong> ${s.deadline}</div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between">
            <a href="${s.officialLink}" target="_blank" class="btn btn-secondary text-xs py-1 px-3">Official Application Link ↗</a>
            <button class="btn btn-primary text-xs py-1 px-3" onclick="window.ScopeBot.openWithContext('Am I eligible for ${s.name}? How do I apply?')">Eligibility Checker</button>
          </div>
        </div>
      `).join('');
    },

    // Career Detail Deep-Dive Modal
    openCareerModal: function(careerId) {
      const c = (window.CAREERS_DATA || []).find(item => item.id === careerId);
      if (!c) return;

      const modal = document.getElementById("generic-modal");
      const modalBody = document.getElementById("generic-modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span class="badge ${c.badgeClass} mb-1">${c.scopeType.toUpperCase()} FRONTIER</span>
              <h2 class="text-2xl font-bold text-[#24324B]">${c.title}</h2>
              <span class="text-xs text-slate-500">Category: ${c.category.toUpperCase()} | Verification: Official Audited Data (Nov 2026)</span>
            </div>
            <button class="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1" onclick="window.AppRouter.closeModal()">✕</button>
          </div>

          <!-- Overview & Day to Day -->
          <div>
            <h4 class="font-bold text-sm text-[#24324B] mb-1">Career Overview</h4>
            <p class="text-sm text-slate-600 leading-relaxed">${c.overview}</p>
          </div>

          <!-- What Professionals Actually Do -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <h4 class="font-bold text-sm text-[#24324B] mb-2">What Professionals Actually Do (Day-to-Day)</h4>
            <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
              ${c.dailyResponsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>

          <!-- Qualifications & Entry Eligibility -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-blue-50/30 border border-blue-100">
              <strong class="text-slate-800 block font-bold mb-1">Required Degrees & Diplomas:</strong>
              <p class="text-slate-600">${c.requiredQualifications}</p>
              <div class="mt-2 text-slate-500"><strong>Eligibility:</strong> ${c.eligibilityAndMarks}</div>
            </div>
            <div class="p-4 rounded-xl bg-purple-50/30 border border-purple-100">
              <strong class="text-slate-800 block font-bold mb-1">Entrance Exams & Certifications:</strong>
              <p class="text-slate-600"><strong>Exams:</strong> ${c.entranceExams.join(', ')}</p>
              <p class="text-slate-600 mt-1"><strong>Top Certs:</strong> ${c.certifications ? c.certifications.join(', ') : 'Degree Based'}</p>
            </div>
          </div>

          <!-- Salary Ranges (India & Abroad) -->
          <div class="card-white p-4 border border-slate-200">
            <h4 class="font-bold text-sm text-[#24324B] mb-3">Expected Compensation Benchmarks</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div class="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100">
                <span class="font-bold text-emerald-900 block mb-1">India Salary Scale:</span>
                <div>• Entry Level: <strong>${c.salaryRanges.india.entry}</strong></div>
                <div>• Mid-Career: <strong>${c.salaryRanges.india.mid}</strong></div>
                <div>• Senior / Director: <strong>${c.salaryRanges.india.senior}</strong></div>
              </div>
              <div class="p-3 bg-blue-50/40 rounded-xl border border-blue-100">
                <span class="font-bold text-blue-900 block mb-1">USA / Global Salary Scale:</span>
                <div>• Entry Level: <strong>${c.salaryRanges.abroad.entry}</strong></div>
                <div>• Mid-Career: <strong>${c.salaryRanges.abroad.mid}</strong></div>
                <div>• Senior / Lead: <strong>${c.salaryRanges.abroad.senior}</strong></div>
              </div>
            </div>
          </div>

          <!-- Advantages & Real Challenges -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl bg-emerald-50/30 border border-emerald-200">
              <h5 class="font-bold text-emerald-900 mb-1">Key Advantages:</h5>
              <ul class="space-y-1 text-slate-600 list-disc pl-4">
                ${c.pros.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-amber-50/30 border border-amber-200">
              <h5 class="font-bold text-amber-900 mb-1">Real Challenges & Risks:</h5>
              <p class="text-slate-600 mb-2">${c.challengesAndRisks}</p>
              <ul class="space-y-1 text-slate-600 list-disc pl-4">
                ${c.cons.map(cn => `<li>${cn}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Step-by-Step Roadmap Flow -->
          <div>
            <h4 class="font-bold text-sm text-[#24324B] mb-3">Step-by-Step Educational Journey</h4>
            <div class="pl-2">
              ${c.roadmap.map((step, idx) => `
                <div class="roadmap-step">
                  <div class="roadmap-step-dot">${idx + 1}</div>
                  <h5 class="font-bold text-sm text-[#24324B]">${step.title}</h5>
                  <p class="text-xs text-slate-600 mt-0.5">${step.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button class="btn btn-secondary text-xs" onclick="window.StudentStore.bookmarkCareer('${c.id}')">★ Save Career to Dashboard</button>
            <button class="btn btn-primary text-xs" onclick="window.AppRouter.closeModal(); window.ScopeBot.openWithContext('I am interested in becoming a ${c.title}. Can you guide me on step-by-step preparation?')">Ask ScopeBot About This Path →</button>
          </div>
        </div>
      `;

      modal.classList.add("active");
    },

    // Exam Detail Modal
    openExamModal: function(examId) {
      const e = (window.EXAMS_DATA || []).find(item => item.id === examId);
      if (!e) return;

      const modal = document.getElementById("generic-modal");
      const modalBody = document.getElementById("generic-modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span class="badge ${e.badgeClass} mb-1">${e.category.toUpperCase()}</span>
              <h2 class="text-2xl font-bold text-[#24324B]">${e.name}</h2>
              <p class="text-xs text-slate-500">${e.fullName} | Body: ${e.conductingBody}</p>
            </div>
            <button class="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1" onclick="window.AppRouter.closeModal()">✕</button>
          </div>

          <div class="text-xs bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900 font-semibold">
            Status: ${e.requirementType}
          </div>

          <div class="space-y-3 text-xs text-slate-700">
            <div><strong class="text-slate-900 block text-sm">Exam Purpose:</strong> ${e.purpose}</div>
            <div><strong class="text-slate-900 block text-sm">Eligibility & Min Marks:</strong> ${e.eligibility} (${e.minMarks})</div>
            <div><strong class="text-slate-900 block text-sm">Exam Pattern & Marking:</strong> ${e.examPattern}</div>
            <div><strong class="text-slate-900 block text-sm">Syllabus Highlights:</strong> ${e.syllabus}</div>
            <div><strong class="text-slate-900 block text-sm">Preparation Strategy:</strong> ${e.prepStrategy}</div>
            <div><strong class="text-slate-900 block text-sm">Accessible Colleges:</strong> ${e.accessibleColleges}</div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button class="btn btn-secondary text-xs" onclick="window.StudentStore.bookmarkExam('${e.id}')">★ Bookmark Exam</button>
            <a href="${e.officialWebsite}" target="_blank" class="btn btn-primary text-xs">Visit Official Registration Website ↗</a>
          </div>
        </div>
      `;

      modal.classList.add("active");
    },

    // Country Detail Modal
    openCountryModal: function(countryId) {
      const ct = (window.GLOBAL_SCOPE_DATA || []).find(item => item.id === countryId);
      if (!ct) return;

      const modal = document.getElementById("generic-modal");
      const modalBody = document.getElementById("generic-modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div class="space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <span class="text-4xl">${ct.flagEmoji}</span>
              <div>
                <h2 class="text-2xl font-bold text-[#24324B]">${ct.country} Study Guide</h2>
                <p class="text-xs text-slate-500">${ct.tagline}</p>
              </div>
            </div>
            <button class="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1" onclick="window.AppRouter.closeModal()">✕</button>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div><strong>Tuition Fees:</strong> ${ct.tuitionRange} (${ct.tuitionINR})</div>
            <div><strong>Living Expenses:</strong> ${ct.livingExpenses}</div>
            <div><strong>Post-Study Visa:</strong> ${ct.postStudyWork}</div>
            <div><strong>Part-Time Work:</strong> ${ct.partTimeWorkRules}</div>
          </div>

          <div class="space-y-3 text-xs text-slate-700">
            <div><strong class="text-slate-900 block text-sm">Admission Requirements:</strong> ${ct.admissionRequirements}</div>
            <div><strong class="text-slate-900 block text-sm">English Language Tests:</strong> ${ct.englishRequirements}</div>
            <div><strong class="text-slate-900 block text-sm">Student Visa Protocol:</strong> ${ct.visaRequirements}</div>
            <div><strong class="text-slate-900 block text-sm">Scholarships Available:</strong> ${ct.scholarships.join(', ')}</div>
            <div><strong class="text-slate-900 block text-sm">Application Timeline:</strong> ${ct.applicationTimeline}</div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button class="btn btn-secondary text-xs" onclick="window.AppRouter.closeModal()">Close</button>
            <button class="btn btn-primary text-xs" onclick="window.AppRouter.closeModal(); window.ScopeBot.openWithContext('Tell me the detailed application process and timeline for universities in ${ct.country}.')">Ask ScopeBot for Step-by-Step Guidance</button>
          </div>
        </div>
      `;

      modal.classList.add("active");
    },

    openCourseDetail: function(courseId) {
      const c = (window.COURSES_DATA || []).find(item => item.id === courseId);
      if (!c) return;

      const modal = document.getElementById("generic-modal");
      const modalBody = document.getElementById("generic-modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span class="badge ${c.badgeClass} mb-1">${c.category.toUpperCase()}</span>
              <h2 class="text-2xl font-bold text-[#24324B]">${c.name}</h2>
              <p class="text-xs text-slate-500">Duration: ${c.duration} | Fees: ${c.approxFees.split(';')[0]}</p>
            </div>
            <button class="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1" onclick="window.AppRouter.closeModal()">✕</button>
          </div>

          <div class="space-y-2 text-xs text-slate-700">
            <div><strong class="text-slate-900 block text-sm">Eligibility:</strong> ${c.eligibility} (${c.minPercentage})</div>
            <div><strong class="text-slate-900 block text-sm">Entrance Exams:</strong> ${c.entranceExams.join(', ')}</div>
            <div><strong class="text-slate-900 block text-sm">Top Colleges:</strong> ${c.bestColleges.join(', ')}</div>
            <div><strong class="text-slate-900 block text-sm">Career Opportunities:</strong> ${c.careerOpportunities.join(', ')}</div>
            <div><strong class="text-slate-900 block text-sm">Starting Salary (India):</strong> ${c.expectedSalary.india.entry}</div>
            <div><strong class="text-slate-900 block text-sm">Future Demand:</strong> ${c.futureGrowth}</div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button class="btn btn-secondary text-xs" onclick="window.StudentStore.bookmarkCourse('${c.id}')">★ Save Course</button>
            <button class="btn btn-primary text-xs" onclick="window.AppRouter.closeModal(); window.ScopeBot.openWithContext('What are the best colleges and admission steps for ${c.name}?')">Ask ScopeBot →</button>
          </div>
        </div>
      `;

      modal.classList.add("active");
    },

    openStreamDetail: function(streamId) {
      const s = (window.STREAMS_DATA || []).find(item => item.id === streamId);
      if (!s) return;

      const modal = document.getElementById("generic-modal");
      const modalBody = document.getElementById("generic-modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span class="badge badge-blue mb-1">Class 10 Stream Analysis</span>
              <h2 class="text-2xl font-bold text-[#24324B]">${s.name}</h2>
              <p class="text-xs text-slate-500">${s.description}</p>
            </div>
            <button class="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1" onclick="window.AppRouter.closeModal()">✕</button>
          </div>

          <div class="space-y-2 text-xs text-slate-700">
            <div><strong class="text-slate-900 block text-sm">Subjects Studied:</strong> ${s.subjects.join('<br>• ')}</div>
            <div><strong class="text-slate-900 block text-sm">Careers Unlocked:</strong> ${s.careers.join(', ')}</div>
            <div><strong class="text-slate-900 block text-sm">Key Entrance Exams:</strong> ${s.entranceExams.join(', ')}</div>
            <div><strong class="text-slate-900 block text-sm">Education Cost:</strong> ${s.approxCost}</div>
            <div><strong class="text-slate-900 block text-sm">Best Suited For:</strong> ${s.suitableFor}</div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-end">
            <button class="btn btn-primary text-xs" onclick="window.AppRouter.closeModal(); window.ScopeBot.openWithContext('Should I choose ${s.name}? What are the pros and cons for me?')">Discuss with ScopeBot</button>
          </div>
        </div>
      `;

      modal.classList.add("active");
    },

    openAuthModal: function() {
      const modal = document.getElementById("generic-modal");
      const modalBody = document.getElementById("generic-modal-body");
      if (!modal || !modalBody) return;

      modalBody.innerHTML = `
        <div class="space-y-6 max-w-md mx-auto">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span class="badge badge-blue mb-1">Student Portal</span>
              <h2 class="text-2xl font-bold text-[#24324B]">Login or Register</h2>
              <p class="text-xs text-slate-500">Save your career recommendations, track progress, and export reports.</p>
            </div>
            <button class="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1" onclick="window.AppRouter.closeModal()">✕</button>
          </div>

          <!-- Quick Demo Buttons -->
          <div class="p-3 bg-blue-50/50 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
            <span class="text-slate-600">Quick Demo Access:</span>
            <button class="btn btn-secondary py-1 px-3 text-xs" onclick="window.StudentStore.login('Aarav Sharma', 'aarav.sharma@gmail.com', '+91 98765 43210'); window.AppRouter.closeModal();">Sign In as Demo Student</button>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
              <input type="text" id="auth_name" class="form-input" placeholder="e.g. Sharvari Pillay">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
              <input type="email" id="auth_email" class="form-input" placeholder="student@example.com">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1">Phone Number</label>
              <input type="tel" id="auth_phone" class="form-input" placeholder="+91 98765 00000">
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1">Password</label>
              <input type="password" id="auth_pass" class="form-input" placeholder="••••••••">
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button class="text-xs text-slate-500 hover:underline" onclick="window.AppRouter.closeModal()">Continue as Guest Explorer</button>
            <button class="btn btn-primary" onclick="
              const n = document.getElementById('auth_name').value.trim() || 'Aarav Sharma';
              const e = document.getElementById('auth_email').value.trim() || 'student@hopeforscope.in';
              const p = document.getElementById('auth_phone').value.trim() || '+91 98765 43210';
              window.StudentStore.login(n, e, p);
              window.AppRouter.closeModal();
            ">Sign In / Register →</button>
          </div>
        </div>
      `;

      modal.classList.add("active");
    },

    closeModal: function() {
      const modal = document.getElementById("generic-modal");
      if (modal) modal.classList.remove("active");
    }
  };

  // Auto initialize on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    window.AppRouter.init();
  });
})();
