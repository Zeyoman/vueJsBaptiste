<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    default: 'Chaussures pour Homme'
  },
  description: {
    type: String,
    default: 'Découvrez notre sélection de chaussures pour homme.'
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/400x300'
  },
  category: {
    type: String,
    default: 'Homme'
  },
  prix: {
    type: Number,
    default: 69.99
  },
  size: {
    type: String,
    default: '41'
  },
})
</script>

<template>
    <a :href="props.link">
        <div :category="props.category" class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
        <img :src="props.image" class="w-full h-56 object-cover" alt="Chaussure">
        <div class="p-4">
            <h3 class="font-semibold">{{ props.title }}</h3>
            <h3 class="font-semibold">{{ props.size }}</h3>
            <p class="text-gray-600 text-sm">{{ props.description }}</p>
            <p class="font-bold mt-1">{{ props.prix }} €</p>
        </div>
        </div>
    </a>
</template>