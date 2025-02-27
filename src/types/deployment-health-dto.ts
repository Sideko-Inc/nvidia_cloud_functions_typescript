import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing deployment error
 */
export type DeploymentHealthDto = {
  /**
   * Backend/CSP where the GPU powered instance will be launched
   */
  backend: string;
  /**
   * Deployment error
   */
  error: string;
  /**
   * GPU Type as per SDD
   */
  gpu: string;
  /**
   * Instance type
   */
  instanceType?: string | undefined;
  /**
   * SIS Request ID
   */
  sisRequestId?: string | undefined;
};

/**
 * @internal
 * DeploymentHealthDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeploymentHealthDto = {
  backend: string;
  error: string;
  gpu: string;
  instanceType?: string | undefined;
  sisRequestId?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeploymentHealthDto
 */
const SchemaIn$DeploymentHealthDto: z.ZodType<
  DeploymentHealthDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    backend: z.string(),
    error: z.string(),
    gpu: z.string(),
    instanceType: z.string().optional(),
    sisRequestId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      backend: "backend",
      error: "error",
      gpu: "gpu",
      instanceType: "instanceType",
      sisRequestId: "sisRequestId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeploymentHealthDto
 */
const SchemaOut$DeploymentHealthDto: z.ZodType<
  External$DeploymentHealthDto, // output type of this zod object
  z.ZodTypeDef,
  DeploymentHealthDto // the object to be transformed
> = z
  .object({
    backend: z.string(),
    error: z.string(),
    gpu: z.string(),
    instanceType: z.string().optional(),
    sisRequestId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      backend: "backend",
      error: "error",
      gpu: "gpu",
      instanceType: "instanceType",
      sisRequestId: "sisRequestId",
    });
  });

export const Schemas$DeploymentHealthDto = {
  in: SchemaIn$DeploymentHealthDto,
  out: SchemaOut$DeploymentHealthDto,
};
