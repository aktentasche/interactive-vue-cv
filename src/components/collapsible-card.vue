<template>
  <v-card flat>
    <v-card-title class="pa-0">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <span v-if="textIsArray">
        <ul>
          <li class="text-body-2" v-for="item in textArray" :key="item">
            {{ item }}
          </li>
        </ul>
      </span>
      <span v-else>
        <span v-if="!readMoreIsActivated"
          >{{ text.slice(0, 220) }}
          <a @click="readMoreIsActivated = true" href="#">
            {{ $t("read_more") }}
          </a>
        </span>
        <span v-else>
          {{ text }}
          <a @click="readMoreIsActivated = false" href="#">
            {{ $t("read_less") }}
          </a>
        </span>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    text: String, //could be array
    textArray: Array,
    title: String,
    textIsArray: Boolean
  },
  data() {
    return {
      readMoreIsActivated: false
    };
  }
};
</script>
