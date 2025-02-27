import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body containing asset-id and the corresponding pre-signed URL to upload an asset of specified content-type to AWS S3 bucket.
 */
export type CreateAssetResponse = {
  /**
   * Unique id of the asset to be uploaded to AWS S3 bucket
   */
  assetId?: string | undefined;
  /**
   * Content type of the asset such image/png, image/jpeg, etc.
   */
  contentType?: string | undefined;
  /**
   * Asset description to be used when uploading the asset
   */
  description?: string | undefined;
  /**
   * Pre-signed upload URL to upload asset
   */
  uploadUrl?: string | undefined;
};

/**
 * @internal
 * CreateAssetResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateAssetResponse = {
  assetId?: string | undefined;
  contentType?: string | undefined;
  description?: string | undefined;
  uploadUrl?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateAssetResponse
 */
const SchemaIn$CreateAssetResponse: z.ZodType<
  CreateAssetResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    assetId: z.string().optional(),
    contentType: z.string().optional(),
    description: z.string().optional(),
    uploadUrl: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      assetId: "assetId",
      contentType: "contentType",
      description: "description",
      uploadUrl: "uploadUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateAssetResponse
 */
const SchemaOut$CreateAssetResponse: z.ZodType<
  External$CreateAssetResponse, // output type of this zod object
  z.ZodTypeDef,
  CreateAssetResponse // the object to be transformed
> = z
  .object({
    assetId: z.string().optional(),
    contentType: z.string().optional(),
    description: z.string().optional(),
    uploadUrl: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      assetId: "assetId",
      contentType: "contentType",
      description: "description",
      uploadUrl: "uploadUrl",
    });
  });

export const Schemas$CreateAssetResponse = {
  in: SchemaIn$CreateAssetResponse,
  out: SchemaOut$CreateAssetResponse,
};
