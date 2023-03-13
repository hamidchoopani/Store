<template>
  <div v-if="IsExistShopCard">
    <div>
      <h3 class="section-title mt-12">Shopping Card</h3>
    </div>
    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th class="p-name">Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th><i class="ti-close"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="card in UserShopCard.orderDetails"
                    :key="card.OrderDetailId"
                  >
                    <td class="cart-pic first-row">
                      <router-link
                        :to="{
                          name: 'CardDetails',
                          params: { id: card.product.productId },
                        }"
                      >
                        <v-img
                          :src="
                            ProductImageAddress + card.product.productImageName
                          "
                        ></v-img>
                      </router-link>
                    </td>
                    <td class="cart-title first-row">
                      <router-link
                        :to="{
                          name: 'CardDetails',
                          params: { id: card.product.productId },
                        }"
                      >
                        <h5>{{ card.product.productName }}</h5>
                      </router-link>
                    </td>
                    <td class="p-price first-row">${{ card.product.price }}</td>
                    <td class="qua-col first-row">
                      <div class="quantity">
                        <div class="pro-qty">
                          <!-- <input type="text" value="1" /> -->
                          <span>{{ card.count }}</span>
                        </div>
                      </div>
                    </td>
                    <td class="total-price first-row">
                      ${{ card.product.price * card.count }}
                      <span style="margin-left: 43px; color: black">
                        <button @click="deleteOrderDetail(card.orderDetailId)">X</button>
                      </span>
                    </td>
                    <td class="close-td first-row"><i class="ti-close"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="cart-buttons">
                  <a href="#" class="primary-btn continue-shop"
                    >Continue shopping</a
                  >
                  <a href="#" class="primary-btn up-cart">Update cart</a>
                </div>
                <div class="discount-coupon">
                  <h6>Discount Codes</h6>
                  <form action="#" class="coupon-form">
                    <input type="text" placeholder="Enter your codes" />
                    <button type="submit" class="site-btn coupon-btn">
                      Apply
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-4">
                <div class="proceed-checkout">
                  <ul>
                    <li class="cart-total">
                      Total <span>${{ TotalPrice }}</span>
                    </li>
                  </ul>
                  <a @click="CompleteUserShopping()" class="proceed-btn">PROCEED TO CHECK OUT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section End -->
  </div>
  <div v-else>
    <p>empty shopingCard</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const GetUserOpenShopCard = () => {
  store.dispatch("GetUserOpenOrders");
};
GetUserOpenShopCard();

const UserShopCard = computed(() => store.getters.GetUserShopCard);
const TotalPrice = computed(() => store.getters.GetTotalPrice);

const ProductImageAddress = computed(
  () => store.getters.GetProductImageAddress
);

const IsExistShopCard = computed(() => store.getters.IsExistShopCard);

function deleteOrderDetail(DetailId){
store.dispatch('DeleteOrderDetail',DetailId)
console.log(DetailId);
}

const CompleteUserShopping = ()=>{
  store.dispatch("completeShoping")
}

</script>

<style scoped>
/*---------------------
  Shopping Cart
-----------------------*/

.shopping-cart {
  padding-top: 80px;
  padding-bottom: 60px;
}

.cart-table {
  margin-bottom: 40px;
}

.cart-table table {
  width: 100%;
  min-width: 480px;
  border: 1px solid #ebebeb;
}

.cart-table table tr th {
  font-size: 16px;
  color: #252525;
  font-weight: 700;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  padding: 18px 0 19px;
  text-transform: uppercase;
}

.cart-table table tr th.p-name {
  text-align: left;
}

.cart-table table tr td {
  text-align: center;
  padding-bottom: 34px;
}

.cart-table table tr td.first-row {
  padding-top: 30px;
}

.cart-table table tr td.cart-pic {
  width: 11%;
  padding-right: 10px;
}

.cart-table table tr td.cart-title {
  text-align: left;
}

