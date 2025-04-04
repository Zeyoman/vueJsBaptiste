<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/100'
  },
  title: {
    type: String,
    default: 'Chaussure Cuir'
  },
  size: {
    type: String,
    default: '41'
  },
  price: {
    type: Number,
    default: 89.99
  },
  quantity: {
    type: Number,
    default: 2
  }
})

const emit = defineEmits(['delete'])

function deleteElement() {
  // On passe l'id en argument afin que le parent sache quel produit supprimer
  emit('delete', props.id)
}
</script>

<template>
  <div class="flex items-center justify-between border-b pb-4">
    <div class="flex items-center gap-4">
      <img :src="image" class="w-20 h-20 object-cover rounded" alt="Produit">
      <div>
        <p class="font-medium">{{ title }}</p>
        <p class="text-gray-500 text-sm">Pointure : {{ size }}</p>
        <p class="text-gray-500 text-sm">{{ quantity }}</p>
      </div>
    </div>
    <div class="text-right">
      <p class="font-bold">{{ price }} €</p>
      <button class="text-red-500 text-sm hover:underline mt-1" @click="deleteElement">Supprimer</button>
    </div>
  </div>
</template>