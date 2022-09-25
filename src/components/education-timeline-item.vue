<template>
  <v-timeline-item
    right
    fill-dot
    :icon="entry.type == 'degree' ? 'mdi-star' : ''"
    color="education"
  >
    <education-item :entry="entry" />

    <template v-slot:opposite>
      <v-row class="ml-6 font-weight-bold">
        <div>{{ entry.start }} - {{ entry.end }}</div>
      </v-row>
    </template>
  </v-timeline-item>
</template>

<script>
import EducationItem from "./education-item";

export default {
  props: {
    entry: Object,
  },
  components: {
    EducationItem,
  },
};
</script>

<style>
#infocolumn {
  max-width: 320px;
}
</style>
