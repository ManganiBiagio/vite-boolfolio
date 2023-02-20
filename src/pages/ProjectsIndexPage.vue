<script>
import axios from "axios";
import { store } from "../store";
import PorjectCard from "../components/ProjectCard.vue"
export default {
  name: "Home",
  components:{PorjectCard},
  data(){
    return{
        store,
        projects:[]
    }
  },
  methods:{
    fetchProjects(){
        axios.get(`${store.backendUrl}/api/projects`).then((resp)=>{
            
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