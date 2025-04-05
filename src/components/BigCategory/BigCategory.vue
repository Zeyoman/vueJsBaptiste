<script setup>
import Category from '@/components/BigCategory/Category.vue'

const categories = [
    {
        id: 1,
        name: 'Homme',
        description: 'Découvrez notre sélection de vêtements pour homme.'
    },
    {
        id: 2,
        name: 'Femme',
        description: 'Découvrez notre sélection de vêtements pour femme.'
    },
    {
        id: 3,
        name: 'Enfant',
        description: 'Découvrez notre sélection de vêtements pour enfant.'
    },
    {
        id: 4,
        name: 'Bébé',
        description: 'Découvrez notre sélection de vêtements pour bébé.'
    }
]
</script>

<template>
    <Category v-for="categorie in categories"
        :title="categorie.name"
        :description="categorie.description"
        :key="categorie.id"
        @get-category="getCategory(categorie.name)"
    />
</template>