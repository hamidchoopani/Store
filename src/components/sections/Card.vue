<template>
  <div>
    <h3 class="section-title">Most Sell Products</h3>
  </div>
  <v-container class="grey lighten-5 text-center">
    <v-row no-gutters>
      <v-col
        class="pa-2"
        v-for="product in MostSellProducts"
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

  <!-- latest products -->
  <div>
    <h3 class="section-title">latest products</h3>
  </div>
  <v-container class="grey lighten-5 text-center">
    <v-row no-gutters>
      <v-col
        class="pa-2"
        v-for="product in LatestProducts"
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
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

// most sell products
const MostSellProducts = computed(() => store.getters.GetMostSellProducts);

const ProductImageAddress = computed(
  () => store.getters.GetProductImageAddress
);

const getData = () => {
  if (MostSellProducts.value.length == 0) {
    store.dispatch("GetMostSellProductsFromServer");
  }
};
getData();

// latest productd
const LatestProducts = computed(() => store.getters.GetLastestProducts);

const getLatestData = () => {
  if (LatestProducts.value.length == 0) {
    store.dispatch("GetLatestProductsFromServer");
  }
};
getLatestData();

// addToCard
const AddToProductOrder=(productId)=>{
  const OrderDetail={
    productId:productId,
    count:1
  }
  store.dispatch("AddProductToOrder",OrderDetail)
}
</script>

<style scoped>
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
