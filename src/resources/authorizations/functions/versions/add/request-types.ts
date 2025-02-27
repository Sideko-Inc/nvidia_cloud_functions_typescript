import { zodTransform } from "nvidia_cloud_functions_ts/core";
import {
  AuthorizedPartyDto,
  External$AuthorizedPartyDto,
  Schemas$AuthorizedPartyDto,
} from "nvidia_cloud_functions_ts/types/authorized-party-dto";
import * as z from "zod";

/**
 * PatchRequest
 */
export type PatchRequest = {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: AuthorizedPartyDto;
  /**
   * Function id
   */
  functionId: string;
  /**
   * Function version
   */
  functionVersionId: string;
};

/**
 * @internal
 * PatchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchRequest = {
  authorizedParty: External$AuthorizedPartyDto;
  functionId: string;
  functionVersionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchRequest
 */
const SchemaIn$PatchRequest: z.ZodType<
  PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizedParty: Schemas$AuthorizedPartyDto.in,
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParty: "authorizedParty",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchRequest
 */
const SchemaOut$PatchRequest: z.ZodType<
  External$PatchRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchRequest // the object to be transformed
> = z
  .object({
    authorizedParty: Schemas$AuthorizedPartyDto.out,
    functionId: z.string(),
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParty: "authorizedParty",
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

export const Schemas$PatchRequest = {
  in: SchemaIn$PatchRequest,
  out: SchemaOut$PatchRequest,
};
