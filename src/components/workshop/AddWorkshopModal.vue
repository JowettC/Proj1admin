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
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <template>
        <div>
          <form @submit.prevent="onSubmit">
            <div class="modal-card" style="width: auto">
              <header class="modal-card-head">
                <p class="modal-card-title">Add Workshop</p>
                <button
                  type="button"
                  class="delete"
                  @click="isComponentModalActive = false"
                />
              </header>
              <section class="modal-card-body">
                <b-field label="Title">
                  <b-input v-model="title" required></b-input>
                </b-field>
                <b-field label="Description">
                  <b-input v-model="description" required></b-input>
                </b-field>
                <b-field label="Select datetime">
                  <b-datetimepicker v-model="dateTime" inline></b-datetimepicker>
                </b-field>
                <b-field label="Select end datetime">
                  <b-datetimepicker v-model="endDateTime" inline></b-datetimepicker>
                </b-field>
                <b-field label="Quantity">
                  <b-numberinput v-model="quantity"></b-numberinput>
                </b-field>
                <b-field label="Location">
                  <b-input v-model="location" required></b-input>
                </b-field>
              </section>

              <footer class="modal-card-foot">
                <button
                  class="button"
                  type="button"
                  @click="isComponentModalActive = false"
                >
                  Close
                </button>
                <b-button type="is-success" native-type="submit" expanded :disabled="!isDataFilled">
                  Add
                </b-button>
              </footer>
            </div>
          </form>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "add-workshop-modal",
  data() {
    return {
      title: null,
      description: null,
      quantity: null,
      location: null,
      dateTime: null,
      endDateTime:null,
      isComponentModalActive: false,
    };
  },
  computed:{
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
        message: "Workshop Added!",
        type: "is-success",
      });
    },
    clearField(){
      this.title = null
      this.description = null
      this.quantity = null
      this.location = null
      this.dateTime = null
    },
    async onSubmit() {
      const res = await this.$http
        .post("workshop/add", {
          json: {
            title: this.title,
            description: this.description,
            quantity: this.quantity,
            location: this.location,
            datetime: this.dateTime,
            endDateTime: this.endDateTime,
          },
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        console.log(res.message);
      } else {
        console.log("added");
        this.isComponentModalActive = false
        this.clearField()
        this.success()
        this.$emit("reloadsData")
        
      }
    },
  },
};
</script>
<style scoped>
.modal-card {
  width: 500px !important;
}
</style>
