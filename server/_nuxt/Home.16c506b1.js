import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useHomeCardStore, _ as _sfc_main$1 } from "../server.mjs";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
import "@vue/devtools-api";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useHomeCardStore();
    const imageLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_lazy = resolveComponent("v-lazy");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><div class="home__title"><h1 class="animate__animated animate__slideInLeft" style="${ssrRenderStyle(imageLoaded.value ? null : { display: "none" })}">DO YOU WANT TO GO TO SPACE?</h1><img style="${ssrRenderStyle(imageLoaded.value ? null : { display: "none" })}" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png" alt="earth" class="animate__animated animate__slideInRight"></div><div class="home__info">`);
      _push(ssrRenderComponent(_component_v_lazy, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="animate__animated animate__fadeInUp"${_scopeId}>HERE YOU CAN SEE...</h2>`);
          } else {
            return [
              createVNode("h2", { class: "animate__animated animate__fadeInUp" }, "HERE YOU CAN SEE...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(store).cards, (card) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          imgSrc: card.imgSrc,
          flexDirection: card.flexDirection,
          text: card.text
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const Home_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Home.16c506b1.js.map
