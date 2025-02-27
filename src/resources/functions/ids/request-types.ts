import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Query param 'visibility' indicates the kind of functions to be included  in the response.
   */
  visibility?: ("authorized" | "private" | "public")[] | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  visibility?: ("authorized" | "private" | "public")[] | undefined;
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
    visibility: z.array(z.enum(["authorized", "private", "public"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visibility: "visibility",
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
    visibility: z.array(z.enum(["authorized", "private", "public"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visibility: "visibility",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
