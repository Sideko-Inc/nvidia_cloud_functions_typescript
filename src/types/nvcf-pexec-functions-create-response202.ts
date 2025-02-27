import { zodTransform } from "nvidia_cloud_functions_ts/core";
import * as z from "zod";

/**
 * NvcfPexecFunctionsCreateResponse202
 */
export type NvcfPexecFunctionsCreateResponse202 = {
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
 * NvcfPexecFunctionsCreateResponse202 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NvcfPexecFunctionsCreateResponse202 = {
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
 * Takes network data, validates it, and transforms keys to match typescript object NvcfPexecFunctionsCreateResponse202
 */
const SchemaIn$NvcfPexecFunctionsCreateResponse202: z.ZodType<
  NvcfPexecFunctionsCreateResponse202, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NvcfPexecFunctionsCreateResponse202
 */
const SchemaOut$NvcfPexecFunctionsCreateResponse202: z.ZodType<
  External$NvcfPexecFunctionsCreateResponse202, // output type of this zod object
  z.ZodTypeDef,
  NvcfPexecFunctionsCreateResponse202 // the object to be transformed
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

export const Schemas$NvcfPexecFunctionsCreateResponse202 = {
  in: SchemaIn$NvcfPexecFunctionsCreateResponse202,
  out: SchemaOut$NvcfPexecFunctionsCreateResponse202,
};
