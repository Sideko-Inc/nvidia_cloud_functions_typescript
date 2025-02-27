import { CoreClient, CoreResourceClient } from "nvidia_cloud_functions_ts/core";
import { AssetsClient } from "nvidia_cloud_functions_ts/resources/nvcf/assets";
import { AuthorizationsClient } from "nvidia_cloud_functions_ts/resources/nvcf/authorizations";
import { ClusterGroupsClient } from "nvidia_cloud_functions_ts/resources/nvcf/cluster-groups";
import { DeploymentsClient } from "nvidia_cloud_functions_ts/resources/nvcf/deployments";
import { ExecClient } from "nvidia_cloud_functions_ts/resources/nvcf/exec";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/nvcf/functions";
import { PexecClient } from "nvidia_cloud_functions_ts/resources/nvcf/pexec";
import { QueuesClient } from "nvidia_cloud_functions_ts/resources/nvcf/queues";

export class NvcfClient extends CoreResourceClient {
  assets: AssetsClient;
  authorizations: AuthorizationsClient;
  deployments: DeploymentsClient;
  functions: FunctionsClient;
  clusterGroups: ClusterGroupsClient;
  exec: ExecClient;
  pexec: PexecClient;
  queues: QueuesClient;

  constructor(client: CoreClient) {
    super(client);

    this.assets = new AssetsClient(this._client);
    this.authorizations = new AuthorizationsClient(this._client);
    this.deployments = new DeploymentsClient(this._client);
    this.functions = new FunctionsClient(this._client);
    this.clusterGroups = new ClusterGroupsClient(this._client);
    this.exec = new ExecClient(this._client);
    this.pexec = new PexecClient(this._client);
    this.queues = new QueuesClient(this._client);
  }
}
