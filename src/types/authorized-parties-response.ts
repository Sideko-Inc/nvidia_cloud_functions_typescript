import {
  AuthorizedPartiesByFunctionDto,
  External$AuthorizedPartiesByFunctionDto,
  Schemas$AuthorizedPartiesByFunctionDto,
} from "./authorized-parties-by-function-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Parties authorized to invoke function
 */
export type AuthorizedPartiesResponse = {
  /**
   * Data Transfer Object(DTO) representing a function with authorized accounts
   */
  function: AuthorizedPartiesByFunctionDto;
};

/**
 * @internal
 * AuthorizedPartiesResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AuthorizedPartiesResponse = {
  function: External$AuthorizedPartiesByFunctionDto;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AuthorizedPartiesResponse
 */
const SchemaIn$AuthorizedPartiesResponse: z.ZodType<
  AuthorizedPartiesResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    function: Schemas$AuthorizedPartiesByFunctionDto.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      function: "function",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AuthorizedPartiesResponse
 */
const SchemaOut$AuthorizedPartiesResponse: z.ZodType<
  External$AuthorizedPartiesResponse, // output type of this zod object
  z.ZodTypeDef,
  AuthorizedPartiesResponse // the object to be transformed
> = z
  .object({
    function: Schemas$AuthorizedPartiesByFunctionDto.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      function: "function",
    });
  });

export const Schemas$AuthorizedPartiesResponse = {
  in: SchemaIn$AuthorizedPartiesResponse,
  out: SchemaOut$AuthorizedPartiesResponse,
};
