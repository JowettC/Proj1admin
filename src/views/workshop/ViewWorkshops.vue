<template>
  <section class="section">
    <div class="box">
      <h1 class="title">Workshops</h1>
      <add-workshop-modal></add-workshop-modal>
      <workshop-table @deleteWs="deleteWorkShop" />
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
  methods: {
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
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
