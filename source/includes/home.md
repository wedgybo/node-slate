# Home

## Get All Kittens

```python
require 'kittn'

api = Kittn::APIClient.authorize!('{{auth_token}}')
api.kittens.get
```

```java
import kittn

api = kittn.authorize('{{auth_token}}')
api.kittens.get()
```

```bash
curl "http://api-staging.mallzee.com/products"
  -H "Authorization: {{auth_token}}"
  -H "Accept-Version: 4.1.0"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('{{auth_token}}');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>