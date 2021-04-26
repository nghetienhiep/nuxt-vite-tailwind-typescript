export default {
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
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/axios', '~/plugins/api'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
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
    ],

    vite: {
        /* options for vite */
        vue: {
            /* options for vite-plugin-vue2 */
        },
    },

    tailwindcss: {
        jit: true,
    },

    image: {},

    googleFonts: {
        download: true,
        display: 'swap',
        families: {
            Inter: true,
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
