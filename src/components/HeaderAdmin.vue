<template>
    <header class="header">
        <!-- <div @click="burger"  class="burger">
            <span class="burger__line burger__line_first"></span>
            <span class="burger__line burger__line_second"></span>
            <span class="burger__line burger__line_third"></span>
            <span class="burger__line burger__line_fourth"></span>
        </div> -->
        <div class="profil">
            <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" alt="">
        </div>
    </header>
</template>

<script setup>
import { useSidebarStore } from "../stores/sidebar.js";
const sidebar = useSidebarStore();
function burger() {
        sidebar.sidebar = !sidebar.sidebar
        const burger = document.querySelector('.burger');
        const modal = document.querySelector('.header-modal-mobile')
        burger.classList.toggle('burger_active');
        modal.classList.toggle('db');
        
    }
</script>

<style lang="css" scoped>
.header{
    position: relative;
    /* margin-left: 310px; */
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom:5px ;
    padding-top:5px ;
}
.profil{
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: 2px solid black;
    border-radius: 50%;
}
.profil img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
@media(max-width:800px){
    header{
        margin-left: 0;
    }
}
</style>