.cart-table table tr td.cart-title h5 {
  color: #252525;
}

.cart-table table tr td.p-price {
  width: 16%;
}

.cart-table table tr td.p-price,
.cart-table table tr td.total-price {
  color: #e7ab3c;
  font-size: 16px;
  font-weight: 700;
}

.cart-table table tr td.qua-col {
  width: 16%;
}

.cart-table table tr td.qua-col .quantity {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.cart-table table tr td.qua-col .pro-qty {
  width: 123px;
  height: 46px;
  border: 2px solid #ebebeb;
  padding: 0 15px;
  float: left;
}

.cart-table table tr td.qua-col .pro-qty .qtybtn {
  font-size: 24px;
  color: #b2b2b2;
  float: left;
  line-height: 38px;
  cursor: pointer;
  width: 18px;
}

.cart-table table tr td.qua-col .pro-qty .qtybtn.dec {
  font-size: 30px;
}

.cart-table table tr td.qua-col .pro-qty input {
  text-align: center;
  width: 52px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  color: #4c4c4c;
  line-height: 40px;
  float: left;
}

.cart-table table tr td.total-price {
  width: 12%;
}

.cart-table table tr td.close-td {
  font-size: 16px;
  color: #252525;
  width: 8%;
}

.cart-table table tr td.close-td i {
  cursor: pointer;
}

.cart-buttons {
  margin-bottom: 34px;
}

.cart-buttons .continue-shop {
  color: #b2b2b2;
  border: 2px solid #ebebeb;
  background: #ffffff;
  margin-right: 8px;
  padding: 12px 20px 12px 20px;
  margin-bottom: 10px;
}

.cart-buttons .up-cart {
  color: #252525;
  background: #f3f3f3;
  border: 2px solid #ebebeb;
  padding: 12px 20px 12px 20px;
}

.discount-coupon {
  margin-bottom: 30px;
}

.discount-coupon h6 {
  color: #232530;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.discount-coupon .coupon-form {
  position: relative;
}

.discount-coupon .coupon-form input {
  width: 100%;
  height: 46px;
  border: 2px solid #ebebeb;
  color: #b2b2b2;
  font-size: 14px;
  padding-left: 20px;
}

.discount-coupon .coupon-form .coupon-btn {
  position: absolute;
  right: 0;
  top: 0;
  color: #252525;
  background: transparent;
  border: 1px solid transparent;
  padding: 13px 25px 10px 35px;
}

.proceed-checkout ul {
  border: 2px solid #ebebeb;
  background: #f3f3f3;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 16px;
  padding-bottom: 20px;
}

.proceed-checkout ul li {
  list-style: none;
  font-size: 16px;
  font-weight: 700;
  color: #252525;
  text-transform: uppercase;
  overflow: hidden;
}

.proceed-checkout ul li.subtotal {
  font-weight: 400;
  text-transform: capitalize;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 14px;
}

.proceed-checkout ul li.subtotal span {
  font-weight: 700;
}

.proceed-checkout ul li.cart-total {
  padding-top: 10px;
}

.proceed-checkout ul li.cart-total span {
  color: #e7ab3c;
}

.proceed-checkout ul li span {
  float: right;
}

.proceed-checkout .proceed-btn {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background: #252525;
  text-transform: uppercase;
  padding: 15px 25px 14px 25px;
  display: block;
  text-align: center;
  cursor: pointer;
}

/*---------------------
  Check Out
-----------------------*/

.checkout-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.checkout-content {
  margin-bottom: 50px;
}

.checkout-content .content-btn,
.checkout-content input {
  color: #252525;
  font-size: 16px;
  border: 2px solid #ebebeb;
  padding: 14px 20px;
  background: #f3f3f3;
  text-align: center;
  display: block;
}

.checkout-content input {
  height: 56px !important;
}

.checkout-form h4 {
  color: #252525;
  font-weight: 700;
  margin-bottom: 30px;
}

.checkout-form label {
  color: #252525;
  font-size: 16px;
  margin-bottom: 5px;
}

.checkout-form label span {
  color: #d85d5c;
}

.checkout-form input {
  width: 100%;
  height: 46px;
  border: 2px solid #ebebeb;
  margin-bottom: 25px;
  padding-left: 15px;
}

.checkout-form input.street-first {
  margin-bottom: 20px;
}

.checkout-form .create-item {
  padding-top: 15px;
}

.checkout-form .create-item label {
  position: relative;
  cursor: pointer;
  padding-left: 32px;
  margin-bottom: 0;
  font-size: 14px;
  color: #252525;
}

.checkout-form .create-item label input {
  position: absolute;
  visibility: hidden;
}

.checkout-form .create-item label input:checked ~ span {
  background: #e7ab3c;
  border-color: #e7ab3c;
}

.checkout-form .create-item label .checkmark {
  position: absolute;
  left: 0;
  top: 3px;
  height: 13px;
  width: 13px;
  border: 2px solid #b2b2b2;
  border-radius: 2px;
}

.checkout-form .create-item label .checkmark:after {
  left: 0;
  top: 0;
  width: 9px;
  height: 6px;
  border: solid #ffffff;
  border-width: 2px 2px 0px 0px;
  -webkit-transform: rotate(127deg);
  -ms-transform: rotate(127deg);
  transform: rotate(127deg);
}

.checkout-form .place-order .order-total {
  border: 2px solid #ebebeb;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 22px;
  padding-bottom: 35px;
}

.checkout-form .place-order .order-total .order-table {
  margin-bottom: 64px;
}

.checkout-form .place-order .order-total .order-table li {
  list-style: none;
  color: #252525;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 5px;
  padding-top: 30px;
}

.checkout-form .place-order .order-total .order-table li:first-child {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  padding-top: 0;
}

.checkout-form .place-order .order-total .order-table li.fw-normal {
  font-weight: 400;
  text-transform: capitalize;
}

.checkout-form .place-order .order-total .order-table li.fw-normal span {
  font-weight: 700;
}

.checkout-form .place-order .order-total .order-table li.total-price span {
  color: #e7ab3c;
}

.checkout-form .place-order .order-total .order-table li span {
  float: right;
}

.checkout-form .place-order .order-total .payment-check {
  margin-bottom: 50px;
}

.checkout-form .place-order .order-total .payment-check .pc-item label {
  position: relative;
  cursor: pointer;
  padding-left: 32px;
  margin-bottom: 0;
  font-size: 14px;
  color: #252525;
}

.checkout-form .place-order .order-total .payment-check .pc-item label input {
  position: absolute;
  visibility: hidden;
}

.checkout-form
  .place-order
  .order-total
  .payment-check
  .pc-item
  label
  input:checked
  ~ span {
  background: #e7ab3c;
  border-color: #e7ab3c;
}

.checkout-form
  .place-order
  .order-total
  .payment-check
  .pc-item
  label
  .checkmark {
  position: absolute;
  left: 0;
  top: 3px;
  height: 13px;
  width: 13px;
  border: 2px solid #b2b2b2;
  border-radius: 2px;
}

.checkout-form
  .place-order
  .order-total
  .payment-check
  .pc-item
  label
  .checkmark:after {
  left: 0;
  top: 0;
  width: 9px;
  height: 6px;
  border: solid #ffffff;
  border-width: 2px 2px 0px 0px;
  -webkit-transform: rotate(127deg);
  -ms-transform: rotate(127deg);
  transform: rotate(127deg);
}

.checkout-form .place-order .order-total .order-btn {
  text-align: center;
}

.checkout-form .place-order .order-total .order-btn .place-btn {
  padding: 13px 40px 11px;
  background: #000000;
  border-color: #000000;
}
</style>
