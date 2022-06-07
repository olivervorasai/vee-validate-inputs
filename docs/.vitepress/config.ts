import { defineConfig } from 'vitepress';

export default defineConfig({
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
