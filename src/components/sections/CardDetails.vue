<template>
  <!-- Showcase -->
  <div id="container">
    <div class="product-details">
      <h1>{{ DetalisProduct.productName }}</h1>
      <span class="hint-star star">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-half-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
      </span>

      <!-- The most important information about the product -->
      <p class="information">{{ DetalisProduct.description }}</p>

      <!-- 		Control -->
      <div class="control">
        <button @click="AddToProductOrder(DetalisProduct.productId)" class="btn">
          <span class="price">{{ DetalisProduct.price }} $</span>
          <span class="shopping-cart"
            ><i class="fa fa-shopping-cart" aria-hidden="true"></i
          ></span>
          <span  class="buy">Buy Now</span>
        </button>
        <!-- <input type="number" name="bvd" id=""> -->
      </div>
      <div class="quantity-content">
        <div class="right-content">
          <div class="quantity buttons_added">
            <input type="button" value="-" class="minus" /><input
              type="number"
              step="1"
              min="1"
              max=""
              name="quantity"
              v-model="count"
              title="Qty"
              class="input-text qty text"
              size="4"
              pattern=""
              inputmode=""
            /><input type="button" value="+" class="plus" />
          </div>
        </div>
      </div>
    </div>
    <!-- 	End	Product details   -->

    <!-- 	Start product image & Information -->
    <div class="product-image">
      <img
        :src="ProductImageAddress + DetalisProduct.productImageName"
        alt="Omar Dsoky"
      />
      <!-- 	product Information-->
      <div class="info">
        <h2>The Description</h2>
        <ul>
          <li><strong>Sun Needs: </strong>Full Sun</li>
          <li><strong>Soil Needs: </strong>Damp</li>
          <li><strong>Zones: </strong>9 - 11</li>
          <li><strong>Height: </strong>2 - 3 feet</li>
          <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
          <li><strong>Features: </strong>Tolerates heat</li>
        </ul>
      </div>
    </div>
    <!--  End product image  -->
  </div>
  <hr />
  <div>
    <h3 class="section-title mt-12">Suggested products</h3>
  </div>
    <!-- SuggestedProducts -->
    <v-container class="grey lighten-5 text-center">
    <v-row no-gutters>
      <v-col
        class="pa-2"
        v-for="product in SuggestedProducts"
        :key="product.productId"
        cols="12"
        sm="4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" max-width="400" v-bind="props">
            <router-link
              :to="{ name: 'CardDetails', params: { id: product.productId } }"
            >
              <v-img
                :src="ProductImageAddress + product.productImageName"
                height="200px"
                cover
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h4"
                    style="height: 100%"
                  >
                    <v-btn>View More</v-btn>
                  </div>
                </v-expand-transition></v-img
              >
            </router-link>
            <v-card-subtitle class="mt-5">
              {{ product.productName }}
            </v-card-subtitle>

            <v-card-text> ${{ product.price }} </v-card-text>

            <v-card-actions class="vue">
              <v-btn @click="AddToProductOrder(product.productId)" color="orange">
                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                Add To Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const DetalisProduct = computed(() => store.getters.GetDetailsProduct);

const getDetailsProduc = () =>
  store.dispatch("GetSingleProductsFromServer", { productId: route.params.id });
getDetailsProduc();

const ProductImageAddress = computed(
  () => store.getters.GetProductImageAddress
);

// Suggested products
const SuggestedProducts = computed(() => store.getters.GetSuggestedProducts);

const GetSuggestedProducts = () => {
  store.dispatch("GetSuggestedProductsFromServer");
};
GetSuggestedProducts();

const ShowDetailsSuggestedProducts = watch(() =>
  store.dispatch("GetSingleProductsFromServer", { productId: route.params.id })
);

// addToCard
const count=ref(1);

const AddToProductOrder = (productId) => {
  const OrderDetail = {
    productId: productId,
    count: count.value,
  };
  store.dispatch("AddProductToOrder", OrderDetail);
};
</script>
 


