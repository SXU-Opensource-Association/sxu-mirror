function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import "./default-NUifn3ep.js";
import { i as issue_tag } from "./_virtual_jekyll-config-DIUmS6FF.js";
const tag = "[".concat(issue_tag, "]");
const bugLink = document.getElementById("new_issue_bug");
const bugURL = new URL(bugLink["href"]);
bugURL.searchParams.append("title", tag + "404 at " + location.pathname);
bugLink["href"] = bugURL.href;
const mrLink = document.getElementById("new_issue_mr");
const mrURL = new URL(mrLink["href"]);
mrURL.searchParams.append("title", tag + "Mirror Request for new mirror " + location.pathname.split("/")[1]);
mrLink["href"] = mrURL.href;
export {
  __vite_legacy_guard
};
//# sourceMappingURL=notfound-BCnfPkOI.js.map
