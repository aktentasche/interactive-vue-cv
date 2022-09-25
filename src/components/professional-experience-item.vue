<template>
  <v-card :class="$vuetify.breakpoint.lgAndUp ? 'mr-3' : 'my-3'" elevation="10">
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
                <span v-if="$vuetify.breakpoint.mdAndDown">
                  <v-icon class="mr-3">mdi-calendar</v-icon>
                  <span>{{ entry.start }} - {{ entry.end }}</span>
                  <br
                /></span>
                <v-icon class="mr-3">mdi-domain</v-icon>
                <a target="empty" :href="entry.entity_url">{{
                  entry.entity
                }}</a>
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
            <v-card flat>
              <v-card-title class="pa-0">
                {{ $t("activities") }}
              </v-card-title>
              <v-card-text>
                <ul>
                  <li
                    class="text-body-2"
                    v-for="activity in entry.activities"
                    :key="activity"
                  >
                    {{ activity }}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
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
    