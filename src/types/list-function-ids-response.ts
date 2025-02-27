import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body containing list of function ids in an account
 */
export type ListFunctionIdsResponse = {
  /**
   * List of function ids
   */
  functionIds: string[];
};

/**
 * @internal
 * ListFunctionIdsResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListFunctionIdsResponse = {
  functionIds: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListFunctionIdsResponse
 */
const SchemaIn$ListFunctionIdsResponse: z.ZodType<
  ListFunctionIdsResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionIds: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionIds: "functionIds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListFunctionIdsResponse
 */
const SchemaOut$ListFunctionIdsResponse: z.ZodType<
  External$ListFunctionIdsResponse, // output type of this zod object
  z.ZodTypeDef,
  ListFunctionIdsResponse // the object to be transformed
> = z
  .object({
    functionIds: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionIds: "functionIds",
    });
  });

export const Schemas$ListFunctionIdsResponse = {
  in: SchemaIn$ListFunctionIdsResponse,
  out: SchemaOut$ListFunctionIdsResponse,
};
