<template>
  <section class="section">
    <div class="box">
      <h1 class="title">{{getWorkShopTitle}}</h1>
      <workshop-user-table :workshopId="getWorkShopId" :workshopTitle="getWorkShopTitle"/>
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
    getWorkShopTitle() {
      return this.$route.params.workshopTitle;
    },
  },
};
</script>

<style lang="scss" scoped></style>
