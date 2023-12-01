import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'




export const useEmpleadosStore = defineStore('empleados', () => {
    const toast = useToast()
    let empleadosLista = ref([])
    const token = $cookies.get('user')?.token

    const fetchEmpleados = () => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            url: `/api/employees`,

        }).then(res => {
            empleadosLista.value = res.data
        }).catch(err => {
            console.log(err);
        })
    }

    async function crearEmpleado(body) {
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "POST",
                url: "/api/employees",
                data: body
            })

            const nuevoEmpleado = response.data?.employee
            empleadosLista.value.push(nuevoEmpleado)
            toast.success("Empleado Creado")
        } catch (error) {
            console.log(error);
            toast.error("Error al crear el empleado")
        }
    }



    return {
        empleadosLista,
        fetchEmpleados,
        crearEmpleado
    }
})
