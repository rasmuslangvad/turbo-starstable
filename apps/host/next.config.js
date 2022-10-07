const withTM = require("next-transpile-modules")(["ui"]);
const NextFederationPlugin = require("@module-federation/nextjs-mf/src/");

module.exports = withTM({
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            register: "register@http://localhost:3001/register.js",
            account: "account@http://localhost:3002/account.js",
          },
          filename: "static/chunks/remoteEntry.js",
        })
      );
    }

    return config;
  },
});
