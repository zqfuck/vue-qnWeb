<template>
  <div class="wrap">
      <div class="ccod_join">
        <h2>AI</h2>
        <p>领先的AI技术核心，完整解决方案</p>
        <p> 微服务架构，人机紧密结合</p>
        <p> 智慧客服五大产品线、全行业整体解决方案</p>
      </div>
      <div class="aiContent" style="background: #fff;">
        <h3 class="ccod_title f30" >AI智慧客服概述</h3>
        <p class="ccod_titles"><span class="line"></span></p>

        <div class="ccod_AI_detail">
          <p>智慧客服，是结合青牛多年企业软件研发经验，及在人工智能技术上的积累，深耕各行业20年，倾力推出面向企业的应用级解决方案，包含智能助手、智能外呼、智能质检、智能坐席、工作手机五大产品线，旨在改变企业人力价值，提升运营效率。</p>
          <p>五大产品联合发力，一次性全流程完成配置，简单省力；企业按需选择产品，多样化应用， 青牛提供定制解决方案，持续专业指导。</p>
        </div>

        <div class="detailImg_1"></div>
      </div>

      <div class="aiContent" style="background: #F7F8FA;">
        <h3 class="ccod_title f30" >智能助手</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="ccod_AI_detail">
          <p>智能助手即文本机器人，通过问答、闲聊、知识图谱、覆盖多业务场景，实现真正的自然对话场景， 一问一答、多轮会话、情绪识别，各种复杂任务轻松应对。</p>
          <p>广泛应用于信息咨询、售前售后服务、重复性查询、辅助人工查询等领域，减轻客服负担，解放企业 人力资源。</p>
        </div>
        <div class="detailImg_2"></div>
      </div>

       <div class="aiContent" >
         <h3 class="ccod_title f30">智能外呼</h3>
         <p class="ccod_titles"><span class="line"></span></p>
         <div class="ccod_AI_detail" style="width: 920px;">
           <p>智能外呼即语音机器人。拖拽式可视化流程编辑、简单易操作，自定义打断、音色、反应时长、 兜底方案等，提供拟人化专业贴心语音服务；呼叫后高效质检，ASR纠错、数据分析、自定义报表， 维护轻量负荷低。</p>
           <p>广泛应用于回访、问卷调查、金融催收、失联核查、主动营销等领域，节省重复性工作，高质标 准服务、高效转化信息，提高企业人效。</p>
         </div>
         <div class="detailImg_3"></div>
       </div>


      <div class="ccod_AI aiContent" >
        <h3 class="ccod_title f30" style="color: #fff;">智能质检</h3>
        <p class="ccod_titles"><span class="line"></span></p>

        <div class="ccod_AI_detail">
        <p style="color:#fff;">智能外呼即语音机器人。拖拽式可视化流程编辑、简单易操作，自定义打断、音色、反应时长、 兜底方案等，提供拟人化专业贴心语音服务；呼叫后高效质检，ASR纠错、数据分析、自定义报表， 维护轻量负荷低。</p>
        <p style="color:#fff;">广泛应用于回访、问卷调查、金融催收、失联核查、主动营销等领域，节省重复性工作，高质标 准服务、高效转化信息，提高企业人效。</p>
      </div>
      <div class="detailImg_4"></div>
        <div style="height: 40px;background: #333;"></div>
      </div>
       
      <div class="aiContent" style="background: #fff;">
        <h3 class="ccod_title f30" style="margin-top: 40px;">智能坐席</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="ccod_AI_detail">
          <p>智能坐席，是人工客服方便快捷的智能工作台，多渠道接入、工单流转、人机协作、智能推荐、 知识库、监控服务质量、实时报表分析等功能，帮助坐席轻松应对大量客户咨询、高效连接客户。</p>
          <p>可与智能助手、智能外呼连接，多样化沟通、一站式响应，实现企业人机协作，提供高效优质服 务客户。</p>
        </div>
        <div class="detailImg_5"></div>
      </div>


      <div class="aiContent" style="background: #F7F8FA;">
        <h3 class="ccod_title f30" >工作手机</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="ccod_AI_detail">
          <p>工作手机，是帮助企业管理监控员工的强大助手，实时分析员工数据、监控敏感行为、设备定位、 人机协同聊天、批量操作，有效保护客户资源、降低沟通风险。</p>
          <p>广泛应用于销售型、顾问型、服务型企业，根除员工飞单撞单、带走客户资源、恶意辱骂、贪污 公款、故意删好友聊天记录等管理难点，实现企业智能高效管理、飞速发展。</p>
        </div>
        <div class="detailImg_6"></div>
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

<style scoped>
  .aiContent{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ccod_title{
    font-weight: bold;
    margin-top: 79px;
  }
    .ccod_join{
      width: 100%;
      height: 560px;
      background: url('../assets/img/product.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
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
      line-height: 36px;
    }
    .ccod_AI{
      width: 100%;
      /*height: 897px;*/
      background: url('../assets/img/p4.png') no-repeat center;
      cursor: pointer;
      overflow: hidden;
    }
    .ccod_AI_detail{
        width: 887px;
      padding: 78px 0 63px;
      padding-bottom: 0;
        margin: 0 auto;
        overflow: hidden;
    }
    .ccod_AI_detail p{
        text-align: left;
        font-size: 20px;
        color:#333;
        line-height: 28px;
        text-indent:40px;
    }
    .detailImg_1{
      width: 800px;
      height: 398px;
     margin: 80px 0;
      background: url('../assets/img/p1.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .detailImg_2{
      width: 800px;
      height: 386px;
      margin: 80px 0;
      background: url('../assets/img/p2.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .detailImg_3{
      width: 839px;
      height: 368px;
      margin: 80px 0;
      background: url('../assets/img/p3.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .detailImg_4{
      width: 841px;
      height: 392px;
      margin: 80px 0;
      background: url('../assets/img/p5.png') no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .detailImg_5{
      width: 747px;
      height: 321px;
      margin: 80px 0;
      background: url('../assets/img/p6.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .detailImg_6{
      width: 506px;
      height: 280px;
      margin: 80px 0;
      background: url('../assets/img/p7.png') no-repeat center;
      background-size: 100% 100%;
      cursor: pointer;
    }
</style>


