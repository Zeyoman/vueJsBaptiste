<script setup>
import BigCategory from '@/components/BigCategory/BigCategory.vue'
</script>

<template>
<main class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">Chaussures Homme</h2>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <BigCategory />
        <BigCategory />
        <BigCategory />
    </section>
</main>
</template>