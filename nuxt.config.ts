// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    ssr: false,
    target: "static",
    builder: "webpack",
    // process.env.NODE_ENV === 'production' ? 'vite' : 'webpack',
    app: {
        baseURL: ""
    },
    css: ['~/assets/scss/globals/_boilerplate.scss',
        'vuetify/lib/styles/main.css',
        'mdi/css/materialdesignicons.min.css',
    ],
    head: {
        titleTemplate: '%s - classic-spaces',
        title: 'classic-spaces',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/png', href: '/favicon.ico'},
        ],
    },
    build: {},
    modules: [
        '@pinia/nuxt',
    ],
    hooks: {
        "webpack:config"(config) {
            config[0].module.rules.push({
                test: /\.(glsl|vs|fs|vert|frag)$/,
                use: ['raw-loader'],
            })
        },
    },
})
