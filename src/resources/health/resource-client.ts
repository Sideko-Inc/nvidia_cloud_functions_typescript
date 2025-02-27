import { types } from "nvidia_cloud_functions_ts";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "nvidia_cloud_functions_ts/core";
import { Schemas$HealthComponent } from "nvidia_cloud_functions_ts/types/health-component";

export class HealthClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Get Health Information
   *
   * Get Health Information about this service
   *
   * GET /health/**
   */
  list(opts?: RequestOptions): ApiPromise<types.HealthComponent> {
    return this._client.makeRequest({
      method: "get",
      path: "/health/**",
      responseSchema: Schemas$HealthComponent.in,
      opts,
    });
  }
}
