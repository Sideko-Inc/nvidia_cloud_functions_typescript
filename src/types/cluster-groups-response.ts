import {
  ClusterGroup,
  External$ClusterGroup,
  Schemas$ClusterGroup,
} from "./cluster-group";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * ClusterGroupsResponse
 */
export type ClusterGroupsResponse = {
  clusterGroups?: ClusterGroup[] | undefined;
};

/**
 * @internal
 * ClusterGroupsResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClusterGroupsResponse = {
  clusterGroups?: External$ClusterGroup[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClusterGroupsResponse
 */
const SchemaIn$ClusterGroupsResponse: z.ZodType<
  ClusterGroupsResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clusterGroups: z.array(Schemas$ClusterGroup.in).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clusterGroups: "clusterGroups",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClusterGroupsResponse
 */
const SchemaOut$ClusterGroupsResponse: z.ZodType<
  External$ClusterGroupsResponse, // output type of this zod object
  z.ZodTypeDef,
  ClusterGroupsResponse // the object to be transformed
> = z
  .object({
    clusterGroups: z.array(Schemas$ClusterGroup.out).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clusterGroups: "clusterGroups",
    });
  });

export const Schemas$ClusterGroupsResponse = {
  in: SchemaIn$ClusterGroupsResponse,
  out: SchemaOut$ClusterGroupsResponse,
};
