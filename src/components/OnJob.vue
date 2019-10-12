<template>
  <div class="wrap" style="background:##FBFBFB;">
     <div class="ccod_join">
        <img style="margin-top:207px;margin-bottom: 30px;" src="../assets/img/logo.png">
        <h2>我们期待你的加入</h2>
    </div>
   
   
    <div class="ccod-section-contact">
        <div class="ccod-section-contact-content">
            <div class="ccod-section-contact-company">
                <div class="company-name"  v-for="(item, index) in contactList" :key="index" @mouseover="choiceCompanyAddress(item, index)">{{item.cityName}}</div>
            </div>
            <div class="content-detail">
                 <ul class="ccod-info">
                    <li v-for="(items, index) in contactList[choiceCompanyIndex].info" :key="index">
                        <p class="zhiClass">{{items.jobName}}</p>
                        <p class="enlName">{{items.EnglishiName}}</p>
                        <p class="zhize">岗位职责:</p>
                        <span class="nemeCon" v-for="(atem,index) in items.duty" :key="index">{{atem}}</span>
                        <p class="yaoqiu">任职资格要求:</p>
                        <span v-for="(btem,index) in items.requirement" :key="btem">{{btem}}</span>
                    </li>
                </ul>
            </div>
            <p class="ccod_email">
                如对职位有意向，请投递简历至<a href="mailto:qnzhaopin@xhannelsoft.com" target="_blank"><span>qnzhaopin@xhannelsoft.com</span></a>
            </p>
        </div>
    </div>
  </div>

</template>

