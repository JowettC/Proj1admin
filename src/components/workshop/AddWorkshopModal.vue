<template>
  <section class="section">
    <b-button
      type="is-primary"
      size="is-medium"
      @click="isComponentModalActive = true"
      expanded
    >
      Add
    </b-button>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <template #default="props">
        <add-workshop-form @close="props.close"></add-workshop-form>
      </template>
    </b-modal>
  </section>
</template>

<script>
import AddWorkshopForm from "@/components/workshop/AddWorkshopForm";
export default {
  name: "add-workshop-modal",
  components: {
    AddWorkshopForm,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
};
</script>
<style scoped>
</style>
