<template>
    <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-base-300 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-base-content text-center">
                        Iniciar Sesión
                    </h1>
                    <!-- TODO: corregir ortografia -->

                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label class="block mb-2 font-medium ">
                                Nombre de usuario:
                            </label>
                            <input v-model="username" type="text" class="input input-sm block w-full "
                                placeholder="usuario1" required="">
                        </div>

                        <div class="py-2" x-data="{ show: true }">
                            <label for="password" class="block mb-2  font-medium ">Contraseña: </label>
                            <div class="relative">
                                <input placeholder="••••••••••" :type="showPassword ? 'password' : 'text'"
                                    v-model="password" class="input input-sm text-md block px-3 py-2 rounded-lg w-full">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                                    <font-awesome-icon @click="showPassword = !showPassword"
                                        :class="{ 'hidden': !showPassword, 'block': showPassword }"
                                        icon="fa-solid fa-eye" />
                                    <font-awesome-icon @click="showPassword = !showPassword"
                                        :class="{ 'block': !showPassword, 'hidden': showPassword }"
                                        icon="fa-solid fa-eye-slash" />
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Olvidó su contraseña?
                            </a>
                        </div>
                        <button @click.prevent="login()" :disabled="isLoading"
                            class="w-full btn btn-primary btn-sm font-medium rounded-lg text-sm px-5 text-center text-white">
                            Ingresar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '@vueuse/core'
import { useToast } from 'vue-toastification';
import axios from 'axios'

const router = useRouter()
const toast = useToast()

const username = ref("")
const password = ref("")
const showPassword = ref(false)
const isLoading = ref(false)

const login = () => {
    isLoading.value = true
    axios.post('/api/auth/login', {
        username: username.value,
        password: password.value
    }).then((res) => {
        console.log(res);
        isLoading.value = false
    }).catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
        isLoading.value = false
    })

}
</script>
