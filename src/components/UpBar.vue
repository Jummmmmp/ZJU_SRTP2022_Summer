<script>
export default {
    data() {
        return {
            username:"陈建海",
        }
    },
}
</script>

<template>
    <div class="up-bar">
        <div class="up-bar-inside">
            <img src="../assets/logo.png" class="logo">
            <!-- <div class="navigation" v-for="item in navi" key="id"> 
                <router-link to={{item.link}} :class="navigation-text" @click="calculatepage(id)">{{item.text}}</router-link>
            </div> -->
            <!--因为router-link不支持绑定事件，所以不写成循环渲染的形式-->
            <div class="navigation">
                <router-link to="/"  active-class="active" class="navigation-text" >知坊首页</router-link>
                <router-link to="/appbook" active-class="active" class="navigation-text" >教程手册</router-link>
                <router-link to="/appclass" active-class="active" class="navigation-text" >知坊课程</router-link>
                <router-link to="/appjudge" active-class="active" class="navigation-text" >题目测评</router-link>
                <router-link to="/appgame" active-class="active" class="navigation-text" >模拟游戏</router-link>
            </div>
            <img src="../assets/search.png">
            <div class="user">
                <div class="username-out">
                    <p class="user-name">{{username}}</p>
                </div>
                <img src="../assets/user-image.png">
            </div>
        </div>
    </div>

</template>

<style>
.up-bar {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 128px;
    gap: 10px;
    /* position: absolute;  */
    width: 100%;
    height: 94.58px;
    left: 0px;
    top: 0px;
}
.up-bar-inside{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0px;
    gap: 42px;
    width: 1184px;
    height: 74.58px;
}
.logo {
    width: 176px;
    height: 74.58px;
}
.navigation {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 28px;

    width: 432px;
    height: 24px;
}
.navigation-text {
    width: 64px;
    height: 24px;
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1F2431;
}
.active {
    width: 64px;
    height: 24px;
    font-family: 'Source Han Sans CN';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #315EFB;
}
.navigation-text:hover {
    color: #315EFB;
}
.user {
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 20px;

width: 116px;
height: 48px;


/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;
}
.username-out {
    width: 48px;
height: 24px;
}
.user-name {
   /*  position: absolute; */
width: 48px;
height: 24px;
left: 0px;
top: 0px;

/* 正文强调 */

font-family: 'Source Han Sans CN';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


/* text-black */

color: #1F2431;
}
</style>