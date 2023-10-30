<template>
    <table class="table">
        <!-- head -->
        <thead>
            <tr class="text-base-content text-base">
                <th></th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <!-- row 1 -->
            <tr class="hover" v-for="(categoria, index) in categories" :key="categoria.id">

                <th>{{ index + 1 }}</th>
                <td>{{ categoria.name }}</td>
                <td>{{ categoria.description }}</td>
                <td class="flex w-full content-evenly justify-evenly items-center">
                    <div class="tooltip" data-tip="Editar">
                        <button class="btn btn-info btn-xs " @click="editarCategoria(categoria.id)">
                            <font-awesome-icon icon="fa-solid fa-pen" />
                        </button>
                    </div>
                    <div class="tooltip" data-tip="Eliminar">
                        <button class="btn btn-error text-base-content btn-xs ">
                            <font-awesome-icon icon="fa-solid fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>

        </tbody>
    </table>
</template>

<script setup>
const { categories } = defineProps(['categories'])

const editarCategoria = (id) => {
    console.log(id);
}
const eliminarCategoria = (id) => {
    console.log(id);
}

</script>
