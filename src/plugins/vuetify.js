import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2196F3", //blue
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        professional: "#303F9F", //indigo darken-2
        education: "#FFA000", //amber darken-2
        skills: "#689F38", //light-green darken-2
        projects: "#7B1FA2" //purple darken-2
      }
    }
  }
});
