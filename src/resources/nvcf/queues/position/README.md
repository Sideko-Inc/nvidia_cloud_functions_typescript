
### list <a name="list"></a>
Queue Position

Using the specified function invocation request id, returns the estimated  position of the corresponding message up to 1000 in the queue. Requires a bearer token or an api-key with 'queue_details' scope in the HTTP  Authorization header. 

**API Endpoint**: `GET /v2/nvcf/queues/{requestId}/position`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.nvcf.queues.position.list({
  requestId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
});
```
