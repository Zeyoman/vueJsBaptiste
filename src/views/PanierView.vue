<script setup>
import Resume from '@/components/Panier/Resume.vue'
import Title from '@/components/Title/Title.vue'
import Element from '@/components/Panier/Element.vue'

import { computed, ref, provide } from 'vue'

// On définit les produits dans une variable réactive pour que la suppression se reflète dans l'affichage
let products = ref([
  {
    id: 1,
    image: 'https://via.placeholder.com/100',
    title: 'Chaussure Cuir',
    size: '41',
    price: 89.99,
    quantity: 1
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/100',
    title: 'Bottines en daim',
    size: '42',
    price: 129.99,
    quantity: 1
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/100',
    title: 'Sneakers en toile',
    size: '40',
    price: 59.99,
    quantity: 1
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/100',
    title: 'Sandales en cuir',
    size: '39',
    price: 49.99,
    quantity: 2
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/100',
    title: 'Bottes de pluie',
    size: '43',
    price: 79.99,
    quantity: 1
  }
])

function deleteProduct(id) {
  // On filtre la liste pour retirer le produit ayant l'id passé
  products.value = products.value.filter(p => p.id !== id)
}

let totalPrice = computed(() => {
  return products.value.reduce((acc, product) => acc + product.price, 0)
})

provide('totalPrice', totalPrice)
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <Title />
    <div class="space-y-6">
      <!-- Pour chaque produit, on passe ses props et on écoute l'événement 'delete' -->
      <Element v-for="product in products" 
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :title="product.title"
        :size="product.size"
        :price="product.price"
        :quantity="product.quantity"
        @delete="deleteProduct"
      />

      <!-- Résumé commande -->
      <Resume :price="totalPrice" />
    </div>
  </main>
</template>