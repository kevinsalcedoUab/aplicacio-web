<template>
    <div>
        <h2>Member List</h2>
        <b-list-group v-for="(member, index) in members" :key="index">
            <b-list-group-item variant="success">{{member.name}}  <b-button type="button">Chat</b-button> </b-list-group-item>
        </b-list-group>
    </div>  
</template>

<script>
export default {
    name: 'MemberList',
    props: ['members'],
    methods: {
        selectMember: function(member, index){
            this.$emit('member', member)
        },
    },
}
</script>