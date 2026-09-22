(function () {
  const app = document.getElementById("app");
  const tabs = document.querySelectorAll(".tab[data-tab]");
  const searchtext = document.getElementById("searchtext");
  const contactLink = document.getElementById("contact-link");
  const footname = document.getElementById("footname");

  document.title = `${SITE.name}'s Design Portfolio`;
  footname.textContent = SITE.name;
  contactLink.href = `mailto:${SITE.email}`;

  const PROMPTS = {
    home: `who is ${SITE.name}?`,
    projects: `what projects ${SITE.pronoun} worked on?`,
    resume: `show me ${SITE.possessive} resume!`,
  };

  const searchbar = document.getElementById("searchbar");
  const suggest = document.getElementById("suggest");
  [["#home", PROMPTS.home], ["#projects", PROMPTS.projects], ["#resume", PROMPTS.resume]].forEach(
    ([hash, text]) => {
      const a = document.createElement("a");
      a.href = hash;
      a.className = "suggest-item";
      a.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9aa0a6" stroke-width="2"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#9aa0a6" stroke-width="2" stroke-linecap="round"/></svg><span></span>';
      a.querySelector("span").textContent = text;
      a.addEventListener("click", () => suggest.classList.remove("open"));
      suggest.appendChild(a);
    }
  );
  searchbar.addEventListener("click", (e) => {
    e.stopPropagation();
    suggest.classList.toggle("open");
  });
  document.addEventListener("click", () => suggest.classList.remove("open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") suggest.classList.remove("open");
  });

  let carouselIndex = 0;
  let carouselTimer = null;
  let lastListHash = "#projects";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function initials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  function thumbStyle(project) {
    if (project.thumbImg) {
      return `background-image:url('${project.thumbImg}');`;
    }
    return `background:${project.thumb};`;
  }

  // ---------------- Views ----------------

  function renderHome() {
    const heroSlides = SITE.heroImages
      .map((h, i) => {
        const bg = h.src ? `background-image:url('${h.src}');` : "background:linear-gradient(135deg,#6C63FF,#3B82F6);";
        return `<div class="carousel-slide" style="${bg}">${h.src ? "" : escapeHtml(h.caption || "")}</div>`;
      })
      .join("");
    const dots = SITE.heroImages
      .map((_, i) => `<span class="${i === 0 ? "active" : ""}" data-dot="${i}"></span>`)
      .join("");

    const links = SITE.links
      .map(
        (l) => `
      <div class="result-item">
        <div class="result-kicker">
          <span class="result-badge">${escapeHtml(l.type[0])}</span>
          <span>${escapeHtml(l.type)} - ${escapeHtml(SITE.name)}</span>
        </div>
        <a class="result-title" href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.title)}</a>
        ${l.meta ? `<p class="result-meta">${escapeHtml(l.meta)}</p>` : ""}
        <p class="result-blurb">${escapeHtml(l.blurb)}</p>
      </div>
    `
      )
      .join("");

    const tools = SITE.tools.map((t) => `<span class="tool-chip">${escapeHtml(t)}</span>`).join("");
    const featuredProject = SITE.projects.find((p) => p.id === SITE.featured.projectId) || SITE.projects[0];

    app.innerHTML = `
      <div class="home-grid">
        <div class="main-col">
          <div class="identity">
            <h1>${escapeHtml(SITE.name)}</h1>
            <p class="role">${escapeHtml(SITE.role)}</p>
          </div>

          <div class="carousel-row">
            <div class="carousel" id="carousel">
              <div class="carousel-track" id="carousel-track">${heroSlides}</div>
              <button class="carousel-arrow prev" id="car-prev" aria-label="Previous">&#8249;</button>
              <button class="carousel-arrow next" id="car-next" aria-label="Next">&#8250;</button>
              <div class="carousel-dots" id="car-dots">${dots}</div>
            </div>

            <a class="featured-card" href="#project/${escapeHtml(SITE.featured.projectId)}" id="featured-card">
              <div class="featured-thumb" style="${featuredProject ? thumbStyle(featuredProject) : ""}">${featuredProject && featuredProject.thumbImg ? "" : escapeHtml(SITE.name)}</div>
              <div class="featured-body">
                <p class="kicker">${escapeHtml(SITE.featured.kicker)}</p>
                <p class="blurb">${escapeHtml(SITE.featured.blurb)}</p>
                <p class="when">${escapeHtml(SITE.featured.when)}</p>
              </div>
            </a>
          </div>

          ${links}
        </div>

        <div class="panel-col">
          <div class="panel-card">
            <h3>Education</h3>
            <p>${escapeHtml(SITE.name)} ${escapeHtml(SITE.education.blurb.replace(/^is/, "is"))} <a href="${SITE.education.linkUrl}" target="_blank" rel="noopener"><em>${escapeHtml(SITE.education.linkText)}</em></a></p>
          </div>
          <div class="panel-row">
            <div class="panel-card">
              <h3>Tools</h3>
              <div class="tool-chips">${tools}</div>
            </div>
            <div class="panel-card">
              <h3>Currently</h3>
              <p>${escapeHtml(SITE.currently)}</p>
            </div>
          </div>
          <div class="panel-card about-card">
            <h3>About ${escapeHtml(SITE.name.split(" ")[0])}</h3>
            <p>${escapeHtml(SITE.about)}</p>
            <div class="about-meta">
              <span>📍 ${escapeHtml(SITE.location)}</span>
              <span>🎓 ${escapeHtml(SITE.gradDate)}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    setupCarousel();
  }

  function setupCarousel() {
    const track = document.getElementById("carousel-track");
    const dots = document.querySelectorAll("#car-dots span");
    const prev = document.getElementById("car-prev");
    const next = document.getElementById("car-next");
    const total = SITE.heroImages.length;

    function go(i) {
      carouselIndex = (i + total) % total;
      track.style.transform = `translateX(-${carouselIndex * 100}%)`;
      dots.forEach((d, idx) => d.classList.toggle("active", idx === carouselIndex));
    }

    prev && prev.addEventListener("click", () => go(carouselIndex - 1));
    next && next.addEventListener("click", () => go(carouselIndex + 1));
    dots.forEach((d) => d.addEventListener("click", () => go(Number(d.dataset.dot))));

    clearInterval(carouselTimer);
    if (total > 1) {
      carouselTimer = setInterval(() => go(carouselIndex + 1), 4500);
    }
  }

  function renderProjects() {
    const visible = SITE.projects.filter((p) => !p.hidden);
    const hidden = SITE.projects.filter((p) => p.hidden);

    const cards = visible
      .map(
        (p) => `
      <a class="project-card" href="#project/${p.id}">
        <div class="project-thumb" style="${thumbStyle(p)}">${p.thumbImg ? "" : escapeHtml(p.title)}</div>
        <div class="project-title">${escapeHtml(p.title)}</div>
      </a>
    `
      )
      .join("");

    const moreTile = hidden.length
      ? `<a class="project-card" href="#more">
           <div class="project-thumb more-tile">
             <span class="more-tile-plus">+</span>
             <span class="more-tile-label">More Projects</span>
           </div>
           <div class="project-title">Other Work</div>
         </a>`
      : "";

    app.innerHTML = `<div class="projects-grid">${cards}${moreTile}</div>`;
  }

  function renderMoreProjects() {
    const hidden = SITE.projects.filter((p) => p.hidden);
    const cards = hidden
      .map(
        (p) => `
      <a class="project-card" href="#project/${p.id}">
        <div class="project-thumb" style="${thumbStyle(p)}">${p.thumbImg ? "" : escapeHtml(p.title)}</div>
        <div class="project-title">${escapeHtml(p.title)}</div>
      </a>
    `
      )
      .join("");

    app.innerHTML = `
      <div class="case-back" id="case-back">&#8592; Back to projects</div>
      <div class="projects-grid">${cards}</div>
    `;

    document.getElementById("case-back").addEventListener("click", () => {
      window.location.hash = "#projects";
    });
  }

  function renderProjectDetail(id) {
    const p = SITE.projects.find((proj) => proj.id === id);
    if (!p) {
      app.innerHTML = `<p>Project not found. <a href="#projects">Back to projects</a></p>`;
      return;
    }

    const sections = p.sections
      .map(
        (s) => `
      <div class="case-section">
        <div class="case-section-num">${escapeHtml(s.number)}</div>
        <h3 class="case-block-heading">${escapeHtml(s.heading)}</h3>
        ${s.subheading ? `<p class="case-block-subheading">${escapeHtml(s.subheading)}</p>` : ""}
        <p class="case-block-body" style="margin-bottom:0;">${escapeHtml(s.body)}</p>
        ${
          s.media
            ? `<div class="case-media-grid" style="grid-template-columns:repeat(${s.media.length},1fr);">
                ${s.media
                  .map(
                    (m) => `<figure class="case-media-item">
                      <img src="${m.src}" alt="${escapeHtml(m.caption || s.heading)}" loading="lazy"/>
                      ${m.caption ? `<figcaption>${escapeHtml(m.caption)}</figcaption>` : ""}
                    </figure>`
                  )
                  .join("")}
              </div>`
            : ""
        }
        ${
          s.infoBox
            ? `<div class="info-box">
                <div class="info-box-title">${escapeHtml(s.infoBox.title)}</div>
                ${s.infoBox.rows
                  .map(
                    (r) => `<div class="info-row"><span class="label">${escapeHtml(r.label)}</span><span class="value">${escapeHtml(r.value)}</span></div>`
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
    `
      )
      .join("");

    app.innerHTML = `
      <div class="case-study">
        <div class="case-back" id="case-back">&#8592; Back to projects</div>
        <h1 class="case-title">${escapeHtml(p.title)}</h1>
        <p class="case-subtitle">${escapeHtml(p.subtitle)}</p>
        <div class="case-meta-row">
          <div>
            <div class="case-meta-label">My Role</div>
            <div class="case-meta-value">${escapeHtml(p.role)}</div>
          </div>
          <div>
            <div class="case-meta-label">Tools</div>
            <div class="case-meta-value">${escapeHtml(p.tools)}</div>
          </div>
          ${p.timeline ? `<div><div class="case-meta-label">Timeline</div><div class="case-meta-value">${escapeHtml(p.timeline)}</div></div>` : ""}
          ${p.team ? `<div><div class="case-meta-label">Team</div><div class="case-meta-value">${escapeHtml(p.team)}</div></div>` : ""}
        </div>

        <h2 class="case-block-heading">${escapeHtml(p.overview.heading)}</h2>
        <p class="case-block-subheading">${escapeHtml(p.overview.subheading)}</p>
        <p class="case-block-body">${escapeHtml(p.overview.body)}</p>

        ${
          p.prototype
            ? `<h2 class="case-block-heading">Prototype</h2>
               <div class="proto-frame"><iframe src="${p.prototype.embedUrl}" title="${escapeHtml(p.title)} prototype" allowfullscreen loading="lazy"></iframe></div>
               <p class="proto-note"><a href="${p.prototype.openUrl}" target="_blank" rel="noopener">Open the prototype in Figma &#8599;</a></p>`
            : ""
        }
        ${
          p.slideshow
            ? `<h2 class="case-block-heading">Slides</h2>
               <p class="case-block-subheading" style="margin-bottom:16px;">Swipe or use the arrows to read through the full report</p>
               <div class="slideshow" id="slideshow">
                 <div class="slideshow-track" id="slideshow-track">
                   ${p.slideshow
                     .map(
                       (src, i) =>
                         `<div class="slideshow-slide"><img src="${src}" alt="${escapeHtml(p.title)} slide ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" draggable="false"/></div>`
                     )
                     .join("")}
                 </div>
                 <button class="carousel-arrow prev" id="slide-prev" aria-label="Previous slide">&#8249;</button>
                 <button class="carousel-arrow next" id="slide-next" aria-label="Next slide">&#8250;</button>
                 <div class="slideshow-counter" id="slide-counter">1 / ${p.slideshow.length}</div>
               </div>`
            : ""
        }
        ${
          p.notionUrl
            ? `<a class="notion-btn" href="${p.notionUrl}" target="_blank" rel="noopener">Read the full case study on Notion &#8599;</a>`
            : ""
        }
        ${
          p.wireframeUrl
            ? `<a class="notion-btn" href="${p.wireframeUrl}" target="_blank" rel="noopener">View the design wireframe on Figma &#8599;</a>`
            : ""
        }

        ${sections}
      </div>
    `;

    document.getElementById("case-back").addEventListener("click", () => {
      window.location.hash = lastListHash;
    });

    if (p.slideshow) setupSlideshow(p.slideshow.length);
  }

  function setupSlideshow(total) {
    const track = document.getElementById("slideshow-track");
    const counter = document.getElementById("slide-counter");
    const prev = document.getElementById("slide-prev");
    const next = document.getElementById("slide-next");
    let index = 0;

    function go(i) {
      index = Math.max(0, Math.min(total - 1, i));
      track.style.transform = `translateX(-${index * 100}%)`;
      counter.textContent = `${index + 1} / ${total}`;
    }

    prev.addEventListener("click", () => go(index - 1));
    next.addEventListener("click", () => go(index + 1));

    let touchStartX = null;
    track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true }
    );
    track.addEventListener(
      "touchend",
      (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchStartX = null;
      },
      { passive: true }
    );
  }

  function renderResume() {
    app.innerHTML = `
      <div class="resume-wrap">
        <iframe class="resume-frame" src="${SITE.resumeUrl}" title="Resume"></iframe>
        <p class="resume-fallback">If the resume doesn't load above, <a href="${SITE.resumeUrl}" target="_blank" rel="noopener">open it directly</a>.</p>
      </div>
    `;
  }

  // ---------------- Router ----------------

  function setActiveTab(name) {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
  }

  function route() {
    const hash = window.location.hash || "#home";

    if (hash.startsWith("#project/")) {
      const id = hash.replace("#project/", "");
      setActiveTab("projects");
      searchtext.textContent = PROMPTS.projects;
      renderProjectDetail(id);
      return;
    }

    if (hash === "#projects") {
      lastListHash = "#projects";
      setActiveTab("projects");
      searchtext.textContent = PROMPTS.projects;
      renderProjects();
      return;
    }

    if (hash === "#more") {
      lastListHash = "#more";
      setActiveTab("projects");
      searchtext.textContent = PROMPTS.projects;
      renderMoreProjects();
      return;
    }

    if (hash === "#resume") {
      setActiveTab("resume");
      searchtext.textContent = PROMPTS.resume;
      renderResume();
      return;
    }

    setActiveTab("home");
    searchtext.textContent = PROMPTS.home;
    renderHome();
  }

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", route);
  if (document.readyState !== "loading") route();
})();
