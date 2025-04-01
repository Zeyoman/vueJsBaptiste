<script setup>
const props = defineProps({
    title: String,
    price: Number,
    taille: Number,
    image:{
        type:String,
        default:"https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
        required:true
    }
})
</script>

<template>
    <!-- Produit -->
    <div class="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
        <img :src="image" :alt="props.title" class="w-full h-60 object-cover">
        <div class="p-4">
            <h4 class="font-semibold text-lg">{{ props.title}}</h4>
            <p class="text-gray-600">{{ props.taille}}</p>
            <p class="font-bold mt-2">{{ props.price}}€</p>
        </div>
    </div>
</template>