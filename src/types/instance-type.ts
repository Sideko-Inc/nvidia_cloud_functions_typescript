import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * InstanceType
 */
export type InstanceType = {
  default?: boolean | undefined;
  description?: string | undefined;
  name?: string | undefined;
};

/**
 * @internal
 * InstanceType without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InstanceType = {
  default?: boolean | undefined;
  description?: string | undefined;
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InstanceType
 */
const SchemaIn$InstanceType: z.ZodType<
  InstanceType, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default: z.boolean().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default: "default",
      description: "description",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InstanceType
 */
const SchemaOut$InstanceType: z.ZodType<
  External$InstanceType, // output type of this zod object
  z.ZodTypeDef,
  InstanceType // the object to be transformed
> = z
  .object({
    default: z.boolean().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default: "default",
      description: "description",
      name: "name",
    });
  });

export const Schemas$InstanceType = {
  in: SchemaIn$InstanceType,
  out: SchemaOut$InstanceType,
};
