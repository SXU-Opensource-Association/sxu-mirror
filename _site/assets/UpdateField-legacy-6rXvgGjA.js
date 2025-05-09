;
(function () {
  System.register(['./mirrorList-legacy-CgUg-Xjk.js'], function (exports, module) {
    'use strict';

    var _export_sfc, openBlock, createElementBlock, createTextVNode, toDisplayString, normalizeClass, createCommentVNode, Fragment;
    return {
      setters: [function (module) {
        _export_sfc = module._;
        openBlock = module.g;
        createElementBlock = module.a;
        createTextVNode = module.l;
        toDisplayString = module.t;
        normalizeClass = module.h;
        createCommentVNode = module.e;
        Fragment = module.F;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".badge.badge-status[data-v-9253d3a4] {\n  vertical-align: 20%;\n  margin-left: 0.5em;\n}";
        document.head.appendChild(__vite_style__);

        /* unplugin-vue-components disabled */

        var _sfc_main = {
          __name: 'UpdateField',
          props: ["mir"],
          setup: function setup(__props) {
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock(Fragment, null, [createTextVNode(toDisplayString(__props.mir.last_update) + " ", 1), __props.mir.show_status ? (openBlock(), createElementBlock("span", {
                key: 0,
                "class": normalizeClass(['badge', 'badge-status', __props.mir.label, 'd-none', 'd-md-inline-block'])
              }, toDisplayString(__props.mir.status), 3)) : createCommentVNode("", true)], 64);
            };
          }
        };
        var __unplugin_components_0 = exports("_", /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId', "data-v-9253d3a4"]]));
      }
    };
  });
})();
//# sourceMappingURL=UpdateField-legacy-6rXvgGjA.js.map
