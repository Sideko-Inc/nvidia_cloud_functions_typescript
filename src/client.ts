import { CoreClient } from "nvidia_cloud_functions_ts/core";
import { Environment } from "nvidia_cloud_functions_ts/environment";
import { AssetsClient } from "nvidia_cloud_functions_ts/resources/assets";
import { AuthorizationsClient } from "nvidia_cloud_functions_ts/resources/authorizations";
import { ClusterGroupsClient } from "nvidia_cloud_functions_ts/resources/cluster-groups";
import { DeploymentsClient } from "nvidia_cloud_functions_ts/resources/deployments";
import { ExecClient } from "nvidia_cloud_functions_ts/resources/exec";
import { FunctionsClient } from "nvidia_cloud_functions_ts/resources/functions";
import { PexecClient } from "nvidia_cloud_functions_ts/resources/pexec";
import { QueuesClient } from "nvidia_cloud_functions_ts/resources/queues";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
}

export class Client {
  protected _client: CoreClient;
  assets: AssetsClient;
  authorizations: AuthorizationsClient;
  deployments: DeploymentsClient;
  functions: FunctionsClient;
  clusterGroups: ClusterGroupsClient;
  exec: ExecClient;
  pexec: PexecClient;
  queues: QueuesClient;

  constructor(opts?: ClientOptions) {
    const baseUrl =
      opts?.baseUrl ?? opts?.environment ?? Environment.Production;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });

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
