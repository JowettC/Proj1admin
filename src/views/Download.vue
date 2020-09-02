<template>
  <section id="download-section">
    <div id="download-link-wrapper">
      <div class="download-link">
        <b>All Users</b>
        <b-button type="is-info" @click="getAllSignUps">Download</b-button>
      </div>
      <div class="download-link">
        <b>All Users that has signed up for workshop</b>
        <b-button type="is-info" @click="getAllSignUpsWorkshop"
          >Download</b-button
        >
      </div>
    </div>
    <div id="text-wrapper"></div>
  </section>
</template>
<script>
export default {
  // mounted() {
  //   this.getAllSignUps();
  // },
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
    async getAllSignUpsWorkshop() {
      const res = await this.$http
        .get("admin/exportAllSignups", {
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
  padding-top: 100px;
  height: 80vh;
}
#download-link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  position: relative;
  .download-link {
    margin-left:auto; margin-right:0;
    display:flex;
    align-items: center;
    b{
      margin:30px;
    }
  }
}
#text-wrapper {
  width: 50%;
}
</style>
