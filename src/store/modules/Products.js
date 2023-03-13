import axios from "axios";

const state = {
  MostSellProducts: [],
  LatestProducts: [],
  ProductImageAddress: "http://localhost:13172/api/product/image/",
  Products: {},
  DetailsProduct: {},
  SuggestedProducts: {},
  searchBox: "",
};
const getters = {
  searchBox(state) {
    return state.searchBox;
  },
  GetMostSellProducts(state) {
    return state.MostSellProducts;
  },
  GetLastestProducts(state) {
    return state.LatestProducts;
  },
  GetProductImageAddress(state) {
    return state.ProductImageAddress;
  },
  GetAllProducts(state) {
    return state.Products;
  },
  GetDetailsProduct(state) {
    return state.DetailsProduct;
  },
  GetSuggestedProducts(state) {
    return state.SuggestedProducts;
  },
};
const mutations = {
  SetDataSearchBox(state, data) {
    if(data.value == ""){
         state.searchBox = state.Products
    }else {
         state.searchBox = state.Products.filter((p) =>{
              return p.productName?.toLowerCase().search(data.value.trim().toLowerCase()) > -1
          });
        }
  },
  SetMostSellProducts(state, MostSellProducts) {
    state.MostSellProducts = MostSellProducts;
  },
  SetLatestProducts(state, LatestProducts) {
    state.LatestProducts = LatestProducts;
  },
  SetAllProducts(state, products) {
    state.Products = products;
  },
  SetDetailsProduct(state, singleProduct) {
    state.DetailsProduct = singleProduct;
  },
  SetSuggestedProducts(state, SuggestedProducts) {
    state.SuggestedProducts = SuggestedProducts;
  },
};
const actions = {
  GetDataSearchBox(context, data) {
    context.commit("SetDataSearchBox", data);
  },

  GetMostSellProductsFromServer(context) {
    axios("http://localhost:13172/api/product/MostSellProducts").then((res) => {
      context.commit("SetMostSellProducts", res.data);
    });
  },
  GetLatestProductsFromServer(context) {
    axios("http://localhost:13172/api/product/LatestProducts").then((res) => {
      context.commit("SetLatestProducts", res.data);
    });
  },
  GetProductsFromServer(context, Filter) {
    axios("http://localhost:13172/api/product/GetProducts").then((res) => {
      context.commit("SetAllProducts", res.data);
    });
  },
  GetSingleProductsFromServer(context, Filter) {
    axios(
      "http://localhost:13172/api/product/ShowProduct/" + Filter.productId
    ).then((res) => {
      context.commit("SetDetailsProduct", res.data);
    });
  },
  GetSuggestedProductsFromServer(context) {
    axios("http://localhost:13172/api/product/SuggestedProducts").then(
      (res) => {
        context.commit("SetSuggestedProducts", res.data);
        console.log("data", res.data);
      }
    );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
