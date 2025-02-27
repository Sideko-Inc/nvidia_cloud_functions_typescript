
### patch <a name="patch"></a>
Authorize Additional Account To Invoke Function Version

Adds the specified NVIDIA Cloud Account to the set of authorized accounts that  can invoke the specified function version. If the specified function version  does not have any existing inheritable authorized accounts, it results in a  response with status 404. If the specified account is already in the set of  existing authorized accounts that are directly associated with the function  version, it results in a response wit status code 409. If a function is public,  then Account Admin cannot perform this operation. Access to this functionality mandates the inclusion of a bearer token with the  'authorize_clients' scope in the HTTP Authorization header 

**API Endpoint**: `PATCH /v2/nvcf/authorizations/functions/{functionId}/versions/{functionVersionId}/add`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.authorizations.functions.versions.add.patch({
  authorizedParty: { ncaId: "string" },
  functionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
  functionVersionId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
});
```
