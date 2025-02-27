
### list <a name="list"></a>
List Function Ids

Lists ids of all the functions in the authenticated NVIDIA Cloud Account.  Requires either a bearer token or an api-key with 'list_functions' or  'list_functions_details' scopes in the HTTP Authorization header. 

**API Endpoint**: `GET /v2/nvcf/functions/ids`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.functions.ids.list();
```
