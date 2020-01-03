<template>
  <div class="wrap">
      <div class="ccod_join">
          <h2>联络云</h2>
          <p>中国企业联络云服务开创者，金融行业智慧联络云专家</p>
      </div>
      <div class="ccod_yun">
          <h3 class="ccod_title f30" >联络云服务概述</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <div class="yunContent">
              <p style="text-indent:50px;">CCOD (Contact Cloud On Demand)按需定制的联络云服务，是青牛软件倾力打造的全媒体、智能、安全、灵活的企业云联络通信平台，帮助企业快速建立企业与客户之间全方位、多触点的沟通联络。</p>
          </div>
          <div class="yunImg">
          </div>
          <!-- <div class="yunCon">
            <p>以<span>Connecting</span>为中心，用<span>AI、BigData、Cloud</span>重构整个产品模式<br>提高企业的<span>营销效率</span>和<span>服务水平</span>,适应<span>管理变革</span>需要</p>
          </div> -->
      </div>

      <div class="ccod_yun" style="background:#F7F8FA"> 
          <h3 class="ccod_title f30" >CCOD业务全景图</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <div class="yunImg_1">
          </div>
      </div>

      <div class="ccod_advantage" >
        <div style="width:1200px;margin:0 auto;">
          <h3 class="ccod_title f30">服务优势</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <div style="margin-bottom:168px;margin-top:160px;position:relative;">
            <div class="box1">
              <p class="colorP">大容量</p>
              <p>百万级用户的平台服务能力</p>
            </div>
             <div class="box2">
              <p class="colorP">高稳定</p>
              <p>提供电信级99.99%的平台稳定性</p>
            </div>
             <div class="box3">
              <p class="colorP">安全</p>
              <p>满足客群公有云与私有云</p>
              <p>灵活部署及信息传递安全</p>
            </div>
             <div class="box4">
              <p class="colorP">AI+</p>
              <p>在人工、AI等触达服务基础上提供</p>
              <p>智能质检、智能助手等智能辅助服务</p>
            </div>
             <div class="box5">
              <p class="colorP">多渠道</p>
              <p>支持语音、视频、短信、微信等 </p>
              <p>多渠道触达客户服务能力</p>
            </div>
            <img src="../assets/img/yun1.png" alt="">

          </div>
        <!-- <div class="ulCon"> 
            <ul>
              <li v-for="(item,index) in yunArry" :key="index">
                  <p class="yunTitle">{{item.title}}</p>
                  <p class="yunCont">{{item.content}}</p>
                  <img :src="item.url" alt="">
              </li>
            </ul>
        </div> -->
        </div>
      </div>
      <div class="product" style="background:#F7F8FA">
        <h3 class="ccod_title f30" >联络云产品</h3>
         <p class="ccod_titles"><span class="line"></span></p>
        <div class="proKind">
          <p><span class="colorS">智能质检</span></p>
          <p style="text-indent:83px;">使用自然语言算法和质检规则，分析代理人与客户的沟通内容，</p>
          <p>实现实时质检与离线质检，提高代理人营销效率和客户满意度。</p>
          <div>
            <ul>
              <li @mouseover="changePro(index,1)" v-for="(item,index) of proTit" :class="{active:index==pro1}" :key="index">{{item}}</li>
            </ul>
          </div>
          <div v-show="pro1==0">
            <img src="../assets/img/pro1.png" alt="">
          </div>
           <div v-show="pro1==1">
            <img src="../assets/img/pro2.png" alt="">
          </div>
           <div v-show="pro1==2">
            <img src="../assets/img/pro3.png" alt="">
          </div>
        </div>
      </div>
      <div>
         <div class="proKind">
          <p><span class="colorS">智能助手</span></p>
          <p style="text-indent:83px;">针对代理人与客户的交互过程，实时进行关键词、静默 、语速和情绪等全方位检测，规范代理人</p>
          <p>的营销用语和服务态度；挖掘双方对话信息，在线提示潜在商机，整体提升代理人的营销效率。</p>
          <div>
            <ul>
              <li @mouseover="changePro(index,2)" v-for="(item,index) of proTit" :class="{active:index==pro2}" :key="index">{{item}}</li>
            </ul>
          </div>
          <div v-show="pro2==0">
            <img src="../assets/img/pro4.png" alt="">
          </div>
           <div v-show="pro2==1">
            <img src="../assets/img/pro5.png" alt="">
          </div>
           <div v-show="pro2==2">
            <img src="../assets/img/pro6.png" alt="">
          </div>
        </div>
      </div>
      <div>
         <div class="proKind">
          <p><span class="colorS">工作手机</span></p>
          <p style="text-indent:83px;">对代理人基于手机的营销活动进行全程管理，维护企业客户价值，保障企业客户信息安全。</p>
        
          <div>
            <ul>
              <li @mouseover="changePro(index,3)" v-for="(item,index) of proTit" :class="{active:index==pro3}" :key="index">{{item}}</li>
            </ul>
          </div>
          <div v-show="pro3==0">
            <img src="../assets/img/pro7.png" alt="">
          </div>
           <div v-show="pro3==1">
            <img src="../assets/img/pro8.png" alt="">
          </div>
           <div v-show="pro3==2">
            <img src="../assets/img/pro9.png" alt="">
          </div>
        </div>
      </div>
  </div>

</template>

