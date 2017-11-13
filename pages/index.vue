<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">
        bitbazaar
      </h1>
      <h2 class="subtitle">
        A New Kind of <br />
        Cryptocurrency Exchange!<br/>
        [comming soon]
      </h2>

      <div class="links">
        Want to learn more about cryptocurrencies?<br/><br/>
        <a href="http://book.bitbazaar.io" target="_blank" class="button--green">Checkout Our Free Book</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
