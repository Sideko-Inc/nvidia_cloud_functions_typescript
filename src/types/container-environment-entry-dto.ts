import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing a container environment entry
 */
export type ContainerEnvironmentEntryDto = {
  /**
   * Container environment key
   */
  key: string;
  /**
   * Container environment value
   */
  value: string;
};

/**
 * @internal
 * ContainerEnvironmentEntryDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ContainerEnvironmentEntryDto = {
  key: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ContainerEnvironmentEntryDto
 */
const SchemaIn$ContainerEnvironmentEntryDto: z.ZodType<
  ContainerEnvironmentEntryDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    key: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      key: "key",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ContainerEnvironmentEntryDto
 */
const SchemaOut$ContainerEnvironmentEntryDto: z.ZodType<
  External$ContainerEnvironmentEntryDto, // output type of this zod object
  z.ZodTypeDef,
  ContainerEnvironmentEntryDto // the object to be transformed
> = z
  .object({
    key: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      key: "key",
      value: "value",
    });
  });

export const Schemas$ContainerEnvironmentEntryDto = {
  in: SchemaIn$ContainerEnvironmentEntryDto,
  out: SchemaOut$ContainerEnvironmentEntryDto,
};
