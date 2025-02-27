import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/pexec/status/request-types";
import { Schemas$PexecStatusGetResponse } from "nvidia_cloud_functions_ts/types/pexec-status-get-response";

export class StatusClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Poll For Result Using Function Invocation Request
   *
   * Retrieves the status of an in-progress or pending request using its unique  invocation request ID. If the result is available, it will be included in  the response, marking the request as fulfilled. Conversely, if the result is  not yet available, the request is deemed pending. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with  'invoke_function' scope in the HTTP Authorization header. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept.
   *
   * GET /v2/nvcf/pexec/status/{requestId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PexecStatusGetResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/pexec/status/${request.requestId}`,
      responseSchema: Schemas$PexecStatusGetResponse.in,
      opts,
    });
  }
}
