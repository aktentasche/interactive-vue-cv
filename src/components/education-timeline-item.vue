<template>
  <v-timeline-item
    right
    fill-dot
    :icon="entry.type == 'degree' ? 'mdi-star' : ''"
    color="education"
  >
    <v-card class="mr-3" elevation="10">
      <v-card-text>
        <v-layout>
          <v-row>
            <v-col id="infocolumn">
              <v-img
                :src="entry.entity_image"
                height="60px"
                max-width="300px"
                contain
                class="mb-5"
              />

              <h2 class="mb-3 text-center">{{ entry.title }}</h2>

              <v-card class="pa-2" flat>
                <span class="font-weight-light text-subtitle-2">
                  <span v-if="entry.type == 'degree'">
                    <v-icon class="mr-2">mdi-file-document</v-icon>
                    {{ entry.title_thesis }}
                    <br />
                  </span>

                  <div>
                    <span v-if="entry.type == 'studies'">
                      <v-icon class="mr-2">mdi-application</v-icon>
                      {{ entry.title_studies }}
                      <br />
                      <v-icon v-if="entry.title_academic" class="mr-2"
                        >mdi-school</v-icon
                      >
                      {{ entry.title_academic }}
                      <br v-if="entry.title_academic" />
                    </span>

                    <v-icon class="mr-3">mdi-domain</v-icon>
                    <a target="empty" :href="entry.entity_url">{{
                      entry.entity
                    }}</a>
                    <br />

                    <v-icon class="mr-2">mdi-account-group</v-icon>
                    {{ entry.entity_group }}
                    <br />

                    <v-icon class="mr-2">mdi-map-marker</v-icon>
                    {{ entry.place }}
                    <br />

                    <v-icon v-if="entry.grade" class="mr-2">mdi-medal</v-icon>
                    {{ entry.grade }}
                    <br />
                  </div>
                </span>
              </v-card>
            </v-col>

            <v-col>
              <span v-if="entry.type == 'degree'">
                <CollapsibleCard
                  :textArray="entry.content"
                  :title="$t('content')"
                  :textIsArray="true"
                />
                <CollapsibleCard
                  :text="entry.background.join('')"
                  :title="$t('background')"
                  :textIsArray="false"
                />
              </span>
              <span v-else>
                <v-card flat>
                  <v-card-title class="pa-0">
                    {{ $t("curriculum") }}
                  </v-card-title>
                  <v-card-text>
                    <ul>
                      <li
                        class="text-body-2"
                        v-for="content in entry.contents"
                        :key="content"
                      >
                        {{ content }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </span>
            </v-col>
          </v-row>
        </v-layout>
      </v-card-text>
    </v-card>

    <template v-slot:opposite>
      <v-row class="ml-6  font-weight-bold">
        <div>{{ entry.start }} - {{ entry.end }}</div>
      </v-row>
    </template>
  </v-timeline-item>
</template>

<script>
import CollapsibleCard from "./collapsible-card";

export default {
  props: {
    entry: Object
  },
  components: {
    CollapsibleCard
  },
  computed: {
    entity_image_location: function() {
      //have to use require here instead of directly binding, otherwise
      //require is executed at every tick
      return require(this);
    }
  }
};
</script>

<style>
#infocolumn {
  max-width: 320px;
}
</style>
