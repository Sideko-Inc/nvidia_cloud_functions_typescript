import {
  DeploymentHealthDto,
  External$DeploymentHealthDto,
  Schemas$DeploymentHealthDto,
} from "./deployment-health-dto";
import {
  External$GpuSpecificationDto,
  GpuSpecificationDto,
  Schemas$GpuSpecificationDto,
} from "./gpu-specification-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Function deployment response
 */
export type FunctionDeploymentDto = {
  /**
   * Function deployment details
   */
  deploymentSpecifications: GpuSpecificationDto[];
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function status
   */
  functionStatus: "ACTIVE" | "DELETED" | "DEPLOYING" | "ERROR" | "INACTIVE";
  /**
   * Function version id
   */
  functionVersionId: string;
  /**
   * Health info for a deployment specification is included only if there are any  issues/errors.
   */
  healthInfo?: DeploymentHealthDto[] | undefined;
  /**
   * NVIDIA Cloud Account Id
   */
  ncaId: string;
  /**
   * SQS Request Queue URL
   */
  requestQueueUrl: string;
};

/**
 * @internal
 * FunctionDeploymentDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FunctionDeploymentDto = {
  deploymentSpecifications: External$GpuSpecificationDto[];
  functionId: string;
  functionStatus: "ACTIVE" | "DELETED" | "DEPLOYING" | "ERROR" | "INACTIVE";
  functionVersionId: string;
  healthInfo?: External$DeploymentHealthDto[] | undefined;
  ncaId: string;
  requestQueueUrl: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FunctionDeploymentDto
 */
const SchemaIn$FunctionDeploymentDto: z.ZodType<
  FunctionDeploymentDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.in),
    functionId: z.string(),
    functionStatus: z.enum([
      "ACTIVE",
      "DELETED",
      "DEPLOYING",
      "ERROR",
      "INACTIVE",
    ]),
    functionVersionId: z.string(),
    healthInfo: z.array(Schemas$DeploymentHealthDto.in).optional(),
    ncaId: z.string(),
    requestQueueUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
      functionId: "functionId",
      functionStatus: "functionStatus",
      functionVersionId: "functionVersionId",
      healthInfo: "healthInfo",
      ncaId: "ncaId",
      requestQueueUrl: "requestQueueUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FunctionDeploymentDto
 */
const SchemaOut$FunctionDeploymentDto: z.ZodType<
  External$FunctionDeploymentDto, // output type of this zod object
  z.ZodTypeDef,
  FunctionDeploymentDto // the object to be transformed
> = z
  .object({
    deploymentSpecifications: z.array(Schemas$GpuSpecificationDto.out),
    functionId: z.string(),
    functionStatus: z.enum([
      "ACTIVE",
      "DELETED",
      "DEPLOYING",
      "ERROR",
      "INACTIVE",
    ]),
    functionVersionId: z.string(),
    healthInfo: z.array(Schemas$DeploymentHealthDto.out).optional(),
    ncaId: z.string(),
    requestQueueUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deploymentSpecifications: "deploymentSpecifications",
      functionId: "functionId",
      functionStatus: "functionStatus",
      functionVersionId: "functionVersionId",
      healthInfo: "healthInfo",
      ncaId: "ncaId",
      requestQueueUrl: "requestQueueUrl",
    });
  });

export const Schemas$FunctionDeploymentDto = {
  in: SchemaIn$FunctionDeploymentDto,
  out: SchemaOut$FunctionDeploymentDto,
};
