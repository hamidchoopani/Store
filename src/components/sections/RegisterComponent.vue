<template>
  <div class="hero">
    <h3 class="section-title mt-12">Resgister</h3>
  </div>
  <v-app id="inspire" class="mt-15">
    <v-container>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h4 class="text-center mt-4">
                          Enter your Personal Details
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            v-model="email"
                            required
                          ></v-text-field>
                          <v-text-field
                            label="Passowrd"
                            required
                            v-model="password"
                          ></v-text-field>
                        </v-form>
                        <h5 class="text-center mt-4">Forgot your password ?</h5>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          class="mb-7"
                          @click="loginUser()"
                          variant="flat"
                          color="secondary"
                        >
                          SIGN IN
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" style="background-color: #90ee90">
                      <v-card-text class="white--text mt-12">
                        <v-card-title class="text-center text-lg-h4 mt-15"
                          >Hello, Friend!</v-card-title
                        >
                      </v-card-text>
                      <div class="text-center purple darken-2">
                        <v-btn variant="flat" color="secondary" @click="step++">
                          SIGN UP
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" style="background-color: #90ee90">
                      <v-card-text class="white--text mt-12">
                        <v-card-title class="text-center text-lg-h5 mt-16"
                          >Welcome Back!</v-card-title
                        >
                      </v-card-text>
                      <div class="text-center purple darken-2">
                        <v-btn variant="flat" color="secondary" @click="step--">
                          SIGN in
                        </v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text>
                        <v-card-title class="text-center text-lg-h5"
                          >Create Account</v-card-title
                        >
                        <v-card-title class="text-center text-lg-h6"
                          >Enter your Personal Details</v-card-title
                        >
                        <v-form>
                          <v-text-field label="Name" required v-model="name">
                          </v-text-field>
                          <span v-if="textErrorName">{{ textErrorName }}</span>
                          <v-text-field
                            label="Family Name"
                            required
                            v-model="family"
                          ></v-text-field>
                          <span v-if="textErrorFamily">{{
                            textErrorFamily
                          }}</span>
                          <v-text-field
                            label="Email"
                            required
                            v-model="email"
                          ></v-text-field>
                          <span v-if="textErrorEmail">{{
                            textErrorEmail
                          }}</span>
                          <v-text-field
                            label="Password"
                            required
                            v-model="password"
                          ></v-text-field>
                          <span v-if="textErrorPassword">{{
                            textErrorPassword
                          }}</span>
                          <v-textarea
                            label="Label"
                            v-model="address"
                          ></v-textarea>
                          <span v-if="textErrorAddress">{{
                            textErrorAddress
                          }}</span>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          @click="RegisterUser()"
                          class="mb-10"
                          variant="flat"
                          color="secondary"
                        >
                          SIGN UP
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script setup>
import router from "@/router/Routes";
import { ref } from "vue";
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

const name = ref("");
const family = ref("");
const email = ref("");
const password = ref("");
const address = ref("");

let textErrorName = ref("");
let textErrorFamily = ref("");
let textErrorPassword = ref("");
let textErrorEmail = ref("");
let textErrorAddress = ref("");

const clearData = () => {
  name.value = "";
  family.value = "";
  email.value = "";
  password.value = "";
  address.value = "";
};
const RegisterUser = () => {
  if (name.value === "") {
    textErrorName.value = "name empty";
    return textErrorName.value;
  } else {
    textErrorName.value = "";
  }
  if (family.value === "") {
    textErrorFamily.value = "family empty";
    return textErrorFamily.value;
  } else {
    textErrorFamily.value = "";
  }
  if (password.value === "") {
    textErrorPassword.value = "password empty";
    return textErrorPassword.value;
  } else {
    textErrorPassword.value = "";
  }
  if (email.value === "") {
    textErrorEmail.value = "email empty";
    return textErrorEmail.value;
  } else {
    textErrorEmail.value = "";
  }
  if (address.value === "") {
    textErrorAddress.value = "address empty";
    return textErrorAddress.value;
  } else {
    textErrorAddress.value = "";
  }

  const register = {
    name: name.value,
    family: family.value,
    password: password.value,
    email: email.value,
    address: address.value,
  };

  store.dispatch("sendRegisterData", register);
  clearData();
};

//login

const loginUser = () => {
  const login = {
    email: email.value,
    password: password.value,
  };
  store.dispatch("loginUser", login);
  const IsUserAuthenticated = () => store.getters.IsUserAuthenticated;
  if (IsUserAuthenticated) {
    return router.push('/')
  } else {
    console.log("false");
  }
};

const step = ref(1);
defineProps({
  source: String,
});
</script>

<style scoped>
span {
  color: red;
}
.hero{
  margin-top: 20px;
  margin-bottom: -70px;
}
#inspire{
  margin-bottom: -40px;
}
</style>
