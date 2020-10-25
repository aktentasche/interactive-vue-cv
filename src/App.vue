<template>
  <v-app app>
    <v-app-bar
      app
      dark
      :inverted-scroll="!pageWasScrolled"
      class="elevation-0"
      :class="currentActiveArea"
      scroll-target="#main-container"
      height="74px"
    >
      <!-- navigation -->
      <v-tabs align-with-title>
        <v-tab @click="scrollTo('professional')">{{
          $t("professional_experience_name")
        }}</v-tab>
        <v-tab @click="scrollTo('education')">{{ $t("education_name") }}</v-tab>
        <v-tab @click="scrollTo('skills')">{{ $t("skills_name") }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <!-- language menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon v-on="{ ...tooltip, ...menu }">
                <img
                  :src="$t('language_flag_image')"
                  width="40px"
                  class="mr-5"
                />
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
      <!--</template>-->
    </v-app-bar>

    <!-- main content -->
    <v-main id="main-container" ref="maincontainerref">
      <v-row no-gutters>
        <v-col :hidden="$vuetify.breakpoint.lgAndUp" cols="12">
          <AboutMe :is-big-img="true" />
        </v-col>

        <v-col cols="12">
          <ProfessionalExperience
            ref="professional"
            v-observe-visibility="{
              callback: visibilityChangedProfessional,
              throttle: 300
            }"
          />

          <Education
            ref="education"
            v-observe-visibility="{
              callback: visibilityChangedEducation,
              throttle: 300
            }"
          />
          <Skills
            ref="skills"
            v-observe-visibility="{
              callback: visibilityChangedSkills,
              throttle: 300
            }"
          />
        </v-col>

        <v-col
          id="scrollingcard"
          :hidden="$vuetify.breakpoint.mdAndDown"
          cols="3"
        >
          <AboutMe :is-big-img="false" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ProfessionalExperience from "./components/professional-experience";
import Education from "./components/education";
import Skills from "./components/skills";
import AboutMe from "./components/about-me";

export default {
  name: "App",
  // open source:
  // arch, debian, gnuradio, openhab, zigbee2mqtt, vscode, node-red, nextcloud
  // jellyfin, kodi, vue, vuetify, ungoogled-chromiumm, arduino ide, platformio
  // mysensors, wordpress, apache, bitwarden, terminator, paperless, lets encrypt
  // software
  // salesforce, matlab, labview, vscode
  // ökopolis
  // hstb
  // msysto
  data() {
    return {
      scroll_options: {},
      currentActiveArea: "professional",
      isVisibleProfessional: true, //starting point, hence always true at start
      isVisibleEducation: false,
      isVisibleSkills: false,
      pageWasScrolled: false
    };
  },

  components: {
    ProfessionalExperience,
    Education,
    Skills,
    AboutMe
  },

  methods: {
    switchLanguageTo(short_iso) {
      this.$i18n.locale = short_iso;
    },
    visibilityChangedProfessional(isVisible) {
      this.isVisibleProfessional = isVisible;
      this.setActiveArea();
    },
    visibilityChangedEducation(isVisible) {
      this.isVisibleEducation = isVisible;
      this.setActiveArea();
    },
    visibilityChangedSkills(isVisible) {
      this.Skills = isVisible;
      this.setActiveArea();
    },
    setActiveArea() {
      //prof and not ed
      if (this.isVisibleProfessional && !this.isVisibleEducation) {
        this.currentActiveArea = "professional";
      }
      //not prof and ed
      else if (!this.isVisibleProfessional && this.isVisibleEducation) {
        this.currentActiveArea = "education";
      }
    },

    scrollTo(reference) {
      this.$vuetify.goTo(this.$refs[reference], {
        duration: 300,
        easing: "easeInOutCubic",
        offset: -1,
        container: this.$refs.maincontainerref
      });
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

#scrollingcard {
  position: fixed;
  right: 10px;
  top: 74px;
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
  background: #2196f3; /*primary color, blue*/
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #303f9f;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: blue;
}
</style>
