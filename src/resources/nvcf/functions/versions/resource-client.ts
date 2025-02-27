import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/functions/versions/request-types";
import { Schemas$CreateFunctionRequest } from "nvidia_cloud_functions_ts/types/create-function-request";
import { Schemas$CreateFunctionResponse } from "nvidia_cloud_functions_ts/types/create-function-response";
import { Schemas$FunctionResponse } from "nvidia_cloud_functions_ts/types/function-response";
import { Schemas$ListFunctionsResponse } from "nvidia_cloud_functions_ts/types/list-functions-response";

export class VersionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create Function Version
   *
   * Creates a version of the specified function within the authenticated NVIDIA  Cloud Account. Requires a bearer token with 'register_function' scope in the  HTTP Authorization header.
   *
   * POST /v2/nvcf/functions/{functionId}/versions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateFunctionResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/nvcf/functions/${request.functionId}/versions`,
      contentType: "application/json",
      body: Schemas$CreateFunctionRequest.out.parse(request),
      responseSchema: Schemas$CreateFunctionResponse.in,
      opts,
    });
  }
  /**
   * Get Function Version Details
   *
   * Retrieves detailed information of the specified function version in the  authenticated NVIDIA Cloud Account. Requires either a bearer token or an  api-key with 'list_functions' or 'list_functions_details' scopes in the HTTP  Authorization header.
   *
   * GET /v2/nvcf/functions/{functionId}/versions/{functionVersionId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FunctionResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/functions/${request.functionId}/versions/${request.functionVersionId}`,
      responseSchema: Schemas$FunctionResponse.in,
      opts,
    });
  }
  /**
   * List Function Versions
   *
   * Lists details of all the versions of the specified function in the authenticated  NVIDIA Cloud Account. Requires either a bearer token or an api-key with  'list_functions' or 'list_functions_details' scopes in the HTTP Authorization  header.
   *
   * GET /v2/nvcf/functions/{functionId}/versions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ListFunctionsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/functions/${request.functionId}/versions`,
      responseSchema: Schemas$ListFunctionsResponse.in,
      opts,
    });
  }
  /**
   * Delete Function
   *
   * Deletes the specified function version in the authenticated NVIDIA Cloud  Account. Requires a bearer token with 'delete_function' scope in the HTTP  Authorization header. If the function version is public, then Account Admin  cannot delete the function.
   *
   * DELETE /v2/nvcf/functions/{functionId}/versions/{functionVersionId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/nvcf/functions/${request.functionId}/versions/${request.functionVersionId}`,
      responseRaw: true,
      opts,
    });
  }
}
