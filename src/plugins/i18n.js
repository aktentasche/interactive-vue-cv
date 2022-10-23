import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const available_short_isos = ["en", "dk"];

const suffixes = [
  "-base",
  "-education",
  "-professional-experience",
  "-projects",
  "-skills",
];

function getLocaleMessages() {
  var messages = {};
  available_short_isos.forEach((locale) => {
    // init with no content
    messages[locale] = {};
    //append json content
    suffixes.forEach((suffix) => {
      messages[locale] = Object.assign(
        require("./../content/" + locale + suffix + ".json"),
        messages[locale]
      );
    });
  });
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: getLocaleMessages(),
});
