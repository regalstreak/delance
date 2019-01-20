<template>
  <div>
    <freelancer v-if="importantInfo.isFreelancer"></freelancer>
    <employer v-else-if="importantInfo.isEmployer"></employer>
    <h1 v-else>Please <router-link to="/">Login</router-link> to continue.</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Freelancer from "./Freelancer/Freelancer.vue";
import Employer from "./Employer/Employer.vue";
export default {
  components: {
    Freelancer,
    Employer
  },
  mounted(){
    console.log("IASDASDADASDAS" + this.importantInfo.isFreelancer);
  },
  computed: {
    ...mapState(["importantInfo"])
  }
};
</script>

<style>
</style>