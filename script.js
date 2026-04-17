const data = window.resumeData;

const setText = (selector, value) => {
  document.querySelector(selector).textContent = value;
};

const renderList = (target, items, renderItem) => {
  const node = document.querySelector(target);
  node.innerHTML = items.map(renderItem).join("");
};

const createNav = () => {
  renderList("#topnav", data.nav, (item) => `<a href="#${item.id}">${item.label}</a>`);
};

const createHero = () => {
  setText("#eyebrow", data.profile.eyebrow);
  setText("#name", data.profile.name);
  setText("#headline", data.profile.role);
  setText("#summary", data.profile.summary);

  const avatar = document.querySelector("#avatar");
  avatar.src = data.profile.avatar;

  renderList(
    "#cta-row",
    data.ctas,
    (item) => `<a class="button ${item.variant}" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`
  );

  renderList("#focus-chips", data.profile.focus, (item) => `<li>${item}</li>`);

  renderList(
    "#meta-list",
    data.profile.quickFacts,
    (item) => `<li><strong>${item.label}</strong><br />${item.value}</li>`
  );
};

const createStats = () => {
  renderList(
    "#stats-grid",
    data.stats,
    (item, index) => `
      <article class="stat-card reveal reveal-delay-${Math.min(index, 3)}">
        <p class="stat-value">${item.value}</p>
        <p class="stat-label">${item.label}</p>
        <p class="stat-note">${item.note}</p>
      </article>
    `
  );
};

const createStrengths = () => {
  renderList(
    "#strength-grid",
    data.strengths,
    (item, index) => `
      <article class="strength-card reveal reveal-delay-${Math.min(index, 3)}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
};

const createStack = () => {
  renderList(
    "#stack-grid",
    data.stackGroups,
    (group, index) => `
      <article class="stack-card reveal reveal-delay-${Math.min(index, 3)}">
        <h3>${group.title}</h3>
        <p>${group.description}</p>
        <div class="stack-list">
          ${group.items.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </article>
    `
  );
};

const createProjects = () => {
  renderList(
    "#project-grid",
    data.projects,
    (project, index) => `
      <article class="project-card reveal reveal-delay-${Math.min(index, 3)}">
        <h3>${project.title}</h3>
        <div class="project-meta">
          <span>${project.period}</span>
          <span>${project.role}</span>
        </div>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.links
            .map(
              (link) =>
                `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
            )
            .join("")}
        </div>
      </article>
    `
  );
};

const createTimeline = () => {
  renderList(
    "#timeline-list",
    data.timeline,
    (item, index) => `
      <article class="timeline-item reveal reveal-delay-${Math.min(index, 3)}">
        <div class="timeline-meta">${item.when}</div>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `
  );
};

const createWriting = () => {
  const box = document.querySelector("#writing-card");
  box.innerHTML = `
    <h3>${data.writing.title}</h3>
    <p>${data.writing.description}</p>
    <ul class="writing-list">
      ${data.writing.bullets.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="contact-links">
      ${data.writing.links
        .map(
          (link) =>
            `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
        )
        .join("")}
    </div>
  `;
};

const createContact = () => {
  const box = document.querySelector("#contact-box");
  box.innerHTML = `
    <h3>함께 일하거나 이야기를 나누고 싶다면</h3>
    <p>${data.contact.intro}</p>
    <div class="contact-links">
      ${data.contact.links
        .map(
          (link) =>
            `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
        )
        .join("")}
    </div>
  `;
};

const createFooter = () => {
  setText("#footer-note", data.footer);
};

createNav();
createHero();
createStats();
createStrengths();
createStack();
createProjects();
createTimeline();
createWriting();
createContact();
createFooter();
