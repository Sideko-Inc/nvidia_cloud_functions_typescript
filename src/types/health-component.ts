import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * HealthComponent
 */
export type HealthComponent = {
  description?: string | undefined;
  status?: string | undefined;
};

/**
 * @internal
 * HealthComponent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$HealthComponent = {
  description?: string | undefined;
  status?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object HealthComponent
 */
const SchemaIn$HealthComponent: z.ZodType<
  HealthComponent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    status: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$HealthComponent
 */
const SchemaOut$HealthComponent: z.ZodType<
  External$HealthComponent, // output type of this zod object
  z.ZodTypeDef,
  HealthComponent // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    status: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      status: "status",
    });
  });

export const Schemas$HealthComponent = {
  in: SchemaIn$HealthComponent,
  out: SchemaOut$HealthComponent,
};
