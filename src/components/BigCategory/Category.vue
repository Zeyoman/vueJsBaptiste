<script setup>

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        default: 'Chaussures de Ville'
    },
    description: {
        type: String,
        default: 'Classiques, élégantes pour vos journées de travail'
    },
    link: {
        type: String,
        default: '/sideCategory'
    },

})

const emit = defineEmits(['getCategory'])

const getCategory = () => {
    emit('getCategory', props.title)
}
</script>

<template>
    <a href="{{ link }}" @click="$emit(getCategory)" class="block border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
        <div class="p-4">
            <h3 class="font-semibold text-lg">{{title}}</h3>
            <p class="text-gray-600 text-sm">{{description}}</p>
        </div>
    </a>
</template>