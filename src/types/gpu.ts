import {
  External$InstanceType,
  InstanceType,
  Schemas$InstanceType,
} from "./instance-type";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Gpu
 */
export type Gpu = {
  instanceTypes?: InstanceType[] | undefined;
  name?: string | undefined;
};

/**
 * @internal
 * Gpu without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Gpu = {
  instanceTypes?: External$InstanceType[] | undefined;
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Gpu
 */
const SchemaIn$Gpu: z.ZodType<
  Gpu, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    instanceTypes: z.array(Schemas$InstanceType.in).optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      instanceTypes: "instanceTypes",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Gpu
 */
const SchemaOut$Gpu: z.ZodType<
  External$Gpu, // output type of this zod object
  z.ZodTypeDef,
  Gpu // the object to be transformed
> = z
  .object({
    instanceTypes: z.array(Schemas$InstanceType.out).optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      instanceTypes: "instanceTypes",
      name: "name",
    });
  });

export const Schemas$Gpu = {
  in: SchemaIn$Gpu,
  out: SchemaOut$Gpu,
};
