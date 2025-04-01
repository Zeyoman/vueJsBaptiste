<script setup>
defineProps({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    }
})
</script>
<template>
    <h2 class="text-4xl font-bold mb-4">{{title}}</h2>
    <p class="text-lg text-gray-600 mb-8">
        {{description}}
    </p>
</template>