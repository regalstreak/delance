<template>
  <v-list two-line>
    <v-subheader v-if="job.jobSkillLevel">Required skill level: {{ job.jobSkillLevel }}</v-subheader>

    <div v-for="skill in job.jobSkills" :key="skill">
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title v-html="skill"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </div>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      job: {
        jobTitle: "VueJS Developer Needed",
        jobPaymentMode: "Hourly",
        jobPostDate: "5th January 2019",
        jobRating: 5.0,
        jobSkillLevel: "High",
        jobFavourited: false,
        jobPaid: false,
        jobDetail:
          "About product: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed quam et velit placerat rhoncus. Mauris non turpis posuere, suscipit elit sed, gravida velit. Fusce ornare dapibus risus, id condimentum velit feugiat ac. Integer commodo eros neque, vel pulvinar sapien ornare in. Maecenas odio ante, posuere sit amet condimentum vitae, maximus ac enim. Fusce in tincidunt metus. Cras vel blandit lorem. Curabitur rhoncus cursus auctor. Donec ullamcorper turpis et diam dapibus euismod. Pellentesque at purus enim. Cras maximus sollicitudin lorem, non varius justo euismod nec. Phasellus ex ipsum, efficitur eget lacinia hendrerit, ultrices vitae dolor. Donec at justo pulvinar dui tincidunt bibendum eget quis magna.",
        jobEmployerId: 123,
        jobEmployer: "neil",
        jobEmployerAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        jobSkills: ["vue", "solidity", "cpp", "js"],
        jobType: "OnGoing",
        jobProposals: 5,
        jobLookingToHire: 2,
        jobBudget: 0.003
      }
    };
  }
};
</script>

<style>
</style>
