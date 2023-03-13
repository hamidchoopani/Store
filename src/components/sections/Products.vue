<template>
<div class="devasli">
  <div>
    <h3 class="section-title mt-12">Products</h3>
  </div>

  <v-container class="grey lighten-5 text-center">
    <v-row no-gutters >
      <v-col v-if="getDataSearch.length > 0" class="newtodo">
      <v-col
        class="pa-2"
        v-for="product in getDataSearch"
        :key="product"
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
      </v-col>

      <v-col v-else class="newtodo">
      <v-col
        class="pa-2"
        v-for="product in listToShow"
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
      </v-col>
    </v-row>
  </v-container>

  <div class="text-center">
    <v-app>
      <div class="text-center">
        <v-pagination
          class="pagination mb-2"
          :length="pagesCount"
          v-model="page"
          @input="pagesCount"
          rounded="circle"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          icon="fas fa-plus"
        ></v-pagination>
      </div>
    </v-app>
  </div>
</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const AllProducts = computed(() => store.getters.GetAllProducts);

const getDataSearch = computed(() => {
  return store.getters.searchBox
});

const getProductData = () => {
  store.dispatch("GetProductsFromServer");
};
getProductData();

const ProductImageAddress = computed(
  () => store.getters.GetProductImageAddress
);

// addToCard
const AddToProductOrder = (productId) => {
  const OrderDetail = {
    productId: productId,
    count: 1,
  };
  store.dispatch("AddProductToOrder", OrderDetail);
};

//paigination
const page = ref(1);
const pageSize = ref(5);

const pagesCount = computed(() =>
  Math.ceil(AllProducts.value.length / pageSize.value)
);

const listToShow = computed(() => {
  if (AllProducts.value.length > 0) {
    return AllProducts.value.slice(
      (page.value - 1) * pageSize.value,
      page.value * pageSize.value
    );
  } else {
    return console.log("emty Product");
  }
});
</script>

<style scoped>
.newtodo{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.devasli{
  margin-bottom: -400px;
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
