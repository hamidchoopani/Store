import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/sections/Home.vue";
import Register from "../components/sections/RegisterComponent.vue";
import ShoppingCard from "../components/sections/ShoppingCard.vue";
import ContactUs from "../components/sections/ContactUs.vue";
import CardDetails from "../components/sections/CardDetails.vue";
import Products from "../components/sections/Products.vue";
import VueCookie from 'vue-cookies'
import axios from "axios";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Register", name: "Register", component: Register },
  { path: "/ShoppingCard", name: "ShoppingCard", component: ShoppingCard },
  { path: "/ContactUs", name: "ContactUs", component: ContactUs },
  {
    path: "/CardDetails/Single/:id",
    name: "CardDetails",
    component: CardDetails,
  },
  { path: "/Products", name: "GetProducts", component: Products },
];
//get cookie save in header
axios.interceptors.request.use(request => {
  request.headers['Authorization'] = 'Bearer ' + VueCookie.get("Eshop_Auth_Token")
  return request
})


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  
});

export default router;
