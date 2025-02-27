import { AssetDto, External$AssetDto, Schemas$AssetDto } from "./asset-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * AssetResponse
 */
export type AssetResponse = {
  /**
   * Data Transfer Object(DTO) representing an asset
   */
  asset?: AssetDto | undefined;
};

/**
 * @internal
 * AssetResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AssetResponse = {
  asset?: External$AssetDto | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AssetResponse
 */
const SchemaIn$AssetResponse: z.ZodType<
  AssetResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    asset: Schemas$AssetDto.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      asset: "asset",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AssetResponse
 */
const SchemaOut$AssetResponse: z.ZodType<
  External$AssetResponse, // output type of this zod object
  z.ZodTypeDef,
  AssetResponse // the object to be transformed
> = z
  .object({
    asset: Schemas$AssetDto.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      asset: "asset",
    });
  });

export const Schemas$AssetResponse = {
  in: SchemaIn$AssetResponse,
  out: SchemaOut$AssetResponse,
};
