/* jshint esversion: 6 */
'use strict';

// ── Google Analytics 4 — Event Helper ──────────────────────────
/**
 * Sends a custom event to Google Analytics 4.
 * @param {string} eventName - GA4 event name
 * @param {Object} params    - Additional event parameters
 */
function trackEvent(eventName, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// ── Particles ──────────────────────────────────────────────────
/** Spawns decorative animated background particles. */
(function spawnParticles() {
  const container = document.getElementById('bgParticles');
  const colors = ['#6366f1','#8b5cf6','#ec4899','#3b82f6','#10b981'];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[i%colors.length]};animation-duration:${10+Math.random()*20}s;animation-delay:${Math.random()*15}s`;
    container.appendChild(p);
  }
})();

// ── Navbar scroll effect ──────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.background =
    window.scrollY > 60 ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.8)';
});

// ── Active nav link on scroll + GA4 section tracking ─────────
const sections = ['home','process','timeline','roles','faq','quiz'];
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const l = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
      if (l) l.classList.add('active');
      trackEvent('section_view', { section_name: e.target.id });
    }
  });
}, { threshold: 0.4 });
sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });

// ── Hamburger ─────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  const m = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  const isOpen = m.style.display === 'flex';
  m.style.display = isOpen ? 'none' : 'flex';
  btn.setAttribute('aria-expanded', String(!isOpen));
});
document.querySelectorAll('.mobile-link').forEach(l => {
  l.addEventListener('click', () => {
    document.getElementById('mobileMenu').style.display = 'none';
    document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
  });
});

// ── Hero CTA ──────────────────────────────────────────────────
document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('process').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('getStartedBtn').addEventListener('click', () => {
  document.getElementById('process').scrollIntoView({ behavior: 'smooth' });
});

// ── Ballot card interaction ───────────────────────────────────
document.querySelectorAll('.ballot-option').forEach((opt, idx) => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.ballot-option').forEach(o => {
      o.classList.remove('selected');
      o.querySelector('.ballot-circle').classList.remove('filled');
    });
    opt.classList.add('selected');
    opt.querySelector('.ballot-circle').classList.add('filled');
  });
});

// ── PROCESS STEPS ─────────────────────────────────────────────
let activeTab = 'general';
/**
 * Renders election step cards for the given tab type.
 * @param {string} tab - One of 'general' | 'student' | 'local'
 */
function renderSteps(tab) {
  const steps = ELECTION_DATA.steps[tab];
  const container = document.getElementById('stepsContainer');
  container.innerHTML = steps.map((s, i) => `
    <div class="step-card" data-idx="${i}" style="--step-color:${s.color}" tabindex="0" role="button" aria-label="Step ${s.id}: ${s.title}">
      <div class="step-icon">${s.icon}</div>
      <div class="step-num">Step ${s.id}</div>
      <div class="step-title">${s.title}</div>
      <div class="step-short">${s.short}</div>
      <div class="step-arrow">Learn more →</div>
    </div>
  `).join('');
  container.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('click', () => openPanel(steps[+card.dataset.idx]));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openPanel(steps[+card.dataset.idx]); });
  });
}

/**
 * Opens the step detail side panel with full description.
 * @param {Object} step - Step data object from ELECTION_DATA
 */
function openPanel(step) {
  const panel = document.getElementById('stepDetailPanel');
  const content = document.getElementById('panelContent');
  // Build panel content using safe DOM methods where possible
  content.innerHTML = `
    <div class="panel-icon">${step.icon}</div>
    <div class="panel-title">${step.title}</div>
    <div class="panel-badge" style="background:${step.color}22;color:${step.color}">Step ${step.id}</div>
    <p class="panel-detail">${step.detail}</p>
  `;
  panel.classList.add('open');
  panel.setAttribute('aria-hidden', 'false');
  // GA4: track step viewed
  trackEvent('step_viewed', { step_title: step.title, step_id: step.id });
  document.getElementById('closePanel').focus();
}

document.getElementById('closePanel').addEventListener('click', () => {
  const panel = document.getElementById('stepDetailPanel');
  panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
});

document.querySelectorAll('.process-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.process-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    document.getElementById('stepDetailPanel').classList.remove('open');
    renderSteps(activeTab);
    // GA4: track election type tab switch
    trackEvent('tab_switch', { tab_name: activeTab });
  });
});

renderSteps('general');

// ── TIMELINE ──────────────────────────────────────────────────
(function renderTimeline() {
  const container = document.getElementById('timelineEvents');
  container.innerHTML = ELECTION_DATA.timeline.map((ev, i) => `
    <div class="timeline-event">
      ${i % 2 === 0 ? `<div class="t-card"><div class="t-date">${ev.date}</div><div class="t-label">${ev.icon} ${ev.label}</div><div class="t-desc">${ev.desc}</div></div><div class="t-dot" style="background:${ev.color}"></div><div class="t-spacer"></div>` :
        `<div class="t-spacer"></div><div class="t-dot" style="background:${ev.color}"></div><div class="t-card"><div class="t-date">${ev.date}</div><div class="t-label">${ev.icon} ${ev.label}</div><div class="t-desc">${ev.desc}</div></div>`}
    </div>
  `).join('');
})();

// ── ROLES ─────────────────────────────────────────────────────
(function renderRoles() {
  document.getElementById('rolesGrid').innerHTML = ELECTION_DATA.roles.map(r => `
    <div class="role-card" style="--role-color:${r.color}">
      <div class="role-icon">${r.icon}</div>
      <div class="role-title">${r.title}</div>
      <div class="role-desc">${r.desc}</div>
    </div>
  `).join('');
})();

// ── FAQ ───────────────────────────────────────────────────────
let activeCategory = 'All';
const categories = ['All', ...new Set(ELECTION_DATA.faqs.map(f => f.category))];

function renderFaqCategories() {
  document.getElementById('faqCategories').innerHTML = categories.map(c => `
    <button class="faq-cat-btn${c === activeCategory ? ' active' : ''}" data-cat="${c}">${c}</button>
  `).join('');
  document.querySelectorAll('.faq-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderFaqCategories();
      renderFaqs(document.getElementById('faqSearch').value);
    });
  });
}

function renderFaqs(query = '') {
  const q = query.toLowerCase();
  const list = document.getElementById('faqList');
  const filtered = ELECTION_DATA.faqs.filter(f =>
    (activeCategory === 'All' || f.category === activeCategory) &&
    (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
  );
  if (!filtered.length) {
    list.innerHTML = '<p style="text-align:center;color:var(--text2);padding:2rem">No results found. Try a different search.</p>';
    return;
  }
  // Fix #7: FAQ questions rendered as <button> with aria-expanded for full keyboard & screen-reader support
  list.innerHTML = filtered.map((f, i) => `
    <div class="faq-item" id="faq${i}">
      <button class="faq-question" data-faq="${i}" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${f.q}</span>
        <span class="faq-chevron" aria-hidden="true">▼</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region" aria-label="${f.q}"><div class="faq-answer-inner">${f.a}</div></div>
    </div>
  `).join('');
  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

renderFaqCategories();
renderFaqs();

/**
 * Debounce utility — delays function call until user stops typing.
 * @param {Function} fn    - Function to debounce
 * @param {number}   delay - Delay in milliseconds
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

document.getElementById('faqSearch').addEventListener('input', debounce(e => {
  activeCategory = 'All';
  renderFaqCategories();
  renderFaqs(e.target.value);
  // GA4: track FAQ search
  if (e.target.value.length > 2) {
    trackEvent('faq_search', { search_term: e.target.value });
  }
}, 300));

// ── QUIZ ──────────────────────────────────────────────────────
let quizIdx = 0, quizScore = 0, answered = false;
const questions = ELECTION_DATA.quiz;

document.getElementById('startQuizBtn').addEventListener('click', () => {
  document.getElementById('quizIntro').classList.add('hidden');
  document.getElementById('quizBody').classList.remove('hidden');
  quizIdx = 0; quizScore = 0;
  renderQuestion();
  // GA4: track quiz start
  trackEvent('quiz_start');
});

/**
 * Renders the current quiz question, options, and updates progress.
 * Fix #8: Each option has role=radio and aria-label for screen readers.
 */
function renderQuestion() {
  answered = false;
  document.getElementById('nextQuizBtn').classList.add('hidden');
  const q = questions[quizIdx];
  document.getElementById('quizCounter').textContent = `Question ${quizIdx + 1} / ${questions.length}`;
  document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
  document.getElementById('quizProgressFill').style.width = `${(quizIdx / questions.length) * 100}%`;
  document.getElementById('quizQuestion').textContent = q.q;
  const optContainer = document.getElementById('quizOptions');
  optContainer.innerHTML = q.opts.map((o, i) => `
    <button class="quiz-opt" data-idx="${i}" aria-label="Option ${i + 1}: ${o}">${o}</button>
  `).join('');
  // Fix #9: Move focus to first option for keyboard users
  const firstOpt = optContainer.querySelector('.quiz-opt');
  if (firstOpt) firstOpt.focus();
  optContainer.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const chosen = +btn.dataset.idx;
      const correct = q.correct;
      optContainer.querySelectorAll('.quiz-opt').forEach((b, i) => {
        b.disabled = true;
        b.setAttribute('aria-disabled', 'true');
        if (i === correct) b.classList.add('correct');
        else if (i === chosen && chosen !== correct) b.classList.add('wrong');
      });
      if (chosen === correct) quizScore++;
      document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
      const exp = document.createElement('div');
      exp.className = 'quiz-explanation';
      exp.setAttribute('role', 'alert');
      exp.textContent = '💡 ' + q.exp;
      optContainer.appendChild(exp);
      if (quizIdx < questions.length - 1) {
        document.getElementById('nextQuizBtn').classList.remove('hidden');
        document.getElementById('nextQuizBtn').focus();
      } else {
        setTimeout(showResult, 800);
      }
    });
  });
}

document.getElementById('nextQuizBtn').addEventListener('click', () => {
  quizIdx++;
  renderQuestion();
});

/**
 * Displays the final quiz result screen with score and feedback.
 */
function showResult() {
  document.getElementById('quizBody').classList.add('hidden');
  const res = document.getElementById('quizResult');
  res.classList.remove('hidden');
  res.setAttribute('aria-live', 'polite');
  const pct = Math.round((quizScore / questions.length) * 100);
  const msg = pct >= 80 ? 'Civic Champion! 🏆' : pct >= 60 ? 'Good Effort! 👍' : 'Keep Learning! 📚';
  const sub = pct >= 80 ? "You clearly understand how democracy works. Democracy is in safe hands!" :
              pct >= 60 ? "Solid knowledge — review the areas you missed to become election-ready." :
              "Explore the process and timeline sections above to boost your understanding.";
  res.innerHTML = `
    <div class="result-icon">${pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : '📚'}</div>
    <div class="score-big">${quizScore}/${questions.length}</div>
    <h3>${msg}</h3>
    <p>${sub}</p>
    <button class="btn-primary" id="retryBtn" style="margin-top:1rem">Try Again</button>
  `;
  // GA4: track quiz completion with score
  trackEvent('quiz_complete', { score: quizScore, total: questions.length, percentage: pct });
  document.getElementById('retryBtn').addEventListener('click', () => {
    res.classList.add('hidden');
    document.getElementById('quizIntro').classList.remove('hidden');
  });
}

// ── CHAT ──────────────────────────────────────────────────────
const chatBubble = document.getElementById('chatBubble');
const chatDrawer = document.getElementById('chatDrawer');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

// Fix #10: Chat bubble toggles aria-expanded; drawer toggles aria-hidden
chatBubble.addEventListener('click', () => {
  const isOpen = chatDrawer.classList.contains('open');
  chatDrawer.classList.toggle('open');
  chatBubble.setAttribute('aria-expanded', String(!isOpen));
  chatDrawer.setAttribute('aria-hidden', String(isOpen));
  if (!isOpen) chatInput.focus();
});
chatClose.addEventListener('click', () => {
  chatDrawer.classList.remove('open');
  chatBubble.setAttribute('aria-expanded', 'false');
  chatDrawer.setAttribute('aria-hidden', 'true');
  chatBubble.focus();
});
document.getElementById('chatBtn').addEventListener('click', () => {
  chatDrawer.classList.add('open');
  chatBubble.setAttribute('aria-expanded', 'true');
  chatDrawer.setAttribute('aria-hidden', 'false');
  chatInput.focus();
});

document.querySelectorAll('.suggestion-chip').forEach(chip => {
  chip.addEventListener('click', () => sendChat(chip.dataset.q));
});

chatSend.addEventListener('click', () => { const v = chatInput.value.trim(); if (v) sendChat(v); });
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') { const v = chatInput.value.trim(); if (v) sendChat(v); } });

function addMsg(text, who) {
  const div = document.createElement('div');
  div.className = `chat-msg ${who}`;
  div.innerHTML = `${who === 'bot' ? '<div class="msg-avatar">🗳️</div>' : ''}
    <div class="msg-bubble">${text}</div>
    ${who === 'user' ? '<div class="msg-avatar">👤</div>' : ''}`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

function getBotReply(text) {
  const t = text.toLowerCase();
  const R = ELECTION_DATA.chatResponses;
  if (t.includes('register') || t.includes('registration')) return R['register'];
  if (t.includes('election day') || t.includes('polling day') || t.includes('vote ') || t.includes('voting')) return R['election day'];
  if (t.includes('count') || t.includes('tally') || t.includes('counted')) return R['count'];
  if (t.includes('electoral college')) return R['electoral college'];
  if (t.includes('candidate') || t.includes('run for') || t.includes('nominate')) return R['candidate'];
  if (t.includes('postal') || t.includes('absentee') || t.includes('mail')) return R['postal'];
  if (t.includes('result') || t.includes('winner') || t.includes('declared')) return R['result'];
  if (t.includes('right') || t.includes('right to vote') || t.includes('rights')) return R['right'];
  if (t.includes('spoil') || t.includes('invalid')) return R['spoil'];
  if (t.includes('timeline') || t.includes('date') || t.includes('deadline')) return 'Check the 📅 Timeline section above for key dates! It covers everything from the writ of election to results certification.';
  if (t.includes('faq') || t.includes('question')) return 'Head to the ❓ FAQ section for detailed answers to common questions. You can also search by keyword!';
  if (t.includes('quiz') || t.includes('test') || t.includes('knowledge')) return 'Try the 🧠 Quiz section! 10 questions to test your election knowledge.';
  if (t.includes('role') || t.includes('officer') || t.includes('commissioner')) return 'Check the "Who\'s Involved?" section to learn about each role in an election — from the Commissioner to the Poll Worker!';
  return R['default'];
}

/**
 * Sends a user message in the chat and triggers a bot reply.
 * @param {string} text - The user's message text
 */
function sendChat(text) {
  chatInput.value = '';
  document.getElementById('chatSuggestions')?.remove();
  addMsg(text, 'user');
  // GA4: track chat question
  trackEvent('chat_message', { question_topic: text.substring(0, 50) });
  // Typing indicator
  const typing = document.createElement('div');
  typing.className = 'chat-msg bot typing-indicator';
  typing.setAttribute('aria-label', 'ElectionBot is typing');
  typing.innerHTML = '<div class="msg-avatar">🗳️</div><div class="msg-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  setTimeout(() => {
    typing.remove();
    addMsg(getBotReply(text), 'bot');
  }, 900 + Math.random() * 500);
}

// ── Scroll reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .role-card, .t-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});
