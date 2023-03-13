<template>
  <v-carousel cycle show-arrows="hover">
    <!-- v-for="slider in Sliders" :key="slider.sliderId" -->
    <v-carousel-item  
    src="@/assets/0c22b635458f9d3c411bc1abe4a5599b.jpg" 
    >
    <!-- :src="SliderImageAddress + slider.imageName"  -->
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const Sliders = computed(() => store.getters.GetSliders);
const SliderImageAddress = computed(() => store.getters.GetSliderImageAddress);

const getData = () => {
  if (Sliders.value.length == 0) {
    store.dispatch("GetSlidersFromServer");
  }
};
getData();
</script>

<style scoped>
</style>
