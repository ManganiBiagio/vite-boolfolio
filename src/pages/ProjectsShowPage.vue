<script>
import axios from "axios";

export default {
    name: "ProjectsShowPage",

    data() {
        return {
            backendUrl: "http://127.0.0.1:8000",
            project: {}
        }
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.backendUrl}/api/projects/${this.$route.params.id}`).then((resp) => {
                
                this.project = resp.data;
            })
        }
    },
    mounted() {
        this.fetchProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center py-5">
            <div class="col-6"  >

                <div class="card">
                    <img :src="this.backendUrl + '/storage/' + this.project.cover_img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ project.description }}</p>

                        <div class="card-text py-3">
                        <ul class="list-group" v-if="this.project.type">
                           
                            <li class="list-group-item">Tipologia:{{project.type.name }}</li>
                                
                            

                        <li class="list-group-item">GitHub Link:  <a :href="project.github_link">{{project.github_link}}</a></li>
                        <li class="list-group-item">Creato il: {{project.created_at}}</li>
                        <li class="list-group-item">Modificato il: {{project.updated_at}}</li>
                        <li class="list-group-item">
                            <div>Tecnologie Usate:</div>
                            <ul class="list-group" >
                                
                                <li class="list-group-item" v-for="tech in project.technologies">{{tech.name}}</li>
                                    
                                
                            </ul>
                        </li>
                      </ul>
                    </div>


                    </div>
                </div>

            </div>
        </div>

</div>
</template>