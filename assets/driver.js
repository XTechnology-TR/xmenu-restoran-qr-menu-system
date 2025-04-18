let O = {};
function z(e = {}) {
  O = {
    animate: !0,
    allowClose: !0,
    overlayOpacity: 0.7,
    smoothScroll: !1,
    disableActiveInteraction: !1,
    showProgress: !1,
    stagePadding: 10,
    stageRadius: 5,
    popoverOffset: 10,
    showButtons: ["next", "previous", "close"],
    disableButtons: [],
    overlayColor: "#000",
    ...e,
  };
}
function l(e) {
  return e ? O[e] : O;
}
function W(e, t, o, i) {
  return (e /= i / 2) < 1
    ? (o / 2) * e * e + t
    : (-o / 2) * (--e * (e - 2) - 1) + t;
}
function X(e) {
  const t =
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  return e
    .flatMap((o) => {
      const i = o.matches(t),
        n = Array.from(o.querySelectorAll(t));
      return [...(i ? [o] : []), ...n];
    })
    .filter((o) => getComputedStyle(o).pointerEvents !== "none" && se(o));
}
function Y(e) {
  if (!e || re(e)) return;
  const t = l("smoothScroll");
  e.scrollIntoView({
    behavior: !t || ie(e) ? "auto" : "smooth",
    inline: "center",
    block: "center",
  });
}
function ie(e) {
  if (!e || !e.parentElement) return;
  const t = e.parentElement;
  return t.scrollHeight > t.clientHeight;
}
function re(e) {
  const t = e.getBoundingClientRect();
  return (
    t.top >= 0 &&
    t.left >= 0 &&
    t.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    t.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function se(e) {
  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}
let N = {};
function b(e, t) {
  N[e] = t;
}
function d(e) {
  return e ? N[e] : N;
}
function q() {
  N = {};
}
let R = {};
function I(e, t) {
  R[e] = t;
}
function k(e) {
  var t;
  (t = R[e]) == null || t.call(R);
}
function le() {
  R = {};
}
function de(e, t, o, i) {
  let n = d("__activeStagePosition");
  const a = n || o.getBoundingClientRect(),
    h = i.getBoundingClientRect(),
    m = W(e, a.x, h.x - a.x, t),
    s = W(e, a.y, h.y - a.y, t),
    u = W(e, a.width, h.width - a.width, t),
    r = W(e, a.height, h.height - a.height, t);
  (n = { x: m, y: s, width: u, height: r }),
    G(n),
    b("__activeStagePosition", n);
}
function Z(e) {
  if (!e) return;
  const t = e.getBoundingClientRect(),
    o = { x: t.x, y: t.y, width: t.width, height: t.height };
  b("__activeStagePosition", o), G(o);
}
function ae() {
  const e = d("__activeStagePosition"),
    t = d("__overlaySvg");
  if (!e) return;
  if (!t) {
    console.warn("No stage svg found.");
    return;
  }
  const o = window.innerWidth,
    i = window.innerHeight;
  t.setAttribute("viewBox", `0 0 ${o} ${i}`);
}
function pe(e) {
  const t = ce(e);
  document.body.appendChild(t),
    U(t, (o) => {
      o.target.tagName === "path" && k("overlayClick");
    }),
    b("__overlaySvg", t);
}
function G(e) {
  const t = d("__overlaySvg");
  if (!t) {
    pe(e);
    return;
  }
  const o = t.firstElementChild;
  if ((o == null ? void 0 : o.tagName) !== "path")
    throw new Error("no path element found in stage svg");
  o.setAttribute("d", J(e));
}
function ce(e) {
  const t = window.innerWidth,
    o = window.innerHeight,
    i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  i.classList.add("driver-overlay", "driver-overlay-animated"),
    i.setAttribute("viewBox", `0 0 ${t} ${o}`),
    i.setAttribute("xmlSpace", "preserve"),
    i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"),
    i.setAttribute("version", "1.1"),
    i.setAttribute("preserveAspectRatio", "xMinYMin slice"),
    (i.style.fillRule = "evenodd"),
    (i.style.clipRule = "evenodd"),
    (i.style.strokeLinejoin = "round"),
    (i.style.strokeMiterlimit = "2"),
    (i.style.zIndex = "10000"),
    (i.style.position = "fixed"),
    (i.style.top = "0"),
    (i.style.left = "0"),
    (i.style.width = "100%"),
    (i.style.height = "100%");
  const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return (
    n.setAttribute("d", J(e)),
    (n.style.fill = l("overlayColor") || "rgb(0,0,0)"),
    (n.style.opacity = `${l("overlayOpacity")}`),
    (n.style.pointerEvents = "auto"),
    (n.style.cursor = "auto"),
    i.appendChild(n),
    i
  );
}
function J(e) {
  const t = window.innerWidth,
    o = window.innerHeight,
    i = l("stagePadding") || 0,
    n = l("stageRadius") || 0,
    a = e.width + i * 2,
    h = e.height + i * 2,
    m = Math.min(n, a / 2, h / 2),
    s = Math.floor(Math.max(m, 0)),
    u = e.x - i + s,
    r = e.y - i,
    p = a - s * 2,
    c = h - s * 2;
  return `M${t},0L0,0L0,${o}L${t},${o}L${t},0Z
    M${u},${r} h${p} a${s},${s} 0 0 1 ${s},${s} v${c} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${c} a${s},${s} 0 0 1 ${s},-${s} z`;
}
function ve() {
  const e = d("__overlaySvg");
  e && e.remove();
}
function ue() {
  const e = document.getElementById("driver-dummy-element");
  if (e) return e;
  let t = document.createElement("div");
  return (
    (t.id = "driver-dummy-element"),
    (t.style.width = "0"),
    (t.style.height = "0"),
    (t.style.pointerEvents = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.top = "50%"),
    (t.style.left = "50%"),
    document.body.appendChild(t),
    t
  );
}
function F(e) {
  const { element: t } = e;
  let o = typeof t == "string" ? document.querySelector(t) : t;
  o || (o = ue()), me(o, e);
}
function he() {
  const e = d("__activeElement"),
    t = d("__activeStep");
  e && (Z(e), ae(), te(e, t));
}
function me(e, t) {
  const o = Date.now(),
    i = d("__activeStep"),
    n = d("__activeElement") || e,
    a = !n || n === e,
    h = e.id === "driver-dummy-element",
    m = n.id === "driver-dummy-element",
    s = l("animate"),
    u = t.onHighlightStarted || l("onHighlightStarted"),
    r = (t == null ? void 0 : t.onHighlighted) || l("onHighlighted"),
    p = (i == null ? void 0 : i.onDeselected) || l("onDeselected"),
    c = l(),
    w = d();
  !a && p && p(m ? void 0 : n, i, { config: c, state: w }),
    u && u(h ? void 0 : e, t, { config: c, state: w });
  const g = !a && s;
  let f = !1;
  xe(),
    b("previousStep", i),
    b("previousElement", n),
    b("activeStep", t),
    b("activeElement", e);
  const v = () => {
    if (d("__transitionCallback") !== v) return;
    const y = Date.now() - o,
      E = 400 - y <= 400 / 2;
    t.popover && E && !f && g && (K(e, t), (f = !0)),
      l("animate") && y < 400
        ? de(y, 400, n, e)
        : (Z(e),
          r && r(h ? void 0 : e, t, { config: l(), state: d() }),
          b("__transitionCallback", void 0),
          b("__previousStep", i),
          b("__previousElement", n),
          b("__activeStep", t),
          b("__activeElement", e)),
      window.requestAnimationFrame(v);
  };
  b("__transitionCallback", v),
    window.requestAnimationFrame(v),
    Y(e),
    !g && t.popover && K(e, t),
    n.classList.remove("driver-active-element", "driver-no-interaction"),
    n.removeAttribute("aria-haspopup"),
    n.removeAttribute("aria-expanded"),
    n.removeAttribute("aria-controls"),
    l("disableActiveInteraction") && e.classList.add("driver-no-interaction"),
    e.classList.add("driver-active-element"),
    e.setAttribute("aria-haspopup", "dialog"),
    e.setAttribute("aria-expanded", "true"),
    e.setAttribute("aria-controls", "driver-popover-content");
}
function we() {
  var e;
  (e = document.getElementById("driver-dummy-element")) == null || e.remove(),
    document.querySelectorAll(".driver-active-element").forEach((t) => {
      t.classList.remove("driver-active-element", "driver-no-interaction"),
        t.removeAttribute("aria-haspopup"),
        t.removeAttribute("aria-expanded"),
        t.removeAttribute("aria-controls");
    });
}
function B() {
  const e = d("__resizeTimeout");
  e && window.cancelAnimationFrame(e),
    b("__resizeTimeout", window.requestAnimationFrame(he));
}
function fe(e) {
  var t;
  if (!d("isInitialized") || !(e.key === "Tab" || e.keyCode === 9)) return;
  const o = d("__activeElement"),
    i = (t = d("popover")) == null ? void 0 : t.wrapper,
    n = X([...(i ? [i] : []), ...(o ? [o] : [])]),
    a = n[0],
    h = n[n.length - 1];
  if ((e.preventDefault(), e.shiftKey)) {
    const m = n[n.indexOf(document.activeElement) - 1] || h;
    m == null || m.focus();
  } else {
    const m = n[n.indexOf(document.activeElement) + 1] || a;
    m == null || m.focus();
  }
}
function Q(e) {
  var t;
  ((t = l("allowKeyboardControl")) == null || t) &&
    (e.key === "Escape"
      ? k("escapePress")
      : e.key === "ArrowRight"
      ? k("arrowRightPress")
      : e.key === "ArrowLeft" && k("arrowLeftPress"));
}
function U(e, t, o) {
  const i = (n, a) => {
    const h = n.target;
    e.contains(h) &&
      ((!o || o(h)) &&
        (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation()),
      a == null || a(n));
  };
  document.addEventListener("pointerdown", i, !0),
    document.addEventListener("mousedown", i, !0),
    document.addEventListener("pointerup", i, !0),
    document.addEventListener("mouseup", i, !0),
    document.addEventListener(
      "click",
      (n) => {
        i(n, t);
      },
      !0
    );
}
function ge() {
  window.addEventListener("keyup", Q, !1),
    window.addEventListener("keydown", fe, !1),
    window.addEventListener("resize", B),
    window.addEventListener("scroll", B);
}
function ye() {
  window.removeEventListener("keyup", Q),
    window.removeEventListener("resize", B),
    window.removeEventListener("scroll", B);
}
function xe() {
  const e = d("popover");
  e && (e.wrapper.style.display = "none");
}
function K(e, t) {
  var o, i;
  let n = d("popover");
  n && document.body.removeChild(n.wrapper),
    (n = Ce()),
    document.body.appendChild(n.wrapper);
  const {
    title: a,
    description: h,
    showButtons: m,
    disableButtons: s,
    showProgress: u,
    nextBtnText: r = l("nextBtnText") || "Next &rarr;",
    prevBtnText: p = l("prevBtnText") || "&larr; Previous",
    progressText: c = l("progressText") || "{current} of {total}",
  } = t.popover || {};
  (n.nextButton.innerHTML = r),
    (n.previousButton.innerHTML = p),
    (n.progress.innerHTML = c),
    a
      ? ((n.title.innerHTML = a), (n.title.style.display = "block"))
      : (n.title.style.display = "none"),
    h
      ? ((n.description.innerHTML = h), (n.description.style.display = "block"))
      : (n.description.style.display = "none");
  const w = m || l("showButtons"),
    g = u || l("showProgress") || !1,
    f =
      (w == null ? void 0 : w.includes("next")) ||
      (w == null ? void 0 : w.includes("previous")) ||
      g;
  (n.closeButton.style.display = w.includes("close") ? "block" : "none"),
    f
      ? ((n.footer.style.display = "flex"),
        (n.progress.style.display = g ? "block" : "none"),
        (n.nextButton.style.display = w.includes("next") ? "block" : "none"),
        (n.previousButton.style.display = w.includes("previous")
          ? "block"
          : "none"))
      : (n.footer.style.display = "none");
  const v = s || l("disableButtons") || [];
  v != null &&
    v.includes("next") &&
    ((n.nextButton.disabled = !0),
    n.nextButton.classList.add("driver-popover-btn-disabled")),
    v != null &&
      v.includes("previous") &&
      ((n.previousButton.disabled = !0),
      n.previousButton.classList.add("driver-popover-btn-disabled")),
    v != null &&
      v.includes("close") &&
      ((n.closeButton.disabled = !0),
      n.closeButton.classList.add("driver-popover-btn-disabled"));
  const y = n.wrapper;
  (y.style.display = "block"),
    (y.style.left = ""),
    (y.style.top = ""),
    (y.style.bottom = ""),
    (y.style.right = ""),
    (y.id = "driver-popover-content"),
    y.setAttribute("role", "dialog"),
    y.setAttribute("aria-labelledby", "driver-popover-title"),
    y.setAttribute("aria-describedby", "driver-popover-description");
  const E = n.arrow;
  E.className = "driver-popover-arrow";
  const L =
    ((o = t.popover) == null ? void 0 : o.popoverClass) ||
    l("popoverClass") ||
    "";
  (y.className = `driver-popover ${L}`.trim()),
    U(
      n.wrapper,
      (P) => {
        var A, S, H;
        const $ = P.target,
          M =
            ((A = t.popover) == null ? void 0 : A.onNextClick) ||
            l("onNextClick"),
          D =
            ((S = t.popover) == null ? void 0 : S.onPrevClick) ||
            l("onPrevClick"),
          T =
            ((H = t.popover) == null ? void 0 : H.onCloseClick) ||
            l("onCloseClick");
        if ($.classList.contains("driver-popover-next-btn"))
          return M ? M(e, t, { config: l(), state: d() }) : k("nextClick");
        if ($.classList.contains("driver-popover-prev-btn"))
          return D ? D(e, t, { config: l(), state: d() }) : k("prevClick");
        if ($.classList.contains("driver-popover-close-btn"))
          return T ? T(e, t, { config: l(), state: d() }) : k("closeClick");
      },
      (P) =>
        !(n != null && n.description.contains(P)) &&
        !(n != null && n.title.contains(P)) &&
        typeof P.className == "string" &&
        P.className.includes("driver-popover")
    ),
    b("popover", n);
  const x =
    ((i = t.popover) == null ? void 0 : i.onPopoverRender) ||
    l("onPopoverRender");
  x && x(n, { config: l(), state: d() }), te(e, t), Y(y);
  const C = e.classList.contains("driver-dummy-element"),
    _ = X([y, ...(C ? [] : [e])]);
  _.length > 0 && _[0].focus();
}
function ee() {
  const e = d("popover");
  if (!(e != null && e.wrapper)) return;
  const t = e.wrapper.getBoundingClientRect(),
    o = l("stagePadding") || 0,
    i = l("popoverOffset") || 0;
  return {
    width: t.width + o + i,
    height: t.height + o + i,
    realWidth: t.width,
    realHeight: t.height,
  };
}
function j(e, t) {
  const {
    elementDimensions: o,
    popoverDimensions: i,
    popoverPadding: n,
    popoverArrowDimensions: a,
  } = t;
  return e === "start"
    ? Math.max(
        Math.min(o.top - n, window.innerHeight - i.realHeight - a.width),
        a.width
      )
    : e === "end"
    ? Math.max(
        Math.min(
          o.top - (i == null ? void 0 : i.realHeight) + o.height + n,
          window.innerHeight - (i == null ? void 0 : i.realHeight) - a.width
        ),
        a.width
      )
    : e === "center"
    ? Math.max(
        Math.min(
          o.top + o.height / 2 - (i == null ? void 0 : i.realHeight) / 2,
          window.innerHeight - (i == null ? void 0 : i.realHeight) - a.width
        ),
        a.width
      )
    : 0;
}
function V(e, t) {
  const {
    elementDimensions: o,
    popoverDimensions: i,
    popoverPadding: n,
    popoverArrowDimensions: a,
  } = t;
  return e === "start"
    ? Math.max(
        Math.min(o.left - n, window.innerWidth - i.realWidth - a.width),
        a.width
      )
    : e === "end"
    ? Math.max(
        Math.min(
          o.left - (i == null ? void 0 : i.realWidth) + o.width + n,
          window.innerWidth - (i == null ? void 0 : i.realWidth) - a.width
        ),
        a.width
      )
    : e === "center"
    ? Math.max(
        Math.min(
          o.left + o.width / 2 - (i == null ? void 0 : i.realWidth) / 2,
          window.innerWidth - (i == null ? void 0 : i.realWidth) - a.width
        ),
        a.width
      )
    : 0;
}
function te(e, t) {
  const o = d("popover");
  if (!o) return;
  const { align: i = "start", side: n = "left" } =
      (t == null ? void 0 : t.popover) || {},
    a = i,
    h = e.id === "driver-dummy-element" ? "over" : n,
    m = l("stagePadding") || 0,
    s = ee(),
    u = o.arrow.getBoundingClientRect(),
    r = e.getBoundingClientRect(),
    p = r.top - s.height;
  let c = p >= 0;
  const w = window.innerHeight - (r.bottom + s.height);
  let g = w >= 0;
  const f = r.left - s.width;
  let v = f >= 0;
  const y = window.innerWidth - (r.right + s.width);
  let E = y >= 0;
  const L = !c && !g && !v && !E;
  let x = h;
  if (
    (h === "top" && c
      ? (E = v = g = !1)
      : h === "bottom" && g
      ? (E = v = c = !1)
      : h === "left" && v
      ? (E = c = g = !1)
      : h === "right" && E && (v = c = g = !1),
    h === "over")
  ) {
    const C = window.innerWidth / 2 - s.realWidth / 2,
      _ = window.innerHeight / 2 - s.realHeight / 2;
    (o.wrapper.style.left = `${C}px`),
      (o.wrapper.style.right = "auto"),
      (o.wrapper.style.top = `${_}px`),
      (o.wrapper.style.bottom = "auto");
  } else if (L) {
    const C = window.innerWidth / 2 - (s == null ? void 0 : s.realWidth) / 2,
      _ = 10;
    (o.wrapper.style.left = `${C}px`),
      (o.wrapper.style.right = "auto"),
      (o.wrapper.style.bottom = `${_}px`),
      (o.wrapper.style.top = "auto");
  } else if (v) {
    const C = Math.min(
        f,
        window.innerWidth - (s == null ? void 0 : s.realWidth) - u.width
      ),
      _ = j(a, {
        elementDimensions: r,
        popoverDimensions: s,
        popoverPadding: m,
        popoverArrowDimensions: u,
      });
    (o.wrapper.style.left = `${C}px`),
      (o.wrapper.style.top = `${_}px`),
      (o.wrapper.style.bottom = "auto"),
      (o.wrapper.style.right = "auto"),
      (x = "left");
  } else if (E) {
    const C = Math.min(
        y,
        window.innerWidth - (s == null ? void 0 : s.realWidth) - u.width
      ),
      _ = j(a, {
        elementDimensions: r,
        popoverDimensions: s,
        popoverPadding: m,
        popoverArrowDimensions: u,
      });
    (o.wrapper.style.right = `${C}px`),
      (o.wrapper.style.top = `${_}px`),
      (o.wrapper.style.bottom = "auto"),
      (o.wrapper.style.left = "auto"),
      (x = "right");
  } else if (c) {
    const C = Math.min(p, window.innerHeight - s.realHeight - u.width);
    let _ = V(a, {
      elementDimensions: r,
      popoverDimensions: s,
      popoverPadding: m,
      popoverArrowDimensions: u,
    });
    (o.wrapper.style.top = `${C}px`),
      (o.wrapper.style.left = `${_}px`),
      (o.wrapper.style.bottom = "auto"),
      (o.wrapper.style.right = "auto"),
      (x = "top");
  } else if (g) {
    const C = Math.min(
      w,
      window.innerHeight - (s == null ? void 0 : s.realHeight) - u.width
    );
    let _ = V(a, {
      elementDimensions: r,
      popoverDimensions: s,
      popoverPadding: m,
      popoverArrowDimensions: u,
    });
    (o.wrapper.style.left = `${_}px`),
      (o.wrapper.style.bottom = `${C}px`),
      (o.wrapper.style.top = "auto"),
      (o.wrapper.style.right = "auto"),
      (x = "bottom");
  }
  L ? o.arrow.classList.add("driver-popover-arrow-none") : be(a, x, e);
}
function be(e, t, o) {
  const i = d("popover");
  if (!i) return;
  const n = o.getBoundingClientRect(),
    a = ee(),
    h = i.arrow,
    m = a.width,
    s = window.innerWidth,
    u = n.width,
    r = n.left,
    p = a.height,
    c = window.innerHeight,
    w = n.top,
    g = n.height;
  h.className = "driver-popover-arrow";
  let f = t,
    v = e;
  t === "top"
    ? (r + u <= 0
        ? ((f = "right"), (v = "end"))
        : r + u - m <= 0 && ((f = "top"), (v = "start")),
      r >= s
        ? ((f = "left"), (v = "end"))
        : r + m >= s && ((f = "top"), (v = "end")))
    : t === "bottom"
    ? (r + u <= 0
        ? ((f = "right"), (v = "start"))
        : r + u - m <= 0 && ((f = "bottom"), (v = "start")),
      r >= s
        ? ((f = "left"), (v = "start"))
        : r + m >= s && ((f = "bottom"), (v = "end")))
    : t === "left"
    ? (w + g <= 0
        ? ((f = "bottom"), (v = "end"))
        : w + g - p <= 0 && ((f = "left"), (v = "start")),
      w >= c
        ? ((f = "top"), (v = "end"))
        : w + p >= c && ((f = "left"), (v = "end")))
    : t === "right" &&
      (w + g <= 0
        ? ((f = "bottom"), (v = "start"))
        : w + g - p <= 0 && ((f = "right"), (v = "start")),
      w >= c
        ? ((f = "top"), (v = "start"))
        : w + p >= c && ((f = "right"), (v = "end"))),
    f
      ? (h.classList.add(`driver-popover-arrow-side-${f}`),
        h.classList.add(`driver-popover-arrow-align-${v}`))
      : h.classList.add("driver-popover-arrow-none");
}
function Ce() {
  const e = document.createElement("div");
  e.classList.add("driver-popover");
  const t = document.createElement("div");
  t.classList.add("driver-popover-arrow");
  const o = document.createElement("header");
  (o.id = "driver-popover-title"),
    o.classList.add("driver-popover-title"),
    (o.style.display = "none"),
    (o.innerText = "Popover Title");
  const i = document.createElement("div");
  (i.id = "driver-popover-description"),
    i.classList.add("driver-popover-description"),
    (i.style.display = "none"),
    (i.innerText = "Popover description is here");
  const n = document.createElement("button");
  (n.type = "button"),
    n.classList.add("driver-popover-close-btn"),
    n.setAttribute("aria-label", "Close"),
    (n.innerHTML = "&times;");
  const a = document.createElement("footer");
  a.classList.add("driver-popover-footer");
  const h = document.createElement("span");
  h.classList.add("driver-popover-progress-text"), (h.innerText = "");
  const m = document.createElement("span");
  m.classList.add("driver-popover-navigation-btns");
  const s = document.createElement("button");
  (s.type = "button"),
    s.classList.add("driver-popover-prev-btn"),
    (s.innerHTML = "&larr; Previous");
  const u = document.createElement("button");
  return (
    (u.type = "button"),
    u.classList.add("driver-popover-next-btn"),
    (u.innerHTML = "Next &rarr;"),
    m.appendChild(s),
    m.appendChild(u),
    a.appendChild(h),
    a.appendChild(m),
    e.appendChild(n),
    e.appendChild(t),
    e.appendChild(o),
    e.appendChild(i),
    e.appendChild(a),
    {
      wrapper: e,
      arrow: t,
      title: o,
      description: i,
      footer: a,
      previousButton: s,
      nextButton: u,
      closeButton: n,
      footerButtons: m,
      progress: h,
    }
  );
}
function _e() {
  var e;
  const t = d("popover");
  t && ((e = t.wrapper.parentElement) == null || e.removeChild(t.wrapper));
}
function Ee(e = {}) {
  z(e);
  function t() {
    l("allowClose") && u();
  }
  function o() {
    const r = d("activeIndex"),
      p = l("steps") || [];
    if (typeof r > "u") return;
    const c = r + 1;
    p[c] ? s(c) : u();
  }
  function i() {
    const r = d("activeIndex"),
      p = l("steps") || [];
    if (typeof r > "u") return;
    const c = r - 1;
    p[c] ? s(c) : u();
  }
  function n(r) {
    (l("steps") || [])[r] ? s(r) : u();
  }
  function a() {
    var r;
    if (d("__transitionCallback")) return;
    const p = d("activeIndex"),
      c = d("__activeStep"),
      w = d("__activeElement");
    if (typeof p > "u" || typeof c > "u" || typeof d("activeIndex") > "u")
      return;
    const g =
      ((r = c.popover) == null ? void 0 : r.onPrevClick) || l("onPrevClick");
    if (g) return g(w, c, { config: l(), state: d() });
    i();
  }
  function h() {
    var r;
    if (d("__transitionCallback")) return;
    const p = d("activeIndex"),
      c = d("__activeStep"),
      w = d("__activeElement");
    if (typeof p > "u" || typeof c > "u") return;
    const g =
      ((r = c.popover) == null ? void 0 : r.onNextClick) || l("onNextClick");
    if (g) return g(w, c, { config: l(), state: d() });
    o();
  }
  function m() {
    d("isInitialized") ||
      (b("isInitialized", !0),
      document.body.classList.add(
        "driver-active",
        l("animate") ? "driver-fade" : "driver-simple"
      ),
      ge(),
      I("overlayClick", t),
      I("escapePress", t),
      I("arrowLeftPress", a),
      I("arrowRightPress", h));
  }
  function s(r = 0) {
    var p, c, w, g, f, v, y, E;
    const L = l("steps");
    if (!L) {
      console.error("No steps to drive through"), u();
      return;
    }
    if (!L[r]) {
      u();
      return;
    }
    b("__activeOnDestroyed", document.activeElement), b("activeIndex", r);
    const x = L[r],
      C = L[r + 1],
      _ = L[r - 1],
      P =
        ((p = x.popover) == null ? void 0 : p.doneBtnText) ||
        l("doneBtnText") ||
        "Done",
      A = l("allowClose"),
      S =
        typeof ((c = x.popover) == null ? void 0 : c.showProgress) < "u"
          ? (w = x.popover) == null
            ? void 0
            : w.showProgress
          : l("showProgress"),
      H = (
        ((g = x.popover) == null ? void 0 : g.progressText) ||
        l("progressText") ||
        "{{current}} of {{total}}"
      )
        .replace("{{current}}", `${r + 1}`)
        .replace("{{total}}", `${L.length}`),
      $ =
        ((f = x.popover) == null ? void 0 : f.showButtons) || l("showButtons"),
      M = ["next", "previous", ...(A ? ["close"] : [])].filter(
        (oe) => !($ != null && $.length) || $.includes(oe)
      ),
      D =
        ((v = x.popover) == null ? void 0 : v.onNextClick) || l("onNextClick"),
      T =
        ((y = x.popover) == null ? void 0 : y.onPrevClick) || l("onPrevClick"),
      ne =
        ((E = x.popover) == null ? void 0 : E.onCloseClick) ||
        l("onCloseClick");
    F({
      ...x,
      popover: {
        showButtons: M,
        nextBtnText: C ? void 0 : P,
        disableButtons: [...(_ ? [] : ["previous"])],
        showProgress: S,
        progressText: H,
        onNextClick:
          D ||
          (() => {
            C ? s(r + 1) : u();
          }),
        onPrevClick:
          T ||
          (() => {
            s(r - 1);
          }),
        onCloseClick:
          ne ||
          (() => {
            u();
          }),
        ...((x == null ? void 0 : x.popover) || {}),
      },
    });
  }
  function u(r = !0) {
    const p = d("__activeElement"),
      c = d("__activeStep"),
      w = d("__activeOnDestroyed"),
      g = l("onDestroyStarted");
    if (r && g) {
      const y = !p || (p == null ? void 0 : p.id) === "driver-dummy-element";
      g(y ? void 0 : p, c, { config: l(), state: d() });
      return;
    }
    const f = (c == null ? void 0 : c.onDeselected) || l("onDeselected"),
      v = l("onDestroyed");
    if (
      (document.body.classList.remove(
        "driver-active",
        "driver-fade",
        "driver-simple"
      ),
      ye(),
      _e(),
      we(),
      ve(),
      le(),
      q(),
      p && c)
    ) {
      const y = p.id === "driver-dummy-element";
      f && f(y ? void 0 : p, c, { config: l(), state: d() }),
        v && v(y ? void 0 : p, c, { config: l(), state: d() });
    }
    w && w.focus();
  }
  return {
    isActive: () => d("isInitialized") || !1,
    refresh: B,
    drive: (r = 0) => {
      m(), s(r);
    },
    setConfig: z,
    setSteps: (r) => {
      q(), z({ ...l(), steps: r });
    },
    getConfig: l,
    getState: d,
    getActiveIndex: () => d("activeIndex"),
    isFirstStep: () => d("activeIndex") === 0,
    isLastStep: () => {
      const r = l("steps") || [],
        p = d("activeIndex");
      return p !== void 0 && p === r.length - 1;
    },
    getActiveStep: () => d("activeStep"),
    getActiveElement: () => d("activeElement"),
    getPreviousElement: () => d("previousElement"),
    getPreviousStep: () => d("previousStep"),
    moveNext: o,
    movePrevious: i,
    moveTo: n,
    hasNextStep: () => {
      const r = l("steps") || [],
        p = d("activeIndex");
      return p !== void 0 && r[p + 1];
    },
    hasPreviousStep: () => {
      const r = l("steps") || [],
        p = d("activeIndex");
      return p !== void 0 && r[p - 1];
    },
    highlight: (r) => {
      m(),
        F({
          ...r,
          popover: r.popover
            ? {
                showButtons: [],
                showProgress: !1,
                progressText: "",
                ...r.popover,
              }
            : void 0,
        });
    },
    destroy: () => {
      u(!1);
    },
  };
}
window.driver = Ee;
