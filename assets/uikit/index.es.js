var zo = Object.defineProperty;
var Bo = (t, e, n) => e in t ? zo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var vt = (t, e, n) => (Bo(t, typeof e != "symbol" ? e + "" : e, n), n);
var ie;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function n(i) {
    throw new Error();
  }
  t.assertNever = n, t.arrayToEnum = (i) => {
    const s = {};
    for (const o of i)
      s[o] = o;
    return s;
  }, t.getValidEnumValues = (i) => {
    const s = t.objectKeys(i).filter((a) => typeof i[i[a]] != "number"), o = {};
    for (const a of s)
      o[a] = i[a];
    return t.objectValues(o);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(s) {
    return i[s];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
    return s;
  }, t.find = (i, s) => {
    for (const o of i)
      if (s(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, s = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(s);
  }
  t.joinValues = r, t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(ie || (ie = {}));
var Rr;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
    // second overwrites first
  });
})(Rr || (Rr = {}));
const E = ie.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), wt = (t) => {
  switch (typeof t) {
    case "undefined":
      return E.undefined;
    case "string":
      return E.string;
    case "number":
      return isNaN(t) ? E.nan : E.number;
    case "boolean":
      return E.boolean;
    case "function":
      return E.function;
    case "bigint":
      return E.bigint;
    case "symbol":
      return E.symbol;
    case "object":
      return Array.isArray(t) ? E.array : t === null ? E.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? E.promise : typeof Map < "u" && t instanceof Map ? E.map : typeof Set < "u" && t instanceof Set ? E.set : typeof Date < "u" && t instanceof Date ? E.date : E.object;
    default:
      return E.unknown;
  }
}, S = ie.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Vo = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class tt extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const n = e || function(s) {
      return s.message;
    }, r = { _errors: [] }, i = (s) => {
      for (const o of s.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(i);
        else if (o.code === "invalid_return_type")
          i(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          i(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let a = r, c = 0;
          for (; c < o.path.length; ) {
            const l = o.path[c];
            c === o.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(n(o))) : a[l] = a[l] || { _errors: [] }, a = a[l], c++;
          }
        }
    };
    return i(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ie.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e(i))) : r.push(e(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
tt.create = (t) => new tt(t);
const gn = (t, e) => {
  let n;
  switch (t.code) {
    case S.invalid_type:
      t.received === E.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case S.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, ie.jsonStringifyReplacer)}`;
      break;
    case S.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ie.joinValues(t.keys, ", ")}`;
      break;
    case S.invalid_union:
      n = "Invalid input";
      break;
    case S.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ie.joinValues(t.options)}`;
      break;
    case S.invalid_enum_value:
      n = `Invalid enum value. Expected ${ie.joinValues(t.options)}, received '${t.received}'`;
      break;
    case S.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case S.invalid_return_type:
      n = "Invalid function return type";
      break;
    case S.invalid_date:
      n = "Invalid date";
      break;
    case S.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : ie.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case S.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case S.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case S.custom:
      n = "Invalid input";
      break;
    case S.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case S.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case S.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, ie.assertNever(t);
  }
  return { message: n };
};
let Os = gn;
function Wo(t) {
  Os = t;
}
function Kn() {
  return Os;
}
const Yn = (t) => {
  const { data: e, path: n, errorMaps: r, issueData: i } = t, s = [...n, ...i.path || []], o = {
    ...i,
    path: s
  };
  let a = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    a = l(o, { data: e, defaultError: a }).message;
  return {
    ...i,
    path: s,
    message: i.message || a
  };
}, Uo = [];
function O(t, e) {
  const n = Yn({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Kn(),
      gn
      // then global default map
    ].filter((r) => !!r)
  });
  t.common.issues.push(n);
}
class Ie {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted")
        return G;
      i.status === "dirty" && e.dirty(), r.push(i.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const i of n)
      r.push({
        key: await i.key,
        value: await i.value
      });
    return Ie.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const i of n) {
      const { key: s, value: o } = i;
      if (s.status === "aborted" || o.status === "aborted")
        return G;
      s.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[s.value] = o.value);
    }
    return { status: e.value, value: r };
  }
}
const G = Object.freeze({
  status: "aborted"
}), As = (t) => ({ status: "dirty", value: t }), De = (t) => ({ status: "valid", value: t }), Pr = (t) => t.status === "aborted", Ir = (t) => t.status === "dirty", bn = (t) => t.status === "valid", Xn = (t) => typeof Promise < "u" && t instanceof Promise;
var F;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(F || (F = {}));
class ot {
  constructor(e, n, r, i) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const di = (t, e) => {
  if (bn(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new tt(t.common.issues);
      return this._error = n, this._error;
    }
  };
};
function H(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: n, required_error: r, description: i } = t;
  if (e && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: r ?? a.defaultError } : { message: n ?? a.defaultError }, description: i };
}
class K {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return wt(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: wt(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Ie(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: wt(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Xn(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n);
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, n) {
    var r;
    const i = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: wt(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return di(i, s);
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: wt(e)
    }, i = this._parse({ data: e, path: r.path, parent: r }), s = await (Xn(i) ? i : Promise.resolve(i));
    return di(r, s);
  }
  refine(e, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, s) => {
      const o = e(i), a = () => s.addIssue({
        code: S.custom,
        ...r(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, n) {
    return this._refinement((r, i) => e(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(e) {
    return new it({
      schema: this,
      typeName: B.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return ft.create(this, this._def);
  }
  nullable() {
    return Dt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return nt.create(this, this._def);
  }
  promise() {
    return $t.create(this, this._def);
  }
  or(e) {
    return wn.create([this, e], this._def);
  }
  and(e) {
    return kn.create(this, e, this._def);
  }
  transform(e) {
    return new it({
      ...H(this._def),
      schema: this,
      typeName: B.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new En({
      ...H(this._def),
      innerType: this,
      defaultValue: n,
      typeName: B.ZodDefault
    });
  }
  brand() {
    return new Rs({
      typeName: B.ZodBranded,
      type: this,
      ...H(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new er({
      ...H(this._def),
      innerType: this,
      catchValue: n,
      typeName: B.ZodCatch
    });
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Rn.create(this, e);
  }
  readonly() {
    return nr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Go = /^c[^\s-]{8,}$/i, qo = /^[a-z][a-z0-9]*$/, Ho = /[0-9A-HJKMNP-TV-Z]{26}/, Ko = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Yo = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Xo = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Jo = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Qo = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, $o = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function ea(t, e) {
  return !!((e === "v4" || !e) && Jo.test(t) || (e === "v6" || !e) && Qo.test(t));
}
class et extends K {
  constructor() {
    super(...arguments), this._regex = (e, n, r) => this.refinement((i) => e.test(i), {
      validation: n,
      code: S.invalid_string,
      ...F.errToObj(r)
    }), this.nonempty = (e) => this.min(1, F.errToObj(e)), this.trim = () => new et({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new et({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new et({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== E.string) {
      const s = this._getOrReturnCtx(e);
      return O(
        s,
        {
          code: S.invalid_type,
          expected: E.string,
          received: s.parsedType
        }
        //
      ), G;
    }
    const r = new Ie();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const o = e.data.length > s.value, a = e.data.length < s.value;
        (o || a) && (i = this._getOrReturnCtx(e, i), o ? O(i, {
          code: S.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && O(i, {
          code: S.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        Yo.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "email",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        Xo.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "emoji",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        Ko.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "uuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        Go.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        qo.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "cuid2",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        Ho.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "ulid",
          code: S.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), O(i, {
            validation: "url",
            code: S.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "regex",
          code: S.invalid_string,
          message: s.message
        }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "datetime" ? $o(s).test(e.data) || (i = this._getOrReturnCtx(e, i), O(i, {
          code: S.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? ea(e.data, s.version) || (i = this._getOrReturnCtx(e, i), O(i, {
          validation: "ip",
          code: S.invalid_string,
          message: s.message
        }), r.dirty()) : ie.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new et({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...F.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...F.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...F.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...F.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...F.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...F.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...F.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...F.errToObj(e) });
  }
  datetime(e) {
    var n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
      ...F.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...F.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...F.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...F.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...F.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...F.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...F.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...F.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
et.create = (t) => {
  var e;
  return new et({
    checks: [],
    typeName: B.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...H(t)
  });
};
function ta(t, e) {
  const n = (t.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, i = n > r ? n : r, s = parseInt(t.toFixed(i).replace(".", "")), o = parseInt(e.toFixed(i).replace(".", ""));
  return s % o / Math.pow(10, i);
}
class kt extends K {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== E.number) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_type,
        expected: E.number,
        received: s.parsedType
      }), G;
    }
    let r;
    const i = new Ie();
    for (const s of this._def.checks)
      s.kind === "int" ? ie.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? ta(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.not_finite,
        message: s.message
      }), i.dirty()) : ie.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, F.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, F.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, F.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, F.toString(n));
  }
  setLimit(e, n, r, i) {
    return new kt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: F.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: F.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: F.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: F.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: F.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: F.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: F.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: F.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: F.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: F.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && ie.isInteger(e.value));
  }
  get isFinite() {
    let e = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
}
kt.create = (t) => new kt({
  checks: [],
  typeName: B.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...H(t)
});
class Tt extends K {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== E.bigint) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_type,
        expected: E.bigint,
        received: s.parsedType
      }), G;
    }
    let r;
    const i = new Ie();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), O(r, {
        code: S.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : ie.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, F.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, F.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, F.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, F.toString(n));
  }
  setLimit(e, n, r, i) {
    return new Tt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: F.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Tt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: F.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: F.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: F.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: F.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: F.toString(n)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
Tt.create = (t) => {
  var e;
  return new Tt({
    checks: [],
    typeName: B.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...H(t)
  });
};
class vn extends K {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== E.boolean) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: E.boolean,
        received: r.parsedType
      }), G;
    }
    return De(e.data);
  }
}
vn.create = (t) => new vn({
  typeName: B.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...H(t)
});
class Mt extends K {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== E.date) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_type,
        expected: E.date,
        received: s.parsedType
      }), G;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return O(s, {
        code: S.invalid_date
      }), G;
    }
    const r = new Ie();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), O(i, {
        code: S.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : ie.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Mt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: F.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: F.toString(n)
    });
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
}
Mt.create = (t) => new Mt({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: B.ZodDate,
  ...H(t)
});
class Jn extends K {
  _parse(e) {
    if (this._getType(e) !== E.symbol) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: E.symbol,
        received: r.parsedType
      }), G;
    }
    return De(e.data);
  }
}
Jn.create = (t) => new Jn({
  typeName: B.ZodSymbol,
  ...H(t)
});
class _n extends K {
  _parse(e) {
    if (this._getType(e) !== E.undefined) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: E.undefined,
        received: r.parsedType
      }), G;
    }
    return De(e.data);
  }
}
_n.create = (t) => new _n({
  typeName: B.ZodUndefined,
  ...H(t)
});
class yn extends K {
  _parse(e) {
    if (this._getType(e) !== E.null) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: E.null,
        received: r.parsedType
      }), G;
    }
    return De(e.data);
  }
}
yn.create = (t) => new yn({
  typeName: B.ZodNull,
  ...H(t)
});
class Qt extends K {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return De(e.data);
  }
}
Qt.create = (t) => new Qt({
  typeName: B.ZodAny,
  ...H(t)
});
class Pt extends K {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return De(e.data);
  }
}
Pt.create = (t) => new Pt({
  typeName: B.ZodUnknown,
  ...H(t)
});
class dt extends K {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return O(n, {
      code: S.invalid_type,
      expected: E.never,
      received: n.parsedType
    }), G;
  }
}
dt.create = (t) => new dt({
  typeName: B.ZodNever,
  ...H(t)
});
class Qn extends K {
  _parse(e) {
    if (this._getType(e) !== E.undefined) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: E.void,
        received: r.parsedType
      }), G;
    }
    return De(e.data);
  }
}
Qn.create = (t) => new Qn({
  typeName: B.ZodVoid,
  ...H(t)
});
class nt extends K {
  _parse(e) {
    const { ctx: n, status: r } = this._processInputParams(e), i = this._def;
    if (n.parsedType !== E.array)
      return O(n, {
        code: S.invalid_type,
        expected: E.array,
        received: n.parsedType
      }), G;
    if (i.exactLength !== null) {
      const o = n.data.length > i.exactLength.value, a = n.data.length < i.exactLength.value;
      (o || a) && (O(n, {
        code: o ? S.too_big : S.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (O(n, {
      code: S.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (O(n, {
      code: S.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, a) => i.type._parseAsync(new ot(n, o, n.path, a)))).then((o) => Ie.mergeArray(r, o));
    const s = [...n.data].map((o, a) => i.type._parseSync(new ot(n, o, n.path, a)));
    return Ie.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new nt({
      ...this._def,
      minLength: { value: e, message: F.toString(n) }
    });
  }
  max(e, n) {
    return new nt({
      ...this._def,
      maxLength: { value: e, message: F.toString(n) }
    });
  }
  length(e, n) {
    return new nt({
      ...this._def,
      exactLength: { value: e, message: F.toString(n) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
nt.create = (t, e) => new nt({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: B.ZodArray,
  ...H(e)
});
function qt(t) {
  if (t instanceof Te) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = ft.create(qt(r));
    }
    return new Te({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof nt ? new nt({
      ...t._def,
      type: qt(t.element)
    }) : t instanceof ft ? ft.create(qt(t.unwrap())) : t instanceof Dt ? Dt.create(qt(t.unwrap())) : t instanceof at ? at.create(t.items.map((e) => qt(e))) : t;
}
class Te extends K {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), n = ie.objectKeys(e);
    return this._cached = { shape: e, keys: n };
  }
  _parse(e) {
    if (this._getType(e) !== E.object) {
      const l = this._getOrReturnCtx(e);
      return O(l, {
        code: S.invalid_type,
        expected: E.object,
        received: l.parsedType
      }), G;
    }
    const { status: r, ctx: i } = this._processInputParams(e), { shape: s, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof dt && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const u = s[l], f = i.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new ot(i, f, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof dt) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: i.data[u] }
          });
      else if (l === "strict")
        a.length > 0 && (O(i, {
          code: S.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const f = i.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new ot(i, f, i.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const f = await u.key;
        l.push({
          key: f,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => Ie.mergeObjectSync(r, l)) : Ie.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return F.errToObj, new Te({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var i, s, o, a;
          const c = (o = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = F.errToObj(e).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Te({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Te({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new Te({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new Te({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: B.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, n) {
    return this.augment({ [e]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new Te({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    return ie.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Te({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    return ie.objectKeys(this.shape).forEach((r) => {
      e[r] || (n[r] = this.shape[r]);
    }), new Te({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return qt(this);
  }
  partial(e) {
    const n = {};
    return ie.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      e && !e[r] ? n[r] = i : n[r] = i.optional();
    }), new Te({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    return ie.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        n[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof ft; )
          s = s._def.innerType;
        n[r] = s;
      }
    }), new Te({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Ns(ie.objectKeys(this.shape));
  }
}
Te.create = (t, e) => new Te({
  shape: () => t,
  unknownKeys: "strip",
  catchall: dt.create(),
  typeName: B.ZodObject,
  ...H(e)
});
Te.strictCreate = (t, e) => new Te({
  shape: () => t,
  unknownKeys: "strict",
  catchall: dt.create(),
  typeName: B.ZodObject,
  ...H(e)
});
Te.lazycreate = (t, e) => new Te({
  shape: t,
  unknownKeys: "strip",
  catchall: dt.create(),
  typeName: B.ZodObject,
  ...H(e)
});
class wn extends K {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = this._def.options;
    function i(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = s.map((a) => new tt(a.ctx.common.issues));
      return O(n, {
        code: S.invalid_union,
        unionErrors: o
      }), G;
    }
    if (n.common.async)
      return Promise.all(r.map(async (s) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    {
      let s;
      const o = [];
      for (const c of r) {
        const l = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !s && (s = { result: u, ctx: l }), l.common.issues.length && o.push(l.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((c) => new tt(c));
      return O(n, {
        code: S.invalid_union,
        unionErrors: a
      }), G;
    }
  }
  get options() {
    return this._def.options;
  }
}
wn.create = (t, e) => new wn({
  options: t,
  typeName: B.ZodUnion,
  ...H(e)
});
const Un = (t) => t instanceof Cn ? Un(t.schema) : t instanceof it ? Un(t.innerType()) : t instanceof Sn ? [t.value] : t instanceof Ct ? t.options : t instanceof xn ? Object.keys(t.enum) : t instanceof En ? Un(t._def.innerType) : t instanceof _n ? [void 0] : t instanceof yn ? [null] : null;
class br extends K {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== E.object)
      return O(n, {
        code: S.invalid_type,
        expected: E.object,
        received: n.parsedType
      }), G;
    const r = this.discriminator, i = n.data[r], s = this.optionsMap.get(i);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (O(n, {
      code: S.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), G);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, n, r) {
    const i = /* @__PURE__ */ new Map();
    for (const s of n) {
      const o = Un(s.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        i.set(a, s);
      }
    }
    return new br({
      typeName: B.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: i,
      ...H(r)
    });
  }
}
function Mr(t, e) {
  const n = wt(t), r = wt(e);
  if (t === e)
    return { valid: !0, data: t };
  if (n === E.object && r === E.object) {
    const i = ie.objectKeys(e), s = ie.objectKeys(t).filter((a) => i.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of s) {
      const c = Mr(t[a], e[a]);
      if (!c.valid)
        return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (n === E.array && r === E.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], a = e[s], c = Mr(o, a);
      if (!c.valid)
        return { valid: !1 };
      i.push(c.data);
    }
    return { valid: !0, data: i };
  } else
    return n === E.date && r === E.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class kn extends K {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), i = (s, o) => {
      if (Pr(s) || Pr(o))
        return G;
      const a = Mr(s.value, o.value);
      return a.valid ? ((Ir(s) || Ir(o)) && n.dirty(), { status: n.value, value: a.data }) : (O(r, {
        code: S.invalid_intersection_types
      }), G);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([s, o]) => i(s, o)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
kn.create = (t, e, n) => new kn({
  left: t,
  right: e,
  typeName: B.ZodIntersection,
  ...H(n)
});
class at extends K {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== E.array)
      return O(r, {
        code: S.invalid_type,
        expected: E.array,
        received: r.parsedType
      }), G;
    if (r.data.length < this._def.items.length)
      return O(r, {
        code: S.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), G;
    !this._def.rest && r.data.length > this._def.items.length && (O(r, {
      code: S.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...r.data].map((o, a) => {
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new ot(r, o, r.path, a)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(s).then((o) => Ie.mergeArray(n, o)) : Ie.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new at({
      ...this._def,
      rest: e
    });
  }
}
at.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new at({
    items: t,
    typeName: B.ZodTuple,
    rest: null,
    ...H(e)
  });
};
class Tn extends K {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== E.object)
      return O(r, {
        code: S.invalid_type,
        expected: E.object,
        received: r.parsedType
      }), G;
    const i = [], s = this._def.keyType, o = this._def.valueType;
    for (const a in r.data)
      i.push({
        key: s._parse(new ot(r, a, r.path, a)),
        value: o._parse(new ot(r, r.data[a], r.path, a))
      });
    return r.common.async ? Ie.mergeObjectAsync(n, i) : Ie.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, n, r) {
    return n instanceof K ? new Tn({
      keyType: e,
      valueType: n,
      typeName: B.ZodRecord,
      ...H(r)
    }) : new Tn({
      keyType: et.create(),
      valueType: e,
      typeName: B.ZodRecord,
      ...H(n)
    });
  }
}
class $n extends K {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== E.map)
      return O(r, {
        code: S.invalid_type,
        expected: E.map,
        received: r.parsedType
      }), G;
    const i = this._def.keyType, s = this._def.valueType, o = [...r.data.entries()].map(([a, c], l) => ({
      key: i._parse(new ot(r, a, r.path, [l, "key"])),
      value: s._parse(new ot(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return G;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(l.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of o) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return G;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(l.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
$n.create = (t, e, n) => new $n({
  valueType: e,
  keyType: t,
  typeName: B.ZodMap,
  ...H(n)
});
class Lt extends K {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== E.set)
      return O(r, {
        code: S.invalid_type,
        expected: E.set,
        received: r.parsedType
      }), G;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (O(r, {
      code: S.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (O(r, {
      code: S.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function o(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return G;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const a = [...r.data.values()].map((c, l) => s._parse(new ot(r, c, r.path, l)));
    return r.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(e, n) {
    return new Lt({
      ...this._def,
      minSize: { value: e, message: F.toString(n) }
    });
  }
  max(e, n) {
    return new Lt({
      ...this._def,
      maxSize: { value: e, message: F.toString(n) }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Lt.create = (t, e) => new Lt({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: B.ZodSet,
  ...H(e)
});
class Kt extends K {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== E.function)
      return O(n, {
        code: S.invalid_type,
        expected: E.function,
        received: n.parsedType
      }), G;
    function r(a, c) {
      return Yn({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Kn(),
          gn
        ].filter((l) => !!l),
        issueData: {
          code: S.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function i(a, c) {
      return Yn({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Kn(),
          gn
        ].filter((l) => !!l),
        issueData: {
          code: S.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof $t) {
      const a = this;
      return De(async function(...c) {
        const l = new tt([]), u = await a._def.args.parseAsync(c, s).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), f = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(f, s).catch((h) => {
          throw l.addIssue(i(f, h)), l;
        });
      });
    } else {
      const a = this;
      return De(function(...c) {
        const l = a._def.args.safeParse(c, s);
        if (!l.success)
          throw new tt([r(c, l.error)]);
        const u = Reflect.apply(o, this, l.data), f = a._def.returns.safeParse(u, s);
        if (!f.success)
          throw new tt([i(u, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Kt({
      ...this._def,
      args: at.create(e).rest(Pt.create())
    });
  }
  returns(e) {
    return new Kt({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, n, r) {
    return new Kt({
      args: e || at.create([]).rest(Pt.create()),
      returns: n || Pt.create(),
      typeName: B.ZodFunction,
      ...H(r)
    });
  }
}
class Cn extends K {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Cn.create = (t, e) => new Cn({
  getter: t,
  typeName: B.ZodLazy,
  ...H(e)
});
class Sn extends K {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return O(n, {
        received: n.data,
        code: S.invalid_literal,
        expected: this._def.value
      }), G;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Sn.create = (t, e) => new Sn({
  value: t,
  typeName: B.ZodLiteral,
  ...H(e)
});
function Ns(t, e) {
  return new Ct({
    values: t,
    typeName: B.ZodEnum,
    ...H(e)
  });
}
class Ct extends K {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return O(n, {
        expected: ie.joinValues(r),
        received: n.parsedType,
        code: S.invalid_type
      }), G;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return O(n, {
        received: n.data,
        code: S.invalid_enum_value,
        options: r
      }), G;
    }
    return De(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Values() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  extract(e) {
    return Ct.create(e);
  }
  exclude(e) {
    return Ct.create(this.options.filter((n) => !e.includes(n)));
  }
}
Ct.create = Ns;
class xn extends K {
  _parse(e) {
    const n = ie.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== E.string && r.parsedType !== E.number) {
      const i = ie.objectValues(n);
      return O(r, {
        expected: ie.joinValues(i),
        received: r.parsedType,
        code: S.invalid_type
      }), G;
    }
    if (n.indexOf(e.data) === -1) {
      const i = ie.objectValues(n);
      return O(r, {
        received: r.data,
        code: S.invalid_enum_value,
        options: i
      }), G;
    }
    return De(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
xn.create = (t, e) => new xn({
  values: t,
  typeName: B.ZodNativeEnum,
  ...H(e)
});
class $t extends K {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== E.promise && n.common.async === !1)
      return O(n, {
        code: S.invalid_type,
        expected: E.promise,
        received: n.parsedType
      }), G;
    const r = n.parsedType === E.promise ? n.data : Promise.resolve(n.data);
    return De(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
$t.create = (t, e) => new $t({
  type: t,
  typeName: B.ZodPromise,
  ...H(e)
});
class it extends K {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === B.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), i = this._def.effect || null, s = {
      addIssue: (o) => {
        O(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "preprocess") {
      const o = i.transform(r.data, s);
      return r.common.issues.length ? {
        status: "dirty",
        value: r.data
      } : r.common.async ? Promise.resolve(o).then((a) => this._def.schema._parseAsync({
        data: a,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: o,
        path: r.path,
        parent: r
      });
    }
    if (i.type === "refinement") {
      const o = (a) => {
        const c = i.refinement(a, s);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? G : (a.status === "dirty" && n.dirty(), o(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? G : (a.status === "dirty" && n.dirty(), o(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!bn(o))
          return o;
        const a = i.transform(o.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => bn(o) ? Promise.resolve(i.transform(o.value, s)).then((a) => ({ status: n.value, value: a })) : o);
    ie.assertNever(i);
  }
}
it.create = (t, e, n) => new it({
  schema: t,
  typeName: B.ZodEffects,
  effect: e,
  ...H(n)
});
it.createWithPreprocess = (t, e, n) => new it({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: B.ZodEffects,
  ...H(n)
});
class ft extends K {
  _parse(e) {
    return this._getType(e) === E.undefined ? De(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ft.create = (t, e) => new ft({
  innerType: t,
  typeName: B.ZodOptional,
  ...H(e)
});
class Dt extends K {
  _parse(e) {
    return this._getType(e) === E.null ? De(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dt.create = (t, e) => new Dt({
  innerType: t,
  typeName: B.ZodNullable,
  ...H(e)
});
class En extends K {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === E.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
En.create = (t, e) => new En({
  innerType: t,
  typeName: B.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...H(e)
});
class er extends K {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Xn(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new tt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new tt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
er.create = (t, e) => new er({
  innerType: t,
  typeName: B.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...H(e)
});
class tr extends K {
  _parse(e) {
    if (this._getType(e) !== E.nan) {
      const r = this._getOrReturnCtx(e);
      return O(r, {
        code: S.invalid_type,
        expected: E.nan,
        received: r.parsedType
      }), G;
    }
    return { status: "valid", value: e.data };
  }
}
tr.create = (t) => new tr({
  typeName: B.ZodNaN,
  ...H(t)
});
const na = Symbol("zod_brand");
class Rs extends K {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Rn extends K {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? G : s.status === "dirty" ? (n.dirty(), As(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? G : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, n) {
    return new Rn({
      in: e,
      out: n,
      typeName: B.ZodPipeline
    });
  }
}
class nr extends K {
  _parse(e) {
    const n = this._def.innerType._parse(e);
    return bn(n) && (n.value = Object.freeze(n.value)), n;
  }
}
nr.create = (t, e) => new nr({
  innerType: t,
  typeName: B.ZodReadonly,
  ...H(e)
});
const Ps = (t, e = {}, n) => t ? Qt.create().superRefine((r, i) => {
  var s, o;
  if (!t(r)) {
    const a = typeof e == "function" ? e(r) : typeof e == "string" ? { message: e } : e, c = (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0 ? o : !0, l = typeof a == "string" ? { message: a } : a;
    i.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Qt.create(), ra = {
  object: Te.lazycreate
};
var B;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(B || (B = {}));
const ia = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Ps((n) => n instanceof t, e), Is = et.create, Ms = kt.create, sa = tr.create, oa = Tt.create, Ls = vn.create, aa = Mt.create, la = Jn.create, ca = _n.create, ua = yn.create, fa = Qt.create, da = Pt.create, ha = dt.create, ma = Qn.create, pa = nt.create, ga = Te.create, ba = Te.strictCreate, va = wn.create, _a = br.create, ya = kn.create, wa = at.create, ka = Tn.create, Ta = $n.create, Ca = Lt.create, Sa = Kt.create, xa = Cn.create, Ea = Sn.create, Oa = Ct.create, Aa = xn.create, Na = $t.create, hi = it.create, Ra = ft.create, Pa = Dt.create, Ia = it.createWithPreprocess, Ma = Rn.create, La = () => Is().optional(), Da = () => Ms().optional(), ja = () => Ls().optional(), Za = {
  string: (t) => et.create({ ...t, coerce: !0 }),
  number: (t) => kt.create({ ...t, coerce: !0 }),
  boolean: (t) => vn.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Tt.create({ ...t, coerce: !0 }),
  date: (t) => Mt.create({ ...t, coerce: !0 })
}, Fa = G;
var Gn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: gn,
  setErrorMap: Wo,
  getErrorMap: Kn,
  makeIssue: Yn,
  EMPTY_PATH: Uo,
  addIssueToContext: O,
  ParseStatus: Ie,
  INVALID: G,
  DIRTY: As,
  OK: De,
  isAborted: Pr,
  isDirty: Ir,
  isValid: bn,
  isAsync: Xn,
  get util() {
    return ie;
  },
  get objectUtil() {
    return Rr;
  },
  ZodParsedType: E,
  getParsedType: wt,
  ZodType: K,
  ZodString: et,
  ZodNumber: kt,
  ZodBigInt: Tt,
  ZodBoolean: vn,
  ZodDate: Mt,
  ZodSymbol: Jn,
  ZodUndefined: _n,
  ZodNull: yn,
  ZodAny: Qt,
  ZodUnknown: Pt,
  ZodNever: dt,
  ZodVoid: Qn,
  ZodArray: nt,
  ZodObject: Te,
  ZodUnion: wn,
  ZodDiscriminatedUnion: br,
  ZodIntersection: kn,
  ZodTuple: at,
  ZodRecord: Tn,
  ZodMap: $n,
  ZodSet: Lt,
  ZodFunction: Kt,
  ZodLazy: Cn,
  ZodLiteral: Sn,
  ZodEnum: Ct,
  ZodNativeEnum: xn,
  ZodPromise: $t,
  ZodEffects: it,
  ZodTransformer: it,
  ZodOptional: ft,
  ZodNullable: Dt,
  ZodDefault: En,
  ZodCatch: er,
  ZodNaN: tr,
  BRAND: na,
  ZodBranded: Rs,
  ZodPipeline: Rn,
  ZodReadonly: nr,
  custom: Ps,
  Schema: K,
  ZodSchema: K,
  late: ra,
  get ZodFirstPartyTypeKind() {
    return B;
  },
  coerce: Za,
  any: fa,
  array: pa,
  bigint: oa,
  boolean: Ls,
  date: aa,
  discriminatedUnion: _a,
  effect: hi,
  enum: Oa,
  function: Sa,
  instanceof: ia,
  intersection: ya,
  lazy: xa,
  literal: Ea,
  map: Ta,
  nan: sa,
  nativeEnum: Aa,
  never: ha,
  null: ua,
  nullable: Pa,
  number: Ms,
  object: ga,
  oboolean: ja,
  onumber: Da,
  optional: Ra,
  ostring: La,
  pipeline: Ma,
  preprocess: Ia,
  promise: Na,
  record: ka,
  set: Ca,
  strictObject: ba,
  string: Is,
  symbol: la,
  transformer: hi,
  tuple: wa,
  undefined: ca,
  union: va,
  unknown: da,
  void: ma,
  NEVER: Fa,
  ZodIssueCode: S,
  quotelessJson: Vo,
  ZodError: tt
});
function ne() {
}
const Ur = (t) => t;
function M(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Ds(t) {
  return t();
}
function mi() {
  return /* @__PURE__ */ Object.create(null);
}
function Ne(t) {
  t.forEach(Ds);
}
function Ft(t) {
  return typeof t == "function";
}
function re(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function za(t) {
  return Object.keys(t).length === 0;
}
function Gr(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return ne;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Pe(t) {
  let e;
  return Gr(t, (n) => e = n)(), e;
}
function lt(t, e, n) {
  t.$$.on_destroy.push(Gr(e, n));
}
function oe(t, e, n, r) {
  if (t) {
    const i = js(t, e, n, r);
    return t[0](i);
  }
}
function js(t, e, n, r) {
  return t[1] && r ? M(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function ae(t, e, n, r) {
  if (t[2] && r) {
    const i = t[2](r(n));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(e.dirty.length, i.length);
      for (let a = 0; a < o; a += 1)
        s[a] = e.dirty[a] | i[a];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function le(t, e, n, r, i, s) {
  if (i) {
    const o = js(e, n, r, s);
    t.p(o, i);
  }
}
function ce(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function Oe(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function se(t, e) {
  const n = {};
  e = new Set(e);
  for (const r in t)
    !e.has(r) && r[0] !== "$" && (n[r] = t[r]);
  return n;
}
function ut(t) {
  return t && Ft(t.destroy) ? t.destroy : ne;
}
const Ba = ["", !0, 1, "true", "contenteditable"], Zs = typeof window < "u";
let qr = Zs ? () => window.performance.now() : () => Date.now(), Hr = Zs ? (t) => requestAnimationFrame(t) : ne;
const Yt = /* @__PURE__ */ new Set();
function Fs(t) {
  Yt.forEach((e) => {
    e.c(t) || (Yt.delete(e), e.f());
  }), Yt.size !== 0 && Hr(Fs);
}
function Kr(t) {
  let e;
  return Yt.size === 0 && Hr(Fs), {
    promise: new Promise((n) => {
      Yt.add(e = { c: t, f: n });
    }),
    abort() {
      Yt.delete(e);
    }
  };
}
function W(t, e) {
  t.appendChild(e);
}
function zs(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Va(t) {
  const e = D("style");
  return e.textContent = "/* empty */", Wa(zs(t), e), e.sheet;
}
function Wa(t, e) {
  return W(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function R(t, e, n) {
  t.insertBefore(e, n || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function zt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function D(t) {
  return document.createElement(t);
}
function Yr(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Re(t) {
  return document.createTextNode(t);
}
function Ee() {
  return Re(" ");
}
function Be() {
  return Re("");
}
function Q(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Ua(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function I(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Ga = ["width", "height"];
function ve(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set && Ga.indexOf(r) === -1 ? t[r] = e[r] : I(t, r, e[r]);
}
function rr(t, e) {
  for (const n in e)
    I(t, n, e[n]);
}
function qa(t) {
  return Array.from(t.childNodes);
}
function Le(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Ha(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function Ka(t, e, n) {
  ~Ba.indexOf(n) ? Ha(t, e) : Le(t, e);
}
function pi(t, e) {
  t.value = e ?? "";
}
function gi(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Bs(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
class Vs {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    vt(this, "is_svg", !1);
    /** parent for creating node */
    vt(this, "e");
    /** html tag nodes */
    vt(this, "n");
    /** target */
    vt(this, "t");
    /** anchor */
    vt(this, "a");
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, n, r = null) {
    this.e || (this.is_svg ? this.e = Yr(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = D(
      /** @type {keyof HTMLElementTagNameMap} */
      n.nodeType === 11 ? "TEMPLATE" : n.nodeName
    ), this.t = n.tagName !== "TEMPLATE" ? n : (
      /** @type {HTMLTemplateElement} */
      n.content
    ), this.c(e)), this.i(r);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      R(this.t, this.n[n], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(N);
  }
}
function bi(t, e) {
  return new t(e);
}
const ir = /* @__PURE__ */ new Map();
let sr = 0;
function Ya(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Xa(t, e) {
  const n = { stylesheet: Va(e), rules: {} };
  return ir.set(t, n), n;
}
function or(t, e, n, r, i, s, o, a = 0) {
  const c = 16.666 / r;
  let l = `{
`;
  for (let p = 0; p <= 1; p += c) {
    const g = e + (n - e) * s(p);
    l += p * 100 + `%{${o(g, 1 - g)}}
`;
  }
  const u = l + `100% {${o(n, 1 - n)}}
}`, f = `__svelte_${Ya(u)}_${a}`, d = zs(t), { stylesheet: h, rules: m } = ir.get(d) || Xa(d, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const v = t.style.animation || "";
  return t.style.animation = `${v ? `${v}, ` : ""}${f} ${r}ms linear ${i}ms 1 both`, sr += 1, f;
}
function ar(t, e) {
  const n = (t.style.animation || "").split(", "), r = n.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = n.length - r.length;
  i && (t.style.animation = r.join(", "), sr -= i, sr || Ja());
}
function Ja() {
  Hr(() => {
    sr || (ir.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && N(e);
    }), ir.clear());
  });
}
let On;
function dn(t) {
  On = t;
}
function Pn() {
  if (!On)
    throw new Error("Function called outside component initialization");
  return On;
}
function Ws(t) {
  Pn().$$.on_mount.push(t);
}
function Us(t) {
  Pn().$$.on_destroy.push(t);
}
function tn() {
  const t = Pn();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const s = Bs(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return i.slice().forEach((o) => {
        o.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function vr(t, e) {
  return Pn().$$.context.set(t, e), e;
}
function _r(t) {
  return Pn().$$.context.get(t);
}
function Ce(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Ht = [], rt = [];
let Xt = [];
const Lr = [], Gs = /* @__PURE__ */ Promise.resolve();
let Dr = !1;
function qs() {
  Dr || (Dr = !0, Gs.then(Ks));
}
function Hs() {
  return qs(), Gs;
}
function ht(t) {
  Xt.push(t);
}
function lr(t) {
  Lr.push(t);
}
const Sr = /* @__PURE__ */ new Set();
let Wt = 0;
function Ks() {
  if (Wt !== 0)
    return;
  const t = On;
  do {
    try {
      for (; Wt < Ht.length; ) {
        const e = Ht[Wt];
        Wt++, dn(e), Qa(e.$$);
      }
    } catch (e) {
      throw Ht.length = 0, Wt = 0, e;
    }
    for (dn(null), Ht.length = 0, Wt = 0; rt.length; )
      rt.pop()();
    for (let e = 0; e < Xt.length; e += 1) {
      const n = Xt[e];
      Sr.has(n) || (Sr.add(n), n());
    }
    Xt.length = 0;
  } while (Ht.length);
  for (; Lr.length; )
    Lr.pop()();
  Dr = !1, Sr.clear(), dn(t);
}
function Qa(t) {
  if (t.fragment !== null) {
    t.update(), Ne(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ht);
  }
}
function $a(t) {
  const e = [], n = [];
  Xt.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Xt = e;
}
let ln;
function Xr() {
  return ln || (ln = Promise.resolve(), ln.then(() => {
    ln = null;
  })), ln;
}
function It(t, e, n) {
  t.dispatchEvent(Bs(`${e ? "intro" : "outro"}${n}`));
}
const qn = /* @__PURE__ */ new Set();
let st;
function je() {
  st = {
    r: 0,
    c: [],
    p: st
    // parent group
  };
}
function Ze() {
  st.r || Ne(st.c), st = st.p;
}
function k(t, e) {
  t && t.i && (qn.delete(t), t.i(e));
}
function x(t, e, n, r) {
  if (t && t.o) {
    if (qn.has(t))
      return;
    qn.add(t), st.c.push(() => {
      qn.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
const Jr = { duration: 0 };
function Ys(t, e, n) {
  const r = { direction: "in" };
  let i = e(t, n, r), s = !1, o, a, c = 0;
  function l() {
    o && ar(t, o);
  }
  function u() {
    const {
      delay: d = 0,
      duration: h = 300,
      easing: m = Ur,
      tick: v = ne,
      css: p
    } = i || Jr;
    p && (o = or(t, 0, 1, h, d, m, p, c++)), v(0, 1);
    const g = qr() + d, b = g + h;
    a && a.abort(), s = !0, ht(() => It(t, !0, "start")), a = Kr((w) => {
      if (s) {
        if (w >= b)
          return v(1, 0), It(t, !0, "end"), l(), s = !1;
        if (w >= g) {
          const T = m((w - g) / h);
          v(T, 1 - T);
        }
      }
      return s;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, ar(t), Ft(i) ? (i = i(r), Xr().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      s && (l(), s = !1);
    }
  };
}
function Xs(t, e, n) {
  const r = { direction: "out" };
  let i = e(t, n, r), s = !0, o;
  const a = st;
  a.r += 1;
  let c;
  function l() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: d = Ur,
      tick: h = ne,
      css: m
    } = i || Jr;
    m && (o = or(t, 1, 0, f, u, d, m));
    const v = qr() + u, p = v + f;
    ht(() => It(t, !1, "start")), "inert" in t && (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Kr((g) => {
      if (s) {
        if (g >= p)
          return h(0, 1), It(t, !1, "end"), --a.r || Ne(a.c), !1;
        if (g >= v) {
          const b = d((g - v) / f);
          h(1 - b, b);
        }
      }
      return s;
    });
  }
  return Ft(i) ? Xr().then(() => {
    i = i(r), l();
  }) : l(), {
    end(u) {
      u && "inert" in t && (t.inert = c), u && i.tick && i.tick(1, 0), s && (o && ar(t, o), s = !1);
    }
  };
}
function vi(t, e, n, r) {
  let s = e(t, n, { direction: "both" }), o = r ? 0 : 1, a = null, c = null, l = null, u;
  function f() {
    l && ar(t, l);
  }
  function d(m, v) {
    const p = (
      /** @type {Program['d']} */
      m.b - o
    );
    return v *= Math.abs(p), {
      a: o,
      b: m.b,
      d: p,
      duration: v,
      start: m.start,
      end: m.start + v,
      group: m.group
    };
  }
  function h(m) {
    const {
      delay: v = 0,
      duration: p = 300,
      easing: g = Ur,
      tick: b = ne,
      css: w
    } = s || Jr, T = {
      start: qr() + v,
      b: m
    };
    m || (T.group = st, st.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || c ? c = T : (w && (f(), l = or(t, o, m, p, v, g, w)), m && b(0, 1), a = d(T, p), ht(() => It(t, m, "start")), Kr((j) => {
      if (c && j > c.start && (a = d(c, p), c = null, It(t, a.b, "start"), w && (f(), l = or(
        t,
        o,
        a.b,
        a.duration,
        0,
        g,
        s.css
      ))), a) {
        if (j >= a.end)
          b(o = a.b, 1 - o), It(t, a.b, "end"), c || (a.b ? f() : --a.group.r || Ne(a.group.c)), a = null;
        else if (j >= a.start) {
          const U = j - a.start;
          o = a.a + a.d * g(U / a.duration), b(o, 1 - o);
        }
      }
      return !!(a || c);
    }));
  }
  return {
    run(m) {
      Ft(s) ? Xr().then(() => {
        s = s({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = c = null;
    }
  };
}
function ze(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function we(t, e) {
  const n = {}, r = {}, i = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const o = t[s], a = e[s];
    if (a) {
      for (const c in o)
        c in a || (r[c] = 1);
      for (const c in a)
        i[c] || (n[c] = a[c], i[c] = 1);
      t[s] = a;
    } else
      for (const c in o)
        i[c] = 1;
  }
  for (const o in r)
    o in n || (n[o] = void 0);
  return n;
}
function pt(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function cr(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function ge(t) {
  t && t.c();
}
function me(t, e, n) {
  const { fragment: r, after_update: i } = t.$$;
  r && r.m(e, n), ht(() => {
    const s = t.$$.on_mount.map(Ds).filter(Ft);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ne(s), t.$$.on_mount = [];
  }), i.forEach(ht);
}
function pe(t, e) {
  const n = t.$$;
  n.fragment !== null && ($a(n.after_update), Ne(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function el(t, e) {
  t.$$.dirty[0] === -1 && (Ht.push(t), qs(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ue(t, e, n, r, i, s, o, a = [-1]) {
  const c = On;
  dn(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: ne,
    not_equal: i,
    bound: mi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: mi(),
    dirty: a,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  o && o(l.root);
  let u = !1;
  if (l.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return l.ctx && i(l.ctx[f], l.ctx[f] = m) && (!l.skip_bound && l.bound[f] && l.bound[f](m), u && el(t, f)), d;
  }) : [], l.update(), u = !0, Ne(l.before_update), l.fragment = r ? r(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = qa(e.target);
      l.fragment && l.fragment.l(f), f.forEach(N);
    } else
      l.fragment && l.fragment.c();
    e.intro && k(t.$$.fragment), me(t, e.target, e.anchor), Ks();
  }
  dn(c);
}
class fe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    vt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    pe(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Ft(n))
      return ne;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !za(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const tl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(tl);
const nl = (t) => ({}), _i = (t) => ({}), rl = (t) => ({}), yi = (t) => ({}), il = (t) => ({}), wi = (t) => ({});
function sl(t) {
  let e;
  return {
    c() {
      e = D("div"), e.textContent = "默认的头部";
    },
    m(n, r) {
      R(n, e, r);
    },
    p: ne,
    d(n) {
      n && N(e);
    }
  };
}
function ol(t) {
  let e;
  return {
    c() {
      e = D("div"), e.textContent = "默认的左侧";
    },
    m(n, r) {
      R(n, e, r);
    },
    p: ne,
    d(n) {
      n && N(e);
    }
  };
}
function al(t) {
  let e;
  return {
    c() {
      e = D("div"), e.textContent = "默认的右侧";
    },
    m(n, r) {
      R(n, e, r);
    },
    p: ne,
    d(n) {
      n && N(e);
    }
  };
}
function ll(t) {
  let e, n, r, i, s, o, a, c;
  const l = (
    /*#slots*/
    t[10].header
  ), u = oe(
    l,
    t,
    /*$$scope*/
    t[9],
    wi
  ), f = u || sl(), d = (
    /*#slots*/
    t[10].left
  ), h = oe(
    d,
    t,
    /*$$scope*/
    t[9],
    yi
  ), m = h || ol(), v = (
    /*#slots*/
    t[10].right
  ), p = oe(
    v,
    t,
    /*$$scope*/
    t[9],
    _i
  ), g = p || al();
  return {
    c() {
      e = D("div"), n = D("div"), f && f.c(), r = Ee(), i = D("div"), s = D("div"), m && m.c(), o = Ee(), a = D("div"), g && g.c(), I(n, "class", "w-full h-[60]"), I(s, "class", "w-1/6"), I(a, "class", "w-full"), I(i, "class", "w-full h-full flex"), I(e, "class", "w-full h-full flex flex-col");
    },
    m(b, w) {
      R(b, e, w), W(e, n), f && f.m(n, null), t[11](n), W(e, r), W(e, i), W(i, s), m && m.m(s, null), t[12](s), W(i, o), W(i, a), g && g.m(a, null), t[13](a), c = !0;
    },
    p(b, [w]) {
      u && u.p && (!c || w & /*$$scope*/
      512) && le(
        u,
        l,
        b,
        /*$$scope*/
        b[9],
        c ? ae(
          l,
          /*$$scope*/
          b[9],
          w,
          il
        ) : ce(
          /*$$scope*/
          b[9]
        ),
        wi
      ), h && h.p && (!c || w & /*$$scope*/
      512) && le(
        h,
        d,
        b,
        /*$$scope*/
        b[9],
        c ? ae(
          d,
          /*$$scope*/
          b[9],
          w,
          rl
        ) : ce(
          /*$$scope*/
          b[9]
        ),
        yi
      ), p && p.p && (!c || w & /*$$scope*/
      512) && le(
        p,
        v,
        b,
        /*$$scope*/
        b[9],
        c ? ae(
          v,
          /*$$scope*/
          b[9],
          w,
          nl
        ) : ce(
          /*$$scope*/
          b[9]
        ),
        _i
      );
    },
    i(b) {
      c || (k(f, b), k(m, b), k(g, b), c = !0);
    },
    o(b) {
      x(f, b), x(m, b), x(g, b), c = !1;
    },
    d(b) {
      b && N(e), f && f.d(b), t[11](null), m && m.d(b), t[12](null), g && g.d(b), t[13](null);
    }
  };
}
function cl(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { left: s, right: o, header: a } = e;
  Ws(() => {
    f(a), d(s), h(o);
  });
  let c, l, u;
  function f(g) {
    g && (n(0, c.innerHTML = "", c), c.appendChild(g));
  }
  function d(g) {
    g && (n(1, l.innerHTML = "", l), l.appendChild(g));
  }
  function h(g) {
    g && (n(2, u.innerHTML = "", u), u.appendChild(g));
  }
  function m(g) {
    rt[g ? "unshift" : "push"](() => {
      c = g, n(0, c);
    });
  }
  function v(g) {
    rt[g ? "unshift" : "push"](() => {
      l = g, n(1, l);
    });
  }
  function p(g) {
    rt[g ? "unshift" : "push"](() => {
      u = g, n(2, u);
    });
  }
  return t.$$set = (g) => {
    "left" in g && n(3, s = g.left), "right" in g && n(4, o = g.right), "header" in g && n(5, a = g.header), "$$scope" in g && n(9, i = g.$$scope);
  }, [
    c,
    l,
    u,
    s,
    o,
    a,
    f,
    d,
    h,
    i,
    r,
    m,
    v,
    p
  ];
}
class ul extends fe {
  constructor(e) {
    super(), ue(this, e, cl, ll, re, {
      left: 3,
      right: 4,
      header: 5,
      setHeader: 6,
      setLeft: 7,
      setRight: 8
    });
  }
  get setHeader() {
    return this.$$.ctx[6];
  }
  get setLeft() {
    return this.$$.ctx[7];
  }
  get setRight() {
    return this.$$.ctx[8];
  }
}
const em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HeaderLeftRight: ul
}, Symbol.toStringTag, { value: "Module" }));
function ki(t, e, n) {
  const r = t.slice();
  return r[1] = e[n], r[3] = n, r;
}
function Ti(t) {
  let e, n;
  return e = new li({
    props: {
      field: (
        /*field*/
        t[1]
      ),
      i: `${/*i*/
      t[3]}`
    }
  }), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*fields*/
      1 && (s.field = /*field*/
      r[1]), e.$set(s);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function fl(t) {
  let e, n, r = ze(
    /*fields*/
    t[0]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Ti(ki(t, r, o));
  const s = (o) => x(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      e = D("div");
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      I(e, "class", "flex w-full");
    },
    m(o, a) {
      R(o, e, a);
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(e, null);
      n = !0;
    },
    p(o, [a]) {
      if (a & /*fields*/
      1) {
        r = ze(
          /*fields*/
          o[0]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = ki(o, r, c);
          i[c] ? (i[c].p(l, a), k(i[c], 1)) : (i[c] = Ti(l), i[c].c(), k(i[c], 1), i[c].m(e, null));
        }
        for (je(), c = r.length; c < i.length; c += 1)
          s(c);
        Ze();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          k(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        x(i[a]);
      n = !1;
    },
    d(o) {
      o && N(e), zt(i, o);
    }
  };
}
function dl(t, e, n) {
  let { fields: r } = e;
  return t.$$set = (i) => {
    "fields" in i && n(0, r = i.fields);
  }, [r];
}
class hl extends fe {
  constructor(e) {
    super(), ue(this, e, dl, fl, re, { fields: 0 });
  }
}
function Js(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Js(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function ml() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Js(t)) && (r && (r += " "), r += e);
  return r;
}
function pl() {
  for (var t = 0, e, n, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Qs(e)) && (r && (r += " "), r += n);
  return r;
}
function Qs(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", r = 0; r < t.length; r++)
    t[r] && (e = Qs(t[r])) && (n && (n += " "), n += e);
  return n;
}
var Qr = "-";
function gl(t) {
  var e = vl(t), n = t.conflictingClassGroups, r = t.conflictingClassGroupModifiers, i = r === void 0 ? {} : r;
  function s(a) {
    var c = a.split(Qr);
    return c[0] === "" && c.length !== 1 && c.shift(), $s(c, e) || bl(a);
  }
  function o(a, c) {
    var l = n[a] || [];
    return c && i[a] ? [].concat(l, i[a]) : l;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  };
}
function $s(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], r = e.nextPart.get(n), i = r ? $s(t.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length !== 0) {
    var s = t.join(Qr);
    return (o = e.validators.find(function(a) {
      var c = a.validator;
      return c(s);
    })) == null ? void 0 : o.classGroupId;
  }
}
var Ci = /^\[(.+)\]$/;
function bl(t) {
  if (Ci.test(t)) {
    var e = Ci.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function vl(t) {
  var e = t.theme, n = t.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = yl(Object.entries(t.classGroups), n);
  return i.forEach(function(s) {
    var o = s[0], a = s[1];
    jr(a, r, o, e);
  }), r;
}
function jr(t, e, n, r) {
  t.forEach(function(i) {
    if (typeof i == "string") {
      var s = i === "" ? e : Si(e, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (_l(i)) {
        jr(i(r), e, n, r);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(function(o) {
      var a = o[0], c = o[1];
      jr(c, Si(e, a), n, r);
    });
  });
}
function Si(t, e) {
  var n = t;
  return e.split(Qr).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function _l(t) {
  return t.isThemeGetter;
}
function yl(t, e) {
  return e ? t.map(function(n) {
    var r = n[0], i = n[1], s = i.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(a) {
        var c = a[0], l = a[1];
        return [e + c, l];
      })) : o;
    });
    return [r, s];
  }) : t;
}
function wl(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function i(s, o) {
    n.set(s, o), e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var a = n.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return i(o, a), a;
    },
    set: function(o, a) {
      n.has(o) ? n.set(o, a) : i(o, a);
    }
  };
}
var eo = "!";
function kl(t) {
  var e = t.separator || ":", n = e.length === 1, r = e[0], i = e.length;
  return function(o) {
    for (var a = [], c = 0, l = 0, u, f = 0; f < o.length; f++) {
      var d = o[f];
      if (c === 0) {
        if (d === r && (n || o.slice(f, f + i) === e)) {
          a.push(o.slice(l, f)), l = f + i;
          continue;
        }
        if (d === "/") {
          u = f;
          continue;
        }
      }
      d === "[" ? c++ : d === "]" && c--;
    }
    var h = a.length === 0 ? o : o.substring(l), m = h.startsWith(eo), v = m ? h.substring(1) : h, p = u && u > l ? u - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: p
    };
  };
}
function Tl(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(r) {
    var i = r[0] === "[";
    i ? (e.push.apply(e, n.sort().concat([r])), n = []) : n.push(r);
  }), e.push.apply(e, n.sort()), e;
}
function Cl(t) {
  return {
    cache: wl(t.cacheSize),
    splitModifiers: kl(t),
    ...gl(t)
  };
}
var Sl = /\s+/;
function xl(t, e) {
  var n = e.splitModifiers, r = e.getClassGroupId, i = e.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return t.trim().split(Sl).map(function(o) {
    var a = n(o), c = a.modifiers, l = a.hasImportantModifier, u = a.baseClassName, f = a.maybePostfixModifierPosition, d = r(f ? u.substring(0, f) : u), h = !!f;
    if (!d) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = r(u), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      h = !1;
    }
    var m = Tl(c).join(":"), v = l ? m + eo : m;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var a = o.modifierId, c = o.classGroupId, l = o.hasPostfixModifier, u = a + c;
    return s.has(u) ? !1 : (s.add(u), i(c, l).forEach(function(f) {
      return s.add(a + f);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function El() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, i, s, o = a;
  function a(l) {
    var u = e[0], f = e.slice(1), d = f.reduce(function(h, m) {
      return m(h);
    }, u());
    return r = Cl(d), i = r.cache.get, s = r.cache.set, o = c, c(l);
  }
  function c(l) {
    var u = i(l);
    if (u)
      return u;
    var f = xl(l, r);
    return s(l, f), f;
  }
  return function() {
    return o(pl.apply(null, arguments));
  };
}
function _e(t) {
  var e = function(r) {
    return r[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var to = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ol = /^\d+\/\d+$/, Al = /* @__PURE__ */ new Set(["px", "full", "screen"]), Nl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pl = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Qe(t) {
  return Rt(t) || Al.has(t) || Ol.test(t) || Zr(t);
}
function Zr(t) {
  return Bt(t, "length", Zl);
}
function Il(t) {
  return Bt(t, "size", no);
}
function Ml(t) {
  return Bt(t, "position", no);
}
function Ll(t) {
  return Bt(t, "url", Fl);
}
function Zn(t) {
  return Bt(t, "number", Rt);
}
function Rt(t) {
  return !Number.isNaN(Number(t));
}
function Dl(t) {
  return t.endsWith("%") && Rt(t.slice(0, -1));
}
function cn(t) {
  return xi(t) || Bt(t, "number", xi);
}
function J(t) {
  return to.test(t);
}
function un() {
  return !0;
}
function _t(t) {
  return Nl.test(t);
}
function jl(t) {
  return Bt(t, "", zl);
}
function Bt(t, e, n) {
  var r = to.exec(t);
  return r ? r[1] ? r[1] === e : n(r[2]) : !1;
}
function Zl(t) {
  return Rl.test(t);
}
function no() {
  return !1;
}
function Fl(t) {
  return t.startsWith("url(");
}
function xi(t) {
  return Number.isInteger(Number(t));
}
function zl(t) {
  return Pl.test(t);
}
function Bl() {
  var t = _e("colors"), e = _e("spacing"), n = _e("blur"), r = _e("brightness"), i = _e("borderColor"), s = _e("borderRadius"), o = _e("borderSpacing"), a = _e("borderWidth"), c = _e("contrast"), l = _e("grayscale"), u = _e("hueRotate"), f = _e("invert"), d = _e("gap"), h = _e("gradientColorStops"), m = _e("gradientColorStopPositions"), v = _e("inset"), p = _e("margin"), g = _e("opacity"), b = _e("padding"), w = _e("saturate"), T = _e("scale"), j = _e("sepia"), U = _e("skew"), V = _e("space"), P = _e("translate"), Ae = function() {
    return ["auto", "contain", "none"];
  }, $ = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, y = function() {
    return ["auto", J, e];
  }, _ = function() {
    return [J, e];
  }, A = function() {
    return ["", Qe];
  }, z = function() {
    return ["auto", Rt, J];
  }, q = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, X = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, de = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Se = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ye = function() {
    return ["", "0", J];
  }, Ke = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Ve = function() {
    return [Rt, Zn];
  }, Me = function() {
    return [Rt, J];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [un],
      spacing: [Qe],
      blur: ["none", "", _t, J],
      brightness: Ve(),
      borderColor: [t],
      borderRadius: ["none", "", "full", _t, J],
      borderSpacing: _(),
      borderWidth: A(),
      contrast: Ve(),
      grayscale: ye(),
      hueRotate: Me(),
      invert: ye(),
      gap: _(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Dl, Zr],
      inset: y(),
      margin: y(),
      opacity: Ve(),
      padding: _(),
      saturate: Ve(),
      scale: Ve(),
      sepia: ye(),
      skew: Me(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", J]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_t]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ke()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ke()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(q(), [J])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Ae()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Ae()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Ae()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", cn]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: y()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ye()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ye()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", cn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [un]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", cn]
        }, J]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [un]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [cn]
        }, J]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", J]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", J]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Se())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(Se(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(Se(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [V]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [V]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", J, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", J, Qe]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [_t]
        }, _t, J]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [J, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", J, Qe]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [J, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", _t, Zr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Zn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [un]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Rt, Zn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", J, Qe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", J]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", J]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [g]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(X(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", J, Qe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", J]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [g]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(q(), [Ml])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Il]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ll]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(X(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: X()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(X())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [J, Qe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: A()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", _t, jl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [un]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": de()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": de()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", _t, J]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [j]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [j]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", J]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Me()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Me()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", J]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [cn, J]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [U]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [U]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", J]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", J]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Qe, Zn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Vl = /* @__PURE__ */ El(Bl);
function ro(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function He(...t) {
  return Vl(ml(t));
}
const Wl = (t, e = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const n = getComputedStyle(t), r = n.transform === "none" ? "" : n.transform, i = (o, a, c) => {
    const [l, u] = a, [f, d] = c;
    return (o - l) / (u - l) * (d - f) + f;
  }, s = (o) => Object.keys(o).reduce((a, c) => o[c] === void 0 ? a : a + `${c}:${o[c]};`, "");
  return {
    duration: e.duration ?? 200,
    delay: 0,
    css: (o) => {
      const a = i(o, [0, 1], [e.y ?? 5, 0]), c = i(o, [0, 1], [e.x ?? 0, 0]), l = i(o, [0, 1], [e.start ?? 0.95, 1]);
      return s({
        transform: `${r} translate3d(${c}px, ${a}px, 0) scale(${l})`,
        opacity: o
      });
    },
    easing: ro
  };
};
function Ul(t) {
  let e, n, r, i, s = [
    {
      class: n = He(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ], o = {};
  for (let a = 0; a < s.length; a += 1)
    o = M(o, s[a]);
  return {
    c() {
      e = D("input"), ve(e, o);
    },
    m(a, c) {
      R(a, e, c), e.autofocus && e.focus(), pi(
        e,
        /*value*/
        t[0]
      ), r || (i = [
        Q(
          e,
          "input",
          /*input_input_handler*/
          t[15]
        ),
        Q(
          e,
          "blur",
          /*blur_handler*/
          t[3]
        ),
        Q(
          e,
          "change",
          /*change_handler*/
          t[4]
        ),
        Q(
          e,
          "click",
          /*click_handler*/
          t[5]
        ),
        Q(
          e,
          "focus",
          /*focus_handler*/
          t[6]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
          t[7]
        ),
        Q(
          e,
          "keypress",
          /*keypress_handler*/
          t[8]
        ),
        Q(
          e,
          "keyup",
          /*keyup_handler*/
          t[9]
        ),
        Q(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[10]
        ),
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[11]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[12]
        ),
        Q(
          e,
          "paste",
          /*paste_handler*/
          t[13]
        ),
        Q(
          e,
          "input",
          /*input_handler*/
          t[14]
        )
      ], r = !0);
    },
    p(a, [c]) {
      ve(e, o = we(s, [
        c & /*className*/
        2 && n !== (n = He(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          /*className*/
          a[1]
        )) && { class: n },
        c & /*$$restProps*/
        4 && /*$$restProps*/
        a[2]
      ])), c & /*value*/
      1 && e.value !== /*value*/
      a[0] && pi(
        e,
        /*value*/
        a[0]
      );
    },
    i: ne,
    o: ne,
    d(a) {
      a && N(e), r = !1, Ne(i);
    }
  };
}
function Gl(t, e, n) {
  const r = ["class", "value"];
  let i = se(e, r), { class: s = void 0 } = e, { value: o = void 0 } = e;
  function a(T) {
    Ce.call(this, t, T);
  }
  function c(T) {
    Ce.call(this, t, T);
  }
  function l(T) {
    Ce.call(this, t, T);
  }
  function u(T) {
    Ce.call(this, t, T);
  }
  function f(T) {
    Ce.call(this, t, T);
  }
  function d(T) {
    Ce.call(this, t, T);
  }
  function h(T) {
    Ce.call(this, t, T);
  }
  function m(T) {
    Ce.call(this, t, T);
  }
  function v(T) {
    Ce.call(this, t, T);
  }
  function p(T) {
    Ce.call(this, t, T);
  }
  function g(T) {
    Ce.call(this, t, T);
  }
  function b(T) {
    Ce.call(this, t, T);
  }
  function w() {
    o = this.value, n(0, o);
  }
  return t.$$set = (T) => {
    e = M(M({}, e), Oe(T)), n(2, i = se(e, r)), "class" in T && n(1, s = T.class), "value" in T && n(0, o = T.value);
  }, [
    o,
    s,
    i,
    a,
    c,
    l,
    u,
    f,
    d,
    h,
    m,
    v,
    p,
    g,
    b,
    w
  ];
}
class ql extends fe {
  constructor(e) {
    super(), ue(this, e, Gl, Ul, re, { class: 1, value: 0 });
  }
}
var Ei = Object.prototype.hasOwnProperty;
function Oi(t, e, n) {
  for (n of t.keys())
    if (hn(n, e))
      return n;
}
function hn(t, e) {
  var n, r, i;
  if (t === e)
    return !0;
  if (t && e && (n = t.constructor) === e.constructor) {
    if (n === Date)
      return t.getTime() === e.getTime();
    if (n === RegExp)
      return t.toString() === e.toString();
    if (n === Array) {
      if ((r = t.length) === e.length)
        for (; r-- && hn(t[r], e[r]); )
          ;
      return r === -1;
    }
    if (n === Set) {
      if (t.size !== e.size)
        return !1;
      for (r of t)
        if (i = r, i && typeof i == "object" && (i = Oi(e, i), !i) || !e.has(i))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (t.size !== e.size)
        return !1;
      for (r of t)
        if (i = r[0], i && typeof i == "object" && (i = Oi(e, i), !i) || !hn(r[1], e.get(i)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      t = new Uint8Array(t), e = new Uint8Array(e);
    else if (n === DataView) {
      if ((r = t.byteLength) === e.byteLength)
        for (; r-- && t.getInt8(r) === e.getInt8(r); )
          ;
      return r === -1;
    }
    if (ArrayBuffer.isView(t)) {
      if ((r = t.byteLength) === e.byteLength)
        for (; r-- && t[r] === e[r]; )
          ;
      return r === -1;
    }
    if (!n || typeof t == "object") {
      r = 0;
      for (n in t)
        if (Ei.call(t, n) && ++r && !Ei.call(e, n) || !(n in e) || !hn(t[n], e[n]))
          return !1;
      return Object.keys(e).length === r;
    }
  }
  return t !== t && e !== e;
}
function Hl(t, e, n, r = !0) {
  const i = e - n;
  return i <= 0 ? r ? t[t.length - 1] : t[0] : t[i];
}
function Kl(t, e, n, r = !0) {
  const i = e + n;
  return i > t.length - 1 ? r ? t[0] : t[t.length - 1] : t[i];
}
function Yl(t, e, n = !0) {
  return e === t.length - 1 ? n ? t[0] : t[e] : t[e + 1];
}
function Xl(t, e, n = !0) {
  return e <= 0 ? n ? t[t.length - 1] : t[0] : t[e - 1];
}
function Jl(t) {
  return t[t.length - 1];
}
function Ql(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
function $l(t, e) {
  const n = e.findIndex((r) => hn(r, t));
  return n !== -1 ? e.splice(n, 1) : e.push(t), e;
}
const Ut = [];
function $r(t, e) {
  return {
    subscribe: $e(t, e).subscribe
  };
}
function $e(t, e = ne) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (re(t, a) && (t = a, n)) {
      const c = !Ut.length;
      for (const l of r)
        l[1](), Ut.push(l, t);
      if (c) {
        for (let l = 0; l < Ut.length; l += 2)
          Ut[l][0](Ut[l + 1]);
        Ut.length = 0;
      }
    }
  }
  function s(a) {
    i(a(t));
  }
  function o(a, c = ne) {
    const l = [a, c];
    return r.add(l), r.size === 1 && (n = e(i, s) || ne), a(t), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function An(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return $r(n, (o, a) => {
    let c = !1;
    const l = [];
    let u = 0, f = ne;
    const d = () => {
      if (u)
        return;
      f();
      const m = e(r ? l[0] : l, o, a);
      s ? o(m) : f = Ft(m) ? m : ne;
    }, h = i.map(
      (m, v) => Gr(
        m,
        (p) => {
          l[v] = p, u &= ~(1 << v), c && d();
        },
        () => {
          u |= 1 << v;
        }
      )
    );
    return c = !0, d(), function() {
      Ne(h), f(), c = !1;
    };
  });
}
function Ai(t) {
  return {
    subscribe: t.subscribe.bind(t)
  };
}
function Ni(t) {
  function e(n) {
    return n(t), () => {
    };
  }
  return { subscribe: e };
}
const Fn = (t) => new Proxy(t, {
  get(e, n, r) {
    return Reflect.get(e, n, r);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((n) => n !== "action");
  }
}), Ri = (t) => typeof t == "function";
function Ye(t, e) {
  const { stores: n, action: r, returned: i } = e ?? {}, s = (() => {
    if (n && i)
      return An(n, (a) => {
        const c = i(a);
        if (Ri(c)) {
          const l = (...u) => Fn({
            ...c(...u),
            [`data-melt-${t}`]: "",
            action: r ?? Ue
          });
          return l.action = r ?? Ue, l;
        }
        return Fn({
          ...c,
          [`data-melt-${t}`]: "",
          action: r ?? Ue
        });
      });
    {
      const a = i, c = a == null ? void 0 : a();
      if (Ri(c)) {
        const l = (...u) => Fn({
          ...c(...u),
          [`data-melt-${t}`]: "",
          action: r ?? Ue
        });
        return l.action = r ?? Ue, Ni(l);
      }
      return Ni(Fn({
        ...c,
        [`data-melt-${t}`]: "",
        action: r ?? Ue
      }));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = s.subscribe, o;
}
function io(t) {
  const e = (s) => s ? `${t}-${s}` : t, n = (s) => `data-melt-${t}${s ? `-${s}` : ""}`, r = (s) => `[data-melt-${t}${s ? `-${s}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (s) => document.querySelector(r(s))
  };
}
const Fr = typeof document < "u", so = (t) => typeof t == "function";
function he(t) {
  return t instanceof HTMLElement;
}
function ec(t) {
  const e = t.getAttribute("aria-disabled"), n = t.getAttribute("disabled"), r = t.hasAttribute("data-disabled");
  return !!(e === "true" || n !== null || r);
}
function At(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function Ue() {
}
function mn(t, e, n, r) {
  const i = Array.isArray(e) ? e : [e];
  return i.forEach((s) => t.addEventListener(s, n, r)), () => {
    i.forEach((s) => t.removeEventListener(s, n, r));
  };
}
function We(t, e, n, r) {
  const i = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const s = nc((o) => n(o));
    return i.forEach((o) => t.addEventListener(o, s, r)), () => {
      i.forEach((o) => t.removeEventListener(o, s, r));
    };
  }
  return () => void 0;
}
function tc(t) {
  const e = t.currentTarget;
  if (!he(e))
    return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: {
      originalEvent: t
    },
    cancelable: !0
  });
  return e.dispatchEvent(n), n;
}
function nc(t) {
  return (e) => {
    const n = tc(e);
    if (!(n != null && n.defaultPrevented))
      return t(e);
  };
}
function rc(t) {
  t.setAttribute("data-highlighted", "");
}
function ic(t) {
  t.removeAttribute("data-highlighted");
}
function xr(t) {
  return Array.from(t.querySelectorAll('[role="option"]:not([data-disabled])')).filter((e) => he(e));
}
function sc(t) {
  const e = t.querySelector('[role="option"]:not([data-disabled])');
  return he(e) ? e : null;
}
function oo(t, ...e) {
  const n = {};
  for (const r of Object.keys(t))
    e.includes(r) || (n[r] = t[r]);
  return n;
}
const zr = (t, e) => {
  const n = (i, s) => {
    t.update((o) => {
      const a = i(o);
      let c = a;
      return e && (c = e({ curr: o, next: a })), s == null || s(c), c;
    });
  };
  return {
    ...t,
    update: n,
    set: (i) => {
      n(() => i);
    }
  };
};
function ao(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Hn(t) {
  return Object.keys(t).reduce((e, n) => t[n] === void 0 ? e : e + `${n}:${t[n]};`, "");
}
let oc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", lo = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += oc[Math.random() * 64 | 0];
  return e;
};
function Er() {
  return lo(10);
}
const be = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control"
}, ac = [be.ARROW_DOWN, be.PAGE_UP, be.HOME], lc = [be.ARROW_UP, be.PAGE_DOWN, be.END], cc = [...ac, ...lc], uc = [be.ENTER, be.SPACE];
function fc(t, e = 500) {
  let n = null;
  return function(...r) {
    const i = () => {
      n = null, t(...r);
    };
    n && clearTimeout(n), n = setTimeout(i, e);
  };
}
const co = () => typeof window < "u";
function dc() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const uo = (t) => co() && t.test(dc()), hc = () => co() && !!navigator.maxTouchPoints, mc = () => uo(/^Mac/) && !hc(), pc = () => uo(/mac|iphone|ipad|ipod/i), gc = () => pc() && !mc(), Or = "data-melt-scroll-lock";
function Pi(t, e) {
  if (!t)
    return;
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function bc(t, e, n) {
  if (!t)
    return;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
  };
}
function vc(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Ii(t) {
  const e = t ?? document, n = e.defaultView ?? window, { documentElement: r, body: i } = e;
  if (i.hasAttribute(Or))
    return Ue;
  i.setAttribute(Or, "");
  const o = n.innerWidth - r.clientWidth, a = () => bc(r, "--scrollbar-width", `${o}px`), c = vc(r), l = n.getComputedStyle(i)[c], u = () => Pi(i, {
    overflow: "hidden",
    [c]: `calc(${l} + ${o}px)`
  }), f = () => {
    const { scrollX: h, scrollY: m, visualViewport: v } = n, p = (v == null ? void 0 : v.offsetLeft) ?? 0, g = (v == null ? void 0 : v.offsetTop) ?? 0, b = Pi(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(m - Math.floor(g))}px`,
      left: `${-(h - Math.floor(p))}px`,
      right: "0",
      [c]: `calc(${l} + ${o}px)`
    });
    return () => {
      b == null || b(), n.scrollTo(h, m);
    };
  }, d = [a(), gc() ? f() : u()];
  return () => {
    d.forEach((h) => h == null ? void 0 : h()), i.removeAttribute(Or);
  };
}
function _c(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return An([e, n, r], ([i, s, o]) => (i || s) && o !== null);
}
function yc(t, e) {
  let n = [];
  const r = (a) => {
    n.push(a);
  }, i = () => {
    n.forEach((a) => a()), n = [];
  }, s = An(t, (a) => (i(), e(a, r)));
  return Us(i), {
    ...s,
    subscribe: (...a) => {
      const c = s.subscribe(...a);
      return () => {
        c(), i();
      };
    }
  };
}
function zn(t, e) {
  const n = yc(t, (r, i) => ({
    stores: r,
    onUnsubscribe: i
  })).subscribe(({ stores: r, onUnsubscribe: i }) => {
    const s = e(r);
    s && i(s);
  });
  return Us(n), n;
}
function ei(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const r = n, i = t[r];
    e[r] = $e(i);
  }), e;
}
function Fe(t) {
  if (!Fr)
    return;
  const e = document.activeElement;
  he(e) && e !== t && (e.tabIndex = -1, t.tabIndex = 0, ao(1).then(() => t.focus()));
}
function fo() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function Mi(t) {
  const e = fo(), r = e.indexOf(t) + 1, i = e[r];
  return r < e.length && he(i) ? i : null;
}
function Li(t) {
  const e = fo(), r = e.indexOf(t) - 1, i = e[r];
  return r >= 0 && he(i) ? i : null;
}
const wc = {
  onMatch: Fe
};
function kc(t = {}) {
  const e = { ...wc, ...t }, n = $e([]), r = fc(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (s, o) => {
      const a = document.activeElement;
      if (!he(a))
        return;
      const c = Pe(n);
      if (!Array.isArray(c))
        return;
      c.push(s.toLowerCase()), n.update(() => c);
      const l = o.filter((p) => !(p.getAttribute("disabled") === "true" || p.getAttribute("aria-disabled") === "true" || p.hasAttribute("data-disabled"))), f = c.length > 1 && c.every((p) => p === c[0]) ? c[0] : c.join(""), d = a ? l.indexOf(a) : -1;
      let h = Ql(l, Math.max(d, 0));
      f.length === 1 && (h = h.filter((p) => p !== a));
      const v = h.find((p) => p.innerText.toLowerCase().startsWith(f.toLowerCase()));
      he(v) && v !== a && e.onMatch(v), r();
    }
  };
}
function Tc(t) {
  let e = t.parentElement;
  for (; he(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function Cc(t, e) {
  const n = Tc(t);
  return e !== void 0 ? e : n === "body" ? document.body : null;
}
const Sc = $r(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return mn(document, "pointerdown", e, {
    passive: !1,
    capture: !0
  });
}), xc = (t, e = {}) => {
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : Pe(n.enabled);
  }
  const i = Sc.subscribe((s) => {
    var a;
    if (!r() || !s || s.target === t)
      return;
    const o = s.composedPath();
    if (!o.includes(t)) {
      if (n.ignore) {
        if (so(n.ignore)) {
          if (n.ignore(s))
            return;
        } else if (Array.isArray(n.ignore) && n.ignore.length > 0 && n.ignore.some((c) => c && (s.target === c || o.includes(c))))
          return;
      }
      (a = n.handler) == null || a.call(n, s);
    }
  });
  return {
    update(s) {
      n = { ...n, ...s };
    },
    destroy() {
      i();
    }
  };
}, Ec = $r(void 0, (t) => {
  function e(r) {
    r && r.key === be.ESCAPE && t(r), t(void 0);
  }
  return mn(document, "keydown", e, {
    passive: !1,
    capture: !0
  });
}), Oc = (t, e = {}) => {
  t.dataset.escapee = "";
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : Pe(n.enabled);
  }
  const i = Ec.subscribe((s) => {
    var a;
    if (!s || !r())
      return;
    const o = s.target;
    if (!(!he(o) || o.closest("[data-escapee]") !== t)) {
      if (n.ignore) {
        if (so(n.ignore)) {
          if (n.ignore(s))
            return;
        } else if (Array.isArray(n.ignore) && n.ignore.length > 0 && n.ignore.some((c) => c && o === c))
          return;
      }
      (a = n.handler) == null || a.call(n, s);
    }
  });
  return {
    update(s) {
      n = { ...n, ...s };
    },
    destroy() {
      t.removeAttribute("data-escapee"), i();
    }
  };
}, St = Math.min, Ge = Math.max, ur = Math.round, Bn = Math.floor, xt = (t) => ({
  x: t,
  y: t
}), Ac = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Nc = {
  start: "end",
  end: "start"
};
function Br(t, e, n) {
  return Ge(t, St(e, n));
}
function nn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Et(t) {
  return t.split("-")[0];
}
function rn(t) {
  return t.split("-")[1];
}
function ho(t) {
  return t === "x" ? "y" : "x";
}
function ti(t) {
  return t === "y" ? "height" : "width";
}
function In(t) {
  return ["top", "bottom"].includes(Et(t)) ? "y" : "x";
}
function ni(t) {
  return ho(In(t));
}
function Rc(t, e, n) {
  n === void 0 && (n = !1);
  const r = rn(t), i = ni(t), s = ti(i);
  let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (o = fr(o)), [o, fr(o)];
}
function Pc(t) {
  const e = fr(t);
  return [Vr(t), e, Vr(e)];
}
function Vr(t) {
  return t.replace(/start|end/g, (e) => Nc[e]);
}
function Ic(t, e, n) {
  const r = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : r : e ? r : i;
    case "left":
    case "right":
      return e ? s : o;
    default:
      return [];
  }
}
function Mc(t, e, n, r) {
  const i = rn(t);
  let s = Ic(Et(t), n === "start", r);
  return i && (s = s.map((o) => o + "-" + i), e && (s = s.concat(s.map(Vr)))), s;
}
function fr(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ac[e]);
}
function Lc(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function mo(t) {
  return typeof t != "number" ? Lc(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function dr(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Di(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const s = In(e), o = ni(e), a = ti(o), c = Et(e), l = s === "y", u = r.x + r.width / 2 - i.width / 2, f = r.y + r.height / 2 - i.height / 2, d = r[a] / 2 - i[a] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - i.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (rn(e)) {
    case "start":
      h[o] -= d * (n && l ? -1 : 1);
      break;
    case "end":
      h[o] += d * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const Dc = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: o
  } = n, a = s.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let l = await o.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = Di(l, r, c), d = r, h = {}, m = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: p,
      fn: g
    } = a[v], {
      x: b,
      y: w,
      data: T,
      reset: j
    } = await g({
      x: u,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: i,
      middlewareData: h,
      rects: l,
      platform: o,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = b ?? u, f = w ?? f, h = {
      ...h,
      [p]: {
        ...h[p],
        ...T
      }
    }, j && m <= 50) {
      m++, typeof j == "object" && (j.placement && (d = j.placement), j.rects && (l = j.rects === !0 ? await o.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : j.rects), {
        x: u,
        y: f
      } = Di(l, d, c)), v = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: i,
    middlewareData: h
  };
};
async function ri(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: s,
    rects: o,
    elements: a,
    strategy: c
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = nn(e, t), m = mo(h), p = a[d ? f === "floating" ? "reference" : "floating" : f], g = dr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(p))) == null || n ? p : p.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = f === "floating" ? {
    ...o.floating,
    x: r,
    y: i
  } : o.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), T = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = dr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: w,
    strategy: c
  }) : b);
  return {
    top: (g.top - j.top + m.top) / T.y,
    bottom: (j.bottom - g.bottom + m.bottom) / T.y,
    left: (g.left - j.left + m.left) / T.x,
    right: (j.right - g.right + m.right) / T.x
  };
}
const jc = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: s,
      platform: o,
      elements: a,
      middlewareData: c
    } = e, {
      element: l,
      padding: u = 0
    } = nn(t, e) || {};
    if (l == null)
      return {};
    const f = mo(u), d = {
      x: n,
      y: r
    }, h = ni(i), m = ti(h), v = await o.getDimensions(l), p = h === "y", g = p ? "top" : "left", b = p ? "bottom" : "right", w = p ? "clientHeight" : "clientWidth", T = s.reference[m] + s.reference[h] - d[h] - s.floating[m], j = d[h] - s.reference[h], U = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let V = U ? U[w] : 0;
    (!V || !await (o.isElement == null ? void 0 : o.isElement(U))) && (V = a.floating[w] || s.floating[m]);
    const P = T / 2 - j / 2, Ae = V / 2 - v[m] / 2 - 1, $ = St(f[g], Ae), y = St(f[b], Ae), _ = $, A = V - v[m] - y, z = V / 2 - v[m] / 2 + P, q = Br(_, z, A), X = !c.arrow && rn(i) != null && z != q && s.reference[m] / 2 - (z < _ ? $ : y) - v[m] / 2 < 0, de = X ? z < _ ? _ - z : A - z : 0;
    return {
      [h]: d[h] - de,
      data: {
        [h]: q,
        centerOffset: z - q + de
      },
      reset: X
    };
  }
}), Zc = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: o,
        platform: a,
        elements: c
      } = e, {
        mainAxis: l = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...v
      } = nn(t, e), p = Et(r), g = Et(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), w = f || (g || !m ? [fr(o)] : Pc(o));
      !f && h !== "none" && w.push(...Mc(o, m, h, b));
      const T = [o, ...w], j = await ri(e, v), U = [];
      let V = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (l && U.push(j[p]), u) {
        const y = Rc(r, s, b);
        U.push(j[y[0]], j[y[1]]);
      }
      if (V = [...V, {
        placement: r,
        overflows: U
      }], !U.every((y) => y <= 0)) {
        var P, Ae;
        const y = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, _ = T[y];
        if (_)
          return {
            data: {
              index: y,
              overflows: V
            },
            reset: {
              placement: _
            }
          };
        let A = (Ae = V.filter((z) => z.overflows[0] <= 0).sort((z, q) => z.overflows[1] - q.overflows[1])[0]) == null ? void 0 : Ae.placement;
        if (!A)
          switch (d) {
            case "bestFit": {
              var $;
              const z = ($ = V.map((q) => [q.placement, q.overflows.filter((X) => X > 0).reduce((X, de) => X + de, 0)]).sort((q, X) => q[1] - X[1])[0]) == null ? void 0 : $[0];
              z && (A = z);
              break;
            }
            case "initialPlacement":
              A = o;
              break;
          }
        if (r !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function Fc(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Et(n), a = rn(n), c = In(n) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = s && c ? -1 : 1, f = nn(e, t);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: d * l
  } : {
    x: d * l,
    y: h * u
  };
}
const zc = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, i = await Fc(e, t);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
}, Bc = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (p) => {
            let {
              x: g,
              y: b
            } = p;
            return {
              x: g,
              y: b
            };
          }
        },
        ...c
      } = nn(t, e), l = {
        x: n,
        y: r
      }, u = await ri(e, c), f = In(Et(i)), d = ho(f);
      let h = l[d], m = l[f];
      if (s) {
        const p = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", b = h + u[p], w = h - u[g];
        h = Br(b, h, w);
      }
      if (o) {
        const p = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", b = m + u[p], w = m - u[g];
        m = Br(b, m, w);
      }
      const v = a.fn({
        ...e,
        [d]: h,
        [f]: m
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, Vc = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: r,
        platform: i,
        elements: s
      } = e, {
        apply: o = () => {
        },
        ...a
      } = nn(t, e), c = await ri(e, a), l = Et(n), u = rn(n), f = In(n) === "y", {
        width: d,
        height: h
      } = r.floating;
      let m, v;
      l === "top" || l === "bottom" ? (m = l, v = u === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = l, m = u === "end" ? "top" : "bottom");
      const p = h - c[m], g = d - c[v], b = !e.middlewareData.shift;
      let w = p, T = g;
      if (f) {
        const U = d - c.left - c.right;
        T = u || b ? St(g, U) : U;
      } else {
        const U = h - c.top - c.bottom;
        w = u || b ? St(p, U) : U;
      }
      if (b && !u) {
        const U = Ge(c.left, 0), V = Ge(c.right, 0), P = Ge(c.top, 0), Ae = Ge(c.bottom, 0);
        f ? T = d - 2 * (U !== 0 || V !== 0 ? U + V : Ge(c.left, c.right)) : w = h - 2 * (P !== 0 || Ae !== 0 ? P + Ae : Ge(c.top, c.bottom));
      }
      await o({
        ...e,
        availableWidth: T,
        availableHeight: w
      });
      const j = await i.getDimensions(s.floating);
      return d !== j.width || h !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ot(t) {
  return po(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function qe(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function gt(t) {
  var e;
  return (e = (po(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function po(t) {
  return t instanceof Node || t instanceof qe(t).Node;
}
function mt(t) {
  return t instanceof Element || t instanceof qe(t).Element;
}
function ct(t) {
  return t instanceof HTMLElement || t instanceof qe(t).HTMLElement;
}
function ji(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof qe(t).ShadowRoot;
}
function Mn(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = Xe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function Wc(t) {
  return ["table", "td", "th"].includes(Ot(t));
}
function ii(t) {
  const e = si(), n = Xe(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Uc(t) {
  let e = en(t);
  for (; ct(e) && !yr(e); ) {
    if (ii(e))
      return e;
    e = en(e);
  }
  return null;
}
function si() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yr(t) {
  return ["html", "body", "#document"].includes(Ot(t));
}
function Xe(t) {
  return qe(t).getComputedStyle(t);
}
function wr(t) {
  return mt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function en(t) {
  if (Ot(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ji(t) && t.host || // Fallback.
    gt(t)
  );
  return ji(e) ? e.host : e;
}
function go(t) {
  const e = en(t);
  return yr(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ct(e) && Mn(e) ? e : go(e);
}
function Nn(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = go(t), s = i === ((r = t.ownerDocument) == null ? void 0 : r.body), o = qe(i);
  return s ? e.concat(o, o.visualViewport || [], Mn(i) ? i : [], o.frameElement && n ? Nn(o.frameElement) : []) : e.concat(i, Nn(i));
}
function bo(t) {
  const e = Xe(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const i = ct(t), s = i ? t.offsetWidth : n, o = i ? t.offsetHeight : r, a = ur(n) !== s || ur(r) !== o;
  return a && (n = s, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function oi(t) {
  return mt(t) ? t : t.contextElement;
}
function Jt(t) {
  const e = oi(t);
  if (!ct(e))
    return xt(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    $: s
  } = bo(e);
  let o = (s ? ur(n.width) : n.width) / r, a = (s ? ur(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Gc = /* @__PURE__ */ xt(0);
function vo(t) {
  const e = qe(t);
  return !si() || !e.visualViewport ? Gc : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function qc(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== qe(t) ? !1 : e;
}
function jt(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = oi(t);
  let o = xt(1);
  e && (r ? mt(r) && (o = Jt(r)) : o = Jt(t));
  const a = qc(s, n, r) ? vo(s) : xt(0);
  let c = (i.left + a.x) / o.x, l = (i.top + a.y) / o.y, u = i.width / o.x, f = i.height / o.y;
  if (s) {
    const d = qe(s), h = r && mt(r) ? qe(r) : r;
    let m = d.frameElement;
    for (; m && r && h !== d; ) {
      const v = Jt(m), p = m.getBoundingClientRect(), g = Xe(m), b = p.left + (m.clientLeft + parseFloat(g.paddingLeft)) * v.x, w = p.top + (m.clientTop + parseFloat(g.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, f *= v.y, c += b, l += w, m = qe(m).frameElement;
    }
  }
  return dr({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Hc(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const i = ct(n), s = gt(n);
  if (n === s)
    return e;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = xt(1);
  const c = xt(0);
  if ((i || !i && r !== "fixed") && ((Ot(n) !== "body" || Mn(s)) && (o = wr(n)), ct(n))) {
    const l = jt(n);
    a = Jt(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: e.width * a.x,
    height: e.height * a.y,
    x: e.x * a.x - o.scrollLeft * a.x + c.x,
    y: e.y * a.y - o.scrollTop * a.y + c.y
  };
}
function Kc(t) {
  return Array.from(t.getClientRects());
}
function _o(t) {
  return jt(gt(t)).left + wr(t).scrollLeft;
}
function Yc(t) {
  const e = gt(t), n = wr(t), r = t.ownerDocument.body, i = Ge(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), s = Ge(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + _o(t);
  const a = -n.scrollTop;
  return Xe(r).direction === "rtl" && (o += Ge(e.clientWidth, r.clientWidth) - i), {
    width: i,
    height: s,
    x: o,
    y: a
  };
}
function Xc(t, e) {
  const n = qe(t), r = gt(t), i = n.visualViewport;
  let s = r.clientWidth, o = r.clientHeight, a = 0, c = 0;
  if (i) {
    s = i.width, o = i.height;
    const l = si();
    (!l || l && e === "fixed") && (a = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: a,
    y: c
  };
}
function Jc(t, e) {
  const n = jt(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, s = ct(t) ? Jt(t) : xt(1), o = t.clientWidth * s.x, a = t.clientHeight * s.y, c = i * s.x, l = r * s.y;
  return {
    width: o,
    height: a,
    x: c,
    y: l
  };
}
function Zi(t, e, n) {
  let r;
  if (e === "viewport")
    r = Xc(t, n);
  else if (e === "document")
    r = Yc(gt(t));
  else if (mt(e))
    r = Jc(e, n);
  else {
    const i = vo(t);
    r = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return dr(r);
}
function yo(t, e) {
  const n = en(t);
  return n === e || !mt(n) || yr(n) ? !1 : Xe(n).position === "fixed" || yo(n, e);
}
function Qc(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Nn(t, [], !1).filter((a) => mt(a) && Ot(a) !== "body"), i = null;
  const s = Xe(t).position === "fixed";
  let o = s ? en(t) : t;
  for (; mt(o) && !yr(o); ) {
    const a = Xe(o), c = ii(o);
    !c && a.position === "fixed" && (i = null), (s ? !c && !i : !c && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Mn(o) && !c && yo(t, o)) ? r = r.filter((u) => u !== o) : i = a, o = en(o);
  }
  return e.set(t, r), r;
}
function $c(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const o = [...n === "clippingAncestors" ? Qc(e, this._c) : [].concat(n), r], a = o[0], c = o.reduce((l, u) => {
    const f = Zi(e, u, i);
    return l.top = Ge(f.top, l.top), l.right = St(f.right, l.right), l.bottom = St(f.bottom, l.bottom), l.left = Ge(f.left, l.left), l;
  }, Zi(e, a, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function eu(t) {
  return bo(t);
}
function tu(t, e, n) {
  const r = ct(e), i = gt(e), s = n === "fixed", o = jt(t, !0, s, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = xt(0);
  if (r || !r && !s)
    if ((Ot(e) !== "body" || Mn(i)) && (a = wr(e)), r) {
      const l = jt(e, !0, s, e);
      c.x = l.x + e.clientLeft, c.y = l.y + e.clientTop;
    } else
      i && (c.x = _o(i));
  return {
    x: o.left + a.scrollLeft - c.x,
    y: o.top + a.scrollTop - c.y,
    width: o.width,
    height: o.height
  };
}
function Fi(t, e) {
  return !ct(t) || Xe(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function wo(t, e) {
  const n = qe(t);
  if (!ct(t))
    return n;
  let r = Fi(t, e);
  for (; r && Wc(r) && Xe(r).position === "static"; )
    r = Fi(r, e);
  return r && (Ot(r) === "html" || Ot(r) === "body" && Xe(r).position === "static" && !ii(r)) ? n : r || Uc(t) || n;
}
const nu = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: r
  } = t;
  const i = this.getOffsetParent || wo, s = this.getDimensions;
  return {
    reference: tu(e, await i(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function ru(t) {
  return Xe(t).direction === "rtl";
}
const iu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hc,
  getDocumentElement: gt,
  getClippingRect: $c,
  getOffsetParent: wo,
  getElementRects: nu,
  getClientRects: Kc,
  getDimensions: eu,
  getScale: Jt,
  isElement: mt,
  isRTL: ru
};
function su(t, e) {
  let n = null, r;
  const i = gt(t);
  function s() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const {
      left: l,
      top: u,
      width: f,
      height: d
    } = t.getBoundingClientRect();
    if (a || e(), !f || !d)
      return;
    const h = Bn(u), m = Bn(i.clientWidth - (l + f)), v = Bn(i.clientHeight - (u + d)), p = Bn(l), b = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -p + "px",
      threshold: Ge(0, St(1, c)) || 1
    };
    let w = !0;
    function T(j) {
      const U = j[0].intersectionRatio;
      if (U !== c) {
        if (!w)
          return o();
        U ? o(!1, U) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, b);
    }
    n.observe(t);
  }
  return o(!0), s;
}
function ou(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = oi(t), u = i || s ? [...l ? Nn(l) : [], ...Nn(e)] : [];
  u.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const f = l && a ? su(l, n) : null;
  let d = -1, h = null;
  o && (h = new ResizeObserver((g) => {
    let [b] = g;
    b && b.target === l && h && (h.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      h && h.observe(e);
    })), n();
  }), l && !c && h.observe(l), h.observe(e));
  let m, v = c ? jt(t) : null;
  c && p();
  function p() {
    const g = jt(t);
    v && (g.x !== v.x || g.y !== v.y || g.width !== v.width || g.height !== v.height) && n(), v = g, m = requestAnimationFrame(p);
  }
  return n(), () => {
    u.forEach((g) => {
      i && g.removeEventListener("scroll", n), s && g.removeEventListener("resize", n);
    }), f && f(), h && h.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const au = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: iu,
    ...n
  }, s = {
    ...i.platform,
    _c: r
  };
  return Dc(t, e, {
    ...i,
    platform: s
  });
}, lu = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, cu = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function uu(t, e, n = {}) {
  if (!e || !t)
    return {
      destroy: Ue
    };
  const r = { ...lu, ...n }, i = e.querySelector("[data-arrow=true]"), s = [];
  r.flip && s.push(Zc({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const o = he(i) ? i.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const c = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (c == null ? void 0 : c.mainAxis) != null && (c.mainAxis += o), s.push(zc(c));
  }
  s.push(Bc({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), i && s.push(jc({ element: i, padding: 8 })), s.push(Vc({
    padding: r.overflowPadding,
    apply({ rects: c, availableHeight: l, availableWidth: u }) {
      r.sameWidth && Object.assign(e.style, {
        width: `${Math.round(c.reference.width)}px`,
        minWidth: "unset"
      }), r.fitViewport && Object.assign(e.style, {
        maxWidth: `${u}px`,
        maxHeight: `${l}px`
      });
    }
  }));
  function a() {
    if (!t || !e)
      return;
    const { placement: c, strategy: l } = r;
    au(t, e, {
      placement: c,
      middleware: s,
      strategy: l
    }).then((u) => {
      const f = Math.round(u.x), d = Math.round(u.y);
      if (Object.assign(e.style, {
        top: `${d}px`,
        left: `${f}px`
      }), he(i) && u.middlewareData.arrow) {
        const { x: h, y: m } = u.middlewareData.arrow, v = u.placement.split("-")[0];
        Object.assign(i.style, {
          position: "absolute",
          left: h != null ? `${h}px` : "",
          top: m != null ? `${m}px` : "",
          [v]: `calc(100% - ${o}px)`,
          transform: cu[v],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return u;
    });
  }
  return Object.assign(e.style, {
    position: r.strategy
  }), {
    destroy: ou(t, e, a)
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var ko = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], hr = /* @__PURE__ */ ko.join(","), To = typeof Element > "u", Zt = To ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, mr = !To && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t == null ? void 0 : t.ownerDocument;
}, pr = function t(e, n) {
  var r;
  n === void 0 && (n = !0);
  var i = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), s = i === "" || i === "true", o = s || n && e && t(e.parentNode);
  return o;
}, fu = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, Co = function(e, n, r) {
  if (pr(e))
    return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(hr));
  return n && Zt.call(e, hr) && i.unshift(e), i = i.filter(r), i;
}, So = function t(e, n, r) {
  for (var i = [], s = Array.from(e); s.length; ) {
    var o = s.shift();
    if (!pr(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), c = a.length ? a : o.children, l = t(c, !0, r);
        r.flatten ? i.push.apply(i, l) : i.push({
          scopeParent: o,
          candidates: l
        });
      } else {
        var u = Zt.call(o, hr);
        u && r.filter(o) && (n || !e.includes(o)) && i.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), d = !pr(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && d) {
          var h = t(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? i.push.apply(i, h) : i.push({
            scopeParent: o,
            candidates: h
          });
        } else
          s.unshift.apply(s, o.children);
      }
  }
  return i;
}, xo = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Nt = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || fu(e)) && !xo(e) ? 0 : e.tabIndex;
}, du = function(e, n) {
  var r = Nt(e);
  return r < 0 && n && !xo(e) ? 0 : r;
}, hu = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, Eo = function(e) {
  return e.tagName === "INPUT";
}, mu = function(e) {
  return Eo(e) && e.type === "hidden";
}, pu = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, gu = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, bu = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || mr(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(e.name));
  else
    try {
      i = r(e.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var s = gu(i, e.form);
  return !s || s === e;
}, vu = function(e) {
  return Eo(e) && e.type === "radio";
}, _u = function(e) {
  return vu(e) && !bu(e);
}, yu = function(e) {
  var n, r = e && mr(e), i = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== e) {
    var o, a, c;
    for (s = !!((o = i) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(i) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !s && i; ) {
      var l, u, f;
      r = mr(i), i = (l = r) === null || l === void 0 ? void 0 : l.host, s = !!((u = i) !== null && u !== void 0 && (f = u.ownerDocument) !== null && f !== void 0 && f.contains(i));
    }
  }
  return s;
}, zi = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, wu = function(e, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = Zt.call(e, "details>summary:first-of-type"), o = s ? e.parentElement : e;
  if (Zt.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var a = e; e; ) {
        var c = e.parentElement, l = mr(e);
        if (c && !c.shadowRoot && i(c) === !0)
          return zi(e);
        e.assignedSlot ? e = e.assignedSlot : !c && l !== e.ownerDocument ? e = l.host : e = c;
      }
      e = a;
    }
    if (yu(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return zi(e);
  return !1;
}, ku = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return Zt.call(n, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, gr = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  pr(n) || mu(n) || wu(n, e) || // For a details element with a summary, the summary element gets the focus
  pu(n) || ku(n));
}, Wr = function(e, n) {
  return !(_u(n) || Nt(n) < 0 || !gr(e, n));
}, Tu = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Cu = function t(e) {
  var n = [], r = [];
  return e.forEach(function(i, s) {
    var o = !!i.scopeParent, a = o ? i.scopeParent : i, c = du(a, o), l = o ? t(i.candidates) : a;
    c === 0 ? o ? n.push.apply(n, l) : n.push(a) : r.push({
      documentOrder: s,
      tabIndex: c,
      item: i,
      isScope: o,
      content: l
    });
  }), r.sort(hu).reduce(function(i, s) {
    return s.isScope ? i.push.apply(i, s.content) : i.push(s.content), i;
  }, []).concat(n);
}, Su = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = So([e], n.includeContainer, {
    filter: Wr.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Tu
  }) : r = Co(e, n.includeContainer, Wr.bind(null, n)), Cu(r);
}, xu = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = So([e], n.includeContainer, {
    filter: gr.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Co(e, n.includeContainer, gr.bind(null, n)), r;
}, Gt = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return Zt.call(e, hr) === !1 ? !1 : Wr(n, e);
}, Eu = /* @__PURE__ */ ko.concat("iframe").join(","), Ar = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return Zt.call(e, Eu) === !1 ? !1 : gr(n, e);
};
/*!
* focus-trap 7.5.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Bi(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Vi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bi(Object(n), !0).forEach(function(r) {
      Ou(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bi(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ou(t, e, n) {
  return e = Nu(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Au(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Nu(t) {
  var e = Au(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Wi = {
  activateTrap: function(e, n) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== n && r.pause();
    }
    var i = e.indexOf(n);
    i === -1 || e.splice(i, 1), e.push(n);
  },
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, Ru = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Pu = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, pn = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, Iu = function(e) {
  return pn(e) && !e.shiftKey;
}, Mu = function(e) {
  return pn(e) && e.shiftKey;
}, Ui = function(e) {
  return setTimeout(e, 0);
}, Gi = function(e, n) {
  var r = -1;
  return e.every(function(i, s) {
    return n(i) ? (r = s, !1) : !0;
  }), r;
}, fn = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, Vn = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Lu = [], Du = function(e, n) {
  var r = (n == null ? void 0 : n.document) || document, i = (n == null ? void 0 : n.trapStack) || Lu, s = Vi({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Iu,
    isKeyBackward: Mu
  }, n), o = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, a, c = function(y, _, A) {
    return y && y[_] !== void 0 ? y[_] : s[A || _];
  }, l = function(y, _) {
    var A = typeof (_ == null ? void 0 : _.composedPath) == "function" ? _.composedPath() : void 0;
    return o.containerGroups.findIndex(function(z) {
      var q = z.container, X = z.tabbableNodes;
      return q.contains(y) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (A == null ? void 0 : A.includes(q)) || X.find(function(de) {
        return de === y;
      });
    });
  }, u = function(y) {
    var _ = s[y];
    if (typeof _ == "function") {
      for (var A = arguments.length, z = new Array(A > 1 ? A - 1 : 0), q = 1; q < A; q++)
        z[q - 1] = arguments[q];
      _ = _.apply(void 0, z);
    }
    if (_ === !0 && (_ = void 0), !_) {
      if (_ === void 0 || _ === !1)
        return _;
      throw new Error("`".concat(y, "` was specified but was not a node, or did not return a node"));
    }
    var X = _;
    if (typeof _ == "string" && (X = r.querySelector(_), !X))
      throw new Error("`".concat(y, "` as selector refers to no known node"));
    return X;
  }, f = function() {
    var y = u("initialFocus");
    if (y === !1)
      return !1;
    if (y === void 0 || !Ar(y, s.tabbableOptions))
      if (l(r.activeElement) >= 0)
        y = r.activeElement;
      else {
        var _ = o.tabbableGroups[0], A = _ && _.firstTabbableNode;
        y = A || u("fallbackFocus");
      }
    if (!y)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return y;
  }, d = function() {
    if (o.containerGroups = o.containers.map(function(y) {
      var _ = Su(y, s.tabbableOptions), A = xu(y, s.tabbableOptions), z = _.length > 0 ? _[0] : void 0, q = _.length > 0 ? _[_.length - 1] : void 0, X = A.find(function(ye) {
        return Gt(ye);
      }), de = A.slice().reverse().find(function(ye) {
        return Gt(ye);
      }), Se = !!_.find(function(ye) {
        return Nt(ye) > 0;
      });
      return {
        container: y,
        tabbableNodes: _,
        focusableNodes: A,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: z,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: q,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: X,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: de,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ke) {
          var Ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Me = _.indexOf(Ke);
          return Me < 0 ? Ve ? A.slice(A.indexOf(Ke) + 1).find(function(xe) {
            return Gt(xe);
          }) : A.slice(0, A.indexOf(Ke)).reverse().find(function(xe) {
            return Gt(xe);
          }) : _[Me + (Ve ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(y) {
      return y.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(y) {
      return y.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, h = function $(y) {
    if (y !== !1 && y !== r.activeElement) {
      if (!y || !y.focus) {
        $(f());
        return;
      }
      y.focus({
        preventScroll: !!s.preventScroll
      }), o.mostRecentlyFocusedNode = y, Ru(y) && y.select();
    }
  }, m = function(y) {
    var _ = u("setReturnFocus", y);
    return _ || (_ === !1 ? !1 : y);
  }, v = function(y) {
    var _ = y.target, A = y.event, z = y.isBackward, q = z === void 0 ? !1 : z;
    _ = _ || Vn(A), d();
    var X = null;
    if (o.tabbableGroups.length > 0) {
      var de = l(_, A), Se = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        q ? X = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : X = o.tabbableGroups[0].firstTabbableNode;
      else if (q) {
        var ye = Gi(o.tabbableGroups, function(on) {
          var an = on.firstTabbableNode;
          return _ === an;
        });
        if (ye < 0 && (Se.container === _ || Ar(_, s.tabbableOptions) && !Gt(_, s.tabbableOptions) && !Se.nextTabbableNode(_, !1)) && (ye = de), ye >= 0) {
          var Ke = ye === 0 ? o.tabbableGroups.length - 1 : ye - 1, Ve = o.tabbableGroups[Ke];
          X = Nt(_) >= 0 ? Ve.lastTabbableNode : Ve.lastDomTabbableNode;
        } else
          pn(A) || (X = Se.nextTabbableNode(_, !1));
      } else {
        var Me = Gi(o.tabbableGroups, function(on) {
          var an = on.lastTabbableNode;
          return _ === an;
        });
        if (Me < 0 && (Se.container === _ || Ar(_, s.tabbableOptions) && !Gt(_, s.tabbableOptions) && !Se.nextTabbableNode(_)) && (Me = de), Me >= 0) {
          var xe = Me === o.tabbableGroups.length - 1 ? 0 : Me + 1, Dn = o.tabbableGroups[xe];
          X = Nt(_) >= 0 ? Dn.firstTabbableNode : Dn.firstDomTabbableNode;
        } else
          pn(A) || (X = Se.nextTabbableNode(_));
      }
    } else
      X = u("fallbackFocus");
    return X;
  }, p = function(y) {
    var _ = Vn(y);
    if (!(l(_, y) >= 0)) {
      if (fn(s.clickOutsideDeactivates, y)) {
        a.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      fn(s.allowOutsideClick, y) || y.preventDefault();
    }
  }, g = function(y) {
    var _ = Vn(y), A = l(_, y) >= 0;
    if (A || _ instanceof Document)
      A && (o.mostRecentlyFocusedNode = _);
    else {
      y.stopImmediatePropagation();
      var z, q = !0;
      if (o.mostRecentlyFocusedNode)
        if (Nt(o.mostRecentlyFocusedNode) > 0) {
          var X = l(o.mostRecentlyFocusedNode), de = o.containerGroups[X].tabbableNodes;
          if (de.length > 0) {
            var Se = de.findIndex(function(ye) {
              return ye === o.mostRecentlyFocusedNode;
            });
            Se >= 0 && (s.isKeyForward(o.recentNavEvent) ? Se + 1 < de.length && (z = de[Se + 1], q = !1) : Se - 1 >= 0 && (z = de[Se - 1], q = !1));
          }
        } else
          o.containerGroups.some(function(ye) {
            return ye.tabbableNodes.some(function(Ke) {
              return Nt(Ke) > 0;
            });
          }) || (q = !1);
      else
        q = !1;
      q && (z = v({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(o.recentNavEvent)
      })), h(z || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, b = function(y) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = y;
    var A = v({
      event: y,
      isBackward: _
    });
    A && (pn(y) && y.preventDefault(), h(A));
  }, w = function(y) {
    if (Pu(y) && fn(s.escapeDeactivates, y) !== !1) {
      y.preventDefault(), a.deactivate();
      return;
    }
    (s.isKeyForward(y) || s.isKeyBackward(y)) && b(y, s.isKeyBackward(y));
  }, T = function(y) {
    var _ = Vn(y);
    l(_, y) >= 0 || fn(s.clickOutsideDeactivates, y) || fn(s.allowOutsideClick, y) || (y.preventDefault(), y.stopImmediatePropagation());
  }, j = function() {
    if (o.active)
      return Wi.activateTrap(i, a), o.delayInitialFocusTimer = s.delayInitialFocus ? Ui(function() {
        h(f());
      }) : h(f()), r.addEventListener("focusin", g, !0), r.addEventListener("mousedown", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", w, {
        capture: !0,
        passive: !1
      }), a;
  }, U = function() {
    if (o.active)
      return r.removeEventListener("focusin", g, !0), r.removeEventListener("mousedown", p, !0), r.removeEventListener("touchstart", p, !0), r.removeEventListener("click", T, !0), r.removeEventListener("keydown", w, !0), a;
  }, V = function(y) {
    var _ = y.some(function(A) {
      var z = Array.from(A.removedNodes);
      return z.some(function(q) {
        return q === o.mostRecentlyFocusedNode;
      });
    });
    _ && h(f());
  }, P = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(V) : void 0, Ae = function() {
    P && (P.disconnect(), o.active && !o.paused && o.containers.map(function(y) {
      P.observe(y, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return a = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(y) {
      if (o.active)
        return this;
      var _ = c(y, "onActivate"), A = c(y, "onPostActivate"), z = c(y, "checkCanFocusTrap");
      z || d(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = r.activeElement, _ == null || _();
      var q = function() {
        z && d(), j(), Ae(), A == null || A();
      };
      return z ? (z(o.containers.concat()).then(q, q), this) : (q(), this);
    },
    deactivate: function(y) {
      if (!o.active)
        return this;
      var _ = Vi({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, y);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, U(), o.active = !1, o.paused = !1, Ae(), Wi.deactivateTrap(i, a);
      var A = c(_, "onDeactivate"), z = c(_, "onPostDeactivate"), q = c(_, "checkCanReturnFocus"), X = c(_, "returnFocus", "returnFocusOnDeactivate");
      A == null || A();
      var de = function() {
        Ui(function() {
          X && h(m(o.nodeFocusedBeforeActivation)), z == null || z();
        });
      };
      return X && q ? (q(m(o.nodeFocusedBeforeActivation)).then(de, de), this) : (de(), this);
    },
    pause: function(y) {
      if (o.paused || !o.active)
        return this;
      var _ = c(y, "onPause"), A = c(y, "onPostPause");
      return o.paused = !0, _ == null || _(), U(), Ae(), A == null || A(), this;
    },
    unpause: function(y) {
      if (!o.paused || !o.active)
        return this;
      var _ = c(y, "onUnpause"), A = c(y, "onPostUnpause");
      return o.paused = !1, _ == null || _(), d(), j(), Ae(), A == null || A(), this;
    },
    updateContainerElements: function(y) {
      var _ = [].concat(y).filter(Boolean);
      return o.containers = _.map(function(A) {
        return typeof A == "string" ? r.querySelector(A) : A;
      }), o.active && d(), Ae(), this;
    }
  }, a.updateContainerElements(e), a;
};
function ju(t = {}) {
  let e;
  const { immediate: n, ...r } = t, i = $e(!1), s = $e(!1), o = (f) => e == null ? void 0 : e.activate(f), a = (f) => {
    e == null || e.deactivate(f);
  }, c = () => {
    e && (e.pause(), s.set(!0));
  }, l = () => {
    e && (e.unpause(), s.set(!1));
  };
  return {
    useFocusTrap: (f) => (e = Du(f, {
      ...r,
      onActivate() {
        var d;
        i.set(!0), (d = t.onActivate) == null || d.call(t);
      },
      onDeactivate() {
        var d;
        i.set(!1), (d = t.onDeactivate) == null || d.call(t);
      }
    }), n && o(), {
      destroy() {
        a(), e = void 0;
      }
    }),
    hasFocus: Ai(i),
    isPaused: Ai(s),
    activate: o,
    deactivate: a,
    pause: c,
    unpause: l
  };
}
const Zu = {
  floating: {},
  focusTrap: {},
  clickOutside: {},
  escapeKeydown: {},
  portal: "body"
}, Fu = (t, e) => {
  t.dataset.escapee = "";
  const { anchorElement: n, open: r, options: i } = e;
  if (!n || !r || !i)
    return { destroy: Ue };
  const s = { ...Zu, ...i }, o = [];
  if (s.portal !== null) {
    const c = zu(t, s.portal);
    c != null && c.destroy && o.push(c.destroy);
  }
  if (o.push(uu(n, t, s.floating).destroy), s.focusTrap !== null) {
    const { useFocusTrap: c } = ju({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: t,
      ...s.focusTrap
    }), l = c(t);
    l != null && l.destroy && o.push(l.destroy);
  }
  s.clickOutside !== null && o.push(xc(t, {
    enabled: r,
    handler: (c) => {
      c.defaultPrevented || he(n) && !n.contains(c.target) && (r.set(!1), n.focus());
    },
    ...s.clickOutside
  }).destroy), s.escapeKeydown !== null && o.push(Oc(t, {
    enabled: r,
    handler: (c) => {
      c.defaultPrevented || r.set(!1);
    },
    ...s.escapeKeydown
  }).destroy);
  const a = At(...o);
  return {
    destroy() {
      a();
    }
  };
}, zu = (t, e = "body") => {
  let n;
  if (!he(e) && typeof e != "string")
    return {
      destroy: Ue
    };
  async function r(s) {
    if (e = s, typeof e == "string") {
      if (n = document.querySelector(e), n === null && (await Hs(), n = document.querySelector(e)), n === null)
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement)
      n = e;
    else
      throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
    t.dataset.portal = "", n.appendChild(t), t.hidden = !1;
  }
  function i() {
    t.remove();
  }
  return r(e), {
    update: r,
    destroy: i
  };
};
function Oo() {
  return {
    elements: {
      root: Ye("label", {
        action: (e) => ({
          destroy: We(e, "mousedown", (r) => {
            !r.defaultPrevented && r.detail > 1 && r.preventDefault();
          })
        })
      })
    }
  };
}
const Bu = {
  arrowSize: 8,
  required: !1,
  disabled: !1,
  positioning: {
    placement: "bottom",
    sameWidth: !0
  },
  preventScroll: !0,
  loop: !1,
  name: void 0,
  defaultOpen: !1,
  forceVisible: !1,
  portal: void 0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0
}, { name: yt } = io("select");
function Vu(t) {
  const e = { ...Bu, ...t }, n = ei({
    ...oo(e, "selected", "defaultSelected", "onSelectedChange", "onOpenChange", "open", "defaultOpen"),
    multiple: e.multiple ?? !1
  }), { positioning: r, arrowSize: i, required: s, disabled: o, loop: a, preventScroll: c, name: l, portal: u, forceVisible: f, closeOnEscape: d, closeOnOutsideClick: h, multiple: m } = n, v = e.open ?? $e(!1), p = zr(v, e == null ? void 0 : e.onOpenChange), g = e.selected ?? $e(e.defaultSelected), b = zr(g, e == null ? void 0 : e.onSelectedChange), w = $e(null), T = $e(null), j = $e(null);
  let U = !1;
  const V = {
    menu: Er(),
    trigger: Er(),
    label: Er()
  }, { typed: P, handleTypeaheadSearch: Ae } = kc(), $ = An([b], ([C]) => (Z) => Array.isArray(C) ? C.map((L) => L.value).includes(Z) : (C == null ? void 0 : C.value) === Z);
  function y(C) {
    return C.pointerType === "mouse";
  }
  function _(C) {
    const Z = C.querySelector("[data-selected]");
    return he(Z) ? Z : null;
  }
  function A(C) {
    if (!y(C))
      return;
    const Z = C.currentTarget;
    he(Z) && Fe(Z);
  }
  function z() {
    const C = document.getElementById(V.menu);
    he(C) && Fe(C);
  }
  function q(C) {
    C.preventDefault();
    const Z = document.activeElement, L = C.currentTarget;
    if (!he(Z) || !he(L))
      return;
    const Y = xr(L);
    if (!Y.length)
      return;
    const ee = Y.filter((bt) => !ec(bt)), te = ee.indexOf(Z);
    let ke;
    const Je = Pe(a);
    switch (C.key) {
      case be.ARROW_DOWN:
        ke = Yl(ee, te, Je);
        break;
      case be.PAGE_DOWN:
        ke = Kl(ee, te, 10, Je);
        break;
      case be.ARROW_UP:
        ke = Xl(ee, te, Je);
        break;
      case be.PAGE_UP:
        ke = Hl(ee, te, 10, Je);
        break;
      case be.HOME:
        ke = ee[0];
        break;
      case be.END:
        ke = Jl(ee);
        break;
      default:
        return;
    }
    Fe(ke);
  }
  function X(C) {
    if (C.shiftKey) {
      const Z = Pe(j);
      Z && (C.preventDefault(), Z.focus(), j.set(null));
    } else {
      const Z = Pe(T);
      Z && (C.preventDefault(), Z.focus(), T.set(null));
    }
  }
  const de = _c({ open: p, forceVisible: f, activeTrigger: w }), Se = An(b, (C) => Array.isArray(C) ? C.map((Z) => Z.label).join(", ") : (C == null ? void 0 : C.label) ?? ""), ye = Ye(yt("menu"), {
    stores: [de, u],
    returned: ([C, Z]) => ({
      style: Hn({
        display: C ? void 0 : "none"
      }),
      id: V.menu,
      "aria-labelledby": V.trigger,
      role: "listbox",
      "data-portal": Z ? "" : void 0
    }),
    action: (C) => {
      let Z = Ue, L = Ue;
      const Y = zn([de, c, r, u, d, h], ([te, ke, Je, bt, Tr, jn]) => {
        Z(), L();
        const fi = Pe(w);
        te && fi && (ke && (L = Ii()), Hs().then(() => {
          const Cr = Fu(C, {
            anchorElement: fi,
            open: p,
            options: {
              floating: Je,
              clickOutside: jn ? void 0 : null,
              escapeKeydown: Tr ? {
                handler: () => {
                  p.set(!1);
                }
              } : null,
              portal: Cc(C, bt)
            }
          });
          Cr && Cr.destroy && (Z = Cr.destroy);
        }));
      }), ee = At(We(C, "keydown", (te) => {
        const ke = te.currentTarget, Je = te.target;
        if (!he(ke) || !he(Je))
          return;
        const bt = te.ctrlKey || te.altKey || te.metaKey, Tr = te.key.length === 1;
        if (te.key === be.TAB && (te.preventDefault(), p.set(!1), X(te)), cc.includes(te.key)) {
          if (te.preventDefault(), ke === Je) {
            const jn = _(ke);
            if (jn) {
              Fe(jn);
              return;
            }
          }
          q(te);
        }
        !bt && Tr && Ae(te.key, xr(C));
      }));
      return {
        destroy() {
          Y(), Z(), L(), ee();
        }
      };
    }
  }), Ke = Ye(yt("trigger"), {
    stores: [p, o, s],
    returned: ([C, Z, L]) => ({
      role: "combobox",
      type: "button",
      "aria-autocomplete": "none",
      "aria-haspopup": "listbox",
      "aria-controls": V.menu,
      "aria-expanded": C,
      "aria-required": L,
      "data-state": C ? "open" : "closed",
      "data-disabled": Z ? !0 : void 0,
      "aria-labelledby": V.label,
      disabled: Z,
      id: V.trigger,
      tabindex: 0
    }),
    action: (C) => ({
      destroy: At(We(C, "click", (L) => {
        if (Pe(o)) {
          L.preventDefault();
          return;
        }
        const Y = Pe(p), ee = L.currentTarget;
        he(ee) && (p.update((te) => {
          const ke = !te;
          return ke && (T.set(Mi(ee)), j.set(Li(ee)), w.set(ee)), ke;
        }), Y || L.preventDefault());
      }), We(C, "keydown", (L) => {
        const Y = L.currentTarget;
        if (he(Y) && (uc.includes(L.key) || L.key === be.ARROW_DOWN || L.key === be.ARROW_UP)) {
          (L.key === be.ARROW_DOWN || L.key === be.ARROW_UP) && L.preventDefault(), p.update((Je) => {
            const bt = !Je;
            return bt && (L.preventDefault(), T.set(Mi(Y)), j.set(Li(Y)), w.set(Y)), bt;
          });
          const ee = document.getElementById(V.menu);
          if (!ee)
            return;
          const te = ee.querySelector("[data-selected]");
          if (he(te)) {
            Fe(te);
            return;
          }
          const ke = xr(ee);
          if (!ke.length)
            return;
          Fe(ke[0]);
        }
      }))
    })
  }), { elements: { root: Ve } } = Oo(), { action: Me } = Pe(Ve), xe = Ye(yt("label"), {
    returned: () => ({
      id: V.label,
      for: V.trigger
    }),
    action: (C) => ({
      destroy: At(Me(C).destroy ?? Ue, We(C, "click", (L) => {
        L.preventDefault();
        const Y = document.getElementById(V.trigger);
        he(Y) && Y.focus();
      }))
    })
  }), { elements: { root: Dn } } = Uu({
    decorative: !0
  }), on = Ye(yt("group"), {
    returned: () => (C) => ({
      role: "group",
      "aria-labelledby": C
    })
  }), an = Ye(yt("group-label"), {
    returned: () => (C) => ({
      id: C
    })
  }), jo = Ye(yt("arrow"), {
    stores: i,
    returned: (C) => ({
      "data-arrow": !0,
      style: Hn({
        position: "absolute",
        width: `var(--arrow-size, ${C}px)`,
        height: `var(--arrow-size, ${C}px)`
      })
    })
  }), kr = (C) => {
    const Z = C.getAttribute("data-value"), L = C.getAttribute("data-label"), Y = C.hasAttribute("data-disabled");
    return {
      value: Z && JSON.parse(Z),
      label: L ?? C.textContent ?? void 0,
      disabled: !!Y
    };
  }, ci = (C) => {
    b.update((Z) => {
      if (Pe(m)) {
        const Y = Array.isArray(Z) ? Z : [];
        return $l(C, Y);
      }
      return C;
    });
  }, Zo = Ye(yt("option"), {
    stores: b,
    returned: (C) => (Z) => {
      const L = Array.isArray(C) ? C.map((Y) => Y.value).includes(Z.value) : (C == null ? void 0 : C.value) === (Z == null ? void 0 : Z.value);
      return {
        role: "option",
        "aria-selected": L,
        "data-selected": L ? "" : void 0,
        "data-value": JSON.stringify(Z.value),
        "data-label": Z.label ?? void 0,
        "data-disabled": Z.disabled ? "" : void 0,
        tabindex: -1
      };
    },
    action: (C) => ({
      destroy: At(We(C, "click", (L) => {
        const Y = L.currentTarget;
        if (!he(Y))
          return;
        const ee = kr(C);
        if (ee.disabled) {
          L.preventDefault();
          return;
        }
        Fe(Y), ci(ee), Pe(m) || p.set(!1);
      }), We(C, "keydown", (L) => {
        if (Pe(P).length > 0 && L.key === be.SPACE) {
          L.preventDefault();
          return;
        }
        if (L.key === be.ENTER || L.key === be.SPACE) {
          L.preventDefault();
          const te = kr(C);
          C.setAttribute("data-selected", ""), ci(te), Pe(m) || p.set(!1);
        }
      }), We(C, "pointermove", (L) => {
        const Y = kr(C);
        if (Y.disabled) {
          L.preventDefault();
          return;
        }
        const ee = L.currentTarget;
        if (he(ee)) {
          if (Y.disabled) {
            const te = document.getElementById(V.menu);
            if (!te)
              return;
            Fe(te);
          }
          A(L);
        }
      }), We(C, "pointerleave", (L) => {
        y(L) && z();
      }), We(C, "focusin", (L) => {
        const Y = L.currentTarget;
        he(Y) && rc(Y);
      }), We(C, "focusout", (L) => {
        const Y = L.currentTarget;
        he(Y) && ic(Y);
      }))
    })
  }), Fo = Ye(yt("input"), {
    stores: [b, s, o, l],
    returned: ([C, Z, L, Y]) => ({
      type: "hidden",
      name: Y,
      value: C,
      "aria-hidden": !0,
      hidden: !0,
      tabIndex: -1,
      required: Z,
      disabled: L,
      style: Hn({
        position: "absolute",
        opacity: 0,
        "pointer-events": "none",
        margin: 0,
        transform: "translateX(-100%)"
      })
    })
  });
  Ws(() => {
    const C = document.getElementById(V.trigger);
    C && w.set(C);
  });
  let ui = !1;
  return zn(p, (C) => {
    C && (ui = !0);
  }), zn([p, w], function([Z, L]) {
    const Y = [];
    if (Fr)
      return Z && Pe(c) && Y.push(Ii()), ao(1).then(() => {
        const ee = document.getElementById(V.menu);
        if (ee && Z && U) {
          const te = _(ee);
          if (te)
            Fe(te);
          else {
            const ke = sc(ee);
            if (!ke)
              return;
            Fe(ke);
          }
        } else
          ee && Z ? Fe(ee) : L && ui && Fe(L);
      }), () => {
        Y.forEach((ee) => ee());
      };
  }), zn([p, w], ([C, Z]) => {
    if (!Fr)
      return;
    const L = () => U = !1;
    return At(mn(document, "keydown", (ee) => {
      if (U = !0, ee.key === be.ESCAPE && C) {
        if (p.set(!1), !Z)
          return;
        Fe(Z);
      }
    }, { capture: !0 }), mn(document, "pointerdown", L, { capture: !0, once: !0 }), mn(document, "pointermove", L, { capture: !0, once: !0 }));
  }), {
    elements: {
      menu: ye,
      trigger: Ke,
      option: Zo,
      input: Fo,
      group: on,
      groupLabel: an,
      arrow: jo,
      separator: Dn,
      label: xe
    },
    states: {
      open: p,
      selected: b,
      selectedLabel: Se
    },
    helpers: {
      isSelected: $
    },
    options: n
  };
}
const Wu = {
  orientation: "horizontal",
  decorative: !1
}, Uu = (t) => {
  const e = { ...Wu, ...t }, n = ei(e), { orientation: r, decorative: i } = n;
  return {
    elements: {
      root: Ye("separator", {
        stores: [r, i],
        returned: ([o, a]) => ({
          role: a ? "none" : "separator",
          "aria-orientation": o === "vertical" ? o : void 0,
          "aria-hidden": a,
          "data-orientation": o
        })
      })
    },
    options: n
  };
}, Gu = {
  defaultChecked: !1,
  disabled: !1,
  required: !1,
  name: "",
  value: ""
}, { name: qi } = io("switch");
function qu(t) {
  const e = { ...Gu, ...t }, n = ei(oo(e, "checked")), { disabled: r, required: i, name: s, value: o } = n, a = e.checked ?? $e(e.defaultChecked), c = zr(a, e == null ? void 0 : e.onCheckedChange);
  function l() {
    Pe(r) || c.update((d) => !d);
  }
  const u = Ye(qi(), {
    stores: [c, r, i],
    returned: ([d, h, m]) => ({
      "data-disabled": h,
      disabled: h,
      "data-state": d ? "checked" : "unchecked",
      type: "button",
      role: "switch",
      "aria-checked": d,
      "aria-required": m
    }),
    action(d) {
      return {
        destroy: At(We(d, "click", () => {
          l();
        }), We(d, "keydown", (m) => {
          m.key !== be.ENTER && m.key !== be.SPACE || (m.preventDefault(), l());
        }))
      };
    }
  }), f = Ye(qi("input"), {
    stores: [c, s, i, r, o],
    returned: ([d, h, m, v, p]) => ({
      type: "checkbox",
      "aria-hidden": !0,
      hidden: !0,
      tabindex: -1,
      name: h,
      value: p,
      checked: d,
      required: m,
      disabled: v,
      style: Hn({
        position: "absolute",
        opacity: 0,
        "pointer-events": "none",
        margin: 0,
        transform: "translateX(-100%)"
      })
    })
  });
  return {
    elements: {
      root: u,
      input: f
    },
    states: {
      checked: c
    },
    options: n
  };
}
function Hu() {
  return lo(10);
}
function Ao(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function No(t) {
  return function(e, n) {
    if (n === void 0)
      return;
    t[e].set(n);
  };
}
function Ln() {
  const t = tn();
  return (e) => {
    const { originalEvent: n } = e.detail, { cancelable: r } = e, i = n.type;
    t(i, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || e.preventDefault();
  };
}
const Ku = {
  get: () => Oo()
}, Yu = (t) => ({ builder: t & /*$root*/
2 }), Hi = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Xu = (t) => ({ builder: t & /*$root*/
2 }), Ki = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function Ju(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[7] = n, e;
}
function Qu(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[6].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[5],
    Hi
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], c = {};
  for (let l = 0; l < a.length; l += 1)
    c = M(c, a[l]);
  return {
    c() {
      e = D("label"), o && o.c(), ve(e, c);
    },
    m(l, u) {
      R(l, e, u), o && o.m(e, null), n = !0, r || (i = [
        ut(
          /*builder*/
          t[7].action(e)
        ),
        Q(
          e,
          "m-mousedown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(l, u) {
      o && o.p && (!n || u & /*$$scope, $root*/
      34) && le(
        o,
        s,
        l,
        /*$$scope*/
        l[5],
        n ? ae(
          s,
          /*$$scope*/
          l[5],
          u,
          Yu
        ) : ce(
          /*$$scope*/
          l[5]
        ),
        Hi
      ), ve(e, c = we(a, [
        u & /*$root*/
        2 && /*builder*/
        l[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        l[4]
      ]));
    },
    i(l) {
      n || (k(o, l), n = !0);
    },
    o(l) {
      x(o, l), n = !1;
    },
    d(l) {
      l && N(e), o && o.d(l), r = !1, Ne(i);
    }
  };
}
function $u(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[5],
    Ki
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $root*/
      34) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[5],
        e ? ae(
          n,
          /*$$scope*/
          i[5],
          s,
          Xu
        ) : ce(
          /*$$scope*/
          i[5]
        ),
        Ki
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function ef(t) {
  let e, n, r, i;
  const s = [$u, Qu], o = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  function c(l, u) {
    return u === 1 ? Ju(l) : l;
  }
  return e = a(t), n = o[e] = s[e](c(t, e)), {
    c() {
      n.c(), r = Be();
    },
    m(l, u) {
      o[e].m(l, u), R(l, r, u), i = !0;
    },
    p(l, [u]) {
      let f = e;
      e = a(l), e === f ? o[e].p(c(l, e), u) : (je(), x(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(c(l, e), u) : (n = o[e] = s[e](c(l, e)), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (k(n), i = !0);
    },
    o(l) {
      x(n), i = !1;
    },
    d(l) {
      l && N(r), o[e].d(l);
    }
  };
}
function tf(t, e, n) {
  const r = ["asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { asChild: c = !1 } = e;
  const { elements: { root: l } } = Ku.get();
  lt(t, l, (f) => n(1, s = f));
  const u = Ln();
  return t.$$set = (f) => {
    e = M(M({}, e), Oe(f)), n(4, i = se(e, r)), "asChild" in f && n(0, c = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [c, s, l, u, i, a, o];
}
let nf = class extends fe {
  constructor(e) {
    super(), ue(this, e, tf, ef, re, { asChild: 0 });
  }
};
const Ro = "Select", Po = "SelectGroup", Io = "SelectItem", Vt = {
  set: rf,
  get: sn,
  setGroup: sf,
  setItem: of,
  getItemIndicator: lf,
  getGroupLabel: af,
  setArrow: cf
};
function sn() {
  return _r(Ro);
}
function rf(t) {
  const e = Vu(Ao(t));
  return vr(Ro, e), {
    ...e,
    updateOption: No(e.options)
  };
}
function sf() {
  const t = Hu();
  vr(Po, t);
  const { elements: { group: e } } = sn();
  return { group: e, id: t };
}
function of(t) {
  const e = sn();
  return vr(Io, t), e;
}
function af() {
  const t = _r(Po), { elements: { groupLabel: e } } = sn();
  return { groupLabel: e, id: t };
}
function lf() {
  const { helpers: { isSelected: t } } = sn();
  return {
    value: _r(Io),
    isSelected: t
  };
}
function cf(t = 8) {
  const e = sn();
  return e.options.arrowSize.set(t), e;
}
function uf(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[16],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, [s]) {
      r && r.p && (!e || s & /*$$scope*/
      65536) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[16],
        e ? ae(
          n,
          /*$$scope*/
          i[16],
          s,
          null
        ) : ce(
          /*$$scope*/
          i[16]
        ),
        null
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function ff(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { required: s = void 0 } = e, { disabled: o = void 0 } = e, { arrowSize: a = void 0 } = e, { preventScroll: c = void 0 } = e, { loop: l = void 0 } = e, { closeOnEscape: u = void 0 } = e, { closeOnOutsideClick: f = void 0 } = e, { portal: d = void 0 } = e, { positioning: h = void 0 } = e, { name: m = void 0 } = e, { multiple: v = void 0 } = e, { selected: p = void 0 } = e, { onSelectedChange: g = void 0 } = e, { open: b = void 0 } = e, { onOpenChange: w = void 0 } = e, { forceVisible: T = !0 } = e;
  const { states: { open: j, selected: U }, updateOption: V } = Vt.set({
    required: s,
    disabled: o,
    arrowSize: a,
    preventScroll: c,
    loop: l,
    closeOnEscape: u,
    closeOnOutsideClick: f,
    portal: d,
    positioning: h,
    name: m,
    multiple: v,
    forceVisible: T,
    defaultSelected: p,
    defaultOpen: b,
    onSelectedChange: ({ next: P }) => (p !== P && (g == null || g(P), n(0, p = P)), P),
    onOpenChange: ({ next: P }) => (b !== P && (w == null || w(P), n(1, b = P)), P)
  });
  return t.$$set = (P) => {
    "required" in P && n(2, s = P.required), "disabled" in P && n(3, o = P.disabled), "arrowSize" in P && n(4, a = P.arrowSize), "preventScroll" in P && n(5, c = P.preventScroll), "loop" in P && n(6, l = P.loop), "closeOnEscape" in P && n(7, u = P.closeOnEscape), "closeOnOutsideClick" in P && n(8, f = P.closeOnOutsideClick), "portal" in P && n(9, d = P.portal), "positioning" in P && n(10, h = P.positioning), "name" in P && n(11, m = P.name), "multiple" in P && n(12, v = P.multiple), "selected" in P && n(0, p = P.selected), "onSelectedChange" in P && n(13, g = P.onSelectedChange), "open" in P && n(1, b = P.open), "onOpenChange" in P && n(14, w = P.onOpenChange), "forceVisible" in P && n(15, T = P.forceVisible), "$$scope" in P && n(16, i = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    2 && b !== void 0 && j.set(b), t.$$.dirty & /*selected*/
    1 && p !== void 0 && U.set(p), t.$$.dirty & /*required*/
    4 && V("required", s), t.$$.dirty & /*disabled*/
    8 && V("disabled", o), t.$$.dirty & /*arrowSize*/
    16 && V("arrowSize", a), t.$$.dirty & /*preventScroll*/
    32 && V("preventScroll", c), t.$$.dirty & /*loop*/
    64 && V("loop", l), t.$$.dirty & /*closeOnEscape*/
    128 && V("closeOnEscape", u), t.$$.dirty & /*closeOnOutsideClick*/
    256 && V("closeOnOutsideClick", f), t.$$.dirty & /*portal*/
    512 && V("portal", d), t.$$.dirty & /*positioning*/
    1024 && V("positioning", h), t.$$.dirty & /*name*/
    2048 && V("name", m), t.$$.dirty & /*multiple*/
    4096 && V("multiple", v), t.$$.dirty & /*forceVisible*/
    32768 && V("forceVisible", T);
  }, [
    p,
    b,
    s,
    o,
    a,
    c,
    l,
    u,
    f,
    d,
    h,
    m,
    v,
    g,
    w,
    T,
    i,
    r
  ];
}
let df = class extends fe {
  constructor(e) {
    super(), ue(this, e, ff, uf, re, {
      required: 2,
      disabled: 3,
      arrowSize: 4,
      preventScroll: 5,
      loop: 6,
      closeOnEscape: 7,
      closeOnOutsideClick: 8,
      portal: 9,
      positioning: 10,
      name: 11,
      multiple: 12,
      selected: 0,
      onSelectedChange: 13,
      open: 1,
      onOpenChange: 14,
      forceVisible: 15
    });
  }
};
const hf = (t) => ({ builder: t & /*$menu*/
256 }), Yi = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), mf = (t) => ({ builder: t & /*$menu*/
256 }), Xi = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), pf = (t) => ({ builder: t & /*$menu*/
256 }), Ji = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), gf = (t) => ({ builder: t & /*$menu*/
256 }), Qi = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), bf = (t) => ({ builder: t & /*$menu*/
256 }), $i = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), vf = (t) => ({ builder: t & /*$menu*/
256 }), es = (t) => ({ builder: (
  /*builder*/
  t[15]
) });
function _f(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function yf(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function wf(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function kf(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Tf(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Cf(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Sf(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[14].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[13],
    Yi
  );
  let a = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let l = 0; l < a.length; l += 1)
    c = M(c, a[l]);
  return {
    c() {
      e = D("div"), o && o.c(), ve(e, c);
    },
    m(l, u) {
      R(l, e, u), o && o.m(e, null), n = !0, r || (i = [
        ut(
          /*builder*/
          t[15].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], r = !0);
    },
    p(l, u) {
      o && o.p && (!n || u & /*$$scope, $menu*/
      8448) && le(
        o,
        s,
        l,
        /*$$scope*/
        l[13],
        n ? ae(
          s,
          /*$$scope*/
          l[13],
          u,
          hf
        ) : ce(
          /*$$scope*/
          l[13]
        ),
        Yi
      ), ve(e, c = we(a, [
        u & /*$menu*/
        256 && /*builder*/
        l[15],
        u & /*$$restProps*/
        4096 && /*$$restProps*/
        l[12]
      ]));
    },
    i(l) {
      n || (k(o, l), n = !0);
    },
    o(l) {
      x(o, l), n = !1;
    },
    d(l) {
      l && N(e), o && o.d(l), r = !1, Ne(i);
    }
  };
}
function xf(t) {
  let e, n, r, i, s;
  const o = (
    /*#slots*/
    t[14].default
  ), a = oe(
    o,
    t,
    /*$$scope*/
    t[13],
    Xi
  );
  let c = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let u = 0; u < c.length; u += 1)
    l = M(l, c[u]);
  return {
    c() {
      e = D("div"), a && a.c(), ve(e, l);
    },
    m(u, f) {
      R(u, e, f), a && a.m(e, null), r = !0, i || (s = [
        ut(
          /*builder*/
          t[15].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], i = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      8448) && le(
        a,
        o,
        t,
        /*$$scope*/
        t[13],
        r ? ae(
          o,
          /*$$scope*/
          t[13],
          f,
          mf
        ) : ce(
          /*$$scope*/
          t[13]
        ),
        Xi
      ), ve(e, l = we(c, [
        f & /*$menu*/
        256 && /*builder*/
        t[15],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (k(a, u), n && n.end(1), r = !0);
    },
    o(u) {
      x(a, u), u && (n = Xs(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), r = !1;
    },
    d(u) {
      u && N(e), a && a.d(u), u && n && n.end(), i = !1, Ne(s);
    }
  };
}
function Ef(t) {
  let e, n, r, i, s;
  const o = (
    /*#slots*/
    t[14].default
  ), a = oe(
    o,
    t,
    /*$$scope*/
    t[13],
    Ji
  );
  let c = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let u = 0; u < c.length; u += 1)
    l = M(l, c[u]);
  return {
    c() {
      e = D("div"), a && a.c(), ve(e, l);
    },
    m(u, f) {
      R(u, e, f), a && a.m(e, null), r = !0, i || (s = [
        ut(
          /*builder*/
          t[15].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], i = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      8448) && le(
        a,
        o,
        t,
        /*$$scope*/
        t[13],
        r ? ae(
          o,
          /*$$scope*/
          t[13],
          f,
          pf
        ) : ce(
          /*$$scope*/
          t[13]
        ),
        Ji
      ), ve(e, l = we(c, [
        f & /*$menu*/
        256 && /*builder*/
        t[15],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (k(a, u), u && (n || ht(() => {
        n = Ys(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start();
      })), r = !0);
    },
    o(u) {
      x(a, u), r = !1;
    },
    d(u) {
      u && N(e), a && a.d(u), i = !1, Ne(s);
    }
  };
}
function Of(t) {
  let e, n, r, i, s, o;
  const a = (
    /*#slots*/
    t[14].default
  ), c = oe(
    a,
    t,
    /*$$scope*/
    t[13],
    Qi
  );
  let l = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let f = 0; f < l.length; f += 1)
    u = M(u, l[f]);
  return {
    c() {
      e = D("div"), c && c.c(), ve(e, u);
    },
    m(f, d) {
      R(f, e, d), c && c.m(e, null), i = !0, s || (o = [
        ut(
          /*builder*/
          t[15].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(f, d) {
      t = f, c && c.p && (!i || d & /*$$scope, $menu*/
      8448) && le(
        c,
        a,
        t,
        /*$$scope*/
        t[13],
        i ? ae(
          a,
          /*$$scope*/
          t[13],
          d,
          gf
        ) : ce(
          /*$$scope*/
          t[13]
        ),
        Qi
      ), ve(e, u = we(l, [
        d & /*$menu*/
        256 && /*builder*/
        t[15],
        d & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(f) {
      i || (k(c, f), f && ht(() => {
        i && (r && r.end(1), n = Ys(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start());
      }), i = !0);
    },
    o(f) {
      x(c, f), n && n.invalidate(), f && (r = Xs(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), i = !1;
    },
    d(f) {
      f && N(e), c && c.d(f), f && r && r.end(), s = !1, Ne(o);
    }
  };
}
function Af(t) {
  let e, n, r, i, s;
  const o = (
    /*#slots*/
    t[14].default
  ), a = oe(
    o,
    t,
    /*$$scope*/
    t[13],
    $i
  );
  let c = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let u = 0; u < c.length; u += 1)
    l = M(l, c[u]);
  return {
    c() {
      e = D("div"), a && a.c(), ve(e, l);
    },
    m(u, f) {
      R(u, e, f), a && a.m(e, null), r = !0, i || (s = [
        ut(
          /*builder*/
          t[15].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], i = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      8448) && le(
        a,
        o,
        t,
        /*$$scope*/
        t[13],
        r ? ae(
          o,
          /*$$scope*/
          t[13],
          f,
          bf
        ) : ce(
          /*$$scope*/
          t[13]
        ),
        $i
      ), ve(e, l = we(c, [
        f & /*$menu*/
        256 && /*builder*/
        t[15],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (k(a, u), u && ht(() => {
        r && (n || (n = vi(
          e,
          /*transition*/
          t[0],
          /*transitionConfig*/
          t[1],
          !0
        )), n.run(1));
      }), r = !0);
    },
    o(u) {
      x(a, u), u && (n || (n = vi(
        e,
        /*transition*/
        t[0],
        /*transitionConfig*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && N(e), a && a.d(u), u && n && n.end(), i = !1, Ne(s);
    }
  };
}
function Nf(t) {
  let e;
  const n = (
    /*#slots*/
    t[14].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[13],
    es
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $menu*/
      8448) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[13],
        e ? ae(
          n,
          /*$$scope*/
          i[13],
          s,
          vf
        ) : ce(
          /*$$scope*/
          i[13]
        ),
        es
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Rf(t) {
  let e, n, r, i;
  const s = [
    Nf,
    Af,
    Of,
    Ef,
    xf,
    Sf
  ], o = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[6] && /*$open*/
      l[7] ? 0 : (
        /*transition*/
        l[0] && /*$open*/
        l[7] ? 1 : (
          /*inTransition*/
          l[2] && /*outTransition*/
          l[4] && /*$open*/
          l[7] ? 2 : (
            /*inTransition*/
            l[2] && /*$open*/
            l[7] ? 3 : (
              /*outTransition*/
              l[4] && /*$open*/
              l[7] ? 4 : (
                /*$open*/
                l[7] ? 5 : -1
              )
            )
          )
        )
      )
    );
  }
  function c(l, u) {
    if (u === 0)
      return Cf(l);
    if (u === 1)
      return Tf(l);
    if (u === 2)
      return kf(l);
    if (u === 3)
      return wf(l);
    if (u === 4)
      return yf(l);
    if (u === 5)
      return _f(l);
  }
  return ~(e = a(t)) && (n = o[e] = s[e](c(t, e))), {
    c() {
      n && n.c(), r = Be();
    },
    m(l, u) {
      ~e && o[e].m(l, u), R(l, r, u), i = !0;
    },
    p(l, [u]) {
      let f = e;
      e = a(l), e === f ? ~e && o[e].p(c(l, e), u) : (n && (je(), x(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze()), ~e ? (n = o[e], n ? n.p(c(l, e), u) : (n = o[e] = s[e](c(l, e)), n.c()), k(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(l) {
      i || (k(n), i = !0);
    },
    o(l) {
      x(n), i = !1;
    },
    d(l) {
      l && N(r), ~e && o[e].d(l);
    }
  };
}
function Pf(t, e, n) {
  const r = [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ];
  let i = se(e, r), s, o, { $$slots: a = {}, $$scope: c } = e, { transition: l = void 0 } = e, { transitionConfig: u = void 0 } = e, { inTransition: f = void 0 } = e, { inTransitionConfig: d = void 0 } = e, { outTransition: h = void 0 } = e, { outTransitionConfig: m = void 0 } = e, { asChild: v = !1 } = e;
  const { elements: { menu: p }, states: { open: g } } = Vt.get();
  lt(t, p, (w) => n(8, o = w)), lt(t, g, (w) => n(7, s = w));
  const b = Ln();
  return t.$$set = (w) => {
    e = M(M({}, e), Oe(w)), n(12, i = se(e, r)), "transition" in w && n(0, l = w.transition), "transitionConfig" in w && n(1, u = w.transitionConfig), "inTransition" in w && n(2, f = w.inTransition), "inTransitionConfig" in w && n(3, d = w.inTransitionConfig), "outTransition" in w && n(4, h = w.outTransition), "outTransitionConfig" in w && n(5, m = w.outTransitionConfig), "asChild" in w && n(6, v = w.asChild), "$$scope" in w && n(13, c = w.$$scope);
  }, [
    l,
    u,
    f,
    d,
    h,
    m,
    v,
    s,
    o,
    p,
    g,
    b,
    i,
    c,
    a
  ];
}
class If extends fe {
  constructor(e) {
    super(), ue(this, e, Pf, Rf, re, {
      transition: 0,
      transitionConfig: 1,
      inTransition: 2,
      inTransitionConfig: 3,
      outTransition: 4,
      outTransitionConfig: 5,
      asChild: 6
    });
  }
}
const Mf = (t) => ({ builder: t & /*$group*/
2 }), ts = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Lf = (t) => ({ builder: t & /*$group*/
2 }), ns = (t) => ({
  builder: (
    /*$group*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function Df(t) {
  const e = t.slice(), n = (
    /*$group*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function jf(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[6].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[5],
    ts
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], c = {};
  for (let l = 0; l < a.length; l += 1)
    c = M(c, a[l]);
  return {
    c() {
      e = D("div"), o && o.c(), ve(e, c);
    },
    m(l, u) {
      R(l, e, u), o && o.m(e, null), n = !0, r || (i = ut(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(l, u) {
      o && o.p && (!n || u & /*$$scope, $group*/
      34) && le(
        o,
        s,
        l,
        /*$$scope*/
        l[5],
        n ? ae(
          s,
          /*$$scope*/
          l[5],
          u,
          Mf
        ) : ce(
          /*$$scope*/
          l[5]
        ),
        ts
      ), ve(e, c = we(a, [
        u & /*$group*/
        2 && /*builder*/
        l[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        l[4]
      ]));
    },
    i(l) {
      n || (k(o, l), n = !0);
    },
    o(l) {
      x(o, l), n = !1;
    },
    d(l) {
      l && N(e), o && o.d(l), r = !1, i();
    }
  };
}
function Zf(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[5],
    ns
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $group*/
      34) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[5],
        e ? ae(
          n,
          /*$$scope*/
          i[5],
          s,
          Lf
        ) : ce(
          /*$$scope*/
          i[5]
        ),
        ns
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Ff(t) {
  let e, n, r, i;
  const s = [Zf, jf], o = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  function c(l, u) {
    return u === 1 ? Df(l) : l;
  }
  return e = a(t), n = o[e] = s[e](c(t, e)), {
    c() {
      n.c(), r = Be();
    },
    m(l, u) {
      o[e].m(l, u), R(l, r, u), i = !0;
    },
    p(l, [u]) {
      let f = e;
      e = a(l), e === f ? o[e].p(c(l, e), u) : (je(), x(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(c(l, e), u) : (n = o[e] = s[e](c(l, e)), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (k(n), i = !0);
    },
    o(l) {
      x(n), i = !1;
    },
    d(l) {
      l && N(r), o[e].d(l);
    }
  };
}
function zf(t, e, n) {
  const r = ["asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { asChild: c = !1 } = e;
  const { group: l, id: u } = Vt.setGroup();
  return lt(t, l, (f) => n(1, s = f)), t.$$set = (f) => {
    e = M(M({}, e), Oe(f)), n(4, i = se(e, r)), "asChild" in f && n(0, c = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [c, s, l, u, i, a, o];
}
class Bf extends fe {
  constructor(e) {
    super(), ue(this, e, zf, Ff, re, { asChild: 0 });
  }
}
const Vf = (t) => ({
  builder: t & /*$option, value, disabled, label*/
  23
}), rs = (t) => ({ builder: (
  /*builder*/
  t[10]
) }), Wf = (t) => ({
  builder: t & /*$option, value, disabled, label*/
  23
}), is = (t) => ({
  builder: (
    /*$option*/
    t[4]({
      value: (
        /*value*/
        t[0]
      ),
      disabled: (
        /*disabled*/
        t[1]
      ),
      label: (
        /*label*/
        t[2]
      )
    })
  )
});
function Uf(t) {
  const e = t.slice(), n = (
    /*$option*/
    e[4]({
      value: (
        /*value*/
        e[0]
      ),
      disabled: (
        /*disabled*/
        e[1]
      ),
      label: (
        /*label*/
        e[2]
      )
    })
  );
  return e[10] = n, e;
}
function Gf(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[9].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[8],
    rs
  ), a = o || Hf(t);
  let c = [
    /*builder*/
    t[10],
    /*$$restProps*/
    t[7]
  ], l = {};
  for (let u = 0; u < c.length; u += 1)
    l = M(l, c[u]);
  return {
    c() {
      e = D("div"), a && a.c(), ve(e, l);
    },
    m(u, f) {
      R(u, e, f), a && a.m(e, null), n = !0, r || (i = [
        ut(
          /*builder*/
          t[10].action(e)
        ),
        Q(
          e,
          "m-click",
          /*dispatch*/
          t[6]
        ),
        Q(
          e,
          "m-focusin",
          /*dispatch*/
          t[6]
        ),
        Q(
          e,
          "m-focusout",
          /*dispatch*/
          t[6]
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[6]
        ),
        Q(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[6]
        ),
        Q(
          e,
          "m-pointermove",
          /*dispatch*/
          t[6]
        )
      ], r = !0);
    },
    p(u, f) {
      o ? o.p && (!n || f & /*$$scope, $option, value, disabled, label*/
      279) && le(
        o,
        s,
        u,
        /*$$scope*/
        u[8],
        n ? ae(
          s,
          /*$$scope*/
          u[8],
          f,
          Vf
        ) : ce(
          /*$$scope*/
          u[8]
        ),
        rs
      ) : a && a.p && (!n || f & /*label, value*/
      5) && a.p(u, n ? f : -1), ve(e, l = we(c, [
        f & /*$option, value, disabled, label*/
        23 && /*builder*/
        u[10],
        f & /*$$restProps*/
        128 && /*$$restProps*/
        u[7]
      ]));
    },
    i(u) {
      n || (k(a, u), n = !0);
    },
    o(u) {
      x(a, u), n = !1;
    },
    d(u) {
      u && N(e), a && a.d(u), r = !1, Ne(i);
    }
  };
}
function qf(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[8],
    is
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $option, value, disabled, label*/
      279) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[8],
        e ? ae(
          n,
          /*$$scope*/
          i[8],
          s,
          Wf
        ) : ce(
          /*$$scope*/
          i[8]
        ),
        is
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Hf(t) {
  let e = (
    /*label*/
    (t[2] ? (
      /*label*/
      t[2]
    ) : (
      /*value*/
      t[0]
    )) + ""
  ), n;
  return {
    c() {
      n = Re(e);
    },
    m(r, i) {
      R(r, n, i);
    },
    p(r, i) {
      i & /*label, value*/
      5 && e !== (e = /*label*/
      (r[2] ? (
        /*label*/
        r[2]
      ) : (
        /*value*/
        r[0]
      )) + "") && Le(n, e);
    },
    d(r) {
      r && N(n);
    }
  };
}
function Kf(t) {
  let e, n, r, i;
  const s = [qf, Gf], o = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[3] ? 0 : 1
    );
  }
  function c(l, u) {
    return u === 1 ? Uf(l) : l;
  }
  return e = a(t), n = o[e] = s[e](c(t, e)), {
    c() {
      n.c(), r = Be();
    },
    m(l, u) {
      o[e].m(l, u), R(l, r, u), i = !0;
    },
    p(l, [u]) {
      let f = e;
      e = a(l), e === f ? o[e].p(c(l, e), u) : (je(), x(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(c(l, e), u) : (n = o[e] = s[e](c(l, e)), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (k(n), i = !0);
    },
    o(l) {
      x(n), i = !1;
    },
    d(l) {
      l && N(r), o[e].d(l);
    }
  };
}
function Yf(t, e, n) {
  const r = ["value", "disabled", "label", "asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { value: c } = e, { disabled: l = void 0 } = e, { label: u = void 0 } = e, { asChild: f = !1 } = e;
  const { elements: { option: d } } = Vt.setItem(c);
  lt(t, d, (m) => n(4, s = m));
  const h = Ln();
  return t.$$set = (m) => {
    e = M(M({}, e), Oe(m)), n(7, i = se(e, r)), "value" in m && n(0, c = m.value), "disabled" in m && n(1, l = m.disabled), "label" in m && n(2, u = m.label), "asChild" in m && n(3, f = m.asChild), "$$scope" in m && n(8, a = m.$$scope);
  }, [
    c,
    l,
    u,
    f,
    s,
    d,
    h,
    i,
    a,
    o
  ];
}
class Xf extends fe {
  constructor(e) {
    super(), ue(this, e, Yf, Kf, re, {
      value: 0,
      disabled: 1,
      label: 2,
      asChild: 3
    });
  }
}
function ss(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope*/
      8) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[3],
        e ? ae(
          n,
          /*$$scope*/
          i[3],
          s,
          null
        ) : ce(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Jf(t) {
  let e = (
    /*$isSelected*/
    t[0](
      /*value*/
      t[2]
    )
  ), n, r, i = e && ss(t);
  return {
    c() {
      i && i.c(), n = Be();
    },
    m(s, o) {
      i && i.m(s, o), R(s, n, o), r = !0;
    },
    p(s, [o]) {
      o & /*$isSelected*/
      1 && (e = /*$isSelected*/
      s[0](
        /*value*/
        s[2]
      )), e ? i ? (i.p(s, o), o & /*$isSelected*/
      1 && k(i, 1)) : (i = ss(s), i.c(), k(i, 1), i.m(n.parentNode, n)) : i && (je(), x(i, 1, 1, () => {
        i = null;
      }), Ze());
    },
    i(s) {
      r || (k(i), r = !0);
    },
    o(s) {
      x(i), r = !1;
    },
    d(s) {
      s && N(n), i && i.d(s);
    }
  };
}
function Qf(t, e, n) {
  let r, { $$slots: i = {}, $$scope: s } = e;
  const { isSelected: o, value: a } = Vt.getItemIndicator();
  return lt(t, o, (c) => n(0, r = c)), t.$$set = (c) => {
    "$$scope" in c && n(3, s = c.$$scope);
  }, [r, o, a, s, i];
}
class $f extends fe {
  constructor(e) {
    super(), ue(this, e, Qf, Jf, re, {});
  }
}
const ed = (t) => ({ builder: t & /*$trigger*/
2 }), os = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), td = (t) => ({ builder: t & /*$trigger*/
2 }), as = (t) => ({ builder: (
  /*$trigger*/
  t[1]
) });
function nd(t) {
  const e = t.slice(), n = (
    /*$trigger*/
    e[1]
  );
  return e[7] = n, e;
}
function rd(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[6].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[5],
    os
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], c = {};
  for (let l = 0; l < a.length; l += 1)
    c = M(c, a[l]);
  return {
    c() {
      e = D("button"), o && o.c(), ve(e, c);
    },
    m(l, u) {
      R(l, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (i = [
        ut(
          /*builder*/
          t[7].action(e)
        ),
        Q(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(l, u) {
      o && o.p && (!n || u & /*$$scope, $trigger*/
      34) && le(
        o,
        s,
        l,
        /*$$scope*/
        l[5],
        n ? ae(
          s,
          /*$$scope*/
          l[5],
          u,
          ed
        ) : ce(
          /*$$scope*/
          l[5]
        ),
        os
      ), ve(e, c = we(a, [
        u & /*$trigger*/
        2 && /*builder*/
        l[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        l[4]
      ]));
    },
    i(l) {
      n || (k(o, l), n = !0);
    },
    o(l) {
      x(o, l), n = !1;
    },
    d(l) {
      l && N(e), o && o.d(l), r = !1, Ne(i);
    }
  };
}
function id(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[5],
    as
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $trigger*/
      34) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[5],
        e ? ae(
          n,
          /*$$scope*/
          i[5],
          s,
          td
        ) : ce(
          /*$$scope*/
          i[5]
        ),
        as
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function sd(t) {
  let e, n, r, i;
  const s = [id, rd], o = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  function c(l, u) {
    return u === 1 ? nd(l) : l;
  }
  return e = a(t), n = o[e] = s[e](c(t, e)), {
    c() {
      n.c(), r = Be();
    },
    m(l, u) {
      o[e].m(l, u), R(l, r, u), i = !0;
    },
    p(l, [u]) {
      let f = e;
      e = a(l), e === f ? o[e].p(c(l, e), u) : (je(), x(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(c(l, e), u) : (n = o[e] = s[e](c(l, e)), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (k(n), i = !0);
    },
    o(l) {
      x(n), i = !1;
    },
    d(l) {
      l && N(r), o[e].d(l);
    }
  };
}
function od(t, e, n) {
  const r = ["asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { asChild: c = !1 } = e;
  const { elements: { trigger: l } } = Vt.get();
  lt(t, l, (f) => n(1, s = f));
  const u = Ln();
  return t.$$set = (f) => {
    e = M(M({}, e), Oe(f)), n(4, i = se(e, r)), "asChild" in f && n(0, c = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [c, s, l, u, i, a, o];
}
class ad extends fe {
  constructor(e) {
    super(), ue(this, e, od, sd, re, { asChild: 0 });
  }
}
const ld = (t) => ({ label: t & /*$selectedLabel*/
4 }), ls = (t) => ({ label: (
  /*$selectedLabel*/
  t[2]
) });
function cd(t) {
  let e, n = (
    /*$selectedLabel*/
    (t[2] ? (
      /*$selectedLabel*/
      t[2]
    ) : (
      /*placeholder*/
      t[0]
    )) + ""
  ), r, i = [
    /*$$restProps*/
    t[4]
  ], s = {};
  for (let o = 0; o < i.length; o += 1)
    s = M(s, i[o]);
  return {
    c() {
      e = D("span"), r = Re(n), ve(e, s);
    },
    m(o, a) {
      R(o, e, a), W(e, r);
    },
    p(o, a) {
      a & /*$selectedLabel, placeholder*/
      5 && n !== (n = /*$selectedLabel*/
      (o[2] ? (
        /*$selectedLabel*/
        o[2]
      ) : (
        /*placeholder*/
        o[0]
      )) + "") && Ka(r, n, s.contenteditable), ve(e, s = we(i, [a & /*$$restProps*/
      16 && /*$$restProps*/
      o[4]]));
    },
    i: ne,
    o: ne,
    d(o) {
      o && N(e);
    }
  };
}
function ud(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[5],
    ls
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $selectedLabel*/
      36) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[5],
        e ? ae(
          n,
          /*$$scope*/
          i[5],
          s,
          ld
        ) : ce(
          /*$$scope*/
          i[5]
        ),
        ls
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function fd(t) {
  let e, n, r, i;
  const s = [ud, cd], o = [];
  function a(c, l) {
    return (
      /*asChild*/
      c[1] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = s[e](t), {
    c() {
      n.c(), r = Be();
    },
    m(c, l) {
      o[e].m(c, l), R(c, r, l), i = !0;
    },
    p(c, [l]) {
      let u = e;
      e = a(c), e === u ? o[e].p(c, l) : (je(), x(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(c, l) : (n = o[e] = s[e](c), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      i || (k(n), i = !0);
    },
    o(c) {
      x(n), i = !1;
    },
    d(c) {
      c && N(r), o[e].d(c);
    }
  };
}
function dd(t, e, n) {
  const r = ["placeholder", "asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { placeholder: c = "" } = e, { asChild: l = !1 } = e;
  const { states: { selectedLabel: u } } = Vt.get();
  return lt(t, u, (f) => n(2, s = f)), t.$$set = (f) => {
    e = M(M({}, e), Oe(f)), n(4, i = se(e, r)), "placeholder" in f && n(0, c = f.placeholder), "asChild" in f && n(1, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [
    c,
    l,
    s,
    u,
    i,
    a,
    o
  ];
}
class hd extends fe {
  constructor(e) {
    super(), ue(this, e, dd, fd, re, { placeholder: 0, asChild: 1 });
  }
}
const Mo = "Switch", Lo = {
  set: md,
  get: pd
};
function md(t) {
  const e = qu(Ao(t));
  return vr(Mo, e), {
    ...e,
    updateOption: No(e.options)
  };
}
function pd() {
  return _r(Mo);
}
const gd = (t) => ({ builder: t & /*$root*/
2 }), cs = (t) => ({ builder: (
  /*builder*/
  t[14]
) }), bd = (t) => ({ builder: t & /*$root*/
2 }), us = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function vd(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[14] = n, e;
}
function _d(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[11].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[10],
    cs
  );
  let a = [
    /*builder*/
    t[14],
    /*$$restProps*/
    t[4]
  ], c = {};
  for (let l = 0; l < a.length; l += 1)
    c = M(c, a[l]);
  return {
    c() {
      e = D("button"), o && o.c(), ve(e, c);
    },
    m(l, u) {
      R(l, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (i = [
        ut(
          /*builder*/
          t[14].action(e)
        ),
        Q(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(l, u) {
      o && o.p && (!n || u & /*$$scope, $root*/
      1026) && le(
        o,
        s,
        l,
        /*$$scope*/
        l[10],
        n ? ae(
          s,
          /*$$scope*/
          l[10],
          u,
          gd
        ) : ce(
          /*$$scope*/
          l[10]
        ),
        cs
      ), ve(e, c = we(a, [
        u & /*$root*/
        2 && /*builder*/
        l[14],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        l[4]
      ]));
    },
    i(l) {
      n || (k(o, l), n = !0);
    },
    o(l) {
      x(o, l), n = !1;
    },
    d(l) {
      l && N(e), o && o.d(l), r = !1, Ne(i);
    }
  };
}
function yd(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[10],
    us
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $root*/
      1026) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[10],
        e ? ae(
          n,
          /*$$scope*/
          i[10],
          s,
          bd
        ) : ce(
          /*$$scope*/
          i[10]
        ),
        us
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function wd(t) {
  let e, n, r, i;
  const s = [yd, _d], o = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  function c(l, u) {
    return u === 1 ? vd(l) : l;
  }
  return e = a(t), n = o[e] = s[e](c(t, e)), {
    c() {
      n.c(), r = Be();
    },
    m(l, u) {
      o[e].m(l, u), R(l, r, u), i = !0;
    },
    p(l, [u]) {
      let f = e;
      e = a(l), e === f ? o[e].p(c(l, e), u) : (je(), x(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(c(l, e), u) : (n = o[e] = s[e](c(l, e)), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (k(n), i = !0);
    },
    o(l) {
      x(n), i = !1;
    },
    d(l) {
      l && N(r), o[e].d(l);
    }
  };
}
function kd(t, e, n) {
  const r = ["checked", "onCheckedChange", "disabled", "name", "value", "asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { checked: c = void 0 } = e, { onCheckedChange: l = void 0 } = e, { disabled: u = void 0 } = e, { name: f = void 0 } = e, { value: d = void 0 } = e, { asChild: h = !1 } = e;
  const { elements: { root: m }, states: { checked: v }, updateOption: p } = Lo.set({
    disabled: u,
    name: f,
    value: d,
    defaultChecked: c,
    onCheckedChange: ({ next: b }) => (c !== b && (l == null || l(b), n(5, c = b)), b)
  });
  lt(t, m, (b) => n(1, s = b));
  const g = Ln();
  return t.$$set = (b) => {
    e = M(M({}, e), Oe(b)), n(4, i = se(e, r)), "checked" in b && n(5, c = b.checked), "onCheckedChange" in b && n(6, l = b.onCheckedChange), "disabled" in b && n(7, u = b.disabled), "name" in b && n(8, f = b.name), "value" in b && n(9, d = b.value), "asChild" in b && n(0, h = b.asChild), "$$scope" in b && n(10, a = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && c !== void 0 && v.set(c), t.$$.dirty & /*disabled*/
    128 && p("disabled", u), t.$$.dirty & /*name*/
    256 && p("name", f), t.$$.dirty & /*value*/
    512 && p("value", d);
  }, [
    h,
    s,
    m,
    g,
    i,
    c,
    l,
    u,
    f,
    d,
    a,
    o
  ];
}
let Td = class extends fe {
  constructor(e) {
    super(), ue(this, e, kd, wd, re, {
      checked: 5,
      onCheckedChange: 6,
      disabled: 7,
      name: 8,
      value: 9,
      asChild: 0
    });
  }
};
const Cd = (t) => ({ builder: t & /*$checked*/
2 }), fs = (t) => ({ builder: (
  /*$checked*/
  t[1]
) });
function Sd(t) {
  let e, n, r = [
    {
      "data-state": n = /*$checked*/
      t[1] ? "checked" : "unchecked"
    },
    /*$$restProps*/
    t[3]
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return {
    c() {
      e = D("span"), ve(e, i);
    },
    m(s, o) {
      R(s, e, o);
    },
    p(s, o) {
      ve(e, i = we(r, [
        o & /*$checked*/
        2 && n !== (n = /*$checked*/
        s[1] ? "checked" : "unchecked") && { "data-state": n },
        o & /*$$restProps*/
        8 && /*$$restProps*/
        s[3]
      ]));
    },
    i: ne,
    o: ne,
    d(s) {
      s && N(e);
    }
  };
}
function xd(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[4],
    fs
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope, $checked*/
      18) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[4],
        e ? ae(
          n,
          /*$$scope*/
          i[4],
          s,
          Cd
        ) : ce(
          /*$$scope*/
          i[4]
        ),
        fs
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Ed(t) {
  let e, n, r, i;
  const s = [xd, Sd], o = [];
  function a(c, l) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = s[e](t), {
    c() {
      n.c(), r = Be();
    },
    m(c, l) {
      o[e].m(c, l), R(c, r, l), i = !0;
    },
    p(c, [l]) {
      let u = e;
      e = a(c), e === u ? o[e].p(c, l) : (je(), x(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(c, l) : (n = o[e] = s[e](c), n.c()), k(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      i || (k(n), i = !0);
    },
    o(c) {
      x(n), i = !1;
    },
    d(c) {
      c && N(r), o[e].d(c);
    }
  };
}
function Od(t, e, n) {
  const r = ["asChild"];
  let i = se(e, r), s, { $$slots: o = {}, $$scope: a } = e, { asChild: c = !1 } = e;
  const l = Lo.get().states.checked;
  return lt(t, l, (u) => n(1, s = u)), t.$$set = (u) => {
    e = M(M({}, e), Oe(u)), n(3, i = se(e, r)), "asChild" in u && n(0, c = u.asChild), "$$scope" in u && n(4, a = u.$$scope);
  }, [c, s, l, i, a, o];
}
class Ad extends fe {
  constructor(e) {
    super(), ue(this, e, Od, Ed, re, { asChild: 0 });
  }
}
function Nd(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope*/
      16) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[4],
        e ? ae(
          n,
          /*$$scope*/
          i[4],
          s,
          null
        ) : ce(
          /*$$scope*/
          i[4]
        ),
        null
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Rd(t) {
  let e, n;
  const r = [
    {
      class: He(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let i = {
    $$slots: { default: [Nd] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return e = new nf({ props: i }), e.$on(
    "mousedown",
    /*mousedown_handler*/
    t[3]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), n = !0;
    },
    p(s, [o]) {
      const a = o & /*cn, className, $$restProps*/
      3 ? we(r, [
        o & /*cn, className*/
        1 && {
          class: He(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            /*className*/
            s[0]
          )
        },
        o & /*$$restProps*/
        2 && pt(
          /*$$restProps*/
          s[1]
        )
      ]) : {};
      o & /*$$scope*/
      16 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
    },
    i(s) {
      n || (k(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      pe(e, s);
    }
  };
}
function Pd(t, e, n) {
  const r = ["class"];
  let i = se(e, r), { $$slots: s = {}, $$scope: o } = e, { class: a = void 0 } = e;
  function c(l) {
    Ce.call(this, t, l);
  }
  return t.$$set = (l) => {
    e = M(M({}, e), Oe(l)), n(1, i = se(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(4, o = l.$$scope);
  }, [a, i, s, c, o];
}
class ai extends fe {
  constructor(e) {
    super(), ue(this, e, Pd, Rd, re, { class: 0 });
  }
}
function Id(t) {
  let e;
  return {
    c() {
      e = Re(
        /*label*/
        t[1]
      );
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & /*label*/
      2 && Le(
        e,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && N(e);
    }
  };
}
function Md(t) {
  let e, n, r, i, s, o, a, c;
  return n = new ai({
    props: {
      for: (
        /*id*/
        t[0]
      ),
      $$slots: { default: [Id] },
      $$scope: { ctx: t }
    }
  }), i = new ql({
    props: {
      type: (
        /*type*/
        t[2]
      ),
      id: (
        /*id*/
        t[0]
      ),
      placeholder: (
        /*placeholder*/
        t[3]
      )
    }
  }), i.$on(
    "input",
    /*input_handler*/
    t[6]
  ), {
    c() {
      e = D("div"), ge(n.$$.fragment), r = Ee(), ge(i.$$.fragment), s = Ee(), o = D("div"), a = Re(
        /*msg*/
        t[4]
      ), I(o, "class", "text-red-500"), I(e, "class", "flex flex-col w-full max-w-sm gap-1.5");
    },
    m(l, u) {
      R(l, e, u), me(n, e, null), W(e, r), me(i, e, null), W(e, s), W(e, o), W(o, a), c = !0;
    },
    p(l, [u]) {
      const f = {};
      u & /*id*/
      1 && (f.for = /*id*/
      l[0]), u & /*$$scope, label*/
      130 && (f.$$scope = { dirty: u, ctx: l }), n.$set(f);
      const d = {};
      u & /*type*/
      4 && (d.type = /*type*/
      l[2]), u & /*id*/
      1 && (d.id = /*id*/
      l[0]), u & /*placeholder*/
      8 && (d.placeholder = /*placeholder*/
      l[3]), i.$set(d), (!c || u & /*msg*/
      16) && Le(
        a,
        /*msg*/
        l[4]
      );
    },
    i(l) {
      c || (k(n.$$.fragment, l), k(i.$$.fragment, l), c = !0);
    },
    o(l) {
      x(n.$$.fragment, l), x(i.$$.fragment, l), c = !1;
    },
    d(l) {
      l && N(e), pe(n), pe(i);
    }
  };
}
function Ld(t, e, n) {
  let { id: r = "" } = e, { label: i = "" } = e, { type: s = "text" } = e, { placeholder: o = "" } = e, { msg: a = "" } = e;
  const c = tn(), l = (u) => {
    c("onChange", { id: r, value: u.target.value });
  };
  return t.$$set = (u) => {
    "id" in u && n(0, r = u.id), "label" in u && n(1, i = u.label), "type" in u && n(2, s = u.type), "placeholder" in u && n(3, o = u.placeholder), "msg" in u && n(4, a = u.msg);
  }, [r, i, s, o, a, c, l];
}
class Dd extends fe {
  constructor(e) {
    super(), ue(this, e, Ld, Md, re, {
      id: 0,
      label: 1,
      type: 2,
      placeholder: 3,
      msg: 4
    });
  }
}
function ds(t, e, n) {
  const r = t.slice();
  return r[6] = e[n], r[8] = n, r;
}
function hs(t) {
  let e, n = (
    /*props*/
    t[0].label + ""
  ), r, i;
  return {
    c() {
      e = D("label"), r = Re(n), I(e, "class", "p-2"), I(e, "for", i = /*props*/
      t[0].name);
    },
    m(s, o) {
      R(s, e, o), W(e, r);
    },
    p(s, o) {
      o & /*props*/
      1 && n !== (n = /*props*/
      s[0].label + "") && Le(r, n), o & /*props*/
      1 && i !== (i = /*props*/
      s[0].name) && I(e, "for", i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function ms(t) {
  let e, n, r, i, s, o, a, c, l;
  function u(...f) {
    return (
      /*input_handler*/
      t[5](
        /*i*/
        t[8],
        ...f
      )
    );
  }
  return {
    c() {
      e = D("div"), n = D("input"), a = Ee(), I(n, "class", "w-full"), I(n, "type", "text"), I(n, "placeholder", "......"), I(n, "name", r = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`), I(n, "id", i = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`), n.required = !0, I(n, "minlength", s = /*props*/
      t[0].minlength || 6), I(n, "maxlength", o = /*props*/
      t[0].maxlength || 20), I(e, "class", "flex items-center border-2 py-2 p-2 rounded-2xl");
    },
    m(f, d) {
      R(f, e, d), W(e, n), W(e, a), c || (l = Q(n, "input", u), c = !0);
    },
    p(f, d) {
      t = f, d & /*props*/
      1 && r !== (r = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`) && I(n, "name", r), d & /*props*/
      1 && i !== (i = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`) && I(n, "id", i), d & /*props*/
      1 && s !== (s = /*props*/
      t[0].minlength || 6) && I(n, "minlength", s), d & /*props*/
      1 && o !== (o = /*props*/
      t[0].maxlength || 20) && I(n, "maxlength", o);
    },
    d(f) {
      f && N(e), c = !1, l();
    }
  };
}
function jd(t) {
  let e, n, r, i = (
    /*props*/
    t[0].icon + ""
  ), s, o, a, c, l, u, f, d, h, m, v = (
    /*props*/
    t[0].label && hs(t)
  ), p = ze(
    /*value*/
    t[1]
  ), g = [];
  for (let b = 0; b < p.length; b += 1)
    g[b] = ms(ds(t, p, b));
  return {
    c() {
      v && v.c(), e = Ee(), n = D("section"), r = new Vs(!1), s = Ee(), o = D("div"), o.textContent = "+", a = Ee(), c = D("textarea"), f = Ee();
      for (let b = 0; b < g.length; b += 1)
        g[b].c();
      d = Be(), r.a = s, I(o, "class", "btn btn-sm btn-circle"), I(c, "class", "outline-none hidden"), I(c, "name", l = /*props*/
      t[0].name), I(c, "id", u = /*props*/
      t[0].name);
    },
    m(b, w) {
      v && v.m(b, w), R(b, e, w), R(b, n, w), r.m(i, n), W(n, s), W(n, o), W(n, a), W(n, c), t[4](c), R(b, f, w);
      for (let T = 0; T < g.length; T += 1)
        g[T] && g[T].m(b, w);
      R(b, d, w), h || (m = Q(
        o,
        "click",
        /*addValue*/
        t[3]
      ), h = !0);
    },
    p(b, [w]) {
      if (/*props*/
      b[0].label ? v ? v.p(b, w) : (v = hs(b), v.c(), v.m(e.parentNode, e)) : v && (v.d(1), v = null), w & /*props*/
      1 && i !== (i = /*props*/
      b[0].icon + "") && r.p(i), w & /*props*/
      1 && l !== (l = /*props*/
      b[0].name) && I(c, "name", l), w & /*props*/
      1 && u !== (u = /*props*/
      b[0].name) && I(c, "id", u), w & /*props, value*/
      3) {
        p = ze(
          /*value*/
          b[1]
        );
        let T;
        for (T = 0; T < p.length; T += 1) {
          const j = ds(b, p, T);
          g[T] ? g[T].p(j, w) : (g[T] = ms(j), g[T].c(), g[T].m(d.parentNode, d));
        }
        for (; T < g.length; T += 1)
          g[T].d(1);
        g.length = p.length;
      }
    },
    i: ne,
    o: ne,
    d(b) {
      b && (N(e), N(n), N(f), N(d)), v && v.d(b), t[4](null), zt(g, b), h = !1, m();
    }
  };
}
function Zd(t, e, n) {
  let { props: r } = e, i = r.values || [], s;
  const o = () => {
    n(1, i = i.concat([""]));
  };
  function a(l) {
    rt[l ? "unshift" : "push"](() => {
      s = l, n(2, s), n(1, i);
    });
  }
  const c = (l, u) => {
    n(1, i[l] = u.target.value, i);
  };
  return t.$$set = (l) => {
    "props" in l && n(0, r = l.props);
  }, t.$$.update = () => {
    t.$$.dirty & /*inputRef, value*/
    6 && s && n(2, s.value = i.join(`
`), s);
  }, [r, i, s, o, a, c];
}
class Fd extends fe {
  constructor(e) {
    super(), ue(this, e, Zd, jd, re, { props: 0 });
  }
}
function ps(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r[6] = n, r;
}
function gs(t) {
  let e, n = (
    /*props*/
    t[0].label + ""
  ), r, i;
  return {
    c() {
      e = D("label"), r = Re(n), I(e, "class", "p-2"), I(e, "for", i = /*props*/
      t[0].name);
    },
    m(s, o) {
      R(s, e, o), W(e, r);
    },
    p(s, o) {
      o & /*props*/
      1 && n !== (n = /*props*/
      s[0].label + "") && Le(r, n), o & /*props*/
      1 && i !== (i = /*props*/
      s[0].name) && I(e, "for", i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function bs(t) {
  let e, n = (
    /*item*/
    t[4] + ""
  );
  return {
    c() {
      e = D("div");
    },
    m(r, i) {
      R(r, e, i), e.innerHTML = n;
    },
    p(r, i) {
      i & /*curElement*/
      2 && n !== (n = /*item*/
      r[4] + "") && (e.innerHTML = n);
    },
    d(r) {
      r && N(e);
    }
  };
}
function zd(t) {
  let e, n, r, i = (
    /*props*/
    t[0].icon + ""
  ), s, o, a, c, l, u, f = (
    /*props*/
    t[0].label && gs(t)
  ), d = ze(
    /*curElement*/
    t[1]
  ), h = [];
  for (let m = 0; m < d.length; m += 1)
    h[m] = bs(ps(t, d, m));
  return {
    c() {
      f && f.c(), e = Ee(), n = D("section"), r = new Vs(!1), s = Ee(), o = D("div"), o.textContent = "+", a = Ee(), c = D("div");
      for (let m = 0; m < h.length; m += 1)
        h[m].c();
      r.a = s, I(o, "class", "btn btn-sm btn-circle"), I(c, "class", "flex flex-col border-2 rounded-2xl");
    },
    m(m, v) {
      f && f.m(m, v), R(m, e, v), R(m, n, v), r.m(i, n), W(n, s), W(n, o), R(m, a, v), R(m, c, v);
      for (let p = 0; p < h.length; p += 1)
        h[p] && h[p].m(c, null);
      l || (u = Q(
        o,
        "click",
        /*addValue*/
        t[2]
      ), l = !0);
    },
    p(m, [v]) {
      if (/*props*/
      m[0].label ? f ? f.p(m, v) : (f = gs(m), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), v & /*props*/
      1 && i !== (i = /*props*/
      m[0].icon + "") && r.p(i), v & /*curElement*/
      2) {
        d = ze(
          /*curElement*/
          m[1]
        );
        let p;
        for (p = 0; p < d.length; p += 1) {
          const g = ps(m, d, p);
          h[p] ? h[p].p(g, v) : (h[p] = bs(g), h[p].c(), h[p].m(c, null));
        }
        for (; p < h.length; p += 1)
          h[p].d(1);
        h.length = d.length;
      }
    },
    i: ne,
    o: ne,
    d(m) {
      m && (N(e), N(n), N(a), N(c)), f && f.d(m), zt(h, m), l = !1, u();
    }
  };
}
function Bd(t, e, n) {
  let { props: r } = e, i = [];
  if (r.times)
    for (let a = 0; a < r.times; a++)
      i.push(r.element(a));
  let s = i;
  const o = () => {
    n(1, s = s.concat([r.element(s.length)]));
  };
  return t.$$set = (a) => {
    "props" in a && n(0, r = a.props);
  }, [r, s, o];
}
class Vd extends fe {
  constructor(e) {
    super(), ue(this, e, Bd, zd, re, { props: 0 });
  }
}
function Wd(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope*/
      64) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[6],
        e ? ae(
          n,
          /*$$scope*/
          i[6],
          s,
          null
        ) : ce(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Ud(t) {
  let e, n, r, i;
  const s = [
    /*$$restProps*/
    t[2]
  ];
  function o(l) {
    t[4](l);
  }
  function a(l) {
    t[5](l);
  }
  let c = {
    $$slots: { default: [Wd] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < s.length; l += 1)
    c = M(c, s[l]);
  return (
    /*selected*/
    t[0] !== void 0 && (c.selected = /*selected*/
    t[0]), /*open*/
    t[1] !== void 0 && (c.open = /*open*/
    t[1]), e = new df({ props: c }), rt.push(() => cr(e, "selected", o)), rt.push(() => cr(e, "open", a)), {
      c() {
        ge(e.$$.fragment);
      },
      m(l, u) {
        me(e, l, u), i = !0;
      },
      p(l, [u]) {
        const f = u & /*$$restProps*/
        4 ? we(s, [pt(
          /*$$restProps*/
          l[2]
        )]) : {};
        u & /*$$scope*/
        64 && (f.$$scope = { dirty: u, ctx: l }), !n && u & /*selected*/
        1 && (n = !0, f.selected = /*selected*/
        l[0], lr(() => n = !1)), !r && u & /*open*/
        2 && (r = !0, f.open = /*open*/
        l[1], lr(() => r = !1)), e.$set(f);
      },
      i(l) {
        i || (k(e.$$.fragment, l), i = !0);
      },
      o(l) {
        x(e.$$.fragment, l), i = !1;
      },
      d(l) {
        pe(e, l);
      }
    }
  );
}
function Gd(t, e, n) {
  const r = ["selected", "open"];
  let i = se(e, r), { $$slots: s = {}, $$scope: o } = e, { selected: a = void 0 } = e, { open: c = void 0 } = e;
  function l(f) {
    a = f, n(0, a);
  }
  function u(f) {
    c = f, n(1, c);
  }
  return t.$$set = (f) => {
    e = M(M({}, e), Oe(f)), n(2, i = se(e, r)), "selected" in f && n(0, a = f.selected), "open" in f && n(1, c = f.open), "$$scope" in f && n(6, o = f.$$scope);
  }, [
    a,
    c,
    i,
    s,
    l,
    u,
    o
  ];
}
class qd extends fe {
  constructor(e) {
    super(), ue(this, e, Gd, Ud, re, { selected: 0, open: 1 });
  }
}
const vs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function _s(t, e, n) {
  const r = t.slice();
  return r[10] = e[n][0], r[11] = e[n][1], r;
}
function Nr(t) {
  let e, n = [
    /*attrs*/
    t[11]
  ], r = {};
  for (let i = 0; i < n.length; i += 1)
    r = M(r, n[i]);
  return {
    c() {
      e = Yr(
        /*tag*/
        t[10]
      ), rr(e, r);
    },
    m(i, s) {
      R(i, e, s);
    },
    p(i, s) {
      rr(e, r = we(n, [s & /*iconNode*/
      32 && /*attrs*/
      i[11]]));
    },
    d(i) {
      i && N(e);
    }
  };
}
function ys(t) {
  let e = (
    /*tag*/
    t[10]
  ), n, r = (
    /*tag*/
    t[10] && Nr(t)
  );
  return {
    c() {
      r && r.c(), n = Be();
    },
    m(i, s) {
      r && r.m(i, s), R(i, n, s);
    },
    p(i, s) {
      /*tag*/
      i[10] ? e ? re(
        e,
        /*tag*/
        i[10]
      ) ? (r.d(1), r = Nr(i), e = /*tag*/
      i[10], r.c(), r.m(n.parentNode, n)) : r.p(i, s) : (r = Nr(i), e = /*tag*/
      i[10], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      i[10]);
    },
    d(i) {
      i && N(n), r && r.d(i);
    }
  };
}
function Hd(t) {
  let e, n, r, i, s, o = ze(
    /*iconNode*/
    t[5]
  ), a = [];
  for (let d = 0; d < o.length; d += 1)
    a[d] = ys(_s(t, o, d));
  const c = (
    /*#slots*/
    t[9].default
  ), l = oe(
    c,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    vs,
    /*$$restProps*/
    t[6],
    { width: (
      /*size*/
      t[2]
    ) },
    { height: (
      /*size*/
      t[2]
    ) },
    { stroke: (
      /*color*/
      t[1]
    ) },
    {
      "stroke-width": r = /*absoluteStrokeWidth*/
      t[4] ? Number(
        /*strokeWidth*/
        t[3]
      ) * 24 / Number(
        /*size*/
        t[2]
      ) : (
        /*strokeWidth*/
        t[3]
      )
    },
    {
      class: i = `lucide-icon lucide lucide-${/*name*/
      t[0]} ${/*$$props*/
      t[7].class ?? ""}`
    }
  ], f = {};
  for (let d = 0; d < u.length; d += 1)
    f = M(f, u[d]);
  return {
    c() {
      e = Yr("svg");
      for (let d = 0; d < a.length; d += 1)
        a[d].c();
      n = Be(), l && l.c(), rr(e, f);
    },
    m(d, h) {
      R(d, e, h);
      for (let m = 0; m < a.length; m += 1)
        a[m] && a[m].m(e, null);
      W(e, n), l && l.m(e, null), s = !0;
    },
    p(d, [h]) {
      if (h & /*iconNode*/
      32) {
        o = ze(
          /*iconNode*/
          d[5]
        );
        let m;
        for (m = 0; m < o.length; m += 1) {
          const v = _s(d, o, m);
          a[m] ? a[m].p(v, h) : (a[m] = ys(v), a[m].c(), a[m].m(e, n));
        }
        for (; m < a.length; m += 1)
          a[m].d(1);
        a.length = o.length;
      }
      l && l.p && (!s || h & /*$$scope*/
      256) && le(
        l,
        c,
        d,
        /*$$scope*/
        d[8],
        s ? ae(
          c,
          /*$$scope*/
          d[8],
          h,
          null
        ) : ce(
          /*$$scope*/
          d[8]
        ),
        null
      ), rr(e, f = we(u, [
        vs,
        h & /*$$restProps*/
        64 && /*$$restProps*/
        d[6],
        (!s || h & /*size*/
        4) && { width: (
          /*size*/
          d[2]
        ) },
        (!s || h & /*size*/
        4) && { height: (
          /*size*/
          d[2]
        ) },
        (!s || h & /*color*/
        2) && { stroke: (
          /*color*/
          d[1]
        ) },
        (!s || h & /*absoluteStrokeWidth, strokeWidth, size*/
        28 && r !== (r = /*absoluteStrokeWidth*/
        d[4] ? Number(
          /*strokeWidth*/
          d[3]
        ) * 24 / Number(
          /*size*/
          d[2]
        ) : (
          /*strokeWidth*/
          d[3]
        ))) && { "stroke-width": r },
        (!s || h & /*name, $$props*/
        129 && i !== (i = `lucide-icon lucide lucide-${/*name*/
        d[0]} ${/*$$props*/
        d[7].class ?? ""}`)) && { class: i }
      ]));
    },
    i(d) {
      s || (k(l, d), s = !0);
    },
    o(d) {
      x(l, d), s = !1;
    },
    d(d) {
      d && N(e), zt(a, d), l && l.d(d);
    }
  };
}
function Kd(t, e, n) {
  const r = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
  let i = se(e, r), { $$slots: s = {}, $$scope: o } = e, { name: a } = e, { color: c = "currentColor" } = e, { size: l = 24 } = e, { strokeWidth: u = 2 } = e, { absoluteStrokeWidth: f = !1 } = e, { iconNode: d } = e;
  return t.$$set = (h) => {
    n(7, e = M(M({}, e), Oe(h))), n(6, i = se(e, r)), "name" in h && n(0, a = h.name), "color" in h && n(1, c = h.color), "size" in h && n(2, l = h.size), "strokeWidth" in h && n(3, u = h.strokeWidth), "absoluteStrokeWidth" in h && n(4, f = h.absoluteStrokeWidth), "iconNode" in h && n(5, d = h.iconNode), "$$scope" in h && n(8, o = h.$$scope);
  }, e = Oe(e), [
    a,
    c,
    l,
    u,
    f,
    d,
    i,
    e,
    o,
    s
  ];
}
class Yd extends fe {
  constructor(e) {
    super(), ue(this, e, Kd, Hd, re, {
      name: 0,
      color: 1,
      size: 2,
      strokeWidth: 3,
      absoluteStrokeWidth: 4,
      iconNode: 5
    });
  }
}
const Do = Yd;
function Xd(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope*/
      8) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[3],
        e ? ae(
          n,
          /*$$scope*/
          i[3],
          s,
          null
        ) : ce(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Jd(t) {
  let e, n;
  const r = [
    { name: "check" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let i = {
    $$slots: { default: [Xd] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return e = new Do({ props: i }), {
    c() {
      ge(e.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), n = !0;
    },
    p(s, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? we(r, [
        r[0],
        o & /*$$props*/
        2 && pt(
          /*$$props*/
          s[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          s[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
    },
    i(s) {
      n || (k(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      pe(e, s);
    }
  };
}
function Qd(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e;
  const s = [["polyline", { points: "20 6 9 17 4 12" }]];
  return t.$$set = (o) => {
    n(1, e = M(M({}, e), Oe(o))), "$$scope" in o && n(3, i = o.$$scope);
  }, e = Oe(e), [s, e, r, i];
}
class $d extends fe {
  constructor(e) {
    super(), ue(this, e, Qd, Jd, re, {});
  }
}
const eh = $d;
function th(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = oe(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), e = !0;
    },
    p(i, s) {
      r && r.p && (!e || s & /*$$scope*/
      8) && le(
        r,
        n,
        i,
        /*$$scope*/
        i[3],
        e ? ae(
          n,
          /*$$scope*/
          i[3],
          s,
          null
        ) : ce(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (k(r, i), e = !0);
    },
    o(i) {
      x(r, i), e = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function nh(t) {
  let e, n;
  const r = [
    { name: "chevron-down" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let i = {
    $$slots: { default: [th] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return e = new Do({ props: i }), {
    c() {
      ge(e.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), n = !0;
    },
    p(s, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? we(r, [
        r[0],
        o & /*$$props*/
        2 && pt(
          /*$$props*/
          s[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          s[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
    },
    i(s) {
      n || (k(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      pe(e, s);
    }
  };
}
function rh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e;
  const s = [["path", { d: "m6 9 6 6 6-6" }]];
  return t.$$set = (o) => {
    n(1, e = M(M({}, e), Oe(o))), "$$scope" in o && n(3, i = o.$$scope);
  }, e = Oe(e), [s, e, r, i];
}
class ih extends fe {
  constructor(e) {
    super(), ue(this, e, rh, nh, re, {});
  }
}
const sh = ih;
function oh(t) {
  let e, n;
  return e = new eh({ props: { class: "h-4 w-4" } }), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p: ne,
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function ah(t) {
  let e, n, r, i;
  n = new $f({
    props: {
      $$slots: { default: [oh] },
      $$scope: { ctx: t }
    }
  });
  const s = (
    /*#slots*/
    t[5].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = D("span"), ge(n.$$.fragment), r = Ee(), o && o.c(), I(e, "class", "absolute left-2 flex h-3.5 w-3.5 items-center justify-center");
    },
    m(a, c) {
      R(a, e, c), me(n, e, null), R(a, r, c), o && o.m(a, c), i = !0;
    },
    p(a, c) {
      const l = {};
      c & /*$$scope*/
      4096 && (l.$$scope = { dirty: c, ctx: a }), n.$set(l), o && o.p && (!i || c & /*$$scope*/
      4096) && le(
        o,
        s,
        a,
        /*$$scope*/
        a[12],
        i ? ae(
          s,
          /*$$scope*/
          a[12],
          c,
          null
        ) : ce(
          /*$$scope*/
          a[12]
        ),
        null
      );
    },
    i(a) {
      i || (k(n.$$.fragment, a), k(o, a), i = !0);
    },
    o(a) {
      x(n.$$.fragment, a), x(o, a), i = !1;
    },
    d(a) {
      a && (N(e), N(r)), pe(n), o && o.d(a);
    }
  };
}
function lh(t) {
  let e, n;
  const r = [
    { value: (
      /*value*/
      t[1]
    ) },
    { disabled: (
      /*disabled*/
      t[3]
    ) },
    { label: (
      /*label*/
      t[2]
    ) },
    {
      class: He(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[4]
  ];
  let i = {
    $$slots: { default: [ah] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return e = new Xf({ props: i }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), e.$on(
    "focusin",
    /*focusin_handler*/
    t[8]
  ), e.$on(
    "focusout",
    /*focusout_handler*/
    t[9]
  ), e.$on(
    "pointerleave",
    /*pointerleave_handler*/
    t[10]
  ), e.$on(
    "pointermove",
    /*pointermove_handler*/
    t[11]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), n = !0;
    },
    p(s, [o]) {
      const a = o & /*value, disabled, label, cn, className, $$restProps*/
      31 ? we(r, [
        o & /*value*/
        2 && { value: (
          /*value*/
          s[1]
        ) },
        o & /*disabled*/
        8 && { disabled: (
          /*disabled*/
          s[3]
        ) },
        o & /*label*/
        4 && { label: (
          /*label*/
          s[2]
        ) },
        o & /*cn, className*/
        1 && {
          class: He(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            /*className*/
            s[0]
          )
        },
        o & /*$$restProps*/
        16 && pt(
          /*$$restProps*/
          s[4]
        )
      ]) : {};
      o & /*$$scope*/
      4096 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
    },
    i(s) {
      n || (k(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      pe(e, s);
    }
  };
}
function ch(t, e, n) {
  const r = ["class", "value", "label", "disabled"];
  let i = se(e, r), { $$slots: s = {}, $$scope: o } = e, { class: a = void 0 } = e, { value: c } = e, { label: l = void 0 } = e, { disabled: u = void 0 } = e;
  function f(g) {
    Ce.call(this, t, g);
  }
  function d(g) {
    Ce.call(this, t, g);
  }
  function h(g) {
    Ce.call(this, t, g);
  }
  function m(g) {
    Ce.call(this, t, g);
  }
  function v(g) {
    Ce.call(this, t, g);
  }
  function p(g) {
    Ce.call(this, t, g);
  }
  return t.$$set = (g) => {
    e = M(M({}, e), Oe(g)), n(4, i = se(e, r)), "class" in g && n(0, a = g.class), "value" in g && n(1, c = g.value), "label" in g && n(2, l = g.label), "disabled" in g && n(3, u = g.disabled), "$$scope" in g && n(12, o = g.$$scope);
  }, [
    a,
    c,
    l,
    u,
    i,
    s,
    f,
    d,
    h,
    m,
    v,
    p,
    o
  ];
}
class uh extends fe {
  constructor(e) {
    super(), ue(this, e, ch, lh, re, {
      class: 0,
      value: 1,
      label: 2,
      disabled: 3
    });
  }
}
function fh(t, { delay: e = 0, duration: n = 400, easing: r = ro, start: i = 0, opacity: s = 0 } = {}) {
  const o = getComputedStyle(t), a = +o.opacity, c = o.transform === "none" ? "" : o.transform, l = 1 - i, u = a * (1 - s);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (f, d) => `
			transform: ${c} scale(${1 - l * d});
			opacity: ${a - u * d}
		`
  };
}
function dh(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[6].default
  ), i = oe(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = D("div"), i && i.c(), I(e, "class", "w-full p-1");
    },
    m(s, o) {
      R(s, e, o), i && i.m(e, null), n = !0;
    },
    p(s, o) {
      i && i.p && (!n || o & /*$$scope*/
      256) && le(
        i,
        r,
        s,
        /*$$scope*/
        s[8],
        n ? ae(
          r,
          /*$$scope*/
          s[8],
          o,
          null
        ) : ce(
          /*$$scope*/
          s[8]
        ),
        null
      );
    },
    i(s) {
      n || (k(i, s), n = !0);
    },
    o(s) {
      x(i, s), n = !1;
    },
    d(s) {
      s && N(e), i && i.d(s);
    }
  };
}
function hh(t) {
  let e, n;
  const r = [
    { inTransition: (
      /*inTransition*/
      t[0]
    ) },
    {
      inTransitionConfig: (
        /*inTransitionConfig*/
        t[1]
      )
    },
    { outTransition: (
      /*outTransition*/
      t[2]
    ) },
    {
      outTransitionConfig: (
        /*outTransitionConfig*/
        t[3]
      )
    },
    {
      class: He(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
        /*className*/
        t[4]
      )
    },
    /*$$restProps*/
    t[5]
  ];
  let i = {
    $$slots: { default: [dh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return e = new If({ props: i }), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), n = !0;
    },
    p(s, [o]) {
      const a = o & /*inTransition, inTransitionConfig, outTransition, outTransitionConfig, cn, className, $$restProps*/
      63 ? we(r, [
        o & /*inTransition*/
        1 && { inTransition: (
          /*inTransition*/
          s[0]
        ) },
        o & /*inTransitionConfig*/
        2 && {
          inTransitionConfig: (
            /*inTransitionConfig*/
            s[1]
          )
        },
        o & /*outTransition*/
        4 && { outTransition: (
          /*outTransition*/
          s[2]
        ) },
        o & /*outTransitionConfig*/
        8 && {
          outTransitionConfig: (
            /*outTransitionConfig*/
            s[3]
          )
        },
        o & /*cn, className*/
        16 && {
          class: He(
            "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
            /*className*/
            s[4]
          )
        },
        o & /*$$restProps*/
        32 && pt(
          /*$$restProps*/
          s[5]
        )
      ]) : {};
      o & /*$$scope*/
      256 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
    },
    i(s) {
      n || (k(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      pe(e, s);
    }
  };
}
function mh(t, e, n) {
  const r = [
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "class"
  ];
  let i = se(e, r), { $$slots: s = {}, $$scope: o } = e, { inTransition: a = Wl } = e, { inTransitionConfig: c = void 0 } = e, { outTransition: l = fh } = e, { outTransitionConfig: u = { start: 0.95, opacity: 0, duration: 50 } } = e, { class: f = void 0 } = e;
  function d(h) {
    Ce.call(this, t, h);
  }
  return t.$$set = (h) => {
    e = M(M({}, e), Oe(h)), n(5, i = se(e, r)), "inTransition" in h && n(0, a = h.inTransition), "inTransitionConfig" in h && n(1, c = h.inTransitionConfig), "outTransition" in h && n(2, l = h.outTransition), "outTransitionConfig" in h && n(3, u = h.outTransitionConfig), "class" in h && n(4, f = h.class), "$$scope" in h && n(8, o = h.$$scope);
  }, [
    a,
    c,
    l,
    u,
    f,
    i,
    s,
    d,
    o
  ];
}
class ph extends fe {
  constructor(e) {
    super(), ue(this, e, mh, hh, re, {
      inTransition: 0,
      inTransitionConfig: 1,
      outTransition: 2,
      outTransitionConfig: 3,
      class: 4
    });
  }
}
const gh = (t) => ({ builder: t & /*builder*/
64 }), ws = (t) => ({ builder: (
  /*builder*/
  t[6]
) });
function bh(t) {
  let e, n, r, i;
  const s = (
    /*#slots*/
    t[2].default
  ), o = oe(
    s,
    t,
    /*$$scope*/
    t[5],
    ws
  );
  return r = new sh({ props: { class: "h-4 w-4 opacity-50" } }), {
    c() {
      o && o.c(), e = Ee(), n = D("div"), ge(r.$$.fragment);
    },
    m(a, c) {
      o && o.m(a, c), R(a, e, c), R(a, n, c), me(r, n, null), i = !0;
    },
    p(a, c) {
      o && o.p && (!i || c & /*$$scope, builder*/
      96) && le(
        o,
        s,
        a,
        /*$$scope*/
        a[5],
        i ? ae(
          s,
          /*$$scope*/
          a[5],
          c,
          gh
        ) : ce(
          /*$$scope*/
          a[5]
        ),
        ws
      );
    },
    i(a) {
      i || (k(o, a), k(r.$$.fragment, a), i = !0);
    },
    o(a) {
      x(o, a), x(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && (N(e), N(n)), o && o.d(a), pe(r);
    }
  };
}
function vh(t) {
  let e, n;
  const r = [
    {
      class: He(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let i = {
    $$slots: {
      default: [
        bh,
        ({ builder: s }) => ({ 6: s }),
        ({ builder: s }) => s ? 64 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    i = M(i, r[s]);
  return e = new ad({ props: i }), e.$on(
    "click",
    /*click_handler*/
    t[3]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[4]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), n = !0;
    },
    p(s, [o]) {
      const a = o & /*cn, className, $$restProps*/
      3 ? we(r, [
        o & /*cn, className*/
        1 && {
          class: He(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            /*className*/
            s[0]
          )
        },
        o & /*$$restProps*/
        2 && pt(
          /*$$restProps*/
          s[1]
        )
      ]) : {};
      o & /*$$scope, builder*/
      96 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
    },
    i(s) {
      n || (k(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      pe(e, s);
    }
  };
}
function _h(t, e, n) {
  const r = ["class"];
  let i = se(e, r), { $$slots: s = {}, $$scope: o } = e, { class: a = void 0 } = e;
  function c(u) {
    Ce.call(this, t, u);
  }
  function l(u) {
    Ce.call(this, t, u);
  }
  return t.$$set = (u) => {
    e = M(M({}, e), Oe(u)), n(1, i = se(e, r)), "class" in u && n(0, a = u.class), "$$scope" in u && n(5, o = u.$$scope);
  }, [a, i, s, c, l, o];
}
class yh extends fe {
  constructor(e) {
    super(), ue(this, e, _h, vh, re, { class: 0 });
  }
}
const wh = Bf, kh = hd;
function ks(t, e, n) {
  const r = t.slice();
  return r[9] = e[n], r;
}
function Th(t) {
  let e;
  return {
    c() {
      e = Re(
        /*label*/
        t[2]
      );
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & /*label*/
      4 && Le(
        e,
        /*label*/
        n[2]
      );
    },
    d(n) {
      n && N(e);
    }
  };
}
function Ch(t) {
  let e, n, r;
  function i(o) {
    t[7](o);
  }
  let s = {
    id: (
      /*id*/
      t[0]
    ),
    placeholder: (
      /*placeholder*/
      t[3]
    )
  };
  return (
    /*selected*/
    t[5] !== void 0 && (s.value = /*selected*/
    t[5]), e = new kh({ props: s }), rt.push(() => cr(e, "value", i)), {
      c() {
        ge(e.$$.fragment);
      },
      m(o, a) {
        me(e, o, a), r = !0;
      },
      p(o, a) {
        const c = {};
        a & /*id*/
        1 && (c.id = /*id*/
        o[0]), a & /*placeholder*/
        8 && (c.placeholder = /*placeholder*/
        o[3]), !n && a & /*selected*/
        32 && (n = !0, c.value = /*selected*/
        o[5], lr(() => n = !1)), e.$set(c);
      },
      i(o) {
        r || (k(e.$$.fragment, o), r = !0);
      },
      o(o) {
        x(e.$$.fragment, o), r = !1;
      },
      d(o) {
        pe(e, o);
      }
    }
  );
}
function Sh(t) {
  let e = (
    /*item*/
    t[9].label + ""
  ), n;
  return {
    c() {
      n = Re(e);
    },
    m(r, i) {
      R(r, n, i);
    },
    p(r, i) {
      i & /*values*/
      16 && e !== (e = /*item*/
      r[9].label + "") && Le(n, e);
    },
    d(r) {
      r && N(n);
    }
  };
}
function Ts(t) {
  let e, n;
  return e = new uh({
    props: {
      value: (
        /*item*/
        t[9].label
      ),
      label: (
        /*item*/
        t[9].label
      ),
      $$slots: { default: [Sh] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*values*/
      16 && (s.value = /*item*/
      r[9].label), i & /*values*/
      16 && (s.label = /*item*/
      r[9].label), i & /*$$scope, values*/
      4112 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function xh(t) {
  let e, n, r = ze(
    /*values*/
    t[4]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Ts(ks(t, r, o));
  const s = (o) => x(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      e = Be();
    },
    m(o, a) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(o, a);
      R(o, e, a), n = !0;
    },
    p(o, a) {
      if (a & /*values, selected, dispatch, id*/
      113) {
        r = ze(
          /*values*/
          o[4]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = ks(o, r, c);
          i[c] ? (i[c].p(l, a), k(i[c], 1)) : (i[c] = Ts(l), i[c].c(), k(i[c], 1), i[c].m(e.parentNode, e));
        }
        for (je(), c = r.length; c < i.length; c += 1)
          s(c);
        Ze();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          k(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        x(i[a]);
      n = !1;
    },
    d(o) {
      o && N(e), zt(i, o);
    }
  };
}
function Eh(t) {
  let e, n;
  return e = new wh({
    props: {
      $$slots: { default: [xh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$$scope, values, selected, id*/
      4145 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function Oh(t) {
  let e, n, r, i;
  return e = new yh({
    props: {
      $$slots: { default: [Ch] },
      $$scope: { ctx: t }
    }
  }), r = new ph({
    props: {
      $$slots: { default: [Eh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ge(e.$$.fragment), n = Ee(), ge(r.$$.fragment);
    },
    m(s, o) {
      me(e, s, o), R(s, n, o), me(r, s, o), i = !0;
    },
    p(s, o) {
      const a = {};
      o & /*$$scope, id, placeholder, selected*/
      4137 && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
      const c = {};
      o & /*$$scope, values, selected, id*/
      4145 && (c.$$scope = { dirty: o, ctx: s }), r.$set(c);
    },
    i(s) {
      i || (k(e.$$.fragment, s), k(r.$$.fragment, s), i = !0);
    },
    o(s) {
      x(e.$$.fragment, s), x(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(n), pe(e, s), pe(r, s);
    }
  };
}
function Ah(t) {
  let e, n, r, i, s, o, a, c;
  return n = new ai({
    props: {
      for: (
        /*id*/
        t[0]
      ),
      $$slots: { default: [Th] },
      $$scope: { ctx: t }
    }
  }), i = new qd({
    props: {
      $$slots: { default: [Oh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = D("div"), ge(n.$$.fragment), r = Ee(), ge(i.$$.fragment), s = Ee(), o = D("div"), a = Re(
        /*msg*/
        t[1]
      ), I(o, "class", "text-red-500"), I(e, "class", "flex flex-col w-full max-w-sm gap-1.5");
    },
    m(l, u) {
      R(l, e, u), me(n, e, null), W(e, r), me(i, e, null), W(e, s), W(e, o), W(o, a), c = !0;
    },
    p(l, [u]) {
      const f = {};
      u & /*id*/
      1 && (f.for = /*id*/
      l[0]), u & /*$$scope, label*/
      4100 && (f.$$scope = { dirty: u, ctx: l }), n.$set(f);
      const d = {};
      u & /*$$scope, values, selected, id, placeholder*/
      4153 && (d.$$scope = { dirty: u, ctx: l }), i.$set(d), (!c || u & /*msg*/
      2) && Le(
        a,
        /*msg*/
        l[1]
      );
    },
    i(l) {
      c || (k(n.$$.fragment, l), k(i.$$.fragment, l), c = !0);
    },
    o(l) {
      x(n.$$.fragment, l), x(i.$$.fragment, l), c = !1;
    },
    d(l) {
      l && N(e), pe(n), pe(i);
    }
  };
}
function Nh(t, e, n) {
  const r = tn();
  let { id: i = "" } = e, { msg: s = "" } = e, { label: o = "" } = e, { placeholder: a = "Select a value" } = e, { values: c = [{ value: "", label: "empty" }] } = e, l;
  function u(d) {
    l = d, n(5, l);
  }
  const f = (d) => {
    n(5, l = d.detail.currentTarget.innerText), r("onChange", { id: i, value: l });
  };
  return t.$$set = (d) => {
    "id" in d && n(0, i = d.id), "msg" in d && n(1, s = d.msg), "label" in d && n(2, o = d.label), "placeholder" in d && n(3, a = d.placeholder), "values" in d && n(4, c = d.values);
  }, [
    i,
    s,
    o,
    a,
    c,
    l,
    r,
    u,
    f
  ];
}
class Rh extends fe {
  constructor(e) {
    super(), ue(this, e, Nh, Ah, re, {
      id: 0,
      msg: 1,
      label: 2,
      placeholder: 3,
      values: 4
    });
  }
}
function Ph(t) {
  let e, n, r, i;
  return {
    c() {
      e = D("div"), n = D("button"), r = Re(
        /*title*/
        t[0]
      ), I(n, "type", "submit"), n.disabled = /*disable*/
      t[1], I(n, "class", i = `block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold ${/*disable*/
      t[1] ? "bg-gray-500 cursor-not-allowed" : ""}`), I(e, "class", "space-y-2");
    },
    m(s, o) {
      R(s, e, o), W(e, n), W(n, r);
    },
    p(s, [o]) {
      o & /*title*/
      1 && Le(
        r,
        /*title*/
        s[0]
      ), o & /*disable*/
      2 && (n.disabled = /*disable*/
      s[1]), o & /*disable*/
      2 && i !== (i = `block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold ${/*disable*/
      s[1] ? "bg-gray-500 cursor-not-allowed" : ""}`) && I(n, "class", i);
    },
    i: ne,
    o: ne,
    d(s) {
      s && N(e);
    }
  };
}
function Ih(t, e, n) {
  let { title: r } = e, { disable: i } = e;
  return t.$$set = (s) => {
    "title" in s && n(0, r = s.title), "disable" in s && n(1, i = s.disable);
  }, [r, i];
}
class Mh extends fe {
  constructor(e) {
    super(), ue(this, e, Ih, Ph, re, { title: 0, disable: 1 });
  }
}
function Lh(t) {
  let e, n;
  return e = new Ad({
    props: {
      class: He("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    }
  }), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p: ne,
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function Dh(t) {
  let e, n, r;
  const i = [
    {
      class: He(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  function s(a) {
    t[3](a);
  }
  let o = {
    $$slots: { default: [Lh] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    o = M(o, i[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (o.checked = /*checked*/
    t[0]), e = new Td({ props: o }), rt.push(() => cr(e, "checked", s)), {
      c() {
        ge(e.$$.fragment);
      },
      m(a, c) {
        me(e, a, c), r = !0;
      },
      p(a, [c]) {
        const l = c & /*cn, className, $$restProps*/
        6 ? we(i, [
          c & /*cn, className*/
          2 && {
            class: He(
              "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
              /*className*/
              a[1]
            )
          },
          c & /*$$restProps*/
          4 && pt(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        c & /*$$scope*/
        16 && (l.$$scope = { dirty: c, ctx: a }), !n && c & /*checked*/
        1 && (n = !0, l.checked = /*checked*/
        a[0], lr(() => n = !1)), e.$set(l);
      },
      i(a) {
        r || (k(e.$$.fragment, a), r = !0);
      },
      o(a) {
        x(e.$$.fragment, a), r = !1;
      },
      d(a) {
        pe(e, a);
      }
    }
  );
}
function jh(t, e, n) {
  const r = ["class", "checked"];
  let i = se(e, r), { class: s = void 0 } = e, { checked: o = void 0 } = e;
  function a(c) {
    o = c, n(0, o);
  }
  return t.$$set = (c) => {
    e = M(M({}, e), Oe(c)), n(2, i = se(e, r)), "class" in c && n(1, s = c.class), "checked" in c && n(0, o = c.checked);
  }, [o, s, i, a];
}
class Zh extends fe {
  constructor(e) {
    super(), ue(this, e, jh, Dh, re, { class: 1, checked: 0 });
  }
}
function Fh(t) {
  let e;
  return {
    c() {
      e = Re(
        /*label*/
        t[0]
      );
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & /*label*/
      1 && Le(
        e,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && N(e);
    }
  };
}
function zh(t) {
  let e, n, r, i, s;
  return n = new Zh({ props: { id: "airplane-mode" } }), i = new ai({
    props: {
      for: "airplane-mode",
      $$slots: { default: [Fh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = D("div"), ge(n.$$.fragment), r = Ee(), ge(i.$$.fragment), I(e, "class", "flex items-center space-x-2");
    },
    m(o, a) {
      R(o, e, a), me(n, e, null), W(e, r), me(i, e, null), s = !0;
    },
    p(o, [a]) {
      const c = {};
      a & /*$$scope, label*/
      3 && (c.$$scope = { dirty: a, ctx: o }), i.$set(c);
    },
    i(o) {
      s || (k(n.$$.fragment, o), k(i.$$.fragment, o), s = !0);
    },
    o(o) {
      x(n.$$.fragment, o), x(i.$$.fragment, o), s = !1;
    },
    d(o) {
      o && N(e), pe(n), pe(i);
    }
  };
}
function Bh(t, e, n) {
  let { label: r = "" } = e;
  return t.$$set = (i) => {
    "label" in i && n(0, r = i.label);
  }, [r];
}
class Vh extends fe {
  constructor(e) {
    super(), ue(this, e, Bh, zh, re, { label: 0 });
  }
}
function Wh(t) {
  let e, n, r;
  const i = [
    /*props*/
    t[2],
    { msg: (
      /*msg*/
      t[0]
    ) }
  ];
  var s = (
    /*component*/
    t[1]
  );
  function o(a) {
    let c = {};
    for (let l = 0; l < i.length; l += 1)
      c = M(c, i[l]);
    return { props: c };
  }
  return s && (e = bi(s, o()), e.$on(
    "onChange",
    /*onChange_handler*/
    t[6]
  )), {
    c() {
      e && ge(e.$$.fragment), n = Be();
    },
    m(a, c) {
      e && me(e, a, c), R(a, n, c), r = !0;
    },
    p(a, [c]) {
      const l = c & /*props, msg*/
      5 ? we(i, [
        c & /*props*/
        4 && pt(
          /*props*/
          a[2]
        ),
        c & /*msg*/
        1 && { msg: (
          /*msg*/
          a[0]
        ) }
      ]) : {};
      if (c & /*component*/
      2 && s !== (s = /*component*/
      a[1])) {
        if (e) {
          je();
          const u = e;
          x(u.$$.fragment, 1, 0, () => {
            pe(u, 1);
          }), Ze();
        }
        s ? (e = bi(s, o()), e.$on(
          "onChange",
          /*onChange_handler*/
          a[6]
        ), ge(e.$$.fragment), k(e.$$.fragment, 1), me(e, n.parentNode, n)) : e = null;
      } else
        s && e.$set(l);
    },
    i(a) {
      r || (e && k(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && x(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(n), e && pe(e, a);
    }
  };
}
function Uh(t, e, n) {
  let { item: r } = e, { i } = e, { msg: s } = e;
  const o = tn();
  let a, c;
  switch (r.type) {
    case "inline":
      a = hl, c = r;
      break;
    case "input":
      a = Dd, c = r.props;
      break;
    case "switch":
      a = Vh, c = r.props;
      break;
    case "multiinput":
      a = Fd, c = r;
      break;
    case "multicustom":
      a = Vd, c = r;
      break;
    case "select":
      a = Rh, c = r.props;
      break;
    case "submit":
      a = Mh, c = r.props;
      break;
    default:
      a = null;
  }
  const l = (u) => {
    o("onChange", u.detail);
  };
  return t.$$set = (u) => {
    "item" in u && n(4, r = u.item), "i" in u && n(5, i = u.i), "msg" in u && n(0, s = u.msg);
  }, [s, a, c, o, r, i, l];
}
class li extends fe {
  constructor(e) {
    super(), ue(this, e, Uh, Wh, re, { item: 4, i: 5, msg: 0 });
  }
}
function Cs(t, e, n) {
  const r = t.slice();
  return r[10] = e[n], r[12] = n, r;
}
function Ss(t, e, n) {
  const r = t.slice();
  return r[10] = e[n], r[12] = n, r;
}
function Gh(t) {
  let e, n, r = ze(
    /*fields*/
    t[1]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = xs(Cs(t, r, o));
  const s = (o) => x(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      e = D("div");
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      I(e, "class", "flex flex-col space-y-3");
    },
    m(o, a) {
      R(o, e, a);
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(e, null);
      n = !0;
    },
    p(o, a) {
      if (a & /*errors, fields, formdata*/
      50) {
        r = ze(
          /*fields*/
          o[1]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const l = Cs(o, r, c);
          i[c] ? (i[c].p(l, a), k(i[c], 1)) : (i[c] = xs(l), i[c].c(), k(i[c], 1), i[c].m(e, null));
        }
        for (je(), c = r.length; c < i.length; c += 1)
          s(c);
        Ze();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          k(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        x(i[a]);
      n = !1;
    },
    d(o) {
      o && N(e), zt(i, o);
    }
  };
}
function qh(t) {
  let e, n, r, i, s, o = ze(
    /*fields*/
    t[1]
  ), a = [];
  for (let l = 0; l < o.length; l += 1)
    a[l] = Es(Ss(t, o, l));
  const c = (l) => x(a[l], 1, 1, () => {
    a[l] = null;
  });
  return {
    c() {
      e = D("form"), n = D("div");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      I(n, "class", "flex flex-col space-y-3"), I(e, "class", "bg-white"), I(e, "autocomplete", "off");
    },
    m(l, u) {
      R(l, e, u), W(e, n);
      for (let f = 0; f < a.length; f += 1)
        a[f] && a[f].m(n, null);
      r = !0, i || (s = Q(e, "submit", Ua(
        /*submit_handler*/
        t[7]
      )), i = !0);
    },
    p(l, u) {
      if (u & /*fields, errors, formdata*/
      50) {
        o = ze(
          /*fields*/
          l[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const d = Ss(l, o, f);
          a[f] ? (a[f].p(d, u), k(a[f], 1)) : (a[f] = Es(d), a[f].c(), k(a[f], 1), a[f].m(n, null));
        }
        for (je(), f = o.length; f < a.length; f += 1)
          c(f);
        Ze();
      }
    },
    i(l) {
      if (!r) {
        for (let u = 0; u < o.length; u += 1)
          k(a[u]);
        r = !0;
      }
    },
    o(l) {
      a = a.filter(Boolean);
      for (let u = 0; u < a.length; u += 1)
        x(a[u]);
      r = !1;
    },
    d(l) {
      l && N(e), zt(a, l), i = !1, s();
    }
  };
}
function xs(t) {
  let e, n;
  return e = new li({
    props: {
      msg: (
        /*errors*/
        t[5][
          /*item*/
          t[10].props.id
        ] || ""
      ),
      item: (
        /*item*/
        t[10]
      ),
      i: `${/*i*/
      t[12]}`
    }
  }), e.$on(
    "onChange",
    /*onChange_handler_1*/
    t[8]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*errors, fields*/
      34 && (s.msg = /*errors*/
      r[5][
        /*item*/
        r[10].props.id
      ] || ""), i & /*fields*/
      2 && (s.item = /*item*/
      r[10]), e.$set(s);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function Es(t) {
  let e, n;
  return e = new li({
    props: {
      item: (
        /*item*/
        t[10]
      ),
      msg: (
        /*errors*/
        t[5][
          /*item*/
          t[10].props.id
        ] || ""
      ),
      i: `${/*i*/
      t[12]}`
    }
  }), e.$on(
    "onChange",
    /*onChange_handler*/
    t[6]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(r, i) {
      me(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*fields*/
      2 && (s.item = /*item*/
      r[10]), i & /*errors, fields*/
      34 && (s.msg = /*errors*/
      r[5][
        /*item*/
        r[10].props.id
      ] || ""), e.$set(s);
    },
    i(r) {
      n || (k(e.$$.fragment, r), n = !0);
    },
    o(r) {
      x(e.$$.fragment, r), n = !1;
    },
    d(r) {
      pe(e, r);
    }
  };
}
function Hh(t) {
  let e, n, r, i;
  const s = [qh, Gh], o = [];
  function a(c, l) {
    return (
      /*outform*/
      c[2] ? 1 : 0
    );
  }
  return n = a(t), r = o[n] = s[n](t), {
    c() {
      e = D("div"), r.c(), gi(e, "p-6", !/*outform*/
      t[2]);
    },
    m(c, l) {
      R(c, e, l), o[n].m(e, null), i = !0;
    },
    p(c, [l]) {
      let u = n;
      n = a(c), n === u ? o[n].p(c, l) : (je(), x(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), r = o[n], r ? r.p(c, l) : (r = o[n] = s[n](c), r.c()), k(r, 1), r.m(e, null)), (!i || l & /*outform*/
      4) && gi(e, "p-6", !/*outform*/
      c[2]);
    },
    i(c) {
      i || (k(r), i = !0);
    },
    o(c) {
      x(r), i = !1;
    },
    d(c) {
      c && N(e), o[n].d();
    }
  };
}
function Kh(t, e, n) {
  tn();
  let { schema: r } = e, { fields: i } = e, { outform: s = !1 } = e, { onCheckSucc: o = (d) => {
    console.log(d);
  } } = e, a = {}, c = {};
  const l = (d) => {
    n(4, a[d.detail.id] = d.detail.value, a);
  }, u = () => {
    try {
      o(r.parse(a));
    } catch (d) {
      d instanceof Gn.ZodError ? n(5, c = d.flatten().fieldErrors) : console.error(d);
    }
  }, f = (d) => {
    n(4, a[d.detail.id] = d.detail.value, a);
  };
  return t.$$set = (d) => {
    "schema" in d && n(0, r = d.schema), "fields" in d && n(1, i = d.fields), "outform" in d && n(2, s = d.outform), "onCheckSucc" in d && n(3, o = d.onCheckSucc);
  }, [
    r,
    i,
    s,
    o,
    a,
    c,
    l,
    u,
    f
  ];
}
class Yh extends fe {
  constructor(e) {
    super(), ue(this, e, Kh, Hh, re, {
      schema: 0,
      fields: 1,
      outform: 2,
      onCheckSucc: 3
    });
  }
}
const im = (t, e, n) => {
  t || (t = window.document.createElement("div"));
  const r = Gn.lazy(() => {
    let s = Gn.object({});
    for (let o of e)
      o.props.id && o.schema && (s = s.merge(Gn.object({ [o.props.id]: o.schema })));
    return s;
  });
  return new Yh({
    target: t,
    props: {
      fields: e,
      schema: r,
      ...n
    }
  });
}, Wn = (t) => Object.entries(t).map(([e, n]) => `${e}: ${n};`).join(" ");
function Xh(t) {
  let e, n, r, i, s, o, a, c, l, u, f, d, h, m, v, p, g, b, w, T;
  return {
    c() {
      e = D("div"), n = D("div"), r = D("div"), i = D("div"), s = Re(
        /*title*/
        t[0]
      ), o = Ee(), a = D("div"), c = D("div"), l = Re(
        /*content*/
        t[1]
      ), u = Ee(), f = D("div"), d = D("div"), h = Re(
        /*cancelText*/
        t[2]
      ), v = Ee(), p = D("div"), g = Re(
        /*okText*/
        t[3]
      ), I(i, "class", "modal-title svelte-f901x2"), I(a, "class", "content svelte-f901x2"), I(r, "class", "modal-content-body svelte-f901x2"), I(d, "class", "btn button-left centerLayout svelte-f901x2"), I(d, "style", m = Wn(
        /*cancelBtnStyle*/
        t[4]
      )), I(p, "class", "btn button-right centerLayout svelte-f901x2"), I(p, "style", b = Wn(
        /*okBtnStyle*/
        t[5]
      )), I(f, "class", "confirm-button-wrap svelte-f901x2"), I(n, "class", "confirm-modal-content svelte-f901x2"), I(e, "class", "confirm-modal svelte-f901x2");
    },
    m(j, U) {
      R(j, e, U), W(e, n), W(n, r), W(r, i), W(i, s), W(r, o), W(r, a), W(a, c), W(c, l), W(n, u), W(n, f), W(f, d), W(d, h), W(f, v), W(f, p), W(p, g), t[11](e), w || (T = [
        Q(
          d,
          "click",
          /*onCancelClk*/
          t[8]
        ),
        Q(
          p,
          "click",
          /*onOkClk*/
          t[7]
        )
      ], w = !0);
    },
    p(j, [U]) {
      U & /*title*/
      1 && Le(
        s,
        /*title*/
        j[0]
      ), U & /*content*/
      2 && Le(
        l,
        /*content*/
        j[1]
      ), U & /*cancelText*/
      4 && Le(
        h,
        /*cancelText*/
        j[2]
      ), U & /*cancelBtnStyle*/
      16 && m !== (m = Wn(
        /*cancelBtnStyle*/
        j[4]
      )) && I(d, "style", m), U & /*okText*/
      8 && Le(
        g,
        /*okText*/
        j[3]
      ), U & /*okBtnStyle*/
      32 && b !== (b = Wn(
        /*okBtnStyle*/
        j[5]
      )) && I(p, "style", b);
    },
    i: ne,
    o: ne,
    d(j) {
      j && N(e), t[11](null), w = !1, Ne(T);
    }
  };
}
function Jh(t, e, n) {
  let { title: r = "" } = e, { content: i = "" } = e, { cancelText: s = "取消" } = e, { okText: o = "确定" } = e, { onCancel: a = () => {
  } } = e, { onOk: c = () => {
  } } = e, { cancelBtnStyle: l = "" } = e, { okBtnStyle: u = "" } = e;
  const f = tn();
  let d;
  const h = () => {
    c(), f("onOk");
  }, m = () => {
    a(), f("onCancel");
  };
  function v(p) {
    rt[p ? "unshift" : "push"](() => {
      d = p, n(6, d);
    });
  }
  return t.$$set = (p) => {
    "title" in p && n(0, r = p.title), "content" in p && n(1, i = p.content), "cancelText" in p && n(2, s = p.cancelText), "okText" in p && n(3, o = p.okText), "onCancel" in p && n(9, a = p.onCancel), "onOk" in p && n(10, c = p.onOk), "cancelBtnStyle" in p && n(4, l = p.cancelBtnStyle), "okBtnStyle" in p && n(5, u = p.okBtnStyle);
  }, [
    r,
    i,
    s,
    o,
    l,
    u,
    d,
    h,
    m,
    a,
    c,
    v
  ];
}
class Qh extends fe {
  constructor(e) {
    super(), ue(this, e, Jh, Xh, re, {
      title: 0,
      content: 1,
      cancelText: 2,
      okText: 3,
      onCancel: 9,
      onOk: 10,
      cancelBtnStyle: 4,
      okBtnStyle: 5
    });
  }
}
const sm = (t) => {
  const e = window.document.createElement("div");
  document.body.appendChild(e);
  const n = new Qh({
    target: e,
    props: {
      ...t
    }
  });
  return n.$on("onOk", () => {
    n.$destroy();
  }), n.$on("onCancel", () => {
    n.$destroy();
  }), n;
};
export {
  em as Layout,
  sm as confirm,
  im as form,
  Gn as z
};
