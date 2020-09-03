<template>
  <div class="sidebar-heading">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: "SidebarHeading",
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
