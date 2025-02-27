import {
  AuthorizedPartyDto,
  External$AuthorizedPartyDto,
  Schemas$AuthorizedPartyDto,
} from "./authorized-party-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request to associated authorized parties for a specific version or allversions of a function
 */
export type AuthorizedPartiesRequest = {
  /**
   * Parties authorized to invoke function
   */
  authorizedParties: AuthorizedPartyDto[];
};

/**
 * @internal
 * AuthorizedPartiesRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AuthorizedPartiesRequest = {
  authorizedParties: External$AuthorizedPartyDto[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AuthorizedPartiesRequest
 */
const SchemaIn$AuthorizedPartiesRequest: z.ZodType<
  AuthorizedPartiesRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizedParties: z.array(Schemas$AuthorizedPartyDto.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParties: "authorizedParties",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AuthorizedPartiesRequest
 */
const SchemaOut$AuthorizedPartiesRequest: z.ZodType<
  External$AuthorizedPartiesRequest, // output type of this zod object
  z.ZodTypeDef,
  AuthorizedPartiesRequest // the object to be transformed
> = z
  .object({
    authorizedParties: z.array(Schemas$AuthorizedPartyDto.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParties: "authorizedParties",
    });
  });

export const Schemas$AuthorizedPartiesRequest = {
  in: SchemaIn$AuthorizedPartiesRequest,
  out: SchemaOut$AuthorizedPartiesRequest,
};
