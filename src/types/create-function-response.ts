import {
  External$FunctionDto,
  FunctionDto,
  Schemas$FunctionDto,
} from "./function-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Response body for create function request.
 */
export type CreateFunctionResponse = {
  /**
   * Data Transfer Object(DTO) representing a function
   */
  function: FunctionDto;
};

/**
 * @internal
 * CreateFunctionResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateFunctionResponse = {
  function: External$FunctionDto;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateFunctionResponse
 */
const SchemaIn$CreateFunctionResponse: z.ZodType<
  CreateFunctionResponse, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateFunctionResponse
 */
const SchemaOut$CreateFunctionResponse: z.ZodType<
  External$CreateFunctionResponse, // output type of this zod object
  z.ZodTypeDef,
  CreateFunctionResponse // the object to be transformed
> = z
  .object({
    function: Schemas$FunctionDto.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      function: "function",
    });
  });

export const Schemas$CreateFunctionResponse = {
  in: SchemaIn$CreateFunctionResponse,
  out: SchemaOut$CreateFunctionResponse,
};
