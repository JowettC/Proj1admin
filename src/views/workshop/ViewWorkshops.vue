<template>
  <section class="section">
    <div class="box">
      <h1 class="title">Workshops</h1>
      <add-workshop-modal></add-workshop-modal>
      <workshop-table @deleteWs="deleteWorkShop" :workshopData="this.workshops" />
    </div>
  </section>
</template>

<script>
import AddWorkshopModal from "@/components/workshop/AddWorkshopModal";
import WorkshopTable from "@/components/workshop/WorkshopTable";
export default {
  components: {
    WorkshopTable,
    AddWorkshopModal,
  },
  data(){
    return{
      workshops:null,
    }
  },
  async mounted() {
    const res = await this.$http
        .get("userworkshop/get")
        .json();
      if (res.error) {
        console.log(res.message);
      } else {
        console.log("Data Retrieved")
        this.workshops = (res.data)
      }
  },
  methods: {
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: "Workshop has been deleted",
        type: "is-danger",
      });
    },
    async deleteWorkShop(workshopId) {
      console.log(workshopId);
      const res = await this.$http
        .delete(`workshop/delete?workshopId=${workshopId}`, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        console.log(res.message);
      } else {
        console.log("deleted");
        this.danger()
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
