<template>
  <div class="wrap">
    <div class="ccod_join">
        <img style="margin:207px 0 30px 0;" src="../assets/img/logo.png">
        <h2>关于我们</h2>
    </div>
    <div class="ccod_company">
        <h3 class="ccod_title f30" >公司介绍</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="pContent">
            <p class="Pcon">青牛（北京）技术有限公司是中国领先的企业云服务提供商，致力于提高中国企业的营销效率和服务水平。</p>
            <p class="Pcon">    青牛软件成立于2004年，是中国企业云服务模式最早的倡导者和践行者，青牛软件融合联络云、AI等云服务能力，结合
大数据技术，实现与企业营销业务场景深度整合，为企业用户提供全球领先的智慧营销云服务。</p>
            <p class="Pcon">  经过多年的努力与发展，青牛软件的企业云服务已经广泛应用于金融、电信、政府、制造、互联网、生活服务等众多行业。</p>
        </div>

        <div class="block block_">
            <el-carousel indicator-position="none" :interval="3000" arrow="always">
              <el-carousel-item v-for="(item,index) in comImg" :key="index">
                  <img style="width: 698px;" :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel>
        </div>
    </div>


    <div class="ccod_brand">
        <h3 class="ccod_title f30">品牌释意</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="brandCon">
          <p>青牛软件的品牌标识全面地阐明了青牛企业理念，它融入了青牛人的智慧、主张、技术和力量。</p>
          <p>青牛软件标识构成以中国古籍文化的精髓《河图》和《洛书》为基础。相传伏羲时代，有“龙马” 自黄河出，背负河图，而使伏羲觉于天地之物有所协调；在大禹时代，有“神龟”出自洛水，使大禹 找到治水良策；这两种图案合起来，就产生了中国数理的哲学和工程上应用的学说，通过阴阳、点和 线，数、理和宇宙在《河图》和《洛书》中得到完美的统一。</p>
          <p>青牛软件标识选取《河图》和《洛书》的中五元，共点融合而成。整个标志中点与点的简单构造， 更引伸出了现代网络通信中点与点的沟通和无穷变化扩张的特点，点与点的连接又在新的层次上，组 成了线与线的交融。点与点的独立，点与线的融合，线与线的交纵体现出青牛软件的核心理念： “Connect Business to People Anywhere”即“连接您与客户的桥梁”。</p>
          <p>青牛软件标识无限延伸的造型，如一个指向右上角的箭头，表现出了青牛软件无限动力的发展前 景。在色彩上，科技蓝象征不断发展的网络通信，活力橙展现出的无限激情。青牛软件的专业精神和 卓越水平在这一标识中得到了良好诠释。</p>
        </div>
    </div>  


    <div class="ccod_history">
        <h3 class="ccod_title f30" >发展历程</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div style=" margin:80px 0;">
          <img src="../assets/img/history.png" alt="">
        </div>
        <!-- <div class="historyImg" style="position:relative;z-index:333;">
          <ul>
              <li style="position:absolute;bottom:-55px;left:20px;">
                  <el-tooltip placement="top" :visible-arrow='false' >
                    <div  slot="content">2000年<br/>青牛软件在北京创立。</div>
                    <div>
                      <span >2000</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:-7px;left:136px;">
                  <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2002年<br/>青牛CTI软件中间件，市场占有率领先。</div>
                    <div>
                      <span >2002</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:8px;left:252px;">
                  <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2004年<br/>发布融合通讯平台产品，<br/>与中国移动、中国联通建立长期合作伙伴运营平台。</div>
                    <div>
                      <span >2004</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:-23px;left:368px;">
                  <el-tooltip placement="top"  :visible-arrow='false'>
                      <div slot="content">2005年<br/>获得软银亚洲、华登国际和中科招商注资3150万美元，<br/>完成中国软件业最大单笔融资。</div>
                    <div>
                      <span >2005</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:-73px;left:484px;">
                  <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2006年<br/>开创大中型企业SaaS云服务模式，<br/>构建全国范围的云联络中心平台。</div>
                    <div>
                      <span >2006</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:-56px;left:600px;">
                  <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2009年<br/>平安保险入驻青牛联络云平台，<br>开创保险行业新渠道营销模式。</div>
                    <div>
                      <span >2009</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:46px;left:716px;">
                  <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2011年<br/>发布面向互联网以及移动互联网的在线CRM平台，<br/>满足各类企业营销与服务线上化需求。</div>
                    <div>
                      <span >2011</span>
                      <img src="../assets/img/circle.png" alt="">
                    </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:88px;left:832px;">
                 <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2015年<br/>推出了青牛大数据服务，<br/>满足企业集中获客、精准获客的需求。</div>
                   <div>
                     <span >2015</span>
                     <img src="../assets/img/circle.png" alt="">
                   </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:61px;left:948px;">
                 <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2016年<br/>推出了基于大数据的AI技术服务。</div>
                   <div>
                     <span >2016</span>
                     <img src="../assets/img/circle.png" alt="">
                   </div>
                  </el-tooltip>
              </li>
              <li style="position:absolute;bottom:38px;left:1064px;">
                 <el-tooltip placement="top" :visible-arrow='false'>
                      <div slot="content">2017年<br/>中国移动战略投资青牛软件，<br/>打造全球领先的智慧营销和智慧客服云服务。</div>
                   <div>
                     <span >2017</span>
                     <img src="../assets/img/circle.png" alt="">
                   </div>
                  </el-tooltip>
              </li>
          </ul>

        </div> -->
       
    </div>

    <div class="ccod_shifu">
        <div class="ccod_shiming">
          <h3 class="ccod_title f30" style="color: #fff3f3;">愿景使命</h3>
          <p class="ccod_titles"><span class="line"></span></p>
          <p class="shimingCon">为各行业提供无处不在的统一服务</p>
        </div>
        <ul>
          <li v-for="(item,index) in serverArry" :key="index">
              <!-- <span>{{item.title}}</span> -->
              <p >{{item.content}}</p>
              <h5>{{item.content2}}</h5>
          </li>
        </ul>
       
    </div>
    

    <div class="ccod_future">
      <div style='margin:40px 0 80px;'>
            <h3 class="ccod_title f30" style="margin-top:100px!important;">未来展望</h3>
            <p class="ccod_titles"><span class="line"></span></p>
      </div>
       
        <ul>
            <li v-for="(item,index) in futureArry" :key="index">
              <img class="imgShow" :src="item.url">
              <img class="imgClass" :src="item.url1" alt="">
              <span>{{item.name}}</span>
              <p>{{item.content}}</p>
            </li>
        </ul>
    </div>

    <!-- <div class="ccod_honor">
        <h3 class="ccod_title f30">企业荣誉</h3>
        <p class="ccod_titles"><span class="line"></span></p>
        <div class="ccod_card">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in imgArry" :key="index">
                 <div class="img_box"> <img  :src="item.url" alt=""></div>
                  <p>{{item.text}}</p>
                </swiper-slide>
               
            </swiper>

        </div>
    </div> -->

     <div class="ccod_future">
        <h3 class="ccod_title f30">联系我们</h3>
        <p class="ccod_titles"><span class="line"></span></p>
         <div class="ccod-section-contact">
                <div class="ccod-section-contact-content">
                    <div class="ccod-section-contact-company">
                        <div class="company-name" v-for="(item, index) in contactList" :key="index" @click="choiceCompanyAddress(item, index)" :class="{ChoiceFlag: choiceCompanyIndex == index}">{{item.company}}</div>
                            <!--<span class="ccod-section-choice-flag"></span>-->
                    </div>
                   
                </div>

                  <div class="info-wrap">

                      <div class="ccod-section-contact-info">
                              <p class="name"><img :src="contactList[choiceCompanyIndex].info.url1" alt="">{{contactList[choiceCompanyIndex].info.name}}</p>
                              <p class="tel"><img :src="contactList[choiceCompanyIndex].info.url2" alt="">{{contactList[choiceCompanyIndex].info.tel}}</p>
                              <p v-if="contactList[choiceCompanyIndex].info.phone" class="address"><img :src="contactList[choiceCompanyIndex].info.url3" alt="">{{contactList[choiceCompanyIndex].info.phone}}</p>
                              <p class="address"><img :src="contactList[choiceCompanyIndex].info.url4" alt="">{{contactList[choiceCompanyIndex].info.address}}</p>
                      </div>
                      <div id="container" class="ccod-section-contact-map amap-page-container" style=" width:548px;height:288px;float:right;">
                        <!--66666-->
                          <el-amap ref="map" vid="amap" :center="center" :zoom="zoom">
                              <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :vid="index" :key="index"></el-amap-marker>
                          </el-amap>
                      </div>
                </div>
                
          </div>
    </div>

  </div>
