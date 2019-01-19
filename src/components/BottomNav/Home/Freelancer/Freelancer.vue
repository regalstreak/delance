<template>
  <div>
    <v-toolbar color="teal" dark tabs class="pt-2">
      <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>
      <v-tabs
        fixed-tabs
        slot="extension"
        v-model="tabs"
        centered
        color="transparent"
        slider-color="white"
      >
        <v-tab>Feed</v-tab>
        <v-tab>Searches</v-tab>
        <v-tab>Saved</v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <feed/>
      </v-tab-item>
      <v-tab-item>
        <searches/>
      </v-tab-item>
      <v-tab-item>
        <saved/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Feed from "./Feed.vue";
import Saved from "./Saved.vue";
import Searches from "./Searches.vue";
export default {
  data() {
    return {
      tabs: null
    };
  },
  components: {
    Feed,
    Saved,
    Searches
  }
};
</script>

<style scoped>
</style>
