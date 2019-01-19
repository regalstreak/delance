<template>
  <div>
    <v-toolbar color="teal" dark tabs class="pt-2">
      <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>
      <v-tabs
      grow
        fixed-tabs
        slot="extension"
        v-model="tabs"
        centered
        color="transparent"
        slider-color="white"
      >
        <v-tab>Postings</v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <postings/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Postings from "./Postings.vue";
export default {
  data() {
    return {
      tabs: null,
      
    };
  },
  components: {
    Postings,
  }
};
</script>

<style scoped>
</style>
