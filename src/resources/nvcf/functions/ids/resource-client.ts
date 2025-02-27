import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/functions/ids/request-types";
import { Schemas$ListFunctionIdsResponse } from "nvidia_cloud_functions_ts/types/list-function-ids-response";
import * as z from "zod";

export class IdsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * List Function Ids
   *
   * Lists ids of all the functions in the authenticated NVIDIA Cloud Account.  Requires either a bearer token or an api-key with 'list_functions' or  'list_functions_details' scopes in the HTTP Authorization header.
   *
   * GET /v2/nvcf/functions/ids
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ListFunctionIdsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v2/nvcf/functions/ids",
      query: [
        encodeQueryParam({
          name: "visibility",
          value: z
            .array(z.enum(["authorized", "private", "public"]))
            .optional()
            .parse(request.visibility),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ListFunctionIdsResponse.in,
      opts,
    });
  }
}
