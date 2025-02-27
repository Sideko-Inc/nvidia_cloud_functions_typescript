import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/deployments/functions";

export class DeploymentsClient extends CoreResourceClient {
  functions: FunctionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.functions = new FunctionsClient(this._client);
  }
}
