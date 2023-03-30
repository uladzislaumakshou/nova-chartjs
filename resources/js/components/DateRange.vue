<template>
  <div class="flatpickr-input-block">
    <flat-pickr v-model="date" :config="rangeConfig" @on-close="format"/>
    <a class="clear-input-button" @click="clear">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
           stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </a>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  data() {
    const date = ref([]);
    const rangeConfig = {
      mode: "range",
      dateFormat: "Y-m-d",
    }
    return {
      date,
      rangeConfig
    }
  },

  methods: {
    formatDate(date) {
      const d = new Date(date);
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const day = d.getDate().toString().padStart(2, '0');
      const year = d.getFullYear();
      return [year, month, day].join('-');
    },
    clear() {
      this.date = [];
    },
    format(val) {
      const result = val.map(item => this.formatDate(item))
      this.$emit('onClose', {dateRange: result});
    }
  }
}
</script>
<style>
.flatpickr-input-block {
  padding: 0;
  position: relative;
}

.clear-input-button {
  position: absolute;
  display: inline-block;
  top: 0px;
  right: 0px;
}

.flatpickr-input {
  border-radius: 0.25rem;
  padding: 0.25rem 2rem 0.25rem 0.75rem;
  font-weight: inherit;
  /*padding-right: 24px;*/
  font-size: .75rem;
  line-height: 1rem;
  border-color: rgba(203, 213, 225);
  border-width: 1px;
  background-color: transparent;
}

</style>