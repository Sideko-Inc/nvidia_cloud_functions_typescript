import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import { AddClient } from "nvidia_cloud_functions_ts/resources/nvcf/authorizations/functions/versions/add";
import { RemoveClient } from "nvidia_cloud_functions_ts/resources/nvcf/authorizations/functions/versions/remove";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/authorizations/functions/versions/request-types";
import { Schemas$AuthorizedPartiesRequest } from "nvidia_cloud_functions_ts/types/authorized-parties-request";
import { Schemas$AuthorizedPartiesResponse } from "nvidia_cloud_functions_ts/types/authorized-parties-response";

export class VersionsClient extends CoreResourceClient {
  add: AddClient;
  remove: RemoveClient;

  constructor(client: CoreClient) {
    super(client);

    this.add = new AddClient(this._client);
    this.remove = new RemoveClient(this._client);
  }
  /**
   * Authorize Accounts To Invoke Function Version
   *
   * Authorizes additional NVIDIA Cloud Accounts to invoke a specific function  version. By default, a function belongs to the NVIDIA Cloud Account that  created it, and the credentials used for function invocation must reference  the same NVIDIA Cloud Account. Upon invocation of this endpoint, any existing  authorized accounts will be overwritten by the newly specified authorized  accounts. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * POST /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}/versions/${request.functionVersionId}`,
      contentType: "application/json",
      body: Schemas$AuthorizedPartiesRequest.out.parse(request),
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
  /**
   * Get Account Authorizations For Function Version
   *
   * Gets NVIDIA Cloud Account IDs that are authorized to invoke specified function  version. Response includes authorized accounts that were added specifically  to the function version and the inherited authorized accounts that were  added at the function level. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * GET /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}/versions/${request.functionVersionId}`,
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
  /**
   * Delete All Extra Authorizations For Function Version
   *
   * Deletes all the authorized accounts that are directly associated with the  specified function version. Authorized parties that are inherited by the  function version are not deleted. If the specified function version is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * DELETE /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}/versions/${request.functionVersionId}`,
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
}
