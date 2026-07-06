---
permalink: /
layout: null
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yaowen Chang — Imperial College London</title>
  <meta name="description" content="Yaowen Chang, PhD student at Imperial College London, researching computer vision, panoramic perception, and AI for environmental systems.">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg: #ffffff;
      --surface: #ffffff;
      --text-primary: #000000;
      --text-secondary: #4b5563;
      --text-tertiary: #9ca3af;
      --border: #e5e7eb;
      --accent: #2563eb;
      --accent-hover: #1d4ed8;
      --accent-light: #eff6ff;
      --looking-bg: #f9fafb;
      --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0a0a0a;
        --surface: #0a0a0a;
        --text-primary: #ffffff;
        --text-secondary: #9ca3af;
        --text-tertiary: #4b5563;
        --border: #1f2937;
        --accent: #60a5fa;
        --accent-hover: #93c5fd;
        --accent-light: #1e3a8a;
        --looking-bg: #111827;
      }
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 15px;
      -webkit-font-smoothing: antialiased;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    h1, h2, h3, .section-title, .vertical-nav a, .pub-venue, .badge {
      font-family: 'Space Grotesk', sans-serif;
    }

    a { color: var(--text-primary); text-decoration: none; transition: var(--transition); }
    a:hover { color: var(--accent); }

    .app-container {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 80px;
      max-width: 1100px;
      margin: 0 auto;
      padding: 100px 24px;
    }

    .sidebar {
      position: sticky;
      top: 100px;
      height: calc(100vh - 200px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .sidebar-top { display: flex; flex-direction: column; align-items: flex-start; }

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 12px;
      object-fit: cover;
      margin-bottom: 24px;
      border: 1px solid var(--border);
      transition: var(--transition);
    }
    .avatar:hover { transform: scale(1.03); }

    .sidebar h1 {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.05;
      color: var(--text-primary);
      margin-bottom: 12px;
    }

    .sidebar-meta {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    .sidebar-meta a { font-weight: 600; }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-primary);
      background: var(--looking-bg);
      border: 1px solid var(--border);
      padding: 6px 12px;
      border-radius: 20px;
      margin-top: 16px;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      background-color: var(--accent);
      border-radius: 50%;
      display: inline-block;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
      70% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 0 6px rgba(37, 99, 235, 0); }
      100% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
    }

    .vertical-nav { display: flex; flex-direction: column; gap: 12px; margin: 40px 0; }
    .vertical-nav a {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-tertiary);
      transition: var(--transition);
      padding-left: 0;
    }
    .vertical-nav a:hover, .vertical-nav a.active {
      color: var(--accent);
      padding-left: 12px;
      border-left: 2px solid var(--accent);
    }

    .sidebar-footer { display: flex; gap: 16px; font-size: 0.8rem; font-weight: 500; }
    .sidebar-footer a { color: var(--text-secondary); }
    .sidebar-footer a:hover { color: var(--accent); }

    .content { max-width: 680px; }
    section { padding-top: 40px; margin-bottom: 80px; }
    section:first-of-type { padding-top: 0; }

    .section-title {
      font-size: 0.8rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--text-primary);
      margin-bottom: 28px;
      border-bottom: 1px solid var(--text-primary);
      padding-bottom: 8px;
    }

    .about-text { font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); }
    .about-text a { font-weight: 600; }

    .looking-banner {
      margin-top: 28px;
      padding: 12px 16px;
      border-left: 3px solid var(--accent);
      background: var(--accent-light);
      color: var(--text-primary);
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 0 8px 8px 0;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
      margin-top: 48px;
    }
    .info-card h3, .services-card h3 {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .info-item {
      padding: 10px 0;
      border-left: 2px solid var(--border);
      padding-left: 12px;
      margin-bottom: 8px;
      transition: var(--transition);
    }
    .info-item:hover { border-left-color: var(--accent); background: var(--looking-bg); }
    .info-item strong {
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2px;
    }
    .info-item span { font-size: 0.8rem; color: var(--text-secondary); display: block; line-height: 1.4; }

    .scroll-container { overflow-y: auto; border-bottom: 1px solid var(--border); background: var(--surface); }
    .scroll-container::-webkit-scrollbar { width: 4px; }
    .scroll-container::-webkit-scrollbar-track { background: transparent; }
    .scroll-container::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
    .scroll-container::-webkit-scrollbar-thumb:hover { background: var(--text-tertiary); }
    .pub-scroll-container { max-height: 520px; padding: 4px 16px 4px 0; }

    .pub-item-minimal, .project-item-minimal { padding: 16px 0; border-bottom: 1px solid var(--border); }
    .pub-item-minimal:last-child, .project-item-minimal:last-child { border-bottom: none; }
    .pub-info { display: flex; flex-direction: column; }
    .pub-title {
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 6px;
      color: var(--text-primary);
    }
    .pub-title a { color: var(--text-primary); }
    .pub-title a:hover { color: var(--accent); }
    .pub-authors { font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px; line-height: 1.4; }
    .pub-authors .me { font-weight: 700; color: var(--text-primary); }
    .pub-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .pub-venue {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: 1px solid var(--border);
    }
    .badge-highlight { background: var(--accent-light); color: var(--accent); border-color: var(--accent); }
    .badge-neutral { background: var(--looking-bg); color: var(--text-primary); border-color: var(--border); }

    .project-row { display: grid; grid-template-columns: 128px 1fr; gap: 18px; align-items: center; }
    .project-thumb {
      width: 128px;
      height: 84px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--looking-bg);
    }
    .project-placeholder {
      display: grid;
      place-items: center;
      width: 128px;
      height: 84px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--looking-bg);
      color: var(--accent);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.06em;
    }
    .project-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

    .awards-list { list-style: none; }
    .award-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      padding: 14px 0;
      border-bottom: 1px dashed var(--border);
      font-size: 0.95rem;
    }
    .award-item:last-child { border-bottom: none; }
    .award-title { color: var(--text-primary); font-weight: 500; }
    .award-date {
      flex: 0 0 auto;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    footer {
      background: var(--surface);
      border-top: 1px solid var(--border);
      padding: 48px 24px;
      text-align: center;
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }
    .footer-text {
      max-width: 1100px;
      margin: 0 auto;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    @media (max-width: 900px) {
      .app-container { grid-template-columns: 1fr; gap: 48px; padding: 40px 24px; }
      .sidebar { position: relative; top: 0; height: auto; gap: 32px; }
      .vertical-nav { display: none; }
    }
    @media (max-width: 560px) {
      .project-row { grid-template-columns: 90px 1fr; gap: 14px; }
      .project-thumb, .project-placeholder { width: 90px; height: 76px; }
      .award-item { align-items: flex-start; }
    }
  </style>
</head>
<body>
  <div class="app-container">
    <aside class="sidebar">
      <div class="sidebar-top">
        <img class="avatar" src="{{ '/images/avatar.jpg' | relative_url }}" alt="Yaowen Chang">
        <h1>Yaowen Chang</h1>
        <div class="sidebar-meta">
          PhD Student<br>
          <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener">Imperial College London</a><br>
          <span style="font-size: 0.8rem; color: var(--text-tertiary);">yaowenchang.ic@gmail.com</span>
        </div>
        <div class="status-badge">
          <span class="status-dot"></span>
          <span>Open to research collaboration</span>
        </div>
      </div>

      <nav class="vertical-nav">
        <a href="#about" class="nav-link">About</a>
        <a href="#publications" class="nav-link">Publications</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#awards" class="nav-link">Awards</a>
      </nav>

      <div class="sidebar-footer">
        <a href="https://scholar.google.com/citations?user=GppYpX0AAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a>
        <a href="https://github.com/ZZZPhaethon" target="_blank" rel="noopener">GitHub</a>
        <a href="mailto:yaowenchang.ic@gmail.com">Email</a>
      </div>
    </aside>

    <main class="content">
      <section id="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-text">
          <p>
            I am a PhD student at <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener">Imperial College London</a>. I obtained an MSc with Distinction in Environmental Data Science &amp; Machine Learning from Imperial College London and a BEng in Spatial Informatics and Digital Technology from <a href="https://en.whu.edu.cn/" target="_blank" rel="noopener">Wuhan University</a>.
          </p>
          <br>
          <p>
            My research lies at the intersection of <strong>computer vision</strong>, <strong>geometry-aware perception</strong>, and <strong>AI for environmental systems</strong>. I am particularly interested in panoramic understanding, semantic segmentation, source-free domain adaptation, remote sensing, and reliable learning for real-world visual and climate applications.
          </p>
        </div>

        <div class="looking-banner">
          Current interests: panoramic reasoning and segmentation · geometry-aware dense prediction · efficient and reliable AI for environmental intelligence.
        </div>

        <div class="info-grid">
          <div class="info-card">
            <h3>Education</h3>
            <div class="info-item">
              <strong>PhD Student</strong>
              <span>Imperial College London · Current</span>
            </div>
            <div class="info-item">
              <strong>MSc, Environmental Data Science &amp; Machine Learning</strong>
              <span>Imperial College London · 2024.09 – 2025.09<br>Graduated with Distinction</span>
            </div>
            <div class="info-item">
              <strong>BEng, Spatial Informatics &amp; Digital Technology</strong>
              <span>Wuhan University · 2020.09 – 2024.06</span>
            </div>
          </div>

          <div class="info-card">
            <h3>Research Focus</h3>
            <div class="info-item">
              <strong>Panoramic &amp; Open-World Perception</strong>
              <span>Source-free adaptation, 360° semantic segmentation, and language-guided reasoning.</span>
            </div>
            <div class="info-item">
              <strong>Geometry-Aware Visual Intelligence</strong>
              <span>Dense prediction, 3D vision, and learning with limited supervision.</span>
            </div>
            <div class="info-item">
              <strong>AI for Climate &amp; Infrastructure</strong>
              <span>Reliable modelling and optimisation for environmental and carbon systems.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="publications">
        <h2 class="section-title">Selected Publications</h2>
        <div class="pub-scroll-container scroll-container">
          <div class="pub-list">
            <div class="pub-item-minimal">
              <div class="pub-info">
                <div class="pub-title">
                  <a href="https://arxiv.org/abs/2603.25131" target="_blank" rel="noopener">Denoise and Align: Towards Source-Free UDA for Robust Panoramic Semantic Segmentation</a>
                </div>
                <div class="pub-authors">
                  <span class="me">Yaowen Chang</span>, Zhen Cao, Zheng Xu, Xiaoxin Mi, Zheng Dong
                </div>
                <div class="pub-meta">
                  <span class="pub-venue">CVPR 2026</span>
                  <span class="badge badge-highlight">Highlight</span>
                  <a href="https://github.com/ZZZPhaethon/DAPASS" target="_blank" rel="noopener">Project</a>
                  <a href="https://arxiv.org/abs/2603.25131" target="_blank" rel="noopener">Paper</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 class="section-title">Selected Projects</h2>
        <div class="scroll-container">
          <div class="project-item-minimal">
            <div class="project-row">
              <img class="project-thumb" src="{{ '/images/teaser.png' | relative_url }}" alt="DAPASS teaser image">
              <div class="pub-info">
                <div class="pub-title"><a href="https://github.com/ZZZPhaethon/DAPASS" target="_blank" rel="noopener">DAPASS: Panoramic Source-Free Domain Adaptation</a></div>
                <div class="project-desc">Robust 360° semantic segmentation through panoramic confidence-guided denoising and cross-resolution alignment.</div>
                <div class="pub-meta"><span class="pub-venue">Panoramic Vision · SFUDA · Segmentation</span></div>
              </div>
            </div>
          </div>

          <div class="project-item-minimal">
            <div class="project-row">
              <div class="project-placeholder">VHR<br>SEG</div>
              <div class="pub-info">
                <div class="pub-title"><a href="https://github.com/ZZZPhaethon/VHR-Seg" target="_blank" rel="noopener">VHR-Seg: Coarse-to-Fine Remote Sensing Segmentation</a></div>
                <div class="project-desc">High-resolution UAV mapping for forest, roads, buildings, and fine-grained objects in complex mining environments.</div>
                <div class="pub-meta"><span class="pub-venue">Remote Sensing · UAV · Dense Prediction</span></div>
              </div>
            </div>
          </div>

          <div class="project-item-minimal">
            <div class="project-row">
              <div class="project-placeholder">CO₂<br>RL</div>
              <div class="pub-info">
                <div class="pub-title"><a href="https://github.com/ZZZPhaethon/CCS_RLLLM" target="_blank" rel="noopener">CCS-RLLLM: Carbon Transport Intelligence</a></div>
                <div class="project-desc">A research platform for modelling and optimising carbon-capture transport and storage operations with RL, LLMs, and operations research.</div>
                <div class="pub-meta"><span class="pub-venue">AI for Climate · RL · Optimisation</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="awards">
        <h2 class="section-title">Honours &amp; Awards</h2>
        <div class="awards-list">
          <div class="award-item"><div class="award-title">Master’s Degree with Distinction, Imperial College London</div><div class="award-date">2025</div></div>
          <div class="award-item"><div class="award-title">Outstanding Graduate, Wuhan University</div><div class="award-date">2024</div></div>
          <div class="award-item"><div class="award-title">Silver Award, National College Students Innovation &amp; Entrepreneurship Competition</div><div class="award-date">2024</div></div>
          <div class="award-item"><div class="award-title">First Prize, Challenge Cup National Competition</div><div class="award-date">2023</div></div>
          <div class="award-item"><div class="award-title">First Prize, National College Students Software Cup Competition</div><div class="award-date">2023</div></div>
          <div class="award-item"><div class="award-title">Meritorious Winner, Mathematical Contest in Modeling (MCM/ICM)</div><div class="award-date">2023</div></div>
        </div>
      </section>
    </main>
  </div>

  <footer>
    <div class="footer-text">&copy; 2026 Yaowen Chang · Imperial College London</div>
  </footer>

  <script>
    (function () {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.vertical-nav a');

      function updateActiveNav() {
        const scrollPosition = window.scrollY + 150;
        let activeSectionId = '';

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
          activeSectionId = sections[sections.length - 1].id;
        } else {
          sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) activeSectionId = section.id;
          });
        }

        if (activeSectionId) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeSectionId}`);
          });
        }
      }

      window.addEventListener('scroll', updateActiveNav, { passive: true });
      window.addEventListener('resize', updateActiveNav);
      updateActiveNav();
    })();
  </script>
</body>
</html>
