<template>
  <b-table :data="workshops" detailed detail-key="title">
    <b-table-column field="title" label="Title" v-slot="props">
      {{ props.row.title }}
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
    this.workshops = [
      {
        title: "w1",
        description: "w1 desc",
        quantity: "w1 quantity",
        datetime: "w1 datetime",
        location: "w1 location",
      },
      {
        title: "w2",
        description: "w2 desc",
        quantity: "w2 quantity",
        datetime: "w2 datetime",
        location: "w2 location",
      },
      {
        title: "w3",
        description: "w3 desc",
        quantity: "w3 quantity",
        datetime: "w3 datetime",
        location: "w3 location",
      },
    ];
  },
};
</script>

<style lang="scss" scoped></style>
