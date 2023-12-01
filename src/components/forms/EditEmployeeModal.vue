<template>
    <form class="mt-3 w-full">
        <div class="divider">Informacion del empleado</div>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="font-bold pr-4">
                    Nombre(s)*
                </label>
                <input v-bind="names" type="text" class="input input-sm uppercase w-full">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.names }}</span>
                </label>
            </div>
            <div>
                <label class="font-bold pr-4">
                    Apellidos*
                </label>
                <input type="text" class="input uppercase input-sm w-full" v-bind="lastnames">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.lastnames }}</span>
                </label>
            </div>
            <div>
                <label class="font-bold pr-4">
                    Email*
                </label>
                <input type="email" class="input input-sm w-full" v-bind="email">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.email }}</span>
                </label>
            </div>
            <div>
                <label class="font-bold pr-4">
                    Telefono
                </label>
                <input type="text" class="input input-sm w-full" v-bind="phone">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.phone }}</span>
                </label>
            </div>
            <div>
                <label class="font-bold pr-4">
                    CURP*
                </label>
                <input type="text" class="input input-sm w-full uppercase" v-bind="curp">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.curp }}</span>
                </label>
            </div>
            <div>
                <label class="font-bold pr-4">
                    RFC
                </label>
                <input type="text" class="input input-sm w-full uppercase" v-bind="rfc">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.rfc }}</span>
                </label>
            </div>
            <div>
                <label class="font-bold pr-4">
                    Salario
                </label>
                <input type="number" class="input input-sm w-full" v-bind="salary">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.salary }}</span>
                </label>
            </div>
        </div>

        <div class="divider">Informacion del usuario</div>

        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="font-bold pr-4">
                    Nombre de usuario*
                </label>
                <input type="text" class="input input-sm w-full" v-bind="username">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.username }}</span>
                </label>
            </div>

            <div>
                <label class="font-bold pr-4">
                    Contraseña*
                </label>
                <input type="password" class="input input-sm w-full" v-bind="password">
                <label class="label h-6 static">
                    <span class="label-text-alt text-rose-600 absolute">{{ errors.password }}</span>
                </label>
            </div>

            <div>
                <label class="font-bold pr-4">
                    Rol*
                </label>
                <select class="select select-md select-bordered w-full" v-model="rol">
                    <option disabled selected value="">Selecciona un rol</option>
                    <option value="admin">Administrador</option>
                    <option value="employee">Vendedor</option>
                </select>
            </div>
        </div>
        <div class="flex justify-end">
            <button class="btn btn-md btn-primary" @click="onSubmit()" :disabled="isSubmitting">
                {{ isSubmitting ? "Creando..." : "Crear" }}
            </button>
        </div>
    </form>
</template>

<script setup>
const props = defineProps(['empleado'])
const emits = defineEmits(['closeModal'])
</script>
