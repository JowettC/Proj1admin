<template>
  <section id="download-section">
    <div id="download-link-wrapper">
      <div class="download-link">
        <b-field label="All Users" class="download-center-label">
            <b-button type="is-info" @click="getAllSignUps">Download</b-button>
        </b-field>
        <b-field label="All Users that has signed up for workshop" class="download-center-label">
            <b-button type="is-info" @click="getAllSignUpsWorkshop"
          >Download</b-button
        >
        </b-field>
      </div>
    </div>
    <br/>
      <b-field label="Emails for newsletter" class ="download-center-label">
        <b-input :value="newsletterEmail" type="textarea" class ="download-textbox-width"></b-input>
      </b-field>
  </section>
</template>
<script>
export default {
  data() {
    return {
      newsletterEmail: "",
    };
  },
  mounted() {
    this.getNewsletterEmail();
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
    async getNewsletterEmail() {
      const res = await this.$http
        .get("admin/getContacts", {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        this.newsletterEmail = res.message;
      } else {
        res.data.forEach(element => {
          this.newsletterEmail += element.email + "; "
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.download-center-label{
  text-align: center;
}
#download-section {
  padding-top: 100px;
  height: 80vh;
  justify-content: space-between;
}
#download-link-wrapper {
  align-items: center;
  .download-link {
    margin-left: auto;
    margin-right: 0;
    align-items: center;
    b {
      margin: 30px;
    }
  }
}
.download-textbox-width{
  width:50%;
  margin:auto;
}
#text-wrapper {
  width: 50%;
}
</style>
