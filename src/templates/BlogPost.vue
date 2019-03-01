<template>
  <Layout>
      <h1>{{ $page.blogPost.title }}</h1>
      <dl>
        <dt>{{ $page.blogPost.date }}</dt><dt>{{ $page.blogPost.auther }}</dt><dd></dd>
      </dl>
      <div class="content" v-html="$page.blogPost.content" />
  </Layout>
</template>

<page-query>
query MarkdownPost ($path: String!) {
  blogPost (path: $path) {
    title
    date (format: "YYYY年MM月DD日 HH:mm:ss")
    auther
    content
  }
}
</page-query>

<script>
  export default {}
</script>