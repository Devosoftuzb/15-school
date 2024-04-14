<template>
    <div class="login">
        <div class="login-wrapper">
            <div class="logo">
                <img src="../../../public/imges/header-logo.png" alt="">
            </div>
            <form @submit.prevent="loginAdmin">
                <label for="email">
                    <h3>
                        E-mail 
                    </h3>
                    <input v-model="login.email" required type="email" name="" id="email">
                </label>
                <label for="password">
                    <h3>
                        Parol
                    </h3>
                    <input v-model="login.password" required type="password" name="" id="password">
                </label>
                <button type="submit">
                    Kirish
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "@/services/axios";
import router from "@/router";

const login = reactive({
  email: "",
  password: "",
});

const loginAdmin = () => {
  const data = {
    email: login.email,
    password: login.password
  };
  axios
    .post("/admins/login", data, {
    })
    .then((res) => {
      console.log(res.data.tokens.refresh_token)
      login.email = "";
      login.password = "";
      localStorage.setItem('token' , res.data.tokens.refresh_token)
      router.push('/admin')
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style lang="css" scoped>
.login{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.login-wrapper{
    border: 1px solid #001457;
    border-radius: 20px;
    padding: 30px; 
    width: 400px; 
}
.login-wrapper input{
    display: block;
    width: 100%;
    padding: 10px 5px;
    font-size: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
}
.logo{
    text-align: center;
    margin-bottom: 30px;
}
.logo img{
    width: 100%;
    height: 100%;
}
h3{
    font-size: 22px;
    margin-bottom: 8px;
}
button{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #001457;
    background-color: #001457;
    color: white;
    font-size: 18px;
    cursor: pointer;
}
button:hover{
    background-color: transparent;
    color: black;
}
</style>