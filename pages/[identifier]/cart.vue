<script setup>
const theme = useTheme()
 </script>
<template>
    <DefaultCartPage v-if="theme?.name == 'default'"  />
    <JuizzyCartPage v-if="theme?.name == 'juizzy'"  />
</template>