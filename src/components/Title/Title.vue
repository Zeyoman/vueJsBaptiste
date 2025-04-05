<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h2 class="text-4xl font-bold mb-4">{{props.title}}</h2>
</template>