<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
// import CardInfo from "@/views/CardInfo.vue";
import { storeToRefs } from "pinia";
import { useCardInfoStore } from "@/stores/card-info";
import SidebarGrid from "./components/SidebarGrid.vue";

const cardInfoStore = useCardInfoStore();
const { cardInfoDisplay } = storeToRefs(cardInfoStore);
</script>

<template>
<!-- <div class="overflow-hidden bg-black root-container">  -->
    <!-- <SidebarGrid style="grid-area: sidebar;" />  -->
    <router-view />
 <!-- </div> -->
</template>

<style scoped>
/* .root-container {
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-rows: 4rem 1fr;
  grid-template-areas:
      "sidebar main"
      "sidebar main";
}

@media screen and (width < 1200px) {
  .root-container {
      display: grid;
      grid-template-areas:
          "main"
          "main";
      grid-template-columns: 1fr;
      grid-template-rows: 4rem 1fr;
      height: 100vh;
  }
} */
</style>
