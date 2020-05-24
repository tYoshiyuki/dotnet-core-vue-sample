<template>
  <div id="app">
    <div id="nav">
      <b-navbar>
        <b-navbar-brand>Sample Vue App</b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/counter">Counter</b-nav-item>
          <b-nav-item to="/fetch-data">Fetch data</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
