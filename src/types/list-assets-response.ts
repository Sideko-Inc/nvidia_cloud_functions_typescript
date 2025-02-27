import { AssetDto, External$AssetDto, Schemas$AssetDto } from "./asset-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body containing list of assets of the current nca id
 */
export type ListAssetsResponse = {
  /**
   * List of assets uploaded for the nca id
   */
  assets?: AssetDto[] | undefined;
};

/**
 * @internal
 * ListAssetsResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListAssetsResponse = {
  assets?: External$AssetDto[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListAssetsResponse
 */
const SchemaIn$ListAssetsResponse: z.ZodType<
  ListAssetsResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    assets: z.array(Schemas$AssetDto.in).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      assets: "assets",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListAssetsResponse
 */
const SchemaOut$ListAssetsResponse: z.ZodType<
  External$ListAssetsResponse, // output type of this zod object
  z.ZodTypeDef,
  ListAssetsResponse // the object to be transformed
> = z
  .object({
    assets: z.array(Schemas$AssetDto.out).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      assets: "assets",
    });
  });

export const Schemas$ListAssetsResponse = {
  in: SchemaIn$ListAssetsResponse,
  out: SchemaOut$ListAssetsResponse,
};
