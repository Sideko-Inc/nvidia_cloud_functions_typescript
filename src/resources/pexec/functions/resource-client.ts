import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/pexec/functions/request-types";
import { VersionsClient } from "nvidia_cloud_functions_ts/resources/pexec/functions/versions";
import { Schemas$PexecFunctionsCreateResponseArrItem } from "nvidia_cloud_functions_ts/types/pexec-functions-create-response-arr-item";
import { Schemas$PexecFunctionsCreateResponseObj } from "nvidia_cloud_functions_ts/types/pexec-functions-create-response-obj";
import * as z from "zod";

export class FunctionsClient extends CoreResourceClient {
  versions: VersionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.versions = new VersionsClient(this._client);
  }
  /**
   * Call Function
   *
   * Invokes the specified function that was successfully deployed. If the version  is not specified, any active function versions will handle the request. If  the version is specified in the URI, then the request is exclusively processed  by the designated version of the function. By default, this endpoint will block  for 5 seconds. If the request is not fulfilled before the timeout, it's status  is considered in-progress or pending and the response includes HTTP status code  202 with an invocation request ID, indicating that the client should commence  polling for the result using the invocation request ID. Access to this endpoint  mandates inclusion of either a bearer token or an api-key with 'invoke_function'  scope in the HTTP Authorization header. Additionally, this endpoint has the  capability to provide updates on the progress of the request, contingent  upon the workload's provision of such information. In-progress responses are returned in order. If no in-progress response is received  during polling you will receive the most recent in-progress response. Only the first  256 unread in-progress messages are kept.
   *
   * POST /v2/nvcf/pexec/functions/{functionId}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | types.PexecFunctionsCreateResponseObj
    | types.PexecFunctionsCreateResponseArrItem[]
  > {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/nvcf/pexec/functions/${request.functionId}`,
      contentType: "application/json",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.union([
        Schemas$PexecFunctionsCreateResponseObj.in,
        z.array(Schemas$PexecFunctionsCreateResponseArrItem.in),
      ]),
      opts,
    });
  }
}
