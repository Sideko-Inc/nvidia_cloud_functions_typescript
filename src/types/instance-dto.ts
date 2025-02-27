import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing a spot instance
 */
export type InstanceDto = {
  /**
   * Backend where the instance is running
   */
  backend?: string | undefined;
  /**
   * Function executing on the instance
   */
  functionId?: string | undefined;
  /**
   * Function version executing on the instance
   */
  functionVersionId?: string | undefined;
  /**
   * GPU name powering the instance
   */
  gpu?: string | undefined;
  /**
   * Instance creation timestamp
   */
  instanceCreatedAt?: string | undefined;
  /**
   * Unique id of the instance
   */
  instanceId?: string | undefined;
  /**
   * Instance status
   */
  instanceStatus?: ("ACTIVE" | "DELETED" | "ERRORED" | "PREEMPTED") | undefined;
  /**
   * GPU instance-type powering the instance
   */
  instanceType?: string | undefined;
  /**
   * Instance's last updated timestamp
   */
  instanceUpdatedAt?: string | undefined;
  /**
   * Location such as zone name or region where the instance is running
   */
  location?: string | undefined;
  /**
   * NVIDIA Cloud Account Id that owns the function running on the instance
   */
  ncaId?: string | undefined;
  /**
   * SIS request-id used to launch this instance
   */
  sisRequestId?: string | undefined;
};

/**
 * @internal
 * InstanceDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InstanceDto = {
  backend?: string | undefined;
  functionId?: string | undefined;
  functionVersionId?: string | undefined;
  gpu?: string | undefined;
  instanceCreatedAt?: string | undefined;
  instanceId?: string | undefined;
  instanceStatus?: ("ACTIVE" | "DELETED" | "ERRORED" | "PREEMPTED") | undefined;
  instanceType?: string | undefined;
  instanceUpdatedAt?: string | undefined;
  location?: string | undefined;
  ncaId?: string | undefined;
  sisRequestId?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InstanceDto
 */
const SchemaIn$InstanceDto: z.ZodType<
  InstanceDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    backend: z.string().optional(),
    functionId: z.string().optional(),
    functionVersionId: z.string().optional(),
    gpu: z.string().optional(),
    instanceCreatedAt: z.string().optional(),
    instanceId: z.string().optional(),
    instanceStatus: z
      .enum(["ACTIVE", "DELETED", "ERRORED", "PREEMPTED"])
      .optional(),
    instanceType: z.string().optional(),
    instanceUpdatedAt: z.string().optional(),
    location: z.string().optional(),
    ncaId: z.string().optional(),
    sisRequestId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      backend: "backend",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
      gpu: "gpu",
      instanceCreatedAt: "instanceCreatedAt",
      instanceId: "instanceId",
      instanceStatus: "instanceStatus",
      instanceType: "instanceType",
      instanceUpdatedAt: "instanceUpdatedAt",
      location: "location",
      ncaId: "ncaId",
      sisRequestId: "sisRequestId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InstanceDto
 */
const SchemaOut$InstanceDto: z.ZodType<
  External$InstanceDto, // output type of this zod object
  z.ZodTypeDef,
  InstanceDto // the object to be transformed
> = z
  .object({
    backend: z.string().optional(),
    functionId: z.string().optional(),
    functionVersionId: z.string().optional(),
    gpu: z.string().optional(),
    instanceCreatedAt: z.string().optional(),
    instanceId: z.string().optional(),
    instanceStatus: z
      .enum(["ACTIVE", "DELETED", "ERRORED", "PREEMPTED"])
      .optional(),
    instanceType: z.string().optional(),
    instanceUpdatedAt: z.string().optional(),
    location: z.string().optional(),
    ncaId: z.string().optional(),
    sisRequestId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      backend: "backend",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
      gpu: "gpu",
      instanceCreatedAt: "instanceCreatedAt",
      instanceId: "instanceId",
      instanceStatus: "instanceStatus",
      instanceType: "instanceType",
      instanceUpdatedAt: "instanceUpdatedAt",
      location: "location",
      ncaId: "ncaId",
      sisRequestId: "sisRequestId",
    });
  });

export const Schemas$InstanceDto = {
  in: SchemaIn$InstanceDto,
  out: SchemaOut$InstanceDto,
};
