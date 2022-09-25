<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="projects">
      <v-icon dark size="42" class="ml-4">mdi-school</v-icon>

      <h3
        :class="
          $vuetify.breakpoint.lgAndUp
            ? 'display-1 ml-4 white--text'
            : 'display-0 ml-4 white--text'
        "
      >
        {{ $t("projects_name") }}
      </h3>
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        <v-row>
          <v-col
            :cols="$vuetify.breakpoint.lgAndUp ? 4 : 6"
            v-for="entry in projects_unsorted"
            :key="entry.name"
          >
            <v-card class="justify-center" outlined tile>
              <v-card-title class="pa-0 pt-2">
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <div>
                      <a v-if="entry.url" target="none" :href="entry.url">{{
                        entry.name
                      }}</a>
                      <span v-else>{{ entry.name }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-card-text>
                <div class="projectdescription">
                  {{ entry.description }}
                </div>
                <v-chip
                  x-small
                  v-for="stuff in entry.associated_stuff"
                  :key="stuff"
                >
                  {{ stuff }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </MainColumnWrapper>
    </v-card-text>
  </v-card>
</template>

<script>
import MainColumnWrapper from "./main-column-wrapper";

export default {
  components: {
    MainColumnWrapper,
  },
  computed: {
    projects_unsorted: function () {
      return this.$i18n.messages[this.$i18n.locale]["projects_entries"];
    },
    projects_sorted: function () {
      var toreturn = this.$i18n.messages[this.$i18n.locale]["projects_entries"];
      toreturn.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      return toreturn;
    },
  },
};
</script>

<style>
/* line height is 1.375rem, hence 2 lines 2*1.375 = 2.75, 4.125*/
.projectdescription {
  height: 4.125rem;
}
</style>
