<template>
    <Saidbar/>
    <div class="Ustozlar">
        <HeaderAdmin/>
        <header class="header-bottom">
            <h1>
                Hamkorlar
            </h1>
            <button @click="oppenModal">
                Hamkor Qoshish
            </button>
        </header>
        <main>
            <div class="cont">
                <table>
                <thead>
                    <tr>
                        <td>
                            <h3>
                            Rasm
                            </h3>
                        </td>
                        <td>
                            <h3>
                               Nomi
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
                    <tr>
                        <td class="yangilik-foto">
                            <img src="https://advice.uz/static/assets/img/advice.svg" alt="foto">
                        </td>
                        <td>
                            <h3>
                                Lorem.uz
                            </h3>
                        </td>
                        <td>
                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
                            <svg @click="openModalChange" class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td class="yangilik-foto">
                            <img src="https://advice.uz/static/assets/img/advice.svg" alt="foto">
                        </td>
                        <td>
                            <h3>
                                Lorem.uz
                            </h3>
                        </td>
                        <td>
                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
                            <svg @click="openModalChange" class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td class="yangilik-foto">
                            <img src="https://advice.uz/static/assets/img/advice.svg" alt="foto">
                        </td>
                        <td>
                            <h3>
                                Lorem.uz
                            </h3>
                        </td>
                        <td>
                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
                            <svg @click="openModalChange" class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td class="yangilik-foto">
                            <img src="https://advice.uz/static/assets/img/advice.svg" alt="foto">
                        </td>
                        <td>
                            <h3>
                                Lorem.uz
                            </h3>
                        </td>
                        <td>
                            <svg class="delate" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
                            <svg @click="openModalChange" class="change" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </main>
        <footer>
            <div class="footer-wrapper">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6"/></svg>
                </button>
                <div class="footer-content">
                    <span>
                        1
                    </span>
                    <span>
                    /
                    </span>
                    <span>
                        2
                    </span>
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"/></svg>
                </button>
            </div>
        </footer>
        <div :id="modal ? 'openModal' : '' "  class="create-modal-bg">

        <div class="create-modal">
            <div class="create-modal-header">
                <h1>
                    Hamkor qoshish
                </h1>
                <button @click="oppenModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
                </button>
            </div>
            <div class="create-modal-main">
                <form>
                    <div class="form-grid">
                        <label for="fio">
                            <h3>
                               Nomi
                            </h3>
                            <input required id="fio" type="text">
                        </label>
                        <div class="modal-foto">
                            <h3>
                                Rasm qoish
                            </h3>
                            <label class="file-input-container" for="foto">
                                <span>
                                    Rasm tanglang
                                </span>
                                <input type="file">
                            </label> 
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button class="submitBtn"ype="submit">
                        Hamkor qoshish
                    </button>
                    </div>
                </form>
            </div>
        </div>
   
   
        </div>
        <div :id="openChange ? 'openChange' : '' " class="modal-change">
        <div class="change-modal">
            <div class="change-header">
                <h1>
                    Hamkor o`zgartirish
                </h1>
                <button @click="openModalChange">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
                </button>
            </div>
            <div class="change-main">
                <form>
                    <div class="form-grid">
                        <label for="fio">
                            <h3>
                               Nomi
                            </h3>
                            <input required id="fio" type="text">
                        </label>
                        <div class="modal-foto">
                            <h3>
                                Rasm qoish
                            </h3>
                            <label class="file-input-container" for="foto">
                                <span>
                                    Rasm tanglang
                                </span>
                                <input type="file">
                            </label> 
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button class="submitBtn"ype="submit">
                        Hamkor ozgartirish
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import HeaderAdmin from '../../components/HeaderAdmin.vue'
import Saidbar from '@/components/Saidbar.vue';
import { ref } from 'vue';
    const modal = ref(false)
    const oppenModal = () => (modal.value = !modal.value)

    const openChange = ref(false)
    const openModalChange = () =>(openChange.value = !openChange.value)
</script>

<style lang="css" scoped>
.wrapper{
    display: flex;
}
.Ustozlar{
    margin-left: 310px;
    padding: 20px;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
}
.Ustozlar h1{
    color: white;
}
.header-bottom{
    width: 100%;
    padding: 30px;
    background-color: #624BFF;
    display: flex;
    align-items: center;
    gap:30px;
    margin-bottom: 20px;
}
.header-bottom button{
    padding: 10px 10px;
    border: solid 1px white;
    border-radius: 20px;
    background-color: white;
    cursor:pointer;
    font-weight: bold;
}
.header-bottom button:hover{
    background-color: #624BFF;
    color: white;
}
.cont{
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
    background-color: rgb(236, 236, 236)
}
main{
    padding: 10px;
   }
table,thead,tr{
    width:100%;
}
table thead tr td{
    text-align: center;
    padding:20px;
    padding-top:0;
    padding-bottom:0;
}
table tbody td {
    text-align: center;
    padding-top:20px;
}
table tbody img{
    width:200px;
    height:100px;
    border-radius:10px;
}
.yangilik-foto{
    width: 300px;
}
.delate{
    font-size: 30px;
    margin-right: 10px;
    cursor: pointer;
}
.change{
    font-size: 30px;
    cursor: pointer;
}
.delate:hover{
    color: red;
}
.change:hover{
    color: rgb(95, 95, 95);
}
footer{
    margin-top: 20px;
    width: 100%;
    padding:30px;
    background-color:#624BFF ;
}
.footer-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
footer button{
    padding: 5px 10px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10px;
}
footer span{
    color:white;
    font-size:16px;
}
footer button:hover{
    background-color: transparent;
    color:white;
}
.create-modal-bg{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.527);
    display: none;
}
.create-modal{
    padding: 50px;
    width: 50%  ;
    height: 320px;
    background-color: white;
    position: absolute;
    top: 20%;
    left: 28%;  
    border-radius: 30px;
    z-index: 10;
    /* margin-left: 400px; */
}
#openModal{
    display: block;
}
#openChange{
    display:block;
}
  .modal-change{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.692);
    display: none;
}
.change-modal{
    padding: 50px;
    width: 50%  ;
    height: 320px;
    background-color: white;
    position: absolute;
    top: 20%;
    left: 28%;  
    border-radius: 30px;
    z-index: 10;
}
.create-modal-header, .change-header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px
}
.create-modal-header h1, .change-header h1{
    color: #212B36;
}
.create-modal-header button, .change-header button{
    background-color: #624BFF;
    color: white;
    padding:10px 15px;
    border: 1px solid #624BFF;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center
}
.create-modal-header button:hover{
    background-color: transparent;
    color: #624BFF
}
.change-header button:hover{
    background-color: transparent;
    color: #624BFF
}
.form-grid label input{
    width: 100%;
    padding: 10px 10px;
    font-size: 15px;
}
.form-grid{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 50px;
}
.inp-number{
    width: 100%;
    padding: 10px 10px;
    font-size: 15px;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;}
.form-grid label{
    width: 100%
}
.modal-foto{
    width: 100%;
}
.file-input-container{
    width: 100%;
}
.submitBtn{
    padding: 10px 15px;
    border: 1px solid #624BFF;
    background-color: #624BFF;
    color: white;
    cursor: pointer;
    border-radius: 10px
}
.submitBtn:hover{
    background-color: transparent;
    color: #624BFF
}
.modal-footer{
    display: flex;
    align-items: center;
    justify-content: end;
}
.modal-footer{
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
  .file-input-container span{
    display: block;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
  }
  .file-input-container:hover{
    background-color: transparent;
    color: #624BFF;
  }
.yangilik-text{
    width: 400px
  }
  .yangilik-grid{
    width: 400px;
  }
  .yangilik_text textarea{
    resize: none; /* Запрещаем изменение размера пользователем */
    overflow: hidden; /* Скрытие содержимого, которое не помещается */
    width: 100%; /* Размер подстраивается под содержимое */
    height: 100px; /* Размер подстраивается под содержимое */

  }
</style>