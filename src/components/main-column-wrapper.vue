<template>
  <v-row>
    <v-col :cols="$vuetify.breakpoint.lgAndUp ? 9 : 12" class="py-0">
      <slot></slot>
    </v-col>
  </v-row>
</template>
