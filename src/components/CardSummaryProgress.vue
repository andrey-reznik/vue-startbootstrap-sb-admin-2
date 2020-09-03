<template>
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card shadow h-100 py-2" :class="`border-left-${type}`">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-uppercase mb-1" :class="`text-${type}`">{{title}}</div>
            <div class="row no-gutters align-items-center">
              <div class="col-auto">
                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{progress}}%</div>
              </div>
              <div class="col">
                <div class="progress progress-sm mr-2">
                  <div class="progress-bar"
                       :class="`bg-${type}`"
                       role="progressbar"
                       :style="`width: ${progress}%`"
                       :aria-valuenow="progress"
                       aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <font-awesome-icon :icon="icon" size="2x" class="text-gray-300"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardSummary",
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      title: {
        type: String,
        required: true
      },
      progress: {
        type: Number,
        required: true
      },
      icon: {
        type: String,
        required: false,
        default: 'question'
      }
    }
  }
</script>

<style>

</style>
