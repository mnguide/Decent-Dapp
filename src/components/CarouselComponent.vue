<template>
  <div>
    <Carousel
      :itemsToShow="1"
      :wrapAround="true"
      :autoplay="5000"
      class="w-full"
    >
      <Slide v-for="(slide, i) in rankings" :key="i">
        <div class="grid grid-cols-1 bg-indigo-400">
          <img src="https://picsum.photos/seed/picsum/400/600" alt="NFT image" />
          <p class="text-xl">
            TokenID: {{ slide.tokenId }}<br />
            Power: {{ slide.power }}
          </p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import { reactive } from "@vue/reactivity";
import "vue3-carousel/dist/carousel.css";

export default {
  props: ["Rankings"],
  components: {
    Carousel,
    Slide,
  },
  setup(props) {
    const rankings = reactive(props.Rankings);
    console.log(rankings);
    return { rankings, Carousel, Slide };
  },
};
</script>
