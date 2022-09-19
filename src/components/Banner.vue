<template>
    <div class="head">
        <div class="more">
            <div class="big-title-out">
                <h class="big-title">云链知坊·BlockChain</h>
            </div>
            <div class="subtitle-out">
                <h class="subtitle">Smart solutions for blockchain learning<br>designed for you</h>
            </div>
            <button class="button-more">{{learnmore}}</button>
        </div>
        
        <div class="head-pic">
            <img  src="../assets/head.png">
        </div>
    </div>
</template>

<script>

  export default {
    data(){
      return{
        learnmore:"你好"
      }
    }
  }
</script>

<style>
.head {
  /* position: absolute; */
  width: 100%;
  height: 673px;
  left: 0px;
  top: 95px;
  background: #F4F7FF;
}
.more{
  display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 42px;

position: absolute;
width: 1176px;
height: 423px;
left: 128px;
top: 244.5px;
}
.big-title-out{
  
width: 408px;
height: 60px;
}
.subtitle{
  position: absolute;
width: 316px;
height: 52px;
left: 0px;
top: 74px;

font-family: 'Source Han Sans CN';
font-style: normal;
font-weight: 350;
font-size: 16px;
line-height: 164.57%;
/* or 26px */


color: #82899B;
}
.big-title{
  position: absolute;
width: 408px;
height: 60px;
left: 0px;
top: 0px;

/* 标题 */

font-family: 'Source Han Sans CN';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 59px;
/* identical to box height */


/* text-black */

color: #1F2431;
}
.subtitle-out{
  width: 316px;
height: 52px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.head-pic {
  display:flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  position: absolute;
  right: 136px;
  top: 125px;
}
.button-more{
position:absolute;
width: 184px;
height: 44px;
background-color: #315EFB;
border:none;
border-radius: 84px;
padding: 10px 0px;
color:white;
font-family: 'Source Han Sans CN';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
}
.button-more:hover{
  background-color: #90a8ff;
}
.more-text{
  width: 184px;
height: 24px;

/* 正文强调 */

font-family: 'Source Han Sans CN';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: center;

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
</style>