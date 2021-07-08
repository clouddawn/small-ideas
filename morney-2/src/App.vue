<template>
  <div>
    <router-view/>
    <hr>
    <div>
      <router-link to="/yangyu">杨羽</router-link>
      |
      <router-link to="/shaozhuang">邵庄</router-link>
      |
      <router-link to="/anning">安宁</router-link>
      |
      <router-link to="/liwei">黎伟</router-link>
      |
      <router-link to="/xingdongdong">邢冬冬</router-link>
      |
      <router-link to="/zhaoning">赵宁</router-link>
    </div>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: 230px;
  height: 300px;
}
</style>
