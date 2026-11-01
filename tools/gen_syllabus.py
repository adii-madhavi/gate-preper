"""Generate syllabus.js: official GATE 2027 CS/GA syllabus topics, each with a video and a GATE Overflow tag.

usage: python tools/gen_syllabus.py videos.json tools/go_tag_cache.json syllabus.js
Video spec: 'key#index' (from videos.json, scraped from verified playlists) or 'search:query'.
GO tags are checked through the Wayback availability API; unverified tags fall back to the subject category.
"""
import json, sys, urllib.request, urllib.parse, os

V = json.load(open(sys.argv[1], encoding='utf-8'))
CACHE_PATH = sys.argv[2]
CACHE = json.load(open(CACHE_PATH)) if os.path.exists(CACHE_PATH) else {}

CH = {'gs': 'Gate Smashers', 'neso': 'Neso Academy', 'ab': 'Abdul Bari', 'go': 'GO Classes',
      'gp': 'Dr. Gajendra Purohit', 'kg': 'KnowledgeGATE'}

# subject -> (GO category slug, [(section heading or None, [(topic, video spec, [tag candidates])])])
S = {
 'General Aptitude': ('general-aptitude', [
  ('Verbal Aptitude', [
   ('Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, other parts of speech', 'search:English grammar for GATE general aptitude', ['english-grammar']),
   ('Basic vocabulary: words, idioms and phrases in context', 'search:vocabulary idioms phrases GATE general aptitude', ['vocabulary', 'word-meaning']),
   ('Reading and comprehension', 'search:reading comprehension GATE general aptitude', ['passage-reading']),
   ('Narrative sequencing', 'search:narrative sequencing GATE aptitude', ['sentence-ordering'])]),
  ('Quantitative Aptitude', [
   ('Data interpretation: bar graphs, pie charts, 2D and 3D plots, maps and tables', 'search:data interpretation GATE general aptitude', ['data-interpretation']),
   ('Numerical computation and estimation: ratios, percentages, powers, exponents and logarithms, permutations and combinations, series', 'search:quantitative aptitude ratio percentage logarithm GATE', ['ratio-proportion', 'percentage']),
   ('Mensuration and geometry', 'search:mensuration geometry GATE general aptitude', ['geometry']),
   ('Elementary statistics and probability', 'search:statistics probability GATE general aptitude', ['probability'])]),
  ('Analytical Aptitude', [
   ('Logic: deduction and induction', 'search:logical reasoning deduction induction GATE aptitude', ['logical-reasoning']),
   ('Analogy', 'search:analogy GATE general aptitude', ['analogies', 'analogy', 'word-pairs']),
   ('Numerical relations and reasoning', 'search:numerical reasoning GATE general aptitude', ['numerical-computation'])]),
  ('Spatial Aptitude', [
   ('Transformation of shapes: translation, rotation, scaling, mirroring, assembling and grouping', 'search:spatial aptitude rotation mirroring GATE', ['spatial-reasoning', 'spatial-aptitude', 'rotation', 'figure-pattern']),
   ('Paper folding, cutting and patterns in 2 and 3 dimensions', 'search:paper folding cutting GATE spatial aptitude', ['paper-folding'])])]),
 'Engineering Mathematics and Discrete Mathematics': ('mathematics', [
  ('Discrete Mathematics', [
   ('Propositional logic', 'neso_dm#1', ['propositional-logic']),
   ('First order logic', 'neso_dm#31', ['first-order-logic']),
   ('Sets', 'gs_dm#1', ['set-theory']),
   ('Relations', 'gs_dm#3', ['relations']),
   ('Functions', 'gs_dm#21', ['functions']),
   ('Partial orders', 'gs_dm#12', ['partial-order']),
   ('Lattices', 'neso_dm#138', ['lattice']),
   ('Monoids', 'gs_dm#18', ['monoid', 'monoids', 'semigroup', 'group-theory']),
   ('Groups', 'gs_dm#19', ['group-theory']),
   ('Graphs: connectivity', 'go_dm#50', ['graph-connectivity']),
   ('Graphs: matching', 'go_dm#69', ['graph-matching']),
   ('Graphs: colouring', 'go_dm#49', ['graph-coloring']),
   ('Combinatorics: counting', 'go_dm#54', ['counting']),
   ('Recurrence relations', 'search:solving recurrence relations characteristic equation discrete mathematics GATE', ['recurrence-relation', 'recurrence-relations', 'recurrence']),
   ('Generating functions', 'search:generating functions discrete mathematics GATE CSE', ['generating-functions'])]),
  ('Linear Algebra', [
   ('Matrices', 'gs_la2#0', ['matrix']),
   ('Determinants', 'gs_la2#5', ['determinant']),
   ('System of linear equations', 'gs_la2#14', ['system-of-equations']),
   ('Eigenvalues and eigenvectors', 'go_la#29', ['eigen-value']),
   ('LU decomposition', 'go_la#43', ['lu-decomposition'])]),
  ('Calculus', [
   ('Limits', 'gp_calc#3', ['limits']),
   ('Continuity and differentiability', 'gp_calc#5', ['continuity', 'differentiation']),
   ('Maxima and minima', 'go_calc#4', ['maxima-minima']),
   ('Mean value theorem', 'go_calc#4', ['mean-value-theorem']),
   ('Integration', 'gp_calc#9', ['integration', 'definite-integral'])]),
  ('Probability and Statistics', [
   ('Random variables', 'gs_prob#14', ['random-variable']),
   ('Uniform distribution', 'gs_prob#25', ['uniform-distribution']),
   ('Normal distribution', 'gs_prob#23', ['normal-distribution']),
   ('Exponential distribution', 'gs_prob#26', ['exponential-distribution']),
   ('Poisson distribution', 'gs_prob#19', ['poisson-distribution']),
   ('Binomial distribution', 'gs_prob#17', ['binomial-distribution']),
   ('Mean, median, mode and standard deviation', 'gs_prob#18', ['statistics']),
   ('Conditional probability', 'gs_prob#9', ['conditional-probability']),
   ('Bayes theorem', 'gs_prob#13', ['bayes-theorem'])])]),
 'Digital Logic': ('digital-logic', [
  (None, [
   ('Boolean algebra', 'neso_de#6', ['boolean-algebra']),
   ('Minimization: algebraic technique', 'neso_de#8', ['boolean-algebra']),
   ('Minimization: Karnaugh map', 'neso_de#80', ['k-map']),
   ('Minimization: tabular method (Quine–McCluskey)', 'neso_de#92', ['min-sum-of-products-form', 'k-map']),
   ('Design of combinational circuits', 'neso_de#117', ['combinational-circuit', 'multiplexer']),
   ('Design of sequential circuits', 'neso_de#142', ['sequential-circuit', 'flip-flop']),
   ('Number representation (fixed point)', 'neso_de#55', ['number-representation']),
   ('Fixed-point arithmetic', 'neso_de#57', ['number-representation']),
   ('Floating-point representation and arithmetic', 'neso_coa#84', ['floating-point-representation', 'ieee-representation'])])]),
 'Computer Organization and Architecture': ('co-and-architecture', [
  (None, [
   ('Instruction set', 'gs_coa#6', ['instruction-format', 'machine-instruction']),
   ('Addressing modes', 'gs_coa#18', ['addressing-modes']),
   ('Design of arithmetic and logic unit (ALU)', 'search:ALU design computer organization architecture GATE', ['alu', 'arithmetic-logic-unit', 'data-path']),
   ('Design of control unit: hardwired', 'search:hardwired control unit design computer organization GATE', ['control-unit']),
   ('Design of control unit: microprogrammed', 'search:microprogrammed control unit computer organization GATE', ['microprogramming']),
   ('Memory interfacing', 'neso_coa#4', ['memory-interfacing']),
   ('Memory hierarchy and performance', 'gs_coa#31', ['memory-hierarchy']),
   ('Cache memory mapping', 'gs_coa#35', ['cache-memory']),
   ('I/O interface', 'gs_coa#60', ['io-handling']),
   ('Interrupts', 'gs_coa#61', ['interrupts']),
   ('DMA', 'gs_coa#65', ['dma']),
   ('Instruction pipelining', 'gs_coa#48', ['pipelining']),
   ('Pipeline hazards', 'gs_coa#52', ['pipelining'])])]),
 'Programming and Data Structures': ('programming-in-c', [
  (None, [
   ('Programming in C', 'neso_c#0', ['programming-in-c']),
   ('Recursion', 'neso_c#73', ['recursion']),
   ('Arrays', 'gs_ds#2', ['array']),
   ('Stacks', 'gs_ds#29', ['stack']),
   ('Queues', 'gs_ds#45', ['queue']),
   ('Linked lists', 'gs_ds#15', ['linked-list']),
   ('Trees', 'gs_ds#51', ['tree', 'binary-tree']),
   ('Binary search trees', 'gs_ds#52', ['binary-search-tree']),
   ('Binary heaps', 'gs_daa#31', ['heap']),
   ('Graphs', 'search:graph representation adjacency matrix adjacency list data structures', ['graph-algorithms'])])]),
 'Algorithms': ('algorithms', [
  (None, [
   ('Searching', 'ab_algo#29', ['searching', 'binary-search']),
   ('Sorting', 'ab_algo#33', ['sorting']),
   ('Hashing', 'ab_algo#78', ['hashing']),
   ('Asymptotic worst case time and space complexity', 'ab_algo#10', ['asymptotic-notation', 'time-complexity']),
   ('Greedy', 'ab_algo#38', ['greedy-algorithm']),
   ('Dynamic programming', 'ab_algo#45', ['dynamic-programming']),
   ('Divide-and-conquer', 'ab_algo#17', ['divide-and-conquer']),
   ('Graph traversals', 'ab_algo#60', ['graph-search']),
   ('Minimum spanning trees', 'ab_algo#43', ['minimum-spanning-tree']),
   ('Shortest paths', 'ab_algo#44', ['shortest-path'])])]),
 'Theory of Computation': ('theory-of-computation', [
  (None, [
   ('Regular expressions', 'gs_toc#28', ['regular-expression']),
   ('Finite automata', 'gs_toc#5', ['finite-automata']),
   ('Context-free grammars', 'gs_toc#45', ['context-free-grammar']),
   ('Push-down automata', 'gs_toc#55', ['pushdown-automata']),
   ('Regular and context-free languages', 'gs_toc#33', ['regular-language', 'context-free-language']),
   ('Pumping lemma', 'gs_toc#32', ['pumping-lemma']),
   ('Turing machines', 'gs_toc#59', ['turing-machine']),
   ('Undecidability', 'gs_toc#65', ['decidability'])])]),
 'Compiler Design': ('compiler-design', [
  (None, [
   ('Lexical analysis', 'gs_cd#2', ['lexical-analysis']),
   ('Parsing', 'gs_cd#6', ['parsing']),
   ('Syntax-directed translation', 'gs_cd#16', ['syntax-directed-translation']),
   ('Runtime environments', 'search:runtime environment activation record compiler design GATE', ['runtime-environment']),
   ('Intermediate code generation', 'gs_cd#21', ['intermediate-code']),
   ('Local optimisation', 'gs_cd#29', ['code-optimization']),
   ('Data flow analysis: constant propagation', 'search:constant propagation data flow analysis compiler design', ['constant-propagation', 'code-optimization']),
   ('Data flow analysis: liveness analysis', 'gs_cd#30', ['liveness-analysis', 'live-variable', 'liveness', 'data-flow-analysis']),
   ('Data flow analysis: common subexpression elimination', 'search:common subexpression elimination DAG compiler design', ['common-subexpression', 'code-optimization'])])]),
 'Operating Systems': ('operating-system', [
  (None, [
   ('System calls', 'gs_os#7', ['system-call', 'fork-system-call']),
   ('Processes', 'gs_os#5', ['process']),
   ('Threads', 'gs_os#11', ['threads']),
   ('Inter-process communication', 'neso_os#22', ['inter-process-communication']),
   ('Concurrency and synchronization', 'gs_os#24', ['process-synchronization']),
   ('Deadlock', 'gs_os#37', ['deadlock-prevention-avoidance-detection', 'resource-allocation']),
   ('CPU scheduling', 'gs_os#13', ['process-scheduling']),
   ('I/O scheduling', 'gs_os#73', ['disk-scheduling']),
   ('Memory management', 'gs_os#45', ['memory-management']),
   ('Virtual memory', 'gs_os#63', ['virtual-memory']),
   ('File systems', 'gs_os#81', ['file-system'])])]),
 'Databases': ('databases', [
  (None, [
   ('ER-model', 'gs_db#15', ['er-diagram']),
   ('Relational algebra', 'gs_db#49', ['relational-algebra']),
   ('Tuple calculus', 'gs_db#57', ['relational-calculus']),
   ('SQL', 'gs_db#59', ['sql']),
   ('Integrity constraints', 'gs_db#7', ['referential-integrity', 'candidate-key']),
   ('Normal forms', 'gs_db#23', ['database-normalization']),
   ('File organization', 'search:file organization DBMS GATE', ['file-organization']),
   ('Indexing', 'gs_db#106', ['indexing']),
   ('B and B+ trees', 'gs_db#116', ['b-tree']),
   ('Transactions', 'gs_db#87', ['transaction-and-concurrency']),
   ('Concurrency control', 'gs_db#101', ['concurrency', 'transaction-and-concurrency'])])]),
 'Computer Networks': ('computer-networks', [
  (None, [
   ('Principles of layering', 'gs_cn#1', ['network-layering']),
   ('Switching: circuit, packet and virtual circuit', 'gs_cn#16', ['network-switching', 'circuit-switching']),
   ('Performance metrics', 'gs_cn#97', ['network-performance', 'transmission-delay', 'propagation-delay', 'network-delay', 'throughput']),
   ('Data link layer: error detection', 'gs_cn#27', ['error-detection', 'crc-polynomial']),
   ('Data link layer: Medium Access Control', 'gs_cn#31', ['mac-protocol']),
   ('Data link layer: Ethernet', 'gs_cn#38', ['ethernet']),
   ('Distance vector routing', 'gs_cn#61', ['distance-vector-routing', 'routing']),
   ('Link state routing', 'gs_cn#63', ['link-state-routing', 'routing']),
   ('IPv4: fragmentation', 'gs_cn#54', ['ip-packet', 'ipv4']),
   ('IPv4: CIDR notation', 'gs_cn#47', ['subnetting', 'cidr-notation']),
   ('IPv4: Network Address Translation', 'gs_cn#65', ['network-address-translation', 'nat']),
   ('TCP: flow control', 'search:TCP flow control receiver window computer networks GATE', ['tcp', 'sliding-window']),
   ('TCP: congestion control', 'gs_cn#73', ['congestion-control', 'tcp']),
   ('Socket API', 'gs_cn#85', ['sockets']),
   ('DNS', 'gs_cn#80', ['dns']),
   ('HTTP', 'gs_cn#83', ['http', 'application-layer-protocols'])])]),
}


