// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    ssr: false,
    target: "static",

    app: {
        baseURL: "./"
    },
    router: {
        trailingSlash: false
    },
    css: ['~/assets/scss/globals/_boilerplate.scss',
        'vuetify/lib/styles/main.css',
        'mdi/css/materialdesignicons.min.css',
        'animate.css'
    ],
    build: {
        // transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        css: {
            preprocessorOptions: {},
        },
    },
    modules: [
        '@pinia/nuxt',
    ],
})
