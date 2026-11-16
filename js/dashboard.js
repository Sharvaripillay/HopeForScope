// HopeForScope - Student State Store & Dashboard Logic
(function() {
  const STORAGE_KEY = "hope_for_scope_student";
  const DEFAULT_USER = {
    isLoggedIn: false,
    name: "Guest Explorer",
    email: "",
    phone: "",
    marks10: 82,
    marks12: 78,
    stream: "Science PCM",
    targetCareer: "Cybersecurity Engineer",
    savedCareers: ["cybersecurity-engineer", "software-engineer"],
    savedCourses: ["btech-ai-ds", "ca-integrated"],
    savedExams: ["jee-main", "cuet-ug"],
    reports: [
      {
        id: "rep-demo-1",
        date: "14 Nov 2026",
        type: "Class 10 Discovery",
        studentName: "Aarav Sharma",
        marks: 84,
        topStream: "Science (PCM - Physics, Chemistry, Maths)",
        topScore: 92,
        recommendedCareers: ["Cybersecurity Engineer & Ethical Hacker", "Software Development Engineer", "Data Scientist"]
      }
    ],
    checklist: [
      { id: 1, text: "Verify NCERT syllabus coverage for target entrance tests", done: true },
      { id: 2, text: "Explore scholarship eligibility on National Scholarship Portal (NSP)", done: false },
      { id: 3, text: "Shortlist 3 verified coaching institutes or self-paced courses", done: false },
      { id: 4, text: "Build first hands-on project / portfolio case study", done: false }
    ]
  };

  window.StudentStore = {
    data: null,

    init: function() {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          this.data = JSON.parse(stored);
        } catch (e) {
          this.data = JSON.parse(JSON.stringify(DEFAULT_USER));
        }
      } else {
        this.data = JSON.parse(JSON.stringify(DEFAULT_USER));
        this.save();
      }
    },

    save: function() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    },

    login: function(name, email, phone) {
      this.data.isLoggedIn = true;
      this.data.name = name || "Student Member";
      this.data.email = email || "student@hopeforscope.in";
      this.data.phone = phone || "+91 98765 43210";
      this.save();
      this.updateUI();
    },

    logout: function() {
      this.data.isLoggedIn = false;
      this.data.name = "Guest Explorer";
      this.save();
      this.updateUI();
    },

    updateProfile: function(name, marks10, marks12, stream) {
      this.data.name = name;
      this.data.marks10 = marks10;
      this.data.marks12 = marks12;
      this.data.stream = stream;
      this.save();
      this.render();
      alert("Profile updated successfully!");
    },

    bookmarkCareer: function(careerId) {
      if (!this.data.savedCareers.includes(careerId)) {
        this.data.savedCareers.push(careerId);
        this.save();
        alert("Career bookmarked to your Dashboard! ★");
      } else {
        alert("This career is already in your saved bookmarks.");
      }
    },

    removeCareerBookmark: function(careerId) {
      this.data.savedCareers = this.data.savedCareers.filter(id => id !== careerId);
      this.save();
      this.render();
    },

    bookmarkCourse: function(courseId) {
      if (!this.data.savedCourses.includes(courseId)) {
        this.data.savedCourses.push(courseId);
        this.save();
        alert("Course saved to your Dashboard! ★");
      } else {
        alert("This course is already in your saved list.");
      }
    },

    removeCourseBookmark: function(courseId) {
      this.data.savedCourses = this.data.savedCourses.filter(id => id !== courseId);
      this.save();
      this.render();
    },

    bookmarkExam: function(examId) {
      if (!this.data.savedExams.includes(examId)) {
        this.data.savedExams.push(examId);
        this.save();
        alert("Exam bookmarked to your study tracker! ★");
      }
    },

    removeExamBookmark: function(examId) {
      this.data.savedExams = this.data.savedExams.filter(id => id !== examId);
      this.save();
      this.render();
    },

    saveReport: function(rep) {
      this.data.reports.unshift(rep);
      this.save();
    },

    toggleChecklist: function(id) {
      const item = this.data.checklist.find(c => c.id === id);
      if (item) {
        item.done = !item.done;
        this.save();
        this.render();
      }
    },

    updateUI: function() {
      const authBtn = document.getElementById("nav-auth-btn");
      if (authBtn) {
        if (this.data.isLoggedIn) {
          authBtn.innerHTML = `👤 ${this.data.name.split(' ')[0]}`;
          authBtn.onclick = () => window.AppRouter.navigate('dashboard');
        } else {
          authBtn.innerHTML = `Login / Register`;
          authBtn.onclick = () => window.AppRouter.openAuthModal();
        }
      }
    },

    render: function() {
      const container = document.getElementById("dashboard-container");
      if (!container) return;

      const user = this.data;
      const allCareers = window.CAREERS_DATA || [];
      const allCourses = window.COURSES_DATA || [];
      const allExams = window.EXAMS_DATA || [];

      const savedCareersList = allCareers.filter(c => user.savedCareers.includes(c.id));
      const savedCoursesList = allCourses.filter(c => user.savedCourses.includes(c.id));
      const savedExamsList = allExams.filter(e => user.savedExams.includes(e.id));

      let html = `
        <div class="max-w-5xl mx-auto space-y-8 pb-16">
          <!-- Profile Card -->
          <div class="card-white p-6 md:p-8 bg-gradient-to-r from-[#DCEBFF]/50 via-[#EAE0FF]/30 to-white">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-full bg-[#7BA7E8] text-white flex items-center justify-center text-2xl font-bold shadow-sm">
                  ${user.name.charAt(0)}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h1 class="text-2xl font-bold text-[#24324B]">${user.name}</h1>
                    ${user.isLoggedIn ? '<span class="badge badge-green text-[10px]">Verified Student</span>' : '<span class="badge badge-yellow text-[10px]">Guest Mode</span>'}
                  </div>
                  <p class="text-xs text-slate-500 mt-1">${user.email || 'guest@hopeforscope.in'} | Target: <strong>${user.stream}</strong></p>
                </div>
              </div>

              <div class="flex gap-2">
                ${user.isLoggedIn 
                  ? `<button class="btn btn-secondary text-xs" onclick="window.StudentStore.logout()">Sign Out</button>`
                  : `<button class="btn btn-primary text-xs" onclick="window.AppRouter.openAuthModal()">Create Account to Sync</button>`
                }
              </div>
            </div>

            <!-- Academic Snapshot Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div class="p-3 bg-white rounded-xl border border-slate-100 text-center">
                <span class="text-xs text-slate-500 block">Class 10 Score</span>
                <strong class="text-xl font-bold text-[#24324B]">${user.marks10}%</strong>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-100 text-center">
                <span class="text-xs text-slate-500 block">Class 12 Score</span>
                <strong class="text-xl font-bold text-[#24324B]">${user.marks12}%</strong>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-100 text-center">
                <span class="text-xs text-slate-500 block">Bookmarked Careers</span>
                <strong class="text-xl font-bold text-[#7BA7E8]">${user.savedCareers.length}</strong>
              </div>
              <div class="p-3 bg-white rounded-xl border border-slate-100 text-center">
                <span class="text-xs text-slate-500 block">Saved Reports</span>
                <strong class="text-xl font-bold text-purple-600">${user.reports.length}</strong>
              </div>
            </div>
          </div>

          <!-- Educational Journey Milestone Tracker -->
          <div class="card-white p-6 md:p-8">
            <h2 class="text-xl font-bold text-[#24324B] mb-2">🗺️ Educational Journey Tracker</h2>
            <p class="text-xs text-slate-500 mb-6">Interactive milestones for your path towards becoming a professional.</p>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-emerald-800">Milestone 1</span>
                  <span class="text-xs bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full font-bold">Done ✓</span>
                </div>
                <h4 class="font-bold text-sm text-[#24324B]">Class 10 Completion</h4>
                <p class="text-xs text-slate-500 mt-1">Foundational subjects & stream discovery.</p>
              </div>

              <div class="p-4 rounded-xl border border-blue-200 bg-blue-50/30">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-blue-800">Milestone 2</span>
                  <span class="text-xs bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full font-bold">In Progress</span>
                </div>
                <h4 class="font-bold text-sm text-[#24324B]">Class 11 & 12 / Prep</h4>
                <p class="text-xs text-slate-500 mt-1">Focus on core subjects & entrance preparation.</p>
              </div>

              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-slate-500">Milestone 3</span>
                  <span class="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-bold">Upcoming</span>
                </div>
                <h4 class="font-bold text-sm text-[#24324B]">Undergraduate Degree</h4>
                <p class="text-xs text-slate-500 mt-1">College admission, internships, certifications.</p>
              </div>

              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-slate-500">Milestone 4</span>
                  <span class="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-bold">Target</span>
                </div>
                <h4 class="font-bold text-sm text-[#24324B]">First High-Growth Role</h4>
                <p class="text-xs text-slate-500 mt-1">Professional career launch in India or abroad.</p>
              </div>
            </div>
          </div>

          <!-- Saved Careers & Courses Tabs -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Saved Careers -->
            <div class="card-white p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg text-[#24324B]">★ Saved Careers (${savedCareersList.length})</h3>
                <button class="text-xs text-[#7BA7E8] font-bold" onclick="window.AppRouter.navigate('careers')">Explore More →</button>
              </div>
              <div class="space-y-3">
                ${savedCareersList.length ? savedCareersList.map(c => `
                  <div class="p-3 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between hover:bg-white transition-all">
                    <div>
                      <h5 class="font-semibold text-sm text-[#24324B]">${c.title}</h5>
                      <span class="text-xs text-slate-500">${c.salaryRanges.india.entry}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <button class="text-xs text-blue-600 font-bold" onclick="window.AppRouter.openCareerModal('${c.id}')">View</button>
                      <button class="text-xs text-red-500" onclick="window.StudentStore.removeCareerBookmark('${c.id}')">✕</button>
                    </div>
                  </div>
                `).join('') : '<p class="text-xs text-slate-400 py-4 text-center">No careers bookmarked yet. Explore careers and click Save ★</p>'}
              </div>
            </div>

            <!-- Saved Courses & Exams -->
            <div class="card-white p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold text-lg text-[#24324B]">🎓 Saved Courses & Exams (${savedCoursesList.length + savedExamsList.length})</h3>
                <button class="text-xs text-[#7BA7E8] font-bold" onclick="window.AppRouter.navigate('exams')">Exam Database →</button>
              </div>
              <div class="space-y-3">
                ${savedCoursesList.map(c => `
                  <div class="p-3 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div>
                      <h5 class="font-semibold text-sm text-[#24324B]">${c.name}</h5>
                      <span class="text-xs text-slate-500">${c.duration}</span>
                    </div>
                    <button class="text-xs text-red-500" onclick="window.StudentStore.removeCourseBookmark('${c.id}')">✕</button>
                  </div>
                `).join('')}
                ${savedExamsList.map(e => `
                  <div class="p-3 rounded-xl border border-slate-100 bg-purple-50/30 flex items-center justify-between">
                    <div>
                      <h5 class="font-semibold text-sm text-[#24324B]">${e.name}</h5>
                      <span class="text-xs text-purple-700">${e.conductingBody}</span>
                    </div>
                    <button class="text-xs text-red-500" onclick="window.StudentStore.removeExamBookmark('${e.id}')">✕</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Previously Generated Career Reports -->
          <div class="card-white p-6 md:p-8">
            <h3 class="font-bold text-lg text-[#24324B] mb-2">📄 Your Career Guidance Reports (${user.reports.length})</h3>
            <p class="text-xs text-slate-500 mb-4">Return to your personalized recommendations generated by assessments at any time.</p>

            <div class="space-y-3">
              ${user.reports.map(rep => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="badge badge-blue text-[10px]">${rep.type}</span>
                      <strong class="text-sm text-[#24324B]">${rep.topStream}</strong>
                    </div>
                    <p class="text-xs text-slate-500 mt-1">Generated: ${rep.date} | Class Marks: ${rep.marks}% | Fit Score: <strong>${rep.topScore}%</strong></p>
                    <div class="text-xs text-slate-600 mt-1">Recommended: ${rep.recommendedCareers ? rep.recommendedCareers.join(', ') : 'View Report'}</div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button class="btn btn-secondary py-1 px-3 text-xs" onclick="window.print()">Print</button>
                    <button class="btn btn-primary py-1 px-3 text-xs" onclick="window.AppRouter.navigate('assessment10')">Retake</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Actionable Action Checklist -->
          <div class="card-white p-6 md:p-8">
            <h3 class="font-bold text-lg text-[#24324B] mb-2">✅ Personal Action Checklist</h3>
            <p class="text-xs text-slate-500 mb-4">Track next steps to keep your educational momentum going strong.</p>

            <div class="space-y-2">
              ${user.checklist.map(item => `
                <div class="p-3 rounded-xl border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-all ${item.done ? 'bg-emerald-50/40 border-emerald-200 text-slate-400 line-through' : 'bg-white'}" onclick="window.StudentStore.toggleChecklist(${item.id})">
                  <span class="text-sm font-medium ${item.done ? 'text-slate-400' : 'text-[#24324B]'}">${item.text}</span>
                  <span class="w-5 h-5 rounded-md border flex items-center justify-center ${item.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'}">
                    ${item.done ? '✓' : ''}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    }
  };
})();
