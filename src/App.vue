<template>
  <div id="app">
    
    <nav  style="background:#000000;opacity:0.9" class="navbar navbar-expand-lg">
  <a class="navbar-brand" style="color:#F9F7F3;font-weight:bold" href="#">TayyabUniversity.com</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    <ul class="navbar-nav mr-auto ">
      <li @click="goTo('/')"  class="nav-item active">
        <a :style="{color: $router.currentRoute.path=='/' ? '#F9F7F3':'#A1E8AF' }" style="color:white;" class="nav-link" href="#">Home <span v-if="$router.currentRoute.path=='/d'" class="sr-only">(current)</span></a>
      </li>
      <li @click="goTo('/paths')" class="nav-item">
        <a :style="{color: $router.currentRoute.path=='/paths' ? '#F9F7F3':'#A1E8AF' }" style="color:white;font-weight:100" class="nav-link" href="#">Paths</a>
      </li>
       <li @click="goTo('/submit')" class="nav-item">
        <a :style="{color: $router.currentRoute.path=='/submit' ? '#F9F7F3':'#A1E8AF' }" style="color:white;font-weight:100" class="nav-link" href="#">Submit</a>
      </li>

       <li @click="goTo('/faq')" class="nav-item">
        <a :style="{color: $router.currentRoute.path=='/faq' ? '#F9F7F3':'#A1E8AF' }" style="color:white;font-weight:100" class="nav-link" href="#">FAQ</a>
      </li>

      <li @click="triggerSignIn" class="nav-item">
        <a :style="{color: $router.currentRoute.path=='/faq' ? '#F9F7F3':'#A1E8AF' }" style="color:white;font-weight:100" class="nav-link" href="#">Login</a>
      </li>
   
    </ul>
    </ul>
     
  </div>
</nav>


<button style="display:none;" id="signInTrigger" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
 </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Sign In</button>
      </div>
    </div>
  </div>
</div>


    <router-view />
  </div>
</template>


<script>

import firebase from './assets/firebase'

export default {
  methods:{
    triggerSignIn(){
        var tr= document.getElementById("signInTrigger");
        console.log(tr.click());
    },
    goTo(route){
      this.$router.push(route);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white !important;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
