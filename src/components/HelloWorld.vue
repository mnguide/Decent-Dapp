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
import { onMounted } from "vue";
import CONTRACT from "../contracts/DecentProxy.json";
import Caver from "caver-js";
import { reactive } from "@vue/reactivity";
export default {
  props: ["Rankings"],
  setup(props) {
    let caver = null;
    let contract = null;
    const networkID = process.env.VUE_APP_NETWORK_ID;
    const deplyedNetworkAddress = CONTRACT.networks[networkID].address;

    const rankings = reactive(props.Rankings);
    onMounted(() => {
      caver = new Caver(window.klaytn);
      contract = new caver.klay.Contract(CONTRACT.abi, deplyedNetworkAddress);
      getStage(3);
    });

    const getStage = (_tokenId) => {
      contract.methods
        .getStage(_tokenId)
        .call()
        .then((res) => {
          console.log("rgtsrn", res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return { rankings };
  },
};
</script>
