import { _ as _export_sfc, g as openBlock, a as createElementBlock, l as createTextVNode, t as toDisplayString, h as normalizeClass, e as createCommentVNode, F as Fragment } from "./mirrorList-BBC9Y2Le.js";
const _sfc_main = {
  __name: "UpdateField",
  props: ["mir"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createTextVNode(toDisplayString(__props.mir.last_update) + " ", 1),
        __props.mir.show_status ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["badge", "badge-status", __props.mir.label, "d-none", "d-md-inline-block"])
        }, toDisplayString(__props.mir.status), 3)) : createCommentVNode("", true)
      ], 64);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9253d3a4"]]);
export {
  __unplugin_components_0 as _
};
//# sourceMappingURL=UpdateField-fltYrFvh.js.map
