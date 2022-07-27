<template>
  <div class="flex">
    <div class="w-1/4 mt-3">
      <h1>Rankings</h1>
      <HelloWorld :Rankings="rankings" />
    </div>
    <div class="w-3/4 mt-3">
      <Carousel :Rankings="rankings"></Carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/CarouselComponent.vue";
import { reactive } from "@vue/reactivity";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Carousel,
  },
  setup() {
    const rankings = reactive([
      {
        power: 102,
        tokenId: 13,
      },
      {
        power: 110,
        tokenId: 43,
      },
      {
        power: 130,
        tokenId: 32,
      },
      {
        power: 230,
        tokenId: 66,
      },
      {
        power: 310,
        tokenId: 2,
      },
    ]);
    return {
      rankings,
    };
  },
};
</script>
