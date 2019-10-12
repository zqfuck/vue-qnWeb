<template>
  <div class="wrap">
    <div class="ccod_join">
        <h2>新闻动态</h2>
    </div>
    <div class="ccod_news">
      <div class="news_list" @click="goDetail(item.contentId)" v-for="(item,index) in newsArry" :key="index">
        <div class="newsImg">
          <img :src="`http://60.205.136.57:8089${item.typeImg}`" alt="" />
        </div>
        <div class="newsRight">
          <h5>{{item.title}}</h5>
          <p class="newsCon">{{item.description}}</p>
          <span>{{longTimeToDateNoMillisecond(item.releaseDate)}}</span>
        </div>
      </div>
    </div>
        
    <div class="" style="padding-bottom:4%;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="nowpages" :page-size="pageSize" layout="total, prev, pager, next" :total="total_">
        </el-pagination>
    </div>
     
  </div>

</template>

<script>
 import news1 from "@/assets/img/new_1.png";
 import axios from 'axios'
 import qs from 'qs'
export default {
    data(){
      return{
        nowpages: 1,
        pageSize:6,
        totalNum:'',
        newsArry:[],
        total_:0
      }
    },
    mounted:function(){
      this.newList();
    },
    methods:{
      newList(){
        let that = this;
        axios.post('http://60.205.136.57:8089/jeecmsext/news/normal',qs.stringify({
          pageNo:this.nowpages,
            pageSize: this.pageSize
          })).then(function(res){
             // console.log(res);
              if(res.data.code==0){
                 that.newsArry = res.data.obj;
                 that.total_ = res.data.total
              }else{

              }
          }).catch(function(error){
              console.log(error);
          })
      },
      goDetail (cid){
       // console.log(cid)
        this.$router.push({name:'NewDetail',params:{c_id:cid}})
      },
      /*时间转换*/
       longTimeToDateNoMillisecond(longTime){
         var day = new Date(longTime); //将毫秒转化为当前日期
         var year = day.getFullYear();
         var month = day.getMonth()+1;
         var date = day.getDate();
         var hour = day.getHours();
         var minute = day.getMinutes()
         if(month<10){
           month = "0"+month;
         }
         if(date<10){
           date = "0"+date;
         };
         if(hour<10){
           hour = "0"+hour;
         };
         if(minute<10){
           minute = "0"+minute;
         };
         var newDay = year+"-"+month+"-"+date+" " + hour + ":" + minute;
         return newDay;
       },
        handleSizeChange(val) {
           //console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
           console.log(`当前页: ${val}`);
           this.nowpages = val
           this.newList()
        }
    }
}
</script>

<style scoped>
    .ccod_join{
      background: url('../assets/img/news.png') no-repeat center;
      width: 100%;
      height: 560px;
      background-size: cover;
      cursor: pointer;
      overflow: hidden;
    }
     .ccod_join h2{
       color: #ffffff;
       margin-top: 240px;
       font-size: 50px;
       font-weight: 500;
     }
     .ccod_news{
       display: flex;
       flex-direction: column;
       align-items: center;
      margin-top: 80px;
     }
     .news_list{
       display: flex;
       align-items: center;
       justify-content: flex-start;
       padding: 20px 0;
       cursor: pointer;
     }
    .news_list .newsImg{
      width:170px;
      height: 100px;
      margin-right: 32px;
    }
    .news_list .newsImg img{
      width:100%;
      height: 100%;
    }
    .newsRight{
      text-align: left;
    }
    .newsRight h5{
      color: #000;
      font-size:18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
     .newsRight p{
      margin: 0;
      color: #000;
      font-size:14px;
      margin-bottom: 10px;
      width: 818px;
       overflow: hidden;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
       -webkit-box-orient: vertical;
    }
    .newsRight span{
       color: #6A6A6A;
      font-size:16px;
    }
</style>


