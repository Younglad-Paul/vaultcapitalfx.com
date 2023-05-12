/**
 * crisp-client
 * @version v2.10.0 d2149b0
 * @author Crisp IM SAS
 * @date 4/3/2023
 */
(function () {
  try {
    var t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    (i.prototype.init = function () {
      var i,
        n,
        s = this,
        e = "init";
      try {
        this.n &&
          !0 !== this.s &&
          ((this.s = !0),
          ((i = document.createElement("div")).id = "crisp-loader"),
          document.getElementsByTagName("body")[0].appendChild(i),
          (n = function () {
            return (
              "none" === window.getComputedStyle(i).getPropertyValue("display")
            );
          }),
          (function t() {
            s.f = setTimeout(function () {
              (s.f = null),
                (s.y -= s.w),
                void 0 !== window[s.v] &&
                "function" == typeof window[s.v].__init &&
                !0 === n()
                  ? (s.x.info(s.ns + "." + e, "Dependencies loaded"),
                    i.parentNode.removeChild(i),
                    window[s.v].__init({
                      dollar_crisp: window[s.v],
                      project_name: s.on,
                      url_go: s.fn,
                      url_image: s._n,
                      url_game: s.fs,
                      url_relay_client: s.ms,
                      url_relay_stream: s.ws,
                      url_website: s.$s,
                      url_assets: s._e,
                      rtc_ice: s.io,
                      socket_affinity: s.do,
                      client_environment: s._a,
                      client_revision: s._f,
                      website_domain: s.el,
                      website_id: s.n,
                      token_id: s.Rp,
                      cookie_expire: s.Fn,
                      cookie_domain: s.Pp,
                      page_url: s.Tp,
                      page_domain: s.Dp,
                      browser_useragent: s.Np,
                      browser_timezone: s.Kp,
                      browser_capabilities: s.Gp,
                      browser_locales: s.Up,
                      ready_trigger: s.Bp,
                      runtime_configuration: s.Lp,
                      reset_handler: function () {
                        s.reset();
                      },
                    }))
                  : 0 < s.y
                  ? t()
                  : s.x.error(s.ns + "." + e, "Could not load dependencies");
            }, s.w);
          })());
      } catch (t) {}
    }),
      (i.prototype.reset = function () {
        try {
          null !== this.f && clearTimeout(this.f), this.Mp(), this.init();
        } catch (t) {}
      }),
      (i.prototype.Yp = function () {
        try {
          this.Xp("dns-prefetch", this.ms),
            this.Xp("preconnect", this._e),
            this.Jp(),
            this.Wp();
        } catch (t) {}
      }),
      (i.prototype.Xp = function (t, i) {
        try {
          var n = document.createElement("link");
          n.setAttribute("href", i),
            n.setAttribute("rel", t),
            n.setAttribute("crossorigin", ""),
            this.Hp(n),
            document.getElementsByTagName("head")[0].appendChild(n);
        } catch (t) {}
      }),
      (i.prototype.Jp = function () {
        try {
          var t = document.createElement("script");
          (t.src = [this._e + "/", this.Qp + "/", "client.js?" + this._f].join(
            ""
          )),
            (t.type = "text/javascript"),
            (t.async = 1),
            this.Hp(t),
            document.getElementsByTagName("head")[0].appendChild(t);
        } catch (t) {}
      }),
      (i.prototype.Wp = function () {
        try {
          var t = this.Vp(),
            i = document.createElement("link");
          (i.href = [
            this._e + "/",
            this.Zp + "/",
            "client_" + t + ".css?" + this._f,
          ].join("")),
            (i.type = "text/css"),
            (i.rel = "stylesheet"),
            this.Hp(i),
            document.getElementsByTagName("head")[0].appendChild(i);
        } catch (t) {}
      }),
      (i.prototype.Mp = function () {
        this.t_(), this.i_(), this.n_();
      }),
      (i.prototype.t_ = function () {
        (this.s = !1),
          (this.f = null),
          (this.y = this.s_),
          (this.el = document.domain),
          (this.Tp = document.location.href),
          (this.Dp = document.location.hostname),
          (this.Np = window.navigator.userAgent),
          (this.Kp = new Date().getTimezoneOffset()),
          (this.Up = this.e_()),
          "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID
            ? (this.n = CRISP_WEBSITE_ID)
            : (this.n = this.o_()),
          "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this.Rp = CRISP_TOKEN_ID)
            : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this.Rp = CRISP_TOKEN_ID.toString())
            : (this.Rp = null),
          "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE
            ? (this.Fn = CRISP_COOKIE_EXPIRE)
            : (this.Fn = null),
          "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN
            ? (this.Pp = CRISP_COOKIE_DOMAIN)
            : (this.Pp = null),
          "function" == typeof CRISP_READY_TRIGGER
            ? (this.Bp = CRISP_READY_TRIGGER)
            : (this.Bp = {}),
          "object" ===
          ("undefined" == typeof CRISP_RUNTIME_CONFIG
            ? "undefined"
            : t(CRISP_RUNTIME_CONFIG))
            ? (this.Lp = CRISP_RUNTIME_CONFIG)
            : (this.Lp = {}),
          "object" ===
          ("undefined" == typeof CRISP_INCLUDE_ATTRS
            ? "undefined"
            : t(CRISP_INCLUDE_ATTRS))
            ? (this.r_ = CRISP_INCLUDE_ATTRS)
            : (this.r_ = {});
      }),
      (i.prototype.i_ = function () {
        try {
          (this.Gp = []),
            "function" == typeof window.MutationObserver &&
              "function" == typeof JSON.stringify &&
              this.Gp.push("browsing"),
            (("function" == typeof window.RTCPeerConnection &&
              "object" === t(navigator.mediaDevices) &&
              "https:" === document.location.protocol &&
              (window.innerWidth || 0) >= this.c_ &&
              (window.innerHeight || 0) >= this.h_) ||
              !0 === this.a_) &&
              this.Gp.push("call");
        } catch (t) {}
      }),
      (i.prototype.n_ = function () {
        var t;
        try {
          this.Lp.locale &&
            (-1 !== (t = this.Up.indexOf(this.Lp.locale)) &&
              this.Up.splice(t, 1),
            this.Up.unshift(this.Lp.locale));
        } catch (t) {}
      }),
      (i.prototype.Hp = function (t) {
        try {
          for (var i in this.r_)
            this.r_.hasOwnProperty(i) && t.setAttribute(i, this.r_[i]);
        } catch (t) {}
      }),
      (i.prototype.o_ = function () {
        var t = null;
        try {
          for (
            var i = document.querySelectorAll("script[src]"), n = 0;
            n < i.length;
            n++
          ) {
            var s = this.u_.exec(i[n].src);
            if (s && "string" == typeof s[1]) {
              t = s[1];
              break;
            }
          }
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.Vp = function () {
        var t = "default";
        try {
          var i = (navigator.userAgent || "").toLowerCase(),
            n = (navigator.appVersion || "").toLowerCase(),
            s = !1;
          if (
            (!0 !== s &&
              ((-1 === i.indexOf("opera mini/") &&
                -1 === i.indexOf("msie") &&
                -1 === n.indexOf("trident/")) ||
                (s = !0)),
            !0 !== s)
          )
            for (var e = 0; e < this.d_.length; e++) {
              var o = this.d_[e],
                r = i.match(o.pattern);
              if (r && r[1] && parseInt(r[1], 10) <= o.version) {
                s = !0;
                break;
              }
            }
          !0 === s && (t = "legacy");
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.f_ = function () {
        var t = !0;
        try {
          ((window.innerWidth && window.innerWidth < this.l_) ||
            !0 !== this.p_() ||
            !0 === this.__(this.Dp) ||
            !0 === this.y_(this.Np) ||
            !window.WebSocket ||
            (window.__nativePerformance && window.__nativePromise)) &&
            (t = !1);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.p_ = function () {
        var t,
          i,
          n = !1;
        try {
          !0 === navigator.cookieEnabled
            ? (n = !0)
            : window.localStorage &&
              "function" == typeof window.localStorage.setItem &&
              "function" == typeof window.localStorage.getItem &&
              "function" == typeof window.localStorage.removeItem &&
              ((t = "" + new Date().getTime()),
              (i = "crisp-client/loader/storage/check"),
              window.localStorage.setItem(i, t),
              (n = window.localStorage.getItem(i) === t));
        } catch (t) {
        } finally {
          return n;
        }
      }),
      (i.prototype.__ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.m_.domains.length; n++) {
              var s = this.m_.domains[n],
                e = "." + s;
              if (t === s || t.slice(-1 * e.length) === e) {
                i = !0;
                break;
              }
            }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.y_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.m_.agents.length; n++)
              if (-1 !== t.indexOf(this.m_.agents[n])) {
                i = !0;
                break;
              }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.e_ = function () {
        var t = [];
        try {
          for (
            var i =
                navigator.languages && 0 < navigator.languages.length
                  ? navigator.languages
                  : [navigator.language || navigator.userLanguage],
              n = 0;
            n < i.length;
            n++
          )
            i[n] && t.push(i[n]);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      new i();
  } catch (t) {}
  function i() {
    var t,
      i = this;
    try {
      (this.ns = "CrispLoader"),
        (this.x = {
          warn: function () {},
          error: function () {},
          info: function () {},
          log: function () {},
          debug: function () {},
        }),
        (this.a_ = !1),
        (this.on = "crisp-client"),
        (this.w_ = "client.crisp.chat"),
        (this.I_ = "client.relay.crisp.chat"),
        (this.v_ = "stream.relay.crisp.chat"),
        (this._f = "d2149b0"),
        (this._a = "production"),
        (this.C_ = "https:"),
        (this.$s = "https://crisp.chat"),
        (this.fn = "https://go.crisp.chat"),
        (this._n = "https://image.crisp.chat"),
        (this.fs = "https://game.crisp.chat"),
        (this.ms = this.C_ + "//" + this.I_),
        (this.ws = this.C_ + "//" + this.v_),
        (this._e = this.C_ + "//" + this.w_),
        (this.io = [
          {
            urls: [
              "stun:stun.media.crisp.chat:3478",
              "stun:stun.media.crisp.chat:3479",
            ],
          },
          {
            urls: [
              "turn:turn.media.crisp.chat:3478?transport=udp",
              "turn:turn.media.crisp.chat:3478?transport=tcp",
              "turn:turn.media.crisp.chat:3479?transport=udp",
              "turn:turn.media.crisp.chat:3479?transport=tcp",
              "turns:turn.media.crisp.chat:443?transport=tcp",
            ],
            username: "client_9F9kh",
            credential:
              "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p",
          },
        ]),
        (this.do = !0),
        (this.m_ = {
          domains: [],
          agents: [
            "Trident",
            "Googlebot",
            "Bingbot",
            "Slurp",
            "DuckDuckBot",
            "Baiduspider",
            "YandexBot",
            "GTmetrix",
            "Lighthouse",
            "Acunetix",
            "Ahrefs",
          ],
        }),
        (this.Qp = "static/javascripts"),
        (this.Zp = "static/stylesheets"),
        (this.v = "$__CRISP_INSTANCE"),
        (this.R_ = "$__CRISP_INCLUDED"),
        (this.w = 100),
        (this.s_ = 3e4),
        (this.S_ = 1e3),
        (this.l_ = 280),
        (this.c_ = 320),
        (this.h_ = 420),
        (this.d_ = [
          { pattern: /edg(?:e)?\/([0-9\.]+)/, version: 79 },
          { pattern: /chrom(?:e|ium)\/([0-9\.]+)/, version: 53 },
          { pattern: /firefox\/([0-9\.]+)/, version: 49 },
          {
            pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
            version: 10,
          },
          { pattern: /android ([0-9\.]+)/, version: 5 },
        ]),
        (this.u_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i),
        this.Mp(),
        !0 === window[this.R_] ||
          (void 0 !== window[this.v] &&
            "function" == typeof window[this.v].__init) ||
          !0 !== this.f_() ||
          ((window[this.R_] = !0),
          "interactive" === document.readyState ||
          "complete" === document.readyState
            ? this.init()
            : ((t = document.onreadystatechange || function () {}),
              window.addEventListener("DOMContentLoaded", function () {
                i.init();
              }),
              (document.onreadystatechange = function () {
                "function" == typeof t && t(),
                  ("interactive" !== document.readyState &&
                    "complete" !== document.readyState) ||
                    setTimeout(function () {
                      i.init();
                    }, i.S_);
              })),
          this.Yp());
    } catch (t) {}
  }
})();
