<template>
  <Layout>
      <h1>今月の目標一覧</h1>
      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <h2>
          {{ item.node.title }}
        </h2>
        <h2>
          {{ item.node.auther }}
        </h2>
        <dl>
          <dt>{{ item.node.date }}</dt>
        </dl>
      <div class="content" v-html="item.node.content" />       </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "YYYY年MM月DD日 HH:mm:ss")
          content
        }
      }
    }
  }
</page-query>

<script>
  export default {}
</script>