<template>
  <b-table :data="workshopData" detailed detail-key="title">
    <b-table-column field="title" label="Title" v-slot="props">
      <router-link  :to="'/workshopUser/'+props.row.workshopId + '/' + props.row.title">
      {{ props.row.title }}
      </router-link>
    </b-table-column>
    <b-table-column field="datetime" label="Start" v-slot="props">
      {{ props.row.datetime }}
    </b-table-column>
    <b-table-column field="datetime" label="End" v-slot="props">
      {{ props.row.endDateTime }}
    </b-table-column>
    <b-table-column field="quantity" label="Quantity" v-slot="props">
      {{ props.row.quantity }}
    </b-table-column>
    <b-table-column field="location" label="Location" v-slot="props">
      {{ props.row.location }}
    </b-table-column>
    <b-table-column field="actions" label="Actions" v-slot="props">
      <div class="buttons">
        <b-button
          type="is-danger"
          size="is-small"
          icon-right="trash"
          @click="deleteDialog(props.row)"
        />
        <b-button
          type="is-warning"
          size="is-small"
          icon-right="edit"
          @click="$emit('edit-ws', props.row)"
        />
      </div>
    </b-table-column>
    <template slot="detail" slot-scope="props">
      <div class="content">
        <h3>Description</h3>
        <p>
          {{ props.row.description }}
        </p>
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    workshopData: {
      type: Array,
      required: true,
      default: () => {
        return new Array();
      },
    },
  },
  methods: {
    deleteDialog(workshop) {
      this.$buefy.dialog.confirm({
        title: "Deleting Workshop",
        message:
          "Are you sure you want to <b>delete " + workshop.title + "</b>?",
        confirmText: "Confirm",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$emit("deleteWs", workshop.workshopId),
      });
    },
    editDialog(workshop) {
      this.$emit("editWS", workshop);
    },
  },
};
</script>

<style lang="scss" scoped></style>
