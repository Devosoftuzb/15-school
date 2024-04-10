<template>
    <div class="lesson-header">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-title">
                    <h1>
                        Togaraklar
                    </h1>
                </div>
                <div class="header-img">
                    <img src="https://huquqiyportal.uz/_nuxt/img/headbook.ebdb547.svg" alt="foto">
                </div>
            </div>
        </div>
    </div>
    <div class="lesson-main">
        <section class="circle">
        <div class="container">
            <div class="circle-title">
                <!-- <h1>
                    Bepul Togaraklar
                </h1> -->
            </div>
            <div class="circle-wrapper">
                <div class="circle-card" v-for="i in store.allProducts" :key="i.id">
                    <img :src="CONFIG.API_URL + i.image" alt="foto">
                    <h3>
                        {{ i.title }}
                    </h3>
                    <div class="cricle-grid">
                        <div>   
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
                        </div>
                        <span>
                            {{ i.week_days }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import axios from "@/services/axios";
import CONFIG from "@/stores/config";

const store = reactive({
    allProducts: false,
});

const getAllProduct = () => {
    axios
        .get("/lessons/find-all", {
        })
        .then((res) => {
            console.log(res.data);
            store.allProducts = res.data
            store.error = false;
        })
        .catch((error) => {
            notification.warning(error.message);
            store.error = true;
            store.allProducts = error.message;
        });
};

onMounted(() => {
    getAllProduct();
});
</script>

<style lang="css" scoped>
    .lesson-header{
        margin-top: 120px;
        padding: 20px;
        background-color: #E1EFED;
    }
    .header-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .lesson-header h1{
        font-size: 40px;
        font-weight: 400;
    }
    @media(max-width:425px){
    .lesson-header h1{
        text-align: center;
    }
    .header-img{
        display: none;
    }
}


.circle{
        background-color: #F9F9F9;
        margin-top: 80px;
    }
    .circle-title h1{
        font-size: 40px;
    }
    .circle-card{
        padding:10px 20px;
        padding-bottom: 20px;
        background-color: white;
        width: 500px;
    }
    .circle-card img{
        width: 100%;
        /* height: 400px; */
    }
    .circle-card h3{
        margin-bottom: 10px;
    }
    .cricle-grid{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .circle-wrapper{
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-content: center;
        gap: 30px;
    }
    .cricle-grid div{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .circle-card svg{
        cursor: pointer;
    }
    @media(max-width:1600px){
        .circle-card{
            width: 450px;
        }
    }
    @media(max-width:1450px){
        .circle-card{
            width: 400px;
        }
    }
    @media(max-width:1280px){
        .circle-card{
            width: 350px;
        }
    }
    @media(max-width:1140px){
        .circle-wrapper{
            grid-template-columns: repeat(2,1fr);
            justify-content: center;
        }
    }
    @media(max-width:750px){
        .circle-wrapper{
            grid-template-columns: repeat(1,1fr);
            margin-left: 150px;
        }
        
    }
    @media(max-width:640px){
        .circle-wrapper{
            grid-template-columns: repeat(1,1fr);
            margin-left: 100px;
        }
        
    }
    @media(max-width:560px){
        .circle-wrapper{
            grid-template-columns: repeat(1,1fr);
            margin-left: 80px;
        }
        
    }
    @media(max-width:500px){
        .circle-wrapper{
            grid-template-columns: repeat(1,1fr);
            margin-left: 50px;
        }
        
    }
    @media(max-width:450px){
        .circle-card{
            width: 100%;
        }
        .circle-wrapper{
            margin-left: 0;
        }
    }
    /* @media(max-width:300px){
        .cricle-grid {
            flex-direction: column;
            gap: 10px;
        }
    } */

</style>