function H(y) {
  if (y == null)
    return y;
  const l = y.toUpperCase();
  return l.endsWith("IES") ? y.substring(0, y.length - 3) + "y" : l.endsWith("ES") || l.endsWith("S") ? y.substring(0, y.length - 1) : y;
}
function ye(y, l) {
  let N = '"';
  if (y == null)
    return null;
  let P = !1;
  const R = "$#_ ";
  if (!y.startsWith(N) && !P) {
    const A = y;
    if (A.length > 0 && "0" <= A[0] && A[0] <= "9")
      P = !0;
    else
      for (let D = 0; D < A.length; D++) {
        const L = A[D];
        if (!("a" <= L && L <= "z") && !("A" <= L && L <= "Z") && !("0" <= L && L <= "9") && !(0 <= R.indexOf(L))) {
          P = !0;
          break;
        }
      }
  }
  return (y.startsWith("_") || y.startsWith("$") || y.startsWith("#")) && (P = !0), P || (N = ""), N + y + N;
}
function Z(y) {
  if (y == null)
    return null;
  if (y.charAt(0) === '"')
    return y;
  let l = ye(y);
  return l.charAt(0) === '"' || (l = l.replace(/ /g, "_")), l;
}
function K(y, l, N) {
  let P = !1;
  N == null && (N = ""), y.charAt(0) === '"' && (P = !0, y = y.substring(1, y.length - 1)), l.charAt(0) === '"' && (P = !0, l = l.substring(1, l.length - 1)), N.charAt(0) === '"' && (P = !0, N = N.substring(1, N.length - 1));
  let R = y + l + N;
  return P ? R = '"' + R + '"' : R = R.toLowerCase(), R;
}
function q(y) {
  return y.length < 2 ? null : parseInt(y.substring(0, 2));
}
var ue = /* @__PURE__ */ (function() {
  var y = [
    "Sales",
    "Finance",
    "Delivery",
    "Manufacturing",
    "Engineer",
    "Consultant",
    "Architect",
    "Manager",
    "Analyst",
    "Specialist",
    "Evangelist",
    "Salesman"
  ], l = [
    "\u300C\u8CA9\u58F2\u300D",
    "\u300C\u8CA1\u52D9\u300D",
    "\u300C\u914D\u9001\u300D",
    "\u300C\u88FD\u9020\u300D",
    "\u300C\u30A8\u30F3\u30B8\u30CB\u30A2\u300D",
    "\u300C\u30B3\u30F3\u30B5\u30EB\u30BF\u30F3\u30C8\u300D",
    "\u300C\u30A2\u30FC\u30AD\u30C6\u30AF\u30C8\u300D",
    "\u300C\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u300D",
    "\u300C\u30A2\u30CA\u30EA\u30B9\u30C8\u300D",
    "\u300C\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8\u300D",
    "\u300C\u30A8\u30D0\u30F3\u30B8\u30A7\u30EA\u30B9\u30C8\u300D"
  ], N = [
    "\uC601\uC5C5",
    "\uAE08\uC735",
    "\uBC30\uC1A1",
    "\uC81C\uC870",
    "\uC5D4\uC9C0\uB2C8\uC5B4",
    "\uCEE8\uC124\uD134\uD2B8",
    "\uAC74\uCD95\uAC00",
    "\uAD00\uB9AC\uC790",
    "\uBD84\uC11D\uAC00",
    "\uC804\uBB38\uAC00",
    "\uC804\uB3C4\uC790",
    "\uD310\uB9E4\uC6D0"
  ];
  function P(R, A) {
    if (typeof A != "string" || R.substring(0, 2).toLowerCase() == "en")
      return A;
    A.indexOf("'") == 0 && (A = A.substring(1, A.length - 1));
    for (var D = -1, L = 0; L < y.length; L++)
      if (y[L] == A) {
        D = L;
        break;
      }
    return 0 <= D && R.substring(0, 2).toLowerCase() == "jp" && D < l.length ? "'" + l[D] + "'" : 0 <= D && R.substring(0, 2).toLowerCase() == "kr" && D < N.length ? "'" + N[D] + "'" : A;
  }
  return P;
})();
function Ae(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var ne = { exports: {} }, de;
function Se() {
  return de || (de = 1, (function(y, l) {
    (function() {
      var N = 9007199254740992, P = -N, R = "0123456789", A = "abcdefghijklmnopqrstuvwxyz", D = A.toUpperCase(), L = R + "abcdef";
      function w(e) {
        this.name = "UnsupportedError", this.message = e || "This feature is not supported on this platform";
      }
      w.prototype = new Error(), w.prototype.constructor = w;
      var _ = Array.prototype.slice;
      function r(e) {
        if (!(this instanceof r))
          return e || (e = null), e === null ? new r() : new r(e);
        if (typeof e == "function")
          return this.random = e, this;
        arguments.length && (this.seed = 0);
        for (var a = 0; a < arguments.length; a++) {
          var n = 0;
          if (Object.prototype.toString.call(arguments[a]) === "[object String]")
            for (var f = 0; f < arguments[a].length; f++) {
              for (var m = 0, S = 0; S < arguments[a].length; S++)
                m = arguments[a].charCodeAt(S) + (m << 6) + (m << 16) - m;
              n += m;
            }
          else
            n = arguments[a];
          this.seed += (arguments.length - a) * n;
        }
        return this.mt = this.mersenne_twister(this.seed), this.bimd5 = this.blueimp_md5(), this.random = function() {
          return this.mt.random(this.seed);
        }, this;
      }
      r.prototype.VERSION = "1.1.13";
      function s(e, a) {
        if (e = e || {}, a)
          for (var n in a)
            typeof e[n] > "u" && (e[n] = a[n]);
        return e;
      }
      function T(e) {
        return Array.apply(null, Array(e)).map(function(a, n) {
          return n;
        });
      }
      function C(e, a) {
        if (e)
          throw new RangeError(a);
      }
      var F = function() {
        throw new Error("No Base64 encoder available.");
      };
      (function() {
        typeof btoa == "function" ? F = btoa : typeof Buffer == "function" && (F = function(a) {
          return new Buffer(a).toString("base64");
        });
      })(), r.prototype.bool = function(e) {
        return e = s(e, { likelihood: 50 }), C(
          e.likelihood < 0 || e.likelihood > 100,
          "Chance: Likelihood accepts values from 0 to 100."
        ), this.random() * 100 < e.likelihood;
      }, r.prototype.falsy = function(e) {
        e = s(e, { pool: [!1, null, 0, NaN, "", void 0] });
        var a = e.pool, n = this.integer({ min: 0, max: a.length - 1 }), f = a[n];
        return f;
      }, r.prototype.animal = function(e) {
        if (e = s(e), typeof e.type < "u")
          return C(
            !this.get("animals")[e.type.toLowerCase()],
            "Please pick from desert, ocean, grassland, forest, zoo, pets, farm."
          ), this.pick(this.get("animals")[e.type.toLowerCase()]);
        var a = ["desert", "forest", "ocean", "zoo", "farm", "pet", "grassland"];
        return this.pick(this.get("animals")[this.pick(a)]);
      }, r.prototype.character = function(e) {
        e = s(e);
        var a = "!@#$%^&*()[]", n, f;
        return e.casing === "lower" ? n = A : e.casing === "upper" ? n = D : n = A + D, e.pool ? f = e.pool : (f = "", e.alpha && (f += n), e.numeric && (f += R), e.symbols && (f += a), f || (f = n + R + a)), f.charAt(this.natural({ max: f.length - 1 }));
      }, r.prototype.floating = function(e) {
        e = s(e, { fixed: 4 }), C(
          e.fixed && e.precision,
          "Chance: Cannot specify both fixed and precision."
        );
        var a, n = Math.pow(10, e.fixed), f = N / n, m = -f;
        C(
          e.min && e.fixed && e.min < m,
          "Chance: Min specified is out of range with fixed. Min should be, at least, " + m
        ), C(
          e.max && e.fixed && e.max > f,
          "Chance: Max specified is out of range with fixed. Max should be, at most, " + f
        ), e = s(e, { min: m, max: f }), a = this.integer({ min: e.min * n, max: e.max * n });
        var S = (a / n).toFixed(e.fixed);
        return parseFloat(S);
      }, r.prototype.integer = function(e) {
        return e = s(e, { min: P, max: N }), C(e.min > e.max, "Chance: Min cannot be greater than Max."), Math.floor(this.random() * (e.max - e.min + 1) + e.min);
      }, r.prototype.natural = function(e) {
        if (e = s(e, { min: 0, max: N }), typeof e.numerals == "number" && (C(e.numerals < 1, "Chance: Numerals cannot be less than one."), e.min = Math.pow(10, e.numerals - 1), e.max = Math.pow(10, e.numerals) - 1), C(e.min < 0, "Chance: Min cannot be less than zero."), e.exclude) {
          C(!Array.isArray(e.exclude), "Chance: exclude must be an array.");
          for (var a in e.exclude)
            C(!Number.isInteger(e.exclude[a]), "Chance: exclude must be numbers.");
          var n = e.min + this.natural({ max: e.max - e.min - e.exclude.length }), f = e.exclude.sort((S, E) => S - E);
          for (var m in f) {
            if (n < f[m])
              break;
            n++;
          }
          return n;
        }
        return this.integer(e);
      }, r.prototype.prime = function(e) {
        e = s(e, { min: 0, max: 1e4 }), C(e.min < 0, "Chance: Min cannot be less than zero."), C(e.min > e.max, "Chance: Min cannot be greater than Max.");
        var a = u.primes[u.primes.length - 1];
        if (e.max > a)
          for (var n = a + 2; n <= e.max; ++n)
            this.is_prime(n) && u.primes.push(n);
        var f = u.primes.filter(function(m) {
          return m >= e.min && m <= e.max;
        });
        return this.pick(f);
      }, r.prototype.is_prime = function(e) {
        if (e % 1 || e < 2)
          return !1;
        if (e % 2 === 0)
          return e === 2;
        if (e % 3 === 0)
          return e === 3;
        for (var a = Math.sqrt(e), n = 5; n <= a; n += 6)
          if (e % n === 0 || e % (n + 2) === 0)
            return !1;
        return !0;
      }, r.prototype.hex = function(e) {
        e = s(e, { min: 0, max: N, casing: "lower" }), C(e.min < 0, "Chance: Min cannot be less than zero.");
        var a = this.natural({ min: e.min, max: e.max });
        return e.casing === "upper" ? a.toString(16).toUpperCase() : a.toString(16);
      }, r.prototype.letter = function(e) {
        e = s(e, { casing: "lower" });
        var a = "abcdefghijklmnopqrstuvwxyz", n = this.character({ pool: a });
        return e.casing === "upper" && (n = n.toUpperCase()), n;
      }, r.prototype.string = function(e) {
        e = s(e, { min: 5, max: 20 }), e.length !== 0 && !e.length && (e.length = this.natural({ min: e.min, max: e.max })), C(e.length < 0, "Chance: Length cannot be less than zero.");
        var a = e.length, n = this.n(this.character, a, e);
        return n.join("");
      };
      function G(e) {
        this.c = e;
      }
      G.prototype = {
        substitute: function() {
          return this.c;
        }
      };
      function g(e) {
        this.c = e;
      }
      g.prototype = {
        substitute: function() {
          if (!/[{}\\]/.test(this.c))
            throw new Error('Invalid escape sequence: "\\' + this.c + '".');
          return this.c;
        }
      };
      function i(e) {
        this.c = e;
      }
      i.prototype = {
        replacers: {
          "#": function(e) {
            return e.character({ pool: R });
          },
          A: function(e) {
            return e.character({ pool: D });
          },
          a: function(e) {
            return e.character({ pool: A });
          }
        },
        substitute: function(e) {
          var a = this.replacers[this.c];
          if (!a)
            throw new Error('Invalid replacement character: "' + this.c + '".');
          return a(e);
        }
      };
      function c(e) {
        for (var a = [], n = "identity", f = 0; f < e.length; f++) {
          var m = e[f];
          switch (n) {
            case "escape":
              a.push(new g(m)), n = "identity";
              break;
            case "identity":
              m === "{" ? n = "replace" : m === "\\" ? n = "escape" : a.push(new G(m));
              break;
            case "replace":
              m === "}" ? n = "identity" : a.push(new i(m));
              break;
          }
        }
        return a;
      }
      r.prototype.template = function(e) {
        if (!e)
          throw new Error("Template string is required");
        var a = this;
        return c(e).map(function(n) {
          return n.substitute(a);
        }).join("");
      }, r.prototype.buffer = function(e) {
        if (typeof Buffer > "u")
          throw new w("Sorry, the buffer() function is not supported on your platform");
        e = s(e, { length: this.natural({ min: 5, max: 20 }) }), C(e.length < 0, "Chance: Length cannot be less than zero.");
        var a = e.length, n = this.n(this.character, a, e);
        return Buffer.from(n);
      }, r.prototype.capitalize = function(e) {
        return e.charAt(0).toUpperCase() + e.substr(1);
      }, r.prototype.mixin = function(e) {
        for (var a in e)
          this[a] = e[a];
        return this;
      }, r.prototype.unique = function(e, a, n) {
        C(
          typeof e != "function",
          "Chance: The first argument must be a function."
        );
        var f = function(k, z) {
          return k.indexOf(z) !== -1;
        };
        n && (f = n.comparator || f);
        for (var m = [], S = 0, E, v = a * 50, M = _.call(arguments, 2); m.length < a; ) {
          var I = JSON.parse(JSON.stringify(M));
          if (E = e.apply(this, I), f(m, E) || (m.push(E), S = 0), ++S > v)
            throw new RangeError("Chance: num is likely too large for sample set");
        }
        return m;
      }, r.prototype.n = function(e, a) {
        C(
          typeof e != "function",
          "Chance: The first argument must be a function."
        ), typeof a > "u" && (a = 1);
        var n = a, f = [], m = _.call(arguments, 2);
        for (n = Math.max(0, n), null; n--; null)
          f.push(e.apply(this, m));
        return f;
      }, r.prototype.pad = function(e, a, n) {
        return n = n || "0", e = e + "", e.length >= a ? e : new Array(a - e.length + 1).join(n) + e;
      }, r.prototype.pick = function(e, a) {
        if (e.length === 0)
          throw new RangeError("Chance: Cannot pick() from an empty array");
        return !a || a === 1 ? e[this.natural({ max: e.length - 1 })] : this.shuffle(e).slice(0, a);
      }, r.prototype.pickone = function(e) {
        if (e.length === 0)
          throw new RangeError("Chance: Cannot pickone() from an empty array");
        return e[this.natural({ max: e.length - 1 })];
      }, r.prototype.pickset = function(e, a) {
        if (a === 0)
          return [];
        if (e.length === 0)
          throw new RangeError("Chance: Cannot pickset() from an empty array");
        if (a < 0)
          throw new RangeError("Chance: Count must be a positive number");
        if (!a || a === 1)
          return [this.pickone(e)];
        var n = e.slice(0), f = n.length;
        return this.n(function() {
          var m = this.natural({ max: --f }), S = n[m];
          return n[m] = n[f], S;
        }, Math.min(f, a));
      }, r.prototype.shuffle = function(e) {
        for (var a = [], n = 0, f = Number(e.length), m = T(f), S = f - 1, E, v = 0; v < f; v++)
          E = this.natural({ max: S }), n = m[E], a[v] = e[n], m[E] = m[S], S -= 1;
        return a;
      }, r.prototype.weighted = function(e, a, n) {
        if (e.length !== a.length)
          throw new RangeError("Chance: Length of array and weights must match");
        for (var f = 0, m, S = 0; S < a.length; ++S) {
          if (m = a[S], isNaN(m))
            throw new RangeError("Chance: All weights must be numbers");
          m > 0 && (f += m);
        }
        if (f === 0)
          throw new RangeError("Chance: No valid entries in array weights");
        var E = this.random() * f, v = 0, M = -1, I;
        for (S = 0; S < a.length; ++S) {
          if (m = a[S], v += m, m > 0) {
            if (E <= v) {
              I = S;
              break;
            }
            M = S;
          }
          S === a.length - 1 && (I = M);
        }
        var k = e[I];
        return n = typeof n > "u" ? !1 : n, n && (e.splice(I, 1), a.splice(I, 1)), k;
      }, r.prototype.paragraph = function(e) {
        e = s(e);
        var a = e.sentences || this.natural({ min: 3, max: 7 }), n = this.n(this.sentence, a), f = e.linebreak === !0 ? `
` : " ";
        return n.join(f);
      }, r.prototype.sentence = function(e) {
        e = s(e);
        var a = e.words || this.natural({ min: 12, max: 18 }), n = e.punctuation, f, m = this.n(this.word, a);
        return f = m.join(" "), f = this.capitalize(f), n !== !1 && !/^[.?;!:]$/.test(n) && (n = "."), n && (f += n), f;
      }, r.prototype.syllable = function(e) {
        e = s(e);
        for (var a = e.length || this.natural({ min: 2, max: 3 }), n = "bcdfghjklmnprstvwz", f = "aeiou", m = n + f, S = "", E, v = 0; v < a; v++)
          v === 0 ? E = this.character({ pool: m }) : n.indexOf(E) === -1 ? E = this.character({ pool: n }) : E = this.character({ pool: f }), S += E;
        return e.capitalize && (S = this.capitalize(S)), S;
      }, r.prototype.word = function(e) {
        e = s(e), C(
          e.syllables && e.length,
          "Chance: Cannot specify both syllables AND length."
        );
        var a = e.syllables || this.natural({ min: 1, max: 3 }), n = "";
        if (e.length) {
          do
            n += this.syllable();
          while (n.length < e.length);
          n = n.substring(0, e.length);
        } else
          for (var f = 0; f < a; f++)
            n += this.syllable();
        return e.capitalize && (n = this.capitalize(n)), n;
      }, r.prototype.emoji = function(e) {
        e = s(e, { category: "all", length: 1 }), C(
          e.length < 1 || BigInt(e.length) > BigInt(N),
          "Chance: length must be between 1 and " + String(N)
        );
        var a = this.get("emojis");
        e.category === "all" && (e.category = this.pickone(Object.keys(a)));
        var n = a[e.category];
        return C(
          n === void 0,
          "Chance: Unrecognised emoji category: [" + e.category + "]."
        ), this.pickset(n, e.length).map(function(f) {
          return String.fromCodePoint(f);
        }).join("");
      }, r.prototype.age = function(e) {
        e = s(e);
        var a;
        switch (e.type) {
          case "child":
            a = { min: 0, max: 12 };
            break;
          case "teen":
            a = { min: 13, max: 19 };
            break;
          case "adult":
            a = { min: 18, max: 65 };
            break;
          case "senior":
            a = { min: 65, max: 100 };
            break;
          case "all":
            a = { min: 0, max: 100 };
            break;
          default:
            a = { min: 18, max: 65 };
            break;
        }
        return this.natural(a);
      }, r.prototype.birthday = function(e) {
        var a = this.age(e), n = /* @__PURE__ */ new Date(), f = n.getFullYear();
        if (e && e.type) {
          var m = /* @__PURE__ */ new Date(), S = /* @__PURE__ */ new Date();
          m.setFullYear(f - a - 1), S.setFullYear(f - a), e = s(e, {
            min: m,
            max: S
          });
        } else if (e && (e.minAge !== void 0 || e.maxAge !== void 0)) {
          C(e.minAge < 0, "Chance: MinAge cannot be less than zero."), C(e.minAge > e.maxAge, "Chance: MinAge cannot be greater than MaxAge.");
          var E = e.minAge !== void 0 ? e.minAge : 0, v = e.maxAge !== void 0 ? e.maxAge : 100, M = new Date(f - v - 1, n.getMonth(), n.getDate()), I = new Date(f - E, n.getMonth(), n.getDate());
          M.setDate(M.getDate() + 1), I.setDate(I.getDate() + 1), I.setMilliseconds(I.getMilliseconds() - 1), e = s(e, {
            min: M,
            max: I
          });
        } else
          e = s(e, {
            year: f - a
          });
        return this.date(e);
      }, r.prototype.cpf = function(e) {
        e = s(e, {
          formatted: !0
        });
        var a = this.n(this.natural, 9, { max: 9 }), n = a[8] * 2 + a[7] * 3 + a[6] * 4 + a[5] * 5 + a[4] * 6 + a[3] * 7 + a[2] * 8 + a[1] * 9 + a[0] * 10;
        n = 11 - n % 11, n >= 10 && (n = 0);
        var f = n * 2 + a[8] * 3 + a[7] * 4 + a[6] * 5 + a[5] * 6 + a[4] * 7 + a[3] * 8 + a[2] * 9 + a[1] * 10 + a[0] * 11;
        f = 11 - f % 11, f >= 10 && (f = 0);
        var m = "" + a[0] + a[1] + a[2] + "." + a[3] + a[4] + a[5] + "." + a[6] + a[7] + a[8] + "-" + n + f;
        return e.formatted ? m : m.replace(/\D/g, "");
      }, r.prototype.cnpj = function(e) {
        e = s(e, {
          formatted: !0
        });
        var a = this.n(this.natural, 12, { max: 12 }), n = a[11] * 2 + a[10] * 3 + a[9] * 4 + a[8] * 5 + a[7] * 6 + a[6] * 7 + a[5] * 8 + a[4] * 9 + a[3] * 2 + a[2] * 3 + a[1] * 4 + a[0] * 5;
        n = 11 - n % 11, n < 2 && (n = 0);
        var f = n * 2 + a[11] * 3 + a[10] * 4 + a[9] * 5 + a[8] * 6 + a[7] * 7 + a[6] * 8 + a[5] * 9 + a[4] * 2 + a[3] * 3 + a[2] * 4 + a[1] * 5 + a[0] * 6;
        f = 11 - f % 11, f < 2 && (f = 0);
        var m = "" + a[0] + a[1] + "." + a[2] + a[3] + a[4] + "." + a[5] + a[6] + a[7] + "/" + a[8] + a[9] + a[10] + a[11] + "-" + n + f;
        return e.formatted ? m : m.replace(/\D/g, "");
      }, r.prototype.first = function(e) {
        return e = s(e, { gender: this.gender(), nationality: "en" }), this.pick(this.get("firstNames")[e.gender.toLowerCase()][e.nationality.toLowerCase()]);
      }, r.prototype.profession = function(e) {
        return e = s(e), e.rank ? this.pick(["Apprentice ", "Junior ", "Senior ", "Lead "]) + this.pick(this.get("profession")) : this.pick(this.get("profession"));
      }, r.prototype.company = function() {
        return this.pick(this.get("company"));
      }, r.prototype.gender = function(e) {
        return e = s(e, { extraGenders: [] }), this.pick(["Male", "Female"].concat(e.extraGenders));
      }, r.prototype.last = function(e) {
        if (e = s(e, { nationality: "*" }), e.nationality === "*") {
          var a = [], n = this.get("lastNames");
          return Object.keys(n).forEach(function(f) {
            a = a.concat(n[f]);
          }), this.pick(a);
        } else
          return this.pick(this.get("lastNames")[e.nationality.toLowerCase()]);
      }, r.prototype.israelId = function() {
        for (var e = this.string({ pool: "0123456789", length: 8 }), a = 0, n = 0; n < e.length; n++) {
          var f = e[n] * (n / 2 === parseInt(n / 2) ? 1 : 2);
          f = this.pad(f, 2).toString(), f = parseInt(f[0]) + parseInt(f[1]), a = a + f;
        }
        return e = e + (10 - parseInt(a.toString().slice(-1))).toString().slice(-1), e;
      }, r.prototype.mrz = function(e) {
        var a = function(m) {
          var S = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""), E = [7, 3, 1], v = 0;
          return typeof m != "string" && (m = m.toString()), m.split("").forEach(function(M, I) {
            var k = S.indexOf(M);
            k !== -1 ? M = k === 0 ? 0 : k + 9 : M = parseInt(M, 10), M *= E[I % E.length], v += M;
          }), v % 10;
        }, n = function(m) {
          var S = function(v) {
            return new Array(v + 1).join("<");
          }, E = [
            "P<",
            m.issuer,
            m.last.toUpperCase(),
            "<<",
            m.first.toUpperCase(),
            S(39 - (m.last.length + m.first.length + 2)),
            m.passportNumber,
            a(m.passportNumber),
            m.nationality,
            m.dob,
            a(m.dob),
            m.gender,
            m.expiry,
            a(m.expiry),
            S(14),
            a(S(14))
          ].join("");
          return E + a(E.substr(44, 10) + E.substr(57, 7) + E.substr(65, 7));
        }, f = this;
        return e = s(e, {
          first: this.first(),
          last: this.last(),
          passportNumber: this.integer({ min: 1e8, max: 999999999 }),
          dob: (function() {
            var m = f.birthday({ type: "adult" });
            return [
              m.getFullYear().toString().substr(2),
              f.pad(m.getMonth() + 1, 2),
              f.pad(m.getDate(), 2)
            ].join("");
          })(),
          expiry: (function() {
            var m = /* @__PURE__ */ new Date();
            return [
              (m.getFullYear() + 5).toString().substr(2),
              f.pad(m.getMonth() + 1, 2),
              f.pad(m.getDate(), 2)
            ].join("");
          })(),
          gender: this.gender() === "Female" ? "F" : "M",
          issuer: "GBR",
          nationality: "GBR"
        }), n(e);
      }, r.prototype.name = function(e) {
        e = s(e);
        var a = this.first(e), n = this.last(e), f;
        return e.middle ? f = a + " " + this.first(e) + " " + n : e.middle_initial ? f = a + " " + this.character({ alpha: !0, casing: "upper" }) + ". " + n : f = a + " " + n, e.prefix && (f = this.prefix(e) + " " + f), e.suffix && (f = f + " " + this.suffix(e)), f;
      }, r.prototype.name_prefixes = function(e) {
        e = e || "all", e = e.toLowerCase();
        var a = [
          { name: "Doctor", abbreviation: "Dr." }
        ];
        return (e === "male" || e === "all") && a.push({ name: "Mister", abbreviation: "Mr." }), (e === "female" || e === "all") && (a.push({ name: "Miss", abbreviation: "Miss" }), a.push({ name: "Misses", abbreviation: "Mrs." })), a;
      }, r.prototype.prefix = function(e) {
        return this.name_prefix(e);
      }, r.prototype.name_prefix = function(e) {
        return e = s(e, { gender: "all" }), e.full ? this.pick(this.name_prefixes(e.gender)).name : this.pick(this.name_prefixes(e.gender)).abbreviation;
      }, r.prototype.HIDN = function() {
        var e = "0123456789", a = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ", n = "";
        return n += this.string({ pool: e, length: 6 }), n += this.string({ pool: a, length: 2 }), n;
      }, r.prototype.ssn = function(e) {
        e = s(e, { ssnFour: !1, dashes: !0 });
        var a = "1234567890", n, f = e.dashes ? "-" : "";
        return e.ssnFour ? n = this.string({ pool: a, length: 4 }) : n = this.string({ pool: a, length: 3 }) + f + this.string({ pool: a, length: 2 }) + f + this.string({ pool: a, length: 4 }), n;
      }, r.prototype.aadhar = function(e) {
        e = s(e, { onlyLastFour: !1, separatedByWhiteSpace: !0 });
        var a = "1234567890", n, f = e.separatedByWhiteSpace ? " " : "";
        return e.onlyLastFour ? n = this.string({ pool: a, length: 4 }) : n = this.string({ pool: a, length: 4 }) + f + this.string({ pool: a, length: 4 }) + f + this.string({ pool: a, length: 4 }), n;
      }, r.prototype.name_suffixes = function() {
        var e = [
          { name: "Doctor of Osteopathic Medicine", abbreviation: "D.O." },
          { name: "Doctor of Philosophy", abbreviation: "Ph.D." },
          { name: "Esquire", abbreviation: "Esq." },
          { name: "Junior", abbreviation: "Jr." },
          { name: "Juris Doctor", abbreviation: "J.D." },
          { name: "Master of Arts", abbreviation: "M.A." },
          { name: "Master of Business Administration", abbreviation: "M.B.A." },
          { name: "Master of Science", abbreviation: "M.S." },
          { name: "Medical Doctor", abbreviation: "M.D." },
          { name: "Senior", abbreviation: "Sr." },
          { name: "The Third", abbreviation: "III" },
          { name: "The Fourth", abbreviation: "IV" },
          { name: "Bachelor of Engineering", abbreviation: "B.E" },
          { name: "Bachelor of Technology", abbreviation: "B.TECH" }
        ];
        return e;
      }, r.prototype.suffix = function(e) {
        return this.name_suffix(e);
      }, r.prototype.name_suffix = function(e) {
        return e = s(e), e.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation;
      }, r.prototype.nationalities = function() {
        return this.get("nationalities");
      }, r.prototype.nationality = function() {
        var e = this.pick(this.nationalities());
        return e.name;
      }, r.prototype.zodiac = function() {
        const e = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
        return this.pickone(e);
      }, r.prototype.android_id = function() {
        return "APA91" + this.string({ pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_", length: 178 });
      }, r.prototype.apple_token = function() {
        return this.string({ pool: "abcdef1234567890", length: 64 });
      }, r.prototype.wp8_anid2 = function() {
        return F(this.hash({ length: 32 }));
      }, r.prototype.wp7_anid = function() {
        return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({ length: 3 }) + "&W=" + this.integer({ min: 0, max: 9 });
      }, r.prototype.bb_pin = function() {
        return this.hash({ length: 8 });
      }, r.prototype.avatar = function(e) {
        var a = null, n = "//www.gravatar.com/avatar/", f = {
          http: "http",
          https: "https"
        }, m = {
          bmp: "bmp",
          gif: "gif",
          jpg: "jpg",
          png: "png"
        }, S = {
          404: "404",
          // Return 404 if not found
          mm: "mm",
          // Mystery man
          identicon: "identicon",
          // Geometric pattern based on hash
          monsterid: "monsterid",
          // A generated monster icon
          wavatar: "wavatar",
          // A generated face
          retro: "retro",
          // 8-bit icon
          blank: "blank"
          // A transparent png
        }, E = {
          g: "g",
          pg: "pg",
          r: "r",
          x: "x"
        }, v = {
          protocol: null,
          email: null,
          fileExtension: null,
          size: null,
          fallback: null,
          rating: null
        };
        if (!e)
          v.email = this.email(), e = {};
        else if (typeof e == "string")
          v.email = e, e = {};
        else {
          if (typeof e != "object")
            return null;
          if (e.constructor === "Array")
            return null;
        }
        return v = s(e, v), v.email || (v.email = this.email()), v.protocol = f[v.protocol] ? v.protocol + ":" : "", v.size = parseInt(v.size, 0) ? v.size : "", v.rating = E[v.rating] ? v.rating : "", v.fallback = S[v.fallback] ? v.fallback : "", v.fileExtension = m[v.fileExtension] ? v.fileExtension : "", a = v.protocol + n + this.bimd5.md5(v.email) + (v.fileExtension ? "." + v.fileExtension : "") + (v.size || v.rating || v.fallback ? "?" : "") + (v.size ? "&s=" + v.size.toString() : "") + (v.rating ? "&r=" + v.rating : "") + (v.fallback ? "&d=" + v.fallback : ""), a;
      }, r.prototype.color = function(e) {
        function a(V, ae) {
          return [V, V, V].join(ae || "");
        }
        function n(V) {
          var ae = V ? "rgba" : "rgb", te = V ? "," + this.floating({ min: W, max: J }) : "", oe = m ? a(this.natural({ min: S, max: E }), ",") : this.natural({ min: I, max: k }) + "," + this.natural({ min: z, max: O }) + "," + this.natural({ max: 255 });
          return ae + "(" + oe + te + ")";
        }
        function f(V, ae, te) {
          var oe = te ? "#" : "", Q = "";
          return m ? (Q = a(this.pad(this.hex({ min: S, max: E }), 2)), e.format === "shorthex" && (Q = a(this.hex({ min: 0, max: 15 })))) : e.format === "shorthex" ? Q = this.pad(this.hex({ min: Math.floor(v / 16), max: Math.floor(M / 16) }), 1) + this.pad(this.hex({ min: Math.floor(I / 16), max: Math.floor(k / 16) }), 1) + this.pad(this.hex({ min: Math.floor(z / 16), max: Math.floor(O / 16) }), 1) : v !== void 0 || M !== void 0 || I !== void 0 || k !== void 0 || z !== void 0 || O !== void 0 ? Q = this.pad(this.hex({ min: v, max: M }), 2) + this.pad(this.hex({ min: I, max: k }), 2) + this.pad(this.hex({ min: z, max: O }), 2) : Q = this.pad(this.hex({ min: S, max: E }), 2) + this.pad(this.hex({ min: S, max: E }), 2) + this.pad(this.hex({ min: S, max: E }), 2), oe + Q;
        }
        e = s(e, {
          format: this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]),
          grayscale: !1,
          casing: "lower",
          min: 0,
          max: 255,
          min_red: void 0,
          max_red: void 0,
          min_green: void 0,
          max_green: void 0,
          min_blue: void 0,
          max_blue: void 0,
          min_alpha: 0,
          max_alpha: 1
        });
        var m = e.grayscale, S = e.min, E = e.max, v = e.min_red, M = e.max_red, I = e.min_green, k = e.max_green, z = e.min_blue, O = e.max_blue, W = e.min_alpha, J = e.max_alpha;
        e.min_red === void 0 && (v = S), e.max_red === void 0 && (M = E), e.min_green === void 0 && (I = S), e.max_green === void 0 && (k = E), e.min_blue === void 0 && (z = S), e.max_blue === void 0 && (O = E), e.min_alpha === void 0 && (W = 0), e.max_alpha === void 0 && (J = 1), m && S === 0 && E === 255 && v !== void 0 && M !== void 0 && (S = (v + I + z) / 3, E = (M + k + O) / 3);
        var U;
        if (e.format === "hex")
          U = f.call(this, 2, 6, !0);
        else if (e.format === "shorthex")
          U = f.call(this, 1, 3, !0);
        else if (e.format === "rgb")
          U = n.call(this, !1);
        else if (e.format === "rgba")
          U = n.call(this, !0);
        else if (e.format === "0x")
          U = "0x" + f.call(this, 2, 6);
        else {
          if (e.format === "name")
            return this.pick(this.get("colorNames"));
          throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');
        }
        return e.casing === "upper" && (U = U.toUpperCase()), U;
      }, r.prototype.domain = function(e) {
        return e = s(e), this.word() + "." + (e.tld || this.tld());
      }, r.prototype.email = function(e) {
        return e = s(e), this.word({ length: e.length }) + "@" + (e.domain || this.domain());
      }, r.prototype.fbid = function() {
        return "10000" + this.string({ pool: "1234567890", length: 11 });
      }, r.prototype.google_analytics = function() {
        var e = this.pad(this.natural({ max: 999999 }), 6), a = this.pad(this.natural({ max: 99 }), 2);
        return "UA-" + e + "-" + a;
      }, r.prototype.hashtag = function() {
        return "#" + this.word();
      }, r.prototype.ip = function() {
        return this.natural({ min: 1, max: 254 }) + "." + this.natural({ max: 255 }) + "." + this.natural({ max: 255 }) + "." + this.natural({ min: 1, max: 254 });
      }, r.prototype.ipv6 = function() {
        var e = this.n(this.hash, 8, { length: 4 });
        return e.join(":");
      }, r.prototype.klout = function() {
        return this.natural({ min: 1, max: 99 });
      }, r.prototype.mac = function(e) {
        return e = s(e, { delimiter: ":" }), this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2);
      }, r.prototype.semver = function(e) {
        e = s(e, { include_prerelease: !0 });
        var a = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
        e.range && (a = e.range);
        var n = "";
        return e.include_prerelease && (n = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1])), a + this.rpg("3d10").join(".") + n;
      }, r.prototype.tlds = function() {
        return ["com", "org", "edu", "gov", "co.uk", "net", "io", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"];
      }, r.prototype.tld = function() {
        return this.pick(this.tlds());
      }, r.prototype.twitter = function() {
        return "@" + this.word();
      }, r.prototype.url = function(e) {
        e = s(e, { protocol: "http", domain: this.domain(e), domain_prefix: "", path: this.word(), extensions: [] });
        var a = e.extensions.length > 0 ? "." + this.pick(e.extensions) : "", n = e.domain_prefix ? e.domain_prefix + "." + e.domain : e.domain;
        return e.protocol + "://" + n + "/" + e.path + a;
      }, r.prototype.port = function() {
        return this.integer({ min: 0, max: 65535 });
      }, r.prototype.locale = function(e) {
        return e = s(e), e.region ? this.pick(this.get("locale_regions")) : this.pick(this.get("locale_languages"));
      }, r.prototype.locales = function(e) {
        return e = s(e), e.region ? this.get("locale_regions") : this.get("locale_languages");
      }, r.prototype.loremPicsum = function(e) {
        e = s(e, { width: 500, height: 500, greyscale: !1, blurred: !1 });
        var a = e.greyscale ? "g/" : "", n = e.blurred ? "/?blur" : "/?random";
        return "https://picsum.photos/" + a + e.width + "/" + e.height + n;
      }, r.prototype.address = function(e) {
        return e = s(e), this.natural({ min: 5, max: 2e3 }) + " " + this.street(e);
      }, r.prototype.altitude = function(e) {
        return e = s(e, { fixed: 5, min: 0, max: 8848 }), this.floating({
          min: e.min,
          max: e.max,
          fixed: e.fixed
        });
      }, r.prototype.areacode = function(e) {
        e = s(e, { parens: !0 });
        var a = e.exampleNumber ? "555" : this.natural({ min: 2, max: 9 }).toString() + this.natural({ min: 0, max: 8 }).toString() + this.natural({ min: 0, max: 9 }).toString();
        return e.parens ? "(" + a + ")" : a;
      }, r.prototype.city = function() {
        return this.capitalize(this.word({ syllables: 3 }));
      }, r.prototype.coordinates = function(e) {
        return this.latitude(e) + ", " + this.longitude(e);
      }, r.prototype.countries = function() {
        return this.get("countries");
      }, r.prototype.country = function(e) {
        e = s(e);
        var a = this.pick(this.countries());
        return e.raw ? a : e.full ? a.name : a.abbreviation;
      }, r.prototype.depth = function(e) {
        return e = s(e, { fixed: 5, min: -10994, max: 0 }), this.floating({
          min: e.min,
          max: e.max,
          fixed: e.fixed
        });
      }, r.prototype.geohash = function(e) {
        return e = s(e, { length: 7 }), this.string({ length: e.length, pool: "0123456789bcdefghjkmnpqrstuvwxyz" });
      }, r.prototype.geojson = function(e) {
        return this.latitude(e) + ", " + this.longitude(e) + ", " + this.altitude(e);
      }, r.prototype.latitude = function(e) {
        var [a, n, f] = ["ddm", "dms", "dd"];
        e = s(
          e,
          e && e.format && [a, n].includes(e.format.toLowerCase()) ? { min: 0, max: 89, fixed: 4 } : { fixed: 5, min: -90, max: 90, format: f }
        );
        var m = e.format.toLowerCase();
        switch ((m === a || m === n) && (C(e.min < 0 || e.min > 89, "Chance: Min specified is out of range. Should be between 0 - 89"), C(e.max < 0 || e.max > 89, "Chance: Max specified is out of range. Should be between 0 - 89"), C(e.fixed > 4, "Chance: Fixed specified should be below or equal to 4")), m) {
          case a:
            return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.floating({ min: 0, max: 59, fixed: e.fixed });
          case n:
            return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.integer({ min: 0, max: 59 }) + "\u2019" + this.floating({ min: 0, max: 59, fixed: e.fixed }) + "\u201D";
          case f:
          default:
            return this.floating({ min: e.min, max: e.max, fixed: e.fixed });
        }
      }, r.prototype.longitude = function(e) {
        var [a, n, f] = ["ddm", "dms", "dd"];
        e = s(
          e,
          e && e.format && [a, n].includes(e.format.toLowerCase()) ? { min: 0, max: 179, fixed: 4 } : { fixed: 5, min: -180, max: 180, format: f }
        );
        var m = e.format.toLowerCase();
        switch ((m === a || m === n) && (C(e.min < 0 || e.min > 179, "Chance: Min specified is out of range. Should be between 0 - 179"), C(e.max < 0 || e.max > 179, "Chance: Max specified is out of range. Should be between 0 - 179"), C(e.fixed > 4, "Chance: Fixed specified should be below or equal to 4")), m) {
          case a:
            return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.floating({ min: 0, max: 59.9999, fixed: e.fixed });
          case n:
            return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.integer({ min: 0, max: 59 }) + "\u2019" + this.floating({ min: 0, max: 59.9999, fixed: e.fixed }) + "\u201D";
          case f:
          default:
            return this.floating({ min: e.min, max: e.max, fixed: e.fixed });
        }
      }, r.prototype.phone = function(e) {
        var a = this, n, f = function(z) {
          var O = [];
          return z.sections.forEach(function(W) {
            O.push(a.string({ pool: "0123456789", length: W }));
          }), z.area + O.join(" ");
        };
        e = s(e, {
          formatted: !0,
          country: "us",
          mobile: !1,
          exampleNumber: !1
        }), e.formatted || (e.parens = !1);
        var m;
        switch (e.country) {
          case "fr":
            e.mobile ? (n = this.pick(["06", "07"]) + a.string({ pool: "0123456789", length: 8 }), m = e.formatted ? n.match(/../g).join(" ") : n) : (n = this.pick([
              // Valid zone and département codes.
              "01" + this.pick(["30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"]) + a.string({ pool: "0123456789", length: 6 }),
              "02" + this.pick(["14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99"]) + a.string({ pool: "0123456789", length: 6 }),
              "03" + this.pick(["10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"]) + a.string({ pool: "0123456789", length: 6 }),
              "04" + this.pick(["11", "13", "15", "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98"]) + a.string({ pool: "0123456789", length: 6 }),
              "05" + this.pick(["08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "79", "81", "82", "86", "87", "90", "94"]) + a.string({ pool: "0123456789", length: 6 }),
              "09" + a.string({ pool: "0123456789", length: 8 })
            ]), m = e.formatted ? n.match(/../g).join(" ") : n);
            break;
          case "uk":
            e.mobile ? (n = this.pick([
              { area: "07" + this.pick(["4", "5", "7", "8", "9"]), sections: [2, 6] },
              { area: "07624 ", sections: [6] }
            ]), m = e.formatted ? f(n) : f(n).replace(" ", "")) : (n = this.pick([
              //valid area codes of major cities/counties followed by random numbers in required format.
              { area: "01" + this.character({ pool: "234569" }) + "1 ", sections: [3, 4] },
              { area: "020 " + this.character({ pool: "378" }), sections: [3, 4] },
              { area: "023 " + this.character({ pool: "89" }), sections: [3, 4] },
              { area: "024 7", sections: [3, 4] },
              { area: "028 " + this.pick(["25", "28", "37", "71", "82", "90", "92", "95"]), sections: [2, 4] },
              { area: "012" + this.pick(["04", "08", "54", "76", "97", "98"]) + " ", sections: [6] },
              { area: "013" + this.pick(["63", "64", "84", "86"]) + " ", sections: [6] },
              { area: "014" + this.pick(["04", "20", "60", "61", "80", "88"]) + " ", sections: [6] },
              { area: "015" + this.pick(["24", "27", "62", "66"]) + " ", sections: [6] },
              { area: "016" + this.pick(["06", "29", "35", "47", "59", "95"]) + " ", sections: [6] },
              { area: "017" + this.pick(["26", "44", "50", "68"]) + " ", sections: [6] },
              { area: "018" + this.pick(["27", "37", "84", "97"]) + " ", sections: [6] },
              { area: "019" + this.pick(["00", "05", "35", "46", "49", "63", "95"]) + " ", sections: [6] }
            ]), m = e.formatted ? f(n) : f(n).replace(" ", "", "g"));
            break;
          case "za":
            e.mobile ? (n = this.pick([
              "060" + this.pick(["3", "4", "5", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 6 }),
              "061" + this.pick(["0", "1", "2", "3", "4", "5", "8"]) + a.string({ pool: "0123456789", length: 6 }),
              "06" + a.string({ pool: "0123456789", length: 7 }),
              "071" + this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 6 }),
              "07" + this.pick(["2", "3", "4", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 7 }),
              "08" + this.pick(["0", "1", "2", "3", "4", "5"]) + a.string({ pool: "0123456789", length: 7 })
            ]), m = e.formatted || n) : (n = this.pick([
              "01" + this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8"]) + a.string({ pool: "0123456789", length: 7 }),
              "02" + this.pick(["1", "2", "3", "4", "7", "8"]) + a.string({ pool: "0123456789", length: 7 }),
              "03" + this.pick(["1", "2", "3", "5", "6", "9"]) + a.string({ pool: "0123456789", length: 7 }),
              "04" + this.pick(["1", "2", "3", "4", "5", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 7 }),
              "05" + this.pick(["1", "3", "4", "6", "7", "8"]) + a.string({ pool: "0123456789", length: 7 })
            ]), m = e.formatted || n);
            break;
          case "us":
            var S = this.areacode(e).toString(), E = this.natural({ min: 2, max: 9 }).toString() + this.natural({ min: 0, max: 9 }).toString() + this.natural({ min: 0, max: 9 }).toString(), v = this.natural({ min: 1e3, max: 9999 }).toString();
            m = e.formatted ? S + " " + E + "-" + v : S + E + v;
            break;
          case "br":
            var M = this.pick(["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"]), I;
            e.mobile ? I = "9" + a.string({ pool: "0123456789", length: 4 }) : I = this.natural({ min: 2e3, max: 5999 }).toString();
            var k = a.string({ pool: "0123456789", length: 4 });
            m = e.formatted ? "(" + M + ") " + I + "-" + k : M + I + k;
            break;
        }
        return m;
      }, r.prototype.postal = function() {
        var e = this.character({ pool: "XVTSRPNKLMHJGECBA" }), a = e + this.natural({ max: 9 }) + this.character({ alpha: !0, casing: "upper" }), n = this.natural({ max: 9 }) + this.character({ alpha: !0, casing: "upper" }) + this.natural({ max: 9 });
        return a + " " + n;
      }, r.prototype.postcode = function() {
        var e = this.pick(this.get("postcodeAreas")).code, a = this.natural({ max: 9 }), n = this.bool() ? this.character({ alpha: !0, casing: "upper" }) : "", f = e + a + n, m = this.natural({ max: 9 }), S = this.character({ alpha: !0, casing: "upper" }) + this.character({ alpha: !0, casing: "upper" }), E = m + S;
        return f + " " + E;
      }, r.prototype.counties = function(e) {
        return e = s(e, { country: "uk" }), this.get("counties")[e.country.toLowerCase()];
      }, r.prototype.county = function(e) {
        return this.pick(this.counties(e)).name;
      }, r.prototype.provinces = function(e) {
        return e = s(e, { country: "ca" }), this.get("provinces")[e.country.toLowerCase()];
      }, r.prototype.province = function(e) {
        return e && e.full ? this.pick(this.provinces(e)).name : this.pick(this.provinces(e)).abbreviation;
      }, r.prototype.state = function(e) {
        return e && e.full ? this.pick(this.states(e)).name : this.pick(this.states(e)).abbreviation;
      }, r.prototype.states = function(e) {
        e = s(e, { country: "us", us_states_and_dc: !0 });
        var a;
        switch (e.country.toLowerCase()) {
          case "us":
            var n = this.get("us_states_and_dc"), f = this.get("territories"), m = this.get("armed_forces");
            a = [], e.us_states_and_dc && (a = a.concat(n)), e.territories && (a = a.concat(f)), e.armed_forces && (a = a.concat(m));
            break;
          case "it":
          case "mx":
            a = this.get("country_regions")[e.country.toLowerCase()];
            break;
          case "uk":
            a = this.get("counties")[e.country.toLowerCase()];
            break;
        }
        return a;
      }, r.prototype.street = function(e) {
        e = s(e, { country: "us", syllables: 2 });
        var a;
        switch (e.country.toLowerCase()) {
          case "us":
            a = this.word({ syllables: e.syllables }), a = this.capitalize(a), a += " ", a += e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name;
            break;
          case "it":
            a = this.word({ syllables: e.syllables }), a = this.capitalize(a), a = (e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name) + " " + a;
            break;
        }
        return a;
      }, r.prototype.street_suffix = function(e) {
        return e = s(e, { country: "us" }), this.pick(this.street_suffixes(e));
      }, r.prototype.street_suffixes = function(e) {
        return e = s(e, { country: "us" }), this.get("street_suffixes")[e.country.toLowerCase()];
      }, r.prototype.zip = function(e) {
        var a = this.n(this.natural, 5, { max: 9 });
        return e && e.plusfour === !0 && (a.push("-"), a = a.concat(this.n(this.natural, 4, { max: 9 }))), a.join("");
      }, r.prototype.ampm = function() {
        return this.bool() ? "am" : "pm";
      }, r.prototype.date = function(e) {
        var a, n;
        if (e && (e.min || e.max)) {
          e = s(e, {
            american: !0,
            string: !1
          });
          var f = typeof e.min < "u" ? e.min.getTime() : 1, m = typeof e.max < "u" ? e.max.getTime() : 864e13;
          n = new Date(this.integer({ min: f, max: m }));
        } else {
          var S = this.month({ raw: !0 }), E = S.days;
          e && e.month && (E = this.get("months")[(e.month % 12 + 12) % 12].days), e = s(e, {
            year: parseInt(this.year(), 10),
            // Necessary to subtract 1 because Date() 0-indexes month but not day or year
            // for some reason.
            month: S.numeric - 1,
            day: this.natural({ min: 1, max: E }),
            hour: this.hour({ twentyfour: !0 }),
            minute: this.minute(),
            second: this.second(),
            millisecond: this.millisecond(),
            american: !0,
            string: !1
          }), n = new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
        }
        return e.american ? a = n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear() : a = n.getDate() + "/" + (n.getMonth() + 1) + "/" + n.getFullYear(), e.string ? a : n;
      }, r.prototype.hammertime = function(e) {
        return this.date(e).getTime();
      }, r.prototype.hour = function(e) {
        return e = s(e, {
          min: e && e.twentyfour ? 0 : 1,
          max: e && e.twentyfour ? 23 : 12
        }), C(e.min < 0, "Chance: Min cannot be less than 0."), C(e.twentyfour && e.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option."), C(!e.twentyfour && e.max > 12, "Chance: Max cannot be greater than 12."), C(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({ min: e.min, max: e.max });
      }, r.prototype.millisecond = function() {
        return this.natural({ max: 999 });
      }, r.prototype.minute = r.prototype.second = function(e) {
        return e = s(e, { min: 0, max: 59 }), C(e.min < 0, "Chance: Min cannot be less than 0."), C(e.max > 59, "Chance: Max cannot be greater than 59."), C(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({ min: e.min, max: e.max });
      }, r.prototype.month = function(e) {
        e = s(e, { min: 1, max: 12 }), C(e.min < 1, "Chance: Min cannot be less than 1."), C(e.max > 12, "Chance: Max cannot be greater than 12."), C(e.min > e.max, "Chance: Min cannot be greater than Max.");
        var a = this.pick(this.months().slice(e.min - 1, e.max));
        return e.raw ? a : a.name;
      }, r.prototype.months = function() {
        return this.get("months");
      }, r.prototype.second = function() {
        return this.natural({ max: 59 });
      }, r.prototype.timestamp = function() {
        return this.natural({ min: 1, max: parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10) });
      }, r.prototype.weekday = function(e) {
        e = s(e, { weekday_only: !1 });
        var a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return e.weekday_only || (a.push("Saturday"), a.push("Sunday")), this.pickone(a);
      }, r.prototype.year = function(e) {
        return e = s(e, { min: (/* @__PURE__ */ new Date()).getFullYear() }), e.max = typeof e.max < "u" ? e.max : e.min + 100, this.natural(e).toString();
      }, r.prototype.cc = function(e) {
        e = s(e);
        var a, n, f;
        return a = e.type ? this.cc_type({ name: e.type, raw: !0 }) : this.cc_type({ raw: !0 }), n = a.prefix.split(""), f = a.length - a.prefix.length - 1, n = n.concat(this.n(this.integer, f, { min: 0, max: 9 })), n.push(this.luhn_calculate(n.join(""))), n.join("");
      }, r.prototype.cc_types = function() {
        return this.get("cc_types");
      }, r.prototype.cc_type = function(e) {
        e = s(e);
        var a = this.cc_types(), n = null;
        if (e.name) {
          for (var f = 0; f < a.length; f++)
            if (a[f].name === e.name || a[f].short_name === e.name) {
              n = a[f];
              break;
            }
          if (n === null)
            throw new RangeError("Chance: Credit card type '" + e.name + "' is not supported");
        } else
          n = this.pick(a);
        return e.raw ? n : n.name;
      }, r.prototype.currency_types = function() {
        return this.get("currency_types");
      }, r.prototype.currency = function() {
        return this.pick(this.currency_types());
      }, r.prototype.timezones = function() {
        return this.get("timezones");
      }, r.prototype.timezone = function() {
        return this.pick(this.timezones());
      }, r.prototype.currency_pair = function(e) {
        var a = this.unique(this.currency, 2, {
          comparator: function(n, f) {
            return n.reduce(function(m, S) {
              return m || S.code === f.code;
            }, !1);
          }
        });
        return e ? a[0].code + "/" + a[1].code : a;
      }, r.prototype.dollar = function(e) {
        e = s(e, { max: 1e4, min: 0 });
        var a = this.floating({ min: e.min, max: e.max, fixed: 2 }).toString(), n = a.split(".")[1];
        return n === void 0 ? a += ".00" : n.length < 2 && (a = a + "0"), a < 0 ? "-$" + a.replace("-", "") : "$" + a;
      }, r.prototype.euro = function(e) {
        return Number(this.dollar(e).replace("$", "")).toLocaleString() + "\u20AC";
      }, r.prototype.exp = function(e) {
        e = s(e);
        var a = {};
        return a.year = this.exp_year(), a.year === (/* @__PURE__ */ new Date()).getFullYear().toString() ? a.month = this.exp_month({ future: !0 }) : a.month = this.exp_month(), e.raw ? a : a.month + "/" + a.year;
      }, r.prototype.exp_month = function(e) {
        e = s(e);
        var a, n, f = (/* @__PURE__ */ new Date()).getMonth() + 1;
        if (e.future && f !== 12)
          do
            a = this.month({ raw: !0 }).numeric, n = parseInt(a, 10);
          while (n <= f);
        else
          a = this.month({ raw: !0 }).numeric;
        return a;
      }, r.prototype.exp_year = function() {
        var e = (/* @__PURE__ */ new Date()).getMonth() + 1, a = (/* @__PURE__ */ new Date()).getFullYear();
        return this.year({ min: e === 12 ? a + 1 : a, max: a + 10 });
      }, r.prototype.vat = function(e) {
        switch (e = s(e, { country: "it" }), e.country.toLowerCase()) {
          case "it":
            return this.it_vat();
        }
      }, r.prototype.iban = function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", a = e + "0123456789", n = this.string({ length: 2, pool: e }) + this.pad(this.integer({ min: 0, max: 99 }), 2) + this.string({ length: 4, pool: a }) + this.pad(this.natural(), this.natural({ min: 6, max: 26 }));
        return n;
      }, r.prototype.it_vat = function() {
        var e = this.natural({ min: 1, max: 18e5 });
        return e = this.pad(e, 7) + this.pad(this.pick(this.provinces({ country: "it" })).code, 3), e + this.luhn_calculate(e);
      }, r.prototype.cf = function(e) {
        e = e || {};
        var a = e.gender ? e.gender : this.gender(), n = e.first ? e.first : this.first({ gender: a, nationality: "it" }), f = e.last ? e.last : this.last({ nationality: "it" }), m = e.birthday ? e.birthday : this.birthday(), S = e.city ? e.city : this.pickone(["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "Z"]) + this.pad(this.natural({ max: 999 }), 3), E = [], v = function(k, z) {
          var O, W = [];
          return k.length < 3 ? W = k.split("").concat("XXX".split("")).splice(0, 3) : (O = k.toUpperCase().split("").map(function(J) {
            return "BCDFGHJKLMNPRSTVWZ".indexOf(J) !== -1 ? J : void 0;
          }).join(""), O.length > 3 && (z ? O = O.substr(0, 3) : O = O[0] + O.substr(2, 2)), O.length < 3 && (W = O, O = k.toUpperCase().split("").map(function(J) {
            return "AEIOU".indexOf(J) !== -1 ? J : void 0;
          }).join("").substr(0, 3 - W.length)), W = W + O), W;
        }, M = function(k, z, O) {
          var W = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
          return k.getFullYear().toString().substr(2) + W[k.getMonth()] + O.pad(k.getDate() + (z.toLowerCase() === "female" ? 40 : 0), 2);
        }, I = function(k) {
          for (var z = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", O = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ", W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", J = "BAKPLCQDREVOSFTGUHMINJWZYX", U = 0, V = 0; V < 15; V++)
            V % 2 !== 0 ? U += W.indexOf(O[z.indexOf(k[V])]) : U += J.indexOf(O[z.indexOf(k[V])]);
          return W[U % 26];
        };
        return E = E.concat(v(f, !0), v(n), M(m, a, this), S.toUpperCase().split("")).join(""), E += I(E.toUpperCase()), E.toUpperCase();
      }, r.prototype.pl_pesel = function() {
        for (var e = this.natural({ min: 1, max: 9999999999 }), a = this.pad(e, 10).split(""), n = 0; n < a.length; n++)
          a[n] = parseInt(a[n]);
        var f = (1 * a[0] + 3 * a[1] + 7 * a[2] + 9 * a[3] + 1 * a[4] + 3 * a[5] + 7 * a[6] + 9 * a[7] + 1 * a[8] + 3 * a[9]) % 10;
        return f !== 0 && (f = 10 - f), a.join("") + f;
      }, r.prototype.pl_nip = function() {
        for (var e = this.natural({ min: 1, max: 999999999 }), a = this.pad(e, 9).split(""), n = 0; n < a.length; n++)
          a[n] = parseInt(a[n]);
        var f = (6 * a[0] + 5 * a[1] + 7 * a[2] + 2 * a[3] + 3 * a[4] + 4 * a[5] + 5 * a[6] + 6 * a[7] + 7 * a[8]) % 11;
        return f === 10 ? this.pl_nip() : a.join("") + f;
      }, r.prototype.pl_regon = function() {
        for (var e = this.natural({ min: 1, max: 99999999 }), a = this.pad(e, 8).split(""), n = 0; n < a.length; n++)
          a[n] = parseInt(a[n]);
        var f = (8 * a[0] + 9 * a[1] + 2 * a[2] + 3 * a[3] + 4 * a[4] + 5 * a[5] + 6 * a[6] + 7 * a[7]) % 11;
        return f === 10 && (f = 0), a.join("") + f;
      }, r.prototype.music_genre = function(e = "general") {
        if (!(e.toLowerCase() in u.music_genres))
          throw new Error(`Unsupported genre: ${e}`);
        const a = u.music_genres[e.toLowerCase()], n = this.integer({ min: 0, max: a.length - 1 });
        return a[n];
      }, r.prototype.note = function(e) {
        e = s(e, { notes: "flatKey" });
        var a = {
          naturals: ["C", "D", "E", "F", "G", "A", "B"],
          flats: ["D\u266D", "E\u266D", "G\u266D", "A\u266D", "B\u266D"],
          sharps: ["C\u266F", "D\u266F", "F\u266F", "G\u266F", "A\u266F"]
        };
        return a.all = a.naturals.concat(a.flats.concat(a.sharps)), a.flatKey = a.naturals.concat(a.flats), a.sharpKey = a.naturals.concat(a.sharps), this.pickone(a[e.notes]);
      }, r.prototype.midi_note = function(e) {
        var a = 0, n = 127;
        return e = s(e, { min: a, max: n }), this.integer({ min: e.min, max: e.max });
      }, r.prototype.chord_quality = function(e) {
        e = s(e, { jazz: !0 });
        var a = ["maj", "min", "aug", "dim"];
        return e.jazz && (a = [
          "maj7",
          "min7",
          "7",
          "sus",
          "dim",
          "\xF8"
        ]), this.pickone(a);
      }, r.prototype.chord = function(e) {
        return e = s(e), this.note(e) + this.chord_quality(e);
      }, r.prototype.tempo = function(e) {
        var a = 40, n = 320;
        return e = s(e, { min: a, max: n }), this.integer({ min: e.min, max: e.max });
      }, r.prototype.coin = function() {
        return this.bool() ? "heads" : "tails";
      };
      function p(e) {
        return function() {
          return this.natural(e);
        };
      }
      r.prototype.d4 = p({ min: 1, max: 4 }), r.prototype.d6 = p({ min: 1, max: 6 }), r.prototype.d8 = p({ min: 1, max: 8 }), r.prototype.d10 = p({ min: 1, max: 10 }), r.prototype.d12 = p({ min: 1, max: 12 }), r.prototype.d20 = p({ min: 1, max: 20 }), r.prototype.d30 = p({ min: 1, max: 30 }), r.prototype.d100 = p({ min: 1, max: 100 }), r.prototype.rpg = function(e, a) {
        if (a = s(a), e) {
          var n = e.toLowerCase().split("d"), f = [];
          if (n.length !== 2 || !parseInt(n[0], 10) || !parseInt(n[1], 10))
            throw new Error("Chance: Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
          for (var m = n[0]; m > 0; m--)
            f[m - 1] = this.natural({ min: 1, max: n[1] });
          return typeof a.sum < "u" && a.sum ? f.reduce(function(S, E) {
            return S + E;
          }) : f;
        } else
          throw new RangeError("Chance: A type of die roll must be included");
      }, r.prototype.guid = function(e) {
        e = s(e, { version: 5 });
        var a = "abcdef1234567890", n = "ab89", f = this.string({ pool: a, length: 8 }) + "-" + this.string({ pool: a, length: 4 }) + "-" + // The Version
        e.version + this.string({ pool: a, length: 3 }) + "-" + // The Variant
        this.string({ pool: n, length: 1 }) + this.string({ pool: a, length: 3 }) + "-" + this.string({ pool: a, length: 12 });
        return f;
      }, r.prototype.hash = function(e) {
        e = s(e, { length: 40, casing: "lower" });
        var a = e.casing === "upper" ? L.toUpperCase() : L;
        return this.string({ pool: a, length: e.length });
      }, r.prototype.luhn_check = function(e) {
        var a = e.toString(), n = +a.substring(a.length - 1);
        return n === this.luhn_calculate(+a.substring(0, a.length - 1));
      }, r.prototype.luhn_calculate = function(e) {
        for (var a = e.toString().split("").reverse(), n = 0, f, m = 0, S = a.length; S > m; ++m)
          f = +a[m], m % 2 === 0 && (f *= 2, f > 9 && (f -= 9)), n += f;
        return n * 9 % 10;
      }, r.prototype.md5 = function(e) {
        var a = { str: "", key: null, raw: !1 };
        if (!e)
          a.str = this.string(), e = {};
        else if (typeof e == "string")
          a.str = e, e = {};
        else {
          if (typeof e != "object")
            return null;
          if (e.constructor === "Array")
            return null;
        }
        if (a = s(e, a), !a.str)
          throw new Error("A parameter is required to return an md5 hash.");
        return this.bimd5.md5(a.str, a.key, a.raw);
      }, r.prototype.file = function(e) {
        var a = e || {}, n = "fileExtension", f = Object.keys(this.get("fileExtension")), m, S;
        if (m = this.word({ length: a.length }), a.extension)
          return S = a.extension, m + "." + S;
        if (a.extensions) {
          if (Array.isArray(a.extensions))
            return S = this.pickone(a.extensions), m + "." + S;
          if (a.extensions.constructor === Object) {
            var E = a.extensions, v = Object.keys(E);
            return S = this.pickone(E[this.pickone(v)]), m + "." + S;
          }
          throw new Error("Chance: Extensions must be an Array or Object");
        }
        if (a.fileType) {
          var M = a.fileType;
          if (f.indexOf(M) !== -1)
            return S = this.pickone(this.get(n)[M]), m + "." + S;
          throw new RangeError("Chance: Expect file type value to be 'raster', 'vector', '3d' or 'document'");
        }
        return S = this.pickone(this.get(n)[this.pickone(f)]), m + "." + S;
      }, r.prototype.fileWithContent = function(e) {
        var a = e || {}, n = "fileName" in a ? a.fileName : this.file().split(".")[0];
        if (n += "." + ("fileExtension" in a ? a.fileExtension : this.file().split(".")[1]), typeof a.fileSize != "number")
          throw new Error("File size must be an integer");
        var f = {
          fileData: this.buffer({ length: a.fileSize }),
          fileName: n
        };
        return f;
      };
      var u = {
        firstNames: {
          male: {
            en: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
            // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0163
            it: ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccol\xF2", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"],
            // Data taken from http://www.svbkindernamen.nl/int/nl/kindernamen/index.html
            nl: ["Aaron", "Abel", "Adam", "Adriaan", "Albert", "Alexander", "Ali", "Arjen", "Arno", "Bart", "Bas", "Bastiaan", "Benjamin", "Bob", "Boris", "Bram", "Brent", "Cas", "Casper", "Chris", "Christiaan", "Cornelis", "Daan", "Daley", "Damian", "Dani", "Daniel", "Dani\xEBl", "David", "Dean", "Dirk", "Dylan", "Egbert", "Elijah", "Erik", "Erwin", "Evert", "Ezra", "Fabian", "Fedde", "Finn", "Florian", "Floris", "Frank", "Frans", "Frederik", "Freek", "Geert", "Gerard", "Gerben", "Gerrit", "Gijs", "Guus", "Hans", "Hendrik", "Henk", "Herman", "Hidde", "Hugo", "Jaap", "Jan Jaap", "Jan-Willem", "Jack", "Jacob", "Jan", "Jason", "Jasper", "Jayden", "Jelle", "Jelte", "Jens", "Jeroen", "Jesse", "Jim", "Job", "Joep", "Johannes", "John", "Jonathan", "Joris", "Joshua", "Jo\xEBl", "Julian", "Kees", "Kevin", "Koen", "Lars", "Laurens", "Leendert", "Lennard", "Lodewijk", "Luc", "Luca", "Lucas", "Lukas", "Luuk", "Maarten", "Marcus", "Martijn", "Martin", "Matthijs", "Maurits", "Max", "Mees", "Melle", "Mick", "Mika", "Milan", "Mohamed", "Mohammed", "Morris", "Muhammed", "Nathan", "Nick", "Nico", "Niek", "Niels", "Noah", "Noud", "Olivier", "Oscar", "Owen", "Paul", "Pepijn", "Peter", "Pieter", "Pim", "Quinten", "Reinier", "Rens", "Robin", "Ruben", "Sam", "Samuel", "Sander", "Sebastiaan", "Sem", "Sep", "Sepp", "Siem", "Simon", "Stan", "Stef", "Steven", "Stijn", "Sven", "Teun", "Thijmen", "Thijs", "Thomas", "Tijn", "Tim", "Timo", "Tobias", "Tom", "Victor", "Vince", "Willem", "Wim", "Wouter", "Yusuf"],
            // Data taken from https://fr.wikipedia.org/wiki/Liste_de_pr%C3%A9noms_fran%C3%A7ais_et_de_la_francophonie
            fr: ["Aaron", "Abdon", "Abel", "Ab\xE9lard", "Abelin", "Abondance", "Abraham", "Absalon", "Acace", "Achaire", "Achille", "Adalard", "Adalbald", "Adalb\xE9ron", "Adalbert", "Adalric", "Adam", "Adegrin", "Adel", "Adelin", "Andelin", "Adelphe", "Adam", "Ad\xE9odat", "Adh\xE9mar", "Adjutor", "Adolphe", "Adonis", "Adon", "Adrien", "Agapet", "Agathange", "Agathon", "Agilbert", "Ag\xE9nor", "Agnan", "Aignan", "Agrippin", "Aimable", "Aim\xE9", "Alain", "Alban", "Albin", "Aubin", "Alb\xE9ric", "Albert", "Albertet", "Alcibiade", "Alcide", "Alc\xE9e", "Alcime", "Aldonce", "Aldric", "Ald\xE9ric", "Aleaume", "Alexandre", "Alexis", "Alix", "Alliaume", "Aleaume", "Almine", "Almire", "Alo\xEFs", "Alph\xE9e", "Alphonse", "Alpinien", "Alver\xE8de", "Amalric", "Amaury", "Amandin", "Amant", "Ambroise", "Am\xE9d\xE9e", "Am\xE9lien", "Amiel", "Amour", "Ana\xEBl", "Anastase", "Anatole", "Ancelin", "And\xE9ol", "Andoche", "Andr\xE9", "Andoche", "Ange", "Angelin", "Angilbe", "Anglebert", "Angoustan", "Anicet", "Anne", "Annibal", "Ansbert", "Anselme", "Anthelme", "Antheaume", "Anthime", "Antide", "Antoine", "Antonius", "Antonin", "Apollinaire", "Apollon", "Aquilin", "Arcade", "Archambaud", "Archambeau", "Archange", "Archibald", "Arian", "Ariel", "Ariste", "Aristide", "Armand", "Armel", "Armin", "Arnould", "Arnaud", "Arolde", "Ars\xE8ne", "Arsino\xE9", "Arthaud", "Arth\xE8me", "Arthur", "Ascelin", "Athanase", "Aubry", "Audebert", "Audouin", "Audran", "Audric", "Auguste", "Augustin", "Aur\xE8le", "Aur\xE9lien", "Aurian", "Auxence", "Axel", "Aymard", "Aymeric", "Aymon", "Aymond", "Balthazar", "Baptiste", "Barnab\xE9", "Barth\xE9lemy", "Bartim\xE9e", "Basile", "Bastien", "Baudouin", "B\xE9nigne", "Benjamin", "Beno\xEEt", "B\xE9renger", "B\xE9rard", "Bernard", "Bertrand", "Blaise", "Bon", "Boniface", "Bouchard", "Brice", "Brieuc", "Bruno", "Brunon", "Calixte", "Calliste", "Cam\xE9lien", "Camille", "Camillien", "Candide", "Caribert", "Carloman", "Cassandre", "Cassien", "C\xE9dric", "C\xE9leste", "C\xE9lestin", "C\xE9lien", "C\xE9saire", "C\xE9sar", "Charles", "Charlemagne", "Childebert", "Chilp\xE9ric", "Chr\xE9tien", "Christian", "Christodule", "Christophe", "Chrysostome", "Clarence", "Claude", "Claudien", "Cl\xE9andre", "Cl\xE9ment", "Clotaire", "C\xF4me", "Constance", "Constant", "Constantin", "Corentin", "Cyprien", "Cyriaque", "Cyrille", "Cyril", "Damien", "Daniel", "David", "Delphin", "Denis", "D\xE9sir\xE9", "Didier", "Dieudonn\xE9", "Dimitri", "Dominique", "Dorian", "Doroth\xE9e", "Edgard", "Edmond", "\xC9douard", "\xC9leuth\xE8re", "\xC9lie", "\xC9lis\xE9e", "\xC9meric", "\xC9mile", "\xC9milien", "Emmanuel", "Enguerrand", "\xC9piphane", "\xC9ric", "Esprit", "Ernest", "\xC9tienne", "Eubert", "Eudes", "Eudoxe", "Eug\xE8ne", "Eus\xE8be", "Eustache", "\xC9variste", "\xC9vrard", "Fabien", "Fabrice", "Falba", "F\xE9licit\xE9", "F\xE9lix", "Ferdinand", "Fiacre", "Fid\xE8le", "Firmin", "Flavien", "Flodoard", "Florent", "Florentin", "Florestan", "Florian", "Fortun\xE9", "Foulques", "Francisque", "Fran\xE7ois", "Fran\xE7ais", "Franciscus", "Francs", "Fr\xE9d\xE9ric", "Fulbert", "Fulcran", "Fulgence", "Gabin", "Gabriel", "Ga\xEBl", "Garnier", "Gaston", "Gaspard", "Gatien", "Gaud", "Gautier", "G\xE9d\xE9on", "Geoffroy", "Georges", "G\xE9raud", "G\xE9rard", "Gerbert", "Germain", "Gervais", "Ghislain", "Gilbert", "Gilles", "Girart", "Gislebert", "Gondebaud", "Gonthier", "Gontran", "Gonzague", "Gr\xE9goire", "Gu\xE9rin", "Gui", "Guillaume", "Gustave", "Guy", "Guyot", "Hardouin", "Hector", "H\xE9delin", "H\xE9lier", "Henri", "Herbert", "Herluin", "Herv\xE9", "Hilaire", "Hildebert", "Hincmar", "Hippolyte", "Honor\xE9", "Hubert", "Hugues", "Innocent", "Isabeau", "Isidore", "Jacques", "Japhet", "Jason", "Jean", "Jeannel", "Jeannot", "J\xE9r\xE9mie", "J\xE9r\xF4me", "Joachim", "Joanny", "Job", "Jocelyn", "Jo\xEBl", "Johan", "Jonas", "Jonathan", "Joseph", "Josse", "Josselin", "Jourdain", "Jude", "Judica\xEBl", "Jules", "Julien", "Juste", "Justin", "Lambert", "Landry", "Laurent", "Lazare", "L\xE9andre", "L\xE9on", "L\xE9onard", "L\xE9opold", "Leu", "Loup", "Leufroy", "Lib\xE8re", "Li\xE9tald", "Lionel", "Lo\xEFc", "Longin", "Lorrain", "Lorraine", "Lothaire", "Louis", "Loup", "Luc", "Lucas", "Lucien", "Ludolphe", "Ludovic", "Macaire", "Malo", "Mamert", "Manass\xE9", "Marc", "Marceau", "Marcel", "Marcelin", "Marius", "Marseille", "Martial", "Martin", "Mathurin", "Matthias", "Mathias", "Matthieu", "Maugis", "Maurice", "Mauricet", "Maxence", "Maxime", "Maximilien", "Mayeul", "M\xE9d\xE9ric", "Melchior", "Mence", "Merlin", "M\xE9rov\xE9e", "Micha\xEBl", "Michel", "Mo\xEFse", "Morgan", "Nathan", "Nathana\xEBl", "Narcisse", "N\xE9h\xE9mie", "Nestor", "Nestor", "Nic\xE9phore", "Nicolas", "No\xE9", "No\xEBl", "Norbert", "Normand", "Normands", "Octave", "Odilon", "Odon", "Oger", "Olivier", "Oury", "Pac\xF4me", "Pal\xE9mon", "Parfait", "Pascal", "Paterne", "Patrice", "Paul", "P\xE9pin", "Perceval", "Phil\xE9mon", "Philibert", "Philippe", "Philoth\xE9e", "Pie", "Pierre", "Pierrick", "Prosper", "Quentin", "Raoul", "Rapha\xEBl", "Raymond", "R\xE9gis", "R\xE9jean", "R\xE9mi", "Renaud", "Ren\xE9", "Reybaud", "Richard", "Robert", "Roch", "Rodolphe", "Rodrigue", "Roger", "Roland", "Romain", "Romuald", "Rom\xE9o", "Rome", "Ronan", "Roselin", "Salomon", "Samuel", "Savin", "Savinien", "Scholastique", "S\xE9bastien", "S\xE9raphin", "Serge", "S\xE9verin", "Sidoine", "Sigebert", "Sigismond", "Silv\xE8re", "Simon", "Sim\xE9on", "Sixte", "Stanislas", "St\xE9phane", "Stephan", "Sylvain", "Sylvestre", "Tancr\xE8de", "Tanguy", "Taurin", "Th\xE9odore", "Th\xE9odose", "Th\xE9ophile", "Th\xE9ophraste", "Thibault", "Thibert", "Thierry", "Thomas", "Timol\xE9on", "Timoth\xE9e", "Titien", "Tonnin", "Toussaint", "Trajan", "Tristan", "Turold", "Tim", "Ulysse", "Urbain", "Valentin", "Val\xE8re", "Val\xE9ry", "Venance", "Venant", "Venceslas", "Vianney", "Victor", "Victorien", "Victorin", "Vigile", "Vincent", "Vital", "Vitalien", "Vivien", "Waleran", "Wandrille", "Xavier", "X\xE9nophon", "Yves", "Zacharie", "Zach\xE9", "Z\xE9phirin"]
          },
          female: {
            en: ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
            // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0162
            it: ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Lea", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"],
            // Data taken from http://www.svbkindernamen.nl/int/nl/kindernamen/index.html
            nl: ["Ada", "Arianne", "Afke", "Amanda", "Amber", "Amy", "Aniek", "Anita", "Anja", "Anna", "Anne", "Annelies", "Annemarie", "Annette", "Anouk", "Astrid", "Aukje", "Barbara", "Bianca", "Carla", "Carlijn", "Carolien", "Chantal", "Charlotte", "Claudia", "Dani\xEBlle", "Debora", "Diane", "Dora", "Eline", "Elise", "Ella", "Ellen", "Emma", "Esmee", "Evelien", "Esther", "Erica", "Eva", "Femke", "Fleur", "Floor", "Froukje", "Gea", "Gerda", "Hanna", "Hanneke", "Heleen", "Hilde", "Ilona", "Ina", "Inge", "Ingrid", "Iris", "Isabel", "Isabelle", "Janneke", "Jasmijn", "Jeanine", "Jennifer", "Jessica", "Johanna", "Joke", "Julia", "Julie", "Karen", "Karin", "Katja", "Kim", "Lara", "Laura", "Lena", "Lianne", "Lieke", "Lilian", "Linda", "Lisa", "Lisanne", "Lotte", "Louise", "Maaike", "Manon", "Marga", "Maria", "Marissa", "Marit", "Marjolein", "Martine", "Marleen", "Melissa", "Merel", "Miranda", "Michelle", "Mirjam", "Mirthe", "Naomi", "Natalie", "Nienke", "Nina", "Noortje", "Olivia", "Patricia", "Paula", "Paulien", "Ramona", "Ria", "Rianne", "Roos", "Rosanne", "Ruth", "Sabrina", "Sandra", "Sanne", "Sara", "Saskia", "Silvia", "Sofia", "Sophie", "Sonja", "Suzanne", "Tamara", "Tess", "Tessa", "Tineke", "Valerie", "Vanessa", "Veerle", "Vera", "Victoria", "Wendy", "Willeke", "Yvonne", "Zo\xEB"],
            // Data taken from https://fr.wikipedia.org/wiki/Liste_de_pr%C3%A9noms_fran%C3%A7ais_et_de_la_francophonie
            fr: ["Abdon", "Abel", "Abiga\xEBlle", "Abiga\xEFl", "Acacius", "Acanthe", "Adalbert", "Adalsinde", "Adegrine", "Ad\xE9la\xEFde", "Ad\xE8le", "Ad\xE9lie", "Adeline", "Adeltrude", "Adolphe", "Adonis", "Adrast\xE9e", "Adrehilde", "Adrienne", "Agathe", "Agilbert", "Agla\xE9", "Aignan", "Agnefl\xE8te", "Agn\xE8s", "Agrippine", "Aim\xE9", "Alaine", "Ala\xEFs", "Albane", "Alb\xE9rade", "Alberte", "Alcide", "Alcine", "Alcyone", "Aldegonde", "Aleth", "Alexandrine", "Alexine", "Alice", "Ali\xE9nor", "Aliette", "Aline", "Alix", "Aliz\xE9", "Alo\xEFse", "Aloyse", "Alphonsine", "Alth\xE9e", "Amaliane", "Amalth\xE9e", "Amande", "Amandine", "Amant", "Amarande", "Amaranthe", "Amaryllis", "Ambre", "Ambroisie", "Am\xE9lie", "Am\xE9thyste", "Aminte", "Ana\xEBl", "Ana\xEFs", "Anastasie", "Anatole", "Ancelin", "Andr\xE9e", "An\xE9mone", "Angadr\xEAme", "Ang\xE8le", "Angeline", "Ang\xE9lique", "Angilbert", "Anicet", "Annabelle", "Anne", "Annette", "Annick", "Annie", "Annonciade", "Ansbert", "Anstrudie", "Anthelme", "Antigone", "Antoinette", "Antonine", "Aph\xE9lie", "Apolline", "Apollonie", "Aquiline", "Arabelle", "Arcadie", "Archange", "Argine", "Ariane", "Aricie", "Ariel", "Arielle", "Arlette", "Armance", "Armande", "Armandine", "Armelle", "Armide", "Armelle", "Armin", "Arnaud", "Ars\xE8ne", "Arsino\xE9", "Art\xE9mis", "Arthur", "Ascelin", "Ascension", "Assomption", "Astart\xE9", "Ast\xE9rie", "Astr\xE9e", "Astrid", "Athalie", "Athanasie", "Athina", "Aube", "Albert", "Aude", "Audrey", "Augustine", "Aure", "Aur\xE9lie", "Aur\xE9lien", "Aur\xE8le", "Aurore", "Auxence", "Aveline", "Abiga\xEBlle", "Avoye", "Axelle", "Aymard", "Azal\xE9e", "Ad\xE8le", "Adeline", "Barbe", "Basilisse", "Bathilde", "B\xE9atrice", "B\xE9atrix", "B\xE9n\xE9dicte", "B\xE9reng\xE8re", "Bernadette", "Berthe", "Bertille", "Beuve", "Blanche", "Blanc", "Blandine", "Brigitte", "Brune", "Brunehilde", "Callista", "Camille", "Capucine", "Carine", "Caroline", "Cassandre", "Catherine", "C\xE9cile", "C\xE9leste", "C\xE9lestine", "C\xE9line", "Chantal", "Charl\xE8ne", "Charline", "Charlotte", "Chlo\xE9", "Christelle", "Christiane", "Christine", "Claire", "Clara", "Claude", "Claudine", "Clarisse", "Cl\xE9mence", "Cl\xE9mentine", "Cl\xE9o", "Clio", "Clotilde", "Coline", "Conception", "Constance", "Coralie", "Coraline", "Corentine", "Corinne", "Cyrielle", "Daniel", "Daniel", "Daphn\xE9", "D\xE9bora", "Delphine", "Denise", "Diane", "Dieudonn\xE9", "Dominique", "Doriane", "Doroth\xE9e", "Douce", "\xC9dith", "Edm\xE9e", "\xC9l\xE9onore", "\xC9liane", "\xC9lia", "\xC9liette", "\xC9lisabeth", "\xC9lise", "Ella", "\xC9lodie", "\xC9lo\xEFse", "Elsa", "\xC9meline", "\xC9m\xE9rance", "\xC9m\xE9rentienne", "\xC9m\xE9rencie", "\xC9milie", "Emma", "Emmanuelle", "Emmelie", "Ernestine", "Esther", "Estelle", "Eudoxie", "Eug\xE9nie", "Eulalie", "Euphrasie", "Eus\xE9bie", "\xC9vang\xE9line", "Eva", "\xC8ve", "\xC9velyne", "Fanny", "Fantine", "Faustine", "F\xE9licie", "Fernande", "Flavie", "Fleur", "Flore", "Florence", "Florie", "Fortun\xE9", "France", "Francia", "Fran\xE7oise", "Francine", "Gabrielle", "Ga\xEBlle", "Garance", "Genevi\xE8ve", "Georgette", "Gerberge", "Germaine", "Gertrude", "Gis\xE8le", "Gueni\xE8vre", "Guilhemine", "Guillemette", "Gustave", "Gwenael", "H\xE9l\xE8ne", "H\xE9lo\xEFse", "Henriette", "Hermine", "Hermione", "Hippolyte", "Honorine", "Hortense", "Huguette", "Ines", "Ir\xE8ne", "Irina", "Iris", "Isabeau", "Isabelle", "Iseult", "Isolde", "Ism\xE9rie", "Jacinthe", "Jacqueline", "Jade", "Janine", "Jeanne", "Jocelyne", "Jo\xEBlle", "Jos\xE9phine", "Judith", "Julia", "Julie", "Jules", "Juliette", "Justine", "Katy", "Kathy", "Katie", "Laura", "Laure", "Laureline", "Laurence", "Laurene", "Lauriane", "Laurianne", "Laurine", "L\xE9a", "L\xE9na", "L\xE9onie", "L\xE9on", "L\xE9ontine", "Lorraine", "Lucie", "Lucienne", "Lucille", "Ludivine", "Lydie", "Lydie", "Megane", "Madeleine", "Magali", "Maguelone", "Mallaury", "Manon", "Marceline", "Margot", "Marguerite", "Marianne", "Marie", "Myriam", "Marie", "Marine", "Marion", "Marl\xE8ne", "Marthe", "Martine", "Mathilde", "Maud", "Maureen", "Mauricette", "Maxime", "M\xE9lanie", "Melissa", "M\xE9lissandre", "M\xE9lisande", "M\xE9lodie", "Michel", "Micheline", "Mireille", "Miriam", "Mo\xEFse", "Monique", "Morgane", "Muriel", "Myl\xE8ne", "Nad\xE8ge", "Nadine", "Nathalie", "Nicole", "Nicolette", "Nine", "No\xEBl", "No\xE9mie", "Oc\xE9ane", "Odette", "Odile", "Olive", "Olivia", "Olympe", "Ombline", "Ombeline", "Oph\xE9lie", "Oriande", "Oriane", "Ozanne", "Pascale", "Pascaline", "Paule", "Paulette", "Pauline", "Priscille", "Prisca", "Prisque", "P\xE9cine", "P\xE9lagie", "P\xE9n\xE9lope", "Perrine", "P\xE9tronille", "Philippine", "Philom\xE8ne", "Philoth\xE9e", "Primerose", "Prudence", "Pulch\xE9rie", "Quentine", "Qui\xE9ta", "Quintia", "Quintilla", "Rachel", "Rapha\xEBlle", "Raymonde", "Rebecca", "R\xE9gine", "R\xE9jeanne", "Ren\xE9", "Rita", "Rita", "Rolande", "Romane", "Rosalie", "Rose", "Roseline", "Sabine", "Salom\xE9", "Sandra", "Sandrine", "Sarah", "S\xE9gol\xE8ne", "S\xE9verine", "Sibylle", "Simone", "Sixt", "Solange", "Soline", "Sol\xE8ne", "Sophie", "St\xE9phanie", "Suzanne", "Sylvain", "Sylvie", "Tatiana", "Tha\xEFs", "Th\xE9odora", "Th\xE9r\xE8se", "Tiphaine", "Ursule", "Valentine", "Val\xE9rie", "V\xE9ronique", "Victoire", "Victorine", "Vinciane", "Violette", "Virginie", "Viviane", "Xavi\xE8re", "Yolande", "Ysaline", "Yvette", "Yvonne", "Z\xE9lie", "Zita", "Zo\xE9"]
          }
        },
        lastNames: {
          en: ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins"],
          // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0164 (first 1000)
          it: ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"],
          // http://www.voornamelijk.nl/meest-voorkomende-achternamen-in-nederland-en-amsterdam/
          nl: ["Albers", "Alblas", "Appelman", "Baars", "Baas", "Bakker", "Blank", "Bleeker", "Blok", "Blom", "Boer", "Boers", "Boldewijn", "Boon", "Boot", "Bos", "Bosch", "Bosma", "Bosman", "Bouma", "Bouman", "Bouwman", "Brands", "Brouwer", "Burger", "Buijs", "Buitenhuis", "Ceder", "Cohen", "Dekker", "Dekkers", "Dijkman", "Dijkstra", "Driessen", "Drost", "Engel", "Evers", "Faber", "Franke", "Gerritsen", "Goedhart", "Goossens", "Groen", "Groenenberg", "Groot", "Haan", "Hart", "Heemskerk", "Hendriks", "Hermans", "Hoekstra", "Hofman", "Hopman", "Huisman", "Jacobs", "Jansen", "Janssen", "Jonker", "Jaspers", "Keijzer", "Klaassen", "Klein", "Koek", "Koenders", "Kok", "Kool", "Koopman", "Koopmans", "Koning", "Koster", "Kramer", "Kroon", "Kuijpers", "Kuiper", "Kuipers", "Kurt", "Koster", "Kwakman", "Los", "Lubbers", "Maas", "Markus", "Martens", "Meijer", "Mol", "Molenaar", "Mulder", "Nieuwenhuis", "Peeters", "Peters", "Pengel", "Pieters", "Pool", "Post", "Postma", "Prins", "Pronk", "Reijnders", "Rietveld", "Roest", "Roos", "Sanders", "Schaap", "Scheffer", "Schenk", "Schilder", "Schipper", "Schmidt", "Scholten", "Schouten", "Schut", "Schutte", "Schuurman", "Simons", "Smeets", "Smit", "Smits", "Snel", "Swinkels", "Tas", "Terpstra", "Timmermans", "Tol", "Tromp", "Troost", "Valk", "Veenstra", "Veldkamp", "Verbeek", "Verheul", "Verhoeven", "Vermeer", "Vermeulen", "Verweij", "Vink", "Visser", "Voorn", "Vos", "Wagenaar", "Wiersema", "Willems", "Willemsen", "Witteveen", "Wolff", "Wolters", "Zijlstra", "Zwart", "de Beer", "de Boer", "de Bruijn", "de Bruin", "de Graaf", "de Groot", "de Haan", "de Haas", "de Jager", "de Jong", "de Jonge", "de Koning", "de Lange", "de Leeuw", "de Ridder", "de Rooij", "de Ruiter", "de Vos", "de Vries", "de Waal", "de Wit", "de Zwart", "van Beek", "van Boven", "van Dam", "van Dijk", "van Dongen", "van Doorn", "van Egmond", "van Eijk", "van Es", "van Gelder", "van Gelderen", "van Houten", "van Hulst", "van Kempen", "van Kesteren", "van Leeuwen", "van Loon", "van Mill", "van Noord", "van Ommen", "van Ommeren", "van Oosten", "van Oostveen", "van Rijn", "van Schaik", "van Veen", "van Vliet", "van Wijk", "van Wijngaarden", "van den Poel", "van de Pol", "van den Ploeg", "van de Ven", "van den Berg", "van den Bosch", "van den Brink", "van den Broek", "van den Heuvel", "van der Heijden", "van der Horst", "van der Hulst", "van der Kroon", "van der Laan", "van der Linden", "van der Meer", "van der Meij", "van der Meulen", "van der Molen", "van der Sluis", "van der Spek", "van der Veen", "van der Velde", "van der Velden", "van der Vliet", "van der Wal"],
          // https://surnames.behindthename.com/top/lists/england-wales/1991
          uk: ["Smith", "Jones", "Williams", "Taylor", "Brown", "Davies", "Evans", "Wilson", "Thomas", "Johnson", "Roberts", "Robinson", "Thompson", "Wright", "Walker", "White", "Edwards", "Hughes", "Green", "Hall", "Lewis", "Harris", "Clarke", "Patel", "Jackson", "Wood", "Turner", "Martin", "Cooper", "Hill", "Ward", "Morris", "Moore", "Clark", "Lee", "King", "Baker", "Harrison", "Morgan", "Allen", "James", "Scott", "Phillips", "Watson", "Davis", "Parker", "Price", "Bennett", "Young", "Griffiths", "Mitchell", "Kelly", "Cook", "Carter", "Richardson", "Bailey", "Collins", "Bell", "Shaw", "Murphy", "Miller", "Cox", "Richards", "Khan", "Marshall", "Anderson", "Simpson", "Ellis", "Adams", "Singh", "Begum", "Wilkinson", "Foster", "Chapman", "Powell", "Webb", "Rogers", "Gray", "Mason", "Ali", "Hunt", "Hussain", "Campbell", "Matthews", "Owen", "Palmer", "Holmes", "Mills", "Barnes", "Knight", "Lloyd", "Butler", "Russell", "Barker", "Fisher", "Stevens", "Jenkins", "Murray", "Dixon", "Harvey", "Graham", "Pearson", "Ahmed", "Fletcher", "Walsh", "Kaur", "Gibson", "Howard", "Andrews", "Stewart", "Elliott", "Reynolds", "Saunders", "Payne", "Fox", "Ford", "Pearce", "Day", "Brooks", "West", "Lawrence", "Cole", "Atkinson", "Bradley", "Spencer", "Gill", "Dawson", "Ball", "Burton", "O'brien", "Watts", "Rose", "Booth", "Perry", "Ryan", "Grant", "Wells", "Armstrong", "Francis", "Rees", "Hayes", "Hart", "Hudson", "Newman", "Barrett", "Webster", "Hunter", "Gregory", "Carr", "Lowe", "Page", "Marsh", "Riley", "Dunn", "Woods", "Parsons", "Berry", "Stone", "Reid", "Holland", "Hawkins", "Harding", "Porter", "Robertson", "Newton", "Oliver", "Reed", "Kennedy", "Williamson", "Bird", "Gardner", "Shah", "Dean", "Lane", "Cooke", "Bates", "Henderson", "Parry", "Burgess", "Bishop", "Walton", "Burns", "Nicholson", "Shepherd", "Ross", "Cross", "Long", "Freeman", "Warren", "Nicholls", "Hamilton", "Byrne", "Sutton", "Mcdonald", "Yates", "Hodgson", "Robson", "Curtis", "Hopkins", "O'connor", "Harper", "Coleman", "Watkins", "Moss", "Mccarthy", "Chambers", "O'neill", "Griffin", "Sharp", "Hardy", "Wheeler", "Potter", "Osborne", "Johnston", "Gordon", "Doyle", "Wallace", "George", "Jordan", "Hutchinson", "Rowe", "Burke", "May", "Pritchard", "Gilbert", "Willis", "Higgins", "Read", "Miles", "Stevenson", "Stephenson", "Hammond", "Arnold", "Buckley", "Walters", "Hewitt", "Barber", "Nelson", "Slater", "Austin", "Sullivan", "Whitehead", "Mann", "Frost", "Lambert", "Stephens", "Blake", "Akhtar", "Lynch", "Goodwin", "Barton", "Woodward", "Thomson", "Cunningham", "Quinn", "Barnett", "Baxter", "Bibi", "Clayton", "Nash", "Greenwood", "Jennings", "Holt", "Kemp", "Poole", "Gallagher", "Bond", "Stokes", "Tucker", "Davidson", "Fowler", "Heath", "Norman", "Middleton", "Lawson", "Banks", "French", "Stanley", "Jarvis", "Gibbs", "Ferguson", "Hayward", "Carroll", "Douglas", "Dickinson", "Todd", "Barlow", "Peters", "Lucas", "Knowles", "Hartley", "Miah", "Simmons", "Morton", "Alexander", "Field", "Morrison", "Norris", "Townsend", "Preston", "Hancock", "Thornton", "Baldwin", "Burrows", "Briggs", "Parkinson", "Reeves", "Macdonald", "Lamb", "Black", "Abbott", "Sanders", "Thorpe", "Holden", "Tomlinson", "Perkins", "Ashton", "Rhodes", "Fuller", "Howe", "Bryant", "Vaughan", "Dale", "Davey", "Weston", "Bartlett", "Whittaker", "Davison", "Kent", "Skinner", "Birch", "Morley", "Daniels", "Glover", "Howell", "Cartwright", "Pugh", "Humphreys", "Goddard", "Brennan", "Wall", "Kirby", "Bowen", "Savage", "Bull", "Wong", "Dobson", "Smart", "Wilkins", "Kirk", "Fraser", "Duffy", "Hicks", "Patterson", "Bradshaw", "Little", "Archer", "Warner", "Waters", "O'sullivan", "Farrell", "Brookes", "Atkins", "Kay", "Dodd", "Bentley", "Flynn", "John", "Schofield", "Short", "Haynes", "Wade", "Butcher", "Henry", "Sanderson", "Crawford", "Sheppard", "Bolton", "Coates", "Giles", "Gould", "Houghton", "Gibbons", "Pratt", "Manning", "Law", "Hooper", "Noble", "Dyer", "Rahman", "Clements", "Moran", "Sykes", "Chan", "Doherty", "Connolly", "Joyce", "Franklin", "Hobbs", "Coles", "Herbert", "Steele", "Kerr", "Leach", "Winter", "Owens", "Duncan", "Naylor", "Fleming", "Horton", "Finch", "Fitzgerald", "Randall", "Carpenter", "Marsden", "Browne", "Garner", "Pickering", "Hale", "Dennis", "Vincent", "Chadwick", "Chandler", "Sharpe", "Nolan", "Lyons", "Hurst", "Collier", "Peacock", "Howarth", "Faulkner", "Rice", "Pollard", "Welch", "Norton", "Gough", "Sinclair", "Blackburn", "Bryan", "Conway", "Power", "Cameron", "Daly", "Allan", "Hanson", "Gardiner", "Boyle", "Myers", "Turnbull", "Wallis", "Mahmood", "Sims", "Swift", "Iqbal", "Pope", "Brady", "Chamberlain", "Rowley", "Tyler", "Farmer", "Metcalfe", "Hilton", "Godfrey", "Holloway", "Parkin", "Bray", "Talbot", "Donnelly", "Nixon", "Charlton", "Benson", "Whitehouse", "Barry", "Hope", "Lord", "North", "Storey", "Connor", "Potts", "Bevan", "Hargreaves", "Mclean", "Mistry", "Bruce", "Howells", "Hyde", "Parkes", "Wyatt", "Fry", "Lees", "O'donnell", "Craig", "Forster", "Mckenzie", "Humphries", "Mellor", "Carey", "Ingram", "Summers", "Leonard"],
          // https://surnames.behindthename.com/top/lists/germany/2017
          de: ["M\xFCller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Sch\xE4fer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schr\xF6der", "Neumann", "Schwarz", "Zimmermann", "Braun", "Kr\xFCger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann", "Schmid", "Schulze", "Maier", "K\xF6hler", "Herrmann", "K\xF6nig", "Walter", "Mayer", "Huber", "Kaiser", "Fuchs", "Peters", "Lang", "Scholz", "M\xF6ller", "Wei\xDF", "Jung", "Hahn", "Schubert", "Vogel", "Friedrich", "Keller", "G\xFCnther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann", "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "B\xF6hm", "Winter", "Kraus", "Martin", "Schumacher", "Kr\xE4mer", "Vogt", "Stein", "J\xE4ger", "Otto", "Sommer", "Gro\xDF", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber", "Graf", "Schulte", "Dietrich", "Ziegler", "Kuhn", "K\xFChn", "Pohl", "Engel", "Horn", "Busch", "Bergmann", "Thomas", "Voigt", "Sauer", "Arnold", "Wolff", "Pfeiffer"],
          // http://www.japantimes.co.jp/life/2009/10/11/lifestyle/japans-top-100-most-common-family-names/
          jp: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Saito", "Matsumoto", "Inoue", "Kimura", "Hayashi", "Shimizu", "Yamazaki", "Mori", "Abe", "Ikeda", "Hashimoto", "Yamashita", "Ishikawa", "Nakajima", "Maeda", "Fujita", "Ogawa", "Goto", "Okada", "Hasegawa", "Murakami", "Kondo", "Ishii", "Saito", "Sakamoto", "Endo", "Aoki", "Fujii", "Nishimura", "Fukuda", "Ota", "Miura", "Fujiwara", "Okamoto", "Matsuda", "Nakagawa", "Nakano", "Harada", "Ono", "Tamura", "Takeuchi", "Kaneko", "Wada", "Nakayama", "Ishida", "Ueda", "Morita", "Hara", "Shibata", "Sakai", "Kudo", "Yokoyama", "Miyazaki", "Miyamoto", "Uchida", "Takagi", "Ando", "Taniguchi", "Ohno", "Maruyama", "Imai", "Takada", "Fujimoto", "Takeda", "Murata", "Ueno", "Sugiyama", "Masuda", "Sugawara", "Hirano", "Kojima", "Otsuka", "Chiba", "Kubo", "Matsui", "Iwasaki", "Sakurai", "Kinoshita", "Noguchi", "Matsuo", "Nomura", "Kikuchi", "Sano", "Onishi", "Sugimoto", "Arai"],
          // http://www.lowchensaustralia.com/names/popular-spanish-names.htm
          es: ["Garcia", "Fernandez", "Lopez", "Martinez", "Gonzalez", "Rodriguez", "Sanchez", "Perez", "Martin", "Gomez", "Ruiz", "Diaz", "Hernandez", "Alvarez", "Jimenez", "Moreno", "Munoz", "Alonso", "Romero", "Navarro", "Gutierrez", "Torres", "Dominguez", "Gil", "Vazquez", "Blanco", "Serrano", "Ramos", "Castro", "Suarez", "Sanz", "Rubio", "Ortega", "Molina", "Delgado", "Ortiz", "Morales", "Ramirez", "Marin", "Iglesias", "Santos", "Castillo", "Garrido", "Calvo", "Pena", "Cruz", "Cano", "Nunez", "Prieto", "Diez", "Lozano", "Vidal", "Pascual", "Ferrer", "Medina", "Vega", "Leon", "Herrero", "Vicente", "Mendez", "Guerrero", "Fuentes", "Campos", "Nieto", "Cortes", "Caballero", "Ibanez", "Lorenzo", "Pastor", "Gimenez", "Saez", "Soler", "Marquez", "Carrasco", "Herrera", "Montero", "Arias", "Crespo", "Flores", "Andres", "Aguilar", "Hidalgo", "Cabrera", "Mora", "Duran", "Velasco", "Rey", "Pardo", "Roman", "Vila", "Bravo", "Merino", "Moya", "Soto", "Izquierdo", "Reyes", "Redondo", "Marcos", "Carmona", "Menendez"],
          // Data taken from https://fr.wikipedia.org/wiki/Liste_des_noms_de_famille_les_plus_courants_en_France
          fr: ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lef\xE8vre", "Leroy", "Roux", "David", "Bertrand", "Morel", "Fournier", "Girard", "Bonnet", "Dupont", "Lambert", "Fontaine", "Rousseau", "Vincent", "M\xFCller", "Lef\xE8vre", "Faure", "Andr\xE9", "Mercier", "Blanc", "Gu\xE9rin", "Boyer", "Garnier", "Chevalier", "Fran\xE7ois", "Legrand", "Gauthier", "Garcia", "Perrin", "Robin", "Cl\xE9ment", "Morin", "Nicolas", "Henry", "Roussel", "Matthieu", "Gautier", "Masson", "Marchand", "Duval", "Denis", "Dumont", "Marie", "Lemaire", "No\xEBl", "Meyer", "Dufour", "Meunier", "Brun", "Blanchard", "Giraud", "Joly", "Rivi\xE8re", "Lucas", "Brunet", "Gaillard", "Barbier", "Arnaud", "Mart\xEDnez", "G\xE9rard", "Roche", "Renard", "Schmitt", "Roy", "Leroux", "Colin", "Vidal", "Caron", "Picard", "Roger", "Fabre", "Aubert", "Lemoine", "Renaud", "Dumas", "Lacroix", "Olivier", "Philippe", "Bourgeois", "Pierre", "Beno\xEEt", "Rey", "Leclerc", "Payet", "Rolland", "Leclercq", "Guillaume", "Lecomte", "L\xF3pez", "Jean", "Dupuy", "Guillot", "Hubert", "Berger", "Carpentier", "S\xE1nchez", "Dupuis", "Moulin", "Louis", "Deschamps", "Huet", "Vasseur", "Perez", "Boucher", "Fleury", "Royer", "Klein", "Jacquet", "Adam", "Paris", "Poirier", "Marty", "Aubry", "Guyot", "Carr\xE9", "Charles", "Renault", "Charpentier", "M\xE9nard", "Maillard", "Baron", "Bertin", "Bailly", "Herv\xE9", "Schneider", "Fern\xE1ndez", "Le GallGall", "Collet", "L\xE9ger", "Bouvier", "Julien", "Pr\xE9vost", "Millet", "Perrot", "Daniel", "Le RouxRoux", "Cousin", "Germain", "Breton", "Besson", "Langlois", "R\xE9mi", "Le GoffGoff", "Pelletier", "L\xE9v\xEAque", "Perrier", "Leblanc", "Barr\xE9", "Lebrun", "Marchal", "Weber", "Mallet", "Hamon", "Boulanger", "Jacob", "Monnier", "Michaud", "Rodr\xEDguez", "Guichard", "Gillet", "\xC9tienne", "Grondin", "Poulain", "Tessier", "Chevallier", "Collin", "Chauvin", "Da SilvaSilva", "Bouchet", "Gay", "Lema\xEEtre", "B\xE9nard", "Mar\xE9chal", "Humbert", "Reynaud", "Antoine", "Hoarau", "Perret", "Barth\xE9lemy", "Cordier", "Pichon", "Lejeune", "Gilbert", "Lamy", "Delaunay", "Pasquier", "Carlier", "LaporteLaporte"]
        },
        // Data taken from http://geoportal.statistics.gov.uk/datasets/ons-postcode-directory-latest-centroids
        postcodeAreas: [{ code: "AB" }, { code: "AL" }, { code: "B" }, { code: "BA" }, { code: "BB" }, { code: "BD" }, { code: "BH" }, { code: "BL" }, { code: "BN" }, { code: "BR" }, { code: "BS" }, { code: "BT" }, { code: "CA" }, { code: "CB" }, { code: "CF" }, { code: "CH" }, { code: "CM" }, { code: "CO" }, { code: "CR" }, { code: "CT" }, { code: "CV" }, { code: "CW" }, { code: "DA" }, { code: "DD" }, { code: "DE" }, { code: "DG" }, { code: "DH" }, { code: "DL" }, { code: "DN" }, { code: "DT" }, { code: "DY" }, { code: "E" }, { code: "EC" }, { code: "EH" }, { code: "EN" }, { code: "EX" }, { code: "FK" }, { code: "FY" }, { code: "G" }, { code: "GL" }, { code: "GU" }, { code: "GY" }, { code: "HA" }, { code: "HD" }, { code: "HG" }, { code: "HP" }, { code: "HR" }, { code: "HS" }, { code: "HU" }, { code: "HX" }, { code: "IG" }, { code: "IM" }, { code: "IP" }, { code: "IV" }, { code: "JE" }, { code: "KA" }, { code: "KT" }, { code: "KW" }, { code: "KY" }, { code: "L" }, { code: "LA" }, { code: "LD" }, { code: "LE" }, { code: "LL" }, { code: "LN" }, { code: "LS" }, { code: "LU" }, { code: "M" }, { code: "ME" }, { code: "MK" }, { code: "ML" }, { code: "N" }, { code: "NE" }, { code: "NG" }, { code: "NN" }, { code: "NP" }, { code: "NR" }, { code: "NW" }, { code: "OL" }, { code: "OX" }, { code: "PA" }, { code: "PE" }, { code: "PH" }, { code: "PL" }, { code: "PO" }, { code: "PR" }, { code: "RG" }, { code: "RH" }, { code: "RM" }, { code: "S" }, { code: "SA" }, { code: "SE" }, { code: "SG" }, { code: "SK" }, { code: "SL" }, { code: "SM" }, { code: "SN" }, { code: "SO" }, { code: "SP" }, { code: "SR" }, { code: "SS" }, { code: "ST" }, { code: "SW" }, { code: "SY" }, { code: "TA" }, { code: "TD" }, { code: "TF" }, { code: "TN" }, { code: "TQ" }, { code: "TR" }, { code: "TS" }, { code: "TW" }, { code: "UB" }, { code: "W" }, { code: "WA" }, { code: "WC" }, { code: "WD" }, { code: "WF" }, { code: "WN" }, { code: "WR" }, { code: "WS" }, { code: "WV" }, { code: "YO" }, { code: "ZE" }],
        // Data taken from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        countries: [{ name: "Afghanistan", abbreviation: "AF" }, { name: "\xC5land Islands", abbreviation: "AX" }, { name: "Albania", abbreviation: "AL" }, { name: "Algeria", abbreviation: "DZ" }, { name: "American Samoa", abbreviation: "AS" }, { name: "Andorra", abbreviation: "AD" }, { name: "Angola", abbreviation: "AO" }, { name: "Anguilla", abbreviation: "AI" }, { name: "Antarctica", abbreviation: "AQ" }, { name: "Antigua and Barbuda", abbreviation: "AG" }, { name: "Argentina", abbreviation: "AR" }, { name: "Armenia", abbreviation: "AM" }, { name: "Aruba", abbreviation: "AW" }, { name: "Australia", abbreviation: "AU" }, { name: "Austria", abbreviation: "AT" }, { name: "Azerbaijan", abbreviation: "AZ" }, { name: "Bahamas", abbreviation: "BS" }, { name: "Bahrain", abbreviation: "BH" }, { name: "Bangladesh", abbreviation: "BD" }, { name: "Barbados", abbreviation: "BB" }, { name: "Belarus", abbreviation: "BY" }, { name: "Belgium", abbreviation: "BE" }, { name: "Belize", abbreviation: "BZ" }, { name: "Benin", abbreviation: "BJ" }, { name: "Bermuda", abbreviation: "BM" }, { name: "Bhutan", abbreviation: "BT" }, { name: "Plurinational State of Bolivia", abbreviation: "BO" }, { name: "Bonaire, Sint Eustatius and Saba", abbreviation: "BQ" }, { name: "Bosnia and Herzegovina", abbreviation: "BA" }, { name: "Botswana", abbreviation: "BW" }, { name: "Bouvet Island", abbreviation: "BV" }, { name: "Brazil", abbreviation: "BR" }, { name: "British Indian Ocean Territory", abbreviation: "IO" }, { name: "Brunei Darussalam", abbreviation: "BN" }, { name: "Bulgaria", abbreviation: "BG" }, { name: "Burkina Faso", abbreviation: "BF" }, { name: "Burundi", abbreviation: "BI" }, { name: "Cabo Verde", abbreviation: "CV" }, { name: "Cambodia", abbreviation: "KH" }, { name: "Cameroon", abbreviation: "CM" }, { name: "Canada", abbreviation: "CA" }, { name: "Cayman Islands", abbreviation: "KY" }, { name: "Central African Republic", abbreviation: "CF" }, { name: "Chad", abbreviation: "TD" }, { name: "Chile", abbreviation: "CL" }, { name: "China", abbreviation: "CN" }, { name: "Christmas Island", abbreviation: "CX" }, { name: "Cocos (Keeling) Islands", abbreviation: "CC" }, { name: "Colombia", abbreviation: "CO" }, { name: "Comoros", abbreviation: "KM" }, { name: "Congo", abbreviation: "CG" }, { name: "Democratic Republic of the Congo", abbreviation: "CD" }, { name: "Cook Islands", abbreviation: "CK" }, { name: "Costa Rica", abbreviation: "CR" }, { name: "C\xF4te d'Ivoire", abbreviation: "CI" }, { name: "Croatia", abbreviation: "HR" }, { name: "Cuba", abbreviation: "CU" }, { name: "Cura\xE7ao", abbreviation: "CW" }, { name: "Cyprus", abbreviation: "CY" }, { name: "Czechia", abbreviation: "CZ" }, { name: "Denmark", abbreviation: "DK" }, { name: "Djibouti", abbreviation: "DJ" }, { name: "Dominica", abbreviation: "DM" }, { name: "Dominican Republic", abbreviation: "DO" }, { name: "Ecuador", abbreviation: "EC" }, { name: "Egypt", abbreviation: "EG" }, { name: "El Salvador", abbreviation: "SV" }, { name: "Equatorial Guinea", abbreviation: "GQ" }, { name: "Eritrea", abbreviation: "ER" }, { name: "Estonia", abbreviation: "EE" }, { name: "Eswatini", abbreviation: "SZ" }, { name: "Ethiopia", abbreviation: "ET" }, { name: "Falkland Islands (Malvinas)", abbreviation: "FK" }, { name: "Faroe Islands", abbreviation: "FO" }, { name: "Fiji", abbreviation: "FJ" }, { name: "Finland", abbreviation: "FI" }, { name: "France", abbreviation: "FR" }, { name: "French Guiana", abbreviation: "GF" }, { name: "French Polynesia", abbreviation: "PF" }, { name: "French Southern Territories", abbreviation: "TF" }, { name: "Gabon", abbreviation: "GA" }, { name: "Gambia", abbreviation: "GM" }, { name: "Georgia", abbreviation: "GE" }, { name: "Germany", abbreviation: "DE" }, { name: "Ghana", abbreviation: "GH" }, { name: "Gibraltar", abbreviation: "GI" }, { name: "Greece", abbreviation: "GR" }, { name: "Greenland", abbreviation: "GL" }, { name: "Grenada", abbreviation: "GD" }, { name: "Guadeloupe", abbreviation: "GP" }, { name: "Guam", abbreviation: "GU" }, { name: "Guatemala", abbreviation: "GT" }, { name: "Guernsey", abbreviation: "GG" }, { name: "Guinea", abbreviation: "GN" }, { name: "Guinea-Bissau", abbreviation: "GW" }, { name: "Guyana", abbreviation: "GY" }, { name: "Haiti", abbreviation: "HT" }, { name: "Heard Island and McDonald Islands", abbreviation: "HM" }, { name: "Holy See", abbreviation: "VA" }, { name: "Honduras", abbreviation: "HN" }, { name: "Hong Kong", abbreviation: "HK" }, { name: "Hungary", abbreviation: "HU" }, { name: "Iceland", abbreviation: "IS" }, { name: "India", abbreviation: "IN" }, { name: "Indonesia", abbreviation: "ID" }, { name: "Islamic Republic of Iran", abbreviation: "IR" }, { name: "Iraq", abbreviation: "IQ" }, { name: "Ireland", abbreviation: "IE" }, { name: "Isle of Man", abbreviation: "IM" }, { name: "Israel", abbreviation: "IL" }, { name: "Italy", abbreviation: "IT" }, { name: "Jamaica", abbreviation: "JM" }, { name: "Japan", abbreviation: "JP" }, { name: "Jersey", abbreviation: "JE" }, { name: "Jordan", abbreviation: "JO" }, { name: "Kazakhstan", abbreviation: "KZ" }, { name: "Kenya", abbreviation: "KE" }, { name: "Kiribati", abbreviation: "KI" }, { name: "Democratic People's Republic of Korea", abbreviation: "KP" }, { name: "Republic of Korea", abbreviation: "KR" }, { name: "Kuwait", abbreviation: "KW" }, { name: "Kyrgyzstan", abbreviation: "KG" }, { name: "Lao People's Democratic Republic", abbreviation: "LA" }, { name: "Latvia", abbreviation: "LV" }, { name: "Lebanon", abbreviation: "LB" }, { name: "Lesotho", abbreviation: "LS" }, { name: "Liberia", abbreviation: "LR" }, { name: "Libya", abbreviation: "LY" }, { name: "Liechtenstein", abbreviation: "LI" }, { name: "Lithuania", abbreviation: "LT" }, { name: "Luxembourg", abbreviation: "LU" }, { name: "Macao", abbreviation: "MO" }, { name: "Madagascar", abbreviation: "MG" }, { name: "Malawi", abbreviation: "MW" }, { name: "Malaysia", abbreviation: "MY" }, { name: "Maldives", abbreviation: "MV" }, { name: "Mali", abbreviation: "ML" }, { name: "Malta", abbreviation: "MT" }, { name: "Marshall Islands", abbreviation: "MH" }, { name: "Martinique", abbreviation: "MQ" }, { name: "Mauritania", abbreviation: "MR" }, { name: "Mauritius", abbreviation: "MU" }, { name: "Mayotte", abbreviation: "YT" }, { name: "Mexico", abbreviation: "MX" }, { name: "Federated States of Micronesia", abbreviation: "FM" }, { name: "Republic of Moldova", abbreviation: "MD" }, { name: "Monaco", abbreviation: "MC" }, { name: "Mongolia", abbreviation: "MN" }, { name: "Montenegro", abbreviation: "ME" }, { name: "Montserrat", abbreviation: "MS" }, { name: "Morocco", abbreviation: "MA" }, { name: "Mozambique", abbreviation: "MZ" }, { name: "Myanmar", abbreviation: "MM" }, { name: "Namibia", abbreviation: "NA" }, { name: "Nauru", abbreviation: "NR" }, { name: "Nepal", abbreviation: "NP" }, { name: "Kingdom of the Netherlands", abbreviation: "NL" }, { name: "New Caledonia", abbreviation: "NC" }, { name: "New Zealand", abbreviation: "NZ" }, { name: "Nicaragua", abbreviation: "NI" }, { name: "Niger", abbreviation: "NE" }, { name: "Nigeria", abbreviation: "NG" }, { name: "Niue", abbreviation: "NU" }, { name: "Norfolk Island", abbreviation: "NF" }, { name: "North Macedonia", abbreviation: "MK" }, { name: "Northern Mariana Islands", abbreviation: "MP" }, { name: "Norway", abbreviation: "NO" }, { name: "Oman", abbreviation: "OM" }, { name: "Pakistan", abbreviation: "PK" }, { name: "Palau", abbreviation: "PW" }, { name: "State of Palestine", abbreviation: "PS" }, { name: "Panama", abbreviation: "PA" }, { name: "Papua New Guinea", abbreviation: "PG" }, { name: "Paraguay", abbreviation: "PY" }, { name: "Peru", abbreviation: "PE" }, { name: "Philippines", abbreviation: "PH" }, { name: "Pitcairn", abbreviation: "PN" }, { name: "Poland", abbreviation: "PL" }, { name: "Portugal", abbreviation: "PT" }, { name: "Puerto Rico", abbreviation: "PR" }, { name: "Qatar", abbreviation: "QA" }, { name: "R\xE9union", abbreviation: "RE" }, { name: "Romania", abbreviation: "RO" }, { name: "Russian Federation", abbreviation: "RU" }, { name: "Rwanda", abbreviation: "RW" }, { name: "Saint Barth\xE9lemy", abbreviation: "BL" }, { name: "Saint Helena, Ascension and Tristan da Cunha", abbreviation: "SH" }, { name: "Saint Kitts and Nevis", abbreviation: "KN" }, { name: "Saint Lucia", abbreviation: "LC" }, { name: "Saint Martin (French part)", abbreviation: "MF" }, { name: "Saint Pierre and Miquelon", abbreviation: "PM" }, { name: "Saint Vincent and the Grenadines", abbreviation: "VC" }, { name: "Samoa", abbreviation: "WS" }, { name: "San Marino", abbreviation: "SM" }, { name: "Sao Tome and Principe", abbreviation: "ST" }, { name: "Saudi Arabia", abbreviation: "SA" }, { name: "Senegal", abbreviation: "SN" }, { name: "Serbia", abbreviation: "RS" }, { name: "Seychelles", abbreviation: "SC" }, { name: "Sierra Leone", abbreviation: "SL" }, { name: "Singapore", abbreviation: "SG" }, { name: "Sint Maarten (Dutch part)", abbreviation: "SX" }, { name: "Slovakia", abbreviation: "SK" }, { name: "Slovenia", abbreviation: "SI" }, { name: "Solomon Islands", abbreviation: "SB" }, { name: "Somalia", abbreviation: "SO" }, { name: "South Africa", abbreviation: "ZA" }, { name: "South Georgia and the South Sandwich Islands", abbreviation: "GS" }, { name: "South Sudan", abbreviation: "SS" }, { name: "Spain", abbreviation: "ES" }, { name: "Sri Lanka", abbreviation: "LK" }, { name: "Sudan", abbreviation: "SD" }, { name: "Suriname", abbreviation: "SR" }, { name: "Svalbard and Jan Mayen", abbreviation: "SJ" }, { name: "Sweden", abbreviation: "SE" }, { name: "Switzerland", abbreviation: "CH" }, { name: "Syrian Arab Republic", abbreviation: "SY" }, { name: "Taiwan, Province of China", abbreviation: "TW" }, { name: "Tajikistan", abbreviation: "TJ" }, { name: "United Republic of Tanzania", abbreviation: "TZ" }, { name: "Thailand", abbreviation: "TH" }, { name: "Timor-Leste", abbreviation: "TL" }, { name: "Togo", abbreviation: "TG" }, { name: "Tokelau", abbreviation: "TK" }, { name: "Tonga", abbreviation: "TO" }, { name: "Trinidad and Tobago", abbreviation: "TT" }, { name: "Tunisia", abbreviation: "TN" }, { name: "T\xFCrkiye", abbreviation: "TR" }, { name: "Turkmenistan", abbreviation: "TM" }, { name: "Turks and Caicos Islands", abbreviation: "TC" }, { name: "Tuvalu", abbreviation: "TV" }, { name: "Uganda", abbreviation: "UG" }, { name: "Ukraine", abbreviation: "UA" }, { name: "United Arab Emirates", abbreviation: "AE" }, { name: "United Kingdom of Great Britain and Northern Ireland", abbreviation: "GB" }, { name: "United States Minor Outlying Islands", abbreviation: "UM" }, { name: "United States of America", abbreviation: "US" }, { name: "Uruguay", abbreviation: "UY" }, { name: "Uzbekistan", abbreviation: "UZ" }, { name: "Vanuatu", abbreviation: "VU" }, { name: "Bolivarian Republic of Venezuela", abbreviation: "VE" }, { name: "Viet Nam", abbreviation: "VN" }, { name: "Virgin Islands (British)", abbreviation: "VG" }, { name: "Virgin Islands (U.S.)", abbreviation: "VI" }, { name: "Wallis and Futuna", abbreviation: "WF" }, { name: "Western Sahara", abbreviation: "EH" }, { name: "Yemen", abbreviation: "YE" }, { name: "Zambia", abbreviation: "ZM" }, { name: "Zimbabwe", abbreviation: "ZW" }],
        counties: {
          // Data taken from http://www.downloadexcelfiles.com/gb_en/download-excel-file-list-counties-uk
          uk: [
            { name: "Bath and North East Somerset" },
            { name: "Aberdeenshire" },
            { name: "Anglesey" },
            { name: "Angus" },
            { name: "Bedford" },
            { name: "Blackburn with Darwen" },
            { name: "Blackpool" },
            { name: "Bournemouth" },
            { name: "Bracknell Forest" },
            { name: "Brighton & Hove" },
            { name: "Bristol" },
            { name: "Buckinghamshire" },
            { name: "Cambridgeshire" },
            { name: "Carmarthenshire" },
            { name: "Central Bedfordshire" },
            { name: "Ceredigion" },
            { name: "Cheshire East" },
            { name: "Cheshire West and Chester" },
            { name: "Clackmannanshire" },
            { name: "Conwy" },
            { name: "Cornwall" },
            { name: "County Antrim" },
            { name: "County Armagh" },
            { name: "County Down" },
            { name: "County Durham" },
            { name: "County Fermanagh" },
            { name: "County Londonderry" },
            { name: "County Tyrone" },
            { name: "Cumbria" },
            { name: "Darlington" },
            { name: "Denbighshire" },
            { name: "Derby" },
            { name: "Derbyshire" },
            { name: "Devon" },
            { name: "Dorset" },
            { name: "Dumfries and Galloway" },
            { name: "Dundee" },
            { name: "East Lothian" },
            { name: "East Riding of Yorkshire" },
            { name: "East Sussex" },
            { name: "Edinburgh?" },
            { name: "Essex" },
            { name: "Falkirk" },
            { name: "Fife" },
            { name: "Flintshire" },
            { name: "Gloucestershire" },
            { name: "Greater London" },
            { name: "Greater Manchester" },
            { name: "Gwent" },
            { name: "Gwynedd" },
            { name: "Halton" },
            { name: "Hampshire" },
            { name: "Hartlepool" },
            { name: "Herefordshire" },
            { name: "Hertfordshire" },
            { name: "Highlands" },
            { name: "Hull" },
            { name: "Isle of Wight" },
            { name: "Isles of Scilly" },
            { name: "Kent" },
            { name: "Lancashire" },
            { name: "Leicester" },
            { name: "Leicestershire" },
            { name: "Lincolnshire" },
            { name: "Lothian" },
            { name: "Luton" },
            { name: "Medway" },
            { name: "Merseyside" },
            { name: "Mid Glamorgan" },
            { name: "Middlesbrough" },
            { name: "Milton Keynes" },
            { name: "Monmouthshire" },
            { name: "Moray" },
            { name: "Norfolk" },
            { name: "North East Lincolnshire" },
            { name: "North Lincolnshire" },
            { name: "North Somerset" },
            { name: "North Yorkshire" },
            { name: "Northamptonshire" },
            { name: "Northumberland" },
            { name: "Nottingham" },
            { name: "Nottinghamshire" },
            { name: "Oxfordshire" },
            { name: "Pembrokeshire" },
            { name: "Perth and Kinross" },
            { name: "Peterborough" },
            { name: "Plymouth" },
            { name: "Poole" },
            { name: "Portsmouth" },
            { name: "Powys" },
            { name: "Reading" },
            { name: "Redcar and Cleveland" },
            { name: "Rutland" },
            { name: "Scottish Borders" },
            { name: "Shropshire" },
            { name: "Slough" },
            { name: "Somerset" },
            { name: "South Glamorgan" },
            { name: "South Gloucestershire" },
            { name: "South Yorkshire" },
            { name: "Southampton" },
            { name: "Southend-on-Sea" },
            { name: "Staffordshire" },
            { name: "Stirlingshire" },
            { name: "Stockton-on-Tees" },
            { name: "Stoke-on-Trent" },
            { name: "Strathclyde" },
            { name: "Suffolk" },
            { name: "Surrey" },
            { name: "Swindon" },
            { name: "Telford and Wrekin" },
            { name: "Thurrock" },
            { name: "Torbay" },
            { name: "Tyne and Wear" },
            { name: "Warrington" },
            { name: "Warwickshire" },
            { name: "West Berkshire" },
            { name: "West Glamorgan" },
            { name: "West Lothian" },
            { name: "West Midlands" },
            { name: "West Sussex" },
            { name: "West Yorkshire" },
            { name: "Western Isles" },
            { name: "Wiltshire" },
            { name: "Windsor and Maidenhead" },
            { name: "Wokingham" },
            { name: "Worcestershire" },
            { name: "Wrexham" },
            { name: "York" }
          ]
        },
        provinces: {
          ca: [
            { name: "Alberta", abbreviation: "AB" },
            { name: "British Columbia", abbreviation: "BC" },
            { name: "Manitoba", abbreviation: "MB" },
            { name: "New Brunswick", abbreviation: "NB" },
            { name: "Newfoundland and Labrador", abbreviation: "NL" },
            { name: "Nova Scotia", abbreviation: "NS" },
            { name: "Ontario", abbreviation: "ON" },
            { name: "Prince Edward Island", abbreviation: "PE" },
            { name: "Quebec", abbreviation: "QC" },
            { name: "Saskatchewan", abbreviation: "SK" },
            // The case could be made that the following are not actually provinces
            // since they are technically considered "territories" however they all
            // look the same on an envelope!
            { name: "Northwest Territories", abbreviation: "NT" },
            { name: "Nunavut", abbreviation: "NU" },
            { name: "Yukon", abbreviation: "YT" }
          ],
          it: [
            { name: "Agrigento", abbreviation: "AG", code: 84 },
            { name: "Alessandria", abbreviation: "AL", code: 6 },
            { name: "Ancona", abbreviation: "AN", code: 42 },
            { name: "Aosta", abbreviation: "AO", code: 7 },
            { name: "L'Aquila", abbreviation: "AQ", code: 66 },
            { name: "Arezzo", abbreviation: "AR", code: 51 },
            { name: "Ascoli-Piceno", abbreviation: "AP", code: 44 },
            { name: "Asti", abbreviation: "AT", code: 5 },
            { name: "Avellino", abbreviation: "AV", code: 64 },
            { name: "Bari", abbreviation: "BA", code: 72 },
            { name: "Barletta-Andria-Trani", abbreviation: "BT", code: 72 },
            { name: "Belluno", abbreviation: "BL", code: 25 },
            { name: "Benevento", abbreviation: "BN", code: 62 },
            { name: "Bergamo", abbreviation: "BG", code: 16 },
            { name: "Biella", abbreviation: "BI", code: 96 },
            { name: "Bologna", abbreviation: "BO", code: 37 },
            { name: "Bolzano", abbreviation: "BZ", code: 21 },
            { name: "Brescia", abbreviation: "BS", code: 17 },
            { name: "Brindisi", abbreviation: "BR", code: 74 },
            { name: "Cagliari", abbreviation: "CA", code: 92 },
            { name: "Caltanissetta", abbreviation: "CL", code: 85 },
            { name: "Campobasso", abbreviation: "CB", code: 70 },
            { name: "Carbonia Iglesias", abbreviation: "CI", code: 70 },
            { name: "Caserta", abbreviation: "CE", code: 61 },
            { name: "Catania", abbreviation: "CT", code: 87 },
            { name: "Catanzaro", abbreviation: "CZ", code: 79 },
            { name: "Chieti", abbreviation: "CH", code: 69 },
            { name: "Como", abbreviation: "CO", code: 13 },
            { name: "Cosenza", abbreviation: "CS", code: 78 },
            { name: "Cremona", abbreviation: "CR", code: 19 },
            { name: "Crotone", abbreviation: "KR", code: 101 },
            { name: "Cuneo", abbreviation: "CN", code: 4 },
            { name: "Enna", abbreviation: "EN", code: 86 },
            { name: "Fermo", abbreviation: "FM", code: 86 },
            { name: "Ferrara", abbreviation: "FE", code: 38 },
            { name: "Firenze", abbreviation: "FI", code: 48 },
            { name: "Foggia", abbreviation: "FG", code: 71 },
            { name: "Forli-Cesena", abbreviation: "FC", code: 71 },
            { name: "Frosinone", abbreviation: "FR", code: 60 },
            { name: "Genova", abbreviation: "GE", code: 10 },
            { name: "Gorizia", abbreviation: "GO", code: 31 },
            { name: "Grosseto", abbreviation: "GR", code: 53 },
            { name: "Imperia", abbreviation: "IM", code: 8 },
            { name: "Isernia", abbreviation: "IS", code: 94 },
            { name: "La-Spezia", abbreviation: "SP", code: 66 },
            { name: "Latina", abbreviation: "LT", code: 59 },
            { name: "Lecce", abbreviation: "LE", code: 75 },
            { name: "Lecco", abbreviation: "LC", code: 97 },
            { name: "Livorno", abbreviation: "LI", code: 49 },
            { name: "Lodi", abbreviation: "LO", code: 98 },
            { name: "Lucca", abbreviation: "LU", code: 46 },
            { name: "Macerata", abbreviation: "MC", code: 43 },
            { name: "Mantova", abbreviation: "MN", code: 20 },
            { name: "Massa-Carrara", abbreviation: "MS", code: 45 },
            { name: "Matera", abbreviation: "MT", code: 77 },
            { name: "Medio Campidano", abbreviation: "VS", code: 77 },
            { name: "Messina", abbreviation: "ME", code: 83 },
            { name: "Milano", abbreviation: "MI", code: 15 },
            { name: "Modena", abbreviation: "MO", code: 36 },
            { name: "Monza-Brianza", abbreviation: "MB", code: 36 },
            { name: "Napoli", abbreviation: "NA", code: 63 },
            { name: "Novara", abbreviation: "NO", code: 3 },
            { name: "Nuoro", abbreviation: "NU", code: 91 },
            { name: "Ogliastra", abbreviation: "OG", code: 91 },
            { name: "Olbia Tempio", abbreviation: "OT", code: 91 },
            { name: "Oristano", abbreviation: "OR", code: 95 },
            { name: "Padova", abbreviation: "PD", code: 28 },
            { name: "Palermo", abbreviation: "PA", code: 82 },
            { name: "Parma", abbreviation: "PR", code: 34 },
            { name: "Pavia", abbreviation: "PV", code: 18 },
            { name: "Perugia", abbreviation: "PG", code: 54 },
            { name: "Pesaro-Urbino", abbreviation: "PU", code: 41 },
            { name: "Pescara", abbreviation: "PE", code: 68 },
            { name: "Piacenza", abbreviation: "PC", code: 33 },
            { name: "Pisa", abbreviation: "PI", code: 50 },
            { name: "Pistoia", abbreviation: "PT", code: 47 },
            { name: "Pordenone", abbreviation: "PN", code: 93 },
            { name: "Potenza", abbreviation: "PZ", code: 76 },
            { name: "Prato", abbreviation: "PO", code: 100 },
            { name: "Ragusa", abbreviation: "RG", code: 88 },
            { name: "Ravenna", abbreviation: "RA", code: 39 },
            { name: "Reggio-Calabria", abbreviation: "RC", code: 35 },
            { name: "Reggio-Emilia", abbreviation: "RE", code: 35 },
            { name: "Rieti", abbreviation: "RI", code: 57 },
            { name: "Rimini", abbreviation: "RN", code: 99 },
            { name: "Roma", abbreviation: "Roma", code: 58 },
            { name: "Rovigo", abbreviation: "RO", code: 29 },
            { name: "Salerno", abbreviation: "SA", code: 65 },
            { name: "Sassari", abbreviation: "SS", code: 90 },
            { name: "Savona", abbreviation: "SV", code: 9 },
            { name: "Siena", abbreviation: "SI", code: 52 },
            { name: "Siracusa", abbreviation: "SR", code: 89 },
            { name: "Sondrio", abbreviation: "SO", code: 14 },
            { name: "Taranto", abbreviation: "TA", code: 73 },
            { name: "Teramo", abbreviation: "TE", code: 67 },
            { name: "Terni", abbreviation: "TR", code: 55 },
            { name: "Torino", abbreviation: "TO", code: 1 },
            { name: "Trapani", abbreviation: "TP", code: 81 },
            { name: "Trento", abbreviation: "TN", code: 22 },
            { name: "Treviso", abbreviation: "TV", code: 26 },
            { name: "Trieste", abbreviation: "TS", code: 32 },
            { name: "Udine", abbreviation: "UD", code: 30 },
            { name: "Varese", abbreviation: "VA", code: 12 },
            { name: "Venezia", abbreviation: "VE", code: 27 },
            { name: "Verbania", abbreviation: "VB", code: 27 },
            { name: "Vercelli", abbreviation: "VC", code: 2 },
            { name: "Verona", abbreviation: "VR", code: 23 },
            { name: "Vibo-Valentia", abbreviation: "VV", code: 102 },
            { name: "Vicenza", abbreviation: "VI", code: 24 },
            { name: "Viterbo", abbreviation: "VT", code: 56 }
          ]
        },
        // from: https://github.com/samsargent/Useful-Autocomplete-Data/blob/master/data/nationalities.json
        nationalities: [
          { name: "Afghan" },
          { name: "Albanian" },
          { name: "Algerian" },
          { name: "American" },
          { name: "Andorran" },
          { name: "Angolan" },
          { name: "Antiguans" },
          { name: "Argentinean" },
          { name: "Armenian" },
          { name: "Australian" },
          { name: "Austrian" },
          { name: "Azerbaijani" },
          { name: "Bahami" },
          { name: "Bahraini" },
          { name: "Bangladeshi" },
          { name: "Barbadian" },
          { name: "Barbudans" },
          { name: "Batswana" },
          { name: "Belarusian" },
          { name: "Belgian" },
          { name: "Belizean" },
          { name: "Beninese" },
          { name: "Bhutanese" },
          { name: "Bolivian" },
          { name: "Bosnian" },
          { name: "Brazilian" },
          { name: "British" },
          { name: "Bruneian" },
          { name: "Bulgarian" },
          { name: "Burkinabe" },
          { name: "Burmese" },
          { name: "Burundian" },
          { name: "Cambodian" },
          { name: "Cameroonian" },
          { name: "Canadian" },
          { name: "Cape Verdean" },
          { name: "Central African" },
          { name: "Chadian" },
          { name: "Chilean" },
          { name: "Chinese" },
          { name: "Colombian" },
          { name: "Comoran" },
          { name: "Congolese" },
          { name: "Costa Rican" },
          { name: "Croatian" },
          { name: "Cuban" },
          { name: "Cypriot" },
          { name: "Czech" },
          { name: "Danish" },
          { name: "Djibouti" },
          { name: "Dominican" },
          { name: "Dutch" },
          { name: "East Timorese" },
          { name: "Ecuadorean" },
          { name: "Egyptian" },
          { name: "Emirian" },
          { name: "Equatorial Guinean" },
          { name: "Eritrean" },
          { name: "Estonian" },
          { name: "Ethiopian" },
          { name: "Fijian" },
          { name: "Filipino" },
          { name: "Finnish" },
          { name: "French" },
          { name: "Gabonese" },
          { name: "Gambian" },
          { name: "Georgian" },
          { name: "German" },
          { name: "Ghanaian" },
          { name: "Greek" },
          { name: "Grenadian" },
          { name: "Guatemalan" },
          { name: "Guinea-Bissauan" },
          { name: "Guinean" },
          { name: "Guyanese" },
          { name: "Haitian" },
          { name: "Herzegovinian" },
          { name: "Honduran" },
          { name: "Hungarian" },
          { name: "I-Kiribati" },
          { name: "Icelander" },
          { name: "Indian" },
          { name: "Indonesian" },
          { name: "Iranian" },
          { name: "Iraqi" },
          { name: "Irish" },
          { name: "Israeli" },
          { name: "Italian" },
          { name: "Ivorian" },
          { name: "Jamaican" },
          { name: "Japanese" },
          { name: "Jordanian" },
          { name: "Kazakhstani" },
          { name: "Kenyan" },
          { name: "Kittian and Nevisian" },
          { name: "Kuwaiti" },
          { name: "Kyrgyz" },
          { name: "Laotian" },
          { name: "Latvian" },
          { name: "Lebanese" },
          { name: "Liberian" },
          { name: "Libyan" },
          { name: "Liechtensteiner" },
          { name: "Lithuanian" },
          { name: "Luxembourger" },
          { name: "Macedonian" },
          { name: "Malagasy" },
          { name: "Malawian" },
          { name: "Malaysian" },
          { name: "Maldivan" },
          { name: "Malian" },
          { name: "Maltese" },
          { name: "Marshallese" },
          { name: "Mauritanian" },
          { name: "Mauritian" },
          { name: "Mexican" },
          { name: "Micronesian" },
          { name: "Moldovan" },
          { name: "Monacan" },
          { name: "Mongolian" },
          { name: "Moroccan" },
          { name: "Mosotho" },
          { name: "Motswana" },
          { name: "Mozambican" },
          { name: "Namibian" },
          { name: "Nauruan" },
          { name: "Nepalese" },
          { name: "New Zealander" },
          { name: "Nicaraguan" },
          { name: "Nigerian" },
          { name: "Nigerien" },
          { name: "North Korean" },
          { name: "Northern Irish" },
          { name: "Norwegian" },
          { name: "Omani" },
          { name: "Pakistani" },
          { name: "Palauan" },
          { name: "Panamanian" },
          { name: "Papua New Guinean" },
          { name: "Paraguayan" },
          { name: "Peruvian" },
          { name: "Polish" },
          { name: "Portuguese" },
          { name: "Qatari" },
          { name: "Romani" },
          { name: "Russian" },
          { name: "Rwandan" },
          { name: "Saint Lucian" },
          { name: "Salvadoran" },
          { name: "Samoan" },
          { name: "San Marinese" },
          { name: "Sao Tomean" },
          { name: "Saudi" },
          { name: "Scottish" },
          { name: "Senegalese" },
          { name: "Serbian" },
          { name: "Seychellois" },
          { name: "Sierra Leonean" },
          { name: "Singaporean" },
          { name: "Slovakian" },
          { name: "Slovenian" },
          { name: "Solomon Islander" },
          { name: "Somali" },
          { name: "South African" },
          { name: "South Korean" },
          { name: "Spanish" },
          { name: "Sri Lankan" },
          { name: "Sudanese" },
          { name: "Surinamer" },
          { name: "Swazi" },
          { name: "Swedish" },
          { name: "Swiss" },
          { name: "Syrian" },
          { name: "Taiwanese" },
          { name: "Tajik" },
          { name: "Tanzanian" },
          { name: "Thai" },
          { name: "Togolese" },
          { name: "Tongan" },
          { name: "Trinidadian or Tobagonian" },
          { name: "Tunisian" },
          { name: "Turkish" },
          { name: "Tuvaluan" },
          { name: "Ugandan" },
          { name: "Ukrainian" },
          { name: "Uruguaya" },
          { name: "Uzbekistani" },
          { name: "Venezuela" },
          { name: "Vietnamese" },
          { name: "Wels" },
          { name: "Yemenit" },
          { name: "Zambia" },
          { name: "Zimbabwe" }
        ],
        // http://www.loc.gov/standards/iso639-2/php/code_list.php (ISO-639-1 codes)
        locale_languages: [
          "aa",
          "ab",
          "ae",
          "af",
          "ak",
          "am",
          "an",
          "ar",
          "as",
          "av",
          "ay",
          "az",
          "ba",
          "be",
          "bg",
          "bh",
          "bi",
          "bm",
          "bn",
          "bo",
          "br",
          "bs",
          "ca",
          "ce",
          "ch",
          "co",
          "cr",
          "cs",
          "cu",
          "cv",
          "cy",
          "da",
          "de",
          "dv",
          "dz",
          "ee",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fa",
          "ff",
          "fi",
          "fj",
          "fo",
          "fr",
          "fy",
          "ga",
          "gd",
          "gl",
          "gn",
          "gu",
          "gv",
          "ha",
          "he",
          "hi",
          "ho",
          "hr",
          "ht",
          "hu",
          "hy",
          "hz",
          "ia",
          "id",
          "ie",
          "ig",
          "ii",
          "ik",
          "io",
          "is",
          "it",
          "iu",
          "ja",
          "jv",
          "ka",
          "kg",
          "ki",
          "kj",
          "kk",
          "kl",
          "km",
          "kn",
          "ko",
          "kr",
          "ks",
          "ku",
          "kv",
          "kw",
          "ky",
          "la",
          "lb",
          "lg",
          "li",
          "ln",
          "lo",
          "lt",
          "lu",
          "lv",
          "mg",
          "mh",
          "mi",
          "mk",
          "ml",
          "mn",
          "mr",
          "ms",
          "mt",
          "my",
          "na",
          "nb",
          "nd",
          "ne",
          "ng",
          "nl",
          "nn",
          "no",
          "nr",
          "nv",
          "ny",
          "oc",
          "oj",
          "om",
          "or",
          "os",
          "pa",
          "pi",
          "pl",
          "ps",
          "pt",
          "qu",
          "rm",
          "rn",
          "ro",
          "ru",
          "rw",
          "sa",
          "sc",
          "sd",
          "se",
          "sg",
          "si",
          "sk",
          "sl",
          "sm",
          "sn",
          "so",
          "sq",
          "sr",
          "ss",
          "st",
          "su",
          "sv",
          "sw",
          "ta",
          "te",
          "tg",
          "th",
          "ti",
          "tk",
          "tl",
          "tn",
          "to",
          "tr",
          "ts",
          "tt",
          "tw",
          "ty",
          "ug",
          "uk",
          "ur",
          "uz",
          "ve",
          "vi",
          "vo",
          "wa",
          "wo",
          "xh",
          "yi",
          "yo",
          "za",
          "zh",
          "zu"
        ],
        // From http://data.okfn.org/data/core/language-codes#resource-language-codes-full (IETF language tags)
        locale_regions: [
          "agq-CM",
          "asa-TZ",
          "ast-ES",
          "bas-CM",
          "bem-ZM",
          "bez-TZ",
          "brx-IN",
          "cgg-UG",
          "chr-US",
          "dav-KE",
          "dje-NE",
          "dsb-DE",
          "dua-CM",
          "dyo-SN",
          "ebu-KE",
          "ewo-CM",
          "fil-PH",
          "fur-IT",
          "gsw-CH",
          "gsw-FR",
          "gsw-LI",
          "guz-KE",
          "haw-US",
          "hsb-DE",
          "jgo-CM",
          "jmc-TZ",
          "kab-DZ",
          "kam-KE",
          "kde-TZ",
          "kea-CV",
          "khq-ML",
          "kkj-CM",
          "kln-KE",
          "kok-IN",
          "ksb-TZ",
          "ksf-CM",
          "ksh-DE",
          "lag-TZ",
          "lkt-US",
          "luo-KE",
          "luy-KE",
          "mas-KE",
          "mas-TZ",
          "mer-KE",
          "mfe-MU",
          "mgh-MZ",
          "mgo-CM",
          "mua-CM",
          "naq-NA",
          "nmg-CM",
          "nnh-CM",
          "nus-SD",
          "nyn-UG",
          "rof-TZ",
          "rwk-TZ",
          "sah-RU",
          "saq-KE",
          "sbp-TZ",
          "seh-MZ",
          "ses-ML",
          "shi-Latn",
          "shi-Latn-MA",
          "shi-Tfng",
          "shi-Tfng-MA",
          "smn-FI",
          "teo-KE",
          "teo-UG",
          "twq-NE",
          "tzm-Latn",
          "tzm-Latn-MA",
          "vai-Latn",
          "vai-Latn-LR",
          "vai-Vaii",
          "vai-Vaii-LR",
          "vun-TZ",
          "wae-CH",
          "xog-UG",
          "yav-CM",
          "zgh-MA",
          "af-NA",
          "af-ZA",
          "ak-GH",
          "am-ET",
          "ar-001",
          "ar-AE",
          "ar-BH",
          "ar-DJ",
          "ar-DZ",
          "ar-EG",
          "ar-EH",
          "ar-ER",
          "ar-IL",
          "ar-IQ",
          "ar-JO",
          "ar-KM",
          "ar-KW",
          "ar-LB",
          "ar-LY",
          "ar-MA",
          "ar-MR",
          "ar-OM",
          "ar-PS",
          "ar-QA",
          "ar-SA",
          "ar-SD",
          "ar-SO",
          "ar-SS",
          "ar-SY",
          "ar-TD",
          "ar-TN",
          "ar-YE",
          "as-IN",
          "az-Cyrl",
          "az-Cyrl-AZ",
          "az-Latn",
          "az-Latn-AZ",
          "be-BY",
          "bg-BG",
          "bm-Latn",
          "bm-Latn-ML",
          "bn-BD",
          "bn-IN",
          "bo-CN",
          "bo-IN",
          "br-FR",
          "bs-Cyrl",
          "bs-Cyrl-BA",
          "bs-Latn",
          "bs-Latn-BA",
          "ca-AD",
          "ca-ES",
          "ca-ES-VALENCIA",
          "ca-FR",
          "ca-IT",
          "cs-CZ",
          "cy-GB",
          "da-DK",
          "da-GL",
          "de-AT",
          "de-BE",
          "de-CH",
          "de-DE",
          "de-LI",
          "de-LU",
          "dz-BT",
          "ee-GH",
          "ee-TG",
          "el-CY",
          "el-GR",
          "en-001",
          "en-150",
          "en-AG",
          "en-AI",
          "en-AS",
          "en-AU",
          "en-BB",
          "en-BE",
          "en-BM",
          "en-BS",
          "en-BW",
          "en-BZ",
          "en-CA",
          "en-CC",
          "en-CK",
          "en-CM",
          "en-CX",
          "en-DG",
          "en-DM",
          "en-ER",
          "en-FJ",
          "en-FK",
          "en-FM",
          "en-GB",
          "en-GD",
          "en-GG",
          "en-GH",
          "en-GI",
          "en-GM",
          "en-GU",
          "en-GY",
          "en-HK",
          "en-IE",
          "en-IM",
          "en-IN",
          "en-IO",
          "en-JE",
          "en-JM",
          "en-KE",
          "en-KI",
          "en-KN",
          "en-KY",
          "en-LC",
          "en-LR",
          "en-LS",
          "en-MG",
          "en-MH",
          "en-MO",
          "en-MP",
          "en-MS",
          "en-MT",
          "en-MU",
          "en-MW",
          "en-MY",
          "en-NA",
          "en-NF",
          "en-NG",
          "en-NR",
          "en-NU",
          "en-NZ",
          "en-PG",
          "en-PH",
          "en-PK",
          "en-PN",
          "en-PR",
          "en-PW",
          "en-RW",
          "en-SB",
          "en-SC",
          "en-SD",
          "en-SG",
          "en-SH",
          "en-SL",
          "en-SS",
          "en-SX",
          "en-SZ",
          "en-TC",
          "en-TK",
          "en-TO",
          "en-TT",
          "en-TV",
          "en-TZ",
          "en-UG",
          "en-UM",
          "en-US",
          "en-US-POSIX",
          "en-VC",
          "en-VG",
          "en-VI",
          "en-VU",
          "en-WS",
          "en-ZA",
          "en-ZM",
          "en-ZW",
          "eo-001",
          "es-419",
          "es-AR",
          "es-BO",
          "es-CL",
          "es-CO",
          "es-CR",
          "es-CU",
          "es-DO",
          "es-EA",
          "es-EC",
          "es-ES",
          "es-GQ",
          "es-GT",
          "es-HN",
          "es-IC",
          "es-MX",
          "es-NI",
          "es-PA",
          "es-PE",
          "es-PH",
          "es-PR",
          "es-PY",
          "es-SV",
          "es-US",
          "es-UY",
          "es-VE",
          "et-EE",
          "eu-ES",
          "fa-AF",
          "fa-IR",
          "ff-CM",
          "ff-GN",
          "ff-MR",
          "ff-SN",
          "fi-FI",
          "fo-FO",
          "fr-BE",
          "fr-BF",
          "fr-BI",
          "fr-BJ",
          "fr-BL",
          "fr-CA",
          "fr-CD",
          "fr-CF",
          "fr-CG",
          "fr-CH",
          "fr-CI",
          "fr-CM",
          "fr-DJ",
          "fr-DZ",
          "fr-FR",
          "fr-GA",
          "fr-GF",
          "fr-GN",
          "fr-GP",
          "fr-GQ",
          "fr-HT",
          "fr-KM",
          "fr-LU",
          "fr-MA",
          "fr-MC",
          "fr-MF",
          "fr-MG",
          "fr-ML",
          "fr-MQ",
          "fr-MR",
          "fr-MU",
          "fr-NC",
          "fr-NE",
          "fr-PF",
          "fr-PM",
          "fr-RE",
          "fr-RW",
          "fr-SC",
          "fr-SN",
          "fr-SY",
          "fr-TD",
          "fr-TG",
          "fr-TN",
          "fr-VU",
          "fr-WF",
          "fr-YT",
          "fy-NL",
          "ga-IE",
          "gd-GB",
          "gl-ES",
          "gu-IN",
          "gv-IM",
          "ha-Latn",
          "ha-Latn-GH",
          "ha-Latn-NE",
          "ha-Latn-NG",
          "he-IL",
          "hi-IN",
          "hr-BA",
          "hr-HR",
          "hu-HU",
          "hy-AM",
          "id-ID",
          "ig-NG",
          "ii-CN",
          "is-IS",
          "it-CH",
          "it-IT",
          "it-SM",
          "ja-JP",
          "ka-GE",
          "ki-KE",
          "kk-Cyrl",
          "kk-Cyrl-KZ",
          "kl-GL",
          "km-KH",
          "kn-IN",
          "ko-KP",
          "ko-KR",
          "ks-Arab",
          "ks-Arab-IN",
          "kw-GB",
          "ky-Cyrl",
          "ky-Cyrl-KG",
          "lb-LU",
          "lg-UG",
          "ln-AO",
          "ln-CD",
          "ln-CF",
          "ln-CG",
          "lo-LA",
          "lt-LT",
          "lu-CD",
          "lv-LV",
          "mg-MG",
          "mk-MK",
          "ml-IN",
          "mn-Cyrl",
          "mn-Cyrl-MN",
          "mr-IN",
          "ms-Latn",
          "ms-Latn-BN",
          "ms-Latn-MY",
          "ms-Latn-SG",
          "mt-MT",
          "my-MM",
          "nb-NO",
          "nb-SJ",
          "nd-ZW",
          "ne-IN",
          "ne-NP",
          "nl-AW",
          "nl-BE",
          "nl-BQ",
          "nl-CW",
          "nl-NL",
          "nl-SR",
          "nl-SX",
          "nn-NO",
          "om-ET",
          "om-KE",
          "or-IN",
          "os-GE",
          "os-RU",
          "pa-Arab",
          "pa-Arab-PK",
          "pa-Guru",
          "pa-Guru-IN",
          "pl-PL",
          "ps-AF",
          "pt-AO",
          "pt-BR",
          "pt-CV",
          "pt-GW",
          "pt-MO",
          "pt-MZ",
          "pt-PT",
          "pt-ST",
          "pt-TL",
          "qu-BO",
          "qu-EC",
          "qu-PE",
          "rm-CH",
          "rn-BI",
          "ro-MD",
          "ro-RO",
          "ru-BY",
          "ru-KG",
          "ru-KZ",
          "ru-MD",
          "ru-RU",
          "ru-UA",
          "rw-RW",
          "se-FI",
          "se-NO",
          "se-SE",
          "sg-CF",
          "si-LK",
          "sk-SK",
          "sl-SI",
          "sn-ZW",
          "so-DJ",
          "so-ET",
          "so-KE",
          "so-SO",
          "sq-AL",
          "sq-MK",
          "sq-XK",
          "sr-Cyrl",
          "sr-Cyrl-BA",
          "sr-Cyrl-ME",
          "sr-Cyrl-RS",
          "sr-Cyrl-XK",
          "sr-Latn",
          "sr-Latn-BA",
          "sr-Latn-ME",
          "sr-Latn-RS",
          "sr-Latn-XK",
          "sv-AX",
          "sv-FI",
          "sv-SE",
          "sw-CD",
          "sw-KE",
          "sw-TZ",
          "sw-UG",
          "ta-IN",
          "ta-LK",
          "ta-MY",
          "ta-SG",
          "te-IN",
          "th-TH",
          "ti-ER",
          "ti-ET",
          "to-TO",
          "tr-CY",
          "tr-TR",
          "ug-Arab",
          "ug-Arab-CN",
          "uk-UA",
          "ur-IN",
          "ur-PK",
          "uz-Arab",
          "uz-Arab-AF",
          "uz-Cyrl",
          "uz-Cyrl-UZ",
          "uz-Latn",
          "uz-Latn-UZ",
          "vi-VN",
          "yi-001",
          "yo-BJ",
          "yo-NG",
          "zh-Hans",
          "zh-Hans-CN",
          "zh-Hans-HK",
          "zh-Hans-MO",
          "zh-Hans-SG",
          "zh-Hant",
          "zh-Hant-HK",
          "zh-Hant-MO",
          "zh-Hant-TW",
          "zu-ZA"
        ],
        us_states_and_dc: [
          { name: "Alabama", abbreviation: "AL" },
          { name: "Alaska", abbreviation: "AK" },
          { name: "Arizona", abbreviation: "AZ" },
          { name: "Arkansas", abbreviation: "AR" },
          { name: "California", abbreviation: "CA" },
          { name: "Colorado", abbreviation: "CO" },
          { name: "Connecticut", abbreviation: "CT" },
          { name: "Delaware", abbreviation: "DE" },
          { name: "District of Columbia", abbreviation: "DC" },
          { name: "Florida", abbreviation: "FL" },
          { name: "Georgia", abbreviation: "GA" },
          { name: "Hawaii", abbreviation: "HI" },
          { name: "Idaho", abbreviation: "ID" },
          { name: "Illinois", abbreviation: "IL" },
          { name: "Indiana", abbreviation: "IN" },
          { name: "Iowa", abbreviation: "IA" },
          { name: "Kansas", abbreviation: "KS" },
          { name: "Kentucky", abbreviation: "KY" },
          { name: "Louisiana", abbreviation: "LA" },
          { name: "Maine", abbreviation: "ME" },
          { name: "Maryland", abbreviation: "MD" },
          { name: "Massachusetts", abbreviation: "MA" },
          { name: "Michigan", abbreviation: "MI" },
          { name: "Minnesota", abbreviation: "MN" },
          { name: "Mississippi", abbreviation: "MS" },
          { name: "Missouri", abbreviation: "MO" },
          { name: "Montana", abbreviation: "MT" },
          { name: "Nebraska", abbreviation: "NE" },
          { name: "Nevada", abbreviation: "NV" },
          { name: "New Hampshire", abbreviation: "NH" },
          { name: "New Jersey", abbreviation: "NJ" },
          { name: "New Mexico", abbreviation: "NM" },
          { name: "New York", abbreviation: "NY" },
          { name: "North Carolina", abbreviation: "NC" },
          { name: "North Dakota", abbreviation: "ND" },
          { name: "Ohio", abbreviation: "OH" },
          { name: "Oklahoma", abbreviation: "OK" },
          { name: "Oregon", abbreviation: "OR" },
          { name: "Pennsylvania", abbreviation: "PA" },
          { name: "Rhode Island", abbreviation: "RI" },
          { name: "South Carolina", abbreviation: "SC" },
          { name: "South Dakota", abbreviation: "SD" },
          { name: "Tennessee", abbreviation: "TN" },
          { name: "Texas", abbreviation: "TX" },
          { name: "Utah", abbreviation: "UT" },
          { name: "Vermont", abbreviation: "VT" },
          { name: "Virginia", abbreviation: "VA" },
          { name: "Washington", abbreviation: "WA" },
          { name: "West Virginia", abbreviation: "WV" },
          { name: "Wisconsin", abbreviation: "WI" },
          { name: "Wyoming", abbreviation: "WY" }
        ],
        territories: [
          { name: "American Samoa", abbreviation: "AS" },
          { name: "Federated States of Micronesia", abbreviation: "FM" },
          { name: "Guam", abbreviation: "GU" },
          { name: "Marshall Islands", abbreviation: "MH" },
          { name: "Northern Mariana Islands", abbreviation: "MP" },
          { name: "Puerto Rico", abbreviation: "PR" },
          { name: "Virgin Islands, U.S.", abbreviation: "VI" }
        ],
        armed_forces: [
          { name: "Armed Forces Europe", abbreviation: "AE" },
          { name: "Armed Forces Pacific", abbreviation: "AP" },
          { name: "Armed Forces the Americas", abbreviation: "AA" }
        ],
        country_regions: {
          it: [
            { name: "Valle d'Aosta", abbreviation: "VDA" },
            { name: "Piemonte", abbreviation: "PIE" },
            { name: "Lombardia", abbreviation: "LOM" },
            { name: "Veneto", abbreviation: "VEN" },
            { name: "Trentino Alto Adige", abbreviation: "TAA" },
            { name: "Friuli Venezia Giulia", abbreviation: "FVG" },
            { name: "Liguria", abbreviation: "LIG" },
            { name: "Emilia Romagna", abbreviation: "EMR" },
            { name: "Toscana", abbreviation: "TOS" },
            { name: "Umbria", abbreviation: "UMB" },
            { name: "Marche", abbreviation: "MAR" },
            { name: "Abruzzo", abbreviation: "ABR" },
            { name: "Lazio", abbreviation: "LAZ" },
            { name: "Campania", abbreviation: "CAM" },
            { name: "Puglia", abbreviation: "PUG" },
            { name: "Basilicata", abbreviation: "BAS" },
            { name: "Molise", abbreviation: "MOL" },
            { name: "Calabria", abbreviation: "CAL" },
            { name: "Sicilia", abbreviation: "SIC" },
            { name: "Sardegna", abbreviation: "SAR" }
          ],
          mx: [
            { name: "Aguascalientes", abbreviation: "AGU" },
            { name: "Baja California", abbreviation: "BCN" },
            { name: "Baja California Sur", abbreviation: "BCS" },
            { name: "Campeche", abbreviation: "CAM" },
            { name: "Chiapas", abbreviation: "CHP" },
            { name: "Chihuahua", abbreviation: "CHH" },
            { name: "Ciudad de M\xE9xico", abbreviation: "DIF" },
            { name: "Coahuila", abbreviation: "COA" },
            { name: "Colima", abbreviation: "COL" },
            { name: "Durango", abbreviation: "DUR" },
            { name: "Guanajuato", abbreviation: "GUA" },
            { name: "Guerrero", abbreviation: "GRO" },
            { name: "Hidalgo", abbreviation: "HID" },
            { name: "Jalisco", abbreviation: "JAL" },
            { name: "M\xE9xico", abbreviation: "MEX" },
            { name: "Michoac\xE1n", abbreviation: "MIC" },
            { name: "Morelos", abbreviation: "MOR" },
            { name: "Nayarit", abbreviation: "NAY" },
            { name: "Nuevo Le\xF3n", abbreviation: "NLE" },
            { name: "Oaxaca", abbreviation: "OAX" },
            { name: "Puebla", abbreviation: "PUE" },
            { name: "Quer\xE9taro", abbreviation: "QUE" },
            { name: "Quintana Roo", abbreviation: "ROO" },
            { name: "San Luis Potos\xED", abbreviation: "SLP" },
            { name: "Sinaloa", abbreviation: "SIN" },
            { name: "Sonora", abbreviation: "SON" },
            { name: "Tabasco", abbreviation: "TAB" },
            { name: "Tamaulipas", abbreviation: "TAM" },
            { name: "Tlaxcala", abbreviation: "TLA" },
            { name: "Veracruz", abbreviation: "VER" },
            { name: "Yucat\xE1n", abbreviation: "YUC" },
            { name: "Zacatecas", abbreviation: "ZAC" }
          ]
        },
        street_suffixes: {
          us: [
            { name: "Avenue", abbreviation: "Ave" },
            { name: "Boulevard", abbreviation: "Blvd" },
            { name: "Center", abbreviation: "Ctr" },
            { name: "Circle", abbreviation: "Cir" },
            { name: "Court", abbreviation: "Ct" },
            { name: "Drive", abbreviation: "Dr" },
            { name: "Extension", abbreviation: "Ext" },
            { name: "Glen", abbreviation: "Gln" },
            { name: "Grove", abbreviation: "Grv" },
            { name: "Heights", abbreviation: "Hts" },
            { name: "Highway", abbreviation: "Hwy" },
            { name: "Junction", abbreviation: "Jct" },
            { name: "Key", abbreviation: "Key" },
            { name: "Lane", abbreviation: "Ln" },
            { name: "Loop", abbreviation: "Loop" },
            { name: "Manor", abbreviation: "Mnr" },
            { name: "Mill", abbreviation: "Mill" },
            { name: "Park", abbreviation: "Park" },
            { name: "Parkway", abbreviation: "Pkwy" },
            { name: "Pass", abbreviation: "Pass" },
            { name: "Path", abbreviation: "Path" },
            { name: "Pike", abbreviation: "Pike" },
            { name: "Place", abbreviation: "Pl" },
            { name: "Plaza", abbreviation: "Plz" },
            { name: "Point", abbreviation: "Pt" },
            { name: "Ridge", abbreviation: "Rdg" },
            { name: "River", abbreviation: "Riv" },
            { name: "Road", abbreviation: "Rd" },
            { name: "Square", abbreviation: "Sq" },
            { name: "Street", abbreviation: "St" },
            { name: "Terrace", abbreviation: "Ter" },
            { name: "Trail", abbreviation: "Trl" },
            { name: "Turnpike", abbreviation: "Tpke" },
            { name: "View", abbreviation: "Vw" },
            { name: "Way", abbreviation: "Way" }
          ],
          it: [
            { name: "Accesso", abbreviation: "Acc." },
            { name: "Alzaia", abbreviation: "Alz." },
            { name: "Arco", abbreviation: "Arco" },
            { name: "Archivolto", abbreviation: "Acv." },
            { name: "Arena", abbreviation: "Arena" },
            { name: "Argine", abbreviation: "Argine" },
            { name: "Bacino", abbreviation: "Bacino" },
            { name: "Banchi", abbreviation: "Banchi" },
            { name: "Banchina", abbreviation: "Ban." },
            { name: "Bastioni", abbreviation: "Bas." },
            { name: "Belvedere", abbreviation: "Belv." },
            { name: "Borgata", abbreviation: "B.ta" },
            { name: "Borgo", abbreviation: "B.go" },
            { name: "Calata", abbreviation: "Cal." },
            { name: "Calle", abbreviation: "Calle" },
            { name: "Campiello", abbreviation: "Cam." },
            { name: "Campo", abbreviation: "Cam." },
            { name: "Canale", abbreviation: "Can." },
            { name: "Carraia", abbreviation: "Carr." },
            { name: "Cascina", abbreviation: "Cascina" },
            { name: "Case sparse", abbreviation: "c.s." },
            { name: "Cavalcavia", abbreviation: "Cv." },
            { name: "Circonvallazione", abbreviation: "Cv." },
            { name: "Complanare", abbreviation: "C.re" },
            { name: "Contrada", abbreviation: "C.da" },
            { name: "Corso", abbreviation: "C.so" },
            { name: "Corte", abbreviation: "C.te" },
            { name: "Cortile", abbreviation: "C.le" },
            { name: "Diramazione", abbreviation: "Dir." },
            { name: "Fondaco", abbreviation: "F.co" },
            { name: "Fondamenta", abbreviation: "F.ta" },
            { name: "Fondo", abbreviation: "F.do" },
            { name: "Frazione", abbreviation: "Fr." },
            { name: "Isola", abbreviation: "Is." },
            { name: "Largo", abbreviation: "L.go" },
            { name: "Litoranea", abbreviation: "Lit." },
            { name: "Lungolago", abbreviation: "L.go lago" },
            { name: "Lungo Po", abbreviation: "l.go Po" },
            { name: "Molo", abbreviation: "Molo" },
            { name: "Mura", abbreviation: "Mura" },
            { name: "Passaggio privato", abbreviation: "pass. priv." },
            { name: "Passeggiata", abbreviation: "Pass." },
            { name: "Piazza", abbreviation: "P.zza" },
            { name: "Piazzale", abbreviation: "P.le" },
            { name: "Ponte", abbreviation: "P.te" },
            { name: "Portico", abbreviation: "P.co" },
            { name: "Rampa", abbreviation: "Rampa" },
            { name: "Regione", abbreviation: "Reg." },
            { name: "Rione", abbreviation: "R.ne" },
            { name: "Rio", abbreviation: "Rio" },
            { name: "Ripa", abbreviation: "Ripa" },
            { name: "Riva", abbreviation: "Riva" },
            { name: "Rond\xF2", abbreviation: "Rond\xF2" },
            { name: "Rotonda", abbreviation: "Rot." },
            { name: "Sagrato", abbreviation: "Sagr." },
            { name: "Salita", abbreviation: "Sal." },
            { name: "Scalinata", abbreviation: "Scal." },
            { name: "Scalone", abbreviation: "Scal." },
            { name: "Slargo", abbreviation: "Sl." },
            { name: "Sottoportico", abbreviation: "Sott." },
            { name: "Strada", abbreviation: "Str." },
            { name: "Stradale", abbreviation: "Str.le" },
            { name: "Strettoia", abbreviation: "Strett." },
            { name: "Traversa", abbreviation: "Trav." },
            { name: "Via", abbreviation: "V." },
            { name: "Viale", abbreviation: "V.le" },
            { name: "Vicinale", abbreviation: "Vic.le" },
            { name: "Vicolo", abbreviation: "Vic." }
          ],
          uk: [
            { name: "Avenue", abbreviation: "Ave" },
            { name: "Close", abbreviation: "Cl" },
            { name: "Court", abbreviation: "Ct" },
            { name: "Crescent", abbreviation: "Cr" },
            { name: "Drive", abbreviation: "Dr" },
            { name: "Garden", abbreviation: "Gdn" },
            { name: "Gardens", abbreviation: "Gdns" },
            { name: "Green", abbreviation: "Gn" },
            { name: "Grove", abbreviation: "Gr" },
            { name: "Lane", abbreviation: "Ln" },
            { name: "Mount", abbreviation: "Mt" },
            { name: "Place", abbreviation: "Pl" },
            { name: "Park", abbreviation: "Pk" },
            { name: "Ridge", abbreviation: "Rdg" },
            { name: "Road", abbreviation: "Rd" },
            { name: "Square", abbreviation: "Sq" },
            { name: "Street", abbreviation: "St" },
            { name: "Terrace", abbreviation: "Ter" },
            { name: "Valley", abbreviation: "Val" }
          ]
        },
        months: [
          { name: "January", short_name: "Jan", numeric: "01", days: 31 },
          // Not messing with leap years...
          { name: "February", short_name: "Feb", numeric: "02", days: 28 },
          { name: "March", short_name: "Mar", numeric: "03", days: 31 },
          { name: "April", short_name: "Apr", numeric: "04", days: 30 },
          { name: "May", short_name: "May", numeric: "05", days: 31 },
          { name: "June", short_name: "Jun", numeric: "06", days: 30 },
          { name: "July", short_name: "Jul", numeric: "07", days: 31 },
          { name: "August", short_name: "Aug", numeric: "08", days: 31 },
          { name: "September", short_name: "Sep", numeric: "09", days: 30 },
          { name: "October", short_name: "Oct", numeric: "10", days: 31 },
          { name: "November", short_name: "Nov", numeric: "11", days: 30 },
          { name: "December", short_name: "Dec", numeric: "12", days: 31 }
        ],
        // http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
        cc_types: [
          { name: "American Express", short_name: "amex", prefix: "34", length: 15 },
          { name: "Bankcard", short_name: "bankcard", prefix: "5610", length: 16 },
          { name: "China UnionPay", short_name: "chinaunion", prefix: "62", length: 16 },
          { name: "Diners Club Carte Blanche", short_name: "dccarte", prefix: "300", length: 14 },
          { name: "Diners Club enRoute", short_name: "dcenroute", prefix: "2014", length: 15 },
          { name: "Diners Club International", short_name: "dcintl", prefix: "36", length: 14 },
          { name: "Diners Club United States & Canada", short_name: "dcusc", prefix: "54", length: 16 },
          { name: "Discover Card", short_name: "discover", prefix: "6011", length: 16 },
          { name: "InstaPayment", short_name: "instapay", prefix: "637", length: 16 },
          { name: "JCB", short_name: "jcb", prefix: "3528", length: 16 },
          { name: "Laser", short_name: "laser", prefix: "6304", length: 16 },
          { name: "Maestro", short_name: "maestro", prefix: "5018", length: 16 },
          { name: "Mastercard", short_name: "mc", prefix: "51", length: 16 },
          { name: "Solo", short_name: "solo", prefix: "6334", length: 16 },
          { name: "Switch", short_name: "switch", prefix: "4903", length: 16 },
          { name: "Visa", short_name: "visa", prefix: "4", length: 16 },
          { name: "Visa Electron", short_name: "electron", prefix: "4026", length: 16 }
        ],
        //return all world currency by ISO 4217
        currency_types: [
          { code: "AED", name: "United Arab Emirates Dirham" },
          { code: "AFN", name: "Afghanistan Afghani" },
          { code: "ALL", name: "Albania Lek" },
          { code: "AMD", name: "Armenia Dram" },
          { code: "ANG", name: "Netherlands Antilles Guilder" },
          { code: "AOA", name: "Angola Kwanza" },
          { code: "ARS", name: "Argentina Peso" },
          { code: "AUD", name: "Australia Dollar" },
          { code: "AWG", name: "Aruba Guilder" },
          { code: "AZN", name: "Azerbaijan New Manat" },
          { code: "BAM", name: "Bosnia and Herzegovina Convertible Marka" },
          { code: "BBD", name: "Barbados Dollar" },
          { code: "BDT", name: "Bangladesh Taka" },
          { code: "BGN", name: "Bulgaria Lev" },
          { code: "BHD", name: "Bahrain Dinar" },
          { code: "BIF", name: "Burundi Franc" },
          { code: "BMD", name: "Bermuda Dollar" },
          { code: "BND", name: "Brunei Darussalam Dollar" },
          { code: "BOB", name: "Bolivia Boliviano" },
          { code: "BRL", name: "Brazil Real" },
          { code: "BSD", name: "Bahamas Dollar" },
          { code: "BTN", name: "Bhutan Ngultrum" },
          { code: "BWP", name: "Botswana Pula" },
          { code: "BYR", name: "Belarus Ruble" },
          { code: "BZD", name: "Belize Dollar" },
          { code: "CAD", name: "Canada Dollar" },
          { code: "CDF", name: "Congo/Kinshasa Franc" },
          { code: "CHF", name: "Switzerland Franc" },
          { code: "CLP", name: "Chile Peso" },
          { code: "CNY", name: "China Yuan Renminbi" },
          { code: "COP", name: "Colombia Peso" },
          { code: "CRC", name: "Costa Rica Colon" },
          { code: "CUC", name: "Cuba Convertible Peso" },
          { code: "CUP", name: "Cuba Peso" },
          { code: "CVE", name: "Cape Verde Escudo" },
          { code: "CZK", name: "Czech Republic Koruna" },
          { code: "DJF", name: "Djibouti Franc" },
          { code: "DKK", name: "Denmark Krone" },
          { code: "DOP", name: "Dominican Republic Peso" },
          { code: "DZD", name: "Algeria Dinar" },
          { code: "EGP", name: "Egypt Pound" },
          { code: "ERN", name: "Eritrea Nakfa" },
          { code: "ETB", name: "Ethiopia Birr" },
          { code: "EUR", name: "Euro Member Countries" },
          { code: "FJD", name: "Fiji Dollar" },
          { code: "FKP", name: "Falkland Islands (Malvinas) Pound" },
          { code: "GBP", name: "United Kingdom Pound" },
          { code: "GEL", name: "Georgia Lari" },
          { code: "GGP", name: "Guernsey Pound" },
          { code: "GHS", name: "Ghana Cedi" },
          { code: "GIP", name: "Gibraltar Pound" },
          { code: "GMD", name: "Gambia Dalasi" },
          { code: "GNF", name: "Guinea Franc" },
          { code: "GTQ", name: "Guatemala Quetzal" },
          { code: "GYD", name: "Guyana Dollar" },
          { code: "HKD", name: "Hong Kong Dollar" },
          { code: "HNL", name: "Honduras Lempira" },
          { code: "HRK", name: "Croatia Kuna" },
          { code: "HTG", name: "Haiti Gourde" },
          { code: "HUF", name: "Hungary Forint" },
          { code: "IDR", name: "Indonesia Rupiah" },
          { code: "ILS", name: "Israel Shekel" },
          { code: "IMP", name: "Isle of Man Pound" },
          { code: "INR", name: "India Rupee" },
          { code: "IQD", name: "Iraq Dinar" },
          { code: "IRR", name: "Iran Rial" },
          { code: "ISK", name: "Iceland Krona" },
          { code: "JEP", name: "Jersey Pound" },
          { code: "JMD", name: "Jamaica Dollar" },
          { code: "JOD", name: "Jordan Dinar" },
          { code: "JPY", name: "Japan Yen" },
          { code: "KES", name: "Kenya Shilling" },
          { code: "KGS", name: "Kyrgyzstan Som" },
          { code: "KHR", name: "Cambodia Riel" },
          { code: "KMF", name: "Comoros Franc" },
          { code: "KPW", name: "Korea (North) Won" },
          { code: "KRW", name: "Korea (South) Won" },
          { code: "KWD", name: "Kuwait Dinar" },
          { code: "KYD", name: "Cayman Islands Dollar" },
          { code: "KZT", name: "Kazakhstan Tenge" },
          { code: "LAK", name: "Laos Kip" },
          { code: "LBP", name: "Lebanon Pound" },
          { code: "LKR", name: "Sri Lanka Rupee" },
          { code: "LRD", name: "Liberia Dollar" },
          { code: "LSL", name: "Lesotho Loti" },
          { code: "LTL", name: "Lithuania Litas" },
          { code: "LYD", name: "Libya Dinar" },
          { code: "MAD", name: "Morocco Dirham" },
          { code: "MDL", name: "Moldova Leu" },
          { code: "MGA", name: "Madagascar Ariary" },
          { code: "MKD", name: "Macedonia Denar" },
          { code: "MMK", name: "Myanmar (Burma) Kyat" },
          { code: "MNT", name: "Mongolia Tughrik" },
          { code: "MOP", name: "Macau Pataca" },
          { code: "MRO", name: "Mauritania Ouguiya" },
          { code: "MUR", name: "Mauritius Rupee" },
          { code: "MVR", name: "Maldives (Maldive Islands) Rufiyaa" },
          { code: "MWK", name: "Malawi Kwacha" },
          { code: "MXN", name: "Mexico Peso" },
          { code: "MYR", name: "Malaysia Ringgit" },
          { code: "MZN", name: "Mozambique Metical" },
          { code: "NAD", name: "Namibia Dollar" },
          { code: "NGN", name: "Nigeria Naira" },
          { code: "NIO", name: "Nicaragua Cordoba" },
          { code: "NOK", name: "Norway Krone" },
          { code: "NPR", name: "Nepal Rupee" },
          { code: "NZD", name: "New Zealand Dollar" },
          { code: "OMR", name: "Oman Rial" },
          { code: "PAB", name: "Panama Balboa" },
          { code: "PEN", name: "Peru Nuevo Sol" },
          { code: "PGK", name: "Papua New Guinea Kina" },
          { code: "PHP", name: "Philippines Peso" },
          { code: "PKR", name: "Pakistan Rupee" },
          { code: "PLN", name: "Poland Zloty" },
          { code: "PYG", name: "Paraguay Guarani" },
          { code: "QAR", name: "Qatar Riyal" },
          { code: "RON", name: "Romania New Leu" },
          { code: "RSD", name: "Serbia Dinar" },
          { code: "RUB", name: "Russia Ruble" },
          { code: "RWF", name: "Rwanda Franc" },
          { code: "SAR", name: "Saudi Arabia Riyal" },
          { code: "SBD", name: "Solomon Islands Dollar" },
          { code: "SCR", name: "Seychelles Rupee" },
          { code: "SDG", name: "Sudan Pound" },
          { code: "SEK", name: "Sweden Krona" },
          { code: "SGD", name: "Singapore Dollar" },
          { code: "SHP", name: "Saint Helena Pound" },
          { code: "SLL", name: "Sierra Leone Leone" },
          { code: "SOS", name: "Somalia Shilling" },
          { code: "SPL", name: "Seborga Luigino" },
          { code: "SRD", name: "Suriname Dollar" },
          { code: "STD", name: "S\xE3o Tom\xE9 and Pr\xEDncipe Dobra" },
          { code: "SVC", name: "El Salvador Colon" },
          { code: "SYP", name: "Syria Pound" },
          { code: "SZL", name: "Swaziland Lilangeni" },
          { code: "THB", name: "Thailand Baht" },
          { code: "TJS", name: "Tajikistan Somoni" },
          { code: "TMT", name: "Turkmenistan Manat" },
          { code: "TND", name: "Tunisia Dinar" },
          { code: "TOP", name: "Tonga Pa'anga" },
          { code: "TRY", name: "Turkey Lira" },
          { code: "TTD", name: "Trinidad and Tobago Dollar" },
          { code: "TVD", name: "Tuvalu Dollar" },
          { code: "TWD", name: "Taiwan New Dollar" },
          { code: "TZS", name: "Tanzania Shilling" },
          { code: "UAH", name: "Ukraine Hryvnia" },
          { code: "UGX", name: "Uganda Shilling" },
          { code: "USD", name: "United States Dollar" },
          { code: "UYU", name: "Uruguay Peso" },
          { code: "UZS", name: "Uzbekistan Som" },
          { code: "VEF", name: "Venezuela Bolivar" },
          { code: "VND", name: "Viet Nam Dong" },
          { code: "VUV", name: "Vanuatu Vatu" },
          { code: "WST", name: "Samoa Tala" },
          { code: "XAF", name: "Communaut\xE9 Financi\xE8re Africaine (BEAC) CFA Franc BEAC" },
          { code: "XCD", name: "East Caribbean Dollar" },
          { code: "XDR", name: "International Monetary Fund (IMF) Special Drawing Rights" },
          { code: "XOF", name: "Communaut\xE9 Financi\xE8re Africaine (BCEAO) Franc" },
          { code: "XPF", name: "Comptoirs Fran\xE7ais du Pacifique (CFP) Franc" },
          { code: "YER", name: "Yemen Rial" },
          { code: "ZAR", name: "South Africa Rand" },
          { code: "ZMW", name: "Zambia Kwacha" },
          { code: "ZWD", name: "Zimbabwe Dollar" }
        ],
        // return the names of all valide colors
        colorNames: [
          "AliceBlue",
          "Black",
          "Navy",
          "DarkBlue",
          "MediumBlue",
          "Blue",
          "DarkGreen",
          "Green",
          "Teal",
          "DarkCyan",
          "DeepSkyBlue",
          "DarkTurquoise",
          "MediumSpringGreen",
          "Lime",
          "SpringGreen",
          "Aqua",
          "Cyan",
          "MidnightBlue",
          "DodgerBlue",
          "LightSeaGreen",
          "ForestGreen",
          "SeaGreen",
          "DarkSlateGray",
          "LimeGreen",
          "MediumSeaGreen",
          "Turquoise",
          "RoyalBlue",
          "SteelBlue",
          "DarkSlateBlue",
          "MediumTurquoise",
          "Indigo",
          "DarkOliveGreen",
          "CadetBlue",
          "CornflowerBlue",
          "RebeccaPurple",
          "MediumAquaMarine",
          "DimGray",
          "SlateBlue",
          "OliveDrab",
          "SlateGray",
          "LightSlateGray",
          "MediumSlateBlue",
          "LawnGreen",
          "Chartreuse",
          "Aquamarine",
          "Maroon",
          "Purple",
          "Olive",
          "Gray",
          "SkyBlue",
          "LightSkyBlue",
          "BlueViolet",
          "DarkRed",
          "DarkMagenta",
          "SaddleBrown",
          "Ivory",
          "White",
          "DarkSeaGreen",
          "LightGreen",
          "MediumPurple",
          "DarkViolet",
          "PaleGreen",
          "DarkOrchid",
          "YellowGreen",
          "Sienna",
          "Brown",
          "DarkGray",
          "LightBlue",
          "GreenYellow",
          "PaleTurquoise",
          "LightSteelBlue",
          "PowderBlue",
          "FireBrick",
          "DarkGoldenRod",
          "MediumOrchid",
          "RosyBrown",
          "DarkKhaki",
          "Silver",
          "MediumVioletRed",
          "IndianRed",
          "Peru",
          "Chocolate",
          "Tan",
          "LightGray",
          "Thistle",
          "Orchid",
          "GoldenRod",
          "PaleVioletRed",
          "Crimson",
          "Gainsboro",
          "Plum",
          "BurlyWood",
          "LightCyan",
          "Lavender",
          "DarkSalmon",
          "Violet",
          "PaleGoldenRod",
          "LightCoral",
          "Khaki",
          "AliceBlue",
          "HoneyDew",
          "Azure",
          "SandyBrown",
          "Wheat",
          "Beige",
          "WhiteSmoke",
          "MintCream",
          "GhostWhite",
          "Salmon",
          "AntiqueWhite",
          "Linen",
          "LightGoldenRodYellow",
          "OldLace",
          "Red",
          "Fuchsia",
          "Magenta",
          "DeepPink",
          "OrangeRed",
          "Tomato",
          "HotPink",
          "Coral",
          "DarkOrange",
          "LightSalmon",
          "Orange",
          "LightPink",
          "Pink",
          "Gold",
          "PeachPuff",
          "NavajoWhite",
          "Moccasin",
          "Bisque",
          "MistyRose",
          "BlanchedAlmond",
          "PapayaWhip",
          "LavenderBlush",
          "SeaShell",
          "Cornsilk",
          "LemonChiffon",
          "FloralWhite",
          "Snow",
          "Yellow",
          "LightYellow"
        ],
        // Data taken from https://www.sec.gov/rules/other/4-460list.htm
        company: [
          "3Com Corp",
          "3M Company",
          "A.G. Edwards Inc.",
          "Abbott Laboratories",
          "Abercrombie & Fitch Co.",
          "ABM Industries Incorporated",
          "Ace Hardware Corporation",
          "ACT Manufacturing Inc.",
          "Acterna Corp.",
          "Adams Resources & Energy, Inc.",
          "ADC Telecommunications, Inc.",
          "Adelphia Communications Corporation",
          "Administaff, Inc.",
          "Adobe Systems Incorporated",
          "Adolph Coors Company",
          "Advance Auto Parts, Inc.",
          "Advanced Micro Devices, Inc.",
          "AdvancePCS, Inc.",
          "Advantica Restaurant Group, Inc.",
          "The AES Corporation",
          "Aetna Inc.",
          "Affiliated Computer Services, Inc.",
          "AFLAC Incorporated",
          "AGCO Corporation",
          "Agilent Technologies, Inc.",
          "Agway Inc.",
          "Apartment Investment and Management Company",
          "Air Products and Chemicals, Inc.",
          "Airborne, Inc.",
          "Airgas, Inc.",
          "AK Steel Holding Corporation",
          "Alaska Air Group, Inc.",
          "Alberto-Culver Company",
          "Albertson's, Inc.",
          "Alcoa Inc.",
          "Alleghany Corporation",
          "Allegheny Energy, Inc.",
          "Allegheny Technologies Incorporated",
          "Allergan, Inc.",
          "ALLETE, Inc.",
          "Alliant Energy Corporation",
          "Allied Waste Industries, Inc.",
          "Allmerica Financial Corporation",
          "The Allstate Corporation",
          "ALLTEL Corporation",
          "The Alpine Group, Inc.",
          "Amazon.com, Inc.",
          "AMC Entertainment Inc.",
          "American Power Conversion Corporation",
          "Amerada Hess Corporation",
          "AMERCO",
          "Ameren Corporation",
          "America West Holdings Corporation",
          "American Axle & Manufacturing Holdings, Inc.",
          "American Eagle Outfitters, Inc.",
          "American Electric Power Company, Inc.",
          "American Express Company",
          "American Financial Group, Inc.",
          "American Greetings Corporation",
          "American International Group, Inc.",
          "American Standard Companies Inc.",
          "American Water Works Company, Inc.",
          "AmerisourceBergen Corporation",
          "Ames Department Stores, Inc.",
          "Amgen Inc.",
          "Amkor Technology, Inc.",
          "AMR Corporation",
          "AmSouth Bancorp.",
          "Amtran, Inc.",
          "Anadarko Petroleum Corporation",
          "Analog Devices, Inc.",
          "Anheuser-Busch Companies, Inc.",
          "Anixter International Inc.",
          "AnnTaylor Inc.",
          "Anthem, Inc.",
          "AOL Time Warner Inc.",
          "Aon Corporation",
          "Apache Corporation",
          "Apple Computer, Inc.",
          "Applera Corporation",
          "Applied Industrial Technologies, Inc.",
          "Applied Materials, Inc.",
          "Aquila, Inc.",
          "ARAMARK Corporation",
          "Arch Coal, Inc.",
          "Archer Daniels Midland Company",
          "Arkansas Best Corporation",
          "Armstrong Holdings, Inc.",
          "Arrow Electronics, Inc.",
          "ArvinMeritor, Inc.",
          "Ashland Inc.",
          "Astoria Financial Corporation",
          "AT&T Corp.",
          "Atmel Corporation",
          "Atmos Energy Corporation",
          "Audiovox Corporation",
          "Autoliv, Inc.",
          "Automatic Data Processing, Inc.",
          "AutoNation, Inc.",
          "AutoZone, Inc.",
          "Avaya Inc.",
          "Avery Dennison Corporation",
          "Avista Corporation",
          "Avnet, Inc.",
          "Avon Products, Inc.",
          "Baker Hughes Incorporated",
          "Ball Corporation",
          "Bank of America Corporation",
          "The Bank of New York Company, Inc.",
          "Bank One Corporation",
          "Banknorth Group, Inc.",
          "Banta Corporation",
          "Barnes & Noble, Inc.",
          "Bausch & Lomb Incorporated",
          "Baxter International Inc.",
          "BB&T Corporation",
          "The Bear Stearns Companies Inc.",
          "Beazer Homes USA, Inc.",
          "Beckman Coulter, Inc.",
          "Becton, Dickinson and Company",
          "Bed Bath & Beyond Inc.",
          "Belk, Inc.",
          "Bell Microproducts Inc.",
          "BellSouth Corporation",
          "Belo Corp.",
          "Bemis Company, Inc.",
          "Benchmark Electronics, Inc.",
          "Berkshire Hathaway Inc.",
          "Best Buy Co., Inc.",
          "Bethlehem Steel Corporation",
          "Beverly Enterprises, Inc.",
          "Big Lots, Inc.",
          "BJ Services Company",
          "BJ's Wholesale Club, Inc.",
          "The Black & Decker Corporation",
          "Black Hills Corporation",
          "BMC Software, Inc.",
          "The Boeing Company",
          "Boise Cascade Corporation",
          "Borders Group, Inc.",
          "BorgWarner Inc.",
          "Boston Scientific Corporation",
          "Bowater Incorporated",
          "Briggs & Stratton Corporation",
          "Brightpoint, Inc.",
          "Brinker International, Inc.",
          "Bristol-Myers Squibb Company",
          "Broadwing, Inc.",
          "Brown Shoe Company, Inc.",
          "Brown-Forman Corporation",
          "Brunswick Corporation",
          "Budget Group, Inc.",
          "Burlington Coat Factory Warehouse Corporation",
          "Burlington Industries, Inc.",
          "Burlington Northern Santa Fe Corporation",
          "Burlington Resources Inc.",
          "C. H. Robinson Worldwide Inc.",
          "Cablevision Systems Corp",
          "Cabot Corp",
          "Cadence Design Systems, Inc.",
          "Calpine Corp.",
          "Campbell Soup Co.",
          "Capital One Financial Corp.",
          "Cardinal Health Inc.",
          "Caremark Rx Inc.",
          "Carlisle Cos. Inc.",
          "Carpenter Technology Corp.",
          "Casey's General Stores Inc.",
          "Caterpillar Inc.",
          "CBRL Group Inc.",
          "CDI Corp.",
          "CDW Computer Centers Inc.",
          "CellStar Corp.",
          "Cendant Corp",
          "Cenex Harvest States Cooperatives",
          "Centex Corp.",
          "CenturyTel Inc.",
          "Ceridian Corp.",
          "CH2M Hill Cos. Ltd.",
          "Champion Enterprises Inc.",
          "Charles Schwab Corp.",
          "Charming Shoppes Inc.",
          "Charter Communications Inc.",
          "Charter One Financial Inc.",
          "ChevronTexaco Corp.",
          "Chiquita Brands International Inc.",
          "Chubb Corp",
          "Ciena Corp.",
          "Cigna Corp",
          "Cincinnati Financial Corp.",
          "Cinergy Corp.",
          "Cintas Corp.",
          "Circuit City Stores Inc.",
          "Cisco Systems Inc.",
          "Citigroup, Inc",
          "Citizens Communications Co.",
          "CKE Restaurants Inc.",
          "Clear Channel Communications Inc.",
          "The Clorox Co.",
          "CMGI Inc.",
          "CMS Energy Corp.",
          "CNF Inc.",
          "Coca-Cola Co.",
          "Coca-Cola Enterprises Inc.",
          "Colgate-Palmolive Co.",
          "Collins & Aikman Corp.",
          "Comcast Corp.",
          "Comdisco Inc.",
          "Comerica Inc.",
          "Comfort Systems USA Inc.",
          "Commercial Metals Co.",
          "Community Health Systems Inc.",
          "Compass Bancshares Inc",
          "Computer Associates International Inc.",
          "Computer Sciences Corp.",
          "Compuware Corp.",
          "Comverse Technology Inc.",
          "ConAgra Foods Inc.",
          "Concord EFS Inc.",
          "Conectiv, Inc",
          "Conoco Inc",
          "Conseco Inc.",
          "Consolidated Freightways Corp.",
          "Consolidated Edison Inc.",
          "Constellation Brands Inc.",
          "Constellation Emergy Group Inc.",
          "Continental Airlines Inc.",
          "Convergys Corp.",
          "Cooper Cameron Corp.",
          "Cooper Industries Ltd.",
          "Cooper Tire & Rubber Co.",
          "Corn Products International Inc.",
          "Corning Inc.",
          "Costco Wholesale Corp.",
          "Countrywide Credit Industries Inc.",
          "Coventry Health Care Inc.",
          "Cox Communications Inc.",
          "Crane Co.",
          "Crompton Corp.",
          "Crown Cork & Seal Co. Inc.",
          "CSK Auto Corp.",
          "CSX Corp.",
          "Cummins Inc.",
          "CVS Corp.",
          "Cytec Industries Inc.",
          "D&K Healthcare Resources, Inc.",
          "D.R. Horton Inc.",
          "Dana Corporation",
          "Danaher Corporation",
          "Darden Restaurants Inc.",
          "DaVita Inc.",
          "Dean Foods Company",
          "Deere & Company",
          "Del Monte Foods Co",
          "Dell Computer Corporation",
          "Delphi Corp.",
          "Delta Air Lines Inc.",
          "Deluxe Corporation",
          "Devon Energy Corporation",
          "Di Giorgio Corporation",
          "Dial Corporation",
          "Diebold Incorporated",
          "Dillard's Inc.",
          "DIMON Incorporated",
          "Dole Food Company, Inc.",
          "Dollar General Corporation",
          "Dollar Tree Stores, Inc.",
          "Dominion Resources, Inc.",
          "Domino's Pizza LLC",
          "Dover Corporation, Inc.",
          "Dow Chemical Company",
          "Dow Jones & Company, Inc.",
          "DPL Inc.",
          "DQE Inc.",
          "Dreyer's Grand Ice Cream, Inc.",
          "DST Systems, Inc.",
          "DTE Energy Co.",
          "E.I. Du Pont de Nemours and Company",
          "Duke Energy Corp",
          "Dun & Bradstreet Inc.",
          "DURA Automotive Systems Inc.",
          "DynCorp",
          "Dynegy Inc.",
          "E*Trade Group, Inc.",
          "E.W. Scripps Company",
          "Earthlink, Inc.",
          "Eastman Chemical Company",
          "Eastman Kodak Company",
          "Eaton Corporation",
          "Echostar Communications Corporation",
          "Ecolab Inc.",
          "Edison International",
          "EGL Inc.",
          "El Paso Corporation",
          "Electronic Arts Inc.",
          "Electronic Data Systems Corp.",
          "Eli Lilly and Company",
          "EMC Corporation",
          "Emcor Group Inc.",
          "Emerson Electric Co.",
          "Encompass Services Corporation",
          "Energizer Holdings Inc.",
          "Energy East Corporation",
          "Engelhard Corporation",
          "Enron Corp.",
          "Entergy Corporation",
          "Enterprise Products Partners L.P.",
          "EOG Resources, Inc.",
          "Equifax Inc.",
          "Equitable Resources Inc.",
          "Equity Office Properties Trust",
          "Equity Residential Properties Trust",
          "Estee Lauder Companies Inc.",
          "Exelon Corporation",
          "Exide Technologies",
          "Expeditors International of Washington Inc.",
          "Express Scripts Inc.",
          "ExxonMobil Corporation",
          "Fairchild Semiconductor International Inc.",
          "Family Dollar Stores Inc.",
          "Farmland Industries Inc.",
          "Federal Mogul Corp.",
          "Federated Department Stores Inc.",
          "Federal Express Corp.",
          "Felcor Lodging Trust Inc.",
          "Ferro Corp.",
          "Fidelity National Financial Inc.",
          "Fifth Third Bancorp",
          "First American Financial Corp.",
          "First Data Corp.",
          "First National of Nebraska Inc.",
          "First Tennessee National Corp.",
          "FirstEnergy Corp.",
          "Fiserv Inc.",
          "Fisher Scientific International Inc.",
          "FleetBoston Financial Co.",
          "Fleetwood Enterprises Inc.",
          "Fleming Companies Inc.",
          "Flowers Foods Inc.",
          "Flowserv Corp",
          "Fluor Corp",
          "FMC Corp",
          "Foamex International Inc",
          "Foot Locker Inc",
          "Footstar Inc.",
          "Ford Motor Co",
          "Forest Laboratories Inc.",
          "Fortune Brands Inc.",
          "Foster Wheeler Ltd.",
          "FPL Group Inc.",
          "Franklin Resources Inc.",
          "Freeport McMoran Copper & Gold Inc.",
          "Frontier Oil Corp",
          "Furniture Brands International Inc.",
          "Gannett Co., Inc.",
          "Gap Inc.",
          "Gateway Inc.",
          "GATX Corporation",
          "Gemstar-TV Guide International Inc.",
          "GenCorp Inc.",
          "General Cable Corporation",
          "General Dynamics Corporation",
          "General Electric Company",
          "General Mills Inc",
          "General Motors Corporation",
          "Genesis Health Ventures Inc.",
          "Gentek Inc.",
          "Gentiva Health Services Inc.",
          "Genuine Parts Company",
          "Genuity Inc.",
          "Genzyme Corporation",
          "Georgia Gulf Corporation",
          "Georgia-Pacific Corporation",
          "Gillette Company",
          "Gold Kist Inc.",
          "Golden State Bancorp Inc.",
          "Golden West Financial Corporation",
          "Goldman Sachs Group Inc.",
          "Goodrich Corporation",
          "The Goodyear Tire & Rubber Company",
          "Granite Construction Incorporated",
          "Graybar Electric Company Inc.",
          "Great Lakes Chemical Corporation",
          "Great Plains Energy Inc.",
          "GreenPoint Financial Corp.",
          "Greif Bros. Corporation",
          "Grey Global Group Inc.",
          "Group 1 Automotive Inc.",
          "Guidant Corporation",
          "H&R Block Inc.",
          "H.B. Fuller Company",
          "H.J. Heinz Company",
          "Halliburton Co.",
          "Harley-Davidson Inc.",
          "Harman International Industries Inc.",
          "Harrah's Entertainment Inc.",
          "Harris Corp.",
          "Harsco Corp.",
          "Hartford Financial Services Group Inc.",
          "Hasbro Inc.",
          "Hawaiian Electric Industries Inc.",
          "HCA Inc.",
          "Health Management Associates Inc.",
          "Health Net Inc.",
          "Healthsouth Corp",
          "Henry Schein Inc.",
          "Hercules Inc.",
          "Herman Miller Inc.",
          "Hershey Foods Corp.",
          "Hewlett-Packard Company",
          "Hibernia Corp.",
          "Hillenbrand Industries Inc.",
          "Hilton Hotels Corp.",
          "Hollywood Entertainment Corp.",
          "Home Depot Inc.",
          "Hon Industries Inc.",
          "Honeywell International Inc.",
          "Hormel Foods Corp.",
          "Host Marriott Corp.",
          "Household International Corp.",
          "Hovnanian Enterprises Inc.",
          "Hub Group Inc.",
          "Hubbell Inc.",
          "Hughes Supply Inc.",
          "Humana Inc.",
          "Huntington Bancshares Inc.",
          "Idacorp Inc.",
          "IDT Corporation",
          "IKON Office Solutions Inc.",
          "Illinois Tool Works Inc.",
          "IMC Global Inc.",
          "Imperial Sugar Company",
          "IMS Health Inc.",
          "Ingles Market Inc",
          "Ingram Micro Inc.",
          "Insight Enterprises Inc.",
          "Integrated Electrical Services Inc.",
          "Intel Corporation",
          "International Paper Co.",
          "Interpublic Group of Companies Inc.",
          "Interstate Bakeries Corporation",
          "International Business Machines Corp.",
          "International Flavors & Fragrances Inc.",
          "International Multifoods Corporation",
          "Intuit Inc.",
          "IT Group Inc.",
          "ITT Industries Inc.",
          "Ivax Corp.",
          "J.B. Hunt Transport Services Inc.",
          "J.C. Penny Co.",
          "J.P. Morgan Chase & Co.",
          "Jabil Circuit Inc.",
          "Jack In The Box Inc.",
          "Jacobs Engineering Group Inc.",
          "JDS Uniphase Corp.",
          "Jefferson-Pilot Co.",
          "John Hancock Financial Services Inc.",
          "Johnson & Johnson",
          "Johnson Controls Inc.",
          "Jones Apparel Group Inc.",
          "KB Home",
          "Kellogg Company",
          "Kellwood Company",
          "Kelly Services Inc.",
          "Kemet Corp.",
          "Kennametal Inc.",
          "Kerr-McGee Corporation",
          "KeyCorp",
          "KeySpan Corp.",
          "Kimball International Inc.",
          "Kimberly-Clark Corporation",
          "Kindred Healthcare Inc.",
          "KLA-Tencor Corporation",
          "K-Mart Corp.",
          "Knight-Ridder Inc.",
          "Kohl's Corp.",
          "KPMG Consulting Inc.",
          "Kroger Co.",
          "L-3 Communications Holdings Inc.",
          "Laboratory Corporation of America Holdings",
          "Lam Research Corporation",
          "LandAmerica Financial Group Inc.",
          "Lands' End Inc.",
          "Landstar System Inc.",
          "La-Z-Boy Inc.",
          "Lear Corporation",
          "Legg Mason Inc.",
          "Leggett & Platt Inc.",
          "Lehman Brothers Holdings Inc.",
          "Lennar Corporation",
          "Lennox International Inc.",
          "Level 3 Communications Inc.",
          "Levi Strauss & Co.",
          "Lexmark International Inc.",
          "Limited Inc.",
          "Lincoln National Corporation",
          "Linens 'n Things Inc.",
          "Lithia Motors Inc.",
          "Liz Claiborne Inc.",
          "Lockheed Martin Corporation",
          "Loews Corporation",
          "Longs Drug Stores Corporation",
          "Louisiana-Pacific Corporation",
          "Lowe's Companies Inc.",
          "LSI Logic Corporation",
          "The LTV Corporation",
          "The Lubrizol Corporation",
          "Lucent Technologies Inc.",
          "Lyondell Chemical Company",
          "M & T Bank Corporation",
          "Magellan Health Services Inc.",
          "Mail-Well Inc.",
          "Mandalay Resort Group",
          "Manor Care Inc.",
          "Manpower Inc.",
          "Marathon Oil Corporation",
          "Mariner Health Care Inc.",
          "Markel Corporation",
          "Marriott International Inc.",
          "Marsh & McLennan Companies Inc.",
          "Marsh Supermarkets Inc.",
          "Marshall & Ilsley Corporation",
          "Martin Marietta Materials Inc.",
          "Masco Corporation",
          "Massey Energy Company",
          "MasTec Inc.",
          "Mattel Inc.",
          "Maxim Integrated Products Inc.",
          "Maxtor Corporation",
          "Maxxam Inc.",
          "The May Department Stores Company",
          "Maytag Corporation",
          "MBNA Corporation",
          "McCormick & Company Incorporated",
          "McDonald's Corporation",
          "The McGraw-Hill Companies Inc.",
          "McKesson Corporation",
          "McLeodUSA Incorporated",
          "M.D.C. Holdings Inc.",
          "MDU Resources Group Inc.",
          "MeadWestvaco Corporation",
          "Medtronic Inc.",
          "Mellon Financial Corporation",
          "The Men's Wearhouse Inc.",
          "Merck & Co., Inc.",
          "Mercury General Corporation",
          "Merrill Lynch & Co. Inc.",
          "Metaldyne Corporation",
          "Metals USA Inc.",
          "MetLife Inc.",
          "Metris Companies Inc",
          "MGIC Investment Corporation",
          "MGM Mirage",
          "Michaels Stores Inc.",
          "Micron Technology Inc.",
          "Microsoft Corporation",
          "Milacron Inc.",
          "Millennium Chemicals Inc.",
          "Mirant Corporation",
          "Mohawk Industries Inc.",
          "Molex Incorporated",
          "The MONY Group Inc.",
          "Morgan Stanley Dean Witter & Co.",
          "Motorola Inc.",
          "MPS Group Inc.",
          "Murphy Oil Corporation",
          "Nabors Industries Inc",
          "Nacco Industries Inc",
          "Nash Finch Company",
          "National City Corp.",
          "National Commerce Financial Corporation",
          "National Fuel Gas Company",
          "National Oilwell Inc",
          "National Rural Utilities Cooperative Finance Corporation",
          "National Semiconductor Corporation",
          "National Service Industries Inc",
          "Navistar International Corporation",
          "NCR Corporation",
          "The Neiman Marcus Group Inc.",
          "New Jersey Resources Corporation",
          "New York Times Company",
          "Newell Rubbermaid Inc",
          "Newmont Mining Corporation",
          "Nextel Communications Inc",
          "Nicor Inc",
          "Nike Inc",
          "NiSource Inc",
          "Noble Energy Inc",
          "Nordstrom Inc",
          "Norfolk Southern Corporation",
          "Nortek Inc",
          "North Fork Bancorporation Inc",
          "Northeast Utilities System",
          "Northern Trust Corporation",
          "Northrop Grumman Corporation",
          "NorthWestern Corporation",
          "Novellus Systems Inc",
          "NSTAR",
          "NTL Incorporated",
          "Nucor Corp",
          "Nvidia Corp",
          "NVR Inc",
          "Northwest Airlines Corp",
          "Occidental Petroleum Corp",
          "Ocean Energy Inc",
          "Office Depot Inc.",
          "OfficeMax Inc",
          "OGE Energy Corp",
          "Oglethorpe Power Corp.",
          "Ohio Casualty Corp.",
          "Old Republic International Corp.",
          "Olin Corp.",
          "OM Group Inc",
          "Omnicare Inc",
          "Omnicom Group",
          "On Semiconductor Corp",
          "ONEOK Inc",
          "Oracle Corp",
          "Oshkosh Truck Corp",
          "Outback Steakhouse Inc.",
          "Owens & Minor Inc.",
          "Owens Corning",
          "Owens-Illinois Inc",
          "Oxford Health Plans Inc",
          "Paccar Inc",
          "PacifiCare Health Systems Inc",
          "Packaging Corp. of America",
          "Pactiv Corp",
          "Pall Corp",
          "Pantry Inc",
          "Park Place Entertainment Corp",
          "Parker Hannifin Corp.",
          "Pathmark Stores Inc.",
          "Paychex Inc",
          "Payless Shoesource Inc",
          "Penn Traffic Co.",
          "Pennzoil-Quaker State Company",
          "Pentair Inc",
          "Peoples Energy Corp.",
          "PeopleSoft Inc",
          "Pep Boys Manny, Moe & Jack",
          "Potomac Electric Power Co.",
          "Pepsi Bottling Group Inc.",
          "PepsiAmericas Inc.",
          "PepsiCo Inc.",
          "Performance Food Group Co.",
          "Perini Corp",
          "PerkinElmer Inc",
          "Perot Systems Corp",
          "Petco Animal Supplies Inc.",
          "Peter Kiewit Sons', Inc.",
          "PETsMART Inc",
          "Pfizer Inc",
          "Pacific Gas & Electric Corp.",
          "Pharmacia Corp",
          "Phar Mor Inc.",
          "Phelps Dodge Corp.",
          "Philip Morris Companies Inc.",
          "Phillips Petroleum Co",
          "Phillips Van Heusen Corp.",
          "Phoenix Companies Inc",
          "Pier 1 Imports Inc.",
          "Pilgrim's Pride Corporation",
          "Pinnacle West Capital Corp",
          "Pioneer-Standard Electronics Inc.",
          "Pitney Bowes Inc.",
          "Pittston Brinks Group",
          "Plains All American Pipeline LP",
          "PNC Financial Services Group Inc.",
          "PNM Resources Inc",
          "Polaris Industries Inc.",
          "Polo Ralph Lauren Corp",
          "PolyOne Corp",
          "Popular Inc",
          "Potlatch Corp",
          "PPG Industries Inc",
          "PPL Corp",
          "Praxair Inc",
          "Precision Castparts Corp",
          "Premcor Inc.",
          "Pride International Inc",
          "Primedia Inc",
          "Principal Financial Group Inc.",
          "Procter & Gamble Co.",
          "Pro-Fac Cooperative Inc.",
          "Progress Energy Inc",
          "Progressive Corporation",
          "Protective Life Corp",
          "Provident Financial Group",
          "Providian Financial Corp.",
          "Prudential Financial Inc.",
          "PSS World Medical Inc",
          "Public Service Enterprise Group Inc.",
          "Publix Super Markets Inc.",
          "Puget Energy Inc.",
          "Pulte Homes Inc",
          "Qualcomm Inc",
          "Quanta Services Inc.",
          "Quantum Corp",
          "Quest Diagnostics Inc.",
          "Questar Corp",
          "Quintiles Transnational",
          "Qwest Communications Intl Inc",
          "R.J. Reynolds Tobacco Company",
          "R.R. Donnelley & Sons Company",
          "Radio Shack Corporation",
          "Raymond James Financial Inc.",
          "Raytheon Company",
          "Reader's Digest Association Inc.",
          "Reebok International Ltd.",
          "Regions Financial Corp.",
          "Regis Corporation",
          "Reliance Steel & Aluminum Co.",
          "Reliant Energy Inc.",
          "Rent A Center Inc",
          "Republic Services Inc",
          "Revlon Inc",
          "RGS Energy Group Inc",
          "Rite Aid Corp",
          "Riverwood Holding Inc.",
          "RoadwayCorp",
          "Robert Half International Inc.",
          "Rock-Tenn Co",
          "Rockwell Automation Inc",
          "Rockwell Collins Inc",
          "Rohm & Haas Co.",
          "Ross Stores Inc",
          "RPM Inc.",
          "Ruddick Corp",
          "Ryder System Inc",
          "Ryerson Tull Inc",
          "Ryland Group Inc.",
          "Sabre Holdings Corp",
          "Safeco Corp",
          "Safeguard Scientifics Inc.",
          "Safeway Inc",
          "Saks Inc",
          "Sanmina-SCI Inc",
          "Sara Lee Corp",
          "SBC Communications Inc",
          "Scana Corp.",
          "Schering-Plough Corp",
          "Scholastic Corp",
          "SCI Systems Onc.",
          "Science Applications Intl. Inc.",
          "Scientific-Atlanta Inc",
          "Scotts Company",
          "Seaboard Corp",
          "Sealed Air Corp",
          "Sears Roebuck & Co",
          "Sempra Energy",
          "Sequa Corp",
          "Service Corp. International",
          "ServiceMaster Co",
          "Shaw Group Inc",
          "Sherwin-Williams Company",
          "Shopko Stores Inc",
          "Siebel Systems Inc",
          "Sierra Health Services Inc",
          "Sierra Pacific Resources",
          "Silgan Holdings Inc.",
          "Silicon Graphics Inc",
          "Simon Property Group Inc",
          "SLM Corporation",
          "Smith International Inc",
          "Smithfield Foods Inc",
          "Smurfit-Stone Container Corp",
          "Snap-On Inc",
          "Solectron Corp",
          "Solutia Inc",
          "Sonic Automotive Inc.",
          "Sonoco Products Co.",
          "Southern Company",
          "Southern Union Company",
          "SouthTrust Corp.",
          "Southwest Airlines Co",
          "Southwest Gas Corp",
          "Sovereign Bancorp Inc.",
          "Spartan Stores Inc",
          "Spherion Corp",
          "Sports Authority Inc",
          "Sprint Corp.",
          "SPX Corp",
          "St. Jude Medical Inc",
          "St. Paul Cos.",
          "Staff Leasing Inc.",
          "StanCorp Financial Group Inc",
          "Standard Pacific Corp.",
          "Stanley Works",
          "Staples Inc",
          "Starbucks Corp",
          "Starwood Hotels & Resorts Worldwide Inc",
          "State Street Corp.",
          "Stater Bros. Holdings Inc.",
          "Steelcase Inc",
          "Stein Mart Inc",
          "Stewart & Stevenson Services Inc",
          "Stewart Information Services Corp",
          "Stilwell Financial Inc",
          "Storage Technology Corporation",
          "Stryker Corp",
          "Sun Healthcare Group Inc.",
          "Sun Microsystems Inc.",
          "SunGard Data Systems Inc.",
          "Sunoco Inc.",
          "SunTrust Banks Inc",
          "Supervalu Inc",
          "Swift Transportation, Co., Inc",
          "Symbol Technologies Inc",
          "Synovus Financial Corp.",
          "Sysco Corp",
          "Systemax Inc.",
          "Target Corp.",
          "Tech Data Corporation",
          "TECO Energy Inc",
          "Tecumseh Products Company",
          "Tektronix Inc",
          "Teleflex Incorporated",
          "Telephone & Data Systems Inc",
          "Tellabs Inc.",
          "Temple-Inland Inc",
          "Tenet Healthcare Corporation",
          "Tenneco Automotive Inc.",
          "Teradyne Inc",
          "Terex Corp",
          "Tesoro Petroleum Corp.",
          "Texas Industries Inc.",
          "Texas Instruments Incorporated",
          "Textron Inc",
          "Thermo Electron Corporation",
          "Thomas & Betts Corporation",
          "Tiffany & Co",
          "Timken Company",
          "TJX Companies Inc",
          "TMP Worldwide Inc",
          "Toll Brothers Inc",
          "Torchmark Corporation",
          "Toro Company",
          "Tower Automotive Inc.",
          "Toys 'R' Us Inc",
          "Trans World Entertainment Corp.",
          "TransMontaigne Inc",
          "Transocean Inc",
          "TravelCenters of America Inc.",
          "Triad Hospitals Inc",
          "Tribune Company",
          "Trigon Healthcare Inc.",
          "Trinity Industries Inc",
          "Trump Hotels & Casino Resorts Inc.",
          "TruServ Corporation",
          "TRW Inc",
          "TXU Corp",
          "Tyson Foods Inc",
          "U.S. Bancorp",
          "U.S. Industries Inc.",
          "UAL Corporation",
          "UGI Corporation",
          "Unified Western Grocers Inc",
          "Union Pacific Corporation",
          "Union Planters Corp",
          "Unisource Energy Corp",
          "Unisys Corporation",
          "United Auto Group Inc",
          "United Defense Industries Inc.",
          "United Parcel Service Inc",
          "United Rentals Inc",
          "United Stationers Inc",
          "United Technologies Corporation",
          "UnitedHealth Group Incorporated",
          "Unitrin Inc",
          "Universal Corporation",
          "Universal Forest Products Inc",
          "Universal Health Services Inc",
          "Unocal Corporation",
          "Unova Inc",
          "UnumProvident Corporation",
          "URS Corporation",
          "US Airways Group Inc",
          "US Oncology Inc",
          "USA Interactive",
          "USFreighways Corporation",
          "USG Corporation",
          "UST Inc",
          "Valero Energy Corporation",
          "Valspar Corporation",
          "Value City Department Stores Inc",
          "Varco International Inc",
          "Vectren Corporation",
          "Veritas Software Corporation",
          "Verizon Communications Inc",
          "VF Corporation",
          "Viacom Inc",
          "Viad Corp",
          "Viasystems Group Inc",
          "Vishay Intertechnology Inc",
          "Visteon Corporation",
          "Volt Information Sciences Inc",
          "Vulcan Materials Company",
          "W.R. Berkley Corporation",
          "W.R. Grace & Co",
          "W.W. Grainger Inc",
          "Wachovia Corporation",
          "Wakenhut Corporation",
          "Walgreen Co",
          "Wallace Computer Services Inc",
          "Wal-Mart Stores Inc",
          "Walt Disney Co",
          "Walter Industries Inc",
          "Washington Mutual Inc",
          "Washington Post Co.",
          "Waste Management Inc",
          "Watsco Inc",
          "Weatherford International Inc",
          "Weis Markets Inc.",
          "Wellpoint Health Networks Inc",
          "Wells Fargo & Company",
          "Wendy's International Inc",
          "Werner Enterprises Inc",
          "WESCO International Inc",
          "Western Digital Inc",
          "Western Gas Resources Inc",
          "WestPoint Stevens Inc",
          "Weyerhauser Company",
          "WGL Holdings Inc",
          "Whirlpool Corporation",
          "Whole Foods Market Inc",
          "Willamette Industries Inc.",
          "Williams Companies Inc",
          "Williams Sonoma Inc",
          "Winn Dixie Stores Inc",
          "Wisconsin Energy Corporation",
          "Wm Wrigley Jr Company",
          "World Fuel Services Corporation",
          "WorldCom Inc",
          "Worthington Industries Inc",
          "WPS Resources Corporation",
          "Wyeth",
          "Wyndham International Inc",
          "Xcel Energy Inc",
          "Xerox Corp",
          "Xilinx Inc",
          "XO Communications Inc",
          "Yellow Corporation",
          "York International Corp",
          "Yum Brands Inc.",
          "Zale Corporation",
          "Zions Bancorporation"
        ],
        fileExtension: {
          raster: ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
          vector: ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
          "3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
          document: ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
        },
        // Data taken from https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
        timezones: [
          {
            name: "Dateline Standard Time",
            abbr: "DST",
            offset: -12,
            isdst: !1,
            text: "(UTC-12:00) International Date Line West",
            utc: [
              "Etc/GMT+12"
            ]
          },
          {
            name: "UTC-11",
            abbr: "U",
            offset: -11,
            isdst: !1,
            text: "(UTC-11:00) Coordinated Universal Time-11",
            utc: [
              "Etc/GMT+11",
              "Pacific/Midway",
              "Pacific/Niue",
              "Pacific/Pago_Pago"
            ]
          },
          {
            name: "Hawaiian Standard Time",
            abbr: "HST",
            offset: -10,
            isdst: !1,
            text: "(UTC-10:00) Hawaii",
            utc: [
              "Etc/GMT+10",
              "Pacific/Honolulu",
              "Pacific/Johnston",
              "Pacific/Rarotonga",
              "Pacific/Tahiti"
            ]
          },
          {
            name: "Alaskan Standard Time",
            abbr: "AKDT",
            offset: -8,
            isdst: !0,
            text: "(UTC-09:00) Alaska",
            utc: [
              "America/Anchorage",
              "America/Juneau",
              "America/Nome",
              "America/Sitka",
              "America/Yakutat"
            ]
          },
          {
            name: "Pacific Standard Time (Mexico)",
            abbr: "PDT",
            offset: -7,
            isdst: !0,
            text: "(UTC-08:00) Baja California",
            utc: [
              "America/Santa_Isabel"
            ]
          },
          {
            name: "Pacific Daylight Time",
            abbr: "PDT",
            offset: -7,
            isdst: !0,
            text: "(UTC-07:00) Pacific Time (US & Canada)",
            utc: [
              "America/Dawson",
              "America/Los_Angeles",
              "America/Tijuana",
              "America/Vancouver",
              "America/Whitehorse"
            ]
          },
          {
            name: "Pacific Standard Time",
            abbr: "PST",
            offset: -8,
            isdst: !1,
            text: "(UTC-08:00) Pacific Time (US & Canada)",
            utc: [
              "America/Dawson",
              "America/Los_Angeles",
              "America/Tijuana",
              "America/Vancouver",
              "America/Whitehorse",
              "PST8PDT"
            ]
          },
          {
            name: "US Mountain Standard Time",
            abbr: "UMST",
            offset: -7,
            isdst: !1,
            text: "(UTC-07:00) Arizona",
            utc: [
              "America/Creston",
              "America/Dawson_Creek",
              "America/Hermosillo",
              "America/Phoenix",
              "Etc/GMT+7"
            ]
          },
          {
            name: "Mountain Standard Time (Mexico)",
            abbr: "MDT",
            offset: -6,
            isdst: !0,
            text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
            utc: [
              "America/Chihuahua",
              "America/Mazatlan"
            ]
          },
          {
            name: "Mountain Standard Time",
            abbr: "MDT",
            offset: -6,
            isdst: !0,
            text: "(UTC-07:00) Mountain Time (US & Canada)",
            utc: [
              "America/Boise",
              "America/Cambridge_Bay",
              "America/Denver",
              "America/Edmonton",
              "America/Inuvik",
              "America/Ojinaga",
              "America/Yellowknife",
              "MST7MDT"
            ]
          },
          {
            name: "Central America Standard Time",
            abbr: "CAST",
            offset: -6,
            isdst: !1,
            text: "(UTC-06:00) Central America",
            utc: [
              "America/Belize",
              "America/Costa_Rica",
              "America/El_Salvador",
              "America/Guatemala",
              "America/Managua",
              "America/Tegucigalpa",
              "Etc/GMT+6",
              "Pacific/Galapagos"
            ]
          },
          {
            name: "Central Standard Time",
            abbr: "CDT",
            offset: -5,
            isdst: !0,
            text: "(UTC-06:00) Central Time (US & Canada)",
            utc: [
              "America/Chicago",
              "America/Indiana/Knox",
              "America/Indiana/Tell_City",
              "America/Matamoros",
              "America/Menominee",
              "America/North_Dakota/Beulah",
              "America/North_Dakota/Center",
              "America/North_Dakota/New_Salem",
              "America/Rainy_River",
              "America/Rankin_Inlet",
              "America/Resolute",
              "America/Winnipeg",
              "CST6CDT"
            ]
          },
          {
            name: "Central Standard Time (Mexico)",
            abbr: "CDT",
            offset: -5,
            isdst: !0,
            text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
            utc: [
              "America/Bahia_Banderas",
              "America/Cancun",
              "America/Merida",
              "America/Mexico_City",
              "America/Monterrey"
            ]
          },
          {
            name: "Canada Central Standard Time",
            abbr: "CCST",
            offset: -6,
            isdst: !1,
            text: "(UTC-06:00) Saskatchewan",
            utc: [
              "America/Regina",
              "America/Swift_Current"
            ]
          },
          {
            name: "SA Pacific Standard Time",
            abbr: "SPST",
            offset: -5,
            isdst: !1,
            text: "(UTC-05:00) Bogota, Lima, Quito",
            utc: [
              "America/Bogota",
              "America/Cayman",
              "America/Coral_Harbour",
              "America/Eirunepe",
              "America/Guayaquil",
              "America/Jamaica",
              "America/Lima",
              "America/Panama",
              "America/Rio_Branco",
              "Etc/GMT+5"
            ]
          },
          {
            name: "Eastern Standard Time",
            abbr: "EDT",
            offset: -4,
            isdst: !0,
            text: "(UTC-05:00) Eastern Time (US & Canada)",
            utc: [
              "America/Detroit",
              "America/Havana",
              "America/Indiana/Petersburg",
              "America/Indiana/Vincennes",
              "America/Indiana/Winamac",
              "America/Iqaluit",
              "America/Kentucky/Monticello",
              "America/Louisville",
              "America/Montreal",
              "America/Nassau",
              "America/New_York",
              "America/Nipigon",
              "America/Pangnirtung",
              "America/Port-au-Prince",
              "America/Thunder_Bay",
              "America/Toronto",
              "EST5EDT"
            ]
          },
          {
            name: "US Eastern Standard Time",
            abbr: "UEDT",
            offset: -4,
            isdst: !0,
            text: "(UTC-05:00) Indiana (East)",
            utc: [
              "America/Indiana/Marengo",
              "America/Indiana/Vevay",
              "America/Indianapolis"
            ]
          },
          {
            name: "Venezuela Standard Time",
            abbr: "VST",
            offset: -4.5,
            isdst: !1,
            text: "(UTC-04:30) Caracas",
            utc: [
              "America/Caracas"
            ]
          },
          {
            name: "Paraguay Standard Time",
            abbr: "PYT",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Asuncion",
            utc: [
              "America/Asuncion"
            ]
          },
          {
            name: "Atlantic Standard Time",
            abbr: "ADT",
            offset: -3,
            isdst: !0,
            text: "(UTC-04:00) Atlantic Time (Canada)",
            utc: [
              "America/Glace_Bay",
              "America/Goose_Bay",
              "America/Halifax",
              "America/Moncton",
              "America/Thule",
              "Atlantic/Bermuda"
            ]
          },
          {
            name: "Central Brazilian Standard Time",
            abbr: "CBST",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Cuiaba",
            utc: [
              "America/Campo_Grande",
              "America/Cuiaba"
            ]
          },
          {
            name: "SA Western Standard Time",
            abbr: "SWST",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
            utc: [
              "America/Anguilla",
              "America/Antigua",
              "America/Aruba",
              "America/Barbados",
              "America/Blanc-Sablon",
              "America/Boa_Vista",
              "America/Curacao",
              "America/Dominica",
              "America/Grand_Turk",
              "America/Grenada",
              "America/Guadeloupe",
              "America/Guyana",
              "America/Kralendijk",
              "America/La_Paz",
              "America/Lower_Princes",
              "America/Manaus",
              "America/Marigot",
              "America/Martinique",
              "America/Montserrat",
              "America/Port_of_Spain",
              "America/Porto_Velho",
              "America/Puerto_Rico",
              "America/Santo_Domingo",
              "America/St_Barthelemy",
              "America/St_Kitts",
              "America/St_Lucia",
              "America/St_Thomas",
              "America/St_Vincent",
              "America/Tortola",
              "Etc/GMT+4"
            ]
          },
          {
            name: "Pacific SA Standard Time",
            abbr: "PSST",
            offset: -4,
            isdst: !1,
            text: "(UTC-04:00) Santiago",
            utc: [
              "America/Santiago",
              "Antarctica/Palmer"
            ]
          },
          {
            name: "Newfoundland Standard Time",
            abbr: "NDT",
            offset: -2.5,
            isdst: !0,
            text: "(UTC-03:30) Newfoundland",
            utc: [
              "America/St_Johns"
            ]
          },
          {
            name: "E. South America Standard Time",
            abbr: "ESAST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Brasilia",
            utc: [
              "America/Sao_Paulo"
            ]
          },
          {
            name: "Argentina Standard Time",
            abbr: "AST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Buenos Aires",
            utc: [
              "America/Argentina/La_Rioja",
              "America/Argentina/Rio_Gallegos",
              "America/Argentina/Salta",
              "America/Argentina/San_Juan",
              "America/Argentina/San_Luis",
              "America/Argentina/Tucuman",
              "America/Argentina/Ushuaia",
              "America/Buenos_Aires",
              "America/Catamarca",
              "America/Cordoba",
              "America/Jujuy",
              "America/Mendoza"
            ]
          },
          {
            name: "SA Eastern Standard Time",
            abbr: "SEST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Cayenne, Fortaleza",
            utc: [
              "America/Araguaina",
              "America/Belem",
              "America/Cayenne",
              "America/Fortaleza",
              "America/Maceio",
              "America/Paramaribo",
              "America/Recife",
              "America/Santarem",
              "Antarctica/Rothera",
              "Atlantic/Stanley",
              "Etc/GMT+3"
            ]
          },
          {
            name: "Greenland Standard Time",
            abbr: "GDT",
            offset: -3,
            isdst: !0,
            text: "(UTC-03:00) Greenland",
            utc: [
              "America/Godthab"
            ]
          },
          {
            name: "Montevideo Standard Time",
            abbr: "MST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Montevideo",
            utc: [
              "America/Montevideo"
            ]
          },
          {
            name: "Bahia Standard Time",
            abbr: "BST",
            offset: -3,
            isdst: !1,
            text: "(UTC-03:00) Salvador",
            utc: [
              "America/Bahia"
            ]
          },
          {
            name: "UTC-02",
            abbr: "U",
            offset: -2,
            isdst: !1,
            text: "(UTC-02:00) Coordinated Universal Time-02",
            utc: [
              "America/Noronha",
              "Atlantic/South_Georgia",
              "Etc/GMT+2"
            ]
          },
          {
            name: "Mid-Atlantic Standard Time",
            abbr: "MDT",
            offset: -1,
            isdst: !0,
            text: "(UTC-02:00) Mid-Atlantic - Old",
            utc: []
          },
          {
            name: "Azores Standard Time",
            abbr: "ADT",
            offset: 0,
            isdst: !0,
            text: "(UTC-01:00) Azores",
            utc: [
              "America/Scoresbysund",
              "Atlantic/Azores"
            ]
          },
          {
            name: "Cape Verde Standard Time",
            abbr: "CVST",
            offset: -1,
            isdst: !1,
            text: "(UTC-01:00) Cape Verde Is.",
            utc: [
              "Atlantic/Cape_Verde",
              "Etc/GMT+1"
            ]
          },
          {
            name: "Morocco Standard Time",
            abbr: "MDT",
            offset: 1,
            isdst: !0,
            text: "(UTC) Casablanca",
            utc: [
              "Africa/Casablanca",
              "Africa/El_Aaiun"
            ]
          },
          {
            name: "UTC",
            abbr: "UTC",
            offset: 0,
            isdst: !1,
            text: "(UTC) Coordinated Universal Time",
            utc: [
              "America/Danmarkshavn",
              "Etc/GMT"
            ]
          },
          {
            name: "GMT Standard Time",
            abbr: "GMT",
            offset: 0,
            isdst: !1,
            text: "(UTC) Edinburgh, London",
            utc: [
              "Europe/Isle_of_Man",
              "Europe/Guernsey",
              "Europe/Jersey",
              "Europe/London"
            ]
          },
          {
            name: "British Summer Time",
            abbr: "BST",
            offset: 1,
            isdst: !0,
            text: "(UTC+01:00) Edinburgh, London",
            utc: [
              "Europe/Isle_of_Man",
              "Europe/Guernsey",
              "Europe/Jersey",
              "Europe/London"
            ]
          },
          {
            name: "GMT Standard Time",
            abbr: "GDT",
            offset: 1,
            isdst: !0,
            text: "(UTC) Dublin, Lisbon",
            utc: [
              "Atlantic/Canary",
              "Atlantic/Faeroe",
              "Atlantic/Madeira",
              "Europe/Dublin",
              "Europe/Lisbon"
            ]
          },
          {
            name: "Greenwich Standard Time",
            abbr: "GST",
            offset: 0,
            isdst: !1,
            text: "(UTC) Monrovia, Reykjavik",
            utc: [
              "Africa/Abidjan",
              "Africa/Accra",
              "Africa/Bamako",
              "Africa/Banjul",
              "Africa/Bissau",
              "Africa/Conakry",
              "Africa/Dakar",
              "Africa/Freetown",
              "Africa/Lome",
              "Africa/Monrovia",
              "Africa/Nouakchott",
              "Africa/Ouagadougou",
              "Africa/Sao_Tome",
              "Atlantic/Reykjavik",
              "Atlantic/St_Helena"
            ]
          },
          {
            name: "W. Europe Standard Time",
            abbr: "WEDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
            utc: [
              "Arctic/Longyearbyen",
              "Europe/Amsterdam",
              "Europe/Andorra",
              "Europe/Berlin",
              "Europe/Busingen",
              "Europe/Gibraltar",
              "Europe/Luxembourg",
              "Europe/Malta",
              "Europe/Monaco",
              "Europe/Oslo",
              "Europe/Rome",
              "Europe/San_Marino",
              "Europe/Stockholm",
              "Europe/Vaduz",
              "Europe/Vatican",
              "Europe/Vienna",
              "Europe/Zurich"
            ]
          },
          {
            name: "Central Europe Standard Time",
            abbr: "CEDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
            utc: [
              "Europe/Belgrade",
              "Europe/Bratislava",
              "Europe/Budapest",
              "Europe/Ljubljana",
              "Europe/Podgorica",
              "Europe/Prague",
              "Europe/Tirane"
            ]
          },
          {
            name: "Romance Standard Time",
            abbr: "RDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
            utc: [
              "Africa/Ceuta",
              "Europe/Brussels",
              "Europe/Copenhagen",
              "Europe/Madrid",
              "Europe/Paris"
            ]
          },
          {
            name: "Central European Standard Time",
            abbr: "CEDT",
            offset: 2,
            isdst: !0,
            text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
            utc: [
              "Europe/Sarajevo",
              "Europe/Skopje",
              "Europe/Warsaw",
              "Europe/Zagreb"
            ]
          },
          {
            name: "W. Central Africa Standard Time",
            abbr: "WCAST",
            offset: 1,
            isdst: !1,
            text: "(UTC+01:00) West Central Africa",
            utc: [
              "Africa/Algiers",
              "Africa/Bangui",
              "Africa/Brazzaville",
              "Africa/Douala",
              "Africa/Kinshasa",
              "Africa/Lagos",
              "Africa/Libreville",
              "Africa/Luanda",
              "Africa/Malabo",
              "Africa/Ndjamena",
              "Africa/Niamey",
              "Africa/Porto-Novo",
              "Africa/Tunis",
              "Etc/GMT-1"
            ]
          },
          {
            name: "Namibia Standard Time",
            abbr: "NST",
            offset: 1,
            isdst: !1,
            text: "(UTC+01:00) Windhoek",
            utc: [
              "Africa/Windhoek"
            ]
          },
          {
            name: "GTB Standard Time",
            abbr: "GDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Athens, Bucharest",
            utc: [
              "Asia/Nicosia",
              "Europe/Athens",
              "Europe/Bucharest",
              "Europe/Chisinau"
            ]
          },
          {
            name: "Middle East Standard Time",
            abbr: "MEDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Beirut",
            utc: [
              "Asia/Beirut"
            ]
          },
          {
            name: "Egypt Standard Time",
            abbr: "EST",
            offset: 2,
            isdst: !1,
            text: "(UTC+02:00) Cairo",
            utc: [
              "Africa/Cairo"
            ]
          },
          {
            name: "Syria Standard Time",
            abbr: "SDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Damascus",
            utc: [
              "Asia/Damascus"
            ]
          },
          {
            name: "E. Europe Standard Time",
            abbr: "EEDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) E. Europe",
            utc: [
              "Asia/Nicosia",
              "Europe/Athens",
              "Europe/Bucharest",
              "Europe/Chisinau",
              "Europe/Helsinki",
              "Europe/Kiev",
              "Europe/Mariehamn",
              "Europe/Nicosia",
              "Europe/Riga",
              "Europe/Sofia",
              "Europe/Tallinn",
              "Europe/Uzhgorod",
              "Europe/Vilnius",
              "Europe/Zaporozhye"
            ]
          },
          {
            name: "South Africa Standard Time",
            abbr: "SAST",
            offset: 2,
            isdst: !1,
            text: "(UTC+02:00) Harare, Pretoria",
            utc: [
              "Africa/Blantyre",
              "Africa/Bujumbura",
              "Africa/Gaborone",
              "Africa/Harare",
              "Africa/Johannesburg",
              "Africa/Kigali",
              "Africa/Lubumbashi",
              "Africa/Lusaka",
              "Africa/Maputo",
              "Africa/Maseru",
              "Africa/Mbabane",
              "Etc/GMT-2"
            ]
          },
          {
            name: "FLE Standard Time",
            abbr: "FDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
            utc: [
              "Europe/Helsinki",
              "Europe/Kiev",
              "Europe/Mariehamn",
              "Europe/Riga",
              "Europe/Sofia",
              "Europe/Tallinn",
              "Europe/Uzhgorod",
              "Europe/Vilnius",
              "Europe/Zaporozhye"
            ]
          },
          {
            name: "Turkey Standard Time",
            abbr: "TDT",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Istanbul",
            utc: [
              "Europe/Istanbul"
            ]
          },
          {
            name: "Israel Standard Time",
            abbr: "JDT",
            offset: 3,
            isdst: !0,
            text: "(UTC+02:00) Jerusalem",
            utc: [
              "Asia/Jerusalem"
            ]
          },
          {
            name: "Libya Standard Time",
            abbr: "LST",
            offset: 2,
            isdst: !1,
            text: "(UTC+02:00) Tripoli",
            utc: [
              "Africa/Tripoli"
            ]
          },
          {
            name: "Jordan Standard Time",
            abbr: "JST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Amman",
            utc: [
              "Asia/Amman"
            ]
          },
          {
            name: "Arabic Standard Time",
            abbr: "AST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Baghdad",
            utc: [
              "Asia/Baghdad"
            ]
          },
          {
            name: "Kaliningrad Standard Time",
            abbr: "KST",
            offset: 3,
            isdst: !1,
            text: "(UTC+02:00) Kaliningrad",
            utc: [
              "Europe/Kaliningrad"
            ]
          },
          {
            name: "Arab Standard Time",
            abbr: "AST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Kuwait, Riyadh",
            utc: [
              "Asia/Aden",
              "Asia/Bahrain",
              "Asia/Kuwait",
              "Asia/Qatar",
              "Asia/Riyadh"
            ]
          },
          {
            name: "E. Africa Standard Time",
            abbr: "EAST",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Nairobi",
            utc: [
              "Africa/Addis_Ababa",
              "Africa/Asmera",
              "Africa/Dar_es_Salaam",
              "Africa/Djibouti",
              "Africa/Juba",
              "Africa/Kampala",
              "Africa/Khartoum",
              "Africa/Mogadishu",
              "Africa/Nairobi",
              "Antarctica/Syowa",
              "Etc/GMT-3",
              "Indian/Antananarivo",
              "Indian/Comoro",
              "Indian/Mayotte"
            ]
          },
          {
            name: "Moscow Standard Time",
            abbr: "MSK",
            offset: 3,
            isdst: !1,
            text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
            utc: [
              "Europe/Kirov",
              "Europe/Moscow",
              "Europe/Simferopol",
              "Europe/Volgograd",
              "Europe/Minsk"
            ]
          },
          {
            name: "Samara Time",
            abbr: "SAMT",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
            utc: [
              "Europe/Astrakhan",
              "Europe/Samara",
              "Europe/Ulyanovsk"
            ]
          },
          {
            name: "Iran Standard Time",
            abbr: "IDT",
            offset: 4.5,
            isdst: !0,
            text: "(UTC+03:30) Tehran",
            utc: [
              "Asia/Tehran"
            ]
          },
          {
            name: "Arabian Standard Time",
            abbr: "AST",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Abu Dhabi, Muscat",
            utc: [
              "Asia/Dubai",
              "Asia/Muscat",
              "Etc/GMT-4"
            ]
          },
          {
            name: "Azerbaijan Standard Time",
            abbr: "ADT",
            offset: 5,
            isdst: !0,
            text: "(UTC+04:00) Baku",
            utc: [
              "Asia/Baku"
            ]
          },
          {
            name: "Mauritius Standard Time",
            abbr: "MST",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Port Louis",
            utc: [
              "Indian/Mahe",
              "Indian/Mauritius",
              "Indian/Reunion"
            ]
          },
          {
            name: "Georgian Standard Time",
            abbr: "GET",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Tbilisi",
            utc: [
              "Asia/Tbilisi"
            ]
          },
          {
            name: "Caucasus Standard Time",
            abbr: "CST",
            offset: 4,
            isdst: !1,
            text: "(UTC+04:00) Yerevan",
            utc: [
              "Asia/Yerevan"
            ]
          },
          {
            name: "Afghanistan Standard Time",
            abbr: "AST",
            offset: 4.5,
            isdst: !1,
            text: "(UTC+04:30) Kabul",
            utc: [
              "Asia/Kabul"
            ]
          },
          {
            name: "West Asia Standard Time",
            abbr: "WAST",
            offset: 5,
            isdst: !1,
            text: "(UTC+05:00) Ashgabat, Tashkent",
            utc: [
              "Antarctica/Mawson",
              "Asia/Aqtau",
              "Asia/Aqtobe",
              "Asia/Ashgabat",
              "Asia/Dushanbe",
              "Asia/Oral",
              "Asia/Samarkand",
              "Asia/Tashkent",
              "Etc/GMT-5",
              "Indian/Kerguelen",
              "Indian/Maldives"
            ]
          },
          {
            name: "Yekaterinburg Time",
            abbr: "YEKT",
            offset: 5,
            isdst: !1,
            text: "(UTC+05:00) Yekaterinburg",
            utc: [
              "Asia/Yekaterinburg"
            ]
          },
          {
            name: "Pakistan Standard Time",
            abbr: "PKT",
            offset: 5,
            isdst: !1,
            text: "(UTC+05:00) Islamabad, Karachi",
            utc: [
              "Asia/Karachi"
            ]
          },
          {
            name: "India Standard Time",
            abbr: "IST",
            offset: 5.5,
            isdst: !1,
            text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
            utc: [
              "Asia/Kolkata"
            ]
          },
          {
            name: "Sri Lanka Standard Time",
            abbr: "SLST",
            offset: 5.5,
            isdst: !1,
            text: "(UTC+05:30) Sri Jayawardenepura",
            utc: [
              "Asia/Colombo"
            ]
          },
          {
            name: "Nepal Standard Time",
            abbr: "NST",
            offset: 5.75,
            isdst: !1,
            text: "(UTC+05:45) Kathmandu",
            utc: [
              "Asia/Kathmandu"
            ]
          },
          {
            name: "Central Asia Standard Time",
            abbr: "CAST",
            offset: 6,
            isdst: !1,
            text: "(UTC+06:00) Nur-Sultan (Astana)",
            utc: [
              "Antarctica/Vostok",
              "Asia/Almaty",
              "Asia/Bishkek",
              "Asia/Qyzylorda",
              "Asia/Urumqi",
              "Etc/GMT-6",
              "Indian/Chagos"
            ]
          },
          {
            name: "Bangladesh Standard Time",
            abbr: "BST",
            offset: 6,
            isdst: !1,
            text: "(UTC+06:00) Dhaka",
            utc: [
              "Asia/Dhaka",
              "Asia/Thimphu"
            ]
          },
          {
            name: "Myanmar Standard Time",
            abbr: "MST",
            offset: 6.5,
            isdst: !1,
            text: "(UTC+06:30) Yangon (Rangoon)",
            utc: [
              "Asia/Rangoon",
              "Indian/Cocos"
            ]
          },
          {
            name: "SE Asia Standard Time",
            abbr: "SAST",
            offset: 7,
            isdst: !1,
            text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
            utc: [
              "Antarctica/Davis",
              "Asia/Bangkok",
              "Asia/Hovd",
              "Asia/Jakarta",
              "Asia/Phnom_Penh",
              "Asia/Pontianak",
              "Asia/Saigon",
              "Asia/Vientiane",
              "Etc/GMT-7",
              "Indian/Christmas"
            ]
          },
          {
            name: "N. Central Asia Standard Time",
            abbr: "NCAST",
            offset: 7,
            isdst: !1,
            text: "(UTC+07:00) Novosibirsk",
            utc: [
              "Asia/Novokuznetsk",
              "Asia/Novosibirsk",
              "Asia/Omsk"
            ]
          },
          {
            name: "China Standard Time",
            abbr: "CST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
            utc: [
              "Asia/Hong_Kong",
              "Asia/Macau",
              "Asia/Shanghai"
            ]
          },
          {
            name: "North Asia Standard Time",
            abbr: "NAST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Krasnoyarsk",
            utc: [
              "Asia/Krasnoyarsk"
            ]
          },
          {
            name: "Singapore Standard Time",
            abbr: "MPST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Kuala Lumpur, Singapore",
            utc: [
              "Asia/Brunei",
              "Asia/Kuala_Lumpur",
              "Asia/Kuching",
              "Asia/Makassar",
              "Asia/Manila",
              "Asia/Singapore",
              "Etc/GMT-8"
            ]
          },
          {
            name: "W. Australia Standard Time",
            abbr: "WAST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Perth",
            utc: [
              "Antarctica/Casey",
              "Australia/Perth"
            ]
          },
          {
            name: "Taipei Standard Time",
            abbr: "TST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Taipei",
            utc: [
              "Asia/Taipei"
            ]
          },
          {
            name: "Ulaanbaatar Standard Time",
            abbr: "UST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Ulaanbaatar",
            utc: [
              "Asia/Choibalsan",
              "Asia/Ulaanbaatar"
            ]
          },
          {
            name: "North Asia East Standard Time",
            abbr: "NAEST",
            offset: 8,
            isdst: !1,
            text: "(UTC+08:00) Irkutsk",
            utc: [
              "Asia/Irkutsk"
            ]
          },
          {
            name: "Japan Standard Time",
            abbr: "JST",
            offset: 9,
            isdst: !1,
            text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
            utc: [
              "Asia/Dili",
              "Asia/Jayapura",
              "Asia/Tokyo",
              "Etc/GMT-9",
              "Pacific/Palau"
            ]
          },
          {
            name: "Korea Standard Time",
            abbr: "KST",
            offset: 9,
            isdst: !1,
            text: "(UTC+09:00) Seoul",
            utc: [
              "Asia/Pyongyang",
              "Asia/Seoul"
            ]
          },
          {
            name: "Cen. Australia Standard Time",
            abbr: "CAST",
            offset: 9.5,
            isdst: !1,
            text: "(UTC+09:30) Adelaide",
            utc: [
              "Australia/Adelaide",
              "Australia/Broken_Hill"
            ]
          },
          {
            name: "AUS Central Standard Time",
            abbr: "ACST",
            offset: 9.5,
            isdst: !1,
            text: "(UTC+09:30) Darwin",
            utc: [
              "Australia/Darwin"
            ]
          },
          {
            name: "E. Australia Standard Time",
            abbr: "EAST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Brisbane",
            utc: [
              "Australia/Brisbane",
              "Australia/Lindeman"
            ]
          },
          {
            name: "AUS Eastern Standard Time",
            abbr: "AEST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Canberra, Melbourne, Sydney",
            utc: [
              "Australia/Melbourne",
              "Australia/Sydney"
            ]
          },
          {
            name: "West Pacific Standard Time",
            abbr: "WPST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Guam, Port Moresby",
            utc: [
              "Antarctica/DumontDUrville",
              "Etc/GMT-10",
              "Pacific/Guam",
              "Pacific/Port_Moresby",
              "Pacific/Saipan",
              "Pacific/Truk"
            ]
          },
          {
            name: "Tasmania Standard Time",
            abbr: "TST",
            offset: 10,
            isdst: !1,
            text: "(UTC+10:00) Hobart",
            utc: [
              "Australia/Currie",
              "Australia/Hobart"
            ]
          },
          {
            name: "Yakutsk Standard Time",
            abbr: "YST",
            offset: 9,
            isdst: !1,
            text: "(UTC+09:00) Yakutsk",
            utc: [
              "Asia/Chita",
              "Asia/Khandyga",
              "Asia/Yakutsk"
            ]
          },
          {
            name: "Central Pacific Standard Time",
            abbr: "CPST",
            offset: 11,
            isdst: !1,
            text: "(UTC+11:00) Solomon Is., New Caledonia",
            utc: [
              "Antarctica/Macquarie",
              "Etc/GMT-11",
              "Pacific/Efate",
              "Pacific/Guadalcanal",
              "Pacific/Kosrae",
              "Pacific/Noumea",
              "Pacific/Ponape"
            ]
          },
          {
            name: "Vladivostok Standard Time",
            abbr: "VST",
            offset: 11,
            isdst: !1,
            text: "(UTC+11:00) Vladivostok",
            utc: [
              "Asia/Sakhalin",
              "Asia/Ust-Nera",
              "Asia/Vladivostok"
            ]
          },
          {
            name: "New Zealand Standard Time",
            abbr: "NZST",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Auckland, Wellington",
            utc: [
              "Antarctica/McMurdo",
              "Pacific/Auckland"
            ]
          },
          {
            name: "UTC+12",
            abbr: "U",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Coordinated Universal Time+12",
            utc: [
              "Etc/GMT-12",
              "Pacific/Funafuti",
              "Pacific/Kwajalein",
              "Pacific/Majuro",
              "Pacific/Nauru",
              "Pacific/Tarawa",
              "Pacific/Wake",
              "Pacific/Wallis"
            ]
          },
          {
            name: "Fiji Standard Time",
            abbr: "FST",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Fiji",
            utc: [
              "Pacific/Fiji"
            ]
          },
          {
            name: "Magadan Standard Time",
            abbr: "MST",
            offset: 12,
            isdst: !1,
            text: "(UTC+12:00) Magadan",
            utc: [
              "Asia/Anadyr",
              "Asia/Kamchatka",
              "Asia/Magadan",
              "Asia/Srednekolymsk"
            ]
          },
          {
            name: "Kamchatka Standard Time",
            abbr: "KDT",
            offset: 13,
            isdst: !0,
            text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
            utc: [
              "Asia/Kamchatka"
            ]
          },
          {
            name: "Tonga Standard Time",
            abbr: "TST",
            offset: 13,
            isdst: !1,
            text: "(UTC+13:00) Nuku'alofa",
            utc: [
              "Etc/GMT-13",
              "Pacific/Enderbury",
              "Pacific/Fakaofo",
              "Pacific/Tongatapu"
            ]
          },
          {
            name: "Samoa Standard Time",
            abbr: "SST",
            offset: 13,
            isdst: !1,
            text: "(UTC+13:00) Samoa",
            utc: [
              "Pacific/Apia"
            ]
          }
        ],
        //List source: http://answers.google.com/answers/threadview/id/589312.html
        profession: [
          "Airline Pilot",
          "Academic Team",
          "Accountant",
          "Account Executive",
          "Actor",
          "Actuary",
          "Acquisition Analyst",
          "Administrative Asst.",
          "Administrative Analyst",
          "Administrator",
          "Advertising Director",
          "Aerospace Engineer",
          "Agent",
          "Agricultural Inspector",
          "Agricultural Scientist",
          "Air Traffic Controller",
          "Animal Trainer",
          "Anthropologist",
          "Appraiser",
          "Architect",
          "Art Director",
          "Artist",
          "Astronomer",
          "Athletic Coach",
          "Auditor",
          "Author",
          "Baker",
          "Banker",
          "Bankruptcy Attorney",
          "Benefits Manager",
          "Biologist",
          "Bio-feedback Specialist",
          "Biomedical Engineer",
          "Biotechnical Researcher",
          "Broadcaster",
          "Broker",
          "Building Manager",
          "Building Contractor",
          "Building Inspector",
          "Business Analyst",
          "Business Planner",
          "Business Manager",
          "Buyer",
          "Call Center Manager",
          "Career Counselor",
          "Cash Manager",
          "Ceramic Engineer",
          "Chief Executive Officer",
          "Chief Operation Officer",
          "Chef",
          "Chemical Engineer",
          "Chemist",
          "Child Care Manager",
          "Chief Medical Officer",
          "Chiropractor",
          "Cinematographer",
          "City Housing Manager",
          "City Manager",
          "Civil Engineer",
          "Claims Manager",
          "Clinical Research Assistant",
          "Collections Manager",
          "Compliance Manager",
          "Comptroller",
          "Computer Manager",
          "Commercial Artist",
          "Communications Affairs Director",
          "Communications Director",
          "Communications Engineer",
          "Compensation Analyst",
          "Computer Programmer",
          "Computer Ops. Manager",
          "Computer Engineer",
          "Computer Operator",
          "Computer Graphics Specialist",
          "Construction Engineer",
          "Construction Manager",
          "Consultant",
          "Consumer Relations Manager",
          "Contract Administrator",
          "Copyright Attorney",
          "Copywriter",
          "Corporate Planner",
          "Corrections Officer",
          "Cosmetologist",
          "Credit Analyst",
          "Cruise Director",
          "Chief Information Officer",
          "Chief Technology Officer",
          "Customer Service Manager",
          "Cryptologist",
          "Dancer",
          "Data Security Manager",
          "Database Manager",
          "Day Care Instructor",
          "Dentist",
          "Designer",
          "Design Engineer",
          "Desktop Publisher",
          "Developer",
          "Development Officer",
          "Diamond Merchant",
          "Dietitian",
          "Direct Marketer",
          "Director",
          "Distribution Manager",
          "Diversity Manager",
          "Economist",
          "EEO Compliance Manager",
          "Editor",
          "Education Adminator",
          "Electrical Engineer",
          "Electro Optical Engineer",
          "Electronics Engineer",
          "Embassy Management",
          "Employment Agent",
          "Engineer Technician",
          "Entrepreneur",
          "Environmental Analyst",
          "Environmental Attorney",
          "Environmental Engineer",
          "Environmental Specialist",
          "Escrow Officer",
          "Estimator",
          "Executive Assistant",
          "Executive Director",
          "Executive Recruiter",
          "Facilities Manager",
          "Family Counselor",
          "Fashion Events Manager",
          "Fashion Merchandiser",
          "Fast Food Manager",
          "Film Producer",
          "Film Production Assistant",
          "Financial Analyst",
          "Financial Planner",
          "Financier",
          "Fine Artist",
          "Wildlife Specialist",
          "Fitness Consultant",
          "Flight Attendant",
          "Flight Engineer",
          "Floral Designer",
          "Food & Beverage Director",
          "Food Service Manager",
          "Forestry Technician",
          "Franchise Management",
          "Franchise Sales",
          "Fraud Investigator",
          "Freelance Writer",
          "Fund Raiser",
          "General Manager",
          "Geologist",
          "General Counsel",
          "Geriatric Specialist",
          "Gerontologist",
          "Glamour Photographer",
          "Golf Club Manager",
          "Gourmet Chef",
          "Graphic Designer",
          "Grounds Keeper",
          "Hazardous Waste Manager",
          "Health Care Manager",
          "Health Therapist",
          "Health Service Administrator",
          "Hearing Officer",
          "Home Economist",
          "Horticulturist",
          "Hospital Administrator",
          "Hotel Manager",
          "Human Resources Manager",
          "Importer",
          "Industrial Designer",
          "Industrial Engineer",
          "Information Director",
          "Inside Sales",
          "Insurance Adjuster",
          "Interior Decorator",
          "Internal Controls Director",
          "International Acct.",
          "International Courier",
          "International Lawyer",
          "Interpreter",
          "Investigator",
          "Investment Banker",
          "Investment Manager",
          "IT Architect",
          "IT Project Manager",
          "IT Systems Analyst",
          "Jeweler",
          "Joint Venture Manager",
          "Journalist",
          "Labor Negotiator",
          "Labor Organizer",
          "Labor Relations Manager",
          "Lab Services Director",
          "Lab Technician",
          "Land Developer",
          "Landscape Architect",
          "Law Enforcement Officer",
          "Lawyer",
          "Lead Software Engineer",
          "Lead Software Test Engineer",
          "Leasing Manager",
          "Legal Secretary",
          "Library Manager",
          "Litigation Attorney",
          "Loan Officer",
          "Lobbyist",
          "Logistics Manager",
          "Maintenance Manager",
          "Management Consultant",
          "Managed Care Director",
          "Managing Partner",
          "Manufacturing Director",
          "Manpower Planner",
          "Marine Biologist",
          "Market Res. Analyst",
          "Marketing Director",
          "Materials Manager",
          "Mathematician",
          "Membership Chairman",
          "Mechanic",
          "Mechanical Engineer",
          "Media Buyer",
          "Medical Investor",
          "Medical Secretary",
          "Medical Technician",
          "Mental Health Counselor",
          "Merchandiser",
          "Metallurgical Engineering",
          "Meteorologist",
          "Microbiologist",
          "MIS Manager",
          "Motion Picture Director",
          "Multimedia Director",
          "Musician",
          "Network Administrator",
          "Network Specialist",
          "Network Operator",
          "New Product Manager",
          "Novelist",
          "Nuclear Engineer",
          "Nuclear Specialist",
          "Nutritionist",
          "Nursing Administrator",
          "Occupational Therapist",
          "Oceanographer",
          "Office Manager",
          "Operations Manager",
          "Operations Research Director",
          "Optical Technician",
          "Optometrist",
          "Organizational Development Manager",
          "Outplacement Specialist",
          "Paralegal",
          "Park Ranger",
          "Patent Attorney",
          "Payroll Specialist",
          "Personnel Specialist",
          "Petroleum Engineer",
          "Pharmacist",
          "Photographer",
          "Physical Therapist",
          "Physician",
          "Physician Assistant",
          "Physicist",
          "Planning Director",
          "Podiatrist",
          "Political Analyst",
          "Political Scientist",
          "Politician",
          "Portfolio Manager",
          "Preschool Management",
          "Preschool Teacher",
          "Principal",
          "Private Banker",
          "Private Investigator",
          "Probation Officer",
          "Process Engineer",
          "Producer",
          "Product Manager",
          "Product Engineer",
          "Production Engineer",
          "Production Planner",
          "Professional Athlete",
          "Professional Coach",
          "Professor",
          "Project Engineer",
          "Project Manager",
          "Program Manager",
          "Property Manager",
          "Public Administrator",
          "Public Safety Director",
          "PR Specialist",
          "Publisher",
          "Purchasing Agent",
          "Publishing Director",
          "Quality Assurance Specialist",
          "Quality Control Engineer",
          "Quality Control Inspector",
          "Radiology Manager",
          "Railroad Engineer",
          "Real Estate Broker",
          "Recreational Director",
          "Recruiter",
          "Redevelopment Specialist",
          "Regulatory Affairs Manager",
          "Registered Nurse",
          "Rehabilitation Counselor",
          "Relocation Manager",
          "Reporter",
          "Research Specialist",
          "Restaurant Manager",
          "Retail Store Manager",
          "Risk Analyst",
          "Safety Engineer",
          "Sales Engineer",
          "Sales Trainer",
          "Sales Promotion Manager",
          "Sales Representative",
          "Sales Manager",
          "Service Manager",
          "Sanitation Engineer",
          "Scientific Programmer",
          "Scientific Writer",
          "Securities Analyst",
          "Security Consultant",
          "Security Director",
          "Seminar Presenter",
          "Ship's Officer",
          "Singer",
          "Social Director",
          "Social Program Planner",
          "Social Research",
          "Social Scientist",
          "Social Worker",
          "Sociologist",
          "Software Developer",
          "Software Engineer",
          "Software Test Engineer",
          "Soil Scientist",
          "Special Events Manager",
          "Special Education Teacher",
          "Special Projects Director",
          "Speech Pathologist",
          "Speech Writer",
          "Sports Event Manager",
          "Statistician",
          "Store Manager",
          "Strategic Alliance Director",
          "Strategic Planning Director",
          "Stress Reduction Specialist",
          "Stockbroker",
          "Surveyor",
          "Structural Engineer",
          "Superintendent",
          "Supply Chain Director",
          "System Engineer",
          "Systems Analyst",
          "Systems Programmer",
          "System Administrator",
          "Tax Specialist",
          "Teacher",
          "Technical Support Specialist",
          "Technical Illustrator",
          "Technical Writer",
          "Technology Director",
          "Telecom Analyst",
          "Telemarketer",
          "Theatrical Director",
          "Title Examiner",
          "Tour Escort",
          "Tour Guide Director",
          "Traffic Manager",
          "Trainer Translator",
          "Transportation Manager",
          "Travel Agent",
          "Treasurer",
          "TV Programmer",
          "Underwriter",
          "Union Representative",
          "University Administrator",
          "University Dean",
          "Urban Planner",
          "Veterinarian",
          "Vendor Relations Director",
          "Viticulturist",
          "Warehouse Manager"
        ],
        animals: {
          //list of ocean animals comes from https://owlcation.com/stem/list-of-ocean-animals
          ocean: ["Acantharea", "Anemone", "Angelfish King", "Ahi Tuna", "Albacore", "American Oyster", "Anchovy", "Armored Snail", "Arctic Char", "Atlantic Bluefin Tuna", "Atlantic Cod", "Atlantic Goliath Grouper", "Atlantic Trumpetfish", "Atlantic Wolffish", "Baleen Whale", "Banded Butterflyfish", "Banded Coral Shrimp", "Banded Sea Krait", "Barnacle", "Barndoor Skate", "Barracuda", "Basking Shark", "Bass", "Beluga Whale", "Bluebanded Goby", "Bluehead Wrasse", "Bluefish", "Bluestreak Cleaner-Wrasse", "Blue Marlin", "Blue Shark", "Blue Spiny Lobster", "Blue Tang", "Blue Whale", "Broadclub Cuttlefish", "Bull Shark", "Chambered Nautilus", "Chilean Basket Star", "Chilean Jack Mackerel", "Chinook Salmon", "Christmas Tree Worm", "Clam", "Clown Anemonefish", "Clown Triggerfish", "Cod", "Coelacanth", "Cockscomb Cup Coral", "Common Fangtooth", "Conch", "Cookiecutter Shark", "Copepod", "Coral", "Corydoras", "Cownose Ray", "Crab", "Crown-of-Thorns Starfish", "Cushion Star", "Cuttlefish", "California Sea Otters", "Dolphin", "Dolphinfish", "Dory", "Devil Fish", "Dugong", "Dumbo Octopus", "Dungeness Crab", "Eccentric Sand Dollar", "Edible Sea Cucumber", "Eel", "Elephant Seal", "Elkhorn Coral", "Emperor Shrimp", "Estuarine Crocodile", "Fathead Sculpin", "Fiddler Crab", "Fin Whale", "Flameback", "Flamingo Tongue Snail", "Flashlight Fish", "Flatback Turtle", "Flatfish", "Flying Fish", "Flounder", "Fluke", "French Angelfish", "Frilled Shark", "Fugu (also called Pufferfish)", "Gar", "Geoduck", "Giant Barrel Sponge", "Giant Caribbean Sea Anemone", "Giant Clam", "Giant Isopod", "Giant Kingfish", "Giant Oarfish", "Giant Pacific Octopus", "Giant Pyrosome", "Giant Sea Star", "Giant Squid", "Glowing Sucker Octopus", "Giant Tube Worm", "Goblin Shark", "Goosefish", "Great White Shark", "Greenland Shark", "Grey Atlantic Seal", "Grouper", "Grunion", "Guineafowl Puffer", "Haddock", "Hake", "Halibut", "Hammerhead Shark", "Hapuka", "Harbor Porpoise", "Harbor Seal", "Hatchetfish", "Hawaiian Monk Seal", "Hawksbill Turtle", "Hector's Dolphin", "Hermit Crab", "Herring", "Hoki", "Horn Shark", "Horseshoe Crab", "Humpback Anglerfish", "Humpback Whale", "Icefish", "Imperator Angelfish", "Irukandji Jellyfish", "Isopod", "Ivory Bush Coral", "Japanese Spider Crab", "Jellyfish", "John Dory", "Juan Fernandez Fur Seal", "Killer Whale", "Kiwa Hirsuta", "Krill", "Lagoon Triggerfish", "Lamprey", "Leafy Seadragon", "Leopard Seal", "Limpet", "Ling", "Lionfish", "Lions Mane Jellyfish", "Lobe Coral", "Lobster", "Loggerhead Turtle", "Longnose Sawshark", "Longsnout Seahorse", "Lophelia Coral", "Marrus Orthocanna", "Manatee", "Manta Ray", "Marlin", "Megamouth Shark", "Mexican Lookdown", "Mimic Octopus", "Moon Jelly", "Mollusk", "Monkfish", "Moray Eel", "Mullet", "Mussel", "Megaladon", "Napoleon Wrasse", "Nassau Grouper", "Narwhal", "Nautilus", "Needlefish", "Northern Seahorse", "North Atlantic Right Whale", "Northern Red Snapper", "Norway Lobster", "Nudibranch", "Nurse Shark", "Oarfish", "Ocean Sunfish", "Oceanic Whitetip Shark", "Octopus", "Olive Sea Snake", "Orange Roughy", "Ostracod", "Otter", "Oyster", "Pacific Angelshark", "Pacific Blackdragon", "Pacific Halibut", "Pacific Sardine", "Pacific Sea Nettle Jellyfish", "Pacific White Sided Dolphin", "Pantropical Spotted Dolphin", "Patagonian Toothfish", "Peacock Mantis Shrimp", "Pelagic Thresher Shark", "Penguin", "Peruvian Anchoveta", "Pilchard", "Pink Salmon", "Pinniped", "Plankton", "Porpoise", "Polar Bear", "Portuguese Man o' War", "Pycnogonid Sea Spider", "Quahog", "Queen Angelfish", "Queen Conch", "Queen Parrotfish", "Queensland Grouper", "Ragfish", "Ratfish", "Rattail Fish", "Ray", "Red Drum", "Red King Crab", "Ringed Seal", "Risso's Dolphin", "Ross Seals", "Sablefish", "Salmon", "Sand Dollar", "Sandbar Shark", "Sawfish", "Sarcastic Fringehead", "Scalloped Hammerhead Shark", "Seahorse", "Sea Cucumber", "Sea Lion", "Sea Urchin", "Seal", "Shark", "Shortfin Mako Shark", "Shovelnose Guitarfish", "Shrimp", "Silverside Fish", "Skipjack Tuna", "Slender Snipe Eel", "Smalltooth Sawfish", "Smelts", "Sockeye Salmon", "Southern Stingray", "Sponge", "Spotted Porcupinefish", "Spotted Dolphin", "Spotted Eagle Ray", "Spotted Moray", "Squid", "Squidworm", "Starfish", "Stickleback", "Stonefish", "Stoplight Loosejaw", "Sturgeon", "Swordfish", "Tan Bristlemouth", "Tasseled Wobbegong", "Terrible Claw Lobster", "Threespot Damselfish", "Tiger Prawn", "Tiger Shark", "Tilefish", "Toadfish", "Tropical Two-Wing Flyfish", "Tuna", "Umbrella Squid", "Velvet Crab", "Venus Flytrap Sea Anemone", "Vigtorniella Worm", "Viperfish", "Vampire Squid", "Vaquita", "Wahoo", "Walrus", "West Indian Manatee", "Whale", "Whale Shark", "Whiptail Gulper", "White-Beaked Dolphin", "White-Ring Garden Eel", "White Shrimp", "Wobbegong", "Wrasse", "Wreckfish", "Xiphosura", "Yellowtail Damselfish", "Yelloweye Rockfish", "Yellow Cup Black Coral", "Yellow Tube Sponge", "Yellowfin Tuna", "Zebrashark", "Zooplankton"],
          //list of desert, grassland, and forest animals comes from http://www.skyenimals.com/
          desert: ["Aardwolf", "Addax", "African Wild Ass", "Ant", "Antelope", "Armadillo", "Baboon", "Badger", "Bat", "Bearded Dragon", "Beetle", "Bird", "Black-footed Cat", "Boa", "Brown Bear", "Bustard", "Butterfly", "Camel", "Caracal", "Caracara", "Caterpillar", "Centipede", "Cheetah", "Chipmunk", "Chuckwalla", "Climbing Mouse", "Coati", "Cobra", "Cotton Rat", "Cougar", "Courser", "Crane Fly", "Crow", "Dassie Rat", "Dove", "Dunnart", "Eagle", "Echidna", "Elephant", "Emu", "Falcon", "Fly", "Fox", "Frogmouth", "Gecko", "Geoffroy's Cat", "Gerbil", "Grasshopper", "Guanaco", "Gundi", "Hamster", "Hawk", "Hedgehog", "Hyena", "Hyrax", "Jackal", "Kangaroo", "Kangaroo Rat", "Kestrel", "Kowari", "Kultarr", "Leopard", "Lion", "Macaw", "Meerkat", "Mouse", "Oryx", "Ostrich", "Owl", "Pronghorn", "Python", "Rabbit", "Raccoon", "Rattlesnake", "Rhinoceros", "Sand Cat", "Spectacled Bear", "Spiny Mouse", "Starling", "Stick Bug", "Tarantula", "Tit", "Toad", "Tortoise", "Tyrant Flycatcher", "Viper", "Vulture", "Waxwing", "Xerus", "Zebra"],
          grassland: ["Aardvark", "Aardwolf", "Accentor", "African Buffalo", "African Wild Dog", "Alpaca", "Anaconda", "Ant", "Anteater", "Antelope", "Armadillo", "Baboon", "Badger", "Bandicoot", "Barbet", "Bat", "Bee", "Bee-eater", "Beetle", "Bird", "Bison", "Black-footed Cat", "Black-footed Ferret", "Bluebird", "Boa", "Bowerbird", "Brown Bear", "Bush Dog", "Bushshrike", "Bustard", "Butterfly", "Buzzard", "Caracal", "Caracara", "Cardinal", "Caterpillar", "Cheetah", "Chipmunk", "Civet", "Climbing Mouse", "Clouded Leopard", "Coati", "Cobra", "Cockatoo", "Cockroach", "Common Genet", "Cotton Rat", "Cougar", "Courser", "Coyote", "Crane", "Crane Fly", "Cricket", "Crow", "Culpeo", "Death Adder", "Deer", "Deer Mouse", "Dingo", "Dinosaur", "Dove", "Drongo", "Duck", "Duiker", "Dunnart", "Eagle", "Echidna", "Elephant", "Elk", "Emu", "Falcon", "Finch", "Flea", "Fly", "Flying Frog", "Fox", "Frog", "Frogmouth", "Garter Snake", "Gazelle", "Gecko", "Geoffroy's Cat", "Gerbil", "Giant Tortoise", "Giraffe", "Grasshopper", "Grison", "Groundhog", "Grouse", "Guanaco", "Guinea Pig", "Hamster", "Harrier", "Hartebeest", "Hawk", "Hedgehog", "Helmetshrike", "Hippopotamus", "Hornbill", "Hyena", "Hyrax", "Impala", "Jackal", "Jaguar", "Jaguarundi", "Kangaroo", "Kangaroo Rat", "Kestrel", "Kultarr", "Ladybug", "Leopard", "Lion", "Macaw", "Meerkat", "Mouse", "Newt", "Oryx", "Ostrich", "Owl", "Pangolin", "Pheasant", "Prairie Dog", "Pronghorn", "Przewalski's Horse", "Python", "Quoll", "Rabbit", "Raven", "Rhinoceros", "Shelduck", "Sloth Bear", "Spectacled Bear", "Squirrel", "Starling", "Stick Bug", "Tamandua", "Tasmanian Devil", "Thornbill", "Thrush", "Toad", "Tortoise"],
          forest: ["Agouti", "Anaconda", "Anoa", "Ant", "Anteater", "Antelope", "Armadillo", "Asian Black Bear", "Aye-aye", "Babirusa", "Baboon", "Badger", "Bandicoot", "Banteng", "Barbet", "Basilisk", "Bat", "Bearded Dragon", "Bee", "Bee-eater", "Beetle", "Bettong", "Binturong", "Bird-of-paradise", "Bongo", "Bowerbird", "Bulbul", "Bush Dog", "Bushbaby", "Bushshrike", "Butterfly", "Buzzard", "Caecilian", "Cardinal", "Cassowary", "Caterpillar", "Centipede", "Chameleon", "Chimpanzee", "Cicada", "Civet", "Clouded Leopard", "Coati", "Cobra", "Cockatoo", "Cockroach", "Colugo", "Cotinga", "Cotton Rat", "Cougar", "Crane Fly", "Cricket", "Crocodile", "Crow", "Cuckoo", "Cuscus", "Death Adder", "Deer", "Dhole", "Dingo", "Dinosaur", "Drongo", "Duck", "Duiker", "Eagle", "Echidna", "Elephant", "Finch", "Flat-headed Cat", "Flea", "Flowerpecker", "Fly", "Flying Frog", "Fossa", "Frog", "Frogmouth", "Gaur", "Gecko", "Gorilla", "Grison", "Hawaiian Honeycreeper", "Hawk", "Hedgehog", "Helmetshrike", "Hornbill", "Hyrax", "Iguana", "Jackal", "Jaguar", "Jaguarundi", "Kestrel", "Ladybug", "Lemur", "Leopard", "Lion", "Macaw", "Mandrill", "Margay", "Monkey", "Mouse", "Mouse Deer", "Newt", "Okapi", "Old World Flycatcher", "Orangutan", "Owl", "Pangolin", "Peafowl", "Pheasant", "Possum", "Python", "Quokka", "Rabbit", "Raccoon", "Red Panda", "Red River Hog", "Rhinoceros", "Sloth Bear", "Spectacled Bear", "Squirrel", "Starling", "Stick Bug", "Sun Bear", "Tamandua", "Tamarin", "Tapir", "Tarantula", "Thrush", "Tiger", "Tit", "Toad", "Tortoise", "Toucan", "Trogon", "Trumpeter", "Turaco", "Turtle", "Tyrant Flycatcher", "Viper", "Vulture", "Wallaby", "Warbler", "Wasp", "Waxwing", "Weaver", "Weaver-finch", "Whistler", "White-eye", "Whydah", "Woodswallow", "Worm", "Wren", "Xenops", "Yellowjacket", "Accentor", "African Buffalo", "American Black Bear", "Anole", "Bird", "Bison", "Boa", "Brown Bear", "Chipmunk", "Common Genet", "Copperhead", "Coyote", "Deer Mouse", "Dormouse", "Elk", "Emu", "Fisher", "Fox", "Garter Snake", "Giant Panda", "Giant Tortoise", "Groundhog", "Grouse", "Guanaco", "Himalayan Tahr", "Kangaroo", "Koala", "Numbat", "Quoll", "Raccoon dog", "Tasmanian Devil", "Thornbill", "Turkey", "Vole", "Weasel", "Wildcat", "Wolf", "Wombat", "Woodchuck", "Woodpecker"],
          //list of farm animals comes from https://www.buzzle.com/articles/farm-animals-list.html
          farm: ["Alpaca", "Buffalo", "Banteng", "Cow", "Cat", "Chicken", "Carp", "Camel", "Donkey", "Dog", "Duck", "Emu", "Goat", "Gayal", "Guinea", "Goose", "Horse", "Honey", "Llama", "Pig", "Pigeon", "Rhea", "Rabbit", "Sheep", "Silkworm", "Turkey", "Yak", "Zebu"],
          //list of pet animals comes from https://www.dogbreedinfo.com/pets/pet.htm
          pet: ["Bearded Dragon", "Birds", "Burro", "Cats", "Chameleons", "Chickens", "Chinchillas", "Chinese Water Dragon", "Cows", "Dogs", "Donkey", "Ducks", "Ferrets", "Fish", "Geckos", "Geese", "Gerbils", "Goats", "Guinea Fowl", "Guinea Pigs", "Hamsters", "Hedgehogs", "Horses", "Iguanas", "Llamas", "Lizards", "Mice", "Mule", "Peafowl", "Pigs and Hogs", "Pigeons", "Ponies", "Pot Bellied Pig", "Rabbits", "Rats", "Sheep", "Skinks", "Snakes", "Stick Insects", "Sugar Gliders", "Tarantula", "Turkeys", "Turtles"],
          //list of zoo animals comes from https://bronxzoo.com/animals
          zoo: ["Aardvark", "African Wild Dog", "Aldabra Tortoise", "American Alligator", "American Bison", "Amur Tiger", "Anaconda", "Andean Condor", "Asian Elephant", "Baby Doll Sheep", "Bald Eagle", "Barred Owl", "Blue Iguana", "Boer Goat", "California Sea Lion", "Caribbean Flamingo", "Chinchilla", "Collared Lemur", "Coquerel's Sifaka", "Cuban Amazon Parrot", "Ebony Langur", "Fennec Fox", "Fossa", "Gelada", "Giant Anteater", "Giraffe", "Gorilla", "Grizzly Bear", "Henkel's Leaf-tailed Gecko", "Indian Gharial", "Indian Rhinoceros", "King Cobra", "King Vulture", "Komodo Dragon", "Linne's Two-toed Sloth", "Lion", "Little Penguin", "Madagascar Tree Boa", "Magellanic Penguin", "Malayan Tapir", "Malayan Tiger", "Matschies Tree Kangaroo", "Mini Donkey", "Monarch Butterfly", "Nile crocodile", "North American Porcupine", "Nubian Ibex", "Okapi", "Poison Dart Frog", "Polar Bear", "Pygmy Marmoset", "Radiated Tortoise", "Red Panda", "Red Ruffed Lemur", "Ring-tailed Lemur", "Ring-tailed Mongoose", "Rock Hyrax", "Small Clawed Asian Otter", "Snow Leopard", "Snowy Owl", "Southern White-faced Owl", "Southern White Rhinocerous", "Squirrel Monkey", "Tufted Puffin", "White Cheeked Gibbon", "White-throated Bee Eater", "Zebra"]
        },
        primes: [
          // 1230 first primes, i.e. all primes up to the first one greater than 10000, inclusive.
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43,
          47,
          53,
          59,
          61,
          67,
          71,
          73,
          79,
          83,
          89,
          97,
          101,
          103,
          107,
          109,
          113,
          127,
          131,
          137,
          139,
          149,
          151,
          157,
          163,
          167,
          173,
          179,
          181,
          191,
          193,
          197,
          199,
          211,
          223,
          227,
          229,
          233,
          239,
          241,
          251,
          257,
          263,
          269,
          271,
          277,
          281,
          283,
          293,
          307,
          311,
          313,
          317,
          331,
          337,
          347,
          349,
          353,
          359,
          367,
          373,
          379,
          383,
          389,
          397,
          401,
          409,
          419,
          421,
          431,
          433,
          439,
          443,
          449,
          457,
          461,
          463,
          467,
          479,
          487,
          491,
          499,
          503,
          509,
          521,
          523,
          541,
          547,
          557,
          563,
          569,
          571,
          577,
          587,
          593,
          599,
          601,
          607,
          613,
          617,
          619,
          631,
          641,
          643,
          647,
          653,
          659,
          661,
          673,
          677,
          683,
          691,
          701,
          709,
          719,
          727,
          733,
          739,
          743,
          751,
          757,
          761,
          769,
          773,
          787,
          797,
          809,
          811,
          821,
          823,
          827,
          829,
          839,
          853,
          857,
          859,
          863,
          877,
          881,
          883,
          887,
          907,
          911,
          919,
          929,
          937,
          941,
          947,
          953,
          967,
          971,
          977,
          983,
          991,
          997,
          1009,
          1013,
          1019,
          1021,
          1031,
          1033,
          1039,
          1049,
          1051,
          1061,
          1063,
          1069,
          1087,
          1091,
          1093,
          1097,
          1103,
          1109,
          1117,
          1123,
          1129,
          1151,
          1153,
          1163,
          1171,
          1181,
          1187,
          1193,
          1201,
          1213,
          1217,
          1223,
          1229,
          1231,
          1237,
          1249,
          1259,
          1277,
          1279,
          1283,
          1289,
          1291,
          1297,
          1301,
          1303,
          1307,
          1319,
          1321,
          1327,
          1361,
          1367,
          1373,
          1381,
          1399,
          1409,
          1423,
          1427,
          1429,
          1433,
          1439,
          1447,
          1451,
          1453,
          1459,
          1471,
          1481,
          1483,
          1487,
          1489,
          1493,
          1499,
          1511,
          1523,
          1531,
          1543,
          1549,
          1553,
          1559,
          1567,
          1571,
          1579,
          1583,
          1597,
          1601,
          1607,
          1609,
          1613,
          1619,
          1621,
          1627,
          1637,
          1657,
          1663,
          1667,
          1669,
          1693,
          1697,
          1699,
          1709,
          1721,
          1723,
          1733,
          1741,
          1747,
          1753,
          1759,
          1777,
          1783,
          1787,
          1789,
          1801,
          1811,
          1823,
          1831,
          1847,
          1861,
          1867,
          1871,
          1873,
          1877,
          1879,
          1889,
          1901,
          1907,
          1913,
          1931,
          1933,
          1949,
          1951,
          1973,
          1979,
          1987,
          1993,
          1997,
          1999,
          2003,
          2011,
          2017,
          2027,
          2029,
          2039,
          2053,
          2063,
          2069,
          2081,
          2083,
          2087,
          2089,
          2099,
          2111,
          2113,
          2129,
          2131,
          2137,
          2141,
          2143,
          2153,
          2161,
          2179,
          2203,
          2207,
          2213,
          2221,
          2237,
          2239,
          2243,
          2251,
          2267,
          2269,
          2273,
          2281,
          2287,
          2293,
          2297,
          2309,
          2311,
          2333,
          2339,
          2341,
          2347,
          2351,
          2357,
          2371,
          2377,
          2381,
          2383,
          2389,
          2393,
          2399,
          2411,
          2417,
          2423,
          2437,
          2441,
          2447,
          2459,
          2467,
          2473,
          2477,
          2503,
          2521,
          2531,
          2539,
          2543,
          2549,
          2551,
          2557,
          2579,
          2591,
          2593,
          2609,
          2617,
          2621,
          2633,
          2647,
          2657,
          2659,
          2663,
          2671,
          2677,
          2683,
          2687,
          2689,
          2693,
          2699,
          2707,
          2711,
          2713,
          2719,
          2729,
          2731,
          2741,
          2749,
          2753,
          2767,
          2777,
          2789,
          2791,
          2797,
          2801,
          2803,
          2819,
          2833,
          2837,
          2843,
          2851,
          2857,
          2861,
          2879,
          2887,
          2897,
          2903,
          2909,
          2917,
          2927,
          2939,
          2953,
          2957,
          2963,
          2969,
          2971,
          2999,
          3001,
          3011,
          3019,
          3023,
          3037,
          3041,
          3049,
          3061,
          3067,
          3079,
          3083,
          3089,
          3109,
          3119,
          3121,
          3137,
          3163,
          3167,
          3169,
          3181,
          3187,
          3191,
          3203,
          3209,
          3217,
          3221,
          3229,
          3251,
          3253,
          3257,
          3259,
          3271,
          3299,
          3301,
          3307,
          3313,
          3319,
          3323,
          3329,
          3331,
          3343,
          3347,
          3359,
          3361,
          3371,
          3373,
          3389,
          3391,
          3407,
          3413,
          3433,
          3449,
          3457,
          3461,
          3463,
          3467,
          3469,
          3491,
          3499,
          3511,
          3517,
          3527,
          3529,
          3533,
          3539,
          3541,
          3547,
          3557,
          3559,
          3571,
          3581,
          3583,
          3593,
          3607,
          3613,
          3617,
          3623,
          3631,
          3637,
          3643,
          3659,
          3671,
          3673,
          3677,
          3691,
          3697,
          3701,
          3709,
          3719,
          3727,
          3733,
          3739,
          3761,
          3767,
          3769,
          3779,
          3793,
          3797,
          3803,
          3821,
          3823,
          3833,
          3847,
          3851,
          3853,
          3863,
          3877,
          3881,
          3889,
          3907,
          3911,
          3917,
          3919,
          3923,
          3929,
          3931,
          3943,
          3947,
          3967,
          3989,
          4001,
          4003,
          4007,
          4013,
          4019,
          4021,
          4027,
          4049,
          4051,
          4057,
          4073,
          4079,
          4091,
          4093,
          4099,
          4111,
          4127,
          4129,
          4133,
          4139,
          4153,
          4157,
          4159,
          4177,
          4201,
          4211,
          4217,
          4219,
          4229,
          4231,
          4241,
          4243,
          4253,
          4259,
          4261,
          4271,
          4273,
          4283,
          4289,
          4297,
          4327,
          4337,
          4339,
          4349,
          4357,
          4363,
          4373,
          4391,
          4397,
          4409,
          4421,
          4423,
          4441,
          4447,
          4451,
          4457,
          4463,
          4481,
          4483,
          4493,
          4507,
          4513,
          4517,
          4519,
          4523,
          4547,
          4549,
          4561,
          4567,
          4583,
          4591,
          4597,
          4603,
          4621,
          4637,
          4639,
          4643,
          4649,
          4651,
          4657,
          4663,
          4673,
          4679,
          4691,
          4703,
          4721,
          4723,
          4729,
          4733,
          4751,
          4759,
          4783,
          4787,
          4789,
          4793,
          4799,
          4801,
          4813,
          4817,
          4831,
          4861,
          4871,
          4877,
          4889,
          4903,
          4909,
          4919,
          4931,
          4933,
          4937,
          4943,
          4951,
          4957,
          4967,
          4969,
          4973,
          4987,
          4993,
          4999,
          5003,
          5009,
          5011,
          5021,
          5023,
          5039,
          5051,
          5059,
          5077,
          5081,
          5087,
          5099,
          5101,
          5107,
          5113,
          5119,
          5147,
          5153,
          5167,
          5171,
          5179,
          5189,
          5197,
          5209,
          5227,
          5231,
          5233,
          5237,
          5261,
          5273,
          5279,
          5281,
          5297,
          5303,
          5309,
          5323,
          5333,
          5347,
          5351,
          5381,
          5387,
          5393,
          5399,
          5407,
          5413,
          5417,
          5419,
          5431,
          5437,
          5441,
          5443,
          5449,
          5471,
          5477,
          5479,
          5483,
          5501,
          5503,
          5507,
          5519,
          5521,
          5527,
          5531,
          5557,
          5563,
          5569,
          5573,
          5581,
          5591,
          5623,
          5639,
          5641,
          5647,
          5651,
          5653,
          5657,
          5659,
          5669,
          5683,
          5689,
          5693,
          5701,
          5711,
          5717,
          5737,
          5741,
          5743,
          5749,
          5779,
          5783,
          5791,
          5801,
          5807,
          5813,
          5821,
          5827,
          5839,
          5843,
          5849,
          5851,
          5857,
          5861,
          5867,
          5869,
          5879,
          5881,
          5897,
          5903,
          5923,
          5927,
          5939,
          5953,
          5981,
          5987,
          6007,
          6011,
          6029,
          6037,
          6043,
          6047,
          6053,
          6067,
          6073,
          6079,
          6089,
          6091,
          6101,
          6113,
          6121,
          6131,
          6133,
          6143,
          6151,
          6163,
          6173,
          6197,
          6199,
          6203,
          6211,
          6217,
          6221,
          6229,
          6247,
          6257,
          6263,
          6269,
          6271,
          6277,
          6287,
          6299,
          6301,
          6311,
          6317,
          6323,
          6329,
          6337,
          6343,
          6353,
          6359,
          6361,
          6367,
          6373,
          6379,
          6389,
          6397,
          6421,
          6427,
          6449,
          6451,
          6469,
          6473,
          6481,
          6491,
          6521,
          6529,
          6547,
          6551,
          6553,
          6563,
          6569,
          6571,
          6577,
          6581,
          6599,
          6607,
          6619,
          6637,
          6653,
          6659,
          6661,
          6673,
          6679,
          6689,
          6691,
          6701,
          6703,
          6709,
          6719,
          6733,
          6737,
          6761,
          6763,
          6779,
          6781,
          6791,
          6793,
          6803,
          6823,
          6827,
          6829,
          6833,
          6841,
          6857,
          6863,
          6869,
          6871,
          6883,
          6899,
          6907,
          6911,
          6917,
          6947,
          6949,
          6959,
          6961,
          6967,
          6971,
          6977,
          6983,
          6991,
          6997,
          7001,
          7013,
          7019,
          7027,
          7039,
          7043,
          7057,
          7069,
          7079,
          7103,
          7109,
          7121,
          7127,
          7129,
          7151,
          7159,
          7177,
          7187,
          7193,
          7207,
          7211,
          7213,
          7219,
          7229,
          7237,
          7243,
          7247,
          7253,
          7283,
          7297,
          7307,
          7309,
          7321,
          7331,
          7333,
          7349,
          7351,
          7369,
          7393,
          7411,
          7417,
          7433,
          7451,
          7457,
          7459,
          7477,
          7481,
          7487,
          7489,
          7499,
          7507,
          7517,
          7523,
          7529,
          7537,
          7541,
          7547,
          7549,
          7559,
          7561,
          7573,
          7577,
          7583,
          7589,
          7591,
          7603,
          7607,
          7621,
          7639,
          7643,
          7649,
          7669,
          7673,
          7681,
          7687,
          7691,
          7699,
          7703,
          7717,
          7723,
          7727,
          7741,
          7753,
          7757,
          7759,
          7789,
          7793,
          7817,
          7823,
          7829,
          7841,
          7853,
          7867,
          7873,
          7877,
          7879,
          7883,
          7901,
          7907,
          7919,
          7927,
          7933,
          7937,
          7949,
          7951,
          7963,
          7993,
          8009,
          8011,
          8017,
          8039,
          8053,
          8059,
          8069,
          8081,
          8087,
          8089,
          8093,
          8101,
          8111,
          8117,
          8123,
          8147,
          8161,
          8167,
          8171,
          8179,
          8191,
          8209,
          8219,
          8221,
          8231,
          8233,
          8237,
          8243,
          8263,
          8269,
          8273,
          8287,
          8291,
          8293,
          8297,
          8311,
          8317,
          8329,
          8353,
          8363,
          8369,
          8377,
          8387,
          8389,
          8419,
          8423,
          8429,
          8431,
          8443,
          8447,
          8461,
          8467,
          8501,
          8513,
          8521,
          8527,
          8537,
          8539,
          8543,
          8563,
          8573,
          8581,
          8597,
          8599,
          8609,
          8623,
          8627,
          8629,
          8641,
          8647,
          8663,
          8669,
          8677,
          8681,
          8689,
          8693,
          8699,
          8707,
          8713,
          8719,
          8731,
          8737,
          8741,
          8747,
          8753,
          8761,
          8779,
          8783,
          8803,
          8807,
          8819,
          8821,
          8831,
          8837,
          8839,
          8849,
          8861,
          8863,
          8867,
          8887,
          8893,
          8923,
          8929,
          8933,
          8941,
          8951,
          8963,
          8969,
          8971,
          8999,
          9001,
          9007,
          9011,
          9013,
          9029,
          9041,
          9043,
          9049,
          9059,
          9067,
          9091,
          9103,
          9109,
          9127,
          9133,
          9137,
          9151,
          9157,
          9161,
          9173,
          9181,
          9187,
          9199,
          9203,
          9209,
          9221,
          9227,
          9239,
          9241,
          9257,
          9277,
          9281,
          9283,
          9293,
          9311,
          9319,
          9323,
          9337,
          9341,
          9343,
          9349,
          9371,
          9377,
          9391,
          9397,
          9403,
          9413,
          9419,
          9421,
          9431,
          9433,
          9437,
          9439,
          9461,
          9463,
          9467,
          9473,
          9479,
          9491,
          9497,
          9511,
          9521,
          9533,
          9539,
          9547,
          9551,
          9587,
          9601,
          9613,
          9619,
          9623,
          9629,
          9631,
          9643,
          9649,
          9661,
          9677,
          9679,
          9689,
          9697,
          9719,
          9721,
          9733,
          9739,
          9743,
          9749,
          9767,
          9769,
          9781,
          9787,
          9791,
          9803,
          9811,
          9817,
          9829,
          9833,
          9839,
          9851,
          9857,
          9859,
          9871,
          9883,
          9887,
          9901,
          9907,
          9923,
          9929,
          9931,
          9941,
          9949,
          9967,
          9973,
          10007
        ],
        emotions: [
          "love",
          "joy",
          "surprise",
          "anger",
          "sadness",
          "fear"
        ],
        music_genres: {
          general: [
            "Rock",
            "Pop",
            "Hip-Hop",
            "Jazz",
            "Classical",
            "Electronic",
            "Country",
            "R&B",
            "Reggae",
            "Blues",
            "Metal",
            "Folk",
            "Alternative",
            "Punk",
            "Disco",
            "Funk",
            "Techno",
            "Indie",
            "Gospel",
            "Dance",
            "Children's",
            "World"
          ],
          alternative: [
            "Art Punk",
            "Alternative Rock",
            "Britpunk",
            "College Rock",
            "Crossover Thrash",
            "Crust Punk",
            "Emo / Emocore",
            "Experimental Rock",
            "Folk Punk",
            "Goth / Gothic Rock",
            "Grunge",
            "Hardcore Punk",
            "Hard Rock",
            "Indie Rock",
            "Lo-fi",
            "Musique Concr\xE8te",
            "New Wave",
            "Progressive Rock",
            "Punk",
            "Shoegaze",
            "Steampunk"
          ],
          blues: [
            "Acoustic Blues",
            "African Blues",
            "Blues Rock",
            "Blues Shouter",
            "British Blues",
            "Canadian Blues",
            "Chicago Blues",
            "Classic Blues",
            "Classic Female Blues",
            "Contemporary Blues",
            "Country Blues",
            "Dark Blues",
            "Delta Blues",
            "Detroit Blues",
            "Doom Blues",
            "Electric Blues",
            "Folk Blues",
            "Gospel Blues",
            "Harmonica Blues",
            "Hill Country Blues",
            "Hokum Blues",
            "Jazz Blues",
            "Jump Blues",
            "Kansas City Blues",
            "Louisiana Blues",
            "Memphis Blues",
            "Modern Blues",
            "New Orlean Blues",
            "NY Blues",
            "Piano Blues",
            "Piedmont Blues",
            "Punk Blues",
            "Ragtime Blues",
            "Rhythm Blues",
            "Soul Blues",
            "St.Louis Blues",
            "Soul Blues",
            "Swamp Blues",
            "Texas Blues",
            "Urban Blues",
            "Vandeville",
            "West Coast Blues"
          ],
          "children's": [
            "Lullabies",
            "Sing - Along",
            "Stories"
          ],
          classical: [
            "Avant-Garde",
            "Ballet",
            "Baroque",
            "Cantata",
            "Chamber Music",
            "String Quartet",
            "Chant",
            "Choral",
            "Classical Crossover",
            "Concerto",
            "Concerto Grosso",
            "Contemporary Classical",
            "Early Music",
            "Expressionist",
            "High Classical",
            "Impressionist",
            "Mass Requiem",
            "Medieval",
            "Minimalism",
            "Modern Composition",
            "Modern Classical",
            "Opera",
            "Oratorio",
            "Orchestral",
            "Organum",
            "Renaissance",
            "Romantic (early period)",
            "Romantic (later period)",
            "Sonata",
            "Symphonic",
            "Symphony",
            "Twelve-tone",
            "Wedding Music"
          ],
          country: [
            "Alternative Country",
            "Americana",
            "Australian Country",
            "Bakersfield Sound",
            "Bluegrass",
            "Blues Country",
            "Cajun Fiddle Tunes",
            "Christian Country",
            "Classic Country",
            "Close Harmony",
            "Contemporary Bluegrass",
            "Contemporary Country",
            "Country Gospel",
            "Country Pop",
            "Country Rap",
            "Country Rock",
            "Country Soul",
            "Cowboy / Western",
            "Cowpunk",
            "Dansband",
            "Honky Tonk",
            "Franco-Country",
            "Gulf and Western",
            "Hellbilly Music",
            "Honky Tonk",
            "Instrumental Country",
            "Lubbock Sound",
            "Nashville Sound",
            "Neotraditional Country",
            "Outlaw Country",
            "Progressive",
            "Psychobilly / Punkabilly",
            "Red Dirt",
            "Sertanejo",
            "Texas County",
            "Traditional Bluegrass",
            "Traditional Country",
            "Truck-Driving Country",
            "Urban Cowboy",
            "Western Swing"
          ],
          dance: [
            "Club / Club Dance",
            "Breakcore",
            "Breakbeat / Breakstep",
            "Chillstep",
            "Deep House",
            "Dubstep",
            "Dancehall",
            "Electro House",
            "Electroswing",
            "Exercise",
            "Future Garage",
            "Garage",
            "Glitch Hop",
            "Glitch Pop",
            "Grime",
            "Hardcore",
            "Hard Dance",
            "Hi-NRG / Eurodance",
            "Horrorcore",
            "House",
            "Jackin House",
            "Jungle / Drum n bass",
            "Liquid Dub",
            "Regstep",
            "Speedcore",
            "Techno",
            "Trance",
            "Trap"
          ],
          electronic: [
            "2-Step",
            "8bit",
            "Ambient",
            "Asian Underground",
            "Bassline",
            "Chillwave",
            "Chiptune",
            "Crunk",
            "Downtempo",
            "Drum & Bass",
            "Hard Step",
            "Electro",
            "Electro-swing",
            "Electroacoustic",
            "Electronica",
            "Electronic Rock",
            "Eurodance",
            "Hardstyle",
            "Hi-Nrg",
            "IDM/Experimental",
            "Industrial",
            "Trip Hop",
            "Vaporwave",
            "UK Garage",
            "House",
            "Dubstep",
            "Deep House",
            "EDM",
            "Future Bass",
            "Psychedelic trance"
          ],
          jazz: [
            "Acid Jazz",
            "Afro-Cuban Jazz",
            "Avant-Garde Jazz",
            "Bebop",
            "Big Band",
            "Blue Note",
            "British Dance Band (Jazz)",
            "Cape Jazz",
            "Chamber Jazz",
            "Contemporary Jazz",
            "Continental Jazz",
            "Cool Jazz",
            "Crossover Jazz",
            "Dark Jazz",
            "Dixieland",
            "Early Jazz",
            "Electro Swing (Jazz)",
            "Ethio-jazz",
            "Ethno-Jazz",
            "European Free Jazz",
            "Free Funk (Avant-Garde / Funk Jazz)",
            "Free Jazz",
            "Fusion",
            "Gypsy Jazz",
            "Hard Bop",
            "Indo Jazz",
            "Jazz Blues",
            "Jazz-Funk (see Free Funk)",
            "Jazz-Fusion",
            "Jazz Rap",
            "Jazz Rock",
            "Kansas City Jazz",
            "Latin Jazz",
            "M-Base Jazz",
            "Mainstream Jazz",
            "Modal Jazz",
            "Neo-Bop",
            "Neo-Swing",
            "Nu Jazz",
            "Orchestral Jazz",
            "Post-Bop",
            "Punk Jazz",
            "Ragtime",
            "Ska Jazz",
            "Skiffle (also Folk)",
            "Smooth Jazz",
            "Soul Jazz",
            "Swing Jazz",
            "Straight-Ahead Jazz",
            "Trad Jazz",
            "Third Stream",
            "Jazz-Funk",
            "Free Jazz",
            "West Coast Jazz"
          ],
          metal: [
            "Heavy Metal",
            "Speed Metal",
            "Thrash Metal",
            "Power Metal",
            "Death Metal",
            "Black Metal",
            "Pagan Metal",
            "Viking Metal",
            "Folk Metal",
            "Symphonic Metal",
            "Gothic Metal",
            "Glam Metal",
            "Hair Metal",
            "Doom Metal",
            "Groove Metal",
            "Industrial Metal",
            "Modern Metal",
            "Neoclassical Metal",
            "New Wave Of British Heavy Metal",
            "Post Metal",
            "Progressive Metal",
            "Avantgarde Metal",
            "Sludge",
            "Djent",
            "Drone",
            "Kawaii Metal",
            "Pirate Metal",
            "Nu Metal",
            "Neue Deutsche H\xE4rte",
            "Math Metal",
            "Crossover",
            "Grindcore",
            "Hardcore",
            "Metalcore",
            "Deathcore",
            "Post Hardcore",
            "Mathcore"
          ],
          folk: [
            "American Folk Revival",
            "Anti - Folk",
            "British Folk Revival",
            "Contemporary Folk",
            "Filk Music",
            "Freak Folk",
            "Indie Folk",
            "Industrial Folk",
            "Neofolk",
            "Progressive Folk",
            "Psychedelic Folk",
            "Sung Poetry",
            "Techno - Folk",
            "Folk Rock",
            "Old-time Music",
            "Bluegrass",
            "Appalachian",
            "Roots Revival",
            "Celtic",
            "Indie Folk"
          ],
          pop: [
            "Adult Contemporary",
            "Arab Pop",
            "Baroque",
            "Britpop",
            "Bubblegum Pop",
            "Chamber Pop",
            "Chanson",
            "Christian Pop",
            "Classical Crossover",
            "Europop",
            "Austropop",
            "Balkan Pop",
            "French Pop",
            "Korean Pop",
            "Japanese Pop",
            "Chinese Pop",
            "Latin Pop",
            "La\xEFk\xF3",
            "Nederpop",
            "Russian Pop",
            "Dance Pop",
            "Dream Pop",
            "Electro Pop",
            "Iranian Pop",
            "Jangle Pop",
            "Latin Ballad",
            "Levenslied",
            "Louisiana Swamp Pop",
            "Mexican Pop",
            "Motorpop",
            "New Romanticism",
            "Orchestral Pop",
            "Pop Rap",
            "Popera",
            "Pop / Rock",
            "Pop Punk",
            "Power Pop",
            "Psychedelic Pop",
            "Russian Pop",
            "Schlager",
            "Soft Rock",
            "Sophisti - Pop",
            "Space Age Pop",
            "Sunshine Pop",
            "Surf Pop",
            "Synthpop",
            "Teen Pop",
            "Traditional Pop Music",
            "Turkish Pop",
            "Vispop",
            "Wonky Pop"
          ],
          "r&b": [
            "(Carolina) Beach Music",
            "Contemporary R & B",
            "Disco",
            "Doo Wop",
            "Funk",
            "Modern Soul",
            "Motown",
            "Neo - Soul",
            "Northern Soul",
            "Psychedelic Soul",
            "Quiet Storm",
            "Soul",
            "Soul Blues",
            "Southern Soul"
          ],
          reggae: [
            "2 - Tone",
            "Dub",
            "Roots Reggae",
            "Reggae Fusion",
            "Reggae en Espa\xF1ol",
            "Spanish Reggae",
            "Reggae 110",
            "Reggae Bultr\xF3n",
            "Romantic Flow",
            "Lovers Rock",
            "Raggamuffin",
            "Ragga",
            "Dancehall",
            "Ska"
          ],
          rock: [
            "Acid Rock",
            "Adult - Oriented Rock",
            "Afro Punk",
            "Adult Alternative",
            "Alternative Rock",
            "American Traditional Rock",
            "Anatolian Rock",
            "Arena Rock",
            "Art Rock",
            "Blues - Rock",
            "British Invasion",
            "Cock Rock",
            "Death Metal / Black Metal",
            "Doom Metal",
            "Glam Rock",
            "Gothic Metal",
            "Grind Core",
            "Hair Metal",
            "Hard Rock",
            "Math Metal",
            "Math Rock",
            "Metal",
            "Metal Core",
            "Noise Rock",
            "Jam Bands",
            "Post Punk",
            "Post Rock",
            "Prog - Rock / Art Rock",
            "Progressive Metal",
            "Psychedelic",
            "Rock & Roll",
            "Rockabilly",
            "Roots Rock",
            "Singer / Songwriter",
            "Southern Rock",
            "Spazzcore",
            "Stoner Metal",
            "Surf",
            "Technical Death Metal",
            "Tex - Mex",
            "Thrash Metal",
            "Time Lord Rock(Trock)",
            "Trip - hop",
            "Yacht Rock",
            "School House Rock"
          ],
          "hip-hop": [
            "Alternative Rap",
            "Avant - Garde",
            "Bounce",
            "Chap Hop",
            "Christian Hip Hop",
            "Conscious Hip Hop",
            "Country - Rap",
            "Grunk",
            "Crunkcore",
            "Cumbia Rap",
            "Dirty South",
            "East Coast",
            "Brick City Club",
            "Hardcore Hip Hop",
            "Mafioso Rap",
            "New Jersey Hip Hop",
            "Freestyle Rap",
            "G - Funk",
            "Gangsta Rap",
            "Golden Age",
            "Grime",
            "Hardcore Rap",
            "Hip - Hop",
            "Hip Pop",
            "Horrorcore",
            "Hyphy",
            "Industrial Hip Hop",
            "Instrumental Hip Hop",
            "Jazz Rap",
            "Latin Rap",
            "Low Bap",
            "Lyrical Hip Hop",
            "Merenrap",
            "Midwest Hip Hop",
            "Chicago Hip Hop",
            "Detroit Hip Hop",
            "Horrorcore",
            "St.Louis Hip Hop",
            "Twin Cities Hip Hop",
            "Motswako",
            "Nerdcore",
            "New Jack Swing",
            "New School Hip Hop",
            "Old School Rap",
            "Rap",
            "Trap",
            "Turntablism",
            "Underground Rap",
            "West Coast Rap",
            "East Coast Rap",
            "Trap",
            "UK Grime",
            "Hyphy",
            "Emo-rap",
            "Cloud rap",
            "G-funk",
            "Boom Bap",
            "Mumble",
            "Drill",
            "UK Drill",
            "Soundcloud Rap",
            "Lo-fi"
          ],
          punk: [
            "Afro-punk",
            "Anarcho punk",
            "Art punk",
            "Christian punk",
            "Crust punk",
            "Deathrock",
            "Egg punk",
            "Garage punk",
            "Glam punk",
            "Hardcore punk",
            "Horror punk",
            "Incelcore/e-punk",
            "Oi!",
            "Peace punk",
            "Punk pathetique",
            "Queercore",
            "Riot Grrrl",
            "Skate punk",
            "Street punk",
            "Taqwacore",
            "Trallpunk"
          ],
          disco: [
            "Nu-disco",
            "Disco-funk",
            "Hi-NRG",
            "Italo Disco",
            "Eurodisco",
            "Boogie",
            "Space Disco",
            "Post-disco",
            "Electro Disco",
            "Disco House",
            "Disco Pop",
            "Soulful House"
          ],
          funk: [
            "Funk Rock",
            "P-Funk (Parliament-Funkadelic)",
            "Psychedelic Funk",
            "Funk Metal",
            "Electro-Funk",
            "Go-go",
            "Boogie-Funk",
            "Jazz-Funk",
            "Soul-Funk",
            "Funky Disco",
            "Nu-Funk",
            "Afrobeat",
            "Latin Funk",
            "G-Funk",
            "Acid Jazz",
            "Funktronica",
            "Folk-Funk",
            "Space Funk",
            "Ambient Funk",
            "Hard Funk",
            "Fusion Funk"
          ],
          techno: [
            "Acid Techno",
            "Ambient Techno",
            "Detroit Techno",
            "Dub Techno",
            "Minimal Techno",
            "Industrial Techno",
            "Hard Techno",
            "Trance",
            "Progressive Techno",
            "Tech House",
            "Electronica",
            "Breakbeat Techno",
            "Electro Techno",
            "Melodic Techno",
            "Experimental Techno",
            "Dark Techno",
            "Ebm",
            "Hypnotic Techno",
            "Psychedelic Techno",
            "Rave Techno",
            "Techno-Pop"
          ],
          indie: [
            "Indie Rock",
            "Indie Pop",
            "Indie Folk",
            "Indie Electronic",
            "Indie Punk",
            "Indie Hip-Hop",
            "Dream Pop",
            "Shoegaze",
            "Lo-fi",
            "Chillwave",
            "Freak Folk",
            "Noise Pop",
            "Math Rock",
            "Post-Punk",
            "Garage Rock",
            "Experimental Indie",
            "Surf Rock",
            "Alternative Country",
            "Indie Soul",
            "Art Rock",
            "Indie R&B",
            "Indietronica",
            "Emo",
            "Post-Rock",
            "Indie Pop-Rock",
            "Indie Synthpop",
            "Noise Rock",
            "Psych Folk",
            "Indie Blues"
          ],
          gospel: [
            "Traditional Gospel",
            "Contemporary Gospel",
            "Southern Gospel",
            "Black Gospel",
            "Urban Contemporary Gospel",
            "Gospel Blues",
            "Bluegrass Gospel",
            "Country Gospel",
            "Praise and Worship",
            "Christian Hip-Hop",
            "Gospel Jazz",
            "Reggae Gospel",
            "African Gospel",
            "Latin Gospel",
            "R&B Gospel",
            "Gospel Choir",
            "Acappella Gospel",
            "Instrumental Gospel",
            "Gospel Rap"
          ],
          world: [
            "African",
            "Arabic",
            "Asian",
            "Caribbean",
            "Celtic",
            "European",
            "Latin American",
            "Middle Eastern",
            "Native American",
            "Polynesian",
            "Reggae",
            "Ska",
            "Salsa",
            "Flamenco",
            "Bossa Nova",
            "Tango",
            "Fado",
            "Klezmer",
            "Balkan",
            "Afrobeat",
            "Mongolian Throat Singing",
            "Indian Classical",
            "Gamelan",
            "Sufi Music",
            "Zydeco",
            "Kora Music",
            "Andean Music",
            "Irish Traditional",
            "Gypsy Jazz",
            "Bollywood",
            "Bhangra",
            "Jawaiian",
            "Hawaiian Slack Key Guitar",
            "Calypso",
            "Cuban Son",
            "Taiko Drumming",
            "African Highlife",
            "Merengue",
            "Tuvan Throat Singing"
          ]
        },
        // Data sourced from https://unicode.org/emoji/charts/full-emoji-list.html
        emojis: {
          smileys_and_emotion: [
            "0x1f600",
            "0x1f603",
            "0x1f604",
            "0x1f601",
            "0x1f606",
            "0x1f605",
            "0x1f923",
            "0x1f602",
            "0x1f642",
            "0x1f643",
            "0x1fae0",
            "0x1f609",
            "0x1f60a",
            "0x1f607",
            "0x1f970",
            "0x1f60d",
            "0x1f929",
            "0x1f618",
            "0x1f617",
            "0x263a",
            "0x1f61a",
            "0x1f619",
            "0x1f972",
            "0x1f60b",
            "0x1f61b",
            "0x1f61c",
            "0x1f92a",
            "0x1f61d",
            "0x1f911",
            "0x1f917",
            "0x1f92d",
            "0x1fae2",
            "0x1fae3",
            "0x1f92b",
            "0x1f914",
            "0x1fae1",
            "0x1f910",
            "0x1f928",
            "0x1f610",
            "0x1f611",
            "0x1f636",
            "0x1fae5",
            "0x1f636",
            "0x200d",
            "0x1f32b",
            "0xfe0f",
            "0x1f60f",
            "0x1f612",
            "0x1f644",
            "0x1f62c",
            "0x1f62e",
            "0x200d",
            "0x1f4a8",
            "0x1f925",
            "0x1fae8",
            "0x1f642",
            "0x200d",
            "0x2194",
            "0xfe0f",
            "0x1f642",
            "0x200d",
            "0x2195",
            "0xfe0f",
            "0x1f60c",
            "0x1f614",
            "0x1f62a",
            "0x1f924",
            "0x1f634",
            "0x1f637",
            "0x1f912",
            "0x1f915",
            "0x1f922",
            "0x1f92e",
            "0x1f927",
            "0x1f975",
            "0x1f976",
            "0x1f974",
            "0x1f635",
            "0x1f635",
            "0x200d",
            "0x1f4ab",
            "0x1f92f",
            "0x1f920",
            "0x1f973",
            "0x1f978",
            "0x1f60e",
            "0x1f913",
            "0x1f9d0",
            "0x1f615",
            "0x1fae4",
            "0x1f61f",
            "0x1f641",
            "0x2639",
            "0x1f62e",
            "0x1f62f",
            "0x1f632",
            "0x1f633",
            "0x1f97a",
            "0x1f979",
            "0x1f626",
            "0x1f627",
            "0x1f628",
            "0x1f630",
            "0x1f625",
            "0x1f622",
            "0x1f62d",
            "0x1f631",
            "0x1f616",
            "0x1f623",
            "0x1f61e",
            "0x1f613",
            "0x1f629",
            "0x1f62b",
            "0x1f971",
            "0x1f624",
            "0x1f621",
            "0x1f620",
            "0x1f92c",
            "0x1f608",
            "0x1f47f",
            "0x1f480",
            "0x2620",
            "0x1f4a9",
            "0x1f921",
            "0x1f479",
            "0x1f47a",
            "0x1f47b",
            "0x1f47d",
            "0x1f47e",
            "0x1f916",
            "0x1f63a",
            "0x1f638",
            "0x1f639",
            "0x1f63b",
            "0x1f63c",
            "0x1f63d",
            "0x1f640",
            "0x1f63f",
            "0x1f63e",
            "0x1f648",
            "0x1f649",
            "0x1f64a",
            "0x1f48c",
            "0x1f498",
            "0x1f49d",
            "0x1f496",
            "0x1f497",
            "0x1f493",
            "0x1f49e",
            "0x1f495",
            "0x1f49f",
            "0x2763",
            "0x1f494",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f525",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1fa79",
            "0x2764",
            "0x1fa77",
            "0x1f9e1",
            "0x1f49b",
            "0x1f49a",
            "0x1f499",
            "0x1fa75",
            "0x1f49c",
            "0x1f90e",
            "0x1f5a4",
            "0x1fa76",
            "0x1f90d",
            "0x1f48b",
            "0x1f4af",
            "0x1f4a2",
            "0x1f4a5",
            "0x1f4ab",
            "0x1f4a6",
            "0x1f4a8",
            "0x1f573",
            "0x1f4ac",
            "0x1f441",
            "0xfe0f",
            "0x200d",
            "0x1f5e8",
            "0xfe0f",
            "0x1f5e8",
            "0x1f5ef",
            "0x1f4ad",
            "0x1f4a4"
          ],
          people_and_body: [
            "0x1f44b",
            "0x1f91a",
            "0x1f590",
            "0x270b",
            "0x1f596",
            "0x1faf1",
            "0x1faf2",
            "0x1faf3",
            "0x1faf4",
            "0x1faf7",
            "0x1faf8",
            "0x1f44c",
            "0x1f90c",
            "0x1f90f",
            "0x270c",
            "0x1f91e",
            "0x1faf0",
            "0x1f91f",
            "0x1f918",
            "0x1f919",
            "0x1f448",
            "0x1f449",
            "0x1f446",
            "0x1f595",
            "0x1f447",
            "0x261d",
            "0x1faf5",
            "0x1f44d",
            "0x1f44e",
            "0x270a",
            "0x1f44a",
            "0x1f91b",
            "0x1f91c",
            "0x1f44f",
            "0x1f64c",
            "0x1faf6",
            "0x1f450",
            "0x1f932",
            "0x1f91d",
            "0x1f64f",
            "0x270d",
            "0x1f485",
            "0x1f933",
            "0x1f4aa",
            "0x1f9be",
            "0x1f9bf",
            "0x1f9b5",
            "0x1f9b6",
            "0x1f442",
            "0x1f9bb",
            "0x1f443",
            "0x1f9e0",
            "0x1fac0",
            "0x1fac1",
            "0x1f9b7",
            "0x1f9b4",
            "0x1f440",
            "0x1f441",
            "0x1f445",
            "0x1f444",
            "0x1fae6",
            "0x1f476",
            "0x1f9d2",
            "0x1f466",
            "0x1f467",
            "0x1f9d1",
            "0x1f471",
            "0x1f468",
            "0x1f9d4",
            "0x1f9d4",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9d4",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x1f9b0",
            "0x1f468",
            "0x200d",
            "0x1f9b1",
            "0x1f468",
            "0x200d",
            "0x1f9b3",
            "0x1f468",
            "0x200d",
            "0x1f9b2",
            "0x1f469",
            "0x1f469",
            "0x200d",
            "0x1f9b0",
            "0x1f9d1",
            "0x200d",
            "0x1f9b0",
            "0x1f469",
            "0x200d",
            "0x1f9b1",
            "0x1f9d1",
            "0x200d",
            "0x1f9b1",
            "0x1f469",
            "0x200d",
            "0x1f9b3",
            "0x1f9d1",
            "0x200d",
            "0x1f9b3",
            "0x1f469",
            "0x200d",
            "0x1f9b2",
            "0x1f9d1",
            "0x200d",
            "0x1f9b2",
            "0x1f471",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f471",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9d3",
            "0x1f474",
            "0x1f475",
            "0x1f64d",
            "0x1f64d",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f64d",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f64e",
            "0x1f64e",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f64e",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f645",
            "0x1f645",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f645",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f646",
            "0x1f646",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f646",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f481",
            "0x1f481",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f481",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f64b",
            "0x1f64b",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f64b",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9cf",
            "0x1f9cf",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9cf",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f647",
            "0x1f647",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f647",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f926",
            "0x1f926",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f926",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f937",
            "0x1f937",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f937",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x2695",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x2695",
            "0xfe0f",
            "0x1f469",
            "0x200d",
            "0x2695",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x1f393",
            "0x1f468",
            "0x200d",
            "0x1f393",
            "0x1f469",
            "0x200d",
            "0x1f393",
            "0x1f9d1",
            "0x200d",
            "0x1f3eb",
            "0x1f468",
            "0x200d",
            "0x1f3eb",
            "0x1f469",
            "0x200d",
            "0x1f3eb",
            "0x1f9d1",
            "0x200d",
            "0x2696",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x2696",
            "0xfe0f",
            "0x1f469",
            "0x200d",
            "0x2696",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x1f33e",
            "0x1f468",
            "0x200d",
            "0x1f33e",
            "0x1f469",
            "0x200d",
            "0x1f33e",
            "0x1f9d1",
            "0x200d",
            "0x1f373",
            "0x1f468",
            "0x200d",
            "0x1f373",
            "0x1f469",
            "0x200d",
            "0x1f373",
            "0x1f9d1",
            "0x200d",
            "0x1f527",
            "0x1f468",
            "0x200d",
            "0x1f527",
            "0x1f469",
            "0x200d",
            "0x1f527",
            "0x1f9d1",
            "0x200d",
            "0x1f3ed",
            "0x1f468",
            "0x200d",
            "0x1f3ed",
            "0x1f469",
            "0x200d",
            "0x1f3ed",
            "0x1f9d1",
            "0x200d",
            "0x1f4bc",
            "0x1f468",
            "0x200d",
            "0x1f4bc",
            "0x1f469",
            "0x200d",
            "0x1f4bc",
            "0x1f9d1",
            "0x200d",
            "0x1f52c",
            "0x1f468",
            "0x200d",
            "0x1f52c",
            "0x1f469",
            "0x200d",
            "0x1f52c",
            "0x1f9d1",
            "0x200d",
            "0x1f4bb",
            "0x1f468",
            "0x200d",
            "0x1f4bb",
            "0x1f469",
            "0x200d",
            "0x1f4bb",
            "0x1f9d1",
            "0x200d",
            "0x1f3a4",
            "0x1f468",
            "0x200d",
            "0x1f3a4",
            "0x1f469",
            "0x200d",
            "0x1f3a4",
            "0x1f9d1",
            "0x200d",
            "0x1f3a8",
            "0x1f468",
            "0x200d",
            "0x1f3a8",
            "0x1f469",
            "0x200d",
            "0x1f3a8",
            "0x1f9d1",
            "0x200d",
            "0x2708",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x2708",
            "0xfe0f",
            "0x1f469",
            "0x200d",
            "0x2708",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x1f680",
            "0x1f468",
            "0x200d",
            "0x1f680",
            "0x1f469",
            "0x200d",
            "0x1f680",
            "0x1f9d1",
            "0x200d",
            "0x1f692",
            "0x1f468",
            "0x200d",
            "0x1f692",
            "0x1f469",
            "0x200d",
            "0x1f692",
            "0x1f46e",
            "0x1f46e",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f46e",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f575",
            "0x1f575",
            "0xfe0f",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f575",
            "0xfe0f",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f482",
            "0x1f482",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f482",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f977",
            "0x1f477",
            "0x1f477",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f477",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1fac5",
            "0x1f934",
            "0x1f478",
            "0x1f473",
            "0x1f473",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f473",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f472",
            "0x1f9d5",
            "0x1f935",
            "0x1f935",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f935",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f470",
            "0x1f470",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f470",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f930",
            "0x1fac3",
            "0x1fac4",
            "0x1f931",
            "0x1f469",
            "0x200d",
            "0x1f37c",
            "0x1f468",
            "0x200d",
            "0x1f37c",
            "0x1f9d1",
            "0x200d",
            "0x1f37c",
            "0x1f47c",
            "0x1f385",
            "0x1f936",
            "0x1f9d1",
            "0x200d",
            "0x1f384",
            "0x1f9b8",
            "0x1f9b8",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9b8",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9b9",
            "0x1f9b9",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9b9",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9d9",
            "0x1f9d9",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9d9",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9da",
            "0x1f9da",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9da",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9db",
            "0x1f9db",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9db",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9dc",
            "0x1f9dc",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9dc",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9dd",
            "0x1f9dd",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9dd",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9de",
            "0x1f9de",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9de",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9df",
            "0x1f9df",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9df",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9cc",
            "0x1f486",
            "0x1f486",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f486",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f487",
            "0x1f487",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f487",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f6b6",
            "0x1f6b6",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f6b6",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f6b6",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f6b6",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f6b6",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f9cd",
            "0x1f9cd",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9cd",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9ce",
            "0x1f9ce",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9ce",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9ce",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f9ce",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f9ce",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x1f9af",
            "0x1f9d1",
            "0x200d",
            "0x1f9af",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x1f9af",
            "0x1f468",
            "0x200d",
            "0x1f9af",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f469",
            "0x200d",
            "0x1f9af",
            "0x1f469",
            "0x200d",
            "0x1f9af",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x1f9bc",
            "0x1f9d1",
            "0x200d",
            "0x1f9bc",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x1f9bc",
            "0x1f468",
            "0x200d",
            "0x1f9bc",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f469",
            "0x200d",
            "0x1f9bc",
            "0x1f469",
            "0x200d",
            "0x1f9bc",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f9d1",
            "0x200d",
            "0x1f9bd",
            "0x1f9d1",
            "0x200d",
            "0x1f9bd",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f468",
            "0x200d",
            "0x1f9bd",
            "0x1f468",
            "0x200d",
            "0x1f9bd",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f469",
            "0x200d",
            "0x1f9bd",
            "0x1f469",
            "0x200d",
            "0x1f9bd",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f3c3",
            "0x1f3c3",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f3c3",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f3c3",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f3c3",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f3c3",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x200d",
            "0x27a1",
            "0xfe0f",
            "0x1f483",
            "0x1f57a",
            "0x1f574",
            "0x1f46f",
            "0x1f46f",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f46f",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9d6",
            "0x1f9d6",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9d6",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9d7",
            "0x1f9d7",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9d7",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f93a",
            "0x1f3c7",
            "0x26f7",
            "0x1f3c2",
            "0x1f3cc",
            "0x1f3cc",
            "0xfe0f",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f3cc",
            "0xfe0f",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f3c4",
            "0x1f3c4",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f3c4",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f6a3",
            "0x1f6a3",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f6a3",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f3ca",
            "0x1f3ca",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f3ca",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x26f9",
            "0x26f9",
            "0xfe0f",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x26f9",
            "0xfe0f",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f3cb",
            "0x1f3cb",
            "0xfe0f",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f3cb",
            "0xfe0f",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f6b4",
            "0x1f6b4",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f6b4",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f6b5",
            "0x1f6b5",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f6b5",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f938",
            "0x1f938",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f938",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f93c",
            "0x1f93c",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f93c",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f93d",
            "0x1f93d",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f93d",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f93e",
            "0x1f93e",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f93e",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f939",
            "0x1f939",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f939",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f9d8",
            "0x1f9d8",
            "0x200d",
            "0x2642",
            "0xfe0f",
            "0x1f9d8",
            "0x200d",
            "0x2640",
            "0xfe0f",
            "0x1f6c0",
            "0x1f6cc",
            "0x1f9d1",
            "0x200d",
            "0x1f91d",
            "0x200d",
            "0x1f9d1",
            "0x1f46d",
            "0x1f46b",
            "0x1f46c",
            "0x1f48f",
            "0x1f469",
            "0x200d",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f48b",
            "0x200d",
            "0x1f468",
            "0x1f468",
            "0x200d",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f48b",
            "0x200d",
            "0x1f468",
            "0x1f469",
            "0x200d",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f48b",
            "0x200d",
            "0x1f469",
            "0x1f491",
            "0x1f469",
            "0x200d",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f468",
            "0x1f468",
            "0x200d",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f468",
            "0x1f469",
            "0x200d",
            "0x2764",
            "0xfe0f",
            "0x200d",
            "0x1f469",
            "0x1f468",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x1f468",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f466",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f467",
            "0x1f468",
            "0x200d",
            "0x1f468",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f468",
            "0x200d",
            "0x1f467",
            "0x1f468",
            "0x200d",
            "0x1f468",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f468",
            "0x200d",
            "0x1f466",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f468",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f467",
            "0x1f469",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f466",
            "0x1f469",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x1f469",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f466",
            "0x1f469",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f466",
            "0x200d",
            "0x1f466",
            "0x1f469",
            "0x200d",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f467",
            "0x1f468",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f466",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f467",
            "0x1f468",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f466",
            "0x1f468",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f467",
            "0x1f469",
            "0x200d",
            "0x1f466",
            "0x1f469",
            "0x200d",
            "0x1f466",
            "0x200d",
            "0x1f466",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f466",
            "0x1f469",
            "0x200d",
            "0x1f467",
            "0x200d",
            "0x1f467",
            "0x1f5e3",
            "0x1f464",
            "0x1f465",
            "0x1fac2",
            "0x1f46a",
            "0x1f9d1",
            "0x200d",
            "0x1f9d1",
            "0x200d",
            "0x1f9d2",
            "0x1f9d1",
            "0x200d",
            "0x1f9d1",
            "0x200d",
            "0x1f9d2",
            "0x200d",
            "0x1f9d2",
            "0x1f9d1",
            "0x200d",
            "0x1f9d2",
            "0x1f9d1",
            "0x200d",
            "0x1f9d2",
            "0x200d",
            "0x1f9d2",
            "0x1f463"
          ],
          animals_and_nature: [
            "0x1f435",
            "0x1f412",
            "0x1f98d",
            "0x1f9a7",
            "0x1f436",
            "0x1f415",
            "0x1f9ae",
            "0x1f415",
            "0x200d",
            "0x1f9ba",
            "0x1f429",
            "0x1f43a",
            "0x1f98a",
            "0x1f99d",
            "0x1f431",
            "0x1f408",
            "0x1f408",
            "0x200d",
            "0x2b1b",
            "0x1f981",
            "0x1f42f",
            "0x1f405",
            "0x1f406",
            "0x1f434",
            "0x1face",
            "0x1facf",
            "0x1f40e",
            "0x1f984",
            "0x1f993",
            "0x1f98c",
            "0x1f9ac",
            "0x1f42e",
            "0x1f402",
            "0x1f403",
            "0x1f404",
            "0x1f437",
            "0x1f416",
            "0x1f417",
            "0x1f43d",
            "0x1f40f",
            "0x1f411",
            "0x1f410",
            "0x1f42a",
            "0x1f42b",
            "0x1f999",
            "0x1f992",
            "0x1f418",
            "0x1f9a3",
            "0x1f98f",
            "0x1f99b",
            "0x1f42d",
            "0x1f401",
            "0x1f400",
            "0x1f439",
            "0x1f430",
            "0x1f407",
            "0x1f43f",
            "0x1f9ab",
            "0x1f994",
            "0x1f987",
            "0x1f43b",
            "0x1f43b",
            "0x200d",
            "0x2744",
            "0xfe0f",
            "0x1f428",
            "0x1f43c",
            "0x1f9a5",
            "0x1f9a6",
            "0x1f9a8",
            "0x1f998",
            "0x1f9a1",
            "0x1f43e",
            "0x1f983",
            "0x1f414",
            "0x1f413",
            "0x1f423",
            "0x1f424",
            "0x1f425",
            "0x1f426",
            "0x1f427",
            "0x1f54a",
            "0x1f985",
            "0x1f986",
            "0x1f9a2",
            "0x1f989",
            "0x1f9a4",
            "0x1fab6",
            "0x1f9a9",
            "0x1f99a",
            "0x1f99c",
            "0x1fabd",
            "0x1f426",
            "0x200d",
            "0x2b1b",
            "0x1fabf",
            "0x1f426",
            "0x200d",
            "0x1f525",
            "0x1f438",
            "0x1f40a",
            "0x1f422",
            "0x1f98e",
            "0x1f40d",
            "0x1f432",
            "0x1f409",
            "0x1f995",
            "0x1f996",
            "0x1f433",
            "0x1f40b",
            "0x1f42c",
            "0x1f9ad",
            "0x1f41f",
            "0x1f420",
            "0x1f421",
            "0x1f988",
            "0x1f419",
            "0x1f41a",
            "0x1fab8",
            "0x1fabc",
            "0x1f40c",
            "0x1f98b",
            "0x1f41b",
            "0x1f41c",
            "0x1f41d",
            "0x1fab2",
            "0x1f41e",
            "0x1f997",
            "0x1fab3",
            "0x1f577",
            "0x1f578",
            "0x1f982",
            "0x1f99f",
            "0x1fab0",
            "0x1fab1",
            "0x1f9a0",
            "0x1f490",
            "0x1f338",
            "0x1f4ae",
            "0x1fab7",
            "0x1f3f5",
            "0x1f339",
            "0x1f940",
            "0x1f33a",
            "0x1f33b",
            "0x1f33c",
            "0x1f337",
            "0x1fabb",
            "0x1f331",
            "0x1fab4",
            "0x1f332",
            "0x1f333",
            "0x1f334",
            "0x1f335",
            "0x1f33e",
            "0x1f33f",
            "0x2618",
            "0x1f340",
            "0x1f341",
            "0x1f342",
            "0x1f343",
            "0x1fab9",
            "0x1faba",
            "0x1f344"
          ],
          food_and_drink: [
            "0x1f347",
            "0x1f348",
            "0x1f349",
            "0x1f34a",
            "0x1f34b",
            "0x1f34b",
            "0x200d",
            "0x1f7e9",
            "0x1f34c",
            "0x1f34d",
            "0x1f96d",
            "0x1f34e",
            "0x1f34f",
            "0x1f350",
            "0x1f351",
            "0x1f352",
            "0x1f353",
            "0x1fad0",
            "0x1f95d",
            "0x1f345",
            "0x1fad2",
            "0x1f965",
            "0x1f951",
            "0x1f346",
            "0x1f954",
            "0x1f955",
            "0x1f33d",
            "0x1f336",
            "0x1fad1",
            "0x1f952",
            "0x1f96c",
            "0x1f966",
            "0x1f9c4",
            "0x1f9c5",
            "0x1f95c",
            "0x1fad8",
            "0x1f330",
            "0x1fada",
            "0x1fadb",
            "0x1f344",
            "0x200d",
            "0x1f7eb",
            "0x1f35e",
            "0x1f950",
            "0x1f956",
            "0x1fad3",
            "0x1f968",
            "0x1f96f",
            "0x1f95e",
            "0x1f9c7",
            "0x1f9c0",
            "0x1f356",
            "0x1f357",
            "0x1f969",
            "0x1f953",
            "0x1f354",
            "0x1f35f",
            "0x1f355",
            "0x1f32d",
            "0x1f96a",
            "0x1f32e",
            "0x1f32f",
            "0x1fad4",
            "0x1f959",
            "0x1f9c6",
            "0x1f95a",
            "0x1f373",
            "0x1f958",
            "0x1f372",
            "0x1fad5",
            "0x1f963",
            "0x1f957",
            "0x1f37f",
            "0x1f9c8",
            "0x1f9c2",
            "0x1f96b",
            "0x1f371",
            "0x1f358",
            "0x1f359",
            "0x1f35a",
            "0x1f35b",
            "0x1f35c",
            "0x1f35d",
            "0x1f360",
            "0x1f362",
            "0x1f363",
            "0x1f364",
            "0x1f365",
            "0x1f96e",
            "0x1f361",
            "0x1f95f",
            "0x1f960",
            "0x1f961",
            "0x1f980",
            "0x1f99e",
            "0x1f990",
            "0x1f991",
            "0x1f9aa",
            "0x1f366",
            "0x1f367",
            "0x1f368",
            "0x1f369",
            "0x1f36a",
            "0x1f382",
            "0x1f370",
            "0x1f9c1",
            "0x1f967",
            "0x1f36b",
            "0x1f36c",
            "0x1f36d",
            "0x1f36e",
            "0x1f36f",
            "0x1f37c",
            "0x1f95b",
            "0x2615",
            "0x1fad6",
            "0x1f375",
            "0x1f376",
            "0x1f37e",
            "0x1f377",
            "0x1f378",
            "0x1f379",
            "0x1f37a",
            "0x1f37b",
            "0x1f942",
            "0x1f943",
            "0x1fad7",
            "0x1f964",
            "0x1f9cb",
            "0x1f9c3",
            "0x1f9c9",
            "0x1f9ca",
            "0x1f962",
            "0x1f37d",
            "0x1f374",
            "0x1f944",
            "0x1f52a",
            "0x1fad9",
            "0x1f3fa"
          ],
          travel_and_places: [
            "0x1f30d",
            "0x1f30e",
            "0x1f30f",
            "0x1f310",
            "0x1f5fa",
            "0x1f5fe",
            "0x1f9ed",
            "0x1f3d4",
            "0x26f0",
            "0x1f30b",
            "0x1f5fb",
            "0x1f3d5",
            "0x1f3d6",
            "0x1f3dc",
            "0x1f3dd",
            "0x1f3de",
            "0x1f3df",
            "0x1f3db",
            "0x1f3d7",
            "0x1f9f1",
            "0x1faa8",
            "0x1fab5",
            "0x1f6d6",
            "0x1f3d8",
            "0x1f3da",
            "0x1f3e0",
            "0x1f3e1",
            "0x1f3e2",
            "0x1f3e3",
            "0x1f3e4",
            "0x1f3e5",
            "0x1f3e6",
            "0x1f3e8",
            "0x1f3e9",
            "0x1f3ea",
            "0x1f3eb",
            "0x1f3ec",
            "0x1f3ed",
            "0x1f3ef",
            "0x1f3f0",
            "0x1f492",
            "0x1f5fc",
            "0x1f5fd",
            "0x26ea",
            "0x1f54c",
            "0x1f6d5",
            "0x1f54d",
            "0x26e9",
            "0x1f54b",
            "0x26f2",
            "0x26fa",
            "0x1f301",
            "0x1f303",
            "0x1f3d9",
            "0x1f304",
            "0x1f305",
            "0x1f306",
            "0x1f307",
            "0x1f309",
            "0x2668",
            "0x1f3a0",
            "0x1f6dd",
            "0x1f3a1",
            "0x1f3a2",
            "0x1f488",
            "0x1f3aa",
            "0x1f682",
            "0x1f683",
            "0x1f684",
            "0x1f685",
            "0x1f686",
            "0x1f687",
            "0x1f688",
            "0x1f689",
            "0x1f68a",
            "0x1f69d",
            "0x1f69e",
            "0x1f68b",
            "0x1f68c",
            "0x1f68d",
            "0x1f68e",
            "0x1f690",
            "0x1f691",
            "0x1f692",
            "0x1f693",
            "0x1f694",
            "0x1f695",
            "0x1f696",
            "0x1f697",
            "0x1f698",
            "0x1f699",
            "0x1f6fb",
            "0x1f69a",
            "0x1f69b",
            "0x1f69c",
            "0x1f3ce",
            "0x1f3cd",
            "0x1f6f5",
            "0x1f9bd",
            "0x1f9bc",
            "0x1f6fa",
            "0x1f6b2",
            "0x1f6f4",
            "0x1f6f9",
            "0x1f6fc",
            "0x1f68f",
            "0x1f6e3",
            "0x1f6e4",
            "0x1f6e2",
            "0x26fd",
            "0x1f6de",
            "0x1f6a8",
            "0x1f6a5",
            "0x1f6a6",
            "0x1f6d1",
            "0x1f6a7",
            "0x2693",
            "0x1f6df",
            "0x26f5",
            "0x1f6f6",
            "0x1f6a4",
            "0x1f6f3",
            "0x26f4",
            "0x1f6e5",
            "0x1f6a2",
            "0x2708",
            "0x1f6e9",
            "0x1f6eb",
            "0x1f6ec",
            "0x1fa82",
            "0x1f4ba",
            "0x1f681",
            "0x1f69f",
            "0x1f6a0",
            "0x1f6a1",
            "0x1f6f0",
            "0x1f680",
            "0x1f6f8",
            "0x1f6ce",
            "0x1f9f3",
            "0x231b",
            "0x23f3",
            "0x231a",
            "0x23f0",
            "0x23f1",
            "0x23f2",
            "0x1f570",
            "0x1f55b",
            "0x1f567",
            "0x1f550",
            "0x1f55c",
            "0x1f551",
            "0x1f55d",
            "0x1f552",
            "0x1f55e",
            "0x1f553",
            "0x1f55f",
            "0x1f554",
            "0x1f560",
            "0x1f555",
            "0x1f561",
            "0x1f556",
            "0x1f562",
            "0x1f557",
            "0x1f563",
            "0x1f558",
            "0x1f564",
            "0x1f559",
            "0x1f565",
            "0x1f55a",
            "0x1f566",
            "0x1f311",
            "0x1f312",
            "0x1f313",
            "0x1f314",
            "0x1f315",
            "0x1f316",
            "0x1f317",
            "0x1f318",
            "0x1f319",
            "0x1f31a",
            "0x1f31b",
            "0x1f31c",
            "0x1f321",
            "0x2600",
            "0x1f31d",
            "0x1f31e",
            "0x1fa90",
            "0x2b50",
            "0x1f31f",
            "0x1f320",
            "0x1f30c",
            "0x2601",
            "0x26c5",
            "0x26c8",
            "0x1f324",
            "0x1f325",
            "0x1f326",
            "0x1f327",
            "0x1f328",
            "0x1f329",
            "0x1f32a",
            "0x1f32b",
            "0x1f32c",
            "0x1f300",
            "0x1f308",
            "0x1f302",
            "0x2602",
            "0x2614",
            "0x26f1",
            "0x26a1",
            "0x2744",
            "0x2603",
            "0x26c4",
            "0x2604",
            "0x1f525",
            "0x1f4a7",
            "0x1f30a"
          ],
          activities: [
            "0x1f383",
            "0x1f384",
            "0x1f386",
            "0x1f387",
            "0x1f9e8",
            "0x2728",
            "0x1f388",
            "0x1f389",
            "0x1f38a",
            "0x1f38b",
            "0x1f38d",
            "0x1f38e",
            "0x1f38f",
            "0x1f390",
            "0x1f391",
            "0x1f9e7",
            "0x1f380",
            "0x1f381",
            "0x1f397",
            "0x1f39f",
            "0x1f3ab",
            "0x1f396",
            "0x1f3c6",
            "0x1f3c5",
            "0x1f947",
            "0x1f948",
            "0x1f949",
            "0x26bd",
            "0x26be",
            "0x1f94e",
            "0x1f3c0",
            "0x1f3d0",
            "0x1f3c8",
            "0x1f3c9",
            "0x1f3be",
            "0x1f94f",
            "0x1f3b3",
            "0x1f3cf",
            "0x1f3d1",
            "0x1f3d2",
            "0x1f94d",
            "0x1f3d3",
            "0x1f3f8",
            "0x1f94a",
            "0x1f94b",
            "0x1f945",
            "0x26f3",
            "0x26f8",
            "0x1f3a3",
            "0x1f93f",
            "0x1f3bd",
            "0x1f3bf",
            "0x1f6f7",
            "0x1f94c",
            "0x1f3af",
            "0x1fa80",
            "0x1fa81",
            "0x1f52b",
            "0x1f3b1",
            "0x1f52e",
            "0x1fa84",
            "0x1f3ae",
            "0x1f579",
            "0x1f3b0",
            "0x1f3b2",
            "0x1f9e9",
            "0x1f9f8",
            "0x1fa85",
            "0x1faa9",
            "0x1fa86",
            "0x2660",
            "0x2665",
            "0x2666",
            "0x2663",
            "0x265f",
            "0x1f0cf",
            "0x1f004",
            "0x1f3b4",
            "0x1f3ad",
            "0x1f5bc",
            "0x1f3a8",
            "0x1f9f5",
            "0x1faa1",
            "0x1f9f6",
            "0x1faa2"
          ],
          objects: [
            "0x1f453",
            "0x1f576",
            "0x1f97d",
            "0x1f97c",
            "0x1f9ba",
            "0x1f454",
            "0x1f455",
            "0x1f456",
            "0x1f9e3",
            "0x1f9e4",
            "0x1f9e5",
            "0x1f9e6",
            "0x1f457",
            "0x1f458",
            "0x1f97b",
            "0x1fa71",
            "0x1fa72",
            "0x1fa73",
            "0x1f459",
            "0x1f45a",
            "0x1faad",
            "0x1f45b",
            "0x1f45c",
            "0x1f45d",
            "0x1f6cd",
            "0x1f392",
            "0x1fa74",
            "0x1f45e",
            "0x1f45f",
            "0x1f97e",
            "0x1f97f",
            "0x1f460",
            "0x1f461",
            "0x1fa70",
            "0x1f462",
            "0x1faae",
            "0x1f451",
            "0x1f452",
            "0x1f3a9",
            "0x1f393",
            "0x1f9e2",
            "0x1fa96",
            "0x26d1",
            "0x1f4ff",
            "0x1f484",
            "0x1f48d",
            "0x1f48e",
            "0x1f507",
            "0x1f508",
            "0x1f509",
            "0x1f50a",
            "0x1f4e2",
            "0x1f4e3",
            "0x1f4ef",
            "0x1f514",
            "0x1f515",
            "0x1f3bc",
            "0x1f3b5",
            "0x1f3b6",
            "0x1f399",
            "0x1f39a",
            "0x1f39b",
            "0x1f3a4",
            "0x1f3a7",
            "0x1f4fb",
            "0x1f3b7",
            "0x1fa97",
            "0x1f3b8",
            "0x1f3b9",
            "0x1f3ba",
            "0x1f3bb",
            "0x1fa95",
            "0x1f941",
            "0x1fa98",
            "0x1fa87",
            "0x1fa88",
            "0x1f4f1",
            "0x1f4f2",
            "0x260e",
            "0x1f4de",
            "0x1f4df",
            "0x1f4e0",
            "0x1f50b",
            "0x1faab",
            "0x1f50c",
            "0x1f4bb",
            "0x1f5a5",
            "0x1f5a8",
            "0x2328",
            "0x1f5b1",
            "0x1f5b2",
            "0x1f4bd",
            "0x1f4be",
            "0x1f4bf",
            "0x1f4c0",
            "0x1f9ee",
            "0x1f3a5",
            "0x1f39e",
            "0x1f4fd",
            "0x1f3ac",
            "0x1f4fa",
            "0x1f4f7",
            "0x1f4f8",
            "0x1f4f9",
            "0x1f4fc",
            "0x1f50d",
            "0x1f50e",
            "0x1f56f",
            "0x1f4a1",
            "0x1f526",
            "0x1f3ee",
            "0x1fa94",
            "0x1f4d4",
            "0x1f4d5",
            "0x1f4d6",
            "0x1f4d7",
            "0x1f4d8",
            "0x1f4d9",
            "0x1f4da",
            "0x1f4d3",
            "0x1f4d2",
            "0x1f4c3",
            "0x1f4dc",
            "0x1f4c4",
            "0x1f4f0",
            "0x1f5de",
            "0x1f4d1",
            "0x1f516",
            "0x1f3f7",
            "0x1f4b0",
            "0x1fa99",
            "0x1f4b4",
            "0x1f4b5",
            "0x1f4b6",
            "0x1f4b7",
            "0x1f4b8",
            "0x1f4b3",
            "0x1f9fe",
            "0x1f4b9",
            "0x2709",
            "0x1f4e7",
            "0x1f4e8",
            "0x1f4e9",
            "0x1f4e4",
            "0x1f4e5",
            "0x1f4e6",
            "0x1f4eb",
            "0x1f4ea",
            "0x1f4ec",
            "0x1f4ed",
            "0x1f4ee",
            "0x1f5f3",
            "0x270f",
            "0x2712",
            "0x1f58b",
            "0x1f58a",
            "0x1f58c",
            "0x1f58d",
            "0x1f4dd",
            "0x1f4bc",
            "0x1f4c1",
            "0x1f4c2",
            "0x1f5c2",
            "0x1f4c5",
            "0x1f4c6",
            "0x1f5d2",
            "0x1f5d3",
            "0x1f4c7",
            "0x1f4c8",
            "0x1f4c9",
            "0x1f4ca",
            "0x1f4cb",
            "0x1f4cc",
            "0x1f4cd",
            "0x1f4ce",
            "0x1f587",
            "0x1f4cf",
            "0x1f4d0",
            "0x2702",
            "0x1f5c3",
            "0x1f5c4",
            "0x1f5d1",
            "0x1f512",
            "0x1f513",
            "0x1f50f",
            "0x1f510",
            "0x1f511",
            "0x1f5dd",
            "0x1f528",
            "0x1fa93",
            "0x26cf",
            "0x2692",
            "0x1f6e0",
            "0x1f5e1",
            "0x2694",
            "0x1f4a3",
            "0x1fa83",
            "0x1f3f9",
            "0x1f6e1",
            "0x1fa9a",
            "0x1f527",
            "0x1fa9b",
            "0x1f529",
            "0x2699",
            "0x1f5dc",
            "0x2696",
            "0x1f9af",
            "0x1f517",
            "0x26d3",
            "0xfe0f",
            "0x200d",
            "0x1f4a5",
            "0x26d3",
            "0x1fa9d",
            "0x1f9f0",
            "0x1f9f2",
            "0x1fa9c",
            "0x2697",
            "0x1f9ea",
            "0x1f9eb",
            "0x1f9ec",
            "0x1f52c",
            "0x1f52d",
            "0x1f4e1",
            "0x1f489",
            "0x1fa78",
            "0x1f48a",
            "0x1fa79",
            "0x1fa7c",
            "0x1fa7a",
            "0x1fa7b",
            "0x1f6aa",
            "0x1f6d7",
            "0x1fa9e",
            "0x1fa9f",
            "0x1f6cf",
            "0x1f6cb",
            "0x1fa91",
            "0x1f6bd",
            "0x1faa0",
            "0x1f6bf",
            "0x1f6c1",
            "0x1faa4",
            "0x1fa92",
            "0x1f9f4",
            "0x1f9f7",
            "0x1f9f9",
            "0x1f9fa",
            "0x1f9fb",
            "0x1faa3",
            "0x1f9fc",
            "0x1fae7",
            "0x1faa5",
            "0x1f9fd",
            "0x1f9ef",
            "0x1f6d2",
            "0x1f6ac",
            "0x26b0",
            "0x1faa6",
            "0x26b1",
            "0x1f9ff",
            "0x1faac",
            "0x1f5ff",
            "0x1faa7",
            "0x1faaa"
          ],
          symbols: [
            "0x1f3e7",
            "0x1f6ae",
            "0x1f6b0",
            "0x267f",
            "0x1f6b9",
            "0x1f6ba",
            "0x1f6bb",
            "0x1f6bc",
            "0x1f6be",
            "0x1f6c2",
            "0x1f6c3",
            "0x1f6c4",
            "0x1f6c5",
            "0x26a0",
            "0x1f6b8",
            "0x26d4",
            "0x1f6ab",
            "0x1f6b3",
            "0x1f6ad",
            "0x1f6af",
            "0x1f6b1",
            "0x1f6b7",
            "0x1f4f5",
            "0x1f51e",
            "0x2622",
            "0x2623",
            "0x2b06",
            "0x2197",
            "0x27a1",
            "0x2198",
            "0x2b07",
            "0x2199",
            "0x2b05",
            "0x2196",
            "0x2195",
            "0x2194",
            "0x21a9",
            "0x21aa",
            "0x2934",
            "0x2935",
            "0x1f503",
            "0x1f504",
            "0x1f519",
            "0x1f51a",
            "0x1f51b",
            "0x1f51c",
            "0x1f51d",
            "0x1f6d0",
            "0x269b",
            "0x1f549",
            "0x2721",
            "0x2638",
            "0x262f",
            "0x271d",
            "0x2626",
            "0x262a",
            "0x262e",
            "0x1f54e",
            "0x1f52f",
            "0x1faaf",
            "0x2648",
            "0x2649",
            "0x264a",
            "0x264b",
            "0x264c",
            "0x264d",
            "0x264e",
            "0x264f",
            "0x2650",
            "0x2651",
            "0x2652",
            "0x2653",
            "0x26ce",
            "0x1f500",
            "0x1f501",
            "0x1f502",
            "0x25b6",
            "0x23e9",
            "0x23ed",
            "0x23ef",
            "0x25c0",
            "0x23ea",
            "0x23ee",
            "0x1f53c",
            "0x23eb",
            "0x1f53d",
            "0x23ec",
            "0x23f8",
            "0x23f9",
            "0x23fa",
            "0x23cf",
            "0x1f3a6",
            "0x1f505",
            "0x1f506",
            "0x1f4f6",
            "0x1f6dc",
            "0x1f4f3",
            "0x1f4f4",
            "0x2640",
            "0x2642",
            "0x26a7",
            "0x2716",
            "0x2795",
            "0x2796",
            "0x2797",
            "0x1f7f0",
            "0x267e",
            "0x203c",
            "0x2049",
            "0x2753",
            "0x2754",
            "0x2755",
            "0x2757",
            "0x3030",
            "0x1f4b1",
            "0x1f4b2",
            "0x2695",
            "0x267b",
            "0x269c",
            "0x1f531",
            "0x1f4db",
            "0x1f530",
            "0x2b55",
            "0x2705",
            "0x2611",
            "0x2714",
            "0x274c",
            "0x274e",
            "0x27b0",
            "0x27bf",
            "0x303d",
            "0x2733",
            "0x2734",
            "0x2747",
            "0x00a9",
            "0x00ae",
            "0x2122",
            "0x0023",
            "0xfe0f",
            "0x20e3",
            "0x002a",
            "0xfe0f",
            "0x20e3",
            "0x0030",
            "0xfe0f",
            "0x20e3",
            "0x0031",
            "0xfe0f",
            "0x20e3",
            "0x0032",
            "0xfe0f",
            "0x20e3",
            "0x0033",
            "0xfe0f",
            "0x20e3",
            "0x0034",
            "0xfe0f",
            "0x20e3",
            "0x0035",
            "0xfe0f",
            "0x20e3",
            "0x0036",
            "0xfe0f",
            "0x20e3",
            "0x0037",
            "0xfe0f",
            "0x20e3",
            "0x0038",
            "0xfe0f",
            "0x20e3",
            "0x0039",
            "0xfe0f",
            "0x20e3",
            "0x1f51f",
            "0x1f520",
            "0x1f521",
            "0x1f522",
            "0x1f523",
            "0x1f524",
            "0x1f170",
            "0x1f18e",
            "0x1f171",
            "0x1f191",
            "0x1f192",
            "0x1f193",
            "0x2139",
            "0x1f194",
            "0x24c2",
            "0x1f195",
            "0x1f196",
            "0x1f17e",
            "0x1f197",
            "0x1f17f",
            "0x1f198",
            "0x1f199",
            "0x1f19a",
            "0x1f201",
            "0x1f202",
            "0x1f237",
            "0x1f236",
            "0x1f22f",
            "0x1f250",
            "0x1f239",
            "0x1f21a",
            "0x1f232",
            "0x1f251",
            "0x1f238",
            "0x1f234",
            "0x1f233",
            "0x3297",
            "0x3299",
            "0x1f23a",
            "0x1f235",
            "0x1f534",
            "0x1f7e0",
            "0x1f7e1",
            "0x1f7e2",
            "0x1f535",
            "0x1f7e3",
            "0x1f7e4",
            "0x26ab",
            "0x26aa",
            "0x1f7e5",
            "0x1f7e7",
            "0x1f7e8",
            "0x1f7e9",
            "0x1f7e6",
            "0x1f7ea",
            "0x1f7eb",
            "0x2b1b",
            "0x2b1c",
            "0x25fc",
            "0x25fb",
            "0x25fe",
            "0x25fd",
            "0x25aa",
            "0x25ab",
            "0x1f536",
            "0x1f537",
            "0x1f538",
            "0x1f539",
            "0x1f53a",
            "0x1f53b",
            "0x1f4a0",
            "0x1f518",
            "0x1f533",
            "0x1f532"
          ],
          flags: [
            "0x1f3c1",
            "0x1f6a9",
            "0x1f38c",
            "0x1f3f4",
            "0x1f3f3",
            "0x1f3f3",
            "0xfe0f",
            "0x200d",
            "0x1f308",
            "0x1f3f3",
            "0xfe0f",
            "0x200d",
            "0x26a7",
            "0xfe0f",
            "0x1f3f4",
            "0x200d",
            "0x2620",
            "0xfe0f",
            "0x1f1e6",
            "0x1f1e8",
            "0x1f1e6",
            "0x1f1e9",
            "0x1f1e6",
            "0x1f1ea",
            "0x1f1e6",
            "0x1f1eb",
            "0x1f1e6",
            "0x1f1ec",
            "0x1f1e6",
            "0x1f1ee",
            "0x1f1e6",
            "0x1f1f1",
            "0x1f1e6",
            "0x1f1f2",
            "0x1f1e6",
            "0x1f1f4",
            "0x1f1e6",
            "0x1f1f6",
            "0x1f1e6",
            "0x1f1f7",
            "0x1f1e6",
            "0x1f1f8",
            "0x1f1e6",
            "0x1f1f9",
            "0x1f1e6",
            "0x1f1fa",
            "0x1f1e6",
            "0x1f1fc",
            "0x1f1e6",
            "0x1f1fd",
            "0x1f1e6",
            "0x1f1ff",
            "0x1f1e7",
            "0x1f1e6",
            "0x1f1e7",
            "0x1f1e7",
            "0x1f1e7",
            "0x1f1e9",
            "0x1f1e7",
            "0x1f1ea",
            "0x1f1e7",
            "0x1f1eb",
            "0x1f1e7",
            "0x1f1ec",
            "0x1f1e7",
            "0x1f1ed",
            "0x1f1e7",
            "0x1f1ee",
            "0x1f1e7",
            "0x1f1ef",
            "0x1f1e7",
            "0x1f1f1",
            "0x1f1e7",
            "0x1f1f2",
            "0x1f1e7",
            "0x1f1f3",
            "0x1f1e7",
            "0x1f1f4",
            "0x1f1e7",
            "0x1f1f6",
            "0x1f1e7",
            "0x1f1f7",
            "0x1f1e7",
            "0x1f1f8",
            "0x1f1e7",
            "0x1f1f9",
            "0x1f1e7",
            "0x1f1fb",
            "0x1f1e7",
            "0x1f1fc",
            "0x1f1e7",
            "0x1f1fe",
            "0x1f1e7",
            "0x1f1ff",
            "0x1f1e8",
            "0x1f1e6",
            "0x1f1e8",
            "0x1f1e8",
            "0x1f1e8",
            "0x1f1e9",
            "0x1f1e8",
            "0x1f1eb",
            "0x1f1e8",
            "0x1f1ec",
            "0x1f1e8",
            "0x1f1ed",
            "0x1f1e8",
            "0x1f1ee",
            "0x1f1e8",
            "0x1f1f0",
            "0x1f1e8",
            "0x1f1f1",
            "0x1f1e8",
            "0x1f1f2",
            "0x1f1e8",
            "0x1f1f3",
            "0x1f1e8",
            "0x1f1f4",
            "0x1f1e8",
            "0x1f1f5",
            "0x1f1e8",
            "0x1f1f7",
            "0x1f1e8",
            "0x1f1fa",
            "0x1f1e8",
            "0x1f1fb",
            "0x1f1e8",
            "0x1f1fc",
            "0x1f1e8",
            "0x1f1fd",
            "0x1f1e8",
            "0x1f1fe",
            "0x1f1e8",
            "0x1f1ff",
            "0x1f1e9",
            "0x1f1ea",
            "0x1f1e9",
            "0x1f1ec",
            "0x1f1e9",
            "0x1f1ef",
            "0x1f1e9",
            "0x1f1f0",
            "0x1f1e9",
            "0x1f1f2",
            "0x1f1e9",
            "0x1f1f4",
            "0x1f1e9",
            "0x1f1ff",
            "0x1f1ea",
            "0x1f1e6",
            "0x1f1ea",
            "0x1f1e8",
            "0x1f1ea",
            "0x1f1ea",
            "0x1f1ea",
            "0x1f1ec",
            "0x1f1ea",
            "0x1f1ed",
            "0x1f1ea",
            "0x1f1f7",
            "0x1f1ea",
            "0x1f1f8",
            "0x1f1ea",
            "0x1f1f9",
            "0x1f1ea",
            "0x1f1fa",
            "0x1f1eb",
            "0x1f1ee",
            "0x1f1eb",
            "0x1f1ef",
            "0x1f1eb",
            "0x1f1f0",
            "0x1f1eb",
            "0x1f1f2",
            "0x1f1eb",
            "0x1f1f4",
            "0x1f1eb",
            "0x1f1f7",
            "0x1f1ec",
            "0x1f1e6",
            "0x1f1ec",
            "0x1f1e7",
            "0x1f1ec",
            "0x1f1e9",
            "0x1f1ec",
            "0x1f1ea",
            "0x1f1ec",
            "0x1f1eb",
            "0x1f1ec",
            "0x1f1ec",
            "0x1f1ec",
            "0x1f1ed",
            "0x1f1ec",
            "0x1f1ee",
            "0x1f1ec",
            "0x1f1f1",
            "0x1f1ec",
            "0x1f1f2",
            "0x1f1ec",
            "0x1f1f3",
            "0x1f1ec",
            "0x1f1f5",
            "0x1f1ec",
            "0x1f1f6",
            "0x1f1ec",
            "0x1f1f7",
            "0x1f1ec",
            "0x1f1f8",
            "0x1f1ec",
            "0x1f1f9",
            "0x1f1ec",
            "0x1f1fa",
            "0x1f1ec",
            "0x1f1fc",
            "0x1f1ec",
            "0x1f1fe",
            "0x1f1ed",
            "0x1f1f0",
            "0x1f1ed",
            "0x1f1f2",
            "0x1f1ed",
            "0x1f1f3",
            "0x1f1ed",
            "0x1f1f7",
            "0x1f1ed",
            "0x1f1f9",
            "0x1f1ed",
            "0x1f1fa",
            "0x1f1ee",
            "0x1f1e8",
            "0x1f1ee",
            "0x1f1e9",
            "0x1f1ee",
            "0x1f1ea",
            "0x1f1ee",
            "0x1f1f1",
            "0x1f1ee",
            "0x1f1f2",
            "0x1f1ee",
            "0x1f1f3",
            "0x1f1ee",
            "0x1f1f4",
            "0x1f1ee",
            "0x1f1f6",
            "0x1f1ee",
            "0x1f1f7",
            "0x1f1ee",
            "0x1f1f8",
            "0x1f1ee",
            "0x1f1f9",
            "0x1f1ef",
            "0x1f1ea",
            "0x1f1ef",
            "0x1f1f2",
            "0x1f1ef",
            "0x1f1f4",
            "0x1f1ef",
            "0x1f1f5",
            "0x1f1f0",
            "0x1f1ea",
            "0x1f1f0",
            "0x1f1ec",
            "0x1f1f0",
            "0x1f1ed",
            "0x1f1f0",
            "0x1f1ee",
            "0x1f1f0",
            "0x1f1f2",
            "0x1f1f0",
            "0x1f1f3",
            "0x1f1f0",
            "0x1f1f5",
            "0x1f1f0",
            "0x1f1f7",
            "0x1f1f0",
            "0x1f1fc",
            "0x1f1f0",
            "0x1f1fe",
            "0x1f1f0",
            "0x1f1ff",
            "0x1f1f1",
            "0x1f1e6",
            "0x1f1f1",
            "0x1f1e7",
            "0x1f1f1",
            "0x1f1e8",
            "0x1f1f1",
            "0x1f1ee",
            "0x1f1f1",
            "0x1f1f0",
            "0x1f1f1",
            "0x1f1f7",
            "0x1f1f1",
            "0x1f1f8",
            "0x1f1f1",
            "0x1f1f9",
            "0x1f1f1",
            "0x1f1fa",
            "0x1f1f1",
            "0x1f1fb",
            "0x1f1f1",
            "0x1f1fe",
            "0x1f1f2",
            "0x1f1e6",
            "0x1f1f2",
            "0x1f1e8",
            "0x1f1f2",
            "0x1f1e9",
            "0x1f1f2",
            "0x1f1ea",
            "0x1f1f2",
            "0x1f1eb",
            "0x1f1f2",
            "0x1f1ec",
            "0x1f1f2",
            "0x1f1ed",
            "0x1f1f2",
            "0x1f1f0",
            "0x1f1f2",
            "0x1f1f1",
            "0x1f1f2",
            "0x1f1f2",
            "0x1f1f2",
            "0x1f1f3",
            "0x1f1f2",
            "0x1f1f4",
            "0x1f1f2",
            "0x1f1f5",
            "0x1f1f2",
            "0x1f1f6",
            "0x1f1f2",
            "0x1f1f7",
            "0x1f1f2",
            "0x1f1f8",
            "0x1f1f2",
            "0x1f1f9",
            "0x1f1f2",
            "0x1f1fa",
            "0x1f1f2",
            "0x1f1fb",
            "0x1f1f2",
            "0x1f1fc",
            "0x1f1f2",
            "0x1f1fd",
            "0x1f1f2",
            "0x1f1fe",
            "0x1f1f2",
            "0x1f1ff",
            "0x1f1f3",
            "0x1f1e6",
            "0x1f1f3",
            "0x1f1e8",
            "0x1f1f3",
            "0x1f1ea",
            "0x1f1f3",
            "0x1f1eb",
            "0x1f1f3",
            "0x1f1ec",
            "0x1f1f3",
            "0x1f1ee",
            "0x1f1f3",
            "0x1f1f1",
            "0x1f1f3",
            "0x1f1f4",
            "0x1f1f3",
            "0x1f1f5",
            "0x1f1f3",
            "0x1f1f7",
            "0x1f1f3",
            "0x1f1fa",
            "0x1f1f3",
            "0x1f1ff",
            "0x1f1f4",
            "0x1f1f2",
            "0x1f1f5",
            "0x1f1e6",
            "0x1f1f5",
            "0x1f1ea",
            "0x1f1f5",
            "0x1f1eb",
            "0x1f1f5",
            "0x1f1ec",
            "0x1f1f5",
            "0x1f1ed",
            "0x1f1f5",
            "0x1f1f0",
            "0x1f1f5",
            "0x1f1f1",
            "0x1f1f5",
            "0x1f1f2",
            "0x1f1f5",
            "0x1f1f3",
            "0x1f1f5",
            "0x1f1f7",
            "0x1f1f5",
            "0x1f1f8",
            "0x1f1f5",
            "0x1f1f9",
            "0x1f1f5",
            "0x1f1fc",
            "0x1f1f5",
            "0x1f1fe",
            "0x1f1f6",
            "0x1f1e6",
            "0x1f1f7",
            "0x1f1ea",
            "0x1f1f7",
            "0x1f1f4",
            "0x1f1f7",
            "0x1f1f8",
            "0x1f1f7",
            "0x1f1fa",
            "0x1f1f7",
            "0x1f1fc",
            "0x1f1f8",
            "0x1f1e6",
            "0x1f1f8",
            "0x1f1e7",
            "0x1f1f8",
            "0x1f1e8",
            "0x1f1f8",
            "0x1f1e9",
            "0x1f1f8",
            "0x1f1ea",
            "0x1f1f8",
            "0x1f1ec",
            "0x1f1f8",
            "0x1f1ed",
            "0x1f1f8",
            "0x1f1ee",
            "0x1f1f8",
            "0x1f1ef",
            "0x1f1f8",
            "0x1f1f0",
            "0x1f1f8",
            "0x1f1f1",
            "0x1f1f8",
            "0x1f1f2",
            "0x1f1f8",
            "0x1f1f3",
            "0x1f1f8",
            "0x1f1f4",
            "0x1f1f8",
            "0x1f1f7",
            "0x1f1f8",
            "0x1f1f8",
            "0x1f1f8",
            "0x1f1f9",
            "0x1f1f8",
            "0x1f1fb",
            "0x1f1f8",
            "0x1f1fd",
            "0x1f1f8",
            "0x1f1fe",
            "0x1f1f8",
            "0x1f1ff",
            "0x1f1f9",
            "0x1f1e6",
            "0x1f1f9",
            "0x1f1e8",
            "0x1f1f9",
            "0x1f1e9",
            "0x1f1f9",
            "0x1f1eb",
            "0x1f1f9",
            "0x1f1ec",
            "0x1f1f9",
            "0x1f1ed",
            "0x1f1f9",
            "0x1f1ef",
            "0x1f1f9",
            "0x1f1f0",
            "0x1f1f9",
            "0x1f1f1",
            "0x1f1f9",
            "0x1f1f2",
            "0x1f1f9",
            "0x1f1f3",
            "0x1f1f9",
            "0x1f1f4",
            "0x1f1f9",
            "0x1f1f7",
            "0x1f1f9",
            "0x1f1f9",
            "0x1f1f9",
            "0x1f1fb",
            "0x1f1f9",
            "0x1f1fc",
            "0x1f1f9",
            "0x1f1ff",
            "0x1f1fa",
            "0x1f1e6",
            "0x1f1fa",
            "0x1f1ec",
            "0x1f1fa",
            "0x1f1f2",
            "0x1f1fa",
            "0x1f1f3",
            "0x1f1fa",
            "0x1f1f8",
            "0x1f1fa",
            "0x1f1fe",
            "0x1f1fa",
            "0x1f1ff",
            "0x1f1fb",
            "0x1f1e6",
            "0x1f1fb",
            "0x1f1e8",
            "0x1f1fb",
            "0x1f1ea",
            "0x1f1fb",
            "0x1f1ec",
            "0x1f1fb",
            "0x1f1ee",
            "0x1f1fb",
            "0x1f1f3",
            "0x1f1fb",
            "0x1f1fa",
            "0x1f1fc",
            "0x1f1eb",
            "0x1f1fc",
            "0x1f1f8",
            "0x1f1fd",
            "0x1f1f0",
            "0x1f1fe",
            "0x1f1ea",
            "0x1f1fe",
            "0x1f1f9",
            "0x1f1ff",
            "0x1f1e6",
            "0x1f1ff",
            "0x1f1f2",
            "0x1f1ff",
            "0x1f1fc",
            "0x1f3f4",
            "0xe0067",
            "0xe0062",
            "0xe0065",
            "0xe006e",
            "0xe0067",
            "0xe007f",
            "0x1f3f4",
            "0xe0067",
            "0xe0062",
            "0xe0073",
            "0xe0063",
            "0xe0074",
            "0xe007f",
            "0x1f3f4",
            "0xe0067",
            "0xe0062",
            "0xe0077",
            "0xe006c",
            "0xe0073",
            "0xe007f"
          ]
        }
      }, b = Object.prototype.hasOwnProperty, B = Object.keys || function(e) {
        var a = [];
        for (var n in e)
          b.call(e, n) && a.push(n);
        return a;
      };
      function t(e, a) {
        for (var n = B(e), f, m = 0, S = n.length; m < S; m++)
          f = n[m], a[f] = e[f] || a[f];
      }
      function o(e, a) {
        for (var n = 0, f = e.length; n < f; n++)
          a[n] = e[n];
      }
      function d(e, a) {
        var n = Array.isArray(e), f = a || (n ? new Array(e.length) : {});
        return n ? o(e, f) : t(e, f), f;
      }
      r.prototype.get = function(e) {
        return d(u[e]);
      }, r.prototype.mac_address = function(e) {
        e = s(e), e.separator || (e.separator = e.networkVersion ? "." : ":");
        var a = "ABCDEF1234567890", n = "";
        return e.networkVersion ? n = this.n(this.string, 3, { pool: a, length: 4 }).join(e.separator) : n = this.n(this.string, 6, { pool: a, length: 2 }).join(e.separator), n;
      }, r.prototype.normal = function(e) {
        if (e = s(e, { mean: 0, dev: 1, pool: [] }), C(
          e.pool.constructor !== Array,
          "Chance: The pool option must be a valid array."
        ), C(
          typeof e.mean != "number",
          "Chance: Mean (mean) must be a number"
        ), C(
          typeof e.dev != "number",
          "Chance: Standard deviation (dev) must be a number"
        ), e.pool.length > 0)
          return this.normal_pool(e);
        var a, n, f, m, S = e.mean, E = e.dev;
        do
          n = this.random() * 2 - 1, f = this.random() * 2 - 1, a = n * n + f * f;
        while (a >= 1);
        return m = n * Math.sqrt(-2 * Math.log(a) / a), E * m + S;
      }, r.prototype.normal_pool = function(e) {
        var a = 0;
        do {
          var n = Math.round(this.normal({ mean: e.mean, dev: e.dev }));
          if (n < e.pool.length && n >= 0)
            return e.pool[n];
          a++;
        } while (a < 100);
        throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");
      }, r.prototype.radio = function(e) {
        e = s(e, { side: "?" });
        var a = "";
        switch (e.side.toLowerCase()) {
          case "east":
          case "e":
            a = "W";
            break;
          case "west":
          case "w":
            a = "K";
            break;
          default:
            a = this.character({ pool: "KW" });
            break;
        }
        return a + this.character({ alpha: !0, casing: "upper" }) + this.character({ alpha: !0, casing: "upper" }) + this.character({ alpha: !0, casing: "upper" });
      }, r.prototype.set = function(e, a) {
        typeof e == "string" ? u[e] = a : u = d(e, u);
      }, r.prototype.tv = function(e) {
        return this.radio(e);
      }, r.prototype.cnpj = function() {
        var e = this.n(this.natural, 8, { max: 9 }), a = 2 + e[7] * 6 + e[6] * 7 + e[5] * 8 + e[4] * 9 + e[3] * 2 + e[2] * 3 + e[1] * 4 + e[0] * 5;
        a = 11 - a % 11, a >= 10 && (a = 0);
        var n = a * 2 + 3 + e[7] * 7 + e[6] * 8 + e[5] * 9 + e[4] * 2 + e[3] * 3 + e[2] * 4 + e[1] * 5 + e[0] * 6;
        return n = 11 - n % 11, n >= 10 && (n = 0), "" + e[0] + e[1] + "." + e[2] + e[3] + e[4] + "." + e[5] + e[6] + e[7] + "/0001-" + a + n;
      }, r.prototype.emotion = function() {
        return this.pick(this.get("emotions"));
      }, r.prototype.mersenne_twister = function(e) {
        return new h(e);
      }, r.prototype.blueimp_md5 = function() {
        return new x();
      };
      var h = function(e) {
        e === void 0 && (e = Math.floor(Math.random() * Math.pow(10, 13))), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(e);
      };
      h.prototype.init_genrand = function(e) {
        for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++)
          e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (((e & 4294901760) >>> 16) * 1812433253 << 16) + (e & 65535) * 1812433253 + this.mti, this.mt[this.mti] >>>= 0;
      }, h.prototype.init_by_array = function(e, a) {
        var n = 1, f = 0, m, S;
        for (this.init_genrand(19650218), m = this.N > a ? this.N : a; m; m--)
          S = this.mt[n - 1] ^ this.mt[n - 1] >>> 30, this.mt[n] = (this.mt[n] ^ (((S & 4294901760) >>> 16) * 1664525 << 16) + (S & 65535) * 1664525) + e[f] + f, this.mt[n] >>>= 0, n++, f++, n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1), f >= a && (f = 0);
        for (m = this.N - 1; m; m--)
          S = this.mt[n - 1] ^ this.mt[n - 1] >>> 30, this.mt[n] = (this.mt[n] ^ (((S & 4294901760) >>> 16) * 1566083941 << 16) + (S & 65535) * 1566083941) - n, this.mt[n] >>>= 0, n++, n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1);
        this.mt[0] = 2147483648;
      }, h.prototype.genrand_int32 = function() {
        var e, a = new Array(0, this.MATRIX_A);
        if (this.mti >= this.N) {
          var n;
          for (this.mti === this.N + 1 && this.init_genrand(5489), n = 0; n < this.N - this.M; n++)
            e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + this.M] ^ e >>> 1 ^ a[e & 1];
          for (; n < this.N - 1; n++)
            e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + (this.M - this.N)] ^ e >>> 1 ^ a[e & 1];
          e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ a[e & 1], this.mti = 0;
        }
        return e = this.mt[this.mti++], e ^= e >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, e >>> 0;
      }, h.prototype.genrand_int31 = function() {
        return this.genrand_int32() >>> 1;
      }, h.prototype.genrand_real1 = function() {
        return this.genrand_int32() * (1 / 4294967295);
      }, h.prototype.random = function() {
        return this.genrand_int32() * (1 / 4294967296);
      }, h.prototype.genrand_real3 = function() {
        return (this.genrand_int32() + 0.5) * (1 / 4294967296);
      }, h.prototype.genrand_res53 = function() {
        var e = this.genrand_int32() >>> 5, a = this.genrand_int32() >>> 6;
        return (e * 67108864 + a) * (1 / 9007199254740992);
      };
      var x = function() {
      };
      x.prototype.VERSION = "1.0.1", x.prototype.safe_add = function(a, n) {
        var f = (a & 65535) + (n & 65535), m = (a >> 16) + (n >> 16) + (f >> 16);
        return m << 16 | f & 65535;
      }, x.prototype.bit_roll = function(e, a) {
        return e << a | e >>> 32 - a;
      }, x.prototype.md5_cmn = function(e, a, n, f, m, S) {
        return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(a, e), this.safe_add(f, S)), m), n);
      }, x.prototype.md5_ff = function(e, a, n, f, m, S, E) {
        return this.md5_cmn(a & n | ~a & f, e, a, m, S, E);
      }, x.prototype.md5_gg = function(e, a, n, f, m, S, E) {
        return this.md5_cmn(a & f | n & ~f, e, a, m, S, E);
      }, x.prototype.md5_hh = function(e, a, n, f, m, S, E) {
        return this.md5_cmn(a ^ n ^ f, e, a, m, S, E);
      }, x.prototype.md5_ii = function(e, a, n, f, m, S, E) {
        return this.md5_cmn(n ^ (a | ~f), e, a, m, S, E);
      }, x.prototype.binl_md5 = function(e, a) {
        e[a >> 5] |= 128 << a % 32, e[(a + 64 >>> 9 << 4) + 14] = a;
        var n, f, m, S, E, v = 1732584193, M = -271733879, I = -1732584194, k = 271733878;
        for (n = 0; n < e.length; n += 16)
          f = v, m = M, S = I, E = k, v = this.md5_ff(v, M, I, k, e[n], 7, -680876936), k = this.md5_ff(k, v, M, I, e[n + 1], 12, -389564586), I = this.md5_ff(I, k, v, M, e[n + 2], 17, 606105819), M = this.md5_ff(M, I, k, v, e[n + 3], 22, -1044525330), v = this.md5_ff(v, M, I, k, e[n + 4], 7, -176418897), k = this.md5_ff(k, v, M, I, e[n + 5], 12, 1200080426), I = this.md5_ff(I, k, v, M, e[n + 6], 17, -1473231341), M = this.md5_ff(M, I, k, v, e[n + 7], 22, -45705983), v = this.md5_ff(v, M, I, k, e[n + 8], 7, 1770035416), k = this.md5_ff(k, v, M, I, e[n + 9], 12, -1958414417), I = this.md5_ff(I, k, v, M, e[n + 10], 17, -42063), M = this.md5_ff(M, I, k, v, e[n + 11], 22, -1990404162), v = this.md5_ff(v, M, I, k, e[n + 12], 7, 1804603682), k = this.md5_ff(k, v, M, I, e[n + 13], 12, -40341101), I = this.md5_ff(I, k, v, M, e[n + 14], 17, -1502002290), M = this.md5_ff(M, I, k, v, e[n + 15], 22, 1236535329), v = this.md5_gg(v, M, I, k, e[n + 1], 5, -165796510), k = this.md5_gg(k, v, M, I, e[n + 6], 9, -1069501632), I = this.md5_gg(I, k, v, M, e[n + 11], 14, 643717713), M = this.md5_gg(M, I, k, v, e[n], 20, -373897302), v = this.md5_gg(v, M, I, k, e[n + 5], 5, -701558691), k = this.md5_gg(k, v, M, I, e[n + 10], 9, 38016083), I = this.md5_gg(I, k, v, M, e[n + 15], 14, -660478335), M = this.md5_gg(M, I, k, v, e[n + 4], 20, -405537848), v = this.md5_gg(v, M, I, k, e[n + 9], 5, 568446438), k = this.md5_gg(k, v, M, I, e[n + 14], 9, -1019803690), I = this.md5_gg(I, k, v, M, e[n + 3], 14, -187363961), M = this.md5_gg(M, I, k, v, e[n + 8], 20, 1163531501), v = this.md5_gg(v, M, I, k, e[n + 13], 5, -1444681467), k = this.md5_gg(k, v, M, I, e[n + 2], 9, -51403784), I = this.md5_gg(I, k, v, M, e[n + 7], 14, 1735328473), M = this.md5_gg(M, I, k, v, e[n + 12], 20, -1926607734), v = this.md5_hh(v, M, I, k, e[n + 5], 4, -378558), k = this.md5_hh(k, v, M, I, e[n + 8], 11, -2022574463), I = this.md5_hh(I, k, v, M, e[n + 11], 16, 1839030562), M = this.md5_hh(M, I, k, v, e[n + 14], 23, -35309556), v = this.md5_hh(v, M, I, k, e[n + 1], 4, -1530992060), k = this.md5_hh(k, v, M, I, e[n + 4], 11, 1272893353), I = this.md5_hh(I, k, v, M, e[n + 7], 16, -155497632), M = this.md5_hh(M, I, k, v, e[n + 10], 23, -1094730640), v = this.md5_hh(v, M, I, k, e[n + 13], 4, 681279174), k = this.md5_hh(k, v, M, I, e[n], 11, -358537222), I = this.md5_hh(I, k, v, M, e[n + 3], 16, -722521979), M = this.md5_hh(M, I, k, v, e[n + 6], 23, 76029189), v = this.md5_hh(v, M, I, k, e[n + 9], 4, -640364487), k = this.md5_hh(k, v, M, I, e[n + 12], 11, -421815835), I = this.md5_hh(I, k, v, M, e[n + 15], 16, 530742520), M = this.md5_hh(M, I, k, v, e[n + 2], 23, -995338651), v = this.md5_ii(v, M, I, k, e[n], 6, -198630844), k = this.md5_ii(k, v, M, I, e[n + 7], 10, 1126891415), I = this.md5_ii(I, k, v, M, e[n + 14], 15, -1416354905), M = this.md5_ii(M, I, k, v, e[n + 5], 21, -57434055), v = this.md5_ii(v, M, I, k, e[n + 12], 6, 1700485571), k = this.md5_ii(k, v, M, I, e[n + 3], 10, -1894986606), I = this.md5_ii(I, k, v, M, e[n + 10], 15, -1051523), M = this.md5_ii(M, I, k, v, e[n + 1], 21, -2054922799), v = this.md5_ii(v, M, I, k, e[n + 8], 6, 1873313359), k = this.md5_ii(k, v, M, I, e[n + 15], 10, -30611744), I = this.md5_ii(I, k, v, M, e[n + 6], 15, -1560198380), M = this.md5_ii(M, I, k, v, e[n + 13], 21, 1309151649), v = this.md5_ii(v, M, I, k, e[n + 4], 6, -145523070), k = this.md5_ii(k, v, M, I, e[n + 11], 10, -1120210379), I = this.md5_ii(I, k, v, M, e[n + 2], 15, 718787259), M = this.md5_ii(M, I, k, v, e[n + 9], 21, -343485551), v = this.safe_add(v, f), M = this.safe_add(M, m), I = this.safe_add(I, S), k = this.safe_add(k, E);
        return [v, M, I, k];
      }, x.prototype.binl2rstr = function(e) {
        var a, n = "";
        for (a = 0; a < e.length * 32; a += 8)
          n += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
        return n;
      }, x.prototype.rstr2binl = function(e) {
        var a, n = [];
        for (n[(e.length >> 2) - 1] = void 0, a = 0; a < n.length; a += 1)
          n[a] = 0;
        for (a = 0; a < e.length * 8; a += 8)
          n[a >> 5] |= (e.charCodeAt(a / 8) & 255) << a % 32;
        return n;
      }, x.prototype.rstr_md5 = function(e) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(e), e.length * 8));
      }, x.prototype.rstr_hmac_md5 = function(e, a) {
        var n, f = this.rstr2binl(e), m = [], S = [], E;
        for (m[15] = S[15] = void 0, f.length > 16 && (f = this.binl_md5(f, e.length * 8)), n = 0; n < 16; n += 1)
          m[n] = f[n] ^ 909522486, S[n] = f[n] ^ 1549556828;
        return E = this.binl_md5(m.concat(this.rstr2binl(a)), 512 + a.length * 8), this.binl2rstr(this.binl_md5(S.concat(E), 640));
      }, x.prototype.rstr2hex = function(e) {
        var a = "0123456789abcdef", n = "", f, m;
        for (m = 0; m < e.length; m += 1)
          f = e.charCodeAt(m), n += a.charAt(f >>> 4 & 15) + a.charAt(f & 15);
        return n;
      }, x.prototype.str2rstr_utf8 = function(e) {
        return unescape(encodeURIComponent(e));
      }, x.prototype.raw_md5 = function(e) {
        return this.rstr_md5(this.str2rstr_utf8(e));
      }, x.prototype.hex_md5 = function(e) {
        return this.rstr2hex(this.raw_md5(e));
      }, x.prototype.raw_hmac_md5 = function(e, a) {
        return this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(a));
      }, x.prototype.hex_hmac_md5 = function(e, a) {
        return this.rstr2hex(this.raw_hmac_md5(e, a));
      }, x.prototype.md5 = function(e, a, n) {
        return a ? n ? this.raw_hmac_md5(a, e) : this.hex_hmac_md5(a, e) : n ? this.raw_md5(e) : this.hex_md5(e);
      }, y.exports && (l = y.exports = r), l.Chance = r, typeof importScripts < "u" && (chance = new r(), self.Chance = r), typeof window == "object" && typeof window.document == "object" && (window.Chance = r, window.chance = new r());
    })();
  })(ne, ne.exports)), ne.exports;
}
var Me = Se();
const Te = /* @__PURE__ */ Ae(Me);
var re = /* @__PURE__ */ (function() {
  function y(l, N) {
    for (var P = new Set(N), R = [], A = "", D = 0; D < l.length; D++) {
      var L = l.charAt(D);
      P.has(L) ? (0 < A.length && R.push(A), R.push(L), A = "") : A = A + L;
    }
    return 0 < A.length && R.push(A), R;
  }
  return y;
})(), X = (function() {
  function y(A, D, L, w, _, r) {
    this.type = w, this.value = A, this.begin = D, this.end = L, this.line = _, this.col = r;
  }
  function l(A) {
    return A == "<" ? ">" : A == "[" ? "]" : A == "{" ? "}" : A == "(" ? ")" : A;
  }
  y.prototype.toString = function() {
    return "{type:" + this.type + ",value:" + this.value + "}";
  }, y.prototype.getValue = function() {
    return this.value == null || this.value.length < 2 ? this.value : (this.value.charAt(0) == "`" && this.value.substring(1, this.value.length - 1), this.value);
  }, y.prototype.isStandardLiteral = function() {
    if (this.value.length < 2 || !(this.value.charAt(0) == "'" || this.value.charAt(0) == "n" || this.value.charAt(0) == "N"))
      return !1;
    var A = this.value;
    if (A.charAt(0) == "n" || A.charAt(0) == "N") {
      if (A.length < 3)
        return !1;
      A = A.substring(1);
    }
    return A.length < 2 ? !1 : A.charAt(0) == "'" && A.charAt(A.length - 1) == "'";
  }, y.prototype.isAltLiteral = function() {
    if (this.value.length < 5 || !(this.value.charAt(0) == "q" || this.value.charAt(0) == "Q" || this.value.charAt(0) == "n" || this.value.charAt(0) == "N"))
      return !1;
    var A = this.value;
    if (this.value.charAt(0) == "q" || this.value.charAt(0) == "Q")
      A = A.substring(1);
    else if (
      /*content.startsWith("Nq")*/
      (this.value.charAt(0) == "n" || this.value.charAt(0) == "N") && (this.value.charAt(1) == "q" || this.value.charAt(1) == "Q")
    ) {
      if (A.length < 6)
        return !1;
      A = A.substring(2);
    } else
      return !1;
    if (A.charAt(0) == "'" && A.charAt(A.length - 1) == "'")
      A = A.substring(1, A.length - 1);
    else
      return !1;
    return l(A.charAt(0)) == A.charAt(A.length - 1);
  };
  function N(A, D, L) {
    for (var w = [], _ = `(){}[]^-|!*+.><='",;:%@?/\\#~` + L, r = ` 
\r	`, s = re(
      A,
      //".*-+/|><=()\'\", \n\r\t"
      _ + r
    ), T = 0, C = 0, F = 0, G = 0; G < s.length; G++) {
      var g = s[G], i = null;
      if (w.length > 0 && (i = w[w.length - 1]), g == `
` ? (C++, F = 0) : G > 0 && s[G - 1] !== `
` ? F = F + s[G - 1].length : F = 0, T += g.length, i != null && i.type == "comment" && (i.value.lastIndexOf("*/") != i.value.length - 2 || i.value == "/*/")) {
        g == "*" || g == "/" ? i.value = i.value + g : i.value = "/* ... ", i.end = T, i != null && i.type == "comment" && i.value.lastIndexOf("*/") == i.value.length - 2 && i.value != "/*/" && (i.value = A.substring(i.begin, i.end));
        continue;
      }
      if (i != null && (i.type == "line-comment" || i.type == "dbtools-command") && g != `
`) {
        i.value = i.value + g;
        continue;
      }
      if (i != null && (i.type == "line-comment" || i.type == "dbtools-command") && g == `
` && (i.end = i.begin + i.value.length), i != null && i.type == "quoted-string" && !(i.isStandardLiteral() || i.isAltLiteral())) {
        i.value = i.value + g, i.end = i.begin + i.value.length;
        continue;
      }
      if (!(i != null && i.type == "dquoted-string" && g != '"' && !(i.value.endsWith('"') && i.value.length > 1))) {
        if (i != null && i.type == "dquoted-string" && g == '"') {
          i.end = T, i.value = A.substring(i.begin, i.end);
          continue;
        }
        if (!(i != null && i.type == "bquoted-string" && g != "`" && !(i.value.endsWith("`") && i.value.length > 1))) {
          if (i != null && i.type == "bquoted-string" && g == "`") {
            i.end = T, i.value = A.substring(i.begin, i.end);
            continue;
          }
          if (g == "*" && i != null && i.value == "/") {
            i.value = i.value + g, i.end = i.begin + i.value.length, i.type = "comment";
            continue;
          }
          if (g == "-" && i != null && i.value == "-") {
            i.value = i.value + g, i.type = "line-comment";
            continue;
          }
          if (i != null && i.type == "identifier" && i.end == -11 && i.value.indexOf("@") == 0 && !(g == `
` || g == "\r")) {
            i.value = i.value + g;
            continue;
          }
          if (i != null && i.type == "identifier" && i.end == -11 && i.value.indexOf("@") == 0 && (g == `
` || g == "\r")) {
            i.end = T - 1, w.push(new y(g, T - 1, T, "ws", C, F));
            continue;
          }
          if (D && g == "'") {
            var c = i != null && i.value.length <= 2 ? i.value.toLowerCase() : "";
            c === "q" || c === "n" || c === "u" || c === "nq" ? (i.value += g, i.type = "quoted-string") : w.push(new y(g, T - 1, -10, "quoted-string", C, F));
            continue;
          }
          if (D && g == '"') {
            w.push(new y(g, T - 1, -11, "dquoted-string", C, F));
            continue;
          }
          if (g == "`" && 0 <= _.indexOf("`")) {
            w.push(new y(g, T - 1, -11, "bquoted-string", C, F));
            continue;
          }
          if (g.length == 1 && 0 <= _.indexOf(g)) {
            w.push(new y(g, T - 1, T, "operation", C, F));
            continue;
          }
          if (g.length == 1 && 0 <= r.indexOf(g)) {
            w.push(new y(g, T - 1, T, "ws", C, F));
            continue;
          }
          if ("0" <= g.charAt(0) && g.charAt(0) <= "9") {
            P(g, w, T - g.length, C) || (g.charAt(g.length - 1) == "K" || g.charAt(g.length - 1) == "k" || g.charAt(g.length - 1) == "M" || g.charAt(g.length - 1) == "m" || g.charAt(g.length - 1) == "G" || g.charAt(g.length - 1) == "g" || g.charAt(g.length - 1) == "T" || g.charAt(g.length - 1) == "t" || g.charAt(g.length - 1) == "P" || g.charAt(g.length - 1) == "p" || g.charAt(g.length - 1) == "E" || g.charAt(g.length - 1) == "e" ? (w.push(new y(g.substring(0, g.length - 1), T - g.length, T - 1, "constant.numeric", C, F)), w.push(new y(g.substring(g.length - 1), T - 1, T, "constant.numeric", C, F))) : w.push(new y(g, T - g.length, T, "constant.numeric", C, F)));
            continue;
          }
          var p = "identifier";
          G + 1 < s.length && s[G + 1], w.push(new y(g, T - g.length, T, p, C, F));
        }
      }
    }
    if (w.length > 0) {
      var i = w[w.length - 1];
      i.end = A.length;
    }
    return w;
  }
  function P(A, D, L, w) {
    var _ = A.indexOf("e"), r = A.indexOf("f"), s = A.indexOf("d");
    if (0 > _ && 0 > r && 0 > s)
      return !1;
    for (var T = re(A, "efd"), C = 0; C < T.length; C++) {
      var F = T[C];
      L += F.length, "0" <= F.charAt(0) && F.charAt(0) <= "9" ? D.push(new y(F, L - F.length, L, "constant.numeric", w)) : D.push(new y(F, L - F.length, L, "identifier", w));
    }
    return !0;
  }
  function R(A, D, L, w) {
    for (var _ = [], r = N(A, L, w), s = null, T = 0; T < r.length; T++) {
      var C = r[T];
      if (C.type == "quoted-string") {
        if (s != null && s.type == "quoted-string") {
          s.value = s.value + C.value, s.end = C.end;
          continue;
        }
        if (s != null && s.type == "identifier" && s.value.toUpperCase() == "N" && s.end == C.begin) {
          s.begin = C.begin, s.end = C.end, s.type = C.type, s.value = C.value;
          continue;
        }
      }
      if (C.value.indexOf("@") == 0 && (C.end = C.begin + C.value.length), C.value == "#" && s != null && s.type == "identifier") {
        s.end += 1, s.value += "#";
        continue;
      }
      if ((C.type === "identifier" || C.type === "constant.numeric") && s !== null && s.value[s.value.length - 1] === "#" && s.type === "identifier") {
        s.end += C.value.length, s.value += C.value;
        continue;
      }
      /*17607445: can just drop preprocessor directives
          token.value.equals("$IF")
          || token.value.equals("$ELSIF")
          || token.value.equals("$ELSE")
          || token.value.equals("$THEN")
          ||*/
      C.value.indexOf("$$") == 0 && (C.value = "$$VAR"), (D || C.type != "ws" && C.type != "comment" && C.type != "line-comment") && _.push(C), s = C;
    }
    return _;
  }
  return R;
})();
function me(y, l, N, P) {
  var R = new Te(ce++);
  let A = N.toUpperCase(), D = y.toUpperCase(), L = l.toUpperCase();
  if (P != null && 0 < P.length) {
    let s = 0, T = P.length, C = P[Math.floor($() * (T - s)) + s];
    return !A.startsWith("INTEGER") && !A.startsWith("NUMBER") && !A.startsWith("DATE") && (!C.toLowerCase || C.toLowerCase() != "null") && (!C.charAt || C.charAt(0) != "q" && C.charAt(1) != "'") && (C.charAt && C.charAt(0) == "'" && (C = C.substring(1, C.length - 1)), C = C.replaceAll("'", "''"), C = "'" + C + "'"), C;
  }
  if (L == "NAME" && 0 <= D.indexOf("DEPARTMENT")) {
    var w = ["Sales", "Finance", "Delivery", "Manufacturing"];
    let s = 0, T = w.length;
    return "'" + w[Math.floor($() * (T - s)) + s] + "'";
  }
  if (R[L.toLowerCase()] != null && L.indexOf("NAME") < 0)
    return "'" + R[L.toLowerCase()]() + "'";
  if (L == "FIRST_NAME")
    return "'" + R.first() + "'";
  if (L == "LAST_NAME")
    return "'" + R.last() + "'";
  if (0 <= L.indexOf("NAME"))
    return "'" + R.name() + "'";
  if (0 < L.indexOf("ADDRESS"))
    return "'" + R.address() + "'";
  if (L == "LOCATION")
    return "'" + R.city() + "'";
  if (L == "DESCRIPTION") {
    let s = R.paragraph({ sentences: 2 }), T = X(N, !1, !0, ""), C = 400, F = -1;
    for (let G = 0; G < T.length; G++) {
      const g = T[G].value;
      if (g == "(") {
        F = G + 1;
        continue;
      }
      if (0 < F && g == ")") {
        C = parseInt(T[F].value);
        break;
      }
    }
    return C < s.length && (s = s.substring(0, C)), "'" + s + "'";
  }
  if (L == "JOB") {
    var _ = ["Engineer", "Consultant", "Architect", "Manager", "Analyst", "Specialist", "Evangelist", "Salesman"];
    let s = 0, T = _.length;
    return "'" + _[Math.floor($() * (T - s)) + s] + "'";
  }
  if (A.startsWith("INTEGER") || A.startsWith("NUMBER")) {
    let s = 0;
    return Math.floor($() * (100 - s)) + s;
  }
  if (A.startsWith("DATE") || A.startsWith("TIMESTAMP")) {
    let s = 0;
    var r = Math.floor($() * (100 - s)) + s;
    return "sysdate-" + r;
  }
  return A == "BLOB" || A == "LONG" ? "null" : "'N/A'";
}
var ce = 1;
function ke() {
  ce = 1;
}
function $() {
  var y = Math.sin(ce++) * 1e4;
  return y - Math.floor(y);
}
const Ie = {
  ACCESS: "N",
  ADD: "N",
  ALL: "Y",
  ALTER: "Y",
  AND: "Y",
  ANY: "Y",
  AS: "Y",
  ASC: "Y",
  AUDIT: "N",
  BETWEEN: "Y",
  BY: "Y",
  CHAR: "Y",
  CHECK: "Y",
  CLUSTER: "Y",
  COLUMN: "N",
  COMMENT: "N",
  COMPRESS: "Y",
  CONNECT: "Y",
  CREATE: "Y",
  CURRENT: "N",
  DATE: "Y",
  DECIMAL: "Y",
  DEFAULT: "Y",
  DELETE: "Y",
  DESC: "Y",
  DISTINCT: "Y",
  DROP: "Y",
  ELSE: "Y",
  EXCEPT: "Y",
  EXCLUSIVE: "Y",
  EXISTS: "Y",
  FILE: "N",
  FLOAT: "Y",
  FOR: "Y",
  FROM: "Y",
  GRANT: "Y",
  GROUP: "Y",
  HAVING: "Y",
  IDENTIFIED: "Y",
  IMMEDIATE: "N",
  IN: "Y",
  INCREMENT: "N",
  INDEX: "Y",
  INITIAL: "N",
  INSERT: "Y",
  INTEGER: "Y",
  INTERSECT: "Y",
  INTO: "Y",
  IS: "Y",
  LEVEL: "N",
  LIKE: "Y",
  LOCK: "Y",
  LONG: "Y",
  MAXEXTENTS: "N",
  MINUS: "Y",
  MLSLABEL: "N",
  MODE: "Y",
  MODIFY: "N",
  NOAUDIT: "N",
  NOCOMPRESS: "Y",
  NOT: "Y",
  NOWAIT: "Y",
  NULL: "Y",
  NUMBER: "Y",
  OF: "Y",
  OFFLINE: "N",
  ON: "Y",
  ONLINE: "N",
  OPTION: "Y",
  OR: "Y",
  ORDER: "Y",
  PCTFREE: "Y",
  PRIOR: "Y",
  PUBLIC: "Y",
  RAW: "Y",
  RENAME: "Y",
  RESOURCE: "Y",
  REVOKE: "Y",
  ROW: "N",
  ROWID: "N",
  ROWNUM: "N",
  ROWS: "N",
  SELECT: "Y",
  SESSION: "N",
  SET: "Y",
  SHARE: "Y",
  SIZE: "Y",
  SMALLINT: "Y",
  START: "Y",
  SUCCESSFUL: "N",
  SYNONYM: "Y",
  SYSDATE: "N",
  TABLE: "Y",
  THEN: "Y",
  TO: "Y",
  TRIGGER: "Y",
  UID: "N",
  UNION: "Y",
  UNIQUE: "Y",
  UPDATE: "Y",
  USER: "N",
  VALIDATE: "N",
  VALUES: "Y",
  VARCHAR: "Y",
  VARCHAR2: "Y",
  VIEW: "Y",
  WHENEVER: "N",
  WHERE: "Y",
  WITH: "Y"
};
function le(y) {
  let l = y.toUpperCase();
  return Ie[l] != null ? "the_" + y : y;
}
const Be = "timestamp with local time zone", Pe = "timestamp with time zone", Ee = "timestamp", Ne = "generated by default on null as identity", we = " not null";
let se;
const ee = {
  pk: "_pk",
  // primary key constraint suffix
  fk: "_fk",
  // foreign key constraint suffix
  unq: "_unq",
  // unique constraint suffix
  uk: "_uk",
  // table-level unique constraint suffix
  ck: "_ck",
  // check constraint suffix
  bet: "_bet",
  // between constraint suffix
  bi: "_bi",
  // before-insert trigger suffix
  bu: "_bu",
  // before-update trigger suffix
  seq: "_seq",
  // sequence suffix
  idx: "_i",
  // index name prefix (followed by counter)
  immutable_prefix: "trg_",
  // immutable trigger name prefix
  immutable_suffix: "_insertonly"
  // immutable trigger name suffix
};
let he = (function() {
  let y, l = "    ";
  const N = ["string", "varchar2", "varchar", "vc", "char"], P = ["yn", "boolean", "bool"], R = ["vect", "vector"], A = ["geometry", "sdo_geometry"];
  let D = [
    "integer",
    "number",
    "num",
    "int",
    "blob",
    "clob",
    "json",
    "file",
    "date",
    "d",
    "tstz",
    "tswtz",
    "tswltz",
    "ts"
  ];
  D = D.concat(N), D = D.concat(P), D = D.concat(R), D = D.concat(A);
  const L = {
    file: [
      { suffix: "_filename", type: (g) => "varchar2(255" + g.semantics() + ")" },
      { suffix: "_mimetype", type: (g) => "varchar2(255" + g.semantics() + ")" },
      { suffix: "_charset", type: (g) => "varchar2(255" + g.semantics() + ")" },
      { suffix: "_lastupd", type: (g) => g.getOptionValue("Date Data Type").toLowerCase() }
    ]
  };
  function w(g) {
    return g.lastIndexOf(`,
`) === g.length - 2 && (g = g.substring(0, g.length - 2) + `
`), g;
  }
  function _(g, i) {
    return i === void 0 && (i = ee), y.optionEQvalue("pk", "identityDataType") ? Ne : y.optionEQvalue("pk", "seq") ? ("default on null " + g + i.seq + ".NEXTVAL ").toLowerCase() : y.optionEQvalue("pk", "guid") ? "default on null to_number(sys_guid(), 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') " : "not null";
  }
  function r(g, i, c) {
    return g[i].value.endsWith("k") ? c < 32 ? c * 1024 : c * 1024 - 1 : c;
  }
  function s(g, i, c, p, u, b) {
    return !!(g.endsWith("_id") && c < 0 && p < 0 || i[1] && i[1].value == "id" || g == "quantity" || g.endsWith("_number") || g.endsWith("id") && c < 0 && u + 1 == b);
  }
  function T(g, i, c) {
    return !!(0 <= c || g == "hiredate" || g.endsWith("_date") || g.startsWith("date_of_") || g.startsWith("created") || g.startsWith("updated") || 1 < i.length && i[1].value == "d");
  }
  function C(g, i, c) {
    this.line = g, this.parent = c, this.children = [], c?.children.push(this), this.fks = null, this.findChild = function(t) {
      for (var o = 0; o < this.children.length; o++)
        if (this.children[o].parseName() == t)
          return this.children[o];
      return null;
    }, this.descendants = function() {
      for (var t = [this], o = 0; o < this.children.length; o++)
        t.push(...this.children[o].descendants());
      return t;
    }, this._maxChildNameLen = -1, this.maxChildNameLen = function() {
      if (this._maxChildNameLen >= 0) return this._maxChildNameLen;
      var t = 2;
      if (this.hasRowKey() && (t = 7), this.hasRowVersion() && (t = 11), this.hasAuditCols()) {
        let e = y.getOptionValue("createdcol").length;
        t < e && (t = e), e = y.getOptionValue("createdbycol").length, t < e && (t = e), e = y.getOptionValue("updatedcol").length, t < e && (t = e), e = y.getOptionValue("updatedbycol").length, t < e && (t = e);
      }
      if (this.fks != null)
        for (var o in this.fks) {
          var d = o.length;
          let e = y.find(o);
          e != null && e.isMany2One() && (d += 3), t < d && (t = d);
        }
      for (var h = 0; h < this.children.length; h++) {
        let e = this.children[h];
        if (0 < e.children.length)
          continue;
        let a = e.parseName().length;
        for (const n in L)
          if (0 < e.indexOf(n)) {
            let f = 0;
            for (const m of L[n])
              m.suffix.length > f && (f = m.suffix.length);
            a += f;
            break;
          }
        t < a && (t = a);
      }
      var x = y.additionalColumns();
      for (let e in x) {
        let a = e.length;
        t < a && (t = a);
      }
      return this._maxChildNameLen = t, t;
    };
    function p(t) {
      let o = t;
      return o = o.replace(/ timestamp with local time zone/gi, " tswltz"), o = o.replace(/ timestamp with time zone/gi, " tswtz"), o = o.replace(/ timestamp/gi, " ts"), o;
    }
    this.content = p(i), this.comment, this.annotations = null;
    var u = this.content.indexOf("{");
    if (u > 0 && (this.content.charAt(u - 1) == " " || this.content.charAt(u - 1) == "	")) {
      var b = this.content.indexOf("}", u);
      b > u && (this.annotations = this.content.substring(u + 1, b).trim(), this.content = this.content.substring(0, u) + this.content.substring(b + 1));
    }
    this.getAnnotationValue = function(t) {
      if (this.annotations == null) return null;
      var o = new RegExp(t + `:?\\s+['"]([^'"]*)['"]`, "i"), d = this.annotations.match(o);
      return d ? d[1] : null;
    }, this.getAnnotationPairs = function() {
      if (this.annotations == null) return [];
      for (var t = [], o = /(\w+)(?:\s+['"]([^'"]*)['"'])?/g, d; (d = o.exec(this.annotations)) !== null; )
        t.push({ label: d[1], value: d[2] !== void 0 ? d[2] : null });
      return t;
    }, this.hasAuditCols = function() {
      return y.optionEQvalue("Audit Columns", "yes") || this.isOption("auditcols") || this.isOption("audit", "col") || this.isOption("audit", "cols") || this.isOption("audit", "columns");
    }, this.hasRowVersion = function() {
      return y.optionEQvalue("Row Version Number", "yes") || this.isOption("rowversion");
    }, this.hasRowKey = function() {
      return y.optionEQvalue("rowkey", !0) || this.isOption("rowkey");
    }, this.regularColumns = function() {
      return this.children.filter(function(t) {
        return t.children.length === 0 && t.refId() === null;
      });
    }, this.apexUser = function() {
      return y.optionEQvalue("apex", "yes") ? "coalesce(sys_context('APEX$SESSION','APP_USER'),user)" : "user";
    }, this.auditSysDateFn = function() {
      return (y.getOptionValue("auditdate") || y.getOptionValue("Date Data Type")).toLowerCase().indexOf("timestamp") >= 0 ? "systimestamp" : "sysdate";
    }, this.indexOf = function(t, o) {
      const d = t.toLowerCase();
      for (let h = 0; h < this.src.length; h++) {
        const x = this.src[h].lowerValue;
        if (o && x.indexOf(d) == 0)
          return h;
        if (d == x)
          return h;
      }
      return -1;
    }, this._slashPos = void 0, this.occursBeforeOption = function(t, o) {
      const d = this.indexOf(t, o);
      return d <= 0 ? !1 : (this._slashPos === void 0 && (this._slashPos = this.indexOf("/")), this._slashPos < 0 || d < this._slashPos);
    }, this.isOption = function(t, o) {
      for (let d = 2; d < this.src.length; d++)
        if (t == this.src[d].lowerValue && (o == null || d < this.src.length - 1 && o == this.src[d + 1].lowerValue))
          return this.src[d - 1].value == "/";
      return !1;
    }, this.getOptionValue = function(t) {
      if (this.src.length < 3)
        return null;
      const o = this.indexOf(t);
      if (o < 2 || this.src[o - 1].value != "/")
        return null;
      let d = "";
      for (let h = o + 1; h < this.src.length && this.src[h].value != "/" && this.src[h].value != "["; h++)
        d += this.src[h].value;
      return d;
    }, this.sugarcoatName = function(t, o) {
      let d = "";
      this.children.length == 0 && this.parent != null && this.parent.colprefix != null && (d = this.parent.colprefix + "_");
      let h = "", x = "_";
      for (let n = t; n < o; n++) {
        const f = this.src[n].value, m = '"' + f + '"';
        if (this.src[n].type != "constant.numeric" && f != Z(m)) {
          h = this.content.substring(this.src[t].begin, this.src[o - 1].end);
          const S = y != null && 0 < (y.getOptionValue("prefix") || "").length;
          return this.parsedName = d + (S ? Z(h) : le(Z(h))), this.parsedName;
        }
      }
      for (let n = t; n < o; n++)
        t < n && (h += x), h += this.src[n].value;
      var e = h.charAt(0);
      e >= "0" && e <= "9" && (h = "x" + h);
      const a = y != null && 0 < (y.getOptionValue("prefix") || "").length;
      return this.parsedName = d + (a ? Z(h) : le(Z(h))), this.parsedName;
    }, this.src = X(this.content, !1, !0, "`");
    for (let t = 0; t < this.src.length; t++)
      this.src[t].lowerValue = this.src[t].value.toLowerCase();
    const B = this.getOptionValue("colprefix");
    B != null && (this.colprefix = B), this.parsedName = null, this.parseName = function() {
      if (this.parsedName != null)
        return this.parsedName;
      let t = 0, o = this.src[0].value;
      (o == ">" || o == "<") && (o = this.src[1].value, t = 1);
      const d = o.indexOf('"'), h = o.indexOf('"', d + 1);
      if (0 <= d && d < h)
        return o.substring(d, h + 1);
      if (this.src[0].value == "view")
        return this.src[1].value;
      if (1 < this.src.length && this.src[1].value == "=")
        return this.src[0].value;
      let x = this.src.length, e = this.indexOf("/");
      0 < e && (x = e), e = this.indexOf("["), 0 < e && (x = e), e = this.indexOf("="), 0 < e && (x = e);
      for (let a = 0; a < D.length; a++) {
        let n = this.indexOf(D[a]);
        if (n < 0 && (n = this.indexOf(D[a], !0)), 0 < n && n < x)
          return x = n, this.sugarcoatName(t, x);
      }
      for (let a = t; a < x; a++) {
        const n = this.src[a].lowerValue;
        if (n.charAt(0) == "v" && n.charAt(1) == "c") {
          if (n.charAt(2) == "(")
            return this.sugarcoatName(t, a);
          if (0 <= n.charAt(2) && n.charAt(2) <= "9")
            return this.sugarcoatName(t, a);
        }
      }
      return this.sugarcoatName(t, x);
    }, this._inferTypeFull = function() {
      const t = this.src, o = t[0].value;
      var d = o.endsWith("_name") || o.startsWith("name") || o.startsWith("email") ? y.getOptionValue("namelen") : 4e3;
      const h = this.indexOf("vc", !0);
      if (0 < h) {
        let k = t[h].value.substring(2);
        k == "" && this.indexOf("(") == h + 1 && (k = t[h + 2].value), d = r(t, h, k != "" ? parseInt(k) : d);
      }
      var x = "varchar2(" + d + y.semantics() + ")";
      const e = this.indexOf("date");
      this._slashPos === void 0 && (this._slashPos = this.indexOf("/"));
      const a = this._slashPos;
      s(o, t, h, e, a, this.indexOf("pk")) && (x = "number"), this.occursBeforeOption("int", !0) && (x = "integer"), 0 < h && (x = "varchar2(" + d + y.semantics() + ")");
      const n = this.vectorType("vector") || this.vectorType("vect");
      n != null && (x = n);
      const f = K(c.parseName(), "_", this.parseName());
      let m = "";
      const S = o.endsWith("_yn") || o.startsWith("is_"), E = P.some((k) => 0 < this.indexOf(k));
      (S || E) && (x = "varchar2(1" + y.semantics() + ")", m = `
` + l + l + " ".repeat(c.maxChildNameLen()) + "constraint " + K(y.objPrefix(), f) + " check (" + this.parseName() + " in ('Y','N'))");
      const v = y.getOptionValue("db");
      m != "" && (y.getOptionValue("boolean") == "native" || y.getOptionValue("boolean") != "yn" && 0 < v.length && 23 <= q(v)) && (m = "", x = "boolean");
      const M = x === "boolean";
      this.indexOf("phone_number") == 0 && (x = "number");
      const I = this.indexOf("num", !0);
      if (0 < I) {
        x = "number";
        const k = this.indexOf(")");
        0 < k && (x += this.content.substring(t[I + 1].begin, t[k].end).toLowerCase());
      }
      T(o, t, e) && (x = y.getOptionValue("Date Data Type").toLowerCase()), h < 0 && (this.occursBeforeOption("clob") && (x = "clob"), (this.occursBeforeOption("blob") || this.occursBeforeOption("file")) && (x = "blob"), this.occursBeforeOption("json") && (x = v != null && 0 < v.length && 23 <= q(v) ? "json" : "clob check (" + this.parseName() + " is json)"));
      for (let k in A) if (this.occursBeforeOption(A[k])) {
        x = "sdo_geometry";
        break;
      }
      return this.isOption("domain") && v != null && 0 < v.length && 23 <= q(v) && (x = this.getOptionValue("domain")), this.occursBeforeOption("tswltz") && a !== 0 ? x = Be : this.occursBeforeOption("tswtz") || this.occursBeforeOption("tstz") ? x = Pe : this.occursBeforeOption("ts") && (x = Ee), { type: x, booleanCheck: m, isNativeBoolean: M, parent_child: f };
    }, this.inferType = function() {
      if (this.children != null && 0 < this.children.length)
        return "table";
      const t = this.src;
      if (t[0].value == "view" || 1 < t.length && t[1].value == "=")
        return "view";
      if (t[0].value == "dv")
        return "dv";
      if (this.parent == null)
        return "table";
      const { type: o } = this._inferTypeFull();
      if (this.isOption("fk") || 0 < this.indexOf("reference", !0)) {
        const d = this.refId();
        let h = "number";
        o == "integer" && (h = o);
        let x = y.find(d);
        return x != null && x.getExplicitPkName() != null && (h = x.getPkType()), h;
      }
      return o;
    }, this.getPlsqlType = function() {
      let t = this.inferType();
      return t.startsWith("varchar2") ? "varchar2" : t;
    }, this.vectorType = function(t) {
      const o = this.indexOf(t, !0), d = this.src;
      if (0 < o) {
        d[o].begin, d[o].end;
        let h = d[o].value.substring(t.length);
        h == "" && this.indexOf("(") == h + 1 && (h = d[h + 2].value);
        let x = "*";
        if (h != "") {
          let e = 1;
          h.endsWith("k") && (e = 1024), h = h.substring(0, h.length - 1), x = parseInt(h) * e;
        }
        return "vector(" + x + ",*,*)";
      }
      return null;
    }, this.genConstraint = function(t) {
      let o = "";
      if (this.isOption("check")) {
        let d = "";
        c != null && (d = K(c.parseName(), "_"));
        const h = K(d, this.parseName());
        let x = l;
        c != null && (x = " ".repeat(c.maxChildNameLen()));
        let e = this.getGeneralConstraint();
        if (e != null)
          return this.children != null && 0 < this.children.length ? (o += l + "constraint " + K(y.objPrefix(), h, ee.ck), o += "  check " + e + `,
`) : (o += " constraint " + K(y.objPrefix(), h, ee.ck) + `
`, o += l + l + x + "check " + e), o;
        const a = this.getValues("check");
        o += " constraint " + K(y.objPrefix(), h, ee.ck) + `
`, o += l + l + x + "check (" + this.parseName() + " in (" + a + "))";
      }
      return o;
    }, this.isMany2One = function() {
      return this.src[0].value == ">";
    }, this.getExplicitPkName = function() {
      if (this.isOption("pk"))
        return this.inferType() == "table" ? this.getOptionValue("pk") : this.parseName();
      for (var t = 0; t < this.children.length; t++) {
        var o = this.children[t];
        if (o.isOption("pk"))
          return o.parseName();
      }
      return null;
    }, this.trimmedContent = function() {
      var t = this.content.trim(), o = t.indexOf("["), d = t.indexOf("]");
      return this.comment == null && 0 < o && (this.comment = t.substr(o + 1, d - o - 1)), 0 < o && (t = t.substr(0, o) + t.substr(d + 2)), o = t.indexOf("--"), this.comment == null && 0 < o && (this.comment = t.substr(o + 2)), 0 < o && (t = t.substr(0, o)), t.trim();
    }, this.refId = function() {
      var t = this.trimmedContent();
      t = t.replace(/\/cascade/g, "");
      var o = t.indexOf(" id ");
      if (o < 0 && o == t.length - 3 && (o = t.indexOf(" id")), o < 0 && (o = t.indexOf(" id"), o != t.length - 3 && (o = -1)), o < 0 && (o = t.indexOf("_id "), o != t.length - 4 && (o = -1)), o < 0 && (o = t.indexOf("_id"), o != t.length - 3 && (o = -1)), o < 0 && (o = t.indexOf("Id "), o != t.length - 3 && (o = -1)), 0 < o) {
        let d = t.substr(0, o) + "s";
        if (y.find(d) != null || (d = t.substr(0, o), y.find(d) != null))
          return d;
      }
      return o = t.indexOf("/fk"), 0 < o ? (t = t.substr(o + 3).trim(), o = t.indexOf("/"), 0 < o && (t = t.substring(0, o).trim()), o = t.indexOf("["), 0 < o && (t = t.substring(0, o).trim()), t.replace(" ", "_")) : (o = t.indexOf("/reference"), 0 < o ? (t = t.substr(o + 10).trim(), t.indexOf("s") == 0 && (t = t.substring(1).trim()), o = t.indexOf("/"), 0 < o && (t = t.substring(0, o).trim()), o = t.indexOf("["), 0 < o && (t = t.substring(0, o).trim()), t.replace(" ", "_")) : null);
    }, this.getGeneralConstraint = function() {
      let t = this.indexOf("check");
      if (0 < t && this.src[t - 1].value == "/" && (this.src[t + 1].value == "(" || this.src[t + 1].lowerValue == "not")) {
        let o = t + 2;
        for (; o < this.src.length && this.src[o].value != "/" && this.src[o].value != "["; )
          o++;
        let d = this.content.substring(this.src[t + 1].begin, this.src[o - 1].end);
        return d.charAt(0) != "(" && (d = "(" + d + ")"), d;
      }
      return null;
    }, this.listValues = function(t) {
      let o = [], d = this.indexOf(t), h = " ";
      for (let a = d + 1; a < this.src.length && this.src[a].value != "/" && this.src[a].value != "["; a++)
        if (this.src[a].value == ",") {
          h = ",";
          break;
        } else if (this.src[a].lowerValue == "and") {
          h = this.src[a].value;
          break;
        }
      if (h == " ") {
        for (let a = d + 1; a < this.src.length && this.src[a].value != "/" && this.src[a].value != "["; a++) {
          let n = this.src[a].value;
          this.src[a].type == "identifier" && n != "null" && (n = "'" + n + "'"), n.charAt(0) == "`" && (n = n.substring(1, n.length - 1)), o.push(n);
        }
        return o;
      }
      let x = null, e = null;
      for (let a = d + 1; a < this.src.length && this.src[a].value != "/" && this.src[a].value != "["; a++) {
        let n = this.src[a].value, f = this.content.substring(this.src[a - 1].end, this.src[a].begin);
        if (n == h) {
          e == "identifier" && x != "null" && (x = "'" + x + "'"), o.push(x), x = null, e = null;
          continue;
        }
        n != "(" && n != ")" && (n.charAt(0) == "`" ? n = n.substring(1, n.length - 1) : this.src[a].type == "identifier" && (e = "identifier"), x == null ? x = n : x += f + n);
      }
      return e == "identifier" && (x = "'" + x + "'"), o.push(x), o;
    }, this.getValues = function(t) {
      let o = "";
      const d = this.listValues(t);
      for (let h = 0; h < d.length; h++)
        0 < h && (o += ","), o += d[h];
      return o;
    }, this.parseValues = function() {
      var t;
      if (this.isOption("check"))
        return this.listValues("check");
      if (this.isOption("values"))
        return this.listValues("values");
      if (this.isOption("between")) {
        for (var t = this.listValues("between"), o = [], d = parseInt(t[0]); d <= parseInt(t[1]); d++)
          o.push(d);
        return o;
      }
      return null;
    }, this.apparentDepth = function() {
      let t = this.content.split(/ |\t/), o = 0;
      for (var d = 0; d < t.length; d++) {
        var h = t[d];
        if (h == "	") {
          o += this.tab;
          continue;
        }
        if (h == "") {
          o++;
          continue;
        }
        return o;
      }
      throw "No alphanumerics in the node content";
    }, this.depth = function() {
      return this.parent == null ? 0 : this.parent.depth() + 1;
    }, this.isLeaf = function() {
      return this.children.every((t) => t.children.length == 0);
    }, this.getGenIdColName = function() {
      if (this.inferType() != "table" || this.getExplicitPkName() != null)
        return null;
      if (y.optionEQvalue("Auto Primary Key", "yes")) {
        let t = "";
        return this.colprefix != null && (t = this.colprefix + "_"), y.optionEQvalue("prefixPKwithTname", "yes") && (t = H(this.parseName()) + "_"), t + "id";
      }
      return null;
    }, this.getPkName = function() {
      let t = this.getGenIdColName();
      return t ?? this.getExplicitPkName();
    }, this.getPkType = function() {
      if (this.getGenIdColName() == null) {
        const o = this.getExplicitPkName();
        return this.findChild(o).inferType();
      }
      return "integer";
    }, this.lateInitFks = function() {
      if (this.fks == null && (this.fks = []), !this.isMany2One()) {
        this.parent != null && this.inferType() == "table" && (this.parent.getPkName().indexOf(",") < 0 ? this.fks[H(this.parent.parseName()) + "_id"] = this.parent.parseName() : this.fks[H(this.parent.getPkName())] = this.parent.parseName());
        for (let t = 0; t < this.children.length; t++)
          this.children[t].refId() != null && (this.fks[this.children[t].parseName()] = this.children[t].refId());
      }
    }, this.cardinality = function() {
      if (0 < this.isOption("insert")) {
        const o = this.indexOf("insert");
        let d = parseInt(this.src[o + 1].value);
        const h = y.getOptionValue("datalimit");
        return h < d && (d = h), d;
      }
      return 0;
    }, this.isArray = function() {
      return !this.isMany2One() && this.parent != null;
    }, this.hasNonArrayChildId = function(t) {
      if (!t.endsWith("_id"))
        return !1;
      var o = t.slice(0, -3);
      return this.children.some((d) => d.children.length > 0 && d.parseName() == o && !d.isArray());
    }, this.getTransColumns = function() {
      let t = [];
      for (let o = 0; o < this.children.length; o++) {
        let d = this.children[o];
        (d.isOption("trans") || d.isOption("translation") || d.isOption("translations")) && t.push(d);
      }
      return t;
    }, this.getBaseType = function() {
      let t = this.inferType(), o = t.indexOf(" not null");
      return o > 0 && (t = t.substring(0, o)), o = t.indexOf(`
`), o > 0 && (t = t.substring(0, o)), t;
    };
  }
  function F(g) {
    y = g;
    const i = g.input;
    let c = [], p = [];
    const u = X(i + `
`, !0, !0, "`");
    y.data = null;
    let b = null, B = "";
    e: for (let t = 0; t < u.length; t++) {
      const o = u[t];
      if (o.value == `
` && b == null) {
        if (B = B.replace(/\r/g, ""), B.replace(/\r/g, "").replace(/ /g, "") == "") {
          B = "";
          continue;
        }
        let h = new C(o.line - 1, B, null), x = !1;
        for (let e = 0; e < c.length; e++) {
          let a = c[e];
          if (h.apparentDepth() <= a.apparentDepth())
            if (0 < e) {
              let n = c[e - 1];
              h = new C(o.line - 1, B, n), c[e] = h, c = c.slice(0, e + 1), x = !0;
              break;
            } else
              c[0] = h, c = c.slice(0, 1), p.push(h), x = !0;
        }
        if (!x) {
          if (0 < c.length) {
            let e = c[c.length - 1];
            h = new C(o.line - 1, B, e);
          }
          c.push(h), h.apparentDepth() == 0 && p.push(h);
        }
        if (h.isMany2One()) {
          const e = h.parent;
          e.fks == null && (e.fks = []);
          let a = h.refId();
          a == null && (a = h.parseName()), e.fks[h.parseName() + "_id"] = a;
        }
        B = "";
        continue;
      }
      if (b == null && o.value == "#") {
        b = "";
        continue;
      }
      if (b != null) {
        if (b += o.value, o.value != `
` && o.value != "}")
          continue;
        const d = X(b, !1, !0, "");
        if (d.length % 4 == 3 && d[1].value == ":") {
          g.setOptions(b), b = null, B = "";
          continue;
        }
        let h = null, x = null;
        for (let e in d) {
          const a = d[e];
          if (h == null && a.value == "flattened") {
            h = "";
            continue;
          }
          if (h != null) {
            if (h += a.value, h == "=" || h.charAt(h.length - 1) != "}")
              continue;
            let n = h.substring(1);
            try {
              y.data = JSON.parse(n), b = null, B = "";
              continue e;
            } catch {
            }
          }
          if (x == null && a.value == "settings") {
            x = "";
            continue;
          }
          if (x != null) {
            x += a.value, x.substring(1);
            try {
              g.setOptions(x), b = null, B = "";
              continue e;
            } catch {
            }
          }
        }
      }
      if (o.type != "comment") {
        if (o.type == "line-comment") {
          0 < B.trim().length && (B += o.value);
          continue;
        }
        B += o.value;
      }
    }
    return p;
  }
  function G(g, i, c, p) {
    let u = [];
    if (g == null || typeof g != "object")
      return null;
    let b = g[c];
    b != null && i == p && u.push(b);
    for (var B in g) {
      let t = g[B];
      b = G(t, B, c, p), b != null && (u = u.concat(b));
    }
    return u;
  }
  return se = class {
    constructor(i, c) {
      this._ddl = i, this._naming = c || ee;
    }
    _buildColumnConstraints(i, c, p, u, b) {
      const B = i.src;
      (i.isOption("unique") || i.isOption("uk")) && (c += `
`, c += l + l + " ".repeat(i.parent.maxChildNameLen()) + "constraint " + K(this._ddl.objPrefix(), b, this._naming.unq) + " unique");
      var t = "'";
      if ((c.startsWith("integer") || c.startsWith("number") || c.startsWith("date")) && (t = ""), i.isOption("default")) {
        let o = "";
        for (let h = i.indexOf("default") + 1; h < B.length; h++) {
          const x = B[h].getValue();
          if (x == "/" || x == "-" || x == "[")
            break;
          o += B[h].getValue();
        }
        const d = ["sysdate", "current_date", "current_timestamp", "systimestamp", "localtimestamp"];
        if (u) {
          let h = o.toUpperCase() === "Y" || o.toLowerCase() === "true" ? "true" : "false";
          c += " default on null " + h;
        } else d.includes(o.toLowerCase()) ? c += " default on null " + o : c += " default on null " + t + o + t;
      }
      if ((i.isOption("nn") || i.indexOf("not") + 1 == i.indexOf("null")) && i.indexOf("pk") < 0 && (c += " not null"), (i.isOption("hidden") || i.isOption("invincible")) && (c += " invisible"), u || (c += i.genConstraint(t)), c += p, i.isOption("between")) {
        const o = i.indexOf("between"), d = B[o + 1].getValue() + " and " + B[o + 3].getValue();
        c += " constraint " + K(b, this._naming.bet) + `
`, c += "           check (" + i.parseName() + " between " + d + ")";
      }
      if (i.isOption("pk")) {
        let o = c.startsWith("number") ? " " + _(this._ddl.objPrefix() + i.parent.parseName(), this._naming) : " not null";
        c += o + `
`, c += l + l + " ".repeat(i.parent.maxChildNameLen()) + "constraint " + K(this._ddl.objPrefix(), b, this._naming.pk) + " primary key";
      }
      return i.annotations != null && (0 <= c.indexOf(`
`) ? c += `
` + l + l + " ".repeat(i.parent.maxChildNameLen()) + "annotations (" + i.annotations + ")" : c += " annotations (" + i.annotations + ")"), c;
    }
    _genSequence(i, c) {
      return this._ddl.optionEQvalue("pk", "SEQ") && this._ddl.optionEQvalue("genpk", !0) ? "create sequence  " + c + `_seq;

` : "";
    }
    _genTableHeader(i, c, p, u) {
      let b = "create " + p + "table " + c + ` (
`;
      var B = l + " ".repeat(i.maxChildNameLen() - 2);
      if (u != null && !i.isOption("pk")) {
        b += l + u + B + "number " + _(c, this._naming) + `
`;
        const t = K(this._ddl.objPrefix("no schema") + i.parseName(), "_", u);
        b += l + l + " ".repeat(i.maxChildNameLen()) + "constraint " + K(t, this._naming.pk) + ` primary key,
`;
      } else {
        let t = i.getExplicitPkName();
        if (t != null && t.indexOf(",") < 0) {
          let o = l + " ".repeat(i.maxChildNameLen() - t.length), d = "number";
          const h = i.findChild(t);
          h != null && (d = this.parseType(h)), b += l + t + o + d + `,
`;
        }
      }
      return b;
    }
    _genFkColumns(i, c) {
      let p = "";
      for (let t in i.fks) {
        let o = i.fks[t];
        if (0 < t.indexOf(",")) {
          let f = this._ddl.find(o);
          for (var u = re(t, ", "), b = 0; b < u.length; b++) {
            var B = u[b];
            if (B == ",")
              continue;
            const m = f.findChild(B);
            let S = l + " ".repeat(i.maxChildNameLen() - B.length);
            p += l + B + S + m.inferType() + `,
`;
          }
          continue;
        }
        let d = "number";
        const h = i.findChild(t);
        h != null && (d = h.inferType());
        let x = this._ddl.find(o), e = "";
        if (x != null) {
          const f = x.getExplicitPkName();
          f != null && f.indexOf(",") < 0 && (d = x.getPkType());
        } else
          x = this._ddl.find(t), x.isMany2One() & !t.endsWith("_id") && (o = t, t = H(t), e = "_id");
        let a = l + " ".repeat(i.maxChildNameLen() - t.length);
        p += l + t + e + a + d;
        const n = this._ddl.find(o) != null ? this._ddl.objPrefix() : "";
        if (x.line < i.line || x.isMany2One()) {
          p += l + l + " ".repeat(i.maxChildNameLen()) + "constraint " + c + "_" + t + this._naming.fk + `
`;
          let f = "";
          i.isOption("cascade") ? f = " on delete cascade" : i.isOption("setnull") && (f = " on delete set null");
          let m = "";
          for (let S in i.children) {
            let E = i.children[S];
            if (t == E.parseName()) {
              (E.isOption("nn") || E.isOption("notnull")) && (m = we), E.isOption("cascade") ? f = " on delete cascade" : i.isOption("setnull") && (f = " on delete set null");
              break;
            }
          }
          p += l + l + " ".repeat(i.maxChildNameLen()) + "references " + n + o + f + m + `,
`;
        } else {
          p += `,
`;
          const f = "alter table " + c + " add constraint " + c + "_" + t + "_fk foreign key (" + t + ") references " + n + o + `;
`;
          this._ddl.postponedAltersSet.has(f) || (this._ddl.postponedAlters.push(f), this._ddl.postponedAltersSet.add(f));
        }
      }
      return p;
    }
    _genRowKeyColumn(i, c) {
      if (!i.hasRowKey()) return "";
      let p = l + " ".repeat(i.maxChildNameLen() - 7), u = l + "row_key" + p + "varchar2(30" + this._ddl.semantics() + `)
`;
      return u += l + l + " ".repeat(i.maxChildNameLen()) + "constraint " + c + "_row_key" + this._naming.unq + ` unique not null,
`, u;
    }
    _genRegularColumns(i, c, p) {
      let u = "";
      for (let b = 0; b < i.children.length; b++) {
        let B = i.children[b];
        if (!(p != null && B.parseName() == "id") && !(0 < B.children.length) && B.refId() == null) {
          if (B.parseName() == i.getExplicitPkName())
            continue;
          u += l + this.generateTable(B) + `,
`;
          for (const t in L)
            if (0 < B.indexOf(t)) {
              const o = B.parseName().toUpperCase();
              for (const d of L[t]) {
                const h = o + d.suffix.toUpperCase(), x = l + " ".repeat(i.maxChildNameLen() - h.length);
                u += l + h.toLowerCase() + x + d.type(y) + `,
`;
              }
              break;
            }
        }
      }
      return u;
    }
    _genRowVersionColumn(i) {
      if (!i.hasRowVersion()) return "";
      let c = l + " ".repeat(i.maxChildNameLen() - 11);
      return l + "row_version" + c + `integer not null,
`;
    }
    _genAuditColumns(i) {
      if (!i.hasAuditCols()) return "";
      let c = this._ddl.getOptionValue("auditdate");
      (c == null || c == "") && (c = this._ddl.getOptionValue("Date Data Type")), c = c.toLowerCase();
      let p = "", u = this._ddl.getOptionValue("createdcol"), b = l + " ".repeat(i.maxChildNameLen() - u.length);
      p += l + u + b + c + ` not null,
`;
      let B = this._ddl.getOptionValue("createdbycol");
      b = l + " ".repeat(i.maxChildNameLen() - B.length), p += l + B + b + "varchar2(255" + this._ddl.semantics() + `) not null,
`;
      let t = this._ddl.getOptionValue("updatedcol");
      b = l + " ".repeat(i.maxChildNameLen() - t.length), p += l + t + b + c + ` not null,
`;
      let o = this._ddl.getOptionValue("updatedbycol");
      return b = l + " ".repeat(i.maxChildNameLen() - o.length), p += l + o + b + "varchar2(255" + this._ddl.semantics() + `) not null,
`, p;
    }
    _genAdditionalColumns(i) {
      let c = "";
      var p = this._ddl.additionalColumns();
      for (let b in p) {
        var u = p[b];
        let B = l + " ".repeat(i.maxChildNameLen() - b.length);
        c += l + b.toUpperCase() + B + u + ` not null,
`;
      }
      return c;
    }
    _genTableFooter(i, c, p, u) {
      let b = i.annotations != null ? `
annotations (` + i.annotations + ")" : "", B = "";
      (this._ddl.optionEQvalue("compress", "yes") || i.isOption("compress")) && (B = u ? " row store compress advanced" : " compress");
      let t = p != "" ? `
no drop until 0 days idle
no delete until 16 days after insert` : "";
      t != "" && B != "" && (B = `
` + B.trimStart());
      let o = ")" + t + B + b + `;

`;
      if (i.isOption("audit") && !i.isOption("auditcols") && !i.isOption("audit", "col") && !i.isOption("audit", "cols") && !i.isOption("audit", "columns") && (o += "audit all on " + c + `;

`), i.isOption("flashback") || i.isOption("fda")) {
        let d = i.getOptionValue("flashback") || i.getOptionValue("fda") || "";
        d = d.trim(), o += "alter table " + c + " flashback archive" + (0 < d.length ? " " + d : "") + `;

`;
      }
      return o;
    }
    _genMultiColFkAlters(i, c) {
      let p = "";
      for (let b in i.fks)
        if (0 < b.indexOf(",")) {
          var u = i.fks[b];
          p += "alter table " + c + " add constraint " + u + "_" + c + "_fk foreign key (" + b + ") references " + u + `;

`;
        }
      return p;
    }
    _genIndexes(i, c, p) {
      let u = "", b = 1;
      for (let x in i.fks)
        if (!i.isMany2One()) {
          var B = i.fks[x], t = B, o = x;
          o == null && (o = H(t) + "_id"), b == 1 && (u += `-- table index
`), u += "create index " + c + this._naming.idx + b++ + " on " + c + " (" + o + `);

`;
        }
      let d = i.getOptionValue("pk");
      d && (u += "alter table " + c + " add constraint " + c + this._naming.pk + " primary key (" + d + `);

`), d = i.getOptionValue("unique"), d == null && (d = i.getOptionValue("uk")), d != null && (u += "alter table " + c + " add constraint " + c + this._naming.uk + " unique (" + d + `);

`);
      for (let x = 0; x < i.children.length; x++) {
        var h = i.children[x];
        (h.isOption("idx") || h.isOption("index")) && (b == 1 && (u += `-- table index
`), u += "create index " + c + this._naming.idx + b++ + " on " + c + " (" + h.parseName() + `);
`);
      }
      if (p)
        for (let x = 0; x < i.children.length; x++) {
          let e = i.children[x];
          e.children.length == 0 && e.inferType().startsWith("vector") && (u += "create vector index " + c + "_vi" + b++ + " on " + c + " (" + e.parseName() + `)
`, u += `    organization neighbor partitions
`, u += `    with distance cosine;

`);
        }
      for (let x = 0; x < i.children.length; x++) {
        let e = i.children[x];
        e.children.length == 0 && e.inferType() == "sdo_geometry" && (u += "create index " + c + "_si" + b++ + " on " + c + " (" + e.parseName() + `)
`, u += `    indextype is mdsys.spatial_index_v2;

`);
      }
      return u;
    }
    _genComments(i, c) {
      let p = "";
      var u = i.getAnnotationValue("DESCRIPTION") || i.comment;
      u != null && (p += "comment on table " + c + " is '" + u + `';
`);
      for (let B = 0; B < i.children.length; B++) {
        let t = i.children[B];
        var b = t.getAnnotationValue("DESCRIPTION") || t.comment;
        b != null && t.children.length == 0 && (p += "comment on column " + c + "." + t.parseName() + " is '" + b + `';
`);
      }
      return p;
    }
    _orderedTableNodes(i) {
      var c = [i];
      const p = i.descendants();
      for (let b = 1; b < p.length; b++) {
        var u = p[b];
        u.children.length != 0 && (u.isMany2One() ? this._isContainedIn(u, c) || c.unshift(u) : this._isContainedIn(u, c) || c.push(u));
      }
      return c;
    }
    _isContainedIn(i, c) {
      for (const p in c)
        if (c[p].parseName() == i.parseName())
          return !0;
      return !1;
    }
    parseType(i) {
      if (i.children != null && 0 < i.children.length) return "table";
      const c = i.src;
      if (c[0].value == "view" || 1 < c.length && c[1].value == "=") return "view";
      if (c[0].value == "dv") return "dv";
      if (i.parent == null) return "table";
      const { type: p, booleanCheck: u, isNativeBoolean: b, parent_child: B } = i._inferTypeFull();
      return this._buildColumnConstraints(i, p, u, b, B);
    }
    generateTable(i) {
      if (i.children.length == 0 && 0 < i.apparentDepth()) {
        let o = l;
        return i.parent != null && (o += " ".repeat(i.parent.maxChildNameLen() - i.parseName().length)), i.parseName() + o + this.parseType(i);
      }
      i.lateInitFks();
      const c = this._ddl.objPrefix() + i.parseName();
      if (i.isOption("soda")) {
        let o = "create table " + c + ` (
`;
        return o += l + "id              varchar2(255" + this._ddl.semantics() + `) not null
`, o += l + "                constraint " + c + `_id_pk primary key,
`, o += l + `created_on      timestamp default sys_extract_utc(systimestamp) not null,
`, o += l + `last_modified   timestamp default sys_extract_utc(systimestamp) not null,
`, o += l + "version         varchar2(255" + this._ddl.semantics() + `) not null,
`, o += l + `json_document   json
`, o += `);

`, o;
      }
      const p = this._ddl.getOptionValue("db"), u = p != null && 0 < p.length && 23 <= q(p);
      let b = "";
      i.isOption("immutable") && u && (b = "immutable ");
      const B = i.getGenIdColName();
      let t = this._genSequence(i, c);
      return t += this._genTableHeader(i, c, b, B), t += this._genFkColumns(i, c), t += this._genRowKeyColumn(i, c), t += this._genRegularColumns(i, c, B), t += this._genRowVersionColumn(i), t += this._genAuditColumns(i), t += this._genAdditionalColumns(i), t += i.genConstraint(), t = w(t), t += this._genTableFooter(i, c, b, u), t += this._genMultiColFkAlters(i, c), t += this._genIndexes(i, c, u), t += this._genComments(i, c), t += `
`, t;
    }
    generateDDL(i) {
      if (i.inferType() == "view" || i.inferType() == "dv")
        return "";
      var c = this._orderedTableNodes(i);
      let p = "";
      for (let u = 0; u < c.length; u++)
        p += this.generateTable(c[u]);
      return p;
    }
    generateDrop(i) {
      let c = this._ddl.objPrefix() + i.parseName();
      const p = this._ddl.getOptionValue("db"), u = p != null && 0 < p.length && 23 <= q(p) ? "if exists " : "";
      let b = "";
      return i.inferType() == "view" && (b = "drop view " + u + c + `;
`), i.inferType() == "table" && (b = "drop table " + u + c + ` cascade constraints;
`, this._ddl.optionEQvalue("api", "yes") && (b += "drop package " + u + c + `_api;
`), this._ddl.optionEQvalue("pk", "SEQ") && (b += "drop sequence " + u + c + this._naming.seq + `;
`)), b.toLowerCase();
    }
    generateView(i) {
      if (i.inferType() != "view" && i.inferType() != "dv")
        return "";
      if (this._ddl.optionEQvalue("Duality View", "yes") || i.inferType() == "dv")
        try {
          return this.generateDualityView(i);
        } catch (o) {
          if (o.message == i.one2many2oneUnsupoported)
            return "";
          throw o;
        }
      let c = this._ddl.objPrefix() + i.parseName();
      var p = i.src;
      const u = this._buildViewSetup(i, p);
      if (u == null) return "";
      var b = "create or replace view " + c;
      i.annotations != null && (b += `
annotations (` + i.annotations + ")"), b += ` as
`, b += `select
`, b += this._buildViewColList(i, p, u.aliasMap, u.tblCache, u.colCnts, u.tblTransCols, u.maxLen), b = w(b);
      const { sortedTables: B, joinConditions: t } = this._sortViewTables(i, p, u.tblCache);
      return b += `from
`, b += this._buildViewFromClause(i, B, u.aliasMap, t, u.tblTransCols, u.tblCache), b = b.toLowerCase(), b.endsWith(`
`) && (b = b.trimEnd()), b.endsWith(`
`) || (b += `
`), b += `/
`, b.toLowerCase();
    }
    _buildViewSetup(i, c) {
      let p = {}, u = {};
      for (let n = 2; n < c.length; n++)
        p[c[n].value] = le(c[n].value), u[c[n].value] = this._ddl.find(c[n].value);
      for (var b = 0, B = 2; B < c.length; B++) {
        let n = u[c[B].value];
        if (n == null)
          return null;
        let f = p[c[B].value];
        var t = (f + ".id").length;
        b < t && (b = t);
        for (var o = 0; o < n.children.length; o++) {
          var d = n.children[o];
          t = (f + "." + d.parseName()).length, b < t && (b = t);
        }
      }
      var h = {};
      for (let n = 2; n < c.length; n++) {
        let f = u[c[n].value];
        if (f != null)
          for (let m = 0; m < f.children.length; m++) {
            var x = f.children[m].parseName(), e = h[x];
            e == null && (e = 0), h[x] = e + 1;
          }
      }
      for (let n = 2; n < c.length; n++) {
        let f = H(c[n].value) + "_id", m = h[f] || 0;
        h[f] = m + 1;
      }
      let a = {};
      for (let n = 2; n < c.length; n++) {
        let f = u[c[n].value];
        if (f != null && f.getTransColumns) {
          let m = f.getTransColumns();
          if (m.length > 0) {
            let S = {};
            for (let E = 0; E < m.length; E++)
              S[m[E].parseName()] = !0;
            a[c[n].value] = S;
          }
        }
      }
      return { aliasMap: p, tblCache: u, maxLen: b, colCnts: h, tblTransCols: a };
    }
    _buildViewColList(i, c, p, u, b, B, t) {
      let o = "";
      for (let h = 2; h < c.length; h++) {
        let x = u[c[h].value];
        if (x == null)
          continue;
        let e = c[h].value, a = p[e], n = B[e] || {}, f = " ".repeat(t - (a.length + 1 + 2));
        o += l + a + ".id" + l + f + H(e) + `_id,
`;
        for (let m = 0; m < x.children.length; m++) {
          let S = x.children[m];
          if (S.children.length == 0) {
            let E = S.parseName();
            var d = "";
            if (1 < b[E] && (d = H(e) + "_"), n[E]) {
              let M = "coalesce(" + ("t_" + e) + ".trans_" + E + ", " + a + "." + E + ")";
              o += l + M + l + d + E + `,
`;
            } else
              f = " ".repeat(t - (a.length + 1 + E.length)), o += l + a + "." + E + l + f + d + E + `,
`;
          }
        }
        if (x.hasRowVersion()) {
          let m = l + " ".repeat(x.maxChildNameLen() - 11);
          o += l + a + ".row_version" + m + H(e) + `_row_version,
`;
        }
        if (x.hasRowKey()) {
          let m = l + " ".repeat(x.maxChildNameLen() - 7);
          o += l + a + ".ROW_KEY" + m + H(e) + `_ROW_KEY,
`;
        }
        if (x.hasAuditCols()) {
          let m = this._ddl.getOptionValue("createdcol"), S = l + " ".repeat(x.maxChildNameLen() - m.length);
          o += l + a + "." + m + S + H(e) + "_" + m + `,
`;
          let E = this._ddl.getOptionValue("createdbycol");
          S = l + " ".repeat(x.maxChildNameLen() - E.length), o += l + a + "." + E + S + H(e) + "_" + E + `,
`;
          let v = this._ddl.getOptionValue("updatedcol");
          S = l + " ".repeat(x.maxChildNameLen() - v.length), o += l + a + "." + v + S + H(e) + "_" + v + `,
`;
          let M = this._ddl.getOptionValue("updatedbycol");
          S = l + " ".repeat(x.maxChildNameLen() - M.length), o += l + a + "." + M + S + H(e) + "_" + M + `,
`;
        }
      }
      return o;
    }
    _sortViewTables(i, c, p) {
      let u = {};
      for (let d = 2; d < c.length; d++)
        u[c[d].value] = !0;
      let b = {};
      for (let d = 2; d < c.length; d++) {
        let h = c[d].value, x = p[h];
        if (x != null)
          for (let e in x.fks) {
            let a = x.fks[e];
            u[a] && a != h && (b[h] || (b[h] = []), b[h].push({ fkCol: e, parentTable: a }));
          }
      }
      let B = {}, t = [];
      for (let d = 2; d < c.length; d++) {
        let h = c[d].value;
        b[h] || (t.push(h), B[h] = !0);
      }
      let o = [];
      for (let d = 2; d < c.length; d++) {
        let h = c[d].value;
        b[h] && o.push(h);
      }
      for (; o.length > 0; ) {
        let d = !1, h = [];
        for (let x = 0; x < o.length; x++) {
          let e = o[x], a = b[e], n = !0;
          for (let f = 0; f < a.length; f++)
            if (!B[a[f].parentTable]) {
              n = !1;
              break;
            }
          n ? (t.push(e), B[e] = !0, d = !0) : h.push(e);
        }
        if (o = h, !d) {
          for (let x = 0; x < o.length; x++)
            t.push(o[x]), B[o[x]] = !0;
          break;
        }
      }
      return { sortedTables: t, joinConditions: b };
    }
    _buildViewFromClause(i, c, p, u, b, B) {
      let t = "", o = this._ddl.getOptionValue("transcontext");
      for (let d = 0; d < c.length; d++) {
        let h = c[d], x = p[h], e = x;
        if (this._ddl.objPrefix() != null && this._ddl.objPrefix() != "" && (e = this._ddl.objPrefix() + h + " " + x), d == 0)
          t += l + e + `
`;
        else if (u[h]) {
          let a = u[h];
          t += l + "left join " + e + `
`;
          for (let n = 0; n < a.length; n++) {
            let f = p[a[n].parentTable], m = n == 0 ? "on " : "and ";
            t += l + l + m + x + "." + a[n].fkCol + " = " + f + `.id
`;
          }
        } else
          t += l + "cross join " + e + `
`;
        if (b[h]) {
          let a = B[h], n = this._ddl.objPrefix() + h + "_trans", f = "t_" + h, m = H(h) + "_id", S = a.getGenIdColName() || a.getExplicitPkName() || "id";
          t += l + "left join " + n + " " + f + `
`, t += l + l + "on " + f + "." + m + " = " + x + "." + S + `
`, t += l + l + "and " + f + ".language_code = " + o + `
`;
        }
      }
      return t;
    }
    restEnable(i) {
      if (i.inferType() != "table" || !i.isOption("rest"))
        return "";
      let c = i.parseName();
      const p = c.indexOf('"') == 0;
      let u = this._ddl.objPrefix() + c;
      return p ? u = this._ddl.objPrefix() + c.substring(1, c.length - 1) : u = (this._ddl.objPrefix() + c).toUpperCase(), `begin
` + l + "ords.enable_object(p_enabled=>TRUE, p_object=>'" + u + `');
end;
/
`;
    }
    generateTrigger(i) {
      return i.inferType() != "table" || i.isOption("soda") ? "" : this._generateBITrigger(i) + this._generateBUTrigger(i);
    }
    _generateBITrigger(i) {
      let c = this._ddl.optionEQvalue("editionable", "yes") ? " editionable" : "", p = (this._ddl.objPrefix() + i.parseName()).toLowerCase();
      var u = "create or replace" + c + " trigger " + p + this._naming.bi + `
`;
      u += `    before insert
`, u += "    on " + p + `
`, u += `    for each row
`, i.hasRowKey() && (u += `declare
    function compress_int (n in integer ) return varchar2
    as
        ret       varchar2(30);
        quotient  integer;
        remainder integer;
        digit     char(1);
    begin
        ret := null; quotient := n;
        <<compress_loop>>
        while quotient > 0
        loop
            remainder := mod(quotient, 10 + 26);
            quotient := floor(quotient  / (10 + 26));
            if remainder < 26 then
                digit := chr(ascii('A') + remainder);
            else
                digit := chr(ascii('0') + remainder - 26);
            end if;
            ret := digit || ret;
        end loop compress_loop;
        if length(ret) < 5 then ret := lpad(ret, 4, 'A'); end if ;
        return upper(ret);
    end compress_int;
`), u += `begin
`;
      var b = !1, B = i.apexUser();
      i.hasRowKey() && (u += `    :new.row_key := compress_int(row_key_seq.nextval);
`, b = !0);
      for (var t = 0; t < i.children.length; t++) {
        var o = i.children[t];
        let e = null;
        0 < o.content.indexOf("/lower") ? e = "LOWER".toLowerCase() : 0 < o.content.indexOf("/upper") && (e = "UPPER".toLowerCase()), e != null && (u += "    :new." + o.parseName().toLowerCase() + " := " + e + "(:new." + o.parseName().toLowerCase() + `);
`, b = !0);
      }
      if (i.hasRowVersion() && (u += `    :new.row_version := 1;
`, b = !0), i.hasAuditCols()) {
        let e = i.auditSysDateFn();
        u += "    :new." + this._ddl.getOptionValue("createdcol") + " := " + e + `;
`, u += "    :new." + this._ddl.getOptionValue("createdbycol") + " := " + B + `;
`, u += "    :new." + this._ddl.getOptionValue("updatedcol") + " := " + e + `;
`, u += "    :new." + this._ddl.getOptionValue("updatedbycol") + " := " + B + `;
`, b = !0;
      }
      var d = this._ddl.additionalColumns();
      for (var h in d) {
        var x = d[h];
        u += "    if :new." + h + ` is null then
`, x.startsWith("INT") ? u += "        " + h + ` := 0;
` : u += "        " + h + ` := 'N/A';
`, u += `    end if;
`, b = !0;
      }
      return b ? (u += "end " + p + this._naming.bi + `;
/

`, u) : "";
    }
    _generateBUTrigger(i) {
      if (i.isOption("immutable")) return "";
      for (var c = !1, p = 0; p < i.children.length; p++)
        if (0 < i.children[p].content.indexOf("/lower") || 0 < i.children[p].content.indexOf("/upper")) {
          c = !0;
          break;
        }
      const u = i.hasRowVersion(), b = i.hasAuditCols();
      if (!c && !u && !b) return "";
      let B = this._ddl.optionEQvalue("editionable", "yes") ? " editionable" : "", t = (this._ddl.objPrefix() + i.parseName()).toLowerCase();
      var o = "create or replace" + B + " trigger " + t + this._naming.bu + `
`;
      o += `    before update
`, o += "    on " + t + `
`, o += `    for each row
`, o += `begin
`;
      for (var d = i.apexUser(), p = 0; p < i.children.length; p++) {
        var h = i.children[p];
        let e = null;
        0 < h.content.indexOf("/lower") ? e = "LOWER".toLowerCase() : 0 < h.content.indexOf("/upper") && (e = "UPPER".toLowerCase()), e != null && (o += "    :new." + h.parseName().toLowerCase() + " := " + e + "(:new." + h.parseName().toLowerCase() + `);
`);
      }
      if (u && (o += `    :new.row_version := nvl(:old.row_version, 0) + 1;
`), b) {
        let x = i.auditSysDateFn();
        o += "    :new." + this._ddl.getOptionValue("updatedcol") + " := " + x + `;
`, o += "    :new." + this._ddl.getOptionValue("updatedbycol") + " := " + d + `;
`;
      }
      return o += "end " + t + this._naming.bu + `;
/

`, o;
    }
    generateImmutableTrigger(i) {
      if (i.inferType() != "table" || !i.isOption("immutable"))
        return "";
      const c = this._ddl.getOptionValue("db");
      if (c != null && 0 < c.length && 23 <= q(c))
        return "";
      let p = this._ddl.objPrefix() + i.parseName(), u = "create or replace trigger " + this._naming.immutable_prefix + p.toLowerCase() + this._naming.immutable_suffix + `
`;
      return u += `    before update or delete
`, u += "    on " + p.toLowerCase() + `
`, u += `declare
`, u += `    co_immutable_err  constant pls_integer      := -20055;
`, u += "    co_immutable_msg  constant varchar2(200 char) := '" + p.toLowerCase() + ` is immutable';
`, u += `begin
`, u += `    raise_application_error(co_immutable_err, co_immutable_msg);
`, u += `end;
/

`, u;
    }
    procDecl(i, c) {
      let p = "";
      c != "get" && (p = " default null");
      let u = "out";
      c != "get" && (u = " in");
      let b = l + "procedure " + c + `_row (
`;
      const B = i.getPkName();
      b += l + l + "p_" + B + "        in  " + i.getPkType() + p;
      for (var t in i.fks) {
        let o = i.fks[t], d = "integer", h = this._ddl.find(o);
        h != null && h.getExplicitPkName() != null && (d = h.getPkType()), b += `,
`, b += l + l + "P_" + t + "   " + u + "  " + d + p;
      }
      for (const o of i.regularColumns())
        b += `,
`, b += l + l + "P_" + o.parseName() + "   " + u + "  " + o.getPlsqlType() + p;
      return b += `
    )`, b;
    }
    _getRowBody(i) {
      const c = i.getPkName();
      let p = this._ddl.objPrefix() + i.parseName(), u = l + `is 
`;
      u += l + `begin 
`;
      const b = [], B = [];
      for (const t in i.fks)
        b.push(t), B.push("p_" + t);
      for (const t of i.regularColumns()) {
        const o = t.parseName().toLowerCase();
        b.push(o), B.push("p_" + o);
      }
      if (b.length > 0) {
        const t = l + l + "       ";
        u += l + l + "select " + b.join(`,
` + t) + `
`, u += l + l + "  into " + B.join(`,
` + t) + `
`, u += l + l + "  from " + p + `
`, u += l + l + " where " + c + " = p_" + c + `;
`;
      }
      return u += l + `exception
`, u += l + l + `when no_data_found then
`, u += l + l + l + `null;
`, u += l + `end get_row;
`, u += ` 
`, u;
    }
    _insertRowBody(i) {
      const c = i.getPkName();
      let p = this._ddl.objPrefix() + i.parseName(), u = l + `is 
`;
      u += l + `begin 
`, u += l + l + "insert into " + p + ` ( 
`, u += l + l + l + c;
      for (let b in i.fks)
        u += `,
`, u += l + l + l + b;
      for (const b of i.regularColumns())
        u += `,
`, u += l + l + l + b.parseName().toLowerCase();
      u += `
` + l + l + `) values ( 
`, u += l + l + l + "p_" + c;
      for (let b in i.fks)
        u += `,
`, u += l + l + l + "p_" + b;
      for (const b of i.regularColumns())
        u += `,
`, u += l + l + l + "p_" + b.parseName();
      return u += `
` + l + l + ");", u += `
` + l + `end insert_row;
 `, u += `
 `, u;
    }
    _updateRowBody(i) {
      const c = i.getPkName();
      let p = this._ddl.objPrefix() + i.parseName(), u = l + `is 
`;
      u += l + `begin 
`, u += l + l + "update  " + p + ` set 
`, u += l + l + l + c + " = p_" + c;
      for (let b in i.fks)
        u += `,
`, u += l + l + l + b + " = P_" + b;
      for (const b of i.regularColumns())
        u += `,
`, u += l + l + l + b.parseName().toLowerCase() + " = P_" + b.parseName().toLowerCase();
      return u += `
` + l + l + "where " + c + " = p_" + c + ";", u += `
` + l + `end update_row;
 `, u += `
 `, u;
    }
    generateTAPI(i) {
      if (i.children.length == 0)
        return "";
      let c = this._ddl.objPrefix() + i.parseName();
      var p = "create or replace package " + c.toLowerCase() + `_API
is

`.toLowerCase();
      p += this.procDecl(i, "get"), p += `;

`, p += this.procDecl(i, "insert"), p += `;

`, p += this.procDecl(i, "update"), p += `;

`;
      const u = i.getPkName();
      return p += `    procedure delete_row (
        p_` + u + `              in integer
    );
end ` + c.toLowerCase() + `_api;
/

`, p += "create or replace package body " + c.toLowerCase() + `_API
is

`.toLowerCase(), p += this.procDecl(i, "get"), p += `
`, p += this._getRowBody(i), p += this.procDecl(i, "insert"), p += `
`, p += this._insertRowBody(i), p += this.procDecl(i, "update"), p += `
`, p += this._updateRowBody(i), p += `    procedure delete_row (
`, p += "        p_" + u + `              in integer
`, p += `    )
`, p += `    is
`, p += `    begin
`, p += "        delete from " + c.toLowerCase() + " where " + u + " = p_" + u + `;
`, p += `    end delete_row;
`, p += "end " + c.toLowerCase() + `_api;
`, p += `/
`, p.toLowerCase();
    }
    generateData(i, c) {
      if (ke(), this._ddl.optionEQvalue("inserts", !1))
        return "";
      const p = this.inserts4tbl(i, c), u = this._orderedTableNodes(i);
      let b = "";
      for (let B = 0; B < u.length; B++) {
        const t = this._ddl.objPrefix() + u[B].parseName(), o = p[t];
        o != null && (b += o);
      }
      return b;
    }
    inserts4tbl(i, c) {
      let p = {};
      if (this._ddl.optionEQvalue("inserts", !1))
        return "";
      const u = this._ddl.objPrefix() + i.parseName();
      let b = "";
      for (let t = 0; t < i.cardinality(); t++) {
        let o = null;
        if (c != null) {
          const d = c[u];
          d != null && Array.isArray(d) && (o = d[t]);
        }
        b += this._buildInsertStatement(i, t, o, u);
      }
      b != "" && (b += `
commit;

`);
      let B = i.getGenIdColName();
      B != null && 1 < i.cardinality() && !this._ddl.optionEQvalue("pk", "guid") && (b += "alter table " + u + `
modify ` + B + " generated 'always ' as identity restart start with " + (i.cardinality() + 1) + `;

`), p[u] = b;
      for (let t = 0; t < i.children.length; t++) {
        const o = i.children[t];
        0 < o.children.length && (p = { ...p, ...this.inserts4tbl(o, c) });
      }
      return p;
    }
    _buildInsertStatement(i, c, p, u) {
      let b = "insert into " + u + ` (
`;
      const B = i.getGenIdColName();
      let t = null, o = null;
      B != null ? (t = B, b += l + t + `,
`) : (t = i.getExplicitPkName(), t != null && (b += l + t + `,
`));
      for (let d in i.fks) {
        let h = i.fks[d], x = this._ddl.find(h), e = "";
        x == null && (x = this._ddl.find(d), x.isMany2One() & !d.endsWith("_id") && (h = d, d = H(d), e = "_id")), b += l + d + e + `,
`;
      }
      for (const d of i.regularColumns())
        B != null && d.parseName() == "id" || d.isOption("pk") || (b += l + d.parseName() + `,
`);
      if (b = w(b), b += `) values (
`, B != null)
        o = c + 1, b += l + o + `,
`;
      else if (t != null) {
        const d = t;
        let h = G(this._ddl.data, null, d, i.parseName()), x = -1;
        p != null && (x = p[d]), h != null && h[c] != null && (x = h[c]), x != -1 && x.replaceAll && (x = "'" + x + "'"), o = x != -1 ? x : c + 1, b += l + o + `,
`;
      }
      for (let d in i.fks) {
        const h = i.fks[d], { type: x, values: e } = this._resolveFkSampleValues(i, d, h, p, o, u);
        b += l + ue(this._ddl.getOptionValue("Data Language"), me(u, H(h) + "_id", x, e)) + `,
`;
      }
      for (const d of i.regularColumns()) {
        if (B != null && d.parseName() == "id" || d.parseName() == i.getExplicitPkName())
          continue;
        let h = d.parseValues(), x = d.parseName();
        if (p != null) {
          let a = p[x];
          a != null && (h = [], h[0] = a);
        }
        let e = me(u, x, d.inferType(), h);
        b += l + ue(this._ddl.getOptionValue("Data Language"), e) + `,
`;
      }
      return b = w(b), b += `);
`, b;
    }
    _resolveFkSampleValues(i, c, p, u, b, B) {
      let t = this._ddl.find(p), o = [], d = "INTEGER";
      for (let h = 1; h <= t.cardinality(); h++)
        o.push(h);
      if (u != null) {
        let h = u[c];
        if (h != null)
          typeof h == "string" && (d = "STRING"), o = [], o[0] = h;
        else {
          const x = B + "_" + p, e = this._ddl.data[x];
          if (e != null) {
            for (const a in e)
              if (e[a][B + "_id"] == b) {
                const n = e[a][c];
                n != null && (typeof n == "string" && (d = "STRING"), o = [], o[0] = n);
                break;
              }
          } else {
            let a = t.getPkName(), n = u[a];
            n != null && (typeof n == "string" && (d = "STRING"), o = [], o[0] = n);
          }
        }
      }
      return { type: d, values: o };
    }
    generateDualityView(i) {
      const c = i.src;
      if (c.length < 3)
        return `/* duality view requires at least a view name and one table */
`;
      const p = this._ddl.objPrefix() + c[0].value, u = c[2].value, b = this._ddl.find(u);
      if (b == null)
        return "/* duality view: table " + u + ` not found */
`;
      b.lateInitFks();
      const B = "@insert @update @delete";
      let t = "create or replace json relational duality view " + p + ` as
`;
      t += this._ddl.objPrefix() + b.parseName() + " " + B + `
`, t += `{
`;
      const o = b.getGenIdColName() || b.getExplicitPkName() || "id";
      let d = 3;
      for (let x = 0; x < b.children.length; x++) {
        let e = b.children[x];
        if (e.children.length > 0 || e.refId() != null) continue;
        let a = e.parseName().length;
        a > d && (d = a);
      }
      for (let x = 3; x < c.length; x++) {
        let e = c[x].value.length;
        e > d && (d = e);
      }
      t += l + "_id" + " ".repeat(d - 3) + " : " + o + `,
`;
      let h = {};
      if (b.fks != null)
        for (let x in b.fks) h[x] = !0;
      for (const x of b.regularColumns()) {
        let e = x.parseName();
        e != o && (h[e] || (t += l + e + " ".repeat(d - e.length) + " : " + e + `,
`));
      }
      for (let x = 3; x < c.length; x++) {
        let e = c[x].value, a = this._ddl.find(e);
        if (a == null) continue;
        a.lateInitFks();
        let n = !1;
        if (a.fks != null) {
          for (let M in a.fks)
            if (a.fks[M] == b.parseName()) {
              n = !0;
              break;
            }
        }
        let f = a.getGenIdColName() || a.getExplicitPkName() || "id", m = 3;
        for (let M = 0; M < a.children.length; M++) {
          let I = a.children[M];
          if (I.children.length > 0 || I.refId() != null) continue;
          let k = I.parseName().length;
          k > m && (m = k);
        }
        let S = {};
        if (a.fks != null)
          for (let M in a.fks) S[M] = !0;
        let E = n ? `[{
` : `{
`, v = n ? "}]" : "}";
        t += l + e + " ".repeat(d - e.length) + " : " + this._ddl.objPrefix() + a.parseName() + " " + B + `
`, t += l + E, t += l + l + "_id" + " ".repeat(m - 3) + " : " + f + `,
`;
        for (const M of a.regularColumns()) {
          let I = M.parseName();
          I != f && (S[I] || (t += l + l + I + " ".repeat(m - I.length) + " : " + I + `,
`));
        }
        t = t.replace(/,\n$/, `
`), t += l + v + `,
`;
      }
      return t = t.replace(/,\n$/, `
`), t += `};

`, t.toLowerCase();
    }
    generateTransTable(i) {
      if (i.inferType() != "table")
        return "";
      let c = i.getTransColumns();
      if (c.length == 0)
        return "";
      let p = this._ddl.objPrefix() + i.parseName(), u = p + "_trans", b = this._ddl.semantics(), B = 13, t = H(i.parseName()) + "_id";
      t.length > B && (B = t.length);
      for (let x = 0; x < c.length; x++) {
        let e = "trans_" + c[x].parseName();
        e.length > B && (B = e.length);
      }
      2 > B && (B = 2);
      let o = "";
      o += "create table " + u + ` (
`;
      let d = l + " ".repeat(B - 2);
      o += l + "id" + d + "number " + _(u, this._naming) + `
`, o += l + l + " ".repeat(B) + "constraint " + u + "_id" + this._naming.pk + ` primary key,
`, d = l + " ".repeat(B - t.length), o += l + t + d + `number not null,
`, d = l + " ".repeat(B - 13), o += l + "language_code" + d + "varchar2(5" + b + `) not null,
`;
      for (let x = 0; x < c.length; x++) {
        let e = "trans_" + c[x].parseName();
        d = l + " ".repeat(B - e.length);
        let a = c[x].getBaseType(), n = (x < c.length - 1, ",");
        o += l + e + d + a + n + `
`;
      }
      o += l + "constraint " + u + this._naming.uk + " unique (" + t + `, language_code)
`, o += `);

`;
      let h = i.parseName();
      return h.length > 2 && (h = h.substring(0, 2)), o += "alter table " + u + " add constraint " + u + "_" + h + "_id" + this._naming.fk + `
`, o += l + "foreign key (" + t + ") references " + p + `;

`, o += "alter table " + u + " add constraint " + u + "_lang" + this._naming.fk + `
`, o += l + "foreign key (language_code) references " + this._ddl.objPrefix() + `language (code);

`, o += "create index " + u + this._naming.idx + "1 on " + u + " (" + t + `);
`, o += "create index " + u + this._naming.idx + "2 on " + u + ` (language_code);

`, o;
    }
    generateResolvedView(i) {
      if (i.inferType() != "table")
        return "";
      let c = i.getTransColumns();
      if (c.length == 0)
        return "";
      let p = this._ddl.objPrefix() + i.parseName(), u = p + "_trans", b = p + "_resolved", B = H(i.parseName()) + "_id", t = this._ddl.getOptionValue("transcontext"), o = "create or replace view " + b + ` as
`;
      o += "select ";
      let d = [];
      const h = i.getPkName();
      h != null && d.push("k." + h), i.lateInitFks();
      for (let e in i.fks) {
        if (0 < e.indexOf(",")) continue;
        let a = this._ddl.find(i.fks[e]), n = "";
        a != null && a.isMany2One && a.isMany2One() && !e.endsWith("_id") && (n = "_id"), d.push("k." + e + n);
      }
      let x = {};
      for (let e = 0; e < c.length; e++)
        x[c[e].parseName()] = !0;
      for (const e of i.regularColumns()) {
        let a = e.parseName();
        h != null && a == "id" || a != i.getExplicitPkName() && (x[a] ? d.push("coalesce(t.trans_" + a + ", k." + a + ") as " + a) : d.push("k." + a));
      }
      o += d[0] + `,
`;
      for (let e = 1; e < d.length; e++)
        o += l + l + " " + d[e], e < d.length - 1 && (o += ","), o += `
`;
      return o += "from " + p + ` k
`, o += "left join " + u + ` t
`, o += l + "on t." + B + " = k." + (h || i.getExplicitPkName()) + `
`, o += l + "and t.language_code = " + t + `;

`, o;
    }
  }, F;
})();
const Le = /* @__PURE__ */ (function() {
  function y(L, w, _, r) {
    this.from = w, this.to = _, _ == null && (this.to = new l(w.line, w.depth + 1)), this.message = L, this.severity = r, r == null && (this.severity = "error");
  }
  function l(L, w) {
    this.line = L, this.depth = w;
  }
  function N(L) {
    const w = L, _ = L.input;
    let r = [];
    _.split(`
`);
    let s = [];
    for (var T = 0; T < L.forest.length; T++)
      L.forest[T].parseType() == "table" && (s = s.concat(L.forest[T].descendants()));
    r = r.concat(D(s));
    const C = w.descendants();
    for (let F = 0; F < C.length; F++) {
      const G = C[F];
      if (w.optionEQvalue("genpk", !0) && C[F].parseName() == "id") {
        const c = G.content.toLowerCase().indexOf("id");
        r.push(new y(j.duplicateId, new l(G.line, c), new l(G.line, c + 2)));
        continue;
      }
      const g = G.src[2];
      if (2 < G.src.length && g.value == "-") {
        const c = g.begin;
        r.push(new y(j.invalidDatatype, new l(G.line, c), new l(G.line, c + 2)));
        continue;
      }
      const i = G.src[1];
      if (1 < G.src.length && i.value == "vc0") {
        const c = i.begin;
        r.push(new y(j.invalidDatatype, new l(G.line, c)));
        continue;
      }
      r = r.concat(R(w, G)), r = r.concat(A(w, G)), r = r.concat(P(w, G));
    }
    return r;
  }
  function P(L, w) {
    const _ = w.parseType() == "table";
    for (var r = [], s = w.src, T = !1, C = 1; C < s.length; C++) {
      if (s[C].value == "/") {
        T = !0;
        continue;
      }
      if (T) {
        T = !1, _ && Re.indexOf(s[C].value.toLowerCase()) < 0 && r.push(new y(
          j.tableDirectiveTypo,
          new l(w.line, s[C].begin),
          new l(w.line, s[C].begin + s[C].value.length)
        )), !_ && De.indexOf(s[C].value.toLowerCase()) < 0 && r.push(new y(
          j.columnDirectiveTypo,
          new l(w.line, s[C].begin),
          new l(w.line, s[C].begin + s[C].value.length)
        ));
        continue;
      }
    }
    return r;
  }
  function R(L, w) {
    var _ = [];
    if (w.parseType() == "view")
      for (var r = w.src, s = 2; s < r.length; s++) {
        var T = L.find(r[s].value);
        T == null && _.push(new y(
          j.undefinedObject + r[s].value,
          new l(w.line, r[s].begin),
          new l(w.line, r[s].begin + r[s].value.length)
        ));
      }
    return _;
  }
  function A(L, w) {
    var _ = [];
    if (w.isOption("fk") || 0 < w.indexOf("reference", !0)) {
      let s = w.indexOf("fk");
      if (s < 0 && (s = w.indexOf("reference")), s++, w.src.length - 1 < s || w.src[s].value == "/")
        return _;
      var r = L.find(w.src[s].value);
      r == null && _.push(new y(
        j.undefinedObject + w.src[s].value,
        new l(w.line, w.src[s].begin),
        new l(w.line, w.src[s].begin + w.src[s].value.length)
      ));
    }
    return _;
  }
  function D(L) {
    for (var w = [], _ = Ge(L), r = 1; r < L.length; r++) {
      var s = L[r], T = be(s);
      T % _ != 0 && w.push(
        new y(
          j.misalignedAttribute + _,
          new l(s.line, T)
        )
      );
    }
    return w;
  }
  return N;
})(), Re = [
  "api",
  "audit",
  "auditcols",
  ,
  "check",
  "colprefix",
  "compress",
  "compressed",
  "insert",
  "rest",
  "unique",
  "uk",
  "pk",
  "cascade",
  "setnull"
  //'set null'
], De = [
  "idx",
  "index",
  "indexed",
  "unique",
  "uk",
  "check",
  "constant",
  "default",
  "values",
  "upper",
  "lower",
  "nn",
  "not",
  "between",
  "references",
  "reference",
  "cascade",
  "setnull",
  "fk",
  "pk"
];
function Ge(y) {
  let l = [];
  for (var N = 0; N < y.length; N++) {
    var P = y[N];
    l[N] = be(P);
  }
  let R = [];
  for (let D = 0; D < l.length; D++) {
    let L = _e(l, D);
    if (L != null) {
      let w = R[l[D] - l[L]];
      w == null && (w = 0), R[l[D] - l[L]] = w + 1;
    }
  }
  let A = null;
  for (let D in R)
    (A == null || R[A] <= R[D]) && (A = parseInt(D));
  return A;
}
function be(y) {
  return y.src[0].begin;
}
function _e(y, l) {
  for (let N = l; 0 <= N; N--)
    if (y[N] < y[l])
      return N;
  return null;
}
const j = {
  duplicateId: "Explicit ID column conflicts with genpk",
  invalidDatatype: "Invalid Datatype",
  undefinedObject: "Undefined Object: ",
  misalignedAttribute: "Misaligned Table or Column; apparent indent = ",
  tableDirectiveTypo: "Unknown Table directive",
  columnDirectiveTypo: "Unknown Column directive"
}, Fe = { findErrors: Le, messages: j };
function Oe() {
  return "1.3.14";
}
var He = /* @__PURE__ */ (function() {
  function y(r) {
    for (var s = "", T = 0; T < r; T++)
      s = s + "   ";
    return s;
  }
  function l(r, s) {
    for (const T in r)
      if (JSON.stringify(r[T]) == JSON.stringify(s))
        return !0;
    return !1;
  }
  function N(r) {
    let s = ["_id", "Id"];
    if (r.id != null)
      return { key: "id", value: r.id };
    for (let T = 0; T < s.length; T++) {
      const C = s[T];
      for (let F in r)
        if (F.endsWith(C))
          return { key: F, value: r[F] };
    }
  }
  function P(r) {
    for (let s in r)
      if (!(r[s] != null && typeof r[s] == "object"))
        return !0;
    return !1;
  }
  function R(r) {
    let s = null;
    e: for (const T in r)
      if (T == 0)
        for (const C in r[T]) {
          s = C;
          break e;
        }
      else {
        s = T;
        break e;
      }
    return s.toLowerCase() == "id" ? null : s.toLowerCase().endsWith("_id") ? s.substring(0, s.length - 3) : s.endsWith("Id") ? s.substring(0, s.length - 2) : null;
  }
  function A(r, s, T) {
    let C = !1, F = !1;
    for (const g in r)
      for (var G = 0; G < g; G++)
        if (r[g][s] == r[G][s] && r[g][T] != r[G][T] ? C = !0 : r[g][s] != r[G][s] && r[g][T] == r[G][T] && (F = !0), C && F)
          return !0;
    return !1;
  }
  function D(r) {
    if (r == null || typeof r != "object")
      return "";
    let s = "(";
    for (let T in r) {
      if (T == 0)
        return D(r[T]);
      r[T] != null && typeof r[T] == "object" || (s += T + ",");
    }
    return s.lastIndexOf(",") == s.length - 1 && (s = s.substring(0, s.length - 1)), s + ")";
  }
  function L(r, s) {
    let T = r.indexOf("(");
    return 0 < T && (r = r.substring(0, T)), T = s.indexOf("("), 0 < T && (s = s.substring(0, T)), r + "_" + s + "(" + r + "_id," + s + "_id)";
  }
  function w(r, s) {
    const T = JSON.parse(r), C = R(T);
    C != null && (s = C), s == null && (s = "root_tbl");
    const F = new _();
    F.duplicatesAndParents(s + D(T), T), F.flatten(s + D(T), T);
    let G = F.output(s + D(T), T, 0);
    G += `

#settings = { genpk: false, drop: true, pk: identityDataType, semantics: char }`, G += `

#flattened = 
`;
    const g = {};
    for (const i in F.tableContent)
      g[F.tableName(i)] = F.tableContent[i];
    return G += JSON.stringify(g, null, 3), G += `
`, G += `

-- Generated by json2qsql.js ${Oe()} ` + (/* @__PURE__ */ new Date()).toLocaleString() + `

`, G += `#document = 
`, G += JSON.stringify(T, null, 3), G += `
`, G;
  }
  function _() {
    this.tableContent = {}, this.notNormalized = [], this.tableSignatures = [], this.child2parent = {}, this.objCounts = {}, this.output = function(r, s, T, C) {
      if (C != !1 && this.notNormalized.includes(r)) {
        const g = L(this.parent(r), r), i = this.tableContent[g];
        if (i != null) {
          let c = `
` + y(T) + this.tableName(g) + " /insert " + i.length;
          if (i[0], A(i, this.refIdName(this.parent(r)), this.refIdName(r)))
            return c += this.output(r, s, T + 1, !1), c;
        }
      }
      let F = "";
      this.notNormalized.includes(r) && (F = ">");
      let G = `
` + y(T) + F + this.tableName(r);
      if (typeof s == "number" && (G += " num", r.endsWith("_id") || r.endsWith("Id")))
        return G += " /pk", G;
      if (r == "id")
        return `
` + y(T) + "id vc32 /pk";
      e: if (s != null && typeof s == "object") {
        if (Array.isArray(s))
          for (const i in s) {
            1 <= i && console.log("1 <= property !");
            const c = s[i];
            G = this.output(r, c, T, C);
            break e;
          }
        else
          r != "" && (this.tableContent[r] == null && console.log(), G += "  /insert " + this.tableContent[r].length);
        let g = "";
        this.tableSignatures.includes(r) || (G = "", T--);
        for (let i in s) {
          const c = s[i];
          if (i != null) {
            const u = H(r), b = i.toLowerCase();
            if (r != null && u + "_id" == b && 0 < T && (g = i), u + "_id" == b || !isNaN(i) && !Array.isArray(s))
              continue;
          }
          const p = this.output(i + D(c), c, T + 1);
          G += p;
        }
        g != "" && (G += `
` + y(T) + g);
      }
      return G;
    }, this.idSeq = 1, this.flatten = function(r, s, T) {
      let C = {};
      for (let g in s)
        if (s[g] != null && typeof s[g] == "object") {
          let i = r, c = T;
          if (isNaN(g)) {
            i = g + D(s[g]);
            const p = N(C);
            p != null && (c = p);
          }
          this.flatten(i, s[g], c);
        } else
          C[g] = s[g];
      !this.notNormalized.includes(r) && T != null && Object.keys(C).length && (C[T.key] = T.value);
      const F = 0 < Object.keys(C).length;
      let G = this.tableContent[r];
      if (F) {
        if (G == null && (G = []), l(G, C) || G.push(C), this.notNormalized.includes(r)) {
          const g = this.parent(r);
          if (g != null) {
            const i = L(g, r);
            let c = this.tableContent[i];
            c == null && (c = []);
            const p = {};
            p[this.refIdName(g)] = T.value;
            let u = N(C);
            u == null && (C.id = this.idSeq++, u = N(C)), p[this.refIdName(r)] = u.value, c.push(p), this.tableContent[i] = c;
          }
        }
        this.tableContent[r] = G;
      } else G == null && (this.tableContent[r] = []);
    }, this.duplicatesAndParents = function(r, s) {
      const T = '"' + r + '":' + JSON.stringify(s);
      let C = this.objCounts[T];
      C == null && (C = 0);
      let F = !1;
      for (let g in s)
        if (s[g] != null && typeof s[g] == "object") {
          let i = r;
          if (isNaN(g))
            i = g + D(s[g]);
          else if (!Array.isArray(s))
            continue;
          i != r && (this.child2parent[i] = r), this.duplicatesAndParents(i, s[g]), F = !0;
        }
      P(s) && !this.tableSignatures.includes(r) && this.tableSignatures.push(r), F || (this.objCounts[T] = C + 1), 1 < this.objCounts[T] && !this.notNormalized.includes(r) && this.notNormalized.push(r);
    }, this.parent = function(r) {
      let s = this.child2parent[r];
      return s != null && !this.tableSignatures.includes(s) ? this.parent(s) : s;
    }, this.tableName = function(r) {
      const s = r.indexOf("(");
      if (s < 0)
        return r;
      let T = r.substring(0, s), C = 0, F = -1;
      for (const G in this.tableSignatures) {
        const g = this.tableSignatures[G];
        g.substring(0, g.indexOf("(")) == T && C++, g == r && (F = C);
      }
      return C < 2 ? T : T + F;
    }, this.refIdName = function(r) {
      return H(this.tableName(r)) + "_id";
    };
  }
  return w;
})();
const pe = "identityDataType", fe = "guid", ge = "Timestamp with time zone", Ce = "Timestamp with local time zone";
function xe(y) {
  if (y == null) return null;
  const l = typeof y == "string" ? y.toLowerCase() : y;
  return l === "yes" || l === "y" || l === "true" || l === !0 ? !0 : l === "no" || l === "n" || l === "false" || l === !1 ? !1 : l === pe.toLowerCase() ? "identity" : l === fe.toLowerCase() ? "guid" : l === ge.toLowerCase() ? "tswtz" : l === Ce.toLowerCase() ? "tswltz" : typeof l == "string" ? l : String(l);
}
const ie = {
  apex: { label: "APEX", value: "no", check: ["yes", "no"] },
  auditcols: { label: "Audit Columns", value: "no", check: ["yes", "no"] },
  createdcol: { label: "Created Column Name", value: "created" },
  createdbycol: { label: "Created By Column Name", value: "created_by" },
  updatedcol: { label: "Updated Column Name", value: "updated" },
  updatedbycol: { label: "Updated By Column Name", value: "updated_by" },
  auditdate: { label: "Audit Column Date Type", value: "" },
  aienrichment: { label: "AI Enrichment", value: "no", check: ["yes", "no"] },
  boolean: { label: "Boolean Datatype", value: "not set", check: ["yn", "native"] },
  genpk: { label: "Auto Primary Key", value: "yes", check: ["yes", "no"] },
  semantics: { label: "Character Strings", value: "CHAR", check: ["BYTE", "CHAR", "Default"] },
  language: { label: "Data Language", value: "EN", check: ["EN", "JP", "KO"] },
  datalimit: { label: "Data Limit Rows", value: 1e4 },
  date: { label: "Date Data Type", value: "DATE", check: ["DATE", "TIMESTAMP", ge, Ce] },
  db: { label: "Database Version", value: "not set" },
  dv: { label: "Duality View", value: "no", check: ["yes", "no"] },
  drop: { label: "Include Drops", value: "no", check: ["yes", "no"] },
  editionable: { label: "Editinable", value: "no", check: ["yes", "no"] },
  inserts: { label: "Generate Inserts", value: !0, check: ["yes", "no"] },
  namelen: { label: "Name Character Length", value: 255 },
  overridesettings: { label: "Ignore toDDL() second parameter", value: "no", check: ["yes", "no"] },
  prefix: { label: "Object Prefix", value: "" },
  pk: { label: "Primary Key Maintenance", value: fe, check: [pe, fe, "SEQ", "NONE"] },
  prefixpkwithtname: { label: "Prefix primary keys with table name", value: "no", check: ["yes", "no"] },
  rowkey: { label: "Alphanumeric Row Identifier", value: "no", check: ["yes", "no"] },
  rowversion: { label: "Row Version Number", value: "no", check: ["yes", "no"] },
  schema: { label: "Schema", value: "" },
  api: { label: "Table API", value: "no", check: ["yes", "no"] },
  compress: { label: "Table Compression", value: "no", check: ["yes", "no"] },
  transcontext: { label: "Translation Context", value: "sys_context('APP_CTX','LANG')" }
};
class Y {
  constructor(l, N) {
    this._ddl = null, this._erd = null, this._errors = null, this.postponedAlters = [], this.postponedAltersSet = /* @__PURE__ */ new Set(), this._labelToKey = {}, this.name2node = null, this.options = JSON.parse(JSON.stringify(ie)), this.input = l;
    for (const R in this.options) {
      const A = this.options[R].label;
      A != null && (this._labelToKey[A.toLowerCase()] = R);
    }
    let P = "";
    l.toLowerCase().includes("overridesettings") && he(this), N !== void 0 && this.optionEQvalue("overrideSettings", !1) && (P = "# settings = " + String(N) + `

`), this.input = P + l, this.forest = he(this);
  }
  // ── Option access ─────────────────────────────────────────────────────────
  getOptionValue(l) {
    const N = l.toLowerCase();
    let P = this.options[N];
    if (!(N in this.options)) {
      const R = this._labelToKey[N];
      R != null && (P = this.options[R]);
    }
    return P?.value ?? null;
  }
  optionEQvalue(l, N) {
    return xe(this.getOptionValue(l)) == xe(N);
  }
  setOptionValue(l, N) {
    const P = l.toLowerCase();
    if (!(P in this.options)) {
      for (const D in this.options)
        if (this.options[D].label === l) {
          this.options[D].value = N ?? "";
          return;
        }
    }
    const R = N ?? "";
    let A = this.options[P];
    A == null ? (A = { label: P, value: R }, this.options[P] = A) : A.value = R;
  }
  nonDefaultOptions() {
    const l = {};
    for (const N in this.options)
      ie[N] && !this.optionEQvalue(N, ie[N].value) && (l[N] = this.options[N].value);
    return l;
  }
  unknownOptions() {
    const l = [];
    for (const N in this.options)
      ie[N] == null && l.push(N);
    return l;
  }
  setOptions(l) {
    l = l.trim(), l.startsWith("#") && (l = l.substring(1).trim());
    const N = l.indexOf("=");
    let P = l.substring(N + 1).trim();
    P.includes("{") || (P = "{" + l + "}");
    let R = "";
    const A = X(P, !0, !0, "");
    for (const L of A)
      L.type === "identifier" && L.value !== "true" && L.value !== "false" && L.value !== "null" ? R += '"' + L.value + '"' : R += L.value;
    const D = JSON.parse(R);
    for (const L in D)
      this.setOptionValue(L.toLowerCase(), D[L]);
  }
  // ── Semantic helpers ──────────────────────────────────────────────────────
  semantics() {
    return this.optionEQvalue("semantics", "CHAR") ? " char" : this.optionEQvalue("semantics", "BYTE") ? " byte" : "";
  }
  objPrefix(l) {
    let N = this.getOptionValue("schema") ?? "";
    N = N !== "" && l == null ? N + "." : "";
    const P = this.getOptionValue("prefix") ?? "", R = P !== "" && !P.endsWith("_") ? "_" : "";
    return (N + P + R).toLowerCase();
  }
  // ── Node lookup ───────────────────────────────────────────────────────────
  find(l) {
    if (this.name2node != null)
      return this.name2node[Z(l)];
    this.name2node = {};
    for (const N of this.forest)
      for (const P of N.descendants())
        this.name2node[P.parseName()] = P;
    return this.name2node[Z(l)];
  }
  descendants() {
    const l = [];
    for (const N of this.forest)
      l.push(...N.descendants());
    return l;
  }
  additionalColumns() {
    const l = {}, N = this.getOptionValue("Auxiliary Columns");
    if (N == null) return l;
    for (const P of N.split(",")) {
      const R = P.trim(), A = R.indexOf(" ");
      A > 0 ? l[R.substring(0, A)] = R.substring(A + 1).toUpperCase() : l[R] = "VARCHAR2(4000)";
    }
    return l;
  }
  // ── Output generators ─────────────────────────────────────────────────────
  getERD() {
    if (this._erd != null) return this._erd;
    const l = new se(this), N = this.descendants(), P = { items: [], links: [], groups: {} };
    for (const R of N) {
      if (R.inferType() !== "table") continue;
      const A = {
        name: this.objPrefix("no schema") + R.parseName(""),
        schema: this.getOptionValue("schema") || null,
        columns: []
      };
      P.items.push(A);
      const D = R.getGenIdColName();
      if (D != null && !R.isOption("pk"))
        A.columns.push({ name: D, datatype: "number" });
      else {
        const _ = R.getExplicitPkName();
        if (_ != null && !_.includes(",")) {
          const r = R.findChild(_);
          A.columns.push({ name: _, datatype: r?.inferType() ?? "number" });
        }
      }
      R.lateInitFks();
      for (const _ in R.fks) {
        const r = R.fks[_];
        if (_.includes(",")) {
          const G = this.find(r), g = re(_, ", ");
          for (const i of g) {
            if (i === ",") continue;
            const c = G?.findChild(i);
            A.columns.push({ name: i, datatype: c?.inferType() ?? "number" });
          }
          continue;
        }
        let T = R.findChild(_)?.inferType() ?? "number", C = _;
        const F = this.find(r);
        if (F != null) {
          const G = F.getExplicitPkName();
          G != null && !G.includes(",") && (T = F.getPkType());
        } else
          this.find(_)?.isMany2One() && !_.endsWith("_id") && (C = (H(_) ?? _) + "_id");
        A.columns.push({ name: C, datatype: T });
      }
      const L = R.getExplicitPkName();
      for (const _ of R.children)
        if (_.inferType() !== "table" && _.refId() == null && _.parseName() !== L && (A.columns.push({ name: _.parseName(""), datatype: _.inferType() }), _.indexOf("file") > 0)) {
          const r = _.parseName();
          A.columns.push({ name: r + "_filename", datatype: "varchar2(255" + this.semantics() + ")" }), A.columns.push({ name: r + "_mimetype", datatype: "varchar2(255" + this.semantics() + ")" }), A.columns.push({ name: r + "_charset", datatype: "varchar2(255" + this.semantics() + ")" }), A.columns.push({ name: r + "_lastupd", datatype: "date" });
        }
      const w = R.trimmedContent().toUpperCase();
      if ((this.optionEQvalue("rowkey", !0) || w.includes("/ROWKEY")) && A.columns.push({ name: "row_key", datatype: "varchar2(30" + this.semantics() + ")" }), (this.optionEQvalue("rowVersion", "yes") || w.includes("/ROWVERSION")) && A.columns.push({ name: "row_version", datatype: "integer" }), this.optionEQvalue("Audit Columns", "yes") || w.includes("/AUDITCOLS")) {
        let _ = this.getOptionValue("auditdate") || "";
        _ || (_ = this.getOptionValue("Date Data Type")), _ = _.toLowerCase();
        const r = this.semantics();
        A.columns.push({ name: this.getOptionValue("createdcol"), datatype: _ }), A.columns.push({ name: this.getOptionValue("createdbycol"), datatype: "varchar2(255" + r + ")" }), A.columns.push({ name: this.getOptionValue("updatedcol"), datatype: _ }), A.columns.push({ name: this.getOptionValue("updatedbycol"), datatype: "varchar2(255" + r + ")" });
      }
    }
    for (const R of N)
      if (R.inferType() === "table") {
        l.generateDDL(R);
        for (const A in R.fks) {
          const D = R.fks[A], L = this.find(D);
          if (L == null) continue;
          const w = L.getExplicitPkName() ?? "id", _ = R.findChild(A), r = _ == null || _.isOption("nn") || _.isOption("notnull");
          P.links.push({
            source: this.objPrefix() + D,
            source_id: w,
            target: this.objPrefix() + R.parseName(""),
            target_id: A,
            mandatory: r
          });
        }
      }
    for (const R of N) {
      if (R.inferType() !== "table") continue;
      const A = R.getAnnotationValue("TGROUP");
      A != null && (P.groups[A] || (P.groups[A] = []), P.groups[A].push(this.objPrefix("no schema") + R.parseName("")));
    }
    return this._erd = P, P;
  }
  getDDL() {
    if (this._ddl != null) return this._ddl;
    const l = new se(this), N = this.descendants();
    let P = "";
    if (this.optionEQvalue("Include Drops", "yes"))
      for (const r of N) {
        const s = l.generateDrop(r);
        s && (P += s);
      }
    if (this.optionEQvalue("rowkey", !0))
      P += `create sequence  row_key_seq;

`;
    else
      for (const r of this.forest)
        if (r.trimmedContent().toUpperCase().includes("/ROWKEY")) {
          P += `create sequence  row_key_seq;

`;
          break;
        }
    P += `-- create tables

`;
    for (const r of this.forest)
      P += l.generateDDL(r) + `
`;
    for (const r of this.postponedAlters)
      P += r + `
`;
    if (N.some(
      (r) => r.getTransColumns && r.getTransColumns().length > 0
    )) {
      const r = this.semantics(), s = this.objPrefix();
      P += `-- translation support

`, P += `create table ${s}language (
`, P += `    code           varchar2(5${r}) not null
`, P += `                   constraint ${s}language_code_pk primary key,
`, P += `    locale         varchar2(28${r}) not null
`, P += `                   constraint ${s}language_locale_unq unique,
`, P += `    name           varchar2(1024${r}),
`, P += `    native_name    varchar2(1024${r})
`, P += `);

`, P += `create index ${s}language_i1 on ${s}language (locale);

`;
      for (const T of N) {
        const C = l.generateTransTable(T);
        C && (P += C);
      }
    }
    let A = 0;
    for (const r of N) {
      const s = l.generateTrigger(r);
      s && (A++ === 0 && (P += `-- triggers
`), P += s + `
`);
    }
    for (const r of N) {
      const s = l.generateImmutableTrigger(r);
      s && (A++ === 0 && (P += `-- immutable triggers
`), P += s);
    }
    for (const r of N) {
      const s = l.restEnable(r);
      s && (P += s + `
`);
    }
    A = 0;
    for (const r of N) {
      if (this.optionEQvalue("api", !1) && !r.trimmedContent().toLowerCase().includes("/api"))
        continue;
      const s = l.generateTAPI(r);
      s && (A++ === 0 && (P += `-- APIs
`), P += s + `
`);
    }
    A = 0;
    for (const r of this.forest) {
      const s = l.generateView(r);
      s && (A++ === 0 && (P += `-- create views
`), P += s + `
`);
    }
    for (const r of N) {
      const s = l.generateResolvedView(r);
      s && (A++ === 0 && (P += `-- create views
`), P += s);
    }
    const D = {};
    for (const r of N) {
      if (r.inferType() !== "table") continue;
      const s = r.getAnnotationValue("TGROUP");
      s != null && (D[s] || (D[s] = []), D[s].push(this.objPrefix() + r.parseName()));
    }
    const L = Object.keys(D);
    if (L.length > 0) {
      P += `-- table groups
`;
      for (const r of L) {
        P += `insert into user_annotations_groups$ (group_name) values ('${r}');
`;
        for (const s of D[r])
          P += `insert into user_annotations_group_members$ (group_name, object_name) values ('${r}', '${s.toUpperCase()}');
`;
      }
      P += `
`;
    }
    const w = this.getOptionValue("db");
    if (this.optionEQvalue("aienrichment", !0) && w != null && w.length >= 2 && (q(w) ?? 0) >= 26) {
      const r = [], s = {}, T = this.objPrefix();
      for (const C of this.forest) {
        const F = C.inferType(), G = C.getAnnotationPairs(), g = (T + C.parseName()).toUpperCase();
        if (F === "table") {
          for (const i of G) {
            if (i.label.toUpperCase() === "TGROUP") {
              i.value != null && (s[i.value] || (s[i.value] = []), s[i.value].push(g));
              continue;
            }
            i.value != null && r.push(`    metadata_annotations.set('${i.label}', '${i.value}', '${g}');`);
          }
          for (const i of C.children) {
            if (i.children.length > 0) continue;
            const c = i.getAnnotationPairs(), p = g + "." + i.parseName().toUpperCase();
            for (const u of c)
              u.value != null && r.push(`    metadata_annotations.set('${u.label}', '${u.value}', '${p}', 'TABLE COLUMN');`);
          }
        } else if (F === "view")
          for (const i of G)
            i.value != null && r.push(`    metadata_annotations.set('${i.label}', '${i.value}', '${g}', 'VIEW');`);
      }
      for (const C of Object.keys(s)) {
        r.push(`    metadata_annotations.create_group('${C}');`);
        for (const F of s[C])
          r.push(`    metadata_annotations.add_to_group('${C}', '${F}', 'TABLE');`);
      }
      r.length > 0 && (P += `-- AI enrichment
begin
` + r.join(`
`) + `
end;
/

`);
    }
    A = 0;
    for (const r of this.forest) {
      const s = l.generateData(r, this.data);
      s && (A++ === 0 && (P += `-- load data

`), P += s + `
`);
    }
    const _ = (r) => r.replace(/#.+/g, `
`).replace(/\/\*/g, "--<--").replace(/\*\//g, "-->--");
    P += `-- Generated by Quick SQL ${this.version()} ${(/* @__PURE__ */ new Date()).toLocaleString()}

`, P += `/*
`, P += _(this.input), P += `
`;
    for (const r of this.unknownOptions())
      P += "*** Unknown setting: " + r + `
`;
    return P += `
 Non-default options:
# settings = ` + JSON.stringify(this.nonDefaultOptions()) + `
`, P += `
*/`, this._ddl = P, P;
  }
  getErrors() {
    return this._errors != null ? this._errors : (this._errors = Fe.findErrors(this, this.input), this._errors);
  }
  version() {
    return ve();
  }
}
function ze(y, l) {
  return He(y, l);
}
function We(y, l) {
  return new Y(y, l).getERD();
}
function Ve(y, l) {
  return new Y(y, l).getDDL();
}
function Ue(y, l) {
  return new Y(y, l).getErrors();
}
function ve() {
  return "1.3.14";
}
Y.toDDL = Ve;
Y.toERD = We;
Y.toErrors = Ue;
Y.fromJSON = ze;
Y.version = ve;
Y.lexer = X;
export {
  Y as default,
  ze as fromJSON,
  ve as qsql_version,
  Y as quicksql,
  Ve as toDDL,
  We as toERD,
  Ue as toErrors
};
