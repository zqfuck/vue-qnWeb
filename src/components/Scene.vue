<template>
  <div class="wrap">
    <div class="ccod_join">
        <img style="margin:154px 0 30px 0;" src="../assets/img/logo.png">
        <p style="font-size:36px;color:#fff;margin-bottom:24px;">行业解决方案</p>
        <h2 class="f30">智慧营销云服务</h2>
        <p style="font-size:24px;color:#fff;margin-top:24px;">提高企业服务效率和服务品质</p>
    </div>
    <div class="senceWrap">
        <div class="ccod_scene"> 
            <h3 class="ccod_title f30">智慧营销云服务</h3>
            <p class="ccod_titles"><span class="line"></span></p>
            <div class="sceneImg_1" style="margin-bottom:0px;">
              <img src="../assets/img/chang_1.png" alt="">
            </div>
            <div>
              <img src="../assets/img/solve1.png" alt="">
            </div>
        </div>
    </div>

    <div   class="senceWrap" style=" background:#f8f8f8;">
        <div class="ccod_scene"> 
            <h3 class="ccod_title f30">案例</h3>
            <p class="ccod_titles"><span class="line"></span></p>
           
            <div>
              <ul>
                <li @mouseover="changePro(index)" v-for="(item,index) of proTit" :class="{active:index==pro1}" :key="index">{{item}}</li>
              </ul>
          </div>
            <!-- <div class="sceneImg_2">
              <img src="../assets/img/chang_2.png" alt="">
            </div> -->
            <div class="sceneTit">
             
                <div class="spanL">{{solveArr[pro1].solveL}}</div>
                <div class="spanR">{{solveArr[pro1].solveR}}</div>
            
            </div>
            <div>
              <img :src="solveArr[pro1].solveImg" alt="">
            </div>
        </div>
    </div>
            
  </div>
</template>

<script>
import solve2 from '@/assets/img/solve2.png'
import solve3 from '@/assets/img/solve3.png'
import solve4 from '@/assets/img/solve4.png'

export default {
    data(){
      return{
        proTit:["银行-AI智能营销", "保险-车险精准营销","保险-代理人精准营销"],
        pro1:0,
        solveArr:[
          {
            solveL:"银行：AI智能营销",
            solveR:"某银行通过语音机器人面向目标用户进行产品营销通知。在复杂类业务场景可切换到人工进行服务，通过持续优化营销活动，整体提升营销效率和转化。",
            solveImg:solve2
          },
           {
            solveL:"保险：车险精准营销",
            solveR:"某财险公司传统由人工进行的续保业务、转保业务、非车业务改由语音机器人进行高效触达营销，修复失联用户，提升营销效率并降低费效比。",
            solveImg:solve3
          },
           {
            solveL:"保险-代理人精准营销",
            solveR:"某寿险公司通过服务商数据续联用户，实现再营销，提升营销转化效果。",
            solveImg:solve4
          }
        ]
      }
    },
     methods: {
      changePro (index){
       this.pro1 = index;
      }
    },
}
</script>

<style>
     .ccod_join{
      background: url('../assets/img/jiejue.png') no-repeat;
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
       margin-top: 80px!important;
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
        width: 990px;
         display: flex;
         margin: 45px auto;
         
         align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #7A7A7A;
      }
      .ccod_scene li{
        width: 180px;
        font-size: 18px;
        padding: 25px 0;
        cursor: pointer;
        border-bottom: 3px solid #fff;
      }
      .ccod_scene li.active{
        color:#4565B6;
        border-bottom: 3px solid #4565B6;
      }
      .ccod_scene img{
        margin-bottom: 80px;
      }
     .sceneImg_1{
        margin:56px 0 80px;
     }
     .sceneTit{
       display: flex;
       height: 40px;
       align-items: center;
       justify-content: space-around;
       margin-bottom: 56px;
     }
      .sceneTit .spanL{
       margin-right: 80px;
       font-size: 14px;
       color: #4565B6;
       position: relative;
     }
     .sceneTit .spanL:after{
       content: '';
       width: 1px;
       height: 31px;
       background: #888;
       position: absolute;
       right: -40px;
       top: -6px;
     }
     .sceneTit .spanR{
       display: flex;
       width: 480px;
       font-size: 14px;
       text-align: start;
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
