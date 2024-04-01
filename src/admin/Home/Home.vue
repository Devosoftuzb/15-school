<template>
    <Saidbar/>
    <div class="Home">
        <header>
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
                        30
                    </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                        Yangiliklar
                    </h3>
                    <span>
                        30
                    </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                        Hamkorlar
                    </h3>
                    <span>
                        30
                    </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                        Togaraklar
                    </h3>
                    <span>
                        30
                    </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                    </button>
                </div>
                <div class="home-card">
                    <div>
                        <h3>
                        Oquvchilar
                    </h3>
                    <span>
                        30
                    </span>
                    </div>
                    <button>
                        Otish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"/></svg>
                    </button>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import Saidbar from '../../components/Saidbar.vue'
</script>

<style scoped>
.Home{
    margin-left: 310px;
    padding: 20px;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
}
.Home h1{
    color: white;
}
header{
    width: 100%;
    padding: 30px;
    background-color: #624BFF;
}
main{
    padding: 30px;
    padding-top: 0;
}
.home-card{
    background-color:#00000070;
    padding: 20px;
    border-radius: 20px;
}
.home-card h3{
    color: white;
    font-size: 30px;
}
.home-card span{
    font-size: 30px;
    color: white;
}
.home-card button{
    padding: 5px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    margin-top: 20px;
}
.home-card div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.home-wrapper{
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 30px;
}
@media(max-width:1520px){
    .home-wrapper{
        grid-template-columns: repeat(4,1fr);
    }
}
@media(max-width:1420px){
    .home-wrapper{
        grid-template-columns: repeat(3,1fr);
    }
}
@media(max-width:1110px){
    .home-wrapper{
        grid-template-columns: repeat(2,1fr);
    }
}
@media(max-width:800px){
    .Home{
        margin-left: 0;
    }
}
@media(max-width:820px){
    .home-wrapper{
        grid-template-columns: repeat(3,1fr);
    }
}
@media(max-width:750px){
    .home-wrapper{
        grid-template-columns: repeat(2,1fr);
    }
}
@media(max-width:530px){
    .home-wrapper{
        grid-template-columns: repeat(1,1fr);
    }
}
</style>
