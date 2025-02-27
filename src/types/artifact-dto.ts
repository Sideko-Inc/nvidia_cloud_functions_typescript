import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing an artifact
 */
export type ArtifactDto = {
  /**
   * Artifact name
   */
  name: string;
  /**
   * Artifact URI
   */
  uri: string;
  /**
   * Artifact version
   */
  version: string;
};

/**
 * @internal
 * ArtifactDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ArtifactDto = {
  name: string;
  uri: string;
  version: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ArtifactDto
 */
const SchemaIn$ArtifactDto: z.ZodType<
  ArtifactDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
    uri: z.string(),
    version: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      uri: "uri",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ArtifactDto
 */
const SchemaOut$ArtifactDto: z.ZodType<
  External$ArtifactDto, // output type of this zod object
  z.ZodTypeDef,
  ArtifactDto // the object to be transformed
> = z
  .object({
    name: z.string(),
    uri: z.string(),
    version: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      uri: "uri",
      version: "version",
    });
  });

export const Schemas$ArtifactDto = {
  in: SchemaIn$ArtifactDto,
  out: SchemaOut$ArtifactDto,
};
