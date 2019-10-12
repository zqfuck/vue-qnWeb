<template>
  <div class="wrap">
    <div class="ccod_join">
        <img style="margin:207px 0 30px 0;" src="../assets/img/logo.png">
        <h2>场景解决方案</h2>
    </div>
    <div class="senceWrap">
        <div class="ccod_scene"> 
            <h3 class="ccod_title f30">智慧营销</h3>
            <p class="ccod_titles"><span class="line"></span></p>
            <p class="sceneCon">金融行业客群在进行线上化营销时，存在4大核心诉求：“获取新客户”、“验证新客户”、“找回老客户”和“感知老客户”通过青牛的“大数据”云服务，可帮助金融行业用户快速对应解决这些问题，再通过青牛的联络云服务和AI服务触达这些目标客户，直接进行线上营销转化，具体线上触达营销方式，可结合金融行业营销的产品和目标客户灵活配置，通常营销模式支持：</p>
            <ul>
                <li><span>短信/智能短信营销：诸如信用卡逾期短信通知；新业务的智能短信推送；信贷产品目标客群短信触达营销等</span> </li>
                <li><span>IVR外呼营销：信用卡M1逾期、理财到期等IVR外呼通知</span> </li>
                <li><span>电话主动营销：理财、保险、证券、互金等目标客群电话外呼营销</span> </li>
                <li><span>视频直播场景营销：线上多渠道的视频场景化营销</span> </li>
                <li><span>机器人外呼营销：智能语音机器人外呼营销（代替人工）</span> </li>
                <li><span>人工辅助外呼营销：“人+机”模式电话外呼营销【降低成本，保障营销效果】</span> </li>
            </ul>
            <div class="sceneImg_1">
              <img src="../assets/img/chang_1.png" alt="">
            </div>
        </div>
    </div>

    <div   class="senceWrap" style=" background:#f8f8f8;">
        <div class="ccod_scene"> 
            <h3 class="ccod_title f30">智慧客服</h3>
            <p class="ccod_titles"><span class="line"></span></p>
            <p class="sceneCon">在金融行业“服务即营销”理念深入人心，客户每一次主动触达，即是一次营销机会。因此为了更好的服务于金融行业客户 (涵盖潜在客户)，通常金融行业会提供多种客服服务接入渠道，诸如热线电话、官网、小程序、微信服务号、APP等，方便用户 快速接入。当用户接入之后，如何提升客服满意度？提高客服的运营效率？降低整个客服运营成本？深层次挖掘客户价值？</p>
            <ul style="width: 864px;">
                <li><span>可集成青牛成熟的云服务实现，当用户接入青牛的智能路由，首先结合金融企业的用户体系进行用户级别确认（潜在用户、 普通客户、VIP客户...),再结合用户接入的媒体方式（文本、语音、视频）以及更高级的路由配置策略，后台动态分配机器人 (文本机器人、语音机器人）或人工坐席进行服务，不管是机器人还是人工，在面向用户进行客服时，会同步获取用户的接 入方式、客户等级、浏览轨迹、以及以前的会话记录，通过后台大数据智能分析用户的诉求，更有针对性的服务于用户，而 且在服务过程中，后台系统也会同步针对客户交互的内容，进行质检，结合大数据分析预判客户意愿和诉求，指导机器人或 人工坐席的客服话术，整体提升用户客服的满意度，而且在客服服务过程中通过转介绍的方式实现营销转化，降低金融企业 客服的运营成本，整体提高金融企业的运营效率。</span> </li>
            </ul>
            <div class="sceneImg_2">
              <img src="../assets/img/chang_2.png" alt="">
            </div>
        </div>
    </div>
            
  </div>
</template>

<script>
export default {
    data(){
      return{

      }
    }
}
</script>

<style>
     .ccod_join{
      background: url('../assets/img/chang.png') no-repeat;
      min-width: 1420px;
      height: 560px;
      background-size: 100% 100%;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
     .ccod_join h2{
       color: #ffffff;
       font-size: 50px;
       font-weight: 500;
     }
     .senceWrap{
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         background:#ffffff;
     }

     .ccod_scene{
         height: auto;
         overflow: hidden;
        width: 1200px;
       display: flex;
       flex-direction: column;
       align-items: center;
     }
     .ccod_title{
       font-weight: bold;
       margin-top: 79px;
     }
     .sceneCon{
         text-align: left;
         color: #333;
         font-size: 20px;
        line-height: 28px;
         text-indent: 40px;
         margin-top: 80px;
       margin-bottom: 47px;
     }
     .ccod_scene ul{
         width: 760px;
        margin-bottom: 60px;
     }
     .ccod_scene ul li{
         color: #6C86C5;
         list-style-type: disc;
         text-align: left;
       font-size: 16px;
       line-height: 24px;
     }
     .ccod_scene ul li span{
         color: #333;
     }
     .sceneImg_1{
        margin-bottom: 80px;
     }
     .sceneImg_2{
       width: 1160px;
       height: 594px;
       display: flex;
       align-items: center;
       justify-content: center;
       background: #fff;
       margin-bottom: 80px;
       border:1px solid rgba(230,230,230,1);
     }
</style>
