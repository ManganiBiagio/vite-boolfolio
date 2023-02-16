<script>
import axios from "axios";
export default {
  name: "Home",
  data(){
    return{
        backendUrl:"http://127.0.0.1:8000",
        projects:[]
    }
  },
  methods:{
    fetchProjects(){
        axios.get(`${this.backendUrl}/api/projects`).then((resp)=>{
            console.log(resp.data);
        })
    }
  },
  mounted(){
    this.fetchProjects();
  }
}
</script>

<template>
  <div class="container">
    <h1>Pagina Home</h1>
  </div>
</template>