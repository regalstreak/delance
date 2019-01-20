<template>
  <v-container fluid fill-height>
    <v-layout column text-xs-center fill-height>
      <v-flex xs4></v-flex>
      <v-flex xs2>
        <v-layout column>
          <v-img aspect-ratio="5" :src="require('../../assets/logo.png')" class="display-2 mb-3"></v-img>
          <v-btn to="/new-freelancer" color="black" dark>New freelancer</v-btn>
          <v-btn to="/new-employer" color="blue" dark>New employer</v-btn>
          <v-btn @click="login" color="red" dark>Login</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import web3 from "../../util/getWeb3";
import factory from "../../util/factory.js";
export default {
  methods: {
    async login() {
      let accounts = await web3.eth.getAccounts();
      console.log(accounts);
      let contractAddress;
      if (
        (await factory.methods.bidmap(accounts[0]).call()) !=
        0x0000000000000000000000000000000000000000
      ) {
        console.log("freelancer");
        contractAddress = await factory.methods.bidmap(accounts[0]).call();
        let importantInfo = {
          contractAddressL: contractAddress,
          isFreelancerL: true,
          isEmployerL: false
        };
        this.$store.commit("changeImportantInfo", importantInfo);
        console.log("State" + this.$store.state.importantInfo);
        this.$router.push("/home");
      } else if (
        (await factory.methods.sponsmap(accounts[0]).call()) !=
        0x0000000000000000000000000000000000000000
      ) {
        console.log("spons");
        contractAddress = await factory.methods.sponsmap(accounts[0]).call();

        let importantInfo = {
          contractAddressL: contractAddress,
          isFreelancerL: false,
          isEmployerL: true
        };
        this.$store.commit("changeImportantInfo", importantInfo);

        console.log("State" + this.$store.state.importantInfo);

        this.$router.push("/home");
      } else {
        console.log("bhosdika");
        this.$router.push("/");
        return;
      }
      // console.log(contractAddress);
      // console.log(accounts);
      // this.$store.commit("changeContractAddressState", contractAddress);
      // console.log("Succ");
      // this.$router.push("/home");
    },
    mounted() {
      async () => {
        // Get network provider and web3 instance.

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // For debugging purposes
        console.log(accounts[0]);
        var Web3 = web3;
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        // this.setState({ web3, account: accounts[0], contract: factory });

        let n = {
          web3L: Web3,
          accountL: accounts[0],
          contractL: factory
        };

        console.log(n);

        this.$store.commit("addLoginInfo", n);
      };
    }
  }
};
</script>
