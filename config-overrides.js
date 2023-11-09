module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "fs": false,
        // "tls": false,
        "net": false,
        "http": require.resolve("stream-http"),
        // "https": false,
        "zlib": require.resolve("browserify-zlib") ,
        "path": require.resolve("path-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "stream": require.resolve("stream-browserify"),
        // "util": false,
        "crypto": require.resolve("crypto-browserify")
    }
    
    return config
}
