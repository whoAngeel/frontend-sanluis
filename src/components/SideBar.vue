<template>
    <!-- component -->
    <aside class="fixed top-0 left-0 z-40 w-1/6 h-screen  -translate-x-full sm:translate-x-0 ">

        <div class="min-h-screen flex flex-row ">
            <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div class="flex items-center justify-center h-20 shadow-md">
                    <h1 class="text-3xl uppercase text-primary">Logo</h1>
                </div>
                <ul class="flex flex-col py-4">
                    <li>
                        <RouterLink to="/punto-venta"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon icon="fa-solid fa-egg" />
                            </span>
                            <span class="text-sm font-medium">Punto de venta</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/empleados"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon :icon="['fas', 'people-group']" />
                            </span>
                            <span class="text-sm font-medium">Empleados</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/productos"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon :icon="['fas', 'bag-shopping']" />
                            </span>
                            <span class="text-sm font-medium">Productos</span>
                        </RouterLink>
                    </li>
                    <li>
                        <a href="#"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon icon="fa-solid fa-truck" />
                            </span>
                            <span class="text-sm font-medium">Proveedores</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon icon="fa-solid fa-calendar" />
                            </span>
                            <span class="text-sm font-medium">Categorias</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon icon="fa-solid fa-user" />
                            </span>
                            <span class="text-sm font-medium">Perfil</span>
                        </a>
                    </li>

                    <li>
                        <router-link to="/login"
                            class="flex flex-row items-center h-12 transform hover:translate-x-2  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                            </span>
                            <span class="text-sm font-medium">Cerrar Sesion</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup>

</script>

<style scoped>
li>.router-link-active {
    color: hsl(var(--p));

}
</style>
