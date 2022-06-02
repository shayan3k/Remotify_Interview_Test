!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("fastest-levenshtein"))
    : "function" == typeof define && define.amd
    ? define(["exports", "fastest-levenshtein"], t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
      t((e.PersianTools = {}), e.fastestLevenshtein));
})(this, function (e, t) {
  "use strict";
  var c = "۰۱۲۳۴۵۶۷۸۹",
    o = "٠١٢٣٤٥٦٧٨٩";
  function a(e) {
    if (e) {
      for (var t = "" + e, o = 0; o < 10; o++) {
        var a = new RegExp("" + o, "g");
        t = t.replace(a, c[o]);
      }
      return t;
    }
  }
  function n(e) {
    if (e) {
      for (var t = 0; t < 10; t++) {
        var o = new RegExp(c[t], "g");
        e = e.replace(o, t);
      }
      return e;
    }
  }
  function d(e) {
    if (e) {
      for (var t = "" + e, a = 0; a < 10; a++) {
        var n = new RegExp(o[a], "g");
        t = t.replace(n, c[a]);
      }
      return t;
    }
  }
  function r(e) {
    if (e) {
      for (var t = e, c = 0; c < 10; c++) {
        var a = new RegExp(o[c], "g");
        t = String(t).replace(a, c);
      }
      return t;
    }
  }
  var i = function (e) {
    if (e) {
      for (var t = [], c = 0; c <= e.length; c++)
        if (((t[c] = e.substring(c - 1, c)), t[c].charCodeAt(0) > 255))
          return !0;
      return !1;
    }
  };
  function p(e) {
    if (e) {
      for (var t = ""; t != e; )
        (t = e),
          (e = e.replace(
            /\{\{(عەرەبی|بە عەرەبی|بە ئویغوری)\|(.*?)ى(.*?)\}\}/g,
            "{{$1|$2​​​ی​​​$3}}"
          )),
          (e = e.replace(
            /\{\{(بە سیندی)\|(.*?)ه(.*?)\}\}/g,
            "{{$1|$2‏‏‏ھ‏‏‏$3}}"
          )),
          (e = e.replace(
            /\{\{(بە پەشتۆ)\|(.*?)ي(.*?)\}\}/g,
            "{{$1|$2​​​ی​​​$3}}"
          )),
          (e = e.replace(
            /\[\[([^\]]*?\:[^\]]*?)ي(.*?)\]\]/g,
            "[[$1‏‏‏ی‏‏‏$2]]"
          )),
          (e = e.replace(
            /\[\[([^\]]*?\:[^\]]*?)ى(.*?)\]\]/g,
            "[[$1​​​ی​​​$2]]"
          )),
          (e = e.replace(
            /\[\[([^\]]*?\:[^\]]*?)ك(.*?)\]\]/g,
            "[[$1‏‏‏ک‏‏‏$2]]"
          )),
          (e = e.replace(
            /\[\[([^\]]*?\:[^\]]*?)ه‌(.*?)\]\]/g,
            "[[$1‏‏‏ە‏‏‏$2]]"
          )),
          (e = e.replace(
            /\[\[([^\]]*?\:[^\]]*?)ه(.*?)\]\]/g,
            "[[$1‏‏‏ھ‏‏‏$2]]"
          ));
      for (
        e = e.replace(/ي/g, "ی"),
          e = e.replace(/ك/g, "ک"),
          e = e.replace(/ى/g, "ی"),
          e = e.replace(new RegExp("ه($|[^ء-يٱ-ە])", "g"), "ە$1"),
          e = e.replace(/ە‌/g, "ە"),
          e = e.replace(/ه/g, "ھ"),
          e = e.replace(/\u200f\u200f\u200fی\u200f\u200f\u200f/g, "ي"),
          e = e.replace(/\u200b\u200b\u200bی\u200b\u200b\u200b/g, "ى"),
          e = e.replace(/\u200f\u200f\u200fک\u200f\u200f\u200f/g, "ك"),
          e = e.replace(/\u200f\u200f\u200fه\u200f\u200f\u200f/g, "ه‌"),
          e = e.replace(/\u200f\u200f\u200fھ\u200f\u200f\u200f/g, "ه"),
          t = "";
        t != e;

      )
        (t = e),
          (e = e.replace(
            /\[\[(پۆل|[Cc]ategory):(.*?)(ى|ي)(.*?)\]\]/g,
            "[[$1:$2ی$4]]"
          )),
          (e = e.replace(
            /\[\[(پۆل|[Cc]ategory):(.*?)ك(.*?)\]\]/g,
            "[[$1:$2ک$3]]"
          )),
          (e = e.replace(
            /\[\[(پۆل|[Cc]ategory):(.*?)ه‌(.*?)\]\]/g,
            "[[$1:$2$3ە]]"
          )),
          (e = e.replace(
            /\[\[(پۆل|[Cc]ategory):(.*?)ه(.*?)\]\]/g,
            "[[$1:$2ھ$3]]"
          ));
      for (t = ""; t != e; )
        (t = e),
          (e = e.replace(
            /\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ی([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g,
            "{{$1}}$2ي$3{{کۆتایی عەرەبی}}"
          )),
          (e = e.replace(
            /\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ک([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g,
            "{{$1}}$2ك$3{{کۆتایی عەرەبی}}"
          )),
          (e = e.replace(
            /\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ە([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g,
            "{{$1}}$2ه$3{{کۆتایی عەرەبی}}"
          )),
          (e = e.replace(
            /\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ھ([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g,
            "{{$1}}$2ه$3{{کۆتایی عەرەبی}}"
          )),
          (e = e.replace(/\{\{(بە پەشتۆ)\|(.*?)ى(.*?)\}\}/g, "{{$1|$2ي$3}}")),
          (e = e.replace(
            /\{\{(عەرەبی|بە عەرەبی|بە سیندی|بە ئویغوری)\|(.*?)ی(.*?)\}\}/g,
            "{{$1|$2ي$3}}"
          )),
          (e = e.replace(
            /\{\{(عەرەبی|بە عەرەبی|بە ئویغوری)\|(.*?)ک(.*?)\}\}/g,
            "{{$1|$2ك$3}}"
          )),
          (e = e.replace(
            /\{\{(عەرەبی|بە عەرەبی|فارسی|بە فارسی|ن.فارسی|بە پەشتۆ)\|(.*?)ە(.*?)\}\}/g,
            "{{$1|$2ه$3}}"
          )),
          (e = e.replace(
            /\{\{(عەرەبی|بە عەرەبی|فارسی|بە فارسی|ن.فارسی|بە پەشتۆ)\|(.*?)ھ(.*?)\}\}/g,
            "{{$1|$2ه$3}}"
          ));
      return e;
    }
  }
  var y = function (e) {
      return e.replace(/^\s+|\s+$/g, "");
    },
    C = function (e, t) {
      var c = new RegExp(Object.keys(t).join("|"), "gi");
      return e.replace(c, function (e) {
        return t[e];
      });
    },
    u = function (e) {
      if (void 0 !== e) {
        var t = e.toString(),
          c = i(t) ? n(t) : t;
        return c.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      }
    },
    l = function (e) {
      if (e) {
        var t = "" + e;
        return (
          -1 !== t.indexOf(",") && (t = t.replace(/,\s?/g, "")), parseInt(t, 10)
        );
      }
    },
    s = function (e) {
      if (void 0 !== e)
        return (
          e.endsWith("ی")
            ? (e += " اُم")
            : e.endsWith("سه")
            ? (e = e.slice(0, -2) + "سوم")
            : (e += "م"),
          e
        );
    },
    m = ["", "هزار", "میلیون", "میلیارد"],
    f = {
      0: "",
      1: "یک",
      2: "دو",
      3: "سه",
      4: "چهار",
      5: "پنج",
      6: "شش",
      7: "هفت",
      8: "هشت",
      9: "نه",
      10: "ده",
      11: "یازده",
      12: "دوازده",
      13: "سیزده",
      14: "چهارده",
      15: "پانزده",
      16: "شانزده",
      17: "هفده",
      18: "هجده",
      19: "نوزده",
      20: "بیست",
      30: "سی",
      40: "چهل",
      50: "پنجاه",
      60: "شصت",
      70: "هفتاد",
      80: "هشتاد",
      90: "نود",
      100: "صد",
      200: "دویست",
      300: "سیصد",
      400: "چهار صد",
      500: "پانصد",
      600: "شش صد",
      700: "هفت صد",
      800: "هشت صد",
      900: "نه صد",
    },
    b = (function () {
      function e() {
        this.toWords = function (e) {
          for (var t = 100, c = ""; t > 0; ) {
            if (Math.floor(e / t) * t != 0) {
              if (e in f) {
                c += f[e];
                break;
              }
              (c += f[Math.floor(e / t) * t] + " و "), (e %= t);
            }
            t = Math.floor(t / 10);
          }
          return c;
        };
      }
      return (
        (e.prototype.convert = function (e, t) {
          var c = void 0 === t ? {} : t,
            o = c.ordinal,
            a = void 0 !== o && o;
          if (void 0 !== e) {
            if (0 === e) return "صفر";
            var n = 1e3,
              d = [];
            e = l(e);
            var r = e < 0;
            for (e = r ? -1 * e : e; e > 0; )
              d.push(this.toWords(e % n)), (e = Math.floor(e / n));
            if (d.length > 4) return "";
            for (var i = 0; i < d.length; i++)
              "" !== d[i] && (d[i] += " " + m[i] + " و ");
            d.reverse();
            for (var p = d.join(""); p.endsWith(" و "); ) p = p.slice(0, -3);
            return (p = y(r ? "منفی " + p : p)), a && (p = s(p)), p;
          }
        }),
        e
      );
    })(),
    v = new b(),
    g = function (e) {
      if (void 0 !== e)
        return (
          (e = e
            .replace(new RegExp("مین$", "ig"), "")
            .replace(new RegExp("(ام| اُم)$", "ig"), "")),
          e.endsWith("سوم")
            ? (e = e.slice(0, -3) + "سه")
            : e.endsWith("م") && (e = e.slice(0, -1)),
          e
        );
    },
    h = function () {
      return (
        (h =
          Object.assign ||
          function e(t) {
            for (var c, o = 1, a = arguments.length; o < a; o++)
              for (var n in ((c = arguments[o]), c))
                Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
            return t;
          }),
        h.apply(this, arguments)
      );
    };
  function N(e, t) {
    var c = "function" == typeof Symbol && e[Symbol.iterator];
    if (!c) return e;
    var o = c.call(e),
      a,
      n = [],
      d;
    try {
      for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
        n.push(a.value);
    } catch (e) {
      d = { error: e };
    } finally {
      try {
        a && !a.done && (c = o.return) && c.call(o);
      } finally {
        if (d) throw d.error;
      }
    }
    return n;
  }
  function k() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e = e.concat(N(arguments[t]));
    return e;
  }
  var $ = {
      صفر: 0,
      یک: 1,
      دو: 2,
      سه: 3,
      چهار: 4,
      پنج: 5,
      شش: 6,
      شیش: 6,
      هفت: 7,
      هشت: 8,
      نه: 9,
      ده: 10,
      یازده: 11,
      دوازده: 12,
      سیزده: 13,
      چهارده: 14,
      پانزده: 15,
      شانزده: 16,
      هفده: 17,
      هجده: 18,
      نوزده: 19,
      بیست: 20,
      سی: 30,
      چهل: 40,
      پنجاه: 50,
      شصت: 60,
      هفتاد: 70,
      هشتاد: 80,
      نود: 90,
    },
    B = {
      صد: 100,
      یکصد: 100,
      دویست: 200,
      سیصد: 300,
      چهارصد: 400,
      پانصد: 500,
      ششصد: 600,
      هفتصد: 700,
      هشتصد: 800,
      نهصد: 900,
    },
    A = { هزار: 1e3, میلیون: 1e6, بیلیون: 1e9, میلیارد: 1e9, تریلیون: 1e12 },
    I = {
      "شیش صد": "ششصد",
      "شش صد": "ششصد",
      "هفت صد": "هفتصد",
      "هشت صد": "هشتصد",
      "نه صد": "نهصد",
    },
    S = Object.keys($),
    T = Object.keys(B),
    x = Object.keys(A),
    P = k(S, T, x),
    j = ["و", " و "],
    w = ["منفی", "مثبت"],
    E = k(P, j, w),
    O = function (e, c) {
      if (e && "string" == typeof e) {
        var o = (null == c ? void 0 : c.length) > 0 ? c : E,
          a = e.split(" ").map(function (e) {
            return "و" === e ? e : 1 === e.length ? j[0] : t.closest(e, o);
          });
        return a.join(" ");
      }
    },
    M = (function () {
      function e() {}
      return (
        (e.prototype.convert = function (e, t) {
          var c = void 0 === t ? {} : t,
            o = c.digits,
            n = void 0 === o ? "en" : o,
            d = c.addCommas,
            r = void 0 !== d && d,
            i = c.fuzzy,
            p = void 0 !== i && i;
          if (e) {
            (e = e.replace(new RegExp("مین$", "ig"), "")), (e = g(e));
            var y = p ? O(e) : e,
              C = this.compute(this.tokenize(y)),
              l = r ? u(C) : C;
            return "fa" === n ? a(l) : l;
          }
        }),
        (e.prototype.tokenize = function (e) {
          e = C(e, I);
          var t = [],
            c = e.split(" ");
          return (
            c.forEach(function (e) {
              return e === j[0] ? "" : t.push(e);
            }),
            t
          );
        }),
        (e.prototype.compute = function (e) {
          var t = 0,
            c = !1;
          return (
            e.forEach(function (e) {
              (e = n(e)),
                e === w[0]
                  ? (c = !0)
                  : null != $[e]
                  ? (t += $[e])
                  : null != B[e]
                  ? (t += B[e])
                  : isNaN(Number(e))
                  ? (t *= A[e])
                  : (t += parseInt(e, 10));
            }),
            c ? -1 * t : t
          );
        }),
        e
      );
    })(),
    R = new M();
  function V(e) {
    if (e) {
      var t = e.toString();
      if (!t.match(/^\d{10}$/)) return !1;
      if (
        ((t = ("0000" + t).substr(t.length + 4 - 10)),
        0 === parseInt(t.substr(3, 6), 10))
      )
        return !1;
      for (var c = parseInt(t.substr(9, 1), 10), o = 0, a = 0; a < 9; a++)
        o += parseInt(t.substr(a, 1), 10) * (10 - a);
      return (o %= 11), (o < 2 && c === o) || (o >= 2 && c === 11 - o);
    }
  }
  var z = [
      { code: "169", city: "آذرشهر", parentCode: 1 },
      { code: "170", city: "اسکو", parentCode: 1 },
      { code: "149-150", city: "اهر", parentCode: 1 },
      { code: "171", city: "بستان آباد", parentCode: 1 },
      { code: "168", city: "بناب", parentCode: 1 },
      { code: "136-137-138", city: "تبریز", parentCode: 1 },
      { code: "545", city: "ترکمانچای", parentCode: 1 },
      { code: "505", city: "جلفا", parentCode: 1 },
      { code: "636", city: "چاروایماق", parentCode: 1 },
      { code: "164-165", city: "سراب", parentCode: 1 },
      { code: "172", city: "شبستر", parentCode: 1 },
      { code: "623", city: "صوفیان", parentCode: 1 },
      { code: "506", city: "عجب شیر", parentCode: 1 },
      { code: "519", city: "کلیبر", parentCode: 1 },
      { code: "154-155", city: "مراغه", parentCode: 1 },
      { code: "567", city: "ورزقان", parentCode: 1 },
      { code: "173", city: "هریس", parentCode: 1 },
      { code: "159-160", city: "هشترود", parentCode: 1 },
      { code: "604", city: "هوراند", parentCode: 1 },
      { code: "274-275", city: "ارومیه", parentCode: 2 },
      { code: "295", city: "اشنویه", parentCode: 2 },
      { code: "637", city: "انزل", parentCode: 2 },
      { code: "292", city: "بوکان", parentCode: 2 },
      { code: "492", city: "پلدشت", parentCode: 2 },
      { code: "289", city: "پیرانشهر", parentCode: 2 },
      { code: "677", city: "تخت سلیمان", parentCode: 2 },
      { code: "294", city: "تکاب", parentCode: 2 },
      { code: "493", city: "چایپاره", parentCode: 2 },
      { code: "279-280", city: "خوی", parentCode: 2 },
      { code: "288", city: "سردشت", parentCode: 2 },
      { code: "284-285", city: "سلماس", parentCode: 2 },
      { code: "638", city: "سیلوانه", parentCode: 2 },
      { code: "291", city: "سیه چشمه(چالدران)", parentCode: 2 },
      { code: "640", city: "شوط", parentCode: 2 },
      { code: "293", city: "شاهین دژ", parentCode: 2 },
      { code: "675", city: "کشاورز", parentCode: 2 },
      { code: "282-283", city: "ماکو", parentCode: 2 },
      { code: "286-287", city: "مهاباد", parentCode: 2 },
      { code: "296-297", city: "میاندوآب", parentCode: 2 },
      { code: "290", city: "نقده", parentCode: 2 },
      { code: "400-401", city: "اسدآباد", parentCode: 3 },
      { code: "404-405", city: "بهار", parentCode: 3 },
      { code: "397", city: "تویسرکان", parentCode: 3 },
      { code: "398-399", city: "رزن", parentCode: 3 },
      { code: "647", city: "شراء و پیشخوار", parentCode: 3 },
      { code: "502", city: "فامنین", parentCode: 3 },
      { code: "584", city: "قلقل رود", parentCode: 3 },
      { code: "402-403", city: "کبودرآهنگ", parentCode: 3 },
      { code: "392-393", city: "ملایر", parentCode: 3 },
      { code: "395-396", city: "نهاوند", parentCode: 3 },
      { code: "386-387", city: "همدان", parentCode: 3 },
      { code: "503", city: "ابرکوه", parentCode: 4 },
      { code: "444", city: "اردکان", parentCode: 4 },
      { code: "551", city: "اشکذر", parentCode: 4 },
      { code: "447", city: "بافق", parentCode: 4 },
      { code: "561", city: "بهاباد", parentCode: 4 },
      { code: "445", city: "تفت", parentCode: 4 },
      { code: "718", city: "دستگردان", parentCode: 4 },
      { code: "083", city: "طبس", parentCode: 4 },
      { code: "446", city: "مهریز", parentCode: 4 },
      { code: "448", city: "میبد", parentCode: 4 },
      { code: "552", city: "نیر", parentCode: 4 },
      { code: "543", city: "هرات و مروست", parentCode: 4 },
      { code: "442-443", city: "یزد", parentCode: 4 },
      { code: "051", city: "آشتیان", parentCode: 5 },
      { code: "052-053", city: "اراک", parentCode: 5 },
      { code: "058", city: "تفرش", parentCode: 5 },
      { code: "055", city: "خمین", parentCode: 5 },
      { code: "617", city: "خنداب", parentCode: 5 },
      { code: "057", city: "دلیجان", parentCode: 5 },
      { code: "618", city: "زرند مرکزی", parentCode: 5 },
      { code: "059-060", city: "ساوه", parentCode: 5 },
      { code: "061-062", city: "سربند", parentCode: 5 },
      { code: "544", city: "فراهان", parentCode: 5 },
      { code: "056", city: "محلات", parentCode: 5 },
      { code: "571", city: "وفس", parentCode: 5 },
      { code: "593", city: "هندودر", parentCode: 5 },
      { code: "667", city: "ابوموسی", parentCode: 6 },
      { code: "348", city: "بستک", parentCode: 6 },
      { code: "586", city: "بشاگرد", parentCode: 6 },
      { code: "338-339", city: "بندرعباس", parentCode: 6 },
      { code: "343-344", city: "بندرلنگه", parentCode: 6 },
      { code: "346", city: "جاسک", parentCode: 6 },
      { code: "337", city: "حاجی آباد", parentCode: 6 },
      { code: "554", city: "خمیر", parentCode: 6 },
      { code: "469", city: "رودان", parentCode: 6 },
      { code: "537", city: "فین", parentCode: 6 },
      { code: "345", city: "قشم", parentCode: 6 },
      { code: "470", city: "گاوبندی", parentCode: 6 },
      { code: "341-342", city: "میناب", parentCode: 6 },
      { code: " 483-484", city: "ازنا", parentCode: 7 },
      { code: "557", city: "اشترینان", parentCode: 7 },
      { code: "418", city: "الشتر", parentCode: 7 },
      { code: "416-417", city: "الیگودرز", parentCode: 7 },
      { code: "412-413", city: "بروجرد", parentCode: 7 },
      { code: "592", city: "پاپی", parentCode: 7 },
      { code: "612", city: "چغلوندی", parentCode: 7 },
      { code: "613", city: "چگنی", parentCode: 7 },
      { code: "406-407", city: "خرم آباد", parentCode: 7 },
      { code: "421", city: "دورود", parentCode: 7 },
      { code: "598", city: "رومشکان", parentCode: 7 },
      { code: "419", city: "کوهدشت", parentCode: 7 },
      { code: "385", city: "ملاوی(پلدختر)", parentCode: 7 },
      { code: "420", city: "نورآباد(دلفان)", parentCode: 7 },
      { code: "528", city: "ویسیان", parentCode: 7 },
      { code: "213-214", city: "آمل", parentCode: 8 },
      { code: "205-206", city: "بابل", parentCode: 8 },
      { code: "498", city: "بابل", parentCode: 8 },
      { code: "568", city: "بندپی", parentCode: 8 },
      { code: "711", city: "بندپی شرقی", parentCode: 8 },
      { code: "217-218", city: "بهشهر", parentCode: 8 },
      { code: "221", city: "تنکابن", parentCode: 8 },
      { code: "582", city: "جویبار", parentCode: 8 },
      { code: "483", city: "چالوس", parentCode: 8 },
      { code: "625", city: "چمستان", parentCode: 8 },
      { code: "576", city: "چهاردانگه", parentCode: 8 },
      { code: "578", city: "دودانگه", parentCode: 8 },
      { code: "227", city: "رامسر", parentCode: 8 },
      { code: "208-209", city: "ساری", parentCode: 8 },
      { code: "225", city: "سوادکوه", parentCode: 8 },
      { code: "577", city: "شیرگاه", parentCode: 8 },
      { code: "712", city: "عباس آباد", parentCode: 8 },
      { code: "215-216", city: "قائمشهر", parentCode: 8 },
      { code: "626", city: "کجور", parentCode: 8 },
      { code: "627", city: "کلاردشت", parentCode: 8 },
      { code: "579", city: "گلوگاه", parentCode: 8 },
      { code: "713", city: "میاندورود", parentCode: 8 },
      { code: "499", city: "نکاء", parentCode: 8 },
      { code: "222", city: "نور", parentCode: 8 },
      { code: "219-220", city: "نوشهر", parentCode: 8 },
      { code: "500-501", city: "هراز و محمودآباد", parentCode: 8 },
      { code: "623", city: "آزادشهر", parentCode: 9 },
      { code: "497", city: "آق قلا", parentCode: 9 },
      { code: "223", city: "بندرترکمن", parentCode: 9 },
      { code: "689", city: "بندرگز", parentCode: 9 },
      { code: "487", city: "رامیان", parentCode: 9 },
      { code: "226", city: "علی آباد", parentCode: 9 },
      { code: "224", city: "کردکوی", parentCode: 9 },
      { code: "386", city: "کلاله", parentCode: 9 },
      { code: "211-212", city: "گرگان", parentCode: 9 },
      { code: "628", city: "گمیشان", parentCode: 9 },
      { code: "202-203", city: "گنبد کاووس", parentCode: 9 },
      { code: "531", city: "مراوه تپه", parentCode: 9 },
      { code: "288", city: "مینودشت", parentCode: 9 },
      { code: "261", city: "آستارا", parentCode: 10 },
      { code: "273", city: "آستانه", parentCode: 10 },
      { code: "630", city: "املش", parentCode: 10 },
      { code: "264", city: "بندرانزلی", parentCode: 10 },
      { code: "518", city: "خمام", parentCode: 10 },
      { code: "631", city: "رحیم آباد", parentCode: 10 },
      { code: "258-259", city: "رشت", parentCode: 10 },
      { code: "570", city: "رضوانشهر", parentCode: 10 },
      { code: "265", city: "رودبار", parentCode: 10 },
      { code: "268-269", city: "رودسر", parentCode: 10 },
      { code: "653", city: "سنگر", parentCode: 10 },
      { code: "517", city: "سیاهکل", parentCode: 10 },
      { code: "569", city: "شفت", parentCode: 10 },
      { code: "267", city: "صومعه سرا", parentCode: 10 },
      { code: "262-263", city: "طالش", parentCode: 10 },
      { code: "593", city: "عمارلو", parentCode: 10 },
      { code: "266", city: "فومن", parentCode: 10 },
      { code: "693", city: "کوچصفهان", parentCode: 10 },
      { code: "271-272", city: "لاهیجان", parentCode: 10 },
      { code: "694", city: "لشت نشاء", parentCode: 10 },
      { code: "270", city: "لنگرود", parentCode: 10 },
      { code: "516", city: "ماسال و شاندرمن", parentCode: 10 },
      { code: "333-334", city: "اسلام آباد", parentCode: 11 },
      { code: "691", city: "باینگان", parentCode: 11 },
      { code: "323-322", city: "پاوه", parentCode: 11 },
      { code: "595", city: "ثلاث باباجانی", parentCode: 11 },
      { code: "395", city: "جوانرود", parentCode: 11 },
      { code: "641", city: "حمیل", parentCode: 11 },
      { code: "596", city: "روانسر", parentCode: 11 },
      { code: "336", city: "سرپل ذهاب", parentCode: 11 },
      { code: "335", city: "سنقر", parentCode: 11 },
      { code: "496", city: "صحنه", parentCode: 11 },
      { code: "337", city: "قصرشیرین", parentCode: 11 },
      { code: "324-325", city: "کرمانشاه", parentCode: 11 },
      { code: "394", city: "کرند", parentCode: 11 },
      { code: "330", city: "کنگاور", parentCode: 11 },
      { code: "332", city: "گیلانغرب", parentCode: 11 },
      { code: "331", city: "هرسین", parentCode: 11 },
      { code: "687", city: "باشت", parentCode: 12 },
      { code: "422-423", city: "بویراحمد(یاسوج)", parentCode: 12 },
      { code: "599", city: "بهمنی", parentCode: 12 },
      { code: "600", city: "چاروسا", parentCode: 12 },
      { code: "688", city: "دروهان", parentCode: 12 },
      { code: "424-425", city: "کهکیلویه(دهدشت)", parentCode: 12 },
      { code: "426", city: "گچساران(دوگنبدان)", parentCode: 12 },
      { code: "550", city: "لنده", parentCode: 12 },
      { code: "697", city: "مارگون", parentCode: 12 },
      { code: "384", city: "بانه", parentCode: 13 },
      { code: "377-378", city: "بیجار", parentCode: 13 },
      { code: "558", city: "دهگلان", parentCode: 13 },
      { code: "385", city: "دیواندره", parentCode: 13 },
      { code: "646", city: "سروآباد", parentCode: 13 },
      { code: "375-376", city: "سقز", parentCode: 13 },
      { code: "372-373", city: "سنندج", parentCode: 13 },
      { code: "379-380", city: "قروه", parentCode: 13 },
      { code: "383", city: "کامیاران", parentCode: 13 },
      { code: "674", city: "کرانی", parentCode: 13 },
      { code: "381-382", city: "مریوان", parentCode: 13 },
      { code: "676", city: "نمشیر", parentCode: 13 },
      { code: "722", city: "ارزونیه", parentCode: 14 },
      { code: "542", city: "انار", parentCode: 14 },
      { code: "312-313", city: "بافت", parentCode: 14 },
      { code: "317", city: "بردسیر", parentCode: 14 },
      { code: "310-311", city: "بم", parentCode: 14 },
      { code: "302-303", city: "جیرفت", parentCode: 14 },
      { code: "583", city: "رابر", parentCode: 14 },
      { code: "321", city: "راور", parentCode: 14 },
      { code: "382", city: "راین", parentCode: 14 },
      { code: "304-305", city: "رفسنجان", parentCode: 14 },
      { code: "536", city: "رودبار کهنوج", parentCode: 14 },
      { code: "605", city: "ریگان", parentCode: 14 },
      { code: "308-309", city: "زرند", parentCode: 14 },
      { code: "306-307", city: "سیرجان", parentCode: 14 },
      { code: "319", city: "شهداد", parentCode: 14 },
      { code: "313-314", city: "شهربابک", parentCode: 14 },
      { code: "606", city: "عنبرآباد", parentCode: 14 },
      { code: "320", city: "فهرج", parentCode: 14 },
      { code: "698", city: "قلعه گنج", parentCode: 14 },
      { code: "298-299", city: "کرمان", parentCode: 14 },
      { code: "535", city: "کوهبنان", parentCode: 14 },
      { code: "315-316", city: "کهنوج", parentCode: 14 },
      { code: "318", city: "گلباف", parentCode: 14 },
      { code: "607", city: "ماهان", parentCode: 14 },
      { code: "608", city: "منوجان", parentCode: 14 },
      { code: "508", city: "آبیک", parentCode: 15 },
      { code: "538", city: "آوج", parentCode: 15 },
      { code: "728", city: "البرز", parentCode: 15 },
      { code: "509", city: "بوئین زهرا", parentCode: 15 },
      { code: "438-439", city: "تاکستان", parentCode: 15 },
      { code: "580", city: "رودبار الموت", parentCode: 15 },
      { code: "590", city: "رودبار شهرستان", parentCode: 15 },
      { code: "559", city: "ضیاءآباد", parentCode: 15 },
      { code: "588", city: "طارم سفلی", parentCode: 15 },
      { code: "431-432", city: "قزوین", parentCode: 15 },
      { code: "037-038", city: "قم", parentCode: 16 },
      { code: "702", city: "کهک", parentCode: 16 },
      { code: "240-241", city: "آباده", parentCode: 17 },
      { code: "670", city: "آباده طشک", parentCode: 17 },
      { code: "648", city: "ارسنجان", parentCode: 17 },
      { code: "252", city: "استهبان", parentCode: 17 },
      { code: "678", city: "اشکنان", parentCode: 17 },
      { code: "253", city: "اقلید", parentCode: 17 },
      { code: "649", city: "اوز", parentCode: 17 },
      { code: "513", city: "بوانات", parentCode: 17 },
      { code: "546", city: "بیضا", parentCode: 17 },
      { code: "671", city: "جویم", parentCode: 17 },
      { code: "246-247", city: "جهرم", parentCode: 17 },
      { code: "654", city: "حاجی آباد(زرین دشت)", parentCode: 17 },
      { code: "548", city: "خرامه", parentCode: 17 },
      { code: "547", city: "خشت و کمارج", parentCode: 17 },
      { code: "655", city: "خفر", parentCode: 17 },
      { code: "248-249", city: "داراب", parentCode: 17 },
      { code: "253", city: "سپیدان", parentCode: 17 },
      { code: "514", city: "سروستان", parentCode: 17 },
      { code: "665", city: "سعادت آباد", parentCode: 17 },
      { code: "673", city: "شیبکوه", parentCode: 17 },
      { code: "228-229-230", city: "شیراز", parentCode: 17 },
      { code: "679", city: "فراشبند", parentCode: 17 },
      { code: "256-257", city: "فسا", parentCode: 17 },
      { code: "244-245", city: "فیروزآباد", parentCode: 17 },
      { code: "681", city: "قنقری(خرم بید)", parentCode: 17 },
      { code: "723", city: "قیروکارزین", parentCode: 17 },
      { code: "236-237", city: "کازرون", parentCode: 17 },
      { code: "683", city: "کوار", parentCode: 17 },
      { code: "656", city: "کراش", parentCode: 17 },
      { code: "250-251", city: "لارستان", parentCode: 17 },
      { code: "515", city: "لامرد", parentCode: 17 },
      { code: "242-243", city: "مرودشت", parentCode: 17 },
      { code: "238-239", city: "ممسنی", parentCode: 17 },
      { code: "657", city: "مهر", parentCode: 17 },
      { code: "255", city: "نی ریز", parentCode: 17 },
      { code: "684", city: "ایوانکی", parentCode: 18 },
      { code: "700", city: "بسطام", parentCode: 18 },
      { code: "642", city: "بیارجمند", parentCode: 18 },
      { code: "457", city: "دامغان", parentCode: 18 },
      { code: "456", city: "سمنان", parentCode: 18 },
      { code: "458-459", city: "شاهرود", parentCode: 18 },
      { code: "460", city: "گرمسار", parentCode: 18 },
      { code: "530", city: "مهدیشهر", parentCode: 18 },
      { code: "520", city: "میامی", parentCode: 18 },
      { code: "358-359", city: "ایرانشهر", parentCode: 19 },
      { code: "682", city: "بزمان", parentCode: 19 },
      { code: "703", city: "بمپور", parentCode: 19 },
      { code: "364-365", city: "چابهار", parentCode: 19 },
      { code: "371", city: "خاش", parentCode: 19 },
      { code: "701", city: "دشتیاری", parentCode: 19 },
      { code: "720", city: "راسک", parentCode: 19 },
      { code: "366-367", city: "زابل", parentCode: 19 },
      { code: "704", city: "زابلی", parentCode: 19 },
      { code: "361-362", city: "زاهدان", parentCode: 19 },
      { code: "369-370", city: "سراوان", parentCode: 19 },
      { code: "635", city: "سرباز", parentCode: 19 },
      { code: "668", city: "سیب و سوران", parentCode: 19 },
      { code: "533", city: "شهرکی و ناروئی(زهک)", parentCode: 19 },
      { code: "705", city: "شیب آب", parentCode: 19 },
      { code: "699", city: "فنوج", parentCode: 19 },
      { code: "669", city: "قصرقند", parentCode: 19 },
      { code: "725", city: "کنارک", parentCode: 19 },
      { code: "597", city: "لاشار(اسپکه)", parentCode: 19 },
      { code: "611", city: "میرجاوه", parentCode: 19 },
      { code: "525", city: "نیک شهر", parentCode: 19 },
      { code: "181", city: "آبادان", parentCode: 20 },
      { code: "527", city: "آغاجاری", parentCode: 20 },
      { code: "585", city: "اروندکنار", parentCode: 20 },
      { code: "685", city: "امیدیه", parentCode: 20 },
      { code: "663", city: "اندیکا", parentCode: 20 },
      { code: "192-193", city: "اندیمشک", parentCode: 20 },
      { code: "174-175", city: "اهواز", parentCode: 20 },
      { code: "183-184", city: "ایذه", parentCode: 20 },
      { code: "481", city: "باغ ملک", parentCode: 20 },
      { code: "706", city: "بندر امام خمینی", parentCode: 20 },
      { code: "194-195", city: "بندرماهشهر", parentCode: 20 },
      { code: "185-186", city: "بهبهان", parentCode: 20 },
      { code: "182", city: "خرمشهر", parentCode: 20 },
      { code: "199-200", city: "دزفول", parentCode: 20 },
      { code: "198", city: "دشت آزادگان", parentCode: 20 },
      { code: "662", city: "رامشیر", parentCode: 20 },
      { code: "190-191", city: "رامهرمز", parentCode: 20 },
      { code: "692", city: "سردشت", parentCode: 20 },
      { code: "189", city: "شادگان", parentCode: 20 },
      { code: "707", city: "شاوور", parentCode: 20 },
      { code: "526", city: "شوش", parentCode: 20 },
      { code: "187-188", city: "شوشتر", parentCode: 20 },
      { code: "729", city: "گتوند", parentCode: 20 },
      { code: "730", city: "لالی", parentCode: 20 },
      { code: "196-197", city: "مسجدسلیمان", parentCode: 20 },
      { code: "661", city: "هندیجان", parentCode: 20 },
      { code: "680", city: "هویزه", parentCode: 20 },
      { code: "643", city: "احمدآباد", parentCode: 21 },
      { code: "562", city: "بجستان", parentCode: 21 },
      { code: "572", city: "بردسکن", parentCode: 21 },
      { code: "074", city: "تایباد", parentCode: 21 },
      { code: "644", city: "تخت جلگه", parentCode: 21 },
      { code: "072-073", city: "تربت جام", parentCode: 21 },
      { code: "069-070", city: "تربت حیدریه", parentCode: 21 },
      { code: "521", city: "جغتای", parentCode: 21 },
      { code: "573", city: "جوین", parentCode: 21 },
      { code: "522", city: "چناران", parentCode: 21 },
      { code: "724", city: "خلیل آباد", parentCode: 21 },
      { code: "076", city: "خواف", parentCode: 21 },
      { code: "077", city: "درگز", parentCode: 21 },
      { code: "650", city: "رشتخوار", parentCode: 21 },
      { code: "574", city: "زبرخان", parentCode: 21 },
      { code: "078-079", city: "سبزوار", parentCode: 21 },
      { code: "081", city: "سرخس", parentCode: 21 },
      { code: "084", city: "فریمان", parentCode: 21 },
      { code: "651", city: "فیض آباد", parentCode: 21 },
      { code: "086-087", city: "قوچان", parentCode: 21 },
      { code: "089-090", city: "کاشمر", parentCode: 21 },
      { code: "553", city: "کلات", parentCode: 21 },
      { code: "091", city: "گناباد", parentCode: 21 },
      { code: "092-093-094", city: "مشهد", parentCode: 21 },
      { code: "097", city: "مشهد منطقه2", parentCode: 21 },
      { code: "098", city: "مشهد منطقه3", parentCode: 21 },
      { code: "096", city: "مشهد منطقه1", parentCode: 21 },
      { code: "105-106", city: "نیشابور", parentCode: 21 },
      { code: "063", city: "اسفراین", parentCode: 22 },
      { code: "067-068", city: "بجنورد", parentCode: 22 },
      { code: "075", city: "جاجرم", parentCode: 22 },
      { code: "591", city: "رازوجرکلان", parentCode: 22 },
      { code: "082", city: "شیروان", parentCode: 22 },
      { code: "635", city: "فاروج", parentCode: 22 },
      { code: "524", city: "مانه و سملقان", parentCode: 22 },
      { code: "468", city: "اردل", parentCode: 23 },
      { code: "465", city: "بروجن", parentCode: 23 },
      { code: "461-462", city: "شهرکرد", parentCode: 23 },
      { code: "467", city: "فارسان", parentCode: 23 },
      { code: "632", city: "فلارد", parentCode: 23 },
      { code: "555", city: "کوهرنگ", parentCode: 23 },
      { code: "633", city: "کیار", parentCode: 23 },
      { code: "629", city: "گندمان", parentCode: 23 },
      { code: "466", city: "لردگان", parentCode: 23 },
      { code: "696", city: "میانکوه", parentCode: 23 },
      { code: "721", city: "بشرویه", parentCode: 24 },
      { code: "064-065", city: "بیرجند", parentCode: 24 },
      { code: "523", city: "درمیان", parentCode: 24 },
      { code: "652", city: "زیرکوه", parentCode: 24 },
      { code: "719", city: "سرایان", parentCode: 24 },
      { code: "716", city: "سربیشه", parentCode: 24 },
      { code: "085", city: "فردوس", parentCode: 24 },
      { code: "088", city: "قائنات", parentCode: 24 },
      { code: "563", city: "نهبندان", parentCode: 24 },
      { code: "529", city: "بندر دیلم", parentCode: 25 },
      { code: "353", city: "بندر گناوه", parentCode: 25 },
      { code: "349-350", city: "بوشهر", parentCode: 25 },
      { code: "355", city: "تنگستان", parentCode: 25 },
      { code: "609", city: "جم", parentCode: 25 },
      { code: "351-352", city: "دشتستان", parentCode: 25 },
      { code: "354", city: "دشتی", parentCode: 25 },
      { code: "732", city: "دلوار", parentCode: 25 },
      { code: "357", city: "دیر", parentCode: 25 },
      { code: "532", city: "سعد آباد", parentCode: 25 },
      { code: "610", city: "شبانکاره", parentCode: 25 },
      { code: "356", city: "کنگان", parentCode: 25 },
      { code: "556", city: "اسلامشهر", parentCode: 26 },
      { code: "658", city: "پاکدشت", parentCode: 26 },
      {
        code: "001-002-003-004-005-006-007-008",
        city: "تهران مرکزی",
        parentCode: 26,
      },
      { code: "011", city: "تهران جنوب", parentCode: 26 },
      { code: "020", city: "تهران شرق", parentCode: 26 },
      { code: "025", city: "تهرانشمال", parentCode: 26 },
      { code: "015", city: "تهران غرب", parentCode: 26 },
      { code: "043", city: "دماوند", parentCode: 26 },
      { code: "666", city: "رباط کریم", parentCode: 26 },
      { code: "489", city: "ساوجبلاغ", parentCode: 26 },
      { code: "044-045", city: "شمیران", parentCode: 26 },
      { code: "048-049", city: "شهرری", parentCode: 26 },
      { code: "490-491", city: "شهریار", parentCode: 26 },
      { code: "695", city: "طالقان", parentCode: 26 },
      { code: "659", city: "فیروزکوه", parentCode: 26 },
      { code: "031-032", city: "کرج", parentCode: 26 },
      { code: "664", city: "کهریزک", parentCode: 26 },
      { code: "717", city: "نظرآباد", parentCode: 26 },
      { code: "041-042", city: "ورامین", parentCode: 26 },
      { code: "471-472", city: "امور خارجه", parentCode: 27 },
      { code: "454", city: "آبدانان", parentCode: 28 },
      { code: "581", city: "ارکوازی(ملکشاهی)", parentCode: 28 },
      { code: "449-450", city: "ایلام", parentCode: 28 },
      { code: "616", city: "ایوان", parentCode: 28 },
      { code: "534", city: "بدره", parentCode: 28 },
      { code: "455", city: "دره شهر", parentCode: 28 },
      { code: "451", city: "دهلران", parentCode: 28 },
      { code: "726", city: "زرین آباد", parentCode: 28 },
      { code: "634", city: "شیروان لومار", parentCode: 28 },
      { code: "453", city: "شیروان و چرداول", parentCode: 28 },
      { code: "727", city: "موسیان", parentCode: 28 },
      { code: "452", city: "مهران", parentCode: 28 },
      { code: "145-146", city: "اردبیل", parentCode: 29 },
      { code: "731", city: "ارشق", parentCode: 29 },
      { code: "690", city: "انگوت", parentCode: 29 },
      { code: "601", city: "بیله سوار", parentCode: 29 },
      { code: "504", city: "پارس آباد", parentCode: 29 },
      { code: "163", city: "خلخال", parentCode: 29 },
      { code: "714", city: "خورش رستم", parentCode: 29 },
      { code: "715", city: "سرعین", parentCode: 29 },
      { code: "566", city: "سنجبد(کوثر)", parentCode: 29 },
      { code: "166-167", city: "مشکین شهر", parentCode: 29 },
      { code: "161-162", city: "مغان", parentCode: 29 },
      { code: "686", city: "نمین", parentCode: 29 },
      { code: "603", city: "نیر", parentCode: 29 },
      { code: "619", city: "آران و بیدگل", parentCode: 30 },
      { code: "118", city: "اردستان", parentCode: 30 },
      { code: "127-128-129", city: "اصفهان", parentCode: 30 },
      { code: "620", city: "باغ بهادران", parentCode: 30 },
      { code: "621", city: "بوئین و میاندشت", parentCode: 30 },
      { code: "549", city: "تیران و کرون", parentCode: 30 },
      { code: "564", city: "جرقویه", parentCode: 30 },
      { code: "575", city: "چادگان", parentCode: 30 },
      { code: "113-114", city: "خمینی شهر", parentCode: 30 },
      { code: "122", city: "خوانسار", parentCode: 30 },
      { code: "540", city: "خور و بیابانک", parentCode: 30 },
      { code: "660", city: "دولت آباد", parentCode: 30 },
      { code: "120", city: "سمیرم", parentCode: 30 },
      { code: "512", city: "سمیرم سفلی (دهاقان)", parentCode: 30 },
      { code: "510-511", city: "شاهین شهر", parentCode: 30 },
      { code: "119", city: "شهرضا", parentCode: 30 },
      { code: "115", city: "فریدن", parentCode: 30 },
      { code: "112", city: "فریدونشهر", parentCode: 30 },
      { code: "110-111", city: "فلاورجان", parentCode: 30 },
      { code: "125-126", city: "کاشان", parentCode: 30 },
      { code: "565", city: "کوهپایه", parentCode: 30 },
      { code: "121", city: "گلپایگان", parentCode: 30 },
      { code: "116-117", city: "لنجان(زرینشهر)", parentCode: 30 },
      { code: "541", city: "مبارکه", parentCode: 30 },
      { code: "622", city: "میمه", parentCode: 30 },
      { code: "124", city: "نائین", parentCode: 30 },
      { code: "108-109", city: "نجف آباد", parentCode: 30 },
      { code: "123", city: "نطنز", parentCode: 30 },
      { code: "428-427", city: "زنجان", parentCode: 30 },
      { code: "507", city: "ملکان", parentCode: 30 },
      { code: "158", city: "مرند", parentCode: 30 },
      { code: "615", city: "ابهر", parentCode: 30 },
      { code: "615", city: "خرمدره", parentCode: 30 },
      { code: "152-153", city: "میانه", parentCode: 30 },
    ],
    _ = [
      { code: 1, city: "آذربایجان شرقی" },
      { code: 2, city: "آذربایجان غربی" },
      { code: 3, city: "همدان" },
      { code: 4, city: "یزد" },
      { code: 5, city: "مرکزی" },
      { code: 6, city: "هرمزگان" },
      { code: 7, city: "لرستان" },
      { code: 8, city: "مازندران" },
      { code: 9, city: "گلستان" },
      { code: 10, city: "گیلان" },
      { code: 11, city: "کرمانشاه" },
      { code: 12, city: "کهکیلویه و بویراحمد" },
      { code: 13, city: "کردستان" },
      { code: 14, city: "کرمان" },
      { code: 15, city: "قزوین" },
      { code: 16, city: "قم" },
      { code: 17, city: "فارس" },
      { code: 18, city: "سمنان" },
      { code: 19, city: "سیستان و بلوچستان" },
      { code: 20, city: "خوزستان" },
      { code: 21, city: "خراسان رضوی" },
      { code: 22, city: "خراسان شمالی" },
      { code: 23, city: "چهارمحال و بختیاری" },
      { code: 24, city: "خراسان جنوبی" },
      { code: 25, city: "بوشهر" },
      { code: 26, city: "تهران" },
      { code: 27, city: "امور خارجه" },
      { code: 28, city: "ایلام" },
      { code: 29, city: "اردبیل" },
      { code: 30, city: "اصفهان" },
    ];
  function W(e) {
    if (e) {
      if (e && 10 === e.length) {
        var t = e.toString().substring(0, 3),
          c = z.filter(function (e) {
            return e.code.toString().includes(t);
          });
        if (c.length) {
          var o = _.filter(function (e) {
              return e.code === c[0].parentCode;
            }),
            a = c[0].code.toString();
          return {
            city: c[0].city,
            province: o.length ? o[0].city : "unknown",
            codes: a.includes("-") ? a.split("-") : [a],
          };
        }
        return null;
      }
      return null;
    }
  }
  function F(e) {
    if (e) {
      var t = "" + e,
        c = t.length;
      if (
        c < 16 ||
        0 === parseInt(t.substr(1, 10), 10) ||
        0 === parseInt(t.substr(10, 6), 10)
      )
        return !1;
      for (var o = 0, a, n, d = 0; d < 16; d++)
        (a = d % 2 == 0 ? 2 : 1),
          (n = parseInt(t.substr(d, 1), 10) * a),
          (o += n > 9 ? n - 9 : n);
      return o % 10 == 0;
    }
  }
  function q(e, t) {
    void 0 === t &&
      (t = {
        checkValidation: !0,
        detectBankNumber: !1,
        filterValidCardNumbers: !0,
      });
    var c = /([\u06F0-\u06F90-9-_.*]{16,20})/gm,
      o = /[-_.*]/g;
    if (e && c.test(e)) {
      var a = e.match(c),
        d =
          null == a
            ? void 0
            : a.map(function (e, c) {
                var a = o.test(e) ? e.replace(o, "") : e;
                a = i(a) ? n(a) : a;
                var d = { index: c + 1, base: e, pure: a };
                if (
                  (t.checkValidation && (d.isValid = F(Number(a))),
                  t.detectBankNumber)
                ) {
                  var r = K(a);
                  (r || null === r) && (d.bankName = r);
                }
                return d;
              });
      return (
        t.filterValidCardNumbers &&
          t.checkValidation &&
          (d =
            null == d
              ? void 0
              : d.filter(function (e) {
                  return e.isValid;
                })),
        d
      );
    }
    return [];
  }
  var D = [
    { name: "بانک آینده", code: "636214" },
    { name: "بانک اقتصاد نوین", code: "627412" },
    { name: "بانک انصار", code: "627381" },
    { name: "بانک ایران زمین", code: "505785" },
    { name: "بانک پارسیان", code: "622106" },
    { name: "بانک پارسیان", code: "627884" },
    { name: "بانک پاسارگاد", code: "502229" },
    { name: "بانک پاسارگاد", code: "639347" },
    { name: "پست بانک ایران", code: "627760" },
    { name: "بانک تجارت", code: "585983" },
    { name: "بانک تجارت", code: "627353" },
    { name: "بانک توسعه تعاون", code: "502908" },
    { name: "بانک توسعه صادرات", code: "207177" },
    { name: "بانک توسعه صادرات", code: "627648" },
    { name: "بانک حکمت ایرانیان", code: "636949" },
    { name: "بانک خاورمیانه", code: "585949" },
    { name: "بانک دی", code: "502938" },
    { name: "بانک رسالت", code: "504172" },
    { name: "بانک رفاه کارگران", code: "589463" },
    { name: "بانک سامان", code: "621986" },
    { name: "بانک سپه", code: "589210" },
    { name: "بانک سرمایه", code: "639607" },
    { name: "بانک سینا", code: "639346" },
    { name: "بانک شهر", code: "502806" },
    { name: "بانک شهر", code: "504706" },
    { name: "بانک صادرات ایران", code: "603769" },
    { name: "بانک صادرات ایران", code: "903769" },
    { name: "بانک صنعت و معدن", code: "627961" },
    { name: "بانک قرض الحسنه مهر", code: "639370" },
    { name: "بانک قوامین", code: "639599" },
    { name: "بانک کارآفرین", code: "627488" },
    { name: "بانک کشاورزی", code: "603770" },
    { name: "بانک کشاورزی", code: "639217" },
    { name: "بانک گردشگری", code: "505416" },
    { name: "بانک گردشگری", code: "505426" },
    { name: "بانک مرکزی ایران", code: "636797" },
    { name: "بانک مسکن", code: "628023" },
    { name: "بانک ملت", code: "610433" },
    { name: "بانک ملت", code: "991975" },
    { name: "بانک ملی ایران", code: "170019" },
    { name: "بانک ملی ایران", code: "603799" },
    { name: "بانک مهر ایران", code: "606373" },
    { name: "موسسه کوثر", code: "505801" },
    { name: "موسسه اعتباری ملل", code: "606256" },
    { name: "موسسه اعتباری توسعه", code: "628157" },
  ];
  function K(e) {
    if (e) {
      if (e && 16 === e.toString().length) {
        var t = e.toString().substr(0, 6),
          c = D.find(function (e) {
            return e.code === t;
          });
        return c ? c.name : null;
      }
      return null;
    }
  }
  var L = function (e) {
    if (e) {
      for (var t = ""; t !== e; )
        (t = e), (e = e.replace(/(http\S+?)%20/g, "$1‌‌‌_‌‌‌"));
      return (
        (e = e.replace(/(http\S+)/g, function (e, t) {
          return decodeURI(t);
        })),
        (e = e.replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g, "%20")),
        e
      );
    }
  };
  function G(e) {
    if (e) {
      var t = function (e) {
          return e
            .replace(/ی/g, "ي")
            .replace(/ک/g, "ك")
            .replace(/ھ/g, "ه")
            .replace(/پ/g, "بی")
            .replace(/چ/g, "جی")
            .replace(/ڕ/g, "ری")
            .replace(/ژ/g, "زی")
            .replace(/ڤ/g, "فی")
            .replace(/ڵ/g, "لی")
            .replace(/گ/g, "كی")
            .replace(/ۆ/g, "وی")
            .replace(/ە/g, "هی")
            .replace(/ێ/g, "يي");
        },
        c = e.split(" ");
      return (
        c.sort(function (e, c) {
          var o = t(e),
            a = t(c);
          return o < a ? -1 : o > a ? 1 : 0;
        }),
        c
      );
    }
  }
  for (
    var U = function (e) {
        if (e)
          return (
            (e = e.replace(/\u00ad/g, "‌")),
            (e = e.replace(/\u200C{2,}/g, "‌")),
            (e = e.replace(
              /([۰-۹0-9إأةؤورزژاآدذ،؛,:«»\\/@#$٪×*()ـ\-=|])\u200c/g,
              "$1"
            )),
            (e = e.replace(
              /\u200c([\u064e\u0650\u064f\u064b\u064d\u064C\u0651\u06C0])/g,
              "$1"
            )),
            (e = e.replace(/\u200c([\w])/g, "$1")),
            (e = e.replace(/([\w])\u200c/g, "$1")),
            (e = e.replace(/\u200c([\n\s[].،«»:()؛؟?;$!@-=+\\])/g, "$1")),
            (e = e.replace(/([\n\s[.،«»:()؛؟?;$!@\-=+\\])\u200c/g, "$1")),
            (e = e.replace(/\s+\u200C|\u200C\s+/g, " ")),
            (e = e.replace(/((\s|^)ن?می)\u0020/g, "$1‌")),
            (e = e.replace(/((\s|^)بی)\u0020/g, "$1‌")),
            (e = e.replace(/\u0020((ام|ات|اش|ای|اید|ایم|اند)\s)/g, "‌$1")),
            (e = e.replace(/\u0020(ها(ی)?\s)/g, "‌$1")),
            (e = e.replace(/\u0020(تر((ی)|(ین))?\s)/g, "‌$1")),
            (e = e.replace(
              /\u0020((هایی|هایم|هایت|هایش|هایمان|هایتان|هایشان)\s)/g,
              "‌$1"
            )),
            e
          );
      },
      H = {
        1: "آب",
        2: "برق",
        3: "گاز",
        4: "تلفن ثابت",
        5: "تلفن همراه",
        6: "عوارض شهرداری",
        8: "سازمان مالیات",
        9: "جرایم راهنمایی و رانندگی",
      },
      Z = (function () {
        function e(e) {
          var t = e.billId,
            c = e.paymentId,
            o = e.currency,
            a = e.barcode;
          (this.barcode = a || null),
            (this.currency = o || "toman"),
            (this.billId = null),
            (this.billPayment = null),
            (this.billTypes = H),
            t && c && (this.setId(t), this.setPaymentId(c));
        }
        return (
          (e.prototype.setId = function (e) {
            this.billId = e;
          }),
          (e.prototype.setPaymentId = function (e) {
            this.billPayment = e;
          }),
          (e.prototype.getAmount = function () {
            var e = "rial" == this.currency ? 1e3 : 100,
              t = parseInt(("" + this.billPayment).slice(0, -5)) * e;
            return t;
          }),
          (e.prototype.getBillType = function () {
            var e, t;
            return null !==
              (t =
                this.billTypes[
                  Number(
                    null === (e = String(this.billId)) || void 0 === e
                      ? void 0
                      : e.slice(-2, -1)
                  )
                ]) && void 0 !== t
              ? t
              : "unknown";
          }),
          (e.prototype.getBarcode = function () {
            return this.billId + "000" + this.billPayment;
          }),
          (e.prototype.findByBarcode = function (e) {
            var t = e || this.barcode;
            return {
              billId: Number(t.substr(0, 13)),
              paymentId: Number(t.substr(16, 10)),
            };
          }),
          (e.prototype.verificationBillPayment = function () {
            var e = "" + this.billId,
              t = "" + this.billPayment,
              c = !1;
            if (!t || t.length < 6) return c;
            var o = t.charAt(t.length - 2) + "",
              a = t.charAt(t.length - 1) + "";
            return (
              (t = t.substr(0, t.length - 2)),
              (c =
                this.CalTheBit(t) === Number(o) &&
                this.CalTheBit(e + t + o) === Number(a)),
              c
            );
          }),
          (e.prototype.verificationBillId = function () {
            var e = "" + this.billId,
              t = !1;
            if (!e || e.length < 6) return !1;
            var c = e.substr(e.length - 1);
            e = e.substr(0, e.length - 1);
            var o = this.CalTheBit(e);
            t = o === Number(c);
            var a = this.getBillType();
            return t && "unknown" !== a;
          }),
          (e.prototype.CalTheBit = function (e) {
            for (var t = 0, c = 2, o = 0; o < e.length; o++) {
              8 === c && (c = 2);
              var a = e.substring(e.length - 1 - o, e.length - o);
              (t += Number(a) * c), c++;
            }
            return (t %= 11), (t = t < 2 ? 0 : 11 - t), t;
          }),
          (e.prototype.verificationBill = function () {
            return this.verificationBillPayment() && this.verificationBillId();
          }),
          (e.prototype.getResult = function () {
            return {
              amount: this.getAmount(),
              type: this.getBillType(),
              barcode: this.getBarcode(),
              isValid: this.verificationBill(),
              isValidBillId: this.verificationBillId(),
              isValidBillPayment: this.verificationBillPayment(),
            };
          }),
          e
        );
      })(),
      J = [
        {
          nickname: "central-bank",
          name: "Central Bank of Iran",
          persianName: "بانک مرکزی جمهوری اسلامی ایران",
          code: "010",
          accountNumberAvailable: !1,
        },
        {
          nickname: "sanat-o-madan",
          name: "Sanat O Madan Bank",
          persianName: "بانک صنعت و معدن",
          code: "011",
          accountNumberAvailable: !1,
        },
        {
          nickname: "mellat",
          name: "Mellat Bank",
          persianName: "بانک ملت",
          code: "012",
          accountNumberAvailable: !1,
        },
        {
          nickname: "refah",
          name: "Refah Bank",
          persianName: "بانک رفاه کارگران",
          code: "013",
          accountNumberAvailable: !1,
        },
        {
          nickname: "maskan",
          name: "Maskan Bank",
          persianName: "بانک مسکن",
          code: "014",
          accountNumberAvailable: !1,
        },
        {
          nickname: "sepah",
          name: "Sepah Bank",
          persianName: "بانک سپه",
          code: "015",
          accountNumberAvailable: !1,
        },
        {
          nickname: "keshavarzi",
          name: "Keshavarzi",
          persianName: "بانک کشاورزی",
          code: "016",
          accountNumberAvailable: !1,
        },
        {
          nickname: "melli",
          name: "Melli",
          persianName: "بانک ملی ایران",
          code: "017",
          accountNumberAvailable: !1,
        },
        {
          nickname: "tejarat",
          name: "Tejarat Bank",
          persianName: "بانک تجارت",
          code: "018",
          accountNumberAvailable: !1,
        },
        {
          nickname: "saderat",
          name: "Saderat Bank",
          persianName: "بانک صادرات ایران",
          code: "019",
          accountNumberAvailable: !1,
        },
        {
          nickname: "tosee-saderat",
          name: "Tose Saderat Bank",
          persianName: "بانک توسعه صادرات",
          code: "020",
          accountNumberAvailable: !1,
        },
        {
          nickname: "post",
          name: "Post Bank",
          persianName: "پست بانک ایران",
          code: "021",
          accountNumberAvailable: !1,
        },
        {
          nickname: "toose-taavon",
          name: "Tosee Taavon Bank",
          persianName: "بانک توسعه تعاون",
          code: "022",
          accountNumberAvailable: !1,
        },
        {
          nickname: "tosee",
          name: "Tosee Bank",
          persianName: "موسسه اعتباری توسعه",
          code: "051",
          accountNumberAvailable: !1,
        },
        {
          nickname: "ghavamin",
          name: "Ghavamin Bank",
          persianName: "بانک قوامین",
          code: "052",
          accountNumberAvailable: !1,
        },
        {
          nickname: "karafarin",
          name: "Karafarin Bank",
          persianName: "بانک کارآفرین",
          code: "053",
          accountNumberAvailable: !1,
        },
        {
          nickname: "parsian",
          name: "Parsian Bank",
          persianName: "بانک پارسیان",
          code: "054",
          accountNumberAvailable: !0,
          process: function (e) {
            e = e.substring(14);
            var t =
              "0" +
              e.substr(0, 2) +
              "-0" +
              e.substr(2, 7) +
              "-" +
              e.substr(9, 3);
            return { normal: e, formatted: t };
          },
        },
        {
          nickname: "eghtesad-novin",
          name: "Eghtesad Novin Bank",
          persianName: "بانک اقتصاد نوین",
          code: "055",
          accountNumberAvailable: !1,
        },
        {
          nickname: "saman",
          name: "Saman Bank",
          persianName: "بانک سامان",
          code: "056",
          accountNumberAvailable: !1,
        },
        {
          nickname: "pasargad",
          name: "Pasargad Bank",
          persianName: "بانک پاسارگاد",
          code: "057",
          accountNumberAvailable: !0,
          process: function (e) {
            for (e = e.substring(7); "0" === e[0]; ) e = e.substring(1);
            e = e.substr(0, e.length - 2);
            var t =
              e.substr(0, 3) +
              "-" +
              e.substr(3, 3) +
              "-" +
              e.substr(6, 8) +
              "-" +
              e.substr(14, 1);
            return { normal: e, formatted: t };
          },
        },
        {
          nickname: "sarmayeh",
          name: "Sarmayeh Bank",
          persianName: "بانک سرمایه",
          code: "058",
          accountNumberAvailable: !1,
        },
        {
          nickname: "sina",
          name: "Sina Bank",
          persianName: "بانک سینا",
          code: "059",
          accountNumberAvailable: !1,
        },
        {
          nickname: "mehr-iran",
          name: "Mehr Iran Bank",
          persianName: "بانک مهر ایران",
          code: "060",
          accountNumberAvailable: !1,
        },
        {
          nickname: "shahr",
          name: "City Bank",
          persianName: "بانک شهر",
          code: "061",
          accountNumberAvailable: !0,
          process: function (e) {
            for (e = e.substring(7); "0" === e[0]; ) e = e.substring(1);
            return { normal: e, formatted: e };
          },
        },
        {
          nickname: "ayandeh",
          name: "Ayandeh Bank",
          persianName: "بانک آینده",
          code: "062",
          accountNumberAvailable: !1,
        },
        {
          nickname: "ansar",
          name: "Ansar Bank",
          persianName: "بانک انصار",
          code: "063",
          accountNumberAvailable: !1,
        },
        {
          nickname: "gardeshgari",
          name: "Gardeshgari Bank",
          persianName: "بانک گردشگری",
          code: "064",
          accountNumberAvailable: !1,
        },
        {
          nickname: "hekmat-iranian",
          name: "Hekmat Iranian Bank",
          persianName: "بانک حکمت ایرانیان",
          code: "065",
          accountNumberAvailable: !1,
        },
        {
          nickname: "dey",
          name: "Dey Bank",
          persianName: "بانک دی",
          code: "066",
          accountNumberAvailable: !1,
        },
        {
          nickname: "iran-zamin",
          name: "Iran Zamin Bank",
          persianName: "بانک ایران زمین",
          code: "069",
          accountNumberAvailable: !1,
        },
        {
          nickname: "resalat",
          name: "Resalat Bank",
          persianName: "بانک قرض الحسنه رسالت",
          code: "070",
          accountNumberAvailable: !1,
        },
        {
          nickname: "kosar",
          name: "Kosar Credit Institute",
          persianName: "موسسه اعتباری کوثر",
          code: "073",
          accountNumberAvailable: !1,
        },
        {
          nickname: "melal",
          name: "Melal Credit Institute",
          persianName: "موسسه اعتباری ملل",
          code: "075",
          accountNumberAvailable: !1,
        },
        {
          nickname: "middle-east-bank",
          name: "Middle East Bank",
          persianName: "بانک خاورمیانه",
          code: "078",
          accountNumberAvailable: !1,
        },
        {
          nickname: "noor-bank",
          name: "Noor Credit Institution",
          persianName: "موسسه اعتباری نور",
          code: "080",
          accountNumberAvailable: !1,
        },
        {
          nickname: "mehr-eqtesad",
          name: "Mehr Eqtesad Bank",
          persianName: "بانک مهر اقتصاد",
          code: "079",
          accountNumberAvailable: !1,
        },
        {
          nickname: "mehr-iran",
          name: "Mehr Iran Bank",
          persianName: "بانک مهر ایران",
          code: "090",
          accountNumberAvailable: !1,
        },
        {
          nickname: "iran-venezuela",
          name: "Iran and Venezuela Bank",
          persianName: "بانک ایران و ونزوئلا",
          code: "095",
          accountNumberAvailable: !1,
        },
      ],
      Q = {},
      X = 0;
    X < J.length;
    X++
  ) {
    var Y = J[X];
    Q[Y.code] = Y;
  }
  var ee = (function () {
      function e(e) {
        (this.pattern = /IR[0-9]{24}/),
          (this.pattern_code = /IR[0-9]{2}([0-9]{3})[0-9]{19}/),
          (this.shebaCode = e);
      }
      return (
        (e.prototype.iso7064Mod97_10 = function (e) {
          for (var t = e, c; t.length > 2; )
            (c = t.slice(0, 9)),
              (t = (parseInt(c, 10) % 97) + t.slice(c.length));
          return parseInt(t, 10) % 97;
        }),
        (e.prototype.validate = function () {
          var e = this.shebaCode;
          if (26 !== e.length) return !1;
          if (!this.pattern.test(e)) return !1;
          var t = e.charCodeAt(0) - 65 + 10,
            c = e.charCodeAt(1) - 65 + 10,
            o = e.substr(4);
          o += t.toString() + c.toString() + e.substr(2, 2);
          var a = this.iso7064Mod97_10(o);
          return 1 === a;
        }),
        (e.prototype.recognize = function () {
          var e,
            t,
            c = this.shebaCode;
          if (!this.validate()) return null;
          var o = this.pattern_code.exec(c),
            a =
              null !== (e = null == o ? void 0 : o[1]) && void 0 !== e ? e : "",
            n = Q[a];
          if (!n) return null;
          if (n.accountNumberAvailable) {
            var d =
              null === (t = n.process) || void 0 === t ? void 0 : t.call(n, c);
            (n.accountNumber = null == d ? void 0 : d.normal),
              (n.formattedAccountNumber = null == d ? void 0 : d.formatted);
          }
          return delete n.process, n;
        }),
        e
      );
    })(),
    te = "شاتل موبایل",
    ce = "همراه اول",
    oe = "ایرانسل",
    ae = "تالیا",
    ne = "رایتل",
    de = {
      910: {
        base: "کشوری",
        province: [],
        type: ["permanent", "credit"],
        operator: ce,
      },
      914: {
        province: ["آذربایجان شرقی", "اردبیل", "اصفهان"],
        base: "آذربایجان غربی",
        type: ["permanent", "credit"],
        operator: ce,
      },
      911: {
        province: ["گلستان", "گیلان"],
        base: "مازندران",
        type: ["permanent", "credit"],
        operator: ce,
      },
      912: {
        province: [
          "البرز",
          "زنجان",
          "سمنان",
          "قزوین",
          "قم",
          "برخی از شهرستان های استان مرکزی",
        ],
        base: "تهران",
        type: ["permanent"],
        operator: ce,
      },
      913: {
        province: ["یزد", "چهارمحال و بختیاری", "کرمان"],
        base: "اصفهان",
        type: ["permanent", "credit"],
        operator: ce,
      },
      915: {
        province: ["خراسان شمالی", "خراسان جنوبی", "سیستان و بلوچستان"],
        base: "خراسان رضوی",
        type: ["permanent", "credit"],
        operator: ce,
      },
      916: {
        province: ["لرستان", "فارس", "اصفهان"],
        base: "خوزستان",
        type: ["permanent", "credit"],
        operator: ce,
      },
      917: {
        province: ["بوشهر", "کهگیلویه و بویر احمد", "هرمزگان"],
        base: "فارس",
        type: ["permanent", "credit"],
        operator: ce,
      },
      918: {
        province: ["کردستان", "ایلام", "همدان"],
        base: "کرمانشاه",
        type: ["permanent", "credit"],
        operator: ce,
      },
      919: {
        province: ["البرز", "سمنان", "قم", "قزوین", "زنجان"],
        base: "تهران",
        type: ["credit"],
        operator: ce,
      },
      990: { province: [], base: "کشوری", type: ["credit"], operator: ce },
      991: {
        province: [],
        base: "کشوری",
        type: ["permanent", "credit"],
        operator: ce,
      },
      992: { province: [], base: "کشوری", type: ["credit"], operator: ce },
      993: { province: [], base: "کشوری", type: ["credit"], operator: ce },
      994: { province: [], base: "کشوری", type: ["credit"], operator: ce },
    },
    re = {
      932: { province: [], base: "کشوری", type: ["credit"], operator: ae },
    },
    ie = {
      920: { province: [], base: "کشوری", type: ["permanent"], operator: ne },
      921: { province: [], base: "کشوری", type: ["credit"], operator: ne },
      922: { province: [], base: "کشوری", type: ["credit"], operator: ne },
    },
    pe = {
      province: [],
      base: "کشوری",
      type: ["permanent", "credit"],
      operator: oe,
    },
    ye = {
      930: pe,
      933: pe,
      935: pe,
      936: pe,
      937: pe,
      938: pe,
      939: pe,
      901: pe,
      902: pe,
      903: pe,
      905: pe,
      904: {
        province: [],
        base: "کشوری",
        model: "سیم‌کارت کودک",
        type: ["credit"],
        operator: oe,
      },
      941: {
        province: [],
        base: "کشوری",
        model: "TD-LTE",
        type: ["credit"],
        operator: oe,
      },
    },
    Ce = {
      998: { province: [], base: "کشوری", type: ["credit"], operator: te },
    },
    ue = k(
      Object.keys(de),
      Object.keys(re),
      Object.keys(ie),
      Object.keys(ye),
      Object.keys(Ce)
    ),
    le = h(h(h(h(h({}, de), re), ye), Ce), ie),
    se = /^(?:[+|0{2}]?98)?(?:0)?(\d{3})+(\d{3})+(\d{4})$/;
  function me(e) {
    var t,
      c = null === (t = ("" + e).match(se)) || void 0 === t ? void 0 : t[1];
    return null != c ? c : "";
  }
  function fe(e) {
    return se.test(e) && ue.includes(me(e));
  }
  function be(e) {
    if (fe(e)) {
      var t = me(e);
      return le[t];
    }
    return null;
  }
  (e.Bill = Z),
    (e.NumberToWords = v),
    (e.Sheba = ee),
    (e.SortText = G),
    (e.URLfix = L),
    (e.WordsToNumber = R),
    (e.addCommas = u),
    (e.addOrdinalSuffix = s),
    (e.digitsArToEn = r),
    (e.digitsArToFa = d),
    (e.digitsEnToFa = a),
    (e.digitsFaToEn = n),
    (e.extractCardNumber = q),
    (e.getBankNameFromCardNumber = K),
    (e.getPlaceByIranNationalId = W),
    (e.halfSpace = U),
    (e.isPersian = i),
    (e.phoneNumberDetail = be),
    (e.phoneNumberValidator = fe),
    (e.removeCommas = l),
    (e.removeOrdinalSuffix = g),
    (e.toPersianChars = p),
    (e.verifyCardNumber = F),
    (e.verifyIranianNationalId = V),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
