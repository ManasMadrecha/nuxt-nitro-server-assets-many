<template>
    <div>
        <div v-if="pending"></div>
        <div v-else></div>
    </div>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch('/api/files')
</script>

<style scoped></style>