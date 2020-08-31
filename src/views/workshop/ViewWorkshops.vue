<template>
  <section class="section">
    <div class="box">
      <h1 class="title">Workshops</h1>
      <add-workshop-modal @reload-data="getWorkshops()"></add-workshop-modal>
      <workshop-table
        @deleteWs="deleteWorkShop"
        @edit-ws="editWorkShop"
        :workshopData="this.workshops"
      />
    </div>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <template>
        <edit-workshop-modal-form
          :workshopObj="editProps"
          @close="editProps = null"
        ></edit-workshop-modal-form>
      </template>
    </b-modal>
  </section>
</template>

<script>
import AddWorkshopModal from "@/components/workshop/AddWorkshopModal";
import EditWorkshopModalForm from "@/components/workshop/EditWorkshopModalForm";
import WorkshopTable from "@/components/workshop/WorkshopTable";
export default {
  components: {
    WorkshopTable,
    AddWorkshopModal,
    EditWorkshopModalForm,
  },
  data() {
    return {
      workshops: [],
      isComponentModalActive: false,
      editProps: null,
    };
  },
  mounted() {
    this.getWorkshops();
  },
  methods: {
    async getWorkshops() {
      const res = await this.$http.get("userworkshop/get").json();
      if (res.error) {
        console.log(res.message);
      } else {
        console.log("Data Retrieved");
        this.workshops = res.data;
      }
    },
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
        this.danger();
        this.getWorkshops();
      }
    },
    editWorkShop(workshopObj) {
      this.editProps = workshopObj;
      this.isComponentModalActive = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
