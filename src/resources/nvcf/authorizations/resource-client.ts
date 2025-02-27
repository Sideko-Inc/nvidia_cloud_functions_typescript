import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/authorizations/functions";

export class AuthorizationsClient extends CoreResourceClient {
  functions: FunctionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.functions = new FunctionsClient(this._client);
  }
}
