<template>
    <Saidbar />
    <div class="Ustozlar">
        <HeaderAdmin />
        <header class="header-bottom">
            <h1>
                Xabarlar
            </h1>
        </header>
        <main>
            <div class="cont">
                <table>
                    <thead>
                        <tr>
                            <td>
                                <h3>
                                    Telefon raqam
                                </h3>
                            </td>
                            <td>
                                <h3>
                                    Habar
                                </h3>
                            </td>
                            <td>
                                <h3>
                                    Sozlama
                                </h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in store.pagContactAll[store.pag]" :key="i.id">
                            <td class="yangilik-foto">
                                <h3>
                                    {{ i.phone }}
                                </h3>
                            </td>
                            <td class="habar-text">
                                <p>
                                    {{ i.info }}
                                </p>
                            </td>
                            <td>
                                <button class="delete-btn" @click="deleteContact(i.id)">
                                    <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        <footer>
            <div class="footer-wrapper">
                <button @click="store.pag == 0 ? store.pag = store.pagContactAll.length - 1  : store.pag -= 1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                    </svg>
                </button>
                <div class="footer-content">
                    <span>
                        {{ store.pagContactAll.length == 0 ? store.pag : store.pag + 1 }}
                    </span>
                    <span>
                        /
                    </span>
                    <span>
                        {{ store.pagContactAll.length }}
                    </span>
                </div>
                <button @click="store.pag + 1 == store.pagContactAll.length ? store.pag = 0 : store.pag += 1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                    </svg>
                </button>
            </div>
        </footer>
    </div>
</template>

<script setup>
import HeaderAdmin from '../../components/HeaderAdmin.vue'
import Saidbar from '@/components/Saidbar.vue';
import { onMounted, reactive } from "vue";
import axios from "@/services/axios";

const store = reactive({
    contactAll: false,
    pagContactAll: [],
    pag: 0,
});

const getAllContact = () => {
    axios
        .get("/contact/find-all", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then((res) => {
            store.contactAll = res.data
            store.contactAll = store.contactAll.reverse()
            let contact = []
            for (let i in store.contactAll) {
                contact.push(store.contactAll[i])
                if (contact.length == 5) {
                    store.pagContactAll.push(contact)
                    contact = []
                }
                if ((Number(i) + 1) == store.contactAll.length && (store.pagContactAll.length == 0 || contact.length > 0)) {
                    store.pagContactAll.push(contact)
                    contact = []
                }
            }
        })
        .catch((error) => {
            store.error = true;
        });
};

const deleteContact = (id) => {
    axios
        .delete(`/contact/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            getAllContact()
            location.reload()
        })
        .catch((error) => {
            console.log(error);
        });
}

onMounted(() => {
    getAllContact();
});
</script>

<style lang="css" scoped>
.wrapper {
    display: flex;
}

.Ustozlar {
    margin-left: 310px;
    padding: 20px;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
}

.Ustozlar h1 {
    color: white;
}

.header-bottom {
    width: 100%;
    padding: 30px;
    background-color: #624BFF;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
}

.header-bottom button {
    padding: 10px 10px;
    border: solid 1px white;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
    font-weight: bold;
}

.header-bottom button:hover {
    background-color: #624BFF;
    color: white;
}

.cont {
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
    background-color: rgb(236, 236, 236)
}

main {
    padding: 10px;
}

table,
thead,
tr {
    width: 100%;
}

table thead tr td {
    text-align: center;
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
}

table tbody td {
    text-align: center;
    padding-top: 20px;
}

table tbody img {
    width: 200px;
    height: 100px;
    border-radius: 10px;
}

.yangilik-foto {
    width: 300px;
}

.delate {
    font-size: 30px;
    margin-right: 10px;
    cursor: pointer;
}

.change {
    font-size: 30px;
    cursor: pointer;
}

.delate:hover {
    color: red;
}

.change:hover {
    color: rgb(95, 95, 95);
}

footer {
    margin-top: 20px;
    width: 100%;
    padding: 30px;
    background-color: #624BFF;
}

.footer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

footer button {
    padding: 5px 10px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10px;
}

footer span {
    color: white;
    font-size: 16px;
}

footer button:hover {
    background-color: transparent;
    color: white;
}

.create-modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.527);
    display: none;
}

.create-modal {
    padding: 50px;
    width: 50%;
    height: 500px;
    background-color: white;
    position: absolute;
    top: 20%;
    left: 28%;
    border-radius: 30px;
    z-index: 10;
    /* margin-left: 400px; */
}

#openModal {
    display: block;
}

#openChange {
    display: block;
}

.modal-change {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -330px;
    background-color: rgba(0, 0, 0, 0.692);
    display: none;
}

.change-modal {
    padding: 50px;
    width: 50%;
    background-color: white;
    position: absolute;
    top: 20%;
    left: 28%;
    border-radius: 30px;
    z-index: 10;
}

.create-modal-header,
.change-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px
}

.create-modal-header h1,
.change-header h1 {
    color: #212B36;
}

.create-modal-header button,
.change-header button {
    background-color: #624BFF;
    color: white;
    padding: 10px 15px;
    border: 1px solid #624BFF;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center
}

.create-modal-header button:hover {
    background-color: transparent;
    color: #624BFF
}

.change-header button:hover {
    background-color: transparent;
    color: #624BFF
}

.form-grid label input {
    width: 100%;
    padding: 10px 10px;
    font-size: 15px;
}

.form-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 50px;
}

.inp-number {
    width: 100%;
    padding: 10px 10px;
    font-size: 15px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}

.form-grid label {
    width: 100%
}

.modal-foto {
    width: 100%;
}

.file-input-container {
    width: 100%;
}

.submitBtn {
    padding: 10px 15px;
    border: 1px solid #624BFF;
    background-color: #624BFF;
    color: white;
    cursor: pointer;
    border-radius: 10px
}

.submitBtn:hover {
    background-color: transparent;
    color: #624BFF
}

.modal-footer {
    display: flex;
    align-items: center;
    justify-content: end;
}

.modal-footer {
    position: relative;
}

.file-input-container {
    position: relative;
    overflow: hidden;
    display: inline-block;
    padding: 10px;
    border: 1px solid #624BFF;
    border-radius: 5px;
    background-color: #624BFF;
    cursor: pointer;
    color: white;
    width: 300px;
}

.file-input-container input[type=file] {
    cursor: pointer;
    position: absolute;
    font-size: 100px;
    opacity: 0;
    right: 0;
    top: 0;
    cursor: pointer;
}

.file-input-container span {
    display: block;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
}

.file-input-container:hover {
    background-color: transparent;
    color: #624BFF;
}

.yangilik-text {
    width: 400px
}

.yangilik-grid {
    width: 400px;
}

.yangilik_text textarea {
    resize: none;
    /* Запрещаем изменение размера пользователем */
    overflow: hidden;
    /* Скрытие содержимого, которое не помещается */
    width: 100%;
    /* Размер подстраивается под содержимое */
    height: 100px;
    /* Размер подстраивается под содержимое */

}

.habar-text {
    width: 500px;
}

.habar-text p {
    width: 100%;
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