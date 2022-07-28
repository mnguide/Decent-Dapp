<template>
  <div>
    <div class="container mx-auto my-5 p-5 mb-40">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div
            class="bg-gray-100 dark:bg-gray-900 p-3 border-t-4 h-full border-gray-400 dark:border-gray-700"
          >
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="@/assets/logo.png"
                alt=""
              />
            </div>
            <h1
              class="text-black dark:text-white font-bold text-xl leading-8 my-1"
            >
              {{ showdata.projectName }}
            </h1>
            <h2
              class="text-black dark:text-white font-bold text-lg leading-8 my-1"
            >
              {{ showdata.symbol }}
            </h2>

            <p
              class="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <span class="flex items-arostretchund py-3">
                <span class="m-auto">
                  <span>Status</span
                  ><span
                    v-if="showdata.active"
                    class="bg-green-500 ml-3 py-1 px-2 rounded text-white text-sm"
                    >Active</span
                  >
                  <span
                    v-else
                    class="bg-red-500 ml-3 py-1 px-2 rounded text-white text-sm"
                    >Inactive</span
                  ></span
                >

                <span class="m-auto"
                  ><span>Whitelist mint</span>
                  <span
                    v-if="showdata.whitelistMintActive"
                    class="bg-green-500 ml-3 py-1 px-2 rounded text-white text-sm"
                    >Active</span
                  >
                  <span
                    v-else
                    class="bg-red-500 ml-3 py-1 px-2 rounded text-white text-sm"
                    >Inactive</span
                  ></span
                >
              </span>
            </p>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-gray-100 dark:bg-gray-900 p-3 shadow-sm rounded-sm">
            <div class="text-gray-700 dark:text-gray-200">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Owner Address</div>
                  <div class="px-4 py-2 overflow-hidden scrollbar-hide">
                    <a
                      target="_blank"
                      :href="`${KLAYTN_URL}/account/${showdata.ownerAddress}`"
                      >{{ showdata.ownerAddress }}</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Minted</div>
                  <div class="px-4 py-2">
                    {{ showdata.invocation - 1 }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Total supply</div>
                  <div class="px-4 py-2">
                    {{ showdata.maxInvocations }}
                  </div>
                </div>

                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Mint limit per block
                  </div>
                  <div class="px-4 py-2">{{ showdata.MintLimitPerBlock }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Price</div>
                  <div class="px-4 py-2">{{ showdata.price }} KLAY</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">White List Price</div>
                  <div class="px-4 py-2">
                    {{ showdata.whitelistPrice }} KLAY
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Mint Start Block Number
                  </div>
                  <div class="px-4 py-2">
                    {{ showdata.MintStartBlockNumber }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">
                    Current Block Number
                  </div>
                  <div class="px-4 py-2">{{ currentBlockNumber }}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">ipfs url</div>
                  <div class="px-4 py-2 overflow-auto scrollbar-hide">
                    {{ showdata.url }}
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Antibot Interval</div>
                  <div class="px-4 py-2 overflow-auto scrollbar-hide">
                    {{ showdata.AntibotInterval }}
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-4 mt-3">
              <label
                for="steps-range"
                class="block mb-2 text-sm font-medium text-black dark:text-white"
                >Count : {{ num }}<br />
                Your Balance : {{ balance }}KLAY
              </label>
              <input
                id="steps-range"
                type="range"
                min="0"
                :max="showdata.MintLimitPerBlock"
                v-model="num"
                step="1"
                class="w-3/4 h-2 appearance-none bg-black dark:bg-white rounded-full accent-pink-500 text-white"
              />
            </div>
            <div class="flex justify-center space-x-3">
              <button
                class="border-2 rounded-full border-black dark:border-white dark:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="mint()"
              >
                Total Price : {{ num * showdata.price }} <br />
                Public Mint
              </button>
              <button
                class="border-2 rounded-full border-black dark:border-white dark:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="wMint()"
                v-if="showdata.whitelistMintActive"
              >
                Total White List Price :
                {{ num * showdata.whitelistPrice }} <br />
                Whitelist Mint
              </button>
            </div>
          </div>
          <!-- End of about section -->

          <div
            class="bg-gray-100 dark:bg-gray-900 p-3 shadow-sm rounded-sm my-4"
          >
            <div class="grid grid-cols-1">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-black dark:text-white leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">History</span>
                </div>
                <div
                  class="h-64 overflow-auto scrollbar-hide divide-y-4 divide-black dark:divide-white"
                >
                  <div v-for="i in history" :key="i">
                    <div class="text-black dark:text-white">
                      Token {{ i.returnValues.tokenId }}
                    </div>
                    <div class="text-black dark:text-white mt-2 text-xs">
                      from {{ i.returnValues.from }}
                    </div>
                    <div class="text-black dark:text-white mt-2 text-xs">
                      To {{ i.returnValues.to }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showFail">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        >
          <div
            class="relative bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
          >
            <div class="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 text-red-500"
                >
                  <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-black dark:text-white uppercase"
                    id="modal-title"
                  >
                    fail
                  </h3>
                  <div class="mt-2">
                    <p
                      class="text-sm text-gray-500 dark:text-gray-200 overflow-auto"
                    >
                      이미 화이트 리스트 수량을 받으셨거나 시스템 오류 입니다.
                      에러 코드:{{ failMsg }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white dark:bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                @click="showFail = false"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showSuccess">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        >
          <div
            class="relative bg-white dark:bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
          >
            <div class="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10 text-green-500"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-black dark:text-white uppercase"
                    id="modal-title"
                  >
                    success
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 dark:text-gray-200">
                      Your request has been successfully executed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-white dark:bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                @click="showSuccess = false"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import CONTRACT from "../contracts/DecentToken.json";
import Caver from "caver-js";
export default {
  setup() {
    let caver = null;
    let contract = null;
    const networkID = process.env.VUE_APP_NETWORK_ID;
    const deplyedNetworkAddress = CONTRACT.networks[networkID].address;
    let num = ref(0);
    let showFail = ref(false);
    let showSuccess = ref(false);
    let failMsg = ref("error");
    let balance = ref();
    const _getBalance = () => {
      caver.rpc.klay.getBalance(window.klaytn.selectedAddress).then((res) => {
        balance.value = caver.utils
          .fromPeb(caver.utils.hexToNumberString(res), "KLAY")
          .split(".")[0];
      });
    };
    onMounted(async () => {
      caver = new Caver(window.klaytn);

      contract = new caver.klay.Contract(CONTRACT.abi, deplyedNetworkAddress);
      getProjectData();
      if (window.klaytn.selectedAddress !== undefined) {
        _getBalance();
      }
      _nameNsymbol();
      _getCurrentBlock();
    });

    let showdata = reactive({
      MintLimitPerBlock: 0,
      MintStartBlockNumber: 0,
      AntibotInterval: 0,
      projectName: "",
      price: "",
      whitelistPrice: "",
      invocation: 0,
      maxInvocations: "",
      active: "",
      url: "",
      whitelistMintActive: "",
    });
    const _nameNsymbol = () => {
      const kip17 = new caver.kct.kip17(deplyedNetworkAddress);
      kip17.name().then((res) => {
        // console.log(res);
        showdata.projectName = res;
      });
      kip17.symbol().then((res) => {
        showdata.symbol = res;
      });
    };
    const getProjectData = async () => {
      //   _getTokenLogs();
      _mintingInformation();
      _getProjectBaseIpfsURI();
      _getActiveStatus();
      _owner();
      _getTokenLogs();
    };

    const _getActiveStatus = async () => {
      contract.methods
        .getActiveStatus()
        .call()
        .then((res) => {
          showdata.active = res[0];
          showdata.whitelistMintActive = res[1];
        });
    };
    const _getProjectBaseIpfsURI = async () => {
      await contract.methods
        .getProjectBaseIpfsURI()
        .call()
        .then((res) => {
          showdata.url = res;
        });
    };

    const _mintingInformation = async () => {
      await contract.methods
        .mintingInformation()
        .call()
        .then((res) => {
          console.log(res);
          showdata.AntibotInterval = res[0];
          showdata.MintLimitPerBlock = res[1];
          showdata.MintStartBlockNumber = res[2];
          showdata.price = caver.utils.fromPeb(res[3], "KLAY");
          showdata.whitelistPrice = caver.utils.fromPeb(res[4], "KLAY");
          showdata.invocation = res[5];
          showdata.maxInvocations = res[6];
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const _owner = async () => {
      await contract.methods
        .owner()
        .call()
        .then((res) => {
          showdata.ownerAddress = res;
        });
    };

    let history = ref();

    const _getTokenLogs = async () => {
      await contract.getPastEvents(
        "Transfer",
        {
          filter: { from: "0x0000000000000000000000000000000000000000" }, // Using an array means OR: e.g. 20 or 23
          fromBlock: 90000000,
          toBlock: "latest",
        },
        (error, event) => {
          console.log(event);
          if (event !== undefined && event.length !== undefined && event.length > 0) {
            history.value = event.reverse();
          }
        }
      );
    };
    let currentBlockNumber = ref("");
    const _getCurrentBlock = () => {
      setInterval(() => {
        caver.rpc.klay.getBlockNumber().then((res) => {
          const _currentBlockNumber = caver.utils.hexToNumberString(res);
          currentBlockNumber.value = _currentBlockNumber;
        });
      }, 1000);
    };

    const mint = () => {
      const totalvalue = Number(showdata.price) * num.value;
      const peb = caver.utils.toPeb(caver.utils.toBN(totalvalue), "KLAY");
      contract.methods
        .publicMint(Number(num.value))
        .estimateGas({
          from: window.klaytn.selectedAddress,
          value: peb,
        })
        .then(async (gasAmount) => {
          await contract.methods
            .publicMint(Number(num.value))
            .send({
              from: window.klaytn.selectedAddress,
              gas: gasAmount,
              value: peb,
            })
            .then(() => {
              showSuccess.value = true;
            })
            .catch((err) => {
              failMsg.value = err;
              showFail.value = true;
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const wMint = () => {
      const totalvalue = Number(showdata.whitelistPrice) * num.value;
      const peb = caver.utils.toPeb(caver.utils.toBN(totalvalue), "KLAY");
      contract.methods
        .whitelistMint(Number(num.value))
        .estimateGas({
          from: window.klaytn.selectedAddress,
          value: peb,
        })
        .then(async (gasAmount) => {
          await contract.methods
            .whitelistMint(Number(num.value))
            .send({
              from: window.klaytn.selectedAddress,
              gas: gasAmount,
              value: peb,
            })
            .then(() => {
              showSuccess.value = true;
            })
            .catch((err) => {
              failMsg.value = err;
              showFail.value = true;
            });
        })
        .catch((err) => {
          console.log(err);
          failMsg.value = err;
          showFail.value = true;
        });
    };
    const KLAYTN_URL = ref(process.env.VUE_APP_KLAYTN_SCOPE_URL);

    return {
      history,
      mint,
      wMint,
      KLAYTN_URL,
      showdata,
      getProjectData,
      currentBlockNumber,
      balance,
      num,
      showSuccess,
      showFail,
    };
  },
};
</script>

<style scoped>
a {
  @apply text-blue-400;
}
</style>
