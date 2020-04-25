<template>
  <v-container>
    <v-row class="row-index">
      <v-col xl="6" lg="6" md="6" sm="6" cols="12">
        <h1 class="display-2 mb-3 white-text">Vue</h1>
        <h1 class="display-3 font-weight-bold mb-3 white-text">stream-mask</h1>

        <pre id="infoPre">

        // install  
        yarn add vue-stream-mask

        // import
        import * as StreamBlur from "vue-stream-mask"
        Vue.use(StreamBlur)
        </pre>
      </v-col>

      <v-col xl="6" lg="6" md="6" sm="6" cols="12" class="text-center">
        <v-card class="pa-4">
          <Stream-Blur
            style="width:100%"
            :canvas="!switchBackground"
            :mask="switchBackground? 'https://statically.io/images/misc/clouds.jpg': false"
          />
          <v-switch v-model="switchBackground" color="#41b883" :label="`Enable background`"></v-switch>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {},
  data: () => ({
    switchBackground: false
  })
};
</script>
<style scoped>
#infoPre {
  background: #0000002b;
  border-radius: 4px;
  color: white;
  white-space: pre-wrap;
}
.row-index {
  height: calc(100vh - 80px);
  align-items: center;
}
.white-text {
  color: #fff;
}
</style>