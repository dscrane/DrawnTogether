(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    100: function (e, t, n) {},
    133: function (e, t, n) {},
    134: function (e, t, n) {},
    135: function (e, t, n) {},
    136: function (e, t, n) {},
    137: function (e, t, n) {},
    138: function (e, t, n) {},
    139: function (e, t, n) {},
    140: function (e, t, n) {},
    141: function (e, t, n) {},
    142: function (e, t, n) {},
    217: function (e, t, n) {
      "use strict";
      n.r(t);
      n(100);
      var a = n(1),
        r = n(54),
        c = n.n(r),
        o = n(24),
        i = n(9),
        s = n(26),
        l = n(2),
        u = n.n(l),
        d = n(97),
        j = n(4),
        h = n(0),
        p = function (e) {
          var t = e.id,
            n = e.playerCircle,
            a = e.centerPoint,
            r = e.isInit,
            c = v(n, t),
            o = c.path,
            i = c.animation;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("defs", {
                children: [
                  _(t, a, n.hue, n.saturation, n.lightness),
                  x(t, a, n.xCartesian, n.yCartesian, n.radius, null),
                ],
              }),
              Object(h.jsx)(
                "path",
                {
                  id: "circle_".concat(t).concat(r ? "_init" : ""),
                  d: o,
                  style: {
                    fill: "url(#radialGradient".concat(t, ")"),
                    opacity: "".concat(r ? 0.2 : 1),
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeLinecap: "round",
                  },
                  children: i,
                },
                "circle_".concat(t).concat(r ? "_init" : "")
              ),
            ],
          });
        },
        m = function (e) {
          var t = e.id,
            n = e.playerCircle,
            a = e.centerPoint,
            r = v(n, t),
            c = r.path,
            o = r.animation;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("defs", {
                children: [
                  _(t, a, n.hue, n.saturation, n.lightness),
                  x(t, a, n.xCartesian, n.yCartesian, n.radius, n.lineDesign),
                ],
              }),
              n.lineDesign
                ? Object(h.jsx)("use", { href: "#linearPath".concat(t) })
                : null,
              Object(h.jsx)(
                "path",
                {
                  id: "circle_".concat(t),
                  d: c,
                  style: {
                    fill: n.secondaryColor,
                    opacity: 1,
                    fillRule: "evenodd",
                    stroke: "url(#radialGradient".concat(t, ")"),
                    strokeWidth: n.designThickness,
                  },
                  children: o,
                },
                "circle_".concat(t)
              ),
            ],
          });
        },
        b = function (e) {
          var t = e.id,
            n = e.playerCircle,
            a = e.centerPoint,
            r = v(n, t),
            c = r.path,
            o = r.animation;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("defs", {
                children: [
                  _(t, a, n.hue, n.saturation, n.lightness),
                  x(t, a, n.xCartesian, n.yCartesian, n.radius, n.lineDesign),
                ],
              }),
              n.lineDesign
                ? Object(h.jsx)("use", { href: "#linearPath".concat(t) })
                : null,
              Object(h.jsx)(
                "path",
                {
                  id: "circle_".concat(t),
                  d: c,
                  strokeWidth: n.designThickness,
                  stroke: n.color,
                  fill: "none",
                  children: o,
                },
                "circle_".concat(t)
              ),
            ],
          });
        },
        f = function (e) {
          var t,
            n,
            a,
            r = e.id,
            c = e.playerCircle,
            o = e.centerPoint,
            i = c.radius - 2 * c.designThickness,
            s = c.radius - 0.5 * c.designThickness;
          return (
            c.isAnimated
              ? ((t = Object(h.jsx)("animateMotion", {
                  dur: "10s",
                  repeatCount: "indefinite",
                  children: Object(h.jsx)("mpath", {
                    href: "#linearPath".concat(r),
                  }),
                })),
                (n = y(0, 0, i)),
                (a = y(0, 0, s)))
              : ((t = null),
                (n = y(c.xCartesian, c.yCartesian, i)),
                (a = y(c.xCartesian, c.yCartesian, s))),
            Object(h.jsxs)(h.Fragment, {
              children: [
                Object(h.jsxs)("defs", {
                  children: [
                    _(r, o, c.hue, c.saturation, c.lightness),
                    x(r, o, c.xCartesian, c.yCartesian, c.radius, c.lineDesign),
                  ],
                }),
                c.lineDesign
                  ? Object(h.jsx)("use", { href: "#linearPath".concat(r) })
                  : null,
                Object(h.jsxs)("g", {
                  id: "circle_".concat(r),
                  children: [
                    Object(h.jsx)(
                      "path",
                      {
                        d: n,
                        style: {
                          fill: "url(#radialGradient".concat(r, ")"),
                          opacity: 1,
                          fillRule: "evenodd",
                          strokeLinecap: "round",
                        },
                      },
                      "circle_".concat(r, "_inner")
                    ),
                    Object(h.jsx)(
                      "path",
                      {
                        d: a,
                        strokeWidth: c.designThickness,
                        stroke: c.secondaryColor,
                        fill: "none",
                      },
                      "circle_".concat(r, "_outer")
                    ),
                    t,
                  ],
                }),
              ],
            })
          );
        },
        O = function (e) {
          var t = e.id,
            n = e.playerCircle,
            a = e.centerPoint,
            r = v(n, t),
            c = r.path,
            o = r.animation;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("defs", {
                children: [
                  _(t, a, n.hue, n.saturation, n.lightness),
                  x(t, a, n.xCartesian, n.yCartesian, n.radius, n.lineDesign),
                ],
              }),
              n.lineDesign
                ? Object(h.jsx)("use", { href: "#linearPath".concat(t) })
                : null,
              Object(h.jsx)(
                "path",
                {
                  id: "circle_".concat(t),
                  d: c,
                  strokeWidth: n.designThickness,
                  stroke: n.secondaryColor,
                  style: {
                    fill: "url(#radialGradient".concat(t, ")"),
                    opacity: 1,
                    fillRule: "evenodd",
                    strokeLinecap: "round",
                  },
                  children: o,
                },
                "circle_".concat(t)
              ),
            ],
          });
        };
      function _(e, t, n, a, r) {
        return Object(h.jsxs)("radialGradient", {
          id: "radialGradient".concat(e),
          children: [
            Object(h.jsx)("stop", {
              offset: "0%",
              stopColor: "hsl("
                .concat(n, ", ")
                .concat(a, "%, ")
                .concat(1.6 * r, "%"),
              stopOpacity: 1,
            }),
            Object(h.jsx)("stop", {
              offset: "25%",
              stopColor: "hsl("
                .concat(n, ", ")
                .concat(a, "%, ")
                .concat(1.45 * r, "%"),
              stopOpacity: 1,
            }),
            Object(h.jsx)("stop", {
              offset: "50%",
              stopColor: "hsl("
                .concat(n, ", ")
                .concat(a, "%, ")
                .concat(1.3 * r, "%"),
              stopOpacity: 1,
            }),
            Object(h.jsx)("stop", {
              offset: "75%",
              stopColor: "hsl("
                .concat(n, ", ")
                .concat(a, "%, ")
                .concat(1.15 * r, "%"),
              stopOpacity: 1,
            }),
            Object(h.jsx)("stop", {
              offset: "100%",
              stopColor: "hsl(".concat(n, ", ").concat(a, "%, ").concat(r, "%"),
              stopOpacity: 1,
            }),
          ],
        });
      }
      function x(e, t, n, a, r, c) {
        return null !== c
          ? Object(h.jsx)("path", {
              id: "linearPath".concat(e),
              d: "m"
                .concat(n, ",")
                .concat(a, " L")
                .concat(t.x, ",")
                .concat(t.y, " ")
                .concat(n, ",")
                .concat(a),
              style: Object(j.a)({}, c),
            })
          : Object(h.jsx)("path", {
              id: "linearPath".concat(e),
              d: "m"
                .concat(n, ",")
                .concat(a, " L")
                .concat(t.x, ",")
                .concat(t.y, " ")
                .concat(n, ",")
                .concat(a),
            });
      }
      function y(e, t, n) {
        return "M "
          .concat(e, " ")
          .concat(t, " m -")
          .concat(n, ", 0 a ")
          .concat(n, ",")
          .concat(n, " 0 1,0 ")
          .concat(2 * n, ",0 a ")
          .concat(n, ",")
          .concat(n, " 0 1,0 -")
          .concat(2 * n, ",0 ");
      }
      function v(e, t) {
        var n, a;
        return (
          e.isAnimated
            ? ((a = Object(h.jsx)("animateMotion", {
                dur: "10s",
                repeatCount: "indefinite",
                children: Object(h.jsx)("mpath", {
                  href: "#linearPath".concat(t),
                }),
              })),
              (n = y(0, 0, e.radius)))
            : ((a = null), (n = y(e.xCartesian, e.yCartesian, e.radius))),
          { path: n, animation: a }
        );
      }
      function g(e, t) {
        var n = e.design,
          a = e.playerId;
        switch (n) {
          case "initialCircle":
            return Object(h.jsx)(
              p,
              { id: a, playerCircle: e, centerPoint: t, isInit: !0 },
              "circle_".concat(a, "_init")
            );
          case "defaultCircle":
            return Object(h.jsx)(
              p,
              { id: a, playerCircle: e, centerPoint: t, isInit: !1 },
              "circle_".concat(a)
            );
          case "hollow":
            return Object(h.jsx)(
              b,
              { id: a, playerCircle: e, centerPoint: t },
              "circle_".concat(a)
            );
          case "stroke":
            return Object(h.jsx)(
              O,
              { id: a, playerCircle: e, centerPoint: t },
              "circle_".concat(a)
            );
          case "ring":
            return Object(h.jsx)(
              f,
              { id: a, playerCircle: e, centerPoint: t },
              "circle_".concat(a)
            );
          case "dot":
            return Object(h.jsx)(
              m,
              { id: a, playerCircle: e, centerPoint: t },
              "circle_".concat(a)
            );
          default:
            console.info(
              "%c[ERROR]: Switch - createCircleDesign",
              "color: red"
            );
        }
      }
      var N = n(90),
        P = n.n(N);
      console.log("production");
      var C = P.a.create({ baseURL: "https://dsc-circles.herokuapp.com" }),
        w = {
          name: "",
          association: "",
          height: "",
          curiosity: "",
          productivity: "",
          age: "",
          diet: "",
          leaning: "",
          personality: "",
          hair: "",
          money: "",
          food: "",
          nature: "",
          media: "",
          progress: "",
          religion: "",
          culture: "",
          color: "",
        },
        k = function (e) {
          return e[Math.floor(Math.random() * e.length)];
        },
        F = [16, 32, 48],
        T = [27, 36, 18, 9, 0],
        S = [2, 1],
        E = [400, 40, 360, 80, 320, 120, 280, 160, 240, 200],
        D = ["omnivore", "vegetarian", "pescatarian", "vegan"],
        A = [18, 45],
        L = [60, 31, 18],
        I = [10, 18, 25, -15],
        R = [0, 1, 2, 3],
        G = [45, 135, 45, 270],
        M = ["hollow", "stroke", "ring", "dot"],
        U = ["thinner", "thicker", "thin", "thick"],
        W = ["complimentary", "triadic", "monochromatic", "analogous"],
        z = ["solid", "round", "dotted", "uneven", "dashed"],
        H = [0, 1, 2, 3],
        V = [
          "chartreuse",
          "vermilion",
          "cobalt",
          "teal",
          "kellyGreen",
          "aubergine",
        ],
        B = function () {
          return Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).REACT_APP_AUTOFILL
            ? {
                name: "Tester",
                association: Math.floor(10 * Math.random() + 1),
                height: k(F),
                curiosity: k(T),
                productivity: k(S),
                age: k(E),
                diet: k(D),
                personality: k(L),
                leaning: k(A),
                money: k(R),
                food: k(G),
                hair: k(I),
                nature: k(M),
                media: k(U),
                progress: k(W),
                religion: k(z),
                culture: k(H),
                color: k(V),
              }
            : w;
        },
        Y = (function () {
          var e = Object(i.a)(
            u.a.mark(function e(t, n) {
              var a, r, c, o, i;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (
                        a = t.split(","),
                          r = a[0].match(/:(.*?);/)[1],
                          c = atob(a[1]),
                          o = c.length,
                          i = new Uint8Array(o);
                        o--;

                      )
                        i[o] = c.charCodeAt(o);
                      return e.abrupt("return", new File([i], n, { type: r }));
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        q =
          (n(133),
          function (e) {
            var t = e.currentForm,
              n =
                (t > 0 || h.Fragment,
                t > 0 && t < 8
                  ? (function (e) {
                      return [
                        "Participants",
                        "Personal",
                        "Mental",
                        "Financial",
                        "Natural",
                        "Cultural",
                        "Visual",
                      ].map(function (t, n) {
                        return n === e - 1
                          ? Object(h.jsx)(
                              "div",
                              {
                                className: "icon__container",
                                children: Object(h.jsx)(te, {
                                  formName: t,
                                  isActive: !0,
                                }),
                              },
                              "".concat(t, "-active")
                            )
                          : Object(h.jsx)(
                              "div",
                              {
                                className: "icon__container",
                                children: Object(h.jsx)(te, {
                                  formName: t,
                                  isActive: !1,
                                }),
                              },
                              "".concat(t)
                            );
                      });
                    })(t)
                  : null);
            return Object(h.jsxs)("div", {
              className: "header",
              "data-testid": "component-PanelHeader",
              children: [
                Object(h.jsxs)("h1", {
                  className: "header__title",
                  children: ["Drawn ", Object(h.jsx)("br", {}), "Together"],
                }),
                Object(h.jsx)("h3", {
                  className: "header__text",
                  children: "an interactive visual investigation",
                }),
                Object(h.jsx)("div", {
                  className: "header__icons",
                  children: n,
                }),
              ],
            });
          }),
        K = n(231),
        X = n(232),
        J = n(233),
        Z = n(234),
        Q = n(235),
        $ = n(236),
        ee = n(237),
        te = function (e) {
          var t = e.formName,
            n = e.isActive;
          switch (t) {
            case "Participants":
              return Object(h.jsx)(K.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            case "Personal":
              return Object(h.jsx)(X.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            case "Mental":
              return Object(h.jsx)(J.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            case "Financial":
              return Object(h.jsx)(Z.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            case "Natural":
              return Object(h.jsx)(Q.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            case "Cultural":
              return Object(h.jsx)($.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            case "Visual":
              return Object(h.jsx)(ee.a, {
                className: "header__icon ".concat(
                  n ? "header__icon-active" : ""
                ),
              });
            default:
              console.log("HeaderIcon switch has failed");
          }
        },
        ne =
          (n(134),
          function () {
            return Object(h.jsxs)("div", {
              className: "landing",
              children: [
                Object(h.jsx)("p", {
                  className: "landing__text",
                  children:
                    "Drawn Together is an artistic collaboration between Daegan and Carrie Crane.",
                }),
                Object(h.jsx)("p", {
                  className: "landing__text",
                  children: "For teams of 2-5 players.",
                }),
                Object(h.jsx)("p", {
                  className: "landing__text",
                  children:
                    "As team progress through the sections, the game will create and alter a collection of circles based on your teams common interest and varied personalities .",
                }),
                Object(h.jsx)("p", {
                  className: "landing__text",
                  children:
                    "In the end you will have unique visual interpretation of your teams\u2019s connection to the common interest that brought you together.",
                }),
              ],
            });
          }),
        ae = n(91),
        re = n.n(ae),
        ce = n(98),
        oe =
          (n(135),
          function (e) {
            var t = e.onClick,
              n = e.text,
              a = e.buttonType;
            return Object(h.jsx)("button", {
              type: "next" === a ? "submit" : "button",
              className:
                "prev" === a || "next" === a
                  ? "p-button p-button__game p-button__game_".concat(a)
                  : "p-button p-button__".concat(a),
              onClick: t || null,
              children: Object(h.jsx)("span", {
                children: (function () {
                  if (n.includes(" ")) {
                    var e = n.split(" ");
                    return "add" === a || "next" === a
                      ? n
                      : Object(h.jsxs)(h.Fragment, {
                          children: [e[0], Object(h.jsx)("br", {}), e[1]],
                        });
                  }
                  return n;
                })(),
              }),
            });
          }),
        ie = function (e, t, n) {
          e.emit("initialize-players", { gameId: t, formValues: n });
        },
        se = function (e, t, n, a, r) {
          e.emit(
            "update-player",
            { centerPoint: r, _id: t, responses: n, updateStep: a },
            function (e) {
              console.log(e);
            }
          );
        },
        le = function (e) {
          e.emit("fetch-circles");
        },
        ue = function (e) {
          e.emit("final-display");
        },
        de = function (e) {
          var t = e.screenshot,
            n = e.handleScreenshot,
            a = e.handleSubmit,
            r = e.handleEmailChange;
          return t
            ? Object(h.jsxs)("div", {
                className: "form form__screenshot",
                children: [
                  Object(h.jsx)("input", {
                    className:
                      "form__control form__control-input form__control-input_screenshot",
                    placeholder: "Email...",
                    type: "email",
                    onChange: r,
                  }),
                  Object(h.jsx)(oe, {
                    onClick: a,
                    buttonType: "send",
                    text: "Send",
                  }),
                ],
              })
            : Object(h.jsx)(oe, {
                onClick: n,
                buttonType: "screenshot",
                text: "Take Screenshot",
              });
        },
        je = function (e) {
          var t = e.gameId,
            n = e.socket,
            r = Object(a.useState)(!1),
            c = Object(s.a)(r, 2),
            o = c[0],
            l = c[1],
            d = Object(a.useState)(null),
            j = Object(s.a)(d, 2),
            p = j[0],
            m = j[1],
            b = Object(a.useState)(""),
            f = Object(s.a)(b, 2),
            O = f[0],
            _ = f[1],
            x = (function () {
              var e = Object(i.a)(
                u.a.mark(function e() {
                  var t, n;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            ce.a(document.getElementById("canvas"))
                          );
                        case 2:
                          return (
                            (t = e.sent), (e.next = 5), Y(t, "screenshot.png")
                          );
                        case 5:
                          (n = e.sent), m(n);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            y = (function () {
              var e = Object(i.a)(
                u.a.mark(function e() {
                  var n, a, r, c;
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = "screenshot_".concat(t, ".png")),
                            (a = new re.a()).append("screenshot", p, n),
                            a.append("email", O),
                            a.append("screenshotName", n),
                            (e.next = 7),
                            C.post("/games/sendScreenshot", a, {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            })
                          );
                        case 7:
                          (r = e.sent), (c = r.data), l(c.emailStatus);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsxs)("div", {
            className: "landing",
            children: [
              Object(h.jsx)("p", {
                className: "landing__text",
                children:
                  "The final results of your group are displayed to the right.",
              }),
              Object(h.jsx)("p", {
                className: "landing__text landing__text-smaller",
                children:
                  "If you would like an emailed version of your display click the button below",
              }),
              o
                ? Object(h.jsxs)("div", {
                    children: [
                      Object(h.jsx)("p", {
                        children: "The image has been sent.",
                      }),
                      Object(h.jsx)("p", {
                        children:
                          "Your email has not been saved and you will not receive additional emails!",
                      }),
                    ],
                  })
                : Object(h.jsx)(de, {
                    screenshot: p,
                    handleScreenshot: x,
                    handleEmailChange: function (e) {
                      e.preventDefault(), _(e.target.value);
                    },
                    handleSubmit: y,
                  }),
              Object(h.jsx)("p", {
                className: "landing__text",
                children:
                  'If you would like to play again please hit the "Reset" button!',
              }),
              Object(h.jsx)(oe, {
                onClick: function () {
                  return (function (e) {
                    e.emit("end-game");
                  })(n);
                },
                buttonType: "restart",
                text: "Restart\nGame",
              }),
            ],
          });
        },
        he = n(6),
        pe = n(5),
        me = function (e) {
          return e || "number" === typeof e ? void 0 : "Required";
        },
        be = function (e) {
          return (
            me(e) ||
            (function (e) {
              return e && isNaN(Number(e)) ? "Must be a number" : void 0;
            })(e) ||
            (function (e) {
              return e && e > 120
                ? "Are you really over 120 years old?!"
                : void 0;
            })(e) ||
            (function (e) {
              return e && e > 0
                ? void 0
                : "Numbers need to be greater than 0 :)";
            })(e)
          );
        },
        fe = function (e) {
          return (
            me(e) ||
            (function (e) {
              return e && e.length > 15
                ? "Unfortunately names must be under 15 characters long"
                : void 0;
            })(e)
          );
        },
        Oe = ["index", "field", "form", "label", "placeholder"],
        _e = function (e) {
          e.index;
          var t = e.field,
            n = (e.form, e.label),
            a = (e.placeholder, Object(he.a)(e, Oe));
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("label", { className: "item__label", children: n }),
              Object(h.jsx)("input", Object(j.a)(Object(j.a)({}, t), a)),
            ],
          });
        },
        xe = function (e) {
          var t = e.values;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsx)("div", {
                className: "form__row",
                children: Object(h.jsxs)("div", {
                  className: "form__item form__item-interest",
                  children: [
                    Object(h.jsx)("label", {
                      className: "item__label item__label-interest",
                      children: "Common Interest",
                    }),
                    Object(h.jsx)(pe.a, {
                      className: "form__control form__control-input ".concat(
                        ""
                      ),
                      id: "commonInterest",
                      name: "interest",
                      component: "input",
                      type: "text",
                      validate: fe,
                    }),
                  ],
                }),
              }),
              Object(h.jsx)(pe.b, {
                name: "players",
                render: function (e) {
                  var n = e.remove,
                    a = e.push;
                  return Object(h.jsxs)(h.Fragment, {
                    children: [
                      t.players.map(function (e, a) {
                        return Object(h.jsxs)(
                          "div",
                          {
                            className: "form__row",
                            children: [
                              Object(h.jsxs)("div", {
                                className: "form__item",
                                children: [
                                  Object(h.jsxs)("div", {
                                    className: "item__name",
                                    children: ["Player #", a + 1],
                                  }),
                                  t.players.length < 3
                                    ? null
                                    : Object(h.jsx)("button", {
                                        className: "item__removeCTA",
                                        type: "button",
                                        title: "Remove Player",
                                        onClick: function () {
                                          return n(a);
                                        },
                                        children: "Remove",
                                      }),
                                ],
                              }),
                              Object(h.jsx)("div", {
                                className: "form__item",
                                children: Object(h.jsx)(pe.a, {
                                  className:
                                    "form__control form__control-input ".concat(
                                      ""
                                    ),
                                  name: "players.".concat(a, ".name"),
                                  type: "text",
                                  component: _e,
                                  label: "Name",
                                  validate: fe,
                                  index: a,
                                }),
                              }),
                              Object(h.jsx)("div", {
                                className: "form__item",
                                children: Object(h.jsx)(pe.a, {
                                  className:
                                    "form__control form__control-input ".concat(
                                      ""
                                    ),
                                  name: "players.".concat(a, ".association"),
                                  type: "text",
                                  component: _e,
                                  label: "Time",
                                  validate: be,
                                }),
                              }),
                            ],
                          },
                          "player_".concat(a)
                        );
                      }),
                      Object(h.jsx)("div", {
                        className: "form__row",
                        children: Object(h.jsx)("div", {
                          className: "form__item form__item-addCTA ".concat(
                            5 === t.players.length ? "invisible" : ""
                          ),
                          children: Object(h.jsx)(oe, {
                            onClick: function () {
                              return a(w);
                            },
                            text: "Add Player",
                            buttonType: "add",
                          }),
                        }),
                      }),
                    ],
                  });
                },
              }),
            ],
          });
        },
        ye = function (e) {
          var t = e.currentPlayer;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Tallness?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".height"),
                    id: "formHeight",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 16,
                        children: "How's the weather up there?",
                      }),
                      Object(h.jsx)("option", {
                        value: 32,
                        children: "Regular",
                      }),
                      Object(h.jsx)("option", {
                        value: 48,
                        children: "Small but mighty",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Most Distracted by?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".curiosity"),
                    id: "formInterest",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 27,
                        children: "Numbers",
                      }),
                      Object(h.jsx)("option", {
                        value: 36,
                        children: "Letters",
                      }),
                      Object(h.jsx)("option", {
                        value: 18,
                        children: "Thoughts",
                      }),
                      Object(h.jsx)("option", { value: 9, children: "Sights" }),
                      Object(h.jsx)("option", { value: 0, children: "Humans" }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Personality Profile #1",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".productivity"),
                    id: "formGender",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 2,
                        children: "Up with the sun",
                      }),
                      Object(h.jsx)("option", {
                        value: 1,
                        children: "Night owl",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Elderliness?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".age"),
                    id: "formAge",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", { value: 400, children: "0-10" }),
                      Object(h.jsx)("option", { value: 40, children: "11-20" }),
                      Object(h.jsx)("option", {
                        value: 360,
                        children: "21-30",
                      }),
                      Object(h.jsx)("option", { value: 80, children: "31-40" }),
                      Object(h.jsx)("option", {
                        value: 320,
                        children: "41-50",
                      }),
                      Object(h.jsx)("option", {
                        value: 120,
                        children: "51-60",
                      }),
                      Object(h.jsx)("option", {
                        value: 280,
                        children: "61-70",
                      }),
                      Object(h.jsx)("option", {
                        value: 160,
                        children: "71-80",
                      }),
                      Object(h.jsx)("option", {
                        value: 240,
                        children: "81-90",
                      }),
                      Object(h.jsx)("option", {
                        value: 200,
                        children: "91-100",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Dietary Predilection?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".diet"),
                    id: "formDiet",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: "omnivore",
                        children: "Meat and salad",
                      }),
                      Object(h.jsx)("option", {
                        value: "vegetarian",
                        children: "Salad and salad",
                      }),
                      Object(h.jsx)("option", {
                        value: "pescatarian",
                        children: "Fish and salad",
                      }),
                      Object(h.jsx)("option", {
                        value: "vegan",
                        children: "No dairy, no eggs and salad",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ve = function (e) {
          var t = e.currentPlayer;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Cognitive Disposition?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".leaning"),
                    id: "formTemporal",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 18,
                        children: "Right-Brain",
                      }),
                      Object(h.jsx)("option", {
                        value: 45,
                        children: "Left-Brain",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Personality Profile #2",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".personality"),
                    id: "formPersonality",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 60,
                        children: "Introvert",
                      }),
                      Object(h.jsx)("option", {
                        value: 18,
                        children: "Extrovert",
                      }),
                      Object(h.jsx)("option", {
                        value: 31,
                        children: "It Depends",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Best Hair Day?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".hair"),
                    id: "formHair",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", { value: 10, children: "Curly" }),
                      Object(h.jsx)("option", {
                        value: 18,
                        children: "Straight",
                      }),
                      Object(h.jsx)("option", { value: 25, children: "Wavy" }),
                      Object(h.jsx)("option", {
                        value: -15,
                        children: "Patrick Stewart",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ge = function (e) {
          var t = e.currentPlayer;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "You and Your Wallet?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".money"),
                    id: "formMoney",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 0,
                        children: "Miserly",
                      }),
                      Object(h.jsx)("option", {
                        value: 2,
                        children: "Spend-thrift",
                      }),
                      Object(h.jsx)("option", {
                        value: 1,
                        children: "What's mine is yours",
                      }),
                      Object(h.jsx)("option", {
                        value: 3,
                        children: "Capitalistic",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Food Attitude?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".food"),
                    id: "formFood",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 135,
                        children: "A foodie",
                      }),
                      Object(h.jsx)("option", {
                        value: 45,
                        children: "See it, Eat it",
                      }),
                      Object(h.jsx)("option", {
                        value: 270,
                        children: "Vanilla",
                      }),
                      Object(h.jsx)("option", {
                        value: 45,
                        children: "Fear Factor",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ne = function (e) {
          var t = e.currentPlayer;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Nature Nature?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".nature"),
                    id: "formNature",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: "hollow",
                        children: "Might open a window",
                      }),
                      Object(h.jsx)("option", {
                        value: "stroke",
                        children: "Happy on the porch",
                      }),
                      Object(h.jsx)("option", {
                        value: "ring",
                        children: "National Park-er",
                      }),
                      Object(h.jsx)("option", {
                        value: "dot",
                        children: "Tree-hugger",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Social Media Appetite?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".media"),
                    id: "formMedia",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: "thinner",
                        children: "What is social media?",
                      }),
                      Object(h.jsx)("option", {
                        value: "thicker",
                        children: "Lurker",
                      }),
                      Object(h.jsx)("option", {
                        value: "thin",
                        children: "Didn't you see my story?",
                      }),
                      Object(h.jsx)("option", {
                        value: "thick",
                        children: "Influencer",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Cause for Concern?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".progress"),
                    id: "formProgress",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: "complimentary",
                        children: "Back in my day...",
                      }),
                      Object(h.jsx)("option", {
                        value: "triadic",
                        children: "C'est Le Vie",
                      }),
                      Object(h.jsx)("option", {
                        value: "monochromatic",
                        children: "Reluctant Participant",
                      }),
                      Object(h.jsx)("option", {
                        value: "analogous",
                        children: "When's the next rally?",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Pe = function (e) {
          var t = e.currentPlayer;
          return Object(h.jsxs)(h.Fragment, {
            children: [
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Faithful Foundation?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".religion"),
                    id: "formReligion",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: "solid",
                        children: "Practitioner",
                      }),
                      Object(h.jsx)("option", {
                        value: "round",
                        children: "Agnostic",
                      }),
                      Object(h.jsx)("option", {
                        value: "dotted",
                        children: "God-fearing",
                      }),
                      Object(h.jsx)("option", {
                        value: "uneven",
                        children: "Wiccin",
                      }),
                      Object(h.jsx)("option", {
                        value: "dashed",
                        children: "Undecided",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: "form__row",
                children: [
                  Object(h.jsx)("label", {
                    className: "item__label item__label-select",
                    children: "Cultural Consumption?",
                  }),
                  Object(h.jsxs)(pe.a, {
                    className: "form__control form__control-select",
                    name: "players.".concat(t, ".culture"),
                    id: "formCulture",
                    as: "select",
                    children: [
                      Object(h.jsx)("option", {
                        value: "DEFAULT",
                        children: "Choose...",
                      }),
                      Object(h.jsx)("option", {
                        value: 1,
                        children: "People Magazine reader",
                      }),
                      Object(h.jsx)("option", {
                        value: 2,
                        children: "Netflix binger",
                      }),
                      Object(h.jsx)("option", {
                        value: 3,
                        children: "Museum Crawler",
                      }),
                      Object(h.jsx)("option", {
                        value: 4,
                        children: "Cultural Practitioner",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ce = function (e) {
          var t = e.currentPlayer;
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsxs)("div", {
              className: "form__row",
              children: [
                Object(h.jsx)("label", {
                  className: "item__label item__label-select",
                  children: "Which hue is you?",
                }),
                Object(h.jsxs)(pe.a, {
                  className: "form__control form__control-select",
                  name: "players.".concat(t, ".color"),
                  id: "formColor",
                  as: "select",
                  children: [
                    Object(h.jsx)("option", {
                      value: "DEFAULT",
                      children: "Choose...",
                    }),
                    Object(h.jsx)("option", {
                      value: "chartreuse",
                      children: "Chartreuse",
                    }),
                    Object(h.jsx)("option", {
                      value: "vermilion",
                      children: "Vermilion",
                    }),
                    Object(h.jsx)("option", {
                      value: "cobalt",
                      children: "Cobalt",
                    }),
                    Object(h.jsx)("option", {
                      value: "teal",
                      children: "Teal",
                    }),
                    Object(h.jsx)("option", {
                      value: "kellyGreen",
                      children: "Kelly Green",
                    }),
                    Object(h.jsx)("option", {
                      value: "aubergine",
                      children: "Aubergine",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        we = function (e) {
          var t = e.form,
            n = e.values,
            a = e.formProps,
            r = e.currentPlayer;
          switch (t) {
            case 1:
              return Object(h.jsx)(xe, { values: n, formProps: a });
            case 2:
              return Object(h.jsx)(ye, {
                values: n,
                formProps: a,
                currentPlayer: r,
              });
            case 3:
              return Object(h.jsx)(ve, {
                values: n,
                formProps: a,
                currentPlayer: r,
              });
            case 4:
              return Object(h.jsx)(ge, {
                values: n,
                formProps: a,
                currentPlayer: r,
              });
            case 5:
              return Object(h.jsx)(Ne, {
                values: n,
                formProps: a,
                currentPlayer: r,
              });
            case 6:
              return Object(h.jsx)(Pe, {
                values: n,
                formProps: a,
                currentPlayer: r,
              });
            case 7:
              return Object(h.jsx)(Ce, {
                values: n,
                formProps: a,
                currentPlayer: r,
              });
            default:
              console.log("FormDisplay switch has failed");
          }
        },
        ke =
          (n(136),
          function (e) {
            var t = e.nextText,
              n = e.prevText,
              a = e.handlePrevious;
            return Object(h.jsxs)("div", {
              className: "p-buttons__row",
              "data-testid": "component-FormButtons",
              children: [
                Object(h.jsx)("div", {
                  className: "p-button__col",
                  children: Object(h.jsx)(oe, {
                    onClick: a,
                    text: n,
                    buttonType: "prev",
                  }),
                }),
                Object(h.jsx)("div", {
                  className: "p-button__col",
                  children: Object(h.jsx)(oe, { text: t, buttonType: "next" }),
                }),
              ],
            });
          }),
        Fe = function () {
          return Object(h.jsx)("div", {
            className: "form__row",
            children: Object(h.jsxs)("div", {
              className: "form__instructions",
              children: [
                Object(h.jsx)("p", {
                  className: "instruction__line",
                  children: '"Next Form" to continue',
                }),
                Object(h.jsx)("p", {
                  className: "instruction__line",
                  children: "or",
                }),
                Object(h.jsx)("p", {
                  className: "instruction__line",
                  children: '"Back" to change responses',
                }),
              ],
            }),
          });
        },
        Te =
          (n(137),
          function (e) {
            for (
              var t = e.currentPlayer,
                n = e.numPlayers,
                a = e.players,
                r = [],
                c = 0;
              c < n;
              c++
            )
              r.push(
                Object(h.jsx)(
                  "div",
                  {
                    className: "heading__tab ".concat(
                      c === t ? "heading__tab-active" : ""
                    ),
                    children: a[c].name,
                  },
                  "".concat(a[c].name, "_").concat(c)
                )
              );
            return Object(h.jsx)("div", {
              className: "form__heading",
              children: r,
            });
          }),
        Se = {
          0: "Circle Generator is the artistic brainchild of Carrie Crane. Moving through the sections of the game will create and alter a collection of circles based on your groups common interest and a variety of personality factors. By the end you will have unique visual of how the members of your group are connected to the common interest that brought you together.",
          1: "Choose an interest or activity that connects your group. (event, hobby, career, etc).\nEnter a players name and length of time associate with the common interest.\nOnce each player has entered the information click 'Submit' to begin.\nFor 2 to 5 players.",
          2: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          3: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          4: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          5: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          6: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          7: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          8: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          9: "Choose the option that fits best.\n(Options are meant to be humorous and should not be taken seriously)",
          10: "",
        },
        Ee = (n(138), ["values"]),
        De = function (e) {
          var t = e.onSubmit,
            n = e.initialValues,
            a = e.handlePrevious,
            r = e.currentForm,
            c = e.currentPlayer,
            o = e.numPlayers,
            i = e.players,
            s = c !== o || r < 2,
            l = s
              ? Object(h.jsx)("div", {
                  className: "form__row form__row-instructions",
                  children: Object(h.jsx)("div", {
                    className: "form__instructions",
                    children: Se[r].split("\n").map(function (e, t) {
                      return Object(h.jsx)(
                        "p",
                        { className: "instruction__line", children: e },
                        "instruction-line-".concat(t)
                      );
                    }),
                  }),
                })
              : null;
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(pe.d, {
              initialValues: n,
              onSubmit: function (e, n) {
                return t(e, n);
              },
              children: function (e) {
                var t = e.values,
                  n = Object(he.a)(e, Ee);
                return Object(h.jsxs)(h.Fragment, {
                  children: [
                    1 === r
                      ? null
                      : Object(h.jsx)(Te, {
                          currentPlayer: c,
                          numPlayers: o,
                          players: i,
                        }),
                    Object(h.jsxs)(pe.c, {
                      className: "form ".concat(r > 1 ? "form__stretch" : ""),
                      children: [
                        l,
                        Object(h.jsx)("div", {
                          className: "form__group ".concat(
                            r > 1 ? "form__group-center" : ""
                          ),
                          children: s
                            ? Object(h.jsx)(we, {
                                form: r,
                                currentPlayer: c,
                                values: t,
                                formProps: n,
                              })
                            : Object(h.jsx)(Fe, {}),
                        }),
                        Object(h.jsx)("div", {
                          className: "form__row form__row-buttons",
                          children: Object(h.jsx)(ke, {
                            prevText: "Back",
                            nextText: s ? "Submit" : "Next Form",
                            handlePrevious: a,
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
            }),
          });
        },
        Ae = "GENERATE_SESSION",
        Le = "INITIALIZE_PLAYERS",
        Ie = "START_GAME",
        Re = "END_GAME",
        Ge = "NEXT_FORM",
        Me = "PREV_FORM",
        Ue = "DISPLAY_CIRCLES",
        We = "UPDATE_POLAR_GRID",
        ze = "FINAL_DISPLAY",
        He = "UPDATE_DISPLAY_DIMENSIONS",
        Ve = "NEXT_PLAYER",
        Be = "PREV_PLAYER",
        Ye = {
          _id: "",
          inProgress: !1,
          complete: !1,
          displayGrid: !1,
          numPlayers: 0,
          currentForm: 0,
          playerIds: [],
          interest: "",
          currentPlayer: 0,
          players: {},
          circles: [],
          finalCircles: [],
          updateCircles: !1,
          resizeCircles: !1,
          centerPoint: { x: 0, y: 0 },
          display: {
            resizeRatio: 1,
            centerPoint: { x: 0, y: 0 },
            height: 0,
            width: 0,
            previousHeight: 0,
            previousWidth: 0,
            polarGridPath: "",
          },
        },
        qe = function () {
          return function (e) {
            e({ type: Re });
          };
        },
        Ke = function (e) {
          return function (t) {
            t({ type: Ve, payload: { currentPlayer: e + 1 } });
          };
        },
        Xe = function (e) {
          return (function () {
            var t = Object(i.a)(
              u.a.mark(function t(n, a) {
                var r, c, o, i, s;
                return u.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (r = a().gameState),
                          (c = r.display),
                          (o = r.currentForm),
                          (i = o + 1),
                          (s = e.map(function (e) {
                            return g(e, c.centerPoint);
                          })),
                          n({
                            type: ze,
                            payload: {
                              finalCircles: s,
                              displayGrid: !1,
                              currentForm: i,
                            },
                          });
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })();
        },
        Je = (n(139), ["_id", "display", "players"]),
        Ze = { interest: "", players: [B(), B(), B(), B(), B()] },
        Qe = Object(o.b)(
          function (e) {
            var t = e.gameState,
              n = t._id,
              a = t.display,
              r = t.players,
              c = Object(he.a)(t, Je);
            return {
              centerPoint: a.centerPoint,
              players: r,
              gameId: n,
              session: c,
            };
          },
          {
            nextPlayer: Ke,
            prevPlayer: function (e) {
              return function (t) {
                t({ type: Be, payload: { currentPlayer: e - 1 } });
              };
            },
            nextForm: function (e) {
              return (function () {
                var t = Object(i.a)(
                  u.a.mark(function t(n, a) {
                    var r, c, o, i, s;
                    return u.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = a().gameState),
                              (c = r.players),
                              (o = r.currentPlayer),
                              (i = e + 1),
                              (s = 0 === c.length ? o : 0),
                              (t.next = 5),
                              n({
                                type: Ge,
                                payload: { currentPlayer: s, currentForm: i },
                              })
                            );
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })();
            },
            prevForm: function (e) {
              return (function () {
                var t = Object(i.a)(
                  u.a.mark(function t(n, a) {
                    var r, c;
                    return u.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = a().gameState.numPlayers),
                              (c = e - 1),
                              (t.next = 4),
                              n({
                                type: Me,
                                payload: {
                                  currentForm: c,
                                  currentPlayer: r,
                                  circles: [],
                                },
                              })
                            );
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })();
            },
            endGame: qe,
            finalDisplay: Xe,
          }
        )(function (e) {
          var t = e.socket,
            n = e.session,
            a = e.gameId,
            r = e.players,
            c = e.nextPlayer,
            o = e.prevPlayer,
            s = e.nextForm,
            l = e.prevForm,
            d = e.endGame,
            j = e.centerPoint,
            p = n.currentForm,
            m = n.currentPlayer,
            b = n.numPlayers,
            f = (function () {
              var e = Object(i.a)(
                u.a.mark(function e() {
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (1 !== p) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 3), d();
                        case 3:
                        case 8:
                          e.next = 12;
                          break;
                        case 5:
                          if (0 !== m) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 8), l(p);
                        case 10:
                          return (e.next = 12), o(m);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            O = (function () {
              var e = Object(i.a)(
                u.a.mark(function e(r) {
                  return u.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (1 !== p) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 3), ie(t, a, r);
                        case 3:
                          return (e.next = 5), s(p);
                        case 5:
                        case 9:
                          return e.abrupt("return");
                        case 6:
                          if (7 !== p || m !== b) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 9), ue(t);
                        case 10:
                          if (!(p >= 2 && p <= 7)) {
                            e.next = 22;
                            break;
                          }
                          if (!(m < b)) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 14),
                            se(t, n.playerIds[m], r.players[m], p, j)
                          );
                        case 14:
                          return (e.next = 16), c(m);
                        case 16:
                          e.next = 22;
                          break;
                        case 18:
                          return (e.next = 20), le(t);
                        case 20:
                          return (e.next = 22), s(p);
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsx)("div", {
            className: "form__container ".concat(
              1 === p ? "form__container-border" : ""
            ),
            children: Object(h.jsx)("div", {
              className: "form__scroll",
              children: Object(h.jsx)(De, {
                onSubmit: O,
                handlePrevious: f,
                initialValues: Ze,
                currentForm: p,
                currentPlayer: m,
                numPlayers: b,
                players: r,
              }),
            }),
          });
        }),
        $e =
          (n(140),
          Object(o.b)(function (e) {
            var t = e.gameState;
            return { _id: t._id, currentForm: t.currentForm };
          }, {})(function (e) {
            var t = e.socket,
              n = e._id,
              a = e.currentForm;
            return Object(h.jsxs)("div", {
              className: "app-panel",
              "data-testid": "component-Panel",
              children: [
                Object(h.jsx)("div", {
                  className: "panel__row panel__row-header",
                  children: Object(h.jsx)(q, { currentForm: a }),
                }),
                Object(h.jsx)("div", {
                  className: "panel__row panel__row-content",
                  children:
                    0 === a
                      ? Object(h.jsx)(ne, {})
                      : 8 === a
                      ? Object(h.jsx)(je, { socket: t, gameId: n })
                      : Object(h.jsx)(Qe, { socket: t }),
                }),
              ],
            });
          })),
        et =
          (n(141),
          function (e) {
            var t = e.path;
            return Object(h.jsx)("path", { className: "polarGrid", d: t });
          }),
        tt = function (e) {
          var t,
            n = e.currentForm,
            a = e.playerCircles;
          e.resizeRatio;
          return (
            (t = e.resizeCircles
              ? (function (e, t) {
                  return e;
                })(a)
              : a),
            n > 2
              ? t.map(function (e) {
                  return Object(h.jsx)(h.Fragment, { children: e });
                })
              : Object(h.jsx)(h.Fragment, {})
          );
        },
        nt = function (e) {
          var t = e.socket,
            n = e.display,
            r = e.session,
            c = e.resizePlayerCircles,
            o = n.width,
            i = n.centerPoint;
          return (
            Object(a.useEffect)(
              function () {
                n.polarGridPath &&
                  (function (e, t) {
                    e.emit("fetch-polar-grid", t);
                  })(t, { width: o, centerPoint: i });
              },
              [o, t]
            ),
            Object(h.jsxs)("svg", {
              className: "svg__canvas ".concat(
                8 === r.currentForm ? "svg__canvas-light" : ""
              ),
              children: [
                r.displayGrid
                  ? Object(h.jsx)(et, { path: n.polarGridPath })
                  : null,
                r.currentForm > 2
                  ? Object(h.jsx)(tt, {
                      currentForm: r.currentForm,
                      playerCircles: r.finalCircles.length
                        ? r.finalCircles
                        : r.circles,
                      resizeRatio: n.resizeRatio,
                      resizeCircles: r.resizeCircles,
                      resizePlayerCircles: c,
                    })
                  : null,
              ],
            })
          );
        },
        at = (n(142), ["display"]),
        rt = Object(o.b)(
          function (e) {
            var t = e.gameState;
            return { display: t.display, session: Object(he.a)(t, at) };
          },
          {
            updateDisplayDimensions: function (e) {
              var t = e.height,
                n = e.width;
              return function (e) {
                e({
                  type: He,
                  payload: { height: Math.round(t), width: Math.round(n) },
                });
              };
            },
            generateSession: function () {
              return (function () {
                var e = Object(i.a)(
                  u.a.mark(function e(t) {
                    var n, a;
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), C.post("/games/generateSession", {})
                            );
                          case 2:
                            (n = e.sent),
                              (a = n.data),
                              console.log(a),
                              t({
                                type: Ae,
                                payload: Object(j.a)(
                                  Object(j.a)({}, a.game),
                                  {},
                                  {
                                    currentForm: 1,
                                    displayGrid: !0,
                                    currentPlayer: 0,
                                  }
                                ),
                              });
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            },
            startGame: function () {
              return (function () {
                var e = Object(i.a)(
                  u.a.mark(function e(t) {
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t({
                              type: Ie,
                              payload: {
                                inProgress: !0,
                                currentForm: 1,
                                displayGrid: !0,
                                currentPlayer: 0,
                              },
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            },
          }
        )(function (e) {
          var t = e.socket,
            n = e.display,
            r = e.session,
            c = e.updateDisplayDimensions,
            o = e.generateSession,
            s = (e.startGame, Object(a.useRef)(null));
          Object(a.useEffect)(
            function () {
              var e = (function () {
                var e = Object(i.a)(
                  u.a.mark(function e() {
                    return u.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              c({
                                height: s.current.scrollHeight || null,
                                width: s.current.scrollWidth || null,
                              })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            },
            [c]
          ),
            Object(a.useEffect)(
              function () {
                var e = (function (e, t) {
                  var n = null;
                  return function () {
                    for (
                      var a = arguments.length, r = new Array(a), c = 0;
                      c < a;
                      c++
                    )
                      r[c] = arguments[c];
                    window.clearTimeout(n),
                      (n = window.setTimeout(function () {
                        e.apply(null, r);
                      }, t));
                  };
                })(function () {
                  c({
                    height: s.current.scrollHeight,
                    width: s.current.scrollWidth,
                  });
                }, 500);
                return (
                  window.addEventListener("resize", e),
                  function (t) {
                    return window.removeEventListener("resize", e);
                  }
                );
              },
              [n.height, n.width, c]
            );
          var l = (function () {
            var e = Object(i.a)(
              u.a.mark(function e() {
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), o();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(h.jsx)("div", {
            id: "canvas",
            className: "svg__container",
            ref: s,
            children:
              0 !== r.currentForm
                ? Object(h.jsx)(nt, { socket: t, session: r, display: n })
                : Object(h.jsx)(oe, {
                    onClick: l,
                    text: "Begin Game",
                    buttonType: "start",
                  }),
          });
        }),
        ct = Object(o.b)(
          function (e) {
            var t = e.gameState;
            return { _id: t._id, inProgress: t.inProgress, display: t.display };
          },
          {
            initializePlayers: function (e) {
              return (function () {
                var t = Object(i.a)(
                  u.a.mark(function t(n) {
                    return u.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            n({ type: Le, payload: Object(j.a)({}, e) });
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
            nextPlayer: Ke,
            displayCircles: function (e) {
              return function (t, n) {
                var a = n().gameState.display,
                  r = e.map(function (e) {
                    return g(e, a.centerPoint);
                  });
                console.log(r), t({ type: Ue, payload: { circleSvgs: r } });
              };
            },
            finalDisplay: Xe,
            updatePolarGrid: function (e) {
              return function (t) {
                t({ type: We, payload: e });
              };
            },
            endGame: qe,
          }
        )(function (e) {
          var t = e._id,
            n = e.inProgress,
            r = e.display,
            c = e.displayCircles,
            o = e.finalDisplay,
            l = e.initializePlayers,
            j = e.nextPlayer,
            p = e.updatePolarGrid,
            m = e.endGame,
            b = Object(a.useState)(null),
            f = Object(s.a)(b, 2),
            O = f[0],
            _ = f[1],
            x = r.width,
            y = r.centerPoint;
          return (
            Object(a.useEffect)(
              function () {
                if (n) {
                  var e = Object(d.a)({ auth: { gameId: t } });
                  _(e);
                } else;
              },
              [n]
            ),
            Object(a.useEffect)(
              function () {
                n &&
                  O &&
                  (O.on(
                    "connect",
                    Object(i.a)(
                      u.a.mark(function e() {
                        return u.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  O.emit("fetch-polar-grid", {
                                    width: x,
                                    centerPoint: y,
                                  })
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  ),
                  O.on("initialized-players", function (e) {
                    l(e);
                  }),
                  O.on("polar-grid", function (e) {
                    p(e);
                  }),
                  O.on("display-circles", function (e) {
                    c(e);
                  }),
                  O.on("final-display-circles", function (e) {
                    o(e);
                  }),
                  O.on("restart-game", function (e) {
                    e.endGame ? m() : console.log("end game failed");
                  }));
              },
              [O, t, l, j, m]
            ),
            Object(h.jsx)("div", {
              className: "app",
              "data-testid": "component-App",
              children: Object(h.jsxs)("div", {
                className: "app__display",
                children: [
                  Object(h.jsx)("div", {
                    className: "app__sidebar",
                    children: Object(h.jsx)($e, { socket: O }),
                  }),
                  Object(h.jsx)("div", {
                    className: "app__canvas",
                    children: Object(h.jsx)(rt, { socket: O }),
                  }),
                ],
              }),
            })
          );
        }),
        ot = n(41),
        it = n(96),
        st = n(238),
        lt = n(27),
        ut = Object(ot.b)({
          gameState: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ye,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ae:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(Object(j.a)({}, e), t.payload)
                );
              case Le:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      interest: t.payload.interest,
                      numPlayers: t.payload.numPlayers,
                      players: Object(j.a)(
                        Object(j.a)({}, e.players),
                        t.payload.playersObj
                      ),
                      playerIds: [].concat(
                        Object(lt.a)(e.playerIds),
                        Object(lt.a)(t.payload.playerIds)
                      ),
                    }
                  )
                );
              case Ie:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(Object(j.a)({}, e), t.payload)
                );
              case Re:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(
                    Object(j.a)({}, Ye),
                    {},
                    { display: Object(j.a)({}, e.display) }
                  )
                );
              case Ge:
              case Me:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(Object(j.a)({}, e), t.payload)
                );
              case Ue:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    { circles: Object(lt.a)(t.payload.circleSvgs) }
                  )
                );
              case Ve:
              case Be:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(Object(j.a)({}, e), t.payload)
                );
              case ze:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      currentForm: t.payload.currentForm,
                      displayGrid: t.payload.displayGrid,
                      finalCircles: [].concat(
                        Object(lt.a)(e.finalCircles),
                        Object(lt.a)(t.payload.finalCircles)
                      ),
                    }
                  )
                );
              case We:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      display: Object(j.a)(
                        Object(j.a)({}, e.display),
                        {},
                        { polarGridPath: t.payload }
                      ),
                    }
                  )
                );
              case He:
                return (
                  console.info(t.type, t.payload),
                  Object(j.a)(
                    Object(j.a)({}, e),
                    {},
                    {
                      display: Object(j.a)(
                        Object(j.a)(Object(j.a)({}, e.display), t.payload),
                        {},
                        {
                          centerPoint: {
                            y: parseFloat((t.payload.height / 2).toFixed(4)),
                            x: parseFloat((t.payload.width / 2).toFixed(4)),
                          },
                          oldHeight: e.display.height,
                          oldWidth: e.display.width,
                        }
                      ),
                    }
                  )
                );
              default:
                return e;
            }
          },
          form: st.a,
        }),
        dt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ot.c,
        jt = Object(ot.d)(ut, dt(Object(ot.a)(it.a)));
      c.a.render(
        Object(h.jsx)(o.a, { store: jt, children: Object(h.jsx)(ct, {}) }),
        document.querySelector("#root")
      );
    },
  },
  [[217, 1, 2]],
]);
//# sourceMappingURL=main.3a4b599b.chunk.js.map
