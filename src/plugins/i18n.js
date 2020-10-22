import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const available_locales = ["en"];
const suffixes = [
  "-base",
  "-education",
  "-professional-experience",
  "-projects",
  "-skills",
  "-software"
];

function getLocaleMessages() {
  var messages = {};
  available_locales.forEach(locale => {
    // init with no content
    messages[locale] = {};
    //append json content
    suffixes.forEach(suffix => {
      messages[locale] = Object.assign(
        require("./../content/" + locale + suffix + ".json"),
        messages[locale]
      );
    });
  });
  return messages;
}

/*function loadLocaleMessages() {
  const locales = require.context(
    ".././locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  console.log(messages);
  return messages;
}*/

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: getLocaleMessages(),
  available_locales: available_locales
});
