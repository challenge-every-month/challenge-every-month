<template>
  <Layout>
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        <v-flex v-for="item in $page.allBlogPost.edges" :key="item.path">
          <v-card class="ma-2 flexcard" width="400px">
            <v-layout align-center style="position: relative;">
              <div class="pin red elevation-5"></div>
            </v-layout>
            <v-card-title class="title">{{ item.node.title }}</v-card-title>
            <v-card-text>
              <p>{{ item.node.date }}</p>
              <p v-html="item.node.content"/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          title
          date (format: "YYYY年MM月DD日 設定")
          content
        }
      }
    }
  }
</page-query>

<style>
/* 一旦コメントアウト
.pin {
  border-radius: 40px;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  margin-left: 40%;
  margin-right: 40%;
}
*/
</style>