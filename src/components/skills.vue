<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="skills">
      <v-icon dark size="42" class="ml-4">mdi-head-lightbulb</v-icon>
      <h3
        :class="
          $vuetify.breakpoint.lgAndUp
            ? 'display-1 ml-4 white--text'
            : 'display-0 ml-4 white--text'
        "
      >
        {{ $t("skills_name") }}
      </h3>
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        <v-row>
          <v-col cols="12">
            <v-select
              v-if="$vuetify.breakpoint.mdAndDown"
              v-model="selectedSkillCategory"
              :items="$t('skills_categories')"
              item-text="name"
              item-value="id"
            ></v-select>

            <v-btn-toggle
              v-if="$vuetify.breakpoint.lgAndUp"
              v-model="selectedSkillCategory"
              tile
              group
              color="skills"
            >
              <v-btn
                v-for="entry in $t('skills_categories')"
                :key="entry.id"
                :value="entry.id"
              >
                {{ entry.name }}
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>

        <v-row>
          <!-- 12 / 4 = 3 columns, 12 / 12 = 1 column -->

          <v-col
            :cols="$vuetify.breakpoint.lgAndUp ? 4 : 12"
            v-for="entry in skills_filtered"
            :key="entry.name"
          >
            <v-card class="justify-center" outlined tile>
              <v-card-title class="pa-0 pt-2">
                <v-row>
                  <v-col cols="2" class="d-flex justify-center fill-height">
                    <v-icon
                      v-if="
                        entry.types.includes('highlight') &&
                        $vuetify.breakpoint.lgAndUp
                      "
                      color="yellow darken-2"
                      size="42"
                      class="ml-4"
                      >mdi-star</v-icon
                    ></v-col
                  >

                  <v-col cols="8" class="d-flex justify-center">
                    <v-img
                      :src="entry.entry_img"
                      height="80px"
                      max-width="200px"
                      contain
                    />
                  </v-col>
                  <v-col cols="2" class="d-flex justify-center"></v-col>

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
                <div class="skilldescription">
                  {{ entry.description }}
                </div>
                <span v-for="type in entry.types" :key="type">
                  <v-chip x-small v-if="type != 'highlight'">
                    {{
                      $t("skills_categories").find((entry) => entry.id == type)
                        .name
                    }}
                  </v-chip>
                </span>
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
  data: () => ({
    //needs to be consistent with the ids in the base.json
    selectedSkillCategory: "highlight",
  }),
  computed: {
    skills_filtered: function () {
      var toreturn =
        this.selectedSkillCategory == undefined
          ? this.$i18n.messages[this.$i18n.locale]["skills_entries"]
          : this.$i18n.messages[this.$i18n.locale]["skills_entries"].filter(
              (entry) => {
                return entry.types.includes(this.selectedSkillCategory);
              }
            );

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
.skilldescription {
  height: 2.75rem;
}
</style>
