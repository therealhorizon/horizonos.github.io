(function () {
  "use strict";

  const GITHUB_REPO = window.HORIZON_GITHUB_REPO || "";

  function setGitHubLinks() {
    if (!GITHUB_REPO) return;
    const url = "https://github.com/" + GITHUB_REPO;
    ["github-link", "footer-github"].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.href = url;
    });
  }

  function initNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".site-nav a[href^='#']");
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  setGitHubLinks();
  initNavHighlight();
})();
