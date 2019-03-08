<template>
  <Layout>
    <h1 class="title">今月の目標一覧</h1>
    <div class="container">

      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <h2 class="title">{{ item.node.title }}</h2>
        <p>{{ item.node.date }}</p>
      <div class="content" v-html="item.node.content" />       </div>
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "YYYY年MM月DD日 HH時mm分")
          content
        }
      }
    }
  }
</page-query>

<script>
  export default {}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}

.title{
  text-align: center
}

.post {
  width: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>