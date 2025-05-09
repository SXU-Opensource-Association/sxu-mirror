;
(function () {
  System.register(['./default-legacy-BBTX4LHI.js', './UpdateField-legacy-6rXvgGjA.js', './mirrorList-legacy-CgUg-Xjk.js', './_virtual_jekyll-data-legacy--vWzKqW1.js'], function (exports, module) {
    'use strict';

    var __unplugin_components_0, useMirrorList, computed, createElementBlock, createVNode, Fragment, createCommentVNode, createBaseVNode, openBlock, createApp;
    return {
      setters: [null, function (module) {
        __unplugin_components_0 = module._;
      }, function (module) {
        useMirrorList = module.j;
        computed = module.c;
        createElementBlock = module.a;
        createVNode = module.k;
        Fragment = module.F;
        createCommentVNode = module.e;
        createBaseVNode = module.b;
        openBlock = module.g;
        createApp = module.s;
      }, null],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "#list tbody td,\n#path {\n  font-family: var(--bs-font-monospace);\n}";
        document.head.appendChild(__vite_style__);
        var _hoisted_1 = /*#__PURE__*/createBaseVNode("strong", null, "Last Update: ", -1);
        var _sfc_main = {
          __name: 'NowBrowsingMirror',
          setup: function setup(__props) {
            var rawMirrorList = useMirrorList();
            var nowBrowsingMirror = computed(function () {
              var _location$pathname$sp;
              var mirrorName = (_location$pathname$sp = location.pathname.split("/")[1]) === null || _location$pathname$sp === void 0 ? void 0 : _location$pathname$sp.toLowerCase();
              if (!mirrorName) {
                return null;
              }
              var result = rawMirrorList.value.filter(function (m) {
                return m.name.toLowerCase() === mirrorName;
              })[0];
              if (!result) {
                return null;
              }
              return result;
            });
            return function (_ctx, _cache) {
              var _component_UpdateField = __unplugin_components_0;
              return nowBrowsingMirror.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [_hoisted_1, createVNode(_component_UpdateField, {
                mir: nowBrowsingMirror.value
              }, null, 8, ["mir"])], 64)) : createCommentVNode("", true);
            };
          }
        };
        document.getElementById("list").setAttribute("class", "table");
        Array.from(document.querySelectorAll("#list tbody tr td:nth-child(3)")).forEach(function (el) {
          var d = new Date(el["innerText"]);
          if (!isNaN(d.getTime())) {
            var date_str = ("000" + d.getFullYear()).substr(-4) + "-" + ("0" + (d.getMonth() + 1)).substr(-2) + "-" + ("0" + d.getDate()).substr(-2) + (" " + ("0" + d.getHours()).substr(-2) + ":" + ("0" + d.getMinutes()).substr(-2));
            el["innerText"] = date_str;
          }
        });
        createApp(_sfc_main).mount("#now-browsing-mirror");
      }
    };
  });
})();
//# sourceMappingURL=fancyIndex-legacy-CUrWEQzP.js.map
