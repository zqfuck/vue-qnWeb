<template lang='html'>
    <div class="ccod-Heder">
        <router-link exact to="/"><div id='ccod_logo' style='display:inline-block;'></div></router-link>
        <div class="ccod-menu" style=''>
            <div class="ccod-menu-list" v-for="(menu,index) in menuList" @click="addActive(menu,index)" @mouseover="hoverMenuItem(menu,index)" @mouseout="hoverMenuItem(menu,index)" :key="index">
                <router-link exact v-if="!menu.out" class="haveMenu"  :to="menu.url">{{menu.title}}</router-link>
                <a v-else class="haveMenu" :href="menu.url" target="_blank" >{{menu.title}}</a>
                <template v-if="menu.child">
                     <div class="ccod-submenu" v-show="menu.show">
                           <router-link exact class="ccod-submenu-item" :to="child.url" v-for="(child,index) in menu.child" :key="index">{{child.title}}</router-link>
                     </div>
                </template>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
         name : 'Header',
        data (){
            return{
                hoverMenu: false,
                 addAct:false,
                menuList:[
                    {
                        out:false,
                        title:'首页',
                        url:'/',
                        show: false
                    },{
                        out:false,
                        title:'产品服务',
                        url:'/QingYun',
                        child:[
                            {
                                title:'联络云',
                                url:'/QingYun'
                            },{
                            title:'大数据技术',
                            url:'/BigData'
                          },{
                                title:'AI服务',
                                url:'/QingniuAI'
                            }
                        ],
                        show: false
                    },{
                         out:false,
                        title:'解决方案',
                        url:'/Scene',
                        // child: [
                        //     {
                        //         title: '行业解决方案',
                        //         url: '/Solution',
                        //     }, {
                        //         title: '场景解决方案', 
                        //         url: '/Scene',
                        //     }
                        // ],
                        show: false
                    },{
                        out:false,
                        title:'新闻动态',
                        url:'/NewsInform',
                        show: false
                    },{
                        out:false,
                        title:'关于我们',
                        url:'/AboutUs',
                        show: false
                    },{
                        out:false,
                        title:'加入青牛',
                        url:'/JoinYouth',
                        child: [
                          {
                            title: '员工福利',
                            url: '/JoinYouth',
                          }, {
                            title: '在招职位',
                            url: '/OnJob',
                          }
                        ],
                        show: false
                     },
                     //{
                    //     out:true,
                    //     title:'青牛联络云',
                    //     url:'http://www.ccod.com',
                    //     show: false
                    // },{
                    //     out:true,
                    //     title:'青牛AI',
                    //     url:'http://www.qnzsai.com',
                    //     show: false
                    // },{
                    //     out:true,
                    //     title:'青牛视频云',
                    //     url:'http://www.v114.com',
                    //     show: false
                    // }
                ]
            }
        },
      watch:{
        $route(to,from){
          if (to.path){
            this.addAct = true
          }
           $(".ccod-menu-list .haveMenu").removeClass('active_');
          if(to.path=='/BigData'||to.path=='/QingniuAI'){
           $(".ccod-menu-list .haveMenu").eq(1).addClass('active_')
          }else if(to.path=='/OnJob'){
            $(".ccod-menu-list .haveMenu").eq(5).addClass('active_')
          }
        }
      },
        methods:{
             hoverMenuItem(menu,index) {
                menu.show = !menu.show;
                this.hoverMenu = !this.hoverMenu;
            },
          addActive(menu,index){
            if (this.addAct){
              $(".ccod-menu-list .haveMenu").removeClass('active_')
              $(".ccod-menu-list .haveMenu").eq(index).addClass('active_')
            }
            this.addAct = false
          }
        },
      mounted () {
           $(".ccod-submenu").hover(function () {
             $(this).prev('a').addClass('active')
           },function () {
             $(this).prev('a').removeClass('active')
           })
      //  $(".ccod-menu-list .haveMenu").eq(0).addClass('active_')
      }
    }
</script>

<style>
    .ccod-Heder{
      width: 100%;
      min-width: 1348px;
      height: 60px;
        display: flex;       
        background-color: rgba(16,29,44,0.75);
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 22;
        align-items: center;
    }
    #ccod_logo{
        width: 120px;
        height: 32px;
        margin-right: 25px;
        background: url('../assets/img/lo.png') no-repeat center;
        cursor: pointer;
    }
    a{
      outline: none!important;
    }
    .ccod-menu{

        display: flex;  
        justify-content: space-around;
        align-items: center;
    }
   .ccod-Heder .ccod-menu-list{
        font-size:16px;
        position: relative;
        margin: 0 20px;
    } 
    .ccod-Heder .ccod-menu-list:nth-child(7){
      margin-left: 60px;
    }
    /* .ccod-Heder .ccod-menu-list:nth-child(6) :after{
      content: '';
      width: 2px;
      height: 28px;
      background: #fff;
      position: absolute;
      right: -40px;
      top: 0;
    } */

   .ccod-Heder .ccod-menu-list a{
        color: #fff;
        text-decoration: none;
   }
   .ccod-Heder .ccod-menu-list a:hover{
        color: #FFBA00;
        border-bottom: 2px solid #FFBA00;
        padding-bottom: 18px;
   }
    .ccod-Heder .ccod-menu-list a.active{
     color: #FFBA00;
     border-bottom: 2px solid #FFBA00;
     padding-bottom: 18px;
   }
  .ccod-menu-list .router-link-active{
      color: #FFBA00;
     border-bottom: 2px solid #FFBA00;
     padding-bottom: 18px;
   }
    .ccod-Heder .ccod-menu-list a.active_{
      color: #FFBA00;
      border-bottom: 2px solid #FFBA00;
      padding-bottom: 18px;
    }
   
   .submenuHover{
     color: #FFBA00;
    /* border-bottom: 2px solid #FFBA00;*/

   }
    .ccod-Heder .ccod-menu-list .ccod-submenu {
       position: absolute;
        top: 41px;
        left:-26px;
        padding: 10px 30px;
        background-color: #fff;
        color: #000;
        z-index: 2;
        text-align: left;
        border-top: 1px solid #eeeeee;
   }
  .ccod-Heder .ccod-menu-list .ccod-submenu-item {
      color: #333333;
      padding: 18px 0px;
      display: block;
      text-decoration: none;
      white-space: nowrap;
    }
    .ccod-Heder .ccod-menu-list .ccod-submenu-item:hover {
        color: #FFBA00;
        border: 0;
      }

</style>
