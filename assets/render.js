/* Renders page content from the data files in assets/data/.
   Each block only runs if its target element exists on the current page. */
(() => {

  /* ---------- External links open in a new tab ----------
     Delegated on click so links injected by later re-renders
     (sort/filter/news toggles) are covered too. */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (a && a.host && a.host !== location.host) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
  });

  /* ---------- Last-updated stamp (any page with #last-updated) ---------- */
  const updatedEl = document.getElementById('last-updated');
  if (updatedEl) {
    const d = new Date(document.lastModified);
    const stamp = isNaN(d)
      ? document.lastModified
      : d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    updatedEl.textContent = 'Last updated: ' + stamp;
  }

  /* ---------- Generic card lists (awards, education & employment) ---------- */
  const cardHTML = (item) => {
    let html = '<div class="card">' +
      '<h3 style="margin-top:0">' + item.title + '</h3>' +
      (item.meta ? '<p class="meta">' + item.meta + '</p>' : '');
    if (item.bullets && item.bullets.length) {
      html += '<ul style="margin-top:8px">' +
        item.bullets.map((b) => '<li>' + b + '</li>').join('') +
        '</ul>';
    }
    return html + '</div>';
  };

  const renderCards = (id, items) => {
    const el = document.getElementById(id);
    if (el && items) el.innerHTML = items.map(cardHTML).join('');
  };

  if (typeof AWARDS_DATA !== 'undefined') {
    renderCards('awards-list', AWARDS_DATA);
  }
  if (typeof EDU_EMP_DATA !== 'undefined') {
    renderCards('employment-list', EDU_EMP_DATA.employment);
    renderCards('education-list', EDU_EMP_DATA.education);
  }

  /* ---------- Home page (hero, about, artifacts) ---------- */
  if (typeof HOME_DATA !== 'undefined') {
    const socialEl = document.getElementById('home-social');
    if (socialEl) {
      socialEl.innerHTML = HOME_DATA.social.map((s) =>
        '<a href="' + s.url + '">' + s.label + '</a>'
      ).join('');
    }
    const rolesEl = document.getElementById('home-roles');
    if (rolesEl) {
      rolesEl.innerHTML = HOME_DATA.roles.map((r) =>
        '<div class="role-card">' +
          '<div class="org">' + r.org + '</div>' +
          '<div class="detail">' + r.detail + '</div>' +
        '</div>'
      ).join('');
    }
    const sectionsEl = document.getElementById('home-sections');
    if (sectionsEl) {
      sectionsEl.innerHTML = HOME_DATA.sections.map((sec) =>
        '<h2>' + sec.heading + '</h2>' +
        sec.paragraphs.map((p) => '<p>' + p + '</p>').join('')
      ).join('');
    }
    renderCards('artifacts-list', HOME_DATA.artifacts);
  }

  /* ---------- Recent news (home) ---------- */
  const NEWS_TAG_LABELS = {
    paper: 'Paper', talk: 'Talk', conference: 'Conference', pc: 'PC',
    service: 'Service', award: 'Award', internship: 'Internship',
    milestone: 'Milestone', media: 'Media'
  };
  if (typeof NEWS_DATA !== 'undefined') {
    const newsEl = document.getElementById('news-groups');
    const newsFiltersEl = document.getElementById('news-filters');
    if (newsEl) {
      const years = [];
      NEWS_DATA.forEach((n) => {
        if (years.indexOf(n.year) === -1) years.push(n.year);
      });
      years.sort((a, b) => b - a);
      let activeYear = null; /* null = all years */
      let activeTag = null;  /* null = all categories */

      const matches = (n) =>
        (activeYear === null || n.year === activeYear) &&
        (activeTag === null || n.tag === activeTag);

      const groupHTML = (year, collapsed) => {
        const items = NEWS_DATA.filter((n) => n.year === year && matches(n));
        if (!items.length) return '';
        return '<section class="news-group' + (collapsed ? ' collapsed' : '') + '">' +
          '<button type="button" class="news-toggle" aria-expanded="' + !collapsed + '">' +
            '<span class="news-year">' + year + '</span>' +
            '<span class="news-count">' + items.length + ' item' + (items.length > 1 ? 's' : '') + '</span>' +
            '<span class="chev" aria-hidden="true"></span>' +
          '</button>' +
          '<ul class="news plain">' + items.map((n) =>
            '<li><span class="date">' + n.date + '</span><span>' +
              (n.tag ? '<span class="ntag ntag-' + n.tag + '">' + (NEWS_TAG_LABELS[n.tag] || n.tag) + '</span>' : '') +
              n.text + '</span></li>'
          ).join('') + '</ul>' +
        '</section>';
      };

      const renderNews = () => {
        const shown = activeYear ? [activeYear] : years;
        /* all-years + no tag: newest year open, older collapsed;
           with a tag filter active: expand everything so matches are visible */
        const html = shown.map((y, i) =>
          groupHTML(y, activeTag === null && activeYear === null && i > 0)
        ).join('');
        newsEl.innerHTML = html ||
          '<p class="news-empty">No news items match this filter.</p>';
      };

      newsEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.news-toggle');
        if (!btn) return;
        const group = btn.parentElement;
        group.classList.toggle('collapsed');
        btn.setAttribute('aria-expanded', !group.classList.contains('collapsed'));
      });

      if (newsFiltersEl) {
        newsFiltersEl.innerHTML = ['All'].concat(years).map((y, i) =>
          '<button type="button" class="filter-btn' + (i === 0 ? ' is-active' : '') + '"' +
            (i === 0 ? '' : ' data-year="' + y + '"') +
            ' aria-pressed="' + (i === 0) + '">' + y + '</button>'
        ).join('');
        newsFiltersEl.addEventListener('click', (e) => {
          const btn = e.target.closest('.filter-btn');
          if (!btn) return;
          activeYear = btn.dataset.year ? Number(btn.dataset.year) : null;
          newsFiltersEl.querySelectorAll('.filter-btn').forEach((other) => {
            const active = other === btn;
            other.classList.toggle('is-active', active);
            other.setAttribute('aria-pressed', active);
          });
          renderNews();
        });
      }

      const tagFiltersEl = document.getElementById('news-tag-filters');
      if (tagFiltersEl) {
        const usedTags = Object.keys(NEWS_TAG_LABELS).filter((t) =>
          NEWS_DATA.some((n) => n.tag === t)
        );
        tagFiltersEl.innerHTML =
          '<button type="button" class="tagf-btn is-active" aria-pressed="true">All</button>' +
          usedTags.map((t) =>
            '<button type="button" class="tagf-btn ntag ntag-' + t + '" data-tag="' + t + '"' +
              ' aria-pressed="false">' + NEWS_TAG_LABELS[t] + '</button>'
          ).join('');
        tagFiltersEl.addEventListener('click', (e) => {
          const btn = e.target.closest('.tagf-btn');
          if (!btn) return;
          activeTag = btn.dataset.tag || null;
          tagFiltersEl.querySelectorAll('.tagf-btn').forEach((other) => {
            const active = other === btn;
            other.classList.toggle('is-active', active);
            other.setAttribute('aria-pressed', active);
          });
          renderNews();
        });
      }

      renderNews();
    }
  }

  /* ---------- Academic services ---------- */
  if (typeof SERVICES_DATA !== 'undefined') {
    const grid = document.getElementById('services-grid');
    if (grid) {
      grid.innerHTML = SERVICES_DATA.map((group) => {
        const items = group.items.map((it) =>
          '<li><span class="svc-name">' + it.name + '</span>' +
          (it.years ? '<span class="svc-years">' + it.years + '</span>' : '') +
          '</li>'
        ).join('');
        return '<section class="svc-card">' +
          '<div class="svc-head">' +
            '<h2 class="svc-role">' + group.role + '</h2>' +
            (group.items.length > 1 ? '<span class="svc-count">' + group.items.length + '</span>' : '') +
          '</div>' +
          '<ul class="svc-items plain">' + items + '</ul>' +
        '</section>';
      }).join('');
    }
  }

  /* ---------- Publications ---------- */
  const pubList = document.getElementById('pub-list');
  if (!pubList || typeof PUBLICATIONS_DATA === 'undefined') return;

  const statsEl = document.getElementById('pub-stats');
  if (statsEl) {
    statsEl.innerHTML = PUBLICATIONS_DATA.stats.map((s) =>
      '<div class="stat"><div class="num">' + s.num + '</div><div class="lbl">' + s.lbl + '</div></div>'
    ).join('') + '<div class="note">' + PUBLICATIONS_DATA.note + '</div>';
  }

  const paperHTML = (p) => {
    const title = p.url
      ? '<a href="' + p.url + '">' + p.title + '</a>'
      : p.title;
    const badgeSpans = (p.badges || []).map((b) =>
      '<span class="badge ' + b.type + '">' + b.label + '</span>'
    ).concat((p.topics || []).map((t) =>
      '<span class="badge topic">' + t + '</span>'
    ));
    const badges = badgeSpans.length
      ? '<div class="badges">' + badgeSpans.join('') + '</div>'
      : '';
    const res = (p.links && p.links.length)
      ? '<div class="res">' + p.links.map((l) =>
          '<a href="' + l.url + '">' + l.label + '</a>'
        ).join('') + '</div>'
      : '';
    /* placed as a direct child of .pub-row so it spans the full card width */
    const abstract = p.abstract
      ? '<div class="abs">' +
          '<button type="button" class="abs-toggle" aria-expanded="false">' +
            '<span class="abs-chev" aria-hidden="true"></span>' +
            '<span class="abs-label">Abstract</span>' +
            '<span class="abs-hint" aria-hidden="true">click to expand</span>' +
          '</button>' +
          '<div class="abs-body" hidden><p>' + p.abstract + '</p></div>' +
        '</div>'
      : '';
    return '<div class="pub-row">' +
      '<div>' +
        '<div class="title">' + title + '</div>' +
        '<div class="authors">' + p.authors + '</div>' +
        '<div class="venue-line">' + p.venue + '</div>' +
        badges + res +
      '</div>' +
      '<div class="cited">' + (p.citations == null ? '—' : p.citations) + '<small>CITED BY</small></div>' +
      '<div class="year">' + p.year + '</div>' +
      abstract +
    '</div>';
  };

  const state = { key: 'year', dir: -1, topic: null }; /* newest first, all topics */

  const val = (p, key) => key === 'citations' ? (p.citations || 0) : p.year;

  const renderPapers = () => {
    const papers = PUBLICATIONS_DATA.papers.filter((p) =>
      !state.topic || (p.topics || []).indexOf(state.topic) !== -1
    ).sort((a, b) => {
      const av = val(a, state.key), bv = val(b, state.key);
      if (av !== bv) return (av - bv) * state.dir;
      /* tie-breaker: the other column, descending */
      const alt = state.key === 'year' ? 'citations' : 'year';
      return val(b, alt) - val(a, alt);
    });
    pubList.innerHTML = papers.length
      ? papers.map(paperHTML).join('')
      : '<p class="pub-empty">No publications match this topic.</p>';
  };

  const filtersEl = document.getElementById('pub-filters');
  if (filtersEl) {
    const topics = [];
    PUBLICATIONS_DATA.papers.forEach((p) => {
      (p.topics || []).forEach((t) => {
        if (topics.indexOf(t) === -1) topics.push(t);
      });
    });
    filtersEl.innerHTML = ['All'].concat(topics).map((t, i) =>
      '<button type="button" class="filter-btn' + (i === 0 ? ' is-active' : '') + '"' +
        (i === 0 ? '' : ' data-topic="' + t + '"') +
        ' aria-pressed="' + (i === 0) + '">' + t + '</button>'
    ).join('');
    filtersEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      state.topic = btn.dataset.topic || null;
      filtersEl.querySelectorAll('.filter-btn').forEach((other) => {
        const active = other === btn;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', active);
      });
      renderPapers();
    });
  }

  /* Collapsible abstract dropdowns (event-delegated so it survives re-render) */
  pubList.addEventListener('click', (e) => {
    const btn = e.target.closest('.abs-toggle');
    if (!btn) return;
    const body = btn.nextElementSibling;
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !open);
    if (body) body.hidden = open;
    const hint = btn.querySelector('.abs-hint');
    if (hint) hint.textContent = open ? 'click to expand' : 'click to collapse';
  });

  const buttons = document.querySelectorAll('.pub-table-head .sort-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const { key } = btn.dataset;
      if (state.key === key) {
        state.dir = -state.dir;
      } else {
        state.key = key;
        state.dir = -1; /* new column starts highest-first */
      }
      buttons.forEach((other) => {
        const active = other.dataset.key === state.key;
        other.classList.toggle('is-active', active);
        other.classList.toggle('desc', active && state.dir === -1);
        other.classList.toggle('asc', active && state.dir === 1);
      });
      renderPapers();
    });
  });

  renderPapers();
})();
