<template>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contacto</th>
                    <th>Salario</th>
                    <th></th>
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
                    <th>
                        <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>


            </tbody>


        </table>
    </div>
</template>

<script setup>
const props = defineProps(['employees'])
</script>
