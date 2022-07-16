<template>
  <div class="grid grid-cols-1 gap-2">
    <div
      v-for="(item, index) in rankings"
      :key="index"
      class="border-2 bg-indigo-100"
    >
      Rank: {{ index + 1 }} <br />token ID: {{ item.tokenId }}<br />Power:
      {{ item.power }}
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  props: ["Rankings"],
  setup(props) {
    const rankings = reactive(props.Rankings);
    return { rankings };
  },
};
</script>
