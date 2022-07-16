<template>
  <div class="">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Caver from "caver-js";
import { onMounted } from "@vue/runtime-core";
import CONTRACT from "./contracts/DecentToken.json";

export default {
  setup() {
    let caver;
    let contract;
    const networkID = process.env.VUE_APP_NETWORK_ID;
    const deplyedNetworkAddress = CONTRACT.networks[networkID].address;

    onMounted(async () => {
      await window.klaytn.enable();
      caver = new Caver(window.klaytn);
      contract = new caver.klay.Contract(CONTRACT.abi, deplyedNetworkAddress);
      owner();
    });

    const owner = () => {
      contract.methods
        .owner()
        .call()
        .then((res) => {
          console.log(res);
        });
    };
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
