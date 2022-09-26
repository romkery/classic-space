// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    ssr: false,
    target: "server",

    css: ['~/assets/scss/globals/_boilerplate.scss',
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        css: {
            preprocessorOptions: {},
        },
    },
})
