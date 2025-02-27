import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Cluster
 */
export type Cluster = {
  id?: string | undefined;
  k8sVersion?: string | undefined;
  name?: string | undefined;
};

/**
 * @internal
 * Cluster without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Cluster = {
  id?: string | undefined;
  k8sVersion?: string | undefined;
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Cluster
 */
const SchemaIn$Cluster: z.ZodType<
  Cluster, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string().optional(),
    k8sVersion: z.string().optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      k8sVersion: "k8sVersion",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Cluster
 */
const SchemaOut$Cluster: z.ZodType<
  External$Cluster, // output type of this zod object
  z.ZodTypeDef,
  Cluster // the object to be transformed
> = z
  .object({
    id: z.string().optional(),
    k8sVersion: z.string().optional(),
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      k8sVersion: "k8sVersion",
      name: "name",
    });
  });

export const Schemas$Cluster = {
  in: SchemaIn$Cluster,
  out: SchemaOut$Cluster,
};
