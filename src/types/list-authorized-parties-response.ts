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
export type ListAuthorizedPartiesResponse = {
  /**
   * Functions with authorized parties and other details
   */
  functions: AuthorizedPartiesByFunctionDto[];
};

/**
 * @internal
 * ListAuthorizedPartiesResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListAuthorizedPartiesResponse = {
  functions: External$AuthorizedPartiesByFunctionDto[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListAuthorizedPartiesResponse
 */
const SchemaIn$ListAuthorizedPartiesResponse: z.ZodType<
  ListAuthorizedPartiesResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functions: z.array(Schemas$AuthorizedPartiesByFunctionDto.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functions: "functions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListAuthorizedPartiesResponse
 */
const SchemaOut$ListAuthorizedPartiesResponse: z.ZodType<
  External$ListAuthorizedPartiesResponse, // output type of this zod object
  z.ZodTypeDef,
  ListAuthorizedPartiesResponse // the object to be transformed
> = z
  .object({
    functions: z.array(Schemas$AuthorizedPartiesByFunctionDto.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functions: "functions",
    });
  });

export const Schemas$ListAuthorizedPartiesResponse = {
  in: SchemaIn$ListAuthorizedPartiesResponse,
  out: SchemaOut$ListAuthorizedPartiesResponse,
};
