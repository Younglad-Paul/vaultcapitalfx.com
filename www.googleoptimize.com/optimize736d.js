// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "8",

      macros: [{ function: "__e" }, { function: "__dee" }],
      tags: [
        {
          function: "__asprv",
          vtp_globalName: "google_optimize",
          vtp_listenForMutations: false,
          tag_id: 6,
        },
        { function: "__asprv", tag_id: 7 },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: ["macro", 1] },
        { function: "_eq", arg0: ["macro", 0], arg1: "optimize.callback" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ha =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ia;
  if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
  else {
    var ja;
    a: {
      var ka = { a: !0 },
        la = {};
      try {
        la.__proto__ = ka;
        ja = la.a;
        break a;
      } catch (a) {}
      ja = !1;
    }
    ia = ja
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ma = ia,
    na = function (a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (ma) ma(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.fl = b.prototype;
    },
    oa = this || self,
    pa = function (a) {
      return a;
    };
  var qa = function () {},
    ra = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    sa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ta = Array.isArray,
    ua = function (a, b) {
      if (a && ta(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    va = function (a, b) {
      if (!sa(a) || !sa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ya = function (a, b) {
      for (var c = new wa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Aa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ba = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ca = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Da = function (a) {
      var b = [];
      if (ta(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ea = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Fa = function () {
      return new Date(Date.now());
    },
    Ga = function () {
      return Fa().getTime();
    },
    wa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  wa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  wa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ha = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ia = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ja = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    La = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ma = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Na = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Oa = /^\w{1,9}$/,
    Pa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Oa.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ra = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Sa() {
    for (var a = Ta, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ua() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Ta, Va;
  function Wa(a) {
    Ta = Ta || Ua();
    Va = Va || Sa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Ta[m], Ta[n], Ta[p], Ta[q]);
    }
    return b.join("");
  }
  function Xa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Va[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Ta = Ta || Ua();
    Va = Va || Sa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var Ya = {},
    Za = function (a, b) {
      Ya[a] = Ya[a] || [];
      Ya[a][b] = !0;
    },
    $a = function () {
      delete Ya.GA4_EVENT;
    },
    ab = function (a) {
      var b = Ya[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Wa(c.join("")).replace(/\.+$/, "");
    };
  var bb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var cb,
    db = function () {
      if (void 0 === cb) {
        var a = null,
          b = oa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: pa,
              createScript: pa,
              createScriptURL: pa,
            });
          } catch (c) {
            oa.console && oa.console.error(c.message);
          }
          cb = a;
        } else cb = a;
      }
      return cb;
    };
  var fb = function (a, b) {
    this.h = b === eb ? a : "";
  };
  fb.prototype.toString = function () {
    return this.h + "";
  };
  var eb = {};
  var gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var hb, ib;
  a: {
    for (var jb = ["CLOSURE_FLAGS"], kb = oa, lb = 0; lb < jb.length; lb++)
      if (((kb = kb[jb[lb]]), null == kb)) {
        ib = null;
        break a;
      }
    ib = kb;
  }
  var mb = ib && ib[610401301];
  hb = null != mb ? mb : !1;
  function nb() {
    var a = oa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var ob,
    pb = oa.navigator;
  ob = pb ? pb.userAgentData || null : null;
  function qb(a) {
    return hb
      ? ob
        ? ob.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function rb(a) {
    return -1 != nb().indexOf(a);
  }
  function sb() {
    return hb ? !!ob && 0 < ob.brands.length : !1;
  }
  function tb() {
    return sb() ? !1 : rb("Opera");
  }
  function ub() {
    return rb("Firefox") || rb("FxiOS");
  }
  function vb() {
    return sb()
      ? qb("Chromium")
      : ((rb("Chrome") || rb("CriOS")) && !(sb() ? 0 : rb("Edge"))) ||
          rb("Silk");
  }
  var wb = {},
    xb = function (a, b) {
      this.h = b === wb ? a : "";
    };
  xb.prototype.toString = function () {
    return this.h.toString();
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function yb(a, b) {
    if (void 0 !== a.tagName) {
      if ("script" === a.tagName.toLowerCase()) throw Error("");
      if ("style" === a.tagName.toLowerCase()) throw Error("");
    }
    a.innerHTML =
      b instanceof xb && b.constructor === xb ? b.h : "type_error:SafeHtml";
  }
  function zb(a) {
    var b = (a = Ab(a)),
      c = db(),
      d = c ? c.createHTML(b) : b;
    return new xb(d, wb);
  }
  function Ab(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    C = document,
    Bb = navigator,
    Cb = C.currentScript && C.currentScript.src,
    Db = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Eb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Fb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Gb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Hb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Ib = function (a, b, c, d, e) {
      var f = C.createElement("script");
      Hb(f, d, Fb);
      f.type = "text/javascript";
      f.async = !0;
      var g,
        l = Ab(a),
        m = db(),
        n = m ? m.createScriptURL(l) : l;
      g = new fb(n, eb);
      f.src =
        g instanceof fb && g.constructor === fb
          ? g.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        r =
          null ==
          (t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : t.call(q, "script[nonce]");
      (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Eb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = C.getElementsByTagName("script")[0] || C.body || C.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Jb = function () {
      if (Cb) {
        var a = Cb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Kb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        l = !1;
      g || ((g = C.createElement("iframe")), (l = !0));
      Hb(g, c, Gb);
      d &&
        k(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (l) {
        var m = (C.body && C.body.lastChild) || C.body || C.head;
        m.parentNode.insertBefore(g, m);
      }
      Eb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Lb = function (a, b, c, d) {
      var e = new Image(1, 1);
      Hb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Mb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Nb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    E = function (a) {
      z.setTimeout(a, 0);
    },
    Ob = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Pb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Qb = function (a) {
      var b = C.createElement("div");
      yb(b, zb("A<div>" + a + "</div>"));
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    },
    Rb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Sb = function (a) {
      var b;
      try {
        b = Bb.sendBeacon && Bb.sendBeacon(a);
      } catch (c) {
        Za("TAGGING", 15);
      }
      b || Lb(a);
    },
    Tb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Ub = function (a, b) {
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Vb = function () {
      var a = z.performance;
      if (a && ra(a.now)) return a.now();
    },
    Wb = function () {
      return z.performance || void 0;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Xb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Yb = function (a) {
      if (null == a) return String(a);
      var b = Xb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Zb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    G = function (a) {
      if (!a || "object" != Yb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Zb(a, "constructor") &&
          !Zb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Zb(a, b);
    },
    J = function (a, b) {
      var c = b || ("array" == Yb(a) ? [] : {}),
        d;
      for (d in a)
        if (Zb(a, d)) {
          var e = a[d];
          "array" == Yb(e)
            ? ("array" != Yb(c[d]) && (c[d] = []), (c[d] = J(e, c[d])))
            : G(e)
            ? (G(c[d]) || (c[d] = {}), (c[d] = J(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var $b = function (a) {
    if (void 0 === a || ta(a) || G(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var ac = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      gi: a("consent"),
      fg: a("convert_case_to"),
      gg: a("convert_false_to"),
      hg: a("convert_null_to"),
      ig: a("convert_true_to"),
      jg: a("convert_undefined_to"),
      Lk: a("debug_mode_metadata"),
      rb: a("function"),
      nf: a("instance_name"),
      Xi: a("live_only"),
      Yi: a("malware_disabled"),
      Zi: a("metadata"),
      cj: a("original_activity_id"),
      Pk: a("original_vendor_template_id"),
      Ok: a("once_on_load"),
      bj: a("once_per_event"),
      lh: a("once_per_load"),
      Rk: a("priority_override"),
      Sk: a("respected_consent_types"),
      ph: a("setup_tags"),
      Xc: a("tag_id"),
      uh: a("teardown_tags"),
    };
  })();
  var wc;
  var xc = [],
    yc = [],
    zc = [],
    Ac = [],
    Bc = [],
    Cc = {},
    Dc,
    Ec,
    Gc = function () {
      var a = Fc;
      Ec = Ec || a;
    },
    Hc,
    Ic = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Cc[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.zh && d.zh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.yh && (f.vtp_gtmCachedValues = d.yh);
      if (b) {
        if (null == b.name) {
          var l;
          a: {
            var m = b.index;
            if (null == m) l = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = xc[m];
                  break;
                case 1:
                  n = Ac[m];
                  break;
                default:
                  l = "";
                  break a;
              }
              var p = n && n[ac.nf];
              l = p ? String(p) : "";
            }
          }
          b.name = l;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : wc(c, f, b);
    },
    Kc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Jc(a[e], b, c));
      return d;
    },
    Jc = function (a, b, c) {
      if (ta(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Jc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = xc[f];
            if (!g || b.Ef(g)) return;
            c[f] = !0;
            var l = String(g[ac.nf]);
            try {
              var m = Kc(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Ic(m, { event: b, index: f, type: 2, name: l });
              Hc && (d = Hc.qj(d, m));
            } catch (y) {
              b.Kh && b.Kh(y, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Jc(a[n], b, c)] = Jc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = Jc(a[q], b, c);
              Ec && (p = p || t === Ec.ke);
              d.push(t);
            }
            return Ec && p ? Ec.sj(d) : d.join("");
          case "escape":
            d = Jc(a[1], b, c);
            if (Ec && ta(a[1]) && "macro" === a[1][0] && Ec.Rj(a))
              return Ec.lk(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) bc[a[r]] && (d = bc[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Ac[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { Eh: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = Lc(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Lc = function (a, b, c) {
      try {
        return Dc(Kc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Oc = function (a) {
      function b(t) {
        for (var r = 0; r < t.length; r++) d[t[r]] = !0;
      }
      for (var c = [], d = [], e = Mc(a), f = 0; f < yc.length; f++) {
        var g = yc[f],
          l = Nc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var p = [], q = 0; q < Ac.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Nc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    Mc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Lc(zc[c], a));
        return b[c];
      };
    };
  var Pc = {
    qj: function (a, b) {
      b[ac.fg] &&
        "string" === typeof a &&
        (a = 1 == b[ac.fg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(ac.hg) && null === a && (a = b[ac.hg]);
      b.hasOwnProperty(ac.jg) && void 0 === a && (a = b[ac.jg]);
      b.hasOwnProperty(ac.ig) && !0 === a && (a = b[ac.ig]);
      b.hasOwnProperty(ac.gg) && !1 === a && (a = b[ac.gg]);
      return a;
    },
  };
  var gd = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function hd(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var id = new wa();
  function jd(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = id.get(e);
      f || ((f = new RegExp(b, d)), id.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  var qd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function rd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var vd = function (a) {
      return sd ? C.querySelectorAll(a) : null;
    },
    wd = function (a, b) {
      if (!sd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    xd = !1;
  if (C.querySelectorAll)
    try {
      var yd = C.querySelectorAll(":root");
      yd && 1 == yd.length && yd[0] == C.documentElement && (xd = !0);
    } catch (a) {}
  var sd = xd;
  var M = function (a) {
    Za("GTM", a);
  };
  var O = {
      g: {
        hi: "ad_data_sharing",
        H: "ad_storage",
        ii: "ad_user_data",
        P: "analytics_storage",
        Ad: "region",
        Bd: "consent_updated",
        ag: "wait_for_update",
        mi: "app_remove",
        ni: "app_store_refund",
        oi: "app_store_subscription_cancel",
        ri: "app_store_subscription_convert",
        si: "app_store_subscription_renew",
        kg: "add_payment_info",
        lg: "add_shipping_info",
        uc: "add_to_cart",
        vc: "remove_from_cart",
        mg: "view_cart",
        Ob: "begin_checkout",
        wc: "select_item",
        vb: "view_item_list",
        Pb: "select_promotion",
        wb: "view_promotion",
        Ga: "purchase",
        xc: "refund",
        Ha: "view_item",
        ng: "add_to_wishlist",
        ui: "first_open",
        vi: "first_visit",
        oa: "gtag.config",
        Aa: "gtag.get",
        wi: "in_app_purchase",
        yc: "page_view",
        xi: "session_start",
        Qe: "user_engagement",
        jb: "gclid",
        ia: "ads_data_redaction",
        W: "allow_ad_personalization_signals",
        Dd: "allow_custom_scripts",
        yi: "allow_display_features",
        Ed: "allow_enhanced_conversions",
        kb: "allow_google_signals",
        wa: "allow_interest_groups",
        Qb: "auid",
        zi: "auto_detection_enabled",
        xb: "aw_remarketing",
        Re: "aw_remarketing_only",
        Fd: "discount",
        Gd: "aw_feed_country",
        Hd: "aw_feed_language",
        X: "items",
        Id: "aw_merchant_id",
        og: "aw_basket_type",
        Jd: "campaign_content",
        Kd: "campaign_id",
        Ld: "campaign_medium",
        Md: "campaign_name",
        zc: "campaign",
        Nd: "campaign_source",
        Od: "campaign_term",
        lb: "client_id",
        Ai: "content_group",
        Bi: "content_type",
        Ba: "conversion_cookie_prefix",
        Ac: "conversion_id",
        qa: "conversion_linker",
        yb: "conversion_api",
        Oa: "cookie_domain",
        Ca: "cookie_expires",
        Pa: "cookie_flags",
        Rb: "cookie_name",
        Pd: "cookie_path",
        Ia: "cookie_prefix",
        nb: "cookie_update",
        ob: "country",
        ra: "currency",
        Qd: "customer_lifetime_value",
        Sb: "custom_map",
        pg: "gcldc",
        Ci: "debug_mode",
        V: "developer_id",
        Di: "disable_merchant_reported_purchases",
        Tb: "dc_custom_params",
        qg: "dc_natural_search",
        Se: "dynamic_event_settings",
        Ei: "affiliation",
        rg: "checkout_option",
        sg: "checkout_step",
        Fi: "coupon",
        Te: "item_list_name",
        Ue: "list_name",
        Gi: "promotions",
        Rd: "shipping",
        ug: "tax",
        Sd: "engagement_time_msec",
        Bc: "enhanced_client_id",
        Cc: "enhanced_conversions",
        vg: "enhanced_conversions_automatic_settings",
        Td: "estimated_delivery_date",
        Ve: "euid_logged_in_state",
        Ub: "event_callback",
        pb: "event_developer_id_string",
        wg: "event",
        Ud: "event_settings",
        Vd: "event_timeout",
        Hi: "experiments",
        We: "firebase_id",
        Wd: "first_party_collection",
        Xd: "_x_20",
        zb: "_x_19",
        xg: "fledge",
        yg: "flight_error_code",
        zg: "flight_error_message",
        Ag: "fl_activity_category",
        Bg: "fl_activity_group",
        Xe: "fl_advertiser_id",
        Cg: "fl_ar_dedupe",
        Dg: "fl_random_number",
        Eg: "tran",
        Fg: "u",
        Yd: "gac_gclid",
        Vb: "gac_wbraid",
        Gg: "gac_wbraid_multiple_conversions",
        Ye: "ga_restrict_domain",
        Ze: "ga_temp_client_id",
        Zd: "gdpr_applies",
        Hg: "geo_granularity",
        Ta: "value_callback",
        Ja: "value_key",
        Mk: "google_ono",
        Ua: "google_signals",
        ae: "google_tld",
        be: "groups",
        Ig: "gsa_experiment_id",
        Jg: "iframe_state",
        ce: "ignore_referrer",
        af: "internal_traffic_results",
        de: "is_legacy_loaded",
        ee: "is_passthrough",
        xa: "language",
        bf: "legacy_developer_id_string",
        sa: "linker",
        Wb: "accept_incoming",
        Ab: "decorate_forms",
        R: "domains",
        Xb: "url_position",
        Kg: "method",
        Dc: "new_customer",
        Lg: "non_interaction",
        Ii: "optimize_id",
        Mg: "page_hostname",
        Yb: "page_path",
        Da: "page_referrer",
        Bb: "page_title",
        Ng: "passengers",
        Og: "phone_conversion_callback",
        Ji: "phone_conversion_country_code",
        Pg: "phone_conversion_css_class",
        Ki: "phone_conversion_ids",
        Qg: "phone_conversion_number",
        Rg: "phone_conversion_options",
        Zb: "quantity",
        Ec: "redact_device_info",
        cf: "redact_enhanced_user_id",
        Li: "redact_ga_client_id",
        Mi: "redact_user_id",
        fe: "referral_exclusion_definition",
        Cb: "restricted_data_processing",
        Ni: "retoken",
        Sg: "screen_name",
        Db: "screen_resolution",
        Oi: "search_term",
        Ka: "send_page_view",
        Eb: "send_to",
        Fc: "session_duration",
        he: "session_engaged",
        df: "session_engaged_time",
        Va: "session_id",
        ie: "session_number",
        Gc: "delivery_postal_code",
        Tg: "temporary_client_id",
        ef: "topmost_url",
        Pi: "tracking_id",
        ff: "traffic_type",
        ma: "transaction_id",
        va: "transport_url",
        Ug: "trip_type",
        Hc: "update",
        Wa: "url_passthrough",
        Ic: "_user_agent_architecture",
        Jc: "_user_agent_bitness",
        Kc: "_user_agent_full_version_list",
        Lc: "_user_agent_mobile",
        Mc: "_user_agent_model",
        Nc: "_user_agent_platform",
        Oc: "_user_agent_platform_version",
        Pc: "_user_agent_wow64",
        ka: "user_data",
        Vg: "user_data_auto_latency",
        Wg: "user_data_auto_meta",
        Xg: "user_data_auto_multi",
        Yg: "user_data_auto_selectors",
        Zg: "user_data_auto_status",
        hf: "user_data_mode",
        jf: "user_data_settings",
        ya: "user_id",
        La: "user_properties",
        ah: "us_privacy_string",
        da: "value",
        ac: "wbraid",
        bh: "wbraid_multiple_conversions",
        ih: "_host_name",
        jh: "_in_page_command",
        kh: "_is_passthrough_cid",
        me: "non_personalized_ads",
        Wc: "_sst_parameters",
        Sa: "conversion_label",
        ja: "page_location",
        qb: "global_developer_id_string",
        je: "tc_privacy_string",
      },
    },
    Wd = {},
    Xd = Object.freeze(
      ((Wd[O.g.W] = 1),
      (Wd[O.g.Ed] = 1),
      (Wd[O.g.kb] = 1),
      (Wd[O.g.X] = 1),
      (Wd[O.g.Oa] = 1),
      (Wd[O.g.Ca] = 1),
      (Wd[O.g.Pa] = 1),
      (Wd[O.g.Rb] = 1),
      (Wd[O.g.Pd] = 1),
      (Wd[O.g.Ia] = 1),
      (Wd[O.g.nb] = 1),
      (Wd[O.g.Sb] = 1),
      (Wd[O.g.V] = 1),
      (Wd[O.g.Se] = 1),
      (Wd[O.g.Ub] = 1),
      (Wd[O.g.Ud] = 1),
      (Wd[O.g.Vd] = 1),
      (Wd[O.g.Wd] = 1),
      (Wd[O.g.Ye] = 1),
      (Wd[O.g.Ua] = 1),
      (Wd[O.g.ae] = 1),
      (Wd[O.g.be] = 1),
      (Wd[O.g.af] = 1),
      (Wd[O.g.de] = 1),
      (Wd[O.g.sa] = 1),
      (Wd[O.g.cf] = 1),
      (Wd[O.g.fe] = 1),
      (Wd[O.g.Cb] = 1),
      (Wd[O.g.Ka] = 1),
      (Wd[O.g.Eb] = 1),
      (Wd[O.g.Fc] = 1),
      (Wd[O.g.df] = 1),
      (Wd[O.g.Gc] = 1),
      (Wd[O.g.va] = 1),
      (Wd[O.g.Hc] = 1),
      (Wd[O.g.jf] = 1),
      (Wd[O.g.La] = 1),
      (Wd[O.g.Wc] = 1),
      Wd)
    );
  Object.freeze([
    O.g.ja,
    O.g.Da,
    O.g.Bb,
    O.g.xa,
    O.g.Sg,
    O.g.ya,
    O.g.We,
    O.g.Ai,
  ]);
  var Yd = {},
    Zd = Object.freeze(
      ((Yd[O.g.mi] = 1),
      (Yd[O.g.ni] = 1),
      (Yd[O.g.oi] = 1),
      (Yd[O.g.ri] = 1),
      (Yd[O.g.si] = 1),
      (Yd[O.g.ui] = 1),
      (Yd[O.g.vi] = 1),
      (Yd[O.g.wi] = 1),
      (Yd[O.g.xi] = 1),
      (Yd[O.g.Qe] = 1),
      Yd)
    ),
    $d = {},
    ae = Object.freeze(
      (($d[O.g.kg] = 1),
      ($d[O.g.lg] = 1),
      ($d[O.g.uc] = 1),
      ($d[O.g.vc] = 1),
      ($d[O.g.mg] = 1),
      ($d[O.g.Ob] = 1),
      ($d[O.g.wc] = 1),
      ($d[O.g.vb] = 1),
      ($d[O.g.Pb] = 1),
      ($d[O.g.wb] = 1),
      ($d[O.g.Ga] = 1),
      ($d[O.g.xc] = 1),
      ($d[O.g.Ha] = 1),
      ($d[O.g.ng] = 1),
      $d)
    ),
    be = Object.freeze([O.g.W, O.g.kb, O.g.nb]),
    ce = Object.freeze([].concat(be)),
    de = Object.freeze([O.g.Ca, O.g.Vd, O.g.Fc, O.g.df, O.g.Sd]),
    ee = Object.freeze([].concat(de)),
    ge = {},
    he = ((ge[O.g.H] = "1"), (ge[O.g.P] = "2"), ge),
    ie = {},
    je = Object.freeze(
      ((ie[O.g.W] = 1),
      (ie[O.g.Ed] = 1),
      (ie[O.g.wa] = 1),
      (ie[O.g.xb] = 1),
      (ie[O.g.Re] = 1),
      (ie[O.g.Fd] = 1),
      (ie[O.g.Gd] = 1),
      (ie[O.g.Hd] = 1),
      (ie[O.g.X] = 1),
      (ie[O.g.Id] = 1),
      (ie[O.g.Ba] = 1),
      (ie[O.g.qa] = 1),
      (ie[O.g.Oa] = 1),
      (ie[O.g.Ca] = 1),
      (ie[O.g.Pa] = 1),
      (ie[O.g.Ia] = 1),
      (ie[O.g.ra] = 1),
      (ie[O.g.Qd] = 1),
      (ie[O.g.V] = 1),
      (ie[O.g.Di] = 1),
      (ie[O.g.Cc] = 1),
      (ie[O.g.Td] = 1),
      (ie[O.g.We] = 1),
      (ie[O.g.Wd] = 1),
      (ie[O.g.de] = 1),
      (ie[O.g.xa] = 1),
      (ie[O.g.Dc] = 1),
      (ie[O.g.ja] = 1),
      (ie[O.g.Da] = 1),
      (ie[O.g.Og] = 1),
      (ie[O.g.Pg] = 1),
      (ie[O.g.Qg] = 1),
      (ie[O.g.Rg] = 1),
      (ie[O.g.Cb] = 1),
      (ie[O.g.Ka] = 1),
      (ie[O.g.Eb] = 1),
      (ie[O.g.Gc] = 1),
      (ie[O.g.ma] = 1),
      (ie[O.g.va] = 1),
      (ie[O.g.Hc] = 1),
      (ie[O.g.Wa] = 1),
      (ie[O.g.ka] = 1),
      (ie[O.g.ya] = 1),
      (ie[O.g.da] = 1),
      ie)
    );
  Object.freeze(O.g);
  var ke = {},
    le = (z.google_tag_manager = z.google_tag_manager || {}),
    me = Math.random();
  ke.qf = "34j0";
  ke.Vc = Number("0") || 0;
  ke.ca = "dataLayer";
  ke.ki = "";
  var ne = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    oe = { __paused: !0, __tg: !0 },
    pe;
  for (pe in ne) ne.hasOwnProperty(pe) && (oe[pe] = !0);
  var qe = Ca(""),
    re,
    se = !1;
  re = se;
  var te,
    ue = !1;
  te = ue;
  var ve,
    we = !1;
  ve = we;
  var xe,
    ye = !1;
  ye = !0;
  xe = ye;
  ke.Cd = "www.googletagmanager.com";
  var ze = "" + ke.Cd + (re ? "/gtag/js" : "/gtm.js"),
    Ae = null,
    Be = null,
    Ce = {},
    De = {},
    Ee = {},
    Fe = function () {
      var a = le.sequence || 1;
      le.sequence = a + 1;
      return a;
    };
  ke.ji = "";
  var Ge = "";
  ke.qe = Ge;
  var He = new wa(),
    Ie = {},
    Je = {},
    Me = {
      name: ke.ca,
      set: function (a, b) {
        J(Na(a, b), Ie);
        Ke();
      },
      get: function (a) {
        return Le(a, 2);
      },
      reset: function () {
        He = new wa();
        Ie = {};
        Ke();
      },
    },
    Le = function (a, b) {
      return 2 != b ? He.get(a) : Ne(a);
    },
    Ne = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ie, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Oe = function (a, b) {
      Je.hasOwnProperty(a) || (He.set(a, b), J(Na(a, b), Ie), Ke());
    },
    Ke = function (a) {
      k(Je, function (b, c) {
        He.set(b, c);
        J(Na(b), Ie);
        J(Na(b, c), Ie);
        a && delete Je[b];
      });
    },
    Pe = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ne(a) : He.get(a);
      "array" === Yb(d) || "object" === Yb(d) ? (c = J(d)) : (c = d);
      return c;
    };
  var Qe = [],
    Re = function (a) {
      return void 0 == Qe[a] ? !1 : Qe[a];
    };
  var P = [];
  P[7] = !0;
  P[9] = !0;
  P[27] = !0;
  P[11] = !0;
  P[13] = !0;
  P[15] = !0;
  P[16] = !0;
  P[25] = !0;
  P[36] = !0;
  P[38] = !0;
  P[39] = !0;
  P[40] = !0;
  P[41] = !0;
  P[82] = !0;
  P[43] = !0;
  P[52] = !0;
  P[57] = !0;
  P[59] = !0;
  P[61] = !0;
  P[67] = !0;
  P[68] = !0;
  P[69] = !0;
  P[72] = !0;
  P[75] = !0;
  Qe[2] = !0;
  P[76] = !0;
  P[77] = !0;
  P[79] = !0;
  P[80] = !0;
  P[83] = !0;
  P[85] = !0;
  P[87] = !0;
  P[88] = !0;
  P[89] = !0;
  P[91] = !0;
  P[92] = !0;
  P[93] = !0;
  P[94] = !0;
  P[96] = !0;
  P[97] = !0;
  P[100] = !0;
  var Q = function (a) {
    return !!P[a];
  };
  var Te = Se();
  function Se() {
    if (!Q(87)) return {};
    try {
      return JSON.parse(Xa("e30"));
    } catch (a) {
      return M(123), Za("HEALTH", 2), {};
    }
  }
  var Ue = { rj: "", Rh: "", Nj: "", Aj: "" },
    Ve = function () {
      return Q(87) ? Te["0"] || "" : Ue.rj;
    },
    We = function () {
      var a = "";
      return a;
    },
    Xe = function () {
      var a = !1;
      return a;
    };
  var Ye,
    Ze = !1,
    $e = function (a) {
      if (!Ze) {
        Ze = !0;
        Ye = Ye || {};
      }
      return Ye[a];
    };
  var af = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    bf = function (a) {
      if (C.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var l = g.indexOf("opacity(");
          0 <= l &&
            ((g = g.substring(l + 8, g.indexOf(")", l))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var of = /:[0-9]+$/,
    pf = /^\d+\.fls\.doubleclick\.net$/,
    qf = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    tf = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = rf(a.protocol) || rf(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(of, "")
            .toLowerCase());
      return sf(a, b, c, d, e);
    },
    sf = function (a, b, c, d, e) {
      var f,
        g = rf(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = uf(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(of, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Za("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = qf(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    rf = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    uf = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    vf = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Za("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(of, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    wf = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = vf(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    xf = function (a) {
      var b = vf(z.location.href),
        c = tf(b, "host", !1);
      if (c && c.match(pf)) {
        var d = tf(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var Vf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Wf = function (a) {
    Wf[" "](a);
    return a;
  };
  Wf[" "] = function () {};
  var Yf = function () {
    var a = Xf,
      b = "Cf";
    if (a.Cf && a.hasOwnProperty(b)) return a.Cf;
    var c = new a();
    return (a.Cf = c);
  };
  var Xf = function () {
    var a = {};
    this.h = function () {
      var b = Vf.h,
        c = Vf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {
      a[Vf.h] = !0;
    };
  };
  var Zf = !1,
    $f = !1,
    ag = [],
    bg = {},
    cg = { ad_storage: !1, ad_user_data: !1, ad_data_sharing: !1 };
  function dg() {
    var a = Db("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        cps: {},
        set: eg,
        update: fg,
        declare: gg,
        implicit: hg,
        addListener: ig,
        notifyListeners: jg,
        setCps: kg,
        active: !1,
        usedDeclare: !1,
        usedDefault: !1,
        usedUpdate: !1,
        usedImplicit: !1,
        usedSetCps: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function lg(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function gg(a, b, c, d, e) {
    var f = dg();
    f.active = !0;
    f.usedDeclare = !0;
    var g = f.entries,
      l = g[a] || {},
      m = l.declare_region,
      n = c && h(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (lg(n, m, d, e)) {
      var p = {
        region: l.region,
        declare_region: n,
        declare: "granted" === b,
        implicit: l.implicit,
        initial: l.initial,
        update: l.update,
        quiet: l.quiet,
      };
      if ("" !== d || !1 !== l.declare) g[a] = p;
    }
  }
  function hg(a, b) {
    var c = dg();
    c.active = !0;
    c.usedImplicit = !0;
    var d = c.entries,
      e = (d[a] = d[a] || {});
    !1 !== e.implicit && (e.implicit = "granted" === b);
  }
  function eg(a, b, c, d, e, f) {
    var g = dg();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    Za("TAGGING", 19);
    if (void 0 == b) Za("TAGGING", 18);
    else {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        p = c && h(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if (lg(p, n, d, e)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          t = {
            region: p,
            declare_region: m.declare_region,
            implicit: m.implicit,
            initial: "granted" === b,
            declare: m.declare,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.initial) l[a] = t;
        q &&
          z.setTimeout(function () {
            if (l[a] === t && t.quiet) {
              t.quiet = !1;
              var r = [a];
              if (Re(4))
                for (var u in bg)
                  bg.hasOwnProperty(u) && bg[u] === a && r.push(u);
              for (var v = 0; v < r.length; v++) mg(r[v]);
              jg();
              Za("TAGGING", 2);
            }
          }, f);
      }
    }
  }
  function fg(a, b) {
    var c = dg();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = ng(c, a, !0),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = ng(c, a, !0),
        l = [a];
      if (Re(4))
        for (var m in bg) bg.hasOwnProperty(m) && bg[m] === a && l.push(m);
      if (f.quiet) {
        f.quiet = !1;
        for (var n = 0; n < l.length; n++) mg(l[n]);
      } else if (g !== d) for (var p = 0; p < l.length; p++) mg(l[p]);
    }
  }
  function kg(a, b, c, d, e) {
    var f = dg(),
      g;
    a: {
      var l = f.cps,
        m,
        n = l[a] || {},
        p = n.region,
        q = c && h(c) ? c.toUpperCase() : void 0;
      m = d.toUpperCase();
      if (lg(q, p, m, e.toUpperCase())) {
        var t = { enabled: "granted" === b, region: q };
        if ("" !== m || !1 !== n.enabled) {
          l[a] = t;
          g = !0;
          break a;
        }
      }
      g = !1;
    }
    g && (f.usedSetCps = !0);
  }
  function ig(a, b) {
    ag.push({ consentTypes: a, zj: b });
  }
  function mg(a) {
    for (var b = 0; b < ag.length; ++b) {
      var c = ag[b];
      ta(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Oh = !0);
    }
  }
  function jg(a, b) {
    for (var c = 0; c < ag.length; ++c) {
      var d = ag[c];
      if (d.Oh) {
        d.Oh = !1;
        try {
          d.zj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function ng(a, b, c) {
    var d = a.entries[b] || {},
      e = d.update;
    if (void 0 !== e) return e;
    e = d.initial;
    if (void 0 !== e) return e;
    if (Re(4) && c && bg.hasOwnProperty(b)) return ng(a, bg[b], !1);
    e = d.declare;
    if (void 0 !== e) return e;
    e = d.implicit;
    if (void 0 !== e) return e;
    if (Re(3) && cg.hasOwnProperty(b)) return cg[b];
  }
  var og = function (a) {
      var b = dg();
      b.accessedAny = !0;
      return ng(b, a, !0);
    },
    pg = function (a) {
      var b = dg();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    qg = function (a) {
      return (dg().entries[a] || {}).declare;
    },
    rg = function (a) {
      var b = dg();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    sg = function () {
      if (!Yf().h()) return !1;
      var a = dg();
      a.accessedAny = !0;
      return a.active;
    },
    tg = function () {
      var a = dg();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    ug = function (a, b) {
      dg().addListener(a, b);
    },
    vg = function (a, b) {
      dg().notifyListeners(a, b);
    },
    wg = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!rg(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        ug(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    xg = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === og(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        ug(d, function (f) {
          var g = c();
          0 < g.length && ((f.consentTypes = g), a(f));
        });
    };
  function yg() {}
  function zg() {}
  function Ag(a, b) {
    if (!Q(104) || b) {
      for (var c = [], d = 0; d < Bg.length; d++) {
        var e = a(Bg[d]);
        c[d] = !0 === e ? "1" : !1 === e ? "0" : "-";
      }
      return c.join("");
    }
    for (var f = [], g = 0; g < Cg.length; g++) {
      var l = a(Cg[g]);
      f[g] = !0 === l ? "1" : !1 === l ? "0" : "-";
    }
    return f.join("");
  }
  var Bg = [O.g.H, O.g.P],
    Cg = [O.g.H, O.g.P, O.g.ii, O.g.hi],
    Dg = function (a) {
      for (
        var b = a[O.g.Ad], c = Array.isArray(b) ? b : [b], d = { nc: 0 };
        d.nc < c.length;
        d = { nc: d.nc }, ++d.nc
      )
        k(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== O.g.Ad) {
                var l = c[e.nc],
                  m = Ve(),
                  n = Q(87) ? Te["1"] || "" : Ue.Rh;
                $f = !0;
                Zf && Za("TAGGING", 20);
                dg().declare(f, g, l, m, n);
              }
            };
          })(d)
        );
    },
    Eg = function (a) {
      var b = a[O.g.Ad];
      b && M(40);
      var c = a[O.g.ag];
      c && M(41);
      for (
        var d = ta(b) ? b : [b], e = { oc: 0 };
        e.oc < d.length;
        e = { oc: e.oc }, ++e.oc
      )
        k(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== O.g.Ad && g !== O.g.ag) {
                var m = d[f.oc],
                  n = Number(c),
                  p = Ve(),
                  q = Q(87) ? Te["1"] || "" : Ue.Rh;
                Zf = !0;
                $f && Za("TAGGING", 20);
                dg().set(g, l, m, p, q, n);
              }
            };
          })(e)
        );
    },
    Fg = function (a, b) {
      k(a, function (c, d) {
        Zf = !0;
        $f && Za("TAGGING", 20);
        dg().update(c, d);
      });
      vg(b.eventId, b.priorityId);
    },
    Gg = function (a) {
      var b = og(a);
      return void 0 != b ? b : !0;
    },
    Hg = function () {
      return "G" + (Q(104) ? "2" : "1") + Ag(og);
    },
    Ig = function (a, b) {
      xg(a, b);
    },
    Jg = function (a, b) {
      wg(a, b);
    };
  var Kg = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Lg = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Vg = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Wg = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Xg(a) {
    return "null" !== a.origin;
  }
  var $g = function (a, b, c, d) {
      return Yg(d) ? Lg(a, String(b || Zg()), c) : [];
    },
    ch = function (a, b, c, d, e) {
      if (Yg(e)) {
        var f = ah(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = bh(
            f,
            function (g) {
              return g.we;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = bh(
            f,
            function (g) {
              return g.md;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function dh(a, b, c, d) {
    var e = Zg(),
      f = window;
    Xg(f) && (f.document.cookie = a);
    var g = Zg();
    return e != g || (void 0 != c && 0 <= $g(b, g, !1, d).indexOf(c));
  }
  var hh = function (a, b, c) {
      function d(r, u, v) {
        if (null == v) return delete g[u], r;
        g[u] = v;
        return r + "; " + u + "=" + v;
      }
      function e(r, u) {
        if (null == u) return delete g[u], r;
        g[u] = !0;
        return r + "; " + u;
      }
      if (!Yg(c.ab)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = eh(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.Zk);
      f = d(f, "samesite", c.al);
      c.bl && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = fh(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!gh(q, c.path) && dh(t, a, b, c.ab)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return gh(m, c.path) ? 1 : dh(f, a, b, c.ab) ? 0 : 1;
    },
    ih = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return hh(a, b, c);
    };
  function bh(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function ah(a, b, c) {
    for (var d = [], e = $g(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), we: 1 * m[0] || 1, md: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var eh = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    jh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    kh = /(^|\.)doubleclick\.net$/i,
    gh = function (a, b) {
      return (
        kh.test(window.document.location.hostname) || ("/" === b && jh.test(a))
      );
    },
    Zg = function () {
      return Xg(window) ? window.document.cookie : "";
    },
    fh = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      kh.test(e) || jh.test(e) || a.push("none");
      return a;
    },
    Yg = function (a) {
      if (!Yf().h() || !a || !sg()) return !0;
      if (!rg(a)) return !1;
      var b = og(a);
      return null == b ? !0 : !!b;
    };
  var lh = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Kg(a) & 2147483647)) : String(b);
    },
    mh = function (a) {
      return [lh(a), Math.round(Ga() / 1e3)].join(".");
    },
    ph = function (a, b, c, d, e) {
      var f = nh(b);
      return ch(a, f, oh(c), d, e);
    },
    qh = function (a, b, c, d) {
      var e = "" + nh(c),
        f = oh(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    nh = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    oh = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var rh = function () {
    le.dedupe_gclid || (le.dedupe_gclid = "" + mh());
    return le.dedupe_gclid;
  };
  var sh = function () {
    var a = !1;
    return a;
  };
  var th = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    uh = function () {
      var a = Db("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new th()), (a.tidr = b));
      return b;
    };
  var S = { C: "GTM-5PHKT7Q", ib: "" },
    vh = { Mh: "GTM-5PHKT7Q", Nh: "GTM-5PHKT7Q" };
  S.Sc = Ca("");
  var wh = function () {
      return vh.Mh ? vh.Mh.split("|") : [S.C];
    },
    xh = function () {
      return vh.Nh ? vh.Nh.split("|") : [];
    },
    yh = function () {
      for (var a = uh(), b = wh(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = wh()), (d.destinations = xh()))
          : (a.container[b[c]] = {
              state: 2,
              containers: wh(),
              destinations: xh(),
            });
      }
      for (var e = xh(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && M(93);
        g
          ? ((g.state = 2), (g.containers = wh()), (g.destinations = xh()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: wh(),
              destinations: xh(),
            });
      }
      a.canonical[S.ib] = 2;
    },
    zh = function (a) {
      return !!uh().container[a];
    };
  function Ah() {
    return { ctid: S.C, isDestination: S.Sc };
  }
  var Bh = function () {
      var a = uh().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Ch = function () {
      var a = {};
      k(uh().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  var Dh = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Eh = function (a) {
      var b = S.C.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = S.C;
      c.vk = ke.Vc;
      c.yk = ke.qf;
      c.ck = S.Sc ? 2 : 1;
      re ? ((c.He = Dh[b]), c.He || (c.He = 0)) : (c.He = xe ? 13 : 10);
      ve ? (c.Kf = 1) : sh() ? (c.Kf = 2) : (c.Kf = 3);
      var d;
      var e = c.He,
        f = c.Kf;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            rd(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var g = c.Tk,
        l =
          4 +
          d +
          (g
            ? "" +
              rd(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                g
              ]
            : ""),
        m,
        n = c.yk;
      m = n && qd.test(n) ? "" + rd(3, 2) + n : "";
      var p,
        q = c.vk;
      p = q
        ? "" +
          rd(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var t;
      var r = c.ctid;
      if (r && a) {
        var u = r.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) t = "";
        else {
          var w = u[1];
          t =
            "" +
            rd(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.ck || 0) +
            w;
        }
      } else t = "";
      return l + m + p + t;
    };
  function Fh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Gh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Hh() {
    return hb ? !!ob && !!ob.platform : !1;
  }
  function Ih() {
    return rb("iPhone") && !rb("iPod") && !rb("iPad");
  }
  function Jh() {
    Ih() || rb("iPad") || rb("iPod");
  }
  tb();
  sb() || rb("Trident") || rb("MSIE");
  rb("Edge");
  !rb("Gecko") ||
    (-1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge")) ||
    rb("Trident") ||
    rb("MSIE") ||
    rb("Edge");
  -1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge") && rb("Mobile");
  Hh() || rb("Macintosh");
  Hh() || rb("Windows");
  (Hh() ? "Linux" === ob.platform : rb("Linux")) || Hh() || rb("CrOS");
  var Kh = oa.navigator || null;
  Kh && (Kh.appVersion || "").indexOf("X11");
  Hh() || rb("Android");
  Ih();
  rb("iPad");
  rb("iPod");
  Jh();
  nb().toLowerCase().indexOf("kaios");
  var Lh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Mh = /#|$/,
    Nh = function (a, b) {
      var c = a.search(Mh),
        d = Lh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Oh = /[?&]($|#)/,
    Ph = function (a, b, c) {
      for (
        var d, e = a.search(Mh), f = 0, g, l = [];
        0 <= (g = Lh(a, f, b, e));

      )
        l.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(Oh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var r = d.indexOf("?"),
          u;
        0 > r || r > t ? ((r = t), (u = "")) : (u = d.substring(r + 1, t));
        q = [d.slice(0, r), u, d.slice(t)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Qh = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Wf(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Rh = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Sh() {
    if (!C.head) return null;
    var a = Th("META");
    C.head.appendChild(a);
    a.httpEquiv = "origin-trial";
    a.content =
      "A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9";
    return a;
  }
  var Uh = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : Qh(z.top)
        ? 1
        : 2;
    },
    Th = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Vh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Th("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            l = bb(g, e);
          0 <= l && Array.prototype.splice.call(g, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Gh(e, "load", f);
      Gh(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Xh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Rh(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Wh(c, b);
    },
    Wh = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          (e.headers = { "Attribution-Reporting-Eligible": "event-source" }));
        c.fetch(a, e);
      } else Vh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Yh = function () {};
  var Zh = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    $h = function (a, b) {
      b = void 0 === b ? {} : b;
      this.m = a;
      this.h = null;
      this.M = {};
      this.ub = 0;
      var c;
      this.Z = null != (c = b.Gk) ? c : 500;
      var d;
      this.J = null != (d = b.Uk) ? d : !1;
      this.B = null;
    };
  na($h, Yh);
  $h.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.J },
      d = Wg(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.Z &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Z));
    var f = function (g, l) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Zh(c)),
          (c.internalBlockOnErrors = b.J),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      ai(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  $h.prototype.removeEventListener = function (a) {
    a && a.listenerId && ai(this, "removeEventListener", null, a.listenerId);
  };
  var ci = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = bi(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && bi(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? bi(a.purpose.legitimateInterests, b) &&
                bi(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    bi = function (a, b) {
      return !(!a || !a[b]);
    },
    ai = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.m.__tcfapi) {
        var e = a.m.__tcfapi;
        e(b, 2, c, d);
      } else if (di(a)) {
        ei(a);
        var f = ++a.ub;
        a.M[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    di = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.m, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    ei = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Gh(a.m, "message", a.B));
    },
    fi = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Zh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Xh({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var gi = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    hi = Fh("", 500);
  function ii() {
    var a = le.tcf || {};
    return (le.tcf = a);
  }
  var oi = function () {
    var a = ii(),
      b = new $h(z, { Gk: -1 });
    ji(b) && ki() && M(124);
    if (!ki() && !a.active && ji(b)) {
      a.active = !0;
      a.Ee = {};
      li();
      a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) mi(a), ni(a);
          else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in gi) gi.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (
              "tcloaded" === c.eventStatus ||
              "useractioncomplete" === c.eventStatus ||
              "cmpuishown" === c.eventStatus
            ) {
              var g = {},
                l;
              for (l in gi)
                if (gi.hasOwnProperty(l))
                  if ("1" === l) {
                    var m,
                      n = c,
                      p = !0;
                    p = void 0 === p ? !1 : p;
                    m = fi(n)
                      ? !1 === n.gdprApplies ||
                        "tcunavailable" === n.tcString ||
                        (void 0 === n.gdprApplies && !p) ||
                        "string" !== typeof n.tcString ||
                        !n.tcString.length
                        ? !0
                        : ci(n, "1", 0)
                      : !1;
                    g["1"] = m;
                  } else g[l] = ci(c, l, gi[l]);
              d = g;
            }
            d && ((a.tcString = c.tcString || "tcempty"), (a.Ee = d), ni(a));
          }
        });
      } catch (c) {
        mi(a), ni(a);
      }
    }
  };
  function mi(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function li() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = hi), a);
    Eg(b);
  }
  function ji(a) {
    return "function" === typeof z.__tcfapi ||
      "function" === typeof a.m.__tcfapi ||
      null != di(a)
      ? !0
      : !1;
  }
  var ki = function () {
    return !0 !== z.gtag_enable_tcf_support;
  };
  function ni(a) {
    var b = {},
      c = ((b.ad_storage = a.Ee["1"] ? "granted" : "denied"), b);
    Fg(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: pi() }
    );
  }
  var pi = function () {
      var a = ii();
      return a.active ? a.tcString || "" : "";
    },
    qi = function () {
      var a = ii();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    ri = function (a) {
      if (!gi.hasOwnProperty(String(a))) return !0;
      var b = ii();
      return b.active && b.Ee ? !!b.Ee[String(a)] : !0;
    };
  var si = function (a) {
      var b = String(a[ac.rb] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    ti =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var ui = { sampleRate: "0.005000", di: "", ci: Number("5"), il: Number("") },
    vi;
  if (!(vi = ti)) {
    var wi = Math.random(),
      xi = ui.sampleRate;
    vi = wi < xi;
  }
  var yi = vi,
    zi = "https://www.googletagmanager.com/a?id=" + S.C + "&cv=8";
  function Ai() {
    return [zi, "&v=3&t=t", "&pid=" + va(), "&rv=" + ke.qf].join("");
  }
  var Bi = Ai();
  function Ci() {
    Bi = Ai();
  }
  var Di = {},
    Ei = "",
    Fi = "",
    Gi = "",
    Hi = "",
    Ii = [],
    Ji = "",
    Ki = "",
    Li = void 0,
    Mi = {},
    Ni = {},
    Oi = void 0,
    Pi = 5;
  0 < ui.ci && (Pi = ui.ci);
  var Qi = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Sj: function () {
          return c < a ? !1 : Ga() - d[c % a] < b;
        },
        sk: function () {
          var f = c++ % a;
          d[f] = Ga();
        },
      };
    })(Pi, 1e3),
    Ri = 1e3;
  function Si(a) {
    var b = Li;
    if (void 0 === b) return "";
    var c = ab("GTM"),
      d = ab("TAGGING"),
      e = ab("HEALTH"),
      f = Bi,
      g = Di[b] ? "" : "&es=1",
      l = Mi[b],
      m = Ti(),
      n = Ei,
      p = Fi,
      q = Ki,
      t = Gi,
      r = Hi,
      u;
    return [
      f,
      g,
      l,
      c ? "&u=" + c : "",
      d ? "&ut=" + d : "",
      e ? "&h=" + e : "",
      m,
      n,
      p,
      q,
      t,
      r,
      u,
      Ji ? "&dl=" + encodeURIComponent(Ji) : "",
      0 < Ii.length ? "&tdp=" + Ii.join(".") : "",
      ke.Vc ? "&x=" + ke.Vc : "",
      "&z=0",
    ].join("");
  }
  function Vi() {
    Oi && (z.clearTimeout(Oi), (Oi = void 0));
    if (void 0 !== Li && (!Di[Li] || Ei || Fi))
      if (Ni[Li] || Qi.Sj() || 0 >= Ri--) M(1), (Ni[Li] = !0);
      else {
        Qi.sk();
        var a = Si(!0);
        Lb(a);
        if (Hi || (Ji && 0 < Ii.length)) {
          var b = a.replace("/a?", "/td?");
          Lb(b);
        }
        Di[Li] = !0;
        Ji = Hi = Gi = Ki = Fi = Ei = "";
        Ii = [];
      }
  }
  function Wi() {
    Oi || (Oi = z.setTimeout(Vi, 500));
  }
  function Xi() {
    2022 <= Si().length && Vi();
  }
  function Ti() {
    return (
      "&tc=" +
      Ac.filter(function (a) {
        return a;
      }).length
    );
  }
  var Yi = function (a, b) {
      if (yi && !Ni[a] && Li !== a) {
        Vi();
        Li = a;
        Gi = Ei = "";
        var c;
        c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
        Mi[a] = "&e=" + c + "&eid=" + a;
        Wi();
      }
    },
    Zi = function (a, b, c) {
      if (yi && b) {
        var d = si(b),
          e = c + d;
        if (!Ni[a]) {
          a !== Li && (Vi(), (Li = a));
          Ei = Ei ? Ei + "." + e : "&tr=" + e;
          var f = b["function"];
          if (!f)
            throw Error("Error: No function name given for function call.");
          var g = (Cc[f] ? "1" : "2") + d;
          Gi = Gi ? Gi + "." + g : "&ti=" + g;
          Wi();
          Xi();
        }
      }
    },
    $i = function (a, b, c) {
      if (yi && void 0 !== a && !Ni[a]) {
        a !== Li && (Vi(), (Li = a));
        var d = c + b;
        Fi = Fi ? Fi + "." + d : "&epr=" + d;
        Wi();
        Xi();
      }
    },
    aj = function (a, b, c) {},
    Ui = void 0;
  ub();
  Ih() || rb("iPod");
  rb("iPad");
  !rb("Android") || vb() || ub() || tb() || rb("Silk");
  vb();
  !rb("Safari") ||
    vb() ||
    (sb() ? 0 : rb("Coast")) ||
    tb() ||
    (sb() ? 0 : rb("Edge")) ||
    (sb() ? qb("Microsoft Edge") : rb("Edg/")) ||
    (sb() ? qb("Opera") : rb("OPR")) ||
    ub() ||
    rb("Silk") ||
    rb("Android") ||
    Jh();
  var bj = {},
    cj = null,
    dj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!cj) {
        cj = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(l[m].split(""));
          bj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === cj[q] && (cj[q] = p);
          }
        }
      }
      for (
        var t = bj[f],
          r = Array(Math.floor(b.length / 3)),
          u = t[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = t[x >> 2],
          D = t[((x & 3) << 4) | (y >> 4)],
          I = t[((y & 15) << 2) | (A >> 6)],
          H = t[A & 63];
        r[w++] = "" + B + D + I + H;
      }
      var F = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (L = t[(F & 15) << 2] || u);
        case 1:
          var K = b[v];
          r[w] = "" + t[K >> 2] + t[((K & 3) << 4) | (F >> 4)] + L + u;
      }
      return r.join("");
    };
  var ej =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function fj() {
    var a;
    return null != (a = z.google_tag_data) ? a : (z.google_tag_data = {});
  }
  function gj() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function hj() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function ij() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = z.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function jj() {
    if (!ij()) return null;
    var a = fj();
    if (a.uach_promise) return a.uach_promise;
    var b = z.navigator.userAgentData
      .getHighEntropyValues(ej)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function pj(a, b, c, d) {
    var e,
      f = Number(null != a.Ya ? a.Ya : void 0);
    0 !== f && (e = new Date((b || Ga()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      ab: d,
    };
  }
  var qj;
  var uj = function () {
      var a = rj,
        b = sj,
        c = tj(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Mb(C, "mousedown", d);
        Mb(C, "keyup", d);
        Mb(C, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    vj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      tj().decorators.push(f);
    },
    wj = function (a, b, c) {
      for (var d = tj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== C.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = g.placement;
          void 0 == t && (t = g.fragment ? 2 : 1);
          t === b && Ja(e, g.callback());
        }
      }
      return e;
    };
  function tj() {
    var a = Db("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var xj = /(.*?)\*(.*?)\*(.*)/,
    yj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    zj = /^(?:www\.|m\.|amp\.)+/,
    Aj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Bj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Dj = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Wa(String(d))));
      }
    var e = b.join("*");
    return ["1", Cj(e), e].join("*");
  };
  function Cj(a, b) {
    var c = [
        Bb.userAgent,
        new Date().getTimezoneOffset(),
        Bb.userLanguage || Bb.language,
        Math.floor(Ga() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = qj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, l = 0; 8 > l; l++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    qj = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ qj[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Vj() {
    return function (a) {
      var b = vf(z.location.href),
        c = b.search.replace("?", ""),
        d = qf(c, "_gl", !0) || "";
      a.query = Wj(d) || {};
      var e = tf(b, "fragment").match(Bj("_gl"));
      a.fragment = Wj((e && e[3]) || "") || {};
    };
  }
  function Xj(a, b) {
    var c = Bj(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Yj = function (a, b) {
      b || (b = "_gl");
      var c = Aj.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Xj(b, (c[2] || "").slice(1)),
        f = Xj(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Zj = function (a) {
      var b = Vj(),
        c = tj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ja(d, e.query), a && Ja(d, e.fragment));
      return d;
    },
    Wj = function (a) {
      try {
        var b = ak(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Xa(d[e + 1]);
            c[f] = g;
          }
          Za("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Za("TAGGING", 8);
      }
    };
  function ak(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = xj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var l = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Cj(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Za("TAGGING", 7);
      }
    }
  }
  function bk(a, b, c, d) {
    function e(p) {
      p = Xj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Aj.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }
  function ck(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = wj(b, 1, c),
      e = wj(b, 2, c),
      f = wj(b, 3, c);
    if (La(d)) {
      var g = Dj(d);
      c ? dk("_gl", g, a) : ek("_gl", g, a, !1);
    }
    if (!c && La(e)) {
      var l = Dj(e);
      ek("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              ek(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              dk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && bk(n, p, q);
        }
  }
  function ek(a, b, c, d) {
    if (c.href) {
      var e = bk(a, b, c.href, void 0 === d ? !1 : d);
      gb.test(e) && (c.href = e);
    }
  }
  function dk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = C.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = bk(a, b, c.action);
        gb.test(n) && (c.action = n);
      }
    }
  }
  function rj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || ck(e, e.hostname);
      }
    } catch (g) {}
  }
  function sj(a) {
    try {
      if (a.action) {
        var b = tf(vf(a.action), "host");
        ck(a, b);
      }
    } catch (c) {}
  }
  var fk = function (a, b, c, d) {
      uj();
      vj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    gk = function (a, b) {
      uj();
      vj(a, [sf(z.location, "host", !0)], b, !0, !0);
    },
    hk = function () {
      var a = C.location.hostname,
        b = yj.exec(C.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(zj, ""),
        m = e.replace(zj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    ik = function (a, b) {
      return !1 === a ? !1 : a || b || hk();
    };
  var jk = ["1"],
    kk = {},
    lk = {},
    nk = function (a) {
      return kk[mk(a)];
    },
    rk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = mk(a.prefix);
      if (!kk[c])
        if (ok(c, a.path, a.domain)) {
          if (Re(1)) {
            var d = lk[mk(a.prefix)];
            pk(a, d ? d.id : void 0, d ? d.Hf : void 0);
          }
        } else {
          if (Re(2)) {
            var e = xf("auiddc");
            if (e) {
              Za("TAGGING", 17);
              kk[c] = e;
              return;
            }
          }
          if (b) {
            var f = mk(a.prefix),
              g = mh();
            if (0 === qk(f, g, a)) {
              var l = Db("google_tag_data", {});
              l._gcl_au || (l._gcl_au = g);
            }
            ok(c, a.path, a.domain);
          }
        }
    };
  function pk(a, b, c) {
    var d = mk(a.prefix),
      e = kk[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ga() / 1e3)));
          qk(d, l, a, 1e3 * g);
        }
      }
    }
  }
  function qk(a, b, c, d) {
    var e = qh(b, "1", c.domain, c.path),
      f = pj(c, d);
    f.ab = "ad_storage";
    return ih(a, e, f);
  }
  function ok(a, b, c) {
    var d = ph(a, b, c, jk, "ad_storage");
    if (!d) return !1;
    sk(a, d);
    return !0;
  }
  function sk(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((kk[a] = c.slice(0, 2).join(".")),
        (lk[a] = { id: c.slice(2, 4).join("."), Hf: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (lk[a] = { id: c.slice(0, 2).join("."), Hf: Number(c[2]) || 0 })
      : (kk[a] = b);
  }
  function mk(a) {
    return (a || "_gcl") + "_au";
  }
  function tk(a) {
    sg() || a();
    wg(
      function () {
        og("ad_storage") && a();
        xg(a, "ad_storage");
      },
      ["ad_storage"]
    );
  }
  function uk(a) {
    var b = Zj(!0),
      c = mk(a.prefix);
    tk(function () {
      var d = b[c];
      if (d) {
        sk(c, d);
        var e = 1e3 * Number(kk[c].split(".")[1]);
        if (e) {
          Za("TAGGING", 16);
          var f = pj(a, e);
          f.ab = "ad_storage";
          var g = qh(d, "1", a.domain, a.path);
          ih(c, g, f);
        }
      }
    });
  }
  function vk(a, b, c, d) {
    d = d || {};
    var e = function () {
      var f = mk(d.prefix),
        g = {},
        l = ph(f, d.path, d.domain, jk, "ad_storage");
      if (!l) return g;
      g[f] = l;
      return g;
    };
    tk(function () {
      fk(e, a, b, c);
    });
  }
  var wk = function (a) {
    for (
      var b = [],
        c = C.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Vf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };
  function xk(a, b) {
    var c = wk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Vf] || (d[c[e].Vf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ba: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Vf].push(g);
      }
    }
    return d;
  }
  var yk = /^\w+$/,
    zk = /^[\w-]+$/,
    Ak = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Bk = function () {
      if (!Yf().h() || !sg()) return !0;
      var a = og("ad_storage");
      return null == a ? !0 : !!a;
    },
    Ck = function (a, b) {
      rg("ad_storage")
        ? Bk()
          ? a()
          : xg(a, "ad_storage")
        : b
        ? Za("TAGGING", 3)
        : wg(
            function () {
              Ck(a, !0);
            },
            ["ad_storage"]
          );
    },
    Ek = function (a) {
      return Dk(a).map(function (b) {
        return b.ba;
      });
    },
    Dk = function (a) {
      var b = [];
      if (!Xg(z) || !C.cookie) return b;
      var c = $g(a, C.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { vd: d.vd }, e++) {
        var f = Fk(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.vd = g.ba;
          var m = g.timestamp,
            n = g.labels,
            p = ua(
              b,
              (function (q) {
                return function (t) {
                  return t.ba === q.vd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Gk(p.labels, n || [])))
            : b.push({ version: l, ba: d.vd, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Hk(b);
    };
  function Gk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ik(a) {
    return a && "string" == typeof a && a.match(yk) ? a : "_gcl";
  }
  var Kk = function () {
      var a = vf(z.location.href),
        b = tf(a, "query", !1, void 0, "gclid"),
        c = tf(a, "query", !1, void 0, "gclsrc"),
        d = tf(a, "query", !1, void 0, "wbraid"),
        e = tf(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || qf(f, "gclid");
        c = c || qf(f, "gclsrc");
        d = d || qf(f, "wbraid");
      }
      return Jk(b, c, e, d);
    },
    Jk = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && zk.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(zk))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Mk = function (a) {
      var b = Kk();
      Ck(function () {
        Lk(b, !1, a);
      });
    };
  function Lk(a, b, c, d, e) {
    function f(w, x) {
      var y = Nk(w, g);
      y && (ih(y, x, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = Ik(c.prefix);
    d = d || Ga();
    var l = pj(c, d, !0);
    l.ab = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        t = Nk("gb", g),
        r = !1;
      if (!b)
        for (var u = Dk(t), v = 0; v < u.length; v++)
          u[v].ba === q && u[v].labels && 0 < u[v].labels.length && (r = !0);
      r || f("gb", p(q));
    }
  }
  var Pk = function (a, b) {
      var c = Zj(!0);
      Ck(function () {
        for (var d = Ik(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Ak[f]) {
            var g = Nk(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(Ok(l), Ga()),
                n;
              b: {
                var p = m;
                if (Xg(z))
                  for (
                    var q = $g(g, C.cookie, void 0, "ad_storage"), t = 0;
                    t < q.length;
                    ++t
                  )
                    if (Ok(q[t]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var r = pj(b, m, !0);
                r.ab = "ad_storage";
                ih(g, l, r);
              }
            }
          }
        }
        Lk(Jk(c.gclid, c.gclsrc), !1, b);
      });
    },
    Nk = function (a, b) {
      var c = Ak[a];
      if (void 0 !== c) return b + c;
    },
    Ok = function (a) {
      return 0 !== Qk(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Fk(a) {
    var b = Qk(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          ba: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Qk(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !zk.test(a[2])
      ? []
      : a;
  }
  var Rk = function (a, b, c, d, e) {
      if (ta(b) && Xg(z)) {
        var f = Ik(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Nk(a[m], f);
              if (n) {
                var p = $g(n, C.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Ck(function () {
          fk(g, b, c, d);
        });
      }
    },
    Hk = function (a) {
      return a.filter(function (b) {
        return zk.test(b.ba);
      });
    },
    Sk = function (a, b) {
      if (Xg(z)) {
        for (var c = Ik(b.prefix), d = {}, e = 0; e < a.length; e++)
          Ak[a[e]] && (d[a[e]] = Ak[a[e]]);
        Ck(function () {
          k(d, function (f, g) {
            var l = $g(c + g, C.cookie, void 0, "ad_storage");
            l.sort(function (r, u) {
              return Ok(u) - Ok(r);
            });
            if (l.length) {
              var m = l[0],
                n = Ok(m),
                p = 0 !== Qk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Qk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Lk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Tk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Uk = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (sg()) {
        var c = Kk();
        if (Tk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          gk(function () {
            return d;
          }, 3);
          gk(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Vk = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Bk()) return e;
      var f = Dk(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.ba]
            .concat(l.labels || [], [b])
            .join("."),
          p = pj(c, m, !0);
        p.ab = "ad_storage";
        ih(a, n, p);
      }
      return e;
    };
  function Wk(a, b) {
    var c = Ik(b),
      d = Nk(a, c);
    if (!d) return 0;
    for (var e = Dk(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Xk(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Yk = function (a) {
    var b = Math.max(Wk("aw", a), Xk(Bk() ? xk() : {}));
    return Math.max(Wk("gb", a), Xk(Bk() ? xk("_gac_gb", !0) : {})) > b;
  };
  var cl = /[A-Z]+/,
    dl = /\s/,
    el = function (a) {
      if (h(a)) {
        a = Ea(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (cl.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (dl.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, U: c + "-" + d[0], K: d };
          }
        }
      }
    },
    gl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = el(a[c]);
        d && (b[d.id] = d);
      }
      fl(b);
      var e = [];
      k(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function fl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.U);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var hl = function (a, b, c, d) {
    var e = Jb(),
      f;
    if (1 === e)
      a: {
        var g = ze;
        g = g.toLowerCase();
        for (
          var l = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = C.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var t = p[q].src;
          if (t) {
            t = t.toLowerCase();
            if (0 === t.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === t.indexOf(l) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var tl = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.h = c;
    this.m = {};
    this.metadata = J(c.eventMetadata || {});
    this.I = !1;
  };
  tl.prototype.copyToHitData = function (a, b) {
    var c = R(this.h, a);
    void 0 !== c ? (this.m[a] = c) : void 0 !== b && (this.m[a] = b);
  };
  var ul = function (a, b, c) {
    var d = $e(a.target.U);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function vl(a) {
    return {
      getDestinationId: function () {
        return a.target.U;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        a.m[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      abort: function () {
        a.I = !0;
      },
      getFromEventContext: function (b) {
        return R(a.h, b);
      },
      Yk: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.m);
      },
    };
  }
  var Pl = function (a, b, c, d, e, f, g, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.m = e;
      this.J = f;
      this.Z = g;
      this.B = l;
      this.eventMetadata = m;
      this.N = n;
      this.O = p;
      this.D = q;
    },
    R = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.m[b]) return a.m[b];
      yi && Ql(a, a.J[b], a.Z[b]) && (M(71), M(79));
      return void 0 !== a.J[b] ? a.J[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Rl = function (a) {
      function b(g) {
        for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.m);
      b(a.J);
      if (yi)
        for (var d = Object.keys(a.Z), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            M(71);
            M(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Sl = function (a, b, c) {
      function d(m) {
        G(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.J[b]), d(a.m[b]), d(a.M[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (yi) {
        var g = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.Z[b]), d(a.m[b]), d(a.M[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Ql(a, e, l)) M(71), M(81);
        f = g;
        e = l;
      }
      return f ? e : void 0;
    },
    Tl = function (a) {
      var b = [O.g.zc, O.g.Jd, O.g.Kd, O.g.Ld, O.g.Md, O.g.Nd, O.g.Od],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.m)) return c;
      e(a.J);
      if (yi) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.Z);
        Ql(a, c, f) && (M(71), M(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Ql = function (a, b, c) {
      if (!yi) return !1;
      try {
        if (b === c) return !1;
        var d = Yb(b);
        if (d !== Yb(c) || !((G(b) && G(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Ql(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Ql(a, b[g], c[g])) return !0;
        }
      } catch (l) {
        M(72);
      }
      return !1;
    },
    Ul = function (a, b) {
      this.Si = a;
      this.Ti = b;
      this.J = {};
      this.gh = {};
      this.h = {};
      this.M = {};
      this.m = {};
      this.Rc = {};
      this.B = {};
      this.sc = function () {};
      this.ub = function () {};
      this.Z = !1;
    },
    Vl = function (a, b) {
      a.J = b;
      return a;
    },
    Wl = function (a, b) {
      a.gh = b;
      return a;
    },
    Xl = function (a, b) {
      a.h = b;
      return a;
    },
    Yl = function (a, b) {
      a.M = b;
      return a;
    },
    Zl = function (a, b) {
      a.m = b;
      return a;
    },
    $l = function (a, b) {
      a.Rc = b;
      return a;
    },
    am = function (a, b) {
      a.B = b || {};
      return a;
    },
    bm = function (a, b) {
      a.sc = b;
      return a;
    },
    cm = function (a, b) {
      a.ub = b;
      return a;
    },
    dm = function (a) {
      a.Z = !0;
      return a;
    },
    em = function (a) {
      return new Pl(
        a.Si,
        a.Ti,
        a.J,
        a.gh,
        a.h,
        a.M,
        a.m,
        a.Rc,
        a.B,
        a.sc,
        a.ub,
        a.Z
      );
    };
  function jm() {
    return "attribution-reporting";
  }
  function km(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var lm = !1;
  function mm() {
    if (km("join-ad-interest-group") && ra(Bb.joinAdInterestGroup)) return !0;
    lm || (Sh(), (lm = !0));
    return km("join-ad-interest-group") && ra(Bb.joinAdInterestGroup);
  }
  function nm(a, b) {
    var c = void 0;
    try {
      c = C.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ga() - d) {
        Za("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          C.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Za("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Kb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ga() },
      c
    );
  }
  function om() {
    return "https://td.doubleclick.net";
  }
  var pm = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    qm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    rm = /^\d+\.fls\.doubleclick\.net$/,
    sm = /;gac=([^;?]+)/,
    tm = /;gacgb=([^;?]+)/,
    um = /;gclaw=([^;?]+)/,
    vm = /;gclgb=([^;?]+)/;
  function wm(a, b) {
    if (rm.test(C.location.host)) {
      var c = C.location.href.match(b);
      return c && 2 == c.length && c[1].match(pm)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].ba);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var xm = function (a, b, c) {
    var d = Bk() ? xk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var l = Vk("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + l.join(","));
    }
    return { Dj: f ? e.join(";") : "", Cj: wm(d, tm) };
  };
  function ym(a, b, c) {
    if (rm.test(C.location.host)) {
      var d = C.location.href.match(c);
      if (d && 2 == d.length && d[1].match(qm)) return [{ ba: d[1] }];
    } else return Dk((a || "_gcl") + b);
    return [];
  }
  var zm = function (a) {
      return ym(a, "_aw", um)
        .map(function (b) {
          return b.ba;
        })
        .join(".");
    },
    Am = function (a) {
      return ym(a, "_gb", vm)
        .map(function (b) {
          return b.ba;
        })
        .join(".");
    },
    Bm = function (a, b) {
      var c = Vk(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Cm = function () {
    if (ra(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var nn = {
    F: {
      Zf: "ads_conversion_hit",
      Me: "container_execute_start",
      dg: "container_setup_end",
      Ne: "container_setup_start",
      cg: "container_execute_end",
      eg: "container_yield_end",
      Oe: "container_yield_start",
      dh: "event_execute_end",
      eh: "event_setup_end",
      Qc: "event_setup_start",
      fh: "ga4_conversion_hit",
      Tc: "page_load",
      Qk: "pageview",
      sb: "snippet_load",
      qh: "tag_callback_error",
      rh: "tag_callback_failure",
      sh: "tag_callback_success",
      th: "tag_execute_end",
      cc: "tag_execute_start",
    },
  };
  var on = !1,
    pn = "L S Y E TC HTC".split(" "),
    qn = ["S", "E"],
    rn = ["TS", "TE"];
  var Sn = function (a) {},
    Tn = function (a) {},
    sn = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var l = {};
      return l;
    },
    tn = function (a) {
      var b = !1;
      return b;
    },
    un = function (a, b) {},
    Un = function () {
      var a = {};
      return a;
    },
    Ln = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Vn = function () {},
    Wn = function (a, b, c) {};
  var Xn = function (a, b) {
    var c,
      d = z.GooglebQhCsO;
    d || ((d = {}), (z.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Yn = function (a, b, c) {
    var d = Nh(a, "fmt");
    if (b) {
      var e = Nh(a, "random"),
        f = Nh(a, "label") || "";
      if (!e) return !1;
      var g = dj(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Xn(g, b)) return !1;
    }
    d && 4 != d && (a = Ph(a, "rfmt", d));
    var l = Ph(a, "fmt", 4);
    Ib(
      l,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      C.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var oo = function () {
      this.h = {};
    },
    po = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    qo = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    so = function (a, b, c, d) {};
  function uo(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return vf("" + c + b).href;
    }
  }
  function vo() {
    return !!ke.qe && "SGTM_TOKEN" !== ke.qe.split("@@").join("");
  }
  var xo = function (a, b, c, d) {
      if (!wo() && !zh(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + ke.ca,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var l = vo();
        l && (f += "&sign=" + ke.qe);
        var m = te || ve ? uo(b, e + f) : void 0;
        if (!m) {
          var n = ke.Cd + e;
          l &&
            Cb &&
            g &&
            (n = Cb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = hl("https://", "http://", n + f);
        }
        var p = Ah();
        uh().container[a] = { state: 1, context: d, parent: p };
        Ib(m);
      }
    },
    yo = function (a, b, c) {
      var d;
      if ((d = !wo())) {
        var e = uh().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (Bh())
          (uh().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Ah(),
          }),
            M(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ke.ca +
            "&cx=c";
          vo() && (f += "&sign=" + ke.qe);
          var g = te || ve ? uo(b, f) : void 0;
          g || (g = hl("https://", "http://", ke.Cd + f));
          uh().destination[a] = { state: 1, context: c, parent: Ah() };
          Ib(g);
        }
    };
  function wo() {
    if (sh()) {
      return !0;
    }
    return !1;
  }
  var zo = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Ao = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Bo = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Co =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Fo = function (a) {
      var b = Le("gtm.allowlist") || Le("gtm.whitelist");
      b && M(9);
      re && (b = ["google", "gtagfl", "lcl", "zone"]);
      Do() &&
        (re ? M(116) : M(117),
        Eo &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Ma(Da(b), Ao),
        d = Le("gtm.blocklist") || Le("gtm.blacklist");
      d || ((d = Le("tagTypeBlacklist")) && M(3));
      d ? M(8) : (d = []);
      Do() &&
        ((d = Da(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Da(d).indexOf("google") && M(2);
      var e = d && Ma(Da(d), Bo),
        f = {};
      return function (g) {
        var l = g && g[ac.rb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = De[l] || [],
          n = a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      M(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var r = 0 <= e.indexOf(l);
          if (r) t = r;
          else {
            var u = ya(e, m || []);
            u && M(10);
            t = u;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = ya(e, Co));
        return (f[l] = v);
      };
    },
    Eo = !1;
  var Do = function () {
    return zo.test(z.location && z.location.hostname);
  };
  var Go = { initialized: 11, complete: 12, interactive: 13 },
    Ho = {},
    Io = Object.freeze(((Ho[O.g.Ka] = !0), Ho)),
    Jo =
      0 <= C.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= C.location.search.indexOf("&gtm_diagnostics="),
    Lo = function (a, b, c) {
      if (yi && "config" === a && !(1 < el(b).K.length)) {
        var d,
          e = Db("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = J(c.J);
        J(c.h, f);
        var g = [],
          l;
        for (l in d) {
          var m = Ko(d[l], f);
          m.length && (Jo && console.log(m), g.push(l));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            Hi = Hi ? Hi + "!" + n : "&tdc=" + n;
          }
          Za("TAGGING", Go[C.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function Mo(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Ko(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var r = t[q];
        return void 0 === r ? Io[q] : r;
      },
      f;
    for (f in Mo(a, b)) {
      var g = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Yb(l) || "array" === Yb(l),
        p = "object" === Yb(m) || "array" === Yb(m);
      if (n && p) Ko(l, m, c, g);
      else if (n || p || l !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var No = !1,
    Oo = 0,
    Po = [];
  function Qo(a) {
    if (!No) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        No = !0;
        for (var e = 0; e < Po.length; e++) E(Po[e]);
      }
      Po.push = function () {
        for (var f = 0; f < arguments.length; f++) E(arguments[f]);
        return 0;
      };
    }
  }
  function Ro() {
    if (!No && 140 > Oo) {
      Oo++;
      try {
        C.documentElement.doScroll("left"), Qo();
      } catch (a) {
        z.setTimeout(Ro, 50);
      }
    }
  }
  var So = function (a) {
    No ? a() : Po.push(a);
  };
  var To = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: S.C,
    };
  };
  function Uo(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Wo = function (a, b) {
      this.h = !1;
      this.J = [];
      this.M = { tags: [] };
      this.Z = !1;
      this.m = this.B = 0;
      Vo(this, a, b);
    },
    Xo = function (a, b, c, d) {
      if (oe.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      G(d) && (e = J(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    Yo = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Zo = function (a) {
      if (!a.h) {
        for (var b = a.J, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.J.length = 0;
      }
    },
    Vo = function (a, b, c) {
      void 0 !== b && $o(a, b);
      c &&
        z.setTimeout(function () {
          return Zo(a);
        }, Number(c));
    },
    $o = function (a, b) {
      var c = Ia(function () {
        return E(function () {
          b(S.C, a.M);
        });
      });
      a.h ? c() : a.J.push(c);
    },
    ap = function (a) {
      a.B++;
      return Ia(function () {
        a.m++;
        a.Z && a.m >= a.B && Zo(a);
      });
    },
    bp = function (a) {
      a.Z = !0;
      a.m >= a.B && Zo(a);
    };
  var cp = {},
    dp = function () {
      return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
    },
    ep = !1;
  var fp = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Fa());
        z[b] = c;
      }
      return z[b];
    },
    gp = function (a) {
      if (sg()) {
        var b = dp();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function hp() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var ip = function (a) {
      if (cp[a] || ep) return;
      var b = z[hp()];
      ra(b) && (b("provide", a, qa), (cp[a] = !0));
    },
    jp = function (a, b) {
      return function () {
        var c = dp(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function op(a, b, c, d) {
    var e = Ac[a],
      f = pp(a, b, c, d);
    if (!f) return null;
    var g = Jc(e[ac.ph], c, []);
    if (g && g.length) {
      var l = g[0];
      f = op(
        l.index,
        { N: f, O: 1 === l.Eh ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function pp(a, b, c, d) {
    function e() {
      if (f[ac.Yi]) l();
      else {
        var w = Kc(f, c, []),
          x = w[ac.gi];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!Gg(x[y])) {
              l();
              return;
            }
        var A = Xo(c.Fb, String(f[ac.rb]), Number(f[ac.Xc]), w[ac.Zi]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Ga() - H;
            Zi(c.id, Ac[a], "5");
            Yo(c.Fb, A, "success", F);
            Q(70) && Wn(c, f, nn.F.sh);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Ga() - H;
            Zi(c.id, Ac[a], "6");
            Yo(c.Fb, A, "failure", F);
            Q(70) && Wn(c, f, nn.F.rh);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Zi(c.id, f, "1");
        var D = function () {
          var F = Ga() - H;
          Zi(c.id, f, "7");
          Yo(c.Fb, A, "exception", F);
          Q(70) && Wn(c, f, nn.F.qh);
          B || ((B = !0), l());
        };
        if (Q(70)) {
          var I = sn(nn.F.cc, S.C, c.id, Number(f[ac.Xc]), c.name, si(f));
          tn(I);
        }
        var H = Ga();
        try {
          Ic(w, { event: c, index: a, type: 1 });
        } catch (F) {
          D(F);
        }
        Q(70) && Wn(c, f, nn.F.th);
      }
    }
    var f = Ac[a],
      g = b.N,
      l = b.O,
      m = b.terminate;
    if (c.Ef(f)) return null;
    var n = Jc(f[ac.uh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = op(p.index, { N: g, O: l, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      l = 2 === p.Eh ? m : q;
    }
    if (f[ac.lh] || f[ac.bj]) {
      var t = f[ac.lh] ? Bc : c.Ek,
        r = g,
        u = l;
      if (!t[a]) {
        e = Ia(e);
        var v = qp(a, t, e);
        g = v.N;
        l = v.O;
      }
      return function () {
        t[a](r, u);
      };
    }
    return e;
  }
  function qp(a, b, c) {
    var d = [],
      e = [];
    b[a] = rp(d, e, c);
    return {
      N: function () {
        b[a] = Jp;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      O: function () {
        b[a] = Xp;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function rp(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Jp(a) {
    a();
  }
  function Xp(a, b) {
    b();
  }
  var Zp = function (a, b) {
      return 1 === arguments.length ? Yp("config", a) : Yp("config", a, b);
    },
    $p = function (a, b, c) {
      c = c || {};
      c[O.g.Eb] = a;
      return Yp("event", b, c);
    };
  function Yp(a) {
    return arguments;
  }
  var aq = function () {
    this.h = [];
    this.m = [];
  };
  aq.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.m.length; f++)
      try {
        this.m[f](e);
      } catch (g) {}
  };
  aq.prototype.listen = function (a) {
    this.m.push(a);
  };
  aq.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  aq.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var cq = function (a, b, c) {
      bq().enqueue(a, b, c);
    },
    eq = function () {
      var a = dq;
      bq().listen(a);
    };
  function bq() {
    var a = le.mb;
    a || ((a = new aq()), (le.mb = a));
    return a;
  }
  var mq = function (a) {
      var b = le.zones;
      return b
        ? b.getIsAllowedFn(wh(), a)
        : function () {
            return !0;
          };
    },
    nq = function (a) {
      var b = le.zones;
      return b ? b.isActive(wh(), a) : !0;
    };
  var qq = function (a, b) {
    for (var c = [], d = 0; d < Ac.length; d++)
      if (a[d]) {
        var e = Ac[d];
        var f = ap(b.Fb);
        try {
          var g = op(d, { N: f, O: f, terminate: f }, b, d);
          if (g) {
            var l = e["function"];
            if (!l) throw "Error: No function name given for function call.";
            var m = Cc[l];
            c.push({
              Yh: d,
              Ph: (m ? m.priorityOverride || 0 : 0) || Uo(e[ac.rb], 1) || 0,
              execute: g,
            });
          } else oq(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(pq);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function pq(a, b) {
    var c,
      d = b.Ph,
      e = a.Ph;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Yh,
        l = b.Yh;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }
  function oq(a, b) {
    if (yi) {
      var c = function (d) {
        var e = b.Ef(Ac[d]) ? "3" : "4",
          f = Jc(Ac[d][ac.ph], b, []);
        f && f.length && c(f[0].index);
        Zi(b.id, Ac[d], e);
        var g = Jc(Ac[d][ac.uh], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var tq = !1,
    rq;
  var yq = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(70)) {
      var e = sn(nn.F.Qc, S.C, b, void 0, d);
      tn(e);
    }
    if ("gtm.js" === d) {
      if (tq) return !1;
      tq = !0;
    }
    var f,
      g = !1;
    if (nq(b)) f = mq(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      g = !0;
      f = mq(Number.MAX_SAFE_INTEGER);
    }
    Yi(b, d);
    var l = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        Ef: Fo(f),
        Ek: [],
        Kh: function () {
          M(6);
          Za("HEALTH", 0);
        },
        yh: uq(),
        zh: vq(b),
        Fb: new Wo(function () {
          if (Q(70)) {
            var v = sn(nn.F.dh, S.C, b, void 0, d);
            if (tn(v)) {
              var w = sn(nn.F.Qc, S.C, b, void 0, d);
              un(v, w);
            }
            if ("gtm.load" === d) {
              var x = sn(nn.F.cg, S.C);
              if (tn(x)) {
                var y = sn(nn.F.Me, S.C);
                un(x, y);
              }
              Vn();
            }
          }
          l && l.apply(l, [].slice.call(arguments, 0));
        }, m),
      },
      p = Oc(n);
    g && (p = wq(p));
    if (Q(70)) {
      var q = sn(nn.F.eh, S.C, b, void 0, d);
      if (tn(q)) {
        var t = sn(nn.F.Qc, S.C, b, void 0, d);
        un(q, t);
      }
    }
    var r = qq(p, n),
      u = !1;
    bp(n.Fb);
    ("gtm.js" !== d && "gtm.sync" !== d) || ip(S.C);
    return xq(p, r) || u;
  };
  function vq(a) {
    return function (b) {
      yi && ($b(b) || aj(a, "input", b));
    };
  }
  function uq() {
    var a = {};
    a.event = Pe("event", 1);
    a.ecommerce = Pe("ecommerce", 1);
    a.gtm = Pe("gtm");
    a.eventModel = Pe("eventModel");
    return a;
  }
  function wq(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Ac[c][ac.rb]);
        if (ne[d] || void 0 !== Ac[c][ac.cj] || Ee[d] || Uo(d, 2)) b[c] = !0;
      }
    return b;
  }
  function xq(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Ac[c] && !oe[String(Ac[c][ac.rb])]) return !0;
    return !1;
  }
  var Aq = function (a, b, c, d) {
      zq.push("event", [b, a], c, d);
    },
    Bq = function (a, b, c, d) {
      zq.push("get", [a, b], c, d);
    },
    Cq = function () {
      this.status = 1;
      this.J = {};
      this.h = {};
      this.M = {};
      this.Z = null;
      this.B = {};
      this.m = !1;
    },
    Dq = function (a, b, c, d) {
      var e = Ga();
      this.type = a;
      this.m = e;
      this.aa = b || "";
      this.h = c;
      this.messageContext = d;
    },
    Eq = function () {
      this.m = {};
      this.B = {};
      this.h = [];
    },
    Fq = function (a, b) {
      var c = el(b);
      return (a.m[c.U] = a.m[c.U] || new Cq());
    },
    Gq = function (a, b, c, d) {
      if (d.aa) {
        var e = Fq(a, d.aa),
          f = e.Z;
        if (f) {
          var g = J(c),
            l = J(e.J[d.aa]),
            m = J(e.B),
            n = J(e.h),
            p = J(a.B),
            q = {};
          if (yi)
            try {
              q = J(Ie);
            } catch (v) {
              M(72);
            }
          var t = el(d.aa).prefix,
            r = function (v) {
              $i(d.messageContext.eventId, t, v);
              var w = g[O.g.Ub];
              w && E(w);
            },
            u = em(
              cm(
                bm(
                  am(
                    Zl(
                      Yl(
                        $l(
                          Xl(
                            Wl(
                              Vl(
                                new Ul(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              l
                            ),
                            m
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (r) {
                      var v = r;
                      r = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (r) {
                    var v = r;
                    r = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            $i(d.messageContext.eventId, t, "1"),
              Lo(d.type, d.aa, u),
              f(d.aa, b, d.m, u);
          } catch (v) {
            $i(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  Eq.prototype.register = function (a, b, c) {
    var d = Fq(this, a);
    3 !== d.status &&
      ((d.Z = b), (d.status = 3), c && (J(d.h, c), (d.h = c)), this.flush());
  };
  Eq.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!el(c)) return;
      if (c) {
        var e = el(c);
        e &&
          1 === Fq(this, c).status &&
          ((Fq(this, c).status = 2), this.push("require", [{}], e.U, {}));
      }
      Fq(this, c).m && (d.deferrable = !1);
    }
    this.h.push(new Dq(a, c, b, d));
    d.deferrable || this.flush();
  };
  Eq.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.aa || Fq(this, f.aa).m
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = Fq(this, f.aa);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.h[0], function (t, r) {
              J(Na(t, r), b.B);
            });
            break;
          case "config":
            g = Fq(this, f.aa);
            e.eb = {};
            k(
              f.h[0],
              (function (t) {
                return function (r, u) {
                  J(Na(r, u), t.eb);
                };
              })(e)
            );
            var l = !!e.eb[O.g.Hc];
            delete e.eb[O.g.Hc];
            var m = el(f.aa),
              n = m.U === m.id;
            l || (n ? (g.B = {}) : (g.J[f.aa] = {}));
            (g.m && l) || Gq(this, O.g.oa, e.eb, f);
            g.m = !0;
            n ? J(e.eb, g.B) : (J(e.eb, g.J[f.aa]), M(70));
            d = !0;
            break;
          case "event":
            g = Fq(this, f.aa);
            e.ud = {};
            k(
              f.h[0],
              (function (t) {
                return function (r, u) {
                  J(Na(r, u), t.ud);
                };
              })(e)
            );
            Gq(this, f.h[1], e.ud, f);
            break;
          case "get":
            g = Fq(this, f.aa);
            var p = {},
              q = ((p[O.g.Ja] = f.h[0]), (p[O.g.Ta] = f.h[1]), p);
            Gq(this, O.g.Aa, q, f);
        }
        this.h.shift();
        Hq(this, f);
      }
      e = { eb: e.eb, ud: e.ud };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Hq = function (a, b) {
      if ("require" !== b.type)
        if (b.aa)
          for (var c = Fq(a, b.aa).M[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.m)
            if (a.m.hasOwnProperty(e)) {
              var f = a.m[e];
              if (f && f.M)
                for (var g = f.M[b.type] || [], l = 0; l < g.length; l++)
                  g[l]();
            }
    },
    Iq = function (a, b) {
      var c = zq,
        d = J(b);
      J(Fq(c, a).h, d);
      Fq(c, a).h = d;
    },
    zq = new Eq();
  var Jq = {},
    Kq = {},
    Lq = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { zd: d.zd, wd: d.wd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          (d.zd = el(f)),
            d.zd &&
              (ua(
                xh(),
                (function (p) {
                  return function (q) {
                    return p.zd.U === q;
                  };
                })(d)
              )
                ? b.push(f)
                : c.push(f));
        else {
          var g = Jq[f] || [];
          d.wd = {};
          g.forEach(
            (function (p) {
              return function (q) {
                return (p.wd[q] = !0);
              };
            })(d)
          );
          for (var l = wh(), m = 0; m < l.length; m++)
            if (d.wd[l[m]]) {
              b = b.concat(xh());
              break;
            }
          var n = Kq[f] || [];
          n.length && (b = b.concat(n));
        }
      }
      return { dk: b, fk: c };
    },
    Mq = function (a) {
      k(Jq, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Nq = function (a) {
      k(Kq, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Oq = "HA GF G UA AW DC MC".split(" "),
    Pq = !1,
    Qq = !1;
  function Rq(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Fe() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Sq = {
      config: function (a, b) {
        var c = Rq(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !G(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = el(a[1]);
          if (e) {
            Yi(c.eventId, "gtag.config");
            var f = e.U,
              g = e.id !== f;
            if (g ? -1 === xh().indexOf(f) : -1 === wh().indexOf(f)) {
              if (!Q(61) || !d[O.g.de]) {
                var l = d[O.g.va] || zq.B[O.g.va];
                g
                  ? yo(f, l, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : xo(f, l, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
              }
            } else {
              if (qe && !g && !d[O.g.Hc]) {
                var m = Qq;
                Qq = !0;
                if (m) return;
              }
              Pq || M(43);
              if (!b.noTargetGroup)
                if (g) {
                  Nq(e.id);
                  var n = e.id,
                    p = d[O.g.be] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var t = Kq[p[q]] || [];
                    Kq[p[q]] = t;
                    0 > t.indexOf(n) && t.push(n);
                  }
                } else {
                  Mq(e.id);
                  var r = e.id,
                    u = d[O.g.be] || "default";
                  u = u.toString().split(",");
                  for (var v = 0; v < u.length; v++) {
                    var w = Jq[u[v]] || [];
                    Jq[u[v]] = w;
                    0 > w.indexOf(r) && w.push(r);
                  }
                }
              delete d[O.g.be];
              var x = b.eventMetadata || {};
              x.hasOwnProperty("is_external_event") ||
                (x.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = x;
              delete d[O.g.Ub];
              for (var y = g ? [e.id] : xh(), A = 0; A < y.length; A++) {
                var B = J(b);
                zq.push("config", [d], y[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = Rq(a, b),
            d = a[1];
          "default" === d
            ? Eg(a[2])
            : "update" === d
            ? Fg(a[2], c)
            : "declare" === d && b.fromContainerExecution && Dg(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if ((!G(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = J(e)),
            e[O.g.Ub] && (g.eventCallback = e[O.g.Ub]),
            e[O.g.Vd] && (g.eventTimeout = e[O.g.Vd]));
          var l = Rq(a, b),
            m = l.eventId,
            n = l.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            t = q && q[O.g.Eb];
          void 0 === t &&
            ((t = Le(O.g.Eb, 2)), void 0 === t && (t = "default"));
          if (h(t) || ta(t)) {
            var r = t.toString().replace(/\s+/g, "").split(","),
              u = Lq(r),
              v = u.dk,
              w = u.fk;
            if (w.length)
              for (
                var x = (q && q[O.g.va]) || zq.B[O.g.va], y = 0;
                y < w.length;
                y++
              ) {
                var A = el(w[y]);
                A &&
                  yo(A.U, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = gl(v);
          } else p = void 0;
          var B = p;
          if (B) {
            Yi(m, c);
            for (var D = [], I = 0; I < B.length; I++) {
              var H = B[I],
                F = J(b);
              if (-1 !== Oq.indexOf(H.prefix)) {
                var L = J(d),
                  K = F.eventMetadata || {};
                K.hasOwnProperty("is_external_event") ||
                  (K.is_external_event = !F.fromContainerExecution);
                F.eventMetadata = K;
                delete L[O.g.Ub];
                Aq(c, L, H.id, F);
              }
              D.push(H.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[O.g.Eb] = D.join())
              : delete g.eventModel[O.g.Eb];
            Pq || M(43);
            Q(101) &&
              void 0 === b.noGtmEvent &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && ra(a[3])) {
          var c = el(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Pq || M(43);
            var f = zq.B[O.g.va];
            if (
              !ua(xh(), function (l) {
                return c.U === l;
              })
            )
              yo(c.U, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Oq.indexOf(c.prefix)) {
              Rq(a, b);
              var g = {};
              yg(J(((g[O.g.Ja] = d), (g[O.g.Ta] = e), g)));
              Bq(
                d,
                function (l) {
                  E(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Pq = !0;
          var c = Rq(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && G(a[1])
          ? (c = J(a[1]))
          : 3 == a.length &&
            h(a[1]) &&
            ((c = {}),
            G(a[2]) || ta(a[2]) ? (c[a[1]] = J(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Rq(a, b),
            e = d.eventId,
            f = d.priorityId;
          J(c);
          var g = J(c);
          zq.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Tq = { policy: !0 };
  var Uq = function (a) {
      var b = z[ke.ca].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Vq = function (a) {
      var b = z[ke.ca],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Wq = !1,
    Xq = [];
  function Yq() {
    if (!Wq) {
      Wq = !0;
      for (var a = 0; a < Xq.length; a++) E(Xq[a]);
    }
  }
  var Zq = function (a) {
    Wq ? E(a) : Xq.push(a);
  };
  var hr = function () {
      try {
        var a, b;
        var m,
          n = S.C,
          p = vd(
            'script[src*="gtm/js?id=' +
              n +
              '"],script[src*="optimize.js?id=' +
              n +
              '"]'
          );
        m = p && 0 < p.length ? p[0] : null;
        b = m
          ? m.hasAttribute("gtm")
            ? "gtmo"
            : m.hasAttribute("async")
            ? "opta"
            : "opts"
          : "optu";
        b || (b = "gaoo");
        var q = ar(br, m && m.src),
          t = q.pd,
          r = q.qd,
          u = q.Fe,
          v = q.Ge,
          w = q.ze,
          x = q.Ke,
          y = q.ed,
          A = q.Bf,
          B = q.dd;
        "h0" != y || cr || (y = "h3");
        dr = {
          ed: y,
          dd: B,
          Bj: a,
          bk: b,
          Bf: A,
          Ge: v,
          ze: w,
          Ke: x,
          Fe: u,
          pd: t,
          qd: r,
          Hh: er,
          Zh: fr,
        };
        gr(dr);
      } catch (D) {}
    },
    ir = function () {
      var a = z.gaData,
        b = 0,
        c = void 0;
      if (a)
        for (var d in a)
          if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
            b += a[d].hitcount;
            var e = Number(a[d].first_hit);
            e && (!c || e < c) && (c = e);
          }
      return { Ih: b, Fh: c };
    },
    ar = function (a, b) {
      var c, d, e, f, g, l, m, n, p;
      var q = z.performance;
      if (q) {
        if (b) {
          var t = q.getEntriesByName(b)[0];
          if (t) {
            var r = q.getEntriesByType("resource"),
              u = 0;
            r && 0 < r.length && (u = r[0].startTime);
            f = Math.round(t.startTime - u);
            g = Math.round(t.duration);
            e = r.indexOf(t);
            -1 === e && (e = void 0);
            l = Math.round(a - (t.startTime + t.duration));
          }
        }
        var v = q.timing;
        if (v.domContentLoadedEventStart) {
          var w = v.domContentLoadedEventStart - v.navigationStart;
          w && (d = Math.round(a - w));
        }
        var x = q.getEntriesByType("paint").filter(function (D) {
          return "first-contentful-paint" === D.name;
        })[0];
        x && (c = Math.round(a - x.startTime));
      }
      var y = z[ke.ca].hide;
      if (y) {
        if (void 0 === y[S.C]) m = "h2";
        else {
          var A = !1;
          if (null === y.end)
            for (var B in y)
              if (y.hasOwnProperty(B) && B.startsWith(S.C) && !0 === y[B]) {
                A = !0;
                break;
              }
          m = A ? "h0" : "h1";
        }
        y.start &&
          !isNaN(y.start) &&
          (q
            ? q.timing &&
              (p = Math.round(a + q.timing.navigationStart - y.start))
            : (p = a - y.start));
        isNaN(y.timeout) || (n = y.timeout);
      }
      return { pd: d, qd: c, Fe: e, Ge: f, ze: g, Ke: l, ed: m, Bf: n, dd: p };
    },
    gr = function (a, b) {
      b = void 0 === b ? "ol" : b;
      var c = function (e, f) {
          null != f && (d += e + encodeURIComponent(f));
        },
        d = zi;
      c("&t=", b);
      c("&s=", a.ed);
      c("&h=", a.dd);
      c("&g=", a.Bj);
      c("&p=", a.bk);
      c("&o=", a.Bf);
      c(
        "&l=",
        (function () {
          var e = Ae;
          return e ? $q - Ba(e) : void 0;
        })()
      );
      c("&q=", a.Ge);
      c("&f=", a.ze);
      c("&e=", a.Ke);
      c("&i=", a.Fe);
      c("&d=", a.pd);
      c("&c=", a.qd);
      c("&tr=", a.Ik);
      c("&jl=", a.Yj);
      c("&jf=", a.Wj);
      c("&ji=", a.Xj);
      c("&jq=", a.Zj);
      c("&jd=", a.Uj);
      c("&jx=", a.Vj);
      c("&hc=", a.Hh);
      c("&fh=", a.Zh);
      d += "&sr=0.050000";
      c("&ps=", jr);
      c("&cb=", va());
      Lb(d);
    },
    kr = !1,
    $q,
    br,
    cr,
    jr,
    dr,
    er,
    fr;
  (jr = Math.random()), (kr = "0.050000" > jr);
  var lr = function () {
      if (!kr || $q) return;
      $q = Ga();
      br = Vb() || $q;
      cr = !!C.querySelector("body");
      var a = ir(),
        b = a.Fh;
      er = a.Ih;
      fr = b ? $q - b : void 0;
      Zq(hr);
    },
    nr = function (a) {
      var b = mr;
      if (!kr) return;
      try {
        var c = Ga(),
          d = Vb() || c,
          e = ir(),
          f = e.Ih,
          g = e.Fh,
          l = g ? c - g : void 0;
        Zq(function () {
          var m = ar(d, b),
            n = m.pd,
            p = m.qd,
            q = m.Fe,
            t = m.Ge,
            r = m.ze,
            u = m.Ke,
            v = m.ed,
            w = m.dd,
            x = J(dr || {});
          J(a, x);
          J(
            {
              ed: v,
              dd: w,
              pd: n,
              qd: p,
              Xj: q,
              Zj: t,
              Uj: r,
              Vj: u,
              Hh: f,
              Zh: l,
            },
            x
          );
          gr(x, "od");
        });
      } catch (m) {}
    };
  var pr = function (a) {
    if (or(a)) return a;
    this.h = a;
  };
  pr.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var or = function (a) {
    return !a || "object" !== Yb(a) || G(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  pr.prototype.getUntrustedMessageValue = pr.prototype.getUntrustedMessageValue;
  var qr = 0,
    rr = {},
    sr = [],
    tr = [],
    ur = !1,
    vr = !1;
  function wr(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var xr = function (a) {
      return z[ke.ca].push(a);
    },
    yr = function (a, b) {
      var c = le[ke.ca],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function zr(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && Oe(e), Oe(e, f));
    });
    Ae || (Ae = a["gtm.start"]);
    lr();
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Fe()), (a["gtm.uniqueEventId"] = d), Oe("gtm.uniqueEventId", d));
    return yq(a);
  }
  function Ar(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Aa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Br() {
    var a;
    if (tr.length) a = tr.shift();
    else if (sr.length) a = sr.shift();
    else return;
    var b;
    var c = a;
    if (ur || !Ar(c.message)) b = c;
    else {
      ur = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Fe());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        l = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      sr.unshift(l, c);
      if (yi && S.C) {
        var m;
        if (S.Sc) {
          var n = S.C,
            p = uh().destination[n];
          m = p && p.context;
        } else {
          var q = S.C,
            t = uh().container[q];
          m = t && t.context;
        }
        var r = m,
          u,
          v = vf(z.location.href);
        u = v.hostname + v.pathname;
        var w = r && r.fromContainerExecution,
          x = r && r.source,
          y = S.C,
          A = S.ib,
          B = S.Sc;
        Ji || (Ji = u);
        Ii.push(
          y + ";" + A + ";" + (w ? 1 : 0) + ";" + (x || 0) + ";" + (B ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function Cr() {
    for (var a = !1, b; !vr && (b = Br()); ) {
      vr = !0;
      delete Ie.eventModel;
      Ke();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) vr = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var l = f[g],
              m = Le(l, 1);
            if (ta(m) || G(m)) m = J(m);
            Je[l] = m;
          }
        try {
          if (ra(d))
            try {
              d.call(Me);
            } catch (D) {}
          else if (ta(d)) {
            var n = d;
            if (h(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                r = Le(p.join("."), 2);
              if (null != r)
                try {
                  r[q].apply(r, t);
                } catch (D) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Aa(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var w = Sq[d[0]];
                  if (w && (!e.fromContainerExecution || !Tq[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && M(101);
            } else u = d;
            if (u) {
              var x = zr(u, e);
              a = x || a;
              v && x && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ke(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = rr[String(y)] || [], B = 0; B < A.length; B++)
              tr.push(Dr(A[B]));
            A.length && tr.sort(wr);
            delete rr[String(y)];
            y > qr && (qr = y);
          }
          vr = !1;
        }
      }
    }
    return !a;
  }
  function Er() {
    if (Q(70)) {
      var a = sn(nn.F.Me, S.C);
      tn(a);
      if (Fr()) {
        var b = sn(nn.F.eg, S.C);
        if (tn(b)) {
          var c = sn(nn.F.Oe, S.C);
          un(b, c);
        }
      }
    }
    var d = Cr();
    try {
      Uq(S.C);
    } catch (e) {}
    return d;
  }
  function dq(a) {
    if (qr < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      rr[b] = rr[b] || [];
      rr[b].push(a);
    } else
      tr.push(Dr(a)),
        tr.sort(wr),
        E(function () {
          vr || Cr();
        });
  }
  function Dr(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Gr = function () {
      function a(g) {
        var l = {};
        if (or(g)) {
          var m = g;
          g = or(m) ? m.getUntrustedMessageValue() : void 0;
          l.fromContainerExecution = !0;
        }
        return { message: g, messageContext: l };
      }
      var b = Db(ke.ca, []),
        c = (le[ke.ca] = le[ke.ca] || {});
      !0 === c.pruned && M(83);
      rr = bq().get();
      eq();
      So(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var g = {};
          b.push(((g.event = "gtm.dom"), g));
        }
      });
      Zq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var g = {};
          b.push(((g.event = "gtm.load"), g));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var g;
        if (0 < le.SANDBOXED_JS_SEMAPHORE) {
          g = [];
          for (var l = 0; l < arguments.length; l++)
            g[l] = new pr(arguments[l]);
        } else g = [].slice.call(arguments, 0);
        var m = g.map(function (t) {
          return a(t);
        });
        sr.push.apply(sr, m);
        var n = d.apply(b, g),
          p = Math.max(100, Number("1000") || 300);
        if (this.length > p)
          for (M(4), c.pruned = !0; this.length > p; ) this.shift();
        var q = "boolean" !== typeof n || n;
        return Cr() && q;
      };
      var e = b.slice(0).map(function (g) {
        return a(g);
      });
      sr.push.apply(sr, e);
      if (Fr()) {
        if (Q(70)) {
          var f = sn(nn.F.Oe, S.C);
          tn(f);
        }
        E(Er);
      }
    },
    Fr = function () {
      var a = !0;
      return a;
    };
  function Hr(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ga();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ir(a) {
    return a && 0 === a.indexOf("pending:") ? Hr(a.substr(8)) : !1;
  }
  var Fc = {};
  Fc.ke = new String("undefined");
  var is = z.clearTimeout,
    js = z.setTimeout,
    U = function (a, b, c, d) {
      if (sh()) {
        b && E(b);
      } else return Ib(a, b, c, d);
    },
    ks = function () {
      return new Date();
    },
    ls = function () {
      return z.location.href;
    },
    ms = function (a) {
      return tf(vf(a), "fragment");
    },
    ns = function (a) {
      return uf(vf(a));
    },
    os = function (a, b) {
      return Le(a, b || 2);
    },
    ps = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = xr(a)))
        : (d = xr(a));
      return d;
    },
    qs = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    rs = function (a, b, c) {
      return $g(a, b, void 0 === c ? !0 : !!c);
    },
    ss = function (a, b, c) {
      return 0 === ih(a, b, c);
    },
    ts = function (a, b) {
      if (sh()) {
        b && E(b);
      } else Kb(a, b);
    },
    us = function (a) {
      return !!Pr(a, "init", !1);
    },
    vs = function (a) {
      Nr(a, "init", !0);
    },
    ws = function (a, b, c) {
      yi && ($b(a) || aj(c, b, a));
    };

  var ys = function (a) {
      if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
      var b = a.tagName.toUpperCase();
      return "SCRIPT" == b || "STYLE" == b || "LINK" == b;
    },
    zs = function (a, b, c) {
      try {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
      } catch (d) {
        return d;
      }
      return null;
    },
    As = function (a, b, c) {
      var d = a.getAttribute(b);
      return zs(a, b, c)
        ? 8
        : function () {
            zs(a, b, d);
          };
    },
    Ds = function (a, b, c) {
      var d,
        e,
        f = a.ownerDocument || a.document || document;
      c = (c || "").toLowerCase();
      "after" == c
        ? ((d = a.parentNode), (e = a.nextSibling))
        : "insert" == c
        ? ((d = a), (e = a.firstChild))
        : "append" == c
        ? ((d = a), (e = null))
        : ((d = a.parentNode), (e = a));
      if (!d || d == f) return { result: 1, Mj: [] };
      var g = Bs(b, d);
      Cs(g, "SCRIPT");
      Cs(g, "NOSCRIPT");
      var l = [];
      if (g.firstChild)
        for (var m = g.firstChild; m; ) {
          var n = m.nextSibling;
          l.push(m);
          d.insertBefore(m, e);
          m = n;
        }
      var p = a.nextSibling;
      "replace" == c && d.removeChild(a);
      return {
        result: function () {
          for (; 0 < l.length; ) d.removeChild(l.pop());
          "replace" == c && d.insertBefore(a, p);
        },
        Mj: l.slice(),
      };
    },
    Es = {
      SELECT: [1, '<select multiple="multiple">', "</select>"],
      FIELDSET: [1, "<fieldset>", "</fieldset>"],
      MAP: [1, "<map>", "</map>"],
      OBJECT: [1, "<object>", "</object>"],
      TABLE: [1, "<table>", "</table>"],
      TBODY: [2, "<table><tbody>", "</tbody></table>"],
      COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
      TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    },
    Bs = function (a, b) {
      var c = 0,
        d = "",
        e = "",
        f = Es[b.tagName];
      null != f && ((c = f[0]), (d = f[1]), (e = f[2]));
      var g = b.ownerDocument.createElement("div");
      yb(g, zb(d + (a || "") + e));
      for (var l = g; 0 < c; ) {
        var m = l.firstChild;
        if (null == m.firstChild) return b.ownerDocument.createElement("div");
        l = m;
        c--;
      }
      return l;
    },
    Cs = function (a, b) {
      for (
        var c = a.getElementsByTagName(b), d = [], e = c.length - 1;
        0 <= e;
        e--
      ) {
        var f = c[e];
        f.parentNode.removeChild(f);
        d.push(f);
      }
    },
    Fs = function (a) {
      var b = null,
        c = null;
      try {
        b = new Function("element", a);
      } catch (d) {
        c = d;
      }
      return { zf: b, error: c };
    },
    Js = function (a, b, c, d, e) {
      var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
      e && (f = e + "{" + f + "}");
      var g = document;
      if (g.createStyleSheet) {
        var l = Gs(g),
          m = l.rules.length;
        l.insertRule(f, m);
        return function () {
          l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
          l.insertRule("x {}", m);
        };
      }
      var n = Hs(f, g);
      Is(n, g);
      var p = n.parentNode;
      return function () {
        p.removeChild(n);
      };
    },
    Ks = null,
    Gs = function (a) {
      if (Ks) return Ks;
      for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
        var c = a.styleSheets[b];
        if (!c.href) {
          var d = c.ownerNode;
          if (d && d.parentNode && "HEAD" == d.parentNode.tagName)
            return (Ks = c);
        }
      }
      0 == a.styleSheets.length && a.createStyleSheet();
      return (Ks = a.styleSheets[0]);
    },
    Hs = function (a, b) {
      var c = (b || document).createElement("style");
      void 0 !== c.cssText ? (c.cssText = a) : (c.innerHTML = a);
      return c;
    },
    Is = function (a, b) {
      var c = b || document,
        d = c.getElementsByTagName("head")[0];
      d ||
        ((d = c.createElement("head")),
        c.body.parentNode.insertBefore(d, c.body));
      d.appendChild(a);
    },
    Ls = function (a, b, c, d) {
      if (a.style.setProperty)
        try {
          var e = a.style.getPropertyValue(b),
            f = a.style.getPropertyPriority(b);
          a.style.setProperty(b, c, d ? "important" : "");
          return function () {
            a.style.setProperty(b, "", f);
            a.style.setProperty(b, e, f);
          };
        } catch (l) {}
      var g = a.style.cssText;
      a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
      return function () {
        a.style.cssText = g;
      };
    },
    Ns = function (a, b, c, d) {
      if (ys(a)) return 7;
      if (b) return Ms(a, b, d);
      if (c && c.parentNode) {
        var e = a.parentNode,
          f = a.nextSibling;
        try {
          c.parentNode.insertBefore(a, c.nextSibling);
        } catch (g) {
          return 9;
        }
        return function () {
          e.insertBefore(a, f);
        };
      }
      return 4;
    },
    Ms = function (a, b, c) {
      var d = a.parentNode,
        e = a.nextSibling;
      c = (c || "").toLowerCase();
      try {
        if ("bottom" == c) b.appendChild(a);
        else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
        else if ("before" == c)
          if (b.parentNode) b.parentNode.insertBefore(a, b);
          else return 5;
        else if ("after" == c)
          if (b.parentNode) b.parentNode.insertBefore(a, b.nextSibling);
          else return 5;
      } catch (f) {
        return 9;
      }
      return function () {
        try {
          d.insertBefore(a, e);
        } catch (f) {}
      };
    },
    Os = function (a, b, c) {
      if (0 <= b && b < a.childNodes.length) {
        var d = a.childNodes[b];
        if (null != d && d.nodeType == Node.TEXT_NODE) {
          var e = d.nodeValue;
          d.nodeValue = c;
          return function () {
            d.nodeValue = e;
          };
        }
        return 2;
      }
      return 3;
    },
    Ps = function (a, b, c, d) {
      c ? (d = c.nextSibling) : d && (c = d.previousSibling);
      if (null != c && c.nodeType == Node.TEXT_NODE) {
        var e = c.nodeValue;
        c.nodeValue += a;
        return function () {
          c.nodeValue = e;
        };
      }
      if (null != d && d.nodeType == Node.TEXT_NODE) {
        var f = d.nodeValue;
        d.nodeValue = a + d.nodeValue;
        return function () {
          d.nodeValue = f;
        };
      }
      var g = (b.ownerDocument || b.document || document).createTextNode(a);
      d ? b.insertBefore(g, d) : b.appendChild(g);
      return function () {
        b.removeChild(g);
      };
    },
    Qs = function (a) {
      var b = document.createElement("a");
      a && (b.href = a);
      return b;
    };
  function Us(a, b) {
    function c(g) {
      var l = vf(g),
        m = tf(l, "protocol"),
        n = tf(l, "host", !0),
        p = tf(l, "port"),
        q = tf(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Vs(a) {
    return Ws(a) ? 1 : 0;
  }
  function Ws(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = J(a, {});
        J({ arg1: c[d], any_of: void 0 }, e);
        if (Vs(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < gd.length; g++) {
                var l = gd[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return hd(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return jd(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Us(b, c);
    }
    return !1;
  }
  Xe();
  function tt() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var ut = function () {
      var a = tt();
      a.hid = a.hid || va();
      return a.hid;
    },
    vt = function (a, b) {
      var c = tt();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Tt = function () {
      var a = !0;
      (ri(7) && ri(9) && ri(10)) || (a = !1);
      return a;
    },
    Ut = function () {
      var a = !0;
      (ri(3) && ri(4)) || (a = !1);
      return a;
    };
  var uu = window,
    vu = document,
    wu = function (a) {
      var b = uu._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        vu.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === uu["ga-disable-" + a])
      )
        return !0;
      try {
        var c = uu.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Lg("AMP_TOKEN", String(vu.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return vu.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Cu(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[O.g.La] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Lu = function (a, b) {};
  function Ku(a, b) {
    var c = function () {};
    return c;
  }
  function Mu(a, b, c) {}
  var ww = Ku;
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var yw = encodeURI,
    X = encodeURIComponent,
    zw = function (a, b, c) {
      Lb(a, b, c);
    },
    Aw = function (a, b) {
      if (!a) return !1;
      var c = tf(vf(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Bw = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Ew = function (a) {
      if (!Cw[a]) {
        Cw[a] = !0;
        var b = z[a] || {};
        z[a] = b;
        var c = function (e) {
            return Dw[e];
          },
          d = b.get;
        b.get = d
          ? function (e) {
              return void 0 !== Dw[e] ? Dw[e] : d(e);
            }
          : c;
      }
    },
    Hw = function (a, b) {
      Dw[a] = b;
      for (var c = Fw(a), d = 0; d < c.length; d++) Gw(c[d], a, b);
      c = Fw("");
      for (var e = 0; e < c.length; e++) Gw(c[e], a, b);
    },
    Gw = function (a, b, c) {
      try {
        a(c, b, S.C);
      } catch (d) {}
    },
    Fw = function (a) {
      Iw[a] = Iw[a] || [];
      return Iw[a];
    },
    Dw = {},
    Iw = {},
    Cw = {};
  var Jw = function () {
      z.gaData = z.gaData || {};
      return z.gaData;
    },
    Kw = function (a, b) {
      b = void 0 === b ? !1 : b;
      z.gaData = z.gaData || {};
      var c = z.gaData,
        d = c.tracker_created;
      c.tracker_created = function (e) {
        b && a(e);
        d && ra(d) && d(e);
        b || a(e);
      };
    },
    Lw = function (a) {
      var b = z[hp()];
      try {
        if (ra(b) && ra(b.getAll))
          return b.getAll().filter(function (c) {
            return c.get("trackingId") === a;
          });
      } catch (c) {}
      return [];
    },
    bx = function (a, b) {
      var c = Mw[a];
      if (c)
        E(function () {
          return b(c);
        });
      else {
        var d = Lw(a)[0];
        d
          ? ((Mw[a] = d),
            Nw || (Nw = d),
            E(function () {
              return b(d);
            }))
          : (Qw[a] || (Qw[a] = []),
            Qw[a].push(b),
            $w ||
              (($w = !0),
              Kw(function (e) {
                var f = e.get("trackingId");
                if (Qw[f]) {
                  if (ax[f]) {
                    ax[f] = !1;
                    var g = z[hp()];
                    ra(g) && g("ga.require", "_" + S.C);
                  }
                  Nw || (Nw = e);
                  Mw[f] = e;
                  for (var l = Qw[f], m; void 0 !== (m = l.shift()); ) m(e);
                  Qw[f] = void 0;
                }
              })));
      }
    },
    cx = function (a, b, c, d) {
      var e = z[hp()];
      if ("data" === b.hitType && c) {
        var f = z.gaData,
          g = Number(f && f[d] && f[d].first_hit),
          l = Ga();
        !isNaN(g) && l > g && (b.queueTime = Math.min(2e3, l + 100 - g));
      }
      try {
        var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
        e(m, b);
      } catch (n) {}
    },
    Mw = {},
    Qw = {},
    ax = {},
    Nw,
    $w = !1,
    dx,
    ex = function (a, b, c) {
      bx(a, function (d) {
        E(function () {
          cx(d, b, c, a);
        });
      });
    },
    fx = function () {
      var a = !1;
      Kw(function () {
        if (!a) {
          var b = z[hp()];
          ra(b) && (b("ga.require", "__" + S.C), (a = !0));
        }
      }, !0);
    },
    gx = function (a, b, c) {
      var d = Jw(),
        e = (d[a] = d[a] || {});
      (e.pending_experiments = e.pending_experiments || {})[b] = c;
      e.experiments = e.experiments || {};
      e.experiments[b] = c;
    },
    hx = function (a) {
      var b = Jw()[a];
      return b ? b.hitcount || 0 : 0;
    },
    kx = function (a, b, c, d, e, f) {
      Hw(b, c);
      var g = d;
      if (d) {
        var l = sf(z.location, "host");
        sf(vf(d), "host") === l && (d = "");
      }
      Kw(function (q) {
        q.set("referrer", d ? d : void 0);
      }, !0);
      if (ix(a)) (le.ga4_referrer_override = g), jx(a, b, c, e, f);
      else {
        gx(a, b, c);
        for (var m = Lw(a), n = 0; n < m.length; ++n)
          m[n].set("referrer", d ? d : void 0);
        if (0 < hx(a)) {
          var p = m[0];
          p && cx(p, { hitType: "data" }, !0, a);
        }
      }
    },
    ix = function (a) {
      return !!a && "G-" === a.substring(0, 2);
    },
    jx = function (a, b, c, d, e) {
      if (ix(a)) {
        var f = $p(a, "experiment_impression", {
          experiment_id: b,
          variant_id: c,
        });
        cq(f, d, { originatingEntity: e, deferrable: !0 });
      } else gx(a, b, c), 0 < hx(a) && ex(a, { hitType: "data" }, !0);
    };

  var ox = function (a, b, c) {
      function d() {
        f || ((f = !0), !0 !== lx && (lx = !1), mx(c), Uq(e));
      }
      mr = a;
      var e = "GTM-5PHKT7Q_" + b,
        f = !1;
      Vq(e);
      z.google_optimize = z.google_optimize || {};
      var g = z.google_optimize;
      g["GTM-5PHKT7Q"] = g["GTM-5PHKT7Q"] || {};
      g["GTM-5PHKT7Q"].optimize_dyn = function (m) {
        m.split(",").forEach(function (n) {
          nx[n] = !0;
        });
        lx = !0;
        d();
      };
      Ib(a, void 0, d);
      var l = z[ke.ca];
      z.setTimeout(function () {
        d();
      }, Number(l && l.hide && l.hide.timeout) || 1e4);
    },
    mx = function (a) {
      if (void 0 !== px) {
        var b = px - qx,
          c,
          d;
        lx ? (c = Ga() - px) : (d = Ga() - px);
        nr({ Ik: b, Yj: c, Wj: d });
      }
      nx.optimize_ready = !0;
      xr({ event: "opt.dyn" });
      xr({ event: "opt.js" });
      if (a && 0 < a.length) {
        var e = {};
        z[ke.ca].forEach(function (f) {
          var g = f.event;
          g && (e[g] = !0);
        });
        a.forEach(function (f) {
          e[f] && xr({ event: f });
        });
      }
      E(function () {
        ip("_" + S.C);
      });
    },
    rx = function (a, b, c, d, e, f, g, l, m) {
      function n(w, x) {
        x && (r += "&" + w + "=" + encodeURIComponent(x));
      }
      qx = Ga();
      if (a || b || c) {
        var p = void 0;
        if (b) {
          var q = Kk().aw;
          q && (p = q[0]);
        }
        if (f && (a || c || p)) {
          var t = 1,
            r,
            u = "GTM-5PHKT7Q_" + t++;
          Vq(u);
          var v = function (w) {
            dx = w;
            px = Ga();
            a || b
              ? ((r =
                  "https://www.google-analytics.com/gtm/optimize-dyn.js?id=GTM-5PHKT7Q"),
                a && n("cid", w),
                n("gclid", p),
                g && (n("gtm_auth", ""), n("gtm_preview", "")),
                (g || a) && n("cb", String(Math.random())),
                ox(r, t++, e))
              : mx(e);
            Uq(u);
          };
          ix(d)
            ? cq(Yp("get", d, "client_id", v), l, {
                originatingEntity: m,
                deferrable: !0,
              })
            : ((ax[d] = !0),
              bx(d, function (w) {
                return v(w.get("clientId"));
              }));
        } else mx(e);
      }
    },
    nx = {},
    qx,
    px,
    lx,
    mr;
  var sx = function (a, b) {
    this.we = a;
    this.md = b;
  };
  sx.prototype.toString = function () {
    var a = "" + this.we;
    1 < this.md && (a = a + "-" + this.md);
    return a;
  };
  var tx = function (a, b) {
    this.m = a;
    this.h = b;
  };
  tx.prototype.toString = function () {
    return this.h + "." + this.m;
  };
  var ux = function () {
      var a = Le("optimize.cookie_path", 2);
      return h(a) ? a : "/";
    },
    wx = function (a, b) {
      var c = new vx(a, b);
      c.hk();
      return c;
    },
    vx = function (a, b) {
      this.J = Math.floor(new Date() / 864e5);
      this.B = a || "auto";
      this.h = b || ux();
      this.m = new sx(nh(this.B), oh(this.h));
      this.K = [];
      this.map = {};
    };
  ca = vx.prototype;
  ca.Hj = function (a) {
    if (!a) return "";
    var b = this.Af(a);
    return b ? b.m : "";
  };
  ca.zk = function (a, b, c, d, e) {
    var f, g;
    f = void 0 === f ? 10 : f;
    g = void 0 === g ? 3e3 : g;
    if (!a) return !1;
    void 0 == b && (b = "");
    this.Ie(a, new tx(b, c));
    this.kj(e);
    return this.Wi(d, f, g);
  };
  ca.Af = function (a) {
    return this.map[a];
  };
  ca.Fj = function () {
    for (var a = 0, b = 0; b < this.K.length; b++)
      "x" !== this.Af(this.K[b]).m[0] && a++;
    return a;
  };
  ca.Ie = function (a, b) {
    a &&
      ("" === b.m
        ? this.Th(a)
        : (this.map[a] || this.K.push(a), (this.map[a] = b)));
  };
  ca.Dk = function (a) {
    for (var b = 0; b < a.length; b++) this.Ie(a[b][0], a[b][1]);
  };
  ca.Th = function (a) {
    var b = this.K.indexOf(a);
    0 <= b && this.K.splice(b, 1);
    delete this.map[a];
  };
  ca.rk = function () {
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      this.map[c].h < this.J && a.push(c);
    }
    for (var d = 0; d < a.length; d++) this.Th(a[d]);
  };
  ca.Ej = function () {
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      a.push([c, this.map[c]]);
    }
    return a;
  };
  ca.wj = function () {
    for (var a = 0, b = 0; b < this.K.length; b++)
      a = Math.max(a, this.map[this.K[b]].h);
    return 864e5 * a;
  };
  ca.toString = function () {
    if (0 == this.K.length) return "";
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      a.push(c + "." + this.map[c].toString());
    }
    return "GAX1." + this.m.toString() + "." + a.join("!");
  };
  ca.Wi = function (a, b, c) {
    var d = new Date();
    this.rk();
    var e = this.Fj();
    if (
      e > b ||
      (e > (a || 10) &&
        Zg().replace(
          RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"),
          this.toString()
        ).length > c)
    )
      return !1;
    d.setTime(this.wj());
    if ("auto" != this.B)
      return (
        (this.m = new sx(nh(this.B), oh(this.h))),
        0 ===
          ih("_gaexp", this.toString(), {
            path: this.h,
            domain: this.B,
            expires: d,
          })
      );
    for (var f = fh(), g = 0; g < f.length; g++)
      if (
        ((this.m = new sx(nh(f[g]), oh(this.h))),
        0 ===
          ih("_gaexp", this.toString(), {
            path: this.h,
            domain: f[g],
            expires: d,
          }))
      )
        return !0;
    return !1;
  };
  ca.hk = function () {
    var a = ch("_gaexp", this.m.we, this.m.md);
    if (a) {
      var b = this.ik(a);
      b && this.Dk(b.Ej());
    }
  };
  ca.ik = function (a) {
    for (
      var b = new vx(this.B, this.h), c = a.split("!"), d = 0;
      d < c.length;
      d++
    ) {
      var e = c[d].split(".");
      if (3 == e.length) {
        if (isNaN(Number(e[1]))) return;
        b.Ie(e[0], new tx(e[2], Number(e[1])));
      }
    }
    return b;
  };
  ca.kj = function (a) {
    a = a || {};
    var b = 0;
    a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.J - Ba(a[""]));
    for (var c = 0; c < this.K.length; c++) {
      var d = this.K[c];
      if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
        var e = this.Af(d);
        e.h = Ba(a[d]) + b;
        this.Ie(d, e);
      }
    }
  };
  var Bx = function () {
      xx = Ga();
      var a = yx;
      yx = [];
      for (var b = 0; b < a.length; b++) a[b]();
      zx &&
        (zx.takeRecords(),
        yx.length ||
          (zx && (zx.disconnect(), (zx = null)),
          Ax && (z.clearTimeout(Ax), (Ax = null))));
    },
    Dx = function () {
      var a = Ga() - xx;
      a >= Cx
        ? (Ax && (z.clearTimeout(Ax), (Ax = null)), Bx())
        : Ax ||
          (Ax = z.setTimeout(function () {
            Bx();
            Ax = null;
          }, Cx - a));
    },
    Ex = function (a) {
      if (!z.MutationObserver) return !1;
      try {
        return (
          zx ||
            ((zx = new MutationObserver(Dx)),
            zx.observe(C.documentElement, {
              subtree: !0,
              childList: !0,
              attributes: !0,
              characterData: !0,
            }),
            (xx = Ga())),
          yx.push(a),
          !0
        );
      } catch (b) {
        return !1;
      }
    },
    zx = null,
    yx = [],
    Cx = 0,
    xx = 0,
    Ax = null;
  var Fx = function (a, b) {
      (b && Ex(a)) || z.setTimeout(a, 80);
    },
    Gx = function (a) {
      try {
        return vd(a);
      } catch (b) {
        return null;
      }
    },
    Hx = function (a) {
      if (No) return !0;
      for (; a; ) {
        if (a.nextSibling) return !0;
        a = a.parentNode;
      }
      return !1;
    },
    Ix = function (a, b) {
      for (var c = Gx(a.la) || [], d = [], e = 0; e < c.length; e++) {
        var f = c[e];
        if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
          if (a.Fa && !Hx(f)) break;
          d.push(f);
        }
      }
      return d;
    },
    Jx = function (a, b) {
      return function () {
        a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b];
      };
    },
    Kx = function (a, b) {
      a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
      a.gtmProgressiveApplied[b] = !0;
    },
    Lx = function (a, b, c) {
      var d;
      var e = [];
      if (b.Na)
        if (b.Na.vf) d = [{ element: C.head }];
        else {
          var f = Ix(b.Na, b.id),
            g = null;
          b.Je && (g = Ix(b.Je, b.id + "-t"));
          for (var l = 0; l < f.length; l++) {
            var m = f[l],
              n = void 0;
            if (
              null != g &&
              ((n = g.length > l ? g[l] : null),
              !n && !No && (null === b.Je.fa || b.xh + e.length < b.Je.fa))
            )
              break;
            e.push({ element: m, targetElement: n });
          }
          d = e;
        }
      else d = e;
      var p = d;
      if (!No && b.gj && (!a || null == b.Na.fa || b.Na.fa != b.ue + p.length))
        return !1;
      for (var q = 0; q < p.length; q++) {
        var t = p[q].element,
          r = p[q].targetElement,
          u = void 0;
        b.ue++;
        Kx(t, b.id);
        r && (b.xh++, (u = b.id + "-t"), Kx(r, u));
        var v = b.lj(t, r);
        ra(v) && b.jc.push(v);
        b.jc.push(Jx(t, b.id));
        r && u && b.jc.push(Jx(r, u));
      }
      if ((b.Na.fa && b.Na.fa == b.ue) || (No && (!c || b.ue))) b.finished = !0;
      return !0;
    },
    Mx = function (a) {
      for (var b = {}, c = 0; c < a.Ma.length; c++) {
        var d = a.Ma[c];
        if (!d.Na.vf) {
          var e = b[d.Na.la];
          e || (e = b[d.Na.la] = Gx(d.Na.la) || []);
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            (g.gtmProgressiveApplied && g.gtmProgressiveApplied[d.id]) ||
              (Kx(g, d.id), d.jc.push(Jx(g, d.id)));
          }
        }
      }
    },
    Nx = function (a) {
      if (!a.Tf) {
        for (var b = a.bd; b < a.Ma.length; b++) {
          var c = a.Ma[b],
            d = b == a.bd;
          if (!c.finished && !Lx(d, c, a.ei && a.ai)) break;
          c.finished && d && a.bd++;
        }
        a.Ma.length > a.bd
          ? (!a.pending &&
              a.ei &&
              ((a.pending = !0),
              Fx(function () {
                a.pending = !1;
                Nx(a);
              }, a.ai)),
            No ||
              a.Of ||
              ((a.Of = function () {
                E(function () {
                  Nx(a);
                });
              }),
              Mb(C, "DOMContentLoaded", a.Of)))
          : Mx(a);
      }
    },
    Ox = {},
    Px = {},
    Qx = void 0,
    Rx = function (a, b, c, d) {
      var e = Qx;
      if (!sd || !e) return !1;
      var f = {
        id: e.id + ":" + e.Ma.length,
        lj: b,
        jc: [],
        gj: c,
        Na: a,
        ue: 0,
        Je: d || null,
        xh: 0,
        finished: !1,
      };
      e.Ma.push(f);
      null === a ? ((f.finished = !0), b(null)) : Nx(e);
      return !0;
    },
    Sx = function (a) {
      var b = qa;
      try {
        b = Js(a, "visibility", "hidden", !0);
      } catch (c) {}
      return function () {
        ra(b) && b.apply();
        b = null;
      };
    },
    Tx = function (a, b, c, d) {
      var e = b;
      if (!No && !a.vf) {
        var f = Sx(a.la);
        Po.push(f);
        e = function (g, l) {
          var m = b(g, l);
          f();
          return m;
        };
      }
      return Rx(a, e, c, d);
    };
  var Z = { o: {} };
  (Z.o.dee = ["google"]),
    (function () {
      (function (a) {
        Z.__dee = a;
        Z.__dee.s = "dee";
        Z.__dee.isVendorTemplate = !0;
        Z.__dee.priorityOverride = 0;
        Z.__dee.isInfrastructure = !1;
      })(function () {
        var a = !1;
        return a ? "gtm.sync" : "gtm.js";
      });
    })();
  (Z.o.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.s = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();

  (Z.o.asprv = ["google"]),
    (function () {
      function a() {
        ps({ event: "optimize.domChange" });
        Ex(a);
      }
      (function (b) {
        Z.__asprv = b;
        Z.__asprv.s = "asprv";
        Z.__asprv.isVendorTemplate = !0;
        Z.__asprv.priorityOverride = 0;
        Z.__asprv.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_globalName,
          d = !!b.vtp_listenForMutations,
          e = os("eventModel");
        c && Ew(c);
        d && a();
        var f, g, l;
        e && ((f = e.name || ""), (g = e.callback), (l = e.remove));
        if (g && ra(g))
          if (((f = String(f)), !0 !== l)) {
            var m = f,
              n = g;
            Fw(m).push(n);
            if ("" !== m) void 0 !== Dw[m] && Gw(n, m, Dw[m]);
            else for (var p in Dw) void 0 !== Dw[p] && Gw(n, p, Dw[p]);
          } else {
            var q = g,
              t = Fw(f),
              r = t.indexOf(q);
            0 <= r && t.splice(r, 1);
          }
        b.vtp_gtmOnSuccess();
      });
    })();

  var Vx = {};
  Vx.dataLayer = Me;
  Vx.callback = function (a) {
    Ce.hasOwnProperty(a) && ra(Ce[a]) && Ce[a]();
    delete Ce[a];
  };
  Vx.bootstrap = 0;
  Vx._spx = !1;
  function Wx() {
    le[S.C] = le[S.C] || Vx;
    S.ib && (le["ctid_" + S.ib] = Vx);
    yh();
    Bh() ||
      k(Ch(), function (a, b) {
        yo(a, b.transportUrl, b.context);
        M(92);
      });
    Ja(De, Z.o);
    Hc = Pc;
  }
  (function (a) {
    function b() {
      m = C.documentElement.getAttribute("data-tag-assistant-present");
      Hr(m) && (l = g.Qi);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (C.referrer) {
        var d = vf(C.referrer);
        c = "cct.google" === sf(d, "host");
      }
      if (!c) {
        var e = $g("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Ib("https://cct.google/taggy/agent.js"));
    }
    if (xe) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          re ? ((v = "OGT"), (w = "GTAG")) : xe && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Ib(
              "https://" +
                ke.Cd +
                "/debug/bootstrap?id=" +
                S.C +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                Eh()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Cb,
              containerProduct: v,
              debug: !1,
              id: S.C,
              isGte: qe,
              destinations: xh(),
            },
          };
          y.data.resume = function () {
            a();
          };
          ke.ji && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { Nk: 1, Ri: 2, dj: 3, li: 4, Qi: 5 },
        l = void 0,
        m = void 0,
        n = tf(z.location, "query", !1, void 0, "gtm_debug");
      Hr(n) && (l = g.Ri);
      if (!l && C.referrer) {
        var p = vf(C.referrer);
        "tagassistant.google.com" === sf(p, "host") && (l = g.dj);
      }
      if (!l) {
        var q = $g("__TAG_ASSISTANT");
        q.length && q[0].length && (l = g.li);
      }
      l || b();
      if (!l && Ir(m)) {
        var t = function () {
            if (r) return !0;
            r = !0;
            b();
            l && Cb ? f(l) : a();
          },
          r = !1;
        Mb(
          C,
          "TADebugSignal",
          function () {
            t();
          },
          !1
        );
        z.setTimeout(function () {
          t();
        }, 200);
      } else l && Cb ? f(l) : a();
    }
  })(function () {
    if (Q(70)) {
      var a = sn(nn.F.Ne, S.C);
      tn(a);
    }
    Yf().m();
    oi();
    if (S.ib ? le["ctid_" + S.ib] : le[S.C]) {
      var b = le.zones;
      b && b.unregisterChild(wh());
    } else {
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        xc.push(d[e]);
      for (var f = c.tags || [], g = 0; g < f.length; g++) Ac.push(f[g]);
      for (var l = c.predicates || [], m = 0; m < l.length; m++) zc.push(l[m]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], t = {}, r = 0; r < q.length; r++)
          t[q[r][0]] = Array.prototype.slice.call(q[r], 1);
        yc.push(t);
      }
      Cc = Z;
      Dc = Vs;
      Wx();
      if (Q(102)) {
        var u;
        if (Q(87)) {
          var v = Te["7"];
          u = v ? v.split("|") : [];
        } else u = [];
        for (var w = u, x = 0; x < Cg.length; x++) {
          var y = Cg[x],
            A = 0 <= w.indexOf(y) ? "granted" : "denied";
          dg().implicit(y, A);
        }
      }
      Gr();
      No = !1;
      Oo = 0;
      if (
        ("interactive" == C.readyState && !C.createEventObject) ||
        "complete" == C.readyState
      )
        Qo();
      else {
        Mb(C, "DOMContentLoaded", Qo);
        Mb(C, "readystatechange", Qo);
        if (C.createEventObject && C.documentElement.doScroll) {
          var B = !0;
          try {
            B = !z.frameElement;
          } catch (K) {}
          B && Ro();
        }
        Mb(z, "load", Qo);
      }
      Wq = !1;
      "complete" === C.readyState ? Yq() : Mb(z, "load", Yq);
      yi && z.setInterval(Ci, 864e5);
      xr({ event: "gtm.js" });
      Za("HEALTH", 1);
      Be = Ga();
      Vx.bootstrap = Be;
      if (Q(70)) {
        var F = sn(nn.F.dg, S.C);
        if (tn(F)) {
          var L = sn(nn.F.Ne, S.C);
          un(F, L);
        }
      }
    }
  });
})();
