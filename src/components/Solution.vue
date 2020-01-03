<template>
  <div class="wrap">
    <div class="ccod_join">
        <img style="margin: 207px 0 30px" src="../assets/img/logo.png">
        <h2 class="f30">行业解决方案</h2>
    </div>
    <div class="ccod_AI_detail" >
      <h3 class="ccod_title f30" >银行</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <!--<div class="ccod_solution_1"></div>-->

        <div class="ccod-solutions">
          <div class="hangOne" v-for="(item, index) in ciyiList" @mouseover="changeBank(index)" :key="index">
            <span class="classBank" :class="bankIndex==index ? 'active_' : ''">{{item.bankName}}</span>
            <div class="cercals" :class="bankIndex==index ? 'active_' : ''">
              <span class="lineSpan"></span>
            </div>
          </div>
      </div>

      <div class="ccod_solution_2" v-for="(item,index) in ciyiList" :key="index" v-show="bankIndex===index">
        <div class="imgBox">
          <img  :src="item.info.url" alt="">
        </div>
        <div class="ccod_con">
          <p style='font-size:20px;margin-bottom: 30px;'>{{item.info.hangName}}</p>
          <p style="font-size:16px;margin-bottom: 27px;">{{item.info.changjing}}</p>
          <p style="font-size:16px;">{{item.info.fnagan}}</p>
        </div>
      </div>
    </div>
    <div class="ccod_AI_detail" style="background: #F8F8F8;">
      <h3 class="ccod_title f30" >保险</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <div class="ccod_solution_3">
        <div class="solution_list">
          <div class="listImg">
            <img src="../assets/img/bx1.png" alt="">
          </div>
          <h5>中国平安</h5>
          <p>业务场景: 财险、寿险呼入呼出坐席</p>
          <p>解决方案: 联络云、预测外拨,集中职场部署</p>
        </div>

        <div class="solution_list">
          <div class="listImg">
            <img src="../assets/img/bx2.png" alt="">
          </div>
          <h5>阳光保险</h5>
          <p>业务场景: 财险、寿险呼入呼出坐席</p>
          <p>解决方案: 联络云、预测外拨,集中职场部署、分布式部署</p>
          <p>业务场景: 多个职场每日晨会培训,宣导政策制度及产品信息</p>
          <p>解决方案: 视频会议,无需拉视频专线,费用低、接入快</p>
        </div>

        <div class="solution_list">
          <div class="listImg">
            <img src="../assets/img/bx3.png" alt="">
          </div>
          <h5>大地保险</h5>
          <p>业务场景: 财险、寿险呼入呼出坐席</p>
          <p>解决方案：联络云、预测外拨，集中职场部署、分布式部署</p>
          <p>业务场景：多个职场每日晨会培训，宣导政策制度及产品信息</p>
          <p>解决方案：视频会议，无需拉视频专线，费用低、接入快</p>
        </div>

        <div class="solution_list" style="margin-right:0;">
          <div class="listImg">
            <img src="../assets/img/bx4.png" alt="">
          </div>
          <h5>太平洋保险</h5>
          <p>业务场景: 财险、寿险呼出坐席</p>
          <p>解决方案: 联络云,集中职场部署</p>
          <p>业务场景: 存量客户失联,通过保单上联系方式无法触达客户本人</p>
          <p>解决方案: 大数据,客户续联</p>
        </div>
      </div>
    </div>
    <div class="ccod_AI_detail" style="background: #363A4B;color: #fff;position: relative;">
      <img style="position: absolute;left: 16%;top: 99px" src="../assets/img/def_money.png" alt="">
      <img style="position: absolute;right: 16%;bottom: 0" src="../assets/img/def_fund.png" alt="">
      <h3 class="ccod_title f30">证券/基金/财富</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <div class="ccod_solution_4">
        <div class="jia_ borderBox">
          <h5>嘉实财富</h5>
          <div>
            <p>业务场景: 财富产品推广宣传</p>
            <p>解决方案: 视频直播服务,包含直播室装修建设,设备配备</p>
            <p>业务场景: 私募产品内部培训</p>
            <p>解决方案: 视频会议扩建,在原有视频会议系统上接入直播设备，过程直播及录制，视频后续上传至e-learning系统</p>
          </div>
        </div>
        <div class="heng_ borderBox">
          <h5>恒天财富</h5>
          <div>
            <p>业务场景: 财富产品推广宣传</p>
            <p>解决方案: 视频直播服务</p>
            <p>业务场景: 公司内部分公司间培训</p>
            <p>解决方案: 视频直播服务,搭配极直播客户端,PC直接发起直播</p>
          </div>
        </div>
        <div class="zhang_ borderBox">
          <h5>掌众金融</h5>
          <div>
            <p> 业务场景: P2P贷款催收，呼出坐席</p>
            <p> 解决方案: 联络云，集中职场部署</p>
          </div>
        </div>
        <div class="hua_ borderBox">
          <h5>华道数据</h5>
          <div>
            <p>业务场景: 信用卡发卡、催收，呼出坐席</p>
            <p>解决方案: 联络云，集中职场部署</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ccod_AI_detail">
      <h3 class="ccod_title f30">IT及互联网</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <div class="ccod_solution_5">
        <ul>
          <li>
            <div class="solution_5_img">
              <img src="../assets/img/t_1.png" alt="">
            </div>
            <p>京东金融</p>
            <div class="hoverBj">
              <p class="p1">业务场景: 京东校园白条开通环节</p>
              <p>解决方案: 视频云,视频面签、风险揭示,帮助在校大学生远程审核 开通白条业务</p>
            </div>
          </li>
          <li class="">
            <div class="solution_5_img">
              <img src="../assets/img/t_2.png" alt="">
            </div>
            <p>网易</p>
            <div class="hoverBj">
              <p class="p1">业务场景: 网易贵金属电话销售和客户服务,呼入呼出坐席</p>
              <p>解决方案: 联络云,集中职场部署</p>
            </div>
          </li>

          <li>
            <div class="solution_5_img">
              <img src="../assets/img/t_3.png" alt="">
            </div>
            <p>搜房网</p>
            <div class="hoverBj">
              <p class="p1">业务场景: 房产经纪人主动电话营销,呼出坐席</p>
              <p>解决方案: 联络云,集中职场部署</p>
            </div>
          </li>

          <li style="margin-right: 0;">
            <div class="solution_5_img">
              <img src="../assets/img/t_4.png" alt="">
            </div>
            <p>搜狐焦点</p>
            <div class="hoverBj">
              <p class="p1">业务场景: 楼盘页面中,客户拨打“400+分机号”转接客服或楼盘销售,呼入坐席</p>
              <p>解决方案: 联络云,分布式部署</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="ccod_AI_detail" style="background: #F8F8F8;">
      <h3 class="ccod_title f30" >政府、传统行业与其他</h3>
      <p class="ccod_titles"><span class="line"></span></p>
      <div class="ccod_solution_6">
          <div class="solution_6_list" style="margin-right: 86px;">
            <div class="solution_6_img">
              <img src="../assets/img/d_1.png">
            </div>
            <div class="pList">
              <p class="pClass">中国地震局</p>
              <p class="pCon">业务场景：国家地震局及各省市地震局客服热线，呼入坐席</p>
              <p class="pCon">解决方案：联络云，分布式部署</p>
            </div>
          </div>

          <div class="solution_6_list">
            <div class="solution_6_img">
              <img src="../assets/img/d_2.png">
            </div>
            <div class="pList">
              <p class="pClass">长城汽车</p>
              <p class="pCon">业务场景：400热线客服中心,呼入坐席</p>
              <p class="pCon">解决方案：联络云，集中职场部署</p>
            </div>
          </div>


          <div class="solution_6_list" style="margin-right: 86px;">
            <div class="solution_6_img">
              <img src="../assets/img/d_3.png">
            </div>
            <div class="pList">
              <p class="pClass">志高空调</p>
              <p class="pCon">业务场景：400热线客服中心， 呼入坐席 </p>
              <p class="pCon">解决方案：联络云，分布式部署</p>
            </div>

          </div>

          <div class="solution_6_list">
            <div class="solution_6_img">
              <img src="../assets/img/d_4.png">
            </div>
            <div class="pList">
              <p class="pClass">上海社保局</p>
              <p class="pCon">业务场景：社保业务咨询，业务服务，客户回访</p>
              <p class="pCon">解决方案：联络云，集中职场</p>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  import beijingImg from "@/assets/img/b_1.png";
  import jiaotImg from "@/assets/img/b_2.png";
  import huarImg from "@/assets/img/b_3.png";
  import yilImg from "@/assets/img/b_4.png";
