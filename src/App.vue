<template>
  <v-app app>
    <v-app-bar
      app
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="./assets/test.jpg"
      fade-img-on-scroll
      scroll-target="#main-container"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-toolbar-title>Jonas Manthey</v-toolbar-title>

      <template v-slot:extension>
        <!-- navigatoin -->
        <v-tabs align-with-title>
          <v-tab>Professional</v-tab>
          <v-tab>Education</v-tab>
          <v-tab>Skills</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <!-- contact -->
        <v-btn icon large>
          <v-icon>mdi-email-outline</v-icon>
        </v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn icon v-on="{ ...tooltip, ...menu }">
                  <img :src="currentFlagImg" width="40px"/>                                   
                </v-btn>
              </template>
              <span>{{ $t("switchlanguage") }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="language in languages"
              :key="language.short_iso"
              @click="switchLanguageTo(language.short_iso)"
            >
              <v-list-item-avatar tile size="40">
                <v-img :src="language.flag_image"></v-img>
              </v-list-item-avatar>
              <v-list-item-title>{{ language.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </v-app-bar>

    <v-main id="main-container">
      <div class="d-flex flex-wrap justify-center" width="900">
        <v-container style="height: 1000px;">

        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  //https://vuetifyjs.com/en/features/scrolling/
  // open source:
  // arch, debian, gnuradio, openhab, zigbee2mqtt, vscode, node-red, nextcloud
  // jellyfin, kodi, vue, vuetify, ungoogled-chromiumm, arduino ide, platformio
  // mysensors, wordpress, apache, bitwarden, terminator, paperless

  components: {},

  data: () => ({
    languages: [
      {
        name: "English",
        short_iso: "en",
        flag_image: require("./assets/flag-en.png")
      },
      {
        name: "Deutsch",
        short_iso: "de",
        flag_image: require("./assets/flag-ger.png")
      }
    ]
  }),
  methods: {
    switchLanguageTo(short_iso) {
      this.$i18n.locale = short_iso;
    }
  },
  computed: {
    currentFlagImg: function(){
       return this.languages.filter(x => x.short_iso === this.$i18n.locale)[0]
        .flag_image
    }
  }
};
</script>

<style>
#main-container {
  max-height: 100vh;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.v-select__selections {
  max-width: 10px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: blueviolet;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: green;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: blue;
}
</style>
