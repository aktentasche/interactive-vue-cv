<template>
  <v-timeline-item right fill-dot>
    <v-card class="mr-3" elevation="10">
      <v-card-title>
        <v-layout>
          <v-row no-gutters>
            <v-col>
              <v-img :src="entry.entity_image" height="60px" class="mb-5" />
              {{ entry.title }} {{ entry.place }}
            </v-col>
          </v-row>
        </v-layout>
      </v-card-title>
      <v-card-subtitle> {{ entry.entity }} {{ entry.group }} </v-card-subtitle>
      <v-card-text>
        <ul>
          <li v-for="activity in entry.activities" :key="activity">
            {{ activity }}
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <template v-slot:opposite>
      <v-row class="ml-6  font-weight-bold">
        <div>{{ entry.start }} - {{ entry.end }}</div>
      </v-row>
    </template>
  </v-timeline-item>

  <!--
 <v-timeline-item
            v-for="professional_experience_entry of $t('professional_experience')" :key=professional_experience_entry.title
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">Lorem ipsum</h2>
              <div>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
              </div>
            </div>
          </v-timeline-item>
-->
</template>

<script>
export default {
  props: {
    entry: Object
  },
  computed: {
    entity_image_location: function() {
      //have to use require here instead of directly binding, otherwise
      //require is executed at every tick
      return require(this);
    }
  }
};
</script>

<style>
.opposite-slot {
  /*min-width: 200px;*/
}
</style>
