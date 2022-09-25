<template>
  <v-card class="rounded-1 elevation-7">
    <!-- using color of dots of timeline -->
    <v-card-title class="primary">
      <span class="display-1 white--text font-weight-bold">
        {{ $t("my_name") }}
      </span>
      <v-spacer />
      <LanguageSwitcher v-if="$vuetify.breakpoint.mdAndDown" />
    </v-card-title>
    <!-- px3 to align with title -->
    <v-card-text class="px-3">
      <v-row>
        <v-img
          src="me.jpg"
          min-height="300px"
          max-height="500px"
          min-width="200px"
          id="aboutmeimg"
        />
      </v-row>

      <h2 class="pt-2 pb-2">{{ $t("about_me_headline") }}</h2>
      <v-divider />

      <v-row>
        <div class="pl-3 pt-2">
          {{ $t("about_me_content") }}
        </div>
      </v-row>

      <h2 class="pt-2 pb-2">{{ $t("contact") }}</h2>
      <v-divider class="pb-2" />
      <!-- contact -->
      <v-icon class="mr-2">mdi-email-outline</v-icon>
      <a target="empty" :href="'mailto:' + emailaddress">{{ emailaddress }}</a>
      <br />

      <v-icon class="mr-2">mdi-linkedin</v-icon>
      <a target="empty" href="https://www.linkedin.com/in/jonas-manthey/"
        >LinkedIn</a
      >
      <br />
      <v-icon class="mr-2">mdi-phone</v-icon>
      <a v-if="phoneNumbeIsHidden" @click="phoneNumbeIsHidden = false" href="#"
        >{{ $t("show_number") }}
      </a>
      <span v-if="!phoneNumbeIsHidden">
        {{ phoneNumber }}
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
import LanguageSwitcher from "./language-switcher";

export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      emailaddress: "jonas@amps.one",
      phoneNumber: "+41 76 677 113 37",
      phoneNumbeIsHidden: true,
    };
  },
};
</script>
