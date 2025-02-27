import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "nvidia_cloud_functions_ts/core";
import * as requests from "nvidia_cloud_functions_ts/resources/nvcf/deployments/functions/versions/request-types";
import { Schemas$DeploymentResponse } from "nvidia_cloud_functions_ts/types/deployment-response";
import { Schemas$FunctionDeploymentRequest } from "nvidia_cloud_functions_ts/types/function-deployment-request";
import { Schemas$FunctionResponse } from "nvidia_cloud_functions_ts/types/function-response";
import * as z from "zod";

export class VersionsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update Function Deployment
   *
   * Updates the deployment specs of the specified function version. It's important  to note that GPU type and backend configurations cannot be modified through  this endpoint. If the specified function is public, then Account Admin cannot  perform this operation. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header.
   *
   * PUT /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeploymentResponse> {
    return this._client.makeRequest({
      method: "put",
      path: `/v2/nvcf/deployments/functions/${request.functionId}/versions/${request.functionVersionId}`,
      contentType: "application/json",
      body: Schemas$FunctionDeploymentRequest.out.parse(request),
      responseSchema: Schemas$DeploymentResponse.in,
      opts,
    });
  }
  /**
   * Deploy Function
   *
   * Initiates deployment for the specified function version. Upon invocation of  this endpoint, the function's status transitions to 'DEPLOYING'. If the  specified function version is public, then Account Admin cannot perform this  operation. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header.
   *
   * POST /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeploymentResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v2/nvcf/deployments/functions/${request.functionId}/versions/${request.functionVersionId}`,
      contentType: "application/json",
      body: Schemas$FunctionDeploymentRequest.out.parse(request),
      responseSchema: Schemas$DeploymentResponse.in,
      opts,
    });
  }
  /**
   * Get Function Deployment Details
   *
   * Allows Account Admins to retrieve the deployment details of the specified  function version. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header.
   *
   * GET /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeploymentResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v2/nvcf/deployments/functions/${request.functionId}/versions/${request.functionVersionId}`,
      responseSchema: Schemas$DeploymentResponse.in,
      opts,
    });
  }
  /**
   * Delete Function Deployment
   *
   * Deletes the deployment associated with the specified function. Upon  deletion, any active instances will be terminated, and the function's status  will transition to 'INACTIVE'. To undeploy a function version gracefully,  specify 'graceful=true' query parameter, allowing current tasks to complete  before terminating the instances. If the specified function version is public,  then Account Admin cannot perform this operation. Access to this endpoint mandates a bearer token with 'deploy_function' scope in the  HTTP Authorization header.
   *
   * DELETE /v2/nvcf/deployments/functions/{functionId}/versions/{functionVersionId}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FunctionResponse> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v2/nvcf/deployments/functions/${request.functionId}/versions/${request.functionVersionId}`,
      query: [
        encodeQueryParam({
          name: "graceful",
          value: z.boolean().optional().parse(request.graceful),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$FunctionResponse.in,
      opts,
    });
  }
}
