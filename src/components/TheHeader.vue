<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
              
              <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            label: "Home",
            routeName: "home",
          },
          {
            label: "Contatti",
            routeName: "contacts",
          },
          {
            label:"Progetti",
            routeName:"projects.index"
          }
        ],
      };
    },
  };
  </script>
  
  <style scoped lang="scss"></style>