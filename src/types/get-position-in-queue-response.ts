import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request position in queue for invocation request
 */
export type GetPositionInQueueResponse = {
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function version id
   */
  functionVersionId: string;
  /**
   * Position of request in queue
   */
  positionInQueue?: number | undefined;
};

/**
 * @internal
 * GetPositionInQueueResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetPositionInQueueResponse = {
  functionId: string;
  functionVersionId: string;
  positionInQueue?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetPositionInQueueResponse
 */
const SchemaIn$GetPositionInQueueResponse: z.ZodType<
  GetPositionInQueueResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionId: z.string(),
    functionVersionId: z.string(),
    positionInQueue: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
      positionInQueue: "positionInQueue",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetPositionInQueueResponse
 */
const SchemaOut$GetPositionInQueueResponse: z.ZodType<
  External$GetPositionInQueueResponse, // output type of this zod object
  z.ZodTypeDef,
  GetPositionInQueueResponse // the object to be transformed
> = z
  .object({
    functionId: z.string(),
    functionVersionId: z.string(),
    positionInQueue: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
      positionInQueue: "positionInQueue",
    });
  });

export const Schemas$GetPositionInQueueResponse = {
  in: SchemaIn$GetPositionInQueueResponse,
  out: SchemaOut$GetPositionInQueueResponse,
};
