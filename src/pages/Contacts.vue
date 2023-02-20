<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "Contacts",
  data(){
    return {
      store,
      form:{
        title:"",
        email:"",
        message:"",
        
      },
      submitResult:"",
      loading:false

    }
  },
  methods:{
    onFormSubmit(){
      this.loading=true;

      axios.post(store.backendUrl+"/api/contacts",this.form)
      .then((resp)=>{
        this.submitResult="success";
        this.loading=false
      }).catch((e)=>{
        this.submitResult=e.message;
        this.loading=false
      })
      
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Contattaci</h1>
    <div class="alert alert-success" v-if="submitResult === 'success'">
      Messaggio inviato correttamente. Ti risponderemo il prima possibile
    </div>

    <div class="alert alert-danger" v-else-if="submitResult">
      Sembra ci sia stato un errore. Ti invitiamo a riprovare pià tardi.<br />
      {{ submitResult }}
    </div>
    <form @submit.prevent="onFormSubmit" v-if="submitResult !== 'success'">
      <div class="mb-3">
        <label for="titleInput" class="form-label">Titolo</label>
        <input
          type="text"
          class="form-control"
          id="titleInput"
          v-model="form.title"
        />
      </div>
      

      <div class="mb-3">
        <label for="emailInput" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          v-model="form.email"
        />
      </div>

      <div class="mb-3">
        <label for="messageInput" class="form-label">Messaggio</label>
        <textarea
          class="form-control"
          id="messageInput"
          v-model="form.message"
        ></textarea>
      </div>

     

      <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-secondary" typeof="reset" :disabled="loading">
          Annulla
        </button>
        <button class="btn btn-success" :disabled="loading">
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Invia
        </button>
      </div>
    </form>
  </div>
</template>