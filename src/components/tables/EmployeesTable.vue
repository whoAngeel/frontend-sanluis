<template>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contacto</th>
                    <th>Salario</th>
                    <th>Informacion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="employee in employees" :key="employee.id">

                    <td>
                        <div class="flex items-center gap-3">

                            <div>
                                <div class="font-bold">{{ employee.fullname }}</div>
                                <div class="text-sm opacity-50">{{ employee.user.username }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <div class="font-bold">{{ employee.email }}</div>
                            <div class="text-sm opacity-50">{{ employee.phone }}</div>
                        </div>
                    </td>
                    <td class="font-bold">${{ employee.salary }}</td>
                    <td>
                        <div>
                            <div class="font-bold">{{ employee.curp }}</div>
                            <div class="text-sm opacity-50">{{ employee?.rfc }}</div>
                        </div>
                    </td>
                    <th>
                        <button class="btn btn-xs bg-rose-500 text-white">Eliminar</button>
                        <button class="btn btn-xs bg-sky-500 text-white">Editar</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps(['employees'])
</script>
