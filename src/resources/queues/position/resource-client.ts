import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/queues/position/request-types";
import { Schemas$GetPositionInQueueResponse } from "nvidia_cloud_functions_ts/types/get-position-in-queue-response";

export class PositionClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Queue Position
   *
   * Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header.
   *
   * GET /v2/nvcf/queues/{requestId}/position
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetPositionInQueueResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/queues/${request.requestId}/position`,
      responseSchema: Schemas$GetPositionInQueueResponse.in,
      opts,
    });
  }
}
