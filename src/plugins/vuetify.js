import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // color scheme based on https://colorpalettes.net/color-palette-4122/
        primary: "#005236",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        professional: "#20686c",
        education: "#6bc4a6",
        skills: "#fe982a",
        projects: "#bc4f07"
      }
    }
  }
});
