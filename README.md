# minFraud Node Client
A Promise & TypeScript-ified Node client for [minFraud](https://www.maxmind.com/en/solutions/minfraud-services) fraud 
mitigation API.

Enables super handy auto-completion for minFraud input and response data in IDEs like VSCode and WebStorm. We're also
using [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which 
lets you take advantage of the the brand spanking new
[`async`/`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
syntax.

## Requirements
- Node 0.12+

## Installation
Takes a second to install using npm.
```bash
npm install minfraud-node 
```

## Usage

### Import and initialize the client.
```js
import MinFraud from 'minfraud-node';

const client = new MinFraud({
    accountId: '123456',    // Your MaxMind Account ID
    license: 'yItotWnzWooT' // Your MaxMind License Key
}) 
```

### [Get Score](https://dev.maxmind.com/minfraud/#Response_Body_Examples)
```js
const score = await client.score({
    device: {
        ip_address: '127.0.0.1'
    }
});
```

### [Get Insight](https://dev.maxmind.com/minfraud/#Response_Body_Examples)
```js
const insight = await client.insight({
    device: {
        ip_address: '127.0.0.1'
    }
});
```

### [Get Factors](https://dev.maxmind.com/minfraud/#Response_Body_Examples)
```js
const factors = await client.factor({
    device: {
        ip_address: '127.0.0.1'
    }
});
```

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.
