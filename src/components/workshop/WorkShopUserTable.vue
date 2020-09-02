<template>
  <div>
    <b-table 
    :data="workshopUsersChange" 
    detail-key="title"
    default-sort="confirmed"
    default-sort-direction="DESC"
    >
      <b-table-column field="waitList" label="Wait List" v-slot="props" sortable >
        <div class="field">
          <b-checkbox v-model="props.row.waitList"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="confirmed" label="Confirm" v-slot="props" sortable >
        <div class="field">
          <b-checkbox v-model="props.row.confirmed"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="attendance" label="Attendance" v-slot="props" sortable >
        <div class="field">
          <b-checkbox v-model="props.row.attendance"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="title" label="Email" v-slot="props">
        {{ props.row.email }}
      </b-table-column>
      <b-table-column field="signedUp" label="Date/Time" v-slot="props" sortable >
        {{ props.row.signedUp }}
      </b-table-column>
      <b-table-column field="infoFrom" label="Info From" v-slot="props" sortable>
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
      workshopUsersChange: [],
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
        this.workshopUsersChange = JSON.parse(
          JSON.stringify(this.workshopsUsers)
        );
      }
    },

    async submit() {
      this.getReturnArr();
      const res = await this.$http
        .post("workshop/editUserStatus", {
          json: { workshopId: this.workshopId, userValues: this.returnArr },
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .json();
      if (res.error) {
        this.$buefy.dialog.alert({
          title: "Error",
          message: res.message,
          confirmText: "Close",
        });
      } else {
        this.$buefy.dialog.alert({
          title: "Success",
          message: res.message,
          confirmText: "Close",
        });
      }
    },
    getReturnArr() {
      for (var i in this.workshopUsersChange) {
        if (
          JSON.stringify(this.workshopsUsers[i]) !==
          JSON.stringify(this.workshopUsersChange[i])
        ) {
          const x = this.workshopUsersChange[i];
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
