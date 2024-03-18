<template>
    <header>
        <!-- <div class="container">
            <div class="header-top-wrapper">
                <div class="header-top-language">
                    <h3>
                        Accessible
                    </h3>
                    <select name="" id="">
                        <option value="Russ">Russ</option>
                        <option value="O`zbek">O`zbek`</option>
                    </select>
                </div>
                <div class="header-top-weather">
                <a target="_blank" href="https://nochi.com/weather/tashkent-12205"><img src="https://w.bookcdn.com/weather/picture/21_12205_1_20_f1c411_250_f39c13_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=70241&domid=589&anc_id=10477"  alt="booked.net"/></a>
                </div>
            </div>
        </div>
        <div class="header-line">

        </div> -->
        <div class="container">
            <div class="header-main">
            <div class="heaer-logo">
                <h1>
                    Logo
                </h1>
                <div class="header-line-y">

                </div>
                <h3>
                    Lorem ipsum dolor
                </h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">Bosh sahifa</router-link>
                    </li>
                    <li>
                        <router-link to="/teacher">Ustozlar</router-link>
                    </li>
                </ul>
            </nav>
            <div @click="burger" class="burger">
            <span class="burger__line burger__line_first"></span>
            <span class="burger__line burger__line_second"></span>
            <span class="burger__line burger__line_third"></span>
            <span class="burger__line burger__line_fourth"></span>
        </div>
        <div class="header-modal-mobile">
            <ul>
                    <li>
                        <router-link to="/">Bosh sahifa</router-link>
                    </li>
                    <li>
                        <router-link to="/teacher">Ustozlar</router-link>
                    </li>
                </ul>
        </div>
        </div>
        </div>
    </header>
</template>

<script setup>
    function burger() {
        const burger = document.querySelector('.burger');
        const modal = document.querySelector('.header-modal-mobile')
        burger.classList.toggle('burger_active');
        modal.classList.toggle('db');
        
    }
</script>

<style lang="css" scoped>
    header{
        margin-top: 10px;
    }
    .heaer-logo{
        cursor: pointer;
    }
    .header-top-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-top-language{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .header-line{
        margin-top: 10px;
        width: 100%;
        height: 2px;
        background-color: black;
    }
    .header-main{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .header-main nav ul{
        display: flex;
        align-items: center;
        gap: 80px;
    }
    .header-main nav li a {
        color: black;
    }
    .header-bottom{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header-bottom input{
        width: 500px;
        border: none;
        outline: transparent;
        border-bottom: 2px solid rgba(0, 0, 0, 0.499);
        padding-bottom: 10px;
    }
    .header-bottom svg{
        font-size: 30px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.499);
    }
    .header-bottom div{
        display: flex;
        align-items: center;
    }
    
.burger {
    width: 30px;
    height: 20px;
    cursor: pointer;
    position: relative;
    z-index: 11;
}

.burger__line {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #000;
    position: absolute;
    left: 0;
    transition: .3s all linear;
}

.burger__line_first {
    top: 0;
}

.burger__line_second,
.burger__line_third {
    top: 50%;
    transform: translateY(-50%);
}

.burger__line_fourth {
    bottom: 0;
}

.burger_active .burger__line_first,
.burger_active .burger__line_fourth {
    opacity: 0;
}

.burger_active .burger__line_second {
    transform: translateY(-50%) rotate(45deg);
}

.burger_active .burger__line_third {
    transform: translateY(-50%) rotate(-45deg);
}
.burger{
    display: none;
}
.header-modal-mobile{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgb(36, 36, 36);
    padding-top: 50px;
    display: none;
}
.header-modal-mobile ul {
    text-align: center;
}
.header-modal-mobile ul li {
    margin-top: 20px;
}
.header-modal-mobile ul li a {
    color: white;
}
.db{
    display: block;
}
.header-line-y{
    height: 50px;
    width: 2px;
    background-color: black;
}
.heaer-logo{
    display: flex;
    align-items: center;
    gap: 10px;
}
.heaer-logo h3{
    width: 100px;
}
    @media(max-width:500px){
        .header-main nav ul{
            display: none;
        }
        .burger{
            display: block;
        }
    }
    @media(max-width:300px){
        .header-top-weather{
            display: none;
        }
    }
</style>