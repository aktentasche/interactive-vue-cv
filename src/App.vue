<template>
  <v-app app>
    <v-app-bar
      app
      color="#6A76AB"
      dark
      shrink-on-scroll
      src="me.jpg"
      fade-img-on-scroll
      scroll-target="#main-container"
      height="300px"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>

      <v-toolbar-title>
        <div>Jonas Manthey</div>
        <div class="text-subtitle-1">{{ $t("quote") }}</div>
      </v-toolbar-title>

      <template v-slot:extension>
        <!-- navigation -->
        <v-tabs align-with-title>
          <v-tab>{{ $t("professional_experience_name") }}</v-tab>
          <v-tab>{{ $t("education_name") }}</v-tab>
          <v-tab>{{ $t("skills_name") }}</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <!-- contact -->
        <v-btn icon large>
          <v-icon>mdi-email-outline</v-icon>
        </v-btn>
        <!-- language menu -->
        <v-menu offset-y>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn icon v-on="{ ...tooltip, ...menu }">
                  <img :src="$t('language_flag_image')" width="40px" />
                </v-btn>
              </template>
              <span>{{ $t("language_switch") }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="language_short_iso in $i18n.availableLocales"
              :key="language_short_iso"
              @click="switchLanguageTo(language_short_iso)"
            >
              <v-list-item-avatar tile size="40">
                <v-img
                  :src="$i18n.messages[language_short_iso].language_flag_image"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-title>{{
                $i18n.messages[language_short_iso].language
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <!-- main content -->
    <v-main id="main-container">
      <ProfessionalExperience />
      <Education />
      <Skills />
    </v-main>
  </v-app>
</template>

<script>
import ProfessionalExperience from "./components/professional-experience";
import Education from "./components/education";
import Skills from "./components/skills";

export default {
  name: "App",
  //https://vuetifyjs.com/en/features/scrolling/
  // open source:
  // arch, debian, gnuradio, openhab, zigbee2mqtt, vscode, node-red, nextcloud
  // jellyfin, kodi, vue, vuetify, ungoogled-chromiumm, arduino ide, platformio
  // mysensors, wordpress, apache, bitwarden, terminator, paperless, lets encrypt
  // software
  // salesforce, matlab, labview, vscode
  // ökopolis
  // hstb
  // msysto

  components: {
    ProfessionalExperience,
    Education,
    Skills
  },

  methods: {
    switchLanguageTo(short_iso) {
      this.$i18n.locale = short_iso;
    }
  }
};
</script>

<style>
/* variables */

#main-container {
  max-height: 100vh;
  height: auto;
  overflow-y: auto;
  overflow-x: auto;
}

:root {
  --timeline-opposite-item-width: 160px;
  --timeline-line-width: 8px;
}

/* timeline hacking to have it aligned left, see https://github.com/vuetifyjs/vuetify/issues/6594 */
.v-timeline--dense .v-timeline-item__opposite {
  display: inline-block;
}

.v-timeline-item__opposite {
  flex: none;
  min-width: var(--timeline-opposite-item-width);
}

/* line: divider in the middle is 96px wide by default */
.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before {
  left: calc(
    var(--timeline-opposite-item-width) + (96px - var(--timeline-line-width)) /
      2
  );
  width: var(--timeline-line-width);
}

/* scrollbar modifications */
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
