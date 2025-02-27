import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request payload to create an asset-id and the corresponding pre-signed URL to upload an asset of specified content-type to AWS S3 bucket.
 */
export type CreateAssetRequest = {
  /**
   * Content type of the asset such image/png, image/jpeg, etc.
   */
  contentType: string;
  /**
   * Asset description
   */
  description: string;
};

/**
 * @internal
 * CreateAssetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateAssetRequest = {
  contentType: string;
  description: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateAssetRequest
 */
const SchemaIn$CreateAssetRequest: z.ZodType<
  CreateAssetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    contentType: z.string(),
    description: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      contentType: "contentType",
      description: "description",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateAssetRequest
 */
const SchemaOut$CreateAssetRequest: z.ZodType<
  External$CreateAssetRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateAssetRequest // the object to be transformed
> = z
  .object({
    contentType: z.string(),
    description: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      contentType: "contentType",
      description: "description",
    });
  });

export const Schemas$CreateAssetRequest = {
  in: SchemaIn$CreateAssetRequest,
  out: SchemaOut$CreateAssetRequest,
};
