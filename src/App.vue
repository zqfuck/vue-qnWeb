<template>
  <div id="app" ref="app">
    <!--<img src="./assets/logo.png">-->
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from '@/components/Header';
import Footers from '@/components/Footer';

export default {
  name: 'App',
  data (){
    return{
      isIndex:true
    }
  },
  components:{
      Headers,
      Footers
  },
   mounted(){
      // this.$refs.app.addEventListener("scroll",this.changeIndex,false)
    },
    watch:{
      $route (to,from) {
          // console.log(to)
        this.isIndex = to.fullPath == "/" ? false : true;
      }
    },
    methods: {

    }
}
</script>


<style>
  body {
    padding: 0;
    margin: 0;
  }
    
  a{
    outline: none!important;
  }
  #app {
    text-align: center;
    color: #333333;
    width: 100%;
    min-width: 1348px;
    /*margin-top: 60px;*/
  }
  .wrap{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  ul{
    padding-inline-start: 0px;
  }
  ul li{
    list-style: none;
  }
    .ccod_title{
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .ccod_titles{
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .line{
    width: 62px;
    height: 3px;
    display: inline-block;
    margin-top: 20px;
    background: #ff882f;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  /*.ccod-section-contact-map {
          width: 405px;
          height: 213px;
          float: right;
        }
    .amap-logo, .amap-copyright {
        display: none !important;
      }*/
</style>
