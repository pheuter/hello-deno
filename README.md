# hello-deno

A sample React SSR app designed to work with Deno Deploy.

## Running

```sh
# Bundle client-side code
deno bundle --config deno.json client/index.tsx static/client.js

# Run server
deno run --allow-net --allow-read --config deno.json server.tsx
```

## Blocking issue

Currently unable to bundle client-side code using `react/jsx-runtime` despite `deno run` working just fine using the same code and config:

```
» deno bundle --config deno.json client/index.tsx static/client.js
Check file:///Users/mark/src/pheuter/hello-deno/client/index.tsx
Bundle file:///Users/mark/src/pheuter/hello-deno/client/index.tsx
error: Unable to output during bundling.

Caused by:
    0: load_transformed failed
    1: failed to analyze module
    2: failed to resolve https://esm.sh/react@17.0.2/jsx-runtime from file:///Users/mark/src/pheuter/hello-deno/client/index.tsx
    3: Cannot resolve "https://esm.sh/react@17.0.2/jsx-runtime" from "file:///Users/mark/src/pheuter/hello-deno/client/index.tsx".
```

```sh
» deno --version
deno 1.17.3 (release, aarch64-apple-darwin)
v8 9.7.106.15
typescript 4.5.2
```
