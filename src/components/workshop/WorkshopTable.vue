<template>
  <b-table :data="workshops" detailed detail-key="title">
    <b-table-column field="title" label="Title" v-slot="props">
      <router-link  :to="'/workshopUser/'+props.row.workshopId">
      {{ props.row.title }}
      </router-link>
    </b-table-column>
    <b-table-column field="datetime" label="Date/Time" v-slot="props">
      {{ props.row.datetime }}
    </b-table-column>
    <b-table-column field="quantity" label="Quantity" v-slot="props">
      {{ props.row.quantity }}
    </b-table-column>
    <b-table-column field="location" label="Location" v-slot="props">
      {{ props.row.location }}
    </b-table-column>
    <b-table-column field="actions" label="Actions" v-slot="props">
      <div>
        <!-- <button class="button is-small is-info" :to="{
        path: '/form/editWorkshop',
        query: {
          serialNoList: getCheckedSerialNo(),
          firstItem: getFirstCheckedInUriString(),
        },
      }">
          <b-icon icon="pen" size="is-small" ></b-icon>
        </button> -->
        <button class="button is-small is-danger" @click="deleteDialog(props.row)">
          <b-icon icon="trash" size="is-small" ></b-icon>
        </button>
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
  data() {
    return {
      workshops: [],
    };
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
  methods:{
    deleteDialog(workshop) {
      this.$buefy.dialog.confirm({
        title: "Deleting Workshop",
        message: "Are you sure you want to <b>delete (" + workshop.title +")</b>?",
        confirmText: "Confirm",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$emit("deleteWs", workshop.workshopId),
      });
    },
  }
};
</script>

<style lang="scss" scoped></style>
