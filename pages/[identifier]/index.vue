<script setup>
const theme = useTheme()
 </script>
<template>
    <DefaultHomePage v-if="theme?.name == 'default'"  />
    <JuizzyHomePage v-if="theme?.name == 'juizzy'"  />
</template>