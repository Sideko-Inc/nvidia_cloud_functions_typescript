import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/authorizations/functions/versions/add/request-types";
import { Schemas$AuthorizedPartiesResponse } from "nvidia_cloud_functions_ts/types/authorized-parties-response";
import { Schemas$PatchAuthorizedPartyRequest } from "nvidia_cloud_functions_ts/types/patch-authorized-party-request";

export class AddClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Authorize Additional Account To Invoke Function Version
   *
   * Adds the specified NVIDIA Cloud Account to the set of authorized accounts that  can invoke the specified function version. If the specified function version  does not have any existing inheritable authorized accounts, it results in a  response with status 404. If the specified account is already in the set of  existing authorized accounts that are directly associated with the function  version, it results in a response wit status code 409. If a function is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * PATCH /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/add
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}/versions/${request.functionVersionId}/add`,
      contentType: "application/json",
      body: Schemas$PatchAuthorizedPartyRequest.out.parse(request),
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
}
