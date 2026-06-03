(function () {
  "use strict";

  // Set from repo config — update when you know your GitHub org/repo
  const GITHUB_REPO = window.HORIZON_GITHUB_REPO || "";

  function setGitHubLinks() {
    if (!GITHUB_REPO) return;
    const base = "https://github.com/" + GITHUB_REPO;
    ["github-link", "footer-github", "dock-github"].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.href = base;
    });
  }

  function updateClock() {
    const el = document.getElementById("clock");
    if (!el) return;
    const now = new Date();
    el.textContent = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function initDockHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const dockItems = document.querySelectorAll(".dock-item[href^='#']");

    if (!sections.length || !dockItems.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          dockItems.forEach(function (item) {
            const href = item.getAttribute("href");
            item.classList.toggle("active", href === "#" + id);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initSmoothDock() {
    document.querySelectorAll(".dock-item[href^='#']").forEach(function (link) {
      link.addEventListener("click", function (e) {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  setGitHubLinks();
  updateClock();
  setInterval(updateClock, 1000);
  initDockHighlight();
  initSmoothDock();
})();
