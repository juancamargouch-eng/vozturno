
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Clinic
 * 
 */
export type Clinic = $Result.DefaultSelection<Prisma.$ClinicPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Turno
 * 
 */
export type Turno = $Result.DefaultSelection<Prisma.$TurnoPayload>
/**
 * Model CallHistory
 * 
 */
export type CallHistory = $Result.DefaultSelection<Prisma.$CallHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clinics
 * const clinics = await prisma.clinic.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.clinic`: Exposes CRUD operations for the **Clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.ClinicDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs>;

  /**
   * `prisma.turno`: Exposes CRUD operations for the **Turno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turno.findMany()
    * ```
    */
  get turno(): Prisma.TurnoDelegate<ExtArgs>;

  /**
   * `prisma.callHistory`: Exposes CRUD operations for the **CallHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallHistories
    * const callHistories = await prisma.callHistory.findMany()
    * ```
    */
  get callHistory(): Prisma.CallHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Clinic: 'Clinic',
    User: 'User',
    Patient: 'Patient',
    Area: 'Area',
    Turno: 'Turno',
    CallHistory: 'CallHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "clinic" | "user" | "patient" | "area" | "turno" | "callHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clinic: {
        payload: Prisma.$ClinicPayload<ExtArgs>
        fields: Prisma.ClinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findFirst: {
            args: Prisma.ClinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findMany: {
            args: Prisma.ClinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          create: {
            args: Prisma.ClinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          createMany: {
            args: Prisma.ClinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          delete: {
            args: Prisma.ClinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          update: {
            args: Prisma.ClinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          deleteMany: {
            args: Prisma.ClinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic>
          }
          groupBy: {
            args: Prisma.ClinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Turno: {
        payload: Prisma.$TurnoPayload<ExtArgs>
        fields: Prisma.TurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findFirst: {
            args: Prisma.TurnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findMany: {
            args: Prisma.TurnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          create: {
            args: Prisma.TurnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          createMany: {
            args: Prisma.TurnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          delete: {
            args: Prisma.TurnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          update: {
            args: Prisma.TurnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          deleteMany: {
            args: Prisma.TurnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          aggregate: {
            args: Prisma.TurnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurno>
          }
          groupBy: {
            args: Prisma.TurnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnoCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoCountAggregateOutputType> | number
          }
        }
      }
      CallHistory: {
        payload: Prisma.$CallHistoryPayload<ExtArgs>
        fields: Prisma.CallHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          findFirst: {
            args: Prisma.CallHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          findMany: {
            args: Prisma.CallHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          create: {
            args: Prisma.CallHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          createMany: {
            args: Prisma.CallHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          delete: {
            args: Prisma.CallHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          update: {
            args: Prisma.CallHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CallHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CallHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          aggregate: {
            args: Prisma.CallHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallHistory>
          }
          groupBy: {
            args: Prisma.CallHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CallHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    areas: number
    patients: number
    turnos: number
    users: number
  }

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | ClinicCountOutputTypeCountAreasArgs
    patients?: boolean | ClinicCountOutputTypeCountPatientsArgs
    turnos?: boolean | ClinicCountOutputTypeCountTurnosArgs
    users?: boolean | ClinicCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    areas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | UserCountOutputTypeCountAreasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    turnos: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | PatientCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    prevAreas: number
    users: number
    turnos: number
    history: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prevAreas?: boolean | AreaCountOutputTypeCountPrevAreasArgs
    users?: boolean | AreaCountOutputTypeCountUsersArgs
    turnos?: boolean | AreaCountOutputTypeCountTurnosArgs
    history?: boolean | AreaCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountPrevAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
  }


  /**
   * Count Type TurnoCountOutputType
   */

  export type TurnoCountOutputType = {
    calls: number
  }

  export type TurnoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calls?: boolean | TurnoCountOutputTypeCountCallsArgs
  }

  // Custom InputTypes
  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoCountOutputType
     */
    select?: TurnoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeCountCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    address: string | null
    phone: string | null
    active: boolean | null
    voiceConfig: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    address: string | null
    phone: string | null
    active: boolean | null
    voiceConfig: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    address: number
    phone: number
    active: number
    voiceConfig: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClinicMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    address?: true
    phone?: true
    active?: true
    voiceConfig?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    address?: true
    phone?: true
    active?: true
    voiceConfig?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    address?: true
    phone?: true
    active?: true
    voiceConfig?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinic to aggregate.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type ClinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicWhereInput
    orderBy?: ClinicOrderByWithAggregationInput | ClinicOrderByWithAggregationInput[]
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum
    having?: ClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }

  export type ClinicGroupByOutputType = {
    id: string
    name: string
    slug: string
    address: string | null
    phone: string | null
    active: boolean
    voiceConfig: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClinicCountAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    address?: boolean
    phone?: boolean
    active?: boolean
    voiceConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areas?: boolean | Clinic$areasArgs<ExtArgs>
    patients?: boolean | Clinic$patientsArgs<ExtArgs>
    turnos?: boolean | Clinic$turnosArgs<ExtArgs>
    users?: boolean | Clinic$usersArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    address?: boolean
    phone?: boolean
    active?: boolean
    voiceConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    address?: boolean
    phone?: boolean
    active?: boolean
    voiceConfig?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | Clinic$areasArgs<ExtArgs>
    patients?: boolean | Clinic$patientsArgs<ExtArgs>
    turnos?: boolean | Clinic$turnosArgs<ExtArgs>
    users?: boolean | Clinic$usersArgs<ExtArgs>
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinic"
    objects: {
      areas: Prisma.$AreaPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      address: string | null
      phone: string | null
      active: boolean
      voiceConfig: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["clinic"]>
    composites: {}
  }

  type ClinicGetPayload<S extends boolean | null | undefined | ClinicDefaultArgs> = $Result.GetResult<Prisma.$ClinicPayload, S>

  type ClinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClinicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface ClinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinic'], meta: { name: 'Clinic' } }
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {ClinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicFindUniqueArgs>(args: SelectSubset<T, ClinicFindUniqueArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clinic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicFindFirstArgs>(args?: SelectSubset<T, ClinicFindFirstArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicFindManyArgs>(args?: SelectSubset<T, ClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clinic.
     * @param {ClinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
     */
    create<T extends ClinicCreateArgs>(args: SelectSubset<T, ClinicCreateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clinics.
     * @param {ClinicCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicCreateManyArgs>(args?: SelectSubset<T, ClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinics and returns the data saved in the database.
     * @param {ClinicCreateManyAndReturnArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clinic.
     * @param {ClinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
     */
    delete<T extends ClinicDeleteArgs>(args: SelectSubset<T, ClinicDeleteArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clinic.
     * @param {ClinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicUpdateArgs>(args: SelectSubset<T, ClinicUpdateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicDeleteManyArgs>(args?: SelectSubset<T, ClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicUpdateManyArgs>(args: SelectSubset<T, ClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clinic.
     * @param {ClinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     */
    upsert<T extends ClinicUpsertArgs>(args: SelectSubset<T, ClinicUpsertArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicCountArgs>(
      args?: Subset<T, ClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicGroupByArgs['orderBy'] }
        : { orderBy?: ClinicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinic model
   */
  readonly fields: ClinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends Clinic$areasArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
    patients<T extends Clinic$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany"> | Null>
    turnos<T extends Clinic$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Clinic$usersArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clinic model
   */ 
  interface ClinicFieldRefs {
    readonly id: FieldRef<"Clinic", 'String'>
    readonly name: FieldRef<"Clinic", 'String'>
    readonly slug: FieldRef<"Clinic", 'String'>
    readonly address: FieldRef<"Clinic", 'String'>
    readonly phone: FieldRef<"Clinic", 'String'>
    readonly active: FieldRef<"Clinic", 'Boolean'>
    readonly voiceConfig: FieldRef<"Clinic", 'String'>
    readonly createdAt: FieldRef<"Clinic", 'DateTime'>
    readonly updatedAt: FieldRef<"Clinic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinic findUnique
   */
  export type ClinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findUniqueOrThrow
   */
  export type ClinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findFirst
   */
  export type ClinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findFirstOrThrow
   */
  export type ClinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findMany
   */
  export type ClinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic create
   */
  export type ClinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinic.
     */
    data: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
  }

  /**
   * Clinic createMany
   */
  export type ClinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic createManyAndReturn
   */
  export type ClinicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic update
   */
  export type ClinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinic.
     */
    data: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
    /**
     * Choose, which Clinic to update.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic updateMany
   */
  export type ClinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
  }

  /**
   * Clinic upsert
   */
  export type ClinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinic to update in case it exists.
     */
    where: ClinicWhereUniqueInput
    /**
     * In case the Clinic found by the `where` argument doesn't exist, create a new Clinic with this data.
     */
    create: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
    /**
     * In case the Clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
  }

  /**
   * Clinic delete
   */
  export type ClinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter which Clinic to delete.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic deleteMany
   */
  export type ClinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicWhereInput
  }

  /**
   * Clinic.areas
   */
  export type Clinic$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Clinic.patients
   */
  export type Clinic$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Clinic.turnos
   */
  export type Clinic$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Clinic.users
   */
  export type Clinic$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Clinic without action
   */
  export type ClinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    clinicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    clinicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    clinicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    clinicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: string
    clinicId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
    areas?: boolean | User$areasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clinicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
    areas?: boolean | User$areasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs> | null
      areas: Prisma.$AreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: string
      clinicId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends User$clinicArgs<ExtArgs> = {}>(args?: Subset<T, User$clinicArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    areas<T extends User$areasArgs<ExtArgs> = {}>(args?: Subset<T, User$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly clinicId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.clinic
   */
  export type User$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    where?: ClinicWhereInput
  }

  /**
   * User.areas
   */
  export type User$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    dni: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clinicId: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    dni: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clinicId: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    dni: number
    name: number
    createdAt: number
    updatedAt: number
    clinicId: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    dni?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    clinicId?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    dni?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    clinicId?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    dni?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    clinicId?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    dni: string
    name: string
    createdAt: Date
    updatedAt: Date
    clinicId: string
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinicId?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    turnos?: boolean | Patient$turnosArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dni?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinicId?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    dni?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinicId?: boolean
  }

  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    turnos?: boolean | Patient$turnosArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dni: string
      name: string
      createdAt: Date
      updatedAt: Date
      clinicId: string
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    turnos<T extends Patient$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Patient$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly dni: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly clinicId: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }

  /**
   * Patient.turnos
   */
  export type Patient$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    order: number | null
    capacity: number | null
  }

  export type AreaSumAggregateOutputType = {
    order: number | null
    capacity: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    capacity: number | null
    clinicId: string | null
    nextAreaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    capacity: number | null
    clinicId: string | null
    nextAreaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    order: number
    capacity: number
    clinicId: number
    nextAreaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    order?: true
    capacity?: true
  }

  export type AreaSumAggregateInputType = {
    order?: true
    capacity?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    capacity?: true
    clinicId?: true
    nextAreaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    capacity?: true
    clinicId?: true
    nextAreaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    capacity?: true
    clinicId?: true
    nextAreaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    name: string
    description: string | null
    order: number
    capacity: number
    clinicId: string
    nextAreaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    capacity?: boolean
    clinicId?: boolean
    nextAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    nextArea?: boolean | Area$nextAreaArgs<ExtArgs>
    prevAreas?: boolean | Area$prevAreasArgs<ExtArgs>
    users?: boolean | Area$usersArgs<ExtArgs>
    turnos?: boolean | Area$turnosArgs<ExtArgs>
    history?: boolean | Area$historyArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    capacity?: boolean
    clinicId?: boolean
    nextAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    nextArea?: boolean | Area$nextAreaArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    capacity?: boolean
    clinicId?: boolean
    nextAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    nextArea?: boolean | Area$nextAreaArgs<ExtArgs>
    prevAreas?: boolean | Area$prevAreasArgs<ExtArgs>
    users?: boolean | Area$usersArgs<ExtArgs>
    turnos?: boolean | Area$turnosArgs<ExtArgs>
    history?: boolean | Area$historyArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    nextArea?: boolean | Area$nextAreaArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      clinic: Prisma.$ClinicPayload<ExtArgs>
      nextArea: Prisma.$AreaPayload<ExtArgs> | null
      prevAreas: Prisma.$AreaPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
      history: Prisma.$CallHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      order: number
      capacity: number
      clinicId: string
      nextAreaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    nextArea<T extends Area$nextAreaArgs<ExtArgs> = {}>(args?: Subset<T, Area$nextAreaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    prevAreas<T extends Area$prevAreasArgs<ExtArgs> = {}>(args?: Subset<T, Area$prevAreasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Area$usersArgs<ExtArgs> = {}>(args?: Subset<T, Area$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    turnos<T extends Area$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Area$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany"> | Null>
    history<T extends Area$historyArgs<ExtArgs> = {}>(args?: Subset<T, Area$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */ 
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly description: FieldRef<"Area", 'String'>
    readonly order: FieldRef<"Area", 'Int'>
    readonly capacity: FieldRef<"Area", 'Int'>
    readonly clinicId: FieldRef<"Area", 'String'>
    readonly nextAreaId: FieldRef<"Area", 'String'>
    readonly createdAt: FieldRef<"Area", 'DateTime'>
    readonly updatedAt: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
  }

  /**
   * Area.nextArea
   */
  export type Area$nextAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Area.prevAreas
   */
  export type Area$prevAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area.users
   */
  export type Area$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Area.turnos
   */
  export type Area$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Area.history
   */
  export type Area$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    cursor?: CallHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Turno
   */

  export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  export type TurnoMinAggregateOutputType = {
    id: string | null
    number: string | null
    status: string | null
    priority: boolean | null
    patientId: string | null
    areaId: string | null
    clinicId: string | null
    calledBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoMaxAggregateOutputType = {
    id: string | null
    number: string | null
    status: string | null
    priority: boolean | null
    patientId: string | null
    areaId: string | null
    clinicId: string | null
    calledBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoCountAggregateOutputType = {
    id: number
    number: number
    status: number
    priority: number
    patientId: number
    areaId: number
    clinicId: number
    calledBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurnoMinAggregateInputType = {
    id?: true
    number?: true
    status?: true
    priority?: true
    patientId?: true
    areaId?: true
    clinicId?: true
    calledBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoMaxAggregateInputType = {
    id?: true
    number?: true
    status?: true
    priority?: true
    patientId?: true
    areaId?: true
    clinicId?: true
    calledBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoCountAggregateInputType = {
    id?: true
    number?: true
    status?: true
    priority?: true
    patientId?: true
    areaId?: true
    clinicId?: true
    calledBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turno to aggregate.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoMaxAggregateInputType
  }

  export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurno[P]>
      : GetScalarType<T[P], AggregateTurno[P]>
  }




  export type TurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithAggregationInput | TurnoOrderByWithAggregationInput[]
    by: TurnoScalarFieldEnum[] | TurnoScalarFieldEnum
    having?: TurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoCountAggregateInputType | true
    _min?: TurnoMinAggregateInputType
    _max?: TurnoMaxAggregateInputType
  }

  export type TurnoGroupByOutputType = {
    id: string
    number: string
    status: string
    priority: boolean
    patientId: string
    areaId: string
    clinicId: string
    calledBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TurnoCountAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoGroupByOutputType[P]>
        }
      >
    >


  export type TurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    status?: boolean
    priority?: boolean
    patientId?: boolean
    areaId?: boolean
    clinicId?: boolean
    calledBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    calls?: boolean | Turno$callsArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    status?: boolean
    priority?: boolean
    patientId?: boolean
    areaId?: boolean
    clinicId?: boolean
    calledBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectScalar = {
    id?: boolean
    number?: boolean
    status?: boolean
    priority?: boolean
    patientId?: boolean
    areaId?: boolean
    clinicId?: boolean
    calledBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
    calls?: boolean | Turno$callsArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    clinic?: boolean | ClinicDefaultArgs<ExtArgs>
  }

  export type $TurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turno"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      area: Prisma.$AreaPayload<ExtArgs>
      clinic: Prisma.$ClinicPayload<ExtArgs>
      calls: Prisma.$CallHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      status: string
      priority: boolean
      patientId: string
      areaId: string
      clinicId: string
      calledBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turno"]>
    composites: {}
  }

  type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = $Result.GetResult<Prisma.$TurnoPayload, S>

  type TurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurnoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TurnoCountAggregateInputType | true
    }

  export interface TurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turno'], meta: { name: 'Turno' } }
    /**
     * Find zero or one Turno that matches the filter.
     * @param {TurnoFindUniqueArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoFindUniqueArgs>(args: SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Turno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TurnoFindUniqueOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Turno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoFindFirstArgs>(args?: SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Turno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turno.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoWithIdOnly = await prisma.turno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoFindManyArgs>(args?: SelectSubset<T, TurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Turno.
     * @param {TurnoCreateArgs} args - Arguments to create a Turno.
     * @example
     * // Create one Turno
     * const Turno = await prisma.turno.create({
     *   data: {
     *     // ... data to create a Turno
     *   }
     * })
     * 
     */
    create<T extends TurnoCreateArgs>(args: SelectSubset<T, TurnoCreateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Turnos.
     * @param {TurnoCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoCreateManyArgs>(args?: SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnos and returns the data saved in the database.
     * @param {TurnoCreateManyAndReturnArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnos and only return the `id`
     * const turnoWithIdOnly = await prisma.turno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnoCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Turno.
     * @param {TurnoDeleteArgs} args - Arguments to delete one Turno.
     * @example
     * // Delete one Turno
     * const Turno = await prisma.turno.delete({
     *   where: {
     *     // ... filter to delete one Turno
     *   }
     * })
     * 
     */
    delete<T extends TurnoDeleteArgs>(args: SelectSubset<T, TurnoDeleteArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Turno.
     * @param {TurnoUpdateArgs} args - Arguments to update one Turno.
     * @example
     * // Update one Turno
     * const turno = await prisma.turno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoUpdateArgs>(args: SelectSubset<T, TurnoUpdateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Turnos.
     * @param {TurnoDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoDeleteManyArgs>(args?: SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoUpdateManyArgs>(args: SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turno.
     * @param {TurnoUpsertArgs} args - Arguments to update or create a Turno.
     * @example
     * // Update or create a Turno
     * const turno = await prisma.turno.upsert({
     *   create: {
     *     // ... data to create a Turno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turno we want to update
     *   }
     * })
     */
    upsert<T extends TurnoUpsertArgs>(args: SelectSubset<T, TurnoUpsertArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turno.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnoCountArgs>(
      args?: Subset<T, TurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoAggregateArgs>(args: Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>

    /**
     * Group by Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turno model
   */
  readonly fields: TurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    clinic<T extends ClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicDefaultArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    calls<T extends Turno$callsArgs<ExtArgs> = {}>(args?: Subset<T, Turno$callsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turno model
   */ 
  interface TurnoFieldRefs {
    readonly id: FieldRef<"Turno", 'String'>
    readonly number: FieldRef<"Turno", 'String'>
    readonly status: FieldRef<"Turno", 'String'>
    readonly priority: FieldRef<"Turno", 'Boolean'>
    readonly patientId: FieldRef<"Turno", 'String'>
    readonly areaId: FieldRef<"Turno", 'String'>
    readonly clinicId: FieldRef<"Turno", 'String'>
    readonly calledBy: FieldRef<"Turno", 'String'>
    readonly createdAt: FieldRef<"Turno", 'DateTime'>
    readonly updatedAt: FieldRef<"Turno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turno findUnique
   */
  export type TurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findUniqueOrThrow
   */
  export type TurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findFirst
   */
  export type TurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findFirstOrThrow
   */
  export type TurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findMany
   */
  export type TurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno create
   */
  export type TurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Turno.
     */
    data: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
  }

  /**
   * Turno createMany
   */
  export type TurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turno createManyAndReturn
   */
  export type TurnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turno update
   */
  export type TurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Turno.
     */
    data: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
    /**
     * Choose, which Turno to update.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno updateMany
   */
  export type TurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnoWhereInput
  }

  /**
   * Turno upsert
   */
  export type TurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Turno to update in case it exists.
     */
    where: TurnoWhereUniqueInput
    /**
     * In case the Turno found by the `where` argument doesn't exist, create a new Turno with this data.
     */
    create: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
    /**
     * In case the Turno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
  }

  /**
   * Turno delete
   */
  export type TurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter which Turno to delete.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno deleteMany
   */
  export type TurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnoWhereInput
  }

  /**
   * Turno.calls
   */
  export type Turno$callsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    cursor?: CallHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * Turno without action
   */
  export type TurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
  }


  /**
   * Model CallHistory
   */

  export type AggregateCallHistory = {
    _count: CallHistoryCountAggregateOutputType | null
    _min: CallHistoryMinAggregateOutputType | null
    _max: CallHistoryMaxAggregateOutputType | null
  }

  export type CallHistoryMinAggregateOutputType = {
    id: string | null
    turnoId: string | null
    areaId: string | null
    status: string | null
    timestamp: Date | null
  }

  export type CallHistoryMaxAggregateOutputType = {
    id: string | null
    turnoId: string | null
    areaId: string | null
    status: string | null
    timestamp: Date | null
  }

  export type CallHistoryCountAggregateOutputType = {
    id: number
    turnoId: number
    areaId: number
    status: number
    timestamp: number
    _all: number
  }


  export type CallHistoryMinAggregateInputType = {
    id?: true
    turnoId?: true
    areaId?: true
    status?: true
    timestamp?: true
  }

  export type CallHistoryMaxAggregateInputType = {
    id?: true
    turnoId?: true
    areaId?: true
    status?: true
    timestamp?: true
  }

  export type CallHistoryCountAggregateInputType = {
    id?: true
    turnoId?: true
    areaId?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type CallHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallHistory to aggregate.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallHistories
    **/
    _count?: true | CallHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallHistoryMaxAggregateInputType
  }

  export type GetCallHistoryAggregateType<T extends CallHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCallHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallHistory[P]>
      : GetScalarType<T[P], AggregateCallHistory[P]>
  }




  export type CallHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithAggregationInput | CallHistoryOrderByWithAggregationInput[]
    by: CallHistoryScalarFieldEnum[] | CallHistoryScalarFieldEnum
    having?: CallHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallHistoryCountAggregateInputType | true
    _min?: CallHistoryMinAggregateInputType
    _max?: CallHistoryMaxAggregateInputType
  }

  export type CallHistoryGroupByOutputType = {
    id: string
    turnoId: string
    areaId: string
    status: string
    timestamp: Date
    _count: CallHistoryCountAggregateOutputType | null
    _min: CallHistoryMinAggregateOutputType | null
    _max: CallHistoryMaxAggregateOutputType | null
  }

  type GetCallHistoryGroupByPayload<T extends CallHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CallHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CallHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    areaId?: boolean
    status?: boolean
    timestamp?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    areaId?: boolean
    status?: boolean
    timestamp?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectScalar = {
    id?: boolean
    turnoId?: boolean
    areaId?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type CallHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }
  export type CallHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
  }

  export type $CallHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallHistory"
    objects: {
      turno: Prisma.$TurnoPayload<ExtArgs>
      area: Prisma.$AreaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      turnoId: string
      areaId: string
      status: string
      timestamp: Date
    }, ExtArgs["result"]["callHistory"]>
    composites: {}
  }

  type CallHistoryGetPayload<S extends boolean | null | undefined | CallHistoryDefaultArgs> = $Result.GetResult<Prisma.$CallHistoryPayload, S>

  type CallHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CallHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CallHistoryCountAggregateInputType | true
    }

  export interface CallHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallHistory'], meta: { name: 'CallHistory' } }
    /**
     * Find zero or one CallHistory that matches the filter.
     * @param {CallHistoryFindUniqueArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallHistoryFindUniqueArgs>(args: SelectSubset<T, CallHistoryFindUniqueArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CallHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CallHistoryFindUniqueOrThrowArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CallHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CallHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindFirstArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallHistoryFindFirstArgs>(args?: SelectSubset<T, CallHistoryFindFirstArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CallHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindFirstOrThrowArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CallHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CallHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallHistories
     * const callHistories = await prisma.callHistory.findMany()
     * 
     * // Get first 10 CallHistories
     * const callHistories = await prisma.callHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallHistoryFindManyArgs>(args?: SelectSubset<T, CallHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CallHistory.
     * @param {CallHistoryCreateArgs} args - Arguments to create a CallHistory.
     * @example
     * // Create one CallHistory
     * const CallHistory = await prisma.callHistory.create({
     *   data: {
     *     // ... data to create a CallHistory
     *   }
     * })
     * 
     */
    create<T extends CallHistoryCreateArgs>(args: SelectSubset<T, CallHistoryCreateArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CallHistories.
     * @param {CallHistoryCreateManyArgs} args - Arguments to create many CallHistories.
     * @example
     * // Create many CallHistories
     * const callHistory = await prisma.callHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallHistoryCreateManyArgs>(args?: SelectSubset<T, CallHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallHistories and returns the data saved in the database.
     * @param {CallHistoryCreateManyAndReturnArgs} args - Arguments to create many CallHistories.
     * @example
     * // Create many CallHistories
     * const callHistory = await prisma.callHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallHistories and only return the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CallHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CallHistory.
     * @param {CallHistoryDeleteArgs} args - Arguments to delete one CallHistory.
     * @example
     * // Delete one CallHistory
     * const CallHistory = await prisma.callHistory.delete({
     *   where: {
     *     // ... filter to delete one CallHistory
     *   }
     * })
     * 
     */
    delete<T extends CallHistoryDeleteArgs>(args: SelectSubset<T, CallHistoryDeleteArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CallHistory.
     * @param {CallHistoryUpdateArgs} args - Arguments to update one CallHistory.
     * @example
     * // Update one CallHistory
     * const callHistory = await prisma.callHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallHistoryUpdateArgs>(args: SelectSubset<T, CallHistoryUpdateArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CallHistories.
     * @param {CallHistoryDeleteManyArgs} args - Arguments to filter CallHistories to delete.
     * @example
     * // Delete a few CallHistories
     * const { count } = await prisma.callHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallHistoryDeleteManyArgs>(args?: SelectSubset<T, CallHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallHistories
     * const callHistory = await prisma.callHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallHistoryUpdateManyArgs>(args: SelectSubset<T, CallHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CallHistory.
     * @param {CallHistoryUpsertArgs} args - Arguments to update or create a CallHistory.
     * @example
     * // Update or create a CallHistory
     * const callHistory = await prisma.callHistory.upsert({
     *   create: {
     *     // ... data to create a CallHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallHistory we want to update
     *   }
     * })
     */
    upsert<T extends CallHistoryUpsertArgs>(args: SelectSubset<T, CallHistoryUpsertArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CallHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryCountArgs} args - Arguments to filter CallHistories to count.
     * @example
     * // Count the number of CallHistories
     * const count = await prisma.callHistory.count({
     *   where: {
     *     // ... the filter for the CallHistories we want to count
     *   }
     * })
    **/
    count<T extends CallHistoryCountArgs>(
      args?: Subset<T, CallHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CallHistoryAggregateArgs>(args: Subset<T, CallHistoryAggregateArgs>): Prisma.PrismaPromise<GetCallHistoryAggregateType<T>>

    /**
     * Group by CallHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CallHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CallHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CallHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallHistory model
   */
  readonly fields: CallHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turno<T extends TurnoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurnoDefaultArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CallHistory model
   */ 
  interface CallHistoryFieldRefs {
    readonly id: FieldRef<"CallHistory", 'String'>
    readonly turnoId: FieldRef<"CallHistory", 'String'>
    readonly areaId: FieldRef<"CallHistory", 'String'>
    readonly status: FieldRef<"CallHistory", 'String'>
    readonly timestamp: FieldRef<"CallHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CallHistory findUnique
   */
  export type CallHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory findUniqueOrThrow
   */
  export type CallHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory findFirst
   */
  export type CallHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory findFirstOrThrow
   */
  export type CallHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory findMany
   */
  export type CallHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistories to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory create
   */
  export type CallHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CallHistory.
     */
    data: XOR<CallHistoryCreateInput, CallHistoryUncheckedCreateInput>
  }

  /**
   * CallHistory createMany
   */
  export type CallHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallHistories.
     */
    data: CallHistoryCreateManyInput | CallHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallHistory createManyAndReturn
   */
  export type CallHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CallHistories.
     */
    data: CallHistoryCreateManyInput | CallHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallHistory update
   */
  export type CallHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CallHistory.
     */
    data: XOR<CallHistoryUpdateInput, CallHistoryUncheckedUpdateInput>
    /**
     * Choose, which CallHistory to update.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory updateMany
   */
  export type CallHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallHistories.
     */
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CallHistories to update
     */
    where?: CallHistoryWhereInput
  }

  /**
   * CallHistory upsert
   */
  export type CallHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CallHistory to update in case it exists.
     */
    where: CallHistoryWhereUniqueInput
    /**
     * In case the CallHistory found by the `where` argument doesn't exist, create a new CallHistory with this data.
     */
    create: XOR<CallHistoryCreateInput, CallHistoryUncheckedCreateInput>
    /**
     * In case the CallHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallHistoryUpdateInput, CallHistoryUncheckedUpdateInput>
  }

  /**
   * CallHistory delete
   */
  export type CallHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter which CallHistory to delete.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory deleteMany
   */
  export type CallHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallHistories to delete
     */
    where?: CallHistoryWhereInput
  }

  /**
   * CallHistory without action
   */
  export type CallHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClinicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    address: 'address',
    phone: 'phone',
    active: 'active',
    voiceConfig: 'voiceConfig',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    clinicId: 'clinicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    dni: 'dni',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clinicId: 'clinicId'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    order: 'order',
    capacity: 'capacity',
    clinicId: 'clinicId',
    nextAreaId: 'nextAreaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const TurnoScalarFieldEnum: {
    id: 'id',
    number: 'number',
    status: 'status',
    priority: 'priority',
    patientId: 'patientId',
    areaId: 'areaId',
    clinicId: 'clinicId',
    calledBy: 'calledBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum]


  export const CallHistoryScalarFieldEnum: {
    id: 'id',
    turnoId: 'turnoId',
    areaId: 'areaId',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type CallHistoryScalarFieldEnum = (typeof CallHistoryScalarFieldEnum)[keyof typeof CallHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClinicWhereInput = {
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    id?: StringFilter<"Clinic"> | string
    name?: StringFilter<"Clinic"> | string
    slug?: StringFilter<"Clinic"> | string
    address?: StringNullableFilter<"Clinic"> | string | null
    phone?: StringNullableFilter<"Clinic"> | string | null
    active?: BoolFilter<"Clinic"> | boolean
    voiceConfig?: StringNullableFilter<"Clinic"> | string | null
    createdAt?: DateTimeFilter<"Clinic"> | Date | string
    updatedAt?: DateTimeFilter<"Clinic"> | Date | string
    areas?: AreaListRelationFilter
    patients?: PatientListRelationFilter
    turnos?: TurnoListRelationFilter
    users?: UserListRelationFilter
  }

  export type ClinicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    voiceConfig?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areas?: AreaOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    turnos?: TurnoOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    name?: StringFilter<"Clinic"> | string
    address?: StringNullableFilter<"Clinic"> | string | null
    phone?: StringNullableFilter<"Clinic"> | string | null
    active?: BoolFilter<"Clinic"> | boolean
    voiceConfig?: StringNullableFilter<"Clinic"> | string | null
    createdAt?: DateTimeFilter<"Clinic"> | Date | string
    updatedAt?: DateTimeFilter<"Clinic"> | Date | string
    areas?: AreaListRelationFilter
    patients?: PatientListRelationFilter
    turnos?: TurnoListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "slug">

  export type ClinicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    voiceConfig?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClinicCountOrderByAggregateInput
    _max?: ClinicMaxOrderByAggregateInput
    _min?: ClinicMinOrderByAggregateInput
  }

  export type ClinicScalarWhereWithAggregatesInput = {
    AND?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    OR?: ClinicScalarWhereWithAggregatesInput[]
    NOT?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clinic"> | string
    name?: StringWithAggregatesFilter<"Clinic"> | string
    slug?: StringWithAggregatesFilter<"Clinic"> | string
    address?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    active?: BoolWithAggregatesFilter<"Clinic"> | boolean
    voiceConfig?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    clinicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clinic?: XOR<ClinicNullableRelationFilter, ClinicWhereInput> | null
    areas?: AreaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    clinicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    areas?: AreaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    clinicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clinic?: XOR<ClinicNullableRelationFilter, ClinicWhereInput> | null
    areas?: AreaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    clinicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    clinicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    clinicId?: StringFilter<"Patient"> | string
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput>
    turnos?: TurnoListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    dni?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinicId?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    turnos?: TurnoOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dni_clinicId?: PatientDniClinicIdCompoundUniqueInput
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    dni?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    clinicId?: StringFilter<"Patient"> | string
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput>
    turnos?: TurnoListRelationFilter
  }, "id" | "dni_clinicId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    dni?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinicId?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    dni?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    clinicId?: StringWithAggregatesFilter<"Patient"> | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    order?: IntFilter<"Area"> | number
    capacity?: IntFilter<"Area"> | number
    clinicId?: StringFilter<"Area"> | string
    nextAreaId?: StringNullableFilter<"Area"> | string | null
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput>
    nextArea?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    prevAreas?: AreaListRelationFilter
    users?: UserListRelationFilter
    turnos?: TurnoListRelationFilter
    history?: CallHistoryListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    capacity?: SortOrder
    clinicId?: SortOrder
    nextAreaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinic?: ClinicOrderByWithRelationInput
    nextArea?: AreaOrderByWithRelationInput
    prevAreas?: AreaOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    turnos?: TurnoOrderByRelationAggregateInput
    history?: CallHistoryOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_clinicId?: AreaNameClinicIdCompoundUniqueInput
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    order?: IntFilter<"Area"> | number
    capacity?: IntFilter<"Area"> | number
    clinicId?: StringFilter<"Area"> | string
    nextAreaId?: StringNullableFilter<"Area"> | string | null
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput>
    nextArea?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    prevAreas?: AreaListRelationFilter
    users?: UserListRelationFilter
    turnos?: TurnoListRelationFilter
    history?: CallHistoryListRelationFilter
  }, "id" | "name_clinicId">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    capacity?: SortOrder
    clinicId?: SortOrder
    nextAreaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    description?: StringNullableWithAggregatesFilter<"Area"> | string | null
    order?: IntWithAggregatesFilter<"Area"> | number
    capacity?: IntWithAggregatesFilter<"Area"> | number
    clinicId?: StringWithAggregatesFilter<"Area"> | string
    nextAreaId?: StringNullableWithAggregatesFilter<"Area"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
  }

  export type TurnoWhereInput = {
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    id?: StringFilter<"Turno"> | string
    number?: StringFilter<"Turno"> | string
    status?: StringFilter<"Turno"> | string
    priority?: BoolFilter<"Turno"> | boolean
    patientId?: StringFilter<"Turno"> | string
    areaId?: StringFilter<"Turno"> | string
    clinicId?: StringFilter<"Turno"> | string
    calledBy?: StringNullableFilter<"Turno"> | string | null
    createdAt?: DateTimeFilter<"Turno"> | Date | string
    updatedAt?: DateTimeFilter<"Turno"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    area?: XOR<AreaRelationFilter, AreaWhereInput>
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput>
    calls?: CallHistoryListRelationFilter
  }

  export type TurnoOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    patientId?: SortOrder
    areaId?: SortOrder
    clinicId?: SortOrder
    calledBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    area?: AreaOrderByWithRelationInput
    clinic?: ClinicOrderByWithRelationInput
    calls?: CallHistoryOrderByRelationAggregateInput
  }

  export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    number?: StringFilter<"Turno"> | string
    status?: StringFilter<"Turno"> | string
    priority?: BoolFilter<"Turno"> | boolean
    patientId?: StringFilter<"Turno"> | string
    areaId?: StringFilter<"Turno"> | string
    clinicId?: StringFilter<"Turno"> | string
    calledBy?: StringNullableFilter<"Turno"> | string | null
    createdAt?: DateTimeFilter<"Turno"> | Date | string
    updatedAt?: DateTimeFilter<"Turno"> | Date | string
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    area?: XOR<AreaRelationFilter, AreaWhereInput>
    clinic?: XOR<ClinicRelationFilter, ClinicWhereInput>
    calls?: CallHistoryListRelationFilter
  }, "id">

  export type TurnoOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    patientId?: SortOrder
    areaId?: SortOrder
    clinicId?: SortOrder
    calledBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TurnoCountOrderByAggregateInput
    _max?: TurnoMaxOrderByAggregateInput
    _min?: TurnoMinOrderByAggregateInput
  }

  export type TurnoScalarWhereWithAggregatesInput = {
    AND?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    OR?: TurnoScalarWhereWithAggregatesInput[]
    NOT?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turno"> | string
    number?: StringWithAggregatesFilter<"Turno"> | string
    status?: StringWithAggregatesFilter<"Turno"> | string
    priority?: BoolWithAggregatesFilter<"Turno"> | boolean
    patientId?: StringWithAggregatesFilter<"Turno"> | string
    areaId?: StringWithAggregatesFilter<"Turno"> | string
    clinicId?: StringWithAggregatesFilter<"Turno"> | string
    calledBy?: StringNullableWithAggregatesFilter<"Turno"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Turno"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Turno"> | Date | string
  }

  export type CallHistoryWhereInput = {
    AND?: CallHistoryWhereInput | CallHistoryWhereInput[]
    OR?: CallHistoryWhereInput[]
    NOT?: CallHistoryWhereInput | CallHistoryWhereInput[]
    id?: StringFilter<"CallHistory"> | string
    turnoId?: StringFilter<"CallHistory"> | string
    areaId?: StringFilter<"CallHistory"> | string
    status?: StringFilter<"CallHistory"> | string
    timestamp?: DateTimeFilter<"CallHistory"> | Date | string
    turno?: XOR<TurnoRelationFilter, TurnoWhereInput>
    area?: XOR<AreaRelationFilter, AreaWhereInput>
  }

  export type CallHistoryOrderByWithRelationInput = {
    id?: SortOrder
    turnoId?: SortOrder
    areaId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    turno?: TurnoOrderByWithRelationInput
    area?: AreaOrderByWithRelationInput
  }

  export type CallHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CallHistoryWhereInput | CallHistoryWhereInput[]
    OR?: CallHistoryWhereInput[]
    NOT?: CallHistoryWhereInput | CallHistoryWhereInput[]
    turnoId?: StringFilter<"CallHistory"> | string
    areaId?: StringFilter<"CallHistory"> | string
    status?: StringFilter<"CallHistory"> | string
    timestamp?: DateTimeFilter<"CallHistory"> | Date | string
    turno?: XOR<TurnoRelationFilter, TurnoWhereInput>
    area?: XOR<AreaRelationFilter, AreaWhereInput>
  }, "id">

  export type CallHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    turnoId?: SortOrder
    areaId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    _count?: CallHistoryCountOrderByAggregateInput
    _max?: CallHistoryMaxOrderByAggregateInput
    _min?: CallHistoryMinOrderByAggregateInput
  }

  export type CallHistoryScalarWhereWithAggregatesInput = {
    AND?: CallHistoryScalarWhereWithAggregatesInput | CallHistoryScalarWhereWithAggregatesInput[]
    OR?: CallHistoryScalarWhereWithAggregatesInput[]
    NOT?: CallHistoryScalarWhereWithAggregatesInput | CallHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CallHistory"> | string
    turnoId?: StringWithAggregatesFilter<"CallHistory"> | string
    areaId?: StringWithAggregatesFilter<"CallHistory"> | string
    status?: StringWithAggregatesFilter<"CallHistory"> | string
    timestamp?: DateTimeWithAggregatesFilter<"CallHistory"> | Date | string
  }

  export type ClinicCreateInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    turnos?: TurnoCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type ClinicCreateManyInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic?: ClinicCreateNestedOneWithoutUsersInput
    areas?: AreaCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    clinicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
    areas?: AreaUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    clinicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutPatientsInput
    turnos?: TurnoCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicId: string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutPatientsNestedInput
    turnos?: TurnoUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicId?: StringFieldUpdateOperationsInput | string
    turnos?: TurnoUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicId: string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicId?: StringFieldUpdateOperationsInput | string
  }

  export type AreaCreateInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAreasInput
    nextArea?: AreaCreateNestedOneWithoutPrevAreasInput
    prevAreas?: AreaCreateNestedManyWithoutNextAreaInput
    users?: UserCreateNestedManyWithoutAreasInput
    turnos?: TurnoCreateNestedManyWithoutAreaInput
    history?: CallHistoryCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevAreas?: AreaUncheckedCreateNestedManyWithoutNextAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreasInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutAreaInput
    history?: CallHistoryUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAreasNestedInput
    nextArea?: AreaUpdateOneWithoutPrevAreasNestedInput
    prevAreas?: AreaUpdateManyWithoutNextAreaNestedInput
    users?: UserUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevAreas?: AreaUncheckedUpdateManyWithoutNextAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoCreateInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTurnosInput
    area: AreaCreateNestedOneWithoutTurnosInput
    clinic: ClinicCreateNestedOneWithoutTurnosInput
    calls?: CallHistoryCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    areaId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallHistoryUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTurnosNestedInput
    area?: AreaUpdateOneRequiredWithoutTurnosNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutTurnosNestedInput
    calls?: CallHistoryUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallHistoryUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoCreateManyInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    areaId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryCreateInput = {
    id?: string
    status: string
    timestamp?: Date | string
    turno: TurnoCreateNestedOneWithoutCallsInput
    area: AreaCreateNestedOneWithoutHistoryInput
  }

  export type CallHistoryUncheckedCreateInput = {
    id?: string
    turnoId: string
    areaId: string
    status: string
    timestamp?: Date | string
  }

  export type CallHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: TurnoUpdateOneRequiredWithoutCallsNestedInput
    area?: AreaUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type CallHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    turnoId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryCreateManyInput = {
    id?: string
    turnoId: string
    areaId: string
    status: string
    timestamp?: Date | string
  }

  export type CallHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    turnoId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type TurnoListRelationFilter = {
    every?: TurnoWhereInput
    some?: TurnoWhereInput
    none?: TurnoWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    voiceConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    voiceConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    voiceConfig?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClinicNullableRelationFilter = {
    is?: ClinicWhereInput | null
    isNot?: ClinicWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clinicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClinicRelationFilter = {
    is?: ClinicWhereInput
    isNot?: ClinicWhereInput
  }

  export type PatientDniClinicIdCompoundUniqueInput = {
    dni: string
    clinicId: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinicId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinicId?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    dni?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clinicId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AreaNullableRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type CallHistoryListRelationFilter = {
    every?: CallHistoryWhereInput
    some?: CallHistoryWhereInput
    none?: CallHistoryWhereInput
  }

  export type CallHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaNameClinicIdCompoundUniqueInput = {
    name: string
    clinicId: string
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    capacity?: SortOrder
    clinicId?: SortOrder
    nextAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    order?: SortOrder
    capacity?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    capacity?: SortOrder
    clinicId?: SortOrder
    nextAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    capacity?: SortOrder
    clinicId?: SortOrder
    nextAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    order?: SortOrder
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type AreaRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type TurnoCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    patientId?: SortOrder
    areaId?: SortOrder
    clinicId?: SortOrder
    calledBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    patientId?: SortOrder
    areaId?: SortOrder
    clinicId?: SortOrder
    calledBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    patientId?: SortOrder
    areaId?: SortOrder
    clinicId?: SortOrder
    calledBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoRelationFilter = {
    is?: TurnoWhereInput
    isNot?: TurnoWhereInput
  }

  export type CallHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    areaId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type CallHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    areaId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type CallHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    areaId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type AreaCreateNestedManyWithoutClinicInput = {
    create?: XOR<AreaCreateWithoutClinicInput, AreaUncheckedCreateWithoutClinicInput> | AreaCreateWithoutClinicInput[] | AreaUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutClinicInput | AreaCreateOrConnectWithoutClinicInput[]
    createMany?: AreaCreateManyClinicInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutClinicInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type TurnoCreateNestedManyWithoutClinicInput = {
    create?: XOR<TurnoCreateWithoutClinicInput, TurnoUncheckedCreateWithoutClinicInput> | TurnoCreateWithoutClinicInput[] | TurnoUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutClinicInput | TurnoCreateOrConnectWithoutClinicInput[]
    createMany?: TurnoCreateManyClinicInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<AreaCreateWithoutClinicInput, AreaUncheckedCreateWithoutClinicInput> | AreaCreateWithoutClinicInput[] | AreaUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutClinicInput | AreaCreateOrConnectWithoutClinicInput[]
    createMany?: AreaCreateManyClinicInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<TurnoCreateWithoutClinicInput, TurnoUncheckedCreateWithoutClinicInput> | TurnoCreateWithoutClinicInput[] | TurnoUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutClinicInput | TurnoCreateOrConnectWithoutClinicInput[]
    createMany?: TurnoCreateManyClinicInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AreaUpdateManyWithoutClinicNestedInput = {
    create?: XOR<AreaCreateWithoutClinicInput, AreaUncheckedCreateWithoutClinicInput> | AreaCreateWithoutClinicInput[] | AreaUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutClinicInput | AreaCreateOrConnectWithoutClinicInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutClinicInput | AreaUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: AreaCreateManyClinicInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutClinicInput | AreaUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutClinicInput | AreaUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutClinicInput | PatientUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutClinicInput | PatientUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutClinicInput | PatientUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type TurnoUpdateManyWithoutClinicNestedInput = {
    create?: XOR<TurnoCreateWithoutClinicInput, TurnoUncheckedCreateWithoutClinicInput> | TurnoCreateWithoutClinicInput[] | TurnoUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutClinicInput | TurnoCreateOrConnectWithoutClinicInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutClinicInput | TurnoUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: TurnoCreateManyClinicInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutClinicInput | TurnoUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutClinicInput | TurnoUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<AreaCreateWithoutClinicInput, AreaUncheckedCreateWithoutClinicInput> | AreaCreateWithoutClinicInput[] | AreaUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutClinicInput | AreaCreateOrConnectWithoutClinicInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutClinicInput | AreaUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: AreaCreateManyClinicInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutClinicInput | AreaUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutClinicInput | AreaUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput> | PatientCreateWithoutClinicInput[] | PatientUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput | PatientCreateOrConnectWithoutClinicInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutClinicInput | PatientUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: PatientCreateManyClinicInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutClinicInput | PatientUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutClinicInput | PatientUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<TurnoCreateWithoutClinicInput, TurnoUncheckedCreateWithoutClinicInput> | TurnoCreateWithoutClinicInput[] | TurnoUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutClinicInput | TurnoCreateOrConnectWithoutClinicInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutClinicInput | TurnoUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: TurnoCreateManyClinicInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutClinicInput | TurnoUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutClinicInput | TurnoUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutUsersInput
    connect?: ClinicWhereUniqueInput
  }

  export type AreaCreateNestedManyWithoutUsersInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput> | AreaCreateWithoutUsersInput[] | AreaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput | AreaCreateOrConnectWithoutUsersInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput> | AreaCreateWithoutUsersInput[] | AreaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput | AreaCreateOrConnectWithoutUsersInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type ClinicUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutUsersInput
    upsert?: ClinicUpsertWithoutUsersInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutUsersInput, ClinicUpdateWithoutUsersInput>, ClinicUncheckedUpdateWithoutUsersInput>
  }

  export type AreaUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput> | AreaCreateWithoutUsersInput[] | AreaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput | AreaCreateOrConnectWithoutUsersInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutUsersInput | AreaUpsertWithWhereUniqueWithoutUsersInput[]
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutUsersInput | AreaUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutUsersInput | AreaUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput> | AreaCreateWithoutUsersInput[] | AreaUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput | AreaCreateOrConnectWithoutUsersInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutUsersInput | AreaUpsertWithWhereUniqueWithoutUsersInput[]
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutUsersInput | AreaUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutUsersInput | AreaUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutPatientsInput = {
    create?: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientsInput
    connect?: ClinicWhereUniqueInput
  }

  export type TurnoCreateNestedManyWithoutPatientInput = {
    create?: XOR<TurnoCreateWithoutPatientInput, TurnoUncheckedCreateWithoutPatientInput> | TurnoCreateWithoutPatientInput[] | TurnoUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPatientInput | TurnoCreateOrConnectWithoutPatientInput[]
    createMany?: TurnoCreateManyPatientInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<TurnoCreateWithoutPatientInput, TurnoUncheckedCreateWithoutPatientInput> | TurnoCreateWithoutPatientInput[] | TurnoUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPatientInput | TurnoCreateOrConnectWithoutPatientInput[]
    createMany?: TurnoCreateManyPatientInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type ClinicUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientsInput
    upsert?: ClinicUpsertWithoutPatientsInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutPatientsInput, ClinicUpdateWithoutPatientsInput>, ClinicUncheckedUpdateWithoutPatientsInput>
  }

  export type TurnoUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TurnoCreateWithoutPatientInput, TurnoUncheckedCreateWithoutPatientInput> | TurnoCreateWithoutPatientInput[] | TurnoUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPatientInput | TurnoCreateOrConnectWithoutPatientInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutPatientInput | TurnoUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TurnoCreateManyPatientInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutPatientInput | TurnoUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutPatientInput | TurnoUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TurnoCreateWithoutPatientInput, TurnoUncheckedCreateWithoutPatientInput> | TurnoCreateWithoutPatientInput[] | TurnoUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPatientInput | TurnoCreateOrConnectWithoutPatientInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutPatientInput | TurnoUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TurnoCreateManyPatientInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutPatientInput | TurnoUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutPatientInput | TurnoUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type ClinicCreateNestedOneWithoutAreasInput = {
    create?: XOR<ClinicCreateWithoutAreasInput, ClinicUncheckedCreateWithoutAreasInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutAreasInput
    connect?: ClinicWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutPrevAreasInput = {
    create?: XOR<AreaCreateWithoutPrevAreasInput, AreaUncheckedCreateWithoutPrevAreasInput>
    connectOrCreate?: AreaCreateOrConnectWithoutPrevAreasInput
    connect?: AreaWhereUniqueInput
  }

  export type AreaCreateNestedManyWithoutNextAreaInput = {
    create?: XOR<AreaCreateWithoutNextAreaInput, AreaUncheckedCreateWithoutNextAreaInput> | AreaCreateWithoutNextAreaInput[] | AreaUncheckedCreateWithoutNextAreaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutNextAreaInput | AreaCreateOrConnectWithoutNextAreaInput[]
    createMany?: AreaCreateManyNextAreaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutAreasInput = {
    create?: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput> | UserCreateWithoutAreasInput[] | UserUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreasInput | UserCreateOrConnectWithoutAreasInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TurnoCreateNestedManyWithoutAreaInput = {
    create?: XOR<TurnoCreateWithoutAreaInput, TurnoUncheckedCreateWithoutAreaInput> | TurnoCreateWithoutAreaInput[] | TurnoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutAreaInput | TurnoCreateOrConnectWithoutAreaInput[]
    createMany?: TurnoCreateManyAreaInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type CallHistoryCreateNestedManyWithoutAreaInput = {
    create?: XOR<CallHistoryCreateWithoutAreaInput, CallHistoryUncheckedCreateWithoutAreaInput> | CallHistoryCreateWithoutAreaInput[] | CallHistoryUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutAreaInput | CallHistoryCreateOrConnectWithoutAreaInput[]
    createMany?: CallHistoryCreateManyAreaInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutNextAreaInput = {
    create?: XOR<AreaCreateWithoutNextAreaInput, AreaUncheckedCreateWithoutNextAreaInput> | AreaCreateWithoutNextAreaInput[] | AreaUncheckedCreateWithoutNextAreaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutNextAreaInput | AreaCreateOrConnectWithoutNextAreaInput[]
    createMany?: AreaCreateManyNextAreaInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAreasInput = {
    create?: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput> | UserCreateWithoutAreasInput[] | UserUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreasInput | UserCreateOrConnectWithoutAreasInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<TurnoCreateWithoutAreaInput, TurnoUncheckedCreateWithoutAreaInput> | TurnoCreateWithoutAreaInput[] | TurnoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutAreaInput | TurnoCreateOrConnectWithoutAreaInput[]
    createMany?: TurnoCreateManyAreaInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type CallHistoryUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<CallHistoryCreateWithoutAreaInput, CallHistoryUncheckedCreateWithoutAreaInput> | CallHistoryCreateWithoutAreaInput[] | CallHistoryUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutAreaInput | CallHistoryCreateOrConnectWithoutAreaInput[]
    createMany?: CallHistoryCreateManyAreaInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClinicUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<ClinicCreateWithoutAreasInput, ClinicUncheckedCreateWithoutAreasInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutAreasInput
    upsert?: ClinicUpsertWithoutAreasInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutAreasInput, ClinicUpdateWithoutAreasInput>, ClinicUncheckedUpdateWithoutAreasInput>
  }

  export type AreaUpdateOneWithoutPrevAreasNestedInput = {
    create?: XOR<AreaCreateWithoutPrevAreasInput, AreaUncheckedCreateWithoutPrevAreasInput>
    connectOrCreate?: AreaCreateOrConnectWithoutPrevAreasInput
    upsert?: AreaUpsertWithoutPrevAreasInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutPrevAreasInput, AreaUpdateWithoutPrevAreasInput>, AreaUncheckedUpdateWithoutPrevAreasInput>
  }

  export type AreaUpdateManyWithoutNextAreaNestedInput = {
    create?: XOR<AreaCreateWithoutNextAreaInput, AreaUncheckedCreateWithoutNextAreaInput> | AreaCreateWithoutNextAreaInput[] | AreaUncheckedCreateWithoutNextAreaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutNextAreaInput | AreaCreateOrConnectWithoutNextAreaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutNextAreaInput | AreaUpsertWithWhereUniqueWithoutNextAreaInput[]
    createMany?: AreaCreateManyNextAreaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutNextAreaInput | AreaUpdateWithWhereUniqueWithoutNextAreaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutNextAreaInput | AreaUpdateManyWithWhereWithoutNextAreaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type UserUpdateManyWithoutAreasNestedInput = {
    create?: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput> | UserCreateWithoutAreasInput[] | UserUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreasInput | UserCreateOrConnectWithoutAreasInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAreasInput | UserUpsertWithWhereUniqueWithoutAreasInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAreasInput | UserUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAreasInput | UserUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TurnoUpdateManyWithoutAreaNestedInput = {
    create?: XOR<TurnoCreateWithoutAreaInput, TurnoUncheckedCreateWithoutAreaInput> | TurnoCreateWithoutAreaInput[] | TurnoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutAreaInput | TurnoCreateOrConnectWithoutAreaInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutAreaInput | TurnoUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: TurnoCreateManyAreaInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutAreaInput | TurnoUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutAreaInput | TurnoUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type CallHistoryUpdateManyWithoutAreaNestedInput = {
    create?: XOR<CallHistoryCreateWithoutAreaInput, CallHistoryUncheckedCreateWithoutAreaInput> | CallHistoryCreateWithoutAreaInput[] | CallHistoryUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutAreaInput | CallHistoryCreateOrConnectWithoutAreaInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutAreaInput | CallHistoryUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: CallHistoryCreateManyAreaInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutAreaInput | CallHistoryUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutAreaInput | CallHistoryUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutNextAreaNestedInput = {
    create?: XOR<AreaCreateWithoutNextAreaInput, AreaUncheckedCreateWithoutNextAreaInput> | AreaCreateWithoutNextAreaInput[] | AreaUncheckedCreateWithoutNextAreaInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutNextAreaInput | AreaCreateOrConnectWithoutNextAreaInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutNextAreaInput | AreaUpsertWithWhereUniqueWithoutNextAreaInput[]
    createMany?: AreaCreateManyNextAreaInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutNextAreaInput | AreaUpdateWithWhereUniqueWithoutNextAreaInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutNextAreaInput | AreaUpdateManyWithWhereWithoutNextAreaInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAreasNestedInput = {
    create?: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput> | UserCreateWithoutAreasInput[] | UserUncheckedCreateWithoutAreasInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreasInput | UserCreateOrConnectWithoutAreasInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAreasInput | UserUpsertWithWhereUniqueWithoutAreasInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAreasInput | UserUpdateWithWhereUniqueWithoutAreasInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAreasInput | UserUpdateManyWithWhereWithoutAreasInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<TurnoCreateWithoutAreaInput, TurnoUncheckedCreateWithoutAreaInput> | TurnoCreateWithoutAreaInput[] | TurnoUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutAreaInput | TurnoCreateOrConnectWithoutAreaInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutAreaInput | TurnoUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: TurnoCreateManyAreaInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutAreaInput | TurnoUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutAreaInput | TurnoUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type CallHistoryUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<CallHistoryCreateWithoutAreaInput, CallHistoryUncheckedCreateWithoutAreaInput> | CallHistoryCreateWithoutAreaInput[] | CallHistoryUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutAreaInput | CallHistoryCreateOrConnectWithoutAreaInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutAreaInput | CallHistoryUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: CallHistoryCreateManyAreaInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutAreaInput | CallHistoryUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutAreaInput | CallHistoryUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutTurnosInput = {
    create?: XOR<PatientCreateWithoutTurnosInput, PatientUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTurnosInput
    connect?: PatientWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutTurnosInput = {
    create?: XOR<AreaCreateWithoutTurnosInput, AreaUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutTurnosInput
    connect?: AreaWhereUniqueInput
  }

  export type ClinicCreateNestedOneWithoutTurnosInput = {
    create?: XOR<ClinicCreateWithoutTurnosInput, ClinicUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutTurnosInput
    connect?: ClinicWhereUniqueInput
  }

  export type CallHistoryCreateNestedManyWithoutTurnoInput = {
    create?: XOR<CallHistoryCreateWithoutTurnoInput, CallHistoryUncheckedCreateWithoutTurnoInput> | CallHistoryCreateWithoutTurnoInput[] | CallHistoryUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutTurnoInput | CallHistoryCreateOrConnectWithoutTurnoInput[]
    createMany?: CallHistoryCreateManyTurnoInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type CallHistoryUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: XOR<CallHistoryCreateWithoutTurnoInput, CallHistoryUncheckedCreateWithoutTurnoInput> | CallHistoryCreateWithoutTurnoInput[] | CallHistoryUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutTurnoInput | CallHistoryCreateOrConnectWithoutTurnoInput[]
    createMany?: CallHistoryCreateManyTurnoInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<PatientCreateWithoutTurnosInput, PatientUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTurnosInput
    upsert?: PatientUpsertWithoutTurnosInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutTurnosInput, PatientUpdateWithoutTurnosInput>, PatientUncheckedUpdateWithoutTurnosInput>
  }

  export type AreaUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<AreaCreateWithoutTurnosInput, AreaUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AreaCreateOrConnectWithoutTurnosInput
    upsert?: AreaUpsertWithoutTurnosInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutTurnosInput, AreaUpdateWithoutTurnosInput>, AreaUncheckedUpdateWithoutTurnosInput>
  }

  export type ClinicUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<ClinicCreateWithoutTurnosInput, ClinicUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutTurnosInput
    upsert?: ClinicUpsertWithoutTurnosInput
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutTurnosInput, ClinicUpdateWithoutTurnosInput>, ClinicUncheckedUpdateWithoutTurnosInput>
  }

  export type CallHistoryUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<CallHistoryCreateWithoutTurnoInput, CallHistoryUncheckedCreateWithoutTurnoInput> | CallHistoryCreateWithoutTurnoInput[] | CallHistoryUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutTurnoInput | CallHistoryCreateOrConnectWithoutTurnoInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutTurnoInput | CallHistoryUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: CallHistoryCreateManyTurnoInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutTurnoInput | CallHistoryUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutTurnoInput | CallHistoryUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type CallHistoryUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<CallHistoryCreateWithoutTurnoInput, CallHistoryUncheckedCreateWithoutTurnoInput> | CallHistoryCreateWithoutTurnoInput[] | CallHistoryUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutTurnoInput | CallHistoryCreateOrConnectWithoutTurnoInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutTurnoInput | CallHistoryUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: CallHistoryCreateManyTurnoInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutTurnoInput | CallHistoryUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutTurnoInput | CallHistoryUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type TurnoCreateNestedOneWithoutCallsInput = {
    create?: XOR<TurnoCreateWithoutCallsInput, TurnoUncheckedCreateWithoutCallsInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutCallsInput
    connect?: TurnoWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutHistoryInput = {
    create?: XOR<AreaCreateWithoutHistoryInput, AreaUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AreaCreateOrConnectWithoutHistoryInput
    connect?: AreaWhereUniqueInput
  }

  export type TurnoUpdateOneRequiredWithoutCallsNestedInput = {
    create?: XOR<TurnoCreateWithoutCallsInput, TurnoUncheckedCreateWithoutCallsInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutCallsInput
    upsert?: TurnoUpsertWithoutCallsInput
    connect?: TurnoWhereUniqueInput
    update?: XOR<XOR<TurnoUpdateToOneWithWhereWithoutCallsInput, TurnoUpdateWithoutCallsInput>, TurnoUncheckedUpdateWithoutCallsInput>
  }

  export type AreaUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<AreaCreateWithoutHistoryInput, AreaUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: AreaCreateOrConnectWithoutHistoryInput
    upsert?: AreaUpsertWithoutHistoryInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutHistoryInput, AreaUpdateWithoutHistoryInput>, AreaUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AreaCreateWithoutClinicInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    nextArea?: AreaCreateNestedOneWithoutPrevAreasInput
    prevAreas?: AreaCreateNestedManyWithoutNextAreaInput
    users?: UserCreateNestedManyWithoutAreasInput
    turnos?: TurnoCreateNestedManyWithoutAreaInput
    history?: CallHistoryCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutClinicInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevAreas?: AreaUncheckedCreateNestedManyWithoutNextAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreasInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutAreaInput
    history?: CallHistoryUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutClinicInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutClinicInput, AreaUncheckedCreateWithoutClinicInput>
  }

  export type AreaCreateManyClinicInputEnvelope = {
    data: AreaCreateManyClinicInput | AreaCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutClinicInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    turnos?: TurnoCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutClinicInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutClinicInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
  }

  export type PatientCreateManyClinicInputEnvelope = {
    data: PatientCreateManyClinicInput | PatientCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type TurnoCreateWithoutClinicInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTurnosInput
    area: AreaCreateNestedOneWithoutTurnosInput
    calls?: CallHistoryCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutClinicInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    areaId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallHistoryUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutClinicInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutClinicInput, TurnoUncheckedCreateWithoutClinicInput>
  }

  export type TurnoCreateManyClinicInputEnvelope = {
    data: TurnoCreateManyClinicInput | TurnoCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClinicInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutClinicInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutClinicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserCreateManyClinicInputEnvelope = {
    data: UserCreateManyClinicInput | UserCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithWhereUniqueWithoutClinicInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutClinicInput, AreaUncheckedUpdateWithoutClinicInput>
    create: XOR<AreaCreateWithoutClinicInput, AreaUncheckedCreateWithoutClinicInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutClinicInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutClinicInput, AreaUncheckedUpdateWithoutClinicInput>
  }

  export type AreaUpdateManyWithWhereWithoutClinicInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutClinicInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    order?: IntFilter<"Area"> | number
    capacity?: IntFilter<"Area"> | number
    clinicId?: StringFilter<"Area"> | string
    nextAreaId?: StringNullableFilter<"Area"> | string | null
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutClinicInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutClinicInput, PatientUncheckedUpdateWithoutClinicInput>
    create: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutClinicInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutClinicInput, PatientUncheckedUpdateWithoutClinicInput>
  }

  export type PatientUpdateManyWithWhereWithoutClinicInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutClinicInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    clinicId?: StringFilter<"Patient"> | string
  }

  export type TurnoUpsertWithWhereUniqueWithoutClinicInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutClinicInput, TurnoUncheckedUpdateWithoutClinicInput>
    create: XOR<TurnoCreateWithoutClinicInput, TurnoUncheckedCreateWithoutClinicInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutClinicInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutClinicInput, TurnoUncheckedUpdateWithoutClinicInput>
  }

  export type TurnoUpdateManyWithWhereWithoutClinicInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutClinicInput>
  }

  export type TurnoScalarWhereInput = {
    AND?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    OR?: TurnoScalarWhereInput[]
    NOT?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    id?: StringFilter<"Turno"> | string
    number?: StringFilter<"Turno"> | string
    status?: StringFilter<"Turno"> | string
    priority?: BoolFilter<"Turno"> | boolean
    patientId?: StringFilter<"Turno"> | string
    areaId?: StringFilter<"Turno"> | string
    clinicId?: StringFilter<"Turno"> | string
    calledBy?: StringNullableFilter<"Turno"> | string | null
    createdAt?: DateTimeFilter<"Turno"> | Date | string
    updatedAt?: DateTimeFilter<"Turno"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
  }

  export type UserUpdateManyWithWhereWithoutClinicInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClinicInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    clinicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ClinicCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    turnos?: TurnoCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutUsersInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
  }

  export type AreaCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAreasInput
    nextArea?: AreaCreateNestedOneWithoutPrevAreasInput
    prevAreas?: AreaCreateNestedManyWithoutNextAreaInput
    turnos?: TurnoCreateNestedManyWithoutAreaInput
    history?: CallHistoryCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevAreas?: AreaUncheckedCreateNestedManyWithoutNextAreaInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutAreaInput
    history?: CallHistoryUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutUsersInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
  }

  export type ClinicUpsertWithoutUsersInput = {
    update: XOR<ClinicUpdateWithoutUsersInput, ClinicUncheckedUpdateWithoutUsersInput>
    create: XOR<ClinicCreateWithoutUsersInput, ClinicUncheckedCreateWithoutUsersInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutUsersInput, ClinicUncheckedUpdateWithoutUsersInput>
  }

  export type ClinicUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type AreaUpsertWithWhereUniqueWithoutUsersInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutUsersInput, AreaUncheckedUpdateWithoutUsersInput>
    create: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutUsersInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutUsersInput, AreaUncheckedUpdateWithoutUsersInput>
  }

  export type AreaUpdateManyWithWhereWithoutUsersInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutUsersInput>
  }

  export type ClinicCreateWithoutPatientsInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaCreateNestedManyWithoutClinicInput
    turnos?: TurnoCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaUncheckedCreateNestedManyWithoutClinicInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutPatientsInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
  }

  export type TurnoCreateWithoutPatientInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area: AreaCreateNestedOneWithoutTurnosInput
    clinic: ClinicCreateNestedOneWithoutTurnosInput
    calls?: CallHistoryCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutPatientInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    areaId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallHistoryUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutPatientInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutPatientInput, TurnoUncheckedCreateWithoutPatientInput>
  }

  export type TurnoCreateManyPatientInputEnvelope = {
    data: TurnoCreateManyPatientInput | TurnoCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ClinicUpsertWithoutPatientsInput = {
    update: XOR<ClinicUpdateWithoutPatientsInput, ClinicUncheckedUpdateWithoutPatientsInput>
    create: XOR<ClinicCreateWithoutPatientsInput, ClinicUncheckedCreateWithoutPatientsInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutPatientsInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutPatientsInput, ClinicUncheckedUpdateWithoutPatientsInput>
  }

  export type ClinicUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUncheckedUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type TurnoUpsertWithWhereUniqueWithoutPatientInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutPatientInput, TurnoUncheckedUpdateWithoutPatientInput>
    create: XOR<TurnoCreateWithoutPatientInput, TurnoUncheckedCreateWithoutPatientInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutPatientInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutPatientInput, TurnoUncheckedUpdateWithoutPatientInput>
  }

  export type TurnoUpdateManyWithWhereWithoutPatientInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutPatientInput>
  }

  export type ClinicCreateWithoutAreasInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutClinicInput
    turnos?: TurnoCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutAreasInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutAreasInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutAreasInput, ClinicUncheckedCreateWithoutAreasInput>
  }

  export type AreaCreateWithoutPrevAreasInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAreasInput
    nextArea?: AreaCreateNestedOneWithoutPrevAreasInput
    users?: UserCreateNestedManyWithoutAreasInput
    turnos?: TurnoCreateNestedManyWithoutAreaInput
    history?: CallHistoryCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutPrevAreasInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAreasInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutAreaInput
    history?: CallHistoryUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutPrevAreasInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutPrevAreasInput, AreaUncheckedCreateWithoutPrevAreasInput>
  }

  export type AreaCreateWithoutNextAreaInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAreasInput
    prevAreas?: AreaCreateNestedManyWithoutNextAreaInput
    users?: UserCreateNestedManyWithoutAreasInput
    turnos?: TurnoCreateNestedManyWithoutAreaInput
    history?: CallHistoryCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutNextAreaInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    prevAreas?: AreaUncheckedCreateNestedManyWithoutNextAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreasInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutAreaInput
    history?: CallHistoryUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutNextAreaInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutNextAreaInput, AreaUncheckedCreateWithoutNextAreaInput>
  }

  export type AreaCreateManyNextAreaInputEnvelope = {
    data: AreaCreateManyNextAreaInput | AreaCreateManyNextAreaInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAreasInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic?: ClinicCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAreasInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    clinicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAreasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput>
  }

  export type TurnoCreateWithoutAreaInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTurnosInput
    clinic: ClinicCreateNestedOneWithoutTurnosInput
    calls?: CallHistoryCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutAreaInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calls?: CallHistoryUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutAreaInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutAreaInput, TurnoUncheckedCreateWithoutAreaInput>
  }

  export type TurnoCreateManyAreaInputEnvelope = {
    data: TurnoCreateManyAreaInput | TurnoCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type CallHistoryCreateWithoutAreaInput = {
    id?: string
    status: string
    timestamp?: Date | string
    turno: TurnoCreateNestedOneWithoutCallsInput
  }

  export type CallHistoryUncheckedCreateWithoutAreaInput = {
    id?: string
    turnoId: string
    status: string
    timestamp?: Date | string
  }

  export type CallHistoryCreateOrConnectWithoutAreaInput = {
    where: CallHistoryWhereUniqueInput
    create: XOR<CallHistoryCreateWithoutAreaInput, CallHistoryUncheckedCreateWithoutAreaInput>
  }

  export type CallHistoryCreateManyAreaInputEnvelope = {
    data: CallHistoryCreateManyAreaInput | CallHistoryCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type ClinicUpsertWithoutAreasInput = {
    update: XOR<ClinicUpdateWithoutAreasInput, ClinicUncheckedUpdateWithoutAreasInput>
    create: XOR<ClinicCreateWithoutAreasInput, ClinicUncheckedCreateWithoutAreasInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutAreasInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutAreasInput, ClinicUncheckedUpdateWithoutAreasInput>
  }

  export type ClinicUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type AreaUpsertWithoutPrevAreasInput = {
    update: XOR<AreaUpdateWithoutPrevAreasInput, AreaUncheckedUpdateWithoutPrevAreasInput>
    create: XOR<AreaCreateWithoutPrevAreasInput, AreaUncheckedCreateWithoutPrevAreasInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutPrevAreasInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutPrevAreasInput, AreaUncheckedUpdateWithoutPrevAreasInput>
  }

  export type AreaUpdateWithoutPrevAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAreasNestedInput
    nextArea?: AreaUpdateOneWithoutPrevAreasNestedInput
    users?: UserUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutPrevAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUpsertWithWhereUniqueWithoutNextAreaInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutNextAreaInput, AreaUncheckedUpdateWithoutNextAreaInput>
    create: XOR<AreaCreateWithoutNextAreaInput, AreaUncheckedCreateWithoutNextAreaInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutNextAreaInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutNextAreaInput, AreaUncheckedUpdateWithoutNextAreaInput>
  }

  export type AreaUpdateManyWithWhereWithoutNextAreaInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutNextAreaInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAreasInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAreasInput, UserUncheckedUpdateWithoutAreasInput>
    create: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAreasInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAreasInput, UserUncheckedUpdateWithoutAreasInput>
  }

  export type UserUpdateManyWithWhereWithoutAreasInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAreasInput>
  }

  export type TurnoUpsertWithWhereUniqueWithoutAreaInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutAreaInput, TurnoUncheckedUpdateWithoutAreaInput>
    create: XOR<TurnoCreateWithoutAreaInput, TurnoUncheckedCreateWithoutAreaInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutAreaInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutAreaInput, TurnoUncheckedUpdateWithoutAreaInput>
  }

  export type TurnoUpdateManyWithWhereWithoutAreaInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutAreaInput>
  }

  export type CallHistoryUpsertWithWhereUniqueWithoutAreaInput = {
    where: CallHistoryWhereUniqueInput
    update: XOR<CallHistoryUpdateWithoutAreaInput, CallHistoryUncheckedUpdateWithoutAreaInput>
    create: XOR<CallHistoryCreateWithoutAreaInput, CallHistoryUncheckedCreateWithoutAreaInput>
  }

  export type CallHistoryUpdateWithWhereUniqueWithoutAreaInput = {
    where: CallHistoryWhereUniqueInput
    data: XOR<CallHistoryUpdateWithoutAreaInput, CallHistoryUncheckedUpdateWithoutAreaInput>
  }

  export type CallHistoryUpdateManyWithWhereWithoutAreaInput = {
    where: CallHistoryScalarWhereInput
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyWithoutAreaInput>
  }

  export type CallHistoryScalarWhereInput = {
    AND?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
    OR?: CallHistoryScalarWhereInput[]
    NOT?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
    id?: StringFilter<"CallHistory"> | string
    turnoId?: StringFilter<"CallHistory"> | string
    areaId?: StringFilter<"CallHistory"> | string
    status?: StringFilter<"CallHistory"> | string
    timestamp?: DateTimeFilter<"CallHistory"> | Date | string
  }

  export type PatientCreateWithoutTurnosInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateWithoutTurnosInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicId: string
  }

  export type PatientCreateOrConnectWithoutTurnosInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutTurnosInput, PatientUncheckedCreateWithoutTurnosInput>
  }

  export type AreaCreateWithoutTurnosInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAreasInput
    nextArea?: AreaCreateNestedOneWithoutPrevAreasInput
    prevAreas?: AreaCreateNestedManyWithoutNextAreaInput
    users?: UserCreateNestedManyWithoutAreasInput
    history?: CallHistoryCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutTurnosInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevAreas?: AreaUncheckedCreateNestedManyWithoutNextAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreasInput
    history?: CallHistoryUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutTurnosInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutTurnosInput, AreaUncheckedCreateWithoutTurnosInput>
  }

  export type ClinicCreateWithoutTurnosInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaCreateNestedManyWithoutClinicInput
    patients?: PatientCreateNestedManyWithoutClinicInput
    users?: UserCreateNestedManyWithoutClinicInput
  }

  export type ClinicUncheckedCreateWithoutTurnosInput = {
    id?: string
    name: string
    slug: string
    address?: string | null
    phone?: string | null
    active?: boolean
    voiceConfig?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areas?: AreaUncheckedCreateNestedManyWithoutClinicInput
    patients?: PatientUncheckedCreateNestedManyWithoutClinicInput
    users?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type ClinicCreateOrConnectWithoutTurnosInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutTurnosInput, ClinicUncheckedCreateWithoutTurnosInput>
  }

  export type CallHistoryCreateWithoutTurnoInput = {
    id?: string
    status: string
    timestamp?: Date | string
    area: AreaCreateNestedOneWithoutHistoryInput
  }

  export type CallHistoryUncheckedCreateWithoutTurnoInput = {
    id?: string
    areaId: string
    status: string
    timestamp?: Date | string
  }

  export type CallHistoryCreateOrConnectWithoutTurnoInput = {
    where: CallHistoryWhereUniqueInput
    create: XOR<CallHistoryCreateWithoutTurnoInput, CallHistoryUncheckedCreateWithoutTurnoInput>
  }

  export type CallHistoryCreateManyTurnoInputEnvelope = {
    data: CallHistoryCreateManyTurnoInput | CallHistoryCreateManyTurnoInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutTurnosInput = {
    update: XOR<PatientUpdateWithoutTurnosInput, PatientUncheckedUpdateWithoutTurnosInput>
    create: XOR<PatientCreateWithoutTurnosInput, PatientUncheckedCreateWithoutTurnosInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutTurnosInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutTurnosInput, PatientUncheckedUpdateWithoutTurnosInput>
  }

  export type PatientUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicId?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUpsertWithoutTurnosInput = {
    update: XOR<AreaUpdateWithoutTurnosInput, AreaUncheckedUpdateWithoutTurnosInput>
    create: XOR<AreaCreateWithoutTurnosInput, AreaUncheckedCreateWithoutTurnosInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutTurnosInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutTurnosInput, AreaUncheckedUpdateWithoutTurnosInput>
  }

  export type AreaUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAreasNestedInput
    nextArea?: AreaUpdateOneWithoutPrevAreasNestedInput
    prevAreas?: AreaUpdateManyWithoutNextAreaNestedInput
    users?: UserUpdateManyWithoutAreasNestedInput
    history?: CallHistoryUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevAreas?: AreaUncheckedUpdateManyWithoutNextAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreasNestedInput
    history?: CallHistoryUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type ClinicUpsertWithoutTurnosInput = {
    update: XOR<ClinicUpdateWithoutTurnosInput, ClinicUncheckedUpdateWithoutTurnosInput>
    create: XOR<ClinicCreateWithoutTurnosInput, ClinicUncheckedCreateWithoutTurnosInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutTurnosInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutTurnosInput, ClinicUncheckedUpdateWithoutTurnosInput>
  }

  export type ClinicUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUpdateManyWithoutClinicNestedInput
    patients?: PatientUpdateManyWithoutClinicNestedInput
    users?: UserUpdateManyWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateWithoutTurnosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    voiceConfig?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUncheckedUpdateManyWithoutClinicNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClinicNestedInput
    users?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type CallHistoryUpsertWithWhereUniqueWithoutTurnoInput = {
    where: CallHistoryWhereUniqueInput
    update: XOR<CallHistoryUpdateWithoutTurnoInput, CallHistoryUncheckedUpdateWithoutTurnoInput>
    create: XOR<CallHistoryCreateWithoutTurnoInput, CallHistoryUncheckedCreateWithoutTurnoInput>
  }

  export type CallHistoryUpdateWithWhereUniqueWithoutTurnoInput = {
    where: CallHistoryWhereUniqueInput
    data: XOR<CallHistoryUpdateWithoutTurnoInput, CallHistoryUncheckedUpdateWithoutTurnoInput>
  }

  export type CallHistoryUpdateManyWithWhereWithoutTurnoInput = {
    where: CallHistoryScalarWhereInput
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyWithoutTurnoInput>
  }

  export type TurnoCreateWithoutCallsInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTurnosInput
    area: AreaCreateNestedOneWithoutTurnosInput
    clinic: ClinicCreateNestedOneWithoutTurnosInput
  }

  export type TurnoUncheckedCreateWithoutCallsInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    areaId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoCreateOrConnectWithoutCallsInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutCallsInput, TurnoUncheckedCreateWithoutCallsInput>
  }

  export type AreaCreateWithoutHistoryInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clinic: ClinicCreateNestedOneWithoutAreasInput
    nextArea?: AreaCreateNestedOneWithoutPrevAreasInput
    prevAreas?: AreaCreateNestedManyWithoutNextAreaInput
    users?: UserCreateNestedManyWithoutAreasInput
    turnos?: TurnoCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutHistoryInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevAreas?: AreaUncheckedCreateNestedManyWithoutNextAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreasInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutHistoryInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutHistoryInput, AreaUncheckedCreateWithoutHistoryInput>
  }

  export type TurnoUpsertWithoutCallsInput = {
    update: XOR<TurnoUpdateWithoutCallsInput, TurnoUncheckedUpdateWithoutCallsInput>
    create: XOR<TurnoCreateWithoutCallsInput, TurnoUncheckedCreateWithoutCallsInput>
    where?: TurnoWhereInput
  }

  export type TurnoUpdateToOneWithWhereWithoutCallsInput = {
    where?: TurnoWhereInput
    data: XOR<TurnoUpdateWithoutCallsInput, TurnoUncheckedUpdateWithoutCallsInput>
  }

  export type TurnoUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTurnosNestedInput
    area?: AreaUpdateOneRequiredWithoutTurnosNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type TurnoUncheckedUpdateWithoutCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUpsertWithoutHistoryInput = {
    update: XOR<AreaUpdateWithoutHistoryInput, AreaUncheckedUpdateWithoutHistoryInput>
    create: XOR<AreaCreateWithoutHistoryInput, AreaUncheckedCreateWithoutHistoryInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutHistoryInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutHistoryInput, AreaUncheckedUpdateWithoutHistoryInput>
  }

  export type AreaUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAreasNestedInput
    nextArea?: AreaUpdateOneWithoutPrevAreasNestedInput
    prevAreas?: AreaUpdateManyWithoutNextAreaNestedInput
    users?: UserUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevAreas?: AreaUncheckedUpdateManyWithoutNextAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyClinicInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    nextAreaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyClinicInput = {
    id?: string
    dni: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoCreateManyClinicInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    areaId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyClinicInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextArea?: AreaUpdateOneWithoutPrevAreasNestedInput
    prevAreas?: AreaUpdateManyWithoutNextAreaNestedInput
    users?: UserUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevAreas?: AreaUncheckedUpdateManyWithoutNextAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTurnosNestedInput
    area?: AreaUpdateOneRequiredWithoutTurnosNestedInput
    calls?: CallHistoryUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallHistoryUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areas?: AreaUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAreasNestedInput
    nextArea?: AreaUpdateOneWithoutPrevAreasNestedInput
    prevAreas?: AreaUpdateManyWithoutNextAreaNestedInput
    turnos?: TurnoUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevAreas?: AreaUncheckedUpdateManyWithoutNextAreaNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    nextAreaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoCreateManyPatientInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    areaId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutTurnosNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutTurnosNestedInput
    calls?: CallHistoryUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    areaId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallHistoryUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    areaId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateManyNextAreaInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    capacity?: number
    clinicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoCreateManyAreaInput = {
    id?: string
    number: string
    status?: string
    priority?: boolean
    patientId: string
    clinicId: string
    calledBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CallHistoryCreateManyAreaInput = {
    id?: string
    turnoId: string
    status: string
    timestamp?: Date | string
  }

  export type AreaUpdateWithoutNextAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneRequiredWithoutAreasNestedInput
    prevAreas?: AreaUpdateManyWithoutNextAreaNestedInput
    users?: UserUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutNextAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevAreas?: AreaUncheckedUpdateManyWithoutNextAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreasNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutAreaNestedInput
    history?: CallHistoryUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutNextAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    clinicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: ClinicUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTurnosNestedInput
    clinic?: ClinicUpdateOneRequiredWithoutTurnosNestedInput
    calls?: CallHistoryUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calls?: CallHistoryUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: BoolFieldUpdateOperationsInput | boolean
    patientId?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    calledBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: TurnoUpdateOneRequiredWithoutCallsNestedInput
  }

  export type CallHistoryUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    turnoId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    turnoId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryCreateManyTurnoInput = {
    id?: string
    areaId: string
    status: string
    timestamp?: Date | string
  }

  export type CallHistoryUpdateWithoutTurnoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type CallHistoryUncheckedUpdateWithoutTurnoInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryUncheckedUpdateManyWithoutTurnoInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClinicCountOutputTypeDefaultArgs instead
     */
    export type ClinicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClinicCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientCountOutputTypeDefaultArgs instead
     */
    export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaCountOutputTypeDefaultArgs instead
     */
    export type AreaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoCountOutputTypeDefaultArgs instead
     */
    export type TurnoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClinicDefaultArgs instead
     */
    export type ClinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClinicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaDefaultArgs instead
     */
    export type AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnoDefaultArgs instead
     */
    export type TurnoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CallHistoryDefaultArgs instead
     */
    export type CallHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CallHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}