<template>
  <div class="wrap">
    <div id="ccod_banner">
        <div class="imgPic">
              <el-carousel arrow="never" :interval="3000" height="560px" style= "overflow-x:hidden;">
                  <el-carousel-item>
                    <img style="width:100%;height:100%;" src="../assets/img/b01.png" alt="">
                    <div style="width:100%;display: flex;justify-content: center;position: absolute;top: 160px;">
                      <img  src="../assets/img/lo_.png">
                    </div>
                    <div class="textBox textBox1">
                      <div class="leftT">2006</div>
                      <div class="rightT">
                        <p>构建中国最早的基于SaaS的云计算联络中心。</p>
                        <p>12年云联络中心运营经验，18年呼叫中心服务品牌。</p>
                      </div>
                    </div>
                   <div class="detailBox">
                     <router-link to="/AboutUs"><div class="goDetail">了解详情</div></router-link>
                   </div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <img style="width:100%;height:100%;" src="../assets/img/b02.png" alt="">
                    <div style="width:100%;display: flex;justify-content: center;position: absolute;top: 160px;">
                      <img  src="../assets/img/lo_.png">
                    </div>
                    <div class="textBox textBox2">
                      <div class="leftT" style="margin-bottom: 20px;">150,000+</div>
                      <div style="font-weight: bold;font-size: 18px">联络云平台在线坐席超15万。</div>
                    </div>
                    <div class="detailBox">
                      <router-link to="/AboutUs"><div class="goDetail">了解详情</div></router-link>
                    </div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <img style="width:100%;height:100%;" src="../assets/img/b03.png" alt="">
                    <div style="width:100%;display: flex;justify-content: center;position: absolute;top: 160px;">
                      <img  src="../assets/img/lo_.png">
                    </div>
                    <div class="textBox">
                      <div class="leftT">3000</div>
                      <div class="rightT">
                        <p>服务3000多家大型企业和数百万家中小企业，</p>
                        <p>客户遍布全中国。</p>
                      </div>

                    </div>
                    <div class="detailBox">
                      <router-link to="/AboutUs"><div class="goDetail">了解详情</div></router-link>
                    </div>
                  </el-carousel-item>
                  <el-carousel-item>
                    <img style="width:100%;height:100%;" src="../assets/img/b04.png" alt="">
                    <div style="width:100%;display: flex;justify-content: center;position: absolute;top: 160px;">
                      <img  src="../assets/img/lo_.png">
                    </div>
                    <div class="textBox textBox3">
                      <div class="rightT">
                        <p>每天完成数千万次客户联络,</p>
                        <p> 每年创造数千亿元销售收入，</p>
                        <p> 每年覆盖五亿C端用户人群。</p>
                      </div>
                    </div>
                    <div class="detailBox">
                      <router-link to="/AboutUs"><div class="goDetail">了解详情</div></router-link>
                    </div>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <!--<div>
              <button>了解详情</button>
            </div>-->
      </div>
    <h3 class="ccod_title f30 f_bold" style="margin-top:80px;">青牛云服务总览</h3>
    <p class="ccod_titles"><span class="line"></span></p>
    <div class="banIndex">

        <div class="ccod_ba">
            <div class="ba_img_1"></div>
            <!--<ul>-->
              <!--<li>智慧营销</li>-->
              <!--<li>智慧客服</li>-->
            <!--</ul>-->
        </div>


        <div class="ccod_qing">
          <div class="ccod_qingniu">
              <img src="../assets/img/img_1.png">
              <h3>联络云</h3>
              <span>多媒体客服、电弧营销</span>
          </div>
          <div class="ccod_qingniu">
            <img src="../assets/img/img_2.png">
            <h3>大数据</h3>
            <span>获客、续联、验真、知客</span>
          </div>
          <div class="ccod_qingniu">
            <img src="../assets/img/img_3.png">
            <h3>AI</h3>
            <span>(文本/语音)机器人</span>
         </div>
      </div>

    <div class="ccod_ba">
        <div class="ba_img_2"></div>
    </div>

 </div>


    <div class="ccod_detail">
      <div class="ccod_detail_1" style="background:#f8f8f8;">
        <div class="ccod_detail_list" style="margin-right: 103px;">
          <h3 class="f30">联络云</h3>
          <p>中国企业联络云服务开创者，金融行业智慧联络云专家。</p>
          <p> 2006年创建和中国网通搭建全国范围的SaaS呼叫中心平台，</p>
          <p>平安、太保、阳光、大地、交行等各大金融公司的一致选择。</p>
          <router-link to="/QingYun"><button>了解详情</button></router-link>
        </div>
        <img src="../assets/img/img_4.png">
      </div>

      <div class="ccod_detail_1">
        <img src="../assets/img/img_5.png">        
        <div class="ccod_detail_list"  style="margin-left: 103px;">
          <h3 class="f30">大数据</h3>
          <p>
            帮助企业精准地找到客户。
          </p>
          <p>合规合法，高效便捷。</p>
          <router-link to="/QingniuVideo"><button>了解详情</button></router-link>

        </div>
      </div>

      <div class="ccod_detail_1" style="background:#f8f8f8;">
        <div class="ccod_detail_list " style="margin-right: 103px;">
          <h3 class="f30">AI</h3>
          <p>领先的AI技术核心，完整解决方案，</p>
          <p>微服务架构，人机紧密结合，</p>
          <p>智慧客服五大产品线、全行业整体解决方案。</p>
          <router-link to="/QingniuAI"><button>了解详情</button></router-link>
        </div>
        <img src="../assets/img/img_6.png">
      </div>
    </div>
     
    <!--<p></p>-->
    <h3 class="ccod_title f30" style="margin-top:80px;font-weight: bold;">合作伙伴</h3>
    <p class="ccod_titles"><span class="line"></span></p>
    <div style="background: #fff;padding-top: 32px;"></div>
    <div class="ccod_partner">
      <img src="../assets/img/partner.png" alt="">
    </div>
    <div style="background: #fff;padding-bottom: 70px;"></div>
  </div>

 

