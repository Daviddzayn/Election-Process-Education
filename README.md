# 🗳️ VoteGuide — Interactive Election Assistant

> **Google Antigravity Hackathon Submission**  
> Challenge Vertical: **Civic Education & Democratic Participation**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square)](#)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)](#)

---

## 📌 Chosen Vertical

**Civic Education & Democratic Participation**

VoteGuide is an interactive web assistant that helps students, first-time voters, and citizens understand the **election process**, **key timelines**, **roles**, and **voter rights** — in a clear, engaging, and accessible format.

---

## 🎯 Approach & Logic

### Problem Statement
Many eligible voters — especially young and first-time voters — lack clear, digestible information about how elections work. Complex government websites and dense legal text create barriers to participation.

### Solution Design
VoteGuide breaks this barrier with a **single-page interactive assistant** that:

1. **Guides users step-by-step** through the election process with clickable, expandable cards
2. **Visualises key dates** via an interactive timeline
3. **Explains roles** of everyone involved in an election
4. **Answers common questions** via a searchable, categorised FAQ
5. **Tests knowledge** with a scored, explanatory 10-question quiz
6. **Provides instant answers** via ElectionBot — a keyword-aware conversational assistant

### Decision Logic — ElectionBot
The chatbot uses structured **keyword matching** against a curated knowledge base to return accurate, relevant answers. Topics covered:
- Voter registration process
- Election Day procedures
- Vote counting & results certification
- Electoral College
- Postal/absentee voting
- Voter rights & protections
- Spoilt ballots & recounts

If no match is found, the bot guides users to the most relevant section of the app.

---

## 🛠️ How the Solution Works

### Architecture
```
ElectionStudentSystem/
├── index.html      # Full page structure — 6 interactive sections
├── styles.css      # Complete dark-mode design system with animations
├── data.js         # All structured data (steps, timeline, FAQs, quiz, chat)
├── app.js          # Application logic, interactivity, and ElectionBot
└── README.md       # This file
```

### Sections & Features

| Section | Feature |
|---|---|
| **Hero** | Animated ballot card, stats, CTAs |
| **Election Process** | 3 election types (General / Student / Local), step cards with detail panel |
| **Timeline** | 10 key dates visualised on an alternating interactive timeline |
| **Election Roles** | 8 role cards (Commissioner, Voter, Observer, Returning Officer, etc.) |
| **FAQ** | 16 categorised questions with search and accordion expansion |
| **Quiz** | 10-question scored quiz with per-question explanations |
| **ElectionBot** | Keyword-aware chat assistant with typing animation and quick-reply chips |

### Google Services Used
| Service | How It's Used |
|---|---|
| **Google Fonts API** | `Inter` and `Outfit` typefaces loaded via `fonts.googleapis.com` for premium typography |

### User Flow
```
Land on Hero → Click "Explore the Process"
    → Browse Step Cards → Click for Detail Panel
    → Scroll to Timeline → See Key Dates
    → Explore Roles → Hover Cards
    → Search FAQ → Expand Answers
    → Take Quiz → Get Scored Results
    → Open ElectionBot → Ask Questions → Get Instant Answers
```

---

## 🔍 Assumptions Made

1. **No backend required** — All content is static and curated; ElectionBot uses client-side keyword matching rather than a live API, ensuring zero latency and offline capability after first load.
2. **General election context** — The default process reflects a general national election; Student and Local election tabs provide adapted flows.
3. **Timeline is illustrative** — Dates shown are representative examples for educational purposes, not tied to any specific real election.
4. **Single-language (English)** — Assumed English-speaking audience for this version.
5. **Modern browser** — Relies on CSS custom properties, `IntersectionObserver`, and ES6+ features available in all modern browsers.

---

## ♿ Accessibility

- Semantic HTML5 structure (`nav`, `section`, `footer`, `button`, `input`)
- ARIA labels on interactive elements (`aria-label`, `role="button"`)
- Keyboard navigable step cards (`tabindex`, `keydown` Enter support)
- Sufficient colour contrast in dark mode
- Responsive layout for mobile, tablet, and desktop

---

## 📊 Evaluation Criteria Addressed

| Criterion | How It's Addressed |
|---|---|
| **Code Quality** | Clean separation of concerns across `index.html`, `styles.css`, `data.js`, `app.js`; consistent naming conventions |
| **Security** | No external API keys, no user data stored, no eval or unsafe DOM patterns |
| **Efficiency** | CSS animations use `transform` and `opacity` for GPU compositing; `IntersectionObserver` for lazy scroll reveals |
| **Testing** | All interactive features (quiz, FAQ, chat, tabs, panel) are manually testable via direct browser open |
| **Accessibility** | Semantic HTML, ARIA labels, keyboard support, responsive design |
| **Google Services** | Google Fonts API integrated for typography (`Inter`, `Outfit`) |

---

## 🚀 Running Locally

No build step or server required:

```bash
# Clone the repository
git clone https://github.com/<your-username>/ElectionStudentSystem.git

# Open directly in browser
open ElectionStudentSystem/index.html
# OR on Windows:
start ElectionStudentSystem/index.html
```

---

## 📸 Key Screens

- **Hero** — Bold gradient headline, animated ballot card, floating status chips
- **Process Tabs** — Switch between General / Student / Local election flows
- **Step Detail Panel** — Slide-in panel with full description for each step
- **Quiz Results** — Scored result with emoji feedback and retry option
- **ElectionBot** — Chat drawer with typing indicator and suggestion chips

---

## 👤 Author

Built with ❤️ using **Google Antigravity** for the Hackathon challenge.

---

*Making democracy accessible, one voter at a time. 🗳️*
