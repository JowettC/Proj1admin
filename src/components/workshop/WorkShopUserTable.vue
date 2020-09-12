<template>
  <div>
    <div class="button-wrapper">
      <b-button
        type="is-info"
        size="is-medium"
        icon-left="file-download"
        @click="getSignUps"
      >
        Workshop Sign ups
      </b-button>
    </div>
    <b-table
      :data="workshopUsersChange"
      detail-key="title"
      default-sort="confirmed"
      default-sort-direction="DESC"
    >
      <b-table-column
        field="waitList"
        label="Wait List"
        v-slot="props"
        sortable
      >
        <div class="field">
          <b-checkbox v-model="props.row.waitList"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="confirmed" label="Confirm" v-slot="props" sortable>
        <div class="field">
          <b-checkbox v-model="props.row.confirmed"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column
        field="attendance"
        label="Attendance"
        v-slot="props"
        sortable
      >
        <div class="field">
          <b-checkbox v-model="props.row.attendance"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="remarks" label="Remarks" v-slot="props">
        <div class="field">
          <b-input class="remarks-input" v-model="props.row.remarks"></b-input>
        </div>
      </b-table-column>
      <b-table-column field="name" label="Name" v-slot="props">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column field="email" label="Email" v-slot="props">
        {{ props.row.email }}
      </b-table-column>
      <b-table-column
        field="contactNumber"
        label="Contact Number"
        v-slot="props"
      >
        {{ props.row.contactNumber }}
      </b-table-column>
      <b-table-column
        field="signedUp"
        label="Date/Time"
        v-slot="props"
        sortable
      >
        {{ props.row.signedUp }}
      </b-table-column>
      <b-table-column
        field="infoFrom"
        label="Info From"
        v-slot="props"
        sortable
      >
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
  props: ["workshopId", "workshopTitle"],
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
            remarks: x.remarks,
          });
        }
      }
    },
    async getSignUps() {
      const res = await this.$http
        .get("admin/exportSignups?workshopId=" + this.workshopId, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .text();
      const a = document.createElement("a");
      a.href = `data:attachment/csv,${encodeURIComponent(res)}`;
      a.download = this.workshopTitle + "-Signups.csv";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  padding-bottom: 50px;
}
.remarks-input {
  min-width: 200px;
}
</style>
