module.exports = {
  transpileDependencies: ["vuetify"],
  // the server path has to be corresponding to your public server path
  // publicPath: process.env.NODE_ENV === "production" ? "/cv/" : "/",

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ger",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
