<template>
  <v-card :class="$vuetify.breakpoint.lgAndUp ? 'mr-3' : 'my-3'" elevation="10">
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
                <span v-if="$vuetify.breakpoint.mdAndDown">
                  <v-icon class="mr-3">mdi-calendar</v-icon>
                  <span>{{ entry.start }} - {{ entry.end }}</span>
                  <br
                /></span>

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
</template>

<script>
import CollapsibleCard from "./collapsible-card";

export default {
  props: {
    entry: Object,
  },
  components: {
    CollapsibleCard,
  },
};
</script>
  
  <style>
#infocolumn {
  max-width: 320px;
}
</style>
  