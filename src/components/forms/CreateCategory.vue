<template>
    <input type="checkbox" id="crearCategoria" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box">
            <h3 class="text-xl font-bold text-center ">Nueva categoría</h3>
            <form class="space-y-6" action="#">
                <div>
                    <label class="block mb-2 font-medium ">Nombre:</label>
                    <input v-model="name" type="text" class="input input-bordered w-full    p-2.5" placeholder="Nombre">
                </div>
                <div>
                    <label class="block mb-2 font-medium ">Descripción:</label>
                    <textarea v-model="description" placeholder="Descripción"
                        class="textarea textarea-bordered w-full p-2.5"></textarea>
                </div>

                <button @click.prevent="crear" :disabled="isLoading"
                    class="w-full font-medium btn btn-primary py-2.5 text-center ">Crear
                    categoría</button>

            </form>
        </div>
        <label class="modal-backdrop" for="crearCategoria">Close</label>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCategoriesStore } from '../../stores/categories'
import { useUserStore } from '../../stores/userStore'
import axios from 'axios';
import { useToast } from 'vue-toastification'

const catStore = useCategoriesStore()
const userStore = useUserStore()
const toast = useToast()

const name = ref("")
const description = ref("")
const isLoading = ref(false)

const crear = () => {
    isLoading.value = true
    const newCategory = {
        name: name.value,
        description: description.value
    }
    catStore.addCategory(newCategory)
    axios.post('/api/categories', newCategory, {
        headers: {
            'Authorization': `Bearer ${userStore.state.token}`
        }
    }).then(res => {
        toast.success("Categoria creada correctamente")
        isLoading.value = false
    }).catch(error => {
        isLoading.value = false
        console.log(error);
    })
}
</script>
