/** @jsx createElement */
import {
  Application,
  etag,
  send,
  createElement,
  ReactDOMServer,
  Router,
} from "./dep.ts";
import App from "./client/app.tsx";

const router = new Router();

router.get("/", (context) => {
  const body = ReactDOMServer.renderToString(<App />);

  context.response.body = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deno SSR React App</title>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/client.js" defer></script>
  </body>
</html>`;
});

const app = new Application();

app.use(etag.factory());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
  });
});

await app.listen({ port: 8000 });
