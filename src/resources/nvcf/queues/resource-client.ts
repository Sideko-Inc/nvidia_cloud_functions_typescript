import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/queues/functions";
import { PositionClient } from "nvidia_cloud_functions_ts/resources/nvcf/queues/position";

export class QueuesClient extends CoreResourceClient {
  functions: FunctionsClient;
  position: PositionClient;

  constructor(client: CoreClient) {
    super(client);

    this.functions = new FunctionsClient(this._client);
    this.position = new PositionClient(this._client);
  }
}
