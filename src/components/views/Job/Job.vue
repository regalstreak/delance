<template>
  <v-layout column>
    <v-container>
      <v-card>
        <v-card-title>
          <div>
            <span class="headline font-weight-bold">{{ job.jobTitle }}</span>

            <div>Budget:
              <strike></strike>
              <span class="font-weight-bold">ETH {{job.jobBudget}}</span> &nbsp;
              <br>
              <div>
                Looking to hire:
                <span class="font-weight-bold">{{job.jobLookingToHire}}</span>
              </div>
            </div>
          </div>

          <v-spacer/>
          <v-btn round>SAVE</v-btn>
        </v-card-title>
      </v-card>

      <v-flex xs12 class="py-2">
        <v-card>
          <v-card-text>
            <v-tabs fixed-tabs v-model="tabs">
              <v-tab>Details</v-tab>
              <v-tab>Skills required</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tabs">
              <v-tab-item>{{ job.jobDetail }}</v-tab-item>
              <v-tab-item>
                <skills-required/>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-list two-line>
              <v-subheader v-if="job.header">{{ job.jobHeader }}</v-subheader>

              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="job.jobEmployerAvatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="job.jobEmployer"></v-list-tile-title>
                  <v-list-tile-sub-title>Employer</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-subheader v-if="job.header">{{ job.jobHeader }}</v-subheader>

              <v-divider></v-divider>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title v-html="job.jobProposals"></v-list-tile-title>
                  <v-list-tile-sub-title>Proposals</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-divider></v-divider>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title v-html="job.jobType"></v-list-tile-title>
                  <v-list-tile-sub-title>Project status</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>

      <v-btn
        @click="changeSubmitProposalDialog(true)"
        block
        color="teal"
        class="white--text"
      >Submit Proposal</v-btn>

      <v-dialog
        v-model="submitProposalDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="teal">
            <v-btn icon dark @click="changeSubmitProposalDialog(false)">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Proposal</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="changeSubmitProposalDialog(false)">Submit</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" color="teal">Bid</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2" color="teal">Introduction</v-stepper-step>

                <v-divider></v-divider>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-layout align-center justify-center>
                    <v-flex xs6 class="text-xs-center">
                      <font class="headline">Your Bid is for</font>
                      <v-text-field prefix="ETH" :suffix="textSuffix"></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-btn color="teal white--text" @click="e1 = 2">Next</v-btn>

                  <v-btn flat @click="changeSubmitProposalDialog(false)">Back</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-textarea
                    name="input-7-4"
                    label="Personal introduction"
                    placeholder="Introduce yourself, highlight your skills and experience, and tell the client exactly why they should hire you!"
                  ></v-textarea>
                  <v-btn color="teal white--text" @click="submitJob()">Submit</v-btn>

                  <v-btn flat @click="e1 = 1">Back</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
    </v-container>
  </v-layout>
</template>

<script>
import SkillsRequired from "./SkillsRequired.vue";
export default {
  components: {
    SkillsRequired
  },
  data: () => ({
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
      jobDetail:
        "About product: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed quam et velit placerat rhoncus. Mauris non turpis posuere, suscipit elit sed, gravida velit. Fusce ornare dapibus risus, id condimentum velit feugiat ac. Integer commodo eros neque, vel pulvinar sapien ornare in. Maecenas odio ante, posuere sit amet condimentum vitae, maximus ac enim. Fusce in tincidunt metus. Cras vel blandit lorem. Curabitur rhoncus cursus auctor. Donec ullamcorper turpis et diam dapibus euismod. Pellentesque at purus enim. Cras maximus sollicitudin lorem, non varius justo euismod nec. Phasellus ex ipsum, efficitur eget lacinia hendrerit, ultrices vitae dolor. Donec at justo pulvinar dui tincidunt bibendum eget quis magna.",
      jobEmployerId: 123,
      jobEmployer: "neil",
      jobEmployerAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      jobSkills: [],
      jobType: "OnGoing",
      jobProposals: 5,
      jobLookingToHire: 2,
      jobBudget: 0.003
    },
    submitProposalDialog: false,
    personalIntroduction: "",
    ethBid: ""
  }),
  methods: {
    changeSubmitProposalDialog(n) {
      this.submitProposalDialog = n;
      this.$store.commit("changeSubmitProposalDialog", n);
    },
    submitJob() {
      this.submitProposalDialog = false;
      this.$router.push("/work");
    }
  },
  computed: {
    textSuffix() {
      if (this.job.jobPaymentMode === "Hourly") {
        return "/Hour";
      } else {
        return "/Month";
      }
    }
  }
};
</script>