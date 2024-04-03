<template>
    <div class="login">
        <div class="login-wrapper">
            <div class="logo">
                <h1>
                    LOGO
                </h1>
            </div>
            <form action="">
                <label for="email">
                    <h3>
                        E-mail 
                    </h3>
                    <input required type="email" name="" id="email">
                </label>
                <label for="password">
                    <h3>
                        Parol
                    </h3>
                    <input required type="password" name="" id="password">
                </label>
                <button>
                    Kirish
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>

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
    border: 1px solid black;
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
h3{
    font-size: 22px;
    margin-bottom: 8px;
}
button{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #624BFF;
    background-color: #624BFF;
    color: white;
    font-size: 18px;
    cursor: pointer;
}
button:hover{
    background-color: transparent;
    color: black;
}
</style>