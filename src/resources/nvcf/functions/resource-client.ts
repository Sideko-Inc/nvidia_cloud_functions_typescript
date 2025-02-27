import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "nvidia_cloud_functions_ts/core";
import { IdsClient } from "nvidia_cloud_functions_ts/resources/nvcf/functions/ids";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/functions/request-types";
import { VersionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/functions/versions";
import { Schemas$CreateFunctionRequest } from "nvidia_cloud_functions_ts/types/create-function-request";
import { Schemas$CreateFunctionResponse } from "nvidia_cloud_functions_ts/types/create-function-response";
import { Schemas$ListFunctionsResponse } from "nvidia_cloud_functions_ts/types/list-functions-response";
import * as z from "zod";

export class FunctionsClient extends CoreResourceClient {
  versions: VersionsClient;
  ids: IdsClient;

  constructor(client: CoreClient) {
    super(client);

    this.versions = new VersionsClient(this._client);
    this.ids = new IdsClient(this._client);
  }
  /**
   * Create Function
   *
   * Creates a new function within the authenticated NVIDIA Cloud Account. Requires a  bearer token with 'register_function' scope in the HTTP Authorization header.
   *
   * POST /v2/nvcf/functions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateFunctionResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/nvcf/functions",
      contentType: "application/json",
      body: Schemas$CreateFunctionRequest.out.parse(request),
      responseSchema: Schemas$CreateFunctionResponse.in,
      opts,
    });
  }
  /**
   * List Functions
   *
   * Lists all the functions associated with the authenticated NVIDIA Cloud Account.  Requires either a bearer token or an api-key with 'list_functions' or  'list_functions_details' scopes in the HTTP Authorization header.
   *
   * GET /v2/nvcf/functions
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ListFunctionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/nvcf/functions",
      query: [
        encodeQueryParam({
          name: "visibility",
          value: z
            .array(z.enum(["authorized", "private", "public"]))
            .optional()
            .parse(request.visibility),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ListFunctionsResponse.in,
      opts,
    });
  }
}
