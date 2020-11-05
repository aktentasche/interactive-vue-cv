import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#20686c",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        /*professional: "#264653",
        education: "#2a9d8f",
        skills: "#e9c46a",
        projects: "#f4a261"*/
        /*professional: "#283d3b",
        education: "#197278",
        skills: "#c44536",
        projects: "#edddd4"*/
        professional: "#005236",
        education: "#6bc4a6",
        skills: "#fe982a",
        projects: "#bc4f07"
      }
    }
  }
});
