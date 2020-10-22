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
        <div class="text-subtitle-1">{{ quote }}</div>
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
                  <img :src="currentFlagImg" width="40px" />
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

    <!-- main content -->
    <v-main id="main-container">
      <!------------------->
      <!-- professional experience -->
      <v-card class="rounded-0">
        <!-- using color of dots of timeline -->
        <v-card-title class="professional justify-start">
          <v-icon dark size="42">mdi-account-tie</v-icon>
          <h2 class="display-1 ml-4 white--text font-weight-light">
            {{ $t("professional_experience_name") }}
          </h2>
        </v-card-title>
        <v-card-text>
          <v-timeline dense>
            <ProfessionalExperienceTimelineItem
              v-for="entry of $t('professional_experience_entries')"
              :key="entry.title + entry.group"
              :entry="entry"
            />
          </v-timeline>
        </v-card-text>
      </v-card>
      <!------------------->
      <!--education -->
      <v-card class="rounded-0">
        <!-- using color of dots of timeline -->
        <v-card-title class="education justify-start">
          <v-icon dark size="42" class="ml-4">mdi-school</v-icon>
          <h2 class="display-1 ml-4 white--text">
            {{ $t("education_name") }}
          </h2>
        </v-card-title>
        <v-card-text>
          <v-timeline dense>
            <EducationTimelineItem
              v-for="entry of $t('education_entries')"
              :key="entry.title + entry.group"
              :entry="entry"
            />
          </v-timeline>
        </v-card-text>
      </v-card>

      <!------------------->
      <!--skills -->
      <v-card class="rounded-0">
        <!-- using color of dots of timeline -->
        <v-card-title class="skills justify-start">
          <v-icon dark size="42" class="ml-4">mdi-cogs</v-icon>
          <h2 class="display-1 ml-4 white--text">
            {{ $t("skills_name") }}
          </h2>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="n in 3" :key="n">
              <v-card class="pa-2" outlined tile>
                <v-card-title>
                  <div>
                    <v-img
                      src="skills_images/555px-Vue.js_Logo_2.png"
                      height="60px"
                      max-width="200px"
                      contain
                      class="mb-5"
                    />
                  </div>
                  <div>
                    <h2 class="mb-3 text-center">Vue</h2>
                    Vue.js is a JavaScript framework for building UIs
                  </div>
                </v-card-title>

                <v-card-text> assad</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import ProfessionalExperienceTimelineItem from "./components/professional-experience-timeline-item";
import EducationTimelineItem from "./components/education-timeline-item";

export default {
  name: "App",
  //https://vuetifyjs.com/en/features/scrolling/
  // open source:
  // arch, debian, gnuradio, openhab, zigbee2mqtt, vscode, node-red, nextcloud
  // jellyfin, kodi, vue, vuetify, ungoogled-chromiumm, arduino ide, platformio
  // mysensors, wordpress, apache, bitwarden, terminator, paperless
  // software
  // salesforce, matlab, labview, vscode
  // ökopolis
  // hstb
  // msysto

  components: {
    ProfessionalExperienceTimelineItem,
    EducationTimelineItem
  },

  data: () => ({
    quote: "What I cannot create, I do not understand - Richard Feynmann"
    /*languages: [
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
    ]*/
  }),
  methods: {
    switchLanguageTo(short_iso) {
      this.$i18n.locale = short_iso;
      console.log(this.$i18n.available_locales);
    }
  },
  computed: {
    currentFlagImg: function() {
      return this.languages.filter(x => x.short_iso === this.$i18n.locale)[0]
        .flag_image;
    },
    languages: function() {
      console.log(this.$i18n.available_locales);

      return this.$i18n.available_locales;
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
