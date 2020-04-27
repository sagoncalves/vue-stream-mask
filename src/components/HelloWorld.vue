<template>
  <v-container>
    <v-row class="row-index">
      <v-col xl="6" lg="6" md="6" sm="6" cols="12">
        <h1 class="display-2 mb-3 white-text">Vue</h1>
        <h1 class="display-3 font-weight-bold mb-3 white-text">stream-mask</h1>


<pre id="infoPre"><code>
// install  
yarn add vue-stream-mask

// import
import * as VueStreamMask from "vue-stream-mask"
Vue.use(VueStreamMask)
</code></pre>
       
      </v-col>

      <v-col xl="6" lg="6" md="6" sm="6" cols="12" class="text-center">
        <v-card class="pa-4">
          <vue-stream-mask
            style="width:100%"
            show
            :background="switchBackground? 'https://statically.io/images/misc/clouds.jpg': ''"
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
  border-radius: 4px;
}
.row-index {
  height: calc(100vh - 80px);
  align-items: center;
}
.white-text {
  color: #fff;
}


</style>
<style>
pre {
  margin:0;
  padding:0;
}
code {
  margin: 0;
  padding: 0px 15px;
  width:100%;
  display: block;
  background-color: #36996d !important;
  color: white !important;
  font-size: .85em;
  line-height: 1.6em;
}
</style>