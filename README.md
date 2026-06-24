# Scalar Galaxy

Generated TypeScript SDK for Scalar Galaxy API.
The Scalar Galaxy is an example OpenAPI document to test OpenAPI tools and libraries. It's a fictional universe with fictional planets and fictional data. Get all the data for [all planets](#tag/planets/get/planets).

## Resources

* https://github.com/scalar/scalar
* https://github.com/OAI/OpenAPI-Specification
* https://scalar.com

## Markdown Support

All descriptions *can* contain ~~tons of text~~ **Markdown**. [If GitHub supports the syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), chances are we're supporting it, too. You can even create [internal links to reference endpoints](#tag/authentication/post/user/signup).

<details>
  <summary>Examples</summary>

  **Blockquotes**

  > I love OpenAPI. <3

  **Tables**

  | Feature          | Availability |
  | ---------------- | ------------ |
  | Markdown Support | ✓            |

  **Accordion**

  ```html
  <details>
    <summary>Using Details Tags</summary>
    <p>HTML Example</p>
  </details>
  ```

  **Images**

  Yes, there's support for images, too!

  ![Empty placeholder image showing the width/height](https://images.placeholders.dev/?width=1280&height=720)

  **Alerts**

  > [!tip]
  > You can now use markdown alerts in your descriptions.

</details>

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @scalar/galaxy-sdk
```

<br />

## Usage

```ts
import ScalarGalaxy from "@scalar/galaxy-sdk";

const client = new ScalarGalaxy({
  bearerAuth: process.env["BEARER_AUTH"], // defaults to the BEARER_AUTH env var
  environment: "production",
});

const listAllData = await client.planets.listAllData({
  limit: 10,
  offset: 0,
});
console.log(listAllData);
```

The examples in the following sections assume a `client` configured as shown above.

See the [API reference](./api.md) for every available operation.

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `string \| provider` | - | JWT Bearer token authentication Defaults to BEARER_AUTH. |
| `basicAuthUsername` | `string \| provider` | - | Basic HTTP authentication Defaults to BASIC_AUTH_USERNAME. |
| `apiKeyHeader` | `string \| provider` | - | API key request header Defaults to API_KEY_HEADER. |
| `apiKeyQuery` | `string \| provider` | - | API key query parameter Defaults to API_KEY_QUERY. |
| `apiKeyCookie` | `string \| provider` | - | API key browser cookie Defaults to API_KEY_COOKIE. |
| `oAuth2` | `string \| provider` | - | OAuth 2.0 authentication Defaults to SCALAR_OAUTH2. |
| `openIDConnect` | `string \| provider` | - | OpenID Connect Authentication Defaults to SCALAR_OPENIDCONNECT. |

Declared schemes:

- `bearerAuth` bearer token
- `basicAuth` basic authentication
- `apiKeyHeader` API key in header `X-API-Key`
- `apiKeyQuery` API key in query `api_key`
- `apiKeyCookie` API key in cookie `api_key`
- `oAuth2` OAuth2/OpenID Connect
- `openIdConnect` OAuth2/OpenID Connect

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from "@scalar/galaxy-sdk";

try {
  const listAllData = await client.planets.listAllData({
    limit: 10,
    offset: 0,
  });
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

Documented error statuses: `400`, `401`, `403`, `404`, `409`, `422`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

```ts
import ScalarGalaxy from "@scalar/galaxy-sdk";

const client = new ScalarGalaxy({
  timeout: 60000,
  maxRetries: 2,
  logLevel: "debug",
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `string \| AuthTokenProvider` | `process.env["BEARER_AUTH"]` | JWT Bearer token authentication |
| `basicAuthUsername` | `string \| AuthTokenProvider` | `process.env["BASIC_AUTH_USERNAME"]` | Basic HTTP authentication |
| `apiKeyHeader` | `string \| AuthTokenProvider` | `process.env["API_KEY_HEADER"]` | API key request header |
| `apiKeyQuery` | `string \| AuthTokenProvider` | `process.env["API_KEY_QUERY"]` | API key query parameter |
| `apiKeyCookie` | `string \| AuthTokenProvider` | `process.env["API_KEY_COOKIE"]` | API key browser cookie |
| `oAuth2` | `string \| AuthTokenProvider` | `process.env["SCALAR_OAUTH2"]` | OAuth 2.0 authentication |
| `openIDConnect` | `string \| AuthTokenProvider` | `process.env["SCALAR_OPENIDCONNECT"]` | OpenID Connect Authentication |
| `environment` | `Environment` | - | Select one of the configured API environments. |
| `baseURL` | `string \| null` | `process.env["SCALAR_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["SCALAR_LOG"]` | Controls request and retry debug logging. |
| `logger` | `Logger \| null` | `console` | Custom logger implementation. |

<br />

## Request Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `headers` | `HeadersInit` | - | Per-request headers. |
| `query` | `Record<string, unknown>` | - | Per-request query parameters. |
| `body` | `unknown` | - | Override the generated request body. |
| `timeout` | `number` | - | Per-request timeout in milliseconds. |
| `maxRetries` | `number` | - | Per-request retry count. |
| `signal` | `AbortSignal` | - | Abort an in-flight request. |
| `fetchOptions` | `RequestInit` | - | Per-request fetch options. |
| `idempotencyKey` | `string` | - | Idempotency key for retry-safe operations. |

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Helpers

- Use `.withResponse()` on any request to inspect both parsed data and the raw `Response` object.
- Every operation returns an `APIPromise`, so you can `await` it directly or chain `.withResponse()`.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.


## Contributions

This SDK is generated programmatically. Manual edits to generated files will be
overwritten on the next build.

### SDK created by [Scalar](https://www.scalar.com/?utm_source=demo-api-scalar-galaxy-typescript&utm_campaign=sdk)