<style scoped>
.SuggestedProducts {
  display: flex;
}

@import url("https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web");

body {
  background: #dfc2f2;
  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);
  background-attachment: fixed;
  background-size: cover;
}

#container {
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 450px;
  width: 1100px;
}

/* 	Product details  */
.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
}

/* 	Product Name */
#container .product-details h1 {
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 34px;
  color: #344055;
  margin: 0;
}

/*Product Rating  */
.hint-star {
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
}

/* The most important information about the product */
#container .product-details > p {
  font-family: "Farsan", cursive;
  margin-top: 110px;
  transform: translateY(-60px);
  font-size: 20px;
  color: #7d7d7d;
}

/* control */
.control {
  position: absolute;
  transform: translateY(40px);
  padding-bottom: 10px;
}
/* the Button */
.btn {
  transform: translateY(0px);
  transition: 0.3s linear;
  background: #49c608;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: #eee;
  padding: 0;
  margin: 0;
}

.btn:hover {
  transform: translateY(-4px);
}

.btn span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
}
/* shopping cart icon */
.btn .price,
.shopping-cart {
  background: #333;
  border: 0;
  margin: 0;
}

.btn .price {
  transform: translateX(-10%);
  padding-right: 15px;
}

/* the Icon */
.btn .shopping-cart {
  transform: translateX(-100%);
  position: absolute;
  background: #333;
  z-index: 1;
  left: 0;
  top: 0;
}

/* buy */
.btn .buy {
  z-index: 3;
  font-weight: bolder;
}

.btn:hover .price {
  transform: translateX(-110%);
}

.btn:hover .shopping-cart {
  transform: translateX(0%);
}

/* product image  */
.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 50%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Farsan", cursive;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.9;
  text-align: left;
  font-size: 120%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}

#countProduct {
  border: 3px solid red;
}

/* quantity */
.quantity-content {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.quantity-content .left-content {
  float: left;
  margin-right: 30px;
}

.quantity-content .right-content {
  text-align: right;
}

.quantity-content .left-content h6 {
  padding-top: 7px;
  font-size: 20px;
  font-weight: 700;
  color: #aaa;
  position: relative;
  z-index: 11;
}

.total h4 {
  float: left;
  font-size: 20px;
  margin-top: 10px;
  color: #aaa !important;
}

.total .main-border-button {
  text-align: right;
}

.total .main-border-button a {
  border-color: #2a2a2a;
  color: #2a2a2a;
}

.total .main-border-button a:hover {
  color: #fff;
  background-color: #2a2a2a;
}

.quantity {
  display: inline-block;
}

.quantity .input-text.qty {
  width: 35px;
  height: 39px;
  padding: 0 5px;
  text-align: center;
  background-color: transparent;
  border: 1px solid #efefef;
}

.quantity.buttons_added {
  text-align: left;
  position: relative;
  white-space: nowrap;
  vertical-align: top;
}

.quantity.buttons_added input {
  display: inline-block;
  margin: 0;
  vertical-align: top;
  box-shadow: none;
}

.quantity.buttons_added .minus,
.quantity.buttons_added .plus {
  padding: 7px 10px 8px;
  height: 39px;
  background-color: #ffffff;
  border: 1px solid #efefef;
  cursor: pointer;
}

.quantity.buttons_added .minus {
  border-right: 0;
}

.quantity.buttons_added .plus {
  border-left: 0;
}

.quantity.buttons_added .minus:hover,
.quantity.buttons_added .plus:hover {
  background: #eeeeee;
}

.quantity input::-webkit-outer-spin-button,
.quantity input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}

.quantity.buttons_added .minus:focus,
.quantity.buttons_added .plus:focus {
  outline: none;
}

.btn-crad:hover {
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.62);
}
.vue .v-btn {
  margin-left: auto;
  margin-right: auto;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
