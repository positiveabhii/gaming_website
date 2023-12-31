(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(8328);
        },
      ]);
    },
    5149: function (e, t, a) {
      "use strict";
      var n = a(5893),
        s = a(5910),
        r = a(728),
        i = a.n(r);
      t.Z = (e) => {
        let { inView: t, direction: a, whichPage: r } = e,
          { width: l } = (0, s.um)();
        function c() {
          return "Home" === r
            ? ["bg-[#7f7f7f]", "bg-[#707070]", "bg-[#696969]"]
            : ["bg-[#525151]", "bg-[#4a4a4a]", "bg-[#434343]"];
        }
        return (0, n.jsx)("div", {
          className:
            "absolute z-10 inset-0 overflow-hidden w-[100%] h-[100%] mx-auto flex flex-col ".concat(
              "top" === a ? "justify-start" : "justify-end",
              " items-center"
            ),
          children: (0, n.jsx)("div", {
            style: {
              borderRadius: ""
                .concat("top" === a ? "0px 0px" : "", " ")
                .concat(
                  l > 1100
                    ? "500px 500px"
                    : l > 1e3
                    ? "450px 450px"
                    : l > 900
                    ? "450px 450px"
                    : l > 800
                    ? "400px 400px"
                    : l > 700
                    ? "350px 350px"
                    : l > 600
                    ? "350px 350px"
                    : l > 500
                    ? "250px 250px"
                    : "200px 200px",
                  " "
                )
                .concat("bottom" === a ? "0px 0px" : ""),
            },
            className: ""
              .concat(i().semicircle, " ")
              .concat(t ? i().semicircle2InView : "", " ")
              .concat(c()[0], " flex ")
              .concat(
                "top" === a ? "items-start" : "items-end",
                " justify-center"
              ),
            children: (0, n.jsx)("div", {
              style: {
                borderRadius: ""
                  .concat("top" === a ? "0px 0px" : "", " ")
                  .concat(
                    l > 1100
                      ? "350px 350px"
                      : l > 1e3
                      ? "300px 300px"
                      : l > 900
                      ? "300px 300px"
                      : l > 800
                      ? "250px 250px"
                      : l > 700
                      ? "300px 300px"
                      : "250px 250px",
                    " "
                  )
                  .concat("bottom" === a ? "0px 0px" : ""),
              },
              className: ""
                .concat(i().semicircle, " ")
                .concat(t ? i().semicircle1InView : "", " ")
                .concat(c()[1], " flex ")
                .concat(
                  "top" === a ? "items-start" : "items-end",
                  " justify-center"
                ),
              children: (0, n.jsx)("div", {
                style: {
                  borderRadius: ""
                    .concat("top" === a ? "0px 0px" : "", " ")
                    .concat(
                      l > 1100
                        ? "200px 200px"
                        : l > 1e3
                        ? "150px 150px"
                        : "100px 100px",
                      " "
                    )
                    .concat("bottom" === a ? "0px 0px" : ""),
                },
                className: ""
                  .concat(i().semicircle, " ")
                  .concat(c()[2], " relative"),
              }),
            }),
          }),
        });
      };
    },
    5164: function (e, t, a) {
      "use strict";
      var n = a(5893),
        s = a(5910);
      t.Z = (e) => {
        let { text: t, id: a, isAbsolute: r } = e,
          { width: i } = (0, s.um)();
        return (0, n.jsxs)("div", {
          id: a || "",
          className: "".concat(
            r ? "absolute left-0 right-0 top-[40px]" : "",
            "  mx-auto flex items-center justify-center gap-1 sm:gap-2"
          ),
          children: [
            (0, n.jsx)("div", {
              className: "h-[3px] ".concat(
                i <= 405 ? "w-[50px]" : "w-[75px]",
                " sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#d9d9d9] rounded-md"
              ),
            }),
            (0, n.jsx)("img", {
              alt: "tile",
              src: "/tile.png",
              width: i <= 523 ? 25 : i <= 768 ? 35 : 40,
              height: i <= 523 ? 25 : i <= 768 ? 35 : 40,
            }),
            (0, n.jsx)("h1", {
              style: { textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)" },
              className: "text-[#F2F2F2] font-semibold ".concat(
                i <= 405 ? "text-[15px]" : "text-[20px]",
                " sm:text-[25px] md:text-[30px] rajdhani xl:text-[40px] leading-[137.5%]"
              ),
              children: t,
            }),
            (0, n.jsx)("img", {
              alt: "tile",
              src: "/tile.png",
              width: i <= 523 ? 25 : i <= 768 ? 35 : 40,
              height: i <= 523 ? 25 : i <= 768 ? 35 : 40,
            }),
            (0, n.jsx)("div", {
              className: "h-[3px] ".concat(
                i <= 405 ? "w-[50px]" : "w-[75px]",
                " sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#d9d9d9] rounded-md"
              ),
            }),
          ],
        });
      };
    },
    9752: function (e, t, a) {
      "use strict";
      a.d(t, {
        zv: function () {
          return o;
        },
        _Z: function () {
          return u;
        },
        Lg: function () {
          return p;
        },
        cF: function () {
          return d;
        },
        N1: function () {
          return l;
        },
        zQ: function () {
          return m;
        },
        qt: function () {
          return c;
        },
      });
      var n = a(3977),
        s = a(9828);
      let r = (0, n.ZF)({
          apiKey: "AIzaSyC4C3Dx40esUywEx4enFaQfn6y_uIJDdO0",
          authDomain: "platformplayventure.firebaseapp.com",
          projectId: "platformplayventure",
          storageBucket: "platformplayventure.appspot.com",
          messagingSenderId: "348884347737",
          appId: "1:348884347737:web:172caebf28f1f452d87a48",
          measurementId: "G-MVR3TW7D9D",
        }),
        i = (0, s.ad)(r),
        l = async (e, t) => {
          try {
            let a = (0, s.hJ)(i, "OtherContent"),
              n = (0, s.IO)(
                a,
                (0, s.Xo)("title"),
                (0, s.ar)("type", "==", "E-Books"),
                (0, s.TQ)(e),
                (0, s.b9)(t)
              ),
              r = await (0, s.PL)(n),
              l = [];
            return (
              r.forEach((e) => {
                l.push({ ...e.data() });
              }),
              { data: l, lastDoc: r.docs[r.docs.length - 1] }
            );
          } catch (e) {
            return (
              console.error(
                "Error fetching business from Firestore: ",
                e.message
              ),
              null
            );
          }
        },
        c = async (e, t) => {
          try {
            let a = (0, s.hJ)(i, "OtherContent"),
              n = (0, s.IO)(
                a,
                (0, s.Xo)("title"),
                (0, s.ar)("type", "==", "White Papers"),
                (0, s.TQ)(e),
                (0, s.b9)(t)
              ),
              r = await (0, s.PL)(n),
              l = [];
            return (
              r.forEach((e) => {
                l.push({ ...e.data() });
              }),
              { data: l, lastDoc: r.docs[r.docs.length - 1] }
            );
          } catch (e) {
            return (
              console.error(
                "Error fetching business from Firestore: ",
                e.message
              ),
              null
            );
          }
        };
      async function o(e) {
        try {
          let t = (0, s.JU)((0, s.hJ)(i, "blog"), e),
            a = await (0, s.QT)(t);
          if (a.exists()) return a.data();
          return console.log("No such document!"), "no-doc";
        } catch (e) {
          return console.error("Error getting blog document:", e), null;
        }
      }
      let u = async (e, t) => {
          try {
            let a = (0, s.hJ)(i, "blog"),
              n = (0, s.IO)(a, (0, s.Xo)("id"), (0, s.TQ)(e), (0, s.b9)(t)),
              r = await (0, s.PL)(n),
              l = [];
            return (
              r.forEach((e) => {
                l.push({ ...e.data() });
              }),
              { data: l, lastDoc: r.docs[r.docs.length - 1] }
            );
          } catch (e) {
            return (
              console.error(
                "Error fetching business from Firestore: ",
                e.message
              ),
              null
            );
          }
        },
        d = async (e, t) => {
          try {
            let a = (0, s.hJ)(i, "CaseStudies"),
              n = (0, s.IO)(a, (0, s.Xo)("id"), (0, s.TQ)(e), (0, s.b9)(t)),
              r = await (0, s.PL)(n),
              l = [];
            return (
              r.forEach((e) => {
                l.push({ ...e.data() });
              }),
              { data: l, lastDoc: r.docs[r.docs.length - 1] || null }
            );
          } catch (e) {
            return (
              console.error(
                "Error fetching business from Firestore: ",
                e.message
              ),
              null
            );
          }
        };
      async function p(e) {
        try {
          let t = (0, s.JU)((0, s.hJ)(i, "CaseStudies"), e),
            a = await (0, s.QT)(t);
          if (a.exists()) return a.data();
          return console.log("No such document!"), "no-doc";
        } catch (e) {
          return console.error("Error getting blog document:", e), null;
        }
      }
      async function m(e) {
        let { id: t } = e;
        try {
          let e = (0, s.JU)((0, s.hJ)(i, "SEOFORPPV"), t),
            a = await (0, s.QT)(e);
          if (a.exists()) return a.data();
          return "no-doc";
        } catch (e) {
          return console.error("Error getting SEO document:", e), null;
        }
      }
    },
    8328: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return eh;
          },
        });
      var n = a(5893),
        s = a(6681),
        r = a(5411),
        i = a(5487);
      function l(e, t, a) {
        var n;
        if ("string" == typeof e) {
          let s = document;
          t &&
            ((0, i.k)(!!t.current, "Scope provided, but no element detected."),
            (s = t.current)),
            a
              ? ((null !== (n = a[e]) && void 0 !== n) ||
                  (a[e] = s.querySelectorAll(e)),
                (e = a[e]))
              : (e = s.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
      var c = a(6955),
        o = a(2074);
      let u = (0, a(4522).X)(() => void 0 !== window.ScrollTimeline);
      class d {
        constructor(e) {
          this.animations = e.filter(Boolean);
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let a = 0; a < this.animations.length; a++)
            this.animations[a][e] = t;
        }
        attachTimeline(e) {
          let t = this.animations.map((t) => {
            if (!u() || !t.attachTimeline)
              return (
                t.pause(),
                (function (e, t) {
                  let a;
                  let n = () => {
                    let { currentTime: n } = t,
                      s = (null === n ? 0 : n.value) / 100;
                    a !== s && e(s), (a = s);
                  };
                  return o.Wi.update(n, !0), () => (0, o.Pn)(n);
                })((e) => {
                  t.time = t.duration * e;
                }, e)
              );
            t.attachTimeline(e);
          });
          return () => {
            t.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        stop() {
          this.runAll("stop");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      var p = a(2711),
        m = a(5194),
        x = a(5794),
        h = a(4547),
        f = a(1059),
        g = a(5086),
        b = a(2284),
        y = a(6917),
        w = a(599),
        v = a(6615),
        j = a(3967),
        N = a(406);
      function S(e, t, a, n) {
        var s;
        return "number" == typeof t
          ? t
          : t.startsWith("-") || t.startsWith("+")
          ? Math.max(0, e + parseFloat(t))
          : "<" === t
          ? a
          : null !== (s = n.get(t)) && void 0 !== s
          ? s
          : e;
      }
      let _ = (e, t, a) => {
        let n = t - e;
        return ((((a - e) % n) + n) % n) + e;
      };
      var O = a(3338),
        k = a(10),
        E = a(22);
      function C(e, t) {
        return e.at !== t.at
          ? e.at - t.at
          : null === e.value
          ? 1
          : null === t.value
          ? -1
          : 0;
      }
      function F(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e);
      }
      function I(e, t) {
        return t[e] || (t[e] = []), t[e];
      }
      let A = (e) => "number" == typeof e,
        T = (e) => e.every(A);
      function M(e, t, a, n) {
        let s = l(e, n),
          r = s.length;
        (0, i.k)(!!r, "No valid element provided.");
        let o = [];
        for (let e = 0; e < r; e++) {
          let n = s[e];
          c.R.has(n) ||
            (function (e) {
              let t = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                a = (0, m.v)(e)
                  ? new x.e(t, { enableHardwareAcceleration: !1 })
                  : new h.W(t, { enableHardwareAcceleration: !0 });
              a.mount(e), c.R.set(e, a);
            })(n);
          let i = c.R.get(n),
            l = { ...a };
          "function" == typeof l.delay && (l.delay = l.delay(e, r)),
            o.push(...(0, p.w)(i, { ...t, transition: l }, {}));
        }
        return new d(o);
      }
      let z = (e) => Array.isArray(e) && Array.isArray(e[0]),
        R = (e) =>
          function (t, a, n) {
            let s;
            return (
              (s = z(t)
                ? (function (e, t, a) {
                    let n = [];
                    return (
                      (function (
                        e,
                        { defaultTransition: t = {}, ...a } = {},
                        n
                      ) {
                        let s = t.duration || 0.3,
                          r = new Map(),
                          i = new Map(),
                          c = {},
                          o = new Map(),
                          u = 0,
                          d = 0,
                          p = 0;
                        for (let a = 0; a < e.length; a++) {
                          let r = e[a];
                          if ("string" == typeof r) {
                            o.set(r, d);
                            continue;
                          }
                          if (!Array.isArray(r)) {
                            o.set(r.name, S(d, r.at, u, o));
                            continue;
                          }
                          let [m, x, h = {}] = r;
                          void 0 !== h.at && (d = S(d, h.at, u, o));
                          let f = 0,
                            j = (e, a, n, r = 0, i = 0) => {
                              let l = Array.isArray(e) ? e : [e],
                                {
                                  delay: c = 0,
                                  times: o = (0, w.Y)(l),
                                  type: u = "keyframes",
                                  ...m
                                } = a,
                                { ease: x = t.ease || "easeOut", duration: h } =
                                  a,
                                j = "function" == typeof c ? c(r, i) : c,
                                N = l.length;
                              if (N <= 2 && "spring" === u) {
                                let e = 100;
                                2 === N && T(l) && (e = Math.abs(l[1] - l[0]));
                                let t = { ...m };
                                void 0 !== h && (t.duration = (0, y.w)(h));
                                let a = (function (e, t = 100) {
                                  let a = (0, g.S)({ keyframes: [0, t], ...e }),
                                    n = Math.min((0, b.i)(a), b.E);
                                  return {
                                    type: "keyframes",
                                    ease: (e) => a.next(n * e).value / t,
                                    duration: (0, y.X)(n),
                                  };
                                })(t, e);
                                (x = a.ease), (h = a.duration);
                              }
                              null != h || (h = s);
                              let S = d + j,
                                C = S + h;
                              1 === o.length && 0 === o[0] && (o[1] = 1);
                              let F = o.length - l.length;
                              F > 0 && (0, v.c)(o, F),
                                1 === l.length && l.unshift(null),
                                (function (e, t, a, n, s, r) {
                                  !(function (e, t, a) {
                                    for (let n = 0; n < e.length; n++) {
                                      let s = e[n];
                                      s.at > t &&
                                        s.at < a &&
                                        ((0, k.cl)(e, s), n--);
                                    }
                                  })(e, s, r);
                                  for (let l = 0; l < t.length; l++) {
                                    var i;
                                    e.push({
                                      value: t[l],
                                      at: (0, E.C)(s, r, n[l]),
                                      easing:
                                        ((i = l),
                                        (0, O.N)(a) ? a[_(0, a.length, i)] : a),
                                    });
                                  }
                                })(n, l, x, o, S, C),
                                (f = Math.max(j + h, f)),
                                (p = Math.max(C, p));
                            };
                          if ((0, N.i)(m)) j(x, h, I("default", F(m, i)));
                          else {
                            let e = l(m, n, c),
                              t = e.length;
                            for (let a = 0; a < t; a++) {
                              let n = F(e[a], i);
                              for (let e in x)
                                j(
                                  x[e],
                                  h[e] ? { ...h, ...h[e] } : { ...h },
                                  I(e, n),
                                  a,
                                  t
                                );
                            }
                            (u = d), (d += f);
                          }
                        }
                        return (
                          i.forEach((e, n) => {
                            for (let s in e) {
                              let i = e[s];
                              i.sort(C);
                              let l = [],
                                c = [],
                                o = [];
                              for (let e = 0; e < i.length; e++) {
                                let { at: t, value: a, easing: n } = i[e];
                                l.push(a),
                                  c.push((0, j.Y)(0, p, t)),
                                  o.push(n || "easeOut");
                              }
                              0 !== c[0] &&
                                (c.unshift(0),
                                l.unshift(l[0]),
                                o.unshift("easeInOut")),
                                1 !== c[c.length - 1] &&
                                  (c.push(1), l.push(null)),
                                r.has(n) ||
                                  r.set(n, { keyframes: {}, transition: {} });
                              let u = r.get(n);
                              (u.keyframes[s] = l),
                                (u.transition[s] = {
                                  ...t,
                                  duration: p,
                                  ease: o,
                                  times: c,
                                  ...a,
                                });
                            }
                          }),
                          r
                        );
                      })(e, t, a).forEach(
                        ({ keyframes: e, transition: t }, a) => {
                          let s;
                          (s = (0, N.i)(a)
                            ? (0, f.D)(a, e.default, t.default)
                            : M(a, e, t)),
                            n.push(s);
                        }
                      ),
                      new d(n)
                    );
                  })(t, a, e)
                : "object" != typeof a || Array.isArray(a)
                ? (0, f.D)(t, a, n)
                : M(t, a, n, e)),
              e && e.animations.push(s),
              s
            );
          };
      function D() {
        let e = (0, s.h)(() => ({ current: null, animations: [] })),
          t = (0, s.h)(() => R(e));
        return (
          (0, r.z)(() => {
            e.animations.forEach((e) => e.stop());
          }),
          [e, t]
        );
      }
      R();
      var P = a(2073),
        L = a(7294),
        U = (e) => {
          let { ind: t, isReverse: a, letter: s } = e,
            [r, i] = D(),
            l = async () => {
              a
                ? await i(
                    r.current,
                    { opacity: 0 },
                    { delay: 0.2 + (11 - t) / 10 }
                  )
                : await i(r.current, { opacity: 0 }, { delay: 0.2 + t / 10 });
            };
          return (
            (0, L.useEffect)(() => {
              (async () => {
                await l();
              })();
            }, []),
            (0, n.jsx)(
              P.E.span,
              { ref: r, initial: { opacity: 1 }, children: s },
              t
            )
          );
        },
        B = a(5910),
        V = (e) => {
          let {
              delay: t,
              alt: a,
              src: s,
              bottom: r,
              left: i,
              className: l,
            } = e,
            [c, o] = D(),
            u = async () => {
              await o(c.current, { bottom: "1000px", left: i, opacity: 0 }),
                await o(
                  c.current,
                  { bottom: r, left: i, opacity: 1 },
                  {
                    duration: 2,
                    delay: t,
                    type: "spring",
                    stiffness: 40,
                    damping: 10,
                  }
                ),
                await o(
                  c.current,
                  { opacity: 0, bottom: "-400px" },
                  { delay: 6 - t, duration: 1 }
                );
            },
            d = (0, L.useRef)(),
            p = () => {
              d.current = setInterval(() => {
                u();
              }, 9e3);
            };
          return (
            (0, L.useEffect)(
              () => (u(), p(), () => d.current && clearInterval(d.current)),
              []
            ),
            (0, n.jsx)(P.E.img, {
              ref: c,
              className: "absolute ".concat(l),
              initial: { bottom: "1000px", left: i, opacity: 1 },
              width: 25,
              height: 25,
              alt: a,
              src: s,
            })
          );
        },
        J = () => {
          let { width: e } = (0, B.um)();
          return (0, n.jsx)("div", {
            className: "absolute w-[75px] right-0 "
              .concat(e > 800 ? "top-[35px]" : "top-[100px]", "  h-[75px] ")
              .concat(e < 800 ? "block" : "hidden"),
            children: [
              { delay: 0, bottom: "0px", left: "0px", className: "z-30" },
              { delay: 1, bottom: "6px", left: "13px", className: "z-20" },
              { delay: 2, bottom: "12px", left: "26px", className: "z-10" },
              { delay: 3, bottom: "18px", left: "13px", className: "z-40" },
              { delay: 4, bottom: "24px", left: "26px", className: "z-20" },
              { delay: 5, bottom: "36px", left: "26px", className: "z-20" },
            ].map((e, t) =>
              (0, n.jsx)(
                V,
                {
                  delay: e.delay,
                  alt: "bigTile",
                  src: "/bigTile.png",
                  bottom: e.bottom,
                  left: e.left,
                  className: "".concat(e.className),
                },
                t
              )
            ),
          });
        },
        Q = (e) => {
          let { ind: t, isReverse: a, letter: s } = e,
            [r, i] = D(),
            l = async () => {
              a
                ? await i(
                    r.current,
                    { opacity: 0 },
                    { delay: 0.2 + (11 - t) / 10 }
                  )
                : await i(r.current, { opacity: 0 }, { delay: 0.2 + t / 10 });
            };
          return (
            (0, L.useEffect)(() => {
              (async () => {
                await l();
              })();
            }, []),
            (0, n.jsx)(
              P.E.span,
              { ref: r, initial: { opacity: 1 }, children: s },
              t
            )
          );
        },
        q = (e) => {
          let {
              delay: t,
              alt: a,
              src: s,
              bottom: r,
              left: i,
              className: l,
            } = e,
            [c, o] = D(),
            u = async () => {
              await o(c.current, { bottom: "1000px", left: i, opacity: 0 }),
                await o(
                  c.current,
                  { bottom: r, left: i, opacity: 1 },
                  {
                    duration: 2,
                    delay: t,
                    type: "spring",
                    stiffness: 40,
                    damping: 10,
                  }
                ),
                await o(
                  c.current,
                  { opacity: 0, bottom: "-400px" },
                  { delay: 6 - t, duration: 1 }
                );
            },
            d = (0, L.useRef)(),
            p = () => {
              d.current = setInterval(async () => {
                await u();
              }, 9e3);
            };
          return (
            (0, L.useEffect)(
              () => (u(), p(), () => d.current && clearInterval(d.current)),
              []
            ),
            (0, n.jsx)(P.E.img, {
              ref: c,
              className: "absolute ".concat(l),
              initial: { bottom: "1000px", left: i, opacity: 1 },
              width: 150,
              height: 150,
              alt: a,
              src: s,
            })
          );
        },
        X = () => {
          let { width: e } = (0, B.um)();
          return (0, n.jsx)("div", {
            style: { height: "500px" },
            className: "w-[50%] relative mx-auto ".concat(
              e > 800 ? "block" : "hidden"
            ),
            children: [
              { delay: 0, bottom: "100px", left: "0px", className: "z-30" },
              { delay: 1, bottom: "137px", left: "74px", className: "z-20" },
              { delay: 2, bottom: "174px", left: "148px", className: "z-10" },
              { delay: 3, bottom: "210px", left: "74px", className: "z-40" },
              { delay: 4, bottom: "248px", left: "148px", className: "z-20" },
              { delay: 5, bottom: "318px", left: "148px", className: "z-20" },
            ].map((e, t) =>
              (0, n.jsx)(
                q,
                {
                  delay: e.delay,
                  alt: "bigTile",
                  src: "/bigTile.png",
                  bottom: e.bottom,
                  left: e.left,
                  className: "".concat(e.className),
                },
                t
              )
            ),
          });
        },
        G = (e) => {
          let { ind: t, isReverse: a, letter: s } = e,
            [r, i] = D(),
            l = async () => {
              a
                ? await i(
                    r.current,
                    { opacity: 0 },
                    { delay: 0.2 + (11 - t) / 10 }
                  )
                : await i(r.current, { opacity: 0 }, { delay: 0.2 + t / 10 });
            };
          return (
            (0, L.useEffect)(() => {
              (async () => {
                await l();
              })();
            }, []),
            (0, n.jsx)(
              P.E.span,
              { ref: r, initial: { opacity: 1 }, children: s },
              t
            )
          );
        },
        W = () => {
          let [e, t] = (0, L.useState)(0),
            [a, s] = (0, L.useState)(!1),
            r = (0, L.useRef)(),
            i = (0, L.useRef)(),
            l = (0, L.useRef)(),
            c = () => {
              i.current = setInterval(async () => {
                await d();
              }, 6400);
            },
            [o, u] = D(),
            d = async () => {
              await u(o.current, { x: 300 }, { duration: 3 }),
                await u(o.current, { scaleX: -1 }, { duration: 0.2 }),
                await u(o.current, { x: -300 }, { duration: 3 }),
                await u(o.current, { scaleX: 1 }, { duration: 0.2 });
            };
          (0, L.useEffect)(
            () => (
              (async () => {
                await d();
              })(),
              x(),
              c(),
              m(),
              () => {
                i.current && clearInterval(i.current),
                  l.current && clearInterval(l.current),
                  r.current && clearInterval(r.current);
              }
            ),
            []
          );
          let { width: p } = (0, B.um)(),
            m = () => {
              r.current = setInterval(() => {
                t((e) => (0 === e ? 1 : 1 === e ? 2 : 0));
              }, 3200);
            },
            x = () => {
              l.current = setInterval(() => {
                s((e) => !e);
              }, 9600);
            };
          return (0, n.jsxs)("section", {
            className:
              "max-w-[1300px] mx-auto flex items-center justify-center w-full",
            children: [
              (0, n.jsxs)("div", {
                className: ""
                  .concat(
                    p > 800 ? "w-[50%] justify-center" : "w-[90%] mt-28",
                    " relative "
                  )
                  .concat(
                    p > 906 ? "pl-10" : p > 460 ? "pl-5" : "pl-0",
                    " h-full flex flex-col"
                  ),
                children: [
                  (0, n.jsxs)("h1", {
                    style: { textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)" },
                    className:
                      "text-[#F2F2F2] relative rajdhani max-w-[420px] font-semibold ".concat(
                        p > 906
                          ? "text-[50px]"
                          : p > 460
                          ? "text-[45px]"
                          : "text-[40px]",
                        " leading-[137.5%]"
                      ),
                    children: [
                      (0, n.jsx)("span", {
                        children:
                          "Digital-first Growth & Transformation Consulting for",
                      }),
                      (0, n.jsx)(J, {}),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "relative flex items-center justify-center text-center max-w-[350px] overflow-hidden h-[100px]",
                    children: [
                      (0, n.jsx)("h1", {
                        style: {
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.91)",
                        },
                        className:
                          "text-[#FFB545] rajdhani absolute left-0 text-start mr-auto font-semibold mt-3 ".concat(
                            p > 906 ? "text-[50px]" : "text-[40px]",
                            " leading-[137.5%]"
                          ),
                        children:
                          1 === e
                            ? [
                                "E",
                                "N",
                                "T",
                                "E",
                                "R",
                                "P",
                                "R",
                                "I",
                                "S",
                                "E",
                                "S",
                              ].map((e, t) =>
                                (0, n.jsx)(
                                  U,
                                  { isReverse: !a, letter: e, ind: t },
                                  t
                                )
                              )
                            : 0 === e
                            ? ["S", "T", "A", "R", "T", "U", "P", "S"].map(
                                (e, t) =>
                                  (0, n.jsx)(
                                    Q,
                                    { isReverse: a, letter: e, ind: t },
                                    t
                                  )
                              )
                            : [
                                "I",
                                "N",
                                "N",
                                "O",
                                "V",
                                "A",
                                "T",
                                "O",
                                "R",
                                "S",
                              ].map((e, t) =>
                                (0, n.jsx)(
                                  G,
                                  { isReverse: a, letter: e, ind: t },
                                  t
                                )
                              ),
                      }),
                      (0, n.jsx)(P.E.img, {
                        ref: o,
                        initial: { x: -300 },
                        alt: "pacman",
                        className: "absolute z-50",
                        src: "/pacman.gif",
                        width: 100,
                        height: 50,
                      }),
                    ],
                  }),
                  (0, n.jsx)("h3", {
                    style: { textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" },
                    className:
                      "text-[#dadada] rajdhani w-[300px] mt-3 font-semibold text-md leading-[100.5%]",
                    children:
                      "Research Backed and ROI Driven Business consulting.",
                  }),
                ],
              }),
              (0, n.jsx)(X, {}),
            ],
          });
        },
        H = a(2708);
      let Y = [
        {
          image: "/startup.png",
          text: "I’m a Startup Founder looking to brand & market a product or service",
          navigate: "/solution/Startups",
        },
        {
          image: "/cxo.png",
          text: "I’m the CXO of an Enterprise looking for innovative growth strategies",
          navigate: "/solution/Enterprises",
        },
        {
          image: "/visionary.png",
          text: "I’m an Innovator looking to develop a niche digital platform or app",
          navigate: "/solution/Innovators",
        },
      ];
      var Z = (e) => {
          let { image: t, text: a, className: s, onClick: r } = e;
          return (0, n.jsxs)("div", {
            onClick: r,
            className: "bg-[#FFA927] cursor-pointer ".concat(
              s,
              " flex flex-col items-center justify-evenly rounded-[25px] h-[400px] w-[250px]"
            ),
            style: {
              boxShadow:
                "0px 6px 4px 0px rgba(255, 255, 255, 0.44) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            },
            children: [
              (0, n.jsx)("img", {
                alt: "startup",
                src: t,
                width: 150,
                height: 150,
              }),
              (0, n.jsx)("h3", {
                className:
                  "rajdhani font-medium text-[20px] text-center px-[0.95rem] leading-[137.5%]",
                children: a,
              }),
            ],
          });
        },
        K = a(2443),
        $ = a.n(K),
        ee = a(5149),
        et = a(5164),
        ea = a(5338),
        en = a(9603),
        es = a(9417),
        er = a(1163),
        ei = () => {
          let { width: e } = (0, B.um)(),
            { ref: t, inView: a } = (0, H.YD)({ threshold: 0.2 }),
            [s, r] = (0, L.useState)(1),
            i = (e) => {
              r(e);
            },
            l = (0, er.useRouter)(),
            c = (0, ea.QS)({
              onSwipedLeft: () => i(0 === s ? 1 : 1 === s ? 2 : 0),
              onSwipedRight: () => i(2 === s ? 1 : 1 === s ? 0 : 2),
            });
          return (0, n.jsx)("section", {
            className:
              "max-w-[1300px] relative  mx-auto flex flex-col w-full items-center justify-center ",
            children: (0, n.jsxs)("div", {
              className: "flex relative w-full min-h-[600px] h-[100vh] p-0",
              children: [
                (0, n.jsx)(et.Z, { isAbsolute: !0, text: " LET US HELP YOU" }),
                e > 825
                  ? (0, n.jsxs)("div", {
                      ref: t,
                      className:
                        "relative z-20 flex w-full h-full mx-auto justify-evenly",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            " bottom-[50px] h-[15px] flex items-center justify-center gap-4 absolute",
                          children: [
                            (0, n.jsx)("span", {
                              className:
                                "w-[15px] h-[15px] rounded-full bg-[#F2F2F2]",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "w-[15px] h-[15px] rounded-full bg-[#F2F2F2]",
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "w-[15px] h-[15px] rounded-full bg-[#F2F2F2]",
                            }),
                          ],
                        }),
                        (0, n.jsx)(Z, {
                          onClick: () => {
                            l.push("/solution/Startups");
                          },
                          className: ""
                            .concat($().cardSlide, " ")
                            .concat($().cardScale),
                          image: "/startup.png",
                          text: "I’m a Startup Founder looking to brand & market a product or service",
                        }),
                        (0, n.jsx)(Z, {
                          onClick: () => {
                            l.push("/solution/Enterprises");
                          },
                          className: ""
                            .concat($().cardSlide, " ")
                            .concat($().cardScale0, " ")
                            .concat(a ? $().cardSlideIn : $().cardSlideOut),
                          image: "/cxo.png",
                          text: "I’m the CXO of an Enterprise looking for innovative growth strategies",
                        }),
                        (0, n.jsx)(Z, {
                          onClick: () => {
                            l.push("/solution/Innovators");
                          },
                          className: ""
                            .concat($().cardSlide, " ")
                            .concat($().cardScale1, " ")
                            .concat(a ? $().cardSlideIn2 : $().cardSlideOut),
                          image: "/visionary.png",
                          text: "I’m an Innovator looking to develop a niche digital platform or app",
                        }),
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      ...c,
                      ref: t,
                      style: {
                        touchAction: "none",
                        perspective: "2000px",
                        transformStyle: "preserve-3d",
                      },
                      className:
                        "relative z-20 flex w-full mx-auto justify-evenly",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "z-100 bottom-[50px] flex items-center justify-center gap-4 absolute",
                          children: [
                            (0, n.jsx)("span", {
                              onClick: () => i(0),
                              className:
                                "w-[15px] h-[15px] rounded-full bg-[#F2F2F2]",
                            }),
                            (0, n.jsx)("span", {
                              onClick: () => i(1),
                              className:
                                "w-[15px] h-[15px] rounded-full bg-[#F2F2F2]",
                            }),
                            (0, n.jsx)("span", {
                              onClick: () => i(2),
                              className:
                                "w-[15px] h-[15px] rounded-full bg-[#F2F2F2]",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          onClick: () => i(0 === s ? 1 : 1 === s ? 2 : 0),
                          className: "absolute left-0 top-1/2",
                          children: (0, n.jsx)(en.G, {
                            size: "2x",
                            icon: es.jio,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          onClick: () => i(2 === s ? 1 : 1 === s ? 0 : 2),
                          className: "absolute right-0 top-1/2",
                          children: (0, n.jsx)(en.G, {
                            size: "2x",
                            icon: es.Bc6,
                          }),
                        }),
                        Y.map((t, r) =>
                          (0, n.jsx)(
                            Z,
                            {
                              className: ""
                                .concat($().carouselCard, " ")
                                .concat(
                                  e > 555
                                    ? "bottom-[140px]"
                                    : e > 455
                                    ? "bottom-[130px]"
                                    : "bottom-[120px]",
                                  " "
                                )
                                .concat(
                                  a
                                    ? s === r
                                      ? $().cardCenter
                                      : (1 === s && 2 === r) ||
                                        (2 === s && 0 === r) ||
                                        (0 === s && 1 === r)
                                      ? $().cardRight
                                      : $().cardLeft
                                    : $().cardLeft
                                ),
                              image: t.image,
                              text: t.text,
                              onClick: () => {
                                s === r
                                  ? 0 === s
                                    ? l.push(t.navigate)
                                    : 1 === s
                                    ? l.push(t.navigate)
                                    : 2 === s && l.push(t.navigate)
                                  : i(r);
                              },
                            },
                            r
                          )
                        ),
                      ],
                    }),
                (0, n.jsx)(ee.Z, {
                  whichPage: "Home",
                  direction: "bottom",
                  inView: a,
                }),
              ],
            }),
          });
        };
      let el = [
        {
          info: "Conducting research for gap analysis, market identification, feasibility study, consumer insights, brand ethos, brand & product positioning",
          img: "/box1.png",
        },
        {
          info: "Creating  strategies and roadmaps for branding and marketing of products and services",
          img: "/box2.png",
        },
        {
          info: "Driving visual communication initiatives for branding & marketing assets",
          img: "/box3.png",
        },
        {
          info: "Scoping of digital assets like customer acquisition portals and apps",
          img: "/box4.png",
        },
        {
          info: "Creating and optimizing blueprints for  digital-first marketing processes and technology solutions",
          img: "/box5.png",
        },
        {
          info: "Managing projects and providing advisory services to top management",
          img: "/box6.png",
        },
        {
          info: "Mentoring and training industry teams on digital growth, marketing and transformation",
          img: "/box6.png",
        },
      ];
      var ec = a(6529);
      let eo = { mobile: { breakpoint: { max: 3e3, min: 350 }, items: 1 } };
      var eu = () => {
          let { width: e } = (0, B.um)();
          return (0, n.jsxs)("section", {
            className: "my-12",
            children: [
              (0, n.jsx)(et.Z, {
                isAbsolute: !1,
                text: " Platform Play Venture has expertise in",
              }),
              e > 550
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "grid w-full max-w-[1300px] mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4",
                        children: el
                          .slice(3)
                          .map((e, t) =>
                            (0, n.jsxs)(
                              "div",
                              {
                                style: {
                                  boxShadow:
                                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                },
                                className:
                                  "w-[257px] relative h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2",
                                children: [
                                  (0, n.jsx)("p", {
                                    className:
                                      "rajdhani text-[16px] text-[#dadada]",
                                    children: e.info,
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, n.jsx)("img", {
                                        alt: e.img,
                                        src: e.img,
                                      }),
                                      1 === t &&
                                        (0, n.jsx)("img", {
                                          alt: e.img,
                                          style:
                                            1 === t
                                              ? { transform: "rotate" }
                                              : {},
                                          className:
                                            1 === t
                                              ? "absolute bottom-[45px] left-[40px]"
                                              : "",
                                          src: e.img,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "grid w-full lg:w-[75%] max-w-[1300px] mx-auto grid-cols-2 md:grid-cols-3 my-4",
                        children: el
                          .slice(0, 3)
                          .map((e, t) =>
                            (0, n.jsxs)(
                              "div",
                              {
                                style: {
                                  boxShadow:
                                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                },
                                className:
                                  "w-[257px] relative h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2",
                                children: [
                                  (0, n.jsx)("p", {
                                    className:
                                      "rajdhani text-[16px] text-[#dadada]",
                                    children: e.info,
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, n.jsx)("img", {
                                        alt: e.img,
                                        src: e.img,
                                      }),
                                      0 === t &&
                                        (0, n.jsx)("img", {
                                          alt: e.img,
                                          src: e.img,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                      }),
                    ],
                  })
                : (0, n.jsx)("div", {
                    children: (0, n.jsx)(ec.default, {
                      swipeable: !1,
                      draggable: !1,
                      containerClass: "myCarouselForHome",
                      showDots: !0,
                      dotListClass: "myCarouselDots",
                      responsive: eo,
                      children: el.map((e, t) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            style: {
                              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                            },
                            className:
                              "w-[257px] h-[246px] my-3 mx-auto px-3 pt-6 pb-1 flex flex-col items-start justify-between rounded-[22px] border-[#FFA927] bg-[#3B3B3B] border-solid border-2",
                            children: [
                              (0, n.jsx)("p", {
                                className:
                                  "rajdhani text-[16px] text-[#dadada]",
                                children: e.info,
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, n.jsx)("img", { alt: e.img, src: e.img }),
                                  (0 === t || 4 === t) &&
                                    (0, n.jsx)("img", {
                                      alt: e.img,
                                      style:
                                        4 === t ? { transform: "rotate" } : {},
                                      className:
                                        4 === t
                                          ? "absolute bottom-[45px] left-[40px]"
                                          : "",
                                      src: e.img,
                                    }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
            ],
          });
        },
        ed = () =>
          (0, n.jsx)("div", {
            className:
              "flex flex-col items-center w-[90%] justify-center max-w-[1300px] mx-auto",
            children: (0, n.jsx)("section", {
              children: (0, n.jsxs)("div", {
                className:
                  "mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16",
                children: [
                  (0, n.jsx)("h2", {
                    className:
                      "text-center text-4xl font-bold tracking-tight text-[#dadada] sm:text-5xl",
                    children: "Read trusted reviews from our customers",
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8",
                    children: [1, 2, 3, 4, 5].map((e, t) =>
                      (0, n.jsxs)(
                        "blockquote",
                        {
                          className:
                            "rounded-lg bg-[#dadada] p-6 shadow-sm sm:p-8",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center gap-4",
                              children: [
                                (0, n.jsx)("img", {
                                  alt: "Man",
                                  src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
                                  className:
                                    "h-14 w-14 rounded-full object-cover",
                                }),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: "flex justify-center gap-0.5",
                                      children: [1, 2, 3, 4, 5].map((e, t) =>
                                        (0, n.jsx)(
                                          "svg",
                                          {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            viewBox: "0 0 20 20",
                                            fill: "#FFB545",
                                            children: (0, n.jsx)("path", {
                                              d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                            }),
                                          },
                                          t
                                        )
                                      ),
                                    }),
                                    (0, n.jsx)("p", {
                                      className:
                                        "mt-0.5 text-lg font-medium text-gray-900",
                                      children: (0, n.jsx)("strong", {
                                        children: "Paul Starr",
                                      }),
                                    }),
                                    (0, n.jsx)("span", { children: "Amazon" }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("p", {
                              className: "mt-4 text-[#232323]",
                              children:
                                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
        ep = a(9008),
        em = a.n(ep),
        ex = a(9752);
      function eh() {
        let { scrollY: e } = (0, B.p3)(),
          [t, a] = (0, L.useState)(null),
          [s, r] = (0, L.useState)(!1);
        return (
          (0, L.useEffect)(() => {
            localStorage.getItem("hasAcceptedCookies") || r(!0);
          }, []),
          (0, L.useEffect)(() => {
            (async () => {
              let e = await (0, ex.zQ)({ id: "home" });
              null === e
                ? a({
                    title: "Platform Play Venture",
                    description:
                      "In a world where consumers are adopting technology at an exponential pace, the success of your business depends on how effective your digital presence is. At Platform Play Venture, we undertake end-to-end consulting for your brand's digital platforms enablement as well as growth hacking in a digitally disrupted ecosystem with bespoke marketing strategy creation and solutions implementation",
                    metaTag:
                      "Marketing, branding and holistic growth for organizations and businesses who want amazing customer experiences and high conversion rates in multi-channel environments in a digitally disrupted ecosystem",
                  })
                : a(e);
            })();
          }, []),
          (0, n.jsxs)("main", {
            children: [
              (0, n.jsxs)(em(), {
                children: [
                  (0, n.jsx)("title", {
                    children: null == t ? void 0 : t.title,
                  }),
                  (0, n.jsx)("meta", {
                    name: "description",
                    content: null == t ? void 0 : t.description,
                  }),
                  (0, n.jsx)("meta", {
                    name: "keywords",
                    content: null == t ? void 0 : t.metaTag,
                  }),
                ],
              }),
              (0, n.jsxs)("section", {
                id: "homePage",
                className: "w-full flex min-h-screen flex-col justify-center",
                children: [
                  (0, n.jsx)(W, {}),
                  (0, n.jsx)(eu, {}),
                  (0, n.jsx)(ed, {}),
                  (0, n.jsx)(ei, {}),
                ],
              }),
              s &&
                e > 400 &&
                (0, n.jsxs)("section", {
                  className:
                    "fixed max-w-md z-[10000] p-4 mx-auto bg-[#dadada] border border-gray-200 left-12 bottom-16 rounded-2xl",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "font-semibold text-gray-800 ",
                      children: "\uD83C\uDF6A Cookie Notice",
                    }),
                    (0, n.jsxs)("p", {
                      className: "mt-4 text-sm text-gray-600 ",
                      children: [
                        "We use cookies to ensure that we give you the best experience on our website.",
                        " ",
                        (0, n.jsx)("a", {
                          href: "/privacyPolicy",
                          className: "text-blue-500 hover:underline",
                          children: "Read cookies policies",
                        }),
                        ".",
                        " ",
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "flex items-center justify-between mt-4 gap-x-4 shrink-0",
                      children: (0, n.jsx)("button", {
                        onClick: () => {
                          localStorage.setItem("hasAcceptedCookies", "true"),
                            r(!1);
                        },
                        className:
                          " text-xs bg-[#232323] font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none",
                        children: "Accept",
                      }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
    },
    728: function (e) {
      e.exports = {
        semicircle: "backCircle_semicircle__GGKl3",
        semicircle1InView: "backCircle_semicircle1InView__93K6_",
        semicircle1: "backCircle_semicircle1__iO0rz",
        semicircle2InView: "backCircle_semicircle2InView__vo4_k",
        semicircle2: "backCircle_semicircle2__73tn7",
        smallsemicircle1: "backCircle_smallsemicircle1__fyDYP",
        smallsemicircle2: "backCircle_smallsemicircle2__rVmYz",
        doublesmallsemicircle1: "backCircle_doublesmallsemicircle1__Qww4v",
        doublesmallsemicircle2: "backCircle_doublesmallsemicircle2__uf8BO",
        triplesmallsemicircle1: "backCircle_triplesmallsemicircle1__0DuY_",
        triplesmallsemicircle2: "backCircle_triplesmallsemicircle2__nGmdx",
        forthsmallsemicircle1: "backCircle_forthsmallsemicircle1__dy_rE",
        forthsmallsemicircle2: "backCircle_forthsmallsemicircle2__8oCFh",
      };
    },
    2443: function (e) {
      e.exports = {
        cardSlide: "card_cardSlide__ddlqG",
        cardScale: "card_cardScale__UZjBt",
        cardScale1: "card_cardScale1__eFtsJ",
        cardScale0: "card_cardScale0__RzqCT",
        cardSlideIn: "card_cardSlideIn__AJFst",
        cardSlideIn2: "card_cardSlideIn2__c2QfR",
        cardSlideOut: "card_cardSlideOut__P5nyM",
        carouselCard: "card_carouselCard__OJWQu",
        cardRight: "card_cardRight__Mrvbg",
        cardLeft: "card_cardLeft__U4zIL",
        cardCenter: "card_cardCenter__myJWA",
      };
    },
    1163: function (e, t, a) {
      e.exports = a(2937);
    },
    5338: function (e, t, a) {
      "use strict";
      a.d(t, {
        QS: function () {
          return o;
        },
      });
      var n = a(7294);
      let s = {
          delta: 10,
          preventScrollOnSwipe: !1,
          rotationAngle: 0,
          trackMouse: !1,
          trackTouch: !0,
          swipeDuration: 1 / 0,
          touchEventOptions: { passive: !0 },
        },
        r = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
        i = "mousemove",
        l = "mouseup";
      function c(e, t) {
        if (0 === t) return e;
        let a = (Math.PI / 180) * t;
        return [
          e[0] * Math.cos(a) + e[1] * Math.sin(a),
          e[1] * Math.cos(a) - e[0] * Math.sin(a),
        ];
      }
      function o(e) {
        var t, a, o;
        let u;
        let { trackMouse: d } = e,
          p = n.useRef(Object.assign({}, r)),
          m = n.useRef(Object.assign({}, s)),
          x = n.useRef(Object.assign({}, m.current));
        for (u in ((x.current = Object.assign({}, m.current)),
        (m.current = Object.assign(Object.assign({}, s), e)),
        s))
          void 0 === m.current[u] && (m.current[u] = s[u]);
        let [h, f] = n.useMemo(
          () =>
            (function (e, t) {
              let a = (t) => {
                  let a = "touches" in t;
                  (a && t.touches.length > 1) ||
                    e((e, s) => {
                      s.trackMouse &&
                        !a &&
                        (document.addEventListener(i, n),
                        document.addEventListener(l, d));
                      let { clientX: o, clientY: u } = a ? t.touches[0] : t,
                        p = c([o, u], s.rotationAngle);
                      return (
                        s.onTouchStartOrOnMouseDown &&
                          s.onTouchStartOrOnMouseDown({ event: t }),
                        Object.assign(Object.assign(Object.assign({}, e), r), {
                          initial: p.slice(),
                          xy: p,
                          start: t.timeStamp || 0,
                        })
                      );
                    });
                },
                n = (t) => {
                  e((e, a) => {
                    let n = "touches" in t;
                    if (n && t.touches.length > 1) return e;
                    if (t.timeStamp - e.start > a.swipeDuration)
                      return e.swiping
                        ? Object.assign(Object.assign({}, e), { swiping: !1 })
                        : e;
                    let { clientX: r, clientY: i } = n ? t.touches[0] : t,
                      [l, o] = c([r, i], a.rotationAngle),
                      u = l - e.xy[0],
                      d = o - e.xy[1],
                      p = Math.abs(u),
                      m = Math.abs(d),
                      x = (t.timeStamp || 0) - e.start,
                      h =
                        p > m
                          ? u > 0
                            ? "Right"
                            : "Left"
                          : d > 0
                          ? "Down"
                          : "Up",
                      f =
                        "number" == typeof a.delta
                          ? a.delta
                          : a.delta[h.toLowerCase()] || s.delta;
                    if (p < f && m < f && !e.swiping) return e;
                    let g = {
                      absX: p,
                      absY: m,
                      deltaX: u,
                      deltaY: d,
                      dir: h,
                      event: t,
                      first: e.first,
                      initial: e.initial,
                      velocity: Math.sqrt(p * p + m * m) / (x || 1),
                      vxvy: [u / (x || 1), d / (x || 1)],
                    };
                    g.first && a.onSwipeStart && a.onSwipeStart(g),
                      a.onSwiping && a.onSwiping(g);
                    let b = !1;
                    return (
                      (a.onSwiping || a.onSwiped || a[`onSwiped${h}`]) &&
                        (b = !0),
                      b &&
                        a.preventScrollOnSwipe &&
                        a.trackTouch &&
                        t.cancelable &&
                        t.preventDefault(),
                      Object.assign(Object.assign({}, e), {
                        first: !1,
                        eventData: g,
                        swiping: !0,
                      })
                    );
                  });
                },
                o = (t) => {
                  e((e, a) => {
                    let n;
                    if (e.swiping && e.eventData) {
                      if (t.timeStamp - e.start < a.swipeDuration) {
                        (n = Object.assign(Object.assign({}, e.eventData), {
                          event: t,
                        })),
                          a.onSwiped && a.onSwiped(n);
                        let s = a[`onSwiped${n.dir}`];
                        s && s(n);
                      }
                    } else a.onTap && a.onTap({ event: t });
                    return (
                      a.onTouchEndOrOnMouseUp &&
                        a.onTouchEndOrOnMouseUp({ event: t }),
                      Object.assign(Object.assign(Object.assign({}, e), r), {
                        eventData: n,
                      })
                    );
                  });
                },
                u = () => {
                  document.removeEventListener(i, n),
                    document.removeEventListener(l, d);
                },
                d = (e) => {
                  u(), o(e);
                },
                p = (e, t) => {
                  let r = () => {};
                  if (e && e.addEventListener) {
                    let i = Object.assign(
                        Object.assign({}, s.touchEventOptions),
                        t.touchEventOptions
                      ),
                      l = [
                        ["touchstart", a, i],
                        [
                          "touchmove",
                          n,
                          Object.assign(
                            Object.assign({}, i),
                            t.preventScrollOnSwipe ? { passive: !1 } : {}
                          ),
                        ],
                        ["touchend", o, i],
                      ];
                    l.forEach(([t, a, n]) => e.addEventListener(t, a, n)),
                      (r = () =>
                        l.forEach(([t, a]) => e.removeEventListener(t, a)));
                  }
                  return r;
                },
                m = {
                  ref: (t) => {
                    null !== t &&
                      e((e, a) => {
                        if (e.el === t) return e;
                        let n = {};
                        return (
                          e.el &&
                            e.el !== t &&
                            e.cleanUpTouch &&
                            (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                          a.trackTouch && t && (n.cleanUpTouch = p(t, a)),
                          Object.assign(
                            Object.assign(Object.assign({}, e), { el: t }),
                            n
                          )
                        );
                      });
                  },
                };
              return t.trackMouse && (m.onMouseDown = a), [m, p];
            })((e) => (p.current = e(p.current, m.current)), { trackMouse: d }),
          [d]
        );
        return (
          (p.current =
            ((t = p.current),
            (a = m.current),
            (o = x.current),
            a.trackTouch && t.el
              ? t.cleanUpTouch
                ? a.preventScrollOnSwipe !== o.preventScrollOnSwipe ||
                  a.touchEventOptions.passive !== o.touchEventOptions.passive
                  ? (t.cleanUpTouch(),
                    Object.assign(Object.assign({}, t), {
                      cleanUpTouch: f(t.el, a),
                    }))
                  : t
                : Object.assign(Object.assign({}, t), {
                    cleanUpTouch: f(t.el, a),
                  })
              : (t.cleanUpTouch && t.cleanUpTouch(),
                Object.assign(Object.assign({}, t), {
                  cleanUpTouch: void 0,
                })))),
          h
        );
      }
    },
    5411: function (e, t, a) {
      "use strict";
      a.d(t, {
        z: function () {
          return s;
        },
      });
      var n = a(7294);
      function s(e) {
        return (0, n.useEffect)(() => () => e(), []);
      }
    },
  },
  function (e) {
    e.O(0, [16, 868, 529, 231, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
