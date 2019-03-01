<template>
  <Layout>
      <h1>今月の目標一覧</h1>
      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <h2>
          {{ item.node.auther }}
        </h2>
        <dl>
          <dt>{{ item.node.date }}</dt><dd>{{ item.node.fields.tags}}</dd>
        </dl>
        <p>{{ item.node.fields.description }}</p>
        <g-link :to="item.node.path" class="continue-link">続きを読む ></g-link>
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
          auther
          date (format: "YYYY年MM月DD日 HH:mm:ss")
          fields {
            description
            tags
          }
          path
        }
      }
    }
  }
</page-query>

<script>
  export default {}
</script>