<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="success"><b-navbar-brand href="#" variant="danger">CONTROLLER</b-navbar-brand></b-navbar>
    <GroupList v-bind:groups="groupList" v-on:index="indexGroup = $event" v-on:group="selectGroup($event)"/>
    <MemberList v-if="groupMember" v-bind:members="groupMember"/>
    <GroupRoute v-if="groupRoute" v-bind:route="groupRoute"/>
  </div>
</template>

<script>
import GroupList from  './components/GroupList.vue'
import MemberList from  './components/MemberList.vue'
import GroupRoute from  './components/GroupRoute.vue'

export default {
  name: 'App',
  components: {
    GroupList,
    MemberList,
    GroupRoute
  },
  created: function(){
    this.refreshGroupList();
    this.pollingId = setInterval(() => {
      this.refreshGroupList();
    }, 10000);
  },
  data: function(){
    return{
      pollingId: null,
      groupList: null,
      indexGroup: null,
      selectedGroup: null,
      groupMember: null,
      groupRoute: null,
    }
  },
  methods: {
    refreshGroupList: function(){
      fetch('http://192.168.1.134:3000/groupList')
      .then(response => response.json())
      .then(jsonData => {
      this.groupList = jsonData;
      console.log("el vue: ", this.groupList);
      })
    },
    selectGroup: function(event){
      this.indexGroup = event
      console.log("el grrupo: ", this.indexGroup);
      fetch('http://192.168.1.134:3000/groupMembers', {
        method: 'POST',
        body: JSON.stringify({'idGroup':this.indexGroup}),
        headers: { "Content-type": "application/json" }
      })
      .then(response => response.json())
      .then(jsonData => {
      this.selectedGroup = jsonData.json[0];
      this.groupMember = JSON.parse(this.selectedGroup.listMembers);
      this.groupRoute = JSON.parse(this.selectedGroup.route);
      console.log("el vue: ", this.groupMember);
      })
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 5%;
  margin-right: 5%;
  color: #2c3e50;
}
</style>
