import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/assets/request-types";
import { Schemas$AssetResponse } from "nvidia_cloud_functions_ts/types/asset-response";
import { Schemas$CreateAssetRequest } from "nvidia_cloud_functions_ts/types/create-asset-request";
import { Schemas$CreateAssetResponse } from "nvidia_cloud_functions_ts/types/create-asset-response";
import { Schemas$ListAssetsResponse } from "nvidia_cloud_functions_ts/types/list-assets-response";

export class AssetsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create Asset
   *
   * Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with 'invoke_function' scope in the HTTP  Authorization header.
   *
   * POST /v2/nvcf/assets
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateAssetResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v2/nvcf/assets",
      contentType: "application/json",
      body: Schemas$CreateAssetRequest.out.parse(request),
      responseSchema: Schemas$CreateAssetResponse.in,
      opts,
    });
  }
  /**
   * Show Asset Details
   *
   * Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  'invoke_function' scope in the HTTP Authorization header.
   *
   * GET /v2/nvcf/assets/{assetId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AssetResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/assets/${request.assetId}`,
      responseSchema: Schemas$AssetResponse.in,
      opts,
    });
  }
  /**
   * List Assets
   *
   * List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header.
   *
   * GET /v2/nvcf/assets
   */
  list(opts?: RequestOptions): ApiPromise<types.ListAssetsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/nvcf/assets",
      responseSchema: Schemas$ListAssetsResponse.in,
      opts,
    });
  }
  /**
   * Delete Asset
   *
   * Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with 'invoke_function' scope in the HTTP  Authorization header.
   *
   * DELETE /v2/nvcf/assets/{assetId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/nvcf/assets/${request.assetId}`,
      responseRaw: true,
      opts,
    });
  }
}
