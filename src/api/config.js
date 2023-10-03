const production = true

let config = Object.assign({})
Object.defineProperties(config, {
    apiTimeout: {
        value: production ? 2 * 1000 : 20 * 1000,
        writable: false
    },
    serviceUrl: {
        value: production ? 'https://newsapi.org/v2/' : 'https://newsapi.org/v2/',
        writable: false
    },
})
Object.seal(config)

module.exports = config
