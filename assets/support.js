(() => {
  var Io = Object.create;
  var Oi = Object.defineProperty;
  var Fo = Object.getOwnPropertyDescriptor;
  var No = Object.getOwnPropertyNames;
  var Lo = Object.getPrototypeOf,
    ko = Object.prototype.hasOwnProperty;
  var Ur = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var jo = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of No(t))
        !ko.call(e, o) &&
          o !== n &&
          Oi(e, o, {
            get: () => t[o],
            enumerable: !(r = Fo(t, o)) || r.enumerable,
          });
    return e;
  };
  var Bo = (e, t, n) => (
    (n = e != null ? Io(Lo(e)) : {}),
    jo(
      t || !e || !e.__esModule
        ? Oi(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  );
  var eo = Ur(() => {});
  var to = Ur(() => {});
  var no = Ur((hs, pr) => {
    (function () {
      "use strict";
      var e = "input is invalid type",
        t = "finalize already called",
        n = typeof window == "object",
        r = n ? window : {};
      r.JS_MD5_NO_WINDOW && (n = !1);
      var o = !n && typeof self == "object",
        i =
          !r.JS_MD5_NO_NODE_JS &&
          typeof process == "object" &&
          process.versions &&
          process.versions.node;
      i ? (r = global) : o && (r = self);
      var s = !r.JS_MD5_NO_COMMON_JS && typeof pr == "object" && pr.exports,
        u = typeof define == "function" && define.amd,
        h = !r.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
        p = "0123456789abcdef".split(""),
        x = [128, 32768, 8388608, -2147483648],
        b = [0, 8, 16, 24],
        E = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
        _ =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
            ""
          ),
        C = [],
        M;
      if (h) {
        var U = new ArrayBuffer(68);
        (M = new Uint8Array(U)), (C = new Uint32Array(U));
      }
      var V = Array.isArray;
      (r.JS_MD5_NO_NODE_JS || !V) &&
        (V = function (l) {
          return Object.prototype.toString.call(l) === "[object Array]";
        });
      var B = ArrayBuffer.isView;
      h &&
        (r.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !B) &&
        (B = function (l) {
          return (
            typeof l == "object" &&
            l.buffer &&
            l.buffer.constructor === ArrayBuffer
          );
        });
      var Q = function (l) {
          var d = typeof l;
          if (d === "string") return [l, !0];
          if (d !== "object" || l === null) throw new Error(e);
          if (h && l.constructor === ArrayBuffer)
            return [new Uint8Array(l), !1];
          if (!V(l) && !B(l)) throw new Error(e);
          return [l, !1];
        },
        q = function (l) {
          return function (d) {
            return new R(!0).update(d)[l]();
          };
        },
        xe = function () {
          var l = q("hex");
          i && (l = se(l)),
            (l.create = function () {
              return new R();
            }),
            (l.update = function (c) {
              return l.create().update(c);
            });
          for (var d = 0; d < E.length; ++d) {
            var v = E[d];
            l[v] = q(v);
          }
          return l;
        },
        se = function (l) {
          var d = eo(),
            v = to().Buffer,
            c;
          v.from && !r.JS_MD5_NO_BUFFER_FROM
            ? (c = v.from)
            : (c = function (T) {
                return new v(T);
              });
          var H = function (T) {
            if (typeof T == "string")
              return d.createHash("md5").update(T, "utf8").digest("hex");
            if (T == null) throw new Error(e);
            return (
              T.constructor === ArrayBuffer && (T = new Uint8Array(T)),
              V(T) || B(T) || T.constructor === v
                ? d.createHash("md5").update(c(T)).digest("hex")
                : l(T)
            );
          };
          return H;
        },
        ie = function (l) {
          return function (d, v) {
            return new fe(d, !0).update(v)[l]();
          };
        },
        be = function () {
          var l = ie("hex");
          (l.create = function (c) {
            return new fe(c);
          }),
            (l.update = function (c, H) {
              return l.create(c).update(H);
            });
          for (var d = 0; d < E.length; ++d) {
            var v = E[d];
            l[v] = ie(v);
          }
          return l;
        };
      function R(l) {
        if (l)
          (C[0] =
            C[16] =
            C[1] =
            C[2] =
            C[3] =
            C[4] =
            C[5] =
            C[6] =
            C[7] =
            C[8] =
            C[9] =
            C[10] =
            C[11] =
            C[12] =
            C[13] =
            C[14] =
            C[15] =
              0),
            (this.blocks = C),
            (this.buffer8 = M);
        else if (h) {
          var d = new ArrayBuffer(68);
          (this.buffer8 = new Uint8Array(d)),
            (this.blocks = new Uint32Array(d));
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        (this.h0 =
          this.h1 =
          this.h2 =
          this.h3 =
          this.start =
          this.bytes =
          this.hBytes =
            0),
          (this.finalized = this.hashed = !1),
          (this.first = !0);
      }
      (R.prototype.update = function (l) {
        if (this.finalized) throw new Error(t);
        var d = Q(l);
        l = d[0];
        for (
          var v = d[1],
            c,
            H = 0,
            T,
            P = l.length,
            G = this.blocks,
            ze = this.buffer8;
          H < P;

        ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (G[0] = G[16]),
              (G[16] =
                G[1] =
                G[2] =
                G[3] =
                G[4] =
                G[5] =
                G[6] =
                G[7] =
                G[8] =
                G[9] =
                G[10] =
                G[11] =
                G[12] =
                G[13] =
                G[14] =
                G[15] =
                  0)),
            v)
          )
            if (h)
              for (T = this.start; H < P && T < 64; ++H)
                (c = l.charCodeAt(H)),
                  c < 128
                    ? (ze[T++] = c)
                    : c < 2048
                    ? ((ze[T++] = 192 | (c >>> 6)), (ze[T++] = 128 | (c & 63)))
                    : c < 55296 || c >= 57344
                    ? ((ze[T++] = 224 | (c >>> 12)),
                      (ze[T++] = 128 | ((c >>> 6) & 63)),
                      (ze[T++] = 128 | (c & 63)))
                    : ((c =
                        65536 +
                        (((c & 1023) << 10) | (l.charCodeAt(++H) & 1023))),
                      (ze[T++] = 240 | (c >>> 18)),
                      (ze[T++] = 128 | ((c >>> 12) & 63)),
                      (ze[T++] = 128 | ((c >>> 6) & 63)),
                      (ze[T++] = 128 | (c & 63)));
            else
              for (T = this.start; H < P && T < 64; ++H)
                (c = l.charCodeAt(H)),
                  c < 128
                    ? (G[T >>> 2] |= c << b[T++ & 3])
                    : c < 2048
                    ? ((G[T >>> 2] |= (192 | (c >>> 6)) << b[T++ & 3]),
                      (G[T >>> 2] |= (128 | (c & 63)) << b[T++ & 3]))
                    : c < 55296 || c >= 57344
                    ? ((G[T >>> 2] |= (224 | (c >>> 12)) << b[T++ & 3]),
                      (G[T >>> 2] |= (128 | ((c >>> 6) & 63)) << b[T++ & 3]),
                      (G[T >>> 2] |= (128 | (c & 63)) << b[T++ & 3]))
                    : ((c =
                        65536 +
                        (((c & 1023) << 10) | (l.charCodeAt(++H) & 1023))),
                      (G[T >>> 2] |= (240 | (c >>> 18)) << b[T++ & 3]),
                      (G[T >>> 2] |= (128 | ((c >>> 12) & 63)) << b[T++ & 3]),
                      (G[T >>> 2] |= (128 | ((c >>> 6) & 63)) << b[T++ & 3]),
                      (G[T >>> 2] |= (128 | (c & 63)) << b[T++ & 3]));
          else if (h) for (T = this.start; H < P && T < 64; ++H) ze[T++] = l[H];
          else
            for (T = this.start; H < P && T < 64; ++H)
              G[T >>> 2] |= l[H] << b[T++ & 3];
          (this.lastByteIndex = T),
            (this.bytes += T - this.start),
            T >= 64
              ? ((this.start = T - 64), this.hash(), (this.hashed = !0))
              : (this.start = T);
        }
        return (
          this.bytes > 4294967295 &&
            ((this.hBytes += (this.bytes / 4294967296) << 0),
            (this.bytes = this.bytes % 4294967296)),
          this
        );
      }),
        (R.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var l = this.blocks,
              d = this.lastByteIndex;
            (l[d >>> 2] |= x[d & 3]),
              d >= 56 &&
                (this.hashed || this.hash(),
                (l[0] = l[16]),
                (l[16] =
                  l[1] =
                  l[2] =
                  l[3] =
                  l[4] =
                  l[5] =
                  l[6] =
                  l[7] =
                  l[8] =
                  l[9] =
                  l[10] =
                  l[11] =
                  l[12] =
                  l[13] =
                  l[14] =
                  l[15] =
                    0)),
              (l[14] = this.bytes << 3),
              (l[15] = (this.hBytes << 3) | (this.bytes >>> 29)),
              this.hash();
          }
        }),
        (R.prototype.hash = function () {
          var l,
            d,
            v,
            c,
            H,
            T,
            P = this.blocks;
          this.first
            ? ((l = P[0] - 680876937),
              (l = (((l << 7) | (l >>> 25)) - 271733879) << 0),
              (c = (-1732584194 ^ (l & 2004318071)) + P[1] - 117830708),
              (c = (((c << 12) | (c >>> 20)) + l) << 0),
              (v = (-271733879 ^ (c & (l ^ -271733879))) + P[2] - 1126478375),
              (v = (((v << 17) | (v >>> 15)) + c) << 0),
              (d = (l ^ (v & (c ^ l))) + P[3] - 1316259209),
              (d = (((d << 22) | (d >>> 10)) + v) << 0))
            : ((l = this.h0),
              (d = this.h1),
              (v = this.h2),
              (c = this.h3),
              (l += (c ^ (d & (v ^ c))) + P[0] - 680876936),
              (l = (((l << 7) | (l >>> 25)) + d) << 0),
              (c += (v ^ (l & (d ^ v))) + P[1] - 389564586),
              (c = (((c << 12) | (c >>> 20)) + l) << 0),
              (v += (d ^ (c & (l ^ d))) + P[2] + 606105819),
              (v = (((v << 17) | (v >>> 15)) + c) << 0),
              (d += (l ^ (v & (c ^ l))) + P[3] - 1044525330),
              (d = (((d << 22) | (d >>> 10)) + v) << 0)),
            (l += (c ^ (d & (v ^ c))) + P[4] - 176418897),
            (l = (((l << 7) | (l >>> 25)) + d) << 0),
            (c += (v ^ (l & (d ^ v))) + P[5] + 1200080426),
            (c = (((c << 12) | (c >>> 20)) + l) << 0),
            (v += (d ^ (c & (l ^ d))) + P[6] - 1473231341),
            (v = (((v << 17) | (v >>> 15)) + c) << 0),
            (d += (l ^ (v & (c ^ l))) + P[7] - 45705983),
            (d = (((d << 22) | (d >>> 10)) + v) << 0),
            (l += (c ^ (d & (v ^ c))) + P[8] + 1770035416),
            (l = (((l << 7) | (l >>> 25)) + d) << 0),
            (c += (v ^ (l & (d ^ v))) + P[9] - 1958414417),
            (c = (((c << 12) | (c >>> 20)) + l) << 0),
            (v += (d ^ (c & (l ^ d))) + P[10] - 42063),
            (v = (((v << 17) | (v >>> 15)) + c) << 0),
            (d += (l ^ (v & (c ^ l))) + P[11] - 1990404162),
            (d = (((d << 22) | (d >>> 10)) + v) << 0),
            (l += (c ^ (d & (v ^ c))) + P[12] + 1804603682),
            (l = (((l << 7) | (l >>> 25)) + d) << 0),
            (c += (v ^ (l & (d ^ v))) + P[13] - 40341101),
            (c = (((c << 12) | (c >>> 20)) + l) << 0),
            (v += (d ^ (c & (l ^ d))) + P[14] - 1502002290),
            (v = (((v << 17) | (v >>> 15)) + c) << 0),
            (d += (l ^ (v & (c ^ l))) + P[15] + 1236535329),
            (d = (((d << 22) | (d >>> 10)) + v) << 0),
            (l += (v ^ (c & (d ^ v))) + P[1] - 165796510),
            (l = (((l << 5) | (l >>> 27)) + d) << 0),
            (c += (d ^ (v & (l ^ d))) + P[6] - 1069501632),
            (c = (((c << 9) | (c >>> 23)) + l) << 0),
            (v += (l ^ (d & (c ^ l))) + P[11] + 643717713),
            (v = (((v << 14) | (v >>> 18)) + c) << 0),
            (d += (c ^ (l & (v ^ c))) + P[0] - 373897302),
            (d = (((d << 20) | (d >>> 12)) + v) << 0),
            (l += (v ^ (c & (d ^ v))) + P[5] - 701558691),
            (l = (((l << 5) | (l >>> 27)) + d) << 0),
            (c += (d ^ (v & (l ^ d))) + P[10] + 38016083),
            (c = (((c << 9) | (c >>> 23)) + l) << 0),
            (v += (l ^ (d & (c ^ l))) + P[15] - 660478335),
            (v = (((v << 14) | (v >>> 18)) + c) << 0),
            (d += (c ^ (l & (v ^ c))) + P[4] - 405537848),
            (d = (((d << 20) | (d >>> 12)) + v) << 0),
            (l += (v ^ (c & (d ^ v))) + P[9] + 568446438),
            (l = (((l << 5) | (l >>> 27)) + d) << 0),
            (c += (d ^ (v & (l ^ d))) + P[14] - 1019803690),
            (c = (((c << 9) | (c >>> 23)) + l) << 0),
            (v += (l ^ (d & (c ^ l))) + P[3] - 187363961),
            (v = (((v << 14) | (v >>> 18)) + c) << 0),
            (d += (c ^ (l & (v ^ c))) + P[8] + 1163531501),
            (d = (((d << 20) | (d >>> 12)) + v) << 0),
            (l += (v ^ (c & (d ^ v))) + P[13] - 1444681467),
            (l = (((l << 5) | (l >>> 27)) + d) << 0),
            (c += (d ^ (v & (l ^ d))) + P[2] - 51403784),
            (c = (((c << 9) | (c >>> 23)) + l) << 0),
            (v += (l ^ (d & (c ^ l))) + P[7] + 1735328473),
            (v = (((v << 14) | (v >>> 18)) + c) << 0),
            (d += (c ^ (l & (v ^ c))) + P[12] - 1926607734),
            (d = (((d << 20) | (d >>> 12)) + v) << 0),
            (H = d ^ v),
            (l += (H ^ c) + P[5] - 378558),
            (l = (((l << 4) | (l >>> 28)) + d) << 0),
            (c += (H ^ l) + P[8] - 2022574463),
            (c = (((c << 11) | (c >>> 21)) + l) << 0),
            (T = c ^ l),
            (v += (T ^ d) + P[11] + 1839030562),
            (v = (((v << 16) | (v >>> 16)) + c) << 0),
            (d += (T ^ v) + P[14] - 35309556),
            (d = (((d << 23) | (d >>> 9)) + v) << 0),
            (H = d ^ v),
            (l += (H ^ c) + P[1] - 1530992060),
            (l = (((l << 4) | (l >>> 28)) + d) << 0),
            (c += (H ^ l) + P[4] + 1272893353),
            (c = (((c << 11) | (c >>> 21)) + l) << 0),
            (T = c ^ l),
            (v += (T ^ d) + P[7] - 155497632),
            (v = (((v << 16) | (v >>> 16)) + c) << 0),
            (d += (T ^ v) + P[10] - 1094730640),
            (d = (((d << 23) | (d >>> 9)) + v) << 0),
            (H = d ^ v),
            (l += (H ^ c) + P[13] + 681279174),
            (l = (((l << 4) | (l >>> 28)) + d) << 0),
            (c += (H ^ l) + P[0] - 358537222),
            (c = (((c << 11) | (c >>> 21)) + l) << 0),
            (T = c ^ l),
            (v += (T ^ d) + P[3] - 722521979),
            (v = (((v << 16) | (v >>> 16)) + c) << 0),
            (d += (T ^ v) + P[6] + 76029189),
            (d = (((d << 23) | (d >>> 9)) + v) << 0),
            (H = d ^ v),
            (l += (H ^ c) + P[9] - 640364487),
            (l = (((l << 4) | (l >>> 28)) + d) << 0),
            (c += (H ^ l) + P[12] - 421815835),
            (c = (((c << 11) | (c >>> 21)) + l) << 0),
            (T = c ^ l),
            (v += (T ^ d) + P[15] + 530742520),
            (v = (((v << 16) | (v >>> 16)) + c) << 0),
            (d += (T ^ v) + P[2] - 995338651),
            (d = (((d << 23) | (d >>> 9)) + v) << 0),
            (l += (v ^ (d | ~c)) + P[0] - 198630844),
            (l = (((l << 6) | (l >>> 26)) + d) << 0),
            (c += (d ^ (l | ~v)) + P[7] + 1126891415),
            (c = (((c << 10) | (c >>> 22)) + l) << 0),
            (v += (l ^ (c | ~d)) + P[14] - 1416354905),
            (v = (((v << 15) | (v >>> 17)) + c) << 0),
            (d += (c ^ (v | ~l)) + P[5] - 57434055),
            (d = (((d << 21) | (d >>> 11)) + v) << 0),
            (l += (v ^ (d | ~c)) + P[12] + 1700485571),
            (l = (((l << 6) | (l >>> 26)) + d) << 0),
            (c += (d ^ (l | ~v)) + P[3] - 1894986606),
            (c = (((c << 10) | (c >>> 22)) + l) << 0),
            (v += (l ^ (c | ~d)) + P[10] - 1051523),
            (v = (((v << 15) | (v >>> 17)) + c) << 0),
            (d += (c ^ (v | ~l)) + P[1] - 2054922799),
            (d = (((d << 21) | (d >>> 11)) + v) << 0),
            (l += (v ^ (d | ~c)) + P[8] + 1873313359),
            (l = (((l << 6) | (l >>> 26)) + d) << 0),
            (c += (d ^ (l | ~v)) + P[15] - 30611744),
            (c = (((c << 10) | (c >>> 22)) + l) << 0),
            (v += (l ^ (c | ~d)) + P[6] - 1560198380),
            (v = (((v << 15) | (v >>> 17)) + c) << 0),
            (d += (c ^ (v | ~l)) + P[13] + 1309151649),
            (d = (((d << 21) | (d >>> 11)) + v) << 0),
            (l += (v ^ (d | ~c)) + P[4] - 145523070),
            (l = (((l << 6) | (l >>> 26)) + d) << 0),
            (c += (d ^ (l | ~v)) + P[11] - 1120210379),
            (c = (((c << 10) | (c >>> 22)) + l) << 0),
            (v += (l ^ (c | ~d)) + P[2] + 718787259),
            (v = (((v << 15) | (v >>> 17)) + c) << 0),
            (d += (c ^ (v | ~l)) + P[9] - 343485551),
            (d = (((d << 21) | (d >>> 11)) + v) << 0),
            this.first
              ? ((this.h0 = (l + 1732584193) << 0),
                (this.h1 = (d - 271733879) << 0),
                (this.h2 = (v - 1732584194) << 0),
                (this.h3 = (c + 271733878) << 0),
                (this.first = !1))
              : ((this.h0 = (this.h0 + l) << 0),
                (this.h1 = (this.h1 + d) << 0),
                (this.h2 = (this.h2 + v) << 0),
                (this.h3 = (this.h3 + c) << 0));
        }),
        (R.prototype.hex = function () {
          this.finalize();
          var l = this.h0,
            d = this.h1,
            v = this.h2,
            c = this.h3;
          return (
            p[(l >>> 4) & 15] +
            p[l & 15] +
            p[(l >>> 12) & 15] +
            p[(l >>> 8) & 15] +
            p[(l >>> 20) & 15] +
            p[(l >>> 16) & 15] +
            p[(l >>> 28) & 15] +
            p[(l >>> 24) & 15] +
            p[(d >>> 4) & 15] +
            p[d & 15] +
            p[(d >>> 12) & 15] +
            p[(d >>> 8) & 15] +
            p[(d >>> 20) & 15] +
            p[(d >>> 16) & 15] +
            p[(d >>> 28) & 15] +
            p[(d >>> 24) & 15] +
            p[(v >>> 4) & 15] +
            p[v & 15] +
            p[(v >>> 12) & 15] +
            p[(v >>> 8) & 15] +
            p[(v >>> 20) & 15] +
            p[(v >>> 16) & 15] +
            p[(v >>> 28) & 15] +
            p[(v >>> 24) & 15] +
            p[(c >>> 4) & 15] +
            p[c & 15] +
            p[(c >>> 12) & 15] +
            p[(c >>> 8) & 15] +
            p[(c >>> 20) & 15] +
            p[(c >>> 16) & 15] +
            p[(c >>> 28) & 15] +
            p[(c >>> 24) & 15]
          );
        }),
        (R.prototype.toString = R.prototype.hex),
        (R.prototype.digest = function () {
          this.finalize();
          var l = this.h0,
            d = this.h1,
            v = this.h2,
            c = this.h3;
          return [
            l & 255,
            (l >>> 8) & 255,
            (l >>> 16) & 255,
            (l >>> 24) & 255,
            d & 255,
            (d >>> 8) & 255,
            (d >>> 16) & 255,
            (d >>> 24) & 255,
            v & 255,
            (v >>> 8) & 255,
            (v >>> 16) & 255,
            (v >>> 24) & 255,
            c & 255,
            (c >>> 8) & 255,
            (c >>> 16) & 255,
            (c >>> 24) & 255,
          ];
        }),
        (R.prototype.array = R.prototype.digest),
        (R.prototype.arrayBuffer = function () {
          this.finalize();
          var l = new ArrayBuffer(16),
            d = new Uint32Array(l);
          return (
            (d[0] = this.h0),
            (d[1] = this.h1),
            (d[2] = this.h2),
            (d[3] = this.h3),
            l
          );
        }),
        (R.prototype.buffer = R.prototype.arrayBuffer),
        (R.prototype.base64 = function () {
          for (var l, d, v, c = "", H = this.array(), T = 0; T < 15; )
            (l = H[T++]),
              (d = H[T++]),
              (v = H[T++]),
              (c +=
                _[l >>> 2] +
                _[((l << 4) | (d >>> 4)) & 63] +
                _[((d << 2) | (v >>> 6)) & 63] +
                _[v & 63]);
          return (l = H[T]), (c += _[l >>> 2] + _[(l << 4) & 63] + "=="), c;
        });
      function fe(l, d) {
        var v,
          c = Q(l);
        if (((l = c[0]), c[1])) {
          var H = [],
            T = l.length,
            P = 0,
            G;
          for (v = 0; v < T; ++v)
            (G = l.charCodeAt(v)),
              G < 128
                ? (H[P++] = G)
                : G < 2048
                ? ((H[P++] = 192 | (G >>> 6)), (H[P++] = 128 | (G & 63)))
                : G < 55296 || G >= 57344
                ? ((H[P++] = 224 | (G >>> 12)),
                  (H[P++] = 128 | ((G >>> 6) & 63)),
                  (H[P++] = 128 | (G & 63)))
                : ((G =
                    65536 + (((G & 1023) << 10) | (l.charCodeAt(++v) & 1023))),
                  (H[P++] = 240 | (G >>> 18)),
                  (H[P++] = 128 | ((G >>> 12) & 63)),
                  (H[P++] = 128 | ((G >>> 6) & 63)),
                  (H[P++] = 128 | (G & 63)));
          l = H;
        }
        l.length > 64 && (l = new R(!0).update(l).array());
        var ze = [],
          Dt = [];
        for (v = 0; v < 64; ++v) {
          var jt = l[v] || 0;
          (ze[v] = 92 ^ jt), (Dt[v] = 54 ^ jt);
        }
        R.call(this, d),
          this.update(Dt),
          (this.oKeyPad = ze),
          (this.inner = !0),
          (this.sharedMemory = d);
      }
      (fe.prototype = new R()),
        (fe.prototype.finalize = function () {
          if ((R.prototype.finalize.call(this), this.inner)) {
            this.inner = !1;
            var l = this.array();
            R.call(this, this.sharedMemory),
              this.update(this.oKeyPad),
              this.update(l),
              R.prototype.finalize.call(this);
          }
        });
      var ce = xe();
      (ce.md5 = ce),
        (ce.md5.hmac = be()),
        s
          ? (pr.exports = ce)
          : ((r.md5 = ce),
            u &&
              define(function () {
                return ce;
              }));
    })();
  });
  function Ot(e) {
    return e.split("-")[0];
  }
  function cn(e) {
    return e.split("-")[1];
  }
  function On(e) {
    return ["top", "bottom"].includes(Ot(e)) ? "x" : "y";
  }
  function Gr(e) {
    return e === "y" ? "height" : "width";
  }
  function Si(e, t, n) {
    let { reference: r, floating: o } = e,
      i = r.x + r.width / 2 - o.width / 2,
      s = r.y + r.height / 2 - o.height / 2,
      u = On(t),
      h = Gr(u),
      p = r[h] / 2 - o[h] / 2,
      x = Ot(t),
      b = u === "x",
      E;
    switch (x) {
      case "top":
        E = { x: i, y: r.y - o.height };
        break;
      case "bottom":
        E = { x: i, y: r.y + r.height };
        break;
      case "right":
        E = { x: r.x + r.width, y: s };
        break;
      case "left":
        E = { x: r.x - o.width, y: s };
        break;
      default:
        E = { x: r.x, y: r.y };
    }
    switch (cn(t)) {
      case "start":
        E[u] -= p * (n && b ? -1 : 1);
        break;
      case "end":
        E[u] += p * (n && b ? -1 : 1);
        break;
    }
    return E;
  }
  var Ho = async (e, t, n) => {
    let {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s,
      } = n,
      u = await (s.isRTL == null ? void 0 : s.isRTL(t));
    if (
      (s == null &&
        console.error(
          [
            "Floating UI: `platform` property was not passed to config. If you",
            "want to use Floating UI on the web, install @floating-ui/dom",
            "instead of the /core package. Otherwise, you can create your own",
            "`platform`: https://floating-ui.com/docs/platform",
          ].join(" ")
        ),
      i.filter((C) => {
        let { name: M } = C;
        return M === "autoPlacement" || M === "flip";
      }).length > 1)
    )
      throw new Error(
        [
          "Floating UI: duplicate `flip` and/or `autoPlacement`",
          "middleware detected. This will lead to an infinite loop. Ensure only",
          "one of either has been passed to the `middleware` array.",
        ].join(" ")
      );
    let h = await s.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: p, y: x } = Si(h, r, u),
      b = r,
      E = {},
      _ = 0;
    for (let C = 0; C < i.length; C++) {
      if ((_++, _ > 100))
        throw new Error(
          [
            "Floating UI: The middleware lifecycle appears to be",
            "running in an infinite loop. This is usually caused by a `reset`",
            "continually being returned without a break condition.",
          ].join(" ")
        );
      let { name: M, fn: U } = i[C],
        {
          x: V,
          y: B,
          data: Q,
          reset: q,
        } = await U({
          x: p,
          y: x,
          initialPlacement: r,
          placement: b,
          strategy: o,
          middlewareData: E,
          rects: h,
          platform: s,
          elements: { reference: e, floating: t },
        });
      if (
        ((p = V ?? p), (x = B ?? x), (E = { ...E, [M]: { ...E[M], ...Q } }), q)
      ) {
        typeof q == "object" &&
          (q.placement && (b = q.placement),
          q.rects &&
            (h =
              q.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : q.rects),
          ({ x: p, y: x } = Si(h, b, u))),
          (C = -1);
        continue;
      }
    }
    return { x: p, y: x, placement: b, strategy: o, middlewareData: E };
  };
  function $o(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }
  function Kr(e) {
    return typeof e != "number"
      ? $o(e)
      : { top: e, right: e, bottom: e, left: e };
  }
  function Bn(e) {
    return {
      ...e,
      top: e.y,
      left: e.x,
      right: e.x + e.width,
      bottom: e.y + e.height,
    };
  }
  async function En(e, t) {
    var n;
    t === void 0 && (t = {});
    let { x: r, y: o, platform: i, rects: s, elements: u, strategy: h } = e,
      {
        boundary: p = "clippingAncestors",
        rootBoundary: x = "viewport",
        elementContext: b = "floating",
        altBoundary: E = !1,
        padding: _ = 0,
      } = t,
      C = Kr(_),
      U = u[E ? (b === "floating" ? "reference" : "floating") : b],
      V = Bn(
        await i.getClippingRect({
          element:
            (n = await (i.isElement == null ? void 0 : i.isElement(U))) ==
              null || n
              ? U
              : U.contextElement ||
                (await (i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(u.floating))),
          boundary: p,
          rootBoundary: x,
          strategy: h,
        })
      ),
      B = Bn(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              rect:
                b === "floating" ? { ...s.floating, x: r, y: o } : s.reference,
              offsetParent: await (i.getOffsetParent == null
                ? void 0
                : i.getOffsetParent(u.floating)),
              strategy: h,
            })
          : s[b]
      );
    return {
      top: V.top - B.top + C.top,
      bottom: B.bottom - V.bottom + C.bottom,
      left: V.left - B.left + C.left,
      right: B.right - V.right + C.right,
    };
  }
  var Ni = Math.min,
    Jt = Math.max;
  function Yr(e, t, n) {
    return Jt(e, Ni(t, n));
  }
  var Li = (e) => ({
      name: "arrow",
      options: e,
      async fn(t) {
        let { element: n, padding: r = 0 } = e ?? {},
          { x: o, y: i, placement: s, rects: u, platform: h } = t;
        if (n == null)
          return (
            console.warn(
              "Floating UI: No `element` was passed to the `arrow` middleware."
            ),
            {}
          );
        let p = Kr(r),
          x = { x: o, y: i },
          b = On(s),
          E = Gr(b),
          _ = await h.getDimensions(n),
          C = b === "y" ? "top" : "left",
          M = b === "y" ? "bottom" : "right",
          U = u.reference[E] + u.reference[b] - x[b] - u.floating[E],
          V = x[b] - u.reference[b],
          B = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(n)),
          Q = B ? (b === "y" ? B.clientHeight || 0 : B.clientWidth || 0) : 0,
          q = U / 2 - V / 2,
          xe = p[C],
          se = Q - _[E] - p[M],
          ie = Q / 2 - _[E] / 2 + q,
          be = Yr(xe, ie, se);
        return { data: { [b]: be, centerOffset: ie - be } };
      },
    }),
    Wo = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function lr(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Wo[t]);
  }
  function ki(e, t, n) {
    n === void 0 && (n = !1);
    let r = cn(e),
      o = On(e),
      i = Gr(o),
      s =
        o === "x"
          ? r === (n ? "end" : "start")
            ? "right"
            : "left"
          : r === "start"
          ? "bottom"
          : "top";
    return (
      t.reference[i] > t.floating[i] && (s = lr(s)), { main: s, cross: lr(s) }
    );
  }
  var Vo = { start: "end", end: "start" };
  function Xr(e) {
    return e.replace(/start|end/g, (t) => Vo[t]);
  }
  var ji = ["top", "right", "bottom", "left"],
    Uo = ji.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
  function zo(e, t, n) {
    return (
      e
        ? [...n.filter((o) => cn(o) === e), ...n.filter((o) => cn(o) !== e)]
        : n.filter((o) => Ot(o) === o)
    ).filter((o) => (e ? cn(o) === e || (t ? Xr(o) !== o : !1) : !0));
  }
  var Jr = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "autoPlacement",
        options: e,
        async fn(t) {
          var n, r, o, i, s;
          let {
              x: u,
              y: h,
              rects: p,
              middlewareData: x,
              placement: b,
              platform: E,
              elements: _,
            } = t,
            {
              alignment: C = null,
              allowedPlacements: M = Uo,
              autoAlignment: U = !0,
              ...V
            } = e,
            B = zo(C, U, M),
            Q = await En(t, V),
            q =
              (n = (r = x.autoPlacement) == null ? void 0 : r.index) != null
                ? n
                : 0,
            xe = B[q];
          if (xe == null) return {};
          let { main: se, cross: ie } = ki(
            xe,
            p,
            await (E.isRTL == null ? void 0 : E.isRTL(_.floating))
          );
          if (b !== xe) return { x: u, y: h, reset: { placement: B[0] } };
          let be = [Q[Ot(xe)], Q[se], Q[ie]],
            R = [
              ...((o = (i = x.autoPlacement) == null ? void 0 : i.overflows) !=
              null
                ? o
                : []),
              { placement: xe, overflows: be },
            ],
            fe = B[q + 1];
          if (fe)
            return {
              data: { index: q + 1, overflows: R },
              reset: { placement: fe },
            };
          let ce = R.slice().sort((v, c) => v.overflows[0] - c.overflows[0]),
            l =
              (s = ce.find((v) => {
                let { overflows: c } = v;
                return c.every((H) => H <= 0);
              })) == null
                ? void 0
                : s.placement,
            d = l ?? ce[0].placement;
          return d !== b
            ? { data: { index: q + 1, overflows: R }, reset: { placement: d } }
            : {};
        },
      }
    );
  };
  function Yo(e) {
    let t = lr(e);
    return [Xr(e), t, Xr(t)];
  }
  var Bi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: o,
              rects: i,
              initialPlacement: s,
              platform: u,
              elements: h,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: x = !0,
              fallbackPlacements: b,
              fallbackStrategy: E = "bestFit",
              flipAlignment: _ = !0,
              ...C
            } = e,
            M = Ot(r),
            V = b || (M === s || !_ ? [lr(s)] : Yo(s)),
            B = [s, ...V],
            Q = await En(t, C),
            q = [],
            xe = ((n = o.flip) == null ? void 0 : n.overflows) || [];
          if ((p && q.push(Q[M]), x)) {
            let { main: R, cross: fe } = ki(
              r,
              i,
              await (u.isRTL == null ? void 0 : u.isRTL(h.floating))
            );
            q.push(Q[R], Q[fe]);
          }
          if (
            ((xe = [...xe, { placement: r, overflows: q }]),
            !q.every((R) => R <= 0))
          ) {
            var se, ie;
            let R =
                ((se = (ie = o.flip) == null ? void 0 : ie.index) != null
                  ? se
                  : 0) + 1,
              fe = B[R];
            if (fe)
              return {
                data: { index: R, overflows: xe },
                reset: { placement: fe },
              };
            let ce = "bottom";
            switch (E) {
              case "bestFit": {
                var be;
                let l =
                  (be = xe
                    .map((d) => [
                      d,
                      d.overflows
                        .filter((v) => v > 0)
                        .reduce((v, c) => v + c, 0),
                    ])
                    .sort((d, v) => d[1] - v[1])[0]) == null
                    ? void 0
                    : be[0].placement;
                l && (ce = l);
                break;
              }
              case "initialPlacement":
                ce = s;
                break;
            }
            if (r !== ce) return { reset: { placement: ce } };
          }
          return {};
        },
      }
    );
  };
  function Ai(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function Ci(e) {
    return ji.some((t) => e[t] >= 0);
  }
  var Hi = function (e) {
    let { strategy: t = "referenceHidden", ...n } = e === void 0 ? {} : e;
    return {
      name: "hide",
      async fn(r) {
        let { rects: o } = r;
        switch (t) {
          case "referenceHidden": {
            let i = await En(r, { ...n, elementContext: "reference" }),
              s = Ai(i, o.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Ci(s) },
            };
          }
          case "escaped": {
            let i = await En(r, { ...n, altBoundary: !0 }),
              s = Ai(i, o.floating);
            return { data: { escapedOffsets: s, escaped: Ci(s) } };
          }
          default:
            return {};
        }
      },
    };
  };
  function Xo(e, t, n, r) {
    r === void 0 && (r = !1);
    let o = Ot(e),
      i = cn(e),
      s = On(e) === "x",
      u = ["left", "top"].includes(o) ? -1 : 1,
      h = r && s ? -1 : 1,
      p = typeof n == "function" ? n({ ...t, placement: e }) : n,
      {
        mainAxis: x,
        crossAxis: b,
        alignmentAxis: E,
      } = typeof p == "number"
        ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
    return (
      i && typeof E == "number" && (b = i === "end" ? E * -1 : E),
      s ? { x: b * h, y: x * u } : { x: x * u, y: b * h }
    );
  }
  var $i = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          let {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: s,
              elements: u,
            } = t,
            h = Xo(
              o,
              i,
              e,
              await (s.isRTL == null ? void 0 : s.isRTL(u.floating))
            );
          return { x: n + h.x, y: r + h.y, data: h };
        },
      }
    );
  };
  function qo(e) {
    return e === "x" ? "y" : "x";
  }
  var Wi = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            let { x: n, y: r, placement: o } = t,
              {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: u = {
                  fn: (U) => {
                    let { x: V, y: B } = U;
                    return { x: V, y: B };
                  },
                },
                ...h
              } = e,
              p = { x: n, y: r },
              x = await En(t, h),
              b = On(Ot(o)),
              E = qo(b),
              _ = p[b],
              C = p[E];
            if (i) {
              let U = b === "y" ? "top" : "left",
                V = b === "y" ? "bottom" : "right",
                B = _ + x[U],
                Q = _ - x[V];
              _ = Yr(B, _, Q);
            }
            if (s) {
              let U = E === "y" ? "top" : "left",
                V = E === "y" ? "bottom" : "right",
                B = C + x[U],
                Q = C - x[V];
              C = Yr(B, C, Q);
            }
            let M = u.fn({ ...t, [b]: _, [E]: C });
            return { ...M, data: { x: M.x - n, y: M.y - r } };
          },
        }
      );
    },
    Vi = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            let { placement: n, rects: r, platform: o, elements: i } = t,
              { apply: s, ...u } = e,
              h = await En(t, u),
              p = Ot(n),
              x = cn(n),
              b,
              E;
            p === "top" || p === "bottom"
              ? ((b = p),
                (E =
                  x ===
                  ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((E = p), (b = x === "end" ? "top" : "bottom"));
            let _ = Jt(h.left, 0),
              C = Jt(h.right, 0),
              M = Jt(h.top, 0),
              U = Jt(h.bottom, 0),
              V = {
                height:
                  r.floating.height -
                  (["left", "right"].includes(n)
                    ? 2 * (M !== 0 || U !== 0 ? M + U : Jt(h.top, h.bottom))
                    : h[b]),
                width:
                  r.floating.width -
                  (["top", "bottom"].includes(n)
                    ? 2 * (_ !== 0 || C !== 0 ? _ + C : Jt(h.left, h.right))
                    : h[E]),
              },
              B = await o.getDimensions(i.floating);
            s?.({ ...V, ...r });
            let Q = await o.getDimensions(i.floating);
            return B.width !== Q.width || B.height !== Q.height
              ? { reset: { rects: !0 } }
              : {};
          },
        }
      );
    },
    Ui = function (e) {
      return (
        e === void 0 && (e = {}),
        {
          name: "inline",
          options: e,
          async fn(t) {
            var n;
            let {
                placement: r,
                elements: o,
                rects: i,
                platform: s,
                strategy: u,
              } = t,
              { padding: h = 2, x: p, y: x } = e,
              b = Bn(
                s.convertOffsetParentRelativeRectToViewportRelativeRect
                  ? await s.convertOffsetParentRelativeRectToViewportRelativeRect(
                      {
                        rect: i.reference,
                        offsetParent: await (s.getOffsetParent == null
                          ? void 0
                          : s.getOffsetParent(o.floating)),
                        strategy: u,
                      }
                    )
                  : i.reference
              ),
              E =
                (n = await (s.getClientRects == null
                  ? void 0
                  : s.getClientRects(o.reference))) != null
                  ? n
                  : [],
              _ = Kr(h);
            function C() {
              if (
                E.length === 2 &&
                E[0].left > E[1].right &&
                p != null &&
                x != null
              ) {
                var U;
                return (U = E.find(
                  (V) =>
                    p > V.left - _.left &&
                    p < V.right + _.right &&
                    x > V.top - _.top &&
                    x < V.bottom + _.bottom
                )) != null
                  ? U
                  : b;
              }
              if (E.length >= 2) {
                if (On(r) === "x") {
                  let ce = E[0],
                    l = E[E.length - 1],
                    d = Ot(r) === "top",
                    v = ce.top,
                    c = l.bottom,
                    H = d ? ce.left : l.left,
                    T = d ? ce.right : l.right,
                    P = T - H,
                    G = c - v;
                  return {
                    top: v,
                    bottom: c,
                    left: H,
                    right: T,
                    width: P,
                    height: G,
                    x: H,
                    y: v,
                  };
                }
                let V = Ot(r) === "left",
                  B = Jt(...E.map((ce) => ce.right)),
                  Q = Ni(...E.map((ce) => ce.left)),
                  q = E.filter((ce) => (V ? ce.left === Q : ce.right === B)),
                  xe = q[0].top,
                  se = q[q.length - 1].bottom,
                  ie = Q,
                  be = B,
                  R = be - ie,
                  fe = se - xe;
                return {
                  top: xe,
                  bottom: se,
                  left: ie,
                  right: be,
                  width: R,
                  height: fe,
                  x: ie,
                  y: xe,
                };
              }
              return b;
            }
            let M = await s.getElementRects({
              reference: { getBoundingClientRect: C },
              floating: o.floating,
              strategy: u,
            });
            return i.reference.x !== M.reference.x ||
              i.reference.y !== M.reference.y ||
              i.reference.width !== M.reference.width ||
              i.reference.height !== M.reference.height
              ? { reset: { rects: M } }
              : {};
          },
        }
      );
    };
  function zi(e) {
    return e && e.document && e.location && e.alert && e.setInterval;
  }
  function Ft(e) {
    if (e == null) return window;
    if (!zi(e)) {
      let t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function Hn(e) {
    return Ft(e).getComputedStyle(e);
  }
  function Rt(e) {
    return zi(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
  }
  function St(e) {
    return e instanceof Ft(e).HTMLElement;
  }
  function Qt(e) {
    return e instanceof Ft(e).Element;
  }
  function Go(e) {
    return e instanceof Ft(e).Node;
  }
  function Qr(e) {
    if (typeof ShadowRoot > "u") return !1;
    let t = Ft(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function cr(e) {
    let { overflow: t, overflowX: n, overflowY: r } = Hn(e);
    return /auto|scroll|overlay|hidden/.test(t + r + n);
  }
  function Ko(e) {
    return ["table", "td", "th"].includes(Rt(e));
  }
  function Yi(e) {
    let t = navigator.userAgent.toLowerCase().includes("firefox"),
      n = Hn(e);
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      n.contain === "paint" ||
      ["transform", "perspective"].includes(n.willChange) ||
      (t && n.willChange === "filter") ||
      (t && (n.filter ? n.filter !== "none" : !1))
    );
  }
  function Xi() {
    return !/^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  var Di = Math.min,
    kn = Math.max,
    fr = Math.round;
  function It(e, t, n) {
    var r, o, i, s;
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    let u = e.getBoundingClientRect(),
      h = 1,
      p = 1;
    t &&
      St(e) &&
      ((h = (e.offsetWidth > 0 && fr(u.width) / e.offsetWidth) || 1),
      (p = (e.offsetHeight > 0 && fr(u.height) / e.offsetHeight) || 1));
    let x = Qt(e) ? Ft(e) : window,
      b = !Xi() && n,
      E =
        (u.left +
          (b &&
          (r = (o = x.visualViewport) == null ? void 0 : o.offsetLeft) != null
            ? r
            : 0)) /
        h,
      _ =
        (u.top +
          (b &&
          (i = (s = x.visualViewport) == null ? void 0 : s.offsetTop) != null
            ? i
            : 0)) /
        p,
      C = u.width / h,
      M = u.height / p;
    return {
      width: C,
      height: M,
      top: _,
      right: E + C,
      bottom: _ + M,
      left: E,
      x: E,
      y: _,
    };
  }
  function Zt(e) {
    return ((Go(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function dr(e) {
    return Qt(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function qi(e) {
    return It(Zt(e)).left + dr(e).scrollLeft;
  }
  function Jo(e) {
    let t = It(e);
    return fr(t.width) !== e.offsetWidth || fr(t.height) !== e.offsetHeight;
  }
  function Qo(e, t, n) {
    let r = St(t),
      o = Zt(t),
      i = It(e, r && Jo(t), n === "fixed"),
      s = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 };
    if (r || (!r && n !== "fixed"))
      if (((Rt(t) !== "body" || cr(o)) && (s = dr(t)), St(t))) {
        let h = It(t, !0);
        (u.x = h.x + t.clientLeft), (u.y = h.y + t.clientTop);
      } else o && (u.x = qi(o));
    return {
      x: i.left + s.scrollLeft - u.x,
      y: i.top + s.scrollTop - u.y,
      width: i.width,
      height: i.height,
    };
  }
  function Gi(e) {
    return Rt(e) === "html"
      ? e
      : e.assignedSlot || e.parentNode || (Qr(e) ? e.host : null) || Zt(e);
  }
  function _i(e) {
    return !St(e) || getComputedStyle(e).position === "fixed"
      ? null
      : e.offsetParent;
  }
  function Zo(e) {
    let t = Gi(e);
    for (Qr(t) && (t = t.host); St(t) && !["html", "body"].includes(Rt(t)); ) {
      if (Yi(t)) return t;
      t = t.parentNode;
    }
    return null;
  }
  function qr(e) {
    let t = Ft(e),
      n = _i(e);
    for (; n && Ko(n) && getComputedStyle(n).position === "static"; ) n = _i(n);
    return n &&
      (Rt(n) === "html" ||
        (Rt(n) === "body" &&
          getComputedStyle(n).position === "static" &&
          !Yi(n)))
      ? t
      : n || Zo(e) || t;
  }
  function Ti(e) {
    if (St(e)) return { width: e.offsetWidth, height: e.offsetHeight };
    let t = It(e);
    return { width: t.width, height: t.height };
  }
  function ea(e) {
    let { rect: t, offsetParent: n, strategy: r } = e,
      o = St(n),
      i = Zt(n);
    if (n === i) return t;
    let s = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 };
    if (
      (o || (!o && r !== "fixed")) &&
      ((Rt(n) !== "body" || cr(i)) && (s = dr(n)), St(n))
    ) {
      let h = It(n, !0);
      (u.x = h.x + n.clientLeft), (u.y = h.y + n.clientTop);
    }
    return { ...t, x: t.x - s.scrollLeft + u.x, y: t.y - s.scrollTop + u.y };
  }
  function ta(e, t) {
    let n = Ft(e),
      r = Zt(e),
      o = n.visualViewport,
      i = r.clientWidth,
      s = r.clientHeight,
      u = 0,
      h = 0;
    if (o) {
      (i = o.width), (s = o.height);
      let p = Xi();
      (p || (!p && t === "fixed")) && ((u = o.offsetLeft), (h = o.offsetTop));
    }
    return { width: i, height: s, x: u, y: h };
  }
  function na(e) {
    var t;
    let n = Zt(e),
      r = dr(e),
      o = (t = e.ownerDocument) == null ? void 0 : t.body,
      i = kn(
        n.scrollWidth,
        n.clientWidth,
        o ? o.scrollWidth : 0,
        o ? o.clientWidth : 0
      ),
      s = kn(
        n.scrollHeight,
        n.clientHeight,
        o ? o.scrollHeight : 0,
        o ? o.clientHeight : 0
      ),
      u = -r.scrollLeft + qi(e),
      h = -r.scrollTop;
    return (
      Hn(o || n).direction === "rtl" &&
        (u += kn(n.clientWidth, o ? o.clientWidth : 0) - i),
      { width: i, height: s, x: u, y: h }
    );
  }
  function Ki(e) {
    let t = Gi(e);
    return ["html", "body", "#document"].includes(Rt(t))
      ? e.ownerDocument.body
      : St(t) && cr(t)
      ? t
      : Ki(t);
  }
  function ur(e, t) {
    var n;
    t === void 0 && (t = []);
    let r = Ki(e),
      o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
      i = Ft(r),
      s = o ? [i].concat(i.visualViewport || [], cr(r) ? r : []) : r,
      u = t.concat(s);
    return o ? u : u.concat(ur(s));
  }
  function ra(e, t) {
    let n = t == null || t.getRootNode == null ? void 0 : t.getRootNode();
    if (e != null && e.contains(t)) return !0;
    if (n && Qr(n)) {
      let r = t;
      do {
        if (r && e === r) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function ia(e, t) {
    let n = It(e, !1, t === "fixed"),
      r = n.top + e.clientTop,
      o = n.left + e.clientLeft;
    return {
      top: r,
      left: o,
      x: o,
      y: r,
      right: o + e.clientWidth,
      bottom: r + e.clientHeight,
      width: e.clientWidth,
      height: e.clientHeight,
    };
  }
  function Pi(e, t, n) {
    return t === "viewport" ? Bn(ta(e, n)) : Qt(t) ? ia(t, n) : Bn(na(Zt(e)));
  }
  function oa(e) {
    let t = ur(e),
      r = ["absolute", "fixed"].includes(Hn(e).position) && St(e) ? qr(e) : e;
    return Qt(r) ? t.filter((o) => Qt(o) && ra(o, r) && Rt(o) !== "body") : [];
  }
  function aa(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
      s = [...(n === "clippingAncestors" ? oa(t) : [].concat(n)), r],
      u = s[0],
      h = s.reduce((p, x) => {
        let b = Pi(t, x, o);
        return (
          (p.top = kn(b.top, p.top)),
          (p.right = Di(b.right, p.right)),
          (p.bottom = Di(b.bottom, p.bottom)),
          (p.left = kn(b.left, p.left)),
          p
        );
      }, Pi(t, u, o));
    return {
      width: h.right - h.left,
      height: h.bottom - h.top,
      x: h.left,
      y: h.top,
    };
  }
  var sa = {
    getClippingRect: aa,
    convertOffsetParentRelativeRectToViewportRelativeRect: ea,
    isElement: Qt,
    getDimensions: Ti,
    getOffsetParent: qr,
    getDocumentElement: Zt,
    getElementRects: (e) => {
      let { reference: t, floating: n, strategy: r } = e;
      return { reference: Qo(t, qr(n), r), floating: { ...Ti(n), x: 0, y: 0 } };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => Hn(e).direction === "rtl",
  };
  function Mi(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = !0,
        animationFrame: u = !1,
      } = r,
      h = !1,
      p = o && !u,
      x = i && !u,
      b = s && !u,
      E = p || x ? [...(Qt(e) ? ur(e) : []), ...ur(t)] : [];
    E.forEach((V) => {
      p && V.addEventListener("scroll", n, { passive: !0 }),
        x && V.addEventListener("resize", n);
    });
    let _ = null;
    b && ((_ = new ResizeObserver(n)), Qt(e) && _.observe(e), _.observe(t));
    let C,
      M = u ? It(e) : null;
    u && U();
    function U() {
      if (h) return;
      let V = It(e);
      M &&
        (V.x !== M.x ||
          V.y !== M.y ||
          V.width !== M.width ||
          V.height !== M.height) &&
        n(),
        (M = V),
        (C = requestAnimationFrame(U));
    }
    return () => {
      var V;
      (h = !0),
        E.forEach((B) => {
          p && B.removeEventListener("scroll", n),
            x && B.removeEventListener("resize", n);
        }),
        (V = _) == null || V.disconnect(),
        (_ = null),
        u && cancelAnimationFrame(C);
    };
  }
  var Ri = (e, t, n) => Ho(e, t, { platform: sa, ...n }),
    la = (e) => {
      let t = { placement: "bottom", middleware: [] },
        n = Object.keys(e),
        r = (o) => e[o];
      return (
        n.includes("offset") && t.middleware.push($i(r("offset"))),
        n.includes("placement") && (t.placement = r("placement")),
        n.includes("autoPlacement") &&
          !n.includes("flip") &&
          t.middleware.push(Jr(r("autoPlacement"))),
        n.includes("flip") && t.middleware.push(Bi(r("flip"))),
        n.includes("shift") && t.middleware.push(Wi(r("shift"))),
        n.includes("inline") && t.middleware.push(Ui(r("inline"))),
        n.includes("arrow") && t.middleware.push(Li(r("arrow"))),
        n.includes("hide") && t.middleware.push(Hi(r("hide"))),
        n.includes("size") && t.middleware.push(Vi(r("size"))),
        t
      );
    },
    fa = (e, t) => {
      let n = {
          component: { trap: !1 },
          float: { placement: "bottom", strategy: "absolute", middleware: [] },
        },
        r = (o) => e[e.indexOf(o) + 1];
      return (
        e.includes("trap") && (n.component.trap = !0),
        e.includes("teleport") && (n.float.strategy = "fixed"),
        e.includes("offset") && n.float.middleware.push($i(t.offset || 10)),
        e.includes("placement") && (n.float.placement = r("placement")),
        e.includes("autoPlacement") &&
          !e.includes("flip") &&
          n.float.middleware.push(Jr(t.autoPlacement)),
        e.includes("flip") && n.float.middleware.push(Bi(t.flip)),
        e.includes("shift") && n.float.middleware.push(Wi(t.shift)),
        e.includes("inline") && n.float.middleware.push(Ui(t.inline)),
        e.includes("arrow") && n.float.middleware.push(Li(t.arrow)),
        e.includes("hide") && n.float.middleware.push(Hi(t.hide)),
        e.includes("size") && n.float.middleware.push(Vi(t.size)),
        n
      );
    },
    ua = (e) => {
      var t =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
            ""
          ),
        n = "";
      e || (e = Math.floor(Math.random() * t.length));
      for (var r = 0; r < e; r++) n += t[Math.floor(Math.random() * t.length)];
      return n;
    },
    ca = [],
    da = [],
    pa = [];
  function ha(e, t) {
    e._x_attributeCleanups &&
      Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
        (t === void 0 || t.includes(n)) &&
          (r.forEach((o) => o()), delete e._x_attributeCleanups[n]);
      });
  }
  var Zr = new MutationObserver(Ji),
    ei = !1;
  function va() {
    Zr.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (ei = !0);
  }
  function ga() {
    ma(), Zr.disconnect(), (ei = !1);
  }
  var jn = [],
    zr = !1;
  function ma() {
    (jn = jn.concat(Zr.takeRecords())),
      jn.length &&
        !zr &&
        ((zr = !0),
        queueMicrotask(() => {
          ba(), (zr = !1);
        }));
  }
  function ba() {
    Ji(jn), (jn.length = 0);
  }
  function Ii(e) {
    if (!ei) return e();
    ga();
    let t = e();
    return va(), t;
  }
  var ya = !1,
    Fi = [];
  function Ji(e) {
    if (ya) {
      Fi = Fi.concat(e);
      return;
    }
    let t = [],
      n = [],
      r = new Map(),
      o = new Map();
    for (let i = 0; i < e.length; i++)
      if (
        !e[i].target._x_ignoreMutationObserver &&
        (e[i].type === "childList" &&
          (e[i].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)),
          e[i].removedNodes.forEach((s) => s.nodeType === 1 && n.push(s))),
        e[i].type === "attributes")
      ) {
        let s = e[i].target,
          u = e[i].attributeName,
          h = e[i].oldValue,
          p = () => {
            r.has(s) || r.set(s, []),
              r.get(s).push({ name: u, value: s.getAttribute(u) });
          },
          x = () => {
            o.has(s) || o.set(s, []), o.get(s).push(u);
          };
        s.hasAttribute(u) && h === null
          ? p()
          : s.hasAttribute(u)
          ? (x(), p())
          : x();
      }
    o.forEach((i, s) => {
      ha(s, i);
    }),
      r.forEach((i, s) => {
        ca.forEach((u) => u(s, i));
      });
    for (let i of n)
      if (!t.includes(i) && (da.forEach((s) => s(i)), i._x_cleanups))
        for (; i._x_cleanups.length; ) i._x_cleanups.pop()();
    t.forEach((i) => {
      (i._x_ignoreSelf = !0), (i._x_ignore = !0);
    });
    for (let i of t)
      n.includes(i) ||
        (i.isConnected &&
          (delete i._x_ignoreSelf,
          delete i._x_ignore,
          pa.forEach((s) => s(i)),
          (i._x_ignore = !0),
          (i._x_ignoreSelf = !0)));
    t.forEach((i) => {
      delete i._x_ignoreSelf, delete i._x_ignore;
    }),
      (t = null),
      (n = null),
      (r = null),
      (o = null);
  }
  function wa(e, t = () => {}) {
    let n = !1;
    return function () {
      n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
    };
  }
  function xa(e) {
    let t = { dismissable: !0, trap: !1 };
    function n(i, s, u = null) {
      if (s) {
        if (
          (s.hasAttribute("aria-expanded") ||
            s.setAttribute("aria-expanded", !1),
          u.hasAttribute("id"))
        )
          s.setAttribute("aria-controls", u.getAttribute("id"));
        else {
          let h = `panel-${ua(8)}`;
          s.setAttribute("aria-controls", h), u.setAttribute("id", h);
        }
        u.setAttribute("aria-modal", !0), u.setAttribute("role", "dialog");
      }
    }
    let r = document.querySelectorAll('[\\@click^="$float"]'),
      o = document.querySelectorAll('[x-on\\:click^="$float"]');
    [...r, ...o].forEach((i) => {
      let s = i.parentElement.closest("[x-data]"),
        u = s.querySelector('[x-ref="panel"]');
      n(s, i, u);
    }),
      e.magic("float", (i) => (s = {}, u = {}) => {
        let h = { ...t, ...u },
          p = Object.keys(s).length > 0 ? la(s) : { middleware: [Jr()] },
          x = i,
          b = i.parentElement.closest("[x-data]"),
          E = b.querySelector('[x-ref="panel"]');
        function _() {
          return E.style.display == "block";
        }
        function C() {
          (E.style.display = ""),
            x.setAttribute("aria-expanded", !1),
            h.trap && E.setAttribute("x-trap", !1),
            Mi(i, E, V);
        }
        function M() {
          (E.style.display = "block"),
            x.setAttribute("aria-expanded", !0),
            h.trap && E.setAttribute("x-trap", !0),
            V();
        }
        function U() {
          _() ? C() : M();
        }
        async function V() {
          return await Ri(i, E, p).then(
            ({ middlewareData: B, placement: Q, x: q, y: xe }) => {
              if (B.arrow) {
                let se = B.arrow?.x,
                  ie = B.arrow?.y,
                  be = p.middleware.filter((fe) => fe.name == "arrow")[0]
                    .options.element,
                  R = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right",
                  }[Q.split("-")[0]];
                Object.assign(be.style, {
                  left: se != null ? `${se}px` : "",
                  top: ie != null ? `${ie}px` : "",
                  right: "",
                  bottom: "",
                  [R]: "-4px",
                });
              }
              if (B.hide) {
                let { referenceHidden: se } = B.hide;
                Object.assign(E.style, {
                  visibility: se ? "hidden" : "visible",
                });
              }
              Object.assign(E.style, { left: `${q}px`, top: `${xe}px` });
            }
          );
        }
        h.dismissable &&
          (window.addEventListener("click", (B) => {
            !b.contains(B.target) && _() && U();
          }),
          window.addEventListener(
            "keydown",
            (B) => {
              B.key === "Escape" && _() && U();
            },
            !0
          )),
          U();
      }),
      e.directive(
        "float",
        (i, { modifiers: s, expression: u }, { evaluate: h, effect: p }) => {
          let x = u ? h(u) : {},
            b = s.length > 0 ? fa(s, x) : {},
            E = null;
          b.float.strategy == "fixed" && (i.style.position = "fixed");
          let _ = (R) =>
              i.parentElement &&
              !i.parentElement.closest("[x-data]").contains(R.target)
                ? i.close()
                : null,
            C = (R) => (R.key === "Escape" ? i.close() : null),
            M = i.getAttribute("x-ref"),
            U = i.parentElement.closest("[x-data]"),
            V = U.querySelectorAll(`[\\@click^="$refs.${M}"]`),
            B = U.querySelectorAll(`[x-on\\:click^="$refs.${M}"]`);
          i.style.setProperty("display", "none"),
            n(U, [...V, ...B][0], i),
            (i._x_isShown = !1),
            (i.trigger = null),
            i._x_doHide ||
              (i._x_doHide = () => {
                Ii(() => {
                  i.style.setProperty(
                    "display",
                    "none",
                    s.includes("important") ? "important" : void 0
                  );
                });
              }),
            i._x_doShow ||
              (i._x_doShow = () => {
                Ii(() => {
                  i.style.setProperty(
                    "display",
                    "block",
                    s.includes("important") ? "important" : void 0
                  );
                });
              });
          let Q = () => {
              i._x_doHide(), (i._x_isShown = !1);
            },
            q = () => {
              i._x_doShow(), (i._x_isShown = !0);
            },
            xe = () => setTimeout(q),
            se = wa(
              (R) => (R ? q() : Q()),
              (R) => {
                typeof i._x_toggleAndCascadeWithTransitions == "function"
                  ? i._x_toggleAndCascadeWithTransitions(i, R, q, Q)
                  : R
                  ? xe()
                  : Q();
              }
            ),
            ie,
            be = !0;
          p(() =>
            h((R) => {
              (!be && R === ie) ||
                (s.includes("immediate") && (R ? xe() : Q()),
                se(R),
                (ie = R),
                (be = !1));
            })
          ),
            (i.open = async function (R) {
              (i.trigger = R.currentTarget ? R.currentTarget : R),
                se(!0),
                i.trigger.setAttribute("aria-expanded", !0),
                b.component.trap && i.setAttribute("x-trap", !0),
                (E = Mi(i.trigger, i, () => {
                  Ri(i.trigger, i, b.float).then(
                    ({ middlewareData: fe, placement: ce, x: l, y: d }) => {
                      if (fe.arrow) {
                        let v = fe.arrow?.x,
                          c = fe.arrow?.y,
                          H = b.float.middleware.filter(
                            (P) => P.name == "arrow"
                          )[0].options.element,
                          T = {
                            top: "bottom",
                            right: "left",
                            bottom: "top",
                            left: "right",
                          }[ce.split("-")[0]];
                        Object.assign(H.style, {
                          left: v != null ? `${v}px` : "",
                          top: c != null ? `${c}px` : "",
                          right: "",
                          bottom: "",
                          [T]: "-4px",
                        });
                      }
                      if (fe.hide) {
                        let { referenceHidden: v } = fe.hide;
                        Object.assign(i.style, {
                          visibility: v ? "hidden" : "visible",
                        });
                      }
                      Object.assign(i.style, { left: `${l}px`, top: `${d}px` });
                    }
                  );
                })),
                window.addEventListener("click", _),
                window.addEventListener("keydown", C, !0);
            }),
            (i.close = function () {
              se(!1),
                i.trigger.setAttribute("aria-expanded", !1),
                b.component.trap && i.setAttribute("x-trap", !1),
                E(),
                window.removeEventListener("click", _),
                window.removeEventListener("keydown", C, !1);
            }),
            (i.toggle = function (R) {
              i._x_isShown ? i.close() : i.open(R);
            });
        }
      );
  }
  var Qi = xa;
  function Ea(e) {
    e.store("lazyLoadedAssets", {
      loaded: new Set(),
      check(s) {
        return Array.isArray(s)
          ? s.every((u) => this.loaded.has(u))
          : this.loaded.has(s);
      },
      markLoaded(s) {
        Array.isArray(s)
          ? s.forEach((u) => this.loaded.add(u))
          : this.loaded.add(s);
      },
    });
    function t(s) {
      return new CustomEvent(s, { bubbles: !0, composed: !0, cancelable: !0 });
    }
    function n(s, u = {}, h, p) {
      let x = document.createElement(s);
      for (let [b, E] of Object.entries(u)) x[b] = E;
      return h && (p ? h.insertBefore(x, p) : h.appendChild(x)), x;
    }
    function r(s, u, h = {}, p = null, x = null) {
      let b = s === "link" ? `link[href="${u}"]` : `script[src="${u}"]`;
      if (document.querySelector(b) || e.store("lazyLoadedAssets").check(u))
        return Promise.resolve();
      let E = s === "link" ? { ...h, href: u } : { ...h, src: u },
        _ = n(s, E, p, x);
      return new Promise((C, M) => {
        (_.onload = () => {
          e.store("lazyLoadedAssets").markLoaded(u), C();
        }),
          (_.onerror = () => {
            M(new Error(`Failed to load ${s}: ${u}`));
          });
      });
    }
    async function o(s, u, h = null, p = null) {
      let x = { type: "text/css", rel: "stylesheet" };
      u && (x.media = u);
      let b = document.head,
        E = null;
      if (h && p) {
        let _ = document.querySelector(`link[href*="${p}"]`);
        _
          ? ((b = _.parentNode), (E = h === "before" ? _ : _.nextSibling))
          : console.warn(
              `Target (${p}) not found for ${s}. Appending to head.`
            );
      }
      await r("link", s, x, b, E);
    }
    async function i(s, u, h = null, p = null) {
      let x, b;
      h &&
        p &&
        ((x = document.querySelector(`script[src*="${p}"]`)),
        x
          ? (b = h === "before" ? x : x.nextSibling)
          : console.warn(
              `Target (${p}) not found for ${s}. Appending to body.`
            ));
      let E = u.has("body-start") ? "prepend" : "append";
      await r(
        "script",
        s,
        {},
        x || document[u.has("body-end") ? "body" : "head"],
        b
      );
    }
    e.directive("load-css", (s, { expression: u }, { evaluate: h }) => {
      let p = h(u),
        x = s.media,
        b = s.getAttribute("data-dispatch"),
        E = s.getAttribute("data-css-before")
          ? "before"
          : s.getAttribute("data-css-after")
          ? "after"
          : null,
        _ =
          s.getAttribute("data-css-before") ||
          s.getAttribute("data-css-after") ||
          null;
      Promise.all(p.map((C) => o(C, x, E, _)))
        .then(() => {
          b && window.dispatchEvent(t(b + "-css"));
        })
        .catch((C) => {
          console.error(C);
        });
    }),
      e.directive(
        "load-js",
        (s, { expression: u, modifiers: h }, { evaluate: p }) => {
          let x = p(u),
            b = new Set(h),
            E = s.getAttribute("data-js-before")
              ? "before"
              : s.getAttribute("data-js-after")
              ? "after"
              : null,
            _ =
              s.getAttribute("data-js-before") ||
              s.getAttribute("data-js-after") ||
              null,
            C = s.getAttribute("data-dispatch");
          Promise.all(x.map((M) => i(M, b, E, _)))
            .then(() => {
              C && window.dispatchEvent(t(C + "-js"));
            })
            .catch((M) => {
              console.error(M);
            });
        }
      );
  }
  var Zi = Ea;
  var Ro = Bo(no(), 1);
  function ro(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Ct(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? ro(Object(n), !0).forEach(function (r) {
            Oa(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ro(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return e;
  }
  function br(e) {
    "@babel/helpers - typeof";
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (br = function (t) {
            return typeof t;
          })
        : (br = function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
      br(e)
    );
  }
  function Oa(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Lt() {
    return (
      (Lt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
      Lt.apply(this, arguments)
    );
  }
  function Sa(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      o,
      i;
    for (i = 0; i < r.length; i++)
      (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
  }
  function Aa(e, t) {
    if (e == null) return {};
    var n = Sa(e, t),
      r,
      o;
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (o = 0; o < i.length; o++)
        (r = i[o]),
          !(t.indexOf(r) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(e, r) &&
            (n[r] = e[r]);
    }
    return n;
  }
  var Ca = "1.15.2";
  function Nt(e) {
    if (typeof window < "u" && window.navigator)
      return !!navigator.userAgent.match(e);
  }
  var kt = Nt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    Gn = Nt(/Edge/i),
    io = Nt(/firefox/i),
    Un = Nt(/safari/i) && !Nt(/chrome/i) && !Nt(/android/i),
    po = Nt(/iP(ad|od|hone)/i),
    ho = Nt(/chrome/i) && Nt(/android/i),
    vo = { capture: !1, passive: !1 };
  function Ce(e, t, n) {
    e.addEventListener(t, n, !kt && vo);
  }
  function Oe(e, t, n) {
    e.removeEventListener(t, n, !kt && vo);
  }
  function Or(e, t) {
    if (t) {
      if ((t[0] === ">" && (t = t.substring(1)), e))
        try {
          if (e.matches) return e.matches(t);
          if (e.msMatchesSelector) return e.msMatchesSelector(t);
          if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
        } catch {
          return !1;
        }
      return !1;
    }
  }
  function Da(e) {
    return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
  }
  function bt(e, t, n, r) {
    if (e) {
      n = n || document;
      do {
        if (
          (t != null &&
            (t[0] === ">" ? e.parentNode === n && Or(e, t) : Or(e, t))) ||
          (r && e === n)
        )
          return e;
        if (e === n) break;
      } while ((e = Da(e)));
    }
    return null;
  }
  var oo = /\s+/g;
  function st(e, t, n) {
    if (e && t)
      if (e.classList) e.classList[n ? "add" : "remove"](t);
      else {
        var r = (" " + e.className + " ")
          .replace(oo, " ")
          .replace(" " + t + " ", " ");
        e.className = (r + (n ? " " + t : "")).replace(oo, " ");
      }
  }
  function ne(e, t, n) {
    var r = e && e.style;
    if (r) {
      if (n === void 0)
        return (
          document.defaultView && document.defaultView.getComputedStyle
            ? (n = document.defaultView.getComputedStyle(e, ""))
            : e.currentStyle && (n = e.currentStyle),
          t === void 0 ? n : n[t]
        );
      !(t in r) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t),
        (r[t] = n + (typeof n == "string" ? "" : "px"));
    }
  }
  function _n(e, t) {
    var n = "";
    if (typeof e == "string") n = e;
    else
      do {
        var r = ne(e, "transform");
        r && r !== "none" && (n = r + " " + n);
      } while (!t && (e = e.parentNode));
    var o =
      window.DOMMatrix ||
      window.WebKitCSSMatrix ||
      window.CSSMatrix ||
      window.MSCSSMatrix;
    return o && new o(n);
  }
  function go(e, t, n) {
    if (e) {
      var r = e.getElementsByTagName(t),
        o = 0,
        i = r.length;
      if (n) for (; o < i; o++) n(r[o], o);
      return r;
    }
    return [];
  }
  function At() {
    var e = document.scrollingElement;
    return e || document.documentElement;
  }
  function qe(e, t, n, r, o) {
    if (!(!e.getBoundingClientRect && e !== window)) {
      var i, s, u, h, p, x, b;
      if (
        (e !== window && e.parentNode && e !== At()
          ? ((i = e.getBoundingClientRect()),
            (s = i.top),
            (u = i.left),
            (h = i.bottom),
            (p = i.right),
            (x = i.height),
            (b = i.width))
          : ((s = 0),
            (u = 0),
            (h = window.innerHeight),
            (p = window.innerWidth),
            (x = window.innerHeight),
            (b = window.innerWidth)),
        (t || n) && e !== window && ((o = o || e.parentNode), !kt))
      )
        do
          if (
            o &&
            o.getBoundingClientRect &&
            (ne(o, "transform") !== "none" ||
              (n && ne(o, "position") !== "static"))
          ) {
            var E = o.getBoundingClientRect();
            (s -= E.top + parseInt(ne(o, "border-top-width"))),
              (u -= E.left + parseInt(ne(o, "border-left-width"))),
              (h = s + i.height),
              (p = u + i.width);
            break;
          }
        while ((o = o.parentNode));
      if (r && e !== window) {
        var _ = _n(o || e),
          C = _ && _.a,
          M = _ && _.d;
        _ && ((s /= M), (u /= C), (b /= C), (x /= M), (h = s + x), (p = u + b));
      }
      return { top: s, left: u, bottom: h, right: p, width: b, height: x };
    }
  }
  function ao(e, t, n) {
    for (var r = nn(e, !0), o = qe(e)[t]; r; ) {
      var i = qe(r)[n],
        s = void 0;
      if ((n === "top" || n === "left" ? (s = o >= i) : (s = o <= i), !s))
        return r;
      if (r === At()) break;
      r = nn(r, !1);
    }
    return !1;
  }
  function Tn(e, t, n, r) {
    for (var o = 0, i = 0, s = e.children; i < s.length; ) {
      if (
        s[i].style.display !== "none" &&
        s[i] !== re.ghost &&
        (r || s[i] !== re.dragged) &&
        bt(s[i], n.draggable, e, !1)
      ) {
        if (o === t) return s[i];
        o++;
      }
      i++;
    }
    return null;
  }
  function hi(e, t) {
    for (
      var n = e.lastElementChild;
      n && (n === re.ghost || ne(n, "display") === "none" || (t && !Or(n, t)));

    )
      n = n.previousElementSibling;
    return n || null;
  }
  function ct(e, t) {
    var n = 0;
    if (!e || !e.parentNode) return -1;
    for (; (e = e.previousElementSibling); )
      e.nodeName.toUpperCase() !== "TEMPLATE" &&
        e !== re.clone &&
        (!t || Or(e, t)) &&
        n++;
    return n;
  }
  function so(e) {
    var t = 0,
      n = 0,
      r = At();
    if (e)
      do {
        var o = _n(e),
          i = o.a,
          s = o.d;
        (t += e.scrollLeft * i), (n += e.scrollTop * s);
      } while (e !== r && (e = e.parentNode));
    return [t, n];
  }
  function _a(e, t) {
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        for (var r in t)
          if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
      }
    return -1;
  }
  function nn(e, t) {
    if (!e || !e.getBoundingClientRect) return At();
    var n = e,
      r = !1;
    do
      if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
        var o = ne(n);
        if (
          (n.clientWidth < n.scrollWidth &&
            (o.overflowX == "auto" || o.overflowX == "scroll")) ||
          (n.clientHeight < n.scrollHeight &&
            (o.overflowY == "auto" || o.overflowY == "scroll"))
        ) {
          if (!n.getBoundingClientRect || n === document.body) return At();
          if (r || t) return n;
          r = !0;
        }
      }
    while ((n = n.parentNode));
    return At();
  }
  function Ta(e, t) {
    if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
  }
  function ti(e, t) {
    return (
      Math.round(e.top) === Math.round(t.top) &&
      Math.round(e.left) === Math.round(t.left) &&
      Math.round(e.height) === Math.round(t.height) &&
      Math.round(e.width) === Math.round(t.width)
    );
  }
  var zn;
  function mo(e, t) {
    return function () {
      if (!zn) {
        var n = arguments,
          r = this;
        n.length === 1 ? e.call(r, n[0]) : e.apply(r, n),
          (zn = setTimeout(function () {
            zn = void 0;
          }, t));
      }
    };
  }
  function Pa() {
    clearTimeout(zn), (zn = void 0);
  }
  function bo(e, t, n) {
    (e.scrollLeft += t), (e.scrollTop += n);
  }
  function yo(e) {
    var t = window.Polymer,
      n = window.jQuery || window.Zepto;
    return t && t.dom
      ? t.dom(e).cloneNode(!0)
      : n
      ? n(e).clone(!0)[0]
      : e.cloneNode(!0);
  }
  function wo(e, t, n) {
    var r = {};
    return (
      Array.from(e.children).forEach(function (o) {
        var i, s, u, h;
        if (!(!bt(o, t.draggable, e, !1) || o.animated || o === n)) {
          var p = qe(o);
          (r.left = Math.min(
            (i = r.left) !== null && i !== void 0 ? i : 1 / 0,
            p.left
          )),
            (r.top = Math.min(
              (s = r.top) !== null && s !== void 0 ? s : 1 / 0,
              p.top
            )),
            (r.right = Math.max(
              (u = r.right) !== null && u !== void 0 ? u : -1 / 0,
              p.right
            )),
            (r.bottom = Math.max(
              (h = r.bottom) !== null && h !== void 0 ? h : -1 / 0,
              p.bottom
            ));
        }
      }),
      (r.width = r.right - r.left),
      (r.height = r.bottom - r.top),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  var ft = "Sortable" + new Date().getTime();
  function Ma() {
    var e = [],
      t;
    return {
      captureAnimationState: function () {
        if (((e = []), !!this.options.animation)) {
          var r = [].slice.call(this.el.children);
          r.forEach(function (o) {
            if (!(ne(o, "display") === "none" || o === re.ghost)) {
              e.push({ target: o, rect: qe(o) });
              var i = Ct({}, e[e.length - 1].rect);
              if (o.thisAnimationDuration) {
                var s = _n(o, !0);
                s && ((i.top -= s.f), (i.left -= s.e));
              }
              o.fromRect = i;
            }
          });
        }
      },
      addAnimationState: function (r) {
        e.push(r);
      },
      removeAnimationState: function (r) {
        e.splice(_a(e, { target: r }), 1);
      },
      animateAll: function (r) {
        var o = this;
        if (!this.options.animation) {
          clearTimeout(t), typeof r == "function" && r();
          return;
        }
        var i = !1,
          s = 0;
        e.forEach(function (u) {
          var h = 0,
            p = u.target,
            x = p.fromRect,
            b = qe(p),
            E = p.prevFromRect,
            _ = p.prevToRect,
            C = u.rect,
            M = _n(p, !0);
          M && ((b.top -= M.f), (b.left -= M.e)),
            (p.toRect = b),
            p.thisAnimationDuration &&
              ti(E, b) &&
              !ti(x, b) &&
              (C.top - b.top) / (C.left - b.left) ===
                (x.top - b.top) / (x.left - b.left) &&
              (h = Ia(C, E, _, o.options)),
            ti(b, x) ||
              ((p.prevFromRect = x),
              (p.prevToRect = b),
              h || (h = o.options.animation),
              o.animate(p, C, b, h)),
            h &&
              ((i = !0),
              (s = Math.max(s, h)),
              clearTimeout(p.animationResetTimer),
              (p.animationResetTimer = setTimeout(function () {
                (p.animationTime = 0),
                  (p.prevFromRect = null),
                  (p.fromRect = null),
                  (p.prevToRect = null),
                  (p.thisAnimationDuration = null);
              }, h)),
              (p.thisAnimationDuration = h));
        }),
          clearTimeout(t),
          i
            ? (t = setTimeout(function () {
                typeof r == "function" && r();
              }, s))
            : typeof r == "function" && r(),
          (e = []);
      },
      animate: function (r, o, i, s) {
        if (s) {
          ne(r, "transition", ""), ne(r, "transform", "");
          var u = _n(this.el),
            h = u && u.a,
            p = u && u.d,
            x = (o.left - i.left) / (h || 1),
            b = (o.top - i.top) / (p || 1);
          (r.animatingX = !!x),
            (r.animatingY = !!b),
            ne(r, "transform", "translate3d(" + x + "px," + b + "px,0)"),
            (this.forRepaintDummy = Ra(r)),
            ne(
              r,
              "transition",
              "transform " +
                s +
                "ms" +
                (this.options.easing ? " " + this.options.easing : "")
            ),
            ne(r, "transform", "translate3d(0,0,0)"),
            typeof r.animated == "number" && clearTimeout(r.animated),
            (r.animated = setTimeout(function () {
              ne(r, "transition", ""),
                ne(r, "transform", ""),
                (r.animated = !1),
                (r.animatingX = !1),
                (r.animatingY = !1);
            }, s));
        }
      },
    };
  }
  function Ra(e) {
    return e.offsetWidth;
  }
  function Ia(e, t, n, r) {
    return (
      (Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) /
        Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2))) *
      r.animation
    );
  }
  var Sn = [],
    ni = { initializeByDefault: !0 },
    Kn = {
      mount: function (t) {
        for (var n in ni) ni.hasOwnProperty(n) && !(n in t) && (t[n] = ni[n]);
        Sn.forEach(function (r) {
          if (r.pluginName === t.pluginName)
            throw "Sortable: Cannot mount plugin ".concat(
              t.pluginName,
              " more than once"
            );
        }),
          Sn.push(t);
      },
      pluginEvent: function (t, n, r) {
        var o = this;
        (this.eventCanceled = !1),
          (r.cancel = function () {
            o.eventCanceled = !0;
          });
        var i = t + "Global";
        Sn.forEach(function (s) {
          n[s.pluginName] &&
            (n[s.pluginName][i] && n[s.pluginName][i](Ct({ sortable: n }, r)),
            n.options[s.pluginName] &&
              n[s.pluginName][t] &&
              n[s.pluginName][t](Ct({ sortable: n }, r)));
        });
      },
      initializePlugins: function (t, n, r, o) {
        Sn.forEach(function (u) {
          var h = u.pluginName;
          if (!(!t.options[h] && !u.initializeByDefault)) {
            var p = new u(t, n, t.options);
            (p.sortable = t),
              (p.options = t.options),
              (t[h] = p),
              Lt(r, p.defaults);
          }
        });
        for (var i in t.options)
          if (t.options.hasOwnProperty(i)) {
            var s = this.modifyOption(t, i, t.options[i]);
            typeof s < "u" && (t.options[i] = s);
          }
      },
      getEventProperties: function (t, n) {
        var r = {};
        return (
          Sn.forEach(function (o) {
            typeof o.eventProperties == "function" &&
              Lt(r, o.eventProperties.call(n[o.pluginName], t));
          }),
          r
        );
      },
      modifyOption: function (t, n, r) {
        var o;
        return (
          Sn.forEach(function (i) {
            t[i.pluginName] &&
              i.optionListeners &&
              typeof i.optionListeners[n] == "function" &&
              (o = i.optionListeners[n].call(t[i.pluginName], r));
          }),
          o
        );
      },
    };
  function Fa(e) {
    var t = e.sortable,
      n = e.rootEl,
      r = e.name,
      o = e.targetEl,
      i = e.cloneEl,
      s = e.toEl,
      u = e.fromEl,
      h = e.oldIndex,
      p = e.newIndex,
      x = e.oldDraggableIndex,
      b = e.newDraggableIndex,
      E = e.originalEvent,
      _ = e.putSortable,
      C = e.extraEventProperties;
    if (((t = t || (n && n[ft])), !!t)) {
      var M,
        U = t.options,
        V = "on" + r.charAt(0).toUpperCase() + r.substr(1);
      window.CustomEvent && !kt && !Gn
        ? (M = new CustomEvent(r, { bubbles: !0, cancelable: !0 }))
        : ((M = document.createEvent("Event")), M.initEvent(r, !0, !0)),
        (M.to = s || n),
        (M.from = u || n),
        (M.item = o || n),
        (M.clone = i),
        (M.oldIndex = h),
        (M.newIndex = p),
        (M.oldDraggableIndex = x),
        (M.newDraggableIndex = b),
        (M.originalEvent = E),
        (M.pullMode = _ ? _.lastPutMode : void 0);
      var B = Ct(Ct({}, C), Kn.getEventProperties(r, t));
      for (var Q in B) M[Q] = B[Q];
      n && n.dispatchEvent(M), U[V] && U[V].call(t, M);
    }
  }
  var Na = ["evt"],
    ot = function (t, n) {
      var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        o = r.evt,
        i = Aa(r, Na);
      Kn.pluginEvent.bind(re)(
        t,
        n,
        Ct(
          {
            dragEl: N,
            parentEl: Ue,
            ghostEl: ue,
            rootEl: ke,
            nextEl: hn,
            lastDownEl: yr,
            cloneEl: We,
            cloneHidden: tn,
            dragStarted: $n,
            putSortable: Qe,
            activeSortable: re.active,
            originalEvent: o,
            oldIndex: Dn,
            oldDraggableIndex: Yn,
            newIndex: lt,
            newDraggableIndex: en,
            hideGhostForTarget: So,
            unhideGhostForTarget: Ao,
            cloneNowHidden: function () {
              tn = !0;
            },
            cloneNowShown: function () {
              tn = !1;
            },
            dispatchSortableEvent: function (u) {
              rt({ sortable: n, name: u, originalEvent: o });
            },
          },
          i
        )
      );
    };
  function rt(e) {
    Fa(
      Ct(
        {
          putSortable: Qe,
          cloneEl: We,
          targetEl: N,
          rootEl: ke,
          oldIndex: Dn,
          oldDraggableIndex: Yn,
          newIndex: lt,
          newDraggableIndex: en,
        },
        e
      )
    );
  }
  var N,
    Ue,
    ue,
    ke,
    hn,
    yr,
    We,
    tn,
    Dn,
    lt,
    Yn,
    en,
    hr,
    Qe,
    Cn = !1,
    Sr = !1,
    Ar = [],
    dn,
    mt,
    ri,
    ii,
    lo,
    fo,
    $n,
    An,
    Xn,
    qn = !1,
    vr = !1,
    wr,
    tt,
    oi = [],
    ui = !1,
    Cr = [],
    _r = typeof document < "u",
    gr = po,
    uo = Gn || kt ? "cssFloat" : "float",
    La = _r && !ho && !po && "draggable" in document.createElement("div"),
    xo = (function () {
      if (_r) {
        if (kt) return !1;
        var e = document.createElement("x");
        return (
          (e.style.cssText = "pointer-events:auto"),
          e.style.pointerEvents === "auto"
        );
      }
    })(),
    Eo = function (t, n) {
      var r = ne(t),
        o =
          parseInt(r.width) -
          parseInt(r.paddingLeft) -
          parseInt(r.paddingRight) -
          parseInt(r.borderLeftWidth) -
          parseInt(r.borderRightWidth),
        i = Tn(t, 0, n),
        s = Tn(t, 1, n),
        u = i && ne(i),
        h = s && ne(s),
        p = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + qe(i).width,
        x = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + qe(s).width;
      if (r.display === "flex")
        return r.flexDirection === "column" ||
          r.flexDirection === "column-reverse"
          ? "vertical"
          : "horizontal";
      if (r.display === "grid")
        return r.gridTemplateColumns.split(" ").length <= 1
          ? "vertical"
          : "horizontal";
      if (i && u.float && u.float !== "none") {
        var b = u.float === "left" ? "left" : "right";
        return s && (h.clear === "both" || h.clear === b)
          ? "vertical"
          : "horizontal";
      }
      return i &&
        (u.display === "block" ||
          u.display === "flex" ||
          u.display === "table" ||
          u.display === "grid" ||
          (p >= o && r[uo] === "none") ||
          (s && r[uo] === "none" && p + x > o))
        ? "vertical"
        : "horizontal";
    },
    ka = function (t, n, r) {
      var o = r ? t.left : t.top,
        i = r ? t.right : t.bottom,
        s = r ? t.width : t.height,
        u = r ? n.left : n.top,
        h = r ? n.right : n.bottom,
        p = r ? n.width : n.height;
      return o === u || i === h || o + s / 2 === u + p / 2;
    },
    ja = function (t, n) {
      var r;
      return (
        Ar.some(function (o) {
          var i = o[ft].options.emptyInsertThreshold;
          if (!(!i || hi(o))) {
            var s = qe(o),
              u = t >= s.left - i && t <= s.right + i,
              h = n >= s.top - i && n <= s.bottom + i;
            if (u && h) return (r = o);
          }
        }),
        r
      );
    },
    Oo = function (t) {
      function n(i, s) {
        return function (u, h, p, x) {
          var b =
            u.options.group.name &&
            h.options.group.name &&
            u.options.group.name === h.options.group.name;
          if (i == null && (s || b)) return !0;
          if (i == null || i === !1) return !1;
          if (s && i === "clone") return i;
          if (typeof i == "function") return n(i(u, h, p, x), s)(u, h, p, x);
          var E = (s ? u : h).options.group.name;
          return (
            i === !0 ||
            (typeof i == "string" && i === E) ||
            (i.join && i.indexOf(E) > -1)
          );
        };
      }
      var r = {},
        o = t.group;
      (!o || br(o) != "object") && (o = { name: o }),
        (r.name = o.name),
        (r.checkPull = n(o.pull, !0)),
        (r.checkPut = n(o.put)),
        (r.revertClone = o.revertClone),
        (t.group = r);
    },
    So = function () {
      !xo && ue && ne(ue, "display", "none");
    },
    Ao = function () {
      !xo && ue && ne(ue, "display", "");
    };
  _r &&
    !ho &&
    document.addEventListener(
      "click",
      function (e) {
        if (Sr)
          return (
            e.preventDefault(),
            e.stopPropagation && e.stopPropagation(),
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
            (Sr = !1),
            !1
          );
      },
      !0
    );
  var pn = function (t) {
      if (N) {
        t = t.touches ? t.touches[0] : t;
        var n = ja(t.clientX, t.clientY);
        if (n) {
          var r = {};
          for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o]);
          (r.target = r.rootEl = n),
            (r.preventDefault = void 0),
            (r.stopPropagation = void 0),
            n[ft]._onDragOver(r);
        }
      }
    },
    Ba = function (t) {
      N && N.parentNode[ft]._isOutsideThisEl(t.target);
    };
  function re(e, t) {
    if (!(e && e.nodeType && e.nodeType === 1))
      throw "Sortable: `el` must be an HTMLElement, not ".concat(
        {}.toString.call(e)
      );
    (this.el = e), (this.options = t = Lt({}, t)), (e[ft] = this);
    var n = {
      group: null,
      sort: !0,
      disabled: !1,
      store: null,
      handle: null,
      draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
      swapThreshold: 1,
      invertSwap: !1,
      invertedSwapThreshold: null,
      removeCloneOnHide: !0,
      direction: function () {
        return Eo(e, this.options);
      },
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      ignore: "a, img",
      filter: null,
      preventOnFilter: !0,
      animation: 0,
      easing: null,
      setData: function (s, u) {
        s.setData("Text", u.textContent);
      },
      dropBubble: !1,
      dragoverBubble: !1,
      dataIdAttr: "data-id",
      delay: 0,
      delayOnTouchOnly: !1,
      touchStartThreshold:
        (Number.parseInt ? Number : window).parseInt(
          window.devicePixelRatio,
          10
        ) || 1,
      forceFallback: !1,
      fallbackClass: "sortable-fallback",
      fallbackOnBody: !1,
      fallbackTolerance: 0,
      fallbackOffset: { x: 0, y: 0 },
      supportPointer:
        re.supportPointer !== !1 && "PointerEvent" in window && !Un,
      emptyInsertThreshold: 5,
    };
    Kn.initializePlugins(this, e, n);
    for (var r in n) !(r in t) && (t[r] = n[r]);
    Oo(t);
    for (var o in this)
      o.charAt(0) === "_" &&
        typeof this[o] == "function" &&
        (this[o] = this[o].bind(this));
    (this.nativeDraggable = t.forceFallback ? !1 : La),
      this.nativeDraggable && (this.options.touchStartThreshold = 1),
      t.supportPointer
        ? Ce(e, "pointerdown", this._onTapStart)
        : (Ce(e, "mousedown", this._onTapStart),
          Ce(e, "touchstart", this._onTapStart)),
      this.nativeDraggable &&
        (Ce(e, "dragover", this), Ce(e, "dragenter", this)),
      Ar.push(this.el),
      t.store && t.store.get && this.sort(t.store.get(this) || []),
      Lt(this, Ma());
  }
  re.prototype = {
    constructor: re,
    _isOutsideThisEl: function (t) {
      !this.el.contains(t) && t !== this.el && (An = null);
    },
    _getDirection: function (t, n) {
      return typeof this.options.direction == "function"
        ? this.options.direction.call(this, t, n, N)
        : this.options.direction;
    },
    _onTapStart: function (t) {
      if (t.cancelable) {
        var n = this,
          r = this.el,
          o = this.options,
          i = o.preventOnFilter,
          s = t.type,
          u =
            (t.touches && t.touches[0]) ||
            (t.pointerType && t.pointerType === "touch" && t),
          h = (u || t).target,
          p =
            (t.target.shadowRoot &&
              ((t.path && t.path[0]) ||
                (t.composedPath && t.composedPath()[0]))) ||
            h,
          x = o.filter;
        if (
          (Xa(r),
          !N &&
            !(
              (/mousedown|pointerdown/.test(s) && t.button !== 0) ||
              o.disabled
            ) &&
            !p.isContentEditable &&
            !(
              !this.nativeDraggable &&
              Un &&
              h &&
              h.tagName.toUpperCase() === "SELECT"
            ) &&
            ((h = bt(h, o.draggable, r, !1)), !(h && h.animated) && yr !== h))
        ) {
          if (
            ((Dn = ct(h)), (Yn = ct(h, o.draggable)), typeof x == "function")
          ) {
            if (x.call(this, t, h, this)) {
              rt({
                sortable: n,
                rootEl: p,
                name: "filter",
                targetEl: h,
                toEl: r,
                fromEl: r,
              }),
                ot("filter", n, { evt: t }),
                i && t.cancelable && t.preventDefault();
              return;
            }
          } else if (
            x &&
            ((x = x.split(",").some(function (b) {
              if (((b = bt(p, b.trim(), r, !1)), b))
                return (
                  rt({
                    sortable: n,
                    rootEl: b,
                    name: "filter",
                    targetEl: h,
                    fromEl: r,
                    toEl: r,
                  }),
                  ot("filter", n, { evt: t }),
                  !0
                );
            })),
            x)
          ) {
            i && t.cancelable && t.preventDefault();
            return;
          }
          (o.handle && !bt(p, o.handle, r, !1)) ||
            this._prepareDragStart(t, u, h);
        }
      }
    },
    _prepareDragStart: function (t, n, r) {
      var o = this,
        i = o.el,
        s = o.options,
        u = i.ownerDocument,
        h;
      if (r && !N && r.parentNode === i) {
        var p = qe(r);
        if (
          ((ke = i),
          (N = r),
          (Ue = N.parentNode),
          (hn = N.nextSibling),
          (yr = r),
          (hr = s.group),
          (re.dragged = N),
          (dn = {
            target: N,
            clientX: (n || t).clientX,
            clientY: (n || t).clientY,
          }),
          (lo = dn.clientX - p.left),
          (fo = dn.clientY - p.top),
          (this._lastX = (n || t).clientX),
          (this._lastY = (n || t).clientY),
          (N.style["will-change"] = "all"),
          (h = function () {
            if ((ot("delayEnded", o, { evt: t }), re.eventCanceled)) {
              o._onDrop();
              return;
            }
            o._disableDelayedDragEvents(),
              !io && o.nativeDraggable && (N.draggable = !0),
              o._triggerDragStart(t, n),
              rt({ sortable: o, name: "choose", originalEvent: t }),
              st(N, s.chosenClass, !0);
          }),
          s.ignore.split(",").forEach(function (x) {
            go(N, x.trim(), ai);
          }),
          Ce(u, "dragover", pn),
          Ce(u, "mousemove", pn),
          Ce(u, "touchmove", pn),
          Ce(u, "mouseup", o._onDrop),
          Ce(u, "touchend", o._onDrop),
          Ce(u, "touchcancel", o._onDrop),
          io &&
            this.nativeDraggable &&
            ((this.options.touchStartThreshold = 4), (N.draggable = !0)),
          ot("delayStart", this, { evt: t }),
          s.delay &&
            (!s.delayOnTouchOnly || n) &&
            (!this.nativeDraggable || !(Gn || kt)))
        ) {
          if (re.eventCanceled) {
            this._onDrop();
            return;
          }
          Ce(u, "mouseup", o._disableDelayedDrag),
            Ce(u, "touchend", o._disableDelayedDrag),
            Ce(u, "touchcancel", o._disableDelayedDrag),
            Ce(u, "mousemove", o._delayedDragTouchMoveHandler),
            Ce(u, "touchmove", o._delayedDragTouchMoveHandler),
            s.supportPointer &&
              Ce(u, "pointermove", o._delayedDragTouchMoveHandler),
            (o._dragStartTimer = setTimeout(h, s.delay));
        } else h();
      }
    },
    _delayedDragTouchMoveHandler: function (t) {
      var n = t.touches ? t.touches[0] : t;
      Math.max(
        Math.abs(n.clientX - this._lastX),
        Math.abs(n.clientY - this._lastY)
      ) >=
        Math.floor(
          this.options.touchStartThreshold /
            ((this.nativeDraggable && window.devicePixelRatio) || 1)
        ) && this._disableDelayedDrag();
    },
    _disableDelayedDrag: function () {
      N && ai(N),
        clearTimeout(this._dragStartTimer),
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function () {
      var t = this.el.ownerDocument;
      Oe(t, "mouseup", this._disableDelayedDrag),
        Oe(t, "touchend", this._disableDelayedDrag),
        Oe(t, "touchcancel", this._disableDelayedDrag),
        Oe(t, "mousemove", this._delayedDragTouchMoveHandler),
        Oe(t, "touchmove", this._delayedDragTouchMoveHandler),
        Oe(t, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function (t, n) {
      (n = n || (t.pointerType == "touch" && t)),
        !this.nativeDraggable || n
          ? this.options.supportPointer
            ? Ce(document, "pointermove", this._onTouchMove)
            : n
            ? Ce(document, "touchmove", this._onTouchMove)
            : Ce(document, "mousemove", this._onTouchMove)
          : (Ce(N, "dragend", this), Ce(ke, "dragstart", this._onDragStart));
      try {
        document.selection
          ? xr(function () {
              document.selection.empty();
            })
          : window.getSelection().removeAllRanges();
      } catch {}
    },
    _dragStarted: function (t, n) {
      if (((Cn = !1), ke && N)) {
        ot("dragStarted", this, { evt: n }),
          this.nativeDraggable && Ce(document, "dragover", Ba);
        var r = this.options;
        !t && st(N, r.dragClass, !1),
          st(N, r.ghostClass, !0),
          (re.active = this),
          t && this._appendGhost(),
          rt({ sortable: this, name: "start", originalEvent: n });
      } else this._nulling();
    },
    _emulateDragOver: function () {
      if (mt) {
        (this._lastX = mt.clientX), (this._lastY = mt.clientY), So();
        for (
          var t = document.elementFromPoint(mt.clientX, mt.clientY), n = t;
          t &&
          t.shadowRoot &&
          ((t = t.shadowRoot.elementFromPoint(mt.clientX, mt.clientY)),
          t !== n);

        )
          n = t;
        if ((N.parentNode[ft]._isOutsideThisEl(t), n))
          do {
            if (n[ft]) {
              var r = void 0;
              if (
                ((r = n[ft]._onDragOver({
                  clientX: mt.clientX,
                  clientY: mt.clientY,
                  target: t,
                  rootEl: n,
                })),
                r && !this.options.dragoverBubble)
              )
                break;
            }
            t = n;
          } while ((n = n.parentNode));
        Ao();
      }
    },
    _onTouchMove: function (t) {
      if (dn) {
        var n = this.options,
          r = n.fallbackTolerance,
          o = n.fallbackOffset,
          i = t.touches ? t.touches[0] : t,
          s = ue && _n(ue, !0),
          u = ue && s && s.a,
          h = ue && s && s.d,
          p = gr && tt && so(tt),
          x =
            (i.clientX - dn.clientX + o.x) / (u || 1) +
            (p ? p[0] - oi[0] : 0) / (u || 1),
          b =
            (i.clientY - dn.clientY + o.y) / (h || 1) +
            (p ? p[1] - oi[1] : 0) / (h || 1);
        if (!re.active && !Cn) {
          if (
            r &&
            Math.max(
              Math.abs(i.clientX - this._lastX),
              Math.abs(i.clientY - this._lastY)
            ) < r
          )
            return;
          this._onDragStart(t, !0);
        }
        if (ue) {
          s
            ? ((s.e += x - (ri || 0)), (s.f += b - (ii || 0)))
            : (s = { a: 1, b: 0, c: 0, d: 1, e: x, f: b });
          var E = "matrix("
            .concat(s.a, ",")
            .concat(s.b, ",")
            .concat(s.c, ",")
            .concat(s.d, ",")
            .concat(s.e, ",")
            .concat(s.f, ")");
          ne(ue, "webkitTransform", E),
            ne(ue, "mozTransform", E),
            ne(ue, "msTransform", E),
            ne(ue, "transform", E),
            (ri = x),
            (ii = b),
            (mt = i);
        }
        t.cancelable && t.preventDefault();
      }
    },
    _appendGhost: function () {
      if (!ue) {
        var t = this.options.fallbackOnBody ? document.body : ke,
          n = qe(N, !0, gr, !0, t),
          r = this.options;
        if (gr) {
          for (
            tt = t;
            ne(tt, "position") === "static" &&
            ne(tt, "transform") === "none" &&
            tt !== document;

          )
            tt = tt.parentNode;
          tt !== document.body && tt !== document.documentElement
            ? (tt === document && (tt = At()),
              (n.top += tt.scrollTop),
              (n.left += tt.scrollLeft))
            : (tt = At()),
            (oi = so(tt));
        }
        (ue = N.cloneNode(!0)),
          st(ue, r.ghostClass, !1),
          st(ue, r.fallbackClass, !0),
          st(ue, r.dragClass, !0),
          ne(ue, "transition", ""),
          ne(ue, "transform", ""),
          ne(ue, "box-sizing", "border-box"),
          ne(ue, "margin", 0),
          ne(ue, "top", n.top),
          ne(ue, "left", n.left),
          ne(ue, "width", n.width),
          ne(ue, "height", n.height),
          ne(ue, "opacity", "0.8"),
          ne(ue, "position", gr ? "absolute" : "fixed"),
          ne(ue, "zIndex", "100000"),
          ne(ue, "pointerEvents", "none"),
          (re.ghost = ue),
          t.appendChild(ue),
          ne(
            ue,
            "transform-origin",
            (lo / parseInt(ue.style.width)) * 100 +
              "% " +
              (fo / parseInt(ue.style.height)) * 100 +
              "%"
          );
      }
    },
    _onDragStart: function (t, n) {
      var r = this,
        o = t.dataTransfer,
        i = r.options;
      if ((ot("dragStart", this, { evt: t }), re.eventCanceled)) {
        this._onDrop();
        return;
      }
      ot("setupClone", this),
        re.eventCanceled ||
          ((We = yo(N)),
          We.removeAttribute("id"),
          (We.draggable = !1),
          (We.style["will-change"] = ""),
          this._hideClone(),
          st(We, this.options.chosenClass, !1),
          (re.clone = We)),
        (r.cloneId = xr(function () {
          ot("clone", r),
            !re.eventCanceled &&
              (r.options.removeCloneOnHide || ke.insertBefore(We, N),
              r._hideClone(),
              rt({ sortable: r, name: "clone" }));
        })),
        !n && st(N, i.dragClass, !0),
        n
          ? ((Sr = !0), (r._loopId = setInterval(r._emulateDragOver, 50)))
          : (Oe(document, "mouseup", r._onDrop),
            Oe(document, "touchend", r._onDrop),
            Oe(document, "touchcancel", r._onDrop),
            o &&
              ((o.effectAllowed = "move"),
              i.setData && i.setData.call(r, o, N)),
            Ce(document, "drop", r),
            ne(N, "transform", "translateZ(0)")),
        (Cn = !0),
        (r._dragStartId = xr(r._dragStarted.bind(r, n, t))),
        Ce(document, "selectstart", r),
        ($n = !0),
        Un && ne(document.body, "user-select", "none");
    },
    _onDragOver: function (t) {
      var n = this.el,
        r = t.target,
        o,
        i,
        s,
        u = this.options,
        h = u.group,
        p = re.active,
        x = hr === h,
        b = u.sort,
        E = Qe || p,
        _,
        C = this,
        M = !1;
      if (ui) return;
      function U(P, G) {
        ot(
          P,
          C,
          Ct(
            {
              evt: t,
              isOwner: x,
              axis: _ ? "vertical" : "horizontal",
              revert: s,
              dragRect: o,
              targetRect: i,
              canSort: b,
              fromSortable: E,
              target: r,
              completed: B,
              onMove: function (Dt, jt) {
                return mr(ke, n, N, o, Dt, qe(Dt), t, jt);
              },
              changed: Q,
            },
            G
          )
        );
      }
      function V() {
        U("dragOverAnimationCapture"),
          C.captureAnimationState(),
          C !== E && E.captureAnimationState();
      }
      function B(P) {
        return (
          U("dragOverCompleted", { insertion: P }),
          P &&
            (x ? p._hideClone() : p._showClone(C),
            C !== E &&
              (st(N, Qe ? Qe.options.ghostClass : p.options.ghostClass, !1),
              st(N, u.ghostClass, !0)),
            Qe !== C && C !== re.active
              ? (Qe = C)
              : C === re.active && Qe && (Qe = null),
            E === C && (C._ignoreWhileAnimating = r),
            C.animateAll(function () {
              U("dragOverAnimationComplete"), (C._ignoreWhileAnimating = null);
            }),
            C !== E && (E.animateAll(), (E._ignoreWhileAnimating = null))),
          ((r === N && !N.animated) || (r === n && !r.animated)) && (An = null),
          !u.dragoverBubble &&
            !t.rootEl &&
            r !== document &&
            (N.parentNode[ft]._isOutsideThisEl(t.target), !P && pn(t)),
          !u.dragoverBubble && t.stopPropagation && t.stopPropagation(),
          (M = !0)
        );
      }
      function Q() {
        (lt = ct(N)),
          (en = ct(N, u.draggable)),
          rt({
            sortable: C,
            name: "change",
            toEl: n,
            newIndex: lt,
            newDraggableIndex: en,
            originalEvent: t,
          });
      }
      if (
        (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(),
        (r = bt(r, u.draggable, n, !0)),
        U("dragOver"),
        re.eventCanceled)
      )
        return M;
      if (
        N.contains(t.target) ||
        (r.animated && r.animatingX && r.animatingY) ||
        C._ignoreWhileAnimating === r
      )
        return B(!1);
      if (
        ((Sr = !1),
        p &&
          !u.disabled &&
          (x
            ? b || (s = Ue !== ke)
            : Qe === this ||
              ((this.lastPutMode = hr.checkPull(this, p, N, t)) &&
                h.checkPut(this, p, N, t))))
      ) {
        if (
          ((_ = this._getDirection(t, r) === "vertical"),
          (o = qe(N)),
          U("dragOverValid"),
          re.eventCanceled)
        )
          return M;
        if (s)
          return (
            (Ue = ke),
            V(),
            this._hideClone(),
            U("revert"),
            re.eventCanceled ||
              (hn ? ke.insertBefore(N, hn) : ke.appendChild(N)),
            B(!0)
          );
        var q = hi(n, u.draggable);
        if (!q || (Va(t, _, this) && !q.animated)) {
          if (q === N) return B(!1);
          if (
            (q && n === t.target && (r = q),
            r && (i = qe(r)),
            mr(ke, n, N, o, r, i, t, !!r) !== !1)
          )
            return (
              V(),
              q && q.nextSibling
                ? n.insertBefore(N, q.nextSibling)
                : n.appendChild(N),
              (Ue = n),
              Q(),
              B(!0)
            );
        } else if (q && Wa(t, _, this)) {
          var xe = Tn(n, 0, u, !0);
          if (xe === N) return B(!1);
          if (((r = xe), (i = qe(r)), mr(ke, n, N, o, r, i, t, !1) !== !1))
            return V(), n.insertBefore(N, xe), (Ue = n), Q(), B(!0);
        } else if (r.parentNode === n) {
          i = qe(r);
          var se = 0,
            ie,
            be = N.parentNode !== n,
            R = !ka(
              (N.animated && N.toRect) || o,
              (r.animated && r.toRect) || i,
              _
            ),
            fe = _ ? "top" : "left",
            ce = ao(r, "top", "top") || ao(N, "top", "top"),
            l = ce ? ce.scrollTop : void 0;
          An !== r &&
            ((ie = i[fe]), (qn = !1), (vr = (!R && u.invertSwap) || be)),
            (se = Ua(
              t,
              r,
              i,
              _,
              R ? 1 : u.swapThreshold,
              u.invertedSwapThreshold == null
                ? u.swapThreshold
                : u.invertedSwapThreshold,
              vr,
              An === r
            ));
          var d;
          if (se !== 0) {
            var v = ct(N);
            do (v -= se), (d = Ue.children[v]);
            while (d && (ne(d, "display") === "none" || d === ue));
          }
          if (se === 0 || d === r) return B(!1);
          (An = r), (Xn = se);
          var c = r.nextElementSibling,
            H = !1;
          H = se === 1;
          var T = mr(ke, n, N, o, r, i, t, H);
          if (T !== !1)
            return (
              (T === 1 || T === -1) && (H = T === 1),
              (ui = !0),
              setTimeout($a, 30),
              V(),
              H && !c
                ? n.appendChild(N)
                : r.parentNode.insertBefore(N, H ? c : r),
              ce && bo(ce, 0, l - ce.scrollTop),
              (Ue = N.parentNode),
              ie !== void 0 && !vr && (wr = Math.abs(ie - qe(r)[fe])),
              Q(),
              B(!0)
            );
        }
        if (n.contains(N)) return B(!1);
      }
      return !1;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function () {
      Oe(document, "mousemove", this._onTouchMove),
        Oe(document, "touchmove", this._onTouchMove),
        Oe(document, "pointermove", this._onTouchMove),
        Oe(document, "dragover", pn),
        Oe(document, "mousemove", pn),
        Oe(document, "touchmove", pn);
    },
    _offUpEvents: function () {
      var t = this.el.ownerDocument;
      Oe(t, "mouseup", this._onDrop),
        Oe(t, "touchend", this._onDrop),
        Oe(t, "pointerup", this._onDrop),
        Oe(t, "touchcancel", this._onDrop),
        Oe(document, "selectstart", this);
    },
    _onDrop: function (t) {
      var n = this.el,
        r = this.options;
      if (
        ((lt = ct(N)),
        (en = ct(N, r.draggable)),
        ot("drop", this, { evt: t }),
        (Ue = N && N.parentNode),
        (lt = ct(N)),
        (en = ct(N, r.draggable)),
        re.eventCanceled)
      ) {
        this._nulling();
        return;
      }
      (Cn = !1),
        (vr = !1),
        (qn = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        ci(this.cloneId),
        ci(this._dragStartId),
        this.nativeDraggable &&
          (Oe(document, "drop", this), Oe(n, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        Un && ne(document.body, "user-select", ""),
        ne(N, "transform", ""),
        t &&
          ($n &&
            (t.cancelable && t.preventDefault(),
            !r.dropBubble && t.stopPropagation()),
          ue && ue.parentNode && ue.parentNode.removeChild(ue),
          (ke === Ue || (Qe && Qe.lastPutMode !== "clone")) &&
            We &&
            We.parentNode &&
            We.parentNode.removeChild(We),
          N &&
            (this.nativeDraggable && Oe(N, "dragend", this),
            ai(N),
            (N.style["will-change"] = ""),
            $n &&
              !Cn &&
              st(N, Qe ? Qe.options.ghostClass : this.options.ghostClass, !1),
            st(N, this.options.chosenClass, !1),
            rt({
              sortable: this,
              name: "unchoose",
              toEl: Ue,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: t,
            }),
            ke !== Ue
              ? (lt >= 0 &&
                  (rt({
                    rootEl: Ue,
                    name: "add",
                    toEl: Ue,
                    fromEl: ke,
                    originalEvent: t,
                  }),
                  rt({
                    sortable: this,
                    name: "remove",
                    toEl: Ue,
                    originalEvent: t,
                  }),
                  rt({
                    rootEl: Ue,
                    name: "sort",
                    toEl: Ue,
                    fromEl: ke,
                    originalEvent: t,
                  }),
                  rt({
                    sortable: this,
                    name: "sort",
                    toEl: Ue,
                    originalEvent: t,
                  })),
                Qe && Qe.save())
              : lt !== Dn &&
                lt >= 0 &&
                (rt({
                  sortable: this,
                  name: "update",
                  toEl: Ue,
                  originalEvent: t,
                }),
                rt({
                  sortable: this,
                  name: "sort",
                  toEl: Ue,
                  originalEvent: t,
                })),
            re.active &&
              ((lt == null || lt === -1) && ((lt = Dn), (en = Yn)),
              rt({ sortable: this, name: "end", toEl: Ue, originalEvent: t }),
              this.save()))),
        this._nulling();
    },
    _nulling: function () {
      ot("nulling", this),
        (ke =
          N =
          Ue =
          ue =
          hn =
          We =
          yr =
          tn =
          dn =
          mt =
          $n =
          lt =
          en =
          Dn =
          Yn =
          An =
          Xn =
          Qe =
          hr =
          re.dragged =
          re.ghost =
          re.clone =
          re.active =
            null),
        Cr.forEach(function (t) {
          t.checked = !0;
        }),
        (Cr.length = ri = ii = 0);
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "drop":
        case "dragend":
          this._onDrop(t);
          break;
        case "dragenter":
        case "dragover":
          N && (this._onDragOver(t), Ha(t));
          break;
        case "selectstart":
          t.preventDefault();
          break;
      }
    },
    toArray: function () {
      for (
        var t = [],
          n,
          r = this.el.children,
          o = 0,
          i = r.length,
          s = this.options;
        o < i;
        o++
      )
        (n = r[o]),
          bt(n, s.draggable, this.el, !1) &&
            t.push(n.getAttribute(s.dataIdAttr) || Ya(n));
      return t;
    },
    sort: function (t, n) {
      var r = {},
        o = this.el;
      this.toArray().forEach(function (i, s) {
        var u = o.children[s];
        bt(u, this.options.draggable, o, !1) && (r[i] = u);
      }, this),
        n && this.captureAnimationState(),
        t.forEach(function (i) {
          r[i] && (o.removeChild(r[i]), o.appendChild(r[i]));
        }),
        n && this.animateAll();
    },
    save: function () {
      var t = this.options.store;
      t && t.set && t.set(this);
    },
    closest: function (t, n) {
      return bt(t, n || this.options.draggable, this.el, !1);
    },
    option: function (t, n) {
      var r = this.options;
      if (n === void 0) return r[t];
      var o = Kn.modifyOption(this, t, n);
      typeof o < "u" ? (r[t] = o) : (r[t] = n), t === "group" && Oo(r);
    },
    destroy: function () {
      ot("destroy", this);
      var t = this.el;
      (t[ft] = null),
        Oe(t, "mousedown", this._onTapStart),
        Oe(t, "touchstart", this._onTapStart),
        Oe(t, "pointerdown", this._onTapStart),
        this.nativeDraggable &&
          (Oe(t, "dragover", this), Oe(t, "dragenter", this)),
        Array.prototype.forEach.call(
          t.querySelectorAll("[draggable]"),
          function (n) {
            n.removeAttribute("draggable");
          }
        ),
        this._onDrop(),
        this._disableDelayedDragEvents(),
        Ar.splice(Ar.indexOf(this.el), 1),
        (this.el = t = null);
    },
    _hideClone: function () {
      if (!tn) {
        if ((ot("hideClone", this), re.eventCanceled)) return;
        ne(We, "display", "none"),
          this.options.removeCloneOnHide &&
            We.parentNode &&
            We.parentNode.removeChild(We),
          (tn = !0);
      }
    },
    _showClone: function (t) {
      if (t.lastPutMode !== "clone") {
        this._hideClone();
        return;
      }
      if (tn) {
        if ((ot("showClone", this), re.eventCanceled)) return;
        N.parentNode == ke && !this.options.group.revertClone
          ? ke.insertBefore(We, N)
          : hn
          ? ke.insertBefore(We, hn)
          : ke.appendChild(We),
          this.options.group.revertClone && this.animate(N, We),
          ne(We, "display", ""),
          (tn = !1);
      }
    },
  };
  function Ha(e) {
    e.dataTransfer && (e.dataTransfer.dropEffect = "move"),
      e.cancelable && e.preventDefault();
  }
  function mr(e, t, n, r, o, i, s, u) {
    var h,
      p = e[ft],
      x = p.options.onMove,
      b;
    return (
      window.CustomEvent && !kt && !Gn
        ? (h = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
        : ((h = document.createEvent("Event")), h.initEvent("move", !0, !0)),
      (h.to = t),
      (h.from = e),
      (h.dragged = n),
      (h.draggedRect = r),
      (h.related = o || t),
      (h.relatedRect = i || qe(t)),
      (h.willInsertAfter = u),
      (h.originalEvent = s),
      e.dispatchEvent(h),
      x && (b = x.call(p, h, s)),
      b
    );
  }
  function ai(e) {
    e.draggable = !1;
  }
  function $a() {
    ui = !1;
  }
  function Wa(e, t, n) {
    var r = qe(Tn(n.el, 0, n.options, !0)),
      o = wo(n.el, n.options, ue),
      i = 10;
    return t
      ? e.clientX < o.left - i || (e.clientY < r.top && e.clientX < r.right)
      : e.clientY < o.top - i || (e.clientY < r.bottom && e.clientX < r.left);
  }
  function Va(e, t, n) {
    var r = qe(hi(n.el, n.options.draggable)),
      o = wo(n.el, n.options, ue),
      i = 10;
    return t
      ? e.clientX > o.right + i || (e.clientY > r.bottom && e.clientX > r.left)
      : e.clientY > o.bottom + i || (e.clientX > r.right && e.clientY > r.top);
  }
  function Ua(e, t, n, r, o, i, s, u) {
    var h = r ? e.clientY : e.clientX,
      p = r ? n.height : n.width,
      x = r ? n.top : n.left,
      b = r ? n.bottom : n.right,
      E = !1;
    if (!s) {
      if (u && wr < p * o) {
        if (
          (!qn &&
            (Xn === 1 ? h > x + (p * i) / 2 : h < b - (p * i) / 2) &&
            (qn = !0),
          qn)
        )
          E = !0;
        else if (Xn === 1 ? h < x + wr : h > b - wr) return -Xn;
      } else if (h > x + (p * (1 - o)) / 2 && h < b - (p * (1 - o)) / 2)
        return za(t);
    }
    return (
      (E = E || s),
      E && (h < x + (p * i) / 2 || h > b - (p * i) / 2)
        ? h > x + p / 2
          ? 1
          : -1
        : 0
    );
  }
  function za(e) {
    return ct(N) < ct(e) ? 1 : -1;
  }
  function Ya(e) {
    for (
      var t = e.tagName + e.className + e.src + e.href + e.textContent,
        n = t.length,
        r = 0;
      n--;

    )
      r += t.charCodeAt(n);
    return r.toString(36);
  }
  function Xa(e) {
    Cr.length = 0;
    for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
      var r = t[n];
      r.checked && Cr.push(r);
    }
  }
  function xr(e) {
    return setTimeout(e, 0);
  }
  function ci(e) {
    return clearTimeout(e);
  }
  _r &&
    Ce(document, "touchmove", function (e) {
      (re.active || Cn) && e.cancelable && e.preventDefault();
    });
  re.utils = {
    on: Ce,
    off: Oe,
    css: ne,
    find: go,
    is: function (t, n) {
      return !!bt(t, n, t, !1);
    },
    extend: Ta,
    throttle: mo,
    closest: bt,
    toggleClass: st,
    clone: yo,
    index: ct,
    nextTick: xr,
    cancelNextTick: ci,
    detectDirection: Eo,
    getChild: Tn,
  };
  re.get = function (e) {
    return e[ft];
  };
  re.mount = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t[0].constructor === Array && (t = t[0]),
      t.forEach(function (r) {
        if (!r.prototype || !r.prototype.constructor)
          throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
            {}.toString.call(r)
          );
        r.utils && (re.utils = Ct(Ct({}, re.utils), r.utils)), Kn.mount(r);
      });
  };
  re.create = function (e, t) {
    return new re(e, t);
  };
  re.version = Ca;
  var Xe = [],
    Wn,
    di,
    pi = !1,
    si,
    li,
    Dr,
    Vn;
  function qa() {
    function e() {
      this.defaults = {
        scroll: !0,
        forceAutoScrollFallback: !1,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: !0,
      };
      for (var t in this)
        t.charAt(0) === "_" &&
          typeof this[t] == "function" &&
          (this[t] = this[t].bind(this));
    }
    return (
      (e.prototype = {
        dragStarted: function (n) {
          var r = n.originalEvent;
          this.sortable.nativeDraggable
            ? Ce(document, "dragover", this._handleAutoScroll)
            : this.options.supportPointer
            ? Ce(document, "pointermove", this._handleFallbackAutoScroll)
            : r.touches
            ? Ce(document, "touchmove", this._handleFallbackAutoScroll)
            : Ce(document, "mousemove", this._handleFallbackAutoScroll);
        },
        dragOverCompleted: function (n) {
          var r = n.originalEvent;
          !this.options.dragOverBubble &&
            !r.rootEl &&
            this._handleAutoScroll(r);
        },
        drop: function () {
          this.sortable.nativeDraggable
            ? Oe(document, "dragover", this._handleAutoScroll)
            : (Oe(document, "pointermove", this._handleFallbackAutoScroll),
              Oe(document, "touchmove", this._handleFallbackAutoScroll),
              Oe(document, "mousemove", this._handleFallbackAutoScroll)),
            co(),
            Er(),
            Pa();
        },
        nulling: function () {
          (Dr = di = Wn = pi = Vn = si = li = null), (Xe.length = 0);
        },
        _handleFallbackAutoScroll: function (n) {
          this._handleAutoScroll(n, !0);
        },
        _handleAutoScroll: function (n, r) {
          var o = this,
            i = (n.touches ? n.touches[0] : n).clientX,
            s = (n.touches ? n.touches[0] : n).clientY,
            u = document.elementFromPoint(i, s);
          if (
            ((Dr = n),
            r || this.options.forceAutoScrollFallback || Gn || kt || Un)
          ) {
            fi(n, this.options, u, r);
            var h = nn(u, !0);
            pi &&
              (!Vn || i !== si || s !== li) &&
              (Vn && co(),
              (Vn = setInterval(function () {
                var p = nn(document.elementFromPoint(i, s), !0);
                p !== h && ((h = p), Er()), fi(n, o.options, p, r);
              }, 10)),
              (si = i),
              (li = s));
          } else {
            if (!this.options.bubbleScroll || nn(u, !0) === At()) {
              Er();
              return;
            }
            fi(n, this.options, nn(u, !1), !1);
          }
        },
      }),
      Lt(e, { pluginName: "scroll", initializeByDefault: !0 })
    );
  }
  function Er() {
    Xe.forEach(function (e) {
      clearInterval(e.pid);
    }),
      (Xe = []);
  }
  function co() {
    clearInterval(Vn);
  }
  var fi = mo(function (e, t, n, r) {
      if (t.scroll) {
        var o = (e.touches ? e.touches[0] : e).clientX,
          i = (e.touches ? e.touches[0] : e).clientY,
          s = t.scrollSensitivity,
          u = t.scrollSpeed,
          h = At(),
          p = !1,
          x;
        di !== n &&
          ((di = n),
          Er(),
          (Wn = t.scroll),
          (x = t.scrollFn),
          Wn === !0 && (Wn = nn(n, !0)));
        var b = 0,
          E = Wn;
        do {
          var _ = E,
            C = qe(_),
            M = C.top,
            U = C.bottom,
            V = C.left,
            B = C.right,
            Q = C.width,
            q = C.height,
            xe = void 0,
            se = void 0,
            ie = _.scrollWidth,
            be = _.scrollHeight,
            R = ne(_),
            fe = _.scrollLeft,
            ce = _.scrollTop;
          _ === h
            ? ((xe =
                Q < ie &&
                (R.overflowX === "auto" ||
                  R.overflowX === "scroll" ||
                  R.overflowX === "visible")),
              (se =
                q < be &&
                (R.overflowY === "auto" ||
                  R.overflowY === "scroll" ||
                  R.overflowY === "visible")))
            : ((xe =
                Q < ie && (R.overflowX === "auto" || R.overflowX === "scroll")),
              (se =
                q < be &&
                (R.overflowY === "auto" || R.overflowY === "scroll")));
          var l =
              xe &&
              (Math.abs(B - o) <= s && fe + Q < ie) -
                (Math.abs(V - o) <= s && !!fe),
            d =
              se &&
              (Math.abs(U - i) <= s && ce + q < be) -
                (Math.abs(M - i) <= s && !!ce);
          if (!Xe[b]) for (var v = 0; v <= b; v++) Xe[v] || (Xe[v] = {});
          (Xe[b].vx != l || Xe[b].vy != d || Xe[b].el !== _) &&
            ((Xe[b].el = _),
            (Xe[b].vx = l),
            (Xe[b].vy = d),
            clearInterval(Xe[b].pid),
            (l != 0 || d != 0) &&
              ((p = !0),
              (Xe[b].pid = setInterval(
                function () {
                  r && this.layer === 0 && re.active._onTouchMove(Dr);
                  var c = Xe[this.layer].vy ? Xe[this.layer].vy * u : 0,
                    H = Xe[this.layer].vx ? Xe[this.layer].vx * u : 0;
                  (typeof x == "function" &&
                    x.call(
                      re.dragged.parentNode[ft],
                      H,
                      c,
                      e,
                      Dr,
                      Xe[this.layer].el
                    ) !== "continue") ||
                    bo(Xe[this.layer].el, H, c);
                }.bind({ layer: b }),
                24
              )))),
            b++;
        } while (t.bubbleScroll && E !== h && (E = nn(E, !1)));
        pi = p;
      }
    }, 30),
    Co = function (t) {
      var n = t.originalEvent,
        r = t.putSortable,
        o = t.dragEl,
        i = t.activeSortable,
        s = t.dispatchSortableEvent,
        u = t.hideGhostForTarget,
        h = t.unhideGhostForTarget;
      if (n) {
        var p = r || i;
        u();
        var x =
            n.changedTouches && n.changedTouches.length
              ? n.changedTouches[0]
              : n,
          b = document.elementFromPoint(x.clientX, x.clientY);
        h(),
          p &&
            !p.el.contains(b) &&
            (s("spill"), this.onSpill({ dragEl: o, putSortable: r }));
      }
    };
  function vi() {}
  vi.prototype = {
    startIndex: null,
    dragStart: function (t) {
      var n = t.oldDraggableIndex;
      this.startIndex = n;
    },
    onSpill: function (t) {
      var n = t.dragEl,
        r = t.putSortable;
      this.sortable.captureAnimationState(), r && r.captureAnimationState();
      var o = Tn(this.sortable.el, this.startIndex, this.options);
      o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n),
        this.sortable.animateAll(),
        r && r.animateAll();
    },
    drop: Co,
  };
  Lt(vi, { pluginName: "revertOnSpill" });
  function gi() {}
  gi.prototype = {
    onSpill: function (t) {
      var n = t.dragEl,
        r = t.putSortable,
        o = r || this.sortable;
      o.captureAnimationState(),
        n.parentNode && n.parentNode.removeChild(n),
        o.animateAll();
    },
    drop: Co,
  };
  Lt(gi, { pluginName: "removeOnSpill" });
  re.mount(new qa());
  re.mount(gi, vi);
  var mi = re;
  window.Sortable = mi;
  var Do = (e) => {
    e.directive("sortable", (t) => {
      let n = parseInt(t.dataset?.sortableAnimationDuration);
      n !== 0 && !n && (n = 300),
        (t.sortable = mi.create(t, {
          group: t.getAttribute("x-sortable-group"),
          draggable: "[x-sortable-item]",
          handle: "[x-sortable-handle]",
          dataIdAttr: "x-sortable-item",
          animation: n,
          ghostClass: "fi-sortable-ghost",
        }));
    });
  };
  var Ga = Object.create,
    wi = Object.defineProperty,
    Ka = Object.getPrototypeOf,
    Ja = Object.prototype.hasOwnProperty,
    Qa = Object.getOwnPropertyNames,
    Za = Object.getOwnPropertyDescriptor,
    es = (e) => wi(e, "__esModule", { value: !0 }),
    _o = (e, t) => () => (
      t || ((t = { exports: {} }), e(t.exports, t)), t.exports
    ),
    ts = (e, t, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of Qa(t))
          !Ja.call(e, r) &&
            r !== "default" &&
            wi(e, r, {
              get: () => t[r],
              enumerable: !(n = Za(t, r)) || n.enumerable,
            });
      return e;
    },
    To = (e) =>
      ts(
        es(
          wi(
            e != null ? Ga(Ka(e)) : {},
            "default",
            e && e.__esModule && "default" in e
              ? { get: () => e.default, enumerable: !0 }
              : { value: e, enumerable: !0 }
          )
        ),
        e
      ),
    ns = _o((e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(f) {
        var a = f.getBoundingClientRect();
        return {
          width: a.width,
          height: a.height,
          top: a.top,
          right: a.right,
          bottom: a.bottom,
          left: a.left,
          x: a.left,
          y: a.top,
        };
      }
      function n(f) {
        if (f == null) return window;
        if (f.toString() !== "[object Window]") {
          var a = f.ownerDocument;
          return (a && a.defaultView) || window;
        }
        return f;
      }
      function r(f) {
        var a = n(f),
          m = a.pageXOffset,
          A = a.pageYOffset;
        return { scrollLeft: m, scrollTop: A };
      }
      function o(f) {
        var a = n(f).Element;
        return f instanceof a || f instanceof Element;
      }
      function i(f) {
        var a = n(f).HTMLElement;
        return f instanceof a || f instanceof HTMLElement;
      }
      function s(f) {
        if (typeof ShadowRoot > "u") return !1;
        var a = n(f).ShadowRoot;
        return f instanceof a || f instanceof ShadowRoot;
      }
      function u(f) {
        return { scrollLeft: f.scrollLeft, scrollTop: f.scrollTop };
      }
      function h(f) {
        return f === n(f) || !i(f) ? r(f) : u(f);
      }
      function p(f) {
        return f ? (f.nodeName || "").toLowerCase() : null;
      }
      function x(f) {
        return ((o(f) ? f.ownerDocument : f.document) || window.document)
          .documentElement;
      }
      function b(f) {
        return t(x(f)).left + r(f).scrollLeft;
      }
      function E(f) {
        return n(f).getComputedStyle(f);
      }
      function _(f) {
        var a = E(f),
          m = a.overflow,
          A = a.overflowX,
          D = a.overflowY;
        return /auto|scroll|overlay|hidden/.test(m + D + A);
      }
      function C(f, a, m) {
        m === void 0 && (m = !1);
        var A = x(a),
          D = t(f),
          F = i(a),
          $ = { scrollLeft: 0, scrollTop: 0 },
          k = { x: 0, y: 0 };
        return (
          (F || (!F && !m)) &&
            ((p(a) !== "body" || _(A)) && ($ = h(a)),
            i(a)
              ? ((k = t(a)), (k.x += a.clientLeft), (k.y += a.clientTop))
              : A && (k.x = b(A))),
          {
            x: D.left + $.scrollLeft - k.x,
            y: D.top + $.scrollTop - k.y,
            width: D.width,
            height: D.height,
          }
        );
      }
      function M(f) {
        var a = t(f),
          m = f.offsetWidth,
          A = f.offsetHeight;
        return (
          Math.abs(a.width - m) <= 1 && (m = a.width),
          Math.abs(a.height - A) <= 1 && (A = a.height),
          { x: f.offsetLeft, y: f.offsetTop, width: m, height: A }
        );
      }
      function U(f) {
        return p(f) === "html"
          ? f
          : f.assignedSlot || f.parentNode || (s(f) ? f.host : null) || x(f);
      }
      function V(f) {
        return ["html", "body", "#document"].indexOf(p(f)) >= 0
          ? f.ownerDocument.body
          : i(f) && _(f)
          ? f
          : V(U(f));
      }
      function B(f, a) {
        var m;
        a === void 0 && (a = []);
        var A = V(f),
          D = A === ((m = f.ownerDocument) == null ? void 0 : m.body),
          F = n(A),
          $ = D ? [F].concat(F.visualViewport || [], _(A) ? A : []) : A,
          k = a.concat($);
        return D ? k : k.concat(B(U($)));
      }
      function Q(f) {
        return ["table", "td", "th"].indexOf(p(f)) >= 0;
      }
      function q(f) {
        return !i(f) || E(f).position === "fixed" ? null : f.offsetParent;
      }
      function xe(f) {
        var a = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
          m = navigator.userAgent.indexOf("Trident") !== -1;
        if (m && i(f)) {
          var A = E(f);
          if (A.position === "fixed") return null;
        }
        for (var D = U(f); i(D) && ["html", "body"].indexOf(p(D)) < 0; ) {
          var F = E(D);
          if (
            F.transform !== "none" ||
            F.perspective !== "none" ||
            F.contain === "paint" ||
            ["transform", "perspective"].indexOf(F.willChange) !== -1 ||
            (a && F.willChange === "filter") ||
            (a && F.filter && F.filter !== "none")
          )
            return D;
          D = D.parentNode;
        }
        return null;
      }
      function se(f) {
        for (var a = n(f), m = q(f); m && Q(m) && E(m).position === "static"; )
          m = q(m);
        return m &&
          (p(m) === "html" || (p(m) === "body" && E(m).position === "static"))
          ? a
          : m || xe(f) || a;
      }
      var ie = "top",
        be = "bottom",
        R = "right",
        fe = "left",
        ce = "auto",
        l = [ie, be, R, fe],
        d = "start",
        v = "end",
        c = "clippingParents",
        H = "viewport",
        T = "popper",
        P = "reference",
        G = l.reduce(function (f, a) {
          return f.concat([a + "-" + d, a + "-" + v]);
        }, []),
        ze = [].concat(l, [ce]).reduce(function (f, a) {
          return f.concat([a, a + "-" + d, a + "-" + v]);
        }, []),
        Dt = "beforeRead",
        jt = "read",
        Tr = "afterRead",
        Pr = "beforeMain",
        Mr = "main",
        Bt = "afterMain",
        Jn = "beforeWrite",
        Rr = "write",
        Qn = "afterWrite",
        _t = [Dt, jt, Tr, Pr, Mr, Bt, Jn, Rr, Qn];
      function Ir(f) {
        var a = new Map(),
          m = new Set(),
          A = [];
        f.forEach(function (F) {
          a.set(F.name, F);
        });
        function D(F) {
          m.add(F.name);
          var $ = [].concat(F.requires || [], F.requiresIfExists || []);
          $.forEach(function (k) {
            if (!m.has(k)) {
              var Y = a.get(k);
              Y && D(Y);
            }
          }),
            A.push(F);
        }
        return (
          f.forEach(function (F) {
            m.has(F.name) || D(F);
          }),
          A
        );
      }
      function dt(f) {
        var a = Ir(f);
        return _t.reduce(function (m, A) {
          return m.concat(
            a.filter(function (D) {
              return D.phase === A;
            })
          );
        }, []);
      }
      function Ht(f) {
        var a;
        return function () {
          return (
            a ||
              (a = new Promise(function (m) {
                Promise.resolve().then(function () {
                  (a = void 0), m(f());
                });
              })),
            a
          );
        };
      }
      function yt(f) {
        for (
          var a = arguments.length, m = new Array(a > 1 ? a - 1 : 0), A = 1;
          A < a;
          A++
        )
          m[A - 1] = arguments[A];
        return [].concat(m).reduce(function (D, F) {
          return D.replace(/%s/, F);
        }, f);
      }
      var wt =
          'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
        Fr =
          'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
        Ze = [
          "name",
          "enabled",
          "phase",
          "fn",
          "effect",
          "requires",
          "options",
        ];
      function Nr(f) {
        f.forEach(function (a) {
          Object.keys(a).forEach(function (m) {
            switch (m) {
              case "name":
                typeof a.name != "string" &&
                  console.error(
                    yt(
                      wt,
                      String(a.name),
                      '"name"',
                      '"string"',
                      '"' + String(a.name) + '"'
                    )
                  );
                break;
              case "enabled":
                typeof a.enabled != "boolean" &&
                  console.error(
                    yt(
                      wt,
                      a.name,
                      '"enabled"',
                      '"boolean"',
                      '"' + String(a.enabled) + '"'
                    )
                  );
              case "phase":
                _t.indexOf(a.phase) < 0 &&
                  console.error(
                    yt(
                      wt,
                      a.name,
                      '"phase"',
                      "either " + _t.join(", "),
                      '"' + String(a.phase) + '"'
                    )
                  );
                break;
              case "fn":
                typeof a.fn != "function" &&
                  console.error(
                    yt(
                      wt,
                      a.name,
                      '"fn"',
                      '"function"',
                      '"' + String(a.fn) + '"'
                    )
                  );
                break;
              case "effect":
                typeof a.effect != "function" &&
                  console.error(
                    yt(
                      wt,
                      a.name,
                      '"effect"',
                      '"function"',
                      '"' + String(a.fn) + '"'
                    )
                  );
                break;
              case "requires":
                Array.isArray(a.requires) ||
                  console.error(
                    yt(
                      wt,
                      a.name,
                      '"requires"',
                      '"array"',
                      '"' + String(a.requires) + '"'
                    )
                  );
                break;
              case "requiresIfExists":
                Array.isArray(a.requiresIfExists) ||
                  console.error(
                    yt(
                      wt,
                      a.name,
                      '"requiresIfExists"',
                      '"array"',
                      '"' + String(a.requiresIfExists) + '"'
                    )
                  );
                break;
              case "options":
              case "data":
                break;
              default:
                console.error(
                  'PopperJS: an invalid property has been provided to the "' +
                    a.name +
                    '" modifier, valid properties are ' +
                    Ze.map(function (A) {
                      return '"' + A + '"';
                    }).join(", ") +
                    '; but "' +
                    m +
                    '" was provided.'
                );
            }
            a.requires &&
              a.requires.forEach(function (A) {
                f.find(function (D) {
                  return D.name === A;
                }) == null && console.error(yt(Fr, String(a.name), A, A));
              });
          });
        });
      }
      function Lr(f, a) {
        var m = new Set();
        return f.filter(function (A) {
          var D = a(A);
          if (!m.has(D)) return m.add(D), !0;
        });
      }
      function it(f) {
        return f.split("-")[0];
      }
      function kr(f) {
        var a = f.reduce(function (m, A) {
          var D = m[A.name];
          return (
            (m[A.name] = D
              ? Object.assign({}, D, A, {
                  options: Object.assign({}, D.options, A.options),
                  data: Object.assign({}, D.data, A.data),
                })
              : A),
            m
          );
        }, {});
        return Object.keys(a).map(function (m) {
          return a[m];
        });
      }
      function Zn(f) {
        var a = n(f),
          m = x(f),
          A = a.visualViewport,
          D = m.clientWidth,
          F = m.clientHeight,
          $ = 0,
          k = 0;
        return (
          A &&
            ((D = A.width),
            (F = A.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
              (($ = A.offsetLeft), (k = A.offsetTop))),
          { width: D, height: F, x: $ + b(f), y: k }
        );
      }
      var pt = Math.max,
        rn = Math.min,
        $t = Math.round;
      function er(f) {
        var a,
          m = x(f),
          A = r(f),
          D = (a = f.ownerDocument) == null ? void 0 : a.body,
          F = pt(
            m.scrollWidth,
            m.clientWidth,
            D ? D.scrollWidth : 0,
            D ? D.clientWidth : 0
          ),
          $ = pt(
            m.scrollHeight,
            m.clientHeight,
            D ? D.scrollHeight : 0,
            D ? D.clientHeight : 0
          ),
          k = -A.scrollLeft + b(f),
          Y = -A.scrollTop;
        return (
          E(D || m).direction === "rtl" &&
            (k += pt(m.clientWidth, D ? D.clientWidth : 0) - F),
          { width: F, height: $, x: k, y: Y }
        );
      }
      function Pn(f, a) {
        var m = a.getRootNode && a.getRootNode();
        if (f.contains(a)) return !0;
        if (m && s(m)) {
          var A = a;
          do {
            if (A && f.isSameNode(A)) return !0;
            A = A.parentNode || A.host;
          } while (A);
        }
        return !1;
      }
      function Wt(f) {
        return Object.assign({}, f, {
          left: f.x,
          top: f.y,
          right: f.x + f.width,
          bottom: f.y + f.height,
        });
      }
      function tr(f) {
        var a = t(f);
        return (
          (a.top = a.top + f.clientTop),
          (a.left = a.left + f.clientLeft),
          (a.bottom = a.top + f.clientHeight),
          (a.right = a.left + f.clientWidth),
          (a.width = f.clientWidth),
          (a.height = f.clientHeight),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function nr(f, a) {
        return a === H ? Wt(Zn(f)) : i(a) ? tr(a) : Wt(er(x(f)));
      }
      function vn(f) {
        var a = B(U(f)),
          m = ["absolute", "fixed"].indexOf(E(f).position) >= 0,
          A = m && i(f) ? se(f) : f;
        return o(A)
          ? a.filter(function (D) {
              return o(D) && Pn(D, A) && p(D) !== "body";
            })
          : [];
      }
      function gn(f, a, m) {
        var A = a === "clippingParents" ? vn(f) : [].concat(a),
          D = [].concat(A, [m]),
          F = D[0],
          $ = D.reduce(function (k, Y) {
            var te = nr(f, Y);
            return (
              (k.top = pt(te.top, k.top)),
              (k.right = rn(te.right, k.right)),
              (k.bottom = rn(te.bottom, k.bottom)),
              (k.left = pt(te.left, k.left)),
              k
            );
          }, nr(f, F));
        return (
          ($.width = $.right - $.left),
          ($.height = $.bottom - $.top),
          ($.x = $.left),
          ($.y = $.top),
          $
        );
      }
      function on(f) {
        return f.split("-")[1];
      }
      function ut(f) {
        return ["top", "bottom"].indexOf(f) >= 0 ? "x" : "y";
      }
      function rr(f) {
        var a = f.reference,
          m = f.element,
          A = f.placement,
          D = A ? it(A) : null,
          F = A ? on(A) : null,
          $ = a.x + a.width / 2 - m.width / 2,
          k = a.y + a.height / 2 - m.height / 2,
          Y;
        switch (D) {
          case ie:
            Y = { x: $, y: a.y - m.height };
            break;
          case be:
            Y = { x: $, y: a.y + a.height };
            break;
          case R:
            Y = { x: a.x + a.width, y: k };
            break;
          case fe:
            Y = { x: a.x - m.width, y: k };
            break;
          default:
            Y = { x: a.x, y: a.y };
        }
        var te = D ? ut(D) : null;
        if (te != null) {
          var W = te === "y" ? "height" : "width";
          switch (F) {
            case d:
              Y[te] = Y[te] - (a[W] / 2 - m[W] / 2);
              break;
            case v:
              Y[te] = Y[te] + (a[W] / 2 - m[W] / 2);
              break;
          }
        }
        return Y;
      }
      function ir() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function or(f) {
        return Object.assign({}, ir(), f);
      }
      function ar(f, a) {
        return a.reduce(function (m, A) {
          return (m[A] = f), m;
        }, {});
      }
      function Vt(f, a) {
        a === void 0 && (a = {});
        var m = a,
          A = m.placement,
          D = A === void 0 ? f.placement : A,
          F = m.boundary,
          $ = F === void 0 ? c : F,
          k = m.rootBoundary,
          Y = k === void 0 ? H : k,
          te = m.elementContext,
          W = te === void 0 ? T : te,
          De = m.altBoundary,
          Ne = De === void 0 ? !1 : De,
          Ae = m.padding,
          we = Ae === void 0 ? 0 : Ae,
          Me = or(typeof we != "number" ? we : ar(we, l)),
          Ee = W === T ? P : T,
          Be = f.elements.reference,
          Re = f.rects.popper,
          He = f.elements[Ne ? Ee : W],
          ae = gn(o(He) ? He : He.contextElement || x(f.elements.popper), $, Y),
          Pe = t(Be),
          _e = rr({
            reference: Pe,
            element: Re,
            strategy: "absolute",
            placement: D,
          }),
          Le = Wt(Object.assign({}, Re, _e)),
          Fe = W === T ? Le : Pe,
          Ye = {
            top: ae.top - Fe.top + Me.top,
            bottom: Fe.bottom - ae.bottom + Me.bottom,
            left: ae.left - Fe.left + Me.left,
            right: Fe.right - ae.right + Me.right,
          },
          $e = f.modifiersData.offset;
        if (W === T && $e) {
          var Ve = $e[D];
          Object.keys(Ye).forEach(function (gt) {
            var et = [R, be].indexOf(gt) >= 0 ? 1 : -1,
              Pt = [ie, be].indexOf(gt) >= 0 ? "y" : "x";
            Ye[gt] += Ve[Pt] * et;
          });
        }
        return Ye;
      }
      var sr =
          "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
        jr =
          "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
        mn = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function an() {
        for (var f = arguments.length, a = new Array(f), m = 0; m < f; m++)
          a[m] = arguments[m];
        return !a.some(function (A) {
          return !(A && typeof A.getBoundingClientRect == "function");
        });
      }
      function bn(f) {
        f === void 0 && (f = {});
        var a = f,
          m = a.defaultModifiers,
          A = m === void 0 ? [] : m,
          D = a.defaultOptions,
          F = D === void 0 ? mn : D;
        return function (k, Y, te) {
          te === void 0 && (te = F);
          var W = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, mn, F),
              modifiersData: {},
              elements: { reference: k, popper: Y },
              attributes: {},
              styles: {},
            },
            De = [],
            Ne = !1,
            Ae = {
              state: W,
              setOptions: function (Be) {
                Me(),
                  (W.options = Object.assign({}, F, W.options, Be)),
                  (W.scrollParents = {
                    reference: o(k)
                      ? B(k)
                      : k.contextElement
                      ? B(k.contextElement)
                      : [],
                    popper: B(Y),
                  });
                var Re = dt(kr([].concat(A, W.options.modifiers)));
                W.orderedModifiers = Re.filter(function ($e) {
                  return $e.enabled;
                });
                var He = Lr([].concat(Re, W.options.modifiers), function ($e) {
                  var Ve = $e.name;
                  return Ve;
                });
                if ((Nr(He), it(W.options.placement) === ce)) {
                  var ae = W.orderedModifiers.find(function ($e) {
                    var Ve = $e.name;
                    return Ve === "flip";
                  });
                  ae ||
                    console.error(
                      [
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work.",
                      ].join(" ")
                    );
                }
                var Pe = E(Y),
                  _e = Pe.marginTop,
                  Le = Pe.marginRight,
                  Fe = Pe.marginBottom,
                  Ye = Pe.marginLeft;
                return (
                  [_e, Le, Fe, Ye].some(function ($e) {
                    return parseFloat($e);
                  }) &&
                    console.warn(
                      [
                        'Popper: CSS "margin" styles cannot be used to apply padding',
                        "between the popper and its reference element or boundary.",
                        "To replicate margin, use the `offset` modifier, as well as",
                        "the `padding` option in the `preventOverflow` and `flip`",
                        "modifiers.",
                      ].join(" ")
                    ),
                  we(),
                  Ae.update()
                );
              },
              forceUpdate: function () {
                if (!Ne) {
                  var Be = W.elements,
                    Re = Be.reference,
                    He = Be.popper;
                  if (!an(Re, He)) {
                    console.error(sr);
                    return;
                  }
                  (W.rects = {
                    reference: C(Re, se(He), W.options.strategy === "fixed"),
                    popper: M(He),
                  }),
                    (W.reset = !1),
                    (W.placement = W.options.placement),
                    W.orderedModifiers.forEach(function (Ve) {
                      return (W.modifiersData[Ve.name] = Object.assign(
                        {},
                        Ve.data
                      ));
                    });
                  for (
                    var ae = 0, Pe = 0;
                    Pe < W.orderedModifiers.length;
                    Pe++
                  ) {
                    if (((ae += 1), ae > 100)) {
                      console.error(jr);
                      break;
                    }
                    if (W.reset === !0) {
                      (W.reset = !1), (Pe = -1);
                      continue;
                    }
                    var _e = W.orderedModifiers[Pe],
                      Le = _e.fn,
                      Fe = _e.options,
                      Ye = Fe === void 0 ? {} : Fe,
                      $e = _e.name;
                    typeof Le == "function" &&
                      (W =
                        Le({ state: W, options: Ye, name: $e, instance: Ae }) ||
                        W);
                  }
                }
              },
              update: Ht(function () {
                return new Promise(function (Ee) {
                  Ae.forceUpdate(), Ee(W);
                });
              }),
              destroy: function () {
                Me(), (Ne = !0);
              },
            };
          if (!an(k, Y)) return console.error(sr), Ae;
          Ae.setOptions(te).then(function (Ee) {
            !Ne && te.onFirstUpdate && te.onFirstUpdate(Ee);
          });
          function we() {
            W.orderedModifiers.forEach(function (Ee) {
              var Be = Ee.name,
                Re = Ee.options,
                He = Re === void 0 ? {} : Re,
                ae = Ee.effect;
              if (typeof ae == "function") {
                var Pe = ae({ state: W, name: Be, instance: Ae, options: He }),
                  _e = function () {};
                De.push(Pe || _e);
              }
            });
          }
          function Me() {
            De.forEach(function (Ee) {
              return Ee();
            }),
              (De = []);
          }
          return Ae;
        };
      }
      var yn = { passive: !0 };
      function Br(f) {
        var a = f.state,
          m = f.instance,
          A = f.options,
          D = A.scroll,
          F = D === void 0 ? !0 : D,
          $ = A.resize,
          k = $ === void 0 ? !0 : $,
          Y = n(a.elements.popper),
          te = [].concat(a.scrollParents.reference, a.scrollParents.popper);
        return (
          F &&
            te.forEach(function (W) {
              W.addEventListener("scroll", m.update, yn);
            }),
          k && Y.addEventListener("resize", m.update, yn),
          function () {
            F &&
              te.forEach(function (W) {
                W.removeEventListener("scroll", m.update, yn);
              }),
              k && Y.removeEventListener("resize", m.update, yn);
          }
        );
      }
      var Mn = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: Br,
        data: {},
      };
      function Hr(f) {
        var a = f.state,
          m = f.name;
        a.modifiersData[m] = rr({
          reference: a.rects.reference,
          element: a.rects.popper,
          strategy: "absolute",
          placement: a.placement,
        });
      }
      var Rn = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: Hr,
          data: {},
        },
        $r = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Wr(f) {
        var a = f.x,
          m = f.y,
          A = window,
          D = A.devicePixelRatio || 1;
        return { x: $t($t(a * D) / D) || 0, y: $t($t(m * D) / D) || 0 };
      }
      function In(f) {
        var a,
          m = f.popper,
          A = f.popperRect,
          D = f.placement,
          F = f.offsets,
          $ = f.position,
          k = f.gpuAcceleration,
          Y = f.adaptive,
          te = f.roundOffsets,
          W = te === !0 ? Wr(F) : typeof te == "function" ? te(F) : F,
          De = W.x,
          Ne = De === void 0 ? 0 : De,
          Ae = W.y,
          we = Ae === void 0 ? 0 : Ae,
          Me = F.hasOwnProperty("x"),
          Ee = F.hasOwnProperty("y"),
          Be = fe,
          Re = ie,
          He = window;
        if (Y) {
          var ae = se(m),
            Pe = "clientHeight",
            _e = "clientWidth";
          ae === n(m) &&
            ((ae = x(m)),
            E(ae).position !== "static" &&
              ((Pe = "scrollHeight"), (_e = "scrollWidth"))),
            (ae = ae),
            D === ie &&
              ((Re = be), (we -= ae[Pe] - A.height), (we *= k ? 1 : -1)),
            D === fe &&
              ((Be = R), (Ne -= ae[_e] - A.width), (Ne *= k ? 1 : -1));
        }
        var Le = Object.assign({ position: $ }, Y && $r);
        if (k) {
          var Fe;
          return Object.assign(
            {},
            Le,
            ((Fe = {}),
            (Fe[Re] = Ee ? "0" : ""),
            (Fe[Be] = Me ? "0" : ""),
            (Fe.transform =
              (He.devicePixelRatio || 1) < 2
                ? "translate(" + Ne + "px, " + we + "px)"
                : "translate3d(" + Ne + "px, " + we + "px, 0)"),
            Fe)
          );
        }
        return Object.assign(
          {},
          Le,
          ((a = {}),
          (a[Re] = Ee ? we + "px" : ""),
          (a[Be] = Me ? Ne + "px" : ""),
          (a.transform = ""),
          a)
        );
      }
      function g(f) {
        var a = f.state,
          m = f.options,
          A = m.gpuAcceleration,
          D = A === void 0 ? !0 : A,
          F = m.adaptive,
          $ = F === void 0 ? !0 : F,
          k = m.roundOffsets,
          Y = k === void 0 ? !0 : k,
          te = E(a.elements.popper).transitionProperty || "";
        $ &&
          ["transform", "top", "right", "bottom", "left"].some(function (De) {
            return te.indexOf(De) >= 0;
          }) &&
          console.warn(
            [
              "Popper: Detected CSS transitions on at least one of the following",
              'CSS properties: "transform", "top", "right", "bottom", "left".',
              `

`,
              'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
              "for smooth transitions, or remove these properties from the CSS",
              "transition declaration on the popper element if only transitioning",
              "opacity or background-color for example.",
              `

`,
              "We recommend using the popper element as a wrapper around an inner",
              "element that can have any CSS property transitioned for animations.",
            ].join(" ")
          );
        var W = {
          placement: it(a.placement),
          popper: a.elements.popper,
          popperRect: a.rects.popper,
          gpuAcceleration: D,
        };
        a.modifiersData.popperOffsets != null &&
          (a.styles.popper = Object.assign(
            {},
            a.styles.popper,
            In(
              Object.assign({}, W, {
                offsets: a.modifiersData.popperOffsets,
                position: a.options.strategy,
                adaptive: $,
                roundOffsets: Y,
              })
            )
          )),
          a.modifiersData.arrow != null &&
            (a.styles.arrow = Object.assign(
              {},
              a.styles.arrow,
              In(
                Object.assign({}, W, {
                  offsets: a.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: Y,
                })
              )
            )),
          (a.attributes.popper = Object.assign({}, a.attributes.popper, {
            "data-popper-placement": a.placement,
          }));
      }
      var y = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: g,
        data: {},
      };
      function O(f) {
        var a = f.state;
        Object.keys(a.elements).forEach(function (m) {
          var A = a.styles[m] || {},
            D = a.attributes[m] || {},
            F = a.elements[m];
          !i(F) ||
            !p(F) ||
            (Object.assign(F.style, A),
            Object.keys(D).forEach(function ($) {
              var k = D[$];
              k === !1
                ? F.removeAttribute($)
                : F.setAttribute($, k === !0 ? "" : k);
            }));
        });
      }
      function I(f) {
        var a = f.state,
          m = {
            popper: {
              position: a.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(a.elements.popper.style, m.popper),
          (a.styles = m),
          a.elements.arrow && Object.assign(a.elements.arrow.style, m.arrow),
          function () {
            Object.keys(a.elements).forEach(function (A) {
              var D = a.elements[A],
                F = a.attributes[A] || {},
                $ = Object.keys(
                  a.styles.hasOwnProperty(A) ? a.styles[A] : m[A]
                ),
                k = $.reduce(function (Y, te) {
                  return (Y[te] = ""), Y;
                }, {});
              !i(D) ||
                !p(D) ||
                (Object.assign(D.style, k),
                Object.keys(F).forEach(function (Y) {
                  D.removeAttribute(Y);
                }));
            });
          }
        );
      }
      var z = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: O,
        effect: I,
        requires: ["computeStyles"],
      };
      function j(f, a, m) {
        var A = it(f),
          D = [fe, ie].indexOf(A) >= 0 ? -1 : 1,
          F =
            typeof m == "function"
              ? m(Object.assign({}, a, { placement: f }))
              : m,
          $ = F[0],
          k = F[1];
        return (
          ($ = $ || 0),
          (k = (k || 0) * D),
          [fe, R].indexOf(A) >= 0 ? { x: k, y: $ } : { x: $, y: k }
        );
      }
      function L(f) {
        var a = f.state,
          m = f.options,
          A = f.name,
          D = m.offset,
          F = D === void 0 ? [0, 0] : D,
          $ = ze.reduce(function (W, De) {
            return (W[De] = j(De, a.rects, F)), W;
          }, {}),
          k = $[a.placement],
          Y = k.x,
          te = k.y;
        a.modifiersData.popperOffsets != null &&
          ((a.modifiersData.popperOffsets.x += Y),
          (a.modifiersData.popperOffsets.y += te)),
          (a.modifiersData[A] = $);
      }
      var ge = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: L,
        },
        oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function de(f) {
        return f.replace(/left|right|bottom|top/g, function (a) {
          return oe[a];
        });
      }
      var me = { start: "end", end: "start" };
      function Te(f) {
        return f.replace(/start|end/g, function (a) {
          return me[a];
        });
      }
      function je(f, a) {
        a === void 0 && (a = {});
        var m = a,
          A = m.placement,
          D = m.boundary,
          F = m.rootBoundary,
          $ = m.padding,
          k = m.flipVariations,
          Y = m.allowedAutoPlacements,
          te = Y === void 0 ? ze : Y,
          W = on(A),
          De = W
            ? k
              ? G
              : G.filter(function (we) {
                  return on(we) === W;
                })
            : l,
          Ne = De.filter(function (we) {
            return te.indexOf(we) >= 0;
          });
        Ne.length === 0 &&
          ((Ne = De),
          console.error(
            [
              "Popper: The `allowedAutoPlacements` option did not allow any",
              "placements. Ensure the `placement` option matches the variation",
              "of the allowed placements.",
              'For example, "auto" cannot be used to allow "bottom-start".',
              'Use "auto-start" instead.',
            ].join(" ")
          ));
        var Ae = Ne.reduce(function (we, Me) {
          return (
            (we[Me] = Vt(f, {
              placement: Me,
              boundary: D,
              rootBoundary: F,
              padding: $,
            })[it(Me)]),
            we
          );
        }, {});
        return Object.keys(Ae).sort(function (we, Me) {
          return Ae[we] - Ae[Me];
        });
      }
      function Se(f) {
        if (it(f) === ce) return [];
        var a = de(f);
        return [Te(f), a, Te(a)];
      }
      function Ie(f) {
        var a = f.state,
          m = f.options,
          A = f.name;
        if (!a.modifiersData[A]._skip) {
          for (
            var D = m.mainAxis,
              F = D === void 0 ? !0 : D,
              $ = m.altAxis,
              k = $ === void 0 ? !0 : $,
              Y = m.fallbackPlacements,
              te = m.padding,
              W = m.boundary,
              De = m.rootBoundary,
              Ne = m.altBoundary,
              Ae = m.flipVariations,
              we = Ae === void 0 ? !0 : Ae,
              Me = m.allowedAutoPlacements,
              Ee = a.options.placement,
              Be = it(Ee),
              Re = Be === Ee,
              He = Y || (Re || !we ? [de(Ee)] : Se(Ee)),
              ae = [Ee].concat(He).reduce(function (J, ve) {
                return J.concat(
                  it(ve) === ce
                    ? je(a, {
                        placement: ve,
                        boundary: W,
                        rootBoundary: De,
                        padding: te,
                        flipVariations: we,
                        allowedAutoPlacements: Me,
                      })
                    : ve
                );
              }, []),
              Pe = a.rects.reference,
              _e = a.rects.popper,
              Le = new Map(),
              Fe = !0,
              Ye = ae[0],
              $e = 0;
            $e < ae.length;
            $e++
          ) {
            var Ve = ae[$e],
              gt = it(Ve),
              et = on(Ve) === d,
              Pt = [ie, be].indexOf(gt) >= 0,
              ln = Pt ? "width" : "height",
              Xt = Vt(a, {
                placement: Ve,
                boundary: W,
                rootBoundary: De,
                altBoundary: Ne,
                padding: te,
              }),
              Mt = Pt ? (et ? R : fe) : et ? be : ie;
            Pe[ln] > _e[ln] && (Mt = de(Mt));
            var Fn = de(Mt),
              qt = [];
            if (
              (F && qt.push(Xt[gt] <= 0),
              k && qt.push(Xt[Mt] <= 0, Xt[Fn] <= 0),
              qt.every(function (J) {
                return J;
              }))
            ) {
              (Ye = Ve), (Fe = !1);
              break;
            }
            Le.set(Ve, qt);
          }
          if (Fe)
            for (
              var wn = we ? 3 : 1,
                Nn = function (ve) {
                  var ye = ae.find(function (Ke) {
                    var Je = Le.get(Ke);
                    if (Je)
                      return Je.slice(0, ve).every(function (xt) {
                        return xt;
                      });
                  });
                  if (ye) return (Ye = ye), "break";
                },
                S = wn;
              S > 0;
              S--
            ) {
              var X = Nn(S);
              if (X === "break") break;
            }
          a.placement !== Ye &&
            ((a.modifiersData[A]._skip = !0),
            (a.placement = Ye),
            (a.reset = !0));
        }
      }
      var Z = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: Ie,
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function pe(f) {
        return f === "x" ? "y" : "x";
      }
      function he(f, a, m) {
        return pt(f, rn(a, m));
      }
      function K(f) {
        var a = f.state,
          m = f.options,
          A = f.name,
          D = m.mainAxis,
          F = D === void 0 ? !0 : D,
          $ = m.altAxis,
          k = $ === void 0 ? !1 : $,
          Y = m.boundary,
          te = m.rootBoundary,
          W = m.altBoundary,
          De = m.padding,
          Ne = m.tether,
          Ae = Ne === void 0 ? !0 : Ne,
          we = m.tetherOffset,
          Me = we === void 0 ? 0 : we,
          Ee = Vt(a, {
            boundary: Y,
            rootBoundary: te,
            padding: De,
            altBoundary: W,
          }),
          Be = it(a.placement),
          Re = on(a.placement),
          He = !Re,
          ae = ut(Be),
          Pe = pe(ae),
          _e = a.modifiersData.popperOffsets,
          Le = a.rects.reference,
          Fe = a.rects.popper,
          Ye =
            typeof Me == "function"
              ? Me(Object.assign({}, a.rects, { placement: a.placement }))
              : Me,
          $e = { x: 0, y: 0 };
        if (_e) {
          if (F || k) {
            var Ve = ae === "y" ? ie : fe,
              gt = ae === "y" ? be : R,
              et = ae === "y" ? "height" : "width",
              Pt = _e[ae],
              ln = _e[ae] + Ee[Ve],
              Xt = _e[ae] - Ee[gt],
              Mt = Ae ? -Fe[et] / 2 : 0,
              Fn = Re === d ? Le[et] : Fe[et],
              qt = Re === d ? -Fe[et] : -Le[et],
              wn = a.elements.arrow,
              Nn = Ae && wn ? M(wn) : { width: 0, height: 0 },
              S = a.modifiersData["arrow#persistent"]
                ? a.modifiersData["arrow#persistent"].padding
                : ir(),
              X = S[Ve],
              J = S[gt],
              ve = he(0, Le[et], Nn[et]),
              ye = He ? Le[et] / 2 - Mt - ve - X - Ye : Fn - ve - X - Ye,
              Ke = He ? -Le[et] / 2 + Mt + ve + J + Ye : qt + ve + J + Ye,
              Je = a.elements.arrow && se(a.elements.arrow),
              xt = Je
                ? ae === "y"
                  ? Je.clientTop || 0
                  : Je.clientLeft || 0
                : 0,
              Ln = a.modifiersData.offset
                ? a.modifiersData.offset[a.placement][ae]
                : 0,
              Et = _e[ae] + ye - Ln - xt,
              xn = _e[ae] + Ke - Ln;
            if (F) {
              var fn = he(Ae ? rn(ln, Et) : ln, Pt, Ae ? pt(Xt, xn) : Xt);
              (_e[ae] = fn), ($e[ae] = fn - Pt);
            }
            if (k) {
              var Gt = ae === "x" ? ie : fe,
                Vr = ae === "x" ? be : R,
                Kt = _e[Pe],
                un = Kt + Ee[Gt],
                xi = Kt - Ee[Vr],
                Ei = he(Ae ? rn(un, Et) : un, Kt, Ae ? pt(xi, xn) : xi);
              (_e[Pe] = Ei), ($e[Pe] = Ei - Kt);
            }
          }
          a.modifiersData[A] = $e;
        }
      }
      var ee = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: K,
          requiresIfExists: ["offset"],
        },
        w = function (a, m) {
          return (
            (a =
              typeof a == "function"
                ? a(Object.assign({}, m.rects, { placement: m.placement }))
                : a),
            or(typeof a != "number" ? a : ar(a, l))
          );
        };
      function Ge(f) {
        var a,
          m = f.state,
          A = f.name,
          D = f.options,
          F = m.elements.arrow,
          $ = m.modifiersData.popperOffsets,
          k = it(m.placement),
          Y = ut(k),
          te = [fe, R].indexOf(k) >= 0,
          W = te ? "height" : "width";
        if (!(!F || !$)) {
          var De = w(D.padding, m),
            Ne = M(F),
            Ae = Y === "y" ? ie : fe,
            we = Y === "y" ? be : R,
            Me =
              m.rects.reference[W] +
              m.rects.reference[Y] -
              $[Y] -
              m.rects.popper[W],
            Ee = $[Y] - m.rects.reference[Y],
            Be = se(F),
            Re = Be
              ? Y === "y"
                ? Be.clientHeight || 0
                : Be.clientWidth || 0
              : 0,
            He = Me / 2 - Ee / 2,
            ae = De[Ae],
            Pe = Re - Ne[W] - De[we],
            _e = Re / 2 - Ne[W] / 2 + He,
            Le = he(ae, _e, Pe),
            Fe = Y;
          m.modifiersData[A] =
            ((a = {}), (a[Fe] = Le), (a.centerOffset = Le - _e), a);
        }
      }
      function le(f) {
        var a = f.state,
          m = f.options,
          A = m.element,
          D = A === void 0 ? "[data-popper-arrow]" : A;
        if (
          D != null &&
          !(
            typeof D == "string" &&
            ((D = a.elements.popper.querySelector(D)), !D)
          )
        ) {
          if (
            (i(D) ||
              console.error(
                [
                  'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                  "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
                  "the arrow.",
                ].join(" ")
              ),
            !Pn(a.elements.popper, D))
          ) {
            console.error(
              [
                'Popper: "arrow" modifier\'s `element` must be a child of the popper',
                "element.",
              ].join(" ")
            );
            return;
          }
          a.elements.arrow = D;
        }
      }
      var Tt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: Ge,
        effect: le,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function ht(f, a, m) {
        return (
          m === void 0 && (m = { x: 0, y: 0 }),
          {
            top: f.top - a.height - m.y,
            right: f.right - a.width + m.x,
            bottom: f.bottom - a.height + m.y,
            left: f.left - a.width - m.x,
          }
        );
      }
      function Ut(f) {
        return [ie, R, be, fe].some(function (a) {
          return f[a] >= 0;
        });
      }
      function zt(f) {
        var a = f.state,
          m = f.name,
          A = a.rects.reference,
          D = a.rects.popper,
          F = a.modifiersData.preventOverflow,
          $ = Vt(a, { elementContext: "reference" }),
          k = Vt(a, { altBoundary: !0 }),
          Y = ht($, A),
          te = ht(k, D, F),
          W = Ut(Y),
          De = Ut(te);
        (a.modifiersData[m] = {
          referenceClippingOffsets: Y,
          popperEscapeOffsets: te,
          isReferenceHidden: W,
          hasPopperEscaped: De,
        }),
          (a.attributes.popper = Object.assign({}, a.attributes.popper, {
            "data-popper-reference-hidden": W,
            "data-popper-escaped": De,
          }));
      }
      var Yt = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: zt,
        },
        nt = [Mn, Rn, y, z],
        at = bn({ defaultModifiers: nt }),
        vt = [Mn, Rn, y, z, ge, Z, ee, Tt, Yt],
        sn = bn({ defaultModifiers: vt });
      (e.applyStyles = z),
        (e.arrow = Tt),
        (e.computeStyles = y),
        (e.createPopper = sn),
        (e.createPopperLite = at),
        (e.defaultModifiers = vt),
        (e.detectOverflow = Vt),
        (e.eventListeners = Mn),
        (e.flip = Z),
        (e.hide = Yt),
        (e.offset = ge),
        (e.popperGenerator = bn),
        (e.popperOffsets = Rn),
        (e.preventOverflow = ee);
    }),
    Po = _o((e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t = ns(),
        n =
          '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
        r = "tippy-box",
        o = "tippy-content",
        i = "tippy-backdrop",
        s = "tippy-arrow",
        u = "tippy-svg-arrow",
        h = { passive: !0, capture: !0 };
      function p(g, y) {
        return {}.hasOwnProperty.call(g, y);
      }
      function x(g, y, O) {
        if (Array.isArray(g)) {
          var I = g[y];
          return I ?? (Array.isArray(O) ? O[y] : O);
        }
        return g;
      }
      function b(g, y) {
        var O = {}.toString.call(g);
        return O.indexOf("[object") === 0 && O.indexOf(y + "]") > -1;
      }
      function E(g, y) {
        return typeof g == "function" ? g.apply(void 0, y) : g;
      }
      function _(g, y) {
        if (y === 0) return g;
        var O;
        return function (I) {
          clearTimeout(O),
            (O = setTimeout(function () {
              g(I);
            }, y));
        };
      }
      function C(g, y) {
        var O = Object.assign({}, g);
        return (
          y.forEach(function (I) {
            delete O[I];
          }),
          O
        );
      }
      function M(g) {
        return g.split(/\s+/).filter(Boolean);
      }
      function U(g) {
        return [].concat(g);
      }
      function V(g, y) {
        g.indexOf(y) === -1 && g.push(y);
      }
      function B(g) {
        return g.filter(function (y, O) {
          return g.indexOf(y) === O;
        });
      }
      function Q(g) {
        return g.split("-")[0];
      }
      function q(g) {
        return [].slice.call(g);
      }
      function xe(g) {
        return Object.keys(g).reduce(function (y, O) {
          return g[O] !== void 0 && (y[O] = g[O]), y;
        }, {});
      }
      function se() {
        return document.createElement("div");
      }
      function ie(g) {
        return ["Element", "Fragment"].some(function (y) {
          return b(g, y);
        });
      }
      function be(g) {
        return b(g, "NodeList");
      }
      function R(g) {
        return b(g, "MouseEvent");
      }
      function fe(g) {
        return !!(g && g._tippy && g._tippy.reference === g);
      }
      function ce(g) {
        return ie(g)
          ? [g]
          : be(g)
          ? q(g)
          : Array.isArray(g)
          ? g
          : q(document.querySelectorAll(g));
      }
      function l(g, y) {
        g.forEach(function (O) {
          O && (O.style.transitionDuration = y + "ms");
        });
      }
      function d(g, y) {
        g.forEach(function (O) {
          O && O.setAttribute("data-state", y);
        });
      }
      function v(g) {
        var y,
          O = U(g),
          I = O[0];
        return !(I == null || (y = I.ownerDocument) == null) && y.body
          ? I.ownerDocument
          : document;
      }
      function c(g, y) {
        var O = y.clientX,
          I = y.clientY;
        return g.every(function (z) {
          var j = z.popperRect,
            L = z.popperState,
            ge = z.props,
            oe = ge.interactiveBorder,
            de = Q(L.placement),
            me = L.modifiersData.offset;
          if (!me) return !0;
          var Te = de === "bottom" ? me.top.y : 0,
            je = de === "top" ? me.bottom.y : 0,
            Se = de === "right" ? me.left.x : 0,
            Ie = de === "left" ? me.right.x : 0,
            Z = j.top - I + Te > oe,
            pe = I - j.bottom - je > oe,
            he = j.left - O + Se > oe,
            K = O - j.right - Ie > oe;
          return Z || pe || he || K;
        });
      }
      function H(g, y, O) {
        var I = y + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (z) {
          g[I](z, O);
        });
      }
      var T = { isTouch: !1 },
        P = 0;
      function G() {
        T.isTouch ||
          ((T.isTouch = !0),
          window.performance && document.addEventListener("mousemove", ze));
      }
      function ze() {
        var g = performance.now();
        g - P < 20 &&
          ((T.isTouch = !1), document.removeEventListener("mousemove", ze)),
          (P = g);
      }
      function Dt() {
        var g = document.activeElement;
        if (fe(g)) {
          var y = g._tippy;
          g.blur && !y.state.isVisible && g.blur();
        }
      }
      function jt() {
        document.addEventListener("touchstart", G, h),
          window.addEventListener("blur", Dt);
      }
      var Tr = typeof window < "u" && typeof document < "u",
        Pr = Tr ? navigator.userAgent : "",
        Mr = /MSIE |Trident\//.test(Pr);
      function Bt(g) {
        var y = g === "destroy" ? "n already-" : " ";
        return [
          g +
            "() was called on a" +
            y +
            "destroyed instance. This is a no-op but",
          "indicates a potential memory leak.",
        ].join(" ");
      }
      function Jn(g) {
        var y = /[ \t]{2,}/g,
          O = /^[ \t]*/gm;
        return g.replace(y, " ").replace(O, "").trim();
      }
      function Rr(g) {
        return Jn(
          `
  %ctippy.js

  %c` +
            Jn(g) +
            `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `
        );
      }
      function Qn(g) {
        return [
          Rr(g),
          "color: #00C584; font-size: 1.3em; font-weight: bold;",
          "line-height: 1.5",
          "color: #a6a095;",
        ];
      }
      var _t;
      Ir();
      function Ir() {
        _t = new Set();
      }
      function dt(g, y) {
        if (g && !_t.has(y)) {
          var O;
          _t.add(y), (O = console).warn.apply(O, Qn(y));
        }
      }
      function Ht(g, y) {
        if (g && !_t.has(y)) {
          var O;
          _t.add(y), (O = console).error.apply(O, Qn(y));
        }
      }
      function yt(g) {
        var y = !g,
          O =
            Object.prototype.toString.call(g) === "[object Object]" &&
            !g.addEventListener;
        Ht(
          y,
          [
            "tippy() was passed",
            "`" + String(g) + "`",
            "as its targets (first) argument. Valid types are: String, Element,",
            "Element[], or NodeList.",
          ].join(" ")
        ),
          Ht(
            O,
            [
              "tippy() was passed a plain object which is not supported as an argument",
              "for virtual positioning. Use props.getReferenceClientRect instead.",
            ].join(" ")
          );
      }
      var wt = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        Fr = {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        },
        Ze = Object.assign(
          {
            appendTo: function () {
              return document.body;
            },
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          wt,
          {},
          Fr
        ),
        Nr = Object.keys(Ze),
        Lr = function (y) {
          pt(y, []);
          var O = Object.keys(y);
          O.forEach(function (I) {
            Ze[I] = y[I];
          });
        };
      function it(g) {
        var y = g.plugins || [],
          O = y.reduce(function (I, z) {
            var j = z.name,
              L = z.defaultValue;
            return j && (I[j] = g[j] !== void 0 ? g[j] : L), I;
          }, {});
        return Object.assign({}, g, {}, O);
      }
      function kr(g, y) {
        var O = y ? Object.keys(it(Object.assign({}, Ze, { plugins: y }))) : Nr,
          I = O.reduce(function (z, j) {
            var L = (g.getAttribute("data-tippy-" + j) || "").trim();
            if (!L) return z;
            if (j === "content") z[j] = L;
            else
              try {
                z[j] = JSON.parse(L);
              } catch {
                z[j] = L;
              }
            return z;
          }, {});
        return I;
      }
      function Zn(g, y) {
        var O = Object.assign(
          {},
          y,
          { content: E(y.content, [g]) },
          y.ignoreAttributes ? {} : kr(g, y.plugins)
        );
        return (
          (O.aria = Object.assign({}, Ze.aria, {}, O.aria)),
          (O.aria = {
            expanded:
              O.aria.expanded === "auto" ? y.interactive : O.aria.expanded,
            content:
              O.aria.content === "auto"
                ? y.interactive
                  ? null
                  : "describedby"
                : O.aria.content,
          }),
          O
        );
      }
      function pt(g, y) {
        g === void 0 && (g = {}), y === void 0 && (y = []);
        var O = Object.keys(g);
        O.forEach(function (I) {
          var z = C(Ze, Object.keys(wt)),
            j = !p(z, I);
          j &&
            (j =
              y.filter(function (L) {
                return L.name === I;
              }).length === 0),
            dt(
              j,
              [
                "`" + I + "`",
                "is not a valid prop. You may have spelled it incorrectly, or if it's",
                "a plugin, forgot to pass it in an array as props.plugins.",
                `

`,
                `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`,
                "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/",
              ].join(" ")
            );
        });
      }
      var rn = function () {
        return "innerHTML";
      };
      function $t(g, y) {
        g[rn()] = y;
      }
      function er(g) {
        var y = se();
        return (
          g === !0
            ? (y.className = s)
            : ((y.className = u), ie(g) ? y.appendChild(g) : $t(y, g)),
          y
        );
      }
      function Pn(g, y) {
        ie(y.content)
          ? ($t(g, ""), g.appendChild(y.content))
          : typeof y.content != "function" &&
            (y.allowHTML ? $t(g, y.content) : (g.textContent = y.content));
      }
      function Wt(g) {
        var y = g.firstElementChild,
          O = q(y.children);
        return {
          box: y,
          content: O.find(function (I) {
            return I.classList.contains(o);
          }),
          arrow: O.find(function (I) {
            return I.classList.contains(s) || I.classList.contains(u);
          }),
          backdrop: O.find(function (I) {
            return I.classList.contains(i);
          }),
        };
      }
      function tr(g) {
        var y = se(),
          O = se();
        (O.className = r),
          O.setAttribute("data-state", "hidden"),
          O.setAttribute("tabindex", "-1");
        var I = se();
        (I.className = o),
          I.setAttribute("data-state", "hidden"),
          Pn(I, g.props),
          y.appendChild(O),
          O.appendChild(I),
          z(g.props, g.props);
        function z(j, L) {
          var ge = Wt(y),
            oe = ge.box,
            de = ge.content,
            me = ge.arrow;
          L.theme
            ? oe.setAttribute("data-theme", L.theme)
            : oe.removeAttribute("data-theme"),
            typeof L.animation == "string"
              ? oe.setAttribute("data-animation", L.animation)
              : oe.removeAttribute("data-animation"),
            L.inertia
              ? oe.setAttribute("data-inertia", "")
              : oe.removeAttribute("data-inertia"),
            (oe.style.maxWidth =
              typeof L.maxWidth == "number" ? L.maxWidth + "px" : L.maxWidth),
            L.role
              ? oe.setAttribute("role", L.role)
              : oe.removeAttribute("role"),
            (j.content !== L.content || j.allowHTML !== L.allowHTML) &&
              Pn(de, g.props),
            L.arrow
              ? me
                ? j.arrow !== L.arrow &&
                  (oe.removeChild(me), oe.appendChild(er(L.arrow)))
                : oe.appendChild(er(L.arrow))
              : me && oe.removeChild(me);
        }
        return { popper: y, onUpdate: z };
      }
      tr.$$tippy = !0;
      var nr = 1,
        vn = [],
        gn = [];
      function on(g, y) {
        var O = Zn(g, Object.assign({}, Ze, {}, it(xe(y)))),
          I,
          z,
          j,
          L = !1,
          ge = !1,
          oe = !1,
          de = !1,
          me,
          Te,
          je,
          Se = [],
          Ie = _(Re, O.interactiveDebounce),
          Z,
          pe = nr++,
          he = null,
          K = B(O.plugins),
          ee = {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          w = {
            id: pe,
            reference: g,
            popper: se(),
            popperInstance: he,
            props: O,
            state: ee,
            plugins: K,
            clearDelayTimeouts: Pt,
            setProps: ln,
            setContent: Xt,
            show: Mt,
            hide: Fn,
            hideWithInteractivity: qt,
            enable: gt,
            disable: et,
            unmount: wn,
            destroy: Nn,
          };
        if (!O.render)
          return Ht(!0, "render() function has not been supplied."), w;
        var Ge = O.render(w),
          le = Ge.popper,
          Tt = Ge.onUpdate;
        le.setAttribute("data-tippy-root", ""),
          (le.id = "tippy-" + w.id),
          (w.popper = le),
          (g._tippy = w),
          (le._tippy = w);
        var ht = K.map(function (S) {
            return S.fn(w);
          }),
          Ut = g.hasAttribute("aria-expanded");
        return (
          Me(),
          D(),
          a(),
          m("onCreate", [w]),
          O.showOnCreate && $e(),
          le.addEventListener("mouseenter", function () {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
          }),
          le.addEventListener("mouseleave", function (S) {
            w.props.interactive &&
              w.props.trigger.indexOf("mouseenter") >= 0 &&
              (vt().addEventListener("mousemove", Ie), Ie(S));
          }),
          w
        );
        function zt() {
          var S = w.props.touch;
          return Array.isArray(S) ? S : [S, 0];
        }
        function Yt() {
          return zt()[0] === "hold";
        }
        function nt() {
          var S;
          return !!((S = w.props.render) != null && S.$$tippy);
        }
        function at() {
          return Z || g;
        }
        function vt() {
          var S = at().parentNode;
          return S ? v(S) : document;
        }
        function sn() {
          return Wt(le);
        }
        function f(S) {
          return (w.state.isMounted && !w.state.isVisible) ||
            T.isTouch ||
            (me && me.type === "focus")
            ? 0
            : x(w.props.delay, S ? 0 : 1, Ze.delay);
        }
        function a() {
          (le.style.pointerEvents =
            w.props.interactive && w.state.isVisible ? "" : "none"),
            (le.style.zIndex = "" + w.props.zIndex);
        }
        function m(S, X, J) {
          if (
            (J === void 0 && (J = !0),
            ht.forEach(function (ye) {
              ye[S] && ye[S].apply(void 0, X);
            }),
            J)
          ) {
            var ve;
            (ve = w.props)[S].apply(ve, X);
          }
        }
        function A() {
          var S = w.props.aria;
          if (S.content) {
            var X = "aria-" + S.content,
              J = le.id,
              ve = U(w.props.triggerTarget || g);
            ve.forEach(function (ye) {
              var Ke = ye.getAttribute(X);
              if (w.state.isVisible) ye.setAttribute(X, Ke ? Ke + " " + J : J);
              else {
                var Je = Ke && Ke.replace(J, "").trim();
                Je ? ye.setAttribute(X, Je) : ye.removeAttribute(X);
              }
            });
          }
        }
        function D() {
          if (!(Ut || !w.props.aria.expanded)) {
            var S = U(w.props.triggerTarget || g);
            S.forEach(function (X) {
              w.props.interactive
                ? X.setAttribute(
                    "aria-expanded",
                    w.state.isVisible && X === at() ? "true" : "false"
                  )
                : X.removeAttribute("aria-expanded");
            });
          }
        }
        function F() {
          vt().removeEventListener("mousemove", Ie),
            (vn = vn.filter(function (S) {
              return S !== Ie;
            }));
        }
        function $(S) {
          if (
            !(T.isTouch && (oe || S.type === "mousedown")) &&
            !(w.props.interactive && le.contains(S.target))
          ) {
            if (at().contains(S.target)) {
              if (
                T.isTouch ||
                (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
              )
                return;
            } else m("onClickOutside", [w, S]);
            w.props.hideOnClick === !0 &&
              (w.clearDelayTimeouts(),
              w.hide(),
              (ge = !0),
              setTimeout(function () {
                ge = !1;
              }),
              w.state.isMounted || W());
          }
        }
        function k() {
          oe = !0;
        }
        function Y() {
          oe = !1;
        }
        function te() {
          var S = vt();
          S.addEventListener("mousedown", $, !0),
            S.addEventListener("touchend", $, h),
            S.addEventListener("touchstart", Y, h),
            S.addEventListener("touchmove", k, h);
        }
        function W() {
          var S = vt();
          S.removeEventListener("mousedown", $, !0),
            S.removeEventListener("touchend", $, h),
            S.removeEventListener("touchstart", Y, h),
            S.removeEventListener("touchmove", k, h);
        }
        function De(S, X) {
          Ae(S, function () {
            !w.state.isVisible &&
              le.parentNode &&
              le.parentNode.contains(le) &&
              X();
          });
        }
        function Ne(S, X) {
          Ae(S, X);
        }
        function Ae(S, X) {
          var J = sn().box;
          function ve(ye) {
            ye.target === J && (H(J, "remove", ve), X());
          }
          if (S === 0) return X();
          H(J, "remove", Te), H(J, "add", ve), (Te = ve);
        }
        function we(S, X, J) {
          J === void 0 && (J = !1);
          var ve = U(w.props.triggerTarget || g);
          ve.forEach(function (ye) {
            ye.addEventListener(S, X, J),
              Se.push({ node: ye, eventType: S, handler: X, options: J });
          });
        }
        function Me() {
          Yt() &&
            (we("touchstart", Be, { passive: !0 }),
            we("touchend", He, { passive: !0 })),
            M(w.props.trigger).forEach(function (S) {
              if (S !== "manual")
                switch ((we(S, Be), S)) {
                  case "mouseenter":
                    we("mouseleave", He);
                    break;
                  case "focus":
                    we(Mr ? "focusout" : "blur", ae);
                    break;
                  case "focusin":
                    we("focusout", ae);
                    break;
                }
            });
        }
        function Ee() {
          Se.forEach(function (S) {
            var X = S.node,
              J = S.eventType,
              ve = S.handler,
              ye = S.options;
            X.removeEventListener(J, ve, ye);
          }),
            (Se = []);
        }
        function Be(S) {
          var X,
            J = !1;
          if (!(!w.state.isEnabled || Pe(S) || ge)) {
            var ve = ((X = me) == null ? void 0 : X.type) === "focus";
            (me = S),
              (Z = S.currentTarget),
              D(),
              !w.state.isVisible &&
                R(S) &&
                vn.forEach(function (ye) {
                  return ye(S);
                }),
              S.type === "click" &&
              (w.props.trigger.indexOf("mouseenter") < 0 || L) &&
              w.props.hideOnClick !== !1 &&
              w.state.isVisible
                ? (J = !0)
                : $e(S),
              S.type === "click" && (L = !J),
              J && !ve && Ve(S);
          }
        }
        function Re(S) {
          var X = S.target,
            J = at().contains(X) || le.contains(X);
          if (!(S.type === "mousemove" && J)) {
            var ve = Ye()
              .concat(le)
              .map(function (ye) {
                var Ke,
                  Je = ye._tippy,
                  xt = (Ke = Je.popperInstance) == null ? void 0 : Ke.state;
                return xt
                  ? {
                      popperRect: ye.getBoundingClientRect(),
                      popperState: xt,
                      props: O,
                    }
                  : null;
              })
              .filter(Boolean);
            c(ve, S) && (F(), Ve(S));
          }
        }
        function He(S) {
          var X = Pe(S) || (w.props.trigger.indexOf("click") >= 0 && L);
          if (!X) {
            if (w.props.interactive) {
              w.hideWithInteractivity(S);
              return;
            }
            Ve(S);
          }
        }
        function ae(S) {
          (w.props.trigger.indexOf("focusin") < 0 && S.target !== at()) ||
            (w.props.interactive &&
              S.relatedTarget &&
              le.contains(S.relatedTarget)) ||
            Ve(S);
        }
        function Pe(S) {
          return T.isTouch ? Yt() !== S.type.indexOf("touch") >= 0 : !1;
        }
        function _e() {
          Le();
          var S = w.props,
            X = S.popperOptions,
            J = S.placement,
            ve = S.offset,
            ye = S.getReferenceClientRect,
            Ke = S.moveTransition,
            Je = nt() ? Wt(le).arrow : null,
            xt = ye
              ? {
                  getBoundingClientRect: ye,
                  contextElement: ye.contextElement || at(),
                }
              : g,
            Ln = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (fn) {
                var Gt = fn.state;
                if (nt()) {
                  var Vr = sn(),
                    Kt = Vr.box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (un) {
                      un === "placement"
                        ? Kt.setAttribute("data-placement", Gt.placement)
                        : Gt.attributes.popper["data-popper-" + un]
                        ? Kt.setAttribute("data-" + un, "")
                        : Kt.removeAttribute("data-" + un);
                    }
                  ),
                    (Gt.attributes.popper = {});
                }
              },
            },
            Et = [
              { name: "offset", options: { offset: ve } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !Ke } },
              Ln,
            ];
          nt() &&
            Je &&
            Et.push({ name: "arrow", options: { element: Je, padding: 3 } }),
            Et.push.apply(Et, X?.modifiers || []),
            (w.popperInstance = t.createPopper(
              xt,
              le,
              Object.assign({}, X, {
                placement: J,
                onFirstUpdate: je,
                modifiers: Et,
              })
            ));
        }
        function Le() {
          w.popperInstance &&
            (w.popperInstance.destroy(), (w.popperInstance = null));
        }
        function Fe() {
          var S = w.props.appendTo,
            X,
            J = at();
          (w.props.interactive && S === Ze.appendTo) || S === "parent"
            ? (X = J.parentNode)
            : (X = E(S, [J])),
            X.contains(le) || X.appendChild(le),
            _e(),
            dt(
              w.props.interactive &&
                S === Ze.appendTo &&
                J.nextElementSibling !== le,
              [
                "Interactive tippy element may not be accessible via keyboard",
                "navigation because it is not directly after the reference element",
                "in the DOM source order.",
                `

`,
                "Using a wrapper <div> or <span> tag around the reference element",
                "solves this by creating a new parentNode context.",
                `

`,
                "Specifying `appendTo: document.body` silences this warning, but it",
                "assumes you are using a focus management solution to handle",
                "keyboard navigation.",
                `

`,
                "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity",
              ].join(" ")
            );
        }
        function Ye() {
          return q(le.querySelectorAll("[data-tippy-root]"));
        }
        function $e(S) {
          w.clearDelayTimeouts(), S && m("onTrigger", [w, S]), te();
          var X = f(!0),
            J = zt(),
            ve = J[0],
            ye = J[1];
          T.isTouch && ve === "hold" && ye && (X = ye),
            X
              ? (I = setTimeout(function () {
                  w.show();
                }, X))
              : w.show();
        }
        function Ve(S) {
          if (
            (w.clearDelayTimeouts(),
            m("onUntrigger", [w, S]),
            !w.state.isVisible)
          ) {
            W();
            return;
          }
          if (
            !(
              w.props.trigger.indexOf("mouseenter") >= 0 &&
              w.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(S.type) >= 0 &&
              L
            )
          ) {
            var X = f(!1);
            X
              ? (z = setTimeout(function () {
                  w.state.isVisible && w.hide();
                }, X))
              : (j = requestAnimationFrame(function () {
                  w.hide();
                }));
          }
        }
        function gt() {
          w.state.isEnabled = !0;
        }
        function et() {
          w.hide(), (w.state.isEnabled = !1);
        }
        function Pt() {
          clearTimeout(I), clearTimeout(z), cancelAnimationFrame(j);
        }
        function ln(S) {
          if ((dt(w.state.isDestroyed, Bt("setProps")), !w.state.isDestroyed)) {
            m("onBeforeUpdate", [w, S]), Ee();
            var X = w.props,
              J = Zn(
                g,
                Object.assign({}, w.props, {}, S, { ignoreAttributes: !0 })
              );
            (w.props = J),
              Me(),
              X.interactiveDebounce !== J.interactiveDebounce &&
                (F(), (Ie = _(Re, J.interactiveDebounce))),
              X.triggerTarget && !J.triggerTarget
                ? U(X.triggerTarget).forEach(function (ve) {
                    ve.removeAttribute("aria-expanded");
                  })
                : J.triggerTarget && g.removeAttribute("aria-expanded"),
              D(),
              a(),
              Tt && Tt(X, J),
              w.popperInstance &&
                (_e(),
                Ye().forEach(function (ve) {
                  requestAnimationFrame(ve._tippy.popperInstance.forceUpdate);
                })),
              m("onAfterUpdate", [w, S]);
          }
        }
        function Xt(S) {
          w.setProps({ content: S });
        }
        function Mt() {
          dt(w.state.isDestroyed, Bt("show"));
          var S = w.state.isVisible,
            X = w.state.isDestroyed,
            J = !w.state.isEnabled,
            ve = T.isTouch && !w.props.touch,
            ye = x(w.props.duration, 0, Ze.duration);
          if (
            !(S || X || J || ve) &&
            !at().hasAttribute("disabled") &&
            (m("onShow", [w], !1), w.props.onShow(w) !== !1)
          ) {
            if (
              ((w.state.isVisible = !0),
              nt() && (le.style.visibility = "visible"),
              a(),
              te(),
              w.state.isMounted || (le.style.transition = "none"),
              nt())
            ) {
              var Ke = sn(),
                Je = Ke.box,
                xt = Ke.content;
              l([Je, xt], 0);
            }
            (je = function () {
              var Et;
              if (!(!w.state.isVisible || de)) {
                if (
                  ((de = !0),
                  le.offsetHeight,
                  (le.style.transition = w.props.moveTransition),
                  nt() && w.props.animation)
                ) {
                  var xn = sn(),
                    fn = xn.box,
                    Gt = xn.content;
                  l([fn, Gt], ye), d([fn, Gt], "visible");
                }
                A(),
                  D(),
                  V(gn, w),
                  (Et = w.popperInstance) == null || Et.forceUpdate(),
                  (w.state.isMounted = !0),
                  m("onMount", [w]),
                  w.props.animation &&
                    nt() &&
                    Ne(ye, function () {
                      (w.state.isShown = !0), m("onShown", [w]);
                    });
              }
            }),
              Fe();
          }
        }
        function Fn() {
          dt(w.state.isDestroyed, Bt("hide"));
          var S = !w.state.isVisible,
            X = w.state.isDestroyed,
            J = !w.state.isEnabled,
            ve = x(w.props.duration, 1, Ze.duration);
          if (
            !(S || X || J) &&
            (m("onHide", [w], !1), w.props.onHide(w) !== !1)
          ) {
            if (
              ((w.state.isVisible = !1),
              (w.state.isShown = !1),
              (de = !1),
              (L = !1),
              nt() && (le.style.visibility = "hidden"),
              F(),
              W(),
              a(),
              nt())
            ) {
              var ye = sn(),
                Ke = ye.box,
                Je = ye.content;
              w.props.animation && (l([Ke, Je], ve), d([Ke, Je], "hidden"));
            }
            A(),
              D(),
              w.props.animation ? nt() && De(ve, w.unmount) : w.unmount();
          }
        }
        function qt(S) {
          dt(w.state.isDestroyed, Bt("hideWithInteractivity")),
            vt().addEventListener("mousemove", Ie),
            V(vn, Ie),
            Ie(S);
        }
        function wn() {
          dt(w.state.isDestroyed, Bt("unmount")),
            w.state.isVisible && w.hide(),
            w.state.isMounted &&
              (Le(),
              Ye().forEach(function (S) {
                S._tippy.unmount();
              }),
              le.parentNode && le.parentNode.removeChild(le),
              (gn = gn.filter(function (S) {
                return S !== w;
              })),
              (w.state.isMounted = !1),
              m("onHidden", [w]));
        }
        function Nn() {
          dt(w.state.isDestroyed, Bt("destroy")),
            !w.state.isDestroyed &&
              (w.clearDelayTimeouts(),
              w.unmount(),
              Ee(),
              delete g._tippy,
              (w.state.isDestroyed = !0),
              m("onDestroy", [w]));
        }
      }
      function ut(g, y) {
        y === void 0 && (y = {});
        var O = Ze.plugins.concat(y.plugins || []);
        yt(g), pt(y, O), jt();
        var I = Object.assign({}, y, { plugins: O }),
          z = ce(g),
          j = ie(I.content),
          L = z.length > 1;
        dt(
          j && L,
          [
            "tippy() was passed an Element as the `content` prop, but more than",
            "one tippy instance was created by this invocation. This means the",
            "content element will only be appended to the last tippy instance.",
            `

`,
            "Instead, pass the .innerHTML of the element, or use a function that",
            "returns a cloned version of the element instead.",
            `

`,
            `1) content: element.innerHTML
`,
            "2) content: () => element.cloneNode(true)",
          ].join(" ")
        );
        var ge = z.reduce(function (oe, de) {
          var me = de && on(de, I);
          return me && oe.push(me), oe;
        }, []);
        return ie(g) ? ge[0] : ge;
      }
      (ut.defaultProps = Ze), (ut.setDefaultProps = Lr), (ut.currentInput = T);
      var rr = function (y) {
          var O = y === void 0 ? {} : y,
            I = O.exclude,
            z = O.duration;
          gn.forEach(function (j) {
            var L = !1;
            if (
              (I && (L = fe(I) ? j.reference === I : j.popper === I.popper), !L)
            ) {
              var ge = j.props.duration;
              j.setProps({ duration: z }),
                j.hide(),
                j.state.isDestroyed || j.setProps({ duration: ge });
            }
          });
        },
        ir = Object.assign({}, t.applyStyles, {
          effect: function (y) {
            var O = y.state,
              I = {
                popper: {
                  position: O.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            Object.assign(O.elements.popper.style, I.popper),
              (O.styles = I),
              O.elements.arrow &&
                Object.assign(O.elements.arrow.style, I.arrow);
          },
        }),
        or = function (y, O) {
          var I;
          O === void 0 && (O = {}),
            Ht(
              !Array.isArray(y),
              [
                "The first argument passed to createSingleton() must be an array of",
                "tippy instances. The passed value was",
                String(y),
              ].join(" ")
            );
          var z = y,
            j = [],
            L,
            ge = O.overrides,
            oe = [],
            de = !1;
          function me() {
            j = z.map(function (K) {
              return K.reference;
            });
          }
          function Te(K) {
            z.forEach(function (ee) {
              K ? ee.enable() : ee.disable();
            });
          }
          function je(K) {
            return z.map(function (ee) {
              var w = ee.setProps;
              return (
                (ee.setProps = function (Ge) {
                  w(Ge), ee.reference === L && K.setProps(Ge);
                }),
                function () {
                  ee.setProps = w;
                }
              );
            });
          }
          function Se(K, ee) {
            var w = j.indexOf(ee);
            if (ee !== L) {
              L = ee;
              var Ge = (ge || []).concat("content").reduce(function (le, Tt) {
                return (le[Tt] = z[w].props[Tt]), le;
              }, {});
              K.setProps(
                Object.assign({}, Ge, {
                  getReferenceClientRect:
                    typeof Ge.getReferenceClientRect == "function"
                      ? Ge.getReferenceClientRect
                      : function () {
                          return ee.getBoundingClientRect();
                        },
                })
              );
            }
          }
          Te(!1), me();
          var Ie = {
              fn: function () {
                return {
                  onDestroy: function () {
                    Te(!0);
                  },
                  onHidden: function () {
                    L = null;
                  },
                  onClickOutside: function (w) {
                    w.props.showOnCreate && !de && ((de = !0), (L = null));
                  },
                  onShow: function (w) {
                    w.props.showOnCreate && !de && ((de = !0), Se(w, j[0]));
                  },
                  onTrigger: function (w, Ge) {
                    Se(w, Ge.currentTarget);
                  },
                };
              },
            },
            Z = ut(
              se(),
              Object.assign({}, C(O, ["overrides"]), {
                plugins: [Ie].concat(O.plugins || []),
                triggerTarget: j,
                popperOptions: Object.assign({}, O.popperOptions, {
                  modifiers: [].concat(
                    ((I = O.popperOptions) == null ? void 0 : I.modifiers) ||
                      [],
                    [ir]
                  ),
                }),
              })
            ),
            pe = Z.show;
          (Z.show = function (K) {
            if ((pe(), !L && K == null)) return Se(Z, j[0]);
            if (!(L && K == null)) {
              if (typeof K == "number") return j[K] && Se(Z, j[K]);
              if (z.includes(K)) {
                var ee = K.reference;
                return Se(Z, ee);
              }
              if (j.includes(K)) return Se(Z, K);
            }
          }),
            (Z.showNext = function () {
              var K = j[0];
              if (!L) return Z.show(0);
              var ee = j.indexOf(L);
              Z.show(j[ee + 1] || K);
            }),
            (Z.showPrevious = function () {
              var K = j[j.length - 1];
              if (!L) return Z.show(K);
              var ee = j.indexOf(L),
                w = j[ee - 1] || K;
              Z.show(w);
            });
          var he = Z.setProps;
          return (
            (Z.setProps = function (K) {
              (ge = K.overrides || ge), he(K);
            }),
            (Z.setInstances = function (K) {
              Te(!0),
                oe.forEach(function (ee) {
                  return ee();
                }),
                (z = K),
                Te(!1),
                me(),
                je(Z),
                Z.setProps({ triggerTarget: j });
            }),
            (oe = je(Z)),
            Z
          );
        },
        ar = { mouseover: "mouseenter", focusin: "focus", click: "click" };
      function Vt(g, y) {
        Ht(
          !(y && y.target),
          [
            "You must specity a `target` prop indicating a CSS selector string matching",
            "the target elements that should receive a tippy.",
          ].join(" ")
        );
        var O = [],
          I = [],
          z = !1,
          j = y.target,
          L = C(y, ["target"]),
          ge = Object.assign({}, L, { trigger: "manual", touch: !1 }),
          oe = Object.assign({}, L, { showOnCreate: !0 }),
          de = ut(g, ge),
          me = U(de);
        function Te(pe) {
          if (!(!pe.target || z)) {
            var he = pe.target.closest(j);
            if (he) {
              var K =
                he.getAttribute("data-tippy-trigger") ||
                y.trigger ||
                Ze.trigger;
              if (
                !he._tippy &&
                !(pe.type === "touchstart" && typeof oe.touch == "boolean") &&
                !(pe.type !== "touchstart" && K.indexOf(ar[pe.type]) < 0)
              ) {
                var ee = ut(he, oe);
                ee && (I = I.concat(ee));
              }
            }
          }
        }
        function je(pe, he, K, ee) {
          ee === void 0 && (ee = !1),
            pe.addEventListener(he, K, ee),
            O.push({ node: pe, eventType: he, handler: K, options: ee });
        }
        function Se(pe) {
          var he = pe.reference;
          je(he, "touchstart", Te, h),
            je(he, "mouseover", Te),
            je(he, "focusin", Te),
            je(he, "click", Te);
        }
        function Ie() {
          O.forEach(function (pe) {
            var he = pe.node,
              K = pe.eventType,
              ee = pe.handler,
              w = pe.options;
            he.removeEventListener(K, ee, w);
          }),
            (O = []);
        }
        function Z(pe) {
          var he = pe.destroy,
            K = pe.enable,
            ee = pe.disable;
          (pe.destroy = function (w) {
            w === void 0 && (w = !0),
              w &&
                I.forEach(function (Ge) {
                  Ge.destroy();
                }),
              (I = []),
              Ie(),
              he();
          }),
            (pe.enable = function () {
              K(),
                I.forEach(function (w) {
                  return w.enable();
                }),
                (z = !1);
            }),
            (pe.disable = function () {
              ee(),
                I.forEach(function (w) {
                  return w.disable();
                }),
                (z = !0);
            }),
            Se(pe);
        }
        return me.forEach(Z), de;
      }
      var sr = {
        name: "animateFill",
        defaultValue: !1,
        fn: function (y) {
          var O;
          if (!((O = y.props.render) != null && O.$$tippy))
            return (
              Ht(
                y.props.animateFill,
                "The `animateFill` plugin requires the default render function."
              ),
              {}
            );
          var I = Wt(y.popper),
            z = I.box,
            j = I.content,
            L = y.props.animateFill ? jr() : null;
          return {
            onCreate: function () {
              L &&
                (z.insertBefore(L, z.firstElementChild),
                z.setAttribute("data-animatefill", ""),
                (z.style.overflow = "hidden"),
                y.setProps({ arrow: !1, animation: "shift-away" }));
            },
            onMount: function () {
              if (L) {
                var oe = z.style.transitionDuration,
                  de = Number(oe.replace("ms", ""));
                (j.style.transitionDelay = Math.round(de / 10) + "ms"),
                  (L.style.transitionDuration = oe),
                  d([L], "visible");
              }
            },
            onShow: function () {
              L && (L.style.transitionDuration = "0ms");
            },
            onHide: function () {
              L && d([L], "hidden");
            },
          };
        },
      };
      function jr() {
        var g = se();
        return (g.className = i), d([g], "hidden"), g;
      }
      var mn = { clientX: 0, clientY: 0 },
        an = [];
      function bn(g) {
        var y = g.clientX,
          O = g.clientY;
        mn = { clientX: y, clientY: O };
      }
      function yn(g) {
        g.addEventListener("mousemove", bn);
      }
      function Br(g) {
        g.removeEventListener("mousemove", bn);
      }
      var Mn = {
        name: "followCursor",
        defaultValue: !1,
        fn: function (y) {
          var O = y.reference,
            I = v(y.props.triggerTarget || O),
            z = !1,
            j = !1,
            L = !0,
            ge = y.props;
          function oe() {
            return y.props.followCursor === "initial" && y.state.isVisible;
          }
          function de() {
            I.addEventListener("mousemove", je);
          }
          function me() {
            I.removeEventListener("mousemove", je);
          }
          function Te() {
            (z = !0), y.setProps({ getReferenceClientRect: null }), (z = !1);
          }
          function je(Z) {
            var pe = Z.target ? O.contains(Z.target) : !0,
              he = y.props.followCursor,
              K = Z.clientX,
              ee = Z.clientY,
              w = O.getBoundingClientRect(),
              Ge = K - w.left,
              le = ee - w.top;
            (pe || !y.props.interactive) &&
              y.setProps({
                getReferenceClientRect: function () {
                  var ht = O.getBoundingClientRect(),
                    Ut = K,
                    zt = ee;
                  he === "initial" && ((Ut = ht.left + Ge), (zt = ht.top + le));
                  var Yt = he === "horizontal" ? ht.top : zt,
                    nt = he === "vertical" ? ht.right : Ut,
                    at = he === "horizontal" ? ht.bottom : zt,
                    vt = he === "vertical" ? ht.left : Ut;
                  return {
                    width: nt - vt,
                    height: at - Yt,
                    top: Yt,
                    right: nt,
                    bottom: at,
                    left: vt,
                  };
                },
              });
          }
          function Se() {
            y.props.followCursor && (an.push({ instance: y, doc: I }), yn(I));
          }
          function Ie() {
            (an = an.filter(function (Z) {
              return Z.instance !== y;
            })),
              an.filter(function (Z) {
                return Z.doc === I;
              }).length === 0 && Br(I);
          }
          return {
            onCreate: Se,
            onDestroy: Ie,
            onBeforeUpdate: function () {
              ge = y.props;
            },
            onAfterUpdate: function (pe, he) {
              var K = he.followCursor;
              z ||
                (K !== void 0 &&
                  ge.followCursor !== K &&
                  (Ie(),
                  K
                    ? (Se(), y.state.isMounted && !j && !oe() && de())
                    : (me(), Te())));
            },
            onMount: function () {
              y.props.followCursor &&
                !j &&
                (L && (je(mn), (L = !1)), oe() || de());
            },
            onTrigger: function (pe, he) {
              R(he) && (mn = { clientX: he.clientX, clientY: he.clientY }),
                (j = he.type === "focus");
            },
            onHidden: function () {
              y.props.followCursor && (Te(), me(), (L = !0));
            },
          };
        },
      };
      function Hr(g, y) {
        var O;
        return {
          popperOptions: Object.assign({}, g.popperOptions, {
            modifiers: [].concat(
              (
                ((O = g.popperOptions) == null ? void 0 : O.modifiers) || []
              ).filter(function (I) {
                var z = I.name;
                return z !== y.name;
              }),
              [y]
            ),
          }),
        };
      }
      var Rn = {
        name: "inlinePositioning",
        defaultValue: !1,
        fn: function (y) {
          var O = y.reference;
          function I() {
            return !!y.props.inlinePositioning;
          }
          var z,
            j = -1,
            L = !1,
            ge = {
              name: "tippyInlinePositioning",
              enabled: !0,
              phase: "afterWrite",
              fn: function (je) {
                var Se = je.state;
                I() &&
                  (z !== Se.placement &&
                    y.setProps({
                      getReferenceClientRect: function () {
                        return oe(Se.placement);
                      },
                    }),
                  (z = Se.placement));
              },
            };
          function oe(Te) {
            return $r(
              Q(Te),
              O.getBoundingClientRect(),
              q(O.getClientRects()),
              j
            );
          }
          function de(Te) {
            (L = !0), y.setProps(Te), (L = !1);
          }
          function me() {
            L || de(Hr(y.props, ge));
          }
          return {
            onCreate: me,
            onAfterUpdate: me,
            onTrigger: function (je, Se) {
              if (R(Se)) {
                var Ie = q(y.reference.getClientRects()),
                  Z = Ie.find(function (pe) {
                    return (
                      pe.left - 2 <= Se.clientX &&
                      pe.right + 2 >= Se.clientX &&
                      pe.top - 2 <= Se.clientY &&
                      pe.bottom + 2 >= Se.clientY
                    );
                  });
                j = Ie.indexOf(Z);
              }
            },
            onUntrigger: function () {
              j = -1;
            },
          };
        },
      };
      function $r(g, y, O, I) {
        if (O.length < 2 || g === null) return y;
        if (O.length === 2 && I >= 0 && O[0].left > O[1].right)
          return O[I] || y;
        switch (g) {
          case "top":
          case "bottom": {
            var z = O[0],
              j = O[O.length - 1],
              L = g === "top",
              ge = z.top,
              oe = j.bottom,
              de = L ? z.left : j.left,
              me = L ? z.right : j.right,
              Te = me - de,
              je = oe - ge;
            return {
              top: ge,
              bottom: oe,
              left: de,
              right: me,
              width: Te,
              height: je,
            };
          }
          case "left":
          case "right": {
            var Se = Math.min.apply(
                Math,
                O.map(function (le) {
                  return le.left;
                })
              ),
              Ie = Math.max.apply(
                Math,
                O.map(function (le) {
                  return le.right;
                })
              ),
              Z = O.filter(function (le) {
                return g === "left" ? le.left === Se : le.right === Ie;
              }),
              pe = Z[0].top,
              he = Z[Z.length - 1].bottom,
              K = Se,
              ee = Ie,
              w = ee - K,
              Ge = he - pe;
            return {
              top: pe,
              bottom: he,
              left: K,
              right: ee,
              width: w,
              height: Ge,
            };
          }
          default:
            return y;
        }
      }
      var Wr = {
        name: "sticky",
        defaultValue: !1,
        fn: function (y) {
          var O = y.reference,
            I = y.popper;
          function z() {
            return y.popperInstance
              ? y.popperInstance.state.elements.reference
              : O;
          }
          function j(de) {
            return y.props.sticky === !0 || y.props.sticky === de;
          }
          var L = null,
            ge = null;
          function oe() {
            var de = j("reference") ? z().getBoundingClientRect() : null,
              me = j("popper") ? I.getBoundingClientRect() : null;
            ((de && In(L, de)) || (me && In(ge, me))) &&
              y.popperInstance &&
              y.popperInstance.update(),
              (L = de),
              (ge = me),
              y.state.isMounted && requestAnimationFrame(oe);
          }
          return {
            onMount: function () {
              y.props.sticky && oe();
            },
          };
        },
      };
      function In(g, y) {
        return g && y
          ? g.top !== y.top ||
              g.right !== y.right ||
              g.bottom !== y.bottom ||
              g.left !== y.left
          : !0;
      }
      ut.setDefaultProps({ render: tr }),
        (e.animateFill = sr),
        (e.createSingleton = or),
        (e.default = ut),
        (e.delegate = Vt),
        (e.followCursor = Mn),
        (e.hideAll = rr),
        (e.inlinePositioning = Rn),
        (e.roundArrow = n),
        (e.sticky = Wr);
    }),
    bi = To(Po()),
    rs = To(Po()),
    is = (e) => {
      let t = { plugins: [] },
        n = (o) => e[e.indexOf(o) + 1];
      if (
        (e.includes("animation") && (t.animation = n("animation")),
        e.includes("duration") && (t.duration = parseInt(n("duration"))),
        e.includes("delay"))
      ) {
        let o = n("delay");
        t.delay = o.includes("-")
          ? o.split("-").map((i) => parseInt(i))
          : parseInt(o);
      }
      if (e.includes("cursor")) {
        t.plugins.push(rs.followCursor);
        let o = n("cursor");
        ["x", "initial"].includes(o)
          ? (t.followCursor = o === "x" ? "horizontal" : "initial")
          : (t.followCursor = !0);
      }
      e.includes("on") && (t.trigger = n("on")),
        e.includes("arrowless") && (t.arrow = !1),
        e.includes("html") && (t.allowHTML = !0),
        e.includes("interactive") && (t.interactive = !0),
        e.includes("border") &&
          t.interactive &&
          (t.interactiveBorder = parseInt(n("border"))),
        e.includes("debounce") &&
          t.interactive &&
          (t.interactiveDebounce = parseInt(n("debounce"))),
        e.includes("max-width") && (t.maxWidth = parseInt(n("max-width"))),
        e.includes("theme") && (t.theme = n("theme")),
        e.includes("placement") && (t.placement = n("placement"));
      let r = {};
      return (
        e.includes("no-flip") &&
          (r.modifiers || (r.modifiers = []),
          r.modifiers.push({ name: "flip", enabled: !1 })),
        (t.popperOptions = r),
        t
      );
    };
  function yi(e) {
    e.magic("tooltip", (t) => (n, r = {}) => {
      let o = r.timeout;
      delete r.timeout;
      let i = (0, bi.default)(t, { content: n, trigger: "manual", ...r });
      i.show(),
        setTimeout(() => {
          i.hide(), setTimeout(() => i.destroy(), r.duration || 300);
        }, o || 2e3);
    }),
      e.directive(
        "tooltip",
        (
          t,
          { modifiers: n, expression: r },
          { evaluateLater: o, effect: i }
        ) => {
          let s = n.length > 0 ? is(n) : {};
          t.__x_tippy || (t.__x_tippy = (0, bi.default)(t, s));
          let u = () => t.__x_tippy.enable(),
            h = () => t.__x_tippy.disable(),
            p = (x) => {
              x ? (u(), t.__x_tippy.setContent(x)) : h();
            };
          if (n.includes("raw")) p(r);
          else {
            let x = o(r);
            i(() => {
              x((b) => {
                typeof b == "object" ? (t.__x_tippy.setProps(b), u()) : p(b);
              });
            });
          }
        }
      );
  }
  yi.defaultProps = (e) => (bi.default.setDefaultProps(e), yi);
  var os = yi,
    Mo = os;
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(Qi),
      window.Alpine.plugin(Zi),
      window.Alpine.plugin(Do),
      window.Alpine.plugin(Mo);
  });
  var as = function (e, t, n) {
    function r(x, b) {
      for (let E of x) {
        let _ = o(E, b);
        if (_ !== null) return _;
      }
    }
    function o(x, b) {
      let E = x.match(/^[\{\[]([^\[\]\{\}]*)[\}\]](.*)/s);
      if (E === null || E.length !== 3) return null;
      let _ = E[1],
        C = E[2];
      if (_.includes(",")) {
        let [M, U] = _.split(",", 2);
        if (U === "*" && b >= M) return C;
        if (M === "*" && b <= U) return C;
        if (b >= M && b <= U) return C;
      }
      return _ == b ? C : null;
    }
    function i(x) {
      return x.toString().charAt(0).toUpperCase() + x.toString().slice(1);
    }
    function s(x, b) {
      if (b.length === 0) return x;
      let E = {};
      for (let [_, C] of Object.entries(b))
        (E[":" + i(_ ?? "")] = i(C ?? "")),
          (E[":" + _.toUpperCase()] = C.toString().toUpperCase()),
          (E[":" + _] = C);
      return (
        Object.entries(E).forEach(([_, C]) => {
          x = x.replaceAll(_, C);
        }),
        x
      );
    }
    function u(x) {
      return x.map((b) => b.replace(/^[\{\[]([^\[\]\{\}]*)[\}\]]/, ""));
    }
    let h = e.split("|"),
      p = r(h, t);
    return p != null
      ? s(p.trim(), n)
      : ((h = u(h)), s(h.length > 1 && t > 1 ? h[1] : h[0], n));
  };
  window.jsMd5 = Ro.md5;
  window.pluralize = as;
})();
/*! Bundled license information:

js-md5/src/md5.js:
  (**
   * [js-md5]{@link https://github.com/emn178/js-md5}
   *
   * @namespace md5
   * @version 0.8.3
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2023
   * @license MIT
   *)

sortablejs/modular/sortable.esm.js:
  (**!
   * Sortable 1.15.2
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)
*/
