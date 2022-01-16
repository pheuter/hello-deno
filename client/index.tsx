/** @jsx createElement */
/// <reference lib="dom" />

import { createElement, ReactDOM } from "./dep.ts";
import App from "./app.tsx";

ReactDOM.hydrate(<App />, document.getElementById("root"));
