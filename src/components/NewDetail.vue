<template>
  <div class="wrap">
    <div class="ccod_join">
      <h2>新闻动态</h2>
    </div>
      <div class="content">
        <h1 class="title">{{title}}</h1>
        <div class="text_">
          <span>{{time}}</span> <span>{{num}}</span>次阅读
        </div>
        <div class="contentNews" style="margin-bottom: 80px;text-align:left;" v-html="content"></div>
      </div>
  </div>
</template>

<script>

    import axios from 'axios'
    import qs from 'qs';
export default {
    data(){
        return{
          content:'',
          title:'',
          time:'',
          num:''
        }
    },
    methods:{
      detail(){
        let that = this;
        axios.post('http://60.205.136.57:8089/jeecmsext/help/query',qs.stringify({
          contentId:this.$route.params.c_id
        })).then(function(res){
          //console.log(res);
          if(res.data.code==0){
            that.content = res.data.obj.txt
            that.title = res.data.obj.title
            that.time = that.longTimeToDateNoMillisecond(res.data.obj.releaseDate)
            that.num = res.data.obj.views
          }else{

          }
        }).catch(function(error){
          console.log(error);
        })
      },
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
    },
  mounted (){
    //console.log(this.$route.params.c_id)
    this.detail()
  },
}
</script>

<style scoped>
  .ccod_join{
    background: url('../assets/img/news.png') no-repeat center;
    width: 100%;
    height: 560px;
    /* background-size: cover; */
    cursor: pointer;
    overflow: hidden;
  }
  .ccod_join h2{
    color: #ffffff;
    font-size: 50px;
    margin-top: 240px;
    font-weight: 500;
  }

  .content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title{
    font-size: 36px;
    margin: 40px 0;
    text-align: left;
  }
  .text_{
    font-size: 18px;
    text-align: left;
    margin-bottom: 40px;
  }
</style>


