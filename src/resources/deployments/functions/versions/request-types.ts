import { zodTransform } from "nvidia_cloud_functions_ts/core";
import {
  External$GpuSpecificationDto,
  GpuSpecificationDto,
  Schemas$GpuSpecificationDto,
} from "nvidia_cloud_functions_ts/types/gpu-specification-dto";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function version id
   */
  functionVersionId: string;
  /**
   * Query param to deactivate function for graceful shutdown
   */
  graceful?: boolean | undefined;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  functionId: string;
  functionVersionId: string;
  graceful?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionId: z.string(),
    functionVersionId: z.string(),
    graceful: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
      graceful: "graceful",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    functionId: z.string(),
    functionVersionId: z.string(),
    graceful: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
      graceful: "graceful",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function version id
   */
  functionVersionId: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  functionId: string;
  functionVersionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Deployment specs with Backend, GPU, instance-type, etc. details
   */
  deploymentSpecifications: GpuSpecificationDto[];
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function version id
   */
  functionVersionId: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  deploymentSpecifications: External$GpuSpecificationDto[];
  functionId: string;
  functionVersionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.in),
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.out),
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Deployment specs with Backend, GPU, instance-type, etc. details
   */
  deploymentSpecifications: GpuSpecificationDto[];
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function version id
   */
  functionVersionId: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  deploymentSpecifications: External$GpuSpecificationDto[];
  functionId: string;
  functionVersionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.in),
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.out),
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