</template>

<script>
  import com1 from "@/assets/img/com_1.png";
  import com2 from "@/assets/img/com_2.png";
  import com3 from "@/assets/img/com_3.png";

 import ccod1 from "@/assets/img/ccod1.png";
 import ccod2 from "@/assets/img/ccod2.png";
 import ccod3 from "@/assets/img/ccod3.png";
 import ccod4 from "@/assets/img/ccod4.png";
 import ccod5 from "@/assets/img/ccod5.png";
 import ccod6 from "@/assets/img/ccod6.png";
 import ccod7 from "@/assets/img/ccod7.png";
 import ccod8 from "@/assets/img/ccod8.png";
 import ccod9 from "@/assets/img/ccod9.png";

 import fu1 from "@/assets/img/fu_1.png";
 import fu2 from "@/assets/img/fu_2.png";
 import fu3 from "@/assets/img/fu_3.png";
 import liang1 from "@/assets/img/liang_1.png";
 import liang2 from "@/assets/img/liang_2.png";
 import liang3 from "@/assets/img/liang_3.png";

 import coin1 from "@/assets/img/coin_name.png";
 import coin2 from "@/assets/img/phone.png";
 import coin3 from "@/assets/img/fax.png";
 import coin4 from "@/assets/img/add_4.png";
 
 
