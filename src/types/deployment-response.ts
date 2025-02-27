import {
  External$FunctionDeploymentDto,
  FunctionDeploymentDto,
  Schemas$FunctionDeploymentDto,
} from "./function-deployment-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Function Deployment Response
 */
export type DeploymentResponse = {
  /**
   * Function deployment response
   */
  deployment: FunctionDeploymentDto;
};

/**
 * @internal
 * DeploymentResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeploymentResponse = {
  deployment: External$FunctionDeploymentDto;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeploymentResponse
 */
const SchemaIn$DeploymentResponse: z.ZodType<
  DeploymentResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deployment: Schemas$FunctionDeploymentDto.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deployment: "deployment",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeploymentResponse
 */
const SchemaOut$DeploymentResponse: z.ZodType<
  External$DeploymentResponse, // output type of this zod object
  z.ZodTypeDef,
  DeploymentResponse // the object to be transformed
> = z
  .object({
    deployment: Schemas$FunctionDeploymentDto.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deployment: "deployment",
    });
  });

export const Schemas$DeploymentResponse = {
  in: SchemaIn$DeploymentResponse,
  out: SchemaOut$DeploymentResponse,
};
