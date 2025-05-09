"use strict";

const exports = {};
export default exports;
exports.fancyIndexAfterRender = fancyIndexAfterRender;
exports.fancyIndexBeforeRender = fancyIndexBeforeRender;
import _markup from "./markup.njs";
function fancyIndexRender(r, templateUrl) {
  r.subrequest(templateUrl, {
    args: "",
    body: "",
    method: "GET"
  }, function (rTmpl) {
    if (rTmpl.status != 200) {
      return r.return(rTmpl.status);
    }
    const tmpl = rTmpl.responseText;
    const result = _markup.M.up(tmpl, {
      url: r.variables.request_uri.replace(/\/+/g, "/").replace(/\?.*$/, "")
    });
    r.status = 200;
    r.headersOut["Content-Type"] = "text/html";
    r.sendHeader();
    r.send(result);
    r.finish();
  });
}
function fancyIndexBeforeRender(r) {
  return fancyIndexRender(r, "/fancy-index/before.html");
}
function fancyIndexAfterRender(r) {
  return fancyIndexRender(r, "/fancy-index/after.html");
}
//# sourceMappingURL=fancy_index.njs.map
