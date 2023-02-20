<template>
    <div class="card">
        <img :src="`${store.backendUrl}/storage/${project.cover_img}`" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>


            <div class="d-flex gap-3">
                <router-link :to="{ name: 'projects.show', params: { id: project.id } }" class="btn btn-primary">Dettagli
                </router-link>


            </div>

        </div>
</div>
</template>
  
<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        project: Object
    },
}
</script>
  
<style scoped lang="scss">
.card{
    height: 100%;
}</style>