<template>
    <div class="overflow-y-auto table-xs">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Folio</th>
                    <th>Empleado</th>
                    <th>Articulos</th>
                    <th>Total</th>
                    <th>Fecha</th>
                    <th>Mas informacion</th>
                </tr>
            </thead>
            <tbody>

                <tr class="hover" v-for="venta in ventas" :key="venta.id">
                    <th>#{{ venta.id }}</th>
                    <td>{{ venta.employee.fullname }}</td>
                    <td>{{ venta.items.length }}</td>
                    <td>${{ venta.total.toFixed(2) }} </td>
                    <td>
                        <timeago :datetime="venta.createdAt" :locale="es" />
                    </td>
                    <th class="badge hover:badge-primary hover:cursor-pointer" @click="showDetails(venta.id)">Detalles</th>
                </tr>

            </tbody>
        </table>
    </div>

    <Modal :show="showTicketModal" @close="toggleTicketModal()" size="md">
        <template #title>
            <h3 class="text-xl font-bold text-center ">Ticket</h3>
        </template>
        <template #closeModal>
            <div class="relative">

                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost absolute right-1 top-0"
                    @click="toggleTicketModal()">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>
        <template #body>
            <Ticket />
        </template>
    </Modal>
</template>

<script setup>
import { onMounted } from 'vue';
import Ticket from '../Ticket.vue'
import Modal from '../Modal.vue';
import { useToggle } from '@vueuse/core'
import { useVentaStore } from '../../stores/venta'
import { es } from 'date-fns/locale'
import { useReportesStore } from '../../stores/reportes'

const reportesStore = useReportesStore()
const { ventas, fetchVentas } = useVentaStore()
const [showTicketModal, toggleTicketModal] = useToggle()

const showDetails = async (id) => {
    // producto.value = await store.getProductoById(id)
    // console.log(producto.value);
    reportesStore.getTicketInfo(id)
    toggleTicketModal()
}

onMounted(async () => {
    await fetchVentas()
})


</script>
