const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { override, addLessLoader } = require('customize-cra');

// /* config-overrides.js */
module.exports = override(
    function override(config, env) {
        config = rewireReactHotLoader(config, env);

        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
        };

        config.optimization.splitChunks = false;

        return config;
    },
    addLessLoader({
        javascriptEnabled: true,
    }),
);
