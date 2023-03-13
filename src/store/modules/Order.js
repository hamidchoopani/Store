
import axios from "axios";

const state = {
  UserShopCard: {},
  TotalPrice: 0,
  IsExistShopCard: false
};
const getters = {
  GetUserShopCard(state) {
    return state.UserShopCard;
  },
  GetTotalPrice(state) {
    return state.TotalPrice;
  },
  IsExistShopCard(state) {
    return state.IsExistShopCard;
  }

};
const mutations = {
  SetUserShopCard(state, shopCard) {
    state.UserShopCard = shopCard;
    state.TotalPrice = 0;
    for (let i = 0; i < shopCard.orderDetails.length; i++) {
      state.TotalPrice +=
      shopCard.orderDetails[i].price * shopCard.orderDetails[i].count;
    }
  },
  SetIsExistShopCard(state, isExist) {
    state.IsExistShopCard = isExist;
  },
};
const actions = {
  AddProductToOrder(context, orderDetail) {
    axios("http://localhost:13172/api/Order/AddProductToOrder", {
      params: {
        productId: orderDetail.productId,
        count: orderDetail.count,
      },
    }).then((res) => {
      if (res.data.status == "NotAuth") alert("Plase login in webSite");
      if (res.data.status == "NotFoundProduct") alert("notFount Product");
      if (res.data.status == "InvalidCount") alert("Invalid Count");
      if (res.data.status == "Done") alert("success To in Card");
    });
  },
  
  GetUserOpenOrders(context) {
    axios("http://localhost:13172/api/Order/GetShopCart")
    .then((res) => {
      if (res.data.status == "NotAuth") 
      alert("Please login in webSite");
      if (res.data.status == "NotExist") {
        context.commit("SetIsExistShopCard", false);
      }
      if (res.data.status == "success") {
        context.commit("SetUserShopCard", res.data.result);
        if (res.data.result.orderDetails.length != 0) {
          context.commit("SetIsExistShopCard", true);
        } else {
          context.commit("SetIsExistShopCard", false);
        }
      }
    });
  },
  DeleteOrderDetail(context,detailId){
    axios('http://localhost:13172/api/Order/DeleteDetail',{
      params:{
        detailId:detailId
      }
    }).then(res=>{
      console.log(res.data.status);
      if (res.data.status == "NotAuth") alert("Plase login in webSite");
      if (res.data.status == "NotExist") alert("notfound Information");
      if (res.data.status == "success"){
        context.commit("SetUserShopCard", res.data.result);
        if (res.data.result.orderDetails.length != 0) {
          context.commit("SetIsExistShopCard", true);
        } else {
          context.commit("SetIsExistShopCard", false);
        }
      }
    })
  },
  completeShoping(context){
    axios('http://localhost:13172/api/Order/CompleteShop').then(res=>{
      if (res.data.status == "NotAuth") alert("Plase login in webSite");
      if (res.data.status == "NotExist") alert("notfound Information");
      if (res.data.status == "EmptyShopCart") alert("empty shoppingCard");
      if (res.data.status == "success"){
        context.commit("SetIsExistShopCard", false);
        alert("Your purchase was successful");
      }
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
