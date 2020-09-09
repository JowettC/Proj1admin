<template>
  <section class="section">
    <div class="box">
      <h1 class="title">Downloads</h1>
      <div class="buttons">
        <b-button
          type="is-info"
          size="is-medium"
          icon-left="file-download"
          @click="getAllSignUps"
        >
          All Enquirers
        </b-button>
        <b-button
          type="is-info"
          size="is-medium"
          icon-left="file-download"
          @click="getAllSignUpsWorkshop"
        >
          All Workshop Sign Ups
        </b-button>
      </div>
      <b-field label="Newsletter Emails">
        <b-input
          id="textId"
          :value="newsletterEmail"
          type="textarea"
          readonly
        ></b-input>
      </b-field>

      <b-button
        type="is-info"
        size="is-medium"
        icon-left="file-download"
        @click="copyEmailsToClipboard"
      >
        Copy Emails
      </b-button>
    </div>
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
        res.data.forEach((element) => {
          this.newsletterEmail += element.email + "; ";
        });
      }
    },
    async copyEmailsToClipboard() {
      if (!navigator.clipboard) {
        document.execCommand("copy", false, this.newsletterEmail);
      } else {
        try {
          await navigator.clipboard.writeText(this.newsletterEmail);
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
