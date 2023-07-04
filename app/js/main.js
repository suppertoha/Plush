/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e = {
      595: () => {
        document.querySelectorAll(".accordion-start-js").forEach((e) => {
          e.addEventListener("click", () => {
            document.querySelectorAll(".accordion-start-js").forEach((t) => {
              t !== e &&
                (t.classList.remove("open"),
                t.nextElementSibling.classList.remove("open"));
            }),
              e.classList.toggle("open");
            let t = e.nextElementSibling;
            t.classList.contains("open")
              ? document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => {
                    t &&
                      t.classList.contains("open") &&
                      t.classList.remove("open");
                  })
              : document
                  .querySelectorAll(".accordion-content-js")
                  .forEach((e) => {
                    t &&
                      !t.classList.contains("open") &&
                      t.classList.add("open");
                  });
          });
        }),
          document
            .querySelectorAll(".accordion-start-js--next")
            .forEach((e) => {
              e.addEventListener("click", () => {
                document
                  .querySelectorAll(".accordion-start-js--next")
                  .forEach((t) => {
                    t !== e &&
                      (t.classList.remove("open"),
                      t.nextElementSibling.classList.remove("open"),
                      (t.nextElementSibling.style.maxHeight = null));
                  }),
                  e.classList.toggle("open");
                let t = e.nextElementSibling;
                t.classList.contains("open")
                  ? document
                      .querySelectorAll(".body-catalog__body")
                      .forEach((e) => {
                        e && (e.style.maxHeight = null),
                          t &&
                            t.classList.contains("open") &&
                            t.classList.remove("open");
                      })
                  : document
                      .querySelectorAll(".body-catalog__body")
                      .forEach((e) => {
                        e && (e.style.maxHeight = null),
                          t &&
                            !t.classList.contains("open") &&
                            t.classList.add("open");
                      });
              });
            });
        const e = document.querySelector(".catalog-search__button"),
          t = document.querySelector("body"),
          s = document.querySelector(".catalog-search__body");
        e && s
          ? (e.addEventListener("click", () => {
              t.classList.add("scroll-hidden");
            }),
            document.addEventListener("click", (n) => {
              e.contains(n.target) ||
                s.contains(n.target) ||
                (t.classList.remove("scroll-hidden"),
                document
                  .querySelectorAll(".catalog-search__body.open")
                  .forEach((e) => {
                    e.classList.remove("open");
                  }));
            }))
          : console.error(
              "Ошибка: Не удалось найти один или несколько элементов."
            );
      },
      469: () => {
        document.querySelectorAll(".card-main__card").forEach((e) => {
          e.addEventListener("click", function (e) {
            window.innerWidth < 1024 &&
              (this.classList.contains("active") ||
                this.classList.add("active"));
          });
        });
      },
      339: () => {
        document.querySelectorAll(".dropdown").forEach(function (e) {
          const t = e.querySelectorAll(".dropdown__list-item"),
            s = e.querySelector(".dropdown__input-hidden"),
            n = e.querySelector(".dropdown__button span"),
            i = e.querySelector(".dropdown__button"),
            a = e.querySelector(".dropdown__list");
          n.addEventListener("click", function () {
            a.classList.toggle("visible"),
              i.classList.toggle("active"),
              i.classList.remove("color"),
              this.classList.toggle("active");
          }),
            t.forEach(function (e) {
              e.addEventListener("click", function (e) {
                e.stopPropagation(),
                  (n.innerText = this.innerText),
                  n.focus(),
                  (s.value = this.dataset.value),
                  a.classList.remove("visible"),
                  n.classList.remove("active"),
                  n.classList.add("icon"),
                  i.classList.remove("active"),
                  i.classList.add("color");
              });
            }),
            document.addEventListener("click", function (e) {
              e.target !== n &&
                (a.classList.remove("visible"),
                n.classList.remove("active"),
                i.classList.remove("active"));
            }),
            document.addEventListener("keydown", function (e) {
              ("Tab" !== e.key && "Escape" !== e.key) ||
                (a.classList.remove("visible"),
                n.classList.remove("active"),
                i.classList.remove("active"));
            });
        });
      },
      626: () => {
        const e = document.querySelector(".header-wrapper");
        if (e && e.offsetHeight) {
          let t = document.querySelector(".description-card");
          t &&
            window.addEventListener("scroll", function () {
              setTimeout(() => {
                const s = e.offsetHeight;
                window.pageYOffset > 0
                  ? ((t.style.top = `${s + 20}px`), e.classList.add("active"))
                  : ((t.style.top = 0), e.classList.remove("active"));
              }, 1);
            }),
            window.addEventListener("scroll", function () {
              window.pageYOffset > 0
                ? e.classList.add("active")
                : e.classList.remove("active");
            });
        }
      },
      269: () => {
        const e = document.querySelector(".input-container");
        if (e) {
          const t = e.querySelectorAll(".input-number");
          t.forEach((e, s) => {
            e.addEventListener("input", () => {
              const n = e.value;
              /^\d{0,1}$/.test(n) || (e.value = ""),
                1 === n.length
                  ? (s < t.length - 1
                      ? (t[s + 1].focus(), t[s + 1].select())
                      : e.blur(),
                    document
                      .querySelector(`.info-modal__item:nth-child(${s + 1})`)
                      .classList.add("active"))
                  : document
                      .querySelector(`.info-modal__item:nth-child(${s + 1})`)
                      .classList.remove("active");
            }),
              e.addEventListener("keydown", (n) => {
                8 === n.keyCode &&
                  "" === e.value &&
                  s > 0 &&
                  (t[s - 1].focus(), t[s - 1].select());
              });
          });
        }
      },
      241: () => {
        let e = document.querySelectorAll(".phone-mask");
        if (e.length > 0) {
          let t = { mask: "+{7}(000)000-00-00" };
          e.forEach(function (e) {
            IMask(e, t);
          });
        }
      },
      824: () => {
        const e = document.querySelector(".mouse-hover"),
          t = document.body;
        e &&
          (e.addEventListener("mouseover", () => {
            t.classList.add("scroll-hidden");
          }),
          e.addEventListener("mouseout", () => {
            t.classList.remove("scroll-hidden");
          }));
      },
      726: () => {
        const e = document.querySelector(".scrollable-area");
        new PerfectScrollbar(e);
      },
      218: () => {
        const e = document.querySelector(".nav__item_mobi"),
          t = document.querySelector(".search__field");
        null !== t &&
          (document.addEventListener("click", (e) => {
            e.target.closest(".nav__item_mobi") ||
              e.target.closest(".search__field") ||
              t.classList.remove("active");
          }),
          e.addEventListener("click", (e) => {
            e.preventDefault(), t.classList.toggle("active");
          }),
          window.addEventListener("scroll", function () {
            window.pageYOffset > 0
              ? t.classList.add("height")
              : t.classList.remove("height");
          }));
      },
      266: () => {
        !(function () {
          const e = document.querySelector(".search-form");
          e &&
            (e.addEventListener("click", () => {
              e.classList.add("search-form--active"),
                e.firstElementChild.focus();
              let t = document.querySelector(".search-form__btn");
              t &&
                setTimeout(() => {
                  t.setAttribute("type", "submit");
                }, 500);
            }),
            document.addEventListener("click", (t) => {
              let s = t.target,
                n = s == e || e.contains(s),
                i = e.classList.contains("search-form--active");
              if (!n && i) {
                e.classList.remove("search-form--active");
                let t = document.querySelector(".search-form__btn");
                t && t.setAttribute("type", "button");
              }
            }));
        })();
      },
      154: () => {
        const e = document.querySelector(".header__body .visible-links"),
          t = document.querySelector(".header__body .hidden-links"),
          s = document.querySelector(".nav-text"),
          n = [],
          i = () => {
            const i = document.querySelector(".header__body"),
              a =
                s && s.classList.contains("hidden")
                  ? i.offsetWidth
                  : i.offsetWidth - (s && s.offsetWidth) - 0;
            e &&
              t &&
              s &&
              i &&
              (e.offsetWidth > a
                ? (n.push(e.offsetWidth),
                  t.insertBefore(e.lastElementChild, t.firstElementChild),
                  s.classList.contains("hidden") &&
                    t.children.length > 0 &&
                    s.classList.remove("hidden"))
                : (a > n[n.length - 1] &&
                    (e.appendChild(t.firstElementChild), n.pop()),
                  n.length < 1 &&
                    (s.classList.add("hidden"), t.classList.add("hidden"))),
              s.setAttribute("count", n.length),
              t.children.length > 0
                ? ((s.textContent = "Еще"), s.classList.add("active"))
                : ((s.textContent = ""), s.classList.remove("active")));
          };
        window &&
          (window.addEventListener("resize", i),
          window.addEventListener("DOMContentLoaded", i)),
          s &&
            (s.addEventListener("click", () => {
              t && t.classList.toggle("hidden");
            }),
            document.addEventListener("click", (e) => {
              !s.contains(e.target) && t && t.classList.add("hidden");
            })),
          i();
      },
      681: () => {
        function e() {
          const e = document.querySelectorAll(".text-container"),
            t = document.querySelectorAll(".text-btn"),
            s = document.querySelectorAll(".reviews-card__text");
          for (let n = 0; n < s.length; n++) {
            const i = s[n],
              a = e[n],
              r = t[n];
            i &&
              a &&
              r &&
              (i.offsetHeight > 200 &&
                (a.classList.add("active"),
                a.classList.contains("active") && (r.style.display = "block")),
              r.addEventListener("click", () => {
                a.classList.toggle("active"),
                  r.classList.toggle("active"),
                  a.classList.contains("active") || (r.style.display = "none");
              }));
          }
        }
        e(), window.addEventListener("resize", e);
      },
      462: () => {
        const e = document.querySelector(".mySwiper"),
          t = document.querySelector(".mySwiper2");
        if (e && t) {
          const s = new Swiper(e, {
            loop: !0,
            spaceBetween: 5,
            slidesPerView: 4,
            freeMode: !0,
            watchSlidesProgress: !0,
            navigation: {
              nextEl: ".slider-carousel__next",
              prevEl: ".slider-carousel__prev",
            },
            breakpoints: { 600: { spaceBetween: 10, slidesPerView: 5 } },
          });
          new Swiper(t, { loop: !0, spaceBetween: 10, thumbs: { swiper: s } });
        }
      },
      579: () => {
        const e = document.querySelectorAll(".stepper");
        if (e.length > 0) {
          const t = () => !!/iPhone|iPad|iPod/i.test(navigator.userAgent);
          e.forEach((e) => {
            const s = e.querySelector(".stepper__input"),
              n = e.querySelector(".stepper__btn--up"),
              i = e.querySelector(".stepper__btn--down"),
              a = e.querySelector(".stepper__field"),
              r = e.querySelector(".stepper__text");
            let o = s.value;
            s.addEventListener("keyup", (e) => {
              let n = e.currentTarget;
              "0" == n.value && (n.value = 1),
                t()
                  ? (n.style.width = n.value.length + 0.6 + "ex")
                  : (n.style.width = n.value.length + 1.2 + "ex"),
                (o = s.value),
                o <= 1
                  ? (i.classList.add("stepper__btn--disabled"), (o = 1))
                  : i.classList.remove("stepper__btn--disabled");
            }),
              a.addEventListener("click", () => {
                (r.style.display = "none"), (s.style.minWidth = "2em");
              }),
              s.addEventListener("keypress", (e) => {
                !(function (e) {
                  var t = e.which ? e.which : e.keyCode;
                  t > 31 && (t < 48 || t > 57)
                    ? e.preventDefault()
                    : t >= 48 &&
                      t <= 57 &&
                      (e.target.value || (e.target.value = 1));
                })(e);
              }),
              s.addEventListener("change", (e) => {
                let t = e.currentTarget;
                t.value || (t.value = 1),
                  (o = s.value),
                  o <= 1
                    ? (i.classList.add("stepper__btn--disabled"), (o = 1))
                    : i.classList.remove("stepper__btn--disabled");
              }),
              n.addEventListener("click", (e) => {
                e.preventDefault(),
                  o < 0 && (o = 0),
                  o++,
                  o <= 1
                    ? (i.classList.add("stepper__btn--disabled"), (o = 1))
                    : i.classList.remove("stepper__btn--disabled"),
                  (s.value = o),
                  t()
                    ? (s.style.width = s.value.length + 0.6 + "ex")
                    : (s.style.width = s.value.length + 1.2 + "ex");
              }),
              s.addEventListener("click", () => {
                "1" === s.value && (s.value = "12");
              }),
              i.addEventListener("click", (e) => {
                e.preventDefault(),
                  o <= 0 ? (o = 0) : o--,
                  o <= 1
                    ? (i.classList.add("stepper__btn--disabled"), (o = 1))
                    : i.classList.remove("stepper__btn--disabled"),
                  (s.value = o),
                  t()
                    ? (s.style.width = s.value.length + 0.6 + "ex")
                    : (s.style.width = s.value.length + 1.2 + "ex");
              });
          });
        }
      },
      158: () => {
        const e = document.querySelectorAll(".tabs-button"),
          t = document.querySelectorAll(".tab-content");
        if (e.length > 0 && t.length > 0) {
          function s(e) {
            e.parentNode.prepend(e);
          }
          s(e[0]),
            e.forEach((n) => {
              n.addEventListener("click", () => {
                e.forEach((e) => e.classList.remove("active")),
                  n.classList.add("active"),
                  t.forEach((e) => e.classList.remove("active"));
                const i = n.dataset.tab;
                document
                  .querySelector('.tab-content[data-tab="' + i + '"]')
                  .classList.add("active"),
                  s(n);
              });
            });
        }
      },
      524: () => {
        !(function () {
          const e = document.querySelector("[data-burger]"),
            t = document.querySelector("[data-menu]"),
            s = document.querySelectorAll("[data-menu-item]"),
            n = document.querySelector("[data-menu-overlay]");
          function i() {
            e.setAttribute("aria-expanded", "false"),
              e.setAttribute("aria-label", "Открыть меню"),
              e.classList.remove("burger--active"),
              t.classList.remove("menu--active");
            const s = -1 * parseInt(document.body.style.top, 10);
            (document.body.style.position = ""),
              (document.body.style.top = ""),
              window.scrollTo(0, s);
          }
          e &&
            e.addEventListener("click", (s) => {
              if (
                (e.classList.toggle("burger--active"),
                t.classList.toggle("menu--active"),
                t.classList.contains("menu--active"))
              )
                e.setAttribute("aria-expanded", "true"),
                  e.setAttribute("aria-label", "Закрыть меню"),
                  (function () {
                    const e =
                      window.pageYOffset || document.documentElement.scrollTop;
                    (document.body.style.position = "fixed"),
                      (document.body.style.top = -e + "px");
                  })();
              else {
                e.setAttribute("aria-expanded", "false"),
                  e.setAttribute("aria-label", "Открыть меню");
                const t = -1 * parseInt(document.body.style.top, 10);
                (document.body.style.position = ""),
                  (document.body.style.top = ""),
                  window.scrollTo(0, t);
              }
            }),
            n &&
              n.addEventListener("click", () => {
                i();
              }),
            s.length > 0 &&
              s.forEach((e) => {
                e.addEventListener("click", () => {
                  i();
                });
              }),
            document.addEventListener("click", (s) => {
              t &&
                !t.contains(s.target) &&
                e &&
                !e.contains(s.target) &&
                t.classList.contains("menu--active") &&
                i();
            });
        })();
      },
      598: () => {
        function e(e) {
          var t = !0,
            s = !1,
            n = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function a(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function r(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function o(e) {
            t = !1;
          }
          function l() {
            document.addEventListener("mousemove", d),
              document.addEventListener("mousedown", d),
              document.addEventListener("mouseup", d),
              document.addEventListener("pointermove", d),
              document.addEventListener("pointerdown", d),
              document.addEventListener("pointerup", d),
              document.addEventListener("touchmove", d),
              document.addEventListener("touchstart", d),
              document.addEventListener("touchend", d);
          }
          function d(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", d),
              document.removeEventListener("mousedown", d),
              document.removeEventListener("mouseup", d),
              document.removeEventListener("pointermove", d),
              document.removeEventListener("pointerdown", d),
              document.removeEventListener("pointerup", d),
              document.removeEventListener("touchmove", d),
              document.removeEventListener("touchstart", d),
              document.removeEventListener("touchend", d));
          }
          document.addEventListener(
            "keydown",
            function (s) {
              s.metaKey ||
                s.altKey ||
                s.ctrlKey ||
                (a(e.activeElement) && r(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", o, !0),
            document.addEventListener("pointerdown", o, !0),
            document.addEventListener("touchstart", o, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (s && (t = !0), l());
              },
              !0
            ),
            l(),
            e.addEventListener(
              "focus",
              function (e) {
                var s, n, o;
                a(e.target) &&
                  (t ||
                    ((n = (s = e.target).type),
                    ("INPUT" === (o = s.tagName) && i[n] && !s.readOnly) ||
                      ("TEXTAREA" === o && !s.readOnly) ||
                      s.isContentEditable)) &&
                  r(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                a(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((s = !0),
                  window.clearTimeout(n),
                  (n = window.setTimeout(function () {
                    s = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    s(598);
    const e = {
      windowEl: window,
      documentEl: document,
      htmlEl: document.documentElement,
      bodyEl: document.body,
    };
    function t(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function n(e = {}, s = {}) {
      Object.keys(s).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = s[i])
          : t(s[i]) && t(e[i]) && Object.keys(s[i]).length > 0 && n(e[i], s[i]);
      });
    }
    console.log(
      (() => {
        const t = navigator.userAgent || navigator.vendor || window.opera;
        return /android/i.test(t)
          ? (e.htmlEl.classList.add("page--android"), "Android")
          : /iPad|iPhone|iPod/.test(t) && !window.MSStream
          ? (e.htmlEl.classList.add("page--ios"), "iOS")
          : "unknown";
      })()
    ),
      new (class {
        constructor(e) {
          (this.options = Object.assign(
            { isOpen: () => {}, isClose: () => {} },
            e
          )),
            (this.modal = document.querySelector(".graph-modal")),
            (this.speed = 300),
            (this.animation = "fade"),
            (this._reOpen = !1),
            (this._nextContainer = !1),
            (this.modalContainer = !1),
            (this.isOpen = !1),
            (this.previousActiveElement = !1),
            (this._focusElements = [
              "a[href]",
              "input",
              "select",
              "textarea",
              "button",
              "iframe",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this._fixBlocks = document.querySelectorAll(".fix-block")),
            this.events();
        }
        events() {
          if (this.modal) {
            let e;
            document.addEventListener("click", (e) => {
              const t = e.target.closest("[data-graph-path]");
              if (t) {
                let e = t.dataset.graphPath,
                  s = t.dataset.graphAnimation,
                  n = t.dataset.graphSpeed;
                return (
                  (this.animation = s || "fade"),
                  (this.speed = n ? parseInt(n) : 300),
                  (this._nextContainer = document.querySelector(
                    `[data-graph-target="${e}"]`
                  )),
                  void this.open()
                );
              }
              e.target.closest(".js-modal-close") && this.close();
            }),
              window.addEventListener("keydown", (e) => {
                27 == e.keyCode && this.isOpen && this.close(),
                  9 == e.which && this.isOpen && this.focusCatch(e);
              }),
              document.addEventListener("click", (e) => {
                e.target.classList.contains("graph-modal") &&
                  e.target.classList.contains("is-open") &&
                  this.close();
              }),
              this.modal.addEventListener("touchmove", (e) => {
                e.preventDefault();
              }),
              this.modal.addEventListener("touchstart", (t) => {
                e = t.touches[0].clientY;
              }),
              this.modal.addEventListener("touchmove", (t) => {
                const s = t.touches[0].clientY - e;
                Math.abs(s) > 10 && t.preventDefault();
              });
          }
        }
        open(e) {
          if (
            ((this.previousActiveElement = document.activeElement), this.isOpen)
          )
            return (this.reOpen = !0), void this.close();
          (this.modalContainer = this._nextContainer),
            e &&
              (this.modalContainer = document.querySelector(
                `[data-graph-target="${e}"]`
              )),
            this.modalContainer.scrollTo(0, 0),
            this.modal.style.setProperty(
              "--transition-time",
              this.speed / 1e3 + "s"
            ),
            this.modal.classList.add("is-open"),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.disableScroll(),
            this.modalContainer.classList.add("graph-modal-open"),
            this.modalContainer.classList.add(this.animation),
            setTimeout(() => {
              this.options.isOpen(this),
                this.modalContainer.classList.add("animate-open"),
                (this.isOpen = !0),
                this.focusTrap();
            }, this.speed);
        }
        close() {
          this.modalContainer &&
            (this.modalContainer.classList.remove("animate-open"),
            this.modalContainer.classList.remove(this.animation),
            this.modal.classList.remove("is-open"),
            this.modalContainer.classList.remove("graph-modal-open"),
            this.enableScroll(),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.options.isClose(this),
            (this.isOpen = !1),
            this.focusTrap(),
            this.reOpen && ((this.reOpen = !1), this.open()));
        }
        focusCatch(e) {
          const t = this.modalContainer.querySelectorAll(this._focusElements),
            s = Array.prototype.slice.call(t),
            n = s.indexOf(document.activeElement);
          e.shiftKey &&
            0 === n &&
            (s[s.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              n !== s.length - 1 ||
              (s[0].focus(), e.preventDefault());
        }
        focusTrap() {
          const e = this.modalContainer.querySelectorAll(this._focusElements);
          this.isOpen
            ? e.length && e[0].focus()
            : this.previousActiveElement.focus();
        }
        disableScroll() {
          let e = window.scrollY;
          this.lockPadding(),
            document.body.classList.add("disable-scroll"),
            (document.body.dataset.position = e),
            (document.body.style.top = -e + "px");
        }
        enableScroll() {
          let e = parseInt(document.body.dataset.position, 10);
          this.unlockPadding(),
            (document.body.style.top = "auto"),
            document.body.classList.remove("disable-scroll"),
            window.scrollTo({ top: e, left: 0 }),
            document.body.removeAttribute("data-position");
        }
        lockPadding() {
          let e = window.innerWidth - document.body.offsetWidth + "px";
          this._fixBlocks.forEach((t) => {
            t.style.paddingRight = e;
          }),
            (document.body.style.paddingRight = e);
        }
        unlockPadding() {
          this._fixBlocks.forEach((e) => {
            e.style.paddingRight = "0px";
          }),
            (document.body.style.paddingRight = "0px");
        }
      })(),
      s(524),
      s(595);
    const i = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function a() {
      const e = "undefined" != typeof document ? document : {};
      return n(e, i), e;
    }
    const r = {
      document: i,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function o() {
      const e = "undefined" != typeof window ? window : {};
      return n(e, r), e;
    }
    class l extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function d(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...d(e)) : t.push(e);
        }),
        t
      );
    }
    function c(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function p(e, t) {
      const s = o(),
        n = a();
      let i = [];
      if (!t && e instanceof l) return e;
      if (!e) return new l(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof l) return e;
        i = e;
      }
      return new l(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    p.fn = l.prototype;
    const u = "resize scroll".split(" ");
    function h(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            u.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    h("click"),
      h("blur"),
      h("focus"),
      h("focusin"),
      h("focusout"),
      h("keyup"),
      h("keydown"),
      h("keypress"),
      h("submit"),
      h("change"),
      h("mousedown"),
      h("mousemove"),
      h("mouseup"),
      h("mouseenter"),
      h("mouseleave"),
      h("mouseout"),
      h("mouseover"),
      h("touchstart"),
      h("touchend"),
      h("touchmove"),
      h("resize"),
      h("scroll");
    const m = {
      addClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        return (
          c(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = d(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function a(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), p(t).is(s))) n.apply(t, i);
          else {
            const e = p(t).parents();
            for (let t = 0; t < e.length; t += 1)
              p(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const a = this[e];
            let r;
            if (
              (!s && a.dom7Listeners
                ? (r = a.dom7Listeners[t])
                : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (a.removeEventListener(t, s.proxyListener, i),
                    r.splice(e, 1))
                  : n ||
                    (a.removeEventListener(t, s.proxyListener, i),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = o(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const a = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(a, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = o();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = o(),
            t = a(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            l = s.clientLeft || i.clientLeft || 0,
            d = s === e ? e.scrollY : s.scrollTop,
            c = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + d - r, left: n.left + c - l };
        }
        return null;
      },
      css: function (e, t) {
        const s = o();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = o(),
          s = a(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = p(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof l) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return p([]);
        if (e < 0) {
          const s = t + e;
          return p(s < 0 ? [] : [this[s]]);
        }
        return p([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = a();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof l)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = a();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof l)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e)
              ? p([this[0].nextElementSibling])
              : p([])
            : this[0].nextElementSibling
            ? p([this[0].nextElementSibling])
            : p([])
          : p([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return p([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? p(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return p(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && p(t.previousElementSibling).is(e)
              ? p([t.previousElementSibling])
              : p([])
            : t.previousElementSibling
            ? p([t.previousElementSibling])
            : p([]);
        }
        return p([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return p([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? p(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return p(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? p(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return p(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? p(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return p(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return p(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !p(n[s]).is(e)) || t.push(n[s]);
        }
        return p(t);
      },
      filter: function (e) {
        return p(c(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(m).forEach((e) => {
      Object.defineProperty(p.fn, e, { value: m[e], writable: !0 });
    });
    const f = p;
    function v(e, t = 0) {
      return setTimeout(e, t);
    }
    function g() {
      return Date.now();
    }
    function b(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function w(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const a = e[i];
        if (
          null != a &&
          ((n = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(a, n);
            void 0 !== i &&
              i.enumerable &&
              (b(t[n]) && b(a[n])
                ? a[n].__swiper__
                  ? (t[n] = a[n])
                  : w(t[n], a[n])
                : !b(t[n]) && b(a[n])
                ? ((t[n] = {}), a[n].__swiper__ ? (t[n] = a[n]) : w(t[n], a[n]))
                : (t[n] = a[n]));
          }
        }
      }
      var n;
      return t;
    }
    function y(e, t, s) {
      e.style.setProperty(t, s);
    }
    function E({ swiper: e, targetPosition: t, side: s }) {
      const n = o(),
        i = -e.translate;
      let a,
        r = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const d = t > i ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        p = () => {
          (a = new Date().getTime()), null === r && (r = a);
          const o = Math.max(Math.min((a - r) / l, 1), 0),
            d = 0.5 - Math.cos(o * Math.PI) / 2;
          let u = i + d * (t - i);
          if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(p);
        };
      p();
    }
    let S, C, T;
    function x() {
      return (
        S ||
          (S = (function () {
            const e = o(),
              t = a();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        S
      );
    }
    const L = {
        on(e, t, s) {
          const n = this;
          if ("function" != typeof t) return n;
          const i = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              n.eventsListeners[e] || (n.eventsListeners[e] = []),
                n.eventsListeners[e][i](t);
            }),
            n
          );
        },
        once(e, t, s) {
          const n = this;
          if ("function" != typeof t) return n;
          function i(...s) {
            n.off(e, i),
              i.__emitterProxy && delete i.__emitterProxy,
              t.apply(n, s);
          }
          return (i.__emitterProxy = t), n.on(e, i, s);
        },
        onAny(e, t) {
          const s = this;
          if ("function" != typeof e) return s;
          const n = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((n, i) => {
                      (n === t ||
                        (n.__emitterProxy && n.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(i, 1);
                    });
              }),
              s)
            : s;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let s, n, i;
          return (
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
              : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
            n.unshift(i),
            (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(i, [e, ...n]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            t
          );
        },
      },
      k = {
        updateSize: function () {
          const e = this;
          let t, s;
          const n = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : n[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : n[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(n.css("padding-left") || 0, 10) -
                parseInt(n.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(n.css("padding-top") || 0, 10) -
                parseInt(n.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const n = e.params,
            { $wrapperEl: i, size: a, rtlTranslate: r, wrongRTL: o } = e,
            l = e.virtual && n.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = i.children(`.${e.params.slideClass}`),
            p = l ? e.virtual.slides.length : c.length;
          let u = [];
          const h = [],
            m = [];
          let f = n.slidesOffsetBefore;
          "function" == typeof f && (f = n.slidesOffsetBefore.call(e));
          let v = n.slidesOffsetAfter;
          "function" == typeof v && (v = n.slidesOffsetAfter.call(e));
          const g = e.snapGrid.length,
            b = e.slidesGrid.length;
          let w = n.spaceBetween,
            E = -f,
            S = 0,
            C = 0;
          if (void 0 === a) return;
          "string" == typeof w &&
            w.indexOf("%") >= 0 &&
            (w = (parseFloat(w.replace("%", "")) / 100) * a),
            (e.virtualSize = -w),
            r
              ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            n.centeredSlides &&
              n.cssMode &&
              (y(e.wrapperEl, "--swiper-centered-offset-before", ""),
              y(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const T = n.grid && n.grid.rows > 1 && e.grid;
          let x;
          T && e.grid.initSlides(p);
          const L =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => void 0 !== n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let i = 0; i < p; i += 1) {
            x = 0;
            const r = c.eq(i);
            if (
              (T && e.grid.updateSlide(i, r, p, t), "none" !== r.css("display"))
            ) {
              if ("auto" === n.slidesPerView) {
                L && (c[i].style[t("width")] = "");
                const a = getComputedStyle(r[0]),
                  o = r[0].style.transform,
                  l = r[0].style.webkitTransform;
                if (
                  (o && (r[0].style.transform = "none"),
                  l && (r[0].style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  x = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                else {
                  const e = s(a, "width"),
                    t = s(a, "padding-left"),
                    n = s(a, "padding-right"),
                    i = s(a, "margin-left"),
                    o = s(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) x = e + i + o;
                  else {
                    const { clientWidth: s, offsetWidth: a } = r[0];
                    x = e + t + n + i + o + (a - s);
                  }
                }
                o && (r[0].style.transform = o),
                  l && (r[0].style.webkitTransform = l),
                  n.roundLengths && (x = Math.floor(x));
              } else
                (x = (a - (n.slidesPerView - 1) * w) / n.slidesPerView),
                  n.roundLengths && (x = Math.floor(x)),
                  c[i] && (c[i].style[t("width")] = `${x}px`);
              c[i] && (c[i].swiperSlideSize = x),
                m.push(x),
                n.centeredSlides
                  ? ((E = E + x / 2 + S / 2 + w),
                    0 === S && 0 !== i && (E = E - a / 2 - w),
                    0 === i && (E = E - a / 2 - w),
                    Math.abs(E) < 0.001 && (E = 0),
                    n.roundLengths && (E = Math.floor(E)),
                    C % n.slidesPerGroup == 0 && u.push(E),
                    h.push(E))
                  : (n.roundLengths && (E = Math.floor(E)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                      e.params.slidesPerGroup ==
                      0 && u.push(E),
                    h.push(E),
                    (E = E + x + w)),
                (e.virtualSize += x + w),
                (S = x),
                (C += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, a) + v),
            r &&
              o &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
            n.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
            T && e.grid.updateWrapperSize(x, u, t),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < u.length; s += 1) {
              let i = u[s];
              n.roundLengths && (i = Math.floor(i)),
                u[s] <= e.virtualSize - a && t.push(i);
            }
            (u = t),
              Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 &&
                u.push(e.virtualSize - a);
          }
          if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
            const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
            c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
              [s]: `${w}px`,
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
              (e -= n.spaceBetween);
            const t = e - a;
            u = u.map((e) => (e < 0 ? -f : e > t ? t + v : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (
              (m.forEach((t) => {
                e += t + (n.spaceBetween ? n.spaceBetween : 0);
              }),
              (e -= n.spaceBetween),
              e < a)
            ) {
              const t = (a - e) / 2;
              u.forEach((e, s) => {
                u[s] = e - t;
              }),
                h.forEach((e, s) => {
                  h[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: u,
              slidesGrid: h,
              slidesSizesGrid: m,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            y(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
              y(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - m[m.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          p !== d && e.emit("slidesLengthChange"),
            u.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            n = t.virtual && t.params.virtual.enabled;
          let i,
            a = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const r = (e) =>
            n
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                s.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                s.push(r(e));
              }
          else s.push(r(t.activeIndex));
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              const e = s[i].offsetHeight;
              a = e > a ? e : a;
            }
          (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            s = t.params,
            { slides: n, rtlTranslate: i, snapGrid: a } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let r = -e;
          i && (r = e),
            n.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < n.length; e += 1) {
            const o = n[e];
            let l = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
            const d =
                (r + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + s.spaceBetween),
              c =
                (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + s.spaceBetween),
              p = -(r - l),
              u = p + t.slidesSizesGrid[e];
            ((p >= 0 && p < t.size - 1) ||
              (u > 1 && u <= t.size) ||
              (p <= 0 && u >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(e),
              n.eq(e).addClass(s.slideVisibleClass)),
              (o.progress = i ? -d : d),
              (o.originalProgress = i ? -c : c);
          }
          t.visibleSlides = f(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: a, isEnd: r } = t;
          const o = a,
            l = r;
          0 === n
            ? ((i = 0), (a = !0), (r = !0))
            : ((i = (e - t.minTranslate()) / n), (a = i <= 0), (r = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: a, isEnd: r }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            a && !o && t.emit("reachBeginning toEdge"),
            r && !l && t.emit("reachEnd toEdge"),
            ((o && !a) || (l && !r)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: n,
              activeIndex: i,
              realIndex: a,
            } = e,
            r = e.virtual && s.virtual.enabled;
          let o;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (o = r
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            o.addClass(s.slideActiveClass),
            s.loop &&
              (o.hasClass(s.slideDuplicateClass)
                ? n
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : n
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let l = o
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(s.slideNextClass));
          let d = o
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === d.length &&
            ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? n
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : n
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              d.hasClass(s.slideDuplicateClass)
                ? n
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : n
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: n,
              snapGrid: i,
              params: a,
              activeIndex: r,
              realIndex: o,
              snapIndex: l,
            } = t;
          let d,
            c = e;
          if (void 0 === c) {
            for (let e = 0; e < n.length; e += 1)
              void 0 !== n[e + 1]
                ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                  ? (c = e)
                  : s >= n[e] && s < n[e + 1] && (c = e + 1)
                : s >= n[e] && (c = e);
            a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (i.indexOf(s) >= 0) d = i.indexOf(s);
          else {
            const e = Math.min(a.slidesPerGroupSkip, c);
            d = e + Math.floor((c - e) / a.slidesPerGroup);
          }
          if ((d >= i.length && (d = i.length - 1), c === r))
            return void (
              d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
            );
          const p = parseInt(
            t.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          Object.assign(t, {
            snapIndex: d,
            realIndex: p,
            previousIndex: r,
            activeIndex: c,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            n = f(e).closest(`.${s.slideClass}`)[0];
          let i,
            a = !1;
          if (n)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === n) {
                (a = !0), (i = e);
                break;
              }
          if (!n || !a)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = n),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  f(n).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
    function $({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: a } = e;
      let r = s;
      if (
        (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== a)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === r
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const P = {
        slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const a = this;
          let r = e;
          r < 0 && (r = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: p,
            rtlTranslate: u,
            wrapperEl: h,
            enabled: m,
          } = a;
          if (
            (a.animating && o.preventInteractionOnTransition) ||
            (!m && !n && !i)
          )
            return !1;
          const f = Math.min(a.params.slidesPerGroupSkip, r);
          let v = f + Math.floor((r - f) / a.params.slidesPerGroup);
          v >= l.length && (v = l.length - 1),
            (p || o.initialSlide || 0) === (c || 0) &&
              s &&
              a.emit("beforeSlideChangeStart");
          const g = -l[v];
          if ((a.updateProgress(g), o.normalizeSlideIndex))
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * g),
                s = Math.floor(100 * d[e]),
                n = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? t >= s && t < n - (n - s) / 2
                  ? (r = e)
                  : t >= s && t < n && (r = e + 1)
                : t >= s && (r = e);
            }
          if (a.initialized && r !== p) {
            if (!a.allowSlideNext && g < a.translate && g < a.minTranslate())
              return !1;
            if (
              !a.allowSlidePrev &&
              g > a.translate &&
              g > a.maxTranslate() &&
              (p || 0) !== r
            )
              return !1;
          }
          let b;
          if (
            ((b = r > p ? "next" : r < p ? "prev" : "reset"),
            (u && -g === a.translate) || (!u && g === a.translate))
          )
            return (
              a.updateActiveIndex(r),
              o.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              "slide" !== o.effect && a.setTranslate(g),
              "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)),
              !1
            );
          if (o.cssMode) {
            const e = a.isHorizontal(),
              s = u ? g : -g;
            if (0 === t) {
              const t = a.virtual && a.params.virtual.enabled;
              t &&
                ((a.wrapperEl.style.scrollSnapType = "none"),
                (a._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (a.wrapperEl.style.scrollSnapType = ""),
                      (a._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!a.support.smoothScroll)
                return (
                  E({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            a.setTransition(t),
            a.setTranslate(g),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, n),
            a.transitionStart(s, b),
            0 === t
              ? a.transitionEnd(s, b)
              : a.animating ||
                ((a.animating = !0),
                a.onSlideToWrapperTransitionEnd ||
                  (a.onSlideToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      (a.onSlideToWrapperTransitionEnd = null),
                      delete a.onSlideToWrapperTransitionEnd,
                      a.transitionEnd(s, b));
                  }),
                a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
          const i = this;
          let a = e;
          return i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, s, n);
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          const n = this,
            { animating: i, enabled: a, params: r } = n;
          if (!a) return n;
          let o = r.slidesPerGroup;
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
          const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : o;
          if (r.loop) {
            if (i && r.loopPreventsSlide) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          return r.rewind && n.isEnd
            ? n.slideTo(0, e, t, s)
            : n.slideTo(n.activeIndex + l, e, t, s);
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          const n = this,
            {
              params: i,
              animating: a,
              snapGrid: r,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: d,
            } = n;
          if (!d) return n;
          if (i.loop) {
            if (a && i.loopPreventsSlide) return !1;
            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = c(l ? n.translate : -n.translate),
            u = r.map((e) => c(e));
          let h = r[u.indexOf(p) - 1];
          if (void 0 === h && i.cssMode) {
            let e;
            r.forEach((t, s) => {
              p >= t && (e = s);
            }),
              void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          return (
            void 0 !== h &&
              ((m = o.indexOf(h)),
              m < 0 && (m = n.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - n.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            i.rewind && n.isBeginning
              ? n.slideTo(n.slides.length - 1, e, t, s)
              : n.slideTo(m, e, t, s)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
          const i = this;
          let a = i.activeIndex;
          const r = Math.min(i.params.slidesPerGroupSkip, a),
            o = r + Math.floor((a - r) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[o]) {
            const e = i.snapGrid[o];
            l - e > (i.snapGrid[o + 1] - e) * n &&
              (a += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[o - 1];
            l - e <= (i.snapGrid[o] - e) * n && (a -= i.params.slidesPerGroup);
          }
          return (
            (a = Math.max(a, 0)),
            (a = Math.min(a, i.slidesGrid.length - 1)),
            i.slideTo(a, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            n =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            a = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              f(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? a < e.loopedSlides - n / 2 ||
                  a > e.slides.length - e.loopedSlides + n / 2
                  ? (e.loopFix(),
                    (a = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(a);
                    }))
                  : e.slideTo(a)
                : a > e.slides.length - n
                ? (e.loopFix(),
                  (a = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  v(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a);
          } else e.slideTo(a);
        },
      },
      M = {
        loopCreate: function () {
          const e = this,
            t = a(),
            { params: s, $wrapperEl: n } = e,
            i = n.children().length > 0 ? f(n.children()[0].parentNode) : n;
          i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let r = i.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (e !== s.slidesPerGroup) {
              for (let n = 0; n < e; n += 1) {
                const e = f(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                i.append(e);
              }
              r = i.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const o = [],
            l = [];
          r.each((t, s) => {
            const n = f(t);
            s < e.loopedSlides && l.push(t),
              s < r.length && s >= r.length - e.loopedSlides && o.push(t),
              n.attr("data-swiper-slide-index", s);
          });
          for (let e = 0; e < l.length; e += 1)
            i.append(f(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            i.prepend(f(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: n,
            allowSlidePrev: i,
            allowSlideNext: a,
            snapGrid: r,
            rtlTranslate: o,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const d = -r[t] - e.getTranslate();
          t < n
            ? ((l = s.length - 3 * n + t),
              (l += n),
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d))
            : t >= s.length - n &&
              ((l = -s.length + t + n),
              (l += n),
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = a),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      };
    function O(e) {
      const t = this,
        s = a(),
        n = o(),
        i = t.touchEventsData,
        { params: r, touches: l, enabled: d } = t;
      if (!d) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let c = e;
      c.originalEvent && (c = c.originalEvent);
      let p = f(c.target);
      if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === c.type),
        !i.isTouchEvent && "which" in c && 3 === c.which)
      )
        return;
      if (!i.isTouchEvent && "button" in c && c.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        c.target &&
        c.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (p = f(e.path[0]));
      const u = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        h = !(!c.target || !c.target.shadowRoot);
      if (
        r.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== a() && s !== o()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(u, c.target)
          : p.closest(u)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
      (l.currentX =
        "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
        (l.currentY =
          "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
      const m = l.currentX,
        v = l.currentY,
        b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (b && (m <= w || m >= n.innerWidth - w)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (l.startX = m),
        (l.startY = v),
        (i.touchStartTime = g()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== c.type)
      ) {
        let e = !0;
        p.is(i.focusableElements) && (e = !1),
          s.activeElement &&
            f(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== p[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          p[0].isContentEditable ||
          c.preventDefault();
      }
      t.emit("touchStart", c);
    }
    function _(e) {
      const t = a(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: o, enabled: l } = s;
      if (!l) return;
      let d = e;
      if ((d.originalEvent && (d = d.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", d)
        );
      if (n.isTouchEvent && "touchmove" !== d.type) return;
      const c =
          "touchmove" === d.type &&
          d.targetTouches &&
          (d.targetTouches[0] || d.changedTouches[0]),
        p = "touchmove" === d.type ? c.pageX : d.pageX,
        u = "touchmove" === d.type ? c.pageY : d.pageY;
      if (d.preventedByNestedSwiper) return (r.startX = p), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: p,
              startY: u,
              currentX: p,
              currentY: u,
            }),
            (n.touchStartTime = g()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (p < r.startX && s.translate <= s.maxTranslate()) ||
          (p > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        d.target === t.activeElement &&
        f(d.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (r.currentX = p), (r.currentY = u);
      const h = r.currentX - r.startX,
        m = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : h * h + m * m >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", d),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && d.cancelable && d.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && d.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", d)),
        s.emit("sliderMove", d),
        (n.isMoved = !0);
      let v = s.isHorizontal() ? h : m;
      (r.diff = v),
        (v *= i.touchRatio),
        o && (v = -v),
        (s.swipeDirection = v > 0 ? "prev" : "next"),
        (n.currentTranslate = v + n.startTranslate);
      let b = !0,
        w = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (w = 0),
        v > 0 && n.currentTranslate > s.minTranslate()
          ? ((b = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + v) ** w))
          : v < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((b = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - v) ** w)),
        b && (d.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(v) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function A(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: a,
          slidesGrid: r,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = g(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = g()),
        v(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = n.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let u = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== r[e + t]
          ? p >= r[e] && p < r[e + t] && ((u = e), (h = r[e + t] - r[e]))
          : p >= r[e] && ((u = e), (h = r[r.length - 1] - r[r.length - 2]));
      }
      const m = (p - r[u]) / h,
        f = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (c > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= n.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (m > 1 - n.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(u + f),
            "prev" === t.swipeDirection && t.slideTo(u))
          : l.target === t.navigation.nextEl
          ? t.slideTo(u + f)
          : t.slideTo(u);
      }
    }
    function z() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: a } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function I(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function B() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let D = !1;
    function q() {}
    const G = (e, t) => {
        const s = a(),
          {
            params: n,
            touchEvents: i,
            el: r,
            wrapperEl: o,
            device: l,
            support: d,
          } = e,
          c = !!n.nested,
          p = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (d.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !d.passiveListener ||
            !n.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[p](i.start, e.onTouchStart, t),
            r[p](
              i.move,
              e.onTouchMove,
              d.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[p](i.end, e.onTouchEnd, t),
            i.cancel && r[p](i.cancel, e.onTouchEnd, t);
        } else
          r[p](i.start, e.onTouchStart, !1),
            s[p](i.move, e.onTouchMove, c),
            s[p](i.end, e.onTouchEnd, !1);
        (n.preventClicks || n.preventClicksPropagation) &&
          r[p]("click", e.onClick, !0),
          n.cssMode && o[p]("scroll", e.onScroll),
          n.updateOnWindowResize
            ? e[u](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                z,
                !0
              )
            : e[u]("observerUpdate", z, !0);
      },
      N = {
        attachEvents: function () {
          const e = this,
            t = a(),
            { params: s, support: n } = e;
          (e.onTouchStart = O.bind(e)),
            (e.onTouchMove = _.bind(e)),
            (e.onTouchEnd = A.bind(e)),
            s.cssMode && (e.onScroll = B.bind(e)),
            (e.onClick = I.bind(e)),
            n.touch && !D && (t.addEventListener("touchstart", q), (D = !0)),
            G(e, "on");
        },
        detachEvents: function () {
          G(this, "off");
        },
      },
      H = (e, t) => e.grid && t.grid && t.grid.rows > 1,
      V = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: n,
              $el: i,
              device: a,
              support: r,
            } = e,
            o = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((n) => {
                        e[n] && s.push(t + n);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "pointer-events": !r.touch },
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: n },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: a.android },
                { ios: a.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
              ],
              s.containerModifierClass
            );
          t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      F = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function j(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                w(t, s))
              : w(t, s))
          : w(t, s);
      };
    }
    const W = {
        eventsEmitter: L,
        update: k,
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: s,
              translate: n,
              $wrapperEl: i,
            } = this;
            if (t.virtualTranslate) return s ? -n : n;
            if (t.cssMode) return n;
            let a = (function (e, t = "x") {
              const s = o();
              let n, i, a;
              const r = (function (e) {
                const t = o();
                let s;
                return (
                  t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                  !s && e.currentStyle && (s = e.currentStyle),
                  s || (s = e.style),
                  s
                );
              })(e);
              return (
                s.WebKitCSSMatrix
                  ? ((i = r.transform || r.webkitTransform),
                    i.split(",").length > 6 &&
                      (i = i
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (a = new s.WebKitCSSMatrix("none" === i ? "" : i)))
                  : ((a =
                      r.MozTransform ||
                      r.OTransform ||
                      r.MsTransform ||
                      r.msTransform ||
                      r.transform ||
                      r
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (n = a.toString().split(","))),
                "x" === t &&
                  (i = s.WebKitCSSMatrix
                    ? a.m41
                    : 16 === n.length
                    ? parseFloat(n[12])
                    : parseFloat(n[4])),
                "y" === t &&
                  (i = s.WebKitCSSMatrix
                    ? a.m42
                    : 16 === n.length
                    ? parseFloat(n[13])
                    : parseFloat(n[5])),
                i || 0
              );
            })(i[0], e);
            return s && (a = -a), a || 0;
          },
          setTranslate: function (e, t) {
            const s = this,
              {
                rtlTranslate: n,
                params: i,
                $wrapperEl: a,
                wrapperEl: r,
                progress: o,
              } = s;
            let l,
              d = 0,
              c = 0;
            s.isHorizontal() ? (d = n ? -e : e) : (c = e),
              i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
              i.cssMode
                ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    s.isHorizontal() ? -d : -c)
                : i.virtualTranslate ||
                  a.transform(`translate3d(${d}px, ${c}px, 0px)`),
              (s.previousTranslate = s.translate),
              (s.translate = s.isHorizontal() ? d : c);
            const p = s.maxTranslate() - s.minTranslate();
            (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
              l !== o && s.updateProgress(e),
              s.emit("setTranslate", s.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            s = !0,
            n = !0,
            i
          ) {
            const a = this,
              { params: r, wrapperEl: o } = a;
            if (a.animating && r.preventInteractionOnTransition) return !1;
            const l = a.minTranslate(),
              d = a.maxTranslate();
            let c;
            if (
              ((c = n && e > l ? l : n && e < d ? d : e),
              a.updateProgress(c),
              r.cssMode)
            ) {
              const e = a.isHorizontal();
              if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!a.support.smoothScroll)
                  return (
                    E({
                      swiper: a,
                      targetPosition: -c,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (a.setTransition(0),
                  a.setTranslate(c),
                  s &&
                    (a.emit("beforeTransitionStart", t, i),
                    a.emit("transitionEnd")))
                : (a.setTransition(t),
                  a.setTranslate(c),
                  s &&
                    (a.emit("beforeTransitionStart", t, i),
                    a.emit("transitionStart")),
                  a.animating ||
                    ((a.animating = !0),
                    a.onTranslateToWrapperTransitionEnd ||
                      (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            a.onTranslateToWrapperTransitionEnd
                          ),
                          a.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            a.onTranslateToWrapperTransitionEnd
                          ),
                          (a.onTranslateToWrapperTransitionEnd = null),
                          delete a.onTranslateToWrapperTransitionEnd,
                          s && a.emit("transitionEnd"));
                      }),
                    a.$wrapperEl[0].addEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              $({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                $({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: P,
        loop: M,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: N,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: s,
                loopedSlides: n = 0,
                params: i,
                $el: a,
              } = e,
              r = i.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const l = (o in r ? r[o] : void 0) || e.originalParams,
              d = H(e, i),
              c = H(e, l),
              p = i.enabled;
            d && !c
              ? (a.removeClass(
                  `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !d &&
                c &&
                (a.addClass(`${i.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === i.grid.fill)) &&
                  a.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const u = l.direction && l.direction !== i.direction,
              h = i.loop && (l.slidesPerView !== i.slidesPerView || u);
            u && s && e.changeDirection(), w(e.params, l);
            const m = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              p && !m ? e.disable() : !p && m && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", l),
              h &&
                s &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let n = !1;
            const i = o(),
              a = "window" === t ? i.innerHeight : s.clientHeight,
              r = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < r.length; e += 1) {
              const { point: a, value: o } = r[e];
              "window" === t
                ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = a)
                : o <= s.clientWidth && (n = a);
            }
            return n || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: V,
        images: {
          loadImage: function (e, t, s, n, i, a) {
            const r = o();
            let l;
            function d() {
              a && a();
            }
            f(e).parent("picture")[0] || (e.complete && i)
              ? d()
              : t
              ? ((l = new r.Image()),
                (l.onload = d),
                (l.onerror = d),
                n && (l.sizes = n),
                s && (l.srcset = s),
                t && (l.src = t))
              : d();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      R = {};
    class Y {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = w({}, s)),
          t && !s.el && (s.el = t),
          s.el && f(s.el).length > 1)
        ) {
          const e = [];
          return (
            f(s.el).each((t) => {
              const n = w({}, s, { el: t });
              e.push(new Y(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = x()),
          (n.device = (function (e = {}) {
            return (
              C ||
                (C = (function ({ userAgent: e } = {}) {
                  const t = x(),
                    s = o(),
                    n = s.navigator.platform,
                    i = e || s.navigator.userAgent,
                    a = { ios: !1, android: !1 },
                    r = s.screen.width,
                    l = s.screen.height,
                    d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let c = i.match(/(iPad).*OS\s([\d_]+)/);
                  const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                    u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === n;
                  let m = "MacIntel" === n;
                  return (
                    !c &&
                      m &&
                      t.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(`${r}x${l}`) >= 0 &&
                      ((c = i.match(/(Version)\/([\d.]+)/)),
                      c || (c = [0, 1, "13_0_0"]),
                      (m = !1)),
                    d && !h && ((a.os = "android"), (a.android = !0)),
                    (c || u || p) && ((a.os = "ios"), (a.ios = !0)),
                    a
                  );
                })(e)),
              C
            );
          })({ userAgent: s.userAgent })),
          (n.browser =
            (T ||
              (T = (function () {
                const e = o();
                return {
                  isSafari: (function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      t.indexOf("chrome") < 0 &&
                      t.indexOf("android") < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                };
              })()),
            T)),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const i = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: j(s, i),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const a = w({}, F, i);
        return (
          (n.params = w({}, a, R, s)),
          (n.originalParams = w({}, n.params)),
          (n.passedParams = w({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = f),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: f(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: g(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: a,
          size: r,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[o].swiperSlideSize;
          for (let s = o + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > r && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < n.length; e += 1)
            (t ? i[e] + a[e] - i[o] < r : i[e] - i[o] < r) && (l += 1);
        else for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < r && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = f(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = f(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = a().createElement("div");
          (i = f(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return (
          t.initialized ||
            !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, $el: i, $wrapperEl: a, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              a.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        w(R, e);
      }
      static get extendedDefaults() {
        return R;
      }
      static get defaults() {
        return F;
      }
      static installModule(e) {
        Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
        const t = Y.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => Y.installModule(e)), Y)
          : (Y.installModule(e), Y);
      }
    }
    Object.keys(W).forEach((e) => {
      Object.keys(W[e]).forEach((t) => {
        Y.prototype[t] = W[e][t];
      });
    }),
      Y.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = o();
          let i = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            r = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  const { width: s, height: n } = e;
                  let i = s,
                    r = n;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: n }) => {
                      (n && n !== e.el) ||
                        ((i = s ? s.width : (t[0] || t).inlineSize),
                        (r = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (i === s && r === n) || a();
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", r));
          }),
            t("destroy", () => {
              i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", r);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            a = o(),
            r = (e, t = {}) => {
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.$el[0], { childList: e.params.observeSlideChildren }),
                  r(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const X = Y;
    function U(e, t, s, n) {
      const i = a();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let r = e.$el.children(`.${n[a]}`)[0];
              r ||
                ((r = i.createElement("div")),
                (r.className = n[a]),
                e.$el.append(r)),
                (s[a] = r),
                (t[a] = r);
            }
          }),
        s
      );
    }
    function K(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    X.use([
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        function i(t) {
          let s;
          return (
            t &&
              ((s = f(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.$el.find(t).length &&
                (s = e.$el.find(t))),
            s
          );
        }
        function a(t, s) {
          const n = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[s ? "addClass" : "removeClass"](n.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
        }
        function r() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: s } = e.navigation;
          a(s, e.isBeginning && !e.params.rewind),
            a(t, e.isEnd && !e.params.rewind);
        }
        function o(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev();
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
        }
        function d() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = U(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const s = i(t.nextEl),
            n = i(t.prevEl);
          s && s.length > 0 && s.on("click", l),
            n && n.length > 0 && n.on("click", o),
            Object.assign(e.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: n,
              prevEl: n && n[0],
            }),
            e.enabled ||
              (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
        }
        function c() {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", o),
              s.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            d(), r();
          }),
          s("toEdge fromEdge lock unlock", () => {
            r();
          }),
          s("destroy", () => {
            c();
          }),
          s("enable disable", () => {
            const { $nextEl: t, $prevEl: s } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              s &&
                s[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          s("click", (t, s) => {
            const { $nextEl: i, $prevEl: a } = e.navigation,
              r = s.target;
            if (e.params.navigation.hideOnClick && !f(r).is(a) && !f(r).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === r || e.pagination.el.contains(r))
              )
                return;
              let t;
              i
                ? (t = i.hasClass(e.params.navigation.hiddenClass))
                : a && (t = a.hasClass(e.params.navigation.hiddenClass)),
                n(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                a && a.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: r, init: d, destroy: c });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        const i = "swiper-pagination";
        let a;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let r = 0;
        function o() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, s) {
          const { bulletActiveClass: n } = e.params.pagination;
          t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
        }
        function d() {
          const t = e.rtl,
            s = e.params.pagination;
          if (o()) return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            d = e.pagination.$el;
          let c;
          const p = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((c = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
                c > p - 1 && (c -= p),
                c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
              : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const n = e.pagination.bullets;
            let i, o, p;
            if (
              (s.dynamicBullets &&
                ((a = n
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                d.css(
                  e.isHorizontal() ? "width" : "height",
                  a * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((r += c - (e.previousIndex - e.loopedSlides || 0)),
                  r > s.dynamicMainBullets - 1
                    ? (r = s.dynamicMainBullets - 1)
                    : r < 0 && (r = 0)),
                (i = Math.max(c - r, 0)),
                (o = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
                (p = (o + i) / 2)),
              n.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              d.length > 1)
            )
              n.each((e) => {
                const t = f(e),
                  n = t.index();
                n === c && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (n >= i &&
                      n <= o &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    n === i && l(t, "prev"),
                    n === o && l(t, "next"));
              });
            else {
              const t = n.eq(c),
                a = t.index();
              if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const t = n.eq(i),
                  r = n.eq(o);
                for (let e = i; e <= o; e += 1)
                  n.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (a >= n.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      n.eq(n.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(r, "next");
                else l(t, "prev"), l(r, "next");
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(n.length, s.dynamicMainBullets + 4),
                r = (a * i - a) / 2 - p * a,
                o = t ? "right" : "left";
              n.css(e.isHorizontal() ? o : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (d.find(K(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
              d.find(K(s.totalClass)).text(s.formatFractionTotal(p))),
            "progressbar" === s.type)
          ) {
            let t;
            t = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const n = (c + 1) / p;
            let i = 1,
              a = 1;
            "horizontal" === t ? (i = n) : (a = n),
              d
                .find(K(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0]))
            : n("paginationUpdate", d[0]),
            e.params.watchOverflow &&
              e.enabled &&
              d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function c() {
          const t = e.params.pagination;
          if (o()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el;
          let a = "";
          if ("bullets" === t.type) {
            let n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              n > s &&
              (n = s);
            for (let s = 0; s < n; s += 1)
              t.renderBullet
                ? (a += t.renderBullet.call(e, s, t.bulletClass))
                : (a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            i.html(a), (e.pagination.bullets = i.find(K(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((a = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            i.html(a)),
            "progressbar" === t.type &&
              ((a = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              i.html(a)),
            "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
        }
        function p() {
          e.params.pagination = U(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let s = f(t.el);
          0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              s.length > 1 &&
              ((s = e.$el.find(t.el)),
              s.length > 1 &&
                (s = s.filter((t) => f(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (r = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on("click", K(t.bulletClass), function (t) {
                t.preventDefault();
                let s = f(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
              }),
            Object.assign(e.pagination, { $el: s, el: s[0] }),
            e.enabled || s.addClass(t.lockClass));
        }
        function u() {
          const t = e.params.pagination;
          if (o()) return;
          const s = e.pagination.$el;
          s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", K(t.bulletClass));
        }
        s("init", () => {
          p(), c(), d();
        }),
          s("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && d();
          }),
          s("snapIndexChange", () => {
            e.params.loop || d();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (c(), d());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (c(), d());
          }),
          s("destroy", () => {
            u();
          }),
          s("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            d();
          }),
          s("click", (t, s) => {
            const i = s.target,
              { $el: a } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              a.length > 0 &&
              !f(i).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                  (e.navigation.prevEl && i === e.navigation.prevEl))
              )
                return;
              const t = a.hasClass(e.params.pagination.hiddenClass);
              n(!0 === t ? "paginationShow" : "paginationHide"),
                a.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: c,
            update: d,
            init: p,
            destroy: u,
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        const i = a();
        let r,
          o,
          l,
          d,
          c = !1,
          p = null,
          u = null;
        function h() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: s, progress: n } = e,
            { $dragEl: i, $el: a } = t,
            r = e.params.scrollbar;
          let d = o,
            c = (l - o) * n;
          s
            ? ((c = -c),
              c > 0 ? ((d = o - c), (c = 0)) : -c + o > l && (d = l + c))
            : c < 0
            ? ((d = o + c), (c = 0))
            : c + o > l && (d = l - c),
            e.isHorizontal()
              ? (i.transform(`translate3d(${c}px, 0, 0)`),
                (i[0].style.width = `${d}px`))
              : (i.transform(`translate3d(0px, ${c}px, 0)`),
                (i[0].style.height = `${d}px`)),
            r.hide &&
              (clearTimeout(p),
              (a[0].style.opacity = 1),
              (p = setTimeout(() => {
                (a[0].style.opacity = 0), a.transition(400);
              }, 1e3)));
        }
        function m() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: s, $el: n } = t;
          (s[0].style.width = ""),
            (s[0].style.height = ""),
            (l = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
            (d =
              e.size /
              (e.virtualSize +
                e.params.slidesOffsetBefore -
                (e.params.centeredSlides ? e.snapGrid[0] : 0))),
            (o =
              "auto" === e.params.scrollbar.dragSize
                ? l * d
                : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (s[0].style.width = `${o}px`)
              : (s[0].style.height = `${o}px`),
            (n[0].style.display = d >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (n[0].style.opacity = 0),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
        function g(t) {
          return e.isHorizontal()
            ? "touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0].clientX
              : t.clientX
            : "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientY
            : t.clientY;
        }
        function b(t) {
          const { scrollbar: s, rtlTranslate: n } = e,
            { $el: i } = s;
          let a;
          (a =
            (g(t) -
              i.offset()[e.isHorizontal() ? "left" : "top"] -
              (null !== r ? r : o / 2)) /
            (l - o)),
            (a = Math.max(Math.min(a, 1), 0)),
            n && (a = 1 - a);
          const d =
            e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * a;
          e.updateProgress(d),
            e.setTranslate(d),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        function w(t) {
          const s = e.params.scrollbar,
            { scrollbar: i, $wrapperEl: a } = e,
            { $el: o, $dragEl: l } = i;
          (c = !0),
            (r =
              t.target === l[0] || t.target === l
                ? g(t) -
                  t.target.getBoundingClientRect()[
                    e.isHorizontal() ? "left" : "top"
                  ]
                : null),
            t.preventDefault(),
            t.stopPropagation(),
            a.transition(100),
            l.transition(100),
            b(t),
            clearTimeout(u),
            o.transition(0),
            s.hide && o.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            n("scrollbarDragStart", t);
        }
        function y(t) {
          const { scrollbar: s, $wrapperEl: i } = e,
            { $el: a, $dragEl: r } = s;
          c &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            b(t),
            i.transition(0),
            a.transition(0),
            r.transition(0),
            n("scrollbarDragMove", t));
        }
        function E(t) {
          const s = e.params.scrollbar,
            { scrollbar: i, $wrapperEl: a } = e,
            { $el: r } = i;
          c &&
            ((c = !1),
            e.params.cssMode &&
              (e.$wrapperEl.css("scroll-snap-type", ""), a.transition("")),
            s.hide &&
              (clearTimeout(u),
              (u = v(() => {
                r.css("opacity", 0), r.transition(400);
              }, 1e3))),
            n("scrollbarDragEnd", t),
            s.snapOnRelease && e.slideToClosest());
        }
        function S(t) {
          const {
              scrollbar: s,
              touchEventsTouch: n,
              touchEventsDesktop: a,
              params: r,
              support: o,
            } = e,
            l = s.$el[0],
            d = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            c = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!l) return;
          const p = "on" === t ? "addEventListener" : "removeEventListener";
          o.touch
            ? (l[p](n.start, w, d), l[p](n.move, y, d), l[p](n.end, E, c))
            : (l[p](a.start, w, d), i[p](a.move, y, d), i[p](a.end, E, c));
        }
        function C() {
          const { scrollbar: t, $el: s } = e;
          e.params.scrollbar = U(
            e,
            e.originalParams.scrollbar,
            e.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const n = e.params.scrollbar;
          if (!n.el) return;
          let i = f(n.el);
          e.params.uniqueNavElements &&
            "string" == typeof n.el &&
            i.length > 1 &&
            1 === s.find(n.el).length &&
            (i = s.find(n.el));
          let a = i.find(`.${e.params.scrollbar.dragClass}`);
          0 === a.length &&
            ((a = f(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            i.append(a)),
            Object.assign(t, { $el: i, el: i[0], $dragEl: a, dragEl: a[0] }),
            n.draggable && e.params.scrollbar.el && S("on"),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
        function T() {
          e.params.scrollbar.el && S("off");
        }
        t({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          s("init", () => {
            C(), m(), h();
          }),
          s("update resize observerUpdate lock unlock", () => {
            m();
          }),
          s("setTranslate", () => {
            h();
          }),
          s("setTransition", (t, s) => {
            !(function (t) {
              e.params.scrollbar.el &&
                e.scrollbar.el &&
                e.scrollbar.$dragEl.transition(t);
            })(s);
          }),
          s("enable disable", () => {
            const { $el: t } = e.scrollbar;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          }),
          s("destroy", () => {
            T();
          }),
          Object.assign(e.scrollbar, {
            updateSize: m,
            setTranslate: h,
            init: C,
            destroy: T,
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        let i;
        function r() {
          const t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(i),
            (i = v(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    n("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      n("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), n("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  n("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), n("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), n("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
            }, s));
        }
        function o() {
          return (
            void 0 === i &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), n("autoplayStart"), r(), !0)
          );
        }
        function l() {
          return (
            !!e.autoplay.running &&
            void 0 !== i &&
            (i && (clearTimeout(i), (i = void 0)),
            (e.autoplay.running = !1),
            n("autoplayStop"),
            !0)
          );
        }
        function d(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (i && clearTimeout(i),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, p);
                  })
                : ((e.autoplay.paused = !1), r())));
        }
        function c() {
          const t = a();
          "hidden" === t.visibilityState && e.autoplay.running && d(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (r(), (e.autoplay.paused = !1));
        }
        function p(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, p);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? r() : l());
        }
        function u() {
          e.params.autoplay.disableOnInteraction ? l() : d(),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, p);
            });
        }
        function h() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), r());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          s("init", () => {
            e.params.autoplay.enabled &&
              (o(),
              a().addEventListener("visibilitychange", c),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", u), e.$el.on("mouseleave", h)));
          }),
          s("beforeTransitionStart", (t, s, n) => {
            e.autoplay.running &&
              (n || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(s)
                : l());
          }),
          s("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? l() : d());
          }),
          s("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              r();
          }),
          s("destroy", () => {
            e.$el.off("mouseenter", u),
              e.$el.off("mouseleave", h),
              e.autoplay.running && l(),
              a().removeEventListener("visibilitychange", c);
          }),
          Object.assign(e.autoplay, { pause: d, run: r, start: o, stop: l });
      },
    ]);
    const J = document.querySelector(".main-slider");
    if (J) {
      const e = new X(J, {
        loop: !0,
        grabCursor: !0,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: !0,
        autoplay: { delay: 5e3, disableOnInteraction: !1 },
        navigation: {
          nextEl: ".main-slider__next.swiper-button-next",
          prevEl: ".main-slider__prev.swiper-button-prev",
        },
        pagination: {
          el: ".main-slider__pagination.swiper-pagination",
          clickable: !0,
        },
        breakpoints: { 600: { spaceBetween: 10, slidesPerView: "auto" } },
      });
      J.addEventListener("mouseenter", () => {
        e.autoplay.stop();
      }),
        J.addEventListener("mouseleave", () => {
          e.autoplay.start();
        });
    }
    const Q = document.querySelector(".slider-hits");
    Q &&
      new X(Q, {
        loop: !1,
        grabCursor: !0,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".slider-hits__next.swiper-button-next",
          prevEl: ".slider-hits__prev.swiper-button-prev",
        },
        pagination: {
          el: ".slider-bg-pagination-fraction-hits",
          type: "fraction",
          formatFractionCurrent: function (e) {
            return e < 10 ? "0" + e : e;
          },
          renderFraction: function (e, t) {
            return (
              '<span class="' +
              e +
              '"></span><span class="rzdClass"></span><span class="' +
              t +
              '"></span>'
            );
          },
        },
        breakpoints: {
          460: { slidesPerView: "2" },
          600: { slidesPerView: "3", spaceBetween: 15 },
          769: { slidesPerView: "4" },
          1024: { spaceBetween: 20, slidesPerView: "4" },
        },
      });
    const Z = document.querySelector(".slider-novelties");
    Z &&
      new X(Z, {
        loop: !1,
        grabCursor: !0,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".slider-novelties__next.swiper-button-next",
          prevEl: ".slider-novelties__prev.swiper-button-prev",
        },
        pagination: {
          el: ".slider-bg-pagination-fraction-novelties",
          type: "fraction",
          formatFractionCurrent: function (e) {
            return e < 10 ? "0" + e : e;
          },
          renderFraction: function (e, t) {
            return (
              '<span class="' +
              e +
              '"></span><span class="rzdClass"></span><span class="' +
              t +
              '"></span>'
            );
          },
        },
        breakpoints: {
          460: { slidesPerView: "2" },
          600: { slidesPerView: "3", spaceBetween: 15 },
          769: { slidesPerView: "4" },
          1024: { spaceBetween: 20, slidesPerView: "4" },
        },
      });
    const ee = document.querySelector(".slider-recommendations");
    ee &&
      new X(ee, {
        loop: !1,
        grabCursor: !0,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".slider-recommendations__next.swiper-button-next",
          prevEl: ".slider-recommendations__prev.swiper-button-prev",
        },
        pagination: {
          clickable: !0,
          el: ".slider-bg-pagination-fraction-recommendations",
          type: "fraction",
          formatFractionCurrent: function (e) {
            return e < 10 ? "0" + e : e;
          },
          renderFraction: function (e, t) {
            return (
              '<span class="' +
              e +
              '"></span><span class="rzdClass"></span><span class="' +
              t +
              '"></span>'
            );
          },
        },
        breakpoints: {
          460: { slidesPerView: "2" },
          600: { slidesPerView: "3", spaceBetween: 15 },
          769: { slidesPerView: "4" },
          1024: { spaceBetween: 20, slidesPerView: "4" },
        },
      });
    const te = document.querySelector(".slider-reviews");
    te &&
      new X(te, {
        loop: !1,
        grabCursor: !0,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".slider-reviews__next.swiper-button-next",
          prevEl: ".slider-reviews__prev.swiper-button-prev",
        },
        pagination: {
          clickable: !0,
          el: ".slider-bg-pagination-fraction-reviews",
          type: "fraction",
          formatFractionCurrent: function (e) {
            return e < 10 ? "0" + e : e;
          },
          renderFraction: function (e, t) {
            return (
              '<span class="' +
              e +
              '"></span><span class="rzdClass"></span><span class="' +
              t +
              '"></span>'
            );
          },
        },
        breakpoints: {
          768: { slidesPerView: "1.5", spaceBetween: 20 },
          900: { slidesPerView: "2", spaceBetween: 20 },
          1024: { slidesPerView: "2", spaceBetween: 30 },
        },
      }),
      s(158),
      s(579),
      s(339),
      s(218),
      s(241),
      s(266),
      s(626),
      s(269),
      s(154),
      s(681),
      s(824),
      s(726);
    var se = !1;
    if ("undefined" != typeof window) {
      var ne = {
        get passive() {
          se = !0;
        },
      };
      window.addEventListener("testPassive", null, ne),
        window.removeEventListener("testPassive", null, ne);
    }
    var ie =
        "undefined" != typeof window &&
        window.navigator &&
        window.navigator.platform &&
        (/iP(ad|hone|od)/.test(window.navigator.platform) ||
          ("MacIntel" === window.navigator.platform &&
            window.navigator.maxTouchPoints > 1)),
      ae = [],
      re = !1,
      oe = -1,
      le = void 0,
      de = void 0,
      ce = void 0,
      pe = function (e) {
        return ae.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
      ue = function (e) {
        var t = e || window.event;
        return (
          !!pe(t.target) ||
          t.touches.length > 1 ||
          (t.preventDefault && t.preventDefault(), !1)
        );
      };
    const he = document.querySelector("body");
    he.addEventListener("transitionend", function () {
      var e;
      he.classList.contains(".search__button ")
        ? (function (e, t) {
            if (e) {
              if (
                !ae.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var s = { targetElement: e, options: t || {} };
                (ae = [].concat(
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, s = Array(e.length); t < e.length; t++)
                        s[t] = e[t];
                      return s;
                    }
                    return Array.from(e);
                  })(ae),
                  [s]
                )),
                  ie
                    ? window.requestAnimationFrame(function () {
                        if (void 0 === de) {
                          de = {
                            position: document.body.style.position,
                            top: document.body.style.top,
                            left: document.body.style.left,
                          };
                          var e = window,
                            t = e.scrollY,
                            s = e.scrollX,
                            n = e.innerHeight;
                          (document.body.style.position = "fixed"),
                            (document.body.style.top = -t),
                            (document.body.style.left = -s),
                            setTimeout(function () {
                              return window.requestAnimationFrame(function () {
                                var e = n - window.innerHeight;
                                e &&
                                  t >= n &&
                                  (document.body.style.top = -(t + e));
                              });
                            }, 300);
                        }
                      })
                    : (function (e) {
                        if (void 0 === ce) {
                          var t = !!e && !0 === e.reserveScrollBarGap,
                            s =
                              window.innerWidth -
                              document.documentElement.clientWidth;
                          if (t && s > 0) {
                            var n = parseInt(
                              window
                                .getComputedStyle(document.body)
                                .getPropertyValue("padding-right"),
                              10
                            );
                            (ce = document.body.style.paddingRight),
                              (document.body.style.paddingRight = n + s + "px");
                          }
                        }
                        void 0 === le &&
                          ((le = document.body.style.overflow),
                          (document.body.style.overflow = "hidden"));
                      })(t),
                  ie &&
                    ((e.ontouchstart = function (e) {
                      1 === e.targetTouches.length &&
                        (oe = e.targetTouches[0].clientY);
                    }),
                    (e.ontouchmove = function (t) {
                      1 === t.targetTouches.length &&
                        (function (e, t) {
                          var s = e.targetTouches[0].clientY - oe;
                          !pe(e.target) &&
                            ((t && 0 === t.scrollTop && s > 0) ||
                            ((function (e) {
                              return (
                                !!e &&
                                e.scrollHeight - e.scrollTop <= e.clientHeight
                              );
                            })(t) &&
                              s < 0)
                              ? ue(e)
                              : e.stopPropagation());
                        })(t, e);
                    }),
                    re ||
                      (document.addEventListener(
                        "touchmove",
                        ue,
                        se ? { passive: !1 } : void 0
                      ),
                      (re = !0)));
              }
            } else
              console.error(
                "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
              );
          })(he)
        : (e = he)
        ? ((ae = ae.filter(function (t) {
            return t.targetElement !== e;
          })),
          ie &&
            ((e.ontouchstart = null),
            (e.ontouchmove = null),
            re &&
              0 === ae.length &&
              (document.removeEventListener(
                "touchmove",
                ue,
                se ? { passive: !1 } : void 0
              ),
              (re = !1))),
          ie
            ? (function () {
                if (void 0 !== de) {
                  var e = -parseInt(document.body.style.top, 10),
                    t = -parseInt(document.body.style.left, 10);
                  (document.body.style.position = de.position),
                    (document.body.style.top = de.top),
                    (document.body.style.left = de.left),
                    window.scrollTo(t, e),
                    (de = void 0);
                }
              })()
            : (void 0 !== ce &&
                ((document.body.style.paddingRight = ce), (ce = void 0)),
              void 0 !== le &&
                ((document.body.style.overflow = le), (le = void 0))))
        : console.error(
            "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
          );
    }),
      s(462),
      s(469);
  })();
})();
