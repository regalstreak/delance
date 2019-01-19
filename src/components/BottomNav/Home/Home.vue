<template>
  <div>
    <freelancer v-if="isFreelancer"></freelancer>
    <employer v-else-if="isEmployer"></employer>
    <div v-else></div>
  </div>
</template>

<script>
import Freelancer from "./Freelancer/Freelancer.vue";
import Employer from "./Employer/Employer.vue";
export default {
  components: {
    Freelancer,
    Employer
  },
  data() {
    return {
      isFreelancer: false,
      isEmployer: true
    };
  }
};
</script>

<style>
</style>
