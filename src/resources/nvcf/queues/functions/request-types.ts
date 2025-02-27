import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * Function id
   */
  functionId: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  functionId: string;
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};
