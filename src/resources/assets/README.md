
### delete <a name="delete"></a>
Delete Asset

Deletes asset belonging to the current NVIDIA Cloud Account. Requires either  a bearer token or an api-key with 'invoke_function' scope in the HTTP  Authorization header.

**API Endpoint**: `DELETE /v2/nvcf/assets/{assetId}`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.assets.delete({
  assetId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
});
```

### list <a name="list"></a>
List Assets

List assets owned by the current NVIDIA Cloud Account. Requires either a  bearer token or an api-key with invoke_function scope in the HTTP Authorization  header. 

**API Endpoint**: `GET /v2/nvcf/assets`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.assets.list();
```

### get <a name="get"></a>
Show Asset Details

Returns details for the specified asset-id belonging to the current NVIDIA  Cloud Account. Requires either a bearer token or an api-key with  'invoke_function' scope in the HTTP Authorization header. 

**API Endpoint**: `GET /v2/nvcf/assets/{assetId}`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.assets.get({
  assetId: "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
});
```

### create <a name="create"></a>
Create Asset

Creates a unique id representing an asset and a pre-signed URL to upload the  asset artifact to AWS S3 bucket for the NVIDIA Cloud Account. Requires either  a bearer token or an api-key with 'invoke_function' scope in the HTTP  Authorization header.

**API Endpoint**: `POST /v2/nvcf/assets`

#### Example Snippet

```typescript
import Client from "nvidia_cloud_functions_ts";

const client = new Client();
const res = await client.assets.create({
  contentType: "string",
  description: "string",
});
```
