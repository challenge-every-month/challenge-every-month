<template>
  <Layout>
    <h1 class="display-1 text-lg-center">今月の目標一覧</h1>
    <div class="container">
      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <v-card>
        <v-layout align-center style="position: relative;">
          <div class="pin red elevation-5"></div>
        </v-layout>
          <v-card-title class="title text-md-center">{{ item.node.title }}</v-card-title>
          <v-card-text>
            <p>{{ item.node.date }}</p>
            <div class="content" v-html="item.node.content"/>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          title
          date (format: "YYYY年MM月DD日 HH時mm分")
          content
        }
      }
    }
  }
</page-query>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}

.post {
  width: 400px;
  margin: 10px;
  padding: 10px;
}

.pin {
  border-radius: 40px;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  margin-left: 40%;
  margin-right: 40%;
}
</style>