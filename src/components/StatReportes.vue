<template>
    <div class="stats stats-vertical shadow">

        <div class="stat">
            <div class="stat-title">Articulos Vendidos</div>
            <div class="stat-value">{{ articulos }}</div>
            <div class="stat-desc">{{ month }} </div>

        </div>

        <div class="stat">
            <div class="stat-title">Total Vendido</div>
            <div class="stat-value">${{ total.toFixed(2) }}</div>
            <div class="stat-desc">{{ month }} </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps(['total', 'articulos', 'month'])
</script>