<script>
export default {
    data(){
      return{
        choiceCompanyIndex:0,
        contactList:[
            {
                cityName:'北京',
                info:[
                    {
                        jobName:'高级客户经理/客户总监',
                        EnglishiName:'Senior Account Manager',
                        duty:['1、对所负责的业务的业绩目标负责；','2、负责保险行业呼叫中心、大数据营销工作；','3、挖掘保险行业客户需求，积极提供解决方案；','4、协调资源，保障客户需求快速有效实现，提高客户满 意度'],
                        requirement:['1、5年以上销售经验；','2、具有保险行业相关人脉资源；','3、沟通能力良好，具备较好的组织协调与项目协调能力；','4、熟悉保险行业、呼叫中心业务和大数据业务工作经验 者优先。']
                    }, {
                    jobName:'Java软件工程师',
                    EnglishiName:'Java Software Engineer',
                    duty:['1、参与公司Java项目的研发工作；','2、完成软件产品各模块的功能设计、代码实现工作；','3、负责软件模块的单元测试与集成测试；','4、编写、维护软件开发文档；'],
                    requirement:['1、1到3年基于Java的Web项目开发经验，有产品设计 和开发经验；','2、Java基础扎实，良好的代码风格，具备良好的编程习 惯、文档写作及管理能力，','3、熟练使用基于J2EE的相关开源技术以及框架 （SpringMVC,mybatis,Hibernate）','4、熟练使用Junit(或者其他)进行测试代码的编写；','5、熟悉SOA架构，能够使用Axis2或CXF框架进行 Web Service开发；',' 6、熟悉MYSQL，ORACLE等关系数据库及redis、 mongoDB等非关系型数据库。']
                  },
                    {
                        jobName:'高级软件工程师',
                        EnglishiName:'Senior Software Engineer',
                        duty:['1、参与数据库设计，优化数据库结构。设计数据库索引、 存储过程。；','2、负责业务数据库性能调优、安全管理、数据备份，现 网问题分析处理 ','3、 总结和撰写相应的数据库文档;','对开发者的数据库访问代码进行评审和优化。'],
                        requirement:['1、本科及以上学历，计算机或数学相关专业，扎实的计 算机专业基本功；','2、 3年以上数据库服务开发经验（Java语言），熟悉常 见的sql及nosql数据库；','3、 具备良好的分析解决问题能力，能独立承担任务，能 承受一定压力；','4、有云计算平台相关设计及开发经验者优先。']
                    },{
                        jobName:'技术支持工程师',
                        EnglishiName:'Technical Support Engineer',
                        duty:['1、所负责平台有应急方案，有程序和配置文件备份；','2、平台升级前有升级方案，审批后严格按升级时间进行升 级和测试验证，并输出升级结果及过程文档；','3、平台出现一、二级重大故障需积极响应处理并及时上报；','4、按要求熟练使用Mantis工具和运维支撑工具；','5、平台所有操作需按支撑操作流程规范执行；','6、监控平台运行情况和平台坐席使用率。'],
                        requirement:['1、大专及以上学历，计算机相关专业，1-3年工作经验；','2、熟练掌握linux系统，熟练编写shell脚本，能独立分析 操作系统日志；','3、熟悉oracle、mysql数据库；','4、具备一定的组织协调和项目协调能力，具备运维经验；','5、有呼叫中心从业经验者优先考虑，有呼叫中心从业经 验者优先考虑。']
                    },{
                        jobName:'大数据开发工程师',
                        EnglishiName:'Big Data Development Enginee',
                        duty:[' 1、负责公司数据管理平台数据治理、用户画像分析与高 效的大数据交互查询服务的构建与开发；','2、负责公司大数据平台研发过程中的设计文档的撰写；','3、撰写规范专业的技术文档，研究行业前沿技术；','4、参与小组的产品设计讨论，共同讨论和设计产品；','5、数据平台的新技术调研。'],
                        requirement:['1、本科二年工作经验及以上，有至少一年的大数据技术 实践经验； ',' 2、 熟练使用hadoop及hadoop生态圈中的常用组件， 如HBase、Hive、Pig、Kettle、zookeeper、 Sqoop、Flume、Kafka、Storm、Redis、Spark、 Yarn、Impala、presto等全部或者部分组件；','3、深入理解Hadoop或Spark的原理和机制； 4、熟练掌握Java，Shell 编程，具有一定JVM调优经验；','5、深刻理解大数据处理(分布式计算、内存计算、流计算、 图数据库、大规模并行处理数据库等)相关技术和实现 方法，有架构和设计实践经验；',' 6、熟悉软件开发流程和配置库的使用，拥有软件开发流 程中的代码规范意识、配置管理规范意识、文档撰写 规范意识和团队合作沟通交流意识；','7、对新生事物或者新技术有浓厚兴趣者优先，有较好的 自主学习能力。1.熟悉大数据、云计算、微服务技术。']
                    },{
                        jobName:'咨询顾问',
                        EnglishiName:'Consultan',
                        duty:['1、协助销售人员，以对公司销售业务发展方向提供咨询；','2、完成相关产品/方案宣传资料的撰写、产品/系统演示 等工作；','3、负责售前支持工作，包括与用户的技术交流、技术方 案编写、技术方案宣讲；','4、配合销售完成相应项目的投标工作，标书的技术应答、 系统软硬件配置、公开报价、讲标答标等工作；','5、针对重点客户重点项目，跟踪项目整个实施开发环节， 作为接口人与产品部门、研发部门进行协调与沟通。'],
                        requirement:[' 1、 计算机、自动化、电子、通讯相关专业专科或以上学 历，三年以上软件开发或系统集成工作经验；',' 2、 熟悉呼叫中心、大数据产品及集成工作； ','3、 参与过呼叫中心大中型系统集成的项目投标，有良好 售前支持经验，有较好的表达能力及与客户的沟通能力；',' 4、 丰富的方案设计、标书应答、用户交流经验；良好的 文案与沟通能力；较强的方案撰写能力，熟练操作 Word、PPT、Excel、Visio等工作软件；',' 5、 对新技术、新产品具有一定的敏感性和思维能力；具 有较强的学习能力；' ,'6、具有丰富的行业经验，主要包括金融和保险行业；', '7、 具有良好的口语表达能力、问题分析能力、与客户交 流能力，有责任心，良好的团队合作精神。']
                    }
                ]
            }, {
                cityName:'上海',
                info:[
                    {
                        jobName:'高级客户经理/客户总监',
                        EnglishiName:'Senior Account Manager',
                        duty:['1、负责目标大客户的开发与关系维护工作，与目标大客 户建立良好的业务关系，挖掘大客户的需求，带领团 队高效灵活的完成销售任务；',' 2、参与市场调查、竞争对手研究、营销策划等，及时反 馈有关市场开发和营销进展的情况；',' 3、建立大客户档案，并针对客户提供咨询和相关服务， 及时处理大客户投诉等事宜；',' 4、完成公司下达的销售任务及其他工作。'],
                        requirement:['1、本科及以上学历；',' 2、5年以上销售工作经验，2年以上组建和管理销售团队 工作经验，营销、管理、金融等专业优先考虑； ','3、具备客户资源，具有良好的客户沟通、人际交往及维 系客户关系的能力；',' 4. 具备自我约束、激励并勇于承担、完成目标责任的能 力，能在一定的压力下胜任工作；',' 5. 有广泛的社会关系网络和客户人脉资源（浦发、招行 等银行资源或人保等保险资源），具有开发大客户经 验者优先。']
                    },
                    {
                        jobName:'客户经理',
                        EnglishiName:'Account Manager',
                        duty:['1. 定向交行卡中心，做好目标客户的管理，维系现有客 户关系，搜集整理客户资料及客户关系网络；',' 2. 深入了解客户需求以及现阶段情况，对客户的需求进 行判断和分析，有效推动与客户的沟通；',' 3、开拓客户新需求，并推进落实达成项目合作.；',' 4、完成团队既定销售指标和销售任务；',' 5. 完成团队领导安排的其他工作任务。'],
                        requirement:['1、专科及以上学历；',' 2、做事认真，有责任心，有冲劲，能妥善管理大客户项 目并根据领导要求妥善经营并突破对应客户关系寻找 更多项目机会；',' 3、具有较强的工作抗压性及积极的工作态度。']
                    }
                ]
            }, {
                cityName:'深圳',
                info:[
                    {
                        jobName:'客户总监',
                        EnglishiName:'Account Director',
                        duty:[' 1、对所负责业务的业绩目标负责；',' 2、负责公司金融（保险或银行）行业大数据、在线 CRM产品与视频产品的销售工作；',' 3、负责客户沟通调研，能引导客户需求；',' 4、协调资源，保障客户需求快速有效实现，提高客户 满意度。'],
                        requirement:['1、5年以上销售经验；',' 2、具有金融行业或运营商相关人脉资源优先；',' 3、沟通能力良好，具备较好的组织协调与项目协调能力；',' 4、熟悉金融（保险或银行）行业，视频、大数据产品和 在线CRM产品相关工作经验者优先。']
                    }
                ]
            }
        ]
      }
    },
    methods:{
        choiceCompanyAddress(item, index) {
            this.choiceCompanyIndex = index;
            // console.log(this.choiceCompanyIndex);
        }
    },
  mounted () {
      $(".company-name").eq(0).addClass('active');
    $(".company-name").hover(function () {
      $(this).addClass('active').siblings().removeClass('active')
    })
  }
}
</script>

