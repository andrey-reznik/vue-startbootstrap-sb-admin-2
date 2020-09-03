<template>
  <li class="nav-item">
    <router-link :to="to" class="nav-link">
      <font-awesome-icon :class="toggled ? 'mr-0' : 'mr-2'" :icon="icon"/>
      <span>{{title}}</span>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: "SidebarItem",
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: false,
        default: 'question'
      },
      to: {
        type: [Object, String],
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
