import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import { Schemas$ClusterGroupsResponse } from "nvidia_cloud_functions_ts/types/cluster-groups-response";

export class ClusterGroupsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * List Cluster Groups
   *
   * Lists Cluster Groups for the current account. The response includes cluster  groups defined specifically in the current account and publicly available  cluster groups such as GFN, OCI, etc. Requires a bearer token with 'list_cluster_groups' scope in HTTP Authorization header.
   *
   * GET /v2/nvcf/clusterGroups
   */
  list(opts?: RequestOptions): ApiPromise<types.ClusterGroupsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/nvcf/clusterGroups",
      responseSchema: Schemas$ClusterGroupsResponse.in,
      opts,
    });
  }
}
