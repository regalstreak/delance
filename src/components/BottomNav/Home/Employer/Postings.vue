<template>
  <v-container grid-list-lg>
    <v-card v-for="n in 10" :key="n" class="mb-2">
      <v-card-title>
        <div class="headline">{{ job.jobTitle }}</div>
      </v-card-title>

      <v-card-text>
        <v-layout column>
          <v-layout class="px-2">
            <v-flex xs6>
              <strong>{{ job.jobPaymentMode }}</strong>
            </v-flex>
            <v-flex xs6 class="text-xs-right">{{ jobPostDate }}</v-flex>
          </v-layout>

          <v-flex xs12 justify-center align-center>Skill level - {{ job.jobSkillLevel }}</v-flex>

          <v-layout class="px-1">
            <v-flex xs6>
              <v-icon color="orange darken-2">star</v-icon>
              {{job.jobRating}}
            </v-flex>

            <v-flex xs6 class="text-xs-right">Proposals - {{ job.jobProposals }}</v-flex>
          </v-layout>
        </v-layout>
      </v-card-text>
    </v-card>

    <v-btn fab @click="changeAddProposal(true)" fixed right bottom class="my-5" dark color="pink">
      <div>
        <v-icon dark medium>add</v-icon>
      </div>
    </v-btn>

    <v-dialog
      v-model="addProposal"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark color="teal">
          <v-btn icon dark @click="changeAddProposal(false)">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Proposal</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="changeAddProposal(false)">Submit</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1" color="teal">Introduction</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 2" step="2" color="teal">Project</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 3" step="3" color="teal">Skills</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 4" step="4" color="teal">Freelancers</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 5" step="5" color="teal">Budget</v-stepper-step>
              <v-divider></v-divider>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-text-field v-model="newJob.jobTitle" label="Job title"></v-text-field>

                <v-textarea
                  v-model="newJob.jobDetail"
                  name="input-7-4"
                  label="Job details"
                  placeholder="Please enter a descriptive job description for the job that the freelancers will "
                ></v-textarea>

                <v-btn color="teal white--text" @click="e1 = 2">Next</v-btn>

                <v-btn flat @click="changeAddProposal(false)">Back</v-btn>
              </v-stepper-content>

              <v-stepper-content step="5">
                <v-layout align-center justify-center>
                  <v-flex xs6 class="text-xs-center">
                    <font class="headline">Your budget for this job is</font>
                    <v-text-field v-model="ethBid" prefix="ETH" :suffix="textSuffix"></v-text-field>
                    pAU MONTHLY OR FIXED OR HOURLY
                  </v-flex>
                </v-layout>
                <v-btn color="teal white--text" @click="e1 = 3">Next</v-btn>

                <v-btn flat @click="e1 = 1">Back</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-layout align-center justify-center>
                  <v-flex xs6 class="text-xs-center">
                    <font class="headline">Your budget for this job is</font>
                    <v-text-field v-model="ethBid" prefix="ETH" :suffix="textSuffix"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-btn color="teal white--text" @click="e1 = 3">Next</v-btn>

                <v-btn flat @click="e1 = 1">Back</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      addProposal: false,
      e1: 0,
      tabs: null,
      job: {
        jobTitle: "VueJS Developer Needed",
        jobPaymentMode: "Hourly",
        jobPostDate: "5th January 2019",
        jobRating: 5.0,
        jobSkillLevel: "High",
        jobFavourited: false,
        jobPaid: false,
        jobDetail: "",
        jobEmployerId: 123,
        jobEmployer: "neil",
        jobEmployerAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        jobSkills: [],
        jobType: "OnGoing",
        jobProposals: 5,
        jobLookingToHire: 2,
        jobBudget: 0.003
      },
      newJob: {
        jobTitle: "",
        jobPaymentMode: "Hourly",
        jobPostDate: "5th January 2019",
        jobRating: 5.0,
        jobSkillLevel: "High",
        jobFavourited: false,
        jobPaid: false,
        jobDetail: "",
        jobEmployerId: 123,
        jobEmployer: "neil",
        jobEmployerAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        jobSkills: [],
        jobType: "OnGoing",
        jobProposals: 5,
        jobLookingToHire: 2,
        jobBudget: 0.003
      }
    };
  },
  methods: {
    checkFavourite() {
      this.jobFavourited = !this.jobFavourited;
    },
    changeAddProposal(n) {
      this.addProposal = n;
    }
  }
};
</script>

<style>
</style>
