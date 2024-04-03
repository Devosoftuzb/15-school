<template>
    <header class="header">
        <div @click="burger"  class="burger">
            <svg  class="bropen" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M32 96v64h448V96zm0 128v64h448v-64zm0 128v64h448v-64z"/></svg>
            <svg class="brclose" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
        </div>
        <div>

        </div>
    </header>
</template>

<script setup>
import { useSidebarStore } from "../stores/sidebar.js";
const sidebar = useSidebarStore();
function burger() {
        sidebar.sidebar = !sidebar.sidebar
        const burger = document.querySelector('.bropen');
        const burgercl = document.querySelector('.brclose');
        const modal = document.querySelector('.header-modal-mobile')
        burgercl.classList.toggle('dn');
        burger.classList.toggle('db');
        // burgercl.classList.remove('db');
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
    display: none;
    font-size: 30px;
    cursor: pointer;
    position: relative;
    z-index: 22;
}

.bropen{
    display: none;
}
.brclose{
    display: block;
    color: white;
    position: fixed;
    z-index: 22;
}
.dn{
    display: none;
}
.db{
    display: block;
}
@media(max-width:1000px){
    .burger{
        display: block;
    }
}
@media(max-width:800px){
    header{
        margin-left: 0;
    }
}
</style>