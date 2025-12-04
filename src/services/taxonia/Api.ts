/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** HealthCheckResponse */
export interface HealthCheckResponse {
  db_ok: boolean;
  redis_ok: boolean;
  server_ok: boolean;
}

/** ListQuizResultsResponse */
export interface ListQuizResultsResponse {
  items: QuizResultResponse[];
}

/** LoginUrlResponse */
export interface LoginUrlResponse {
  url: string;
}

/** MeResponse */
export interface MeResponse {
  /** @format int64 */
  id: number;
  display_name: string;
  primary_email?: string;
}

/** QuizResultResponse */
export interface QuizResultResponse {
  /** @format int64 */
  id: number;
  quiz_type: string;
  params: any;
  /** @format double */
  score: number;
  /** @format int32 */
  question_count?: number;
  /** @format int32 */
  duration_seconds?: number;
  /** @format date-time */
  created_at: string;
}

/** SaveQuizResultRequest */
export interface SaveQuizResultRequest {
  /** A string identifier for the quiz mode, e.g. "inat_observations" */
  quiz_type: string;
  /** Arbitrary quiz configuration (taxon filters, place, etc.) */
  params: any;
  /**
   * Final score from 0.0 to 1.0
   * @format double
   */
  score: number;
  /**
   * Optional total number of questions
   * @format int32
   */
  question_count?: number;
  /**
   * Optional duration in seconds
   * @format int32
   */
  duration_seconds?: number;
}

/** SaveQuizResultResponse */
export interface SaveQuizResultResponse {
  /** @format int64 */
  id: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "0.0.0.0:8080/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Taxonia API
 * @version 1.0
 * @baseUrl 0.0.0.0:8080/api
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  healthCheck = {
    /**
     * No description
     *
     * @name HealthCheck
     * @summary Health check endpoint
     * @request GET:/health_check
     */
    healthCheck: (params: RequestParams = {}) =>
      this.request<HealthCheckResponse, any>({
        path: `/health_check`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @name LoginUrlList
     * @request GET:/auth/login-url
     */
    loginUrlList: (params: RequestParams = {}) =>
      this.request<LoginUrlResponse, any>({
        path: `/auth/login-url`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CallbackList
     * @summary iNaturalist OAuth callback
     * @request GET:/auth/callback
     */
    callbackList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/callback`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetAuth
     * @summary Get current logged-in user
     * @request GET:/auth/me
     */
    getAuth: (params: RequestParams = {}) =>
      this.request<MeResponse, any>({
        path: `/auth/me`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  quiz = {
    /**
     * No description
     *
     * @name ResultsCreate
     * @request POST:/quiz/results
     */
    resultsCreate: (data: SaveQuizResultRequest, params: RequestParams = {}) =>
      this.request<SaveQuizResultResponse, any>({
        path: `/quiz/results`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ResultsList
     * @summary List recent quiz results for the current user
     * @request GET:/quiz/results
     */
    resultsList: (params: RequestParams = {}) =>
      this.request<ListQuizResultsResponse, any>({
        path: `/quiz/results`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
