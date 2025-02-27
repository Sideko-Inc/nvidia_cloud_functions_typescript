import {
  External$MeteringDataEntryDto,
  MeteringDataEntryDto,
  Schemas$MeteringDataEntryDto,
} from "./metering-data-entry-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing header/address for Cloud Functions processing.
 */
export type RequestHeaderDto = {
  /**
   * List of UUIDs corresponding to the uploaded assets to be used as input for executing the task.
   */
  inputAssetReferences?: string[] | undefined;
  /**
   * Metadata used for billing/metering purposes.
   */
  meteringData?: MeteringDataEntryDto[] | undefined;
  /**
   * Polling timeout duration.
   */
  pollDurationSeconds?: number | undefined;
};

/**
 * @internal
 * RequestHeaderDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RequestHeaderDto = {
  inputAssetReferences?: string[] | undefined;
  meteringData?: External$MeteringDataEntryDto[] | undefined;
  pollDurationSeconds?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RequestHeaderDto
 */
const SchemaIn$RequestHeaderDto: z.ZodType<
  RequestHeaderDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    inputAssetReferences: z.array(z.string()).optional(),
    meteringData: z.array(Schemas$MeteringDataEntryDto.in).optional(),
    pollDurationSeconds: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      inputAssetReferences: "inputAssetReferences",
      meteringData: "meteringData",
      pollDurationSeconds: "pollDurationSeconds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RequestHeaderDto
 */
const SchemaOut$RequestHeaderDto: z.ZodType<
  External$RequestHeaderDto, // output type of this zod object
  z.ZodTypeDef,
  RequestHeaderDto // the object to be transformed
> = z
  .object({
    inputAssetReferences: z.array(z.string()).optional(),
    meteringData: z.array(Schemas$MeteringDataEntryDto.out).optional(),
    pollDurationSeconds: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      inputAssetReferences: "inputAssetReferences",
      meteringData: "meteringData",
      pollDurationSeconds: "pollDurationSeconds",
    });
  });

export const Schemas$RequestHeaderDto = {
  in: SchemaIn$RequestHeaderDto,
  out: SchemaOut$RequestHeaderDto,
};
