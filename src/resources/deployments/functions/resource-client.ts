import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { VersionsClient } from "nvidia_cloud_functions_ts/resources/deployments/functions/versions";

export class FunctionsClient extends CoreResourceClient {
  versions: VersionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.versions = new VersionsClient(this._client);
  }
}
