<script setup>
import { onMounted } from 'vue'

const useTheme = () => useState('theme', () => {
  return {
    general: {},
    sections: {}
  }
})
const theme = useTheme() 

await callOnce(async () => {
  const data = await $fetch('https://staging.hitpay.shop/juizzy/shop-api/storefront')
  console.log('data', data)
  theme.value = data.store_design
})

onMounted(() => {
  window.onmessage = function (e) {
    if(e?.data?.event === 'store_design_changed'){
      theme.value = e?.data?.data
    }
    console.log('new theme settings :',e?.data?.event)
  };
  window.top?.postMessage(
      {
          event: "request_store_design_settings",
      },
      "*",
  );
})
</script>
<template>
  <div>
    {{  theme.general.top_banner_content }} 

    <!-- test -->
  </div>
</template>
