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
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Reward Address</div>
                  <div class="px-4 py-2 overflow-hidden scrollbar-hide">
                    <a
                      target="_blank"
                      :href="`${KLAYTN_URL}/account/${showdata.rewardAddress}`"
                      >{{ showdata.rewardAddress }}</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Proxy Address</div>
                  <div class="px-4 py-2 overflow-hidden scrollbar-hide">
                    <a
                      target="_blank"
                      :href="`${KLAYTN_URL}/account/${showdata.proxyAddr}`"
                      >{{ showdata.proxyAddr }}</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Main Address</div>
                  <div class="px-4 py-2 overflow-hidden scrollbar-hide">
                    <a
                      target="_blank"
                      :href="`${KLAYTN_URL}/account/${showdata.mainAddress}`"
                      >{{ showdata.mainAddress }}</a
                    >
                  </div>
                </div>
              </div>
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

    <div>
      <ul class="grid grid-cols-3 content-center">
        <li class="m-3 tw_btn2">
          <button @click="show.airDropMint = !show.airDropMint">
            airDropMint
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button @click="show.addWhitelist = !show.addWhitelist">
            addWhitelist
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button @click="show.removeWhitelist = !show.removeWhitelist">
            removeWhitelist
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="
              show.toggleWhitelistMintEnabled = !show.toggleWhitelistMintEnabled
            "
          >
            toggleWhitelistMintEnabled
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="show.toggleProjectIsActive = !show.toggleProjectIsActive"
          >
            toggleProjectIsActive
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="show.toggleProjectIsLocked = !show.toggleProjectIsLocked"
          >
            toggleProjectIsLocked
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="show.updateAntibotInterval = !show.updateAntibotInterval"
          >
            updateAntibotInterval
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="
              show.updateMintLimitPerBlock = !show.updateMintLimitPerBlock
            "
          >
            updateMintLimitPerBlock
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="
              show.updateMintStartBlockNumber = !show.updateMintStartBlockNumber
            "
          >
            updateMintStartBlockNumber
          </button>
        </li>

        <li class="m-3 tw_btn2">
          <button
            @click="
              show.updateProjectBaseIpfsURI = !show.updateProjectBaseIpfsURI
            "
          >
            updateProjectBaseIpfsURI
          </button>
        </li>

        <li class="m-3 tw_btn2">
          <button
            @click="
              show.updateProjectMaxInvocations =
                !show.updateProjectMaxInvocations
            "
          >
            updateProjectMaxInvocations
          </button>
        </li>

        <li class="m-3 tw_btn2">
          <button
            @click="
              show.updateProjectPricePerTokenInPeb =
                !show.updateProjectPricePerTokenInPeb
            "
          >
            updateProjectPricePerTokenInPeb
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button
            @click="
              show.updateProjectWhitelistPrice =
                !show.updateProjectWhitelistPrice
            "
          >
            updateProjectWhitelistPrice
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button @click="show.setProxyAddress = !show.setProxyAddress">
            setProxyAddress
          </button>
        </li>
        <li class="m-3 tw_btn2">
          <button @click="show.setRewardAddress = !show.setRewardAddress">
            setRewardAddress
          </button>
        </li>

        <li class="m-3 tw_btn2">
          <button @click="withdraw()">withdraw</button>
        </li>
        <li class="m-3 tw_btn2">
          <button @click="setMainAddress">setMainAddress</button>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-3 content-center">
      <div v-if="show.airDropMint">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">AirDropMint</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name">
                User Address
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="0xa1b2c3..."
                v-model="data.subaddr"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name">
                Requested Count
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="10..."
                v-model="data.count"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="airDropMint(data.subaddr, data.count)"
              >
                airDropMint
              </button>
            </div>
          </div>
        </form>
      </div>

      <div v-if="show.addWhitelist">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Add Whitelist</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Address </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="0x1a2b3c..."
                v-model="data.subaddr"
              />
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="addWhitelist(data.subaddr)"
              >
                addWhitelist
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.removeWhitelist">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">remove Whitlist</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Address </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="0x1a2b3c..."
                v-model="data.subaddr"
              />
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="removeWhitlist(data.subaddr)"
              >
                removeWhitlist
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.toggleWhitelistMintEnabled">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Toggle Whitelist Mint Enabled</h1>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="toggleWhitelistMintEnabled()"
              >
                toggleWhitelistMintEnabled
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.toggleProjectIsActive">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Toggle Project Is Active</h1>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="toggleProjectIsActive()"
              >
                toggleProjectIsActive
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.toggleProjectIsLocked">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Toggle Project Is Locked</h1>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="toggleProjectIsLocked()"
              >
                toggleProjectIsLocked
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.updateAntibotInterval">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Update Antibot Interval</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name">
                Antibot Interval
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="10..."
                v-model="data.interval"
              />
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateAntibotInterval(data.interval)"
              >
                updateAntibotInterval
              </button>
            </div>
          </div>
        </form>
      </div>

      <div v-if="show.updateMintLimitPerBlock">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Update Mint Limit Per Block</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Limit </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="10..."
                v-model="data.limit"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateMintLimitPerBlock(data.limit)"
              >
                updateMintLimitPerBlock
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.updateMintStartBlockNumber">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Update Mint Start Block Number</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name">
                Block Number
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="90463700..."
                v-model="data.blockNumber"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateMintStartBlockNumber(data.blockNumber)"
              >
                updateMintStartBlockNumber
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.updateProjectBaseIpfsURI">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Update Project Base Ipfs URI</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Ipfs URL </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="ipfs://..."
                v-model="data.url"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateProjectBaseIpfsURI(data.url)"
              >
                updateProjectBaseIpfsURI
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.updateProjectMaxInvocations">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Update Project Max Invocations</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name">
                Invocations
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="5555..."
                v-model="data.invocation"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateProjectMaxInvocations(data.invocation)"
              >
                updateProjectMaxInvocations
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.updateProjectPricePerTokenInPeb">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Update Project Price Per Token In Peb</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Price </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="1 KLAY..."
                v-model="data.price"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateProjectPricePerTokenInPeb(data.price)"
              >
                updateProjectPricePerTokenInPeb
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.updateProjectWhitelistPrice">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">
            Update Project White list Price Per Token In Peb
          </h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Price </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="1 KLAY..."
                v-model="data.price"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="updateProjectWhitelistPrice(data.price)"
              >
                updateProjectWhitelistPrice
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.setProxyAddress">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Set Proxy Address</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Address </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="proxy Address"
                v-model="data.proxyAddr"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="setProxyAddress(data.proxyAddr)"
              >
                setProxyAddress
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-if="show.setRewardAddress">
        <form class="w-full max-w-sm">
          <h1 class="admin_txt">Set Reward Address</h1>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="admin_lb" for="inline-full-name"> Address </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="admin_input"
                id="inline-full-name"
                type="text"
                placeholder="Address"
                v-model="data.rewardAddr"
              />
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="admin_btn"
                type="button"
                @click="setRewardAddress(data.rewardAddr)"
              >
                setRewardAddress
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import CONTRACT from "../contracts/DecentToken.json";
import CONTRACTPROXY from "../contracts/DecentProxy.json";

