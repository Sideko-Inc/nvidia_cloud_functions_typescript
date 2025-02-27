import { External$QueueDto, QueueDto, Schemas$QueueDto } from "./queue-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request queue details of all the functions with same id in an account
 */
export type GetQueuesResponse = {
  /**
   * Function id
   */
  functionId: string;
  /**
   * Details of all the queues associated with same named functions
   */
  queues: QueueDto[];
};

/**
 * @internal
 * GetQueuesResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetQueuesResponse = {
  functionId: string;
  queues: External$QueueDto[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetQueuesResponse
 */
const SchemaIn$GetQueuesResponse: z.ZodType<
  GetQueuesResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionId: z.string(),
    queues: z.array(Schemas$QueueDto.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      queues: "queues",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetQueuesResponse
 */
const SchemaOut$GetQueuesResponse: z.ZodType<
  External$GetQueuesResponse, // output type of this zod object
  z.ZodTypeDef,
  GetQueuesResponse // the object to be transformed
> = z
  .object({
    functionId: z.string(),
    queues: z.array(Schemas$QueueDto.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      queues: "queues",
    });
  });

export const Schemas$GetQueuesResponse = {
  in: SchemaIn$GetQueuesResponse,
  out: SchemaOut$GetQueuesResponse,
};
