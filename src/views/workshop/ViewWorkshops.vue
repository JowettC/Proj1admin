<template>
  <section class="section">
    <add-workshop-modal></add-workshop-modal>
    <workshop-table @deleteWs="deleteWorkShop" />
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
      console.log(workshopId)
      const res = await this.$http
        .delete(`workshop/checkRecords?workshopId=${workshopId}`, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        console.log(res.message)
      } else {
        console.log("deleted")
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
