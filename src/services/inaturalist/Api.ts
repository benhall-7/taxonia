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

export type AutocompleteTaxon = CoreTaxon & {
  default_photo?: TaxonPhoto;
  matched_term?: string;
  observations_count?: number;
};

export interface BaseResponse {
  total_results?: number;
  page?: number;
  per_page?: number;
}

export interface Color {
  id?: number;
  value?: string;
}

export interface Comment {
  id?: number;
  /** @format date-time */
  created_at?: string;
  created_at_details?: DateDetails;
  user?: User;
}

export interface PostAnnotation {
  annotation?: {
    resource_type?: "Observation";
    resource_id?: number;
    controlled_attribute_id?: number;
    controlled_value_id?: number;
  };
}

export interface PostComment {
  comment?: {
    parent_type?: "Observation" | "ListedTaxon" | "AssessmentSection" | "ObservationField" | "Post" | "TaxonChange";
    parent_id?: number;
    body?: string;
  };
}

export interface PostFlag {
  flag?: {
    flaggable_type?: "Comment" | "Identification" | "Message" | "Observation" | "Post" | "Taxon";
    flaggable_id?: number;
    flag?: "spam" | "inappropriate" | "other";
  };
  flag_explanation?: string;
}

export interface PostIdentification {
  identification?: {
    observation_id?: number;
    taxon_id?: number;
    current?: boolean;
    body?: string;
  };
}

export interface PostMessage {
  message?: {
    /** User ID of the recipient */
    to_user_id?: number;
    /**
     * Identifier for the thread. Should be blank for new threads,
     * but when replying to an existing message, it should be set to
     * the thread_id of the message being replied to.
     */
    thread_id?: number;
    /** Subject of the message */
    subject?: string;
    /** Body of the message */
    body?: string;
  };
}

export interface PostPost {
  /** @example "Publish" */
  commit?: string;
  post?: {
    title?: string;
    body?: string;
    /** @example "simple" */
    preferred_formatting?: string;
    user_id?: number;
    parent_id?: number;
    /** @example "Project" */
    parent_type?: string;
  };
}

export interface PostObservation {
  observation?: {
    species_guess?: string;
    taxon_id?: number;
    description?: string;
  };
}

export interface PostObservationFieldValue {
  observation_field_value?: {
    observation_id?: number;
    observation_field_id?: number;
    value?: string;
  };
}

export interface PostObservationPhoto {
  observation_photo?: {
    observation_id?: number;
  };
}

export interface PostObservationVote {
  vote?: "up" | "down";
  scope?: "needs_id";
}

export interface PostProjectAdd {
  observation_id?: number;
}

export interface PostProjectObservation {
  project_id?: number;
  observation_id?: number;
}

export interface UpdateProjectObservation {
  project_observation?: {
    project_id?: number;
    observation_id?: number;
    prefers_curator_coordinate_access?: boolean;
  };
}

export interface PostQuality {
  agree?: boolean;
}

export interface PostVote {
  vote?: "up" | "down";
}

export interface PostUser {
  user?: {
    login?: string;
    email?: string;
    /** Display name for this user */
    name?: string;
    /**
     * Locale code for language/region localization. See
     * https://github.com/inaturalist/inaturalist/tree/master/config/locales
     * for available locales. Valid strings can be derived from file
     * names, e.g. `es-MX` from `es-MX.yml`.
     */
    locale?: string;
    /**
     * Default time zone for the user's observations. See
     * http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
     * for a list of values.
     */
    time_zone?: string;
    /**
     * ID of the place for this user, customizes some common names and
     * default search parameters
     */
    place_id?: number;
    /** User profile description */
    description?: string;
    /** User's profile pic. Requires POST/PUT as a multipart request. */
    icon?: object;
  };
  /**
   * Set to true to remove the current user icon.
   * @default false
   */
  icon_delete?: boolean;
}

export interface PostUserUpdateSession {
  preferred_taxon_page_ancestors_shown?: boolean;
  preferred_taxon_page_place_id?: number;
  preferred_taxon_page_tab?: string;
  prefers_skip_coarer_id_modal?: boolean;
  prefers_hide_obs_show_annotations?: boolean;
  prefers_hide_obs_show_projects?: boolean;
  prefers_hide_obs_show_tags?: boolean;
  prefers_hide_obs_show_observation_fields?: boolean;
  prefers_hide_obs_show_identifiers?: boolean;
  prefers_hide_obs_show_copyright?: boolean;
  prefers_hide_obs_show_quality_metrics?: boolean;
}

export interface PutFlag {
  flag?: {
    resolved?: boolean;
  };
}

export interface ConservationStatus {
  place_id?: number;
  place?: CorePlace;
  status?: string;
}

export interface CorePlace {
  id?: number;
  name?: string;
  display_name?: string;
}

export interface CoreTaxon {
  id?: number;
  iconic_taxon_id?: number;
  iconic_taxon_name?: string;
  is_active?: boolean;
  name?: string;
  preferred_common_name?: string;
  rank?: string;
  rank_level?: number;
}

export interface DateDetails {
  /** @format date */
  date?: string;
  day?: number;
  hour?: number;
  month?: number;
  week?: number;
  year?: number;
}

export interface EstablishmentMeans {
  establishment_means?: string;
  place?: CorePlace;
}

export interface Fave {
  id?: number;
  votable_id?: number;
  /** @format date-time */
  created_at?: string;
  user?: User;
}

export interface FieldValue {
  name?: string;
  value?: string;
}

export interface Identification {
  id?: number;
  observation_id?: number;
  body?: string;
  /** @format date-time */
  created_at?: string;
  /** @format date-time */
  updated_at?: string;
  current?: boolean;
  taxon?: ObservationTaxon;
}

export interface Message {
  id?: number;
  subject?: string;
  body?: string;
  /**
   * ID of the user to whom this message belongs. Messages work like email,
   * so the sender gets a copy and the recipient gets a copy of each
   * message. This is always the authenticated user, so there's no real
   * need for a full user object.
   */
  user_id?: number;
  to_user?: User;
  from_user?: User;
  /**
   * Identifier for the message thread, generally the ID of the sender's
   * copy of the first message
   */
  thread_id?: number;
  /** Number of messages in this thread. Only included when threads=true */
  thread_messages_count?: number;
  /**
   * Array of flags on messages in this thread. Only included when
   * threads=true
   */
  thread_flags?: object[];
}

export interface NonOwnerIdentification {
  id?: number;
  body?: string;
  /** @format date-time */
  created_at?: string;
  created_at_details?: DateDetails;
  user?: User;
}

export interface Observation {
  id?: number;
  cached_votes_total?: number;
  captive?: boolean;
  comments?: Comment[];
  comments_count?: number;
  /** @format date-time */
  created_at?: string;
  created_at_details?: DateDetails;
  created_time_zone?: string;
  description?: string;
  faves_count?: number;
  geojson?: PointGeoJson;
  geoprivacy?: string;
  taxon_geoprivacy?: string;
  id_please?: boolean;
  identifications_count?: number;
  identifications_most_agree?: boolean;
  identifications_most_disagree?: boolean;
  identifications_some_agree?: boolean;
  license_code?: string;
  /** in the format "lat,lng" */
  location?: string;
  mappable?: boolean;
  non_owner_ids?: NonOwnerIdentification[];
  num_identification_agreements?: number;
  num_identification_disagreements?: number;
  obscured?: boolean;
  /** @format date-time */
  observed_on?: string;
  observed_on_details?: DateDetails;
  observed_on_string?: string;
  observed_time_zone?: string;
  ofvs?: FieldValue[];
  out_of_range?: boolean;
  photos?: Photo[];
  place_guess?: string;
  place_ids?: number[];
  project_ids?: number[];
  project_ids_with_curator_id?: number[];
  project_ids_without_curator_id?: number[];
  quality_grade?: string;
  reviewed_by?: number[];
  site_id?: number;
  sounds?: Sound[];
  species_guess?: string;
  tags?: string[];
  taxon?: ObservationTaxon;
  /** @format date-time */
  time_observed_at?: string;
  time_zone_offset?: string;
  /** @format date-time */
  updated_at?: string;
  uri?: string;
  user?: User;
  verifiable?: boolean;
}

export type ObservationTaxon = CoreTaxon & {
  ancestor_ids?: number[];
  ancestry?: string;
  conservation_status?: RawConservationStatus;
  endemic?: boolean;
  establishment_means?: EstablishmentMeans;
  introduced?: boolean;
  native?: boolean;
  threatened?: boolean;
};

export interface Photo {
  id?: number;
  attribution?: string;
  license_code?: string;
  url?: string;
}

export interface PointGeoJson {
  type?: string;
  /** an array of [long, lat] */
  coordinates?: number[];
}

export interface PolygonGeoJson {
  type?: string;
  coordinates?: number[][][];
}

export interface Project {
  id?: number;
  title?: string;
  description?: string;
  slug?: string;
}

export interface ProjectMember {
  id?: number;
  project_id?: number;
  /** @format date-time */
  created_at?: string;
  /** @format date-time */
  updated_at?: string;
  role?: "curator" | "manager";
  observations_count?: number;
  taxa_count?: number;
  user?: User;
}

export interface RawConservationStatus {
  /**
   * Identifier for the iNat source record associated with this status,
   * retrievable via https://www.inaturalist.org/sources/:id.json
   * (this endpoint is not a part of our public API and is thus subject to
   * change or removal)
   */
  source_id?: number;
  /** Organization that declared this status */
  authority?: string;
  /**
   * Body of the status, often coded, particularly when the status comes
   * from the IUCN or NatureServe. Consult the authority and/or the
   * status URL for details about the meanings of codes.
   */
  status?: string;
  /** Human-readable name of the status if it was coded. */
  status_name?: string;
  /**
   * Coded value representing the equivalent IUCN status. Mappings:
   * NOT_EVALUATED = 0, DATA_DEFICIENT = 5, LEAST_CONCERN = 10,
   * NEAR_THREATENED = 20, VULNERABLE = 30, ENDANGERED = 40,
   * CRITICALLY_ENDANGERED = 50, EXTINCT_IN_THE_WILD = 60, EXTINCT = 70
   */
  iucn?: number;
  /** Default geoprivacy for observations of this taxon in the status's place. */
  geoprivacy?: string;
}

