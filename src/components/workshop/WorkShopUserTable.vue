<template>
  <div>
    <b-table :data="workshopsUsers" detail-key="title">
      <b-table-column field="waitList" label="Wait List" v-slot="props">
        <div class="field">
          <b-checkbox v-model="props.row.waitList"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="confirm" label="Confirm" v-slot="props">
        <div class="field">
          <b-checkbox v-model="props.row.confirmed"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="attendance" label="Attendance" v-slot="props">
        <div class="field">
          <b-checkbox v-model="props.row.attendance"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="title" label="Email" v-slot="props">
        {{ props.row.email }}
      </b-table-column>
      <b-table-column field="datetime" label="Date/Time" v-slot="props">
        {{ props.row.signedUp }}
      </b-table-column>
      <b-table-column field="infoFrom" label="Info From" v-slot="props">
        {{ props.row.infoFrom }}
      </b-table-column>
    </b-table>
    <b-button type="is-success" @click="submit" expanded>
      update
    </b-button>
  </div>
</template>

<script>
export default {
  props: ["workshopId"],
  data() {
    return {
      workshopsUsers: [],
      arrUser: [],
      returnArr: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const res = await this.$http
        .get("workshop/getSignups?workshopId=" + this.workshopId, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        console.log(res.message);
      } else {
        this.workshopsUsers = res.data;
        this.arrUser = JSON.parse(JSON.stringify(this.workshopsUsers));
      }
    },

    async submit() {
      this.getReturnArr();
      console.log(this.returnArr);
    },
    getReturnArr() {
      for (var i in this.arrUser) {
        if (
          JSON.stringify(this.workshopsUsers[i]) !==
          JSON.stringify(this.arrUser[i])
        ) {
          const x = this.arrUser[i];
          this.returnArr.push({
            email: x.email,
            waitList: x.waitList,
            confirmed: x.confirmed,
            attendance: x.attendance,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
