<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on: menu }">
      <v-btn icon v-on="{ ...menu }">
        <img :src="$t('language_flag_image')" width="40px" class="mr-0" />
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="language_short_iso in $i18n.availableLocales"
        :key="language_short_iso"
        @click="switchLanguageTo(language_short_iso)"
      >
        <v-list-item-avatar tile width="40px" height="26px">
          <v-img
            :src="$i18n.messages[language_short_iso].language_flag_image"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{
          $i18n.messages[language_short_iso].language
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  methods: {
    switchLanguageTo(short_iso) {
      this.$i18n.locale = short_iso;
    },
  },
};
</script>
