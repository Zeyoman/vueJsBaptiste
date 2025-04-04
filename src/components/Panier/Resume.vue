<script setup>
import Prix from '@/components/Panier/Prix.vue'
import Button from '@/components/Button/ButtonPageLink.vue'
import { defineProps } from 'vue'

const props = defineProps({
  totalPrice: Number
})
</script>

<template>
    <div class="text-right mt-10">
        <Prix :price="totalPrice" />
        <Button />
    </div>
</template>