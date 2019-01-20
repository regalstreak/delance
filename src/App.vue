<template>
  <v-app>
    <v-bottom-nav :active.sync="bottomNav" app :value="true" fixed>
      <v-btn color="teal" to="/home" flat value="home">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="teal" to="/work" flat value="work">
        <span>Work</span>
        <v-icon>work</v-icon>
      </v-btn>

      <v-btn color="teal" to="/messages" flat value="messages">
        <span>Messages</span>
        <v-icon>message</v-icon>
      </v-btn>

      <v-btn color="teal" to="/account" flat value="account">
        <span>Account</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bottomNav: "home"
    };
  }
};
</script>
