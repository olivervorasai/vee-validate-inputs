import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/vee-validate-inputs/',
    title: 'VeeValidate Inputs',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            {
                text: 'Guide',
                link: '/guide/getting-started',
                activeMatch: '/guide/',
            },
        ],

        sidebar: [
            {
                text: 'Introduction',
                collapsible: true,
                items: [
                    { text: 'Getting Started', link: '/guide/getting-started' },
                ],
            },
            {
                text: 'Components',
                collapsible: true,
                items: [
                    { text: 'InputText', link: '/guide/input-text' },
                    { text: 'InputTextarea', link: '/guide/input-textarea' },
                    { text: 'InputSelect', link: '/guide/input-select' },
                    { text: 'InputDatetime', link: '/guide/input-datetime' },
                    { text: 'InputToggle', link: '/guide/input-toggle' },
                ],
            },
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/olivervorasai/vee-validate-inputs',
            },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Oliver Vorasai',
        },
    },
});
