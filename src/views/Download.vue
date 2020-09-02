<template>
  <section id="download-section">
    <div id="appendingTest">
    <a>asds</a>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    this.getAllSignUps();
  },
  methods: {
    async getAllSignUps() {
      const res = await this.$http.get(
        "workshop/getSignups?workshopId=" + this.workshopId,
        {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        }
      );
      const a = document.createElement("a");
      a.srcObject = res;
    //   if ("srcObject" in a) {
    //     a.srcObject = res;
    //   } else {
    //     // Avoid using this in new browsers, as it is going away.
    //     a.src = URL.createObjectURL(res);
    //   }
      a.download = "filename.xlsx";
      var text = document.createTextNode("Download here");
      a.appendChild(text);
      document.getElementById("appendingTest").appendChild(a);
    },
  },
};
</script>
<style lang="scss" scoped>
#download-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>
