<template>
    <section class="hero">
        <div class="container hero-wrapper">
            <div class="overflow">

            </div>
            <div class="hero-content">
                <h1>
                    Huquqiy Portla
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima
                </p>
            </div>
        </div>
    </section>
    <section class="new">
        <div class="container">
            <div class="new-title">
                <h1>
                    Yangiliklar
                </h1>
                <router-link to="/yangilik"><button>Barcha yangiliklar</button></router-link>
            </div>
            <div class="new-wrapper">
                <div class="new-card" v-show="store.oneNews">
                    <img :src="CONFIG.API_URL + store.oneNews.image" alt="">
                    <div class="new-card-content">
                        <h3>
                            {{ store.oneNews.title }}
                        </h3>
                        <p>
                            {{ store.oneNews.body }}
                        </p>
                        <div class="new-icon">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                    <path fill="currentColor"
                                        d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z" />
                                    <path fill="currentColor"
                                        d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5" />
                                </svg>
                                <span>
                                    {{ store.newsData }}
                                </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                </svg>
                                <span>
                                    126
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="new-cursor">
                    <div class="left-cursor" @click="back">
                        <svg class="right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 15 15">
                            <path fill="none" stroke="currentColor" stroke-linecap="square" d="M10 14L3 7.5L10 1" />
                        </svg>
                    </div>
                    <div class="right-cursor" @click="next">
                        <svg class="left" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 15 15">
                            <path fill="none" stroke="currentColor" stroke-linecap="square" d="m5 14l7-6.5L5 1" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="Teacher">
        <div class="container">
            <div class="teacher-title">
                <div class="teacher-title-wrapper">
                    <div class="teacher-title-line"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z" />
                    </svg>
                    <div class="teacher-title-line"></div>
                </div>
                <h1>
                    Elected Officials
                </h1>
            </div>
            <div class="teacher-wrapper" v-for="i in store.teachers" :key="i.id">
                <div v-if="i.status" class="teacher-wrapper">
                    <div class="teacher-foto">
                        <img :src="CONFIG.API_URL + i.image"
                            alt="foto">
                    </div>
                    <div class="teacher-bio">
                        <h3>
                            Direktor
                        </h3>
                        <h2>
                            {{ i.full_name }}
                        </h2>
                        <p>
                            {{ i.info }}
                        </p>
                        <div class="teacher-bio-icon-grid">
                            <a class="telegram" target="_blank" href="!#"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="1em" height="1em" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <g clip-path="url(#akarIconsTelegramFill0)">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635"
                                                clip-rule="evenodd" />
                                        </g>
                                        <defs>
                                            <clipPath id="akarIconsTelegramFill0">
                                                <path fill="#fff" d="M0 0h24v24H0z" />
                                            </clipPath>
                                        </defs>
                                    </g>
                                </svg></a>
                            <a class="instagram" target="_blank" href="!#"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                </svg></a>
                            <a class="facebook" target="_blank" href="!#"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                </svg></a>
                            <a class="twiter" target="_blank" href="!#"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                                </svg></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="teacher-subtitle">
                <h2>
                    State Elected Officers
                </h2>
                <div>
                    <RouterLink to="/teacher">
                        <h3>
                            Batafsil <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
                            </svg>
                        </h3>
                    </RouterLink>
                </div>
            </div>
            <div class="teacher-swiper">
                <div v-for="i in store.showTeachers" :key="i.id">
                    <div class="teacher-card" v-if="!i.status">
                        <img class="teacher-img"
                            :src="CONFIG.API_URL + i.image"
                            alt="foto">
                        <h2 class="teacher-name">
                            {{ i.full_name }}
                        </h2>
                        <h3>
                            {{ i.profession }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="circle">
        <div class="container">
            <div class="circle-title">
                <h1>
                    Bepul Togaraklar
                </h1>
            </div>
            <div class="circle-wrapper">
                <div class="circle-card" v-for="i in store.showLesson" :key="i.id">
                    <img :src="CONFIG.API_URL + i.image"
                        alt="foto">
                    <h3>
                        {{ i.title }}
                    </h3>
                    <div class="cricle-grid">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                <path fill="#ffce31"
                                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                <path fill="#ffce31"
                                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                <path fill="#ffce31"
                                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                <path fill="#ffce31"
                                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
                                <path fill="#ffce31"
                                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                            </svg>
                        </div>
                        <span>
                            {{ i.week_days }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="map">
        <div class="container">
            <div class="map-title">
                <h1>
                    Hududiy Boshqarmalar
                </h1>
                <h2>
                    <router-link to="/contact">
                        Bog`lanish
                    </router-link>
                </h2>
            </div>
            <div class="map-wrapper">
                <div class="map-img">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24271.83735470279!2d68.76355628885737!3d40.49783261717992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20721fdb13df7%3A0x8a5a8468b3d6235b!2s15-maktab!5e0!3m2!1sru!2s!4v1712145430487!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="map-content">
                    <h2>
                        Manzil
                    </h2>
                    <h3>
                        Guliston shaxar 
                    </h3>
                    <div class="map-content-line">

                    </div>
                    <h2>
                        Mojal
                    </h2>
                    <h3>
                        Dram teatir oldidagi bino 
                    </h3>
                </div>
            </div>
        </div>
    </section>
    <section class="unions">
        <div class="container">
            <div class="unions-wrapper">
                <div  v-for="i in store.partnerships" :key="i.id">
                    <img :src="CONFIG.API_URL + i.image" alt="foto">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import axios from "@/services/axios";
import CONFIG from "@/stores/config";
let navig = document.getElementById("navig")
function changeValu() {
    navig.value = "Redq"
}

const store = reactive({
    news: false,
    oneNews: false,
    newsData: false,
    teachers: false,
    showTeachers: [],
    lessons: false,
    showLesson: [],
    partnerships: false,
    sch: 0,
    length: 0
});


const next = () => {
    if(store.sch == store.length - 1){
        store.sch = 0
    }
    else {
        store.sch = store.sch + 1
    }
    getAllNewsProduct()
}

const back = () => {
    if(store.sch == 0){
        store.sch = store.length - 1
    }
    else {
        store.sch = store.sch - 1
    }
    getAllNewsProduct()
}


const getAllNewsProduct = () => {
    axios
        .get("/news/find-all", {
        })
        .then((res) => {
            store.news = res.data
            store.length = res.data?.length
            store.oneNews = store.news[store.sch]
            store.newsData = store.oneNews.createdAt.slice(0,10)
        })
        .catch((error) => {
            console.log(error);
        });
};

const getAllTeachersProduct = () => {
    axios
        .get("/teachers/find-all", {
        })
        .then((res) => {
            store.teachers = res.data
            store.teachers.sort(function (x, y) {
                return (x.status === y.status) ? 0 : y.status ? -1 : 1;
            });
            if (store.teachers.length > 7){
                for (let i = 0; i < 7; i++){
                    store.showTeachers.push(store.teachers[i])
                }
            }
            else {
                store.showTeachers = store.teachers
            }
        })
        .catch((error) => {
            console.log(error);
        });
};


const getAllLessonsProduct = () => {
    axios
        .get("/lessons/find-all", {
        })
        .then((res) => {
            store.lessons = res.data
            if (store.lessons.length > 6){
                for (let i = 0; i < 6; i++){
                    store.showLesson.push(store.lessons[i])
                }
            }
            else {
                store.showLesson = store.lessons
            }
        })
        .catch((error) => {
            console.log(error);
        });
};


const getAllPartnershipsProduct = () => {
    axios
        .get("/partnerships/find-all", {
        })
        .then((res) => {
            store.partnerships = res.data
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getAllNewsProduct();
    getAllTeachersProduct()
    getAllLessonsProduct()
    getAllPartnershipsProduct()
});
// const app = Vue.createApp   ({
//       data() {
//         return {
//           text: 'Toshkent',
//           isHovered: false
//         }
//       },
//       methods: {
//         changeValue() {
//           this.isHovered = true;
//           this.text = 'Andijon';
//         },
//         resetValue() {
//           this.isHovered = false;
//           this.text = 'Toshkent';
//         }
//       }
//     });

//     app.mount('#app');


</script>

<style lang="css" scoped>
.hero {
    position: relative;
    /* margin-top: 140px; */
    background-image: url("/imges/hero-bg.jpg");
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 230px;
    padding-bottom: 230px;
}

.hero h1 {
    font-size: 60px;
    color: white;
    margin-bottom: 20px;
}

.hero p {
    font-size: 25px;
    color: white;
    width: 600px;
}

.hero input {
    width: 100%;
    padding: 15px;
    border: none;
    outline: none;
    background-color: transparent;
}

.hero label {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
    padding: 5px 0;
    background-color: white;
    padding-right: 15px;
    border-radius: 10px;
}

.hero label svg {
    font-size: 25px;
    cursor: pointer;
}

.hero-card {
    cursor: pointer;
    padding: 8px 10px;
    border: 2px solid #CEC1B9;
    border-radius: 30px;
}

.hero-card h3 {
    color: white;
}

.hero-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    width: 40%;
}

@media(max-width:730px) {
    .hero label {
        width: auto;
    }

    .hero p {
        width: 100%;
    }
}

@media(max-width:430px) {
    .hero-wrapper {
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
    }
}

.new {
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
}

.new-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}

.new-title h1 {
    font-size: 40px;
    font-weight: 500;
}

.new-title button {
    padding: 10px 20px;
    border-radius: 40px;
    border: 1px solid #001457;
    background-color: #001457;
    color: white;
    cursor: pointer;
    font-size: 15px;
}

.new-title button:hover {
    background-color: transparent;
    color: #001457;
}

.new-card img {
    width: 500px;
    height: 300px;
    border-radius: 30px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
}

.new-card {
    display: flex;
    gap: 30px;
}

.new-card h3 {
    font-size: 25px;
    margin-bottom: 20px;

}

.new-card p {
    font-size: 20px;
    margin-bottom: 50px;
}

.new-icon {
    display: flex;
    align-items: center;
    gap: 30px;
}

.new-icon div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4a4a4ace;
    cursor: pointer;
}

.new-cursor {
    position: absolute;
    bottom: 32px;
    right: 146px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.new-cursor svg {
    font-size: 30px;
    color: white;
}

.left-cursor {
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 15px;
    background-color: #001457;
    cursor: pointer;
    border: 1px solid #001457;
}

.right-cursor {
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 15px;
    background-color: #001457;
    cursor: pointer;
    border: 1px solid #001457;
}

.left-cursor:hover {
    background-color: white;
    .right {
        color: #001457;
    }
}

.right-cursor:hover {
    background-color: white;
    .left {
        color: #001457;
    }
}

@media(max-width:1040px) {
    .new-card {
        flex-direction: column;
        gap: 30px;
    }

    .new-card img {
        width: 100%;
        height: 100%;
    }

    .new-cursor {
        bottom: -7px;
        right: 20px;
    }
}

@media(max-width:400px) {
    .new-title {
        flex-direction: column;
        gap: 20px;
    }

    .new-cursor {
        width: 100%;
        position: relative;
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left-cursor {
        border-radius: 30px;
        width: 40%;
    }

    .right-cursor {
        border-radius: 30px;
        width: 40%;
    }
}


.Teacher {
    background-color: #001457;
    padding-top: 20px;
    padding-bottom: 50px;
}

.teacher-title {
    margin: 0 auto;
    width: 400px;
    text-align: center;
}

.teacher-title svg {
    color: #E9A821;
    font-size: 30px;
}

.teacher-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.teacher-title-line {
    width: 30px;
    height: 2px;
    background-color: #E9A821;
}

.teacher-title h1 {
    color: white;
    font-size: 50px;
    border-bottom: #E9A821 2px solid;
}

.teacher-foto img {
    width: 450px;
    height: 490px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    border-radius:20px ;
}

.teacher-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.teacher-bio h3 {
    color: #E9A821;
    margin-bottom: 10px;
}

.teacher-bio h2 {
    font-size: 30px;
    color: white;
    margin-bottom: 20px;
}

.teacher-bio p {
    color: white;
    margin-bottom: 20px;
}

.teacher-bio-icon-grid {
    display: flex;
    align-items: center;
    gap: 10px;
}

.teacher-bio-icon-grid a {
    color: white;
    font-size: 35px;
}

.teacher-subtitle {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.teacher-subtitle div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.teacher-subtitle h2 {
    cursor: pointer;
    color: white;
    padding-bottom: 10px;
    border-bottom: 2px solid red;
}

.teacher-subtitle h2:hover {
    color: #E9A821;
}

.teacher-subtitle h3 {
    padding-bottom: 10px;
    color: #878787;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.teacher-swiper {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.telegram:hover {
    color: rgb(44, 122, 248);
}

.facebook:hover {
    color: rgb(44, 122, 248);
}

.twiter:hover {
    color: rgb(44, 122, 248);
}

.instagram:hover {
    color: #8134AF;
}

.teacher-card {
    text-align: center;
    cursor: pointer;
    position: relative;
}

.teacher-card:hover {
    .teacher-name {
        border-bottom: white solid 2px;
    }

    .teacher-img {
        box-shadow: 40px 20px 40px black;
    }
}

.teacher-card img {
    transition: 0.5s;
    width: 200px;
    border-radius: 20px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    border-radius:20px ;
}

.teacher-card h2 {
    width: 100%;
    color: white;
    margin-bottom: 10px;
    border-bottom: #061E3F solid 2px;
}

.teacher-card h3 {
    color: white;

}

@media(max-width:1500px) {
    .teacher-swiper {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media(max-width:1110px) {
    .teacher-swiper {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media(max-width:945px) {
    .teacher-swiper {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(max-width:890px) {
    .teacher-wrapper {
        flex-direction: column;
        text-align: center;
    }
}

@media(max-width:670px) {
    .teacher-swiper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:630px) {
    .teacher-subtitle {
        flex-direction: column;
        gap: 20px;
    }
}

@media(max-width:460px) {
    .teacher-swiper {
        grid-template-columns: repeat(1, 1fr);
    }

    .teacher-foto img {
        width: 100%;
        height: 100%;
    }

    .teacher-title {
        width: 100%;
    }

    .teacher-title h1 {
        font-size: 30px;
    }
}

@media(max-width:330px) {
    .teacher-subtitle div {
        flex-direction: column;
        gap: 20px;
    }
}

.circle {
    background-color: #F9F9F9;
    margin-top: 80px;
    padding: 30px;
}

.circle-title h1 {
    font-size: 40px;
}

.circle-card {
    padding: 30px 20px;
    /* padding-bottom: 20px; */
    background-color: white;
    /* width: 500px; */
}

.circle-card img {
    width: 100%;
    height: 300px;
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
    border-radius:20px ;
}

.circle-card h3 {
    margin-bottom: 10px;
}

.cricle-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.circle-wrapper {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 30px;
}

.cricle-grid div {
    display: flex;
    align-items: center;
    gap: 5px;
}

.circle-card svg {
    cursor: pointer;
}

@media(max-width:1600px) {
    .circle-card {
        width: 450px;
    }
}

@media(max-width:1450px) {
    .circle-card {
        width: 400px;
    }
}

@media(max-width:1280px) {
    .circle-card {
        width: 350px;
    }
}

@media(max-width:1140px) {
    .circle-wrapper {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }
}

@media(max-width:750px) {
    .circle-wrapper {
        grid-template-columns: repeat(1, 1fr);
        margin-left: 150px;
    }

}

@media(max-width:640px) {
    .circle-wrapper {
        grid-template-columns: repeat(1, 1fr);
        margin-left: 100px;
    }

}

@media(max-width:560px) {
    .circle-wrapper {
        grid-template-columns: repeat(1, 1fr);
        margin-left: 80px;
    }

}

@media(max-width:500px) {
    .circle-wrapper {
        grid-template-columns: repeat(1, 1fr);
        margin-left: 50px;
    }

}

@media(max-width:450px) {
    .circle-card {
        width: 100%;
    }

    .circle-wrapper {
        margin-left: 0;
    }
}

/* @media(max-width:300px){
        .cricle-grid {
            flex-direction: column;
            gap: 10px;
        }
    } */




.map {
    padding-top: 150px;
}

.map-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #878787;
    padding-bottom: 15px;
    margin-bottom: 100px;
}

.map-title h1 {
    font-size: 50px;
}

.map-title h2 a{
    font-size: 20px;
    font-weight: 400;
    color: #95929E;
    cursor: pointer;
}

.map-img {
    width: 900px;
   }
   .map-img iframe{
    width: 100%;
    border-radius: 30px;
   }
   .map-wrapper{
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    gap: 20px;
}

.map-content {
    border-top: 2px solid #043B87;
    border-bottom: 2px solid #043B87;
    padding-top: 30px;
    padding: 50px 80px;
    background-color: #F8F8F8;
    width: 500px;
}

.map-content h2 {
    color: #043B87;
    font-size: 35px;
    margin-bottom: 20px;
}

.map-content h3 {
    color: #043B87;
}

.map-content-line {
    width: 100px;
    height: 2px;
    background-color: #043B87;
    margin-top: 10px;
    margin-bottom: 30px;
}

.map-content-grid {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 25px;
}

.map-content-grid h4 {
    font-size: 20px;
    color: #043B87;
    padding-right: 20px;
    border-right: 1px solid #043B87;
}

.map-content h5 {
    font-size: 20px;
    color: #043B87;
    font-weight: 500;
}

.map-img svg path {
    fill: #C8C8C8;
    stroke: #FFFFFF;
}

.map-img svg path:nth-child(1):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(2):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(3):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(4):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(5):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(6):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(7):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(8):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(9):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(10):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(11):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(12):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(13):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(14):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(15):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.map-img svg path:nth-child(16):hover {
    fill: #043B87 !important;
    cursor: pointer;
}

.navig {
    text-align: end;
    color: #043B87;
}

@media(max-width:1400px) {
    .map-wrapper {
        flex-direction: column;
    }
}

@media(max-width:950px) {
    .map-img {
        width: 100%;
    }
}

@media(max-width:430px) {
    .map-content {
        padding: 20px;
    }
}

@media(max-width:715px) {
    .map-title {
        flex-direction: column;
        gap: 50px;
    }
}

@media(max-width:350px) {
    .map-title h1 {
        font-size: 25px;
    }
}

@media(max-width:350px) {
    .map-content h2 {
        font-size: 25px;
    }
}
@media(max-width:500px) {
    .map-content  {
        width: 100%;
    }
}

.unions {
    padding-top: 50px;
    margin-top: 50px;
    background-color: #F9F9F9;
}

.unions-wrapper img {
    width: 200px;
    cursor: pointer;
}

.unions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
}

@media(max-width:950px) {
    .unions-wrapper {
        flex-direction: column;
        gap: 50px;
    }

    .unions img {
        width: 350px
    }
}

@media(max-width:500px) {
    .unions img {
        width: 100%
    }
}
.hero-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-content {
    text-align: center;
    position: relative;
    z-index: 2;
}
.overflow{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(56, 56, 56, 0.418);
}
</style>