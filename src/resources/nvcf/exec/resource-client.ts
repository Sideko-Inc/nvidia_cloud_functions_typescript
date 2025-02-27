import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/exec/functions";
import { StatusClient } from "nvidia_cloud_functions_ts/resources/nvcf/exec/status";

export class ExecClient extends CoreResourceClient {
  status: StatusClient;
  functions: FunctionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.status = new StatusClient(this._client);
    this.functions = new FunctionsClient(this._client);
  }
}
