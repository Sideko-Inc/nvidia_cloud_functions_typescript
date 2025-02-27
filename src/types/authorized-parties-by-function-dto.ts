import {
  AuthorizedPartyDto,
  External$AuthorizedPartyDto,
  Schemas$AuthorizedPartyDto,
} from "./authorized-party-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing a function with authorized accounts
 */
export type AuthorizedPartiesByFunctionDto = {
  /**
   * Authorized parties allowed to invoke the function
   */
  authorizedParties?: AuthorizedPartyDto[] | undefined;
  /**
   * Function id
   */
  id: string;
  /**
   * NVIDIA Cloud Account Id
   */
  ncaId: string;
  /**
   * Function version id
   */
  versionId?: string | undefined;
};

/**
 * @internal
 * AuthorizedPartiesByFunctionDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AuthorizedPartiesByFunctionDto = {
  authorizedParties?: External$AuthorizedPartyDto[] | undefined;
  id: string;
  ncaId: string;
  versionId?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AuthorizedPartiesByFunctionDto
 */
const SchemaIn$AuthorizedPartiesByFunctionDto: z.ZodType<
  AuthorizedPartiesByFunctionDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    authorizedParties: z.array(Schemas$AuthorizedPartyDto.in).optional(),
    id: z.string(),
    ncaId: z.string(),
    versionId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParties: "authorizedParties",
      id: "id",
      ncaId: "ncaId",
      versionId: "versionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AuthorizedPartiesByFunctionDto
 */
const SchemaOut$AuthorizedPartiesByFunctionDto: z.ZodType<
  External$AuthorizedPartiesByFunctionDto, // output type of this zod object
  z.ZodTypeDef,
  AuthorizedPartiesByFunctionDto // the object to be transformed
> = z
  .object({
    authorizedParties: z.array(Schemas$AuthorizedPartyDto.out).optional(),
    id: z.string(),
    ncaId: z.string(),
    versionId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParties: "authorizedParties",
      id: "id",
      ncaId: "ncaId",
      versionId: "versionId",
    });
  });

export const Schemas$AuthorizedPartiesByFunctionDto = {
  in: SchemaIn$AuthorizedPartiesByFunctionDto,
  out: SchemaOut$AuthorizedPartiesByFunctionDto,
};
