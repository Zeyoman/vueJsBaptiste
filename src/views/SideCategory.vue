<script setup>
import Category from '@/components/BigCategory/Category.vue';
import Product from '@/components/Product/Product.vue';
import SubCategory from '@/components/SubCategory/SubCategory.vue';
import Title from '@/components/Title/Title.vue';

import { ref, computed } from 'vue';

const produits = [
  {
    id: 1,
    title: 'Baskets Nike Air Max',
    description: 'Des baskets confortables et stylées.',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    category: 'Femme',
    size: '42'
  },
  {
    id: 2,
    title: 'Bottes de randonnée',
    description: 'Idéales pour les aventures en plein air.',
    price: 129.99,
    image: 'https://via.placeholder.com/150',
    category: 'Homme',
    size: '43'
  },
  {
    id: 3,
    title: 'Sandales en cuir',
    description: 'Confortables pour l\'été.',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    category: 'Homme',
    size: '41'
  },
  {
    id: 4,
    title: 'Bottines en daim',
    description: 'Chic et élégantes.',
    price: 89.99,
    image: 'https://via.placeholder.com/150',
    category: 'Homme',
    size: '42'
  }
];

function handleGetCategory(category) {
  selectedCategory.value = category
}

const filteredProducts = computed(() => {
  // Si aucune catégorie n'est sélectionnée, afficher tous les produits
  if (!selectedCategory.value) {
    return products.value
  }
  return products.value.filter(product => product.category === selectedCategory.value)
})

</script>

<template>
<main class="max-w-7xl mx-auto px-4 py-10">
  <div class="flex flex-col md:flex-row gap-8">
    <!-- Filtres -->
    <aside class="md:w-1/4">
        <Title />
        <SubCategory />
    </aside>

    <!-- Liste des produits -->
    <section class="flex-1">
      <Title />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Product v-for="produit in produits"
          :key="produit.id"
          :id="produit.id"
          :title="produit.title"
          :description="produit.description"
          :prix="produit.price"
          :image="produit.image"
          :category="produit.category"
          :size="produit.size"
        />
      </div>
    </section>
  </div>
</main>
</template>