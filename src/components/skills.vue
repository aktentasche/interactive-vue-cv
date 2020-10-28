<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="skills">
      <v-icon dark size="42" class="ml-4">mdi-mdi-head-lightbulb</v-icon>
      <h2 class="display-1 ml-4 white--text">
        {{ $t("skills_name") }}
      </h2>
    </v-card-title>
    <v-card-text>
      <MainColumnWrapper>
        TBD
      </MainColumnWrapper>
    </v-card-text>
  </v-card>
</template>

<script>
import MainColumnWrapper from "./main-column-wrapper";
// open source:
// arch, debian, gnuradio, openhab, zigbee2mqtt, vscode, node-red, nextcloud
// jellyfin, kodi, vue, vuetify, ungoogled-chromiumm, arduino ide, platformio
// mysensors, wordpress, apache, bitwarden, terminator, paperless, lets encrypt
// software
// salesforce, matlab, labview, vscode
export default {
  components: {
    MainColumnWrapper
  }
};
</script>
