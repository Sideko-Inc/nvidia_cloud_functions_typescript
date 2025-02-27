import {
  AuthorizedPartyDto,
  External$AuthorizedPartyDto,
  Schemas$AuthorizedPartyDto,
} from "./authorized-party-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request payload to associate/disassociate authorized party with function
 */
export type PatchAuthorizedPartyRequest = {
  /**
   * Data Transfer Object(DTO) representing an authorized party.
   */
  authorizedParty: AuthorizedPartyDto;
};

/**
 * @internal
 * PatchAuthorizedPartyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PatchAuthorizedPartyRequest = {
  authorizedParty: External$AuthorizedPartyDto;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PatchAuthorizedPartyRequest
 */
const SchemaIn$PatchAuthorizedPartyRequest: z.ZodType<
  PatchAuthorizedPartyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizedParty: Schemas$AuthorizedPartyDto.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParty: "authorizedParty",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PatchAuthorizedPartyRequest
 */
const SchemaOut$PatchAuthorizedPartyRequest: z.ZodType<
  External$PatchAuthorizedPartyRequest, // output type of this zod object
  z.ZodTypeDef,
  PatchAuthorizedPartyRequest // the object to be transformed
> = z
  .object({
    authorizedParty: Schemas$AuthorizedPartyDto.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParty: "authorizedParty",
    });
  });

export const Schemas$PatchAuthorizedPartyRequest = {
  in: SchemaIn$PatchAuthorizedPartyRequest,
  out: SchemaOut$PatchAuthorizedPartyRequest,
};
