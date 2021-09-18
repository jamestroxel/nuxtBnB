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
    plugins: [ "~/plugins/maps.client", '~/plugins/dataApi', '~/plugins/auth.client' ],
    modules: [ '~/modules/auth',  '~/modules/algolia'],
    buildModules:['@nuxtjs/tailwindcss'],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0
        }
    },
    publicRuntimeConfig: {
        auth: {
            cookieName: 'idToken',
            clientId: '1075477676489-hmsqcchi39qujopq969uelvu9candl7i.apps.googleusercontent.com'
        },
        algolia: {
            appId: 'FZ41WDKTPR',
            key: 'b412339bd3504a53ee0e34a83f9a62fa'
        }
    },
    privateRuntimeConfig:{
        algolia: {
            appId: 'FZ41WDKTPR',
            key: 'e0d7d09f8971d35e795e945f98679a57'
        }
    }
}