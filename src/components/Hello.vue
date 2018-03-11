<template>
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js0!'
    }

  }
}
</script>