export type TaxonConservationStatus = RawConservationStatus & {
  place?: CorePlace;
};

export type ShowObservation = Observation & {
  identifications?: Identification[];
  faves?: Fave[];
};

export type ShowPlace = CorePlace & {
  admin_level?: number;
  ancestor_place_ids?: number[];
  /** @format double */
  bbox_area?: number;
  geometry_geojson?: PolygonGeoJson;
  /** in the format "lat,lng" */
  location?: string;
  name?: string;
  place_type?: number;
};

export type ShowTaxon = CoreTaxon & {
  ancestor_ids?: number[];
  colors?: Color[];
  conservation_status?: ConservationStatus;
  conservation_statuses?: TaxonConservationStatus[];
  default_photo?: TaxonPhoto;
  establishment_means?: EstablishmentMeans;
  observations_count?: number;
  preferred_establishment_means?: string;
};

export interface Sound {
  id?: number;
  attribution?: string;
  license_code?: string;
}

export type TaxonPhoto = Photo & {
  medium_url?: string;
  square_url?: string;
};

export interface User {
  id?: number;
  icon_content_type?: string;
  icon_file_name?: string;
  icon?: string;
  icon_url?: string;
  login?: string;
  name?: string;
}

export type MessagesResponse = BaseResponse & {
  results: Message[];
};

export type NearbyPlacesResponse = BaseResponse & {
  results: {
    standard?: ShowPlace[];
    community?: ShowPlace[];
  };
};

export type ObservationsResponse = BaseResponse & {
  results: Observation[];
};

export type ObservationsShowResponse = BaseResponse & {
  results: ShowObservation[];
};

export type UserCountsResponse = BaseResponse & {
  results: {
    count?: number;
    user?: User;
  }[];
};

export type ObservationsObserversResponse = BaseResponse & {
  results: {
    observation_count?: number;
    species_count?: number;
    user?: User;
  }[];
};

export type SpeciesCountsResponse = BaseResponse & {
  results: {
    count?: number;
    taxon?: ShowTaxon;
  }[];
};

export type PlacesResponse = BaseResponse & {
  results: ShowPlace[];
};

export type ProjectMembersResponse = BaseResponse & {
  results: ProjectMember[];
};

export type ProjectsResponse = BaseResponse & {
  results: Project[];
};

export type TaxaAutocompleteResponse = BaseResponse & {
  results: AutocompleteTaxon[];
};

export type TaxaShowResponse = BaseResponse & {
  results: ShowTaxon[];
};

export interface UTFGridResponse {
  grid?: string[];
  keys?: string[];
  data?: object;
}

export type IdentificationsResponse = BaseResponse & {
  results: Identification[];
};