<script>
  import yun1 from "@/assets/img/yun1.png";
  import yun2 from "@/assets/img/yun2.png";
  import yun3 from "@/assets/img/yun3.png";
  import yun4 from "@/assets/img/yun4.png";

export default {
    data(){
      return{
        yunArry:[
          {
            title:'强大的平台能力',
            content:'百万坐席的服务能力；全网全运营商通讯资源；私有云、公有云、混合云灵活选择。',
            url:yun1
          },{
            title:'自主知识产权',
            content:'百万坐席的服务能力；全网全运营商通讯资源；私有云、公有云、混合云灵活选择。',
            url:yun2
          },{
            title:'全国话务落地的能力',
            content:'百万坐席的服务能力；全网全运营商通讯资源；私有云、公有云、混合云灵活选择。',
            url:yun3
          },{
            title:'依客户需求而组建的专属服务', 
            content:'百万坐席的服务能力；全网全运营商通讯资源；私有云、公有云、混合云灵活选择。',
            url:yun4
          }
        ],
        proTit:["架构", "特点","优势"],
        pro1:0,
        pro2:0,
        pro3:0
      }
    },
    methods: {
      changePro (index,num){
       switch (num){
         case 1: this.pro1 = index;
         case 2: this.pro2 = index;
         case 3: this.pro3 = index;
       }
        
      }
    },
}
</script>

<style scoped>
  .ccod_title{
    font-weight: bold;
    margin-top: 79px;
  }
    .ccod_join{
      width: 100%;
      height: 560px;
      background: url('../assets/img/qingyun.png') no-repeat center;
      /* background-size: cover; */
      overflow: hidden;
    }
     .ccod_join h2{
       color: #ffffff;
       font-size: 60px;
       font-weight: 500;
       margin-top: 207px;
       margin-bottom: 30px;
     }
     .ccod_join p{
       color: #ffffff;
       font-size: 24px;
     }
     .ccod_yun{
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       height: auto;
       overflow: hidden;
     }
     .yunContent{
       width: 1000px;
       padding: 56px 0 40px;
     }
     .yunContent p{
      line-height: 28px;
       text-align: left;
        text-indent: 40px;
        font-size: 20px;
        color: #333;
        margin: 0;
     }
     .yunImg{
       width: 1138px;
       height: 523px;
       background: url('../assets/img/qing_1.png') no-repeat center;
       background-size: 100% 100%;
       margin-bottom: 80px;
     }
     .yunImg_1{
       width: 1070px;
       height: 516px;
       margin: 56px 0 80px;
       background: url('../assets/img/qing_2.png') no-repeat center;
       background-size: 100% 100%;

     }
     .yunCon{
       height: auto;
       overflow: hidden;
       margin: 31px 0 82px;
     }
     .yunCon p{
       text-align: left;
       font-size: 16px;
       color: #333;
        line-height: 24px;
     }
    .yunCon p span{
       color: #FF882F;
     }
     .ccod_advantage{
       width: 100%;
       height: auto;
       overflow: hidden;
      display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
     }
     .ccod_advantage .box1{
       position: absolute;
       top: -36%;
       left: 43%;
     }
     .ccod_advantage .box2{
       position: absolute;
       top: 23%;
       left: 16%;
     }
     .ccod_advantage .box3{
       position: absolute;
       bottom: -28%;
       left: 19%;
     }
     .ccod_advantage .box4{
       position: absolute;
       bottom: -28%;
       right: 20%;
     }
     .ccod_advantage .box5{
       position: absolute;
       top: 23%;
       right: 16%;
     }
     .ccod_advantage ul{
       width: 1200px;
       height: auto;
       overflow: hidden;
       margin: 0 auto;
       flex-wrap: wrap;
       display: flex;
     }
     
      .ccod_advantage .ulCon{
       margin-top: 80px;
      }
      .ccod_advantage .colorP{
        color:#FF5403;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 20px;
      }
     .ccod_advantage .ulCon ul li{
       width: 355px;
       height: auto;
       display: flex;
       margin-right: 103px;
       margin-left: 140px;
       float: left;
       flex-direction: column;
       align-items: center;
       padding-bottom: 66px;
     }
     .ccod_advantage .ulCon ul li .yunTitle{
        color: #FF5403;
        font-size: 18px;
        margin: 0;
        margin-bottom: 20px;
     }
     .ccod_advantage .ulCon ul li .yunCont{
       text-align: left;
       font-size: 14px;
       margin: 0;
       line-height: 24px;
     }
      .ccod_advantage .ulCon ul li img{
       margin-top: 45px;
      }
      .product{
        height: auto;
        overflow: hidden;
       
      }
      .proKind {
        width: 1200px;
        margin: 0 auto;
      }
      .proKind .colorS{
        color: #fff;
        background: #FF5403;
        display: inline-block;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 24px;
        margin: 56px 0 46px;
      }
      .proKind p{
        font-size: 20px;
        color: #333;
      }
      .proKind ul{
        width: 990px;
         display: flex;
         margin: 45px auto;
         
         align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #7A7A7A;
      }
      .proKind li{
        width: 153px;
        font-size: 18px;
        padding: 25px 0;
        cursor: pointer;
        border-bottom: 3px solid #fff;
      }
      .proKind li.active{
        color:#FF5403;
        border-bottom: 3px solid #FF5403;
      }
      .proKind img{
        margin-bottom: 80px;
      }
</style>


