<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="professional">
      <v-icon dark size="42" class="ml-4">mdi-account-tie</v-icon>
      <h2 class="display-1 ml-4 white--text font-weight-light">
        {{ $t("professional_experience_name") }}
      </h2>
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        <v-timeline dense>
          <ProfessionalExperienceTimelineItem
            v-for="entry of $t('professional_experience_entries')"
            :key="entry.title + entry.entity_group"
            :entry="entry"
          />
        </v-timeline>
      </MainColumnWrapper>
    </v-card-text>
  </v-card>
</template>

<script>
import ProfessionalExperienceTimelineItem from "./professional-experience-timeline-item";
import MainColumnWrapper from "./main-column-wrapper";

export default {
  components: {
    ProfessionalExperienceTimelineItem,
    MainColumnWrapper
  }
};
</script>