export default {
    data(){
      return{
        bankIndex:1,
          ciyiList:[
            {
                 bankName:'交通银行',
                  info:
                    {
                      url:jiaotImg,
                      hangName:'交通银行',
                      changjing:'业务场景：信用卡发卡、催收，呼出坐席, 提升客户活跃度与满意度，邀请知名经济人士讲课',
                      fnagan:'解决方案：联络云，集中职场部署 ,视频直播服务'
                    }

            },
            {
                 bankName:'北京银行',
                  info:
                    {
                      url:beijingImg,
                      hangName:'北京银行',
                      changjing:'业务场景：400客服，呼入坐席',
                      fnagan:'解决方案：联络云，集中职场部署'
                    }

            },{
                 bankName:'华润银行',
                  info:
                    {
                      url:huarImg,
                      hangName:'华润银行',
                      changjing:'业务场景：呼入呼出坐席',
                      fnagan:'解决方案：联络云，集中职场部署'
                    }

            },{
                 bankName:'亿联银行',
                  info:
                    {
                      url:yilImg,
                      hangName:'亿联银行',
                      changjing:'业务场景：400客服，呼入坐席',
                      fnagan:'解决方案：联络云，集中职场部署'
                    }

            }
          ]
      }
    },
  methods:{
    changeBank (inx) {
      this.bankIndex = inx
    }
  }
}
</script>

