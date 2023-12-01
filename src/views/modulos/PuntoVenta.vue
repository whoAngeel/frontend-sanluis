<template>
    <NavBar titleModule="Punto de venta" />
    <div class="flex justify-center content-between h-screen ">
        <button class="btn btn-primary" :disabled="ventaStore.venta" @click="generarVenta()">Generar Venta</button>

        <div class="static w-screen h-screen">
            <div class="card w-4/12 bg-base-100 shadow-xl absolute left-40 top-40">
                <div class="card-body bg-base-200 flex items-center">
                    <div class="join">
                        <input class="input input-bordered join-item" v-model="nameProduct"
                            placeholder="Nombre del producto" />
                        <button class="btn join-item rounded-r-full bg-base-300" @click="buscar()">Buscar</button>
                    </div>
                    <ul>
                        <li v-for="item in busqueda" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="ventaStore.venta" class="static w-screen h-screen">
            <div class="card w-5/12 bg-base-100 shadow-xl absolute right-12 top-40">
                <div class="card-body bg-base-200">
                    <h2 class="text-center text-2xl font-bold">Productos</h2>

                    <div v-if="carrito.length === 0">
                        Sin articulos en la venta
                    </div>
                    <div v-else v-for="(item, index) in items" :key="index">
                        {{ item }}

                        <button class="btn btn-warning">Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../../components/navbars/NavBar.vue';

import { useVentaStore } from '../../stores/venta'

const ventaStore = useVentaStore()

const nameProduct = ref("")

const { carrito, busqueda, buscarByName } = ventaStore

const generarVenta = async () => {
    await ventaStore.createVenta()
}

const buscar = async () => {
    await buscarByName(nameProduct.value)
}

</script>
