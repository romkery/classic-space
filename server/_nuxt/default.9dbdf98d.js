import { a as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.a1a6add7.js";
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
const Header_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_v_tab = resolveComponent("v-tab");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__logo">NASA</div><div class="header__tabs">`);
  _push(ssrRenderComponent(_component_v_tabs, {
    "background-color": "teal-darken-3",
    "show-arrows": "",
    "slider-color": "#57ffec"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, { to: "/home" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, { class: "header__tabs-home" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Home`);
                  } else {
                    return [
                      createTextVNode("Home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_tab, { class: "header__tabs-home" }, {
                  default: withCtx(() => [
                    createTextVNode("Home")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, { class: "header__tabs-news" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`News`);
                  } else {
                    return [
                      createTextVNode("News")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_tab, { class: "header__tabs-news" }, {
                  default: withCtx(() => [
                    createTextVNode("News")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, { to: "/planet" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, { class: "header__tabs-planet" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Planet`);
                  } else {
                    return [
                      createTextVNode("Planet")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_tab, { class: "header__tabs-planet" }, {
                  default: withCtx(() => [
                    createTextVNode("Planet")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, { class: "header__tabs-about" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`About`);
                  } else {
                    return [
                      createTextVNode("About")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_tab, { class: "header__tabs-about" }, {
                  default: withCtx(() => [
                    createTextVNode("About")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, { to: "/home" }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, { class: "header__tabs-home" }, {
                default: withCtx(() => [
                  createTextVNode("Home")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, { to: "/news" }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, { class: "header__tabs-news" }, {
                default: withCtx(() => [
                  createTextVNode("News")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, { to: "/planet" }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, { class: "header__tabs-planet" }, {
                default: withCtx(() => [
                  createTextVNode("Planet")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, { to: "/about" }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, { class: "header__tabs-about" }, {
                default: withCtx(() => [
                  createTextVNode("About")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__info">`);
  _push(ssrRenderComponent(_component_v_btn, { class: "header__info-contacts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contacts`);
      } else {
        return [
          createTextVNode("Contacts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_app = resolveComponent("v-app");
  const _component_Header = __nuxt_component_0;
  const _component_NuxtPage = resolveComponent("NuxtPage");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="App"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Header, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "App" }, [
            createVNode(_component_Header),
            createVNode(_component_NuxtPage)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default.9dbdf98d.js.map
