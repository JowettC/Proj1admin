<template>
  <section class="section">
    <add-workshop-modal></add-workshop-modal>
    <workshop-table></workshop-table>
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
};
</script>

<style lang="scss" scoped></style>
