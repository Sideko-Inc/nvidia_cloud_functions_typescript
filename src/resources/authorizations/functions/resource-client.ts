import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import { AddClient } from "nvidia_cloud_functions_ts/resources/authorizations/functions/add";
import { RemoveClient } from "nvidia_cloud_functions_ts/resources/authorizations/functions/remove";
import * as requests from "nvidia_cloud_functions_ts/resources/authorizations/functions/request-types";
import { VersionsClient } from "nvidia_cloud_functions_ts/resources/authorizations/functions/versions";
import { Schemas$AuthorizedPartiesRequest } from "nvidia_cloud_functions_ts/types/authorized-parties-request";
import { Schemas$AuthorizedPartiesResponse } from "nvidia_cloud_functions_ts/types/authorized-parties-response";
import { Schemas$ListAuthorizedPartiesResponse } from "nvidia_cloud_functions_ts/types/list-authorized-parties-response";

export class FunctionsClient extends CoreResourceClient {
  versions: VersionsClient;
  add: AddClient;
  remove: RemoveClient;

  constructor(client: CoreClient) {
    super(client);

    this.versions = new VersionsClient(this._client);
    this.add = new AddClient(this._client);
    this.remove = new RemoveClient(this._client);
  }
  /**
   * Authorize Accounts To Invoke Function
   *
   * Authorizes additional NVIDIA Cloud Accounts to invoke any version of the  specified function. By default, a function belongs to the NVIDIA Cloud Account  that created it, and the credentials used for function invocation must  reference the same NVIDIA Cloud Account. Upon invocation of this endpoint, any  existing authorized accounts will be overwritten by the newly specified  authorized accounts. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * POST /v2/nvcf/authorizations/functions/{functionId}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}`,
      contentType: "application/json",
      body: Schemas$AuthorizedPartiesRequest.out.parse(request),
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
  /**
   * List Account Authorizations For Function
   *
   * Lists NVIDIA Cloud Account IDs that are authorized to invoke any version of the  specified function. The response includes an array showing authorized accounts  for each version. Individual versions of a function can have their own  authorized accounts. So, each object in the array can have different  authorized accounts listed. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * GET /v2/nvcf/authorizations/functions/{functionId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ListAuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}`,
      responseSchema: Schemas$ListAuthorizedPartiesResponse.in,
      opts,
    });
  }
  /**
   * Delete All Extra Authorizations For Function
   *
   * Deletes all the extra NVIDIA Cloud Accounts that were authorized to invoke the  function and all its versions. If a function version has its own set of  authorized accounts, those are not deleted. If the specified function is  public, then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * DELETE /v2/nvcf/authorizations/functions/{functionId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}`,
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
}
