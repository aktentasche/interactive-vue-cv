<template>
  <v-card id="aboutmecard" class="rounded-0 elevation-1">
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

      <h2 class="pt-2 pb-2">{{ $t("about_me_headline") }}</h2>
      <v-divider />

      <v-row>
        <div class="pl-3 pt-2">
          {{ $t("about_me_content") }}

          <ol class="pt-1">
            <li v-for="entry of $t('about_me_rules')" :key="entry">
              {{ entry }}
            </li>
          </ol>
        </div>
      </v-row>

      <h2 class="pt-2 pb-2">{{ $t("contact") }}</h2>
      <v-divider />
      <v-row>
        <v-col cols="1">
          <!-- contact -->
          <v-icon>mdi-email-outline</v-icon>
        </v-col>
        <v-col>
          <a target="empty" href="mailto:jonas@amps.one">jonas@amps.one</a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <!-- contact -->
          <v-icon>mdi-linkedin</v-icon>
        </v-col>
        <v-col>
          <a target="empty" href="https://www.linkedin.com/in/jonas-manthey/"
            >LinkedIn profile</a
          >
        </v-col>
      </v-row>
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
