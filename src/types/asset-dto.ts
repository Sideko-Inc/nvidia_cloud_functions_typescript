import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing an asset
 */
export type AssetDto = {
  /**
   * Asset id
   */
  assetId?: string | undefined;
  /**
   * Content-type specified when creating the asset
   */
  contentType?: string | undefined;
  /**
   * Description specified when creating the asset
   */
  description?: string | undefined;
};

/**
 * @internal
 * AssetDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AssetDto = {
  assetId?: string | undefined;
  contentType?: string | undefined;
  description?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AssetDto
 */
const SchemaIn$AssetDto: z.ZodType<
  AssetDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    assetId: z.string().optional(),
    contentType: z.string().optional(),
    description: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      assetId: "assetId",
      contentType: "contentType",
      description: "description",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AssetDto
 */
const SchemaOut$AssetDto: z.ZodType<
  External$AssetDto, // output type of this zod object
  z.ZodTypeDef,
  AssetDto // the object to be transformed
> = z
  .object({
    assetId: z.string().optional(),
    contentType: z.string().optional(),
    description: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      assetId: "assetId",
      contentType: "contentType",
      description: "description",
    });
  });

export const Schemas$AssetDto = {
  in: SchemaIn$AssetDto,
  out: SchemaOut$AssetDto,
};
