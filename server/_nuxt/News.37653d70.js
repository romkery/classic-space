import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.a1a6add7.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_slide_y_transition = resolveComponent("v-slide-y-transition");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_slide_y_transition, {
    mode: "in",
    "hide-on-leave": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>do you want to go to space?</p>`);
      } else {
        return [
          createVNode("p", null, "do you want to go to space?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/News.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const News = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  News as default
};
//# sourceMappingURL=News.37653d70.js.map
