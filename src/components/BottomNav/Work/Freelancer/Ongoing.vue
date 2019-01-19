<template>
  <v-container grid-list-lg>
    <v-card v-for="n in 1" :key="n" class="mb-2">
      <v-card-title>
        <div class="headline">{{ jobTitle }}</div>
      </v-card-title>

      <v-card-text>
        <v-layout column>
          <v-layout class="px-2">
            <v-flex xs6>
              <strong>{{ jobPaymentMode }}</strong>
            </v-flex>
            <v-flex xs6 class="text-xs-right">{{ jobPostDate }}</v-flex>
          </v-layout>

          <v-flex xs12 justify-center align-center>Skill level - {{ jobSkillLevel }}</v-flex>

          <v-layout class="px-1">
            <v-flex xs4>
              <v-icon color="orange darken-2">star</v-icon>
              {{jobRating}}
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <v-icon >attach_money</v-icon>
              <span v-if="jobPaid">Paid</span>
              <span v-else>Unpaid</span>
            </v-flex>

            <v-flex xs4 class="text-xs-right">
              <v-icon v-if="jobFavourited" @click="checkFavourite()" color="red">favorite</v-icon>
              <v-icon v-else @click="checkFavourite()">favorite</v-icon>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      jobTitle: "VueJS Developer Needed",
      jobPaymentMode: "Hourly",
      jobPostDate: "5th January 2019",
      jobRating: "5.0",
      jobSkillLevel: "High",
      jobFavourited: true,
      jobPaid: false
    };
  },
  methods: {
    checkFavourite() {
      this.jobFavourited = !this.jobFavourited;
    }
  }
};
</script>

<style>
</style>
