export default {
    components: true,
    head: {
        titleTemplate: 'Mastering Nuxt: %s',
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: ['my-style']
        },
        meta: [{
            charset: 'utf-8'
        }],
    }, 
    router: {
        prefetchLinks: false
    },
    plugins: [ "~/plugins/maps.client", '~/plugins/dataApi' ],
    privateRuntimeConfig: {
        googleMapsApi: process.env.GOOGLE_MAPS_API,
        algoliaAppId: process.env.ALGOLIA_APP_ID,
        algoliaApiKey: process.env.ALGOLIA_API_KEY
    },
}