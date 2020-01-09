<template>
  <div id="app">
    <Header />
    <v-content class="content" style="background-image:url(images/cork.jpg);">
      <slot/>
    </v-content>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header
  }
};
</script>

<style>
.content {
  background-size: cover;
}
</style>
