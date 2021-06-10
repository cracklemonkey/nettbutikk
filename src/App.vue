<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand href="#">DCS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><router-link to="/">Hjem</router-link></b-nav-item>
        <b-nav-item ><router-link to="/about">Om oss</router-link></b-nav-item>
        <b-nav-item ><router-link to="/Products">Produkter</router-link></b-nav-item>
       
      </b-navbar-nav>
    </b-collapse>
      </b-navbar>
      
      
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  
}


</style>
