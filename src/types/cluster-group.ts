import { Cluster, External$Cluster, Schemas$Cluster } from "./cluster";
import { External$Gpu, Gpu, Schemas$Gpu } from "./gpu";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * ClusterGroup
 */
export type ClusterGroup = {
  authorizedNcaIds?: string[] | undefined;
  clusters?: Cluster[] | undefined;
  gpus?: Gpu[] | undefined;
  id?: string | undefined;
  name?: string | undefined;
  ncaId?: string | undefined;
};

/**
 * @internal
 * ClusterGroup without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClusterGroup = {
  authorizedNcaIds?: string[] | undefined;
  clusters?: External$Cluster[] | undefined;
  gpus?: External$Gpu[] | undefined;
  id?: string | undefined;
  name?: string | undefined;
  ncaId?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClusterGroup
 */
const SchemaIn$ClusterGroup: z.ZodType<
  ClusterGroup, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizedNcaIds: z.array(z.string()).optional(),
    clusters: z.array(Schemas$Cluster.in).optional(),
    gpus: z.array(Schemas$Gpu.in).optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    ncaId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedNcaIds: "authorizedNcaIds",
      clusters: "clusters",
      gpus: "gpus",
      id: "id",
      name: "name",
      ncaId: "ncaId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClusterGroup
 */
const SchemaOut$ClusterGroup: z.ZodType<
  External$ClusterGroup, // output type of this zod object
  z.ZodTypeDef,
  ClusterGroup // the object to be transformed
> = z
  .object({
    authorizedNcaIds: z.array(z.string()).optional(),
    clusters: z.array(Schemas$Cluster.out).optional(),
    gpus: z.array(Schemas$Gpu.out).optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    ncaId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedNcaIds: "authorizedNcaIds",
      clusters: "clusters",
      gpus: "gpus",
      id: "id",
      name: "name",
      ncaId: "ncaId",
    });
  });

export const Schemas$ClusterGroup = {
  in: SchemaIn$ClusterGroup,
  out: SchemaOut$ClusterGroup,
};
