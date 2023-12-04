<template>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Folio</th>
                    <th>Empleado</th>
                    <th>Articulos</th>
                    <th>Total</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>

                <tr class="hover" v-for="venta in ventas" :key="venta.id">
                    <th>#{{ venta.id }}</th>
                    <td>{{ venta.employee.fullname }}</td>
                    <td>{{ venta.items.length }}</td>
                    <td>${{ venta.total.toFixed(2) }} </td>
                    <td>{{ venta.createdAt }} </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useVentaStore } from '../../stores/venta'
const { ventas } = useVentaStore()


onMounted(() => {

})
</script>
