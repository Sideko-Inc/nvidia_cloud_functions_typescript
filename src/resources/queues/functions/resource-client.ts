import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/queues/functions/request-types";
import { VersionsClient } from "nvidia_cloud_functions_ts/resources/queues/functions/versions";
import { Schemas$GetQueuesResponse } from "nvidia_cloud_functions_ts/types/get-queues-response";

export class FunctionsClient extends CoreResourceClient {
  versions: VersionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.versions = new VersionsClient(this._client);
  }
  /**
   * Queue Details
   *
   * Provides details of all the queues associated with the specified function.  If a function has multiple versions and they are all deployed, then the  response includes details of all the queues. If the specified function  is public, then Account Admin cannot perform this operation. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header.
   *
   * GET /v2/nvcf/queues/functions/{functionId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetQueuesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/queues/functions/${request.functionId}`,
      responseSchema: Schemas$GetQueuesResponse.in,
      opts,
    });
  }
}
