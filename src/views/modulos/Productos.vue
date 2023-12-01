
<template>
    <NavBar titleModule="Productos" />
    <Modal :show="showCreateModal" @close="toggleCreateModal()" size="lg">
        <template #title>
            <h3 class="text-xl font-bold text-center ">Crear producto</h3>
        </template>
        <template #closeModal>
            <div class="relative">

                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-0"
                    @click="toggleCreateModal()">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>
        <template #body>
            <!-- <CreateEmployeesForm @closeModal="toggleCreateModal()" /> -->
            crear producto
        </template>
    </Modal>
    <label @click="toggleCreateModal()" class="btn btn-primary">Crear producto</label>
    <div class="flex justify-center content-center h-screen">
        lista
        <!-- <EmployeesTable :employees="store.empleadosLista" /> -->
    </div>
</template>


<script setup>
import NavBar from '../../components/navbars/NavBar.vue';
import { useToggle } from '@vueuse/core'
import { onBeforeMount } from 'vue'
import { useProductsStore } from '../../stores/products'
import Modal from '../../components/Modal.vue';

const store = useProductsStore()
const [showCreateModal, toggleCreateModal] = useToggle()

onBeforeMount(() => {
    store.fetchProductos()
})
</script>
