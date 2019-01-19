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
        <v-tab>Ongoing</v-tab>
        <v-tab>Completed</v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <ongoing/>
      </v-tab-item>
      <v-tab-item>
        <completed/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Ongoing from "./Ongoing.vue";
import Completed from "./Completed.vue";
export default {
  data() {
    return {
      tabs: null
    };
  },
  components: {
    Ongoing,
    Completed
  }
};
</script>

<style scoped>
</style>
