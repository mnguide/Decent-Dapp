<template>
  <div class="">
    <div class="w-full bg-indigo-600 h-20 text-3xl">logo</div>
    <nav class="grid grid-cols-2 items-center border-b-2 border-black">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/mypage" v-if="isLogedIn">My Page</router-link> | 
        <router-link to="/mint">Mint</router-link>
      </div>
      <div class="">
        <button
          class="border-2 rounded-full border-black bg-transparent text-lg p-2 mr-3"
          @click="onLogin()"
        >
          {{ wallet }}
        </button>
        <router-link to="/admin">Admin</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Caver from "caver-js";
import CONTRACT from "./contracts/DecentToken.json";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  setup() {
    let caver;
    let contract;
    const networkID = process.env.VUE_APP_NETWORK_ID;
    const deplyedNetworkAddress = CONTRACT.networks[networkID].address;

    let isLogedIn = ref(false);
    let wallet = ref("Connect Wallet");
    onMounted(() => {
      const addr = window.sessionStorage.getItem("Decent");
      if (addr != "") {
        wallet.value = addr.slice(0, 4) + "..." + addr.slice(-4);
        isLogedIn.value = true;
      }
    });

    const onLogin = async () => {
      await window.klaytn.enable();
      caver = new Caver(window.klaytn);
      contract = new caver.klay.Contract(CONTRACT.abi, deplyedNetworkAddress);
      window.sessionStorage.setItem("Decent", window.klaytn.selectedAddress);
      const addr = window.klaytn.selectedAddress;
      wallet.value = addr.slice(0, 4) + "..." + addr.slice(-4);
      isLogedIn.value = true;
      owner();
    };

    let isOwner = ref(false);

    const owner = () => {
      contract.methods
        .owner()
        .call()
        .then((res) => {
          console.log(res);
          if (res == window.klaytn.selectedAddress) {
            isOwner.value = true;
          }
        });
    };
    return { onLogin, wallet, isLogedIn, isOwner };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