<style scoped>
     .ccod_join{
        min-width: 1360px;
        height: 560px;
        background: url('../assets/img/job.png') no-repeat;
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
     .ccod-section-contact{
         position: relative;
         min-width: 1360px;
         display: flex;
         justify-content: center;
         min-height:500px;
        /* overflow: hidden;*/
         background: #F8F8F8;

     }
     .ccod-section-contact-content{
         width: 1120px;
         height: auto;
         overflow: hidden;
         box-shadow: 0px 0px 2px 0px #ccc;
         padding-bottom:  60px;
         margin-bottom: 60px;
         display: flex;
         flex-direction: column;
         justify-content: center;
       margin-top: -94px;
       border-radius: 10px;
         /*transform: scale(1.05);*/
     }
     .ccod-section-contact-company{
         display: flex;
         align-items: center;
         justify-content: space-around;
         color: #000;
       background: #fff;
         border-bottom:1px solid #ccc; 
        
     }
     .company-name{
        width: 280px;
        height: 94px;
        text-align: center;
        line-height: 94px;
        color: #333333;
        font-size: 18px;
       cursor: pointer;
       position: relative;
       padding-bottom: 0!important;
       border-bottom: 0!important;
     }
     .company-name:after{
       content: '';
       position: absolute;
       width: 1px;
       height: 34px;
       background: #D5D5D5;
       right: 0;
       top: 30px;
     }
     .company-name.active{
       background: #444D70;
       color: #fff;
     }
     .company-name:nth-child(3):after{
       width: 0;
     }
     .company-name:hover{
         background: #444D70;
         color: #fff;
         transition: all 0.3s;
     }
     .company-name:hover:after{
       width: 0;
     }
      /*.ChoiceFlag {
        color: #4565B6;
        background: #444D70;
        color: #fff;
    }*/
    /*.content-detail{
        min-width: 786px;
        height: auto;
        display: flex;
        justify-content: center;
        overflow: scroll;
    }*/
    .ccod-info{
        height: auto;
        overflow: hidden;
        width: 1120px;
    }
    .ccod-info li{
        text-align: justify;
        border-bottom: 1px solid #ccc;
        width: 40%;
        padding-top: 80px;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 600px;
    }
     .ccod-info li:last-child{
        border-bottom: 0;
    }
     .ccod-info li:nth-last-of-type(2){
         border: 0;
     }
     .ccod-info li:nth-child(odd) { 
         margin-left:5%;
         padding-right:10%;
      }
      .ccod-info li:nth-child(even) { 
         /*margin-right:92px;*/
      }
    .ccod-info li span{
        /*width: 100%;*/
        text-align: justify;
        color: #333;
        font-size: 16px;
      line-height: 24px;
    }
    .ccod_email{
        font-size: 16px;
        color: #333;
        text-align: center;
        margin-top: 60px;
        display: block;
        line-height: 22px;
    }
    .ccod_email span{
        color: #4565B6;
    }
     .ccod-info li .zhiClass{
         color: #4565B6;
         font-size:20px;
     }
      .ccod-info li .enlName{
         color: #333333;
         font-size:16px;
     }
     .ccod-info li .zhize{
         color: #333333;
         font-size:16px;
         margin-top:30px;
         margin-bottom: 20px;
     }
     .ccod-info li .yaoqiu{
         color: #333333;
         font-size:16px;
         margin:20px 0;
     }
</style>


