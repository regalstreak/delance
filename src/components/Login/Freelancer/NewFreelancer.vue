<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <h1 style="color: #fffff">New Freelancer</h1>
        <br>
        <br>

        <v-text-field solo type="string" v-model="name" label="Name" required></v-text-field>

        <v-select solo v-model="selectedSkills" :items="skills" label="Skills" multiple>
          <v-list-tile slot="prepend-item" ripple></v-list-tile>
          <v-divider slot="prepend-item" class="mt-2"></v-divider>
          <v-divider slot="append-item" class="mb-2"></v-divider>
        </v-select>

        <v-btn @click="submitShit">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Factory from "../../../util/factory";
import web3 from "../../../util/getWeb3";
import { db } from "../../../main";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      name: "",
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
      },
      skills: [
        "JavaScript",
        "Java",
        "Python",
        "Ruby",
        "CSS",
        "PHP",
        "C++",
        "C",
        "Shell",
        "C#",
        "Objective-C",
        "R",
        "VimL",
        "Go",
        "Perl",
        "CoffeeScript",
        "TeX",
        "Scala",
        "Haskell",
        "Emacs Lisp"
      ],
      selectedSkills: []
    };
  },
  computed: {
    ...mapGetters(["employers"])
  },
  methods: {
    async submitShit() {
      console.log("sadasd");
      let accounts = await web3.eth.getAccounts();
      console.log("sadasd");
      let ourName = this.name;
      console.log(ourName);
      await Factory.methods
        .create_bidder(accounts[0])
        .send({
          from: accounts[0],
          gasLimit: "4700000"
        })
        .then(() => {
          console.log("Sent transaction");
          db.collection("freelancers")
            .doc(accounts[0])
            .set({
              name: this.name,
              skills: this.selectedSkills
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        })
        .catch(err => console.log(err));
      console.log(ourName);

      this.$router.push("/");
    },

    created() {
      this.$store.dispatch("setFreelancersRef", db.collection("freelancers"));
    }
  }
};
</script>

<style>
</style>
