import {
  ArtifactDto,
  External$ArtifactDto,
  Schemas$ArtifactDto,
} from "./artifact-dto";
import {
  ContainerEnvironmentEntryDto,
  External$ContainerEnvironmentEntryDto,
  Schemas$ContainerEnvironmentEntryDto,
} from "./container-environment-entry-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Request payload to create function.
 */
export type CreateFunctionRequest = {
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
};

/**
 * @internal
 * CreateFunctionRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateFunctionRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateFunctionRequest
 */
const SchemaIn$CreateFunctionRequest: z.ZodType<
  CreateFunctionRequest, // output type of this zod object
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
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateFunctionRequest
 */
const SchemaOut$CreateFunctionRequest: z.ZodType<
  External$CreateFunctionRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateFunctionRequest // the object to be transformed
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
    });
  });

export const Schemas$CreateFunctionRequest = {
  in: SchemaIn$CreateFunctionRequest,
  out: SchemaOut$CreateFunctionRequest,
};
