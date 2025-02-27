
### list <a name="list"></a>
List Cluster Groups

Lists Cluster Groups for the current account. The response includes cluster  groups defined specifically in the current account and publicly available  cluster groups such as GFN, OCI, etc. Requires a bearer token with 'list_cluster_groups' scope in HTTP Authorization header. 

**API Endpoint**: `GET /v2/nvcf/clusterGroups`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.clusterGroups.list();
```
