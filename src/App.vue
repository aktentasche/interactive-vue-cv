<template>
  <v-app app>
    <v-app-bar
      app
      dark
      inverted-scroll
      class="elevation-0"
      :class="currentActiveArea"
      scroll-target="#main-container"
      height="74px"
    >
      <!-- navigation -->
      <v-tabs fixed-tabs v-model="currentActiveTab">
        <v-tab @click="scrollTo('professional')">
          <v-icon dark size="36" class="mr-4">mdi-account-tie</v-icon>
          {{ $t("professional_experience_name") }}</v-tab
        >
        <v-tab @click="scrollTo('education')">
          <v-icon dark size="36" class="mr-4">mdi-school</v-icon>
          {{ $t("education_name") }}</v-tab
        >
        <v-tab @click="scrollTo('skills')">
          <v-icon dark size="36" class="mr-4">mdi-head-lightbulb</v-icon>
          {{ $t("skills_name") }}</v-tab
        >
        <v-tab @click="scrollTo('projects')">
          <v-icon dark size="36" class="mr-4">mdi-account-tie</v-icon>
          {{ $t("projects_name") }}</v-tab
        >
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
          <Skills
            ref="skills"
            v-observe-visibility="{
              callback: visibilityChangedSkills,
              throttle: 300
            }"
          />
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

          <Projects
            ref="projects"
            v-observe-visibility="{
              callback: visibilityChangedProjects,
              throttle: 300
            }"
          />
        </v-col>

        <v-col
          id="scrollingcard"
          :hidden="$vuetify.breakpoint.mdAndDown"
          cols="3"
        >
          <AboutMe class="ma-4" :is-big-img="false" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ProfessionalExperience from "./components/professional-experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AboutMe from "./components/about-me";

export default {
  name: "App",

  data() {
    return {
      scroll_options: {},
      currentActiveArea: "professional",
      currentActiveTab: 0, //first tab is 0, second 1 etc
      isVisibleProfessional: true, //starting point, hence always true at start
      isVisibleEducation: false,
      isVisibleSkills: false,
      isVisibleProjects: false
    };
  },

  components: {
    ProfessionalExperience,
    Education,
    Skills,
    AboutMe,
    Projects
  },

  methods: {
    switchLanguageTo(short_iso) {
      this.$i18n.locale = short_iso;
    },
    visibilityChangedProfessional(isVisible) {
      this.isVisibleProfessional = isVisible;
      this.setActiveAreaForNavColoring();
    },
    visibilityChangedEducation(isVisible) {
      this.isVisibleEducation = isVisible;
      this.setActiveAreaForNavColoring();
    },
    visibilityChangedSkills(isVisible) {
      this.isVisibleSkills = isVisible;
      this.setActiveAreaForNavColoring();
    },
    visibilityChangedProjects(isVisible) {
      this.isVisibleProjects = isVisible;
      this.setActiveAreaForNavColoring();
    },

    setActiveAreaForNavColoring() {
      if (this.isVisibleProfessional && !this.isVisibleEducation) {
        this.currentActiveArea = "professional";
        this.currentActiveTab = 0;
      } else if (!this.isVisibleProfessional && this.isVisibleEducation) {
        this.currentActiveArea = "education";
        this.currentActiveTab = 1;
      } else if (!this.isVisibleEducation && this.isVisibleSkills) {
        this.currentActiveArea = "skills";
        this.currentActiveTab = 2;
      } else if (!this.isVisibleSkills && this.isVisibleProjects) {
        this.currentActiveArea = "projects";
        this.currentActiveTab = 2;
      }
    },

    scrollTo(reference) {
      this.$vuetify.goTo(this.$refs[reference], {
        duration: 300,
        easing: "easeInOutCubic",
        offset: 130,
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
  right: 22px;
  top: 81px;
}

.tabActive {
  background-color: red;
  font-family: "Courier New", Courier, monospace;
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