export interface Error {
  code?: number;
  message?: string;
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
  public baseUrl: string = "/v1";
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
 * @title iNaturalist API
 * @version 1.3.0
 * @baseUrl /v1
 *
 * # https://api.inaturalist.org/v1/
 *
 * [iNaturalist](https://www.inaturalist.org/) is a global community of
 * naturalists, scientists, and members of the public sharing over a million
 * wildlife sightings to teach one another about the natural world while
 * creating high quality citizen science data for science and conservation.
 *
 * These API methods return data in JSON/JSONP and PNG response formats. They
 * are meant to supplement the existing [iNaturalist
 * API](https://www.inaturalist.org/pages/api+reference), implemented in Ruby
 * on Rails, which has more functionality and supports more write operations,
 * but tends to be slower and have less consistent response formats. Visit our
 * [developers page](https://www.inaturalist.org/pages/developers) for more
 * information. Write operations that expect and return JSON describe a single
 * `body` parameter that represents the request body, which should be specified
 * as JSON. See the "Model" of each body parameter for attributes that we
 * accept in these JSON objects.
 *
 * Multiple values for a single URL parameter should be separated by commas,
 * e.g. `taxon_id=1,2,3`.
 *
 * Map tiles are generated using the
 * [node-mapnik](https://github.com/mapnik/node-mapnik) library, following the
 * XYZ map tiling scheme. The "Observation Tile" methods accept nearly all the
 * parameters of the observation search APIs, and will generate map tiles
 * reflecting the same observations returned by searches. These
 * "Observation Tile" methods have corresponding
 * [UTFGrid](https://github.com/mapbox/utfgrid-spec) JSON
 * responses which return information needed to make interactive maps.
 *
 * Authentication in the Node API is handled via JSON Web Tokens (JWT). To
 * obtain one, make an [OAuth-authenticated
 * request](http://www.inaturalist.org/pages/api+reference#auth) to
 * https://www.inaturalist.org/users/api_token. Each JWT will expire after 24
 * hours. Authentication required for all PUT and POST requests. Some GET
 * requests will also include private information like hidden coordinates if
 * the authenticated user has permission to view them.
 *
 * Photos served from https://static.inaturalist.org and
 * https://inaturalist-open-data.s3.amazonaws.com have multiple size
 * variants and not all size variants are returned in responses. To access
 * other sizes, the photo URL can be modified to replace only the size
 * qualifier (each variant shares the exact same extension). The domain a photo
 * is hosted under reflects the license under which the photo is being shared,
 * and the domain may change over time if the license changes. Photos in
 * the `inaturalist-open-data` domain are shared under open licenses. These can
 * be accessed in bulk in the [iNaturalist AWS Open Dataset](
 * https://registry.opendata.aws/inaturalist-open-data/). Photos in the
 * `static.inaturalist.org` domain do not have open licenses.
 *
 * The available photo sizes are:
 * * original (max 2048px in either dimension)
 * * large (max 1024px in either dimension)
 * * medium (max 500px in either dimension)
 * * small (max 240px in either dimension)
 * * thumb (max 100px in either dimension)
 * * square (75px square)
 *
 * iNaturalist Website: https://www.inaturalist.org/
 *
 * Open Source Software: https://github.com/inaturalist/
 *
 * ## Terms of Use
 *
 * Use of this API is subject to the iNaturalist
 * [Terms of Service](https://www.inaturalist.org/terms) and
 * [Privacy Policy](https://www.inaturalist.org/privacy). We will block any
 * use of our API that violates our Terms or Privacy Policy without notice.
 * The API is intended to support application development, not data scraping.
 * For pre- generated data exports, see
 * https://www.inaturalist.org/pages/developers.
 *
 * Please note that we throttle API usage to a max of 100 requests per minute,
 * though we ask that you try to keep it to 60 requests per minute or lower,
 * and to keep under 10,000 requests per day. If we notice usage that has
 * serious impact on our performance we may institute blocks without
 * notification.
 *
 * Terms of Service: https://www.inaturalist.org/terms
 *
 * Privacy Policy: https://www.inaturalist.org/privacy
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  annotations = {
    /**
     * @description Create an annotation
     *
     * @tags Annotations
     * @name AnnotationsCreate
     * @summary Annotation Create
     * @request POST:/annotations
     * @secure
     */
    annotationsCreate: (body: PostAnnotation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/annotations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete an annotation
     *
     * @tags Annotations
     * @name AnnotationsDelete
     * @summary Annotation Delete
     * @request DELETE:/annotations/{id}
     * @secure
     */
    annotationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/annotations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  votes = {
    /**
     * @description Vote on an annotation
     *
     * @tags Annotations
     * @name VoteAnnotationCreate
     * @summary Annotation Vote
     * @request POST:/votes/vote/annotation/{id}
     * @secure
     */
    voteAnnotationCreate: (id: string, body: PostVote, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/votes/vote/annotation/${id}`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Remove a vote from annotation
     *
     * @tags Annotations
     * @name UnvoteAnnotationDelete
     * @summary Annotation Unvote
     * @request DELETE:/votes/unvote/annotation/{id}
     * @secure
     */
    unvoteAnnotationDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/votes/unvote/annotation/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Vote on an observation. A vote with an empty `scope` is recorded as a `fave` of the observation. A vote with scope `needs_id` is recorded as a vote on the Quality Grade criterion "can the Community ID still be confirmed or improved?", and can be an up or down vote
     *
     * @tags Observations
     * @name VoteObservationCreate
     * @summary Observation Vote
     * @request POST:/votes/vote/observation/{id}
     * @secure
     */
    voteObservationCreate: (id: number, body: PostObservationVote, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/votes/vote/observation/${id}`,
        method: "POST",
        body: body,
        secure: true,
        ...params,
      }),

    /**
     * @description Remove a vote from an observation
     *
     * @tags Observations
     * @name UnvoteObservationDelete
     * @summary Observation Unvote
     * @request DELETE:/votes/unvote/observation/{id}
     * @secure
     */
    unvoteObservationDelete: (id: number, body: PostObservationVote, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/votes/unvote/observation/${id}`,
        method: "DELETE",
        body: body,
        secure: true,
        ...params,
      }),
  };
  comments = {
    /**
     * @description Create a comment
     *
     * @tags Comments
     * @name CommentsCreate
     * @summary Comment Create
     * @request POST:/comments
     * @secure
     */
    commentsCreate: (body: PostComment, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/comments`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a comment
     *
     * @tags Comments
     * @name CommentsUpdate
     * @summary Comment Update
     * @request PUT:/comments/{id}
     * @secure
     */
    commentsUpdate: (id: number, body: PostComment, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/comments/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a comment
     *
     * @tags Comments
     * @name CommentsDelete
     * @summary Comment Delete
     * @request DELETE:/comments/{id}
     * @secure
     */
    commentsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/comments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  controlledTerms = {
    /**
     * @description List all attribute controlled terms
     *
     * @tags Controlled Terms
     * @name ControlledTermsList
     * @summary Terms Index
     * @request GET:/controlled_terms
     */
    controlledTermsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/controlled_terms`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns attribute controlled terms relevant to a taxon
     *
     * @tags Controlled Terms
     * @name ForTaxonList
     * @summary Terms for Taxon
     * @request GET:/controlled_terms/for_taxon
     */
    forTaxonList: (
      query: {
        /**
         * Filter by this taxon
         * @min 1
         */
        taxon_id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/controlled_terms/for_taxon`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  flags = {
    /**
     * @description Create a flag. To create a custom flag beyond the standard `spam` and `inappropriate` flags, set `flag` to `other` and include a `flag_explanation`
     *
     * @tags Flags
     * @name FlagsCreate
     * @summary Flag Create
     * @request POST:/flags
     * @secure
     */
    flagsCreate: (body: PostFlag, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/flags`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a flag. Generally only used to resolve the flag.
     *
     * @tags Flags
     * @name FlagsUpdate
     * @summary Flag Update
     * @request PUT:/flags/{id}
     * @secure
     */
    flagsUpdate: (id: number, body: PutFlag, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/flags/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a flag
     *
     * @tags Flags
     * @name FlagsDelete
     * @summary Flag Delete
     * @request DELETE:/flags/{id}
     * @secure
     */
    flagsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/flags/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  identifications = {
    /**
     * @description Given an ID, or an array of IDs in comma-delimited format, returns corresponding identifications. A maximum of 30 results will be returned
     *
     * @tags Identifications
     * @name IdentificationsDetail
     * @summary Identification Details
     * @request GET:/identifications/{id}
     */
    identificationsDetail: (id: number[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identifications/${id}`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update an identification. Note that to "withdraw" an observation you send a `PUT` request to this endpoint and set the `current` attribute to false. To "restore" it you do the same but set `current` to `true`. Only one identification by a given user can be `current` for a given observation, so if you "restore" one all the other identifications by the authenticated user for the given observation will be withdrawn.
     *
     * @tags Identifications
     * @name IdentificationsUpdate
     * @summary Identification Update
     * @request PUT:/identifications/{id}
     * @secure
     */
    identificationsUpdate: (id: number, body: PostIdentification, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identifications/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete an identification. See description of `PUT /identifications/{id} for notes on withdrawing and restoring identifications.
     *
     * @tags Identifications
     * @name IdentificationsDelete
     * @summary Identification Delete
     * @request DELETE:/identifications/{id}
     * @secure
     */
    identificationsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identifications/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Create an identification
     *
     * @tags Identifications
     * @name IdentificationsCreate
     * @summary Identification Create
     * @request POST:/identifications
     * @secure
     */
    identificationsCreate: (body: PostIdentification, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identifications`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns identifications matching the search criteria
     *
     * @tags Identifications
     * @name IdentificationsList
     * @summary Identification Search
     * @request GET:/identifications
     */
    identificationsList: (
      query?: {
        /** ID's taxon is the same it's observation's taxon */
        current_taxon?: boolean;
        /** ID was added by the observer */
        own_observation?: boolean;
        /** ID was created as a results of a taxon change */
        is_change?: boolean;
        /** ID's taxon is currently an active taxon */
        taxon_active?: boolean;
        /** Observation's taxon is currently an active taxon */
        observation_taxon_active?: boolean;
        /** Identification ID */
        id?: number[];
        /** ID's taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation's taxon must have this rank */
        observation_rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Identifier must have this user ID
         * @min 1
         */
        user_id?: number[];
        /** Identifier must have this login */
        user_login?: string[];
        /**
         * Most recent ID on a observation by a user
         * @default true
         */
        current?: true | false | any;
        /** Type of identification */
        category?: "improving" | "supporting" | "leading" | "maverick";
        /** Observation must occur in this place */
        place_id?: string[];
        /** Observation must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /**
         * ID taxa must match the given taxa or their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Observation taxa must match the given taxa or their descendants
         * @min 1
         */
        observation_taxon_id?: string[];
        /**
         * ID iconic taxon ID
         * @min 1
         */
        iconic_taxon_id?: string[];
        /**
         * Observation iconic taxon ID
         * @min 1
         */
        observation_iconic_taxon_id?: string[];
        /** ID taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** ID taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or higher */
        observation_lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or lower */
        observation_hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Exclude IDs of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /**
         * Exclude IDs of observations of these taxa and their descendants
         * @min 1
         */
        without_observation_taxon_id?: string[];
        /**
         * ID created on or after this time
         * @format date
         */
        d1?: string;
        /**
         * ID created on or before this time
         * @format date
         */
        d2?: string;
        /**
         * Observation created on or after this date
         * @format date
         */
        observation_created_d1?: string;
        /**
         * Observation created on or before this date
         * @format date
         */
        observation_created_d2?: string;
        /**
         * Observation observed on or after this date
         * @format date
         */
        observed_d1?: string;
        /**
         * Observation observed on or before this date
         * @format date
         */
        observed_d2?: string;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?: "created_at" | "id";
        /** Return only the record IDs */
        only_id?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/identifications`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, return counts of the categories of identifications matching the search criteria
     *
     * @tags Identifications
     * @name CategoriesList
     * @summary Identification Categories
     * @request GET:/identifications/categories
     */
    categoriesList: (
      query?: {
        /** ID's taxon is the same it's observation's taxon */
        current_taxon?: boolean;
        /** ID was added by the observer */
        own_observation?: boolean;
        /** ID was created as a results of a taxon change */
        is_change?: boolean;
        /** ID's taxon is currently an active taxon */
        taxon_active?: boolean;
        /** Observation's taxon is currently an active taxon */
        observation_taxon_active?: boolean;
        /** Identification ID */
        id?: number[];
        /** ID's taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation's taxon must have this rank */
        observation_rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Identifier must have this user ID
         * @min 1
         */
        user_id?: number[];
        /** Identifier must have this login */
        user_login?: string[];
        /**
         * Most recent ID on a observation by a user
         * @default true
         */
        current?: true | false | any;
        /** Type of identification */
        category?: "improving" | "supporting" | "leading" | "maverick";
        /** Observation must occur in this place */
        place_id?: string[];
        /** Observation must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /**
         * ID taxa must match the given taxa or their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Observation taxa must match the given taxa or their descendants
         * @min 1
         */
        observation_taxon_id?: string[];
        /**
         * ID iconic taxon ID
         * @min 1
         */
        iconic_taxon_id?: string[];
        /**
         * Observation iconic taxon ID
         * @min 1
         */
        observation_iconic_taxon_id?: string[];
        /** ID taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** ID taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or higher */
        observation_lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or lower */
        observation_hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Exclude IDs of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /**
         * Exclude IDs of observations of these taxa and their descendants
         * @min 1
         */
        without_observation_taxon_id?: string[];
        /**
         * ID created on or after this time
         * @format date
         */
        d1?: string;
        /**
         * ID created on or before this time
         * @format date
         */
        d2?: string;
        /**
         * Observation created on or after this date
         * @format date
         */
        observation_created_d1?: string;
        /**
         * Observation created on or before this date
         * @format date
         */
        observation_created_d2?: string;
        /**
         * Observation observed on or after this date
         * @format date
         */
        observed_d1?: string;
        /**
         * Observation observed on or before this date
         * @format date
         */
        observed_d2?: string;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?: "created_at" | "id";
        /** Return only the record IDs */
        only_id?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/identifications/categories`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns `leaf taxa` associated with identifications matching the search criteria and the count of identifications they are associated with, ordered by count descending. `Leaf taxa` are the leaves of the taxonomic tree containing only the taxa associated with observations matching the search criteria.
     *
     * @tags Identifications
     * @name SpeciesCountsList
     * @summary Identification Species Counts
     * @request GET:/identifications/species_counts
     */
    speciesCountsList: (
      query?: {
        /** ID's taxon is the same it's observation's taxon */
        current_taxon?: boolean;
        /** ID was added by the observer */
        own_observation?: boolean;
        /** ID was created as a results of a taxon change */
        is_change?: boolean;
        /** ID's taxon is currently an active taxon */
        taxon_active?: boolean;
        /** Observation's taxon is currently an active taxon */
        observation_taxon_active?: boolean;
        /** Identification ID */
        id?: number[];
        /** ID's taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation's taxon must have this rank */
        observation_rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Identifier must have this user ID
         * @min 1
         */
        user_id?: number[];
        /** Identifier must have this login */
        user_login?: string[];
        /**
         * Most recent ID on a observation by a user
         * @default true
         */
        current?: true | false | any;
        /** Type of identification */
        category?: "improving" | "supporting" | "leading" | "maverick";
        /** Observation must occur in this place */
        place_id?: string[];
        /** Observation must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /**
         * ID taxa must match the given taxa or their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Observation taxa must match the given taxa or their descendants
         * @min 1
         */
        observation_taxon_id?: string[];
        /**
         * ID iconic taxon ID
         * @min 1
         */
        iconic_taxon_id?: string[];
        /**
         * Observation iconic taxon ID
         * @min 1
         */
        observation_iconic_taxon_id?: string[];
        /** ID taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** ID taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or higher */
        observation_lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or lower */
        observation_hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Exclude IDs of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /**
         * Exclude IDs of observations of these taxa and their descendants
         * @min 1
         */
        without_observation_taxon_id?: string[];
        /**
         * ID created on or after this time
         * @format date
         */
        d1?: string;
        /**
         * ID created on or before this time
         * @format date
         */
        d2?: string;
        /**
         * Observation created on or after this date
         * @format date
         */
        observation_created_d1?: string;
        /**
         * Observation created on or before this date
         * @format date
         */
        observation_created_d2?: string;
        /**
         * Observation observed on or after this date
         * @format date
         */
        observed_d1?: string;
        /**
         * Observation observed on or before this date
         * @format date
         */
        observed_d2?: string;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?: "created_at" | "id";
        /** Return only the record IDs */
        only_id?: boolean;
        /**
         * Source of the taxon for counting
         * @default "identification"
         */
        taxon_of?: "identification" | "observation";
      },
      params: RequestParams = {},
    ) =>
      this.request<SpeciesCountsResponse, Error>({
        path: `/identifications/species_counts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns creators of identifications matching the search criteria and the count of matching identifications, ordered by count descending. A maximum of 500 results will be returned
     *
     * @tags Identifications
     * @name IdentifiersList
     * @summary Identification Identifiers
     * @request GET:/identifications/identifiers
     */
    identifiersList: (
      query?: {
        /** ID's taxon is the same it's observation's taxon */
        current_taxon?: boolean;
        /** ID was added by the observer */
        own_observation?: boolean;
        /** ID was created as a results of a taxon change */
        is_change?: boolean;
        /** ID's taxon is currently an active taxon */
        taxon_active?: boolean;
        /** Observation's taxon is currently an active taxon */
        observation_taxon_active?: boolean;
        /** Identification ID */
        id?: number[];
        /** ID's taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation's taxon must have this rank */
        observation_rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Identifier must have this user ID
         * @min 1
         */
        user_id?: number[];
        /** Identifier must have this login */
        user_login?: string[];
        /**
         * Most recent ID on a observation by a user
         * @default true
         */
        current?: true | false | any;
        /** Type of identification */
        category?: "improving" | "supporting" | "leading" | "maverick";
        /** Observation must occur in this place */
        place_id?: string[];
        /** Observation must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /**
         * ID taxa must match the given taxa or their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Observation taxa must match the given taxa or their descendants
         * @min 1
         */
        observation_taxon_id?: string[];
        /**
         * ID iconic taxon ID
         * @min 1
         */
        iconic_taxon_id?: string[];
        /**
         * Observation iconic taxon ID
         * @min 1
         */
        observation_iconic_taxon_id?: string[];
        /** ID taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** ID taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or higher */
        observation_lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or lower */
        observation_hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Exclude IDs of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /**
         * Exclude IDs of observations of these taxa and their descendants
         * @min 1
         */
        without_observation_taxon_id?: string[];
        /**
         * ID created on or after this time
         * @format date
         */
        d1?: string;
        /**
         * ID created on or before this time
         * @format date
         */
        d2?: string;
        /**
         * Observation created on or after this date
         * @format date
         */
        observation_created_d1?: string;
        /**
         * Observation created on or before this date
         * @format date
         */
        observation_created_d2?: string;
        /**
         * Observation observed on or after this date
         * @format date
         */
        observed_d1?: string;
        /**
         * Observation observed on or before this date
         * @format date
         */
        observed_d2?: string;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?: "created_at" | "id";
        /** Return only the record IDs */
        only_id?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserCountsResponse, Error>({
        path: `/identifications/identifiers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns creators of observations of identifications matching the search criteria and the count of matching observations, ordered by count descending
     *
     * @tags Identifications
     * @name ObserversList
     * @summary Identification Observers
     * @request GET:/identifications/observers
     */
    observersList: (
      query?: {
        /** ID's taxon is the same it's observation's taxon */
        current_taxon?: boolean;
        /** ID was added by the observer */
        own_observation?: boolean;
        /** ID was created as a results of a taxon change */
        is_change?: boolean;
        /** ID's taxon is currently an active taxon */
        taxon_active?: boolean;
        /** Observation's taxon is currently an active taxon */
        observation_taxon_active?: boolean;
        /** Identification ID */
        id?: number[];
        /** ID's taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation's taxon must have this rank */
        observation_rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Identifier must have this user ID
         * @min 1
         */
        user_id?: number[];
        /** Identifier must have this login */
        user_login?: string[];
        /**
         * Most recent ID on a observation by a user
         * @default true
         */
        current?: true | false | any;
        /** Type of identification */
        category?: "improving" | "supporting" | "leading" | "maverick";
        /** Observation must occur in this place */
        place_id?: string[];
        /** Observation must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /**
         * ID taxa must match the given taxa or their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Observation taxa must match the given taxa or their descendants
         * @min 1
         */
        observation_taxon_id?: string[];
        /**
         * ID iconic taxon ID
         * @min 1
         */
        iconic_taxon_id?: string[];
        /**
         * Observation iconic taxon ID
         * @min 1
         */
        observation_iconic_taxon_id?: string[];
        /** ID taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** ID taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or higher */
        observation_lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or lower */
        observation_hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Exclude IDs of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /**
         * Exclude IDs of observations of these taxa and their descendants
         * @min 1
         */
        without_observation_taxon_id?: string[];
        /**
         * ID created on or after this time
         * @format date
         */
        d1?: string;
        /**
         * ID created on or before this time
         * @format date
         */
        d2?: string;
        /**
         * Observation created on or after this date
         * @format date
         */
        observation_created_d1?: string;
        /**
         * Observation created on or before this date
         * @format date
         */
        observation_created_d2?: string;
        /**
         * Observation observed on or after this date
         * @format date
         */
        observed_d1?: string;
        /**
         * Observation observed on or before this date
         * @format date
         */
        observed_d2?: string;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?: "created_at" | "id";
        /** Return only the record IDs */
        only_id?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserCountsResponse, Error>({
        path: `/identifications/observers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an array of objects each containing an identification and a taxon. Returns IDs representing the earliest occurrence of taxa associated with identifications in the filtered set of results
     *
     * @tags Identifications
     * @name RecentTaxaList
     * @summary Identification Recent Taxa
     * @request GET:/identifications/recent_taxa
     */
    recentTaxaList: (
      query?: {
        /** ID's taxon is the same it's observation's taxon */
        current_taxon?: boolean;
        /** ID was added by the observer */
        own_observation?: boolean;
        /** ID was created as a results of a taxon change */
        is_change?: boolean;
        /** ID's taxon is currently an active taxon */
        taxon_active?: boolean;
        /** Observation's taxon is currently an active taxon */
        observation_taxon_active?: boolean;
        /** Identification ID */
        id?: number[];
        /** ID's taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation's taxon must have this rank */
        observation_rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Identifier must have this user ID
         * @min 1
         */
        user_id?: number[];
        /** Identifier must have this login */
        user_login?: string[];
        /**
         * Most recent ID on a observation by a user
         * @default true
         */
        current?: true | false | any;
        /** Type of identification */
        category?: "improving" | "supporting" | "leading" | "maverick";
        /** Observation must occur in this place */
        place_id?: string[];
        /** Observation must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /**
         * ID taxa must match the given taxa or their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Observation taxa must match the given taxa or their descendants
         * @min 1
         */
        observation_taxon_id?: string[];
        /**
         * ID iconic taxon ID
         * @min 1
         */
        iconic_taxon_id?: string[];
        /**
         * Observation iconic taxon ID
         * @min 1
         */
        observation_iconic_taxon_id?: string[];
        /** ID taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** ID taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or higher */
        observation_lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Observation taxon must have this rank or lower */
        observation_hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Exclude IDs of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /**
         * Exclude IDs of observations of these taxa and their descendants
         * @min 1
         */
        without_observation_taxon_id?: string[];
        /**
         * ID created on or after this time
         * @format date
         */
        d1?: string;
        /**
         * ID created on or before this time
         * @format date
         */
        d2?: string;
        /**
         * Observation created on or after this date
         * @format date
         */
        observation_created_d1?: string;
        /**
         * Observation created on or before this date
         * @format date
         */
        observation_created_d2?: string;
        /**
         * Observation observed on or after this date
         * @format date
         */
        observed_d1?: string;
        /**
         * Observation observed on or before this date
         * @format date
         */
        observed_d2?: string;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?: "created_at" | "id";
        /** Return only the record IDs */
        only_id?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/identifications/recent_taxa`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Returns species attached to IDs of observations of this taxon, or attached to observations identified as this species, ordered by combined frequency descending. This will only return species in the same iconic taxon, and will never return descendants of the chosen taxon
     *
     * @tags Identifications
     * @name SimilarSpeciesList
     * @summary Identification Similar Species
     * @request GET:/identifications/similar_species
     */
    similarSpeciesList: (
      query: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/identifications/similar_species`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  messages = {
    /**
     * @description Show the user's inbox or sent box
     *
     * @tags Messages
     * @name MessagesList
     * @summary Retrieve messages for the authenticated user. This does not mark them as read.
     * @request GET:/messages
     * @secure
     */
    messagesList: (
      query?: {
        /** Pagination `page` number */
        page?: string;
        /**
         * Whether to view messages the user has received (default) or messages the user has sent
         * @default "inbox"
         */
        box?: "inbox" | "sent" | "any";
        /** Search query for subject and body */
        q?: string;
        /** User ID or username of correspondent to filter by */
        user_id?: string;
        /**
         * Groups results by `thread_id`, only shows the latest message per
         * thread, and includes a `thread_messages_count` attribute showing the
         * total number of messages in that thread. Note that this will not
         * work with the `q` param, and it probably should only be used with
         * `box=any` because the `thread_messages_count` will be inaccurate when
         * you restrict it to `inbox` or `sent`.
         * @default false
         */
        threads?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, MessagesResponse>({
        path: `/messages`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Create and deliver a new message to another user
     *
     * @tags Messages
     * @name MessagesCreate
     * @summary Create a new message
     * @request POST:/messages
     * @secure
     */
    messagesCreate: (body: PostMessage, params: RequestParams = {}) =>
      this.request<Message, Error>({
        path: `/messages`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all messages in the thread the specified message belongs to and marks them all as read.
     *
     * @tags Messages
     * @name MessagesDetail
     * @summary Retrieve messages in a thread
     * @request GET:/messages/{id}
     * @secure
     */
    messagesDetail: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** User to reply to */
          reply_to_user?: User;
          /** Identifier for this thread */
          thread_id?: number;
          /**
           * Identifier for the message that should be flagged if the user
           * chooses to flag this thread
           */
          flaggable_message_id?: number;
          results?: Message[];
        },
        Error
      >({
        path: `/messages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This will all of the authenticated user's copies of the messages in tha thread to which the specified message belongs.
     *
     * @tags Messages
     * @name MessagesDelete
     * @summary Delete a message / thread
     * @request DELETE:/messages/{id}
     * @secure
     */
    messagesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/messages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Messages
     * @name UnreadList
     * @summary Gets a count of messages the authenticated user has not read
     * @request GET:/messages/unread
     * @secure
     */
    unreadList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Number of unread messages */
          count?: number;
        },
        Error
      >({
        path: `/messages/unread`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  observations = {
    /**
     * @description Given an ID, or an array of IDs in comma-delimited format, returns corresponding observations. A maximum of 200 results will be returned
     *
     * @tags Observations
     * @name ObservationsDetail
     * @summary Observation Details
     * @request GET:/observations/{id}
     */
    observationsDetail: (id: number[], params: RequestParams = {}) =>
      this.request<ObservationsShowResponse, Error>({
        path: `/observations/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update an observation
     *
     * @tags Observations
     * @name ObservationsUpdate
     * @summary Observation Update
     * @request PUT:/observations/{id}
     * @secure
     */
    observationsUpdate: (id: number, body: PostObservation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete an observation
     *
     * @tags Observations
     * @name ObservationsDelete
     * @summary Observation Delete
     * @request DELETE:/observations/{id}
     * @secure
     */
    observationsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Fave an observation
     *
     * @tags Observations
     * @name FaveCreate
     * @summary Observations Fave
     * @request POST:/observations/{id}/fave
     * @secure
     */
    faveCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/fave`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Unfave an observation
     *
     * @tags Observations
     * @name UnfaveDelete
     * @summary Observations Unfave
     * @request DELETE:/observations/{id}/unfave
     * @secure
     */
    unfaveDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/unfave`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Review an observation
     *
     * @tags Observations
     * @name ReviewCreate
     * @summary Observations Review
     * @request POST:/observations/{id}/review
     * @secure
     */
    reviewCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/review`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Unreview an observation
     *
     * @tags Observations
     * @name UnreviewCreate
     * @summary Observations Unreview
     * @request POST:/observations/{id}/unreview
     * @secure
     */
    unreviewCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/unreview`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Fetches any subscriptions the current user has to this observation or the observer
     *
     * @tags Observations
     * @name SubscriptionsDetail
     * @summary Observation Subscriptions
     * @request GET:/observations/{id}/subscriptions
     * @secure
     */
    subscriptionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/subscriptions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Set the value of a quality metric
     *
     * @tags Observations
     * @name QualityCreate
     * @summary Quality Metric Set
     * @request POST:/observations/{id}/quality/{metric}
     * @secure
     */
    qualityCreate: (id: number, metric: "date" | "location" | "wild", body: PostQuality, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/quality/${metric}`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a quality metric
     *
     * @tags Observations
     * @name QualityDelete
     * @summary Quality Metric Delete
     * @request DELETE:/observations/{id}/quality/{metric}
     * @secure
     */
    qualityDelete: (id: number, metric: "date" | "location" | "wild", params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/quality/${metric}`,
        method: "DELETE",
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Fetches information about this observation's taxon, within the context of this observation's location
     *
     * @tags Observations
     * @name TaxonSummaryDetail
     * @summary Observation Taxon Summary
     * @request GET:/observations/{id}/taxon_summary
     */
    taxonSummaryDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/taxon_summary`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns observations matching the search criteria. The large size of the observations index prevents us from supporting the `page` parameter when retrieving records from large result sets. If you need to retrieve large numbers of records, use the `per_page` and `id_above` or `id_below` parameters instead.
     *
     * @tags Observations
     * @name ObservationsList
     * @summary Observation Search
     * @request GET:/observations
     */
    observationsList: (
      query?: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "created_at"
         */
        order_by?:
          | "created_at"
          | "geo_score"
          | "id"
          | "observed_on"
          | "random"
          | "species_guess"
          | "updated_at"
          | "votes";
        /** Return only the record IDs */
        only_id?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ObservationsResponse, Error>({
        path: `/observations`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Create an observation
     *
     * @tags Observations
     * @name ObservationsCreate
     * @summary Observation Create
     * @request POST:/observations
     * @secure
     */
    observationsCreate: (body: PostObservation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Given a starting date, return an array of IDs of the authenticated user's observations that have been deleted since that date. Requires authentication
     *
     * @tags Observations
     * @name DeletedList
     * @summary Observations Deleted
     * @request GET:/observations/deleted
     * @secure
     */
    deletedList: (
      query: {
        /**
         * Deleted at or after this time
         * @format date-time
         */
        since: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/observations/deleted`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns histogram data about observations matching the search criteria
     *
     * @tags Observations
     * @name HistogramList
     * @summary Observation Histogram
     * @request GET:/observations/histogram
     */
    histogramList: (
      query?: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
        /**
         * Histogram basis: when the observation was created or observed
         * @default "observed"
         */
        date_field?: "created" | "observed";
        /**
         * Time interval for histogram, with groups starting on or contained within
         * the group value. The year, month, week, day, and hour options will set
         * default values for `d1` or `created_d1` depending on the value of
         * `date_field`, to limit the number of groups returned. You can override
         * those values if you want data from a longer or shorter time span. The
         * `hour` interval only works with `date_field=created`, and this you
         * should filter dates with `created_d[1,2]`
         * @default "month_of_year"
         */
        interval?: "year" | "month" | "week" | "day" | "hour" | "month_of_year" | "week_of_year";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/observations/histogram`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns identifiers of observations matching the search criteria and the count of observations they have identified, ordered by count descending. A maximum of 500 results will be returned
     *
     * @tags Observations
     * @name IdentifiersList
     * @summary Observation Identifiers
     * @request GET:/observations/identifiers
     */
    identifiersList: (
      query?: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserCountsResponse, Error>({
        path: `/observations/identifiers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns observers of observations matching the search criteria and the count of observations and distinct taxa of rank `species` they have observed. A maximum of 500 results will be returned
     *
     * @tags Observations
     * @name ObserversList
     * @summary Observation Observers
     * @request GET:/observations/observers
     */
    observersList: (
      query?: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ObservationsObserversResponse, Error>({
        path: `/observations/observers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns an array of relevant controlled terms values and a monthly histogram
     *
     * @tags Observations
     * @name PopularFieldValuesList
     * @summary Observation Popular Field Values
     * @request GET:/observations/popular_field_values
     */
    popularFieldValuesList: (
      query?: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/observations/popular_field_values`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns `leaf taxa` associated with observations matching the search criteria and the count of observations they are associated with, ordered by count descending. `Leaf taxa` are the leaves of the taxonomic tree containing only the taxa associated with observations matching the search criteria.
     *
     * @tags Observations
     * @name SpeciesCountsList
     * @summary Observation Species Counts
     * @request GET:/observations/species_counts
     */
    speciesCountsList: (
      query?: {
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
        /**
         * Include taxon ancestors in the response
         * @default false
         */
        include_ancestors?: boolean;
        /** Pagination `page` number */
        page?: string;
        /** Number of results to return in a `page`. The maximum value is 500 */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SpeciesCountsResponse, Error>({
        path: `/observations/species_counts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns an array of objects representing new comments and identifications on observations the authenticated user has subscribed to. Requires authentication
     *
     * @tags Observations
     * @name UpdatesList
     * @summary Observation User Updates
     * @request GET:/observations/updates
     * @secure
     */
    updatesList: (
      query?: {
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_after?: string;
        /** Notification has been viewed by the user before */
        viewed?: boolean;
        /**
         * Only show updates on observations owned by the currently authenticated
         * user or on observations the authenticated user is following but does not
         * own.
         */
        observations_by?: "owner" | "following";
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/observations/updates`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Mark all updates associated with this observation as viewed by logged-in user
     *
     * @tags Observations
     * @name ViewedUpdatesUpdate
     * @summary Observation Field Value Update
     * @request PUT:/observations/{id}/viewed_updates
     * @secure
     */
    viewedUpdatesUpdate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observations/${id}/viewed_updates`,
        method: "PUT",
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  subscriptions = {
    /**
     * @description Toggles current user's subscription to this observation. If the logged-in user is not subscribed, POSTing here will subscribe them. If they are already subscribed, this will remove the subscription
     *
     * @tags Observations
     * @name ObservationSubscribeCreate
     * @summary Observation Subscribe
     * @request POST:/subscriptions/observation/{id}/subscribe
     * @secure
     */
    observationSubscribeCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subscriptions/observation/${id}/subscribe`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Toggles current user's subscription to this project. If the logged-in user is not subscribed, POSTing here will subscribe them. If they are already subscribed, this will remove the subscription
     *
     * @tags Projects
     * @name ProjectSubscribeCreate
     * @summary Project Subscribe
     * @request POST:/subscriptions/project/{id}/subscribe
     * @secure
     */
    projectSubscribeCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subscriptions/project/${id}/subscribe`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  observationFieldValues = {
    /**
     * @description Update an observation field value
     *
     * @tags Observation Field Values
     * @name ObservationFieldValuesUpdate
     * @summary Observation Field Value Update
     * @request PUT:/observation_field_values/{id}
     * @secure
     */
    observationFieldValuesUpdate: (id: number, body: PostObservationFieldValue, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observation_field_values/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete an observation field value
     *
     * @tags Observation Field Values
     * @name ObservationFieldValuesDelete
     * @summary Observation Field Value Delete
     * @request DELETE:/observation_field_values/{id}
     * @secure
     */
    observationFieldValuesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observation_field_values/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Create an observation field value
     *
     * @tags Observation Field Values
     * @name ObservationFieldValuesCreate
     * @summary Observation Field Value Create
     * @request POST:/observation_field_values
     * @secure
     */
    observationFieldValuesCreate: (body: PostObservationFieldValue, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observation_field_values`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  observationPhotos = {
    /**
     * @description Update an observation photo
     *
     * @tags Observation Photos
     * @name ObservationPhotosUpdate
     * @summary Observation Photo Update
     * @request PUT:/observation_photos/{id}
     * @secure
     */
    observationPhotosUpdate: (
      id: number,
      data: {
        /** Position in which the photo is displayed for the observation */
        "observation_photo[position]"?: number;
        /** The photo */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/observation_photos/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Delete an observation photo
     *
     * @tags Observation Photos
     * @name ObservationPhotosDelete
     * @summary Observation Photo Delete
     * @request DELETE:/observation_photos/{id}
     * @secure
     */
    observationPhotosDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/observation_photos/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Create an observation photo
     *
     * @tags Observation Photos
     * @name ObservationPhotosCreate
     * @summary Observation Photo Create
     * @request POST:/observation_photos
     * @secure
     */
    observationPhotosCreate: (
      data: {
        /** Observation ID */
        "observation_photo[observation_id]"?: number;
        /** Observation UUID */
        "observation_photo[uuid]"?: string;
        /**
         * The photo
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/observation_photos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  photos = {
    /**
     * @description Create a photo
     *
     * @tags Photos
     * @name PhotosCreate
     * @summary Photo Create
     * @request POST:/photos
     * @secure
     */
    photosCreate: (
      data: {
        /**
         * The photo
         * @format binary
         */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/photos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  places = {
    /**
     * @description Given an ID, or an array of IDs in comma-delimited format, returns corresponding places. A maximum of 500 results will be returned
     *
     * @tags Places
     * @name PlacesDetail
     * @summary Place Details
     * @request GET:/places/{id}
     */
    placesDetail: (
      id: string[],
      query?: {
        /**
         * Admin level of a place, or an array of admin levels
         * in comma-delimited format. Supported admin levels are: -10
         * (continent), 0 (country), 10 (state), 20 (county), 30 (town),
         * 100 (park)
         */
        admin_level?: "-10" | "0" | "10" | "20" | "30" | "100";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesResponse, Error>({
        path: `/places/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given an string, returns places with names starting with the search term.
     *
     * @tags Places
     * @name AutocompleteList
     * @summary Place Autocomplete
     * @request GET:/places/autocomplete
     */
    autocompleteList: (
      query: {
        /** Name must begin with this value */
        q: string;
        /** Sort field */
        order_by?: "area";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesResponse, Error>({
        path: `/places/autocomplete`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given an bounding box, and an optional name query, return `standard` iNaturalist curator approved and `community` non-curated places nearby
     *
     * @tags Places
     * @name NearbyList
     * @summary Nearby Places
     * @request GET:/places/nearby
     */
    nearbyList: (
      query: {
        /**
         * Must be nearby this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat: number;
        /**
         * Must be nearby this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng: number;
        /**
         * Must be nearby this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat: number;
        /**
         * Must be nearby this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng: number;
        /** Name must match this value */
        name?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<NearbyPlacesResponse, Error>({
        path: `/places/nearby`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a PNG map tile representing the boundary of this place, following the XYZ tiling scheme
     *
     * @tags Polygon Tiles
     * @name PngDetail
     * @summary Place Tiles
     * @request GET:/places/{place_id}/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      placeId: number,
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/places/${placeId}/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  posts = {
    /**
     * @description Return journal posts from the iNaturalist site
     *
     * @tags Posts
     * @name PostsList
     * @summary Posts Search
     * @request GET:/posts
     * @secure
     */
    postsList: (
      query?: {
        /** Return posts by this user */
        login?: string;
        /** Return posts from this project */
        project_id?: number;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/posts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Create a post
     *
     * @tags Posts
     * @name PostsCreate
     * @summary Post Create
     * @request POST:/posts
     * @secure
     */
    postsCreate: (body: PostPost, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update a post
     *
     * @tags Posts
     * @name PostsUpdate
     * @summary Post Update
     * @request PUT:/posts/{id}
     * @secure
     */
    postsUpdate: (id: number, body: PostPost, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a post
     *
     * @tags Posts
     * @name PostsDelete
     * @summary Post Delete
     * @request DELETE:/posts/{id}
     * @secure
     */
    postsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Return journal posts from the iNaturalist site. If the user is logged-in, also return posts from projects the user is subscribed to
     *
     * @tags Posts
     * @name ForUserList
     * @summary Posts For User
     * @request GET:/posts/for_user
     * @secure
     */
    forUserList: (
      query?: {
        /**
         * returns posts newer than the post with this ID
         * @format date-time
         */
        newer_than?: string;
        /**
         * returns posts older than the post with this ID
         * @format date-time
         */
        older_than?: string;
        /** Pagination `page` number */
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/posts/for_user`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  projectObservations = {
    /**
     * @description Update a project observation
     *
     * @tags Project Observations
     * @name ProjectObservationsUpdate
     * @summary Project Observation Update
     * @request PUT:/project_observations/{id}
     * @secure
     */
    projectObservationsUpdate: (id: number, body: UpdateProjectObservation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/project_observations/${id}`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Delete a project observation
     *
     * @tags Project Observations
     * @name ProjectObservationsDelete
     * @summary Project Observation Delete
     * @request DELETE:/project_observations/{id}
     * @secure
     */
    projectObservationsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/project_observations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Add an observation to a project
     *
     * @tags Project Observations
     * @name ProjectObservationsCreate
     * @summary Project Observation Create
     * @request POST:/project_observations
     * @secure
     */
    projectObservationsCreate: (body: PostProjectObservation, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/project_observations`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  projects = {
    /**
     * @description Given zero to many of following parameters, returns projects matching the search criteria
     *
     * @tags Projects
     * @name ProjectsList
     * @summary Project Search
     * @request GET:/projects
     */
    projectsList: (
      query?: {
        /** Name must begin with this value */
        q?: string;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /** Must be associated with this place */
        place_id?: string[];
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius). Defaults to 500km
         */
        radius?: string;
        /** Must be marked featured for the relevant site */
        featured?: "true";
        /** Must be marked noteworthy for the relevant site */
        noteworthy?: "true";
        /**
         * Site ID that applies to `featured` and `noteworthy`. Defaults to the site
         * of the authenticated user, or to the main iNaturalist site
         * https://www.inaturalist.org
         */
        site_id?: number;
        /**
         * Return more information about project rules, for example return a full
         * taxon object instead of simply an ID
         */
        rule_details?: "true";
        /** Projects must be of this type */
        type?: "collection" | "umbrella";
        /** Project must have member with this user ID */
        member_id?: number;
        /** Must have search parameter requirements */
        has_params?: boolean;
        /** Must have posts */
        has_posts?: boolean;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /** Sort field */
        order_by?: "recent_posts" | "created" | "updated" | "distance" | "featured";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProjectsResponse, Error>({
        path: `/projects`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given an ID, or an array of IDs in comma-delimited format, returns corresponding projects. A maximum of 100 results will be returned
     *
     * @tags Projects
     * @name ProjectsDetail
     * @summary Project Details
     * @request GET:/projects/{id}
     */
    projectsDetail: (
      id: string[],
      query?: {
        /**
         * Return more information about project rules, for example return a full
         * taxon object instead of simply an ID
         */
        rule_details?: "true";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProjectsResponse, Error>({
        path: `/projects/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Join a project
     *
     * @tags Projects
     * @name JoinCreate
     * @summary Projects Join
     * @request POST:/projects/{id}/join
     * @secure
     */
    joinCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}/join`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Leave a project
     *
     * @tags Projects
     * @name LeaveDelete
     * @summary Projects Leave
     * @request DELETE:/projects/{id}/leave
     * @secure
     */
    leaveDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}/leave`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Given an ID, return members of the project
     *
     * @tags Projects
     * @name MembersDetail
     * @summary Project Members
     * @request GET:/projects/{id}/members
     */
    membersDetail: (
      id: number,
      query?: {
        /** Membership role */
        role?: "curator" | "manager";
        /**
         * If counts are not needed, consider setting this to true to save on
         * processing time, resulting in faster responses
         * @default false
         */
        skip_counts?: boolean;
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProjectMembersResponse, Error>({
        path: `/projects/${id}/members`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given an ID, or an array of IDs in comma-delimited format, return the details of the authenticated user's membership in these projects
     *
     * @tags Projects
     * @name MembershipDetail
     * @summary Membership of current user
     * @request GET:/projects/{id}/membership
     * @secure
     */
    membershipDetail: (id: number[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}/membership`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description [Deprecated] Subscriptions to projects are managed through joining and leaving projects, so this will not return any useful information. Given an ID, return subscription of the current user
     *
     * @tags Projects
     * @name SubscriptionsDetail
     * @summary Project Subscriptions
     * @request GET:/projects/{id}/subscriptions
     * @deprecated
     * @secure
     */
    subscriptionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}/subscriptions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Add an observation to a project
     *
     * @tags Projects
     * @name PostProjects
     * @summary Project Add
     * @request POST:/projects/{id}/add
     * @secure
     */
    postProjects: (id: number, body: PostProjectAdd, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}/add`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Remove an observation from a project
     *
     * @tags Projects
     * @name RemoveDelete
     * @summary Project Add
     * @request DELETE:/projects/{id}/remove
     * @secure
     */
    removeDelete: (id: number, body: PostProjectAdd, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/projects/${id}/remove`,
        method: "DELETE",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Given an string, returns projects with titles starting with the search term
     *
     * @tags Projects
     * @name AutocompleteList
     * @summary Project Autocomplete
     * @request GET:/projects/autocomplete
     */
    autocompleteList: (
      query: {
        /** Name must begin with this value */
        q: string;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /** Must be associated with this place */
        place_id?: string[];
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius). Defaults to 500km
         */
        radius?: string;
        /** Must be marked featured for the relevant site */
        featured?: "true";
        /** Must be marked noteworthy for the relevant site */
        noteworthy?: "true";
        /**
         * Site ID that applies to `featured` and `noteworthy`. Defaults to the site
         * of the authenticated user, or to the main iNaturalist site
         * https://www.inaturalist.org
         */
        site_id?: number;
        /**
         * Return more information about project rules, for example return a full
         * taxon object instead of simply an ID
         */
        rule_details?: "true";
        /** Projects must be of this type */
        type?: "collection" | "umbrella";
        /** Project must have member with this user ID */
        member_id?: number;
        /** Must have search parameter requirements */
        has_params?: boolean;
        /** Must have posts */
        has_posts?: boolean;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProjectsResponse, Error>({
        path: `/projects/autocomplete`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * @description Given zero to many of following parameters, returns object matching the search criteria
     *
     * @tags Search
     * @name SearchList
     * @summary Site Search
     * @request GET:/search
     */
    searchList: (
      query?: {
        /** Search object properties */
        q?: string;
        /** Must be of this type */
        sources?: "places" | "projects" | "taxa" | "users";
        /** Must be associated with this place */
        place_id?: string[];
        /**
         * Include taxon ancestors in the response
         * @default false
         */
        include_taxon_ancestors?: boolean;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/search`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  taxa = {
    /**
     * @description Given an ID, or an array of IDs in comma-delimited format, returns corresponding taxa. A maximum of 30 results will be returned
     *
     * @tags Taxa
     * @name TaxaDetail
     * @summary Taxon Details
     * @request GET:/taxa/{id}
     */
    taxaDetail: (
      id: number[],
      query?: {
        /**
         * Taxon must have this rank level. Some example values are 70 (kingdom),
         * 60 (phylum), 50 (class), 40 (order), 30 (family), 20 (genus),
         * 10 (species), 5 (subspecies)
         */
        rank_level?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaxaShowResponse, Error>({
        path: `/taxa/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns taxa matching the search criteria
     *
     * @tags Taxa
     * @name TaxaList
     * @summary Taxon Search
     * @request GET:/taxa
     */
    taxaList: (
      query?: {
        /** Name must begin with this value */
        q?: string;
        /** Taxon is `active` */
        is_active?: boolean;
        /**
         * Only show taxa with this ID, or its descendants
         * @min 1
         */
        taxon_id?: string[];
        /** Taxon's parent must have this ID */
        parent_id?: number;
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Taxon must have this rank level. Some example values are 70 (kingdom),
         * 60 (phylum), 50 (class), 40 (order), 30 (family), 20 (genus),
         * 10 (species), 5 (subspecies)
         */
        rank_level?: number;
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /** Return only the record IDs */
        only_id?: boolean;
        /** Include all taxon names in the response */
        all_names?: boolean;
        /**
         * Sort order
         * @default "desc"
         */
        order?: "desc" | "asc";
        /**
         * Sort field
         * @default "observations_count"
         */
        order_by?: "id" | "created_at" | "observations_count";
      },
      params: RequestParams = {},
    ) =>
      this.request<TaxaShowResponse, Error>({
        path: `/taxa`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Given an string, returns taxa with names starting with the search term
     *
     * @tags Taxa
     * @name AutocompleteList
     * @summary Taxon Autocomplete
     * @request GET:/taxa/autocomplete
     */
    autocompleteList: (
      query: {
        /** Name must begin with this value */
        q: string;
        /** Taxon is `active` */
        is_active?: boolean;
        /**
         * Only show taxa with this ID, or its descendants
         * @min 1
         */
        taxon_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /**
         * Taxon must have this rank level. Some example values are 70 (kingdom),
         * 60 (phylum), 50 (class), 40 (order), 30 (family), 20 (genus),
         * 10 (species), 5 (subspecies)
         */
        rank_level?: number;
        /** Number of results to return in a `page`. The maximum value is 30 for this endpoint */
        per_page?: string;
        /** Locale preference for taxon common names */
        locale?: string;
        /** Place preference for regional taxon common names */
        preferred_place_id?: number;
        /** Include all taxon names in the response */
        all_names?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaxaAutocompleteResponse, Error>({
        path: `/taxa/autocomplete`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Given an ID, returns corresponding user
     *
     * @tags Users
     * @name UsersDetail
     * @summary User Details
     * @request GET:/users/{id}
     */
    usersDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Update a user
     *
     * @tags Users
     * @name UsersUpdate
     * @summary User Update
     * @request PUT:/users/{id}
     * @secure
     */
    usersUpdate: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "PUT",
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Return projects as user has joined / followed
     *
     * @tags Users
     * @name ProjectsDetail
     * @summary User Projects
     * @request GET:/users/{id}/projects
     */
    projectsDetail: (
      id: number,
      query?: {
        /**
         * Return more information about project rules, for example return a full
         * taxon object instead of simply an ID
         */
        rule_details?: "true";
        /** Specify the type of project to return */
        project_type?: "traditional" | "collection" | "umbrella";
        /** Pagination `page` number */
        page?: string;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/${id}/projects`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given an string, returns users with names or logins starting with the search term
     *
     * @tags Users
     * @name AutocompleteList
     * @summary User Autocomplete
     * @request GET:/users/autocomplete
     */
    autocompleteList: (
      query: {
        /** Name must begin with this value */
        q: string;
        /** Only show users with memberships to this project */
        project_id?: number;
        /**
         * Number of results to return in a `page`. The maximum value is generally
         * 200 unless otherwise noted
         */
        per_page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/autocomplete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Fetch the logged-in user
     *
     * @tags Users
     * @name GetUsers
     * @summary Users Me
     * @request GET:/users/me
     * @secure
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Make it so the authenticated user stops receiving notifications about activity by the user specified by {id}.
     *
     * @tags Users
     * @name MuteCreate
     * @summary Mute a User
     * @request POST:/users/{id}/mute
     * @secure
     */
    muteCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}/mute`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Remove a mute on the user specified by {id}
     *
     * @tags Users
     * @name MuteDelete
     * @summary Unmute a User
     * @request DELETE:/users/{id}/mute
     * @secure
     */
    muteDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${id}/mute`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Resend an email confirmation
     *
     * @tags Users
     * @name ResendConfirmationCreate
     * @summary User Resend Confirmation
     * @request POST:/users/resend_confirmation
     * @secure
     */
    resendConfirmationCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/resend_confirmation`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update the logged-in user's session
     *
     * @tags Users
     * @name UpdateSessionUpdate
     * @summary User Update Session
     * @request PUT:/users/update_session
     * @secure
     */
    updateSessionUpdate: (body: PostUserUpdateSession, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/update_session`,
        method: "PUT",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  coloredHeatmap = {
    /**
     * @description Given zero to many of following parameters, returns a PNG image representing the matching observations within a map tile, following the XYZ tiling scheme
     *
     * @tags Observation Tiles
     * @name PngDetail
     * @summary Colored Heatmap Tiles
     * @request GET:/colored_heatmap/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/colored_heatmap/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns a JSON file following the UTFGrid spec, representing observations matching the search criteria
     *
     * @tags UTFGrid
     * @name GridJsonDetail
     * @summary Colored Heatmap Tiles UTFGrid
     * @request GET:/colored_heatmap/{zoom}/{x}/{y}.grid.json
     */
    gridJsonDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UTFGridResponse, Error>({
        path: `/colored_heatmap/${zoom}/{x}/{y}.grid.json`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  grid = {
    /**
     * @description Given zero to many of following parameters, returns a PNG image representing the matching observations within a map tile, following the XYZ tiling scheme
     *
     * @tags Observation Tiles
     * @name PngDetail
     * @summary Grid Tiles
     * @request GET:/grid/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/grid/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns a JSON file following the UTFGrid spec, representing observations matching the search criteria
     *
     * @tags UTFGrid
     * @name GridJsonDetail
     * @summary Grid Tiles UTFGrid
     * @request GET:/grid/{zoom}/{x}/{y}.grid.json
     */
    gridJsonDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UTFGridResponse, Error>({
        path: `/grid/${zoom}/{x}/{y}.grid.json`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  heatmap = {
    /**
     * @description Given zero to many of following parameters, returns a PNG image representing the matching observations within a map tile, following the XYZ tiling scheme
     *
     * @tags Observation Tiles
     * @name PngDetail
     * @summary Heatmap Tiles
     * @request GET:/heatmap/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/heatmap/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns a JSON file following the UTFGrid spec, representing observations matching the search criteria
     *
     * @tags UTFGrid
     * @name GridJsonDetail
     * @summary Heatmap Tiles UTFGrid
     * @request GET:/heatmap/{zoom}/{x}/{y}.grid.json
     */
    gridJsonDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UTFGridResponse, Error>({
        path: `/heatmap/${zoom}/{x}/{y}.grid.json`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  points = {
    /**
     * @description Given zero to many of following parameters, returns a PNG image representing the matching observations within a map tile, following the XYZ tiling scheme
     *
     * @tags Observation Tiles
     * @name PngDetail
     * @summary Points Tiles
     * @request GET:/points/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/points/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Given zero to many of following parameters, returns a JSON file following the UTFGrid spec, representing observations matching the search criteria
     *
     * @tags UTFGrid
     * @name GridJsonDetail
     * @summary Points Tiles UTFGrid
     * @request GET:/points/{zoom}/{x}/{y}.grid.json
     */
    gridJsonDetail: (
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /** Whether or not positional accuracy / coordinate uncertainty has been specified */
        acc?: boolean;
        /** Captive or cultivated observations */
        captive?: boolean;
        /** Observations whose taxa are endemic to their location */
        endemic?: boolean;
        /** Observations that are georeferenced */
        geo?: boolean;
        /** Observations with the deprecated `ID, Please!` flag. Note that this will return observations, but that this attribute is no longer used. */
        id_please?: boolean;
        /** Observations that have community identifications */
        identified?: boolean;
        /** Observations whose taxa are introduced in their location */
        introduced?: boolean;
        /** Observations that show on map tiles */
        mappable?: boolean;
        /** Observations whose taxa are native to their location */
        native?: boolean;
        /** Observations whose taxa are outside their known ranges */
        out_of_range?: boolean;
        /**
         * Observations identified by the curator of a project. If
         * the `project_id` parameter is also specified, this will only consider
         * observations identified by curators of the specified project(s)
         */
        pcid?: boolean;
        /** Observations with photos */
        photos?: boolean;
        /** Observations that have been favorited by at least one user */
        popular?: boolean;
        /** Observations with sounds */
        sounds?: boolean;
        /** Observations of active taxon concepts */
        taxon_is_active?: boolean;
        /** Observations whose taxa are threatened in their location */
        threatened?: boolean;
        /**
         * Observations with a `quality_grade` of either `needs_id` or
         * `research`. Equivalent to `quality_grade=needs_id,research`
         */
        verifiable?: boolean;
        /** License attribute of an observation must not be null */
        licensed?: boolean;
        /** License attribute of at least one photo of an observation must not be null */
        photo_licensed?: boolean;
        /** Observation taxon is expected nearby */
        expected_nearby?: boolean;
        /**
         * Must have this ID
         * @min 1
         */
        id?: string[];
        /**
         * Must not have this ID
         * @min 1
         */
        not_id?: string[];
        /** Observation must have this license */
        license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Must have an observation field value with this datatype
         * @min 1
         * @max 31
         */
        ofv_datatype?: string[];
        /** Must have at least one photo with this license */
        photo_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /** Must be observed within the place with this ID */
        place_id?: number[];
        /** Must be added to the project this ID or slug */
        project_id?: string[];
        /** Taxon must have this rank */
        rank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Must be affiliated with the iNaturalist network website with this ID */
        site_id?: string[];
        /** Must have at least one sound with this license */
        sound_license?: "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa" | "cc0";
        /**
         * Only show observations of these taxa and their descendants
         * @min 1
         */
        taxon_id?: string[];
        /**
         * Exclude observations of these taxa and their descendants
         * @min 1
         */
        without_taxon_id?: string[];
        /** Taxon must have a scientific or common name matching this string */
        taxon_name?: string[];
        /**
         * User must have this ID or login
         * @min 1
         */
        user_id?: string[];
        /** User must have this login */
        user_login?: string[];
        /** Observations identified by a particular user */
        ident_user_id?: number;
        /**
         * Must be observed within this hour of the day
         * @min 0
         * @max 23
         */
        hour?: string[];
        /**
         * Must be observed within this day of the month
         * @min 1
         * @max 31
         */
        day?: string[];
        /**
         * Must be observed within this month
         * @min 1
         * @max 12
         */
        month?: string[];
        /**
         * Must be observed within this year
         * @min 1
         */
        year?: string[];
        /**
         * Must be created within this day of the month
         * @min 1
         * @max 31
         */
        created_day?: string[];
        /**
         * Must be created within this month
         * @min 1
         * @max 12
         */
        created_month?: string[];
        /**
         * Must be created within this year
         * @min 1
         */
        created_year?: string[];
        /** Must have an annotation using this controlled term ID */
        term_id?: number[];
        /**
         * Must have an annotation using this controlled value ID. Must be combined
         * with the `term_id` parameter
         */
        term_value_id?: number[];
        /** Exclude observations with annotations using this controlled value ID. */
        without_term_id?: number;
        /**
         * Exclude observations with annotations using this controlled value ID.
         * Must be combined with the `term_id` parameter
         */
        without_term_value_id?: number[];
        /**
         * Must be combined with the `term_value_id` or the `without_term_value_id` parameter.
         * Must have an annotation using this controlled term ID and associated term value IDs
         * or be missing this annotation.
         */
        term_id_or_unknown?: number[];
        /** Must have an annotation created by this user */
        annotation_user_id?: string[];
        /** Must have a positional accuracy above this value (meters) */
        acc_above?: string;
        /** Must have a positional accuracy below this value (meters) */
        acc_below?: string;
        /** Positional accuracy must be below this value (in meters) or be unknown */
        acc_below_or_unknown?: string;
        /**
         * Must be observed on or after this date
         * @format date
         */
        d1?: string;
        /**
         * Must be observed on or before this date
         * @format date
         */
        d2?: string;
        /**
         * Must be created at or after this time
         * @format date-time
         */
        created_d1?: string;
        /**
         * Must be created at or before this time
         * @format date-time
         */
        created_d2?: string;
        /**
         * Must be created on this date
         * @format date
         */
        created_on?: string;
        /**
         * Must be observed on this date
         * @format date
         */
        observed_on?: string;
        /** Must not be of a taxon previously observed by this user */
        unobserved_by_user_id?: number;
        /** Must match the rules of the project with this ID or slug */
        apply_project_rules_for?: string;
        /**
         * Taxon must have this conservation status code. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        cs?: string;
        /**
         * Taxon must have a conservation status from this authority. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csa?: string;
        /**
         * Taxon must have this IUCN conservation status. If
         * the `place_id` parameter is also specified, this will only consider
         * statuses specific to that place
         */
        csi?: "LC" | "NT" | "VU" | "EN" | "CR" | "EW" | "EX";
        /** Must have this geoprivacy setting */
        geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /**
         * Filter observations by the most conservative geoprivacy applied by a
         * conservation status associated with one of the taxa proposed in the
         * current identifications.
         */
        taxon_geoprivacy?: "obscured" | "obscured_private" | "open" | "private";
        /** Must have `geoprivacy` or `taxon_geoprivacy` fields matching these values */
        obscuration?: "obscured" | "private" | "none";
        /** Taxon must have this rank or lower */
        hrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must have this rank or higher */
        lrank?:
          | "kingdom"
          | "phylum"
          | "subphylum"
          | "superclass"
          | "class"
          | "subclass"
          | "superorder"
          | "order"
          | "suborder"
          | "infraorder"
          | "superfamily"
          | "epifamily"
          | "family"
          | "subfamily"
          | "supertribe"
          | "tribe"
          | "subtribe"
          | "genus"
          | "genushybrid"
          | "species"
          | "hybrid"
          | "subspecies"
          | "variety"
          | "form";
        /** Taxon must by within this iconic taxon */
        iconic_taxa?:
          | "Actinopterygii"
          | "Animalia"
          | "Amphibia"
          | "Arachnida"
          | "Aves"
          | "Chromista"
          | "Fungi"
          | "Insecta"
          | "Mammalia"
          | "Mollusca"
          | "Reptilia"
          | "Plantae"
          | "Protozoa"
          | "unknown";
        /** Must have an ID above this value */
        id_above?: string;
        /** Must have an ID below this value */
        id_below?: string;
        /** Identifications must meet these criteria */
        identifications?: "most_agree" | "most_disagree" | "some_agree";
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lat?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         * @format double
         */
        lng?: number;
        /**
         * Must be within a {`radius`} kilometer circle around this lat/lng
         * (*lat, *lng, radius)
         */
        radius?: string;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        nelng?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlat?: number;
        /**
         * Must be within this bounding box (*nelat, *nelng, *swlat, *swlng)
         * @format double
         */
        swlng?: number;
        /** Taxon must be in the list with this ID */
        list_id?: number;
        /** Must not be in the project with this ID or slug */
        not_in_project?: string;
        /** Must not match the rules of the project with this ID or slug */
        not_matching_project_rules_for?: string;
        /** Must included in this observation accuracy experiment */
        observation_accuracy_experiment_id?: number[];
        /** Search observation properties. Can be combined with `search_on` */
        q?: string;
        /**
         * Properties to search on, when combined with `q`.
         * Searches across all properties by default
         */
        search_on?: "names" | "tags" | "description" | "place";
        /** Must have this quality grade */
        quality_grade?: "casual" | "needs_id" | "research";
        /** Must be updated since this time */
        updated_since?: string;
        /** See `reviewed` */
        viewer_id?: string;
        /**
         * Observations have been reviewed by the user with ID equal to
         * the value of the `viewer_id` parameter
         */
        reviewed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UTFGridResponse, Error>({
        path: `/points/${zoom}/{x}/{y}.grid.json`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  taxonPlaces = {
    /**
     * @description Returns a PNG map tile representing the boundaries of places this taxon is known to occur, following the XYZ tiling scheme
     *
     * @tags Polygon Tiles
     * @name PngDetail
     * @summary Taxon Place Tiles
     * @request GET:/taxon_places/{taxon_id}/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      taxonId: number,
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/taxon_places/${taxonId}/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  taxonRanges = {
    /**
     * @description Returns a PNG map tile representing the range of this taxon, following the XYZ tiling scheme
     *
     * @tags Polygon Tiles
     * @name PngDetail
     * @summary Taxon Range Tiles
     * @request GET:/taxon_ranges/{taxon_id}/{zoom}/{x}/{y}.png
     */
    pngDetail: (
      taxonId: number,
      zoom: number,
      x: number,
      y: number,
      query?: {
        /**
         * Primary color to use in tile creation. Accepts common colors by string
         * (e.g. `color=blue`), and accepts escaped color HEX codes
         * (e.g. `color=%2386a91c`)
         */
        color?: string;
        /**
         * Set the `Cache-Control` HTTP header with this value as `max-age`, in
         * seconds. This means subsequent identical requests will be cached on
         * iNaturalist servers, and commonly within web browsers
         */
        ttl?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/taxon_ranges/${taxonId}/${zoom}/{x}/{y}.png`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}
