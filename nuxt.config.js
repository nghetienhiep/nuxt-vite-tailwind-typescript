export default {
    server: {
        port: 8000, // default: 3000
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-vite-tailwind-typescript',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    loading: {
        color: '#1caa4d',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/variables.css', '@/assets/css/style.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/axios', '~/plugins/api'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://image.nuxtjs.org/setup
        '@nuxt/image',
        // https://google-fonts.nuxtjs.org/setup
        '@nuxtjs/google-fonts',
        // https://vite.nuxtjs.org/get-started/usage
        'nuxt-vite',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        [
            'nuxt-i18n',
            {
                seo: true,
                defaultLocale: 'vi',
                locales: [
                    {
                        name: 'Vietnamese',
                        code: 'vi',
                        iso: 'vi-VN',
                        file: 'vi.js',
                    },
                    {
                        name: 'English',
                        code: 'en',
                        iso: 'en-GB',
                        file: 'en.js',
                    },
                ],
                lazy: true,
                langDir: 'locales/',
                detectBrowserLanguage: false,
            },
        ],
    ],

    tailwindcss: {
        jit: true,
    },

    image: {},

    googleFonts: {
        display: 'swap',
        families: {
            Roboto: true,
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'vi',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
