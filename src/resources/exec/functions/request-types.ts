import { zodTransform } from "nvidia_cloud_functions_ts/core";
import {
  External$RequestHeaderDto,
  RequestHeaderDto,
  Schemas$RequestHeaderDto,
} from "nvidia_cloud_functions_ts/types/request-header-dto";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  requestBody: Record<string, any>;
  /**
   * Data Transfer Object(DTO) representing header/address for Cloud Functions processing.
   */
  requestHeader?: RequestHeaderDto | undefined;
  functionId: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  requestBody: Record<string, any>;
  requestHeader?: External$RequestHeaderDto | undefined;
  functionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requestBody: z.record(z.string(), z.any()),
    requestHeader: Schemas$RequestHeaderDto.in.optional(),
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestBody: "requestBody",
      requestHeader: "requestHeader",
      functionId: "functionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    requestBody: z.record(z.string(), z.any()),
    requestHeader: Schemas$RequestHeaderDto.out.optional(),
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestBody: "requestBody",
      requestHeader: "requestHeader",
      functionId: "functionId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
