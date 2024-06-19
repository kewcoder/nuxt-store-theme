<script setup>
const theme = useTheme()
 </script>
<template>
    <SharedCheckoutPage v-if="theme.name"  />
</template>