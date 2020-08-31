<template>
  <div>
    <b-table :data="workshopsUsers" detail-key="title">
      <b-table-column field="waitList" label="Wait List" v-slot="props">
        <div class="field">
          <b-checkbox
            :value="getBoolean(props.row.waitList)"
            @click="changeWaitList(props.row.workshopId)"
          ></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="confirm" label="Confirm" v-slot="props">
        <div class="field">
          <b-checkbox :value="getBoolean(props.row.confirmed)" @click="changeConfirmed(props.row.workshopId)"></b-checkbox>
        </div>
      </b-table-column>
      <b-table-column field="attendance" label="Attendance" v-slot="props">
        <div class="field">
          <b-checkbox :value="getBoolean(props.row.attendance)"  @click="changeAttendance(props.row.workshopId)"></b-checkbox>
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
      testy: true,
      arrUser: [],
      changeArr:[],
    };
  },
  async mounted() {
    const res = await this.$http
      .get("workshop/getSignups?workshopId=" + this.workshopId, {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
      .json();
    if (res.error) {
      console.log(res.message);
    } else {
      console.log("Data Retrieved");
      this.workshopsUsers = res.data;
      this.arrUser = res.data;
      console.log(res.data[0].waitList);
    }
  },
  methods: {
    getBoolean(number) {
      if (number == 0) {
        return false;
      } else {
        return true;
      }
    },
    changeWaitList(workshopId) {
      for (var i in this.arrUser) {
        if (this.arrUser[i].workshopId == workshopId) {
          if (this.arrUser[i].waitList == 0){
            this.arrUser[i].waitList = 1
          }
          else if(this.arrUser[i].waitList == 1){
            this.arrUser[i].waitList = 0
          }
        }
      }
    },
    changeConfirmed(workshopId) {
      for (var i in this.arrUser) {
        if (this.arrUser[i].workshopId == workshopId) {
          if (this.arrUser[i].confirmed == 0){
            this.arrUser[i].confirmed = 1
          }
          else if(this.arrUser[i].confirmed == 1){
            this.arrUser[i].confirmed = 0
          }
        }
      }
    },
    changeAttendance(workshopId) {
      for (var i in this.arrUser) {
        if (this.arrUser[i].workshopId == workshopId) {
          if (this.arrUser[i].attendance == 0){
            this.arrUser[i].attendance = 1
          }
          else if(this.arrUser[i].attendance == 1){
            this.arrUser[i].attendance = 0
          }
        }
      }
    },
    async submit() {
      for (var i in this.arrUser) {
        if (this.workshopsUsers[i] === this.arrUser[i]){
          console.log('sdfs')
        }
        else{
          console.log('sdfgsd')
          this.changeArr.append(this.arrUser[i])
        }
      }
      console.log(this.changeArr.length);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
