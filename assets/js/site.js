/* ==============================================================
   MANAS Lab website: page behaviour

   You don't need to edit this file. All text, pictures and links
   live in the files inside the data/ folder.
   ============================================================== */
(function () {
  'use strict';

  var body = document.body;
  var ROOT = (body.getAttribute('data-root') || '.').replace(/\/+$/, '');
  var PAGE = body.getAttribute('data-page') || '';
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var DUR = reduceMotion ? 0 : 320;

  // If the browser is using an old saved copy of style.css, load the current one.
  // Keep this number the same as --site-version at the top of style.css.
  var STYLE_VERSION = '3';
  (function freshStyles() {
    try {
      var v = getComputedStyle(document.documentElement).getPropertyValue('--site-version').trim();
      if (v === STYLE_VERSION) return;
      var link = document.querySelector('link[href*="style.css"]');
      if (!link) return;
      link.setAttribute('href', link.getAttribute('href').split('?')[0] + '?v=' + STYLE_VERSION);
    } catch (e) {}
  })();

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  /* ---------- small helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function each(list, fn) { Array.prototype.forEach.call(list || [], fn); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function isAbsolute(p) { return /^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(p); }
  function isExternal(p) { return /^https?:\/\//i.test(String(p || '')); }
  // Paths in the data files are written from the site's main folder.
  // Pages inside a subfolder (like products/) need "../" in front.
  function asset(p) {
    p = String(p == null ? '' : p).trim();
    if (!p || isAbsolute(p) || ROOT === '' || ROOT === '.') return p;
    return ROOT + '/' + p;
  }
  function safeUrl(u) { return /^\s*javascript:/i.test(u) ? '#' : u; }
  function linkAttrs(url) {
    return 'href="' + esc(safeUrl(asset(url))) + '"' + (isExternal(url) ? ' target="_blank" rel="noopener"' : '');
  }
  // Text formatting inside data files: **bold** and [link text](address)
  function fmt(s) {
    var out = esc(s);
    out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, text, url) {
      url = url.replace(/&amp;/g, '&');
      return '<a ' + linkAttrs(url) + '>' + text + '</a>';
    });
    return out;
  }
  function fmtPlain(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function paragraphs(t) {
    var list = Array.isArray(t) ? t : String(t || '').split(/\n\s*\n/);
    return list.filter(function (p) { return String(p).trim(); })
      .map(function (p) { return '<p>' + fmt(p) + '</p>'; }).join('');
  }
  function debounce(fn, ms) {
    var t;
    return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }
  function mq(query) { return window.matchMedia ? window.matchMedia(query) : { matches: false }; }
  function onMediaChange(m, fn) {
    if (m.addEventListener) m.addEventListener('change', fn);
    else if (m.addListener) m.addListener(fn);
  }
  function scrollByY(y) {
    if (!y) return;
    try { window.scrollBy({ top: y, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); }
    catch (e) { window.scrollBy(0, y); }
  }
  // Height of the sticky top bar on phones, so scrolling doesn't hide things under it
  function topOffset() {
    var bar = $('#sidebar');
    return bar && mq('(max-width: 860px)').matches ? bar.offsetHeight : 0;
  }

  /* ---------- pictures ---------- */
  function missing(cls, src) {
    return el('span', (cls || '') + ' img-missing', 'Picture not found:<br>' + esc(src));
  }
  function picture(src, alt, cls) {
    var im = document.createElement('img');
    if (cls) im.className = cls;
    im.alt = alt || '';
    im.decoding = 'async';
    im.loading = 'lazy';
    im.onerror = function () {
      if (window.console) console.warn('Picture not found: ' + src);
      if (im.parentNode) im.parentNode.replaceChild(missing(cls, src), im);
    };
    im.src = asset(src);
    return im;
  }

  /* ---------- YouTube ---------- */
  function youtubeId(v) {
    if (!v) return '';
    v = String(v).trim();
    if (/^[\w-]{11}$/.test(v)) return v;
    var m = v.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/);
    return m ? m[1] : '';
  }
  function youtubeThumb(id) { return 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg'; }
  function youtubeFrame(id, title) {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0';
    f.title = title || 'YouTube video';
    f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    f.setAttribute('allowfullscreen', '');
    f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    f.setAttribute('frameborder', '0');
    return f;
  }

  function button(label, url, cls) {
    var icon = /github\.com/i.test(url || '') ? '<i class="fa-brands fa-github" aria-hidden="true"></i>' : '';
    var a = el('a', 'btn ' + (cls || 'btn-outline'), icon + '<span>' + esc(label) + '</span>');
    a.setAttribute('href', safeUrl(asset(url)));
    if (isExternal(url)) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }

  /* ---------- when a data file has a mistake ---------- */
  function dataError(file) {
    var box = el('div', 'data-error',
      '<strong>' + esc(file) + ' has a mistake, so this part of the page can’t be shown.</strong> ' +
      'Check that every piece of text is inside quotes and every item ends with a comma, then reload. ' +
      'The browser console (F12) shows the line number.');
    box.setAttribute('role', 'alert');
    var page = $('#page');
    if (page) page.insertBefore(box, page.firstChild);
  }
  function need(name, file) {
    if (window[name]) return window[name];
    dataError(file);
    return null;
  }

  /* ---------- left bar and footer ---------- */
  function renderSidebar() {
    var S = window.SITE || {};
    var bar = $('#sidebar');
    if (!bar) return;
    var tabs = (S.tabs || []).map(function (t) {
      var on = t.page === PAGE;
      return '<a class="tab' + (on ? ' is-current' : '') + '" ' + linkAttrs(t.href) + (on ? ' aria-current="page"' : '') + '>' + esc(t.label) + '</a>';
    }).join('');
    var html = '<a class="brand" href="' + esc(asset('index.html')) + '">' + esc(S.name || 'MANAS Lab') + '</a>' +
      '<hr class="sidebar-rule">' +
      '<nav class="tabs" aria-label="Main">' + tabs + '</nav>';
    if (S.linkedin) {
      html += '<a class="social" href="' + esc(S.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' +
        '<i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>';
    }
    bar.innerHTML = html;
  }

  function renderFooter() {
    var S = window.SITE || {};
    var f = $('#footer');
    if (!f) return;
    var parts = ['<span>© ' + new Date().getFullYear() + ' ' + esc(S.name || 'MANAS Lab') + '</span>'];
    if (S.affiliation) parts.push('<span>' + fmt(S.affiliation) + '</span>');
    if (S.email) parts.push('<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a>');
    f.innerHTML = parts.join('');
  }

  function setIntro(text) {
    var p = $('#intro');
    if (!p) return;
    if (text) p.innerHTML = fmt(text);
    else p.parentNode.removeChild(p);
  }

  function hideSection(node) {
    var s = node && (node.closest ? node.closest('section') : node.parentNode);
    if (s) s.hidden = true;
  }

  /* ---------- HOME ---------- */
  function home() {
    var S = window.SITE || {};
    var H = need('HOME', 'data/home.js');
    var name = $('#lab-name');
    if (name && S.name) name.textContent = S.name;
    var photo = $('#hero-photo');
    if (photo) {
      if (S.photo) {
        photo.alt = S.photoAlt || '';
        photo.onerror = function () { photo.replaceWith ? photo.replaceWith(missing('hero-photo', S.photo)) : (photo.style.visibility = 'hidden'); };
        photo.src = asset(S.photo);
      } else {
        photo.parentNode.removeChild(photo);
      }
    }
    if (!H) return;
    var text = $('#hero-text');
    if (text) text.innerHTML = fmt(H.intro || '');
    strip(H);
    highlights(H.highlights || []);
    news(H.news || [], Number(H.newsShown) || 6);
  }

  function strip(H) {
    var box = $('#strip');
    var btn = $('#strip-toggle');
    if (!box) return;
    var photos = (H.photos || []).map(function (p) {
      return typeof p === 'string' ? { src: p, alt: '' } : p;
    }).filter(function (p) { return p && p.src; });
    if (!photos.length) { box.parentNode.hidden = true; return; }

    var slots = [];
    for (var s = 0; s < 3; s++) {
      var slot = el('div', 'strip-slot');
      var p = photos[s % photos.length];
      var first = picture(p.src, p.alt, 'strip-img is-shown');
      first.loading = 'eager';
      slot.appendChild(first);
      box.appendChild(slot);
      slots.push(slot);
    }
    if (photos.length <= 3 || !btn) { if (btn) btn.hidden = true; return; }

    var next = 3, turn = 0, timer = null;
    var together = String(H.photoMode || '').toLowerCase() === 'all-together';
    var seconds = Math.max(2, Number(H.photoSeconds) || 4);
    var playing = !reduceMotion;

    function swap(slot, photo, delay) {
      var incoming = picture(photo.src, photo.alt, 'strip-img');
      incoming.loading = 'eager';
      incoming.onload = function () {
        setTimeout(function () {
          slot.appendChild(incoming);
          void incoming.offsetWidth;
          incoming.className = 'strip-img is-shown';
          setTimeout(function () {
            var all = slot.querySelectorAll('.strip-img');
            for (var k = 0; k < all.length - 1; k++) slot.removeChild(all[k]);
          }, 1000);
        }, delay || 0);
      };
    }
    function tick() {
      if (together) {
        for (var i = 0; i < 3; i++) { swap(slots[i], photos[next % photos.length], i * 140); next++; }
      } else {
        swap(slots[turn], photos[next % photos.length], 0);
        next++;
        turn = (turn + 1) % 3;
      }
    }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    function start() { stop(); timer = setInterval(tick, seconds * 1000); }
    function setPlaying(on) {
      playing = on;
      if (on) start(); else stop();
      btn.innerHTML = on ? ICON.pause : ICON.play;
      btn.setAttribute('aria-label', on ? 'Pause photos' : 'Play photos');
    }
    btn.addEventListener('click', function () { setPlaying(!playing); });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else if (playing) start();
    });
    setPlaying(playing);
  }

  function highlights(list) {
    var box = $('#highlights');
    if (!box) return;
    if (!list.length) { hideSection(box); return; }
    list.forEach(function (h) {
      var card = el('article', 'highlight');
      var top = el('div', 'highlight-top');
      if (h.icon) top.appendChild(picture(h.icon, '', 'highlight-icon'));
      else top.appendChild(el('span', ''));
      if (h.kind) top.appendChild(el('span', 'highlight-kind', esc(h.kind)));
      card.appendChild(top);
      card.appendChild(el('h3', 'highlight-title', esc(h.title)));
      if (h.text) card.appendChild(el('p', 'highlight-text', fmt(h.text)));
      if (h.link) card.appendChild(button(h.button || 'Learn more', h.link, 'btn-outline'));
      box.appendChild(card);
    });
  }

  function news(list, shown) {
    var ul = $('#news');
    var more = $('#news-more');
    if (!ul) return;
    if (!list.length) { hideSection(ul); return; }
    list.forEach(function (n, i) {
      var li = el('li', 'news-item',
        '<span class="news-date">' + esc(n.date) + '</span>' +
        '<span class="news-text">' + fmt(n.text) + '</span>' +
        (n.link ? '<a class="news-link" ' + linkAttrs(n.link) + '>' + esc(n.linkLabel || 'Read more') + '</a>' : ''));
      if (i >= shown) li.hidden = true;
      ul.appendChild(li);
    });
    if (more && list.length > shown) {
      more.hidden = false;
      more.addEventListener('click', function () {
        each(ul.querySelectorAll('.news-item'), function (li) { li.hidden = false; });
        more.hidden = true;
      });
    }
  }

  /* ---------- RESEARCH and PRODUCTS: the grid that opens ---------- */
  function panelGrid(mount, items, opts) {
    if (!mount) return;
    items = (items || []).filter(Boolean);
    if (!items.length) { hideSection(mount); return; }

    var twoCols = mq('(min-width: 640px)');
    var cols = twoCols.matches ? 2 : 1;
    var openIdx = -1;
    var drawer = null;
    var rows = [];
    var drawerId = (mount.id || 'grid') + '-panel';
    var tiles = items.map(makeTile);

    function makeTile(it, i) {
      var b = el('button', 'tile');
      b.type = 'button';
      b.id = 'tile-' + (it.id || i);
      b.setAttribute('aria-expanded', 'false');
      var vid = youtubeId(it.youtube);
      var thumb = el('span', 'tile-media ratio');
      var src = it.image || (vid ? youtubeThumb(vid) : '');
      if (src) thumb.appendChild(picture(src, '', 'ratio-fill'));
      else thumb.appendChild(el('span', 'ratio-fill img-missing', 'Add an image or a YouTube link'));
      if (vid) thumb.appendChild(el('span', 'play-badge', ICON.play));
      b.appendChild(thumb);
      var row = el('span', 'tile-text-row');
      var text = el('span', 'tile-body');
      text.appendChild(el('span', 'tile-title', esc(it.title)));
      if (it.short) text.appendChild(el('span', 'tile-text', fmtPlain(it.short)));
      row.appendChild(text);
      row.appendChild(el('span', 'tile-chevron', ICON.chevron));
      b.appendChild(row);
      b.addEventListener('click', function () { toggle(i); });
      return b;
    }

    function build() {
      mount.innerHTML = '';
      rows = [];
      for (var i = 0; i < tiles.length; i += cols) {
        var row = el('div', 'panel-row');
        var rowTiles = el('div', 'panel-row-tiles');
        for (var j = i; j < Math.min(i + cols, tiles.length); j++) rowTiles.appendChild(tiles[j]);
        row.appendChild(rowTiles);
        mount.appendChild(row);
        rows.push(row);
      }
    }

    function mediaBox(it) {
      var box = el('div', 'media ratio');
      var vid = youtubeId(it.youtube);
      if (vid) box.appendChild(youtubeFrame(vid, it.title));
      else if (it.image) {
        var im = picture(it.image, it.imageAlt || it.title || '', 'ratio-fill');
        im.loading = 'eager';
        box.appendChild(im);
      } else box.appendChild(el('span', 'ratio-fill img-missing', 'Add an image or a YouTube link'));
      return box;
    }

    function closeButton(cls, label) {
      var c = el('button', cls, label || ICON.close);
      c.type = 'button';
      if (!label) c.setAttribute('aria-label', 'Close');
      c.addEventListener('click', function () { close(true, true); });
      return c;
    }

    function makeCard(i) {
      var it = items[i];
      var card = el('div', 'drawer-card drawer-card-' + opts.layout);
      var notch = el('span', 'drawer-notch');
      notch.setAttribute('aria-hidden', 'true');
      card.appendChild(notch);

      var head = el('div', 'drawer-head');
      head.appendChild(el('h3', 'drawer-title', esc(it.title)));
      head.appendChild(closeButton('icon-btn'));
      card.appendChild(head);

      var actions = el('div', 'drawer-actions');
      if (opts.layout === 'stacked') {
        // Products: big picture or video, the overview under it, then the buttons
        card.appendChild(mediaBox(it));
        var bodyBox = el('div', 'drawer-body');
        if (it.text) bodyBox.appendChild(el('div', 'prose', paragraphs(it.text)));
        if (it.more) actions.appendChild(button(it.moreLabel || 'Learn more', it.more, 'btn-primary'));
        (it.links || []).forEach(function (l) { actions.appendChild(button(l.label, l.url, 'btn-outline')); });
        actions.appendChild(closeButton('btn btn-quiet', 'Close'));
        bodyBox.appendChild(actions);
        card.appendChild(bodyBox);
      } else {
        // Research: picture or video on the left; title, text and buttons on the right
        card.appendChild(mediaBox(it));
        var info = el('div', 'drawer-info');
        if (it.text) info.appendChild(el('div', 'prose', paragraphs(it.text)));
        if (it.authors) info.appendChild(el('p', 'drawer-authors', '<span>Authors:</span> ' + fmt(it.authors)));
        (it.links || []).forEach(function (l, k) { actions.appendChild(button(l.label, l.url, k === 0 ? 'btn-primary' : 'btn-outline')); });
        if (actions.children.length) info.appendChild(actions);
        card.appendChild(info);
      }
      return card;
    }

    function makeDrawer(i) {
      var d = el('div', 'drawer');
      d.id = drawerId;
      d.setAttribute('role', 'region');
      d.setAttribute('aria-label', items[i].title || 'Details');
      var inner = el('div', 'drawer-inner');
      inner.appendChild(makeCard(i));
      d.appendChild(inner);
      return d;
    }

    function placeNotch(i, fromLeft) {
      if (!drawer) return;
      var card = drawer.querySelector('.drawer-card');
      var notch = card.querySelector('.drawer-notch');
      var cr = card.getBoundingClientRect();
      var tr = tiles[i].getBoundingClientRect();
      var left = tr.left - cr.left + tr.width / 2 - 9;
      if (fromLeft != null && DUR) {
        notch.style.transition = 'none';
        notch.style.left = fromLeft;
        void notch.offsetWidth;
        notch.style.transition = '';
      }
      notch.style.left = left + 'px';
    }

    function settleLater(d) {
      clearTimeout(d._t);
      d._t = setTimeout(function () {
        if (d.classList.contains('is-open')) { d.style.height = 'auto'; d.classList.add('is-settled'); }
      }, DUR + 40);
    }
    function expand(d, animate) {
      d.classList.remove('is-settled');
      if (!animate || !DUR) {
        d.style.height = 'auto';
        d.classList.add('is-open', 'is-settled');
        return;
      }
      d.style.height = '0px';
      void d.offsetHeight;
      d.classList.add('is-open');
      d.style.height = d.scrollHeight + 'px';
      settleLater(d);
    }
    function collapse(d, animate) {
      clearTimeout(d._t);
      d.classList.remove('is-settled');
      if (!animate || !DUR) { removeNode(d); return; }
      d.style.height = d.offsetHeight + 'px';
      void d.offsetHeight;
      d.classList.remove('is-open');
      d.style.height = '0px';
      d._t = setTimeout(function () { removeNode(d); }, DUR + 40);
    }
    function removeNode(n) { if (n && n.parentNode) n.parentNode.removeChild(n); }

    function setTile(i, on) {
      var t = tiles[i];
      if (!t) return;
      t.setAttribute('aria-expanded', on ? 'true' : 'false');
      if (on) { t.classList.add('is-open'); t.setAttribute('aria-controls', drawerId); }
      else { t.classList.remove('is-open'); t.removeAttribute('aria-controls'); }
    }

    function swapContent(i) {
      var inner = drawer.querySelector('.drawer-inner');
      var oldCard = inner.querySelector('.drawer-card');
      var oldLeft = oldCard.querySelector('.drawer-notch').style.left;
      var h0 = drawer.offsetHeight;
      var card = makeCard(i);
      if (DUR) card.classList.add('is-entering');
      inner.replaceChild(card, oldCard);
      drawer.setAttribute('aria-label', items[i].title || 'Details');
      placeNotch(i, oldLeft);
      if (!DUR) return;
      drawer.classList.remove('is-settled');
      drawer.style.height = h0 + 'px';
      void drawer.offsetHeight;
      drawer.style.height = drawer.scrollHeight + 'px';
      settleLater(drawer);
      requestAnimationFrame(function () { requestAnimationFrame(function () { card.classList.remove('is-entering'); }); });
    }

    function reveal(i) {
      if (!drawer) return;
      var top = drawer.getBoundingClientRect().top;
      var bottom = top + drawer.scrollHeight;
      var overflow = bottom - window.innerHeight + 16;
      if (overflow <= 0) return;
      var room = tiles[i].getBoundingClientRect().top - topOffset() - 12;
      scrollByY(Math.min(overflow, Math.max(0, room)));
    }

    function open(i, how) {
      how = how || {};
      var animate = how.animate !== false;
      if (i === openIdx) return;
      var newRow = Math.floor(i / cols);

      if (drawer && Math.floor(openIdx / cols) === newRow) {
        // Same row: keep the panel open and change what's in it
        setTile(openIdx, false);
        setTile(i, true);
        openIdx = i;
        swapContent(i);
        updateHash(i);
        return;
      }

      if (drawer) {
        var oldRow = Math.floor(openIdx / cols);
        setTile(openIdx, false);
        if (oldRow < newRow) {
          // The open panel is above: close it at once and keep the clicked tile where it is on screen
          var before = tiles[i].getBoundingClientRect().top;
          clearTimeout(drawer._t);
          removeNode(drawer);
          var after = tiles[i].getBoundingClientRect().top;
          if (after !== before) window.scrollBy(0, after - before);
        } else {
          collapse(drawer, animate);
        }
        drawer = null;
      }

      var row = rows[newRow];
      each(row.querySelectorAll('.drawer'), removeNode);
      drawer = makeDrawer(i);
      row.appendChild(drawer);
      setTile(i, true);
      openIdx = i;
      placeNotch(i);
      expand(drawer, animate);
      updateHash(i);
      if (how.scroll !== false) reveal(i);
    }

    function close(animate, returnFocus) {
      if (!drawer) return;
      var i = openIdx;
      setTile(i, false);
      collapse(drawer, animate);
      drawer = null;
      openIdx = -1;
      clearHash();
      if (returnFocus && tiles[i]) {
        try { tiles[i].focus({ preventScroll: true }); } catch (e) { tiles[i].focus(); }
      }
    }

    function toggle(i) {
      if (i === openIdx) close(true, false);
      else open(i);
    }

    // Keeps the address bar in step (research.html#project-one) so an open panel can be shared.
    // Some browsers refuse this for files opened from your computer; that's harmless.
    function updateHash(i) {
      var id = items[i].id;
      if (!id || !window.history || !history.replaceState) return;
      try { history.replaceState(null, '', '#' + encodeURIComponent(id)); } catch (e) {}
    }
    function clearHash() {
      if (!window.history || !history.replaceState || !location.hash) return;
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    }
    function openFromHash() {
      var id = decodeURIComponent((location.hash || '').slice(1));
      if (!id) return;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          open(i, { animate: false, scroll: false });
          var y = tiles[i].getBoundingClientRect().top + window.pageYOffset - topOffset() - 16;
          window.scrollTo(0, Math.max(0, y));
          return;
        }
      }
    }

    build();

    onMediaChange(twoCols, function () {
      var c = twoCols.matches ? 2 : 1;
      if (c === cols) return;
      var was = openIdx;
      if (drawer) { clearTimeout(drawer._t); removeNode(drawer); drawer = null; setTile(was, false); openIdx = -1; }
      cols = c;
      build();
      if (was > -1) open(was, { animate: false, scroll: false });
    });
    window.addEventListener('resize', debounce(function () { if (drawer) placeNotch(openIdx); }, 80));
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && drawer) close(true, true);
    });
    window.addEventListener('hashchange', openFromHash);
    openFromHash();
  }

  function papers(list) {
    var ol = $('#papers');
    if (!ol) return;
    if (!list || !list.length) { hideSection(ol); return; }
    list.forEach(function (p) {
      var li = el('li', 'paper');
      li.innerHTML = '<div class="paper-main">' +
        '<p class="paper-title">' + fmt(p.title) + '</p>' +
        (p.authors ? '<p class="paper-authors">' + fmt(p.authors) + '</p>' : '') +
        (p.venue ? '<p class="paper-venue">' + fmt(p.venue) + '</p>' : '') +
        '</div>';
      var links = el('div', 'paper-links');
      (p.links || []).forEach(function (l) { if (l && l.url) links.appendChild(button(l.label, l.url, 'btn-outline btn-small')); });
      if (links.children.length) li.appendChild(links);
      ol.appendChild(li);
    });
  }

  function research() {
    var R = need('RESEARCH', 'data/research.js');
    if (!R) return;
    setIntro(R.intro);
    panelGrid($('#projects'), R.projects, { layout: 'split' });
    papers(R.papers);
  }

  function products() {
    var P = need('PRODUCTS', 'data/products.js');
    if (!P) return;
    setIntro(P.intro);
    panelGrid($('#products'), P.items, { layout: 'stacked' });
  }

  /* ---------- TEACHING ---------- */
  function teaching() {
    var T = need('TEACHING', 'data/teaching.js');
    var box = $('#courses');
    if (!T || !box) return;
    setIntro(T.intro);
    (T.groups || []).forEach(function (g) {
      if (!g.courses || !g.courses.length) return;
      var sec = el('section', 'course-group');
      sec.appendChild(el('h2', 'section-title', esc(g.heading)));
      var ul = el('ul', 'courses');
      g.courses.forEach(function (c) {
        var meta = [c.code, c.term].filter(Boolean).map(esc).join(', ');
        var li = el('li', 'course', '<div class="course-main">' +
          (meta ? '<p class="course-meta">' + meta + '</p>' : '') +
          '<h3 class="course-title">' + esc(c.title) + '</h3>' +
          (c.text ? '<p class="course-text">' + fmt(c.text) + '</p>' : '') + '</div>');
        var links = el('div', 'course-links');
        (c.links || []).forEach(function (l) { if (l && l.url) links.appendChild(button(l.label, l.url, 'btn-outline btn-small')); });
        if (links.children.length) li.appendChild(links);
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      box.appendChild(sec);
    });
  }

  /* ---------- PEOPLE ---------- */
  function initials(name) {
    var parts = String(name || '').replace(/[\[\]()]/g, '').trim().split(/\s+/);
    var s = (parts[0] || '').charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : '');
    var e = el('span', 'person-photo person-initials', esc(s.toUpperCase()));
    e.setAttribute('aria-hidden', 'true');
    return e;
  }
  function person(m) {
    var a = el('article', 'person');
    if (m.photo) {
      var im = picture(m.photo, '', 'person-photo');
      im.onerror = function () { if (im.parentNode) im.parentNode.replaceChild(initials(m.name), im); };
      a.appendChild(im);
    } else {
      a.appendChild(initials(m.name));
    }
    var info = el('div', 'person-info');
    var name = m.link ? '<a ' + linkAttrs(m.link) + '>' + esc(m.name) + '</a>' : esc(m.name);
    info.appendChild(el('h4', 'person-name', name));
    if (m.role) info.appendChild(el('p', 'person-role', esc(m.role)));
    if (m.text) info.appendChild(el('p', 'person-text', fmt(m.text)));
    a.appendChild(info);
    return a;
  }
  function people() {
    var P = need('PEOPLE', 'data/people.js');
    var box = $('#people');
    if (!P || !box) return;
    setIntro(P.intro);
    (P.groups || []).forEach(function (g) {
      var subs = (g.subgroups || []).filter(function (s) { return s.people && s.people.length; });
      if (!subs.length) return;
      var sec = el('section', 'people-group');
      sec.appendChild(el('h2', 'people-heading', esc(g.heading)));
      subs.forEach(function (s) {
        var sub = el('div', 'people-sub');
        sub.appendChild(el('h3', 'people-subheading', esc(s.heading)));
        var grid = el('div', 'people-grid');
        s.people.forEach(function (m) { grid.appendChild(person(m)); });
        sub.appendChild(grid);
        sec.appendChild(sub);
      });
      box.appendChild(sec);
    });
  }

  /* ---------- videos written straight into a page (product details) ---------- */
  function embeds() {
    each(document.querySelectorAll('[data-youtube]'), function (box) {
      var id = youtubeId(box.getAttribute('data-youtube'));
      if (!id) return;
      box.classList.add('ratio');
      var f = youtubeFrame(id, box.getAttribute('data-title') || document.title);
      f.setAttribute('loading', 'lazy');
      box.appendChild(f);
    });
  }

  /* ---------- start ---------- */
  if (!window.SITE) dataError('data/site.js');
  renderSidebar();
  renderFooter();
  embeds();
  var pages = { home: home, research: research, products: products, teaching: teaching, people: people };
  if (pages[PAGE]) pages[PAGE]();
})();
