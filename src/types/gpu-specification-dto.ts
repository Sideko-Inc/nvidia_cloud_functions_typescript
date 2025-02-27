import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing GPU specification.
 */
export type GpuSpecificationDto = {
  /**
   * List of availability-zones(or clusters) in the cluster group
   */
  availabilityZones?: string[] | undefined;
  /**
   * Backend/CSP where the GPU powered instance will be launched
   */
  backend: string;
  configuration?: Record<string, any> | undefined;
  /**
   * GPU name from the cluster
   */
  gpu: string;
  /**
   * Instance type, based on GPU, assigned to a Worker
   */
  instanceType?: string | undefined;
  /**
   * Maximum number of spot instances for the deployment
   */
  maxInstances: number;
  /**
   * Max request concurrency between 1 (default) and 1024.
   */
  maxRequestConcurrency?: number | undefined;
  /**
   * Minimum number of spot instances for the deployment
   */
  minInstances: number;
};

/**
 * @internal
 * GpuSpecificationDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GpuSpecificationDto = {
  availabilityZones?: string[] | undefined;
  backend: string;
  configuration?: Record<string, any> | undefined;
  gpu: string;
  instanceType?: string | undefined;
  maxInstances: number;
  maxRequestConcurrency?: number | undefined;
  minInstances: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GpuSpecificationDto
 */
const SchemaIn$GpuSpecificationDto: z.ZodType<
  GpuSpecificationDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    availabilityZones: z.array(z.string()).optional(),
    backend: z.string(),
    configuration: z.record(z.string(), z.any()).optional(),
    gpu: z.string(),
    instanceType: z.string().optional(),
    maxInstances: z.number().int(),
    maxRequestConcurrency: z.number().int().optional(),
    minInstances: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availabilityZones: "availabilityZones",
      backend: "backend",
      configuration: "configuration",
      gpu: "gpu",
      instanceType: "instanceType",
      maxInstances: "maxInstances",
      maxRequestConcurrency: "maxRequestConcurrency",
      minInstances: "minInstances",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GpuSpecificationDto
 */
const SchemaOut$GpuSpecificationDto: z.ZodType<
  External$GpuSpecificationDto, // output type of this zod object
  z.ZodTypeDef,
  GpuSpecificationDto // the object to be transformed
> = z
  .object({
    availabilityZones: z.array(z.string()).optional(),
    backend: z.string(),
    configuration: z.record(z.string(), z.any()).optional(),
    gpu: z.string(),
    instanceType: z.string().optional(),
    maxInstances: z.number().int(),
    maxRequestConcurrency: z.number().int().optional(),
    minInstances: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      availabilityZones: "availabilityZones",
      backend: "backend",
      configuration: "configuration",
      gpu: "gpu",
      instanceType: "instanceType",
      maxInstances: "maxInstances",
      maxRequestConcurrency: "maxRequestConcurrency",
      minInstances: "minInstances",
    });
  });

export const Schemas$GpuSpecificationDto = {
  in: SchemaIn$GpuSpecificationDto,
  out: SchemaOut$GpuSpecificationDto,
};
