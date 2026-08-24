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

  /* ---------- LinkedIn-style experience timeline (employment & education) ---------- */
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parseYM = (s) => {
    if (!s || s === 'present') { const n = new Date(); return { y: n.getFullYear(), m: n.getMonth() + 1 }; }
    const p = s.split('-'); return { y: +p[0], m: +p[1] };
  };
  const fmtYM = (s) => {
    if (!s || s === 'present') return 'Present';
    const d = parseYM(s); return MONTHS[d.m - 1] + ' ' + d.y;
  };
  const durationText = (start, end) => {
    const a = parseYM(start), b = parseYM(end);
    let months = (b.y - a.y) * 12 + (b.m - a.m) + 1;
    if (months < 1) months = 1;
    const y = Math.floor(months / 12), m = months % 12;
    const parts = [];
    if (y) parts.push(y + ' yr' + (y > 1 ? 's' : ''));
    if (m) parts.push(m + ' mo' + (m > 1 ? 's' : ''));
    return parts.join(' ') || '1 mo';
  };

  const AWARD_CAT_LABELS = {
    travel: 'Travel Award', grant: 'Grant', scholarship: 'Scholarship', honor: 'Academic Honor'
  };

  const logoHTML = (item) => {
    const orgName = item.url ? '<a href="' + item.url + '">' + item.org + '</a>' : item.org;
    const monogram = '<span class="xp-monogram" style="background:' + (item.logoColor || 'var(--ink)') + '">' +
      (item.logo || (item.org || '?').charAt(0)) + '</span>';
    const imgSrc = item.logoSrc
      ? item.logoSrc
      : (item.domain ? 'https://www.google.com/s2/favicons?domain=' + item.domain + '&sz=64' : null);
    const logo = imgSrc
      ? '<img class="xp-logo-img' + (item.logoSrc ? ' xp-logo-full' : '') + '" src="' + imgSrc + '"' +
        ' alt="" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
        monogram.replace('class="xp-monogram"', 'class="xp-monogram" style="display:none;background:' + (item.logoColor || 'var(--ink)') + '"')
      : monogram;
    return { logo: logo, orgName: orgName };
  };

  /* role text lines; showOrg=false when the org appears as a group header */
  const roleLinesHTML = (item, ongoing, orgName, showOrg) => {
    const period = item.periodText || (fmtYM(item.start) + ' – ' + fmtYM(item.end));
    const dur = (!item.category && item.start) ? durationText(item.start, item.end) : '';
    const cat = item.category
      ? ' <span class="xp-cat xp-cat-' + item.category + '">' +
        (AWARD_CAT_LABELS[item.category] || item.category) + '</span>'
      : '';
    let body = '';
    if (item.detail) body += '<p class="xp-detail">' + item.detail + '</p>';
    if (item.bullets && item.bullets.length) {
      body += '<ul class="xp-bullets">' + item.bullets.map((b) => '<li>' + b + '</li>').join('') + '</ul>';
    }
    const orgLine = showOrg
      ? '<div class="xp-org">' + orgName +
          (item.employmentType ? ' <span class="xp-type">· ' + item.employmentType + '</span>' : '') + '</div>'
      : (item.employmentType ? '<div class="xp-org"><span class="xp-type">' + item.employmentType + '</span></div>' : '');
    return '<div class="xp-title">' + item.title + cat + '</div>' +
      orgLine +
      '<div class="xp-dates">' + period +
        (dur ? ' <span class="xp-dur">· ' + dur + '</span>' : '') +
        (ongoing ? ' <span class="xp-now">Current</span>' : '') + '</div>' +
      (item.location ? '<div class="xp-loc">' + item.location + '</div>' : '') +
      body;
  };

  const renderExperience = (id, items) => {
    const el = document.getElementById(id);
    if (!el || !items) return;
    const sorted = items.slice().sort((p, q) => {
      const a = parseYM(p.start), b = parseYM(q.start);
      return (b.y * 12 + b.m) - (a.y * 12 + a.m);
    });
    /* group consecutive entries that share the same org (LinkedIn-style) */
    const groups = [];
    sorted.forEach((it) => {
      const last = groups[groups.length - 1];
      if (last && last.org === it.org) last.items.push(it);
      else groups.push({ org: it.org, items: [it] });
    });
    el.innerHTML = '<ul class="xp-list">' + groups.map((g) => {
      const first = g.items[0];
      const parts = logoHTML(first);
      const groupOngoing = g.items.some((it) => it.end === 'present' && !it.hideCurrent);
      if (g.items.length === 1) {
        return '<li class="xp-item' + (groupOngoing ? ' xp-ongoing' : '') + '">' +
          '<div class="xp-logo-col"><div class="xp-logo">' + parts.logo + '</div></div>' +
          '<div class="xp-body">' +
            roleLinesHTML(first, first.end === 'present' && !first.hideCurrent, parts.orgName, true) +
          '</div>' +
        '</li>';
      }
      /* multi-role institution: one logo, org header, roles joined by a sub-rail */
      return '<li class="xp-item xp-grouped' + (groupOngoing ? ' xp-ongoing' : '') + '">' +
        '<div class="xp-logo-col"><div class="xp-logo">' + parts.logo + '</div></div>' +
        '<div class="xp-body">' +
          '<div class="xp-group-org">' + parts.orgName +
            '<span class="xp-rolecount">' + g.items.length + ' roles</span></div>' +
          '<ul class="xp-roles">' + g.items.map((it) =>
            '<li class="xp-subrole"><span class="xp-subdot" aria-hidden="true"></span>' +
              '<div class="xp-subrole-body">' +
                roleLinesHTML(it, it.end === 'present' && !it.hideCurrent, parts.orgName, false) +
              '</div>' +
            '</li>'
          ).join('') + '</ul>' +
        '</div>' +
      '</li>';
    }).join('') + '</ul>';
  };

  if (typeof EDU_EMP_DATA !== 'undefined') {
    renderExperience('employment-list', EDU_EMP_DATA.employment);
    renderExperience('education-list', EDU_EMP_DATA.education);
  }
  if (typeof AWARDS_DATA !== 'undefined') {
    renderExperience('awards-list', AWARDS_DATA);
  }

  /* ---------- Home page (hero, about, artifacts) ---------- */
  if (typeof HOME_DATA !== 'undefined') {
    const socialEl = document.getElementById('home-social');
    if (socialEl) {
      const DOC_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>';
      socialEl.innerHTML = HOME_DATA.social.map((s) => {
        const icon = s.icon === 'doc'
          ? '<span class="soc-ico">' + DOC_ICON + '</span>'
          : (s.domain
              ? '<img class="soc-ico soc-img" src="https://www.google.com/s2/favicons?domain=' + s.domain + '&sz=32"' +
                ' alt="" loading="lazy" onerror="this.style.display=\'none\';">'
              : '');
        return '<a href="' + s.url + '">' + icon + s.label + '</a>';
      }).join('');
    }
    const rolesEl = document.getElementById('home-roles');
    if (rolesEl) {
      rolesEl.innerHTML = HOME_DATA.roles.map((r) => {
        const mono = '<span class="xp-monogram" style="display:none;background:' + (r.logoColor || 'var(--ink)') + '">' +
          (r.logo || (r.org || '?').charAt(0)) + '</span>';
        const imgSrc = r.logoSrc
          ? r.logoSrc
          : (r.domain ? 'https://www.google.com/s2/favicons?domain=' + r.domain + '&sz=64' : null);
        const tile = imgSrc
          ? '<div class="role-logo"><img class="xp-logo-img' + (r.logoSrc ? ' xp-logo-full' : '') + '" src="' + imgSrc + '"' +
            ' alt="" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' + mono + '</div>'
          : '';
        return '<div class="role-card' + (tile ? ' has-logo' : '') + '">' +
          tile +
          '<div class="role-text">' +
            '<div class="org">' + r.org + '</div>' +
            '<div class="detail">' + r.detail + '</div>' +
          '</div>' +
        '</div>';
      }).join('');
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
    ).join('');
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
      '<div class="year">' + p.year + '</div>' +
      abstract +
    '</div>';
  };

  const state = { dir: -1, topic: null }; /* newest first, all topics */

  const renderPapers = () => {
    const papers = PUBLICATIONS_DATA.papers.filter((p) =>
      !state.topic || (p.topics || []).indexOf(state.topic) !== -1
    ).sort((a, b) => (a.year - b.year) * state.dir);
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
      state.dir = -state.dir;
      btn.classList.toggle('desc', state.dir === -1);
      btn.classList.toggle('asc', state.dir === 1);
      renderPapers();
    });
  });

  renderPapers();
})();
