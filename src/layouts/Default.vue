<template>
  <div class="layout">
    <div class="bg" >
      <div class="bkRGBA">
    <header class="header">
      <strong>
        <g-link to="/">challenge-every-month</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">ホーム</g-link>
      </nav>
    </header>
    <slot/>
    </div>

    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;

}

.header {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("/images/cork.jpg");
}

.bkRGBA{
  height: 100%;
  background: rgba(255,255,255,0.5);
}

</style>
