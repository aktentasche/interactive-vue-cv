<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="professional">
      <v-icon dark size="42" class="ml-4">mdi-account-tie</v-icon>
      <h3
        :class="
          $vuetify.breakpoint.lgAndUp
            ? 'display-1 ml-4 white--text'
            : 'display-0 ml-4 white--text'
        "
      >
        {{ $t("professional_experience_name") }}
      </h3>

      <v-spacer />
      <!-- only show the language menu if the page is large -->
      <LanguageSwitcher v-if="$vuetify.breakpoint.lgAndUp" />
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        <v-timeline dense v-if="$vuetify.breakpoint.lgAndUp">
          <ProfessionalExperienceTimelineItem
            v-for="entry of $t('professional_experience_entries')"
            :key="entry.title + entry.entity_group"
            :entry="entry"
          />
        </v-timeline>

        <div v-if="$vuetify.breakpoint.mdAndDown">
          <ProfessionalExperienceItem
            v-for="entry of $t('professional_experience_entries')"
            :key="entry.title + entry.entity_group"
            :entry="entry"
          />
        </div>
      </MainColumnWrapper>
    </v-card-text>
  </v-card>
</template>

<script>
import ProfessionalExperienceTimelineItem from "./professional-experience-timeline-item";
import ProfessionalExperienceItem from "./professional-experience-item";

import MainColumnWrapper from "./main-column-wrapper";
import LanguageSwitcher from "./language-switcher";

export default {
  components: {
    ProfessionalExperienceTimelineItem,
    ProfessionalExperienceItem,
    MainColumnWrapper,
    LanguageSwitcher,
  },
};
</script>
