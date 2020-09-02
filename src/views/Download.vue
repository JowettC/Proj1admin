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
      const res = await this.$http
        .get("admin/exportContacts", {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .text();
      const a = document.createElement("a");
      a.href = `data:attachment/csv,${encodeURIComponent(res)}`;
      a.download = "filename.csv";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
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
