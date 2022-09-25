<template>
  <v-timeline-item right fill-dot color="professional">
    <professional-experience-item :entry="entry" />
    <template v-slot:opposite>
      <v-row class="ml-6 font-weight-bold">
        <div>{{ entry.start }} - {{ entry.end }}</div>
      </v-row>
    </template>
  </v-timeline-item>
</template>

<script>
import ProfessionalExperienceItem from "./professional-experience-item";

export default {
  components: {
    ProfessionalExperienceItem,
  },
  props: {
    entry: Object,
  },
};
</script>

<style>
#infocolumn {
  max-width: 320px;
}
</style>
