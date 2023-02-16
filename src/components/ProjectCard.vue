<template>
    <div class="card">
                <img :src="`${this.backendUrl}/storage/${project.cover_img}`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    
                  
                    <div class="d-flex gap-3">
                        <a href="" class="btn btn-primary">Info</a>
                       
                       
                    </div>
                    
                </div>
            </div>

</template>
  
<script>
export default {
    data() {
        return {
            backendUrl:"http://127.0.0.1:8000",
        }
    },
     props: {
        project:Object
    },
}
</script>
  
<style scoped lang="scss"></style>