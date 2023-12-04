<template>
    <NavBar titleModule="Proveedores" />
<!--
    <div class="flex justify-center items-center content-center h-screen">
        Proveedores...
    </div>
-->
    <Modal :show="showCreateModal" @close="toggleCreateModal()" size="lg">
        <template #title>
            <h3 class="text-xl font-bold text-center ">Crear proveedor</h3>
        </template>
        <template #closeModal>
            <div class="relative">

                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-1 flex-auto"
                    @click="toggleCreateModal()">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>
        <template #body>
            <CrearProveedorForm @closeModal="toggleCreateModal()" />
        </template>
    </Modal>
    
    <div class="flex flex-col justify-normal items-center  p-4">
        <label @click="toggleCreateModal()" class="btn btn-primary ">Crear proveedor</label>
    

        <ProveedorTabla :proveedors="store.proveedores" />
    </div>
</template>

<script setup>
import NavBar from '@/components/navbars/NavBar.vue';
import CrearProveedorForm from '../../components/forms/CrearProveedor.vue'
import ProveedorTabla from '../../components/tables/ProveedorTabla.vue';
import { useProveedoresStore } from '../../stores/proveedores';
import { onBeforeMount } from 'vue';
import { useToggle } from '@vueuse/core';
import Modal from '../../components/Modal.vue';



const store = useProveedoresStore()
const [showCreateModal, toggleCreateModal] = useToggle()

onBeforeMount(() => {
    store.fetchProveedores()
})
</script>
