import { ReactDOM } from "./dep.ts";
import App from "./app.tsx";

ReactDOM.hydrate(<App />, document.getElementById("root"));
