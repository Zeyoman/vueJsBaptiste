<script setup>
import BigCategory from '@/components/BigCategory/BigCategory.vue'
import Title from '@/components/Title/Title.vue'
</script>

<template>
    <div class="flex justify-center">
        <Title title="Choisissez votre catégorie" />
    </div>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <BigCategory />
    </section>
</template>