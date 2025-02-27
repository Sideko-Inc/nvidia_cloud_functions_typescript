import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing a billing/metering data entry
 */
export type MeteringDataEntryDto = {
  /**
   * Metering/Billing key
   */
  key: string;
  /**
   * Metering/Billing value
   */
  value: string;
};

/**
 * @internal
 * MeteringDataEntryDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MeteringDataEntryDto = {
  key: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MeteringDataEntryDto
 */
const SchemaIn$MeteringDataEntryDto: z.ZodType<
  MeteringDataEntryDto, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MeteringDataEntryDto
 */
const SchemaOut$MeteringDataEntryDto: z.ZodType<
  External$MeteringDataEntryDto, // output type of this zod object
  z.ZodTypeDef,
  MeteringDataEntryDto // the object to be transformed
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

export const Schemas$MeteringDataEntryDto = {
  in: SchemaIn$MeteringDataEntryDto,
  out: SchemaOut$MeteringDataEntryDto,
};
