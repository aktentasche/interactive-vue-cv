<template>
  <v-card class="rounded-0">
    <!-- using color of dots of timeline -->
    <v-card-title class="skills justify-start">
      <v-icon dark size="42" class="ml-4">mdi-cogs</v-icon>
      <h2 class="display-1 ml-4 white--text">
        {{ $t("skills_name") }}
      </h2>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="n in 3" :key="n">
          <v-card class="pa-2" outlined tile>
            <v-card-title>
              <div>
                <v-img
                  src="skills_images/555px-Vue.js_Logo_2.png"
                  height="60px"
                  max-width="200px"
                  contain
                  class="mb-5"
                />
              </div>
              <div>
                <h2 class="mb-3 text-center">Vue</h2>
                Vue.js is a JavaScript framework for building UIs
              </div>
            </v-card-title>

            <v-card-text> assad</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
