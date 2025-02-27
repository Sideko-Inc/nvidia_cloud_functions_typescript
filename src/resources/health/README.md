
### list <a name="list"></a>
Get Health Information

Get Health Information about this service

**API Endpoint**: `GET /health/**`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.health.list();
```
