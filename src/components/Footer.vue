<template>
  <div class="footer">
     <div class="footer_left">
        <ul class="ulLeft">
            <li @click="returnTop(item.topTo)"  v-for="(item,index) in menuList" :key="index">
             <router-link v-if="item.showOut" :to="item.url"> <span>{{item.title}}</span></router-link>
              <a v-else :href="item.url" >{{item.title}}</a>
            </li>

        </ul>
        <div class="conpanyName">
            <p>Copyright © 2016 channelsoft</p>
            <p>版权所有：北京青牛技术股份有限公司 京ICP备10016421号-6</p>
        </div>
     </div>
     <div class="footer_right">
        <div class="right_Image">
            <div id="right_tu"></div>
            <div id="right_logo"></div>
        </div>
        <div class="conpanyName">
                <p>地址：北京市石景山区田顺庄北路1号院古城创业大厦3号楼</p>
                <p>邮编：100043&nbsp;&nbsp;&nbsp; 总机：010-88822000 &nbsp;&nbsp;&nbsp;传真：010-68711717</p>
            </div>
     </div>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                menuList:[
                    {
                        title:'产品服务',
                        url:'/QingYun',
                    showOut:true
                    },{
                        title:'解决方案',
                        url: '/Scene',
                    showOut:true
                    },{
                        title:'关于我们',
                        url:'/AboutUs',
                    showOut:true
                    },{
                        title:''
                    },{
                        title:'加入青牛',
                        url:'/JoinYouth',
                    showOut:true
                    },
                    // {
                    //     title:'快速链接',
                    // showOut:false,
                    // url:'javascript:',
                    // },
                    {
                        title:'联络云',
                    url:'/QingYun',
                    showOut:true
                    },{
                    title:' ',
                    showOut:true,
                    url:'/Scene',
                },{
                        title:'公司介绍',
                    url:'/AboutUs',
                    showOut:true,
                    topTo:'top1'
                    },{
                        title:'未来展望',
                        showOut:true,
                        url:'/AboutUs',
                         topTo:'top5'
                    },{
                        title:'员工福利',
                    url:'/JoinYouth',
                    showOut:true
                    },
                    // {
                    //     title:'www.ccod.com',
                    // url:'http://www.ccod.com',
                    // showOut:false
                    // },
                    {
                        title:'大数据技术',
                    url:'/BigData',
                    showOut:true
                    },{
                    title:'',
                    url:'/Scene',
                    showOut:true
                },
                {
                        title:'品牌释义',
                    showOut:true,
                    url:'/AboutUs',
                     topTo:'top2'
                    },{
                        title:'合作伙伴',
                    showOut:false,
                    url:'javascript:',
                    },{
                        title:'在招职位',
                        url:'/OnJob',
                    showOut:true
                    },
                    // {
                    //     title:'www.qnzsai.com',
                    //   url:'http://www.qnzsai.com',
                    // showOut:false
                    // },
                    {
                        title:'AI服务',
                    url:'/QingniuAI',
                    showOut:true
                    },{
                        title:'',
                    showOut:false,
                    url:'javascript:',
                    },{
                        title:'发展历程',
                        url:'/AboutUs',
                    showOut:true,
                    topTo:'top3'
                    },{
                        title:'愿景使命',
                    showOut:true,
                    url:'/AboutUs',
                    topTo:'top4'
                    },{
                        title:'',
                    showOut:false,
                    url:'/'
                    },
                    // {
                    //     title:'www.v114.com',
                    //   url:'http://www.v114.com',
                    // showOut:false
                    // },
                    {
                        title:''
                    },{
                        title:''
                    },{
                        title:'联系我们',
                    showOut:true,
                    url:'/AboutUs',
                    topTo:'top6'
                    },
                    // {
                    //     title:'联系我们',
                    // showOut:true,
                    // url:'/AboutUs',
                    // }
                ]
            }
        },
        methods: {
         returnTop:function(top){
            // console.log(top)
            document.querySelector("#" + top).scrollIntoView(true);
        }
    } 
}
</script>
<style >
    .footer{
       width: 80%;
      height: 236px;
       padding: 58px 10% 70px;
       background-color: rgb(16,29,44);
       display: flex;
    }
    .footer a{
      color: inherit!important;
    }
    .footer_left{
        width: 55%;
        padding-right: 5%;
    }
    .ulLeft{
        width: 100%;
        text-align: left;
        margin: 0;
        height: auto;
        overflow: hidden;
    }
    .ulLeft li{
        float: left;
        width: 16.8%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        text-align: left;
    }
    .conpanyName{
      margin-top: 40px;
    }
    .conpanyName p{
        color: #fff;
        font-size: 14px;
        text-align: left;
      line-height: 24px;

    }
    .footer_right{
        width: 43%;
    }
    .right_Image{
        display: flex;
        align-items: center;
        margin-bottom:8px;
        margin-top:10px;
    }
    #right_tu{
        width: 136px;
        height: 136px;
        background: url('../assets/img/footer.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        margin-right:15px;
    }
    #right_logo{
        width: 259px;
        height: 60px;
        background: url('../assets/img/logo.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    }
</style>


