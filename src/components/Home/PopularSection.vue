<script setup>
import ProductCard from '@/components/ProductCard.vue'

import { ref } from 'vue'

let shoes = ref([]);

function addShoe() {
  shoes.value.push(ref(1));
}

const products =[
    {
        title: "Chaussure",
        price: 15,
        taille: 44,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAy-i62raEXlUZGiKWSVOsl0oIlIZ5Fek1_1QmB8SfDvBZr9zi6EMXJ6R8Sdr5TI0ALtoJynu2tHoPuHs_dvOtqzlhEUvWsPn8c4Bi8tteCKuIdabBGMhl"
    },
    {
        title: "Chaussure",
        price: 15,
        taille: 44
    },
    {
        title: "Lilian",
        price: 3,
        taille: 1.10,
        image: "https://media.licdn.com/dms/image/v2/D4E35AQFgysvFb_MF_A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1726608708603?e=1744110000&v=beta&t=NjiV-Fz4vGRdj6ztQYZd3va4cc5-vD7coSlvoFw5oIQ"
    },
    {
        title: "Baptiste",
        price: 3.05,
        taille: 1.79,
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHyELQilSYKzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677748408348?e=1749081600&v=beta&t=TYN0T2bu1iBCSkXJz2AHMFnAnFJzQw68IJyj5uk90gw"
    },
    {
        title: "RedBull",
        price: 15,
        taille: 44
    },
    {
        title: "Rien",
        price: 15,
        taille: 44
    },
    
]
</script>

<template>
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
        <div class="w-full justify-center flex mb-4">
            <button class="bg-blue-400 rounded-lg px-3 py-1 m-auto" @click="addShoe">Ajouter une chaussure</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard v-for="product in products" :title="product.title" :price="product.price" :taille="product.taille" :image="product.image"/>
        </div>
      </div>
    </section>
</template>