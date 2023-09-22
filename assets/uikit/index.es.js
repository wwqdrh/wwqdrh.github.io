var nf = Object.defineProperty;
var rf = (t, e, n) => e in t ? nf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var he = (t, e, n) => (rf(t, typeof e != "symbol" ? e + "" : e, n), n);
var Xe;
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
})(Xe || (Xe = {}));
var li;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
    // second overwrites first
  });
})(li || (li = {}));
const ie = Xe.arrayToEnum([
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
]), an = (t) => {
  switch (typeof t) {
    case "undefined":
      return ie.undefined;
    case "string":
      return ie.string;
    case "number":
      return isNaN(t) ? ie.nan : ie.number;
    case "boolean":
      return ie.boolean;
    case "function":
      return ie.function;
    case "bigint":
      return ie.bigint;
    case "symbol":
      return ie.symbol;
    case "object":
      return Array.isArray(t) ? ie.array : t === null ? ie.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ie.promise : typeof Map < "u" && t instanceof Map ? ie.map : typeof Set < "u" && t instanceof Set ? ie.set : typeof Date < "u" && t instanceof Date ? ie.date : ie.object;
    default:
      return ie.unknown;
  }
}, U = Xe.arrayToEnum([
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
]), sf = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class jt extends Error {
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
    return JSON.stringify(this.issues, Xe.jsonStringifyReplacer, 2);
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
jt.create = (t) => new jt(t);
const yr = (t, e) => {
  let n;
  switch (t.code) {
    case U.invalid_type:
      t.received === ie.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case U.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, Xe.jsonStringifyReplacer)}`;
      break;
    case U.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Xe.joinValues(t.keys, ", ")}`;
      break;
    case U.invalid_union:
      n = "Invalid input";
      break;
    case U.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Xe.joinValues(t.options)}`;
      break;
    case U.invalid_enum_value:
      n = `Invalid enum value. Expected ${Xe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case U.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case U.invalid_return_type:
      n = "Invalid function return type";
      break;
    case U.invalid_date:
      n = "Invalid date";
      break;
    case U.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : Xe.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case U.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case U.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case U.custom:
      n = "Invalid input";
      break;
    case U.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case U.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case U.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, Xe.assertNever(t);
  }
  return { message: n };
};
let Qa = yr;
function of(t) {
  Qa = t;
}
function os() {
  return Qa;
}
const ls = (t) => {
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
}, lf = [];
function ue(t, e) {
  const n = ls({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      os(),
      yr
      // then global default map
    ].filter((r) => !!r)
  });
  t.common.issues.push(n);
}
class gt {
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
        return je;
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
    return gt.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return je;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: e.value, value: r };
  }
}
const je = Object.freeze({
  status: "aborted"
}), ec = (t) => ({ status: "dirty", value: t }), kt = (t) => ({ status: "valid", value: t }), ai = (t) => t.status === "aborted", ci = (t) => t.status === "dirty", kr = (t) => t.status === "valid", as = (t) => typeof Promise < "u" && t instanceof Promise;
var ve;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ve || (ve = {}));
class Gt {
  constructor(e, n, r, s) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const yo = (t, e) => {
  if (kr(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new jt(t.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Fe(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: n, required_error: r, description: s } = t;
  if (e && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: r ?? a.defaultError } : { message: n ?? a.defaultError }, description: s };
}
class Be {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return an(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: an(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new gt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: an(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (as(n))
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
      parsedType: an(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return yo(s, i);
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
      parsedType: an(e)
    }, s = this._parse({ data: e, path: r.path, parent: r }), i = await (as(s) ? s : Promise.resolve(s));
    return yo(r, i);
  }
  refine(e, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, i) => {
      const o = e(s), a = () => i.addIssue({
        code: U.custom,
        ...r(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(e) {
    return new xt({
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Jt.create(this, this._def);
  }
  nullable() {
    return An.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Dt.create(this, this._def);
  }
  promise() {
    return qn.create(this, this._def);
  }
  or(e) {
    return Sr.create([this, e], this._def);
  }
  and(e) {
    return Er.create(this, e, this._def);
  }
  transform(e) {
    return new xt({
      ...Fe(this._def),
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Nr({
      ...Fe(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Ce.ZodDefault
    });
  }
  brand() {
    return new nc({
      typeName: Ce.ZodBranded,
      type: this,
      ...Fe(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new ds({
      ...Fe(this._def),
      innerType: this,
      catchValue: n,
      typeName: Ce.ZodCatch
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
    return Lr.create(this, e);
  }
  readonly() {
    return ms.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const af = /^c[^\s-]{8,}$/i, cf = /^[a-z][a-z0-9]*$/, uf = /[0-9A-HJKMNP-TV-Z]{26}/, ff = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, df = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, hf = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, mf = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, pf = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, gf = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function _f(t, e) {
  return !!((e === "v4" || !e) && mf.test(t) || (e === "v6" || !e) && pf.test(t));
}
class Mt extends Be {
  constructor() {
    super(...arguments), this._regex = (e, n, r) => this.refinement((s) => e.test(s), {
      validation: n,
      code: U.invalid_string,
      ...ve.errToObj(r)
    }), this.nonempty = (e) => this.min(1, ve.errToObj(e)), this.trim = () => new Mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Mt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ie.string) {
      const i = this._getOrReturnCtx(e);
      return ue(
        i,
        {
          code: U.invalid_type,
          expected: ie.string,
          received: i.parsedType
        }
        //
      ), je;
    }
    const r = new gt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), ue(s, {
          code: U.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), ue(s, {
          code: U.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value, a = e.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(e, s), o ? ue(s, {
          code: U.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && ue(s, {
          code: U.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        df.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "email",
          code: U.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        hf.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "emoji",
          code: U.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        ff.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "uuid",
          code: U.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        af.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "cuid",
          code: U.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        cf.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "cuid2",
          code: U.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        uf.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "ulid",
          code: U.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), ue(s, {
            validation: "url",
            code: U.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "regex",
          code: U.invalid_string,
          message: i.message
        }), r.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), ue(s, {
          code: U.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), r.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), ue(s, {
          code: U.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), ue(s, {
          code: U.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), r.dirty()) : i.kind === "datetime" ? gf(i).test(e.data) || (s = this._getOrReturnCtx(e, s), ue(s, {
          code: U.invalid_string,
          validation: "datetime",
          message: i.message
        }), r.dirty()) : i.kind === "ip" ? _f(e.data, i.version) || (s = this._getOrReturnCtx(e, s), ue(s, {
          validation: "ip",
          code: U.invalid_string,
          message: i.message
        }), r.dirty()) : Xe.assertNever(i);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new Mt({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ve.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ve.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ve.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ve.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ve.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ve.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ve.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ve.errToObj(e) });
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
      ...ve.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ve.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...ve.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ve.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ve.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ve.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ve.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ve.errToObj(n)
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
Mt.create = (t) => {
  var e;
  return new Mt({
    checks: [],
    typeName: Ce.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Fe(t)
  });
};
function bf(t, e) {
  const n = (t.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, s = n > r ? n : r, i = parseInt(t.toFixed(s).replace(".", "")), o = parseInt(e.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class un extends Be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ie.number) {
      const i = this._getOrReturnCtx(e);
      return ue(i, {
        code: U.invalid_type,
        expected: ie.number,
        received: i.parsedType
      }), je;
    }
    let r;
    const s = new gt();
    for (const i of this._def.checks)
      i.kind === "int" ? Xe.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? bf(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.not_finite,
        message: i.message
      }), s.dirty()) : Xe.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, ve.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, ve.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, ve.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, ve.toString(n));
  }
  setLimit(e, n, r, s) {
    return new un({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: ve.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new un({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: ve.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ve.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ve.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ve.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ve.toString(e)
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Xe.isInteger(e.value));
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
un.create = (t) => new un({
  checks: [],
  typeName: Ce.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Fe(t)
});
class fn extends Be {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ie.bigint) {
      const i = this._getOrReturnCtx(e);
      return ue(i, {
        code: U.invalid_type,
        expected: ie.bigint,
        received: i.parsedType
      }), je;
    }
    let r;
    const s = new gt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), ue(r, {
        code: U.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Xe.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, ve.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, ve.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, ve.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, ve.toString(n));
  }
  setLimit(e, n, r, s) {
    return new fn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: ve.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ve.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ve.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ve.toString(n)
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
fn.create = (t) => {
  var e;
  return new fn({
    checks: [],
    typeName: Ce.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Fe(t)
  });
};
class wr extends Be {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ie.boolean) {
      const r = this._getOrReturnCtx(e);
      return ue(r, {
        code: U.invalid_type,
        expected: ie.boolean,
        received: r.parsedType
      }), je;
    }
    return kt(e.data);
  }
}
wr.create = (t) => new wr({
  typeName: Ce.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Fe(t)
});
class Sn extends Be {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ie.date) {
      const i = this._getOrReturnCtx(e);
      return ue(i, {
        code: U.invalid_type,
        expected: ie.date,
        received: i.parsedType
      }), je;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return ue(i, {
        code: U.invalid_date
      }), je;
    }
    const r = new gt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), ue(s, {
        code: U.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), ue(s, {
        code: U.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : Xe.assertNever(i);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Sn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ve.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ve.toString(n)
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
Sn.create = (t) => new Sn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: Ce.ZodDate,
  ...Fe(t)
});
class cs extends Be {
  _parse(e) {
    if (this._getType(e) !== ie.symbol) {
      const r = this._getOrReturnCtx(e);
      return ue(r, {
        code: U.invalid_type,
        expected: ie.symbol,
        received: r.parsedType
      }), je;
    }
    return kt(e.data);
  }
}
cs.create = (t) => new cs({
  typeName: Ce.ZodSymbol,
  ...Fe(t)
});
class Cr extends Be {
  _parse(e) {
    if (this._getType(e) !== ie.undefined) {
      const r = this._getOrReturnCtx(e);
      return ue(r, {
        code: U.invalid_type,
        expected: ie.undefined,
        received: r.parsedType
      }), je;
    }
    return kt(e.data);
  }
}
Cr.create = (t) => new Cr({
  typeName: Ce.ZodUndefined,
  ...Fe(t)
});
class Tr extends Be {
  _parse(e) {
    if (this._getType(e) !== ie.null) {
      const r = this._getOrReturnCtx(e);
      return ue(r, {
        code: U.invalid_type,
        expected: ie.null,
        received: r.parsedType
      }), je;
    }
    return kt(e.data);
  }
}
Tr.create = (t) => new Tr({
  typeName: Ce.ZodNull,
  ...Fe(t)
});
class Kn extends Be {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return kt(e.data);
  }
}
Kn.create = (t) => new Kn({
  typeName: Ce.ZodAny,
  ...Fe(t)
});
class Cn extends Be {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return kt(e.data);
  }
}
Cn.create = (t) => new Cn({
  typeName: Ce.ZodUnknown,
  ...Fe(t)
});
class Qt extends Be {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return ue(n, {
      code: U.invalid_type,
      expected: ie.never,
      received: n.parsedType
    }), je;
  }
}
Qt.create = (t) => new Qt({
  typeName: Ce.ZodNever,
  ...Fe(t)
});
class us extends Be {
  _parse(e) {
    if (this._getType(e) !== ie.undefined) {
      const r = this._getOrReturnCtx(e);
      return ue(r, {
        code: U.invalid_type,
        expected: ie.void,
        received: r.parsedType
      }), je;
    }
    return kt(e.data);
  }
}
us.create = (t) => new us({
  typeName: Ce.ZodVoid,
  ...Fe(t)
});
class Dt extends Be {
  _parse(e) {
    const { ctx: n, status: r } = this._processInputParams(e), s = this._def;
    if (n.parsedType !== ie.array)
      return ue(n, {
        code: U.invalid_type,
        expected: ie.array,
        received: n.parsedType
      }), je;
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value, a = n.data.length < s.exactLength.value;
      (o || a) && (ue(n, {
        code: o ? U.too_big : U.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (ue(n, {
      code: U.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (ue(n, {
      code: U.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, a) => s.type._parseAsync(new Gt(n, o, n.path, a)))).then((o) => gt.mergeArray(r, o));
    const i = [...n.data].map((o, a) => s.type._parseSync(new Gt(n, o, n.path, a)));
    return gt.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new Dt({
      ...this._def,
      minLength: { value: e, message: ve.toString(n) }
    });
  }
  max(e, n) {
    return new Dt({
      ...this._def,
      maxLength: { value: e, message: ve.toString(n) }
    });
  }
  length(e, n) {
    return new Dt({
      ...this._def,
      exactLength: { value: e, message: ve.toString(n) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Dt.create = (t, e) => new Dt({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Ce.ZodArray,
  ...Fe(e)
});
function Bn(t) {
  if (t instanceof at) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = Jt.create(Bn(r));
    }
    return new at({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Dt ? new Dt({
      ...t._def,
      type: Bn(t.element)
    }) : t instanceof Jt ? Jt.create(Bn(t.unwrap())) : t instanceof An ? An.create(Bn(t.unwrap())) : t instanceof Ut ? Ut.create(t.items.map((e) => Bn(e))) : t;
}
class at extends Be {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), n = Xe.objectKeys(e);
    return this._cached = { shape: e, keys: n };
  }
  _parse(e) {
    if (this._getType(e) !== ie.object) {
      const c = this._getOrReturnCtx(e);
      return ue(c, {
        code: U.invalid_type,
        expected: ie.object,
        received: c.parsedType
      }), je;
    }
    const { status: r, ctx: s } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Qt && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const u = i[c], f = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new Gt(s, f, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Qt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (c === "strict")
        a.length > 0 && (ue(s, {
          code: U.unrecognized_keys,
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
            new Gt(s, f, s.path, u)
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
    }).then((c) => gt.mergeObjectSync(r, c)) : gt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ve.errToObj, new at({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var s, i, o, a;
          const l = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = ve.errToObj(e).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new at({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new at({
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
    return new at({
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
    return new at({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: Ce.ZodObject
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
    return new at({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    return Xe.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new at({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    return Xe.objectKeys(this.shape).forEach((r) => {
      e[r] || (n[r] = this.shape[r]);
    }), new at({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Bn(this);
  }
  partial(e) {
    const n = {};
    return Xe.objectKeys(this.shape).forEach((r) => {
      const s = this.shape[r];
      e && !e[r] ? n[r] = s : n[r] = s.optional();
    }), new at({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    return Xe.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof Jt; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new at({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return tc(Xe.objectKeys(this.shape));
  }
}
at.create = (t, e) => new at({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Qt.create(),
  typeName: Ce.ZodObject,
  ...Fe(e)
});
at.strictCreate = (t, e) => new at({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Qt.create(),
  typeName: Ce.ZodObject,
  ...Fe(e)
});
at.lazycreate = (t, e) => new at({
  shape: t,
  unknownKeys: "strip",
  catchall: Qt.create(),
  typeName: Ce.ZodObject,
  ...Fe(e)
});
class Sr extends Be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new jt(a.ctx.common.issues));
      return ue(n, {
        code: U.invalid_union,
        unionErrors: o
      }), je;
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
      const a = o.map((l) => new jt(l));
      return ue(n, {
        code: U.invalid_union,
        unionErrors: a
      }), je;
    }
  }
  get options() {
    return this._def.options;
  }
}
Sr.create = (t, e) => new Sr({
  options: t,
  typeName: Ce.ZodUnion,
  ...Fe(e)
});
const Qr = (t) => t instanceof Or ? Qr(t.schema) : t instanceof xt ? Qr(t.innerType()) : t instanceof Ir ? [t.value] : t instanceof dn ? t.options : t instanceof Rr ? Object.keys(t.enum) : t instanceof Nr ? Qr(t._def.innerType) : t instanceof Cr ? [void 0] : t instanceof Tr ? [null] : null;
class Ns extends Be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ie.object)
      return ue(n, {
        code: U.invalid_type,
        expected: ie.object,
        received: n.parsedType
      }), je;
    const r = this.discriminator, s = n.data[r], i = this.optionsMap.get(s);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ue(n, {
      code: U.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), je);
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
      const o = Qr(i.shape[e]);
      if (!o)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new Ns({
      typeName: Ce.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: s,
      ...Fe(r)
    });
  }
}
function ui(t, e) {
  const n = an(t), r = an(e);
  if (t === e)
    return { valid: !0, data: t };
  if (n === ie.object && r === ie.object) {
    const s = Xe.objectKeys(e), i = Xe.objectKeys(t).filter((a) => s.indexOf(a) !== -1), o = { ...t, ...e };
    for (const a of i) {
      const l = ui(t[a], e[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === ie.array && r === ie.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i], a = e[i], l = ui(o, a);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return n === ie.date && r === ie.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Er extends Be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), s = (i, o) => {
      if (ai(i) || ai(o))
        return je;
      const a = ui(i.value, o.value);
      return a.valid ? ((ci(i) || ci(o)) && n.dirty(), { status: n.value, value: a.data }) : (ue(r, {
        code: U.invalid_intersection_types
      }), je);
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
Er.create = (t, e, n) => new Er({
  left: t,
  right: e,
  typeName: Ce.ZodIntersection,
  ...Fe(n)
});
class Ut extends Be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.array)
      return ue(r, {
        code: U.invalid_type,
        expected: ie.array,
        received: r.parsedType
      }), je;
    if (r.data.length < this._def.items.length)
      return ue(r, {
        code: U.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), je;
    !this._def.rest && r.data.length > this._def.items.length && (ue(r, {
      code: U.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Gt(r, o, r.path, a)) : null;
    }).filter((o) => !!o);
    return r.common.async ? Promise.all(i).then((o) => gt.mergeArray(n, o)) : gt.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Ut({
      ...this._def,
      rest: e
    });
  }
}
Ut.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ut({
    items: t,
    typeName: Ce.ZodTuple,
    rest: null,
    ...Fe(e)
  });
};
class Ar extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.object)
      return ue(r, {
        code: U.invalid_type,
        expected: ie.object,
        received: r.parsedType
      }), je;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new Gt(r, a, r.path, a)),
        value: o._parse(new Gt(r, r.data[a], r.path, a))
      });
    return r.common.async ? gt.mergeObjectAsync(n, s) : gt.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, n, r) {
    return n instanceof Be ? new Ar({
      keyType: e,
      valueType: n,
      typeName: Ce.ZodRecord,
      ...Fe(r)
    }) : new Ar({
      keyType: Mt.create(),
      valueType: e,
      typeName: Ce.ZodRecord,
      ...Fe(n)
    });
  }
}
class fs extends Be {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.map)
      return ue(r, {
        code: U.invalid_type,
        expected: ie.map,
        received: r.parsedType
      }), je;
    const s = this._def.keyType, i = this._def.valueType, o = [...r.data.entries()].map(([a, l], c) => ({
      key: s._parse(new Gt(r, a, r.path, [c, "key"])),
      value: i._parse(new Gt(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return je;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return je;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), a.set(c.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
fs.create = (t, e, n) => new fs({
  valueType: e,
  keyType: t,
  typeName: Ce.ZodMap,
  ...Fe(n)
});
class En extends Be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ie.set)
      return ue(r, {
        code: U.invalid_type,
        expected: ie.set,
        received: r.parsedType
      }), je;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (ue(r, {
      code: U.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (ue(r, {
      code: U.too_big,
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
          return je;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const a = [...r.data.values()].map((l, c) => i._parse(new Gt(r, l, r.path, c)));
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, n) {
    return new En({
      ...this._def,
      minSize: { value: e, message: ve.toString(n) }
    });
  }
  max(e, n) {
    return new En({
      ...this._def,
      maxSize: { value: e, message: ve.toString(n) }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
En.create = (t, e) => new En({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: Ce.ZodSet,
  ...Fe(e)
});
class Vn extends Be {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ie.function)
      return ue(n, {
        code: U.invalid_type,
        expected: ie.function,
        received: n.parsedType
      }), je;
    function r(a, l) {
      return ls({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          os(),
          yr
        ].filter((c) => !!c),
        issueData: {
          code: U.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(a, l) {
      return ls({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          os(),
          yr
        ].filter((c) => !!c),
        issueData: {
          code: U.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof qn) {
      const a = this;
      return kt(async function(...l) {
        const c = new jt([]), u = await a._def.args.parseAsync(l, i).catch((h) => {
          throw c.addIssue(r(l, h)), c;
        }), f = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(f, i).catch((h) => {
          throw c.addIssue(s(f, h)), c;
        });
      });
    } else {
      const a = this;
      return kt(function(...l) {
        const c = a._def.args.safeParse(l, i);
        if (!c.success)
          throw new jt([r(l, c.error)]);
        const u = Reflect.apply(o, this, c.data), f = a._def.returns.safeParse(u, i);
        if (!f.success)
          throw new jt([s(u, f.error)]);
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
    return new Vn({
      ...this._def,
      args: Ut.create(e).rest(Cn.create())
    });
  }
  returns(e) {
    return new Vn({
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
    return new Vn({
      args: e || Ut.create([]).rest(Cn.create()),
      returns: n || Cn.create(),
      typeName: Ce.ZodFunction,
      ...Fe(r)
    });
  }
}
class Or extends Be {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Or.create = (t, e) => new Or({
  getter: t,
  typeName: Ce.ZodLazy,
  ...Fe(e)
});
class Ir extends Be {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return ue(n, {
        received: n.data,
        code: U.invalid_literal,
        expected: this._def.value
      }), je;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ir.create = (t, e) => new Ir({
  value: t,
  typeName: Ce.ZodLiteral,
  ...Fe(e)
});
function tc(t, e) {
  return new dn({
    values: t,
    typeName: Ce.ZodEnum,
    ...Fe(e)
  });
}
class dn extends Be {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return ue(n, {
        expected: Xe.joinValues(r),
        received: n.parsedType,
        code: U.invalid_type
      }), je;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return ue(n, {
        received: n.data,
        code: U.invalid_enum_value,
        options: r
      }), je;
    }
    return kt(e.data);
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
    return dn.create(e);
  }
  exclude(e) {
    return dn.create(this.options.filter((n) => !e.includes(n)));
  }
}
dn.create = tc;
class Rr extends Be {
  _parse(e) {
    const n = Xe.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== ie.string && r.parsedType !== ie.number) {
      const s = Xe.objectValues(n);
      return ue(r, {
        expected: Xe.joinValues(s),
        received: r.parsedType,
        code: U.invalid_type
      }), je;
    }
    if (n.indexOf(e.data) === -1) {
      const s = Xe.objectValues(n);
      return ue(r, {
        received: r.data,
        code: U.invalid_enum_value,
        options: s
      }), je;
    }
    return kt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Rr.create = (t, e) => new Rr({
  values: t,
  typeName: Ce.ZodNativeEnum,
  ...Fe(e)
});
class qn extends Be {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ie.promise && n.common.async === !1)
      return ue(n, {
        code: U.invalid_type,
        expected: ie.promise,
        received: n.parsedType
      }), je;
    const r = n.parsedType === ie.promise ? n.data : Promise.resolve(n.data);
    return kt(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
qn.create = (t, e) => new qn({
  type: t,
  typeName: Ce.ZodPromise,
  ...Fe(e)
});
class xt extends Be {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ce.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), s = this._def.effect || null, i = {
      addIssue: (o) => {
        ue(r, o), o.fatal ? n.abort() : n.dirty();
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
        return a.status === "aborted" ? je : (a.status === "dirty" && n.dirty(), o(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? je : (a.status === "dirty" && n.dirty(), o(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!kr(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => kr(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: n.value, value: a })) : o);
    Xe.assertNever(s);
  }
}
xt.create = (t, e, n) => new xt({
  schema: t,
  typeName: Ce.ZodEffects,
  effect: e,
  ...Fe(n)
});
xt.createWithPreprocess = (t, e, n) => new xt({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: Ce.ZodEffects,
  ...Fe(n)
});
class Jt extends Be {
  _parse(e) {
    return this._getType(e) === ie.undefined ? kt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Jt.create = (t, e) => new Jt({
  innerType: t,
  typeName: Ce.ZodOptional,
  ...Fe(e)
});
class An extends Be {
  _parse(e) {
    return this._getType(e) === ie.null ? kt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
An.create = (t, e) => new An({
  innerType: t,
  typeName: Ce.ZodNullable,
  ...Fe(e)
});
class Nr extends Be {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === ie.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Nr.create = (t, e) => new Nr({
  innerType: t,
  typeName: Ce.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Fe(e)
});
class ds extends Be {
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
    return as(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new jt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new jt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ds.create = (t, e) => new ds({
  innerType: t,
  typeName: Ce.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Fe(e)
});
class hs extends Be {
  _parse(e) {
    if (this._getType(e) !== ie.nan) {
      const r = this._getOrReturnCtx(e);
      return ue(r, {
        code: U.invalid_type,
        expected: ie.nan,
        received: r.parsedType
      }), je;
    }
    return { status: "valid", value: e.data };
  }
}
hs.create = (t) => new hs({
  typeName: Ce.ZodNaN,
  ...Fe(t)
});
const vf = Symbol("zod_brand");
class nc extends Be {
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
class Lr extends Be {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? je : i.status === "dirty" ? (n.dirty(), ec(i.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? je : s.status === "dirty" ? (n.dirty(), {
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
    return new Lr({
      in: e,
      out: n,
      typeName: Ce.ZodPipeline
    });
  }
}
class ms extends Be {
  _parse(e) {
    const n = this._def.innerType._parse(e);
    return kr(n) && (n.value = Object.freeze(n.value)), n;
  }
}
ms.create = (t, e) => new ms({
  innerType: t,
  typeName: Ce.ZodReadonly,
  ...Fe(e)
});
const rc = (t, e = {}, n) => t ? Kn.create().superRefine((r, s) => {
  var i, o;
  if (!t(r)) {
    const a = typeof e == "function" ? e(r) : typeof e == "string" ? { message: e } : e, l = (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null && o !== void 0 ? o : !0, c = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...c, fatal: l });
  }
}) : Kn.create(), yf = {
  object: at.lazycreate
};
var Ce;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(Ce || (Ce = {}));
const kf = (t, e = {
  message: `Input not instance of ${t.name}`
}) => rc((n) => n instanceof t, e), sc = Mt.create, ic = un.create, wf = hs.create, Cf = fn.create, oc = wr.create, Tf = Sn.create, Sf = cs.create, Ef = Cr.create, Af = Tr.create, Of = Kn.create, If = Cn.create, Rf = Qt.create, Nf = us.create, Pf = Dt.create, Mf = at.create, jf = at.strictCreate, Df = Sr.create, xf = Ns.create, Lf = Er.create, Ff = Ut.create, Bf = Ar.create, zf = fs.create, Zf = En.create, Vf = Vn.create, Wf = Or.create, Hf = Ir.create, Gf = dn.create, Uf = Rr.create, Kf = qn.create, ko = xt.create, qf = Jt.create, $f = An.create, Yf = xt.createWithPreprocess, Xf = Lr.create, Jf = () => sc().optional(), Qf = () => ic().optional(), ed = () => oc().optional(), td = {
  string: (t) => Mt.create({ ...t, coerce: !0 }),
  number: (t) => un.create({ ...t, coerce: !0 }),
  boolean: (t) => wr.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => fn.create({ ...t, coerce: !0 }),
  date: (t) => Sn.create({ ...t, coerce: !0 })
}, nd = je;
var es = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: yr,
  setErrorMap: of,
  getErrorMap: os,
  makeIssue: ls,
  EMPTY_PATH: lf,
  addIssueToContext: ue,
  ParseStatus: gt,
  INVALID: je,
  DIRTY: ec,
  OK: kt,
  isAborted: ai,
  isDirty: ci,
  isValid: kr,
  isAsync: as,
  get util() {
    return Xe;
  },
  get objectUtil() {
    return li;
  },
  ZodParsedType: ie,
  getParsedType: an,
  ZodType: Be,
  ZodString: Mt,
  ZodNumber: un,
  ZodBigInt: fn,
  ZodBoolean: wr,
  ZodDate: Sn,
  ZodSymbol: cs,
  ZodUndefined: Cr,
  ZodNull: Tr,
  ZodAny: Kn,
  ZodUnknown: Cn,
  ZodNever: Qt,
  ZodVoid: us,
  ZodArray: Dt,
  ZodObject: at,
  ZodUnion: Sr,
  ZodDiscriminatedUnion: Ns,
  ZodIntersection: Er,
  ZodTuple: Ut,
  ZodRecord: Ar,
  ZodMap: fs,
  ZodSet: En,
  ZodFunction: Vn,
  ZodLazy: Or,
  ZodLiteral: Ir,
  ZodEnum: dn,
  ZodNativeEnum: Rr,
  ZodPromise: qn,
  ZodEffects: xt,
  ZodTransformer: xt,
  ZodOptional: Jt,
  ZodNullable: An,
  ZodDefault: Nr,
  ZodCatch: ds,
  ZodNaN: hs,
  BRAND: vf,
  ZodBranded: nc,
  ZodPipeline: Lr,
  ZodReadonly: ms,
  custom: rc,
  Schema: Be,
  ZodSchema: Be,
  late: yf,
  get ZodFirstPartyTypeKind() {
    return Ce;
  },
  coerce: td,
  any: Of,
  array: Pf,
  bigint: Cf,
  boolean: oc,
  date: Tf,
  discriminatedUnion: xf,
  effect: ko,
  enum: Gf,
  function: Vf,
  instanceof: kf,
  intersection: Lf,
  lazy: Wf,
  literal: Hf,
  map: zf,
  nan: wf,
  nativeEnum: Uf,
  never: Rf,
  null: Af,
  nullable: $f,
  number: ic,
  object: Mf,
  oboolean: ed,
  onumber: Qf,
  optional: qf,
  ostring: Jf,
  pipeline: Xf,
  preprocess: Yf,
  promise: Kf,
  record: Bf,
  set: Zf,
  strictObject: jf,
  string: sc,
  symbol: Sf,
  transformer: ko,
  tuple: Ff,
  undefined: Ef,
  union: Df,
  unknown: If,
  void: Nf,
  NEVER: nd,
  ZodIssueCode: U,
  quotelessJson: sf,
  ZodError: jt
});
function _e() {
}
const xi = (t) => t;
function S(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function lc(t) {
  return t();
}
function wo() {
  return /* @__PURE__ */ Object.create(null);
}
function Je(t) {
  t.forEach(lc);
}
function $t(t) {
  return typeof t == "function";
}
function Y(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function rd(t) {
  return Object.keys(t).length === 0;
}
function Ps(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return _e;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Se(t) {
  let e;
  return Ps(t, (n) => e = n)(), e;
}
function Ge(t, e, n) {
  t.$$.on_destroy.push(Ps(e, n));
}
function te(t, e, n, r) {
  if (t) {
    const s = ac(t, e, n, r);
    return t[0](s);
  }
}
function ac(t, e, n, r) {
  return t[1] && r ? S(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function ne(t, e, n, r) {
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
function re(t, e, n, r, s, i) {
  if (s) {
    const o = ac(e, n, r, i);
    t.p(o, s);
  }
}
function se(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function be(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function $(t, e) {
  const n = {};
  e = new Set(e);
  for (const r in t)
    !e.has(r) && r[0] !== "$" && (n[r] = t[r]);
  return n;
}
function Ks(t, e, n) {
  return t.set(n), e;
}
function ct(t) {
  return t && $t(t.destroy) ? t.destroy : _e;
}
const sd = ["", !0, 1, "true", "contenteditable"], cc = typeof window < "u";
let Li = cc ? () => window.performance.now() : () => Date.now(), Fi = cc ? (t) => requestAnimationFrame(t) : _e;
const Wn = /* @__PURE__ */ new Set();
function uc(t) {
  Wn.forEach((e) => {
    e.c(t) || (Wn.delete(e), e.f());
  }), Wn.size !== 0 && Fi(uc);
}
function Bi(t) {
  let e;
  return Wn.size === 0 && Fi(uc), {
    promise: new Promise((n) => {
      Wn.add(e = { c: t, f: n });
    }),
    abort() {
      Wn.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function fc(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function id(t) {
  const e = O("style");
  return e.textContent = "/* empty */", od(fc(t), e), e.sheet;
}
function od(t, e) {
  return R(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function C(t, e, n) {
  t.insertBefore(e, n || null);
}
function w(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _t(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function O(t) {
  return document.createElement(t);
}
function $n(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Me(t) {
  return document.createTextNode(t);
}
function oe() {
  return Me(" ");
}
function Ee() {
  return Me("");
}
function Q(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function ld(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function N(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const ad = ["width", "height"];
function le(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set && ad.indexOf(r) === -1 ? t[r] = e[r] : N(t, r, e[r]);
}
function Yn(t, e) {
  for (const n in e)
    N(t, n, e[n]);
}
function cd(t, e) {
  Object.keys(e).forEach((n) => {
    ud(t, n, e[n]);
  });
}
function ud(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : N(t, e, n);
}
function ps(t) {
  return /-/.test(t) ? cd : le;
}
function fd(t) {
  return Array.from(t.childNodes);
}
function Qe(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function dd(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function hd(t, e, n) {
  ~sd.indexOf(n) ? dd(t, e) : Qe(t, e);
}
function Co(t, e) {
  t.value = e ?? "";
}
function To(t, e, n) {
  t.classList.toggle(e, !!n);
}
function dc(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
class hc {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    he(this, "is_svg", !1);
    /** parent for creating node */
    he(this, "e");
    /** html tag nodes */
    he(this, "n");
    /** target */
    he(this, "t");
    /** anchor */
    he(this, "a");
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
    this.e || (this.is_svg ? this.e = $n(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = O(
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
      C(this.t, this.n[n], e);
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
    this.n.forEach(w);
  }
}
function Xn(t, e) {
  return new t(e);
}
const gs = /* @__PURE__ */ new Map();
let _s = 0;
function md(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function pd(t, e) {
  const n = { stylesheet: id(e), rules: {} };
  return gs.set(t, n), n;
}
function bs(t, e, n, r, s, i, o, a = 0) {
  const l = 16.666 / r;
  let c = `{
`;
  for (let p = 0; p <= 1; p += l) {
    const _ = e + (n - e) * i(p);
    c += p * 100 + `%{${o(_, 1 - _)}}
`;
  }
  const u = c + `100% {${o(n, 1 - n)}}
}`, f = `__svelte_${md(u)}_${a}`, d = fc(t), { stylesheet: h, rules: m } = gs.get(d) || pd(d, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${u}`, h.cssRules.length));
  const g = t.style.animation || "";
  return t.style.animation = `${g ? `${g}, ` : ""}${f} ${r}ms linear ${s}ms 1 both`, _s += 1, f;
}
function vs(t, e) {
  const n = (t.style.animation || "").split(", "), r = n.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), s = n.length - r.length;
  s && (t.style.animation = r.join(", "), _s -= s, _s || gd());
}
function gd() {
  Fi(() => {
    _s || (gs.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && w(e);
    }), gs.clear());
  });
}
let Pr;
function pr(t) {
  Pr = t;
}
function Fr() {
  if (!Pr)
    throw new Error("Function called outside component initialization");
  return Pr;
}
function Kt(t) {
  Fr().$$.on_mount.push(t);
}
function zi(t) {
  Fr().$$.on_destroy.push(t);
}
function Bt() {
  const t = Fr();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const i = dc(
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
function zt(t, e) {
  return Fr().$$.context.set(t, e), e;
}
function Nt(t) {
  return Fr().$$.context.get(t);
}
function ye(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const zn = [], ft = [];
let Hn = [];
const fi = [], mc = /* @__PURE__ */ Promise.resolve();
let di = !1;
function pc() {
  di || (di = !0, mc.then(gc));
}
function Zn() {
  return pc(), mc;
}
function It(t) {
  Hn.push(t);
}
function Lt(t) {
  fi.push(t);
}
const qs = /* @__PURE__ */ new Set();
let xn = 0;
function gc() {
  if (xn !== 0)
    return;
  const t = Pr;
  do {
    try {
      for (; xn < zn.length; ) {
        const e = zn[xn];
        xn++, pr(e), _d(e.$$);
      }
    } catch (e) {
      throw zn.length = 0, xn = 0, e;
    }
    for (pr(null), zn.length = 0, xn = 0; ft.length; )
      ft.pop()();
    for (let e = 0; e < Hn.length; e += 1) {
      const n = Hn[e];
      qs.has(n) || (qs.add(n), n());
    }
    Hn.length = 0;
  } while (zn.length);
  for (; fi.length; )
    fi.pop()();
  di = !1, qs.clear(), pr(t);
}
function _d(t) {
  if (t.fragment !== null) {
    t.update(), Je(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(It);
  }
}
function bd(t) {
  const e = [], n = [];
  Hn.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Hn = e;
}
let lr;
function Zi() {
  return lr || (lr = Promise.resolve(), lr.then(() => {
    lr = null;
  })), lr;
}
function Tn(t, e, n) {
  t.dispatchEvent(dc(`${e ? "intro" : "outro"}${n}`));
}
const ts = /* @__PURE__ */ new Set();
let Wt;
function Oe() {
  Wt = {
    r: 0,
    c: [],
    p: Wt
    // parent group
  };
}
function Ie() {
  Wt.r || Je(Wt.c), Wt = Wt.p;
}
function v(t, e) {
  t && t.i && (ts.delete(t), t.i(e));
}
function y(t, e, n, r) {
  if (t && t.o) {
    if (ts.has(t))
      return;
    ts.add(t), Wt.c.push(() => {
      ts.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
const Vi = { duration: 0 };
function Ms(t, e, n) {
  const r = { direction: "in" };
  let s = e(t, n, r), i = !1, o, a, l = 0;
  function c() {
    o && vs(t, o);
  }
  function u() {
    const {
      delay: d = 0,
      duration: h = 300,
      easing: m = xi,
      tick: g = _e,
      css: p
    } = s || Vi;
    p && (o = bs(t, 0, 1, h, d, m, p, l++)), g(0, 1);
    const _ = Li() + d, b = _ + h;
    a && a.abort(), i = !0, It(() => Tn(t, !0, "start")), a = Bi((k) => {
      if (i) {
        if (k >= b)
          return g(1, 0), Tn(t, !0, "end"), c(), i = !1;
        if (k >= _) {
          const I = m((k - _) / h);
          g(I, 1 - I);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, vs(t), $t(s) ? (s = s(r), Zi().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function js(t, e, n) {
  const r = { direction: "out" };
  let s = e(t, n, r), i = !0, o;
  const a = Wt;
  a.r += 1;
  let l;
  function c() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: d = xi,
      tick: h = _e,
      css: m
    } = s || Vi;
    m && (o = bs(t, 1, 0, f, u, d, m));
    const g = Li() + u, p = g + f;
    It(() => Tn(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Bi((_) => {
      if (i) {
        if (_ >= p)
          return h(0, 1), Tn(t, !1, "end"), --a.r || Je(a.c), !1;
        if (_ >= g) {
          const b = d((_ - g) / f);
          h(1 - b, b);
        }
      }
      return i;
    });
  }
  return $t(s) ? Zi().then(() => {
    s = s(r), c();
  }) : c(), {
    end(u) {
      u && "inert" in t && (t.inert = l), u && s.tick && s.tick(1, 0), i && (o && vs(t, o), i = !1);
    }
  };
}
function ys(t, e, n, r) {
  let i = e(t, n, { direction: "both" }), o = r ? 0 : 1, a = null, l = null, c = null, u;
  function f() {
    c && vs(t, c);
  }
  function d(m, g) {
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
  function h(m) {
    const {
      delay: g = 0,
      duration: p = 300,
      easing: _ = xi,
      tick: b = _e,
      css: k
    } = i || Vi, I = {
      start: Li() + g,
      b: m
    };
    m || (I.group = Wt, Wt.r += 1), "inert" in t && (m ? u !== void 0 && (t.inert = u) : (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = I : (k && (f(), c = bs(t, o, m, p, g, _, k)), m && b(0, 1), a = d(I, p), It(() => Tn(t, m, "start")), Bi((q) => {
      if (l && q > l.start && (a = d(l, p), l = null, Tn(t, a.b, "start"), k && (f(), c = bs(
        t,
        o,
        a.b,
        a.duration,
        0,
        _,
        i.css
      ))), a) {
        if (q >= a.end)
          b(o = a.b, 1 - o), Tn(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Je(a.group.c)), a = null;
        else if (q >= a.start) {
          const P = q - a.start;
          o = a.a + a.d * _(P / a.duration), b(o, 1 - o);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      $t(i) ? Zi().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function ze(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Ds(t, e) {
  y(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function xs(t, e, n, r, s, i, o, a, l, c, u, f) {
  let d = t.length, h = i.length, m = d;
  const g = {};
  for (; m--; )
    g[t[m].key] = m;
  const p = [], _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), k = [];
  for (m = h; m--; ) {
    const D = f(s, i, m), Z = n(D);
    let me = o.get(Z);
    me ? r && k.push(() => me.p(D, e)) : (me = c(Z, D), me.c()), _.set(Z, p[m] = me), Z in g && b.set(Z, Math.abs(m - g[Z]));
  }
  const I = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function P(D) {
    v(D, 1), D.m(a, u), o.set(D.key, D), u = D.first, h--;
  }
  for (; d && h; ) {
    const D = p[h - 1], Z = t[d - 1], me = D.key, fe = Z.key;
    D === Z ? (u = D.first, d--, h--) : _.has(fe) ? !o.has(me) || I.has(me) ? P(D) : q.has(fe) ? d-- : b.get(me) > b.get(fe) ? (q.add(me), P(D)) : (I.add(fe), d--) : (l(Z, o), d--);
  }
  for (; d--; ) {
    const D = t[d];
    _.has(D.key) || l(D, o);
  }
  for (; h; )
    P(p[h - 1]);
  return Je(k), p;
}
function de(t, e) {
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
function it(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ft(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function B(t) {
  t && t.c();
}
function L(t, e, n) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n), It(() => {
    const i = t.$$.on_mount.map(lc).filter($t);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Je(i), t.$$.on_mount = [];
  }), s.forEach(It);
}
function F(t, e) {
  const n = t.$$;
  n.fragment !== null && (bd(n.after_update), Je(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function vd(t, e) {
  t.$$.dirty[0] === -1 && (zn.push(t), pc(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function X(t, e, n, r, s, i, o, a = [-1]) {
  const l = Pr;
  pr(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: _e,
    not_equal: s,
    bound: wo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: wo(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const m = h.length ? h[0] : d;
    return c.ctx && s(c.ctx[f], c.ctx[f] = m) && (!c.skip_bound && c.bound[f] && c.bound[f](m), u && vd(t, f)), d;
  }) : [], c.update(), u = !0, Je(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = fd(e.target);
      c.fragment && c.fragment.l(f), f.forEach(w);
    } else
      c.fragment && c.fragment.c();
    e.intro && v(t.$$.fragment), L(t, e.target, e.anchor), gc();
  }
  pr(l);
}
class J {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    he(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    he(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    F(this, 1), this.$destroy = _e;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!$t(n))
      return _e;
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
    this.$$set && !rd(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const yd = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(yd);
const kd = (t) => ({}), So = (t) => ({}), wd = (t) => ({}), Eo = (t) => ({}), Cd = (t) => ({}), Ao = (t) => ({});
function Td(t) {
  let e;
  return {
    c() {
      e = O("div"), e.textContent = "默认的头部";
    },
    m(n, r) {
      C(n, e, r);
    },
    p: _e,
    d(n) {
      n && w(e);
    }
  };
}
function Sd(t) {
  let e;
  return {
    c() {
      e = O("div"), e.textContent = "默认的左侧";
    },
    m(n, r) {
      C(n, e, r);
    },
    p: _e,
    d(n) {
      n && w(e);
    }
  };
}
function Ed(t) {
  let e;
  return {
    c() {
      e = O("div"), e.textContent = "默认的右侧";
    },
    m(n, r) {
      C(n, e, r);
    },
    p: _e,
    d(n) {
      n && w(e);
    }
  };
}
function Ad(t) {
  let e, n, r, s, i, o, a, l;
  const c = (
    /*#slots*/
    t[10].header
  ), u = te(
    c,
    t,
    /*$$scope*/
    t[9],
    Ao
  ), f = u || Td(), d = (
    /*#slots*/
    t[10].left
  ), h = te(
    d,
    t,
    /*$$scope*/
    t[9],
    Eo
  ), m = h || Sd(), g = (
    /*#slots*/
    t[10].right
  ), p = te(
    g,
    t,
    /*$$scope*/
    t[9],
    So
  ), _ = p || Ed();
  return {
    c() {
      e = O("div"), n = O("div"), f && f.c(), r = oe(), s = O("div"), i = O("div"), m && m.c(), o = oe(), a = O("div"), _ && _.c(), N(n, "class", "w-full h-[60]"), N(i, "class", "w-1/6"), N(a, "class", "w-full"), N(s, "class", "w-full h-full flex"), N(e, "class", "w-full h-full flex flex-col");
    },
    m(b, k) {
      C(b, e, k), R(e, n), f && f.m(n, null), t[11](n), R(e, r), R(e, s), R(s, i), m && m.m(i, null), t[12](i), R(s, o), R(s, a), _ && _.m(a, null), t[13](a), l = !0;
    },
    p(b, [k]) {
      u && u.p && (!l || k & /*$$scope*/
      512) && re(
        u,
        c,
        b,
        /*$$scope*/
        b[9],
        l ? ne(
          c,
          /*$$scope*/
          b[9],
          k,
          Cd
        ) : se(
          /*$$scope*/
          b[9]
        ),
        Ao
      ), h && h.p && (!l || k & /*$$scope*/
      512) && re(
        h,
        d,
        b,
        /*$$scope*/
        b[9],
        l ? ne(
          d,
          /*$$scope*/
          b[9],
          k,
          wd
        ) : se(
          /*$$scope*/
          b[9]
        ),
        Eo
      ), p && p.p && (!l || k & /*$$scope*/
      512) && re(
        p,
        g,
        b,
        /*$$scope*/
        b[9],
        l ? ne(
          g,
          /*$$scope*/
          b[9],
          k,
          kd
        ) : se(
          /*$$scope*/
          b[9]
        ),
        So
      );
    },
    i(b) {
      l || (v(f, b), v(m, b), v(_, b), l = !0);
    },
    o(b) {
      y(f, b), y(m, b), y(_, b), l = !1;
    },
    d(b) {
      b && w(e), f && f.d(b), t[11](null), m && m.d(b), t[12](null), _ && _.d(b), t[13](null);
    }
  };
}
function Od(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e, { left: i, right: o, header: a } = e;
  Kt(() => {
    f(a), d(i), h(o);
  });
  let l, c, u;
  function f(_) {
    _ && (n(0, l.innerHTML = "", l), l.appendChild(_));
  }
  function d(_) {
    _ && (n(1, c.innerHTML = "", c), c.appendChild(_));
  }
  function h(_) {
    _ && (n(2, u.innerHTML = "", u), u.appendChild(_));
  }
  function m(_) {
    ft[_ ? "unshift" : "push"](() => {
      l = _, n(0, l);
    });
  }
  function g(_) {
    ft[_ ? "unshift" : "push"](() => {
      c = _, n(1, c);
    });
  }
  function p(_) {
    ft[_ ? "unshift" : "push"](() => {
      u = _, n(2, u);
    });
  }
  return t.$$set = (_) => {
    "left" in _ && n(3, i = _.left), "right" in _ && n(4, o = _.right), "header" in _ && n(5, a = _.header), "$$scope" in _ && n(9, s = _.$$scope);
  }, [
    l,
    c,
    u,
    i,
    o,
    a,
    f,
    d,
    h,
    s,
    r,
    m,
    g,
    p
  ];
}
class Id extends J {
  constructor(e) {
    super(), X(this, e, Od, Ad, Y, {
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
const Gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HeaderLeftRight: Id
}, Symbol.toStringTag, { value: "Module" }));
function Rd(t) {
  let e, n, r, s, i, o, a, l, c, u, f, d, h, m, g, p, _, b, k, I, q, P, D;
  return {
    c() {
      e = O("div"), n = O("section"), r = O("div"), s = O("div"), i = O("p"), i.textContent = "404 error", o = oe(), a = O("h1"), a.textContent = "Page not found", l = oe(), c = O("p"), u = Me(
        /*message*/
        t[2]
      ), f = oe(), d = O("div"), h = O("button"), m = $n("svg"), g = $n("path"), p = oe(), _ = O("button"), _.textContent = "Go back", b = oe(), k = O("button"), k.textContent = "To home", I = oe(), q = O("div"), q.innerHTML = '<div class="w-full max-w-lg lg:mx-auto"></div> <svg width="514" height="164" viewBox="0 0 514 164" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="101" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="101" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="21" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="141" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="193" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="313" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><path d="M1 102C1 90.9543 9.9543 82 21 82H141C152.046 82 161 90.9543 161 102C161 113.046 152.046 122 141 122H21C9.9543 122 1 113.046 1 102Z" stroke="#667085" stroke-width="2"></path><path d="M101 162C89.9543 162 81 153.046 81 142L81 22C81 10.9543 89.9543 2 101 2C112.046 2 121 10.9543 121 22L121 142C121 153.046 112.046 162 101 162Z" stroke="#667085" stroke-width="2"></path><path d="M7.14214 115.995C-0.668351 108.184 -0.668351 95.5211 7.14214 87.7106L86.7107 8.1421C94.5212 0.331614 107.184 0.331607 114.995 8.14209C122.805 15.9526 122.805 28.6159 114.995 36.4264L35.4264 115.995C27.6159 123.805 14.9526 123.805 7.14214 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="453" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="453" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="373" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="493" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><path d="M353 102C353 90.9543 361.954 82 373 82H493C504.046 82 513 90.9543 513 102C513 113.046 504.046 122 493 122H373C361.954 122 353 113.046 353 102Z" stroke="#667085" stroke-width="2"></path><path d="M453 162C441.954 162 433 153.046 433 142L433 22C433 10.9543 441.954 2 453 2C464.046 2 473 10.9543 473 22L473 142C473 153.046 464.046 162 453 162Z" stroke="#667085" stroke-width="2"></path><path d="M359.142 115.995C351.332 108.184 351.332 95.5211 359.142 87.7106L438.711 8.1421C446.521 0.331614 459.184 0.331607 466.995 8.14209C474.805 15.9526 474.805 28.6159 466.995 36.4264L387.426 115.995C379.616 123.805 366.953 123.805 359.142 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="253" cy="82" r="80" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="82" r="40" stroke="#667085" stroke-width="2"></circle><line x1="8.74228e-08" y1="1" x2="513" y2="1.00004" stroke="#667085" stroke-width="2"></line><line x1="-8.74228e-08" y1="163" x2="513" y2="163" stroke="#667085" stroke-width="2"></line></svg>', N(i, "class", "text-sm font-medium text-blue-500 dark:text-blue-400"), N(a, "class", "mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"), N(c, "class", "mt-4 text-gray-500 dark:text-gray-400"), N(g, "stroke-linecap", "round"), N(g, "stroke-linejoin", "round"), N(g, "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"), N(m, "xmlns", "http://www.w3.org/2000/svg"), N(m, "fill", "none"), N(m, "viewBox", "0 0 24 24"), N(m, "stroke-width", "1.5"), N(m, "stroke", "currentColor"), N(m, "class", "w-5 h-5 rtl:rotate-180"), N(h, "class", "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"), N(k, "class", "w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"), N(d, "class", "flex items-center mt-6 gap-x-3"), N(s, "class", "wf-ull lg:w-1/2"), N(q, "class", "relative w-full mt-12 lg:w-1/2 lg:mt-0"), N(r, "class", "container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12"), N(n, "class", "bg-white dark:bg-gray-900"), N(e, "class", "w-screen h-screen px-36");
    },
    m(Z, me) {
      C(Z, e, me), R(e, n), R(n, r), R(r, s), R(s, i), R(s, o), R(s, a), R(s, l), R(s, c), R(c, u), R(s, f), R(s, d), R(d, h), R(h, m), R(m, g), R(h, p), R(h, _), R(d, b), R(d, k), R(r, I), R(r, q), P || (D = [
        Q(
          _,
          "click",
          /*click_handler*/
          t[3]
        ),
        Q(
          k,
          "click",
          /*click_handler_1*/
          t[4]
        )
      ], P = !0);
    },
    p(Z, [me]) {
      me & /*message*/
      4 && Qe(
        u,
        /*message*/
        Z[2]
      );
    },
    i: _e,
    o: _e,
    d(Z) {
      Z && w(e), P = !1, Je(D);
    }
  };
}
function Nd(t, e, n) {
  let { backurl: r = "" } = e, { homeurl: s = "" } = e, { message: i = "Sorry, the page you are looking for doesn't exist.Here are some helpful links:" } = e;
  const o = () => {
    r !== "" && (window.location.href = r);
  }, a = () => {
    s !== "" && (window.location.href = s);
  };
  return t.$$set = (l) => {
    "backurl" in l && n(0, r = l.backurl), "homeurl" in l && n(1, s = l.homeurl), "message" in l && n(2, i = l.message);
  }, [r, s, i, o, a];
}
class Pd extends J {
  constructor(e) {
    super(), X(this, e, Nd, Rd, Y, { backurl: 0, homeurl: 1, message: 2 });
  }
}
const gr = /^[a-z0-9]+(-[a-z0-9]+)*$/, Ls = (t, e, n, r = "") => {
  const s = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (s.length < 2 || s.length > 3)
      return null;
    r = s.shift().slice(1);
  }
  if (s.length > 3 || !s.length)
    return null;
  if (s.length > 1) {
    const a = s.pop(), l = s.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: s.length > 0 ? s[0] : r,
      prefix: l,
      name: a
    };
    return e && !ns(c) ? null : c;
  }
  const i = s[0], o = i.split("-");
  if (o.length > 1) {
    const a = {
      provider: r,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !ns(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return e && !ns(a, n) ? null : a;
  }
  return null;
}, ns = (t, e) => t ? !!((t.provider === "" || t.provider.match(gr)) && (e && t.prefix === "" || t.prefix.match(gr)) && t.name.match(gr)) : !1, _c = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), ks = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Fs = Object.freeze({
  ..._c,
  ...ks
}), hi = Object.freeze({
  ...Fs,
  body: "",
  hidden: !1
});
function Md(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Oo(t, e) {
  const n = Md(t, e);
  for (const r in hi)
    r in ks ? r in t && !(r in n) && (n[r] = ks[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function jd(t, e) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function i(o) {
    if (n[o])
      return s[o] = [];
    if (!(o in s)) {
      s[o] = null;
      const a = r[o] && r[o].parent, l = a && i(a);
      l && (s[o] = [a].concat(l));
    }
    return s[o];
  }
  return (e || Object.keys(n).concat(Object.keys(r))).forEach(i), s;
}
function Dd(t, e, n) {
  const r = t.icons, s = t.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function o(a) {
    i = Oo(
      r[a] || s[a],
      i
    );
  }
  return o(e), n.forEach(o), Oo(t, i);
}
function bc(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((s) => {
    e(s, null), n.push(s);
  });
  const r = jd(t);
  for (const s in r) {
    const i = r[s];
    i && (e(s, Dd(t, s, i)), n.push(s));
  }
  return n;
}
const xd = {
  provider: "",
  aliases: {},
  not_found: {},
  ..._c
};
function $s(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function vc(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !$s(t, xd))
    return null;
  const n = e.icons;
  for (const s in n) {
    const i = n[s];
    if (!s.match(gr) || typeof i.body != "string" || !$s(
      i,
      hi
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const s in r) {
    const i = r[s], o = i.parent;
    if (!s.match(gr) || typeof o != "string" || !n[o] && !r[o] || !$s(
      i,
      hi
    ))
      return null;
  }
  return e;
}
const Io = /* @__PURE__ */ Object.create(null);
function Ld(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function On(t, e) {
  const n = Io[t] || (Io[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Ld(t, e));
}
function Wi(t, e) {
  return vc(e) ? bc(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function Fd(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Mr = !1;
function yc(t) {
  return typeof t == "boolean" && (Mr = t), Mr;
}
function Bd(t) {
  const e = typeof t == "string" ? Ls(t, !0, Mr) : t;
  if (e) {
    const n = On(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function zd(t, e) {
  const n = Ls(t, !0, Mr);
  if (!n)
    return !1;
  const r = On(n.provider, n.prefix);
  return Fd(r, n.name, e);
}
function Zd(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Mr && !e && !t.prefix) {
    let s = !1;
    return vc(t) && (t.prefix = "", bc(t, (i, o) => {
      o && zd(i, o) && (s = !0);
    })), s;
  }
  const n = t.prefix;
  if (!ns({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = On(e, n);
  return !!Wi(r, t);
}
const kc = Object.freeze({
  width: null,
  height: null
}), wc = Object.freeze({
  // Dimensions
  ...kc,
  // Transformations
  ...ks
}), Vd = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Wd = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ro(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(Vd);
  if (r === null || !r.length)
    return t;
  const s = [];
  let i = r.shift(), o = Wd.test(i);
  for (; ; ) {
    if (o) {
      const a = parseFloat(i);
      isNaN(a) ? s.push(i) : s.push(Math.ceil(a * e * n) / n);
    } else
      s.push(i);
    if (i = r.shift(), i === void 0)
      return s.join("");
    o = !o;
  }
}
const Hd = (t) => t === "unset" || t === "undefined" || t === "none";
function Gd(t, e) {
  const n = {
    ...Fs,
    ...t
  }, r = {
    ...wc,
    ...e
  }, s = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((m) => {
    const g = [], p = m.hFlip, _ = m.vFlip;
    let b = m.rotate;
    p ? _ ? b += 2 : (g.push(
      "translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"
    ), g.push("scale(-1 1)"), s.top = s.left = 0) : _ && (g.push(
      "translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"
    ), g.push("scale(1 -1)"), s.top = s.left = 0);
    let k;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        k = s.height / 2 + s.top, g.unshift(
          "rotate(90 " + k.toString() + " " + k.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")"
        );
        break;
      case 3:
        k = s.width / 2 + s.left, g.unshift(
          "rotate(-90 " + k.toString() + " " + k.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (s.left !== s.top && (k = s.left, s.left = s.top, s.top = k), s.width !== s.height && (k = s.width, s.width = s.height, s.height = k)), g.length && (i = '<g transform="' + g.join(" ") + '">' + i + "</g>");
  });
  const o = r.width, a = r.height, l = s.width, c = s.height;
  let u, f;
  o === null ? (f = a === null ? "1em" : a === "auto" ? c : a, u = Ro(f, l / c)) : (u = o === "auto" ? l : o, f = a === null ? Ro(u, c / l) : a === "auto" ? c : a);
  const d = {}, h = (m, g) => {
    Hd(g) || (d[m] = g.toString());
  };
  return h("width", u), h("height", f), d.viewBox = s.left.toString() + " " + s.top.toString() + " " + l.toString() + " " + c.toString(), {
    attributes: d,
    body: i
  };
}
const Ud = /\sid="(\S+)"/g, Kd = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let qd = 0;
function $d(t, e = Kd) {
  const n = [];
  let r;
  for (; r = Ud.exec(t); )
    n.push(r[1]);
  if (!n.length)
    return t;
  const s = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const o = typeof e == "function" ? e(i) : e + (qd++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + o + s + "$3"
    );
  }), t = t.replace(new RegExp(s, "g"), ""), t;
}
const mi = /* @__PURE__ */ Object.create(null);
function Yd(t, e) {
  mi[t] = e;
}
function pi(t) {
  return mi[t] || mi[""];
}
function Hi(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const Gi = /* @__PURE__ */ Object.create(null), ar = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], rs = [];
for (; ar.length > 0; )
  ar.length === 1 || Math.random() > 0.5 ? rs.push(ar.shift()) : rs.push(ar.pop());
Gi[""] = Hi({
  resources: ["https://api.iconify.design"].concat(rs)
});
function Xd(t, e) {
  const n = Hi(e);
  return n === null ? !1 : (Gi[t] = n, !0);
}
function Ui(t) {
  return Gi[t];
}
const Jd = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let No = Jd();
function Qd(t, e) {
  const n = Ui(t);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let s = 0;
    n.resources.forEach((o) => {
      s = Math.max(s, o.length);
    });
    const i = e + ".json?icons=";
    r = n.maxURL - s - n.path.length - i.length;
  }
  return r;
}
function eh(t) {
  return t === 404;
}
const th = (t, e, n) => {
  const r = [], s = Qd(t, e), i = "icons";
  let o = {
    type: i,
    provider: t,
    prefix: e,
    icons: []
  }, a = 0;
  return n.forEach((l, c) => {
    a += l.length + 1, a >= s && c > 0 && (r.push(o), o = {
      type: i,
      provider: t,
      prefix: e,
      icons: []
    }, a = l.length), o.icons.push(l);
  }), r.push(o), r;
};
function nh(t) {
  if (typeof t == "string") {
    const e = Ui(t);
    if (e)
      return e.path;
  }
  return "/";
}
const rh = (t, e, n) => {
  if (!No) {
    n("abort", 424);
    return;
  }
  let r = nh(e.provider);
  switch (e.type) {
    case "icons": {
      const i = e.prefix, a = e.icons.join(","), l = new URLSearchParams({
        icons: a
      });
      r += i + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const i = e.uri;
      r += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let s = 503;
  No(t + r).then((i) => {
    const o = i.status;
    if (o !== 200) {
      setTimeout(() => {
        n(eh(o) ? "abort" : "next", o);
      });
      return;
    }
    return s = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? n("abort", i) : n("next", s);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", s);
  });
}, sh = {
  prepare: th,
  send: rh
};
function ih(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((s, i) => s.provider !== i.provider ? s.provider.localeCompare(i.provider) : s.prefix !== i.prefix ? s.prefix.localeCompare(i.prefix) : s.name.localeCompare(i.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((s) => {
    if (r.name === s.name && r.prefix === s.prefix && r.provider === s.provider)
      return;
    r = s;
    const i = s.provider, o = s.prefix, a = s.name, l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), c = l[o] || (l[o] = On(i, o));
    let u;
    a in c.icons ? u = e.loaded : o === "" || c.missing.has(a) ? u = e.missing : u = e.pending;
    const f = {
      provider: i,
      prefix: o,
      name: a
    };
    u.push(f);
  }), e;
}
function Cc(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((s) => s.id !== e));
  });
}
function oh(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, s = t.prefix;
    e.forEach((i) => {
      const o = i.icons, a = o.pending.length;
      o.pending = o.pending.filter((l) => {
        if (l.prefix !== s)
          return !0;
        const c = l.name;
        if (t.icons[c])
          o.loaded.push({
            provider: r,
            prefix: s,
            name: c
          });
        else if (t.missing.has(c))
          o.missing.push({
            provider: r,
            prefix: s,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), o.pending.length !== a && (n || Cc([t], i.id), i.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let lh = 0;
function ah(t, e, n) {
  const r = lh++, s = Cc.bind(null, n, r);
  if (!e.pending.length)
    return s;
  const i = {
    id: r,
    icons: e,
    callback: t,
    abort: s
  };
  return n.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(i);
  }), s;
}
function ch(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((s) => {
    const i = typeof s == "string" ? Ls(s, e, n) : s;
    i && r.push(i);
  }), r;
}
var uh = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function fh(t, e, n, r) {
  const s = t.resources.length, i = t.random ? Math.floor(Math.random() * s) : t.index;
  let o;
  if (t.random) {
    let P = t.resources.slice(0);
    for (o = []; P.length > 1; ) {
      const D = Math.floor(Math.random() * P.length);
      o.push(P[D]), P = P.slice(0, D).concat(P.slice(D + 1));
    }
    o = o.concat(P);
  } else
    o = t.resources.slice(i).concat(t.resources.slice(0, i));
  const a = Date.now();
  let l = "pending", c = 0, u, f = null, d = [], h = [];
  typeof r == "function" && h.push(r);
  function m() {
    f && (clearTimeout(f), f = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), m(), d.forEach((P) => {
      P.status === "pending" && (P.status = "aborted");
    }), d = [];
  }
  function p(P, D) {
    D && (h = []), typeof P == "function" && h.push(P);
  }
  function _() {
    return {
      startTime: a,
      payload: e,
      status: l,
      queriesSent: c,
      queriesPending: d.length,
      subscribe: p,
      abort: g
    };
  }
  function b() {
    l = "failed", h.forEach((P) => {
      P(void 0, u);
    });
  }
  function k() {
    d.forEach((P) => {
      P.status === "pending" && (P.status = "aborted");
    }), d = [];
  }
  function I(P, D, Z) {
    const me = D !== "success";
    switch (d = d.filter((fe) => fe !== P), l) {
      case "pending":
        break;
      case "failed":
        if (me || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (D === "abort") {
      u = Z, b();
      return;
    }
    if (me) {
      u = Z, d.length || (o.length ? q() : b());
      return;
    }
    if (m(), k(), !t.random) {
      const fe = t.resources.indexOf(P.resource);
      fe !== -1 && fe !== t.index && (t.index = fe);
    }
    l = "completed", h.forEach((fe) => {
      fe(Z);
    });
  }
  function q() {
    if (l !== "pending")
      return;
    m();
    const P = o.shift();
    if (P === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          m(), l === "pending" && (k(), b());
        }, t.timeout);
        return;
      }
      b();
      return;
    }
    const D = {
      status: "pending",
      resource: P,
      callback: (Z, me) => {
        I(D, Z, me);
      }
    };
    d.push(D), c++, f = setTimeout(q, t.rotate), n(P, e, D.callback);
  }
  return setTimeout(q), _;
}
function Tc(t) {
  const e = {
    ...uh,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function s(a, l, c) {
    const u = fh(
      e,
      a,
      l,
      (f, d) => {
        r(), c && c(f, d);
      }
    );
    return n.push(u), u;
  }
  function i(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: s,
    find: i,
    setIndex: (a) => {
      e.index = a;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function Po() {
}
const Ys = /* @__PURE__ */ Object.create(null);
function dh(t) {
  if (!Ys[t]) {
    const e = Ui(t);
    if (!e)
      return;
    const n = Tc(e), r = {
      config: e,
      redundancy: n
    };
    Ys[t] = r;
  }
  return Ys[t];
}
function hh(t, e, n) {
  let r, s;
  if (typeof t == "string") {
    const i = pi(t);
    if (!i)
      return n(void 0, 424), Po;
    s = i.send;
    const o = dh(t);
    o && (r = o.redundancy);
  } else {
    const i = Hi(t);
    if (i) {
      r = Tc(i);
      const o = t.resources ? t.resources[0] : "", a = pi(o);
      a && (s = a.send);
    }
  }
  return !r || !s ? (n(void 0, 424), Po) : r.query(e, s, n)().abort;
}
const Mo = "iconify2", jr = "iconify", Sc = jr + "-count", jo = jr + "-version", Ec = 36e5, mh = 168;
function gi(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Ki(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function Do(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function _i(t, e) {
  return Ki(t, Sc, e.toString());
}
function bi(t) {
  return parseInt(gi(t, Sc)) || 0;
}
const Bs = {
  local: !0,
  session: !0
}, Ac = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let qi = !1;
function ph(t) {
  qi = t;
}
let Ur = typeof window > "u" ? {} : window;
function Oc(t) {
  const e = t + "Storage";
  try {
    if (Ur && Ur[e] && typeof Ur[e].length == "number")
      return Ur[e];
  } catch {
  }
  Bs[t] = !1;
}
function Ic(t, e) {
  const n = Oc(t);
  if (!n)
    return;
  const r = gi(n, jo);
  if (r !== Mo) {
    if (r) {
      const a = bi(n);
      for (let l = 0; l < a; l++)
        Do(n, jr + l.toString());
    }
    Ki(n, jo, Mo), _i(n, 0);
    return;
  }
  const s = Math.floor(Date.now() / Ec) - mh, i = (a) => {
    const l = jr + a.toString(), c = gi(n, l);
    if (typeof c == "string") {
      try {
        const u = JSON.parse(c);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > s && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, a))
          return !0;
      } catch {
      }
      Do(n, l);
    }
  };
  let o = bi(n);
  for (let a = o - 1; a >= 0; a--)
    i(a) || (a === o - 1 ? (o--, _i(n, o)) : Ac[t].add(a));
}
function Rc() {
  if (!qi) {
    ph(!0);
    for (const t in Bs)
      Ic(t, (e) => {
        const n = e.data, r = e.provider, s = n.prefix, i = On(
          r,
          s
        );
        if (!Wi(i, n).length)
          return !1;
        const o = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, o) : o, !0;
      });
  }
}
function gh(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in Bs)
      Ic(r, (s) => {
        const i = s.data;
        return s.provider !== t.provider || i.prefix !== t.prefix || i.lastModified === e;
      });
  return !0;
}
function _h(t, e) {
  qi || Rc();
  function n(r) {
    let s;
    if (!Bs[r] || !(s = Oc(r)))
      return;
    const i = Ac[r];
    let o;
    if (i.size)
      i.delete(o = Array.from(i).shift());
    else if (o = bi(s), !_i(s, o + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Ec),
      provider: t.provider,
      data: e
    };
    return Ki(
      s,
      jr + o.toString(),
      JSON.stringify(a)
    );
  }
  e.lastModified && !gh(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function xo() {
}
function bh(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, oh(t);
  }));
}
function vh(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, s = t.iconsToLoad;
    delete t.iconsToLoad;
    let i;
    if (!s || !(i = pi(n)))
      return;
    i.prepare(n, r, s).forEach((a) => {
      hh(n, a, (l) => {
        if (typeof l != "object")
          a.icons.forEach((c) => {
            t.missing.add(c);
          });
        else
          try {
            const c = Wi(
              t,
              l
            );
            if (!c.length)
              return;
            const u = t.pendingIcons;
            u && c.forEach((f) => {
              u.delete(f);
            }), _h(t, l);
          } catch (c) {
            console.error(c);
          }
        bh(t);
      });
    });
  }));
}
const yh = (t, e) => {
  const n = ch(t, !0, yc()), r = ih(n);
  if (!r.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        r.loaded,
        r.missing,
        r.pending,
        xo
      );
    }), () => {
      l = !1;
    };
  }
  const s = /* @__PURE__ */ Object.create(null), i = [];
  let o, a;
  return r.pending.forEach((l) => {
    const { provider: c, prefix: u } = l;
    if (u === a && c === o)
      return;
    o = c, a = u, i.push(On(c, u));
    const f = s[c] || (s[c] = /* @__PURE__ */ Object.create(null));
    f[u] || (f[u] = []);
  }), r.pending.forEach((l) => {
    const { provider: c, prefix: u, name: f } = l, d = On(c, u), h = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    h.has(f) || (h.add(f), s[c][u].push(f));
  }), i.forEach((l) => {
    const { provider: c, prefix: u } = l;
    s[c][u].length && vh(l, s[c][u]);
  }), e ? ah(e, r, i) : xo;
};
function kh(t, e) {
  const n = {
    ...t
  };
  for (const r in e) {
    const s = e[r], i = typeof s;
    r in kc ? (s === null || s && (i === "string" || i === "number")) && (n[r] = s) : i === typeof n[r] && (n[r] = r === "rotate" ? s % 4 : s);
  }
  return n;
}
const wh = /[\s,]+/;
function Ch(t, e) {
  e.split(wh).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function Th(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(s) {
    for (; s < 0; )
      s += 4;
    return s % 4;
  }
  if (n === "") {
    const s = parseInt(t);
    return isNaN(s) ? 0 : r(s);
  } else if (n !== t) {
    let s = 0;
    switch (n) {
      case "%":
        s = 25;
        break;
      case "deg":
        s = 90;
    }
    if (s) {
      let i = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(i) ? 0 : (i = i / s, i % 1 === 0 ? r(i) : 0);
    }
  }
  return e;
}
function Sh(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function Eh(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Ah(t) {
  return "data:image/svg+xml," + Eh(t);
}
function Oh(t) {
  return 'url("' + Ah(t) + '")';
}
const Lo = {
  ...wc,
  inline: !1
}, Ih = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Rh = {
  display: "inline-block"
}, vi = {
  "background-color": "currentColor"
}, Nc = {
  "background-color": "transparent"
}, Fo = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Bo = {
  "-webkit-mask": vi,
  mask: vi,
  background: Nc
};
for (const t in Bo) {
  const e = Bo[t];
  for (const n in Fo)
    e[t + "-" + n] = Fo[n];
}
function Nh(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Ph(t, e) {
  const n = kh(Lo, e), r = e.mode || "svg", s = r === "svg" ? { ...Ih } : {};
  t.body.indexOf("xlink:") === -1 && delete s["xmlns:xlink"];
  let i = typeof e.style == "string" ? e.style : "";
  for (let _ in e) {
    const b = e[_];
    if (b !== void 0)
      switch (_) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[_] = b === !0 || b === "true" || b === 1;
          break;
        case "flip":
          typeof b == "string" && Ch(n, b);
          break;
        case "color":
          i = i + (i.length > 0 && i.trim().slice(-1) !== ";" ? ";" : "") + "color: " + b + "; ";
          break;
        case "rotate":
          typeof b == "string" ? n[_] = Th(b) : typeof b == "number" && (n[_] = b);
          break;
        case "ariaHidden":
        case "aria-hidden":
          b !== !0 && b !== "true" && delete s["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          Lo[_] === void 0 && (s[_] = b);
      }
  }
  const o = Gd(t, n), a = o.attributes;
  if (n.inline && (i = "vertical-align: -0.125em; " + i), r === "svg") {
    Object.assign(s, a), i !== "" && (s.style = i);
    let _ = 0, b = e.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), {
      svg: !0,
      attributes: s,
      body: $d(o.body, b ? () => b + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: l, width: c, height: u } = t, f = r === "mask" || (r === "bg" ? !1 : l.indexOf("currentColor") !== -1), d = Sh(l, {
    ...a,
    width: c + "",
    height: u + ""
  }), m = {
    "--svg": Oh(d)
  }, g = (_) => {
    const b = a[_];
    b && (m[_] = Nh(b));
  };
  g("width"), g("height"), Object.assign(m, Rh, f ? vi : Nc);
  let p = "";
  for (const _ in m)
    p += _ + ": " + m[_] + ";";
  return s.style = p + i, {
    svg: !1,
    attributes: s
  };
}
yc(!0);
Yd("", sh);
if (typeof document < "u" && typeof window < "u") {
  Rc();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Zd(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const s = e[n];
          if (typeof s != "object" || !s || s.resources === void 0)
            continue;
          Xd(n, s) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Mh(t, e, n, r, s) {
  function i() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", i(), { data: { ...Fs, ...t } };
  let o;
  if (typeof t != "string" || (o = Ls(t, !1, !0)) === null)
    return i(), null;
  const a = Bd(o);
  if (!a)
    return n && (!e.loading || e.loading.name !== t) && (i(), e.name = "", e.loading = {
      name: t,
      abort: yh([o], r)
    }), null;
  i(), e.name !== t && (e.name = t, s && !e.destroyed && s(t));
  const l = ["iconify"];
  return o.prefix !== "" && l.push("iconify--" + o.prefix), o.provider !== "" && l.push("iconify--" + o.provider), { data: a, classes: l };
}
function jh(t, e) {
  return t ? Ph({
    ...Fs,
    ...t
  }, e) : null;
}
function zo(t) {
  let e;
  function n(i, o) {
    return (
      /*data*/
      i[0].svg ? xh : Dh
    );
  }
  let r = n(t), s = r(t);
  return {
    c() {
      s.c(), e = Ee();
    },
    m(i, o) {
      s.m(i, o), C(i, e, o);
    },
    p(i, o) {
      r === (r = n(i)) && s ? s.p(i, o) : (s.d(1), s = r(i), s && (s.c(), s.m(e.parentNode, e)));
    },
    d(i) {
      i && w(e), s.d(i);
    }
  };
}
function Dh(t) {
  let e, n = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let s = 0; s < n.length; s += 1)
    r = S(r, n[s]);
  return {
    c() {
      e = O("span"), le(e, r);
    },
    m(s, i) {
      C(s, e, i);
    },
    p(s, i) {
      le(e, r = de(n, [i & /*data*/
      1 && /*data*/
      s[0].attributes]));
    },
    d(s) {
      s && w(e);
    }
  };
}
function xh(t) {
  let e, n = (
    /*data*/
    t[0].body + ""
  ), r = [
    /*data*/
    t[0].attributes
  ], s = {};
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return {
    c() {
      e = $n("svg"), Yn(e, s);
    },
    m(i, o) {
      C(i, e, o), e.innerHTML = n;
    },
    p(i, o) {
      o & /*data*/
      1 && n !== (n = /*data*/
      i[0].body + "") && (e.innerHTML = n), Yn(e, s = de(r, [o & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && w(e);
    }
  };
}
function Lh(t) {
  let e, n = (
    /*data*/
    t[0] && zo(t)
  );
  return {
    c() {
      n && n.c(), e = Ee();
    },
    m(r, s) {
      n && n.m(r, s), C(r, e, s);
    },
    p(r, [s]) {
      /*data*/
      r[0] ? n ? n.p(r, s) : (n = zo(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: _e,
    o: _e,
    d(r) {
      r && w(e), n && n.d(r);
    }
  };
}
function Fh(t, e, n) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let s = !1, i = 0, o;
  const a = (c) => {
    typeof e.onLoad == "function" && e.onLoad(c), Bt()("load", { icon: c });
  };
  function l() {
    n(3, i++, i);
  }
  return Kt(() => {
    n(2, s = !0);
  }), zi(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), t.$$set = (c) => {
    n(6, e = S(S({}, e), be(c)));
  }, t.$$.update = () => {
    {
      const c = Mh(e.icon, r, s, l, a);
      n(0, o = c ? jh(c.data, e) : null), o && c.classes && n(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + c.classes.join(" "),
        o
      );
    }
  }, e = be(e), [o, r, s, i];
}
let Pc = class extends J {
  constructor(e) {
    super(), X(this, e, Fh, Lh, Y, {});
  }
};
function Zo(t, e, n) {
  const r = t.slice();
  return r[7] = e[n].title, r[8] = e[n].items, r;
}
function Vo(t, e, n) {
  const r = t.slice();
  return r[7] = e[n].title, r[11] = e[n].icon, r[12] = e[n].url, r[14] = n, r;
}
function Wo(t) {
  let e, n, r, s, i = (
    /*title*/
    t[7] + ""
  ), o, a, l, c;
  n = new Pc({
    props: { class: "w-5 h-5", icon: (
      /*icon*/
      t[11]
    ) }
  });
  function u() {
    return (
      /*click_handler*/
      t[5](
        /*url*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = O("button"), B(n.$$.fragment), r = oe(), s = O("span"), o = Me(i), N(s, "class", "mx-2 text-sm font-medium"), N(e, "class", "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700");
    },
    m(f, d) {
      C(f, e, d), L(n, e, null), R(e, r), R(e, s), R(s, o), a = !0, l || (c = Q(e, "click", u), l = !0);
    },
    p(f, d) {
      t = f;
      const h = {};
      d & /*menus*/
      2 && (h.icon = /*icon*/
      t[11]), n.$set(h), (!a || d & /*menus*/
      2) && i !== (i = /*title*/
      t[7] + "") && Qe(o, i);
    },
    i(f) {
      a || (v(n.$$.fragment, f), a = !0);
    },
    o(f) {
      y(n.$$.fragment, f), a = !1;
    },
    d(f) {
      f && w(e), F(n), l = !1, c();
    }
  };
}
function Ho(t) {
  let e, n, r = (
    /*title*/
    t[7] + ""
  ), s, i, o, a, l = ze(
    /*items*/
    t[8]
  ), c = [];
  for (let f = 0; f < l.length; f += 1)
    c[f] = Wo(Vo(t, l, f));
  const u = (f) => y(c[f], 1, 1, () => {
    c[f] = null;
  });
  return {
    c() {
      e = O("div"), n = O("p"), s = Me(r), i = oe();
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      o = oe(), N(n, "class", "px-3 text-xs text-gray-500 uppercase dark:text-gray-400"), N(e, "class", "space-y-3");
    },
    m(f, d) {
      C(f, e, d), R(e, n), R(n, s), R(e, i);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(e, null);
      R(e, o), a = !0;
    },
    p(f, d) {
      if ((!a || d & /*menus*/
      2) && r !== (r = /*title*/
      f[7] + "") && Qe(s, r), d & /*onClick, menus*/
      6) {
        l = ze(
          /*items*/
          f[8]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = Vo(f, l, h);
          c[h] ? (c[h].p(m, d), v(c[h], 1)) : (c[h] = Wo(m), c[h].c(), v(c[h], 1), c[h].m(e, o));
        }
        for (Oe(), h = l.length; h < c.length; h += 1)
          u(h);
        Ie();
      }
    },
    i(f) {
      if (!a) {
        for (let d = 0; d < l.length; d += 1)
          v(c[d]);
        a = !0;
      }
    },
    o(f) {
      c = c.filter(Boolean);
      for (let d = 0; d < c.length; d += 1)
        y(c[d]);
      a = !1;
    },
    d(f) {
      f && w(e), _t(c, f);
    }
  };
}
function Bh(t) {
  let e, n, r, s, i, o, a, l, c, u, f = ze(
    /*menus*/
    t[1]
  ), d = [];
  for (let m = 0; m < f.length; m += 1)
    d[m] = Ho(Zo(t, f, m));
  const h = (m) => y(d[m], 1, 1, () => {
    d[m] = null;
  });
  return {
    c() {
      e = O("div"), n = O("aside"), r = O("a"), s = O("div"), s.innerHTML = '<svg viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7393 71.3241L3.41309 81.6338C2.15269 82.8921 0 81.9995 0 80.2184V54.488C0 52.7067 2.15331 51.8141 3.41352 53.0731L13.7393 63.3887C14.262 63.9093 14.6767 64.5277 14.9597 65.2086C15.2427 65.8894 15.3883 66.6193 15.3883 67.3564C15.3883 68.0935 15.2427 68.8234 14.9597 69.5042C14.6767 70.1851 14.262 70.8035 13.7393 71.3241Z" fill="#2563eb"></path><path d="M91.3683 71.3241L101.694 81.6337C102.955 82.8921 105.108 81.9995 105.108 80.2184V54.488C105.108 52.7067 102.954 51.8141 101.694 53.0731L91.3683 63.3887C90.8456 63.9093 90.4309 64.5277 90.1479 65.2086C89.8649 65.8894 89.7192 66.6193 89.7192 67.3564C89.7192 68.0935 89.8649 68.8234 90.1479 69.5042C90.4309 70.1851 90.8456 70.8035 91.3683 71.3241Z" fill="#2563eb"></path><path d="M49.7091 49.6385L6.82642 6.81672C4.30574 4.29962 0 6.0849 0 9.64715V28.0139C0 29.076 0.422407 30.0945 1.1741 30.8449L44.8945 74.4874C46.9238 76.5064 49.6719 77.6402 52.5368 77.6402C55.4017 77.6402 58.1498 76.5064 60.1791 74.4874L103.932 30.8536C104.685 30.1031 105.108 29.084 105.108 28.0213V9.65448C105.108 6.09239 100.802 4.30703 98.2813 6.8238L55.3984 49.6385C54.6437 50.3912 53.6205 50.814 52.5538 50.814C51.487 50.814 50.4638 50.3912 49.7091 49.6385Z" fill="#2563eb"></path></svg>', i = oe(), o = O("div"), a = O("nav");
      for (let m = 0; m < d.length; m += 1)
        d[m].c();
      l = oe(), c = O("div"), c.textContent = "content", N(s, "class", "h-7 w-7"), N(
        r,
        "href",
        /*homeurl*/
        t[0]
      ), N(a, "class", "-mx-3 space-y-6"), N(o, "class", "flex flex-col justify-between flex-1 mt-6"), N(n, "class", "flex flex-col w-64 h-full px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"), N(c, "class", "flex-grow px-5 py-8"), N(e, "class", "w-screen h-screen flex");
    },
    m(m, g) {
      C(m, e, g), R(e, n), R(n, r), R(r, s), R(n, i), R(n, o), R(o, a);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(a, null);
      R(e, l), R(e, c), t[6](c), u = !0;
    },
    p(m, [g]) {
      if ((!u || g & /*homeurl*/
      1) && N(
        r,
        "href",
        /*homeurl*/
        m[0]
      ), g & /*menus, onClick*/
      6) {
        f = ze(
          /*menus*/
          m[1]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const _ = Zo(m, f, p);
          d[p] ? (d[p].p(_, g), v(d[p], 1)) : (d[p] = Ho(_), d[p].c(), v(d[p], 1), d[p].m(a, null));
        }
        for (Oe(), p = f.length; p < d.length; p += 1)
          h(p);
        Ie();
      }
    },
    i(m) {
      if (!u) {
        for (let g = 0; g < f.length; g += 1)
          v(d[g]);
        u = !0;
      }
    },
    o(m) {
      d = d.filter(Boolean);
      for (let g = 0; g < d.length; g += 1)
        y(d[g]);
      u = !1;
    },
    d(m) {
      m && w(e), _t(d, m), t[6](null);
    }
  };
}
function zh(t, e, n) {
  let { homeurl: r = "" } = e, { menus: s = [] } = e, { onClick: i = (u) => {
    console.log(u);
  } } = e;
  function o(u) {
    u && (n(3, a.innerHTML = "", a), a.appendChild(u));
  }
  let a;
  const l = (u) => i(u);
  function c(u) {
    ft[u ? "unshift" : "push"](() => {
      a = u, n(3, a);
    });
  }
  return t.$$set = (u) => {
    "homeurl" in u && n(0, r = u.homeurl), "menus" in u && n(1, s = u.menus), "onClick" in u && n(2, i = u.onClick);
  }, [r, s, i, a, o, l, c];
}
class Zh extends J {
  constructor(e) {
    super(), X(this, e, zh, Bh, Y, {
      homeurl: 0,
      menus: 1,
      onClick: 2,
      setContent: 4
    });
  }
  get setContent() {
    return this.$$.ctx[4];
  }
}
const Kw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dashboard: Zh,
  NotFound: Pd
}, Symbol.toStringTag, { value: "Module" }));
function Go(t, e, n) {
  const r = t.slice();
  return r[1] = e[n], r[3] = n, r;
}
function Uo(t) {
  let e, n;
  return e = new ao({
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
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*fields*/
      1 && (i.field = /*field*/
      r[1]), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Vh(t) {
  let e, n, r = ze(
    /*fields*/
    t[0]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Uo(Go(t, r, o));
  const i = (o) => y(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = O("div");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      N(e, "class", "flex w-full");
    },
    m(o, a) {
      C(o, e, a);
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(e, null);
      n = !0;
    },
    p(o, [a]) {
      if (a & /*fields*/
      1) {
        r = ze(
          /*fields*/
          o[0]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = Go(o, r, l);
          s[l] ? (s[l].p(c, a), v(s[l], 1)) : (s[l] = Uo(c), s[l].c(), v(s[l], 1), s[l].m(e, null));
        }
        for (Oe(), l = r.length; l < s.length; l += 1)
          i(l);
        Ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          v(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        y(s[a]);
      n = !1;
    },
    d(o) {
      o && w(e), _t(s, o);
    }
  };
}
function Wh(t, e, n) {
  let { fields: r } = e;
  return t.$$set = (s) => {
    "fields" in s && n(0, r = s.fields);
  }, [r];
}
class Hh extends J {
  constructor(e) {
    super(), X(this, e, Wh, Vh, Y, { fields: 0 });
  }
}
function Mc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Mc(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function Gh() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Mc(t)) && (r && (r += " "), r += e);
  return r;
}
function Uh() {
  for (var t = 0, e, n, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = jc(e)) && (r && (r += " "), r += n);
  return r;
}
function jc(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", r = 0; r < t.length; r++)
    t[r] && (e = jc(t[r])) && (n && (n += " "), n += e);
  return n;
}
var $i = "-";
function Kh(t) {
  var e = $h(t), n = t.conflictingClassGroups, r = t.conflictingClassGroupModifiers, s = r === void 0 ? {} : r;
  function i(a) {
    var l = a.split($i);
    return l[0] === "" && l.length !== 1 && l.shift(), Dc(l, e) || qh(a);
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
function Dc(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], r = e.nextPart.get(n), s = r ? Dc(t.slice(1), r) : void 0;
  if (s)
    return s;
  if (e.validators.length !== 0) {
    var i = t.join($i);
    return (o = e.validators.find(function(a) {
      var l = a.validator;
      return l(i);
    })) == null ? void 0 : o.classGroupId;
  }
}
var Ko = /^\[(.+)\]$/;
function qh(t) {
  if (Ko.test(t)) {
    var e = Ko.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function $h(t) {
  var e = t.theme, n = t.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = Xh(Object.entries(t.classGroups), n);
  return s.forEach(function(i) {
    var o = i[0], a = i[1];
    yi(a, r, o, e);
  }), r;
}
function yi(t, e, n, r) {
  t.forEach(function(s) {
    if (typeof s == "string") {
      var i = s === "" ? e : qo(e, s);
      i.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (Yh(s)) {
        yi(s(r), e, n, r);
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
      yi(l, qo(e, a), n, r);
    });
  });
}
function qo(t, e) {
  var n = t;
  return e.split($i).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Yh(t) {
  return t.isThemeGetter;
}
function Xh(t, e) {
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
function Jh(t) {
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
var xc = "!";
function Qh(t) {
  var e = t.separator || ":", n = e.length === 1, r = e[0], s = e.length;
  return function(o) {
    for (var a = [], l = 0, c = 0, u, f = 0; f < o.length; f++) {
      var d = o[f];
      if (l === 0) {
        if (d === r && (n || o.slice(f, f + s) === e)) {
          a.push(o.slice(c, f)), c = f + s;
          continue;
        }
        if (d === "/") {
          u = f;
          continue;
        }
      }
      d === "[" ? l++ : d === "]" && l--;
    }
    var h = a.length === 0 ? o : o.substring(c), m = h.startsWith(xc), g = m ? h.substring(1) : h, p = u && u > c ? u - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: g,
      maybePostfixModifierPosition: p
    };
  };
}
function em(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(r) {
    var s = r[0] === "[";
    s ? (e.push.apply(e, n.sort().concat([r])), n = []) : n.push(r);
  }), e.push.apply(e, n.sort()), e;
}
function tm(t) {
  return {
    cache: Jh(t.cacheSize),
    splitModifiers: Qh(t),
    ...Kh(t)
  };
}
var nm = /\s+/;
function rm(t, e) {
  var n = e.splitModifiers, r = e.getClassGroupId, s = e.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return t.trim().split(nm).map(function(o) {
    var a = n(o), l = a.modifiers, c = a.hasImportantModifier, u = a.baseClassName, f = a.maybePostfixModifierPosition, d = r(f ? u.substring(0, f) : u), h = !!f;
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
    var m = em(l).join(":"), g = c ? m + xc : m;
    return {
      isTailwindClass: !0,
      modifierId: g,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: h
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
function ki() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, s, i, o = a;
  function a(c) {
    var u = e[0], f = e.slice(1), d = f.reduce(function(h, m) {
      return m(h);
    }, u());
    return r = tm(d), s = r.cache.get, i = r.cache.set, o = l, l(c);
  }
  function l(c) {
    var u = s(c);
    if (u)
      return u;
    var f = rm(c, r);
    return i(c, f), f;
  }
  return function() {
    return o(Uh.apply(null, arguments));
  };
}
function lt(t) {
  var e = function(r) {
    return r[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var Lc = /^\[(?:([a-z-]+):)?(.+)\]$/i, sm = /^\d+\/\d+$/, im = /* @__PURE__ */ new Set(["px", "full", "screen"]), om = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, am = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Pt(t) {
  return kn(t) || im.has(t) || sm.test(t) || wi(t);
}
function wi(t) {
  return Pn(t, "length", mm);
}
function cm(t) {
  return Pn(t, "size", Fc);
}
function um(t) {
  return Pn(t, "position", Fc);
}
function fm(t) {
  return Pn(t, "url", pm);
}
function Kr(t) {
  return Pn(t, "number", kn);
}
function kn(t) {
  return !Number.isNaN(Number(t));
}
function dm(t) {
  return t.endsWith("%") && kn(t.slice(0, -1));
}
function cr(t) {
  return $o(t) || Pn(t, "number", $o);
}
function He(t) {
  return Lc.test(t);
}
function ur() {
  return !0;
}
function sn(t) {
  return om.test(t);
}
function hm(t) {
  return Pn(t, "", gm);
}
function Pn(t, e, n) {
  var r = Lc.exec(t);
  return r ? r[1] ? r[1] === e : n(r[2]) : !1;
}
function mm(t) {
  return lm.test(t);
}
function Fc() {
  return !1;
}
function pm(t) {
  return t.startsWith("url(");
}
function $o(t) {
  return Number.isInteger(Number(t));
}
function gm(t) {
  return am.test(t);
}
function Ci() {
  var t = lt("colors"), e = lt("spacing"), n = lt("blur"), r = lt("brightness"), s = lt("borderColor"), i = lt("borderRadius"), o = lt("borderSpacing"), a = lt("borderWidth"), l = lt("contrast"), c = lt("grayscale"), u = lt("hueRotate"), f = lt("invert"), d = lt("gap"), h = lt("gradientColorStops"), m = lt("gradientColorStopPositions"), g = lt("inset"), p = lt("margin"), _ = lt("opacity"), b = lt("padding"), k = lt("saturate"), I = lt("scale"), q = lt("sepia"), P = lt("skew"), D = lt("space"), Z = lt("translate"), me = function() {
    return ["auto", "contain", "none"];
  }, fe = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, A = function() {
    return ["auto", He, e];
  }, T = function() {
    return [He, e];
  }, M = function() {
    return ["", Pt];
  }, W = function() {
    return ["auto", kn, He];
  }, j = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, G = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, ce = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, ke = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, we = function() {
    return ["", "0", He];
  }, et = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, qe = function() {
    return [kn, Kr];
  }, rt = function() {
    return [kn, He];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ur],
      spacing: [Pt],
      blur: ["none", "", sn, He],
      brightness: qe(),
      borderColor: [t],
      borderRadius: ["none", "", "full", sn, He],
      borderSpacing: T(),
      borderWidth: M(),
      contrast: qe(),
      grayscale: we(),
      hueRotate: rt(),
      invert: we(),
      gap: T(),
      gradientColorStops: [t],
      gradientColorStopPositions: [dm, wi],
      inset: A(),
      margin: A(),
      opacity: qe(),
      padding: T(),
      saturate: qe(),
      scale: qe(),
      sepia: we(),
      skew: rt(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", He]
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
        columns: [sn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": et()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": et()
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
        object: [].concat(j(), [He])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: fe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": fe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": fe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: me()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": me()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": me()
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
        z: ["auto", cr]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        flex: ["1", "auto", "initial", "none", He]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: we()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: we()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", cr]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ur]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", cr]
        }, He]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ur]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [cr]
        }, He]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": ["auto", "min", "max", "fr", He]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", He]
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
        justify: ["normal"].concat(ke())
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
        content: ["normal"].concat(ke(), ["baseline"])
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
        "place-content": [].concat(ke(), ["baseline"])
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
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", He, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", He, Pt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [sn]
        }, sn, He]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [He, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", He, Pt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [He, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", sn, wi]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Kr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ur]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", He]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", kn, Kr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", He, Pt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", He]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", He]
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
        "placeholder-opacity": [_]
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
        "text-opacity": [_]
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
        decoration: [].concat(G(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Pt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", He, Pt]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", He]
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
        content: ["none", He]
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
        "bg-opacity": [_]
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
        bg: [].concat(j(), [um])
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
        bg: ["auto", "cover", "contain", cm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, fm]
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
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(G(), ["hidden"])
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
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
        outline: [""].concat(G())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [He, Pt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pt]
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
        ring: M()
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
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Pt]
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
        shadow: ["", "inner", "none", sn, hm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ur]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ce()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        "drop-shadow": ["", "none", sn, He]
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
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [q]
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
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [q]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", He]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: rt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", He]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: rt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", He]
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
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [cr, He]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", He]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", He]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", He]
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
        stroke: [Pt, Kr]
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
function _m(t, e) {
  for (var n in e)
    Bc(t, n, e[n]);
  return t;
}
var bm = Object.prototype.hasOwnProperty, vm = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Bc(t, e, n) {
  if (!bm.call(t, e) || vm.has(typeof n) || n === null) {
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
      Bc(t[e], r, n[r]);
  }
}
function ym(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return typeof t == "function" ? ki.apply(void 0, [Ci, t].concat(n)) : ki.apply(void 0, [function() {
    return _m(Ci(), t);
  }].concat(n));
}
var zc = /* @__PURE__ */ ki(Ci);
function Zc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Pe(...t) {
  return zc(Gh(t));
}
const Vc = (t, e = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const n = getComputedStyle(t), r = n.transform === "none" ? "" : n.transform, s = (o, a, l) => {
    const [c, u] = a, [f, d] = l;
    return (o - c) / (u - c) * (d - f) + f;
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
    easing: Zc
  };
};
function km(t) {
  let e, n, r, s, i = [
    {
      class: n = Pe(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ], o = {};
  for (let a = 0; a < i.length; a += 1)
    o = S(o, i[a]);
  return {
    c() {
      e = O("input"), le(e, o);
    },
    m(a, l) {
      C(a, e, l), e.autofocus && e.focus(), Co(
        e,
        /*value*/
        t[0]
      ), r || (s = [
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
    p(a, [l]) {
      le(e, o = de(i, [
        l & /*className*/
        2 && n !== (n = Pe(
          "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          /*className*/
          a[1]
        )) && { class: n },
        l & /*$$restProps*/
        4 && /*$$restProps*/
        a[2]
      ])), l & /*value*/
      1 && e.value !== /*value*/
      a[0] && Co(
        e,
        /*value*/
        a[0]
      );
    },
    i: _e,
    o: _e,
    d(a) {
      a && w(e), r = !1, Je(s);
    }
  };
}
function wm(t, e, n) {
  const r = ["class", "value"];
  let s = $(e, r), { class: i = void 0 } = e, { value: o = void 0 } = e;
  function a(I) {
    ye.call(this, t, I);
  }
  function l(I) {
    ye.call(this, t, I);
  }
  function c(I) {
    ye.call(this, t, I);
  }
  function u(I) {
    ye.call(this, t, I);
  }
  function f(I) {
    ye.call(this, t, I);
  }
  function d(I) {
    ye.call(this, t, I);
  }
  function h(I) {
    ye.call(this, t, I);
  }
  function m(I) {
    ye.call(this, t, I);
  }
  function g(I) {
    ye.call(this, t, I);
  }
  function p(I) {
    ye.call(this, t, I);
  }
  function _(I) {
    ye.call(this, t, I);
  }
  function b(I) {
    ye.call(this, t, I);
  }
  function k() {
    o = this.value, n(0, o);
  }
  return t.$$set = (I) => {
    e = S(S({}, e), be(I)), n(2, s = $(e, r)), "class" in I && n(1, i = I.class), "value" in I && n(0, o = I.value);
  }, [
    o,
    i,
    s,
    a,
    l,
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    p,
    _,
    b,
    k
  ];
}
class Wc extends J {
  constructor(e) {
    super(), X(this, e, wm, km, Y, { class: 1, value: 0 });
  }
}
var Yo = Object.prototype.hasOwnProperty;
function Xo(t, e, n) {
  for (n of t.keys())
    if (_r(n, e))
      return n;
}
function _r(t, e) {
  var n, r, s;
  if (t === e)
    return !0;
  if (t && e && (n = t.constructor) === e.constructor) {
    if (n === Date)
      return t.getTime() === e.getTime();
    if (n === RegExp)
      return t.toString() === e.toString();
    if (n === Array) {
      if ((r = t.length) === e.length)
        for (; r-- && _r(t[r], e[r]); )
          ;
      return r === -1;
    }
    if (n === Set) {
      if (t.size !== e.size)
        return !1;
      for (r of t)
        if (s = r, s && typeof s == "object" && (s = Xo(e, s), !s) || !e.has(s))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (t.size !== e.size)
        return !1;
      for (r of t)
        if (s = r[0], s && typeof s == "object" && (s = Xo(e, s), !s) || !_r(r[1], e.get(s)))
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
        if (Yo.call(t, n) && ++r && !Yo.call(e, n) || !(n in e) || !_r(t[n], e[n]))
          return !1;
      return Object.keys(e).length === r;
    }
  }
  return t !== t && e !== e;
}
function Cm(t, e, n, r = !0) {
  const s = e - n;
  return s <= 0 ? r ? t[t.length - 1] : t[0] : t[s];
}
function Tm(t, e, n, r = !0) {
  const s = e + n;
  return s > t.length - 1 ? r ? t[0] : t[t.length - 1] : t[s];
}
function Sm(t, e, n = !0) {
  return e === t.length - 1 ? n ? t[0] : t[e] : t[e + 1];
}
function Em(t, e, n = !0) {
  return e <= 0 ? n ? t[t.length - 1] : t[0] : t[e - 1];
}
function Am(t) {
  return t[t.length - 1];
}
function Om(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
function Im(t, e) {
  const n = e.findIndex((r) => _r(r, t));
  return n !== -1 ? e.splice(n, 1) : e.push(t), e;
}
const Ln = [];
function Ht(t, e) {
  return {
    subscribe: Ne(t, e).subscribe
  };
}
function Ne(t, e = _e) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function s(a) {
    if (Y(t, a) && (t = a, n)) {
      const l = !Ln.length;
      for (const c of r)
        c[1](), Ln.push(c, t);
      if (l) {
        for (let c = 0; c < Ln.length; c += 2)
          Ln[c][0](Ln[c + 1]);
        Ln.length = 0;
      }
    }
  }
  function i(a) {
    s(a(t));
  }
  function o(a, l = _e) {
    const c = [a, l];
    return r.add(c), r.size === 1 && (n = e(s, i) || _e), a(t), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function Le(t, e, n) {
  const r = !Array.isArray(t), s = r ? [t] : t;
  if (!s.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return Ht(n, (o, a) => {
    let l = !1;
    const c = [];
    let u = 0, f = _e;
    const d = () => {
      if (u)
        return;
      f();
      const m = e(r ? c[0] : c, o, a);
      i ? o(m) : f = $t(m) ? m : _e;
    }, h = s.map(
      (m, g) => Ps(
        m,
        (p) => {
          c[g] = p, u &= ~(1 << g), l && d();
        },
        () => {
          u |= 1 << g;
        }
      )
    );
    return l = !0, d(), function() {
      Je(h), f(), l = !1;
    };
  });
}
function Jo(t) {
  return {
    subscribe: t.subscribe.bind(t)
  };
}
function Qo(t) {
  function e(n) {
    return n(t), () => {
    };
  }
  return { subscribe: e };
}
const qr = (t) => new Proxy(t, {
  get(e, n, r) {
    return Reflect.get(e, n, r);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((n) => n !== "action");
  }
}), el = (t) => typeof t == "function";
function st(t, e) {
  const { stores: n, action: r, returned: s } = e ?? {}, i = (() => {
    if (n && s)
      return Le(n, (a) => {
        const l = s(a);
        if (el(l)) {
          const c = (...u) => qr({
            ...l(...u),
            [`data-melt-${t}`]: "",
            action: r ?? yt
          });
          return c.action = r ?? yt, c;
        }
        return qr({
          ...l,
          [`data-melt-${t}`]: "",
          action: r ?? yt
        });
      });
    {
      const a = s, l = a == null ? void 0 : a();
      if (el(l)) {
        const c = (...u) => qr({
          ...l(...u),
          [`data-melt-${t}`]: "",
          action: r ?? yt
        });
        return c.action = r ?? yt, Qo(c);
      }
      return Qo(qr({
        ...l,
        [`data-melt-${t}`]: "",
        action: r ?? yt
      }));
    }
  })(), o = r ?? (() => {
  });
  return o.subscribe = i.subscribe, o;
}
function Yi(t) {
  const e = (i) => i ? `${t}-${i}` : t, n = (i) => `data-melt-${t}${i ? `-${i}` : ""}`, r = (i) => `[data-melt-${t}${i ? `-${i}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i))
  };
}
const cn = typeof document < "u", Hc = (t) => typeof t == "function";
function ae(t) {
  return t instanceof HTMLElement;
}
function Vt(t) {
  const e = t.getAttribute("aria-disabled"), n = t.getAttribute("disabled"), r = t.hasAttribute("data-disabled");
  return !!(e === "true" || n !== null || r);
}
function pt(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function yt() {
}
function Ot(t, e, n, r) {
  const s = Array.isArray(e) ? e : [e];
  return s.forEach((i) => t.addEventListener(i, n, r)), () => {
    s.forEach((i) => t.removeEventListener(i, n, r));
  };
}
function Te(t, e, n, r) {
  const s = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const i = Nm((o) => n(o));
    return s.forEach((o) => t.addEventListener(o, i, r)), () => {
      s.forEach((o) => t.removeEventListener(o, i, r));
    };
  }
  return () => void 0;
}
function Rm(t) {
  const e = t.currentTarget;
  if (!ae(e))
    return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: {
      originalEvent: t
    },
    cancelable: !0
  });
  return e.dispatchEvent(n), n;
}
function Nm(t) {
  return (e) => {
    const n = Rm(e);
    if (!(n != null && n.defaultPrevented))
      return t(e);
  };
}
function Gc(t) {
  t.setAttribute("data-highlighted", "");
}
function bn(t) {
  t.removeAttribute("data-highlighted");
}
function Xs(t) {
  return Array.from(t.querySelectorAll('[role="option"]:not([data-disabled])')).filter((e) => ae(e));
}
function Pm(t) {
  const e = t.querySelector('[role="option"]:not([data-disabled])');
  return ae(e) ? e : null;
}
function Xi(t, ...e) {
  const n = {};
  for (const r of Object.keys(t))
    e.includes(r) || (n[r] = t[r]);
  return n;
}
const In = (t, e) => {
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
function br(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Xt(t) {
  return Object.keys(t).reduce((e, n) => t[n] === void 0 ? e : e + `${n}:${t[n]};`, "");
}
let Mm = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Uc = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += Mm[Math.random() * 64 | 0];
  return e;
};
function wn() {
  return Uc(10);
}
const xe = {
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
}, jm = [xe.ARROW_DOWN, xe.PAGE_UP, xe.HOME], Dm = [xe.ARROW_UP, xe.PAGE_DOWN, xe.END], Ti = [...jm, ...Dm], Dr = [xe.ENTER, xe.SPACE];
function xm(t, e = 500) {
  let n = null;
  return function(...r) {
    const s = () => {
      n = null, t(...r);
    };
    n && clearTimeout(n), n = setTimeout(s, e);
  };
}
const Kc = () => typeof window < "u";
function Lm() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const qc = (t) => Kc() && t.test(Lm()), Fm = () => Kc() && !!navigator.maxTouchPoints, Bm = () => qc(/^Mac/) && !Fm(), zm = () => qc(/mac|iphone|ipad|ipod/i), Zm = () => zm() && !Bm(), Js = "data-melt-scroll-lock";
function tl(t, e) {
  if (!t)
    return;
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function Vm(t, e, n) {
  if (!t)
    return;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
  };
}
function Wm(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Si(t) {
  const e = t ?? document, n = e.defaultView ?? window, { documentElement: r, body: s } = e;
  if (s.hasAttribute(Js))
    return yt;
  s.setAttribute(Js, "");
  const o = n.innerWidth - r.clientWidth, a = () => Vm(r, "--scrollbar-width", `${o}px`), l = Wm(r), c = n.getComputedStyle(s)[l], u = () => tl(s, {
    overflow: "hidden",
    [l]: `calc(${c} + ${o}px)`
  }), f = () => {
    const { scrollX: h, scrollY: m, visualViewport: g } = n, p = (g == null ? void 0 : g.offsetLeft) ?? 0, _ = (g == null ? void 0 : g.offsetTop) ?? 0, b = tl(s, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(m - Math.floor(_))}px`,
      left: `${-(h - Math.floor(p))}px`,
      right: "0",
      [l]: `calc(${c} + ${o}px)`
    });
    return () => {
      b == null || b(), n.scrollTo(h, m);
    };
  }, d = [a(), Zm() ? f() : u()];
  return () => {
    d.forEach((h) => h == null ? void 0 : h()), s.removeAttribute(Js);
  };
}
function Ei(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return Le([e, n, r], ([s, i, o]) => (s || i) && o !== null);
}
function $c(t, e) {
  let n = [];
  const r = (a) => {
    n.push(a);
  }, s = () => {
    n.forEach((a) => a()), n = [];
  }, i = Le(t, (a) => (s(), e(a, r)));
  return zi(s), {
    ...i,
    subscribe: (...a) => {
      const l = i.subscribe(...a);
      return () => {
        l(), s();
      };
    }
  };
}
function At(t, e) {
  const n = $c(t, (r, s) => ({
    stores: r,
    onUnsubscribe: s
  })).subscribe(({ stores: r, onUnsubscribe: s }) => {
    const i = e(r);
    i && s(i);
  });
  return zi(n), n;
}
function er(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const r = n, s = t[r];
    e[r] = Ne(s);
  }), e;
}
function Ye(t) {
  if (!cn)
    return;
  const e = document.activeElement;
  ae(e) && e !== t && (e.tabIndex = -1, t.tabIndex = 0, br(1).then(() => t.focus()));
}
function Yc() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function Ai(t) {
  const e = Yc(), r = e.indexOf(t) + 1, s = e[r];
  return r < e.length && ae(s) ? s : null;
}
function Oi(t) {
  const e = Yc(), r = e.indexOf(t) - 1, s = e[r];
  return r >= 0 && ae(s) ? s : null;
}
const Hm = {
  onMatch: Ye
};
function Xc(t = {}) {
  const e = { ...Hm, ...t }, n = Ne([]), r = xm(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (i, o) => {
      const a = document.activeElement;
      if (!ae(a))
        return;
      const l = Se(n);
      if (!Array.isArray(l))
        return;
      l.push(i.toLowerCase()), n.update(() => l);
      const c = o.filter((p) => !(p.getAttribute("disabled") === "true" || p.getAttribute("aria-disabled") === "true" || p.hasAttribute("data-disabled"))), f = l.length > 1 && l.every((p) => p === l[0]) ? l[0] : l.join(""), d = a ? c.indexOf(a) : -1;
      let h = Om(c, Math.max(d, 0));
      f.length === 1 && (h = h.filter((p) => p !== a));
      const g = h.find((p) => p.innerText.toLowerCase().startsWith(f.toLowerCase()));
      ae(g) && g !== a && e.onMatch(g), r();
    }
  };
}
function Gm(t) {
  let e = t.parentElement;
  for (; ae(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function Jc(t, e) {
  const n = Gm(t);
  return e !== void 0 ? e : n === "body" ? document.body : null;
}
const Um = {
  disabled: !1,
  required: !1,
  name: void 0,
  value: "on",
  defaultChecked: !1
};
function Km(t) {
  const e = { ...Um, ...t }, n = er(Xi(e, "checked", "defaultChecked")), { disabled: r, name: s, required: i, value: o } = n, a = e.checked ?? Ne(e.defaultChecked), l = In(a, e == null ? void 0 : e.onCheckedChange), c = st("checkbox", {
    stores: [l, r, i],
    returned: ([h, m, g]) => ({
      "data-disabled": m,
      "data-state": h === "indeterminate" ? "indeterminate" : h ? "checked" : "unchecked",
      type: "button",
      role: "checkbox",
      "aria-checked": h === "indeterminate" ? "mixed" : h,
      "aria-required": g
    }),
    action: (h) => ({
      destroy: pt(Te(h, "keydown", (g) => {
        g.key === xe.ENTER && g.preventDefault();
      }), Te(h, "click", () => {
        Se(r) || l.update((g) => g === "indeterminate" ? !0 : !g);
      }))
    })
  }), u = st("checkbox-input", {
    stores: [l, s, o, i, r],
    returned: ([h, m, g, p, _]) => ({
      type: "checkbox",
      "aria-hidden": !0,
      hidden: !0,
      tabindex: -1,
      name: m,
      value: g,
      checked: h === "indeterminate" ? !1 : h,
      required: p,
      disabled: _,
      style: Xt({
        position: "absolute",
        opacity: 0,
        "pointer-events": "none",
        margin: 0,
        transform: "translateX(-100%)"
      })
    })
  }), f = Le(l, (h) => h === "indeterminate"), d = Le(l, (h) => h === !0);
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
      isChecked: d
    },
    options: n
  };
}
const qm = Ht(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return Ot(document, "pointerdown", e, {
    passive: !1,
    capture: !0
  });
}), $m = (t, e = {}) => {
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : Se(n.enabled);
  }
  const s = qm.subscribe((i) => {
    var a;
    if (!r() || !i || i.target === t)
      return;
    const o = i.composedPath();
    if (!o.includes(t)) {
      if (n.ignore) {
        if (Hc(n.ignore)) {
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
}, Ym = Ht(void 0, (t) => {
  function e(r) {
    r && r.key === xe.ESCAPE && t(r), t(void 0);
  }
  return Ot(document, "keydown", e, {
    passive: !1,
    capture: !0
  });
}), Xm = (t, e = {}) => {
  t.dataset.escapee = "";
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : Se(n.enabled);
  }
  const s = Ym.subscribe((i) => {
    var a;
    if (!i || !r())
      return;
    const o = i.target;
    if (!(!ae(o) || o.closest("[data-escapee]") !== t)) {
      if (n.ignore) {
        if (Hc(n.ignore)) {
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
}, hn = Math.min, Ct = Math.max, ws = Math.round, $r = Math.floor, mn = (t) => ({
  x: t,
  y: t
}), Jm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Qm = {
  start: "end",
  end: "start"
};
function Ii(t, e, n) {
  return Ct(t, hn(e, n));
}
function tr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function pn(t) {
  return t.split("-")[0];
}
function nr(t) {
  return t.split("-")[1];
}
function Qc(t) {
  return t === "x" ? "y" : "x";
}
function Ji(t) {
  return t === "y" ? "height" : "width";
}
function Br(t) {
  return ["top", "bottom"].includes(pn(t)) ? "y" : "x";
}
function Qi(t) {
  return Qc(Br(t));
}
function ep(t, e, n) {
  n === void 0 && (n = !1);
  const r = nr(t), s = Qi(t), i = Ji(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Cs(o)), [o, Cs(o)];
}
function tp(t) {
  const e = Cs(t);
  return [Ri(t), e, Ri(e)];
}
function Ri(t) {
  return t.replace(/start|end/g, (e) => Qm[e]);
}
function np(t, e, n) {
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
function rp(t, e, n, r) {
  const s = nr(t);
  let i = np(pn(t), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), e && (i = i.concat(i.map(Ri)))), i;
}
function Cs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Jm[e]);
}
function sp(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function eu(t) {
  return typeof t != "number" ? sp(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Ts(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function nl(t, e, n) {
  let {
    reference: r,
    floating: s
  } = t;
  const i = Br(e), o = Qi(e), a = Ji(o), l = pn(e), c = i === "y", u = r.x + r.width / 2 - s.width / 2, f = r.y + r.height / 2 - s.height / 2, d = r[a] / 2 - s[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: u,
        y: r.y - s.height
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
        x: r.x - s.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (nr(e)) {
    case "start":
      h[o] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      h[o] += d * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const ip = async (t, e, n) => {
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
  } = nl(c, r, l), d = r, h = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: p,
      fn: _
    } = a[g], {
      x: b,
      y: k,
      data: I,
      reset: q
    } = await _({
      x: u,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: s,
      middlewareData: h,
      rects: c,
      platform: o,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = b ?? u, f = k ?? f, h = {
      ...h,
      [p]: {
        ...h[p],
        ...I
      }
    }, q && m <= 50) {
      m++, typeof q == "object" && (q.placement && (d = q.placement), q.rects && (c = q.rects === !0 ? await o.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : q.rects), {
        x: u,
        y: f
      } = nl(c, d, l)), g = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: s,
    middlewareData: h
  };
};
async function eo(t, e) {
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
    altBoundary: d = !1,
    padding: h = 0
  } = tr(e, t), m = eu(h), p = a[d ? f === "floating" ? "reference" : "floating" : f], _ = Ts(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(p))) == null || n ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = f === "floating" ? {
    ...o.floating,
    x: r,
    y: s
  } : o.reference, k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), I = await (i.isElement == null ? void 0 : i.isElement(k)) ? await (i.getScale == null ? void 0 : i.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, q = Ts(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: k,
    strategy: l
  }) : b);
  return {
    top: (_.top - q.top + m.top) / I.y,
    bottom: (q.bottom - _.bottom + m.bottom) / I.y,
    left: (_.left - q.left + m.left) / I.x,
    right: (q.right - _.right + m.right) / I.x
  };
}
const op = (t) => ({
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
    } = tr(t, e) || {};
    if (c == null)
      return {};
    const f = eu(u), d = {
      x: n,
      y: r
    }, h = Qi(s), m = Ji(h), g = await o.getDimensions(c), p = h === "y", _ = p ? "top" : "left", b = p ? "bottom" : "right", k = p ? "clientHeight" : "clientWidth", I = i.reference[m] + i.reference[h] - d[h] - i.floating[m], q = d[h] - i.reference[h], P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let D = P ? P[k] : 0;
    (!D || !await (o.isElement == null ? void 0 : o.isElement(P))) && (D = a.floating[k] || i.floating[m]);
    const Z = I / 2 - q / 2, me = D / 2 - g[m] / 2 - 1, fe = hn(f[_], me), A = hn(f[b], me), T = fe, M = D - g[m] - A, W = D / 2 - g[m] / 2 + Z, j = Ii(T, W, M), G = !l.arrow && nr(s) != null && W != j && i.reference[m] / 2 - (W < T ? fe : A) - g[m] / 2 < 0, ce = G ? W < T ? T - W : M - W : 0;
    return {
      [h]: d[h] - ce,
      data: {
        [h]: j,
        centerOffset: W - j + ce
      },
      reset: G
    };
  }
}), lp = function(t) {
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
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...g
      } = tr(t, e), p = pn(r), _ = pn(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = f || (_ || !m ? [Cs(o)] : tp(o));
      !f && h !== "none" && k.push(...rp(o, m, h, b));
      const I = [o, ...k], q = await eo(e, g), P = [];
      let D = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (c && P.push(q[p]), u) {
        const A = ep(r, i, b);
        P.push(q[A[0]], q[A[1]]);
      }
      if (D = [...D, {
        placement: r,
        overflows: P
      }], !P.every((A) => A <= 0)) {
        var Z, me;
        const A = (((Z = s.flip) == null ? void 0 : Z.index) || 0) + 1, T = I[A];
        if (T)
          return {
            data: {
              index: A,
              overflows: D
            },
            reset: {
              placement: T
            }
          };
        let M = (me = D.filter((W) => W.overflows[0] <= 0).sort((W, j) => W.overflows[1] - j.overflows[1])[0]) == null ? void 0 : me.placement;
        if (!M)
          switch (d) {
            case "bestFit": {
              var fe;
              const W = (fe = D.map((j) => [j.placement, j.overflows.filter((G) => G > 0).reduce((G, ce) => G + ce, 0)]).sort((j, G) => j[1] - G[1])[0]) == null ? void 0 : fe[0];
              W && (M = W);
              break;
            }
            case "initialPlacement":
              M = o;
              break;
          }
        if (r !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function ap(t, e) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = pn(n), a = nr(n), l = Br(n) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = i && l ? -1 : 1, f = tr(e, t);
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
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), l ? {
    x: h * u,
    y: d * c
  } : {
    x: d * c,
    y: h * u
  };
}
const cp = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r
      } = e, s = await ap(e, t);
      return {
        x: n + s.x,
        y: r + s.y,
        data: s
      };
    }
  };
}, up = function(t) {
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
              x: _,
              y: b
            } = p;
            return {
              x: _,
              y: b
            };
          }
        },
        ...l
      } = tr(t, e), c = {
        x: n,
        y: r
      }, u = await eo(e, l), f = Br(pn(s)), d = Qc(f);
      let h = c[d], m = c[f];
      if (i) {
        const p = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", b = h + u[p], k = h - u[_];
        h = Ii(b, h, k);
      }
      if (o) {
        const p = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", b = m + u[p], k = m - u[_];
        m = Ii(b, m, k);
      }
      const g = a.fn({
        ...e,
        [d]: h,
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
}, fp = function(t) {
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
      } = tr(t, e), l = await eo(e, a), c = pn(n), u = nr(n), f = Br(n) === "y", {
        width: d,
        height: h
      } = r.floating;
      let m, g;
      c === "top" || c === "bottom" ? (m = c, g = u === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = c, m = u === "end" ? "top" : "bottom");
      const p = h - l[m], _ = d - l[g], b = !e.middlewareData.shift;
      let k = p, I = _;
      if (f) {
        const P = d - l.left - l.right;
        I = u || b ? hn(_, P) : P;
      } else {
        const P = h - l.top - l.bottom;
        k = u || b ? hn(p, P) : P;
      }
      if (b && !u) {
        const P = Ct(l.left, 0), D = Ct(l.right, 0), Z = Ct(l.top, 0), me = Ct(l.bottom, 0);
        f ? I = d - 2 * (P !== 0 || D !== 0 ? P + D : Ct(l.left, l.right)) : k = h - 2 * (Z !== 0 || me !== 0 ? Z + me : Ct(l.top, l.bottom));
      }
      await o({
        ...e,
        availableWidth: I,
        availableHeight: k
      });
      const q = await s.getDimensions(i.floating);
      return d !== q.width || h !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gn(t) {
  return tu(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Tt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function tn(t) {
  var e;
  return (e = (tu(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function tu(t) {
  return t instanceof Node || t instanceof Tt(t).Node;
}
function en(t) {
  return t instanceof Element || t instanceof Tt(t).Element;
}
function qt(t) {
  return t instanceof HTMLElement || t instanceof Tt(t).HTMLElement;
}
function rl(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Tt(t).ShadowRoot;
}
function zr(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: s
  } = Rt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(s);
}
function dp(t) {
  return ["table", "td", "th"].includes(gn(t));
}
function to(t) {
  const e = no(), n = Rt(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function hp(t) {
  let e = Jn(t);
  for (; qt(e) && !zs(e); ) {
    if (to(e))
      return e;
    e = Jn(e);
  }
  return null;
}
function no() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function zs(t) {
  return ["html", "body", "#document"].includes(gn(t));
}
function Rt(t) {
  return Tt(t).getComputedStyle(t);
}
function Zs(t) {
  return en(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Jn(t) {
  if (gn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    rl(t) && t.host || // Fallback.
    tn(t)
  );
  return rl(e) ? e.host : e;
}
function nu(t) {
  const e = Jn(t);
  return zs(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : qt(e) && zr(e) ? e : nu(e);
}
function xr(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const s = nu(t), i = s === ((r = t.ownerDocument) == null ? void 0 : r.body), o = Tt(s);
  return i ? e.concat(o, o.visualViewport || [], zr(s) ? s : [], o.frameElement && n ? xr(o.frameElement) : []) : e.concat(s, xr(s));
}
function ru(t) {
  const e = Rt(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const s = qt(t), i = s ? t.offsetWidth : n, o = s ? t.offsetHeight : r, a = ws(n) !== i || ws(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function ro(t) {
  return en(t) ? t : t.contextElement;
}
function Gn(t) {
  const e = ro(t);
  if (!qt(e))
    return mn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = ru(e);
  let o = (i ? ws(n.width) : n.width) / r, a = (i ? ws(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const mp = /* @__PURE__ */ mn(0);
function su(t) {
  const e = Tt(t);
  return !no() || !e.visualViewport ? mp : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function pp(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== Tt(t) ? !1 : e;
}
function Rn(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect(), i = ro(t);
  let o = mn(1);
  e && (r ? en(r) && (o = Gn(r)) : o = Gn(t));
  const a = pp(i, n, r) ? su(i) : mn(0);
  let l = (s.left + a.x) / o.x, c = (s.top + a.y) / o.y, u = s.width / o.x, f = s.height / o.y;
  if (i) {
    const d = Tt(i), h = r && en(r) ? Tt(r) : r;
    let m = d.frameElement;
    for (; m && r && h !== d; ) {
      const g = Gn(m), p = m.getBoundingClientRect(), _ = Rt(m), b = p.left + (m.clientLeft + parseFloat(_.paddingLeft)) * g.x, k = p.top + (m.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, f *= g.y, l += b, c += k, m = Tt(m).frameElement;
    }
  }
  return Ts({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function gp(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: r
  } = t;
  const s = qt(n), i = tn(n);
  if (n === i)
    return e;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = mn(1);
  const l = mn(0);
  if ((s || !s && r !== "fixed") && ((gn(n) !== "body" || zr(i)) && (o = Zs(n)), qt(n))) {
    const c = Rn(n);
    a = Gn(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: e.width * a.x,
    height: e.height * a.y,
    x: e.x * a.x - o.scrollLeft * a.x + l.x,
    y: e.y * a.y - o.scrollTop * a.y + l.y
  };
}
function _p(t) {
  return Array.from(t.getClientRects());
}
function iu(t) {
  return Rn(tn(t)).left + Zs(t).scrollLeft;
}
function bp(t) {
  const e = tn(t), n = Zs(t), r = t.ownerDocument.body, s = Ct(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Ct(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + iu(t);
  const a = -n.scrollTop;
  return Rt(r).direction === "rtl" && (o += Ct(e.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
function vp(t, e) {
  const n = Tt(t), r = tn(t), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = no();
    (!c || c && e === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
function yp(t, e) {
  const n = Rn(t, !0, e === "fixed"), r = n.top + t.clientTop, s = n.left + t.clientLeft, i = qt(t) ? Gn(t) : mn(1), o = t.clientWidth * i.x, a = t.clientHeight * i.y, l = s * i.x, c = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function sl(t, e, n) {
  let r;
  if (e === "viewport")
    r = vp(t, n);
  else if (e === "document")
    r = bp(tn(t));
  else if (en(e))
    r = yp(e, n);
  else {
    const s = su(t);
    r = {
      ...e,
      x: e.x - s.x,
      y: e.y - s.y
    };
  }
  return Ts(r);
}
function ou(t, e) {
  const n = Jn(t);
  return n === e || !en(n) || zs(n) ? !1 : Rt(n).position === "fixed" || ou(n, e);
}
function kp(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = xr(t, [], !1).filter((a) => en(a) && gn(a) !== "body"), s = null;
  const i = Rt(t).position === "fixed";
  let o = i ? Jn(t) : t;
  for (; en(o) && !zs(o); ) {
    const a = Rt(o), l = to(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || zr(o) && !l && ou(t, o)) ? r = r.filter((u) => u !== o) : s = a, o = Jn(o);
  }
  return e.set(t, r), r;
}
function wp(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = t;
  const o = [...n === "clippingAncestors" ? kp(e, this._c) : [].concat(n), r], a = o[0], l = o.reduce((c, u) => {
    const f = sl(e, u, s);
    return c.top = Ct(f.top, c.top), c.right = hn(f.right, c.right), c.bottom = hn(f.bottom, c.bottom), c.left = Ct(f.left, c.left), c;
  }, sl(e, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Cp(t) {
  return ru(t);
}
function Tp(t, e, n) {
  const r = qt(e), s = tn(e), i = n === "fixed", o = Rn(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = mn(0);
  if (r || !r && !i)
    if ((gn(e) !== "body" || zr(s)) && (a = Zs(e)), r) {
      const c = Rn(e, !0, i, e);
      l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
    } else
      s && (l.x = iu(s));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function il(t, e) {
  return !qt(t) || Rt(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function lu(t, e) {
  const n = Tt(t);
  if (!qt(t))
    return n;
  let r = il(t, e);
  for (; r && dp(r) && Rt(r).position === "static"; )
    r = il(r, e);
  return r && (gn(r) === "html" || gn(r) === "body" && Rt(r).position === "static" && !to(r)) ? n : r || hp(t) || n;
}
const Sp = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: r
  } = t;
  const s = this.getOffsetParent || lu, i = this.getDimensions;
  return {
    reference: Tp(e, await s(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function Ep(t) {
  return Rt(t).direction === "rtl";
}
const Ap = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gp,
  getDocumentElement: tn,
  getClippingRect: wp,
  getOffsetParent: lu,
  getElementRects: Sp,
  getClientRects: _p,
  getDimensions: Cp,
  getScale: Gn,
  isElement: en,
  isRTL: Ep
};
function Op(t, e) {
  let n = null, r;
  const s = tn(t);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: u,
      width: f,
      height: d
    } = t.getBoundingClientRect();
    if (a || e(), !f || !d)
      return;
    const h = $r(u), m = $r(s.clientWidth - (c + f)), g = $r(s.clientHeight - (u + d)), p = $r(c), b = {
      rootMargin: -h + "px " + -m + "px " + -g + "px " + -p + "px",
      threshold: Ct(0, hn(1, l)) || 1
    };
    let k = !0;
    function I(q) {
      const P = q[0].intersectionRatio;
      if (P !== l) {
        if (!k)
          return o();
        P ? o(!1, P) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      k = !1;
    }
    try {
      n = new IntersectionObserver(I, {
        ...b,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(I, b);
    }
    n.observe(t);
  }
  return o(!0), i;
}
function Ip(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = ro(t), u = s || i ? [...c ? xr(c) : [], ...xr(e)] : [];
  u.forEach((_) => {
    s && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const f = c && a ? Op(c, n) : null;
  let d = -1, h = null;
  o && (h = new ResizeObserver((_) => {
    let [b] = _;
    b && b.target === c && h && (h.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      h && h.observe(e);
    })), n();
  }), c && !l && h.observe(c), h.observe(e));
  let m, g = l ? Rn(t) : null;
  l && p();
  function p() {
    const _ = Rn(t);
    g && (_.x !== g.x || _.y !== g.y || _.width !== g.width || _.height !== g.height) && n(), g = _, m = requestAnimationFrame(p);
  }
  return n(), () => {
    u.forEach((_) => {
      s && _.removeEventListener("scroll", n), i && _.removeEventListener("resize", n);
    }), f && f(), h && h.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const Rp = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: Ap,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return ip(t, e, {
    ...s,
    platform: i
  });
}, Np = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, Pp = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function Mp(t, e, n = {}) {
  if (!e || !t)
    return {
      destroy: yt
    };
  const r = { ...Np, ...n }, s = e.querySelector("[data-arrow=true]"), i = [];
  r.flip && i.push(lp({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const o = ae(s) ? s.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const l = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += o), i.push(cp(l));
  }
  i.push(up({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), s && i.push(op({ element: s, padding: 8 })), i.push(fp({
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
    Rp(t, e, {
      placement: l,
      middleware: i,
      strategy: c
    }).then((u) => {
      const f = Math.round(u.x), d = Math.round(u.y);
      if (Object.assign(e.style, {
        top: `${d}px`,
        left: `${f}px`
      }), ae(s) && u.middlewareData.arrow) {
        const { x: h, y: m } = u.middlewareData.arrow, g = u.placement.split("-")[0];
        Object.assign(s.style, {
          position: "absolute",
          left: h != null ? `${h}px` : "",
          top: m != null ? `${m}px` : "",
          [g]: `calc(100% - ${o}px)`,
          transform: Pp[g],
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
    destroy: Ip(t, e, a)
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var au = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Ss = /* @__PURE__ */ au.join(","), cu = typeof Element > "u", Nn = cu ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Es = !cu && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t == null ? void 0 : t.ownerDocument;
}, As = function t(e, n) {
  var r;
  n === void 0 && (n = !0);
  var s = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), i = s === "" || s === "true", o = i || n && e && t(e.parentNode);
  return o;
}, jp = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, uu = function(e, n, r) {
  if (As(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(Ss));
  return n && Nn.call(e, Ss) && s.unshift(e), s = s.filter(r), s;
}, fu = function t(e, n, r) {
  for (var s = [], i = Array.from(e); i.length; ) {
    var o = i.shift();
    if (!As(o, !1))
      if (o.tagName === "SLOT") {
        var a = o.assignedElements(), l = a.length ? a : o.children, c = t(l, !0, r);
        r.flatten ? s.push.apply(s, c) : s.push({
          scopeParent: o,
          candidates: c
        });
      } else {
        var u = Nn.call(o, Ss);
        u && r.filter(o) && (n || !e.includes(o)) && s.push(o);
        var f = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), d = !As(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (f && d) {
          var h = t(f === !0 ? o.children : f.children, !0, r);
          r.flatten ? s.push.apply(s, h) : s.push({
            scopeParent: o,
            candidates: h
          });
        } else
          i.unshift.apply(i, o.children);
      }
  }
  return s;
}, du = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, yn = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || jp(e)) && !du(e) ? 0 : e.tabIndex;
}, Dp = function(e, n) {
  var r = yn(e);
  return r < 0 && n && !du(e) ? 0 : r;
}, xp = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, hu = function(e) {
  return e.tagName === "INPUT";
}, Lp = function(e) {
  return hu(e) && e.type === "hidden";
}, Fp = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Bp = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, zp = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Es(e), r = function(a) {
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
  var i = Bp(s, e.form);
  return !i || i === e;
}, Zp = function(e) {
  return hu(e) && e.type === "radio";
}, Vp = function(e) {
  return Zp(e) && !zp(e);
}, Wp = function(e) {
  var n, r = e && Es(e), s = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== e) {
    var o, a, l;
    for (i = !!((o = s) !== null && o !== void 0 && (a = o.ownerDocument) !== null && a !== void 0 && a.contains(s) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && s; ) {
      var c, u, f;
      r = Es(s), s = (c = r) === null || c === void 0 ? void 0 : c.host, i = !!((u = s) !== null && u !== void 0 && (f = u.ownerDocument) !== null && f !== void 0 && f.contains(s));
    }
  }
  return i;
}, ol = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, s = n.height;
  return r === 0 && s === 0;
}, Hp = function(e, n) {
  var r = n.displayCheck, s = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var i = Nn.call(e, "details>summary:first-of-type"), o = i ? e.parentElement : e;
  if (Nn.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var a = e; e; ) {
        var l = e.parentElement, c = Es(e);
        if (l && !l.shadowRoot && s(l) === !0)
          return ol(e);
        e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l;
      }
      e = a;
    }
    if (Wp(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ol(e);
  return !1;
}, Gp = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var s = n.children.item(r);
          if (s.tagName === "LEGEND")
            return Nn.call(n, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Os = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  As(n) || Lp(n) || Hp(n, e) || // For a details element with a summary, the summary element gets the focus
  Fp(n) || Gp(n));
}, Ni = function(e, n) {
  return !(Vp(n) || yn(n) < 0 || !Os(e, n));
}, Up = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Kp = function t(e) {
  var n = [], r = [];
  return e.forEach(function(s, i) {
    var o = !!s.scopeParent, a = o ? s.scopeParent : s, l = Dp(a, o), c = o ? t(s.candidates) : a;
    l === 0 ? o ? n.push.apply(n, c) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: s,
      isScope: o,
      content: c
    });
  }), r.sort(xp).reduce(function(s, i) {
    return i.isScope ? s.push.apply(s, i.content) : s.push(i.content), s;
  }, []).concat(n);
}, qp = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = fu([e], n.includeContainer, {
    filter: Ni.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Up
  }) : r = uu(e, n.includeContainer, Ni.bind(null, n)), Kp(r);
}, $p = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = fu([e], n.includeContainer, {
    filter: Os.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = uu(e, n.includeContainer, Os.bind(null, n)), r;
}, Fn = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return Nn.call(e, Ss) === !1 ? !1 : Ni(n, e);
}, Yp = /* @__PURE__ */ au.concat("iframe").join(","), Qs = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return Nn.call(e, Yp) === !1 ? !1 : Os(n, e);
};
/*!
* focus-trap 7.5.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ll(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function al(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ll(Object(n), !0).forEach(function(r) {
      Xp(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ll(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Xp(t, e, n) {
  return e = Qp(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Jp(t, e) {
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
function Qp(t) {
  var e = Jp(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var cl = {
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
}, eg = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, tg = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, vr = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, ng = function(e) {
  return vr(e) && !e.shiftKey;
}, rg = function(e) {
  return vr(e) && e.shiftKey;
}, ul = function(e) {
  return setTimeout(e, 0);
}, fl = function(e, n) {
  var r = -1;
  return e.every(function(s, i) {
    return n(s) ? (r = i, !1) : !0;
  }), r;
}, fr = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, Yr = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, sg = [], ig = function(e, n) {
  var r = (n == null ? void 0 : n.document) || document, s = (n == null ? void 0 : n.trapStack) || sg, i = al({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: ng,
    isKeyBackward: rg
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
  }, a, l = function(A, T, M) {
    return A && A[T] !== void 0 ? A[T] : i[M || T];
  }, c = function(A, T) {
    var M = typeof (T == null ? void 0 : T.composedPath) == "function" ? T.composedPath() : void 0;
    return o.containerGroups.findIndex(function(W) {
      var j = W.container, G = W.tabbableNodes;
      return j.contains(A) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (M == null ? void 0 : M.includes(j)) || G.find(function(ce) {
        return ce === A;
      });
    });
  }, u = function(A) {
    var T = i[A];
    if (typeof T == "function") {
      for (var M = arguments.length, W = new Array(M > 1 ? M - 1 : 0), j = 1; j < M; j++)
        W[j - 1] = arguments[j];
      T = T.apply(void 0, W);
    }
    if (T === !0 && (T = void 0), !T) {
      if (T === void 0 || T === !1)
        return T;
      throw new Error("`".concat(A, "` was specified but was not a node, or did not return a node"));
    }
    var G = T;
    if (typeof T == "string" && (G = r.querySelector(T), !G))
      throw new Error("`".concat(A, "` as selector refers to no known node"));
    return G;
  }, f = function() {
    var A = u("initialFocus");
    if (A === !1)
      return !1;
    if (A === void 0 || !Qs(A, i.tabbableOptions))
      if (c(r.activeElement) >= 0)
        A = r.activeElement;
      else {
        var T = o.tabbableGroups[0], M = T && T.firstTabbableNode;
        A = M || u("fallbackFocus");
      }
    if (!A)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return A;
  }, d = function() {
    if (o.containerGroups = o.containers.map(function(A) {
      var T = qp(A, i.tabbableOptions), M = $p(A, i.tabbableOptions), W = T.length > 0 ? T[0] : void 0, j = T.length > 0 ? T[T.length - 1] : void 0, G = M.find(function(we) {
        return Fn(we);
      }), ce = M.slice().reverse().find(function(we) {
        return Fn(we);
      }), ke = !!T.find(function(we) {
        return yn(we) > 0;
      });
      return {
        container: A,
        tabbableNodes: T,
        focusableNodes: M,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: ke,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: W,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: j,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: G,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: ce,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(et) {
          var qe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, rt = T.indexOf(et);
          return rt < 0 ? qe ? M.slice(M.indexOf(et) + 1).find(function(K) {
            return Fn(K);
          }) : M.slice(0, M.indexOf(et)).reverse().find(function(K) {
            return Fn(K);
          }) : T[rt + (qe ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(A) {
      return A.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(A) {
      return A.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, h = function fe(A) {
    if (A !== !1 && A !== r.activeElement) {
      if (!A || !A.focus) {
        fe(f());
        return;
      }
      A.focus({
        preventScroll: !!i.preventScroll
      }), o.mostRecentlyFocusedNode = A, eg(A) && A.select();
    }
  }, m = function(A) {
    var T = u("setReturnFocus", A);
    return T || (T === !1 ? !1 : A);
  }, g = function(A) {
    var T = A.target, M = A.event, W = A.isBackward, j = W === void 0 ? !1 : W;
    T = T || Yr(M), d();
    var G = null;
    if (o.tabbableGroups.length > 0) {
      var ce = c(T, M), ke = ce >= 0 ? o.containerGroups[ce] : void 0;
      if (ce < 0)
        j ? G = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : G = o.tabbableGroups[0].firstTabbableNode;
      else if (j) {
        var we = fl(o.tabbableGroups, function(Re) {
          var tt = Re.firstTabbableNode;
          return T === tt;
        });
        if (we < 0 && (ke.container === T || Qs(T, i.tabbableOptions) && !Fn(T, i.tabbableOptions) && !ke.nextTabbableNode(T, !1)) && (we = ce), we >= 0) {
          var et = we === 0 ? o.tabbableGroups.length - 1 : we - 1, qe = o.tabbableGroups[et];
          G = yn(T) >= 0 ? qe.lastTabbableNode : qe.lastDomTabbableNode;
        } else
          vr(M) || (G = ke.nextTabbableNode(T, !1));
      } else {
        var rt = fl(o.tabbableGroups, function(Re) {
          var tt = Re.lastTabbableNode;
          return T === tt;
        });
        if (rt < 0 && (ke.container === T || Qs(T, i.tabbableOptions) && !Fn(T, i.tabbableOptions) && !ke.nextTabbableNode(T)) && (rt = ce), rt >= 0) {
          var K = rt === o.tabbableGroups.length - 1 ? 0 : rt + 1, V = o.tabbableGroups[K];
          G = yn(T) >= 0 ? V.firstTabbableNode : V.firstDomTabbableNode;
        } else
          vr(M) || (G = ke.nextTabbableNode(T));
      }
    } else
      G = u("fallbackFocus");
    return G;
  }, p = function(A) {
    var T = Yr(A);
    if (!(c(T, A) >= 0)) {
      if (fr(i.clickOutsideDeactivates, A)) {
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
      fr(i.allowOutsideClick, A) || A.preventDefault();
    }
  }, _ = function(A) {
    var T = Yr(A), M = c(T, A) >= 0;
    if (M || T instanceof Document)
      M && (o.mostRecentlyFocusedNode = T);
    else {
      A.stopImmediatePropagation();
      var W, j = !0;
      if (o.mostRecentlyFocusedNode)
        if (yn(o.mostRecentlyFocusedNode) > 0) {
          var G = c(o.mostRecentlyFocusedNode), ce = o.containerGroups[G].tabbableNodes;
          if (ce.length > 0) {
            var ke = ce.findIndex(function(we) {
              return we === o.mostRecentlyFocusedNode;
            });
            ke >= 0 && (i.isKeyForward(o.recentNavEvent) ? ke + 1 < ce.length && (W = ce[ke + 1], j = !1) : ke - 1 >= 0 && (W = ce[ke - 1], j = !1));
          }
        } else
          o.containerGroups.some(function(we) {
            return we.tabbableNodes.some(function(et) {
              return yn(et) > 0;
            });
          }) || (j = !1);
      else
        j = !1;
      j && (W = g({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(o.recentNavEvent)
      })), h(W || o.mostRecentlyFocusedNode || f());
    }
    o.recentNavEvent = void 0;
  }, b = function(A) {
    var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = A;
    var M = g({
      event: A,
      isBackward: T
    });
    M && (vr(A) && A.preventDefault(), h(M));
  }, k = function(A) {
    if (tg(A) && fr(i.escapeDeactivates, A) !== !1) {
      A.preventDefault(), a.deactivate();
      return;
    }
    (i.isKeyForward(A) || i.isKeyBackward(A)) && b(A, i.isKeyBackward(A));
  }, I = function(A) {
    var T = Yr(A);
    c(T, A) >= 0 || fr(i.clickOutsideDeactivates, A) || fr(i.allowOutsideClick, A) || (A.preventDefault(), A.stopImmediatePropagation());
  }, q = function() {
    if (o.active)
      return cl.activateTrap(s, a), o.delayInitialFocusTimer = i.delayInitialFocus ? ul(function() {
        h(f());
      }) : h(f()), r.addEventListener("focusin", _, !0), r.addEventListener("mousedown", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", I, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), a;
  }, P = function() {
    if (o.active)
      return r.removeEventListener("focusin", _, !0), r.removeEventListener("mousedown", p, !0), r.removeEventListener("touchstart", p, !0), r.removeEventListener("click", I, !0), r.removeEventListener("keydown", k, !0), a;
  }, D = function(A) {
    var T = A.some(function(M) {
      var W = Array.from(M.removedNodes);
      return W.some(function(j) {
        return j === o.mostRecentlyFocusedNode;
      });
    });
    T && h(f());
  }, Z = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(D) : void 0, me = function() {
    Z && (Z.disconnect(), o.active && !o.paused && o.containers.map(function(A) {
      Z.observe(A, {
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
    activate: function(A) {
      if (o.active)
        return this;
      var T = l(A, "onActivate"), M = l(A, "onPostActivate"), W = l(A, "checkCanFocusTrap");
      W || d(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = r.activeElement, T == null || T();
      var j = function() {
        W && d(), q(), me(), M == null || M();
      };
      return W ? (W(o.containers.concat()).then(j, j), this) : (j(), this);
    },
    deactivate: function(A) {
      if (!o.active)
        return this;
      var T = al({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, A);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, P(), o.active = !1, o.paused = !1, me(), cl.deactivateTrap(s, a);
      var M = l(T, "onDeactivate"), W = l(T, "onPostDeactivate"), j = l(T, "checkCanReturnFocus"), G = l(T, "returnFocus", "returnFocusOnDeactivate");
      M == null || M();
      var ce = function() {
        ul(function() {
          G && h(m(o.nodeFocusedBeforeActivation)), W == null || W();
        });
      };
      return G && j ? (j(m(o.nodeFocusedBeforeActivation)).then(ce, ce), this) : (ce(), this);
    },
    pause: function(A) {
      if (o.paused || !o.active)
        return this;
      var T = l(A, "onPause"), M = l(A, "onPostPause");
      return o.paused = !0, T == null || T(), P(), me(), M == null || M(), this;
    },
    unpause: function(A) {
      if (!o.paused || !o.active)
        return this;
      var T = l(A, "onUnpause"), M = l(A, "onPostUnpause");
      return o.paused = !1, T == null || T(), d(), q(), me(), M == null || M(), this;
    },
    updateContainerElements: function(A) {
      var T = [].concat(A).filter(Boolean);
      return o.containers = T.map(function(M) {
        return typeof M == "string" ? r.querySelector(M) : M;
      }), o.active && d(), me(), this;
    }
  }, a.updateContainerElements(e), a;
};
function og(t = {}) {
  let e;
  const { immediate: n, ...r } = t, s = Ne(!1), i = Ne(!1), o = (f) => e == null ? void 0 : e.activate(f), a = (f) => {
    e == null || e.deactivate(f);
  }, l = () => {
    e && (e.pause(), i.set(!0));
  }, c = () => {
    e && (e.unpause(), i.set(!1));
  };
  return {
    useFocusTrap: (f) => (e = ig(f, {
      ...r,
      onActivate() {
        var d;
        s.set(!0), (d = t.onActivate) == null || d.call(t);
      },
      onDeactivate() {
        var d;
        s.set(!1), (d = t.onDeactivate) == null || d.call(t);
      }
    }), n && o(), {
      destroy() {
        a(), e = void 0;
      }
    }),
    hasFocus: Jo(s),
    isPaused: Jo(i),
    activate: o,
    deactivate: a,
    pause: l,
    unpause: c
  };
}
const lg = {
  floating: {},
  focusTrap: {},
  clickOutside: {},
  escapeKeydown: {},
  portal: "body"
}, Pi = (t, e) => {
  t.dataset.escapee = "";
  const { anchorElement: n, open: r, options: s } = e;
  if (!n || !r || !s)
    return { destroy: yt };
  const i = { ...lg, ...s }, o = [];
  if (i.portal !== null) {
    const l = ag(t, i.portal);
    l != null && l.destroy && o.push(l.destroy);
  }
  if (o.push(Mp(n, t, i.floating).destroy), i.focusTrap !== null) {
    const { useFocusTrap: l } = og({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: t,
      ...i.focusTrap
    }), c = l(t);
    c != null && c.destroy && o.push(c.destroy);
  }
  i.clickOutside !== null && o.push($m(t, {
    enabled: r,
    handler: (l) => {
      l.defaultPrevented || ae(n) && !n.contains(l.target) && (r.set(!1), n.focus());
    },
    ...i.clickOutside
  }).destroy), i.escapeKeydown !== null && o.push(Xm(t, {
    enabled: r,
    handler: (l) => {
      l.defaultPrevented || r.set(!1);
    },
    ...i.escapeKeydown
  }).destroy);
  const a = pt(...o);
  return {
    destroy() {
      a();
    }
  };
}, ag = (t, e = "body") => {
  let n;
  if (!ae(e) && typeof e != "string")
    return {
      destroy: yt
    };
  async function r(i) {
    if (e = i, typeof e == "string") {
      if (n = document.querySelector(e), n === null && (await Zn(), n = document.querySelector(e)), n === null)
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
};
function mu() {
  return {
    elements: {
      root: st("label", {
        action: (e) => ({
          destroy: Te(e, "mousedown", (r) => {
            !r.defaultPrevented && r.detail > 1 && r.preventDefault();
          })
        })
      })
    }
  };
}
const cg = {
  ltr: [...Dr, xe.ARROW_RIGHT],
  rtl: [...Dr, xe.ARROW_LEFT]
}, ug = {
  ltr: [xe.ARROW_LEFT],
  rtl: [xe.ARROW_RIGHT]
}, fg = {
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
function dg(t) {
  const { name: e, selector: n } = Yi(t.selector), { preventScroll: r, arrowSize: s, positioning: i, closeOnEscape: o, closeOnOutsideClick: a, portal: l, forceVisible: c, typeahead: u } = t.rootOptions, f = t.rootOpen, d = t.rootActiveTrigger, h = t.nextFocusable, m = t.prevFocusable, g = Ne(!1), p = Ne(0), _ = Ne(null), b = Ne("right"), k = Ne(null), I = $c([b, _], ([E, z]) => (x) => E === (z == null ? void 0 : z.side) && hg(x, z == null ? void 0 : z.area)), { typed: q, handleTypeaheadSearch: P } = Xc(), D = {
    menu: wn(),
    trigger: wn()
  }, Z = Ei({
    open: f,
    forceVisible: c,
    activeTrigger: d
  }), me = st(e(), {
    stores: [Z, l],
    returned: ([E, z]) => ({
      role: "menu",
      hidden: E ? void 0 : !0,
      style: Xt({
        display: E ? void 0 : "none"
      }),
      id: D.menu,
      "aria-labelledby": D.trigger,
      "data-state": E ? "open" : "closed",
      "data-portal": z ? "" : void 0,
      tabindex: -1
    }),
    action: (E) => {
      let z = yt;
      const x = At([Z, d, i, a, l, o], ([pe, Ve, Ue, We, Ze, De]) => {
        z(), !(!pe || !Ve) && Zn().then(() => {
          hr(E, n);
          const $e = Pi(E, {
            anchorElement: Ve,
            open: f,
            options: {
              floating: Ue,
              clickOutside: We ? void 0 : null,
              portal: Jc(E, Ze),
              escapeKeydown: De ? void 0 : null
            }
          });
          $e && $e.destroy && (z = $e.destroy);
        });
      }), ee = pt(Te(E, "keydown", (pe) => {
        const Ve = pe.target, Ue = pe.currentTarget;
        if (!ae(Ve) || !ae(Ue) || !(Ve.closest('[role="menu"]') === Ue))
          return;
        if (Ti.includes(pe.key) && hl(pe), pe.key === xe.TAB) {
          pe.preventDefault(), f.set(!1), dl(pe, h, m);
          return;
        }
        const Ze = pe.key.length === 1;
        !(pe.ctrlKey || pe.altKey || pe.metaKey) && Ze && Se(u) === !0 && P(pe.key, vn(Ue));
      }));
      return {
        destroy() {
          x(), ee(), z();
        }
      };
    }
  }), fe = st(e("trigger"), {
    stores: [f],
    returned: ([E]) => ({
      "aria-controls": D.menu,
      "aria-expanded": E,
      "data-state": E ? "open" : "closed",
      id: D.trigger,
      tabindex: 0
    }),
    action: (E) => (Xr(E), {
      destroy: pt(Te(E, "click", (x) => {
        const ee = Se(f), pe = x.currentTarget;
        ae(pe) && (qe(pe), ee || x.preventDefault());
      }), Te(E, "keydown", (x) => {
        const ee = x.currentTarget;
        if (!ae(ee) || !(Dr.includes(x.key) || x.key === xe.ARROW_DOWN))
          return;
        x.preventDefault(), qe(ee);
        const pe = ee.getAttribute("aria-controls");
        if (!pe)
          return;
        const Ve = document.getElementById(pe);
        if (!Ve)
          return;
        const Ue = vn(Ve);
        Ue.length && Ye(Ue[0]);
      }))
    })
  }), A = st(e("arrow"), {
    stores: s,
    returned: (E) => ({
      "data-arrow": !0,
      style: Xt({
        position: "absolute",
        width: `var(--arrow-size, ${E}px)`,
        height: `var(--arrow-size, ${E}px)`
      })
    })
  }), T = st(e("item"), {
    returned: () => ({
      role: "menuitem",
      tabindex: -1,
      "data-orientation": "vertical"
    }),
    action: (E) => (hr(E, n), Xr(E), {
      destroy: pt(Te(E, "pointerdown", (x) => {
        const ee = x.currentTarget;
        if (ae(ee) && Vt(ee)) {
          x.preventDefault();
          return;
        }
      }), Te(E, "click", (x) => {
        const ee = x.currentTarget;
        if (ae(ee)) {
          if (Vt(ee)) {
            x.preventDefault();
            return;
          }
          if (x.defaultPrevented) {
            Ye(ee);
            return;
          }
          br(1).then(() => {
            f.set(!1);
          });
        }
      }), Te(E, "keydown", (x) => {
        rn(x);
      }), Te(E, "pointermove", (x) => {
        ht(x);
      }), Te(E, "pointerleave", (x) => {
        bt(x);
      }), Te(E, "focusin", (x) => {
        rt(x);
      }), Te(E, "focusout", (x) => {
        K(x);
      }))
    })
  }), M = st(e("group"), {
    returned: () => (E) => ({
      role: "group",
      "aria-labelledby": E
    })
  }), W = st(e("group-label"), {
    returned: () => (E) => ({
      id: E
    })
  }), j = {
    defaultChecked: !1,
    disabled: !1
  }, G = (E) => {
    const z = { ...j, ...E }, x = z.checked ?? Ne(z.defaultChecked ?? null), ee = In(x, z.onCheckedChange), pe = Ne(z.disabled);
    return {
      elements: {
        checkboxItem: st(e("checkbox-item"), {
          stores: [ee, pe],
          returned: ([Ue, We]) => ({
            role: "menuitemcheckbox",
            tabindex: -1,
            "data-orientation": "vertical",
            "aria-checked": or(Ue) ? "mixed" : Ue ? "true" : "false",
            "data-disabled": We ? "" : void 0,
            "data-state": Wr(Ue)
          }),
          action: (Ue) => (hr(Ue, n), Xr(Ue), {
            destroy: pt(Te(Ue, "pointerdown", (Ze) => {
              const De = Ze.currentTarget;
              if (ae(De) && Vt(De)) {
                Ze.preventDefault();
                return;
              }
            }), Te(Ue, "click", (Ze) => {
              const De = Ze.currentTarget;
              if (ae(De)) {
                if (Vt(De)) {
                  Ze.preventDefault();
                  return;
                }
                if (Ze.defaultPrevented) {
                  Ye(De);
                  return;
                }
                ee.update(($e) => or($e) ? !0 : !$e), Zn().then(() => {
                  f.set(!1);
                });
              }
            }), Te(Ue, "keydown", (Ze) => {
              rn(Ze);
            }), Te(Ue, "pointermove", (Ze) => {
              const De = Ze.currentTarget;
              if (ae(De)) {
                if (Vt(De)) {
                  Re(Ze);
                  return;
                }
                ht(Ze, De);
              }
            }), Te(Ue, "pointerleave", (Ze) => {
              bt(Ze);
            }), Te(Ue, "focusin", (Ze) => {
              rt(Ze);
            }), Te(Ue, "focusout", (Ze) => {
              K(Ze);
            }))
          })
        })
      },
      states: {
        checked: ee
      },
      options: {
        disabled: pe
      }
    };
  }, ce = (E = {}) => {
    const z = E.value ?? Ne(E.defaultValue ?? null), x = In(z, E.onValueChange), ee = st(e("radio-group"), {
      returned: () => ({
        role: "group"
      })
    }), pe = {
      disabled: !1
    }, Ve = st(e("radio-item"), {
      stores: [x],
      returned: ([We]) => (Ze) => {
        const { value: De, disabled: $e } = { ...pe, ...Ze }, St = We === De;
        return {
          disabled: $e,
          role: "menuitemradio",
          "data-state": St ? "checked" : "unchecked",
          "aria-checked": St,
          "data-disabled": $e ? "" : void 0,
          "data-value": De,
          "data-orientation": "vertical",
          tabindex: -1
        };
      },
      action: (We) => (hr(We, n), {
        destroy: pt(Te(We, "pointerdown", (De) => {
          const $e = De.currentTarget;
          if (!ae($e))
            return;
          const St = We.dataset.value;
          if (We.dataset.disabled || St === void 0) {
            De.preventDefault();
            return;
          }
        }), Te(We, "click", (De) => {
          const $e = De.currentTarget;
          if (!ae($e))
            return;
          const St = We.dataset.value;
          if (We.dataset.disabled || St === void 0) {
            De.preventDefault();
            return;
          }
          if (De.defaultPrevented) {
            if (!ae($e))
              return;
            Ye($e);
            return;
          }
          x.set(St), Zn().then(() => {
            f.set(!1);
          });
        }), Te(We, "keydown", (De) => {
          rn(De);
        }), Te(We, "pointermove", (De) => {
          const $e = De.currentTarget;
          if (!ae($e))
            return;
          const St = We.dataset.value;
          if (We.dataset.disabled || St === void 0) {
            Re(De);
            return;
          }
          ht(De, $e);
        }), Te(We, "pointerleave", (De) => {
          bt(De);
        }), Te(We, "focusin", (De) => {
          rt(De);
        }), Te(We, "focusout", (De) => {
          K(De);
        }))
      })
    }), Ue = Le(x, (We) => (Ze) => We === Ze);
    return {
      elements: {
        radioGroup: ee,
        radioItem: Ve
      },
      states: {
        value: x
      },
      helpers: {
        isChecked: Ue
      }
    };
  }, { elements: { root: ke } } = pu({
    orientation: "horizontal"
  }), we = {
    ...fg,
    disabled: !1,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  }, et = (E) => {
    const z = { ...we, ...E }, x = Ne(!1), ee = er(z), { positioning: pe, arrowSize: Ve, disabled: Ue } = ee, We = Ne(null), Ze = Ne(null), De = Ne(0), $e = {
      menu: wn(),
      trigger: wn()
    };
    Kt(() => {
      const Ke = document.getElementById($e.trigger);
      Ke && We.set(Ke);
    });
    const St = Ei({
      open: x,
      forceVisible: c,
      activeTrigger: We
    }), Hr = st(e("submenu"), {
      stores: [St],
      returned: ([Ke]) => ({
        role: "menu",
        hidden: Ke ? void 0 : !0,
        style: Xt({
          display: Ke ? void 0 : "none"
        }),
        id: $e.menu,
        "aria-labelledby": $e.trigger,
        "data-state": Ke ? "open" : "closed",
        tabindex: -1
      }),
      action: (Ke) => {
        let Et = yt;
        const wt = At([St, pe], ([Ae, nt]) => {
          if (Et(), !Ae)
            return;
          const ut = Se(We);
          ut && Zn().then(() => {
            const dt = ge(ut), Zt = Pi(Ke, {
              anchorElement: ut,
              open: x,
              options: {
                floating: nt,
                portal: ae(dt) ? dt : void 0,
                clickOutside: null,
                focusTrap: null
              }
            });
            Zt && Zt.destroy && (Et = Zt.destroy);
          });
        }), ot = pt(Te(Ke, "keydown", (Ae) => {
          if (Ae.key === xe.ESCAPE)
            return;
          const nt = Ae.target, ut = Ae.currentTarget;
          if (!ae(nt) || !ae(ut) || !(nt.closest('[role="menu"]') === ut))
            return;
          if (Ti.includes(Ae.key)) {
            Ae.stopImmediatePropagation(), hl(Ae);
            return;
          }
          const Zt = ug.ltr.includes(Ae.key), Dn = Ae.ctrlKey || Ae.altKey || Ae.metaKey, Gr = Ae.key.length === 1;
          if (Zt) {
            const vo = Se(We);
            Ae.preventDefault(), x.update(() => (vo && Ye(vo), !1));
            return;
          }
          if (Ae.key === xe.TAB) {
            Ae.preventDefault(), f.set(!1), dl(Ae, h, m);
            return;
          }
          !Dn && Gr && Se(u) === !0 && P(Ae.key, vn(ut));
        }), Te(Ke, "pointermove", (Ae) => {
          mt(Ae);
        }), Te(Ke, "focusout", (Ae) => {
          const nt = Se(We);
          if (Se(g)) {
            const ut = Ae.target, dt = document.getElementById($e.menu);
            if (!ae(dt) || !ae(ut))
              return;
            !dt.contains(ut) && ut !== nt && x.set(!1);
          } else {
            const ut = Ae.currentTarget, dt = Ae.relatedTarget;
            if (!ae(dt) || !ae(ut))
              return;
            !ut.contains(dt) && dt !== nt && x.set(!1);
          }
        }));
        return {
          destroy() {
            wt(), Et(), ot();
          }
        };
      }
    }), ef = st(e("subtrigger"), {
      stores: [x, Ue],
      returned: ([Ke, Et]) => ({
        role: "menuitem",
        id: $e.trigger,
        tabindex: -1,
        "aria-controls": $e.menu,
        "aria-expanded": Ke,
        "data-state": Ke ? "open" : "closed",
        "data-disabled": Et ? "" : void 0,
        "aria-haspopop": "menu"
      }),
      action: (Ke) => {
        hr(Ke, n), Xr(Ke);
        const Et = () => {
          ei(Ze), window.clearTimeout(Se(De)), _.set(null);
        }, wt = pt(Te(Ke, "click", (ot) => {
          if (ot.defaultPrevented)
            return;
          const Ae = ot.currentTarget;
          !ae(Ae) || Vt(Ae) || (Ye(Ae), Se(x) || x.update((nt) => nt || (We.set(Ae), !nt)));
        }), Te(Ke, "keydown", (ot) => {
          const Ae = Se(q), nt = ot.currentTarget;
          if (!(!ae(nt) || Vt(nt) || Ae.length > 0 && ot.key === xe.SPACE) && cg.ltr.includes(ot.key)) {
            if (!Se(x)) {
              nt.click(), ot.preventDefault();
              return;
            }
            const dt = nt.getAttribute("aria-controls");
            if (!dt)
              return;
            const Zt = document.getElementById(dt);
            if (!ae(Zt))
              return;
            const Dn = vn(Zt)[0];
            Ye(Dn);
          }
        }), Te(Ke, "pointermove", (ot) => {
          if (!dr(ot) || (V(ot), ot.defaultPrevented))
            return;
          const Ae = ot.currentTarget;
          if (!ae(Ae))
            return;
          Ye(Ae);
          const nt = Se(Ze);
          !Se(x) && !nt && !Vt(Ae) && Ze.set(window.setTimeout(() => {
            x.update(() => (We.set(Ae), !0)), ei(Ze);
          }, 100));
        }), Te(Ke, "pointerleave", (ot) => {
          if (!dr(ot))
            return;
          ei(Ze);
          const Ae = document.getElementById($e.menu), nt = Ae == null ? void 0 : Ae.getBoundingClientRect();
          if (nt) {
            const ut = Ae == null ? void 0 : Ae.dataset.side, dt = ut === "right", Zt = dt ? -5 : 5, Dn = nt[dt ? "left" : "right"], Gr = nt[dt ? "right" : "left"];
            _.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: ot.clientX + Zt, y: ot.clientY },
                { x: Dn, y: nt.top },
                { x: Gr, y: nt.top },
                { x: Gr, y: nt.bottom },
                { x: Dn, y: nt.bottom }
              ],
              side: ut
            }), window.clearTimeout(Se(De)), De.set(window.setTimeout(() => {
              _.set(null);
            }, 300));
          } else {
            if (tt(ot), ot.defaultPrevented)
              return;
            _.set(null);
          }
        }), Te(Ke, "focusout", (ot) => {
          const Ae = ot.currentTarget;
          if (!ae(Ae))
            return;
          bn(Ae);
          const nt = ot.relatedTarget;
          if (!ae(nt))
            return;
          const ut = Ae.getAttribute("aria-controls");
          if (!ut)
            return;
          const dt = document.getElementById(ut);
          dt && !dt.contains(nt) && x.set(!1);
        }), Te(Ke, "focusin", (ot) => {
          rt(ot);
        }));
        return {
          destroy() {
            Et(), wt();
          }
        };
      }
    }), tf = st(e("subarrow"), {
      stores: Ve,
      returned: (Ke) => ({
        "data-arrow": !0,
        style: Xt({
          position: "absolute",
          width: `var(--arrow-size, ${Ke}px)`,
          height: `var(--arrow-size, ${Ke}px)`
        })
      })
    });
    return At([f], ([Ke]) => {
      Ke || (We.set(null), x.set(!1));
    }), At([_], ([Ke]) => {
      !cn || Ke || window.clearTimeout(Se(De));
    }), At([x], ([Ke]) => {
      cn && br(1).then(() => {
        const Et = document.getElementById($e.menu);
        if (Et) {
          if (Ke && Se(g)) {
            const wt = vn(Et);
            if (!wt.length)
              return;
            Ye(wt[0]);
          }
          if (!Ke) {
            const wt = Se(k);
            wt && Et.contains(wt) && bn(wt);
          }
          if (Et && !Ke) {
            const wt = document.getElementById($e.trigger);
            if (!wt || document.activeElement === wt)
              return;
            bn(wt);
          }
        }
      });
    }), {
      elements: {
        subTrigger: ef,
        subMenu: Hr,
        subArrow: tf
      },
      states: {
        subOpen: x
      },
      options: ee
    };
  };
  Kt(() => {
    const E = document.getElementById(D.trigger);
    ae(E) && Se(f) && d.set(E);
    const z = [], x = () => g.set(!1), ee = () => {
      g.set(!0), z.push(pt(Ot(document, "pointerdown", x, { capture: !0, once: !0 }), Ot(document, "pointermove", x, { capture: !0, once: !0 })));
    }, pe = (Ve) => {
      if (Ve.key === xe.ESCAPE && Se(o)) {
        f.set(!1);
        return;
      }
    };
    return z.push(Ot(document, "keydown", ee, { capture: !0 })), z.push(Ot(document, "keydown", pe)), () => {
      z.forEach((Ve) => Ve());
    };
  }), At([f, k], ([E, z]) => {
    !E && z && bn(z);
  }), At([f, d, r], ([E, z, x]) => {
    if (!cn)
      return;
    const ee = [];
    return t.removeScroll && E && x && ee.push(Si()), !E && z && Ye(z), br(1).then(() => {
      const pe = document.getElementById(D.menu);
      if (pe && E && Se(g)) {
        if (t.disableFocusFirstItem) {
          Ye(pe);
          return;
        }
        const Ve = vn(pe);
        if (!Ve.length)
          return;
        Ye(Ve[0]);
      } else if (z)
        Ye(z);
      else {
        if (t.disableTriggerRefocus)
          return;
        const Ve = document.getElementById(D.trigger);
        if (!Ve)
          return;
        Ye(Ve);
      }
    }), () => {
      ee.forEach((pe) => pe());
    };
  }), At(f, (E) => {
    if (!cn)
      return;
    const z = () => g.set(!1), x = (ee) => {
      if (g.set(!0), ee.key === xe.ESCAPE && E) {
        f.set(!1);
        return;
      }
    };
    return pt(Ot(document, "pointerdown", z, { capture: !0, once: !0 }), Ot(document, "pointermove", z, { capture: !0, once: !0 }), Ot(document, "keydown", x, { capture: !0 }));
  });
  function qe(E) {
    f.update((z) => {
      const x = !z;
      return x && (h.set(Ai(E)), m.set(Oi(E)), d.set(E)), x;
    });
  }
  function rt(E) {
    const z = E.currentTarget;
    if (!ae(z))
      return;
    const x = Se(k);
    x && bn(x), Gc(z), k.set(z);
  }
  function K(E) {
    const z = E.currentTarget;
    ae(z) && bn(z);
  }
  function V(E) {
    H(E) && E.preventDefault();
  }
  function Re(E) {
    if (H(E))
      return;
    const z = E.target;
    if (!ae(z))
      return;
    const x = ge(z);
    x && Ye(x);
  }
  function tt(E) {
    H(E) && E.preventDefault();
  }
  function mt(E) {
    if (!dr(E))
      return;
    const z = E.target, x = E.currentTarget;
    if (!ae(x) || !ae(z))
      return;
    const ee = Se(p), pe = ee !== E.clientX;
    if (x.contains(z) && pe) {
      const Ve = E.clientX > ee ? "right" : "left";
      b.set(Ve), p.set(E.clientX);
    }
  }
  function ht(E, z = null) {
    if (!dr(E) || (V(E), E.defaultPrevented))
      return;
    if (z) {
      Ye(z);
      return;
    }
    const x = E.currentTarget;
    ae(x) && Ye(x);
  }
  function bt(E) {
    dr(E) && Re(E);
  }
  function rn(E) {
    if (Se(q).length > 0 && E.key === xe.SPACE) {
      E.preventDefault();
      return;
    }
    if (Dr.includes(E.key)) {
      E.preventDefault();
      const ee = E.currentTarget;
      if (!ae(ee))
        return;
      ee.click();
    }
  }
  function or(E) {
    return E === "indeterminate";
  }
  function Wr(E) {
    return or(E) ? "indeterminate" : E ? "checked" : "unchecked";
  }
  function H(E) {
    return Se(I)(E);
  }
  function ge(E) {
    const z = E.closest('[role="menu"]');
    return ae(z) ? z : null;
  }
  return {
    trigger: fe,
    menu: me,
    open: f,
    item: T,
    group: M,
    groupLabel: W,
    arrow: A,
    options: t.rootOptions,
    createCheckboxItem: G,
    createSubmenu: et,
    createMenuRadioGroup: ce,
    separator: ke,
    rootIds: D,
    handleTypeaheadSearch: P
  };
}
function dl(t, e, n) {
  if (t.shiftKey) {
    const r = Se(n);
    r && (t.preventDefault(), r.focus(), n.set(null));
  } else {
    const r = Se(e);
    r && (t.preventDefault(), r.focus(), e.set(null));
  }
}
function vn(t) {
  return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter((e) => ae(e));
}
function Xr(t) {
  !t || !Vt(t) || (t.setAttribute("data-disabled", ""), t.setAttribute("aria-disabled", "true"));
}
function ei(t) {
  if (!cn)
    return;
  const e = Se(t);
  e && (window.clearTimeout(e), t.set(null));
}
function dr(t) {
  return t.pointerType === "mouse";
}
function hr(t, e) {
  if (!t)
    return;
  const n = t.closest(`${e()}, ${e("submenu")}`);
  ae(n) && t.setAttribute("data-melt-menu-id", n.id);
}
function hl(t) {
  t.preventDefault();
  const e = document.activeElement, n = t.currentTarget;
  if (!ae(e) || !ae(n))
    return;
  const r = vn(n);
  if (!r.length)
    return;
  const s = r.filter((a) => !(a.hasAttribute("data-disabled") || a.getAttribute("disabled") === "true")), i = s.indexOf(e);
  let o;
  switch (t.key) {
    case xe.ARROW_DOWN:
      o = i < s.length - 1 ? i + 1 : i;
      break;
    case xe.ARROW_UP:
      o = i > 0 ? i - 1 : 0;
      break;
    case xe.HOME:
      o = 0;
      break;
    case xe.END:
      o = s.length - 1;
      break;
    default:
      return;
  }
  Ye(s[o]);
}
function hg(t, e) {
  if (!e)
    return !1;
  const n = { x: t.clientX, y: t.clientY };
  return mg(n, e);
}
function mg(t, e) {
  const { x: n, y: r } = t;
  let s = !1;
  for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
    const a = e[i].x, l = e[i].y, c = e[o].x, u = e[o].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (s = !s);
  }
  return s;
}
const pg = {
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
function gg(t) {
  const e = { ...pg, ...t }, n = er(e), r = e.open ?? Ne(e.defaultOpen), s = In(r, e == null ? void 0 : e.onOpenChange), i = Ne(null), o = Ne(null), a = Ne(null), { trigger: l, menu: c, item: u, arrow: f, createSubmenu: d, createCheckboxItem: h, createMenuRadioGroup: m, separator: g, group: p, groupLabel: _ } = dg({
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
      groupLabel: _
    },
    states: {
      open: s
    },
    builders: {
      createCheckboxItem: h,
      createSubmenu: d,
      createMenuRadioGroup: m
    },
    options: n
  };
}
const _g = {
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
}, { name: on } = Yi("select");
function bg(t) {
  const e = { ..._g, ...t }, n = er({
    ...Xi(e, "selected", "defaultSelected", "onSelectedChange", "onOpenChange", "open", "defaultOpen"),
    multiple: e.multiple ?? !1
  }), { positioning: r, arrowSize: s, required: i, disabled: o, loop: a, preventScroll: l, name: c, portal: u, forceVisible: f, closeOnEscape: d, closeOnOutsideClick: h, multiple: m } = n, g = e.open ?? Ne(!1), p = In(g, e == null ? void 0 : e.onOpenChange), _ = e.selected ?? Ne(e.defaultSelected), b = In(_, e == null ? void 0 : e.onSelectedChange), k = Ne(null), I = Ne(null), q = Ne(null);
  let P = !1;
  const D = {
    menu: wn(),
    trigger: wn(),
    label: wn()
  }, { typed: Z, handleTypeaheadSearch: me } = Xc(), fe = Le([b], ([H]) => (ge) => Array.isArray(H) ? H.map((E) => E.value).includes(ge) : (H == null ? void 0 : H.value) === ge);
  function A(H) {
    return H.pointerType === "mouse";
  }
  function T(H) {
    const ge = H.querySelector("[data-selected]");
    return ae(ge) ? ge : null;
  }
  function M(H) {
    if (!A(H))
      return;
    const ge = H.currentTarget;
    ae(ge) && Ye(ge);
  }
  function W() {
    const H = document.getElementById(D.menu);
    ae(H) && Ye(H);
  }
  function j(H) {
    H.preventDefault();
    const ge = document.activeElement, E = H.currentTarget;
    if (!ae(ge) || !ae(E))
      return;
    const z = Xs(E);
    if (!z.length)
      return;
    const x = z.filter((Ue) => !Vt(Ue)), ee = x.indexOf(ge);
    let pe;
    const Ve = Se(a);
    switch (H.key) {
      case xe.ARROW_DOWN:
        pe = Sm(x, ee, Ve);
        break;
      case xe.PAGE_DOWN:
        pe = Tm(x, ee, 10, Ve);
        break;
      case xe.ARROW_UP:
        pe = Em(x, ee, Ve);
        break;
      case xe.PAGE_UP:
        pe = Cm(x, ee, 10, Ve);
        break;
      case xe.HOME:
        pe = x[0];
        break;
      case xe.END:
        pe = Am(x);
        break;
      default:
        return;
    }
    Ye(pe);
  }
  function G(H) {
    if (H.shiftKey) {
      const ge = Se(q);
      ge && (H.preventDefault(), ge.focus(), q.set(null));
    } else {
      const ge = Se(I);
      ge && (H.preventDefault(), ge.focus(), I.set(null));
    }
  }
  const ce = Ei({ open: p, forceVisible: f, activeTrigger: k }), ke = Le(b, (H) => Array.isArray(H) ? H.map((ge) => ge.label).join(", ") : (H == null ? void 0 : H.label) ?? ""), we = st(on("menu"), {
    stores: [ce, u],
    returned: ([H, ge]) => ({
      style: Xt({
        display: H ? void 0 : "none"
      }),
      id: D.menu,
      "aria-labelledby": D.trigger,
      role: "listbox",
      "data-portal": ge ? "" : void 0
    }),
    action: (H) => {
      let ge = yt, E = yt;
      const z = At([ce, l, r, u, d, h], ([ee, pe, Ve, Ue, We, Ze]) => {
        ge(), E();
        const De = Se(k);
        ee && De && (pe && (E = Si()), Zn().then(() => {
          const $e = Pi(H, {
            anchorElement: De,
            open: p,
            options: {
              floating: Ve,
              clickOutside: Ze ? void 0 : null,
              escapeKeydown: We ? {
                handler: () => {
                  p.set(!1);
                }
              } : null,
              portal: Jc(H, Ue)
            }
          });
          $e && $e.destroy && (ge = $e.destroy);
        }));
      }), x = pt(Te(H, "keydown", (ee) => {
        const pe = ee.currentTarget, Ve = ee.target;
        if (!ae(pe) || !ae(Ve))
          return;
        const Ue = ee.ctrlKey || ee.altKey || ee.metaKey, We = ee.key.length === 1;
        if (ee.key === xe.TAB && (ee.preventDefault(), p.set(!1), G(ee)), Ti.includes(ee.key)) {
          if (ee.preventDefault(), pe === Ve) {
            const Ze = T(pe);
            if (Ze) {
              Ye(Ze);
              return;
            }
          }
          j(ee);
        }
        !Ue && We && me(ee.key, Xs(H));
      }));
      return {
        destroy() {
          z(), ge(), E(), x();
        }
      };
    }
  }), et = st(on("trigger"), {
    stores: [p, o, i],
    returned: ([H, ge, E]) => ({
      role: "combobox",
      type: "button",
      "aria-autocomplete": "none",
      "aria-haspopup": "listbox",
      "aria-controls": D.menu,
      "aria-expanded": H,
      "aria-required": E,
      "data-state": H ? "open" : "closed",
      "data-disabled": ge ? !0 : void 0,
      "aria-labelledby": D.label,
      disabled: ge,
      id: D.trigger,
      tabindex: 0
    }),
    action: (H) => ({
      destroy: pt(Te(H, "click", (E) => {
        if (Se(o)) {
          E.preventDefault();
          return;
        }
        const z = Se(p), x = E.currentTarget;
        ae(x) && (p.update((ee) => {
          const pe = !ee;
          return pe && (I.set(Ai(x)), q.set(Oi(x)), k.set(x)), pe;
        }), z || E.preventDefault());
      }), Te(H, "keydown", (E) => {
        const z = E.currentTarget;
        if (ae(z) && (Dr.includes(E.key) || E.key === xe.ARROW_DOWN || E.key === xe.ARROW_UP)) {
          (E.key === xe.ARROW_DOWN || E.key === xe.ARROW_UP) && E.preventDefault(), p.update((Ve) => {
            const Ue = !Ve;
            return Ue && (E.preventDefault(), I.set(Ai(z)), q.set(Oi(z)), k.set(z)), Ue;
          });
          const x = document.getElementById(D.menu);
          if (!x)
            return;
          const ee = x.querySelector("[data-selected]");
          if (ae(ee)) {
            Ye(ee);
            return;
          }
          const pe = Xs(x);
          if (!pe.length)
            return;
          Ye(pe[0]);
        }
      }))
    })
  }), { elements: { root: qe } } = mu(), { action: rt } = Se(qe), K = st(on("label"), {
    returned: () => ({
      id: D.label,
      for: D.trigger
    }),
    action: (H) => ({
      destroy: pt(rt(H).destroy ?? yt, Te(H, "click", (E) => {
        E.preventDefault();
        const z = document.getElementById(D.trigger);
        ae(z) && z.focus();
      }))
    })
  }), { elements: { root: V } } = pu({
    decorative: !0
  }), Re = st(on("group"), {
    returned: () => (H) => ({
      role: "group",
      "aria-labelledby": H
    })
  }), tt = st(on("group-label"), {
    returned: () => (H) => ({
      id: H
    })
  }), mt = st(on("arrow"), {
    stores: s,
    returned: (H) => ({
      "data-arrow": !0,
      style: Xt({
        position: "absolute",
        width: `var(--arrow-size, ${H}px)`,
        height: `var(--arrow-size, ${H}px)`
      })
    })
  }), ht = (H) => {
    const ge = H.getAttribute("data-value"), E = H.getAttribute("data-label"), z = H.hasAttribute("data-disabled");
    return {
      value: ge && JSON.parse(ge),
      label: E ?? H.textContent ?? void 0,
      disabled: !!z
    };
  }, bt = (H) => {
    b.update((ge) => {
      if (Se(m)) {
        const z = Array.isArray(ge) ? ge : [];
        return Im(H, z);
      }
      return H;
    });
  }, rn = st(on("option"), {
    stores: b,
    returned: (H) => (ge) => {
      const E = Array.isArray(H) ? H.map((z) => z.value).includes(ge.value) : (H == null ? void 0 : H.value) === (ge == null ? void 0 : ge.value);
      return {
        role: "option",
        "aria-selected": E,
        "data-selected": E ? "" : void 0,
        "data-value": JSON.stringify(ge.value),
        "data-label": ge.label ?? void 0,
        "data-disabled": ge.disabled ? "" : void 0,
        tabindex: -1
      };
    },
    action: (H) => ({
      destroy: pt(Te(H, "click", (E) => {
        const z = E.currentTarget;
        if (!ae(z))
          return;
        const x = ht(H);
        if (x.disabled) {
          E.preventDefault();
          return;
        }
        Ye(z), bt(x), Se(m) || p.set(!1);
      }), Te(H, "keydown", (E) => {
        if (Se(Z).length > 0 && E.key === xe.SPACE) {
          E.preventDefault();
          return;
        }
        if (E.key === xe.ENTER || E.key === xe.SPACE) {
          E.preventDefault();
          const ee = ht(H);
          H.setAttribute("data-selected", ""), bt(ee), Se(m) || p.set(!1);
        }
      }), Te(H, "pointermove", (E) => {
        const z = ht(H);
        if (z.disabled) {
          E.preventDefault();
          return;
        }
        const x = E.currentTarget;
        if (ae(x)) {
          if (z.disabled) {
            const ee = document.getElementById(D.menu);
            if (!ee)
              return;
            Ye(ee);
          }
          M(E);
        }
      }), Te(H, "pointerleave", (E) => {
        A(E) && W();
      }), Te(H, "focusin", (E) => {
        const z = E.currentTarget;
        ae(z) && Gc(z);
      }), Te(H, "focusout", (E) => {
        const z = E.currentTarget;
        ae(z) && bn(z);
      }))
    })
  }), or = st(on("input"), {
    stores: [b, i, o, c],
    returned: ([H, ge, E, z]) => ({
      type: "hidden",
      name: z,
      value: H,
      "aria-hidden": !0,
      hidden: !0,
      tabIndex: -1,
      required: ge,
      disabled: E,
      style: Xt({
        position: "absolute",
        opacity: 0,
        "pointer-events": "none",
        margin: 0,
        transform: "translateX(-100%)"
      })
    })
  });
  Kt(() => {
    const H = document.getElementById(D.trigger);
    H && k.set(H);
  });
  let Wr = !1;
  return At(p, (H) => {
    H && (Wr = !0);
  }), At([p, k], function([ge, E]) {
    const z = [];
    if (cn)
      return ge && Se(l) && z.push(Si()), br(1).then(() => {
        const x = document.getElementById(D.menu);
        if (x && ge && P) {
          const ee = T(x);
          if (ee)
            Ye(ee);
          else {
            const pe = Pm(x);
            if (!pe)
              return;
            Ye(pe);
          }
        } else
          x && ge ? Ye(x) : E && Wr && Ye(E);
      }), () => {
        z.forEach((x) => x());
      };
  }), At([p, k], ([H, ge]) => {
    if (!cn)
      return;
    const E = () => P = !1;
    return pt(Ot(document, "keydown", (x) => {
      if (P = !0, x.key === xe.ESCAPE && H) {
        if (p.set(!1), !ge)
          return;
        Ye(ge);
      }
    }, { capture: !0 }), Ot(document, "pointerdown", E, { capture: !0, once: !0 }), Ot(document, "pointermove", E, { capture: !0, once: !0 }));
  }), {
    elements: {
      menu: we,
      trigger: et,
      option: rn,
      input: or,
      group: Re,
      groupLabel: tt,
      arrow: mt,
      separator: V,
      label: K
    },
    states: {
      open: p,
      selected: b,
      selectedLabel: ke
    },
    helpers: {
      isSelected: fe
    },
    options: n
  };
}
const vg = {
  orientation: "horizontal",
  decorative: !1
}, pu = (t) => {
  const e = { ...vg, ...t }, n = er(e), { orientation: r, decorative: s } = n;
  return {
    elements: {
      root: st("separator", {
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
}, yg = {
  defaultChecked: !1,
  disabled: !1,
  required: !1,
  name: "",
  value: ""
}, { name: ml } = Yi("switch");
function kg(t) {
  const e = { ...yg, ...t }, n = er(Xi(e, "checked")), { disabled: r, required: s, name: i, value: o } = n, a = e.checked ?? Ne(e.defaultChecked), l = In(a, e == null ? void 0 : e.onCheckedChange);
  function c() {
    Se(r) || l.update((d) => !d);
  }
  const u = st(ml(), {
    stores: [l, r, s],
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
        destroy: pt(Te(d, "click", () => {
          c();
        }), Te(d, "keydown", (m) => {
          m.key !== xe.ENTER && m.key !== xe.SPACE || (m.preventDefault(), c());
        }))
      };
    }
  }), f = st(ml("input"), {
    stores: [l, i, s, r, o],
    returned: ([d, h, m, g, p]) => ({
      type: "checkbox",
      "aria-hidden": !0,
      hidden: !0,
      tabindex: -1,
      name: h,
      value: p,
      checked: d,
      required: m,
      disabled: g,
      style: Xt({
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
      checked: l
    },
    options: n
  };
}
function so() {
  return Uc(10);
}
function rr(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function sr(t) {
  return function(e, n) {
    if (n === void 0)
      return;
    t[e].set(n);
  };
}
function wg(t, e) {
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
function pl(t) {
  const e = {};
  return t.forEach((n) => {
    Object.keys(n).forEach((r) => {
      r !== "action" && (e[r] = n[r]);
    });
  }), e;
}
function gl(t) {
  return t ? { "aria-disabled": !0, "data-disabled": "" } : {};
}
function Yt() {
  const t = Bt();
  return (e) => {
    const { originalEvent: n } = e.detail, { cancelable: r } = e, s = n.type;
    t(s, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || e.preventDefault();
  };
}
function Cg(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, r, s = (
    /*href*/
    (t[0] ? "a" : "button") && ti(t)
  );
  return {
    c() {
      s && s.c(), n = Ee();
    },
    m(i, o) {
      s && s.m(i, o), C(i, n, o), r = !0;
    },
    p(i, o) {
      /*href*/
      i[0], e ? Y(
        e,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (s.d(1), s = ti(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n)) : s.p(i, o) : (s = ti(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n));
    },
    i(i) {
      r || (v(s, i), r = !0);
    },
    o(i) {
      y(s, i), r = !1;
    },
    d(i) {
      i && w(n), s && s.d(i);
    }
  };
}
function Tg(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, r, s = (
    /*href*/
    (t[0] ? "a" : "button") && ni(t)
  );
  return {
    c() {
      s && s.c(), n = Ee();
    },
    m(i, o) {
      s && s.m(i, o), C(i, n, o), r = !0;
    },
    p(i, o) {
      /*href*/
      i[0], e ? Y(
        e,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (s.d(1), s = ni(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n)) : s.p(i, o) : (s = ni(i), e = /*href*/
      i[0] ? "a" : "button", s.c(), s.m(n.parentNode, n));
    },
    i(i) {
      r || (v(s, i), r = !0);
    },
    o(i) {
      y(s, i), r = !1;
    },
    d(i) {
      i && w(n), s && s.d(i);
    }
  };
}
function ti(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[5].default
  ), a = te(
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
    c = S(c, l[u]);
  return {
    c() {
      e = O(
        /*href*/
        t[0] ? "a" : "button"
      ), a && a.c(), ps(
        /*href*/
        t[0] ? "a" : "button"
      )(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        Q(
          e,
          "click",
          /*click_handler_1*/
          t[12]
        ),
        Q(
          e,
          "change",
          /*change_handler_1*/
          t[13]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[14]
        ),
        Q(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[15]
        ),
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[16]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[17]
        )
      ], s = !0);
    },
    p(u, f) {
      a && a.p && (!r || f & /*$$scope*/
      16) && re(
        a,
        o,
        u,
        /*$$scope*/
        u[4],
        r ? ne(
          o,
          /*$$scope*/
          u[4],
          f,
          null
        ) : se(
          /*$$scope*/
          u[4]
        ),
        null
      ), ps(
        /*href*/
        u[0] ? "a" : "button"
      )(e, c = de(l, [
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
      r || (v(a, u), r = !0);
    },
    o(u) {
      y(a, u), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), s = !1, Je(i);
    }
  };
}
function ni(t) {
  let e, n, r, s, i, o;
  const a = (
    /*#slots*/
    t[5].default
  ), l = te(
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
    pl(
      /*builders*/
      t[2]
    ),
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = S(u, c[f]);
  return {
    c() {
      e = O(
        /*href*/
        t[0] ? "a" : "button"
      ), l && l.c(), ps(
        /*href*/
        t[0] ? "a" : "button"
      )(e, u);
    },
    m(f, d) {
      C(f, e, d), l && l.m(e, null), s = !0, i || (o = [
        Q(
          e,
          "click",
          /*click_handler*/
          t[6]
        ),
        Q(
          e,
          "change",
          /*change_handler*/
          t[7]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
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
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        ),
        ct(r = wg.call(null, e, { builders: (
          /*builders*/
          t[2]
        ) }))
      ], i = !0);
    },
    p(f, d) {
      l && l.p && (!s || d & /*$$scope*/
      16) && re(
        l,
        a,
        f,
        /*$$scope*/
        f[4],
        s ? ne(
          a,
          /*$$scope*/
          f[4],
          d,
          null
        ) : se(
          /*$$scope*/
          f[4]
        ),
        null
      ), ps(
        /*href*/
        f[0] ? "a" : "button"
      )(e, u = de(c, [
        (!s || d & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!s || d & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { tabindex: "0" },
        d & /*builders*/
        4 && pl(
          /*builders*/
          f[2]
        ),
        d & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && $t(r.update) && d & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      s || (v(l, f), s = !0);
    },
    o(f) {
      y(l, f), s = !1;
    },
    d(f) {
      f && w(e), l && l.d(f), i = !1, Je(o);
    }
  };
}
function Sg(t) {
  let e, n, r, s;
  const i = [Tg, Cg], o = [];
  function a(l, c) {
    return (
      /*builders*/
      l[2] && /*builders*/
      l[2].length ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function Eg(t, e, n) {
  const r = ["href", "type", "builders"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { href: a = void 0 } = e, { type: l = void 0 } = e, { builders: c = [] } = e;
  function u(P) {
    ye.call(this, t, P);
  }
  function f(P) {
    ye.call(this, t, P);
  }
  function d(P) {
    ye.call(this, t, P);
  }
  function h(P) {
    ye.call(this, t, P);
  }
  function m(P) {
    ye.call(this, t, P);
  }
  function g(P) {
    ye.call(this, t, P);
  }
  function p(P) {
    ye.call(this, t, P);
  }
  function _(P) {
    ye.call(this, t, P);
  }
  function b(P) {
    ye.call(this, t, P);
  }
  function k(P) {
    ye.call(this, t, P);
  }
  function I(P) {
    ye.call(this, t, P);
  }
  function q(P) {
    ye.call(this, t, P);
  }
  return t.$$set = (P) => {
    e = S(S({}, e), be(P)), n(3, s = $(e, r)), "href" in P && n(0, a = P.href), "type" in P && n(1, l = P.type), "builders" in P && n(2, c = P.builders), "$$scope" in P && n(4, o = P.$$scope);
  }, [
    a,
    l,
    c,
    s,
    o,
    i,
    u,
    f,
    d,
    h,
    m,
    g,
    p,
    _,
    b,
    k,
    I,
    q
  ];
}
let Ag = class extends J {
  constructor(e) {
    super(), X(this, e, Eg, Sg, Y, { href: 0, type: 1, builders: 2 });
  }
};
const gu = "Checkbox", _u = {
  set: Og,
  get: Ig
};
function Og(t) {
  const e = Km(rr(t));
  return zt(gu, { ...e }), {
    ...e,
    updateOption: sr(e.options)
  };
}
function Ig() {
  return Nt(gu);
}
const Rg = (t) => ({ builder: t & /*$root*/
2 }), _l = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), Ng = (t) => ({ builder: t & /*$root*/
2 }), bl = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function Pg(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[15] = n, e;
}
function Mg(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[12].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[11],
    _l
  );
  let a = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("button"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (s = [
        ct(
          /*builder*/
          t[15].action(e)
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
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $root*/
      2050) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[11],
        n ? ne(
          i,
          /*$$scope*/
          c[11],
          u,
          Rg
        ) : se(
          /*$$scope*/
          c[11]
        ),
        _l
      ), le(e, l = de(a, [
        u & /*$root*/
        2 && /*builder*/
        c[15],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function jg(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[11],
    bl
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
      2050) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        e ? ne(
          n,
          /*$$scope*/
          s[11],
          i,
          Ng
        ) : se(
          /*$$scope*/
          s[11]
        ),
        bl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Dg(t) {
  let e, n, r, s;
  const i = [jg, Mg], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Pg(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function xg(t, e, n) {
  const r = ["checked", "disabled", "name", "required", "value", "onCheckedChange", "asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { checked: l = void 0 } = e, { disabled: c = void 0 } = e, { name: u = void 0 } = e, { required: f = void 0 } = e, { value: d = void 0 } = e, { onCheckedChange: h = void 0 } = e, { asChild: m = !1 } = e;
  const { elements: { root: g }, states: { checked: p }, updateOption: _ } = _u.set({
    defaultChecked: l,
    disabled: c,
    name: u,
    required: f,
    value: d,
    onCheckedChange: ({ next: k }) => (l !== k && (h == null || h(k), n(5, l = k)), k)
  });
  Ge(t, g, (k) => n(1, i = k));
  const b = Yt();
  return t.$$set = (k) => {
    e = S(S({}, e), be(k)), n(4, s = $(e, r)), "checked" in k && n(5, l = k.checked), "disabled" in k && n(6, c = k.disabled), "name" in k && n(7, u = k.name), "required" in k && n(8, f = k.required), "value" in k && n(9, d = k.value), "onCheckedChange" in k && n(10, h = k.onCheckedChange), "asChild" in k && n(0, m = k.asChild), "$$scope" in k && n(11, a = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && p.set(l), t.$$.dirty & /*disabled*/
    64 && _("disabled", c), t.$$.dirty & /*name*/
    128 && _("name", u), t.$$.dirty & /*required*/
    256 && _("required", f), t.$$.dirty & /*value*/
    512 && _("value", d);
  }, [
    m,
    i,
    g,
    b,
    s,
    l,
    c,
    u,
    f,
    d,
    h,
    a,
    o
  ];
}
let Lg = class extends J {
  constructor(e) {
    super(), X(this, e, xg, Dg, Y, {
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
const Fg = (t) => ({
  isChecked: t & /*$isChecked*/
  1,
  isIndeterminate: t & /*$isIndeterminate*/
  2
}), vl = (t) => ({
  isChecked: (
    /*$isChecked*/
    t[0]
  ),
  isIndeterminate: (
    /*$isIndeterminate*/
    t[1]
  )
});
function Bg(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[6].default
  ), s = te(
    r,
    t,
    /*$$scope*/
    t[5],
    vl
  );
  let i = [
    /*$$restProps*/
    t[4]
  ], o = {};
  for (let a = 0; a < i.length; a += 1)
    o = S(o, i[a]);
  return {
    c() {
      e = O("div"), s && s.c(), le(e, o);
    },
    m(a, l) {
      C(a, e, l), s && s.m(e, null), n = !0;
    },
    p(a, [l]) {
      s && s.p && (!n || l & /*$$scope, $isChecked, $isIndeterminate*/
      35) && re(
        s,
        r,
        a,
        /*$$scope*/
        a[5],
        n ? ne(
          r,
          /*$$scope*/
          a[5],
          l,
          Fg
        ) : se(
          /*$$scope*/
          a[5]
        ),
        vl
      ), le(e, o = de(i, [l & /*$$restProps*/
      16 && /*$$restProps*/
      a[4]]));
    },
    i(a) {
      n || (v(s, a), n = !0);
    },
    o(a) {
      y(s, a), n = !1;
    },
    d(a) {
      a && w(e), s && s.d(a);
    }
  };
}
function zg(t, e, n) {
  const r = [];
  let s = $(e, r), i, o, { $$slots: a = {}, $$scope: l } = e;
  const { helpers: { isChecked: c, isIndeterminate: u } } = _u.get();
  return Ge(t, c, (f) => n(0, i = f)), Ge(t, u, (f) => n(1, o = f)), t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "$$scope" in f && n(5, l = f.$$scope);
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
class Zg extends J {
  constructor(e) {
    super(), X(this, e, zg, Bg, Y, {});
  }
}
const bu = "DropdownMenu", io = "DropdownSubmenu", vu = "DropdownRadioGroup", yu = "DropdownCheckboxItem", ku = "DropdownRadioItem", wu = "DropdownGroup", nn = {
  get: _n,
  set: Vg,
  setSub: Wg,
  getContent: qg,
  setRadioGroup: Hg,
  setRadioItem: Gg,
  getSubTrigger: Kg,
  getSubContent: $g,
  setCheckboxItem: Yg,
  getCheckboxIndicator: Xg,
  getRadioIndicator: Ug,
  setGroup: Jg,
  getGroupLabel: Qg,
  setArrow: e_
};
function _n() {
  return Nt(bu);
}
function Vg(t) {
  const e = gg({ ...rr(t), forceVisible: !0 });
  return zt(bu, e), {
    ...e,
    updateOption: sr(e.options)
  };
}
function Wg(t) {
  const { builders: { createSubmenu: e } } = _n(), n = e(rr(t));
  return zt(io, n), {
    ...n,
    updateOption: sr(n.options)
  };
}
function Hg(t) {
  const { builders: { createMenuRadioGroup: e } } = _n(), n = e(t);
  return zt(vu, n), n;
}
function Gg(t) {
  const e = Nt(vu);
  return zt(ku, { isChecked: e.helpers.isChecked, value: t }), e;
}
function Ug() {
  return Nt(ku);
}
function Kg() {
  return Nt(io);
}
function qg(t = 5) {
  const e = _n();
  return e.options.positioning.update((n) => ({ ...n, gutter: t })), e;
}
function $g(t = -1) {
  const e = Nt(io);
  return e.options.positioning.update((n) => ({ ...n, gutter: t })), e;
}
function Yg(t) {
  const { builders: { createCheckboxItem: e } } = _n(), n = e(rr(t));
  return zt(yu, n.states.checked), {
    ...n,
    updateOption: sr(n.options)
  };
}
function Xg() {
  return Nt(yu);
}
function Jg() {
  const { elements: { group: t } } = _n(), e = so();
  return zt(wu, e), { group: t, id: e };
}
function Qg() {
  const t = Nt(wu) ?? so(), { elements: { groupLabel: e } } = _n();
  return { groupLabel: e, id: t };
}
function e_(t = 8) {
  const e = _n();
  return e.options.arrowSize.set(t), e;
}
function t_(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), r = te(
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
      2048) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        e ? ne(
          n,
          /*$$scope*/
          s[11],
          i,
          null
        ) : se(
          /*$$scope*/
          s[11]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function n_(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e, { closeOnOutsideClick: i = void 0 } = e, { closeOnEscape: o = void 0 } = e, { portal: a = void 0 } = e, { forceVisible: l = void 0 } = e, { open: c = void 0 } = e, { onOpenChange: u = void 0 } = e, { preventScroll: f = void 0 } = e, { arrowSize: d = void 0 } = e, { positioning: h = void 0 } = e, { loop: m = void 0 } = e, { dir: g = void 0 } = e;
  const { states: { open: p }, updateOption: _ } = nn.set({
    closeOnOutsideClick: i,
    closeOnEscape: o,
    portal: a,
    forceVisible: l,
    defaultOpen: c,
    preventScroll: f,
    arrowSize: d,
    positioning: h,
    loop: m,
    dir: g,
    onOpenChange: ({ next: b }) => (c !== b && (u == null || u(b), n(0, c = b)), b)
  });
  return t.$$set = (b) => {
    "closeOnOutsideClick" in b && n(1, i = b.closeOnOutsideClick), "closeOnEscape" in b && n(2, o = b.closeOnEscape), "portal" in b && n(3, a = b.portal), "forceVisible" in b && n(4, l = b.forceVisible), "open" in b && n(0, c = b.open), "onOpenChange" in b && n(5, u = b.onOpenChange), "preventScroll" in b && n(6, f = b.preventScroll), "arrowSize" in b && n(7, d = b.arrowSize), "positioning" in b && n(8, h = b.positioning), "loop" in b && n(9, m = b.loop), "dir" in b && n(10, g = b.dir), "$$scope" in b && n(11, s = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c !== void 0 && p.set(c), t.$$.dirty & /*closeOnOutsideClick*/
    2 && _("closeOnOutsideClick", i), t.$$.dirty & /*closeOnEscape*/
    4 && _("closeOnEscape", o), t.$$.dirty & /*portal*/
    8 && _("portal", a), t.$$.dirty & /*forceVisible*/
    16 && _("forceVisible", l), t.$$.dirty & /*preventScroll*/
    64 && _("preventScroll", f), t.$$.dirty & /*arrowSize*/
    128 && _("arrowSize", d), t.$$.dirty & /*positioning*/
    256 && _("positioning", h), t.$$.dirty & /*loop*/
    512 && _("loop", m), t.$$.dirty & /*dir*/
    1024 && _("dir", g);
  }, [
    c,
    i,
    o,
    a,
    l,
    u,
    f,
    d,
    h,
    m,
    g,
    s,
    r
  ];
}
class r_ extends J {
  constructor(e) {
    super(), X(this, e, n_, t_, Y, {
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
const s_ = (t) => ({ builder: t & /*$item*/
4 }), yl = (t) => ({ builder: (
  /*builder*/
  t[8]
) }), i_ = (t) => ({ builder: t & /*$item*/
4 }), kl = (t) => ({ builder: (
  /*$item*/
  t[2]
) });
function o_(t) {
  const e = t.slice(), n = (
    /*$item*/
    e[2]
  );
  return e[8] = n, e;
}
function l_(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[7].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[6],
    yl
  );
  let a = [
    /*builder*/
    t[8],
    /*$$restProps*/
    t[5],
    gl(
      /*disabled*/
      t[1]
    )
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        ct(
          /*builder*/
          t[8].action(e)
        ),
        Q(
          e,
          "m-click",
          /*dispatch*/
          t[4]
        ),
        Q(
          e,
          "m-focusin",
          /*dispatch*/
          t[4]
        ),
        Q(
          e,
          "m-focusout",
          /*dispatch*/
          t[4]
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[4]
        ),
        Q(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[4]
        ),
        Q(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[4]
        ),
        Q(
          e,
          "m-pointermove",
          /*dispatch*/
          t[4]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $item*/
      68) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[6],
        n ? ne(
          i,
          /*$$scope*/
          c[6],
          u,
          s_
        ) : se(
          /*$$scope*/
          c[6]
        ),
        yl
      ), le(e, l = de(a, [
        u & /*$item*/
        4 && /*builder*/
        c[8],
        u & /*$$restProps*/
        32 && /*$$restProps*/
        c[5],
        u & /*disabled*/
        2 && gl(
          /*disabled*/
          c[1]
        )
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function a_(t) {
  let e;
  const n = (
    /*#slots*/
    t[7].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[6],
    kl
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
      68) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[6],
        e ? ne(
          n,
          /*$$scope*/
          s[6],
          i,
          i_
        ) : se(
          /*$$scope*/
          s[6]
        ),
        kl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function c_(t) {
  let e, n, r, s;
  const i = [a_, l_], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? o_(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function u_(t, e, n) {
  const r = ["asChild", "disabled"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e, { disabled: c = !1 } = e;
  const { elements: { item: u } } = nn.get();
  Ge(t, u, (d) => n(2, i = d));
  const f = Yt();
  return t.$$set = (d) => {
    e = S(S({}, e), be(d)), n(5, s = $(e, r)), "asChild" in d && n(0, l = d.asChild), "disabled" in d && n(1, c = d.disabled), "$$scope" in d && n(6, a = d.$$scope);
  }, [l, c, i, u, f, s, a, o];
}
class f_ extends J {
  constructor(e) {
    super(), X(this, e, u_, c_, Y, { asChild: 0, disabled: 1 });
  }
}
const d_ = (t) => ({ builder: t & /*$group*/
2 }), wl = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), h_ = (t) => ({ builder: t & /*$group*/
2 }), Cl = (t) => ({
  builder: (
    /*$group*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function m_(t) {
  const e = t.slice(), n = (
    /*$group*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function p_(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    wl
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = ct(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $group*/
      34) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? ne(
          i,
          /*$$scope*/
          c[5],
          u,
          d_
        ) : se(
          /*$$scope*/
          c[5]
        ),
        wl
      ), le(e, l = de(a, [
        u & /*$group*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, s();
    }
  };
}
function g_(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    Cl
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
      34) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          h_
        ) : se(
          /*$$scope*/
          s[5]
        ),
        Cl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function __(t) {
  let e, n, r, s;
  const i = [g_, p_], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? m_(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function b_(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { group: c, id: u } = nn.setGroup();
  return Ge(t, c, (f) => n(1, i = f)), t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class v_ extends J {
  constructor(e) {
    super(), X(this, e, b_, __, Y, { asChild: 0 });
  }
}
const y_ = (t) => ({ builder: t & /*$groupLabel*/
2 }), Tl = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), k_ = (t) => ({ builder: t & /*$groupLabel*/
2 }), Sl = (t) => ({
  builder: (
    /*$groupLabel*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function w_(t) {
  const e = t.slice(), n = (
    /*$groupLabel*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function C_(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    Tl
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = ct(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $groupLabel*/
      34) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? ne(
          i,
          /*$$scope*/
          c[5],
          u,
          y_
        ) : se(
          /*$$scope*/
          c[5]
        ),
        Tl
      ), le(e, l = de(a, [
        u & /*$groupLabel*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, s();
    }
  };
}
function T_(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    Sl
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
      34) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          k_
        ) : se(
          /*$$scope*/
          s[5]
        ),
        Sl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function S_(t) {
  let e, n, r, s;
  const i = [T_, C_], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? w_(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function E_(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { groupLabel: c, id: u } = nn.getGroupLabel();
  return Ge(t, c, (f) => n(1, i = f)), t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class A_ extends J {
  constructor(e) {
    super(), X(this, e, E_, S_, Y, { asChild: 0 });
  }
}
const O_ = (t) => ({ builder: t & /*$menu*/
256 }), El = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), I_ = (t) => ({ builder: t & /*$menu*/
256 }), Al = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), R_ = (t) => ({ builder: t & /*$menu*/
256 }), Ol = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), N_ = (t) => ({ builder: t & /*$menu*/
256 }), Il = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), P_ = (t) => ({ builder: t & /*$menu*/
256 }), Rl = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), M_ = (t) => ({ builder: t & /*$menu*/
256 }), Nl = (t) => ({ builder: (
  /*builder*/
  t[16]
) });
function j_(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function D_(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function x_(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function L_(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function F_(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function B_(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function z_(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[15].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[14],
    El
  );
  let a = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        ct(
          /*builder*/
          t[16].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $menu*/
      16640) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[14],
        n ? ne(
          i,
          /*$$scope*/
          c[14],
          u,
          O_
        ) : se(
          /*$$scope*/
          c[14]
        ),
        El
      ), le(e, l = de(a, [
        u & /*$menu*/
        256 && /*builder*/
        c[16],
        u & /*$$restProps*/
        4096 && /*$$restProps*/
        c[12]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function Z_(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[15].default
  ), a = te(
    o,
    t,
    /*$$scope*/
    t[14],
    Al
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        ct(
          /*builder*/
          t[16].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && re(
        a,
        o,
        t,
        /*$$scope*/
        t[14],
        r ? ne(
          o,
          /*$$scope*/
          t[14],
          f,
          I_
        ) : se(
          /*$$scope*/
          t[14]
        ),
        Al
      ), le(e, c = de(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (v(a, u), n && n.end(1), r = !0);
    },
    o(u) {
      y(a, u), u && (n = js(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), u && n && n.end(), s = !1, Je(i);
    }
  };
}
function V_(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[15].default
  ), a = te(
    o,
    t,
    /*$$scope*/
    t[14],
    Ol
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        ct(
          /*builder*/
          t[16].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && re(
        a,
        o,
        t,
        /*$$scope*/
        t[14],
        r ? ne(
          o,
          /*$$scope*/
          t[14],
          f,
          R_
        ) : se(
          /*$$scope*/
          t[14]
        ),
        Ol
      ), le(e, c = de(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (v(a, u), u && (n || It(() => {
        n = Ms(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start();
      })), r = !0);
    },
    o(u) {
      y(a, u), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), s = !1, Je(i);
    }
  };
}
function W_(t) {
  let e, n, r, s, i, o;
  const a = (
    /*#slots*/
    t[15].default
  ), l = te(
    a,
    t,
    /*$$scope*/
    t[14],
    Il
  );
  let c = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = S(u, c[f]);
  return {
    c() {
      e = O("div"), l && l.c(), le(e, u);
    },
    m(f, d) {
      C(f, e, d), l && l.m(e, null), s = !0, i || (o = [
        ct(
          /*builder*/
          t[16].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], i = !0);
    },
    p(f, d) {
      t = f, l && l.p && (!s || d & /*$$scope, $menu*/
      16640) && re(
        l,
        a,
        t,
        /*$$scope*/
        t[14],
        s ? ne(
          a,
          /*$$scope*/
          t[14],
          d,
          N_
        ) : se(
          /*$$scope*/
          t[14]
        ),
        Il
      ), le(e, u = de(c, [
        d & /*$menu*/
        256 && /*builder*/
        t[16],
        d & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(f) {
      s || (v(l, f), f && It(() => {
        s && (r && r.end(1), n = Ms(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start());
      }), s = !0);
    },
    o(f) {
      y(l, f), n && n.invalidate(), f && (r = js(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), s = !1;
    },
    d(f) {
      f && w(e), l && l.d(f), f && r && r.end(), i = !1, Je(o);
    }
  };
}
function H_(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[15].default
  ), a = te(
    o,
    t,
    /*$$scope*/
    t[14],
    Rl
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        ct(
          /*builder*/
          t[16].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], s = !0);
    },
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && re(
        a,
        o,
        t,
        /*$$scope*/
        t[14],
        r ? ne(
          o,
          /*$$scope*/
          t[14],
          f,
          P_
        ) : se(
          /*$$scope*/
          t[14]
        ),
        Rl
      ), le(e, c = de(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (v(a, u), u && It(() => {
        r && (n || (n = ys(
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
      y(a, u), u && (n || (n = ys(
        e,
        /*transition*/
        t[0],
        /*transitionConfig*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), u && n && n.end(), s = !1, Je(i);
    }
  };
}
function G_(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[14],
    Nl
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
      16640) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[14],
        e ? ne(
          n,
          /*$$scope*/
          s[14],
          i,
          M_
        ) : se(
          /*$$scope*/
          s[14]
        ),
        Nl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function U_(t) {
  let e, n, r, s;
  const i = [
    G_,
    H_,
    W_,
    V_,
    Z_,
    z_
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
      return B_(c);
    if (u === 1)
      return F_(c);
    if (u === 2)
      return L_(c);
    if (u === 3)
      return x_(c);
    if (u === 4)
      return D_(c);
    if (u === 5)
      return j_(c);
  }
  return ~(e = a(t)) && (n = o[e] = i[e](l(t, e))), {
    c() {
      n && n.c(), r = Ee();
    },
    m(c, u) {
      ~e && o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? ~e && o[e].p(l(c, e), u) : (n && (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie()), ~e ? (n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), ~e && o[e].d(c);
    }
  };
}
function K_(t, e, n) {
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
  let s = $(e, r), i, o, { $$slots: a = {}, $$scope: l } = e, { sideOffset: c = 5 } = e, { transition: u = void 0 } = e, { transitionConfig: f = void 0 } = e, { inTransition: d = void 0 } = e, { inTransitionConfig: h = void 0 } = e, { outTransition: m = void 0 } = e, { outTransitionConfig: g = void 0 } = e, { asChild: p = !1 } = e;
  const { elements: { menu: _ }, states: { open: b } } = nn.getContent(c);
  Ge(t, _, (I) => n(8, o = I)), Ge(t, b, (I) => n(7, i = I));
  const k = Yt();
  return t.$$set = (I) => {
    e = S(S({}, e), be(I)), n(12, s = $(e, r)), "sideOffset" in I && n(13, c = I.sideOffset), "transition" in I && n(0, u = I.transition), "transitionConfig" in I && n(1, f = I.transitionConfig), "inTransition" in I && n(2, d = I.inTransition), "inTransitionConfig" in I && n(3, h = I.inTransitionConfig), "outTransition" in I && n(4, m = I.outTransition), "outTransitionConfig" in I && n(5, g = I.outTransitionConfig), "asChild" in I && n(6, p = I.asChild), "$$scope" in I && n(14, l = I.$$scope);
  }, [
    u,
    f,
    d,
    h,
    m,
    g,
    p,
    i,
    o,
    _,
    b,
    k,
    s,
    c,
    l,
    a
  ];
}
class q_ extends J {
  constructor(e) {
    super(), X(this, e, K_, U_, Y, {
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
const $_ = (t) => ({ builder: t & /*$trigger*/
2 }), Pl = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Y_ = (t) => ({ builder: t & /*$trigger*/
2 }), Ml = (t) => ({ builder: (
  /*$trigger*/
  t[1]
) });
function X_(t) {
  const e = t.slice(), n = (
    /*$trigger*/
    e[1]
  );
  return e[7] = n, e;
}
function J_(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    Pl
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("button"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (s = [
        ct(
          /*builder*/
          t[7].action(e)
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $trigger*/
      34) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? ne(
          i,
          /*$$scope*/
          c[5],
          u,
          $_
        ) : se(
          /*$$scope*/
          c[5]
        ),
        Pl
      ), le(e, l = de(a, [
        u & /*$trigger*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function Q_(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    Ml
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
      34) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          Y_
        ) : se(
          /*$$scope*/
          s[5]
        ),
        Ml
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function eb(t) {
  let e, n, r, s;
  const i = [Q_, J_], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? X_(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function tb(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { elements: { trigger: c } } = nn.get();
  Ge(t, c, (f) => n(1, i = f));
  const u = Yt();
  return t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class nb extends J {
  constructor(e) {
    super(), X(this, e, tb, eb, Y, { asChild: 0 });
  }
}
const rb = (t) => ({ builder: t & /*$separator*/
2 }), jl = (t) => ({ builder: (
  /*$separator*/
  t[1]
) });
function sb(t) {
  let e, n, r, s = [
    /*$separator*/
    t[1],
    /*$$restProps*/
    t[3]
  ], i = {};
  for (let o = 0; o < s.length; o += 1)
    i = S(i, s[o]);
  return {
    c() {
      e = O("div"), le(e, i);
    },
    m(o, a) {
      C(o, e, a), n || (r = ct(
        /*$separator*/
        t[1].action(e)
      ), n = !0);
    },
    p(o, a) {
      le(e, i = de(s, [
        a & /*$separator*/
        2 && /*$separator*/
        o[1],
        a & /*$$restProps*/
        8 && /*$$restProps*/
        o[3]
      ]));
    },
    i: _e,
    o: _e,
    d(o) {
      o && w(e), n = !1, r();
    }
  };
}
function ib(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[4],
    jl
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
      18) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        e ? ne(
          n,
          /*$$scope*/
          s[4],
          i,
          rb
        ) : se(
          /*$$scope*/
          s[4]
        ),
        jl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function ob(t) {
  let e, n, r, s;
  const i = [ib, sb], o = [];
  function a(l, c) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function lb(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const c = nn.get().elements.separator;
  return Ge(t, c, (u) => n(1, i = u)), t.$$set = (u) => {
    e = S(S({}, e), be(u)), n(3, s = $(e, r)), "asChild" in u && n(0, l = u.asChild), "$$scope" in u && n(4, a = u.$$scope);
  }, [l, i, c, s, a, o];
}
class ab extends J {
  constructor(e) {
    super(), X(this, e, lb, ob, Y, { asChild: 0 });
  }
}
const cb = (t) => ({ builder: t & /*$checkboxItem*/
2 }), Dl = (t) => ({ builder: (
  /*builder*/
  t[12]
) }), ub = (t) => ({ builder: t & /*$checkboxItem*/
2 }), xl = (t) => ({ builder: (
  /*$checkboxItem*/
  t[1]
) });
function fb(t) {
  const e = t.slice(), n = (
    /*$checkboxItem*/
    e[1]
  );
  return e[12] = n, e;
}
function db(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[9].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[8],
    Dl
  );
  let a = [
    /*builder*/
    t[12],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        ct(
          /*builder*/
          t[12].action(e)
        ),
        Q(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-focusin",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-focusout",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[3]
        ),
        Q(
          e,
          "m-pointermove",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $checkboxItem*/
      258) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[8],
        n ? ne(
          i,
          /*$$scope*/
          c[8],
          u,
          cb
        ) : se(
          /*$$scope*/
          c[8]
        ),
        Dl
      ), le(e, l = de(a, [
        u & /*$checkboxItem*/
        2 && /*builder*/
        c[12],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function hb(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[8],
    xl
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
      258) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[8],
        e ? ne(
          n,
          /*$$scope*/
          s[8],
          i,
          ub
        ) : se(
          /*$$scope*/
          s[8]
        ),
        xl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function mb(t) {
  let e, n, r, s;
  const i = [hb, db], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? fb(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function pb(t, e, n) {
  const r = ["checked", "onCheckedChange", "disabled", "asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { checked: l = void 0 } = e, { onCheckedChange: c = void 0 } = e, { disabled: u = void 0 } = e, { asChild: f = !1 } = e;
  const { elements: { checkboxItem: d }, states: { checked: h }, updateOption: m } = nn.setCheckboxItem({
    disabled: u,
    defaultChecked: l,
    onCheckedChange: ({ next: p }) => (c == null || c(p), n(5, l = p), p)
  });
  Ge(t, d, (p) => n(1, i = p));
  const g = Yt();
  return t.$$set = (p) => {
    e = S(S({}, e), be(p)), n(4, s = $(e, r)), "checked" in p && n(5, l = p.checked), "onCheckedChange" in p && n(6, c = p.onCheckedChange), "disabled" in p && n(7, u = p.disabled), "asChild" in p && n(0, f = p.asChild), "$$scope" in p && n(8, a = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && h.set(l), t.$$.dirty & /*disabled*/
    128 && m("disabled", u);
  }, [
    f,
    i,
    d,
    g,
    s,
    l,
    c,
    u,
    a,
    o
  ];
}
class gb extends J {
  constructor(e) {
    super(), X(this, e, pb, mb, Y, {
      checked: 5,
      onCheckedChange: 6,
      disabled: 7,
      asChild: 0
    });
  }
}
const _b = (t) => ({ checked: t & /*$checked*/
1 }), Ll = (t) => ({ checked: (
  /*$checked*/
  t[0]
) });
function Fl(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[3],
    Ll
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
      9) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          _b
        ) : se(
          /*$$scope*/
          s[3]
        ),
        Ll
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function bb(t) {
  let e, n, r = (
    /*$checked*/
    t[0] && Fl(t)
  ), s = [
    /*$$restProps*/
    t[2]
  ], i = {};
  for (let o = 0; o < s.length; o += 1)
    i = S(i, s[o]);
  return {
    c() {
      e = O("div"), r && r.c(), le(e, i);
    },
    m(o, a) {
      C(o, e, a), r && r.m(e, null), n = !0;
    },
    p(o, [a]) {
      /*$checked*/
      o[0] ? r ? (r.p(o, a), a & /*$checked*/
      1 && v(r, 1)) : (r = Fl(o), r.c(), v(r, 1), r.m(e, null)) : r && (Oe(), y(r, 1, 1, () => {
        r = null;
      }), Ie()), le(e, i = de(s, [a & /*$$restProps*/
      4 && /*$$restProps*/
      o[2]]));
    },
    i(o) {
      n || (v(r), n = !0);
    },
    o(o) {
      y(r), n = !1;
    },
    d(o) {
      o && w(e), r && r.d();
    }
  };
}
function vb(t, e, n) {
  const r = [];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e;
  const l = nn.getCheckboxIndicator();
  return Ge(t, l, (c) => n(0, i = c)), t.$$set = (c) => {
    e = S(S({}, e), be(c)), n(2, s = $(e, r)), "$$scope" in c && n(3, a = c.$$scope);
  }, [i, l, s, a, o];
}
class yb extends J {
  constructor(e) {
    super(), X(this, e, vb, bb, Y, {});
  }
}
const kb = {
  get: () => mu()
}, wb = (t) => ({ builder: t & /*$root*/
2 }), Bl = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Cb = (t) => ({ builder: t & /*$root*/
2 }), zl = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function Tb(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[7] = n, e;
}
function Sb(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    Bl
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("label"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        ct(
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
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $root*/
      34) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? ne(
          i,
          /*$$scope*/
          c[5],
          u,
          wb
        ) : se(
          /*$$scope*/
          c[5]
        ),
        Bl
      ), le(e, l = de(a, [
        u & /*$root*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function Eb(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    zl
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
      34) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          Cb
        ) : se(
          /*$$scope*/
          s[5]
        ),
        zl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Ab(t) {
  let e, n, r, s;
  const i = [Eb, Sb], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? Tb(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function Ob(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { elements: { root: c } } = kb.get();
  Ge(t, c, (f) => n(1, i = f));
  const u = Yt();
  return t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
let Ib = class extends J {
  constructor(e) {
    super(), X(this, e, Ob, Ab, Y, { asChild: 0 });
  }
};
const Cu = "Select", Tu = "SelectGroup", Su = "SelectItem", Mn = {
  set: Rb,
  get: ir,
  setGroup: Nb,
  setItem: Pb,
  getItemIndicator: jb,
  getGroupLabel: Mb,
  setArrow: Db
};
function ir() {
  return Nt(Cu);
}
function Rb(t) {
  const e = bg(rr(t));
  return zt(Cu, e), {
    ...e,
    updateOption: sr(e.options)
  };
}
function Nb() {
  const t = so();
  zt(Tu, t);
  const { elements: { group: e } } = ir();
  return { group: e, id: t };
}
function Pb(t) {
  const e = ir();
  return zt(Su, t), e;
}
function Mb() {
  const t = Nt(Tu), { elements: { groupLabel: e } } = ir();
  return { groupLabel: e, id: t };
}
function jb() {
  const { helpers: { isSelected: t } } = ir();
  return {
    value: Nt(Su),
    isSelected: t
  };
}
function Db(t = 8) {
  const e = ir();
  return e.options.arrowSize.set(t), e;
}
function xb(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].default
  ), r = te(
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
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, [i]) {
      r && r.p && (!e || i & /*$$scope*/
      65536) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[16],
        e ? ne(
          n,
          /*$$scope*/
          s[16],
          i,
          null
        ) : se(
          /*$$scope*/
          s[16]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Lb(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e, { required: i = void 0 } = e, { disabled: o = void 0 } = e, { arrowSize: a = void 0 } = e, { preventScroll: l = void 0 } = e, { loop: c = void 0 } = e, { closeOnEscape: u = void 0 } = e, { closeOnOutsideClick: f = void 0 } = e, { portal: d = void 0 } = e, { positioning: h = void 0 } = e, { name: m = void 0 } = e, { multiple: g = void 0 } = e, { selected: p = void 0 } = e, { onSelectedChange: _ = void 0 } = e, { open: b = void 0 } = e, { onOpenChange: k = void 0 } = e, { forceVisible: I = !0 } = e;
  const { states: { open: q, selected: P }, updateOption: D } = Mn.set({
    required: i,
    disabled: o,
    arrowSize: a,
    preventScroll: l,
    loop: c,
    closeOnEscape: u,
    closeOnOutsideClick: f,
    portal: d,
    positioning: h,
    name: m,
    multiple: g,
    forceVisible: I,
    defaultSelected: p,
    defaultOpen: b,
    onSelectedChange: ({ next: Z }) => (p !== Z && (_ == null || _(Z), n(0, p = Z)), Z),
    onOpenChange: ({ next: Z }) => (b !== Z && (k == null || k(Z), n(1, b = Z)), Z)
  });
  return t.$$set = (Z) => {
    "required" in Z && n(2, i = Z.required), "disabled" in Z && n(3, o = Z.disabled), "arrowSize" in Z && n(4, a = Z.arrowSize), "preventScroll" in Z && n(5, l = Z.preventScroll), "loop" in Z && n(6, c = Z.loop), "closeOnEscape" in Z && n(7, u = Z.closeOnEscape), "closeOnOutsideClick" in Z && n(8, f = Z.closeOnOutsideClick), "portal" in Z && n(9, d = Z.portal), "positioning" in Z && n(10, h = Z.positioning), "name" in Z && n(11, m = Z.name), "multiple" in Z && n(12, g = Z.multiple), "selected" in Z && n(0, p = Z.selected), "onSelectedChange" in Z && n(13, _ = Z.onSelectedChange), "open" in Z && n(1, b = Z.open), "onOpenChange" in Z && n(14, k = Z.onOpenChange), "forceVisible" in Z && n(15, I = Z.forceVisible), "$$scope" in Z && n(16, s = Z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    2 && b !== void 0 && q.set(b), t.$$.dirty & /*selected*/
    1 && p !== void 0 && P.set(p), t.$$.dirty & /*required*/
    4 && D("required", i), t.$$.dirty & /*disabled*/
    8 && D("disabled", o), t.$$.dirty & /*arrowSize*/
    16 && D("arrowSize", a), t.$$.dirty & /*preventScroll*/
    32 && D("preventScroll", l), t.$$.dirty & /*loop*/
    64 && D("loop", c), t.$$.dirty & /*closeOnEscape*/
    128 && D("closeOnEscape", u), t.$$.dirty & /*closeOnOutsideClick*/
    256 && D("closeOnOutsideClick", f), t.$$.dirty & /*portal*/
    512 && D("portal", d), t.$$.dirty & /*positioning*/
    1024 && D("positioning", h), t.$$.dirty & /*name*/
    2048 && D("name", m), t.$$.dirty & /*multiple*/
    4096 && D("multiple", g), t.$$.dirty & /*forceVisible*/
    32768 && D("forceVisible", I);
  }, [
    p,
    b,
    i,
    o,
    a,
    l,
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    _,
    k,
    I,
    s,
    r
  ];
}
let Fb = class extends J {
  constructor(e) {
    super(), X(this, e, Lb, xb, Y, {
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
const Bb = (t) => ({ builder: t & /*$menu*/
256 }), Zl = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), zb = (t) => ({ builder: t & /*$menu*/
256 }), Vl = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), Zb = (t) => ({ builder: t & /*$menu*/
256 }), Wl = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), Vb = (t) => ({ builder: t & /*$menu*/
256 }), Hl = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), Wb = (t) => ({ builder: t & /*$menu*/
256 }), Gl = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), Hb = (t) => ({ builder: t & /*$menu*/
256 }), Ul = (t) => ({ builder: (
  /*builder*/
  t[15]
) });
function Gb(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Ub(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Kb(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function qb(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function $b(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Yb(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[15] = n, e;
}
function Xb(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[14].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[13],
    Zl
  );
  let a = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = [
        ct(
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
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $menu*/
      8448) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[13],
        n ? ne(
          i,
          /*$$scope*/
          c[13],
          u,
          Bb
        ) : se(
          /*$$scope*/
          c[13]
        ),
        Zl
      ), le(e, l = de(a, [
        u & /*$menu*/
        256 && /*builder*/
        c[15],
        u & /*$$restProps*/
        4096 && /*$$restProps*/
        c[12]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function Jb(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[14].default
  ), a = te(
    o,
    t,
    /*$$scope*/
    t[13],
    Vl
  );
  let l = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        ct(
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
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      8448) && re(
        a,
        o,
        t,
        /*$$scope*/
        t[13],
        r ? ne(
          o,
          /*$$scope*/
          t[13],
          f,
          zb
        ) : se(
          /*$$scope*/
          t[13]
        ),
        Vl
      ), le(e, c = de(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[15],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (v(a, u), n && n.end(1), r = !0);
    },
    o(u) {
      y(a, u), u && (n = js(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), u && n && n.end(), s = !1, Je(i);
    }
  };
}
function Qb(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[14].default
  ), a = te(
    o,
    t,
    /*$$scope*/
    t[13],
    Wl
  );
  let l = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        ct(
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
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      8448) && re(
        a,
        o,
        t,
        /*$$scope*/
        t[13],
        r ? ne(
          o,
          /*$$scope*/
          t[13],
          f,
          Zb
        ) : se(
          /*$$scope*/
          t[13]
        ),
        Wl
      ), le(e, c = de(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[15],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (v(a, u), u && (n || It(() => {
        n = Ms(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start();
      })), r = !0);
    },
    o(u) {
      y(a, u), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), s = !1, Je(i);
    }
  };
}
function e1(t) {
  let e, n, r, s, i, o;
  const a = (
    /*#slots*/
    t[14].default
  ), l = te(
    a,
    t,
    /*$$scope*/
    t[13],
    Hl
  );
  let c = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = S(u, c[f]);
  return {
    c() {
      e = O("div"), l && l.c(), le(e, u);
    },
    m(f, d) {
      C(f, e, d), l && l.m(e, null), s = !0, i || (o = [
        ct(
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
    p(f, d) {
      t = f, l && l.p && (!s || d & /*$$scope, $menu*/
      8448) && re(
        l,
        a,
        t,
        /*$$scope*/
        t[13],
        s ? ne(
          a,
          /*$$scope*/
          t[13],
          d,
          Vb
        ) : se(
          /*$$scope*/
          t[13]
        ),
        Hl
      ), le(e, u = de(c, [
        d & /*$menu*/
        256 && /*builder*/
        t[15],
        d & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(f) {
      s || (v(l, f), f && It(() => {
        s && (r && r.end(1), n = Ms(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start());
      }), s = !0);
    },
    o(f) {
      y(l, f), n && n.invalidate(), f && (r = js(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), s = !1;
    },
    d(f) {
      f && w(e), l && l.d(f), f && r && r.end(), i = !1, Je(o);
    }
  };
}
function t1(t) {
  let e, n, r, s, i;
  const o = (
    /*#slots*/
    t[14].default
  ), a = te(
    o,
    t,
    /*$$scope*/
    t[13],
    Gl
  );
  let l = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), r = !0, s || (i = [
        ct(
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
    p(u, f) {
      t = u, a && a.p && (!r || f & /*$$scope, $menu*/
      8448) && re(
        a,
        o,
        t,
        /*$$scope*/
        t[13],
        r ? ne(
          o,
          /*$$scope*/
          t[13],
          f,
          Wb
        ) : se(
          /*$$scope*/
          t[13]
        ),
        Gl
      ), le(e, c = de(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[15],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(u) {
      r || (v(a, u), u && It(() => {
        r && (n || (n = ys(
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
      y(a, u), u && (n || (n = ys(
        e,
        /*transition*/
        t[0],
        /*transitionConfig*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), u && n && n.end(), s = !1, Je(i);
    }
  };
}
function n1(t) {
  let e;
  const n = (
    /*#slots*/
    t[14].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[13],
    Ul
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
      8448) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[13],
        e ? ne(
          n,
          /*$$scope*/
          s[13],
          i,
          Hb
        ) : se(
          /*$$scope*/
          s[13]
        ),
        Ul
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function r1(t) {
  let e, n, r, s;
  const i = [
    n1,
    t1,
    e1,
    Qb,
    Jb,
    Xb
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
      return Yb(c);
    if (u === 1)
      return $b(c);
    if (u === 2)
      return qb(c);
    if (u === 3)
      return Kb(c);
    if (u === 4)
      return Ub(c);
    if (u === 5)
      return Gb(c);
  }
  return ~(e = a(t)) && (n = o[e] = i[e](l(t, e))), {
    c() {
      n && n.c(), r = Ee();
    },
    m(c, u) {
      ~e && o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? ~e && o[e].p(l(c, e), u) : (n && (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie()), ~e ? (n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), ~e && o[e].d(c);
    }
  };
}
function s1(t, e, n) {
  const r = [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ];
  let s = $(e, r), i, o, { $$slots: a = {}, $$scope: l } = e, { transition: c = void 0 } = e, { transitionConfig: u = void 0 } = e, { inTransition: f = void 0 } = e, { inTransitionConfig: d = void 0 } = e, { outTransition: h = void 0 } = e, { outTransitionConfig: m = void 0 } = e, { asChild: g = !1 } = e;
  const { elements: { menu: p }, states: { open: _ } } = Mn.get();
  Ge(t, p, (k) => n(8, o = k)), Ge(t, _, (k) => n(7, i = k));
  const b = Yt();
  return t.$$set = (k) => {
    e = S(S({}, e), be(k)), n(12, s = $(e, r)), "transition" in k && n(0, c = k.transition), "transitionConfig" in k && n(1, u = k.transitionConfig), "inTransition" in k && n(2, f = k.inTransition), "inTransitionConfig" in k && n(3, d = k.inTransitionConfig), "outTransition" in k && n(4, h = k.outTransition), "outTransitionConfig" in k && n(5, m = k.outTransitionConfig), "asChild" in k && n(6, g = k.asChild), "$$scope" in k && n(13, l = k.$$scope);
  }, [
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    i,
    o,
    p,
    _,
    b,
    s,
    l,
    a
  ];
}
class i1 extends J {
  constructor(e) {
    super(), X(this, e, s1, r1, Y, {
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
const o1 = (t) => ({ builder: t & /*$group*/
2 }), Kl = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), l1 = (t) => ({ builder: t & /*$group*/
2 }), ql = (t) => ({
  builder: (
    /*$group*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function a1(t) {
  const e = t.slice(), n = (
    /*$group*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function c1(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    Kl
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), n = !0, r || (s = ct(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $group*/
      34) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? ne(
          i,
          /*$$scope*/
          c[5],
          u,
          o1
        ) : se(
          /*$$scope*/
          c[5]
        ),
        Kl
      ), le(e, l = de(a, [
        u & /*$group*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, s();
    }
  };
}
function u1(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    ql
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
      34) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          l1
        ) : se(
          /*$$scope*/
          s[5]
        ),
        ql
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function f1(t) {
  let e, n, r, s;
  const i = [u1, c1], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? a1(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function d1(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { group: c, id: u } = Mn.setGroup();
  return Ge(t, c, (f) => n(1, i = f)), t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class h1 extends J {
  constructor(e) {
    super(), X(this, e, d1, f1, Y, { asChild: 0 });
  }
}
const m1 = (t) => ({
  builder: t & /*$option, value, disabled, label*/
  23
}), $l = (t) => ({ builder: (
  /*builder*/
  t[10]
) }), p1 = (t) => ({
  builder: t & /*$option, value, disabled, label*/
  23
}), Yl = (t) => ({
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
function g1(t) {
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
function _1(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[9].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[8],
    $l
  ), a = o || v1(t);
  let l = [
    /*builder*/
    t[10],
    /*$$restProps*/
    t[7]
  ], c = {};
  for (let u = 0; u < l.length; u += 1)
    c = S(c, l[u]);
  return {
    c() {
      e = O("div"), a && a.c(), le(e, c);
    },
    m(u, f) {
      C(u, e, f), a && a.m(e, null), n = !0, r || (s = [
        ct(
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
      279) && re(
        o,
        i,
        u,
        /*$$scope*/
        u[8],
        n ? ne(
          i,
          /*$$scope*/
          u[8],
          f,
          m1
        ) : se(
          /*$$scope*/
          u[8]
        ),
        $l
      ) : a && a.p && (!n || f & /*label, value*/
      5) && a.p(u, n ? f : -1), le(e, c = de(l, [
        f & /*$option, value, disabled, label*/
        23 && /*builder*/
        u[10],
        f & /*$$restProps*/
        128 && /*$$restProps*/
        u[7]
      ]));
    },
    i(u) {
      n || (v(a, u), n = !0);
    },
    o(u) {
      y(a, u), n = !1;
    },
    d(u) {
      u && w(e), a && a.d(u), r = !1, Je(s);
    }
  };
}
function b1(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[8],
    Yl
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $option, value, disabled, label*/
      279) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[8],
        e ? ne(
          n,
          /*$$scope*/
          s[8],
          i,
          p1
        ) : se(
          /*$$scope*/
          s[8]
        ),
        Yl
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function v1(t) {
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
      n = Me(e);
    },
    m(r, s) {
      C(r, n, s);
    },
    p(r, s) {
      s & /*label, value*/
      5 && e !== (e = /*label*/
      (r[2] ? (
        /*label*/
        r[2]
      ) : (
        /*value*/
        r[0]
      )) + "") && Qe(n, e);
    },
    d(r) {
      r && w(n);
    }
  };
}
function y1(t) {
  let e, n, r, s;
  const i = [b1, _1], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[3] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? g1(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function k1(t, e, n) {
  const r = ["value", "disabled", "label", "asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { value: l } = e, { disabled: c = void 0 } = e, { label: u = void 0 } = e, { asChild: f = !1 } = e;
  const { elements: { option: d } } = Mn.setItem(l);
  Ge(t, d, (m) => n(4, i = m));
  const h = Yt();
  return t.$$set = (m) => {
    e = S(S({}, e), be(m)), n(7, s = $(e, r)), "value" in m && n(0, l = m.value), "disabled" in m && n(1, c = m.disabled), "label" in m && n(2, u = m.label), "asChild" in m && n(3, f = m.asChild), "$$scope" in m && n(8, a = m.$$scope);
  }, [
    l,
    c,
    u,
    f,
    i,
    d,
    h,
    s,
    a,
    o
  ];
}
class w1 extends J {
  constructor(e) {
    super(), X(this, e, k1, y1, Y, {
      value: 0,
      disabled: 1,
      label: 2,
      asChild: 3
    });
  }
}
function Xl(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = te(
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
      8) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : se(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function C1(t) {
  let e = (
    /*$isSelected*/
    t[0](
      /*value*/
      t[2]
    )
  ), n, r, s = e && Xl(t);
  return {
    c() {
      s && s.c(), n = Ee();
    },
    m(i, o) {
      s && s.m(i, o), C(i, n, o), r = !0;
    },
    p(i, [o]) {
      o & /*$isSelected*/
      1 && (e = /*$isSelected*/
      i[0](
        /*value*/
        i[2]
      )), e ? s ? (s.p(i, o), o & /*$isSelected*/
      1 && v(s, 1)) : (s = Xl(i), s.c(), v(s, 1), s.m(n.parentNode, n)) : s && (Oe(), y(s, 1, 1, () => {
        s = null;
      }), Ie());
    },
    i(i) {
      r || (v(s), r = !0);
    },
    o(i) {
      y(s), r = !1;
    },
    d(i) {
      i && w(n), s && s.d(i);
    }
  };
}
function T1(t, e, n) {
  let r, { $$slots: s = {}, $$scope: i } = e;
  const { isSelected: o, value: a } = Mn.getItemIndicator();
  return Ge(t, o, (l) => n(0, r = l)), t.$$set = (l) => {
    "$$scope" in l && n(3, i = l.$$scope);
  }, [r, o, a, i, s];
}
class S1 extends J {
  constructor(e) {
    super(), X(this, e, T1, C1, Y, {});
  }
}
const E1 = (t) => ({ builder: t & /*$trigger*/
2 }), Jl = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), A1 = (t) => ({ builder: t & /*$trigger*/
2 }), Ql = (t) => ({ builder: (
  /*$trigger*/
  t[1]
) });
function O1(t) {
  const e = t.slice(), n = (
    /*$trigger*/
    e[1]
  );
  return e[7] = n, e;
}
function I1(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[6].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    Jl
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("button"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (s = [
        ct(
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
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $trigger*/
      34) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[5],
        n ? ne(
          i,
          /*$$scope*/
          c[5],
          u,
          E1
        ) : se(
          /*$$scope*/
          c[5]
        ),
        Jl
      ), le(e, l = de(a, [
        u & /*$trigger*/
        2 && /*builder*/
        c[7],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function R1(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    Ql
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
      34) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          A1
        ) : se(
          /*$$scope*/
          s[5]
        ),
        Ql
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function N1(t) {
  let e, n, r, s;
  const i = [R1, I1], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? O1(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function P1(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { elements: { trigger: c } } = Mn.get();
  Ge(t, c, (f) => n(1, i = f));
  const u = Yt();
  return t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, c, u, s, a, o];
}
class M1 extends J {
  constructor(e) {
    super(), X(this, e, P1, N1, Y, { asChild: 0 });
  }
}
const j1 = (t) => ({ label: t & /*$selectedLabel*/
4 }), ea = (t) => ({ label: (
  /*$selectedLabel*/
  t[2]
) });
function D1(t) {
  let e, n = (
    /*$selectedLabel*/
    (t[2] ? (
      /*$selectedLabel*/
      t[2]
    ) : (
      /*placeholder*/
      t[0]
    )) + ""
  ), r, s = [
    /*$$restProps*/
    t[4]
  ], i = {};
  for (let o = 0; o < s.length; o += 1)
    i = S(i, s[o]);
  return {
    c() {
      e = O("span"), r = Me(n), le(e, i);
    },
    m(o, a) {
      C(o, e, a), R(e, r);
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
      )) + "") && hd(r, n, i.contenteditable), le(e, i = de(s, [a & /*$$restProps*/
      16 && /*$$restProps*/
      o[4]]));
    },
    i: _e,
    o: _e,
    d(o) {
      o && w(e);
    }
  };
}
function x1(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[5],
    ea
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i & /*$$scope, $selectedLabel*/
      36) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        e ? ne(
          n,
          /*$$scope*/
          s[5],
          i,
          j1
        ) : se(
          /*$$scope*/
          s[5]
        ),
        ea
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function L1(t) {
  let e, n, r, s;
  const i = [x1, D1], o = [];
  function a(l, c) {
    return (
      /*asChild*/
      l[1] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function F1(t, e, n) {
  const r = ["placeholder", "asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { placeholder: l = "" } = e, { asChild: c = !1 } = e;
  const { states: { selectedLabel: u } } = Mn.get();
  return Ge(t, u, (f) => n(2, i = f)), t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(4, s = $(e, r)), "placeholder" in f && n(0, l = f.placeholder), "asChild" in f && n(1, c = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [
    l,
    c,
    i,
    u,
    s,
    a,
    o
  ];
}
class B1 extends J {
  constructor(e) {
    super(), X(this, e, F1, L1, Y, { placeholder: 0, asChild: 1 });
  }
}
const Eu = "Switch", Au = {
  set: z1,
  get: Z1
};
function z1(t) {
  const e = kg(rr(t));
  return zt(Eu, e), {
    ...e,
    updateOption: sr(e.options)
  };
}
function Z1() {
  return Nt(Eu);
}
const V1 = (t) => ({ builder: t & /*$root*/
2 }), ta = (t) => ({ builder: (
  /*builder*/
  t[14]
) }), W1 = (t) => ({ builder: t & /*$root*/
2 }), na = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function H1(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[14] = n, e;
}
function G1(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[11].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[10],
    ta
  );
  let a = [
    /*builder*/
    t[14],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("button"), o && o.c(), le(e, l);
    },
    m(c, u) {
      C(c, e, u), o && o.m(e, null), e.autofocus && e.focus(), n = !0, r || (s = [
        ct(
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
    p(c, u) {
      o && o.p && (!n || u & /*$$scope, $root*/
      1026) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[10],
        n ? ne(
          i,
          /*$$scope*/
          c[10],
          u,
          V1
        ) : se(
          /*$$scope*/
          c[10]
        ),
        ta
      ), le(e, l = de(a, [
        u & /*$root*/
        2 && /*builder*/
        c[14],
        u & /*$$restProps*/
        16 && /*$$restProps*/
        c[4]
      ]));
    },
    i(c) {
      n || (v(o, c), n = !0);
    },
    o(c) {
      y(o, c), n = !1;
    },
    d(c) {
      c && w(e), o && o.d(c), r = !1, Je(s);
    }
  };
}
function U1(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[10],
    na
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
      1026) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[10],
        e ? ne(
          n,
          /*$$scope*/
          s[10],
          i,
          W1
        ) : se(
          /*$$scope*/
          s[10]
        ),
        na
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function K1(t) {
  let e, n, r, s;
  const i = [U1, G1], o = [];
  function a(c, u) {
    return (
      /*asChild*/
      c[0] ? 0 : 1
    );
  }
  function l(c, u) {
    return u === 1 ? H1(c) : c;
  }
  return e = a(t), n = o[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ee();
    },
    m(c, u) {
      o[e].m(c, u), C(c, r, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = a(c), e === f ? o[e].p(l(c, e), u) : (Oe(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), Ie(), n = o[e], n ? n.p(l(c, e), u) : (n = o[e] = i[e](l(c, e)), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(c) {
      s || (v(n), s = !0);
    },
    o(c) {
      y(n), s = !1;
    },
    d(c) {
      c && w(r), o[e].d(c);
    }
  };
}
function q1(t, e, n) {
  const r = ["checked", "onCheckedChange", "disabled", "name", "value", "asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { checked: l = void 0 } = e, { onCheckedChange: c = void 0 } = e, { disabled: u = void 0 } = e, { name: f = void 0 } = e, { value: d = void 0 } = e, { asChild: h = !1 } = e;
  const { elements: { root: m }, states: { checked: g }, updateOption: p } = Au.set({
    disabled: u,
    name: f,
    value: d,
    defaultChecked: l,
    onCheckedChange: ({ next: b }) => (l !== b && (c == null || c(b), n(5, l = b)), b)
  });
  Ge(t, m, (b) => n(1, i = b));
  const _ = Yt();
  return t.$$set = (b) => {
    e = S(S({}, e), be(b)), n(4, s = $(e, r)), "checked" in b && n(5, l = b.checked), "onCheckedChange" in b && n(6, c = b.onCheckedChange), "disabled" in b && n(7, u = b.disabled), "name" in b && n(8, f = b.name), "value" in b && n(9, d = b.value), "asChild" in b && n(0, h = b.asChild), "$$scope" in b && n(10, a = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && g.set(l), t.$$.dirty & /*disabled*/
    128 && p("disabled", u), t.$$.dirty & /*name*/
    256 && p("name", f), t.$$.dirty & /*value*/
    512 && p("value", d);
  }, [
    h,
    i,
    m,
    _,
    s,
    l,
    c,
    u,
    f,
    d,
    a,
    o
  ];
}
let $1 = class extends J {
  constructor(e) {
    super(), X(this, e, q1, K1, Y, {
      checked: 5,
      onCheckedChange: 6,
      disabled: 7,
      name: 8,
      value: 9,
      asChild: 0
    });
  }
};
const Y1 = (t) => ({ builder: t & /*$checked*/
2 }), ra = (t) => ({ builder: (
  /*$checked*/
  t[1]
) });
function X1(t) {
  let e, n, r = [
    {
      "data-state": n = /*$checked*/
      t[1] ? "checked" : "unchecked"
    },
    /*$$restProps*/
    t[3]
  ], s = {};
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return {
    c() {
      e = O("span"), le(e, s);
    },
    m(i, o) {
      C(i, e, o);
    },
    p(i, o) {
      le(e, s = de(r, [
        o & /*$checked*/
        2 && n !== (n = /*$checked*/
        i[1] ? "checked" : "unchecked") && { "data-state": n },
        o & /*$$restProps*/
        8 && /*$$restProps*/
        i[3]
      ]));
    },
    i: _e,
    o: _e,
    d(i) {
      i && w(e);
    }
  };
}
function J1(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[4],
    ra
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
      18) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        e ? ne(
          n,
          /*$$scope*/
          s[4],
          i,
          Y1
        ) : se(
          /*$$scope*/
          s[4]
        ),
        ra
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Q1(t) {
  let e, n, r, s;
  const i = [J1, X1], o = [];
  function a(l, c) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function ev(t, e, n) {
  const r = ["asChild"];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const c = Au.get().states.checked;
  return Ge(t, c, (u) => n(1, i = u)), t.$$set = (u) => {
    e = S(S({}, e), be(u)), n(3, s = $(e, r)), "asChild" in u && n(0, l = u.asChild), "$$scope" in u && n(4, a = u.$$scope);
  }, [l, i, c, s, a, o];
}
class tv extends J {
  constructor(e) {
    super(), X(this, e, ev, Q1, Y, { asChild: 0 });
  }
}
function nv(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = te(
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
      16) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        e ? ne(
          n,
          /*$$scope*/
          s[4],
          i,
          null
        ) : se(
          /*$$scope*/
          s[4]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function rv(t) {
  let e, n;
  const r = [
    {
      class: Pe(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let s = {
    $$slots: { default: [nv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Ib({ props: s }), e.$on(
    "mousedown",
    /*mousedown_handler*/
    t[3]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, className, $$restProps*/
      3 ? de(r, [
        o & /*cn, className*/
        1 && {
          class: Pe(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        2 && it(
          /*$$restProps*/
          i[1]
        )
      ]) : {};
      o & /*$$scope*/
      16 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function sv(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  function l(c) {
    ye.call(this, t, c);
  }
  return t.$$set = (c) => {
    e = S(S({}, e), be(c)), n(1, s = $(e, r)), "class" in c && n(0, a = c.class), "$$scope" in c && n(4, o = c.$$scope);
  }, [a, s, i, l, o];
}
class oo extends J {
  constructor(e) {
    super(), X(this, e, sv, rv, Y, { class: 0 });
  }
}
function iv(t) {
  let e;
  return {
    c() {
      e = Me(
        /*label*/
        t[1]
      );
    },
    m(n, r) {
      C(n, e, r);
    },
    p(n, r) {
      r & /*label*/
      2 && Qe(
        e,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && w(e);
    }
  };
}
function ov(t) {
  let e, n, r, s, i, o, a, l;
  return n = new oo({
    props: {
      for: (
        /*id*/
        t[0]
      ),
      $$slots: { default: [iv] },
      $$scope: { ctx: t }
    }
  }), s = new Wc({
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
  }), s.$on(
    "input",
    /*input_handler*/
    t[6]
  ), {
    c() {
      e = O("div"), B(n.$$.fragment), r = oe(), B(s.$$.fragment), i = oe(), o = O("div"), a = Me(
        /*msg*/
        t[4]
      ), N(o, "class", "text-red-500"), N(e, "class", "flex flex-col w-full max-w-sm gap-1.5");
    },
    m(c, u) {
      C(c, e, u), L(n, e, null), R(e, r), L(s, e, null), R(e, i), R(e, o), R(o, a), l = !0;
    },
    p(c, [u]) {
      const f = {};
      u & /*id*/
      1 && (f.for = /*id*/
      c[0]), u & /*$$scope, label*/
      130 && (f.$$scope = { dirty: u, ctx: c }), n.$set(f);
      const d = {};
      u & /*type*/
      4 && (d.type = /*type*/
      c[2]), u & /*id*/
      1 && (d.id = /*id*/
      c[0]), u & /*placeholder*/
      8 && (d.placeholder = /*placeholder*/
      c[3]), s.$set(d), (!l || u & /*msg*/
      16) && Qe(
        a,
        /*msg*/
        c[4]
      );
    },
    i(c) {
      l || (v(n.$$.fragment, c), v(s.$$.fragment, c), l = !0);
    },
    o(c) {
      y(n.$$.fragment, c), y(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && w(e), F(n), F(s);
    }
  };
}
function lv(t, e, n) {
  let { id: r = "" } = e, { label: s = "" } = e, { type: i = "text" } = e, { placeholder: o = "" } = e, { msg: a = "" } = e;
  const l = Bt(), c = (u) => {
    l("onChange", { id: r, value: u.target.value });
  };
  return t.$$set = (u) => {
    "id" in u && n(0, r = u.id), "label" in u && n(1, s = u.label), "type" in u && n(2, i = u.type), "placeholder" in u && n(3, o = u.placeholder), "msg" in u && n(4, a = u.msg);
  }, [r, s, i, o, a, l, c];
}
class av extends J {
  constructor(e) {
    super(), X(this, e, lv, ov, Y, {
      id: 0,
      label: 1,
      type: 2,
      placeholder: 3,
      msg: 4
    });
  }
}
function sa(t, e, n) {
  const r = t.slice();
  return r[6] = e[n], r[8] = n, r;
}
function ia(t) {
  let e, n = (
    /*props*/
    t[0].label + ""
  ), r, s;
  return {
    c() {
      e = O("label"), r = Me(n), N(e, "class", "p-2"), N(e, "for", s = /*props*/
      t[0].name);
    },
    m(i, o) {
      C(i, e, o), R(e, r);
    },
    p(i, o) {
      o & /*props*/
      1 && n !== (n = /*props*/
      i[0].label + "") && Qe(r, n), o & /*props*/
      1 && s !== (s = /*props*/
      i[0].name) && N(e, "for", s);
    },
    d(i) {
      i && w(e);
    }
  };
}
function oa(t) {
  let e, n, r, s, i, o, a, l, c;
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
      e = O("div"), n = O("input"), a = oe(), N(n, "class", "w-full"), N(n, "type", "text"), N(n, "placeholder", "......"), N(n, "name", r = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`), N(n, "id", s = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`), n.required = !0, N(n, "minlength", i = /*props*/
      t[0].minlength || 6), N(n, "maxlength", o = /*props*/
      t[0].maxlength || 20), N(e, "class", "flex items-center border-2 py-2 p-2 rounded-2xl");
    },
    m(f, d) {
      C(f, e, d), R(e, n), R(e, a), l || (c = Q(n, "input", u), l = !0);
    },
    p(f, d) {
      t = f, d & /*props*/
      1 && r !== (r = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`) && N(n, "name", r), d & /*props*/
      1 && s !== (s = `${/*props*/
      t[0].name}-${/*i*/
      t[8]}`) && N(n, "id", s), d & /*props*/
      1 && i !== (i = /*props*/
      t[0].minlength || 6) && N(n, "minlength", i), d & /*props*/
      1 && o !== (o = /*props*/
      t[0].maxlength || 20) && N(n, "maxlength", o);
    },
    d(f) {
      f && w(e), l = !1, c();
    }
  };
}
function cv(t) {
  let e, n, r, s = (
    /*props*/
    t[0].icon + ""
  ), i, o, a, l, c, u, f, d, h, m, g = (
    /*props*/
    t[0].label && ia(t)
  ), p = ze(
    /*value*/
    t[1]
  ), _ = [];
  for (let b = 0; b < p.length; b += 1)
    _[b] = oa(sa(t, p, b));
  return {
    c() {
      g && g.c(), e = oe(), n = O("section"), r = new hc(!1), i = oe(), o = O("div"), o.textContent = "+", a = oe(), l = O("textarea"), f = oe();
      for (let b = 0; b < _.length; b += 1)
        _[b].c();
      d = Ee(), r.a = i, N(o, "class", "btn btn-sm btn-circle"), N(l, "class", "outline-none hidden"), N(l, "name", c = /*props*/
      t[0].name), N(l, "id", u = /*props*/
      t[0].name);
    },
    m(b, k) {
      g && g.m(b, k), C(b, e, k), C(b, n, k), r.m(s, n), R(n, i), R(n, o), R(n, a), R(n, l), t[4](l), C(b, f, k);
      for (let I = 0; I < _.length; I += 1)
        _[I] && _[I].m(b, k);
      C(b, d, k), h || (m = Q(
        o,
        "click",
        /*addValue*/
        t[3]
      ), h = !0);
    },
    p(b, [k]) {
      if (/*props*/
      b[0].label ? g ? g.p(b, k) : (g = ia(b), g.c(), g.m(e.parentNode, e)) : g && (g.d(1), g = null), k & /*props*/
      1 && s !== (s = /*props*/
      b[0].icon + "") && r.p(s), k & /*props*/
      1 && c !== (c = /*props*/
      b[0].name) && N(l, "name", c), k & /*props*/
      1 && u !== (u = /*props*/
      b[0].name) && N(l, "id", u), k & /*props, value*/
      3) {
        p = ze(
          /*value*/
          b[1]
        );
        let I;
        for (I = 0; I < p.length; I += 1) {
          const q = sa(b, p, I);
          _[I] ? _[I].p(q, k) : (_[I] = oa(q), _[I].c(), _[I].m(d.parentNode, d));
        }
        for (; I < _.length; I += 1)
          _[I].d(1);
        _.length = p.length;
      }
    },
    i: _e,
    o: _e,
    d(b) {
      b && (w(e), w(n), w(f), w(d)), g && g.d(b), t[4](null), _t(_, b), h = !1, m();
    }
  };
}
function uv(t, e, n) {
  let { props: r } = e, s = r.values || [], i;
  const o = () => {
    n(1, s = s.concat([""]));
  };
  function a(c) {
    ft[c ? "unshift" : "push"](() => {
      i = c, n(2, i), n(1, s);
    });
  }
  const l = (c, u) => {
    n(1, s[c] = u.target.value, s);
  };
  return t.$$set = (c) => {
    "props" in c && n(0, r = c.props);
  }, t.$$.update = () => {
    t.$$.dirty & /*inputRef, value*/
    6 && i && n(2, i.value = s.join(`
`), i);
  }, [r, s, i, o, a, l];
}
class fv extends J {
  constructor(e) {
    super(), X(this, e, uv, cv, Y, { props: 0 });
  }
}
function la(t, e, n) {
  const r = t.slice();
  return r[4] = e[n], r[6] = n, r;
}
function aa(t) {
  let e, n = (
    /*props*/
    t[0].label + ""
  ), r, s;
  return {
    c() {
      e = O("label"), r = Me(n), N(e, "class", "p-2"), N(e, "for", s = /*props*/
      t[0].name);
    },
    m(i, o) {
      C(i, e, o), R(e, r);
    },
    p(i, o) {
      o & /*props*/
      1 && n !== (n = /*props*/
      i[0].label + "") && Qe(r, n), o & /*props*/
      1 && s !== (s = /*props*/
      i[0].name) && N(e, "for", s);
    },
    d(i) {
      i && w(e);
    }
  };
}
function ca(t) {
  let e, n = (
    /*item*/
    t[4] + ""
  );
  return {
    c() {
      e = O("div");
    },
    m(r, s) {
      C(r, e, s), e.innerHTML = n;
    },
    p(r, s) {
      s & /*curElement*/
      2 && n !== (n = /*item*/
      r[4] + "") && (e.innerHTML = n);
    },
    d(r) {
      r && w(e);
    }
  };
}
function dv(t) {
  let e, n, r, s = (
    /*props*/
    t[0].icon + ""
  ), i, o, a, l, c, u, f = (
    /*props*/
    t[0].label && aa(t)
  ), d = ze(
    /*curElement*/
    t[1]
  ), h = [];
  for (let m = 0; m < d.length; m += 1)
    h[m] = ca(la(t, d, m));
  return {
    c() {
      f && f.c(), e = oe(), n = O("section"), r = new hc(!1), i = oe(), o = O("div"), o.textContent = "+", a = oe(), l = O("div");
      for (let m = 0; m < h.length; m += 1)
        h[m].c();
      r.a = i, N(o, "class", "btn btn-sm btn-circle"), N(l, "class", "flex flex-col border-2 rounded-2xl");
    },
    m(m, g) {
      f && f.m(m, g), C(m, e, g), C(m, n, g), r.m(s, n), R(n, i), R(n, o), C(m, a, g), C(m, l, g);
      for (let p = 0; p < h.length; p += 1)
        h[p] && h[p].m(l, null);
      c || (u = Q(
        o,
        "click",
        /*addValue*/
        t[2]
      ), c = !0);
    },
    p(m, [g]) {
      if (/*props*/
      m[0].label ? f ? f.p(m, g) : (f = aa(m), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), g & /*props*/
      1 && s !== (s = /*props*/
      m[0].icon + "") && r.p(s), g & /*curElement*/
      2) {
        d = ze(
          /*curElement*/
          m[1]
        );
        let p;
        for (p = 0; p < d.length; p += 1) {
          const _ = la(m, d, p);
          h[p] ? h[p].p(_, g) : (h[p] = ca(_), h[p].c(), h[p].m(l, null));
        }
        for (; p < h.length; p += 1)
          h[p].d(1);
        h.length = d.length;
      }
    },
    i: _e,
    o: _e,
    d(m) {
      m && (w(e), w(n), w(a), w(l)), f && f.d(m), _t(h, m), c = !1, u();
    }
  };
}
function hv(t, e, n) {
  let { props: r } = e, s = [];
  if (r.times)
    for (let a = 0; a < r.times; a++)
      s.push(r.element(a));
  let i = s;
  const o = () => {
    n(1, i = i.concat([r.element(i.length)]));
  };
  return t.$$set = (a) => {
    "props" in a && n(0, r = a.props);
  }, [r, i, o];
}
class mv extends J {
  constructor(e) {
    super(), X(this, e, hv, dv, Y, { props: 0 });
  }
}
function pv(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = te(
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
      64) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[6],
        e ? ne(
          n,
          /*$$scope*/
          s[6],
          i,
          null
        ) : se(
          /*$$scope*/
          s[6]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function gv(t) {
  let e, n, r, s;
  const i = [
    /*$$restProps*/
    t[2]
  ];
  function o(c) {
    t[4](c);
  }
  function a(c) {
    t[5](c);
  }
  let l = {
    $$slots: { default: [pv] },
    $$scope: { ctx: t }
  };
  for (let c = 0; c < i.length; c += 1)
    l = S(l, i[c]);
  return (
    /*selected*/
    t[0] !== void 0 && (l.selected = /*selected*/
    t[0]), /*open*/
    t[1] !== void 0 && (l.open = /*open*/
    t[1]), e = new Fb({ props: l }), ft.push(() => Ft(e, "selected", o)), ft.push(() => Ft(e, "open", a)), {
      c() {
        B(e.$$.fragment);
      },
      m(c, u) {
        L(e, c, u), s = !0;
      },
      p(c, [u]) {
        const f = u & /*$$restProps*/
        4 ? de(i, [it(
          /*$$restProps*/
          c[2]
        )]) : {};
        u & /*$$scope*/
        64 && (f.$$scope = { dirty: u, ctx: c }), !n && u & /*selected*/
        1 && (n = !0, f.selected = /*selected*/
        c[0], Lt(() => n = !1)), !r && u & /*open*/
        2 && (r = !0, f.open = /*open*/
        c[1], Lt(() => r = !1)), e.$set(f);
      },
      i(c) {
        s || (v(e.$$.fragment, c), s = !0);
      },
      o(c) {
        y(e.$$.fragment, c), s = !1;
      },
      d(c) {
        F(e, c);
      }
    }
  );
}
function _v(t, e, n) {
  const r = ["selected", "open"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { selected: a = void 0 } = e, { open: l = void 0 } = e;
  function c(f) {
    a = f, n(0, a);
  }
  function u(f) {
    l = f, n(1, l);
  }
  return t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(2, s = $(e, r)), "selected" in f && n(0, a = f.selected), "open" in f && n(1, l = f.open), "$$scope" in f && n(6, o = f.$$scope);
  }, [
    a,
    l,
    s,
    i,
    c,
    u,
    o
  ];
}
class bv extends J {
  constructor(e) {
    super(), X(this, e, _v, gv, Y, { selected: 0, open: 1 });
  }
}
const ua = {
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
function fa(t, e, n) {
  const r = t.slice();
  return r[10] = e[n][0], r[11] = e[n][1], r;
}
function ri(t) {
  let e, n = [
    /*attrs*/
    t[11]
  ], r = {};
  for (let s = 0; s < n.length; s += 1)
    r = S(r, n[s]);
  return {
    c() {
      e = $n(
        /*tag*/
        t[10]
      ), Yn(e, r);
    },
    m(s, i) {
      C(s, e, i);
    },
    p(s, i) {
      Yn(e, r = de(n, [i & /*iconNode*/
      32 && /*attrs*/
      s[11]]));
    },
    d(s) {
      s && w(e);
    }
  };
}
function da(t) {
  let e = (
    /*tag*/
    t[10]
  ), n, r = (
    /*tag*/
    t[10] && ri(t)
  );
  return {
    c() {
      r && r.c(), n = Ee();
    },
    m(s, i) {
      r && r.m(s, i), C(s, n, i);
    },
    p(s, i) {
      /*tag*/
      s[10] ? e ? Y(
        e,
        /*tag*/
        s[10]
      ) ? (r.d(1), r = ri(s), e = /*tag*/
      s[10], r.c(), r.m(n.parentNode, n)) : r.p(s, i) : (r = ri(s), e = /*tag*/
      s[10], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      s[10]);
    },
    d(s) {
      s && w(n), r && r.d(s);
    }
  };
}
function vv(t) {
  let e, n, r, s, i, o = ze(
    /*iconNode*/
    t[5]
  ), a = [];
  for (let d = 0; d < o.length; d += 1)
    a[d] = da(fa(t, o, d));
  const l = (
    /*#slots*/
    t[9].default
  ), c = te(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    ua,
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
  for (let d = 0; d < u.length; d += 1)
    f = S(f, u[d]);
  return {
    c() {
      e = $n("svg");
      for (let d = 0; d < a.length; d += 1)
        a[d].c();
      n = Ee(), c && c.c(), Yn(e, f);
    },
    m(d, h) {
      C(d, e, h);
      for (let m = 0; m < a.length; m += 1)
        a[m] && a[m].m(e, null);
      R(e, n), c && c.m(e, null), i = !0;
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
          const g = fa(d, o, m);
          a[m] ? a[m].p(g, h) : (a[m] = da(g), a[m].c(), a[m].m(e, n));
        }
        for (; m < a.length; m += 1)
          a[m].d(1);
        a.length = o.length;
      }
      c && c.p && (!i || h & /*$$scope*/
      256) && re(
        c,
        l,
        d,
        /*$$scope*/
        d[8],
        i ? ne(
          l,
          /*$$scope*/
          d[8],
          h,
          null
        ) : se(
          /*$$scope*/
          d[8]
        ),
        null
      ), Yn(e, f = de(u, [
        ua,
        h & /*$$restProps*/
        64 && /*$$restProps*/
        d[6],
        (!i || h & /*size*/
        4) && { width: (
          /*size*/
          d[2]
        ) },
        (!i || h & /*size*/
        4) && { height: (
          /*size*/
          d[2]
        ) },
        (!i || h & /*color*/
        2) && { stroke: (
          /*color*/
          d[1]
        ) },
        (!i || h & /*absoluteStrokeWidth, strokeWidth, size*/
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
        (!i || h & /*name, $$props*/
        129 && s !== (s = `lucide-icon lucide lucide-${/*name*/
        d[0]} ${/*$$props*/
        d[7].class ?? ""}`)) && { class: s }
      ]));
    },
    i(d) {
      i || (v(c, d), i = !0);
    },
    o(d) {
      y(c, d), i = !1;
    },
    d(d) {
      d && w(e), _t(a, d), c && c.d(d);
    }
  };
}
function yv(t, e, n) {
  const r = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { name: a } = e, { color: l = "currentColor" } = e, { size: c = 24 } = e, { strokeWidth: u = 2 } = e, { absoluteStrokeWidth: f = !1 } = e, { iconNode: d } = e;
  return t.$$set = (h) => {
    n(7, e = S(S({}, e), be(h))), n(6, s = $(e, r)), "name" in h && n(0, a = h.name), "color" in h && n(1, l = h.color), "size" in h && n(2, c = h.size), "strokeWidth" in h && n(3, u = h.strokeWidth), "absoluteStrokeWidth" in h && n(4, f = h.absoluteStrokeWidth), "iconNode" in h && n(5, d = h.iconNode), "$$scope" in h && n(8, o = h.$$scope);
  }, e = be(e), [
    a,
    l,
    c,
    u,
    f,
    d,
    s,
    e,
    o,
    i
  ];
}
class kv extends J {
  constructor(e) {
    super(), X(this, e, yv, vv, Y, {
      name: 0,
      color: 1,
      size: 2,
      strokeWidth: 3,
      absoluteStrokeWidth: 4,
      iconNode: 5
    });
  }
}
const Zr = kv;
function wv(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = te(
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
      8) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : se(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Cv(t) {
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
    $$slots: { default: [wv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Zr({ props: s }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? de(r, [
        r[0],
        o & /*$$props*/
        2 && it(
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
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Tv(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [
    ["path", { d: "m21 16-4 4-4-4" }],
    ["path", { d: "M17 20V4" }],
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }]
  ];
  return t.$$set = (o) => {
    n(1, e = S(S({}, e), be(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = be(e), [i, e, r, s];
}
class Sv extends J {
  constructor(e) {
    super(), X(this, e, Tv, Cv, Y, {});
  }
}
const Ev = Sv;
function Av(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = te(
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
      8) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : se(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Ov(t) {
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
    $$slots: { default: [Av] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Zr({ props: s }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? de(r, [
        r[0],
        o & /*$$props*/
        2 && it(
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
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Iv(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [["polyline", { points: "20 6 9 17 4 12" }]];
  return t.$$set = (o) => {
    n(1, e = S(S({}, e), be(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = be(e), [i, e, r, s];
}
class Rv extends J {
  constructor(e) {
    super(), X(this, e, Iv, Ov, Y, {});
  }
}
const lo = Rv;
function Nv(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = te(
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
      8) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : se(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Pv(t) {
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
    $$slots: { default: [Nv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Zr({ props: s }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? de(r, [
        r[0],
        o & /*$$props*/
        2 && it(
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
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Mv(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [["path", { d: "m6 9 6 6 6-6" }]];
  return t.$$set = (o) => {
    n(1, e = S(S({}, e), be(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = be(e), [i, e, r, s];
}
class jv extends J {
  constructor(e) {
    super(), X(this, e, Mv, Pv, Y, {});
  }
}
const Ou = jv;
function Dv(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = te(
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
      8) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : se(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function xv(t) {
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
    $$slots: { default: [Dv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Zr({ props: s }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? de(r, [
        r[0],
        o & /*$$props*/
        2 && it(
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
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Lv(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [["path", { d: "M5 12h14" }]];
  return t.$$set = (o) => {
    n(1, e = S(S({}, e), be(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = be(e), [i, e, r, s];
}
class Fv extends J {
  constructor(e) {
    super(), X(this, e, Lv, xv, Y, {});
  }
}
const Bv = Fv;
function zv(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = te(
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
      8) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? ne(
          n,
          /*$$scope*/
          s[3],
          i,
          null
        ) : se(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Zv(t) {
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
    $$slots: { default: [zv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Zr({ props: s }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*$$props, iconNode*/
      3 ? de(r, [
        r[0],
        o & /*$$props*/
        2 && it(
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
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Vv(t, e, n) {
  let { $$slots: r = {}, $$scope: s } = e;
  const i = [
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "19", cy: "12", r: "1" }],
    ["circle", { cx: "5", cy: "12", r: "1" }]
  ];
  return t.$$set = (o) => {
    n(1, e = S(S({}, e), be(o))), "$$scope" in o && n(3, s = o.$$scope);
  }, e = be(e), [i, e, r, s];
}
class Wv extends J {
  constructor(e) {
    super(), X(this, e, Vv, Zv, Y, {});
  }
}
const Hv = Wv;
function Gv(t) {
  let e, n;
  return e = new lo({ props: { class: "h-4 w-4" } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p: _e,
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Uv(t) {
  let e, n, r, s;
  n = new S1({
    props: {
      $$slots: { default: [Gv] },
      $$scope: { ctx: t }
    }
  });
  const i = (
    /*#slots*/
    t[5].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = O("span"), B(n.$$.fragment), r = oe(), o && o.c(), N(e, "class", "absolute left-2 flex h-3.5 w-3.5 items-center justify-center");
    },
    m(a, l) {
      C(a, e, l), L(n, e, null), C(a, r, l), o && o.m(a, l), s = !0;
    },
    p(a, l) {
      const c = {};
      l & /*$$scope*/
      4096 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c), o && o.p && (!s || l & /*$$scope*/
      4096) && re(
        o,
        i,
        a,
        /*$$scope*/
        a[12],
        s ? ne(
          i,
          /*$$scope*/
          a[12],
          l,
          null
        ) : se(
          /*$$scope*/
          a[12]
        ),
        null
      );
    },
    i(a) {
      s || (v(n.$$.fragment, a), v(o, a), s = !0);
    },
    o(a) {
      y(n.$$.fragment, a), y(o, a), s = !1;
    },
    d(a) {
      a && (w(e), w(r)), F(n), o && o.d(a);
    }
  };
}
function Kv(t) {
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
      class: Pe(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[4]
  ];
  let s = {
    $$slots: { default: [Uv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new w1({ props: s }), e.$on(
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
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*value, disabled, label, cn, className, $$restProps*/
      31 ? de(r, [
        o & /*value*/
        2 && { value: (
          /*value*/
          i[1]
        ) },
        o & /*disabled*/
        8 && { disabled: (
          /*disabled*/
          i[3]
        ) },
        o & /*label*/
        4 && { label: (
          /*label*/
          i[2]
        ) },
        o & /*cn, className*/
        1 && {
          class: Pe(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        16 && it(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      o & /*$$scope*/
      4096 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function qv(t, e, n) {
  const r = ["class", "value", "label", "disabled"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { value: l } = e, { label: c = void 0 } = e, { disabled: u = void 0 } = e;
  function f(_) {
    ye.call(this, t, _);
  }
  function d(_) {
    ye.call(this, t, _);
  }
  function h(_) {
    ye.call(this, t, _);
  }
  function m(_) {
    ye.call(this, t, _);
  }
  function g(_) {
    ye.call(this, t, _);
  }
  function p(_) {
    ye.call(this, t, _);
  }
  return t.$$set = (_) => {
    e = S(S({}, e), be(_)), n(4, s = $(e, r)), "class" in _ && n(0, a = _.class), "value" in _ && n(1, l = _.value), "label" in _ && n(2, c = _.label), "disabled" in _ && n(3, u = _.disabled), "$$scope" in _ && n(12, o = _.$$scope);
  }, [
    a,
    l,
    c,
    u,
    s,
    i,
    f,
    d,
    h,
    m,
    g,
    p,
    o
  ];
}
class $v extends J {
  constructor(e) {
    super(), X(this, e, qv, Kv, Y, {
      class: 0,
      value: 1,
      label: 2,
      disabled: 3
    });
  }
}
function Yv(t, { delay: e = 0, duration: n = 400, easing: r = Zc, start: s = 0, opacity: i = 0 } = {}) {
  const o = getComputedStyle(t), a = +o.opacity, l = o.transform === "none" ? "" : o.transform, c = 1 - s, u = a * (1 - i);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (f, d) => `
			transform: ${l} scale(${1 - c * d});
			opacity: ${a - u * d}
		`
  };
}
function Xv(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[6].default
  ), s = te(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = O("div"), s && s.c(), N(e, "class", "w-full p-1");
    },
    m(i, o) {
      C(i, e, o), s && s.m(e, null), n = !0;
    },
    p(i, o) {
      s && s.p && (!n || o & /*$$scope*/
      256) && re(
        s,
        r,
        i,
        /*$$scope*/
        i[8],
        n ? ne(
          r,
          /*$$scope*/
          i[8],
          o,
          null
        ) : se(
          /*$$scope*/
          i[8]
        ),
        null
      );
    },
    i(i) {
      n || (v(s, i), n = !0);
    },
    o(i) {
      y(s, i), n = !1;
    },
    d(i) {
      i && w(e), s && s.d(i);
    }
  };
}
function Jv(t) {
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
      class: Pe(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
        /*className*/
        t[4]
      )
    },
    /*$$restProps*/
    t[5]
  ];
  let s = {
    $$slots: { default: [Xv] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new i1({ props: s }), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*inTransition, inTransitionConfig, outTransition, outTransitionConfig, cn, className, $$restProps*/
      63 ? de(r, [
        o & /*inTransition*/
        1 && { inTransition: (
          /*inTransition*/
          i[0]
        ) },
        o & /*inTransitionConfig*/
        2 && {
          inTransitionConfig: (
            /*inTransitionConfig*/
            i[1]
          )
        },
        o & /*outTransition*/
        4 && { outTransition: (
          /*outTransition*/
          i[2]
        ) },
        o & /*outTransitionConfig*/
        8 && {
          outTransitionConfig: (
            /*outTransitionConfig*/
            i[3]
          )
        },
        o & /*cn, className*/
        16 && {
          class: Pe(
            "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
            /*className*/
            i[4]
          )
        },
        o & /*$$restProps*/
        32 && it(
          /*$$restProps*/
          i[5]
        )
      ]) : {};
      o & /*$$scope*/
      256 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Qv(t, e, n) {
  const r = [
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "class"
  ];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { inTransition: a = Vc } = e, { inTransitionConfig: l = void 0 } = e, { outTransition: c = Yv } = e, { outTransitionConfig: u = { start: 0.95, opacity: 0, duration: 50 } } = e, { class: f = void 0 } = e;
  function d(h) {
    ye.call(this, t, h);
  }
  return t.$$set = (h) => {
    e = S(S({}, e), be(h)), n(5, s = $(e, r)), "inTransition" in h && n(0, a = h.inTransition), "inTransitionConfig" in h && n(1, l = h.inTransitionConfig), "outTransition" in h && n(2, c = h.outTransition), "outTransitionConfig" in h && n(3, u = h.outTransitionConfig), "class" in h && n(4, f = h.class), "$$scope" in h && n(8, o = h.$$scope);
  }, [
    a,
    l,
    c,
    u,
    f,
    s,
    i,
    d,
    o
  ];
}
class e0 extends J {
  constructor(e) {
    super(), X(this, e, Qv, Jv, Y, {
      inTransition: 0,
      inTransitionConfig: 1,
      outTransition: 2,
      outTransitionConfig: 3,
      class: 4
    });
  }
}
const t0 = (t) => ({ builder: t & /*builder*/
64 }), ha = (t) => ({ builder: (
  /*builder*/
  t[6]
) });
function n0(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[2].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[5],
    ha
  );
  return r = new Ou({ props: { class: "h-4 w-4 opacity-50" } }), {
    c() {
      o && o.c(), e = oe(), n = O("div"), B(r.$$.fragment);
    },
    m(a, l) {
      o && o.m(a, l), C(a, e, l), C(a, n, l), L(r, n, null), s = !0;
    },
    p(a, l) {
      o && o.p && (!s || l & /*$$scope, builder*/
      96) && re(
        o,
        i,
        a,
        /*$$scope*/
        a[5],
        s ? ne(
          i,
          /*$$scope*/
          a[5],
          l,
          t0
        ) : se(
          /*$$scope*/
          a[5]
        ),
        ha
      );
    },
    i(a) {
      s || (v(o, a), v(r.$$.fragment, a), s = !0);
    },
    o(a) {
      y(o, a), y(r.$$.fragment, a), s = !1;
    },
    d(a) {
      a && (w(e), w(n)), o && o.d(a), F(r);
    }
  };
}
function r0(t) {
  let e, n;
  const r = [
    {
      class: Pe(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let s = {
    $$slots: {
      default: [
        n0,
        ({ builder: i }) => ({ 6: i }),
        ({ builder: i }) => i ? 64 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new M1({ props: s }), e.$on(
    "click",
    /*click_handler*/
    t[3]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[4]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, className, $$restProps*/
      3 ? de(r, [
        o & /*cn, className*/
        1 && {
          class: Pe(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        2 && it(
          /*$$restProps*/
          i[1]
        )
      ]) : {};
      o & /*$$scope, builder*/
      96 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function s0(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  function l(u) {
    ye.call(this, t, u);
  }
  function c(u) {
    ye.call(this, t, u);
  }
  return t.$$set = (u) => {
    e = S(S({}, e), be(u)), n(1, s = $(e, r)), "class" in u && n(0, a = u.class), "$$scope" in u && n(5, o = u.$$scope);
  }, [a, s, i, l, c, o];
}
class i0 extends J {
  constructor(e) {
    super(), X(this, e, s0, r0, Y, { class: 0 });
  }
}
const o0 = h1, l0 = B1;
function ma(t, e, n) {
  const r = t.slice();
  return r[9] = e[n], r;
}
function a0(t) {
  let e;
  return {
    c() {
      e = Me(
        /*label*/
        t[2]
      );
    },
    m(n, r) {
      C(n, e, r);
    },
    p(n, r) {
      r & /*label*/
      4 && Qe(
        e,
        /*label*/
        n[2]
      );
    },
    d(n) {
      n && w(e);
    }
  };
}
function c0(t) {
  let e, n, r;
  function s(o) {
    t[7](o);
  }
  let i = {
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
    t[5] !== void 0 && (i.value = /*selected*/
    t[5]), e = new l0({ props: i }), ft.push(() => Ft(e, "value", s)), {
      c() {
        B(e.$$.fragment);
      },
      m(o, a) {
        L(e, o, a), r = !0;
      },
      p(o, a) {
        const l = {};
        a & /*id*/
        1 && (l.id = /*id*/
        o[0]), a & /*placeholder*/
        8 && (l.placeholder = /*placeholder*/
        o[3]), !n && a & /*selected*/
        32 && (n = !0, l.value = /*selected*/
        o[5], Lt(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (v(e.$$.fragment, o), r = !0);
      },
      o(o) {
        y(e.$$.fragment, o), r = !1;
      },
      d(o) {
        F(e, o);
      }
    }
  );
}
function u0(t) {
  let e = (
    /*item*/
    t[9].label + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(r, s) {
      C(r, n, s);
    },
    p(r, s) {
      s & /*values*/
      16 && e !== (e = /*item*/
      r[9].label + "") && Qe(n, e);
    },
    d(r) {
      r && w(n);
    }
  };
}
function pa(t) {
  let e, n;
  return e = new $v({
    props: {
      value: (
        /*item*/
        t[9].label
      ),
      label: (
        /*item*/
        t[9].label
      ),
      $$slots: { default: [u0] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[8]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*values*/
      16 && (i.value = /*item*/
      r[9].label), s & /*values*/
      16 && (i.label = /*item*/
      r[9].label), s & /*$$scope, values*/
      4112 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function f0(t) {
  let e, n, r = ze(
    /*values*/
    t[4]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = pa(ma(t, r, o));
  const i = (o) => y(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = Ee();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      C(o, e, a), n = !0;
    },
    p(o, a) {
      if (a & /*values, selected, dispatch, id*/
      113) {
        r = ze(
          /*values*/
          o[4]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = ma(o, r, l);
          s[l] ? (s[l].p(c, a), v(s[l], 1)) : (s[l] = pa(c), s[l].c(), v(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Oe(), l = r.length; l < s.length; l += 1)
          i(l);
        Ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          v(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        y(s[a]);
      n = !1;
    },
    d(o) {
      o && w(e), _t(s, o);
    }
  };
}
function d0(t) {
  let e, n;
  return e = new o0({
    props: {
      $$slots: { default: [f0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, values, selected, id*/
      4145 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function h0(t) {
  let e, n, r, s;
  return e = new i0({
    props: {
      $$slots: { default: [c0] },
      $$scope: { ctx: t }
    }
  }), r = new e0({
    props: {
      $$slots: { default: [d0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), C(i, n, o), L(r, i, o), s = !0;
    },
    p(i, o) {
      const a = {};
      o & /*$$scope, id, placeholder, selected*/
      4137 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
      const l = {};
      o & /*$$scope, values, selected, id*/
      4145 && (l.$$scope = { dirty: o, ctx: i }), r.$set(l);
    },
    i(i) {
      s || (v(e.$$.fragment, i), v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(e.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(e, i), F(r, i);
    }
  };
}
function m0(t) {
  let e, n, r, s, i, o, a, l;
  return n = new oo({
    props: {
      for: (
        /*id*/
        t[0]
      ),
      $$slots: { default: [a0] },
      $$scope: { ctx: t }
    }
  }), s = new bv({
    props: {
      $$slots: { default: [h0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = O("div"), B(n.$$.fragment), r = oe(), B(s.$$.fragment), i = oe(), o = O("div"), a = Me(
        /*msg*/
        t[1]
      ), N(o, "class", "text-red-500"), N(e, "class", "flex flex-col w-full max-w-sm gap-1.5");
    },
    m(c, u) {
      C(c, e, u), L(n, e, null), R(e, r), L(s, e, null), R(e, i), R(e, o), R(o, a), l = !0;
    },
    p(c, [u]) {
      const f = {};
      u & /*id*/
      1 && (f.for = /*id*/
      c[0]), u & /*$$scope, label*/
      4100 && (f.$$scope = { dirty: u, ctx: c }), n.$set(f);
      const d = {};
      u & /*$$scope, values, selected, id, placeholder*/
      4153 && (d.$$scope = { dirty: u, ctx: c }), s.$set(d), (!l || u & /*msg*/
      2) && Qe(
        a,
        /*msg*/
        c[1]
      );
    },
    i(c) {
      l || (v(n.$$.fragment, c), v(s.$$.fragment, c), l = !0);
    },
    o(c) {
      y(n.$$.fragment, c), y(s.$$.fragment, c), l = !1;
    },
    d(c) {
      c && w(e), F(n), F(s);
    }
  };
}
function p0(t, e, n) {
  const r = Bt();
  let { id: s = "" } = e, { msg: i = "" } = e, { label: o = "" } = e, { placeholder: a = "Select a value" } = e, { values: l = [{ value: "", label: "empty" }] } = e, c;
  function u(d) {
    c = d, n(5, c);
  }
  const f = (d) => {
    n(5, c = d.detail.currentTarget.innerText), r("onChange", { id: s, value: c });
  };
  return t.$$set = (d) => {
    "id" in d && n(0, s = d.id), "msg" in d && n(1, i = d.msg), "label" in d && n(2, o = d.label), "placeholder" in d && n(3, a = d.placeholder), "values" in d && n(4, l = d.values);
  }, [
    s,
    i,
    o,
    a,
    l,
    c,
    r,
    u,
    f
  ];
}
class g0 extends J {
  constructor(e) {
    super(), X(this, e, p0, m0, Y, {
      id: 0,
      msg: 1,
      label: 2,
      placeholder: 3,
      values: 4
    });
  }
}
function _0(t) {
  let e, n, r, s;
  return {
    c() {
      e = O("div"), n = O("button"), r = Me(
        /*title*/
        t[0]
      ), N(n, "type", "submit"), n.disabled = /*disable*/
      t[1], N(n, "class", s = `block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold ${/*disable*/
      t[1] ? "bg-gray-500 cursor-not-allowed" : ""}`), N(e, "class", "space-y-2");
    },
    m(i, o) {
      C(i, e, o), R(e, n), R(n, r);
    },
    p(i, [o]) {
      o & /*title*/
      1 && Qe(
        r,
        /*title*/
        i[0]
      ), o & /*disable*/
      2 && (n.disabled = /*disable*/
      i[1]), o & /*disable*/
      2 && s !== (s = `block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold ${/*disable*/
      i[1] ? "bg-gray-500 cursor-not-allowed" : ""}`) && N(n, "class", s);
    },
    i: _e,
    o: _e,
    d(i) {
      i && w(e);
    }
  };
}
function b0(t, e, n) {
  let { title: r } = e, { disable: s } = e;
  return t.$$set = (i) => {
    "title" in i && n(0, r = i.title), "disable" in i && n(1, s = i.disable);
  }, [r, s];
}
class v0 extends J {
  constructor(e) {
    super(), X(this, e, b0, _0, Y, { title: 0, disable: 1 });
  }
}
function y0(t) {
  let e, n;
  return e = new tv({
    props: {
      class: Pe("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p: _e,
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function k0(t) {
  let e, n, r;
  const s = [
    {
      class: Pe(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
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
    $$slots: { default: [y0] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < s.length; a += 1)
    o = S(o, s[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (o.checked = /*checked*/
    t[0]), e = new $1({ props: o }), ft.push(() => Ft(e, "checked", i)), {
      c() {
        B(e.$$.fragment);
      },
      m(a, l) {
        L(e, a, l), r = !0;
      },
      p(a, [l]) {
        const c = l & /*cn, className, $$restProps*/
        6 ? de(s, [
          l & /*cn, className*/
          2 && {
            class: Pe(
              "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && it(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        16 && (c.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, c.checked = /*checked*/
        a[0], Lt(() => n = !1)), e.$set(c);
      },
      i(a) {
        r || (v(e.$$.fragment, a), r = !0);
      },
      o(a) {
        y(e.$$.fragment, a), r = !1;
      },
      d(a) {
        F(e, a);
      }
    }
  );
}
function w0(t, e, n) {
  const r = ["class", "checked"];
  let s = $(e, r), { class: i = void 0 } = e, { checked: o = void 0 } = e;
  function a(l) {
    o = l, n(0, o);
  }
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(2, s = $(e, r)), "class" in l && n(1, i = l.class), "checked" in l && n(0, o = l.checked);
  }, [o, i, s, a];
}
class C0 extends J {
  constructor(e) {
    super(), X(this, e, w0, k0, Y, { class: 1, checked: 0 });
  }
}
function T0(t) {
  let e;
  return {
    c() {
      e = Me(
        /*label*/
        t[0]
      );
    },
    m(n, r) {
      C(n, e, r);
    },
    p(n, r) {
      r & /*label*/
      1 && Qe(
        e,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && w(e);
    }
  };
}
function S0(t) {
  let e, n, r, s, i;
  return n = new C0({ props: { id: "airplane-mode" } }), s = new oo({
    props: {
      for: "airplane-mode",
      $$slots: { default: [T0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = O("div"), B(n.$$.fragment), r = oe(), B(s.$$.fragment), N(e, "class", "flex items-center space-x-2");
    },
    m(o, a) {
      C(o, e, a), L(n, e, null), R(e, r), L(s, e, null), i = !0;
    },
    p(o, [a]) {
      const l = {};
      a & /*$$scope, label*/
      3 && (l.$$scope = { dirty: a, ctx: o }), s.$set(l);
    },
    i(o) {
      i || (v(n.$$.fragment, o), v(s.$$.fragment, o), i = !0);
    },
    o(o) {
      y(n.$$.fragment, o), y(s.$$.fragment, o), i = !1;
    },
    d(o) {
      o && w(e), F(n), F(s);
    }
  };
}
function E0(t, e, n) {
  let { label: r = "" } = e;
  return t.$$set = (s) => {
    "label" in s && n(0, r = s.label);
  }, [r];
}
class A0 extends J {
  constructor(e) {
    super(), X(this, e, E0, S0, Y, { label: 0 });
  }
}
function O0(t) {
  let e, n, r;
  const s = [
    /*props*/
    t[2],
    { msg: (
      /*msg*/
      t[0]
    ) }
  ];
  var i = (
    /*component*/
    t[1]
  );
  function o(a) {
    let l = {};
    for (let c = 0; c < s.length; c += 1)
      l = S(l, s[c]);
    return { props: l };
  }
  return i && (e = Xn(i, o()), e.$on(
    "onChange",
    /*onChange_handler*/
    t[6]
  )), {
    c() {
      e && B(e.$$.fragment), n = Ee();
    },
    m(a, l) {
      e && L(e, a, l), C(a, n, l), r = !0;
    },
    p(a, [l]) {
      const c = l & /*props, msg*/
      5 ? de(s, [
        l & /*props*/
        4 && it(
          /*props*/
          a[2]
        ),
        l & /*msg*/
        1 && { msg: (
          /*msg*/
          a[0]
        ) }
      ]) : {};
      if (l & /*component*/
      2 && i !== (i = /*component*/
      a[1])) {
        if (e) {
          Oe();
          const u = e;
          y(u.$$.fragment, 1, 0, () => {
            F(u, 1);
          }), Ie();
        }
        i ? (e = Xn(i, o()), e.$on(
          "onChange",
          /*onChange_handler*/
          a[6]
        ), B(e.$$.fragment), v(e.$$.fragment, 1), L(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(c);
    },
    i(a) {
      r || (e && v(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && y(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && w(n), e && F(e, a);
    }
  };
}
function I0(t, e, n) {
  let { item: r } = e, { i: s } = e, { msg: i } = e;
  const o = Bt();
  let a, l;
  switch (r.type) {
    case "inline":
      a = Hh, l = r;
      break;
    case "input":
      a = av, l = r.props;
      break;
    case "switch":
      a = A0, l = r.props;
      break;
    case "multiinput":
      a = fv, l = r;
      break;
    case "multicustom":
      a = mv, l = r;
      break;
    case "select":
      a = g0, l = r.props;
      break;
    case "submit":
      a = v0, l = r.props;
      break;
    default:
      a = null;
  }
  const c = (u) => {
    o("onChange", u.detail);
  };
  return t.$$set = (u) => {
    "item" in u && n(4, r = u.item), "i" in u && n(5, s = u.i), "msg" in u && n(0, i = u.msg);
  }, [i, a, l, o, r, s, c];
}
class ao extends J {
  constructor(e) {
    super(), X(this, e, I0, O0, Y, { item: 4, i: 5, msg: 0 });
  }
}
function ga(t, e, n) {
  const r = t.slice();
  return r[10] = e[n], r[12] = n, r;
}
function _a(t, e, n) {
  const r = t.slice();
  return r[10] = e[n], r[12] = n, r;
}
function R0(t) {
  let e, n, r = ze(
    /*fields*/
    t[1]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = ba(ga(t, r, o));
  const i = (o) => y(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      e = O("div");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      N(e, "class", "flex flex-col space-y-3");
    },
    m(o, a) {
      C(o, e, a);
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(e, null);
      n = !0;
    },
    p(o, a) {
      if (a & /*errors, fields, formdata*/
      50) {
        r = ze(
          /*fields*/
          o[1]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = ga(o, r, l);
          s[l] ? (s[l].p(c, a), v(s[l], 1)) : (s[l] = ba(c), s[l].c(), v(s[l], 1), s[l].m(e, null));
        }
        for (Oe(), l = r.length; l < s.length; l += 1)
          i(l);
        Ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          v(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        y(s[a]);
      n = !1;
    },
    d(o) {
      o && w(e), _t(s, o);
    }
  };
}
function N0(t) {
  let e, n, r, s, i, o = ze(
    /*fields*/
    t[1]
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = va(_a(t, o, c));
  const l = (c) => y(a[c], 1, 1, () => {
    a[c] = null;
  });
  return {
    c() {
      e = O("form"), n = O("div");
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      N(n, "class", "flex flex-col space-y-3"), N(e, "class", "bg-white"), N(e, "autocomplete", "off");
    },
    m(c, u) {
      C(c, e, u), R(e, n);
      for (let f = 0; f < a.length; f += 1)
        a[f] && a[f].m(n, null);
      r = !0, s || (i = Q(e, "submit", ld(
        /*submit_handler*/
        t[7]
      )), s = !0);
    },
    p(c, u) {
      if (u & /*fields, errors, formdata*/
      50) {
        o = ze(
          /*fields*/
          c[1]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const d = _a(c, o, f);
          a[f] ? (a[f].p(d, u), v(a[f], 1)) : (a[f] = va(d), a[f].c(), v(a[f], 1), a[f].m(n, null));
        }
        for (Oe(), f = o.length; f < a.length; f += 1)
          l(f);
        Ie();
      }
    },
    i(c) {
      if (!r) {
        for (let u = 0; u < o.length; u += 1)
          v(a[u]);
        r = !0;
      }
    },
    o(c) {
      a = a.filter(Boolean);
      for (let u = 0; u < a.length; u += 1)
        y(a[u]);
      r = !1;
    },
    d(c) {
      c && w(e), _t(a, c), s = !1, i();
    }
  };
}
function ba(t) {
  let e, n;
  return e = new ao({
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
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*errors, fields*/
      34 && (i.msg = /*errors*/
      r[5][
        /*item*/
        r[10].props.id
      ] || ""), s & /*fields*/
      2 && (i.item = /*item*/
      r[10]), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function va(t) {
  let e, n;
  return e = new ao({
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
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*fields*/
      2 && (i.item = /*item*/
      r[10]), s & /*errors, fields*/
      34 && (i.msg = /*errors*/
      r[5][
        /*item*/
        r[10].props.id
      ] || ""), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function P0(t) {
  let e, n, r, s;
  const i = [N0, R0], o = [];
  function a(l, c) {
    return (
      /*outform*/
      l[2] ? 1 : 0
    );
  }
  return n = a(t), r = o[n] = i[n](t), {
    c() {
      e = O("div"), r.c(), To(e, "p-6", !/*outform*/
      t[2]);
    },
    m(l, c) {
      C(l, e, c), o[n].m(e, null), s = !0;
    },
    p(l, [c]) {
      let u = n;
      n = a(l), n === u ? o[n].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), r = o[n], r ? r.p(l, c) : (r = o[n] = i[n](l), r.c()), v(r, 1), r.m(e, null)), (!s || c & /*outform*/
      4) && To(e, "p-6", !/*outform*/
      l[2]);
    },
    i(l) {
      s || (v(r), s = !0);
    },
    o(l) {
      y(r), s = !1;
    },
    d(l) {
      l && w(e), o[n].d();
    }
  };
}
function M0(t, e, n) {
  Bt();
  let { schema: r } = e, { fields: s } = e, { outform: i = !1 } = e, { onCheckSucc: o = (d) => {
    console.log(d);
  } } = e, a = {}, l = {};
  const c = (d) => {
    n(4, a[d.detail.id] = d.detail.value, a);
  }, u = () => {
    try {
      o(r.parse(a));
    } catch (d) {
      d instanceof es.ZodError ? n(5, l = d.flatten().fieldErrors) : console.error(d);
    }
  }, f = (d) => {
    n(4, a[d.detail.id] = d.detail.value, a);
  };
  return t.$$set = (d) => {
    "schema" in d && n(0, r = d.schema), "fields" in d && n(1, s = d.fields), "outform" in d && n(2, i = d.outform), "onCheckSucc" in d && n(3, o = d.onCheckSucc);
  }, [
    r,
    s,
    i,
    o,
    a,
    l,
    c,
    u,
    f
  ];
}
class j0 extends J {
  constructor(e) {
    super(), X(this, e, M0, P0, Y, {
      schema: 0,
      fields: 1,
      outform: 2,
      onCheckSucc: 3
    });
  }
}
const Qw = (t, e, n) => {
  t || (t = window.document.createElement("div"));
  const r = es.lazy(() => {
    let i = es.object({});
    for (let o of e)
      o.props.id && o.schema && (i = i.merge(es.object({ [o.props.id]: o.schema })));
    return i;
  });
  return new j0({
    target: t,
    props: {
      fields: e,
      schema: r,
      ...n
    }
  });
};
function D0(t) {
  let e, n, r, s, i, o, a, l, c;
  return {
    c() {
      e = O("div"), n = O("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', r = oe(), s = O("div"), i = O("div"), o = O("span"), o.textContent = "Success", a = oe(), l = O("p"), c = Me(
        /*msg*/
        t[0]
      ), N(n, "class", "flex items-center justify-center w-12 bg-emerald-500"), N(o, "class", "font-semibold text-emerald-500 dark:text-emerald-400"), N(l, "class", "text-sm text-gray-600 dark:text-gray-200"), N(i, "class", "mx-3"), N(s, "class", "px-4 py-2 -mx-3"), N(e, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(u, f) {
      C(u, e, f), R(e, n), R(e, r), R(e, s), R(s, i), R(i, o), R(i, a), R(i, l), R(l, c);
    },
    p(u, [f]) {
      f & /*msg*/
      1 && Qe(
        c,
        /*msg*/
        u[0]
      );
    },
    i: _e,
    o: _e,
    d(u) {
      u && w(e);
    }
  };
}
function x0(t, e, n) {
  let { msg: r = "" } = e, { duration: s = 3e3 } = e;
  const i = Bt();
  return Kt(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      s
    );
  }), t.$$set = (o) => {
    "msg" in o && n(0, r = o.msg), "duration" in o && n(1, s = o.duration);
  }, [r, s];
}
class L0 extends J {
  constructor(e) {
    super(), X(this, e, x0, D0, Y, { msg: 0, duration: 1 });
  }
}
function F0(t) {
  let e, n, r, s, i, o, a, l, c;
  return {
    c() {
      e = O("div"), n = O("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = oe(), s = O("div"), i = O("div"), o = O("span"), o.textContent = "Info", a = oe(), l = O("p"), c = Me(
        /*msg*/
        t[0]
      ), N(n, "class", "flex items-center justify-center w-12 bg-blue-500"), N(o, "class", "font-semibold text-blue-500 dark:text-blue-400"), N(l, "class", "text-sm text-gray-600 dark:text-gray-200"), N(i, "class", "mx-3"), N(s, "class", "px-4 py-2 -mx-3"), N(e, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(u, f) {
      C(u, e, f), R(e, n), R(e, r), R(e, s), R(s, i), R(i, o), R(i, a), R(i, l), R(l, c);
    },
    p(u, [f]) {
      f & /*msg*/
      1 && Qe(
        c,
        /*msg*/
        u[0]
      );
    },
    i: _e,
    o: _e,
    d(u) {
      u && w(e);
    }
  };
}
function B0(t, e, n) {
  let { msg: r = "" } = e, { duration: s = 3e3 } = e;
  const i = Bt();
  return Kt(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      s
    );
  }), t.$$set = (o) => {
    "msg" in o && n(0, r = o.msg), "duration" in o && n(1, s = o.duration);
  }, [r, s];
}
class ya extends J {
  constructor(e) {
    super(), X(this, e, B0, F0, Y, { msg: 0, duration: 1 });
  }
}
function z0(t) {
  let e, n, r, s, i, o, a, l, c;
  return {
    c() {
      e = O("div"), n = O("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = oe(), s = O("div"), i = O("div"), o = O("span"), o.textContent = "Warning", a = oe(), l = O("p"), c = Me(
        /*msg*/
        t[0]
      ), N(n, "class", "flex items-center justify-center w-12 bg-yellow-400"), N(o, "class", "font-semibold text-yellow-400 dark:text-yellow-300"), N(l, "class", "text-sm text-gray-600 dark:text-gray-200"), N(i, "class", "mx-3"), N(s, "class", "px-4 py-2 -mx-3"), N(e, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(u, f) {
      C(u, e, f), R(e, n), R(e, r), R(e, s), R(s, i), R(i, o), R(i, a), R(i, l), R(l, c);
    },
    p(u, [f]) {
      f & /*msg*/
      1 && Qe(
        c,
        /*msg*/
        u[0]
      );
    },
    i: _e,
    o: _e,
    d(u) {
      u && w(e);
    }
  };
}
function Z0(t, e, n) {
  let { msg: r = "" } = e, { duration: s = 3e3 } = e;
  const i = Bt();
  return Kt(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      s
    );
  }), t.$$set = (o) => {
    "msg" in o && n(0, r = o.msg), "duration" in o && n(1, s = o.duration);
  }, [r, s];
}
class V0 extends J {
  constructor(e) {
    super(), X(this, e, Z0, z0, Y, { msg: 0, duration: 1 });
  }
}
function W0(t) {
  let e, n, r, s, i, o, a, l, c;
  return {
    c() {
      e = O("div"), n = O("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', r = oe(), s = O("div"), i = O("div"), o = O("span"), o.textContent = "Error", a = oe(), l = O("p"), c = Me(
        /*msg*/
        t[0]
      ), N(n, "class", "flex items-center justify-center w-12 bg-red-500"), N(o, "class", "font-semibold text-red-500 dark:text-red-400"), N(l, "class", "text-sm text-gray-600 dark:text-gray-200"), N(i, "class", "mx-3"), N(s, "class", "px-4 py-2 -mx-3"), N(e, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(u, f) {
      C(u, e, f), R(e, n), R(e, r), R(e, s), R(s, i), R(i, o), R(i, a), R(i, l), R(l, c);
    },
    p(u, [f]) {
      f & /*msg*/
      1 && Qe(
        c,
        /*msg*/
        u[0]
      );
    },
    i: _e,
    o: _e,
    d(u) {
      u && w(e);
    }
  };
}
function H0(t, e, n) {
  let { msg: r = "" } = e, { duration: s = 3e3 } = e;
  const i = Bt();
  return Kt(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      s
    );
  }), t.$$set = (o) => {
    "msg" in o && n(0, r = o.msg), "duration" in o && n(1, s = o.duration);
  }, [r, s];
}
let G0 = class extends J {
  constructor(e) {
    super(), X(this, e, H0, W0, Y, { msg: 0, duration: 1 });
  }
};
const ka = "uikit_msg_panel";
let si = 0;
const t2 = (t) => {
  si += 1;
  let e = window.document.getElementById(ka);
  e || (e = window.document.createElement("div"), e.id = ka, e.style.position = "absolute", e.style.top = "5px", e.style.right = "5px", e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "10px", document.body.appendChild(e));
  const n = window.document.createElement("div");
  e.appendChild(n);
  let r;
  switch (t.type) {
    case "success":
      r = new L0({
        target: n,
        props: {
          ...t
        }
      });
      break;
    case "info":
      r = new ya({
        target: n,
        props: {
          ...t
        }
      });
      break;
    case "warn":
      r = new V0({
        target: n,
        props: {
          ...t
        }
      });
      break;
    case "error":
      r = new G0({
        target: n,
        props: {
          ...t
        }
      });
      break;
    default:
      r = new ya({
        target: n,
        props: {
          ...t
        }
      });
      break;
  }
  return r.$on("onEnd", () => {
    r.$destroy(), si -= 1, si == 0 && document.body.removeChild(e);
  }), r;
}, Jr = (t) => Object.entries(t).map(([e, n]) => `${e}: ${n};`).join(" ");
function U0(t) {
  let e, n, r, s, i, o, a, l, c, u, f, d, h, m, g, p, _, b, k, I;
  return {
    c() {
      e = O("div"), n = O("div"), r = O("div"), s = O("div"), i = Me(
        /*title*/
        t[0]
      ), o = oe(), a = O("div"), l = O("div"), c = Me(
        /*content*/
        t[1]
      ), u = oe(), f = O("div"), d = O("div"), h = Me(
        /*cancelText*/
        t[2]
      ), g = oe(), p = O("div"), _ = Me(
        /*okText*/
        t[3]
      ), N(s, "class", "modal-title svelte-f901x2"), N(a, "class", "content svelte-f901x2"), N(r, "class", "modal-content-body svelte-f901x2"), N(d, "class", "btn button-left centerLayout svelte-f901x2"), N(d, "style", m = Jr(
        /*cancelBtnStyle*/
        t[4]
      )), N(p, "class", "btn button-right centerLayout svelte-f901x2"), N(p, "style", b = Jr(
        /*okBtnStyle*/
        t[5]
      )), N(f, "class", "confirm-button-wrap svelte-f901x2"), N(n, "class", "confirm-modal-content svelte-f901x2"), N(e, "class", "confirm-modal svelte-f901x2");
    },
    m(q, P) {
      C(q, e, P), R(e, n), R(n, r), R(r, s), R(s, i), R(r, o), R(r, a), R(a, l), R(l, c), R(n, u), R(n, f), R(f, d), R(d, h), R(f, g), R(f, p), R(p, _), t[11](e), k || (I = [
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
      ], k = !0);
    },
    p(q, [P]) {
      P & /*title*/
      1 && Qe(
        i,
        /*title*/
        q[0]
      ), P & /*content*/
      2 && Qe(
        c,
        /*content*/
        q[1]
      ), P & /*cancelText*/
      4 && Qe(
        h,
        /*cancelText*/
        q[2]
      ), P & /*cancelBtnStyle*/
      16 && m !== (m = Jr(
        /*cancelBtnStyle*/
        q[4]
      )) && N(d, "style", m), P & /*okText*/
      8 && Qe(
        _,
        /*okText*/
        q[3]
      ), P & /*okBtnStyle*/
      32 && b !== (b = Jr(
        /*okBtnStyle*/
        q[5]
      )) && N(p, "style", b);
    },
    i: _e,
    o: _e,
    d(q) {
      q && w(e), t[11](null), k = !1, Je(I);
    }
  };
}
function K0(t, e, n) {
  let { title: r = "" } = e, { content: s = "" } = e, { cancelText: i = "取消" } = e, { okText: o = "确定" } = e, { onCancel: a = () => {
  } } = e, { onOk: l = () => {
  } } = e, { cancelBtnStyle: c = "" } = e, { okBtnStyle: u = "" } = e;
  const f = Bt();
  let d;
  const h = () => {
    l(), f("onOk");
  }, m = () => {
    a(), f("onCancel");
  };
  function g(p) {
    ft[p ? "unshift" : "push"](() => {
      d = p, n(6, d);
    });
  }
  return t.$$set = (p) => {
    "title" in p && n(0, r = p.title), "content" in p && n(1, s = p.content), "cancelText" in p && n(2, i = p.cancelText), "okText" in p && n(3, o = p.okText), "onCancel" in p && n(9, a = p.onCancel), "onOk" in p && n(10, l = p.onOk), "cancelBtnStyle" in p && n(4, c = p.cancelBtnStyle), "okBtnStyle" in p && n(5, u = p.okBtnStyle);
  }, [
    r,
    s,
    i,
    o,
    c,
    u,
    d,
    h,
    m,
    a,
    l,
    g
  ];
}
class q0 extends J {
  constructor(e) {
    super(), X(this, e, K0, U0, Y, {
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
const n2 = (t) => {
  const e = window.document.createElement("div");
  document.body.appendChild(e);
  const n = new q0({
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
function $0(t) {
  let e, n, r, s;
  const i = (
    /*#slots*/
    t[3].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let a = [
    {
      class: r = Pe(
        "w-full caption-bottom text-sm",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], l = {};
  for (let c = 0; c < a.length; c += 1)
    l = S(l, a[c]);
  return {
    c() {
      e = O("div"), n = O("table"), o && o.c(), le(n, l), N(e, "class", "w-full overflow-auto");
    },
    m(c, u) {
      C(c, e, u), R(e, n), o && o.m(n, null), s = !0;
    },
    p(c, [u]) {
      o && o.p && (!s || u & /*$$scope*/
      4) && re(
        o,
        i,
        c,
        /*$$scope*/
        c[2],
        s ? ne(
          i,
          /*$$scope*/
          c[2],
          u,
          null
        ) : se(
          /*$$scope*/
          c[2]
        ),
        null
      ), le(n, l = de(a, [
        (!s || u & /*className*/
        1 && r !== (r = Pe(
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
      s || (v(o, c), s = !0);
    },
    o(c) {
      y(o, c), s = !1;
    },
    d(c) {
      c && w(e), o && o.d(c);
    }
  };
}
function Y0(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(1, s = $(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
let Iu = class extends J {
  constructor(e) {
    super(), X(this, e, Y0, $0, Y, { class: 0 });
  }
};
function X0(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = te(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = Pe(
        "[&_tr:last-child]:border-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = S(a, o[l]);
  return {
    c() {
      e = O("tbody"), i && i.c(), le(e, a);
    },
    m(l, c) {
      C(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && re(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? ne(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : se(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = de(o, [
        (!r || c & /*className*/
        1 && n !== (n = Pe(
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
      r || (v(i, l), r = !0);
    },
    o(l) {
      y(i, l), r = !1;
    },
    d(l) {
      l && w(e), i && i.d(l);
    }
  };
}
function J0(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(1, s = $(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class Ru extends J {
  constructor(e) {
    super(), X(this, e, J0, X0, Y, { class: 0 });
  }
}
function Q0(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = te(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = Pe(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = S(a, o[l]);
  return {
    c() {
      e = O("td"), i && i.c(), le(e, a);
    },
    m(l, c) {
      C(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && re(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? ne(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : se(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = de(o, [
        (!r || c & /*className*/
        1 && n !== (n = Pe(
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
      r || (v(i, l), r = !0);
    },
    o(l) {
      y(i, l), r = !1;
    },
    d(l) {
      l && w(e), i && i.d(l);
    }
  };
}
function ey(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(1, s = $(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class co extends J {
  constructor(e) {
    super(), X(this, e, ey, Q0, Y, { class: 0 });
  }
}
function ty(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = te(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = Pe(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = S(a, o[l]);
  return {
    c() {
      e = O("th"), i && i.c(), le(e, a);
    },
    m(l, c) {
      C(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && re(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? ne(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : se(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = de(o, [
        (!r || c & /*className*/
        1 && n !== (n = Pe(
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
      r || (v(i, l), r = !0);
    },
    o(l) {
      y(i, l), r = !1;
    },
    d(l) {
      l && w(e), i && i.d(l);
    }
  };
}
function ny(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(1, s = $(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class uo extends J {
  constructor(e) {
    super(), X(this, e, ny, ty, Y, { class: 0 });
  }
}
function ry(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = te(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = Pe(
        "[&_tr]:border-b",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = S(a, o[l]);
  return {
    c() {
      e = O("thead"), i && i.c(), le(e, a);
    },
    m(l, c) {
      C(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && re(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? ne(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : se(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = de(o, [
        (!r || c & /*className*/
        1 && n !== (n = Pe(
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
      r || (v(i, l), r = !0);
    },
    o(l) {
      y(i, l), r = !1;
    },
    d(l) {
      l && w(e), i && i.d(l);
    }
  };
}
function sy(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(1, s = $(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class Nu extends J {
  constructor(e) {
    super(), X(this, e, sy, ry, Y, { class: 0 });
  }
}
function iy(t) {
  let e, n, r;
  const s = (
    /*#slots*/
    t[3].default
  ), i = te(
    s,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let o = [
    {
      class: n = Pe(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < o.length; l += 1)
    a = S(a, o[l]);
  return {
    c() {
      e = O("tr"), i && i.c(), le(e, a);
    },
    m(l, c) {
      C(l, e, c), i && i.m(e, null), r = !0;
    },
    p(l, [c]) {
      i && i.p && (!r || c & /*$$scope*/
      4) && re(
        i,
        s,
        l,
        /*$$scope*/
        l[2],
        r ? ne(
          s,
          /*$$scope*/
          l[2],
          c,
          null
        ) : se(
          /*$$scope*/
          l[2]
        ),
        null
      ), le(e, a = de(o, [
        (!r || c & /*className*/
        1 && n !== (n = Pe(
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
      r || (v(i, l), r = !0);
    },
    o(l) {
      y(i, l), r = !1;
    },
    d(l) {
      l && w(e), i && i.d(l);
    }
  };
}
function oy(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = S(S({}, e), be(l)), n(1, s = $(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, o = l.$$scope);
  }, [a, s, o, i];
}
class Vs extends J {
  constructor(e) {
    super(), X(this, e, oy, iy, Y, { class: 0 });
  }
}
function wa(t, e, n) {
  const r = t.slice();
  return r[2] = e[n], r[4] = n, r;
}
function Ca(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function Ta(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function ly(t) {
  let e;
  return {
    c() {
      e = Me("#");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function ay(t) {
  let e = (
    /*item*/
    t[5] + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(r, s) {
      C(r, n, s);
    },
    p(r, s) {
      s & /*heads*/
      1 && e !== (e = /*item*/
      r[5] + "") && Qe(n, e);
    },
    d(r) {
      r && w(n);
    }
  };
}
function Sa(t) {
  let e, n;
  return e = new uo({
    props: {
      $$slots: { default: [ay] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, heads*/
      1025 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function cy(t) {
  let e, n, r, s;
  e = new uo({
    props: {
      class: "w-[100px]",
      $$slots: { default: [ly] },
      $$scope: { ctx: t }
    }
  });
  let i = ze(
    /*heads*/
    t[0]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Sa(Ta(t, i, l));
  const a = (l) => y(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      B(e.$$.fragment), n = oe();
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      r = Ee();
    },
    m(l, c) {
      L(e, l, c), C(l, n, c);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(l, c);
      C(l, r, c), s = !0;
    },
    p(l, c) {
      const u = {};
      if (c & /*$$scope*/
      1024 && (u.$$scope = { dirty: c, ctx: l }), e.$set(u), c & /*heads*/
      1) {
        i = ze(
          /*heads*/
          l[0]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Ta(l, i, f);
          o[f] ? (o[f].p(d, c), v(o[f], 1)) : (o[f] = Sa(d), o[f].c(), v(o[f], 1), o[f].m(r.parentNode, r));
        }
        for (Oe(), f = i.length; f < o.length; f += 1)
          a(f);
        Ie();
      }
    },
    i(l) {
      if (!s) {
        v(e.$$.fragment, l);
        for (let c = 0; c < i.length; c += 1)
          v(o[c]);
        s = !0;
      }
    },
    o(l) {
      y(e.$$.fragment, l), o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        y(o[c]);
      s = !1;
    },
    d(l) {
      l && (w(n), w(r)), F(e, l), _t(o, l);
    }
  };
}
function uy(t) {
  let e, n;
  return e = new Vs({
    props: {
      $$slots: { default: [cy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, heads*/
      1025 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function fy(t) {
  let e = (
    /*i*/
    t[4] + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(r, s) {
      C(r, n, s);
    },
    p(r, s) {
      s & /*data*/
      2 && e !== (e = /*i*/
      r[4] + "") && Qe(n, e);
    },
    d(r) {
      r && w(n);
    }
  };
}
function dy(t) {
  let e = (
    /*row*/
    t[2][
      /*item*/
      t[5]
    ] + ""
  ), n;
  return {
    c() {
      n = Me(e);
    },
    m(r, s) {
      C(r, n, s);
    },
    p(r, s) {
      s & /*data, heads*/
      3 && e !== (e = /*row*/
      r[2][
        /*item*/
        r[5]
      ] + "") && Qe(n, e);
    },
    d(r) {
      r && w(n);
    }
  };
}
function Ea(t) {
  let e, n;
  return e = new co({
    props: {
      $$slots: { default: [dy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, data, heads*/
      1027 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function hy(t) {
  let e, n, r, s;
  e = new co({
    props: {
      $$slots: { default: [fy] },
      $$scope: { ctx: t }
    }
  });
  let i = ze(
    /*heads*/
    t[0]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Ea(Ca(t, i, l));
  const a = (l) => y(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      B(e.$$.fragment), n = oe();
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      r = oe();
    },
    m(l, c) {
      L(e, l, c), C(l, n, c);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(l, c);
      C(l, r, c), s = !0;
    },
    p(l, c) {
      const u = {};
      if (c & /*$$scope, data*/
      1026 && (u.$$scope = { dirty: c, ctx: l }), e.$set(u), c & /*data, heads*/
      3) {
        i = ze(
          /*heads*/
          l[0]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const d = Ca(l, i, f);
          o[f] ? (o[f].p(d, c), v(o[f], 1)) : (o[f] = Ea(d), o[f].c(), v(o[f], 1), o[f].m(r.parentNode, r));
        }
        for (Oe(), f = i.length; f < o.length; f += 1)
          a(f);
        Ie();
      }
    },
    i(l) {
      if (!s) {
        v(e.$$.fragment, l);
        for (let c = 0; c < i.length; c += 1)
          v(o[c]);
        s = !0;
      }
    },
    o(l) {
      y(e.$$.fragment, l), o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        y(o[c]);
      s = !1;
    },
    d(l) {
      l && (w(n), w(r)), F(e, l), _t(o, l);
    }
  };
}
function Aa(t, e) {
  let n, r, s;
  return r = new Vs({
    props: {
      $$slots: { default: [hy] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ee(), B(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      C(i, n, o), L(r, i, o), s = !0;
    },
    p(i, o) {
      e = i;
      const a = {};
      o & /*$$scope, heads, data*/
      1027 && (a.$$scope = { dirty: o, ctx: e }), r.$set(a);
    },
    i(i) {
      s || (v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(r, i);
    }
  };
}
function my(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = ze(
    /*data*/
    t[1]
  );
  const o = (a) => (
    /*i*/
    a[4]
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = wa(t, i, a), c = o(l);
    n.set(c, e[a] = Aa(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ee();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      C(a, r, l), s = !0;
    },
    p(a, l) {
      l & /*heads, data*/
      3 && (i = ze(
        /*data*/
        a[1]
      ), Oe(), e = xs(e, l, o, 1, a, i, n, r.parentNode, Ds, Aa, r, wa), Ie());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          v(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        y(e[l]);
      s = !1;
    },
    d(a) {
      a && w(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function py(t) {
  let e, n, r, s;
  return e = new Nu({
    props: {
      $$slots: { default: [uy] },
      $$scope: { ctx: t }
    }
  }), r = new Ru({
    props: {
      $$slots: { default: [my] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(e.$$.fragment, i), v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(e.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(e, i), F(r, i);
    }
  };
}
function gy(t) {
  let e, n;
  return e = new Iu({
    props: {
      $$slots: { default: [py] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, [s]) {
      const i = {};
      s & /*$$scope, data, heads*/
      1027 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function _y(t, e, n) {
  let { heads: r = [] } = e, { data: s = [] } = e;
  return t.$$set = (i) => {
    "heads" in i && n(0, r = i.heads), "data" in i && n(1, s = i.data);
  }, [r, s];
}
class by extends J {
  constructor(e) {
    super(), X(this, e, _y, gy, Y, { heads: 0, data: 1 });
  }
}
const Pu = (t) => {
  const e = Object.entries(t), n = e.map(([r]) => r);
  return Le(e.map(([, r]) => r), (r) => Object.fromEntries(r.map((s, i) => [n[i], s])));
}, vy = (t) => t & /*$values*/
1, yy = (t) => ({}), Oa = (t) => ({ .../*$values*/
t[0] });
function ky(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = te(
    n,
    t,
    /*$$scope*/
    t[2],
    Oa
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
      5) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[2],
        vy(i) || !e ? se(
          /*$$scope*/
          s[2]
        ) : ne(
          n,
          /*$$scope*/
          s[2],
          i,
          yy
        ),
        Oa
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function wy(t, e, n) {
  const r = [];
  let s = $(e, r), i, { $$slots: o = {}, $$scope: a } = e;
  const l = Pu(s);
  return Ge(t, l, (c) => n(0, i = c)), t.$$set = (c) => {
    e = S(S({}, e), be(c)), n(4, s = $(e, r)), "$$scope" in c && n(2, a = c.$$scope);
  }, [i, l, a, o];
}
class Vr extends J {
  constructor(e) {
    super(), X(this, e, wy, ky, Y, {});
  }
}
function Ia(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function Cy(t) {
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
      $$slots: { default: [Sy] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < s.length; c += 1)
      l = S(l, s[c]);
    return { props: l };
  }
  return i && (e = Xn(i, o(t)), t[4](e)), {
    c() {
      e && B(e.$$.fragment), n = Ee();
    },
    m(a, l) {
      e && L(e, a, l), C(a, n, l), r = !0;
    },
    p(a, l) {
      const c = l & /*props*/
      4 ? de(s, [it(
        /*props*/
        a[2] ?? {}
      )]) : {};
      if (l & /*$$scope, config*/
      258 && (c.$$scope = { dirty: l, ctx: a }), l & /*config*/
      2 && i !== (i = /*config*/
      a[1].component)) {
        if (e) {
          Oe();
          const u = e;
          y(u.$$.fragment, 1, 0, () => {
            F(u, 1);
          }), Ie();
        }
        i ? (e = Xn(i, o(a)), a[4](e), B(e.$$.fragment), v(e.$$.fragment, 1), L(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(c);
    },
    i(a) {
      r || (e && v(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && y(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && w(n), t[4](null), e && F(e, a);
    }
  };
}
function Ty(t) {
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
      l = S(l, s[c]);
    return { props: l };
  }
  return i && (e = Xn(i, o()), t[3](e)), {
    c() {
      e && B(e.$$.fragment), n = Ee();
    },
    m(a, l) {
      e && L(e, a, l), C(a, n, l), r = !0;
    },
    p(a, l) {
      const c = l & /*props*/
      4 ? de(s, [it(
        /*props*/
        a[2] ?? {}
      )]) : {};
      if (l & /*config*/
      2 && i !== (i = /*config*/
      a[1].component)) {
        if (e) {
          Oe();
          const u = e;
          y(u.$$.fragment, 1, 0, () => {
            F(u, 1);
          }), Ie();
        }
        i ? (e = Xn(i, o()), a[3](e), B(e.$$.fragment), v(e.$$.fragment, 1), L(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(c);
    },
    i(a) {
      r || (e && v(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && y(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && w(n), t[3](null), e && F(e, a);
    }
  };
}
function Ra(t) {
  let e, n;
  return e = new jn({ props: { of: (
    /*child*/
    t[5]
  ) } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*config*/
      2 && (i.of = /*child*/
      r[5]), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Sy(t) {
  let e, n, r = ze(
    /*config*/
    t[1].children
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Ra(Ia(t, r, o));
  const i = (o) => y(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = Ee();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      C(o, e, a), n = !0;
    },
    p(o, a) {
      if (a & /*config*/
      2) {
        r = ze(
          /*config*/
          o[1].children
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = Ia(o, r, l);
          s[l] ? (s[l].p(c, a), v(s[l], 1)) : (s[l] = Ra(c), s[l].c(), v(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Oe(), l = r.length; l < s.length; l += 1)
          i(l);
        Ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          v(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        y(s[a]);
      n = !1;
    },
    d(o) {
      o && w(e), _t(s, o);
    }
  };
}
function Ey(t) {
  let e, n, r, s;
  const i = [Ty, Cy], o = [];
  function a(l, c) {
    return (
      /*config*/
      l[1].children.length === 0 ? 0 : 1
    );
  }
  return e = a(t), n = o[e] = i[e](t), {
    c() {
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, [c]) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function Ay(t, e, n) {
  let { instance: r = void 0 } = e, { config: s } = e, { props: i = void 0 } = e;
  function o(l) {
    ft[l ? "unshift" : "push"](() => {
      r = l, n(0, r);
    });
  }
  function a(l) {
    ft[l ? "unshift" : "push"](() => {
      r = l, n(0, r);
    });
  }
  return t.$$set = (l) => {
    "instance" in l && n(0, r = l.instance), "config" in l && n(1, s = l.config), "props" in l && n(2, i = l.props);
  }, [r, s, i, o, a];
}
class Mu extends J {
  constructor(e) {
    super(), X(this, e, Ay, Ey, Y, { instance: 0, config: 1, props: 2 });
  }
}
const fo = (t) => (t == null ? void 0 : t.subscribe) instanceof Function, Oy = Ht(void 0);
function Iy(t) {
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
    t[1]), e = new Mu({ props: i }), ft.push(() => Ft(e, "instance", s)), {
      c() {
        B(e.$$.fragment);
      },
      m(o, a) {
        L(e, o, a), r = !0;
      },
      p(o, a) {
        const l = {};
        a & /*config*/
        1 && (l.config = /*config*/
        o[0]), a & /*config*/
        1 && (l.props = /*config*/
        o[0].props), !n && a & /*instance*/
        2 && (n = !0, l.instance = /*instance*/
        o[1], Lt(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (v(e.$$.fragment, o), r = !0);
      },
      o(o) {
        y(e.$$.fragment, o), r = !1;
      },
      d(o) {
        F(e, o);
      }
    }
  );
}
function Ry(t) {
  let e, n;
  return e = new Vr({
    props: {
      props: (
        /*config*/
        t[0].props
      ),
      $$slots: {
        default: [
          Ny,
          ({ props: r }) => ({ 4: r }),
          ({ props: r }) => r ? 16 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*config*/
      1 && (i.props = /*config*/
      r[0].props), s & /*$$scope, config, props, instance*/
      51 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Ny(t) {
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
    t[1]), e = new Mu({ props: i }), ft.push(() => Ft(e, "instance", s)), {
      c() {
        B(e.$$.fragment);
      },
      m(o, a) {
        L(e, o, a), r = !0;
      },
      p(o, a) {
        const l = {};
        a & /*config*/
        1 && (l.config = /*config*/
        o[0]), a & /*props*/
        16 && (l.props = /*props*/
        o[4]), !n && a & /*instance*/
        2 && (n = !0, l.instance = /*instance*/
        o[1], Lt(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (v(e.$$.fragment, o), r = !0);
      },
      o(o) {
        y(e.$$.fragment, o), r = !1;
      },
      d(o) {
        F(e, o);
      }
    }
  );
}
function Py(t) {
  let e, n, r, s, i;
  const o = [Ry, Iy], a = [];
  function l(c, u) {
    return u & /*config*/
    1 && (e = null), e == null && (e = !!fo(
      /*config*/
      c[0].props
    )), e ? 0 : 1;
  }
  return n = l(t, -1), r = a[n] = o[n](t), {
    c() {
      r.c(), s = Ee();
    },
    m(c, u) {
      a[n].m(c, u), C(c, s, u), i = !0;
    },
    p(c, [u]) {
      let f = n;
      n = l(c, u), n === f ? a[n].p(c, u) : (Oe(), y(a[f], 1, 1, () => {
        a[f] = null;
      }), Ie(), r = a[n], r ? r.p(c, u) : (r = a[n] = o[n](c), r.c()), v(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      i || (v(r), i = !0);
    },
    o(c) {
      y(r), i = !1;
    },
    d(c) {
      c && w(s), a[n].d(c);
    }
  };
}
function My(t, e, n) {
  let { config: r } = e, s;
  Kt(function() {
    return r.eventHandlers.forEach(([l, c]) => {
      const u = s.$$.callbacks[l] ?? [];
      u.push(c), n(1, s.$$.callbacks[l] = u, s);
    }), function() {
      r.eventHandlers.forEach(([c, u]) => {
        const f = s.$$.callbacks[c], d = f.findIndex((h) => h === u);
        f.splice(d, 1);
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
class jy extends J {
  constructor(e) {
    super(), X(this, e, My, Py, Y, { config: 0 });
  }
}
function Dy(t) {
  let e, n;
  return e = new jy({ props: { config: (
    /*config*/
    t[0]
  ) } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*config*/
      1 && (i.config = /*config*/
      r[0]), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function xy(t) {
  let e;
  return {
    c() {
      e = Me(
        /*config*/
        t[0]
      );
    },
    m(n, r) {
      C(n, e, r);
    },
    p(n, r) {
      r & /*config*/
      1 && Qe(
        e,
        /*config*/
        n[0]
      );
    },
    i: _e,
    o: _e,
    d(n) {
      n && w(e);
    }
  };
}
function Ly(t) {
  let e;
  return {
    c() {
      e = Me(
        /*$readableConfig*/
        t[1]
      );
    },
    m(n, r) {
      C(n, e, r);
    },
    p(n, r) {
      r & /*$readableConfig*/
      2 && Qe(
        e,
        /*$readableConfig*/
        n[1]
      );
    },
    i: _e,
    o: _e,
    d(n) {
      n && w(e);
    }
  };
}
function Fy(t) {
  let e, n, r, s, i;
  const o = [Ly, xy, Dy], a = [];
  function l(c, u) {
    return u & /*config*/
    1 && (e = null), e == null && (e = !!fo(
      /*config*/
      c[0]
    )), e ? 0 : typeof /*config*/
    c[0] != "object" ? 1 : 2;
  }
  return n = l(t, -1), r = a[n] = o[n](t), {
    c() {
      r.c(), s = Ee();
    },
    m(c, u) {
      a[n].m(c, u), C(c, s, u), i = !0;
    },
    p(c, [u]) {
      let f = n;
      n = l(c, u), n === f ? a[n].p(c, u) : (Oe(), y(a[f], 1, 1, () => {
        a[f] = null;
      }), Ie(), r = a[n], r ? r.p(c, u) : (r = a[n] = o[n](c), r.c()), v(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      i || (v(r), i = !0);
    },
    o(c) {
      y(r), i = !1;
    },
    d(c) {
      c && w(s), a[n].d(c);
    }
  };
}
function By(t, e, n) {
  let r, { of: s } = e;
  const i = fo(s) ? s : Oy;
  return Ge(t, i, (o) => n(1, r = o)), t.$$set = (o) => {
    "of" in o && n(0, s = o.of);
  }, [s, r, i];
}
class jn extends J {
  constructor(e) {
    super(), X(this, e, By, Fy, Y, { of: 0 });
  }
}
class zy {
  constructor(e, n) {
    he(this, "component");
    he(this, "props");
    he(this, "eventHandlers", []);
    he(this, "children", []);
    this.component = e, this.props = n;
  }
  on(e, n) {
    return this.eventHandlers.push([e, n]), this;
  }
  slot(...e) {
    return this.children = e, this;
  }
}
function ii(t, e) {
  return new zy(t, e);
}
class ju {
  constructor({ header: e, footer: n, height: r, plugins: s }) {
    he(this, "header");
    he(this, "footer");
    he(this, "height");
    he(this, "plugins");
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
class Du extends ju {
  constructor({ header: n, footer: r, plugins: s, id: i }) {
    super({ header: n, footer: r, plugins: s, height: 1 });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__flat", !0);
    he(this, "id");
    this.id = i ?? String(n);
  }
}
class Zy extends Du {
  constructor({ header: n, footer: r, plugins: s, cell: i, accessor: o, id: a }) {
    super({ header: n, footer: r, plugins: s, id: "Initialization not complete" });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__data", !0);
    he(this, "cell");
    he(this, "accessorKey");
    he(this, "accessorFn");
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
class Vy extends Du {
  constructor({ header: n, footer: r, plugins: s, id: i, cell: o, data: a }) {
    super({ header: n, footer: r, plugins: s, id: i });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__display", !0);
    he(this, "cell");
    he(this, "data");
    this.cell = o, this.data = a;
  }
}
class Wy extends ju {
  constructor({ header: n, footer: r, columns: s, plugins: i }) {
    const o = Math.max(...s.map((a) => a.height)) + 1;
    super({ header: n, footer: r, height: o, plugins: i });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__group", !0);
    he(this, "columns");
    he(this, "ids");
    this.columns = s, this.ids = xu(s);
  }
}
const xu = (t) => t.flatMap((e) => e.isFlat() ? [e.id] : e.isGroup() ? e.ids : []), Lu = (t) => t.flatMap((e) => e.isFlat() ? [e] : e.isGroup() ? Lu(e.columns) : []), Hy = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.forEach((n) => {
    e.set(n, (e.get(n) ?? 0) + 1);
  }), e;
}, Gy = (t) => Array.from(Hy(t).entries()).filter(([, e]) => e !== 1).map(([e]) => e), Uy = (t) => Object.entries(t).map(([e, n]) => `${e}:${n}`).join(";"), Ky = (t, e) => t.style === void 0 && e.style === void 0 ? { ...t, ...e } : {
  ...t,
  ...e,
  style: {
    ...typeof t.style == "object" ? t.style : {},
    ...typeof e.style == "object" ? e.style : {}
  }
}, ss = (t) => t.style === void 0 || typeof t.style != "object" ? t : {
  ...t,
  style: Uy(t.style)
};
class Ws {
  constructor({ id: e }) {
    he(this, "id");
    he(this, "attrsForName", {});
    he(this, "propsForName", {});
    he(this, "state");
    this.id = e;
  }
  attrs() {
    return Le(Object.values(this.attrsForName), (e) => {
      let n = {};
      return e.forEach((r) => {
        n = Ky(n, r);
      }), ss(n);
    });
  }
  props() {
    return Pu(this.propsForName);
  }
  injectState(e) {
    this.state = e;
  }
  applyHook(e, n) {
    n.props !== void 0 && (this.propsForName[e] = n.props), n.attrs !== void 0 && (this.attrsForName[e] = n.attrs);
  }
}
class Fu extends Ws {
  constructor({ id: n, row: r }) {
    super({ id: n });
    he(this, "row");
    this.row = r;
  }
  attrs() {
    return Le(super.attrs(), (n) => ({
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
class ho extends Fu {
  constructor({ row: n, column: r, label: s, value: i }) {
    super({ id: r.id, row: n });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__data", !0);
    he(this, "column");
    he(this, "label");
    he(this, "value");
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
    return new ho({
      row: this.row,
      column: this.column,
      label: this.label,
      value: this.value
    });
  }
}
class mo extends Fu {
  constructor({ row: n, column: r, label: s }) {
    super({ id: r.id, row: n });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__display", !0);
    he(this, "column");
    he(this, "label");
    this.column = r, this.label = s;
  }
  render() {
    if (this.state === void 0)
      throw new Error("Missing `state` reference");
    return this.label(this, this.state);
  }
  clone() {
    return new mo({
      row: this.row,
      column: this.column,
      label: this.label
    });
  }
}
const Na = (t) => t !== null, ln = (t) => t !== void 0;
class qy extends Ws {
  constructor({ id: n, cells: r, cellForId: s, depth: i = 0, parentRow: o }) {
    super({ id: n });
    he(this, "cells");
    /**
     * Get the cell with a given column id.
     *
     * **This includes hidden cells.**
     */
    he(this, "cellForId");
    he(this, "depth");
    he(this, "parentRow");
    he(this, "subRows");
    this.cells = r, this.cellForId = s, this.depth = i, this.parentRow = o;
  }
  attrs() {
    return Le(super.attrs(), (n) => ({
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
class po extends qy {
  constructor({ id: n, dataId: r, original: s, cells: i, cellForId: o, depth: a = 0, parentRow: l }) {
    super({ id: n, cells: i, cellForId: o, depth: a, parentRow: l });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__data", !0);
    he(this, "dataId");
    he(this, "original");
    this.dataId = r, this.original = s;
  }
  clone({ includeCells: n = !1, includeSubRows: r = !1 } = {}) {
    var i;
    const s = new po({
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
const $y = (t, e, { rowDataId: n } = {}) => {
  const r = t.map((s, i) => {
    const o = i.toString();
    return new po({
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
        return new ho({
          row: r[i],
          column: l,
          label: a.cell,
          value: c
        });
      }
      if (a.isDisplay()) {
        const l = a;
        return new mo({
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
}, Yy = (t, e) => {
  const n = t.map((r) => {
    const s = r.clone();
    return s.cells = [], s.cellForId = {}, s;
  });
  return t.length === 0 || e.length === 0 ? t : (t.forEach((r, s) => {
    const i = r.cells.map((a) => {
      const l = a.clone();
      return l.row = n[s], l;
    }), o = e.map((a) => i.find((l) => l.id === a)).filter(ln);
    n[s].cells = o, i.forEach((a) => {
      n[s].cellForId[a.id] = a;
    });
  }), n);
}, Bu = " ";
class zu extends Ws {
  constructor({ id: n, label: r, colspan: s, colstart: i }) {
    super({ id: n });
    he(this, "label");
    he(this, "colspan");
    he(this, "colstart");
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
    return Le(super.attrs(), (n) => ({
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
class Hs extends zu {
  constructor({ id: n, label: r, colstart: s }) {
    super({ id: n, label: r, colspan: 1, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__flat", !0);
  }
  clone() {
    return new Hs({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class go extends Hs {
  constructor({ id: n, label: r, accessorKey: s, accessorFn: i, colstart: o }) {
    super({ id: n, label: r, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__data", !0);
    he(this, "accessorKey");
    he(this, "accessorFn");
    this.accessorKey = s, this.accessorFn = i;
  }
  clone() {
    return new go({
      id: this.id,
      label: this.label,
      accessorFn: this.accessorFn,
      accessorKey: this.accessorKey,
      colstart: this.colstart
    });
  }
}
class Gs extends Hs {
  constructor({ id: n, label: r = Bu, colstart: s }) {
    super({ id: n, label: r, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__display", !0);
  }
  clone() {
    return new Gs({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class Us extends zu {
  constructor({ label: n, ids: r, allIds: s, colspan: i, colstart: o }) {
    super({ id: `[${r.join(",")}]`, label: n, colspan: i, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__group", !0);
    he(this, "ids");
    he(this, "allId");
    he(this, "allIds");
    this.ids = r, this.allId = `[${s.join(",")}]`, this.allIds = s;
  }
  setIds(n) {
    this.ids = n, this.id = `[${this.ids.join(",")}]`;
  }
  pushId(n) {
    this.ids = [...this.ids, n], this.id = `[${this.ids.join(",")}]`;
  }
  clone() {
    return new Us({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
class _o extends Us {
  constructor({ label: n = Bu, ids: r, allIds: s, colspan: i = 1, colstart: o }) {
    super({ label: n, ids: r, allIds: s, colspan: i, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    he(this, "__display", !0);
  }
  clone() {
    return new _o({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
const Xy = (t) => t.reduce((e, n) => e + n, 0), Zu = (t, e) => {
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(Array(t).fill(null));
  return n;
}, Pa = (t) => {
  const e = t.length;
  if (e === 0)
    return t;
  const n = t[0].length, r = Zu(e, n);
  for (let s = 0; s < n; s++)
    for (let i = 0; i < e; i++)
      r[s][i] = t[i][s];
  return r;
};
class bo extends Ws {
  constructor({ id: n, cells: r }) {
    super({ id: n });
    he(this, "cells");
    this.cells = r;
  }
  attrs() {
    return Le(super.attrs(), (n) => ({
      ...n,
      role: "row"
    }));
  }
  clone() {
    return new bo({
      id: this.id,
      cells: this.cells
    });
  }
}
const Jy = (t, e = []) => {
  const n = Qy(t);
  let r = Pa(n);
  return r = ek(r, e), tk(r), nk(Pa(r));
}, Qy = (t) => {
  const e = Xy(t.map((i) => i.isGroup() ? i.ids.length : 1)), n = Math.max(...t.map((i) => i.height)), r = Zu(e, n);
  let s = 0;
  return t.forEach((i) => {
    const o = n - i.height;
    Vu(r, i, o, s), s += i.isGroup() ? i.ids.length : 1;
  }), r.map((i, o) => i.map((a, l) => {
    var u;
    if (a !== null)
      return a;
    if (o === n - 1)
      return new Gs({ id: l.toString(), colstart: l });
    const c = ((u = r[n - 1][l]) == null ? void 0 : u.id) ?? l.toString();
    return new _o({ ids: [], allIds: [c], colstart: l });
  }));
}, Vu = (t, e, n, r) => {
  if (e.isData()) {
    t[t.length - 1][r] = new go({
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
    t[t.length - 1][r] = new Gs({
      id: e.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: e.header,
      colstart: r
    });
    return;
  }
  if (e.isGroup()) {
    for (let i = 0; i < e.ids.length; i++)
      t[n][r + i] = new Us({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: e.header,
        colspan: 1,
        allIds: e.ids,
        ids: [],
        colstart: r
      });
    let s = 0;
    e.columns.forEach((i) => {
      Vu(t, i, n + 1, r + s), s += i.isGroup() ? i.ids.length : 1;
    });
    return;
  }
}, ek = (t, e) => {
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
}, tk = (t) => {
  t.forEach((e) => {
    const n = e[e.length - 1];
    if (!n.isFlat())
      throw new Error("The last element of each column must be a `FlatHeaderCell`");
    e.forEach((r) => {
      r.isGroup() && r.pushId(n.id);
    });
  });
}, nk = (t) => t.map((e, n) => new bo({ id: n.toString(), cells: rk(e) })), rk = (t) => {
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
}, sk = (t, e, { rowDataId: n } = {}) => {
  const { data: r, plugins: s } = t, i = Lu(e), o = Ht(i), a = Le([r, o], ([K, V]) => $y(K, V, { rowDataId: n })), l = Ne([]), c = Ne(), u = Ne([]), f = Ne([]), d = Ne({
    role: "table"
  }), h = Ne({}), m = Ne({
    role: "rowgroup"
  }), g = {
    data: r,
    columns: e,
    flatColumns: i,
    tableAttrs: d,
    tableHeadAttrs: h,
    tableBodyAttrs: m,
    visibleColumns: l,
    headerRows: c,
    originalRows: a,
    rows: u,
    pageRows: f
  }, p = Object.fromEntries(Object.entries(s).map(([K, V]) => {
    const Re = Object.fromEntries(i.map((tt) => {
      var ht;
      const mt = (ht = tt.plugins) == null ? void 0 : ht[K];
      if (mt !== void 0)
        return [tt.id, mt];
    }).filter(ln));
    return [
      K,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      V({ pluginName: K, tableState: g, columnOptions: Re })
    ];
  })), _ = Object.fromEntries(Object.entries(p).map(([K, V]) => [
    K,
    V.pluginState
  ])), b = {
    data: r,
    columns: e,
    flatColumns: i,
    tableAttrs: d,
    tableHeadAttrs: h,
    tableBodyAttrs: m,
    visibleColumns: l,
    headerRows: c,
    originalRows: a,
    rows: u,
    pageRows: f,
    pluginStates: _
  }, k = Object.values(p).map((K) => K.deriveTableAttrs).filter(ln);
  let I = Ht({
    role: "table"
  });
  k.forEach((K) => {
    I = K(I);
  });
  const q = Le(I, (K) => {
    const V = ss(K);
    return d.set(V), V;
  }), P = Object.values(p).map((K) => K.deriveTableBodyAttrs).filter(ln);
  let D = Ht({});
  P.forEach((K) => {
    D = K(D);
  });
  const Z = Le(D, (K) => {
    const V = ss(K);
    return h.set(V), V;
  }), me = Object.values(p).map((K) => K.deriveTableBodyAttrs).filter(ln);
  let fe = Ht({
    role: "rowgroup"
  });
  me.forEach((K) => {
    fe = K(fe);
  });
  const A = Le(fe, (K) => {
    const V = ss(K);
    return m.set(V), V;
  }), T = Object.values(p).map((K) => K.deriveFlatColumns).filter(ln);
  let M = o;
  T.forEach((K) => {
    M = K(M);
  });
  const W = Le(M, (K) => (l.set(K), K)), j = Le([a, W], ([K, V]) => Yy(K, V.map((Re) => Re.id))), G = Object.values(p).map((K) => K.deriveRows).filter(ln);
  let ce = j;
  G.forEach((K) => {
    ce = K(ce);
  });
  const ke = Le(ce, (K) => (K.forEach((V) => {
    V.injectState(b), V.cells.forEach((Re) => {
      Re.injectState(b);
    });
  }), Object.entries(p).forEach(([V, Re]) => {
    K.forEach((tt) => {
      var mt;
      ((mt = Re.hooks) == null ? void 0 : mt["tbody.tr"]) !== void 0 && tt.applyHook(V, Re.hooks["tbody.tr"](tt)), tt.cells.forEach((ht) => {
        var bt;
        ((bt = Re.hooks) == null ? void 0 : bt["tbody.tr.td"]) !== void 0 && ht.applyHook(V, Re.hooks["tbody.tr.td"](ht));
      });
    });
  }), u.set(K), K)), we = Object.values(p).map((K) => K.derivePageRows).filter(ln);
  let et = ke;
  we.forEach((K) => {
    et = K(et);
  });
  const qe = Le(et, (K) => (K.forEach((V) => {
    V.injectState(b), V.cells.forEach((Re) => {
      Re.injectState(b);
    });
  }), Object.entries(p).forEach(([V, Re]) => {
    K.forEach((tt) => {
      var mt;
      ((mt = Re.hooks) == null ? void 0 : mt["tbody.tr"]) !== void 0 && tt.applyHook(V, Re.hooks["tbody.tr"](tt)), tt.cells.forEach((ht) => {
        var bt;
        ((bt = Re.hooks) == null ? void 0 : bt["tbody.tr.td"]) !== void 0 && ht.applyHook(V, Re.hooks["tbody.tr.td"](ht));
      });
    });
  }), f.set(K), K)), rt = Le(W, (K) => {
    const V = Jy(e, K.map((Re) => Re.id));
    return V.forEach((Re) => {
      Re.injectState(b), Re.cells.forEach((tt) => {
        tt.injectState(b);
      });
    }), Object.entries(p).forEach(([Re, tt]) => {
      V.forEach((mt) => {
        var ht;
        ((ht = tt.hooks) == null ? void 0 : ht["thead.tr"]) !== void 0 && mt.applyHook(Re, tt.hooks["thead.tr"](mt)), mt.cells.forEach((bt) => {
          var rn;
          ((rn = tt.hooks) == null ? void 0 : rn["thead.tr.th"]) !== void 0 && bt.applyHook(Re, tt.hooks["thead.tr.th"](bt));
        });
      });
    }), c.set(V), V;
  });
  return {
    tableAttrs: q,
    tableHeadAttrs: Z,
    tableBodyAttrs: A,
    visibleColumns: W,
    flatColumns: i,
    headerRows: rt,
    originalRows: a,
    rows: ke,
    pageRows: qe,
    pluginStates: _
  };
};
class ik {
  constructor(e, n) {
    he(this, "data");
    he(this, "plugins");
    this.data = e, this.plugins = n;
  }
  createColumns(e) {
    const n = xu(e), r = Gy(n);
    if (r.length !== 0)
      throw new Error(`Duplicate column ids not allowed: "${r.join('", "')}"`);
    return e;
  }
  column(e) {
    return new Zy(e);
  }
  group(e) {
    return new Wy(e);
  }
  display(e) {
    return new Vy(e);
  }
  createViewModel(e, n) {
    return sk(this, e, n);
  }
}
const ok = (t, e = {}) => new ik(t, e);
Ht(void 0);
const Wu = (t = {}) => {
  const e = (d) => Object.fromEntries(Object.entries(d).filter(([, h]) => h)), { subscribe: n, update: r, set: s } = Ne(e(t)), i = (d) => {
    r((h) => {
      const m = d(h);
      return e(m);
    });
  };
  return {
    subscribe: n,
    update: i,
    set: (d) => i(() => d),
    toggle: (d) => {
      r((h) => h[d] === !0 ? (delete h[d], h) : {
        ...h,
        [d]: !0
      });
    },
    add: (d) => {
      r((h) => ({
        ...h,
        [d]: !0
      }));
    },
    addAll: (d) => {
      r((h) => ({
        ...h,
        ...Object.fromEntries(d.map((m) => [m, !0]))
      }));
    },
    remove: (d) => {
      r((h) => (delete h[d], h));
    },
    removeAll: (d) => {
      r((h) => {
        for (const m of d)
          delete h[m];
        return h;
      });
    },
    clear: () => {
      s({});
    }
  };
}, lk = (t) => t instanceof MouseEvent ? t.shiftKey : !1, ak = ({ initialHiddenColumnIds: t = [] } = {}) => () => {
  const e = Ne(t);
  return {
    pluginState: { hiddenColumnIds: e },
    deriveFlatColumns: (s) => Le([s, e], ([i, o]) => o.length === 0 ? i : i.filter((a) => !o.includes(a.id)))
  };
}, ck = 1, uk = ({ items: t, initialPageSize: e, initialPageIndex: n, serverSide: r }) => {
  const s = Ne(e), i = (h) => {
    s.update((m) => {
      const g = h(m);
      return Math.max(g, ck);
    });
  }, o = (h) => i(() => h), a = Ne(n);
  function l([h, m]) {
    const g = Math.ceil(m / h);
    return a.update((p) => g > 0 && p >= g ? g - 1 : p), g;
  }
  const c = Ne(0);
  let u;
  if (r)
    u = Le([s, c], l);
  else {
    const h = Le(t, (m) => m.length);
    u = Le([s, h], l);
  }
  const f = Le(a, (h) => h > 0), d = Le([a, u], ([h, m]) => h < m - 1);
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
    hasNextPage: d
  };
}, fk = ({ initialPageIndex: t = 0, initialPageSize: e = 10, serverSide: n = !1 } = {}) => () => {
  const r = Ne([]), s = Ne([]), { pageSize: i, pageIndex: o, pageCount: a, serverItemCount: l, hasPreviousPage: c, hasNextPage: u } = uk({
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
    derivePageRows: (h) => Le([h, i, o], ([m, g, p]) => {
      if (r.set(m), n)
        return s.set(m), m;
      const _ = p * g, b = m.slice(_, _ + g);
      return s.set(b), b;
    })
  };
}, Un = (t, e, n) => t.isData() && (!n || t.subRows === void 0) ? e[t.dataId] === !0 : t.subRows === void 0 ? !1 : t.subRows.every((r) => Un(r, e, n)), Mi = (t, e, n) => t.isData() && (!n || t.subRows === void 0) ? e[t.dataId] === !0 : t.subRows === void 0 ? !1 : t.subRows.some((r) => Mi(r, e, n)), Hu = (t, e, n, r) => {
  t.isData() && (n[t.dataId] = e, !r) || t.subRows !== void 0 && t.subRows.forEach((s) => {
    Hu(s, e, n, r);
  });
}, dk = (t, e, n) => {
  const { subscribe: r } = Le(e, (o) => {
    if (t.isData()) {
      if (!n)
        return o[t.dataId] === !0;
      if (o[t.dataId] === !0)
        return !0;
    }
    return Un(t, o, n);
  }), s = (o) => {
    e.update((a) => {
      const l = Un(t, a, n), c = { ...a };
      return Hu(t, o(l), c, n), t.parentRow !== void 0 && t.parentRow.isData() && (c[t.parentRow.dataId] = Un(t.parentRow, c, n)), c;
    });
  };
  return {
    subscribe: r,
    update: s,
    set: (o) => s(() => o)
  };
}, hk = ({ initialSelectedDataIds: t = {}, linkDataSubRows: e = !0 } = {}) => ({ tableState: n }) => {
  const r = Wu(t), s = (m) => {
    const g = dk(m, r, e), p = Le([g, r], ([b, k]) => b ? !1 : Mi(m, k, e)), _ = Le(r, (b) => Un(m, b, e));
    return {
      isSelected: g,
      isSomeSubRowsSelected: p,
      isAllSubRowsSelected: _
    };
  }, i = Le([n.rows, r], ([m, g]) => m.every((p) => p.isData() ? g[p.dataId] === !0 : !0)), o = (m) => {
    if (m) {
      const p = Se(n.rows).map((_) => _.isData() ? _.dataId : null).filter(Na);
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
  }, l = Le([n.rows, r], ([m, g]) => m.some((p) => p.isData() ? g[p.dataId] === !0 : !1)), c = Le([n.pageRows, r], ([m, g]) => m.every((p) => p.isData() ? g[p.dataId] === !0 : !0)), u = (m) => {
    const p = Se(n.pageRows).map((_) => _.isData() ? _.dataId : null).filter(Na);
    m ? r.addAll(p) : r.removeAll(p);
  }, f = {
    subscribe: c.subscribe,
    update(m) {
      const g = Se(c);
      u(m(g));
    },
    set: u
  }, d = Le([n.pageRows, r], ([m, g]) => m.some((p) => p.isData() ? g[p.dataId] === !0 : !1));
  return {
    pluginState: {
      selectedDataIds: r,
      getRowState: s,
      allRowsSelected: a,
      someRowsSelected: l,
      allPageRowsSelected: f,
      somePageRowsSelected: d
    },
    hooks: {
      "tbody.tr": (m) => ({ props: Le(r, (p) => {
        const _ = Mi(m, p, e), b = Un(m, p, e);
        return {
          selected: m.isData() ? p[m.dataId] === !0 : b,
          someSubRowsSelected: _,
          allSubRowsSelected: b
        };
      }) })
    }
  };
}, is = (t, e) => Array.isArray(t) && Array.isArray(e) ? mk(t, e) : typeof t == "number" && typeof e == "number" ? t - e : t < e ? -1 : t > e ? 1 : 0, mk = (t, e) => {
  const n = Math.min(t.length, e.length);
  for (let r = 0; r < n; r++) {
    const s = is(t[r], e[r]);
    if (s !== 0)
      return s;
  }
  return 0;
}, pk = ["asc", "desc", void 0], gk = (t) => {
  const { subscribe: e, update: n, set: r } = Ne(t);
  return {
    subscribe: e,
    update: n,
    set: r,
    toggleId: (o, { multiSort: a = !0, toggleOrder: l = pk } = {}) => {
      n((c) => {
        const u = c.findIndex((p) => p.id === o), f = c[u], d = f == null ? void 0 : f.order, m = (l.findIndex((p) => p === d) + 1) % l.length, g = l[m];
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
}, Gu = (t, e, n) => {
  const r = [...t];
  r.sort((s, i) => {
    var o, a, l;
    for (const c of e) {
      const u = ((o = n[c.id]) == null ? void 0 : o.invert) ?? !1, f = s.cellForId[c.id], d = i.cellForId[c.id];
      let h = 0;
      const m = (a = n[c.id]) == null ? void 0 : a.compareFn, g = (l = n[c.id]) == null ? void 0 : l.getSortValue;
      if (!f.isData())
        return 0;
      const p = f.value, _ = d.value;
      if (m !== void 0)
        h = m(p, _);
      else if (g !== void 0) {
        const b = g(p), k = g(_);
        h = is(b, k);
      } else
        typeof p == "string" || typeof p == "number" ? h = is(p, _) : p instanceof Date && _ instanceof Date && (h = is(p.getTime(), _.getTime()));
      if (h !== 0) {
        let b = 1;
        return c.order === "desc" && (b *= -1), u && (b *= -1), h * b;
      }
    }
    return 0;
  });
  for (let s = 0; s < r.length; s++) {
    const { subRows: i } = r[s];
    if (i === void 0)
      continue;
    const o = Gu(i, e, n), a = r[s].clone();
    a.subRows = o, r[s] = a;
  }
  return r;
}, _k = ({ initialSortKeys: t = [], disableMultiSort: e = !1, isMultiSortEvent: n = lk, toggleOrder: r, serverSide: s = !1 } = {}) => ({ columnOptions: i }) => {
  const o = Object.entries(i).filter(([, f]) => f.disable === !0).map(([f]) => f), a = gk(t), l = Ne([]);
  return {
    pluginState: { sortKeys: a, preSortedRows: l },
    deriveRows: (f) => Le([f, a], ([d, h]) => (l.set(d), s ? d : Gu(d, h, i))),
    hooks: {
      "thead.tr.th": (f) => {
        const d = o.includes(f.id);
        return { props: Le(a, (m) => {
          const g = m.find((b) => b.id === f.id), p = (b) => {
            f.isData() && (d || a.toggleId(f.id, {
              multiSort: e ? !1 : n(b),
              toggleOrder: r
            }));
          }, _ = () => {
            f.isData() && (o.includes(f.id) || a.clearId(f.id));
          };
          return {
            order: g == null ? void 0 : g.order,
            toggle: p,
            clear: _,
            disabled: d
          };
        }) };
      },
      "tbody.tr.td": (f) => ({ props: Le(a, (h) => {
        const m = h.find((g) => g.id === f.id);
        return {
          order: m == null ? void 0 : m.order
        };
      }) })
    }
  };
}, Uu = (t, e, n, { tableCellMatches: r, fn: s, includeHiddenColumns: i }) => t.map((a) => {
  const { subRows: l } = a;
  if (l === void 0)
    return a;
  const c = Uu(l, e, n, {
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
    let h = u.value;
    (f == null ? void 0 : f.getFilterValue) !== void 0 && (h = f == null ? void 0 : f.getFilterValue(h));
    const m = s({ value: String(h), filterValue: e });
    if (m) {
      const g = u.dataRowColId();
      g !== void 0 && (r[g] = m);
    }
    return m;
  }).includes(!0);
}), bk = ({ fn: t = vk, initialFilterValue: e = "", includeHiddenColumns: n = !1, serverSide: r = !1 } = {}) => ({ columnOptions: s }) => {
  const i = Ne(e), o = Ne([]), a = Wu();
  return {
    pluginState: { filterValue: i, preFilteredRows: o },
    deriveRows: (u) => Le([u, i], ([f, d]) => {
      o.set(f), a.clear();
      const h = {}, m = Uu(f, d, s, {
        tableCellMatches: h,
        fn: t,
        includeHiddenColumns: n
      });
      return a.set(h), r ? f : m;
    }),
    hooks: {
      "tbody.tr.td": (u) => ({ props: Le([i, a], ([d, h]) => {
        const m = u.dataRowColId();
        return {
          matches: d !== "" && m !== void 0 && (h[m] ?? !1)
        };
      }) })
    }
  };
}, vk = ({ filterValue: t, value: e }) => t === "" ? !0 : String(e).toLowerCase().startsWith(String(t).toLowerCase());
function yk(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = te(
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
      2048) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        e ? ne(
          n,
          /*$$scope*/
          s[11],
          i,
          null
        ) : se(
          /*$$scope*/
          s[11]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function kk(t) {
  let e, n;
  const r = [
    {
      class: Pe(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /*inset*/
        t[1] && "pl-8",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  let s = {
    $$slots: { default: [yk] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new f_({ props: s }), e.$on(
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
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, inset, className, $$restProps*/
      7 ? de(r, [
        o & /*cn, inset, className*/
        3 && {
          class: Pe(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            /*inset*/
            i[1] && "pl-8",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        4 && it(
          /*$$restProps*/
          i[2]
        )
      ]) : {};
      o & /*$$scope*/
      2048 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function wk(t, e, n) {
  const r = ["class", "inset"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { inset: l = void 0 } = e;
  function c(p) {
    ye.call(this, t, p);
  }
  function u(p) {
    ye.call(this, t, p);
  }
  function f(p) {
    ye.call(this, t, p);
  }
  function d(p) {
    ye.call(this, t, p);
  }
  function h(p) {
    ye.call(this, t, p);
  }
  function m(p) {
    ye.call(this, t, p);
  }
  function g(p) {
    ye.call(this, t, p);
  }
  return t.$$set = (p) => {
    e = S(S({}, e), be(p)), n(2, s = $(e, r)), "class" in p && n(0, a = p.class), "inset" in p && n(1, l = p.inset), "$$scope" in p && n(11, o = p.$$scope);
  }, [
    a,
    l,
    s,
    i,
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    o
  ];
}
class ji extends J {
  constructor(e) {
    super(), X(this, e, wk, kk, Y, { class: 0, inset: 1 });
  }
}
function Ck(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = te(
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
      16) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        e ? ne(
          n,
          /*$$scope*/
          s[4],
          i,
          null
        ) : se(
          /*$$scope*/
          s[4]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Tk(t) {
  let e, n;
  const r = [
    {
      class: Pe(
        "px-2 py-1.5 text-sm font-semibold",
        /*inset*/
        t[1] && "pl-8",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  let s = {
    $$slots: { default: [Ck] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new A_({ props: s }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, inset, className, $$restProps*/
      7 ? de(r, [
        o & /*cn, inset, className*/
        3 && {
          class: Pe(
            "px-2 py-1.5 text-sm font-semibold",
            /*inset*/
            i[1] && "pl-8",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        4 && it(
          /*$$restProps*/
          i[2]
        )
      ]) : {};
      o & /*$$scope*/
      16 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Sk(t, e, n) {
  const r = ["class", "inset"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { inset: l = void 0 } = e;
  return t.$$set = (c) => {
    e = S(S({}, e), be(c)), n(2, s = $(e, r)), "class" in c && n(0, a = c.class), "inset" in c && n(1, l = c.inset), "$$scope" in c && n(4, o = c.$$scope);
  }, [a, l, s, i, o];
}
class Ek extends J {
  constructor(e) {
    super(), X(this, e, Sk, Tk, Y, { class: 0, inset: 1 });
  }
}
function Ak(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = te(
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
      64) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[6],
        e ? ne(
          n,
          /*$$scope*/
          s[6],
          i,
          null
        ) : se(
          /*$$scope*/
          s[6]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Ok(t) {
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
      class: Pe(
        "z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[3]
  ];
  let s = {
    $$slots: { default: [Ak] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new q_({
    props: s
  }), e.$on(
    "keydown",
    /*keydown_handler*/
    t[5]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*transition, transitionConfig, cn, className, $$restProps*/
      15 ? de(r, [
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
          class: Pe(
            "z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        8 && it(
          /*$$restProps*/
          i[3]
        )
      ]) : {};
      o & /*$$scope*/
      64 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Ik(t, e, n) {
  const r = ["class", "transition", "transitionConfig"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { transition: l = Vc } = e, { transitionConfig: c = void 0 } = e;
  function u(f) {
    ye.call(this, t, f);
  }
  return t.$$set = (f) => {
    e = S(S({}, e), be(f)), n(3, s = $(e, r)), "class" in f && n(0, a = f.class), "transition" in f && n(1, l = f.transition), "transitionConfig" in f && n(2, c = f.transitionConfig), "$$scope" in f && n(6, o = f.$$scope);
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
class Ku extends J {
  constructor(e) {
    super(), X(this, e, Ik, Ok, Y, {
      class: 0,
      transition: 1,
      transitionConfig: 2
    });
  }
}
function Rk(t) {
  let e, n;
  const r = [
    {
      class: Pe(
        "-mx-1 my-1 h-px bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let s = {};
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new ab({
    props: s
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*cn, className, $$restProps*/
      3 ? de(r, [
        o & /*cn, className*/
        1 && {
          class: Pe(
            "-mx-1 my-1 h-px bg-muted",
            /*className*/
            i[0]
          )
        },
        o & /*$$restProps*/
        2 && it(
          /*$$restProps*/
          i[1]
        )
      ]) : {};
      e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Nk(t, e, n) {
  const r = ["class"];
  let s = $(e, r), { class: i = void 0 } = e;
  return t.$$set = (o) => {
    e = S(S({}, e), be(o)), n(1, s = $(e, r)), "class" in o && n(0, i = o.class);
  }, [i, s];
}
class Pk extends J {
  constructor(e) {
    super(), X(this, e, Nk, Rk, Y, { class: 0 });
  }
}
function Mk(t) {
  let e, n;
  return e = new lo({ props: { class: "h-4 w-4" } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p: _e,
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function jk(t) {
  let e, n, r, s;
  n = new yb({
    props: {
      $$slots: { default: [Mk] },
      $$scope: { ctx: t }
    }
  });
  const i = (
    /*#slots*/
    t[3].default
  ), o = te(
    i,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = O("span"), B(n.$$.fragment), r = oe(), o && o.c(), N(e, "class", "absolute left-2 flex h-3.5 w-3.5 items-center justify-center");
    },
    m(a, l) {
      C(a, e, l), L(n, e, null), C(a, r, l), o && o.m(a, l), s = !0;
    },
    p(a, l) {
      const c = {};
      l & /*$$scope*/
      4096 && (c.$$scope = { dirty: l, ctx: a }), n.$set(c), o && o.p && (!s || l & /*$$scope*/
      4096) && re(
        o,
        i,
        a,
        /*$$scope*/
        a[12],
        s ? ne(
          i,
          /*$$scope*/
          a[12],
          l,
          null
        ) : se(
          /*$$scope*/
          a[12]
        ),
        null
      );
    },
    i(a) {
      s || (v(n.$$.fragment, a), v(o, a), s = !0);
    },
    o(a) {
      y(n.$$.fragment, a), y(o, a), s = !1;
    },
    d(a) {
      a && (w(e), w(r)), F(n), o && o.d(a);
    }
  };
}
function Dk(t) {
  let e, n, r;
  const s = [
    {
      class: Pe(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
    $$slots: { default: [jk] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < s.length; a += 1)
    o = S(o, s[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (o.checked = /*checked*/
    t[0]), e = new gb({
      props: o
    }), ft.push(() => Ft(e, "checked", i)), e.$on(
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
        B(e.$$.fragment);
      },
      m(a, l) {
        L(e, a, l), r = !0;
      },
      p(a, [l]) {
        const c = l & /*cn, className, $$restProps*/
        6 ? de(s, [
          l & /*cn, className*/
          2 && {
            class: Pe(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && it(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        4096 && (c.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, c.checked = /*checked*/
        a[0], Lt(() => n = !1)), e.$set(c);
      },
      i(a) {
        r || (v(e.$$.fragment, a), r = !0);
      },
      o(a) {
        y(e.$$.fragment, a), r = !1;
      },
      d(a) {
        F(e, a);
      }
    }
  );
}
function xk(t, e, n) {
  const r = ["class", "checked"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { checked: l = void 0 } = e;
  function c(_) {
    l = _, n(0, l);
  }
  function u(_) {
    ye.call(this, t, _);
  }
  function f(_) {
    ye.call(this, t, _);
  }
  function d(_) {
    ye.call(this, t, _);
  }
  function h(_) {
    ye.call(this, t, _);
  }
  function m(_) {
    ye.call(this, t, _);
  }
  function g(_) {
    ye.call(this, t, _);
  }
  function p(_) {
    ye.call(this, t, _);
  }
  return t.$$set = (_) => {
    e = S(S({}, e), be(_)), n(2, s = $(e, r)), "class" in _ && n(1, a = _.class), "checked" in _ && n(0, l = _.checked), "$$scope" in _ && n(12, o = _.$$scope);
  }, [
    l,
    a,
    s,
    i,
    c,
    u,
    f,
    d,
    h,
    m,
    g,
    p,
    o
  ];
}
class Lk extends J {
  constructor(e) {
    super(), X(this, e, xk, Dk, Y, { class: 1, checked: 0 });
  }
}
const qu = r_, $u = nb, Fk = v_;
function Bk(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = te(
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
      256) && re(
        r,
        n,
        s,
        /*$$scope*/
        s[8],
        e ? ne(
          n,
          /*$$scope*/
          s[8],
          i,
          null
        ) : se(
          /*$$scope*/
          s[8]
        ),
        null
      );
    },
    i(s) {
      e || (v(r, s), e = !0);
    },
    o(s) {
      y(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function zk(t) {
  let e, n;
  const r = [
    { builders: (
      /*builders*/
      t[3]
    ) },
    {
      class: Pe(xa({
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
    $$slots: { default: [Bk] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    s = S(s, r[i]);
  return e = new Ag({ props: s }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      B(e.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), n = !0;
    },
    p(i, [o]) {
      const a = o & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? de(r, [
        o & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        o & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: Pe(xa({
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
        16 && it(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      o & /*$$scope*/
      256 && (a.$$scope = { dirty: o, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (v(e.$$.fragment, i), n = !0);
    },
    o(i) {
      y(e.$$.fragment, i), n = !1;
    },
    d(i) {
      F(e, i);
    }
  };
}
function Zk(t, e, n) {
  const r = ["class", "variant", "size", "builders"];
  let s = $(e, r), { $$slots: i = {}, $$scope: o } = e, { class: a = void 0 } = e, { variant: l = "default" } = e, { size: c = "default" } = e, { builders: u = [] } = e;
  function f(h) {
    ye.call(this, t, h);
  }
  function d(h) {
    ye.call(this, t, h);
  }
  return t.$$set = (h) => {
    e = S(S({}, e), be(h)), n(4, s = $(e, r)), "class" in h && n(0, a = h.class), "variant" in h && n(1, l = h.variant), "size" in h && n(2, c = h.size), "builders" in h && n(3, u = h.builders), "$$scope" in h && n(8, o = h.$$scope);
  }, [
    a,
    l,
    c,
    u,
    s,
    i,
    f,
    d,
    o
  ];
}
class Qn extends J {
  constructor(e) {
    super(), X(this, e, Zk, zk, Y, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var Ma = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, vt = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, Vk = (t, e) => JSON.stringify(t) === JSON.stringify(e);
function Yu(t, e) {
  t.forEach(function(n) {
    Array.isArray(n) ? Yu(n, e) : e.push(n);
  });
}
function Xu(t) {
  let e = [];
  return Yu(t, e), e;
}
var Wk = (...t) => Xu(t).filter(Boolean), Ju = (t, e) => {
  let n = {}, r = Object.keys(t), s = Object.keys(e);
  for (let i of r)
    if (s.includes(i)) {
      let o = t[i], a = e[i];
      typeof o == "object" && typeof a == "object" ? n[i] = Ju(o, a) : n[i] = a + " " + o;
    } else
      n[i] = t[i];
  for (let i of s)
    r.includes(i) || (n[i] = e[i]);
  return n;
}, ja = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim(), Hk = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Qu = (t) => t || void 0, Is = (...t) => Qu(Xu(t).filter(Boolean).join(" ")), oi = null, Rs = {}, Di = !1, mr = (...t) => (e) => e.twMerge ? ((!oi || Di) && (Di = !1, oi = vt(Rs) ? zc : ym(Rs)), Qu(oi(Is(t)))) : Is(t), Da = (t, e) => {
  for (let n in e)
    t.hasOwnProperty(n) ? t[n] = Is(t[n], e[n]) : t[n] = e[n];
  return t;
}, Gk = (t, e) => {
  let { extend: n = null, slots: r = {}, variants: s = {}, compoundVariants: i = [], compoundSlots: o = [], defaultVariants: a = {} } = t, l = { ...Hk, ...e }, c = n != null && n.base ? Is(n.base, t == null ? void 0 : t.base) : t == null ? void 0 : t.base, u = n != null && n.variants && !vt(n.variants) ? Ju(s, n.variants) : s, f = n != null && n.defaultVariants && !vt(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !vt(l.twMergeConfig) && !Vk(l.twMergeConfig, Rs) && (Di = !0, Rs = l.twMergeConfig);
  let d = vt(r) ? {} : { base: t == null ? void 0 : t.base, ...r }, h = vt(n == null ? void 0 : n.slots) ? d : Da(n == null ? void 0 : n.slots, vt(d) ? { base: t == null ? void 0 : t.base } : d), m = (p) => {
    if (vt(u) && vt(r) && vt(n == null ? void 0 : n.slots))
      return mr(c, p == null ? void 0 : p.class, p == null ? void 0 : p.className)(l);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (o && !Array.isArray(o))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof o}`);
    let _ = (A, T, M = [], W) => {
      let j = M;
      if (typeof T == "string")
        j = j.concat(ja(T).split(" ").map((G) => `${A}:${G}`));
      else if (Array.isArray(T))
        j = j.concat(T.reduce((G, ce) => G.concat(`${A}:${ce}`), []));
      else if (typeof T == "object" && typeof W == "string") {
        for (let G in T)
          if (T.hasOwnProperty(G) && G === W) {
            let ce = T[G];
            if (ce && typeof ce == "string") {
              let ke = ja(ce);
              j[W] ? j[W] = j[W].concat(ke.split(" ").map((we) => `${A}:${we}`)) : j[W] = ke.split(" ").map((we) => `${A}:${we}`);
            } else
              Array.isArray(ce) && ce.length > 0 && (j[W] = ce.reduce((ke, we) => ke.concat(`${A}:${we}`), []));
          }
      }
      return j;
    }, b = (A, T = u, M = null, W = null) => {
      var j;
      let G = T[A];
      if (!G || vt(G))
        return null;
      let ce = (j = W == null ? void 0 : W[A]) != null ? j : p == null ? void 0 : p[A];
      if (ce === null)
        return null;
      let ke = Ma(ce), we = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || l.responsiveVariants === !0, et = f == null ? void 0 : f[A], qe = [];
      if (typeof ke == "object" && we)
        for (let [K, V] of Object.entries(ke)) {
          let Re = G[V];
          if (K === "initial") {
            et = V;
            continue;
          }
          Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(K) || (qe = _(K, Re, qe, M));
        }
      let rt = G[ke] || G[Ma(et)];
      return typeof qe == "object" && typeof M == "string" && qe[M] ? Da(qe, rt) : qe.length > 0 ? (qe.push(rt), qe) : rt;
    }, k = () => u ? Object.keys(u).map((A) => b(A, u)) : null, I = (A, T) => {
      if (!u || typeof u != "object")
        return null;
      let M = new Array();
      for (let W in u) {
        let j = b(W, u, A, T), G = A === "base" && typeof j == "string" ? j : j && j[A];
        G && (M[M.length] = G);
      }
      return M;
    }, q = {};
    for (let A in p)
      p[A] !== void 0 && (q[A] = p[A]);
    let P = (A, T) => {
      var M;
      let W = typeof (p == null ? void 0 : p[A]) == "object" ? { [A]: (M = p[A]) == null ? void 0 : M.initial } : {};
      return { ...f, ...q, ...W, ...T };
    }, D = (A = [], T) => {
      let M = [];
      for (let { class: W, className: j, ...G } of A) {
        let ce = !0;
        for (let [ke, we] of Object.entries(G)) {
          let et = P(ke, T);
          if (Array.isArray(we)) {
            if (!we.includes(et[ke])) {
              ce = !1;
              break;
            }
          } else if (et[ke] !== we) {
            ce = !1;
            break;
          }
        }
        ce && (W && M.push(W), j && M.push(j));
      }
      return M;
    }, Z = (A) => {
      let T = D(i, A), M = D(n == null ? void 0 : n.compoundVariants, A);
      return Wk(M, T);
    }, me = (A) => {
      let T = Z(A);
      if (!Array.isArray(T))
        return T;
      let M = {};
      for (let W of T)
        if (typeof W == "string" && (M.base = mr(M.base, W)(l)), typeof W == "object")
          for (let [j, G] of Object.entries(W))
            M[j] = mr(M[j], G)(l);
      return M;
    }, fe = (A) => {
      if (o.length < 1)
        return null;
      let T = {};
      for (let { slots: M = [], class: W, className: j, ...G } of o) {
        if (!vt(G)) {
          let ce = !0;
          for (let ke of Object.keys(G)) {
            let we = P(ke, A)[ke];
            if (we === void 0 || we !== G[ke]) {
              ce = !1;
              break;
            }
          }
          if (!ce)
            continue;
        }
        for (let ce of M)
          T[ce] = T[ce] || [], T[ce].push([W, j]);
      }
      return T;
    };
    if (!vt(r) || !vt(n == null ? void 0 : n.slots)) {
      let A = {};
      if (typeof h == "object" && !vt(h))
        for (let T of Object.keys(h))
          A[T] = (M) => {
            var W, j;
            return mr(h[T], I(T, M), ((W = me(M)) != null ? W : [])[T], ((j = fe(M)) != null ? j : [])[T], M == null ? void 0 : M.class, M == null ? void 0 : M.className)(l);
          };
      return A;
    }
    return mr(c, k(), Z(), p == null ? void 0 : p.class, p == null ? void 0 : p.className)(l);
  }, g = () => {
    if (!(!u || typeof u != "object"))
      return Object.keys(u);
  };
  return m.variantKeys = g(), m.extend = n, m.base = c, m.slots = h, m.variants = u, m.defaultVariants = f, m.compoundSlots = o, m.compoundVariants = i, m;
};
const xa = Gk({
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
function Uk(t) {
  let e, n, r, s;
  return r = new Hv({ props: { class: "w-4 h-4" } }), {
    c() {
      e = O("span"), e.textContent = "Open menu", n = oe(), B(r.$$.fragment), N(e, "class", "sr-only");
    },
    m(i, o) {
      C(i, e, o), C(i, n, o), L(r, i, o), s = !0;
    },
    p: _e,
    i(i) {
      s || (v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && (w(e), w(n)), F(r, i);
    }
  };
}
function Kk(t) {
  let e, n;
  return e = new Qn({
    props: {
      variant: "ghost",
      builders: [
        /*builder*/
        t[2]
      ],
      size: "icon",
      class: "relative w-8 h-8 p-0",
      $$slots: { default: [Uk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
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
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function qk(t) {
  let e;
  return {
    c() {
      e = Me("Actions");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function $k(t) {
  let e;
  return {
    c() {
      e = Me("Copy payment ID");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Yk(t) {
  let e, n, r, s;
  return e = new Ek({
    props: {
      $$slots: { default: [qk] },
      $$scope: { ctx: t }
    }
  }), r = new ji({
    props: {
      $$slots: { default: [$k] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "click",
    /*click_handler*/
    t[1]
  ), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(e.$$.fragment, i), v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(e.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(e, i), F(r, i);
    }
  };
}
function Xk(t) {
  let e;
  return {
    c() {
      e = Me("View customer");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Jk(t) {
  let e;
  return {
    c() {
      e = Me("View payment details");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Qk(t) {
  let e, n, r, s, i, o, a, l;
  return e = new Fk({
    props: {
      $$slots: { default: [Yk] },
      $$scope: { ctx: t }
    }
  }), r = new Pk({}), i = new ji({
    props: {
      $$slots: { default: [Xk] },
      $$scope: { ctx: t }
    }
  }), a = new ji({
    props: {
      $$slots: { default: [Jk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment), s = oe(), B(i.$$.fragment), o = oe(), B(a.$$.fragment);
    },
    m(c, u) {
      L(e, c, u), C(c, n, u), L(r, c, u), C(c, s, u), L(i, c, u), C(c, o, u), L(a, c, u), l = !0;
    },
    p(c, u) {
      const f = {};
      u & /*$$scope, id*/
      9 && (f.$$scope = { dirty: u, ctx: c }), e.$set(f);
      const d = {};
      u & /*$$scope*/
      8 && (d.$$scope = { dirty: u, ctx: c }), i.$set(d);
      const h = {};
      u & /*$$scope*/
      8 && (h.$$scope = { dirty: u, ctx: c }), a.$set(h);
    },
    i(c) {
      l || (v(e.$$.fragment, c), v(r.$$.fragment, c), v(i.$$.fragment, c), v(a.$$.fragment, c), l = !0);
    },
    o(c) {
      y(e.$$.fragment, c), y(r.$$.fragment, c), y(i.$$.fragment, c), y(a.$$.fragment, c), l = !1;
    },
    d(c) {
      c && (w(n), w(s), w(o)), F(e, c), F(r, c), F(i, c), F(a, c);
    }
  };
}
function ew(t) {
  let e, n, r, s;
  return e = new $u({
    props: {
      asChild: !0,
      $$slots: {
        default: [
          Kk,
          ({ builder: i }) => ({ 2: i }),
          ({ builder: i }) => i ? 4 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), r = new Ku({
    props: {
      $$slots: { default: [Qk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(e.$$.fragment, i), v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(e.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(e, i), F(r, i);
    }
  };
}
function tw(t) {
  let e, n;
  return e = new qu({
    props: {
      $$slots: { default: [ew] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, [s]) {
      const i = {};
      s & /*$$scope, id*/
      9 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function nw(t, e, n) {
  let { id: r } = e;
  const s = () => navigator.clipboard.writeText(r);
  return t.$$set = (i) => {
    "id" in i && n(0, r = i.id);
  }, [r, s];
}
class rw extends J {
  constructor(e) {
    super(), X(this, e, nw, tw, Y, { id: 0 });
  }
}
function sw(t) {
  let e, n;
  return e = new Bv({ props: { class: "h-4 w-4" } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function iw(t) {
  let e, n;
  return e = new lo({ props: { class: "h-4 w-4" } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function ow(t) {
  let e, n, r, s;
  const i = [iw, sw], o = [];
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
      n && n.c(), r = Ee();
    },
    m(l, c) {
      ~e && o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e !== u && (n && (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie()), ~e ? (n = o[e], n || (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), ~e && o[e].d(l);
    }
  };
}
function lw(t) {
  let e, n;
  return e = new Zg({
    props: {
      class: Pe("flex items-center justify-center text-current h-4 w-4"),
      $$slots: {
        default: [
          ow,
          ({ isChecked: r, isIndeterminate: s }) => ({ 5: r, 6: s }),
          ({ isChecked: r, isIndeterminate: s }) => (r ? 32 : 0) | (s ? 64 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s & /*$$scope, isChecked, isIndeterminate*/
      224 && (i.$$scope = { dirty: s, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function aw(t) {
  let e, n, r;
  const s = [
    {
      class: Pe(
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
    $$slots: { default: [lw] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < s.length; a += 1)
    o = S(o, s[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (o.checked = /*checked*/
    t[0]), e = new Lg({ props: o }), ft.push(() => Ft(e, "checked", i)), e.$on(
      "click",
      /*click_handler*/
      t[4]
    ), {
      c() {
        B(e.$$.fragment);
      },
      m(a, l) {
        L(e, a, l), r = !0;
      },
      p(a, [l]) {
        const c = l & /*cn, className, $$restProps*/
        6 ? de(s, [
          l & /*cn, className*/
          2 && {
            class: Pe(
              "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && it(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        128 && (c.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, c.checked = /*checked*/
        a[0], Lt(() => n = !1)), e.$set(c);
      },
      i(a) {
        r || (v(e.$$.fragment, a), r = !0);
      },
      o(a) {
        y(e.$$.fragment, a), r = !1;
      },
      d(a) {
        F(e, a);
      }
    }
  );
}
function cw(t, e, n) {
  const r = ["class", "checked"];
  let s = $(e, r), { class: i = void 0 } = e, { checked: o = !1 } = e;
  function a(c) {
    o = c, n(0, o);
  }
  function l(c) {
    ye.call(this, t, c);
  }
  return t.$$set = (c) => {
    e = S(S({}, e), be(c)), n(2, s = $(e, r)), "class" in c && n(1, i = c.class), "checked" in c && n(0, o = c.checked);
  }, [
    o,
    i,
    s,
    a,
    l
  ];
}
class uw extends J {
  constructor(e) {
    super(), X(this, e, cw, aw, Y, { class: 1, checked: 0 });
  }
}
function fw(t) {
  let e, n, r;
  function s(o) {
    t[2](o);
  }
  let i = {};
  return (
    /*$checked*/
    t[1] !== void 0 && (i.checked = /*$checked*/
    t[1]), e = new uw({ props: i }), ft.push(() => Ft(e, "checked", s)), {
      c() {
        B(e.$$.fragment);
      },
      m(o, a) {
        L(e, o, a), r = !0;
      },
      p(o, [a]) {
        const l = {};
        !n && a & /*$checked*/
        2 && (n = !0, l.checked = /*$checked*/
        o[1], Lt(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (v(e.$$.fragment, o), r = !0);
      },
      o(o) {
        y(e.$$.fragment, o), r = !1;
      },
      d(o) {
        F(e, o);
      }
    }
  );
}
function dw(t, e, n) {
  let r, s = _e, i = () => (s(), s = Ps(o, (l) => n(1, r = l)), o);
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
class La extends J {
  constructor(e) {
    super(), X(this, e, dw, fw, Y, { checked: 0 });
  }
}
function Fa(t, e, n) {
  const r = t.slice();
  return r[37] = e[n], r;
}
function Ba(t, e, n) {
  const r = t.slice();
  return r[41] = e[n], r;
}
function za(t, e, n) {
  const r = t.slice();
  return r[45] = e[n], r;
}
function Za(t, e, n) {
  const r = t.slice();
  return r[41] = e[n], r;
}
function Va(t, e, n) {
  const r = t.slice();
  return r[51] = e[n], r[52] = e, r[53] = n, r;
}
function hw(t) {
  let e, n, r;
  return n = new Ou({ props: { class: "ml-2 h-4 w-4" } }), {
    c() {
      e = Me("Columns "), B(n.$$.fragment);
    },
    m(s, i) {
      C(s, e, i), L(n, s, i), r = !0;
    },
    p: _e,
    i(s) {
      r || (v(n.$$.fragment, s), r = !0);
    },
    o(s) {
      y(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(e), F(n, s);
    }
  };
}
function mw(t) {
  let e, n;
  return e = new Qn({
    props: {
      variant: "outline",
      class: "ml-auto",
      builders: [
        /*builder*/
        t[54]
      ],
      $$slots: { default: [hw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
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
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Wa(t) {
  let e, n, r;
  function s(o) {
    t[28](
      o,
      /*col*/
      t[51]
    );
  }
  let i = {
    $$slots: { default: [pw] },
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
    ]), e = new Lk({ props: i }), ft.push(() => Ft(e, "checked", s)), {
      c() {
        B(e.$$.fragment);
      },
      m(o, a) {
        L(e, o, a), r = !0;
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
        ], Lt(() => n = !1)), e.$set(l);
      },
      i(o) {
        r || (v(e.$$.fragment, o), r = !0);
      },
      o(o) {
        y(e.$$.fragment, o), r = !1;
      },
      d(o) {
        F(e, o);
      }
    }
  );
}
function pw(t) {
  let e = (
    /*col*/
    t[51].header + ""
  ), n, r;
  return {
    c() {
      n = Me(e), r = oe();
    },
    m(s, i) {
      C(s, n, i), C(s, r, i);
    },
    p: _e,
    d(s) {
      s && (w(n), w(r));
    }
  };
}
function Ha(t) {
  let e = (
    /*heads*/
    t[0].includes(
      /*col*/
      t[51].id
    )
  ), n, r, s = e && Wa(t);
  return {
    c() {
      s && s.c(), n = Ee();
    },
    m(i, o) {
      s && s.m(i, o), C(i, n, o), r = !0;
    },
    p(i, o) {
      o[0] & /*heads*/
      1 && (e = /*heads*/
      i[0].includes(
        /*col*/
        i[51].id
      )), e ? s ? (s.p(i, o), o[0] & /*heads*/
      1 && v(s, 1)) : (s = Wa(i), s.c(), v(s, 1), s.m(n.parentNode, n)) : s && (Oe(), y(s, 1, 1, () => {
        s = null;
      }), Ie());
    },
    i(i) {
      r || (v(s), r = !0);
    },
    o(i) {
      y(s), r = !1;
    },
    d(i) {
      i && w(n), s && s.d(i);
    }
  };
}
function gw(t) {
  let e, n, r = ze(
    /*flatColumns*/
    t[17]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Ha(Va(t, r, o));
  const i = (o) => y(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = Ee();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      C(o, e, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*hideForId, flatColumns, heads*/
      131075) {
        r = ze(
          /*flatColumns*/
          o[17]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = Va(o, r, l);
          s[l] ? (s[l].p(c, a), v(s[l], 1)) : (s[l] = Ha(c), s[l].c(), v(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Oe(), l = r.length; l < s.length; l += 1)
          i(l);
        Ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          v(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        y(s[a]);
      n = !1;
    },
    d(o) {
      o && w(e), _t(s, o);
    }
  };
}
function _w(t) {
  let e, n, r, s;
  return e = new $u({
    props: {
      asChild: !0,
      $$slots: {
        default: [
          mw,
          ({ builder: i }) => ({ 54: i }),
          ({ builder: i }) => [0, i ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: t }
    }
  }), r = new Ku({
    props: {
      $$slots: { default: [gw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(i, o) {
      L(e, i, o), C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(e.$$.fragment, i), v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(e.$$.fragment, i), y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(e, i), F(r, i);
    }
  };
}
function bw(t) {
  let e, n;
  return e = new jn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s[0] & /*$headerRows*/
      16 && (i.of = /*cell*/
      r[41].render()), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function vw(t) {
  let e, n;
  return e = new Qn({
    props: {
      variant: "ghost",
      $$slots: { default: [kw] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    $t(
      /*props*/
      t[50].sort.toggle
    ) && t[50].sort.toggle.apply(this, arguments);
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const i = {};
      s[0] & /*$sortKeys, $headerRows*/
      48 | s[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function yw(t) {
  let e, n, r;
  return n = new jn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = O("div"), B(n.$$.fragment), N(e, "class", "text-right font-medium");
    },
    m(s, i) {
      C(s, e, i), L(n, e, null), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$headerRows*/
      16 && (o.of = /*cell*/
      s[41].render()), n.$set(o);
    },
    i(s) {
      r || (v(n.$$.fragment, s), r = !0);
    },
    o(s) {
      y(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(e), F(n);
    }
  };
}
function kw(t) {
  var i;
  let e, n, r, s;
  return e = new jn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), r = new Ev({
    props: {
      class: Pe(
        /*$sortKeys*/
        ((i = t[5][0]) == null ? void 0 : i.id) === /*cell*/
        t[41].id && "text-foreground",
        "ml-2 h-4 w-4"
      )
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(o, a) {
      L(e, o, a), C(o, n, a), L(r, o, a), s = !0;
    },
    p(o, a) {
      var u;
      const l = {};
      a[0] & /*$headerRows*/
      16 && (l.of = /*cell*/
      o[41].render()), e.$set(l);
      const c = {};
      a[0] & /*$sortKeys, $headerRows*/
      48 && (c.class = Pe(
        /*$sortKeys*/
        ((u = o[5][0]) == null ? void 0 : u.id) === /*cell*/
        o[41].id && "text-foreground",
        "ml-2 h-4 w-4"
      )), r.$set(c);
    },
    i(o) {
      s || (v(e.$$.fragment, o), v(r.$$.fragment, o), s = !0);
    },
    o(o) {
      y(e.$$.fragment, o), y(r.$$.fragment, o), s = !1;
    },
    d(o) {
      o && w(n), F(e, o), F(r, o);
    }
  };
}
function ww(t) {
  let e, n, r, s;
  const i = [yw, vw, bw], o = [];
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
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function Cw(t) {
  let e, n, r;
  const s = [
    /*attrs*/
    t[44],
    {
      class: Pe("[&:has([role=checkbox])]:pl-3")
    }
  ];
  let i = {
    $$slots: { default: [ww] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < s.length; o += 1)
    i = S(i, s[o]);
  return e = new uo({ props: i }), {
    c() {
      B(e.$$.fragment), n = oe();
    },
    m(o, a) {
      L(e, o, a), C(o, n, a), r = !0;
    },
    p(o, a) {
      const l = a[1] & /*attrs*/
      8192 ? de(s, [
        a[1] & /*attrs*/
        8192 && it(
          /*attrs*/
          o[44]
        ),
        a & /*cn*/
        0 && {
          class: Pe("[&:has([role=checkbox])]:pl-3")
        }
      ]) : {};
      a[0] & /*$headerRows, $sortKeys*/
      48 | a[1] & /*$$scope, props*/
      17301504 && (l.$$scope = { dirty: a, ctx: o }), e.$set(l);
    },
    i(o) {
      r || (v(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && w(n), F(e, o);
    }
  };
}
function Ga(t, e) {
  let n, r, s;
  return r = new Vr({
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
          Cw,
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
      n = Ee(), B(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(r, i);
    }
  };
}
function Tw(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = ze(
    /*headerRow*/
    t[45].cells
  );
  const o = (a) => (
    /*cell*/
    a[41].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Za(t, i, a), c = o(l);
    n.set(c, e[a] = Ga(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ee();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      C(a, r, l), s = !0;
    },
    p(a, l) {
      l[0] & /*$headerRows, $sortKeys*/
      48 | l[1] & /*attrs, props*/
      532480 && (i = ze(
        /*headerRow*/
        a[45].cells
      ), Oe(), e = xs(e, l, o, 1, a, i, n, r.parentNode, Ds, Ga, r, Za), Ie());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          v(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        y(e[l]);
      s = !1;
    },
    d(a) {
      a && w(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Sw(t) {
  let e, n, r;
  return e = new Vs({
    props: {
      $$slots: { default: [Tw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe();
    },
    m(s, i) {
      L(e, s, i), C(s, n, i), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$headerRows, $sortKeys*/
      48 | i[1] & /*$$scope*/
      16777216 && (o.$$scope = { dirty: i, ctx: s }), e.$set(o);
    },
    i(s) {
      r || (v(e.$$.fragment, s), r = !0);
    },
    o(s) {
      y(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(n), F(e, s);
    }
  };
}
function Ua(t) {
  let e, n;
  return e = new Vr({
    props: {
      rowAttrs: (
        /*headerRow*/
        t[45].attrs()
      ),
      $$slots: { default: [Sw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
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
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Ew(t) {
  let e, n, r = ze(
    /*$headerRows*/
    t[4]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Ua(za(t, r, o));
  const i = (o) => y(s[o], 1, 1, () => {
    s[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      e = Ee();
    },
    m(o, a) {
      for (let l = 0; l < s.length; l += 1)
        s[l] && s[l].m(o, a);
      C(o, e, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*$headerRows, $sortKeys*/
      48 | a[1] & /*attrs, props*/
      532480) {
        r = ze(
          /*$headerRows*/
          o[4]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = za(o, r, l);
          s[l] ? (s[l].p(c, a), v(s[l], 1)) : (s[l] = Ua(c), s[l].c(), v(s[l], 1), s[l].m(e.parentNode, e));
        }
        for (Oe(), l = r.length; l < s.length; l += 1)
          i(l);
        Ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          v(s[a]);
        n = !0;
      }
    },
    o(o) {
      s = s.filter(Boolean);
      for (let a = 0; a < s.length; a += 1)
        y(s[a]);
      n = !1;
    },
    d(o) {
      o && w(e), _t(s, o);
    }
  };
}
function Aw(t) {
  let e, n;
  return e = new jn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      const i = {};
      s[0] & /*$pageRows*/
      128 && (i.of = /*cell*/
      r[41].render()), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Ow(t) {
  let e, n, r;
  return n = new jn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = O("div"), B(n.$$.fragment), N(e, "class", "capitalize");
    },
    m(s, i) {
      C(s, e, i), L(n, e, null), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$pageRows*/
      128 && (o.of = /*cell*/
      s[41].render()), n.$set(o);
    },
    i(s) {
      r || (v(n.$$.fragment, s), r = !0);
    },
    o(s) {
      y(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(e), F(n);
    }
  };
}
function Iw(t) {
  let e, n, r;
  return n = new jn({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = O("div"), B(n.$$.fragment), N(e, "class", "text-right font-medium");
    },
    m(s, i) {
      C(s, e, i), L(n, e, null), r = !0;
    },
    p(s, i) {
      const o = {};
      i[0] & /*$pageRows*/
      128 && (o.of = /*cell*/
      s[41].render()), n.$set(o);
    },
    i(s) {
      r || (v(n.$$.fragment, s), r = !0);
    },
    o(s) {
      y(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && w(e), F(n);
    }
  };
}
function Rw(t) {
  let e, n, r, s;
  const i = [Iw, Ow, Aw], o = [];
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
      n.c(), r = Ee();
    },
    m(l, c) {
      o[e].m(l, c), C(l, r, c), s = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (Oe(), y(o[u], 1, 1, () => {
        o[u] = null;
      }), Ie(), n = o[e], n ? n.p(l, c) : (n = o[e] = i[e](l), n.c()), v(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      s || (v(n), s = !0);
    },
    o(l) {
      y(n), s = !1;
    },
    d(l) {
      l && w(r), o[e].d(l);
    }
  };
}
function Nw(t) {
  let e, n, r;
  const s = [
    { class: "[&:has([role=checkbox])]:pl-3" },
    /*attrs*/
    t[44]
  ];
  let i = {
    $$slots: { default: [Rw] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < s.length; o += 1)
    i = S(i, s[o]);
  return e = new co({ props: i }), {
    c() {
      B(e.$$.fragment), n = oe();
    },
    m(o, a) {
      L(e, o, a), C(o, n, a), r = !0;
    },
    p(o, a) {
      const l = a[1] & /*attrs*/
      8192 ? de(s, [s[0], it(
        /*attrs*/
        o[44]
      )]) : {};
      a[0] & /*$pageRows*/
      128 | a[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: a, ctx: o }), e.$set(l);
    },
    i(o) {
      r || (v(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && w(n), F(e, o);
    }
  };
}
function Ka(t, e) {
  let n, r, s;
  return r = new Vr({
    props: {
      attrs: (
        /*cell*/
        e[41].attrs()
      ),
      $$slots: {
        default: [
          Nw,
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
      n = Ee(), B(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(r, i);
    }
  };
}
function Pw(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = ze(
    /*row*/
    t[37].cells
  );
  const o = (a) => (
    /*cell*/
    a[41].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Ba(t, i, a), c = o(l);
    n.set(c, e[a] = Ka(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ee();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      C(a, r, l), s = !0;
    },
    p(a, l) {
      l[0] & /*$pageRows*/
      128 | l[1] & /*attrs*/
      8192 && (i = ze(
        /*row*/
        a[37].cells
      ), Oe(), e = xs(e, l, o, 1, a, i, n, r.parentNode, Ds, Ka, r, Ba), Ie());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          v(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        y(e[l]);
      s = !1;
    },
    d(a) {
      a && w(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Mw(t) {
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
    $$slots: { default: [Pw] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < s.length; o += 1)
    i = S(i, s[o]);
  return e = new Vs({ props: i }), {
    c() {
      B(e.$$.fragment), n = oe();
    },
    m(o, a) {
      L(e, o, a), C(o, n, a), r = !0;
    },
    p(o, a) {
      const l = a[0] & /*$selectedDataIds, $pageRows*/
      384 | a[1] & /*rowAttrs*/
      512 ? de(s, [
        a[1] & /*rowAttrs*/
        512 && it(
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
      r || (v(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && w(n), F(e, o);
    }
  };
}
function qa(t, e) {
  let n, r, s;
  return r = new Vr({
    props: {
      rowAttrs: (
        /*row*/
        e[37].attrs()
      ),
      $$slots: {
        default: [
          Mw,
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
      n = Ee(), B(r.$$.fragment), this.first = n;
    },
    m(i, o) {
      C(i, n, o), L(r, i, o), s = !0;
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
      s || (v(r.$$.fragment, i), s = !0);
    },
    o(i) {
      y(r.$$.fragment, i), s = !1;
    },
    d(i) {
      i && w(n), F(r, i);
    }
  };
}
function jw(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, s, i = ze(
    /*$pageRows*/
    t[7]
  );
  const o = (a) => (
    /*row*/
    a[37].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Fa(t, i, a), c = o(l);
    n.set(c, e[a] = qa(c, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ee();
    },
    m(a, l) {
      for (let c = 0; c < e.length; c += 1)
        e[c] && e[c].m(a, l);
      C(a, r, l), s = !0;
    },
    p(a, l) {
      l[0] & /*$pageRows, $selectedDataIds*/
      384 | l[1] & /*rowAttrs, attrs*/
      8704 && (i = ze(
        /*$pageRows*/
        a[7]
      ), Oe(), e = xs(e, l, o, 1, a, i, n, r.parentNode, Ds, qa, r, Fa), Ie());
    },
    i(a) {
      if (!s) {
        for (let l = 0; l < i.length; l += 1)
          v(e[l]);
        s = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        y(e[l]);
      s = !1;
    },
    d(a) {
      a && w(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Dw(t) {
  let e, n, r, s;
  e = new Nu({
    props: {
      $$slots: { default: [Ew] },
      $$scope: { ctx: t }
    }
  });
  const i = [
    /*$tableBodyAttrs*/
    t[6]
  ];
  let o = {
    $$slots: { default: [jw] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    o = S(o, i[a]);
  return r = new Ru({ props: o }), {
    c() {
      B(e.$$.fragment), n = oe(), B(r.$$.fragment);
    },
    m(a, l) {
      L(e, a, l), C(a, n, l), L(r, a, l), s = !0;
    },
    p(a, l) {
      const c = {};
      l[0] & /*$headerRows, $sortKeys*/
      48 | l[1] & /*$$scope*/
      16777216 && (c.$$scope = { dirty: l, ctx: a }), e.$set(c);
      const u = l[0] & /*$tableBodyAttrs*/
      64 ? de(i, [it(
        /*$tableBodyAttrs*/
        a[6]
      )]) : {};
      l[0] & /*$pageRows, $selectedDataIds*/
      384 | l[1] & /*$$scope*/
      16777216 && (u.$$scope = { dirty: l, ctx: a }), r.$set(u);
    },
    i(a) {
      s || (v(e.$$.fragment, a), v(r.$$.fragment, a), s = !0);
    },
    o(a) {
      y(e.$$.fragment, a), y(r.$$.fragment, a), s = !1;
    },
    d(a) {
      a && w(n), F(e, a), F(r, a);
    }
  };
}
function xw(t) {
  let e;
  return {
    c() {
      e = Me("Previous");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Lw(t) {
  let e;
  return {
    c() {
      e = Me("Next");
    },
    m(n, r) {
      C(n, e, r);
    },
    d(n) {
      n && w(e);
    }
  };
}
function Fw(t) {
  let e, n, r, s, i, o, a, l, c, u, f, d, h = Object.keys(
    /*$selectedDataIds*/
    t[8]
  ).length + "", m, g, p = " ", _, b, k = (
    /*$rows*/
    t[9].length + ""
  ), I, q, P, D, Z, me, fe;
  function A(j) {
    t[27](j);
  }
  let T = {
    class: "max-w-sm",
    placeholder: "Filter value...",
    type: "text"
  };
  /*$filterValue*/
  t[2] !== void 0 && (T.value = /*$filterValue*/
  t[2]), r = new Wc({ props: T }), ft.push(() => Ft(r, "value", A)), o = new qu({
    props: {
      $$slots: { default: [_w] },
      $$scope: { ctx: t }
    }
  });
  const M = [
    /*$tableAttrs*/
    t[3]
  ];
  let W = {
    $$slots: { default: [Dw] },
    $$scope: { ctx: t }
  };
  for (let j = 0; j < M.length; j += 1)
    W = S(W, M[j]);
  return c = new Iu({ props: W }), D = new Qn({
    props: {
      variant: "outline",
      size: "sm",
      disabled: !/*$hasPreviousPage*/
      t[11],
      $$slots: { default: [xw] },
      $$scope: { ctx: t }
    }
  }), D.$on(
    "click",
    /*click_handler*/
    t[29]
  ), me = new Qn({
    props: {
      variant: "outline",
      size: "sm",
      disabled: !/*$hasNextPage*/
      t[12],
      $$slots: { default: [Lw] },
      $$scope: { ctx: t }
    }
  }), me.$on(
    "click",
    /*click_handler_1*/
    t[30]
  ), {
    c() {
      e = O("div"), n = O("div"), B(r.$$.fragment), i = oe(), B(o.$$.fragment), a = oe(), l = O("div"), B(c.$$.fragment), u = oe(), f = O("div"), d = O("div"), m = Me(h), g = Me(" of"), _ = Me(p), b = oe(), I = Me(k), q = Me(" row(s) selected."), P = oe(), B(D.$$.fragment), Z = oe(), B(me.$$.fragment), N(n, "class", "flex items-center py-4"), N(l, "class", "rounded-md border"), N(d, "class", "flex-1 text-sm text-muted-foreground"), N(f, "class", "flex items-center justify-end space-x-2 py-4"), N(e, "class", "w-full");
    },
    m(j, G) {
      C(j, e, G), R(e, n), L(r, n, null), R(n, i), L(o, n, null), R(e, a), R(e, l), L(c, l, null), R(e, u), R(e, f), R(f, d), R(d, m), R(d, g), R(d, _), R(d, b), R(d, I), R(d, q), R(f, P), L(D, f, null), R(f, Z), L(me, f, null), fe = !0;
    },
    p(j, G) {
      const ce = {};
      !s && G[0] & /*$filterValue*/
      4 && (s = !0, ce.value = /*$filterValue*/
      j[2], Lt(() => s = !1)), r.$set(ce);
      const ke = {};
      G[0] & /*hideForId, heads*/
      3 | G[1] & /*$$scope*/
      16777216 && (ke.$$scope = { dirty: G, ctx: j }), o.$set(ke);
      const we = G[0] & /*$tableAttrs*/
      8 ? de(M, [it(
        /*$tableAttrs*/
        j[3]
      )]) : {};
      G[0] & /*$tableBodyAttrs, $pageRows, $selectedDataIds, $headerRows, $sortKeys*/
      496 | G[1] & /*$$scope*/
      16777216 && (we.$$scope = { dirty: G, ctx: j }), c.$set(we), (!fe || G[0] & /*$selectedDataIds*/
      256) && h !== (h = Object.keys(
        /*$selectedDataIds*/
        j[8]
      ).length + "") && Qe(m, h), (!fe || G[0] & /*$rows*/
      512) && k !== (k = /*$rows*/
      j[9].length + "") && Qe(I, k);
      const et = {};
      G[0] & /*$hasPreviousPage*/
      2048 && (et.disabled = !/*$hasPreviousPage*/
      j[11]), G[1] & /*$$scope*/
      16777216 && (et.$$scope = { dirty: G, ctx: j }), D.$set(et);
      const qe = {};
      G[0] & /*$hasNextPage*/
      4096 && (qe.disabled = !/*$hasNextPage*/
      j[12]), G[1] & /*$$scope*/
      16777216 && (qe.$$scope = { dirty: G, ctx: j }), me.$set(qe);
    },
    i(j) {
      fe || (v(r.$$.fragment, j), v(o.$$.fragment, j), v(c.$$.fragment, j), v(D.$$.fragment, j), v(me.$$.fragment, j), fe = !0);
    },
    o(j) {
      y(r.$$.fragment, j), y(o.$$.fragment, j), y(c.$$.fragment, j), y(D.$$.fragment, j), y(me.$$.fragment, j), fe = !1;
    },
    d(j) {
      j && w(e), F(r), F(o), F(c), F(D), F(me);
    }
  };
}
function Bw(t, e, n) {
  let r, s, i, o, a, l, c, u, f, d, h, m, { heads: g = [] } = e, { data: p = [] } = e;
  const _ = ok(Ht(p), {
    sort: _k({ disableMultiSort: !0 }),
    page: fk(),
    filter: bk({
      fn: ({ filterValue: V, value: Re }) => Re.includes(V)
    }),
    select: hk(),
    hide: ak()
  });
  let b = [
    _.column({
      header: (V, { pluginStates: Re }) => {
        const { allPageRowsSelected: tt } = Re.select;
        return ii(La, { checked: tt });
      },
      accessor: "#",
      cell: ({ row: V }, { pluginStates: Re }) => {
        const { getRowState: tt } = Re.select, { isSelected: mt } = tt(V);
        return ii(La, { checked: mt });
      },
      plugins: {
        sort: { disable: !0 },
        filter: { exclude: !0 }
      }
    })
  ];
  for (let V of g)
    b.push(_.column({
      header: V,
      accessor: V,
      plugins: {
        sort: { disable: !0 },
        filter: { exclude: !0 }
      }
    }));
  b.push(_.column({
    header: "",
    accessor: ({ id: V }) => V,
    cell: (V) => ii(rw, { id: V.value }),
    plugins: { sort: { disable: !0 } }
  }));
  const k = _.createColumns(b), { headerRows: I, pageRows: q, tableAttrs: P, tableBodyAttrs: D, flatColumns: Z, pluginStates: me, rows: fe } = _.createViewModel(k);
  Ge(t, I, (V) => n(4, o = V)), Ge(t, q, (V) => n(7, c = V)), Ge(t, P, (V) => n(3, i = V)), Ge(t, D, (V) => n(6, l = V)), Ge(t, fe, (V) => n(9, f = V));
  const { sortKeys: A } = me.sort;
  Ge(t, A, (V) => n(5, a = V));
  const { hiddenColumnIds: T } = me.hide;
  Ge(t, T, (V) => n(31, r = V));
  const M = Z.map((V) => V.id);
  let W = Object.fromEntries(M.map((V) => [V, !0]));
  const { hasNextPage: j, hasPreviousPage: G, pageIndex: ce } = me.page;
  Ge(t, j, (V) => n(12, m = V)), Ge(t, G, (V) => n(11, h = V)), Ge(t, ce, (V) => n(10, d = V));
  const { filterValue: ke } = me.filter;
  Ge(t, ke, (V) => n(2, s = V));
  const { selectedDataIds: we } = me.select;
  Ge(t, we, (V) => n(8, u = V));
  function et(V) {
    s = V, ke.set(s);
  }
  function qe(V, Re) {
    t.$$.not_equal(W[Re.id], V) && (W[Re.id] = V, n(1, W));
  }
  const rt = () => Ks(ce, d = d - 1, d), K = () => Ks(ce, d = d + 1, d);
  return t.$$set = (V) => {
    "heads" in V && n(0, g = V.heads), "data" in V && n(26, p = V.data);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*hideForId*/
    2 && Ks(T, r = Object.entries(W).filter(([, V]) => !V).map(([V]) => V), r);
  }, [
    g,
    W,
    s,
    i,
    o,
    a,
    l,
    c,
    u,
    f,
    d,
    h,
    m,
    I,
    q,
    P,
    D,
    Z,
    fe,
    A,
    T,
    j,
    G,
    ce,
    ke,
    we,
    p,
    et,
    qe,
    rt,
    K
  ];
}
class zw extends J {
  constructor(e) {
    super(), X(this, e, Bw, Fw, Y, { heads: 0, data: 26 }, null, [-1, -1]);
  }
}
const s2 = (t, e, n) => (t || (t = window.document.createElement("div")), new by({
  target: t,
  props: {
    heads: e,
    data: n
  }
})), i2 = (t, e, n) => (t || (t = window.document.createElement("div")), new zw({
  target: t,
  props: {
    heads: e,
    data: n
  }
}));
function $a(t, e, n) {
  const r = t.slice();
  return r[3] = e[n].title, r[4] = e[n].items, r[6] = n, r;
}
function Ya(t, e, n) {
  const r = t.slice();
  return r[3] = e[n].title, r[7] = e[n].icon, r[8] = e[n].url, r[10] = n, r;
}
function Zw(t) {
  let e, n, r = (
    /*title*/
    t[3] + ""
  ), s, i, o;
  return e = new Pc({
    props: {
      class: "mr-2 h-4 w-4",
      icon: (
        /*icon*/
        t[7]
      )
    }
  }), {
    c() {
      B(e.$$.fragment), n = oe(), s = Me(r), i = oe();
    },
    m(a, l) {
      L(e, a, l), C(a, n, l), C(a, s, l), C(a, i, l), o = !0;
    },
    p(a, l) {
      const c = {};
      l & /*menus*/
      2 && (c.icon = /*icon*/
      a[7]), e.$set(c), (!o || l & /*menus*/
      2) && r !== (r = /*title*/
      a[3] + "") && Qe(s, r);
    },
    i(a) {
      o || (v(e.$$.fragment, a), o = !0);
    },
    o(a) {
      y(e.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (w(n), w(s), w(i)), F(e, a);
    }
  };
}
function Xa(t) {
  let e, n;
  return e = new Qn({
    props: {
      variant: "secondary",
      class: "w-full justify-start",
      $$slots: { default: [Zw] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    $t(
      /*onClick*/
      t[2](
        /*url*/
        t[8]
      )
    ) && t[2](
      /*url*/
      t[8]
    ).apply(this, arguments);
  }), {
    c() {
      B(e.$$.fragment);
    },
    m(r, s) {
      L(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const i = {};
      s & /*$$scope, menus*/
      2050 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      F(e, r);
    }
  };
}
function Ja(t) {
  let e, n, r = (
    /*title*/
    t[3] + ""
  ), s, i, o, a, l, c = ze(
    /*items*/
    t[4]
  ), u = [];
  for (let d = 0; d < c.length; d += 1)
    u[d] = Xa(Ya(t, c, d));
  const f = (d) => y(u[d], 1, 1, () => {
    u[d] = null;
  });
  return {
    c() {
      e = O("div"), n = O("h2"), s = Me(r), i = oe(), o = O("div");
      for (let d = 0; d < u.length; d += 1)
        u[d].c();
      a = oe(), N(n, "class", "mb-2 px-4 text-lg font-semibold tracking-tight"), N(o, "class", "space-y-1"), N(e, "class", "px-3 py-2");
    },
    m(d, h) {
      C(d, e, h), R(e, n), R(n, s), R(e, i), R(e, o);
      for (let m = 0; m < u.length; m += 1)
        u[m] && u[m].m(o, null);
      R(e, a), l = !0;
    },
    p(d, h) {
      if ((!l || h & /*menus*/
      2) && r !== (r = /*title*/
      d[3] + "") && Qe(s, r), h & /*onClick, menus*/
      6) {
        c = ze(
          /*items*/
          d[4]
        );
        let m;
        for (m = 0; m < c.length; m += 1) {
          const g = Ya(d, c, m);
          u[m] ? (u[m].p(g, h), v(u[m], 1)) : (u[m] = Xa(g), u[m].c(), v(u[m], 1), u[m].m(o, null));
        }
        for (Oe(), m = c.length; m < u.length; m += 1)
          f(m);
        Ie();
      }
    },
    i(d) {
      if (!l) {
        for (let h = 0; h < c.length; h += 1)
          v(u[h]);
        l = !0;
      }
    },
    o(d) {
      u = u.filter(Boolean);
      for (let h = 0; h < u.length; h += 1)
        y(u[h]);
      l = !1;
    },
    d(d) {
      d && w(e), _t(u, d);
    }
  };
}
function Vw(t) {
  let e, n, r, s, i = ze(
    /*menus*/
    t[1]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = Ja($a(t, i, l));
  const a = (l) => y(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      e = O("div"), n = O("div");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      N(n, "class", "space-y-4 py-4"), N(e, "class", r = Pe(
        "pb-12",
        /*className*/
        t[0]
      ));
    },
    m(l, c) {
      C(l, e, c), R(e, n);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(n, null);
      s = !0;
    },
    p(l, [c]) {
      if (c & /*menus, onClick*/
      6) {
        i = ze(
          /*menus*/
          l[1]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const f = $a(l, i, u);
          o[u] ? (o[u].p(f, c), v(o[u], 1)) : (o[u] = Ja(f), o[u].c(), v(o[u], 1), o[u].m(n, null));
        }
        for (Oe(), u = i.length; u < o.length; u += 1)
          a(u);
        Ie();
      }
      (!s || c & /*className*/
      1 && r !== (r = Pe(
        "pb-12",
        /*className*/
        l[0]
      ))) && N(e, "class", r);
    },
    i(l) {
      if (!s) {
        for (let c = 0; c < i.length; c += 1)
          v(o[c]);
        s = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        y(o[c]);
      s = !1;
    },
    d(l) {
      l && w(e), _t(o, l);
    }
  };
}
function Ww(t, e, n) {
  let { class: r = void 0 } = e, { menus: s = [] } = e, { onClick: i = (o) => {
    console.log(o);
  } } = e;
  return t.$$set = (o) => {
    "class" in o && n(0, r = o.class), "menus" in o && n(1, s = o.menus), "onClick" in o && n(2, i = o.onClick);
  }, [r, s, i];
}
class o2 extends J {
  constructor(e) {
    super(), X(this, e, Ww, Vw, Y, { class: 0, menus: 1, onClick: 2 });
  }
}
export {
  Gw as Layout,
  i2 as RenderEditTable,
  s2 as RenderTable,
  o2 as Sidebar,
  Kw as Tmpl,
  n2 as confirm,
  Qw as form,
  t2 as notify,
  es as z
};
