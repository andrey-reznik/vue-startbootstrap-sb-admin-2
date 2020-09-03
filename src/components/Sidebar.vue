<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" :class="toggled ? 'toggled' : ''"
      id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <font-awesome-icon icon="laugh-wink" size="2x"/>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <sidebar-item
      icon="tachometer-alt"
      title="Dashboard"
      :to="{name: 'Dashboard'}"
    />

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <sidebar-heading title="Interface"/>

    <!-- Nav Item - Pages Collapse Menu -->
    <sidebar-group title="Components" icon="cog">
      <sidebar-group-heading title="Custom Components:"/>
      <router-link class="collapse-item" :to="{name: 'Buttons'}">Buttons</router-link>
      <router-link class="collapse-item" :to="{name: 'Cards'}">Cards</router-link>
    </sidebar-group>

    <!-- Nav Item - Utilities Collapse Menu -->
    <sidebar-group title="Utilities" icon="wrench">
      <sidebar-group-heading title="Custom Utilities:"/>
      <router-link class="collapse-item" :to="{name: 'Colors'}">Colors</router-link>
      <router-link class="collapse-item" :to="{name: 'Borders'}">Borders</router-link>
      <router-link class="collapse-item" :to="{name: 'Animations'}">Animations</router-link>
      <router-link class="collapse-item" :to="{name: 'Other'}">Other</router-link>
    </sidebar-group>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <sidebar-heading title="Addons"/>

    <!-- Nav Item - Pages Collapse Menu -->
    <sidebar-group title="Pages" icon="folder">
      <sidebar-group-heading title="Login Screens:"/>
      <router-link class="collapse-item" :to="{name: 'Login'}">Login</router-link>
      <router-link class="collapse-item" :to="{name: 'Register'}">Register</router-link>
      <router-link class="collapse-item" :to="{name: 'Forgot'}">Forgot Password</router-link>
      <sidebar-group-heading title="Other Pages:"/>
      <router-link class="collapse-item" :to="{name: '404'}">404 Page</router-link>
      <router-link class="collapse-item" :to="{name: 'Blank'}">Blank Page</router-link>
    </sidebar-group>

    <sidebar-item
      icon="chart-area"
      title="Charts"
      :to="{name: 'Charts'}"
    />

    <sidebar-item
      icon="table"
      title="Tables"
      :to="{name: 'Tables'}"
    />

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle" @click="toggled = !toggled">
        <font-awesome-icon icon="angle-right" class="text-gray-300" v-if="toggled"/>
        <font-awesome-icon icon="angle-left" class="text-gray-300" v-else/>
      </button>
    </div>

  </ul>
</template>

<script>
  import SidebarItem from "@/components/SidebarItem";
  import SidebarGroup from "@/components/SidebarGroup";
  import SidebarGroupHeading from "@/components/SidebarGroupHeading";
  import SidebarHeading from "@/components/SidebarHeading";

  export default {
    name: "Sidebar",
    components: {
      SidebarHeading,
      SidebarGroupHeading,
      SidebarGroup,
      SidebarItem
    },
    data() {
      return {
        toggled: false,
        opened: 0
      }
    },
    methods: {
      open(event) {
        var matches = document.querySelectorAll('.accordion-item-head');
        for (var i = 0; i < matches.length; i++) {
          matches[i].classList.remove('active');
        }
        event.target.classList.toggle('active');
      }
    }
  }
</script>

<style>

</style>
