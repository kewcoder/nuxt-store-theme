<script setup>
const theme = useTheme()
 </script>
<template>
    <SharedLinkPage v-if="theme.name"  />
</template>