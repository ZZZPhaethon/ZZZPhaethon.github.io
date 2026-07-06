---
permalink: /
layout: null
---

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Yaowen Chang — computer vision researcher working on panoramic perception, semantic segmentation, and geometry-aware visual intelligence.">
  <title>Yaowen Chang</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --canvas: #fbfcfe;
      --surface: #ffffff;
      --ink: #121826;
      --muted: #687386;
      --faint: #9aa4b3;
      --line: #e6eaf0;
      --blue: #2563eb;
      --blue-soft: #eef4ff;
      --teal: #0f766e;
      --shadow: 0 16px 50px rgba(20, 35, 60, .06);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --canvas: #0b0f16;
        --surface: #111722;
        --ink: #f6f8fb;
        --muted: #a7b0bf;
        --faint: #687386;
        --line: #273142;
        --blue: #78a7ff;
        --blue-soft: #15274b;
        --teal: #5eead4;
        --shadow: 0 16px 50px rgba(0, 0, 0, .22);
      }
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--muted);
      background:
        linear-gradient(to right, transparent 0, transparent calc(100% - 1px), rgba(37,99,235,.035) calc(100% - 1px)) 0 0 / 72px 72px,
        linear-gradient(to bottom, transparent 0, transparent calc(100% - 1px), rgba(37,99,235,.035) calc(100% - 1px)) 0 0 / 72px 72px,
        var(--canvas);
      font: 15px/1.75 "Manrope", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    a { color: inherit; text-decoration: none; transition: color .18s ease, border-color .18s ease, transform .18s ease; }
    a:hover { color: var(--blue); }
    ::selection { color: #fff; background: var(--blue); }

    .page-shell {
      width: min(1160px, calc(100% - 48px));
      min-height: 100vh;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 270px minmax(0, 1fr);
      gap: clamp(56px, 8vw, 110px);
      padding: 88px 0 64px;
    }

    .sidebar {
      position: sticky;
      top: 56px;
      align-self: start;
      min-height: calc(100vh - 112px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .avatar {
      width: 104px;
      height: 104px;
      display: block;
      object-fit: cover;
      border: 1px solid var(--line);
      border-radius: 18px;
      box-shadow: var(--shadow);
      margin-bottom: 24px;
      transition: transform .22s ease;
    }
    .avatar:hover { transform: translateY(-3px) rotate(-1deg); }

    .name {
      margin: 0;
      color: var(--ink);
      font-size: 2.05rem;
      line-height: 1.05;
      letter-spacing: -.055em;
      font-weight: 800;
    }
    .role {
      margin: 14px 0 0;
      color: var(--muted);
      font-size: .9rem;
      line-height: 1.6;
    }
    .role strong { color: var(--ink); font-weight: 700; }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 18px;
      padding: 7px 11px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: color-mix(in srgb, var(--surface) 92%, transparent);
      color: var(--ink);
      font-size: .73rem;
      font-weight: 700;
      letter-spacing: .01em;
    }
    .pulse {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--teal);
      box-shadow: 0 0 0 0 color-mix(in srgb, var(--teal) 44%, transparent);
      animation: pulse 2.2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--teal) 42%, transparent); }
      70% { box-shadow: 0 0 0 8px transparent; }
      100% { box-shadow: 0 0 0 0 transparent; }
    }

    .nav {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 44px 0 auto;
    }
    .nav a {
      width: fit-content;
      padding-left: 0;
      border-left: 2px solid transparent;
      color: var(--faint);
      font: 500 .72rem/1.2 "DM Mono", monospace;
      text-transform: uppercase;
      letter-spacing: .11em;
    }
    .nav a:hover, .nav a.active {
      padding-left: 12px;
      border-color: var(--blue);
      color: var(--blue);
    }

    .contact-links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 16px;
      padding-top: 30px;
      color: var(--muted);
      font-size: .82rem;
      font-weight: 700;
    }
    .contact-links a { border-bottom: 1px solid transparent; }
    .contact-links a:hover { border-color: var(--blue); }

    main { max-width: 730px; }
    section {
      scroll-margin-top: 48px;
      padding-top: 8px;
      margin-bottom: 84px;
    }
    section:first-child { padding-top: 0; }
    .section-kicker {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 24px;
      color: var(--ink);
      font: 500 .72rem/1 "DM Mono", monospace;
      text-transform: uppercase;
      letter-spacing: .12em;
    }
    .section-kicker::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--ink);
      opacity: .85;
    }
    .about-copy {
      color: var(--muted);
      font-size: .96rem;
    }
    .about-copy p { margin: 0 0 14px; }
    .about-copy strong { color: var(--ink); font-weight: 750; }
    .about-copy a {
      color: var(--ink);
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-color: color-mix(in srgb, var(--blue) 44%, transparent);
    }
    .about-copy a:hover { color: var(--blue); }

    .focus-note {
      margin-top: 25px;
      padding: 14px 17px;
      border: 1px solid color-mix(in srgb, var(--blue) 20%, var(--line));
      border-left: 3px solid var(--blue);
      border-radius: 0 10px 10px 0;
      background: var(--blue-soft);
      color: var(--ink);
      font-size: .87rem;
      font-weight: 600;
    }

    .two-col {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px 32px;
      margin-top: 38px;
    }
    .mini-title {
      margin: 0 0 13px;
      color: var(--ink);
      font: 500 .7rem/1 "DM Mono", monospace;
      letter-spacing: .11em;
      text-transform: uppercase;
    }
    .timeline-item {
      position: relative;
      padding: 0 0 14px 13px;
      border-left: 2px solid var(--line);
    }
    .timeline-item + .timeline-item { margin-top: 4px; }
    .timeline-item:hover { border-left-color: var(--blue); }
    .timeline-item strong {
      display: block;
      margin-bottom: 2px;
      color: var(--ink);
      font-size: .88rem;
      font-weight: 750;
      line-height: 1.45;
    }
    .timeline-item span {
      display: block;
      color: var(--muted);
      font-size: .78rem;
      line-height: 1.55;
    }

    .publication-list { border-top: 1px solid var(--line); }
    .publication {
      display: grid;
      grid-template-columns: 76px 1fr;
      gap: 17px;
      padding: 20px 0;
      border-bottom: 1px solid var(--line);
    }
    .publication:hover .pub-title a { color: var(--blue); }
    .pub-year {
      padding-top: 4px;
      color: var(--faint);
      font: 500 .72rem/1 "DM Mono", monospace;
      letter-spacing: .05em;
    }
    .pub-title {
      margin: 0 0 7px;
      color: var(--ink);
      font-size: .98rem;
      line-height: 1.45;
      font-weight: 750;
    }
    .pub-authors {
      margin: 0 0 9px;
      color: var(--muted);
      font-size: .8rem;
      line-height: 1.55;
    }
    .pub-authors .me { color: var(--ink); font-weight: 800; }
    .pub-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      color: var(--faint);
      font: 500 .69rem/1.4 "DM Mono", monospace;
      text-transform: uppercase;
      letter-spacing: .045em;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      min-height: 21px;
      padding: 2px 7px;
      border: 1px solid color-mix(in srgb, var(--blue) 37%, var(--line));
      border-radius: 5px;
      color: var(--blue);
      background: var(--blue-soft);
      font-size: .64rem;
      font-weight: 700;
      letter-spacing: .055em;
    }
    .link-chip {
      color: var(--muted);
      border-bottom: 1px solid var(--line);
    }
    .link-chip:hover { border-color: var(--blue); }

    .project-list {
      display: grid;
      gap: 16px;
    }
    .project-card {
      position: relative;
      display: grid;
      grid-template-columns: 128px 1fr;
      gap: 20px;
      min-height: 122px;
      padding: 14px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: color-mix(in srgb, var(--surface) 95%, transparent);
      box-shadow: 0 8px 28px rgba(30, 44, 69, .035);
      overflow: hidden;
    }
    .project-card:hover {
      transform: translateY(-3px);
      border-color: color-mix(in srgb, var(--blue) 40%, var(--line));
    }
    .project-visual {
      display: grid;
      place-items: center;
      border-radius: 9px;
      overflow: hidden;
      background: linear-gradient(135deg, var(--blue-soft), color-mix(in srgb, var(--blue-soft) 60%, var(--surface)));
    }
    .project-visual img {
      width: 100%;
      height: 100%;
      min-height: 90px;
      object-fit: cover;
    }
    .project-monogram {
      color: var(--blue);
      font: 500 1.05rem/1 "DM Mono", monospace;
      letter-spacing: -.07em;
    }
    .project-card h3 {
      margin: 1px 0 7px;
      color: var(--ink);
      font-size: .95rem;
      line-height: 1.4;
      font-weight: 780;
    }
    .project-card p {
      margin: 0 0 10px;
      color: var(--muted);
      font-size: .81rem;
      line-height: 1.6;
    }
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      color: var(--faint);
      font: 500 .65rem/1.2 "DM Mono", monospace;
      letter-spacing: .045em;
      text-transform: uppercase;
    }
    .project-tags span {
      padding: 4px 6px;
      border: 1px solid var(--line);
      border-radius: 4px;
    }

    .awards { border-top: 1px solid var(--line); }
    .award {
      display: grid;
      grid-template-columns: 1fr 72px;
      gap: 14px;
      align-items: baseline;
      padding: 15px 0;
      border-bottom: 1px dashed var(--line);
    }
    .award:last-child { border-bottom: 0; }
    .award strong {
      color: var(--ink);
      font-size: .89rem;
      font-weight: 650;
      line-height: 1.5;
    }
    .award time {
      color: var(--faint);
      text-align: right;
      font: 500 .72rem/1 "DM Mono", monospace;
      letter-spacing: .055em;
    }

    footer {
      grid-column: 2;
      border-top: 1px solid var(--line);
      padding-top: 24px;
      color: var(--faint);
      font: 500 .68rem/1.5 "DM Mono", monospace;
      letter-spacing: .045em;
      text-transform: uppercase;
    }
    .back-to-top { float: right; }

    @media (max-width: 860px) {
      .page-shell {
        width: min(680px, calc(100% - 40px));
        display: block;
        padding-top: 44px;
      }
      .sidebar {
        position: static;
        min-height: 0;
        display: block;
        margin-bottom: 54px;
      }
      .nav {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px 18px;
        margin: 32px 0 0;
      }
      .nav a { padding: 0; border: 0; }
      .nav a:hover, .nav a.active { padding: 0; border: 0; }
      .contact-links { padding-top: 22px; }
      footer { margin-top: -15px; }
    }
    @media (max-width: 560px) {
      .page-shell { width: min(100% - 30px, 680px); }
      .two-col { grid-template-columns: 1fr; gap: 22px; }
      .publication { grid-template-columns: 55px 1fr; gap: 12px; }
      .project-card { grid-template-columns: 90px 1fr; gap: 14px; }
      .project-visual img { min-height: 80px; }
      .status { max-width: 100%; }
      .back-to-top { display: none; }
    }
  </style>
