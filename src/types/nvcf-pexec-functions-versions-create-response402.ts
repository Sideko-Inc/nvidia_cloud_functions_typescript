import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * NvcfPexecFunctionsVersionsCreateResponse402
 */
export type NvcfPexecFunctionsVersionsCreateResponse402 = {
  char?: string | undefined;
  direct?: boolean | undefined;
  double?: number | undefined;
  float?: number | undefined;
  int?: number | undefined;
  long?: number | undefined;
  readOnly?: boolean | undefined;
  short?: number | undefined;
};

/**
 * @internal
 * NvcfPexecFunctionsVersionsCreateResponse402 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NvcfPexecFunctionsVersionsCreateResponse402 = {
  char?: string | undefined;
  direct?: boolean | undefined;
  double?: number | undefined;
  float?: number | undefined;
  int?: number | undefined;
  long?: number | undefined;
  readOnly?: boolean | undefined;
  short?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NvcfPexecFunctionsVersionsCreateResponse402
 */
const SchemaIn$NvcfPexecFunctionsVersionsCreateResponse402: z.ZodType<
  NvcfPexecFunctionsVersionsCreateResponse402, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    char: z.string().optional(),
    direct: z.boolean().optional(),
    double: z.number().optional(),
    float: z.number().optional(),
    int: z.number().int().optional(),
    long: z.number().int().optional(),
    readOnly: z.boolean().optional(),
    short: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      char: "char",
      direct: "direct",
      double: "double",
      float: "float",
      int: "int",
      long: "long",
      readOnly: "readOnly",
      short: "short",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NvcfPexecFunctionsVersionsCreateResponse402
 */
const SchemaOut$NvcfPexecFunctionsVersionsCreateResponse402: z.ZodType<
  External$NvcfPexecFunctionsVersionsCreateResponse402, // output type of this zod object
  z.ZodTypeDef,
  NvcfPexecFunctionsVersionsCreateResponse402 // the object to be transformed
> = z
  .object({
    char: z.string().optional(),
    direct: z.boolean().optional(),
    double: z.number().optional(),
    float: z.number().optional(),
    int: z.number().int().optional(),
    long: z.number().int().optional(),
    readOnly: z.boolean().optional(),
    short: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      char: "char",
      direct: "direct",
      double: "double",
      float: "float",
      int: "int",
      long: "long",
      readOnly: "readOnly",
      short: "short",
    });
  });

export const Schemas$NvcfPexecFunctionsVersionsCreateResponse402 = {
  in: SchemaIn$NvcfPexecFunctionsVersionsCreateResponse402,
  out: SchemaOut$NvcfPexecFunctionsVersionsCreateResponse402,
};
