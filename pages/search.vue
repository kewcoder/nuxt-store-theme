<script setup>
const theme = useTheme()
 </script>
<template>
    <DefaultSearchPage v-if="theme?.name == 'default'"  />
    <JuizzySearchPage v-if="theme?.name == 'juizzy'"  />
</template>