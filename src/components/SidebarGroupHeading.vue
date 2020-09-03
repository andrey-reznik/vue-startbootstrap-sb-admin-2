<template>
  <h6 class="collapse-header">{{title}}</h6>
</template>

<script>
  export default {
    name: "SidebarGroupHeading",
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
