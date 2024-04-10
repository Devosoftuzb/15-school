<template>
    <Saidbar />
    <div class="Home">
        <HeaderAdmin />
        <header class="header-bottom">
            <h1>
                Bosh panel
            </h1>
        </header>
        <main>
            <div class="home-wrapper">
                <div class="home-card">
                    <div>
                        <h3>
                            Ustozlar
                        </h3>
                        <span>
                            {{ lengthAll.teacher }}
                        </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                            Yangiliklar
                        </h3>
                        <span>
                            {{ lengthAll.news }}
                        </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                            Hamkorlar
                        </h3>
                        <span>
                            {{ lengthAll.partnership }}
                        </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                            Togaraklar
                        </h3>
                        <span>
                            {{ lengthAll.lesson }}
                        </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                            Xabarlar
                        </h3>
                        <span>
                            {{ lengthAll.contact }}
                        </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import Saidbar from '../../components/Saidbar.vue'
import HeaderAdmin from '../../components/HeaderAdmin.vue'
import { reactive, onMounted } from 'vue'
import axios from '@/services/axios'
const lengthAll = reactive({
    teacher: 0,
    news: 0,
    partnership: 0,
    lesson: 0,
    contact: 0,
})

const getAll = () => {
    axios
        .get("/teachers/find-all", {

        })
        .then((res) => {
            lengthAll.teacher = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/news/find-all", {
        })
        .then((res) => {
            lengthAll.news = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/partnerships/find-all", {
        })
        .then((res) => {
            lengthAll.partnership = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/lessons/find-all", {
        })
        .then((res) => {
            lengthAll.lesson = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });

    axios
        .get("/contact/find-all", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((res) => {
            lengthAll.contact = res.data.length
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getAll();
});

</script>

<style scoped>
.Home {
    margin-left: 310px;
    padding: 20px;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
}

.Home h1 {
    color: white;
}

.header-bottom {
    width: 100%;
    padding: 30px;
    background-color: #624BFF;
}

main {
    padding: 30px;
    padding-top: 0;
}

.home-card {
    background-color: #00000070;
    padding: 20px;
    border-radius: 20px;
}

.home-card h3 {
    color: white;
    font-size: 30px;
}

.home-card span {
    font-size: 30px;
    color: white;
}

.home-card button {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    margin-top: 20px;
}

.home-card div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.home-wrapper {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
}

@media(max-width:1520px) {
    .home-wrapper {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media(max-width:1420px) {
    .home-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(max-width:1110px) {
    .home-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:800px) {
    .Home {
        margin-left: 0;
    }
}

@media(max-width:820px) {
    .home-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media(max-width:750px) {
    .home-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:530px) {
    .home-wrapper {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media(max-width:1000px) {
    .Ustozlar {
        margin-left: 0;
    }

    .form-grid {
        flex-direction: column;
        gap: 30px;
    }
}

@media(max-width:900px) {
    .cont {
        overflow: auto;
        overflow-x: scroll;
    }

    .cont table {
        width: 900px;
        overflow: auto;
        overflow-x: scroll;
        /* display: none; */
    }
}

@media(max-width:600px) {
    .create-modal {
        width: 80%;
        left: 10%;
    }
}

@media(max-width:400px) {
    .create-modal {
        padding: 20px;
    }
}

@media(max-width:600px) {
    .change-modal {
        width: 80%;
        left: 10%;
    }
}

@media(max-width:400px) {
    .change-modal {
        padding: 20px;
    }
}
</style>
