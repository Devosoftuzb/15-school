<template>
    <div class="error">
        <div class="error-wrapper">
            <h1>
                404
            </h1>
            <p>
                Nimadir xato ketdi, qaytib keling
            </p>
            <div class="error-btn">
                <router-link to="/"><span>
                    Bosh sahifaga qaytish
                </span></router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .error{
        background-color: #061E3F;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .error h1{
        text-align: center;
        font-size: 120px;
        color: white;
        margin-bottom: 20px;
        margin-right: 20px;
    }
    .error p{
        font-size: 30px;
        text-align: center;
        color: white;
        margin-bottom: 10px;
    }
    .error-btn{
        text-align: center;
        border-radius: 50px;
        border: 1px solid #2b84ff;
        background-color: #2b84ff;
        padding: 20px;
    }
    .error-btn:hover{
        background-color: transparent;
    }
    .error-btn span{
        color: white;
    }
    @media(max-width:240px){
        .error h1{
            font-size: 50px;
        }
    }
</style>