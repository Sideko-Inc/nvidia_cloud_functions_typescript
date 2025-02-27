import {
  External$RequestHeaderDto,
  RequestHeaderDto,
  Schemas$RequestHeaderDto,
} from "./request-header-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request body for creating a job/task for inference/train using a GPU powered spot instance in cloud.
 */
export type InvokeFunctionRequest = {
  requestBody: Record<string, any>;
  /**
   * Data Transfer Object(DTO) representing header/address for Cloud Functions processing.
   */
  requestHeader?: RequestHeaderDto | undefined;
};

/**
 * @internal
 * InvokeFunctionRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvokeFunctionRequest = {
  requestBody: Record<string, any>;
  requestHeader?: External$RequestHeaderDto | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvokeFunctionRequest
 */
const SchemaIn$InvokeFunctionRequest: z.ZodType<
  InvokeFunctionRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requestBody: z.record(z.string(), z.any()),
    requestHeader: Schemas$RequestHeaderDto.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestBody: "requestBody",
      requestHeader: "requestHeader",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvokeFunctionRequest
 */
const SchemaOut$InvokeFunctionRequest: z.ZodType<
  External$InvokeFunctionRequest, // output type of this zod object
  z.ZodTypeDef,
  InvokeFunctionRequest // the object to be transformed
> = z
  .object({
    requestBody: z.record(z.string(), z.any()),
    requestHeader: Schemas$RequestHeaderDto.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestBody: "requestBody",
      requestHeader: "requestHeader",
    });
  });

export const Schemas$InvokeFunctionRequest = {
  in: SchemaIn$InvokeFunctionRequest,
  out: SchemaOut$InvokeFunctionRequest,
};
