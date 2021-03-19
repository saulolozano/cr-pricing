<template>

  <div class="container m-auto p-24">
    <div class="" style="min-height:160px;">
      <h1 class="text-4xl text-center text-gray-700">Cloud Router Pricing</h1>
      <p class="mb-10 text-center text-lg text-gray-400">
        Select the regions you'd like to use in your cloud router and we'll tell you how much you have to pay.<br>
        <transition
          enter-active-class="transition-opacity ease-in duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-in duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <button v-if="anOptionIsSelected" @click="reset" class="p-3 mt-4 bg-yellow-100 text-yellow-700 font-bold rounded-md transition ease-in-out">
            Start over
          </button>
        </transition>
      </p>
    </div>
    


    <!-- This example requires Tailwind CSS v2.0+ -->
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-middle">
      
      <li
        @click="region.selected=!region.selected"
        v-for="region in regions" :key="region"
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200
               border-2 border-indigo-200 cursor-pointer
               transition ease-in-out duration-300"
        :class="{'border-indigo-700': region.selected}">
        <div class="flex-1 flex flex-col p-6">
          <h3 class="mt-6 text-gray text-2xl font-medium">{{region.name}}</h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dd class="text-gray-500 text-sm">{{region.description}}</dd>
            <dd class="mt-3">
              <span v-if="region.hasDiscount" class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">limited-time discount</span>
            </dd>
          </dl>
        </div>
      </li>




      <!-- Price box -->
      <transition
        enter-active-class="transition-opacity ease-in duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-in duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <li v-if="anOptionIsSelected" class="col-span-4 border-2 border-green-200 bg-green-50 rounded-md">
          <div class="rounded-md bg-green-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-8 w-8 inline-block text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3 flex-auto">
                <h3 class="text-lg font-medium text-green-800">
                  {{billingMessage}}
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  To the right is the amount you have to pay
                </div>
              </div>
              <div class="ml-3 flex-auto bg-green-200 rounded-md p-2">
                <h3 class="pl-10 text-gray text-3xl font-medium text-green-700 inline-block">$500</h3>
                <h3 class="pl-8 text-gray text-2xl font-medium text-green-700 inline-block">+</h3>
                <h3 class="pl-10 text-gray text-3xl font-medium text-green-700 inline-block">${{total}}</h3><br>

                <p class="pl-10 inline-block text-sm text-green-700">Base Price</p>
                <h3 class="pl-8 text-gray text-3xl font-medium text-green-700 inline-block"></h3>
                <p class="pl-16 ml-1 inline-block text-sm text-green-700">Per Connection up to 500Mbps</p>
              </div>
            </div>
          </div>
        </li>
      </transition>
    </ul>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      regions: [
        {'name': 'US West Region', 'description': 'This region includes your typical suspects: CA,AZ,CO,OR, etc.', hasDiscount: Math.random() > 0.5, selected: false, rate: 45},
        {'name': 'US Central Region', 'description': 'This region includes your typical suspects: TX,IL,IN,KC, etc.', hasDiscount: Math.random() > 0.5, selected: false, rate: 45},
        {'name': 'US East Region', 'description': 'This region includes your typical suspects: NY,NJ,FL,GA, etc.', hasDiscount: Math.random() > 0.5, selected: false, rate: 45},
        {'name': 'EU Region', 'description': 'This region all of the countries in the European Union.', hasDiscount: Math.random() > 0.5, selected: false, rate: 75},
      ]
    }
  },
  computed: {
    anOptionIsSelected() {
      return this.regions.some((region) => region.selected);
    },
    billingMessage() {
      let selectedRegionCount = 0;
      this.regions.map(region => {selectedRegionCount += region.selected ? 1 : 0});
      if (selectedRegionCount === 1) {
        return "You have selected a single region Cloud Router"
      } else {
        return "You have selected a multi-region Cloud Router"
      }
    },
    total() {
      let total = 0;
      if (this.anOptionIsSelected) {
        this.regions.map(region => {
          total += region.selected ? region.rate : 0;
        });
      }
      return total.toLocaleString();
    }
  },
  methods: {
    reset() {
      this.regions.map(region => {region.selected = false});
    }
  }
}

</script>

<style>

</style>