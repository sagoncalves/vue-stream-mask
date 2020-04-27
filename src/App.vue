<template>
  <v-app>
    <v-app-bar app color="#414141" dark>
      <div class="d-flex align-center">
        <svg style="height:36px;" version="1.1" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/></g><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/></g></g></svg>
        <a style="color:#fff;font-size: 15px;">vue-stream-mask</a>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://www.npmjs.com/package/vue-stream-mask" target="_blank" text>

        <v-icon>mdi-npm</v-icon>
      </v-btn>
      <v-btn href="https://github.com/sagoncalves/vue-stream-mask" target="_blank" text>

        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style >
.theme--light.v-application {
    background: #41b883 !important;
}
body{
    background-color: #41b883
}
</style>
