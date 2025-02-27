import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing a request queue for function version
 */
export type QueueDto = {
  /**
   * Function name
   */
  functionName: string;
  /**
   * Function status
   */
  functionStatus: "ACTIVE" | "DELETED" | "DEPLOYING" | "ERROR" | "INACTIVE";
  /**
   * Function version id
   */
  functionVersionId: string;
  /**
   * Approximate number of messages in the request queue
   */
  queueDepth?: number | undefined;
};

/**
 * @internal
 * QueueDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QueueDto = {
  functionName: string;
  functionStatus: "ACTIVE" | "DELETED" | "DEPLOYING" | "ERROR" | "INACTIVE";
  functionVersionId: string;
  queueDepth?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QueueDto
 */
const SchemaIn$QueueDto: z.ZodType<
  QueueDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionName: z.string(),
    functionStatus: z.enum([
      "ACTIVE",
      "DELETED",
      "DEPLOYING",
      "ERROR",
      "INACTIVE",
    ]),
    functionVersionId: z.string(),
    queueDepth: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionName: "functionName",
      functionStatus: "functionStatus",
      functionVersionId: "functionVersionId",
      queueDepth: "queueDepth",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QueueDto
 */
const SchemaOut$QueueDto: z.ZodType<
  External$QueueDto, // output type of this zod object
  z.ZodTypeDef,
  QueueDto // the object to be transformed
> = z
  .object({
    functionName: z.string(),
    functionStatus: z.enum([
      "ACTIVE",
      "DELETED",
      "DEPLOYING",
      "ERROR",
      "INACTIVE",
    ]),
    functionVersionId: z.string(),
    queueDepth: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionName: "functionName",
      functionStatus: "functionStatus",
      functionVersionId: "functionVersionId",
      queueDepth: "queueDepth",
    });
  });

export const Schemas$QueueDto = {
  in: SchemaIn$QueueDto,
  out: SchemaOut$QueueDto,
};
