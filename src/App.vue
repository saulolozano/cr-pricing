<template>

  <div class="container m-auto p-32">
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
    


    <ul class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 align-middle">
      
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
        <li v-if="anOptionIsSelected" class="col-span-3 border-2 border-green-200 bg-green-50 rounded-md">
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
              <div class="ml-3 flex-auto bg-gray-100 text-center rounded-md p-1">
                <table class="min-w-full divide-y divide-gray-200 rounded-md">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                        <svg class="inline-block p-0 m-0" width="28px" height="28px" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 16 6 C 9.382813 6 4 11.382813 4 18 C 4 20.894531 5.035156 23.550781 6.75 25.625 L 7.03125 26 L 24.96875 26 L 25.25 25.625 C 26.964844 23.550781 28 20.894531 28 18 C 28 11.382813 22.617188 6 16 6 Z M 16 8 C 21.535156 8 26 12.464844 26 18 C 26 20.265625 25.207031 22.324219 23.9375 24 L 8.0625 24 C 6.792969 22.324219 6 20.265625 6 18 C 6 12.464844 10.464844 8 16 8 Z M 16 9 C 15.449219 9 15 9.449219 15 10 C 15 10.550781 15.449219 11 16 11 C 16.550781 11 17 10.550781 17 10 C 17 9.449219 16.550781 9 16 9 Z M 12 10.0625 C 11.449219 10.0625 11 10.511719 11 11.0625 C 11 11.613281 11.449219 12.0625 12 12.0625 C 12.550781 12.0625 13 11.613281 13 11.0625 C 13 10.511719 12.550781 10.0625 12 10.0625 Z M 20 10.0625 C 19.449219 10.0625 19 10.511719 19 11.0625 C 19 11.613281 19.449219 12.0625 20 12.0625 C 20.550781 12.0625 21 11.613281 21 11.0625 C 21 10.511719 20.550781 10.0625 20 10.0625 Z M 9.0625 13 C 8.511719 13 8.0625 13.449219 8.0625 14 C 8.0625 14.550781 8.511719 15 9.0625 15 C 9.613281 15 10.0625 14.550781 10.0625 14 C 10.0625 13.449219 9.613281 13 9.0625 13 Z M 22.65625 13.03125 L 17 16.28125 C 16.707031 16.109375 16.363281 16 16 16 C 14.894531 16 14 16.894531 14 18 C 14 19.105469 14.894531 20 16 20 C 17.09375 20 17.984375 19.121094 18 18.03125 C 18 18.019531 18 18.011719 18 18 L 23.65625 14.78125 Z M 8 17 C 7.449219 17 7 17.449219 7 18 C 7 18.550781 7.449219 19 8 19 C 8.550781 19 9 18.550781 9 18 C 9 17.449219 8.550781 17 8 17 Z M 24 17 C 23.449219 17 23 17.449219 23 18 C 23 18.550781 23.449219 19 24 19 C 24.550781 19 25 18.550781 25 18 C 25 17.449219 24.550781 17 24 17 Z M 9.0625 21 C 8.511719 21 8.0625 21.449219 8.0625 22 C 8.0625 22.550781 8.511719 23 9.0625 23 C 9.613281 23 10.0625 22.550781 10.0625 22 C 10.0625 21.449219 9.613281 21 9.0625 21 Z M 22.9375 21 C 22.386719 21 21.9375 21.449219 21.9375 22 C 21.9375 22.550781 22.386719 23 22.9375 23 C 23.488281 23 23.9375 22.550781 23.9375 22 C 23.9375 21.449219 23.488281 21 22.9375 21 Z" />
                        </svg>
                        Speed
                      </th>
                      <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="(value, name, index) in total" :key="index">
                      <tr :class="{'bg-white': index % 2 == 0, 'bg-gray-50': index % 2 != 0}" class="hover:bg-gray-200">
                        <td class="px-6 py-4 whitespace-nowrap text-center text-lg text-gray-600">
                          {{name}}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center text-2xl font-medium text-gray-700">
                          {{formatCurrency(value)}}
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
                <br>
                <a href="javascript:;" @click="showAll=!showAll" class="text-center py-2 px-3 rounded-md hover:bg-gray-300 ">
                  <template v-if="!showAll">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                    Show all
                  </template>
                  <template v-if="showAll">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>
                    Show less
                  </template>
                </a>
                <br><br>
              </div>
            </div>
          </div>
        </li>
      </transition>
    </ul>
  </div>

</template>

<script>

