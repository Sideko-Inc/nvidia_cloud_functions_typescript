import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/pexec/functions";
import { StatusClient } from "nvidia_cloud_functions_ts/resources/nvcf/pexec/status";

export class PexecClient extends CoreResourceClient {
  status: StatusClient;
  functions: FunctionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.status = new StatusClient(this._client);
    this.functions = new FunctionsClient(this._client);
  }
}