import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');
export default {
     components: {
        swiper,
        swiperSlide
    },
    name: 'carrousel',
    data(){
      return{
          choiceCompanyIndex: 0,
          swiperOption: {
              notNextTick: false,// 循环
              loop: true,
            //  slidesPerView: "auto",
              autoplay: {
                disableOnInteraction: false,
                delay: 2000
              },
              /*navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },*/
              slidesPerView: 4, //4列
              slideToClickedSlide:true,
              preventClicksPropagation : false,
              grabCursor : true,
              preventClicks : true,
            spaceBetween : 20,
        },
        comImg:[
          {
            'url': com1
          },{
            'url': com2
          },{
            'url': com3
          }
        ],
        imgArry:[
          {
            'url': ccod1,
            'text':'中国软件行业协会（CSIA）会员单位'
          },{
            'url': ccod2,
            'text':'2006年青牛软件获中国计算机报颁发的“2006保险行业呼叫中心优秀解决方案奖”'
          },{
            'url': ccod3,
            'text':'2006年软件获中国计算机报颁发的“2006电信行业最佳呼叫中心奖”'
          },{
            'url': ccod4,
            'text':'2011年青牛软件“云电话产品”获“2011年度消费者信赖的十大质量品牌”'
          },{
            'url': ccod5,
            'text':'2011年青牛软件“云电话产品”获“2011年度中国行业信息化创新产品奖”'
          },{
            'url': ccod6,
            'text':'2011年青牛软件获“2010中关村高成长企业TOP100”称号'
          },{
            'url': ccod7,
            'text':'2011年青牛软件获中关村核心区软件行业“2010年度创新示范百强企业”称号'
          },{
            'url': ccod8,
            'text':'2012年青牛软件获客户世界颁发的“金耳唛杯·中国呼叫中心最佳解决方案”奖'
          },{
            'url': ccod9,
            'text':'2012年青牛软件获ICT中国·高层论坛颁发的“SaaS云计算呼叫中心优秀服务企业奖'
          }
        ],
        serverArry:[
          {
            'title':'服务能力',
            'content':'继续专注于提升融合网络能力',
            'content2':'持续打造青牛企业云服务平台'
          },{
            'title':'服务内容',
            'content':'通过优化整合B2C之间多接触点的沟通',
            'content2':'方式，搭建企业通向消费者的服务桥梁'
          },{
            'title':'服务客群',
            'content':'持续提高中国企业的营销效率和服务水平，',
            'content2':'实现企业的商业价值向目标客户的有效传递'
          }
        ],
        futureArry:[
          {
            'url':fu1,
            'url1':liang1,
            'name':'积累能力',
            'content':'继续专注于提升融合网络能力， 持续打造青牛企业云服务平台。'
          },{
            'url':fu2,
            'url1':liang2,
            'name':'打造产品',
            'content':'通过优化整合B2C之间多接触点的沟通方式，搭建企业通向消费者的全息桥梁。'
          },{
            'url':fu3,
            'url1':liang3,
            'name':'传递价值',
            'content':'持续提高中国企业的营销效率和服务水平，实现企业的商业价值向客户的有效传递。'
          }
        ],
        contactList: [
          {
            company: '北 京 总 部',
            info: {
              url1:coin1,
              url2:coin2,
              url3:coin3,
              url4:coin4,
              name: '青牛（北京）技术有限公司',
              address:'北京市石景山区田顺庄北路1号院古城创业大厦3号楼9层',
              coordinate: [116.175412,39.912625],
              postcode: '100142',
              tel: '010-88822000',
              phone:'010-68711717'
            }
          }, {
            company: '上海分公司',
            info: {
              url1:coin1,
              url2:coin2,
              url3:coin3,
              url4:coin4,
              name: '上海分公司',
              address: '上海市长宁路1027号兆丰广场3402-03室(200050)',
              coordinate: [121.418666, 31.217848],
              postcode: '100142',
              tel: '021-61254600',
              phone:'021-61254646 '
            }
          },{
            company: '深圳分公司',
            info: {
              url1:coin1,
              url2:coin2,
             // url3:coin3,
              url4:coin4,
              name: '深圳分公司',
              address: '深圳市南山区深圳湾科技生态园2栋A座901室',
              coordinate: [113.951644, 22.541017],
             // postcode: '100142',
              tel: '13922868864',
             // phone:'010-68711717'
            }
          }
        ],
        zoom: 16,
        center: [116.175412,39.912625],
        markers: [
          {
            position: [116.175412,39.912625]
          }
        ]
      }
    },
    methods:{
       choiceCompanyAddress(item, index) {
          this.choiceCompanyIndex = index;
          this.center = this.contactList[index].info.coordinate;
          this.markers[0].position = this.center;
      }
    },
  mounted () {
      setTimeout(() => {
        $(".amap-logo,.amap-copyright").hide()
      },3000)
  }
}
</script>

