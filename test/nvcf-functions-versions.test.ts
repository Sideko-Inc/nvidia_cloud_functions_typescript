import Client, { Environment } from "nvidia_cloud_functions_ts";

describe("tests client.nvcf.functions.versions.delete", () => {
  test.concurrent(
    "DELETE /v2/nvcf/functions/{functionId}/versions/{functionVersionId} | testId: generated_success | Empty response test. Expects status code 204",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.functions.versions
          .delete({
            functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
            functionVersionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
          })
          .asResponse(),
        client.nvcf.functions.versions.delete({
          functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
          functionVersionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        }),
      ]);
      expect(rawResponse.status).toBe(204); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
      expect(response).toBeNull(); // 204 No Content response
    },
  );
});

describe("tests client.nvcf.functions.versions.list", () => {
  test.concurrent(
    "GET /v2/nvcf/functions/{functionId}/versions | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.functions.versions
          .list({ functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a" })
          .asResponse(),
        client.nvcf.functions.versions.list({
          functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.nvcf.functions.versions.get", () => {
  test.concurrent(
    "GET /v2/nvcf/functions/{functionId}/versions/{functionVersionId} | testId: generated_success | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.functions.versions
          .get({
            functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
            functionVersionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
          })
          .asResponse(),
        client.nvcf.functions.versions.get({
          functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
          functionVersionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});

describe("tests client.nvcf.functions.versions.create", () => {
  test.concurrent(
    "POST /v2/nvcf/functions/{functionId}/versions | testId: success_default | Success test with response schema validation. Expects status code 200",
    async () => {
      const client = new Client({ environment: Environment.MockServer });
      // Get both raw response for status and parsed response for data
      const [rawResponse, response] = await Promise.all([
        client.nvcf.functions.versions
          .create({
            inferenceUrl: "http://www.example.com",
            name: "string",
            functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
          })
          .asResponse(),
        client.nvcf.functions.versions.create({
          inferenceUrl: "http://www.example.com",
          name: "string",
          functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        }),
      ]);
      expect(rawResponse.status).toBe(200); // Exact status code match
      // Response body automatically validated by Zod schema during deserialization
      expect(response).toBeDefined();
    },
  );
});
