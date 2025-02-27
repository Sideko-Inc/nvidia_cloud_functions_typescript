import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  data: Record<string, any>;
  functionId: string;
  versionId: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data: Record<string, any>;
  functionId: string;
  versionId: string;
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
    data: z.record(z.string(), z.any()),
    functionId: z.string(),
    versionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      functionId: "functionId",
      versionId: "versionId",
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
    data: z.record(z.string(), z.any()),
    functionId: z.string(),
    versionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      functionId: "functionId",
      versionId: "versionId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
