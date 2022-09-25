<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="education">
      <v-icon dark size="42" class="ml-4">mdi-school</v-icon>
      <h3
        :class="
          $vuetify.breakpoint.lgAndUp
            ? 'display-1 ml-4 white--text'
            : 'display-0 ml-4 white--text'
        "
      >
        {{ $t("education_name") }}
      </h3>
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        <v-timeline dense v-if="$vuetify.breakpoint.lgAndUp">
          <EducationTimelineItem
            v-for="entry of $t('education_entries')"
            :key="entry.title + entry.entity_group"
            :entry="entry"
          />
        </v-timeline>
        <div v-if="$vuetify.breakpoint.mdAndDown">
          <EducationItem
            v-for="entry of $t('education_entries')"
            :key="entry.title + entry.entity_group"
            :entry="entry"
          />
        </div>
      </MainColumnWrapper>
    </v-card-text>
  </v-card>
</template>

<script>
import EducationTimelineItem from "./education-timeline-item";
import MainColumnWrapper from "./main-column-wrapper";
import EducationItem from "./education-item";

export default {
  components: {
    EducationTimelineItem,
    EducationItem,
    MainColumnWrapper,
  },
};
</script>
