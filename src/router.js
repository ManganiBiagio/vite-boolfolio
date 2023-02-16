import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ContactsPage from "./pages/Contacts.vue"
import ProjectsIndexPage from "./pages/ProjectsIndexPage.vue"


const router = createRouter({
  
  history: createWebHistory(),
  routes: [
    {
      path: "/", 
      name: "home", 
      component: HomePage
    },
	
    {
     
      path: "/contact",
      name: "contacts",
      component: ContactsPage
    },
    {
        path:"/projects",
        name:"projects.index",
        component:ProjectsIndexPage
    }
  ]
});

export { router };