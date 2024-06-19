<script setup>
const theme = useTheme()
 </script>
<template>
    <DefaultSearchkPage v-if="theme?.name == 'default'"  />
    <JuizzySearchPage v-if="theme?.name == 'juizzy'"  />
</template>