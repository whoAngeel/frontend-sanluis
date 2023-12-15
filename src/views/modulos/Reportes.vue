<template>
    <NavBar titleModule="Reportes   " />

    <div class="w-4/5 mx-auto flex items-center justify-evenly my-8">
        <div class="">
            <h3 class="text-primary text-3xl text-center font-extrabold">Mes</h3>
            <StatReportes month="Diciembre 2023" :articulos="itemsTotal" :total="amountTotal" />
        </div>
        <div class="">
            <h3 class="text-primary text-3xl text-center font-extrabold">Hoy</h3>
            <StatReportes month="Diciembre 15, 2023" :articulos="todayTotalItems" :total="todayTotalAmount" />
        </div>
        <!-- <div class="divider divider-vertical"></div> -->
    </div>

    <div class="w-4/5 mx-auto">
        <SalesTable />
    </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue';
// import moment from 'moment'
// import 'moment/locale/es'
import NavBar from '../../components/navbars/NavBar.vue';
import SalesTable from '../../components/tables/SalesTable.vue';
import StatReportes from '../../components/StatReportes.vue'
import { useReportesStore } from '../../stores/reportes'

const store = useReportesStore()
const reportes = store.reportes
const reportesToday = store.reportesToday


const amountTotal = computed(() => {
    const total = reportes.reduce((total, sale) => {
        return total + sale.total
    }, 0)
    console.log('Total amount ' + total);
    return total
})

const itemsTotal = computed(() => {
    const total = reportes.reduce((total, sale) => {
        return total + sale.items.length
    }, 0)
    console.log("Total items " + total);
    return total
})

const todayTotalAmount = computed(() => {
    const total = reportesToday.reduce((total, sale) => {
        return total + sale.total
    }, 0)
    console.log('Total amount ' + total);
    return total
})
const todayTotalItems = computed(() => {
    const total = reportesToday.reduce((total, sale) => {
        return total + sale.items.length
    }, 0)
    console.log("Total items " + total);
    return total
})



onBeforeMount(() => {
    store.fetchReportes()
    store.fetchReportesDay()
})

</script>
