
<template>
    <NavBar titleModule="Empleados" />

    <Modal :show="showCreateModal" @close="toggleCreateModal()" size="lg">
        <template #title>
            <h3 class="text-xl font-bold text-center ">Crear empleado</h3>
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
            <CreateEmployeesForm />
        </template>
    </Modal>
    <label @click="toggleCreateModal()" class="btn btn-primary">Crear empleado</label>
    <div class="flex justify-center content-center h-screen">

        <EmployeesTable :employees="store.empleadosLista" />
    </div>
</template>

<script setup>
import Modal from '../../components/Modal.vue';
import NavBar from '../../components/navbars/NavBar.vue';
import EmployeesTable from '../../components/tables/EmployeesTable.vue';
import CreateEmployeesForm from '../../components/forms/CreateEmployees.vue'
import { useToggle } from '@vueuse/core'
import { useEmpleadosStore } from '../../stores/empleados'
import { onBeforeMount } from 'vue'

const store = useEmpleadosStore()
const [showCreateModal, toggleCreateModal] = useToggle()

onBeforeMount(() => {
    store.fetchEmpleados()
})
</script>
