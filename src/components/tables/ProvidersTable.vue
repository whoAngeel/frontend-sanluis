<template>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="card  w-72 h-52 bg-base-200 shadow-xl" v-for="provider in providers" :key="provider.id">
            <div class="card-body">
                <h2 class="card-title">
                    {{ provider.name }}
                </h2>
                <p>
                    {{ provider.email }}
                </p>
                <p>
                    {{ provider.phone }}
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-info btn-sm">Editar</button>
                    <button class="btn btn-error btn-sm">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { providers } = defineProps(['providers'])
</script>
