<template>
  <v-timeline-item right fill-dot>
    <v-card class="mr-3" elevation="10">
      <v-card-title>
        <v-layout>
          <v-row no-gutters>
            <v-col>
              {{ entry.title }}
              <div class="font-weight-light text-subtitle-2">
                <v-icon class="mr-2">mdi-account-group</v-icon>
                {{ entry.group }}
                <br />

                <v-icon class="mr-2">mdi-domain</v-icon>
                {{ entry.entity }}
                <br />

                <v-icon class="mr-2">mdi-map-marker</v-icon>
                {{ entry.place }}
              </div>
            </v-col>

            <v-col>
              <v-img
                :src="entry.entity_image"
                height="60px"
                max-width="300px"
                contain
              />
            </v-col>
          </v-row>
        </v-layout>
      </v-card-title>

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
