<template>
    <div>
        <h2>Route</h2>
        <GmapMap
            v-bind:center="{'lat': route[0], 'lng': route[1]}"
            :zoom="16"
            map-type-id="hybrid"
            style="width: 500px; height: 300px;"
        >
            <GmapMarker
                :position="{'lat': route[0], 'lng': route[1]}"
                :clickable="true"
            />
            <GmapMarker
                :position="{'lat': route[2], 'lng': route[3]}"
                :clickable="true"
            />
        </GmapMap>
    </div>    
</template>

<script>
export default {
    name: 'GroupRoute',
    components: {},
    data () {
        return {
       
        }
    },
    props: ['route'],
    methods: {
    },
}
</script>