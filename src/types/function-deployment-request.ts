import {
  External$GpuSpecificationDto,
  GpuSpecificationDto,
  Schemas$GpuSpecificationDto,
} from "./gpu-specification-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request to deploy a function
 */
export type FunctionDeploymentRequest = {
  /**
   * Deployment specs with Backend, GPU, instance-type, etc. details
   */
  deploymentSpecifications: GpuSpecificationDto[];
};

/**
 * @internal
 * FunctionDeploymentRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FunctionDeploymentRequest = {
  deploymentSpecifications: External$GpuSpecificationDto[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FunctionDeploymentRequest
 */
const SchemaIn$FunctionDeploymentRequest: z.ZodType<
  FunctionDeploymentRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FunctionDeploymentRequest
 */
const SchemaOut$FunctionDeploymentRequest: z.ZodType<
  External$FunctionDeploymentRequest, // output type of this zod object
  z.ZodTypeDef,
  FunctionDeploymentRequest // the object to be transformed
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
    });
  });

export const Schemas$FunctionDeploymentRequest = {
  in: SchemaIn$FunctionDeploymentRequest,
  out: SchemaOut$FunctionDeploymentRequest,
};
