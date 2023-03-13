import axios from 'axios';
// import Vue from 'vue'

const state = {
    sliders:[],
    SliderImageAddress:"http://localhost:13172/api/slider/image/"

};
const getters = {
    GetSliders(state){
        return state.sliders;
    },
    GetSliderImageAddress(state){
        return state.SliderImageAddress;
    }
};
const mutations = {
    setSliders(state, sliders) {
        state.sliders = sliders;
    }
};
const actions={
    GetSlidersFromServer(context){
        axios("http://localhost:13172/api/slider/GetSliders")
        .then(res=>{
            context.commit('setSliders',res.data)
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}