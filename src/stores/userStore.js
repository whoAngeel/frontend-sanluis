import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('userStore', () => {
    const state = {
        role: "",
        token: null,
        id: null
    }

    const setToken = (token) => {
        state.token = token;
    }
    const setRole = (role) => {
        state.role = role
    }
    const setId = (id) => {
        state.id = id
    }

    // const getEmployee = (id) => {
    //     axios.request({
    //         headers: {
    //             Authorization: `Bearer ${state.token}`
    //         },
    //         method: "GET",
    //         url: `/api/users/${id}`
    //     }).then((result) => {
    //         console.log(result.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    function $reset() {
        state.role = "";
        state.id = null
        state.token = null;
    }


    return { state, setToken, setRole, setId, $reset }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

// export const useUserStore = defineStore('user', {
//     state: () => {
//         return {
//             name: "John Doe",
//         }
//     },
//     getters: {
//         upper: (state)=>state.name.toUpperCase()
//     },
//     actions: {
//         change(name) {
//             this.name=name;
//         }
//     }
// })
