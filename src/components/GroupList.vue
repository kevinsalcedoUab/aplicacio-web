<template>
    <div>
        <h2>Group List</h2>
        <b-list-group v-for="(group, index) in groups" :key="index">
            <b-list-group-item variant="success" v-on:click="selectGroup(group, index)">Group nº {{group}} <b-button type="button">Alert</b-button></b-list-group-item>
        </b-list-group>
    </div>    
</template>

<script>
export default {
    name: 'GroupList',
    props: ['groups'],
    methods: {
        selectGroup: function(group, index){
            console.log("index: " + index);
            this.$emit('group', group)
            this.$emit('index', index)
        },
    },
}
</script>