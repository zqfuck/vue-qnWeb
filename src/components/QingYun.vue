<template>
  <div class="wrap">
      <div class="ccod_join">
          <h2>联络云</h2>
          <p>中国企业联络云服务开创者，金融行业智慧联络云专家</p>
      </div>
      <div class="ccod_yun" style="background: #F7F8FA;">
          <h3 class="ccod_title f30" >联络云服务概述</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <div class="yunContent">
              <p>CCOD (Contact Cloud On Demand)即按需定制的联络云，是基于SaaS服务模式下的新一代联络中心。</p>
              <p>CCOD是青牛公司全力打造的基于运营商通信网络内按需定制的联络中心服务租用型产品，以提升企业客户的 营销效率和服务水平。</p>
          </div>
          <div class="yunImg">
          </div>
          <div class="yunCon">
            <p>以<span>Connecting</span>为中心，用<span>AI、BigData、Cloud</span>重构整个产品模式<br>提高企业的<span>营销效率</span>和<span>服务水平</span>,适应<span>管理变革</span>需要</p>
          </div>
      </div>

      <div class="ccod_yun"> 
          <h3 class="ccod_title f30" >CCOD业务全景图</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <div class="yunImg_1">
          </div>
      </div>

      <div class="ccod_advantage" style="background: #F7F8FA;">
        <h3 class="ccod_title f30">独特优势</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="ulCon"> 
            <ul>
              <li v-for="(item,index) in yunArry" :key="index">
                  <p class="yunTitle">{{item.title}}</p>
                  <p class="yunCont">{{item.content}}</p>
                  <img :src="item.url" alt="">
              </li>
            </ul>
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
        ]
      }
    }
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
      background-size: cover;
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
       padding: 78px 0 63px;
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
       width: 800px;
       height: 320px;
       background: url('../assets/img/qing_1.png') no-repeat center;
       background-size: 100% 100%;
     }
     .yunImg_1{
       width: 803px;
       height: 308px;
       margin: 80px 0;
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
</style>


