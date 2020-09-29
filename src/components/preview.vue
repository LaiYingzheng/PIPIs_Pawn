<template>
  <div>
    <!-- SOURCE -->
    <div ref="printMe" style="padding: 10px; background: #f5da55">
      <h1 style="color: #000; ">Print me!</h1>
    </div>
    <!-- OUTPUT -->
    <img :src="output" width="50%">
  </div>
</template>

<script>

export default {
  data() {
    return {
      output: null
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);

      return this.output;
    }
  },
  mounted() {
    this.print()
  }
}
</script>