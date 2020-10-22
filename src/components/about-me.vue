<template>
  <v-card id="maincard" class="rounded-0 elevation-2" flat>
    <!-- using color of dots of timeline -->
    <v-card-title class="primary">
      <span class="display-1 white--text font-weight-bold">
        {{ $t("my_name") }}
      </span>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-img src="me.jpg" />
      </v-row>
      <!-- contact -->
      <v-btn icon large>
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  components: {}
};
</script>
