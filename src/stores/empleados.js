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
            url: `/api/employees`
        }).then(res => {
            empleadosLista.value = res.data
        }).catch(err => {
            console.log(err);
        })
    }

    const createEmpleado = (body) => {
        axios.request({
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            url: "/api/employees"
        }).then(res => {
            const nuevoEmpleado = res.data?.employee
            empleadosLista.value.push(nuevoEmpleado)
            toast.success("Empleado Creado")
        }).catch(err => {
            console.log(err);
            toast.error("Error al crear el empleado")
        })
    }



    return {
        empleadosLista,
        fetchEmpleados
    }
})
