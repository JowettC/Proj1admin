<template>
  <section id="download-section">
      <div id="appending"></div>
    <a>asds</a>
  </section>
</template>
<script>
export default {
  mounted() {
    this.getAllSignUps();
  },
  methods: {
    async getAllSignUps() {
      const res = window.URL.createObjectURL(
        await this.$http.get("admin/exportAllSignups").json()
      );
      const a = document.createElement("a");
      a.href = res;
      a.download = "filename.xlsx";
      document.getElementById("appending").appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
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