export default {
  data() {
    return {
      regions: [
        {'name': 'North America', 'description': 'This region includes continental United States and Canada.', hasDiscount: Math.random() > 0.5, selected: false, short_name: 'us'},
        {'name': 'Europe', 'description': 'This region includes the UK and EU countries.', hasDiscount: Math.random() > 0.5, selected: false, short_name: 'eu'},
        {'name': 'South America', 'description': 'This region includes Colombia, Argentina, Chile and Brazil.', hasDiscount: Math.random() > 0.5, selected: false, short_name: 'sa'},
      ],
      pricing_tables: {
        'us': {
          '50Mbps': '100',
          '100Mbps': '100',
          '200Mbps': '100',
          '300Mbps': '100',
          '400Mbps': '100',
          '500Mbps': '100',
          '1Gbps': '200',
          '2Gbps': '200',
          '5Gbps': '350',
          '10Gbps': '600',
          '20Gbps': '1000',
          '30Gbps': '1600',
          '40Gbps': '2400',
          '50Gbps': '3600',
          '60Gbps': '4500',
          '80Gbps': '5600',
          '100Gbps': '6800'
        },
        'eu': {
          '50Mbps': '119',
          '100Mbps': '119',
          '200Mbps': '119',
          '300Mbps': '119',
          '400Mbps': '119',
          '500Mbps': '119',
          '1Gbps': '237',
          '2Gbps': '237',
          '5Gbps': '415',
          '10Gbps': '712',
          '20Gbps': '1187',
          '30Gbps': '1899',
          '40Gbps': '2849',
          '50Gbps': '4272',
          '60Gbps': '5342',
          '80Gbps': '6648',
          '100Gbps': '8072'
        },
        'sa': {
          '50Mbps': '225',
          '100Mbps': '300',
          '200Mbps': '450',
          '300Mbps': '600',
          '400Mbps': '750',
          '500Mbps': '900',
          '1Gbps': '1350',
          '2Gbps': '2400',
          '5Gbps': '4500',
          '10Gbps': '8400',
          '20Gbps': '12750',
          '30Gbps': '17250',
          '40Gbps': '21000',
          '50Gbps': '24000',
          '60Gbps': '26250',
          '80Gbps': '28350',
          '100Gbps': '29850'
        },
        'eu_us': {
          '50Mbps': '150',
          '100Mbps': '200',
          '200Mbps': '300',
          '300Mbps': '400',
          '400Mbps': '500',
          '500Mbps': '600',
          '1Gbps': '900',
          '2Gbps': '1600',
          '5Gbps': '3000',
          '10Gbps': '5600',
          '20Gbps': '8500',
          '30Gbps': '11500',
          '40Gbps': '14000',
          '50Gbps': '16000',
          '60Gbps': '17500',
          '80Gbps': '18900',
          '100Gbps': '19900'
        },
        'sa_us': {
          '50Mbps': '225',
          '100Mbps': '300',
          '200Mbps': '450',
          '300Mbps': '600',
          '400Mbps': '750',
          '500Mbps': '900',
          '1Gbps': '1350',
          '2Gbps': '2400',
          '5Gbps': '4500',
          '10Gbps': '8400',
          '20Gbps': '12750',
          '30Gbps': '17250',
          '40Gbps': '21000',
          '50Gbps': '24000',
          '60Gbps': '26250',
          '80Gbps': '28350',
          '100Gbps': '29850'
        },
        'eu_sa': {
          '50Mbps': '225',
          '100Mbps': '300',
          '200Mbps': '450',
          '300Mbps': '600',
          '400Mbps': '750',
          '500Mbps': '900',
          '1Gbps': '1350',
          '2Gbps': '2400',
          '5Gbps': '4500',
          '10Gbps': '8400',
          '20Gbps': '12750',
          '30Gbps': '17250',
          '40Gbps': '21000',
          '50Gbps': '24000',
          '60Gbps': '26250',
          '80Gbps': '28350',
          '100Gbps': '29850'
        },
        'eu_sa_us': {
          '50Mbps': '225',
          '100Mbps': '300',
          '200Mbps': '450',
          '300Mbps': '600',
          '400Mbps': '750',
          '500Mbps': '900',
          '1Gbps': '1350',
          '2Gbps': '2400',
          '5Gbps': '4500',
          '10Gbps': '8400',
          '20Gbps': '12750',
          '30Gbps': '17250',
          '40Gbps': '21000',
          '50Gbps': '24000',
          '60Gbps': '26250',
          '80Gbps': '28350',
          '100Gbps': '29850'
        }
      },
      showAll: false
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
      if (this.anOptionIsSelected) {
        let selectedRegions = []
        this.regions.map(region => {
          if (region.selected) {
            selectedRegions.push(region.short_name);
          }
        });
        this.selectedRegionName = selectedRegions.sort().join('_');
        const pricing = this.pricing_tables[this.selectedRegionName];
        const totalLength = this.showAll ? Object.keys(pricing).length : 6;
        return Object.keys(pricing).slice(0, totalLength).reduce((result, key) => {
                    result[key] = pricing[key];
                    return result;
                }, {});
      }
    }
  },
  methods: {
    reset() {
      this.regions.map(region => {region.selected = false});
    },
    formatCurrency(value) {
      const symbol = this.selectedRegionName !== 'eu' ? '$' : '€';
      return symbol + parseInt(value).toLocaleString();
    }
  }
  
}

</script>

<style>

</style>