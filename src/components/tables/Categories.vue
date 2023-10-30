<template>
    <table class="table">
        <!-- head -->
        <thead>
            <tr class="text-base-content text-base">
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <!-- row 1 -->
            <paginate name="categories" :list="categories" :per="5">
                <tr class="hover" v-for="categoria in paginated('categories')" :key="categoria.id">
                    <td>{{ categoria.name }}</td>
                    <td>{{ categoria.description }}</td>
                    <td class="flex w-full content-evenly justify-evenly items-center">
                        <div class="tooltip" data-tip="Editar">
                            <button class="btn btn-info btn-xs " @click="editarCategoria(categoria.id)">
                                <font-awesome-icon icon="fa-solid fa-pen" />
                            </button>
                        </div>
                        <div class="tooltip" data-tip="Eliminar">
                            <button class="btn btn-error text-base-content btn-xs " @click="preguntarEliminar(categoria.id)"
                                type="button">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>

                        </div>
                    </td>
                </tr>
            </paginate>
            <paginate-links for="categories"></paginate-links>


        </tbody>
    </table>
    <Modal :show="showDeleteModal" @close="toggleModal()">
        <template v-slot:title>
            <h3 class="text-lg font-bold text-center mt-5">¿Estas seguro de eliminar esta categoria?</h3>
        </template>

        <template #closeModal>
            <div class="flex justify-end">

                <button class="btn btn-sm text-xl hover:text-2xl btn-circle btn-ghost " @click="toggleModal()">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
            </div>
        </template>

        <template #body>
            <div class="flex justify-end gap-3 mt-5">
                <button class="btn btn-md btn-error " @click="eliminarCat(idCat)">Eliminar</button>
                <button class="btn btn-md" @click="toggleModal()">Cancelar</button>
            </div>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '../Modal.vue';
import { useToggle } from '@vueuse/core'
import { ref } from 'vue'
import { useCategoriesStore } from '../../stores/categories'

const catStore = useCategoriesStore()

const [showDeleteModal, toggleModal] = useToggle()
const idCat = ref(0)

const { categories } = defineProps(['categories'])

const editarCategoria = (id) => {
    console.log(id);
}
const preguntarEliminar = (id) => {
    idCat.value = id
    toggleModal()
}

const eliminarCat = (id) => {
    toggleModal()
    console.log(`Eliminando cat ${id}`);
    const token = $cookies.get('auth')
    catStore.deleteCategory(id, token)
    catStore.fetchCategories(token)
}

</script>
