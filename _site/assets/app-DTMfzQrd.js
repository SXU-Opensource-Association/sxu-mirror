function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
import { _ as _export_sfc, r as ref, o as onMounted, n as nextTick, c as computed, a as createElementBlock, b as createBaseVNode, F as Fragment, d as renderList, t as toDisplayString, e as createCommentVNode, f as createStaticVNode, g as openBlock, h as normalizeClass, u as useModel, i as onBeforeUnmount, w as withDirectives, v as vModelText, p as processingHandlers, j as useMirrorList, k as createVNode, l as createTextVNode, m as pushScopeId, q as popScopeId, s as createApp } from "./mirrorList-BBC9Y2Le.js";
import { I as ISOINFO_JSON_PATH, o as options } from "./_virtual_jekyll-data-NZIznc-5.js";
import { g as getAugmentedNamespace, c as commonjsGlobal, r as requireSelectorEngine, a as requireConfig, b as requireUtil, d as requireBaseComponent, e as requireEventHandler, f as requireManipulator, h as getDefaultExportFromCjs } from "./default-NUifn3ep.js";
import { _ as __unplugin_components_0 } from "./UpdateField-fltYrFvh.js";
/* empty css                   */
const _sfc_main$3 = {};
function _sfc_render(_ctx, _cache) {
  return null;
}
const Empty = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _hoisted_1$1 = {
  class: "modal-dialog modal-lg",
  role: "document"
};
const _hoisted_2$1 = { class: "modal-content" };
const _hoisted_3$1 = /* @__PURE__ */ createStaticVNode('<div class="modal-header" data-v-8755a5bf><button type="button" data-bs-dismiss="modal" aria-label="Close" class="close d-none d-bs3-block" data-v-8755a5bf><span aria-hidden="true" data-v-8755a5bf>×</span></button><h4 class="modal-title" id="isoModalLabel" data-v-8755a5bf>获取安装镜像</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-8755a5bf></button></div>', 1);
const _hoisted_4$1 = { class: "modal-body" };
const _hoisted_5$1 = {
  key: 0,
  class: "row"
};
const _hoisted_6$1 = { class: "col-lg-12" };
const _hoisted_7$1 = { class: "nav nav-tabs" };
const _hoisted_8$1 = {
  class: "nav-item",
  role: "presentation"
};
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = { class: "col-lg-3" };
const _hoisted_11$1 = { class: "nav nav-pills flex-column" };
const _hoisted_12$1 = { class: "nav-item" };
const _hoisted_13$1 = ["onClick"];
const _hoisted_14$1 = { class: "col-lg-9" };
const _hoisted_15$1 = ["href"];
const _sfc_main$2 = {
  __name: "IsoModal",
  emits: ["ready"],
  setup(__props, { emit: __emit }) {
    const distroList = ref([]);
    const selected = ref({});
    const curCategory = ref("");
    const availableCategories = ref([]);
    const knownCategories = {
      os: "操作系统",
      app: "应用软件",
      font: "字体"
    };
    const emit = __emit;
    fetch(ISOINFO_JSON_PATH).then((res) => res.json()).then((isoinfo) => {
      distroList.value = isoinfo;
      availableCategories.value = [...new Set(isoinfo.map((x) => x.category))];
      curCategory.value = availableCategories.value[0];
      selected.value = curDistroList.value[0];
    });
    onMounted(async () => {
      await nextTick();
      emit("ready");
    });
    const curDistroList = computed(() => {
      return distroList.value.filter((x) => x.category === curCategory.value).sort(function(a, b) {
        return a.distro.localeCompare(b.distro);
      });
    });
    const switchDistro = (distro) => {
      selected.value = distro;
    };
    const switchCategory = (category) => {
      curCategory.value = category;
      selected.value = curDistroList.value[0];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", _hoisted_4$1, [
            availableCategories.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createBaseVNode("div", _hoisted_6$1, [
                createBaseVNode("ul", _hoisted_7$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(availableCategories.value, (cat) => {
                    return openBlock(), createElementBlock("li", _hoisted_8$1, [
                      createBaseVNode("a", {
                        class: normalizeClass([curCategory.value === cat ? "active" : "", "nav-link"]),
                        onClick: ($event) => switchCategory(cat),
                        href: "#"
                      }, toDisplayString(knownCategories[cat] ? knownCategories[cat] : cat), 11, _hoisted_9$1)
                    ]);
                  }), 256))
                ])
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("ul", _hoisted_11$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(curDistroList.value, (distro) => {
                    return openBlock(), createElementBlock("li", _hoisted_12$1, [
                      createBaseVNode("a", {
                        href: "#",
                        onClick: ($event) => switchDistro(distro),
                        class: normalizeClass([
                          selected.value.distro == distro.distro ? "active" : "",
                          "nav-link"
                        ])
                      }, toDisplayString(distro.distro), 11, _hoisted_13$1)
                    ]);
                  }), 256))
                ])
              ]),
              createBaseVNode("div", _hoisted_14$1, [
                createBaseVNode("h3", null, toDisplayString(selected.value.distro), 1),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(selected.value.urls, (url) => {
                    return openBlock(), createElementBlock("li", null, [
                      createBaseVNode("a", {
                        href: url.url
                      }, toDisplayString(url.name), 9, _hoisted_15$1)
                    ]);
                  }), 256))
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const IsoModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8755a5bf"]]);
const HelpPages = { "clickhouse": "/help/clickhouse/", "chromiumos": "/help/chromiumos/", "centos-altarch": "/help/centos-altarch/", "xanmod": "/help/xanmod/", "wine-builds": "/help/wine-builds/", "voidlinux": "/help/voidlinux/", "virtualbox": "/help/virtualbox/", "ubuntu": "/help/ubuntu/", "ubuntu-ports": "/help/ubuntu-ports/", "ubuntu-cloud-images": "/help/ubuntu-cloud-images/", "tlpretest": "/help/tlpretest/", "termux": "/help/termux/", "stackage": "/help/stackage/", "solus": "/help/solus/", "rustup": "/help/rustup/", "rudder": "/help/rudder/", "rubygems": "/help/rubygems/", "rpmfusion": "/help/rpmfusion/", "rosdistro": "/help/rosdistro/", "ros2": "/help/ros2/", "ros": "/help/ros/", "repo-ck": "/help/repo-ck/", "raspbian": "/help/raspbian/", "raspberrypi": "/help/raspberrypi/", "qubesos": "/help/qubesos/", "qt": "/help/qt/", "qemu.git": "/help/qemu.git/", "pypi": "/help/pypi/", "pybombs": "/help/pybombs/", "proxmox": "/help/proxmox/", "postmarketOS": "/help/postmarketOS/", "pkgsrc": "/help/pkgsrc/", "pkgsrc.git": "/help/pkgsrc.git/", "openwrt": "/help/openwrt/", "opensuse": "/help/opensuse/", "ohmyzsh.git": "/help/ohmyzsh.git/", "nodejs-release": "/help/nodejs-release/", "nixpkgs.git": "/help/nixpkgs.git/", "nix": "/help/nix/", "nix-channels": "/help/nix-channels/", "mysql": "/help/mysql/", "msys2": "/help/msys2/", "mozilla": "/help/mozilla/", "mongodb": "/help/mongodb/", "mariadb": "/help/mariadb/", "manjaro": "/help/manjaro/", "lxc-images": "/help/lxc-images/", "llvm-project.git": "/help/llvm-project.git/", "llvm-apt": "/help/llvm-apt/", "linuxmint": "/help/linuxmint/", "linux.git": "/help/linux.git/", "linux-stable.git": "/help/linux-stable.git/", "linux-next.git": "/help/linux-next.git/", "linux-firmware.git": "/help/linux-firmware.git/", "lineageOS": "/help/lineageOS/", "lineage-rom": "/help/lineage-rom/", "kubernetes": "/help/kubernetes/", "kodi": "/help/kodi/", "kicad": "/help/kicad/", "kali": "/help/kali/", "julia-releases": "/help/julia-releases/", "influxdata": "/help/influxdata/", "homebrew": "/help/homebrew/", "homebrew-bottles": "/help/homebrew-bottles/", "hackage": "/help/hackage/", "grafana": "/help/grafana/", "glibc.git": "/help/glibc.git/", "gitlab-runner": "/help/gitlab-runner/", "gitlab-ce": "/help/gitlab-ce/", "github-raw": "/help/github-raw/", "git-repo": "/help/git-repo/", "gentoo-portage-prefix": "/help/gentoo-prefix/", "gentoo-portage": "/help/gentoo-portage/", "gentoo-portage.git": "/help/gentoo-portage.git/", "gcc.git": "/help/gcc.git/", "flutter": "/help/flutter/", "flutter-sdk.git": "/help/flutter-sdk.git/", "fedora": "/help/fedora/", "fdroid": "/help/fdroid/", "erlang-solutions": "/help/erlang-solutions/", "epel": "/help/epel/", "entware": "/help/entware/", "elrepo": "/help/elrepo/", "elpa": "/help/elpa/", "elasticstack": "/help/elasticstack/", "eclipse": "/help/eclipse/", "docker-ce": "/help/docker-ce/", "debian": "/help/debian/", "debian-multimedia": "/help/debian-multimedia/", "debian-elts": "/help/debian-elts/", "dart-pub": "/help/dart-pub/", "cygwin": "/help/cygwin/", "crates.io-index": "/help/crates.io-index/", "crates.io-index.git": "/help/crates.io-index.git/", "clojars": "/help/clojars/", "chef": "/help/chef/", "ceph": "/help/ceph/", "centos": "/help/centos/", "centos-vault": "/help/centos-vault/", "centos-stream": "/help/centos-stream/", "blackarch": "/help/blackarch/", "bioconductor": "/help/bioconductor/", "binutils-gdb.git": "/help/binutils-gdb.git/", "bazel-apt": "/help/bazel-apt/", "armbian": "/help/armbian/", "archlinuxcn": "/help/archlinuxcn/", "archlinuxarm": "/help/archlinuxarm/", "archlinux": "/help/archlinux/", "arch4edu": "/help/arch4edu/", "anthon": "/help/anthon/", "anaconda": "/help/anaconda/", "alpine": "/help/alpine/", "OpenMediaVault": "/help/OpenMediaVault/", "OpenBSD": "/help/OpenBSD/", "NetBSD": "/help/NetBSD/", "CocoaPods": "/help/CocoaPods/", "CTAN": "/help/CTAN/", "CRAN": "/help/CRAN/", "CPAN": "/help/CPAN/", "Adoptium": "/help/Adoptium/", "AOSP": "/help/AOSP/" };
var popover = { exports: {} };
var tooltip = { exports: {} };
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options2 = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options2.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options2 = _ref2.options;
  var _options$element = options2.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options2 = _ref5.options;
  var _options$gpuAccelerat = options2.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options2.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options2.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options2 = _ref.options;
  var _options$scroll = options2.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options2.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _options = options2, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _options = options2, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options2 = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options2.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options2.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options2.fallbackPlacements, padding = options2.padding, boundary = options2.boundary, rootBoundary = options2.rootBoundary, altBoundary = options2.altBoundary, _options$flipVariatio = options2.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options2.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options2 = _ref2.options, name = _ref2.name;
  var _options$offset = options2.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options2 = _ref.options, name = _ref.name;
  var _options$mainAxis = options2.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options2.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options2.boundary, rootBoundary = options2.rootBoundary, altBoundary = options2.altBoundary, padding = options2.padding, _options$tether = options2.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options2.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options2) {
    if (options2 === void 0) {
      options2 = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options3 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options3);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options2).then(function(state2) {
      if (!isDestroyed && options2.onFirstUpdate) {
        options2.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options3 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options3
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper$2 = /* @__PURE__ */ popperGenerator();
var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /* @__PURE__ */ popperGenerator({
  defaultModifiers: defaultModifiers$1
});
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
const lib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain,
  afterRead,
  afterWrite,
  applyStyles: applyStyles$1,
  arrow: arrow$1,
  auto,
  basePlacements,
  beforeMain,
  beforeRead,
  beforeWrite,
  bottom,
  clippingParents,
  computeStyles: computeStyles$1,
  createPopper,
  createPopperBase: createPopper$2,
  createPopperLite: createPopper$1,
  detectOverflow,
  end,
  eventListeners,
  flip: flip$1,
  hide: hide$1,
  left,
  main,
  modifierPhases,
  offset: offset$1,
  placements,
  popper,
  popperGenerator,
  popperOffsets: popperOffsets$1,
  preventOverflow: preventOverflow$1,
  read,
  reference,
  right,
  start,
  top,
  variationPlacements,
  viewport,
  write
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(lib);
var sanitizer = { exports: {} };
/*!
  * Bootstrap sanitizer.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredSanitizer;
function requireSanitizer() {
  if (hasRequiredSanitizer) return sanitizer.exports;
  hasRequiredSanitizer = 1;
  (function(module, exports) {
    (function(global, factory) {
      factory(exports);
    })(commonjsGlobal, function(exports2) {
      const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
      const DefaultAllowlist = {
        // Global attributes allowed on any supplied element below.
        "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
      const uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
      const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
      const allowedAttribute = (attribute, allowedAttributeList) => {
        const attributeName = attribute.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attributeName)) {
          if (uriAttributes.has(attributeName)) {
            return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
          }
          return true;
        }
        return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
      };
      function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
        if (!unsafeHtml.length) {
          return unsafeHtml;
        }
        if (sanitizeFunction && typeof sanitizeFunction === "function") {
          return sanitizeFunction(unsafeHtml);
        }
        const domParser = new window.DOMParser();
        const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
        const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
        for (const element of elements) {
          const elementName = element.nodeName.toLowerCase();
          if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
          }
          const attributeList = [].concat(...element.attributes);
          const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
          for (const attribute of attributeList) {
            if (!allowedAttribute(attribute, allowedAttributes)) {
              element.removeAttribute(attribute.nodeName);
            }
          }
        }
        return createdDocument.body.innerHTML;
      }
      exports2.DefaultAllowlist = DefaultAllowlist;
      exports2.sanitizeHtml = sanitizeHtml;
      Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
    });
  })(sanitizer, sanitizer.exports);
  return sanitizer.exports;
}
var templateFactory = { exports: {} };
/*!
  * Bootstrap template-factory.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredTemplateFactory;
function requireTemplateFactory() {
  if (hasRequiredTemplateFactory) return templateFactory.exports;
  hasRequiredTemplateFactory = 1;
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory(requireSelectorEngine(), requireConfig(), requireSanitizer(), requireUtil());
    })(commonjsGlobal, function(SelectorEngine, Config, sanitizer_js, index_js) {
      const NAME = "TemplateFactory";
      const Default = {
        allowList: sanitizer_js.DefaultAllowlist,
        content: {},
        // { selector : text ,  selector2 : text2 , }
        extraClass: "",
        html: false,
        sanitize: true,
        sanitizeFn: null,
        template: "<div></div>"
      };
      const DefaultType = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
      };
      const DefaultContentType = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
      };
      class TemplateFactory extends Config {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        getContent() {
          return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(content) {
          this._checkContent(content);
          this._config.content = {
            ...this._config.content,
            ...content
          };
          return this;
        }
        toHtml() {
          const templateWrapper = document.createElement("div");
          templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
          for (const [selector, text] of Object.entries(this._config.content)) {
            this._setContent(templateWrapper, text, selector);
          }
          const template = templateWrapper.children[0];
          const extraClass = this._resolvePossibleFunction(this._config.extraClass);
          if (extraClass) {
            template.classList.add(...extraClass.split(" "));
          }
          return template;
        }
        // Private
        _typeCheckConfig(config) {
          super._typeCheckConfig(config);
          this._checkContent(config.content);
        }
        _checkContent(arg) {
          for (const [selector, content] of Object.entries(arg)) {
            super._typeCheckConfig({
              selector,
              entry: content
            }, DefaultContentType);
          }
        }
        _setContent(template, content, selector) {
          const templateElement = SelectorEngine.findOne(selector, template);
          if (!templateElement) {
            return;
          }
          content = this._resolvePossibleFunction(content);
          if (!content) {
            templateElement.remove();
            return;
          }
          if (index_js.isElement(content)) {
            this._putElementInTemplate(index_js.getElement(content), templateElement);
            return;
          }
          if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
          }
          templateElement.textContent = content;
        }
        _maybeSanitize(arg) {
          return this._config.sanitize ? sanitizer_js.sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
        }
        _resolvePossibleFunction(arg) {
          return index_js.execute(arg, [this]);
        }
        _putElementInTemplate(element, templateElement) {
          if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
          }
          templateElement.textContent = element.textContent;
        }
      }
      return TemplateFactory;
    });
  })(templateFactory);
  return templateFactory.exports;
}
/*!
  * Bootstrap tooltip.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredTooltip;
function requireTooltip() {
  if (hasRequiredTooltip) return tooltip.exports;
  hasRequiredTooltip = 1;
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory(require$$0, requireBaseComponent(), requireEventHandler(), requireManipulator(), requireUtil(), requireSanitizer(), requireTemplateFactory());
    })(commonjsGlobal, function(Popper, BaseComponent, EventHandler, Manipulator, index_js, sanitizer_js, TemplateFactory) {
      function _interopNamespaceDefault(e) {
        const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
        if (e) {
          for (const k in e) {
            if (k !== "default") {
              const d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: () => e[k]
              });
            }
          }
        }
        n.default = e;
        return Object.freeze(n);
      }
      const Popper__namespace = /* @__PURE__ */ _interopNamespaceDefault(Popper);
      const NAME = "tooltip";
      const DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
      const CLASS_NAME_FADE = "fade";
      const CLASS_NAME_MODAL = "modal";
      const CLASS_NAME_SHOW = "show";
      const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
      const SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
      const EVENT_MODAL_HIDE = "hide.bs.modal";
      const TRIGGER_HOVER = "hover";
      const TRIGGER_FOCUS = "focus";
      const TRIGGER_CLICK = "click";
      const TRIGGER_MANUAL = "manual";
      const EVENT_HIDE = "hide";
      const EVENT_HIDDEN = "hidden";
      const EVENT_SHOW = "show";
      const EVENT_SHOWN = "shown";
      const EVENT_INSERTED = "inserted";
      const EVENT_CLICK = "click";
      const EVENT_FOCUSIN = "focusin";
      const EVENT_FOCUSOUT = "focusout";
      const EVENT_MOUSEENTER = "mouseenter";
      const EVENT_MOUSELEAVE = "mouseleave";
      const AttachmentMap = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: index_js.isRTL() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: index_js.isRTL() ? "right" : "left"
      };
      const Default = {
        allowList: sanitizer_js.DefaultAllowlist,
        animation: true,
        boundary: "clippingParents",
        container: false,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: false,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: true,
        sanitizeFn: null,
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
      };
      const DefaultType = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
      };
      class Tooltip extends BaseComponent {
        constructor(element, config) {
          if (typeof Popper__namespace === "undefined") {
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          }
          super(element, config);
          this._isEnabled = true;
          this._timeout = 0;
          this._isHovered = null;
          this._activeTrigger = {};
          this._popper = null;
          this._templateFactory = null;
          this._newContent = null;
          this.tip = null;
          this._setListeners();
          if (!this._config.selector) {
            this._fixTitle();
          }
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        enable() {
          this._isEnabled = true;
        }
        disable() {
          this._isEnabled = false;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          if (!this._isEnabled) {
            return;
          }
          this._activeTrigger.click = !this._activeTrigger.click;
          if (this._isShown()) {
            this._leave();
            return;
          }
          this._enter();
        }
        dispose() {
          clearTimeout(this._timeout);
          EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
          if (this._element.getAttribute("data-bs-original-title")) {
            this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
          }
          this._disposePopper();
          super.dispose();
        }
        show() {
          if (this._element.style.display === "none") {
            throw new Error("Please use show on visible elements");
          }
          if (!(this._isWithContent() && this._isEnabled)) {
            return;
          }
          const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW));
          const shadowRoot = index_js.findShadowRoot(this._element);
          const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
          if (showEvent.defaultPrevented || !isInTheDom) {
            return;
          }
          this._disposePopper();
          const tip = this._getTipElement();
          this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
          const {
            container
          } = this._config;
          if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
          }
          this._popper = this._createPopper(tip);
          tip.classList.add(CLASS_NAME_SHOW);
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              EventHandler.on(element, "mouseover", index_js.noop);
            }
          }
          const complete = () => {
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN));
            if (this._isHovered === false) {
              this._leave();
            }
            this._isHovered = false;
          };
          this._queueCallback(complete, this.tip, this._isAnimated());
        }
        hide() {
          if (!this._isShown()) {
            return;
          }
          const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE));
          if (hideEvent.defaultPrevented) {
            return;
          }
          const tip = this._getTipElement();
          tip.classList.remove(CLASS_NAME_SHOW);
          if ("ontouchstart" in document.documentElement) {
            for (const element of [].concat(...document.body.children)) {
              EventHandler.off(element, "mouseover", index_js.noop);
            }
          }
          this._activeTrigger[TRIGGER_CLICK] = false;
          this._activeTrigger[TRIGGER_FOCUS] = false;
          this._activeTrigger[TRIGGER_HOVER] = false;
          this._isHovered = null;
          const complete = () => {
            if (this._isWithActiveTrigger()) {
              return;
            }
            if (!this._isHovered) {
              this._disposePopper();
            }
            this._element.removeAttribute("aria-describedby");
            EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN));
          };
          this._queueCallback(complete, this.tip, this._isAnimated());
        }
        update() {
          if (this._popper) {
            this._popper.update();
          }
        }
        // Protected
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          if (!this.tip) {
            this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
          }
          return this.tip;
        }
        _createTipElement(content) {
          const tip = this._getTemplateFactory(content).toHtml();
          if (!tip) {
            return null;
          }
          tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW);
          tip.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
          const tipId = index_js.getUID(this.constructor.NAME).toString();
          tip.setAttribute("id", tipId);
          if (this._isAnimated()) {
            tip.classList.add(CLASS_NAME_FADE);
          }
          return tip;
        }
        setContent(content) {
          this._newContent = content;
          if (this._isShown()) {
            this._disposePopper();
            this.show();
          }
        }
        _getTemplateFactory(content) {
          if (this._templateFactory) {
            this._templateFactory.changeContent(content);
          } else {
            this._templateFactory = new TemplateFactory({
              ...this._config,
              // the `content` var has to be after `this._config`
              // to override config.content in case of popover
              content,
              extraClass: this._resolvePossibleFunction(this._config.customClass)
            });
          }
          return this._templateFactory;
        }
        _getContentForTemplate() {
          return {
            [SELECTOR_TOOLTIP_INNER]: this._getTitle()
          };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        // Private
        _initializeOnDelegatedTarget(event) {
          return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW);
        }
        _createPopper(tip) {
          const placement = index_js.execute(this._config.placement, [this, tip, this._element]);
          const attachment = AttachmentMap[placement.toUpperCase()];
          return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }
        _getOffset() {
          const {
            offset: offset2
          } = this._config;
          if (typeof offset2 === "string") {
            return offset2.split(",").map((value) => Number.parseInt(value, 10));
          }
          if (typeof offset2 === "function") {
            return (popperData) => offset2(popperData, this._element);
          }
          return offset2;
        }
        _resolvePossibleFunction(arg) {
          return index_js.execute(arg, [this._element]);
        }
        _getPopperConfig(attachment) {
          const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [{
              name: "flip",
              options: {
                fallbackPlacements: this._config.fallbackPlacements
              }
            }, {
              name: "offset",
              options: {
                offset: this._getOffset()
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: this._config.boundary
              }
            }, {
              name: "arrow",
              options: {
                element: ".".concat(this.constructor.NAME, "-arrow")
              }
            }, {
              name: "preSetPlacement",
              enabled: true,
              phase: "beforeMain",
              fn: (data) => {
                this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
              }
            }]
          };
          return {
            ...defaultBsPopperConfig,
            ...index_js.execute(this._config.popperConfig, [defaultBsPopperConfig])
          };
        }
        _setListeners() {
          const triggers = this._config.trigger.split(" ");
          for (const trigger of triggers) {
            if (trigger === "click") {
              EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
              });
            } else if (trigger !== TRIGGER_MANUAL) {
              const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN);
              const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT);
              EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                context._enter();
              });
              EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
                const context = this._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                context._leave();
              });
            }
          }
          this._hideModalHandler = () => {
            if (this._element) {
              this.hide();
            }
          };
          EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        }
        _fixTitle() {
          const title = this._element.getAttribute("title");
          if (!title) {
            return;
          }
          if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
            this._element.setAttribute("aria-label", title);
          }
          this._element.setAttribute("data-bs-original-title", title);
          this._element.removeAttribute("title");
        }
        _enter() {
          if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
          }
          this._isHovered = true;
          this._setTimeout(() => {
            if (this._isHovered) {
              this.show();
            }
          }, this._config.delay.show);
        }
        _leave() {
          if (this._isWithActiveTrigger()) {
            return;
          }
          this._isHovered = false;
          this._setTimeout(() => {
            if (!this._isHovered) {
              this.hide();
            }
          }, this._config.delay.hide);
        }
        _setTimeout(handler, timeout) {
          clearTimeout(this._timeout);
          this._timeout = setTimeout(handler, timeout);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(true);
        }
        _getConfig(config) {
          const dataAttributes = Manipulator.getDataAttributes(this._element);
          for (const dataAttribute of Object.keys(dataAttributes)) {
            if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
              delete dataAttributes[dataAttribute];
            }
          }
          config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
          };
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          config.container = config.container === false ? document.body : index_js.getElement(config.container);
          if (typeof config.delay === "number") {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }
          if (typeof config.title === "number") {
            config.title = config.title.toString();
          }
          if (typeof config.content === "number") {
            config.content = config.content.toString();
          }
          return config;
        }
        _getDelegateConfig() {
          const config = {};
          for (const [key, value] of Object.entries(this._config)) {
            if (this.constructor.Default[key] !== value) {
              config[key] = value;
            }
          }
          config.selector = false;
          config.trigger = "manual";
          return config;
        }
        _disposePopper() {
          if (this._popper) {
            this._popper.destroy();
            this._popper = null;
          }
          if (this.tip) {
            this.tip.remove();
            this.tip = null;
          }
        }
        // Static
        static jQueryInterface(config) {
          return this.each(function() {
            const data = Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") {
              return;
            }
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "'.concat(config, '"'));
            }
            data[config]();
          });
        }
      }
      index_js.defineJQueryPlugin(Tooltip);
      return Tooltip;
    });
  })(tooltip);
  return tooltip.exports;
}
/*!
  * Bootstrap popover.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(module, exports) {
  (function(global, factory) {
    module.exports = factory(requireTooltip(), requireUtil());
  })(commonjsGlobal, function(Tooltip, index_js) {
    const NAME = "popover";
    const SELECTOR_TITLE = ".popover-header";
    const SELECTOR_CONTENT = ".popover-body";
    const Default = {
      ...Tooltip.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    };
    const DefaultType = {
      ...Tooltip.DefaultType,
      content: "(null|string|element|function)"
    };
    class Popover extends Tooltip {
      // Getters
      static get Default() {
        return Default;
      }
      static get DefaultType() {
        return DefaultType;
      }
      static get NAME() {
        return NAME;
      }
      // Overrides
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      // Private
      _getContentForTemplate() {
        return {
          [SELECTOR_TITLE]: this._getTitle(),
          [SELECTOR_CONTENT]: this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      // Static
      static jQueryInterface(config) {
        return this.each(function() {
          const data = Popover.getOrCreateInstance(this, config);
          if (typeof config !== "string") {
            return;
          }
          if (typeof data[config] === "undefined") {
            throw new TypeError('No method named "'.concat(config, '"'));
          }
          data[config]();
        });
      }
    }
    index_js.defineJQueryPlugin(Popover);
    return Popover;
  });
})(popover);
var popoverExports = popover.exports;
const BootStrapPopover = /* @__PURE__ */ getDefaultExportFromCjs(popoverExports);
const _sfc_main$1 = {
  __name: "SearchBox",
  props: {
    "modelValue": { type: String, default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const inputRef = ref(null);
    const onGlobalKeyPress = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    onMounted(() => {
      window.addEventListener("keypress", onGlobalKeyPress);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keypress", onGlobalKeyPress);
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("input", {
        type: "search",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        ref_key: "inputRef",
        ref: inputRef,
        placeholder: "按 / 搜索",
        autocomplete: "off",
        class: "ms-auto d-inline-flex align-self-center d-bs3-none"
      }, null, 512)), [
        [vModelText, model.value]
      ]);
    };
  }
};
const SearchBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-260108a9"]]);
const _withScopeId = (n) => (pushScopeId("data-v-10cb6052"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex-row d-flex" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", {
  id: "mirror-title",
  class: "align-self-center"
}, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": "#fas.fa-cube" })
  ]),
  /* @__PURE__ */ createTextVNode(" 镜像列表 ")
], -1));
const _hoisted_3 = {
  key: 0,
  class: "table row table-hover"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", { class: "row" }, [
    /* @__PURE__ */ createBaseVNode("th", { class: "col-8 col-lg-7 col-xl-8" }, "Name"),
    /* @__PURE__ */ createBaseVNode("th", { class: "col-4 col-lg-5 col-xl-4" }, "Last Update")
  ])
], -1));
const _hoisted_5 = { class: "table-group-divider" };
const _hoisted_6 = { class: "col-8 col-lg-7 col-xl-8" };
const _hoisted_7 = ["data-bs-content", "href", "aria-label"];
const _hoisted_8 = {
  key: 0,
  class: "badge badge-new"
};
const _hoisted_9 = ["href"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "question-circle",
  title: "Help"
}, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": "#fas.fa-circle-question" })
  ])
], -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "visually-hidden" }, "[Help]", -1));
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
const _hoisted_13 = {
  key: 2,
  href: "javascript:void(0)"
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  title: "GitHub Release"
}, [
  /* @__PURE__ */ createBaseVNode("svg", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": "#fab.fa-github" })
  ])
], -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "visually-hidden" }, "[GitHub Release]", -1));
const _hoisted_16 = [
  _hoisted_14,
  _hoisted_15
];
const _hoisted_17 = { class: "col-4 col-lg-5 col-xl-4" };
const _hoisted_18 = {
  key: 1,
  class: "sk-wave"
};
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<div class="sk-rect sk-rect1" data-v-10cb6052></div><div class="sk-rect sk-rect2" data-v-10cb6052></div><div class="sk-rect sk-rect3" data-v-10cb6052></div><div class="sk-rect sk-rect4" data-v-10cb6052></div><div class="sk-rect sk-rect5" data-v-10cb6052></div>', 5);
const _hoisted_24 = [
  _hoisted_19
];
const _sfc_main = {
  __name: "MainMirrorList",
  setup(__props) {
    const { unlistedMirrors: unlisted, genMainMirrorList } = processingHandlers(options);
    const rawMirrorList = useMirrorList(unlisted);
    const mirrorList = computed(() => {
      return genMainMirrorList(rawMirrorList.value, HelpPages);
    });
    const filter = ref("");
    const filteredMirrorList = computed(() => {
      var filterText = filter.value.toLowerCase();
      return mirrorList.value.filter((m) => {
        return m.is_master && m.name.toLowerCase().indexOf(filterText) !== -1;
      });
    });
    const vWithPopover = {
      mounted: (el) => {
        BootStrapPopover.getOrCreateInstance(el);
      },
      beforeUnmount: (el) => {
        var _a;
        (_a = BootStrapPopover.getInstance(el)) == null ? void 0 : _a.dispose();
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createVNode(SearchBox, {
            modelValue: filter.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        mirrorList.value.length ? (openBlock(), createElementBlock("table", _hoisted_3, [
          _hoisted_4,
          createBaseVNode("tbody", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filteredMirrorList.value, (mir) => {
              return openBlock(), createElementBlock("tr", {
                class: normalizeClass(["row", "status-" + mir.status]),
                key: mir.name
              }, [
                createBaseVNode("td", _hoisted_6, [
                  withDirectives((openBlock(), createElementBlock("a", {
                    class: "mirror-item-label",
                    "data-bs-toggle": "popover",
                    "data-bs-trigger": "hover",
                    "data-bs-placement": "right",
                    "data-bs-content": mir.description,
                    href: mir.url,
                    "aria-label": mir.name + (mir.description ? ", " + mir.description : "")
                  }, [
                    createTextVNode(toDisplayString(mir.name), 1)
                  ], 8, _hoisted_7)), [
                    [vWithPopover]
                  ]),
                  mir.is_new ? (openBlock(), createElementBlock("span", _hoisted_8, "new")) : createCommentVNode("", true),
                  mir.help_url ? (openBlock(), createElementBlock("a", {
                    key: 1,
                    href: mir.help_url
                  }, _hoisted_12, 8, _hoisted_9)) : createCommentVNode("", true),
                  mir.github_release ? (openBlock(), createElementBlock("a", _hoisted_13, _hoisted_16)) : createCommentVNode("", true)
                ]),
                createBaseVNode("td", _hoisted_17, [
                  createVNode(__unplugin_components_0, { mir }, null, 8, ["mir"])
                ])
              ], 2);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_18, _hoisted_24))
      ], 64);
    };
  }
};
const MainMirrorList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10cb6052"]]);
var modal = { exports: {} };
var backdrop = { exports: {} };
/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredBackdrop;
function requireBackdrop() {
  if (hasRequiredBackdrop) return backdrop.exports;
  hasRequiredBackdrop = 1;
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory(requireEventHandler(), requireConfig(), requireUtil());
    })(commonjsGlobal, function(EventHandler, Config, index_js) {
      const NAME = "backdrop";
      const CLASS_NAME_FADE = "fade";
      const CLASS_NAME_SHOW = "show";
      const EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME);
      const Default = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: false,
        isVisible: true,
        // if false, we use the backdrop helper without adding any element to the dom
        rootElement: "body"
        // give the choice to place backdrop under different elements
      };
      const DefaultType = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
      };
      class Backdrop extends Config {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
          this._isAppended = false;
          this._element = null;
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        show(callback) {
          if (!this._config.isVisible) {
            index_js.execute(callback);
            return;
          }
          this._append();
          const element = this._getElement();
          if (this._config.isAnimated) {
            index_js.reflow(element);
          }
          element.classList.add(CLASS_NAME_SHOW);
          this._emulateAnimation(() => {
            index_js.execute(callback);
          });
        }
        hide(callback) {
          if (!this._config.isVisible) {
            index_js.execute(callback);
            return;
          }
          this._getElement().classList.remove(CLASS_NAME_SHOW);
          this._emulateAnimation(() => {
            this.dispose();
            index_js.execute(callback);
          });
        }
        dispose() {
          if (!this._isAppended) {
            return;
          }
          EventHandler.off(this._element, EVENT_MOUSEDOWN);
          this._element.remove();
          this._isAppended = false;
        }
        // Private
        _getElement() {
          if (!this._element) {
            const backdrop2 = document.createElement("div");
            backdrop2.className = this._config.className;
            if (this._config.isAnimated) {
              backdrop2.classList.add(CLASS_NAME_FADE);
            }
            this._element = backdrop2;
          }
          return this._element;
        }
        _configAfterMerge(config) {
          config.rootElement = index_js.getElement(config.rootElement);
          return config;
        }
        _append() {
          if (this._isAppended) {
            return;
          }
          const element = this._getElement();
          this._config.rootElement.append(element);
          EventHandler.on(element, EVENT_MOUSEDOWN, () => {
            index_js.execute(this._config.clickCallback);
          });
          this._isAppended = true;
        }
        _emulateAnimation(callback) {
          index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
        }
      }
      return Backdrop;
    });
  })(backdrop);
  return backdrop.exports;
}
var componentFunctions = { exports: {} };
/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredComponentFunctions;
function requireComponentFunctions() {
  if (hasRequiredComponentFunctions) return componentFunctions.exports;
  hasRequiredComponentFunctions = 1;
  (function(module, exports) {
    (function(global, factory) {
      factory(exports, requireEventHandler(), requireSelectorEngine(), requireUtil());
    })(commonjsGlobal, function(exports2, EventHandler, SelectorEngine, index_js) {
      const enableDismissTrigger = (component, method = "hide") => {
        const clickEvent = "click.dismiss".concat(component.EVENT_KEY);
        const name = component.NAME;
        EventHandler.on(document, clickEvent, '[data-bs-dismiss="'.concat(name, '"]'), function(event) {
          if (["A", "AREA"].includes(this.tagName)) {
            event.preventDefault();
          }
          if (index_js.isDisabled(this)) {
            return;
          }
          const target = SelectorEngine.getElementFromSelector(this) || this.closest(".".concat(name));
          const instance = component.getOrCreateInstance(target);
          instance[method]();
        });
      };
      exports2.enableDismissTrigger = enableDismissTrigger;
      Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
    });
  })(componentFunctions, componentFunctions.exports);
  return componentFunctions.exports;
}
var focustrap = { exports: {} };
/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredFocustrap;
function requireFocustrap() {
  if (hasRequiredFocustrap) return focustrap.exports;
  hasRequiredFocustrap = 1;
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory(requireEventHandler(), requireSelectorEngine(), requireConfig());
    })(commonjsGlobal, function(EventHandler, SelectorEngine, Config) {
      const NAME = "focustrap";
      const DATA_KEY = "bs.focustrap";
      const EVENT_KEY = ".".concat(DATA_KEY);
      const EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
      const EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY);
      const TAB_KEY = "Tab";
      const TAB_NAV_FORWARD = "forward";
      const TAB_NAV_BACKWARD = "backward";
      const Default = {
        autofocus: true,
        trapElement: null
        // The element to trap focus inside of
      };
      const DefaultType = {
        autofocus: "boolean",
        trapElement: "element"
      };
      class FocusTrap extends Config {
        constructor(config) {
          super();
          this._config = this._getConfig(config);
          this._isActive = false;
          this._lastTabNavDirection = null;
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        activate() {
          if (this._isActive) {
            return;
          }
          if (this._config.autofocus) {
            this._config.trapElement.focus();
          }
          EventHandler.off(document, EVENT_KEY);
          EventHandler.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
          EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
          this._isActive = true;
        }
        deactivate() {
          if (!this._isActive) {
            return;
          }
          this._isActive = false;
          EventHandler.off(document, EVENT_KEY);
        }
        // Private
        _handleFocusin(event) {
          const {
            trapElement
          } = this._config;
          if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
            return;
          }
          const elements = SelectorEngine.focusableChildren(trapElement);
          if (elements.length === 0) {
            trapElement.focus();
          } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
            elements[elements.length - 1].focus();
          } else {
            elements[0].focus();
          }
        }
        _handleKeydown(event) {
          if (event.key !== TAB_KEY) {
            return;
          }
          this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
        }
      }
      return FocusTrap;
    });
  })(focustrap);
  return focustrap.exports;
}
var scrollbar = { exports: {} };
/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var hasRequiredScrollbar;
function requireScrollbar() {
  if (hasRequiredScrollbar) return scrollbar.exports;
  hasRequiredScrollbar = 1;
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory(requireManipulator(), requireSelectorEngine(), requireUtil());
    })(commonjsGlobal, function(Manipulator, SelectorEngine, index_js) {
      const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
      const SELECTOR_STICKY_CONTENT = ".sticky-top";
      const PROPERTY_PADDING = "padding-right";
      const PROPERTY_MARGIN = "margin-right";
      class ScrollBarHelper {
        constructor() {
          this._element = document.body;
        }
        // Public
        getWidth() {
          const documentWidth = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - documentWidth);
        }
        hide() {
          const width = this.getWidth();
          this._disableOverFlow();
          this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
          this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
          this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow");
          this._resetElementAttributes(this._element, PROPERTY_PADDING);
          this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
          this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        // Private
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow");
          this._element.style.overflow = "hidden";
        }
        _setElementAttributes(selector, styleProperty, callback) {
          const scrollbarWidth = this.getWidth();
          const manipulationCallBack = (element) => {
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
              return;
            }
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
          };
          this._applyManipulationCallback(selector, manipulationCallBack);
        }
        _saveInitialAttribute(element, styleProperty) {
          const actualValue = element.style.getPropertyValue(styleProperty);
          if (actualValue) {
            Manipulator.setDataAttribute(element, styleProperty, actualValue);
          }
        }
        _resetElementAttributes(selector, styleProperty) {
          const manipulationCallBack = (element) => {
            const value = Manipulator.getDataAttribute(element, styleProperty);
            if (value === null) {
              element.style.removeProperty(styleProperty);
              return;
            }
            Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
          };
          this._applyManipulationCallback(selector, manipulationCallBack);
        }
        _applyManipulationCallback(selector, callBack) {
          if (index_js.isElement(selector)) {
            callBack(selector);
            return;
          }
          for (const sel of SelectorEngine.find(selector, this._element)) {
            callBack(sel);
          }
        }
      }
      return ScrollBarHelper;
    });
  })(scrollbar);
  return scrollbar.exports;
}
/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(module, exports) {
  (function(global, factory) {
    module.exports = factory(requireBaseComponent(), requireEventHandler(), requireSelectorEngine(), requireBackdrop(), requireComponentFunctions(), requireFocustrap(), requireUtil(), requireScrollbar());
  })(commonjsGlobal, function(BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) {
    const NAME = "modal";
    const DATA_KEY = "bs.modal";
    const EVENT_KEY = ".".concat(DATA_KEY);
    const DATA_API_KEY = ".data-api";
    const ESCAPE_KEY = "Escape";
    const EVENT_HIDE = "hide".concat(EVENT_KEY);
    const EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY);
    const EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
    const EVENT_SHOW = "show".concat(EVENT_KEY);
    const EVENT_SHOWN = "shown".concat(EVENT_KEY);
    const EVENT_RESIZE = "resize".concat(EVENT_KEY);
    const EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY);
    const EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY);
    const EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY);
    const EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
    const CLASS_NAME_OPEN = "modal-open";
    const CLASS_NAME_FADE = "fade";
    const CLASS_NAME_SHOW = "show";
    const CLASS_NAME_STATIC = "modal-static";
    const OPEN_SELECTOR = ".modal.show";
    const SELECTOR_DIALOG = ".modal-dialog";
    const SELECTOR_MODAL_BODY = ".modal-body";
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
    const Default = {
      backdrop: true,
      focus: true,
      keyboard: true
    };
    const DefaultType = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class Modal extends BaseComponent {
      constructor(element, config) {
        super(element, config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
        this._addEventListeners();
      }
      // Getters
      static get Default() {
        return Default;
      }
      static get DefaultType() {
        return DefaultType;
      }
      static get NAME() {
        return NAME;
      }
      // Public
      toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
      show(relatedTarget) {
        if (this._isShown || this._isTransitioning) {
          return;
        }
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
          relatedTarget
        });
        if (showEvent.defaultPrevented) {
          return;
        }
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(() => this._showElement(relatedTarget));
      }
      hide() {
        if (!this._isShown || this._isTransitioning) {
          return;
        }
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) {
          return;
        }
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW);
        this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
      }
      dispose() {
        EventHandler.off(window, EVENT_KEY);
        EventHandler.off(this._dialog, EVENT_KEY);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _initializeBackDrop() {
        return new Backdrop({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new FocusTrap({
          trapElement: this._element
        });
      }
      _showElement(relatedTarget) {
        if (!document.body.contains(this._element)) {
          document.body.append(this._element);
        }
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.scrollTop = 0;
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) {
          modalBody.scrollTop = 0;
        }
        index_js.reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW);
        const transitionComplete = () => {
          if (this._config.focus) {
            this._focustrap.activate();
          }
          this._isTransitioning = false;
          EventHandler.trigger(this._element, EVENT_SHOWN, {
            relatedTarget
          });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
          if (event.key !== ESCAPE_KEY) {
            return;
          }
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          this._triggerBackdropTransition();
        });
        EventHandler.on(window, EVENT_RESIZE, () => {
          if (this._isShown && !this._isTransitioning) {
            this._adjustDialog();
          }
        });
        EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
          EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
            if (this._element !== event.target || this._element !== event2.target) {
              return;
            }
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            if (this._config.backdrop) {
              this.hide();
            }
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._backdrop.hide(() => {
          document.body.classList.remove(CLASS_NAME_OPEN);
          this._resetAdjustments();
          this._scrollBar.reset();
          EventHandler.trigger(this._element, EVENT_HIDDEN);
        });
      }
      _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE);
      }
      _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        if (hideEvent.defaultPrevented) {
          return;
        }
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY;
        if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
          return;
        }
        if (!isModalOverflowing) {
          this._element.style.overflowY = "hidden";
        }
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.classList.remove(CLASS_NAME_STATIC);
          this._queueCallback(() => {
            this._element.style.overflowY = initialOverflowY;
          }, this._dialog);
        }, this._dialog);
        this._element.focus();
      }
      /**
       * The following methods are used to handle overflowing modals
       */
      _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
          const property = index_js.isRTL() ? "paddingLeft" : "paddingRight";
          this._element.style[property] = "".concat(scrollbarWidth, "px");
        }
        if (!isBodyOverflowing && isModalOverflowing) {
          const property = index_js.isRTL() ? "paddingRight" : "paddingLeft";
          this._element.style[property] = "".concat(scrollbarWidth, "px");
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
      }
      // Static
      static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
          const data = Modal.getOrCreateInstance(this, config);
          if (typeof config !== "string") {
            return;
          }
          if (typeof data[config] === "undefined") {
            throw new TypeError('No method named "'.concat(config, '"'));
          }
          data[config](relatedTarget);
        });
      }
    }
    EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
      const target = SelectorEngine.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      EventHandler.one(target, EVENT_SHOW, (showEvent) => {
        if (showEvent.defaultPrevented) {
          return;
        }
        EventHandler.one(target, EVENT_HIDDEN, () => {
          if (index_js.isVisible(this)) {
            this.focus();
          }
        });
      });
      const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
      if (alreadyOpen) {
        Modal.getInstance(alreadyOpen).hide();
      }
      const data = Modal.getOrCreateInstance(target);
      data.toggle(this);
    });
    componentFunctions_js.enableDismissTrigger(Modal);
    index_js.defineJQueryPlugin(Modal);
    return Modal;
  });
})(modal);
var modalExports = modal.exports;
const BootStrapModal = /* @__PURE__ */ getDefaultExportFromCjs(modalExports);
const empty = createApp(Empty);
empty.mount("#upgrade-mask");
const isoModalEl = document.getElementById("isoModal");
createApp(IsoModal, {
  onReady: async function() {
    if (window.location.hash.match(/#iso-download(\?.*)?/)) {
      new BootStrapModal(isoModalEl).show();
    }
  }
}).mount(isoModalEl);
createApp(MainMirrorList).mount("#mirror-list");
export {
  __vite_legacy_guard
};
//# sourceMappingURL=app-DTMfzQrd.js.map