<style scoped>
 
    .ccod_join{
      background: url('../assets/img/jiejue.png') no-repeat center;
      min-width: 1360px;
      height: 560px;
      /* background-size: 100% 100%; */
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
     .ccod_join h2{
       color: #ffffff;
       font-size: 50px;
       font-weight: 500;
     }
    .ccod_AI_detail{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      align-items: center;
    }
     .ccod_title{
       font-weight: bold;
       margin-top: 79px;
     }

     .ccod_solution_1{
       width: 100%;
       height: 100px;
       background: url('../assets/img/yin.png') no-repeat;
       background-size: 100% 100%;
     }
     .ccod_solution_2{
        margin: 100px 0;
       margin-bottom: 70px;
       height: auto;
       display: flex;
       align-items:center;
       justify-content: space-around;
       min-height: 188px;
     }
     .imgBox{
       width:238px;
       height:136px;
       display: flex;
       align-items: center;
       justify-content: center;
       background:rgba(255,255,255,1);
       box-shadow:0px 2px 6px 1px rgba(0, 0, 0, 0.09);
       border-radius:20px;
       margin-right: 140px;
     }
    .ccod_con{
      width: 250px;
    }
     .ccod_con p{
       text-align: justify;
       color: #333;
     }
     .ccod_solution_3{
      margin-top: 80px;
       height: auto;
       display: flex;
     }
     .ccod_solution_3 .solution_list{
       width: 255px;
       margin-right:46px;
       min-height: 372px;
       display: flex;
       cursor: pointer;
       flex-direction: column;
       margin-bottom: 78px;
       transition: all ease 0.3s;
       -moz-transition:all ease 0.3s; /* Firefox 4 */
       -webkit-transition:all ease 0.3s; /* Safari and Chrome */
       -o-transition:all ease 0.3s; /* Opera */
     }
    .ccod_solution_3 .solution_list:hover{
      margin-top: -50px;
    }
      .ccod_solution_3 .solution_list h5{
        text-align: left;
        margin: 0;
        color: #333;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 19px;
      }
      .ccod_solution_3 .solution_list p{
        color: #333;
        font-size: 16px;
        text-align: justify;
        line-height: 24px;
      }
     .ccod_solution_3 .solution_list img{
       width: 100%;
       height: 100%;
       margin-bottom: 29px;
     }
     .ccod_solution_4{
        display: flex;
       width: 1100px;
       margin-top: 90px;
       margin-bottom: 70px;
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
     }
    .ccod_solution_4 .borderBox{
      /*padding: 60px 27px 0;*/
      width: 469px;
      text-align: left;
      position: relative;
    }
    .ccod_solution_4 .borderBox h5{
      position: absolute;
      left: 27px;
      top:50px ;
      font-size: 20px;
    }
    .ccod_solution_4 .borderBox div{
      font-size: 16px;
      position: absolute;
      left: 27px;
      top: 95px;

    }
    .ccod_solution_4 .borderBox.zhang_ h5,.ccod_solution_4 .borderBox.hua_ h5{
      position: absolute;
      left: 27px;
      top:84px ;
      font-size: 20px;
    }
    .ccod_solution_4 .borderBox.zhang_ div,.ccod_solution_4 .borderBox.hua_ div{
      font-size: 16px;
      position: absolute;
      left: 27px;
      top: 130px;

    }
     .ccod_solution_4 .jia_{
       height: 230px;
       margin-right: 129px;
       background: url("../assets/img/icon_jiashi.png") no-repeat center;
       background-size: 100% 100%;
     }
    .ccod_solution_4 .heng_{
      height: 230px;
      background: url("../assets/img/icon_hengtian.png") no-repeat center;
    }
    .ccod_solution_4 .zhang_{
        height: 230px;
      margin-right: 129px;
        background: url("../assets/img/icon_zhongzhang.png") no-repeat center;

      }
    .ccod_solution_4 .hua_{
      height: 230px;
      background: url("../assets/img/icon_huadao.png") no-repeat center;
    }

     .ccod_solution_6{
      width: 1100px;
    display: flex;
       flex-wrap: wrap;
       height: auto;
       position: relative;
       margin-top: 100px;
     }
     .ccod_solution_6:after{
       position: absolute;
       content: '';
       width: 1px;
       height: 400px;
       background: #DBDBDB;
       left: 48.8%;
       top: -30px;
     }
    .ccod_solution_6:before{
      position: absolute;
      content: '';
      width: 1100px;
      height: 1px;
      background: #DBDBDB;
      left: -10px;
      top: 38%;
    }
     .solutionContent{
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 20px 0;
       /*border:1px solid red;*/
     }
     .solution_6_list{
        text-align: left;
        display: -webkit-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
       margin-bottom: 110px;

     }
    .solution_6_list .pList{
      width: 240px;
    }
     .solution_6_list .pList .pClass{
        margin: 0;
        margin-bottom:20px;
        text-align: left;
        font-size: 18px;
        color: #333;
        font-weight: 600;
     }
      .solution_6_list .pList .pCon{
        text-align: left;        
        margin: 0;
        font-size: 16px;
        line-height: 24px;
        height: auto;
        overflow: hidden;
        color: #333;
     }
     .solution_6_img{

       margin-right: 50px;
     }
     .solution_6_img img{
        width: 194px;
       height: 80px;
     }
     .ccod_solution_5{
       margin: 80px 0;
     }
     .ccod_solution_5 ul{
       width: 100%;
       height: auto;
       display: flex;
       align-items: center;
       justify-content: space-around;
     }
     .ccod_solution_5 ul li{
       width:245px;
       height:245px;
       background:rgba(255,255,255,1);
       box-shadow:0px 0px 9px 1px rgba(60,60,60,0.11);
       display: flex;
       flex-direction: column;
       align-items: center;
      position: relative;
       cursor: pointer;
       margin-right: 25px;
     }
    .ccod_solution_5 ul li .hoverBj{
       position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: #444D70;
      color: #FFFFFF;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 18px;
      opacity: 0;
      transition: all ease 0.3s;
      -moz-transition:all ease 0.3s; /* Firefox 4 */
      -webkit-transition:all ease 0.3s; /* Safari and Chrome */
      -o-transition:all ease 0.3s; /* Opera */
      text-align: justify;
     }
    .ccod_solution_5 ul li .hoverBj .p1{
      margin: 80px 0 24px;
    }

     .ccod_solution_5 ul li:hover .hoverBj{
        opacity: 1;
     }
     .solution_5_img{
       width: 190px;
       height: 58px;
       margin: 78px 0 58px;
     }
     .solution_5_img img{
       width: 100%;
       height: 100%;
     }
    .ccod_solution_5 .list_two{
       background: #444D70;
       color: #FFFFFF;
       font-size: 16px;
     }
     .list_two p{
        width: 80%;
        text-align: left;
        margin:0;
     }
     .ccod-solution-wrap{
       width: 100%;
       height: auto;
       overflow: hidden;
     }
     .classBank{
       font-size: 20px;
       position: relative;
       left: -117px;
       top: -23px;
       cursor: pointer;
     }
      .ccod-solutions{
       width: 724px;
        margin-top: 80px;
        display: -webkit-box;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #D6D6D6;
     }
     .hangOne{
       width: 241px;
       position: relative;
       cursor: pointer;
     }
    .active_.classBank{
      color: #4565B6;
    }
     .active_.cercals{
       background: url('../assets/img/circle_blue.png') no-repeat;
       width: 22px;
       height: 22px;
       top: 14px;
     }
    .cercals{
       position: absolute;
      top: 15px;
      left: -8px;
        width: 22px;
        height: 22px;
        background: url('../assets/img/circle_disabled.png') no-repeat center;
        background-size: 100% 100%;
        cursor: pointer;
     }
     .cercals:hover{
        background: url('../assets/img/circle_blue.png') no-repeat;
        width: 22px;
        height: 22px;
       top: 14px;
     }
     .ccod-solutions .lineSpan{
      /* position: absolute;
       top: 9px;
       left:15px;
       width: 240px;
       display: inline-block;
       border-bottom: 2px solid #ccc;*/
     }
     .ccod-solution-wrap .ccod-solutions .cercals .cercal-dian{
       width: 8px;
       height: 8px;
       display: block;
       background: #333;
     }
</style>


