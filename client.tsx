/// <reference lib="dom" />

import { React, ReactDOM } from "./client-dep.ts";
import App from "./app.tsx";

ReactDOM.hydrate(<App />, document.getElementById("root"));
