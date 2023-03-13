import cookie from "vue-cookies";
import axios from "axios";
import router from "../../router/Routes"; 

const state = {
  token: cookie.get("Eshop_Auth_Token"),
  UserFullName: "",
  IsUserAuthenticated: false,
};
const getters = {
  GetUserFullName(state) {
    return state.UserFullName;
  },
  IsUserAuthenticated(state) {
    return state.IsUserAuthenticated;
  },
  GetCookieToken(state) {
    return state.token;
  },
};
const mutations = {
  SetAuthCookie(state, loginResult) {
    cookie.set("Eshop_Auth_Token", loginResult.token, loginResult.expireTime);
  },
  SetUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },
  SetUserAuthenticated(state, isAuth) {
    state.IsUserAuthenticated = isAuth;
  },
  DeleteAuthCookie() {
    cookie.remove("Eshop_Auth_Token");
  },
};

const actions = {
  sendRegisterData(context, register) {
    axios
      .post("http://localhost:13172/api/Account/Register", register)
      .then((res) => {
        if (res.status == 200) {
          alert("success Register");
        }
        // else if(res.status== 400){
        //     alert('error')
        // }
      })
      .catch(function (error) {
        // handle error
        alert("faild register");
      });
  },

  loginUser(context, login) {
    axios
      .post("http://localhost:13172/api/Account/Login", login)
      .then((res) => {
        if (res.data.result == "NotFound") {
          alert("NotFound User");
        }
        if (res.data.result == "Done") {
          context.commit("SetAuthCookie", res.data);
          context.commit(
            "SetUserFullName",
            res.data.user.name + " " + res.data.user.family
          );
          context.commit("SetUserAuthenticated", true);
        }
      });
  },
  
  CheckForLogin(context) {
    axios("http://localhost:13172/api/Account/CheckAuthentication")
    .then((res) => {
      if (res.status !== 401 && res.data.status) {
        context.commit(
          "SetUserFullName",
          res.data.user.name + " " + res.data.user.family
        );
        context.commit("SetUserAuthenticated", true);
      }else{
        context.commit("SetUserAuthenticated", false);
      }
    });
  },
  signOutUser(context) {
    axios("http://localhost:13172/api/Account/SignOut")
    .then((res) => {
      console.log(res.data);
      if (res.data.status !== 401 && res.data.status == "success") {
        context.commit("SetUserFullName", "");
        context.commit("SetUserAuthenticated", false);
        context.commit("DeleteAuthCookie");
        router.push("/Register");
      }
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
