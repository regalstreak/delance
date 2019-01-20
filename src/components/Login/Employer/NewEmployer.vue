<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <h1 style="color: #fffff">New employer</h1>
        <br>
        <br>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field solo v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

          <v-checkbox
            solo
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree to the terms and conditions?"
            required
          ></v-checkbox>

          <v-btn @click="submitShit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Factory from "../../../util/factory.js";
import web3 from "../../../util/getWeb3";
import { db } from "../../../main.js";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    checkbox: false
  }),

  computed: {
    ...mapGetters(["employers"])
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async submitShit() {
      console.log("sadasd");
      let accounts = await web3.eth.getAccounts();
      console.log("sadasd");
      let ourName = this.name;
      console.log(ourName);
      await Factory.methods
        .create_spons(accounts[0])
        .send({
          from: accounts[0],
          gasLimit: "4700000"
        })
        .then(() => {
          console.log("Sent transaction");
          db.collection("employers")
            .doc(accounts[0])
            .set({
              name: this.name
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
    }
  },
  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },

  created() {
    console.log("rere");
    this.$store.dispatch("setEmployersRef", db.collection("employers"));
    console.log(this.employers);
    console.log("contract" + this.$store.state.importantInfo.contractAddress)
    console.log("account" + this.$store.state.login.account)
  }
};
</script>

<style>
</style>
