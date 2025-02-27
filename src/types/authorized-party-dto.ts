import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing an authorized party.
 */
export type AuthorizedPartyDto = {
  /**
   * Client Id -- 'sub' claim in the JWT. This field should not be  specified anymore.
   */
  clientId?: string | undefined;
  /**
   * NVIDIA Cloud Account authorized to invoke the function
   */
  ncaId: string;
};

/**
 * @internal
 * AuthorizedPartyDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AuthorizedPartyDto = {
  clientId?: string | undefined;
  ncaId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AuthorizedPartyDto
 */
const SchemaIn$AuthorizedPartyDto: z.ZodType<
  AuthorizedPartyDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clientId: z.string().optional(),
    ncaId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      ncaId: "ncaId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AuthorizedPartyDto
 */
const SchemaOut$AuthorizedPartyDto: z.ZodType<
  External$AuthorizedPartyDto, // output type of this zod object
  z.ZodTypeDef,
  AuthorizedPartyDto // the object to be transformed
> = z
  .object({
    clientId: z.string().optional(),
    ncaId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientId: "clientId",
      ncaId: "ncaId",
    });
  });

export const Schemas$AuthorizedPartyDto = {
  in: SchemaIn$AuthorizedPartyDto,
  out: SchemaOut$AuthorizedPartyDto,
};
