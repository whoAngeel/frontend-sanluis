<template>
    <NavBar titleModule="Perfil de usuario" />
    <div class="flex justify-center items-center content-center h-screen">
        {{ store.getEmployee }}
    </div>
</template>


<script setup>
import NavBar from '../../components/navbars/NavBar.vue';

import { useEmployeeStore } from '../../stores/employee'

const store = useEmployeeStore()


</script>
