<script setup>
const links = [
    {name: 'Accueil', url: '/'},
    {name: 'Nouveautés', url: '/'},
    {name: 'Homme', url: '/'},
    {name: 'Femme', url: '/'},
    {name: 'Contact', url: '/'},
]
</script>

<template>
    <header>
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
            <nav class="space-x-6 hidden md:flex">
                <a v-for="link in links" :href="link.url" class="hover:text-blue-600">{{link.name}}</a>
            </nav>
            <button class="md:hidden">☰</button>
        </div>
    </header>
</template>