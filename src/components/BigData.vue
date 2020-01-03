<template>
  <div class="wrap">
     <div class="ccod_join">
        <h2>大数据技术</h2>
        <p>为客户更精准投递服务</p>
    </div>

    <div class="ccod_data">
          <h3 class="ccod_title f30" >大数据技术概述</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <div class="data_1">
            <p>通过青牛大数据技术，帮助企业客群在企业用户群中找出匹配产品或服务的目标用户群。</p>
          </div>
          <div class="data_Img_1">
            <img src="../assets/img/chan_1.png" alt="">
          </div>
          <!-- <ul>
            <li style="margin-right: 93px;"><img src="../assets/img/cccc.png" />对接三大运营商大数据产品</li>
            <li><img src="../assets/img/cccc.png" />服务全程合规、安全，满足金融行业业务需求</li>
          </ul> -->
    </div>

    <!-- <div class="ccod_data" style="background: #F7F8FA;">
      <h3 class="ccod_title f30" >续联产品</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <div class="data_more flex"> 
        <div class="more_news">
          <p>续联是指，在失去客户联系方式的情况下，通过大数据平台AI 智能分析，重新获得客户的有效联系方式，进而再对客户开展 相关的业务活动，使客户的效益最大化。</p>
          <p>通过续联业务可以帮助业务员节约时间成本更准确的找到客户， 大大提高工作效率的同时业绩也会有翻倍的提升，从而为企业 创造更大的价值。</p>
        </div>
        <div class="moreImg">
          <img src="../assets/img/chan_2.png" alt="">
        </div>
      </div>
    </div>


    <div class="ccod_data">
      <h3 class="ccod_title f30" >验真产品</h3>
      <p class="ccod_titles"><span class="line"></span></p>
       <div class="data_more flex"> 
        <div class="moreImg" style="margin-right: 40px;">
          <img src="../assets/img/chan_3.png" alt="">
        </div>
        <div class="more_news">
          <p>验真是指，通过大数据平台核验用户身份的真实信息，包括 二要素验真和三要素验真，为企业开展业务提供身份核实， 防止被欺诈等而遭受损失。</p>
          <p>通过验真业务可以帮助企业反欺诈，良性开展业务，预防不 良资产的出现，为企业带来更大的经济效益。</p> 
        </div>
      </div>
    </div>

     <div class="ccod_dataImg">
        <h3 class="ccod_title f30">能力优势</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <ul class="data_content">
          <li>
            <span class="data_list">一站式解决方案</span>
            <span>一站式SaaS服务</span>
            <img style='position:relative;top: -10px;' src="../assets/img/jian.png" alt="">
            <span>多终端支持</span>
            <img style='position:relative;top: -10px;' src="../assets/img/jian.png" alt="">
            <span>提升工作效率</span>
          </li>
           <li class="active">
            <span class="data_list">三网覆盖</span>
            <span>三大运营商续联数据</span>
            <img style='position:relative;top: -10px;' src="../assets/img/jian.png" alt="">
            <span>召回成功率最高到达90%以上</span>
             <img style='position:relative;top: -10px;' src="../assets/img/jian.png" alt="">
            <span>号码真实性平均70%以上</span>
          </li>
           <li>
            <span class="data_list">业务规范性</span>
            <span>业务规范</span>
             <img style='position:relative;top: -10px;' src="../assets/img/jian.png" alt="">
            <span>多重加密</span>
             <img style='position:relative;top: -10px;' src="../assets/img/jian.png" alt="">
            <span>不交易</span>
          </li>
        </ul>
    </div>

     <div class="ccod_data">
      <h3 class="ccod_title f30" >业务优势</h3>
      <p class="ccod_titles"><span class="line"></span></p>

       <ul class="ccod_yewu" >
        <li v-for="(item, index) in yewuList" :key="index" @mouseover="choiceCompanyAddress(item, index)" :class="{ChoiceFlag: choiceCompanyIndex == index}">
            <img style='width:166px;height:166px;' :src="item.url" alt="" />
            <p v-html="item.con"></p>
        </li>
      </ul>
    </div> -->

    <div class="ccod_data" style="background: #F7F8FA;">
      <h3 class="ccod_title f30">服务优势</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <!-- <p style="font-size:16px;margin: 40px 0 70px;">一站式支撑全方位解决</p> -->
      <div class="serverImg"> 
        <div class="bestServer_1  bestServer_">
           <p class="ser_tel">技术优势</p>
           <p class="ser_comtent">提供平台数据治理能力，</p>
           <p class="ser_comtent">建立业务标签体系，</p>
           <p class="ser_comtent">根据用户画像</p>
           <p class="ser_comtent">匹配个性化产品与服务。</p>
        </div>
        <div class="bestServer_2  bestServer_">
            <p class="ser_tel">服务优势</p>
           <p class="ser_comtent">快速响应客户需求，</p>
           <p class="ser_comtent">提供一站式大数据技术服务。</p>
        </div>
        <div class="bestServer_3  bestServer_">
            <p class="ser_tel">商业优势</p>
           <p class="ser_comtent">整合金融行业客群需求</p>
           <p class="ser_comtent">与运营商流量资源，</p>
           <p class="ser_comtent">快速形成商业合作与服务落地。</p>
        </div>
      </div>
    </div>
