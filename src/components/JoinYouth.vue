<template>
  <div class="wrap">
    <div class="ccod_join">
        <img style="margin-top:207px;margin-bottom: 30px;" src="../assets/img/logo.png">
        <h2>加入青牛, 遇到更优秀的你</h2>
    </div>
    <h3 class="ccod_title" >员工福利</h3>
    <p class="ccod_titles"><span class="line"></span></p>
    <div class="join_us flex">
        <div class="join_us_list">

          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car1.png" />
                    </div>
                    <p class="freeCar">免费班车</p>
              </div>
              <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car2.png" />
                    </div>
                    <p class="freeCar">六险一金</p>
              </div>
              <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car3.png" />
                    </div>
                    <p class="freeCar">绩效奖金</p>
              </div>
               <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car4.png" />
                    </div>
                    <p class="freeCar">日常补贴</p>
              </div>
               <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car5.png" />
                    </div>
                    <p class="freeCar">节假日福利</p>
              </div>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car6.png" />
                    </div>
                    <p class="freeCar">年度体检</p>
              </div>
               <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car7.png" />
                    </div>
                    <p class="freeCar">团队建设</p>
              </div>
               <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car8.png" />
                    </div>
                    <p class="freeCar">员工俱乐部活动</p>
              </div>
               <span class="spanLine"></span>
          </div>
          <div class="usList">
              <div class="listOne">
                    <div class="">
                      <img height="94px" width="94px;" src="../assets/img/car9.png" />
                    </div>
                    <p class="freeCar">完善晋升培训机会</p>
              </div>
          </div>

        </div>
    </div>
    <div class="ccod_img">
      <div class="imgNum">
          <div class="img_one">
            <img style="height:290px;" src="../assets/img/join_10.png">
            <img style="height:290px;margin:0 1px;" src="../assets/img/join_11.png">
            <img style="height:290px;" src="../assets/img/join_12.png">
          </div>
          <div class="img_one">
            <img style="height:290px;" src="../assets/img/join_13.png">
            <img style="height:290px;margin:0 1px;" src="../assets/img/join_14.png">
            <img style="height:290px;" src="../assets/img/join_15.png">
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

<style scoped>
    .ccod_join{
      width: 100%;
      height: 560px;
      background: url('../assets/img/join.png') no-repeat center;
      /* background-size: 100% 100%; */
      cursor: pointer;
    }
     .ccod_join h2{
       color: #ffffff;
       font-size: 54px;
       font-weight: 500;
     }
    .ccod_title{
      font-weight: bold;
      margin-top: 79px;
    }
     .join_us{
        width: 100%;
        /*height: 360px;
        padding: 0px 20%;
        margin: 35px 0;
        background: url('../assets/img/joins.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;*/
     }
      .join_us_list{
        width: 1120px;
        padding: 10px 0;
        padding-left: 190px;
        display: flex;
        align-items: center;
        justify-content:flex-start;
        flex-wrap: wrap;
        -webkit-flex-wrap:wrap;
        margin: 20px auto;
      }
      .usList{
        width: 210px;
        height: 210px;
        /*display: flex;*/
        position: relative;
        margin-top: 20px;
      }
      .spanLine{
        width: 80px;
        display: inline-block;
        border: 1px dashed #ccc;
        position: absolute;
        top: 50px;
        left: 114px;
      }
      .usList .listOne{
        width: 100px;
        height: 100px;
      }
       /*.usList .listOne::after{
        position: absolute;
        content: '';
        border-right: 90px dotted #ccc;
        right: -120px;
        top: 55px;
        height: calc(100px - 99px);
      }*/
      
      .freeCar{
        font-size: 24px;
        color: #333;
        width: 200px;
        margin-top: 30px;
        margin-left: -50px;
      }
     .ccod_img{
       width: 100%;
       height: auto;
       overflow: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 40px;
       align-items: center;
     }
    .ccod_img  .imgNum{
        width: 1210px;
        display: flex;
        justify-content: center;
      align-items: center;
        flex-direction: column;
        margin-bottom: 40px;

      }
     
     .img_one{
        width: 1120px;
        display: flex;
        align-items: center;
        justify-content: center;
     }
</style>


