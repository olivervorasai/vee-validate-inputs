'use strict';

var vue = require('vue');
var veeValidate = require('vee-validate');

var _hoisted_1$1 = ["id", "value", "name", "type", "disabled"];
var script$1 = /*#__PURE__*/ vue.defineComponent({
    name: 'InputText',
    props: {
        disabled: { type: Boolean, required: false, default: false },
        label: { type: String, required: false, default: "" },
        name: { type: String, required: true },
        showChanged: { type: Boolean, required: false, default: false },
        type: { type: String, required: true },
        vertical: { type: Boolean, required: false, default: false }
    },
    setup: function (__props) {
        var props = __props;
        var _a = veeValidate.useField(props.name), value = _a.value, handleBlur = _a.handleBlur, handleChange = _a.handleChange; _a.meta;
        return function (_ctx, _cache) {
            return (vue.openBlock(), vue.createElementBlock("input", {
                id: __props.name,
                value: vue.unref(value),
                name: __props.name,
                type: __props.type,
                disabled: __props.disabled,
                onInput: _cache[0] || (_cache[0] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (vue.unref(handleChange) && vue.unref(handleChange).apply(void 0, args));
                    }),
                onBlur: _cache[1] || (_cache[1] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (vue.unref(handleBlur) && vue.unref(handleBlur).apply(void 0, args));
                    })
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1$1));
        };
    }
});

script$1.__file = "src/InputText.vue";

var _hoisted_1 = ["id", "value", "name", "disabled", "rows"];
var script = /*#__PURE__*/ vue.defineComponent({
    name: 'InputTextarea',
    props: {
        disabled: { type: Boolean, required: false, default: false },
        height: { type: Number, required: false, default: 5 },
        label: { type: String, required: false, default: "" },
        name: { type: String, required: true },
        showChanged: { type: Boolean, required: false, default: false },
        vertical: { type: Boolean, required: false, default: false }
    },
    setup: function (__props) {
        var props = __props;
        var _a = veeValidate.useField(props.name), value = _a.value, handleBlur = _a.handleBlur, handleChange = _a.handleChange; _a.meta;
        return function (_ctx, _cache) {
            return (vue.openBlock(), vue.createElementBlock("textarea", {
                id: __props.name,
                value: vue.unref(value),
                name: __props.name,
                disabled: __props.disabled,
                rows: __props.height,
                onInput: _cache[0] || (_cache[0] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (vue.unref(handleChange) && vue.unref(handleChange).apply(void 0, args));
                    }),
                onBlur: _cache[1] || (_cache[1] =
                    //@ts-ignore
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (vue.unref(handleBlur) && vue.unref(handleBlur).apply(void 0, args));
                    })
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1));
        };
    }
});

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

module.exports = plugin;
