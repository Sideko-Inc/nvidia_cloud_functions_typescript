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
import {
  External$InstanceDto,
  InstanceDto,
  Schemas$InstanceDto,
} from "./instance-dto";
import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * Data Transfer Object(DTO) representing a function
 */
export type FunctionDto = {
  /**
   * List of active instances for this function.
   */
  activeInstances?: InstanceDto[] | undefined;
  /**
   * Invocation request body format
   */
  apiBodyFormat?: ("CUSTOM" | "PREDICT_V2") | undefined;
  /**
   * Args used to launch the container
   */
  containerArgs?: string | undefined;
  /**
   * Environment settings used to launch the container
   */
  containerEnvironment?: ContainerEnvironmentEntryDto[] | undefined;
  /**
   * Optional custom container
   */
  containerImage?: string | undefined;
  /**
   * Function creation timestamp
   */
  createdAt: string;
  /**
   * Health endpoint for the container or helmChart
   */
  healthUri: string;
  /**
   * Optional Helm Chart
   */
  helmChart?: string | undefined;
  /**
   * Helm Chart Service Name specified only when helmChart property is specified
   */
  helmChartServiceName?: string | undefined;
  /**
   * Unique function id
   */
  id: string;
  /**
   * Optional port number where the inference listener is running - defaults to 8000 for Triton
   */
  inferencePort?: number | undefined;
  /**
   * Entrypoint for invoking the container to process requests
   */
  inferenceUrl?: string | undefined;
  /**
   * Optional set of models
   */
  models?: ArtifactDto[] | undefined;
  /**
   * Function name
   */
  name: string;
  /**
   * NVIDIA Cloud Account Id
   */
  ncaId: string;
  /**
   * Indicates whether the function is owned by another account. If the account  that is being used to lookup functions happens to be authorized to invoke/list  this function which is owned by a different account, then this field is set  to true and ncaId will contain the id of the account that owns the function.  Otherwise, this field is not set as it defaults to false.
   */
  ownedByDifferentAccount?: boolean | undefined;
  /**
   * Optional set of resources.
   */
  resources?: ArtifactDto[] | undefined;
  /**
   * Function status
   */
  status: "ACTIVE" | "DELETED" | "DEPLOYING" | "ERROR" | "INACTIVE";
  /**
   * Unique function version id
   */
  versionId: string;
};

/**
 * @internal
 * FunctionDto without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FunctionDto = {
  activeInstances?: External$InstanceDto[] | undefined;
  apiBodyFormat?: ("CUSTOM" | "PREDICT_V2") | undefined;
  containerArgs?: string | undefined;
  containerEnvironment?: External$ContainerEnvironmentEntryDto[] | undefined;
  containerImage?: string | undefined;
  createdAt: string;
  healthUri: string;
  helmChart?: string | undefined;
  helmChartServiceName?: string | undefined;
  id: string;
  inferencePort?: number | undefined;
  inferenceUrl?: string | undefined;
  models?: External$ArtifactDto[] | undefined;
  name: string;
  ncaId: string;
  ownedByDifferentAccount?: boolean | undefined;
  resources?: External$ArtifactDto[] | undefined;
  status: "ACTIVE" | "DELETED" | "DEPLOYING" | "ERROR" | "INACTIVE";
  versionId: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FunctionDto
 */
const SchemaIn$FunctionDto: z.ZodType<
  FunctionDto, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    activeInstances: z.array(Schemas$InstanceDto.in).optional(),
    apiBodyFormat: z.enum(["CUSTOM", "PREDICT_V2"]).optional(),
    containerArgs: z.string().optional(),
    containerEnvironment: z
      .array(Schemas$ContainerEnvironmentEntryDto.in)
      .optional(),
    containerImage: z.string().optional(),
    createdAt: z.string(),
    healthUri: z.string(),
    helmChart: z.string().optional(),
    helmChartServiceName: z.string().optional(),
    id: z.string(),
    inferencePort: z.number().int().optional(),
    inferenceUrl: z.string().optional(),
    models: z.array(Schemas$ArtifactDto.in).optional(),
    name: z.string(),
    ncaId: z.string(),
    ownedByDifferentAccount: z.boolean().optional(),
    resources: z.array(Schemas$ArtifactDto.in).optional(),
    status: z.enum(["ACTIVE", "DELETED", "DEPLOYING", "ERROR", "INACTIVE"]),
    versionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      activeInstances: "activeInstances",
      apiBodyFormat: "apiBodyFormat",
      containerArgs: "containerArgs",
      containerEnvironment: "containerEnvironment",
      containerImage: "containerImage",
      createdAt: "createdAt",
      healthUri: "healthUri",
      helmChart: "helmChart",
      helmChartServiceName: "helmChartServiceName",
      id: "id",
      inferencePort: "inferencePort",
      inferenceUrl: "inferenceUrl",
      models: "models",
      name: "name",
      ncaId: "ncaId",
      ownedByDifferentAccount: "ownedByDifferentAccount",
      resources: "resources",
      status: "status",
      versionId: "versionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FunctionDto
 */
const SchemaOut$FunctionDto: z.ZodType<
  External$FunctionDto, // output type of this zod object
  z.ZodTypeDef,
  FunctionDto // the object to be transformed
> = z
  .object({
    activeInstances: z.array(Schemas$InstanceDto.out).optional(),
    apiBodyFormat: z.enum(["CUSTOM", "PREDICT_V2"]).optional(),
    containerArgs: z.string().optional(),
    containerEnvironment: z
      .array(Schemas$ContainerEnvironmentEntryDto.out)
      .optional(),
    containerImage: z.string().optional(),
    createdAt: z.string(),
    healthUri: z.string(),
    helmChart: z.string().optional(),
    helmChartServiceName: z.string().optional(),
    id: z.string(),
    inferencePort: z.number().int().optional(),
    inferenceUrl: z.string().optional(),
    models: z.array(Schemas$ArtifactDto.out).optional(),
    name: z.string(),
    ncaId: z.string(),
    ownedByDifferentAccount: z.boolean().optional(),
    resources: z.array(Schemas$ArtifactDto.out).optional(),
    status: z.enum(["ACTIVE", "DELETED", "DEPLOYING", "ERROR", "INACTIVE"]),
    versionId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      activeInstances: "activeInstances",
      apiBodyFormat: "apiBodyFormat",
      containerArgs: "containerArgs",
      containerEnvironment: "containerEnvironment",
      containerImage: "containerImage",
      createdAt: "createdAt",
      healthUri: "healthUri",
      helmChart: "helmChart",
      helmChartServiceName: "helmChartServiceName",
      id: "id",
      inferencePort: "inferencePort",
      inferenceUrl: "inferenceUrl",
      models: "models",
      name: "name",
      ncaId: "ncaId",
      ownedByDifferentAccount: "ownedByDifferentAccount",
      resources: "resources",
      status: "status",
      versionId: "versionId",
    });
  });

export const Schemas$FunctionDto = {
  in: SchemaIn$FunctionDto,
  out: SchemaOut$FunctionDto,
};
