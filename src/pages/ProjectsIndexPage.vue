<script>
import axios from "axios";
import PorjectCard from "../components/ProjectCard.vue"
export default {
  name: "Home",
  components:{PorjectCard},
  data(){
    return{
        backendUrl:"http://127.0.0.1:8000",
        projects:[]
    }
  },
  methods:{
    fetchProjects(){
        axios.get(`${this.backendUrl}/api/projects`).then((resp)=>{
            console.log(resp.data.data);
            this.projects=resp.data.data;
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
    <h1>Pagina Progetti</h1>
    <div class="row">
        <div class="col-4" v-for="project in this.projects">
            <PorjectCard :project="project"></PorjectCard>

        </div>
    </div>
  </div>
</template>