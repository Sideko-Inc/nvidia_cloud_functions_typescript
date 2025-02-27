import { zodTransform } from "nvidia_cloud_functions_ts/core";
import {
  AuthorizedPartyDto,
  External$AuthorizedPartyDto,
  Schemas$AuthorizedPartyDto,
} from "nvidia_cloud_functions_ts/types/authorized-party-dto";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  /**
   * Function id
   */
  functionId: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  functionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * Function id
   */
  functionId: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  functionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Parties authorized to invoke function
   */
  authorizedParties: AuthorizedPartyDto[];
  /**
   * Function id
   */
  functionId: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  authorizedParties: External$AuthorizedPartyDto[];
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
    authorizedParties: z.array(Schemas$AuthorizedPartyDto.in),
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParties: "authorizedParties",
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
    authorizedParties: z.array(Schemas$AuthorizedPartyDto.out),
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorizedParties: "authorizedParties",
      functionId: "functionId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