</div>

</template>

<script>
 import ye1 from "@/assets/img/ye1.png";
 import ye2 from "@/assets/img/ye2.png";
 import ye3 from "@/assets/img/ye3.png";
 import ye4 from "@/assets/img/ye4.png";
export default {
    data(){
      return{
        choiceCompanyIndex:0,
        yewuList:[
          {
            url:ye1,
            con:'用户敏感信息'+"<span style='color: #33343e;'>不出门</span>"+'真实手机号码都在'+ "<span style='color: #33343e;'>移动内网</span>"+'通过真实手机号码都在'+"<span style='color: #33343e;'>本地本网</span>"+'中继线路直接外呼客户'
          },{
            url:ye2,
            con:'与外网系统通过'+"<span style=\'color: #33343e;'>匿号传递信息</span>"+',不会涉及用户真实号码青牛的平台'+"<span style='color: #33343e;'>不接触真实号码</span>"+'统计报表中'+"<span style='color: #33343e;'>也不出现用户敏感</span>"+'信息'
          },{
            url:ye3,
            con:'录音文件'+"<span style='color: #33343e;'>随机命名不会携带用户真实号码</span>"
          },{
            url:ye4,
            con:'企业业务'+"<span style='color: #33343e;'>全程实时录音</span>"+'提供企业录音查询管理,优化业务'+"<span style='color: #33343e;'>话术管理</span>"+'供移动日常'+"<span style='color: #33343e;'>抽查业务合规管理,杜绝非报备业务使用</span>"
          }
        ]
      }
    },
  mounted () {
      $(".data_content li").hover(function () {
        $(this).addClass("active").siblings('li').removeClass("active")
      })
  },
     methods:{
       choiceCompanyAddress(item, index) {
          this.choiceCompanyIndex = index;
      },

    }
}
</script>

