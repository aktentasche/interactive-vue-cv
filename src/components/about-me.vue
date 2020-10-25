<template>
  <v-card id="aboutmecard" class="rounded-0 elevation-0" flat>
    <!-- using color of dots of timeline -->
    <v-card-title class="primary">
      <span class="display-1 white--text font-weight-bold">
        {{ $t("my_name") }}
      </span>
    </v-card-title>
    <!-- px3 to align with title -->
    <v-card-text class="px-3">
      <v-row>
        <v-img src="me.jpg" :height="isBigImg ? 320 : 180" id="aboutmeimg" />
      </v-row>
      <v-row> "{{ $t("quote") }}" </v-row>
      <!-- contact -->
      <v-btn icon large>
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    isBigImg: Boolean
  },
  components: {}
};
</script>

<style>
#aboutmecard {
  border-color: blue;
}
</style>
