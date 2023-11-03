var Al = Object.defineProperty;
var Sl = (t, e, n) => e in t ? Al(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var U = (t, e, n) => (Sl(t, typeof e != "symbol" ? e + "" : e, n), n);
var Pe;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function n(s) {
    throw new Error();
  }
  t.assertNever = n, t.arrayToEnum = (s) => {
    const i = {};
    for (const o of s)
      i[o] = o;
    return i;
  }, t.getValidEnumValues = (s) => {
    const i = t.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), o = {};
    for (const a of i)
      o[a] = s[a];
    return t.objectValues(o);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(i) {
    return s[i];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
    return i;
  }, t.find = (s, i) => {
    for (const o of s)
      if (i(o))
        return o;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function r(s, i = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  t.joinValues = r, t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(Pe || (Pe = {}));
var Ns;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
    // second overwrites first
  });
})(Ns || (Ns = {}));
const z = Pe.arrayToEnum([
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
]), Ht = (t) => {
  switch (typeof t) {
    case "undefined":
      return z.undefined;
    case "string":
      return z.string;
    case "number":
      return isNaN(t) ? z.nan : z.number;
    case "boolean":
      return z.boolean;
    case "function":
      return z.function;
    case "bigint":
      return z.bigint;
    case "symbol":
      return z.symbol;
    case "object":
      return Array.isArray(t) ? z.array : t === null ? z.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? z.promise : typeof Map < "u" && t instanceof Map ? z.map : typeof Set < "u" && t instanceof Set ? z.set : typeof Date < "u" && t instanceof Date ? z.date : z.object;
    default:
      return z.unknown;
  }
}, P = Pe.arrayToEnum([
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
]), Rl = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Et extends Error {
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
    const n = e || function(i) {
      return i.message;
    }, r = { _errors: [] }, s = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let a = r, l = 0;
          for (; l < o.path.length; ) {
            const c = o.path[l];
            l === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(n(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return s(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Pe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (n) => n.message) {
    const n = {}, r = [];
    for (const s of this.issues)
      s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(e(s))) : r.push(e(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Et.create = (t) => new Et(t);
const Xn = (t, e) => {
  let n;
  switch (t.code) {
    case P.invalid_type:
      t.received === z.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case P.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, Pe.jsonStringifyReplacer)}`;
      break;
    case P.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Pe.joinValues(t.keys, ", ")}`;
      break;
    case P.invalid_union:
      n = "Invalid input";
      break;
    case P.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Pe.joinValues(t.options)}`;
      break;
    case P.invalid_enum_value:
      n = `Invalid enum value. Expected ${Pe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case P.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case P.invalid_return_type:
      n = "Invalid function return type";
      break;
    case P.invalid_date:
      n = "Invalid date";
      break;
    case P.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : Pe.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case P.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case P.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case P.custom:
      n = "Invalid input";
      break;
    case P.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case P.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case P.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, Pe.assertNever(t);
  }
  return { message: n };
};
let Ho = Xn;
function Ol(t) {
  Ho = t;
}
function Ir() {
  return Ho;
}
const xr = (t) => {
  const { data: e, path: n, errorMaps: r, issueData: s } = t, i = [...n, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(o, { data: e, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, $l = [];
function B(t, e) {
  const n = xr({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Ir(),
      Xn
      // then global default map
    ].filter((r) => !!r)
  });
  t.common.issues.push(n);
}
class at {
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
    for (const s of n) {
      if (s.status === "aborted")
        return ie;
      s.status === "dirty" && e.dirty(), r.push(s.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const s of n)
      r.push({
        key: await s.key,
        value: await s.value
      });
    return at.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return ie;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: e.value, value: r };
  }
}
const ie = Object.freeze({
  status: "aborted"
}), Ko = (t) => ({ status: "dirty", value: t }), ft = (t) => ({ status: "valid", value: t }), Is = (t) => t.status === "aborted", xs = (t) => t.status === "dirty", Jn = (t) => t.status === "valid", Pr = (t) => typeof Promise < "u" && t instanceof Promise;
var Y;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(Y || (Y = {}));
class It {
  constructor(e, n, r, s) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const vi = (t, e) => {
  if (Jn(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Et(t.common.issues);
      return this._error = n, this._error;
    }
  };
};
function ue(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: n, required_error: r, description: s } = t;
  if (e && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: r ?? a.defaultError } : { message: n ?? a.defaultError }, description: s };
}
class be {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Ht(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: Ht(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new at(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Ht(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Pr(n))
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
    const s = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Ht(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return vi(s, i);
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
      parsedType: Ht(e)
    }, s = this._parse({ data: e, path: r.path, parent: r }), i = await (Pr(s) ? s : Promise.resolve(s));
    return vi(r, i);
  }
  refine(e, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: P.custom,
        ...r(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(e) {
    return new St({
      schema: this,
      typeName: Q.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Ft.create(this, this._def);
  }
  nullable() {
    return fn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return At.create(this, this._def);
  }
  promise() {
    return Mn.create(this, this._def);
  }
  or(e) {
    return nr.create([this, e], this._def);
  }
  and(e) {
    return rr.create(this, e, this._def);
  }
  transform(e) {
    return new St({
      ...ue(this._def),
      schema: this,
      typeName: Q.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new lr({
      ...ue(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Q.ZodDefault
    });
  }
  brand() {
    return new Yo({
      typeName: Q.ZodBranded,
      type: this,
      ...ue(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new jr({
      ...ue(this._def),
      innerType: this,
      catchValue: n,
      typeName: Q.ZodCatch
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
    return dr.create(this, e);
  }
  readonly() {
    return Zr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Nl = /^c[^\s-]{8,}$/i, Il = /^[a-z][a-z0-9]*$/, xl = /[0-9A-HJKMNP-TV-Z]{26}/, Pl = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ml = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Dl = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Fl = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, jl = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Ll = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Zl(t, e) {
  return !!((e === "v4" || !e) && Fl.test(t) || (e === "v6" || !e) && jl.test(t));
}
class Tt extends be {
  constructor() {
    super(...arguments), this._regex = (e, n, r) => this.refinement((s) => e.test(s), {
      validation: n,
      code: P.invalid_string,
      ...Y.errToObj(r)
    }), this.nonempty = (e) => this.min(1, Y.errToObj(e)), this.trim = () => new Tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Tt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== z.string) {
      const i = this._getOrReturnCtx(e);
      return B(
        i,
        {
          code: P.invalid_type,
          expected: z.string,
          received: i.parsedType
        }
        //
      ), ie;
    }
    const r = new at();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), B(s, {
          code: P.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), B(s, {
          code: P.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value, a = e.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(e, s), o ? B(s, {
          code: P.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && B(s, {
          code: P.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        Ml.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "email",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        Dl.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "emoji",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        Pl.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "uuid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        Nl.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "cuid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        Il.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "cuid2",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        xl.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "ulid",
          code: P.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), B(s, {
            validation: "url",
            code: P.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "regex",
          code: P.invalid_string,
          message: i.message
        }), r.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), B(s, {
          code: P.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), r.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), B(s, {
          code: P.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), B(s, {
          code: P.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "datetime" ? Ll(i).test(e.data) || (s = this._getOrReturnCtx(e, s), B(s, {
          code: P.invalid_string,
          validation: "datetime",
          message: i.message
        }), r.dirty()) : i.kind === "ip" ? Zl(e.data, i.version) || (s = this._getOrReturnCtx(e, s), B(s, {
          validation: "ip",
          code: P.invalid_string,
          message: i.message
        }), r.dirty()) : Pe.assertNever(i);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new Tt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...Y.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...Y.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...Y.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...Y.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...Y.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...Y.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...Y.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...Y.errToObj(e) });
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
      ...Y.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...Y.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...Y.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...Y.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...Y.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...Y.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...Y.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...Y.errToObj(n)
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
Tt.create = (t) => {
  var e;
  return new Tt({
    checks: [],
    typeName: Q.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ue(t)
  });
};
function zl(t, e) {
  const n = (t.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, s = n > r ? n : r, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Kt extends be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== z.number) {
      const i = this._getOrReturnCtx(e);
      return B(i, {
        code: P.invalid_type,
        expected: z.number,
        received: i.parsedType
      }), ie;
    }
    let r;
    const s = new at();
    for (const i of this._def.checks)
      i.kind === "int" ? Pe.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? zl(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.not_finite,
        message: i.message
      }), s.dirty()) : Pe.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, Y.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, Y.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, Y.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, Y.toString(n));
  }
  setLimit(e, n, r, s) {
    return new Kt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: Y.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: Y.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Y.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Y.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Y.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Y.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Y.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: Y.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Y.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Y.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Pe.isInteger(e.value));
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
Kt.create = (t) => new Kt({
  checks: [],
  typeName: Q.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ue(t)
});
class qt extends be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== z.bigint) {
      const i = this._getOrReturnCtx(e);
      return B(i, {
        code: P.invalid_type,
        expected: z.bigint,
        received: i.parsedType
      }), ie;
    }
    let r;
    const s = new at();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), B(r, {
        code: P.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Pe.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, Y.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, Y.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, Y.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, Y.toString(n));
  }
  setLimit(e, n, r, s) {
    return new qt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: Y.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new qt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Y.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Y.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Y.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Y.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: Y.toString(n)
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
qt.create = (t) => {
  var e;
  return new qt({
    checks: [],
    typeName: Q.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...ue(t)
  });
};
class Qn extends be {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== z.boolean) {
      const r = this._getOrReturnCtx(e);
      return B(r, {
        code: P.invalid_type,
        expected: z.boolean,
        received: r.parsedType
      }), ie;
    }
    return ft(e.data);
  }
}
Qn.create = (t) => new Qn({
  typeName: Q.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...ue(t)
});
class cn extends be {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== z.date) {
      const i = this._getOrReturnCtx(e);
      return B(i, {
        code: P.invalid_type,
        expected: z.date,
        received: i.parsedType
      }), ie;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return B(i, {
        code: P.invalid_date
      }), ie;
    }
    const r = new at();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), B(s, {
        code: P.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), B(s, {
        code: P.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : Pe.assertNever(i);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new cn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: Y.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: Y.toString(n)
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
cn.create = (t) => new cn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: Q.ZodDate,
  ...ue(t)
});
class Mr extends be {
  _parse(e) {
    if (this._getType(e) !== z.symbol) {
      const r = this._getOrReturnCtx(e);
      return B(r, {
        code: P.invalid_type,
        expected: z.symbol,
        received: r.parsedType
      }), ie;
    }
    return ft(e.data);
  }
}
Mr.create = (t) => new Mr({
  typeName: Q.ZodSymbol,
  ...ue(t)
});
class er extends be {
  _parse(e) {
    if (this._getType(e) !== z.undefined) {
      const r = this._getOrReturnCtx(e);
      return B(r, {
        code: P.invalid_type,
        expected: z.undefined,
        received: r.parsedType
      }), ie;
    }
    return ft(e.data);
  }
}
er.create = (t) => new er({
  typeName: Q.ZodUndefined,
  ...ue(t)
});
class tr extends be {
  _parse(e) {
    if (this._getType(e) !== z.null) {
      const r = this._getOrReturnCtx(e);
      return B(r, {
        code: P.invalid_type,
        expected: z.null,
        received: r.parsedType
      }), ie;
    }
    return ft(e.data);
  }
}
tr.create = (t) => new tr({
  typeName: Q.ZodNull,
  ...ue(t)
});
class Pn extends be {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ft(e.data);
  }
}
Pn.create = (t) => new Pn({
  typeName: Q.ZodAny,
  ...ue(t)
});
class an extends be {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ft(e.data);
  }
}
an.create = (t) => new an({
  typeName: Q.ZodUnknown,
  ...ue(t)
});
class jt extends be {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return B(n, {
      code: P.invalid_type,
      expected: z.never,
      received: n.parsedType
    }), ie;
  }
}
jt.create = (t) => new jt({
  typeName: Q.ZodNever,
  ...ue(t)
});
class Dr extends be {
  _parse(e) {
    if (this._getType(e) !== z.undefined) {
      const r = this._getOrReturnCtx(e);
      return B(r, {
        code: P.invalid_type,
        expected: z.void,
        received: r.parsedType
      }), ie;
    }
    return ft(e.data);
  }
}
Dr.create = (t) => new Dr({
  typeName: Q.ZodVoid,
  ...ue(t)
});
class At extends be {
  _parse(e) {
    const { ctx: n, status: r } = this._processInputParams(e), s = this._def;
    if (n.parsedType !== z.array)
      return B(n, {
        code: P.invalid_type,
        expected: z.array,
        received: n.parsedType
      }), ie;
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value, a = n.data.length < s.exactLength.value;
      (o || a) && (B(n, {
        code: o ? P.too_big : P.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (B(n, {
      code: P.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (B(n, {
      code: P.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, a) => s.type._parseAsync(new It(n, o, n.path, a)))).then((o) => at.mergeArray(r, o));
    const i = [...n.data].map((o, a) => s.type._parseSync(new It(n, o, n.path, a)));
    return at.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new At({
      ...this._def,
      minLength: { value: e, message: Y.toString(n) }
    });
  }
  max(e, n) {
    return new At({
      ...this._def,
      maxLength: { value: e, message: Y.toString(n) }
    });
  }
  length(e, n) {
    return new At({
      ...this._def,
      exactLength: { value: e, message: Y.toString(n) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
At.create = (t, e) => new At({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Q.ZodArray,
  ...ue(e)
});
function An(t) {
  if (t instanceof Xe) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = Ft.create(An(r));
    }
    return new Xe({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof At ? new At({
      ...t._def,
      type: An(t.element)
    }) : t instanceof Ft ? Ft.create(An(t.unwrap())) : t instanceof fn ? fn.create(An(t.unwrap())) : t instanceof xt ? xt.create(t.items.map((e) => An(e))) : t;
}
class Xe extends be {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), n = Pe.objectKeys(e);
    return this._cached = { shape: e, keys: n };
  }
  _parse(e) {
    if (this._getType(e) !== z.object) {
      const c = this._getOrReturnCtx(e);
      return B(c, {
        code: P.invalid_type,
        expected: z.object,
        received: c.parsedType
      }), ie;
    }
    const { status: r, ctx: s } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof jt && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const u = i[c], f = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new It(s, f, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof jt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (c === "strict")
        a.length > 0 && (B(s, {
          code: P.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const f = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new It(s, f, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const f = await u.key;
        c.push({
          key: f,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => at.mergeObjectSync(r, c)) : at.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return Y.errToObj, new Xe({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var s, i, o, a;
          const l = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = Y.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new Xe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Xe({
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
    return new Xe({
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
    return new Xe({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: Q.ZodObject
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
    return new Xe({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    return Pe.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    return Pe.objectKeys(this.shape).forEach((r) => {
      e[r] || (n[r] = this.shape[r]);
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return An(this);
  }
  partial(e) {
    const n = {};
    return Pe.objectKeys(this.shape).forEach((r) => {
      const s = this.shape[r];
      e && !e[r] ? n[r] = s : n[r] = s.optional();
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    return Pe.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof Ft; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return qo(Pe.objectKeys(this.shape));
  }
}
Xe.create = (t, e) => new Xe({
  shape: () => t,
  unknownKeys: "strip",
  catchall: jt.create(),
  typeName: Q.ZodObject,
  ...ue(e)
});
Xe.strictCreate = (t, e) => new Xe({
  shape: () => t,
  unknownKeys: "strict",
  catchall: jt.create(),
  typeName: Q.ZodObject,
  ...ue(e)
});
Xe.lazycreate = (t, e) => new Xe({
  shape: t,
  unknownKeys: "strip",
  catchall: jt.create(),
  typeName: Q.ZodObject,
  ...ue(e)
});
class nr extends be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Et(a.ctx.common.issues));
      return B(n, {
        code: P.invalid_union,
        unionErrors: o
      }), ie;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let i;
      const o = [];
      for (const l of r) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new Et(l));
      return B(n, {
        code: P.invalid_union,
        unionErrors: a
      }), ie;
    }
  }
  get options() {
    return this._def.options;
  }
}
nr.create = (t, e) => new nr({
  options: t,
  typeName: Q.ZodUnion,
  ...ue(e)
});
const Sr = (t) => t instanceof ir ? Sr(t.schema) : t instanceof St ? Sr(t.innerType()) : t instanceof or ? [t.value] : t instanceof Yt ? t.options : t instanceof ar ? Object.keys(t.enum) : t instanceof lr ? Sr(t._def.innerType) : t instanceof er ? [void 0] : t instanceof tr ? [null] : null;
class is extends be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== z.object)
      return B(n, {
        code: P.invalid_type,
        expected: z.object,
        received: n.parsedType
      }), ie;
    const r = this.discriminator, s = n.data[r], i = this.optionsMap.get(s);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (B(n, {
      code: P.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ie);
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
    const s = /* @__PURE__ */ new Map();
    for (const i of n) {
      const o = Sr(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new is({
      typeName: Q.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: s,
      ...ue(r)
    });
  }
}
function Ps(t, e) {
  const n = Ht(t), r = Ht(e);
  if (t === e)
    return { valid: !0, data: t };
  if (n === z.object && r === z.object) {
    const s = Pe.objectKeys(e), i = Pe.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const l = Ps(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === z.array && r === z.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], l = Ps(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return n === z.date && r === z.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class rr extends be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), s = (i, o) => {
      if (Is(i) || Is(o))
        return ie;
      const a = Ps(i.value, o.value);
      return a.valid ? ((xs(i) || xs(o)) && n.dirty(), { status: n.value, value: a.data }) : (B(r, {
        code: P.invalid_intersection_types
      }), ie);
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
    ]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
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
rr.create = (t, e, n) => new rr({
  left: t,
  right: e,
  typeName: Q.ZodIntersection,
  ...ue(n)
});
class xt extends be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.array)
      return B(r, {
        code: P.invalid_type,
        expected: z.array,
        received: r.parsedType
      }), ie;
    if (r.data.length < this._def.items.length)
      return B(r, {
        code: P.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ie;
    !this._def.rest && r.data.length > this._def.items.length && (B(r, {
      code: P.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new It(r, o, r.path, a)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(i).then((o) => at.mergeArray(n, o)) : at.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new xt({
      ...this._def,
      rest: e
    });
  }
}
xt.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xt({
    items: t,
    typeName: Q.ZodTuple,
    rest: null,
    ...ue(e)
  });
};
class sr extends be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.object)
      return B(r, {
        code: P.invalid_type,
        expected: z.object,
        received: r.parsedType
      }), ie;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new It(r, a, r.path, a)),
        value: o._parse(new It(r, r.data[a], r.path, a))
      });
    return r.common.async ? at.mergeObjectAsync(n, s) : at.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, n, r) {
    return n instanceof be ? new sr({
      keyType: e,
      valueType: n,
      typeName: Q.ZodRecord,
      ...ue(r)
    }) : new sr({
      keyType: Tt.create(),
      valueType: e,
      typeName: Q.ZodRecord,
      ...ue(n)
    });
  }
}
class Fr extends be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.map)
      return B(r, {
        code: P.invalid_type,
        expected: z.map,
        received: r.parsedType
      }), ie;
    const s = this._def.keyType, i = this._def.valueType, o = [...r.data.entries()].map(([a, l], c) => ({
      key: s._parse(new It(r, a, r.path, [c, "key"])),
      value: i._parse(new It(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return ie;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return ie;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Fr.create = (t, e, n) => new Fr({
  valueType: e,
  keyType: t,
  typeName: Q.ZodMap,
  ...ue(n)
});
class un extends be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== z.set)
      return B(r, {
        code: P.invalid_type,
        expected: z.set,
        received: r.parsedType
      }), ie;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (B(r, {
      code: P.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (B(r, {
      code: P.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return ie;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const a = [...r.data.values()].map((l, c) => i._parse(new It(r, l, r.path, c)));
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, n) {
    return new un({
      ...this._def,
      minSize: { value: e, message: Y.toString(n) }
    });
  }
  max(e, n) {
    return new un({
      ...this._def,
      maxSize: { value: e, message: Y.toString(n) }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
un.create = (t, e) => new un({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: Q.ZodSet,
  ...ue(e)
});
class On extends be {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== z.function)
      return B(n, {
        code: P.invalid_type,
        expected: z.function,
        received: n.parsedType
      }), ie;
    function r(a, l) {
      return xr({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Ir(),
          Xn
        ].filter((c) => !!c),
        issueData: {
          code: P.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return xr({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Ir(),
          Xn
        ].filter((c) => !!c),
        issueData: {
          code: P.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof Mn) {
      const a = this;
      return ft(async function(...l) {
        const c = new Et([]), u = await a._def.args.parseAsync(l, i).catch((d) => {
          throw c.addIssue(r(l, d)), c;
        }), f = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(f, i).catch((d) => {
          throw c.addIssue(s(f, d)), c;
        });
      });
    } else {
      const a = this;
      return ft(function(...l) {
        const c = a._def.args.safeParse(l, i);
        if (!c.success)
          throw new Et([r(l, c.error)]);
        const u = Reflect.apply(o, this, c.data), f = a._def.returns.safeParse(u, i);
        if (!f.success)
          throw new Et([s(u, f.error)]);
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
    return new On({
      ...this._def,
      args: xt.create(e).rest(an.create())
    });
  }
  returns(e) {
    return new On({
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
    return new On({
      args: e || xt.create([]).rest(an.create()),
      returns: n || an.create(),
      typeName: Q.ZodFunction,
      ...ue(r)
    });
  }
}
class ir extends be {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ir.create = (t, e) => new ir({
  getter: t,
  typeName: Q.ZodLazy,
  ...ue(e)
});
class or extends be {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return B(n, {
        received: n.data,
        code: P.invalid_literal,
        expected: this._def.value
      }), ie;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
or.create = (t, e) => new or({
  value: t,
  typeName: Q.ZodLiteral,
  ...ue(e)
});
function qo(t, e) {
  return new Yt({
    values: t,
    typeName: Q.ZodEnum,
    ...ue(e)
  });
}
class Yt extends be {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return B(n, {
        expected: Pe.joinValues(r),
        received: n.parsedType,
        code: P.invalid_type
      }), ie;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return B(n, {
        received: n.data,
        code: P.invalid_enum_value,
        options: r
      }), ie;
    }
    return ft(e.data);
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
    return Yt.create(e);
  }
  exclude(e) {
    return Yt.create(this.options.filter((n) => !e.includes(n)));
  }
}
Yt.create = qo;
class ar extends be {
  _parse(e) {
    const n = Pe.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== z.string && r.parsedType !== z.number) {
      const s = Pe.objectValues(n);
      return B(r, {
        expected: Pe.joinValues(s),
        received: r.parsedType,
        code: P.invalid_type
      }), ie;
    }
    if (n.indexOf(e.data) === -1) {
      const s = Pe.objectValues(n);
      return B(r, {
        received: r.data,
        code: P.invalid_enum_value,
        options: s
      }), ie;
    }
    return ft(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ar.create = (t, e) => new ar({
  values: t,
  typeName: Q.ZodNativeEnum,
  ...ue(e)
});
class Mn extends be {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== z.promise && n.common.async === !1)
      return B(n, {
        code: P.invalid_type,
        expected: z.promise,
        received: n.parsedType
      }), ie;
    const r = n.parsedType === z.promise ? n.data : Promise.resolve(n.data);
    return ft(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Mn.create = (t, e) => new Mn({
  type: t,
  typeName: Q.ZodPromise,
  ...ue(e)
});
class St extends be {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Q.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), s = this._def.effect || null, i = {
      addIssue: (o) => {
        B(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "preprocess") {
      const o = s.transform(r.data, i);
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
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ie : (a.status === "dirty" && n.dirty(), o(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? ie : (a.status === "dirty" && n.dirty(), o(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Jn(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => Jn(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: n.value, value: a })) : o);
    Pe.assertNever(s);
  }
}
St.create = (t, e, n) => new St({
  schema: t,
  typeName: Q.ZodEffects,
  effect: e,
  ...ue(n)
});
St.createWithPreprocess = (t, e, n) => new St({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: Q.ZodEffects,
  ...ue(n)
});
class Ft extends be {
  _parse(e) {
    return this._getType(e) === z.undefined ? ft(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ft.create = (t, e) => new Ft({
  innerType: t,
  typeName: Q.ZodOptional,
  ...ue(e)
});
class fn extends be {
  _parse(e) {
    return this._getType(e) === z.null ? ft(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fn.create = (t, e) => new fn({
  innerType: t,
  typeName: Q.ZodNullable,
  ...ue(e)
});
class lr extends be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === z.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
lr.create = (t, e) => new lr({
  innerType: t,
  typeName: Q.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...ue(e)
});
class jr extends be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Pr(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Et(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Et(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
jr.create = (t, e) => new jr({
  innerType: t,
  typeName: Q.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...ue(e)
});
class Lr extends be {
  _parse(e) {
    if (this._getType(e) !== z.nan) {
      const r = this._getOrReturnCtx(e);
      return B(r, {
        code: P.invalid_type,
        expected: z.nan,
        received: r.parsedType
      }), ie;
    }
    return { status: "valid", value: e.data };
  }
}
Lr.create = (t) => new Lr({
  typeName: Q.ZodNaN,
  ...ue(t)
});
const Bl = Symbol("zod_brand");
class Yo extends be {
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
class dr extends be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ie : i.status === "dirty" ? (n.dirty(), Ko(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? ie : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, n) {
    return new dr({
      in: e,
      out: n,
      typeName: Q.ZodPipeline
    });
  }
}
class Zr extends be {
  _parse(e) {
    const n = this._def.innerType._parse(e);
    return Jn(n) && (n.value = Object.freeze(n.value)), n;
  }
}
Zr.create = (t, e) => new Zr({
  innerType: t,
  typeName: Q.ZodReadonly,
  ...ue(e)
});
const Xo = (t, e = {}, n) => t ? Pn.create().superRefine((r, s) => {
  var i, o;
  if (!t(r)) {
    const a = typeof e == "function" ? e(r) : typeof e == "string" ? { message: e } : e, l = (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null && o !== void 0 ? o : !0, c = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...c, fatal: l });
  }
}) : Pn.create(), Vl = {
  object: Xe.lazycreate
};
var Q;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(Q || (Q = {}));
const Wl = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Xo((n) => n instanceof t, e), Jo = Tt.create, Qo = Kt.create, Gl = Lr.create, Ul = qt.create, ea = Qn.create, Hl = cn.create, Kl = Mr.create, ql = er.create, Yl = tr.create, Xl = Pn.create, Jl = an.create, Ql = jt.create, ec = Dr.create, tc = At.create, nc = Xe.create, rc = Xe.strictCreate, sc = nr.create, ic = is.create, oc = rr.create, ac = xt.create, lc = sr.create, cc = Fr.create, uc = un.create, fc = On.create, dc = ir.create, hc = or.create, mc = Yt.create, pc = ar.create, gc = Mn.create, yi = St.create, _c = Ft.create, bc = fn.create, vc = St.createWithPreprocess, yc = dr.create, kc = () => Jo().optional(), wc = () => Qo().optional(), Cc = () => ea().optional(), Tc = {
  string: (t) => Tt.create({ ...t, coerce: !0 }),
  number: (t) => Kt.create({ ...t, coerce: !0 }),
  boolean: (t) => Qn.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => qt.create({ ...t, coerce: !0 }),
  date: (t) => cn.create({ ...t, coerce: !0 })
}, Ec = ie;
var L_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Xn,
  setErrorMap: Ol,
  getErrorMap: Ir,
  makeIssue: xr,
  EMPTY_PATH: $l,
  addIssueToContext: B,
  ParseStatus: at,
  INVALID: ie,
  DIRTY: Ko,
  OK: ft,
  isAborted: Is,
  isDirty: xs,
  isValid: Jn,
  isAsync: Pr,
  get util() {
    return Pe;
  },
  get objectUtil() {
    return Ns;
  },
  ZodParsedType: z,
  getParsedType: Ht,
  ZodType: be,
  ZodString: Tt,
  ZodNumber: Kt,
  ZodBigInt: qt,
  ZodBoolean: Qn,
  ZodDate: cn,
  ZodSymbol: Mr,
  ZodUndefined: er,
  ZodNull: tr,
  ZodAny: Pn,
  ZodUnknown: an,
  ZodNever: jt,
  ZodVoid: Dr,
  ZodArray: At,
  ZodObject: Xe,
  ZodUnion: nr,
  ZodDiscriminatedUnion: is,
  ZodIntersection: rr,
  ZodTuple: xt,
  ZodRecord: sr,
  ZodMap: Fr,
  ZodSet: un,
  ZodFunction: On,
  ZodLazy: ir,
  ZodLiteral: or,
  ZodEnum: Yt,
  ZodNativeEnum: ar,
  ZodPromise: Mn,
  ZodEffects: St,
  ZodTransformer: St,
  ZodOptional: Ft,
  ZodNullable: fn,
  ZodDefault: lr,
  ZodCatch: jr,
  ZodNaN: Lr,
  BRAND: Bl,
  ZodBranded: Yo,
  ZodPipeline: dr,
  ZodReadonly: Zr,
  custom: Xo,
  Schema: be,
  ZodSchema: be,
  late: Vl,
  get ZodFirstPartyTypeKind() {
    return Q;
  },
  coerce: Tc,
  any: Xl,
  array: tc,
  bigint: Ul,
  boolean: ea,
  date: Hl,
  discriminatedUnion: ic,
  effect: yi,
  enum: mc,
  function: fc,
  instanceof: Wl,
  intersection: oc,
  lazy: dc,
  literal: hc,
  map: cc,
  nan: Gl,
  nativeEnum: pc,
  never: Ql,
  null: Yl,
  nullable: bc,
  number: Qo,
  object: nc,
  oboolean: Cc,
  onumber: wc,
  optional: _c,
  ostring: kc,
  pipeline: yc,
  preprocess: vc,
  promise: gc,
  record: lc,
  set: uc,
  strictObject: rc,
  string: Jo,
  symbol: Kl,
  transformer: yi,
  tuple: ac,
  undefined: ql,
  union: sc,
  unknown: Jl,
  void: ec,
  NEVER: Ec,
  ZodIssueCode: P,
  quotelessJson: Rl,
  ZodError: Et
});
function Be() {
}
const Ks = (t) => t;
function E(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function ta(t) {
  return t();
}
function ki() {
  return /* @__PURE__ */ Object.create(null);
}
function et(t) {
  t.forEach(ta);
}
function zt(t) {
  return typeof t == "function";
}
function oe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ac(t) {
  return Object.keys(t).length === 0;
}
function os(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return Be;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Se(t) {
  let e;
  return os(t, (n) => e = n)(), e;
}
function Ge(t, e, n) {
  t.$$.on_destroy.push(os(e, n));
}
function fe(t, e, n, r) {
  if (t) {
    const s = na(t, e, n, r);
    return t[0](s);
  }
}
function na(t, e, n, r) {
  return t[1] && r ? E(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function de(t, e, n, r) {
  if (t[2] && r) {
    const s = t[2](r(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const i = [], o = Math.max(e.dirty.length, s.length);
      for (let a = 0; a < o; a += 1)
        i[a] = e.dirty[a] | s[a];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function he(t, e, n, r, s, i) {
  if (s) {
    const o = na(e, n, r, i);
    t.p(o, s);
  }
}
function me(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function we(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function q(t, e) {
  const n = {};
  e = new Set(e);
  for (const r in t)
    !e.has(r) && r[0] !== "$" && (n[r] = t[r]);
  return n;
}
function ks(t, e, n) {
  return t.set(n), e;
}
function gt(t) {
  return t && zt(t.destroy) ? t.destroy : Be;
}
const ra = typeof window < "u";
let qs = ra ? () => window.performance.now() : () => Date.now(), Ys = ra ? (t) => requestAnimationFrame(t) : Be;
const $n = /* @__PURE__ */ new Set();
function sa(t) {
  $n.forEach((e) => {
    e.c(t) || ($n.delete(e), e.f());
  }), $n.size !== 0 && Ys(sa);
}
function Xs(t) {
  let e;
  return $n.size === 0 && Ys(sa), {
    promise: new Promise((n) => {
      $n.add(e = { c: t, f: n });
    }),
    abort() {
      $n.delete(e);
    }
  };
}
function it(t, e) {
  t.appendChild(e);
}
function ia(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Sc(t) {
  const e = Re("style");
  return e.textContent = "/* empty */", Rc(ia(t), e), e.sheet;
}
function Rc(t, e) {
  return it(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Fn(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function Re(t) {
  return document.createElement(t);
}
function oa(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Qe(t) {
  return document.createTextNode(t);
}
function Ye() {
  return Qe(" ");
}
function $e() {
  return Qe("");
}
function te(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function ht(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Oc = ["width", "height"];
function le(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set && Oc.indexOf(r) === -1 ? t[r] = e[r] : ht(t, r, e[r]);
}
function zr(t, e) {
  for (const n in e)
    ht(t, n, e[n]);
}
function $c(t, e) {
  Object.keys(e).forEach((n) => {
    Nc(t, n, e[n]);
  });
}
function Nc(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : ht(t, e, n);
}
function Br(t) {
  return /-/.test(t) ? $c : le;
}
function Ic(t) {
  return Array.from(t.childNodes);
}
function dn(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function wi(t, e) {
  t.value = e ?? "";
}
function aa(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function Vr(t, e) {
  return new t(e);
}
const Wr = /* @__PURE__ */ new Map();
let Gr = 0;
function xc(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Pc(t, e) {
  const n = { stylesheet: Sc(e), rules: {} };
  return Wr.set(t, n), n;
}
function Ur(t, e, n, r, s, i, o, a = 0) {
  const l = 16.666 / r;
  let c = `{
`;
  for (let p = 0; p <= 1; p += l) {
    const y = e + (n - e) * i(p);
    c += p * 100 + `%{${o(y, 1 - y)}}
`;
  }
  const u = c + `100% {${o(n, 1 - n)}}
}`, f = `__svelte_${xc(u)}_${a}`, h = ia(t), { stylesheet: d, rules: m } = Wr.get(h) || Pc(h, t);
  m[f] || (m[f] = !0, d.insertRule(`@keyframes ${f} ${u}`, d.cssRules.length));
  const g = t.style.animation || "";
  return t.style.animation = `${g ? `${g}, ` : ""}${f} ${r}ms linear ${s}ms 1 both`, Gr += 1, f;
}
function Hr(t, e) {
  const n = (t.style.animation || "").split(", "), r = n.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), s = n.length - r.length;
  s && (t.style.animation = r.join(", "), Gr -= s, Gr || Mc());
}
function Mc() {
  Ys(() => {
    Gr || (Wr.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && R(e);
    }), Wr.clear());
  });
}
let cr;
function qn(t) {
  cr = t;
}
function hr() {
  if (!cr)
    throw new Error("Function called outside component initialization");
  return cr;
}
function Ms(t) {
  hr().$$.on_mount.push(t);
}
function la(t) {
  hr().$$.on_destroy.push(t);
}
function Dc() {
  const t = hr();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const i = aa(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return s.slice().forEach((o) => {
        o.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function pn(t, e) {
  return hr().$$.context.set(t, e), e;
}
function tn(t) {
  return hr().$$.context.get(t);
}
function ce(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Sn = [], Rt = [];
let Nn = [];
const Ds = [], ca = /* @__PURE__ */ Promise.resolve();
let Fs = !1;
function ua() {
  Fs || (Fs = !0, ca.then(fa));
}
function Hn() {
  return ua(), ca;
}
function Lt(t) {
  Nn.push(t);
}
function gn(t) {
  Ds.push(t);
}
const ws = /* @__PURE__ */ new Set();
let wn = 0;
function fa() {
  if (wn !== 0)
    return;
  const t = cr;
  do {
    try {
      for (; wn < Sn.length; ) {
        const e = Sn[wn];
        wn++, qn(e), Fc(e.$$);
      }
    } catch (e) {
      throw Sn.length = 0, wn = 0, e;
    }
    for (qn(null), Sn.length = 0, wn = 0; Rt.length; )
      Rt.pop()();
    for (let e = 0; e < Nn.length; e += 1) {
      const n = Nn[e];
      ws.has(n) || (ws.add(n), n());
    }
    Nn.length = 0;
  } while (Sn.length);
  for (; Ds.length; )
    Ds.pop()();
  Fs = !1, ws.clear(), qn(t);
}
function Fc(t) {
  if (t.fragment !== null) {
    t.update(), et(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Lt);
  }
}
function jc(t) {
  const e = [], n = [];
  Nn.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Nn = e;
}
let Zn;
function Js() {
  return Zn || (Zn = Promise.resolve(), Zn.then(() => {
    Zn = null;
  })), Zn;
}
function ln(t, e, n) {
  t.dispatchEvent(aa(`${e ? "intro" : "outro"}${n}`));
}
const Rr = /* @__PURE__ */ new Set();
let $t;
function Le() {
  $t = {
    r: 0,
    c: [],
    p: $t
    // parent group
  };
}
function Ze() {
  $t.r || et($t.c), $t = $t.p;
}
function _(t, e) {
  t && t.i && (Rr.delete(t), t.i(e));
}
function b(t, e, n, r) {
  if (t && t.o) {
    if (Rr.has(t))
      return;
    Rr.add(t), $t.c.push(() => {
      Rr.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
const Qs = { duration: 0 };
function da(t, e, n) {
  const r = { direction: "in" };
  let s = e(t, n, r), i = !1, o, a, l = 0;
  function c() {
    o && Hr(t, o);
  }
  function u() {
    const {
      delay: h = 0,
      duration: d = 300,
      easing: m = Ks,
      tick: g = Be,
      css: p
    } = s || Qs;
    p && (o = Ur(t, 0, 1, d, h, m, p, l++)), g(0, 1);
    const y = qs() + h, w = y + d;
    a && a.abort(), i = !0, Lt(() => ln(t, !0, "start")), a = Xs((N) => {
      if (i) {
        if (N >= w)
          return g(1, 0), ln(t, !0, "end"), c(), i = !1;
        if (N >= y) {
          const A = m((N - y) / d);
          g(A, 1 - A);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Hr(t), zt(s) ? (s = s(r), Js().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function ha(t, e, n) {
  const r = { direction: "out" };
  let s = e(t, n, r), i = !0, o;
  const a = $t;
  a.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: h = Ks,
      tick: d = Be,
      css: m
    } = s || Qs;
    m && (o = Ur(t, 1, 0, f, u, h, m));
    const g = qs() + u, p = g + f;
    Lt(() => ln(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Xs((y) => {
      if (i) {
        if (y >= p)
          return d(0, 1), ln(t, !1, "end"), --a.r || et(a.c), !1;
        if (y >= g) {
          const w = h((y - g) / f);
          d(1 - w, w);
        }
      }
      return i;
    });
  }
  return zt(s) ? Js().then(() => {
    s = s(r), c();
  }) : c(), {
    end(u) {
      u && "inert" in t && (t.inert = l), u && s.tick && s.tick(1, 0), i && (o && Hr(t, o), i = !1);
    }
  };
}
function Ci(t, e, n, r) {
  let i = e(t, n, { direction: "both" }), o = r ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && Hr(t, c);
  }
  function h(m, g) {
    const p = (
      /** @type {Program['d']} */
      m.b - o
    );
    return g *= Math.abs(p), {
      a: o,
      b: m.b,
      d: p,
      duration: g,
      start: m.start,
      end: m.start + g,
      group: m.group
    };
  }
  function d(m) {
    const {
      delay: g = 0,
      duration: p = 300,
      easing: y = Ks,
      tick: w = Be,
      css: N
    } = i || Qs, A = {
      start: qs() + g,
      b: m
    };
    m || (A.group = $t, $t.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = A : (N && (f(), c = Ur(t, o, m, p, g, y, N)), m && w(0, 1), a = h(A, p), Lt(() => ln(t, m, "start")), Xs((K) => {
      if (l && K > l.start && (a = h(l, p), l = null, ln(t, a.b, "start"), N && (f(), c = Ur(
        t,
        o,
        a.b,
        a.duration,
        0,
        y,
        i.css
      ))), a) {
        if (K >= a.end)
          w(o = a.b, 1 - o), ln(t, a.b, "end"), l || (a.b ? f() : --a.group.r || et(a.group.c)), a = null;
        else if (K >= a.start) {
          const D = K - a.start;
          o = a.a + a.d * y(D / a.duration), w(o, 1 - o);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      zt(i) ? Js().then(() => {
        i = i({ direction: m ? "in" : "out" }), d(m);
      }) : d(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function nt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function as(t, e) {
  b(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ls(t, e, n, r, s, i, o, a, l, c, u, f) {
  let h = t.length, d = i.length, m = h;
  const g = {};
  for (; m--; )
    g[t[m].key] = m;
  const p = [], y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), N = [];
  for (m = d; m--; ) {
    const V = f(s, i, m), ke = n(V);
    let J = o.get(ke);
    J ? r && N.push(() => J.p(V, e)) : (J = c(ke, V), J.c()), y.set(ke, p[m] = J), ke in g && w.set(ke, Math.abs(m - g[ke]));
  }
  const A = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set();
  function D(V) {
    _(V, 1), V.m(a, u), o.set(V.key, V), u = V.first, d--;
  }
  for (; h && d; ) {
    const V = p[d - 1], ke = t[h - 1], J = V.key, H = ke.key;
    V === ke ? (u = V.first, h--, d--) : y.has(H) ? !o.has(J) || A.has(J) ? D(V) : K.has(H) ? h-- : w.get(J) > w.get(H) ? (K.add(J), D(V)) : (A.add(H), h--) : (l(ke, o), h--);
  }
  for (; h--; ) {
    const V = t[h];
    y.has(V.key) || l(V, o);
  }
  for (; d; )
    D(p[d - 1]);
  return et(N), p;
}
function ae(t, e) {
  const n = {}, r = {}, s = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const o = t[i], a = e[i];
    if (a) {
      for (const l in o)
        l in a || (r[l] = 1);
      for (const l in a)
        s[l] || (n[l] = a[l], s[l] = 1);
      t[i] = a;
    } else
      for (const l in o)
        s[l] = 1;
  }
  for (const o in r)
    o in n || (n[o] = void 0);
  return n;
}
function st(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function _n(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function L(t) {
  t && t.c();
}
function F(t, e, n) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n), Lt(() => {
    const i = t.$$.on_mount.map(ta).filter(zt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : et(i), t.$$.on_mount = [];
  }), s.forEach(Lt);
}
function j(t, e) {
  const n = t.$$;
  n.fragment !== null && (jc(n.after_update), et(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Lc(t, e) {
  t.$$.dirty[0] === -1 && (Sn.push(t), ua(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ve(t, e, n, r, s, i, o, a = [-1]) {
  const l = cr;
  qn(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: Be,
    not_equal: s,
    bound: ki(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: ki(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (f, h, ...d) => {
    const m = d.length ? d[0] : h;
    return c.ctx && s(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && Lc(t, f)), h;
  }) : [], c.update(), u = !0, et(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Ic(e.target);
      c.fragment && c.fragment.l(f), f.forEach(R);
    } else
      c.fragment && c.fragment.c();
    e.intro && _(t.$$.fragment), F(t, e.target, e.anchor), fa();
  }
  qn(l);
}
class ye {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    j(this, 1), this.$destroy = Be;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!zt(n))
      return Be;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ac(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Zc = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Zc);
function ma(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = ma(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function zc() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = ma(t)) && (r && (r += " "), r += e);
  return r;
}
function Bc() {
  for (var t = 0, e, n, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = pa(e)) && (r && (r += " "), r += n);
  return r;
}
function pa(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", r = 0; r < t.length; r++)
    t[r] && (e = pa(t[r])) && (n && (n += " "), n += e);
  return n;
}
var ei = "-";
function Vc(t) {
  var e = Gc(t), n = t.conflictingClassGroups, r = t.conflictingClassGroupModifiers, s = r === void 0 ? {} : r;
  function i(a) {
    var l = a.split(ei);
    return l[0] === "" && l.length !== 1 && l.shift(), ga(l, e) || Wc(a);
  }
  function o(a, l) {
    var c = n[a] || [];
    return l && s[a] ? [].concat(c, s[a]) : c;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: o
  };
}
function ga(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], r = e.nextPart.get(n), s = r ? ga(t.slice(1), r) : void 0;
  if (s)
    return s;
  if (e.validators.length !== 0) {
    var i = t.join(ei);
    return (o = e.validators.find(function(a) {
      var l = a.validator;
      return l(i);
    })) == null ? void 0 : o.classGroupId;
  }
}
var Ti = /^\[(.+)\]$/;
function Wc(t) {
  if (Ti.test(t)) {
    var e = Ti.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Gc(t) {
  var e = t.theme, n = t.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = Hc(Object.entries(t.classGroups), n);
  return s.forEach(function(i) {
    var o = i[0], a = i[1];
    js(a, r, o, e);
  }), r;
}
function js(t, e, n, r) {
  t.forEach(function(s) {
    if (typeof s == "string") {
      var i = s === "" ? e : Ei(e, s);
      i.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (Uc(s)) {
        js(s(r), e, n, r);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(function(o) {
      var a = o[0], l = o[1];
      js(l, Ei(e, a), n, r);
    });
  });
}
function Ei(t, e) {
  var n = t;
  return e.split(ei).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Uc(t) {
  return t.isThemeGetter;
}
function Hc(t, e) {
  return e ? t.map(function(n) {
    var r = n[0], s = n[1], i = s.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(a) {
        var l = a[0], c = a[1];
        return [e + l, c];
      })) : o;
    });
    return [r, i];
  }) : t;
}
function Kc(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function s(i, o) {
    n.set(i, o), e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var a = n.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return s(o, a), a;
    },
    set: function(o, a) {
      n.has(o) ? n.set(o, a) : s(o, a);
    }
  };
}
var _a = "!";
function qc(t) {
  var e = t.separator || ":", n = e.length === 1, r = e[0], s = e.length;
  return function(o) {
    for (var a = [], l = 0, c = 0, u, f = 0; f < o.length; f++) {
      var h = o[f];
      if (l === 0) {
        if (h === r && (n || o.slice(f, f + s) === e)) {
          a.push(o.slice(c, f)), c = f + s;
          continue;
        }
        if (h === "/") {
          u = f;
          continue;
        }
      }
      h === "[" ? l++ : h === "]" && l--;
    }
    var d = a.length === 0 ? o : o.substring(c), m = d.startsWith(_a), g = m ? d.substring(1) : d, p = u && u > c ? u - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: g,
      maybePostfixModifierPosition: p
    };
  };
}
function Yc(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(r) {
    var s = r[0] === "[";
    s ? (e.push.apply(e, n.sort().concat([r])), n = []) : n.push(r);
  }), e.push.apply(e, n.sort()), e;
}
function Xc(t) {
  return {
    cache: Kc(t.cacheSize),
    splitModifiers: qc(t),
    ...Vc(t)
  };
}
var Jc = /\s+/;
function Qc(t, e) {
  var n = e.splitModifiers, r = e.getClassGroupId, s = e.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return t.trim().split(Jc).map(function(o) {
    var a = n(o), l = a.modifiers, c = a.hasImportantModifier, u = a.baseClassName, f = a.maybePostfixModifierPosition, h = r(f ? u.substring(0, f) : u), d = !!f;
    if (!h) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (h = r(u), !h)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      d = !1;
    }
    var m = Yc(l).join(":"), g = c ? m + _a : m;
    return {
      isTailwindClass: !0,
      modifierId: g,
      classGroupId: h,
      originalClassName: o,
      hasPostfixModifier: d
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var a = o.modifierId, l = o.classGroupId, c = o.hasPostfixModifier, u = a + l;
    return i.has(u) ? !1 : (i.add(u), s(l, c).forEach(function(f) {
      return i.add(a + f);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function Ls() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, s, i, o = a;
  function a(c) {
    var u = e[0], f = e.slice(1), h = f.reduce(function(d, m) {
      return m(d);
    }, u());
    return r = Xc(h), s = r.cache.get, i = r.cache.set, o = l, l(c);
  }
  function l(c) {
    var u = s(c);
    if (u)
      return u;
    var f = Qc(c, r);
    return i(c, f), f;
  }
  return function() {
    return o(Bc.apply(null, arguments));
  };
}
function qe(t) {
  var e = function(r) {
    return r[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var ba = /^\[(?:([a-z-]+):)?(.+)\]$/i, eu = /^\d+\/\d+$/, tu = /* @__PURE__ */ new Set(["px", "full", "screen"]), nu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ru = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, su = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function wt(t) {
  return on(t) || tu.has(t) || eu.test(t) || Zs(t);
}
function Zs(t) {
  return bn(t, "length", uu);
}
function iu(t) {
  return bn(t, "size", va);
}
function ou(t) {
  return bn(t, "position", va);
}
function au(t) {
  return bn(t, "url", fu);
}
function kr(t) {
  return bn(t, "number", on);
}
function on(t) {
  return !Number.isNaN(Number(t));
}
function lu(t) {
  return t.endsWith("%") && on(t.slice(0, -1));
}
function zn(t) {
  return Ai(t) || bn(t, "number", Ai);
}
function Ee(t) {
  return ba.test(t);
}
function Bn() {
  return !0;
}
function Wt(t) {
  return nu.test(t);
}
function cu(t) {
  return bn(t, "", du);
}
function bn(t, e, n) {
  var r = ba.exec(t);
  return r ? r[1] ? r[1] === e : n(r[2]) : !1;
}
function uu(t) {
  return ru.test(t);
}
function va() {
  return !1;
}
function fu(t) {
  return t.startsWith("url(");
}
function Ai(t) {
  return Number.isInteger(Number(t));
}
function du(t) {
  return su.test(t);
}
function zs() {
  var t = qe("colors"), e = qe("spacing"), n = qe("blur"), r = qe("brightness"), s = qe("borderColor"), i = qe("borderRadius"), o = qe("borderSpacing"), a = qe("borderWidth"), l = qe("contrast"), c = qe("grayscale"), u = qe("hueRotate"), f = qe("invert"), h = qe("gap"), d = qe("gradientColorStops"), m = qe("gradientColorStopPositions"), g = qe("inset"), p = qe("margin"), y = qe("opacity"), w = qe("padding"), N = qe("saturate"), A = qe("scale"), K = qe("sepia"), D = qe("skew"), V = qe("space"), ke = qe("translate"), J = function() {
    return ["auto", "contain", "none"];
  }, H = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, k = function() {
    return ["auto", Ee, e];
  }, v = function() {
    return [Ee, e];
  }, C = function() {
    return ["", wt];
  }, I = function() {
    return ["auto", on, Ee];
  }, T = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, x = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, ee = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ne = function() {
    return ["", "0", Ee];
  }, Fe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Me = function() {
    return [on, kr];
  }, Ve = function() {
    return [on, Ee];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Bn],
      spacing: [wt],
      blur: ["none", "", Wt, Ee],
      brightness: Me(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Wt, Ee],
      borderSpacing: v(),
      borderWidth: C(),
      contrast: Me(),
      grayscale: ne(),
      hueRotate: Ve(),
      invert: ne(),
      gap: v(),
      gradientColorStops: [t],
      gradientColorStopPositions: [lu, Zs],
      inset: k(),
      margin: k(),
      opacity: Me(),
      padding: v(),
      saturate: Me(),
      scale: Me(),
      sepia: ne(),
      skew: Ve(),
      space: v(),
      translate: v()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ee]
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
        columns: [Wt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Fe()
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
        object: [].concat(T(), [Ee])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", zn]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: k()
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
        flex: ["1", "auto", "initial", "none", Ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ne()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ne()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", zn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Bn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", zn]
        }, Ee]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Bn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [zn]
        }, Ee]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", Ee]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ee]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(ee())
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
        content: ["normal"].concat(ee(), ["baseline"])
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
        "place-content": [].concat(ee(), ["baseline"])
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
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
        w: ["auto", "min", "max", "fit", Ee, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", Ee, wt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Wt]
        }, Wt, Ee]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ee, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Ee, wt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ee, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Wt, Zs]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Bn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", on, kr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ee, wt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ee]
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
        "placeholder-opacity": [y]
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
        "text-opacity": [y]
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
        decoration: [].concat(x(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", wt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ee, wt]
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
        indent: v()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ee]
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
        content: ["none", Ee]
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
        "bg-opacity": [y]
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
        bg: [].concat(T(), [ou])
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
        bg: ["auto", "cover", "contain", iu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, au]
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
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
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
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(x(), ["hidden"])
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: x()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(x())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ee, wt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [wt]
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
        ring: C()
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [wt]
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
        shadow: ["", "inner", "none", Wt, cu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Bn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": W()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Wt, Ee]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
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
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [K]
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
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
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
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [K]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ee]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ve()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ve()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ee]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [zn, Ee]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ke]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ke]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ee]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ee]
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
        "scroll-m": v()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": v()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": v()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": v()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": v()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": v()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": v()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": v()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": v()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": v()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": v()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": v()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": v()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": v()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": v()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": v()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": v()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": v()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ee]
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
        stroke: [wt, kr]
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
function hu(t, e) {
  for (var n in e)
    ya(t, n, e[n]);
  return t;
}
var mu = Object.prototype.hasOwnProperty, pu = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ya(t, e, n) {
  if (!mu.call(t, e) || pu.has(typeof n) || n === null) {
    t[e] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(t[e])) {
    t[e] = t[e].concat(n);
    return;
  }
  if (typeof n == "object" && typeof t[e] == "object") {
    if (t[e] === null) {
      t[e] = n;
      return;
    }
    for (var r in n)
      ya(t[e], r, n[r]);
  }
}
function gu(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return typeof t == "function" ? Ls.apply(void 0, [zs, t].concat(n)) : Ls.apply(void 0, [function() {
    return hu(zs(), t);
  }].concat(n));
}
var ka = /* @__PURE__ */ Ls(zs);
function _u(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function xe(...t) {
  return ka(zc(t));
}
const bu = (t, e = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const n = getComputedStyle(t), r = n.transform === "none" ? "" : n.transform, s = (o, a, l) => {
    const [c, u] = a, [f, h] = l;
    return (o - c) / (u - c) * (h - f) + f;
  }, i = (o) => Object.keys(o).reduce((a, l) => o[l] === void 0 ? a : a + `${l}:${o[l]};`, "");
  return {
    duration: e.duration ?? 200,
    delay: 0,
    css: (o) => {
      const a = s(o, [0, 1], [e.y ?? 5, 0]), l = s(o, [0, 1], [e.x ?? 0, 0]), c = s(o, [0, 1], [e.start ?? 0.95, 1]);
      return i({
        transform: `${r} translate3d(${l}px, ${a}px, 0) scale(${c})`,
        opacity: o
      });
    },
    easing: _u
  };
};
function vu(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[3].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let a = [
    {
      class: r = xe(
        "w-full caption-bottom text-sm",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("div"), n = Re("table"), o && o.c(), le(n, l), ht(e, "class", "w-full overflow-auto");
    },
    m(c, u) {
      O(c, e, u), it(e, n), o && o.m(n, null), s = !0;
    },
    p(c, [u]) {
      o && o.p && (!s || u & /*$$scope*/
      4) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[2],
        s ? de(
          i,
          /*$$scope*/
          c[2],
          u,
          null
        ) : me(
          /*$$scope*/
          c[2]
        ),
        null
      ), le(n, l = ae(a, [
        (!s || u & /*className*/
        1 && r !== (r = xe(
          "w-full caption-bottom text-sm",
          /*className*/
          c[0]
        ))) && { class: r },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        c[1]
      ]));
    },
    i(c) {
      s || (_(o, c), s = !0);
    },
    o(c) {
      b(o, c), s = !1;
    },
    d(c) {
      c && R(e), o && o.d(c);
    }
  };
}
function yu(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = E(E({}, e), we(l)), n(1, s = q(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
let wa = class extends ye {
  constructor(e) {
    super(), ve(this, e, yu, vu, oe, { class: 0 });
  }
};
function ku(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = fe(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = xe(
        "[&_tr:last-child]:border-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = E(a, o[l]);
  return {
    c() {
      e = Re("tbody"), i && i.c(), le(e, a);
    },
    m(l, c) {
      O(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && he(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? de(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : me(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = ae(o, [
        (!r || c & /*className*/
        1 && n !== (n = xe(
          "[&_tr:last-child]:border-0",
          /*className*/
          l[0]
        ))) && { class: n },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (_(i, l), r = !0);
    },
    o(l) {
      b(i, l), r = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function wu(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = E(E({}, e), we(l)), n(1, s = q(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class Ca extends ye {
  constructor(e) {
    super(), ve(this, e, wu, ku, oe, { class: 0 });
  }
}
function Cu(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = fe(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = xe(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = E(a, o[l]);
  return {
    c() {
      e = Re("td"), i && i.c(), le(e, a);
    },
    m(l, c) {
      O(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && he(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? de(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : me(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = ae(o, [
        (!r || c & /*className*/
        1 && n !== (n = xe(
          "p-4 align-middle [&:has([role=checkbox])]:pr-0",
          /*className*/
          l[0]
        ))) && { class: n },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (_(i, l), r = !0);
    },
    o(l) {
      b(i, l), r = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function Tu(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = E(E({}, e), we(l)), n(1, s = q(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class ti extends ye {
  constructor(e) {
    super(), ve(this, e, Tu, Cu, oe, { class: 0 });
  }
}
function Eu(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = fe(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = xe(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = E(a, o[l]);
  return {
    c() {
      e = Re("th"), i && i.c(), le(e, a);
    },
    m(l, c) {
      O(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && he(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? de(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : me(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = ae(o, [
        (!r || c & /*className*/
        1 && n !== (n = xe(
          "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
          /*className*/
          l[0]
        ))) && { class: n },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (_(i, l), r = !0);
    },
    o(l) {
      b(i, l), r = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function Au(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = E(E({}, e), we(l)), n(1, s = q(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class ni extends ye {
  constructor(e) {
    super(), ve(this, e, Au, Eu, oe, { class: 0 });
  }
}
function Su(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = fe(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = xe(
        "[&_tr]:border-b",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = E(a, o[l]);
  return {
    c() {
      e = Re("thead"), i && i.c(), le(e, a);
    },
    m(l, c) {
      O(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && he(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? de(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : me(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = ae(o, [
        (!r || c & /*className*/
        1 && n !== (n = xe(
          "[&_tr]:border-b",
          /*className*/
          l[0]
        ))) && { class: n },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (_(i, l), r = !0);
    },
    o(l) {
      b(i, l), r = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function Ru(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = E(E({}, e), we(l)), n(1, s = q(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class Ta extends ye {
  constructor(e) {
    super(), ve(this, e, Ru, Su, oe, { class: 0 });
  }
}
function Ou(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = fe(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = xe(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = E(a, o[l]);
  return {
    c() {
      e = Re("tr"), i && i.c(), le(e, a);
    },
    m(l, c) {
      O(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && he(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? de(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : me(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = ae(o, [
        (!r || c & /*className*/
        1 && n !== (n = xe(
          "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
          /*className*/
          l[0]
        ))) && { class: n },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (_(i, l), r = !0);
    },
    o(l) {
      b(i, l), r = !1;
    },
    d(l) {
      l && R(e), i && i.d(l);
    }
  };
}
function $u(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = E(E({}, e), we(l)), n(1, s = q(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class cs extends ye {
  constructor(e) {
    super(), ve(this, e, $u, Ou, oe, { class: 0 });
  }
}
function Si(t, e, n) {
  const r = t.slice();
  return r[2] = e[n], r[4] = n, r;
}
function Ri(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function Oi(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function Nu(t) {
  let e;
  return {
    c() {
      e = Qe("#");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Iu(t) {
  let e = (
    /*item*/
    t[5] + ""
  ), n;
  return {
    c() {
      n = Qe(e);
    },
    m(r, s) {
      O(r, n, s);
    },
    p(r, s) {
      s & /*heads*/
      1 && e !== (e = /*item*/
      r[5] + "") && dn(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function $i(t) {
  let e, n;
  return e = new ni({
    props: {
      $$slots: { default: [Iu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, heads*/
      1025 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function xu(t) {
  let e, n, r, s;
  e = new ni({
    props: {
      class: "w-[100px]",
      $$slots: { default: [Nu] },
      $$scope: { ctx: t }
    }
  });
  let i = nt(
    /*heads*/
    t[0]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = $i(Oi(t, i, l));
  const a = (l) => b(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      L(e.$$.fragment), n = Ye();
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      r = $e();
    },
    m(l, c) {
      F(e, l, c), O(l, n, c);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(l, c);
      O(l, r, c), s = !0;
    },
    p(l, c) {
      const u = {};
      if (c & /*$$scope*/
      1024 && (u.$$scope = { dirty: c, ctx: l }), e.$set(u), c & /*heads*/
      1) {
        i = nt(
          /*heads*/
          l[0]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const h = Oi(l, i, f);
          o[f] ? (o[f].p(h, c), _(o[f], 1)) : (o[f] = $i(h), o[f].c(), _(o[f], 1), o[f].m(r.parentNode, r));
        }
        for (Le(), f = i.length; f < o.length; f += 1)
          a(f);
        Ze();
      }
    },
    i(l) {
      if (!s) {
        _(e.$$.fragment, l);
        for (let c = 0; c < i.length; c += 1)
          _(o[c]);
        s = !0;
      }
    },
    o(l) {
      b(e.$$.fragment, l), o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        b(o[c]);
      s = !1;
    },
    d(l) {
      l && (R(n), R(r)), j(e, l), Fn(o, l);
    }
  };
}
function Pu(t) {
  let e, n;
  return e = new cs({
    props: {
      $$slots: { default: [xu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, heads*/
      1025 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function Mu(t) {
  let e = (
    /*i*/
    t[4] + ""
  ), n;
  return {
    c() {
      n = Qe(e);
    },
    m(r, s) {
      O(r, n, s);
    },
    p(r, s) {
      s & /*data*/
      2 && e !== (e = /*i*/
      r[4] + "") && dn(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Du(t) {
  let e = (
    /*row*/
    t[2][
      /*item*/
      t[5]
    ] + ""
  ), n;
  return {
    c() {
      n = Qe(e);
    },
    m(r, s) {
      O(r, n, s);
    },
    p(r, s) {
      s & /*data, heads*/
      3 && e !== (e = /*row*/
      r[2][
        /*item*/
        r[5]
      ] + "") && dn(n, e);
    },
    d(r) {
      r && R(n);
    }
  };
}
function Ni(t) {
  let e, n;
  return e = new ti({
    props: {
      $$slots: { default: [Du] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, data, heads*/
      1027 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function Fu(t) {
  let e, n, r, s;
  e = new ti({
    props: {
      $$slots: { default: [Mu] },
      $$scope: { ctx: t }
    }
  });
  let i = nt(
    /*heads*/
    t[0]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Ni(Ri(t, i, l));
  const a = (l) => b(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      L(e.$$.fragment), n = Ye();
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      r = Ye();
    },
    m(l, c) {
      F(e, l, c), O(l, n, c);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(l, c);
      O(l, r, c), s = !0;
    },
    p(l, c) {
      const u = {};
      if (c & /*$$scope, data*/
      1026 && (u.$$scope = { dirty: c, ctx: l }), e.$set(u), c & /*data, heads*/
      3) {
        i = nt(
          /*heads*/
          l[0]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const h = Ri(l, i, f);
          o[f] ? (o[f].p(h, c), _(o[f], 1)) : (o[f] = Ni(h), o[f].c(), _(o[f], 1), o[f].m(r.parentNode, r));
        }
        for (Le(), f = i.length; f < o.length; f += 1)
          a(f);
        Ze();
      }
    },
    i(l) {
      if (!s) {
        _(e.$$.fragment, l);
        for (let c = 0; c < i.length; c += 1)
          _(o[c]);
        s = !0;
      }
    },
    o(l) {
      b(e.$$.fragment, l), o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        b(o[c]);
      s = !1;
    },
    d(l) {
      l && (R(n), R(r)), j(e, l), Fn(o, l);
    }
  };
}
function Ii(t, e) {
  let n, r, s;
  return r = new cs({
    props: {
      $$slots: { default: [Fu] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = $e(), L(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      e = i;
      const a = {};
      o & /*$$scope, heads, data*/
      1027 && (a.$$scope = { dirty: o, ctx: e }), r.$set(a);
    },
    i(i) {
      s || (_(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(r, i);
    }
  };
}
function ju(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = nt(
    /*data*/
    t[1]
  );
  const o = (a) => (
    /*i*/
    a[4]
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Si(t, i, a), c = o(l);
    n.set(c, e[a] = Ii(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = $e();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      O(a, r, l), s = !0;
    },
    p(a, l) {
      l & /*heads, data*/
      3 && (i = nt(
        /*data*/
        a[1]
      ), Le(), e = ls(e, l, o, 1, a, i, n, r.parentNode, as, Ii, r, Si), Ze());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          _(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        b(e[l]);
      s = !1;
    },
    d(a) {
      a && R(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Lu(t) {
  let e, n, r, s;
  return e = new Ta({
    props: {
      $$slots: { default: [Pu] },
      $$scope: { ctx: t }
    }
  }), r = new Ca({
    props: {
      $$slots: { default: [ju] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      const a = {};
      o & /*$$scope, heads*/
      1025 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      const l = {};
      o & /*$$scope, data, heads*/
      1027 && (l.$$scope = { dirty: o, ctx: i }), r.$set(l);
    },
    i(i) {
      s || (_(e.$$.fragment, i), _(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(e.$$.fragment, i), b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(e, i), j(r, i);
    }
  };
}
function Zu(t) {
  let e, n;
  return e = new wa({
    props: {
      $$slots: { default: [Lu] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, [s]) {
      const i = {};
      s & /*$$scope, data, heads*/
      1027 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function zu(t, e, n) {
  let { heads: r = [] } = e, { data: s = [] } = e;
  return t.$$set = (i) => {
    "heads" in i && n(0, r = i.heads), "data" in i && n(1, s = i.data);
  }, [r, s];
}
class Bu extends ye {
  constructor(e) {
    super(), ve(this, e, zu, Zu, oe, { heads: 0, data: 1 });
  }
}
const Cn = [];
function Nt(t, e) {
  return {
    subscribe: _e(t, e).subscribe
  };
}
function _e(t, e = Be) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function s(a) {
    if (oe(t, a) && (t = a, n)) {
      const l = !Cn.length;
      for (const c of r)
        c[1](), Cn.push(c, t);
      if (l) {
        for (let c = 0; c < Cn.length; c += 2)
          Cn[c][0](Cn[c + 1]);
        Cn.length = 0;
      }
    }
  }
  function i(a) {
    s(a(t));
  }
  function o(a, l = Be) {
    const c = [a, l];
    return r.add(c), r.size === 1 && (n = e(s, i) || Be), a(t), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function pe(t, e, n) {
  const r = !Array.isArray(t), s = r ? [t] : t;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return Nt(n, (o, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = Be;
    const h = () => {
      if (u)
        return;
      f();
      const m = e(r ? c[0] : c, o, a);
      i ? o(m) : f = zt(m) ? m : Be;
    }, d = s.map(
      (m, g) => os(
        m,
        (p) => {
          c[g] = p, u &= ~(1 << g), l && h();
        },
        () => {
          u |= 1 << g;
        }
      )
    );
    return l = !0, h(), function() {
      et(d), f(), l = !1;
    };
  });
}
function xi(t) {
  return {
    subscribe: t.subscribe.bind(t)
  };
}
const Ea = (t) => {
  const e = Object.entries(t), n = e.map(([r]) => r);
  return pe(e.map(([, r]) => r), (r) => Object.fromEntries(r.map((s, i) => [n[i], s])));
}, Vu = (t) => t & /*$values*/
1, Wu = (t) => ({}), Pi = (t) => ({ .../*$values*/
t[0] });
function Gu(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[2],
    Pi
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, [i]) {
      r && r.p && (!e || i & /*$$scope, $values*/
      5) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[2],
        Vu(i) || !e ? me(
          /*$$scope*/
          s[2]
        ) : de(
          n,
          /*$$scope*/
          s[2],
          i,
          Wu
        ),
        Pi
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Uu(t, e, n) {
  const r = [];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e;
  const l = Ea(s);
  return Ge(t, l, (c) => n(0, i = c)), t.$$set = (c) => {
    e = E(E({}, e), we(c)), n(4, s = q(e, r)), "$$scope" in c && n(2, a = c.$$scope);
  }, [i, l, a, o];
}
class mr extends ye {
  constructor(e) {
    super(), ve(this, e, Uu, Gu, oe, {});
  }
}
function Mi(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function Hu(t) {
  let e, n, r;
  const s = [
    /*props*/
    t[2] ?? {}
  ];
  var i = (
    /*config*/
    t[1].component
  );
  function o(a) {
    let l = {
      $$slots: { default: [qu] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < s.length; c += 1)
      l = E(l, s[c]);
    return { props: l };
  }
  return i && (e = Vr(i, o(t)), t[4](e)), {
    c() {
      e && L(e.$$.fragment), n = $e();
    },
    m(a, l) {
      e && F(e, a, l), O(a, n, l), r = !0;
    },
    p(a, l) {
      const c = l & /*props*/
      4 ? ae(s, [st(
        /*props*/
        a[2] ?? {}
      )]) : {};
      if (l & /*$$scope, config*/
      258 && (c.$$scope = { dirty: l, ctx: a }), l & /*config*/
      2 && i !== (i = /*config*/
      a[1].component)) {
        if (e) {
          Le();
          const u = e;
          b(u.$$.fragment, 1, 0, () => {
            j(u, 1);
          }), Ze();
        }
        i ? (e = Vr(i, o(a)), a[4](e), L(e.$$.fragment), _(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(c);
    },
    i(a) {
      r || (e && _(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && b(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && R(n), t[4](null), e && j(e, a);
    }
  };
}
function Ku(t) {
  let e, n, r;
  const s = [
    /*props*/
    t[2] ?? {}
  ];
  var i = (
    /*config*/
    t[1].component
  );
  function o(a) {
    let l = {};
    for (let c = 0; c < s.length; c += 1)
      l = E(l, s[c]);
    return { props: l };
  }
  return i && (e = Vr(i, o()), t[3](e)), {
    c() {
      e && L(e.$$.fragment), n = $e();
    },
    m(a, l) {
      e && F(e, a, l), O(a, n, l), r = !0;
    },
    p(a, l) {
      const c = l & /*props*/
      4 ? ae(s, [st(
        /*props*/
        a[2] ?? {}
      )]) : {};
      if (l & /*config*/
      2 && i !== (i = /*config*/
      a[1].component)) {
        if (e) {
          Le();
          const u = e;
          b(u.$$.fragment, 1, 0, () => {
            j(u, 1);
          }), Ze();
        }
        i ? (e = Vr(i, o()), a[3](e), L(e.$$.fragment), _(e.$$.fragment, 1), F(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(c);
    },
    i(a) {
      r || (e && _(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && b(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && R(n), t[3](null), e && j(e, a);
    }
  };
}
function Di(t) {
  let e, n;
  return e = new vn({ props: { of: (
    /*child*/
    t[5]
  ) } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*config*/
      2 && (i.of = /*child*/
      r[5]), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function qu(t) {
  let e, n, r = nt(
    /*config*/
    t[1].children
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Di(Mi(t, r, o));
  const i = (o) => b(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = $e();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      O(o, e, a), n = !0;
    },
    p(o, a) {
      if (a & /*config*/
      2) {
        r = nt(
          /*config*/
          o[1].children
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = Mi(o, r, l);
          s[l] ? (s[l].p(c, a), _(s[l], 1)) : (s[l] = Di(c), s[l].c(), _(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Le(), l = r.length; l < s.length; l += 1)
          i(l);
        Ze();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          _(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        b(s[a]);
      n = !1;
    },
    d(o) {
      o && R(e), Fn(s, o);
    }
  };
}
function Yu(t) {
  let e, n, r, s;
  const i = [Ku, Hu], o = [];
  function a(l, c) {
    return (
      /*config*/
      l[1].children.length === 0 ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = $e();
    },
    m(l, c) {
      o[e].m(l, c), O(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Le(), b(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (_(n), s = !0);
    },
    o(l) {
      b(n), s = !1;
    },
    d(l) {
      l && R(r), o[e].d(l);
    }
  };
}
function Xu(t, e, n) {
  let { instance: r = void 0 } = e, { config: s } = e, { props: i = void 0 } = e;
  function o(l) {
    Rt[l ? "unshift" : "push"](() => {
      r = l, n(0, r);
    });
  }
  function a(l) {
    Rt[l ? "unshift" : "push"](() => {
      r = l, n(0, r);
    });
  }
  return t.$$set = (l) => {
    "instance" in l && n(0, r = l.instance), "config" in l && n(1, s = l.config), "props" in l && n(2, i = l.props);
  }, [r, s, i, o, a];
}
class Aa extends ye {
  constructor(e) {
    super(), ve(this, e, Xu, Yu, oe, { instance: 0, config: 1, props: 2 });
  }
}
const ri = (t) => (t == null ? void 0 : t.subscribe) instanceof Function, Ju = Nt(void 0);
function Qu(t) {
  let e, n, r;
  function s(o) {
    t[3](o);
  }
  let i = {
    config: (
      /*config*/
      t[0]
    ),
    props: (
      /*config*/
      t[0].props
    )
  };
  return (
    /*instance*/
    t[1] !== void 0 && (i.instance = /*instance*/
    t[1]), e = new Aa({ props: i }), Rt.push(() => _n(e, "instance", s)), {
      c() {
        L(e.$$.fragment);
      },
      m(o, a) {
        F(e, o, a), r = !0;
      },
      p(o, a) {
        const l = {};
        a & /*config*/
        1 && (l.config = /*config*/
        o[0]), a & /*config*/
        1 && (l.props = /*config*/
        o[0].props), !n && a & /*instance*/
        2 && (n = !0, l.instance = /*instance*/
        o[1], gn(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (_(e.$$.fragment, o), r = !0);
      },
      o(o) {
        b(e.$$.fragment, o), r = !1;
      },
      d(o) {
        j(e, o);
      }
    }
  );
}
function ef(t) {
  let e, n;
  return e = new mr({
    props: {
      props: (
        /*config*/
        t[0].props
      ),
      $$slots: {
        default: [
          tf,
          ({ props: r }) => ({ 4: r }),
          ({ props: r }) => r ? 16 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*config*/
      1 && (i.props = /*config*/
      r[0].props), s & /*$$scope, config, props, instance*/
      51 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function tf(t) {
  let e, n, r;
  function s(o) {
    t[2](o);
  }
  let i = {
    config: (
      /*config*/
      t[0]
    ),
    props: (
      /*props*/
      t[4]
    )
  };
  return (
    /*instance*/
    t[1] !== void 0 && (i.instance = /*instance*/
    t[1]), e = new Aa({ props: i }), Rt.push(() => _n(e, "instance", s)), {
      c() {
        L(e.$$.fragment);
      },
      m(o, a) {
        F(e, o, a), r = !0;
      },
      p(o, a) {
        const l = {};
        a & /*config*/
        1 && (l.config = /*config*/
        o[0]), a & /*props*/
        16 && (l.props = /*props*/
        o[4]), !n && a & /*instance*/
        2 && (n = !0, l.instance = /*instance*/
        o[1], gn(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (_(e.$$.fragment, o), r = !0);
      },
      o(o) {
        b(e.$$.fragment, o), r = !1;
      },
      d(o) {
        j(e, o);
      }
    }
  );
}
function nf(t) {
  let e, n, r, s, i;
  const o = [ef, Qu], a = [];
  function l(c, u) {
    return u & /*config*/
    1 && (e = null), e == null && (e = !!ri(
      /*config*/
      c[0].props
    )), e ? 0 : 1;
  }
  return n = l(t, -1), r = a[n] = o[n](t), {
    c() {
      r.c(), s = $e();
    },
    m(c, u) {
      a[n].m(c, u), O(c, s, u), i = !0;
    },
    p(c, [u]) {
      let f = n;
      n = l(c, u), n === f ? a[n].p(c, u) : (Le(), b(a[f], 1, 1, () => {
        a[f] = null;
      }), Ze(), r = a[n], r ? r.p(c, u) : (r = a[n] = o[n](c), r.c()), _(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      i || (_(r), i = !0);
    },
    o(c) {
      b(r), i = !1;
    },
    d(c) {
      c && R(s), a[n].d(c);
    }
  };
}
function rf(t, e, n) {
  let { config: r } = e, s;
  Ms(function() {
    return r.eventHandlers.forEach(([l, c]) => {
      const u = s.$$.callbacks[l] ?? [];
      u.push(c), n(1, s.$$.callbacks[l] = u, s);
    }), function() {
      r.eventHandlers.forEach(([c, u]) => {
        const f = s.$$.callbacks[c], h = f.findIndex((d) => d === u);
        f.splice(h, 1);
      });
    };
  });
  function i(a) {
    s = a, n(1, s);
  }
  function o(a) {
    s = a, n(1, s);
  }
  return t.$$set = (a) => {
    "config" in a && n(0, r = a.config);
  }, [
    r,
    s,
    i,
    o
  ];
}
class sf extends ye {
  constructor(e) {
    super(), ve(this, e, rf, nf, oe, { config: 0 });
  }
}
function of(t) {
  let e, n;
  return e = new sf({ props: { config: (
    /*config*/
    t[0]
  ) } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*config*/
      1 && (i.config = /*config*/
      r[0]), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function af(t) {
  let e;
  return {
    c() {
      e = Qe(
        /*config*/
        t[0]
      );
    },
    m(n, r) {
      O(n, e, r);
    },
    p(n, r) {
      r & /*config*/
      1 && dn(
        e,
        /*config*/
        n[0]
      );
    },
    i: Be,
    o: Be,
    d(n) {
      n && R(e);
    }
  };
}
function lf(t) {
  let e;
  return {
    c() {
      e = Qe(
        /*$readableConfig*/
        t[1]
      );
    },
    m(n, r) {
      O(n, e, r);
    },
    p(n, r) {
      r & /*$readableConfig*/
      2 && dn(
        e,
        /*$readableConfig*/
        n[1]
      );
    },
    i: Be,
    o: Be,
    d(n) {
      n && R(e);
    }
  };
}
function cf(t) {
  let e, n, r, s, i;
  const o = [lf, af, of], a = [];
  function l(c, u) {
    return u & /*config*/
    1 && (e = null), e == null && (e = !!ri(
      /*config*/
      c[0]
    )), e ? 0 : typeof /*config*/
    c[0] != "object" ? 1 : 2;
  }
  return n = l(t, -1), r = a[n] = o[n](t), {
    c() {
      r.c(), s = $e();
    },
    m(c, u) {
      a[n].m(c, u), O(c, s, u), i = !0;
    },
    p(c, [u]) {
      let f = n;
      n = l(c, u), n === f ? a[n].p(c, u) : (Le(), b(a[f], 1, 1, () => {
        a[f] = null;
      }), Ze(), r = a[n], r ? r.p(c, u) : (r = a[n] = o[n](c), r.c()), _(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      i || (_(r), i = !0);
    },
    o(c) {
      b(r), i = !1;
    },
    d(c) {
      c && R(s), a[n].d(c);
    }
  };
}
function uf(t, e, n) {
  let r, { of: s } = e;
  const i = ri(s) ? s : Ju;
  return Ge(t, i, (o) => n(1, r = o)), t.$$set = (o) => {
    "of" in o && n(0, s = o.of);
  }, [s, r, i];
}
class vn extends ye {
  constructor(e) {
    super(), ve(this, e, uf, cf, oe, { of: 0 });
  }
}
class ff {
  constructor(e, n) {
    U(this, "component");
    U(this, "props");
    U(this, "eventHandlers", []);
    U(this, "children", []);
    this.component = e, this.props = n;
  }
  on(e, n) {
    return this.eventHandlers.push([e, n]), this;
  }
  slot(...e) {
    return this.children = e, this;
  }
}
function Cs(t, e) {
  return new ff(t, e);
}
class Sa {
  constructor({ header: e, footer: n, height: r, plugins: s }) {
    U(this, "header");
    U(this, "footer");
    U(this, "height");
    U(this, "plugins");
    this.header = e, this.footer = n, this.height = r, this.plugins = s;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
}
class Ra extends Sa {
  constructor({ header: n, footer: r, plugins: s, id: i }) {
    super({ header: n, footer: r, plugins: s, height: 1 });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__flat", !0);
    U(this, "id");
    this.id = i ?? String(n);
  }
}
class df extends Ra {
  constructor({ header: n, footer: r, plugins: s, cell: i, accessor: o, id: a }) {
    super({ header: n, footer: r, plugins: s, id: "Initialization not complete" });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__data", !0);
    U(this, "cell");
    U(this, "accessorKey");
    U(this, "accessorFn");
    if (this.cell = i, o instanceof Function ? this.accessorFn = o : this.accessorKey = o, a === void 0 && this.accessorKey === void 0 && n === void 0)
      throw new Error("A column id, string accessor, or header is required");
    const l = typeof this.accessorKey == "string" ? this.accessorKey : null;
    this.id = a ?? l ?? String(n);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValue(n) {
    if (this.accessorFn !== void 0)
      return this.accessorFn(n);
    if (this.accessorKey !== void 0)
      return n[this.accessorKey];
  }
}
class hf extends Ra {
  constructor({ header: n, footer: r, plugins: s, id: i, cell: o, data: a }) {
    super({ header: n, footer: r, plugins: s, id: i });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__display", !0);
    U(this, "cell");
    U(this, "data");
    this.cell = o, this.data = a;
  }
}
class mf extends Sa {
  constructor({ header: n, footer: r, columns: s, plugins: i }) {
    const o = Math.max(...s.map((a) => a.height)) + 1;
    super({ header: n, footer: r, height: o, plugins: i });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__group", !0);
    U(this, "columns");
    U(this, "ids");
    this.columns = s, this.ids = Oa(s);
  }
}
const Oa = (t) => t.flatMap((e) => e.isFlat() ? [e.id] : e.isGroup() ? e.ids : []), $a = (t) => t.flatMap((e) => e.isFlat() ? [e] : e.isGroup() ? $a(e.columns) : []), pf = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.forEach((n) => {
    e.set(n, (e.get(n) ?? 0) + 1);
  }), e;
}, gf = (t) => Array.from(pf(t).entries()).filter(([, e]) => e !== 1).map(([e]) => e), _f = (t) => Object.entries(t).map(([e, n]) => `${e}:${n}`).join(";"), bf = (t, e) => t.style === void 0 && e.style === void 0 ? { ...t, ...e } : {
  ...t,
  ...e,
  style: {
    ...typeof t.style == "object" ? t.style : {},
    ...typeof e.style == "object" ? e.style : {}
  }
}, Or = (t) => t.style === void 0 || typeof t.style != "object" ? t : {
  ...t,
  style: _f(t.style)
};
class us {
  constructor({ id: e }) {
    U(this, "id");
    U(this, "attrsForName", {});
    U(this, "propsForName", {});
    U(this, "state");
    this.id = e;
  }
  attrs() {
    return pe(Object.values(this.attrsForName), (e) => {
      let n = {};
      return e.forEach((r) => {
        n = bf(n, r);
      }), Or(n);
    });
  }
  props() {
    return Ea(this.propsForName);
  }
  injectState(e) {
    this.state = e;
  }
  applyHook(e, n) {
    n.props !== void 0 && (this.propsForName[e] = n.props), n.attrs !== void 0 && (this.attrsForName[e] = n.attrs);
  }
}
class Na extends us {
  constructor({ id: n, row: r }) {
    super({ id: n });
    U(this, "row");
    this.row = r;
  }
  attrs() {
    return pe(super.attrs(), (n) => ({
      ...n,
      role: "cell"
    }));
  }
  rowColId() {
    return `${this.row.id}:${this.column.id}`;
  }
  dataRowColId() {
    if (this.row.isData())
      return `${this.row.dataId}:${this.column.id}`;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class si extends Na {
  constructor({ row: n, column: r, label: s, value: i }) {
    super({ id: r.id, row: n });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__data", !0);
    U(this, "column");
    U(this, "label");
    U(this, "value");
    this.column = r, this.label = s, this.value = i;
  }
  render() {
    if (this.label === void 0)
      return `${this.value}`;
    if (this.state === void 0)
      throw new Error("Missing `state` reference");
    return this.label(this, this.state);
  }
  clone() {
    return new si({
      row: this.row,
      column: this.column,
      label: this.label,
      value: this.value
    });
  }
}
class ii extends Na {
  constructor({ row: n, column: r, label: s }) {
    super({ id: r.id, row: n });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__display", !0);
    U(this, "column");
    U(this, "label");
    this.column = r, this.label = s;
  }
  render() {
    if (this.state === void 0)
      throw new Error("Missing `state` reference");
    return this.label(this, this.state);
  }
  clone() {
    return new ii({
      row: this.row,
      column: this.column,
      label: this.label
    });
  }
}
const Fi = (t) => t !== null, Ut = (t) => t !== void 0;
class vf extends us {
  constructor({ id: n, cells: r, cellForId: s, depth: i = 0, parentRow: o }) {
    super({ id: n });
    U(this, "cells");
    /**
     * Get the cell with a given column id.
     *
     * **This includes hidden cells.**
     */
    U(this, "cellForId");
    U(this, "depth");
    U(this, "parentRow");
    U(this, "subRows");
    this.cells = r, this.cellForId = s, this.depth = i, this.parentRow = o;
  }
  attrs() {
    return pe(super.attrs(), (n) => ({
      ...n,
      role: "row"
    }));
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class oi extends vf {
  constructor({ id: n, dataId: r, original: s, cells: i, cellForId: o, depth: a = 0, parentRow: l }) {
    super({ id: n, cells: i, cellForId: o, depth: a, parentRow: l });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__data", !0);
    U(this, "dataId");
    U(this, "original");
    this.dataId = r, this.original = s;
  }
  clone({ includeCells: n = !1, includeSubRows: r = !1 } = {}) {
    var i;
    const s = new oi({
      id: this.id,
      dataId: this.dataId,
      cellForId: this.cellForId,
      cells: this.cells,
      original: this.original,
      depth: this.depth
    });
    if (n) {
      const o = Object.fromEntries(Object.entries(s.cellForId).map(([l, c]) => {
        const u = c.clone();
        return u.row = s, [l, u];
      })), a = s.cells.map(({ id: l }) => o[l]);
      s.cellForId = o, s.cells = a;
    }
    if (r) {
      const o = (i = this.subRows) == null ? void 0 : i.map((a) => a.clone({ includeCells: n, includeSubRows: r }));
      s.subRows = o;
    } else
      s.subRows = this.subRows;
    return s;
  }
}
const yf = (t, e, { rowDataId: n } = {}) => {
  const r = t.map((s, i) => {
    const o = i.toString();
    return new oi({
      id: o,
      dataId: n !== void 0 ? n(s, i) : o,
      original: s,
      cells: [],
      cellForId: {}
    });
  });
  return t.forEach((s, i) => {
    const o = e.map((a) => {
      if (a.isData()) {
        const l = a, c = l.getValue(s);
        return new si({
          row: r[i],
          column: l,
          label: a.cell,
          value: c
        });
      }
      if (a.isDisplay()) {
        const l = a;
        return new ii({
          row: r[i],
          column: l,
          label: a.cell
        });
      }
      throw new Error("Unrecognized `FlatColumn` implementation");
    });
    r[i].cells = o, e.forEach((a, l) => {
      r[i].cellForId[a.id] = o[l];
    });
  }), r;
}, kf = (t, e) => {
  const n = t.map((r) => {
    const s = r.clone();
    return s.cells = [], s.cellForId = {}, s;
  });
  return t.length === 0 || e.length === 0 ? t : (t.forEach((r, s) => {
    const i = r.cells.map((a) => {
      const l = a.clone();
      return l.row = n[s], l;
    }), o = e.map((a) => i.find((l) => l.id === a)).filter(Ut);
    n[s].cells = o, i.forEach((a) => {
      n[s].cellForId[a.id] = a;
    });
  }), n);
}, Ia = " ";
class xa extends us {
  constructor({ id: n, label: r, colspan: s, colstart: i }) {
    super({ id: n });
    U(this, "label");
    U(this, "colspan");
    U(this, "colstart");
    this.label = r, this.colspan = s, this.colstart = i;
  }
  render() {
    if (this.label instanceof Function) {
      if (this.state === void 0)
        throw new Error("Missing `state` reference");
      return this.label(this, this.state);
    }
    return this.label;
  }
  attrs() {
    return pe(super.attrs(), (n) => ({
      ...n,
      role: "columnheader",
      colspan: this.colspan
    }));
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlatDisplay() {
    return "__flat" in this && "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroupDisplay() {
    return "__group" in this && "__display" in this;
  }
}
class fs extends xa {
  constructor({ id: n, label: r, colstart: s }) {
    super({ id: n, label: r, colspan: 1, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__flat", !0);
  }
  clone() {
    return new fs({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class ai extends fs {
  constructor({ id: n, label: r, accessorKey: s, accessorFn: i, colstart: o }) {
    super({ id: n, label: r, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__data", !0);
    U(this, "accessorKey");
    U(this, "accessorFn");
    this.accessorKey = s, this.accessorFn = i;
  }
  clone() {
    return new ai({
      id: this.id,
      label: this.label,
      accessorFn: this.accessorFn,
      accessorKey: this.accessorKey,
      colstart: this.colstart
    });
  }
}
class ds extends fs {
  constructor({ id: n, label: r = Ia, colstart: s }) {
    super({ id: n, label: r, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__display", !0);
  }
  clone() {
    return new ds({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class hs extends xa {
  constructor({ label: n, ids: r, allIds: s, colspan: i, colstart: o }) {
    super({ id: `[${r.join(",")}]`, label: n, colspan: i, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__group", !0);
    U(this, "ids");
    U(this, "allId");
    U(this, "allIds");
    this.ids = r, this.allId = `[${s.join(",")}]`, this.allIds = s;
  }
  setIds(n) {
    this.ids = n, this.id = `[${this.ids.join(",")}]`;
  }
  pushId(n) {
    this.ids = [...this.ids, n], this.id = `[${this.ids.join(",")}]`;
  }
  clone() {
    return new hs({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
class li extends hs {
  constructor({ label: n = Ia, ids: r, allIds: s, colspan: i = 1, colstart: o }) {
    super({ label: n, ids: r, allIds: s, colspan: i, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    U(this, "__display", !0);
  }
  clone() {
    return new li({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
const wf = (t) => t.reduce((e, n) => e + n, 0), Pa = (t, e) => {
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(Array(t).fill(null));
  return n;
}, ji = (t) => {
  const e = t.length;
  if (e === 0)
    return t;
  const n = t[0].length, r = Pa(e, n);
  for (let s = 0; s < n; s++)
    for (let i = 0; i < e; i++)
      r[s][i] = t[i][s];
  return r;
};
class ci extends us {
  constructor({ id: n, cells: r }) {
    super({ id: n });
    U(this, "cells");
    this.cells = r;
  }
  attrs() {
    return pe(super.attrs(), (n) => ({
      ...n,
      role: "row"
    }));
  }
  clone() {
    return new ci({
      id: this.id,
      cells: this.cells
    });
  }
}
const Cf = (t, e = []) => {
  const n = Tf(t);
  let r = ji(n);
  return r = Ef(r, e), Af(r), Sf(ji(r));
}, Tf = (t) => {
  const e = wf(t.map((i) => i.isGroup() ? i.ids.length : 1)), n = Math.max(...t.map((i) => i.height)), r = Pa(e, n);
  let s = 0;
  return t.forEach((i) => {
    const o = n - i.height;
    Ma(r, i, o, s), s += i.isGroup() ? i.ids.length : 1;
  }), r.map((i, o) => i.map((a, l) => {
    var u;
    if (a !== null)
      return a;
    if (o === n - 1)
      return new ds({ id: l.toString(), colstart: l });
    const c = ((u = r[n - 1][l]) == null ? void 0 : u.id) ?? l.toString();
    return new li({ ids: [], allIds: [c], colstart: l });
  }));
}, Ma = (t, e, n, r) => {
  if (e.isData()) {
    t[t.length - 1][r] = new ai({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: e.header,
      accessorFn: e.accessorFn,
      accessorKey: e.accessorKey,
      id: e.id,
      colstart: r
    });
    return;
  }
  if (e.isDisplay()) {
    t[t.length - 1][r] = new ds({
      id: e.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: e.header,
      colstart: r
    });
    return;
  }
  if (e.isGroup()) {
    for (let i = 0; i < e.ids.length; i++)
      t[n][r + i] = new hs({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: e.header,
        colspan: 1,
        allIds: e.ids,
        ids: [],
        colstart: r
      });
    let s = 0;
    e.columns.forEach((i) => {
      Ma(t, i, n + 1, r + s), s += i.isGroup() ? i.ids.length : 1;
    });
    return;
  }
}, Ef = (t, e) => {
  if (e.length === 0)
    return t;
  const n = [];
  return e.forEach((r, s) => {
    const i = t.find((o) => {
      const a = o[o.length - 1];
      if (!a.isFlat())
        throw new Error("The last element of each column must be a `FlatHeaderCell`");
      return a.id === r;
    });
    i !== void 0 && n.push(i.map((o) => {
      const a = o.clone();
      return a.colstart = s, a;
    }));
  }), n;
}, Af = (t) => {
  t.forEach((e) => {
    const n = e[e.length - 1];
    if (!n.isFlat())
      throw new Error("The last element of each column must be a `FlatHeaderCell`");
    e.forEach((r) => {
      r.isGroup() && r.pushId(n.id);
    });
  });
}, Sf = (t) => t.map((e, n) => new ci({ id: n.toString(), cells: Rf(e) })), Rf = (t) => {
  if (t.length === 0)
    return t;
  const e = [];
  let n = 0, r = 1;
  for (; n < t.length; ) {
    const s = t[n].clone();
    if (!s.isGroup()) {
      e.push(s), n++;
      continue;
    }
    r = n + 1;
    const i = [...s.ids];
    for (; r < t.length; ) {
      const o = t[r];
      if (!o.isGroup() || s.allId !== o.allId)
        break;
      i.push(...o.ids), r++;
    }
    s.setIds(i), s.colspan = r - n, e.push(s), n = r;
  }
  return e;
}, Of = (t, e, { rowDataId: n } = {}) => {
  const { data: r, plugins: s } = t, i = $a(e), o = Nt(i), a = pe([r, o], ([M, $]) => yf(M, $, { rowDataId: n })), l = _e([]), c = _e(), u = _e([]), f = _e([]), h = _e({
    role: "table"
  }), d = _e({}), m = _e({
    role: "rowgroup"
  }), g = {
    data: r,
    columns: e,
    flatColumns: i,
    tableAttrs: h,
    tableHeadAttrs: d,
    tableBodyAttrs: m,
    visibleColumns: l,
    headerRows: c,
    originalRows: a,
    rows: u,
    pageRows: f
  }, p = Object.fromEntries(Object.entries(s).map(([M, $]) => {
    const se = Object.fromEntries(i.map((ze) => {
      var lt;
      const ot = (lt = ze.plugins) == null ? void 0 : lt[M];
      if (ot !== void 0)
        return [ze.id, ot];
    }).filter(Ut));
    return [
      M,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      $({ pluginName: M, tableState: g, columnOptions: se })
    ];
  })), y = Object.fromEntries(Object.entries(p).map(([M, $]) => [
    M,
    $.pluginState
  ])), w = {
    data: r,
    columns: e,
    flatColumns: i,
    tableAttrs: h,
    tableHeadAttrs: d,
    tableBodyAttrs: m,
    visibleColumns: l,
    headerRows: c,
    originalRows: a,
    rows: u,
    pageRows: f,
    pluginStates: y
  }, N = Object.values(p).map((M) => M.deriveTableAttrs).filter(Ut);
  let A = Nt({
    role: "table"
  });
  N.forEach((M) => {
    A = M(A);
  });
  const K = pe(A, (M) => {
    const $ = Or(M);
    return h.set($), $;
  }), D = Object.values(p).map((M) => M.deriveTableBodyAttrs).filter(Ut);
  let V = Nt({});
  D.forEach((M) => {
    V = M(V);
  });
  const ke = pe(V, (M) => {
    const $ = Or(M);
    return d.set($), $;
  }), J = Object.values(p).map((M) => M.deriveTableBodyAttrs).filter(Ut);
  let H = Nt({
    role: "rowgroup"
  });
  J.forEach((M) => {
    H = M(H);
  });
  const k = pe(H, (M) => {
    const $ = Or(M);
    return m.set($), $;
  }), v = Object.values(p).map((M) => M.deriveFlatColumns).filter(Ut);
  let C = o;
  v.forEach((M) => {
    C = M(C);
  });
  const I = pe(C, (M) => (l.set(M), M)), T = pe([a, I], ([M, $]) => kf(M, $.map((se) => se.id))), x = Object.values(p).map((M) => M.deriveRows).filter(Ut);
  let W = T;
  x.forEach((M) => {
    W = M(W);
  });
  const ee = pe(W, (M) => (M.forEach(($) => {
    $.injectState(w), $.cells.forEach((se) => {
      se.injectState(w);
    });
  }), Object.entries(p).forEach(([$, se]) => {
    M.forEach((ze) => {
      var ot;
      ((ot = se.hooks) == null ? void 0 : ot["tbody.tr"]) !== void 0 && ze.applyHook($, se.hooks["tbody.tr"](ze)), ze.cells.forEach((lt) => {
        var _t;
        ((_t = se.hooks) == null ? void 0 : _t["tbody.tr.td"]) !== void 0 && lt.applyHook($, se.hooks["tbody.tr.td"](lt));
      });
    });
  }), u.set(M), M)), ne = Object.values(p).map((M) => M.derivePageRows).filter(Ut);
  let Fe = ee;
  ne.forEach((M) => {
    Fe = M(Fe);
  });
  const Me = pe(Fe, (M) => (M.forEach(($) => {
    $.injectState(w), $.cells.forEach((se) => {
      se.injectState(w);
    });
  }), Object.entries(p).forEach(([$, se]) => {
    M.forEach((ze) => {
      var ot;
      ((ot = se.hooks) == null ? void 0 : ot["tbody.tr"]) !== void 0 && ze.applyHook($, se.hooks["tbody.tr"](ze)), ze.cells.forEach((lt) => {
        var _t;
        ((_t = se.hooks) == null ? void 0 : _t["tbody.tr.td"]) !== void 0 && lt.applyHook($, se.hooks["tbody.tr.td"](lt));
      });
    });
  }), f.set(M), M)), Ve = pe(I, (M) => {
    const $ = Cf(e, M.map((se) => se.id));
    return $.forEach((se) => {
      se.injectState(w), se.cells.forEach((ze) => {
        ze.injectState(w);
      });
    }), Object.entries(p).forEach(([se, ze]) => {
      $.forEach((ot) => {
        var lt;
        ((lt = ze.hooks) == null ? void 0 : lt["thead.tr"]) !== void 0 && ot.applyHook(se, ze.hooks["thead.tr"](ot)), ot.cells.forEach((_t) => {
          var yn;
          ((yn = ze.hooks) == null ? void 0 : yn["thead.tr.th"]) !== void 0 && _t.applyHook(se, ze.hooks["thead.tr.th"](_t));
        });
      });
    }), c.set($), $;
  });
  return {
    tableAttrs: K,
    tableHeadAttrs: ke,
    tableBodyAttrs: k,
    visibleColumns: I,
    flatColumns: i,
    headerRows: Ve,
    originalRows: a,
    rows: ee,
    pageRows: Me,
    pluginStates: y
  };
};
class $f {
  constructor(e, n) {
    U(this, "data");
    U(this, "plugins");
    this.data = e, this.plugins = n;
  }
  createColumns(e) {
    const n = Oa(e), r = gf(n);
    if (r.length !== 0)
      throw new Error(`Duplicate column ids not allowed: "${r.join('", "')}"`);
    return e;
  }
  column(e) {
    return new df(e);
  }
  group(e) {
    return new mf(e);
  }
  display(e) {
    return new hf(e);
  }
  createViewModel(e, n) {
    return Of(this, e, n);
  }
}
const Nf = (t, e = {}) => new $f(t, e);
Nt(void 0);
const Da = (t = {}) => {
  const e = (h) => Object.fromEntries(Object.entries(h).filter(([, d]) => d)), { subscribe: n, update: r, set: s } = _e(e(t)), i = (h) => {
    r((d) => {
      const m = h(d);
      return e(m);
    });
  };
  return {
    subscribe: n,
    update: i,
    set: (h) => i(() => h),
    toggle: (h) => {
      r((d) => d[h] === !0 ? (delete d[h], d) : {
        ...d,
        [h]: !0
      });
    },
    add: (h) => {
      r((d) => ({
        ...d,
        [h]: !0
      }));
    },
    addAll: (h) => {
      r((d) => ({
        ...d,
        ...Object.fromEntries(h.map((m) => [m, !0]))
      }));
    },
    remove: (h) => {
      r((d) => (delete d[h], d));
    },
    removeAll: (h) => {
      r((d) => {
        for (const m of h)
          delete d[m];
        return d;
      });
    },
    clear: () => {
      s({});
    }
  };
}, If = (t) => t instanceof MouseEvent ? t.shiftKey : !1, xf = ({ initialHiddenColumnIds: t = [] } = {}) => () => {
  const e = _e(t);
  return {
    pluginState: { hiddenColumnIds: e },
    deriveFlatColumns: (s) => pe([s, e], ([i, o]) => o.length === 0 ? i : i.filter((a) => !o.includes(a.id)))
  };
}, Pf = 1, Mf = ({ items: t, initialPageSize: e, initialPageIndex: n, serverSide: r }) => {
  const s = _e(e), i = (d) => {
    s.update((m) => {
      const g = d(m);
      return Math.max(g, Pf);
    });
  }, o = (d) => i(() => d), a = _e(n);
  function l([d, m]) {
    const g = Math.ceil(m / d);
    return a.update((p) => g > 0 && p >= g ? g - 1 : p), g;
  }
  const c = _e(0);
  let u;
  if (r)
    u = pe([s, c], l);
  else {
    const d = pe(t, (m) => m.length);
    u = pe([s, d], l);
  }
  const f = pe(a, (d) => d > 0), h = pe([a, u], ([d, m]) => d < m - 1);
  return {
    pageSize: {
      subscribe: s.subscribe,
      update: i,
      set: o
    },
    pageIndex: a,
    pageCount: u,
    serverItemCount: c,
    hasPreviousPage: f,
    hasNextPage: h
  };
}, Df = ({ initialPageIndex: t = 0, initialPageSize: e = 10, serverSide: n = !1 } = {}) => () => {
  const r = _e([]), s = _e([]), { pageSize: i, pageIndex: o, pageCount: a, serverItemCount: l, hasPreviousPage: c, hasNextPage: u } = Mf({
    items: r,
    initialPageIndex: t,
    initialPageSize: e,
    serverSide: n
  });
  return {
    pluginState: {
      pageSize: i,
      pageIndex: o,
      pageCount: a,
      serverItemCount: l,
      hasPreviousPage: c,
      hasNextPage: u
    },
    derivePageRows: (d) => pe([d, i, o], ([m, g, p]) => {
      if (r.set(m), n)
        return s.set(m), m;
      const y = p * g, w = m.slice(y, y + g);
      return s.set(w), w;
    })
  };
}, In = (t, e, n) => t.isData() && (!n || t.subRows === void 0) ? e[t.dataId] === !0 : t.subRows === void 0 ? !1 : t.subRows.every((r) => In(r, e, n)), Bs = (t, e, n) => t.isData() && (!n || t.subRows === void 0) ? e[t.dataId] === !0 : t.subRows === void 0 ? !1 : t.subRows.some((r) => Bs(r, e, n)), Fa = (t, e, n, r) => {
  t.isData() && (n[t.dataId] = e, !r) || t.subRows !== void 0 && t.subRows.forEach((s) => {
    Fa(s, e, n, r);
  });
}, Ff = (t, e, n) => {
  const { subscribe: r } = pe(e, (o) => {
    if (t.isData()) {
      if (!n)
        return o[t.dataId] === !0;
      if (o[t.dataId] === !0)
        return !0;
    }
    return In(t, o, n);
  }), s = (o) => {
    e.update((a) => {
      const l = In(t, a, n), c = { ...a };
      return Fa(t, o(l), c, n), t.parentRow !== void 0 && t.parentRow.isData() && (c[t.parentRow.dataId] = In(t.parentRow, c, n)), c;
    });
  };
  return {
    subscribe: r,
    update: s,
    set: (o) => s(() => o)
  };
}, jf = ({ initialSelectedDataIds: t = {}, linkDataSubRows: e = !0 } = {}) => ({ tableState: n }) => {
  const r = Da(t), s = (m) => {
    const g = Ff(m, r, e), p = pe([g, r], ([w, N]) => w ? !1 : Bs(m, N, e)), y = pe(r, (w) => In(m, w, e));
    return {
      isSelected: g,
      isSomeSubRowsSelected: p,
      isAllSubRowsSelected: y
    };
  }, i = pe([n.rows, r], ([m, g]) => m.every((p) => p.isData() ? g[p.dataId] === !0 : !0)), o = (m) => {
    if (m) {
      const p = Se(n.rows).map((y) => y.isData() ? y.dataId : null).filter(Fi);
      r.addAll(p);
    } else
      r.clear();
  }, a = {
    subscribe: i.subscribe,
    update(m) {
      const g = Se(i);
      o(m(g));
    },
    set: o
  }, l = pe([n.rows, r], ([m, g]) => m.some((p) => p.isData() ? g[p.dataId] === !0 : !1)), c = pe([n.pageRows, r], ([m, g]) => m.every((p) => p.isData() ? g[p.dataId] === !0 : !0)), u = (m) => {
    const p = Se(n.pageRows).map((y) => y.isData() ? y.dataId : null).filter(Fi);
    m ? r.addAll(p) : r.removeAll(p);
  }, f = {
    subscribe: c.subscribe,
    update(m) {
      const g = Se(c);
      u(m(g));
    },
    set: u
  }, h = pe([n.pageRows, r], ([m, g]) => m.some((p) => p.isData() ? g[p.dataId] === !0 : !1));
  return {
    pluginState: {
      selectedDataIds: r,
      getRowState: s,
      allRowsSelected: a,
      someRowsSelected: l,
      allPageRowsSelected: f,
      somePageRowsSelected: h
    },
    hooks: {
      "tbody.tr": (m) => ({ props: pe(r, (p) => {
        const y = Bs(m, p, e), w = In(m, p, e);
        return {
          selected: m.isData() ? p[m.dataId] === !0 : w,
          someSubRowsSelected: y,
          allSubRowsSelected: w
        };
      }) })
    }
  };
}, $r = (t, e) => Array.isArray(t) && Array.isArray(e) ? Lf(t, e) : typeof t == "number" && typeof e == "number" ? t - e : t < e ? -1 : t > e ? 1 : 0, Lf = (t, e) => {
  const n = Math.min(t.length, e.length);
  for (let r = 0; r < n; r++) {
    const s = $r(t[r], e[r]);
    if (s !== 0)
      return s;
  }
  return 0;
}, Zf = ["asc", "desc", void 0], zf = (t) => {
  const { subscribe: e, update: n, set: r } = _e(t);
  return {
    subscribe: e,
    update: n,
    set: r,
    toggleId: (o, { multiSort: a = !0, toggleOrder: l = Zf } = {}) => {
      n((c) => {
        const u = c.findIndex((p) => p.id === o), f = c[u], h = f == null ? void 0 : f.order, m = (l.findIndex((p) => p === h) + 1) % l.length, g = l[m];
        return a ? u === -1 && g !== void 0 ? [...c, { id: o, order: g }] : g === void 0 ? [...c.slice(0, u), ...c.slice(u + 1)] : [
          ...c.slice(0, u),
          { id: o, order: g },
          ...c.slice(u + 1)
        ] : g === void 0 ? [] : [{ id: o, order: g }];
      });
    },
    clearId: (o) => {
      n((a) => {
        const l = a.findIndex((c) => c.id === o);
        return l === -1 ? a : [...a.slice(0, l), ...a.slice(l + 1)];
      });
    }
  };
}, ja = (t, e, n) => {
  const r = [...t];
  r.sort((s, i) => {
    var o, a, l;
    for (const c of e) {
      const u = ((o = n[c.id]) == null ? void 0 : o.invert) ?? !1, f = s.cellForId[c.id], h = i.cellForId[c.id];
      let d = 0;
      const m = (a = n[c.id]) == null ? void 0 : a.compareFn, g = (l = n[c.id]) == null ? void 0 : l.getSortValue;
      if (!f.isData())
        return 0;
      const p = f.value, y = h.value;
      if (m !== void 0)
        d = m(p, y);
      else if (g !== void 0) {
        const w = g(p), N = g(y);
        d = $r(w, N);
      } else
        typeof p == "string" || typeof p == "number" ? d = $r(p, y) : p instanceof Date && y instanceof Date && (d = $r(p.getTime(), y.getTime()));
      if (d !== 0) {
        let w = 1;
        return c.order === "desc" && (w *= -1), u && (w *= -1), d * w;
      }
    }
    return 0;
  });
  for (let s = 0; s < r.length; s++) {
    const { subRows: i } = r[s];
    if (i === void 0)
      continue;
    const o = ja(i, e, n), a = r[s].clone();
    a.subRows = o, r[s] = a;
  }
  return r;
}, Bf = ({ initialSortKeys: t = [], disableMultiSort: e = !1, isMultiSortEvent: n = If, toggleOrder: r, serverSide: s = !1 } = {}) => ({ columnOptions: i }) => {
  const o = Object.entries(i).filter(([, f]) => f.disable === !0).map(([f]) => f), a = zf(t), l = _e([]);
  return {
    pluginState: { sortKeys: a, preSortedRows: l },
    deriveRows: (f) => pe([f, a], ([h, d]) => (l.set(h), s ? h : ja(h, d, i))),
    hooks: {
      "thead.tr.th": (f) => {
        const h = o.includes(f.id);
        return { props: pe(a, (m) => {
          const g = m.find((w) => w.id === f.id), p = (w) => {
            f.isData() && (h || a.toggleId(f.id, {
              multiSort: e ? !1 : n(w),
              toggleOrder: r
            }));
          }, y = () => {
            f.isData() && (o.includes(f.id) || a.clearId(f.id));
          };
          return {
            order: g == null ? void 0 : g.order,
            toggle: p,
            clear: y,
            disabled: h
          };
        }) };
      },
      "tbody.tr.td": (f) => ({ props: pe(a, (d) => {
        const m = d.find((g) => g.id === f.id);
        return {
          order: m == null ? void 0 : m.order
        };
      }) })
    }
  };
}, La = (t, e, n, { tableCellMatches: r, fn: s, includeHiddenColumns: i }) => t.map((a) => {
  const { subRows: l } = a;
  if (l === void 0)
    return a;
  const c = La(l, e, n, {
    tableCellMatches: r,
    fn: s,
    includeHiddenColumns: i
  }), u = a.clone();
  return u.subRows = c, u;
}).filter((a) => {
  var c;
  return (((c = a.subRows) == null ? void 0 : c.length) ?? 0) !== 0 ? !0 : Object.values(a.cellForId).map((u) => {
    const f = n[u.id];
    if ((f == null ? void 0 : f.exclude) === !0 || a.cells.find((g) => g.id === u.id) === void 0 && !i || !u.isData())
      return !1;
    let d = u.value;
    (f == null ? void 0 : f.getFilterValue) !== void 0 && (d = f == null ? void 0 : f.getFilterValue(d));
    const m = s({ value: String(d), filterValue: e });
    if (m) {
      const g = u.dataRowColId();
      g !== void 0 && (r[g] = m);
    }
    return m;
  }).includes(!0);
}), Vf = ({ fn: t = Wf, initialFilterValue: e = "", includeHiddenColumns: n = !1, serverSide: r = !1 } = {}) => ({ columnOptions: s }) => {
  const i = _e(e), o = _e([]), a = Da();
  return {
    pluginState: { filterValue: i, preFilteredRows: o },
    deriveRows: (u) => pe([u, i], ([f, h]) => {
      o.set(f), a.clear();
      const d = {}, m = La(f, h, s, {
        tableCellMatches: d,
        fn: t,
        includeHiddenColumns: n
      });
      return a.set(d), r ? f : m;
    }),
    hooks: {
      "tbody.tr.td": (u) => ({ props: pe([i, a], ([h, d]) => {
        const m = u.dataRowColId();
        return {
          matches: h !== "" && m !== void 0 && (d[m] ?? !1)
        };
      }) })
    }
  };
}, Wf = ({ filterValue: t, value: e }) => t === "" ? !0 : String(e).toLowerCase().startsWith(String(t).toLowerCase());
function Gf(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
function Li(t) {
  function e(n) {
    return n(t), () => {
    };
  }
  return { subscribe: e };
}
const wr = (t) => new Proxy(t, {
  get(e, n, r) {
    return Reflect.get(e, n, r);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((n) => n !== "action");
  }
}), Zi = (t) => typeof t == "function";
function ut(t, e) {
  const { stores: n, action: r, returned: s } = e ?? {}, i = (() => {
    if (n && s)
      return pe(n, (a) => {
        const l = s(a);
        if (Zi(l)) {
          const c = (...u) => wr({
            ...l(...u),
            [`data-melt-${t}`]: "",
            action: r ?? yt
          });
          return c.action = r ?? yt, c;
        }
        return wr({
          ...l,
          [`data-melt-${t}`]: "",
          action: r ?? yt
        });
      });
    {
      const a = s, l = a == null ? void 0 : a();
      if (Zi(l)) {
        const c = (...u) => wr({
          ...l(...u),
          [`data-melt-${t}`]: "",
          action: r ?? yt
        });
        return c.action = r ?? yt, Li(c);
      }
      return Li(wr({
        ...l,
        [`data-melt-${t}`]: "",
        action: r ?? yt
      }));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = i.subscribe, o;
}
function Uf(t) {
  const e = (i) => i ? `${t}-${i}` : t, n = (i) => `data-melt-${t}${i ? `-${i}` : ""}`, r = (i) => `[data-melt-${t}${i ? `-${i}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i))
  };
}
const Rn = typeof document < "u", Za = (t) => typeof t == "function";
function X(t) {
  return t instanceof HTMLElement;
}
function Mt(t) {
  const e = t.getAttribute("aria-disabled"), n = t.getAttribute("disabled"), r = t.hasAttribute("data-disabled");
  return !!(e === "true" || n !== null || r);
}
function Ct(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function yt() {
}
function Dt(t, e, n, r) {
  const s = Array.isArray(e) ? e : [e];
  return s.forEach((i) => t.addEventListener(i, n, r)), () => {
    s.forEach((i) => t.removeEventListener(i, n, r));
  };
}
function Ae(t, e, n, r) {
  const s = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const i = Kf((o) => n(o));
    return s.forEach((o) => t.addEventListener(o, i, r)), () => {
      s.forEach((o) => t.removeEventListener(o, i, r));
    };
  }
  return () => void 0;
}
function Hf(t) {
  const e = t.currentTarget;
  if (!X(e))
    return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: {
      originalEvent: t
    },
    cancelable: !0
  });
  return e.dispatchEvent(n), n;
}
function Kf(t) {
  return (e) => {
    const n = Hf(e);
    if (!(n != null && n.defaultPrevented))
      return t(e);
  };
}
function qf(t) {
  t.setAttribute("data-highlighted", "");
}
function Tn(t) {
  t.removeAttribute("data-highlighted");
}
function Yf(t, ...e) {
  const n = {};
  for (const r of Object.keys(t))
    e.includes(r) || (n[r] = t[r]);
  return n;
}
const Kr = (t, e) => {
  const n = (s, i) => {
    t.update((o) => {
      const a = s(o);
      let l = a;
      return e && (l = e({ curr: o, next: a })), i == null || i(l), l;
    });
  };
  return {
    ...t,
    update: n,
    set: (s) => {
      n(() => s);
    }
  };
};
function Nr(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Kn(t) {
  return Object.keys(t).reduce((e, n) => t[n] === void 0 ? e : e + `${n}:${t[n]};`, "");
}
let Xf = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", za = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += Xf[Math.random() * 64 | 0];
  return e;
};
function Cr() {
  return za(10);
}
const Ue = {
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
}, Jf = [Ue.ARROW_DOWN, Ue.PAGE_UP, Ue.HOME], Qf = [Ue.ARROW_UP, Ue.PAGE_DOWN, Ue.END], zi = [...Jf, ...Qf], qr = [Ue.ENTER, Ue.SPACE];
function ed(t, e = 500) {
  let n = null;
  return function(...r) {
    const s = () => {
      n = null, t(...r);
    };
    n && clearTimeout(n), n = setTimeout(s, e);
  };
}
const Ba = () => typeof window < "u";
function td() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const Va = (t) => Ba() && t.test(td()), nd = () => Ba() && !!navigator.maxTouchPoints, rd = () => Va(/^Mac/) && !nd(), sd = () => Va(/mac|iphone|ipad|ipod/i), id = () => sd() && !rd(), Ts = "data-melt-scroll-lock";
function Bi(t, e) {
  if (!t)
    return;
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function od(t, e, n) {
  if (!t)
    return;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
  };
}
function ad(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function ld(t) {
  const e = t ?? document, n = e.defaultView ?? window, { documentElement: r, body: s } = e;
  if (s.hasAttribute(Ts))
    return yt;
  s.setAttribute(Ts, "");
  const o = n.innerWidth - r.clientWidth, a = () => od(r, "--scrollbar-width", `${o}px`), l = ad(r), c = n.getComputedStyle(s)[l], u = () => Bi(s, {
    overflow: "hidden",
    [l]: `calc(${c} + ${o}px)`
  }), f = () => {
    const { scrollX: d, scrollY: m, visualViewport: g } = n, p = (g == null ? void 0 : g.offsetLeft) ?? 0, y = (g == null ? void 0 : g.offsetTop) ?? 0, w = Bi(s, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(m - Math.floor(y))}px`,
      left: `${-(d - Math.floor(p))}px`,
      right: "0",
      [l]: `calc(${c} + ${o}px)`
    });
    return () => {
      w == null || w(), n.scrollTo(d, m);
    };
  }, h = [a(), id() ? f() : u()];
  return () => {
    h.forEach((d) => d == null ? void 0 : d()), s.removeAttribute(Ts);
  };
}
function Vi(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return pe([e, n, r], ([s, i, o]) => (s || i) && o !== null);
}
function Wa(t, e) {
  let n = [];
  const r = (a) => {
    n.push(a);
  }, s = () => {
    n.forEach((a) => a()), n = [];
  }, i = pe(t, (a) => (s(), e(a, r)));
  return la(s), {
    ...i,
    subscribe: (...a) => {
      const l = i.subscribe(...a);
      return () => {
        l(), s();
      };
    }
  };
}
function Gt(t, e) {
  const n = Wa(t, (r, s) => ({
    stores: r,
    onUnsubscribe: s
  })).subscribe(({ stores: r, onUnsubscribe: s }) => {
    const i = e(r);
    i && s(i);
  });
  return la(n), n;
}
function ms(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const r = n, s = t[r];
    e[r] = _e(s);
  }), e;
}
function rt(t) {
  if (!Rn)
    return;
  const e = document.activeElement;
  X(e) && e !== t && (e.tabIndex = -1, t.tabIndex = 0, Nr(1).then(() => t.focus()));
}
function Ga() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function cd(t) {
  const e = Ga(), r = e.indexOf(t) + 1, s = e[r];
  return r < e.length && X(s) ? s : null;
}
function ud(t) {
  const e = Ga(), r = e.indexOf(t) - 1, s = e[r];
  return r >= 0 && X(s) ? s : null;
}
const fd = {
  onMatch: rt
};
function dd(t = {}) {
  const e = { ...fd, ...t }, n = _e([]), r = ed(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (i, o) => {
      const a = document.activeElement;
      if (!X(a))
        return;
      const l = Se(n);
      if (!Array.isArray(l))
        return;
      l.push(i.toLowerCase()), n.update(() => l);
      const c = o.filter((p) => !(p.getAttribute("disabled") === "true" || p.getAttribute("aria-disabled") === "true" || p.hasAttribute("data-disabled"))), f = l.length > 1 && l.every((p) => p === l[0]) ? l[0] : l.join(""), h = a ? c.indexOf(a) : -1;
      let d = Gf(c, Math.max(h, 0));
      f.length === 1 && (d = d.filter((p) => p !== a));
      const g = d.find((p) => p.innerText.toLowerCase().startsWith(f.toLowerCase()));
      X(g) && g !== a && e.onMatch(g), r();
    }
  };
}
function hd(t) {
  let e = t.parentElement;
  for (; X(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function md(t, e) {
  const n = hd(t);
  return e !== void 0 ? e : n === "body" ? document.body : null;
}
const pd = {
  disabled: !1,
  required: !1,
  name: void 0,
  value: "on",
  defaultChecked: !1
};
function gd(t) {
  const e = { ...pd, ...t }, n = ms(Yf(e, "checked", "defaultChecked")), { disabled: r, name: s, required: i, value: o } = n, a = e.checked ?? _e(e.defaultChecked), l = Kr(a, e == null ? void 0 : e.onCheckedChange), c = ut("checkbox", {
    stores: [l, r, i],
    returned: ([d, m, g]) => ({
      "data-disabled": m,
      "data-state": d === "indeterminate" ? "indeterminate" : d ? "checked" : "unchecked",
      type: "button",
      role: "checkbox",
      "aria-checked": d === "indeterminate" ? "mixed" : d,
      "aria-required": g
    }),
    action: (d) => ({
      destroy: Ct(Ae(d, "keydown", (g) => {
        g.key === Ue.ENTER && g.preventDefault();
      }), Ae(d, "click", () => {
        Se(r) || l.update((g) => g === "indeterminate" ? !0 : !g);
      }))
    })
  }), u = ut("checkbox-input", {
    stores: [l, s, o, i, r],
    returned: ([d, m, g, p, y]) => ({
      type: "checkbox",
      "aria-hidden": !0,
      hidden: !0,
      tabindex: -1,
      name: m,
      value: g,
      checked: d === "indeterminate" ? !1 : d,
      required: p,
      disabled: y,
      style: Kn({
        position: "absolute",
        opacity: 0,
        "pointer-events": "none",
        margin: 0,
        transform: "translateX(-100%)"
      })
    })
  }), f = pe(l, (d) => d === "indeterminate"), h = pe(l, (d) => d === !0);
  return {
    elements: {
      root: c,
      input: u
    },
    states: {
      checked: l
    },
    helpers: {
      isIndeterminate: f,
      isChecked: h
    },
    options: n
  };
}
const _d = Nt(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return Dt(document, "pointerdown", e, {
    passive: !1,
    capture: !0
  });
}), bd = (t, e = {}) => {
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : Se(n.enabled);
  }
  const s = _d.subscribe((i) => {
    var a;
    if (!r() || !i || i.target === t)
      return;
    const o = i.composedPath();
    if (!o.includes(t)) {
      if (n.ignore) {
        if (Za(n.ignore)) {
          if (n.ignore(i))
            return;
        } else if (Array.isArray(n.ignore) && n.ignore.length > 0 && n.ignore.some((l) => l && (i.target === l || o.includes(l))))
          return;
      }
      (a = n.handler) == null || a.call(n, i);
    }
  });
  return {
    update(i) {
      n = { ...n, ...i };
    },
    destroy() {
      s();
    }
  };
}, vd = Nt(void 0, (t) => {
  function e(r) {
    r && r.key === Ue.ESCAPE && t(r), t(void 0);
  }
  return Dt(document, "keydown", e, {
    passive: !1,
    capture: !0
  });
}), yd = (t, e = {}) => {
  t.dataset.escapee = "";
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : Se(n.enabled);
  }
  const s = vd.subscribe((i) => {
    var a;
    if (!i || !r())
      return;
    const o = i.target;
    if (!(!X(o) || o.closest("[data-escapee]") !== t)) {
      if (n.ignore) {
        if (Za(n.ignore)) {
          if (n.ignore(i))
            return;
        } else if (Array.isArray(n.ignore) && n.ignore.length > 0 && n.ignore.some((l) => l && o === l))
          return;
      }
      (a = n.handler) == null || a.call(n, i);
    }
  });
  return {
    update(i) {
      n = { ...n, ...i };
    },
    destroy() {
      t.removeAttribute("data-escapee"), s();
    }
  };
}, Xt = Math.min, mt = Math.max, Yr = Math.round, Tr = Math.floor, Jt = (t) => ({
  x: t,
  y: t
}), kd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wd = {
  start: "end",
  end: "start"
};
function Vs(t, e, n) {
  return mt(t, Xt(e, n));
}
function jn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Qt(t) {
  return t.split("-")[0];
}
function Ln(t) {
  return t.split("-")[1];
}
function Ua(t) {
  return t === "x" ? "y" : "x";
}
function ui(t) {
  return t === "y" ? "height" : "width";
}
function pr(t) {
  return ["top", "bottom"].includes(Qt(t)) ? "y" : "x";
}
function fi(t) {
  return Ua(pr(t));
}
function Cd(t, e, n) {
  n === void 0 && (n = !1);
  const r = Ln(t), s = fi(t), i = ui(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Xr(o)), [o, Xr(o)];
}
function Td(t) {
  const e = Xr(t);
  return [Ws(t), e, Ws(e)];
}
function Ws(t) {
  return t.replace(/start|end/g, (e) => wd[e]);
}
function Ed(t, e, n) {
  const r = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? s : r : e ? r : s;
    case "left":
    case "right":
      return e ? i : o;
    default:
      return [];
  }
}
function Ad(t, e, n, r) {
  const s = Ln(t);
  let i = Ed(Qt(t), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), e && (i = i.concat(i.map(Ws)))), i;
}
function Xr(t) {
  return t.replace(/left|right|bottom|top/g, (e) => kd[e]);
}
function Sd(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ha(t) {
  return typeof t != "number" ? Sd(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Jr(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Wi(t, e, n) {
  let {
    reference: r,
    floating: s
  } = t;
  const i = pr(e), o = fi(e), a = ui(o), l = Qt(e), c = i === "y", u = r.x + r.width / 2 - s.width / 2, f = r.y + r.height / 2 - s.height / 2, h = r[a] / 2 - s[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: u,
        y: r.y - s.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - s.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ln(e)) {
    case "start":
      d[o] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[o] += h * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const Rd = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: o
  } = n, a = i.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let c = await o.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: u,
    y: f
  } = Wi(c, r, l), h = r, d = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: p,
      fn: y
    } = a[g], {
      x: w,
      y: N,
      data: A,
      reset: K
    } = await y({
      x: u,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: s,
      middlewareData: d,
      rects: c,
      platform: o,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = w ?? u, f = N ?? f, d = {
      ...d,
      [p]: {
        ...d[p],
        ...A
      }
    }, K && m <= 50) {
      m++, typeof K == "object" && (K.placement && (h = K.placement), K.rects && (c = K.rects === !0 ? await o.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : K.rects), {
        x: u,
        y: f
      } = Wi(c, h, l)), g = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: s,
    middlewareData: d
  };
};
async function di(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: o,
    elements: a,
    strategy: l
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = jn(e, t), m = Ha(d), p = a[h ? f === "floating" ? "reference" : "floating" : f], y = Jr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(p))) == null || n ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = f === "floating" ? {
    ...o.floating,
    x: r,
    y: s
  } : o.reference, N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), A = await (i.isElement == null ? void 0 : i.isElement(N)) ? await (i.getScale == null ? void 0 : i.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, K = Jr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: N,
    strategy: l
  }) : w);
  return {
    top: (y.top - K.top + m.top) / A.y,
    bottom: (K.bottom - y.bottom + m.bottom) / A.y,
    left: (y.left - K.left + m.left) / A.x,
    right: (K.right - y.right + m.right) / A.x
  };
}
const Od = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: s,
      rects: i,
      platform: o,
      elements: a,
      middlewareData: l
    } = e, {
      element: c,
      padding: u = 0
    } = jn(t, e) || {};
    if (c == null)
      return {};
    const f = Ha(u), h = {
      x: n,
      y: r
    }, d = fi(s), m = ui(d), g = await o.getDimensions(c), p = d === "y", y = p ? "top" : "left", w = p ? "bottom" : "right", N = p ? "clientHeight" : "clientWidth", A = i.reference[m] + i.reference[d] - h[d] - i.floating[m], K = h[d] - i.reference[d], D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let V = D ? D[N] : 0;
    (!V || !await (o.isElement == null ? void 0 : o.isElement(D))) && (V = a.floating[N] || i.floating[m]);
    const ke = A / 2 - K / 2, J = V / 2 - g[m] / 2 - 1, H = Xt(f[y], J), k = Xt(f[w], J), v = H, C = V - g[m] - k, I = V / 2 - g[m] / 2 + ke, T = Vs(v, I, C), x = !l.arrow && Ln(s) != null && I != T && i.reference[m] / 2 - (I < v ? H : k) - g[m] / 2 < 0, W = x ? I < v ? v - I : C - I : 0;
    return {
      [d]: h[d] - W,
      data: {
        [d]: T,
        centerOffset: I - T + W
      },
      reset: x
    };
  }
}), $d = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: o,
        platform: a,
        elements: l
      } = e, {
        mainAxis: c = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: d = "none",
        flipAlignment: m = !0,
        ...g
      } = jn(t, e), p = Qt(r), y = Qt(o) === o, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), N = f || (y || !m ? [Xr(o)] : Td(o));
      !f && d !== "none" && N.push(...Ad(o, m, d, w));
      const A = [o, ...N], K = await di(e, g), D = [];
      let V = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && D.push(K[p]), u) {
        const k = Cd(r, i, w);
        D.push(K[k[0]], K[k[1]]);
      }
      if (V = [...V, {
        placement: r,
        overflows: D
      }], !D.every((k) => k <= 0)) {
        var ke, J;
        const k = (((ke = s.flip) == null ? void 0 : ke.index) || 0) + 1, v = A[k];
        if (v)
          return {
            data: {
              index: k,
              overflows: V
            },
            reset: {
              placement: v
            }
          };
        let C = (J = V.filter((I) => I.overflows[0] <= 0).sort((I, T) => I.overflows[1] - T.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!C)
          switch (h) {
            case "bestFit": {
              var H;
              const I = (H = V.map((T) => [T.placement, T.overflows.filter((x) => x > 0).reduce((x, W) => x + W, 0)]).sort((T, x) => T[1] - x[1])[0]) == null ? void 0 : H[0];
              I && (C = I);
              break;
            }
            case "initialPlacement":
              C = o;
              break;
          }
        if (r !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
async function Nd(t, e) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = Qt(n), a = Ln(n), l = pr(n) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = i && l ? -1 : 1, f = jn(e, t);
  let {
    mainAxis: h,
    crossAxis: d,
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
  return a && typeof m == "number" && (d = a === "end" ? m * -1 : m), l ? {
    x: d * u,
    y: h * c
  } : {
    x: h * c,
    y: d * u
  };
}
const Id = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, s = await Nd(e, t);
      return {
        x: n + s.x,
        y: r + s.y,
        data: s
      };
    }
  };
}, xd = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: s
      } = e, {
        mainAxis: i = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (p) => {
            let {
              x: y,
              y: w
            } = p;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = jn(t, e), c = {
        x: n,
        y: r
      }, u = await di(e, l), f = pr(Qt(s)), h = Ua(f);
      let d = c[h], m = c[f];
      if (i) {
        const p = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", w = d + u[p], N = d - u[y];
        d = Vs(w, d, N);
      }
      if (o) {
        const p = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = m + u[p], N = m - u[y];
        m = Vs(w, m, N);
      }
      const g = a.fn({
        ...e,
        [h]: d,
        [f]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, Pd = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: r,
        platform: s,
        elements: i
      } = e, {
        apply: o = () => {
        },
        ...a
      } = jn(t, e), l = await di(e, a), c = Qt(n), u = Ln(n), f = pr(n) === "y", {
        width: h,
        height: d
      } = r.floating;
      let m, g;
      c === "top" || c === "bottom" ? (m = c, g = u === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = c, m = u === "end" ? "top" : "bottom");
      const p = d - l[m], y = h - l[g], w = !e.middlewareData.shift;
      let N = p, A = y;
      if (f) {
        const D = h - l.left - l.right;
        A = u || w ? Xt(y, D) : D;
      } else {
        const D = d - l.top - l.bottom;
        N = u || w ? Xt(p, D) : D;
      }
      if (w && !u) {
        const D = mt(l.left, 0), V = mt(l.right, 0), ke = mt(l.top, 0), J = mt(l.bottom, 0);
        f ? A = h - 2 * (D !== 0 || V !== 0 ? D + V : mt(l.left, l.right)) : N = d - 2 * (ke !== 0 || J !== 0 ? ke + J : mt(l.top, l.bottom));
      }
      await o({
        ...e,
        availableWidth: A,
        availableHeight: N
      });
      const K = await s.getDimensions(i.floating);
      return h !== K.width || d !== K.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function en(t) {
  return Ka(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function pt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Bt(t) {
  var e;
  return (e = (Ka(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ka(t) {
  return t instanceof Node || t instanceof pt(t).Node;
}
function Zt(t) {
  return t instanceof Element || t instanceof pt(t).Element;
}
function Pt(t) {
  return t instanceof HTMLElement || t instanceof pt(t).HTMLElement;
}
function Gi(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof pt(t).ShadowRoot;
}
function gr(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: s
  } = kt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(s);
}
function Md(t) {
  return ["table", "td", "th"].includes(en(t));
}
function hi(t) {
  const e = mi(), n = kt(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Dd(t) {
  let e = Dn(t);
  for (; Pt(e) && !ps(e); ) {
    if (hi(e))
      return e;
    e = Dn(e);
  }
  return null;
}
function mi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ps(t) {
  return ["html", "body", "#document"].includes(en(t));
}
function kt(t) {
  return pt(t).getComputedStyle(t);
}
function gs(t) {
  return Zt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Dn(t) {
  if (en(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Gi(t) && t.host || // Fallback.
    Bt(t)
  );
  return Gi(e) ? e.host : e;
}
function qa(t) {
  const e = Dn(t);
  return ps(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Pt(e) && gr(e) ? e : qa(e);
}
function ur(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const s = qa(t), i = s === ((r = t.ownerDocument) == null ? void 0 : r.body), o = pt(s);
  return i ? e.concat(o, o.visualViewport || [], gr(s) ? s : [], o.frameElement && n ? ur(o.frameElement) : []) : e.concat(s, ur(s));
}
function Ya(t) {
  const e = kt(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const s = Pt(t), i = s ? t.offsetWidth : n, o = s ? t.offsetHeight : r, a = Yr(n) !== i || Yr(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function pi(t) {
  return Zt(t) ? t : t.contextElement;
}
function xn(t) {
  const e = pi(t);
  if (!Pt(e))
    return Jt(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = Ya(e);
  let o = (i ? Yr(n.width) : n.width) / r, a = (i ? Yr(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Fd = /* @__PURE__ */ Jt(0);
function Xa(t) {
  const e = pt(t);
  return !mi() || !e.visualViewport ? Fd : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function jd(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== pt(t) ? !1 : e;
}
function hn(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect(), i = pi(t);
  let o = Jt(1);
  e && (r ? Zt(r) && (o = xn(r)) : o = xn(t));
  const a = jd(i, n, r) ? Xa(i) : Jt(0);
  let l = (s.left + a.x) / o.x, c = (s.top + a.y) / o.y, u = s.width / o.x, f = s.height / o.y;
  if (i) {
    const h = pt(i), d = r && Zt(r) ? pt(r) : r;
    let m = h.frameElement;
    for (; m && r && d !== h; ) {
      const g = xn(m), p = m.getBoundingClientRect(), y = kt(m), w = p.left + (m.clientLeft + parseFloat(y.paddingLeft)) * g.x, N = p.top + (m.clientTop + parseFloat(y.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, f *= g.y, l += w, c += N, m = pt(m).frameElement;
    }
  }
  return Jr({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function Ld(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const s = Pt(n), i = Bt(n);
  if (n === i)
    return e;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Jt(1);
  const l = Jt(0);
  if ((s || !s && r !== "fixed") && ((en(n) !== "body" || gr(i)) && (o = gs(n)), Pt(n))) {
    const c = hn(n);
    a = xn(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: e.width * a.x,
    height: e.height * a.y,
    x: e.x * a.x - o.scrollLeft * a.x + l.x,
    y: e.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Zd(t) {
  return Array.from(t.getClientRects());
}
function Ja(t) {
  return hn(Bt(t)).left + gs(t).scrollLeft;
}
function zd(t) {
  const e = Bt(t), n = gs(t), r = t.ownerDocument.body, s = mt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = mt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Ja(t);
  const a = -n.scrollTop;
  return kt(r).direction === "rtl" && (o += mt(e.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
function Bd(t, e) {
  const n = pt(t), r = Bt(t), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = mi();
    (!c || c && e === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
function Vd(t, e) {
  const n = hn(t, !0, e === "fixed"), r = n.top + t.clientTop, s = n.left + t.clientLeft, i = Pt(t) ? xn(t) : Jt(1), o = t.clientWidth * i.x, a = t.clientHeight * i.y, l = s * i.x, c = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Ui(t, e, n) {
  let r;
  if (e === "viewport")
    r = Bd(t, n);
  else if (e === "document")
    r = zd(Bt(t));
  else if (Zt(e))
    r = Vd(e, n);
  else {
    const s = Xa(t);
    r = {
      ...e,
      x: e.x - s.x,
      y: e.y - s.y
    };
  }
  return Jr(r);
}
function Qa(t, e) {
  const n = Dn(t);
  return n === e || !Zt(n) || ps(n) ? !1 : kt(n).position === "fixed" || Qa(n, e);
}
function Wd(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = ur(t, [], !1).filter((a) => Zt(a) && en(a) !== "body"), s = null;
  const i = kt(t).position === "fixed";
  let o = i ? Dn(t) : t;
  for (; Zt(o) && !ps(o); ) {
    const a = kt(o), l = hi(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || gr(o) && !l && Qa(t, o)) ? r = r.filter((u) => u !== o) : s = a, o = Dn(o);
  }
  return e.set(t, r), r;
}
function Gd(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = t;
  const o = [...n === "clippingAncestors" ? Wd(e, this._c) : [].concat(n), r], a = o[0], l = o.reduce((c, u) => {
    const f = Ui(e, u, s);
    return c.top = mt(f.top, c.top), c.right = Xt(f.right, c.right), c.bottom = Xt(f.bottom, c.bottom), c.left = mt(f.left, c.left), c;
  }, Ui(e, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ud(t) {
  return Ya(t);
}
function Hd(t, e, n) {
  const r = Pt(e), s = Bt(e), i = n === "fixed", o = hn(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Jt(0);
  if (r || !r && !i)
    if ((en(e) !== "body" || gr(s)) && (a = gs(e)), r) {
      const c = hn(e, !0, i, e);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else
      s && (l.x = Ja(s));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Hi(t, e) {
  return !Pt(t) || kt(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function el(t, e) {
  const n = pt(t);
  if (!Pt(t))
    return n;
  let r = Hi(t, e);
  for (; r && Md(r) && kt(r).position === "static"; )
    r = Hi(r, e);
  return r && (en(r) === "html" || en(r) === "body" && kt(r).position === "static" && !hi(r)) ? n : r || Dd(t) || n;
}
const Kd = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: r
  } = t;
  const s = this.getOffsetParent || el, i = this.getDimensions;
  return {
    reference: Hd(e, await s(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function qd(t) {
  return kt(t).direction === "rtl";
}
const Yd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ld,
  getDocumentElement: Bt,
  getClippingRect: Gd,
  getOffsetParent: el,
  getElementRects: Kd,
  getClientRects: Zd,
  getDimensions: Ud,
  getScale: xn,
  isElement: Zt,
  isRTL: qd
};
function Xd(t, e) {
  let n = null, r;
  const s = Bt(t);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: u,
      width: f,
      height: h
    } = t.getBoundingClientRect();
    if (a || e(), !f || !h)
      return;
    const d = Tr(u), m = Tr(s.clientWidth - (c + f)), g = Tr(s.clientHeight - (u + h)), p = Tr(c), w = {
      rootMargin: -d + "px " + -m + "px " + -g + "px " + -p + "px",
      threshold: mt(0, Xt(1, l)) || 1
    };
    let N = !0;
    function A(K) {
      const D = K[0].intersectionRatio;
      if (D !== l) {
        if (!N)
          return o();
        D ? o(!1, D) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      N = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...w,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, w);
    }
    n.observe(t);
  }
  return o(!0), i;
}
function Jd(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = pi(t), u = s || i ? [...c ? ur(c) : [], ...ur(e)] : [];
  u.forEach((y) => {
    s && y.addEventListener("scroll", n, {
      passive: !0
    }), i && y.addEventListener("resize", n);
  });
  const f = c && a ? Xd(c, n) : null;
  let h = -1, d = null;
  o && (d = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      d && d.observe(e);
    })), n();
  }), c && !l && d.observe(c), d.observe(e));
  let m, g = l ? hn(t) : null;
  l && p();
  function p() {
    const y = hn(t);
    g && (y.x !== g.x || y.y !== g.y || y.width !== g.width || y.height !== g.height) && n(), g = y, m = requestAnimationFrame(p);
  }
  return n(), () => {
    u.forEach((y) => {
      s && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), f && f(), d && d.disconnect(), d = null, l && cancelAnimationFrame(m);
  };
}
const Qd = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: Yd,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return Rd(t, e, {
    ...s,
    platform: i
  });
}, eh = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, th = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function nh(t, e, n = {}) {
  if (!e || !t)
    return {
      destroy: yt
    };
  const r = { ...eh, ...n }, s = e.querySelector("[data-arrow=true]"), i = [];
  r.flip && i.push($d({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const o = X(s) ? s.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const l = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += o), i.push(Id(l));
  }
  i.push(xd({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), s && i.push(Od({ element: s, padding: 8 })), i.push(Pd({
    padding: r.overflowPadding,
    apply({ rects: l, availableHeight: c, availableWidth: u }) {
      r.sameWidth && Object.assign(e.style, {
        width: `${Math.round(l.reference.width)}px`,
        minWidth: "unset"
      }), r.fitViewport && Object.assign(e.style, {
        maxWidth: `${u}px`,
        maxHeight: `${c}px`
      });
    }
  }));
  function a() {
    if (!t || !e)
      return;
    const { placement: l, strategy: c } = r;
    Qd(t, e, {
      placement: l,
      middleware: i,
      strategy: c
    }).then((u) => {
      const f = Math.round(u.x), h = Math.round(u.y);
      if (Object.assign(e.style, {
        top: `${h}px`,
        left: `${f}px`
      }), X(s) && u.middlewareData.arrow) {
        const { x: d, y: m } = u.middlewareData.arrow, g = u.placement.split("-")[0];
        Object.assign(s.style, {
          position: "absolute",
          left: d != null ? `${d}px` : "",
          top: m != null ? `${m}px` : "",
          [g]: `calc(100% - ${o}px)`,
          transform: th[g],
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
    destroy: Jd(t, e, a)
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var tl = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Qr = /* @__PURE__ */ tl.join(","), nl = typeof Element > "u", mn = nl ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, es = !nl && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t == null ? void 0 : t.ownerDocument;
}, ts = function t(e, n) {
  var r;
  n === void 0 && (n = !0);
  var s = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), i = s === "" || s === "true", o = i || n && e && t(e.parentNode);
  return o;
}, rh = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, rl = function(e, n, r) {
  if (ts(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(Qr));
  return n && mn.call(e, Qr) && s.unshift(e), s = s.filter(r), s;
}, sl = function t(e, n, r) {
  for (var s = [], i = Array.from(e); i.length; ) {
    var o = i.shift();
    if (!ts(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), l = a.length ? a : o.children, c = t(l, !0, r);
        r.flatten ? s.push.apply(s, c) : s.push({
          scopeParent: o,
          candidates: c
        });
      } else {
        var u = mn.call(o, Qr);
        u && r.filter(o) && (n || !e.includes(o)) && s.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), h = !ts(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && h) {
          var d = t(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? s.push.apply(s, d) : s.push({
            scopeParent: o,
            candidates: d
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return s;
}, il = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, sn = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || rh(e)) && !il(e) ? 0 : e.tabIndex;
}, sh = function(e, n) {
  var r = sn(e);
  return r < 0 && n && !il(e) ? 0 : r;
}, ih = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, ol = function(e) {
  return e.tagName === "INPUT";
}, oh = function(e) {
  return ol(e) && e.type === "hidden";
}, ah = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, lh = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, ch = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || es(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = r(window.CSS.escape(e.name));
  else
    try {
      s = r(e.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var i = lh(s, e.form);
  return !i || i === e;
}, uh = function(e) {
  return ol(e) && e.type === "radio";
}, fh = function(e) {
  return uh(e) && !ch(e);
}, dh = function(e) {
  var n, r = e && es(e), s = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== e) {
    var o, a, l;
    for (i = !!((o = s) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(s) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && s; ) {
      var c, u, f;
      r = es(s), s = (c = r) === null || c === void 0 ? void 0 : c.host, i = !!((u = s) !== null && u !== void 0 && (f = u.ownerDocument) !== null && f !== void 0 && f.contains(s));
    }
  }
  return i;
}, Ki = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, hh = function(e, n) {
  var r = n.displayCheck, s = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var i = mn.call(e, "details>summary:first-of-type"), o = i ? e.parentElement : e;
  if (mn.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var a = e; e; ) {
        var l = e.parentElement, c = es(e);
        if (l && !l.shadowRoot && s(l) === !0)
          return Ki(e);
        e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l;
      }
      e = a;
    }
    if (dh(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Ki(e);
  return !1;
}, mh = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return mn.call(n, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ns = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  ts(n) || oh(n) || hh(n, e) || // For a details element with a summary, the summary element gets the focus
  ah(n) || mh(n));
}, Gs = function(e, n) {
  return !(fh(n) || sn(n) < 0 || !ns(e, n));
}, ph = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, gh = function t(e) {
  var n = [], r = [];
  return e.forEach(function(s, i) {
    var o = !!s.scopeParent, a = o ? s.scopeParent : s, l = sh(a, o), c = o ? t(s.candidates) : a;
    l === 0 ? o ? n.push.apply(n, c) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: s,
      isScope: o,
      content: c
    });
  }), r.sort(ih).reduce(function(s, i) {
    return i.isScope ? s.push.apply(s, i.content) : s.push(i.content), s;
  }, []).concat(n);
}, _h = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = sl([e], n.includeContainer, {
    filter: Gs.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: ph
  }) : r = rl(e, n.includeContainer, Gs.bind(null, n)), gh(r);
}, bh = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = sl([e], n.includeContainer, {
    filter: ns.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = rl(e, n.includeContainer, ns.bind(null, n)), r;
}, En = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return mn.call(e, Qr) === !1 ? !1 : Gs(n, e);
}, vh = /* @__PURE__ */ tl.concat("iframe").join(","), Es = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return mn.call(e, vh) === !1 ? !1 : ns(n, e);
};
/*!
* focus-trap 7.5.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function qi(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qi(Object(n), !0).forEach(function(r) {
      yh(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qi(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function yh(t, e, n) {
  return e = wh(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function kh(t, e) {
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
function wh(t) {
  var e = kh(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Xi = {
  activateTrap: function(e, n) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== n && r.pause();
    }
    var s = e.indexOf(n);
    s === -1 || e.splice(s, 1), e.push(n);
  },
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, Ch = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Th = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, Yn = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, Eh = function(e) {
  return Yn(e) && !e.shiftKey;
}, Ah = function(e) {
  return Yn(e) && e.shiftKey;
}, Ji = function(e) {
  return setTimeout(e, 0);
}, Qi = function(e, n) {
  var r = -1;
  return e.every(function(s, i) {
    return n(s) ? (r = i, !1) : !0;
  }), r;
}, Vn = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, Er = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Sh = [], Rh = function(e, n) {
  var r = (n == null ? void 0 : n.document) || document, s = (n == null ? void 0 : n.trapStack) || Sh, i = Yi({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Eh,
    isKeyBackward: Ah
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
  }, a, l = function(k, v, C) {
    return k && k[v] !== void 0 ? k[v] : i[C || v];
  }, c = function(k, v) {
    var C = typeof (v == null ? void 0 : v.composedPath) == "function" ? v.composedPath() : void 0;
    return o.containerGroups.findIndex(function(I) {
      var T = I.container, x = I.tabbableNodes;
      return T.contains(k) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (C == null ? void 0 : C.includes(T)) || x.find(function(W) {
        return W === k;
      });
    });
  }, u = function(k) {
    var v = i[k];
    if (typeof v == "function") {
      for (var C = arguments.length, I = new Array(C > 1 ? C - 1 : 0), T = 1; T < C; T++)
        I[T - 1] = arguments[T];
      v = v.apply(void 0, I);
    }
    if (v === !0 && (v = void 0), !v) {
      if (v === void 0 || v === !1)
        return v;
      throw new Error("`".concat(k, "` was specified but was not a node, or did not return a node"));
    }
    var x = v;
    if (typeof v == "string" && (x = r.querySelector(v), !x))
      throw new Error("`".concat(k, "` as selector refers to no known node"));
    return x;
  }, f = function() {
    var k = u("initialFocus");
    if (k === !1)
      return !1;
    if (k === void 0 || !Es(k, i.tabbableOptions))
      if (c(r.activeElement) >= 0)
        k = r.activeElement;
      else {
        var v = o.tabbableGroups[0], C = v && v.firstTabbableNode;
        k = C || u("fallbackFocus");
      }
    if (!k)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return k;
  }, h = function() {
    if (o.containerGroups = o.containers.map(function(k) {
      var v = _h(k, i.tabbableOptions), C = bh(k, i.tabbableOptions), I = v.length > 0 ? v[0] : void 0, T = v.length > 0 ? v[v.length - 1] : void 0, x = C.find(function(ne) {
        return En(ne);
      }), W = C.slice().reverse().find(function(ne) {
        return En(ne);
      }), ee = !!v.find(function(ne) {
        return sn(ne) > 0;
      });
      return {
        container: k,
        tabbableNodes: v,
        focusableNodes: C,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: ee,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: I,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: T,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: x,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: W,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Fe) {
          var Me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ve = v.indexOf(Fe);
          return Ve < 0 ? Me ? C.slice(C.indexOf(Fe) + 1).find(function(M) {
            return En(M);
          }) : C.slice(0, C.indexOf(Fe)).reverse().find(function(M) {
            return En(M);
          }) : v[Ve + (Me ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(k) {
      return k.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(k) {
      return k.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, d = function H(k) {
    if (k !== !1 && k !== r.activeElement) {
      if (!k || !k.focus) {
        H(f());
        return;
      }
      k.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = k, Ch(k) && k.select();
    }
  }, m = function(k) {
    var v = u("setReturnFocus", k);
    return v || (v === !1 ? !1 : k);
  }, g = function(k) {
    var v = k.target, C = k.event, I = k.isBackward, T = I === void 0 ? !1 : I;
    v = v || Er(C), h();
    var x = null;
    if (o.tabbableGroups.length > 0) {
      var W = c(v, C), ee = W >= 0 ? o.containerGroups[W] : void 0;
      if (W < 0)
        T ? x = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : x = o.tabbableGroups[0].firstTabbableNode;
      else if (T) {
        var ne = Qi(o.tabbableGroups, function(se) {
          var ze = se.firstTabbableNode;
          return v === ze;
        });
        if (ne < 0 && (ee.container === v || Es(v, i.tabbableOptions) && !En(v, i.tabbableOptions) && !ee.nextTabbableNode(v, !1)) && (ne = W), ne >= 0) {
          var Fe = ne === 0 ? o.tabbableGroups.length - 1 : ne - 1, Me = o.tabbableGroups[Fe];
          x = sn(v) >= 0 ? Me.lastTabbableNode : Me.lastDomTabbableNode;
        } else
          Yn(C) || (x = ee.nextTabbableNode(v, !1));
      } else {
        var Ve = Qi(o.tabbableGroups, function(se) {
          var ze = se.lastTabbableNode;
          return v === ze;
        });
        if (Ve < 0 && (ee.container === v || Es(v, i.tabbableOptions) && !En(v, i.tabbableOptions) && !ee.nextTabbableNode(v)) && (Ve = W), Ve >= 0) {
          var M = Ve === o.tabbableGroups.length - 1 ? 0 : Ve + 1, $ = o.tabbableGroups[M];
          x = sn(v) >= 0 ? $.firstTabbableNode : $.firstDomTabbableNode;
        } else
          Yn(C) || (x = ee.nextTabbableNode(v));
      }
    } else
      x = u("fallbackFocus");
    return x;
  }, p = function(k) {
    var v = Er(k);
    if (!(c(v, k) >= 0)) {
      if (Vn(i.clickOutsideDeactivates, k)) {
        a.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: i.returnFocusOnDeactivate
        });
        return;
      }
      Vn(i.allowOutsideClick, k) || k.preventDefault();
    }
  }, y = function(k) {
    var v = Er(k), C = c(v, k) >= 0;
    if (C || v instanceof Document)
      C && (o.mostRecentlyFocusedNode = v);
    else {
      k.stopImmediatePropagation();
      var I, T = !0;
      if (o.mostRecentlyFocusedNode)
        if (sn(o.mostRecentlyFocusedNode) > 0) {
          var x = c(o.mostRecentlyFocusedNode), W = o.containerGroups[x].tabbableNodes;
          if (W.length > 0) {
            var ee = W.findIndex(function(ne) {
              return ne === o.mostRecentlyFocusedNode;
            });
            ee >= 0 && (i.isKeyForward(o.recentNavEvent) ? ee + 1 < W.length && (I = W[ee + 1], T = !1) : ee - 1 >= 0 && (I = W[ee - 1], T = !1));
          }
        } else
          o.containerGroups.some(function(ne) {
            return ne.tabbableNodes.some(function(Fe) {
              return sn(Fe) > 0;
            });
          }) || (T = !1);
      else
        T = !1;
      T && (I = g({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), d(I || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, w = function(k) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = k;
    var C = g({
      event: k,
      isBackward: v
    });
    C && (Yn(k) && k.preventDefault(), d(C));
  }, N = function(k) {
    if (Th(k) && Vn(i.escapeDeactivates, k) !== !1) {
      k.preventDefault(), a.deactivate();
      return;
    }
    (i.isKeyForward(k) || i.isKeyBackward(k)) && w(k, i.isKeyBackward(k));
  }, A = function(k) {
    var v = Er(k);
    c(v, k) >= 0 || Vn(i.clickOutsideDeactivates, k) || Vn(i.allowOutsideClick, k) || (k.preventDefault(), k.stopImmediatePropagation());
  }, K = function() {
    if (o.active)
      return Xi.activateTrap(s, a), o.delayInitialFocusTimer = i.delayInitialFocus ? Ji(function() {
        d(f());
      }) : d(f()), r.addEventListener("focusin", y, !0), r.addEventListener("mousedown", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", A, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), a;
  }, D = function() {
    if (o.active)
      return r.removeEventListener("focusin", y, !0), r.removeEventListener("mousedown", p, !0), r.removeEventListener("touchstart", p, !0), r.removeEventListener("click", A, !0), r.removeEventListener("keydown", N, !0), a;
  }, V = function(k) {
    var v = k.some(function(C) {
      var I = Array.from(C.removedNodes);
      return I.some(function(T) {
        return T === o.mostRecentlyFocusedNode;
      });
    });
    v && d(f());
  }, ke = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(V) : void 0, J = function() {
    ke && (ke.disconnect(), o.active && !o.paused && o.containers.map(function(k) {
      ke.observe(k, {
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
    activate: function(k) {
      if (o.active)
        return this;
      var v = l(k, "onActivate"), C = l(k, "onPostActivate"), I = l(k, "checkCanFocusTrap");
      I || h(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = r.activeElement, v == null || v();
      var T = function() {
        I && h(), K(), J(), C == null || C();
      };
      return I ? (I(o.containers.concat()).then(T, T), this) : (T(), this);
    },
    deactivate: function(k) {
      if (!o.active)
        return this;
      var v = Yi({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, k);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, D(), o.active = !1, o.paused = !1, J(), Xi.deactivateTrap(s, a);
      var C = l(v, "onDeactivate"), I = l(v, "onPostDeactivate"), T = l(v, "checkCanReturnFocus"), x = l(v, "returnFocus", "returnFocusOnDeactivate");
      C == null || C();
      var W = function() {
        Ji(function() {
          x && d(m(o.nodeFocusedBeforeActivation)), I == null || I();
        });
      };
      return x && T ? (T(m(o.nodeFocusedBeforeActivation)).then(W, W), this) : (W(), this);
    },
    pause: function(k) {
      if (o.paused || !o.active)
        return this;
      var v = l(k, "onPause"), C = l(k, "onPostPause");
      return o.paused = !0, v == null || v(), D(), J(), C == null || C(), this;
    },
    unpause: function(k) {
      if (!o.paused || !o.active)
        return this;
      var v = l(k, "onUnpause"), C = l(k, "onPostUnpause");
      return o.paused = !1, v == null || v(), h(), K(), J(), C == null || C(), this;
    },
    updateContainerElements: function(k) {
      var v = [].concat(k).filter(Boolean);
      return o.containers = v.map(function(C) {
        return typeof C == "string" ? r.querySelector(C) : C;
      }), o.active && h(), J(), this;
    }
  }, a.updateContainerElements(e), a;
};
function Oh(t = {}) {
  let e;
  const { immediate: n, ...r } = t, s = _e(!1), i = _e(!1), o = (f) => e == null ? void 0 : e.activate(f), a = (f) => {
    e == null || e.deactivate(f);
  }, l = () => {
    e && (e.pause(), i.set(!0));
  }, c = () => {
    e && (e.unpause(), i.set(!1));
  };
  return {
    useFocusTrap: (f) => (e = Rh(f, {
      ...r,
      onActivate() {
        var h;
        s.set(!0), (h = t.onActivate) == null || h.call(t);
      },
      onDeactivate() {
        var h;
        s.set(!1), (h = t.onDeactivate) == null || h.call(t);
      }
    }), n && o(), {
      destroy() {
        a(), e = void 0;
      }
    }),
    hasFocus: xi(s),
    isPaused: xi(i),
    activate: o,
    deactivate: a,
    pause: l,
    unpause: c
  };
}
const $h = {
  floating: {},
  focusTrap: {},
  clickOutside: {},
  escapeKeydown: {},
  portal: "body"
}, eo = (t, e) => {
  t.dataset.escapee = "";
  const { anchorElement: n, open: r, options: s } = e;
  if (!n || !r || !s)
    return { destroy: yt };
  const i = { ...$h, ...s }, o = [];
  if (i.portal !== null) {
    const l = Nh(t, i.portal);
    l != null && l.destroy && o.push(l.destroy);
  }
  if (o.push(nh(n, t, i.floating).destroy), i.focusTrap !== null) {
    const { useFocusTrap: l } = Oh({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: t,
      ...i.focusTrap
    }), c = l(t);
    c != null && c.destroy && o.push(c.destroy);
  }
  i.clickOutside !== null && o.push(bd(t, {
    enabled: r,
    handler: (l) => {
      l.defaultPrevented || X(n) && !n.contains(l.target) && (r.set(!1), n.focus());
    },
    ...i.clickOutside
  }).destroy), i.escapeKeydown !== null && o.push(yd(t, {
    enabled: r,
    handler: (l) => {
      l.defaultPrevented || r.set(!1);
    },
    ...i.escapeKeydown
  }).destroy);
  const a = Ct(...o);
  return {
    destroy() {
      a();
    }
  };
}, Nh = (t, e = "body") => {
  let n;
  if (!X(e) && typeof e != "string")
    return {
      destroy: yt
    };
  async function r(i) {
    if (e = i, typeof e == "string") {
      if (n = document.querySelector(e), n === null && (await Hn(), n = document.querySelector(e)), n === null)
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement)
      n = e;
    else
      throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
    t.dataset.portal = "", n.appendChild(t), t.hidden = !1;
  }
  function s() {
    t.remove();
  }
  return r(e), {
    update: r,
    destroy: s
  };
}, Ih = {
  ltr: [...qr, Ue.ARROW_RIGHT],
  rtl: [...qr, Ue.ARROW_LEFT]
}, xh = {
  ltr: [Ue.ARROW_LEFT],
  rtl: [Ue.ARROW_RIGHT]
}, Ph = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  portal: "body",
  loop: !1,
  dir: "ltr",
  defaultOpen: !1,
  typeahead: !0
};
function Mh(t) {
  const { name: e, selector: n } = Uf(t.selector), { preventScroll: r, arrowSize: s, positioning: i, closeOnEscape: o, closeOnOutsideClick: a, portal: l, forceVisible: c, typeahead: u } = t.rootOptions, f = t.rootOpen, h = t.rootActiveTrigger, d = t.nextFocusable, m = t.prevFocusable, g = _e(!1), p = _e(0), y = _e(null), w = _e("right"), N = _e(null), A = Wa([w, y], ([S, G]) => (Z) => S === (G == null ? void 0 : G.side) && Dh(Z, G == null ? void 0 : G.area)), { typed: K, handleTypeaheadSearch: D } = dd(), V = {
    menu: Cr(),
    trigger: Cr()
  }, ke = Vi({
    open: f,
    forceVisible: c,
    activeTrigger: h
  }), J = ut(e(), {
    stores: [ke, l],
    returned: ([S, G]) => ({
      role: "menu",
      hidden: S ? void 0 : !0,
      style: Kn({
        display: S ? void 0 : "none"
      }),
      id: V.menu,
      "aria-labelledby": V.trigger,
      "data-state": S ? "open" : "closed",
      "data-portal": G ? "" : void 0,
      tabindex: -1
    }),
    action: (S) => {
      let G = yt;
      const Z = Gt([ke, h, i, a, l, o], ([Te, He, We, Ne, Ie, ge]) => {
        G(), !(!Te || !He) && Hn().then(() => {
          Gn(S, n);
          const je = eo(S, {
            anchorElement: He,
            open: f,
            options: {
              floating: We,
              clickOutside: Ne ? void 0 : null,
              portal: md(S, Ie),
              escapeKeydown: ge ? void 0 : null
            }
          });
          je && je.destroy && (G = je.destroy);
        });
      }), Ce = Ct(Ae(S, "keydown", (Te) => {
        const He = Te.target, We = Te.currentTarget;
        if (!X(He) || !X(We) || !(He.closest('[role="menu"]') === We))
          return;
        if (zi.includes(Te.key) && no(Te), Te.key === Ue.TAB) {
          Te.preventDefault(), f.set(!1), to(Te, d, m);
          return;
        }
        const Ie = Te.key.length === 1;
        !(Te.ctrlKey || Te.altKey || Te.metaKey) && Ie && Se(u) === !0 && D(Te.key, rn(We));
      }));
      return {
        destroy() {
          Z(), Ce(), G();
        }
      };
    }
  }), H = ut(e("trigger"), {
    stores: [f],
    returned: ([S]) => ({
      "aria-controls": V.menu,
      "aria-expanded": S,
      "data-state": S ? "open" : "closed",
      id: V.trigger,
      tabindex: 0
    }),
    action: (S) => (Ar(S), {
      destroy: Ct(Ae(S, "click", (Z) => {
        const Ce = Se(f), Te = Z.currentTarget;
        X(Te) && (Me(Te), Ce || Z.preventDefault());
      }), Ae(S, "keydown", (Z) => {
        const Ce = Z.currentTarget;
        if (!X(Ce) || !(qr.includes(Z.key) || Z.key === Ue.ARROW_DOWN))
          return;
        Z.preventDefault(), Me(Ce);
        const Te = Ce.getAttribute("aria-controls");
        if (!Te)
          return;
        const He = document.getElementById(Te);
        if (!He)
          return;
        const We = rn(He);
        We.length && rt(We[0]);
      }))
    })
  }), k = ut(e("arrow"), {
    stores: s,
    returned: (S) => ({
      "data-arrow": !0,
      style: Kn({
        position: "absolute",
        width: `var(--arrow-size, ${S}px)`,
        height: `var(--arrow-size, ${S}px)`
      })
    })
  }), v = ut(e("item"), {
    returned: () => ({
      role: "menuitem",
      tabindex: -1,
      "data-orientation": "vertical"
    }),
    action: (S) => (Gn(S, n), Ar(S), {
      destroy: Ct(Ae(S, "pointerdown", (Z) => {
        const Ce = Z.currentTarget;
        if (X(Ce) && Mt(Ce)) {
          Z.preventDefault();
          return;
        }
      }), Ae(S, "click", (Z) => {
        const Ce = Z.currentTarget;
        if (X(Ce)) {
          if (Mt(Ce)) {
            Z.preventDefault();
            return;
          }
          if (Z.defaultPrevented) {
            rt(Ce);
            return;
          }
          Nr(1).then(() => {
            f.set(!1);
          });
        }
      }), Ae(S, "keydown", (Z) => {
        yn(Z);
      }), Ae(S, "pointermove", (Z) => {
        lt(Z);
      }), Ae(S, "pointerleave", (Z) => {
        _t(Z);
      }), Ae(S, "focusin", (Z) => {
        Ve(Z);
      }), Ae(S, "focusout", (Z) => {
        M(Z);
      }))
    })
  }), C = ut(e("group"), {
    returned: () => (S) => ({
      role: "group",
      "aria-labelledby": S
    })
  }), I = ut(e("group-label"), {
    returned: () => (S) => ({
      id: S
    })
  }), T = {
    defaultChecked: !1,
    disabled: !1
  }, x = (S) => {
    const G = { ...T, ...S }, Z = G.checked ?? _e(G.defaultChecked ?? null), Ce = Kr(Z, G.onCheckedChange), Te = _e(G.disabled);
    return {
      elements: {
        checkboxItem: ut(e("checkbox-item"), {
          stores: [Ce, Te],
          returned: ([We, Ne]) => ({
            role: "menuitemcheckbox",
            tabindex: -1,
            "data-orientation": "vertical",
            "aria-checked": vs(We) ? "mixed" : We ? "true" : "false",
            "data-disabled": Ne ? "" : void 0,
            "data-state": Cl(We)
          }),
          action: (We) => (Gn(We, n), Ar(We), {
            destroy: Ct(Ae(We, "pointerdown", (Ie) => {
              const ge = Ie.currentTarget;
              if (X(ge) && Mt(ge)) {
                Ie.preventDefault();
                return;
              }
            }), Ae(We, "click", (Ie) => {
              const ge = Ie.currentTarget;
              if (X(ge)) {
                if (Mt(ge)) {
                  Ie.preventDefault();
                  return;
                }
                if (Ie.defaultPrevented) {
                  rt(ge);
                  return;
                }
                Ce.update((je) => vs(je) ? !0 : !je), Hn().then(() => {
                  f.set(!1);
                });
              }
            }), Ae(We, "keydown", (Ie) => {
              yn(Ie);
            }), Ae(We, "pointermove", (Ie) => {
              const ge = Ie.currentTarget;
              if (X(ge)) {
                if (Mt(ge)) {
                  se(Ie);
                  return;
                }
                lt(Ie, ge);
              }
            }), Ae(We, "pointerleave", (Ie) => {
              _t(Ie);
            }), Ae(We, "focusin", (Ie) => {
              Ve(Ie);
            }), Ae(We, "focusout", (Ie) => {
              M(Ie);
            }))
          })
        })
      },
      states: {
        checked: Ce
      },
      options: {
        disabled: Te
      }
    };
  }, W = (S = {}) => {
    const G = S.value ?? _e(S.defaultValue ?? null), Z = Kr(G, S.onValueChange), Ce = ut(e("radio-group"), {
      returned: () => ({
        role: "group"
      })
    }), Te = {
      disabled: !1
    }, He = ut(e("radio-item"), {
      stores: [Z],
      returned: ([Ne]) => (Ie) => {
        const { value: ge, disabled: je } = { ...Te, ...Ie }, bt = Ne === ge;
        return {
          disabled: je,
          role: "menuitemradio",
          "data-state": bt ? "checked" : "unchecked",
          "aria-checked": bt,
          "data-disabled": je ? "" : void 0,
          "data-value": ge,
          "data-orientation": "vertical",
          tabindex: -1
        };
      },
      action: (Ne) => (Gn(Ne, n), {
        destroy: Ct(Ae(Ne, "pointerdown", (ge) => {
          const je = ge.currentTarget;
          if (!X(je))
            return;
          const bt = Ne.dataset.value;
          if (Ne.dataset.disabled || bt === void 0) {
            ge.preventDefault();
            return;
          }
        }), Ae(Ne, "click", (ge) => {
          const je = ge.currentTarget;
          if (!X(je))
            return;
          const bt = Ne.dataset.value;
          if (Ne.dataset.disabled || bt === void 0) {
            ge.preventDefault();
            return;
          }
          if (ge.defaultPrevented) {
            if (!X(je))
              return;
            rt(je);
            return;
          }
          Z.set(bt), Hn().then(() => {
            f.set(!1);
          });
        }), Ae(Ne, "keydown", (ge) => {
          yn(ge);
        }), Ae(Ne, "pointermove", (ge) => {
          const je = ge.currentTarget;
          if (!X(je))
            return;
          const bt = Ne.dataset.value;
          if (Ne.dataset.disabled || bt === void 0) {
            se(ge);
            return;
          }
          lt(ge, je);
        }), Ae(Ne, "pointerleave", (ge) => {
          _t(ge);
        }), Ae(Ne, "focusin", (ge) => {
          Ve(ge);
        }), Ae(Ne, "focusout", (ge) => {
          M(ge);
        }))
      })
    }), We = pe(Z, (Ne) => (Ie) => Ne === Ie);
    return {
      elements: {
        radioGroup: Ce,
        radioItem: He
      },
      states: {
        value: Z
      },
      helpers: {
        isChecked: We
      }
    };
  }, { elements: { root: ee } } = zh({
    orientation: "horizontal"
  }), ne = {
    ...Ph,
    disabled: !1,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  }, Fe = (S) => {
    const G = { ...ne, ...S }, Z = _e(!1), Ce = ms(G), { positioning: Te, arrowSize: He, disabled: We } = Ce, Ne = _e(null), Ie = _e(null), ge = _e(0), je = {
      menu: Cr(),
      trigger: Cr()
    };
    Ms(() => {
      const Oe = document.getElementById(je.trigger);
      Oe && Ne.set(Oe);
    });
    const bt = Vi({
      open: Z,
      forceVisible: c,
      activeTrigger: Ne
    }), vr = ut(e("submenu"), {
      stores: [bt],
      returned: ([Oe]) => ({
        role: "menu",
        hidden: Oe ? void 0 : !0,
        style: Kn({
          display: Oe ? void 0 : "none"
        }),
        id: je.menu,
        "aria-labelledby": je.trigger,
        "data-state": Oe ? "open" : "closed",
        tabindex: -1
      }),
      action: (Oe) => {
        let vt = yt;
        const dt = Gt([bt, Te], ([re, De]) => {
          if (vt(), !re)
            return;
          const Je = Se(Ne);
          Je && Hn().then(() => {
            const tt = _i(Je), Ot = eo(Oe, {
              anchorElement: Je,
              open: Z,
              options: {
                floating: De,
                portal: X(tt) ? tt : void 0,
                clickOutside: null,
                focusTrap: null
              }
            });
            Ot && Ot.destroy && (vt = Ot.destroy);
          });
        }), Ke = Ct(Ae(Oe, "keydown", (re) => {
          if (re.key === Ue.ESCAPE)
            return;
          const De = re.target, Je = re.currentTarget;
          if (!X(De) || !X(Je) || !(De.closest('[role="menu"]') === Je))
            return;
          if (zi.includes(re.key)) {
            re.stopImmediatePropagation(), no(re);
            return;
          }
          const Ot = xh.ltr.includes(re.key), kn = re.ctrlKey || re.altKey || re.metaKey, yr = re.key.length === 1;
          if (Ot) {
            const bi = Se(Ne);
            re.preventDefault(), Z.update(() => (bi && rt(bi), !1));
            return;
          }
          if (re.key === Ue.TAB) {
            re.preventDefault(), f.set(!1), to(re, d, m);
            return;
          }
          !kn && yr && Se(u) === !0 && D(re.key, rn(Je));
        }), Ae(Oe, "pointermove", (re) => {
          ot(re);
        }), Ae(Oe, "focusout", (re) => {
          const De = Se(Ne);
          if (Se(g)) {
            const Je = re.target, tt = document.getElementById(je.menu);
            if (!X(tt) || !X(Je))
              return;
            !tt.contains(Je) && Je !== De && Z.set(!1);
          } else {
            const Je = re.currentTarget, tt = re.relatedTarget;
            if (!X(tt) || !X(Je))
              return;
            !Je.contains(tt) && tt !== De && Z.set(!1);
          }
        }));
        return {
          destroy() {
            dt(), vt(), Ke();
          }
        };
      }
    }), Tl = ut(e("subtrigger"), {
      stores: [Z, We],
      returned: ([Oe, vt]) => ({
        role: "menuitem",
        id: je.trigger,
        tabindex: -1,
        "aria-controls": je.menu,
        "aria-expanded": Oe,
        "data-state": Oe ? "open" : "closed",
        "data-disabled": vt ? "" : void 0,
        "aria-haspopop": "menu"
      }),
      action: (Oe) => {
        Gn(Oe, n), Ar(Oe);
        const vt = () => {
          As(Ie), window.clearTimeout(Se(ge)), y.set(null);
        }, dt = Ct(Ae(Oe, "click", (Ke) => {
          if (Ke.defaultPrevented)
            return;
          const re = Ke.currentTarget;
          !X(re) || Mt(re) || (rt(re), Se(Z) || Z.update((De) => De || (Ne.set(re), !De)));
        }), Ae(Oe, "keydown", (Ke) => {
          const re = Se(K), De = Ke.currentTarget;
          if (!(!X(De) || Mt(De) || re.length > 0 && Ke.key === Ue.SPACE) && Ih.ltr.includes(Ke.key)) {
            if (!Se(Z)) {
              De.click(), Ke.preventDefault();
              return;
            }
            const tt = De.getAttribute("aria-controls");
            if (!tt)
              return;
            const Ot = document.getElementById(tt);
            if (!X(Ot))
              return;
            const kn = rn(Ot)[0];
            rt(kn);
          }
        }), Ae(Oe, "pointermove", (Ke) => {
          if (!Wn(Ke) || ($(Ke), Ke.defaultPrevented))
            return;
          const re = Ke.currentTarget;
          if (!X(re))
            return;
          rt(re);
          const De = Se(Ie);
          !Se(Z) && !De && !Mt(re) && Ie.set(window.setTimeout(() => {
            Z.update(() => (Ne.set(re), !0)), As(Ie);
          }, 100));
        }), Ae(Oe, "pointerleave", (Ke) => {
          if (!Wn(Ke))
            return;
          As(Ie);
          const re = document.getElementById(je.menu), De = re == null ? void 0 : re.getBoundingClientRect();
          if (De) {
            const Je = re == null ? void 0 : re.dataset.side, tt = Je === "right", Ot = tt ? -5 : 5, kn = De[tt ? "left" : "right"], yr = De[tt ? "right" : "left"];
            y.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: Ke.clientX + Ot, y: Ke.clientY },
                { x: kn, y: De.top },
                { x: yr, y: De.top },
                { x: yr, y: De.bottom },
                { x: kn, y: De.bottom }
              ],
              side: Je
            }), window.clearTimeout(Se(ge)), ge.set(window.setTimeout(() => {
              y.set(null);
            }, 300));
          } else {
            if (ze(Ke), Ke.defaultPrevented)
              return;
            y.set(null);
          }
        }), Ae(Oe, "focusout", (Ke) => {
          const re = Ke.currentTarget;
          if (!X(re))
            return;
          Tn(re);
          const De = Ke.relatedTarget;
          if (!X(De))
            return;
          const Je = re.getAttribute("aria-controls");
          if (!Je)
            return;
          const tt = document.getElementById(Je);
          tt && !tt.contains(De) && Z.set(!1);
        }), Ae(Oe, "focusin", (Ke) => {
          Ve(Ke);
        }));
        return {
          destroy() {
            vt(), dt();
          }
        };
      }
    }), El = ut(e("subarrow"), {
      stores: He,
      returned: (Oe) => ({
        "data-arrow": !0,
        style: Kn({
          position: "absolute",
          width: `var(--arrow-size, ${Oe}px)`,
          height: `var(--arrow-size, ${Oe}px)`
        })
      })
    });
    return Gt([f], ([Oe]) => {
      Oe || (Ne.set(null), Z.set(!1));
    }), Gt([y], ([Oe]) => {
      !Rn || Oe || window.clearTimeout(Se(ge));
    }), Gt([Z], ([Oe]) => {
      Rn && Nr(1).then(() => {
        const vt = document.getElementById(je.menu);
        if (vt) {
          if (Oe && Se(g)) {
            const dt = rn(vt);
            if (!dt.length)
              return;
            rt(dt[0]);
          }
          if (!Oe) {
            const dt = Se(N);
            dt && vt.contains(dt) && Tn(dt);
          }
          if (vt && !Oe) {
            const dt = document.getElementById(je.trigger);
            if (!dt || document.activeElement === dt)
              return;
            Tn(dt);
          }
        }
      });
    }), {
      elements: {
        subTrigger: Tl,
        subMenu: vr,
        subArrow: El
      },
      states: {
        subOpen: Z
      },
      options: Ce
    };
  };
  Ms(() => {
    const S = document.getElementById(V.trigger);
    X(S) && Se(f) && h.set(S);
    const G = [], Z = () => g.set(!1), Ce = () => {
      g.set(!0), G.push(Ct(Dt(document, "pointerdown", Z, { capture: !0, once: !0 }), Dt(document, "pointermove", Z, { capture: !0, once: !0 })));
    }, Te = (He) => {
      if (He.key === Ue.ESCAPE && Se(o)) {
        f.set(!1);
        return;
      }
    };
    return G.push(Dt(document, "keydown", Ce, { capture: !0 })), G.push(Dt(document, "keydown", Te)), () => {
      G.forEach((He) => He());
    };
  }), Gt([f, N], ([S, G]) => {
    !S && G && Tn(G);
  }), Gt([f, h, r], ([S, G, Z]) => {
    if (!Rn)
      return;
    const Ce = [];
    return t.removeScroll && S && Z && Ce.push(ld()), !S && G && rt(G), Nr(1).then(() => {
      const Te = document.getElementById(V.menu);
      if (Te && S && Se(g)) {
        if (t.disableFocusFirstItem) {
          rt(Te);
          return;
        }
        const He = rn(Te);
        if (!He.length)
          return;
        rt(He[0]);
      } else if (G)
        rt(G);
      else {
        if (t.disableTriggerRefocus)
          return;
        const He = document.getElementById(V.trigger);
        if (!He)
          return;
        rt(He);
      }
    }), () => {
      Ce.forEach((Te) => Te());
    };
  }), Gt(f, (S) => {
    if (!Rn)
      return;
    const G = () => g.set(!1), Z = (Ce) => {
      if (g.set(!0), Ce.key === Ue.ESCAPE && S) {
        f.set(!1);
        return;
      }
    };
    return Ct(Dt(document, "pointerdown", G, { capture: !0, once: !0 }), Dt(document, "pointermove", G, { capture: !0, once: !0 }), Dt(document, "keydown", Z, { capture: !0 }));
  });
  function Me(S) {
    f.update((G) => {
      const Z = !G;
      return Z && (d.set(cd(S)), m.set(ud(S)), h.set(S)), Z;
    });
  }
  function Ve(S) {
    const G = S.currentTarget;
    if (!X(G))
      return;
    const Z = Se(N);
    Z && Tn(Z), qf(G), N.set(G);
  }
  function M(S) {
    const G = S.currentTarget;
    X(G) && Tn(G);
  }
  function $(S) {
    ys(S) && S.preventDefault();
  }
  function se(S) {
    if (ys(S))
      return;
    const G = S.target;
    if (!X(G))
      return;
    const Z = _i(G);
    Z && rt(Z);
  }
  function ze(S) {
    ys(S) && S.preventDefault();
  }
  function ot(S) {
    if (!Wn(S))
      return;
    const G = S.target, Z = S.currentTarget;
    if (!X(Z) || !X(G))
      return;
    const Ce = Se(p), Te = Ce !== S.clientX;
    if (Z.contains(G) && Te) {
      const He = S.clientX > Ce ? "right" : "left";
      w.set(He), p.set(S.clientX);
    }
  }
  function lt(S, G = null) {
    if (!Wn(S) || ($(S), S.defaultPrevented))
      return;
    if (G) {
      rt(G);
      return;
    }
    const Z = S.currentTarget;
    X(Z) && rt(Z);
  }
  function _t(S) {
    Wn(S) && se(S);
  }
  function yn(S) {
    if (Se(K).length > 0 && S.key === Ue.SPACE) {
      S.preventDefault();
      return;
    }
    if (qr.includes(S.key)) {
      S.preventDefault();
      const Ce = S.currentTarget;
      if (!X(Ce))
        return;
      Ce.click();
    }
  }
  function vs(S) {
    return S === "indeterminate";
  }
  function Cl(S) {
    return vs(S) ? "indeterminate" : S ? "checked" : "unchecked";
  }
  function ys(S) {
    return Se(A)(S);
  }
  function _i(S) {
    const G = S.closest('[role="menu"]');
    return X(G) ? G : null;
  }
  return {
    trigger: H,
    menu: J,
    open: f,
    item: v,
    group: C,
    groupLabel: I,
    arrow: k,
    options: t.rootOptions,
    createCheckboxItem: x,
    createSubmenu: Fe,
    createMenuRadioGroup: W,
    separator: ee,
    rootIds: V,
    handleTypeaheadSearch: D
  };
}
function to(t, e, n) {
  if (t.shiftKey) {
    const r = Se(n);
    r && (t.preventDefault(), r.focus(), n.set(null));
  } else {
    const r = Se(e);
    r && (t.preventDefault(), r.focus(), e.set(null));
  }
}
function rn(t) {
  return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter((e) => X(e));
}
function Ar(t) {
  !t || !Mt(t) || (t.setAttribute("data-disabled", ""), t.setAttribute("aria-disabled", "true"));
}
function As(t) {
  if (!Rn)
    return;
  const e = Se(t);
  e && (window.clearTimeout(e), t.set(null));
}
function Wn(t) {
  return t.pointerType === "mouse";
}
function Gn(t, e) {
  if (!t)
    return;
  const n = t.closest(`${e()}, ${e("submenu")}`);
  X(n) && t.setAttribute("data-melt-menu-id", n.id);
}
function no(t) {
  t.preventDefault();
  const e = document.activeElement, n = t.currentTarget;
  if (!X(e) || !X(n))
    return;
  const r = rn(n);
  if (!r.length)
    return;
  const s = r.filter((a) => !(a.hasAttribute("data-disabled") || a.getAttribute("disabled") === "true")), i = s.indexOf(e);
  let o;
  switch (t.key) {
    case Ue.ARROW_DOWN:
      o = i < s.length - 1 ? i + 1 : i;
      break;
    case Ue.ARROW_UP:
      o = i > 0 ? i - 1 : 0;
      break;
    case Ue.HOME:
      o = 0;
      break;
    case Ue.END:
      o = s.length - 1;
      break;
    default:
      return;
  }
  rt(s[o]);
}
function Dh(t, e) {
  if (!e)
    return !1;
  const n = { x: t.clientX, y: t.clientY };
  return Fh(n, e);
}
function Fh(t, e) {
  const { x: n, y: r } = t;
  let s = !1;
  for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
    const a = e[i].x, l = e[i].y, c = e[o].x, u = e[o].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (s = !s);
  }
  return s;
}
const jh = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  portal: void 0,
  loop: !1,
  dir: "ltr",
  defaultOpen: !1,
  forceVisible: !1,
  typeahead: !0
};
function Lh(t) {
  const e = { ...jh, ...t }, n = ms(e), r = e.open ?? _e(e.defaultOpen), s = Kr(r, e == null ? void 0 : e.onOpenChange), i = _e(null), o = _e(null), a = _e(null), { trigger: l, menu: c, item: u, arrow: f, createSubmenu: h, createCheckboxItem: d, createMenuRadioGroup: m, separator: g, group: p, groupLabel: y } = Mh({
    rootOptions: n,
    rootOpen: s,
    rootActiveTrigger: i,
    nextFocusable: o,
    prevFocusable: a,
    disableTriggerRefocus: !0,
    selector: "dropdown-menu",
    removeScroll: !0
  });
  return {
    elements: {
      trigger: l,
      menu: c,
      item: u,
      arrow: f,
      separator: g,
      group: p,
      groupLabel: y
    },
    states: {
      open: s
    },
    builders: {
      createCheckboxItem: d,
      createSubmenu: h,
      createMenuRadioGroup: m
    },
    options: n
  };
}
const Zh = {
  orientation: "horizontal",
  decorative: !1
}, zh = (t) => {
  const e = { ...Zh, ...t }, n = ms(e), { orientation: r, decorative: s } = n;
  return {
    elements: {
      root: ut("separator", {
        stores: [r, s],
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
};
function al() {
  return za(10);
}
function _s(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function bs(t) {
  return function(e, n) {
    if (n === void 0)
      return;
    t[e].set(n);
  };
}
function Bh(t, e) {
  const n = [];
  return e.builders.forEach((r) => {
    const s = r.action(t);
    s && n.push(s);
  }), {
    destroy: () => {
      n.forEach((r) => {
        r.destroy && r.destroy();
      });
    }
  };
}
function ro(t) {
  const e = {};
  return t.forEach((n) => {
    Object.keys(n).forEach((r) => {
      r !== "action" && (e[r] = n[r]);
    });
  }), e;
}
function so(t) {
  return t ? { "aria-disabled": !0, "data-disabled": "" } : {};
}
function _r() {
  const t = Dc();
  return (e) => {
    const { originalEvent: n } = e.detail, { cancelable: r } = e, s = n.type;
    t(s, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || e.preventDefault();
  };
}
function Vh(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, r, s = (
    /*href*/
    (t[0] ? "a" : "button") && Ss(t)
  );
  return {
    c() {
      s && s.c(), n = $e();
    },
    m(i, o) {
      s && s.m(i, o), O(i, n, o), r = !0;
    },
    p(i, o) {
      /*href*/
      i[0], e ? oe(
        e,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (s.d(1), s = Ss(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n)) : s.p(i, o) : (s = Ss(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n));
    },
    i(i) {
      r || (_(s, i), r = !0);
    },
    o(i) {
      b(s, i), r = !1;
    },
    d(i) {
      i && R(n), s && s.d(i);
    }
  };
}
function Wh(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, r, s = (
    /*href*/
    (t[0] ? "a" : "button") && Rs(t)
  );
  return {
    c() {
      s && s.c(), n = $e();
    },
    m(i, o) {
      s && s.m(i, o), O(i, n, o), r = !0;
    },
    p(i, o) {
      /*href*/
      i[0], e ? oe(
        e,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (s.d(1), s = Rs(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n)) : s.p(i, o) : (s = Rs(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n));
    },
    i(i) {
      r || (_(s, i), r = !0);
    },
    o(i) {
      b(s, i), r = !1;
    },
    d(i) {
      i && R(n), s && s.d(i);
    }
  };
}
function Ss(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[5].default
  ), a = fe(
    o,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let l = [
    {
      type: n = /*href*/
      t[0] ? void 0 : (
        /*type*/
        t[1]
      )
    },
    { href: (
      /*href*/
      t[0]
    ) },
    { tabindex: "0" },
    /*$$restProps*/
    t[3]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = E(c, l[u]);
  return {
    c() {
      e = Re(
        /*href*/
        t[0] ? "a" : "button"
      ), a && a.c(), Br(
        /*href*/
        t[0] ? "a" : "button"
      )(e, c);
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        te(
          e,
          "click",
          /*click_handler_1*/
          t[12]
        ),
        te(
          e,
          "change",
          /*change_handler_1*/
          t[13]
        ),
        te(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[14]
        ),
        te(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[15]
        ),
        te(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[16]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[17]
        )
      ], s = !0);
    },
    p(u, f) {
      a && a.p && (!r || f & /*$$scope*/
      16) && he(
        a,
        o,
        u,
        /*$$scope*/
        u[4],
        r ? de(
          o,
          /*$$scope*/
          u[4],
          f,
          null
        ) : me(
          /*$$scope*/
          u[4]
        ),
        null
      ), Br(
        /*href*/
        u[0] ? "a" : "button"
      )(e, c = ae(l, [
        (!r || f & /*href, type*/
        3 && n !== (n = /*href*/
        u[0] ? void 0 : (
          /*type*/
          u[1]
        ))) && { type: n },
        (!r || f & /*href*/
        1) && { href: (
          /*href*/
          u[0]
        ) },
        { tabindex: "0" },
        f & /*$$restProps*/
        8 && /*$$restProps*/
        u[3]
      ]));
    },
    i(u) {
      r || (_(a, u), r = !0);
    },
    o(u) {
      b(a, u), r = !1;
    },
    d(u) {
      u && R(e), a && a.d(u), s = !1, et(i);
    }
  };
}
function Rs(t) {
  let e, n, r, s, i, o;
  const a = (
    /*#slots*/
    t[5].default
  ), l = fe(
    a,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let c = [
    {
      type: n = /*href*/
      t[0] ? void 0 : (
        /*type*/
        t[1]
      )
    },
    { href: (
      /*href*/
      t[0]
    ) },
    { tabindex: "0" },
    ro(
      /*builders*/
      t[2]
    ),
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = E(u, c[f]);
  return {
    c() {
      e = Re(
        /*href*/
        t[0] ? "a" : "button"
      ), l && l.c(), Br(
        /*href*/
        t[0] ? "a" : "button"
      )(e, u);
    },
    m(f, h) {
      O(f, e, h), l && l.m(e, null), s = !0, i || (o = [
        te(
          e,
          "click",
          /*click_handler*/
          t[6]
        ),
        te(
          e,
          "change",
          /*change_handler*/
          t[7]
        ),
        te(
          e,
          "keydown",
          /*keydown_handler*/
          t[8]
        ),
        te(
          e,
          "keyup",
          /*keyup_handler*/
          t[9]
        ),
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        ),
        gt(r = Bh.call(null, e, { builders: (
          /*builders*/
          t[2]
        ) }))
      ], i = !0);
    },
    p(f, h) {
      l && l.p && (!s || h & /*$$scope*/
      16) && he(
        l,
        a,
        f,
        /*$$scope*/
        f[4],
        s ? de(
          a,
          /*$$scope*/
          f[4],
          h,
          null
        ) : me(
          /*$$scope*/
          f[4]
        ),
        null
      ), Br(
        /*href*/
        f[0] ? "a" : "button"
      )(e, u = ae(c, [
        (!s || h & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!s || h & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { tabindex: "0" },
        h & /*builders*/
        4 && ro(
          /*builders*/
          f[2]
        ),
        h & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && zt(r.update) && h & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      s || (_(l, f), s = !0);
    },
    o(f) {
      b(l, f), s = !1;
    },
    d(f) {
      f && R(e), l && l.d(f), i = !1, et(o);
    }
  };
}
function Gh(t) {
  let e, n, r, s;
  const i = [Wh, Vh], o = [];
  function a(l, c) {
    return (
      /*builders*/
      l[2] && /*builders*/
      l[2].length ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = $e();
    },
    m(l, c) {
      o[e].m(l, c), O(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Le(), b(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (_(n), s = !0);
    },
    o(l) {
      b(n), s = !1;
    },
    d(l) {
      l && R(r), o[e].d(l);
    }
  };
}
function Uh(t, e, n) {
  const r = ["href", "type", "builders"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { href: a = void 0 } = e, { type: l = void 0 } = e, { builders: c = [] } = e;
  function u(D) {
    ce.call(this, t, D);
  }
  function f(D) {
    ce.call(this, t, D);
  }
  function h(D) {
    ce.call(this, t, D);
  }
  function d(D) {
    ce.call(this, t, D);
  }
  function m(D) {
    ce.call(this, t, D);
  }
  function g(D) {
    ce.call(this, t, D);
  }
  function p(D) {
    ce.call(this, t, D);
  }
  function y(D) {
    ce.call(this, t, D);
  }
  function w(D) {
    ce.call(this, t, D);
  }
  function N(D) {
    ce.call(this, t, D);
  }
  function A(D) {
    ce.call(this, t, D);
  }
  function K(D) {
    ce.call(this, t, D);
  }
  return t.$$set = (D) => {
    e = E(E({}, e), we(D)), n(3, s = q(e, r)), "href" in D && n(0, a = D.href), "type" in D && n(1, l = D.type), "builders" in D && n(2, c = D.builders), "$$scope" in D && n(4, o = D.$$scope);
  }, [
    a,
    l,
    c,
    s,
    o,
    i,
    u,
    f,
    h,
    d,
    m,
    g,
    p,
    y,
    w,
    N,
    A,
    K
  ];
}
let Hh = class extends ye {
  constructor(e) {
    super(), ve(this, e, Uh, Gh, oe, { href: 0, type: 1, builders: 2 });
  }
};
const ll = "Checkbox", cl = {
  set: Kh,
  get: qh
};
function Kh(t) {
  const e = gd(_s(t));
  return pn(ll, { ...e }), {
    ...e,
    updateOption: bs(e.options)
  };
}
function qh() {
  return tn(ll);
}
const Yh = (t) => ({ builder: t & /*$root*/
2 }), io = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), Xh = (t) => ({ builder: t & /*$root*/
2 }), oo = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function Jh(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[15] = n, e;
}
function Qh(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[12].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[11],
    io
  );
  let a = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("button"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (s = [
        gt(
          /*builder*/
          t[15].action(e)
        ),
        te(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $root*/
      2050) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[11],
        n ? de(
          i,
          /*$$scope*/
          c[11],
          u,
          Yh
        ) : me(
          /*$$scope*/
          c[11]
        ),
        io
      ), le(e, l = ae(a, [
        u & /*$root*/
        2 && /*builder*/
        c[15],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, et(s);
    }
  };
}
function em(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[11],
    oo
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $root*/
      2050) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        e ? de(
          n,
          /*$$scope*/
          s[11],
          i,
          Xh
        ) : me(
          /*$$scope*/
          s[11]
        ),
        oo
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function tm(t) {
  let e, n, r, s;
  const i = [em, Qh], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Jh(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = $e();
    },
    m(c, u) {
      o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), o[e].d(c);
    }
  };
}
function nm(t, e, n) {
  const r = ["checked", "disabled", "name", "required", "value", "onCheckedChange", "asChild"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { checked: l = void 0 } = e, { disabled: c = void 0 } = e, { name: u = void 0 } = e, { required: f = void 0 } = e, { value: h = void 0 } = e, { onCheckedChange: d = void 0 } = e, { asChild: m = !1 } = e;
  const { elements: { root: g }, states: { checked: p }, updateOption: y } = cl.set({
    defaultChecked: l,
    disabled: c,
    name: u,
    required: f,
    value: h,
    onCheckedChange: ({ next: N }) => (l !== N && (d == null || d(N), n(5, l = N)), N)
  });
  Ge(t, g, (N) => n(1, i = N));
  const w = _r();
  return t.$$set = (N) => {
    e = E(E({}, e), we(N)), n(4, s = q(e, r)), "checked" in N && n(5, l = N.checked), "disabled" in N && n(6, c = N.disabled), "name" in N && n(7, u = N.name), "required" in N && n(8, f = N.required), "value" in N && n(9, h = N.value), "onCheckedChange" in N && n(10, d = N.onCheckedChange), "asChild" in N && n(0, m = N.asChild), "$$scope" in N && n(11, a = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && p.set(l), t.$$.dirty & /*disabled*/
    64 && y("disabled", c), t.$$.dirty & /*name*/
    128 && y("name", u), t.$$.dirty & /*required*/
    256 && y("required", f), t.$$.dirty & /*value*/
    512 && y("value", h);
  }, [
    m,
    i,
    g,
    w,
    s,
    l,
    c,
    u,
    f,
    h,
    d,
    a,
    o
  ];
}
let rm = class extends ye {
  constructor(e) {
    super(), ve(this, e, nm, tm, oe, {
      checked: 5,
      disabled: 6,
      name: 7,
      required: 8,
      value: 9,
      onCheckedChange: 10,
      asChild: 0
    });
  }
};
const sm = (t) => ({
  isChecked: t & /*$isChecked*/
  1,
  isIndeterminate: t & /*$isIndeterminate*/
  2
}), ao = (t) => ({
  isChecked: (
    /*$isChecked*/
    t[0]
  ),
  isIndeterminate: (
    /*$isIndeterminate*/
    t[1]
  )
});
function im(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[6].default
  ), s = fe(
    r,
    t,
    /*$$scope*/
    t[5],
    ao
  );
  let i = [
    /*$$restProps*/
    t[4]
  ], o = {};
  for (let a = 0; a < i.length; a += 1)
    o = E(o, i[a]);
  return {
    c() {
      e = Re("div"), s && s.c(), le(e, o);
    },
    m(a, l) {
      O(a, e, l), s && s.m(e, null), n = !0;
    },
    p(a, [l]) {
      s && s.p && (!n || l & /*$$scope, $isChecked, $isIndeterminate*/
      35) && he(
        s,
        r,
        a,
        /*$$scope*/
        a[5],
        n ? de(
          r,
          /*$$scope*/
          a[5],
          l,
          sm
        ) : me(
          /*$$scope*/
          a[5]
        ),
        ao
      ), le(e, o = ae(i, [l & /*$$restProps*/
      16 && /*$$restProps*/
      a[4]]));
    },
    i(a) {
      n || (_(s, a), n = !0);
    },
    o(a) {
      b(s, a), n = !1;
    },
    d(a) {
      a && R(e), s && s.d(a);
    }
  };
}
function om(t, e, n) {
  const r = [];
  let s = q(e, r), i, o, { $$slots: a = {}, $$scope: l } = e;
  const { helpers: { isChecked: c, isIndeterminate: u } } = cl.get();
  return Ge(t, c, (f) => n(0, i = f)), Ge(t, u, (f) => n(1, o = f)), t.$$set = (f) => {
    e = E(E({}, e), we(f)), n(4, s = q(e, r)), "$$scope" in f && n(5, l = f.$$scope);
  }, [
    i,
    o,
    c,
    u,
    s,
    l,
    a
  ];
}
class am extends ye {
  constructor(e) {
    super(), ve(this, e, om, im, oe, {});
  }
}
const ul = "DropdownMenu", gi = "DropdownSubmenu", fl = "DropdownRadioGroup", dl = "DropdownCheckboxItem", hl = "DropdownRadioItem", ml = "DropdownGroup", Vt = {
  get: nn,
  set: lm,
  setSub: cm,
  getContent: mm,
  setRadioGroup: um,
  setRadioItem: fm,
  getSubTrigger: hm,
  getSubContent: pm,
  setCheckboxItem: gm,
  getCheckboxIndicator: _m,
  getRadioIndicator: dm,
  setGroup: bm,
  getGroupLabel: vm,
  setArrow: ym
};
function nn() {
  return tn(ul);
}
function lm(t) {
  const e = Lh({ ..._s(t), forceVisible: !0 });
  return pn(ul, e), {
    ...e,
    updateOption: bs(e.options)
  };
}
function cm(t) {
  const { builders: { createSubmenu: e } } = nn(), n = e(_s(t));
  return pn(gi, n), {
    ...n,
    updateOption: bs(n.options)
  };
}
function um(t) {
  const { builders: { createMenuRadioGroup: e } } = nn(), n = e(t);
  return pn(fl, n), n;
}
function fm(t) {
  const e = tn(fl);
  return pn(hl, { isChecked: e.helpers.isChecked, value: t }), e;
}
function dm() {
  return tn(hl);
}
function hm() {
  return tn(gi);
}
function mm(t = 5) {
  const e = nn();
  return e.options.positioning.update((n) => ({ ...n, gutter: t })), e;
}
function pm(t = -1) {
  const e = tn(gi);
  return e.options.positioning.update((n) => ({ ...n, gutter: t })), e;
}
function gm(t) {
  const { builders: { createCheckboxItem: e } } = nn(), n = e(_s(t));
  return pn(dl, n.states.checked), {
    ...n,
    updateOption: bs(n.options)
  };
}
function _m() {
  return tn(dl);
}
function bm() {
  const { elements: { group: t } } = nn(), e = al();
  return pn(ml, e), { group: t, id: e };
}
function vm() {
  const t = tn(ml) ?? al(), { elements: { groupLabel: e } } = nn();
  return { groupLabel: e, id: t };
}
function ym(t = 8) {
  const e = nn();
  return e.options.arrowSize.set(t), e;
}
function km(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, [i]) {
      r && r.p && (!e || i & /*$$scope*/
      2048) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        e ? de(
          n,
          /*$$scope*/
          s[11],
          i,
          null
        ) : me(
          /*$$scope*/
          s[11]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function wm(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e, { closeOnOutsideClick: i = void 0 } = e, { closeOnEscape: o = void 0 } = e, { portal: a = void 0 } = e, { forceVisible: l = void 0 } = e, { open: c = void 0 } = e, { onOpenChange: u = void 0 } = e, { preventScroll: f = void 0 } = e, { arrowSize: h = void 0 } = e, { positioning: d = void 0 } = e, { loop: m = void 0 } = e, { dir: g = void 0 } = e;
  const { states: { open: p }, updateOption: y } = Vt.set({
    closeOnOutsideClick: i,
    closeOnEscape: o,
    portal: a,
    forceVisible: l,
    defaultOpen: c,
    preventScroll: f,
    arrowSize: h,
    positioning: d,
    loop: m,
    dir: g,
    onOpenChange: ({ next: w }) => (c !== w && (u == null || u(w), n(0, c = w)), w)
  });
  return t.$$set = (w) => {
    "closeOnOutsideClick" in w && n(1, i = w.closeOnOutsideClick), "closeOnEscape" in w && n(2, o = w.closeOnEscape), "portal" in w && n(3, a = w.portal), "forceVisible" in w && n(4, l = w.forceVisible), "open" in w && n(0, c = w.open), "onOpenChange" in w && n(5, u = w.onOpenChange), "preventScroll" in w && n(6, f = w.preventScroll), "arrowSize" in w && n(7, h = w.arrowSize), "positioning" in w && n(8, d = w.positioning), "loop" in w && n(9, m = w.loop), "dir" in w && n(10, g = w.dir), "$$scope" in w && n(11, s = w.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c !== void 0 && p.set(c), t.$$.dirty & /*closeOnOutsideClick*/
    2 && y("closeOnOutsideClick", i), t.$$.dirty & /*closeOnEscape*/
    4 && y("closeOnEscape", o), t.$$.dirty & /*portal*/
    8 && y("portal", a), t.$$.dirty & /*forceVisible*/
    16 && y("forceVisible", l), t.$$.dirty & /*preventScroll*/
    64 && y("preventScroll", f), t.$$.dirty & /*arrowSize*/
    128 && y("arrowSize", h), t.$$.dirty & /*positioning*/
    256 && y("positioning", d), t.$$.dirty & /*loop*/
    512 && y("loop", m), t.$$.dirty & /*dir*/
    1024 && y("dir", g);
  }, [
    c,
    i,
    o,
    a,
    l,
    u,
    f,
    h,
    d,
    m,
    g,
    s,
    r
  ];
}
class Cm extends ye {
  constructor(e) {
    super(), ve(this, e, wm, km, oe, {
      closeOnOutsideClick: 1,
      closeOnEscape: 2,
      portal: 3,
      forceVisible: 4,
      open: 0,
      onOpenChange: 5,
      preventScroll: 6,
      arrowSize: 7,
      positioning: 8,
      loop: 9,
      dir: 10
    });
  }
}
const Tm = (t) => ({ builder: t & /*$item*/
4 }), lo = (t) => ({ builder: (
  /*builder*/
  t[8]
) }), Em = (t) => ({ builder: t & /*$item*/
4 }), co = (t) => ({ builder: (
  /*$item*/
  t[2]
) });
function Am(t) {
  const e = t.slice(), n = (
    /*$item*/
    e[2]
  );
  return e[8] = n, e;
}
function Sm(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[7].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[6],
    lo
  );
  let a = [
    /*builder*/
    t[8],
    /*$$restProps*/
    t[5],
    so(
      /*disabled*/
      t[1]
    )
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        gt(
          /*builder*/
          t[8].action(e)
        ),
        te(
          e,
          "m-click",
          /*dispatch*/
          t[4]
        ),
        te(
          e,
          "m-focusin",
          /*dispatch*/
          t[4]
        ),
        te(
          e,
          "m-focusout",
          /*dispatch*/
          t[4]
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[4]
        ),
        te(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[4]
        ),
        te(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[4]
        ),
        te(
          e,
          "m-pointermove",
          /*dispatch*/
          t[4]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $item*/
      68) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[6],
        n ? de(
          i,
          /*$$scope*/
          c[6],
          u,
          Tm
        ) : me(
          /*$$scope*/
          c[6]
        ),
        lo
      ), le(e, l = ae(a, [
        u & /*$item*/
        4 && /*builder*/
        c[8],
        u & /*$$restProps*/
        32 && /*$$restProps*/
        c[5],
        u & /*disabled*/
        2 && so(
          /*disabled*/
          c[1]
        )
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, et(s);
    }
  };
}
function Rm(t) {
  let e;
  const n = (
    /*#slots*/
    t[7].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[6],
    co
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $item*/
      68) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[6],
        e ? de(
          n,
          /*$$scope*/
          s[6],
          i,
          Em
        ) : me(
          /*$$scope*/
          s[6]
        ),
        co
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Om(t) {
  let e, n, r, s;
  const i = [Rm, Sm], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Am(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = $e();
    },
    m(c, u) {
      o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), o[e].d(c);
    }
  };
}
function $m(t, e, n) {
  const r = ["asChild", "disabled"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e, { disabled: c = !1 } = e;
  const { elements: { item: u } } = Vt.get();
  Ge(t, u, (h) => n(2, i = h));
  const f = _r();
  return t.$$set = (h) => {
    e = E(E({}, e), we(h)), n(5, s = q(e, r)), "asChild" in h && n(0, l = h.asChild), "disabled" in h && n(1, c = h.disabled), "$$scope" in h && n(6, a = h.$$scope);
  }, [l, c, i, u, f, s, a, o];
}
class Nm extends ye {
  constructor(e) {
    super(), ve(this, e, $m, Om, oe, { asChild: 0, disabled: 1 });
  }
}
const Im = (t) => ({ builder: t & /*$group*/
2 }), uo = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), xm = (t) => ({ builder: t & /*$group*/
2 }), fo = (t) => ({
  builder: (
    /*$group*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function Pm(t) {
  const e = t.slice(), n = (
    /*$group*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function Mm(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[5],
    uo
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), n = !0, r || (s = gt(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $group*/
      34) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? de(
          i,
          /*$$scope*/
          c[5],
          u,
          Im
        ) : me(
          /*$$scope*/
          c[5]
        ),
        uo
      ), le(e, l = ae(a, [
        u & /*$group*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, s();
    }
  };
}
function Dm(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[5],
    fo
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $group*/
      34) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? de(
          n,
          /*$$scope*/
          s[5],
          i,
          xm
        ) : me(
          /*$$scope*/
          s[5]
        ),
        fo
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Fm(t) {
  let e, n, r, s;
  const i = [Dm, Mm], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Pm(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = $e();
    },
    m(c, u) {
      o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), o[e].d(c);
    }
  };
}
function jm(t, e, n) {
  const r = ["asChild"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { group: c, id: u } = Vt.setGroup();
  return Ge(t, c, (f) => n(1, i = f)), t.$$set = (f) => {
    e = E(E({}, e), we(f)), n(4, s = q(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class Lm extends ye {
  constructor(e) {
    super(), ve(this, e, jm, Fm, oe, { asChild: 0 });
  }
}
const Zm = (t) => ({ builder: t & /*$groupLabel*/
2 }), ho = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), zm = (t) => ({ builder: t & /*$groupLabel*/
2 }), mo = (t) => ({
  builder: (
    /*$groupLabel*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function Bm(t) {
  const e = t.slice(), n = (
    /*$groupLabel*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function Vm(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[5],
    ho
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), n = !0, r || (s = gt(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $groupLabel*/
      34) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? de(
          i,
          /*$$scope*/
          c[5],
          u,
          Zm
        ) : me(
          /*$$scope*/
          c[5]
        ),
        ho
      ), le(e, l = ae(a, [
        u & /*$groupLabel*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, s();
    }
  };
}
function Wm(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[5],
    mo
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $groupLabel*/
      34) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? de(
          n,
          /*$$scope*/
          s[5],
          i,
          zm
        ) : me(
          /*$$scope*/
          s[5]
        ),
        mo
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Gm(t) {
  let e, n, r, s;
  const i = [Wm, Vm], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Bm(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = $e();
    },
    m(c, u) {
      o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), o[e].d(c);
    }
  };
}
function Um(t, e, n) {
  const r = ["asChild"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { groupLabel: c, id: u } = Vt.getGroupLabel();
  return Ge(t, c, (f) => n(1, i = f)), t.$$set = (f) => {
    e = E(E({}, e), we(f)), n(4, s = q(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class Hm extends ye {
  constructor(e) {
    super(), ve(this, e, Um, Gm, oe, { asChild: 0 });
  }
}
const Km = (t) => ({ builder: t & /*$menu*/
256 }), po = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), qm = (t) => ({ builder: t & /*$menu*/
256 }), go = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), Ym = (t) => ({ builder: t & /*$menu*/
256 }), _o = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), Xm = (t) => ({ builder: t & /*$menu*/
256 }), bo = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), Jm = (t) => ({ builder: t & /*$menu*/
256 }), vo = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), Qm = (t) => ({ builder: t & /*$menu*/
256 }), yo = (t) => ({ builder: (
  /*builder*/
  t[16]
) });
function ep(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function tp(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function np(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function rp(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function sp(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function ip(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function op(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[15].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[14],
    po
  );
  let a = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        gt(
          /*builder*/
          t[16].action(e)
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $menu*/
      16640) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[14],
        n ? de(
          i,
          /*$$scope*/
          c[14],
          u,
          Km
        ) : me(
          /*$$scope*/
          c[14]
        ),
        po
      ), le(e, l = ae(a, [
        u & /*$menu*/
        256 && /*builder*/
        c[16],
        u & /*$$restProps*/
        4096 && /*$$restProps*/
        c[12]
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, et(s);
    }
  };
}
function ap(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[15].default
  ), a = fe(
    o,
    t,
    /*$$scope*/
    t[14],
    go
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = E(c, l[u]);
  return {
    c() {
      e = Re("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        gt(
          /*builder*/
          t[16].action(e)
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && he(
        a,
        o,
        t,
        /*$$scope*/
        t[14],
        r ? de(
          o,
          /*$$scope*/
          t[14],
          f,
          qm
        ) : me(
          /*$$scope*/
          t[14]
        ),
        go
      ), le(e, c = ae(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (_(a, u), n && n.end(1), r = !0);
    },
    o(u) {
      b(a, u), u && (n = ha(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), r = !1;
    },
    d(u) {
      u && R(e), a && a.d(u), u && n && n.end(), s = !1, et(i);
    }
  };
}
function lp(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[15].default
  ), a = fe(
    o,
    t,
    /*$$scope*/
    t[14],
    _o
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = E(c, l[u]);
  return {
    c() {
      e = Re("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        gt(
          /*builder*/
          t[16].action(e)
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && he(
        a,
        o,
        t,
        /*$$scope*/
        t[14],
        r ? de(
          o,
          /*$$scope*/
          t[14],
          f,
          Ym
        ) : me(
          /*$$scope*/
          t[14]
        ),
        _o
      ), le(e, c = ae(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (_(a, u), u && (n || Lt(() => {
        n = da(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start();
      })), r = !0);
    },
    o(u) {
      b(a, u), r = !1;
    },
    d(u) {
      u && R(e), a && a.d(u), s = !1, et(i);
    }
  };
}
function cp(t) {
  let e, n, r, s, i, o;
  const a = (
    /*#slots*/
    t[15].default
  ), l = fe(
    a,
    t,
    /*$$scope*/
    t[14],
    bo
  );
  let c = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = E(u, c[f]);
  return {
    c() {
      e = Re("div"), l && l.c(), le(e, u);
    },
    m(f, h) {
      O(f, e, h), l && l.m(e, null), s = !0, i || (o = [
        gt(
          /*builder*/
          t[16].action(e)
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], i = !0);
    },
    p(f, h) {
      t = f, l && l.p && (!s || h & /*$$scope, $menu*/
      16640) && he(
        l,
        a,
        t,
        /*$$scope*/
        t[14],
        s ? de(
          a,
          /*$$scope*/
          t[14],
          h,
          Xm
        ) : me(
          /*$$scope*/
          t[14]
        ),
        bo
      ), le(e, u = ae(c, [
        h & /*$menu*/
        256 && /*builder*/
        t[16],
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(f) {
      s || (_(l, f), f && Lt(() => {
        s && (r && r.end(1), n = da(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start());
      }), s = !0);
    },
    o(f) {
      b(l, f), n && n.invalidate(), f && (r = ha(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), s = !1;
    },
    d(f) {
      f && R(e), l && l.d(f), f && r && r.end(), i = !1, et(o);
    }
  };
}
function up(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[15].default
  ), a = fe(
    o,
    t,
    /*$$scope*/
    t[14],
    vo
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = E(c, l[u]);
  return {
    c() {
      e = Re("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        gt(
          /*builder*/
          t[16].action(e)
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && he(
        a,
        o,
        t,
        /*$$scope*/
        t[14],
        r ? de(
          o,
          /*$$scope*/
          t[14],
          f,
          Jm
        ) : me(
          /*$$scope*/
          t[14]
        ),
        vo
      ), le(e, c = ae(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (_(a, u), u && Lt(() => {
        r && (n || (n = Ci(
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
      b(a, u), u && (n || (n = Ci(
        e,
        /*transition*/
        t[0],
        /*transitionConfig*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && R(e), a && a.d(u), u && n && n.end(), s = !1, et(i);
    }
  };
}
function fp(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[14],
    yo
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $menu*/
      16640) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[14],
        e ? de(
          n,
          /*$$scope*/
          s[14],
          i,
          Qm
        ) : me(
          /*$$scope*/
          s[14]
        ),
        yo
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function dp(t) {
  let e, n, r, s;
  const i = [
    fp,
    up,
    cp,
    lp,
    ap,
    op
  ], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[6] && /*$open*/
      c[7] ? 0 : (
        /*transition*/
        c[0] && /*$open*/
        c[7] ? 1 : (
          /*inTransition*/
          c[2] && /*outTransition*/
          c[4] && /*$open*/
          c[7] ? 2 : (
            /*inTransition*/
            c[2] && /*$open*/
            c[7] ? 3 : (
              /*outTransition*/
              c[4] && /*$open*/
              c[7] ? 4 : (
                /*$open*/
                c[7] ? 5 : -1
              )
            )
          )
        )
      )
    );
  }
  function l(c, u) {
    if (u === 0)
      return ip(c);
    if (u === 1)
      return sp(c);
    if (u === 2)
      return rp(c);
    if (u === 3)
      return np(c);
    if (u === 4)
      return tp(c);
    if (u === 5)
      return ep(c);
  }
  return ~(e = a(t)) && (n = o[e] = i[e](l(t, e))), {
    c() {
      n && n.c(), r = $e();
    },
    m(c, u) {
      ~e && o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? ~e && o[e].p(l(c, e), u) : (n && (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze()), ~e ? (n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), ~e && o[e].d(c);
    }
  };
}
function hp(t, e, n) {
  const r = [
    "sideOffset",
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ];
  let s = q(e, r), i, o, { $$slots: a = {}, $$scope: l } = e, { sideOffset: c = 5 } = e, { transition: u = void 0 } = e, { transitionConfig: f = void 0 } = e, { inTransition: h = void 0 } = e, { inTransitionConfig: d = void 0 } = e, { outTransition: m = void 0 } = e, { outTransitionConfig: g = void 0 } = e, { asChild: p = !1 } = e;
  const { elements: { menu: y }, states: { open: w } } = Vt.getContent(c);
  Ge(t, y, (A) => n(8, o = A)), Ge(t, w, (A) => n(7, i = A));
  const N = _r();
  return t.$$set = (A) => {
    e = E(E({}, e), we(A)), n(12, s = q(e, r)), "sideOffset" in A && n(13, c = A.sideOffset), "transition" in A && n(0, u = A.transition), "transitionConfig" in A && n(1, f = A.transitionConfig), "inTransition" in A && n(2, h = A.inTransition), "inTransitionConfig" in A && n(3, d = A.inTransitionConfig), "outTransition" in A && n(4, m = A.outTransition), "outTransitionConfig" in A && n(5, g = A.outTransitionConfig), "asChild" in A && n(6, p = A.asChild), "$$scope" in A && n(14, l = A.$$scope);
  }, [
    u,
    f,
    h,
    d,
    m,
    g,
    p,
    i,
    o,
    y,
    w,
    N,
    s,
    c,
    l,
    a
  ];
}
class mp extends ye {
  constructor(e) {
    super(), ve(this, e, hp, dp, oe, {
      sideOffset: 13,
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
const pp = (t) => ({ builder: t & /*$trigger*/
2 }), ko = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), gp = (t) => ({ builder: t & /*$trigger*/
2 }), wo = (t) => ({ builder: (
  /*$trigger*/
  t[1]
) });
function _p(t) {
  const e = t.slice(), n = (
    /*$trigger*/
    e[1]
  );
  return e[7] = n, e;
}
function bp(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[5],
    ko
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("button"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (s = [
        gt(
          /*builder*/
          t[7].action(e)
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $trigger*/
      34) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? de(
          i,
          /*$$scope*/
          c[5],
          u,
          pp
        ) : me(
          /*$$scope*/
          c[5]
        ),
        ko
      ), le(e, l = ae(a, [
        u & /*$trigger*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, et(s);
    }
  };
}
function vp(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[5],
    wo
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $trigger*/
      34) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? de(
          n,
          /*$$scope*/
          s[5],
          i,
          gp
        ) : me(
          /*$$scope*/
          s[5]
        ),
        wo
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function yp(t) {
  let e, n, r, s;
  const i = [vp, bp], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? _p(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = $e();
    },
    m(c, u) {
      o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), o[e].d(c);
    }
  };
}
function kp(t, e, n) {
  const r = ["asChild"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { elements: { trigger: c } } = Vt.get();
  Ge(t, c, (f) => n(1, i = f));
  const u = _r();
  return t.$$set = (f) => {
    e = E(E({}, e), we(f)), n(4, s = q(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class wp extends ye {
  constructor(e) {
    super(), ve(this, e, kp, yp, oe, { asChild: 0 });
  }
}
const Cp = (t) => ({ builder: t & /*$separator*/
2 }), Co = (t) => ({ builder: (
  /*$separator*/
  t[1]
) });
function Tp(t) {
  let e, n, r, s = [
    /*$separator*/
    t[1],
    /*$$restProps*/
    t[3]
  ], i = {};
  for (let o = 0; o < s.length; o += 1)
    i = E(i, s[o]);
  return {
    c() {
      e = Re("div"), le(e, i);
    },
    m(o, a) {
      O(o, e, a), n || (r = gt(
        /*$separator*/
        t[1].action(e)
      ), n = !0);
    },
    p(o, a) {
      le(e, i = ae(s, [
        a & /*$separator*/
        2 && /*$separator*/
        o[1],
        a & /*$$restProps*/
        8 && /*$$restProps*/
        o[3]
      ]));
    },
    i: Be,
    o: Be,
    d(o) {
      o && R(e), n = !1, r();
    }
  };
}
function Ep(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[4],
    Co
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $separator*/
      18) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        e ? de(
          n,
          /*$$scope*/
          s[4],
          i,
          Cp
        ) : me(
          /*$$scope*/
          s[4]
        ),
        Co
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Ap(t) {
  let e, n, r, s;
  const i = [Ep, Tp], o = [];
  function a(l, c) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = $e();
    },
    m(l, c) {
      o[e].m(l, c), O(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Le(), b(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (_(n), s = !0);
    },
    o(l) {
      b(n), s = !1;
    },
    d(l) {
      l && R(r), o[e].d(l);
    }
  };
}
function Sp(t, e, n) {
  const r = ["asChild"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const c = Vt.get().elements.separator;
  return Ge(t, c, (u) => n(1, i = u)), t.$$set = (u) => {
    e = E(E({}, e), we(u)), n(3, s = q(e, r)), "asChild" in u && n(0, l = u.asChild), "$$scope" in u && n(4, a = u.$$scope);
  }, [l, i, c, s, a, o];
}
class Rp extends ye {
  constructor(e) {
    super(), ve(this, e, Sp, Ap, oe, { asChild: 0 });
  }
}
const Op = (t) => ({ builder: t & /*$checkboxItem*/
2 }), To = (t) => ({ builder: (
  /*builder*/
  t[12]
) }), $p = (t) => ({ builder: t & /*$checkboxItem*/
2 }), Eo = (t) => ({ builder: (
  /*$checkboxItem*/
  t[1]
) });
function Np(t) {
  const e = t.slice(), n = (
    /*$checkboxItem*/
    e[1]
  );
  return e[12] = n, e;
}
function Ip(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[9].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[8],
    To
  );
  let a = [
    /*builder*/
    t[12],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = E(l, a[c]);
  return {
    c() {
      e = Re("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      O(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        gt(
          /*builder*/
          t[12].action(e)
        ),
        te(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-focusin",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-focusout",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[3]
        ),
        te(
          e,
          "m-pointermove",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $checkboxItem*/
      258) && he(
        o,
        i,
        c,
        /*$$scope*/
        c[8],
        n ? de(
          i,
          /*$$scope*/
          c[8],
          u,
          Op
        ) : me(
          /*$$scope*/
          c[8]
        ),
        To
      ), le(e, l = ae(a, [
        u & /*$checkboxItem*/
        2 && /*builder*/
        c[12],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (_(o, c), n = !0);
    },
    o(c) {
      b(o, c), n = !1;
    },
    d(c) {
      c && R(e), o && o.d(c), r = !1, et(s);
    }
  };
}
function xp(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[8],
    Eo
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $checkboxItem*/
      258) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[8],
        e ? de(
          n,
          /*$$scope*/
          s[8],
          i,
          $p
        ) : me(
          /*$$scope*/
          s[8]
        ),
        Eo
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Pp(t) {
  let e, n, r, s;
  const i = [xp, Ip], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Np(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = $e();
    },
    m(c, u) {
      o[e].m(c, u), O(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Le(), b(o[f], 1, 1, () => {
        o[f] = null;
      }), Ze(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (_(n), s = !0);
    },
    o(c) {
      b(n), s = !1;
    },
    d(c) {
      c && R(r), o[e].d(c);
    }
  };
}
function Mp(t, e, n) {
  const r = ["checked", "onCheckedChange", "disabled", "asChild"];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e, { checked: l = void 0 } = e, { onCheckedChange: c = void 0 } = e, { disabled: u = void 0 } = e, { asChild: f = !1 } = e;
  const { elements: { checkboxItem: h }, states: { checked: d }, updateOption: m } = Vt.setCheckboxItem({
    disabled: u,
    defaultChecked: l,
    onCheckedChange: ({ next: p }) => (c == null || c(p), n(5, l = p), p)
  });
  Ge(t, h, (p) => n(1, i = p));
  const g = _r();
  return t.$$set = (p) => {
    e = E(E({}, e), we(p)), n(4, s = q(e, r)), "checked" in p && n(5, l = p.checked), "onCheckedChange" in p && n(6, c = p.onCheckedChange), "disabled" in p && n(7, u = p.disabled), "asChild" in p && n(0, f = p.asChild), "$$scope" in p && n(8, a = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && d.set(l), t.$$.dirty & /*disabled*/
    128 && m("disabled", u);
  }, [
    f,
    i,
    h,
    g,
    s,
    l,
    c,
    u,
    a,
    o
  ];
}
class Dp extends ye {
  constructor(e) {
    super(), ve(this, e, Mp, Pp, oe, {
      checked: 5,
      onCheckedChange: 6,
      disabled: 7,
      asChild: 0
    });
  }
}
const Fp = (t) => ({ checked: t & /*$checked*/
1 }), Ao = (t) => ({ checked: (
  /*$checked*/
  t[0]
) });
function So(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[3],
    Ao
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $checked*/
      9) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          i,
          Fp
        ) : me(
          /*$$scope*/
          s[3]
        ),
        Ao
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function jp(t) {
  let e, n, r = (
    /*$checked*/
    t[0] && So(t)
  ), s = [
    /*$$restProps*/
    t[2]
  ], i = {};
  for (let o = 0; o < s.length; o += 1)
    i = E(i, s[o]);
  return {
    c() {
      e = Re("div"), r && r.c(), le(e, i);
    },
    m(o, a) {
      O(o, e, a), r && r.m(e, null), n = !0;
    },
    p(o, [a]) {
      /*$checked*/
      o[0] ? r ? (r.p(o, a), a & /*$checked*/
      1 && _(r, 1)) : (r = So(o), r.c(), _(r, 1), r.m(e, null)) : r && (Le(), b(r, 1, 1, () => {
        r = null;
      }), Ze()), le(e, i = ae(s, [a & /*$$restProps*/
      4 && /*$$restProps*/
      o[2]]));
    },
    i(o) {
      n || (_(r), n = !0);
    },
    o(o) {
      b(r), n = !1;
    },
    d(o) {
      o && R(e), r && r.d();
    }
  };
}
function Lp(t, e, n) {
  const r = [];
  let s = q(e, r), i, { $$slots: o = {}, $$scope: a } = e;
  const l = Vt.getCheckboxIndicator();
  return Ge(t, l, (c) => n(0, i = c)), t.$$set = (c) => {
    e = E(E({}, e), we(c)), n(2, s = q(e, r)), "$$scope" in c && n(3, a = c.$$scope);
  }, [i, l, s, a, o];
}
class Zp extends ye {
  constructor(e) {
    super(), ve(this, e, Lp, jp, oe, {});
  }
}
function zp(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      2048) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        e ? de(
          n,
          /*$$scope*/
          s[11],
          i,
          null
        ) : me(
          /*$$scope*/
          s[11]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Bp(t) {
  let e, n;
  const r = [
    {
      class: xe(
        "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
        /*inset*/
        t[1] && "uikit-pl-8",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  let s = {
    $$slots: { default: [zp] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new Nm({ props: s }), e.$on(
    "click",
    /*click_handler*/
    t[4]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[5]
  ), e.$on(
    "focusin",
    /*focusin_handler*/
    t[6]
  ), e.$on(
    "focusout",
    /*focusout_handler*/
    t[7]
  ), e.$on(
    "pointerdown",
    /*pointerdown_handler*/
    t[8]
  ), e.$on(
    "pointerleave",
    /*pointerleave_handler*/
    t[9]
  ), e.$on(
    "pointermove",
    /*pointermove_handler*/
    t[10]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, inset, className, $$restProps*/
      7 ? ae(r, [
        o & /*cn, inset, className*/
        3 && {
          class: xe(
            "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
            /*inset*/
            i[1] && "uikit-pl-8",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        4 && st(
          /*$$restProps*/
          i[2]
        )
      ]) : {};
      o & /*$$scope*/
      2048 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function Vp(t, e, n) {
  const r = ["class", "inset"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { inset: l = void 0 } = e;
  function c(p) {
    ce.call(this, t, p);
  }
  function u(p) {
    ce.call(this, t, p);
  }
  function f(p) {
    ce.call(this, t, p);
  }
  function h(p) {
    ce.call(this, t, p);
  }
  function d(p) {
    ce.call(this, t, p);
  }
  function m(p) {
    ce.call(this, t, p);
  }
  function g(p) {
    ce.call(this, t, p);
  }
  return t.$$set = (p) => {
    e = E(E({}, e), we(p)), n(2, s = q(e, r)), "class" in p && n(0, a = p.class), "inset" in p && n(1, l = p.inset), "$$scope" in p && n(11, o = p.$$scope);
  }, [
    a,
    l,
    s,
    i,
    c,
    u,
    f,
    h,
    d,
    m,
    g,
    o
  ];
}
class Us extends ye {
  constructor(e) {
    super(), ve(this, e, Vp, Bp, oe, { class: 0, inset: 1 });
  }
}
function Wp(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      16) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        e ? de(
          n,
          /*$$scope*/
          s[4],
          i,
          null
        ) : me(
          /*$$scope*/
          s[4]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Gp(t) {
  let e, n;
  const r = [
    {
      class: xe(
        "uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-font-semibold",
        /*inset*/
        t[1] && "uikit-pl-8",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  let s = {
    $$slots: { default: [Wp] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new Hm({ props: s }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, inset, className, $$restProps*/
      7 ? ae(r, [
        o & /*cn, inset, className*/
        3 && {
          class: xe(
            "uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-font-semibold",
            /*inset*/
            i[1] && "uikit-pl-8",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        4 && st(
          /*$$restProps*/
          i[2]
        )
      ]) : {};
      o & /*$$scope*/
      16 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function Up(t, e, n) {
  const r = ["class", "inset"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { inset: l = void 0 } = e;
  return t.$$set = (c) => {
    e = E(E({}, e), we(c)), n(2, s = q(e, r)), "class" in c && n(0, a = c.class), "inset" in c && n(1, l = c.inset), "$$scope" in c && n(4, o = c.$$scope);
  }, [a, l, s, i, o];
}
class Hp extends ye {
  constructor(e) {
    super(), ve(this, e, Up, Gp, oe, { class: 0, inset: 1 });
  }
}
function Kp(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      64) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[6],
        e ? de(
          n,
          /*$$scope*/
          s[6],
          i,
          null
        ) : me(
          /*$$scope*/
          s[6]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function qp(t) {
  let e, n;
  const r = [
    { transition: (
      /*transition*/
      t[1]
    ) },
    {
      transitionConfig: (
        /*transitionConfig*/
        t[2]
      )
    },
    {
      class: xe(
        "uikit-z-50 uikit-min-w-[8rem] uikit-rounded-md uikit-border uikit-bg-popover uikit-p-1 uikit-text-popover-foreground uikit-shadow-md focus:uikit-outline-none",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[3]
  ];
  let s = {
    $$slots: { default: [Kp] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new mp({
    props: s
  }), e.$on(
    "keydown",
    /*keydown_handler*/
    t[5]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*transition, transitionConfig, cn, className, $$restProps*/
      15 ? ae(r, [
        o & /*transition*/
        2 && { transition: (
          /*transition*/
          i[1]
        ) },
        o & /*transitionConfig*/
        4 && {
          transitionConfig: (
            /*transitionConfig*/
            i[2]
          )
        },
        o & /*cn, className*/
        1 && {
          class: xe(
            "uikit-z-50 uikit-min-w-[8rem] uikit-rounded-md uikit-border uikit-bg-popover uikit-p-1 uikit-text-popover-foreground uikit-shadow-md focus:uikit-outline-none",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        8 && st(
          /*$$restProps*/
          i[3]
        )
      ]) : {};
      o & /*$$scope*/
      64 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function Yp(t, e, n) {
  const r = ["class", "transition", "transitionConfig"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { transition: l = bu } = e, { transitionConfig: c = void 0 } = e;
  function u(f) {
    ce.call(this, t, f);
  }
  return t.$$set = (f) => {
    e = E(E({}, e), we(f)), n(3, s = q(e, r)), "class" in f && n(0, a = f.class), "transition" in f && n(1, l = f.transition), "transitionConfig" in f && n(2, c = f.transitionConfig), "$$scope" in f && n(6, o = f.$$scope);
  }, [
    a,
    l,
    c,
    s,
    i,
    u,
    o
  ];
}
class pl extends ye {
  constructor(e) {
    super(), ve(this, e, Yp, qp, oe, {
      class: 0,
      transition: 1,
      transitionConfig: 2
    });
  }
}
const Ro = {
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
function Oo(t, e, n) {
  const r = t.slice();
  return r[10] = e[n][0], r[11] = e[n][1], r;
}
function Os(t) {
  let e, n = [
    /*attrs*/
    t[11]
  ], r = {};
  for (let s = 0; s < n.length; s += 1)
    r = E(r, n[s]);
  return {
    c() {
      e = oa(
        /*tag*/
        t[10]
      ), zr(e, r);
    },
    m(s, i) {
      O(s, e, i);
    },
    p(s, i) {
      zr(e, r = ae(n, [i & /*iconNode*/
      32 && /*attrs*/
      s[11]]));
    },
    d(s) {
      s && R(e);
    }
  };
}
function $o(t) {
  let e = (
    /*tag*/
    t[10]
  ), n, r = (
    /*tag*/
    t[10] && Os(t)
  );
  return {
    c() {
      r && r.c(), n = $e();
    },
    m(s, i) {
      r && r.m(s, i), O(s, n, i);
    },
    p(s, i) {
      /*tag*/
      s[10] ? e ? oe(
        e,
        /*tag*/
        s[10]
      ) ? (r.d(1), r = Os(s), e = /*tag*/
      s[10], r.c(), r.m(n.parentNode, n)) : r.p(s, i) : (r = Os(s), e = /*tag*/
      s[10], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      s[10]);
    },
    d(s) {
      s && R(n), r && r.d(s);
    }
  };
}
function Xp(t) {
  let e, n, r, s, i, o = nt(
    /*iconNode*/
    t[5]
  ), a = [];
  for (let h = 0; h < o.length; h += 1)
    a[h] = $o(Oo(t, o, h));
  const l = (
    /*#slots*/
    t[9].default
  ), c = fe(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    Ro,
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
      class: s = `lucide-icon lucide lucide-${/*name*/
      t[0]} ${/*$$props*/
      t[7].class ?? ""}`
    }
  ], f = {};
  for (let h = 0; h < u.length; h += 1)
    f = E(f, u[h]);
  return {
    c() {
      e = oa("svg");
      for (let h = 0; h < a.length; h += 1)
        a[h].c();
      n = $e(), c && c.c(), zr(e, f);
    },
    m(h, d) {
      O(h, e, d);
      for (let m = 0; m < a.length; m += 1)
        a[m] && a[m].m(e, null);
      it(e, n), c && c.m(e, null), i = !0;
    },
    p(h, [d]) {
      if (d & /*iconNode*/
      32) {
        o = nt(
          /*iconNode*/
          h[5]
        );
        let m;
        for (m = 0; m < o.length; m += 1) {
          const g = Oo(h, o, m);
          a[m] ? a[m].p(g, d) : (a[m] = $o(g), a[m].c(), a[m].m(e, n));
        }
        for (; m < a.length; m += 1)
          a[m].d(1);
        a.length = o.length;
      }
      c && c.p && (!i || d & /*$$scope*/
      256) && he(
        c,
        l,
        h,
        /*$$scope*/
        h[8],
        i ? de(
          l,
          /*$$scope*/
          h[8],
          d,
          null
        ) : me(
          /*$$scope*/
          h[8]
        ),
        null
      ), zr(e, f = ae(u, [
        Ro,
        d & /*$$restProps*/
        64 && /*$$restProps*/
        h[6],
        (!i || d & /*size*/
        4) && { width: (
          /*size*/
          h[2]
        ) },
        (!i || d & /*size*/
        4) && { height: (
          /*size*/
          h[2]
        ) },
        (!i || d & /*color*/
        2) && { stroke: (
          /*color*/
          h[1]
        ) },
        (!i || d & /*absoluteStrokeWidth, strokeWidth, size*/
        28 && r !== (r = /*absoluteStrokeWidth*/
        h[4] ? Number(
          /*strokeWidth*/
          h[3]
        ) * 24 / Number(
          /*size*/
          h[2]
        ) : (
          /*strokeWidth*/
          h[3]
        ))) && { "stroke-width": r },
        (!i || d & /*name, $$props*/
        129 && s !== (s = `lucide-icon lucide lucide-${/*name*/
        h[0]} ${/*$$props*/
        h[7].class ?? ""}`)) && { class: s }
      ]));
    },
    i(h) {
      i || (_(c, h), i = !0);
    },
    o(h) {
      b(c, h), i = !1;
    },
    d(h) {
      h && R(e), Fn(a, h), c && c.d(h);
    }
  };
}
function Jp(t, e, n) {
  const r = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { name: a } = e, { color: l = "currentColor" } = e, { size: c = 24 } = e, { strokeWidth: u = 2 } = e, { absoluteStrokeWidth: f = !1 } = e, { iconNode: h } = e;
  return t.$$set = (d) => {
    n(7, e = E(E({}, e), we(d))), n(6, s = q(e, r)), "name" in d && n(0, a = d.name), "color" in d && n(1, l = d.color), "size" in d && n(2, c = d.size), "strokeWidth" in d && n(3, u = d.strokeWidth), "absoluteStrokeWidth" in d && n(4, f = d.absoluteStrokeWidth), "iconNode" in d && n(5, h = d.iconNode), "$$scope" in d && n(8, o = d.$$scope);
  }, e = we(e), [
    a,
    l,
    c,
    u,
    f,
    h,
    s,
    e,
    o,
    i
  ];
}
class Qp extends ye {
  constructor(e) {
    super(), ve(this, e, Jp, Xp, oe, {
      name: 0,
      color: 1,
      size: 2,
      strokeWidth: 3,
      absoluteStrokeWidth: 4,
      iconNode: 5
    });
  }
}
const br = Qp;
function eg(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : me(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function tg(t) {
  let e, n;
  const r = [
    { name: "arrow-up-down" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let s = {
    $$slots: { default: [eg] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new br({ props: s }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? ae(r, [
        r[0],
        o & /*$$props*/
        2 && st(
          /*$$props*/
          i[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function ng(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [
    ["path", { d: "m21 16-4 4-4-4" }],
    ["path", { d: "M17 20V4" }],
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }]
  ];
  return t.$$set = (o) => {
    n(1, e = E(E({}, e), we(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = we(e), [i, e, r, s];
}
class rg extends ye {
  constructor(e) {
    super(), ve(this, e, ng, tg, oe, {});
  }
}
const sg = rg;
function ig(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : me(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function og(t) {
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
  let s = {
    $$slots: { default: [ig] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new br({ props: s }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? ae(r, [
        r[0],
        o & /*$$props*/
        2 && st(
          /*$$props*/
          i[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function ag(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [["polyline", { points: "20 6 9 17 4 12" }]];
  return t.$$set = (o) => {
    n(1, e = E(E({}, e), we(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = we(e), [i, e, r, s];
}
class lg extends ye {
  constructor(e) {
    super(), ve(this, e, ag, og, oe, {});
  }
}
const gl = lg;
function cg(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : me(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function ug(t) {
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
  let s = {
    $$slots: { default: [cg] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new br({ props: s }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? ae(r, [
        r[0],
        o & /*$$props*/
        2 && st(
          /*$$props*/
          i[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function fg(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [["path", { d: "m6 9 6 6 6-6" }]];
  return t.$$set = (o) => {
    n(1, e = E(E({}, e), we(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = we(e), [i, e, r, s];
}
class dg extends ye {
  constructor(e) {
    super(), ve(this, e, fg, ug, oe, {});
  }
}
const hg = dg;
function mg(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : me(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function pg(t) {
  let e, n;
  const r = [
    { name: "minus" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let s = {
    $$slots: { default: [mg] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new br({ props: s }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? ae(r, [
        r[0],
        o & /*$$props*/
        2 && st(
          /*$$props*/
          i[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function gg(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [["path", { d: "M5 12h14" }]];
  return t.$$set = (o) => {
    n(1, e = E(E({}, e), we(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = we(e), [i, e, r, s];
}
class _g extends ye {
  constructor(e) {
    super(), ve(this, e, gg, pg, oe, {});
  }
}
const bg = _g;
function vg(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = fe(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : me(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function yg(t) {
  let e, n;
  const r = [
    { name: "more-horizontal" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let s = {
    $$slots: { default: [vg] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new br({ props: s }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? ae(r, [
        r[0],
        o & /*$$props*/
        2 && st(
          /*$$props*/
          i[1]
        ),
        o & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function kg(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "19", cy: "12", r: "1" }],
    ["circle", { cx: "5", cy: "12", r: "1" }]
  ];
  return t.$$set = (o) => {
    n(1, e = E(E({}, e), we(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = we(e), [i, e, r, s];
}
class wg extends ye {
  constructor(e) {
    super(), ve(this, e, kg, yg, oe, {});
  }
}
const Cg = wg;
function Tg(t) {
  let e, n;
  const r = [
    {
      class: xe(
        "uikit--mx-1 uikit-my-1 uikit-h-px uikit-bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let s = {};
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new Rp({
    props: s
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, className, $$restProps*/
      3 ? ae(r, [
        o & /*cn, className*/
        1 && {
          class: xe(
            "uikit--mx-1 uikit-my-1 uikit-h-px uikit-bg-muted",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        2 && st(
          /*$$restProps*/
          i[1]
        )
      ]) : {};
      e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function Eg(t, e, n) {
  const r = ["class"];
  let s = q(e, r), { class: i = void 0 } = e;
  return t.$$set = (o) => {
    e = E(E({}, e), we(o)), n(1, s = q(e, r)), "class" in o && n(0, i = o.class);
  }, [i, s];
}
class Ag extends ye {
  constructor(e) {
    super(), ve(this, e, Eg, Tg, oe, { class: 0 });
  }
}
function Sg(t) {
  let e, n;
  return e = new gl({ props: { class: "uikit-h-4 uikit-w-4" } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p: Be,
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function Rg(t) {
  let e, n, r, s;
  n = new Zp({
    props: {
      $$slots: { default: [Sg] },
      $$scope: { ctx: t }
    }
  });
  const i = (
    /*#slots*/
    t[3].default
  ), o = fe(
    i,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = Re("span"), L(n.$$.fragment), r = Ye(), o && o.c(), ht(e, "class", "uikit-absolute uikit-left-2 uikit-flex uikit-h-3.5 uikit-w-3.5 uikit-items-center uikit-justify-center");
    },
    m(a, l) {
      O(a, e, l), F(n, e, null), O(a, r, l), o && o.m(a, l), s = !0;
    },
    p(a, l) {
      const c = {};
      l & /*$$scope*/
      4096 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c), o && o.p && (!s || l & /*$$scope*/
      4096) && he(
        o,
        i,
        a,
        /*$$scope*/
        a[12],
        s ? de(
          i,
          /*$$scope*/
          a[12],
          l,
          null
        ) : me(
          /*$$scope*/
          a[12]
        ),
        null
      );
    },
    i(a) {
      s || (_(n.$$.fragment, a), _(o, a), s = !0);
    },
    o(a) {
      b(n.$$.fragment, a), b(o, a), s = !1;
    },
    d(a) {
      a && (R(e), R(r)), j(n), o && o.d(a);
    }
  };
}
function Og(t) {
  let e, n, r;
  const s = [
    {
      class: xe(
        "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-py-1.5 uikit-pl-8 uikit-pr-2 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  function i(a) {
    t[4](a);
  }
  let o = {
    $$slots: { default: [Rg] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < s.length; a += 1)
    o = E(o, s[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (o.checked = /*checked*/
    t[0]), e = new Dp({
      props: o
    }), Rt.push(() => _n(e, "checked", i)), e.$on(
      "click",
      /*click_handler*/
      t[5]
    ), e.$on(
      "keydown",
      /*keydown_handler*/
      t[6]
    ), e.$on(
      "focusin",
      /*focusin_handler*/
      t[7]
    ), e.$on(
      "focusout",
      /*focusout_handler*/
      t[8]
    ), e.$on(
      "pointerdown",
      /*pointerdown_handler*/
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
        L(e.$$.fragment);
      },
      m(a, l) {
        F(e, a, l), r = !0;
      },
      p(a, [l]) {
        const c = l & /*cn, className, $$restProps*/
        6 ? ae(s, [
          l & /*cn, className*/
          2 && {
            class: xe(
              "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-py-1.5 uikit-pl-8 uikit-pr-2 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && st(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        4096 && (c.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, c.checked = /*checked*/
        a[0], gn(() => n = !1)), e.$set(c);
      },
      i(a) {
        r || (_(e.$$.fragment, a), r = !0);
      },
      o(a) {
        b(e.$$.fragment, a), r = !1;
      },
      d(a) {
        j(e, a);
      }
    }
  );
}
function $g(t, e, n) {
  const r = ["class", "checked"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { checked: l = void 0 } = e;
  function c(y) {
    l = y, n(0, l);
  }
  function u(y) {
    ce.call(this, t, y);
  }
  function f(y) {
    ce.call(this, t, y);
  }
  function h(y) {
    ce.call(this, t, y);
  }
  function d(y) {
    ce.call(this, t, y);
  }
  function m(y) {
    ce.call(this, t, y);
  }
  function g(y) {
    ce.call(this, t, y);
  }
  function p(y) {
    ce.call(this, t, y);
  }
  return t.$$set = (y) => {
    e = E(E({}, e), we(y)), n(2, s = q(e, r)), "class" in y && n(1, a = y.class), "checked" in y && n(0, l = y.checked), "$$scope" in y && n(12, o = y.$$scope);
  }, [
    l,
    a,
    s,
    i,
    c,
    u,
    f,
    h,
    d,
    m,
    g,
    p,
    o
  ];
}
class Ng extends ye {
  constructor(e) {
    super(), ve(this, e, $g, Og, oe, { class: 1, checked: 0 });
  }
}
const _l = Cm, bl = wp, Ig = Lm;
function xg(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = fe(
    n,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope*/
      256) && he(
        r,
        n,
        s,
        /*$$scope*/
        s[8],
        e ? de(
          n,
          /*$$scope*/
          s[8],
          i,
          null
        ) : me(
          /*$$scope*/
          s[8]
        ),
        null
      );
    },
    i(s) {
      e || (_(r, s), e = !0);
    },
    o(s) {
      b(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Pg(t) {
  let e, n;
  const r = [
    { builders: (
      /*builders*/
      t[3]
    ) },
    {
      class: xe(Po({
        variant: (
          /*variant*/
          t[1]
        ),
        size: (
          /*size*/
          t[2]
        ),
        className: (
          /*className*/
          t[0]
        )
      }))
    },
    /*$$restProps*/
    t[4]
  ];
  let s = {
    $$slots: { default: [xg] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = E(s, r[i]);
  return e = new Hh({ props: s }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? ae(r, [
        o & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        o & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: xe(Po({
            variant: (
              /*variant*/
              i[1]
            ),
            size: (
              /*size*/
              i[2]
            ),
            className: (
              /*className*/
              i[0]
            )
          }))
        },
        o & /*$$restProps*/
        16 && st(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      o & /*$$scope*/
      256 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (_(e.$$.fragment, i), n = !0);
    },
    o(i) {
      b(e.$$.fragment, i), n = !1;
    },
    d(i) {
      j(e, i);
    }
  };
}
function Mg(t, e, n) {
  const r = ["class", "variant", "size", "builders"];
  let s = q(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { variant: l = "default" } = e, { size: c = "default" } = e, { builders: u = [] } = e;
  function f(d) {
    ce.call(this, t, d);
  }
  function h(d) {
    ce.call(this, t, d);
  }
  return t.$$set = (d) => {
    e = E(E({}, e), we(d)), n(4, s = q(e, r)), "class" in d && n(0, a = d.class), "variant" in d && n(1, l = d.variant), "size" in d && n(2, c = d.size), "builders" in d && n(3, u = d.builders), "$$scope" in d && n(8, o = d.$$scope);
  }, [
    a,
    l,
    c,
    u,
    s,
    i,
    f,
    h,
    o
  ];
}
class fr extends ye {
  constructor(e) {
    super(), ve(this, e, Mg, Pg, oe, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var No = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, ct = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, Dg = (t, e) => JSON.stringify(t) === JSON.stringify(e);
function vl(t, e) {
  t.forEach(function(n) {
    Array.isArray(n) ? vl(n, e) : e.push(n);
  });
}
function yl(t) {
  let e = [];
  return vl(t, e), e;
}
var Fg = (...t) => yl(t).filter(Boolean), kl = (t, e) => {
  let n = {}, r = Object.keys(t), s = Object.keys(e);
  for (let i of r)
    if (s.includes(i)) {
      let o = t[i], a = e[i];
      typeof o == "object" && typeof a == "object" ? n[i] = kl(o, a) : n[i] = a + " " + o;
    } else
      n[i] = t[i];
  for (let i of s)
    r.includes(i) || (n[i] = e[i]);
  return n;
}, Io = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim(), jg = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, wl = (t) => t || void 0, rs = (...t) => wl(yl(t).filter(Boolean).join(" ")), $s = null, ss = {}, Hs = !1, Un = (...t) => (e) => e.twMerge ? ((!$s || Hs) && (Hs = !1, $s = ct(ss) ? ka : gu(ss)), wl($s(rs(t)))) : rs(t), xo = (t, e) => {
  for (let n in e)
    t.hasOwnProperty(n) ? t[n] = rs(t[n], e[n]) : t[n] = e[n];
  return t;
}, Lg = (t, e) => {
  let { extend: n = null, slots: r = {}, variants: s = {}, compoundVariants: i = [], compoundSlots: o = [], defaultVariants: a = {} } = t, l = { ...jg, ...e }, c = n != null && n.base ? rs(n.base, t == null ? void 0 : t.base) : t == null ? void 0 : t.base, u = n != null && n.variants && !ct(n.variants) ? kl(s, n.variants) : s, f = n != null && n.defaultVariants && !ct(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !ct(l.twMergeConfig) && !Dg(l.twMergeConfig, ss) && (Hs = !0, ss = l.twMergeConfig);
  let h = ct(r) ? {} : { base: t == null ? void 0 : t.base, ...r }, d = ct(n == null ? void 0 : n.slots) ? h : xo(n == null ? void 0 : n.slots, ct(h) ? { base: t == null ? void 0 : t.base } : h), m = (p) => {
    if (ct(u) && ct(r) && ct(n == null ? void 0 : n.slots))
      return Un(c, p == null ? void 0 : p.class, p == null ? void 0 : p.className)(l);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (o && !Array.isArray(o))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof o}`);
    let y = (k, v, C = [], I) => {
      let T = C;
      if (typeof v == "string")
        T = T.concat(Io(v).split(" ").map((x) => `${k}:${x}`));
      else if (Array.isArray(v))
        T = T.concat(v.reduce((x, W) => x.concat(`${k}:${W}`), []));
      else if (typeof v == "object" && typeof I == "string") {
        for (let x in v)
          if (v.hasOwnProperty(x) && x === I) {
            let W = v[x];
            if (W && typeof W == "string") {
              let ee = Io(W);
              T[I] ? T[I] = T[I].concat(ee.split(" ").map((ne) => `${k}:${ne}`)) : T[I] = ee.split(" ").map((ne) => `${k}:${ne}`);
            } else
              Array.isArray(W) && W.length > 0 && (T[I] = W.reduce((ee, ne) => ee.concat(`${k}:${ne}`), []));
          }
      }
      return T;
    }, w = (k, v = u, C = null, I = null) => {
      var T;
      let x = v[k];
      if (!x || ct(x))
        return null;
      let W = (T = I == null ? void 0 : I[k]) != null ? T : p == null ? void 0 : p[k];
      if (W === null)
        return null;
      let ee = No(W), ne = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || l.responsiveVariants === !0, Fe = f == null ? void 0 : f[k], Me = [];
      if (typeof ee == "object" && ne)
        for (let [M, $] of Object.entries(ee)) {
          let se = x[$];
          if (M === "initial") {
            Fe = $;
            continue;
          }
          Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(M) || (Me = y(M, se, Me, C));
        }
      let Ve = x[ee] || x[No(Fe)];
      return typeof Me == "object" && typeof C == "string" && Me[C] ? xo(Me, Ve) : Me.length > 0 ? (Me.push(Ve), Me) : Ve;
    }, N = () => u ? Object.keys(u).map((k) => w(k, u)) : null, A = (k, v) => {
      if (!u || typeof u != "object")
        return null;
      let C = new Array();
      for (let I in u) {
        let T = w(I, u, k, v), x = k === "base" && typeof T == "string" ? T : T && T[k];
        x && (C[C.length] = x);
      }
      return C;
    }, K = {};
    for (let k in p)
      p[k] !== void 0 && (K[k] = p[k]);
    let D = (k, v) => {
      var C;
      let I = typeof (p == null ? void 0 : p[k]) == "object" ? { [k]: (C = p[k]) == null ? void 0 : C.initial } : {};
      return { ...f, ...K, ...I, ...v };
    }, V = (k = [], v) => {
      let C = [];
      for (let { class: I, className: T, ...x } of k) {
        let W = !0;
        for (let [ee, ne] of Object.entries(x)) {
          let Fe = D(ee, v);
          if (Array.isArray(ne)) {
            if (!ne.includes(Fe[ee])) {
              W = !1;
              break;
            }
          } else if (Fe[ee] !== ne) {
            W = !1;
            break;
          }
        }
        W && (I && C.push(I), T && C.push(T));
      }
      return C;
    }, ke = (k) => {
      let v = V(i, k), C = V(n == null ? void 0 : n.compoundVariants, k);
      return Fg(C, v);
    }, J = (k) => {
      let v = ke(k);
      if (!Array.isArray(v))
        return v;
      let C = {};
      for (let I of v)
        if (typeof I == "string" && (C.base = Un(C.base, I)(l)), typeof I == "object")
          for (let [T, x] of Object.entries(I))
            C[T] = Un(C[T], x)(l);
      return C;
    }, H = (k) => {
      if (o.length < 1)
        return null;
      let v = {};
      for (let { slots: C = [], class: I, className: T, ...x } of o) {
        if (!ct(x)) {
          let W = !0;
          for (let ee of Object.keys(x)) {
            let ne = D(ee, k)[ee];
            if (ne === void 0 || ne !== x[ee]) {
              W = !1;
              break;
            }
          }
          if (!W)
            continue;
        }
        for (let W of C)
          v[W] = v[W] || [], v[W].push([I, T]);
      }
      return v;
    };
    if (!ct(r) || !ct(n == null ? void 0 : n.slots)) {
      let k = {};
      if (typeof d == "object" && !ct(d))
        for (let v of Object.keys(d))
          k[v] = (C) => {
            var I, T;
            return Un(d[v], A(v, C), ((I = J(C)) != null ? I : [])[v], ((T = H(C)) != null ? T : [])[v], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(l);
          };
      return k;
    }
    return Un(c, N(), ke(), p == null ? void 0 : p.class, p == null ? void 0 : p.className)(l);
  }, g = () => {
    if (!(!u || typeof u != "object"))
      return Object.keys(u);
  };
  return m.variantKeys = g(), m.extend = n, m.base = c, m.slots = d, m.variants = u, m.defaultVariants = f, m.compoundSlots = o, m.compoundVariants = i, m;
};
const Po = Lg({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Zg(t) {
  let e, n, r, s;
  return r = new Cg({ props: { class: "w-4 h-4" } }), {
    c() {
      e = Re("span"), e.textContent = "Open menu", n = Ye(), L(r.$$.fragment), ht(e, "class", "sr-only");
    },
    m(i, o) {
      O(i, e, o), O(i, n, o), F(r, i, o), s = !0;
    },
    p: Be,
    i(i) {
      s || (_(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && (R(e), R(n)), j(r, i);
    }
  };
}
function zg(t) {
  let e, n;
  return e = new fr({
    props: {
      variant: "ghost",
      builders: [
        /*builder*/
        t[2]
      ],
      size: "icon",
      class: "relative w-8 h-8 p-0",
      $$slots: { default: [Zg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*builder*/
      4 && (i.builders = [
        /*builder*/
        r[2]
      ]), s & /*$$scope*/
      8 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function Bg(t) {
  let e;
  return {
    c() {
      e = Qe("Actions");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Vg(t) {
  let e;
  return {
    c() {
      e = Qe("Copy payment ID");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Wg(t) {
  let e, n, r, s;
  return e = new Hp({
    props: {
      $$slots: { default: [Bg] },
      $$scope: { ctx: t }
    }
  }), r = new Us({
    props: {
      $$slots: { default: [Vg] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "click",
    /*click_handler*/
    t[1]
  ), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      const a = {};
      o & /*$$scope*/
      8 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      const l = {};
      o & /*$$scope*/
      8 && (l.$$scope = { dirty: o, ctx: i }), r.$set(l);
    },
    i(i) {
      s || (_(e.$$.fragment, i), _(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(e.$$.fragment, i), b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(e, i), j(r, i);
    }
  };
}
function Gg(t) {
  let e;
  return {
    c() {
      e = Qe("View customer");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Ug(t) {
  let e;
  return {
    c() {
      e = Qe("View payment details");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function Hg(t) {
  let e, n, r, s, i, o, a, l;
  return e = new Ig({
    props: {
      $$slots: { default: [Wg] },
      $$scope: { ctx: t }
    }
  }), r = new Ag({}), i = new Us({
    props: {
      $$slots: { default: [Gg] },
      $$scope: { ctx: t }
    }
  }), a = new Us({
    props: {
      $$slots: { default: [Ug] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment), s = Ye(), L(i.$$.fragment), o = Ye(), L(a.$$.fragment);
    },
    m(c, u) {
      F(e, c, u), O(c, n, u), F(r, c, u), O(c, s, u), F(i, c, u), O(c, o, u), F(a, c, u), l = !0;
    },
    p(c, u) {
      const f = {};
      u & /*$$scope, id*/
      9 && (f.$$scope = { dirty: u, ctx: c }), e.$set(f);
      const h = {};
      u & /*$$scope*/
      8 && (h.$$scope = { dirty: u, ctx: c }), i.$set(h);
      const d = {};
      u & /*$$scope*/
      8 && (d.$$scope = { dirty: u, ctx: c }), a.$set(d);
    },
    i(c) {
      l || (_(e.$$.fragment, c), _(r.$$.fragment, c), _(i.$$.fragment, c), _(a.$$.fragment, c), l = !0);
    },
    o(c) {
      b(e.$$.fragment, c), b(r.$$.fragment, c), b(i.$$.fragment, c), b(a.$$.fragment, c), l = !1;
    },
    d(c) {
      c && (R(n), R(s), R(o)), j(e, c), j(r, c), j(i, c), j(a, c);
    }
  };
}
function Kg(t) {
  let e, n, r, s;
  return e = new bl({
    props: {
      asChild: !0,
      $$slots: {
        default: [
          zg,
          ({ builder: i }) => ({ 2: i }),
          ({ builder: i }) => i ? 4 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), r = new pl({
    props: {
      $$slots: { default: [Hg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      const a = {};
      o & /*$$scope, builder*/
      12 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      const l = {};
      o & /*$$scope, id*/
      9 && (l.$$scope = { dirty: o, ctx: i }), r.$set(l);
    },
    i(i) {
      s || (_(e.$$.fragment, i), _(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(e.$$.fragment, i), b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(e, i), j(r, i);
    }
  };
}
function qg(t) {
  let e, n;
  return e = new _l({
    props: {
      $$slots: { default: [Kg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, [s]) {
      const i = {};
      s & /*$$scope, id*/
      9 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function Yg(t, e, n) {
  let { id: r } = e;
  const s = () => navigator.clipboard.writeText(r);
  return t.$$set = (i) => {
    "id" in i && n(0, r = i.id);
  }, [r, s];
}
class Xg extends ye {
  constructor(e) {
    super(), ve(this, e, Yg, qg, oe, { id: 0 });
  }
}
function Jg(t) {
  let e, n, r, s, i = [
    {
      class: n = xe(
        "uikit-flex uikit-h-10 uikit-w-full uikit-rounded-md uikit-border uikit-border-input uikit-bg-transparent uikit-px-3 uikit-py-2 uikit-text-sm uikit-ring-offset-background file:uikit-border-0 file:uikit-bg-transparent file:uikit-text-sm file:uikit-font-medium placeholder:uikit-text-muted-foreground focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-cursor-not-allowed disabled:uikit-opacity-50",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ], o = {};
  for (let a = 0; a < i.length; a += 1)
    o = E(o, i[a]);
  return {
    c() {
      e = Re("input"), le(e, o);
    },
    m(a, l) {
      O(a, e, l), e.autofocus && e.focus(), wi(
        e,
        /*value*/
        t[0]
      ), r || (s = [
        te(
          e,
          "input",
          /*input_input_handler*/
          t[15]
        ),
        te(
          e,
          "blur",
          /*blur_handler*/
          t[3]
        ),
        te(
          e,
          "change",
          /*change_handler*/
          t[4]
        ),
        te(
          e,
          "click",
          /*click_handler*/
          t[5]
        ),
        te(
          e,
          "focus",
          /*focus_handler*/
          t[6]
        ),
        te(
          e,
          "keydown",
          /*keydown_handler*/
          t[7]
        ),
        te(
          e,
          "keypress",
          /*keypress_handler*/
          t[8]
        ),
        te(
          e,
          "keyup",
          /*keyup_handler*/
          t[9]
        ),
        te(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[10]
        ),
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[11]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[12]
        ),
        te(
          e,
          "paste",
          /*paste_handler*/
          t[13]
        ),
        te(
          e,
          "input",
          /*input_handler*/
          t[14]
        )
      ], r = !0);
    },
    p(a, [l]) {
      le(e, o = ae(i, [
        l & /*className*/
        2 && n !== (n = xe(
          "uikit-flex uikit-h-10 uikit-w-full uikit-rounded-md uikit-border uikit-border-input uikit-bg-transparent uikit-px-3 uikit-py-2 uikit-text-sm uikit-ring-offset-background file:uikit-border-0 file:uikit-bg-transparent file:uikit-text-sm file:uikit-font-medium placeholder:uikit-text-muted-foreground focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-cursor-not-allowed disabled:uikit-opacity-50",
          /*className*/
          a[1]
        )) && { class: n },
        l & /*$$restProps*/
        4 && /*$$restProps*/
        a[2]
      ])), l & /*value*/
      1 && e.value !== /*value*/
      a[0] && wi(
        e,
        /*value*/
        a[0]
      );
    },
    i: Be,
    o: Be,
    d(a) {
      a && R(e), r = !1, et(s);
    }
  };
}
function Qg(t, e, n) {
  const r = ["class", "value"];
  let s = q(e, r), { class: i = void 0 } = e, { value: o = void 0 } = e;
  function a(A) {
    ce.call(this, t, A);
  }
  function l(A) {
    ce.call(this, t, A);
  }
  function c(A) {
    ce.call(this, t, A);
  }
  function u(A) {
    ce.call(this, t, A);
  }
  function f(A) {
    ce.call(this, t, A);
  }
  function h(A) {
    ce.call(this, t, A);
  }
  function d(A) {
    ce.call(this, t, A);
  }
  function m(A) {
    ce.call(this, t, A);
  }
  function g(A) {
    ce.call(this, t, A);
  }
  function p(A) {
    ce.call(this, t, A);
  }
  function y(A) {
    ce.call(this, t, A);
  }
  function w(A) {
    ce.call(this, t, A);
  }
  function N() {
    o = this.value, n(0, o);
  }
  return t.$$set = (A) => {
    e = E(E({}, e), we(A)), n(2, s = q(e, r)), "class" in A && n(1, i = A.class), "value" in A && n(0, o = A.value);
  }, [
    o,
    i,
    s,
    a,
    l,
    c,
    u,
    f,
    h,
    d,
    m,
    g,
    p,
    y,
    w,
    N
  ];
}
class e_ extends ye {
  constructor(e) {
    super(), ve(this, e, Qg, Jg, oe, { class: 1, value: 0 });
  }
}
function t_(t) {
  let e, n;
  return e = new bg({ props: { class: "h-4 w-4" } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function n_(t) {
  let e, n;
  return e = new gl({ props: { class: "h-4 w-4" } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function r_(t) {
  let e, n, r, s;
  const i = [n_, t_], o = [];
  function a(l, c) {
    return (
      /*isChecked*/
      l[5] ? 0 : (
        /*isIndeterminate*/
        l[6] ? 1 : -1
      )
    );
  }
  return ~(e = a(t)) && (n = o[e] = i[e](t)), {
    c() {
      n && n.c(), r = $e();
    },
    m(l, c) {
      ~e && o[e].m(l, c), O(l, r, c), s = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e !== u && (n && (Le(), b(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze()), ~e ? (n = o[e], n || (n = o[e] = i[e](l), n.c()), _(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(l) {
      s || (_(n), s = !0);
    },
    o(l) {
      b(n), s = !1;
    },
    d(l) {
      l && R(r), ~e && o[e].d(l);
    }
  };
}
function s_(t) {
  let e, n;
  return e = new am({
    props: {
      class: xe("flex items-center justify-center text-current h-4 w-4"),
      $$slots: {
        default: [
          r_,
          ({ isChecked: r, isIndeterminate: s }) => ({ 5: r, 6: s }),
          ({ isChecked: r, isIndeterminate: s }) => (r ? 32 : 0) | (s ? 64 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, isChecked, isIndeterminate*/
      224 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function i_(t) {
  let e, n, r;
  const s = [
    {
      class: xe(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  function i(a) {
    t[3](a);
  }
  let o = {
    $$slots: { default: [s_] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < s.length; a += 1)
    o = E(o, s[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (o.checked = /*checked*/
    t[0]), e = new rm({ props: o }), Rt.push(() => _n(e, "checked", i)), e.$on(
      "click",
      /*click_handler*/
      t[4]
    ), {
      c() {
        L(e.$$.fragment);
      },
      m(a, l) {
        F(e, a, l), r = !0;
      },
      p(a, [l]) {
        const c = l & /*cn, className, $$restProps*/
        6 ? ae(s, [
          l & /*cn, className*/
          2 && {
            class: xe(
              "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && st(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        128 && (c.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, c.checked = /*checked*/
        a[0], gn(() => n = !1)), e.$set(c);
      },
      i(a) {
        r || (_(e.$$.fragment, a), r = !0);
      },
      o(a) {
        b(e.$$.fragment, a), r = !1;
      },
      d(a) {
        j(e, a);
      }
    }
  );
}
function o_(t, e, n) {
  const r = ["class", "checked"];
  let s = q(e, r), { class: i = void 0 } = e, { checked: o = !1 } = e;
  function a(c) {
    o = c, n(0, o);
  }
  function l(c) {
    ce.call(this, t, c);
  }
  return t.$$set = (c) => {
    e = E(E({}, e), we(c)), n(2, s = q(e, r)), "class" in c && n(1, i = c.class), "checked" in c && n(0, o = c.checked);
  }, [
    o,
    i,
    s,
    a,
    l
  ];
}
class a_ extends ye {
  constructor(e) {
    super(), ve(this, e, o_, i_, oe, { class: 1, checked: 0 });
  }
}
function l_(t) {
  let e, n, r;
  function s(o) {
    t[2](o);
  }
  let i = {};
  return (
    /*$checked*/
    t[1] !== void 0 && (i.checked = /*$checked*/
    t[1]), e = new a_({ props: i }), Rt.push(() => _n(e, "checked", s)), {
      c() {
        L(e.$$.fragment);
      },
      m(o, a) {
        F(e, o, a), r = !0;
      },
      p(o, [a]) {
        const l = {};
        !n && a & /*$checked*/
        2 && (n = !0, l.checked = /*$checked*/
        o[1], gn(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (_(e.$$.fragment, o), r = !0);
      },
      o(o) {
        b(e.$$.fragment, o), r = !1;
      },
      d(o) {
        j(e, o);
      }
    }
  );
}
function c_(t, e, n) {
  let r, s = Be, i = () => (s(), s = os(o, (l) => n(1, r = l)), o);
  t.$$.on_destroy.push(() => s());
  let { checked: o } = e;
  i();
  function a(l) {
    r = l, o.set(r);
  }
  return t.$$set = (l) => {
    "checked" in l && i(n(0, o = l.checked));
  }, [o, r, a];
}
class Mo extends ye {
  constructor(e) {
    super(), ve(this, e, c_, l_, oe, { checked: 0 });
  }
}
function Do(t, e, n) {
  const r = t.slice();
  return r[37] = e[n], r;
}
function Fo(t, e, n) {
  const r = t.slice();
  return r[41] = e[n], r;
}
function jo(t, e, n) {
  const r = t.slice();
  return r[45] = e[n], r;
}
function Lo(t, e, n) {
  const r = t.slice();
  return r[41] = e[n], r;
}
function Zo(t, e, n) {
  const r = t.slice();
  return r[51] = e[n], r[52] = e, r[53] = n, r;
}
function u_(t) {
  let e, n, r;
  return n = new hg({ props: { class: "ml-2 h-4 w-4" } }), {
    c() {
      e = Qe("Columns "), L(n.$$.fragment);
    },
    m(s, i) {
      O(s, e, i), F(n, s, i), r = !0;
    },
    p: Be,
    i(s) {
      r || (_(n.$$.fragment, s), r = !0);
    },
    o(s) {
      b(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && R(e), j(n, s);
    }
  };
}
function f_(t) {
  let e, n;
  return e = new fr({
    props: {
      variant: "outline",
      class: "ml-auto",
      builders: [
        /*builder*/
        t[54]
      ],
      $$slots: { default: [u_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s[1] & /*builder*/
      8388608 && (i.builders = [
        /*builder*/
        r[54]
      ]), s[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function zo(t) {
  let e, n, r;
  function s(o) {
    t[28](
      o,
      /*col*/
      t[51]
    );
  }
  let i = {
    $$slots: { default: [d_] },
    $$scope: { ctx: t }
  };
  return (
    /*hideForId*/
    t[1][
      /*col*/
      t[51].id
    ] !== void 0 && (i.checked = /*hideForId*/
    t[1][
      /*col*/
      t[51].id
    ]), e = new Ng({ props: i }), Rt.push(() => _n(e, "checked", s)), {
      c() {
        L(e.$$.fragment);
      },
      m(o, a) {
        F(e, o, a), r = !0;
      },
      p(o, a) {
        t = o;
        const l = {};
        a[1] & /*$$scope*/
        16777216 && (l.$$scope = { dirty: a, ctx: t }), !n && a[0] & /*hideForId, flatColumns*/
        131074 && (n = !0, l.checked = /*hideForId*/
        t[1][
          /*col*/
          t[51].id
        ], gn(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (_(e.$$.fragment, o), r = !0);
      },
      o(o) {
        b(e.$$.fragment, o), r = !1;
      },
      d(o) {
        j(e, o);
      }
    }
  );
}
function d_(t) {
  let e = (
    /*col*/
    t[51].header + ""
  ), n, r;
  return {
    c() {
      n = Qe(e), r = Ye();
    },
    m(s, i) {
      O(s, n, i), O(s, r, i);
    },
    p: Be,
    d(s) {
      s && (R(n), R(r));
    }
  };
}
function Bo(t) {
  let e = (
    /*heads*/
    t[0].includes(
      /*col*/
      t[51].id
    )
  ), n, r, s = e && zo(t);
  return {
    c() {
      s && s.c(), n = $e();
    },
    m(i, o) {
      s && s.m(i, o), O(i, n, o), r = !0;
    },
    p(i, o) {
      o[0] & /*heads*/
      1 && (e = /*heads*/
      i[0].includes(
        /*col*/
        i[51].id
      )), e ? s ? (s.p(i, o), o[0] & /*heads*/
      1 && _(s, 1)) : (s = zo(i), s.c(), _(s, 1), s.m(n.parentNode, n)) : s && (Le(), b(s, 1, 1, () => {
        s = null;
      }), Ze());
    },
    i(i) {
      r || (_(s), r = !0);
    },
    o(i) {
      b(s), r = !1;
    },
    d(i) {
      i && R(n), s && s.d(i);
    }
  };
}
function h_(t) {
  let e, n, r = nt(
    /*flatColumns*/
    t[17]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Bo(Zo(t, r, o));
  const i = (o) => b(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = $e();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      O(o, e, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*hideForId, flatColumns, heads*/
      131075) {
        r = nt(
          /*flatColumns*/
          o[17]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = Zo(o, r, l);
          s[l] ? (s[l].p(c, a), _(s[l], 1)) : (s[l] = Bo(c), s[l].c(), _(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Le(), l = r.length; l < s.length; l += 1)
          i(l);
        Ze();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          _(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        b(s[a]);
      n = !1;
    },
    d(o) {
      o && R(e), Fn(s, o);
    }
  };
}
function m_(t) {
  let e, n, r, s;
  return e = new bl({
    props: {
      asChild: !0,
      $$slots: {
        default: [
          f_,
          ({ builder: i }) => ({ 54: i }),
          ({ builder: i }) => [0, i ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: t }
    }
  }), r = new pl({
    props: {
      $$slots: { default: [h_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment);
    },
    m(i, o) {
      F(e, i, o), O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      const a = {};
      o[1] & /*$$scope, builder*/
      25165824 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      const l = {};
      o[0] & /*hideForId, heads*/
      3 | o[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: o, ctx: i }), r.$set(l);
    },
    i(i) {
      s || (_(e.$$.fragment, i), _(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(e.$$.fragment, i), b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(e, i), j(r, i);
    }
  };
}
function p_(t) {
  let e, n;
  return e = new vn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s[0] & /*$headerRows*/
      16 && (i.of = /*cell*/
      r[41].render()), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function g_(t) {
  let e, n;
  return e = new fr({
    props: {
      variant: "ghost",
      $$slots: { default: [b_] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    zt(
      /*props*/
      t[50].sort.toggle
    ) && t[50].sort.toggle.apply(this, arguments);
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const i = {};
      s[0] & /*$sortKeys, $headerRows*/
      48 | s[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function __(t) {
  let e, n, r;
  return n = new vn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = Re("div"), L(n.$$.fragment), ht(e, "class", "text-right font-medium");
    },
    m(s, i) {
      O(s, e, i), F(n, e, null), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$headerRows*/
      16 && (o.of = /*cell*/
      s[41].render()), n.$set(o);
    },
    i(s) {
      r || (_(n.$$.fragment, s), r = !0);
    },
    o(s) {
      b(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && R(e), j(n);
    }
  };
}
function b_(t) {
  var i;
  let e, n, r, s;
  return e = new vn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), r = new sg({
    props: {
      class: xe(
        /*$sortKeys*/
        ((i = t[5][0]) == null ? void 0 : i.id) === /*cell*/
        t[41].id && "text-foreground",
        "ml-2 h-4 w-4"
      )
    }
  }), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment);
    },
    m(o, a) {
      F(e, o, a), O(o, n, a), F(r, o, a), s = !0;
    },
    p(o, a) {
      var u;
      const l = {};
      a[0] & /*$headerRows*/
      16 && (l.of = /*cell*/
      o[41].render()), e.$set(l);
      const c = {};
      a[0] & /*$sortKeys, $headerRows*/
      48 && (c.class = xe(
        /*$sortKeys*/
        ((u = o[5][0]) == null ? void 0 : u.id) === /*cell*/
        o[41].id && "text-foreground",
        "ml-2 h-4 w-4"
      )), r.$set(c);
    },
    i(o) {
      s || (_(e.$$.fragment, o), _(r.$$.fragment, o), s = !0);
    },
    o(o) {
      b(e.$$.fragment, o), b(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && R(n), j(e, o), j(r, o);
    }
  };
}
function v_(t) {
  let e, n, r, s;
  const i = [__, g_, p_], o = [];
  function a(l, c) {
    return (
      /*cell*/
      l[41].id === "amount" ? 0 : (
        /*cell*/
        l[41].id === "email" ? 1 : 2
      )
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = $e();
    },
    m(l, c) {
      o[e].m(l, c), O(l, r, c), s = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Le(), b(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (_(n), s = !0);
    },
    o(l) {
      b(n), s = !1;
    },
    d(l) {
      l && R(r), o[e].d(l);
    }
  };
}
function y_(t) {
  let e, n, r;
  const s = [
    /*attrs*/
    t[44],
    {
      class: xe("[&:has([role=checkbox])]:pl-3")
    }
  ];
  let i = {
    $$slots: { default: [v_] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < s.length; o += 1)
    i = E(i, s[o]);
  return e = new ni({ props: i }), {
    c() {
      L(e.$$.fragment), n = Ye();
    },
    m(o, a) {
      F(e, o, a), O(o, n, a), r = !0;
    },
    p(o, a) {
      const l = a[1] & /*attrs*/
      8192 ? ae(s, [
        a[1] & /*attrs*/
        8192 && st(
          /*attrs*/
          o[44]
        ),
        a & /*cn*/
        0 && {
          class: xe("[&:has([role=checkbox])]:pl-3")
        }
      ]) : {};
      a[0] & /*$headerRows, $sortKeys*/
      48 | a[1] & /*$$scope, props*/
      17301504 && (l.$$scope = { dirty: a, ctx: o }), e.$set(l);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      b(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(n), j(e, o);
    }
  };
}
function Vo(t, e) {
  let n, r, s;
  return r = new mr({
    props: {
      attrs: (
        /*cell*/
        e[41].attrs()
      ),
      props: (
        /*cell*/
        e[41].props()
      ),
      $$slots: {
        default: [
          y_,
          ({ attrs: i, props: o }) => ({ 44: i, 50: o }),
          ({ attrs: i, props: o }) => [0, (i ? 8192 : 0) | (o ? 524288 : 0)]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = $e(), L(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      e = i;
      const a = {};
      o[0] & /*$headerRows*/
      16 && (a.attrs = /*cell*/
      e[41].attrs()), o[0] & /*$headerRows*/
      16 && (a.props = /*cell*/
      e[41].props()), o[0] & /*$headerRows, $sortKeys*/
      48 | o[1] & /*$$scope, attrs, props*/
      17309696 && (a.$$scope = { dirty: o, ctx: e }), r.$set(a);
    },
    i(i) {
      s || (_(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(r, i);
    }
  };
}
function k_(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = nt(
    /*headerRow*/
    t[45].cells
  );
  const o = (a) => (
    /*cell*/
    a[41].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Lo(t, i, a), c = o(l);
    n.set(c, e[a] = Vo(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = $e();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      O(a, r, l), s = !0;
    },
    p(a, l) {
      l[0] & /*$headerRows, $sortKeys*/
      48 | l[1] & /*attrs, props*/
      532480 && (i = nt(
        /*headerRow*/
        a[45].cells
      ), Le(), e = ls(e, l, o, 1, a, i, n, r.parentNode, as, Vo, r, Lo), Ze());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          _(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        b(e[l]);
      s = !1;
    },
    d(a) {
      a && R(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function w_(t) {
  let e, n, r;
  return e = new cs({
    props: {
      $$slots: { default: [k_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment), n = Ye();
    },
    m(s, i) {
      F(e, s, i), O(s, n, i), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$headerRows, $sortKeys*/
      48 | i[1] & /*$$scope*/
      16777216 && (o.$$scope = { dirty: i, ctx: s }), e.$set(o);
    },
    i(s) {
      r || (_(e.$$.fragment, s), r = !0);
    },
    o(s) {
      b(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && R(n), j(e, s);
    }
  };
}
function Wo(t) {
  let e, n;
  return e = new mr({
    props: {
      rowAttrs: (
        /*headerRow*/
        t[45].attrs()
      ),
      $$slots: { default: [w_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s[0] & /*$headerRows*/
      16 && (i.rowAttrs = /*headerRow*/
      r[45].attrs()), s[0] & /*$headerRows, $sortKeys*/
      48 | s[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function C_(t) {
  let e, n, r = nt(
    /*$headerRows*/
    t[4]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Wo(jo(t, r, o));
  const i = (o) => b(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = $e();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      O(o, e, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*$headerRows, $sortKeys*/
      48 | a[1] & /*attrs, props*/
      532480) {
        r = nt(
          /*$headerRows*/
          o[4]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = jo(o, r, l);
          s[l] ? (s[l].p(c, a), _(s[l], 1)) : (s[l] = Wo(c), s[l].c(), _(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Le(), l = r.length; l < s.length; l += 1)
          i(l);
        Ze();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          _(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        b(s[a]);
      n = !1;
    },
    d(o) {
      o && R(e), Fn(s, o);
    }
  };
}
function T_(t) {
  let e, n;
  return e = new vn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      L(e.$$.fragment);
    },
    m(r, s) {
      F(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s[0] & /*$pageRows*/
      128 && (i.of = /*cell*/
      r[41].render()), e.$set(i);
    },
    i(r) {
      n || (_(e.$$.fragment, r), n = !0);
    },
    o(r) {
      b(e.$$.fragment, r), n = !1;
    },
    d(r) {
      j(e, r);
    }
  };
}
function E_(t) {
  let e, n, r;
  return n = new vn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = Re("div"), L(n.$$.fragment), ht(e, "class", "capitalize");
    },
    m(s, i) {
      O(s, e, i), F(n, e, null), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$pageRows*/
      128 && (o.of = /*cell*/
      s[41].render()), n.$set(o);
    },
    i(s) {
      r || (_(n.$$.fragment, s), r = !0);
    },
    o(s) {
      b(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && R(e), j(n);
    }
  };
}
function A_(t) {
  let e, n, r;
  return n = new vn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = Re("div"), L(n.$$.fragment), ht(e, "class", "text-right font-medium");
    },
    m(s, i) {
      O(s, e, i), F(n, e, null), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$pageRows*/
      128 && (o.of = /*cell*/
      s[41].render()), n.$set(o);
    },
    i(s) {
      r || (_(n.$$.fragment, s), r = !0);
    },
    o(s) {
      b(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && R(e), j(n);
    }
  };
}
function S_(t) {
  let e, n, r, s;
  const i = [A_, E_, T_], o = [];
  function a(l, c) {
    return (
      /*cell*/
      l[41].id === "amount" ? 0 : (
        /*cell*/
        l[41].id === "status" ? 1 : 2
      )
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = $e();
    },
    m(l, c) {
      o[e].m(l, c), O(l, r, c), s = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Le(), b(o[u], 1, 1, () => {
        o[u] = null;
      }), Ze(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), _(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (_(n), s = !0);
    },
    o(l) {
      b(n), s = !1;
    },
    d(l) {
      l && R(r), o[e].d(l);
    }
  };
}
function R_(t) {
  let e, n, r;
  const s = [
    { class: "[&:has([role=checkbox])]:pl-3" },
    /*attrs*/
    t[44]
  ];
  let i = {
    $$slots: { default: [S_] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < s.length; o += 1)
    i = E(i, s[o]);
  return e = new ti({ props: i }), {
    c() {
      L(e.$$.fragment), n = Ye();
    },
    m(o, a) {
      F(e, o, a), O(o, n, a), r = !0;
    },
    p(o, a) {
      const l = a[1] & /*attrs*/
      8192 ? ae(s, [s[0], st(
        /*attrs*/
        o[44]
      )]) : {};
      a[0] & /*$pageRows*/
      128 | a[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: a, ctx: o }), e.$set(l);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      b(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(n), j(e, o);
    }
  };
}
function Go(t, e) {
  let n, r, s;
  return r = new mr({
    props: {
      attrs: (
        /*cell*/
        e[41].attrs()
      ),
      $$slots: {
        default: [
          R_,
          ({ attrs: i }) => ({ 44: i }),
          ({ attrs: i }) => [0, i ? 8192 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = $e(), L(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      e = i;
      const a = {};
      o[0] & /*$pageRows*/
      128 && (a.attrs = /*cell*/
      e[41].attrs()), o[0] & /*$pageRows*/
      128 | o[1] & /*$$scope, attrs*/
      16785408 && (a.$$scope = { dirty: o, ctx: e }), r.$set(a);
    },
    i(i) {
      s || (_(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(r, i);
    }
  };
}
function O_(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = nt(
    /*row*/
    t[37].cells
  );
  const o = (a) => (
    /*cell*/
    a[41].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Fo(t, i, a), c = o(l);
    n.set(c, e[a] = Go(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = $e();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      O(a, r, l), s = !0;
    },
    p(a, l) {
      l[0] & /*$pageRows*/
      128 | l[1] & /*attrs*/
      8192 && (i = nt(
        /*row*/
        a[37].cells
      ), Le(), e = ls(e, l, o, 1, a, i, n, r.parentNode, as, Go, r, Fo), Ze());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          _(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        b(e[l]);
      s = !1;
    },
    d(a) {
      a && R(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function $_(t) {
  let e, n, r;
  const s = [
    /*rowAttrs*/
    t[40],
    {
      "data-state": (
        /*$selectedDataIds*/
        t[8][
          /*row*/
          t[37].id
        ] && "selected"
      )
    }
  ];
  let i = {
    $$slots: { default: [O_] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < s.length; o += 1)
    i = E(i, s[o]);
  return e = new cs({ props: i }), {
    c() {
      L(e.$$.fragment), n = Ye();
    },
    m(o, a) {
      F(e, o, a), O(o, n, a), r = !0;
    },
    p(o, a) {
      const l = a[0] & /*$selectedDataIds, $pageRows*/
      384 | a[1] & /*rowAttrs*/
      512 ? ae(s, [
        a[1] & /*rowAttrs*/
        512 && st(
          /*rowAttrs*/
          o[40]
        ),
        a[0] & /*$selectedDataIds, $pageRows*/
        384 && {
          "data-state": (
            /*$selectedDataIds*/
            o[8][
              /*row*/
              o[37].id
            ] && "selected"
          )
        }
      ]) : {};
      a[0] & /*$pageRows*/
      128 | a[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: a, ctx: o }), e.$set(l);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      b(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && R(n), j(e, o);
    }
  };
}
function Uo(t, e) {
  let n, r, s;
  return r = new mr({
    props: {
      rowAttrs: (
        /*row*/
        e[37].attrs()
      ),
      $$slots: {
        default: [
          $_,
          ({ rowAttrs: i }) => ({ 40: i }),
          ({ rowAttrs: i }) => [0, i ? 512 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = $e(), L(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      O(i, n, o), F(r, i, o), s = !0;
    },
    p(i, o) {
      e = i;
      const a = {};
      o[0] & /*$pageRows*/
      128 && (a.rowAttrs = /*row*/
      e[37].attrs()), o[0] & /*$selectedDataIds, $pageRows*/
      384 | o[1] & /*$$scope, rowAttrs*/
      16777728 && (a.$$scope = { dirty: o, ctx: e }), r.$set(a);
    },
    i(i) {
      s || (_(r.$$.fragment, i), s = !0);
    },
    o(i) {
      b(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && R(n), j(r, i);
    }
  };
}
function N_(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = nt(
    /*$pageRows*/
    t[7]
  );
  const o = (a) => (
    /*row*/
    a[37].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Do(t, i, a), c = o(l);
    n.set(c, e[a] = Uo(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = $e();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      O(a, r, l), s = !0;
    },
    p(a, l) {
      l[0] & /*$pageRows, $selectedDataIds*/
      384 | l[1] & /*rowAttrs, attrs*/
      8704 && (i = nt(
        /*$pageRows*/
        a[7]
      ), Le(), e = ls(e, l, o, 1, a, i, n, r.parentNode, as, Uo, r, Do), Ze());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          _(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        b(e[l]);
      s = !1;
    },
    d(a) {
      a && R(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function I_(t) {
  let e, n, r, s;
  e = new Ta({
    props: {
      $$slots: { default: [C_] },
      $$scope: { ctx: t }
    }
  });
  const i = [
    /*$tableBodyAttrs*/
    t[6]
  ];
  let o = {
    $$slots: { default: [N_] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    o = E(o, i[a]);
  return r = new Ca({ props: o }), {
    c() {
      L(e.$$.fragment), n = Ye(), L(r.$$.fragment);
    },
    m(a, l) {
      F(e, a, l), O(a, n, l), F(r, a, l), s = !0;
    },
    p(a, l) {
      const c = {};
      l[0] & /*$headerRows, $sortKeys*/
      48 | l[1] & /*$$scope*/
      16777216 && (c.$$scope = { dirty: l, ctx: a }), e.$set(c);
      const u = l[0] & /*$tableBodyAttrs*/
      64 ? ae(i, [st(
        /*$tableBodyAttrs*/
        a[6]
      )]) : {};
      l[0] & /*$pageRows, $selectedDataIds*/
      384 | l[1] & /*$$scope*/
      16777216 && (u.$$scope = { dirty: l, ctx: a }), r.$set(u);
    },
    i(a) {
      s || (_(e.$$.fragment, a), _(r.$$.fragment, a), s = !0);
    },
    o(a) {
      b(e.$$.fragment, a), b(r.$$.fragment, a), s = !1;
    },
    d(a) {
      a && R(n), j(e, a), j(r, a);
    }
  };
}
function x_(t) {
  let e;
  return {
    c() {
      e = Qe("Previous");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function P_(t) {
  let e;
  return {
    c() {
      e = Qe("Next");
    },
    m(n, r) {
      O(n, e, r);
    },
    d(n) {
      n && R(e);
    }
  };
}
function M_(t) {
  let e, n, r, s, i, o, a, l, c, u, f, h, d = Object.keys(
    /*$selectedDataIds*/
    t[8]
  ).length + "", m, g, p = " ", y, w, N = (
    /*$rows*/
    t[9].length + ""
  ), A, K, D, V, ke, J, H;
  function k(T) {
    t[27](T);
  }
  let v = {
    class: "max-w-sm",
    placeholder: "Filter value...",
    type: "text"
  };
  /*$filterValue*/
  t[2] !== void 0 && (v.value = /*$filterValue*/
  t[2]), r = new e_({ props: v }), Rt.push(() => _n(r, "value", k)), o = new _l({
    props: {
      $$slots: { default: [m_] },
      $$scope: { ctx: t }
    }
  });
  const C = [
    /*$tableAttrs*/
    t[3]
  ];
  let I = {
    $$slots: { default: [I_] },
    $$scope: { ctx: t }
  };
  for (let T = 0; T < C.length; T += 1)
    I = E(I, C[T]);
  return c = new wa({ props: I }), V = new fr({
    props: {
      variant: "outline",
      size: "sm",
      disabled: !/*$hasPreviousPage*/
      t[11],
      $$slots: { default: [x_] },
      $$scope: { ctx: t }
    }
  }), V.$on(
    "click",
    /*click_handler*/
    t[29]
  ), J = new fr({
    props: {
      variant: "outline",
      size: "sm",
      disabled: !/*$hasNextPage*/
      t[12],
      $$slots: { default: [P_] },
      $$scope: { ctx: t }
    }
  }), J.$on(
    "click",
    /*click_handler_1*/
    t[30]
  ), {
    c() {
      e = Re("div"), n = Re("div"), L(r.$$.fragment), i = Ye(), L(o.$$.fragment), a = Ye(), l = Re("div"), L(c.$$.fragment), u = Ye(), f = Re("div"), h = Re("div"), m = Qe(d), g = Qe(" of"), y = Qe(p), w = Ye(), A = Qe(N), K = Qe(" row(s) selected."), D = Ye(), L(V.$$.fragment), ke = Ye(), L(J.$$.fragment), ht(n, "class", "flex items-center py-4"), ht(l, "class", "rounded-md border"), ht(h, "class", "flex-1 text-sm text-muted-foreground"), ht(f, "class", "flex items-center justify-end space-x-2 py-4"), ht(e, "class", "w-full");
    },
    m(T, x) {
      O(T, e, x), it(e, n), F(r, n, null), it(n, i), F(o, n, null), it(e, a), it(e, l), F(c, l, null), it(e, u), it(e, f), it(f, h), it(h, m), it(h, g), it(h, y), it(h, w), it(h, A), it(h, K), it(f, D), F(V, f, null), it(f, ke), F(J, f, null), H = !0;
    },
    p(T, x) {
      const W = {};
      !s && x[0] & /*$filterValue*/
      4 && (s = !0, W.value = /*$filterValue*/
      T[2], gn(() => s = !1)), r.$set(W);
      const ee = {};
      x[0] & /*hideForId, heads*/
      3 | x[1] & /*$$scope*/
      16777216 && (ee.$$scope = { dirty: x, ctx: T }), o.$set(ee);
      const ne = x[0] & /*$tableAttrs*/
      8 ? ae(C, [st(
        /*$tableAttrs*/
        T[3]
      )]) : {};
      x[0] & /*$tableBodyAttrs, $pageRows, $selectedDataIds, $headerRows, $sortKeys*/
      496 | x[1] & /*$$scope*/
      16777216 && (ne.$$scope = { dirty: x, ctx: T }), c.$set(ne), (!H || x[0] & /*$selectedDataIds*/
      256) && d !== (d = Object.keys(
        /*$selectedDataIds*/
        T[8]
      ).length + "") && dn(m, d), (!H || x[0] & /*$rows*/
      512) && N !== (N = /*$rows*/
      T[9].length + "") && dn(A, N);
      const Fe = {};
      x[0] & /*$hasPreviousPage*/
      2048 && (Fe.disabled = !/*$hasPreviousPage*/
      T[11]), x[1] & /*$$scope*/
      16777216 && (Fe.$$scope = { dirty: x, ctx: T }), V.$set(Fe);
      const Me = {};
      x[0] & /*$hasNextPage*/
      4096 && (Me.disabled = !/*$hasNextPage*/
      T[12]), x[1] & /*$$scope*/
      16777216 && (Me.$$scope = { dirty: x, ctx: T }), J.$set(Me);
    },
    i(T) {
      H || (_(r.$$.fragment, T), _(o.$$.fragment, T), _(c.$$.fragment, T), _(V.$$.fragment, T), _(J.$$.fragment, T), H = !0);
    },
    o(T) {
      b(r.$$.fragment, T), b(o.$$.fragment, T), b(c.$$.fragment, T), b(V.$$.fragment, T), b(J.$$.fragment, T), H = !1;
    },
    d(T) {
      T && R(e), j(r), j(o), j(c), j(V), j(J);
    }
  };
}
function D_(t, e, n) {
  let r, s, i, o, a, l, c, u, f, h, d, m, { heads: g = [] } = e, { data: p = [] } = e;
  const y = Nf(Nt(p), {
    sort: Bf({ disableMultiSort: !0 }),
    page: Df(),
    filter: Vf({
      fn: ({ filterValue: $, value: se }) => se.includes($)
    }),
    select: jf(),
    hide: xf()
  });
  let w = [
    y.column({
      header: ($, { pluginStates: se }) => {
        const { allPageRowsSelected: ze } = se.select;
        return Cs(Mo, { checked: ze });
      },
      accessor: "#",
      cell: ({ row: $ }, { pluginStates: se }) => {
        const { getRowState: ze } = se.select, { isSelected: ot } = ze($);
        return Cs(Mo, { checked: ot });
      },
      plugins: {
        sort: { disable: !0 },
        filter: { exclude: !0 }
      }
    })
  ];
  for (let $ of g)
    w.push(y.column({
      header: $,
      accessor: $,
      plugins: {
        sort: { disable: !0 },
        filter: { exclude: !0 }
      }
    }));
  w.push(y.column({
    header: "",
    accessor: ({ id: $ }) => $,
    cell: ($) => Cs(Xg, { id: $.value }),
    plugins: { sort: { disable: !0 } }
  }));
  const N = y.createColumns(w), { headerRows: A, pageRows: K, tableAttrs: D, tableBodyAttrs: V, flatColumns: ke, pluginStates: J, rows: H } = y.createViewModel(N);
  Ge(t, A, ($) => n(4, o = $)), Ge(t, K, ($) => n(7, c = $)), Ge(t, D, ($) => n(3, i = $)), Ge(t, V, ($) => n(6, l = $)), Ge(t, H, ($) => n(9, f = $));
  const { sortKeys: k } = J.sort;
  Ge(t, k, ($) => n(5, a = $));
  const { hiddenColumnIds: v } = J.hide;
  Ge(t, v, ($) => n(31, r = $));
  const C = ke.map(($) => $.id);
  let I = Object.fromEntries(C.map(($) => [$, !0]));
  const { hasNextPage: T, hasPreviousPage: x, pageIndex: W } = J.page;
  Ge(t, T, ($) => n(12, m = $)), Ge(t, x, ($) => n(11, d = $)), Ge(t, W, ($) => n(10, h = $));
  const { filterValue: ee } = J.filter;
  Ge(t, ee, ($) => n(2, s = $));
  const { selectedDataIds: ne } = J.select;
  Ge(t, ne, ($) => n(8, u = $));
  function Fe($) {
    s = $, ee.set(s);
  }
  function Me($, se) {
    t.$$.not_equal(I[se.id], $) && (I[se.id] = $, n(1, I));
  }
  const Ve = () => ks(W, h = h - 1, h), M = () => ks(W, h = h + 1, h);
  return t.$$set = ($) => {
    "heads" in $ && n(0, g = $.heads), "data" in $ && n(26, p = $.data);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*hideForId*/
    2 && ks(v, r = Object.entries(I).filter(([, $]) => !$).map(([$]) => $), r);
  }, [
    g,
    I,
    s,
    i,
    o,
    a,
    l,
    c,
    u,
    f,
    h,
    d,
    m,
    A,
    K,
    D,
    V,
    ke,
    H,
    k,
    v,
    T,
    x,
    W,
    ee,
    ne,
    p,
    Fe,
    Me,
    Ve,
    M
  ];
}
class F_ extends ye {
  constructor(e) {
    super(), ve(this, e, D_, M_, oe, { heads: 0, data: 26 }, null, [-1, -1]);
  }
}
const V_ = (t, e, n) => (t || (t = window.document.createElement("div")), new Bu({
  target: t,
  props: {
    heads: e,
    data: n
  }
})), W_ = (t, e, n) => (t || (t = window.document.createElement("div")), new F_({
  target: t,
  props: {
    heads: e,
    data: n
  }
}));
export {
  W_ as RenderEditTable,
  V_ as RenderTable,
  L_ as z
};
