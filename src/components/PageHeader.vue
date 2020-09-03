<template>
  <div>
    <h1 class="h3 mb-2 text-gray-800">{{title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
