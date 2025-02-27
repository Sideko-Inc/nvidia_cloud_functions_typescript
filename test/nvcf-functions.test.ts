import Client, { Environment } from "nvidia_cloud_functions_ts";

describe("tests client.nvcf.functions.list", () => {
  test.concurrent(
    "GET /v2/nvcf/functions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.functions.list().asResponse(),
        client.nvcf.functions.list(),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.nvcf.functions.create", () => {
  test.concurrent(
    "POST /v2/nvcf/functions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.functions
          .create({ inferenceUrl: "http://www.example.com", name: "string" })
          .asResponse(),
        client.nvcf.functions.create({
          inferenceUrl: "http://www.example.com",
          name: "string",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
