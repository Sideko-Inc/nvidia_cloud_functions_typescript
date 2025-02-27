import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body with result from a request for executing a job/task as a cloud function using a GPU powered spot/on-demand instance.
 */
export type InvokeFunctionResponse = {
  /**
   * Error code from the container while executing cloud function.
   */
  errorCode?: number | undefined;
  /**
   * Progress indicator for the task/job executing cloud function.
   */
  percentComplete?: number | undefined;
  /**
   * Request id
   */
  reqId?: string | undefined;
  /**
   * Response/result of size < 5MB size for the task/job executing cloud function.
   */
  response?: string | undefined;
  /**
   * For large results, responseReference will be a pre-signeddownload URL.
   */
  responseReference?: string | undefined;
  /**
   * Status of the task/job executing cloud function.
   */
  status?:
    | (
        | "errored"
        | "fulfilled"
        | "in-progress"
        | "pending-evaluation"
        | "rejected"
      )
    | undefined;
};

/**
 * @internal
 * InvokeFunctionResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvokeFunctionResponse = {
  errorCode?: number | undefined;
  percentComplete?: number | undefined;
  reqId?: string | undefined;
  response?: string | undefined;
  responseReference?: string | undefined;
  status?:
    | (
        | "errored"
        | "fulfilled"
        | "in-progress"
        | "pending-evaluation"
        | "rejected"
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvokeFunctionResponse
 */
const SchemaIn$InvokeFunctionResponse: z.ZodType<
  InvokeFunctionResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    errorCode: z.number().int().optional(),
    percentComplete: z.number().int().optional(),
    reqId: z.string().optional(),
    response: z.string().optional(),
    responseReference: z.string().optional(),
    status: z
      .enum([
        "errored",
        "fulfilled",
        "in-progress",
        "pending-evaluation",
        "rejected",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      errorCode: "errorCode",
      percentComplete: "percentComplete",
      reqId: "reqId",
      response: "response",
      responseReference: "responseReference",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvokeFunctionResponse
 */
const SchemaOut$InvokeFunctionResponse: z.ZodType<
  External$InvokeFunctionResponse, // output type of this zod object
  z.ZodTypeDef,
  InvokeFunctionResponse // the object to be transformed
> = z
  .object({
    errorCode: z.number().int().optional(),
    percentComplete: z.number().int().optional(),
    reqId: z.string().optional(),
    response: z.string().optional(),
    responseReference: z.string().optional(),
    status: z
      .enum([
        "errored",
        "fulfilled",
        "in-progress",
        "pending-evaluation",
        "rejected",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      errorCode: "errorCode",
      percentComplete: "percentComplete",
      reqId: "reqId",
      response: "response",
      responseReference: "responseReference",
      status: "status",
    });
  });

export const Schemas$InvokeFunctionResponse = {
  in: SchemaIn$InvokeFunctionResponse,
  out: SchemaOut$InvokeFunctionResponse,
};
