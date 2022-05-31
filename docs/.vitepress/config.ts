import { defineConfig } from "vitepress";

export default defineConfig({
    title: "VeeValidate Inputs",
    description: "Just playing around.",
    themeConfig: {
        sidebar: {
            "/": [
                {
                    text: "Inputs",
                    children: [
                        { text: "InputText", link: "/inputs/input-text" },
                        { text: "InputTextarea", link: "/inputs/input-textarea" },
                    ],
                },
            ],
        },
    },
});