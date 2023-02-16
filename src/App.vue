<script >
import TheHeader from "./components/TheHeader.vue"
export default {
  components: { TheHeader },
  data() {
    return {
      
    };
  },
  
};
</script>

<template>
    <TheHeader></TheHeader>

    <RouterView></RouterView>
 
</template>

<style lang="scss">
@use "styles/main";
</style>
