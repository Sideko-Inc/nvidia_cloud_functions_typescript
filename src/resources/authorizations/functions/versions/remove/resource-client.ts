import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/authorizations/functions/versions/remove/request-types";
import { Schemas$AuthorizedPartiesResponse } from "nvidia_cloud_functions_ts/types/authorized-parties-response";
import { Schemas$PatchAuthorizedPartyRequest } from "nvidia_cloud_functions_ts/types/patch-authorized-party-request";

export class RemoveClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Unauthorize Account From Invoking Function Version
   *
   * Removes the specified NVIDIA Cloud Account from the set of authorized accounts  that are directly associated with specified function version. If the specified  function version does not have any of its own(not inherited) authorized  accounts, it results in a response with status 404. Also, if the specified  authorized account is not in the set of existing authorized parties that are  directly associated with the specified function version, it results in a  response with status code 400. If the specified function version is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header
   *
   * PATCH /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/remove
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AuthorizedPartiesResponse> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v2/nvcf/authorizations/functions/${request.functionId}/versions/${request.functionVersionId}/remove`,
      contentType: "application/json",
      body: Schemas$PatchAuthorizedPartyRequest.out.parse(request),
      responseSchema: Schemas$AuthorizedPartiesResponse.in,
      opts,
    });
  }
}
