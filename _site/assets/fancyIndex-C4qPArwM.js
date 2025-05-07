function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import "./default-NUifn3ep.js";
import { _ as __unplugin_components_0 } from "./UpdateField-fltYrFvh.js";
import { j as useMirrorList, c as computed, a as createElementBlock, k as createVNode, F as Fragment, e as createCommentVNode, b as createBaseVNode, g as openBlock, s as createApp } from "./mirrorList-BBC9Y2Le.js";
import "./_virtual_jekyll-data-NZIznc-5.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("strong", null, "Last Update: ", -1);
const _sfc_main = {
  __name: "NowBrowsingMirror",
  setup(__props) {
    const rawMirrorList = useMirrorList();
    const nowBrowsingMirror = computed(() => {
      var _a;
      let mirrorName = (_a = location.pathname.split("/")[1]) == null ? void 0 : _a.toLowerCase();
      if (!mirrorName) {
        return null;
      }
      const result = rawMirrorList.value.filter((m) => {
        return m.name.toLowerCase() === mirrorName;
      })[0];
      if (!result) {
        return null;
      }
      return result;
    });
    return (_ctx, _cache) => {
      const _component_UpdateField = __unplugin_components_0;
      return nowBrowsingMirror.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _hoisted_1,
        createVNode(_component_UpdateField, { mir: nowBrowsingMirror.value }, null, 8, ["mir"])
      ], 64)) : createCommentVNode("", true);
    };
  }
};
document.getElementById("list").setAttribute("class", "table");
Array.from(document.querySelectorAll("#list tbody tr td:nth-child(3)")).forEach((el) => {
  const d = new Date(el["innerText"]);
  if (!isNaN(d.getTime())) {
    const date_str = ("000" + d.getFullYear()).substr(-4) + "-" + ("0" + (d.getMonth() + 1)).substr(-2) + "-" + ("0" + d.getDate()).substr(-2) + (" " + ("0" + d.getHours()).substr(-2) + ":" + ("0" + d.getMinutes()).substr(-2));
    el["innerText"] = date_str;
  }
});
createApp(_sfc_main).mount("#now-browsing-mirror");
export {
  __vite_legacy_guard
};
//# sourceMappingURL=fancyIndex-C4qPArwM.js.map