import Caver from "caver-js";
export default {
  setup() {
    let caver = null;
    let contract = null;
    let proxyContract = null;
    const networkID = process.env.VUE_APP_NETWORK_ID;
    const deplyedNetworkAddress = CONTRACT.networks[networkID].address;
    const ProxyAddress = CONTRACTPROXY.networks[networkID].address;

    let data = reactive({
      subaddr: "",
      price: 0,
      projectName: "",
      artistAddress: "",
      count: 0,
      bool: false,
      interval: 0,
      limit: 0,
      blockNumber: 0,
      name: "",
      url: "",
      description: "",
      license: "",
      invocation: 0,
      percentage: 0,
      website: "",
      proxyAddr: "",
      rewardAddr: "",
    });

    let show = reactive({
      airDropMint: false,
      addWhitelist: false,
      removeWhitelist: false,
      toggleWhitelistMintEnabled: false,
      toggleProjectIsActive: false,
      toggleProjectIsLocked: false,
      updateAntibotInterval: false,
      updateMintLimitPerBlock: false,
      updateMintStartBlockNumber: false,
      updateProjectBaseIpfsURI: false,
      updateProjectMaxInvocations: false,
      updateProjectPricePerTokenInPeb: false,
      updateProjectWhitelistPrice: false,
      setProxyAddress: false,
      setRewardAddress: false,
    });

    const TXinfo = {
      from: window.klaytn.selectedAddress,
      gas: "20000000",
    };

    onMounted(async () => {
      caver = new Caver(window.klaytn);
      proxyContract = new caver.klay.Contract(CONTRACTPROXY.abi, ProxyAddress);
      contract = new caver.klay.Contract(CONTRACT.abi, deplyedNetworkAddress);
      await contract.methods
        .isOwner()
        .call({
          from: window.klaytn.selectedAddress,
        })
        .then((result) => {
          if (result) {
            getProjectData();
          } else {
            window.location.replace(process.env.VUE_APP_CILENT_URL);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      _getCurrentBlock();
    });

    const airDropMint = async (_address, _requestedCount) => {
      await contract.methods
        .airDropMint(_address, Number(_requestedCount))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const addWhitelist = async (_addr) => {
      await contract.methods
        .addWhitelist(_addr)
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const removeWhitelist = async (_addr) => {
      await contract.methods
        .removeWhitelist(_addr)
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const toggleWhitelistMintEnabled = async () => {
      await contract.methods
        .toggleWhitelistMintEnabled()
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const toggleProjectIsActive = async () => {
      await contract.methods
        .toggleActive()
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const updateAntibotInterval = async (_interval) => {
      await contract.methods
        .updateAntibotInterval(Number(_interval))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const updateMintLimitPerBlock = async (_limit) => {
      await contract.methods
        .updateMintLimitPerBlock(Number(_limit))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const updateMintStartBlockNumber = async (_blockNumber) => {
      await contract.methods
        .updateMintStartBlockNumber(Number(_blockNumber))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const updateProjectBaseIpfsURI = async (_projectBaseIpfsURI) => {
      const _projectBaseIpfsURI_ = `ipfs://${_projectBaseIpfsURI}/`;
      await contract.methods
        .updateProjectBaseIpfsURI(String(_projectBaseIpfsURI_))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const updateProjectMaxInvocations = async (_maxInvocations) => {
      await contract.methods
        .updateProjectMaxInvocations(_maxInvocations)
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const updateProjectWhitelistPrice = async (_pricePerTokenInPeb) => {
      const peb = caver.utils.toPeb(_pricePerTokenInPeb, "KLAY");
      await contract.methods
        .updateProjectWhitelistPricePerTokenInPeb(caver.utils.toBN(peb))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const updateProjectPricePerTokenInPeb = async (_pricePerTokenInPeb) => {
      const peb = caver.utils.toPeb(_pricePerTokenInPeb, "KLAY");
      await contract.methods
        .updateProjectPricePerTokenInPeb(caver.utils.toBN(peb))
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const withdraw = async () => {
      await contract.methods
        .withdraw()
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const setRewardAddress = async (_rewardArr) => {
      contract.methods
        .setRewardAddress(_rewardArr)
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const setProxyAddress = async (_proxyAddr) => {
      contract.methods
        .setProxyAddress(_proxyAddr)
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const setMainAddress = async () => {
      proxyContract.methods
        .setMainAddress(deplyedNetworkAddress)
        .send(TXinfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
      proxyAddr: "",
      rewardAddress: "",
      mainAddress: "",
    });
    const getProjectData = async () => {
      _getTokenLogs();
      _mintingInformation();
      _getProjectBaseIpfsURI();
      _getActiveStatus();
      _owner();
      getSubAddrs();
      _nameNsymbol();
      getMainAddrFromProxy();
    };
    const getMainAddrFromProxy = () => {
      proxyContract.call("MainAddress").then((res) => {
        showdata.mainAddress = res;
      });
    };
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
    const _getRewardAddress = () => {
      contract.methods
        .getRewardAddress()
        .call()
        .then((res) => {
          showdata.rewardAddress = res;
        });
    };
    const _getProxyAddress = () => {
      contract.methods
        .getProxyAddress()
        .call()
        .then((res) => {
          showdata.proxyAddr = res;
        });
    };
    const getSubAddrs = () => {
      _getRewardAddress();
      _getProxyAddress();
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
    const _getTokenLogs = () => {
      contract.getPastEvents(
        "Transfer",
        {
          filter: {}, // Using an array means OR: e.g. 20 or 23
          fromBlock: 90000000,
          toBlock: "latest",
        },
        function (error, event) {
          console.log(event);
          if (event.length > 0) {
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
    const KLAYTN_URL = ref(process.env.VUE_APP_KLAYTN_SCOPE_URL);
    return {
      airDropMint,
      toggleWhitelistMintEnabled,
      KLAYTN_URL,
      removeWhitelist,
      addWhitelist,
      toggleProjectIsActive,
      updateAntibotInterval,
      updateMintLimitPerBlock,
      updateMintStartBlockNumber,
      setMainAddress,
      updateProjectBaseIpfsURI,

      updateProjectMaxInvocations,
      updateProjectPricePerTokenInPeb,
      updateProjectWhitelistPrice,
      withdraw,
      setRewardAddress,
      data,
      setProxyAddress,
      history,
      show,
      showdata,
      getProjectData,
      currentBlockNumber,
    };
  },
};
</script>

<style scoped>
.tw_btn {
  @apply px-4 py-1 rounded-full bg-white text-black;
}
.tw_btn2 {
  @apply px-4 py-1 rounded-full bg-gray-500 text-white hover:bg-gray-300 hover:text-indigo-400;
}
.admin_input {
  @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
}
.admin_btn {
  @apply shadow bg-gray-500 hover:bg-gray-400  text-white font-bold py-2 px-4 rounded;
}
.admin_txt {
  @apply text-green-500 font-bold;
}
.admin_lb {
  @apply block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4;
}
a {
  @apply text-blue-400;
}
</style>
