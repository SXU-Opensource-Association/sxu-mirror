;
(function () {
  System.register(['./default-legacy-BBTX4LHI.js', './_virtual_jekyll-config-legacy-Dzbfs2TU.js'], function (exports, module) {
    'use strict';

    var issue_tag;
    return {
      setters: [null, function (module) {
        issue_tag = module.i;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".not-found {\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.not-found-bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: -1;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.5;\n  filter: grayscale(0.2);\n  background-image: url(\"/assets/missing-Dr9HjyRe.png\");\n  background-image: -webkit-image-set(url(\"/assets/missing-Dr9HjyRe.png\") 1x, url(\"/assets/missing@2x-Ba4tDf-f.png\") 2x, url(\"/assets/missing@3x-Cb_J_H9O.png\") 3x, url(\"/assets/missing@4x-DRnemkgS.png\") 4x);\n  background-image: image-set(url(\"/assets/missing-Dr9HjyRe.png\") 1x, url(\"/assets/missing@2x-Ba4tDf-f.png\") 2x, url(\"/assets/missing@3x-Cb_J_H9O.png\") 3x, url(\"/assets/missing@4x-DRnemkgS.png\") 4x);\n}\n@media (prefers-color-scheme: dark) {\n  .not-found-bg {\n    opacity: 1;\n    filter: none;\n    background-image: url(\"/assets/missing-dark-D1RHuR22.png\");\n    background-image: -webkit-image-set(url(\"/assets/missing-dark-D1RHuR22.png\") 1x, url(\"/assets/missing-dark@2x-D3v0238x.png\") 2x, url(\"/assets/missing-dark@3x-BPlw_atB.png\") 3x, url(\"/assets/missing-dark@4x-D7qHnnAE.png\") 4x);\n    background-image: image-set(url(\"/assets/missing-dark-D1RHuR22.png\") 1x, url(\"/assets/missing-dark@2x-D3v0238x.png\") 2x, url(\"/assets/missing-dark@3x-BPlw_atB.png\") 3x, url(\"/assets/missing-dark@4x-D7qHnnAE.png\") 4x);\n  }\n}\n\n.nonthu .not-found-bg {\n  background-image: none;\n}\n\n.not-found-hint {\n  font-weight: bold;\n  font-size: 48px;\n  margin-bottom: 40px;\n  padding: 0 20px;\n}\n\n.not-found-link {\n  display: inline-block;\n  font-size: 18px;\n  margin: 0 20px;\n}\n\n.not-found-text {\n  max-width: 450px;\n  box-sizing: border-box;\n  padding: 0 40px;\n  margin-bottom: 80px;\n  font-size: 16px;\n  opacity: 0.7;\n  line-height: 24px;\n}\n\n.not-found-code {\n  font-size: 12px;\n  opacity: 0.54;\n  font-weight: normal;\n  font-style: italic;\n}";
        document.head.appendChild(__vite_style__);
        var tag = "[".concat(issue_tag, "]");
        var bugLink = document.getElementById("new_issue_bug");
        var bugURL = new URL(bugLink["href"]);
        bugURL.searchParams.append("title", tag + "404 at " + location.pathname);
        bugLink["href"] = bugURL.href;
        var mrLink = document.getElementById("new_issue_mr");
        var mrURL = new URL(mrLink["href"]);
        mrURL.searchParams.append("title", tag + "Mirror Request for new mirror " + location.pathname.split("/")[1]);
        mrLink["href"] = mrURL.href;
      }
    };
  });
})();
//# sourceMappingURL=notfound-legacy-BUfFJtS8.js.map
