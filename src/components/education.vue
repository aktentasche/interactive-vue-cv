<template>
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
</template>

<script>
import EducationTimelineItem from "./education-timeline-item";

export default {
  components: {
    EducationTimelineItem
  }
};
</script>
