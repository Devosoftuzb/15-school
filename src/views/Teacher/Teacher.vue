<template>
    <div class="teacher-header">
        <div class="container">
            <div class="teacher-header-wrapper">
                <div class="header-title">
                    <h1>
                        Ustozlar
                    </h1>
                </div>
                <div class="teacher-header-foto">
                    <img src="https://huquqiyportal.uz/_nuxt/img/icon-test.4d53b45.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="teacher2">
        <div class="container">
            <div class="teacher2-wrapper">
                <div class="teacher2-content">
                    <!-- <div class="card-title">
                        <h1>
                            Ustozlar
                        </h1>
                    </div> -->
                    <div class="techer2-card" v-for="i in store.allProducts" :key="i.id">
                        <div class="card-wrapper">
                            <div class="card-wrapper-foto">
                                <img :src="CONFIG.API_URL + i.image"
                                    alt="">
                            </div>
                            <div class="card-content">
                                <h2>
                                    {{ i.profession }}
                                </h2>
                                <h3>
                                    {{ i.full_name }}
                                </h3>
                                <div class="card-grid">
                                    <h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                                        </svg>
                                        Telefon
                                    </h4>
                                    <a target="_blank" href="!#">{{ i.number }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="teacher2-menu">
                    <div class="menu">
                        <h2>
                            Popular links
                        </h2>
                        <div class="menu-line">

                        </div>
                        <ul>
                            <li>
                                Lorem1
                            </li>
                            <li>
                                Lorem1
                            </li>
                            <li>
                                Lorem1
                            </li>
                            <li>
                                Lorem1
                            </li>
                        </ul>
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

const getAllProduct = () => {
    axios
        .get("/teachers/find-all", {
            //   headers: {
            //     Authorization: `Bearer ${localStorage.getItem("token")}`,
            //   },
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
.teacher-header {
    margin-top: 140px;
    padding: 20px;
    background-color: #E1EFED;
}

.teacher-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-title h1 {
    font-size: 40px;
    font-weight: 400;
}

@media(max-width:425px) {
    .header-title h1 {
        text-align: center;
    }

    .teacher-header-foto {
        display: none;
    }
}

.card-title h1 {
    font-size: 60px;
    font-weight: 300;
}

.card-title {
    padding: 20px 5px;
    background-color: rgba(0, 0, 0, 0.082);
    margin-bottom: 100px;
}

.card-wrapper-foto img {
    width: 400px;
}

.card-content h2 {
    color: #848A95;
    margin-bottom: 10px;
    font-size: 50px;
}

.card-content h3 {
    font-size: 30px;
    color: #848A95;
    margin-bottom: 20px;
}

.card-grid {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.card-grid h4 {
    color: #61A1FE;
    display: flex;
    align-items: center;
    gap: 5px;
}

.card-grid svg {
    font-size: 25px;
}

.card-wrapper {
    display: flex;
    align-items: center;
    gap: 50px;
    /* justify-content: space-between; */
}

.teacher2-wrapper {
    margin-top: 50px;
    width: 100%;
    display: flex;
    gap: 20px;
}

.menu {
    width: 350px;
    height: 500px;
    background-color: #EBF2F8;
    padding: 30px;
}

.teacher2-content {
    width: 100%;
    /* box-shadow: 5px 10px 5px  rgb(79, 79, 79); */
    border: 1px solid #DEE5ED;
    border-radius: 30px;
    padding: 50px 0;
    padding-left: 10px;
}

.menu-line {
    margin-bottom: 10px;
    margin-top: 10px;
    height: 3px;
    width: 100%;
    background-color: gold;
}

.menu ul {
    /* text-align: center; */
}

.menu ul li {
    margin-bottom: 20px;

}

@media(max-width:1150px) {
    .teacher2-content img {
        width: 300px;
    }
}

@media(max-width:1030px) {
    .menu {
        width: 200px;
    }
}

@media(max-width:850px) {
    .menu {
        display: none;
    }

    .teacher2-wrapper {
        gap: 0;
    }

    .teacher2-content {
        box-shadow: none;
    }
}

@media(max-width:650px) {
    .card-wrapper {
        flex-direction: column;
        gap: 10px;
    }
}

@media(max-width:300px) {
    .card-wrapper-foto img {
        width: 100%;
        border-radius: 20px;
    }

    .card-content h2 {
        font-size: 30px;
    }

    .card-grid {
        gap: 2px;
    }

    .teacher2-content {
        padding: 20px 10px;
    }
}
</style>