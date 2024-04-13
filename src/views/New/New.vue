<template>
    <div class="new-header">
        <div class="container">
            <div class="new-header-wrapper">
                <div class="header-title">
                    <h1>
                        Yangiliklar
                    </h1>
                </div>
                <div class="header-foto">
                    <img src="https://huquqiyportal.uz/_nuxt/img/news-icon.cf09c28.png" alt="foto">
                </div>
            </div>
        </div>
    </div>
    <div class="new-main">
        <div class="container">
            <div class="main-wrapper">
                <div class="main-left">
                    <div class="left-card" v-for="i in store.allProducts" :key="i.id">
                        <img :src="CONFIG.API_URL + i.image" alt="foto">
                        <div class="left-card-content">
                            <h3>
                                {{ i.title }}
                            </h3>
                            <p>
                                {{ i.body }}
                            </p>
                            <div class="card-icon">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor"
                                            d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z" />
                                        <path fill="currentColor"
                                            d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5" />
                                    </svg>
                                    <span>
                                        {{ i.createdAt.slice(0, 10) }}
                                    </span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
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
                </div>
                <div class="main-right">
                    <h1>
                        So‘nggi yangiliklar
                    </h1>
                    <div class="main-right-grid">
                        <div class="right-card">
                            <img src="https://media.huquqiyportal.uz/public/files/1686130895103.jpg" alt="foto">
                            <div class="right-card-content">
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatem.
                                </h3>
                                <div class="card-icon">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 16 16">
                                            <path fill="currentColor"
                                                d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z" />
                                            <path fill="currentColor"
                                                d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5" />
                                        </svg>
                                        <span>
                                            06.10.24
                                        </span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import axios from "@/services/axios";
import CONFIG from "@/stores/config";

const store = reactive({
    allProducts: false,
});

let hozir = new Date();
let kunOySoat = hozir.toLocaleString('uz-UZ', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
console.log(kunOySoat);


const getAllProduct = () => {
    axios
        .get("/news/find-all", {
        })
        .then((res) => {
            store.allProducts = res.data
            store.allProducts = store.allProducts.reverse()
            for (let i in store.allProducts) {
                console.log(store.allProducts[i].createdAt);
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getAllProduct();
});
</script>

<style lang="css" scoped>
.new-header {
    margin-top: 140px;
    padding: 20px;
    background-color: #001457;
}

.new-header h1 {
    font-size: 40px;
    font-weight: 400;
    color: white;
}

.new-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media(max-width:425px) {
    .new-header h1 {
        text-align: center;
    }

    .header-foto {
        display: none;
    }
}

.new-main {
    margin-top: 50px;
}

.main-left {
    width: 70%;
}

.left-card {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #DEE5ED;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
}

.left-card img {
    width: 310px;
    height: 200px;
    border-radius: 30px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
}

.left-card h3 {
    margin-bottom: 20px;
}



.card-icon {
    display: flex;
    align-items: center;
    gap: 20px;
}

.card-icon div {
    cursor: pointer;
    color: #B2B2B2;
    display: flex;
    align-items: center;
    gap: 5px;
}

.card-icon svg {
    font-size: 20px;
}

.main-right {
    width: 30%;
}

.right-card {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.right-card img {
    width: 305px;
    height: 100px;
    border-radius: 30px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
}

.main-wrapper {
    display: flex;
    /* justify-content: space-between; */
    gap: 30px;
}

.main-right {
    height: fit-content;
    border: 1px solid #DEE5ED;
    border-radius: 30px;
    padding: 20px;
}

.main-right h1 {
    margin-bottom: 20px;
}

.right-card h3 {
    margin-bottom: 10px;
}

.left-card p {
    margin-bottom: 20px;
    width: 100%;
}

@media(max-width:1070px) {
    .main-wrapper {
        display: flex;
        flex-direction: column-reverse;
        flex-wrap: wrap;
    }

    .main-right,
    .main-left {
        width: 100%;
    }

    .main-right-grid {
        display: flex;
        gap: 10px;
        align-items: center;
        overflow: auto;
        overflow-x: scroll;
    }

    .right-card h3 {
        font-size: 80%;
    }
    .right-card img{
        height: 150px;
    }
}

@media(max-width:700px) {
    .left-card {
        flex-direction: column;

    }

    .left-card img {
        width: 100%;
    }

    .left-card-content {
        width: 100%;
    }
}

@media(max-width:400px) {
    .main-right h1 {
        font-size: 20px;
    }
}
</style>