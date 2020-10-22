module.exports = {
  transpileDependencies: ["vuetify"],

  publicPath: process.env.NODE_ENV === "production" ? "/cv/" : "/",

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ger",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
