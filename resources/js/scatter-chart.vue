<template>
    <Scatter
        :chart-data="chartData"
        :chart-options="options"
        :height="height"
    />
</template>

<script>
import { Scatter } from 'vue-chartjs'
import HandlesDataLabelsPlugin from './mixins/HandlesDataLabelsPlugin';

export default {
  components: { Scatter },
  props: {
    height: {
      default: 250,
      type: Number
    }
  },
  mixins: [HandlesDataLabelsPlugin],
}
</script>
