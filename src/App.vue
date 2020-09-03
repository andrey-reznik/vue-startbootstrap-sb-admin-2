<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from "@/layouts/MainLayout"
  import EmptyLayout from "@/layouts/EmptyLayout"

  export default {
    components: {
      MainLayout,
      EmptyLayout
    },
    computed: {
      layout() {
        return this.$route.meta.layout || 'empty-layout'
      },
      background() {
        if (this.layout() === 'empty-layout') {
          return 'primary'
        } else {
          return 'top'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/sb-admin-2";
</style>
