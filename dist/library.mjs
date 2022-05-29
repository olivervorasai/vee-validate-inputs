import { openBlock, createElementBlock } from 'vue';

const _hoisted_1 = { text: "text" };

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("input", _hoisted_1))
}

const script$1 = {};


script$1.render = render$1;
script$1.__file = "src/InputText.vue";

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("textarea"))
}

const script = {};


script.render = render;
script.__file = "src/InputTextarea.vue";

var components = { InputText: script$1, InputTextarea: script };

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(prop, component);
            }
        }
    },
};

export { plugin as default };
