'use strict';

// ---------- Data ----------
// Every playlist id below was checked against YouTube oEmbed (title + channel) on 1 Nov 2026.
const yt = id => 'https://www.youtube.com/playlist?list=' + id;
const search = q => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q);
const go = slug => 'https://gateoverflow.in/questions/' + slug;
const CS_SYLLABUS = 'https://gate2027.iitm.ac.in/static/doc/GATE2027_Syllabus/CS_GATE2027_Syllabus.pdf';
const GA_SYLLABUS = 'https://gate2027.iitm.ac.in/static/doc/GATE2027_Syllabus/GA_GATE2027_Syllabus.pdf';

const SUBJECTS = [
  {
    name: 'General Aptitude',
    weight: 'Official: 10 questions, 15 marks',
    topics: ['Verbal: grammar, vocabulary, reading comprehension, narrative sequencing', 'Quantitative: data interpretation, ratios, percentages, logarithms, permutations, series, mensuration, basic probability', 'Analytical: deduction, induction, analogy, numerical reasoning', 'Spatial: rotation, mirroring, paper folding and cutting, 2D/3D patterns'],
    videos: [
      { title: 'GATE CSE 2026 - Aptitude Preparation Playlist', ch: 'KnowledgeGATE by Sanchit Sir', url: yt('PLmXKhU9FNesQr-O9_Ibx6Ei-USREN7NYE') },
      { title: 'Spatial aptitude / paper folding for GATE', ch: 'Gate Smashers', url: search('Gate Smashers GATE spatial aptitude paper folding'), search: true }
    ],
    syllabus: GA_SYLLABUS,
    practice: [{ label: 'General Aptitude past questions', url: go('general-aptitude') }]
  },
  {
    name: 'Engineering Mathematics and Discrete Mathematics',
    weight: 'Official: Engineering Maths 13 marks. Past papers: discrete maths 5–6 marks (2023–25)',
    topics: ['Propositional and first-order logic', 'Sets, relations, functions, partial orders, lattices, monoids, groups', 'Graphs: connectivity, matching, colouring', 'Combinatorics: counting, recurrences, generating functions', 'Linear algebra: matrices, determinants, linear systems, eigenvalues, LU decomposition', 'Calculus: limits, continuity, maxima/minima, mean value theorem, integration', 'Probability and statistics: distributions, mean/median/mode/SD, conditional probability, Bayes'],
    videos: [
      { title: 'Discrete Mathematics', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3') },
      { title: 'Discrete Mathematics', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3') },
      { title: 'Linear Algebra (Complete Playlist)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiGmXGb0t8YXtWl7qAe6hk25') },
      { title: 'Probability for GATE CSE', ch: 'Gate Smashers', url: search('Gate Smashers probability GATE CSE'), search: true }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Engineering Mathematics past questions (incl. discrete maths)', url: go('mathematics') }]
  },
  {
    name: 'Digital Logic',
    weight: 'Past papers: 5–6 marks (2023–25)',
    topics: ['Boolean algebra and minimisation: algebraic, K-map, tabular method', 'Combinational circuits: mux, decoder, adders', 'Sequential circuits: flip-flops, counters', 'Number representation: fixed and floating point, arithmetic'],
    videos: [
      { title: 'Digital Electronics', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm') },
      { title: 'Digital Logic for GATE', ch: 'Gate Smashers', url: search('Gate Smashers digital logic'), search: true }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Digital Logic past questions', url: go('digital-logic') }]
  },
  {
    name: 'Computer Organization and Architecture',
    weight: 'Past papers: 8–12 marks (2023–25)',
    topics: ['Instruction set and addressing modes', 'ALU, data path and control unit (hardwired, microprogrammed)', 'Memory hierarchy and cache mapping', 'I/O interface: interrupts and DMA', 'Instruction pipelining and hazards'],
    videos: [
      { title: 'Computer Organization and Architecture (Complete Playlist)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX') },
      { title: 'Computer Organization & Architecture (COA)', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q') }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'CO & Architecture past questions', url: go('co-and-architecture') }]
  },
  {
    name: 'Programming and Data Structures',
    weight: 'Past papers: 8–11 marks (2023–25)',
    topics: ['Programming in C: pointers, scope, parameter passing', 'Recursion', 'Arrays, stacks, queues, linked lists', 'Trees, binary search trees, binary heaps', 'Graphs and their representation'],
    videos: [
      { title: 'C Programming', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR') },
      { title: 'Data Structures', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y') },
      { title: 'Data Structure', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT') }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Programming and Data Structures past questions', url: go('programming-in-c') }]
  },
  {
    name: 'Algorithms',
    weight: 'Past papers: 6–8 marks (2023–25)',
    topics: ['Searching, sorting, hashing', 'Asymptotic worst-case time and space complexity', 'Greedy, dynamic programming, divide and conquer', 'Graph traversals (BFS/DFS)', 'Minimum spanning trees and shortest paths'],
    videos: [
      { title: 'Algorithms', ch: 'Abdul Bari', url: yt('PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O') },
      { title: 'Design and Analysis of algorithms (DAA)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa') }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Algorithms past questions', url: go('algorithms') }]
  },
  {
    name: 'Theory of Computation',
    weight: 'Past papers: 7–9 marks (2023–25)',
    topics: ['Regular expressions and finite automata', 'Context-free grammars and pushdown automata', 'Regular and context-free languages, pumping lemma', 'Turing machines and undecidability'],
    videos: [
      { title: 'TOC (Theory of Computation)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i') },
      { title: 'Theory of Computation (TOC)', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRhd3kSEsaT5rxvVnIh4UK-r') },
      { title: 'TOC English', ch: 'KnowledgeGATE by Sanchit Sir', url: yt('PLmXKhU9FNesT7LFumwF6l8JM5ys-PmlVi') }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Theory of Computation past questions', url: go('theory-of-computation') }]
  },
  {
    name: 'Compiler Design',
    weight: 'Past papers: 5–8 marks (2023–25)',
    topics: ['Lexical analysis', 'Parsing: LL and LR', 'Syntax-directed translation', 'Runtime environments', 'Intermediate code generation', 'Local optimisation; data-flow analysis: constant propagation, liveness, common subexpressions'],
    videos: [
      { title: 'Compiler Design (Complete Playlist)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiEKtKSIHYusizkESC42diyc') },
      { title: 'Compiler Design', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q') }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Compiler Design past questions', url: go('compiler-design') }]
  },
  {
    name: 'Operating Systems',
    weight: 'Past papers: 7–10 marks (2023–25)',
    topics: ['System calls, processes, threads, IPC', 'Concurrency and synchronisation', 'Deadlock', 'CPU and I/O scheduling', 'Memory management and virtual memory', 'File systems'],
    videos: [
      { title: 'Operating System (Complete Playlist)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p') },
      { title: 'Operating System', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O') },
      { title: 'Operating System for GATE', ch: 'KnowledgeGATE by Sanchit Sir', url: search('KnowledgeGATE operating system GATE'), search: true }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Operating System past questions', url: go('operating-system') }]
  },
  {
    name: 'Databases',
    weight: 'Past papers: 5–8 marks (2023–25)',
    topics: ['ER model', 'Relational algebra, tuple calculus, SQL', 'Integrity constraints and normal forms', 'File organisation and indexing (B and B+ trees)', 'Transactions and concurrency control'],
    videos: [
      { title: 'DBMS (Database Management system) Complete Playlist', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y') },
      { title: 'DBMS for GATE', ch: 'KnowledgeGATE by Sanchit Sir', url: search('KnowledgeGATE DBMS GATE'), search: true }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Databases past questions', url: go('databases') }]
  },
  {
    name: 'Computer Networks',
    weight: 'Past papers: 8–9 marks (2023–25)',
    topics: ['Layering; circuit, packet and virtual-circuit switching; performance metrics', 'Data link: error detection, MAC, Ethernet', 'Distance-vector and link-state routing', 'IPv4: fragmentation, CIDR, NAT', 'TCP flow and congestion control, socket API', 'DNS and HTTP'],
    videos: [
      { title: 'Computer Networks (Complete Playlist)', ch: 'Gate Smashers', url: yt('PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_') },
      { title: 'Computer Networks', ch: 'Neso Academy', url: yt('PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx') }
    ],
    syllabus: CS_SYLLABUS,
    practice: [{ label: 'Computer Networks past questions', url: go('computer-networks') }]
  }
];

const SAMPLES = [
  ['General Aptitude', 'Choose the word closest in meaning to “ephemeral”: (A) eternal (B) short-lived (C) fragile (D) invisible.', '(B) short-lived', '“Ephemeral” describes something that lasts a very short time. “Fragile” means easily broken, which is a different idea.'],
  ['Discrete Mathematics', 'How many edges does the complete graph K6 have?', '15', 'Every pair of the 6 vertices is joined once: C(6,2) = 6·5/2 = 15.'],
  ['Programming and Data Structures', 'On an empty stack: push 1, push 2, push 3, pop, push 4, pop, pop. Which element is on top now?', '1', 'Pops remove 3, then 4, then 2. Only 1 is left.'],
  ['Algorithms', 'Solve T(n) = 2T(n/2) + n.', 'Θ(n log n)', 'Master theorem: a = 2, b = 2, so n^(log_b a) = n, which matches f(n) = n. Equal case gives Θ(n log n), as in merge sort.'],
  ['Theory of Computation', 'Minimum number of states in a DFA that accepts binary strings whose value is divisible by 3?', '3', 'Track the remainder mod 3 (0, 1, 2). Reading bit b changes remainder r to (2r + b) mod 3. The three remainders are distinguishable, so 3 states are needed.'],
  ['Operating Systems', 'With a 32-bit virtual address and 4 KB pages, how many virtual pages are there?', '2^20 (1,048,576)', '4 KB = 2^12 bytes, so 12 bits are the offset; the remaining 20 bits select the page.'],
  ['Databases', 'R(A, B, C) has FDs A → B and B → C, and A is the only key. What is the highest normal form R satisfies?', '2NF', 'No partial dependency (the key has one attribute), so it is 2NF. B → C is a transitive dependency through a non-key attribute, so it is not 3NF.'],
  ['Computer Networks', 'Which provides flow control: TCP or UDP?', 'TCP', 'TCP uses the receiver’s advertised window to limit the sender. UDP has no flow or congestion control.'],
  ['Computer Organization and Architecture', 'A 5-stage pipeline runs 100 instructions with no stalls. How many cycles does it take?', '104', 'The first instruction takes 5 cycles; each of the remaining 99 finishes one cycle later: 5 + 99 = 104.'],
  ['Compiler Design', 'How many tokens are in the C statement  int x = y + 10;', '7', 'int, x, =, y, +, 10, ; — whitespace is not a token.']
];

// type: mcq (one answer), msq (one or more), nat (number). Answers for mcq/msq are option indexes.
const MOCK = [
  { s: 'General Aptitude', type: 'mcq', marks: 1, q: 'If 6 machines make 6 parts in 6 minutes, how many minutes do 12 machines take to make 12 parts?', options: ['3', '6', '12', '24'], answer: [1], why: 'Each machine makes one part in 6 minutes. Twelve machines working in parallel make twelve parts in the same 6 minutes.' },
  { s: 'General Aptitude', type: 'nat', marks: 2, q: 'A price is raised by 20% and then reduced by 10%. What is the net percentage change? (Enter a number; use a minus sign for a decrease.)', answer: 8, why: '1.20 × 0.90 = 1.08, so the price rises by 8%.' },
  { s: 'Engineering Mathematics', type: 'mcq', marks: 2, q: 'What are the eigenvalues of the matrix [[2, 1], [1, 2]]?', options: ['2 and 2', '1 and 3', '0 and 4', '−1 and 3'], answer: [1], why: 'det(A − λI) = (2 − λ)² − 1 = 0 gives λ = 1 or 3. Check: their sum is 4 (trace) and product is 3 (determinant).' },
  { s: 'Programming and Data Structures', type: 'nat', marks: 1, q: 'What is the maximum number of nodes in a binary tree of height 4, where a tree with only a root has height 0?', answer: 31, why: 'Levels 0 to 4 hold at most 1 + 2 + 4 + 8 + 16 = 2⁵ − 1 = 31 nodes.' },
  { s: 'Algorithms', type: 'mcq', marks: 1, q: 'Quicksort always picks the last element as the pivot. What is its running time on input that is already sorted?', options: ['Θ(n)', 'Θ(n log n)', 'Θ(n²)', 'Θ(log n)'], answer: [2], why: 'Each partition splits off only the pivot, giving sizes n−1, n−2, … and a total of Θ(n²) comparisons.' },
  { s: 'Operating Systems', type: 'msq', marks: 2, q: 'Which of these are necessary conditions for deadlock? (Select all that apply.)', options: ['Mutual exclusion', 'Hold and wait', 'Resources can be preempted from processes', 'Circular wait'], answer: [0, 1, 3], why: 'The four Coffman conditions are mutual exclusion, hold and wait, no preemption and circular wait. Being able to preempt resources is the opposite of “no preemption”.' },
  { s: 'Computer Networks', type: 'nat', marks: 1, q: 'How many usable host addresses are there in a /27 IPv4 subnet?', answer: 30, why: '32 − 27 = 5 host bits gives 2⁵ = 32 addresses. Subtract the network and broadcast addresses: 30.' },
  { s: 'Theory of Computation', type: 'mcq', marks: 2, q: 'Which of these languages over {a, b} is NOT regular?', options: ['{aⁿbⁿ | n ≥ 0}', '{aᵐbⁿ | m, n ≥ 0}', 'Strings with an even number of a’s', '{aⁿbⁿ | 0 ≤ n ≤ 10}'], answer: [0], why: 'aⁿbⁿ needs unbounded counting, which the pumping lemma shows a finite automaton cannot do. Option D is a finite language, so it is regular.' },
  { s: 'Databases', type: 'msq', marks: 2, q: 'Which statements are true? (Select all that apply.)', options: ['Every relation in BCNF is also in 3NF', 'Every relation with exactly two attributes is in BCNF', 'A lossless, dependency-preserving decomposition into 3NF always exists', 'A lossless BCNF decomposition always preserves every functional dependency'], answer: [0, 1, 2], why: 'BCNF is stricter than 3NF. With two attributes any non-trivial FD has a key on its left side. The 3NF synthesis algorithm guarantees both properties, but BCNF decomposition can lose dependencies (for example AB → C, C → B).' },
  { s: 'Computer Organization and Architecture', type: 'nat', marks: 2, q: 'A 64 KB, 4-way set-associative cache uses 64-byte blocks. How many sets does it have?', answer: 256, why: '64 KB / 64 B = 1024 blocks. 1024 blocks / 4 ways = 256 sets.' },
  { s: 'Digital Logic', type: 'nat', marks: 1, q: 'What is the minimum number of 2-input NAND gates needed to implement a 2-input XOR?', answer: 4, why: 'The standard construction shares one NAND(A, B) gate between two further NANDs and combines them with a fourth: 4 gates.' },
  { s: 'Compiler Design', type: 'mcq', marks: 1, q: 'Which compiler phase is most directly implemented with finite automata?', options: ['Lexical analysis', 'Syntax analysis', 'Semantic analysis', 'Code optimisation'], answer: [0], why: 'Tokens are described by regular expressions, which a scanner recognises with finite automata. Parsing needs pushdown automata.' }
];
const MOCK_MINUTES = 25;

// Week start dates (Mondays). Phases end at the last day of the exam window.
const ROADMAP = [
  { start: '2026-11-02', phase: 'Concepts + topic practice', title: 'Programming and Data Structures', tasks: ['Watch C pointers, recursion and linked-list lectures', 'Revise stacks, queues, trees, BST and heaps', 'Solve 30+ past questions on C and data structures', 'Start an error log: note every mistake and why it happened', 'General Aptitude: 30 minutes, 4 days this week'] },
  { start: '2026-11-09', phase: 'Concepts + topic practice', title: 'Algorithms', tasks: ['Asymptotics, recurrences and the master theorem', 'Sorting, hashing, greedy, DP, divide and conquer', 'Graph traversals, MST and shortest paths', 'Solve 30+ past questions on algorithms', 'General Aptitude: 30 minutes, 4 days this week'] },
  { start: '2026-11-16', phase: 'Concepts + topic practice', title: 'Discrete and Engineering Mathematics', tasks: ['Logic, sets, relations, groups and lattices', 'Graph theory and combinatorics', 'Linear algebra, calculus and probability', 'Solve 30+ past questions on maths', 'Make a one-page formula sheet'] },
  { start: '2026-11-23', phase: 'Concepts + topic practice', title: 'Digital Logic + COA', tasks: ['K-maps, combinational and sequential circuits, number systems', 'Addressing modes, cache mapping and memory hierarchy', 'Pipelining, hazards, interrupts and DMA', 'Solve 30+ past questions on Digital Logic and COA'] },
  { start: '2026-11-30', phase: 'Concepts + topic practice', title: 'Operating Systems', tasks: ['Processes, threads, scheduling', 'Synchronisation and deadlock', 'Memory management, paging and virtual memory, file systems', 'Solve 30+ past questions on OS', 'Take one subject-wise timed test (OS)'] },
  { start: '2026-12-07', phase: 'Concepts + topic practice', title: 'Databases', tasks: ['ER model, relational algebra and SQL', 'Functional dependencies and normal forms', 'Indexing (B/B+ trees), transactions and concurrency control', 'Solve 30+ past questions on DBMS'] },
  { start: '2026-12-14', phase: 'Concepts + topic practice', title: 'Computer Networks', tasks: ['Layering, switching and performance metrics', 'Data link layer, MAC and Ethernet; routing algorithms', 'IPv4, CIDR, NAT; TCP flow and congestion control; DNS and HTTP', 'Solve 30+ past questions on CN'] },
  { start: '2026-12-21', phase: 'Concepts + topic practice', title: 'Theory of Computation + Compiler Design', tasks: ['Finite automata, regular expressions and the pumping lemma', 'CFGs, PDAs, Turing machines and decidability', 'Lexing, LL/LR parsing, SDT, intermediate code, data-flow analysis', 'Solve 30+ past questions on TOC and CD'] },
  { start: '2026-12-28', phase: 'Revision + error review', title: 'Revise maths, programming, algorithms', tasks: ['Re-solve every question in your error log for these subjects', 'Mixed past-paper set: 40 questions, timed', 'Take your first full-length 3-hour mock', 'Analyse the mock: list weak topics'] },
  { start: '2027-01-04', phase: 'Revision + error review', title: 'Revise DL, COA, OS', tasks: ['Short notes for Digital Logic, COA and OS', 'Mixed past-paper set: 40 questions, timed', 'Full-length mock + analysis', 'General Aptitude: one full GA section daily'] },
  { start: '2027-01-11', phase: 'Revision + error review', title: 'Revise DBMS, CN, TOC, CD', tasks: ['Short notes for DBMS, CN, TOC and CD', 'Re-solve error-log questions for these subjects', 'Two full-length mocks + analysis'] },
  { start: '2027-01-18', phase: 'Full-length timed mocks', title: 'Mock week 1', tasks: ['Three full-length mocks at your expected exam time of day', 'After each mock, spend as long reviewing as you spent writing it', 'Fix the three weakest topics from the mocks'] },
  { start: '2027-01-25', phase: 'Full-length timed mocks', title: 'Mock week 2', tasks: ['Two or three full-length mocks', 'Read your formula sheet and short notes once', 'Practise the virtual calculator for NAT questions'] },
  { start: '2027-02-01', phase: 'Light final review', title: 'Exam window opens 6 Feb', tasks: ['One last mock early in the week, then stop new topics', 'Light revision of short notes and the error log', 'Check your admit card, centre and paper date', 'Sleep on a fixed schedule'] },
  { start: '2027-02-08', phase: 'Light final review', title: 'If your paper is in week 2 or 3', tasks: ['Daily 2–3 hours of light revision only', 'Re-read formula sheet and GA tricks', 'Keep the routine: same wake time as your exam shift'] },
  { start: '2027-02-15', phase: 'Light final review', title: 'Final week of the exam window', tasks: ['Light review until your paper', 'Rest the day before your exam'] }
];
const EXAM_WINDOW_END = '2027-02-21';
const FIRST_EXAM = '2027-02-06';

// ---------- Helpers ----------
const $ = sel => document.querySelector(sel);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'text') n.textContent = v;
    else if (k === 'html') n.innerHTML = v;
    else n.setAttribute(k, v);
  }
  n.append(...kids.filter(k => k != null));
  return n;
};
const ext = (href, text) => el('a', { href, target: '_blank', rel: 'noopener' , text });
const localDate = iso => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const today = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
const daysBetween = (a, b) => Math.round((b - a) / 864e5); // round absorbs DST shifts
const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

// ---------- Countdown ----------
function renderCountdown() {
  const days = daysBetween(today(), localDate(FIRST_EXAM));
  const html = days > 1 ? `<strong>${days}</strong> days until the first exam date (6 Feb 2027)`
    : days === 1 ? '<strong>1</strong> day until the first exam date (6 Feb 2027)'
    : days === 0 ? '<strong>Today</strong> is the first exam date (6 Feb 2027)'
    : 'The GATE 2027 exam window has started (first exam date was 6 Feb 2027)';
  const c = $('#countdown');
  if (c.innerHTML !== html) c.innerHTML = html; // only touch the live region when the day changes
}

// ---------- Learn ----------
function renderSubjects() {
  const root = $('#subjects');
  SUBJECTS.forEach(s => {
    const videos = el('ul');
    s.videos.forEach(v => videos.append(el('li', {},
      ext(v.url, v.search ? 'Search: ' + v.title : v.title),
      v.search ? el('span', { class: 'tag', text: 'search link' }) : null,
      el('br'), el('span', { class: 'channel', text: 'YouTube · ' + v.ch })
    )));
    const more = el('ul');
    more.append(el('li', {}, ext(s.syllabus, 'Official GATE 2027 syllabus (PDF)')));
    s.practice.forEach(p => more.append(el('li', {}, ext(p.url, p.label), el('span', { class: 'provider', text: ' · GATE Overflow' }))));
    root.append(el('details', { class: 'subject' },
      el('summary', {}, el('h2', { text: s.name }), el('span', { class: 'weight', text: s.weight })),
      el('div', { class: 'subject-body' },
        el('div', {}, el('h3', { text: 'Key topics' }), el('ul', {}, ...s.topics.map(t => el('li', { text: t })))),
        el('div', {}, el('h3', { text: 'Videos' }), videos, el('h3', { text: 'Syllabus and practice' }), more)
      )
    ));
  });
}

// ---------- Practice ----------
function renderPractice() {
  const sel = $('#practice-subject');
  SUBJECTS.forEach((s, i) => sel.append(el('option', { value: i, text: s.name })));
  const show = () => {
    const s = SUBJECTS[sel.value];
    $('#practice-links').replaceChildren(el('ul', { class: 'links' },
      ...s.practice.map(p => el('li', {}, ext(p.url, p.label), el('span', { class: 'provider', text: ' GATE Overflow (external, free; answers discussed by the community)' }))),
      el('li', {}, ext(s.syllabus, 'Official syllabus (PDF)'), el('span', { class: 'provider', text: ' GATE 2027, IIT Madras' }))
    ));
  };
  sel.addEventListener('change', show);
  show();

  const root = $('#samples');
  SAMPLES.forEach(([subj, q, a, why], i) => root.append(el('article', { class: 'sample', 'aria-label': `Sample question ${i + 1}` },
    el('p', { class: 'channel', text: subj }),
    el('p', { text: q }),
    el('details', {}, el('summary', { text: 'Show answer' }), el('p', {}, el('strong', { text: 'Answer: ' + a })), el('p', { text: why }))
  )));
}

// ---------- Mock test ----------
const mock = { answers: [], current: 0, endsAt: 0, timer: null, running: false };

// The test lives only in memory, so warn before a page change throws it away.
addEventListener('beforeunload', e => { if (mock.running) e.preventDefault(); });

function mockIntro() {
  const total = MOCK.reduce((t, q) => t + q.marks, 0);
  $('#mock-root').replaceChildren(el('div', { class: 'card' },
    el('p', {}, el('strong', { text: 'Sample practice test. This is not an official GATE mock and not a predicted paper.' })),
    el('p', { text: `${MOCK.length} original questions · ${total} marks · ${MOCK_MINUTES} minutes. Includes MCQ (one answer), MSQ (one or more answers) and NAT (type a number).` }),
    el('p', { text: 'Marking follows the GATE pattern: a wrong MCQ loses 1/3 of its marks; MSQ and NAT have no negative marks and no partial credit. Nothing is saved or sent anywhere.' }),
    el('button', { type: 'button', class: 'btn', id: 'mock-start', text: 'Start the test' })
  ));
  $('#mock-start').addEventListener('click', mockStart);
}

function mockStart() {
  mock.answers = MOCK.map(() => null);
  mock.current = 0;
  mock.endsAt = Date.now() + MOCK_MINUTES * 60e3;
  mock.running = true;
  $('#mock-root').replaceChildren(
    el('div', { class: 'mock-bar' },
      el('p', { class: 'timer', id: 'timer', role: 'timer' }),
      el('p', { id: 'answered-count', class: 'channel' }),
      el('button', { type: 'button', class: 'btn', id: 'mock-submit', text: 'Submit test' })
    ),
    el('p', { class: 'sr-only', id: 'timer-alert', 'aria-live': 'assertive', style: 'position:absolute;left:-9999px' }),
    el('nav', { 'aria-label': 'Question navigation' }, el('ol', { class: 'palette', id: 'palette' })),
    el('div', { class: 'card', id: 'question' })
  );
  $('#mock-submit').addEventListener('click', () => {
    const left = mock.answers.filter(a => a == null).length;
    if (confirm(left ? `${left} question(s) unanswered. Submit anyway?` : 'Submit the test?')) mockFinish();
  });
  MOCK.forEach((_, i) => $('#palette').append(el('li', {}, el('button', { type: 'button', 'data-i': i, text: i + 1 }))));
  $('#palette').addEventListener('click', e => { const b = e.target.closest('button'); if (b) mockGo(+b.dataset.i); });
  tick();
  mock.timer = setInterval(tick, 1000);
  mockGo(0);
}

function tick() {
  const left = Math.max(0, Math.round((mock.endsAt - Date.now()) / 1000));
  const t = $('#timer');
  if (!t) return;
  t.textContent = `Time left: ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
  t.classList.toggle('low', left <= 120);
  // Background tabs throttle setInterval, so compare against thresholds instead of exact seconds.
  const warn = left <= 60 ? '1 minute left' : left <= 300 ? '5 minutes left' : '';
  if (warn && $('#timer-alert').textContent !== warn) $('#timer-alert').textContent = warn;
  if (left === 0) mockFinish(true);
}

function saveCurrent() {
  const q = MOCK[mock.current], box = $('#question');
  let v = null;
  if (q.type === 'nat') {
    const raw = box.querySelector('input').value.trim();
    v = raw === '' || isNaN(+raw) ? null : +raw;
  } else {
    const picked = [...box.querySelectorAll('input:checked')].map(i => +i.value);
    v = picked.length ? picked : null;
  }
  mock.answers[mock.current] = v;
  updatePalette();
}

function updatePalette() {
  document.querySelectorAll('#palette button').forEach((b, i) => {
    const done = mock.answers[i] != null;
    b.classList.toggle('answered', done);
    b.setAttribute('aria-label', `Question ${i + 1}, ${done ? 'answered' : 'not answered'}`);
    if (i === mock.current) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
  });
  const n = mock.answers.filter(a => a != null).length;
  $('#answered-count').textContent = `${n} of ${MOCK.length} answered`;
}

function mockGo(i) {
  mock.current = i;
  const q = MOCK[i], a = mock.answers[i];
  const label = { mcq: 'MCQ – choose one', msq: 'MSQ – choose one or more', nat: 'NAT – enter a number' }[q.type];
  const fs = el('fieldset', {}, el('legend', {}, el('span', { class: 'qmeta', text: `Question ${i + 1} of ${MOCK.length} · ${q.s} · ${label} · ${q.marks} mark${q.marks > 1 ? 's' : ''}` }), el('br'), document.createTextNode(q.q)));
  if (q.type === 'nat') {
    const inp = el('input', { type: 'number', step: 'any', id: 'nat', inputmode: 'decimal' });
    if (a != null) inp.value = a;
    fs.append(el('label', { for: 'nat', text: 'Your answer' }), inp);
  } else {
    q.options.forEach((o, j) => {
      const inp = el('input', { type: q.type === 'mcq' ? 'radio' : 'checkbox', name: 'opt', value: j });
      if (a && a.includes(j)) inp.checked = true;
      fs.append(el('label', { class: 'option' }, inp, el('span', { text: `(${'ABCD'[j]}) ${o}` })));
    });
  }
  const prev = el('button', { type: 'button', class: 'btn ghost', text: '← Previous' });
  const next = el('button', { type: 'button', class: 'btn', text: i === MOCK.length - 1 ? 'Save' : 'Save & next →' });
  const clear = el('button', { type: 'button', class: 'btn ghost', text: 'Clear answer' });
  prev.disabled = i === 0;
  fs.addEventListener('input', saveCurrent);
  fs.addEventListener('change', saveCurrent);
  prev.addEventListener('click', () => mockGo(i - 1));
  next.addEventListener('click', () => { saveCurrent(); if (i < MOCK.length - 1) mockGo(i + 1); else $('#mock-submit').focus(); });
  clear.addEventListener('click', () => { fs.querySelectorAll('input').forEach(x => { x.checked = false; if (x.type === 'number') x.value = ''; }); saveCurrent(); });
  $('#question').replaceChildren(fs, el('div', { class: 'qnav' }, prev, clear, el('span', { class: 'spacer' }), next));
  updatePalette();
  fs.querySelector('input').focus({ preventScroll: true });
}

function grade(q, a) {
  if (a == null) return { status: 'unanswered', marks: 0 };
  const right = q.type === 'nat' ? Math.abs(a - q.answer) < 1e-6
    : a.length === q.answer.length && q.answer.every(x => a.includes(x));
  if (right) return { status: 'correct', marks: q.marks };
  return { status: 'wrong', marks: q.type === 'mcq' ? -q.marks / 3 : 0 };
}

function showAnswer(q, a) {
  if (a == null) return 'not answered';
  return q.type === 'nat' ? String(a) : a.map(j => 'ABCD'[j]).join(', ');
}

function mockFinish(timeUp) {
  clearInterval(mock.timer);
  mock.running = false;
  const results = MOCK.map((q, i) => grade(q, mock.answers[i]));
  const total = MOCK.reduce((t, q) => t + q.marks, 0);
  const score = results.reduce((t, r) => t + r.marks, 0);
  const count = s => results.filter(r => r.status === s).length;
  const icon = { correct: ['ok', '✓ Correct'], wrong: ['bad', '✗ Wrong'], unanswered: ['skipq', '– Not answered'] };
  const list = el('div');
  MOCK.forEach((q, i) => {
    const r = results[i];
    const correct = q.type === 'nat' ? String(q.answer) : q.answer.map(j => `(${'ABCD'[j]}) ${q.options[j]}`).join('; ');
    list.append(el('div', { class: 'result-q' },
      el('h3', { text: `Q${i + 1}. ${q.s}` }),
      el('p', { text: q.q }),
      el('p', {}, el('span', { class: icon[r.status][0], text: icon[r.status][1] }), document.createTextNode(` · marks: ${+r.marks.toFixed(2)} of ${q.marks}`)),
      el('p', { text: 'Your answer: ' + showAnswer(q, mock.answers[i]) }),
      el('p', { text: 'Correct answer: ' + correct }),
      el('p', { text: 'Explanation: ' + q.why })
    ));
  });
  const again = el('button', { type: 'button', class: 'btn', text: 'Retake the test' });
  again.addEventListener('click', mockStart);
  $('#mock-root').replaceChildren(el('div', { class: 'card' },
    el('h2', { id: 'result-h', tabindex: '-1', text: timeUp ? 'Time is up – your result' : 'Your result' }),
    el('p', { class: 'score', text: `Score: ${+score.toFixed(2)} out of ${total}` }),
    el('p', { text: `${count('correct')} correct · ${count('wrong')} wrong · ${count('unanswered')} not answered. This sample test does not predict your GATE score.` }),
    again, list
  ));
  $('#result-h').focus();
}

// ---------- Roadmap ----------
const KEY = 'gate27-roadmap-done';
const loadDone = () => { try { return new Set(JSON.parse(localStorage.getItem(KEY)) || []); } catch { return new Set(); } };
const saveDone = done => { try { localStorage.setItem(KEY, JSON.stringify([...done])); } catch { /* storage blocked: ticks last for this visit only */ } };

function renderRoadmap() {
  const done = loadDone();
  const now = today();
  const total = ROADMAP.reduce((t, w) => t + w.tasks.length, 0);
  const progress = () => {
    $('#rm-progress').value = done.size / total;
    $('#rm-progress-text').textContent = `${done.size} of ${total} tasks done (${Math.round(done.size / total * 100)}%)`;
  };
  let current = -1;
  const list = $('#weeks');
  list.replaceChildren();
  ROADMAP.forEach((w, wi) => {
    const start = localDate(w.start), end = new Date(start); end.setDate(end.getDate() + 6);
    const isCurrent = now >= start && now <= end;
    if (isCurrent) current = wi;
    const ul = el('ul');
    w.tasks.forEach((t, ti) => {
      const id = `w${wi}t${ti}`;
      const cb = el('input', { type: 'checkbox', id });
      cb.checked = done.has(id);
      cb.addEventListener('change', () => { cb.checked ? done.add(id) : done.delete(id); saveDone(done); progress(); });
      ul.append(el('li', {}, el('label', { for: id }, cb, el('span', { text: t }))));
    });
    list.append(el('li', { class: 'week' + (isCurrent ? ' current' : now > end ? ' past' : '') },
      el('h2', {}, document.createTextNode(`Week ${wi + 1}: ${w.title}`), isCurrent ? el('span', { class: 'badge', text: 'This week' }) : null),
      el('p', { class: 'when', text: `${fmt(start)} – ${fmt(end)} · ${w.phase}` }),
      ul
    ));
  });
  const phase = $('#phase');
  if (current >= 0) phase.textContent = `Current phase: ${ROADMAP[current].phase} (week ${current + 1} of ${ROADMAP.length}, ${ROADMAP[current].title}).`;
  else if (now < localDate(ROADMAP[0].start)) phase.textContent = `The plan starts on ${fmt(localDate(ROADMAP[0].start))}. Use the time before then to collect resources and try the sample test.`;
  else if (now > localDate(EXAM_WINDOW_END)) phase.textContent = 'The GATE 2027 exam window has ended. Good luck with your results!';
  progress();
  $('#rm-reset').onclick = () => { if (confirm('Clear all roadmap ticks in this browser?')) { done.clear(); saveDone(done); renderRoadmap(); } };
}

// ---------- Init ----------
renderCountdown();
setInterval(renderCountdown, 60e3);
// Each page carries only its own container; render whichever is present.
if ($('#subjects')) renderSubjects();
if ($('#practice-subject')) renderPractice();
if ($('#mock-root')) mockIntro();
if ($('#weeks')) renderRoadmap();
