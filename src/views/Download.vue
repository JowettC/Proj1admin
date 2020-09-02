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
        "admin/exportContacts",
        {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        }
      );
      console.log(res);
      const a = document.createElement("a");
      a.srcObject = res;
    //   if ("srcObject" in a) {
    //     a.srcObject = res;
    //   } else {
    //     // Avoid using this in new browsers, as it is going away.
    //     a.src = URL.createObjectURL(res);
    //   }
      a.download = "filename.xlsx";
      console.log(a);
      document.body.appendChild(a);
      a.click();
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
