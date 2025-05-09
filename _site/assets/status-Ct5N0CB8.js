function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import "./default-NUifn3ep.js";
import { D as DISKINFO_JSON_PATH } from "./_virtual_jekyll-data-NZIznc-5.js";
import { r as ref, o as onMounted, n as nextTick, a as createElementBlock, l as createTextVNode, e as createCommentVNode, F as Fragment, d as renderList, b as createBaseVNode, g as openBlock, t as toDisplayString, x as normalizeStyle, h as normalizeClass, _ as _export_sfc, j as useMirrorList, y as unref, m as pushScopeId, q as popScopeId, s as createApp } from "./mirrorList-BBC9Y2Le.js";
const _hoisted_1$1 = {
  key: 0,
  class: "col-12"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("strong", null, "磁盘占用", -1);
const _hoisted_3$1 = {
  key: 0,
  class: "col-1"
};
const _hoisted_4$1 = ["aria-valuenow"];
const _sfc_main$1 = {
  __name: "DiskBar",
  setup(__props) {
    const diskUsages = ref([]);
    const readableFileSize = (size) => {
      var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      var i = 0;
      while (size >= 1024) {
        size /= 1024;
        ++i;
      }
      return size.toFixed(1) + " " + units[i];
    };
    onMounted(async () => {
      const res = await fetch(DISKINFO_JSON_PATH);
      const d = await res.json();
      if (!Array.isArray(d)) {
        d = [d];
      }
      diskUsages.value = d.map((disk) => {
        const percentage = Math.round(disk.used_kb * 100 / disk.total_kb);
        return {
          desc: disk.desc,
          used: readableFileSize(disk.used_kb * 1024),
          total: readableFileSize(disk.total_kb * 1024),
          percentage: false ? percentage : 0,
          _percentage: percentage
        };
      });
      if (true) {
        await nextTick();
        await new Promise(
          (resolve) => setTimeout(() => {
            resolve();
          }, 0)
        );
        diskUsages.value.forEach((disk) => {
          disk.percentage = disk._percentage;
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        diskUsages.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          _hoisted_2$1,
          createTextVNode(":")
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(diskUsages.value, (disk) => {
          return openBlock(), createElementBlock(Fragment, null, [
            disk.desc ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(disk.desc), 1)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["col-" + (disk.desc ? "11" : "12")])
            }, [
              createBaseVNode("div", {
                class: "progress mb-3",
                role: "progressbar",
                "aria-valuenow": disk.percentage,
                "aria-valuemin": "0",
                "aria-valuemax": "100"
              }, [
                createBaseVNode("div", {
                  class: "progress-bar",
                  style: normalizeStyle({ width: disk.percentage + "%" })
                }, [
                  createBaseVNode("strong", null, toDisplayString(disk.used) + " / " + toDisplayString(disk.total), 1)
                ], 4)
              ], 8, _hoisted_4$1)
            ], 2)
          ], 64);
        }), 256))
      ], 64);
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-3956b8a6"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "table text-break table-hover table-borderless" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", { class: "d-none d-lg-table-row d-b3-table-row" }, [
    /* @__PURE__ */ createBaseVNode("th", { class: "col-2" }, "Name"),
    /* @__PURE__ */ createBaseVNode("th", {
      class: "col-4",
      colspan: "2"
    }, "Last Update"),
    /* @__PURE__ */ createBaseVNode("th", { class: "col-4" }, "Upstream"),
    /* @__PURE__ */ createBaseVNode("th", { class: "col-1" }, "Status"),
    /* @__PURE__ */ createBaseVNode("th", { class: "col-1" }, "Size")
  ])
], -1));
const _hoisted_3 = ["data-tuna-roll-cur"];
const _hoisted_4 = ["data-tuna-roll-freeze", "onMouseenter", "onMouseleave"];
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 d-lg-none d-bs3-def-none text-end" }, "Name", -1));
const _hoisted_6 = { class: "col-8 col-lg-2" };
const _hoisted_7 = {
  class: "col-12 col-lg-4 d-lg-none d-bs3-table-cell d-lg-reduce-table-cell",
  colspan: "2"
};
const _hoisted_8 = { class: "row" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 text-end" }, "Last Success", -1));
const _hoisted_10 = { class: "col-8" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 text-end" }, "Last Attempt", -1));
const _hoisted_12 = { class: "col-8" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 text-end" }, "Next Sync", -1));
const _hoisted_14 = {
  key: 1,
  class: "col-8"
};
const _hoisted_15 = {
  key: 2,
  class: "col-8"
};
const _hoisted_16 = { class: "col-2 rolling-3 d-none d-lg-table-cell d-bs3-none d-reduce-none" };
const _hoisted_17 = { class: "tuna-roll" };
const _hoisted_18 = {
  key: 0,
  "data-tuna-roll-seq": "0 1 2 3"
};
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { "data-tuna-roll-seq": "0 1" }, "Last Successful Sync", -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { "data-tuna-roll-seq": "2 3" }, "Last Attempted Sync", -1));
const _hoisted_21 = {
  key: 2,
  "data-tuna-roll-seq": "4 5"
};
const _hoisted_22 = {
  key: 3,
  "data-tuna-roll-seq": "4 5"
};
const _hoisted_23 = { class: "col-2 rolling-6 d-none d-lg-table-cell d-bs3-none d-reduce-none" };
const _hoisted_24 = { class: "tuna-roll" };
const _hoisted_25 = {
  key: 0,
  "data-tuna-roll-seq": "0 1 2 3"
};
const _hoisted_26 = { class: "tooltiptext px-1" };
const _hoisted_27 = { "data-tuna-roll-seq": "0 1" };
const _hoisted_28 = { class: "tooltiptext px-1" };
const _hoisted_29 = {
  key: 0,
  "data-tuna-roll-seq": "2 3"
};
const _hoisted_30 = { class: "tooltiptext px-1" };
const _hoisted_31 = {
  key: 2,
  "data-tuna-roll-seq": "4 5"
};
const _hoisted_32 = { class: "tooltiptext px-1" };
const _hoisted_33 = {
  key: 3,
  "data-tuna-roll-seq": "4 5"
};
const _hoisted_34 = { class: "tooltiptext px-1" };
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 d-lg-none d-bs3-def-none text-end" }, "Upstream", -1));
const _hoisted_36 = { class: "col-8 col-lg-4" };
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 d-lg-none d-bs3-def-none text-end" }, "Status", -1));
const _hoisted_38 = { class: "col-8 col-lg-1" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("th", { class: "col-4 d-lg-none d-bs3-def-none text-end" }, "Size", -1));
const _hoisted_40 = { class: "col-8 col-lg-1" };
const rollMax = 6;
const SCROLL_INTERVAL = 2e3;
const _sfc_main = {
  __name: "StatusMirrorList",
  setup(__props) {
    const rawMirrorList = useMirrorList();
    const rollCur = ref(0);
    const doScroll = function() {
      rollCur.value += 1;
      if (rollCur.value >= rollMax) rollCur.value = 0;
    };
    const freezedRows = ref({});
    onMounted(() => {
      setInterval(doScroll, SCROLL_INTERVAL);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("tbody", {
          id: "mirror-list",
          "data-tuna-roll-cur": rollCur.value % rollMax,
          "data-tuna-roll-max": rollMax,
          class: "table-group-divider"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rawMirrorList), (mir) => {
            return openBlock(), createElementBlock("tr", {
              class: normalizeClass([
                "row",
                "d-lg-table-row",
                "status-" + mir.status,
                mir.last_ended_ts == mir.last_update_ts ? "last-succ" : "last-fail"
              ]),
              key: mir.name,
              "data-tuna-roll-freeze": freezedRows.value[mir.name],
              onMouseenter: ($event) => freezedRows.value[mir.name] = rollCur.value,
              onMouseleave: ($event) => freezedRows.value[mir.name] = void 0
            }, [
              _hoisted_5,
              createBaseVNode("td", _hoisted_6, toDisplayString(mir.name) + toDisplayString(mir.is_master ? "" : " [slave]"), 1),
              createBaseVNode("td", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  _hoisted_9,
                  createBaseVNode("td", _hoisted_10, toDisplayString(mir.last_update) + ", " + toDisplayString(mir.last_update_ago), 1),
                  mir.last_ended_ts != mir.last_update_ts ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    _hoisted_11,
                    createBaseVNode("td", _hoisted_12, toDisplayString(mir.last_ended) + ", " + toDisplayString(mir.last_ended_ago), 1)
                  ], 64)) : createCommentVNode("", true),
                  _hoisted_13,
                  mir.status != "syncing" ? (openBlock(), createElementBlock("td", _hoisted_14, toDisplayString(mir.next_schedule) + ", " + toDisplayString(mir.next_schedule_ago), 1)) : (openBlock(), createElementBlock("td", _hoisted_15, "Syncing Now"))
                ])
              ]),
              createBaseVNode("td", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createTextVNode("   "),
                  mir.last_ended_ts == mir.last_update_ts ? (openBlock(), createElementBlock("div", _hoisted_18, "Last Successful Sync")) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    _hoisted_19,
                    _hoisted_20
                  ], 64)),
                  mir.status == "syncing" ? (openBlock(), createElementBlock("div", _hoisted_21, " Sync Started ")) : (openBlock(), createElementBlock("div", _hoisted_22, "Next Scheduled Sync"))
                ])
              ]),
              createBaseVNode("td", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createTextVNode("   "),
                  mir.last_ended_ts == mir.last_update_ts ? (openBlock(), createElementBlock("div", _hoisted_25, [
                    createTextVNode(toDisplayString(mir.last_update_ago) + " ", 1),
                    createBaseVNode("div", _hoisted_26, toDisplayString(mir.last_update), 1)
                  ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createBaseVNode("div", _hoisted_27, [
                      createTextVNode(toDisplayString(mir.last_update_ago) + " ", 1),
                      createBaseVNode("div", _hoisted_28, toDisplayString(mir.last_update), 1)
                    ]),
                    mir.last_ended_ts != mir.last_update_ts ? (openBlock(), createElementBlock("div", _hoisted_29, [
                      createTextVNode(toDisplayString(mir.last_ended_ago) + " ", 1),
                      createBaseVNode("div", _hoisted_30, toDisplayString(mir.last_ended), 1)
                    ])) : createCommentVNode("", true)
                  ], 64)),
                  mir.status == "syncing" ? (openBlock(), createElementBlock("div", _hoisted_31, [
                    createTextVNode(toDisplayString(mir.last_started_ago) + " ", 1),
                    createBaseVNode("div", _hoisted_32, toDisplayString(mir.last_started), 1)
                  ])) : (openBlock(), createElementBlock("div", _hoisted_33, [
                    createTextVNode(toDisplayString(mir.next_schedule_ago) + " ", 1),
                    createBaseVNode("div", _hoisted_34, toDisplayString(mir.next_schedule), 1)
                  ]))
                ])
              ]),
              _hoisted_35,
              createBaseVNode("td", _hoisted_36, toDisplayString(mir.upstream), 1),
              _hoisted_37,
              createBaseVNode("td", _hoisted_38, toDisplayString(mir.status), 1),
              _hoisted_39,
              createBaseVNode("td", _hoisted_40, toDisplayString(mir.size), 1)
            ], 42, _hoisted_4);
          }), 128))
        ], 8, _hoisted_3)
      ]);
    };
  }
};
const StatusMirrorList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3956b8a6"]]);
createApp(_sfc_main$1).mount("#disk-usage");
createApp(StatusMirrorList).mount("#mirror-list");
export {
  __vite_legacy_guard
};
//# sourceMappingURL=status-Ct5N0CB8.js.map
