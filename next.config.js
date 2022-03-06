const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phrase) => {
    if (phrase === PHASE_DEVELOPMENT_SERVER) {
        return {
            webpack: (config, { isServer }) => {
                // Fixes npm packages that depend on `fs` module
                if (!isServer) {
                    config.node = {
                        fs: 'empty',
                    }
                }

                return config
            },
            env: {
                mongodb_url: 'mongodb://127.0.0.1:27017/next_course',
            },
        }
    }

    return {
        webpack: (config, { isServer }) => {
            // Fixes npm packages that depend on `fs` module
            if (!isServer) {
                config.node = {
                    fs: 'empty',
                }
            }

            return config
        },
        env: {
            mongodb_url: 'mongodb://127.0.0.1:27017/next_course',
        },
    }
}