</template>

<script>
export default {
  data(){
    return{
      isShow:false
    }
  },
  methods:{
      hoverMenuItem() {
          this.isShow = !this.isShow;
      }
  }
}
</script>

<style >
  .ccod_title{
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .ccod_titles{
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .line{
    width: 62px;
    height: 3px;
    display: inline-block;
    margin-top: 20px;
    background: #ff882f;
  }
  .ccod_qing{
    width: 900px;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;    
  }
  .ccod_qingniu{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 155px;
  }
  .ccod_qingniu img{
    width: 87px;
    height: 101px;

  }
  .ccod_qingniu h3{
    margin: 37px 0 24px;
  }
  .ccod_partner{
    width: 100%;
    height: 700px;
   /* background: url('../assets/img/partner.png') no-repeat center;
    background-size: 100% 100%;*/
    background: #fff;
    cursor: pointer;
  }
  .ccod_detail{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .detailBox{
    position: absolute;left: 0;bottom: 100px;display: flex;justify-content: center;width: 100%;
  }
  .goDetail{
    display: inline-block;
    width: 130px;
    height: 35px;
    background: rgba(255, 255, 255, 0.8);
    color: #000;
    line-height: 35px;
    margin-top: 24px;
    cursor: pointer;
    transition: 0.5s ease all;
    -moz-transition:0.5s ease all; /* Firefox 4 */
    -webkit-transition:0.5s ease all; /* Safari and Chrome */
    -o-transition:0.5s ease all; /* Opera */
  }

  .goDetail:hover {
    background: #fff;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
  }
  .ccod_detail_1{
  height: 400px;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .ccod_detail_1 a{
    color:inherit;
  }
  .ccod_detail_list p{
    font-size: 18px;
    line-height: 28px;
    color: #333;
    text-align: left;
  }
  .ccod_detail_list h3{
    margin-bottom: 40px;
    font-weight: bold;
  }
   .ccod_detail_list button{
     border: 0;
     width: 130px;
     height: 35px;
     line-height: 35px;
     text-align: center;
     background: #555;
     color: #fff;
     font-size:14px;
     margin-top:55px;
     outline: none;
   }
  .ccod_detail_list button:hover{
    background: #fff;
    color: #000;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  }
    #ccod_banner{
         position: relative;
         width: 100%;
         height: 560px;
     }
      #ccod_banner .imgPic{
        width: 100%;
        height: 560px;
      }
      .el-carousel--horizontal{
        height: 560px;
      }
  .el-carousel__container {
    width: 100%;
    height: 560px;
    position: absolute!important;

  }
  #ccod_banner .el-carousel .el-carousel-item img{
       width: 100%;
       height: 100%;
     }
  .el-carousel__indicators--horizontal{
    bottom: 50px!important;
  }

  .el-carousel__indicator.is-active button{
    background: #FFBA00!important;
  }
  .el-carousel__item{
    position: absolute;
  }
  .el-carousel__item .textBox{
    position: absolute;
    left: 0;
    top: 310px;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    line-height: 30px;
    align-items: center;
  }
  .textBox1{
    /*bottom: 180px;*/
  }
 .textBox2{
    flex-direction: column;
    /*bottom: 160px!important;*/
  }
 .textBox3{
   flex-direction: column;
   /*bottom: 160px!important;*/
 }
  .textBox .leftT{
    font-size: 60px;
    font-weight: bold;
    margin-right: 11px;
  }
  .textBox .rightT{
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
     .ccod_ba{
       width: 100%;
       display: flex;
       justify-content: center;
       /*display: none;*/
     }
      .ccod_ba .ba_img_1{
        width: 862px;
        height: 0px;
        margin-top: 40px;
        background: url('../assets/img/smart.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .ccod_ba .ba_img_2{
        width: 1200px;
        height: 0px;
        margin-top: 30px;
        background: url('../assets/img/tel_.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .ccod_ba ul{
        width: 40%;
        padding: 0 30%;
        display: flex;
        justify-content: space-around;
      }
      .ccod_ba ul li{
        border: 1px dashed #ccc;
        padding: 5px 15px;
      }
    .ccod_ba .ba_img_1,.ccod_ba .ba_img_2{
      transition: all 0.3s;
      -moz-transition: all 0.3s; /* Firefox 4 */
      -webkit-transition: all 0.3s; /* Safari 和 Chrome */
      -o-transition: all 0.3s;
    }
    .banIndex{
      padding-bottom: 50px;
    }
    .banIndex:hover .ccod_ba .ba_img_1{
          height: 178px;
          transition: all 0.3s;
          -moz-transition: all .06s; /* Firefox 4 */
          -webkit-transition: all 0.3s; /* Safari 和 Chrome */
          -o-transition: all 0.3s;
        }
        .banIndex:hover .ccod_ba .ba_img_2{
          height: 240px;
          transition: all 0.3s;
          -moz-transition: all 0.3s; /* Firefox 4 */
          -webkit-transition: all 0.3s; /* Safari 和 Chrome */
          -o-transition: all 0.3s;
        }

</style>


