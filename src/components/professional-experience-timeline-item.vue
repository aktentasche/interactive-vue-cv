<template>
  <v-timeline-item right fill-dot color="professional">
    <v-card class="mr-3" elevation="10">
      <v-card-text>
        <v-layout>
          <v-row>
            <v-col id="infocolumn">
              <v-img
                :src="entry.entity_image"
                height="60px"
                max-width="300px"
                contain
                class="mb-5"
              />

              <h2 class="mb-3 text-center">{{ entry.title }}</h2>
              <v-card class="pa-2" flat>
                <div class="font-weight-light text-subtitle-2">
                  <v-icon class="mr-2">mdi-domain</v-icon>
                  <a target="empty" :href="entry.entity_url">
                    {{ entry.entity }}</a
                  >
                  <br />

                  <v-icon class="mr-2">mdi-account-group</v-icon>
                  {{ entry.entity_group }}
                  <br />

                  <v-icon class="mr-2">mdi-map-marker</v-icon>
                  {{ entry.place }}
                </div>
              </v-card>
            </v-col>

            <v-col>
              <ul>
                <li
                  class="text-body-2"
                  v-for="activity in entry.activities"
                  :key="activity"
                >
                  {{ activity }}
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-layout>
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
#infocolumn {
  max-width: 320px;
}
</style>