</head>
<body>
  <div class="page-shell">
    <aside class="sidebar" aria-label="Profile">
      <div>
        <img class="avatar" src="{{ '/images/avatar.jpg' | relative_url }}" alt="Portrait of Yaowen Chang">
        <h1 class="name">Yaowen<br>Chang</h1>
        <p class="role">
          <strong>Computer Vision Researcher</strong><br>
          MSc Graduate, Imperial College London
        </p>
        <div class="status"><span class="pulse" aria-hidden="true"></span>Open to research collaboration</div>

        <nav class="nav" aria-label="Page sections">
          <a href="#about" class="nav-link">About</a>
          <a href="#publications" class="nav-link">Publication</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#awards" class="nav-link">Awards</a>
        </nav>
      </div>

      <div class="contact-links">
        <a href="https://scholar.google.com/citations?user=GppYpX0AAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a>
        <a href="https://github.com/ZZZPhaethon" target="_blank" rel="noopener">GitHub</a>
        <a href="mailto:yaowenchang.ic@gmail.com">Email</a>
      </div>
    </aside>

    <main>
      <section id="about">
        <h2 class="section-kicker">About</h2>
        <div class="about-copy">
          <p>
            I am <strong>Yaowen Chang</strong>, an MSc graduate with Distinction in Environmental Data Science &amp; Machine Learning from <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener">Imperial College London</a>. I received my BEng in Spatial Informatics and Digital Technology from <a href="https://en.whu.edu.cn/" target="_blank" rel="noopener">Wuhan University</a>.
          </p>
          <p>
            My work sits at the intersection of <strong>computer vision, geometry-aware learning, and real-world environmental intelligence</strong>. I build robust visual systems for panoramic perception, semantic segmentation, remote sensing, and 3D understanding—especially where data are limited, spatially distorted, or deployed outside ideal laboratory settings.
          </p>
        </div>

        <div class="focus-note">
          Current focus: panoramic reasoning and segmentation · efficient 3D/geometry-aware dense prediction · reliable AI for climate and carbon systems.
        </div>

        <div class="two-col" aria-label="Education and research interests">
          <div>
            <h3 class="mini-title">Education</h3>
            <div class="timeline-item">
              <strong>MSc, Environmental Data Science &amp; Machine Learning</strong>
              <span>Imperial College London · 2024.09 – 2025.09<br>Graduated with Distinction</span>
            </div>
            <div class="timeline-item">
              <strong>BEng, Spatial Informatics &amp; Digital Technology</strong>
              <span>Wuhan University · 2020.09 – 2024.06</span>
            </div>
          </div>
          <div>
            <h3 class="mini-title">Research Themes</h3>
            <div class="timeline-item">
              <strong>Panoramic &amp; Open-World Perception</strong>
              <span>Source-free adaptation, reasoning segmentation, ERP geometry.</span>
            </div>
            <div class="timeline-item">
              <strong>Geometry-Aware Visual Intelligence</strong>
              <span>Dense prediction, 3D vision, efficient and reliable learning.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="publications">
        <h2 class="section-kicker">Selected Publication</h2>
        <div class="publication-list">
          <article class="publication">
            <div class="pub-year">2026</div>
            <div>
              <h3 class="pub-title">
                <a href="https://arxiv.org/abs/2603.25131" target="_blank" rel="noopener">Denoise and Align: Towards Source-Free UDA for Robust Panoramic Semantic Segmentation</a>
              </h3>
              <p class="pub-authors"><span class="me">Yaowen Chang</span>, Zhen Cao, Zheng Xu, Xiaoxin Mi, Zheng Dong</p>
              <div class="pub-meta">
                <span>CVPR 2026</span>
                <span class="badge">Highlight</span>
                <a class="link-chip" href="https://github.com/ZZZPhaethon/DAPASS" target="_blank" rel="noopener">Project ↗</a>
                <a class="link-chip" href="https://arxiv.org/abs/2603.25131" target="_blank" rel="noopener">Paper ↗</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects">
        <h2 class="section-kicker">Selected Projects</h2>
        <div class="project-list">
          <a class="project-card" href="https://github.com/ZZZPhaethon/DAPASS" target="_blank" rel="noopener">
            <div class="project-visual"><img src="{{ '/images/teaser.png' | relative_url }}" alt="DAPASS panoramic semantic segmentation teaser"></div>
            <div>
              <h3>DAPASS · Panoramic Semantic Segmentation</h3>
              <p>Source-free domain adaptation for robust 360° semantic segmentation, with confidence-guided denoising and cross-resolution alignment.</p>
              <div class="project-tags"><span>SFUDA</span><span>360° Vision</span><span>Segmentation</span></div>
            </div>
          </a>

          <a class="project-card" href="https://github.com/ZZZPhaethon/VHR-Seg" target="_blank" rel="noopener">
            <div class="project-visual"><span class="project-monogram">VHR<br>SEG</span></div>
            <div>
              <h3>VHR-Seg · Coarse-to-Fine Remote-Sensing Segmentation</h3>
              <p>A high-resolution visual pipeline for mapping forest, roads, buildings, and fine-grained objects from UAV imagery.</p>
              <div class="project-tags"><span>Remote Sensing</span><span>UAV</span><span>Dense Prediction</span></div>
            </div>
          </a>

          <a class="project-card" href="https://github.com/ZZZPhaethon/CCS_RLLLM" target="_blank" rel="noopener">
            <div class="project-visual"><span class="project-monogram">CO₂<br>RL</span></div>
            <div>
              <h3>CCS-RLLLM · Carbon Transport Intelligence</h3>
              <p>A research platform for modelling and optimising carbon-capture transport systems with operations research, reinforcement learning, and domain knowledge.</p>
              <div class="project-tags"><span>AI for Climate</span><span>RL</span><span>Optimisation</span></div>
            </div>
          </a>
        </div>
      </section>

      <section id="awards">
        <h2 class="section-kicker">Honours &amp; Awards</h2>
        <div class="awards">
          <div class="award"><strong>Master’s Degree with Distinction, Imperial College London</strong><time>2025</time></div>
          <div class="award"><strong>Silver Award, National College Students Innovation &amp; Entrepreneurship Competition</strong><time>2024</time></div>
          <div class="award"><strong>First Prize, Challenge Cup National Competition</strong><time>2023</time></div>
          <div class="award"><strong>First Prize, National College Students Software Cup Competition</strong><time>2023</time></div>
          <div class="award"><strong>Meritorious Winner, Mathematical Contest in Modeling (MCM/ICM)</strong><time>2023</time></div>
          <div class="award"><strong>First-class Scholarship &amp; Outstanding Student, Wuhan University</strong><time>2021–23</time></div>
        </div>
      </section>
    </main>

    <footer>
      © 2026 Yaowen Chang <a class="back-to-top" href="#about">Back to top ↑</a>
    </footer>
  </div>

  <script>
    (() => {
      const sections = [...document.querySelectorAll("main section[id]")];
      const links = [...document.querySelectorAll(".nav-link")];
      const updateNav = () => {
        const position = window.scrollY + 160;
        let active = sections[0]?.id;
        sections.forEach((section) => {
          if (position >= section.offsetTop) active = section.id;
        });
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${active}`);
        });
      };
      window.addEventListener("scroll", updateNav, { passive: true });
      window.addEventListener("resize", updateNav);
      updateNav();
    })();
  </script>
</body>
</html>
