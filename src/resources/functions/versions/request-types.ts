import { zodTransform } from "nvidia_cloud_functions_ts/core";
import {
  ArtifactDto,
  External$ArtifactDto,
  Schemas$ArtifactDto,
} from "nvidia_cloud_functions_ts/types/artifact-dto";
import {
  ContainerEnvironmentEntryDto,
  External$ContainerEnvironmentEntryDto,
  Schemas$ContainerEnvironmentEntryDto,
} from "nvidia_cloud_functions_ts/types/container-environment-entry-dto";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  /**
   * Function id
   */
  functionId: string;
  /**
   * Version id
   */
  functionVersionId: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  functionId: string;
  functionVersionId: string;
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
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
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
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Function id
   */
  functionId: string;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  functionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * Function id
   */
  functionId: string;
  /**
   * Version id
   */
  functionVersionId: string;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  functionId: string;
  functionVersionId: string;
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
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
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
    functionVersionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      functionId: "functionId",
      functionVersionId: "functionVersionId",
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
   * Invocation request body format
   */
  apiBodyFormat?: ("CUSTOM" | "PREDICT_V2") | undefined;
  /**
   * Args to be passed when launching the container
   */
  containerArgs?: string | undefined;
  /**
   * Environment settings for launching the container
   */
  containerEnvironment?: ContainerEnvironmentEntryDto[] | undefined;
  /**
   * Optional custom container image
   */
  containerImage?: string | undefined;
  /**
   * Health endpoint for the container or the helmChart
   */
  healthUri?: string | undefined;
  /**
   * Optional Helm Chart
   */
  helmChart?: string | undefined;
  /**
   * Helm Chart Service Name is required when helmChart property is specified
   */
  helmChartServiceName?: string | undefined;
  /**
   * Optional port number where the inference listener is running. Defaults to 8000  for Triton.
   */
  inferencePort?: number | undefined;
  /**
   * Entrypoint for invoking the container to process a request
   */
  inferenceUrl: string;
  /**
   * Optional set of models
   */
  models?: ArtifactDto[] | undefined;
  /**
   * Function name must start with lowercase/uppercase/digit and can only contain lowercase, uppercase, digit, hyphen, and underscore characters
   */
  name: string;
  /**
   * Optional set of resources
   */
  resources?: ArtifactDto[] | undefined;
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
  apiBodyFormat?: ("CUSTOM" | "PREDICT_V2") | undefined;
  containerArgs?: string | undefined;
  containerEnvironment?: External$ContainerEnvironmentEntryDto[] | undefined;
  containerImage?: string | undefined;
  healthUri?: string | undefined;
  helmChart?: string | undefined;
  helmChartServiceName?: string | undefined;
  inferencePort?: number | undefined;
  inferenceUrl: string;
  models?: External$ArtifactDto[] | undefined;
  name: string;
  resources?: External$ArtifactDto[] | undefined;
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
    apiBodyFormat: z.enum(["CUSTOM", "PREDICT_V2"]).optional(),
    containerArgs: z.string().optional(),
    containerEnvironment: z
      .array(Schemas$ContainerEnvironmentEntryDto.in)
      .optional(),
    containerImage: z.string().optional(),
    healthUri: z.string().optional(),
    helmChart: z.string().optional(),
    helmChartServiceName: z.string().optional(),
    inferencePort: z.number().int().optional(),
    inferenceUrl: z.string(),
    models: z.array(Schemas$ArtifactDto.in).optional(),
    name: z.string(),
    resources: z.array(Schemas$ArtifactDto.in).optional(),
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiBodyFormat: "apiBodyFormat",
      containerArgs: "containerArgs",
      containerEnvironment: "containerEnvironment",
      containerImage: "containerImage",
      healthUri: "healthUri",
      helmChart: "helmChart",
      helmChartServiceName: "helmChartServiceName",
      inferencePort: "inferencePort",
      inferenceUrl: "inferenceUrl",
      models: "models",
      name: "name",
      resources: "resources",
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
    apiBodyFormat: z.enum(["CUSTOM", "PREDICT_V2"]).optional(),
    containerArgs: z.string().optional(),
    containerEnvironment: z
      .array(Schemas$ContainerEnvironmentEntryDto.out)
      .optional(),
    containerImage: z.string().optional(),
    healthUri: z.string().optional(),
    helmChart: z.string().optional(),
    helmChartServiceName: z.string().optional(),
    inferencePort: z.number().int().optional(),
    inferenceUrl: z.string(),
    models: z.array(Schemas$ArtifactDto.out).optional(),
    name: z.string(),
    resources: z.array(Schemas$ArtifactDto.out).optional(),
    functionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apiBodyFormat: "apiBodyFormat",
      containerArgs: "containerArgs",
      containerEnvironment: "containerEnvironment",
      containerImage: "containerImage",
      healthUri: "healthUri",
      helmChart: "helmChart",
      helmChartServiceName: "helmChartServiceName",
      inferencePort: "inferencePort",
      inferenceUrl: "inferenceUrl",
      models: "models",
      name: "name",
      resources: "resources",
      functionId: "functionId",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
