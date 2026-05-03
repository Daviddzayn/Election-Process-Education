
const ELECTION_DATA = {
  steps: {
    general: [
      { id: 1, icon: "📢", title: "Election Announced", color: "#6366f1", short: "Official declaration of the election date.", detail: "The government or election commission formally announces the election date, triggering the official campaign period. All political parties are notified and legal timelines begin." },
      { id: 2, icon: "📝", title: "Voter Registration", color: "#8b5cf6", short: "Citizens register to become eligible voters.", detail: "Eligible citizens must register with the election authority. Documents like national ID, proof of address, and age verification are required. Deadlines are strictly enforced." },
      { id: 3, icon: "🏛️", title: "Candidate Nomination", color: "#ec4899", short: "Parties submit candidate names for approval.", detail: "Political parties and independent candidates submit nomination papers within the specified window. Candidates must meet eligibility criteria such as age, citizenship, and no criminal disqualification." },
      { id: 4, icon: "📣", title: "Campaign Period", color: "#f59e0b", short: "Candidates actively campaign for votes.", detail: "Candidates hold rallies, run ads, debate, and engage voters. Campaign finance rules apply. A 'silence period' often precedes polling day where campaigning is banned." },
      { id: 5, icon: "🗳️", title: "Polling Day", color: "#10b981", short: "Registered voters cast their ballots.", detail: "Polling stations open at designated times. Voters present ID, receive ballots, mark their choice in secret, and deposit the ballot. Election observers monitor the process." },
      { id: 6, icon: "📊", title: "Vote Counting", color: "#3b82f6", short: "Ballots are tallied under official supervision.", detail: "After polls close, officials count ballots in transparent sessions. Party agents and observers watch to prevent fraud. Results are recorded and reported upward." },
      { id: 7, icon: "🏆", title: "Results & Certification", color: "#14b8a6", short: "Winner declared and results certified.", detail: "The election commission certifies results, declares winners, and publishes final tallies. Losing candidates may file petitions if they suspect irregularities. The winner is officially sworn in." }
    ],
    student: [
      { id: 1, icon: "📢", title: "Election Notice", color: "#6366f1", short: "School authority announces the election.", detail: "The student council or school administration announces the election date, positions available, and eligibility rules for candidates and voters." },
      { id: 2, icon: "✋", title: "Candidate Sign-Up", color: "#8b5cf6", short: "Students apply to run for positions.", detail: "Interested students submit nomination forms, sometimes requiring a minimum GPA or teacher recommendation. A vetting committee reviews applications." },
      { id: 3, icon: "📣", title: "Campaigning", color: "#ec4899", short: "Candidates put up posters and give speeches.", detail: "Candidates present manifestos, make speeches in assemblies, and engage classmates. Rules about poster placement and spending may apply." },
      { id: 4, icon: "🗳️", title: "Voting Day", color: "#10b981", short: "Students cast their votes.", detail: "A secret ballot is held, often in the school hall. Student IDs are checked. Each student votes once, and ballot boxes are sealed until counting." },
      { id: 5, icon: "📊", title: "Counting", color: "#3b82f6", short: "Votes counted by supervising teachers.", detail: "Teachers or an election committee count ballots transparently. Candidate representatives may observe the count." },
      { id: 6, icon: "🏆", title: "Results Announced", color: "#14b8a6", short: "Winner announced at school assembly.", detail: "Results are announced at assembly or on the school notice board. Winners are congratulated and officially take on their student council roles." }
    ],
    local: [
      { id: 1, icon: "📢", title: "Writ Issued", color: "#6366f1", short: "Local government triggers the election writ.", detail: "A writ of election is issued by the local authority, setting the formal election timetable for ward councillor or mayoral positions." },
      { id: 2, icon: "📝", title: "Roll Verification", color: "#8b5cf6", short: "Electoral rolls for the ward are updated.", detail: "The electoral roll is published. Residents check that their names are listed and apply for corrections if needed within the specified window." },
      { id: 3, icon: "🏛️", title: "Nomination Day", color: "#ec4899", short: "Candidates file nomination papers at council offices.", detail: "Prospective candidates file at the local council office, pay a nomination deposit, and have their eligibility (residency, age) verified." },
      { id: 4, icon: "📣", title: "Local Campaigning", color: "#f59e0b", short: "Door-knocking, flyers, and community meetings.", detail: "Candidates engage directly with community members. Local issues like roads, parks, and zoning dominate debates. Spending caps are usually lower than national elections." },
      { id: 5, icon: "🗳️", title: "Polling Day", color: "#10b981", short: "Ward residents vote at local polling stations.", detail: "Voters attend their designated polling station. Postal votes and pre-poll voting may also be available. Turnout is often lower than in general elections." },
      { id: 6, icon: "🏆", title: "Declaration of Result", color: "#14b8a6", short: "Returning officer declares the winner.", detail: "The returning officer tallies votes and declares the result publicly. The elected councillor is sworn in at the next council meeting." }
    ]
  },

  timeline: [
    { date: "Jan 15", label: "Writ of Election Issued", icon: "📜", color: "#6366f1", desc: "The formal order triggering the election process is issued." },
    { date: "Jan 20", label: "Voter Registration Opens", icon: "📝", color: "#8b5cf6", desc: "Citizens can register or update their details on the electoral roll." },
    { date: "Feb 10", label: "Voter Registration Closes", icon: "🔒", color: "#ec4899", desc: "Deadline to register. Late registrations are not accepted." },
    { date: "Feb 15", label: "Nominations Open", icon: "🏛️", color: "#f59e0b", desc: "Candidates can submit their official nomination papers." },
    { date: "Feb 28", label: "Nominations Close", icon: "📋", color: "#f97316", desc: "Final day to file candidate nominations." },
    { date: "Mar 1", label: "Campaign Period Begins", icon: "📣", color: "#10b981", desc: "Candidates may officially campaign, run ads, and hold rallies." },
    { date: "Apr 5", label: "Campaign Silence Begins", icon: "🤫", color: "#3b82f6", desc: "24–48 hour pre-poll silence. No new campaign activity allowed." },
    { date: "Apr 6", label: "Election Day 🗳️", icon: "🗳️", color: "#14b8a6", desc: "Polls open. Registered voters cast their ballots." },
    { date: "Apr 6", label: "Votes Counted", icon: "📊", color: "#6366f1", desc: "Counting begins after polls close under official supervision." },
    { date: "Apr 7", label: "Results Certified", icon: "🏆", color: "#8b5cf6", desc: "Official results declared. Winners begin transition process." }
  ],

  roles: [
    { icon: "🧑‍⚖️", title: "Election Commissioner", color: "#6366f1", desc: "Head of the election authority. Oversees the entire process, ensures fairness, and certifies results." },
    { icon: "🏛️", title: "Candidate", color: "#ec4899", desc: "A person who stands for election. Must meet eligibility requirements and abide by campaign finance rules." },
    { icon: "🗳️", title: "Voter", color: "#10b981", desc: "A registered citizen who casts a ballot on election day. The cornerstone of democracy." },
    { icon: "👁️", title: "Election Observer", color: "#f59e0b", desc: "Independent monitors — domestic or international — who verify the process is free and fair." },
    { icon: "🖊️", title: "Returning Officer", color: "#3b82f6", desc: "A local official who manages polling in a specific constituency and declares the result." },
    { icon: "📋", title: "Poll Worker", color: "#8b5cf6", desc: "Staff at polling stations who check voter IDs, issue ballots, and ensure orderly voting." },
    { icon: "📰", title: "Media", color: "#14b8a6", desc: "Journalists and broadcasters who report on the campaign, polls, and results, keeping the public informed." },
    { icon: "⚖️", title: "Election Court", color: "#f97316", desc: "Legal body that adjudicates election disputes, petitions, and alleged violations of election law." }
  ],

  faqs: [
    { category: "Registration", q: "Who is eligible to vote?", a: "Generally, citizens who have reached the voting age (18 in most countries), are registered on the electoral roll, and meet residency requirements are eligible to vote." },
    { category: "Registration", q: "How do I register to vote?", a: "Visit your election authority's website or office. You'll need a valid ID and proof of address. Some countries allow online registration; others require in-person visits." },
    { category: "Registration", q: "What is the deadline to register?", a: "Registration deadlines vary by country and election type, but are typically 2–4 weeks before Election Day. Check your local election authority's website for exact dates." },
    { category: "Registration", q: "Can I vote if I moved recently?", a: "Yes, but you must update your address on the electoral roll before the registration deadline. Your vote is cast in your new constituency." },
    { category: "Voting", q: "What happens on Election Day?", a: "Polling stations open (often 7am–7pm). Bring your voter ID. Poll workers check your registration, give you a ballot, you mark it privately, and deposit it in the sealed ballot box." },
    { category: "Voting", q: "Is my vote secret?", a: "Yes. Voting is done in a private booth. Ballots are anonymous — no one can link your vote back to you. This is a fundamental principle of free elections." },
    { category: "Voting", q: "What is a postal vote / absentee ballot?", a: "If you cannot attend a polling station (illness, travel, disability), you can request a postal ballot to be mailed to you. Apply before the deadline stated by your election authority." },
    { category: "Voting", q: "What if my name is not on the roll?", a: "Speak to the presiding officer at the polling station. You may be able to cast a provisional/tendered ballot which is counted if your eligibility is confirmed." },
    { category: "Counting", q: "How are votes counted?", a: "After polls close, sealed ballot boxes are transported to a counting centre. Officials open boxes, sort and tally ballots in front of candidate agents and observers. Results are reported to the central commission." },
    { category: "Counting", q: "What is a spoilt ballot?", a: "A ballot that is marked incorrectly (e.g., voted for two candidates, has writing on it) and cannot be counted. Officials decide if a ballot is valid based on clear voter intent rules." },
    { category: "Counting", q: "What is a recount?", a: "If the margin of victory is very small, any candidate can request a recount. The returning officer repeats the count under close observation to verify the result." },
    { category: "Results", q: "How is a winner determined?", a: "In a First-Past-The-Post system, the candidate with the most votes wins. In proportional systems, seats are allocated based on each party's share of the total vote." },
    { category: "Results", q: "What is the Electoral College?", a: "Used in the USA, it is an indirect voting system where citizens vote for 'electors' who then formally cast votes for the President. A candidate needs 270 of 538 electoral votes to win." },
    { category: "Results", q: "Can election results be challenged?", a: "Yes. Losing candidates can file an election petition in an election court alleging fraud, irregularities, or violation of election law within a specified period after results are declared." },
    { category: "Rights", q: "What are my rights as a voter?", a: "You have the right to vote without coercion, in secret, to see your name on the roll, to request assistance if you have a disability, and to complain about procedural violations." },
    { category: "Rights", q: "Can my employer prevent me from voting?", a: "In most democracies, employers are legally required to allow employees reasonable time to vote. Check your country's specific labor and election laws." }
  ],

  quiz: [
    { q: "What is the minimum voting age in most democracies?", opts: ["16", "18", "21", "25"], correct: 1, exp: "18 is the most common voting age worldwide, though some countries like Austria allow voting at 16." },
    { q: "What does 'First-Past-The-Post' mean?", opts: ["Longest campaign wins", "Most votes wins", "Most money wins", "First to file nominates"], correct: 1, exp: "First-Past-The-Post means the candidate with the highest number of votes wins, even without an absolute majority." },
    { q: "What is a ballot?", opts: ["A voting booth", "A political party", "A paper or digital form used to cast votes", "A campaign poster"], correct: 2, exp: "A ballot is the official document (paper or digital) on which voters record their choice." },
    { q: "Who manages and oversees national elections?", opts: ["The Prime Minister", "The Police", "The Election Commission", "The Parliament"], correct: 2, exp: "An independent Election Commission (or equivalent authority) manages elections to ensure they are free and fair." },
    { q: "What is a 'by-election'?", opts: ["An election held abroad", "An election held to fill a single vacant seat", "A practice election", "A second-round vote"], correct: 1, exp: "A by-election is called to fill a single vacant seat, usually caused by the death or resignation of an elected official." },
    { q: "What is voter suppression?", opts: ["Encouraging people to vote", "Efforts to prevent eligible voters from voting", "Counting votes twice", "Posting results early"], correct: 1, exp: "Voter suppression refers to strategies that discourage or prevent specific groups of eligible citizens from exercising their right to vote." },
    { q: "What is a polling station?", opts: ["A radio station broadcasting results", "A place where voters go to cast their ballots", "An office for candidate nominations", "A vote counting center"], correct: 1, exp: "A polling station (or polling place) is the designated location where registered voters go to cast their votes on Election Day." },
    { q: "What does 'campaign finance' refer to?", opts: ["Voter travel reimbursements", "Money raised and spent by candidates during elections", "Government printing of ballots", "Election observer salaries"], correct: 1, exp: "Campaign finance covers the money raised and spent by candidates and parties to campaign for election." },
    { q: "What is a referendum?", opts: ["A type of candidate debate", "A direct vote by citizens on a specific issue or law", "A recount of election results", "A nomination process"], correct: 1, exp: "A referendum is a direct vote in which an entire electorate is invited to vote on a particular proposal or question." },
    { q: "What is the purpose of election observers?", opts: ["To campaign for candidates", "To count votes faster", "To monitor and verify the election is free and fair", "To print ballots"], correct: 2, exp: "Election observers, domestic or international, independently monitor elections to verify that processes are transparent, free, and fair." }
  ],

  chatResponses: {
    "register": "To register to vote:\n1. Check you meet the eligibility criteria (age, citizenship, residency)\n2. Visit your election authority's website or local office\n3. Provide valid ID and proof of address\n4. Submit your registration before the deadline (usually 2–4 weeks before Election Day)\n\nOnce registered, you'll receive a voter card confirming your details! ✅",
    "election day": "On Election Day:\n• Bring your voter ID / voter card\n• Go to your assigned polling station (check your registration card)\n• A poll worker verifies your identity\n• You receive an official ballot\n• Mark your choice privately in a voting booth\n• Deposit your sealed ballot\n• You're done! 🗳️\n\nPolling hours are usually 7:00 AM – 7:00 PM.",
    "count": "Votes are counted by:\n1. Sealing ballot boxes at polling stations once polls close\n2. Transporting them to a central counting venue\n3. Officials open boxes, sort, and tally ballots\n4. Party agents and independent observers watch to prevent fraud\n5. Results are formally recorded and reported to the Election Commission\n6. The commission certifies and publishes the final results 📊",
    "electoral college": "The Electoral College is the US system of indirect presidential voting:\n• The US has 538 electoral votes\n• Each state gets electors = its senators + representatives\n• Citizens vote for electors who pledge to vote for a candidate\n• A candidate needs 270+ electoral votes to win\n• 'Winner-takes-all' applies in most states\n\nThis system means a candidate can win the presidency without winning the national popular vote 🏛️",
    "candidate": "To become a candidate you typically need to:\n1. Meet age requirements (varies by position)\n2. Be a citizen and resident of the relevant area\n3. File official nomination papers within the nomination window\n4. Pay a deposit (refunded if you receive enough votes)\n5. Comply with campaign finance laws\n\nFor student elections: check your school's specific rules!",
    "postal": "A postal vote (absentee ballot) lets you vote by mail if you can't attend in person:\n• Apply to your election authority before their deadline\n• They mail you a ballot with instructions\n• You mark it, seal it, and return it by post before Election Day\n• Great for travellers, the ill, or those with disabilities 📬",
    "result": "Results are certified after:\n1. All votes are counted (including postal votes)\n2. Any recounts are completed\n3. No successful legal challenges are pending\n4. The Election Commission formally certifies the tally\n5. The returning officer officially declares the winner\n\nResults can come in hours or days depending on the country and type of election 🏆",
    "right": "Your key voting rights include:\n• The right to vote without coercion or intimidation\n• The right to a secret ballot — no one can see your choice\n• The right to assistance if you have a disability\n• The right to complain about procedural violations\n• The right to request a provisional ballot if your name is missing\n• Protection from discrimination based on race, gender, or religion 🛡️",
    "spoil": "A spoilt ballot is one that cannot be counted because:\n• The voter marked more than one candidate\n• It has identifying marks or writing on it\n• It's damaged or left blank\n\nSpoilt ballots are still recorded in the total count, just not assigned to any candidate. Intentionally spoiling a ballot is a way some voters protest their choices.",
    "default": "Great question! I can help with topics like:\n• 🗳️ Voter registration\n• 📅 Election timelines\n• 📣 Campaign rules\n• 📊 How votes are counted\n• 🏆 How winners are declared\n• ⚖️ Voter rights\n\nTry asking something like: *'How do I register to vote?'* or *'What happens on Election Day?'*"
  }
};
