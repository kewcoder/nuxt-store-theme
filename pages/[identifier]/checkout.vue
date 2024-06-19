<script setup>
const theme = useTheme()
 </script>
<template>
    <DefaultCheckoutPage v-if="theme?.name == 'default'"  />
    <JuizzyCheckoutPage v-if="theme?.name == 'juizzy'"  />
</template>