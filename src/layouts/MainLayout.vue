<template>
  <div>
    <div id="wrapper">
      <sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <topbar/>
          <div class="container-fluid">
            <router-view/>
          </div>
        </div>
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <scroll-to-top-button/>
  </div>
</template>

<script>
  import Topbar from "@/components/Topbar"
  import Sidebar from "@/components/Sidebar"
  import ScrollToTopButton from "@/components/ScrollToTopButton"

  export default {
    name: "MainLayout",
    components: {
      Topbar,
      Sidebar,
      ScrollToTopButton
    }
  }
</script>

<style>

</style>
