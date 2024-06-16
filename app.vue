<script setup>
import { onMounted } from 'vue'

const useTheme = () => useState('theme', () => {
  return {
    general: {},
    sections: {}
  }
})
const theme = useTheme() 

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
  </div>
</template>
