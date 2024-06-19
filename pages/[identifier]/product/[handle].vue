<script setup>
const theme = useTheme()
 </script>
<template>
      <DefaultProductPage v-if="theme?.name == 'default'"  />
      <JuizzyProductPage v-if="theme?.name == 'juizzy'"  />
</template>