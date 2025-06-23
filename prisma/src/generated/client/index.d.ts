
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
 * Model RedditTrend
 * 
 */
export type RedditTrend = $Result.DefaultSelection<Prisma.$RedditTrendPayload>
/**
 * Model ProductHuntTrend
 * 
 */
export type ProductHuntTrend = $Result.DefaultSelection<Prisma.$ProductHuntTrendPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model SavedTrend
 * 
 */
export type SavedTrend = $Result.DefaultSelection<Prisma.$SavedTrendPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RedditTrends
 * const redditTrends = await prisma.redditTrend.findMany()
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
   * // Fetch zero or more RedditTrends
   * const redditTrends = await prisma.redditTrend.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.redditTrend`: Exposes CRUD operations for the **RedditTrend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RedditTrends
    * const redditTrends = await prisma.redditTrend.findMany()
    * ```
    */
  get redditTrend(): Prisma.RedditTrendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productHuntTrend`: Exposes CRUD operations for the **ProductHuntTrend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductHuntTrends
    * const productHuntTrends = await prisma.productHuntTrend.findMany()
    * ```
    */
  get productHuntTrend(): Prisma.ProductHuntTrendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedTrend`: Exposes CRUD operations for the **SavedTrend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedTrends
    * const savedTrends = await prisma.savedTrend.findMany()
    * ```
    */
  get savedTrend(): Prisma.SavedTrendDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    RedditTrend: 'RedditTrend',
    ProductHuntTrend: 'ProductHuntTrend',
    Project: 'Project',
    SavedTrend: 'SavedTrend'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "redditTrend" | "productHuntTrend" | "project" | "savedTrend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RedditTrend: {
        payload: Prisma.$RedditTrendPayload<ExtArgs>
        fields: Prisma.RedditTrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RedditTrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RedditTrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>
          }
          findFirst: {
            args: Prisma.RedditTrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RedditTrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>
          }
          findMany: {
            args: Prisma.RedditTrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>[]
          }
          create: {
            args: Prisma.RedditTrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>
          }
          createMany: {
            args: Prisma.RedditTrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RedditTrendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>[]
          }
          delete: {
            args: Prisma.RedditTrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>
          }
          update: {
            args: Prisma.RedditTrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>
          }
          deleteMany: {
            args: Prisma.RedditTrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RedditTrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RedditTrendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>[]
          }
          upsert: {
            args: Prisma.RedditTrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RedditTrendPayload>
          }
          aggregate: {
            args: Prisma.RedditTrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRedditTrend>
          }
          groupBy: {
            args: Prisma.RedditTrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<RedditTrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.RedditTrendCountArgs<ExtArgs>
            result: $Utils.Optional<RedditTrendCountAggregateOutputType> | number
          }
        }
      }
      ProductHuntTrend: {
        payload: Prisma.$ProductHuntTrendPayload<ExtArgs>
        fields: Prisma.ProductHuntTrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductHuntTrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductHuntTrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>
          }
          findFirst: {
            args: Prisma.ProductHuntTrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductHuntTrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>
          }
          findMany: {
            args: Prisma.ProductHuntTrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>[]
          }
          create: {
            args: Prisma.ProductHuntTrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>
          }
          createMany: {
            args: Prisma.ProductHuntTrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductHuntTrendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>[]
          }
          delete: {
            args: Prisma.ProductHuntTrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>
          }
          update: {
            args: Prisma.ProductHuntTrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>
          }
          deleteMany: {
            args: Prisma.ProductHuntTrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductHuntTrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductHuntTrendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>[]
          }
          upsert: {
            args: Prisma.ProductHuntTrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductHuntTrendPayload>
          }
          aggregate: {
            args: Prisma.ProductHuntTrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductHuntTrend>
          }
          groupBy: {
            args: Prisma.ProductHuntTrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductHuntTrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductHuntTrendCountArgs<ExtArgs>
            result: $Utils.Optional<ProductHuntTrendCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      SavedTrend: {
        payload: Prisma.$SavedTrendPayload<ExtArgs>
        fields: Prisma.SavedTrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedTrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedTrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>
          }
          findFirst: {
            args: Prisma.SavedTrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedTrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>
          }
          findMany: {
            args: Prisma.SavedTrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>[]
          }
          create: {
            args: Prisma.SavedTrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>
          }
          createMany: {
            args: Prisma.SavedTrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedTrendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>[]
          }
          delete: {
            args: Prisma.SavedTrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>
          }
          update: {
            args: Prisma.SavedTrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>
          }
          deleteMany: {
            args: Prisma.SavedTrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedTrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedTrendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>[]
          }
          upsert: {
            args: Prisma.SavedTrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedTrendPayload>
          }
          aggregate: {
            args: Prisma.SavedTrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedTrend>
          }
          groupBy: {
            args: Prisma.SavedTrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedTrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedTrendCountArgs<ExtArgs>
            result: $Utils.Optional<SavedTrendCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    redditTrend?: RedditTrendOmit
    productHuntTrend?: ProductHuntTrendOmit
    project?: ProjectOmit
    savedTrend?: SavedTrendOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model RedditTrend
   */

  export type AggregateRedditTrend = {
    _count: RedditTrendCountAggregateOutputType | null
    _avg: RedditTrendAvgAggregateOutputType | null
    _sum: RedditTrendSumAggregateOutputType | null
    _min: RedditTrendMinAggregateOutputType | null
    _max: RedditTrendMaxAggregateOutputType | null
  }

  export type RedditTrendAvgAggregateOutputType = {
    score: number | null
    feasibility: number | null
    urgency: number | null
    rating: number | null
  }

  export type RedditTrendSumAggregateOutputType = {
    score: number | null
    feasibility: number | null
    urgency: number | null
    rating: number | null
  }

  export type RedditTrendMinAggregateOutputType = {
    id: string | null
    title: string | null
    subreddit: string | null
    score: number | null
    url: string | null
    createdAt: Date | null
    description: string | null
    monetizationIdea: string | null
    builderFilter: string | null
    feasibility: number | null
    urgency: number | null
    rating: number | null
  }

  export type RedditTrendMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subreddit: string | null
    score: number | null
    url: string | null
    createdAt: Date | null
    description: string | null
    monetizationIdea: string | null
    builderFilter: string | null
    feasibility: number | null
    urgency: number | null
    rating: number | null
  }

  export type RedditTrendCountAggregateOutputType = {
    id: number
    title: number
    subreddit: number
    score: number
    url: number
    createdAt: number
    categories: number
    description: number
    monetizationIdea: number
    builderFilter: number
    feasibility: number
    urgency: number
    rating: number
    _all: number
  }


  export type RedditTrendAvgAggregateInputType = {
    score?: true
    feasibility?: true
    urgency?: true
    rating?: true
  }

  export type RedditTrendSumAggregateInputType = {
    score?: true
    feasibility?: true
    urgency?: true
    rating?: true
  }

  export type RedditTrendMinAggregateInputType = {
    id?: true
    title?: true
    subreddit?: true
    score?: true
    url?: true
    createdAt?: true
    description?: true
    monetizationIdea?: true
    builderFilter?: true
    feasibility?: true
    urgency?: true
    rating?: true
  }

  export type RedditTrendMaxAggregateInputType = {
    id?: true
    title?: true
    subreddit?: true
    score?: true
    url?: true
    createdAt?: true
    description?: true
    monetizationIdea?: true
    builderFilter?: true
    feasibility?: true
    urgency?: true
    rating?: true
  }

  export type RedditTrendCountAggregateInputType = {
    id?: true
    title?: true
    subreddit?: true
    score?: true
    url?: true
    createdAt?: true
    categories?: true
    description?: true
    monetizationIdea?: true
    builderFilter?: true
    feasibility?: true
    urgency?: true
    rating?: true
    _all?: true
  }

  export type RedditTrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedditTrend to aggregate.
     */
    where?: RedditTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedditTrends to fetch.
     */
    orderBy?: RedditTrendOrderByWithRelationInput | RedditTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RedditTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedditTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedditTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RedditTrends
    **/
    _count?: true | RedditTrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RedditTrendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RedditTrendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RedditTrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RedditTrendMaxAggregateInputType
  }

  export type GetRedditTrendAggregateType<T extends RedditTrendAggregateArgs> = {
        [P in keyof T & keyof AggregateRedditTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRedditTrend[P]>
      : GetScalarType<T[P], AggregateRedditTrend[P]>
  }




  export type RedditTrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RedditTrendWhereInput
    orderBy?: RedditTrendOrderByWithAggregationInput | RedditTrendOrderByWithAggregationInput[]
    by: RedditTrendScalarFieldEnum[] | RedditTrendScalarFieldEnum
    having?: RedditTrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RedditTrendCountAggregateInputType | true
    _avg?: RedditTrendAvgAggregateInputType
    _sum?: RedditTrendSumAggregateInputType
    _min?: RedditTrendMinAggregateInputType
    _max?: RedditTrendMaxAggregateInputType
  }

  export type RedditTrendGroupByOutputType = {
    id: string
    title: string
    subreddit: string
    score: number
    url: string
    createdAt: Date
    categories: string[]
    description: string
    monetizationIdea: string | null
    builderFilter: string | null
    feasibility: number | null
    urgency: number | null
    rating: number
    _count: RedditTrendCountAggregateOutputType | null
    _avg: RedditTrendAvgAggregateOutputType | null
    _sum: RedditTrendSumAggregateOutputType | null
    _min: RedditTrendMinAggregateOutputType | null
    _max: RedditTrendMaxAggregateOutputType | null
  }

  type GetRedditTrendGroupByPayload<T extends RedditTrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RedditTrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RedditTrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RedditTrendGroupByOutputType[P]>
            : GetScalarType<T[P], RedditTrendGroupByOutputType[P]>
        }
      >
    >


  export type RedditTrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subreddit?: boolean
    score?: boolean
    url?: boolean
    createdAt?: boolean
    categories?: boolean
    description?: boolean
    monetizationIdea?: boolean
    builderFilter?: boolean
    feasibility?: boolean
    urgency?: boolean
    rating?: boolean
  }, ExtArgs["result"]["redditTrend"]>

  export type RedditTrendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subreddit?: boolean
    score?: boolean
    url?: boolean
    createdAt?: boolean
    categories?: boolean
    description?: boolean
    monetizationIdea?: boolean
    builderFilter?: boolean
    feasibility?: boolean
    urgency?: boolean
    rating?: boolean
  }, ExtArgs["result"]["redditTrend"]>

  export type RedditTrendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subreddit?: boolean
    score?: boolean
    url?: boolean
    createdAt?: boolean
    categories?: boolean
    description?: boolean
    monetizationIdea?: boolean
    builderFilter?: boolean
    feasibility?: boolean
    urgency?: boolean
    rating?: boolean
  }, ExtArgs["result"]["redditTrend"]>

  export type RedditTrendSelectScalar = {
    id?: boolean
    title?: boolean
    subreddit?: boolean
    score?: boolean
    url?: boolean
    createdAt?: boolean
    categories?: boolean
    description?: boolean
    monetizationIdea?: boolean
    builderFilter?: boolean
    feasibility?: boolean
    urgency?: boolean
    rating?: boolean
  }

  export type RedditTrendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subreddit" | "score" | "url" | "createdAt" | "categories" | "description" | "monetizationIdea" | "builderFilter" | "feasibility" | "urgency" | "rating", ExtArgs["result"]["redditTrend"]>

  export type $RedditTrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RedditTrend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subreddit: string
      score: number
      url: string
      createdAt: Date
      categories: string[]
      description: string
      monetizationIdea: string | null
      builderFilter: string | null
      feasibility: number | null
      urgency: number | null
      rating: number
    }, ExtArgs["result"]["redditTrend"]>
    composites: {}
  }

  type RedditTrendGetPayload<S extends boolean | null | undefined | RedditTrendDefaultArgs> = $Result.GetResult<Prisma.$RedditTrendPayload, S>

  type RedditTrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RedditTrendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RedditTrendCountAggregateInputType | true
    }

  export interface RedditTrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RedditTrend'], meta: { name: 'RedditTrend' } }
    /**
     * Find zero or one RedditTrend that matches the filter.
     * @param {RedditTrendFindUniqueArgs} args - Arguments to find a RedditTrend
     * @example
     * // Get one RedditTrend
     * const redditTrend = await prisma.redditTrend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RedditTrendFindUniqueArgs>(args: SelectSubset<T, RedditTrendFindUniqueArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RedditTrend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RedditTrendFindUniqueOrThrowArgs} args - Arguments to find a RedditTrend
     * @example
     * // Get one RedditTrend
     * const redditTrend = await prisma.redditTrend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RedditTrendFindUniqueOrThrowArgs>(args: SelectSubset<T, RedditTrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedditTrend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendFindFirstArgs} args - Arguments to find a RedditTrend
     * @example
     * // Get one RedditTrend
     * const redditTrend = await prisma.redditTrend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RedditTrendFindFirstArgs>(args?: SelectSubset<T, RedditTrendFindFirstArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RedditTrend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendFindFirstOrThrowArgs} args - Arguments to find a RedditTrend
     * @example
     * // Get one RedditTrend
     * const redditTrend = await prisma.redditTrend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RedditTrendFindFirstOrThrowArgs>(args?: SelectSubset<T, RedditTrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RedditTrends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RedditTrends
     * const redditTrends = await prisma.redditTrend.findMany()
     * 
     * // Get first 10 RedditTrends
     * const redditTrends = await prisma.redditTrend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const redditTrendWithIdOnly = await prisma.redditTrend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RedditTrendFindManyArgs>(args?: SelectSubset<T, RedditTrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RedditTrend.
     * @param {RedditTrendCreateArgs} args - Arguments to create a RedditTrend.
     * @example
     * // Create one RedditTrend
     * const RedditTrend = await prisma.redditTrend.create({
     *   data: {
     *     // ... data to create a RedditTrend
     *   }
     * })
     * 
     */
    create<T extends RedditTrendCreateArgs>(args: SelectSubset<T, RedditTrendCreateArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RedditTrends.
     * @param {RedditTrendCreateManyArgs} args - Arguments to create many RedditTrends.
     * @example
     * // Create many RedditTrends
     * const redditTrend = await prisma.redditTrend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RedditTrendCreateManyArgs>(args?: SelectSubset<T, RedditTrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RedditTrends and returns the data saved in the database.
     * @param {RedditTrendCreateManyAndReturnArgs} args - Arguments to create many RedditTrends.
     * @example
     * // Create many RedditTrends
     * const redditTrend = await prisma.redditTrend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RedditTrends and only return the `id`
     * const redditTrendWithIdOnly = await prisma.redditTrend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RedditTrendCreateManyAndReturnArgs>(args?: SelectSubset<T, RedditTrendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RedditTrend.
     * @param {RedditTrendDeleteArgs} args - Arguments to delete one RedditTrend.
     * @example
     * // Delete one RedditTrend
     * const RedditTrend = await prisma.redditTrend.delete({
     *   where: {
     *     // ... filter to delete one RedditTrend
     *   }
     * })
     * 
     */
    delete<T extends RedditTrendDeleteArgs>(args: SelectSubset<T, RedditTrendDeleteArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RedditTrend.
     * @param {RedditTrendUpdateArgs} args - Arguments to update one RedditTrend.
     * @example
     * // Update one RedditTrend
     * const redditTrend = await prisma.redditTrend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RedditTrendUpdateArgs>(args: SelectSubset<T, RedditTrendUpdateArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RedditTrends.
     * @param {RedditTrendDeleteManyArgs} args - Arguments to filter RedditTrends to delete.
     * @example
     * // Delete a few RedditTrends
     * const { count } = await prisma.redditTrend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RedditTrendDeleteManyArgs>(args?: SelectSubset<T, RedditTrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedditTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RedditTrends
     * const redditTrend = await prisma.redditTrend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RedditTrendUpdateManyArgs>(args: SelectSubset<T, RedditTrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RedditTrends and returns the data updated in the database.
     * @param {RedditTrendUpdateManyAndReturnArgs} args - Arguments to update many RedditTrends.
     * @example
     * // Update many RedditTrends
     * const redditTrend = await prisma.redditTrend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RedditTrends and only return the `id`
     * const redditTrendWithIdOnly = await prisma.redditTrend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RedditTrendUpdateManyAndReturnArgs>(args: SelectSubset<T, RedditTrendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RedditTrend.
     * @param {RedditTrendUpsertArgs} args - Arguments to update or create a RedditTrend.
     * @example
     * // Update or create a RedditTrend
     * const redditTrend = await prisma.redditTrend.upsert({
     *   create: {
     *     // ... data to create a RedditTrend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RedditTrend we want to update
     *   }
     * })
     */
    upsert<T extends RedditTrendUpsertArgs>(args: SelectSubset<T, RedditTrendUpsertArgs<ExtArgs>>): Prisma__RedditTrendClient<$Result.GetResult<Prisma.$RedditTrendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RedditTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendCountArgs} args - Arguments to filter RedditTrends to count.
     * @example
     * // Count the number of RedditTrends
     * const count = await prisma.redditTrend.count({
     *   where: {
     *     // ... the filter for the RedditTrends we want to count
     *   }
     * })
    **/
    count<T extends RedditTrendCountArgs>(
      args?: Subset<T, RedditTrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RedditTrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RedditTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RedditTrendAggregateArgs>(args: Subset<T, RedditTrendAggregateArgs>): Prisma.PrismaPromise<GetRedditTrendAggregateType<T>>

    /**
     * Group by RedditTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RedditTrendGroupByArgs} args - Group by arguments.
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
      T extends RedditTrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RedditTrendGroupByArgs['orderBy'] }
        : { orderBy?: RedditTrendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RedditTrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedditTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RedditTrend model
   */
  readonly fields: RedditTrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RedditTrend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RedditTrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RedditTrend model
   */
  interface RedditTrendFieldRefs {
    readonly id: FieldRef<"RedditTrend", 'String'>
    readonly title: FieldRef<"RedditTrend", 'String'>
    readonly subreddit: FieldRef<"RedditTrend", 'String'>
    readonly score: FieldRef<"RedditTrend", 'Int'>
    readonly url: FieldRef<"RedditTrend", 'String'>
    readonly createdAt: FieldRef<"RedditTrend", 'DateTime'>
    readonly categories: FieldRef<"RedditTrend", 'String[]'>
    readonly description: FieldRef<"RedditTrend", 'String'>
    readonly monetizationIdea: FieldRef<"RedditTrend", 'String'>
    readonly builderFilter: FieldRef<"RedditTrend", 'String'>
    readonly feasibility: FieldRef<"RedditTrend", 'Int'>
    readonly urgency: FieldRef<"RedditTrend", 'Int'>
    readonly rating: FieldRef<"RedditTrend", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RedditTrend findUnique
   */
  export type RedditTrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * Filter, which RedditTrend to fetch.
     */
    where: RedditTrendWhereUniqueInput
  }

  /**
   * RedditTrend findUniqueOrThrow
   */
  export type RedditTrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * Filter, which RedditTrend to fetch.
     */
    where: RedditTrendWhereUniqueInput
  }

  /**
   * RedditTrend findFirst
   */
  export type RedditTrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * Filter, which RedditTrend to fetch.
     */
    where?: RedditTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedditTrends to fetch.
     */
    orderBy?: RedditTrendOrderByWithRelationInput | RedditTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedditTrends.
     */
    cursor?: RedditTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedditTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedditTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedditTrends.
     */
    distinct?: RedditTrendScalarFieldEnum | RedditTrendScalarFieldEnum[]
  }

  /**
   * RedditTrend findFirstOrThrow
   */
  export type RedditTrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * Filter, which RedditTrend to fetch.
     */
    where?: RedditTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedditTrends to fetch.
     */
    orderBy?: RedditTrendOrderByWithRelationInput | RedditTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RedditTrends.
     */
    cursor?: RedditTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedditTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedditTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RedditTrends.
     */
    distinct?: RedditTrendScalarFieldEnum | RedditTrendScalarFieldEnum[]
  }

  /**
   * RedditTrend findMany
   */
  export type RedditTrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * Filter, which RedditTrends to fetch.
     */
    where?: RedditTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RedditTrends to fetch.
     */
    orderBy?: RedditTrendOrderByWithRelationInput | RedditTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RedditTrends.
     */
    cursor?: RedditTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RedditTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RedditTrends.
     */
    skip?: number
    distinct?: RedditTrendScalarFieldEnum | RedditTrendScalarFieldEnum[]
  }

  /**
   * RedditTrend create
   */
  export type RedditTrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * The data needed to create a RedditTrend.
     */
    data: XOR<RedditTrendCreateInput, RedditTrendUncheckedCreateInput>
  }

  /**
   * RedditTrend createMany
   */
  export type RedditTrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RedditTrends.
     */
    data: RedditTrendCreateManyInput | RedditTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedditTrend createManyAndReturn
   */
  export type RedditTrendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * The data used to create many RedditTrends.
     */
    data: RedditTrendCreateManyInput | RedditTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RedditTrend update
   */
  export type RedditTrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * The data needed to update a RedditTrend.
     */
    data: XOR<RedditTrendUpdateInput, RedditTrendUncheckedUpdateInput>
    /**
     * Choose, which RedditTrend to update.
     */
    where: RedditTrendWhereUniqueInput
  }

  /**
   * RedditTrend updateMany
   */
  export type RedditTrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RedditTrends.
     */
    data: XOR<RedditTrendUpdateManyMutationInput, RedditTrendUncheckedUpdateManyInput>
    /**
     * Filter which RedditTrends to update
     */
    where?: RedditTrendWhereInput
    /**
     * Limit how many RedditTrends to update.
     */
    limit?: number
  }

  /**
   * RedditTrend updateManyAndReturn
   */
  export type RedditTrendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * The data used to update RedditTrends.
     */
    data: XOR<RedditTrendUpdateManyMutationInput, RedditTrendUncheckedUpdateManyInput>
    /**
     * Filter which RedditTrends to update
     */
    where?: RedditTrendWhereInput
    /**
     * Limit how many RedditTrends to update.
     */
    limit?: number
  }

  /**
   * RedditTrend upsert
   */
  export type RedditTrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * The filter to search for the RedditTrend to update in case it exists.
     */
    where: RedditTrendWhereUniqueInput
    /**
     * In case the RedditTrend found by the `where` argument doesn't exist, create a new RedditTrend with this data.
     */
    create: XOR<RedditTrendCreateInput, RedditTrendUncheckedCreateInput>
    /**
     * In case the RedditTrend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RedditTrendUpdateInput, RedditTrendUncheckedUpdateInput>
  }

  /**
   * RedditTrend delete
   */
  export type RedditTrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
    /**
     * Filter which RedditTrend to delete.
     */
    where: RedditTrendWhereUniqueInput
  }

  /**
   * RedditTrend deleteMany
   */
  export type RedditTrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RedditTrends to delete
     */
    where?: RedditTrendWhereInput
    /**
     * Limit how many RedditTrends to delete.
     */
    limit?: number
  }

  /**
   * RedditTrend without action
   */
  export type RedditTrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RedditTrend
     */
    select?: RedditTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RedditTrend
     */
    omit?: RedditTrendOmit<ExtArgs> | null
  }


  /**
   * Model ProductHuntTrend
   */

  export type AggregateProductHuntTrend = {
    _count: ProductHuntTrendCountAggregateOutputType | null
    _avg: ProductHuntTrendAvgAggregateOutputType | null
    _sum: ProductHuntTrendSumAggregateOutputType | null
    _min: ProductHuntTrendMinAggregateOutputType | null
    _max: ProductHuntTrendMaxAggregateOutputType | null
  }

  export type ProductHuntTrendAvgAggregateOutputType = {
    upvotes: number | null
    rating: number | null
  }

  export type ProductHuntTrendSumAggregateOutputType = {
    upvotes: number | null
    rating: number | null
  }

  export type ProductHuntTrendMinAggregateOutputType = {
    id: string | null
    title: string | null
    tagline: string | null
    url: string | null
    upvotes: number | null
    description: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type ProductHuntTrendMaxAggregateOutputType = {
    id: string | null
    title: string | null
    tagline: string | null
    url: string | null
    upvotes: number | null
    description: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type ProductHuntTrendCountAggregateOutputType = {
    id: number
    title: number
    tagline: number
    url: number
    upvotes: number
    categories: number
    description: number
    rating: number
    createdAt: number
    _all: number
  }


  export type ProductHuntTrendAvgAggregateInputType = {
    upvotes?: true
    rating?: true
  }

  export type ProductHuntTrendSumAggregateInputType = {
    upvotes?: true
    rating?: true
  }

  export type ProductHuntTrendMinAggregateInputType = {
    id?: true
    title?: true
    tagline?: true
    url?: true
    upvotes?: true
    description?: true
    rating?: true
    createdAt?: true
  }

  export type ProductHuntTrendMaxAggregateInputType = {
    id?: true
    title?: true
    tagline?: true
    url?: true
    upvotes?: true
    description?: true
    rating?: true
    createdAt?: true
  }

  export type ProductHuntTrendCountAggregateInputType = {
    id?: true
    title?: true
    tagline?: true
    url?: true
    upvotes?: true
    categories?: true
    description?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type ProductHuntTrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductHuntTrend to aggregate.
     */
    where?: ProductHuntTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHuntTrends to fetch.
     */
    orderBy?: ProductHuntTrendOrderByWithRelationInput | ProductHuntTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductHuntTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHuntTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHuntTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductHuntTrends
    **/
    _count?: true | ProductHuntTrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductHuntTrendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductHuntTrendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductHuntTrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductHuntTrendMaxAggregateInputType
  }

  export type GetProductHuntTrendAggregateType<T extends ProductHuntTrendAggregateArgs> = {
        [P in keyof T & keyof AggregateProductHuntTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductHuntTrend[P]>
      : GetScalarType<T[P], AggregateProductHuntTrend[P]>
  }




  export type ProductHuntTrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductHuntTrendWhereInput
    orderBy?: ProductHuntTrendOrderByWithAggregationInput | ProductHuntTrendOrderByWithAggregationInput[]
    by: ProductHuntTrendScalarFieldEnum[] | ProductHuntTrendScalarFieldEnum
    having?: ProductHuntTrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductHuntTrendCountAggregateInputType | true
    _avg?: ProductHuntTrendAvgAggregateInputType
    _sum?: ProductHuntTrendSumAggregateInputType
    _min?: ProductHuntTrendMinAggregateInputType
    _max?: ProductHuntTrendMaxAggregateInputType
  }

  export type ProductHuntTrendGroupByOutputType = {
    id: string
    title: string
    tagline: string
    url: string
    upvotes: number
    categories: string[]
    description: string
    rating: number
    createdAt: Date
    _count: ProductHuntTrendCountAggregateOutputType | null
    _avg: ProductHuntTrendAvgAggregateOutputType | null
    _sum: ProductHuntTrendSumAggregateOutputType | null
    _min: ProductHuntTrendMinAggregateOutputType | null
    _max: ProductHuntTrendMaxAggregateOutputType | null
  }

  type GetProductHuntTrendGroupByPayload<T extends ProductHuntTrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductHuntTrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductHuntTrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductHuntTrendGroupByOutputType[P]>
            : GetScalarType<T[P], ProductHuntTrendGroupByOutputType[P]>
        }
      >
    >


  export type ProductHuntTrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tagline?: boolean
    url?: boolean
    upvotes?: boolean
    categories?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productHuntTrend"]>

  export type ProductHuntTrendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tagline?: boolean
    url?: boolean
    upvotes?: boolean
    categories?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productHuntTrend"]>

  export type ProductHuntTrendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tagline?: boolean
    url?: boolean
    upvotes?: boolean
    categories?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["productHuntTrend"]>

  export type ProductHuntTrendSelectScalar = {
    id?: boolean
    title?: boolean
    tagline?: boolean
    url?: boolean
    upvotes?: boolean
    categories?: boolean
    description?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type ProductHuntTrendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "tagline" | "url" | "upvotes" | "categories" | "description" | "rating" | "createdAt", ExtArgs["result"]["productHuntTrend"]>

  export type $ProductHuntTrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductHuntTrend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      tagline: string
      url: string
      upvotes: number
      categories: string[]
      description: string
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["productHuntTrend"]>
    composites: {}
  }

  type ProductHuntTrendGetPayload<S extends boolean | null | undefined | ProductHuntTrendDefaultArgs> = $Result.GetResult<Prisma.$ProductHuntTrendPayload, S>

  type ProductHuntTrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductHuntTrendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductHuntTrendCountAggregateInputType | true
    }

  export interface ProductHuntTrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductHuntTrend'], meta: { name: 'ProductHuntTrend' } }
    /**
     * Find zero or one ProductHuntTrend that matches the filter.
     * @param {ProductHuntTrendFindUniqueArgs} args - Arguments to find a ProductHuntTrend
     * @example
     * // Get one ProductHuntTrend
     * const productHuntTrend = await prisma.productHuntTrend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductHuntTrendFindUniqueArgs>(args: SelectSubset<T, ProductHuntTrendFindUniqueArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductHuntTrend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductHuntTrendFindUniqueOrThrowArgs} args - Arguments to find a ProductHuntTrend
     * @example
     * // Get one ProductHuntTrend
     * const productHuntTrend = await prisma.productHuntTrend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductHuntTrendFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductHuntTrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductHuntTrend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendFindFirstArgs} args - Arguments to find a ProductHuntTrend
     * @example
     * // Get one ProductHuntTrend
     * const productHuntTrend = await prisma.productHuntTrend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductHuntTrendFindFirstArgs>(args?: SelectSubset<T, ProductHuntTrendFindFirstArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductHuntTrend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendFindFirstOrThrowArgs} args - Arguments to find a ProductHuntTrend
     * @example
     * // Get one ProductHuntTrend
     * const productHuntTrend = await prisma.productHuntTrend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductHuntTrendFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductHuntTrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductHuntTrends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductHuntTrends
     * const productHuntTrends = await prisma.productHuntTrend.findMany()
     * 
     * // Get first 10 ProductHuntTrends
     * const productHuntTrends = await prisma.productHuntTrend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productHuntTrendWithIdOnly = await prisma.productHuntTrend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductHuntTrendFindManyArgs>(args?: SelectSubset<T, ProductHuntTrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductHuntTrend.
     * @param {ProductHuntTrendCreateArgs} args - Arguments to create a ProductHuntTrend.
     * @example
     * // Create one ProductHuntTrend
     * const ProductHuntTrend = await prisma.productHuntTrend.create({
     *   data: {
     *     // ... data to create a ProductHuntTrend
     *   }
     * })
     * 
     */
    create<T extends ProductHuntTrendCreateArgs>(args: SelectSubset<T, ProductHuntTrendCreateArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductHuntTrends.
     * @param {ProductHuntTrendCreateManyArgs} args - Arguments to create many ProductHuntTrends.
     * @example
     * // Create many ProductHuntTrends
     * const productHuntTrend = await prisma.productHuntTrend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductHuntTrendCreateManyArgs>(args?: SelectSubset<T, ProductHuntTrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductHuntTrends and returns the data saved in the database.
     * @param {ProductHuntTrendCreateManyAndReturnArgs} args - Arguments to create many ProductHuntTrends.
     * @example
     * // Create many ProductHuntTrends
     * const productHuntTrend = await prisma.productHuntTrend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductHuntTrends and only return the `id`
     * const productHuntTrendWithIdOnly = await prisma.productHuntTrend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductHuntTrendCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductHuntTrendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductHuntTrend.
     * @param {ProductHuntTrendDeleteArgs} args - Arguments to delete one ProductHuntTrend.
     * @example
     * // Delete one ProductHuntTrend
     * const ProductHuntTrend = await prisma.productHuntTrend.delete({
     *   where: {
     *     // ... filter to delete one ProductHuntTrend
     *   }
     * })
     * 
     */
    delete<T extends ProductHuntTrendDeleteArgs>(args: SelectSubset<T, ProductHuntTrendDeleteArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductHuntTrend.
     * @param {ProductHuntTrendUpdateArgs} args - Arguments to update one ProductHuntTrend.
     * @example
     * // Update one ProductHuntTrend
     * const productHuntTrend = await prisma.productHuntTrend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductHuntTrendUpdateArgs>(args: SelectSubset<T, ProductHuntTrendUpdateArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductHuntTrends.
     * @param {ProductHuntTrendDeleteManyArgs} args - Arguments to filter ProductHuntTrends to delete.
     * @example
     * // Delete a few ProductHuntTrends
     * const { count } = await prisma.productHuntTrend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductHuntTrendDeleteManyArgs>(args?: SelectSubset<T, ProductHuntTrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductHuntTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductHuntTrends
     * const productHuntTrend = await prisma.productHuntTrend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductHuntTrendUpdateManyArgs>(args: SelectSubset<T, ProductHuntTrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductHuntTrends and returns the data updated in the database.
     * @param {ProductHuntTrendUpdateManyAndReturnArgs} args - Arguments to update many ProductHuntTrends.
     * @example
     * // Update many ProductHuntTrends
     * const productHuntTrend = await prisma.productHuntTrend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductHuntTrends and only return the `id`
     * const productHuntTrendWithIdOnly = await prisma.productHuntTrend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductHuntTrendUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductHuntTrendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductHuntTrend.
     * @param {ProductHuntTrendUpsertArgs} args - Arguments to update or create a ProductHuntTrend.
     * @example
     * // Update or create a ProductHuntTrend
     * const productHuntTrend = await prisma.productHuntTrend.upsert({
     *   create: {
     *     // ... data to create a ProductHuntTrend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductHuntTrend we want to update
     *   }
     * })
     */
    upsert<T extends ProductHuntTrendUpsertArgs>(args: SelectSubset<T, ProductHuntTrendUpsertArgs<ExtArgs>>): Prisma__ProductHuntTrendClient<$Result.GetResult<Prisma.$ProductHuntTrendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductHuntTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendCountArgs} args - Arguments to filter ProductHuntTrends to count.
     * @example
     * // Count the number of ProductHuntTrends
     * const count = await prisma.productHuntTrend.count({
     *   where: {
     *     // ... the filter for the ProductHuntTrends we want to count
     *   }
     * })
    **/
    count<T extends ProductHuntTrendCountArgs>(
      args?: Subset<T, ProductHuntTrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductHuntTrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductHuntTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductHuntTrendAggregateArgs>(args: Subset<T, ProductHuntTrendAggregateArgs>): Prisma.PrismaPromise<GetProductHuntTrendAggregateType<T>>

    /**
     * Group by ProductHuntTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductHuntTrendGroupByArgs} args - Group by arguments.
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
      T extends ProductHuntTrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductHuntTrendGroupByArgs['orderBy'] }
        : { orderBy?: ProductHuntTrendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductHuntTrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductHuntTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductHuntTrend model
   */
  readonly fields: ProductHuntTrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductHuntTrend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductHuntTrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ProductHuntTrend model
   */
  interface ProductHuntTrendFieldRefs {
    readonly id: FieldRef<"ProductHuntTrend", 'String'>
    readonly title: FieldRef<"ProductHuntTrend", 'String'>
    readonly tagline: FieldRef<"ProductHuntTrend", 'String'>
    readonly url: FieldRef<"ProductHuntTrend", 'String'>
    readonly upvotes: FieldRef<"ProductHuntTrend", 'Int'>
    readonly categories: FieldRef<"ProductHuntTrend", 'String[]'>
    readonly description: FieldRef<"ProductHuntTrend", 'String'>
    readonly rating: FieldRef<"ProductHuntTrend", 'Int'>
    readonly createdAt: FieldRef<"ProductHuntTrend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductHuntTrend findUnique
   */
  export type ProductHuntTrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * Filter, which ProductHuntTrend to fetch.
     */
    where: ProductHuntTrendWhereUniqueInput
  }

  /**
   * ProductHuntTrend findUniqueOrThrow
   */
  export type ProductHuntTrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * Filter, which ProductHuntTrend to fetch.
     */
    where: ProductHuntTrendWhereUniqueInput
  }

  /**
   * ProductHuntTrend findFirst
   */
  export type ProductHuntTrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * Filter, which ProductHuntTrend to fetch.
     */
    where?: ProductHuntTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHuntTrends to fetch.
     */
    orderBy?: ProductHuntTrendOrderByWithRelationInput | ProductHuntTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductHuntTrends.
     */
    cursor?: ProductHuntTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHuntTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHuntTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductHuntTrends.
     */
    distinct?: ProductHuntTrendScalarFieldEnum | ProductHuntTrendScalarFieldEnum[]
  }

  /**
   * ProductHuntTrend findFirstOrThrow
   */
  export type ProductHuntTrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * Filter, which ProductHuntTrend to fetch.
     */
    where?: ProductHuntTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHuntTrends to fetch.
     */
    orderBy?: ProductHuntTrendOrderByWithRelationInput | ProductHuntTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductHuntTrends.
     */
    cursor?: ProductHuntTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHuntTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHuntTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductHuntTrends.
     */
    distinct?: ProductHuntTrendScalarFieldEnum | ProductHuntTrendScalarFieldEnum[]
  }

  /**
   * ProductHuntTrend findMany
   */
  export type ProductHuntTrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * Filter, which ProductHuntTrends to fetch.
     */
    where?: ProductHuntTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductHuntTrends to fetch.
     */
    orderBy?: ProductHuntTrendOrderByWithRelationInput | ProductHuntTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductHuntTrends.
     */
    cursor?: ProductHuntTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductHuntTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductHuntTrends.
     */
    skip?: number
    distinct?: ProductHuntTrendScalarFieldEnum | ProductHuntTrendScalarFieldEnum[]
  }

  /**
   * ProductHuntTrend create
   */
  export type ProductHuntTrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductHuntTrend.
     */
    data: XOR<ProductHuntTrendCreateInput, ProductHuntTrendUncheckedCreateInput>
  }

  /**
   * ProductHuntTrend createMany
   */
  export type ProductHuntTrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductHuntTrends.
     */
    data: ProductHuntTrendCreateManyInput | ProductHuntTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductHuntTrend createManyAndReturn
   */
  export type ProductHuntTrendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * The data used to create many ProductHuntTrends.
     */
    data: ProductHuntTrendCreateManyInput | ProductHuntTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductHuntTrend update
   */
  export type ProductHuntTrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductHuntTrend.
     */
    data: XOR<ProductHuntTrendUpdateInput, ProductHuntTrendUncheckedUpdateInput>
    /**
     * Choose, which ProductHuntTrend to update.
     */
    where: ProductHuntTrendWhereUniqueInput
  }

  /**
   * ProductHuntTrend updateMany
   */
  export type ProductHuntTrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductHuntTrends.
     */
    data: XOR<ProductHuntTrendUpdateManyMutationInput, ProductHuntTrendUncheckedUpdateManyInput>
    /**
     * Filter which ProductHuntTrends to update
     */
    where?: ProductHuntTrendWhereInput
    /**
     * Limit how many ProductHuntTrends to update.
     */
    limit?: number
  }

  /**
   * ProductHuntTrend updateManyAndReturn
   */
  export type ProductHuntTrendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * The data used to update ProductHuntTrends.
     */
    data: XOR<ProductHuntTrendUpdateManyMutationInput, ProductHuntTrendUncheckedUpdateManyInput>
    /**
     * Filter which ProductHuntTrends to update
     */
    where?: ProductHuntTrendWhereInput
    /**
     * Limit how many ProductHuntTrends to update.
     */
    limit?: number
  }

  /**
   * ProductHuntTrend upsert
   */
  export type ProductHuntTrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductHuntTrend to update in case it exists.
     */
    where: ProductHuntTrendWhereUniqueInput
    /**
     * In case the ProductHuntTrend found by the `where` argument doesn't exist, create a new ProductHuntTrend with this data.
     */
    create: XOR<ProductHuntTrendCreateInput, ProductHuntTrendUncheckedCreateInput>
    /**
     * In case the ProductHuntTrend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductHuntTrendUpdateInput, ProductHuntTrendUncheckedUpdateInput>
  }

  /**
   * ProductHuntTrend delete
   */
  export type ProductHuntTrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
    /**
     * Filter which ProductHuntTrend to delete.
     */
    where: ProductHuntTrendWhereUniqueInput
  }

  /**
   * ProductHuntTrend deleteMany
   */
  export type ProductHuntTrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductHuntTrends to delete
     */
    where?: ProductHuntTrendWhereInput
    /**
     * Limit how many ProductHuntTrends to delete.
     */
    limit?: number
  }

  /**
   * ProductHuntTrend without action
   */
  export type ProductHuntTrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductHuntTrend
     */
    select?: ProductHuntTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductHuntTrend
     */
    omit?: ProductHuntTrendOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    category: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    category?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    category?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    category: string
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "category" | "createdAt", ExtArgs["result"]["project"]>

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      category: string
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly category: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
  }


  /**
   * Model SavedTrend
   */

  export type AggregateSavedTrend = {
    _count: SavedTrendCountAggregateOutputType | null
    _min: SavedTrendMinAggregateOutputType | null
    _max: SavedTrendMaxAggregateOutputType | null
  }

  export type SavedTrendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    source: string | null
    trendId: string | null
    createdAt: Date | null
  }

  export type SavedTrendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    source: string | null
    trendId: string | null
    createdAt: Date | null
  }

  export type SavedTrendCountAggregateOutputType = {
    id: number
    userId: number
    source: number
    trendId: number
    createdAt: number
    _all: number
  }


  export type SavedTrendMinAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    trendId?: true
    createdAt?: true
  }

  export type SavedTrendMaxAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    trendId?: true
    createdAt?: true
  }

  export type SavedTrendCountAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    trendId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedTrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedTrend to aggregate.
     */
    where?: SavedTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedTrends to fetch.
     */
    orderBy?: SavedTrendOrderByWithRelationInput | SavedTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedTrends
    **/
    _count?: true | SavedTrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedTrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedTrendMaxAggregateInputType
  }

  export type GetSavedTrendAggregateType<T extends SavedTrendAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedTrend[P]>
      : GetScalarType<T[P], AggregateSavedTrend[P]>
  }




  export type SavedTrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedTrendWhereInput
    orderBy?: SavedTrendOrderByWithAggregationInput | SavedTrendOrderByWithAggregationInput[]
    by: SavedTrendScalarFieldEnum[] | SavedTrendScalarFieldEnum
    having?: SavedTrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedTrendCountAggregateInputType | true
    _min?: SavedTrendMinAggregateInputType
    _max?: SavedTrendMaxAggregateInputType
  }

  export type SavedTrendGroupByOutputType = {
    id: string
    userId: string
    source: string
    trendId: string
    createdAt: Date
    _count: SavedTrendCountAggregateOutputType | null
    _min: SavedTrendMinAggregateOutputType | null
    _max: SavedTrendMaxAggregateOutputType | null
  }

  type GetSavedTrendGroupByPayload<T extends SavedTrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedTrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedTrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedTrendGroupByOutputType[P]>
            : GetScalarType<T[P], SavedTrendGroupByOutputType[P]>
        }
      >
    >


  export type SavedTrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    trendId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedTrend"]>

  export type SavedTrendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    trendId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedTrend"]>

  export type SavedTrendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    trendId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["savedTrend"]>

  export type SavedTrendSelectScalar = {
    id?: boolean
    userId?: boolean
    source?: boolean
    trendId?: boolean
    createdAt?: boolean
  }

  export type SavedTrendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "source" | "trendId" | "createdAt", ExtArgs["result"]["savedTrend"]>

  export type $SavedTrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedTrend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      source: string
      trendId: string
      createdAt: Date
    }, ExtArgs["result"]["savedTrend"]>
    composites: {}
  }

  type SavedTrendGetPayload<S extends boolean | null | undefined | SavedTrendDefaultArgs> = $Result.GetResult<Prisma.$SavedTrendPayload, S>

  type SavedTrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedTrendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedTrendCountAggregateInputType | true
    }

  export interface SavedTrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedTrend'], meta: { name: 'SavedTrend' } }
    /**
     * Find zero or one SavedTrend that matches the filter.
     * @param {SavedTrendFindUniqueArgs} args - Arguments to find a SavedTrend
     * @example
     * // Get one SavedTrend
     * const savedTrend = await prisma.savedTrend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedTrendFindUniqueArgs>(args: SelectSubset<T, SavedTrendFindUniqueArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedTrend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedTrendFindUniqueOrThrowArgs} args - Arguments to find a SavedTrend
     * @example
     * // Get one SavedTrend
     * const savedTrend = await prisma.savedTrend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedTrendFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedTrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedTrend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendFindFirstArgs} args - Arguments to find a SavedTrend
     * @example
     * // Get one SavedTrend
     * const savedTrend = await prisma.savedTrend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedTrendFindFirstArgs>(args?: SelectSubset<T, SavedTrendFindFirstArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedTrend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendFindFirstOrThrowArgs} args - Arguments to find a SavedTrend
     * @example
     * // Get one SavedTrend
     * const savedTrend = await prisma.savedTrend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedTrendFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedTrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedTrends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedTrends
     * const savedTrends = await prisma.savedTrend.findMany()
     * 
     * // Get first 10 SavedTrends
     * const savedTrends = await prisma.savedTrend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedTrendWithIdOnly = await prisma.savedTrend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedTrendFindManyArgs>(args?: SelectSubset<T, SavedTrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedTrend.
     * @param {SavedTrendCreateArgs} args - Arguments to create a SavedTrend.
     * @example
     * // Create one SavedTrend
     * const SavedTrend = await prisma.savedTrend.create({
     *   data: {
     *     // ... data to create a SavedTrend
     *   }
     * })
     * 
     */
    create<T extends SavedTrendCreateArgs>(args: SelectSubset<T, SavedTrendCreateArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedTrends.
     * @param {SavedTrendCreateManyArgs} args - Arguments to create many SavedTrends.
     * @example
     * // Create many SavedTrends
     * const savedTrend = await prisma.savedTrend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedTrendCreateManyArgs>(args?: SelectSubset<T, SavedTrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedTrends and returns the data saved in the database.
     * @param {SavedTrendCreateManyAndReturnArgs} args - Arguments to create many SavedTrends.
     * @example
     * // Create many SavedTrends
     * const savedTrend = await prisma.savedTrend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedTrends and only return the `id`
     * const savedTrendWithIdOnly = await prisma.savedTrend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedTrendCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedTrendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedTrend.
     * @param {SavedTrendDeleteArgs} args - Arguments to delete one SavedTrend.
     * @example
     * // Delete one SavedTrend
     * const SavedTrend = await prisma.savedTrend.delete({
     *   where: {
     *     // ... filter to delete one SavedTrend
     *   }
     * })
     * 
     */
    delete<T extends SavedTrendDeleteArgs>(args: SelectSubset<T, SavedTrendDeleteArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedTrend.
     * @param {SavedTrendUpdateArgs} args - Arguments to update one SavedTrend.
     * @example
     * // Update one SavedTrend
     * const savedTrend = await prisma.savedTrend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedTrendUpdateArgs>(args: SelectSubset<T, SavedTrendUpdateArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedTrends.
     * @param {SavedTrendDeleteManyArgs} args - Arguments to filter SavedTrends to delete.
     * @example
     * // Delete a few SavedTrends
     * const { count } = await prisma.savedTrend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedTrendDeleteManyArgs>(args?: SelectSubset<T, SavedTrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedTrends
     * const savedTrend = await prisma.savedTrend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedTrendUpdateManyArgs>(args: SelectSubset<T, SavedTrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedTrends and returns the data updated in the database.
     * @param {SavedTrendUpdateManyAndReturnArgs} args - Arguments to update many SavedTrends.
     * @example
     * // Update many SavedTrends
     * const savedTrend = await prisma.savedTrend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedTrends and only return the `id`
     * const savedTrendWithIdOnly = await prisma.savedTrend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedTrendUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedTrendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedTrend.
     * @param {SavedTrendUpsertArgs} args - Arguments to update or create a SavedTrend.
     * @example
     * // Update or create a SavedTrend
     * const savedTrend = await prisma.savedTrend.upsert({
     *   create: {
     *     // ... data to create a SavedTrend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedTrend we want to update
     *   }
     * })
     */
    upsert<T extends SavedTrendUpsertArgs>(args: SelectSubset<T, SavedTrendUpsertArgs<ExtArgs>>): Prisma__SavedTrendClient<$Result.GetResult<Prisma.$SavedTrendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendCountArgs} args - Arguments to filter SavedTrends to count.
     * @example
     * // Count the number of SavedTrends
     * const count = await prisma.savedTrend.count({
     *   where: {
     *     // ... the filter for the SavedTrends we want to count
     *   }
     * })
    **/
    count<T extends SavedTrendCountArgs>(
      args?: Subset<T, SavedTrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedTrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedTrendAggregateArgs>(args: Subset<T, SavedTrendAggregateArgs>): Prisma.PrismaPromise<GetSavedTrendAggregateType<T>>

    /**
     * Group by SavedTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedTrendGroupByArgs} args - Group by arguments.
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
      T extends SavedTrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedTrendGroupByArgs['orderBy'] }
        : { orderBy?: SavedTrendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedTrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedTrend model
   */
  readonly fields: SavedTrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedTrend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedTrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SavedTrend model
   */
  interface SavedTrendFieldRefs {
    readonly id: FieldRef<"SavedTrend", 'String'>
    readonly userId: FieldRef<"SavedTrend", 'String'>
    readonly source: FieldRef<"SavedTrend", 'String'>
    readonly trendId: FieldRef<"SavedTrend", 'String'>
    readonly createdAt: FieldRef<"SavedTrend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedTrend findUnique
   */
  export type SavedTrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * Filter, which SavedTrend to fetch.
     */
    where: SavedTrendWhereUniqueInput
  }

  /**
   * SavedTrend findUniqueOrThrow
   */
  export type SavedTrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * Filter, which SavedTrend to fetch.
     */
    where: SavedTrendWhereUniqueInput
  }

  /**
   * SavedTrend findFirst
   */
  export type SavedTrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * Filter, which SavedTrend to fetch.
     */
    where?: SavedTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedTrends to fetch.
     */
    orderBy?: SavedTrendOrderByWithRelationInput | SavedTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedTrends.
     */
    cursor?: SavedTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedTrends.
     */
    distinct?: SavedTrendScalarFieldEnum | SavedTrendScalarFieldEnum[]
  }

  /**
   * SavedTrend findFirstOrThrow
   */
  export type SavedTrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * Filter, which SavedTrend to fetch.
     */
    where?: SavedTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedTrends to fetch.
     */
    orderBy?: SavedTrendOrderByWithRelationInput | SavedTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedTrends.
     */
    cursor?: SavedTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedTrends.
     */
    distinct?: SavedTrendScalarFieldEnum | SavedTrendScalarFieldEnum[]
  }

  /**
   * SavedTrend findMany
   */
  export type SavedTrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * Filter, which SavedTrends to fetch.
     */
    where?: SavedTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedTrends to fetch.
     */
    orderBy?: SavedTrendOrderByWithRelationInput | SavedTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedTrends.
     */
    cursor?: SavedTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedTrends.
     */
    skip?: number
    distinct?: SavedTrendScalarFieldEnum | SavedTrendScalarFieldEnum[]
  }

  /**
   * SavedTrend create
   */
  export type SavedTrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * The data needed to create a SavedTrend.
     */
    data: XOR<SavedTrendCreateInput, SavedTrendUncheckedCreateInput>
  }

  /**
   * SavedTrend createMany
   */
  export type SavedTrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedTrends.
     */
    data: SavedTrendCreateManyInput | SavedTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedTrend createManyAndReturn
   */
  export type SavedTrendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * The data used to create many SavedTrends.
     */
    data: SavedTrendCreateManyInput | SavedTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedTrend update
   */
  export type SavedTrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * The data needed to update a SavedTrend.
     */
    data: XOR<SavedTrendUpdateInput, SavedTrendUncheckedUpdateInput>
    /**
     * Choose, which SavedTrend to update.
     */
    where: SavedTrendWhereUniqueInput
  }

  /**
   * SavedTrend updateMany
   */
  export type SavedTrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedTrends.
     */
    data: XOR<SavedTrendUpdateManyMutationInput, SavedTrendUncheckedUpdateManyInput>
    /**
     * Filter which SavedTrends to update
     */
    where?: SavedTrendWhereInput
    /**
     * Limit how many SavedTrends to update.
     */
    limit?: number
  }

  /**
   * SavedTrend updateManyAndReturn
   */
  export type SavedTrendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * The data used to update SavedTrends.
     */
    data: XOR<SavedTrendUpdateManyMutationInput, SavedTrendUncheckedUpdateManyInput>
    /**
     * Filter which SavedTrends to update
     */
    where?: SavedTrendWhereInput
    /**
     * Limit how many SavedTrends to update.
     */
    limit?: number
  }

  /**
   * SavedTrend upsert
   */
  export type SavedTrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * The filter to search for the SavedTrend to update in case it exists.
     */
    where: SavedTrendWhereUniqueInput
    /**
     * In case the SavedTrend found by the `where` argument doesn't exist, create a new SavedTrend with this data.
     */
    create: XOR<SavedTrendCreateInput, SavedTrendUncheckedCreateInput>
    /**
     * In case the SavedTrend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedTrendUpdateInput, SavedTrendUncheckedUpdateInput>
  }

  /**
   * SavedTrend delete
   */
  export type SavedTrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
    /**
     * Filter which SavedTrend to delete.
     */
    where: SavedTrendWhereUniqueInput
  }

  /**
   * SavedTrend deleteMany
   */
  export type SavedTrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedTrends to delete
     */
    where?: SavedTrendWhereInput
    /**
     * Limit how many SavedTrends to delete.
     */
    limit?: number
  }

  /**
   * SavedTrend without action
   */
  export type SavedTrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedTrend
     */
    select?: SavedTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedTrend
     */
    omit?: SavedTrendOmit<ExtArgs> | null
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


  export const RedditTrendScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subreddit: 'subreddit',
    score: 'score',
    url: 'url',
    createdAt: 'createdAt',
    categories: 'categories',
    description: 'description',
    monetizationIdea: 'monetizationIdea',
    builderFilter: 'builderFilter',
    feasibility: 'feasibility',
    urgency: 'urgency',
    rating: 'rating'
  };

  export type RedditTrendScalarFieldEnum = (typeof RedditTrendScalarFieldEnum)[keyof typeof RedditTrendScalarFieldEnum]


  export const ProductHuntTrendScalarFieldEnum: {
    id: 'id',
    title: 'title',
    tagline: 'tagline',
    url: 'url',
    upvotes: 'upvotes',
    categories: 'categories',
    description: 'description',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type ProductHuntTrendScalarFieldEnum = (typeof ProductHuntTrendScalarFieldEnum)[keyof typeof ProductHuntTrendScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SavedTrendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    source: 'source',
    trendId: 'trendId',
    createdAt: 'createdAt'
  };

  export type SavedTrendScalarFieldEnum = (typeof SavedTrendScalarFieldEnum)[keyof typeof SavedTrendScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type RedditTrendWhereInput = {
    AND?: RedditTrendWhereInput | RedditTrendWhereInput[]
    OR?: RedditTrendWhereInput[]
    NOT?: RedditTrendWhereInput | RedditTrendWhereInput[]
    id?: StringFilter<"RedditTrend"> | string
    title?: StringFilter<"RedditTrend"> | string
    subreddit?: StringFilter<"RedditTrend"> | string
    score?: IntFilter<"RedditTrend"> | number
    url?: StringFilter<"RedditTrend"> | string
    createdAt?: DateTimeFilter<"RedditTrend"> | Date | string
    categories?: StringNullableListFilter<"RedditTrend">
    description?: StringFilter<"RedditTrend"> | string
    monetizationIdea?: StringNullableFilter<"RedditTrend"> | string | null
    builderFilter?: StringNullableFilter<"RedditTrend"> | string | null
    feasibility?: IntNullableFilter<"RedditTrend"> | number | null
    urgency?: IntNullableFilter<"RedditTrend"> | number | null
    rating?: IntFilter<"RedditTrend"> | number
  }

  export type RedditTrendOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subreddit?: SortOrder
    score?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    categories?: SortOrder
    description?: SortOrder
    monetizationIdea?: SortOrderInput | SortOrder
    builderFilter?: SortOrderInput | SortOrder
    feasibility?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    rating?: SortOrder
  }

  export type RedditTrendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RedditTrendWhereInput | RedditTrendWhereInput[]
    OR?: RedditTrendWhereInput[]
    NOT?: RedditTrendWhereInput | RedditTrendWhereInput[]
    title?: StringFilter<"RedditTrend"> | string
    subreddit?: StringFilter<"RedditTrend"> | string
    score?: IntFilter<"RedditTrend"> | number
    url?: StringFilter<"RedditTrend"> | string
    createdAt?: DateTimeFilter<"RedditTrend"> | Date | string
    categories?: StringNullableListFilter<"RedditTrend">
    description?: StringFilter<"RedditTrend"> | string
    monetizationIdea?: StringNullableFilter<"RedditTrend"> | string | null
    builderFilter?: StringNullableFilter<"RedditTrend"> | string | null
    feasibility?: IntNullableFilter<"RedditTrend"> | number | null
    urgency?: IntNullableFilter<"RedditTrend"> | number | null
    rating?: IntFilter<"RedditTrend"> | number
  }, "id">

  export type RedditTrendOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subreddit?: SortOrder
    score?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    categories?: SortOrder
    description?: SortOrder
    monetizationIdea?: SortOrderInput | SortOrder
    builderFilter?: SortOrderInput | SortOrder
    feasibility?: SortOrderInput | SortOrder
    urgency?: SortOrderInput | SortOrder
    rating?: SortOrder
    _count?: RedditTrendCountOrderByAggregateInput
    _avg?: RedditTrendAvgOrderByAggregateInput
    _max?: RedditTrendMaxOrderByAggregateInput
    _min?: RedditTrendMinOrderByAggregateInput
    _sum?: RedditTrendSumOrderByAggregateInput
  }

  export type RedditTrendScalarWhereWithAggregatesInput = {
    AND?: RedditTrendScalarWhereWithAggregatesInput | RedditTrendScalarWhereWithAggregatesInput[]
    OR?: RedditTrendScalarWhereWithAggregatesInput[]
    NOT?: RedditTrendScalarWhereWithAggregatesInput | RedditTrendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RedditTrend"> | string
    title?: StringWithAggregatesFilter<"RedditTrend"> | string
    subreddit?: StringWithAggregatesFilter<"RedditTrend"> | string
    score?: IntWithAggregatesFilter<"RedditTrend"> | number
    url?: StringWithAggregatesFilter<"RedditTrend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RedditTrend"> | Date | string
    categories?: StringNullableListFilter<"RedditTrend">
    description?: StringWithAggregatesFilter<"RedditTrend"> | string
    monetizationIdea?: StringNullableWithAggregatesFilter<"RedditTrend"> | string | null
    builderFilter?: StringNullableWithAggregatesFilter<"RedditTrend"> | string | null
    feasibility?: IntNullableWithAggregatesFilter<"RedditTrend"> | number | null
    urgency?: IntNullableWithAggregatesFilter<"RedditTrend"> | number | null
    rating?: IntWithAggregatesFilter<"RedditTrend"> | number
  }

  export type ProductHuntTrendWhereInput = {
    AND?: ProductHuntTrendWhereInput | ProductHuntTrendWhereInput[]
    OR?: ProductHuntTrendWhereInput[]
    NOT?: ProductHuntTrendWhereInput | ProductHuntTrendWhereInput[]
    id?: StringFilter<"ProductHuntTrend"> | string
    title?: StringFilter<"ProductHuntTrend"> | string
    tagline?: StringFilter<"ProductHuntTrend"> | string
    url?: StringFilter<"ProductHuntTrend"> | string
    upvotes?: IntFilter<"ProductHuntTrend"> | number
    categories?: StringNullableListFilter<"ProductHuntTrend">
    description?: StringFilter<"ProductHuntTrend"> | string
    rating?: IntFilter<"ProductHuntTrend"> | number
    createdAt?: DateTimeFilter<"ProductHuntTrend"> | Date | string
  }

  export type ProductHuntTrendOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    categories?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHuntTrendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: ProductHuntTrendWhereInput | ProductHuntTrendWhereInput[]
    OR?: ProductHuntTrendWhereInput[]
    NOT?: ProductHuntTrendWhereInput | ProductHuntTrendWhereInput[]
    title?: StringFilter<"ProductHuntTrend"> | string
    tagline?: StringFilter<"ProductHuntTrend"> | string
    upvotes?: IntFilter<"ProductHuntTrend"> | number
    categories?: StringNullableListFilter<"ProductHuntTrend">
    description?: StringFilter<"ProductHuntTrend"> | string
    rating?: IntFilter<"ProductHuntTrend"> | number
    createdAt?: DateTimeFilter<"ProductHuntTrend"> | Date | string
  }, "id" | "url">

  export type ProductHuntTrendOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    categories?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: ProductHuntTrendCountOrderByAggregateInput
    _avg?: ProductHuntTrendAvgOrderByAggregateInput
    _max?: ProductHuntTrendMaxOrderByAggregateInput
    _min?: ProductHuntTrendMinOrderByAggregateInput
    _sum?: ProductHuntTrendSumOrderByAggregateInput
  }

  export type ProductHuntTrendScalarWhereWithAggregatesInput = {
    AND?: ProductHuntTrendScalarWhereWithAggregatesInput | ProductHuntTrendScalarWhereWithAggregatesInput[]
    OR?: ProductHuntTrendScalarWhereWithAggregatesInput[]
    NOT?: ProductHuntTrendScalarWhereWithAggregatesInput | ProductHuntTrendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductHuntTrend"> | string
    title?: StringWithAggregatesFilter<"ProductHuntTrend"> | string
    tagline?: StringWithAggregatesFilter<"ProductHuntTrend"> | string
    url?: StringWithAggregatesFilter<"ProductHuntTrend"> | string
    upvotes?: IntWithAggregatesFilter<"ProductHuntTrend"> | number
    categories?: StringNullableListFilter<"ProductHuntTrend">
    description?: StringWithAggregatesFilter<"ProductHuntTrend"> | string
    rating?: IntWithAggregatesFilter<"ProductHuntTrend"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductHuntTrend"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: UuidFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    category?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: UuidFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    category?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: UuidWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    category?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type SavedTrendWhereInput = {
    AND?: SavedTrendWhereInput | SavedTrendWhereInput[]
    OR?: SavedTrendWhereInput[]
    NOT?: SavedTrendWhereInput | SavedTrendWhereInput[]
    id?: StringFilter<"SavedTrend"> | string
    userId?: StringFilter<"SavedTrend"> | string
    source?: StringFilter<"SavedTrend"> | string
    trendId?: StringFilter<"SavedTrend"> | string
    createdAt?: DateTimeFilter<"SavedTrend"> | Date | string
  }

  export type SavedTrendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    trendId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedTrendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_source_trendId?: SavedTrendUserIdSourceTrendIdCompoundUniqueInput
    AND?: SavedTrendWhereInput | SavedTrendWhereInput[]
    OR?: SavedTrendWhereInput[]
    NOT?: SavedTrendWhereInput | SavedTrendWhereInput[]
    userId?: StringFilter<"SavedTrend"> | string
    source?: StringFilter<"SavedTrend"> | string
    trendId?: StringFilter<"SavedTrend"> | string
    createdAt?: DateTimeFilter<"SavedTrend"> | Date | string
  }, "id" | "userId_source_trendId">

  export type SavedTrendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    trendId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedTrendCountOrderByAggregateInput
    _max?: SavedTrendMaxOrderByAggregateInput
    _min?: SavedTrendMinOrderByAggregateInput
  }

  export type SavedTrendScalarWhereWithAggregatesInput = {
    AND?: SavedTrendScalarWhereWithAggregatesInput | SavedTrendScalarWhereWithAggregatesInput[]
    OR?: SavedTrendScalarWhereWithAggregatesInput[]
    NOT?: SavedTrendScalarWhereWithAggregatesInput | SavedTrendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedTrend"> | string
    userId?: StringWithAggregatesFilter<"SavedTrend"> | string
    source?: StringWithAggregatesFilter<"SavedTrend"> | string
    trendId?: StringWithAggregatesFilter<"SavedTrend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedTrend"> | Date | string
  }

  export type RedditTrendCreateInput = {
    id?: string
    title: string
    subreddit: string
    score: number
    url: string
    createdAt?: Date | string
    categories?: RedditTrendCreatecategoriesInput | string[]
    description: string
    monetizationIdea?: string | null
    builderFilter?: string | null
    feasibility?: number | null
    urgency?: number | null
    rating: number
  }

  export type RedditTrendUncheckedCreateInput = {
    id?: string
    title: string
    subreddit: string
    score: number
    url: string
    createdAt?: Date | string
    categories?: RedditTrendCreatecategoriesInput | string[]
    description: string
    monetizationIdea?: string | null
    builderFilter?: string | null
    feasibility?: number | null
    urgency?: number | null
    rating: number
  }

  export type RedditTrendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subreddit?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: RedditTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    monetizationIdea?: NullableStringFieldUpdateOperationsInput | string | null
    builderFilter?: NullableStringFieldUpdateOperationsInput | string | null
    feasibility?: NullableIntFieldUpdateOperationsInput | number | null
    urgency?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RedditTrendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subreddit?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: RedditTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    monetizationIdea?: NullableStringFieldUpdateOperationsInput | string | null
    builderFilter?: NullableStringFieldUpdateOperationsInput | string | null
    feasibility?: NullableIntFieldUpdateOperationsInput | number | null
    urgency?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RedditTrendCreateManyInput = {
    id?: string
    title: string
    subreddit: string
    score: number
    url: string
    createdAt?: Date | string
    categories?: RedditTrendCreatecategoriesInput | string[]
    description: string
    monetizationIdea?: string | null
    builderFilter?: string | null
    feasibility?: number | null
    urgency?: number | null
    rating: number
  }

  export type RedditTrendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subreddit?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: RedditTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    monetizationIdea?: NullableStringFieldUpdateOperationsInput | string | null
    builderFilter?: NullableStringFieldUpdateOperationsInput | string | null
    feasibility?: NullableIntFieldUpdateOperationsInput | number | null
    urgency?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RedditTrendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subreddit?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: RedditTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    monetizationIdea?: NullableStringFieldUpdateOperationsInput | string | null
    builderFilter?: NullableStringFieldUpdateOperationsInput | string | null
    feasibility?: NullableIntFieldUpdateOperationsInput | number | null
    urgency?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type ProductHuntTrendCreateInput = {
    id?: string
    title: string
    tagline: string
    url: string
    upvotes: number
    categories?: ProductHuntTrendCreatecategoriesInput | string[]
    description: string
    rating: number
    createdAt?: Date | string
  }

  export type ProductHuntTrendUncheckedCreateInput = {
    id?: string
    title: string
    tagline: string
    url: string
    upvotes: number
    categories?: ProductHuntTrendCreatecategoriesInput | string[]
    description: string
    rating: number
    createdAt?: Date | string
  }

  export type ProductHuntTrendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    categories?: ProductHuntTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHuntTrendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    categories?: ProductHuntTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHuntTrendCreateManyInput = {
    id?: string
    title: string
    tagline: string
    url: string
    upvotes: number
    categories?: ProductHuntTrendCreatecategoriesInput | string[]
    description: string
    rating: number
    createdAt?: Date | string
  }

  export type ProductHuntTrendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    categories?: ProductHuntTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductHuntTrendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    categories?: ProductHuntTrendUpdatecategoriesInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    category: string
    createdAt?: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    category: string
    createdAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    category: string
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedTrendCreateInput = {
    id?: string
    userId: string
    source: string
    trendId: string
    createdAt?: Date | string
  }

  export type SavedTrendUncheckedCreateInput = {
    id?: string
    userId: string
    source: string
    trendId: string
    createdAt?: Date | string
  }

  export type SavedTrendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedTrendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedTrendCreateManyInput = {
    id?: string
    userId: string
    source: string
    trendId: string
    createdAt?: Date | string
  }

  export type SavedTrendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedTrendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    trendId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RedditTrendCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subreddit?: SortOrder
    score?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    categories?: SortOrder
    description?: SortOrder
    monetizationIdea?: SortOrder
    builderFilter?: SortOrder
    feasibility?: SortOrder
    urgency?: SortOrder
    rating?: SortOrder
  }

  export type RedditTrendAvgOrderByAggregateInput = {
    score?: SortOrder
    feasibility?: SortOrder
    urgency?: SortOrder
    rating?: SortOrder
  }

  export type RedditTrendMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subreddit?: SortOrder
    score?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    monetizationIdea?: SortOrder
    builderFilter?: SortOrder
    feasibility?: SortOrder
    urgency?: SortOrder
    rating?: SortOrder
  }

  export type RedditTrendMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subreddit?: SortOrder
    score?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    monetizationIdea?: SortOrder
    builderFilter?: SortOrder
    feasibility?: SortOrder
    urgency?: SortOrder
    rating?: SortOrder
  }

  export type RedditTrendSumOrderByAggregateInput = {
    score?: SortOrder
    feasibility?: SortOrder
    urgency?: SortOrder
    rating?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductHuntTrendCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    categories?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHuntTrendAvgOrderByAggregateInput = {
    upvotes?: SortOrder
    rating?: SortOrder
  }

  export type ProductHuntTrendMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHuntTrendMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    url?: SortOrder
    upvotes?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductHuntTrendSumOrderByAggregateInput = {
    upvotes?: SortOrder
    rating?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SavedTrendUserIdSourceTrendIdCompoundUniqueInput = {
    userId: string
    source: string
    trendId: string
  }

  export type SavedTrendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    trendId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedTrendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    trendId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedTrendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    trendId?: SortOrder
    createdAt?: SortOrder
  }

  export type RedditTrendCreatecategoriesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RedditTrendUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductHuntTrendCreatecategoriesInput = {
    set: string[]
  }

  export type ProductHuntTrendUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



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