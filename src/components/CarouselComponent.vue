<template>
  <div>
    <Carousel
      :itemsToShow="1"
      :wrapAround="true"
      :autoplay="5000"
      class="w-full"
    >
      <Slide v-for="(slide, i) in rankings" :key="i">
        <InvestorCard :tokenID="slide.tokenId" class="place-self-center"></InvestorCard>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import InvestorCard from "@/components/InvestorCardBack.vue";
import { Carousel, Slide } from "vue3-carousel";
import { reactive } from "@vue/reactivity";
import "vue3-carousel/dist/carousel.css";

export default {
  props: ["Rankings"],
  components: {
    Carousel,
    InvestorCard,
    Slide,
  },
  setup(props) {
    const rankings = reactive(props.Rankings);
    return { rankings, Carousel, Slide };
  },
};
</script>
