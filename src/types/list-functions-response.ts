import {
  External$FunctionDto,
  FunctionDto,
  Schemas$FunctionDto,
} from "./function-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body containing list of functions
 */
export type ListFunctionsResponse = {
  /**
   * List of functions
   */
  functions: FunctionDto[];
};

/**
 * @internal
 * ListFunctionsResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListFunctionsResponse = {
  functions: External$FunctionDto[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListFunctionsResponse
 */
const SchemaIn$ListFunctionsResponse: z.ZodType<
  ListFunctionsResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functions: z.array(Schemas$FunctionDto.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functions: "functions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListFunctionsResponse
 */
const SchemaOut$ListFunctionsResponse: z.ZodType<
  External$ListFunctionsResponse, // output type of this zod object
  z.ZodTypeDef,
  ListFunctionsResponse // the object to be transformed
> = z
  .object({
    functions: z.array(Schemas$FunctionDto.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functions: "functions",
    });
  });

export const Schemas$ListFunctionsResponse = {
  in: SchemaIn$ListFunctionsResponse,
  out: SchemaOut$ListFunctionsResponse,
};
