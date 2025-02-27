import { CoreClient } from "nvidia_cloud_functions_ts/core";
import { Environment } from "nvidia_cloud_functions_ts/environment";
import { HealthClient } from "nvidia_cloud_functions_ts/resources/health";
import { NvcfClient } from "nvidia_cloud_functions_ts/resources/nvcf";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
}

export class Client {
  protected _client: CoreClient;
  nvcf: NvcfClient;
  health: HealthClient;

  constructor(opts?: ClientOptions) {
    const baseUrl =
      opts?.baseUrl ?? opts?.environment ?? Environment.Environment;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });

    this.nvcf = new NvcfClient(this._client);
    this.health = new HealthClient(this._client);
  }
}
