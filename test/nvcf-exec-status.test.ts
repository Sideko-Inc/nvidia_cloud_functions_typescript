import Client, { Environment } from "nvidia_cloud_functions_ts";

describe("tests client.nvcf.exec.status.get", () => {
  test.concurrent(
    "GET /v2/nvcf/exec/status/{requestId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.exec.status
          .get({ requestId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a" })
          .asResponse(),
        client.nvcf.exec.status.get({
          requestId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
