<template>
  <div>
    <div class="text-6xl dark:text-white mt-10">My Page</div>
    <div class="flex items-center justify-center m-3">
      <div class="flex border-2 rounded">
        <input
          type="text"
          class="px-4 py-2 w-80 dark:bg-black dark:text-white"
          placeholder="Search..."
          v-model="search"
        />
        <button class="flex items-center justify-center px-4 border-l">
          <svg
            class="w-6 h-6 dark:text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="pt-4 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 dark:text-white justify-items-center gap-2"
    >
      <InvestorCard
        v-for="(item, i) in filteredTokens"
        :key="i"
        :tokenID="item"
      ></InvestorCard>
    </div>
  </div>
</template>

<script>
import CONTRACT from "../contracts/DecentToken.json";
import Caver from "caver-js";
import InvestorCard from "@/components/InvestorCardBack.vue";

import { onMounted, computed, ref, reactive } from "@vue/runtime-core";

export default {
  components: {
    InvestorCard,
  },
  setup() {
    let search = ref("");
    let tokenDatas = reactive([]);

    const filteredTokens = computed(() => {
      return tokenDatas.filter((post) => {
        return post.includes(search.value);
      });
    });

    let caver = null;
    let contract = null;
    const networkID = process.env.VUE_APP_NETWORK_ID;
    const deplyedNetworkAddress = CONTRACT.networks[networkID].address;

    onMounted(async () => {
      caver = new Caver(window.klaytn);
      contract = new caver.klay.Contract(CONTRACT.abi, deplyedNetworkAddress);
      _tokensOfOwner();
    });

    const _tokensOfOwner = async () => {
      await contract.methods
        .tokensOfOwner(window.klaytn.selectedAddress)
        .call()
        .then(async (res) => {
          console.log(res);
          tokenDatas.push(...res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const klaytnscopeURL = ref(`${process.env.VUE_APP_KLAYTN_SCOPE_URL}`);
    const openseaURL = ref(`${process.env.VUE_APP_OPENSEA_URL}`);

    return {
      filteredTokens,
      search,
      openseaURL,
      deplyedNetworkAddress,
      klaytnscopeURL,
    };
  },
};
</script>
