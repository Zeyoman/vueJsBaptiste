<script setup>
import { inject } from 'vue'

// On injecte la valeur en utilisant la clé 'totalPrice'
const totalPrice = inject('totalPrice')
</script>

<template>
    <p class="text-lg font-semibold">Total : <span class="text-blue-600">{{totalPrice.toFixed(2)}}€</span></p>
</template>