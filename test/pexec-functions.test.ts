import Client, { Environment } from "nvidia_cloud_functions_ts";

describe("tests client.pexec.functions.create", () => {
  test.concurrent(
    "POST /v2/nvcf/pexec/functions/{functionId} | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.pexec.functions
          .create({
            data: {},
            functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
          })
          .asResponse(),
        client.pexec.functions.create({
          data: {},
          functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
