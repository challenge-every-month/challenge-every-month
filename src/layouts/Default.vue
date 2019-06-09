<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-title class="black--text header">challenge-every-mouth</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>
          <g-link to="/">目標</g-link>
        </v-btn>
        <v-btn>
          <g-link to="/about">概要</g-link>
        </v-btn>
        <v-btn>
          <g-link to="/howToJoin" class>参加方法</g-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="content" style="background-image:url(images/cork.jpg);">
      <slot/>
    </v-content>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 50px;
}
.content {
  margin-top: 50px;
  background-size: cover;
}
</style>
