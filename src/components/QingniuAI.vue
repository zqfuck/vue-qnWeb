<template>
  <div class="wrap">
      <div class="ccod_join">
        <h2>AI服务</h2>
        <p>融合AI服务，让企业服务轻松自如</p>
      </div>
      <div class="aiContent" style="background: #fff;">
        <h3 class="ccod_title f30" >AI服务概述</h3>
        <p class="ccod_titles"><span class="line"></span></p>

        <div class="ccod_AI_detail">
          <p>基于语音识别、语音合成、自然语言理解等技术，提供“懂你、会说、能办事”的在线人机沟通服务。</p>
        </div>

        <div class="detailImg_1">
          <img src="../assets/img/p1.png" alt="">
        </div>
      </div>

      <div class="aiContent" style="background: #F7F8FA;">
        <h3 class="ccod_title f30" >服务优势</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <!-- <div class="ccod_AI_detail">
          <p>智能助手即文本机器人，通过问答、闲聊、知识图谱、覆盖多业务场景，实现真正的自然对话场景， 一问一答、多轮会话、情绪识别，各种复杂任务轻松应对。</p>
          <p>广泛应用于信息咨询、售前售后服务、重复性查询、辅助人工查询等领域，减轻客服负担，解放企业 人力资源。</p>
        </div> -->
         <div class="detailImg_1">
          <img src="../assets/img/p2.png" alt="">
        </div>
      </div>

       <div class="aiContent" >
         <h3 class="ccod_title f30">语音（文本）机器人</h3>
         <p class="ccod_titles"><span class="line"></span></p>
         <div class="ccod_AI_detail" >
           <p>拟人的语音（文本）交互、精确理解用户意图、进行业务处理。</p>
         </div>
        <div class="detailImg_1">
          <img src="../assets/img/p3.png" alt="">
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
      /* background-size: 100% 100%; */
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
   
       .ccod_AI_detail{
        /* width:890px; */
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
        /* text-indent:40px; */
    }
    .detailImg_1{
      
     margin: 54px 0 80px;
     
    }
   
  
</style>


