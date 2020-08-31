<template>
  <form @submit.prevent="onSubmit">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Workshop</p>
        <button type="button" class="delete" @click="$parent.close" />
      </header>
      <section class="modal-card-body">
        <b-field label="Title">
          <b-input v-model="title" required></b-input>
        </b-field>
        <b-field label="Description">
          <b-input v-model="description" required></b-input>
        </b-field>
        <b-field label="Select datetime">
          <b-datetimepicker
            v-model="dateTime"
            append-to-body
            locale="en-SG"
            :timepicker="{ incrementMinutes: 5 }"
          ></b-datetimepicker>
        </b-field>
        <b-field label="Select end datetime">
          <b-datetimepicker
            v-model="endDateTime"
            append-to-body
            locale="en-SG"
            :timepicker="{ incrementMinutes: 5 }"
          ></b-datetimepicker>
        </b-field>
        <b-field label="Quantity">
          <b-numberinput v-model="quantity"></b-numberinput>
        </b-field>
        <b-field label="Location">
          <b-input v-model="location" required></b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot">
        <b-button
          type="is-success"
          native-type="submit"
          expanded
          :disabled="!isDataFilled"
        >
          Edit
        </b-button>
      </footer>
    </div>
  </form>
</template>

<script>
import * as dayjs from "dayjs";
export default {
  props: {
    workshopObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: null,
      description: null,
      quantity: null,
      location: null,
      dateTime: null,
      endDateTime: null,
    };
  },
  mounted() {
    this.title = this.workshopObj.title;
    this.description = this.workshopObj.description;
    this.quantity = this.workshopObj.quantity;
    this.location = this.workshopObj.location;
    this.dateTime = new Date(this.workshopObj.datetime);
    this.endDateTime = new Date(this.workshopObj.endDateTime);
  },
  computed: {
    isDataFilled() {
      return (
        this.title !== null &&
        this.description !== null &&
        this.quantity !== null &&
        this.location !== null &&
        this.dateTime !== null &&
        this.endDateTime !== null
      );
    },
  },
  methods: {
    success() {
      this.$buefy.toast.open({
        message: "Workshop Edited!",
        type: "is-success",
      });
    },
    async onSubmit() {
      const res = await this.$http
        .post("workshop/edit", {
          json: {
            workshopId: this.workshopObj.workshopId,
            title: this.title,
            description: this.description,
            quantity: this.quantity,
            location: this.location,
            datetime: dayjs(this.dateTime).format(),
            endDateTime: dayjs(this.endDateTime).format(),
          },
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        console.log(res.message);
      } else {
        this.success();
        this.$emit("reload-data")
        this.$parent.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
