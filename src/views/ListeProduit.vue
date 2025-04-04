<script setup>
import CardElement from '@/components/Element/CardElement.vue'
import TitleDesc from '@/components/Title/TitleDesc.vue'
</script>

<template>
<main class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
    <TitleDesc />
    <div>
        <img src="https://via.placeholder.com/600x400" class="w-full rounded-xl object-cover" alt="Produit">
    </div>
    <CardElement />
</main>
</template>