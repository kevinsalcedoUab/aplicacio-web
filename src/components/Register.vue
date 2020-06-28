<template>
  <div >
    <h1>holis</h1>
    <p>{{msg}}</p>
    <button v-on:click="register()">register</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'holanda'
    }
  },
  methods: {
    register: function(){
    fetch('http://192.168.1.134:3000/prueba1', {
        method: 'POST',
        body: JSON.stringify({'message': 'holi'}),
        headers: { "Content-type": "application/json" }
      })
      .then(response => response.json())
      .then(jsonData => {  
        console.log("el vue: ", jsonData);
      })
      console.log("f")
    },
  }
}
</script>

