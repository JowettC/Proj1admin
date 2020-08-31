<template>
  <section class="section">
    <div class="box">
      <h1 class="title">Workshops Users</h1>
      <workshop-user-table :workshopId="getWorkShopId"/>
    </div>
  </section>
</template>

<script>
import WorkshopUserTable from "@/components/workshop/WorkShopUserTable";
export default {
  components: {
    WorkshopUserTable,
  },
  computed: {
    getWorkShopId() {
      return this.$route.params.workshopId;
    },
  },
};
</script>

<style lang="scss" scoped></style>
