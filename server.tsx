import { Application, React, Router, ReactDOMServer } from "./server-dep.ts";
import App from "./app.tsx";

const { files } = await Deno.emit("client.tsx", { bundle: "module" });
const clientJs = files["deno:///bundle.js"];

const router = new Router();

router.get("/client.js", (context) => {
  context.response.headers.set("Content-Type", "application/javascript");
  context.response.body = clientJs;
});

router.get("/", (context) => {
  const body = ReactDOMServer.renderToString(<App />);

  context.response.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deno SSR React App</title>
  </head>
  <body >
    <div id="root">${body}</div>
    <script src="/client.js" defer></script>
  </body>
  </html>`;
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
