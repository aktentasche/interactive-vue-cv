<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="projects">
      <v-icon dark size="42" class="ml-4">mdi-school</v-icon>
      <h2 class="display-1 ml-4 white--text">
        {{ $t("projects_name") }}
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
// ökopolis
// hstb
// msysto
//interactive cv
export default {
  components: {
    MainColumnWrapper
  }
};
</script>
