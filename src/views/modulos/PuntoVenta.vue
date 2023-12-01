<template>
    <NavBar titleModule="Punto de venta" />
    <div class="flex justify-center content-between h-screen ">
        <button class="btn btn-primary" @click="generarVenta()">Generar Venta</button>
    </div>
</template>

<script setup>
import NavBar from '../../components/navbars/NavBar.vue';

import { useVentaStore } from '../../stores/venta'

const ventaStore = useVentaStore()

const generarVenta = async () => {
    await ventaStore.createVenta()
}

</script>
