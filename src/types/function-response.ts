import {
  External$FunctionDto,
  FunctionDto,
  Schemas$FunctionDto,
} from "./function-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body with function details
 */
export type FunctionResponse = {
  /**
   * Data Transfer Object(DTO) representing a function
   */
  function: FunctionDto;
};

/**
 * @internal
 * FunctionResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FunctionResponse = {
  function: External$FunctionDto;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FunctionResponse
 */
const SchemaIn$FunctionResponse: z.ZodType<
  FunctionResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    function: Schemas$FunctionDto.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      function: "function",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FunctionResponse
 */
const SchemaOut$FunctionResponse: z.ZodType<
  External$FunctionResponse, // output type of this zod object
  z.ZodTypeDef,
  FunctionResponse // the object to be transformed
> = z
  .object({
    function: Schemas$FunctionDto.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      function: "function",
    });
  });

export const Schemas$FunctionResponse = {
  in: SchemaIn$FunctionResponse,
  out: SchemaOut$FunctionResponse,
};
