<script setup>
const theme = useTheme()
 </script>
<template>
    <DefaultLinkPage v-if="theme?.name == 'default'"  />
    <JuizzyLinkPage v-if="theme?.name == 'juizzy'"  />
</template>