<style>
    .ccod_join{
     width: 100%;
      height: 560px;
      background: url('../assets/img/bg_us.png') no-repeat;
      background-size: 100% 100%;
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
    .ccod_title{
      font-weight: bold;
      margin-top: 79px!important;
    }
     .ccod_company{
       min-width: 100%;
       height: auto;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       overflow: hidden;
       margin-bottom: 80px;
     }
     .pContent{
       width:920px;
       display: flex;
       font-size: 16px;
       line-height: 20px;
       align-items: center;
       flex-direction: column;
       margin-top: 79px;
       justify-content: start;
     }
      .Pcon{
        width: 100%;
       text-align: left;
       color: #333;
       font-size: 16px;
       margin: 0;
       text-indent: 32px;
       line-height: 26px;
     }
      .block{
          width: 840px;
          height: 465px;
          margin-top: 60px;
      }
     .ccod_brand{
        min-width: 1360px;
        height: 640px;
        background: url('../assets/img/brand.png') no-repeat center;
        background-size: cover;
        cursor: pointer;
        overflow: hidden;
     }
     .brandCon{
       width: 710px;
       margin-top: 104px;
       margin-left:44%;
     }
     .brandCon p{
       text-align: left;
       text-indent: 32px;
       font-size: 16px;
       color: #333;
       margin: 0;
       line-height: 26px;
     }
   
     .ccod_history{

       height: auto;
       overflow: hidden;
     }
     .historyImg{

       height: 376px;
       background: url('../assets/img/timeline.png') no-repeat center;
       background-size: cover;
       cursor: pointer;
       margin-top: 100px;
       margin-bottom: 120px;
     }
    .historyImg li div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .historyImg li img{
       display: block;
       margin-top: 24px;
     }
    .block_ .el-carousel--horizontal{
      height: 465px;
    }
    .block_  .el-carousel__container {
      height: 465px!important;
    }
    .block_ .el-carousel__container {
      width: 100%;
      height: 465px;
    }

    .block_  .el-carousel__arrow{
       border: 0;
       outline: none;
       padding: 0;
       margin: 0;
       height: 40px;
       width: 22px;
       border-radius: 0;
       cursor: pointer;
       font-size: 40px;
      background: 0!important;
      color: #666;
       top: 50%!important;
     }

    .block_  .el-carousel__arrow--right{
      right: 36px!important;
    }
    .block_  .el-carousel__arrow--left{
      left: 20px!important;
    }
     .ccod_shiming{
        min-width: 1360px;
        height: 528px;

        cursor: pointer;
        overflow: hidden;
     }
    .ccod_shifu{
       min-width: 1360px;
       height: 528px;
      background: url('../assets/img/bg_ming.png') center no-repeat;
      background-size: 100% 100%;
       position: relative;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     }
      .ccod_shifu ul{
        min-width:1120px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        z-index: 9;
        position: absolute;   
        top:320px;
      }
      .ccod_shifu ul li{
        width: 342px;
        height: 245px;
        padding: 30px 20px 0px 20px;
        box-shadow:0px 0px 25px 2px rgba(0, 0, 0, 0.07);
        background: #fff;
        color: #000;
        margin-right: 27px;
        transition: all 0.3s;
        transition:all 0.3s;
        -moz-transition:all 0.3s; /* Firefox 4 */
        -webkit-transition:all 0.3s; /* Safari and Chrome */
        -o-transition:all 0.3s; /* Opera */
      }
    .ccod_shifu ul li:hover{
      margin-top: -50px;
    }
    .ccod_shifu ul li:last-child{
      margin-right: 0;
    }

       /*.ccod_shifu ul li:hover{
          margin-bottom:5%;
          background: #FF882F;
          color: #fff;
          transition: all 0.3s;
          -moz-transition: all .3s; 
          -o-transition: all .3s;
        }*/
      .ccod_shifu ul li p{
        font-size: 16px;
        color: #333;
        text-align: center;
        margin-top:29px;
        /* border-top:1px solid #ccc; */
        padding-top:39px;
      }
      .ccod_shifu ul li h5{
        font-size: 16px;
      }
      .ccod_shifu ul li span{
        text-align: center;
        font-size: 20px;
        color: #333;
        font-weight: bold;
        text-align: center;
      }
     .shimingCon{
       color: #fff;
       margin: 63px 0 92px;
       font-size: 30px;
     }
     .ccod_future{
       overflow: hidden;
       height: auto;
       background: #ffffff;
       display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
     }
      .ccod_future ul{
        width: 1120px;
        height: auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-around;
        /*margin-top: 20px;*/
      }
      .ccod_future ul li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 230px;
        height: 283px;
     /*   padding: 20px 20px 40px 20px;*/
        margin-bottom: 80px;
        color: #000;
        cursor: pointer;
        position: relative;
        /*border: 1px solid #ccc;*/
      }
    .ccod_future ul li:nth-child(1):after{
      content: '';
      position: absolute;
      width: 1px;
      height:320px;
      background: #E3E3E3;
      right: -75px;
      top: 0;
    }
    .ccod_future ul li:nth-child(1):after{
      content: '';
      position: absolute;
      width: 1px;
      height:320px;
      background: #E3E3E3;
      right: -75px;
      top: 0;
    }
    .ccod_future ul li:nth-child(2):after{
        content: '';
        position: absolute;
        width: 1px;
        height:320px;
        background: #E3E3E3;
        right: -75px;
        top: 0;
      }
      .ccod_future ul li .imgShow{
        width: 165px;
        height: 165px;
        margin-bottom: 15px;
      }
      .ccod_future ul li .imgClass{
        width: 165px;
        height: 165px;
        display: none;
        margin-bottom: 15px;
      }
      .ccod_future ul li:hover .imgShow{
        display: none;
        transition: all 1s;
      }
      .ccod_future ul li:hover .imgClass{
        display: block;
        transition: all 1s;
      }
      .ccod_future ul li span{
        color: #333333;
        font-size: 18px;
        margin: 20px 0 15px 0;
      }
      .ccod_future ul li p{
        color: #333333;
        font-size: 16px;
        text-align: justify;
      }
      .ccod_honor{
        overflow: hidden;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #f8f8f8;
      }
      .ccod_card{
        width: 954px;
        margin: 80px auto;
      }
      
      .swiper-container {
        width: 100%;
        margin: 0;
        padding: 3px;
      }

    .swiper-wrapper {
      height: auto;
    }

  .swiper-slide {
      /*margin-right:5px;*/
    width: 222px;
      height: 345px;
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 15px 1px rgba(43,43,43,0.13);
  }
      .swiper-button-prev{
      /*background-image: url("../assets/img/btn_left arrow_disabled.png");*/

    }
    .swiper-slide .img_box{
      margin: 20px 0;
        height: 225px;
      display: flex;
      align-items: center;
      }
    .swiper-slide img{
      /*margin: 20px 0;*/
    }
    .swiper-slide p{
    width: 180px;
    text-align: justify;
  }

  .ccod-section-contact{
    /*width: 60%;*/
    /*padding: 60px 20%;*/
    padding: 60px 0;
  }
  .ccod-section-contact-company{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    padding-bottom: -2px;
    margin-bottom: 70px;
  }
  .company-name{
    padding-bottom: 35px;
    font-size: 24px;
    border-bottom:4px solid #FFF;
    cursor: pointer;
  }
  .ChoiceFlag {
    font-size: 24px;
      color: #4565B6;
      border-bottom:4px solid #4565B6;
  }
  .ccod-section-contact-info{
    width: 40%;
    float: left;
    min-height: 350px;
  }
  .ccod-section-contact-info p{
    text-align: left;
    line-height: 40px;
    font-size: 22px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .ccod-section-contact-info p img{
    width: 23px;
    height: 24px;
    margin-right:15px;
  }
  .historyImg ul{
    width:1200px;
    height: 200px;
    position: relative;
  margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
    .historyImg ul span{
      font-size: 24px;
      color: #4565B6;
    }
   .historyImg ul li{
     height: auto;
     overflow: hidden;
     z-index: 666;
   }
  .ccod_one{
    width: 100px;
    margin-top:15px;
    background: #ccc;
    padding: 5px 5px;
    text-align: left;
    height: auto;
  }
  .ccod_year{
    text-align: center;
  }
  .el-tooltip__popper.is-dark{
    background: #f6f6f6!important;
    padding: 28px 20px!important;
    color: #333!important;
    margin-bottom: 30px!important;
    line-height: 24px!important;
  }

  .info-wrap{
      /*padding: 30px 20px;*/
    width: 1120px;
    height: 400px;
    display: flex;
    justify-content: space-around;
  }
   /* .ccod-section-contact-map {
            width: 405px;
            height: 213px;
            float: right;
          }
      .amap-logo, .amap-copyright {
          display: none !important;
        }*/
</style>


