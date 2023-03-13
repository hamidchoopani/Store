<template>
  <div class="navbar">
    <!-- Navbar logo -->
     <!-- <div class="nav-header">
      <div class="nav-logo">
        <router-link to="/">
          <img
            src="https://i.ibb.co/wwLhz98/logo.png"
            alt="Microsoft"
            class="logo"
          />
        </router-link>
      </div>
    </div>  -->
      <img class="dev" src="https://www.digikala.com/statics/img/svg/logo.svg" alt="" />
    
    
    <div class="search">
        <form action="" class="search-box">
            <input type="text" @keyup="getDataSearchBox()" v-model="search" class="input-search" id="search" placeholder="Type to Search...">
        </form>
      </div>

    <!-- responsive navbar toggle button -->
    <input type="checkbox" id="nav-check" />
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <!-- Navbar items -->
    <div class="nav-links">
      <router-link to="/">
        <a href="#">Home</a>
      </router-link>
      <router-link to="/Products">
        <a href="#">Products</a>
      </router-link>
      <router-link v-if="IsUserAuthenticated" to="/ContactUs">
        <a href="#">Contact</a>
      </router-link>
      <router-link to="/Register" v-if="!IsUserAuthenticated">
        <i class="fa fa-fw fa-user text-dark"></i>
      </router-link>
      <router-link to="" v-else>
        <a>wellcome {{ getUser }}</a>
        <a @click="signOutUser()">logOut</a>
      </router-link>
      <router-link v-if="IsUserAuthenticated" to="/ShoppingCard">
        <i class="fas fa-shopping-cart text-dark"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from "vuex";
const store = useStore();

const AllProducts = computed(() => store.getters.GetAllProducts);

let search = ref('')

const IsUserAuthenticated = computed(() => store.getters.IsUserAuthenticated);
const getUser = computed(() => store.getters.GetUserFullName);

const getToken = computed(() => store.getters.GetCookieToken);

const checkForLogin=()=>{
  store.dispatch("CheckForLogin")
}
checkForLogin()

const signOutUser = () => {
    store.dispatch('signOutUser')
  
};
const getDataSearchBox=(()=>{
    store.dispatch('GetDataSearchBox',search)
})


  const theme = ref('light')

  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>

<style scoped>
.box{
    position: relative;
    transform: translateX(10px);
}

.input {
    padding: 10px;
    width: 50px;
    height: 50px;
    background: none;
    border-radius: 50px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 26px;
    color: #000000;
    outline: none;
    transition: .5s;
}
.box:hover input{
    width: 200px;
    background: #eeeeee;
    border-radius: 10px;
    
}
.box i{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #1b1b1b;
    transition: .2s;
}
.box:hover i{
    opacity: 0;
    z-index: -1;
}
/* nav */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: url(https://i.ibb.co/wwLhz98/logo.png);
  background-size: cover;
  background-attachment: fixed;
}
.navbar {
  height: 70px;
  width: 100%;
  padding: 14px 30px;
  background-color: #fff0f5;
  position: relative;
  color: black;
}
.navbar .nav-header {
  display: inline;
}

.navbar .nav-links {
  z-index: 10;
  display: inline;
  float: right;
  font-size: 18px;
}

.navbar .nav-links a {
  padding: 10px 12px;
  text-decoration: none;
  font-weight: 550;
  color: #2f4f4f;
  font-family: Times New Roman;
}

/* responsive navbar toggle button */
.navbar #nav-check,
.navbar .nav-btn {
  display: none;
}

@media (max-width: 700px) {
  .navbar .nav-btn {
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .navbar .nav-btn label {
    display: inline-block;
    width: 80px;
    height: 70px;
    padding: 25px;
  }
  .navbar .nav-btn label span {
    display: block;
    height: 10px;
    width: 25px;
    border-top: 3px solid rgb(10, 9, 9);
  }
  
  .navbar .nav-links {
    position: absolute;
    display: block;
    text-align: center;
    width: 100%;
    background-color: #fff0f5;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 70px;
    right: 0px;
  }
  .navbar .nav-links a {
    display: block;
  }
  .navbar .nav-links i {
    display: inline-block;
  }

  /* when nav toggle button not checked */
  .navbar #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }

  /* when nav toggle button is checked */
  .navbar #nav-check:checked ~ .nav-links {
    height: calc(100vh - 70px);
    overflow-y: auto;
  }
}
.logo {
  width: 130px;
  height: 25px;
}
.icons-btn {
  display: inline-block;
  text-align: center;
}
.icons-btn span {
  display: block;
  height: 40px;
  width: 40px;
  line-height: 40px;
}
@media (max-width: 991.98px) {
  .icons-btn span {
    width: 24px;
  }
}



 /* search box  */
.person {
  font-size: 26px;
  color: var(--primaryColor);
}

.search {
  margin-left: auto;
  padding-right: 20px;
  
}

.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
  
}

.input-search {
  height: 50px;
  width: 50px;
  border-style: none;
  font-size: 14px;
  outline: none;
  border-radius: 25px;
  background-color: var(--primaryColor);
  color: rgb(15, 15, 15);
}

.input-search::placeholder {
  color: rgb(32, 32, 32);
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 100;
}

.input-search {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.8);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  transform: translateY(-8px);
}
@media (max-width:480px) {
  .input-search {
    width: 220px;
  }

  .search {
    padding: 0 !important;
    margin: 137px 0 20px -73px;
    ;
    background-color: var(--secondaryColor);
    /* border-bottom: 1px solid #222; */
  }
}
.dev{
  width: 115px;
  height: 37px;
}
</style>