def tag_ok(tag):
    if tag not in CACHE:
        url = 'https://archive.org/wayback/available?url=' + urllib.parse.quote('gateoverflow.in/tag/' + tag)
        try:
            CACHE[tag] = bool(json.load(urllib.request.urlopen(url, timeout=40)).get('archived_snapshots'))
        except Exception:
            return False  # not cached, retried next run
    return CACHE[tag]


def video(spec):
    if spec.startswith('search:'):
        return {'q': spec[7:]}
    key, idx = spec.split('#')
    v = V[key]['videos'][int(idx)]
    return {'id': v['id'], 'list': V[key]['pid'], 'title': v['title'], 'ch': CH[key.split('_')[0]]}


out, missing = {}, []
for subj, (cat, sections) in S.items():
    secs = []
    for head, topics in sections:
        items = []
        for t, spec, tags in topics:
            tag = next((x for x in tags if tag_ok(x)), None)
            if not tag:
                missing.append(f'{subj}: {t} {tags}')
            items.append({'t': t, 'v': video(spec), 'go': tag or ('questions/' + cat)})
        secs.append({'h': head, 'topics': items})
    out[subj] = secs
json.dump(CACHE, open(CACHE_PATH, 'w'), indent=0)

with open(sys.argv[3], 'w', encoding='utf-8') as f:
    f.write('// Generated from the official GATE 2027 CS and GA syllabi (IIT Madras), 1 Nov 2026.\n'
            '// v: a specific lecture from a verified playlist (id + list), or {q} for a labelled YouTube search.\n'
            '// go: GATE Overflow tag page (confirmed via archive.org) or, if none was found, the subject category.\n')
    f.write('const SYLLABUS = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
n = sum(len(s['topics']) for v in out.values() for s in v)
print(f'{n} topics; {sum(1 for v in out.values() for s in v for t in s["topics"] if "q" in t["v"])} search links; untagged:', file=sys.stderr)
print('\n'.join(missing), file=sys.stderr)