<style scoped>
     .ccod_join{
      width: 100%;
      height: 560px;
      background: url('../assets/img/82.png') no-repeat center;
      /* background-size: 100% 100%; */
      cursor: pointer;
       overflow: hidden;
    }
     .ccod_title{
       font-weight: bold;
       margin-top: 79px;
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
       line-height: 36px;
     }
     .ccod_data{
       width: 100%;
       overflow: hidden;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
     }
     .ccod_yewu li img{
       margin-bottom: 54px;
     }
     .data_1{
       width: 1100px;
       padding: 78px 0;
       padding-bottom: 0;
       margin: 0 auto;
       overflow: hidden;
     }
     .data_1 p{
       /* text-align: left; */
       font-size: 20px;
       color: #333;
       line-height: 28px;
     }
     .data_Img_1{
     
        cursor: pointer;

        margin: 78px 0 60px;
     }
     .ccod_data ul{
       width: 100%;
       display: flex;
       justify-content: center;
       padding-bottom: 78px;
     }
      .ccod_data ul li{
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #333;
        line-height: 24px;
        font-weight: bold;
      }
      .ccod_data ul li img{
        width: 14px;
        height: 14px;
        margin-right: 10px;
      }
      .serverImg{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
        margin-top: 80px;
      }

      .bestServer_1{
        background: url('../assets/img/s1.png') center no-repeat;
        background-size: 100% 100%;

      }
      .bestServer_2{
        background: url('../assets/img/s2.png') center no-repeat;
        background-size: 100% 100%;
      }
      .bestServer_3{
        background: url('../assets/img/s3.png') center no-repeat;
        background-size: 100% 100%;
      }
     .bestServer_{
       width: 401px;
       height: 302px;
       background-size: cover;
       color: #fff;
       transition: all ease 0.2s;
       -moz-transition:all ease 0.2s; /* Firefox 4 */
       -webkit-transition:all ease 0.2s; /* Safari and Chrome */
       -o-transition:all ease 0.2s; /* Opera */
     }
     .bestServer_:hover{
       margin-top: -40px;
       box-shadow: 0px 7px 20px #a5a5a5;
     }
      .ser_tel{
        margin-top: 30%;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        margin: 90px 0 10px;
      }
      .ser_comtent{
        width: 60%;
        padding: 0 30%;
        text-align: left;
        font-size: 16px;
        line-height: 24px;
      }
      .data_more{
        justify-content: center;
        width: 100%;
       padding: 80px 0;
      }
      .more_news{
        width: 490px;
        font-size: 18px;
        line-height: 24px;
        height: auto;
        overflow: hidden;
        margin-right: 55px;
      }
      .more_news p{
        font-size: 18px;
        color: #333;
        text-align: left;
        margin: 0;
      }
      .moreImg{
        width: 463px;
        height: 335px;
      }
      .moreImg img {
        width: 100%;
        height: 100%;
      }
      .ccod_yewu{
        margin-top: 120px;
      }
      .ccod_data .ccod_yewu li{
          width: 215px;
          display: flex;
          flex-direction: column;
          /*overflow: hidden;*/
          align-items: center;
        margin: 0 50px;
        cursor: pointer;


      }
      .ccod_yewu li p{
        text-align: left;
        font-size: 18px;
        color: #999;
        line-height: 24px;
        padding: 10px 20px;
        text-align: justify;
      }
     /*.ccod_yewu li p .black_{
       color: #333;
     }*/
     .ccod_data .ccod_yewu li.ChoiceFlag{
        width: 287px;
       height: 358px;
       padding: 38px 0 58px;
       margin-top: -50px;
        box-shadow:0px 0px 15px 3px rgba(0,52,89,0.13);
        border-bottom: 0;
      }
      /* .ccod_dataImg{
          background: url('../assets/img/p4.png') no-repeat center;
          cursor: pointer;
          width: 100%;
          height: auto;
          overflow: hidden;
          color: #fff;
        padding-bottom: 40px;
      } */
      .data_content{
        width: 100%;
        margin: 80px 0;
        height: auto;
        position: relative;
        display: flex;
        justify-content: center;
      }
       .data_content li{

          display: flex;
          flex-direction:column;
          align-items: center;
          justify-content: space-around;
          background: #fff;
          height: auto;
          float: left;
          overflow: hidden;
         font-size: 20px;
         border-radius: 8px;

       }
     .data_content li.active{

       transform:  scale(1.2);
       -webkit-transform: scale(1.2);
       -moz-transform: scale(1.1);
       -o-transform: scale(1.1);
       -ms-transform: scale(1.1);
       box-shadow: 0 1px 1px #ccc;
       font-size: 20px!important;

     }
     .data_content li.active .data_list{
       background:#5877c3 ;
       color: #fff;
     }
        .data_content li span{
          color: #333;
          width: 330px;
          height: 96px;
          line-height: 96px;
          border-bottom: 1px solid #ECECEC;
        }

</style>


