<template>
  <li class="nav-item">
    <a class="nav-link"
       :class="expanded ? false : 'collapsed'"
       href="#"
       data-toggle="collapse"
       data-target="#collapseTwo"
       :aria-expanded="expanded.toString()"
       aria-controls="collapseTwo"
       @click="expanded = !expanded">
      <font-awesome-icon :class="toggled ? 'mr-0' : 'mr-2'" :icon="icon"/>
      <span>{{title}}</span>
      <font-awesome-icon v-if="!toggled" icon="angle-right" pull="right"/>
    </a>
    <div id="collapseTwo"
         class="collapse"
         :class="expanded ? 'show': false"
         aria-labelledby="headingTwo"
         data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <slot></slot>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: "SidebarGroup",
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
      expanded: {
        type: Boolean,
        required: false,
        default: false
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

<style lang="scss">

</style>
