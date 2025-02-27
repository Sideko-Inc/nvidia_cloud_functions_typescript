import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Function invocation request id
   */
  requestId: string;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  requestId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requestId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestId: "requestId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    requestId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestId: "requestId",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
