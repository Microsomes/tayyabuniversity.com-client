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
   
    </ul>
    </ul>
     
  </div>
</nav>


    <router-view />
  </div>
</template>


<script>
export default {
  methods:{
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
