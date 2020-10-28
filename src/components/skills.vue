<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="skills">
      <v-icon dark size="42" class="ml-4">mdi-head-lightbulb</v-icon>
      <h2 class="display-1 ml-4 white--text">
        {{ $t("skills_name") }}
      </h2>
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        <v-row>
          <v-col
            cols="3"
            v-for="entry in $t('skills_categories')"
            :key="entry.id"
          >
            <v-checkbox
              v-model="selectedCategories"
              :label="entry.name"
              :value="entry.id"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            :cols="$vuetify.breakpoint.lgAndUp ? 4 : 6"
            v-for="entry in skills_filtered"
            :key="entry.name"
          >
            <v-card class="justify-center " outlined tile>
              <v-card-title class="pa-0 pt-2">
                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img
                      :src="entry.entry_img"
                      height="80px"
                      max-width="200px"
                      contain
                    />
                  </v-col>
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
                {{ entry.description }} <br />
                <v-chip x-small v-for="type in entry.types" :key="type">
                  {{
                    $t("skills_categories").find(entry => entry.id == type).name
                  }}
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
// open source:
//  openhab, zigbee2mqtt, nextcloud
// jellyfin, kodi, vue, vuetify, ungoogled-chromiumm, arduino ide, platformio
// mysensors, wordpress, apache, bitwarden, terminator, paperless, lets encrypt
// software
// salesforce, matlab, labview,
// rf measueemrnts
// gnss
// certification
// software architecture
// interfaces
// network analyser
// vector network analyyer
// spectrum analyzer
// vsgs
// SDRs
// oscilloscopes
// soldering
export default {
  components: {
    MainColumnWrapper
  },
  data: () => ({
    //needs to be consistent with the ids in the base.json
    selectedCategories: [
      "hardware",
      "software",
      "programminglanguage",
      "concept"
    ]
  }),
  computed: {
    skills_filtered: function() {
      var toreturn = this.$i18n.messages[this.$i18n.locale][
        "skills_entries"
      ].filter(entry => {
        var isInFilter = false;
        entry.types.forEach(type => {
          if (this.selectedCategories.includes(type)) {
            isInFilter = true;
          }
        });
        return isInFilter;
      });

      return toreturn;
    }
  }
};
</script>
