import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/queues/functions/versions/request-types";
import { Schemas$GetQueuesResponse } from "nvidia_cloud_functions_ts/types/get-queues-response";

export class VersionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Queue Details
   *
   * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header.
   *
   * GET /v2/nvcf/queues/functions/{functionId}/versions/{versionId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetQueuesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/queues/functions/${request.functionId}/versions/${request.versionId}`,
      responseSchema: Schemas$GetQueuesResponse.in,
      opts,
    });
  }
}
